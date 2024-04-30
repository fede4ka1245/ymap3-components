import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { YMapsContextState } from "./YMapsContextState";
import { Package, YMapsComponentsState } from "../types";
import {
  IClusterMethod,
  YMapClusterer as YMapClustererHandle,
} from '@yandex/ymaps3-types/packages/clusterer';
import { YMapClusterer as YMapClustererReact } from '@yandex/ymaps3-types/packages/clusterer/react';

export type YMapClustererProps = Omit<
  React.ComponentProps<typeof YMapClustererReact>,
  'method'
> & {
  gridSize?: number;
  method?: IClusterMethod;
};

export const YMapCustomClusterer = React.forwardRef<
  YMapClustererHandle,
  YMapClustererProps
>(({ gridSize, method, ...props }, ref) => {
  const { reactify, ymaps } = useContext(
    YMapsContextState
  ) as YMapsComponentsState;
  const [data, setData] = useState<any>();
  const [YMapClustererComponent, clusterMethod] = useMemo(() => {
    if (data) {
      const data = (window as any)[Package.Clusterer];
      return [reactify.module(data)["YMapClusterer"] as React.ForwardRefExoticComponent<YMapClustererProps> | undefined, method || reactify.module(data)["clusterByGrid"]];
    }
    return [];
  }, [data]);

  useEffect(() => {
    if ((window as any)[Package.Clusterer]) {
      setData((window as any)[Package.Clusterer]);
    } else {
      ymaps.import(Package.Clusterer as any).then((data) => {
        (window as any)[Package.Clusterer] = data;
        setData(data);
      });
    }
  }, []);

  const gridSizedMethod = useMemo(() => {
    if (clusterMethod && gridSize) {
      return clusterMethod({ gridSize })
    }
  }, [clusterMethod, gridSize]);

  if (!YMapClustererComponent || !gridSizedMethod) {
    return <></>;
  }

  return (
    <YMapClustererComponent
      ref={ref as any}
      method={gridSizedMethod}
      {...props}
    />
  );
});
