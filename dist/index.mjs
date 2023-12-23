import yn, { createContext as qE, useContext as wm, useState as s0, useEffect as KE, useMemo as ZE, useLayoutEffect as Bk } from "react";
const Dm = qE({});
function rn(j, ve) {
  return ve ? ({ ..._e }) => {
    const { reactify: xe, ymaps: g } = wm(Dm), [tt, Ee] = s0();
    return KE(() => {
      window[ve] ? Ee(xe.module(window[ve])[j]) : g.import(ve).then((ue) => {
        window[ve] = ue, xe.module(ue) && Ee(xe.module(ue)[j]);
      });
    }, []), tt ? /* @__PURE__ */ yn.createElement(yn.Fragment, null, /* @__PURE__ */ yn.createElement(
      tt,
      {
        ..._e
      }
    )) : null;
  } : ({ ...Tt }) => {
    const { reactify: _e, ymaps: xe } = wm(Dm), g = ZE(() => _e.module(xe)[j], [_e, xe]);
    return /* @__PURE__ */ yn.createElement(yn.Fragment, null, /* @__PURE__ */ yn.createElement(
      g,
      {
        ...Tt
      }
    ));
  };
}
function Yk(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default") ? j.default : j;
}
var o0 = { exports: {} }, Ir = {}, xm = { exports: {} }, l0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $E;
function Pk() {
  return $E || ($E = 1, function(j) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ve = !1, L = !1, Tt = 5;
      function _e(Q, fe) {
        var Oe = Q.length;
        Q.push(fe), tt(Q, fe, Oe);
      }
      function xe(Q) {
        return Q.length === 0 ? null : Q[0];
      }
      function g(Q) {
        if (Q.length === 0)
          return null;
        var fe = Q[0], Oe = Q.pop();
        return Oe !== fe && (Q[0] = Oe, Ee(Q, Oe, 0)), fe;
      }
      function tt(Q, fe, Oe) {
        for (var rt = Oe; rt > 0; ) {
          var _t = rt - 1 >>> 1, Cn = Q[_t];
          if (ue(Cn, fe) > 0)
            Q[_t] = fe, Q[rt] = Cn, rt = _t;
          else
            return;
        }
      }
      function Ee(Q, fe, Oe) {
        for (var rt = Oe, _t = Q.length, Cn = _t >>> 1; rt < Cn; ) {
          var Bt = (rt + 1) * 2 - 1, wr = Q[Bt], xt = Bt + 1, pa = Q[xt];
          if (ue(wr, fe) < 0)
            xt < _t && ue(pa, wr) < 0 ? (Q[rt] = pa, Q[xt] = fe, rt = xt) : (Q[rt] = wr, Q[Bt] = fe, rt = Bt);
          else if (xt < _t && ue(pa, fe) < 0)
            Q[rt] = pa, Q[xt] = fe, rt = xt;
          else
            return;
        }
      }
      function ue(Q, fe) {
        var Oe = Q.sortIndex - fe.sortIndex;
        return Oe !== 0 ? Oe : Q.id - fe.id;
      }
      var an = 1, ie = 2, me = 3, le = 4, Le = 5;
      function nt(Q, fe) {
      }
      var ot = typeof performance == "object" && typeof performance.now == "function";
      if (ot) {
        var Wr = performance;
        j.unstable_now = function() {
          return Wr.now();
        };
      } else {
        var gn = Date, Ae = gn.now();
        j.unstable_now = function() {
          return gn.now() - Ae;
        };
      }
      var st = 1073741823, He = -1, yt = 250, Me = 5e3, Mn = 1e4, lr = st, zt = [], ut = [], Yn = 1, Fe = null, qe = me, Er = !1, Rt = !1, Tr = !1, $ = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function We(Q) {
        for (var fe = xe(ut); fe !== null; ) {
          if (fe.callback === null)
            g(ut);
          else if (fe.startTime <= Q)
            g(ut), fe.sortIndex = fe.expirationTime, _e(zt, fe);
          else
            return;
          fe = xe(ut);
        }
      }
      function Ke(Q) {
        if (Tr = !1, We(Q), !Rt)
          if (xe(zt) !== null)
            Rt = !0, ci(Pn);
          else {
            var fe = xe(ut);
            fe !== null && Qn(Ke, fe.startTime - Q);
          }
      }
      function Pn(Q, fe) {
        Rt = !1, Tr && (Tr = !1, Zr()), Er = !0;
        var Oe = qe;
        try {
          var rt;
          if (!L)
            return ur(Q, fe);
        } finally {
          Fe = null, qe = Oe, Er = !1;
        }
      }
      function ur(Q, fe) {
        var Oe = fe;
        for (We(Oe), Fe = xe(zt); Fe !== null && !ve && !(Fe.expirationTime > Oe && (!Q || Vl())); ) {
          var rt = Fe.callback;
          if (typeof rt == "function") {
            Fe.callback = null, qe = Fe.priorityLevel;
            var _t = Fe.expirationTime <= Oe, Cn = rt(_t);
            Oe = j.unstable_now(), typeof Cn == "function" ? Fe.callback = Cn : Fe === xe(zt) && g(zt), We(Oe);
          } else
            g(zt);
          Fe = xe(zt);
        }
        if (Fe !== null)
          return !0;
        var Bt = xe(ut);
        return Bt !== null && Qn(Ke, Bt.startTime - Oe), !1;
      }
      function li(Q, fe) {
        switch (Q) {
          case an:
          case ie:
          case me:
          case le:
          case Le:
            break;
          default:
            Q = me;
        }
        var Oe = qe;
        qe = Q;
        try {
          return fe();
        } finally {
          qe = Oe;
        }
      }
      function _n(Q) {
        var fe;
        switch (qe) {
          case an:
          case ie:
          case me:
            fe = me;
            break;
          default:
            fe = qe;
            break;
        }
        var Oe = qe;
        qe = fe;
        try {
          return Q();
        } finally {
          qe = Oe;
        }
      }
      function ui(Q) {
        var fe = qe;
        return function() {
          var Oe = qe;
          qe = fe;
          try {
            return Q.apply(this, arguments);
          } finally {
            qe = Oe;
          }
        };
      }
      function Xr(Q, fe, Oe) {
        var rt = j.unstable_now(), _t;
        if (typeof Oe == "object" && Oe !== null) {
          var Cn = Oe.delay;
          typeof Cn == "number" && Cn > 0 ? _t = rt + Cn : _t = rt;
        } else
          _t = rt;
        var Bt;
        switch (Q) {
          case an:
            Bt = He;
            break;
          case ie:
            Bt = yt;
            break;
          case Le:
            Bt = lr;
            break;
          case le:
            Bt = Mn;
            break;
          case me:
          default:
            Bt = Me;
            break;
        }
        var wr = _t + Bt, xt = {
          id: Yn++,
          callback: fe,
          priorityLevel: Q,
          startTime: _t,
          expirationTime: wr,
          sortIndex: -1
        };
        return _t > rt ? (xt.sortIndex = _t, _e(ut, xt), xe(zt) === null && xt === xe(ut) && (Tr ? Zr() : Tr = !0, Qn(Ke, _t - rt))) : (xt.sortIndex = wr, _e(zt, xt), !Rt && !Er && (Rt = !0, ci(Pn))), xt;
      }
      function fa() {
      }
      function Yu() {
        !Rt && !Er && (Rt = !0, ci(Pn));
      }
      function Rr() {
        return xe(zt);
      }
      function Ma(Q) {
        Q.callback = null;
      }
      function Sn() {
        return qe;
      }
      var $n = !1, xr = null, qr = -1, or = Tt, _a = -1;
      function Vl() {
        var Q = j.unstable_now() - _a;
        return !(Q < or);
      }
      function Gi() {
      }
      function oi(Q) {
        if (Q < 0 || Q > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Q > 0 ? or = Math.floor(1e3 / Q) : or = Tt;
      }
      var Wi = function() {
        if (xr !== null) {
          var Q = j.unstable_now();
          _a = Q;
          var fe = !0, Oe = !0;
          try {
            Oe = xr(fe, Q);
          } finally {
            Oe ? Kr() : ($n = !1, xr = null);
          }
        } else
          $n = !1;
      }, Kr;
      if (typeof K == "function")
        Kr = function() {
          K(Wi);
        };
      else if (typeof MessageChannel < "u") {
        var si = new MessageChannel(), da = si.port2;
        si.port1.onmessage = Wi, Kr = function() {
          da.postMessage(null);
        };
      } else
        Kr = function() {
          $(Wi, 0);
        };
      function ci(Q) {
        xr = Q, $n || ($n = !0, Kr());
      }
      function Qn(Q, fe) {
        qr = $(function() {
          Q(j.unstable_now());
        }, fe);
      }
      function Zr() {
        ye(qr), qr = -1;
      }
      var Pu = Gi, fi = null;
      j.unstable_IdlePriority = Le, j.unstable_ImmediatePriority = an, j.unstable_LowPriority = le, j.unstable_NormalPriority = me, j.unstable_Profiling = fi, j.unstable_UserBlockingPriority = ie, j.unstable_cancelCallback = Ma, j.unstable_continueExecution = Yu, j.unstable_forceFrameRate = oi, j.unstable_getCurrentPriorityLevel = Sn, j.unstable_getFirstCallbackNode = Rr, j.unstable_next = _n, j.unstable_pauseExecution = fa, j.unstable_requestPaint = Pu, j.unstable_runWithPriority = li, j.unstable_scheduleCallback = Xr, j.unstable_shouldYield = Vl, j.unstable_wrapCallback = ui, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(l0)), l0;
}
var u0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QE;
function $k() {
  return QE || (QE = 1, function(j) {
    function ve($, ye) {
      var K = $.length;
      $.push(ye);
      e:
        for (; 0 < K; ) {
          var We = K - 1 >>> 1, Ke = $[We];
          if (0 < _e(Ke, ye))
            $[We] = ye, $[K] = Ke, K = We;
          else
            break e;
        }
    }
    function L($) {
      return $.length === 0 ? null : $[0];
    }
    function Tt($) {
      if ($.length === 0)
        return null;
      var ye = $[0], K = $.pop();
      if (K !== ye) {
        $[0] = K;
        e:
          for (var We = 0, Ke = $.length, Pn = Ke >>> 1; We < Pn; ) {
            var ur = 2 * (We + 1) - 1, li = $[ur], _n = ur + 1, ui = $[_n];
            if (0 > _e(li, K))
              _n < Ke && 0 > _e(ui, li) ? ($[We] = ui, $[_n] = K, We = _n) : ($[We] = li, $[ur] = K, We = ur);
            else if (_n < Ke && 0 > _e(ui, K))
              $[We] = ui, $[_n] = K, We = _n;
            else
              break e;
          }
      }
      return ye;
    }
    function _e($, ye) {
      var K = $.sortIndex - ye.sortIndex;
      return K !== 0 ? K : $.id - ye.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var xe = performance;
      j.unstable_now = function() {
        return xe.now();
      };
    } else {
      var g = Date, tt = g.now();
      j.unstable_now = function() {
        return g.now() - tt;
      };
    }
    var Ee = [], ue = [], an = 1, ie = null, me = 3, le = !1, Le = !1, nt = !1, ot = typeof setTimeout == "function" ? setTimeout : null, Wr = typeof clearTimeout == "function" ? clearTimeout : null, gn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ae($) {
      for (var ye = L(ue); ye !== null; ) {
        if (ye.callback === null)
          Tt(ue);
        else if (ye.startTime <= $)
          Tt(ue), ye.sortIndex = ye.expirationTime, ve(Ee, ye);
        else
          break;
        ye = L(ue);
      }
    }
    function st($) {
      if (nt = !1, Ae($), !Le)
        if (L(Ee) !== null)
          Le = !0, Rt(He);
        else {
          var ye = L(ue);
          ye !== null && Tr(st, ye.startTime - $);
        }
    }
    function He($, ye) {
      Le = !1, nt && (nt = !1, Wr(Mn), Mn = -1), le = !0;
      var K = me;
      try {
        for (Ae(ye), ie = L(Ee); ie !== null && (!(ie.expirationTime > ye) || $ && !ut()); ) {
          var We = ie.callback;
          if (typeof We == "function") {
            ie.callback = null, me = ie.priorityLevel;
            var Ke = We(ie.expirationTime <= ye);
            ye = j.unstable_now(), typeof Ke == "function" ? ie.callback = Ke : ie === L(Ee) && Tt(Ee), Ae(ye);
          } else
            Tt(Ee);
          ie = L(Ee);
        }
        if (ie !== null)
          var Pn = !0;
        else {
          var ur = L(ue);
          ur !== null && Tr(st, ur.startTime - ye), Pn = !1;
        }
        return Pn;
      } finally {
        ie = null, me = K, le = !1;
      }
    }
    var yt = !1, Me = null, Mn = -1, lr = 5, zt = -1;
    function ut() {
      return !(j.unstable_now() - zt < lr);
    }
    function Yn() {
      if (Me !== null) {
        var $ = j.unstable_now();
        zt = $;
        var ye = !0;
        try {
          ye = Me(!0, $);
        } finally {
          ye ? Fe() : (yt = !1, Me = null);
        }
      } else
        yt = !1;
    }
    var Fe;
    if (typeof gn == "function")
      Fe = function() {
        gn(Yn);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), Er = qe.port2;
      qe.port1.onmessage = Yn, Fe = function() {
        Er.postMessage(null);
      };
    } else
      Fe = function() {
        ot(Yn, 0);
      };
    function Rt($) {
      Me = $, yt || (yt = !0, Fe());
    }
    function Tr($, ye) {
      Mn = ot(function() {
        $(j.unstable_now());
      }, ye);
    }
    j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function($) {
      $.callback = null;
    }, j.unstable_continueExecution = function() {
      Le || le || (Le = !0, Rt(He));
    }, j.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : lr = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, j.unstable_getCurrentPriorityLevel = function() {
      return me;
    }, j.unstable_getFirstCallbackNode = function() {
      return L(Ee);
    }, j.unstable_next = function($) {
      switch (me) {
        case 1:
        case 2:
        case 3:
          var ye = 3;
          break;
        default:
          ye = me;
      }
      var K = me;
      me = ye;
      try {
        return $();
      } finally {
        me = K;
      }
    }, j.unstable_pauseExecution = function() {
    }, j.unstable_requestPaint = function() {
    }, j.unstable_runWithPriority = function($, ye) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var K = me;
      me = $;
      try {
        return ye();
      } finally {
        me = K;
      }
    }, j.unstable_scheduleCallback = function($, ye, K) {
      var We = j.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? We + K : We) : K = We, $) {
        case 1:
          var Ke = -1;
          break;
        case 2:
          Ke = 250;
          break;
        case 5:
          Ke = 1073741823;
          break;
        case 4:
          Ke = 1e4;
          break;
        default:
          Ke = 5e3;
      }
      return Ke = K + Ke, $ = { id: an++, callback: ye, priorityLevel: $, startTime: K, expirationTime: Ke, sortIndex: -1 }, K > We ? ($.sortIndex = K, ve(ue, $), L(Ee) === null && $ === L(ue) && (nt ? (Wr(Mn), Mn = -1) : nt = !0, Tr(st, K - We))) : ($.sortIndex = Ke, ve(Ee, $), Le || le || (Le = !0, Rt(He))), $;
    }, j.unstable_shouldYield = ut, j.unstable_wrapCallback = function($) {
      var ye = me;
      return function() {
        var K = me;
        me = ye;
        try {
          return $.apply(this, arguments);
        } finally {
          me = K;
        }
      };
    };
  }(u0)), u0;
}
var IE;
function JE() {
  return IE || (IE = 1, process.env.NODE_ENV === "production" ? xm.exports = $k() : xm.exports = Pk()), xm.exports;
}
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GE;
function Qk() {
  return GE || (GE = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var j = yn, ve = JE(), L = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Tt = !1;
    function _e(e) {
      Tt = e;
    }
    function xe(e) {
      if (!Tt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        tt("warn", e, a);
      }
    }
    function g(e) {
      if (!Tt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        tt("error", e, a);
      }
    }
    function tt(e, t, a) {
      {
        var i = L.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ee = 0, ue = 1, an = 2, ie = 3, me = 4, le = 5, Le = 6, nt = 7, ot = 8, Wr = 9, gn = 10, Ae = 11, st = 12, He = 13, yt = 14, Me = 15, Mn = 16, lr = 17, zt = 18, ut = 19, Yn = 21, Fe = 22, qe = 23, Er = 24, Rt = 25, Tr = !0, $ = !1, ye = !1, K = !1, We = !1, Ke = !0, Pn = !1, ur = !1, li = !0, _n = !0, ui = !0, Xr = /* @__PURE__ */ new Set(), fa = {}, Yu = {};
    function Rr(e, t) {
      Ma(e, t), Ma(e + "Capture", t);
    }
    function Ma(e, t) {
      fa[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), fa[e] = t;
      {
        var a = e.toLowerCase();
        Yu[a] = e, e === "onDoubleClick" && (Yu.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Xr.add(t[i]);
    }
    var Sn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $n = Object.prototype.hasOwnProperty;
    function xr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function qr(e) {
      try {
        return or(e), !1;
      } catch {
        return !0;
      }
    }
    function or(e) {
      return "" + e;
    }
    function _a(e, t) {
      if (qr(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xr(e)), or(e);
    }
    function Vl(e) {
      if (qr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(e)), or(e);
    }
    function Gi(e, t) {
      if (qr(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xr(e)), or(e);
    }
    function oi(e, t) {
      if (qr(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xr(e)), or(e);
    }
    function Wi(e) {
      if (qr(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", xr(e)), or(e);
    }
    function Kr(e) {
      if (qr(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", xr(e)), or(e);
    }
    var si = 0, da = 1, ci = 2, Qn = 3, Zr = 4, Pu = 5, fi = 6, Q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fe = Q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Oe = new RegExp("^[" + Q + "][" + fe + "]*$"), rt = {}, _t = {};
    function Cn(e) {
      return $n.call(_t, e) ? !0 : $n.call(rt, e) ? !1 : Oe.test(e) ? (_t[e] = !0, !0) : (rt[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Bt(e, t, a) {
      return t !== null ? t.type === si : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function wr(e, t, a, i) {
      if (a !== null && a.type === si)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function xt(e, t, a, i) {
      if (t === null || typeof t > "u" || wr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Qn:
            return !t;
          case Zr:
            return t === !1;
          case Pu:
            return isNaN(t);
          case fi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function pa(e) {
      return wt.hasOwnProperty(e) ? wt[e] : null;
    }
    function Ut(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === ci || t === Qn || t === Zr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var wt = {}, Sp = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Sp.forEach(function(e) {
      wt[e] = new Ut(
        e,
        si,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      wt[t] = new Ut(
        t,
        da,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      wt[e] = new Ut(
        e,
        ci,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      wt[e] = new Ut(
        e,
        ci,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      wt[e] = new Ut(
        e,
        Qn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      wt[e] = new Ut(
        e,
        Qn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      wt[e] = new Ut(
        e,
        Zr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      wt[e] = new Ut(
        e,
        fi,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      wt[e] = new Ut(
        e,
        Pu,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ns = /[\-\:]([a-z])/g, rs = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ns, rs);
      wt[t] = new Ut(
        t,
        da,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ns, rs);
      wt[t] = new Ut(
        t,
        da,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ns, rs);
      wt[t] = new Ut(
        t,
        da,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      wt[e] = new Ut(
        e,
        da,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Cp = "xlinkHref";
    wt[Cp] = new Ut(
      "xlinkHref",
      da,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      wt[e] = new Ut(
        e,
        da,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ep = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, as = !1;
    function Zc(e) {
      !as && Ep.test(e) && (as = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function $u(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        _a(a, t), i.sanitizeURL && Zc("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Zr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : xt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (xt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Qn)
            return a;
          f = e.getAttribute(s);
        }
        return xt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function is(e, t, a, i) {
      {
        if (!Cn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return _a(a, t), u === "" + a ? a : u;
      }
    }
    function Xi(e, t, a, i) {
      var u = pa(t);
      if (!Bt(t, u, i)) {
        if (xt(t, a, u, i) && (a = null), i || u === null) {
          if (Cn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (_a(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Qn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var R = u.type, E;
          R === Qn || R === Zr && a === !0 ? E = "" : (_a(a, m), E = "" + a, u.sanitizeURL && Zc(E.toString())), y ? e.setAttributeNS(y, m, E) : e.setAttribute(m, E);
        }
      }
    }
    var jl = Symbol.for("react.element"), Jr = Symbol.for("react.portal"), La = Symbol.for("react.fragment"), Bl = Symbol.for("react.strict_mode"), Qu = Symbol.for("react.profiler"), Jc = Symbol.for("react.provider"), ef = Symbol.for("react.context"), Yl = Symbol.for("react.forward_ref"), va = Symbol.for("react.suspense"), Iu = Symbol.for("react.suspense_list"), Pl = Symbol.for("react.memo"), Ln = Symbol.for("react.lazy"), Tp = Symbol.for("react.scope"), Rp = Symbol.for("react.debug_trace_mode"), tf = Symbol.for("react.offscreen"), xp = Symbol.for("react.legacy_hidden"), km = Symbol.for("react.cache"), bm = Symbol.for("react.tracing_marker"), Dt = Symbol.iterator, Mm = "@@iterator";
    function Oa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Dt && e[Dt] || e[Mm];
      return typeof t == "function" ? t : null;
    }
    var Ne = Object.assign, di = 0, wp, nf, Gu, ea, Dp, Dr, kp;
    function bp() {
    }
    bp.__reactDisabledLog = !0;
    function _m() {
      {
        if (di === 0) {
          wp = console.log, nf = console.info, Gu = console.warn, ea = console.error, Dp = console.group, Dr = console.groupCollapsed, kp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: bp,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        di++;
      }
    }
    function ls() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ne({}, e, {
              value: wp
            }),
            info: Ne({}, e, {
              value: nf
            }),
            warn: Ne({}, e, {
              value: Gu
            }),
            error: Ne({}, e, {
              value: ea
            }),
            group: Ne({}, e, {
              value: Dp
            }),
            groupCollapsed: Ne({}, e, {
              value: Dr
            }),
            groupEnd: Ne({}, e, {
              value: kp
            })
          });
        }
        di < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $l = L.ReactCurrentDispatcher, qi;
    function ta(e, t, a) {
      {
        if (qi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            qi = i && i[1] || "";
          }
        return `
` + qi + e;
      }
    }
    var rf = !1, us;
    {
      var af = typeof WeakMap == "function" ? WeakMap : Map;
      us = new af();
    }
    function os(e, t) {
      if (!e || rf)
        return "";
      {
        var a = us.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      rf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = $l.current, $l.current = null, _m();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (M) {
              i = M;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (M) {
              i = M;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            i = M;
          }
          e();
        }
      } catch (M) {
        if (M && i && typeof M.stack == "string") {
          for (var p = M.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, y = v.length - 1; m >= 1 && y >= 0 && p[m] !== v[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (p[m] !== v[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || p[m] !== v[y]) {
                    var R = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && us.set(e, R), R;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        rf = !1, $l.current = s, ls(), Error.prepareStackTrace = u;
      }
      var E = e ? e.displayName || e.name : "", b = E ? ta(E) : "";
      return typeof e == "function" && us.set(e, b), b;
    }
    function lf(e, t, a) {
      return os(e, !0);
    }
    function Ki(e, t, a) {
      return os(e, !1);
    }
    function Lm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Wu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return os(e, Lm(e));
      if (typeof e == "string")
        return ta(e);
      switch (e) {
        case va:
          return ta("Suspense");
        case Iu:
          return ta("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Yl:
            return Ki(e.render);
          case Pl:
            return Wu(e.type, t, a);
          case Ln: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Wu(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Xe(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return ta(e.type);
        case Mn:
          return ta("Lazy");
        case He:
          return ta("Suspense");
        case ut:
          return ta("SuspenseList");
        case Ee:
        case an:
        case Me:
          return Ki(e.type);
        case Ae:
          return Ki(e.type.render);
        case ue:
          return lf(e.type);
        default:
          return "";
      }
    }
    function uf(e) {
      try {
        var t = "", a = e;
        do
          t += Xe(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Mp(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ss(e) {
      return e.displayName || "Context";
    }
    function at(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case La:
          return "Fragment";
        case Jr:
          return "Portal";
        case Qu:
          return "Profiler";
        case Bl:
          return "StrictMode";
        case va:
          return "Suspense";
        case Iu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ef:
            var t = e;
            return ss(t) + ".Consumer";
          case Jc:
            var a = e;
            return ss(a._context) + ".Provider";
          case Yl:
            return Mp(e, e.render, "ForwardRef");
          case Pl:
            var i = e.displayName || null;
            return i !== null ? i : at(e.type) || "Memo";
          case Ln: {
            var u = e, s = u._payload, f = u._init;
            try {
              return at(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function _p(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function of(e) {
      return e.displayName || "Context";
    }
    function we(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Er:
          return "Cache";
        case Wr:
          var i = a;
          return of(i) + ".Consumer";
        case gn:
          var u = a;
          return of(u._context) + ".Provider";
        case zt:
          return "DehydratedFragment";
        case Ae:
          return _p(a, a.render, "ForwardRef");
        case nt:
          return "Fragment";
        case le:
          return a;
        case me:
          return "Portal";
        case ie:
          return "Root";
        case Le:
          return "Text";
        case Mn:
          return at(a);
        case ot:
          return a === Bl ? "StrictMode" : "Mode";
        case Fe:
          return "Offscreen";
        case st:
          return "Profiler";
        case Yn:
          return "Scope";
        case He:
          return "Suspense";
        case ut:
          return "SuspenseList";
        case Rt:
          return "TracingMarker";
        case ue:
        case Ee:
        case lr:
        case an:
        case yt:
        case Me:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xu = L.ReactDebugCurrentFrame, At = null, kr = !1;
    function br() {
      {
        if (At === null)
          return null;
        var e = At._debugOwner;
        if (e !== null && typeof e < "u")
          return we(e);
      }
      return null;
    }
    function qu() {
      return At === null ? "" : uf(At);
    }
    function Yt() {
      Xu.getCurrentStack = null, At = null, kr = !1;
    }
    function Ze(e) {
      Xu.getCurrentStack = e === null ? null : qu, At = e, kr = !1;
    }
    function Om() {
      return At;
    }
    function na(e) {
      kr = e;
    }
    function En(e) {
      return "" + e;
    }
    function pi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Kr(e), e;
        default:
          return "";
      }
    }
    var Lp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ql(e, t) {
      Lp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function sf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Op(e) {
      return e._valueTracker;
    }
    function Ku(e) {
      e._valueTracker = null;
    }
    function Zu(e) {
      var t = "";
      return e && (sf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Il(e) {
      var t = sf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Kr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Kr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Kr(p), i = "" + p;
          },
          stopTracking: function() {
            Ku(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Zi(e) {
      Op(e) || (e._valueTracker = Il(e));
    }
    function Np(e) {
      if (!e)
        return !1;
      var t = Op(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Zu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function cs(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var fs = !1, Ju = !1, ds = !1, cf = !1;
    function Na(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function eo(e, t) {
      var a = e, i = t.checked, u = Ne({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function to(e, t) {
      Ql("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ju && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", br() || "A component", t.type), Ju = !0), t.value !== void 0 && t.defaultValue !== void 0 && !fs && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", br() || "A component", t.type), fs = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: pi(t.value != null ? t.value : i),
        controlled: Na(t)
      };
    }
    function ff(e, t) {
      var a = e, i = t.checked;
      i != null && Xi(a, "checked", i, !1);
    }
    function Gl(e, t) {
      var a = e;
      {
        var i = Na(t);
        !a._wrapperState.controlled && i && !cf && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), cf = !0), a._wrapperState.controlled && !i && !ds && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ds = !0);
      }
      ff(e, t);
      var u = pi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = En(u)) : a.value !== En(u) && (a.value = En(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? vi(a, t.type, u) : t.hasOwnProperty("defaultValue") && vi(a, t.type, pi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function no(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = En(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function zp(e, t) {
      var a = e;
      Gl(a, t), sr(a, t);
    }
    function sr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        _a(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = ch(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Np(f), Gl(f, p);
          }
        }
      }
    }
    function vi(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || cs(e.ownerDocument) !== e) && (a == null ? e.defaultValue = En(e._wrapperState.initialValue) : e.defaultValue !== En(a) && (e.defaultValue = En(a)));
    }
    var ps = !1, Wl = !1, Up = !1;
    function vs(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? j.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Wl || (Wl = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Up || (Up = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ps && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ps = !0);
    }
    function df(e, t) {
      t.value != null && e.setAttribute("value", En(pi(t.value)));
    }
    var ro = Array.isArray;
    function Xt(e) {
      return ro(e);
    }
    var hs;
    hs = !1;
    function Ap() {
      var e = br();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Hp = ["value", "defaultValue"];
    function Nm(e) {
      {
        Ql("select", e);
        for (var t = 0; t < Hp.length; t++) {
          var a = Hp[t];
          if (e[a] != null) {
            var i = Xt(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ap()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ap());
          }
        }
      }
    }
    function hi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = En(pi(a)), R = null, E = 0; E < u.length; E++) {
          if (u[E].value === y) {
            u[E].selected = !0, i && (u[E].defaultSelected = !0);
            return;
          }
          R === null && !u[E].disabled && (R = u[E]);
        }
        R !== null && (R.selected = !0);
      }
    }
    function pf(e, t) {
      return Ne({}, t, {
        value: void 0
      });
    }
    function Fp(e, t) {
      var a = e;
      Nm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !hs && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), hs = !0);
    }
    function zm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? hi(a, !!t.multiple, i, !1) : t.defaultValue != null && hi(a, !!t.multiple, t.defaultValue, !0);
    }
    function Um(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? hi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? hi(a, !!t.multiple, t.defaultValue, !0) : hi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Am(e, t) {
      var a = e, i = t.value;
      i != null && hi(a, !!t.multiple, i, !1);
    }
    var vf = !1;
    function hf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ne({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: En(a._wrapperState.initialValue)
      });
      return i;
    }
    function Vp(e, t) {
      var a = e;
      Ql("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !vf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", br() || "A component"), vf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Xt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: pi(i)
      };
    }
    function jp(e, t) {
      var a = e, i = pi(t.value), u = pi(t.defaultValue);
      if (i != null) {
        var s = En(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = En(u));
    }
    function Bp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function mf(e, t) {
      jp(e, t);
    }
    var za = "http://www.w3.org/1999/xhtml", Hm = "http://www.w3.org/1998/Math/MathML", yf = "http://www.w3.org/2000/svg";
    function ms(e) {
      switch (e) {
        case "svg":
          return yf;
        case "math":
          return Hm;
        default:
          return za;
      }
    }
    function gf(e, t) {
      return e == null || e === za ? ms(t) : e === yf && t === "foreignObject" ? za : e;
    }
    var Fm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ys, Yp = Fm(function(e, t) {
      if (e.namespaceURI === yf && !("innerHTML" in e)) {
        ys = ys || document.createElement("div"), ys.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ys.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), In = 1, Ua = 3, Ht = 8, ra = 9, Ji = 11, gs = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ua) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Pp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Xl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function $p(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Qp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Xl).forEach(function(e) {
      Qp.forEach(function(t) {
        Xl[$p(t, e)] = Xl[e];
      });
    });
    function Ss(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Xl.hasOwnProperty(e) && Xl[e]) ? t + "px" : (oi(t, e), ("" + t).trim());
    }
    var ql = /([A-Z])/g, Vm = /^ms-/;
    function jm(e) {
      return e.replace(ql, "-$1").toLowerCase().replace(Vm, "-ms-");
    }
    var Ip = function() {
    };
    {
      var Gp = /^(?:webkit|moz|o)[A-Z]/, Wp = /^-ms-/, ao = /-(.)/g, Kl = /;\s*$/, Zl = {}, Jl = {}, Xp = !1, Sf = !1, Cf = function(e) {
        return e.replace(ao, function(t, a) {
          return a.toUpperCase();
        });
      }, Ef = function(e) {
        Zl.hasOwnProperty(e) && Zl[e] || (Zl[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Cf(e.replace(Wp, "ms-"))
        ));
      }, qp = function(e) {
        Zl.hasOwnProperty(e) && Zl[e] || (Zl[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Kp = function(e, t) {
        Jl.hasOwnProperty(t) && Jl[t] || (Jl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Kl, "")));
      }, Zp = function(e, t) {
        Xp || (Xp = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Bm = function(e, t) {
        Sf || (Sf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Ip = function(e, t) {
        e.indexOf("-") > -1 ? Ef(e) : Gp.test(e) ? qp(e) : Kl.test(t) && Kp(e, t), typeof t == "number" && (isNaN(t) ? Zp(e, t) : isFinite(t) || Bm(e, t));
      };
    }
    var Ym = Ip;
    function Pm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : jm(i)) + ":", t += Ss(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Jp(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Ym(i, t[i]);
          var s = Ss(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function $m(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Mr(e) {
      var t = {};
      for (var a in e)
        for (var i = Pp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function io(e, t) {
      {
        if (!t)
          return;
        var a = Mr(e), i = Mr(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", $m(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ev = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, tv = Ne({
      menuitem: !0
    }, ev), nv = "__html";
    function Cs(e, t) {
      if (t) {
        if (tv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(nv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Aa(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Es = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, rv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, aa = {}, Tf = new RegExp("^(aria)-[" + fe + "]*$"), lo = new RegExp("^(aria)[A-Z][" + fe + "]*$");
    function Rf(e, t) {
      {
        if ($n.call(aa, t) && aa[t])
          return !0;
        if (lo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = rv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), aa[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), aa[t] = !0, !0;
        }
        if (Tf.test(t)) {
          var u = t.toLowerCase(), s = rv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return aa[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), aa[t] = !0, !0;
        }
      }
      return !0;
    }
    function av(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Rf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ts(e, t) {
      Aa(e, t) || av(e, t);
    }
    var el = !1;
    function xf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !el && (el = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var wf = function() {
    };
    {
      var qt = {}, Df = /^on./, iv = /^on[^A-Z]/, lv = new RegExp("^(aria)-[" + fe + "]*$"), uv = new RegExp("^(aria)[A-Z][" + fe + "]*$");
      wf = function(e, t, a, i) {
        if ($n.call(qt, t) && qt[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), qt[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), qt[t] = !0, !0;
          if (Df.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), qt[t] = !0, !0;
        } else if (Df.test(t))
          return iv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), qt[t] = !0, !0;
        if (lv.test(t) || uv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), qt[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), qt[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), qt[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), qt[t] = !0, !0;
        var v = pa(t), m = v !== null && v.type === si;
        if (Es.hasOwnProperty(u)) {
          var y = Es[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), qt[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), qt[t] = !0, !0;
        return typeof a == "boolean" && wr(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), qt[t] = !0, !0) : m ? !0 : wr(t, a, v, !1) ? (qt[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Qn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), qt[t] = !0), !0);
      };
    }
    var ov = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = wf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function sv(e, t, a) {
      Aa(e, t) || ov(e, t, a);
    }
    var Ha = 1, uo = 2, tl = 4, Qm = Ha | uo | tl, oo = null;
    function so(e) {
      oo !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), oo = e;
    }
    function Im() {
      oo === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), oo = null;
    }
    function cv(e) {
      return e === oo;
    }
    function Rs(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ua ? t.parentNode : t;
    }
    var it = null, mi = null, Fa = null;
    function eu(e) {
      var t = Du(e);
      if (t) {
        if (typeof it != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = ch(a);
          it(t.stateNode, t.type, i);
        }
      }
    }
    function fv(e) {
      it = e;
    }
    function xs(e) {
      mi ? Fa ? Fa.push(e) : Fa = [e] : mi = e;
    }
    function co() {
      return mi !== null || Fa !== null;
    }
    function fo() {
      if (mi) {
        var e = mi, t = Fa;
        if (mi = null, Fa = null, eu(e), t)
          for (var a = 0; a < t.length; a++)
            eu(t[a]);
      }
    }
    var nl = function(e, t) {
      return e(t);
    }, kf = function() {
    }, bf = !1;
    function Gm() {
      var e = co();
      e && (kf(), fo());
    }
    function Mf(e, t, a) {
      if (bf)
        return e(t, a);
      bf = !0;
      try {
        return nl(e, t, a);
      } finally {
        bf = !1, Gm();
      }
    }
    function ws(e, t, a) {
      nl = e, kf = a;
    }
    function Ds(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function _f(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Ds(t));
        default:
          return !1;
      }
    }
    function rl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = ch(a);
      if (i === null)
        return null;
      var u = i[t];
      if (_f(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var po = !1;
    if (Sn)
      try {
        var al = {};
        Object.defineProperty(al, "passive", {
          get: function() {
            po = !0;
          }
        }), window.addEventListener("test", al, al), window.removeEventListener("test", al, al);
      } catch {
        po = !1;
      }
    function dv(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Lf = dv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Of = document.createElement("react");
      Lf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, E = !0, b = window.event, M = Object.getOwnPropertyDescriptor(window, "event");
        function O() {
          Of.removeEventListener(N, ce, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = b);
        }
        var X = Array.prototype.slice.call(arguments, 3);
        function ce() {
          R = !0, O(), a.apply(i, X), E = !1;
        }
        var ae, Be = !1, Ue = !1;
        function w(D) {
          if (ae = D.error, Be = !0, ae === null && D.colno === 0 && D.lineno === 0 && (Ue = !0), D.defaultPrevented && ae != null && typeof ae == "object")
            try {
              ae._suppressLogging = !0;
            } catch {
            }
        }
        var N = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", w), Of.addEventListener(N, ce, !1), y.initEvent(N, !1, !1), Of.dispatchEvent(y), M && Object.defineProperty(window, "event", M), R && E && (Be ? Ue && (ae = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ae = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ae)), window.removeEventListener("error", w), !R)
          return O(), dv.apply(this, arguments);
      };
    }
    var Wm = Lf, yi = !1, ia = null, vo = !1, gi = null, ha = {
      onError: function(e) {
        yi = !0, ia = e;
      }
    };
    function il(e, t, a, i, u, s, f, p, v) {
      yi = !1, ia = null, Wm.apply(ha, arguments);
    }
    function Va(e, t, a, i, u, s, f, p, v) {
      if (il.apply(this, arguments), yi) {
        var m = zf();
        vo || (vo = !0, gi = m);
      }
    }
    function Nf() {
      if (vo) {
        var e = gi;
        throw vo = !1, gi = null, e;
      }
    }
    function Xm() {
      return yi;
    }
    function zf() {
      if (yi) {
        var e = ia;
        return yi = !1, ia = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _r(e) {
      return e._reactInternals;
    }
    function ho(e) {
      return e._reactInternals !== void 0;
    }
    function tu(e, t) {
      e._reactInternals = t;
    }
    var se = (
      /*                      */
      0
    ), Si = (
      /*                */
      1
    ), ct = (
      /*                    */
      2
    ), De = (
      /*                       */
      4
    ), Qe = (
      /*                */
      16
    ), Ie = (
      /*                 */
      32
    ), ma = (
      /*                     */
      64
    ), Se = (
      /*                   */
      128
    ), kt = (
      /*            */
      256
    ), Gn = (
      /*                          */
      512
    ), Lr = (
      /*                     */
      1024
    ), ht = (
      /*                      */
      2048
    ), Or = (
      /*                    */
      4096
    ), Ci = (
      /*                   */
      8192
    ), mo = (
      /*             */
      16384
    ), ks = ht | De | ma | Gn | Lr | mo, pv = (
      /*               */
      32767
    ), cr = (
      /*                   */
      32768
    ), Kt = (
      /*                */
      65536
    ), yo = (
      /* */
      131072
    ), Uf = (
      /*                       */
      1048576
    ), Af = (
      /*                    */
      2097152
    ), Wn = (
      /*                 */
      4194304
    ), Ei = (
      /*                */
      8388608
    ), Xn = (
      /*               */
      16777216
    ), ll = (
      /*              */
      33554432
    ), nu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      De | Lr | 0
    ), qn = ct | De | Qe | Ie | Gn | Or | Ci, Tn = De | ma | Gn | Ci, Nr = ht | Qe, ln = Wn | Ei | Af, ja = L.ReactCurrentOwner;
    function fr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ct | Or)) !== se && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ie ? a : null;
    }
    function Hf(e) {
      if (e.tag === He) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function bs(e) {
      return e.tag === ie ? e.stateNode.containerInfo : null;
    }
    function Ff(e) {
      return fr(e) === e;
    }
    function dr(e) {
      {
        var t = ja.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", we(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = _r(e);
      return u ? fr(u) === u : !1;
    }
    function Kn(e) {
      if (fr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ft(e) {
      var t = e.alternate;
      if (!t) {
        var a = fr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Kn(s), e;
            if (v === u)
              return Kn(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var m = !1, y = s.child; y; ) {
            if (y === i) {
              m = !0, i = s, u = f;
              break;
            }
            if (y === u) {
              m = !0, u = s, i = f;
              break;
            }
            y = y.sibling;
          }
          if (!m) {
            for (y = f.child; y; ) {
              if (y === i) {
                m = !0, i = f, u = s;
                break;
              }
              if (y === u) {
                m = !0, u = f, i = s;
                break;
              }
              y = y.sibling;
            }
            if (!m)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ie)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function zr(e) {
      var t = ft(e);
      return t !== null ? Vf(t) : null;
    }
    function Vf(e) {
      if (e.tag === le || e.tag === Le)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Vf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function vv(e) {
      var t = ft(e);
      return t !== null ? Ms(t) : null;
    }
    function Ms(e) {
      if (e.tag === le || e.tag === Le)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== me) {
          var a = Ms(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var _s = ve.unstable_scheduleCallback, hv = ve.unstable_cancelCallback, Ls = ve.unstable_shouldYield, mv = ve.unstable_requestPaint, gt = ve.unstable_now, jf = ve.unstable_getCurrentPriorityLevel, Os = ve.unstable_ImmediatePriority, pr = ve.unstable_UserBlockingPriority, ya = ve.unstable_NormalPriority, Ns = ve.unstable_LowPriority, Ti = ve.unstable_IdlePriority, Bf = ve.unstable_yieldValue, Yf = ve.unstable_setDisableYieldValue, Ri = null, Zt = null, Y = null, Lt = !1, un = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Pf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        li && (e = Ne({}, e, {
          getLaneLabelMap: wi,
          injectProfilingHooks: Ya
        })), Ri = t.inject(e), Zt = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yv(e, t) {
      if (Zt && typeof Zt.onScheduleFiberRoot == "function")
        try {
          Zt.onScheduleFiberRoot(Ri, e, t);
        } catch (a) {
          Lt || (Lt = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function Ba(e, t) {
      if (Zt && typeof Zt.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Se) === Se;
          if (_n) {
            var i;
            switch (t) {
              case Rn:
                i = Os;
                break;
              case on:
                i = pr;
                break;
              case $a:
                i = ya;
                break;
              case Do:
                i = Ti;
                break;
              default:
                i = ya;
                break;
            }
            Zt.onCommitFiberRoot(Ri, e, i, a);
          }
        } catch (u) {
          Lt || (Lt = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function xi(e) {
      if (Zt && typeof Zt.onPostCommitFiberRoot == "function")
        try {
          Zt.onPostCommitFiberRoot(Ri, e);
        } catch (t) {
          Lt || (Lt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function $f(e) {
      if (Zt && typeof Zt.onCommitFiberUnmount == "function")
        try {
          Zt.onCommitFiberUnmount(Ri, e);
        } catch (t) {
          Lt || (Lt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Pt(e) {
      if (typeof Bf == "function" && (Yf(e), _e(e)), Zt && typeof Zt.setStrictMode == "function")
        try {
          Zt.setStrictMode(Ri, e);
        } catch (t) {
          Lt || (Lt = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Ya(e) {
      Y = e;
    }
    function wi() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < dt; a++) {
          var i = qm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function zs(e) {
      Y !== null && typeof Y.markCommitStarted == "function" && Y.markCommitStarted(e);
    }
    function Qf() {
      Y !== null && typeof Y.markCommitStopped == "function" && Y.markCommitStopped();
    }
    function Di(e) {
      Y !== null && typeof Y.markComponentRenderStarted == "function" && Y.markComponentRenderStarted(e);
    }
    function ul() {
      Y !== null && typeof Y.markComponentRenderStopped == "function" && Y.markComponentRenderStopped();
    }
    function gv(e) {
      Y !== null && typeof Y.markComponentPassiveEffectMountStarted == "function" && Y.markComponentPassiveEffectMountStarted(e);
    }
    function If() {
      Y !== null && typeof Y.markComponentPassiveEffectMountStopped == "function" && Y.markComponentPassiveEffectMountStopped();
    }
    function Us(e) {
      Y !== null && typeof Y.markComponentPassiveEffectUnmountStarted == "function" && Y.markComponentPassiveEffectUnmountStarted(e);
    }
    function Sv() {
      Y !== null && typeof Y.markComponentPassiveEffectUnmountStopped == "function" && Y.markComponentPassiveEffectUnmountStopped();
    }
    function Cv(e) {
      Y !== null && typeof Y.markComponentLayoutEffectMountStarted == "function" && Y.markComponentLayoutEffectMountStarted(e);
    }
    function Ev() {
      Y !== null && typeof Y.markComponentLayoutEffectMountStopped == "function" && Y.markComponentLayoutEffectMountStopped();
    }
    function As(e) {
      Y !== null && typeof Y.markComponentLayoutEffectUnmountStarted == "function" && Y.markComponentLayoutEffectUnmountStarted(e);
    }
    function ru() {
      Y !== null && typeof Y.markComponentLayoutEffectUnmountStopped == "function" && Y.markComponentLayoutEffectUnmountStopped();
    }
    function Hs(e, t, a) {
      Y !== null && typeof Y.markComponentErrored == "function" && Y.markComponentErrored(e, t, a);
    }
    function Tv(e, t, a) {
      Y !== null && typeof Y.markComponentSuspended == "function" && Y.markComponentSuspended(e, t, a);
    }
    function Rv(e) {
      Y !== null && typeof Y.markLayoutEffectsStarted == "function" && Y.markLayoutEffectsStarted(e);
    }
    function au() {
      Y !== null && typeof Y.markLayoutEffectsStopped == "function" && Y.markLayoutEffectsStopped();
    }
    function xv(e) {
      Y !== null && typeof Y.markPassiveEffectsStarted == "function" && Y.markPassiveEffectsStarted(e);
    }
    function go() {
      Y !== null && typeof Y.markPassiveEffectsStopped == "function" && Y.markPassiveEffectsStopped();
    }
    function la(e) {
      Y !== null && typeof Y.markRenderStarted == "function" && Y.markRenderStarted(e);
    }
    function So() {
      Y !== null && typeof Y.markRenderYielded == "function" && Y.markRenderYielded();
    }
    function iu() {
      Y !== null && typeof Y.markRenderStopped == "function" && Y.markRenderStopped();
    }
    function ol(e) {
      Y !== null && typeof Y.markRenderScheduled == "function" && Y.markRenderScheduled(e);
    }
    function Gf(e, t) {
      Y !== null && typeof Y.markForceUpdateScheduled == "function" && Y.markForceUpdateScheduled(e, t);
    }
    function ki(e, t) {
      Y !== null && typeof Y.markStateUpdateScheduled == "function" && Y.markStateUpdateScheduled(e, t);
    }
    var de = (
      /*                         */
      0
    ), be = (
      /*                 */
      1
    ), pe = (
      /*                    */
      2
    ), St = (
      /*               */
      8
    ), Ur = (
      /*              */
      16
    ), Fs = Math.clz32 ? Math.clz32 : sl, Vs = Math.log, Wf = Math.LN2;
    function sl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Vs(t) / Wf | 0) | 0;
    }
    var dt = 31, z = (
      /*                        */
      0
    ), Ve = (
      /*                          */
      0
    ), he = (
      /*                        */
      1
    ), ga = (
      /*    */
      2
    ), vr = (
      /*             */
      4
    ), cl = (
      /*            */
      8
    ), pt = (
      /*                     */
      16
    ), fl = (
      /*                */
      32
    ), bi = (
      /*                       */
      4194240
    ), dl = (
      /*                        */
      64
    ), Ar = (
      /*                        */
      128
    ), Zn = (
      /*                        */
      256
    ), pl = (
      /*                        */
      512
    ), Co = (
      /*                        */
      1024
    ), Eo = (
      /*                        */
      2048
    ), js = (
      /*                        */
      4096
    ), Bs = (
      /*                        */
      8192
    ), Ys = (
      /*                        */
      16384
    ), Ps = (
      /*                       */
      32768
    ), $s = (
      /*                       */
      65536
    ), Qs = (
      /*                       */
      131072
    ), Is = (
      /*                       */
      262144
    ), Gs = (
      /*                       */
      524288
    ), vl = (
      /*                       */
      1048576
    ), Ws = (
      /*                       */
      2097152
    ), hl = (
      /*                            */
      130023424
    ), Pa = (
      /*                             */
      4194304
    ), Xs = (
      /*                             */
      8388608
    ), To = (
      /*                             */
      16777216
    ), qs = (
      /*                             */
      33554432
    ), Ks = (
      /*                             */
      67108864
    ), Xf = Pa, lu = (
      /*          */
      134217728
    ), Zs = (
      /*                          */
      268435455
    ), uu = (
      /*               */
      268435456
    ), Mi = (
      /*                        */
      536870912
    ), Jn = (
      /*                   */
      1073741824
    );
    function qm(e) {
      {
        if (e & he)
          return "Sync";
        if (e & ga)
          return "InputContinuousHydration";
        if (e & vr)
          return "InputContinuous";
        if (e & cl)
          return "DefaultHydration";
        if (e & pt)
          return "Default";
        if (e & fl)
          return "TransitionHydration";
        if (e & bi)
          return "Transition";
        if (e & hl)
          return "Retry";
        if (e & lu)
          return "SelectiveHydration";
        if (e & uu)
          return "IdleHydration";
        if (e & Mi)
          return "Idle";
        if (e & Jn)
          return "Offscreen";
      }
    }
    var lt = -1, Js = dl, ec = Pa;
    function ou(e) {
      switch (Ft(e)) {
        case he:
          return he;
        case ga:
          return ga;
        case vr:
          return vr;
        case cl:
          return cl;
        case pt:
          return pt;
        case fl:
          return fl;
        case dl:
        case Ar:
        case Zn:
        case pl:
        case Co:
        case Eo:
        case js:
        case Bs:
        case Ys:
        case Ps:
        case $s:
        case Qs:
        case Is:
        case Gs:
        case vl:
        case Ws:
          return e & bi;
        case Pa:
        case Xs:
        case To:
        case qs:
        case Ks:
          return e & hl;
        case lu:
          return lu;
        case uu:
          return uu;
        case Mi:
          return Mi;
        case Jn:
          return Jn;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ro(e, t) {
      var a = e.pendingLanes;
      if (a === z)
        return z;
      var i = z, u = e.suspendedLanes, s = e.pingedLanes, f = a & Zs;
      if (f !== z) {
        var p = f & ~u;
        if (p !== z)
          i = ou(p);
        else {
          var v = f & s;
          v !== z && (i = ou(v));
        }
      } else {
        var m = a & ~u;
        m !== z ? i = ou(m) : s !== z && (i = ou(s));
      }
      if (i === z)
        return z;
      if (t !== z && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === z) {
        var y = Ft(i), R = Ft(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === pt && (R & bi) !== z
        )
          return t;
      }
      (i & vr) !== z && (i |= a & pt);
      var E = e.entangledLanes;
      if (E !== z)
        for (var b = e.entanglements, M = i & E; M > 0; ) {
          var O = _i(M), X = 1 << O;
          i |= b[O], M &= ~X;
        }
      return i;
    }
    function wv(e, t) {
      for (var a = e.eventTimes, i = lt; t > 0; ) {
        var u = _i(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function tc(e, t) {
      switch (e) {
        case he:
        case ga:
        case vr:
          return t + 250;
        case cl:
        case pt:
        case fl:
        case dl:
        case Ar:
        case Zn:
        case pl:
        case Co:
        case Eo:
        case js:
        case Bs:
        case Ys:
        case Ps:
        case $s:
        case Qs:
        case Is:
        case Gs:
        case vl:
        case Ws:
          return t + 5e3;
        case Pa:
        case Xs:
        case To:
        case qs:
        case Ks:
          return lt;
        case lu:
        case uu:
        case Mi:
        case Jn:
          return lt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), lt;
      }
    }
    function Km(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _i(f), v = 1 << p, m = s[p];
        m === lt ? ((v & i) === z || (v & u) !== z) && (s[p] = tc(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Zm(e) {
      return ou(e.pendingLanes);
    }
    function qf(e) {
      var t = e.pendingLanes & ~Jn;
      return t !== z ? t : t & Jn ? Jn : z;
    }
    function su(e) {
      return (e & he) !== z;
    }
    function xo(e) {
      return (e & Zs) !== z;
    }
    function nc(e) {
      return (e & hl) === e;
    }
    function Jm(e) {
      var t = he | vr | pt;
      return (e & t) === z;
    }
    function Dv(e) {
      return (e & bi) === e;
    }
    function wo(e, t) {
      var a = ga | vr | cl | pt;
      return (t & a) !== z;
    }
    function kv(e, t) {
      return (t & e.expiredLanes) !== z;
    }
    function Kf(e) {
      return (e & bi) !== z;
    }
    function Zf() {
      var e = Js;
      return Js <<= 1, (Js & bi) === z && (Js = dl), e;
    }
    function ey() {
      var e = ec;
      return ec <<= 1, (ec & hl) === z && (ec = Pa), e;
    }
    function Ft(e) {
      return e & -e;
    }
    function $t(e) {
      return Ft(e);
    }
    function _i(e) {
      return 31 - Fs(e);
    }
    function rc(e) {
      return _i(e);
    }
    function er(e, t) {
      return (e & t) !== z;
    }
    function ml(e, t) {
      return (e & t) === t;
    }
    function ke(e, t) {
      return e | t;
    }
    function cu(e, t) {
      return e & ~t;
    }
    function Jf(e, t) {
      return e & t;
    }
    function bv(e) {
      return e;
    }
    function Mv(e, t) {
      return e !== Ve && e < t ? e : t;
    }
    function ac(e) {
      for (var t = [], a = 0; a < dt; a++)
        t.push(e);
      return t;
    }
    function yl(e, t, a) {
      e.pendingLanes |= t, t !== Mi && (e.suspendedLanes = z, e.pingedLanes = z);
      var i = e.eventTimes, u = rc(t);
      i[u] = a;
    }
    function ed(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = _i(i), s = 1 << u;
        a[u] = lt, i &= ~s;
      }
    }
    function td(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function nd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = z, e.pingedLanes = z, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _i(f), v = 1 << p;
        i[p] = z, u[p] = lt, s[p] = lt, f &= ~v;
      }
    }
    function fu(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = _i(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ty(e, t) {
      var a = Ft(t), i;
      switch (a) {
        case vr:
          i = ga;
          break;
        case pt:
          i = cl;
          break;
        case dl:
        case Ar:
        case Zn:
        case pl:
        case Co:
        case Eo:
        case js:
        case Bs:
        case Ys:
        case Ps:
        case $s:
        case Qs:
        case Is:
        case Gs:
        case vl:
        case Ws:
        case Pa:
        case Xs:
        case To:
        case qs:
        case Ks:
          i = fl;
          break;
        case Mi:
          i = uu;
          break;
        default:
          i = Ve;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ve ? Ve : i;
    }
    function rd(e, t, a) {
      if (un)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = rc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function ic(e, t) {
      if (un)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = rc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ad(e, t) {
      return null;
    }
    var Rn = he, on = vr, $a = pt, Do = Mi, gl = Ve;
    function Hr() {
      return gl;
    }
    function Qt(e) {
      gl = e;
    }
    function ko(e, t) {
      var a = gl;
      try {
        return gl = e, t();
      } finally {
        gl = a;
      }
    }
    function xn(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ny(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function id(e, t) {
      return e !== 0 && e < t;
    }
    function bo(e) {
      var t = Ft(e);
      return id(Rn, t) ? id(on, t) ? xo(t) ? $a : Do : on : Rn;
    }
    function It(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var _v;
    function Z(e) {
      _v = e;
    }
    function du(e) {
      _v(e);
    }
    var Mo;
    function Lv(e) {
      Mo = e;
    }
    var Ov;
    function _o(e) {
      Ov = e;
    }
    var Lo;
    function ld(e) {
      Lo = e;
    }
    var ud;
    function Nv(e) {
      ud = e;
    }
    var lc = !1, pu = [], Sa = null, mt = null, Jt = null, Fr = /* @__PURE__ */ new Map(), vu = /* @__PURE__ */ new Map(), Qa = [], ua = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function zv(e) {
      return ua.indexOf(e) > -1;
    }
    function Ca(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Uv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Sa = null;
          break;
        case "dragenter":
        case "dragleave":
          mt = null;
          break;
        case "mouseover":
        case "mouseout":
          Jt = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Fr.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          vu.delete(i);
          break;
        }
      }
    }
    function hu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Ca(t, a, i, u, s);
        if (t !== null) {
          var p = Du(t);
          p !== null && Mo(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Av(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Sa = hu(Sa, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return mt = hu(mt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Jt = hu(Jt, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return Fr.set(m, hu(Fr.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, R = y.pointerId;
          return vu.set(R, hu(vu.get(R) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function od(e) {
      var t = jo(e.target);
      if (t !== null) {
        var a = fr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === He) {
            var u = Hf(a);
            if (u !== null) {
              e.blockedOn = u, ud(e.priority, function() {
                Ov(a);
              });
              return;
            }
          } else if (i === ie) {
            var s = a.stateNode;
            if (It(s)) {
              e.blockedOn = bs(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Hv(e) {
      for (var t = Lo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Qa.length && id(t, Qa[i].priority); i++)
        ;
      Qa.splice(i, 0, a), i === 0 && od(a);
    }
    function uc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Sl(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          so(s), u.target.dispatchEvent(s), Im();
        } else {
          var f = Du(i);
          return f !== null && Mo(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Oo(e, t, a) {
      uc(e) && a.delete(t);
    }
    function sd() {
      lc = !1, Sa !== null && uc(Sa) && (Sa = null), mt !== null && uc(mt) && (mt = null), Jt !== null && uc(Jt) && (Jt = null), Fr.forEach(Oo), vu.forEach(Oo);
    }
    function wn(e, t) {
      e.blockedOn === t && (e.blockedOn = null, lc || (lc = !0, ve.unstable_scheduleCallback(ve.unstable_NormalPriority, sd)));
    }
    function ze(e) {
      if (pu.length > 0) {
        wn(pu[0], e);
        for (var t = 1; t < pu.length; t++) {
          var a = pu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Sa !== null && wn(Sa, e), mt !== null && wn(mt, e), Jt !== null && wn(Jt, e);
      var i = function(p) {
        return wn(p, e);
      };
      Fr.forEach(i), vu.forEach(i);
      for (var u = 0; u < Qa.length; u++) {
        var s = Qa[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Qa.length > 0; ) {
        var f = Qa[0];
        if (f.blockedOn !== null)
          break;
        od(f), f.blockedOn === null && Qa.shift();
      }
    }
    var Ct = L.ReactCurrentBatchConfig, bt = !0;
    function en(e) {
      bt = !!e;
    }
    function hr() {
      return bt;
    }
    function mu(e, t, a) {
      var i = On(t), u;
      switch (i) {
        case Rn:
          u = Gt;
          break;
        case on:
          u = No;
          break;
        case $a:
        default:
          u = Ia;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Gt(e, t, a, i) {
      var u = Hr(), s = Ct.transition;
      Ct.transition = null;
      try {
        Qt(Rn), Ia(e, t, a, i);
      } finally {
        Qt(u), Ct.transition = s;
      }
    }
    function No(e, t, a, i) {
      var u = Hr(), s = Ct.transition;
      Ct.transition = null;
      try {
        Qt(on), Ia(e, t, a, i);
      } finally {
        Qt(u), Ct.transition = s;
      }
    }
    function Ia(e, t, a, i) {
      bt && oc(e, t, a, i);
    }
    function oc(e, t, a, i) {
      var u = Sl(e, t, a, i);
      if (u === null) {
        Ty(e, t, i, yu, a), Uv(e, i);
        return;
      }
      if (Av(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Uv(e, i), t & tl && zv(e)) {
        for (; u !== null; ) {
          var s = Du(u);
          s !== null && du(s);
          var f = Sl(e, t, a, i);
          if (f === null && Ty(e, t, i, yu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ty(e, t, i, null, a);
    }
    var yu = null;
    function Sl(e, t, a, i) {
      yu = null;
      var u = Rs(i), s = jo(u);
      if (s !== null) {
        var f = fr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === He) {
            var v = Hf(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ie) {
            var m = f.stateNode;
            if (It(m))
              return bs(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return yu = s, null;
    }
    function On(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Rn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return on;
        case "message": {
          var t = jf();
          switch (t) {
            case Os:
              return Rn;
            case pr:
              return on;
            case ya:
            case Ns:
              return $a;
            case Ti:
              return Do;
            default:
              return $a;
          }
        }
        default:
          return $a;
      }
    }
    function cd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function gu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Ga(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function sc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Cl = null, Ea = null, Li = null;
    function Oi(e) {
      return Cl = e, Ea = fc(), !0;
    }
    function cc() {
      Cl = null, Ea = null, Li = null;
    }
    function Su() {
      if (Li)
        return Li;
      var e, t = Ea, a = t.length, i, u = fc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Li = u.slice(e, p), Li;
    }
    function fc() {
      return "value" in Cl ? Cl.value : Cl.textContent;
    }
    function El(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Tl() {
      return !0;
    }
    function Dn() {
      return !1;
    }
    function Vt(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Tl : this.isDefaultPrevented = Dn, this.isPropagationStopped = Dn, this;
      }
      return Ne(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Tl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Tl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Tl
      }), t;
    }
    var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, bn = Vt(kn), Cu = Ne({}, kn, {
      view: 0,
      detail: 0
    }), fd = Vt(Cu), zo, dd, Vr;
    function Fv(e) {
      e !== Vr && (Vr && e.type === "mousemove" ? (zo = e.screenX - Vr.screenX, dd = e.screenY - Vr.screenY) : (zo = 0, dd = 0), Vr = e);
    }
    var Eu = Ne({}, Cu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: vc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Fv(e), zo);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : dd;
      }
    }), Ni = Vt(Eu), pd = Ne({}, Eu, {
      dataTransfer: 0
    }), Rl = Vt(pd), Vv = Ne({}, Cu, {
      relatedTarget: 0
    }), dc = Vt(Vv), vd = Ne({}, kn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), pc = Vt(vd), ry = Ne({}, kn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ay = Vt(ry), jv = Ne({}, kn, {
      data: 0
    }), hd = Vt(jv), xl = hd, iy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Tu = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Bv(e) {
      if (e.key) {
        var t = iy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = El(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Tu[e.keyCode] || "Unidentified" : "";
    }
    var Mt = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ly(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Mt[e];
      return i ? !!a[i] : !1;
    }
    function vc(e) {
      return ly;
    }
    var uy = Ne({}, Cu, {
      key: Bv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? El(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? El(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), oy = Vt(uy), Yv = Ne({}, Eu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), md = Vt(Yv), sy = Ne({}, Cu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vc
    }), jr = Vt(sy), yd = Ne({}, kn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cy = Vt(yd), zi = Ne({}, Eu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), hc = Vt(zi), wl = [9, 13, 27, 32], Uo = 229, Ao = Sn && "CompositionEvent" in window, Dl = null;
    Sn && "documentMode" in document && (Dl = document.documentMode);
    var fy = Sn && "TextEvent" in window && !Dl, mc = Sn && (!Ao || Dl && Dl > 8 && Dl <= 11), Pv = 32, gd = String.fromCharCode(Pv);
    function $v() {
      Rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Rr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Rr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Rr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ho = !1;
    function yc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Qv(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Sd(e, t) {
      return e === "keydown" && t.keyCode === Uo;
    }
    function Iv(e, t) {
      switch (e) {
        case "keyup":
          return wl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Uo;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Cd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function gc(e) {
      return e.locale === "ko";
    }
    var Wa = !1;
    function Ed(e, t, a, i, u) {
      var s, f;
      if (Ao ? s = Qv(t) : Wa ? Iv(t, i) && (s = "onCompositionEnd") : Sd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      mc && !gc(i) && (!Wa && s === "onCompositionStart" ? Wa = Oi(u) : s === "onCompositionEnd" && Wa && (f = Su()));
      var p = Kv(a, s);
      if (p.length > 0) {
        var v = new hd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Cd(i);
          m !== null && (v.data = m);
        }
      }
    }
    function Sc(e, t) {
      switch (e) {
        case "compositionend":
          return Cd(t);
        case "keypress":
          var a = t.which;
          return a !== Pv ? null : (Ho = !0, gd);
        case "textInput":
          var i = t.data;
          return i === gd && Ho ? null : i;
        default:
          return null;
      }
    }
    function Gv(e, t) {
      if (Wa) {
        if (e === "compositionend" || !Ao && Iv(e, t)) {
          var a = Su();
          return cc(), Wa = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!yc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return mc && !gc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function dy(e, t, a, i, u) {
      var s;
      if (fy ? s = Sc(t, i) : s = Gv(t, i), !s)
        return null;
      var f = Kv(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new xl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Cc(e, t, a, i, u, s, f) {
      Ed(e, t, a, i, u), dy(e, t, a, i, u);
    }
    var py = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ru(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!py[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function vy(e) {
      if (!Sn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Ec() {
      Rr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      xs(i);
      var u = Kv(t, "onChange");
      if (u.length > 0) {
        var s = new bn("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, Rs(e)), Mf(d, t);
    }
    function d(e) {
      T0(e, 0);
    }
    function h(e) {
      var t = kc(e);
      if (Np(t))
        return e;
    }
    function S(e, t) {
      if (e === "change")
        return t;
    }
    var C = !1;
    Sn && (C = vy("input") && (!document.documentMode || document.documentMode > 9));
    function _(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", F);
    }
    function H() {
      r && (r.detachEvent("onpropertychange", F), r = null, l = null);
    }
    function F(e) {
      e.propertyName === "value" && h(l) && c(e);
    }
    function A(e, t, a) {
      e === "focusin" ? (H(), _(t, a)) : e === "focusout" && H();
    }
    function G(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return h(l);
    }
    function J(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ne(e, t) {
      if (e === "click")
        return h(t);
    }
    function Ot(e, t) {
      if (e === "input" || e === "change")
        return h(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || vi(e, "number", e.value);
    }
    function T(e, t, a, i, u, s, f) {
      var p = a ? kc(a) : window, v, m;
      if (o(p) ? v = S : Ru(p) ? C ? v = Ot : (v = G, m = A) : J(p) && (v = ne), v) {
        var y = v(t, a);
        if (y) {
          n(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && x(p);
    }
    function k() {
      Ma("onMouseEnter", ["mouseout", "mouseover"]), Ma("onMouseLeave", ["mouseout", "mouseover"]), Ma("onPointerEnter", ["pointerout", "pointerover"]), Ma("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function B(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !cv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (jo(m) || Ud(m)))
          return;
      }
      if (!(!v && !p)) {
        var y;
        if (u.window === u)
          y = u;
        else {
          var R = u.ownerDocument;
          R ? y = R.defaultView || R.parentWindow : y = window;
        }
        var E, b;
        if (v) {
          var M = i.relatedTarget || i.toElement;
          if (E = a, b = M ? jo(M) : null, b !== null) {
            var O = fr(b);
            (b !== O || b.tag !== le && b.tag !== Le) && (b = null);
          }
        } else
          E = null, b = a;
        if (E !== b) {
          var X = Ni, ce = "onMouseLeave", ae = "onMouseEnter", Be = "mouse";
          (t === "pointerout" || t === "pointerover") && (X = md, ce = "onPointerLeave", ae = "onPointerEnter", Be = "pointer");
          var Ue = E == null ? y : kc(E), w = b == null ? y : kc(b), N = new X(ce, Be + "leave", E, i, u);
          N.target = Ue, N.relatedTarget = w;
          var D = null, V = jo(u);
          if (V === a) {
            var q = new X(ae, Be + "enter", b, i, u);
            q.target = w, q.relatedTarget = Ue, D = q;
          }
          CT(e, N, D, E, b);
        }
      }
    }
    function re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ee = typeof Object.is == "function" ? Object.is : re;
    function oe(e, t) {
      if (ee(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!$n.call(t, s) || !ee(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ce(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function tn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ye(e, t) {
      for (var a = Ce(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Ua) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ce(tn(a));
      }
    }
    function Ui(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return hy(e, u, s, f, p);
    }
    function hy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, R = null;
      e:
        for (; ; ) {
          for (var E = null; y === t && (a === 0 || y.nodeType === Ua) && (f = s + a), y === i && (u === 0 || y.nodeType === Ua) && (p = s + u), y.nodeType === Ua && (s += y.nodeValue.length), (E = y.firstChild) !== null; )
            R = y, y = E;
          for (; ; ) {
            if (y === e)
              break e;
            if (R === t && ++v === a && (f = s), R === i && ++m === u && (p = s), (E = y.nextSibling) !== null)
              break;
            y = R, R = y.parentNode;
          }
          y = E;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function tT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = Ye(e, f), y = Ye(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function c0(e) {
      return e && e.nodeType === Ua;
    }
    function f0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : c0(e) ? !1 : c0(t) ? f0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function nT(e) {
      return e && e.ownerDocument && f0(e.ownerDocument.documentElement, e);
    }
    function rT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function d0() {
      for (var e = window, t = cs(); t instanceof e.HTMLIFrameElement; ) {
        if (rT(t))
          e = t.contentWindow;
        else
          return t;
        t = cs(e.document);
      }
      return t;
    }
    function my(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function aT() {
      var e = d0();
      return {
        focusedElem: e,
        selectionRange: my(e) ? lT(e) : null
      };
    }
    function iT(e) {
      var t = d0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && nT(a)) {
        i !== null && my(a) && uT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === In && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function lT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ui(e), t || {
        start: 0,
        end: 0
      };
    }
    function uT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : tT(e, t);
    }
    var oT = Sn && "documentMode" in document && document.documentMode <= 11;
    function sT() {
      Rr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Tc = null, yy = null, Td = null, gy = !1;
    function cT(e) {
      if ("selectionStart" in e && my(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function fT(e) {
      return e.window === e ? e.document : e.nodeType === ra ? e : e.ownerDocument;
    }
    function p0(e, t, a) {
      var i = fT(a);
      if (!(gy || Tc == null || Tc !== cs(i))) {
        var u = cT(Tc);
        if (!Td || !oe(Td, u)) {
          Td = u;
          var s = Kv(yy, "onSelect");
          if (s.length > 0) {
            var f = new bn("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Tc;
          }
        }
      }
    }
    function dT(e, t, a, i, u, s, f) {
      var p = a ? kc(a) : window;
      switch (t) {
        case "focusin":
          (Ru(p) || p.contentEditable === "true") && (Tc = p, yy = a, Td = null);
          break;
        case "focusout":
          Tc = null, yy = null, Td = null;
          break;
        case "mousedown":
          gy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gy = !1, p0(e, i, u);
          break;
        case "selectionchange":
          if (oT)
            break;
        case "keydown":
        case "keyup":
          p0(e, i, u);
      }
    }
    function Wv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Rc = {
      animationend: Wv("Animation", "AnimationEnd"),
      animationiteration: Wv("Animation", "AnimationIteration"),
      animationstart: Wv("Animation", "AnimationStart"),
      transitionend: Wv("Transition", "TransitionEnd")
    }, Sy = {}, v0 = {};
    Sn && (v0 = document.createElement("div").style, "AnimationEvent" in window || (delete Rc.animationend.animation, delete Rc.animationiteration.animation, delete Rc.animationstart.animation), "TransitionEvent" in window || delete Rc.transitionend.transition);
    function Xv(e) {
      if (Sy[e])
        return Sy[e];
      if (!Rc[e])
        return e;
      var t = Rc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in v0)
          return Sy[e] = t[a];
      return e;
    }
    var h0 = Xv("animationend"), m0 = Xv("animationiteration"), y0 = Xv("animationstart"), g0 = Xv("transitionend"), S0 = /* @__PURE__ */ new Map(), C0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function xu(e, t) {
      S0.set(e, t), Rr(t, [e]);
    }
    function pT() {
      for (var e = 0; e < C0.length; e++) {
        var t = C0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        xu(a, "on" + i);
      }
      xu(h0, "onAnimationEnd"), xu(m0, "onAnimationIteration"), xu(y0, "onAnimationStart"), xu("dblclick", "onDoubleClick"), xu("focusin", "onFocus"), xu("focusout", "onBlur"), xu(g0, "onTransitionEnd");
    }
    function vT(e, t, a, i, u, s, f) {
      var p = S0.get(t);
      if (p !== void 0) {
        var v = bn, m = t;
        switch (t) {
          case "keypress":
            if (El(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = oy;
            break;
          case "focusin":
            m = "focus", v = dc;
            break;
          case "focusout":
            m = "blur", v = dc;
            break;
          case "beforeblur":
          case "afterblur":
            v = dc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Ni;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Rl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = jr;
            break;
          case h0:
          case m0:
          case y0:
            v = pc;
            break;
          case g0:
            v = cy;
            break;
          case "scroll":
            v = fd;
            break;
          case "wheel":
            v = hc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ay;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = md;
            break;
        }
        var y = (s & tl) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", E = gT(a, p, i.type, y, R);
          if (E.length > 0) {
            var b = new v(p, m, null, i, u);
            e.push({
              event: b,
              listeners: E
            });
          }
        }
      }
    }
    pT(), k(), Ec(), sT(), $v();
    function hT(e, t, a, i, u, s, f) {
      vT(e, t, a, i, u, s);
      var p = (s & Qm) === 0;
      p && (B(e, t, a, i, u), T(e, t, a, i, u), dT(e, t, a, i, u), Cc(e, t, a, i, u));
    }
    var Rd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Rd));
    function E0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Va(i, t, void 0, e), e.currentTarget = null;
    }
    function mT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          E0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], R = y.instance, E = y.currentTarget, b = y.listener;
          if (R !== i && e.isPropagationStopped())
            return;
          E0(e, b, E), i = R;
        }
    }
    function T0(e, t) {
      for (var a = (t & tl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        mT(s, f, a);
      }
      Nf();
    }
    function yT(e, t, a, i, u) {
      var s = Rs(a), f = [];
      hT(f, e, i, a, s, t), T0(f, t);
    }
    function Et(e, t) {
      Cy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = GR(t), u = ET(e, a);
      i.has(u) || (R0(t, e, uo, a), i.add(u));
    }
    function Ey(e, t, a) {
      Cy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tl), R0(a, e, i, t);
    }
    var qv = "_reactListening" + Math.random().toString(36).slice(2);
    function xd(e) {
      if (!e[qv]) {
        e[qv] = !0, Xr.forEach(function(a) {
          a !== "selectionchange" && (Cy.has(a) || Ey(a, !1, e), Ey(a, !0, e));
        });
        var t = e.nodeType === ra ? e : e.ownerDocument;
        t !== null && (t[qv] || (t[qv] = !0, Ey("selectionchange", !1, t)));
      }
    }
    function R0(e, t, a, i, u) {
      var s = mu(e, t, a), f = void 0;
      po && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Ga(e, t, s, f) : gu(e, t, s) : f !== void 0 ? sc(e, t, s, f) : cd(e, t, s);
    }
    function x0(e, t) {
      return e === t || e.nodeType === Ht && e.parentNode === t;
    }
    function Ty(e, t, a, i, u) {
      var s = i;
      if (!(t & Ha) && !(t & uo)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === ie || v === me) {
                var m = p.stateNode.containerInfo;
                if (x0(m, f))
                  break;
                if (v === me)
                  for (var y = p.return; y !== null; ) {
                    var R = y.tag;
                    if (R === ie || R === me) {
                      var E = y.stateNode.containerInfo;
                      if (x0(E, f))
                        return;
                    }
                    y = y.return;
                  }
                for (; m !== null; ) {
                  var b = jo(m);
                  if (b === null)
                    return;
                  var M = b.tag;
                  if (M === le || M === Le) {
                    p = s = b;
                    continue e;
                  }
                  m = m.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      Mf(function() {
        return yT(e, t, a, s);
      });
    }
    function wd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function gT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, E = R.stateNode, b = R.tag;
        if (b === le && E !== null && (y = E, p !== null)) {
          var M = rl(m, p);
          M != null && v.push(wd(m, M, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function Kv(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === le && f !== null) {
          var v = f, m = rl(u, a);
          m != null && i.unshift(wd(u, m, v));
          var y = rl(u, t);
          y != null && i.push(wd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function xc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== le);
      return e || null;
    }
    function ST(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = xc(s))
        u++;
      for (var f = 0, p = i; p; p = xc(p))
        f++;
      for (; u - f > 0; )
        a = xc(a), u--;
      for (; f - u > 0; )
        i = xc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = xc(a), i = xc(i);
      }
      return null;
    }
    function w0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === le && y !== null) {
          var E = y;
          if (u) {
            var b = rl(p, s);
            b != null && f.unshift(wd(p, b, E));
          } else if (!u) {
            var M = rl(p, s);
            M != null && f.push(wd(p, M, E));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function CT(e, t, a, i, u) {
      var s = i && u ? ST(i, u) : null;
      i !== null && w0(e, t, i, s, !1), u !== null && a !== null && w0(e, a, u, s, !0);
    }
    function ET(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Br = !1, Dd = "dangerouslySetInnerHTML", Zv = "suppressContentEditableWarning", wu = "suppressHydrationWarning", D0 = "autoFocus", Fo = "children", Vo = "style", Jv = "__html", Ry, eh, kd, k0, th, b0, M0;
    Ry = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, eh = function(e, t) {
      Ts(e, t), xf(e, t), sv(e, t, {
        registrationNameDependencies: fa,
        possibleRegistrationNames: Yu
      });
    }, b0 = Sn && !document.documentMode, kd = function(e, t, a) {
      if (!Br) {
        var i = nh(a), u = nh(t);
        u !== i && (Br = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, k0 = function(e) {
      if (!Br) {
        Br = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, th = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, M0 = function(e, t) {
      var a = e.namespaceURI === za ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var TT = /\r\n?/g, RT = /\u0000|\uFFFD/g;
    function nh(e) {
      Wi(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(TT, `
`).replace(RT, "");
    }
    function rh(e, t, a, i) {
      var u = nh(t), s = nh(e);
      if (s !== u && (i && (Br || (Br = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Tr))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function _0(e) {
      return e.nodeType === ra ? e : e.ownerDocument;
    }
    function xT() {
    }
    function ah(e) {
      e.onclick = xT;
    }
    function wT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Vo)
            f && Object.freeze(f), Jp(t, f);
          else if (s === Dd) {
            var p = f ? f[Jv] : void 0;
            p != null && Yp(t, p);
          } else if (s === Fo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && gs(t, f);
            } else
              typeof f == "number" && gs(t, "" + f);
          else
            s === Zv || s === wu || s === D0 || (fa.hasOwnProperty(s) ? f != null && (typeof f != "function" && th(s, f), s === "onScroll" && Et("scroll", t)) : f != null && Xi(t, s, f, u));
        }
    }
    function DT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Vo ? Jp(e, f) : s === Dd ? Yp(e, f) : s === Fo ? gs(e, f) : Xi(e, s, f, i);
      }
    }
    function kT(e, t, a, i) {
      var u, s = _0(a), f, p = i;
      if (p === za && (p = ms(e)), p === za) {
        if (u = Aa(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var m = v.firstChild;
          f = v.removeChild(m);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var y = f;
          t.multiple ? y.multiple = !0 : t.size && (y.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === za && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !$n.call(Ry, e) && (Ry[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function bT(e, t) {
      return _0(t).createTextNode(e);
    }
    function MT(e, t, a, i) {
      var u = Aa(t, a);
      eh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Et("cancel", e), Et("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Et("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Rd.length; f++)
            Et(Rd[f], e);
          s = a;
          break;
        case "source":
          Et("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Et("error", e), Et("load", e), s = a;
          break;
        case "details":
          Et("toggle", e), s = a;
          break;
        case "input":
          to(e, a), s = eo(e, a), Et("invalid", e);
          break;
        case "option":
          vs(e, a), s = a;
          break;
        case "select":
          Fp(e, a), s = pf(e, a), Et("invalid", e);
          break;
        case "textarea":
          Vp(e, a), s = hf(e, a), Et("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Cs(t, s), wT(t, e, i, s, u), t) {
        case "input":
          Zi(e), no(e, a, !1);
          break;
        case "textarea":
          Zi(e), Bp(e);
          break;
        case "option":
          df(e, a);
          break;
        case "select":
          zm(e, a);
          break;
        default:
          typeof s.onClick == "function" && ah(e);
          break;
      }
    }
    function _T(e, t, a, i, u) {
      eh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = eo(e, a), p = eo(e, i), s = [];
          break;
        case "select":
          f = pf(e, a), p = pf(e, i), s = [];
          break;
        case "textarea":
          f = hf(e, a), p = hf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && ah(e);
          break;
      }
      Cs(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Vo) {
            var R = f[v];
            for (m in R)
              R.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else
            v === Dd || v === Fo || v === Zv || v === wu || v === D0 || (fa.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var E = p[v], b = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || E === b || E == null && b == null))
          if (v === Vo)
            if (E && Object.freeze(E), b) {
              for (m in b)
                b.hasOwnProperty(m) && (!E || !E.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in E)
                E.hasOwnProperty(m) && b[m] !== E[m] && (y || (y = {}), y[m] = E[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = E;
          else if (v === Dd) {
            var M = E ? E[Jv] : void 0, O = b ? b[Jv] : void 0;
            M != null && O !== M && (s = s || []).push(v, M);
          } else
            v === Fo ? (typeof E == "string" || typeof E == "number") && (s = s || []).push(v, "" + E) : v === Zv || v === wu || (fa.hasOwnProperty(v) ? (E != null && (typeof E != "function" && th(v, E), v === "onScroll" && Et("scroll", e)), !s && b !== E && (s = [])) : (s = s || []).push(v, E));
      }
      return y && (io(y, p[Vo]), (s = s || []).push(Vo, y)), s;
    }
    function LT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && ff(e, u);
      var s = Aa(a, i), f = Aa(a, u);
      switch (DT(e, t, s, f), a) {
        case "input":
          Gl(e, u);
          break;
        case "textarea":
          jp(e, u);
          break;
        case "select":
          Um(e, u);
          break;
      }
    }
    function OT(e) {
      {
        var t = e.toLowerCase();
        return Es.hasOwnProperty(t) && Es[t] || null;
      }
    }
    function NT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Aa(t, a), eh(t, a), t) {
        case "dialog":
          Et("cancel", e), Et("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Et("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Rd.length; m++)
            Et(Rd[m], e);
          break;
        case "source":
          Et("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Et("error", e), Et("load", e);
          break;
        case "details":
          Et("toggle", e);
          break;
        case "input":
          to(e, a), Et("invalid", e);
          break;
        case "option":
          vs(e, a);
          break;
        case "select":
          Fp(e, a), Et("invalid", e);
          break;
        case "textarea":
          Vp(e, a), Et("invalid", e);
          break;
      }
      Cs(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var y = e.attributes, R = 0; R < y.length; R++) {
          var E = y[R].name.toLowerCase();
          switch (E) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(y[R].name);
          }
        }
      }
      var b = null;
      for (var M in a)
        if (a.hasOwnProperty(M)) {
          var O = a[M];
          if (M === Fo)
            typeof O == "string" ? e.textContent !== O && (a[wu] !== !0 && rh(e.textContent, O, s, f), b = [Fo, O]) : typeof O == "number" && e.textContent !== "" + O && (a[wu] !== !0 && rh(e.textContent, O, s, f), b = [Fo, "" + O]);
          else if (fa.hasOwnProperty(M))
            O != null && (typeof O != "function" && th(M, O), M === "onScroll" && Et("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var X = void 0, ce = p && Pn ? null : pa(M);
            if (a[wu] !== !0) {
              if (!(M === Zv || M === wu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              M === "value" || M === "checked" || M === "selected")) {
                if (M === Dd) {
                  var ae = e.innerHTML, Be = O ? O[Jv] : void 0;
                  if (Be != null) {
                    var Ue = M0(e, Be);
                    Ue !== ae && kd(M, ae, Ue);
                  }
                } else if (M === Vo) {
                  if (v.delete(M), b0) {
                    var w = Pm(O);
                    X = e.getAttribute("style"), w !== X && kd(M, X, w);
                  }
                } else if (p && !Pn)
                  v.delete(M.toLowerCase()), X = is(e, M, O), O !== X && kd(M, X, O);
                else if (!Bt(M, ce, p) && !xt(M, O, ce, p)) {
                  var N = !1;
                  if (ce !== null)
                    v.delete(ce.attributeName), X = $u(e, M, O, ce);
                  else {
                    var D = i;
                    if (D === za && (D = ms(t)), D === za)
                      v.delete(M.toLowerCase());
                    else {
                      var V = OT(M);
                      V !== null && V !== M && (N = !0, v.delete(V)), v.delete(M);
                    }
                    X = is(e, M, O);
                  }
                  var q = Pn;
                  !q && O !== X && !N && kd(M, X, O);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[wu] !== !0 && k0(v), t) {
        case "input":
          Zi(e), no(e, a, !0);
          break;
        case "textarea":
          Zi(e), Bp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && ah(e);
          break;
      }
      return b;
    }
    function zT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function xy(e, t) {
      {
        if (Br)
          return;
        Br = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function wy(e, t) {
      {
        if (Br)
          return;
        Br = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t, a) {
      {
        if (Br)
          return;
        Br = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (t === "" || Br)
          return;
        Br = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function UT(e, t, a) {
      switch (t) {
        case "input":
          zp(e, a);
          return;
        case "textarea":
          mf(e, a);
          return;
        case "select":
          Am(e, a);
          return;
      }
    }
    var bd = function() {
    }, Md = function() {
    };
    {
      var AT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], L0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], HT = L0.concat(["button"]), FT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], O0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Md = function(e, t) {
        var a = Ne({}, e || O0), i = {
          tag: t
        };
        return L0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), HT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), AT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var VT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return FT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, jT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, N0 = {};
      bd = function(e, t, a) {
        a = a || O0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = VT(e, u) ? null : i, f = s ? null : jT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!N0[m]) {
            N0[m] = !0;
            var y = e, R = "";
            if (e === "#text" ? /\S/.test(t) ? y = "Text nodes" : (y = "Whitespace text nodes", R = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : y = "<" + e + ">", s) {
              var E = "";
              v === "table" && e === "tr" && (E += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", y, v, R, E);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", y, v);
          }
        }
      };
    }
    var ih = "suppressHydrationWarning", lh = "$", uh = "/$", _d = "$?", Ld = "$!", BT = "style", by = null, My = null;
    function YT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ra:
        case Ji: {
          t = i === ra ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : gf(null, "");
          break;
        }
        default: {
          var s = i === Ht ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = gf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Md(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function PT(e, t, a) {
      {
        var i = e, u = gf(i.namespace, t), s = Md(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Zk(e) {
      return e;
    }
    function $T(e) {
      by = hr(), My = aT();
      var t = null;
      return en(!1), t;
    }
    function QT(e) {
      iT(My), en(by), by = null, My = null;
    }
    function IT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (bd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Md(f.ancestorInfo, e);
          bd(null, p, v);
        }
        s = f.namespace;
      }
      var m = kT(e, t, a, s);
      return zd(u, m), Hy(m, t), m;
    }
    function GT(e, t) {
      e.appendChild(t);
    }
    function WT(e, t, a, i, u) {
      switch (MT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function XT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Md(f.ancestorInfo, t);
          bd(null, p, v);
        }
      }
      return _T(e, t, a, i);
    }
    function _y(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function qT(e, t, a, i) {
      {
        var u = a;
        bd(null, e, u.ancestorInfo);
      }
      var s = bT(e, t);
      return zd(i, s), s;
    }
    function KT() {
      var e = window.event;
      return e === void 0 ? $a : On(e.type);
    }
    var Ly = typeof setTimeout == "function" ? setTimeout : void 0, ZT = typeof clearTimeout == "function" ? clearTimeout : void 0, Oy = -1, z0 = typeof Promise == "function" ? Promise : void 0, JT = typeof queueMicrotask == "function" ? queueMicrotask : typeof z0 < "u" ? function(e) {
      return z0.resolve(null).then(e).catch(eR);
    } : Ly;
    function eR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function tR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function nR(e, t, a, i, u, s) {
      LT(e, t, a, i, u), Hy(e, u);
    }
    function U0(e) {
      gs(e, "");
    }
    function rR(e, t, a) {
      e.nodeValue = a;
    }
    function aR(e, t) {
      e.appendChild(t);
    }
    function iR(e, t) {
      var a;
      e.nodeType === Ht ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && ah(a);
    }
    function lR(e, t, a) {
      e.insertBefore(t, a);
    }
    function uR(e, t, a) {
      e.nodeType === Ht ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function oR(e, t) {
      e.removeChild(t);
    }
    function sR(e, t) {
      e.nodeType === Ht ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ny(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ht) {
          var s = u.data;
          if (s === uh)
            if (i === 0) {
              e.removeChild(u), ze(t);
              return;
            } else
              i--;
          else
            (s === lh || s === _d || s === Ld) && i++;
        }
        a = u;
      } while (a);
      ze(t);
    }
    function cR(e, t) {
      e.nodeType === Ht ? Ny(e.parentNode, t) : e.nodeType === In && Ny(e, t), ze(e);
    }
    function fR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function dR(e) {
      e.nodeValue = "";
    }
    function pR(e, t) {
      e = e;
      var a = t[BT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ss("display", i);
    }
    function vR(e, t) {
      e.nodeValue = t;
    }
    function hR(e) {
      e.nodeType === In ? e.textContent = "" : e.nodeType === ra && e.documentElement && e.removeChild(e.documentElement);
    }
    function mR(e, t, a) {
      return e.nodeType !== In || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function yR(e, t) {
      return t === "" || e.nodeType !== Ua ? null : e;
    }
    function gR(e) {
      return e.nodeType !== Ht ? null : e;
    }
    function A0(e) {
      return e.data === _d;
    }
    function zy(e) {
      return e.data === Ld;
    }
    function SR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function CR(e, t) {
      e._reactRetry = t;
    }
    function oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === In || t === Ua)
          break;
        if (t === Ht) {
          var a = e.data;
          if (a === lh || a === Ld || a === _d)
            break;
          if (a === uh)
            return null;
        }
      }
      return e;
    }
    function Od(e) {
      return oh(e.nextSibling);
    }
    function ER(e) {
      return oh(e.firstChild);
    }
    function TR(e) {
      return oh(e.firstChild);
    }
    function RR(e) {
      return oh(e.nextSibling);
    }
    function xR(e, t, a, i, u, s, f) {
      zd(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & be) !== de;
      return NT(e, t, a, p, i, m, f);
    }
    function wR(e, t, a, i) {
      return zd(a, e), a.mode & be, zT(e, t);
    }
    function DR(e, t) {
      zd(t, e);
    }
    function kR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ht) {
          var i = t.data;
          if (i === uh) {
            if (a === 0)
              return Od(t);
            a--;
          } else
            (i === lh || i === Ld || i === _d) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function H0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ht) {
          var i = t.data;
          if (i === lh || i === Ld || i === _d) {
            if (a === 0)
              return t;
            a--;
          } else
            i === uh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function bR(e) {
      ze(e);
    }
    function MR(e) {
      ze(e);
    }
    function _R(e) {
      return e !== "head" && e !== "body";
    }
    function LR(e, t, a, i) {
      var u = !0;
      rh(t.nodeValue, a, i, u);
    }
    function OR(e, t, a, i, u, s) {
      if (t[ih] !== !0) {
        var f = !0;
        rh(i.nodeValue, u, s, f);
      }
    }
    function NR(e, t) {
      t.nodeType === In ? xy(e, t) : t.nodeType === Ht || wy(e, t);
    }
    function zR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === In ? xy(a, t) : t.nodeType === Ht || wy(a, t));
      }
    }
    function UR(e, t, a, i, u) {
      (u || t[ih] !== !0) && (i.nodeType === In ? xy(a, i) : i.nodeType === Ht || wy(a, i));
    }
    function AR(e, t, a) {
      Dy(e, t);
    }
    function HR(e, t) {
      ky(e, t);
    }
    function FR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function VR(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function jR(e, t, a, i, u, s) {
      (s || t[ih] !== !0) && Dy(a, i);
    }
    function BR(e, t, a, i, u) {
      (u || t[ih] !== !0) && ky(a, i);
    }
    function YR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function PR(e) {
      xd(e);
    }
    var wc = Math.random().toString(36).slice(2), Dc = "__reactFiber$" + wc, Uy = "__reactProps$" + wc, Nd = "__reactContainer$" + wc, Ay = "__reactEvents$" + wc, $R = "__reactListeners$" + wc, QR = "__reactHandles$" + wc;
    function IR(e) {
      delete e[Dc], delete e[Uy], delete e[Ay], delete e[$R], delete e[QR];
    }
    function zd(e, t) {
      t[Dc] = e;
    }
    function sh(e, t) {
      t[Nd] = e;
    }
    function F0(e) {
      e[Nd] = null;
    }
    function Ud(e) {
      return !!e[Nd];
    }
    function jo(e) {
      var t = e[Dc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Nd] || a[Dc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = H0(e); u !== null; ) {
              var s = u[Dc];
              if (s)
                return s;
              u = H0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Du(e) {
      var t = e[Dc] || e[Nd];
      return t && (t.tag === le || t.tag === Le || t.tag === He || t.tag === ie) ? t : null;
    }
    function kc(e) {
      if (e.tag === le || e.tag === Le)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function ch(e) {
      return e[Uy] || null;
    }
    function Hy(e, t) {
      e[Uy] = t;
    }
    function GR(e) {
      var t = e[Ay];
      return t === void 0 && (t = e[Ay] = /* @__PURE__ */ new Set()), t;
    }
    var V0 = {}, j0 = L.ReactDebugCurrentFrame;
    function fh(e) {
      if (e) {
        var t = e._owner, a = Wu(e.type, e._source, t ? t.type : null);
        j0.setExtraStackFrame(a);
      } else
        j0.setExtraStackFrame(null);
    }
    function Xa(e, t, a, i, u) {
      {
        var s = Function.call.bind($n);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              p = m;
            }
            p && !(p instanceof Error) && (fh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), fh(null)), p instanceof Error && !(p.message in V0) && (V0[p.message] = !0, fh(u), g("Failed %s type: %s", a, p.message), fh(null));
          }
      }
    }
    var Fy = [], dh;
    dh = [];
    var kl = -1;
    function ku(e) {
      return {
        current: e
      };
    }
    function tr(e, t) {
      if (kl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== dh[kl] && g("Unexpected Fiber popped."), e.current = Fy[kl], Fy[kl] = null, dh[kl] = null, kl--;
    }
    function nr(e, t, a) {
      kl++, Fy[kl] = e.current, dh[kl] = a, e.current = t;
    }
    var Vy;
    Vy = {};
    var oa = {};
    Object.freeze(oa);
    var bl = ku(oa), Ai = ku(!1), jy = oa;
    function bc(e, t, a) {
      return a && Hi(t) ? jy : bl.current;
    }
    function B0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Mc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return oa;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = we(e) || "Unknown";
          Xa(i, s, "context", p);
        }
        return u && B0(e, t, s), s;
      }
    }
    function ph() {
      return Ai.current;
    }
    function Hi(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function vh(e) {
      tr(Ai, e), tr(bl, e);
    }
    function By(e) {
      tr(Ai, e), tr(bl, e);
    }
    function Y0(e, t, a) {
      {
        if (bl.current !== oa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        nr(bl, t, e), nr(Ai, a, e);
      }
    }
    function P0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = we(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((we(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = we(e) || "Unknown";
          Xa(u, f, "child context", v);
        }
        return Ne({}, a, f);
      }
    }
    function hh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oa;
        return jy = bl.current, nr(bl, a, e), nr(Ai, Ai.current, e), !0;
      }
    }
    function $0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = P0(e, t, jy);
          i.__reactInternalMemoizedMergedChildContext = u, tr(Ai, e), tr(bl, e), nr(bl, u, e), nr(Ai, a, e);
        } else
          tr(Ai, e), nr(Ai, a, e);
      }
    }
    function WR(e) {
      {
        if (!Ff(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ie:
              return t.stateNode.context;
            case ue: {
              var a = t.type;
              if (Hi(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var bu = 0, mh = 1, Ml = null, Yy = !1, Py = !1;
    function Q0(e) {
      Ml === null ? Ml = [e] : Ml.push(e);
    }
    function XR(e) {
      Yy = !0, Q0(e);
    }
    function I0() {
      Yy && Mu();
    }
    function Mu() {
      if (!Py && Ml !== null) {
        Py = !0;
        var e = 0, t = Hr();
        try {
          var a = !0, i = Ml;
          for (Qt(Rn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Ml = null, Yy = !1;
        } catch (s) {
          throw Ml !== null && (Ml = Ml.slice(e + 1)), _s(Os, Mu), s;
        } finally {
          Qt(t), Py = !1;
        }
      }
      return null;
    }
    var _c = [], Lc = 0, yh = null, gh = 0, Ta = [], Ra = 0, Bo = null, _l = 1, Ll = "";
    function qR(e) {
      return Po(), (e.flags & Uf) !== se;
    }
    function KR(e) {
      return Po(), gh;
    }
    function ZR() {
      var e = Ll, t = _l, a = t & ~JR(t);
      return a.toString(32) + e;
    }
    function Yo(e, t) {
      Po(), _c[Lc++] = gh, _c[Lc++] = yh, yh = e, gh = t;
    }
    function G0(e, t, a) {
      Po(), Ta[Ra++] = _l, Ta[Ra++] = Ll, Ta[Ra++] = Bo, Bo = e;
      var i = _l, u = Ll, s = Sh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Sh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), E = f >> m, b = s - m, M = Sh(t) + b, O = p << b, X = O | E, ce = R + u;
        _l = 1 << M | X, Ll = ce;
      } else {
        var ae = p << s, Be = ae | f, Ue = u;
        _l = 1 << v | Be, Ll = Ue;
      }
    }
    function $y(e) {
      Po();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Yo(e, a), G0(e, a, i);
      }
    }
    function Sh(e) {
      return 32 - Fs(e);
    }
    function JR(e) {
      return 1 << Sh(e) - 1;
    }
    function Qy(e) {
      for (; e === yh; )
        yh = _c[--Lc], _c[Lc] = null, gh = _c[--Lc], _c[Lc] = null;
      for (; e === Bo; )
        Bo = Ta[--Ra], Ta[Ra] = null, Ll = Ta[--Ra], Ta[Ra] = null, _l = Ta[--Ra], Ta[Ra] = null;
    }
    function ex() {
      return Po(), Bo !== null ? {
        id: _l,
        overflow: Ll
      } : null;
    }
    function tx(e, t) {
      Po(), Ta[Ra++] = _l, Ta[Ra++] = Ll, Ta[Ra++] = Bo, _l = t.id, Ll = t.overflow, Bo = e;
    }
    function Po() {
      zn() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Nn = null, xa = null, qa = !1, $o = !1, _u = null;
    function nx() {
      qa && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function W0() {
      $o = !0;
    }
    function rx() {
      return $o;
    }
    function ax(e) {
      var t = e.stateNode.containerInfo;
      return xa = TR(t), Nn = e, qa = !0, _u = null, $o = !1, !0;
    }
    function ix(e, t, a) {
      return xa = RR(t), Nn = e, qa = !0, _u = null, $o = !1, a !== null && tx(e, a), !0;
    }
    function X0(e, t) {
      switch (e.tag) {
        case ie: {
          NR(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & be) !== de;
          UR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case He: {
          var i = e.memoizedState;
          i.dehydrated !== null && zR(i.dehydrated, t);
          break;
        }
      }
    }
    function q0(e, t) {
      X0(e, t);
      var a = ok();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Qe) : i.push(a);
    }
    function Iy(e, t) {
      {
        if ($o)
          return;
        switch (e.tag) {
          case ie: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, AR(a, i);
                break;
              case Le:
                var u = t.pendingProps;
                HR(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, m = t.pendingProps, y = (e.mode & be) !== de;
                jR(
                  s,
                  f,
                  p,
                  v,
                  m,
                  // TODO: Delete this argument when we remove the legacy root API.
                  y
                );
                break;
              }
              case Le: {
                var R = t.pendingProps, E = (e.mode & be) !== de;
                BR(
                  s,
                  f,
                  p,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  E
                );
                break;
              }
            }
            break;
          }
          case He: {
            var b = e.memoizedState, M = b.dehydrated;
            if (M !== null)
              switch (t.tag) {
                case le:
                  var O = t.type;
                  t.pendingProps, FR(M, O);
                  break;
                case Le:
                  var X = t.pendingProps;
                  VR(M, X);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function K0(e, t) {
      t.flags = t.flags & ~Or | ct, Iy(e, t);
    }
    function Z0(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = mR(t, a);
          return i !== null ? (e.stateNode = i, Nn = e, xa = ER(i), !0) : !1;
        }
        case Le: {
          var u = e.pendingProps, s = yR(t, u);
          return s !== null ? (e.stateNode = s, Nn = e, xa = null, !0) : !1;
        }
        case He: {
          var f = gR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ex(),
              retryLane: Jn
            };
            e.memoizedState = p;
            var v = sk(f);
            return v.return = e, e.child = v, Nn = e, xa = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Gy(e) {
      return (e.mode & be) !== de && (e.flags & Se) === se;
    }
    function Wy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xy(e) {
      if (qa) {
        var t = xa;
        if (!t) {
          Gy(e) && (Iy(Nn, e), Wy()), K0(Nn, e), qa = !1, Nn = e;
          return;
        }
        var a = t;
        if (!Z0(e, t)) {
          Gy(e) && (Iy(Nn, e), Wy()), t = Od(a);
          var i = Nn;
          if (!t || !Z0(e, t)) {
            K0(Nn, e), qa = !1, Nn = e;
            return;
          }
          q0(i, a);
        }
      }
    }
    function lx(e, t, a) {
      var i = e.stateNode, u = !$o, s = xR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function ux(e) {
      var t = e.stateNode, a = e.memoizedProps, i = wR(t, a, e);
      if (i) {
        var u = Nn;
        if (u !== null)
          switch (u.tag) {
            case ie: {
              var s = u.stateNode.containerInfo, f = (u.mode & be) !== de;
              LR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & be) !== de;
              OR(
                p,
                v,
                m,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
          }
      }
      return i;
    }
    function ox(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      DR(a, e);
    }
    function sx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return kR(a);
    }
    function J0(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== ie && t.tag !== He; )
        t = t.return;
      Nn = t;
    }
    function Ch(e) {
      if (e !== Nn)
        return !1;
      if (!qa)
        return J0(e), qa = !0, !1;
      if (e.tag !== ie && (e.tag !== le || _R(e.type) && !_y(e.type, e.memoizedProps))) {
        var t = xa;
        if (t)
          if (Gy(e))
            eC(e), Wy();
          else
            for (; t; )
              q0(e, t), t = Od(t);
      }
      return J0(e), e.tag === He ? xa = sx(e) : xa = Nn ? Od(e.stateNode) : null, !0;
    }
    function cx() {
      return qa && xa !== null;
    }
    function eC(e) {
      for (var t = xa; t; )
        X0(e, t), t = Od(t);
    }
    function Oc() {
      Nn = null, xa = null, qa = !1, $o = !1;
    }
    function tC() {
      _u !== null && (X1(_u), _u = null);
    }
    function zn() {
      return qa;
    }
    function qy(e) {
      _u === null ? _u = [e] : _u.push(e);
    }
    var fx = L.ReactCurrentBatchConfig, dx = null;
    function px() {
      return fx.transition;
    }
    var Ka = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var vx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & St && (t = a), a = a.return;
        return t;
      }, Qo = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Ad = [], Hd = [], Fd = [], Vd = [], jd = [], Bd = [], Io = /* @__PURE__ */ new Set();
      Ka.recordUnsafeLifecycleWarnings = function(e, t) {
        Io.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ad.push(e), e.mode & St && typeof t.UNSAFE_componentWillMount == "function" && Hd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Fd.push(e), e.mode & St && typeof t.UNSAFE_componentWillReceiveProps == "function" && Vd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && jd.push(e), e.mode & St && typeof t.UNSAFE_componentWillUpdate == "function" && Bd.push(e));
      }, Ka.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ad.length > 0 && (Ad.forEach(function(E) {
          e.add(we(E) || "Component"), Io.add(E.type);
        }), Ad = []);
        var t = /* @__PURE__ */ new Set();
        Hd.length > 0 && (Hd.forEach(function(E) {
          t.add(we(E) || "Component"), Io.add(E.type);
        }), Hd = []);
        var a = /* @__PURE__ */ new Set();
        Fd.length > 0 && (Fd.forEach(function(E) {
          a.add(we(E) || "Component"), Io.add(E.type);
        }), Fd = []);
        var i = /* @__PURE__ */ new Set();
        Vd.length > 0 && (Vd.forEach(function(E) {
          i.add(we(E) || "Component"), Io.add(E.type);
        }), Vd = []);
        var u = /* @__PURE__ */ new Set();
        jd.length > 0 && (jd.forEach(function(E) {
          u.add(we(E) || "Component"), Io.add(E.type);
        }), jd = []);
        var s = /* @__PURE__ */ new Set();
        if (Bd.length > 0 && (Bd.forEach(function(E) {
          s.add(we(E) || "Component"), Io.add(E.type);
        }), Bd = []), t.size > 0) {
          var f = Qo(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Qo(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Qo(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = Qo(e);
          xe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = Qo(a);
          xe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = Qo(u);
          xe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var Eh = /* @__PURE__ */ new Map(), nC = /* @__PURE__ */ new Set();
      Ka.recordLegacyContextWarning = function(e, t) {
        var a = vx(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!nC.has(e.type)) {
          var i = Eh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Eh.set(a, i)), i.push(e));
        }
      }, Ka.flushLegacyContextWarning = function() {
        Eh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(we(s) || "Component"), nC.add(s.type);
            });
            var u = Qo(i);
            try {
              Ze(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Yt();
            }
          }
        });
      }, Ka.discardPendingWarnings = function() {
        Ad = [], Hd = [], Fd = [], Vd = [], jd = [], Bd = [], Eh = /* @__PURE__ */ new Map();
      };
    }
    function Za(e, t) {
      if (e && e.defaultProps) {
        var a = Ne({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Ky = ku(null), Zy;
    Zy = {};
    var Th = null, Nc = null, Jy = null, Rh = !1;
    function xh() {
      Th = null, Nc = null, Jy = null, Rh = !1;
    }
    function rC() {
      Rh = !0;
    }
    function aC() {
      Rh = !1;
    }
    function iC(e, t, a) {
      nr(Ky, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Zy && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Zy;
    }
    function eg(e, t) {
      var a = Ky.current;
      tr(Ky, t), e._currentValue = a;
    }
    function tg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ml(i.childLanes, t) ? u !== null && !ml(u.childLanes, t) && (u.childLanes = ke(u.childLanes, t)) : (i.childLanes = ke(i.childLanes, t), u !== null && (u.childLanes = ke(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function hx(e, t, a) {
      mx(e, t, a);
    }
    function mx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = $t(a), v = Ol(lt, p);
                v.tag = Dh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = ke(i.lanes, a);
              var E = i.alternate;
              E !== null && (E.lanes = ke(E.lanes, a)), tg(i.return, a, e), s.lanes = ke(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === gn)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === zt) {
          var b = i.return;
          if (b === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          b.lanes = ke(b.lanes, a);
          var M = b.alternate;
          M !== null && (M.lanes = ke(M.lanes, a)), tg(b, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var O = u.sibling;
            if (O !== null) {
              O.return = u.return, u = O;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function zc(e, t) {
      Th = e, Nc = null, Jy = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (er(a.lanes, t) && tp(), a.firstContext = null);
      }
    }
    function nn(e) {
      Rh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Jy !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nc === null) {
          if (Th === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nc = a, Th.dependencies = {
            lanes: z,
            firstContext: a
          };
        } else
          Nc = Nc.next = a;
      }
      return t;
    }
    var Go = null;
    function ng(e) {
      Go === null ? Go = [e] : Go.push(e);
    }
    function yx() {
      if (Go !== null) {
        for (var e = 0; e < Go.length; e++) {
          var t = Go[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Go = null;
      }
    }
    function lC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a, wh(e, i);
    }
    function gx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Sx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a, wh(e, i);
    }
    function Yr(e, t) {
      return wh(e, t);
    }
    var Cx = wh;
    function wh(e, t) {
      e.lanes = ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ke(a.lanes, t)), a === null && (e.flags & (ct | Or)) !== se && uE(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ke(a.childLanes, t) : (u.flags & (ct | Or)) !== se && uE(e), i = u, u = u.return;
      if (i.tag === ie) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var uC = 0, oC = 1, Dh = 2, rg = 3, kh = !1, ag, bh;
    ag = !1, bh = null;
    function ig(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: z
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function sC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Ol(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: uC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Lu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (bh === u && !ag && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ag = !0), CD()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Cx(e, a);
      } else
        return Sx(e, u, t, a);
    }
    function Mh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Kf(a)) {
          var s = u.lanes;
          s = Jf(s, e.pendingLanes);
          var f = ke(s, a);
          u.lanes = f, fu(e, f);
        }
      }
    }
    function lg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var m = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = m : (f.next = m, f = m), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var y = a.lastBaseUpdate;
      y === null ? a.firstBaseUpdate = t : y.next = t, a.lastBaseUpdate = t;
    }
    function Ex(e, t, a, i, u, s) {
      switch (a.tag) {
        case oC: {
          var f = a.payload;
          if (typeof f == "function") {
            rC();
            var p = f.call(s, i, u);
            {
              if (e.mode & St) {
                Pt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Pt(!1);
                }
              }
              aC();
            }
            return p;
          }
          return f;
        }
        case rg:
          e.flags = e.flags & ~Kt | Se;
        case uC: {
          var v = a.payload, m;
          if (typeof v == "function") {
            rC(), m = v.call(s, i, u);
            {
              if (e.mode & St) {
                Pt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Pt(!1);
                }
              }
              aC();
            }
          } else
            m = v;
          return m == null ? i : Ne({}, i, m);
        }
        case Dh:
          return kh = !0, i;
      }
      return i;
    }
    function _h(e, t, a, i) {
      var u = e.updateQueue;
      kh = !1, bh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var y = e.alternate;
        if (y !== null) {
          var R = y.updateQueue, E = R.lastBaseUpdate;
          E !== f && (E === null ? R.firstBaseUpdate = m : E.next = m, R.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var b = u.baseState, M = z, O = null, X = null, ce = null, ae = s;
        do {
          var Be = ae.lane, Ue = ae.eventTime;
          if (ml(i, Be)) {
            if (ce !== null) {
              var N = {
                eventTime: Ue,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ve,
                tag: ae.tag,
                payload: ae.payload,
                callback: ae.callback,
                next: null
              };
              ce = ce.next = N;
            }
            b = Ex(e, u, ae, b, t, a);
            var D = ae.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            ae.lane !== Ve) {
              e.flags |= ma;
              var V = u.effects;
              V === null ? u.effects = [ae] : V.push(ae);
            }
          } else {
            var w = {
              eventTime: Ue,
              lane: Be,
              tag: ae.tag,
              payload: ae.payload,
              callback: ae.callback,
              next: null
            };
            ce === null ? (X = ce = w, O = b) : ce = ce.next = w, M = ke(M, Be);
          }
          if (ae = ae.next, ae === null) {
            if (p = u.shared.pending, p === null)
              break;
            var q = p, I = q.next;
            q.next = null, ae = I, u.lastBaseUpdate = q, u.shared.pending = null;
          }
        } while (!0);
        ce === null && (O = b), u.baseState = O, u.firstBaseUpdate = X, u.lastBaseUpdate = ce;
        var ge = u.shared.interleaved;
        if (ge !== null) {
          var Re = ge;
          do
            M = ke(M, Re.lane), Re = Re.next;
          while (Re !== ge);
        } else
          s === null && (u.shared.lanes = z);
        pp(M), e.lanes = M, e.memoizedState = b;
      }
      bh = null;
    }
    function Tx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function cC() {
      kh = !1;
    }
    function Lh() {
      return kh;
    }
    function fC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Tx(f, a));
        }
    }
    var ug = {}, dC = new j.Component().refs, og, sg, cg, fg, dg, pC, Oh, pg, vg, hg;
    {
      og = /* @__PURE__ */ new Set(), sg = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set();
      var vC = /* @__PURE__ */ new Set();
      Oh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          vC.has(a) || (vC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, pC = function(e, t) {
        if (t === void 0) {
          var a = at(e) || "Component";
          dg.has(a) || (dg.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(ug, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(ug);
    }
    function mg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & St) {
          Pt(!0);
          try {
            s = a(i, u);
          } finally {
            Pt(!1);
          }
        }
        pC(t, s);
      }
      var f = s == null ? u : Ne({}, u, s);
      if (e.memoizedState = f, e.lanes === z) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yg = {
      isMounted: dr,
      enqueueSetState: function(e, t, a) {
        var i = _r(e), u = gr(), s = Vu(i), f = Ol(u, s);
        f.payload = t, a != null && (Oh(a, "setState"), f.callback = a);
        var p = Lu(i, f, s);
        p !== null && (mn(p, i, s, u), Mh(p, i, s)), ki(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = _r(e), u = gr(), s = Vu(i), f = Ol(u, s);
        f.tag = oC, f.payload = t, a != null && (Oh(a, "replaceState"), f.callback = a);
        var p = Lu(i, f, s);
        p !== null && (mn(p, i, s, u), Mh(p, i, s)), ki(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = _r(e), i = gr(), u = Vu(a), s = Ol(i, u);
        s.tag = Dh, t != null && (Oh(t, "forceUpdate"), s.callback = t);
        var f = Lu(a, s, u);
        f !== null && (mn(f, a, u, i), Mh(f, a, u)), Gf(a, u);
      }
    };
    function hC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & St) {
            Pt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Pt(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", at(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !oe(a, i) || !oe(u, s) : !0;
    }
    function Rx(e, t, a) {
      var i = e.stateNode;
      {
        var u = at(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !vg.has(t) && (vg.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", at(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !cg.has(t) && (cg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", at(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Xt(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function mC(e, t) {
      t.updater = yg, e.stateNode = t, tu(t, e), t._reactInternalInstance = ug;
    }
    function yC(e, t, a) {
      var i = !1, u = oa, s = oa, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ef && f._context === void 0
        );
        if (!p && !hg.has(t)) {
          hg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Jc ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", at(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nn(f);
      else {
        u = bc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Mc(e, u) : oa;
      }
      var y = new t(a, s);
      if (e.mode & St) {
        Pt(!0);
        try {
          y = new t(a, s);
        } finally {
          Pt(!1);
        }
      }
      var R = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      mC(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var E = at(t) || "Component";
          sg.has(E) || (sg.add(E), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", E, y.state === null ? "null" : "undefined", E));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var b = null, M = null, O = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? b = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (b = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? M = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (M = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? O = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (O = "UNSAFE_componentWillUpdate"), b !== null || M !== null || O !== null) {
            var X = at(t) || "Component", ce = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fg.has(X) || (fg.add(X), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, X, ce, b !== null ? `
  ` + b : "", M !== null ? `
  ` + M : "", O !== null ? `
  ` + O : ""));
          }
        }
      }
      return i && B0(e, u, s), y;
    }
    function xx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", we(e) || "Component"), yg.enqueueReplaceState(t, t.state, null));
    }
    function gC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = we(e) || "Component";
          og.has(s) || (og.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        yg.enqueueReplaceState(t, t.state, null);
      }
    }
    function gg(e, t, a, i) {
      Rx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = dC, ig(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nn(s);
      else {
        var f = bc(e, t, !0);
        u.context = Mc(e, f);
      }
      {
        if (u.state === a) {
          var p = at(t) || "Component";
          pg.has(p) || (pg.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & St && Ka.recordLegacyContextWarning(e, u), Ka.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (xx(e, u), _h(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = De;
        m |= Wn, (e.mode & Ur) !== de && (m |= Xn), e.flags |= m;
      }
    }
    function wx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = oa;
      if (typeof p == "object" && p !== null)
        v = nn(p);
      else {
        var m = bc(e, t, !0);
        v = Mc(e, m);
      }
      var y = t.getDerivedStateFromProps, R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && gC(e, u, a, v), cC();
      var E = e.memoizedState, b = u.state = E;
      if (_h(e, a, u, i), b = e.memoizedState, s === a && E === b && !ph() && !Lh()) {
        if (typeof u.componentDidMount == "function") {
          var M = De;
          M |= Wn, (e.mode & Ur) !== de && (M |= Xn), e.flags |= M;
        }
        return !1;
      }
      typeof y == "function" && (mg(e, t, y, a), b = e.memoizedState);
      var O = Lh() || hC(e, t, s, a, E, b, v);
      if (O) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var X = De;
          X |= Wn, (e.mode & Ur) !== de && (X |= Xn), e.flags |= X;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ce = De;
          ce |= Wn, (e.mode & Ur) !== de && (ce |= Xn), e.flags |= ce;
        }
        e.memoizedProps = a, e.memoizedState = b;
      }
      return u.props = a, u.state = b, u.context = v, O;
    }
    function Dx(e, t, a, i, u) {
      var s = t.stateNode;
      sC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Za(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, R = oa;
      if (typeof y == "object" && y !== null)
        R = nn(y);
      else {
        var E = bc(t, a, !0);
        R = Mc(t, E);
      }
      var b = a.getDerivedStateFromProps, M = typeof b == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !M && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && gC(t, s, i, R), cC();
      var O = t.memoizedState, X = s.state = O;
      if (_h(t, i, s, u), X = t.memoizedState, f === v && O === X && !ph() && !Lh() && !ye)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || O !== e.memoizedState) && (t.flags |= De), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || O !== e.memoizedState) && (t.flags |= Lr), !1;
      typeof b == "function" && (mg(t, a, b, i), X = t.memoizedState);
      var ce = Lh() || hC(t, a, p, i, O, X, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ye;
      return ce ? (!M && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, X, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, X, R)), typeof s.componentDidUpdate == "function" && (t.flags |= De), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Lr)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || O !== e.memoizedState) && (t.flags |= De), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || O !== e.memoizedState) && (t.flags |= Lr), t.memoizedProps = i, t.memoizedState = X), s.props = i, s.state = X, s.context = R, ce;
    }
    var Sg, Cg, Eg, Tg, Rg, SC = function(e, t) {
    };
    Sg = !1, Cg = !1, Eg = {}, Tg = {}, Rg = {}, SC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = we(t) || "Component";
        Tg[a] || (Tg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Yd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & St || ur) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = we(e) || "Component";
          Eg[u] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Eg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ue)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Gi(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(R) {
            var E = v.refs;
            E === dC && (E = v.refs = {}), R === null ? delete E[m] : E[m] = R;
          };
          return y._stringRef = m, y;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Nh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function zh(e) {
      {
        var t = we(e) || "Component";
        if (Rg[t])
          return;
        Rg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function CC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function EC(e) {
      function t(w, N) {
        if (e) {
          var D = w.deletions;
          D === null ? (w.deletions = [N], w.flags |= Qe) : D.push(N);
        }
      }
      function a(w, N) {
        if (!e)
          return null;
        for (var D = N; D !== null; )
          t(w, D), D = D.sibling;
        return null;
      }
      function i(w, N) {
        for (var D = /* @__PURE__ */ new Map(), V = N; V !== null; )
          V.key !== null ? D.set(V.key, V) : D.set(V.index, V), V = V.sibling;
        return D;
      }
      function u(w, N) {
        var D = ts(w, N);
        return D.index = 0, D.sibling = null, D;
      }
      function s(w, N, D) {
        if (w.index = D, !e)
          return w.flags |= Uf, N;
        var V = w.alternate;
        if (V !== null) {
          var q = V.index;
          return q < N ? (w.flags |= ct, N) : q;
        } else
          return w.flags |= ct, N;
      }
      function f(w) {
        return e && w.alternate === null && (w.flags |= ct), w;
      }
      function p(w, N, D, V) {
        if (N === null || N.tag !== Le) {
          var q = qS(D, w.mode, V);
          return q.return = w, q;
        } else {
          var I = u(N, D);
          return I.return = w, I;
        }
      }
      function v(w, N, D, V) {
        var q = D.type;
        if (q === La)
          return y(w, N, D.props.children, V, D.key);
        if (N !== null && (N.elementType === q || // Keep this check inline so it only runs on the false path:
        fE(N, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof q == "object" && q !== null && q.$$typeof === Ln && CC(q) === N.type)) {
          var I = u(N, D.props);
          return I.ref = Yd(w, N, D), I.return = w, I._debugSource = D._source, I._debugOwner = D._owner, I;
        }
        var ge = XS(D, w.mode, V);
        return ge.ref = Yd(w, N, D), ge.return = w, ge;
      }
      function m(w, N, D, V) {
        if (N === null || N.tag !== me || N.stateNode.containerInfo !== D.containerInfo || N.stateNode.implementation !== D.implementation) {
          var q = KS(D, w.mode, V);
          return q.return = w, q;
        } else {
          var I = u(N, D.children || []);
          return I.return = w, I;
        }
      }
      function y(w, N, D, V, q) {
        if (N === null || N.tag !== nt) {
          var I = Bu(D, w.mode, V, q);
          return I.return = w, I;
        } else {
          var ge = u(N, D);
          return ge.return = w, ge;
        }
      }
      function R(w, N, D) {
        if (typeof N == "string" && N !== "" || typeof N == "number") {
          var V = qS("" + N, w.mode, D);
          return V.return = w, V;
        }
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case jl: {
              var q = XS(N, w.mode, D);
              return q.ref = Yd(w, null, N), q.return = w, q;
            }
            case Jr: {
              var I = KS(N, w.mode, D);
              return I.return = w, I;
            }
            case Ln: {
              var ge = N._payload, Re = N._init;
              return R(w, Re(ge), D);
            }
          }
          if (Xt(N) || Oa(N)) {
            var et = Bu(N, w.mode, D, null);
            return et.return = w, et;
          }
          Nh(w, N);
        }
        return typeof N == "function" && zh(w), null;
      }
      function E(w, N, D, V) {
        var q = N !== null ? N.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return q !== null ? null : p(w, N, "" + D, V);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case jl:
              return D.key === q ? v(w, N, D, V) : null;
            case Jr:
              return D.key === q ? m(w, N, D, V) : null;
            case Ln: {
              var I = D._payload, ge = D._init;
              return E(w, N, ge(I), V);
            }
          }
          if (Xt(D) || Oa(D))
            return q !== null ? null : y(w, N, D, V, null);
          Nh(w, D);
        }
        return typeof D == "function" && zh(w), null;
      }
      function b(w, N, D, V, q) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var I = w.get(D) || null;
          return p(N, I, "" + V, q);
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case jl: {
              var ge = w.get(V.key === null ? D : V.key) || null;
              return v(N, ge, V, q);
            }
            case Jr: {
              var Re = w.get(V.key === null ? D : V.key) || null;
              return m(N, Re, V, q);
            }
            case Ln:
              var et = V._payload, Pe = V._init;
              return b(w, N, D, Pe(et), q);
          }
          if (Xt(V) || Oa(V)) {
            var Wt = w.get(D) || null;
            return y(N, Wt, V, q, null);
          }
          Nh(N, V);
        }
        return typeof V == "function" && zh(N), null;
      }
      function M(w, N, D) {
        {
          if (typeof w != "object" || w === null)
            return N;
          switch (w.$$typeof) {
            case jl:
            case Jr:
              SC(w, D);
              var V = w.key;
              if (typeof V != "string")
                break;
              if (N === null) {
                N = /* @__PURE__ */ new Set(), N.add(V);
                break;
              }
              if (!N.has(V)) {
                N.add(V);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", V);
              break;
            case Ln:
              var q = w._payload, I = w._init;
              M(I(q), N, D);
              break;
          }
        }
        return N;
      }
      function O(w, N, D, V) {
        for (var q = null, I = 0; I < D.length; I++) {
          var ge = D[I];
          q = M(ge, q, w);
        }
        for (var Re = null, et = null, Pe = N, Wt = 0, $e = 0, jt = null; Pe !== null && $e < D.length; $e++) {
          Pe.index > $e ? (jt = Pe, Pe = null) : jt = Pe.sibling;
          var ar = E(w, Pe, D[$e], V);
          if (ar === null) {
            Pe === null && (Pe = jt);
            break;
          }
          e && Pe && ar.alternate === null && t(w, Pe), Wt = s(ar, Wt, $e), et === null ? Re = ar : et.sibling = ar, et = ar, Pe = jt;
        }
        if ($e === D.length) {
          if (a(w, Pe), zn()) {
            var Bn = $e;
            Yo(w, Bn);
          }
          return Re;
        }
        if (Pe === null) {
          for (; $e < D.length; $e++) {
            var ca = R(w, D[$e], V);
            ca !== null && (Wt = s(ca, Wt, $e), et === null ? Re = ca : et.sibling = ca, et = ca);
          }
          if (zn()) {
            var Sr = $e;
            Yo(w, Sr);
          }
          return Re;
        }
        for (var Cr = i(w, Pe); $e < D.length; $e++) {
          var ir = b(Cr, w, $e, D[$e], V);
          ir !== null && (e && ir.alternate !== null && Cr.delete(ir.key === null ? $e : ir.key), Wt = s(ir, Wt, $e), et === null ? Re = ir : et.sibling = ir, et = ir);
        }
        if (e && Cr.forEach(function(Kc) {
          return t(w, Kc);
        }), zn()) {
          var Fl = $e;
          Yo(w, Fl);
        }
        return Re;
      }
      function X(w, N, D, V) {
        var q = Oa(D);
        if (typeof q != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (Cg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Cg = !0), D.entries === q && (Sg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Sg = !0);
          var I = q.call(D);
          if (I)
            for (var ge = null, Re = I.next(); !Re.done; Re = I.next()) {
              var et = Re.value;
              ge = M(et, ge, w);
            }
        }
        var Pe = q.call(D);
        if (Pe == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wt = null, $e = null, jt = N, ar = 0, Bn = 0, ca = null, Sr = Pe.next(); jt !== null && !Sr.done; Bn++, Sr = Pe.next()) {
          jt.index > Bn ? (ca = jt, jt = null) : ca = jt.sibling;
          var Cr = E(w, jt, Sr.value, V);
          if (Cr === null) {
            jt === null && (jt = ca);
            break;
          }
          e && jt && Cr.alternate === null && t(w, jt), ar = s(Cr, ar, Bn), $e === null ? Wt = Cr : $e.sibling = Cr, $e = Cr, jt = ca;
        }
        if (Sr.done) {
          if (a(w, jt), zn()) {
            var ir = Bn;
            Yo(w, ir);
          }
          return Wt;
        }
        if (jt === null) {
          for (; !Sr.done; Bn++, Sr = Pe.next()) {
            var Fl = R(w, Sr.value, V);
            Fl !== null && (ar = s(Fl, ar, Bn), $e === null ? Wt = Fl : $e.sibling = Fl, $e = Fl);
          }
          if (zn()) {
            var Kc = Bn;
            Yo(w, Kc);
          }
          return Wt;
        }
        for (var gp = i(w, jt); !Sr.done; Bn++, Sr = Pe.next()) {
          var Qi = b(gp, w, Bn, Sr.value, V);
          Qi !== null && (e && Qi.alternate !== null && gp.delete(Qi.key === null ? Bn : Qi.key), ar = s(Qi, ar, Bn), $e === null ? Wt = Qi : $e.sibling = Qi, $e = Qi);
        }
        if (e && gp.forEach(function(jk) {
          return t(w, jk);
        }), zn()) {
          var Vk = Bn;
          Yo(w, Vk);
        }
        return Wt;
      }
      function ce(w, N, D, V) {
        if (N !== null && N.tag === Le) {
          a(w, N.sibling);
          var q = u(N, D);
          return q.return = w, q;
        }
        a(w, N);
        var I = qS(D, w.mode, V);
        return I.return = w, I;
      }
      function ae(w, N, D, V) {
        for (var q = D.key, I = N; I !== null; ) {
          if (I.key === q) {
            var ge = D.type;
            if (ge === La) {
              if (I.tag === nt) {
                a(w, I.sibling);
                var Re = u(I, D.props.children);
                return Re.return = w, Re._debugSource = D._source, Re._debugOwner = D._owner, Re;
              }
            } else if (I.elementType === ge || // Keep this check inline so it only runs on the false path:
            fE(I, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ge == "object" && ge !== null && ge.$$typeof === Ln && CC(ge) === I.type) {
              a(w, I.sibling);
              var et = u(I, D.props);
              return et.ref = Yd(w, I, D), et.return = w, et._debugSource = D._source, et._debugOwner = D._owner, et;
            }
            a(w, I);
            break;
          } else
            t(w, I);
          I = I.sibling;
        }
        if (D.type === La) {
          var Pe = Bu(D.props.children, w.mode, V, D.key);
          return Pe.return = w, Pe;
        } else {
          var Wt = XS(D, w.mode, V);
          return Wt.ref = Yd(w, N, D), Wt.return = w, Wt;
        }
      }
      function Be(w, N, D, V) {
        for (var q = D.key, I = N; I !== null; ) {
          if (I.key === q)
            if (I.tag === me && I.stateNode.containerInfo === D.containerInfo && I.stateNode.implementation === D.implementation) {
              a(w, I.sibling);
              var ge = u(I, D.children || []);
              return ge.return = w, ge;
            } else {
              a(w, I);
              break;
            }
          else
            t(w, I);
          I = I.sibling;
        }
        var Re = KS(D, w.mode, V);
        return Re.return = w, Re;
      }
      function Ue(w, N, D, V) {
        var q = typeof D == "object" && D !== null && D.type === La && D.key === null;
        if (q && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case jl:
              return f(ae(w, N, D, V));
            case Jr:
              return f(Be(w, N, D, V));
            case Ln:
              var I = D._payload, ge = D._init;
              return Ue(w, N, ge(I), V);
          }
          if (Xt(D))
            return O(w, N, D, V);
          if (Oa(D))
            return X(w, N, D, V);
          Nh(w, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(ce(w, N, "" + D, V)) : (typeof D == "function" && zh(w), a(w, N));
      }
      return Ue;
    }
    var Uc = EC(!0), TC = EC(!1);
    function kx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ts(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ts(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function bx(e, t) {
      for (var a = e.child; a !== null; )
        rk(a, t), a = a.sibling;
    }
    var Pd = {}, Ou = ku(Pd), $d = ku(Pd), Uh = ku(Pd);
    function Ah(e) {
      if (e === Pd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RC() {
      var e = Ah(Uh.current);
      return e;
    }
    function xg(e, t) {
      nr(Uh, t, e), nr($d, e, e), nr(Ou, Pd, e);
      var a = YT(t);
      tr(Ou, e), nr(Ou, a, e);
    }
    function Ac(e) {
      tr(Ou, e), tr($d, e), tr(Uh, e);
    }
    function wg() {
      var e = Ah(Ou.current);
      return e;
    }
    function xC(e) {
      Ah(Uh.current);
      var t = Ah(Ou.current), a = PT(t, e.type);
      t !== a && (nr($d, e, e), nr(Ou, a, e));
    }
    function Dg(e) {
      $d.current === e && (tr(Ou, e), tr($d, e));
    }
    var Mx = 0, wC = 1, DC = 1, Qd = 2, Ja = ku(Mx);
    function kg(e, t) {
      return (e & t) !== 0;
    }
    function Hc(e) {
      return e & wC;
    }
    function bg(e, t) {
      return e & wC | t;
    }
    function _x(e, t) {
      return e | t;
    }
    function Nu(e, t) {
      nr(Ja, t, e);
    }
    function Fc(e) {
      tr(Ja, e);
    }
    function Lx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Hh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === He) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || A0(i) || zy(i))
              return t;
          }
        } else if (t.tag === ut && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Se) !== se;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Pr = (
      /*   */
      0
    ), sn = (
      /* */
      1
    ), Fi = (
      /*  */
      2
    ), cn = (
      /*    */
      4
    ), Un = (
      /*   */
      8
    ), Mg = [];
    function _g() {
      for (var e = 0; e < Mg.length; e++) {
        var t = Mg[e];
        t._workInProgressVersionPrimary = null;
      }
      Mg.length = 0;
    }
    function Ox(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var W = L.ReactCurrentDispatcher, Id = L.ReactCurrentBatchConfig, Lg, Vc;
    Lg = /* @__PURE__ */ new Set();
    var Wo = z, Je = null, fn = null, dn = null, Fh = !1, Gd = !1, Wd = 0, Nx = 0, zx = 25, U = null, wa = null, zu = -1, Og = !1;
    function Ge() {
      {
        var e = U;
        wa === null ? wa = [e] : wa.push(e);
      }
    }
    function P() {
      {
        var e = U;
        wa !== null && (zu++, wa[zu] !== e && Ux(e));
      }
    }
    function jc(e) {
      e != null && !Xt(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e);
    }
    function Ux(e) {
      {
        var t = we(Je);
        if (!Lg.has(t) && (Lg.add(t), wa !== null)) {
          for (var a = "", i = 30, u = 0; u <= zu; u++) {
            for (var s = wa[u], f = u === zu ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function rr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ng(e, t) {
      if (Og)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", U), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, U, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ee(e[a], t[a]))
          return !1;
      return !0;
    }
    function Bc(e, t, a, i, u, s) {
      Wo = s, Je = t, wa = e !== null ? e._debugHookTypes : null, zu = -1, Og = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = z, e !== null && e.memoizedState !== null ? W.current = WC : wa !== null ? W.current = GC : W.current = IC;
      var f = a(i, u);
      if (Gd) {
        var p = 0;
        do {
          if (Gd = !1, Wd = 0, p >= zx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Og = !1, fn = null, dn = null, t.updateQueue = null, zu = -1, W.current = XC, f = a(i, u);
        } while (Gd);
      }
      W.current = Kh, t._debugHookTypes = wa;
      var v = fn !== null && fn.next !== null;
      if (Wo = z, Je = null, fn = null, dn = null, U = null, wa = null, zu = -1, e !== null && (e.flags & ln) !== (t.flags & ln) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & be) !== de && g("Internal React error: Expected static flag was missing. Please notify the React team."), Fh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Yc() {
      var e = Wd !== 0;
      return Wd = 0, e;
    }
    function kC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ur) !== de ? t.flags &= ~(ll | Xn | ht | De) : t.flags &= ~(ht | De), e.lanes = cu(e.lanes, a);
    }
    function bC() {
      if (W.current = Kh, Fh) {
        for (var e = Je.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Fh = !1;
      }
      Wo = z, Je = null, fn = null, dn = null, wa = null, zu = -1, U = null, BC = !1, Gd = !1, Wd = 0;
    }
    function Vi() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return dn === null ? Je.memoizedState = dn = e : dn = dn.next = e, dn;
    }
    function Da() {
      var e;
      if (fn === null) {
        var t = Je.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = fn.next;
      var a;
      if (dn === null ? a = Je.memoizedState : a = dn.next, a !== null)
        dn = a, a = dn.next, fn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        fn = e;
        var i = {
          memoizedState: fn.memoizedState,
          baseState: fn.baseState,
          baseQueue: fn.baseQueue,
          queue: fn.queue,
          next: null
        };
        dn === null ? Je.memoizedState = dn = i : dn = dn.next = i;
      }
      return dn;
    }
    function MC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function zg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ug(e, t, a) {
      var i = Vi(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: z,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Vx.bind(null, Je, s);
      return [i.memoizedState, f];
    }
    function Ag(e, t, a) {
      var i = Da(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = fn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, R = s.baseState, E = null, b = null, M = null, O = y;
        do {
          var X = O.lane;
          if (ml(Wo, X)) {
            if (M !== null) {
              var ae = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ve,
                action: O.action,
                hasEagerState: O.hasEagerState,
                eagerState: O.eagerState,
                next: null
              };
              M = M.next = ae;
            }
            if (O.hasEagerState)
              R = O.eagerState;
            else {
              var Be = O.action;
              R = e(R, Be);
            }
          } else {
            var ce = {
              lane: X,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            };
            M === null ? (b = M = ce, E = R) : M = M.next = ce, Je.lanes = ke(Je.lanes, X), pp(X);
          }
          O = O.next;
        } while (O !== null && O !== y);
        M === null ? E = R : M.next = b, ee(R, i.memoizedState) || tp(), i.memoizedState = R, i.baseState = E, i.baseQueue = M, u.lastRenderedState = R;
      }
      var Ue = u.interleaved;
      if (Ue !== null) {
        var w = Ue;
        do {
          var N = w.lane;
          Je.lanes = ke(Je.lanes, N), pp(N), w = w.next;
        } while (w !== Ue);
      } else
        f === null && (u.lanes = z);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Hg(e, t, a) {
      var i = Da(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, m = v;
        do {
          var y = m.action;
          p = e(p, y), m = m.next;
        } while (m !== v);
        ee(p, i.memoizedState) || tp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Jk(e, t, a) {
    }
    function eb(e, t, a) {
    }
    function Fg(e, t, a) {
      var i = Je, u = Vi(), s, f = zn();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Vc || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), Vc = !0);
      } else {
        if (s = t(), !Vc) {
          var p = t();
          ee(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Vc = !0);
        }
        var v = hm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        wo(v, Wo) || _C(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, Ph(OC.bind(null, i, m, e), [e]), i.flags |= ht, Xd(sn | Un, LC.bind(null, i, m, s, t), void 0, null), s;
    }
    function Vh(e, t, a) {
      var i = Je, u = Da(), s = t();
      if (!Vc) {
        var f = t();
        ee(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), Vc = !0);
      }
      var p = u.memoizedState, v = !ee(p, s);
      v && (u.memoizedState = s, tp());
      var m = u.queue;
      if (Kd(OC.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      dn !== null && dn.memoizedState.tag & sn) {
        i.flags |= ht, Xd(sn | Un, LC.bind(null, i, m, s, t), void 0, null);
        var y = hm();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        wo(y, Wo) || _C(i, t, s);
      }
      return s;
    }
    function _C(e, t, a) {
      e.flags |= mo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Je.updateQueue;
      if (u === null)
        u = MC(), Je.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function LC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, NC(t) && zC(e);
    }
    function OC(e, t, a) {
      var i = function() {
        NC(t) && zC(e);
      };
      return a(i);
    }
    function NC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ee(a, i);
      } catch {
        return !0;
      }
    }
    function zC(e) {
      var t = Yr(e, he);
      t !== null && mn(t, e, he, lt);
    }
    function jh(e) {
      var t = Vi();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: z,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = jx.bind(null, Je, a);
      return [t.memoizedState, i];
    }
    function Vg(e) {
      return Ag(zg);
    }
    function jg(e) {
      return Hg(zg);
    }
    function Xd(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Je.updateQueue;
      if (s === null)
        s = MC(), Je.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Bg(e) {
      var t = Vi();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Bh(e) {
      var t = Da();
      return t.memoizedState;
    }
    function qd(e, t, a, i) {
      var u = Vi(), s = i === void 0 ? null : i;
      Je.flags |= e, u.memoizedState = Xd(sn | t, a, void 0, s);
    }
    function Yh(e, t, a, i) {
      var u = Da(), s = i === void 0 ? null : i, f = void 0;
      if (fn !== null) {
        var p = fn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ng(s, v)) {
            u.memoizedState = Xd(t, a, f, s);
            return;
          }
        }
      }
      Je.flags |= e, u.memoizedState = Xd(sn | t, a, f, s);
    }
    function Ph(e, t) {
      return (Je.mode & Ur) !== de ? qd(ll | ht | Ei, Un, e, t) : qd(ht | Ei, Un, e, t);
    }
    function Kd(e, t) {
      return Yh(ht, Un, e, t);
    }
    function Yg(e, t) {
      return qd(De, Fi, e, t);
    }
    function $h(e, t) {
      return Yh(De, Fi, e, t);
    }
    function Pg(e, t) {
      var a = De;
      return a |= Wn, (Je.mode & Ur) !== de && (a |= Xn), qd(a, cn, e, t);
    }
    function Qh(e, t) {
      return Yh(De, cn, e, t);
    }
    function UC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function $g(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = De;
      return u |= Wn, (Je.mode & Ur) !== de && (u |= Xn), qd(u, cn, UC.bind(null, t, e), i);
    }
    function Ih(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Yh(De, cn, UC.bind(null, t, e), i);
    }
    function Ax(e, t) {
    }
    var Gh = Ax;
    function Qg(e, t) {
      var a = Vi(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Wh(e, t) {
      var a = Da(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ig(e, t) {
      var a = Vi(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Xh(e, t) {
      var a = Da(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Gg(e) {
      var t = Vi();
      return t.memoizedState = e, e;
    }
    function AC(e) {
      var t = Da(), a = fn, i = a.memoizedState;
      return FC(t, i, e);
    }
    function HC(e) {
      var t = Da();
      if (fn === null)
        return t.memoizedState = e, e;
      var a = fn.memoizedState;
      return FC(t, a, e);
    }
    function FC(e, t, a) {
      var i = !Jm(Wo);
      if (i) {
        if (!ee(a, t)) {
          var u = Zf();
          Je.lanes = ke(Je.lanes, u), pp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, tp()), e.memoizedState = a, a;
    }
    function Hx(e, t, a) {
      var i = Hr();
      Qt(xn(i, on)), e(!0);
      var u = Id.transition;
      Id.transition = {};
      var s = Id.transition;
      Id.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Qt(i), Id.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Wg() {
      var e = jh(!1), t = e[0], a = e[1], i = Hx.bind(null, a), u = Vi();
      return u.memoizedState = i, [t, i];
    }
    function VC() {
      var e = Vg(), t = e[0], a = Da(), i = a.memoizedState;
      return [t, i];
    }
    function jC() {
      var e = jg(), t = e[0], a = Da(), i = a.memoizedState;
      return [t, i];
    }
    var BC = !1;
    function Fx() {
      return BC;
    }
    function Xg() {
      var e = Vi(), t = hm(), a = t.identifierPrefix, i;
      if (zn()) {
        var u = ZR();
        i = ":" + a + "R" + u;
        var s = Wd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Nx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function qh() {
      var e = Da(), t = e.memoizedState;
      return t;
    }
    function Vx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Vu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YC(e))
        PC(t, u);
      else {
        var s = lC(e, t, u, i);
        if (s !== null) {
          var f = gr();
          mn(s, e, i, f), $C(s, t, i);
        }
      }
      QC(e, i);
    }
    function jx(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Vu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YC(e))
        PC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === z && (s === null || s.lanes === z)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = W.current, W.current = ei;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, ee(m, v)) {
                gx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              W.current = p;
            }
          }
        }
        var y = lC(e, t, u, i);
        if (y !== null) {
          var R = gr();
          mn(y, e, i, R), $C(y, t, i);
        }
      }
      QC(e, i);
    }
    function YC(e) {
      var t = e.alternate;
      return e === Je || t !== null && t === Je;
    }
    function PC(e, t) {
      Gd = Fh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function $C(e, t, a) {
      if (Kf(a)) {
        var i = t.lanes;
        i = Jf(i, e.pendingLanes);
        var u = ke(i, a);
        t.lanes = u, fu(e, u);
      }
    }
    function QC(e, t, a) {
      ki(e, t);
    }
    var Kh = {
      readContext: nn,
      useCallback: rr,
      useContext: rr,
      useEffect: rr,
      useImperativeHandle: rr,
      useInsertionEffect: rr,
      useLayoutEffect: rr,
      useMemo: rr,
      useReducer: rr,
      useRef: rr,
      useState: rr,
      useDebugValue: rr,
      useDeferredValue: rr,
      useTransition: rr,
      useMutableSource: rr,
      useSyncExternalStore: rr,
      useId: rr,
      unstable_isNewReconciler: $
    }, IC = null, GC = null, WC = null, XC = null, ji = null, ei = null, Zh = null;
    {
      var qg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Te = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      IC = {
        readContext: function(e) {
          return nn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ge(), jc(t), Qg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ge(), nn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ge(), jc(t), Ph(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ge(), jc(a), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ge(), jc(t), Yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ge(), jc(t), Pg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ge(), jc(t);
          var a = W.current;
          W.current = ji;
          try {
            return Ig(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ge();
          var i = W.current;
          W.current = ji;
          try {
            return Ug(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ge(), Bg(e);
        },
        useState: function(e) {
          U = "useState", Ge();
          var t = W.current;
          W.current = ji;
          try {
            return jh(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ge(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ge(), Gg(e);
        },
        useTransition: function() {
          return U = "useTransition", Ge(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ge(), Fg(e, t, a);
        },
        useId: function() {
          return U = "useId", Ge(), Xg();
        },
        unstable_isNewReconciler: $
      }, GC = {
        readContext: function(e) {
          return nn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", P(), Qg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", P(), nn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", P(), Ph(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", P(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", P(), Yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", P(), Pg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", P();
          var a = W.current;
          W.current = ji;
          try {
            return Ig(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", P();
          var i = W.current;
          W.current = ji;
          try {
            return Ug(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", P(), Bg(e);
        },
        useState: function(e) {
          U = "useState", P();
          var t = W.current;
          W.current = ji;
          try {
            return jh(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", P(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", P(), Gg(e);
        },
        useTransition: function() {
          return U = "useTransition", P(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", P(), Fg(e, t, a);
        },
        useId: function() {
          return U = "useId", P(), Xg();
        },
        unstable_isNewReconciler: $
      }, WC = {
        readContext: function(e) {
          return nn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", P(), Wh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", P(), nn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", P(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", P(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", P(), $h(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", P(), Qh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", P();
          var a = W.current;
          W.current = ei;
          try {
            return Xh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", P();
          var i = W.current;
          W.current = ei;
          try {
            return Ag(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", P(), Bh();
        },
        useState: function(e) {
          U = "useState", P();
          var t = W.current;
          W.current = ei;
          try {
            return Vg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", P(), Gh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", P(), AC(e);
        },
        useTransition: function() {
          return U = "useTransition", P(), VC();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", P(), Vh(e, t);
        },
        useId: function() {
          return U = "useId", P(), qh();
        },
        unstable_isNewReconciler: $
      }, XC = {
        readContext: function(e) {
          return nn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", P(), Wh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", P(), nn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", P(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", P(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", P(), $h(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", P(), Qh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", P();
          var a = W.current;
          W.current = Zh;
          try {
            return Xh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", P();
          var i = W.current;
          W.current = Zh;
          try {
            return Hg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", P(), Bh();
        },
        useState: function(e) {
          U = "useState", P();
          var t = W.current;
          W.current = Zh;
          try {
            return jg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", P(), Gh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", P(), HC(e);
        },
        useTransition: function() {
          return U = "useTransition", P(), jC();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", P(), Vh(e, t);
        },
        useId: function() {
          return U = "useId", P(), qh();
        },
        unstable_isNewReconciler: $
      }, ji = {
        readContext: function(e) {
          return qg(), nn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Te(), Ge(), Qg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Te(), Ge(), nn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Te(), Ge(), Ph(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Te(), Ge(), $g(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Te(), Ge(), Yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Te(), Ge(), Pg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Te(), Ge();
          var a = W.current;
          W.current = ji;
          try {
            return Ig(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Te(), Ge();
          var i = W.current;
          W.current = ji;
          try {
            return Ug(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Te(), Ge(), Bg(e);
        },
        useState: function(e) {
          U = "useState", Te(), Ge();
          var t = W.current;
          W.current = ji;
          try {
            return jh(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Te(), Ge(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Te(), Ge(), Gg(e);
        },
        useTransition: function() {
          return U = "useTransition", Te(), Ge(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Te(), Ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Te(), Ge(), Fg(e, t, a);
        },
        useId: function() {
          return U = "useId", Te(), Ge(), Xg();
        },
        unstable_isNewReconciler: $
      }, ei = {
        readContext: function(e) {
          return qg(), nn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Te(), P(), Wh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Te(), P(), nn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Te(), P(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Te(), P(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Te(), P(), $h(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Te(), P(), Qh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Te(), P();
          var a = W.current;
          W.current = ei;
          try {
            return Xh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Te(), P();
          var i = W.current;
          W.current = ei;
          try {
            return Ag(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Te(), P(), Bh();
        },
        useState: function(e) {
          U = "useState", Te(), P();
          var t = W.current;
          W.current = ei;
          try {
            return Vg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Te(), P(), Gh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Te(), P(), AC(e);
        },
        useTransition: function() {
          return U = "useTransition", Te(), P(), VC();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Te(), P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Te(), P(), Vh(e, t);
        },
        useId: function() {
          return U = "useId", Te(), P(), qh();
        },
        unstable_isNewReconciler: $
      }, Zh = {
        readContext: function(e) {
          return qg(), nn(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Te(), P(), Wh(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Te(), P(), nn(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Te(), P(), Kd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Te(), P(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Te(), P(), $h(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Te(), P(), Qh(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Te(), P();
          var a = W.current;
          W.current = ei;
          try {
            return Xh(e, t);
          } finally {
            W.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Te(), P();
          var i = W.current;
          W.current = ei;
          try {
            return Hg(e, t, a);
          } finally {
            W.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Te(), P(), Bh();
        },
        useState: function(e) {
          U = "useState", Te(), P();
          var t = W.current;
          W.current = ei;
          try {
            return jg(e);
          } finally {
            W.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Te(), P(), Gh();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Te(), P(), HC(e);
        },
        useTransition: function() {
          return U = "useTransition", Te(), P(), jC();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Te(), P(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Te(), P(), Vh(e, t);
        },
        useId: function() {
          return U = "useId", Te(), P(), qh();
        },
        unstable_isNewReconciler: $
      };
    }
    var Uu = ve.unstable_now, qC = 0, Jh = -1, Zd = -1, em = -1, Kg = !1, tm = !1;
    function KC() {
      return Kg;
    }
    function Bx() {
      tm = !0;
    }
    function Yx() {
      Kg = !1, tm = !1;
    }
    function Px() {
      Kg = tm, tm = !1;
    }
    function ZC() {
      return qC;
    }
    function JC() {
      qC = Uu();
    }
    function Zg(e) {
      Zd = Uu(), e.actualStartTime < 0 && (e.actualStartTime = Uu());
    }
    function e1(e) {
      Zd = -1;
    }
    function nm(e, t) {
      if (Zd >= 0) {
        var a = Uu() - Zd;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Zd = -1;
      }
    }
    function Bi(e) {
      if (Jh >= 0) {
        var t = Uu() - Jh;
        Jh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ie:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case st:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Jg(e) {
      if (em >= 0) {
        var t = Uu() - em;
        em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ie:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case st:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Yi() {
      Jh = Uu();
    }
    function eS() {
      em = Uu();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Xo(e, t) {
      return {
        value: e,
        source: t,
        stack: uf(t),
        digest: null
      };
    }
    function nS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function $x(e, t) {
      return !0;
    }
    function rS(e, t) {
      try {
        var a = $x(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? we(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === ie)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = we(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + y + ".");
        }
        var R = v + `
` + f + `

` + ("" + m);
        console.error(R);
      } catch (E) {
        setTimeout(function() {
          throw E;
        });
      }
    }
    var Qx = typeof WeakMap == "function" ? WeakMap : Map;
    function t1(e, t, a) {
      var i = Ol(lt, a);
      i.tag = rg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        HD(u), rS(e, t);
      }, i;
    }
    function aS(e, t, a) {
      var i = Ol(lt, a);
      i.tag = rg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          dE(e), rS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        dE(e), rS(e, t), typeof u != "function" && UD(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (er(e.lanes, he) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", we(e) || "Unknown"));
      }), i;
    }
    function n1(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Qx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = FD.bind(null, e, t, a);
        un && vp(e, a), t.then(s, s);
      }
    }
    function Ix(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Gx(e, t) {
      var a = e.tag;
      if ((e.mode & be) === de && (a === Ee || a === Ae || a === Me)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function r1(e) {
      var t = e;
      do {
        if (t.tag === He && Lx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function a1(e, t, a, i, u) {
      if ((e.mode & be) === de) {
        if (e === t)
          e.flags |= Kt;
        else {
          if (e.flags |= Se, a.flags |= yo, a.flags &= ~(ks | cr), a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = lr;
            else {
              var f = Ol(lt, he);
              f.tag = Dh, Lu(a, f, he);
            }
          }
          a.lanes = ke(a.lanes, he);
        }
        return e;
      }
      return e.flags |= Kt, e.lanes = u, e;
    }
    function Wx(e, t, a, i, u) {
      if (a.flags |= cr, un && vp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Gx(a), zn() && a.mode & be && W0();
        var f = r1(t);
        if (f !== null) {
          f.flags &= ~kt, a1(f, t, a, e, u), f.mode & be && n1(e, s, u), Ix(f, e, s);
          return;
        } else {
          if (!su(u)) {
            n1(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (zn() && a.mode & be) {
        W0();
        var v = r1(t);
        if (v !== null) {
          (v.flags & Kt) === se && (v.flags |= kt), a1(v, t, a, e, u), qy(Xo(i, a));
          return;
        }
      }
      i = Xo(i, a), kD(i);
      var m = t;
      do {
        switch (m.tag) {
          case ie: {
            var y = i;
            m.flags |= Kt;
            var R = $t(u);
            m.lanes = ke(m.lanes, R);
            var E = t1(m, y, R);
            lg(m, E);
            return;
          }
          case ue:
            var b = i, M = m.type, O = m.stateNode;
            if ((m.flags & Se) === se && (typeof M.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && !rE(O))) {
              m.flags |= Kt;
              var X = $t(u);
              m.lanes = ke(m.lanes, X);
              var ce = aS(m, b, X);
              lg(m, ce);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function Xx() {
      return null;
    }
    var Jd = L.ReactCurrentOwner, ti = !1, iS, ep, lS, uS, oS, qo, sS, rm;
    iS = {}, ep = {}, lS = {}, uS = {}, oS = {}, qo = !1, sS = {}, rm = {};
    function mr(e, t, a, i) {
      e === null ? t.child = TC(t, null, a, i) : t.child = Uc(t, e.child, a, i);
    }
    function qx(e, t, a, i) {
      t.child = Uc(t, e.child, null, i), t.child = Uc(t, null, a, i);
    }
    function i1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xa(
          s,
          i,
          // Resolved props
          "prop",
          at(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      zc(t, u), Di(t);
      {
        if (Jd.current = t, na(!0), v = Bc(e, t, f, i, p, u), m = Yc(), t.mode & St) {
          Pt(!0);
          try {
            v = Bc(e, t, f, i, p, u), m = Yc();
          } finally {
            Pt(!1);
          }
        }
        na(!1);
      }
      return ul(), e !== null && !ti ? (kC(e, t, u), Nl(e, t, u)) : (zn() && m && $y(t), t.flags |= Si, mr(e, t, v, u), t.child);
    }
    function l1(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (tk(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = qc(s), t.tag = Me, t.type = f, dS(t, s), u1(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Xa(
            p,
            i,
            // Resolved props
            "prop",
            at(s)
          );
        }
        var v = WS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var m = a.type, y = m.propTypes;
        y && Xa(
          y,
          i,
          // Resolved props
          "prop",
          at(m)
        );
      }
      var R = e.child, E = gS(e, u);
      if (!E) {
        var b = R.memoizedProps, M = a.compare;
        if (M = M !== null ? M : oe, M(b, i) && e.ref === t.ref)
          return Nl(e, t, u);
      }
      t.flags |= Si;
      var O = ts(R, i);
      return O.ref = t.ref, O.return = t, t.child = O, O;
    }
    function u1(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ln) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Xa(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            at(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (oe(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ti = !1, t.pendingProps = i = y, gS(e, u))
            (e.flags & yo) !== se && (ti = !0);
          else
            return t.lanes = e.lanes, Nl(e, t, u);
      }
      return cS(e, t, a, i, u);
    }
    function o1(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || K)
        if ((t.mode & be) === de) {
          var f = {
            baseLanes: z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, mm(t, a);
        } else if (er(a, Jn)) {
          var R = {
            baseLanes: z,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var E = s !== null ? s.baseLanes : a;
          mm(t, E);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = ke(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Jn;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, mm(t, v), null;
        }
      else {
        var b;
        s !== null ? (b = ke(s.baseLanes, a), t.memoizedState = null) : b = a, mm(t, b);
      }
      return mr(e, t, u, a), t.child;
    }
    function Kx(e, t, a) {
      var i = t.pendingProps;
      return mr(e, t, i, a), t.child;
    }
    function Zx(e, t, a) {
      var i = t.pendingProps.children;
      return mr(e, t, i, a), t.child;
    }
    function Jx(e, t, a) {
      {
        t.flags |= De;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return mr(e, t, s, a), t.child;
    }
    function s1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Gn, t.flags |= Af);
    }
    function cS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xa(
          s,
          i,
          // Resolved props
          "prop",
          at(a)
        );
      }
      var f;
      {
        var p = bc(t, a, !0);
        f = Mc(t, p);
      }
      var v, m;
      zc(t, u), Di(t);
      {
        if (Jd.current = t, na(!0), v = Bc(e, t, a, i, f, u), m = Yc(), t.mode & St) {
          Pt(!0);
          try {
            v = Bc(e, t, a, i, f, u), m = Yc();
          } finally {
            Pt(!1);
          }
        }
        na(!1);
      }
      return ul(), e !== null && !ti ? (kC(e, t, u), Nl(e, t, u)) : (zn() && m && $y(t), t.flags |= Si, mr(e, t, v, u), t.child);
    }
    function c1(e, t, a, i, u) {
      {
        switch (mk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Se, t.flags |= Kt;
            var m = new Error("Simulated error coming from DevTools"), y = $t(u);
            t.lanes = ke(t.lanes, y);
            var R = aS(t, Xo(m, t), y);
            lg(t, R);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var E = a.propTypes;
          E && Xa(
            E,
            i,
            // Resolved props
            "prop",
            at(a)
          );
        }
      }
      var b;
      Hi(a) ? (b = !0, hh(t)) : b = !1, zc(t, u);
      var M = t.stateNode, O;
      M === null ? (im(e, t), yC(t, a, i), gg(t, a, i, u), O = !0) : e === null ? O = wx(t, a, i, u) : O = Dx(e, t, a, i, u);
      var X = fS(e, t, a, O, b, u);
      {
        var ce = t.stateNode;
        O && ce.props !== i && (qo || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", we(t) || "a component"), qo = !0);
      }
      return X;
    }
    function fS(e, t, a, i, u, s) {
      s1(e, t);
      var f = (t.flags & Se) !== se;
      if (!i && !f)
        return u && $0(t, a, !1), Nl(e, t, s);
      var p = t.stateNode;
      Jd.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, e1();
      else {
        Di(t);
        {
          if (na(!0), v = p.render(), t.mode & St) {
            Pt(!0);
            try {
              p.render();
            } finally {
              Pt(!1);
            }
          }
          na(!1);
        }
        ul();
      }
      return t.flags |= Si, e !== null && f ? qx(e, t, v, s) : mr(e, t, v, s), t.memoizedState = p.state, u && $0(t, a, !0), t.child;
    }
    function f1(e) {
      var t = e.stateNode;
      t.pendingContext ? Y0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Y0(e, t.context, !1), xg(e, t.containerInfo);
    }
    function ew(e, t, a) {
      if (f1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      sC(e, t), _h(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, m = t.updateQueue;
        if (m.baseState = v, t.memoizedState = v, t.flags & kt) {
          var y = Xo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return d1(e, t, p, a, y);
        } else if (p !== s) {
          var R = Xo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return d1(e, t, p, a, R);
        } else {
          ax(t);
          var E = TC(t, null, p, a);
          t.child = E;
          for (var b = E; b; )
            b.flags = b.flags & ~ct | Or, b = b.sibling;
        }
      } else {
        if (Oc(), p === s)
          return Nl(e, t, a);
        mr(e, t, p, a);
      }
      return t.child;
    }
    function d1(e, t, a, i, u) {
      return Oc(), qy(u), t.flags |= kt, mr(e, t, a, i), t.child;
    }
    function tw(e, t, a) {
      xC(t), e === null && Xy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = _y(i, u);
      return p ? f = null : s !== null && _y(i, s) && (t.flags |= Ie), s1(e, t), mr(e, t, f, a), t.child;
    }
    function nw(e, t) {
      return e === null && Xy(t), null;
    }
    function rw(e, t, a, i) {
      im(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = nk(v), y = Za(v, u), R;
      switch (m) {
        case Ee:
          return dS(t, v), t.type = v = qc(v), R = cS(null, t, v, y, i), R;
        case ue:
          return t.type = v = YS(v), R = c1(null, t, v, y, i), R;
        case Ae:
          return t.type = v = PS(v), R = i1(null, t, v, y, i), R;
        case yt: {
          if (t.type !== t.elementType) {
            var E = v.propTypes;
            E && Xa(
              E,
              y,
              // Resolved for outer only
              "prop",
              at(v)
            );
          }
          return R = l1(
            null,
            t,
            v,
            Za(v.type, y),
            // The inner type can have defaults too
            i
          ), R;
        }
      }
      var b = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ln && (b = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + b));
    }
    function aw(e, t, a, i, u) {
      im(e, t), t.tag = ue;
      var s;
      return Hi(a) ? (s = !0, hh(t)) : s = !1, zc(t, u), yC(t, a, i), gg(t, a, i, u), fS(null, t, a, !0, s, u);
    }
    function iw(e, t, a, i) {
      im(e, t);
      var u = t.pendingProps, s;
      {
        var f = bc(t, a, !1);
        s = Mc(t, f);
      }
      zc(t, i);
      var p, v;
      Di(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = at(a) || "Unknown";
          iS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), iS[m] = !0);
        }
        t.mode & St && Ka.recordLegacyContextWarning(t, null), na(!0), Jd.current = t, p = Bc(null, t, a, u, s, i), v = Yc(), na(!1);
      }
      if (ul(), t.flags |= Si, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = at(a) || "Unknown";
        ep[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), ep[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = at(a) || "Unknown";
          ep[R] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), ep[R] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var E = !1;
        return Hi(a) ? (E = !0, hh(t)) : E = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ig(t), mC(t, p), gg(t, a, u, i), fS(null, t, a, !0, E, i);
      } else {
        if (t.tag = Ee, t.mode & St) {
          Pt(!0);
          try {
            p = Bc(null, t, a, u, s, i), v = Yc();
          } finally {
            Pt(!1);
          }
        }
        return zn() && v && $y(t), mr(null, t, p, i), dS(t, a), t.child;
      }
    }
    function dS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = br();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), oS[u] || (oS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = at(t) || "Unknown";
          uS[f] || (g("%s: Function components do not support getDerivedStateFromProps.", f), uS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = at(t) || "Unknown";
          lS[p] || (g("%s: Function components do not support contextType.", p), lS[p] = !0);
        }
      }
    }
    var pS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ve
    };
    function vS(e) {
      return {
        baseLanes: e,
        cachePool: Xx(),
        transitions: null
      };
    }
    function lw(e, t) {
      var a = null;
      return {
        baseLanes: ke(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function uw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return kg(e, Qd);
    }
    function ow(e, t) {
      return cu(e.childLanes, t);
    }
    function p1(e, t, a) {
      var i = t.pendingProps;
      yk(t) && (t.flags |= Se);
      var u = Ja.current, s = !1, f = (t.flags & Se) !== se;
      if (f || uw(u, e) ? (s = !0, t.flags &= ~Se) : (e === null || e.memoizedState !== null) && (u = _x(u, DC)), u = Hc(u), Nu(t, u), e === null) {
        Xy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return pw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = sw(t, m, y, a), E = t.child;
          return E.memoizedState = vS(a), t.memoizedState = pS, R;
        } else
          return hS(t, m);
      } else {
        var b = e.memoizedState;
        if (b !== null) {
          var M = b.dehydrated;
          if (M !== null)
            return vw(e, t, f, i, M, b, a);
        }
        if (s) {
          var O = i.fallback, X = i.children, ce = fw(e, t, X, O, a), ae = t.child, Be = e.child.memoizedState;
          return ae.memoizedState = Be === null ? vS(a) : lw(Be, a), ae.childLanes = ow(e, a), t.memoizedState = pS, ce;
        } else {
          var Ue = i.children, w = cw(e, t, Ue, a);
          return t.memoizedState = null, w;
        }
      }
    }
    function hS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = mS(u, i);
      return s.return = e, e.child = s, s;
    }
    function sw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & be) === de && s !== null ? (p = s, p.childLanes = z, p.pendingProps = f, e.mode & pe && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bu(a, u, i, null)) : (p = mS(f, u), v = Bu(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function mS(e, t, a) {
      return vE(e, t, z, null);
    }
    function v1(e, t) {
      return ts(e, t);
    }
    function cw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = v1(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & be) === de && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Qe) : p.push(s);
      }
      return t.child = f, f;
    }
    function fw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & be) === de && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = z, m.pendingProps = v, t.mode & pe && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = v1(f, v), m.subtreeFlags = f.subtreeFlags & ln;
      var R;
      return p !== null ? R = ts(p, i) : (R = Bu(i, s, u, null), R.flags |= ct), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function am(e, t, a, i) {
      i !== null && qy(i), Uc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = hS(t, s);
      return f.flags |= ct, t.memoizedState = null, f;
    }
    function dw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = mS(f, s), v = Bu(i, s, u, null);
      return v.flags |= ct, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & be) !== de && Uc(t, e.child, null, u), v;
    }
    function pw(e, t, a) {
      return (e.mode & be) === de ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = he) : zy(t) ? e.lanes = cl : e.lanes = Jn, null;
    }
    function vw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & kt) {
          t.flags &= ~kt;
          var w = nS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return am(e, t, f, w);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Se, null;
          var N = i.children, D = i.fallback, V = dw(e, t, N, D, f), q = t.child;
          return q.memoizedState = vS(f), t.memoizedState = pS, V;
        }
      else {
        if (nx(), (t.mode & be) === de)
          return am(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (zy(u)) {
          var p, v, m;
          {
            var y = SR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var E = nS(R, p, m);
          return am(e, t, f, E);
        }
        var b = er(f, e.childLanes);
        if (ti || b) {
          var M = hm();
          if (M !== null) {
            var O = ty(M, f);
            if (O !== Ve && O !== s.retryLane) {
              s.retryLane = O;
              var X = lt;
              Yr(e, O), mn(M, e, O, X);
            }
          }
          HS();
          var ce = nS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return am(e, t, f, ce);
        } else if (A0(u)) {
          t.flags |= Se, t.child = e.child;
          var ae = VD.bind(null, e);
          return CR(u, ae), null;
        } else {
          ix(t, u, s.treeContext);
          var Be = i.children, Ue = hS(t, Be);
          return Ue.flags |= Or, Ue;
        }
      }
    }
    function h1(e, t, a) {
      e.lanes = ke(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ke(i.lanes, t)), tg(e.return, t, a);
    }
    function hw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === He) {
          var u = i.memoizedState;
          u !== null && h1(i, a, e);
        } else if (i.tag === ut)
          h1(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function mw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Hh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function yw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !sS[e])
        if (sS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function gw(e, t) {
      e !== void 0 && !rm[e] && (e !== "collapsed" && e !== "hidden" ? (rm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (rm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function m1(e, t) {
      {
        var a = Xt(e), i = !a && typeof Oa(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Sw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Xt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!m1(e[a], a))
              return;
        } else {
          var i = Oa(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!m1(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function yS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function y1(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      yw(u), gw(s, u), Sw(f, u), mr(e, t, f, a);
      var p = Ja.current, v = kg(p, Qd);
      if (v)
        p = bg(p, Qd), t.flags |= Se;
      else {
        var m = e !== null && (e.flags & Se) !== se;
        m && hw(t, t.child, a), p = Hc(p);
      }
      if (Nu(t, p), (t.mode & be) === de)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = mw(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), yS(
              t,
              !1,
              // isBackwards
              R,
              y,
              s
            );
            break;
          }
          case "backwards": {
            var E = null, b = t.child;
            for (t.child = null; b !== null; ) {
              var M = b.alternate;
              if (M !== null && Hh(M) === null) {
                t.child = b;
                break;
              }
              var O = b.sibling;
              b.sibling = E, E = b, b = O;
            }
            yS(
              t,
              !0,
              // isBackwards
              E,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            yS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Cw(e, t, a) {
      xg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Uc(t, null, i, a) : mr(e, t, i, a), t.child;
    }
    var g1 = !1;
    function Ew(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || g1 || (g1 = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xa(v, s, "prop", "Context.Provider");
      }
      if (iC(t, u, p), f !== null) {
        var m = f.value;
        if (ee(m, p)) {
          if (f.children === s.children && !ph())
            return Nl(e, t, a);
        } else
          hx(t, u, a);
      }
      var y = s.children;
      return mr(e, t, y, a), t.child;
    }
    var S1 = !1;
    function Tw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (S1 || (S1 = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zc(t, a);
      var f = nn(i);
      Di(t);
      var p;
      return Jd.current = t, na(!0), p = s(f), na(!1), ul(), t.flags |= Si, mr(e, t, p, a), t.child;
    }
    function tp() {
      ti = !0;
    }
    function im(e, t) {
      (t.mode & be) === de && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ct);
    }
    function Nl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), e1(), pp(t.lanes), er(a, t.childLanes) ? (kx(e, t), t.child) : null;
    }
    function Rw(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Qe) : s.push(e), a.flags |= ct, a;
      }
    }
    function gS(e, t) {
      var a = e.lanes;
      return !!er(a, t);
    }
    function xw(e, t, a) {
      switch (t.tag) {
        case ie:
          f1(t), t.stateNode, Oc();
          break;
        case le:
          xC(t);
          break;
        case ue: {
          var i = t.type;
          Hi(i) && hh(t);
          break;
        }
        case me:
          xg(t, t.stateNode.containerInfo);
          break;
        case gn: {
          var u = t.memoizedProps.value, s = t.type._context;
          iC(t, s, u);
          break;
        }
        case st:
          {
            var f = er(a, t.childLanes);
            f && (t.flags |= De);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case He: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Nu(t, Hc(Ja.current)), t.flags |= Se, null;
            var m = t.child, y = m.childLanes;
            if (er(a, y))
              return p1(e, t, a);
            Nu(t, Hc(Ja.current));
            var R = Nl(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Nu(t, Hc(Ja.current));
          break;
        }
        case ut: {
          var E = (e.flags & Se) !== se, b = er(a, t.childLanes);
          if (E) {
            if (b)
              return y1(e, t, a);
            t.flags |= Se;
          }
          var M = t.memoizedState;
          if (M !== null && (M.rendering = null, M.tail = null, M.lastEffect = null), Nu(t, Ja.current), b)
            break;
          return null;
        }
        case Fe:
        case qe:
          return t.lanes = z, o1(e, t, a);
      }
      return Nl(e, t, a);
    }
    function C1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Rw(e, t, WS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || ph() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ti = !0;
        else {
          var s = gS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Se) === se)
            return ti = !1, xw(e, t, a);
          (e.flags & yo) !== se ? ti = !0 : ti = !1;
        }
      } else if (ti = !1, zn() && qR(t)) {
        var f = t.index, p = KR();
        G0(t, p, f);
      }
      switch (t.lanes = z, t.tag) {
        case an:
          return iw(e, t, t.type, a);
        case Mn: {
          var v = t.elementType;
          return rw(e, t, v, a);
        }
        case Ee: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : Za(m, y);
          return cS(e, t, m, R, a);
        }
        case ue: {
          var E = t.type, b = t.pendingProps, M = t.elementType === E ? b : Za(E, b);
          return c1(e, t, E, M, a);
        }
        case ie:
          return ew(e, t, a);
        case le:
          return tw(e, t, a);
        case Le:
          return nw(e, t);
        case He:
          return p1(e, t, a);
        case me:
          return Cw(e, t, a);
        case Ae: {
          var O = t.type, X = t.pendingProps, ce = t.elementType === O ? X : Za(O, X);
          return i1(e, t, O, ce, a);
        }
        case nt:
          return Kx(e, t, a);
        case ot:
          return Zx(e, t, a);
        case st:
          return Jx(e, t, a);
        case gn:
          return Ew(e, t, a);
        case Wr:
          return Tw(e, t, a);
        case yt: {
          var ae = t.type, Be = t.pendingProps, Ue = Za(ae, Be);
          if (t.type !== t.elementType) {
            var w = ae.propTypes;
            w && Xa(
              w,
              Ue,
              // Resolved for outer only
              "prop",
              at(ae)
            );
          }
          return Ue = Za(ae.type, Ue), l1(e, t, ae, Ue, a);
        }
        case Me:
          return u1(e, t, t.type, t.pendingProps, a);
        case lr: {
          var N = t.type, D = t.pendingProps, V = t.elementType === N ? D : Za(N, D);
          return aw(e, t, N, V, a);
        }
        case ut:
          return y1(e, t, a);
        case Yn:
          break;
        case Fe:
          return o1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pc(e) {
      e.flags |= De;
    }
    function E1(e) {
      e.flags |= Gn, e.flags |= Af;
    }
    var T1, SS, R1, x1;
    T1 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === Le)
          GT(e, u.stateNode);
        else if (u.tag !== me) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, SS = function(e, t) {
    }, R1 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = wg(), v = XT(f, a, s, i, u, p);
        t.updateQueue = v, v && Pc(t);
      }
    }, x1 = function(e, t, a, i) {
      a !== i && Pc(t);
    };
    function np(e, t) {
      if (!zn())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function An(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = z, i = se;
      if (t) {
        if ((e.mode & pe) !== de) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = ke(a, ke(m.lanes, m.childLanes)), i |= m.subtreeFlags & ln, i |= m.flags & ln, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = ke(a, ke(y.lanes, y.childLanes)), i |= y.subtreeFlags & ln, i |= y.flags & ln, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & pe) !== de) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = ke(a, ke(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = ke(a, ke(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function ww(e, t, a) {
      if (cx() && (t.mode & be) !== de && (t.flags & Se) === se)
        return eC(t), Oc(), t.flags |= kt | cr | Kt, !1;
      var i = Ch(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (ox(t), An(t), (t.mode & pe) !== de) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Oc(), (t.flags & Se) === se && (t.memoizedState = null), t.flags |= De, An(t), (t.mode & pe) !== de) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return tC(), !0;
    }
    function w1(e, t, a) {
      var i = t.pendingProps;
      switch (Qy(t), t.tag) {
        case an:
        case Mn:
        case Me:
        case Ee:
        case Ae:
        case nt:
        case ot:
        case st:
        case Wr:
        case yt:
          return An(t), null;
        case ue: {
          var u = t.type;
          return Hi(u) && vh(t), An(t), null;
        }
        case ie: {
          var s = t.stateNode;
          if (Ac(t), By(t), _g(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Ch(t);
            if (f)
              Pc(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & kt) !== se) && (t.flags |= Lr, tC());
            }
          }
          return SS(e, t), An(t), null;
        }
        case le: {
          Dg(t);
          var v = RC(), m = t.type;
          if (e !== null && t.stateNode != null)
            R1(e, t, m, i, v), e.ref !== t.ref && E1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return An(t), null;
            }
            var y = wg(), R = Ch(t);
            if (R)
              lx(t, v, y) && Pc(t);
            else {
              var E = IT(m, i, v, y, t);
              T1(E, t, !1, !1), t.stateNode = E, WT(E, m, i, v) && Pc(t);
            }
            t.ref !== null && E1(t);
          }
          return An(t), null;
        }
        case Le: {
          var b = i;
          if (e && t.stateNode != null) {
            var M = e.memoizedProps;
            x1(e, t, M, b);
          } else {
            if (typeof b != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var O = RC(), X = wg(), ce = Ch(t);
            ce ? ux(t) && Pc(t) : t.stateNode = qT(b, O, X, t);
          }
          return An(t), null;
        }
        case He: {
          Fc(t);
          var ae = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Be = ww(e, t, ae);
            if (!Be)
              return t.flags & Kt ? t : null;
          }
          if ((t.flags & Se) !== se)
            return t.lanes = a, (t.mode & pe) !== de && tS(t), t;
          var Ue = ae !== null, w = e !== null && e.memoizedState !== null;
          if (Ue !== w && Ue) {
            var N = t.child;
            if (N.flags |= Ci, (t.mode & be) !== de) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !We);
              D || kg(Ja.current, DC) ? DD() : HS();
            }
          }
          var V = t.updateQueue;
          if (V !== null && (t.flags |= De), An(t), (t.mode & pe) !== de && Ue) {
            var q = t.child;
            q !== null && (t.treeBaseDuration -= q.treeBaseDuration);
          }
          return null;
        }
        case me:
          return Ac(t), SS(e, t), e === null && PR(t.stateNode.containerInfo), An(t), null;
        case gn:
          var I = t.type._context;
          return eg(I, t), An(t), null;
        case lr: {
          var ge = t.type;
          return Hi(ge) && vh(t), An(t), null;
        }
        case ut: {
          Fc(t);
          var Re = t.memoizedState;
          if (Re === null)
            return An(t), null;
          var et = (t.flags & Se) !== se, Pe = Re.rendering;
          if (Pe === null)
            if (et)
              np(Re, !1);
            else {
              var Wt = bD() && (e === null || (e.flags & Se) === se);
              if (!Wt)
                for (var $e = t.child; $e !== null; ) {
                  var jt = Hh($e);
                  if (jt !== null) {
                    et = !0, t.flags |= Se, np(Re, !1);
                    var ar = jt.updateQueue;
                    return ar !== null && (t.updateQueue = ar, t.flags |= De), t.subtreeFlags = se, bx(t, a), Nu(t, bg(Ja.current, Qd)), t.child;
                  }
                  $e = $e.sibling;
                }
              Re.tail !== null && gt() > I1() && (t.flags |= Se, et = !0, np(Re, !1), t.lanes = Xf);
            }
          else {
            if (!et) {
              var Bn = Hh(Pe);
              if (Bn !== null) {
                t.flags |= Se, et = !0;
                var ca = Bn.updateQueue;
                if (ca !== null && (t.updateQueue = ca, t.flags |= De), np(Re, !0), Re.tail === null && Re.tailMode === "hidden" && !Pe.alternate && !zn())
                  return An(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                gt() * 2 - Re.renderingStartTime > I1() && a !== Jn && (t.flags |= Se, et = !0, np(Re, !1), t.lanes = Xf);
            }
            if (Re.isBackwards)
              Pe.sibling = t.child, t.child = Pe;
            else {
              var Sr = Re.last;
              Sr !== null ? Sr.sibling = Pe : t.child = Pe, Re.last = Pe;
            }
          }
          if (Re.tail !== null) {
            var Cr = Re.tail;
            Re.rendering = Cr, Re.tail = Cr.sibling, Re.renderingStartTime = gt(), Cr.sibling = null;
            var ir = Ja.current;
            return et ? ir = bg(ir, Qd) : ir = Hc(ir), Nu(t, ir), Cr;
          }
          return An(t), null;
        }
        case Yn:
          break;
        case Fe:
        case qe: {
          AS(t);
          var Fl = t.memoizedState, Kc = Fl !== null;
          if (e !== null) {
            var gp = e.memoizedState, Qi = gp !== null;
            Qi !== Kc && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !K && (t.flags |= Ci);
          }
          return !Kc || (t.mode & be) === de ? An(t) : er($i, Jn) && (An(t), t.subtreeFlags & (ct | De) && (t.flags |= Ci)), null;
        }
        case Er:
          return null;
        case Rt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Dw(e, t, a) {
      switch (Qy(t), t.tag) {
        case ue: {
          var i = t.type;
          Hi(i) && vh(t);
          var u = t.flags;
          return u & Kt ? (t.flags = u & ~Kt | Se, (t.mode & pe) !== de && tS(t), t) : null;
        }
        case ie: {
          t.stateNode, Ac(t), By(t), _g();
          var s = t.flags;
          return (s & Kt) !== se && (s & Se) === se ? (t.flags = s & ~Kt | Se, t) : null;
        }
        case le:
          return Dg(t), null;
        case He: {
          Fc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Oc();
          }
          var p = t.flags;
          return p & Kt ? (t.flags = p & ~Kt | Se, (t.mode & pe) !== de && tS(t), t) : null;
        }
        case ut:
          return Fc(t), null;
        case me:
          return Ac(t), null;
        case gn:
          var v = t.type._context;
          return eg(v, t), null;
        case Fe:
        case qe:
          return AS(t), null;
        case Er:
          return null;
        default:
          return null;
      }
    }
    function D1(e, t, a) {
      switch (Qy(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && vh(t);
          break;
        }
        case ie: {
          t.stateNode, Ac(t), By(t), _g();
          break;
        }
        case le: {
          Dg(t);
          break;
        }
        case me:
          Ac(t);
          break;
        case He:
          Fc(t);
          break;
        case ut:
          Fc(t);
          break;
        case gn:
          var u = t.type._context;
          eg(u, t);
          break;
        case Fe:
        case qe:
          AS(t);
          break;
      }
    }
    var k1 = null;
    k1 = /* @__PURE__ */ new Set();
    var lm = !1, Hn = !1, kw = typeof WeakSet == "function" ? WeakSet : Set, te = null, $c = null, Qc = null;
    function bw(e) {
      il(null, function() {
        throw e;
      }), zf();
    }
    var Mw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & pe)
        try {
          Yi(), t.componentWillUnmount();
        } finally {
          Bi(e);
        }
      else
        t.componentWillUnmount();
    };
    function b1(e, t) {
      try {
        Au(cn, e);
      } catch (a) {
        vt(e, t, a);
      }
    }
    function CS(e, t, a) {
      try {
        Mw(e, a);
      } catch (i) {
        vt(e, t, i);
      }
    }
    function _w(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vt(e, t, i);
      }
    }
    function M1(e, t) {
      try {
        L1(e);
      } catch (a) {
        vt(e, t, a);
      }
    }
    function Ic(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (_n && ui && e.mode & pe)
              try {
                Yi(), i = a(null);
              } finally {
                Bi(e);
              }
            else
              i = a(null);
          } catch (u) {
            vt(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", we(e));
        } else
          a.current = null;
    }
    function um(e, t, a) {
      try {
        a();
      } catch (i) {
        vt(e, t, i);
      }
    }
    var _1 = !1;
    function Lw(e, t) {
      $T(e.containerInfo), te = t, Ow();
      var a = _1;
      return _1 = !1, a;
    }
    function Ow() {
      for (; te !== null; ) {
        var e = te, t = e.child;
        (e.subtreeFlags & nu) !== se && t !== null ? (t.return = e, te = t) : Nw();
      }
    }
    function Nw() {
      for (; te !== null; ) {
        var e = te;
        Ze(e);
        try {
          zw(e);
        } catch (a) {
          vt(e, e.return, a);
        }
        Yt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, te = t;
          return;
        }
        te = e.return;
      }
    }
    function zw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Lr) !== se) {
        switch (Ze(e), e.tag) {
          case Ee:
          case Ae:
          case Me:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !qo && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", we(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", we(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Za(e.type, i), u);
              {
                var p = k1;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", we(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ie: {
            {
              var v = e.stateNode;
              hR(v.containerInfo);
            }
            break;
          }
          case le:
          case Le:
          case me:
          case lr:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Yt();
      }
    }
    function ni(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Un) !== Pr ? Us(t) : (e & cn) !== Pr && As(t), (e & Fi) !== Pr && hp(!0), um(t, a, p), (e & Fi) !== Pr && hp(!1), (e & Un) !== Pr ? Sv() : (e & cn) !== Pr && ru());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Au(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Un) !== Pr ? gv(t) : (e & cn) !== Pr && Cv(t);
            var f = s.create;
            (e & Fi) !== Pr && hp(!0), s.destroy = f(), (e & Fi) !== Pr && hp(!1), (e & Un) !== Pr ? If() : (e & cn) !== Pr && Ev();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & cn) !== se ? v = "useLayoutEffect" : (s.tag & Fi) !== se ? v = "useInsertionEffect" : v = "useEffect";
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : m = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, m);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Uw(e, t) {
      if ((t.flags & De) !== se)
        switch (t.tag) {
          case st: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ZC(), p = t.alternate === null ? "mount" : "update";
            KC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case ie:
                    var m = v.stateNode;
                    m.passiveEffectDuration += a;
                    break e;
                  case st:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Aw(e, t, a, i) {
      if ((a.flags & Tn) !== se)
        switch (a.tag) {
          case Ee:
          case Ae:
          case Me: {
            if (!Hn)
              if (a.mode & pe)
                try {
                  Yi(), Au(cn | sn, a);
                } finally {
                  Bi(a);
                }
              else
                Au(cn | sn, a);
            break;
          }
          case ue: {
            var u = a.stateNode;
            if (a.flags & De && !Hn)
              if (t === null)
                if (a.type === a.elementType && !qo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", we(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", we(a) || "instance")), a.mode & pe)
                  try {
                    Yi(), u.componentDidMount();
                  } finally {
                    Bi(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Za(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !qo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", we(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", we(a) || "instance")), a.mode & pe)
                  try {
                    Yi(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Bi(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !qo && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", we(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", we(a) || "instance")), fC(a, p, u));
            break;
          }
          case ie: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    m = a.child.stateNode;
                    break;
                  case ue:
                    m = a.child.stateNode;
                    break;
                }
              fC(a, v, m);
            }
            break;
          }
          case le: {
            var y = a.stateNode;
            if (t === null && a.flags & De) {
              var R = a.type, E = a.memoizedProps;
              tR(y, R, E);
            }
            break;
          }
          case Le:
            break;
          case me:
            break;
          case st: {
            {
              var b = a.memoizedProps, M = b.onCommit, O = b.onRender, X = a.stateNode.effectDuration, ce = ZC(), ae = t === null ? "mount" : "update";
              KC() && (ae = "nested-update"), typeof O == "function" && O(a.memoizedProps.id, ae, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ce);
              {
                typeof M == "function" && M(a.memoizedProps.id, ae, X, ce), ND(a);
                var Be = a.return;
                e:
                  for (; Be !== null; ) {
                    switch (Be.tag) {
                      case ie:
                        var Ue = Be.stateNode;
                        Ue.effectDuration += X;
                        break e;
                      case st:
                        var w = Be.stateNode;
                        w.effectDuration += X;
                        break e;
                    }
                    Be = Be.return;
                  }
              }
            }
            break;
          }
          case He: {
            $w(e, a);
            break;
          }
          case ut:
          case lr:
          case Yn:
          case Fe:
          case qe:
          case Rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hn || a.flags & Gn && L1(a);
    }
    function Hw(e) {
      switch (e.tag) {
        case Ee:
        case Ae:
        case Me: {
          if (e.mode & pe)
            try {
              Yi(), b1(e, e.return);
            } finally {
              Bi(e);
            }
          else
            b1(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && _w(e, e.return, t), M1(e, e.return);
          break;
        }
        case le: {
          M1(e, e.return);
          break;
        }
      }
    }
    function Fw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? fR(u) : pR(i.stateNode, i.memoizedProps);
            } catch (f) {
              vt(e, e.return, f);
            }
          }
        } else if (i.tag === Le) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? dR(s) : vR(s, i.memoizedProps);
            } catch (f) {
              vt(e, e.return, f);
            }
        } else if (!((i.tag === Fe || i.tag === qe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function L1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case le:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & pe)
            try {
              Yi(), u = t(i);
            } finally {
              Bi(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", we(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", we(e)), t.current = i;
      }
    }
    function Vw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function O1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, O1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && IR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function jw(e) {
      for (var t = e.return; t !== null; ) {
        if (N1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function N1(e) {
      return e.tag === le || e.tag === ie || e.tag === me;
    }
    function z1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || N1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== Le && t.tag !== zt; ) {
            if (t.flags & ct || t.child === null || t.tag === me)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & ct))
            return t.stateNode;
        }
    }
    function Bw(e) {
      var t = jw(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & Ie && (U0(a), t.flags &= ~Ie);
          var i = z1(e);
          TS(e, i, a);
          break;
        }
        case ie:
        case me: {
          var u = t.stateNode.containerInfo, s = z1(e);
          ES(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function ES(e, t, a) {
      var i = e.tag, u = i === le || i === Le;
      if (u) {
        var s = e.stateNode;
        t ? uR(a, s, t) : iR(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          ES(f, t, a);
          for (var p = f.sibling; p !== null; )
            ES(p, t, a), p = p.sibling;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === le || i === Le;
      if (u) {
        var s = e.stateNode;
        t ? lR(a, s, t) : aR(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    var Fn = null, ri = !1;
    function Yw(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case le: {
                Fn = i.stateNode, ri = !1;
                break e;
              }
              case ie: {
                Fn = i.stateNode.containerInfo, ri = !0;
                break e;
              }
              case me: {
                Fn = i.stateNode.containerInfo, ri = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Fn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        U1(e, t, a), Fn = null, ri = !1;
      }
      Vw(a);
    }
    function Hu(e, t, a) {
      for (var i = a.child; i !== null; )
        U1(e, t, i), i = i.sibling;
    }
    function U1(e, t, a) {
      switch ($f(a), a.tag) {
        case le:
          Hn || Ic(a, t);
        case Le: {
          {
            var i = Fn, u = ri;
            Fn = null, Hu(e, t, a), Fn = i, ri = u, Fn !== null && (ri ? sR(Fn, a.stateNode) : oR(Fn, a.stateNode));
          }
          return;
        }
        case zt: {
          Fn !== null && (ri ? cR(Fn, a.stateNode) : Ny(Fn, a.stateNode));
          return;
        }
        case me: {
          {
            var s = Fn, f = ri;
            Fn = a.stateNode.containerInfo, ri = !0, Hu(e, t, a), Fn = s, ri = f;
          }
          return;
        }
        case Ee:
        case Ae:
        case yt:
        case Me: {
          if (!Hn) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, E = R.destroy, b = R.tag;
                  E !== void 0 && ((b & Fi) !== Pr ? um(a, t, E) : (b & cn) !== Pr && (As(a), a.mode & pe ? (Yi(), um(a, t, E), Bi(a)) : um(a, t, E), ru())), y = y.next;
                } while (y !== m);
              }
            }
          }
          Hu(e, t, a);
          return;
        }
        case ue: {
          if (!Hn) {
            Ic(a, t);
            var M = a.stateNode;
            typeof M.componentWillUnmount == "function" && CS(a, t, M);
          }
          Hu(e, t, a);
          return;
        }
        case Yn: {
          Hu(e, t, a);
          return;
        }
        case Fe: {
          if (
            // TODO: Remove this dead flag
            a.mode & be
          ) {
            var O = Hn;
            Hn = O || a.memoizedState !== null, Hu(e, t, a), Hn = O;
          } else
            Hu(e, t, a);
          break;
        }
        default: {
          Hu(e, t, a);
          return;
        }
      }
    }
    function Pw(e) {
      e.memoizedState;
    }
    function $w(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && MR(s);
          }
        }
      }
    }
    function A1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new kw()), t.forEach(function(i) {
          var u = jD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), un)
              if ($c !== null && Qc !== null)
                vp(Qc, $c);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Qw(e, t, a) {
      $c = a, Qc = e, Ze(t), H1(t, e), Ze(t), $c = null, Qc = null;
    }
    function ai(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Yw(e, t, s);
          } catch (v) {
            vt(s, t, v);
          }
        }
      var f = Om();
      if (t.subtreeFlags & qn)
        for (var p = t.child; p !== null; )
          Ze(p), H1(p, e), p = p.sibling;
      Ze(f);
    }
    function H1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Ee:
        case Ae:
        case yt:
        case Me: {
          if (ai(t, e), Pi(e), u & De) {
            try {
              ni(Fi | sn, e, e.return), Au(Fi | sn, e);
            } catch (ge) {
              vt(e, e.return, ge);
            }
            if (e.mode & pe) {
              try {
                Yi(), ni(cn | sn, e, e.return);
              } catch (ge) {
                vt(e, e.return, ge);
              }
              Bi(e);
            } else
              try {
                ni(cn | sn, e, e.return);
              } catch (ge) {
                vt(e, e.return, ge);
              }
          }
          return;
        }
        case ue: {
          ai(t, e), Pi(e), u & Gn && i !== null && Ic(i, i.return);
          return;
        }
        case le: {
          ai(t, e), Pi(e), u & Gn && i !== null && Ic(i, i.return);
          {
            if (e.flags & Ie) {
              var s = e.stateNode;
              try {
                U0(s);
              } catch (ge) {
                vt(e, e.return, ge);
              }
            }
            if (u & De) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    nR(f, y, m, v, p, e);
                  } catch (ge) {
                    vt(e, e.return, ge);
                  }
              }
            }
          }
          return;
        }
        case Le: {
          if (ai(t, e), Pi(e), u & De) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, E = e.memoizedProps, b = i !== null ? i.memoizedProps : E;
            try {
              rR(R, b, E);
            } catch (ge) {
              vt(e, e.return, ge);
            }
          }
          return;
        }
        case ie: {
          if (ai(t, e), Pi(e), u & De && i !== null) {
            var M = i.memoizedState;
            if (M.isDehydrated)
              try {
                bR(t.containerInfo);
              } catch (ge) {
                vt(e, e.return, ge);
              }
          }
          return;
        }
        case me: {
          ai(t, e), Pi(e);
          return;
        }
        case He: {
          ai(t, e), Pi(e);
          var O = e.child;
          if (O.flags & Ci) {
            var X = O.stateNode, ce = O.memoizedState, ae = ce !== null;
            if (X.isHidden = ae, ae) {
              var Be = O.alternate !== null && O.alternate.memoizedState !== null;
              Be || wD();
            }
          }
          if (u & De) {
            try {
              Pw(e);
            } catch (ge) {
              vt(e, e.return, ge);
            }
            A1(e);
          }
          return;
        }
        case Fe: {
          var Ue = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & be
          ) {
            var w = Hn;
            Hn = w || Ue, ai(t, e), Hn = w;
          } else
            ai(t, e);
          if (Pi(e), u & Ci) {
            var N = e.stateNode, D = e.memoizedState, V = D !== null, q = e;
            if (N.isHidden = V, V && !Ue && (q.mode & be) !== de) {
              te = q;
              for (var I = q.child; I !== null; )
                te = I, Gw(I), I = I.sibling;
            }
            Fw(q, V);
          }
          return;
        }
        case ut: {
          ai(t, e), Pi(e), u & De && A1(e);
          return;
        }
        case Yn:
          return;
        default: {
          ai(t, e), Pi(e);
          return;
        }
      }
    }
    function Pi(e) {
      var t = e.flags;
      if (t & ct) {
        try {
          Bw(e);
        } catch (a) {
          vt(e, e.return, a);
        }
        e.flags &= ~ct;
      }
      t & Or && (e.flags &= ~Or);
    }
    function Iw(e, t, a) {
      $c = a, Qc = t, te = e, F1(e, t, a), $c = null, Qc = null;
    }
    function F1(e, t, a) {
      for (var i = (e.mode & be) !== de; te !== null; ) {
        var u = te, s = u.child;
        if (u.tag === Fe && i) {
          var f = u.memoizedState !== null, p = f || lm;
          if (p) {
            RS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || Hn, R = lm, E = Hn;
            lm = p, Hn = y, Hn && !E && (te = u, Ww(u));
            for (var b = s; b !== null; )
              te = b, F1(
                b,
                // New root; bubble back up to here and stop.
                t,
                a
              ), b = b.sibling;
            te = u, lm = R, Hn = E, RS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Tn) !== se && s !== null ? (s.return = u, te = s) : RS(e, t, a);
      }
    }
    function RS(e, t, a) {
      for (; te !== null; ) {
        var i = te;
        if ((i.flags & Tn) !== se) {
          var u = i.alternate;
          Ze(i);
          try {
            Aw(t, u, i, a);
          } catch (f) {
            vt(i, i.return, f);
          }
          Yt();
        }
        if (i === e) {
          te = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, te = s;
          return;
        }
        te = i.return;
      }
    }
    function Gw(e) {
      for (; te !== null; ) {
        var t = te, a = t.child;
        switch (t.tag) {
          case Ee:
          case Ae:
          case yt:
          case Me: {
            if (t.mode & pe)
              try {
                Yi(), ni(cn, t, t.return);
              } finally {
                Bi(t);
              }
            else
              ni(cn, t, t.return);
            break;
          }
          case ue: {
            Ic(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && CS(t, t.return, i);
            break;
          }
          case le: {
            Ic(t, t.return);
            break;
          }
          case Fe: {
            var u = t.memoizedState !== null;
            if (u) {
              V1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, te = a) : V1(e);
      }
    }
    function V1(e) {
      for (; te !== null; ) {
        var t = te;
        if (t === e) {
          te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, te = a;
          return;
        }
        te = t.return;
      }
    }
    function Ww(e) {
      for (; te !== null; ) {
        var t = te, a = t.child;
        if (t.tag === Fe) {
          var i = t.memoizedState !== null;
          if (i) {
            j1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, te = a) : j1(e);
      }
    }
    function j1(e) {
      for (; te !== null; ) {
        var t = te;
        Ze(t);
        try {
          Hw(t);
        } catch (i) {
          vt(t, t.return, i);
        }
        if (Yt(), t === e) {
          te = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, te = a;
          return;
        }
        te = t.return;
      }
    }
    function Xw(e, t, a, i) {
      te = t, qw(t, e, a, i);
    }
    function qw(e, t, a, i) {
      for (; te !== null; ) {
        var u = te, s = u.child;
        (u.subtreeFlags & Nr) !== se && s !== null ? (s.return = u, te = s) : Kw(e, t, a, i);
      }
    }
    function Kw(e, t, a, i) {
      for (; te !== null; ) {
        var u = te;
        if ((u.flags & ht) !== se) {
          Ze(u);
          try {
            Zw(t, u, a, i);
          } catch (f) {
            vt(u, u.return, f);
          }
          Yt();
        }
        if (u === e) {
          te = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, te = s;
          return;
        }
        te = u.return;
      }
    }
    function Zw(e, t, a, i) {
      switch (t.tag) {
        case Ee:
        case Ae:
        case Me: {
          if (t.mode & pe) {
            eS();
            try {
              Au(Un | sn, t);
            } finally {
              Jg(t);
            }
          } else
            Au(Un | sn, t);
          break;
        }
      }
    }
    function Jw(e) {
      te = e, eD();
    }
    function eD() {
      for (; te !== null; ) {
        var e = te, t = e.child;
        if ((te.flags & Qe) !== se) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              te = u, rD(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            te = e;
          }
        }
        (e.subtreeFlags & Nr) !== se && t !== null ? (t.return = e, te = t) : tD();
      }
    }
    function tD() {
      for (; te !== null; ) {
        var e = te;
        (e.flags & ht) !== se && (Ze(e), nD(e), Yt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, te = t;
          return;
        }
        te = e.return;
      }
    }
    function nD(e) {
      switch (e.tag) {
        case Ee:
        case Ae:
        case Me: {
          e.mode & pe ? (eS(), ni(Un | sn, e, e.return), Jg(e)) : ni(Un | sn, e, e.return);
          break;
        }
      }
    }
    function rD(e, t) {
      for (; te !== null; ) {
        var a = te;
        Ze(a), iD(a, t), Yt();
        var i = a.child;
        i !== null ? (i.return = a, te = i) : aD(e);
      }
    }
    function aD(e) {
      for (; te !== null; ) {
        var t = te, a = t.sibling, i = t.return;
        if (O1(t), t === e) {
          te = null;
          return;
        }
        if (a !== null) {
          a.return = i, te = a;
          return;
        }
        te = i;
      }
    }
    function iD(e, t) {
      switch (e.tag) {
        case Ee:
        case Ae:
        case Me: {
          e.mode & pe ? (eS(), ni(Un, e, t), Jg(e)) : ni(Un, e, t);
          break;
        }
      }
    }
    function lD(e) {
      switch (e.tag) {
        case Ee:
        case Ae:
        case Me: {
          try {
            Au(cn | sn, e);
          } catch (a) {
            vt(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vt(e, e.return, a);
          }
          break;
        }
      }
    }
    function uD(e) {
      switch (e.tag) {
        case Ee:
        case Ae:
        case Me: {
          try {
            Au(Un | sn, e);
          } catch (t) {
            vt(e, e.return, t);
          }
          break;
        }
      }
    }
    function oD(e) {
      switch (e.tag) {
        case Ee:
        case Ae:
        case Me: {
          try {
            ni(cn | sn, e, e.return);
          } catch (a) {
            vt(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && CS(e, e.return, t);
          break;
        }
      }
    }
    function sD(e) {
      switch (e.tag) {
        case Ee:
        case Ae:
        case Me:
          try {
            ni(Un | sn, e, e.return);
          } catch (t) {
            vt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var rp = Symbol.for;
      rp("selector.component"), rp("selector.has_pseudo_class"), rp("selector.role"), rp("selector.test_id"), rp("selector.text");
    }
    var cD = [];
    function fD() {
      cD.forEach(function(e) {
        return e();
      });
    }
    var dD = L.ReactCurrentActQueue;
    function pD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function B1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && dD.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var vD = Math.ceil, xS = L.ReactCurrentDispatcher, wS = L.ReactCurrentOwner, Vn = L.ReactCurrentBatchConfig, ii = L.ReactCurrentActQueue, pn = (
      /*             */
      0
    ), Y1 = (
      /*               */
      1
    ), jn = (
      /*                */
      2
    ), ka = (
      /*                */
      4
    ), zl = 0, ap = 1, Ko = 2, om = 3, ip = 4, P1 = 5, DS = 6, je = pn, yr = null, Nt = null, vn = z, $i = z, kS = ku(z), hn = zl, lp = null, sm = z, up = z, cm = z, op = null, $r = null, bS = 0, $1 = 500, Q1 = 1 / 0, hD = 500, Ul = null;
    function sp() {
      Q1 = gt() + hD;
    }
    function I1() {
      return Q1;
    }
    var fm = !1, MS = null, Gc = null, Zo = !1, Fu = null, cp = z, _S = [], LS = null, mD = 50, fp = 0, OS = null, NS = !1, dm = !1, yD = 50, Wc = 0, pm = null, dp = lt, vm = z, G1 = !1;
    function hm() {
      return yr;
    }
    function gr() {
      return (je & (jn | ka)) !== pn ? gt() : (dp !== lt || (dp = gt()), dp);
    }
    function Vu(e) {
      var t = e.mode;
      if ((t & be) === de)
        return he;
      if ((je & jn) !== pn && vn !== z)
        return $t(vn);
      var a = px() !== dx;
      if (a) {
        if (Vn.transition !== null) {
          var i = Vn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return vm === Ve && (vm = Zf()), vm;
      }
      var u = Hr();
      if (u !== Ve)
        return u;
      var s = KT();
      return s;
    }
    function gD(e) {
      var t = e.mode;
      return (t & be) === de ? he : ey();
    }
    function mn(e, t, a, i) {
      YD(), G1 && g("useInsertionEffect must not schedule updates."), NS && (dm = !0), yl(e, a, i), (je & jn) !== z && e === yr ? QD(t) : (un && rd(e, t, a), ID(t), e === yr && ((je & jn) === pn && (up = ke(up, a)), hn === ip && ju(e, vn)), Qr(e, i), a === he && je === pn && (t.mode & be) === de && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ii.isBatchingLegacy && (sp(), I0()));
    }
    function SD(e, t, a) {
      var i = e.current;
      i.lanes = t, yl(e, t, a), Qr(e, a);
    }
    function CD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (je & jn) !== pn
      );
    }
    function Qr(e, t) {
      var a = e.callbackNode;
      Km(e, t);
      var i = Ro(e, e === yr ? vn : z);
      if (i === z) {
        a !== null && sE(a), e.callbackNode = null, e.callbackPriority = Ve;
        return;
      }
      var u = Ft(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ii.current !== null && a !== jS)) {
        a == null && s !== he && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && sE(a);
      var f;
      if (u === he)
        e.tag === bu ? (ii.isBatchingLegacy !== null && (ii.didScheduleLegacyUpdate = !0), XR(q1.bind(null, e))) : Q0(q1.bind(null, e)), ii.current !== null ? ii.current.push(Mu) : JT(function() {
          (je & (jn | ka)) === pn && Mu();
        }), f = null;
      else {
        var p;
        switch (bo(i)) {
          case Rn:
            p = Os;
            break;
          case on:
            p = pr;
            break;
          case $a:
            p = ya;
            break;
          case Do:
            p = Ti;
            break;
          default:
            p = ya;
            break;
        }
        f = BS(p, W1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function W1(e, t) {
      if (Yx(), dp = lt, vm = z, (je & (jn | ka)) !== pn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Hl();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ro(e, e === yr ? vn : z);
      if (u === z)
        return null;
      var s = !wo(e, u) && !kv(e, u) && !t, f = s ? _D(e, u) : ym(e, u);
      if (f !== zl) {
        if (f === Ko) {
          var p = qf(e);
          p !== z && (u = p, f = zS(e, p));
        }
        if (f === ap) {
          var v = lp;
          throw Jo(e, z), ju(e, u), Qr(e, gt()), v;
        }
        if (f === DS)
          ju(e, u);
        else {
          var m = !wo(e, u), y = e.current.alternate;
          if (m && !TD(y)) {
            if (f = ym(e, u), f === Ko) {
              var R = qf(e);
              R !== z && (u = R, f = zS(e, R));
            }
            if (f === ap) {
              var E = lp;
              throw Jo(e, z), ju(e, u), Qr(e, gt()), E;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, ED(e, f, u);
        }
      }
      return Qr(e, gt()), e.callbackNode === a ? W1.bind(null, e) : null;
    }
    function zS(e, t) {
      var a = op;
      if (It(e)) {
        var i = Jo(e, t);
        i.flags |= kt, YR(e.containerInfo);
      }
      var u = ym(e, t);
      if (u !== Ko) {
        var s = $r;
        $r = a, s !== null && X1(s);
      }
      return u;
    }
    function X1(e) {
      $r === null ? $r = e : $r.push.apply($r, e);
    }
    function ED(e, t, a) {
      switch (t) {
        case zl:
        case ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case Ko: {
          es(e, $r, Ul);
          break;
        }
        case om: {
          if (ju(e, a), nc(a) && // do not delay if we're inside an act() scope
          !cE()) {
            var i = bS + $1 - gt();
            if (i > 10) {
              var u = Ro(e, z);
              if (u !== z)
                break;
              var s = e.suspendedLanes;
              if (!ml(s, a)) {
                gr(), td(e, s);
                break;
              }
              e.timeoutHandle = Ly(es.bind(null, e, $r, Ul), i);
              break;
            }
          }
          es(e, $r, Ul);
          break;
        }
        case ip: {
          if (ju(e, a), Dv(a))
            break;
          if (!cE()) {
            var f = wv(e, a), p = f, v = gt() - p, m = BD(v) - v;
            if (m > 10) {
              e.timeoutHandle = Ly(es.bind(null, e, $r, Ul), m);
              break;
            }
          }
          es(e, $r, Ul);
          break;
        }
        case P1: {
          es(e, $r, Ul);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function TD(e) {
      for (var t = e; ; ) {
        if (t.flags & mo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ee(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & mo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ju(e, t) {
      t = cu(t, cm), t = cu(t, up), ed(e, t);
    }
    function q1(e) {
      if (Px(), (je & (jn | ka)) !== pn)
        throw new Error("Should not already be working.");
      Hl();
      var t = Ro(e, z);
      if (!er(t, he))
        return Qr(e, gt()), null;
      var a = ym(e, t);
      if (e.tag !== bu && a === Ko) {
        var i = qf(e);
        i !== z && (t = i, a = zS(e, i));
      }
      if (a === ap) {
        var u = lp;
        throw Jo(e, z), ju(e, t), Qr(e, gt()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, es(e, $r, Ul), Qr(e, gt()), null;
    }
    function RD(e, t) {
      t !== z && (fu(e, ke(t, he)), Qr(e, gt()), (je & (jn | ka)) === pn && (sp(), Mu()));
    }
    function US(e, t) {
      var a = je;
      je |= Y1;
      try {
        return e(t);
      } finally {
        je = a, je === pn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ii.isBatchingLegacy && (sp(), I0());
      }
    }
    function xD(e, t, a, i, u) {
      var s = Hr(), f = Vn.transition;
      try {
        return Vn.transition = null, Qt(Rn), e(t, a, i, u);
      } finally {
        Qt(s), Vn.transition = f, je === pn && sp();
      }
    }
    function Al(e) {
      Fu !== null && Fu.tag === bu && (je & (jn | ka)) === pn && Hl();
      var t = je;
      je |= Y1;
      var a = Vn.transition, i = Hr();
      try {
        return Vn.transition = null, Qt(Rn), e ? e() : void 0;
      } finally {
        Qt(i), Vn.transition = a, je = t, (je & (jn | ka)) === pn && Mu();
      }
    }
    function K1() {
      return (je & (jn | ka)) !== pn;
    }
    function mm(e, t) {
      nr(kS, $i, e), $i = ke($i, t);
    }
    function AS(e) {
      $i = kS.current, tr(kS, e);
    }
    function Jo(e, t) {
      e.finishedWork = null, e.finishedLanes = z;
      var a = e.timeoutHandle;
      if (a !== Oy && (e.timeoutHandle = Oy, ZT(a)), Nt !== null)
        for (var i = Nt.return; i !== null; ) {
          var u = i.alternate;
          D1(u, i), i = i.return;
        }
      yr = e;
      var s = ts(e.current, null);
      return Nt = s, vn = $i = t, hn = zl, lp = null, sm = z, up = z, cm = z, op = null, $r = null, yx(), Ka.discardPendingWarnings(), s;
    }
    function Z1(e, t) {
      do {
        var a = Nt;
        try {
          if (xh(), bC(), Yt(), wS.current = null, a === null || a.return === null) {
            hn = ap, lp = t, Nt = null;
            return;
          }
          if (_n && a.mode & pe && nm(a, !0), li)
            if (ul(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Tv(a, i, vn);
            } else
              Hs(a, t, vn);
          Wx(e, a.return, a, t, vn), nE(a);
        } catch (u) {
          t = u, Nt === a && a !== null ? (a = a.return, Nt = a) : a = Nt;
          continue;
        }
        return;
      } while (!0);
    }
    function J1() {
      var e = xS.current;
      return xS.current = Kh, e === null ? Kh : e;
    }
    function eE(e) {
      xS.current = e;
    }
    function wD() {
      bS = gt();
    }
    function pp(e) {
      sm = ke(e, sm);
    }
    function DD() {
      hn === zl && (hn = om);
    }
    function HS() {
      (hn === zl || hn === om || hn === Ko) && (hn = ip), yr !== null && (xo(sm) || xo(up)) && ju(yr, vn);
    }
    function kD(e) {
      hn !== ip && (hn = Ko), op === null ? op = [e] : op.push(e);
    }
    function bD() {
      return hn === zl;
    }
    function ym(e, t) {
      var a = je;
      je |= jn;
      var i = J1();
      if (yr !== e || vn !== t) {
        if (un) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (vp(e, vn), u.clear()), ic(e, t);
        }
        Ul = ad(), Jo(e, t);
      }
      la(t);
      do
        try {
          MD();
          break;
        } catch (s) {
          Z1(e, s);
        }
      while (!0);
      if (xh(), je = a, eE(i), Nt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return iu(), yr = null, vn = z, hn;
    }
    function MD() {
      for (; Nt !== null; )
        tE(Nt);
    }
    function _D(e, t) {
      var a = je;
      je |= jn;
      var i = J1();
      if (yr !== e || vn !== t) {
        if (un) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (vp(e, vn), u.clear()), ic(e, t);
        }
        Ul = ad(), sp(), Jo(e, t);
      }
      la(t);
      do
        try {
          LD();
          break;
        } catch (s) {
          Z1(e, s);
        }
      while (!0);
      return xh(), eE(i), je = a, Nt !== null ? (So(), zl) : (iu(), yr = null, vn = z, hn);
    }
    function LD() {
      for (; Nt !== null && !Ls(); )
        tE(Nt);
    }
    function tE(e) {
      var t = e.alternate;
      Ze(e);
      var a;
      (e.mode & pe) !== de ? (Zg(e), a = FS(t, e, $i), nm(e, !0)) : a = FS(t, e, $i), Yt(), e.memoizedProps = e.pendingProps, a === null ? nE(e) : Nt = a, wS.current = null;
    }
    function nE(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & cr) === se) {
          Ze(t);
          var u = void 0;
          if ((t.mode & pe) === de ? u = w1(a, t, $i) : (Zg(t), u = w1(a, t, $i), nm(t, !1)), Yt(), u !== null) {
            Nt = u;
            return;
          }
        } else {
          var s = Dw(a, t);
          if (s !== null) {
            s.flags &= pv, Nt = s;
            return;
          }
          if ((t.mode & pe) !== de) {
            nm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= cr, i.subtreeFlags = se, i.deletions = null;
          else {
            hn = DS, Nt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Nt = v;
          return;
        }
        t = i, Nt = t;
      } while (t !== null);
      hn === zl && (hn = P1);
    }
    function es(e, t, a) {
      var i = Hr(), u = Vn.transition;
      try {
        Vn.transition = null, Qt(Rn), OD(e, t, a, i);
      } finally {
        Vn.transition = u, Qt(i);
      }
      return null;
    }
    function OD(e, t, a, i) {
      do
        Hl();
      while (Fu !== null);
      if (PD(), (je & (jn | ka)) !== pn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (zs(s), u === null)
        return Qf(), null;
      if (s === z && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = z, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ve;
      var f = ke(u.lanes, u.childLanes);
      nd(e, f), e === yr && (yr = null, Nt = null, vn = z), ((u.subtreeFlags & Nr) !== se || (u.flags & Nr) !== se) && (Zo || (Zo = !0, LS = a, BS(ya, function() {
        return Hl(), null;
      })));
      var p = (u.subtreeFlags & (nu | qn | Tn | Nr)) !== se, v = (u.flags & (nu | qn | Tn | Nr)) !== se;
      if (p || v) {
        var m = Vn.transition;
        Vn.transition = null;
        var y = Hr();
        Qt(Rn);
        var R = je;
        je |= ka, wS.current = null, Lw(e, u), JC(), Qw(e, u, s), QT(e.containerInfo), e.current = u, Rv(s), Iw(u, e, s), au(), mv(), je = R, Qt(y), Vn.transition = m;
      } else
        e.current = u, JC();
      var E = Zo;
      if (Zo ? (Zo = !1, Fu = e, cp = s) : (Wc = 0, pm = null), f = e.pendingLanes, f === z && (Gc = null), E || lE(e.current, !1), Ba(u.stateNode, i), un && e.memoizedUpdaters.clear(), fD(), Qr(e, gt()), t !== null)
        for (var b = e.onRecoverableError, M = 0; M < t.length; M++) {
          var O = t[M], X = O.stack, ce = O.digest;
          b(O.value, {
            componentStack: X,
            digest: ce
          });
        }
      if (fm) {
        fm = !1;
        var ae = MS;
        throw MS = null, ae;
      }
      return er(cp, he) && e.tag !== bu && Hl(), f = e.pendingLanes, er(f, he) ? (Bx(), e === OS ? fp++ : (fp = 0, OS = e)) : fp = 0, Mu(), Qf(), null;
    }
    function Hl() {
      if (Fu !== null) {
        var e = bo(cp), t = ny($a, e), a = Vn.transition, i = Hr();
        try {
          return Vn.transition = null, Qt(t), zD();
        } finally {
          Qt(i), Vn.transition = a;
        }
      }
      return !1;
    }
    function ND(e) {
      _S.push(e), Zo || (Zo = !0, BS(ya, function() {
        return Hl(), null;
      }));
    }
    function zD() {
      if (Fu === null)
        return !1;
      var e = LS;
      LS = null;
      var t = Fu, a = cp;
      if (Fu = null, cp = z, (je & (jn | ka)) !== pn)
        throw new Error("Cannot flush passive effects while already rendering.");
      NS = !0, dm = !1, xv(a);
      var i = je;
      je |= ka, Jw(t.current), Xw(t, t.current, a, e);
      {
        var u = _S;
        _S = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Uw(t, f);
        }
      }
      go(), lE(t.current, !0), je = i, Mu(), dm ? t === pm ? Wc++ : (Wc = 0, pm = t) : Wc = 0, NS = !1, dm = !1, xi(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function rE(e) {
      return Gc !== null && Gc.has(e);
    }
    function UD(e) {
      Gc === null ? Gc = /* @__PURE__ */ new Set([e]) : Gc.add(e);
    }
    function AD(e) {
      fm || (fm = !0, MS = e);
    }
    var HD = AD;
    function aE(e, t, a) {
      var i = Xo(a, t), u = t1(e, i, he), s = Lu(e, u, he), f = gr();
      s !== null && (yl(s, he, f), Qr(s, f));
    }
    function vt(e, t, a) {
      if (bw(a), hp(!1), e.tag === ie) {
        aE(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ie) {
          aE(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !rE(s)) {
            var f = Xo(a, e), p = aS(i, f, he), v = Lu(i, p, he), m = gr();
            v !== null && (yl(v, he, m), Qr(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function FD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = gr();
      td(e, a), GD(e), yr === e && ml(vn, a) && (hn === ip || hn === om && nc(vn) && gt() - bS < $1 ? Jo(e, z) : cm = ke(cm, a)), Qr(e, u);
    }
    function iE(e, t) {
      t === Ve && (t = gD(e));
      var a = gr(), i = Yr(e, t);
      i !== null && (yl(i, t, a), Qr(i, a));
    }
    function VD(e) {
      var t = e.memoizedState, a = Ve;
      t !== null && (a = t.retryLane), iE(e, a);
    }
    function jD(e, t) {
      var a = Ve, i;
      switch (e.tag) {
        case He:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ut:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), iE(e, a);
    }
    function BD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : vD(e / 1960) * 1960;
    }
    function YD() {
      if (fp > mD)
        throw fp = 0, OS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Wc > yD && (Wc = 0, pm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function PD() {
      Ka.flushLegacyContextWarning(), Ka.flushPendingUnsafeLifecycleWarnings();
    }
    function lE(e, t) {
      Ze(e), gm(e, Xn, oD), t && gm(e, ll, sD), gm(e, Xn, lD), t && gm(e, ll, uD), Yt();
    }
    function gm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== se ? i = i.child : ((i.flags & t) !== se && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Sm = null;
    function uE(e) {
      {
        if ((je & jn) !== pn || !(e.mode & be))
          return;
        var t = e.tag;
        if (t !== an && t !== ie && t !== ue && t !== Ee && t !== Ae && t !== yt && t !== Me)
          return;
        var a = we(e) || "ReactComponent";
        if (Sm !== null) {
          if (Sm.has(a))
            return;
          Sm.add(a);
        } else
          Sm = /* @__PURE__ */ new Set([a]);
        var i = At;
        try {
          Ze(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ze(e) : Yt();
        }
      }
    }
    var FS;
    {
      var $D = null;
      FS = function(e, t, a) {
        var i = hE($D, t);
        try {
          return C1(e, t, a);
        } catch (s) {
          if (rx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (xh(), bC(), D1(e, t), hE(t, i), t.mode & pe && Zg(t), il(null, C1, null, e, t, a), Xm()) {
            var u = zf();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var oE = !1, VS;
    VS = /* @__PURE__ */ new Set();
    function QD(e) {
      if (kr && !Fx())
        switch (e.tag) {
          case Ee:
          case Ae:
          case Me: {
            var t = Nt && we(Nt) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = we(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            oE || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), oE = !0);
            break;
          }
        }
    }
    function vp(e, t) {
      if (un) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          rd(e, i, t);
        });
      }
    }
    var jS = {};
    function BS(e, t) {
      {
        var a = ii.current;
        return a !== null ? (a.push(t), jS) : _s(e, t);
      }
    }
    function sE(e) {
      if (e !== jS)
        return hv(e);
    }
    function cE() {
      return ii.current !== null;
    }
    function ID(e) {
      {
        if (e.mode & be) {
          if (!B1())
            return;
        } else if (!pD() || je !== pn || e.tag !== Ee && e.tag !== Ae && e.tag !== Me)
          return;
        if (ii.current === null) {
          var t = At;
          try {
            Ze(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, we(e));
          } finally {
            t ? Ze(e) : Yt();
          }
        }
      }
    }
    function GD(e) {
      e.tag !== bu && B1() && ii.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function hp(e) {
      G1 = e;
    }
    var ba = null, Xc = null, WD = function(e) {
      ba = e;
    };
    function qc(e) {
      {
        if (ba === null)
          return e;
        var t = ba(e);
        return t === void 0 ? e : t.current;
      }
    }
    function YS(e) {
      return qc(e);
    }
    function PS(e) {
      {
        if (ba === null)
          return e;
        var t = ba(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = qc(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Yl,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function fE(e, t) {
      {
        if (ba === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Ee: {
            (typeof i == "function" || s === Ln) && (u = !0);
            break;
          }
          case Ae: {
            (s === Yl || s === Ln) && (u = !0);
            break;
          }
          case yt:
          case Me: {
            (s === Pl || s === Ln) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ba(a);
          if (f !== void 0 && f === ba(i))
            return !0;
        }
        return !1;
      }
    }
    function dE(e) {
      {
        if (ba === null || typeof WeakSet != "function")
          return;
        Xc === null && (Xc = /* @__PURE__ */ new WeakSet()), Xc.add(e);
      }
    }
    var XD = function(e, t) {
      {
        if (ba === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Hl(), Al(function() {
          $S(e.current, i, a);
        });
      }
    }, qD = function(e, t) {
      {
        if (e.context !== oa)
          return;
        Hl(), Al(function() {
          mp(t, e, null, null);
        });
      }
    };
    function $S(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Ee:
          case Me:
          case ue:
            v = p;
            break;
          case Ae:
            v = p.render;
            break;
        }
        if (ba === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = ba(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === ue ? y = !0 : m = !0));
        }
        if (Xc !== null && (Xc.has(e) || i !== null && Xc.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var E = Yr(e, he);
          E !== null && mn(E, e, he, lt);
        }
        u !== null && !y && $S(u, t, a), s !== null && $S(s, t, a);
      }
    }
    var KD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return QS(e.current, i, a), a;
      }
    };
    function QS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Ee:
          case Me:
          case ue:
            p = f;
            break;
          case Ae:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ZD(e, a) : i !== null && QS(i, t, a), u !== null && QS(u, t, a);
      }
    }
    function ZD(e, t) {
      {
        var a = JD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case me:
              t.add(i.stateNode.containerInfo);
              return;
            case ie:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function JD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === le)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var IS;
    {
      IS = !1;
      try {
        var pE = Object.preventExtensions({});
      } catch {
        IS = !0;
      }
    }
    function ek(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = se, this.subtreeFlags = se, this.deletions = null, this.lanes = z, this.childLanes = z, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !IS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var sa = function(e, t, a, i) {
      return new ek(e, t, a, i);
    };
    function GS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function tk(e) {
      return typeof e == "function" && !GS(e) && e.defaultProps === void 0;
    }
    function nk(e) {
      if (typeof e == "function")
        return GS(e) ? ue : Ee;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Yl)
          return Ae;
        if (t === Pl)
          return yt;
      }
      return an;
    }
    function ts(e, t) {
      var a = e.alternate;
      a === null ? (a = sa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = se, a.subtreeFlags = se, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ln, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case an:
        case Ee:
        case Me:
          a.type = qc(e.type);
          break;
        case ue:
          a.type = YS(e.type);
          break;
        case Ae:
          a.type = PS(e.type);
          break;
      }
      return a;
    }
    function rk(e, t) {
      e.flags &= ln | ct;
      var a = e.alternate;
      if (a === null)
        e.childLanes = z, e.lanes = t, e.child = null, e.subtreeFlags = se, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = se, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function ak(e, t, a) {
      var i;
      return e === mh ? (i = be, t === !0 && (i |= St, i |= Ur)) : i = de, un && (i |= pe), sa(ie, null, null, i);
    }
    function WS(e, t, a, i, u, s) {
      var f = an, p = e;
      if (typeof e == "function")
        GS(e) ? (f = ue, p = YS(p)) : p = qc(p);
      else if (typeof e == "string")
        f = le;
      else
        e:
          switch (e) {
            case La:
              return Bu(a.children, u, s, t);
            case Bl:
              f = ot, u |= St, (u & be) !== de && (u |= Ur);
              break;
            case Qu:
              return ik(a, u, s, t);
            case va:
              return lk(a, u, s, t);
            case Iu:
              return uk(a, u, s, t);
            case tf:
              return vE(a, u, s, t);
            case xp:
            case Tp:
            case km:
            case bm:
            case Rp:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Jc:
                    f = gn;
                    break e;
                  case ef:
                    f = Wr;
                    break e;
                  case Yl:
                    f = Ae, p = PS(p);
                    break e;
                  case Pl:
                    f = yt;
                    break e;
                  case Ln:
                    f = Mn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var m = i ? we(i) : null;
                m && (v += `

Check the render method of \`` + m + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var y = sa(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function XS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = WS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bu(e, t, a, i) {
      var u = sa(nt, e, i, t);
      return u.lanes = a, u;
    }
    function ik(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = sa(st, e, i, t | pe);
      return u.elementType = Qu, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function lk(e, t, a, i) {
      var u = sa(He, e, i, t);
      return u.elementType = va, u.lanes = a, u;
    }
    function uk(e, t, a, i) {
      var u = sa(ut, e, i, t);
      return u.elementType = Iu, u.lanes = a, u;
    }
    function vE(e, t, a, i) {
      var u = sa(Fe, e, i, t);
      u.elementType = tf, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function qS(e, t, a) {
      var i = sa(Le, e, null, t);
      return i.lanes = a, i;
    }
    function ok() {
      var e = sa(le, null, null, de);
      return e.elementType = "DELETED", e;
    }
    function sk(e) {
      var t = sa(zt, null, null, de);
      return t.stateNode = e, t;
    }
    function KS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = sa(me, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function hE(e, t) {
      return e === null && (e = sa(an, null, null, de)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function ck(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Oy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ve, this.eventTimes = ac(z), this.expirationTimes = ac(lt), this.pendingLanes = z, this.suspendedLanes = z, this.pingedLanes = z, this.expiredLanes = z, this.mutableReadLanes = z, this.finishedLanes = z, this.entangledLanes = z, this.entanglements = ac(z), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < dt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case mh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case bu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function mE(e, t, a, i, u, s, f, p, v, m) {
      var y = new ck(e, t, a, p, v), R = ak(t, s);
      y.current = R, R.stateNode = y;
      {
        var E = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        R.memoizedState = E;
      }
      return ig(R), y;
    }
    var ZS = "18.2.0";
    function fk(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Vl(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Jr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var JS, e0;
    JS = !1, e0 = {};
    function yE(e) {
      if (!e)
        return oa;
      var t = _r(e), a = WR(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Hi(i))
          return P0(t, i, a);
      }
      return a;
    }
    function dk(e, t) {
      {
        var a = _r(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = zr(a);
        if (u === null)
          return null;
        if (u.mode & St) {
          var s = we(a) || "Component";
          if (!e0[s]) {
            e0[s] = !0;
            var f = At;
            try {
              Ze(u), a.mode & St ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Ze(f) : Yt();
            }
          }
        }
        return u.stateNode;
      }
    }
    function gE(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return mE(e, t, v, m, a, i, u, s, f);
    }
    function SE(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, R = mE(a, i, y, e, u, s, f, p, v);
      R.context = yE(null);
      var E = R.current, b = gr(), M = Vu(E), O = Ol(b, M);
      return O.callback = t ?? null, Lu(E, O, M), SD(R, M, b), R;
    }
    function mp(e, t, a, i) {
      yv(t, e);
      var u = t.current, s = gr(), f = Vu(u);
      ol(f);
      var p = yE(a);
      t.context === null ? t.context = p : t.pendingContext = p, kr && At !== null && !JS && (JS = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, we(At) || "Unknown"));
      var v = Ol(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Lu(u, v, f);
      return m !== null && (mn(m, u, f, s), Mh(m, u, f)), f;
    }
    function Cm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case le:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function pk(e) {
      switch (e.tag) {
        case ie: {
          var t = e.stateNode;
          if (It(t)) {
            var a = Zm(t);
            RD(t, a);
          }
          break;
        }
        case He: {
          Al(function() {
            var u = Yr(e, he);
            if (u !== null) {
              var s = gr();
              mn(u, e, he, s);
            }
          });
          var i = he;
          t0(e, i);
          break;
        }
      }
    }
    function CE(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Mv(a.retryLane, t));
    }
    function t0(e, t) {
      CE(e, t);
      var a = e.alternate;
      a && CE(a, t);
    }
    function vk(e) {
      if (e.tag === He) {
        var t = lu, a = Yr(e, t);
        if (a !== null) {
          var i = gr();
          mn(a, e, t, i);
        }
        t0(e, t);
      }
    }
    function hk(e) {
      if (e.tag === He) {
        var t = Vu(e), a = Yr(e, t);
        if (a !== null) {
          var i = gr();
          mn(a, e, t, i);
        }
        t0(e, t);
      }
    }
    function EE(e) {
      var t = vv(e);
      return t === null ? null : t.stateNode;
    }
    var TE = function(e) {
      return null;
    };
    function mk(e) {
      return TE(e);
    }
    var RE = function(e) {
      return !1;
    };
    function yk(e) {
      return RE(e);
    }
    var xE = null, wE = null, DE = null, kE = null, bE = null, ME = null, _E = null, LE = null, OE = null;
    {
      var NE = function(e, t, a) {
        var i = t[a], u = Xt(e) ? e.slice() : Ne({}, e);
        return a + 1 === t.length ? (Xt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = NE(e[i], t, a + 1), u);
      }, zE = function(e, t) {
        return NE(e, t, 0);
      }, UE = function(e, t, a, i) {
        var u = t[i], s = Xt(e) ? e.slice() : Ne({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Xt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = UE(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, AE = function(e, t, a) {
        if (t.length !== a.length) {
          xe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              xe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return UE(e, t, a, 0);
      }, HE = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Xt(e) ? e.slice() : Ne({}, e);
        return s[u] = HE(e[u], t, a + 1, i), s;
      }, FE = function(e, t, a) {
        return HE(e, t, 0, a);
      }, n0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      xE = function(e, t, a, i) {
        var u = n0(e, t);
        if (u !== null) {
          var s = FE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ne({}, e.memoizedProps);
          var f = Yr(e, he);
          f !== null && mn(f, e, he, lt);
        }
      }, wE = function(e, t, a) {
        var i = n0(e, t);
        if (i !== null) {
          var u = zE(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ne({}, e.memoizedProps);
          var s = Yr(e, he);
          s !== null && mn(s, e, he, lt);
        }
      }, DE = function(e, t, a, i) {
        var u = n0(e, t);
        if (u !== null) {
          var s = AE(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ne({}, e.memoizedProps);
          var f = Yr(e, he);
          f !== null && mn(f, e, he, lt);
        }
      }, kE = function(e, t, a) {
        e.pendingProps = FE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Yr(e, he);
        i !== null && mn(i, e, he, lt);
      }, bE = function(e, t) {
        e.pendingProps = zE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Yr(e, he);
        a !== null && mn(a, e, he, lt);
      }, ME = function(e, t, a) {
        e.pendingProps = AE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Yr(e, he);
        i !== null && mn(i, e, he, lt);
      }, _E = function(e) {
        var t = Yr(e, he);
        t !== null && mn(t, e, he, lt);
      }, LE = function(e) {
        TE = e;
      }, OE = function(e) {
        RE = e;
      };
    }
    function gk(e) {
      var t = zr(e);
      return t === null ? null : t.stateNode;
    }
    function Sk(e) {
      return null;
    }
    function Ck() {
      return At;
    }
    function Ek(e) {
      var t = e.findFiberByHostInstance, a = L.ReactCurrentDispatcher;
      return Pf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: xE,
        overrideHookStateDeletePath: wE,
        overrideHookStateRenamePath: DE,
        overrideProps: kE,
        overridePropsDeletePath: bE,
        overridePropsRenamePath: ME,
        setErrorHandler: LE,
        setSuspenseHandler: OE,
        scheduleUpdate: _E,
        currentDispatcherRef: a,
        findHostInstanceByFiber: gk,
        findFiberByHostInstance: t || Sk,
        // React Refresh
        findHostInstancesForRefresh: KD,
        scheduleRefresh: XD,
        scheduleRoot: qD,
        setRefreshHandler: WD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Ck,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ZS
      });
    }
    var VE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function r0(e) {
      this._internalRoot = e;
    }
    Em.prototype.render = r0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Tm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ht) {
          var i = EE(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      mp(e, t, null, null);
    }, Em.prototype.unmount = r0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        K1() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Al(function() {
          mp(null, e, null, null);
        }), F0(t);
      }
    };
    function Tk(e, t) {
      if (!Tm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      jE(e);
      var a = !1, i = !1, u = "", s = VE;
      t != null && (t.hydrate ? xe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === jl && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = gE(e, mh, null, a, i, u, s);
      sh(f.current, e);
      var p = e.nodeType === Ht ? e.parentNode : e;
      return xd(p), new r0(f);
    }
    function Em(e) {
      this._internalRoot = e;
    }
    function Rk(e) {
      e && Hv(e);
    }
    Em.prototype.unstable_scheduleHydration = Rk;
    function xk(e, t, a) {
      if (!Tm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      jE(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = VE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = SE(t, null, e, mh, i, s, f, p, v);
      if (sh(m.current, e), xd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          Ox(m, R);
        }
      return new Em(m);
    }
    function Tm(e) {
      return !!(e && (e.nodeType === In || e.nodeType === ra || e.nodeType === Ji || !Ke));
    }
    function yp(e) {
      return !!(e && (e.nodeType === In || e.nodeType === ra || e.nodeType === Ji || e.nodeType === Ht && e.nodeValue === " react-mount-point-unstable "));
    }
    function jE(e) {
      e.nodeType === In && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Ud(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var wk = L.ReactCurrentOwner, BE;
    BE = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ht) {
        var t = EE(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = a0(e), u = !!(i && Du(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === In && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function a0(e) {
      return e ? e.nodeType === ra ? e.documentElement : e.firstChild : null;
    }
    function YE() {
    }
    function Dk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var E = Cm(f);
            s.call(E);
          };
        }
        var f = SE(
          t,
          i,
          e,
          bu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          YE
        );
        e._reactRootContainer = f, sh(f.current, e);
        var p = e.nodeType === Ht ? e.parentNode : e;
        return xd(p), Al(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var E = Cm(y);
            m.call(E);
          };
        }
        var y = gE(
          e,
          bu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          YE
        );
        e._reactRootContainer = y, sh(y.current, e);
        var R = e.nodeType === Ht ? e.parentNode : e;
        return xd(R), Al(function() {
          mp(t, y, a, i);
        }), y;
      }
    }
    function kk(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Rm(e, t, a, i, u) {
      BE(a), kk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Dk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Cm(f);
            p.call(v);
          };
        }
        mp(t, f, e, u);
      }
      return Cm(f);
    }
    function bk(e) {
      {
        var t = wk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", at(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === In ? e : dk(e, "findDOMNode");
    }
    function Mk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ud(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Rm(null, e, t, !0, a);
    }
    function _k(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Ud(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Rm(null, e, t, !1, a);
    }
    function Lk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !yp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ho(e))
        throw new Error("parentComponent must be a valid React Component");
      return Rm(e, t, a, !1, i);
    }
    function Ok(e) {
      if (!yp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Ud(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = a0(e), i = a && !Du(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Al(function() {
          Rm(null, null, e, !1, function() {
            e._reactRootContainer = null, F0(e);
          });
        }), !0;
      } else {
        {
          var u = a0(e), s = !!(u && Du(u)), f = e.nodeType === In && yp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Z(pk), Lv(vk), _o(hk), ld(Hr), Nv(ko), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), fv(UT), ws(US, xD, Al);
    function Nk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Tm(t))
        throw new Error("Target container is not a DOM element.");
      return fk(e, t, null, a);
    }
    function zk(e, t, a, i) {
      return Lk(e, t, a, i);
    }
    var i0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Du, kc, ch, xs, fo, US]
    };
    function Uk(e, t) {
      return i0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Tk(e, t);
    }
    function Ak(e, t, a) {
      return i0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), xk(e, t, a);
    }
    function Hk(e) {
      return K1() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Al(e);
    }
    var Fk = Ek({
      findFiberByHostInstance: jo,
      bundleType: 1,
      version: ZS,
      rendererPackageName: "react-dom"
    });
    if (!Fk && Sn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var PE = window.location.protocol;
      /^(https?|file):$/.test(PE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (PE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i0, Ir.createPortal = Nk, Ir.createRoot = Uk, Ir.findDOMNode = bk, Ir.flushSync = Hk, Ir.hydrate = Mk, Ir.hydrateRoot = Ak, Ir.render = _k, Ir.unmountComponentAtNode = Ok, Ir.unstable_batchedUpdates = US, Ir.unstable_renderSubtreeIntoContainer = zk, Ir.version = ZS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ir;
}
var Gr = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WE;
function Ik() {
  if (WE)
    return Gr;
  WE = 1;
  var j = yn, ve = JE();
  function L(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Tt = /* @__PURE__ */ new Set(), _e = {};
  function xe(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (_e[n] = r, n = 0; n < r.length; n++)
      Tt.add(r[n]);
  }
  var tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ee = Object.prototype.hasOwnProperty, ue = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, an = {}, ie = {};
  function me(n) {
    return Ee.call(ie, n) ? !0 : Ee.call(an, n) ? !1 : ue.test(n) ? ie[n] = !0 : (an[n] = !0, !1);
  }
  function le(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Le(n, r, l, o) {
    if (r === null || typeof r > "u" || le(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function nt(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var ot = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ot[n] = new nt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ot[r] = new nt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ot[n] = new nt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ot[n] = new nt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ot[n] = new nt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ot[n] = new nt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ot[n] = new nt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ot[n] = new nt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ot[n] = new nt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Wr = /[\-:]([a-z])/g;
  function gn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Wr,
      gn
    );
    ot[r] = new nt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Wr, gn);
    ot[r] = new nt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Wr, gn);
    ot[r] = new nt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ot[n] = new nt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ot.xlinkHref = new nt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ot[n] = new nt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ae(n, r, l, o) {
    var c = ot.hasOwnProperty(r) ? ot[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Le(r, l, c, o) && (l = null), o || c === null ? me(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var st = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, He = Symbol.for("react.element"), yt = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), Mn = Symbol.for("react.strict_mode"), lr = Symbol.for("react.profiler"), zt = Symbol.for("react.provider"), ut = Symbol.for("react.context"), Yn = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), Er = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), Tr = Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function ye(n) {
    return n === null || typeof n != "object" ? null : (n = $ && n[$] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = Object.assign, We;
  function Ke(n) {
    if (We === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        We = r && r[1] || "";
      }
    return `
` + We + n;
  }
  var Pn = !1;
  function ur(n, r) {
    if (!n || Pn)
      return "";
    Pn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (_) {
            var o = _;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (_) {
            o = _;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (_) {
          o = _;
        }
        n();
      }
    } catch (_) {
      if (_ && o && typeof _.stack == "string") {
        for (var c = _.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, S = d.length - 1; 1 <= h && 0 <= S && c[h] !== d[S]; )
          S--;
        for (; 1 <= h && 0 <= S; h--, S--)
          if (c[h] !== d[S]) {
            if (h !== 1 || S !== 1)
              do
                if (h--, S--, 0 > S || c[h] !== d[S]) {
                  var C = `
` + c[h].replace(" at new ", " at ");
                  return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)), C;
                }
              while (1 <= h && 0 <= S);
            break;
          }
      }
    } finally {
      Pn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Ke(n) : "";
  }
  function li(n) {
    switch (n.tag) {
      case 5:
        return Ke(n.type);
      case 16:
        return Ke("Lazy");
      case 13:
        return Ke("Suspense");
      case 19:
        return Ke("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ur(n.type, !1), n;
      case 11:
        return n = ur(n.type.render, !1), n;
      case 1:
        return n = ur(n.type, !0), n;
      default:
        return "";
    }
  }
  function _n(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Me:
        return "Fragment";
      case yt:
        return "Portal";
      case lr:
        return "Profiler";
      case Mn:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case qe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ut:
          return (n.displayName || "Context") + ".Consumer";
        case zt:
          return (n._context.displayName || "Context") + ".Provider";
        case Yn:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Er:
          return r = n.displayName || null, r !== null ? r : _n(n.type) || "Memo";
        case Rt:
          r = n._payload, n = n._init;
          try {
            return _n(n(r));
          } catch {
          }
      }
    return null;
  }
  function ui(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return _n(r);
      case 8:
        return r === Mn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Xr(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function fa(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Yu(n) {
    var r = fa(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Rr(n) {
    n._valueTracker || (n._valueTracker = Yu(n));
  }
  function Ma(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = fa(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Sn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function $n(n, r) {
    var l = r.checked;
    return K({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function xr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Xr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function qr(n, r) {
    r = r.checked, r != null && Ae(n, "checked", r, !1);
  }
  function or(n, r) {
    qr(n, r);
    var l = Xr(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Vl(n, r.type, l) : r.hasOwnProperty("defaultValue") && Vl(n, r.type, Xr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _a(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Vl(n, r, l) {
    (r !== "number" || Sn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Gi = Array.isArray;
  function oi(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Xr(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Wi(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(L(91));
    return K({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Kr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(L(92));
        if (Gi(l)) {
          if (1 < l.length)
            throw Error(L(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Xr(l) };
  }
  function si(n, r) {
    var l = Xr(r.value), o = Xr(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function da(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ci(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ci(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Zr, Pu = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Zr = Zr || document.createElement("div"), Zr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Zr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function fi(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Q = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, fe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Q).forEach(function(n) {
    fe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Q[r] = Q[n];
    });
  });
  function Oe(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Q.hasOwnProperty(n) && Q[n] ? ("" + r).trim() : r + "px";
  }
  function rt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Oe(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var _t = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Cn(n, r) {
    if (r) {
      if (_t[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(L(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(L(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(L(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(L(62));
    }
  }
  function Bt(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var wr = null;
  function xt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var pa = null, Ut = null, wt = null;
  function Sp(n) {
    if (n = ho(n)) {
      if (typeof pa != "function")
        throw Error(L(280));
      var r = n.stateNode;
      r && (r = se(r), pa(n.stateNode, n.type, r));
    }
  }
  function ns(n) {
    Ut ? wt ? wt.push(n) : wt = [n] : Ut = n;
  }
  function rs() {
    if (Ut) {
      var n = Ut, r = wt;
      if (wt = Ut = null, Sp(n), r)
        for (n = 0; n < r.length; n++)
          Sp(r[n]);
    }
  }
  function Cp(n, r) {
    return n(r);
  }
  function Ep() {
  }
  var as = !1;
  function Zc(n, r, l) {
    if (as)
      return n(r, l);
    as = !0;
    try {
      return Cp(n, r, l);
    } finally {
      as = !1, (Ut !== null || wt !== null) && (Ep(), rs());
    }
  }
  function $u(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = se(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(L(231, r, typeof l));
    return l;
  }
  var is = !1;
  if (tt)
    try {
      var Xi = {};
      Object.defineProperty(Xi, "passive", { get: function() {
        is = !0;
      } }), window.addEventListener("test", Xi, Xi), window.removeEventListener("test", Xi, Xi);
    } catch {
      is = !1;
    }
  function jl(n, r, l, o, c, d, h, S, C) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, _);
    } catch (H) {
      this.onError(H);
    }
  }
  var Jr = !1, La = null, Bl = !1, Qu = null, Jc = { onError: function(n) {
    Jr = !0, La = n;
  } };
  function ef(n, r, l, o, c, d, h, S, C) {
    Jr = !1, La = null, jl.apply(Jc, arguments);
  }
  function Yl(n, r, l, o, c, d, h, S, C) {
    if (ef.apply(this, arguments), Jr) {
      if (Jr) {
        var _ = La;
        Jr = !1, La = null;
      } else
        throw Error(L(198));
      Bl || (Bl = !0, Qu = _);
    }
  }
  function va(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Iu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Pl(n) {
    if (va(n) !== n)
      throw Error(L(188));
  }
  function Ln(n) {
    var r = n.alternate;
    if (!r) {
      if (r = va(n), r === null)
        throw Error(L(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Pl(c), n;
          if (d === o)
            return Pl(c), r;
          d = d.sibling;
        }
        throw Error(L(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var h = !1, S = c.child; S; ) {
          if (S === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (S === o) {
            h = !0, o = c, l = d;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = d.child; S; ) {
            if (S === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (S === o) {
              h = !0, o = d, l = c;
              break;
            }
            S = S.sibling;
          }
          if (!h)
            throw Error(L(189));
        }
      }
      if (l.alternate !== o)
        throw Error(L(190));
    }
    if (l.tag !== 3)
      throw Error(L(188));
    return l.stateNode.current === l ? n : r;
  }
  function Tp(n) {
    return n = Ln(n), n !== null ? Rp(n) : null;
  }
  function Rp(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Rp(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var tf = ve.unstable_scheduleCallback, xp = ve.unstable_cancelCallback, km = ve.unstable_shouldYield, bm = ve.unstable_requestPaint, Dt = ve.unstable_now, Mm = ve.unstable_getCurrentPriorityLevel, Oa = ve.unstable_ImmediatePriority, Ne = ve.unstable_UserBlockingPriority, di = ve.unstable_NormalPriority, wp = ve.unstable_LowPriority, nf = ve.unstable_IdlePriority, Gu = null, ea = null;
  function Dp(n) {
    if (ea && typeof ea.onCommitFiberRoot == "function")
      try {
        ea.onCommitFiberRoot(Gu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Dr = Math.clz32 ? Math.clz32 : _m, kp = Math.log, bp = Math.LN2;
  function _m(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (kp(n) / bp | 0) | 0;
  }
  var ls = 64, $l = 4194304;
  function qi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ta(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = qi(S) : (d &= h, d !== 0 && (o = qi(d)));
    } else
      h = l & ~c, h !== 0 ? o = qi(h) : d !== 0 && (o = qi(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function rf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function us(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - Dr(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = rf(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function af(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function os() {
    var n = ls;
    return ls <<= 1, !(ls & 4194240) && (ls = 64), n;
  }
  function lf(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function Ki(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function Lm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Wu(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Xe = 0;
  function uf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Mp, ss, at, _p, of, we = !1, Xu = [], At = null, kr = null, br = null, qu = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), Ze = [], Om = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function na(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        At = null;
        break;
      case "dragenter":
      case "dragleave":
        kr = null;
        break;
      case "mouseover":
      case "mouseout":
        br = null;
        break;
      case "pointerover":
      case "pointerout":
        qu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Yt.delete(r.pointerId);
    }
  }
  function En(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ho(r), r !== null && ss(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function pi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return At = En(At, n, r, l, o, c), !0;
      case "dragenter":
        return kr = En(kr, n, r, l, o, c), !0;
      case "mouseover":
        return br = En(br, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return qu.set(d, En(qu.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Yt.set(d, En(Yt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Lp(n) {
    var r = _r(n.target);
    if (r !== null) {
      var l = va(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Iu(l), r !== null) {
            n.blockedOn = r, of(n.priority, function() {
              at(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Ql(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ds(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        wr = o, l.target.dispatchEvent(o), wr = null;
      } else
        return r = ho(l), r !== null && ss(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function sf(n, r, l) {
    Ql(n) && l.delete(r);
  }
  function Op() {
    we = !1, At !== null && Ql(At) && (At = null), kr !== null && Ql(kr) && (kr = null), br !== null && Ql(br) && (br = null), qu.forEach(sf), Yt.forEach(sf);
  }
  function Ku(n, r) {
    n.blockedOn === r && (n.blockedOn = null, we || (we = !0, ve.unstable_scheduleCallback(ve.unstable_NormalPriority, Op)));
  }
  function Zu(n) {
    function r(c) {
      return Ku(c, n);
    }
    if (0 < Xu.length) {
      Ku(Xu[0], n);
      for (var l = 1; l < Xu.length; l++) {
        var o = Xu[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (At !== null && Ku(At, n), kr !== null && Ku(kr, n), br !== null && Ku(br, n), qu.forEach(r), Yt.forEach(r), l = 0; l < Ze.length; l++)
      o = Ze[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ze.length && (l = Ze[0], l.blockedOn === null); )
      Lp(l), l.blockedOn === null && Ze.shift();
  }
  var Il = st.ReactCurrentBatchConfig, Zi = !0;
  function Np(n, r, l, o) {
    var c = Xe, d = Il.transition;
    Il.transition = null;
    try {
      Xe = 1, fs(n, r, l, o);
    } finally {
      Xe = c, Il.transition = d;
    }
  }
  function cs(n, r, l, o) {
    var c = Xe, d = Il.transition;
    Il.transition = null;
    try {
      Xe = 4, fs(n, r, l, o);
    } finally {
      Xe = c, Il.transition = d;
    }
  }
  function fs(n, r, l, o) {
    if (Zi) {
      var c = ds(n, r, l, o);
      if (c === null)
        xs(n, r, o, Ju, l), na(n, o);
      else if (pi(c, n, r, l, o))
        o.stopPropagation();
      else if (na(n, o), r & 4 && -1 < Om.indexOf(n)) {
        for (; c !== null; ) {
          var d = ho(c);
          if (d !== null && Mp(d), d = ds(n, r, l, o), d === null && xs(n, r, o, Ju, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        xs(n, r, o, null, l);
    }
  }
  var Ju = null;
  function ds(n, r, l, o) {
    if (Ju = null, n = xt(o), n = _r(n), n !== null)
      if (r = va(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Iu(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Ju = n, null;
  }
  function cf(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Mm()) {
          case Oa:
            return 1;
          case Ne:
            return 4;
          case di:
          case wp:
            return 16;
          case nf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Na = null, eo = null, to = null;
  function ff() {
    if (to)
      return to;
    var n, r = eo, l = r.length, o, c = "value" in Na ? Na.value : Na.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++)
      ;
    return to = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Gl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function no() {
    return !0;
  }
  function zp() {
    return !1;
  }
  function sr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? no : zp, this.isPropagationStopped = zp, this;
    }
    return K(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = no);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = no);
    }, persist: function() {
    }, isPersistent: no }), r;
  }
  var vi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ps = sr(vi), Wl = K({}, vi, { view: 0, detail: 0 }), Up = sr(Wl), vs, df, ro, Xt = K({}, Wl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ro && (ro && n.type === "mousemove" ? (vs = n.screenX - ro.screenX, df = n.screenY - ro.screenY) : df = vs = 0, ro = n), vs);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : df;
  } }), hs = sr(Xt), Ap = K({}, Xt, { dataTransfer: 0 }), Hp = sr(Ap), Nm = K({}, Wl, { relatedTarget: 0 }), hi = sr(Nm), pf = K({}, vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Fp = sr(pf), zm = K({}, vi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Um = sr(zm), Am = K({}, vi, { data: 0 }), vf = sr(Am), hf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Vp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, jp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Bp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = jp[n]) ? !!r[n] : !1;
  }
  function mf() {
    return Bp;
  }
  var za = K({}, Wl, { key: function(n) {
    if (n.key) {
      var r = hf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Gl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Vp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mf, charCode: function(n) {
    return n.type === "keypress" ? Gl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Gl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Hm = sr(za), yf = K({}, Xt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ms = sr(yf), gf = K({}, Wl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mf }), Fm = sr(gf), ys = K({}, vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yp = sr(ys), In = K({}, Xt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ua = sr(In), Ht = [9, 13, 27, 32], ra = tt && "CompositionEvent" in window, Ji = null;
  tt && "documentMode" in document && (Ji = document.documentMode);
  var gs = tt && "TextEvent" in window && !Ji, Pp = tt && (!ra || Ji && 8 < Ji && 11 >= Ji), Xl = " ", $p = !1;
  function Qp(n, r) {
    switch (n) {
      case "keyup":
        return Ht.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ss(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ql = !1;
  function Vm(n, r) {
    switch (n) {
      case "compositionend":
        return Ss(r);
      case "keypress":
        return r.which !== 32 ? null : ($p = !0, Xl);
      case "textInput":
        return n = r.data, n === Xl && $p ? null : n;
      default:
        return null;
    }
  }
  function jm(n, r) {
    if (ql)
      return n === "compositionend" || !ra && Qp(n, r) ? (n = ff(), to = eo = Na = null, ql = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Pp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Ip = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Gp(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Ip[n.type] : r === "textarea";
  }
  function Wp(n, r, l, o) {
    ns(o), r = fo(r, "onChange"), 0 < r.length && (l = new ps("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ao = null, Kl = null;
  function Zl(n) {
    Rs(n, 0);
  }
  function Jl(n) {
    var r = tu(n);
    if (Ma(r))
      return n;
  }
  function Xp(n, r) {
    if (n === "change")
      return r;
  }
  var Sf = !1;
  if (tt) {
    var Cf;
    if (tt) {
      var Ef = "oninput" in document;
      if (!Ef) {
        var qp = document.createElement("div");
        qp.setAttribute("oninput", "return;"), Ef = typeof qp.oninput == "function";
      }
      Cf = Ef;
    } else
      Cf = !1;
    Sf = Cf && (!document.documentMode || 9 < document.documentMode);
  }
  function Kp() {
    ao && (ao.detachEvent("onpropertychange", Zp), Kl = ao = null);
  }
  function Zp(n) {
    if (n.propertyName === "value" && Jl(Kl)) {
      var r = [];
      Wp(r, Kl, n, xt(n)), Zc(Zl, r);
    }
  }
  function Bm(n, r, l) {
    n === "focusin" ? (Kp(), ao = r, Kl = l, ao.attachEvent("onpropertychange", Zp)) : n === "focusout" && Kp();
  }
  function Ym(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Jl(Kl);
  }
  function Pm(n, r) {
    if (n === "click")
      return Jl(r);
  }
  function Jp(n, r) {
    if (n === "input" || n === "change")
      return Jl(r);
  }
  function $m(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Mr = typeof Object.is == "function" ? Object.is : $m;
  function io(n, r) {
    if (Mr(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Ee.call(r, c) || !Mr(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function ev(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function tv(n, r) {
    var l = ev(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ev(l);
    }
  }
  function nv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? nv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Cs() {
    for (var n = window, r = Sn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = Sn(n.document);
    }
    return r;
  }
  function Aa(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Es(n) {
    var r = Cs(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && nv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Aa(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = tv(l, d);
          var h = tv(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var rv = tt && "documentMode" in document && 11 >= document.documentMode, aa = null, Tf = null, lo = null, Rf = !1;
  function av(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Rf || aa == null || aa !== Sn(o) || (o = aa, "selectionStart" in o && Aa(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), lo && io(lo, o) || (lo = o, o = fo(Tf, "onSelect"), 0 < o.length && (r = new ps("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = aa)));
  }
  function Ts(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var el = { animationend: Ts("Animation", "AnimationEnd"), animationiteration: Ts("Animation", "AnimationIteration"), animationstart: Ts("Animation", "AnimationStart"), transitionend: Ts("Transition", "TransitionEnd") }, xf = {}, wf = {};
  tt && (wf = document.createElement("div").style, "AnimationEvent" in window || (delete el.animationend.animation, delete el.animationiteration.animation, delete el.animationstart.animation), "TransitionEvent" in window || delete el.transitionend.transition);
  function qt(n) {
    if (xf[n])
      return xf[n];
    if (!el[n])
      return n;
    var r = el[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in wf)
        return xf[n] = r[l];
    return n;
  }
  var Df = qt("animationend"), iv = qt("animationiteration"), lv = qt("animationstart"), uv = qt("transitionend"), ov = /* @__PURE__ */ new Map(), sv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ha(n, r) {
    ov.set(n, r), xe(r, [n]);
  }
  for (var uo = 0; uo < sv.length; uo++) {
    var tl = sv[uo], Qm = tl.toLowerCase(), oo = tl[0].toUpperCase() + tl.slice(1);
    Ha(Qm, "on" + oo);
  }
  Ha(Df, "onAnimationEnd"), Ha(iv, "onAnimationIteration"), Ha(lv, "onAnimationStart"), Ha("dblclick", "onDoubleClick"), Ha("focusin", "onFocus"), Ha("focusout", "onBlur"), Ha(uv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), xe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), xe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), xe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), xe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), xe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), xe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var so = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Im = new Set("cancel close invalid load scroll toggle".split(" ").concat(so));
  function cv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Yl(o, r, void 0, n), n.currentTarget = null;
  }
  function Rs(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var h = o.length - 1; 0 <= h; h--) {
            var S = o[h], C = S.instance, _ = S.currentTarget;
            if (S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            cv(c, S, _), d = C;
          }
        else
          for (h = 0; h < o.length; h++) {
            if (S = o[h], C = S.instance, _ = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped())
              break e;
            cv(c, S, _), d = C;
          }
      }
    }
    if (Bl)
      throw n = Qu, Bl = !1, Qu = null, n;
  }
  function it(n, r) {
    var l = r[Nf];
    l === void 0 && (l = r[Nf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (fv(r, n, 2, !1), l.add(o));
  }
  function mi(n, r, l) {
    var o = 0;
    r && (o |= 4), fv(l, n, o, r);
  }
  var Fa = "_reactListening" + Math.random().toString(36).slice(2);
  function eu(n) {
    if (!n[Fa]) {
      n[Fa] = !0, Tt.forEach(function(l) {
        l !== "selectionchange" && (Im.has(l) || mi(l, !1, n), mi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Fa] || (r[Fa] = !0, mi("selectionchange", !1, r));
    }
  }
  function fv(n, r, l, o) {
    switch (cf(r)) {
      case 1:
        var c = Np;
        break;
      case 4:
        c = cs;
        break;
      default:
        c = fs;
    }
    l = c.bind(null, r, l, n), c = void 0, !is || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function xs(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var h = o.tag;
          if (h === 3 || h === 4) {
            var S = o.stateNode.containerInfo;
            if (S === c || S.nodeType === 8 && S.parentNode === c)
              break;
            if (h === 4)
              for (h = o.return; h !== null; ) {
                var C = h.tag;
                if ((C === 3 || C === 4) && (C = h.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c))
                  return;
                h = h.return;
              }
            for (; S !== null; ) {
              if (h = _r(S), h === null)
                return;
              if (C = h.tag, C === 5 || C === 6) {
                o = d = h;
                continue e;
              }
              S = S.parentNode;
            }
          }
          o = o.return;
        }
    Zc(function() {
      var _ = d, H = xt(l), F = [];
      e: {
        var A = ov.get(n);
        if (A !== void 0) {
          var G = ps, J = n;
          switch (n) {
            case "keypress":
              if (Gl(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              G = Hm;
              break;
            case "focusin":
              J = "focus", G = hi;
              break;
            case "focusout":
              J = "blur", G = hi;
              break;
            case "beforeblur":
            case "afterblur":
              G = hi;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = hs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Hp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = Fm;
              break;
            case Df:
            case iv:
            case lv:
              G = Fp;
              break;
            case uv:
              G = Yp;
              break;
            case "scroll":
              G = Up;
              break;
            case "wheel":
              G = Ua;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Um;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = ms;
          }
          var ne = (r & 4) !== 0, Ot = !ne && n === "scroll", x = ne ? A !== null ? A + "Capture" : null : A;
          ne = [];
          for (var T = _, k; T !== null; ) {
            k = T;
            var B = k.stateNode;
            if (k.tag === 5 && B !== null && (k = B, x !== null && (B = $u(T, x), B != null && ne.push(co(T, B, k)))), Ot)
              break;
            T = T.return;
          }
          0 < ne.length && (A = new G(A, J, null, l, H), F.push({ event: A, listeners: ne }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (A = n === "mouseover" || n === "pointerover", G = n === "mouseout" || n === "pointerout", A && l !== wr && (J = l.relatedTarget || l.fromElement) && (_r(J) || J[Va]))
            break e;
          if ((G || A) && (A = H.window === H ? H : (A = H.ownerDocument) ? A.defaultView || A.parentWindow : window, G ? (J = l.relatedTarget || l.toElement, G = _, J = J ? _r(J) : null, J !== null && (Ot = va(J), J !== Ot || J.tag !== 5 && J.tag !== 6) && (J = null)) : (G = null, J = _), G !== J)) {
            if (ne = hs, B = "onMouseLeave", x = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (ne = ms, B = "onPointerLeave", x = "onPointerEnter", T = "pointer"), Ot = G == null ? A : tu(G), k = J == null ? A : tu(J), A = new ne(B, T + "leave", G, l, H), A.target = Ot, A.relatedTarget = k, B = null, _r(H) === _ && (ne = new ne(x, T + "enter", J, l, H), ne.target = k, ne.relatedTarget = Ot, B = ne), Ot = B, G && J)
              t: {
                for (ne = G, x = J, T = 0, k = ne; k; k = nl(k))
                  T++;
                for (k = 0, B = x; B; B = nl(B))
                  k++;
                for (; 0 < T - k; )
                  ne = nl(ne), T--;
                for (; 0 < k - T; )
                  x = nl(x), k--;
                for (; T--; ) {
                  if (ne === x || x !== null && ne === x.alternate)
                    break t;
                  ne = nl(ne), x = nl(x);
                }
                ne = null;
              }
            else
              ne = null;
            G !== null && kf(F, A, G, ne, !1), J !== null && Ot !== null && kf(F, Ot, J, ne, !0);
          }
        }
        e: {
          if (A = _ ? tu(_) : window, G = A.nodeName && A.nodeName.toLowerCase(), G === "select" || G === "input" && A.type === "file")
            var re = Xp;
          else if (Gp(A))
            if (Sf)
              re = Jp;
            else {
              re = Ym;
              var ee = Bm;
            }
          else
            (G = A.nodeName) && G.toLowerCase() === "input" && (A.type === "checkbox" || A.type === "radio") && (re = Pm);
          if (re && (re = re(n, _))) {
            Wp(F, re, l, H);
            break e;
          }
          ee && ee(n, A, _), n === "focusout" && (ee = A._wrapperState) && ee.controlled && A.type === "number" && Vl(A, "number", A.value);
        }
        switch (ee = _ ? tu(_) : window, n) {
          case "focusin":
            (Gp(ee) || ee.contentEditable === "true") && (aa = ee, Tf = _, lo = null);
            break;
          case "focusout":
            lo = Tf = aa = null;
            break;
          case "mousedown":
            Rf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rf = !1, av(F, l, H);
            break;
          case "selectionchange":
            if (rv)
              break;
          case "keydown":
          case "keyup":
            av(F, l, H);
        }
        var oe;
        if (ra)
          e: {
            switch (n) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          ql ? Qp(n, l) && (Ce = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (Pp && l.locale !== "ko" && (ql || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && ql && (oe = ff()) : (Na = H, eo = "value" in Na ? Na.value : Na.textContent, ql = !0)), ee = fo(_, Ce), 0 < ee.length && (Ce = new vf(Ce, n, null, l, H), F.push({ event: Ce, listeners: ee }), oe ? Ce.data = oe : (oe = Ss(l), oe !== null && (Ce.data = oe)))), (oe = gs ? Vm(n, l) : jm(n, l)) && (_ = fo(_, "onBeforeInput"), 0 < _.length && (H = new vf("onBeforeInput", "beforeinput", null, l, H), F.push({ event: H, listeners: _ }), H.data = oe));
      }
      Rs(F, r);
    });
  }
  function co(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function fo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = $u(n, l), d != null && o.unshift(co(n, d, c)), d = $u(n, r), d != null && o.push(co(n, d, c))), n = n.return;
    }
    return o;
  }
  function nl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function kf(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, _ = S.stateNode;
      if (C !== null && C === o)
        break;
      S.tag === 5 && _ !== null && (S = _, c ? (C = $u(l, d), C != null && h.unshift(co(l, C, S))) : c || (C = $u(l, d), C != null && h.push(co(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var bf = /\r\n?/g, Gm = /\u0000|\uFFFD/g;
  function Mf(n) {
    return (typeof n == "string" ? n : "" + n).replace(bf, `
`).replace(Gm, "");
  }
  function ws(n, r, l) {
    if (r = Mf(r), Mf(n) !== r && l)
      throw Error(L(425));
  }
  function Ds() {
  }
  var _f = null, rl = null;
  function po(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var al = typeof setTimeout == "function" ? setTimeout : void 0, dv = typeof clearTimeout == "function" ? clearTimeout : void 0, Lf = typeof Promise == "function" ? Promise : void 0, Of = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lf < "u" ? function(n) {
    return Lf.resolve(null).then(n).catch(Wm);
  } : al;
  function Wm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function yi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), Zu(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Zu(r);
  }
  function ia(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function vo(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var gi = Math.random().toString(36).slice(2), ha = "__reactFiber$" + gi, il = "__reactProps$" + gi, Va = "__reactContainer$" + gi, Nf = "__reactEvents$" + gi, Xm = "__reactListeners$" + gi, zf = "__reactHandles$" + gi;
  function _r(n) {
    var r = n[ha];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Va] || l[ha]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = vo(n); n !== null; ) {
            if (l = n[ha])
              return l;
            n = vo(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ho(n) {
    return n = n[ha] || n[Va], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function tu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(L(33));
  }
  function se(n) {
    return n[il] || null;
  }
  var Si = [], ct = -1;
  function De(n) {
    return { current: n };
  }
  function Qe(n) {
    0 > ct || (n.current = Si[ct], Si[ct] = null, ct--);
  }
  function Ie(n, r) {
    ct++, Si[ct] = n.current, n.current = r;
  }
  var ma = {}, Se = De(ma), kt = De(!1), Gn = ma;
  function Lr(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return ma;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function ht(n) {
    return n = n.childContextTypes, n != null;
  }
  function Or() {
    Qe(kt), Qe(Se);
  }
  function Ci(n, r, l) {
    if (Se.current !== ma)
      throw Error(L(168));
    Ie(Se, r), Ie(kt, l);
  }
  function mo(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(L(108, ui(n) || "Unknown", c));
    return K({}, l, o);
  }
  function ks(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ma, Gn = Se.current, Ie(Se, n), Ie(kt, kt.current), !0;
  }
  function pv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(L(169));
    l ? (n = mo(n, r, Gn), o.__reactInternalMemoizedMergedChildContext = n, Qe(kt), Qe(Se), Ie(Se, n)) : Qe(kt), Ie(kt, l);
  }
  var cr = null, Kt = !1, yo = !1;
  function Uf(n) {
    cr === null ? cr = [n] : cr.push(n);
  }
  function Af(n) {
    Kt = !0, Uf(n);
  }
  function Wn() {
    if (!yo && cr !== null) {
      yo = !0;
      var n = 0, r = Xe;
      try {
        var l = cr;
        for (Xe = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        cr = null, Kt = !1;
      } catch (c) {
        throw cr !== null && (cr = cr.slice(n + 1)), tf(Oa, Wn), c;
      } finally {
        Xe = r, yo = !1;
      }
    }
    return null;
  }
  var Ei = [], Xn = 0, ll = null, nu = 0, qn = [], Tn = 0, Nr = null, ln = 1, ja = "";
  function fr(n, r) {
    Ei[Xn++] = nu, Ei[Xn++] = ll, ll = n, nu = r;
  }
  function Hf(n, r, l) {
    qn[Tn++] = ln, qn[Tn++] = ja, qn[Tn++] = Nr, Nr = n;
    var o = ln;
    n = ja;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, ln = 1 << 32 - Dr(r) + c | l << c | o, ja = d + n;
    } else
      ln = 1 << d | l << c | o, ja = n;
  }
  function bs(n) {
    n.return !== null && (fr(n, 1), Hf(n, 1, 0));
  }
  function Ff(n) {
    for (; n === ll; )
      ll = Ei[--Xn], Ei[Xn] = null, nu = Ei[--Xn], Ei[Xn] = null;
    for (; n === Nr; )
      Nr = qn[--Tn], qn[Tn] = null, ja = qn[--Tn], qn[Tn] = null, ln = qn[--Tn], qn[Tn] = null;
  }
  var dr = null, Kn = null, ft = !1, zr = null;
  function Vf(n, r) {
    var l = jr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function vv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, dr = n, Kn = ia(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, dr = n, Kn = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Nr !== null ? { id: ln, overflow: ja } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = jr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, dr = n, Kn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ms(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function _s(n) {
    if (ft) {
      var r = Kn;
      if (r) {
        var l = r;
        if (!vv(n, r)) {
          if (Ms(n))
            throw Error(L(418));
          r = ia(l.nextSibling);
          var o = dr;
          r && vv(n, r) ? Vf(o, l) : (n.flags = n.flags & -4097 | 2, ft = !1, dr = n);
        }
      } else {
        if (Ms(n))
          throw Error(L(418));
        n.flags = n.flags & -4097 | 2, ft = !1, dr = n;
      }
    }
  }
  function hv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    dr = n;
  }
  function Ls(n) {
    if (n !== dr)
      return !1;
    if (!ft)
      return hv(n), ft = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !po(n.type, n.memoizedProps)), r && (r = Kn)) {
      if (Ms(n))
        throw mv(), Error(L(418));
      for (; r; )
        Vf(n, r), r = ia(r.nextSibling);
    }
    if (hv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(L(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Kn = ia(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Kn = null;
      }
    } else
      Kn = dr ? ia(n.stateNode.nextSibling) : null;
    return !0;
  }
  function mv() {
    for (var n = Kn; n; )
      n = ia(n.nextSibling);
  }
  function gt() {
    Kn = dr = null, ft = !1;
  }
  function jf(n) {
    zr === null ? zr = [n] : zr.push(n);
  }
  var Os = st.ReactCurrentBatchConfig;
  function pr(n, r) {
    if (n && n.defaultProps) {
      r = K({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var ya = De(null), Ns = null, Ti = null, Bf = null;
  function Yf() {
    Bf = Ti = Ns = null;
  }
  function Ri(n) {
    var r = ya.current;
    Qe(ya), n._currentValue = r;
  }
  function Zt(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Y(n, r) {
    Ns = n, Bf = Ti = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Ft = !0), n.firstContext = null);
  }
  function Lt(n) {
    var r = n._currentValue;
    if (Bf !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Ti === null) {
        if (Ns === null)
          throw Error(L(308));
        Ti = n, Ns.dependencies = { lanes: 0, firstContext: n };
      } else
        Ti = Ti.next = n;
    return r;
  }
  var un = null;
  function Pf(n) {
    un === null ? un = [n] : un.push(n);
  }
  function yv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Pf(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ba(n, o);
  }
  function Ba(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var xi = !1;
  function $f(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Pt(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ya(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function wi(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, ze & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ba(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Pf(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ba(n, l);
  }
  function zs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wu(n, l);
    }
  }
  function Qf(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Di(n, r, l, o) {
    var c = n.updateQueue;
    xi = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, _ = C.next;
      C.next = null, h === null ? d = _ : h.next = _, h = C;
      var H = n.alternate;
      H !== null && (H = H.updateQueue, S = H.lastBaseUpdate, S !== h && (S === null ? H.firstBaseUpdate = _ : S.next = _, H.lastBaseUpdate = C));
    }
    if (d !== null) {
      var F = c.baseState;
      h = 0, H = _ = C = null, S = d;
      do {
        var A = S.lane, G = S.eventTime;
        if ((o & A) === A) {
          H !== null && (H = H.next = {
            eventTime: G,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var J = n, ne = S;
            switch (A = r, G = l, ne.tag) {
              case 1:
                if (J = ne.payload, typeof J == "function") {
                  F = J.call(G, F, A);
                  break e;
                }
                F = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ne.payload, A = typeof J == "function" ? J.call(G, F, A) : J, A == null)
                  break e;
                F = K({}, F, A);
                break e;
              case 2:
                xi = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, A = c.effects, A === null ? c.effects = [S] : A.push(S));
        } else
          G = { eventTime: G, lane: A, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, H === null ? (_ = H = G, C = F) : H = H.next = G, h |= A;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          A = S, S = A.next, A.next = null, c.lastBaseUpdate = A, c.shared.pending = null;
        }
      } while (!0);
      if (H === null && (C = F), c.baseState = C, c.firstBaseUpdate = _, c.lastBaseUpdate = H, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Ia |= h, n.lanes = h, n.memoizedState = F;
    }
  }
  function ul(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(L(191, c));
          c.call(o);
        }
      }
  }
  var gv = new j.Component().refs;
  function If(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : K({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Us = { isMounted: function(n) {
    return (n = n._reactInternals) ? va(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Dn(), c = Vt(n), d = Ya(o, c);
    d.payload = r, l != null && (d.callback = l), r = wi(n, d, c), r !== null && (kn(r, n, c, o), zs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Dn(), c = Vt(n), d = Ya(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = wi(n, d, c), r !== null && (kn(r, n, c, o), zs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Dn(), o = Vt(n), c = Ya(l, o);
    c.tag = 2, r != null && (c.callback = r), r = wi(n, c, o), r !== null && (kn(r, n, o, l), zs(r, n, o));
  } };
  function Sv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !io(l, o) || !io(c, d) : !0;
  }
  function Cv(n, r, l) {
    var o = !1, c = ma, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Lt(d) : (c = ht(r) ? Gn : Se.current, o = r.contextTypes, d = (o = o != null) ? Lr(n, c) : ma), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Us, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Ev(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Us.enqueueReplaceState(r, r.state, null);
  }
  function As(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = gv, $f(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Lt(d) : (d = ht(r) ? Gn : Se.current, c.context = Lr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (If(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Us.enqueueReplaceState(c, c.state, null), Di(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ru(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(L(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(L(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          S === gv && (S = c.refs = {}), h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(L(284));
      if (!l._owner)
        throw Error(L(290, n));
    }
    return n;
  }
  function Hs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(L(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Tv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Rv(n) {
    function r(x, T) {
      if (n) {
        var k = x.deletions;
        k === null ? (x.deletions = [T], x.flags |= 16) : k.push(T);
      }
    }
    function l(x, T) {
      if (!n)
        return null;
      for (; T !== null; )
        r(x, T), T = T.sibling;
      return null;
    }
    function o(x, T) {
      for (x = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? x.set(T.key, T) : x.set(T.index, T), T = T.sibling;
      return x;
    }
    function c(x, T) {
      return x = zi(x, T), x.index = 0, x.sibling = null, x;
    }
    function d(x, T, k) {
      return x.index = k, n ? (k = x.alternate, k !== null ? (k = k.index, k < T ? (x.flags |= 2, T) : k) : (x.flags |= 2, T)) : (x.flags |= 1048576, T);
    }
    function h(x) {
      return n && x.alternate === null && (x.flags |= 2), x;
    }
    function S(x, T, k, B) {
      return T === null || T.tag !== 6 ? (T = Ao(k, x.mode, B), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function C(x, T, k, B) {
      var re = k.type;
      return re === Me ? H(x, T, k.props.children, B, k.key) : T !== null && (T.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Rt && Tv(re) === T.type) ? (B = c(T, k.props), B.ref = ru(x, T, k), B.return = x, B) : (B = hc(k.type, k.key, k.props, null, x.mode, B), B.ref = ru(x, T, k), B.return = x, B);
    }
    function _(x, T, k, B) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== k.containerInfo || T.stateNode.implementation !== k.implementation ? (T = Dl(k, x.mode, B), T.return = x, T) : (T = c(T, k.children || []), T.return = x, T);
    }
    function H(x, T, k, B, re) {
      return T === null || T.tag !== 7 ? (T = wl(k, x.mode, B, re), T.return = x, T) : (T = c(T, k), T.return = x, T);
    }
    function F(x, T, k) {
      if (typeof T == "string" && T !== "" || typeof T == "number")
        return T = Ao("" + T, x.mode, k), T.return = x, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case He:
            return k = hc(T.type, T.key, T.props, null, x.mode, k), k.ref = ru(x, null, T), k.return = x, k;
          case yt:
            return T = Dl(T, x.mode, k), T.return = x, T;
          case Rt:
            var B = T._init;
            return F(x, B(T._payload), k);
        }
        if (Gi(T) || ye(T))
          return T = wl(T, x.mode, k, null), T.return = x, T;
        Hs(x, T);
      }
      return null;
    }
    function A(x, T, k, B) {
      var re = T !== null ? T.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number")
        return re !== null ? null : S(x, T, "" + k, B);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case He:
            return k.key === re ? C(x, T, k, B) : null;
          case yt:
            return k.key === re ? _(x, T, k, B) : null;
          case Rt:
            return re = k._init, A(
              x,
              T,
              re(k._payload),
              B
            );
        }
        if (Gi(k) || ye(k))
          return re !== null ? null : H(x, T, k, B, null);
        Hs(x, k);
      }
      return null;
    }
    function G(x, T, k, B, re) {
      if (typeof B == "string" && B !== "" || typeof B == "number")
        return x = x.get(k) || null, S(T, x, "" + B, re);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case He:
            return x = x.get(B.key === null ? k : B.key) || null, C(T, x, B, re);
          case yt:
            return x = x.get(B.key === null ? k : B.key) || null, _(T, x, B, re);
          case Rt:
            var ee = B._init;
            return G(x, T, k, ee(B._payload), re);
        }
        if (Gi(B) || ye(B))
          return x = x.get(k) || null, H(T, x, B, re, null);
        Hs(T, B);
      }
      return null;
    }
    function J(x, T, k, B) {
      for (var re = null, ee = null, oe = T, Ce = T = 0, tn = null; oe !== null && Ce < k.length; Ce++) {
        oe.index > Ce ? (tn = oe, oe = null) : tn = oe.sibling;
        var Ye = A(x, oe, k[Ce], B);
        if (Ye === null) {
          oe === null && (oe = tn);
          break;
        }
        n && oe && Ye.alternate === null && r(x, oe), T = d(Ye, T, Ce), ee === null ? re = Ye : ee.sibling = Ye, ee = Ye, oe = tn;
      }
      if (Ce === k.length)
        return l(x, oe), ft && fr(x, Ce), re;
      if (oe === null) {
        for (; Ce < k.length; Ce++)
          oe = F(x, k[Ce], B), oe !== null && (T = d(oe, T, Ce), ee === null ? re = oe : ee.sibling = oe, ee = oe);
        return ft && fr(x, Ce), re;
      }
      for (oe = o(x, oe); Ce < k.length; Ce++)
        tn = G(oe, x, Ce, k[Ce], B), tn !== null && (n && tn.alternate !== null && oe.delete(tn.key === null ? Ce : tn.key), T = d(tn, T, Ce), ee === null ? re = tn : ee.sibling = tn, ee = tn);
      return n && oe.forEach(function(Ui) {
        return r(x, Ui);
      }), ft && fr(x, Ce), re;
    }
    function ne(x, T, k, B) {
      var re = ye(k);
      if (typeof re != "function")
        throw Error(L(150));
      if (k = re.call(k), k == null)
        throw Error(L(151));
      for (var ee = re = null, oe = T, Ce = T = 0, tn = null, Ye = k.next(); oe !== null && !Ye.done; Ce++, Ye = k.next()) {
        oe.index > Ce ? (tn = oe, oe = null) : tn = oe.sibling;
        var Ui = A(x, oe, Ye.value, B);
        if (Ui === null) {
          oe === null && (oe = tn);
          break;
        }
        n && oe && Ui.alternate === null && r(x, oe), T = d(Ui, T, Ce), ee === null ? re = Ui : ee.sibling = Ui, ee = Ui, oe = tn;
      }
      if (Ye.done)
        return l(
          x,
          oe
        ), ft && fr(x, Ce), re;
      if (oe === null) {
        for (; !Ye.done; Ce++, Ye = k.next())
          Ye = F(x, Ye.value, B), Ye !== null && (T = d(Ye, T, Ce), ee === null ? re = Ye : ee.sibling = Ye, ee = Ye);
        return ft && fr(x, Ce), re;
      }
      for (oe = o(x, oe); !Ye.done; Ce++, Ye = k.next())
        Ye = G(oe, x, Ce, Ye.value, B), Ye !== null && (n && Ye.alternate !== null && oe.delete(Ye.key === null ? Ce : Ye.key), T = d(Ye, T, Ce), ee === null ? re = Ye : ee.sibling = Ye, ee = Ye);
      return n && oe.forEach(function(hy) {
        return r(x, hy);
      }), ft && fr(x, Ce), re;
    }
    function Ot(x, T, k, B) {
      if (typeof k == "object" && k !== null && k.type === Me && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case He:
            e: {
              for (var re = k.key, ee = T; ee !== null; ) {
                if (ee.key === re) {
                  if (re = k.type, re === Me) {
                    if (ee.tag === 7) {
                      l(x, ee.sibling), T = c(ee, k.props.children), T.return = x, x = T;
                      break e;
                    }
                  } else if (ee.elementType === re || typeof re == "object" && re !== null && re.$$typeof === Rt && Tv(re) === ee.type) {
                    l(x, ee.sibling), T = c(ee, k.props), T.ref = ru(x, ee, k), T.return = x, x = T;
                    break e;
                  }
                  l(x, ee);
                  break;
                } else
                  r(x, ee);
                ee = ee.sibling;
              }
              k.type === Me ? (T = wl(k.props.children, x.mode, B, k.key), T.return = x, x = T) : (B = hc(k.type, k.key, k.props, null, x.mode, B), B.ref = ru(x, T, k), B.return = x, x = B);
            }
            return h(x);
          case yt:
            e: {
              for (ee = k.key; T !== null; ) {
                if (T.key === ee)
                  if (T.tag === 4 && T.stateNode.containerInfo === k.containerInfo && T.stateNode.implementation === k.implementation) {
                    l(x, T.sibling), T = c(T, k.children || []), T.return = x, x = T;
                    break e;
                  } else {
                    l(x, T);
                    break;
                  }
                else
                  r(x, T);
                T = T.sibling;
              }
              T = Dl(k, x.mode, B), T.return = x, x = T;
            }
            return h(x);
          case Rt:
            return ee = k._init, Ot(x, T, ee(k._payload), B);
        }
        if (Gi(k))
          return J(x, T, k, B);
        if (ye(k))
          return ne(x, T, k, B);
        Hs(x, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, T !== null && T.tag === 6 ? (l(x, T.sibling), T = c(T, k), T.return = x, x = T) : (l(x, T), T = Ao(k, x.mode, B), T.return = x, x = T), h(x)) : l(x, T);
    }
    return Ot;
  }
  var au = Rv(!0), xv = Rv(!1), go = {}, la = De(go), So = De(go), iu = De(go);
  function ol(n) {
    if (n === go)
      throw Error(L(174));
    return n;
  }
  function Gf(n, r) {
    switch (Ie(iu, r), Ie(So, n), Ie(la, go), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Qn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Qn(r, n);
    }
    Qe(la), Ie(la, r);
  }
  function ki() {
    Qe(la), Qe(So), Qe(iu);
  }
  function de(n) {
    ol(iu.current);
    var r = ol(la.current), l = Qn(r, n.type);
    r !== l && (Ie(So, n), Ie(la, l));
  }
  function be(n) {
    So.current === n && (Qe(la), Qe(So));
  }
  var pe = De(0);
  function St(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ur = [];
  function Fs() {
    for (var n = 0; n < Ur.length; n++)
      Ur[n]._workInProgressVersionPrimary = null;
    Ur.length = 0;
  }
  var Vs = st.ReactCurrentDispatcher, Wf = st.ReactCurrentBatchConfig, sl = 0, dt = null, z = null, Ve = null, he = !1, ga = !1, vr = 0, cl = 0;
  function pt() {
    throw Error(L(321));
  }
  function fl(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!Mr(n[l], r[l]))
        return !1;
    return !0;
  }
  function bi(n, r, l, o, c, d) {
    if (sl = d, dt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Vs.current = n === null || n.memoizedState === null ? Km : Zm, n = l(o, c), ga) {
      d = 0;
      do {
        if (ga = !1, vr = 0, 25 <= d)
          throw Error(L(301));
        d += 1, Ve = z = null, r.updateQueue = null, Vs.current = qf, n = l(o, c);
      } while (ga);
    }
    if (Vs.current = tc, r = z !== null && z.next !== null, sl = 0, Ve = z = dt = null, he = !1, r)
      throw Error(L(300));
    return n;
  }
  function dl() {
    var n = vr !== 0;
    return vr = 0, n;
  }
  function Ar() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ve === null ? dt.memoizedState = Ve = n : Ve = Ve.next = n, Ve;
  }
  function Zn() {
    if (z === null) {
      var n = dt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = z.next;
    var r = Ve === null ? dt.memoizedState : Ve.next;
    if (r !== null)
      Ve = r, z = n;
    else {
      if (n === null)
        throw Error(L(310));
      z = n, n = { memoizedState: z.memoizedState, baseState: z.baseState, baseQueue: z.baseQueue, queue: z.queue, next: null }, Ve === null ? dt.memoizedState = Ve = n : Ve = Ve.next = n;
    }
    return Ve;
  }
  function pl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Co(n) {
    var r = Zn(), l = r.queue;
    if (l === null)
      throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = z, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, C = null, _ = d;
      do {
        var H = _.lane;
        if ((sl & H) === H)
          C !== null && (C = C.next = { lane: 0, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }), o = _.hasEagerState ? _.eagerState : n(o, _.action);
        else {
          var F = {
            lane: H,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          };
          C === null ? (S = C = F, h = o) : C = C.next = F, dt.lanes |= H, Ia |= H;
        }
        _ = _.next;
      } while (_ !== null && _ !== d);
      C === null ? h = o : C.next = S, Mr(o, r.memoizedState) || (Ft = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, dt.lanes |= d, Ia |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Eo(n) {
    var r = Zn(), l = r.queue;
    if (l === null)
      throw Error(L(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      Mr(d, r.memoizedState) || (Ft = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function js() {
  }
  function Bs(n, r) {
    var l = dt, o = Zn(), c = r(), d = !Mr(o.memoizedState, c);
    if (d && (o.memoizedState = c, Ft = !0), o = o.queue, To($s.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ve !== null && Ve.memoizedState.tag & 1) {
      if (l.flags |= 2048, vl(9, Ps.bind(null, l, o, c, r), void 0, null), Ct === null)
        throw Error(L(349));
      sl & 30 || Ys(l, r, c);
    }
    return c;
  }
  function Ys(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = dt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, dt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Ps(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Qs(r) && Is(n);
  }
  function $s(n, r, l) {
    return l(function() {
      Qs(r) && Is(n);
    });
  }
  function Qs(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Mr(n, l);
    } catch {
      return !0;
    }
  }
  function Is(n) {
    var r = Ba(n, 1);
    r !== null && kn(r, n, 1, -1);
  }
  function Gs(n) {
    var r = Ar();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pl, lastRenderedState: n }, r.queue = n, n = n.dispatch = ec.bind(null, dt, n), [r.memoizedState, n];
  }
  function vl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = dt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, dt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ws() {
    return Zn().memoizedState;
  }
  function hl(n, r, l, o) {
    var c = Ar();
    dt.flags |= n, c.memoizedState = vl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Pa(n, r, l, o) {
    var c = Zn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (z !== null) {
      var h = z.memoizedState;
      if (d = h.destroy, o !== null && fl(o, h.deps)) {
        c.memoizedState = vl(r, l, d, o);
        return;
      }
    }
    dt.flags |= n, c.memoizedState = vl(1 | r, l, d, o);
  }
  function Xs(n, r) {
    return hl(8390656, 8, n, r);
  }
  function To(n, r) {
    return Pa(2048, 8, n, r);
  }
  function qs(n, r) {
    return Pa(4, 2, n, r);
  }
  function Ks(n, r) {
    return Pa(4, 4, n, r);
  }
  function Xf(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function lu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Pa(4, 4, Xf.bind(null, r, n), l);
  }
  function Zs() {
  }
  function uu(n, r) {
    var l = Zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && fl(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Mi(n, r) {
    var l = Zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && fl(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Jn(n, r, l) {
    return sl & 21 ? (Mr(l, r) || (l = os(), dt.lanes |= l, Ia |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Ft = !0), n.memoizedState = l);
  }
  function qm(n, r) {
    var l = Xe;
    Xe = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Wf.transition;
    Wf.transition = {};
    try {
      n(!1), r();
    } finally {
      Xe = l, Wf.transition = o;
    }
  }
  function lt() {
    return Zn().memoizedState;
  }
  function Js(n, r, l) {
    var o = Vt(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ou(n))
      Ro(r, l);
    else if (l = yv(n, r, l, o), l !== null) {
      var c = Dn();
      kn(l, n, o, c), wv(l, r, o);
    }
  }
  function ec(n, r, l) {
    var o = Vt(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ou(n))
      Ro(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var h = r.lastRenderedState, S = d(h, l);
          if (c.hasEagerState = !0, c.eagerState = S, Mr(S, h)) {
            var C = r.interleaved;
            C === null ? (c.next = c, Pf(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = yv(n, r, c, o), l !== null && (c = Dn(), kn(l, n, o, c), wv(l, r, o));
    }
  }
  function ou(n) {
    var r = n.alternate;
    return n === dt || r !== null && r === dt;
  }
  function Ro(n, r) {
    ga = he = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function wv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wu(n, l);
    }
  }
  var tc = { readContext: Lt, useCallback: pt, useContext: pt, useEffect: pt, useImperativeHandle: pt, useInsertionEffect: pt, useLayoutEffect: pt, useMemo: pt, useReducer: pt, useRef: pt, useState: pt, useDebugValue: pt, useDeferredValue: pt, useTransition: pt, useMutableSource: pt, useSyncExternalStore: pt, useId: pt, unstable_isNewReconciler: !1 }, Km = { readContext: Lt, useCallback: function(n, r) {
    return Ar().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Lt, useEffect: Xs, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, hl(
      4194308,
      4,
      Xf.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return hl(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return hl(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ar();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Ar();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Js.bind(null, dt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ar();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Gs, useDebugValue: Zs, useDeferredValue: function(n) {
    return Ar().memoizedState = n;
  }, useTransition: function() {
    var n = Gs(!1), r = n[0];
    return n = qm.bind(null, n[1]), Ar().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = dt, c = Ar();
    if (ft) {
      if (l === void 0)
        throw Error(L(407));
      l = l();
    } else {
      if (l = r(), Ct === null)
        throw Error(L(349));
      sl & 30 || Ys(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Xs($s.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, vl(9, Ps.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ar(), r = Ct.identifierPrefix;
    if (ft) {
      var l = ja, o = ln;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = vr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = cl++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Zm = {
    readContext: Lt,
    useCallback: uu,
    useContext: Lt,
    useEffect: To,
    useImperativeHandle: lu,
    useInsertionEffect: qs,
    useLayoutEffect: Ks,
    useMemo: Mi,
    useReducer: Co,
    useRef: Ws,
    useState: function() {
      return Co(pl);
    },
    useDebugValue: Zs,
    useDeferredValue: function(n) {
      var r = Zn();
      return Jn(r, z.memoizedState, n);
    },
    useTransition: function() {
      var n = Co(pl)[0], r = Zn().memoizedState;
      return [n, r];
    },
    useMutableSource: js,
    useSyncExternalStore: Bs,
    useId: lt,
    unstable_isNewReconciler: !1
  }, qf = { readContext: Lt, useCallback: uu, useContext: Lt, useEffect: To, useImperativeHandle: lu, useInsertionEffect: qs, useLayoutEffect: Ks, useMemo: Mi, useReducer: Eo, useRef: Ws, useState: function() {
    return Eo(pl);
  }, useDebugValue: Zs, useDeferredValue: function(n) {
    var r = Zn();
    return z === null ? r.memoizedState = n : Jn(r, z.memoizedState, n);
  }, useTransition: function() {
    var n = Eo(pl)[0], r = Zn().memoizedState;
    return [n, r];
  }, useMutableSource: js, useSyncExternalStore: Bs, useId: lt, unstable_isNewReconciler: !1 };
  function su(n, r) {
    try {
      var l = "", o = r;
      do
        l += li(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function xo(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function nc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jm = typeof WeakMap == "function" ? WeakMap : Map;
  function Dv(n, r, l) {
    l = Ya(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      sc || (sc = !0, Cl = o), nc(n, r);
    }, l;
  }
  function wo(n, r, l) {
    l = Ya(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        nc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      nc(n, r), typeof o != "function" && (Ea === null ? Ea = /* @__PURE__ */ new Set([this]) : Ea.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function kv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Jm();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = ly.bind(null, n, r, l), r.then(n, n));
  }
  function Kf(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Zf(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ya(-1, 1), r.tag = 2, wi(l, r, 1))), l.lanes |= 1), n);
  }
  var ey = st.ReactCurrentOwner, Ft = !1;
  function $t(n, r, l, o) {
    r.child = n === null ? xv(r, null, l, o) : au(r, n.child, l, o);
  }
  function _i(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Y(r, c), o = bi(n, r, l, o, d, c), l = dl(), n !== null && !Ft ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, on(n, r, c)) : (ft && l && bs(r), r.flags |= 1, $t(n, r, o, c), r.child);
  }
  function rc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !yd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, er(n, r, d, o, c)) : (n = hc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : io, l(h, o) && n.ref === r.ref)
        return on(n, r, c);
    }
    return r.flags |= 1, n = zi(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function er(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (io(d, o) && n.ref === r.ref)
        if (Ft = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Ft = !0);
        else
          return r.lanes = n.lanes, on(n, r, c);
    }
    return cu(n, r, l, o, c);
  }
  function ml(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ie(mu, hr), hr |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ie(mu, hr), hr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Ie(mu, hr), hr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ie(mu, hr), hr |= o;
    return $t(n, r, c, l), r.child;
  }
  function ke(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function cu(n, r, l, o, c) {
    var d = ht(l) ? Gn : Se.current;
    return d = Lr(r, d), Y(r, c), l = bi(n, r, l, o, d, c), o = dl(), n !== null && !Ft ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, on(n, r, c)) : (ft && o && bs(r), r.flags |= 1, $t(n, r, l, c), r.child);
  }
  function Jf(n, r, l, o, c) {
    if (ht(l)) {
      var d = !0;
      ks(r);
    } else
      d = !1;
    if (Y(r, c), r.stateNode === null)
      Rn(n, r), Cv(r, l, o), As(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, _ = l.contextType;
      typeof _ == "object" && _ !== null ? _ = Lt(_) : (_ = ht(l) ? Gn : Se.current, _ = Lr(r, _));
      var H = l.getDerivedStateFromProps, F = typeof H == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      F || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== _) && Ev(r, h, o, _), xi = !1;
      var A = r.memoizedState;
      h.state = A, Di(r, o, h, c), C = r.memoizedState, S !== o || A !== C || kt.current || xi ? (typeof H == "function" && (If(r, l, H, o), C = r.memoizedState), (S = xi || Sv(r, l, S, o, A, C, _)) ? (F || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = _, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, Pt(n, r), S = r.memoizedProps, _ = r.type === r.elementType ? S : pr(r.type, S), h.props = _, F = r.pendingProps, A = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = Lt(C) : (C = ht(l) ? Gn : Se.current, C = Lr(r, C));
      var G = l.getDerivedStateFromProps;
      (H = typeof G == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== F || A !== C) && Ev(r, h, o, C), xi = !1, A = r.memoizedState, h.state = A, Di(r, o, h, c);
      var J = r.memoizedState;
      S !== F || A !== J || kt.current || xi ? (typeof G == "function" && (If(r, l, G, o), J = r.memoizedState), (_ = xi || Sv(r, l, _, o, A, J, C) || !1) ? (H || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, J, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, J, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && A === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && A === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = J), h.props = o, h.state = J, h.context = C, o = _) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && A === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && A === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return bv(n, r, l, o, d, c);
  }
  function bv(n, r, l, o, c, d) {
    ke(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h)
      return c && pv(r, l, !1), on(n, r, d);
    o = r.stateNode, ey.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = au(r, n.child, null, d), r.child = au(r, null, S, d)) : $t(n, r, S, d), r.memoizedState = o.state, c && pv(r, l, !0), r.child;
  }
  function Mv(n) {
    var r = n.stateNode;
    r.pendingContext ? Ci(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ci(n, r.context, !1), Gf(n, r.containerInfo);
  }
  function ac(n, r, l, o, c) {
    return gt(), jf(c), r.flags |= 256, $t(n, r, l, o), r.child;
  }
  var yl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ed(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function td(n, r, l) {
    var o = r.pendingProps, c = pe.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ie(pe, c & 1), n === null)
      return _s(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Uo(h, o, 0, null), n = wl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = ed(l), r.memoizedState = yl, n) : nd(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null))
      return ty(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = zi(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = zi(S, d) : (d = wl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? ed(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = yl, o;
    }
    return d = n.child, n = d.sibling, o = zi(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function nd(n, r) {
    return r = Uo({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function fu(n, r, l, o) {
    return o !== null && jf(o), au(r, n.child, null, l), n = nd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ty(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = xo(Error(L(422))), fu(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Uo({ mode: "visible", children: o.children }, c, 0, null), d = wl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && au(r, n.child, null, h), r.child.memoizedState = ed(h), r.memoizedState = yl, d);
    if (!(r.mode & 1))
      return fu(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var S = o.dgst;
      return o = S, d = Error(L(419)), o = xo(d, o, void 0), fu(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, Ft || S) {
      if (o = Ct, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ba(n, c), kn(o, n, c, -1));
      }
      return vd(), o = xo(Error(L(421))), fu(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = uy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Kn = ia(c.nextSibling), dr = r, ft = !0, zr = null, n !== null && (qn[Tn++] = ln, qn[Tn++] = ja, qn[Tn++] = Nr, ln = n.id, ja = n.overflow, Nr = r), r = nd(r, o.children), r.flags |= 4096, r);
  }
  function rd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Zt(n.return, r, l);
  }
  function ic(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ad(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if ($t(n, r, o.children, l), o = pe.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && rd(n, l, r);
            else if (n.tag === 19)
              rd(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Ie(pe, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && St(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ic(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && St(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          ic(r, !0, l, null, d);
          break;
        case "together":
          ic(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Rn(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function on(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ia |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(L(153));
    if (r.child !== null) {
      for (n = r.child, l = zi(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = zi(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function $a(n, r, l) {
    switch (r.tag) {
      case 3:
        Mv(r), gt();
        break;
      case 5:
        de(r);
        break;
      case 1:
        ht(r.type) && ks(r);
        break;
      case 4:
        Gf(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ie(ya, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ie(pe, pe.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? td(n, r, l) : (Ie(pe, pe.current & 1), n = on(n, r, l), n !== null ? n.sibling : null);
        Ie(pe, pe.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return ad(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ie(pe, pe.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ml(n, r, l);
    }
    return on(n, r, l);
  }
  var Do, gl, Hr, Qt;
  Do = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, gl = function() {
  }, Hr = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ol(la.current);
      var d = null;
      switch (l) {
        case "input":
          c = $n(n, c), o = $n(n, o), d = [];
          break;
        case "select":
          c = K({}, c, { value: void 0 }), o = K({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Wi(n, c), o = Wi(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ds);
      }
      Cn(l, o);
      var h;
      l = null;
      for (_ in c)
        if (!o.hasOwnProperty(_) && c.hasOwnProperty(_) && c[_] != null)
          if (_ === "style") {
            var S = c[_];
            for (h in S)
              S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
          } else
            _ !== "dangerouslySetInnerHTML" && _ !== "children" && _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && _ !== "autoFocus" && (_e.hasOwnProperty(_) ? d || (d = []) : (d = d || []).push(_, null));
      for (_ in o) {
        var C = o[_];
        if (S = c != null ? c[_] : void 0, o.hasOwnProperty(_) && C !== S && (C != null || S != null))
          if (_ === "style")
            if (S) {
              for (h in S)
                !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
              for (h in C)
                C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
            } else
              l || (d || (d = []), d.push(
                _,
                l
              )), l = C;
          else
            _ === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(_, C)) : _ === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(_, "" + C) : _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && (_e.hasOwnProperty(_) ? (C != null && _ === "onScroll" && it("scroll", n), d || S === C || (d = [])) : (d = d || []).push(_, C));
      }
      l && (d = d || []).push("style", l);
      var _ = d;
      (r.updateQueue = _) && (r.flags |= 4);
    }
  }, Qt = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ko(n, r) {
    if (!ft)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function xn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ny(n, r, l) {
    var o = r.pendingProps;
    switch (Ff(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return xn(r), null;
      case 1:
        return ht(r.type) && Or(), xn(r), null;
      case 3:
        return o = r.stateNode, ki(), Qe(kt), Qe(Se), Fs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ls(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, zr !== null && (zo(zr), zr = null))), gl(n, r), xn(r), null;
      case 5:
        be(r);
        var c = ol(iu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Hr(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(L(166));
            return xn(r), null;
          }
          if (n = ol(la.current), Ls(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[ha] = r, o[il] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                it("cancel", o), it("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                it("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < so.length; c++)
                  it(so[c], o);
                break;
              case "source":
                it("error", o);
                break;
              case "img":
              case "image":
              case "link":
                it(
                  "error",
                  o
                ), it("load", o);
                break;
              case "details":
                it("toggle", o);
                break;
              case "input":
                xr(o, d), it("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, it("invalid", o);
                break;
              case "textarea":
                Kr(o, d), it("invalid", o);
            }
            Cn(l, d), c = null;
            for (var h in d)
              if (d.hasOwnProperty(h)) {
                var S = d[h];
                h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && ws(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && ws(
                  o.textContent,
                  S,
                  n
                ), c = ["children", "" + S]) : _e.hasOwnProperty(h) && S != null && h === "onScroll" && it("scroll", o);
              }
            switch (l) {
              case "input":
                Rr(o), _a(o, d, !0);
                break;
              case "textarea":
                Rr(o), da(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ds);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ci(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[ha] = r, n[il] = o, Do(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = Bt(l, o), l) {
                case "dialog":
                  it("cancel", n), it("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  it("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < so.length; c++)
                    it(so[c], n);
                  c = o;
                  break;
                case "source":
                  it("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  it(
                    "error",
                    n
                  ), it("load", n), c = o;
                  break;
                case "details":
                  it("toggle", n), c = o;
                  break;
                case "input":
                  xr(n, o), c = $n(n, o), it("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = K({}, o, { value: void 0 }), it("invalid", n);
                  break;
                case "textarea":
                  Kr(n, o), c = Wi(n, o), it("invalid", n);
                  break;
                default:
                  c = o;
              }
              Cn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === "style" ? rt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Pu(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && fi(n, C) : typeof C == "number" && fi(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (_e.hasOwnProperty(d) ? C != null && d === "onScroll" && it("scroll", n) : C != null && Ae(n, d, C, h));
                }
              switch (l) {
                case "input":
                  Rr(n), _a(n, o, !1);
                  break;
                case "textarea":
                  Rr(n), da(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Xr(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? oi(n, !!o.multiple, d, !1) : o.defaultValue != null && oi(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ds);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return xn(r), null;
      case 6:
        if (n && r.stateNode != null)
          Qt(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(L(166));
          if (l = ol(iu.current), ol(la.current), Ls(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[ha] = r, (d = o.nodeValue !== l) && (n = dr, n !== null))
              switch (n.tag) {
                case 3:
                  ws(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && ws(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[ha] = r, r.stateNode = o;
        }
        return xn(r), null;
      case 13:
        if (Qe(pe), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (ft && Kn !== null && r.mode & 1 && !(r.flags & 128))
            mv(), gt(), r.flags |= 98560, d = !1;
          else if (d = Ls(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(L(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(L(317));
              d[ha] = r;
            } else
              gt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            xn(r), d = !1;
          } else
            zr !== null && (zo(zr), zr = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || pe.current & 1 ? Gt === 0 && (Gt = 3) : vd())), r.updateQueue !== null && (r.flags |= 4), xn(r), null);
      case 4:
        return ki(), gl(n, r), n === null && eu(r.stateNode.containerInfo), xn(r), null;
      case 10:
        return Ri(r.type._context), xn(r), null;
      case 17:
        return ht(r.type) && Or(), xn(r), null;
      case 19:
        if (Qe(pe), d = r.memoizedState, d === null)
          return xn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null)
          if (o)
            ko(d, !1);
          else {
            if (Gt !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (h = St(n), h !== null) {
                  for (r.flags |= 128, ko(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Ie(pe, pe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Dt() > gu && (r.flags |= 128, o = !0, ko(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = St(h), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ko(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !ft)
                return xn(r), null;
            } else
              2 * Dt() - d.renderingStartTime > gu && l !== 1073741824 && (r.flags |= 128, o = !0, ko(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Dt(), r.sibling = null, l = pe.current, Ie(pe, o ? l & 1 | 2 : l & 1), r) : (xn(r), null);
      case 22:
      case 23:
        return pd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? hr & 1073741824 && (xn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(L(156, r.tag));
  }
  function id(n, r) {
    switch (Ff(r), r.tag) {
      case 1:
        return ht(r.type) && Or(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ki(), Qe(kt), Qe(Se), Fs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return be(r), null;
      case 13:
        if (Qe(pe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(L(340));
          gt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Qe(pe), null;
      case 4:
        return ki(), null;
      case 10:
        return Ri(r.type._context), null;
      case 22:
      case 23:
        return pd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var bo = !1, It = !1, _v = typeof WeakSet == "function" ? WeakSet : Set, Z = null;
  function du(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Mt(n, r, o);
        }
      else
        l.current = null;
  }
  function Mo(n, r, l) {
    try {
      l();
    } catch (o) {
      Mt(n, r, o);
    }
  }
  var Lv = !1;
  function Ov(n, r) {
    if (_f = Zi, n = Cs(), Aa(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var h = 0, S = -1, C = -1, _ = 0, H = 0, F = n, A = null;
            t:
              for (; ; ) {
                for (var G; F !== l || c !== 0 && F.nodeType !== 3 || (S = h + c), F !== d || o !== 0 && F.nodeType !== 3 || (C = h + o), F.nodeType === 3 && (h += F.nodeValue.length), (G = F.firstChild) !== null; )
                  A = F, F = G;
                for (; ; ) {
                  if (F === n)
                    break t;
                  if (A === l && ++_ === c && (S = h), A === d && ++H === o && (C = h), (G = F.nextSibling) !== null)
                    break;
                  F = A, A = F.parentNode;
                }
                F = G;
              }
            l = S === -1 || C === -1 ? null : { start: S, end: C };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (rl = { focusedElem: n, selectionRange: l }, Zi = !1, Z = r; Z !== null; )
      if (r = Z, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Z = n;
      else
        for (; Z !== null; ) {
          r = Z;
          try {
            var J = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (J !== null) {
                    var ne = J.memoizedProps, Ot = J.memoizedState, x = r.stateNode, T = x.getSnapshotBeforeUpdate(r.elementType === r.type ? ne : pr(r.type, ne), Ot);
                    x.__reactInternalSnapshotBeforeUpdate = T;
                  }
                  break;
                case 3:
                  var k = r.stateNode.containerInfo;
                  k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(L(163));
              }
          } catch (B) {
            Mt(r, r.return, B);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Z = n;
            break;
          }
          Z = r.return;
        }
    return J = Lv, Lv = !1, J;
  }
  function _o(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Mo(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Lo(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function ld(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function ud(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ud(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ha], delete r[il], delete r[Nf], delete r[Xm], delete r[zf])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Nv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function lc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Nv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function pu(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ds));
    else if (o !== 4 && (n = n.child, n !== null))
      for (pu(n, r, l), n = n.sibling; n !== null; )
        pu(n, r, l), n = n.sibling;
  }
  function Sa(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Sa(n, r, l), n = n.sibling; n !== null; )
        Sa(n, r, l), n = n.sibling;
  }
  var mt = null, Jt = !1;
  function Fr(n, r, l) {
    for (l = l.child; l !== null; )
      vu(n, r, l), l = l.sibling;
  }
  function vu(n, r, l) {
    if (ea && typeof ea.onCommitFiberUnmount == "function")
      try {
        ea.onCommitFiberUnmount(Gu, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        It || du(l, r);
      case 6:
        var o = mt, c = Jt;
        mt = null, Fr(n, r, l), mt = o, Jt = c, mt !== null && (Jt ? (n = mt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : mt.removeChild(l.stateNode));
        break;
      case 18:
        mt !== null && (Jt ? (n = mt, l = l.stateNode, n.nodeType === 8 ? yi(n.parentNode, l) : n.nodeType === 1 && yi(n, l), Zu(n)) : yi(mt, l.stateNode));
        break;
      case 4:
        o = mt, c = Jt, mt = l.stateNode.containerInfo, Jt = !0, Fr(n, r, l), mt = o, Jt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!It && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && Mo(l, r, h), c = c.next;
          } while (c !== o);
        }
        Fr(n, r, l);
        break;
      case 1:
        if (!It && (du(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (S) {
            Mt(l, r, S);
          }
        Fr(n, r, l);
        break;
      case 21:
        Fr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (It = (o = It) || l.memoizedState !== null, Fr(n, r, l), It = o) : Fr(n, r, l);
        break;
      default:
        Fr(n, r, l);
    }
  }
  function Qa(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new _v()), r.forEach(function(o) {
        var c = oy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ua(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, h = r, S = h;
          e:
            for (; S !== null; ) {
              switch (S.tag) {
                case 5:
                  mt = S.stateNode, Jt = !1;
                  break e;
                case 3:
                  mt = S.stateNode.containerInfo, Jt = !0;
                  break e;
                case 4:
                  mt = S.stateNode.containerInfo, Jt = !0;
                  break e;
              }
              S = S.return;
            }
          if (mt === null)
            throw Error(L(160));
          vu(d, h, c), mt = null, Jt = !1;
          var C = c.alternate;
          C !== null && (C.return = null), c.return = null;
        } catch (_) {
          Mt(c, r, _);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        zv(r, n), r = r.sibling;
  }
  function zv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ua(r, n), Ca(n), o & 4) {
          try {
            _o(3, n, n.return), Lo(3, n);
          } catch (ne) {
            Mt(n, n.return, ne);
          }
          try {
            _o(5, n, n.return);
          } catch (ne) {
            Mt(n, n.return, ne);
          }
        }
        break;
      case 1:
        ua(r, n), Ca(n), o & 512 && l !== null && du(l, l.return);
        break;
      case 5:
        if (ua(r, n), Ca(n), o & 512 && l !== null && du(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            fi(c, "");
          } catch (ne) {
            Mt(n, n.return, ne);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null)
            try {
              S === "input" && d.type === "radio" && d.name != null && qr(c, d), Bt(S, h);
              var _ = Bt(S, d);
              for (h = 0; h < C.length; h += 2) {
                var H = C[h], F = C[h + 1];
                H === "style" ? rt(c, F) : H === "dangerouslySetInnerHTML" ? Pu(c, F) : H === "children" ? fi(c, F) : Ae(c, H, F, _);
              }
              switch (S) {
                case "input":
                  or(c, d);
                  break;
                case "textarea":
                  si(c, d);
                  break;
                case "select":
                  var A = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var G = d.value;
                  G != null ? oi(c, !!d.multiple, G, !1) : A !== !!d.multiple && (d.defaultValue != null ? oi(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : oi(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[il] = d;
            } catch (ne) {
              Mt(n, n.return, ne);
            }
        }
        break;
      case 6:
        if (ua(r, n), Ca(n), o & 4) {
          if (n.stateNode === null)
            throw Error(L(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ne) {
            Mt(n, n.return, ne);
          }
        }
        break;
      case 3:
        if (ua(r, n), Ca(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Zu(r.containerInfo);
          } catch (ne) {
            Mt(n, n.return, ne);
          }
        break;
      case 4:
        ua(r, n), Ca(n);
        break;
      case 13:
        ua(r, n), Ca(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (cd = Dt())), o & 4 && Qa(n);
        break;
      case 22:
        if (H = l !== null && l.memoizedState !== null, n.mode & 1 ? (It = (_ = It) || H, ua(r, n), It = _) : ua(r, n), Ca(n), o & 8192) {
          if (_ = n.memoizedState !== null, (n.stateNode.isHidden = _) && !H && n.mode & 1)
            for (Z = n, H = n.child; H !== null; ) {
              for (F = Z = H; Z !== null; ) {
                switch (A = Z, G = A.child, A.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    _o(4, A, A.return);
                    break;
                  case 1:
                    du(A, A.return);
                    var J = A.stateNode;
                    if (typeof J.componentWillUnmount == "function") {
                      o = A, l = A.return;
                      try {
                        r = o, J.props = r.memoizedProps, J.state = r.memoizedState, J.componentWillUnmount();
                      } catch (ne) {
                        Mt(o, l, ne);
                      }
                    }
                    break;
                  case 5:
                    du(A, A.return);
                    break;
                  case 22:
                    if (A.memoizedState !== null) {
                      od(F);
                      continue;
                    }
                }
                G !== null ? (G.return = A, Z = G) : od(F);
              }
              H = H.sibling;
            }
          e:
            for (H = null, F = n; ; ) {
              if (F.tag === 5) {
                if (H === null) {
                  H = F;
                  try {
                    c = F.stateNode, _ ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = F.stateNode, C = F.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Oe("display", h));
                  } catch (ne) {
                    Mt(n, n.return, ne);
                  }
                }
              } else if (F.tag === 6) {
                if (H === null)
                  try {
                    F.stateNode.nodeValue = _ ? "" : F.memoizedProps;
                  } catch (ne) {
                    Mt(n, n.return, ne);
                  }
              } else if ((F.tag !== 22 && F.tag !== 23 || F.memoizedState === null || F === n) && F.child !== null) {
                F.child.return = F, F = F.child;
                continue;
              }
              if (F === n)
                break e;
              for (; F.sibling === null; ) {
                if (F.return === null || F.return === n)
                  break e;
                H === F && (H = null), F = F.return;
              }
              H === F && (H = null), F.sibling.return = F.return, F = F.sibling;
            }
        }
        break;
      case 19:
        ua(r, n), Ca(n), o & 4 && Qa(n);
        break;
      case 21:
        break;
      default:
        ua(
          r,
          n
        ), Ca(n);
    }
  }
  function Ca(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Nv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(L(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (fi(c, ""), o.flags &= -33);
            var d = lc(n);
            Sa(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = lc(n);
            pu(n, S, h);
            break;
          default:
            throw Error(L(161));
        }
      } catch (C) {
        Mt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Uv(n, r, l) {
    Z = n, hu(n);
  }
  function hu(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Z !== null; ) {
      var c = Z, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || bo;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || It;
          S = bo;
          var _ = It;
          if (bo = h, (It = C) && !_)
            for (Z = c; Z !== null; )
              h = Z, C = h.child, h.tag === 22 && h.memoizedState !== null ? Hv(c) : C !== null ? (C.return = h, Z = C) : Hv(c);
          for (; d !== null; )
            Z = d, hu(d), d = d.sibling;
          Z = c, bo = S, It = _;
        }
        Av(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Z = d) : Av(n);
    }
  }
  function Av(n) {
    for (; Z !== null; ) {
      var r = Z;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                It || Lo(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !It)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : pr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && ul(r, d, o);
                break;
              case 3:
                var h = r.updateQueue;
                if (h !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  ul(r, h, l);
                }
                break;
              case 5:
                var S = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = S;
                  var C = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      C.autoFocus && l.focus();
                      break;
                    case "img":
                      C.src && (l.src = C.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var _ = r.alternate;
                  if (_ !== null) {
                    var H = _.memoizedState;
                    if (H !== null) {
                      var F = H.dehydrated;
                      F !== null && Zu(F);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(L(163));
            }
          It || r.flags & 512 && ld(r);
        } catch (A) {
          Mt(r, r.return, A);
        }
      }
      if (r === n) {
        Z = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Z = l;
        break;
      }
      Z = r.return;
    }
  }
  function od(n) {
    for (; Z !== null; ) {
      var r = Z;
      if (r === n) {
        Z = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Z = l;
        break;
      }
      Z = r.return;
    }
  }
  function Hv(n) {
    for (; Z !== null; ) {
      var r = Z;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Lo(4, r);
            } catch (C) {
              Mt(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                Mt(r, c, C);
              }
            }
            var d = r.return;
            try {
              ld(r);
            } catch (C) {
              Mt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              ld(r);
            } catch (C) {
              Mt(r, h, C);
            }
        }
      } catch (C) {
        Mt(r, r.return, C);
      }
      if (r === n) {
        Z = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, Z = S;
        break;
      }
      Z = r.return;
    }
  }
  var uc = Math.ceil, Oo = st.ReactCurrentDispatcher, sd = st.ReactCurrentOwner, wn = st.ReactCurrentBatchConfig, ze = 0, Ct = null, bt = null, en = 0, hr = 0, mu = De(0), Gt = 0, No = null, Ia = 0, oc = 0, yu = 0, Sl = null, On = null, cd = 0, gu = 1 / 0, Ga = null, sc = !1, Cl = null, Ea = null, Li = !1, Oi = null, cc = 0, Su = 0, fc = null, El = -1, Tl = 0;
  function Dn() {
    return ze & 6 ? Dt() : El !== -1 ? El : El = Dt();
  }
  function Vt(n) {
    return n.mode & 1 ? ze & 2 && en !== 0 ? en & -en : Os.transition !== null ? (Tl === 0 && (Tl = os()), Tl) : (n = Xe, n !== 0 || (n = window.event, n = n === void 0 ? 16 : cf(n.type)), n) : 1;
  }
  function kn(n, r, l, o) {
    if (50 < Su)
      throw Su = 0, fc = null, Error(L(185));
    Ki(n, l, o), (!(ze & 2) || n !== Ct) && (n === Ct && (!(ze & 2) && (oc |= l), Gt === 4 && Vr(n, en)), bn(n, o), l === 1 && ze === 0 && !(r.mode & 1) && (gu = Dt() + 500, Kt && Wn()));
  }
  function bn(n, r) {
    var l = n.callbackNode;
    us(n, r);
    var o = ta(n, n === Ct ? en : 0);
    if (o === 0)
      l !== null && xp(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && xp(l), r === 1)
        n.tag === 0 ? Af(Fv.bind(null, n)) : Uf(Fv.bind(null, n)), Of(function() {
          !(ze & 6) && Wn();
        }), l = null;
      else {
        switch (uf(o)) {
          case 1:
            l = Oa;
            break;
          case 4:
            l = Ne;
            break;
          case 16:
            l = di;
            break;
          case 536870912:
            l = nf;
            break;
          default:
            l = di;
        }
        l = md(l, Cu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Cu(n, r) {
    if (El = -1, Tl = 0, ze & 6)
      throw Error(L(327));
    var l = n.callbackNode;
    if (Tu() && n.callbackNode !== l)
      return null;
    var o = ta(n, n === Ct ? en : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = pc(n, o);
    else {
      r = o;
      var c = ze;
      ze |= 2;
      var d = dc();
      (Ct !== n || en !== r) && (Ga = null, gu = Dt() + 500, Rl(n, r));
      do
        try {
          ay();
          break;
        } catch (S) {
          Vv(n, S);
        }
      while (!0);
      Yf(), Oo.current = d, ze = c, bt !== null ? r = 0 : (Ct = null, en = 0, r = Gt);
    }
    if (r !== 0) {
      if (r === 2 && (c = af(n), c !== 0 && (o = c, r = fd(n, c))), r === 1)
        throw l = No, Rl(n, 0), Vr(n, o), bn(n, Dt()), l;
      if (r === 6)
        Vr(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !dd(c) && (r = pc(n, o), r === 2 && (d = af(n), d !== 0 && (o = d, r = fd(n, d))), r === 1))
          throw l = No, Rl(n, 0), Vr(n, o), bn(n, Dt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(L(345));
          case 2:
            xl(n, On, Ga);
            break;
          case 3:
            if (Vr(n, o), (o & 130023424) === o && (r = cd + 500 - Dt(), 10 < r)) {
              if (ta(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Dn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = al(xl.bind(null, n, On, Ga), r);
              break;
            }
            xl(n, On, Ga);
            break;
          case 4:
            if (Vr(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - Dr(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = Dt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * uc(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = al(xl.bind(null, n, On, Ga), o);
              break;
            }
            xl(n, On, Ga);
            break;
          case 5:
            xl(n, On, Ga);
            break;
          default:
            throw Error(L(329));
        }
      }
    }
    return bn(n, Dt()), n.callbackNode === l ? Cu.bind(null, n) : null;
  }
  function fd(n, r) {
    var l = Sl;
    return n.current.memoizedState.isDehydrated && (Rl(n, r).flags |= 256), n = pc(n, r), n !== 2 && (r = On, On = l, r !== null && zo(r)), n;
  }
  function zo(n) {
    On === null ? On = n : On.push.apply(On, n);
  }
  function dd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!Mr(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Vr(n, r) {
    for (r &= ~yu, r &= ~oc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Fv(n) {
    if (ze & 6)
      throw Error(L(327));
    Tu();
    var r = ta(n, 0);
    if (!(r & 1))
      return bn(n, Dt()), null;
    var l = pc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = af(n);
      o !== 0 && (r = o, l = fd(n, o));
    }
    if (l === 1)
      throw l = No, Rl(n, 0), Vr(n, r), bn(n, Dt()), l;
    if (l === 6)
      throw Error(L(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, xl(n, On, Ga), bn(n, Dt()), null;
  }
  function Eu(n, r) {
    var l = ze;
    ze |= 1;
    try {
      return n(r);
    } finally {
      ze = l, ze === 0 && (gu = Dt() + 500, Kt && Wn());
    }
  }
  function Ni(n) {
    Oi !== null && Oi.tag === 0 && !(ze & 6) && Tu();
    var r = ze;
    ze |= 1;
    var l = wn.transition, o = Xe;
    try {
      if (wn.transition = null, Xe = 1, n)
        return n();
    } finally {
      Xe = o, wn.transition = l, ze = r, !(ze & 6) && Wn();
    }
  }
  function pd() {
    hr = mu.current, Qe(mu);
  }
  function Rl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, dv(l)), bt !== null)
      for (l = bt.return; l !== null; ) {
        var o = l;
        switch (Ff(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Or();
            break;
          case 3:
            ki(), Qe(kt), Qe(Se), Fs();
            break;
          case 5:
            be(o);
            break;
          case 4:
            ki();
            break;
          case 13:
            Qe(pe);
            break;
          case 19:
            Qe(pe);
            break;
          case 10:
            Ri(o.type._context);
            break;
          case 22:
          case 23:
            pd();
        }
        l = l.return;
      }
    if (Ct = n, bt = n = zi(n.current, null), en = hr = r, Gt = 0, No = null, yu = oc = Ia = 0, On = Sl = null, un !== null) {
      for (r = 0; r < un.length; r++)
        if (l = un[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var h = d.next;
            d.next = c, o.next = h;
          }
          l.pending = o;
        }
      un = null;
    }
    return n;
  }
  function Vv(n, r) {
    do {
      var l = bt;
      try {
        if (Yf(), Vs.current = tc, he) {
          for (var o = dt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          he = !1;
        }
        if (sl = 0, Ve = z = dt = null, ga = !1, vr = 0, sd.current = null, l === null || l.return === null) {
          Gt = 1, No = r, bt = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = en, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var _ = C, H = S, F = H.tag;
            if (!(H.mode & 1) && (F === 0 || F === 11 || F === 15)) {
              var A = H.alternate;
              A ? (H.updateQueue = A.updateQueue, H.memoizedState = A.memoizedState, H.lanes = A.lanes) : (H.updateQueue = null, H.memoizedState = null);
            }
            var G = Kf(h);
            if (G !== null) {
              G.flags &= -257, Zf(G, h, S, d, r), G.mode & 1 && kv(d, _, r), r = G, C = _;
              var J = r.updateQueue;
              if (J === null) {
                var ne = /* @__PURE__ */ new Set();
                ne.add(C), r.updateQueue = ne;
              } else
                J.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                kv(d, _, r), vd();
                break e;
              }
              C = Error(L(426));
            }
          } else if (ft && S.mode & 1) {
            var Ot = Kf(h);
            if (Ot !== null) {
              !(Ot.flags & 65536) && (Ot.flags |= 256), Zf(Ot, h, S, d, r), jf(su(C, S));
              break e;
            }
          }
          d = C = su(C, S), Gt !== 4 && (Gt = 2), Sl === null ? Sl = [d] : Sl.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var x = Dv(d, C, r);
                Qf(d, x);
                break e;
              case 1:
                S = C;
                var T = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Ea === null || !Ea.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var B = wo(d, S, r);
                  Qf(d, B);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        hd(l);
      } catch (re) {
        r = re, bt === l && l !== null && (bt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function dc() {
    var n = Oo.current;
    return Oo.current = tc, n === null ? tc : n;
  }
  function vd() {
    (Gt === 0 || Gt === 3 || Gt === 2) && (Gt = 4), Ct === null || !(Ia & 268435455) && !(oc & 268435455) || Vr(Ct, en);
  }
  function pc(n, r) {
    var l = ze;
    ze |= 2;
    var o = dc();
    (Ct !== n || en !== r) && (Ga = null, Rl(n, r));
    do
      try {
        ry();
        break;
      } catch (c) {
        Vv(n, c);
      }
    while (!0);
    if (Yf(), ze = l, Oo.current = o, bt !== null)
      throw Error(L(261));
    return Ct = null, en = 0, Gt;
  }
  function ry() {
    for (; bt !== null; )
      jv(bt);
  }
  function ay() {
    for (; bt !== null && !km(); )
      jv(bt);
  }
  function jv(n) {
    var r = Yv(n.alternate, n, hr);
    n.memoizedProps = n.pendingProps, r === null ? hd(n) : bt = r, sd.current = null;
  }
  function hd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = id(l, r), l !== null) {
          l.flags &= 32767, bt = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Gt = 6, bt = null;
          return;
        }
      } else if (l = ny(l, r, hr), l !== null) {
        bt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        bt = r;
        return;
      }
      bt = r = n;
    } while (r !== null);
    Gt === 0 && (Gt = 5);
  }
  function xl(n, r, l) {
    var o = Xe, c = wn.transition;
    try {
      wn.transition = null, Xe = 1, iy(n, r, l, o);
    } finally {
      wn.transition = c, Xe = o;
    }
    return null;
  }
  function iy(n, r, l, o) {
    do
      Tu();
    while (Oi !== null);
    if (ze & 6)
      throw Error(L(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(L(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Lm(n, d), n === Ct && (bt = Ct = null, en = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Li || (Li = !0, md(di, function() {
      return Tu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = wn.transition, wn.transition = null;
      var h = Xe;
      Xe = 1;
      var S = ze;
      ze |= 4, sd.current = null, Ov(n, l), zv(l, n), Es(rl), Zi = !!_f, rl = _f = null, n.current = l, Uv(l), bm(), ze = S, Xe = h, wn.transition = d;
    } else
      n.current = l;
    if (Li && (Li = !1, Oi = n, cc = c), d = n.pendingLanes, d === 0 && (Ea = null), Dp(l.stateNode), bn(n, Dt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (sc)
      throw sc = !1, n = Cl, Cl = null, n;
    return cc & 1 && n.tag !== 0 && Tu(), d = n.pendingLanes, d & 1 ? n === fc ? Su++ : (Su = 0, fc = n) : Su = 0, Wn(), null;
  }
  function Tu() {
    if (Oi !== null) {
      var n = uf(cc), r = wn.transition, l = Xe;
      try {
        if (wn.transition = null, Xe = 16 > n ? 16 : n, Oi === null)
          var o = !1;
        else {
          if (n = Oi, Oi = null, cc = 0, ze & 6)
            throw Error(L(331));
          var c = ze;
          for (ze |= 4, Z = n.current; Z !== null; ) {
            var d = Z, h = d.child;
            if (Z.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var _ = S[C];
                  for (Z = _; Z !== null; ) {
                    var H = Z;
                    switch (H.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(8, H, d);
                    }
                    var F = H.child;
                    if (F !== null)
                      F.return = H, Z = F;
                    else
                      for (; Z !== null; ) {
                        H = Z;
                        var A = H.sibling, G = H.return;
                        if (ud(H), H === _) {
                          Z = null;
                          break;
                        }
                        if (A !== null) {
                          A.return = G, Z = A;
                          break;
                        }
                        Z = G;
                      }
                  }
                }
                var J = d.alternate;
                if (J !== null) {
                  var ne = J.child;
                  if (ne !== null) {
                    J.child = null;
                    do {
                      var Ot = ne.sibling;
                      ne.sibling = null, ne = Ot;
                    } while (ne !== null);
                  }
                }
                Z = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null)
              h.return = d, Z = h;
            else
              e:
                for (; Z !== null; ) {
                  if (d = Z, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(9, d, d.return);
                    }
                  var x = d.sibling;
                  if (x !== null) {
                    x.return = d.return, Z = x;
                    break e;
                  }
                  Z = d.return;
                }
          }
          var T = n.current;
          for (Z = T; Z !== null; ) {
            h = Z;
            var k = h.child;
            if (h.subtreeFlags & 2064 && k !== null)
              k.return = h, Z = k;
            else
              e:
                for (h = T; Z !== null; ) {
                  if (S = Z, S.flags & 2048)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Lo(9, S);
                      }
                    } catch (re) {
                      Mt(S, S.return, re);
                    }
                  if (S === h) {
                    Z = null;
                    break e;
                  }
                  var B = S.sibling;
                  if (B !== null) {
                    B.return = S.return, Z = B;
                    break e;
                  }
                  Z = S.return;
                }
          }
          if (ze = c, Wn(), ea && typeof ea.onPostCommitFiberRoot == "function")
            try {
              ea.onPostCommitFiberRoot(Gu, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        Xe = l, wn.transition = r;
      }
    }
    return !1;
  }
  function Bv(n, r, l) {
    r = su(l, r), r = Dv(n, r, 1), n = wi(n, r, 1), r = Dn(), n !== null && (Ki(n, 1, r), bn(n, r));
  }
  function Mt(n, r, l) {
    if (n.tag === 3)
      Bv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Bv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ea === null || !Ea.has(o))) {
            n = su(l, n), n = wo(r, n, 1), r = wi(r, n, 1), n = Dn(), r !== null && (Ki(r, 1, n), bn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function ly(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Dn(), n.pingedLanes |= n.suspendedLanes & l, Ct === n && (en & l) === l && (Gt === 4 || Gt === 3 && (en & 130023424) === en && 500 > Dt() - cd ? Rl(n, 0) : yu |= l), bn(n, r);
  }
  function vc(n, r) {
    r === 0 && (n.mode & 1 ? (r = $l, $l <<= 1, !($l & 130023424) && ($l = 4194304)) : r = 1);
    var l = Dn();
    n = Ba(n, r), n !== null && (Ki(n, r, l), bn(n, l));
  }
  function uy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), vc(n, l);
  }
  function oy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(L(314));
    }
    o !== null && o.delete(r), vc(n, l);
  }
  var Yv;
  Yv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || kt.current)
        Ft = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Ft = !1, $a(n, r, l);
        Ft = !!(n.flags & 131072);
      }
    else
      Ft = !1, ft && r.flags & 1048576 && Hf(r, nu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Rn(n, r), n = r.pendingProps;
        var c = Lr(r, Se.current);
        Y(r, l), c = bi(null, r, o, n, c, l);
        var d = dl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, ht(o) ? (d = !0, ks(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, $f(r), c.updater = Us, r.stateNode = c, c._reactInternals = r, As(r, o, n, l), r = bv(null, r, o, !0, d, l)) : (r.tag = 0, ft && d && bs(r), $t(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Rn(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = cy(o), n = pr(o, n), c) {
            case 0:
              r = cu(null, r, o, n, l);
              break e;
            case 1:
              r = Jf(null, r, o, n, l);
              break e;
            case 11:
              r = _i(null, r, o, n, l);
              break e;
            case 14:
              r = rc(null, r, o, pr(o.type, n), l);
              break e;
          }
          throw Error(L(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : pr(o, c), cu(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : pr(o, c), Jf(n, r, o, c, l);
      case 3:
        e: {
          if (Mv(r), n === null)
            throw Error(L(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Pt(n, r), Di(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = su(Error(L(423)), r), r = ac(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = su(Error(L(424)), r), r = ac(n, r, o, l, c);
              break e;
            } else
              for (Kn = ia(r.stateNode.containerInfo.firstChild), dr = r, ft = !0, zr = null, l = xv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (gt(), o === c) {
              r = on(n, r, l);
              break e;
            }
            $t(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return de(r), n === null && _s(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, po(o, c) ? h = null : d !== null && po(o, d) && (r.flags |= 32), ke(n, r), $t(n, r, h, l), r.child;
      case 6:
        return n === null && _s(r), null;
      case 13:
        return td(n, r, l);
      case 4:
        return Gf(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = au(r, null, o, l) : $t(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : pr(o, c), _i(n, r, o, c, l);
      case 7:
        return $t(n, r, r.pendingProps, l), r.child;
      case 8:
        return $t(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return $t(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, Ie(ya, o._currentValue), o._currentValue = h, d !== null)
            if (Mr(d.value, h)) {
              if (d.children === c.children && !kt.current) {
                r = on(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var S = d.dependencies;
                if (S !== null) {
                  h = d.child;
                  for (var C = S.firstContext; C !== null; ) {
                    if (C.context === o) {
                      if (d.tag === 1) {
                        C = Ya(-1, l & -l), C.tag = 2;
                        var _ = d.updateQueue;
                        if (_ !== null) {
                          _ = _.shared;
                          var H = _.pending;
                          H === null ? C.next = C : (C.next = H.next, H.next = C), _.pending = C;
                        }
                      }
                      d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), Zt(
                        d.return,
                        l,
                        r
                      ), S.lanes |= l;
                      break;
                    }
                    C = C.next;
                  }
                } else if (d.tag === 10)
                  h = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (h = d.return, h === null)
                    throw Error(L(341));
                  h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), Zt(h, l, r), h = d.sibling;
                } else
                  h = d.child;
                if (h !== null)
                  h.return = d;
                else
                  for (h = d; h !== null; ) {
                    if (h === r) {
                      h = null;
                      break;
                    }
                    if (d = h.sibling, d !== null) {
                      d.return = h.return, h = d;
                      break;
                    }
                    h = h.return;
                  }
                d = h;
              }
          $t(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Y(r, l), c = Lt(c), o = o(c), r.flags |= 1, $t(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = pr(o, r.pendingProps), c = pr(o.type, c), rc(n, r, o, c, l);
      case 15:
        return er(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : pr(o, c), Rn(n, r), r.tag = 1, ht(o) ? (n = !0, ks(r)) : n = !1, Y(r, l), Cv(r, o, c), As(r, o, c, l), bv(null, r, o, !0, n, l);
      case 19:
        return ad(n, r, l);
      case 22:
        return ml(n, r, l);
    }
    throw Error(L(156, r.tag));
  };
  function md(n, r) {
    return tf(n, r);
  }
  function sy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jr(n, r, l, o) {
    return new sy(n, r, l, o);
  }
  function yd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function cy(n) {
    if (typeof n == "function")
      return yd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Yn)
        return 11;
      if (n === Er)
        return 14;
    }
    return 2;
  }
  function zi(n, r) {
    var l = n.alternate;
    return l === null ? (l = jr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function hc(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function")
      yd(n) && (h = 1);
    else if (typeof n == "string")
      h = 5;
    else
      e:
        switch (n) {
          case Me:
            return wl(l.children, c, d, r);
          case Mn:
            h = 8, c |= 8;
            break;
          case lr:
            return n = jr(12, l, r, c | 2), n.elementType = lr, n.lanes = d, n;
          case Fe:
            return n = jr(13, l, r, c), n.elementType = Fe, n.lanes = d, n;
          case qe:
            return n = jr(19, l, r, c), n.elementType = qe, n.lanes = d, n;
          case Tr:
            return Uo(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case zt:
                  h = 10;
                  break e;
                case ut:
                  h = 9;
                  break e;
                case Yn:
                  h = 11;
                  break e;
                case Er:
                  h = 14;
                  break e;
                case Rt:
                  h = 16, o = null;
                  break e;
              }
            throw Error(L(130, n == null ? n : typeof n, ""));
        }
    return r = jr(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function wl(n, r, l, o) {
    return n = jr(7, n, o, r), n.lanes = l, n;
  }
  function Uo(n, r, l, o) {
    return n = jr(22, n, o, r), n.elementType = Tr, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ao(n, r, l) {
    return n = jr(6, n, null, r), n.lanes = l, n;
  }
  function Dl(n, r, l) {
    return r = jr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function fy(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = lf(0), this.expirationTimes = lf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = lf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function mc(n, r, l, o, c, d, h, S, C) {
    return n = new fy(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = jr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $f(d), n;
  }
  function Pv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: yt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function gd(n) {
    if (!n)
      return ma;
    n = n._reactInternals;
    e: {
      if (va(n) !== n || n.tag !== 1)
        throw Error(L(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (ht(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(L(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (ht(l))
        return mo(n, l, r);
    }
    return r;
  }
  function $v(n, r, l, o, c, d, h, S, C) {
    return n = mc(l, o, !0, n, c, d, h, S, C), n.context = gd(null), l = n.current, o = Dn(), c = Vt(l), d = Ya(o, c), d.callback = r ?? null, wi(l, d, c), n.current.lanes = c, Ki(n, c, o), bn(n, o), n;
  }
  function Ho(n, r, l, o) {
    var c = r.current, d = Dn(), h = Vt(c);
    return l = gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ya(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = wi(c, r, h), n !== null && (kn(n, c, h, d), zs(n, c, h)), h;
  }
  function yc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Qv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Sd(n, r) {
    Qv(n, r), (n = n.alternate) && Qv(n, r);
  }
  function Iv() {
    return null;
  }
  var Cd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function gc(n) {
    this._internalRoot = n;
  }
  Wa.prototype.render = gc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(L(409));
    Ho(n, r, null, null);
  }, Wa.prototype.unmount = gc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ni(function() {
        Ho(null, n, null, null);
      }), r[Va] = null;
    }
  };
  function Wa(n) {
    this._internalRoot = n;
  }
  Wa.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = _p();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ze.length && r !== 0 && r < Ze[l].priority; l++)
        ;
      Ze.splice(l, 0, n), l === 0 && Lp(n);
    }
  };
  function Ed(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Sc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Gv() {
  }
  function dy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var _ = yc(h);
          d.call(_);
        };
      }
      var h = $v(r, o, n, 0, null, !1, !1, "", Gv);
      return n._reactRootContainer = h, n[Va] = h.current, eu(n.nodeType === 8 ? n.parentNode : n), Ni(), h;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var _ = yc(C);
        S.call(_);
      };
    }
    var C = mc(n, 0, !1, null, null, !1, !1, "", Gv);
    return n._reactRootContainer = C, n[Va] = C.current, eu(n.nodeType === 8 ? n.parentNode : n), Ni(function() {
      Ho(r, C, l, o);
    }), C;
  }
  function Cc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = yc(h);
          S.call(C);
        };
      }
      Ho(r, h, n, c);
    } else
      h = dy(l, r, n, c, o);
    return yc(h);
  }
  Mp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qi(r.pendingLanes);
          l !== 0 && (Wu(r, l | 1), bn(r, Dt()), !(ze & 6) && (gu = Dt() + 500, Wn()));
        }
        break;
      case 13:
        Ni(function() {
          var o = Ba(n, 1);
          if (o !== null) {
            var c = Dn();
            kn(o, n, 1, c);
          }
        }), Sd(n, 1);
    }
  }, ss = function(n) {
    if (n.tag === 13) {
      var r = Ba(n, 134217728);
      if (r !== null) {
        var l = Dn();
        kn(r, n, 134217728, l);
      }
      Sd(n, 134217728);
    }
  }, at = function(n) {
    if (n.tag === 13) {
      var r = Vt(n), l = Ba(n, r);
      if (l !== null) {
        var o = Dn();
        kn(l, n, r, o);
      }
      Sd(n, r);
    }
  }, _p = function() {
    return Xe;
  }, of = function(n, r) {
    var l = Xe;
    try {
      return Xe = n, r();
    } finally {
      Xe = l;
    }
  }, pa = function(n, r, l) {
    switch (r) {
      case "input":
        if (or(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = se(o);
              if (!c)
                throw Error(L(90));
              Ma(o), or(o, c);
            }
          }
        }
        break;
      case "textarea":
        si(n, l);
        break;
      case "select":
        r = l.value, r != null && oi(n, !!l.multiple, r, !1);
    }
  }, Cp = Eu, Ep = Ni;
  var py = { usingClientEntryPoint: !1, Events: [ho, tu, se, ns, rs, Eu] }, Ru = { findFiberByHostInstance: _r, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, vy = { bundleType: Ru.bundleType, version: Ru.version, rendererPackageName: Ru.rendererPackageName, rendererConfig: Ru.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: st.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Tp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ru.findFiberByHostInstance || Iv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ec = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ec.isDisabled && Ec.supportsFiber)
      try {
        Gu = Ec.inject(vy), ea = Ec;
      } catch {
      }
  }
  return Gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = py, Gr.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ed(r))
      throw Error(L(200));
    return Pv(n, r, null, l);
  }, Gr.createRoot = function(n, r) {
    if (!Ed(n))
      throw Error(L(299));
    var l = !1, o = "", c = Cd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = mc(n, 1, !1, null, null, l, !1, o, c), n[Va] = r.current, eu(n.nodeType === 8 ? n.parentNode : n), new gc(r);
  }, Gr.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(L(188)) : (n = Object.keys(n).join(","), Error(L(268, n)));
    return n = Tp(r), n = n === null ? null : n.stateNode, n;
  }, Gr.flushSync = function(n) {
    return Ni(n);
  }, Gr.hydrate = function(n, r, l) {
    if (!Sc(r))
      throw Error(L(200));
    return Cc(null, n, r, !0, l);
  }, Gr.hydrateRoot = function(n, r, l) {
    if (!Ed(n))
      throw Error(L(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Cd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = $v(r, null, n, 1, l ?? null, c, !1, d, h), n[Va] = r.current, eu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Wa(r);
  }, Gr.render = function(n, r, l) {
    if (!Sc(r))
      throw Error(L(200));
    return Cc(null, n, r, !1, l);
  }, Gr.unmountComponentAtNode = function(n) {
    if (!Sc(n))
      throw Error(L(40));
    return n._reactRootContainer ? (Ni(function() {
      Cc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Va] = null;
      });
    }), !0) : !1;
  }, Gr.unstable_batchedUpdates = Eu, Gr.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Sc(l))
      throw Error(L(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(L(38));
    return Cc(n, r, l, !1, o);
  }, Gr.version = "18.2.0-next-9e3b772b8-20220608", Gr;
}
function eT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eT);
    } catch (j) {
      console.error(j);
    }
  }
}
process.env.NODE_ENV === "production" ? (eT(), o0.exports = Ik()) : o0.exports = Qk();
var Gk = o0.exports;
const XE = /* @__PURE__ */ Yk(Gk), Wk = async (j, ve = "ru_RU") => new Promise(async (L, Tt) => {
  if (window.ymaps3) {
    const _e = window.ymaps3;
    await _e.ready;
    const g = (await _e.import("@yandex/ymaps3-reactify")).reactify.bindTo(yn, XE);
    L({
      ymaps: _e,
      reactify: g
    });
  } else {
    const _e = document.createElement("script");
    document.body.appendChild(_e), _e.type = "text/javascript", _e.src = `https://api-maps.yandex.ru/v3/?apikey=${j}&lang=${ve}`, _e.onload = async () => {
      const xe = window.ymaps3;
      await xe.ready;
      const tt = (await xe.import("@yandex/ymaps3-reactify")).reactify.bindTo(yn, XE);
      L({
        ymaps: xe,
        reactify: tt
      });
    }, _e.onerror = Tt;
  }
}), Xk = ({ apiKey: j, lang: ve, children: L }) => {
  const [Tt, _e] = s0();
  return Bk(() => {
    Wk(j, ve).then((xe) => {
      _e(xe);
    });
  }, []), Tt ? /* @__PURE__ */ yn.createElement(Dm.Provider, { value: Tt }, L) : /* @__PURE__ */ yn.createElement(yn.Fragment, null);
}, nb = yn.memo(Xk, (j, ve) => j.apiKey === ve.apiKey && j.lang === ve.lang);
var Ii = /* @__PURE__ */ ((j) => (j.CartesianProjection = "@yandex/ymaps3-cartesian-projection@0.0.1", j.Clusterer = "@yandex/ymaps3-clusterer@0.0.1", j.Controls = "@yandex/ymaps3-controls@0.0.1", j.Hint = "@yandex/ymaps3-hint@0.0.1", j.Markers = "@yandex/ymaps3-markers@0.0.1", j.SphericalMercatorProjection = "@yandex/ymaps3-spherical-mercator-projection@0.0.1", j))(Ii || {});
const qk = qE({ hint: void 0 }), Kk = ({ children: j, context: ve }) => {
  const L = wm(ve);
  return /* @__PURE__ */ yn.createElement(qk.Provider, { value: L }, j);
}, rb = ({ children: j, hint: ve }) => {
  const { reactify: L, ymaps: Tt } = wm(Dm), [_e, xe] = s0(), g = ZE(() => {
    if (_e) {
      const tt = window[Ii.Hint];
      return L.module(tt).YMapHint;
    }
  }, [_e]);
  return KE(() => {
    if (window[Ii.Hint]) {
      const tt = window[Ii.Hint];
      xe(L.module(tt).YMapHintContext);
    } else
      Tt.import(Ii.Hint).then((tt) => {
        window[Ii.Hint] = tt, L.module(tt) && xe(L.module(tt).YMapHintContext);
      });
  }, []), console.log(!g || !_e || !j), !g || !_e || !j ? /* @__PURE__ */ yn.createElement(yn.Fragment, null) : /* @__PURE__ */ yn.createElement(g, { hint: ve }, /* @__PURE__ */ yn.createElement(Kk, { context: _e }, j));
}, ab = rn("YMapGeolocationControl", Ii.Controls), ib = rn("YMapZoomControl", Ii.Controls), lb = rn("YMapClusterer", Ii.Clusterer), ub = rn("YMapDefaultMarker", Ii.Markers), ob = rn("YMap"), sb = rn("ThemeContext"), cb = rn("YMapDefaultSchemeLayer"), fb = rn("YMapDefaultFeaturesLayer"), db = rn("YMapLayer"), pb = rn("YMapControl"), vb = rn("YMapControls"), hb = rn("YMapControlButton"), mb = rn("YMapTileDataSource"), yb = rn("YMapMarker"), gb = rn("YMapListener"), Sb = rn("YMapFeature"), Cb = rn("YMapDefaultSatelliteLayer"), Eb = rn("YMapCollection"), Tb = rn("YMapContainer"), Rb = rn("YMapFeatureDataSource");
export {
  sb as ThemeContext,
  ob as YMap,
  lb as YMapClusterer,
  Eb as YMapCollectionComponent,
  nb as YMapComponentsProvider,
  Tb as YMapContainer,
  pb as YMapControl,
  hb as YMapControlButton,
  vb as YMapControls,
  fb as YMapDefaultFeaturesLayer,
  ub as YMapDefaultMarker,
  Cb as YMapDefaultSatelliteLayer,
  cb as YMapDefaultSchemeLayer,
  Sb as YMapFeature,
  Rb as YMapFeatureDataSource,
  ab as YMapGeolocationControl,
  rb as YMapHint,
  qk as YMapHintContext,
  db as YMapLayer,
  gb as YMapListener,
  yb as YMapMarker,
  mb as YMapTileDataSource,
  ib as YMapZoomControl
};
