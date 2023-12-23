import o, { createContext as d, useContext as m, useState as M, useEffect as f, useMemo as w, useLayoutEffect as x } from "react";
import C from "react-dom";
const u = d({});
function n(t, a) {
  return a ? ({ ...e }) => {
    const { reactify: r, ymaps: p } = m(u), [c, Y] = M();
    return f(() => {
      window[a] ? Y(r.module(window[a])[t]) : p.import(a).then((y) => {
        window[a] = y, r.module(y) && Y(r.module(y)[t]);
      });
    }, []), c ? /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(
      c,
      {
        ...e
      }
    )) : null;
  } : ({ ...l }) => {
    const { reactify: e, ymaps: r } = m(u), p = w(() => e.module(r)[t], [e, r]);
    return /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(
      p,
      {
        ...l
      }
    ));
  };
}
const h = async (t, a = "ru_RU") => new Promise(async (s, l) => {
  if (window.ymaps3) {
    const e = window.ymaps3;
    await e.ready;
    const p = (await e.import("@yandex/ymaps3-reactify")).reactify.bindTo(o, C);
    s({
      ymaps: e,
      reactify: p
    });
  } else {
    const e = document.createElement("script");
    document.body.appendChild(e), e.type = "text/javascript", e.src = `https://api-maps.yandex.ru/v3/?apikey=${t}&lang=${a}`, e.onload = async () => {
      const r = window.ymaps3;
      await r.ready;
      const c = (await r.import("@yandex/ymaps3-reactify")).reactify.bindTo(o, C);
      s({
        ymaps: r,
        reactify: c
      });
    }, e.onerror = l;
  }
}), D = ({ apiKey: t, lang: a, children: s, onLoad: l }) => {
  const [e, r] = M();
  return x(() => {
    h(t, a).then((p) => {
      r(p), l && l(p);
    });
  }, []), e ? /* @__PURE__ */ o.createElement(u.Provider, { value: e }, s) : /* @__PURE__ */ o.createElement(o.Fragment, null);
}, L = o.memo(D, (t, a) => t.apiKey === a.apiKey && t.lang === a.lang);
var i = /* @__PURE__ */ ((t) => (t.CartesianProjection = "@yandex/ymaps3-cartesian-projection@0.0.1", t.Clusterer = "@yandex/ymaps3-clusterer@0.0.1", t.Controls = "@yandex/ymaps3-controls@0.0.1", t.Hint = "@yandex/ymaps3-hint@0.0.1", t.Markers = "@yandex/ymaps3-markers@0.0.1", t.SphericalMercatorProjection = "@yandex/ymaps3-spherical-mercator-projection@0.0.1", t))(i || {});
const E = d({ hint: void 0 }), H = ({ children: t, context: a }) => {
  const s = m(a);
  return /* @__PURE__ */ o.createElement(E.Provider, { value: s }, t);
}, v = ({ children: t, hint: a }) => {
  const { reactify: s, ymaps: l } = m(u), [e, r] = M(), p = w(() => {
    if (e) {
      const c = window[i.Hint];
      return s.module(c).YMapHint;
    }
  }, [e]);
  return f(() => {
    if (window[i.Hint]) {
      const c = window[i.Hint];
      r(s.module(c).YMapHintContext);
    } else
      l.import(i.Hint).then((c) => {
        window[i.Hint] = c, s.module(c) && r(s.module(c).YMapHintContext);
      });
  }, []), !p || !e || !t ? /* @__PURE__ */ o.createElement(o.Fragment, null) : /* @__PURE__ */ o.createElement(p, { hint: a }, /* @__PURE__ */ o.createElement(H, { context: e }, t));
}, R = n("YMapGeolocationControl", i.Controls), T = n("YMapZoomControl", i.Controls), j = n("YMapClusterer", i.Clusterer), b = n("YMapDefaultMarker", i.Markers), $ = n("YMap"), B = n("ThemeContext"), G = n("YMapDefaultSchemeLayer"), K = n("YMapDefaultFeaturesLayer"), W = n("YMapLayer"), Z = n("YMapControl"), O = n("YMapControls"), U = n("YMapControlButton"), _ = n("YMapTileDataSource"), q = n("YMapMarker"), z = n("YMapListener"), A = n("YMapFeature"), I = n("YMapDefaultSatelliteLayer"), J = n("YMapCollection"), Q = n("YMapContainer"), V = n("YMapFeatureDataSource");
export {
  B as ThemeContext,
  $ as YMap,
  j as YMapClusterer,
  J as YMapCollection,
  L as YMapComponentsProvider,
  Q as YMapContainer,
  Z as YMapControl,
  U as YMapControlButton,
  O as YMapControls,
  K as YMapDefaultFeaturesLayer,
  b as YMapDefaultMarker,
  I as YMapDefaultSatelliteLayer,
  G as YMapDefaultSchemeLayer,
  A as YMapFeature,
  V as YMapFeatureDataSource,
  R as YMapGeolocationControl,
  v as YMapHint,
  E as YMapHintContext,
  W as YMapLayer,
  z as YMapListener,
  q as YMapMarker,
  _ as YMapTileDataSource,
  T as YMapZoomControl
};
