/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./rolldown-runtime.js";
import {
  E as t,
  G as n,
  K as r,
  Nt as i,
  Pt as a,
  at as o,
  ot as s,
} from "./libraries.js";
import { t as c } from "./throbber.js";
import {
  i as l,
  n as u,
  o as d,
  r as f,
  t as p,
} from "./steammessages_loyalty_rewards_pb.js";
import {
  Cu as m,
  Ef as h,
  Et as g,
  Kc as ee,
  Li as _,
  Mu as v,
  Nu as te,
  Ph as y,
  Qm as b,
  Uf as x,
  Yo as ne,
  Zd as S,
  dm as C,
  em as re,
  lh as ie,
  os as ae,
  qm as oe,
  qp as se,
  rm as ce,
  tf as le,
  v as ue,
  xu as w,
} from "./main.js";
var T = e(a(), 1);
function de(e) {
  let t = o();
  return n({
    mutationFn: async (t) => {
      if (!ce.logged_in) throw 21;
      let { targetid: n, targetType: r, nReactionId: i } = t,
        a = b.Init(p);
      a.Body().set_target_type(r),
        a.Body().set_targetid(n),
        a.Body().set_reactionid(i);
      let o = await d.AddReaction(e, a);
      if (o.GetEResult() != 1) throw o.GetEResult();
    },
    onSuccess: () => {
      t.invalidateQueries({ queryKey: [`UserPointBalance`] });
    },
  });
}
function fe(e, t) {
  return r({
    queryKey: [`UserPointBalance`],
    queryFn: async () => {
      if (!ce.logged_in) throw 21;
      let e = ce.steamid,
        n = b.Init(l);
      n.Body().set_steamid(e);
      let r = await d.GetSummary(t, n);
      if (r.GetEResult() == 1)
        return i.fromString(r.Body().toObject().summary?.points ?? `0`);
      throw r.GetEResult();
    },
    enabled: e,
  });
}
function pe(e, t) {
  return r({
    queryKey: [`AwardsConfiguration`],
    queryFn: async () => {
      let e = b.Init(u);
      e.Body().set_elanguage(oe(re.LANGUAGE));
      let n = await d.GetReactionConfig(t, e);
      if (n.GetEResult() == 1) {
        let e = new Map(),
          t = n.Body().toObject().reactions ?? [];
        for (let n of t) n.reactionid && e.set(n.reactionid, n);
        return e;
      }
      throw n.GetEResult();
    },
    enabled: e,
  });
}
function me(e, t, n, i) {
  return r({
    queryKey: [`UserReactions`, n, i],
    queryFn: async () => {
      if (!ce.logged_in) throw 21;
      let e = b.Init(f);
      e.Body().set_target_type(i), e.Body().set_targetid(n);
      let r = await d.GetReactions(t, e);
      if (r.GetEResult() == 1) return new Set(r.Body().reactionids());
      throw r.GetEResult();
    },
    enabled: e,
  });
}
var he = Ce(),
  E = (e) => ve(e, he),
  D = Ce();
E.write = (e) => ve(e, D);
var ge = Ce();
E.onStart = (e) => ve(e, ge);
var O = Ce();
E.onFrame = (e) => ve(e, O);
var k = Ce();
E.onFinish = (e) => ve(e, k);
var A = [];
E.setTimeout = (e, t) => {
  let n = E.now() + t,
    r = () => {
      let e = A.findIndex((e) => e.cancel == r);
      ~e && A.splice(e, 1), (P -= +!!~e);
    },
    i = { time: n, handler: e, cancel: r };
  return A.splice(j(n), 0, i), (P += 1), ye(), i;
};
var j = (e) => ~(~A.findIndex((t) => t.time > e) || ~A.length);
(E.cancel = (e) => {
  ge.delete(e), O.delete(e), k.delete(e), he.delete(e), D.delete(e);
}),
  (E.sync = (e) => {
    (_e = !0), E.batchedUpdates(e), (_e = !1);
  }),
  (E.throttle = (e) => {
    let t;
    function n() {
      try {
        e(...t);
      } finally {
        t = null;
      }
    }
    function r(...e) {
      (t = e), E.onStart(n);
    }
    return (
      (r.handler = e),
      (r.cancel = () => {
        ge.delete(n), (t = null);
      }),
      r
    );
  });
var M = typeof window < `u` ? window.requestAnimationFrame : () => {};
(E.use = (e) => (M = e)),
  (E.now = typeof performance < `u` ? () => performance.now() : Date.now),
  (E.batchedUpdates = (e) => e()),
  (E.catch = console.error),
  (E.frameLoop = `always`),
  (E.advance = () => {
    E.frameLoop === `demand`
      ? Se()
      : console.warn(
          `Cannot call the manual advancement of rafz whilst frameLoop is not set as demand`,
        );
  });
var N = -1,
  P = 0,
  _e = !1;
function ve(e, t) {
  _e ? (t.delete(e), e(0)) : (t.add(e), ye());
}
function ye() {
  N < 0 && ((N = 0), E.frameLoop !== `demand` && M(xe));
}
function be() {
  N = -1;
}
function xe() {
  ~N && (M(xe), E.batchedUpdates(Se));
}
function Se() {
  let e = N;
  N = E.now();
  let t = j(N);
  t && (we(A.splice(0, t), (e) => e.handler()), (P -= t)),
    P
      ? (ge.flush(),
        he.flush(e ? Math.min(64, N - e) : 16.667),
        O.flush(),
        D.flush(),
        k.flush())
      : be();
}
function Ce() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (P += +(t == e && !e.has(n))), e.add(n);
    },
    delete(n) {
      return (P -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (P -= t.size),
        we(t, (t) => t(n) && e.add(t)),
        (P += e.size),
        (t = e));
    },
  };
}
function we(e, t) {
  e.forEach((e) => {
    try {
      t(e);
    } catch (e) {
      E.catch(e);
    }
  });
}
var Te = Object.defineProperty,
  Ee = (e, t) => {
    for (var n in t) Te(e, n, { get: t[n], enumerable: !0 });
  },
  F = {};
Ee(F, {
  assign: () => Ie,
  colors: () => V,
  createStringInterpolator: () => Me,
  skipAnimation: () => Pe,
  to: () => Ne,
  willAdvance: () => Fe,
});
function De() {}
var Oe = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  I = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === `Object`,
    fun: (e) => typeof e == `function`,
    str: (e) => typeof e == `string`,
    num: (e) => typeof e == `number`,
    und: (e) => e === void 0,
  };
function L(e, t) {
  if (I.arr(e)) {
    if (!I.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var R = (e, t) => e.forEach(t);
function z(e, t, n) {
  if (I.arr(e)) for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
  else for (let r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var B = (e) => (I.und(e) ? [] : I.arr(e) ? e : [e]);
function ke(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), R(n, t);
  }
}
var Ae = (e, ...t) => ke(e, (e) => e(...t)),
  je = () =>
    typeof window > `u` ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  Me,
  Ne,
  V = null,
  Pe = !1,
  Fe = De,
  Ie = (e) => {
    e.to && (Ne = e.to),
      e.now && (E.now = e.now),
      e.colors !== void 0 && (V = e.colors),
      e.skipAnimation != null && (Pe = e.skipAnimation),
      e.createStringInterpolator && (Me = e.createStringInterpolator),
      e.requestAnimationFrame && E.use(e.requestAnimationFrame),
      e.batchedUpdates && (E.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (Fe = e.willAdvance),
      e.frameLoop && (E.frameLoop = e.frameLoop);
  },
  Le = new Set(),
  H = [],
  Re = [],
  ze = 0,
  Be = {
    get idle() {
      return !Le.size && !H.length;
    },
    start(e) {
      ze > e.priority ? (Le.add(e), E.onStart(Ve)) : (He(e), E(We));
    },
    advance: We,
    sort(e) {
      if (ze) E.onFrame(() => Be.sort(e));
      else {
        let t = H.indexOf(e);
        ~t && (H.splice(t, 1), Ue(e));
      }
    },
    clear() {
      (H = []), Le.clear();
    },
  };
function Ve() {
  Le.forEach(He), Le.clear(), E(We);
}
function He(e) {
  H.includes(e) || Ue(e);
}
function Ue(e) {
  H.splice(
    Ge(H, (t) => t.priority > e.priority),
    0,
    e,
  );
}
function We(e) {
  let t = Re;
  for (let n = 0; n < H.length; n++) {
    let r = H[n];
    (ze = r.priority), r.idle || (Fe(r), r.advance(e), r.idle || t.push(r));
  }
  return (ze = 0), (Re = H), (Re.length = 0), (H = t), H.length > 0;
}
function Ge(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var Ke = (e, t, n) => Math.min(Math.max(n, e), t),
  qe = {
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
  U = `[-+]?\\d*\\.?\\d+`,
  Je = U + `%`;
function Ye(...e) {
  return `\\(\\s*(` + e.join(`)\\s*,\\s*(`) + `)\\s*\\)`;
}
var Xe = RegExp(`rgb` + Ye(U, U, U)),
  Ze = RegExp(`rgba` + Ye(U, U, U, U)),
  Qe = RegExp(`hsl` + Ye(U, Je, Je)),
  $e = RegExp(`hsla` + Ye(U, Je, Je, U)),
  et = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  tt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  nt = /^#([0-9a-fA-F]{6})$/,
  rt = /^#([0-9a-fA-F]{8})$/;
function it(e) {
  let t;
  return typeof e == `number`
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = nt.exec(e))
      ? parseInt(t[1] + `ff`, 16) >>> 0
      : V && V[e] !== void 0
        ? V[e]
        : (t = Xe.exec(e))
          ? ((st(t[1]) << 24) | (st(t[2]) << 16) | (st(t[3]) << 8) | 255) >>> 0
          : (t = Ze.exec(e))
            ? ((st(t[1]) << 24) |
                (st(t[2]) << 16) |
                (st(t[3]) << 8) |
                lt(t[4])) >>>
              0
            : (t = et.exec(e))
              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + `ff`, 16) >>>
                0
              : (t = rt.exec(e))
                ? parseInt(t[1], 16) >>> 0
                : (t = tt.exec(e))
                  ? parseInt(
                      t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                      16,
                    ) >>> 0
                  : (t = Qe.exec(e))
                    ? (ot(ct(t[1]), ut(t[2]), ut(t[3])) | 255) >>> 0
                    : (t = $e.exec(e))
                      ? (ot(ct(t[1]), ut(t[2]), ut(t[3])) | lt(t[4])) >>> 0
                      : null;
}
function at(e, t, n) {
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
function ot(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    a = at(i, r, e + 1 / 3),
    o = at(i, r, e),
    s = at(i, r, e - 1 / 3);
  return (
    (Math.round(a * 255) << 24) |
    (Math.round(o * 255) << 16) |
    (Math.round(s * 255) << 8)
  );
}
function st(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function ct(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function lt(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function ut(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function dt(e) {
  let t = it(e);
  return t === null
    ? e
    : ((t ||= 0),
      `rgba(${(t & 4278190080) >>> 24}, ${(t & 16711680) >>> 16}, ${(t & 65280) >>> 8}, ${(t & 255) / 255})`);
}
var ft = (e, t, n) => {
  if (I.fun(e)) return e;
  if (I.arr(e)) return ft({ range: e, output: t, extrapolate: n });
  if (I.str(e.output[0])) return Me(e);
  let r = e,
    i = r.output,
    a = r.range || [0, 1],
    o = r.extrapolateLeft || r.extrapolate || `extend`,
    s = r.extrapolateRight || r.extrapolate || `extend`,
    c = r.easing || ((e) => e);
  return (e) => {
    let t = mt(e, a);
    return pt(e, a[t], a[t + 1], i[t], i[t + 1], c, o, s, r.map);
  };
};
function pt(e, t, n, r, i, a, o, s, c) {
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
function mt(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var ht =
    (e, t = `end`) =>
    (n) => {
      n = t === `end` ? Math.min(n, 0.999) : Math.max(n, 0.001);
      let r = n * e;
      return Ke(0, 1, (t === `end` ? Math.floor(r) : Math.ceil(r)) / e);
    },
  gt = 1.70158,
  _t = gt * 1.525,
  vt = gt + 1,
  yt = (2 * Math.PI) / 3,
  bt = (2 * Math.PI) / 4.5,
  xt = (e) => {
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
  St = {
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
    easeInBack: (e) => vt * e * e * e - gt * e * e,
    easeOutBack: (e) => 1 + vt * (e - 1) ** 3 + gt * (e - 1) ** 2,
    easeInOutBack: (e) =>
      e < 0.5
        ? ((2 * e) ** 2 * ((_t + 1) * 2 * e - _t)) / 2
        : ((2 * e - 2) ** 2 * ((_t + 1) * (e * 2 - 2) + _t) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
          ? 1
          : -(2 ** (10 * e - 10)) * Math.sin((e * 10 - 10.75) * yt),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
          ? 1
          : 2 ** (-10 * e) * Math.sin((e * 10 - 0.75) * yt) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
          ? 1
          : e < 0.5
            ? -(2 ** (20 * e - 10) * Math.sin((20 * e - 11.125) * bt)) / 2
            : (2 ** (-20 * e + 10) * Math.sin((20 * e - 11.125) * bt)) / 2 + 1,
    easeInBounce: (e) => 1 - xt(1 - e),
    easeOutBounce: xt,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - xt(1 - 2 * e)) / 2 : (1 + xt(2 * e - 1)) / 2,
    steps: ht,
  },
  Ct = Symbol.for(`FluidValue.get`),
  wt = Symbol.for(`FluidValue.observers`),
  W = (e) => !!(e && e[Ct]),
  G = (e) => (e && e[Ct] ? e[Ct]() : e),
  Tt = (e) => e[wt] || null;
function Et(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function Dt(e, t) {
  let n = e[wt];
  n &&
    n.forEach((e) => {
      Et(e, t);
    });
}
var Ot = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error(`Unknown getter`);
      kt(this, e);
    }
  },
  kt = (e, t) => Mt(e, Ct, t);
function At(e, t) {
  if (e[Ct]) {
    let n = e[wt];
    n || Mt(e, wt, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function jt(e, t) {
  let n = e[wt];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : (e[wt] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var Mt = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Nt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  Pt =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  Ft = RegExp(`(${Nt.source})(%|[a-z]+)`, `i`),
  It = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Lt = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  Rt = (e) => {
    let [t, n] = zt(e);
    if (!t || je()) return e;
    let r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    return r
      ? r.trim()
      : n && n.startsWith(`--`)
        ? window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(n) || e
        : n && Lt.test(n)
          ? Rt(n)
          : n || e;
  },
  zt = (e) => {
    let t = Lt.exec(e);
    if (!t) return [,];
    let [, n, r] = t;
    return [n, r];
  },
  Bt,
  Vt = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  Ht = (e) => {
    Bt ||= V ? RegExp(`(${Object.keys(V).join(`|`)})(?!\\w)`, `g`) : /^\b$/;
    let t = e.output.map((e) =>
        G(e).replace(Lt, Rt).replace(Pt, dt).replace(Bt, dt),
      ),
      n = t.map((e) => e.match(Nt).map(Number)),
      r = n[0]
        .map((e, t) =>
          n.map((e) => {
            if (!(t in e))
              throw Error(`The arity of each "output" value must be equal`);
            return e[t];
          }),
        )
        .map((t) => ft({ ...e, output: t }));
    return (e) => {
      let n = !Ft.test(t[0]) && t.find((e) => Ft.test(e))?.replace(Nt, ``),
        i = 0;
      return t[0].replace(Nt, () => `${r[i++](e)}${n || ``}`).replace(It, Vt);
    };
  },
  Ut = `react-spring: `,
  Wt = (e) => {
    let t = e,
      n = !1;
    if (typeof t != `function`)
      throw TypeError(`${Ut}once requires a function parameter`);
    return (...e) => {
      n ||= (t(...e), !0);
    };
  },
  Gt = Wt(console.warn);
function Kt() {
  Gt(`${Ut}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var qt = Wt(console.warn);
function Jt() {
  qt(
    `${Ut}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
  );
}
function Yt(e) {
  return (
    I.str(e) &&
    (e[0] == `#` || /\d/.test(e) || (!je() && Lt.test(e)) || e in (V || {}))
  );
}
var Xt = je() ? T.useEffect : T.useLayoutEffect,
  Zt = () => {
    let e = (0, T.useRef)(!1);
    return (
      Xt(
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
function Qt() {
  let e = (0, T.useState)()[1],
    t = Zt();
  return () => {
    t.current && e(Math.random());
  };
}
var $t = (e) => (0, T.useEffect)(e, en),
  en = [];
function tn(e) {
  let t = (0, T.useRef)(void 0);
  return (
    (0, T.useEffect)(() => {
      t.current = e;
    }),
    t.current
  );
}
var nn = Symbol.for(`Animated:node`),
  rn = (e) => !!e && e[nn] === e,
  K = (e) => e && e[nn],
  an = (e, t) => Oe(e, nn, t),
  on = (e) => e && e[nn] && e[nn].getPayload(),
  sn = class {
    constructor() {
      an(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  cn = class e extends sn {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        I.num(this._value) && (this.lastPosition = this._value);
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
        I.num(e) &&
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
        I.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  ln = class e extends cn {
    constructor(e) {
      super(0),
        (this._string = null),
        (this._toString = ft({ output: [e, e] }));
    }
    static create(t) {
      return new e(t);
    }
    getValue() {
      return (this._string ??= this._toString(this._value));
    }
    setValue(e) {
      if (I.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = ft({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  un = { dependencies: null },
  dn = class extends sn {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      let t = {};
      return (
        z(this.source, (n, r) => {
          rn(n)
            ? (t[r] = n.getValue(e))
            : W(n)
              ? (t[r] = G(n))
              : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && R(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        let t = new Set();
        return z(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      un.dependencies && W(e) && un.dependencies.add(e);
      let t = on(e);
      t && R(t, (e) => this.add(e));
    }
  },
  fn = class e extends dn {
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
        : (super.setValue(e.map(pn)), !0);
    }
  };
function pn(e) {
  return (Yt(e) ? ln : cn).create(e);
}
function mn(e) {
  let t = K(e);
  return t ? t.constructor : I.arr(e) ? fn : Yt(e) ? ln : cn;
}
var hn = (e, t) => {
    let n = !I.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return (0, T.forwardRef)((r, i) => {
      let a = (0, T.useRef)(null),
        o =
          n &&
          (0, T.useCallback)(
            (e) => {
              a.current = vn(i, e);
            },
            [i],
          ),
        [s, c] = _n(r, t),
        l = Qt(),
        u = () => {
          let e = a.current;
          (!n || e) &&
            (e ? t.applyAnimatedValues(e, s.getValue(!0)) : !1) === !1 &&
            l();
        },
        d = new gn(u, c),
        f = (0, T.useRef)(void 0);
      Xt(
        () => (
          (f.current = d),
          R(c, (e) => At(e, d)),
          () => {
            f.current &&
              (R(f.current.deps, (e) => jt(e, f.current)),
              E.cancel(f.current.update));
          }
        ),
      ),
        (0, T.useEffect)(u, []),
        $t(() => () => {
          let e = f.current;
          R(e.deps, (t) => jt(t, e));
        });
      let p = t.getComponentProps(s.getValue());
      return T.createElement(e, { ...p, ref: o });
    });
  },
  gn = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == `change` && E.write(this.update);
    }
  };
function _n(e, t) {
  let n = new Set();
  return (
    (un.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new dn(e)),
    (un.dependencies = null),
    [e, n]
  );
}
function vn(e, t) {
  return e && (I.fun(e) ? e(t) : (e.current = t)), t;
}
var yn = Symbol.for(`AnimatedComponent`),
  bn = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (e) => new dn(e),
      getComponentProps: r = (e) => e,
    } = {},
  ) => {
    let i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      a = (e) => {
        let t = xn(e) || `Anonymous`;
        return (
          (e = I.str(e)
            ? a[e] || (a[e] = hn(e, i))
            : e[yn] || (e[yn] = hn(e, i))),
          (e.displayName = `Animated(${t})`),
          e
        );
      };
    return (
      z(e, (t, n) => {
        I.arr(e) && (n = xn(t)), (a[n] = a(t));
      }),
      { animated: a }
    );
  },
  xn = (e) =>
    I.str(e)
      ? e
      : e && I.str(e.displayName)
        ? e.displayName
        : (I.fun(e) && e.name) || null;
function q(e, ...t) {
  return I.fun(e) ? e(...t) : e;
}
var Sn = (e, t) =>
    e === !0 || !!(t && e && (I.fun(e) ? e(t) : B(e).includes(t))),
  Cn = (e, t) => (I.obj(e) ? t && e[t] : e),
  wn = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  Tn = (e) => e,
  En = (e, t = Tn) => {
    let n = Dn;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    let r = {};
    for (let i of n) {
      let n = t(e[i], i);
      I.und(n) || (r[i] = n);
    }
    return r;
  },
  Dn = [
    `config`,
    `onProps`,
    `onStart`,
    `onChange`,
    `onPause`,
    `onResume`,
    `onRest`,
  ],
  On = {
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
function kn(e) {
  let t = {},
    n = 0;
  if (
    (z(e, (e, r) => {
      On[r] || ((t[r] = e), n++);
    }),
    n)
  )
    return t;
}
function An(e) {
  let t = kn(e);
  if (t) {
    let n = { to: t };
    return z(e, (e, r) => r in t || (n[r] = e)), n;
  }
  return { ...e };
}
function jn(e) {
  return (
    (e = G(e)),
    I.arr(e)
      ? e.map(jn)
      : Yt(e)
        ? F.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
        : e
  );
}
function Mn(e) {
  for (let t in e) return !0;
  return !1;
}
function Nn(e) {
  return I.fun(e) || (I.arr(e) && I.obj(e[0]));
}
function Pn(e, t) {
  e.ref?.delete(e), t?.delete(e);
}
function Fn(e, t) {
  t && e.ref !== t && (e.ref?.delete(e), t.add(e), (e.ref = t));
}
var In = {
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
    easing: St.linear,
    clamp: !1,
  },
  Ln = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, In);
    }
  };
function Rn(e, t, n) {
  n && ((n = { ...n }), zn(n, t), (t = { ...n, ...t })),
    zn(e, t),
    Object.assign(e, t);
  for (let t in In) e[t] ?? (e[t] = In[t]);
  let { frequency: r, damping: i } = e,
    { mass: a } = e;
  return (
    I.und(r) ||
      (r < 0.01 && (r = 0.01),
      i < 0 && (i = 0),
      (e.tension = ((2 * Math.PI) / r) ** 2 * a),
      (e.friction = (4 * Math.PI * i * a) / r)),
    e
  );
}
function zn(e, t) {
  if (!I.und(t.decay)) e.duration = void 0;
  else {
    let n = !I.und(t.tension) || !I.und(t.friction);
    (!n && I.und(t.frequency) && I.und(t.damping) && I.und(t.mass)) ||
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var Bn = [],
  Vn = class {
    constructor() {
      (this.changed = !1),
        (this.values = Bn),
        (this.toValues = null),
        (this.fromValues = Bn),
        (this.config = new Ln()),
        (this.immediate = !1);
    }
  };
function Hn(e, { key: t, props: n, defaultProps: r, state: i, actions: a }) {
  return new Promise((o, s) => {
    let c,
      l,
      u = Sn(n.cancel ?? r?.cancel, t);
    if (u) p();
    else {
      I.und(n.pause) || (i.paused = Sn(n.pause, t));
      let e = r?.pause;
      e !== !0 && (e = i.paused || Sn(e, t)),
        (c = q(n.delay || 0, t)),
        e ? (i.resumeQueue.add(f), a.pause()) : (a.resume(), f());
    }
    function d() {
      i.resumeQueue.add(f),
        i.timeouts.delete(l),
        l.cancel(),
        (c = l.time - E.now());
    }
    function f() {
      c > 0 && !F.skipAnimation
        ? ((i.delayed = !0),
          (l = E.setTimeout(p, c)),
          i.pauseQueue.add(d),
          i.timeouts.add(l))
        : p();
    }
    function p() {
      (i.delayed &&= !1),
        i.pauseQueue.delete(d),
        i.timeouts.delete(l),
        e <= (i.cancelId || 0) && (u = !0);
      try {
        a.start({ ...n, callId: e, cancel: u }, o);
      } catch (e) {
        s(e);
      }
    }
  });
}
var Un = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((e) => e.cancelled)
        ? Gn(e.get())
        : t.every((e) => e.noop)
          ? Wn(e.get())
          : J(
              e.get(),
              t.every((e) => e.finished),
            ),
  Wn = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  J = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Gn = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Kn(e, t, n, r) {
  let { callId: i, parentId: a, onRest: o } = t,
    { asyncTo: s, promise: c } = n;
  return !a && e === s && !t.reset
    ? c
    : (n.promise = (async () => {
        (n.asyncId = i), (n.asyncTo = e);
        let l = En(t, (e, t) => (t === `onRest` ? void 0 : e)),
          u,
          d,
          f = new Promise((e, t) => ((u = e), (d = t))),
          p = (e) => {
            let t =
              (i <= (n.cancelId || 0) && Gn(r)) ||
              (i !== n.asyncId && J(r, !1));
            if (t) throw ((e.result = t), d(e), e);
          },
          m = (e, t) => {
            let a = new Jn(),
              o = new Yn();
            return (async () => {
              if (F.skipAnimation)
                throw (qn(n), (o.result = J(r, !1)), d(o), o);
              p(a);
              let s = I.obj(e) ? { ...e } : { ...t, to: e };
              (s.parentId = i),
                z(l, (e, t) => {
                  I.und(s[t]) && (s[t] = e);
                });
              let c = await r.start(s);
              return (
                p(a),
                n.paused &&
                  (await new Promise((e) => {
                    n.resumeQueue.add(e);
                  })),
                c
              );
            })();
          },
          h;
        if (F.skipAnimation) return qn(n), J(r, !1);
        try {
          let t;
          (t = I.arr(e)
            ? (async (e) => {
                for (let t of e) await m(t);
              })(e)
            : Promise.resolve(e(m, r.stop.bind(r)))),
            await Promise.all([t.then(u), f]),
            (h = J(r.get(), !0, !1));
        } catch (e) {
          if (e instanceof Jn) h = e.result;
          else if (e instanceof Yn) h = e.result;
          else throw e;
        } finally {
          i == n.asyncId &&
            ((n.asyncId = a),
            (n.asyncTo = a ? s : void 0),
            (n.promise = a ? c : void 0));
        }
        return (
          I.fun(o) &&
            E.batchedUpdates(() => {
              o(h, r, r.item);
            }),
          h
        );
      })());
}
function qn(e, t) {
  ke(e.timeouts, (e) => e.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var Jn = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
      );
    }
  },
  Yn = class extends Error {
    constructor() {
      super(`SkipAnimationSignal`);
    }
  },
  Xn = (e) => e instanceof Qn,
  Zn = 1,
  Qn = class extends Ot {
    constructor() {
      super(...arguments), (this.id = Zn++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      let e = K(this);
      return e && e.getValue();
    }
    to(...e) {
      return F.to(this, e);
    }
    interpolate(...e) {
      return Kt(), F.to(this, e);
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
      Dt(this, { type: `change`, parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || Be.sort(this),
        Dt(this, { type: `priority`, parent: this, priority: e });
    }
  },
  Y = Symbol.for(`SpringPhase`),
  $n = 1,
  er = 2,
  tr = 4,
  nr = (e) => (e[Y] & $n) > 0,
  X = (e) => (e[Y] & er) > 0,
  rr = (e) => (e[Y] & tr) > 0,
  ir = (e, t) => (t ? (e[Y] |= er | $n) : (e[Y] &= ~er)),
  ar = (e, t) => (t ? (e[Y] |= tr) : (e[Y] &= ~tr)),
  or = class extends Qn {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new Vn()),
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
        !I.und(e) || !I.und(t))
      ) {
        let n = I.obj(e) ? { ...e } : { ...t, from: e };
        I.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(X(this) || this._state.asyncTo) || rr(this);
    }
    get goal() {
      return G(this.animation.to);
    }
    get velocity() {
      let e = K(this);
      return e instanceof cn
        ? e.lastVelocity || 0
        : e.getPayload().map((e) => e.lastVelocity || 0);
    }
    get hasAnimated() {
      return nr(this);
    }
    get isAnimating() {
      return X(this);
    }
    get isPaused() {
      return rr(this);
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
        o = on(r.to);
      !o && W(r.to) && (i = B(G(r.to))),
        r.values.forEach((s, c) => {
          if (s.done) return;
          let l = s.constructor == ln ? 1 : o ? o[c].lastPosition : i[c],
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
                  ? (s.v0 = I.arr(a.velocity) ? a.velocity[c] : a.velocity)
                  : s.v0,
              o,
              f =
                a.precision ||
                (n == l ? 0.005 : Math.min(1, Math.abs(l - n) * 0.001));
            if (!I.und(a.duration)) {
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
                c = !I.und(r),
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
      let s = K(this),
        c = s.getValue();
      if (t) {
        let e = G(r.to);
        (c !== e || n) && !a.decay
          ? (s.setValue(e), this._onChange(e))
          : n && a.decay && this._onChange(c),
          this._stop();
      } else n && this._onChange(c);
    }
    set(e) {
      return (
        E.batchedUpdates(() => {
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
      if (X(this)) {
        let { to: e, config: t } = this.animation;
        E.batchedUpdates(() => {
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
        I.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [I.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map((e) => this._update(e))).then((e) => Un(this, e))
      );
    }
    stop(e) {
      let { to: t } = this.animation;
      return (
        this._focus(this.get()),
        qn(this._state, e && this._lastCallId),
        E.batchedUpdates(() => this._stop(t, e)),
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
      (n = I.obj(n) ? n[t] : n),
        (n == null || Nn(n)) && (n = void 0),
        (r = I.obj(r) ? r[t] : r),
        (r ??= void 0);
      let i = { to: n, from: r };
      return (
        nr(this) ||
          (e.reverse && ([n, r] = [r, n]),
          (r = G(r)),
          I.und(r) ? K(this) || this._set(n) : this._set(r)),
        i
      );
    }
    _update({ ...e }, t) {
      let { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          En(e, (e, t) => (/^on/.test(t) ? Cn(e, n) : e)),
        ),
        pr(this, e, `onProps`),
        mr(this, `onProps`, e, this);
      let i = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
        );
      let a = this._state;
      return Hn(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: a,
        actions: {
          pause: () => {
            rr(this) ||
              (ar(this, !0),
              Ae(a.pauseQueue),
              mr(this, `onPause`, J(this, sr(this, this.animation.to)), this));
          },
          resume: () => {
            rr(this) &&
              (ar(this, !1),
              X(this) && this._resume(),
              Ae(a.resumeQueue),
              mr(this, `onResume`, J(this, sr(this, this.animation.to)), this));
          },
          start: this._merge.bind(this, i),
        },
      }).then((n) => {
        if (e.loop && n.finished && !(t && n.noop)) {
          let t = cr(e);
          if (t) return this._update(t, !0);
        }
        return n;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(Gn(this));
      let r = !I.und(e.to),
        i = !I.und(e.from);
      if (r || i) {
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(Gn(this));
      }
      let { key: a, defaultProps: o, animation: s } = this,
        { to: c, from: l } = s,
        { to: u = c, from: d = l } = e;
      i && !r && (!t.default || I.und(u)) && (u = d),
        t.reverse && ([u, d] = [d, u]);
      let f = !L(d, l);
      f && (s.from = d), (d = G(d));
      let p = !L(u, c);
      p && this._focus(u);
      let m = Nn(t.to),
        { config: h } = s,
        { decay: g, velocity: ee } = h;
      (r || i) && (h.velocity = 0),
        t.config &&
          !m &&
          Rn(
            h,
            q(t.config, a),
            t.config === o.config ? void 0 : q(o.config, a),
          );
      let _ = K(this);
      if (!_ || I.und(u)) return n(J(this, !0));
      let v = I.und(t.reset) ? i && !t.default : !I.und(d) && Sn(t.reset, a),
        te = v ? d : this.get(),
        y = jn(u),
        b = I.num(y) || I.arr(y) || Yt(y),
        x = !m && (!b || Sn(o.immediate || t.immediate, a));
      if (p) {
        let e = mn(u);
        if (e !== _.constructor) {
          if (x) _ = this._set(y);
          else
            throw Error(
              `Cannot animate between ${_.constructor.name} and ${e.name}, as the "to" prop suggests`,
            );
        }
      }
      let ne = _.constructor,
        S = W(u),
        C = !1;
      if (!S) {
        let e = v || (!nr(this) && f);
        (p || e) && ((C = L(jn(te), y)), (S = !C)),
          ((L(s.immediate, x) || x) && L(h.decay, g) && L(h.velocity, ee)) ||
            (S = !0);
      }
      if (
        (C && X(this) && (s.changed && !v ? (S = !0) : S || this._stop(c)),
        !m &&
          ((S || W(c)) &&
            ((s.values = _.getPayload()),
            (s.toValues = W(u) ? null : ne == ln ? [1] : B(y))),
          s.immediate != x && ((s.immediate = x), !x && !v && this._set(c)),
          S))
      ) {
        let { onRest: e } = s;
        R(fr, (e) => pr(this, t, e));
        let r = J(this, sr(this, c));
        Ae(this._pendingCalls, r),
          this._pendingCalls.add(n),
          s.changed &&
            E.batchedUpdates(() => {
              (s.changed = !v),
                e?.(r, this),
                v ? q(o.onRest, r) : s.onStart?.(r, this);
            });
      }
      v && this._set(te),
        m
          ? n(Kn(t.to, t, this._state, this))
          : S
            ? this._start()
            : X(this) && !p
              ? this._pendingCalls.add(n)
              : n(Wn(te));
    }
    _focus(e) {
      let t = this.animation;
      e !== t.to &&
        (Tt(this) && this._detach(), (t.to = e), Tt(this) && this._attach());
    }
    _attach() {
      let e = 0,
        { to: t } = this.animation;
      W(t) && (At(t, this), Xn(t) && (e = t.priority + 1)), (this.priority = e);
    }
    _detach() {
      let { to: e } = this.animation;
      W(e) && jt(e, this);
    }
    _set(e, t = !0) {
      let n = G(e);
      if (!I.und(n)) {
        let e = K(this);
        if (!e || !L(n, e.getValue())) {
          let r = mn(n);
          !e || e.constructor != r ? an(this, r.create(n)) : e.setValue(n),
            e &&
              E.batchedUpdates(() => {
                this._onChange(n, t);
              });
        }
      }
      return K(this);
    }
    _onStart() {
      let e = this.animation;
      e.changed ||
        ((e.changed = !0), mr(this, `onStart`, J(this, sr(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), q(this.animation.onChange, e, this)),
        q(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      let e = this.animation;
      K(this).reset(G(e.to)),
        e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
        X(this) || (ir(this, !0), rr(this) || this._resume());
    }
    _resume() {
      F.skipAnimation ? this.finish() : Be.start(this);
    }
    _stop(e, t) {
      if (X(this)) {
        ir(this, !1);
        let n = this.animation;
        R(n.values, (e) => {
          e.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          Dt(this, { type: `idle`, parent: this });
        let r = t ? Gn(this.get()) : J(this.get(), sr(this, e ?? n.to));
        Ae(this._pendingCalls, r),
          n.changed && ((n.changed = !1), mr(this, `onRest`, r, this));
      }
    }
  };
function sr(e, t) {
  let n = jn(t);
  return L(jn(e.get()), n);
}
function cr(e, t = e.loop, n = e.to) {
  let r = q(t);
  if (r) {
    let i = r !== !0 && An(r),
      a = (i || e).reverse,
      o = !i || i.reset;
    return lr({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !a || Nn(n) ? n : void 0,
      from: o ? e.from : void 0,
      reset: o,
      ...i,
    });
  }
}
function lr(e) {
  let { to: t, from: n } = (e = An(e)),
    r = new Set();
  return (
    I.obj(t) && dr(t, r),
    I.obj(n) && dr(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function ur(e) {
  let t = lr(e);
  return I.und(t.default) && (t.default = En(t)), t;
}
function dr(e, t) {
  z(e, (e, n) => e != null && t.add(n));
}
var fr = [`onStart`, `onRest`, `onChange`, `onPause`, `onResume`];
function pr(e, t, n) {
  e.animation[n] = t[n] === wn(t, n) ? void 0 : Cn(t[n], e.key);
}
function mr(e, t, ...n) {
  e.animation[t]?.(...n), e.defaultProps[t]?.(...n);
}
var hr = [`onStart`, `onChange`, `onRest`],
  gr = 1,
  _r = class {
    constructor(e, t) {
      (this.id = gr++),
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
        I.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(lr(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = B(e).map(lr)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (wr(this, t), vr(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        let n = this.springs;
        R(B(t), (t) => n[t].stop(!!e));
      } else qn(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
      return this;
    }
    pause(e) {
      if (I.und(e)) this.start({ pause: !0 });
      else {
        let t = this.springs;
        R(B(e), (e) => t[e].pause());
      }
      return this;
    }
    resume(e) {
      if (I.und(e)) this.start({ pause: !1 });
      else {
        let t = this.springs;
        R(B(e), (e) => t[e].resume());
      }
      return this;
    }
    each(e) {
      z(this.springs, e);
    }
    _onFrame() {
      let { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        i = this._changed.size > 0;
      ((r && !this._started) || (i && !this._started)) &&
        ((this._started = !0),
        ke(e, ([e, t]) => {
          (t.value = this.get()), e(t, this, this._item);
        }));
      let a = !r && this._started,
        o = i || (a && n.size) ? this.get() : null;
      i &&
        t.size &&
        ke(t, ([e, t]) => {
          (t.value = o), e(t, this, this._item);
        }),
        a &&
          ((this._started = !1),
          ke(n, ([e, t]) => {
            (t.value = o), e(t, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == `change`)
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == `idle`) this._active.delete(e.parent);
      else return;
      E.onFrame(this._onFrame);
    }
  };
function vr(e, t) {
  return Promise.all(t.map((t) => yr(e, t))).then((t) => Un(e, t));
}
async function yr(e, t, n) {
  let { keys: r, to: i, from: a, loop: o, onRest: s, onResolve: c } = t,
    l = I.obj(t.default) && t.default;
  o && (t.loop = !1), i === !1 && (t.to = null), a === !1 && (t.from = null);
  let u = I.arr(i) || I.fun(i) ? i : void 0;
  u
    ? ((t.to = void 0), (t.onRest = void 0), l && (l.onRest = void 0))
    : R(hr, (n) => {
        let r = t[n];
        if (I.fun(r)) {
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
            l && (l[n] = t[n]);
        }
      });
  let d = e._state;
  t.pause === !d.paused
    ? ((d.paused = t.pause), Ae(t.pause ? d.pauseQueue : d.resumeQueue))
    : d.paused && (t.pause = !0);
  let f = (r || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
    p = t.cancel === !0 || wn(t, `cancel`) === !0;
  (u || (p && d.asyncId)) &&
    f.push(
      Hn(++e._lastAsyncId, {
        props: t,
        state: d,
        actions: {
          pause: De,
          resume: De,
          start(t, n) {
            p
              ? (qn(d, e._lastAsyncId), n(Gn(e)))
              : ((t.onRest = s), n(Kn(u, t, d, e)));
          },
        },
      }),
    ),
    d.paused &&
      (await new Promise((e) => {
        d.resumeQueue.add(e);
      }));
  let m = Un(e, await Promise.all(f));
  if (o && m.finished && !(n && m.noop)) {
    let n = cr(t, o, i);
    if (n) return wr(e, [n]), yr(e, n, !0);
  }
  return c && E.batchedUpdates(() => c(m, e, e.item)), m;
}
function br(e, t) {
  let n = { ...e.springs };
  return (
    t &&
      R(B(t), (e) => {
        I.und(e.keys) && (e = lr(e)),
          I.obj(e.to) || (e = { ...e, to: void 0 }),
          Cr(n, e, (e) => Sr(e));
      }),
    xr(e, n),
    n
  );
}
function xr(e, t) {
  z(t, (t, n) => {
    e.springs[n] || ((e.springs[n] = t), At(t, e));
  });
}
function Sr(e, t) {
  let n = new or();
  return (n.key = e), t && At(n, t), n;
}
function Cr(e, t, n) {
  t.keys &&
    R(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function wr(e, t) {
  R(t, (t) => {
    Cr(e.springs, t, (t) => Sr(t, e));
  });
}
var Tr = T.createContext({ pause: !1, immediate: !1 }),
  Er = () => {
    let e = [],
      t = function (t) {
        Jt();
        let r = [];
        return (
          R(e, (e, i) => {
            if (I.und(t)) r.push(e.start());
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
        return R(e, (e) => e.pause(...arguments)), this;
      }),
      (t.resume = function () {
        return R(e, (e) => e.resume(...arguments)), this;
      }),
      (t.set = function (t) {
        R(e, (e, n) => {
          let r = I.fun(t) ? t(n, e) : t;
          r && e.set(r);
        });
      }),
      (t.start = function (t) {
        let n = [];
        return (
          R(e, (e, r) => {
            if (I.und(t)) n.push(e.start());
            else {
              let i = this._getProps(t, e, r);
              i && n.push(e.start(i));
            }
          }),
          n
        );
      }),
      (t.stop = function () {
        return R(e, (e) => e.stop(...arguments)), this;
      }),
      (t.update = function (t) {
        return R(e, (e, n) => e.update(this._getProps(t, e, n))), this;
      });
    let n = function (e, t, n) {
      return I.fun(e) ? e(n, t) : e;
    };
    return (t._getProps = n), t;
  };
function Dr(e, t, n) {
  let r = I.fun(t) && t;
  r && !n && (n = []);
  let i = (0, T.useMemo)(
      () => (r || arguments.length == 3 ? Er() : void 0),
      [],
    ),
    a = (0, T.useRef)(0),
    o = Qt(),
    s = (0, T.useMemo)(
      () => ({
        ctrls: [],
        queue: [],
        flush(e, t) {
          let n = br(e, t);
          return a.current > 0 &&
            !s.queue.length &&
            !Object.keys(n).some((t) => !e.springs[t])
            ? vr(e, t)
            : new Promise((r) => {
                xr(e, n),
                  s.queue.push(() => {
                    r(vr(e, t));
                  }),
                  o();
              });
        },
      }),
      [],
    ),
    c = (0, T.useRef)([...s.ctrls]),
    l = (0, T.useRef)([]),
    u = tn(e) || 0;
  (0, T.useMemo)(() => {
    R(c.current.slice(e, u), (e) => {
      Pn(e, i), e.stop(!0);
    }),
      (c.current.length = e),
      d(u, e);
  }, [e]),
    (0, T.useMemo)(() => {
      d(0, Math.min(u, e));
    }, n);
  function d(e, n) {
    for (let i = e; i < n; i++) {
      let e = c.current[i] || (c.current[i] = new _r(null, s.flush)),
        n = r ? r(i, e) : t[i];
      n && (l.current[i] = ur(n));
    }
  }
  let f = c.current.map((e, t) => br(e, l.current[t])),
    p = (0, T.useContext)(Tr),
    m = p !== tn(p) && Mn(p);
  Xt(() => {
    a.current++, (s.ctrls = c.current);
    let { queue: e } = s;
    e.length && ((s.queue = []), R(e, (e) => e())),
      R(c.current, (e, t) => {
        i?.add(e), m && e.start({ default: p });
        let n = l.current[t];
        n && (Fn(e, n.ref), e.ref ? e.queue.push(n) : e.start(n));
      });
  }),
    $t(() => () => {
      R(s.ctrls, (e) => e.stop(!0));
    });
  let h = f.map((e) => ({ ...e }));
  return i ? [h, i] : h;
}
function Or(e, t) {
  let n = I.fun(e),
    [[r], i] = Dr(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, i] : r;
}
var kr = class extends Qn {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = ft(...t));
    let n = this._get(),
      r = mn(n);
    an(this, r.create(n));
  }
  advance(e) {
    let t = this._get();
    L(t, this.get()) || (K(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && jr(this._active) && Mr(this);
  }
  _get() {
    let e = I.arr(this.source) ? this.source.map(G) : B(G(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !jr(this._active) &&
      ((this.idle = !1),
      R(on(this), (e) => {
        e.done = !1;
      }),
      F.skipAnimation
        ? (E.batchedUpdates(() => this.advance()), Mr(this))
        : Be.start(this));
  }
  _attach() {
    let e = 1;
    R(B(this.source), (t) => {
      W(t) && At(t, this),
        Xn(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    R(B(this.source), (e) => {
      W(e) && jt(e, this);
    }),
      this._active.clear(),
      Mr(this);
  }
  eventObserved(e) {
    e.type == `change`
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == `idle`
        ? this._active.delete(e.parent)
        : e.type == `priority` &&
          (this.priority = B(this.source).reduce(
            (e, t) => Math.max(e, (Xn(t) ? t.priority : 0) + 1),
            0,
          ));
  }
};
function Ar(e) {
  return e.idle !== !1;
}
function jr(e) {
  return !e.size || Array.from(e).every(Ar);
}
function Mr(e) {
  e.idle ||
    ((e.idle = !0),
    R(on(e), (e) => {
      e.done = !0;
    }),
    Dt(e, { type: `idle`, parent: e }));
}
F.assign({ createStringInterpolator: Ht, to: (e, t) => new kr(e, t) }),
  Be.advance;
var Nr = e(t(), 1),
  Pr = /^--/;
function Fr(e, t) {
  return t == null || typeof t == `boolean` || t === ``
    ? ``
    : typeof t == `number` &&
        t !== 0 &&
        !Pr.test(e) &&
        !(Rr.hasOwnProperty(e) && Rr[e])
      ? t + `px`
      : (`` + t).trim();
}
var Ir = {};
function Lr(e, t) {
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
        : Ir[t] ||
          (Ir[t] = t.replace(/([A-Z])/g, (e) => `-` + e.toLowerCase())),
    );
  a !== void 0 && (e.textContent = a);
  for (let t in i)
    if (i.hasOwnProperty(t)) {
      let n = Fr(t, i[t]);
      Pr.test(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
    }
  d.forEach((t, n) => {
    e.setAttribute(t, u[n]);
  }),
    r !== void 0 && (e.className = r),
    o !== void 0 && (e.scrollTop = o),
    s !== void 0 && (e.scrollLeft = s),
    c !== void 0 && e.setAttribute(`viewBox`, c);
}
var Rr = {
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
  zr = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  Br = [`Webkit`, `Ms`, `Moz`, `O`];
Rr = Object.keys(Rr).reduce(
  (e, t) => (Br.forEach((n) => (e[zr(n, t)] = e[t])), e),
  Rr,
);
var Vr = /^(matrix|translate|scale|rotate|skew)/,
  Hr = /^(translate)/,
  Ur = /^(rotate|skew)/,
  Wr = (e, t) => (I.num(e) && e !== 0 ? e + t : e),
  Gr = (e, t) =>
    I.arr(e)
      ? e.every((e) => Gr(e, t))
      : I.num(e)
        ? e === t
        : parseFloat(e) === t,
  Kr = class extends dn {
    constructor({ x: e, y: t, z: n, ...r }) {
      let i = [],
        a = [];
      (e || t || n) &&
        (i.push([e || 0, t || 0, n || 0]),
        a.push((e) => [
          `translate3d(${e.map((e) => Wr(e, `px`)).join(`,`)})`,
          Gr(e, 0),
        ])),
        z(r, (e, t) => {
          if (t === `transform`)
            i.push([e || ``]), a.push((e) => [e, e === ``]);
          else if (Vr.test(t)) {
            if ((delete r[t], I.und(e))) return;
            let n = Hr.test(t) ? `px` : Ur.test(t) ? `deg` : ``;
            i.push(B(e)),
              a.push(
                t === `rotate3d`
                  ? ([e, t, r, i]) => [
                      `rotate3d(${e},${t},${r},${Wr(i, n)})`,
                      Gr(i, 0),
                    ]
                  : (e) => [
                      `${t}(${e.map((e) => Wr(e, n)).join(`,`)})`,
                      Gr(e, +!!t.startsWith(`scale`)),
                    ],
              );
          }
        }),
        i.length && (r.transform = new qr(i, a)),
        super(r);
    }
  },
  qr = class extends Ot {
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
        R(this.inputs, (n, r) => {
          let i = G(n[0]),
            [a, o] = this.transforms[r](I.arr(i) ? i : n.map(G));
          (e += ` ` + a), (t &&= o);
        }),
        t ? `none` : e
      );
    }
    observerAdded(e) {
      e == 1 && R(this.inputs, (e) => R(e, (e) => W(e) && At(e, this)));
    }
    observerRemoved(e) {
      e == 0 && R(this.inputs, (e) => R(e, (e) => W(e) && jt(e, this)));
    }
    eventObserved(e) {
      e.type == `change` && (this._value = null), Dt(this, e);
    }
  },
  Jr =
    `a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(
      `.`,
    );
F.assign({
  batchedUpdates: Nr.unstable_batchedUpdates,
  createStringInterpolator: Ht,
  colors: qe,
});
var Z = bn(Jr, {
    applyAnimatedValues: Lr,
    createAnimatedStyle: (e) => new Kr(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }).animated,
  Q = s(),
  Yr = 8e3,
  Xr = 200,
  Zr = (function (e) {
    return (
      (e[(e.Default = 0)] = `Default`),
      (e[(e.Gold = 1)] = `Gold`),
      (e[(e.LNY2020 = 2)] = `LNY2020`),
      e
    );
  })({});
function Qr(e) {
  switch (e) {
    case 1:
      return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
    case 2:
      return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
    default:
      return `hsl(${Math.random() * 360}, 100%, 40%)`;
  }
}
function $r(e) {
  return e == 2 ? `hue-rotate(${360 + ie(-30, 10)}deg)` : ``;
}
function ei(e, t) {
  let n = [];
  if (!e) return n;
  let { width: r, height: i } = e;
  for (let e = 0; e < Xr; e++) {
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
      m = Qr(t),
      h = $r(t);
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
function ti(e, t, n) {
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
function ni(e, t, n) {
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
var ri = (e, t) => {
    let { anim: n } = Or({
      anim: 1,
      from: { anim: 0 },
      config: { duration: Yr },
    });
    return (0, T.useMemo)(() => {
      let r = ei(e, t);
      return {
        rgParticleStyles: r.map((e) => ti(e, n, t)),
        rgStreamerStyles: r.map((e) => ni(e, n, t)).filter((e) => !!e),
      };
    }, [e, t, n]);
  },
  ii = { position: `absolute`, left: `50%`, top: 0 },
  ai = { ...ii, width: 10, height: 5, borderWidth: 1, borderColor: `black` },
  oi = ({ eType: e }) => {
    let [t, n] = xi(),
      { rgParticleStyles: r, rgStreamerStyles: i } = ri(t, e),
      a;
    switch (e) {
      case 1:
        a = r.map((e, t) => (0, Q.jsx)(ci, { style: e }, t));
        break;
      case 2:
        a = r.map((e, t) =>
          t % 2
            ? (0, Q.jsx)(si, { style: e }, t)
            : (0, Q.jsx)(li, { style: e }, t),
        );
        break;
      case 0:
        a = r.map((e, t) => (0, Q.jsx)(si, { style: e }, t));
    }
    return (0, Q.jsxs)(`div`, {
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
            ? (0, Q.jsx)(vi, { style: e }, t)
            : (0, Q.jsx)(_i, { style: e }, t),
        ),
      ],
    });
  },
  si = ({ style: e }) => (0, Q.jsx)(Z.div, { style: { ...ai, ...e } }),
  ci = ({ style: e }) => {
    let [t] = (0, T.useState)(Math.floor(Math.random() * yi.length)),
      n = yi[t];
    return (0, Q.jsx)(n, { style: { ...ii, ...e, backgroundColor: void 0 } });
  },
  li = ({ style: e }) => {
    let [t] = (0, T.useState)(Math.floor(Math.random() * bi.length)),
      n = bi[t];
    return (0, Q.jsx)(n, { style: { ...ii, ...e, backgroundColor: void 0 } });
  },
  ui = ({ style: e }) =>
    (0, Q.jsx)(Z.svg, {
      viewBox: `0 0 48 102`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 5, height: 10, ...e },
      children: (0, Q.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z`,
        fill: `#F7D51E`,
      }),
    }),
  di = ({ style: e }) =>
    (0, Q.jsxs)(Z.svg, {
      viewBox: `0 0 50 39`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 7, ...e },
      children: [
        (0, Q.jsx)(`path`, {
          d: `M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z`,
          fill: `#C4C4C4`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z`,
          fill: e.fill,
        }),
      ],
    }),
  fi = ({ style: e }) =>
    (0, Q.jsx)(Z.svg, {
      viewBox: `0 0 68 69`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 10, ...e },
      children: (0, Q.jsx)(`rect`, {
        y: `34.6389`,
        width: `48`,
        height: `48`,
        transform: `rotate(-45 0 34.6389)`,
        fill: e.fill,
      }),
    }),
  pi = ({ style: e }) =>
    (0, Q.jsx)(Z.svg, {
      viewBox: `0 0 48 48`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 10, ...e },
      children: (0, Q.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z`,
        fill: e.fill,
      }),
    }),
  mi = ({ style: e }) =>
    (0, Q.jsx)(Z.svg, {
      viewBox: `0 0 48 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 8, ...e },
      children: (0, Q.jsx)(`ellipse`, {
        cx: `24`,
        cy: `15`,
        rx: `24`,
        ry: `15`,
        fill: e.fill,
      }),
    }),
  hi = ({ style: e }) =>
    (0, Q.jsx)(Z.svg, {
      viewBox: `0 0 48 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 8, ...e },
      children: (0, Q.jsx)(`ellipse`, {
        cx: `24`,
        cy: `15`,
        rx: `24`,
        ry: `15`,
        fill: e.fill,
      }),
    }),
  gi = ({ style: e }) =>
    (0, Q.jsx)(Z.svg, {
      viewBox: `0 0 48 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 8, ...e },
      children: (0, Q.jsx)(`ellipse`, {
        cx: `24`,
        cy: `15`,
        rx: `24`,
        ry: `15`,
        fill: e.fill,
      }),
    }),
  _i = ({ style: e }) =>
    (0, Q.jsx)(Z.svg, {
      viewBox: `0 0 80 620`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 70, ...e },
      children: (0, Q.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z`,
        fill: e.fill,
      }),
    }),
  vi = ({ style: e }) =>
    (0, Q.jsx)(Z.svg, {
      viewBox: `0 0 203 295`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      style: { width: 10, height: 20, ...e },
      children: (0, Q.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z`,
        fill: e.fill,
      }),
    }),
  yi = [
    ui,
    di,
    fi,
    pi,
    mi,
    hi,
    gi,
    ({ style: e }) =>
      (0, Q.jsx)(Z.svg, {
        viewBox: `0 0 48 39`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        style: { width: 10, height: 8, ...e },
        children: (0, Q.jsx)(`path`, {
          d: `M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z`,
          fill: e.fill,
        }),
      }),
    ({ style: e }) =>
      (0, Q.jsx)(Z.svg, {
        width: `48`,
        height: `35`,
        viewBox: `0 0 48 35`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        style: { width: 10, height: 7, ...e },
        children: (0, Q.jsx)(`path`, {
          d: `M48 0H0L24 35L48 0Z`,
          fill: e.fill,
        }),
      }),
  ],
  bi = [
    ({ style: e }) =>
      (0, Q.jsxs)(Z.svg, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 54 47.18`,
        style: { width: 28, height: 28, ...e },
        children: [
          (0, Q.jsx)(`polygon`, {
            fill: `#60000e`,
            points: `10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06`,
          }),
          (0, Q.jsx)(`path`, {
            fill: `#f93838`,
            d: `M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z`,
          }),
          (0, Q.jsx)(`path`, {
            fill: `#f93838`,
            d: `M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z`,
          }),
        ],
      }),
    ({ style: e }) =>
      (0, Q.jsxs)(Z.svg, {
        version: `1.1`,
        xmlns: `http://www.w3.org/2000/svg`,
        x: `0px`,
        y: `0px`,
        viewBox: `0 0 14.5 22`,
        style: { width: 28, height: 28, ...e },
        children: [
          (0, Q.jsx)(`path`, {
            fill: `#fc1010`,
            d: `M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z`,
          }),
          (0, Q.jsx)(`path`, {
            fill: `#fc1010`,
            d: `M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z`,
          }),
          (0, Q.jsx)(`path`, {
            fill: `#fc1010`,
            d: `M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z`,
          }),
          (0, Q.jsx)(`path`, {
            fill: `#fc1010`,
            d: `M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z`,
          }),
        ],
      }),
  ];
function xi() {
  let [e, t] = (0, T.useState)(null);
  return [
    e,
    (0, T.useCallback)((e) => {
      e &&
        typeof e.getBoundingClientRect == `function` &&
        t(e.getBoundingClientRect());
    }, []),
  ];
}
var Si = `yP2dR7Z1W90-`,
  Ci = `eHW7GVZ3Oq4-`,
  wi = `u3DNbIlsT6k-`,
  Ti = `xVQBB-2G-Lk-`,
  Ei = `kb7kuRwYFcY-`,
  Di = `FN293cb2ETM-`,
  Oi = `_9XweTSYhq8I-`,
  ki = `_7vO0LPLde9I-`,
  Ai = `_6p0JanCbqeg-`,
  ji = `FTK-BQff1Ww-`,
  Mi = `MAyWcUG-AYY-`,
  Ni = `auJpN-hk-8A-`,
  Pi = `_40RzEM2sa4A-`,
  Fi = `TkXYA1ukdrI-`,
  Ii = `dHg4RkzEaPc-`,
  Li = `gyqDH4Ced90-`,
  Ri = `dMBbhrmjHSU-`,
  zi = `oST-N0GYzHI-`,
  Bi = `odqDGs0A16w-`,
  Vi = `-mSAYEczn-o-`,
  Hi = `_1NNW86s5siw-`,
  Ui = `_4agZ--Zou2E-`,
  Wi = `F8-eMDkHRLo-`,
  Gi = `-ONuBUU8QoA-`,
  Ki = `gf7eu93u-p8-`,
  qi = `whIz8VD05SY-`,
  Ji = `SXXr2BhsVq0-`,
  Yi = `pzim985Bj0E-`,
  Xi = `SSdtSZnIjE0-`,
  Zi = `r9rTBEBJU3Q-`,
  Qi = `_0DDhyuuXLlI-`,
  $i = `ympgL4mlkOc-`,
  ea = `QOHEMBMl9-k-`,
  ta = `MjCQV93Owq0-`,
  na = `VHP1eXb9RhI-`,
  ra = `Gsm7q7AVb60-`,
  ia = `REhkSRza7YA-`;
function aa(e, t) {
  return `${C.STORE_CDN_URL}public/images/loyalty/reactions/${t ? `animated` : `still`}/${e}.png`;
}
function oa() {
  let e = se();
  return r({
    queryKey: [`useGetReactionConfiguration`],
    queryFn: async () => {
      let t = b.Init(u);
      t.Body().set_elanguage(oe(C.LANGUAGE));
      let n = await d.GetReactionConfig(e, t);
      return n.GetEResult() == 1
        ? n.Body().toObject().reactions
        : (console.error(
            `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${n.GetEResult()}`,
          ),
          null);
    },
    staleTime: 1 / 0,
  });
}
function sa(e) {
  let t = oa();
  return (0, T.useMemo)(() => t?.data?.find((t) => t.reactionid === e), [t, e]);
}
var ca = `Wo4YgGDqLZc-`,
  la = (e) => {
    let { className: t, ...n } = e;
    return (0, Q.jsx)(te, { className: w(t, ca), ...n });
  },
  ua = (e) =>
    (0, Q.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z`,
      }),
    }),
  da = class extends T.PureComponent {
    constructor(e) {
      super(e), (this.state = { bHovered: !1 });
    }
    handleMouseOver(e) {
      this.setState({ bHovered: !0 });
    }
    handleMouseOut() {
      this.setState({ bHovered: !1 });
    }
    render() {
      let e = aa(
        this.props.reactionType,
        this.props.bDisableAnimation == 0 &&
          (!!this.state.bHovered || !!this.props.bForceAnimated),
      );
      return (0, Q.jsx)(`img`, {
        className: this.props.className,
        src: e,
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut,
      });
    }
  };
h([y], da.prototype, `handleMouseOver`, null),
  h([y], da.prototype, `handleMouseOut`, null);
function fa(e, t, n) {
  let r = [];
  return (
    e.forEach(function (e) {
      if (e.valid_target_types?.includes(t) && e.purchaseable && e.reactionid)
        switch (t) {
          case 1:
            r.push(e.reactionid);
            break;
          case 2:
            n !== void 0 &&
              e.valid_ugc_types?.includes(n) &&
              r.push(e.reactionid);
            break;
          case 3:
            r.push(e.reactionid);
            break;
          case 4:
            r.push(e.reactionid);
            break;
          case 5:
            r.push(e.reactionid);
        }
    }),
    r
  );
}
var pa = class extends T.Component {
  static defaultProps = { targetType: 1 };
  constructor(e) {
    super(e),
      (window.fnLoyalty_ShowAwardModal = (e, t, n, r, i) => {
        (i ||= 0),
          this.setState({
            bShowModal: !0,
            fnSuccessFunc: n,
            targetid: e,
            ugcType: r,
            initialSelectedReaction: i,
            targetType: t,
          });
      }),
      (this.state = { bShowModal: !1, targetid: ``, targetType: 0 });
  }
  render() {
    let {
      bShowModal: e,
      targetType: t,
      fnSuccessFunc: n,
      targetid: r,
      ugcType: i,
      initialSelectedReaction: a,
    } = this.state;
    return e
      ? (0, Q.jsx)(
          ha,
          {
            targetid: r,
            active: e,
            targetType: t ?? 0,
            ugcType: i,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: n,
            initialSelectedReaction: a,
          },
          r,
        )
      : null;
  }
};
function ma(e) {
  let {
    targetType: t,
    targetid: n,
    bShowModal: r,
    ugcType: i,
    initialSelectedReaction: a,
    onDismiss: o,
    onSuccess: s,
  } = e;
  return (0, Q.jsx)(
    ha,
    {
      targetid: n,
      active: r,
      targetType: t,
      ugcType: i,
      onDismiss: o,
      onSuccess: s,
      initialSelectedReaction: a,
    },
    n,
  );
}
function ha(e) {
  let {
      active: t,
      targetid: n,
      targetType: r,
      ugcType: a,
      initialSelectedReaction: o,
      onSuccess: s,
      onDismiss: c,
    } = e,
    [l, u] = T.useState(o || 0),
    [d, f] = T.useState(0),
    [p, m] = T.useState(!1),
    [h, ee] = T.useState(2),
    te = x(),
    y = se(),
    b = me(!!t, y, n, r),
    re = pe(!!t, y),
    ie = fe(!!t, y),
    oe = de(y),
    ce = b.isPending || re.isPending;
  async function he() {
    l !== null &&
      l != 0 &&
      (f(2),
      await oe.mutate(
        { targetid: n, targetType: r, nReactionId: l },
        {
          onSuccess: () => {
            f(3),
              m(!0),
              setTimeout(() => {
                s && s(n, l);
              }, 2e3);
          },
          onError: (e) => {
            f(4), ee(e);
          },
        },
      ));
  }
  if (
    (T.useEffect(() => {
      b.error && (ee(b.error), f(5));
    }, [b.error]),
    !t)
  )
    return null;
  let E = re.data ?? new Map(),
    D = ie.data ?? new i(0),
    ge = fa(E, r, a),
    O = l === 0 ? null : E.get(l),
    k = O ? O.points_cost : 0,
    A = O ? O.points_transferred : 0,
    j = ``;
  switch (r) {
    case 1:
      j = S(`#GrantAwardDescription_Review`);
      break;
    case 2:
      j = S(`#GrantAwardDescription_UGC`);
      break;
    case 3:
      j = S(`#GrantAwardDescription_Profile`);
      break;
    case 4:
      j = S(`#GrantAwardDescription_ForumTopic`);
      break;
    case 5:
      j = S(`#GrantAwardDescription_Comment`);
  }
  let M;
  switch (d) {
    case 0:
      {
        let e = l === 0 || b.data?.has(l),
          t = !D || D.greaterThanOrEqual(k),
          n = (0, Q.jsx)(ae, {
            onClick: () => f(1),
            disabled: e,
            focusable: !e,
            title: S(
              e ? `#GrantAward_PromptTooltip` : `#GrantAward_SubmitTooltip`,
            ),
            children: S(e ? `#GrantAward_SelectAward` : `#GrantAward_Next`),
          });
        M = (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(ga, { description: j }),
            (0, Q.jsx)($, {}),
            ce &&
              (0, Q.jsx)(`div`, {
                className: `WZOELR5iEJ4-`,
                children: (0, Q.jsx)(`div`, {
                  className: w(`SSdtSZnIjE0-`, `LjXhiCGTyOY-`),
                  children: (0, Q.jsx)(ya, {}),
                }),
              }),
            (0, Q.jsx)(_, {
              className: Ei,
              scrollDirection: te ? `x` : `y`,
              "flow-children": `grid`,
              children:
                !ce &&
                ge.map((e, t) =>
                  (0, Q.jsx)(
                    va,
                    {
                      autoFocus:
                        (l === void 0 && t == 0) ||
                        (e === l && !b.data?.has(e)),
                      reaction: e,
                      selected: e === l && !b.data?.has(e),
                      cost: E.get(e).points_cost,
                      alreadyAwarded: b.data?.has(e),
                      awardConfig: E.get(e),
                      onClick: () => {
                        b.data?.has(e) || u(e === l ? 0 : e);
                      },
                    },
                    e,
                  ),
                ),
            }),
            (0, Q.jsx)($, {}),
            (0, Q.jsx)(_a, {
              pointBalance: D,
              children:
                e || t
                  ? n
                  : [
                      (0, Q.jsx)(
                        `div`,
                        {
                          className: ia,
                          children: S(
                            `#GrantAward_CantAfford`,
                            g(D.negate().add(k).toNumber()),
                          ),
                        },
                        `msg`,
                      ),
                      (0, Q.jsx)(
                        v,
                        {
                          href: `${C.STORE_BASE_URL}points/howitworks`,
                          children: (0, Q.jsx)(
                            ne,
                            { children: S(`#GrantAward_HowToGetPoints`) },
                            `button`,
                          ),
                        },
                        `button`,
                      ),
                    ],
            }),
          ],
        });
      }
      break;
    case 1:
    case 2:
    case 3:
      {
        let e = (0, Q.jsxs)(_a, {
          pointBalance: D,
          children: [
            (0, Q.jsx)(ne, {
              onClick: () => f(0),
              disabled: d !== 1,
              children: S(`#GrantAward_Back`),
            }),
            (0, Q.jsx)(ae, {
              onClick: he,
              title: S(`#GrantAward_SubmitTooltip`),
              disabled: d !== 1,
              children: S(`#GrantAwardNowButton`),
            }),
          ],
        });
        d === 3 &&
          (e = (0, Q.jsx)(_a, {
            pointBalance: D,
            children: (0, Q.jsx)(ne, {
              onClick: c,
              children: S(`#Button_Close`),
            }),
          })),
          (M = (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(ga, { description: j }),
              (0, Q.jsx)($, {}),
              (0, Q.jsxs)(`div`, {
                style: { position: `relative` },
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: w(Gi, d === 1 && `LjXhiCGTyOY-`),
                    children: [
                      (0, Q.jsx)(da, { className: Yi, reactionType: l }),
                      (0, Q.jsxs)(`div`, {
                        className: Ki,
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: qi,
                            children: le(
                              `#GrantAward_Confirm`,
                              (0, Q.jsx)(ba, { children: g(k) }),
                              (0, Q.jsx)(`span`, {
                                className: Ji,
                                children: re.data?.get(l)?.localized_title,
                              }),
                            ),
                          }),
                          A > 0 &&
                            (0, Q.jsx)(`div`, {
                              className: `whIz8VD05SY-`,
                              children: le(
                                `#GrantAward_Confirm_Details`,
                                (0, Q.jsx)(ba, { children: g(A) }),
                                (0, Q.jsx)(`span`, {
                                  className: `eRHxQQB7LoU-`,
                                  children: S(
                                    `#GrantAward_Confirm_DetailsTimePeriod`,
                                  ),
                                }),
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, Q.jsx)(`div`, {
                    className: w(Xi, d === 2 && `LjXhiCGTyOY-`),
                    children: (0, Q.jsx)(ya, {}),
                  }),
                  (0, Q.jsxs)(`div`, {
                    className: w(Zi, d === 3 && `LjXhiCGTyOY-`),
                    children: [
                      (0, Q.jsx)(da, {
                        className: Yi,
                        reactionType: l,
                        bForceAnimated: !0,
                      }),
                      (0, Q.jsx)(`div`, {
                        className: Qi,
                        children: S(`#GrantAward_Success`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, Q.jsx)($, {}),
              e,
            ],
          }));
      }
      break;
    case 4:
      {
        let e = ``;
        switch (h) {
          case 10:
            e = S(`#GrantAwardError_Busy`);
            break;
          case 32:
            e = S(`#GrantAwardError_PersistFailed`);
            break;
          case 8:
            e = S(`#GrantAwardError_InvalidParam`);
            break;
          case 42:
            e = S(`#GrantAwardError_NoMatch`);
            break;
          case 107:
            e = S(`#GrantAwardError_InsufficientFunds`);
            break;
          case 15:
            e = S(`#GrantAwardError_AccessDenied`);
            break;
          case 21:
            e = S(`#GrantAwardError_NotLoggedOn`);
            break;
          case 29:
            e = S(`#GrantAwardError_DuplicateRequest`);
            break;
          default:
            e = S(`#GrantAwardError_Fail`);
        }
        M = (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(ga, { description: j }),
            (0, Q.jsx)($, {}),
            (0, Q.jsx)(`div`, {
              style: { position: `relative` },
              children: (0, Q.jsx)(`div`, {
                className: ea,
                children: (0, Q.jsx)(`div`, { className: ta, children: e }),
              }),
            }),
            (0, Q.jsx)($, {}),
            (0, Q.jsx)(_a, {
              pointBalance: D,
              children: (0, Q.jsx)(ne, {
                onClick: () => f(0),
                children: S(`#GrantAward_Back`),
              }),
            }),
          ],
        });
      }
      break;
    case 5: {
      let e = ``;
      switch (h) {
        case 10:
          e = S(`#GrantAwardError_Busy`);
          break;
        case 21:
          e = S(`#GrantAwardError_NotLoggedOn`);
          break;
        default:
          e = S(`#GrantAwardError_LoadExistingReactions`);
      }
      M = (0, Q.jsxs)(Q.Fragment, {
        children: [
          (0, Q.jsx)(ga, { description: j }),
          (0, Q.jsx)($, {}),
          (0, Q.jsx)(`div`, {
            style: { position: `relative` },
            children: (0, Q.jsx)(`div`, {
              className: ea,
              children: (0, Q.jsx)(`div`, { className: ta, children: e }),
            }),
          }),
          (0, Q.jsx)($, {}),
        ],
      });
    }
  }
  return (0, Q.jsxs)(ue, {
    className: Si,
    active: t,
    onDismiss: c,
    children: [p && (0, Q.jsx)(oi, { eType: Zr.Default }), M],
  });
}
var ga = ({ description: e }) =>
  (0, Q.jsxs)(`div`, {
    className: Ci,
    children: [
      (0, Q.jsx)(`div`, { className: wi, children: S(`#GrantAwardTitle`) }),
      (0, Q.jsx)(`div`, { className: Ti, children: e }),
    ],
  });
function _a(e) {
  let { pointBalance: t, children: n } = e,
    r = t && g(t.toNumber());
  return (0, Q.jsxs)(`div`, {
    className: Mi,
    children: [
      (0, Q.jsxs)(`div`, {
        className: Ni,
        children: [
          (0, Q.jsxs)(`div`, {
            className: Fi,
            children: [
              (0, Q.jsx)(ee, { className: Ii }),
              (0, Q.jsxs)(`div`, {
                className: Li,
                children: [
                  (0, Q.jsx)(`div`, {
                    className: Ri,
                    children: S(`#YourBalance`),
                  }),
                  (0, Q.jsx)(`div`, { className: zi, children: r }),
                ],
              }),
            ],
          }),
          (0, Q.jsx)(`div`, {
            className: Pi,
            children: (0, Q.jsx)(`a`, {
              className: Ui,
              href: `${C.STORE_BASE_URL}points/howitworks`,
              children: S(`#GrantAward_PointsLink`),
            }),
          }),
        ],
      }),
      (0, Q.jsx)(`div`, {
        className: Bi,
        children: (0, Q.jsx)(m, {
          className: Vi,
          "flow-children": `row`,
          children: T.Children.map(n, (e) =>
            (0, Q.jsx)(`div`, { className: Hi, children: e }),
          ),
        }),
      }),
    ],
  });
}
var $ = () => (0, Q.jsx)(`div`, { className: Wi }),
  va = class extends T.PureComponent {
    constructor(e) {
      super(e), (this.state = { bHovered: !1 });
    }
    handleMouseOver(e) {
      this.setState({ bHovered: !0 });
    }
    handleMouseOut() {
      this.setState({ bHovered: !1 });
    }
    render() {
      let {
        reaction: e,
        selected: t,
        alreadyAwarded: n,
        cost: r,
        autoFocus: i,
        awardConfig: a,
        ...o
      } = this.props;
      return (0, Q.jsxs)(la, {
        type: `button`,
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut,
        className: w(Di, t && `m-og4xyOXYQ-`, n && `_2rKrqFXhAJM-`),
        autoFocus: i,
        ...o,
        children: [
          (0, Q.jsx)(`div`, {
            className: ki,
            children: (0, Q.jsx)(da, {
              reactionType: e,
              bForceAnimated: this.state.bHovered,
              bDisableAnimation: n,
            }),
          }),
          (0, Q.jsxs)(`div`, {
            className: Oi,
            children: [
              (0, Q.jsx)(`div`, {
                className: Ai,
                children: a?.localized_title,
              }),
              (0, Q.jsx)(ba, { className: ji, children: g(r ?? 0) }),
            ],
          }),
          n && (0, Q.jsx)(ua, { className: `boQtjulYiNo-` }),
        ],
      });
    }
  };
h([y], va.prototype, `handleMouseOver`, null),
  h([y], va.prototype, `handleMouseOut`, null);
var ya = () => (0, Q.jsx)(c, { size: `large`, className: $i }),
  ba = (e) => {
    let { children: t, className: n, ...r } = e;
    return (0, Q.jsxs)(`span`, {
      ...r,
      className: w(n, na),
      children: [(0, Q.jsx)(ee, { className: ra }), t],
    });
  };
export { sa as a, oa as i, pa as n, aa as r, ma as t };
