/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./rolldown-runtime.js";
import { It as t, Lt as n, ft as r } from "./libraries.js";
import { Ax as i, Sc as a, rl as o } from "./main.js";
var s = e(n(), 1),
  c = w(),
  l = (e) => b(e, c),
  u = w();
l.write = (e) => b(e, u);
var d = w();
l.onStart = (e) => b(e, d);
var f = w();
l.onFrame = (e) => b(e, f);
var p = w();
l.onFinish = (e) => b(e, p);
var m = [];
l.setTimeout = (e, t) => {
  let n = l.now() + t,
    r = () => {
      let e = m.findIndex((e) => e.cancel == r);
      ~e && m.splice(e, 1), (v -= +!!~e);
    },
    i = { time: n, handler: e, cancel: r };
  return m.splice(h(n), 0, i), (v += 1), x(), i;
};
var h = (e) => ~(~m.findIndex((t) => t.time > e) || ~m.length);
(l.cancel = (e) => {
  d.delete(e), f.delete(e), p.delete(e), c.delete(e), u.delete(e);
}),
  (l.sync = (e) => {
    (y = !0), l.batchedUpdates(e), (y = !1);
  }),
  (l.throttle = (e) => {
    let t;
    function n() {
      try {
        e(...t);
      } finally {
        t = null;
      }
    }
    function r(...e) {
      (t = e), l.onStart(n);
    }
    return (
      (r.handler = e),
      (r.cancel = () => {
        d.delete(n), (t = null);
      }),
      r
    );
  });
var g = typeof window < `u` ? window.requestAnimationFrame : () => {};
(l.use = (e) => (g = e)),
  (l.now = typeof performance < `u` ? () => performance.now() : Date.now),
  (l.batchedUpdates = (e) => e()),
  (l.catch = console.error),
  (l.frameLoop = `always`),
  (l.advance = () => {
    l.frameLoop === `demand`
      ? C()
      : console.warn(
          `Cannot call the manual advancement of rafz whilst frameLoop is not set as demand`,
        );
  });
var _ = -1,
  v = 0,
  y = !1;
function b(e, t) {
  y ? (t.delete(e), e(0)) : (t.add(e), x());
}
function x() {
  _ < 0 && ((_ = 0), l.frameLoop !== `demand` && g(ee));
}
function S() {
  _ = -1;
}
function ee() {
  ~_ && (g(ee), l.batchedUpdates(C));
}
function C() {
  let e = _;
  _ = l.now();
  let t = h(_);
  t && (T(m.splice(0, t), (e) => e.handler()), (v -= t)),
    v
      ? (d.flush(),
        c.flush(e ? Math.min(64, _ - e) : 16.667),
        f.flush(),
        u.flush(),
        p.flush())
      : S();
}
function w() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (v += +(t == e && !e.has(n))), e.add(n);
    },
    delete(n) {
      return (v -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (v -= t.size),
        T(t, (t) => t(n) && e.add(t)),
        (v += e.size),
        (t = e));
    },
  };
}
function T(e, t) {
  e.forEach((e) => {
    try {
      t(e);
    } catch (e) {
      l.catch(e);
    }
  });
}
var te = Object.defineProperty,
  ne = (e, t) => {
    for (var n in t) te(e, n, { get: t[n], enumerable: !0 });
  },
  E = {};
ne(E, {
  assign: () => ue,
  colors: () => P,
  createStringInterpolator: () => oe,
  skipAnimation: () => ce,
  to: () => se,
  willAdvance: () => le,
});
function re() {}
var ie = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  D = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === `Object`,
    fun: (e) => typeof e == `function`,
    str: (e) => typeof e == `string`,
    num: (e) => typeof e == `number`,
    und: (e) => e === void 0,
  };
function O(e, t) {
  if (D.arr(e)) {
    if (!D.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var k = (e, t) => e.forEach(t);
function A(e, t, n) {
  if (D.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
  else for (let r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var j = (e) => (D.und(e) ? [] : D.arr(e) ? e : [e]);
function M(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), k(n, t);
  }
}
var N = (e, ...t) => M(e, (e) => e(...t)),
  ae = () =>
    typeof window > `u` ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  oe,
  se,
  P = null,
  ce = !1,
  le = re,
  ue = (e) => {
    e.to && (se = e.to),
      e.now && (l.now = e.now),
      e.colors !== void 0 && (P = e.colors),
      e.skipAnimation != null && (ce = e.skipAnimation),
      e.createStringInterpolator && (oe = e.createStringInterpolator),
      e.requestAnimationFrame && l.use(e.requestAnimationFrame),
      e.batchedUpdates && (l.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (le = e.willAdvance),
      e.frameLoop && (l.frameLoop = e.frameLoop);
  },
  de = new Set(),
  F = [],
  fe = [],
  pe = 0,
  me = {
    get idle() {
      return !de.size && !F.length;
    },
    start(e) {
      pe > e.priority ? (de.add(e), l.onStart(he)) : (ge(e), l(ve));
    },
    advance: ve,
    sort(e) {
      if (pe) l.onFrame(() => me.sort(e));
      else {
        let t = F.indexOf(e);
        ~t && (F.splice(t, 1), _e(e));
      }
    },
    clear() {
      (F = []), de.clear();
    },
  };
function he() {
  de.forEach(ge), de.clear(), l(ve);
}
function ge(e) {
  F.includes(e) || _e(e);
}
function _e(e) {
  F.splice(
    ye(F, (t) => t.priority > e.priority),
    0,
    e,
  );
}
function ve(e) {
  let t = fe;
  for (let n = 0; n < F.length; n++) {
    let r = F[n];
    (pe = r.priority), r.idle || (le(r), r.advance(e), r.idle || t.push(r));
  }
  return (pe = 0), (fe = F), (fe.length = 0), (F = t), F.length > 0;
}
function ye(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var be = (e, t, n) => Math.min(Math.max(n, e), t),
  xe = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  I = `[-+]?\\d*\\.?\\d+`,
  Se = I + `%`;
function Ce(...e) {
  return `\\(\\s*(` + e.join(`)\\s*,\\s*(`) + `)\\s*\\)`;
}
var we = RegExp(`rgb` + Ce(I, I, I)),
  Te = RegExp(`rgba` + Ce(I, I, I, I)),
  Ee = RegExp(`hsl` + Ce(I, Se, Se)),
  De = RegExp(`hsla` + Ce(I, Se, Se, I)),
  Oe = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  ke = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Ae = /^#([0-9a-fA-F]{6})$/,
  je = /^#([0-9a-fA-F]{8})$/;
function Me(e) {
  let t;
  return typeof e == `number`
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = Ae.exec(e))
      ? parseInt(t[1] + `ff`, 16) >>> 0
      : P && P[e] !== void 0
        ? P[e]
        : (t = we.exec(e))
          ? ((L(t[1]) << 24) | (L(t[2]) << 16) | (L(t[3]) << 8) | 255) >>> 0
          : (t = Te.exec(e))
            ? ((L(t[1]) << 24) |
                (L(t[2]) << 16) |
                (L(t[3]) << 8) |
                Ie(t[4])) >>>
              0
            : (t = Oe.exec(e))
              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + `ff`, 16) >>>
                0
              : (t = je.exec(e))
                ? parseInt(t[1], 16) >>> 0
                : (t = ke.exec(e))
                  ? parseInt(
                      t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                      16,
                    ) >>> 0
                  : (t = Ee.exec(e))
                    ? (Pe(Fe(t[1]), Le(t[2]), Le(t[3])) | 255) >>> 0
                    : (t = De.exec(e))
                      ? (Pe(Fe(t[1]), Le(t[2]), Le(t[3])) | Ie(t[4])) >>> 0
                      : null;
}
function Ne(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Pe(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    a = Ne(i, r, e + 1 / 3),
    o = Ne(i, r, e),
    s = Ne(i, r, e - 1 / 3);
  return (
    (Math.round(a * 255) << 24) |
    (Math.round(o * 255) << 16) |
    (Math.round(s * 255) << 8)
  );
}
function L(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Fe(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Ie(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Le(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Re(e) {
  let t = Me(e);
  return t === null
    ? e
    : ((t ||= 0),
      `rgba(${(t & 4278190080) >>> 24}, ${(t & 16711680) >>> 16}, ${(t & 65280) >>> 8}, ${(t & 255) / 255})`);
}
var R = (e, t, n) => {
  if (D.fun(e)) return e;
  if (D.arr(e)) return R({ range: e, output: t, extrapolate: n });
  if (D.str(e.output[0])) return oe(e);
  let r = e,
    i = r.output,
    a = r.range || [0, 1],
    o = r.extrapolateLeft || r.extrapolate || `extend`,
    s = r.extrapolateRight || r.extrapolate || `extend`,
    c = r.easing || ((e) => e);
  return (e) => {
    let t = Be(e, a);
    return ze(e, a[t], a[t + 1], i[t], i[t + 1], c, o, s, r.map);
  };
};
function ze(e, t, n, r, i, a, o, s, c) {
  let l = c ? c(e) : e;
  if (l < t) {
    if (o === `identity`) return l;
    o === `clamp` && (l = t);
  }
  if (l > n) {
    if (s === `identity`) return l;
    s === `clamp` && (l = n);
  }
  return r === i
    ? r
    : t === n
      ? e <= t
        ? r
        : i
      : (t === -1 / 0
          ? (l = -l)
          : n === 1 / 0
            ? (l -= t)
            : (l = (l - t) / (n - t)),
        (l = a(l)),
        r === -1 / 0
          ? (l = -l)
          : i === 1 / 0
            ? (l += r)
            : (l = l * (i - r) + r),
        l);
}
function Be(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var Ve =
    (e, t = `end`) =>
    (n) => {
      n = t === `end` ? Math.min(n, 0.999) : Math.max(n, 0.001);
      let r = n * e;
      return be(0, 1, (t === `end` ? Math.floor(r) : Math.ceil(r)) / e);
    },
  He = 1.70158,
  Ue = He * 1.525,
  We = He + 1,
  Ge = (2 * Math.PI) / 3,
  Ke = (2 * Math.PI) / 4.5,
  qe = (e) => {
    let t = 7.5625,
      n = 2.75;
    return e < 1 / n
      ? t * e * e
      : e < 2 / n
        ? t * (e -= 1.5 / n) * e + 0.75
        : e < 2.5 / n
          ? t * (e -= 2.25 / n) * e + 0.9375
          : t * (e -= 2.625 / n) * e + 0.984375;
  },
  Je = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : 1 - (-2 * e + 2) ** 2 / 2),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - (1 - e) ** 3,
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - (1 - e) ** 4,
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - (-2 * e + 2) ** 4 / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - (1 - e) ** 5,
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - (-2 * e + 2) ** 5 / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : 2 ** (10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - 2 ** (-10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
          ? 1
          : e < 0.5
            ? 2 ** (20 * e - 10) / 2
            : (2 - 2 ** (-20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - e ** 2),
    easeOutCirc: (e) => Math.sqrt(1 - (e - 1) ** 2),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - (2 * e) ** 2)) / 2
        : (Math.sqrt(1 - (-2 * e + 2) ** 2) + 1) / 2,
    easeInBack: (e) => We * e * e * e - He * e * e,
    easeOutBack: (e) => 1 + We * (e - 1) ** 3 + He * (e - 1) ** 2,
    easeInOutBack: (e) =>
      e < 0.5
        ? ((2 * e) ** 2 * ((Ue + 1) * 2 * e - Ue)) / 2
        : ((2 * e - 2) ** 2 * ((Ue + 1) * (e * 2 - 2) + Ue) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
          ? 1
          : -(2 ** (10 * e - 10)) * Math.sin((e * 10 - 10.75) * Ge),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
          ? 1
          : 2 ** (-10 * e) * Math.sin((e * 10 - 0.75) * Ge) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
          ? 1
          : e < 0.5
            ? -(2 ** (20 * e - 10) * Math.sin((20 * e - 11.125) * Ke)) / 2
            : (2 ** (-20 * e + 10) * Math.sin((20 * e - 11.125) * Ke)) / 2 + 1,
    easeInBounce: (e) => 1 - qe(1 - e),
    easeOutBounce: qe,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - qe(1 - 2 * e)) / 2 : (1 + qe(2 * e - 1)) / 2,
    steps: Ve,
  },
  z = Symbol.for(`FluidValue.get`),
  B = Symbol.for(`FluidValue.observers`),
  V = (e) => !!(e && e[z]),
  H = (e) => (e && e[z] ? e[z]() : e),
  Ye = (e) => e[B] || null;
function Xe(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Ze(e, t) {
  let n = e[B];
  n &&
    n.forEach((e) => {
      Xe(e, t);
    });
}
var Qe = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error(`Unknown getter`);
      $e(this, e);
    }
  },
  $e = (e, t) => tt(e, z, t);
function U(e, t) {
  if (e[z]) {
    let n = e[B];
    n || tt(e, B, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function et(e, t) {
  let n = e[B];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : (e[B] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var tt = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  nt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  rt =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  it = RegExp(`(${nt.source})(%|[a-z]+)`, `i`),
  at = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  ot = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  st = (e) => {
    let [t, n] = ct(e);
    if (!t || ae()) return e;
    let r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    return r
      ? r.trim()
      : n && n.startsWith(`--`)
        ? window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(n) || e
        : n && ot.test(n)
          ? st(n)
          : n || e;
  },
  ct = (e) => {
    let t = ot.exec(e);
    if (!t) return [,];
    let [, n, r] = t;
    return [n, r];
  },
  lt,
  ut = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  dt = (e) => {
    lt ||= P ? RegExp(`(${Object.keys(P).join(`|`)})(?!\\w)`, `g`) : /^\b$/;
    let t = e.output.map((e) =>
        H(e).replace(ot, st).replace(rt, Re).replace(lt, Re),
      ),
      n = t.map((e) => e.match(nt).map(Number)),
      r = n[0]
        .map((e, t) =>
          n.map((e) => {
            if (!(t in e))
              throw Error(`The arity of each "output" value must be equal`);
            return e[t];
          }),
        )
        .map((t) => R({ ...e, output: t }));
    return (e) => {
      let n = !it.test(t[0]) && t.find((e) => it.test(e))?.replace(nt, ``),
        i = 0;
      return t[0].replace(nt, () => `${r[i++](e)}${n || ``}`).replace(at, ut);
    };
  },
  ft = `react-spring: `,
  pt = (e) => {
    let t = e,
      n = !1;
    if (typeof t != `function`)
      throw TypeError(`${ft}once requires a function parameter`);
    return (...e) => {
      n ||= (t(...e), !0);
    };
  },
  mt = pt(console.warn);
function ht() {
  mt(`${ft}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var gt = pt(console.warn);
function _t() {
  gt(
    `${ft}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
  );
}
function vt(e) {
  return (
    D.str(e) &&
    (e[0] == `#` || /\d/.test(e) || (!ae() && ot.test(e)) || e in (P || {}))
  );
}
var yt = ae() ? s.useEffect : s.useLayoutEffect,
  bt = () => {
    let e = (0, s.useRef)(!1);
    return (
      yt(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        [],
      ),
      e
    );
  };
function xt() {
  let e = (0, s.useState)()[1],
    t = bt();
  return () => {
    t.current && e(Math.random());
  };
}
var St = (e) => (0, s.useEffect)(e, Ct),
  Ct = [];
function wt(e) {
  let t = (0, s.useRef)(void 0);
  return (
    (0, s.useEffect)(() => {
      t.current = e;
    }),
    t.current
  );
}
var Tt = Symbol.for(`Animated:node`),
  Et = (e) => !!e && e[Tt] === e,
  W = (e) => e && e[Tt],
  Dt = (e, t) => ie(e, Tt, t),
  Ot = (e) => e && e[Tt] && e[Tt].getPayload(),
  kt = class {
    constructor() {
      Dt(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  At = class e extends kt {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        D.num(this._value) && (this.lastPosition = this._value);
    }
    static create(t) {
      return new e(t);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        D.num(e) &&
          ((this.lastPosition = e),
          t &&
            ((e = Math.round(e / t) * t),
            this.done && (this.lastPosition = e))),
        this._value !== e && ((this._value = e), !0)
      );
    }
    reset() {
      let { done: e } = this;
      (this.done = !1),
        D.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  jt = class e extends At {
    constructor(e) {
      super(0), (this._string = null), (this._toString = R({ output: [e, e] }));
    }
    static create(t) {
      return new e(t);
    }
    getValue() {
      return (this._string ??= this._toString(this._value));
    }
    setValue(e) {
      if (D.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = R({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  Mt = { dependencies: null },
  Nt = class extends kt {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      let t = {};
      return (
        A(this.source, (n, r) => {
          Et(n)
            ? (t[r] = n.getValue(e))
            : V(n)
              ? (t[r] = H(n))
              : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && k(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        let t = new Set();
        return A(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      Mt.dependencies && V(e) && Mt.dependencies.add(e);
      let t = Ot(e);
      t && k(t, (e) => this.add(e));
    }
  },
  Pt = class e extends Nt {
    constructor(e) {
      super(e);
    }
    static create(t) {
      return new e(t);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      let t = this.getPayload();
      return e.length == t.length
        ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
        : (super.setValue(e.map(Ft)), !0);
    }
  };
function Ft(e) {
  return (vt(e) ? jt : At).create(e);
}
function It(e) {
  let t = W(e);
  return t ? t.constructor : D.arr(e) ? Pt : vt(e) ? jt : At;
}
var Lt = (e, t) => {
    let n = !D.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return (0, s.forwardRef)((r, i) => {
      let a = (0, s.useRef)(null),
        o =
          n &&
          (0, s.useCallback)(
            (e) => {
              a.current = Bt(i, e);
            },
            [i],
          ),
        [c, u] = zt(r, t),
        d = xt(),
        f = () => {
          let e = a.current;
          (!n || e) &&
            (e ? t.applyAnimatedValues(e, c.getValue(!0)) : !1) === !1 &&
            d();
        },
        p = new Rt(f, u),
        m = (0, s.useRef)(void 0);
      yt(
        () => (
          (m.current = p),
          k(u, (e) => U(e, p)),
          () => {
            m.current &&
              (k(m.current.deps, (e) => et(e, m.current)),
              l.cancel(m.current.update));
          }
        ),
      ),
        (0, s.useEffect)(f, []),
        St(() => () => {
          let e = m.current;
          k(e.deps, (t) => et(t, e));
        });
      let h = t.getComponentProps(c.getValue());
      return s.createElement(e, { ...h, ref: o });
    });
  },
  Rt = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == `change` && l.write(this.update);
    }
  };
function zt(e, t) {
  let n = new Set();
  return (
    (Mt.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new Nt(e)),
    (Mt.dependencies = null),
    [e, n]
  );
}
function Bt(e, t) {
  return e && (D.fun(e) ? e(t) : (e.current = t)), t;
}
var Vt = Symbol.for(`AnimatedComponent`),
  Ht = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (e) => new Nt(e),
      getComponentProps: r = (e) => e,
    } = {},
  ) => {
    let i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      a = (e) => {
        let t = Ut(e) || `Anonymous`;
        return (
          (e = D.str(e)
            ? a[e] || (a[e] = Lt(e, i))
            : e[Vt] || (e[Vt] = Lt(e, i))),
          (e.displayName = `Animated(${t})`),
          e
        );
      };
    return (
      A(e, (t, n) => {
        D.arr(e) && (n = Ut(t)), (a[n] = a(t));
      }),
      { animated: a }
    );
  },
  Ut = (e) =>
    D.str(e)
      ? e
      : e && D.str(e.displayName)
        ? e.displayName
        : (D.fun(e) && e.name) || null;
function G(e, ...t) {
  return D.fun(e) ? e(...t) : e;
}
var Wt = (e, t) =>
    e === !0 || !!(t && e && (D.fun(e) ? e(t) : j(e).includes(t))),
  Gt = (e, t) => (D.obj(e) ? t && e[t] : e),
  Kt = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  qt = (e) => e,
  Jt = (e, t = qt) => {
    let n = Yt;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    let r = {};
    for (let i of n) {
      let n = t(e[i], i);
      D.und(n) || (r[i] = n);
    }
    return r;
  },
  Yt = [
    `config`,
    `onProps`,
    `onStart`,
    `onChange`,
    `onPause`,
    `onResume`,
    `onRest`,
  ],
  Xt = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function Zt(e) {
  let t = {},
    n = 0;
  if (
    (A(e, (e, r) => {
      Xt[r] || ((t[r] = e), n++);
    }),
    n)
  )
    return t;
}
function Qt(e) {
  let t = Zt(e);
  if (t) {
    let n = { to: t };
    return A(e, (e, r) => r in t || (n[r] = e)), n;
  }
  return { ...e };
}
function $t(e) {
  return (
    (e = H(e)),
    D.arr(e)
      ? e.map($t)
      : vt(e)
        ? E.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
        : e
  );
}
function en(e) {
  for (let t in e) return !0;
  return !1;
}
function tn(e) {
  return D.fun(e) || (D.arr(e) && D.obj(e[0]));
}
function nn(e, t) {
  e.ref?.delete(e), t?.delete(e);
}
function rn(e, t) {
  t && e.ref !== t && (e.ref?.delete(e), t.add(e), (e.ref = t));
}
var an = {
    ...{
      default: { tension: 170, friction: 26 },
      gentle: { tension: 120, friction: 14 },
      wobbly: { tension: 180, friction: 12 },
      stiff: { tension: 210, friction: 20 },
      slow: { tension: 280, friction: 60 },
      molasses: { tension: 280, friction: 120 },
    }.default,
    mass: 1,
    damping: 1,
    easing: Je.linear,
    clamp: !1,
  },
  on = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, an);
    }
  };
function sn(e, t, n) {
  n && ((n = { ...n }), cn(n, t), (t = { ...n, ...t })),
    cn(e, t),
    Object.assign(e, t);
  for (let t in an) e[t] ?? (e[t] = an[t]);
  let { frequency: r, damping: i } = e,
    { mass: a } = e;
  return (
    D.und(r) ||
      (r < 0.01 && (r = 0.01),
      i < 0 && (i = 0),
      (e.tension = ((2 * Math.PI) / r) ** 2 * a),
      (e.friction = (4 * Math.PI * i * a) / r)),
    e
  );
}
function cn(e, t) {
  if (!D.und(t.decay)) e.duration = void 0;
  else {
    let n = !D.und(t.tension) || !D.und(t.friction);
    (!n && D.und(t.frequency) && D.und(t.damping) && D.und(t.mass)) ||
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var ln = [],
  un = class {
    constructor() {
      (this.changed = !1),
        (this.values = ln),
        (this.toValues = null),
        (this.fromValues = ln),
        (this.config = new on()),
        (this.immediate = !1);
    }
  };
function dn(e, { key: t, props: n, defaultProps: r, state: i, actions: a }) {
  return new Promise((o, s) => {
    let c,
      u,
      d = Wt(n.cancel ?? r?.cancel, t);
    if (d) m();
    else {
      D.und(n.pause) || (i.paused = Wt(n.pause, t));
      let e = r?.pause;
      e !== !0 && (e = i.paused || Wt(e, t)),
        (c = G(n.delay || 0, t)),
        e ? (i.resumeQueue.add(p), a.pause()) : (a.resume(), p());
    }
    function f() {
      i.resumeQueue.add(p),
        i.timeouts.delete(u),
        u.cancel(),
        (c = u.time - l.now());
    }
    function p() {
      c > 0 && !E.skipAnimation
        ? ((i.delayed = !0),
          (u = l.setTimeout(m, c)),
          i.pauseQueue.add(f),
          i.timeouts.add(u))
        : m();
    }
    function m() {
      (i.delayed &&= !1),
        i.pauseQueue.delete(f),
        i.timeouts.delete(u),
        e <= (i.cancelId || 0) && (d = !0);
      try {
        a.start({ ...n, callId: e, cancel: d }, o);
      } catch (e) {
        s(e);
      }
    }
  });
}
var fn = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((e) => e.cancelled)
        ? q(e.get())
        : t.every((e) => e.noop)
          ? pn(e.get())
          : K(
              e.get(),
              t.every((e) => e.finished),
            ),
  pn = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  K = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  q = (e) => ({ value: e, cancelled: !0, finished: !1 });
function mn(e, t, n, r) {
  let { callId: i, parentId: a, onRest: o } = t,
    { asyncTo: s, promise: c } = n;
  return !a && e === s && !t.reset
    ? c
    : (n.promise = (async () => {
        (n.asyncId = i), (n.asyncTo = e);
        let u = Jt(t, (e, t) => (t === `onRest` ? void 0 : e)),
          d,
          f,
          p = new Promise((e, t) => ((d = e), (f = t))),
          m = (e) => {
            let t =
              (i <= (n.cancelId || 0) && q(r)) || (i !== n.asyncId && K(r, !1));
            if (t) throw ((e.result = t), f(e), e);
          },
          h = (e, t) => {
            let a = new gn(),
              o = new _n();
            return (async () => {
              if (E.skipAnimation)
                throw (hn(n), (o.result = K(r, !1)), f(o), o);
              m(a);
              let s = D.obj(e) ? { ...e } : { ...t, to: e };
              (s.parentId = i),
                A(u, (e, t) => {
                  D.und(s[t]) && (s[t] = e);
                });
              let c = await r.start(s);
              return (
                m(a),
                n.paused &&
                  (await new Promise((e) => {
                    n.resumeQueue.add(e);
                  })),
                c
              );
            })();
          },
          g;
        if (E.skipAnimation) return hn(n), K(r, !1);
        try {
          let t;
          (t = D.arr(e)
            ? (async (e) => {
                for (let t of e) await h(t);
              })(e)
            : Promise.resolve(e(h, r.stop.bind(r)))),
            await Promise.all([t.then(d), p]),
            (g = K(r.get(), !0, !1));
        } catch (e) {
          if (e instanceof gn) g = e.result;
          else if (e instanceof _n) g = e.result;
          else throw e;
        } finally {
          i == n.asyncId &&
            ((n.asyncId = a),
            (n.asyncTo = a ? s : void 0),
            (n.promise = a ? c : void 0));
        }
        return (
          D.fun(o) &&
            l.batchedUpdates(() => {
              o(g, r, r.item);
            }),
          g
        );
      })());
}
function hn(e, t) {
  M(e.timeouts, (e) => e.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var gn = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
      );
    }
  },
  _n = class extends Error {
    constructor() {
      super(`SkipAnimationSignal`);
    }
  },
  vn = (e) => e instanceof bn,
  yn = 1,
  bn = class extends Qe {
    constructor() {
      super(...arguments), (this.id = yn++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      let e = W(this);
      return e && e.getValue();
    }
    to(...e) {
      return E.to(this, e);
    }
    interpolate(...e) {
      return ht(), E.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      Ze(this, { type: `change`, parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || me.sort(this),
        Ze(this, { type: `priority`, parent: this, priority: e });
    }
  },
  J = Symbol.for(`SpringPhase`),
  xn = 1,
  Sn = 2,
  Cn = 4,
  wn = (e) => (e[J] & xn) > 0,
  Y = (e) => (e[J] & Sn) > 0,
  X = (e) => (e[J] & Cn) > 0,
  Tn = (e, t) => (t ? (e[J] |= Sn | xn) : (e[J] &= ~Sn)),
  En = (e, t) => (t ? (e[J] |= Cn) : (e[J] &= ~Cn)),
  Dn = class extends bn {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new un()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !D.und(e) || !D.und(t))
      ) {
        let n = D.obj(e) ? { ...e } : { ...t, from: e };
        D.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(Y(this) || this._state.asyncTo) || X(this);
    }
    get goal() {
      return H(this.animation.to);
    }
    get velocity() {
      let e = W(this);
      return e instanceof At
        ? e.lastVelocity || 0
        : e.getPayload().map((e) => e.lastVelocity || 0);
    }
    get hasAnimated() {
      return wn(this);
    }
    get isAnimating() {
      return Y(this);
    }
    get isPaused() {
      return X(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let t = !0,
        n = !1,
        r = this.animation,
        { toValues: i } = r,
        { config: a } = r,
        o = Ot(r.to);
      !o && V(r.to) && (i = j(H(r.to))),
        r.values.forEach((s, c) => {
          if (s.done) return;
          let l = s.constructor == jt ? 1 : o ? o[c].lastPosition : i[c],
            u = r.immediate,
            d = l;
          if (!u) {
            if (((d = s.lastPosition), a.tension <= 0)) {
              s.done = !0;
              return;
            }
            let t = (s.elapsedTime += e),
              n = r.fromValues[c],
              i =
                s.v0 == null
                  ? (s.v0 = D.arr(a.velocity) ? a.velocity[c] : a.velocity)
                  : s.v0,
              o,
              f =
                a.precision ||
                (n == l ? 0.005 : Math.min(1, Math.abs(l - n) * 0.001));
            if (!D.und(a.duration)) {
              let r = 1;
              a.duration > 0 &&
                (this._memoizedDuration !== a.duration &&
                  ((this._memoizedDuration = a.duration),
                  s.durationProgress > 0 &&
                    ((s.elapsedTime = a.duration * s.durationProgress),
                    (t = s.elapsedTime += e))),
                (r = (a.progress || 0) + t / this._memoizedDuration),
                (r = r > 1 ? 1 : r < 0 ? 0 : r),
                (s.durationProgress = r)),
                (d = n + a.easing(r) * (l - n)),
                (o = (d - s.lastPosition) / e),
                (u = r == 1);
            } else if (a.decay) {
              let e = a.decay === !0 ? 0.998 : a.decay,
                r = Math.exp(-(1 - e) * t);
              (d = n + (i / (1 - e)) * (1 - r)),
                (u = Math.abs(s.lastPosition - d) <= f),
                (o = i * r);
            } else {
              o = s.lastVelocity == null ? i : s.lastVelocity;
              let t = a.restVelocity || f / 10,
                r = a.clamp ? 0 : a.bounce,
                c = !D.und(r),
                p = n == l ? s.v0 > 0 : n < l,
                m,
                h = !1,
                g = Math.ceil(e / 1);
              for (
                let e = 0;
                e < g &&
                ((m = Math.abs(o) > t),
                !(!m && ((u = Math.abs(l - d) <= f), u)));
                ++e
              ) {
                c && ((h = d == l || d > l == p), h && ((o = -o * r), (d = l)));
                let e =
                  (-a.tension * 1e-6 * (d - l) + -a.friction * 0.001 * o) /
                  a.mass;
                (o += e * 1), (d += o * 1);
              }
            }
            (s.lastVelocity = o),
              Number.isNaN(d) &&
                (console.warn(`Got NaN while animating:`, this), (u = !0));
          }
          o && !o[c].done && (u = !1),
            u ? (s.done = !0) : (t = !1),
            s.setValue(d, a.round) && (n = !0);
        });
      let s = W(this),
        c = s.getValue();
      if (t) {
        let e = H(r.to);
        (c !== e || n) && !a.decay
          ? (s.setValue(e), this._onChange(e))
          : n && a.decay && this._onChange(c),
          this._stop();
      } else n && this._onChange(c);
    }
    set(e) {
      return (
        l.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (Y(this)) {
        let { to: e, config: t } = this.animation;
        l.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue ||= []).push(e), this;
    }
    start(e, t) {
      let n;
      return (
        D.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [D.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map((e) => this._update(e))).then((e) => fn(this, e))
      );
    }
    stop(e) {
      let { to: t } = this.animation;
      return (
        this._focus(this.get()),
        hn(this._state, e && this._lastCallId),
        l.batchedUpdates(() => this._stop(t, e)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == `change`
        ? this._start()
        : e.type == `priority` && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      let t = this.key || ``,
        { to: n, from: r } = e;
      (n = D.obj(n) ? n[t] : n),
        (n == null || tn(n)) && (n = void 0),
        (r = D.obj(r) ? r[t] : r),
        (r ??= void 0);
      let i = { to: n, from: r };
      return (
        wn(this) ||
          (e.reverse && ([n, r] = [r, n]),
          (r = H(r)),
          D.und(r) ? W(this) || this._set(n) : this._set(r)),
        i
      );
    }
    _update({ ...e }, t) {
      let { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          Jt(e, (e, t) => (/^on/.test(t) ? Gt(e, n) : e)),
        ),
        Pn(this, e, `onProps`),
        Fn(this, `onProps`, e, this);
      let i = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
        );
      let a = this._state;
      return dn(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: a,
        actions: {
          pause: () => {
            X(this) ||
              (En(this, !0),
              N(a.pauseQueue),
              Fn(this, `onPause`, K(this, On(this, this.animation.to)), this));
          },
          resume: () => {
            X(this) &&
              (En(this, !1),
              Y(this) && this._resume(),
              N(a.resumeQueue),
              Fn(this, `onResume`, K(this, On(this, this.animation.to)), this));
          },
          start: this._merge.bind(this, i),
        },
      }).then((n) => {
        if (e.loop && n.finished && !(t && n.noop)) {
          let t = kn(e);
          if (t) return this._update(t, !0);
        }
        return n;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(q(this));
      let r = !D.und(e.to),
        i = !D.und(e.from);
      if (r || i) {
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(q(this));
      }
      let { key: a, defaultProps: o, animation: s } = this,
        { to: c, from: u } = s,
        { to: d = c, from: f = u } = e;
      i && !r && (!t.default || D.und(d)) && (d = f),
        t.reverse && ([d, f] = [f, d]);
      let p = !O(f, u);
      p && (s.from = f), (f = H(f));
      let m = !O(d, c);
      m && this._focus(d);
      let h = tn(t.to),
        { config: g } = s,
        { decay: _, velocity: v } = g;
      (r || i) && (g.velocity = 0),
        t.config &&
          !h &&
          sn(
            g,
            G(t.config, a),
            t.config === o.config ? void 0 : G(o.config, a),
          );
      let y = W(this);
      if (!y || D.und(d)) return n(K(this, !0));
      let b = D.und(t.reset) ? i && !t.default : !D.und(f) && Wt(t.reset, a),
        x = b ? f : this.get(),
        S = $t(d),
        ee = D.num(S) || D.arr(S) || vt(S),
        C = !h && (!ee || Wt(o.immediate || t.immediate, a));
      if (m) {
        let e = It(d);
        if (e !== y.constructor) {
          if (C) y = this._set(S);
          else
            throw Error(
              `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`,
            );
        }
      }
      let w = y.constructor,
        T = V(d),
        te = !1;
      if (!T) {
        let e = b || (!wn(this) && p);
        (m || e) && ((te = O($t(x), S)), (T = !te)),
          ((O(s.immediate, C) || C) && O(g.decay, _) && O(g.velocity, v)) ||
            (T = !0);
      }
      if (
        (te && Y(this) && (s.changed && !b ? (T = !0) : T || this._stop(c)),
        !h &&
          ((T || V(c)) &&
            ((s.values = y.getPayload()),
            (s.toValues = V(d) ? null : w == jt ? [1] : j(S))),
          s.immediate != C && ((s.immediate = C), !C && !b && this._set(c)),
          T))
      ) {
        let { onRest: e } = s;
        k(Nn, (e) => Pn(this, t, e));
        let r = K(this, On(this, c));
        N(this._pendingCalls, r),
          this._pendingCalls.add(n),
          s.changed &&
            l.batchedUpdates(() => {
              (s.changed = !b),
                e?.(r, this),
                b ? G(o.onRest, r) : s.onStart?.(r, this);
            });
      }
      b && this._set(x),
        h
          ? n(mn(t.to, t, this._state, this))
          : T
            ? this._start()
            : Y(this) && !m
              ? this._pendingCalls.add(n)
              : n(pn(x));
    }
    _focus(e) {
      let t = this.animation;
      e !== t.to &&
        (Ye(this) && this._detach(), (t.to = e), Ye(this) && this._attach());
    }
    _attach() {
      let e = 0,
        { to: t } = this.animation;
      V(t) && (U(t, this), vn(t) && (e = t.priority + 1)), (this.priority = e);
    }
    _detach() {
      let { to: e } = this.animation;
      V(e) && et(e, this);
    }
    _set(e, t = !0) {
      let n = H(e);
      if (!D.und(n)) {
        let e = W(this);
        if (!e || !O(n, e.getValue())) {
          let r = It(n);
          !e || e.constructor != r ? Dt(this, r.create(n)) : e.setValue(n),
            e &&
              l.batchedUpdates(() => {
                this._onChange(n, t);
              });
        }
      }
      return W(this);
    }
    _onStart() {
      let e = this.animation;
      e.changed ||
        ((e.changed = !0), Fn(this, `onStart`, K(this, On(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), G(this.animation.onChange, e, this)),
        G(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      let e = this.animation;
      W(this).reset(H(e.to)),
        e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
        Y(this) || (Tn(this, !0), X(this) || this._resume());
    }
    _resume() {
      E.skipAnimation ? this.finish() : me.start(this);
    }
    _stop(e, t) {
      if (Y(this)) {
        Tn(this, !1);
        let n = this.animation;
        k(n.values, (e) => {
          e.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          Ze(this, { type: `idle`, parent: this });
        let r = t ? q(this.get()) : K(this.get(), On(this, e ?? n.to));
        N(this._pendingCalls, r),
          n.changed && ((n.changed = !1), Fn(this, `onRest`, r, this));
      }
    }
  };
function On(e, t) {
  let n = $t(t);
  return O($t(e.get()), n);
}
function kn(e, t = e.loop, n = e.to) {
  let r = G(t);
  if (r) {
    let i = r !== !0 && Qt(r),
      a = (i || e).reverse,
      o = !i || i.reset;
    return An({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !a || tn(n) ? n : void 0,
      from: o ? e.from : void 0,
      reset: o,
      ...i,
    });
  }
}
function An(e) {
  let { to: t, from: n } = (e = Qt(e)),
    r = new Set();
  return (
    D.obj(t) && Mn(t, r),
    D.obj(n) && Mn(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function jn(e) {
  let t = An(e);
  return D.und(t.default) && (t.default = Jt(t)), t;
}
function Mn(e, t) {
  A(e, (e, n) => e != null && t.add(n));
}
var Nn = [`onStart`, `onRest`, `onChange`, `onPause`, `onResume`];
function Pn(e, t, n) {
  e.animation[n] = t[n] === Kt(t, n) ? void 0 : Gt(t[n], e.key);
}
function Fn(e, t, ...n) {
  e.animation[t]?.(...n), e.defaultProps[t]?.(...n);
}
var In = [`onStart`, `onChange`, `onRest`],
  Ln = 1,
  Rn = class {
    constructor(e, t) {
      (this.id = Ln++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused,
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      let e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (let t in e) {
        let n = e[t];
        D.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(An(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = j(e).map(An)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (Gn(this, t), zn(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        let n = this.springs;
        k(j(t), (t) => n[t].stop(!!e));
      } else hn(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
      return this;
    }
    pause(e) {
      if (D.und(e)) this.start({ pause: !0 });
      else {
        let t = this.springs;
        k(j(e), (e) => t[e].pause());
      }
      return this;
    }
    resume(e) {
      if (D.und(e)) this.start({ pause: !1 });
      else {
        let t = this.springs;
        k(j(e), (e) => t[e].resume());
      }
      return this;
    }
    each(e) {
      A(this.springs, e);
    }
    _onFrame() {
      let { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        i = this._changed.size > 0;
      ((r && !this._started) || (i && !this._started)) &&
        ((this._started = !0),
        M(e, ([e, t]) => {
          (t.value = this.get()), e(t, this, this._item);
        }));
      let a = !r && this._started,
        o = i || (a && n.size) ? this.get() : null;
      i &&
        t.size &&
        M(t, ([e, t]) => {
          (t.value = o), e(t, this, this._item);
        }),
        a &&
          ((this._started = !1),
          M(n, ([e, t]) => {
            (t.value = o), e(t, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == `change`)
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == `idle`) this._active.delete(e.parent);
      else return;
      l.onFrame(this._onFrame);
    }
  };
function zn(e, t) {
  return Promise.all(t.map((t) => Bn(e, t))).then((t) => fn(e, t));
}
async function Bn(e, t, n) {
  let { keys: r, to: i, from: a, loop: o, onRest: s, onResolve: c } = t,
    u = D.obj(t.default) && t.default;
  o && (t.loop = !1), i === !1 && (t.to = null), a === !1 && (t.from = null);
  let d = D.arr(i) || D.fun(i) ? i : void 0;
  d
    ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
    : k(In, (n) => {
        let r = t[n];
        if (D.fun(r)) {
          let i = e._events[n];
          (t[n] = ({ finished: e, cancelled: t }) => {
            let n = i.get(r);
            n
              ? (e || (n.finished = !1), t && (n.cancelled = !0))
              : i.set(r, {
                  value: null,
                  finished: e || !1,
                  cancelled: t || !1,
                });
          }),
            u && (u[n] = t[n]);
        }
      });
  let f = e._state;
  t.pause === !f.paused
    ? ((f.paused = t.pause), N(t.pause ? f.pauseQueue : f.resumeQueue))
    : f.paused && (t.pause = !0);
  let p = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
    m = t.cancel === !0 || Kt(t, `cancel`) === !0;
  (d || (m && f.asyncId)) &&
    p.push(
      dn(++e._lastAsyncId, {
        props: t,
        state: f,
        actions: {
          pause: re,
          resume: re,
          start(t, n) {
            m
              ? (hn(f, e._lastAsyncId), n(q(e)))
              : ((t.onRest = s), n(mn(d, t, f, e)));
          },
        },
      }),
    ),
    f.paused &&
      (await new Promise((e) => {
        f.resumeQueue.add(e);
      }));
  let h = fn(e, await Promise.all(p));
  if (o && h.finished && !(n && h.noop)) {
    let n = kn(t, o, i);
    if (n) return Gn(e, [n]), Bn(e, n, !0);
  }
  return c && l.batchedUpdates(() => c(h, e, e.item)), h;
}
function Vn(e, t) {
  let n = { ...e.springs };
  return (
    t &&
      k(j(t), (e) => {
        D.und(e.keys) && (e = An(e)),
          D.obj(e.to) || (e = { ...e, to: void 0 }),
          Wn(n, e, (e) => Un(e));
      }),
    Hn(e, n),
    n
  );
}
function Hn(e, t) {
  A(t, (t, n) => {
    e.springs[n] || ((e.springs[n] = t), U(t, e));
  });
}
function Un(e, t) {
  let n = new Dn();
  return (n.key = e), t && U(n, t), n;
}
function Wn(e, t, n) {
  t.keys &&
    k(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function Gn(e, t) {
  k(t, (t) => {
    Wn(e.springs, t, (t) => Un(t, e));
  });
}
var Kn = s.createContext({ pause: !1, immediate: !1 }),
  qn = () => {
    let e = [],
      t = function (t) {
        _t();
        let r = [];
        return (
          k(e, (e, i) => {
            if (D.und(t)) r.push(e.start());
            else {
              let a = n(t, e, i);
              a && r.push(e.start(a));
            }
          }),
          r
        );
      };
    (t.current = e),
      (t.add = function (t) {
        e.includes(t) || e.push(t);
      }),
      (t.delete = function (t) {
        let n = e.indexOf(t);
        ~n && e.splice(n, 1);
      }),
      (t.pause = function () {
        return k(e, (e) => e.pause(...arguments)), this;
      }),
      (t.resume = function () {
        return k(e, (e) => e.resume(...arguments)), this;
      }),
      (t.set = function (t) {
        k(e, (e, n) => {
          let r = D.fun(t) ? t(n, e) : t;
          r && e.set(r);
        });
      }),
      (t.start = function (t) {
        let n = [];
        return (
          k(e, (e, r) => {
            if (D.und(t)) n.push(e.start());
            else {
              let i = this._getProps(t, e, r);
              i && n.push(e.start(i));
            }
          }),
          n
        );
      }),
      (t.stop = function () {
        return k(e, (e) => e.stop(...arguments)), this;
      }),
      (t.update = function (t) {
        return k(e, (e, n) => e.update(this._getProps(t, e, n))), this;
      });
    let n = function (e, t, n) {
      return D.fun(e) ? e(n, t) : e;
    };
    return (t._getProps = n), t;
  };
function Jn(e, t, n) {
  let r = D.fun(t) && t;
  r && !n && (n = []);
  let i = (0, s.useMemo)(
      () => (r || arguments.length == 3 ? qn() : void 0),
      [],
    ),
    a = (0, s.useRef)(0),
    o = xt(),
    c = (0, s.useMemo)(
      () => ({
        ctrls: [],
        queue: [],
        flush(e, t) {
          let n = Vn(e, t);
          return a.current > 0 &&
            !c.queue.length &&
            !Object.keys(n).some((t) => !e.springs[t])
            ? zn(e, t)
            : new Promise((r) => {
                Hn(e, n),
                  c.queue.push(() => {
                    r(zn(e, t));
                  }),
                  o();
              });
        },
      }),
      [],
    ),
    l = (0, s.useRef)([...c.ctrls]),
    u = (0, s.useRef)([]),
    d = wt(e) || 0;
  (0, s.useMemo)(() => {
    k(l.current.slice(e, d), (e) => {
      nn(e, i), e.stop(!0);
    }),
      (l.current.length = e),
      f(d, e);
  }, [e]),
    (0, s.useMemo)(() => {
      f(0, Math.min(d, e));
    }, n);
  function f(e, n) {
    for (let i = e; i < n; i++) {
      let e = l.current[i] || (l.current[i] = new Rn(null, c.flush)),
        n = r ? r(i, e) : t[i];
      n && (u.current[i] = jn(n));
    }
  }
  let p = l.current.map((e, t) => Vn(e, u.current[t])),
    m = (0, s.useContext)(Kn),
    h = m !== wt(m) && en(m);
  yt(() => {
    a.current++, (c.ctrls = l.current);
    let { queue: e } = c;
    e.length && ((c.queue = []), k(e, (e) => e())),
      k(l.current, (e, t) => {
        i?.add(e), h && e.start({ default: m });
        let n = u.current[t];
        n && (rn(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
      });
  }),
    St(() => () => {
      k(c.ctrls, (e) => e.stop(!0));
    });
  let g = p.map((e) => ({ ...e }));
  return i ? [g, i] : g;
}
function Yn(e, t) {
  let n = D.fun(e),
    [[r], i] = Jn(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, i] : r;
}
var Xn = class extends bn {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = R(...t));
    let n = this._get(),
      r = It(n);
    Dt(this, r.create(n));
  }
  advance(e) {
    let t = this._get();
    O(t, this.get()) || (W(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && Qn(this._active) && $n(this);
  }
  _get() {
    let e = D.arr(this.source) ? this.source.map(H) : j(H(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !Qn(this._active) &&
      ((this.idle = !1),
      k(Ot(this), (e) => {
        e.done = !1;
      }),
      E.skipAnimation
        ? (l.batchedUpdates(() => this.advance()), $n(this))
        : me.start(this));
  }
  _attach() {
    let e = 1;
    k(j(this.source), (t) => {
      V(t) && U(t, this),
        vn(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    k(j(this.source), (e) => {
      V(e) && et(e, this);
    }),
      this._active.clear(),
      $n(this);
  }
  eventObserved(e) {
    e.type == `change`
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == `idle`
        ? this._active.delete(e.parent)
        : e.type == `priority` &&
          (this.priority = j(this.source).reduce(
            (e, t) => Math.max(e, (vn(t) ? t.priority : 0) + 1),
            0,
          ));
  }
};
function Zn(e) {
  return e.idle !== !1;
}
function Qn(e) {
  return !e.size || Array.from(e).every(Zn);
}
function $n(e) {
  e.idle ||
    ((e.idle = !0),
    k(Ot(e), (e) => {
      e.done = !0;
    }),
    Ze(e, { type: `idle`, parent: e }));
}
E.assign({ createStringInterpolator: dt, to: (e, t) => new Xn(e, t) }),
  me.advance;
var er = e(t(), 1),
  tr = /^--/;
function nr(e, t) {
  return t == null || typeof t == `boolean` || t === ``
    ? ``
    : typeof t == `number` &&
        t !== 0 &&
        !tr.test(e) &&
        !(Z.hasOwnProperty(e) && Z[e])
      ? t + `px`
      : (`` + t).trim();
}
var rr = {};
function ir(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  let n =
      e.nodeName === `filter` ||
      (e.parentNode && e.parentNode.nodeName === `filter`),
    {
      className: r,
      style: i,
      children: a,
      scrollTop: o,
      scrollLeft: s,
      viewBox: c,
      ...l
    } = t,
    u = Object.values(l),
    d = Object.keys(l).map((t) =>
      n || e.hasAttribute(t)
        ? t
        : rr[t] ||
          (rr[t] = t.replace(/([A-Z])/g, (e) => `-` + e.toLowerCase())),
    );
  a !== void 0 && (e.textContent = a);
  for (let t in i)
    if (i.hasOwnProperty(t)) {
      let n = nr(t, i[t]);
      tr.test(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
    }
  d.forEach((t, n) => {
    e.setAttribute(t, u[n]);
  }),
    r !== void 0 && (e.className = r),
    o !== void 0 && (e.scrollTop = o),
    s !== void 0 && (e.scrollLeft = s),
    c !== void 0 && e.setAttribute(`viewBox`, c);
}
var Z = {
    animationIterationCount: !0,
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
    strokeWidth: !0,
  },
  ar = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  or = [`Webkit`, `Ms`, `Moz`, `O`];
Z = Object.keys(Z).reduce(
  (e, t) => (or.forEach((n) => (e[ar(n, t)] = e[t])), e),
  Z,
);
var sr = /^(matrix|translate|scale|rotate|skew)/,
  cr = /^(translate)/,
  lr = /^(rotate|skew)/,
  ur = (e, t) => (D.num(e) && e !== 0 ? e + t : e),
  dr = (e, t) =>
    D.arr(e)
      ? e.every((e) => dr(e, t))
      : D.num(e)
        ? e === t
        : parseFloat(e) === t,
  fr = class extends Nt {
    constructor({ x: e, y: t, z: n, ...r }) {
      let i = [],
        a = [];
      (e || t || n) &&
        (i.push([e || 0, t || 0, n || 0]),
        a.push((e) => [
          `translate3d(${e.map((e) => ur(e, `px`)).join(`,`)})`,
          dr(e, 0),
        ])),
        A(r, (e, t) => {
          if (t === `transform`)
            i.push([e || ``]), a.push((e) => [e, e === ``]);
          else if (sr.test(t)) {
            if ((delete r[t], D.und(e))) return;
            let n = cr.test(t) ? `px` : lr.test(t) ? `deg` : ``;
            i.push(j(e)),
              a.push(
                t === `rotate3d`
                  ? ([e, t, r, i]) => [
                      `rotate3d(${e},${t},${r},${ur(i, n)})`,
                      dr(i, 0),
                    ]
                  : (e) => [
                      `${t}(${e.map((e) => ur(e, n)).join(`,`)})`,
                      dr(e, +!!t.startsWith(`scale`)),
                    ],
              );
          }
        }),
        i.length && (r.transform = new pr(i, a)),
        super(r);
    }
  },
  pr = class extends Qe {
    constructor(e, t) {
      super(), (this.inputs = e), (this.transforms = t), (this._value = null);
    }
    get() {
      return (this._value ||= this._get());
    }
    _get() {
      let e = ``,
        t = !0;
      return (
        k(this.inputs, (n, r) => {
          let i = H(n[0]),
            [a, o] = this.transforms[r](D.arr(i) ? i : n.map(H));
          (e += ` ` + a), (t &&= o);
        }),
        t ? `none` : e
      );
    }
    observerAdded(e) {
      e == 1 && k(this.inputs, (e) => k(e, (e) => V(e) && U(e, this)));
    }
    observerRemoved(e) {
      e == 0 && k(this.inputs, (e) => k(e, (e) => V(e) && et(e, this)));
    }
    eventObserved(e) {
      e.type == `change` && (this._value = null), Ze(this, e);
    }
  },
  mr =
    `a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(
      `.`,
    );
E.assign({
  batchedUpdates: er.unstable_batchedUpdates,
  createStringInterpolator: dt,
  colors: xe,
});
var Q = Ht(mr, {
    applyAnimatedValues: ir,
    createAnimatedStyle: (e) => new fr(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }).animated,
  $ = r(),
  hr = 8e3,
  gr = 200,
  _r = (function (e) {
    return (
      (e[(e.Default = 0)] = `Default`),
      (e[(e.Gold = 1)] = `Gold`),
      (e[(e.LNY2020 = 2)] = `LNY2020`),
      e
    );
  })({});
function vr(e) {
  switch (e) {
    case 1:
      return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
    case 2:
      return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
    default:
      return `hsl(${Math.random() * 360}, 100%, 40%)`;
  }
}
function yr(e) {
  return e == 2 ? `hue-rotate(${360 + i(-30, 10)}deg)` : ``;
}
function br(e, t) {
  let n = [];
  if (!e) return n;
  let { width: r, height: i } = e;
  for (let e = 0; e < gr; e++) {
    let e = Math.random(),
      a = Math.random() * e,
      o = Math.random() * a,
      s = (Math.random() - 0.5) * 4 * Math.PI * 20,
      c = Math.random() + 0.5,
      l = [Math.random() * i - i - 20, i + 20 + Math.random() * i * c],
      u = c * (r <= 1e3 ? 1 : r / 1e3) * (t == 1 ? 2 : 1),
      d = (Math.random() - 0.5) * r,
      f = (Math.random() - 0.5) * r,
      p = [f, d + f],
      m = vr(t),
      h = yr(t);
    n.push({
      rotationCoefficient: s,
      rotationRatioY: a,
      rotationRatioX: e,
      rotationRatioZ: o,
      yRange: l,
      xRange: p,
      scale: u,
      colorHue: m,
      filter: h,
    });
  }
  return n;
}
function xr(e, t, n) {
  let {
    rotationCoefficient: r,
    rotationRatioY: i,
    rotationRatioX: a,
    rotationRatioZ: o,
    yRange: s,
    xRange: c,
    scale: l,
    colorHue: u,
    filter: d,
  } = e;
  return {
    backgroundColor: u,
    fill: u,
    filter: d,
    flRandom: 0,
    transform: t.interpolate((e) => {
      let t = e * r * i,
        n = e * r * a,
        u = e * r * o,
        d = e * (s[1] - s[0]) + s[0];
      return `translate(${e * (c[1] - c[0]) + c[0]}px, ${d}px) rotateY(${t}rad) rotateX(${n}rad) rotateZ(${u}rad) scale(${l})`;
    }),
  };
}
function Sr(e, t, n) {
  if (Math.random() > 0.1) return null;
  let {
    rotationCoefficient: r,
    rotationRatioZ: i,
    yRange: a,
    xRange: o,
    scale: s,
    colorHue: c,
    filter: l,
  } = e;
  return {
    backgroundColor: void 0,
    fill: c,
    filter: l,
    flRandom: Math.random(),
    transform: t.interpolate((e) => {
      let t = ((e * r) / 4) * i,
        n = e * (a[1] - a[0]) + a[0];
      return `translate(${e * (o[1] - o[0]) + o[0]}px, ${n}px) rotateZ(${t}rad) scale(${s})`;
    }),
  };
}
var Cr = (e, t) => {
    let { anim: n } = Yn({
      anim: 1,
      from: { anim: 0 },
      config: { duration: hr },
    });
    return (0, s.useMemo)(() => {
      let r = br(e, t);
      return {
        rgParticleStyles: r.map((e) => xr(e, n, t)),
        rgStreamerStyles: r.map((e) => Sr(e, n, t)).filter((e) => !!e),
      };
    }, [e, t, n]);
  },
  wr = { position: `absolute`, left: `50%`, top: 0 },
  Tr = { ...wr, width: 10, height: 5, borderWidth: 1, borderColor: `black` },
  Er = ({ eType: e }) => {
    let [t, n] = Vr(),
      { rgParticleStyles: r, rgStreamerStyles: i } = Cr(t, e),
      a;
    switch (e) {
      case 1:
        a = r.map((e, t) => (0, $.jsx)(Or, { style: e }, t));
        break;
      case 2:
        a = r.map((e, t) =>
          t % 2
            ? (0, $.jsx)(Dr, { style: e }, t)
            : (0, $.jsx)(kr, { style: e }, t),
        );
        break;
      case 0:
        a = r.map((e, t) => (0, $.jsx)(Dr, { style: e }, t));
    }
    return (0, $.jsxs)(`div`, {
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: `hidden`,
      },
      ref: n,
      children: [
        a,
        i.map((e, t) =>
          e.flRandom > 0.5
            ? (0, $.jsx)(Rr, { style: e }, t)
            : (0, $.jsx)(Lr, { style: e }, t),
        ),
      ],
    });
  },
  Dr = ({ style: e }) => (0, $.jsx)(Q.div, { style: { ...Tr, ...e } }),
  Or = ({ style: e }) => {
    let [t] = (0, s.useState)(Math.floor(Math.random() * zr.length)),
      n = zr[t];
    return (0, $.jsx)(n, { style: { ...wr, ...e, backgroundColor: void 0 } });
  },
  kr = ({ style: e }) => {
    let [t] = (0, s.useState)(Math.floor(Math.random() * Br.length)),
      n = Br[t];
    return (0, $.jsx)(n, { style: { ...wr, ...e, backgroundColor: void 0 } });
  },
  Ar = ({ style: e }) =>
    (0, $.jsx)(Q.svg, {
      viewBox: `0 0 48 102`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 5, height: 10, ...e },
      children: (0, $.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z`,
        fill: `#F7D51E`,
      }),
    }),
  jr = ({ style: e }) =>
    (0, $.jsxs)(Q.svg, {
      viewBox: `0 0 50 39`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 7, ...e },
      children: [
        (0, $.jsx)(`path`, {
          d: `M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z`,
          fill: `#C4C4C4`,
        }),
        (0, $.jsx)(`path`, {
          d: `M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z`,
          fill: e.fill,
        }),
      ],
    }),
  Mr = ({ style: e }) =>
    (0, $.jsx)(Q.svg, {
      viewBox: `0 0 68 69`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 10, ...e },
      children: (0, $.jsx)(`rect`, {
        y: `34.6389`,
        width: `48`,
        height: `48`,
        transform: `rotate(-45 0 34.6389)`,
        fill: e.fill,
      }),
    }),
  Nr = ({ style: e }) =>
    (0, $.jsx)(Q.svg, {
      viewBox: `0 0 48 48`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 10, ...e },
      children: (0, $.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z`,
        fill: e.fill,
      }),
    }),
  Pr = ({ style: e }) =>
    (0, $.jsx)(Q.svg, {
      viewBox: `0 0 48 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 8, ...e },
      children: (0, $.jsx)(`ellipse`, {
        cx: `24`,
        cy: `15`,
        rx: `24`,
        ry: `15`,
        fill: e.fill,
      }),
    }),
  Fr = ({ style: e }) =>
    (0, $.jsx)(Q.svg, {
      viewBox: `0 0 48 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 8, ...e },
      children: (0, $.jsx)(`ellipse`, {
        cx: `24`,
        cy: `15`,
        rx: `24`,
        ry: `15`,
        fill: e.fill,
      }),
    }),
  Ir = ({ style: e }) =>
    (0, $.jsx)(Q.svg, {
      viewBox: `0 0 48 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 8, ...e },
      children: (0, $.jsx)(`ellipse`, {
        cx: `24`,
        cy: `15`,
        rx: `24`,
        ry: `15`,
        fill: e.fill,
      }),
    }),
  Lr = ({ style: e }) =>
    (0, $.jsx)(Q.svg, {
      viewBox: `0 0 80 620`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 70, ...e },
      children: (0, $.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z`,
        fill: e.fill,
      }),
    }),
  Rr = ({ style: e }) =>
    (0, $.jsx)(Q.svg, {
      viewBox: `0 0 203 295`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 20, ...e },
      children: (0, $.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z`,
        fill: e.fill,
      }),
    }),
  zr = [
    Ar,
    jr,
    Mr,
    Nr,
    Pr,
    Fr,
    Ir,
    ({ style: e }) =>
      (0, $.jsx)(Q.svg, {
        viewBox: `0 0 48 39`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        style: { width: 10, height: 8, ...e },
        children: (0, $.jsx)(`path`, {
          d: `M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z`,
          fill: e.fill,
        }),
      }),
    ({ style: e }) =>
      (0, $.jsx)(Q.svg, {
        width: `48`,
        height: `35`,
        viewBox: `0 0 48 35`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        style: { width: 10, height: 7, ...e },
        children: (0, $.jsx)(`path`, {
          d: `M48 0H0L24 35L48 0Z`,
          fill: e.fill,
        }),
      }),
  ],
  Br = [
    ({ style: e }) =>
      (0, $.jsxs)(Q.svg, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 54 47.18`,
        style: { width: 28, height: 28, ...e },
        children: [
          (0, $.jsx)(`polygon`, {
            fill: `#60000e`,
            points: `10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06`,
          }),
          (0, $.jsx)(`path`, {
            fill: `#f93838`,
            d: `M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z`,
          }),
          (0, $.jsx)(`path`, {
            fill: `#f93838`,
            d: `M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z`,
          }),
        ],
      }),
    ({ style: e }) =>
      (0, $.jsxs)(Q.svg, {
        version: `1.1`,
        xmlns: `http://www.w3.org/2000/svg`,
        x: `0px`,
        y: `0px`,
        viewBox: `0 0 14.5 22`,
        style: { width: 28, height: 28, ...e },
        children: [
          (0, $.jsx)(`path`, {
            fill: `#fc1010`,
            d: `M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z`,
          }),
          (0, $.jsx)(`path`, {
            fill: `#fc1010`,
            d: `M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z`,
          }),
          (0, $.jsx)(`path`, {
            fill: `#fc1010`,
            d: `M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z`,
          }),
          (0, $.jsx)(`path`, {
            fill: `#fc1010`,
            d: `M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z`,
          }),
        ],
      }),
  ];
function Vr() {
  let [e, t] = (0, s.useState)(null);
  return [
    e,
    (0, s.useCallback)((e) => {
      e &&
        typeof e.getBoundingClientRect == `function` &&
        t(e.getBoundingClientRect());
    }, []),
  ];
}
var Hr = `Wo4YgGDqLZc-`,
  Ur = (e) => {
    let { className: t, ...n } = e;
    return (0, $.jsx)(o, { className: a(t, Hr), ...n });
  };
export { hr as i, Er as n, _r as r, Ur as t };
