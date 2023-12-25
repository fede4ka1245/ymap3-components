# ymap3-components

Wrapper above react wrapper yandex map v3 api :3

Library is written on typescript with <b>@yandex/ymaps3-types</b>.

## Motivation

- With this lib you can create yandex map in your react
application much more faster
- You will write less code
- Your code will be much more beautiful

####  ✅ Your code with this library
```javascript jsx
import React from "react";
import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer
  // ...other components
} from "ymapv3-components";
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

## Install Library

```
npm i ymap3-components
```

## Getting Stated

1) Get api key for [map js api](https://developer.tech.yandex.ru/services/3)
2) Set <b>domain</b> where you will host ymap
3) For development change your <b>/etc/host</b>
to proxy <b>domain</b> on your localhost 
(map will work on <b>http://{domain}:{port}</b>)
4) [Install](#install-library) and use library

For more comprehensive information go to [Official documentation](https://yandex.ru/dev/jsapi30/doc/ru/)

## API 

Library provides api for these components: 

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

#### YMapComponentsProvider API
YMapComponentsProvider - root component which has to contain 
another library's components as child nodes.
```typescript
interface YMapComponentsProviderProps {
  apiKey: string,
  lang?: string,
  onLoad?: (params: {
    reactify: Reactify;
    ymaps: typeof import("@yandex/ymaps3-types/index");
  }) => any
  children: ReactNode | ReactNode []
}
```

#### Other components has same api as provided in [Official documentation](https://yandex.ru/dev/jsapi30/doc/ru/)

## Example 

See example [here](https://codesandbox.io/p/sandbox/ymap3-components-xk3d74)