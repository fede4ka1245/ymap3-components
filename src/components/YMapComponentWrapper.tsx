import React, {useContext, useEffect, useMemo, useState} from 'react';
import {YMapsContextState} from "./YMapsContextState";
import {Package, YMapsComponentsState} from "../types";

function YMapComponentWrapper<Type extends React.JSX.IntrinsicAttributes>(
  componentName: string,
  YMapPackage?: Package
) {
  if (YMapPackage) {
    const component: React.FC<Type> = ({ ...props }) => {
      const { reactify, ymaps } = useContext(YMapsContextState) as YMapsComponentsState;
      const [Component, setComponent] = useState<React.FC<Type>>()

      useEffect(() => {
        if ((window as any)[YMapPackage]) {
          setComponent(reactify.module((window as any)[YMapPackage])[componentName] as React.FC<Type>);
        } else {
          ymaps.import(YMapPackage as any)
            .then((data) => {
              (window as any)[YMapPackage] = data;
              if (reactify.module(data)) {
                setComponent(reactify.module(data as any)[componentName] as React.FC<Type>);
              }
            })
        }
      }, []);

      if (!Component) {
        return null;
      }

      return (
        <>
          <Component
            {...props}
          />
        </>
      );
    }

    return component;
  }

  const component: React.FC<Type> = ({ ...props }) => {
    const { reactify, ymaps } = useContext(YMapsContextState) as YMapsComponentsState;
    const Component = useMemo(() => reactify.module(ymaps)[componentName] as React.FC<Type>, [reactify, ymaps]);

    return (
      <>
        <Component
          {...props}
        />
      </>
    );
  }

  return component;
}

export default YMapComponentWrapper;