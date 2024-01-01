import i, { createContext as h, useContext as d, useState as M, useLayoutEffect as w, useMemo as L, useEffect as D } from "react";
import x from "react-dom";
const f = h({});
function e(t, o, p = !1) {
  let r;
  if (p) {
    const c = ({ ...a }, s) => {
      const { reactify: u, ymaps: m } = d(f), [y, Y] = M(!1);
      return w(() => {
        o ? window[o] ? (Y(!0), r = u.module(window[o])[t]) : m.import(o).then((C) => {
          window[o] = C, u.module(C) && (Y(!0), r = u.module(C)[t]);
        }) : (r = u.module(m)[t], Y(!0));
      }, []), !r || !y ? null : /* @__PURE__ */ i.createElement(
        r,
        {
          ref: s,
          ...a
        }
      );
    };
    return i.forwardRef(c);
  }
  return ({ ...c }) => {
    const { reactify: a, ymaps: s } = d(f), [u, m] = M(!1);
    return w(() => {
      o ? window[o] ? (m(!0), r = a.module(window[o])[t]) : s.import(o).then((y) => {
        window[o] = y, a.module(y) && (m(!0), r = a.module(y)[t]);
      }) : (r = a.module(s)[t], m(!0));
    }, []), !r || !u ? null : /* @__PURE__ */ i.createElement(
      r,
      {
        ...c
      }
    );
  };
}
const H = async (t, o = "ru_RU") => new Promise(async (p, r) => {
  if (window.ymaps3) {
    const n = window.ymaps3;
    await n.ready;
    const a = (await n.import("@yandex/ymaps3-reactify")).reactify.bindTo(i, x);
    p({
      ymaps: n,
      reactify: a
    });
  } else {
    const n = document.createElement("script");
    document.body.appendChild(n), n.type = "text/javascript", n.src = `https://api-maps.yandex.ru/v3/?apikey=${t}&lang=${o}`, n.onload = async () => {
      const c = window.ymaps3;
      await c.ready;
      const s = (await c.import("@yandex/ymaps3-reactify")).reactify.bindTo(i, x);
      p({
        ymaps: c,
        reactify: s
      });
    }, n.onerror = r;
  }
}), S = ({ apiKey: t, lang: o, children: p, onLoad: r }) => {
  const [n, c] = M();
  return w(() => {
    H(t, o).then((a) => {
      c(a), r && r(a);
    });
  }, []), n ? /* @__PURE__ */ i.createElement(f.Provider, { value: n }, p) : /* @__PURE__ */ i.createElement(i.Fragment, null);
}, T = i.memo(S);
var l = /* @__PURE__ */ ((t) => (t.CartesianProjection = "@yandex/ymaps3-cartesian-projection@0.0.1", t.Clusterer = "@yandex/ymaps3-clusterer@0.0.1", t.Controls = "@yandex/ymaps3-controls@0.0.1", t.Hint = "@yandex/ymaps3-hint@0.0.1", t.Markers = "@yandex/ymaps3-markers@0.0.1", t.SphericalMercatorProjection = "@yandex/ymaps3-spherical-mercator-projection@0.0.1", t))(l || {});
const v = h({ hint: void 0 }), E = ({ children: t, context: o }) => {
  const p = d(o);
  return /* @__PURE__ */ i.createElement(v.Provider, { value: p }, t);
}, j = ({ children: t, hint: o }) => {
  const { reactify: p, ymaps: r } = d(f), [n, c] = M(), a = L(() => {
    if (n) {
      const s = window[l.Hint];
      return p.module(s).YMapHint;
    }
  }, [n]);
  return D(() => {
    if (window[l.Hint]) {
      const s = window[l.Hint];
      c(p.module(s).YMapHintContext);
    } else
      r.import(l.Hint).then((s) => {
        window[l.Hint] = s, p.module(s) && c(p.module(s).YMapHintContext);
      });
  }, []), !a || !n || !t ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(a, { hint: o }, /* @__PURE__ */ i.createElement(E, { context: n }, t));
}, b = e("YMapGeolocationControl", l.Controls), $ = e("YMapZoomControl", l.Controls), B = e("YMapClusterer", l.Clusterer), G = e("YMapDefaultMarker", l.Markers), I = e("YMap", void 0, !0), W = e("ThemeContext"), Z = e("YMapDefaultSchemeLayer"), O = e("YMapDefaultFeaturesLayer"), U = e("YMapLayer"), _ = e("YMapControl"), q = e("YMapControls"), z = e("YMapControlButton"), A = e("YMapTileDataSource"), J = e("YMapMarker"), K = e("YMapListener"), Q = e("YMapFeature"), V = e("YMapDefaultSatelliteLayer"), X = e("YMapCollection"), N = e("YMapContainer"), k = e("YMapFeatureDataSource");
export {
  W as ThemeContext,
  I as YMap,
  B as YMapClusterer,
  X as YMapCollection,
  T as YMapComponentsProvider,
  N as YMapContainer,
  _ as YMapControl,
  z as YMapControlButton,
  q as YMapControls,
  O as YMapDefaultFeaturesLayer,
  G as YMapDefaultMarker,
  V as YMapDefaultSatelliteLayer,
  Z as YMapDefaultSchemeLayer,
  Q as YMapFeature,
  k as YMapFeatureDataSource,
  b as YMapGeolocationControl,
  j as YMapHint,
  v as YMapHintContext,
  U as YMapLayer,
  K as YMapListener,
  J as YMapMarker,
  A as YMapTileDataSource,
  $ as YMapZoomControl
};
