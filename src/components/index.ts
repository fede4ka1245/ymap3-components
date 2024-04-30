import YMapComponentWrapper from "./YMapComponentWrapper";
import YMapComponentsProvider from "./YMapComponentsProvider";
import React from "react";
import { Package } from "../types";
import YMapHint, { YMapHintContext } from "./YMapHint";
import * as YMaps from '@yandex/ymaps3-types';
import * as YMapsReact from '@yandex/ymaps3-types/react';
import * as Controls from '@yandex/ymaps3-types/packages/controls';
import * as ControlsReact from '@yandex/ymaps3-types/packages/controls/react';
import * as Markers from '@yandex/ymaps3-types/packages/markers';
import * as MarkersReact from '@yandex/ymaps3-types/packages/markers/react';
import * as Clusterer from '@yandex/ymaps3-types/packages/clusterer';
import * as ClustererReact from '@yandex/ymaps3-types/packages/clusterer/react';

export { YMapCustomClusterer } from "./YMapCustomClusterer";

export {
  YMapHint,
  YMapHintContext,
  YMapComponentsProvider
};

export type YMapGeolocationControlProps = React.ComponentPropsWithoutRef<typeof ControlsReact.YMapGeolocationControl>;
export const YMapGeolocationControl = YMapComponentWrapper<
  Controls.YMapGeolocationControl,
  YMapGeolocationControlProps
>("YMapGeolocationControl", Package.Controls);

export type YMapZoomControlProps = React.ComponentPropsWithoutRef<typeof ControlsReact.YMapZoomControl>;
export const YMapZoomControl = YMapComponentWrapper<
  Controls.YMapZoomControlProps,
  YMapZoomControlProps
>("YMapZoomControl", Package.Controls);

export type YMapClustererProps = React.ComponentPropsWithoutRef<typeof ClustererReact.YMapClusterer>;
export const YMapClusterer = YMapComponentWrapper<
  Clusterer.YMapClusterer,
  YMapClustererProps
>("YMapClusterer", Package.Clusterer);

export type YMapDefaultMarkerProps = React.ComponentPropsWithoutRef<typeof MarkersReact.YMapDefaultMarker>;
export const YMapDefaultMarker = YMapComponentWrapper<
  Markers.YMapDefaultMarker,
  YMapDefaultMarkerProps
>("YMapDefaultMarker", Package.Markers);

export type YMapProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMap>;
export const YMap = YMapComponentWrapper<YMaps.YMap, YMapProps>("YMap");

export type YMapTileDataSourceProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapTileDataSource>;
export const YMapTileDataSource = YMapComponentWrapper<YMaps.YMapTileDataSource, YMapTileDataSourceProps>("YMapTileDataSource");

export const ThemeContext = YMapComponentWrapper<YMaps.YMapThemeContext, typeof YMapsReact.ThemeContext | any>("ThemeContext");

export type YMapControlProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapControl>;

export const YMapControl = YMapComponentWrapper<YMaps.YMapControl, YMapControlProps>("YMapControl");

export type YMapLayerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapLayer>;
export const YMapLayer = YMapComponentWrapper<YMaps.YMapLayer, YMapLayerProps>("YMapLayer");

export type YMapMarkerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapMarker>;
export const YMapMarker = YMapComponentWrapper<YMaps.YMapMarker, YMapMarkerProps>('YMapMarker');

export type YMapDefaultSchemeLayerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapDefaultSchemeLayer>;
export const YMapDefaultSchemeLayer = YMapComponentWrapper<YMaps.YMapDefaultSchemeLayer, YMapDefaultSchemeLayerProps>('YMapDefaultSchemeLayer');

export type YMapDefaultFeaturesLayerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapDefaultFeaturesLayer>;
export const YMapDefaultFeaturesLayer = YMapComponentWrapper<YMaps.YMapDefaultFeaturesLayer, YMapDefaultFeaturesLayerProps>('YMapDefaultFeaturesLayer');

export type YMapDefaultSatelliteLayerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapDefaultSatelliteLayer>;
export const YMapDefaultSatelliteLayer = YMapComponentWrapper<YMaps.YMapDefaultSatelliteLayer, YMapDefaultSatelliteLayerProps>('YMapDefaultSatelliteLayer');

export type YMapListenerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapListener>;
export const YMapListener = YMapComponentWrapper<YMaps.YMapListener, YMapListenerProps>('YMapListener');

export type YMapControlsProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapControls>;
export const YMapControls = YMapComponentWrapper<YMaps.YMapControls, YMapControlsProps>('YMapControls');

export type YMapControlButtonProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapControlButton>;
export const YMapControlButton = YMapComponentWrapper<YMaps.YMapControlButton, YMapControlButtonProps>('YMapControlButton');

export type YMapContainerProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapContainer>;
export const YMapContainer = YMapComponentWrapper<YMaps.YMapContainer, YMapContainerProps>('YMapContainer');

export type YMapCollectionProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapCollection>;
export const YMapCollection = YMapComponentWrapper<YMaps.YMapCollection, YMapCollectionProps>('YMapCollection');

export type YMapFeatureProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapFeature>;
export const YMapFeature = YMapComponentWrapper<YMaps.YMapFeature, YMapFeatureProps>('YMapFeature');

export type YMapFeatureDataSourceProps = React.ComponentPropsWithoutRef<typeof YMapsReact.YMapFeatureDataSource>;
export const YMapFeatureDataSource = YMapComponentWrapper<YMaps.YMapFeatureDataSource, YMapFeatureDataSourceProps>('YMapFeatureDataSource');
