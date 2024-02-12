import React, { useContext, useLayoutEffect, useState } from "react";
import { YMapsContextState } from "./YMapsContextState";
import { Package, YMapsComponentsState } from "../types";
import useIsomorphicEffect from "../hooks/useIsomorphicEffect";

function YMapComponentWrapper<Type extends React.JSX.IntrinsicAttributes>(
  componentName: string,
  YMapPackage?: Package,
  isRef: boolean = false
) {
  let Component: React.FC<Type>;
  if (isRef) {
    const component: React.FC<Type> = ({ ...props }, ref) => {
      const { reactify, ymaps } = useContext(
        YMapsContextState
      ) as YMapsComponentsState;
      const [isLoaded, setIsLoaded] = useState(false);

      useIsomorphicEffect(() => {
        if (!YMapPackage) {
          Component = reactify.module(ymaps)[componentName] as React.FC<Type>;
          setIsLoaded(true);
        } else {
          if ((window as any)[YMapPackage]) {
            setIsLoaded(true);
            Component = reactify.module((window as any)[YMapPackage])[
              componentName
            ] as React.FC<Type>;
          } else {
            ymaps.import(YMapPackage as any).then((data) => {
              (window as any)[YMapPackage] = data;
              if (reactify.module(data)) {
                setIsLoaded(true);
                Component = reactify.module(data as any)[
                  componentName
                ] as React.FC<Type>;
              }
            });
          }
        }
      }, []);

      if (!Component || !isLoaded) {
        return null;
      }

      return <Component ref={ref} {...props} />;
    };

    return React.forwardRef(
      component as React.ForwardRefRenderFunction<Type, any>
    );
  }

  const component: React.FC<Type> = ({ ...props }) => {
    const { reactify, ymaps } = useContext(
      YMapsContextState
    ) as YMapsComponentsState;
    const [isLoaded, setIsLoaded] = useState(false);

    useLayoutEffect(() => {
      if (!YMapPackage) {
        Component = reactify.module(ymaps)[componentName] as React.FC<Type>;
        setIsLoaded(true);
      } else {
        if ((window as any)[YMapPackage]) {
          setIsLoaded(true);
          Component = reactify.module((window as any)[YMapPackage])[
            componentName
          ] as React.FC<Type>;
        } else {
          ymaps.import(YMapPackage as any).then((data) => {
            (window as any)[YMapPackage] = data;
            if (reactify.module(data)) {
              setIsLoaded(true);
              Component = reactify.module(data as any)[
                componentName
              ] as React.FC<Type>;
            }
          });
        }
      }
    }, []);

    if (!Component || !isLoaded) {
      return null;
    }

    return <Component {...props} />;
  };

  return component;
}

export default YMapComponentWrapper;
