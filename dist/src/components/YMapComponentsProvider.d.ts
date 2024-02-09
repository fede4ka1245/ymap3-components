import React, { ReactNode } from "react";
import { YMapDefaultModules } from "../types";
export interface YMapComponentsProviderProps {
    apiKey: string;
    lang?: string;
    onLoad?: (params: YMapDefaultModules) => any;
    children: ReactNode | ReactNode[];
}
declare const _default: React.NamedExoticComponent<YMapComponentsProviderProps>;
export default _default;
