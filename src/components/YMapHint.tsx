import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {YMapsContextState} from "./YMapsContextState";
import {Package, YMapsComponentsState} from "../types";
import {YMapFeature, YMapHotspot, YMapMarker} from "@yandex/ymaps3-types/imperative";

export type Hint = YMapFeature | YMapMarker | YMapHotspot | undefined;
export type YMapHintProps = {
  hint: (hint: Hint) => unknown;
  children: React.ReactNode [] | React.ReactNode;
};
export type YMapHintContextType = { hint: Hint }
export const YMapHintContext = createContext<YMapHintContextType>({ hint: undefined });
export type YMapHintWrapperProps = {
  children: React.ReactNode [] | React.ReactNode;
  context: any;
}

const YMapHintWrapper: React.FC<YMapHintWrapperProps> = ({ children, context }) => {
  const hint = useContext(context) as any;

  return (
    <YMapHintContext.Provider value={hint}>
      {children}
    </YMapHintContext.Provider>
  );
}

const YMapHint: React.FC<YMapHintProps> = ({ children, hint }) => {
  const { reactify, ymaps } = useContext(YMapsContextState) as YMapsComponentsState;
  const [context, setContext] = useState<any>();
  const YMapHintComponent: React.FC<YMapHintProps> | undefined = useMemo(() => {
    if (context) {
      const data = (window as any)[Package.Hint];
      return reactify.module(data)['YMapHint'] as React.FC<YMapHintProps>;
    }
  }, [context]);

  useEffect(() => {
    if ((window as any)[Package.Hint]) {
      const data = (window as any)[Package.Hint];
      setContext(reactify.module(data)['YMapHintContext'] as any);
    } else {
      ymaps.import(Package.Hint as any)
        .then((data) => {
          (window as any)[Package.Hint] = data;
          if (reactify.module(data)) {
            setContext(reactify.module(data as any)['YMapHintContext'] as any);
          }
        })
    }
  }, []);

  if (!YMapHintComponent || !context || !children) {
    return (
      <></>
    )
  }

  return (
    <YMapHintComponent hint={hint}>
      <YMapHintWrapper context={context}>
        {children}
      </YMapHintWrapper>
    </YMapHintComponent>
  );
}

export default YMapHint;