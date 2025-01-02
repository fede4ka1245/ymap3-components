# ymap3-components

[![NPM Version](https://img.shields.io/npm/v/ymap3-components?logo=npm&color=gray)](https://www.npmjs.com/package/ymap3-components?activeTab=readme)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/ymap3-components)](https://www.npmjs.com/package/ymap3-components?activeTab=readme)

### Library to get components of ymaps3 via <code>import</code>
**React wrapper around ymaps3: This library is an alternative way of getting
Yandex map components:** use <code>import</code>
instead of creating script and getting components 
via asynchronous <code>window.ymaps3.import</code>

Library is written on typescript with <b>@yandex/ymaps3-types</b>.
## Install Library

```
npm i ymap3-components
```

## Usage with typescript
```
npm i -D @yandex/ymaps3-types@latest
```

## Examples
- Example 1: [map and rect features with hints](https://codesandbox.io/p/sandbox/elegant-burnell-wxn9cy)
- Example 2: [map with clusterer](https://codesandbox.io/p/sandbox/ymap3-components-xk3d74)
- Example 3: [maps with routes](https://codesandbox.io/p/sandbox/ymap3-routes-nncmsr?file=%2Fsrc%2FApp.js%3A2%2C39)
 (For routes you need to create an API key for the Distance Matrix and Route Planning in the Developer Dashboard)
## Motivation

- keeps your components simple
- this is easier than suggestions in [Official documentation](https://yandex.ru/dev/jsapi30/doc/ru/)
- no need to write logic of loading components and modules for them
- no need to create script or configure externals in webpack

####  ✅ Your code with this library
```javascript jsx
import React from "react";
import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer
  // ...other components
} from "ymap3-components";
import { features, LOCATION } from './helpers'

function Map() {
  return (
    <YMapComponentsProvider apiKey={process.env.REACT_APP_YMAP_KEY}>
      <YMap location={location}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapDefaultMarker
          coordinates={LOCATION.coordinates}
        />
      </YMap>
    </YMapComponentsProvider>
  );
}

export default Map;
```

####  ❌ Your code without this library

```javascript jsx
import React, {useEffect, useMemo} from "react";
import {features, LOCATION} from './helpers'

function Map() {
  const [data, setData] = useState(); 
  const {
    YMap,
    // ...other components
  } = useMemo(() => {
    if (data?.reactify) {
      return reactify.module(data.ymap);
    }
  }, [data]);

  useEffect(() => {
    const script = document.createElement('script');
    document.body.appendChild(script);
    script.type = "text/javascript";
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${key}&lang=${lang}`;
    script.onload = async () => {
      const ymaps = window.ymaps3
      await ymaps.ready;
      const ymaps3Reactify = await ymaps.import('@yandex/ymaps3-reactify');
      const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);

      setData({
        reactify,
        ymaps
      });
      /*
      and other logic which is not connected with rendering
      to load ymap modules like YMapDefaultMarker
      */
    }
  }, [])
  
  if (!YMap) {
    return null;
  }

  return (
    <YMap location={location}>
      <YMapDefaultSchemeLayer/>
      <YMapDefaultFeaturesLayer/>
      <YMapDefaultMarker
        coordinates={LOCATION.coordinates}
      />
    </YMap>
  );
}

export default Map;
```

## Getting Stated

1) Get api key for [map js api](https://developer.tech.yandex.ru/services/3)
2) Set <b>domain</b> where you will host ymap
3) For development change your <b>/etc/host</b>
to proxy <b>domain</b> on your localhost 
(map will work on <b>http://{domain}:{port}</b>)
4) [Install](#install-library) and use library

Check example in codesandbox [below](#example). For more comprehensive information go to [Official documentation](https://yandex.ru/dev/jsapi30/doc/ru/)

## API 

#### YMapComponentsProvider API
YMapComponentsProvider - root component which has to contain
another library's components as child nodes.
```typescript
interface YMapComponentsProviderProps {
  apiKey: string
  lang?: string
  onLoad?: (params: {
    reactify: Reactify;
    ymaps: typeof import("@yandex/ymaps3-types/index");
  }) => any
  onError: (e?: unknown) => void
  children: ReactNode | ReactNode []
}
```

```typescript
type getYmaps3ReadyObject = () => Promise<YMapsV3>;
```

#### Other components has same api as provided in [Official documentation](https://yandex.ru/dev/jsapi30/doc/ru/)
#### Library provides api for these components: 

- YMapComponentsProvider
- YMap
- YMapDefaultMarker
- YMapHintContext
- YMapHint
- YMapClusterer
- YMapZoomControl
- YMapGeolocationControl
- ThemeContext
- YMapDefaultSchemeLayer
- YMapDefaultFeaturesLayer
- YMapLayer
- YMapControl
- YMapControls
- YMapControlButton
- YMapTileDataSource
- YMapMarker
- YMapListener
- YMapFeature
- YMapDefaultSatelliteLayer
- YMapCollection
- YMapContainer
- YMapFeatureDataSource
- YMapCustomClusterer
