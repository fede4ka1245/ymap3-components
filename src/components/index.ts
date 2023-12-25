import YMapComponentWrapper from "./YMapComponentWrapper";
import YMapComponentsProvider from "./YMapComponentsProvider";
import {
  YMap as YMapType,
  YMapThemeContext as ThemeContextProps,
  YMapProps,
  YMapLayerProps,
  YMapControlProps,
  YMapControlsProps,
  YMapControlButtonProps,
  YMapTileDataSourceProps,
  YMapMarkerProps,
  YMapListenerProps,
  YMapFeatureProps,
  YMapDefaultFeaturesLayerProps,
  YMapDefaultSchemeLayerProps,
  YMapCollection,
  YMapContainerProps,
  YMapDefaultSatelliteLayerProps,
  YMapFeatureDataSourceProps,
} from "@yandex/ymaps3-types";
import React from "react";
import {YMapGeolocationControl as YMapGeolocationControlType, YMapZoomControl as YMapZoomControlType} from "@yandex/ymaps3-types/packages/controls";
import {YMapClusterer as YMapClusterrType} from "@yandex/ymaps3-types/packages/clusterer";
import {YMapDefaultMarker as YMapDefaultMarkerType} from "@yandex/ymaps3-types/packages/markers";
import {Package} from "../types";
import YMapHint, { YMapHintContext } from "./YMapHint";

const YMapGeolocationControl = YMapComponentWrapper<YMapGeolocationControlType & React.JSX.IntrinsicAttributes>('YMapGeolocationControl', Package.Controls);
const YMapZoomControl = YMapComponentWrapper<YMapZoomControlType & React.JSX.IntrinsicAttributes>('YMapZoomControl', Package.Controls);
const YMapClusterer = YMapComponentWrapper<YMapClusterrType & React.JSX.IntrinsicAttributes>('YMapClusterer', Package.Clusterer);
const YMapDefaultMarker = YMapComponentWrapper<YMapDefaultMarkerType & React.JSX.IntrinsicAttributes>('YMapDefaultMarker', Package.Markers);
const YMap = YMapComponentWrapper<YMapProps & React.JSX.IntrinsicAttributes>('YMap', undefined, true) as React.ForwardRefRenderFunction<YMapProps & React.JSX.IntrinsicAttributes, YMapType>;
const ThemeContext = YMapComponentWrapper<ThemeContextProps & React.JSX.IntrinsicAttributes>('ThemeContext');
const YMapDefaultSchemeLayer = YMapComponentWrapper<YMapDefaultSchemeLayerProps & React.JSX.IntrinsicAttributes>('YMapDefaultSchemeLayer');
const YMapDefaultFeaturesLayer = YMapComponentWrapper<YMapDefaultFeaturesLayerProps & React.JSX.IntrinsicAttributes>('YMapDefaultFeaturesLayer');
const YMapLayer = YMapComponentWrapper<YMapLayerProps & React.JSX.IntrinsicAttributes>('YMapLayer');
const YMapControl = YMapComponentWrapper<YMapControlProps & React.JSX.IntrinsicAttributes>('YMapControl');
const YMapControls = YMapComponentWrapper<YMapControlsProps & React.JSX.IntrinsicAttributes>('YMapControls');
const YMapControlButton = YMapComponentWrapper<YMapControlButtonProps & React.JSX.IntrinsicAttributes>('YMapControlButton');
const YMapTileDataSource = YMapComponentWrapper<YMapTileDataSourceProps & React.JSX.IntrinsicAttributes>('YMapTileDataSource');
const YMapMarker = YMapComponentWrapper<YMapMarkerProps & React.JSX.IntrinsicAttributes>('YMapMarker');
const YMapListener = YMapComponentWrapper<YMapListenerProps & React.JSX.IntrinsicAttributes>('YMapListener');
const YMapFeature = YMapComponentWrapper<YMapFeatureProps & React.JSX.IntrinsicAttributes>('YMapFeature');
const YMapDefaultSatelliteLayer = YMapComponentWrapper<YMapDefaultSatelliteLayerProps & React.JSX.IntrinsicAttributes>('YMapDefaultSatelliteLayer');
const YMapCollectionComponent = YMapComponentWrapper<YMapCollection & React.JSX.IntrinsicAttributes>('YMapCollection');
const YMapContainer = YMapComponentWrapper<YMapContainerProps<any> & React.JSX.IntrinsicAttributes>('YMapContainer');
const YMapFeatureDataSource = YMapComponentWrapper<YMapFeatureDataSourceProps & React.JSX.IntrinsicAttributes>('YMapFeatureDataSource');

export {
  YMapHint,
  YMapHintContext,
  YMapDefaultMarker,
  YMapClusterer,
  YMapGeolocationControl,
  YMapZoomControl,
  ThemeContext,
  YMapComponentsProvider,
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapLayer,
  YMapControl,
  YMapControls,
  YMapControlButton,
  YMapTileDataSource,
  YMapMarker,
  YMapListener,
  YMapFeature,
  YMapDefaultSatelliteLayer,
  YMapCollectionComponent as YMapCollection,
  YMapContainer,
  YMapFeatureDataSource,
};