import i, { createContext as h, useContext as d, useState as M, useLayoutEffect as w, useMemo as L, useEffect as D } from "react";
import x from "react-dom";
const f = h({});
function n(t, e, p = !1) {
  let r;
  if (p) {
    const c = ({ ...a }, s) => {
      const { reactify: u, ymaps: m } = d(f), [y, Y] = M(!1);
      return w(() => {
        e ? window[e] ? (Y(!0), r = u.module(window[e])[t]) : m.import(e).then((C) => {
          window[e] = C, u.module(C) && (Y(!0), r = u.module(C)[t]);
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
      e ? window[e] ? (m(!0), r = a.module(window[e])[t]) : s.import(e).then((y) => {
        window[e] = y, a.module(y) && (m(!0), r = a.module(y)[t]);
      }) : (r = a.module(s)[t], m(!0));
    }, []), !r || !u ? null : /* @__PURE__ */ i.createElement(
      r,
      {
        ...c
      }
    );
  };
}
const H = async (t, e = "ru_RU") => new Promise(async (p, r) => {
  if (window.ymaps3) {
    const o = window.ymaps3;
    await o.ready;
    const a = (await o.import("@yandex/ymaps3-reactify")).reactify.bindTo(i, x);
    p({
      ymaps: o,
      reactify: a
    });
  } else {
    const o = document.createElement("script");
    document.body.appendChild(o), o.type = "text/javascript", o.src = `https://api-maps.yandex.ru/v3/?apikey=${t}&lang=${e}`, o.onload = async () => {
      const c = window.ymaps3;
      await c.ready;
      const s = (await c.import("@yandex/ymaps3-reactify")).reactify.bindTo(i, x);
      p({
        ymaps: c,
        reactify: s
      });
    }, o.onerror = r;
  }
}), S = ({ apiKey: t, lang: e, children: p, onLoad: r }) => {
  const [o, c] = M();
  return w(() => {
    H(t, e).then((a) => {
      c(a), r && r(a);
    });
  }, []), o ? /* @__PURE__ */ i.createElement(f.Provider, { value: o }, p) : /* @__PURE__ */ i.createElement(i.Fragment, null);
}, T = i.memo(S, (t, e) => t.apiKey === e.apiKey && t.lang === e.lang);
var l = /* @__PURE__ */ ((t) => (t.CartesianProjection = "@yandex/ymaps3-cartesian-projection@0.0.1", t.Clusterer = "@yandex/ymaps3-clusterer@0.0.1", t.Controls = "@yandex/ymaps3-controls@0.0.1", t.Hint = "@yandex/ymaps3-hint@0.0.1", t.Markers = "@yandex/ymaps3-markers@0.0.1", t.SphericalMercatorProjection = "@yandex/ymaps3-spherical-mercator-projection@0.0.1", t))(l || {});
const E = h({ hint: void 0 }), v = ({ children: t, context: e }) => {
  const p = d(e);
  return /* @__PURE__ */ i.createElement(E.Provider, { value: p }, t);
}, j = ({ children: t, hint: e }) => {
  const { reactify: p, ymaps: r } = d(f), [o, c] = M(), a = L(() => {
    if (o) {
      const s = window[l.Hint];
      return p.module(s).YMapHint;
    }
  }, [o]);
  return D(() => {
    if (window[l.Hint]) {
      const s = window[l.Hint];
      c(p.module(s).YMapHintContext);
    } else
      r.import(l.Hint).then((s) => {
        window[l.Hint] = s, p.module(s) && c(p.module(s).YMapHintContext);
      });
  }, []), !a || !o || !t ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(a, { hint: e }, /* @__PURE__ */ i.createElement(v, { context: o }, t));
}, b = n("YMapGeolocationControl", l.Controls), $ = n("YMapZoomControl", l.Controls), B = n("YMapClusterer", l.Clusterer), G = n("YMapDefaultMarker", l.Markers), I = n("YMap", void 0, !0), K = n("ThemeContext"), W = n("YMapDefaultSchemeLayer"), Z = n("YMapDefaultFeaturesLayer"), O = n("YMapLayer"), U = n("YMapControl"), _ = n("YMapControls"), q = n("YMapControlButton"), z = n("YMapTileDataSource"), A = n("YMapMarker"), J = n("YMapListener"), Q = n("YMapFeature"), V = n("YMapDefaultSatelliteLayer"), X = n("YMapCollection"), N = n("YMapContainer"), k = n("YMapFeatureDataSource");
export {
  K as ThemeContext,
  I as YMap,
  B as YMapClusterer,
  X as YMapCollection,
  T as YMapComponentsProvider,
  N as YMapContainer,
  U as YMapControl,
  q as YMapControlButton,
  _ as YMapControls,
  Z as YMapDefaultFeaturesLayer,
  G as YMapDefaultMarker,
  V as YMapDefaultSatelliteLayer,
  W as YMapDefaultSchemeLayer,
  Q as YMapFeature,
  k as YMapFeatureDataSource,
  b as YMapGeolocationControl,
  j as YMapHint,
  E as YMapHintContext,
  O as YMapLayer,
  J as YMapListener,
  A as YMapMarker,
  z as YMapTileDataSource,
  $ as YMapZoomControl
};
