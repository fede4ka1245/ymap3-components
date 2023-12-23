import React from "react";
import { YMapFeature, YMapHotspot, YMapMarker } from "@yandex/ymaps3-types/imperative";
export type Hint = YMapFeature | YMapMarker | YMapHotspot | undefined;
export type YMapHintProps = {
    hint: (hint: Hint) => unknown;
    children: React.ReactNode[] | React.ReactNode;
};
export type YMapHintContextType = {
    hint: Hint;
};
export declare const YMapHintContext: React.Context<YMapHintContextType>;
export type YMapHintWrapperProps = {
    children: React.ReactNode[] | React.ReactNode;
    context: any;
};
declare const YMapHint: React.FC<YMapHintProps>;
export default YMapHint;
