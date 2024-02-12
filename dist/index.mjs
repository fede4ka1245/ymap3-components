import i, { createContext as x, useLayoutEffect as h, useEffect as L, useContext as d, useState as f, useMemo as H } from "react";
import w from "react-dom";
const M = x({}), D = typeof document < "u" ? h : L;
function e(t, n, p = !1) {
  let r;
  if (p) {
    const c = ({ ...a }, s) => {
      const { reactify: u, ymaps: m } = d(
        M
      ), [y, Y] = f(!1);
      return D(() => {
        n ? window[n] ? (Y(!0), r = u.module(window[n])[t]) : m.import(n).then((C) => {
          window[n] = C, u.module(C) && (Y(!0), r = u.module(C)[t]);
        }) : (r = u.module(m)[t], Y(!0));
      }, []), !r || !y ? null : /* @__PURE__ */ i.createElement(r, { ref: s, ...a });
    };
    return i.forwardRef(
      c
    );
  }
  return ({ ...c }) => {
    const { reactify: a, ymaps: s } = d(
      M
    ), [u, m] = f(!1);
    return h(() => {
      n ? window[n] ? (m(!0), r = a.module(window[n])[t]) : s.import(n).then((y) => {
        window[n] = y, a.module(y) && (m(!0), r = a.module(y)[t]);
      }) : (r = a.module(s)[t], m(!0));
    }, []), !r || !u ? null : /* @__PURE__ */ i.createElement(r, { ...c });
  };
}
const E = async (t, n = "ru_RU") => new Promise(async (p, r) => {
  if (window.ymaps3) {
    const o = window.ymaps3;
    await o.ready;
    const a = (await o.import("@yandex/ymaps3-reactify")).reactify.bindTo(i, w);
    a.module(o), p({
      ymaps: o,
      reactify: a
    });
  } else {
    const o = document.createElement("script");
    document.body.appendChild(o), o.type = "text/javascript", o.src = `https://api-maps.yandex.ru/v3/?apikey=${t}&lang=${n}`, o.onload = async () => {
      const c = window.ymaps3;
      await c.ready;
      const s = (await c.import("@yandex/ymaps3-reactify")).reactify.bindTo(i, w);
      p({
        ymaps: c,
        reactify: s
      });
    }, o.onerror = r;
  }
}), S = ({
  apiKey: t,
  lang: n,
  children: p,
  onLoad: r
}) => {
  const [o, c] = f();
  return D(() => {
    E(t, n).then((a) => {
      c(a), r && r(a);
    });
  }, []), o ? /* @__PURE__ */ i.createElement(M.Provider, { value: o }, p) : /* @__PURE__ */ i.createElement(i.Fragment, null);
}, j = i.memo(S);
var l = /* @__PURE__ */ ((t) => (t.CartesianProjection = "@yandex/ymaps3-cartesian-projection@0.0.1", t.Clusterer = "@yandex/ymaps3-clusterer@0.0.1", t.Controls = "@yandex/ymaps3-controls@0.0.1", t.Hint = "@yandex/ymaps3-hint@0.0.1", t.Markers = "@yandex/ymaps3-markers@0.0.1", t.SphericalMercatorProjection = "@yandex/ymaps3-spherical-mercator-projection@0.0.1", t))(l || {});
const v = x({
  hint: void 0
}), F = ({
  children: t,
  context: n
}) => {
  const p = d(n);
  return /* @__PURE__ */ i.createElement(v.Provider, { value: p }, t);
}, b = ({ children: t, hint: n }) => {
  const { reactify: p, ymaps: r } = d(
    M
  ), [o, c] = f(), a = H(() => {
    if (o) {
      const s = window[l.Hint];
      return p.module(s).YMapHint;
    }
  }, [o]);
  return L(() => {
    if (window[l.Hint]) {
      const s = window[l.Hint];
      c(p.module(s).YMapHintContext);
    } else
      r.import(l.Hint).then((s) => {
        window[l.Hint] = s, p.module(s) && c(p.module(s).YMapHintContext);
      });
  }, []), !a || !o || !t ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(a, { hint: n }, /* @__PURE__ */ i.createElement(F, { context: o }, t));
}, I = e("YMapGeolocationControl", l.Controls), $ = e("YMapZoomControl", l.Controls), B = e("YMapClusterer", l.Clusterer), G = e("YMapDefaultMarker", l.Markers), W = e(
  "YMap",
  void 0,
  !0
), Z = e("ThemeContext"), O = e("YMapDefaultSchemeLayer"), U = e("YMapDefaultFeaturesLayer"), _ = e("YMapLayer"), q = e("YMapControl"), z = e("YMapControls"), A = e("YMapControlButton"), J = e("YMapTileDataSource"), K = e("YMapMarker"), Q = e("YMapListener"), V = e("YMapFeature"), X = e("YMapDefaultSatelliteLayer"), N = e("YMapCollection"), k = e("YMapContainer"), P = e("YMapFeatureDataSource");
export {
  Z as ThemeContext,
  W as YMap,
  B as YMapClusterer,
  N as YMapCollection,
  j as YMapComponentsProvider,
  k as YMapContainer,
  q as YMapControl,
  A as YMapControlButton,
  z as YMapControls,
  U as YMapDefaultFeaturesLayer,
  G as YMapDefaultMarker,
  X as YMapDefaultSatelliteLayer,
  O as YMapDefaultSchemeLayer,
  V as YMapFeature,
  P as YMapFeatureDataSource,
  I as YMapGeolocationControl,
  b as YMapHint,
  v as YMapHintContext,
  _ as YMapLayer,
  Q as YMapListener,
  K as YMapMarker,
  J as YMapTileDataSource,
  $ as YMapZoomControl
};
