import React, { useContext, useState } from "react";
import { YMapsContextState } from "./YMapsContextState";
import { Package, YMapsComponentsState } from "../types";
import useIsomorphicEffect from "../hooks/useIsomorphicEffect";

function YMapComponentWrapper<RefType, ArgsType>(
  componentName: string,
  YMapPackage?: Package
) {
  let Component: React.FC<ArgsType>;
  const component: React.ForwardRefRenderFunction<RefType, ArgsType> = ({ ...props }, ref) => {
    const {reactify, ymaps} = useContext(
      YMapsContextState
    ) as YMapsComponentsState;
    const [isLoaded, setIsLoaded] = useState(false);

    useIsomorphicEffect(() => {
      if (!YMapPackage) {
        Component = reactify.module(ymaps)[componentName] as React.FC<ArgsType>;
        setIsLoaded(true);
      } else {
        if ((window as any)[YMapPackage]) {
          setIsLoaded(true);
          Component = reactify.module((window as any)[YMapPackage])[
            componentName
            ] as React.FC<ArgsType>;
        } else {
          ymaps.import(YMapPackage as any).then((data) => {
            (window as any)[YMapPackage] = data;
            if (reactify.module(data)) {
              setIsLoaded(true);
              Component = reactify.module(data as any)[
                componentName
                ] as React.FC<ArgsType>;
            }
          });
        }
      }
    }, []);

    if (!Component || !isLoaded) {
      return null;
    }

    return <Component ref={ref} {...props} />;
  }

  return React.forwardRef<RefType, ArgsType>(component);
}

export default YMapComponentWrapper;
