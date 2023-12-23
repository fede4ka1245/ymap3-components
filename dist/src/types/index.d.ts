import { Reactify } from "@yandex/ymaps3-types/reactify";
export declare enum Package {
    CartesianProjection = "@yandex/ymaps3-cartesian-projection@0.0.1",
    Clusterer = "@yandex/ymaps3-clusterer@0.0.1",
    Controls = "@yandex/ymaps3-controls@0.0.1",
    Hint = "@yandex/ymaps3-hint@0.0.1",
    Markers = "@yandex/ymaps3-markers@0.0.1",
    SphericalMercatorProjection = "@yandex/ymaps3-spherical-mercator-projection@0.0.1"
}
export type YMapsV3 = typeof import("@yandex/ymaps3-types/index");
export interface YMapDefaultModules {
    reactify: Reactify;
    ymaps: YMapsV3;
}
export interface YMapsComponentsState extends YMapDefaultModules {
}
