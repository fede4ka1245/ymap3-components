import React, { ReactNode, useLayoutEffect, useState } from "react";
import { YMapDefaultModules, YMapsComponentsState } from "../types";
import { YMapsContextState } from "./YMapsContextState";
import { initYamaps } from "../shared";
import useIsomorphicEffect from "../hooks/useIsomorphicEffect";

export interface YMapComponentsProviderProps {
  apiKey: string;
  lang?: string;
  onLoad?: (params: YMapDefaultModules) => any;
  onError?: () => void;
  children: ReactNode | ReactNode[];
}

const YMapComponentsProvider: React.FC<YMapComponentsProviderProps> = ({
  apiKey,
  lang,
  children,
  onLoad,
  onError
}) => {
  const [state, setState] = useState<YMapsComponentsState>();

  useIsomorphicEffect(() => {
    initYamaps(apiKey, lang)
      .then((result) => {
        setState(result);
        onLoad?.(result);
      })
      .catch(() => {
        onError?.()
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

export default React.memo<YMapComponentsProviderProps>(YMapComponentsProvider);
