import i, { createContext as x, useLayoutEffect as h, useEffect as L, useContext as d, useState as f, useMemo as H } from "react";
import w from "react-dom";
const M = x({}), D = typeof document < "u" ? h : L;
function e(t, o, p = !1) {
  let r;
  if (p) {
    const c = ({ ...a }, s) => {
      const { reactify: u, ymaps: m } = d(
        M
      ), [y, Y] = f(!1);
      return D(() => {
        o ? window[o] ? (Y(!0), r = u.module(window[o])[t]) : m.import(o).then((C) => {
          window[o] = C, u.module(C) && (Y(!0), r = u.module(C)[t]);
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
      o ? window[o] ? (m(!0), r = a.module(window[o])[t]) : s.import(o).then((y) => {
        window[o] = y, a.module(y) && (m(!0), r = a.module(y)[t]);
      }) : (r = a.module(s)[t], m(!0));
    }, []), !r || !u ? null : /* @__PURE__ */ i.createElement(r, { ...c });
  };
}
const E = async (t, o = "ru_RU") => new Promise(async (p, r) => {
  if (window.ymaps3) {
    const n = window.ymaps3;
    await n.ready;
    const a = (await n.import("@yandex/ymaps3-reactify")).reactify.bindTo(i, w);
    p({
      ymaps: n,
      reactify: a
    });
  } else {
    const n = document.createElement("script");
    document.body.appendChild(n), n.type = "text/javascript", n.src = `https://api-maps.yandex.ru/v3/?apikey=${t}&lang=${o}`, n.onload = async () => {
      const c = window.ymaps3;
      await c.ready;
      const s = (await c.import("@yandex/ymaps3-reactify")).reactify.bindTo(i, w);
      p({
        ymaps: c,
        reactify: s
      });
    }, n.onerror = r;
  }
}), S = ({
  apiKey: t,
  lang: o,
  children: p,
  onLoad: r
}) => {
  const [n, c] = f();
  return D(() => {
    E(t, o).then((a) => {
      c(a), r && r(a);
    });
  }, []), n ? /* @__PURE__ */ i.createElement(M.Provider, { value: n }, p) : /* @__PURE__ */ i.createElement(i.Fragment, null);
}, j = i.memo(S);
var l = /* @__PURE__ */ ((t) => (t.CartesianProjection = "@yandex/ymaps3-cartesian-projection@0.0.1", t.Clusterer = "@yandex/ymaps3-clusterer@0.0.1", t.Controls = "@yandex/ymaps3-controls@0.0.1", t.Hint = "@yandex/ymaps3-hint@0.0.1", t.Markers = "@yandex/ymaps3-markers@0.0.1", t.SphericalMercatorProjection = "@yandex/ymaps3-spherical-mercator-projection@0.0.1", t))(l || {});
const v = x({
  hint: void 0
}), F = ({
  children: t,
  context: o
}) => {
  const p = d(o);
  return /* @__PURE__ */ i.createElement(v.Provider, { value: p }, t);
}, b = ({ children: t, hint: o }) => {
  const { reactify: p, ymaps: r } = d(
    M
  ), [n, c] = f(), a = H(() => {
    if (n) {
      const s = window[l.Hint];
      return p.module(s).YMapHint;
    }
  }, [n]);
  return L(() => {
    if (window[l.Hint]) {
      const s = window[l.Hint];
      c(p.module(s).YMapHintContext);
    } else
      r.import(l.Hint).then((s) => {
        window[l.Hint] = s, p.module(s) && c(p.module(s).YMapHintContext);
      });
  }, []), !a || !n || !t ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(a, { hint: o }, /* @__PURE__ */ i.createElement(F, { context: n }, t));
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
