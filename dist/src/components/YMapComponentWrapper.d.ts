import React from 'react';
import { Package } from "../types";
declare function YMapComponentWrapper<Type extends React.JSX.IntrinsicAttributes>(componentName: string, YMapPackage?: Package, isRef?: boolean): React.FC<Type> | React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<Type>>;
export default YMapComponentWrapper;
