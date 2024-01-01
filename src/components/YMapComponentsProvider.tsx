import React, {ReactNode, useLayoutEffect, useState} from 'react';
import {YMapDefaultModules, YMapsComponentsState} from "../types";
import {YMapsContextState} from "./YMapsContextState";
import {initYamaps} from "../shared";

export interface YMapComponentsProviderProps {
  apiKey: string,
  lang?: string,
  onLoad?: (params: YMapDefaultModules) => any
  children: ReactNode | ReactNode []
}

const YMapComponentsProvider: React.FC<YMapComponentsProviderProps> = ({ apiKey, lang, children, onLoad }) => {
  const [state, setState] = useState<YMapsComponentsState>();

  useLayoutEffect(() => {
    initYamaps(apiKey, lang)
      .then((result) => {
        setState(result);
        if (onLoad) {
          onLoad(result);
        }
      })
  }, []);

  if (!state) {
    return <></>;
  }

  return (
    <YMapsContextState.Provider value={state}>
      { children }
    </YMapsContextState.Provider>
  );
};

export default React.memo<YMapComponentsProviderProps>(YMapComponentsProvider);