import React, {ReactNode, useContext, useState} from "react";
import ReactDOM from "react-dom";
import {Package, YMapsV3, YMapsComponentsState, YMapDefaultModules} from "../types";
import YMapHint, { YMapHintContext } from "./YMapHint";
import * as YMaps from '@yandex/ymaps3-types';
import * as YMapsReact from '@yandex/ymaps3-types/react';
import * as Controls from '@yandex/ymaps3-types/packages/controls';
import * as ControlsReact from '@yandex/ymaps3-types/packages/controls/react';
import * as Markers from '@yandex/ymaps3-types/packages/markers';
import * as MarkersReact from '@yandex/ymaps3-types/packages/markers/react';
import * as Clusterer from '@yandex/ymaps3-types/packages/clusterer';
import * as ClustererReact from '@yandex/ymaps3-types/packages/clusterer/react';
import { YMapsContextState } from "./YMapsContextState";
import useIsomorphicEffect from "../hooks/useIsomorphicEffect";
import {Apikeys} from "@yandex/ymaps3-types/imperative/config";
import {Reactify} from "@yandex/ymaps3-types/reactify";

class EventBus<DetailType = any> {
    private eventTarget: EventTarget;
    constructor(description = '') { this.eventTarget = document.appendChild(document.createComment(description)); }
    on(type: string, listener: (event: CustomEvent<DetailType>) => void) { this.eventTarget.addEventListener(type, listener as any); }
    once(type: string, listener: (event: CustomEvent<DetailType>) => void) { this.eventTarget.addEventListener(type, listener as any, { once: true }); }
    off(type: string, listener: (event: CustomEvent<DetailType>) => void) { this.eventTarget.removeEventListener(type, listener as any); }
    emit(type: string, detail?: DetailType) { return this.eventTarget.dispatchEvent(new CustomEvent(type, { detail })); }
}

const mapEventBus = new EventBus<string>('ymaps3-components');

let loadPromise: Promise<{
    ymaps: YMapsV3,
    reactify: Reactify
}> | null = null;

export const initYamaps = async ({
    key,
    lang = "ru_RU",
    coordorder,
    mode,
    apiKeys,
    reuseLoadPromise,
    nonce
}: {
    key: string,
    lang: string,
    coordorder?: 'latlong' | 'longlat',
    mode?: 'release' | 'debug',
    apiKeys?: Apikeys,
    reuseLoadPromise?: boolean,
    nonce?: string
}): Promise<YMapDefaultModules> => {
        loadPromise = (reuseLoadPromise && loadPromise) || new Promise(async (resolve, reject) => {
            try {
                if ((window as any).ymaps3) {
                    const ymaps: YMapsV3 = (window as any).ymaps3;
                    await ymaps.ready;
                    const ymaps3Reactify = await ymaps.import("@yandex/ymaps3-reactify");
                    const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);

                    resolve({
                        ymaps,
                        reactify,
                    });
                } else {
                    const script = document.createElement("script");
                    document.body.appendChild(script);
                    script.type = "text/javascript";

                    if (nonce) {
                        script.nonce = nonce;
                    }

                    const query = new URLSearchParams({
                        apikey: key,
                        lang: lang,
                    });
                    if (coordorder) {
                        query.set('coordorder', coordorder);
                    }
                    if (mode) {
                        query.set('mode', mode);
                    }

                    script.src = `https://api-maps.yandex.ru/v3/?${query.toString()}`;
                    script.onload = async () => {
                        const ymaps: YMapsV3 = (window as any).ymaps3;
                        await ymaps.ready;

                        if (apiKeys) {
                            ymaps.getDefaultConfig().setApikeys(apiKeys);
                        }

                        const ymaps3Reactify = await ymaps.import("@yandex/ymaps3-reactify");
                        const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);

                        resolve({
                            ymaps,
                            reactify,
                        });
                    };

                    script.onerror = reject;
                }
            } catch(e){
                (e)
            }
        })

        return loadPromise;
};

export interface YMapComponentsProviderProps {
    apiKey: string;
    lang?: string;
    apiKeys?: Apikeys;
    coordorder?: 'latlong' | 'longlat';
    mode?: 'release' | 'debug';
    onLoad?: (params: YMapDefaultModules) => any;
    onError?: (error: any) => void;
    children: ReactNode | ReactNode[];
    reuseLoadPromise?: boolean;
    nonce?: string;
}

const YMapComponentsProviderBase: React.FC<YMapComponentsProviderProps> = ({
   apiKey,
   lang,
   coordorder,
   mode,
   children,
   onLoad,
   onError,
   apiKeys,
   reuseLoadPromise,
   nonce
}) => {
    const [state, setState] = useState<YMapsComponentsState>();

    useIsomorphicEffect(() => {
        initYamaps({ key: apiKey, lang: lang as string, coordorder, mode, apiKeys, reuseLoadPromise, nonce })
            .then((result) => {
                setState(result);
                onLoad?.(result);
                mapEventBus.emit('ready');
            })
            .catch((e) => {
                onError?.(e)
            });
    }, []);

    if (!state) {
        return <></>;
    }

    return (
        <YMapsContextState.Provider value={state}>
            {children}
        </YMapsContextState.Provider>
    );
};
const YMapComponentsProvider = React.memo<YMapComponentsProviderProps>(YMapComponentsProviderBase);

function YMapComponentFabric<RefType, ArgsType>(
    componentName: string,
    YMapPackage?: Package
) {
    let Component: React.FC<ArgsType>;
    const component: React.ForwardRefRenderFunction<RefType, ArgsType> = ({ ...props }, ref) => {
        const {reactify, ymaps} = useContext(
            YMapsContextState
        ) as YMapsComponentsState;
        const [isLoaded, setIsLoaded] = useState(false);

        useIsomorphicEffect(() => {
            if (!YMapPackage) {
                Component = reactify.module(ymaps)[componentName] as React.FC<ArgsType>;
                setIsLoaded(true);
            } else {
                if ((window as any)[YMapPackage]) {
                    setIsLoaded(true);
                    Component = reactify.module((window as any)[YMapPackage])[
                        componentName
                        ] as React.FC<ArgsType>;
                } else {
                    ymaps.import(YMapPackage as any).then((data) => {
                        (window as any)[YMapPackage] = data;
                        if (reactify.module(data)) {
                            setIsLoaded(true);
                            Component = reactify.module(data as any)[
                                componentName
                                ] as React.FC<ArgsType>;
                        }
                    });
                }
            }
        }, []);

        if (!Component || !isLoaded) {
            return null;
        }

        return <Component ref={ref} {...props} />;
    }

    return React.forwardRef<RefType, ArgsType>(component);
}

export { YMapCustomClusterer } from "./YMapCustomClusterer";

export {
  YMapHint,
  YMapHintContext,
  YMapComponentsProvider
};

export type YMapGeolocationControlProps = React.ComponentPropsWithoutRef<typeof ControlsReact.YMapGeolocationControl>;
export const YMapGeolocationControl = YMapComponentFabric<
  Controls.YMapGeolocationControl,
  YMapGeolocationControlProps
>("YMapGeolocationControl", Package.Controls);

export type YMapZoomControlProps = React.ComponentPropsWithoutRef<typeof ControlsReact.YMapZoomControl>;
export const YMapZoomControl = YMapComponentFabric<
  Controls.YMapZoomControlProps,
  YMapZoomControlProps
>("YMapZoomControl", Package.Controls);

export type YMapClustererProps = React.ComponentPropsWithoutRef<typeof ClustererReact.YMapClusterer>;
export const YMapClusterer = YMapComponentFabric<
  Clusterer.YMapClusterer,
  YMapClustererProps
>("YMapClusterer", Package.Clusterer);

export type YMapDefaultMarkerProps = React.ComponentPropsWithoutRef<typeof MarkersReact.YMapDefaultMarker>;
export const YMapDefaultMarker = YMapComponentFabric<
  Markers.YMapDefaultMarker,
  YMapDefaultMarkerProps
>("YMapDefaultMarker", Package.Markers);

export type YMapProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMap>;
export const YMap = YMapComponentFabric<YMaps.YMap, YMapProps>("YMap");

export type YMapTileDataSourceProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapTileDataSource>;
export const YMapTileDataSource = YMapComponentFabric<YMaps.YMapTileDataSource, YMapTileDataSourceProps>("YMapTileDataSource");

export const ThemeContext = YMapComponentFabric<YMaps.YMapThemeContext, typeof YMapsReact.ThemeContext | any>("ThemeContext");

export type YMapControlProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapControl>;

export const YMapControl = YMapComponentFabric<YMaps.YMapControl, YMapControlProps>("YMapControl");

export type YMapLayerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapLayer>;
export const YMapLayer = YMapComponentFabric<YMaps.YMapLayer, YMapLayerProps>("YMapLayer");

export type YMapMarkerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapMarker>;
export const YMapMarker = YMapComponentFabric<YMaps.YMapMarker, YMapMarkerProps>('YMapMarker');

export type YMapDefaultSchemeLayerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapDefaultSchemeLayer>;
export const YMapDefaultSchemeLayer = YMapComponentFabric<YMaps.YMapDefaultSchemeLayer, YMapDefaultSchemeLayerProps>('YMapDefaultSchemeLayer');

export type YMapDefaultFeaturesLayerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapDefaultFeaturesLayer>;
export const YMapDefaultFeaturesLayer = YMapComponentFabric<YMaps.YMapDefaultFeaturesLayer, YMapDefaultFeaturesLayerProps>('YMapDefaultFeaturesLayer');

export type YMapDefaultSatelliteLayerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapDefaultSatelliteLayer>;
export const YMapDefaultSatelliteLayer = YMapComponentFabric<YMaps.YMapDefaultSatelliteLayer, YMapDefaultSatelliteLayerProps>('YMapDefaultSatelliteLayer');

export type YMapListenerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapListener>;
export const YMapListener = YMapComponentFabric<YMaps.YMapListener, YMapListenerProps>('YMapListener');

export type YMapControlsProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapControls>;
export const YMapControls = YMapComponentFabric<YMaps.YMapControls, YMapControlsProps>('YMapControls');

export type YMapControlButtonProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapControlButton>;
export const YMapControlButton = YMapComponentFabric<YMaps.YMapControlButton, YMapControlButtonProps>('YMapControlButton');

export type YMapContainerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapContainer>;
export const YMapContainer = YMapComponentFabric<YMaps.YMapContainer, YMapContainerProps>('YMapContainer');

export type YMapCollectionProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapCollection>;
export const YMapCollection = YMapComponentFabric<YMaps.YMapCollection, YMapCollectionProps>('YMapCollection');

export type YMapFeatureProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapFeature>;
export const YMapFeature = YMapComponentFabric<YMaps.YMapFeature, YMapFeatureProps>('YMapFeature');

export type YMapFeatureDataSourceProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapFeatureDataSource>;
export const YMapFeatureDataSource = YMapComponentFabric<YMaps.YMapFeatureDataSource, YMapFeatureDataSourceProps>('YMapFeatureDataSource');

export const getYmaps3ReadyObject = (): Promise<YMapsV3> => {
    return new Promise((resolve) => {
        if ((window as any).ymaps3) {
            const ymaps3: YMapsV3 = (window as any).ymaps3;
            ymaps3.ready.then(() => resolve(ymaps3));
        } else {
            mapEventBus.once('ready', () => {
                resolve((window as any).ymaps3)
            });
        }
    })
}
