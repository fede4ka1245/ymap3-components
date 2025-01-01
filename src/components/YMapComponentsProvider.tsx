import React, { ReactNode, useState } from "react";
import { YMapDefaultModules, YMapsComponentsState } from "../types";
import { YMapsContextState } from "./YMapsContextState";
import { initYamaps } from "../shared";
import useIsomorphicEffect from "../hooks/useIsomorphicEffect";

export interface YMapComponentsProviderProps {
  apiKey: string;
  lang?: string;
  coordorder?: 'latlong' | 'longlat';
  mode?: 'release' | 'debug';
  onLoad?: (params: YMapDefaultModules) => any;
  onError?: (error: any) => void;
  children: ReactNode | ReactNode[];
}

const YMapComponentsProvider: React.FC<YMapComponentsProviderProps> = ({
  apiKey,
  lang,
  coordorder,
  mode,
  children,
  onLoad,
  onError
}) => {
  const [state, setState] = useState<YMapsComponentsState>();

  useIsomorphicEffect(() => {
    initYamaps(apiKey, lang, coordorder, mode)
      .then((result) => {
        setState(result);
        onLoad?.(result);
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

export default React.memo<YMapComponentsProviderProps>(YMapComponentsProvider);
