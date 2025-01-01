import { YMapDefaultModules, YMapsV3 } from "../types";
import React from "react";
import ReactDOM from "react-dom";

export const initYamaps = async (
  key: string,
  lang: string = "ru_RU",
  coordorder?: 'latlong' | 'longlat',
  mode?: 'release' | 'debug',
): Promise<YMapDefaultModules> => {
  return new Promise(async (resolve, reject) => {
    try {
      if ((window as any).ymaps3) {
        const ymaps: YMapsV3 = (window as any).ymaps3;
        await ymaps.ready;
        const ymaps3Reactify = await ymaps.import("@yandex/ymaps3-reactify");
        const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);

        resolve({
          ymaps,
          reactify,
        });
      } else {
        const script = document.createElement("script");
        document.body.appendChild(script);
        script.type = "text/javascript";

        const query = new URLSearchParams({
          apikey: key,
          lang: lang,
        });
        if (coordorder) {
          query.set('coordorder', coordorder);
        }
        if (mode) {
          query.set('mode', mode);
        }

        script.src = `https://api-maps.yandex.ru/v3/?${query.toString()}`;
        script.onload = async () => {
          const ymaps: YMapsV3 = (window as any).ymaps3;
          await ymaps.ready;
          const ymaps3Reactify = await ymaps.import("@yandex/ymaps3-reactify");
          const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);

          resolve({
            ymaps,
            reactify,
          });
        };

        script.onerror = reject;
      }
    } catch(e){
      (e)
    }
  });
};
