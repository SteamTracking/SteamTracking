/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  $ as e,
  A as t,
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  G as s,
  H as c,
  I as l,
  J as u,
  K as d,
  L as f,
  M as p,
  N as m,
  O as h,
  P as g,
  Q as _,
  R as v,
  S as y,
  T as b,
  U as x,
  V as S,
  W as C,
  X as w,
  Y as T,
  Z as E,
  _ as ee,
  a as te,
  b as D,
  c as O,
  d as ne,
  f as re,
  g as ie,
  h as ae,
  i as oe,
  j as se,
  k as ce,
  l as le,
  m as ue,
  n as de,
  o as fe,
  p as pe,
  q as k,
  r as me,
  s as he,
  t as ge,
  u as _e,
  v as ve,
  w as ye,
  x as be,
  y as xe,
  z as A,
} from "./main.js";
var j = e(w(), 1),
  M = T(),
  Se = [`initial`, `xs`, `sm`, `md`, `lg`],
  Ce = (0, j.createContext)({ xs: 375, sm: 768, md: 940, lg: 1240, ff: `lg` });
function we() {
  return (0, j.useContext)(Ce).ff;
}
Se.reduce((e, t, n) => ((e[t] = n), e), {});
var Te = `_3HgSSqEdwS4-`;
function Ee(e) {
  let { children: t, "flow-children": n, ...r } = e,
    { gamepadEvents: a } = ue(e);
  (n && (r.layout = i(n)),
    a.onOKButton ||
      (`onClick` in t.props && t.props.onClick && (a.onOKButton = pe)));
  let o;
  r.focusable && (o = t.props.tabIndex || 0);
  let { ref: s, node: c } = ie(r);
  h(a, s);
  let l = ee(c),
    u = m(s, t.props?.ref, l);
  return (0, M.jsx)(ae.Provider, {
    value: c,
    children: j.cloneElement(t, { ...t.props, ref: u, tabIndex: o }),
  });
}
var De = Se.reduce((e, t, n) => ((e[t] = n), e), {});
function Oe(e, t) {
  if (typeof e != `object`) return e;
  for (let n = De[t]; n >= 0; n--) if (Se[n] in e) return e[Se[n]];
  return e.initial;
}
var ke = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0,
};
function Ae(e) {
  return !!ke[e];
}
function je(e, t, n) {
  let r = [],
    i = {},
    a = {},
    { extracted: o, remaining: s } = Me(e, t);
  for (let s of t) {
    if (!(s.prop in o)) continue;
    let t = o[s.prop];
    if (
      t !== void 0 &&
      (s.responsive && (t = Oe(t, n.formFactor)), t !== void 0)
    ) {
      if (s.className) {
        if (
          !s.cssProperty &&
          !s.dataProperty &&
          typeof s.className == `string` &&
          !t
        )
          continue;
        let e = typeof s.className == `function` ? s.className(t) : s.className;
        r.push(e);
      }
      if (s.cssProperty) {
        if (typeof s.cssProperty == `function`) {
          let r = s.cssProperty(t, e, n.formFactor);
          if (r.length && Array.isArray(r[0]))
            r.forEach(([e, t]) => (i[e] = t));
          else {
            let e = r;
            i[e[0]] = e[1];
          }
        } else i[s.cssProperty] = t;
      }
      if (s.dataProperty) {
        if (typeof s.dataProperty == `function`) {
          let [e, n] = s.dataProperty(t);
          a[`data-${e}`] = n;
        } else a[`data-${s.dataProperty}`] = t;
      }
    }
  }
  return (
    `className` in s && typeof s.className == `string` && r.push(s.className),
    `style` in s &&
      s.style &&
      typeof s.style == `object` &&
      Object.assign(i, s.style),
    { ...a, ...s, className: r.join(` `), style: i }
  );
}
function Me(e, t) {
  let n = { remaining: { ...e }, extracted: {} };
  for (let e of t) {
    let t = e.prop;
    t in n.remaining &&
      ((n.extracted[t] = n.remaining[t]), delete n.remaining[t]);
  }
  return n;
}
function Ne(e, t) {
  return je(e, t, { formFactor: we() });
}
function Pe(e) {
  return Ae(e) ? `var(--spacing-${e})` : e;
}
function Fe(e) {
  if (e[e.length - 1] != `%`) return `var(--color-${e})`;
  let [t, n] = e.split(` `);
  return `rgb( from ${`var(--color-${t})`} r g b / ${n} )`;
}
var N = _({
    AlignSelf: () => Ni,
    AspectRatio: () => Ii,
    Background: () => Ti,
    Border: () => Ai,
    BorderColor: () => ji,
    Cursor: () => hi,
    Display: () => Oi,
    Elevation: () => ki,
    FlexBasis: () => si,
    FlexGrow: () => ci,
    FlexShrink: () => li,
    GridArea: () => wi,
    GridColumn: () => vi,
    GridColumnEnd: () => bi,
    GridColumnStart: () => yi,
    GridRow: () => xi,
    GridRowEnd: () => Ci,
    GridRowStart: () => Si,
    Height: () => ii,
    Inset: () => _i,
    JustifySelf: () => Pi,
    MaxHeight: () => ai,
    MaxWidth: () => ni,
    MinHeight: () => oi,
    MinWidth: () => ri,
    Outline: () => Mi,
    Overflow: () => Ei,
    Position: () => gi,
    "Radius-full": () => mi,
    "Radius-lg": () => pi,
    "Radius-md": () => fi,
    "Radius-none": () => ui,
    "Radius-sm": () => di,
    TextAlign: () => Fi,
    Width: () => ti,
    ZIndex: () => Di,
    default: () => Li,
    "m-0": () => Ie,
    "m-1": () => Le,
    "m-2": () => Re,
    "m-3": () => ze,
    "m-4": () => Be,
    "m-5": () => Ve,
    "m-6": () => He,
    "m-7": () => Ue,
    "m-8": () => We,
    "m-9": () => Ge,
    "mb-0": () => Mt,
    "mb-1": () => Nt,
    "mb-2": () => Pt,
    "mb-3": () => Ft,
    "mb-4": () => It,
    "mb-5": () => Lt,
    "mb-6": () => Rt,
    "mb-7": () => zt,
    "mb-8": () => Bt,
    "mb-9": () => Vt,
    "me-0": () => ln,
    "me-1": () => un,
    "me-2": () => dn,
    "me-3": () => fn,
    "me-4": () => pn,
    "me-5": () => mn,
    "me-6": () => hn,
    "me-7": () => gn,
    "me-8": () => _n,
    "me-9": () => vn,
    "ml-0": () => Ht,
    "ml-1": () => Ut,
    "ml-2": () => Wt,
    "ml-3": () => Gt,
    "ml-4": () => Kt,
    "ml-5": () => qt,
    "ml-6": () => Jt,
    "ml-7": () => Yt,
    "ml-8": () => Xt,
    "ml-9": () => Zt,
    "mr-0": () => St,
    "mr-1": () => Ct,
    "mr-2": () => wt,
    "mr-3": () => Tt,
    "mr-4": () => Et,
    "mr-5": () => Dt,
    "mr-6": () => Ot,
    "mr-7": () => kt,
    "mr-8": () => At,
    "mr-9": () => jt,
    "ms-0": () => Qt,
    "ms-1": () => $t,
    "ms-2": () => en,
    "ms-3": () => tn,
    "ms-4": () => nn,
    "ms-5": () => rn,
    "ms-6": () => an,
    "ms-7": () => on,
    "ms-8": () => sn,
    "ms-9": () => cn,
    "mt-0": () => ft,
    "mt-1": () => pt,
    "mt-2": () => mt,
    "mt-3": () => ht,
    "mt-4": () => gt,
    "mt-5": () => _t,
    "mt-6": () => vt,
    "mt-7": () => yt,
    "mt-8": () => bt,
    "mt-9": () => xt,
    "mx-0": () => Ke,
    "mx-1": () => qe,
    "mx-2": () => Je,
    "mx-3": () => Ye,
    "mx-4": () => Xe,
    "mx-5": () => Ze,
    "mx-6": () => Qe,
    "mx-7": () => $e,
    "mx-8": () => et,
    "mx-9": () => tt,
    "my-0": () => nt,
    "my-1": () => rt,
    "my-2": () => it,
    "my-3": () => at,
    "my-4": () => ot,
    "my-5": () => st,
    "my-6": () => ct,
    "my-7": () => lt,
    "my-8": () => ut,
    "my-9": () => dt,
    "p-0": () => yn,
    "p-1": () => bn,
    "p-2": () => xn,
    "p-3": () => Sn,
    "p-4": () => Cn,
    "p-5": () => wn,
    "p-6": () => Tn,
    "p-7": () => En,
    "p-8": () => Dn,
    "p-9": () => On,
    "pb-0": () => hr,
    "pb-1": () => gr,
    "pb-2": () => _r,
    "pb-3": () => vr,
    "pb-4": () => yr,
    "pb-5": () => br,
    "pb-6": () => xr,
    "pb-7": () => Sr,
    "pb-8": () => Cr,
    "pb-9": () => wr,
    "pe-0": () => Gr,
    "pe-1": () => Kr,
    "pe-2": () => qr,
    "pe-3": () => Jr,
    "pe-4": () => Yr,
    "pe-5": () => Xr,
    "pe-6": () => Zr,
    "pe-7": () => Qr,
    "pe-8": () => $r,
    "pe-9": () => ei,
    "pl-0": () => Tr,
    "pl-1": () => Er,
    "pl-2": () => Dr,
    "pl-3": () => Or,
    "pl-4": () => kr,
    "pl-5": () => Ar,
    "pl-6": () => jr,
    "pl-7": () => Mr,
    "pl-8": () => Nr,
    "pl-9": () => Pr,
    "pr-0": () => ar,
    "pr-1": () => or,
    "pr-2": () => sr,
    "pr-3": () => cr,
    "pr-4": () => lr,
    "pr-5": () => ur,
    "pr-6": () => dr,
    "pr-7": () => fr,
    "pr-8": () => pr,
    "pr-9": () => mr,
    "ps-0": () => Fr,
    "ps-1": () => Ir,
    "ps-2": () => Lr,
    "ps-3": () => Rr,
    "ps-4": () => zr,
    "ps-5": () => Br,
    "ps-6": () => Vr,
    "ps-7": () => Hr,
    "ps-8": () => Ur,
    "ps-9": () => Wr,
    "pt-0": () => Yn,
    "pt-1": () => Xn,
    "pt-2": () => Zn,
    "pt-3": () => Qn,
    "pt-4": () => $n,
    "pt-5": () => er,
    "pt-6": () => tr,
    "pt-7": () => nr,
    "pt-8": () => rr,
    "pt-9": () => ir,
    "px-0": () => kn,
    "px-1": () => An,
    "px-2": () => jn,
    "px-3": () => Mn,
    "px-4": () => Nn,
    "px-5": () => Pn,
    "px-6": () => Fn,
    "px-7": () => In,
    "px-8": () => Ln,
    "px-9": () => Rn,
    "py-0": () => zn,
    "py-1": () => Bn,
    "py-2": () => Vn,
    "py-3": () => Hn,
    "py-4": () => Un,
    "py-5": () => Wn,
    "py-6": () => Gn,
    "py-7": () => Kn,
    "py-8": () => qn,
    "py-9": () => Jn,
  }),
  Ie = `eclzI6sdg2M-`,
  Le = `OET6f-D0V5E-`,
  Re = `_6sp8cDKTCLU-`,
  ze = `XySMHrD5hLY-`,
  Be = `J4MnNoFI-oI-`,
  Ve = `uV-Qjqt1sVg-`,
  He = `olAnEghDOr0-`,
  Ue = `_3BUaFjdV2LE-`,
  We = `YmQQPtiNqmU-`,
  Ge = `VruIH79rBqw-`,
  Ke = `dURWKxl2Do0-`,
  qe = `qS-bkqlKzwU-`,
  Je = `tceW312QAsw-`,
  Ye = `DJTK3K35ICQ-`,
  Xe = `ZP65E-erOK4-`,
  Ze = `X7sE2S62NkI-`,
  Qe = `_5-KblbnyKRg-`,
  $e = `Em3UumfVnuU-`,
  et = `d4laauFH2Xk-`,
  tt = `_3SRN-rICSdA-`,
  nt = `C8Yx-FjgFW4-`,
  rt = `_0RFSf5tFmz4-`,
  it = `X9cxQuOx9-M-`,
  at = `L9t-s63sM-g-`,
  ot = `dBtOdloI9LI-`,
  st = `o3aO5wl7pYw-`,
  ct = `_4bQujlF8l-w-`,
  lt = `-MUHaqZOitw-`,
  ut = `tEfXMPNeVPs-`,
  dt = `a-RUQoByT1o-`,
  ft = `mN19uo4aB9c-`,
  pt = `FL6oGmLhByQ-`,
  mt = `VLdURefDSgM-`,
  ht = `LcmLHt-QJQs-`,
  gt = `_9NWdntHSpFE-`,
  _t = `ymhJlaxKKdc-`,
  vt = `J3LTpJFygpM-`,
  yt = `_9FCSlvyFwt8-`,
  bt = `FbQUL2kYjPw-`,
  xt = `h8NcgWP-9cc-`,
  St = `ltev0FUbOrE-`,
  Ct = `hMYxPjTzIbg-`,
  wt = `bZy0GT5PQKc-`,
  Tt = `_82MIx5F6PBs-`,
  Et = `ra7ZmAKw-Pk-`,
  Dt = `APQ324IoHa4-`,
  Ot = `uFKnE5TLyX8-`,
  kt = `cHoV-Uqm1vU-`,
  At = `gEfj9KNJ-6Y-`,
  jt = `_8yB7Wt5Bx5w-`,
  Mt = `VOx62wXVslo-`,
  Nt = `TaAq10eoTwM-`,
  Pt = `zFCPo1NnTZc-`,
  Ft = `K1bSlovaw8M-`,
  It = `hoWhsU-UyYs-`,
  Lt = `wKUUd9TJp-8-`,
  Rt = `WL0mLLVvUUw-`,
  zt = `uqdrWvuTvDc-`,
  Bt = `muzrkQtyEyM-`,
  Vt = `_0932hlwAxXU-`,
  Ht = `_5zVVdcsEcIU-`,
  Ut = `sTT0BANqYOk-`,
  Wt = `E-gcZsV1D2Q-`,
  Gt = `_7NCaKn1lnXQ-`,
  Kt = `bcJrKQvP1vI-`,
  qt = `x1ugUPtcqW0-`,
  Jt = `PwO20KYqq9Q-`,
  Yt = `G8SP7zRhw2M-`,
  Xt = `Wfja8EAHLJ8-`,
  Zt = `H2wfJj1wboY-`,
  Qt = `BVmiSv-Z3es-`,
  $t = `RKIoo3yKjug-`,
  en = `JizR39R3hIA-`,
  tn = `fkHPsZfU3NE-`,
  nn = `xuEgsl8loAU-`,
  rn = `EZMXk27jhS0-`,
  an = `aHy8BhW-71o-`,
  on = `CuGlODrVe7Q-`,
  sn = `gGOe--gPQIE-`,
  cn = `gtTCjeyt0d4-`,
  ln = `-wWCN9Pi0UE-`,
  un = `nwn7dT0ciNM-`,
  dn = `uyVpqZLchKg-`,
  fn = `_1VY0i2RpHfU-`,
  pn = `ri1GMR0bSCo-`,
  mn = `pRB6wTtl9n4-`,
  hn = `_4P-3S5YlUnU-`,
  gn = `l8RDxa3uyrw-`,
  _n = `KWAHE8bdQvw-`,
  vn = `yi-8-oIqm3U-`,
  yn = `NxUB7cL1MvU-`,
  bn = `qUXb6MBcClg-`,
  xn = `gEM5qnbRU58-`,
  Sn = `icJTR-r-wDw-`,
  Cn = `HEEsuypcul0-`,
  wn = `_8xvqsidQRw8-`,
  Tn = `NQnLyMY1r-E-`,
  En = `bV2ueI7Mam8-`,
  Dn = `fKNsGNbPWHA-`,
  On = `p0lvEL23f1s-`,
  kn = `M8eEjooTqwI-`,
  An = `bEoYeP62vKg-`,
  jn = `JI70sNXU-F0-`,
  Mn = `QKlzhnHROyA-`,
  Nn = `Syca5vmthuQ-`,
  Pn = `VPvuSU7AjD8-`,
  Fn = `RXC1XNbMMW0-`,
  In = `mm3xzbHpm8k-`,
  Ln = `acp-9VVWd2o-`,
  Rn = `SDtfyXjgcSo-`,
  zn = `oO8cHrFC6bc-`,
  Bn = `_2l8Zmi4dQh4-`,
  Vn = `mh8aBu-Ya2Y-`,
  Hn = `hA-ldQzzhLQ-`,
  Un = `dscWMXtEYqA-`,
  Wn = `_1KyIjvCsRIg-`,
  Gn = `ctrqfHXnR5Q-`,
  Kn = `z-DfrUJmdSs-`,
  qn = `HCr-OXW32FQ-`,
  Jn = `RFYtZOc5SNY-`,
  Yn = `DJFs9VUUl90-`,
  Xn = `_45aiUtQ4AQQ-`,
  Zn = `lLdowZ-8Mo8-`,
  Qn = `PsjzYM9us1s-`,
  $n = `el0rQTeK5JM-`,
  er = `KPgD-GcS5v0-`,
  tr = `EkQHIUqwHCw-`,
  nr = `bi54Dv5OCX0-`,
  rr = `Rks89SEFpRQ-`,
  ir = `B0q4MiiTwNg-`,
  ar = `tEoL0UNrEb0-`,
  or = `TFfcfaU-yiE-`,
  sr = `F8Ksjg0n-RQ-`,
  cr = `_36K1WfxS3eY-`,
  lr = `b67XdgjVxJM-`,
  ur = `s2gpZIoMDgg-`,
  dr = `_3ggT5I7zXoQ-`,
  fr = `DPsTT2K-fwU-`,
  pr = `u-tyqVlIKcI-`,
  mr = `_01jXQmps9e8-`,
  hr = `D5SEZGfMKag-`,
  gr = `_2W-WTUmk-rI-`,
  _r = `c8D9ObEiGls-`,
  vr = `Q9Io7j3-vDg-`,
  yr = `_45y3p7WUvHU-`,
  br = `UtclkKyWIjw-`,
  xr = `QzBwx1d4O3w-`,
  Sr = `CCyhaDN2aRs-`,
  Cr = `NtltCfuAGiY-`,
  wr = `kYUCzn-htEg-`,
  Tr = `x0oPABf8fXY-`,
  Er = `m-udPQ79lAg-`,
  Dr = `MZdK4NNjCj8-`,
  Or = `_4JLDaGmvcsk-`,
  kr = `Hk3I3WALSsA-`,
  Ar = `uiOeAZp4VaY-`,
  jr = `_7Oiep76eWWI-`,
  Mr = `siWKNUeJudQ-`,
  Nr = `_7nCMv-NHH5A-`,
  Pr = `tYey-adp5Zg-`,
  Fr = `Yn612HbVmsc-`,
  Ir = `ziBTSfZVYhg-`,
  Lr = `zMvCm1h-OHs-`,
  Rr = `_2t0SB4RkHXE-`,
  zr = `_7b4cEwhjmXQ-`,
  Br = `foa3eScS1z8-`,
  Vr = `Be2Eotc8DQI-`,
  Hr = `Z5VqL3cRIqo-`,
  Ur = `rAqt9XWxOXo-`,
  Wr = `_25pCHyTD-hM-`,
  Gr = `-qd6I3tJBUQ-`,
  Kr = `_4LJ0nGuwjpY-`,
  qr = `ZW2qp59a0cU-`,
  Jr = `Vycl2A5dcuk-`,
  Yr = `mB1gNDP-Qjo-`,
  Xr = `Ar1HtksUl58-`,
  Zr = `Rgi6ZFNtTBE-`,
  Qr = `gnuEf0idTlQ-`,
  $r = `TRKBX73nzYk-`,
  ei = `p3f0wJIWWzU-`,
  ti = `LXuyTO7ejPo-`,
  ni = `_6EO-B9227bY-`,
  ri = `BfBoDdNJ2hc-`,
  ii = `sa-yPhXDpWI-`,
  ai = `tL7M4lwOkCU-`,
  oi = `pMmT9Mc1hok-`,
  si = `zFvTSzAjiO4-`,
  ci = `xuzc3QDXAUA-`,
  li = `Yf-BDVYAocE-`,
  ui = `L6F1vgJ7QGI-`,
  di = `yDw9gqlgbxM-`,
  fi = `N4yONvg-bK8-`,
  pi = `zANRA1HSa28-`,
  mi = `PRQtAssp1sU-`,
  hi = `_1-rWRVfT3WY-`,
  gi = `tAC3I9C0M5A-`,
  _i = `iAKWNM19q0U-`,
  vi = `zJ6-t0HvtWA-`,
  yi = `abDPfu64slU-`,
  bi = `AfzNHiFzXQQ-`,
  xi = `MBtWFtzpBz4-`,
  Si = `PFPWwoAdkHY-`,
  Ci = `Y-Y-o4ja9Fo-`,
  wi = `_0W8PpldYK-Q-`,
  Ti = `GHgOdVtfrgI-`,
  Ei = `yMG3LQVyb4c-`,
  Di = `_6GQVMv8tMXs-`,
  Oi = `zamIm-gLIMs-`,
  ki = `aiYqj6TT82w-`,
  Ai = `ZHwuNyPjFYY-`,
  ji = `_60WSfkXr2MM-`,
  Mi = `ADD3QF-elQY-`,
  Ni = `yIGUGD6-xG0-`,
  Pi = `pcbB-x-xXEA-`,
  Fi = `uGLQ-lijlWA-`,
  Ii = `U7HgSIvBMLk-`,
  Li = {
    "m-0": `eclzI6sdg2M-`,
    "m-1": `OET6f-D0V5E-`,
    "m-2": `_6sp8cDKTCLU-`,
    "m-3": `XySMHrD5hLY-`,
    "m-4": `J4MnNoFI-oI-`,
    "m-5": `uV-Qjqt1sVg-`,
    "m-6": `olAnEghDOr0-`,
    "m-7": `_3BUaFjdV2LE-`,
    "m-8": `YmQQPtiNqmU-`,
    "m-9": `VruIH79rBqw-`,
    "mx-0": `dURWKxl2Do0-`,
    "mx-1": `qS-bkqlKzwU-`,
    "mx-2": `tceW312QAsw-`,
    "mx-3": `DJTK3K35ICQ-`,
    "mx-4": `ZP65E-erOK4-`,
    "mx-5": `X7sE2S62NkI-`,
    "mx-6": `_5-KblbnyKRg-`,
    "mx-7": `Em3UumfVnuU-`,
    "mx-8": `d4laauFH2Xk-`,
    "mx-9": `_3SRN-rICSdA-`,
    "my-0": `C8Yx-FjgFW4-`,
    "my-1": `_0RFSf5tFmz4-`,
    "my-2": `X9cxQuOx9-M-`,
    "my-3": `L9t-s63sM-g-`,
    "my-4": `dBtOdloI9LI-`,
    "my-5": `o3aO5wl7pYw-`,
    "my-6": `_4bQujlF8l-w-`,
    "my-7": `-MUHaqZOitw-`,
    "my-8": `tEfXMPNeVPs-`,
    "my-9": `a-RUQoByT1o-`,
    "mt-0": `mN19uo4aB9c-`,
    "mt-1": `FL6oGmLhByQ-`,
    "mt-2": `VLdURefDSgM-`,
    "mt-3": `LcmLHt-QJQs-`,
    "mt-4": `_9NWdntHSpFE-`,
    "mt-5": `ymhJlaxKKdc-`,
    "mt-6": `J3LTpJFygpM-`,
    "mt-7": `_9FCSlvyFwt8-`,
    "mt-8": `FbQUL2kYjPw-`,
    "mt-9": `h8NcgWP-9cc-`,
    "mr-0": `ltev0FUbOrE-`,
    "mr-1": `hMYxPjTzIbg-`,
    "mr-2": `bZy0GT5PQKc-`,
    "mr-3": `_82MIx5F6PBs-`,
    "mr-4": `ra7ZmAKw-Pk-`,
    "mr-5": `APQ324IoHa4-`,
    "mr-6": `uFKnE5TLyX8-`,
    "mr-7": `cHoV-Uqm1vU-`,
    "mr-8": `gEfj9KNJ-6Y-`,
    "mr-9": `_8yB7Wt5Bx5w-`,
    "mb-0": `VOx62wXVslo-`,
    "mb-1": `TaAq10eoTwM-`,
    "mb-2": `zFCPo1NnTZc-`,
    "mb-3": `K1bSlovaw8M-`,
    "mb-4": `hoWhsU-UyYs-`,
    "mb-5": `wKUUd9TJp-8-`,
    "mb-6": `WL0mLLVvUUw-`,
    "mb-7": `uqdrWvuTvDc-`,
    "mb-8": `muzrkQtyEyM-`,
    "mb-9": `_0932hlwAxXU-`,
    "ml-0": `_5zVVdcsEcIU-`,
    "ml-1": `sTT0BANqYOk-`,
    "ml-2": `E-gcZsV1D2Q-`,
    "ml-3": `_7NCaKn1lnXQ-`,
    "ml-4": `bcJrKQvP1vI-`,
    "ml-5": `x1ugUPtcqW0-`,
    "ml-6": `PwO20KYqq9Q-`,
    "ml-7": `G8SP7zRhw2M-`,
    "ml-8": `Wfja8EAHLJ8-`,
    "ml-9": `H2wfJj1wboY-`,
    "ms-0": `BVmiSv-Z3es-`,
    "ms-1": `RKIoo3yKjug-`,
    "ms-2": `JizR39R3hIA-`,
    "ms-3": `fkHPsZfU3NE-`,
    "ms-4": `xuEgsl8loAU-`,
    "ms-5": `EZMXk27jhS0-`,
    "ms-6": `aHy8BhW-71o-`,
    "ms-7": `CuGlODrVe7Q-`,
    "ms-8": `gGOe--gPQIE-`,
    "ms-9": `gtTCjeyt0d4-`,
    "me-0": `-wWCN9Pi0UE-`,
    "me-1": `nwn7dT0ciNM-`,
    "me-2": `uyVpqZLchKg-`,
    "me-3": `_1VY0i2RpHfU-`,
    "me-4": `ri1GMR0bSCo-`,
    "me-5": `pRB6wTtl9n4-`,
    "me-6": `_4P-3S5YlUnU-`,
    "me-7": `l8RDxa3uyrw-`,
    "me-8": `KWAHE8bdQvw-`,
    "me-9": `yi-8-oIqm3U-`,
    "p-0": `NxUB7cL1MvU-`,
    "p-1": `qUXb6MBcClg-`,
    "p-2": `gEM5qnbRU58-`,
    "p-3": `icJTR-r-wDw-`,
    "p-4": `HEEsuypcul0-`,
    "p-5": `_8xvqsidQRw8-`,
    "p-6": `NQnLyMY1r-E-`,
    "p-7": `bV2ueI7Mam8-`,
    "p-8": `fKNsGNbPWHA-`,
    "p-9": `p0lvEL23f1s-`,
    "px-0": `M8eEjooTqwI-`,
    "px-1": `bEoYeP62vKg-`,
    "px-2": `JI70sNXU-F0-`,
    "px-3": `QKlzhnHROyA-`,
    "px-4": `Syca5vmthuQ-`,
    "px-5": `VPvuSU7AjD8-`,
    "px-6": `RXC1XNbMMW0-`,
    "px-7": `mm3xzbHpm8k-`,
    "px-8": `acp-9VVWd2o-`,
    "px-9": `SDtfyXjgcSo-`,
    "py-0": `oO8cHrFC6bc-`,
    "py-1": `_2l8Zmi4dQh4-`,
    "py-2": `mh8aBu-Ya2Y-`,
    "py-3": `hA-ldQzzhLQ-`,
    "py-4": `dscWMXtEYqA-`,
    "py-5": `_1KyIjvCsRIg-`,
    "py-6": `ctrqfHXnR5Q-`,
    "py-7": `z-DfrUJmdSs-`,
    "py-8": `HCr-OXW32FQ-`,
    "py-9": `RFYtZOc5SNY-`,
    "pt-0": `DJFs9VUUl90-`,
    "pt-1": `_45aiUtQ4AQQ-`,
    "pt-2": `lLdowZ-8Mo8-`,
    "pt-3": `PsjzYM9us1s-`,
    "pt-4": `el0rQTeK5JM-`,
    "pt-5": `KPgD-GcS5v0-`,
    "pt-6": `EkQHIUqwHCw-`,
    "pt-7": `bi54Dv5OCX0-`,
    "pt-8": `Rks89SEFpRQ-`,
    "pt-9": `B0q4MiiTwNg-`,
    "pr-0": `tEoL0UNrEb0-`,
    "pr-1": `TFfcfaU-yiE-`,
    "pr-2": `F8Ksjg0n-RQ-`,
    "pr-3": `_36K1WfxS3eY-`,
    "pr-4": `b67XdgjVxJM-`,
    "pr-5": `s2gpZIoMDgg-`,
    "pr-6": `_3ggT5I7zXoQ-`,
    "pr-7": `DPsTT2K-fwU-`,
    "pr-8": `u-tyqVlIKcI-`,
    "pr-9": `_01jXQmps9e8-`,
    "pb-0": `D5SEZGfMKag-`,
    "pb-1": `_2W-WTUmk-rI-`,
    "pb-2": `c8D9ObEiGls-`,
    "pb-3": `Q9Io7j3-vDg-`,
    "pb-4": `_45y3p7WUvHU-`,
    "pb-5": `UtclkKyWIjw-`,
    "pb-6": `QzBwx1d4O3w-`,
    "pb-7": `CCyhaDN2aRs-`,
    "pb-8": `NtltCfuAGiY-`,
    "pb-9": `kYUCzn-htEg-`,
    "pl-0": `x0oPABf8fXY-`,
    "pl-1": `m-udPQ79lAg-`,
    "pl-2": `MZdK4NNjCj8-`,
    "pl-3": `_4JLDaGmvcsk-`,
    "pl-4": `Hk3I3WALSsA-`,
    "pl-5": `uiOeAZp4VaY-`,
    "pl-6": `_7Oiep76eWWI-`,
    "pl-7": `siWKNUeJudQ-`,
    "pl-8": `_7nCMv-NHH5A-`,
    "pl-9": `tYey-adp5Zg-`,
    "ps-0": `Yn612HbVmsc-`,
    "ps-1": `ziBTSfZVYhg-`,
    "ps-2": `zMvCm1h-OHs-`,
    "ps-3": `_2t0SB4RkHXE-`,
    "ps-4": `_7b4cEwhjmXQ-`,
    "ps-5": `foa3eScS1z8-`,
    "ps-6": `Be2Eotc8DQI-`,
    "ps-7": `Z5VqL3cRIqo-`,
    "ps-8": `rAqt9XWxOXo-`,
    "ps-9": `_25pCHyTD-hM-`,
    "pe-0": `-qd6I3tJBUQ-`,
    "pe-1": `_4LJ0nGuwjpY-`,
    "pe-2": `ZW2qp59a0cU-`,
    "pe-3": `Vycl2A5dcuk-`,
    "pe-4": `mB1gNDP-Qjo-`,
    "pe-5": `Ar1HtksUl58-`,
    "pe-6": `Rgi6ZFNtTBE-`,
    "pe-7": `gnuEf0idTlQ-`,
    "pe-8": `TRKBX73nzYk-`,
    "pe-9": `p3f0wJIWWzU-`,
    Width: ti,
    MaxWidth: ni,
    MinWidth: ri,
    Height: ii,
    MaxHeight: ai,
    MinHeight: oi,
    FlexBasis: si,
    FlexGrow: ci,
    FlexShrink: li,
    "Radius-none": `L6F1vgJ7QGI-`,
    "Radius-sm": `yDw9gqlgbxM-`,
    "Radius-md": `N4yONvg-bK8-`,
    "Radius-lg": `zANRA1HSa28-`,
    "Radius-full": `PRQtAssp1sU-`,
    Cursor: hi,
    Position: gi,
    Inset: _i,
    GridColumn: vi,
    GridColumnStart: yi,
    GridColumnEnd: bi,
    GridRow: xi,
    GridRowStart: Si,
    GridRowEnd: Ci,
    GridArea: wi,
    Background: Ti,
    Overflow: Ei,
    ZIndex: Di,
    Display: Oi,
    Elevation: ki,
    Border: Ai,
    BorderColor: ji,
    Outline: Mi,
    AlignSelf: Ni,
    JustifySelf: Pi,
    TextAlign: Fi,
    AspectRatio: Ii,
  },
  Ri = [
    { prop: `margin`, responsive: !0, className: (e) => N[`m-${e}`] },
    { prop: `marginX`, responsive: !0, className: (e) => N[`mx-${e}`] },
    { prop: `marginY`, responsive: !0, className: (e) => N[`my-${e}`] },
    { prop: `marginTop`, responsive: !0, className: (e) => N[`mt-${e}`] },
    { prop: `marginRight`, responsive: !0, className: (e) => N[`mr-${e}`] },
    { prop: `marginBottom`, responsive: !0, className: (e) => N[`mb-${e}`] },
    { prop: `marginLeft`, responsive: !0, className: (e) => N[`ml-${e}`] },
    { prop: `marginStart`, responsive: !0, className: (e) => N[`ms-${e}`] },
    { prop: `marginEnd`, responsive: !0, className: (e) => N[`me-${e}`] },
  ],
  zi = [
    ...Ri,
    { prop: `padding`, responsive: !0, className: (e) => N[`p-${e}`] },
    { prop: `paddingX`, responsive: !0, className: (e) => N[`px-${e}`] },
    { prop: `paddingY`, responsive: !0, className: (e) => N[`py-${e}`] },
    { prop: `paddingTop`, responsive: !0, className: (e) => N[`pt-${e}`] },
    { prop: `paddingRight`, responsive: !0, className: (e) => N[`pr-${e}`] },
    { prop: `paddingBottom`, responsive: !0, className: (e) => N[`pb-${e}`] },
    { prop: `paddingLeft`, responsive: !0, className: (e) => N[`pl-${e}`] },
    { prop: `paddingStart`, responsive: !0, className: (e) => N[`ps-${e}`] },
    { prop: `paddingEnd`, responsive: !0, className: (e) => N[`pe-${e}`] },
    { prop: `width`, responsive: !0, className: ti, cssProperty: `--width` },
    {
      prop: `minWidth`,
      responsive: !0,
      className: ri,
      cssProperty: `--min-width`,
    },
    {
      prop: `maxWidth`,
      responsive: !0,
      className: ni,
      cssProperty: `--max-width`,
    },
    { prop: `height`, responsive: !0, className: ii, cssProperty: `--height` },
    {
      prop: `minHeight`,
      responsive: !0,
      className: oi,
      cssProperty: `--min-height`,
    },
    {
      prop: `maxHeight`,
      responsive: !0,
      className: ai,
      cssProperty: `--max-height`,
    },
    {
      prop: `flexBasis`,
      responsive: !0,
      className: si,
      cssProperty: `--flex-basis`,
    },
    {
      prop: `flexGrow`,
      responsive: !0,
      className: ci,
      cssProperty: `--flex-grow`,
    },
    {
      prop: `flexShrink`,
      responsive: !0,
      className: li,
      cssProperty: `--flex-shrink`,
    },
    { prop: `radius`, responsive: !0, className: (e) => N[`Radius-${e}`] },
    { prop: `cursor`, responsive: !0, className: hi, cssProperty: `--cursor` },
    {
      prop: `position`,
      responsive: !0,
      className: gi,
      cssProperty: `--position`,
    },
    {
      prop: `inset`,
      responsive: !0,
      className: _i,
      cssProperty: (e) => [`--inset`, Pe(e)],
    },
    {
      prop: `gridColumn`,
      responsive: !0,
      className: vi,
      cssProperty: `--grid-column`,
    },
    {
      prop: `gridColumnStart`,
      responsive: !0,
      className: yi,
      cssProperty: `--grid-column-start`,
    },
    {
      prop: `gridColumnEnd`,
      responsive: !0,
      className: bi,
      cssProperty: `--grid-column-end`,
    },
    {
      prop: `gridRow`,
      responsive: !0,
      className: xi,
      cssProperty: `--grid-row`,
    },
    {
      prop: `gridRowStart`,
      responsive: !0,
      className: Si,
      cssProperty: `--grid-row-start`,
    },
    {
      prop: `gridRowEnd`,
      responsive: !0,
      className: Ci,
      cssProperty: `--grid-row-end`,
    },
    {
      prop: `gridArea`,
      responsive: !0,
      className: wi,
      cssProperty: `--grid-area`,
    },
    {
      prop: `alignSelf`,
      responsive: !0,
      className: Ni,
      cssProperty: `--align-self`,
    },
    {
      prop: `justifySelf`,
      responsive: !0,
      className: Pi,
      cssProperty: `--justify-self`,
    },
    {
      prop: `background`,
      responsive: !0,
      className: Ti,
      cssProperty: (e) => [`--background`, Fe(e)],
    },
    {
      prop: `overflow`,
      responsive: !0,
      className: Ei,
      cssProperty: `--overflow`,
    },
    { prop: `zIndex`, responsive: !0, className: Di, cssProperty: `--z-index` },
    {
      prop: `display`,
      responsive: !0,
      className: Oi,
      cssProperty: `--display`,
    },
    {
      prop: `elevation`,
      responsive: !0,
      className: ki,
      dataProperty: `elevation`,
    },
    { prop: `border`, responsive: !0, className: Ai, cssProperty: `--border` },
    {
      prop: `borderColor`,
      responsive: !0,
      className: [Ai, ji].join(` `),
      cssProperty: (e) => [`--border-color`, Fe(e)],
    },
    {
      prop: `outline`,
      responsive: !0,
      className: Mi,
      cssProperty: (e) => [`--outline-color`, Fe(e)],
    },
    {
      prop: `textAlign`,
      responsive: !0,
      className: Fi,
      cssProperty: `--text-align`,
    },
    {
      prop: `aspectRatio`,
      responsive: !0,
      className: Ii,
      cssProperty: `--aspect-ratio`,
    },
  ],
  Bi = `xtBr-L5Owus-`;
function Vi() {
  return Bi;
}
var P = e(se(), 1);
function Hi(e) {
  let { as: t = `div`, focusable: n, navProps: r, ref: i, ...a } = e,
    o = ve(),
    s = Ne({ ...a, className: (0, P.default)(Te, Vi(), e.className) }, Ui),
    c = n ?? r?.focusable ?? !!a.onClick,
    l = (0, M.jsx)(t, { ref: i, ...s });
  return o && (c || r)
    ? (0, M.jsx)(Ee, { ...(r || {}), focusable: c, children: l })
    : l;
}
var Ui = zi,
  Wi = `PmISXgz3FoQ-`,
  Gi = `Bj8vGJI7AGo-`,
  Ki = `_2AVS3LuARvU-`,
  qi = `rC6xro2ZWbk-`,
  Ji = `oln6i1TGpO0-`,
  Yi = `xTWnfrOQ1MU-`,
  Xi = `h31r9FtdgH0-`,
  Zi = `AwByPYmuf2E-`,
  Qi = `rPm-B0T-Plk-`;
function $i(e) {
  let { as: t = `div`, focusable: n, navProps: r, ref: i, ...a } = e,
    o = ve(),
    s = Ne({ ...a, className: (0, P.default)(e.className, Wi) }, ea),
    c = n ?? r?.focusable ?? !!a.onClick,
    l = (0, M.jsx)(t, { ref: i, ...s }),
    u = we();
  if (o) {
    let e = Oe(a.wrap, u),
      t = Oe(a.direction, u) ?? `row`;
    return (
      e === `wrap` && t === `row` && (t = `grid`),
      (0, M.jsx)(Ee, {
        ...(r || {}),
        focusable: c,
        "flow-children": t,
        children: l,
      })
    );
  }
  return l;
}
var ea = [
  ...zi,
  {
    prop: `direction`,
    responsive: !0,
    className: Gi,
    cssProperty: `--direction`,
  },
  {
    prop: `justify`,
    responsive: !0,
    className: Ki,
    cssProperty: (e) => [`--justify`, ta(e)],
  },
  { prop: `align`, responsive: !0, className: qi, cssProperty: `--align` },
  {
    prop: `gap`,
    responsive: !0,
    className: Ji,
    cssProperty: (e) => [`--gap`, `var(--spacing-${e})`],
  },
  {
    prop: `gapX`,
    responsive: !0,
    className: Yi,
    cssProperty: (e) => [`--gap-x`, `var(--spacing-${e})`],
  },
  {
    prop: `gapY`,
    responsive: !0,
    className: Xi,
    cssProperty: (e) => [`--gap-y`, `var(--spacing-${e})`],
  },
  { prop: `wrap`, responsive: !0, className: Zi, cssProperty: `--wrap` },
  { prop: `inline`, responsive: !0, className: Qi },
];
function ta(e) {
  return /^(between|around|evenly)$/.test(e) ? `space-${e}` : e;
}
var na = (0, j.createContext)({
  Button: `basic`,
  Checkbox: `basic`,
  Combobox: `basic`,
  LoadingSpinner: `basic`,
  SegmentedControl: `basic`,
  Select: `basic`,
  Tabs: `basic`,
  TextArea: `basic`,
  TextInput: `basic`,
});
function ra(e) {
  return (0, j.use)(na)[e];
}
function ia(e, t) {
  let n = ra(e);
  return !t || t === "default" ? n : t;
}
var aa = (0, j.createContext)(`2`);
function oa(e) {
  let t = (0, j.use)(aa);
  return e ?? t;
}
var sa = _({
    Button: () => ca,
    Icon: () => ua,
    MinWidth: () => ba,
    "Size-1": () => la,
    "Size-2": () => da,
    "Size-3": () => fa,
    "Variant-basic": () => pa,
    "Variant-dark": () => ma,
    "Variant-ghost": () => _a,
    "Variant-inverted": () => ha,
    "Variant-outline": () => ga,
    "Variant-vibrant": () => va,
    Width: () => ya,
    default: () => xa,
  }),
  ca = `Yyx5Rkc0C04-`,
  la = `_-56FHcFNl2U-`,
  ua = `hRuF7XXiT3w-`,
  da = `j8iZOirRLc8-`,
  fa = `ZTzpqIMdFCM-`,
  pa = `XSeLQJSkxyo-`,
  ma = `efbor0Of1bY-`,
  ha = `qOJkwUKt2Zo-`,
  ga = `BvwOpySHMzk-`,
  _a = `oKBOG5g3nvk-`,
  va = `_3PvnjdbEKFQ-`,
  ya = `_5M7IKs5LW3Y-`,
  ba = `n-Q3jnI7IeY-`,
  xa = {
    Button: ca,
    "Size-1": `_-56FHcFNl2U-`,
    Icon: ua,
    "Size-2": `j8iZOirRLc8-`,
    "Size-3": `ZTzpqIMdFCM-`,
    "Variant-basic": `XSeLQJSkxyo-`,
    "Variant-dark": `efbor0Of1bY-`,
    "Variant-inverted": `qOJkwUKt2Zo-`,
    "Variant-outline": `BvwOpySHMzk-`,
    "Variant-ghost": `oKBOG5g3nvk-`,
    "Variant-vibrant": `_3PvnjdbEKFQ-`,
    Width: ya,
    MinWidth: ba,
  },
  Sa = _({
    ChildContainer: () => Ma,
    LoadingSpinnerAmin: () => wa,
    "Size-1": () => Ta,
    "Size-2": () => Ea,
    "Size-3": () => Da,
    "Size-4": () => Oa,
    "Size-5": () => ka,
    Spinner: () => Ca,
    "Variant-bright": () => ja,
    "Variant-solid": () => Aa,
    default: () => Na,
  }),
  Ca = `ghKPu7ElHI4-`,
  wa = `THS4EmXO7Qo-`,
  Ta = `_2tFyZDh3n70-`,
  Ea = `y-F5xF-Ar74-`,
  Da = `Fqhcc7xFmsM-`,
  Oa = `h9zlfqYx76Q-`,
  ka = `iTGGFwEa2MQ-`,
  Aa = `_88ugmg-q8D8-`,
  ja = `MKSxe-MWyrs-`,
  Ma = `n-XnuapupJI-`,
  Na = {
    Spinner: Ca,
    LoadingSpinnerAmin: wa,
    "Size-1": `_2tFyZDh3n70-`,
    "Size-2": `y-F5xF-Ar74-`,
    "Size-3": `Fqhcc7xFmsM-`,
    "Size-4": `h9zlfqYx76Q-`,
    "Size-5": `iTGGFwEa2MQ-`,
    "Variant-solid": `_88ugmg-q8D8-`,
    "Variant-bright": `MKSxe-MWyrs-`,
    ChildContainer: Ma,
  };
function Pa(e) {
  let {
      size: t = `3`,
      loading: n = !0,
      children: r,
      color: i,
      variant: a,
      ...o
    } = e,
    s = ia(`LoadingSpinner`, a);
  return r || !n
    ? (0, M.jsxs)(Hi, {
        position: `relative`,
        ...o,
        width: `fit-content`,
        children: [
          (0, M.jsx)(`div`, {
            "data-visibility": !n,
            className: Ma,
            children: r,
          }),
          n &&
            (0, M.jsx)($i, {
              position: `absolute`,
              inset: `0`,
              justify: `center`,
              align: `center`,
              children: (0, M.jsx)(Fa, { size: t, color: i, variant: s }),
            }),
        ],
      })
    : (0, M.jsx)(Fa, { size: t, color: i, variant: s, ...o });
}
function Fa(e) {
  let { className: t, color: n, ...r } = Ne(e, Ia);
  return (0, M.jsx)(`div`, {
    "data-accent-color": n,
    className: (0, P.default)(t, Ca),
    ...r,
  });
}
var Ia = [
  ...Ri,
  { prop: `size`, responsive: !0, className: (e) => Sa[`Size-${e}`] },
  { prop: `variant`, className: (e) => Sa[`Variant-${e}`] },
];
function La(e) {
  let {
      variant: t,
      size: n,
      minWidth: r = `fit-content`,
      color: i,
      loading: a,
      children: o,
      onClick: s,
      icon: c,
      focusable: l,
      navProps: u,
      ...d
    } = e,
    f = ve(),
    p = oa(n),
    m = a
      ? (0, M.jsx)(Pa, { size: p, color: i, variant: `bright`, children: o })
      : o,
    h = a ? void 0 : s,
    g = l ?? u?.focusable ?? !!h,
    _ = ia(`Button`, t),
    v = {
      type: `button`,
      ...Ne(
        {
          ...d,
          variant: _,
          size: p,
          minWidth: r,
          color: i,
          className: (0, P.default)(ca, c && `hRuF7XXiT3w-`),
          onClick: h,
        },
        Ra,
      ),
      children: m,
    };
  return f && (g || u)
    ? (0, M.jsx)(ne, { ...v, ...(u || {}), focusable: g })
    : (0, M.jsx)(`button`, { ...v });
}
var Ra = [
    ...Ri,
    { prop: `size`, responsive: !0, className: (e) => sa[`Size-${e}`] },
    { prop: `variant`, className: (e) => sa[`Variant-${e}`] },
    { prop: `color`, dataProperty: (e) => [`accent-color`, `${e}`] },
    { prop: `width`, className: ya, cssProperty: `--width`, responsive: !0 },
    {
      prop: `minWidth`,
      className: ba,
      cssProperty: `--min-width`,
      responsive: !0,
    },
  ],
  za = La;
function Ba(e, ...t) {
  let n = [],
    r = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, `gs`),
    i = 0,
    a;
  for (; (a = r.exec(e));) {
    ((i += a[0].length), n.push(a[1]));
    let e = parseInt(a[2]),
      r = a[3] || ``,
      o = Ba(r, ...t),
      s =
        e >= 1 && e <= t.length && t[e - 1]
          ? j.cloneElement(t[e - 1], {}, r ? o : null)
          : r;
    n.push(s);
  }
  return (n.push(e.substr(i)), j.createElement(j.Fragment, null, ...n));
}
var Va = E((e, t) => {
    t.exports = function (e, t) {
      return function () {
        for (var n = Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return e.apply(t, n);
      };
    };
  }),
  F = E((e, t) => {
    var n = Va(),
      r = Object.prototype.toString,
      i = (function (e) {
        return function (t) {
          var n = r.call(t);
          return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
        };
      })(Object.create(null));
    function a(e) {
      return (
        (e = e.toLowerCase()),
        function (t) {
          return i(t) === e;
        }
      );
    }
    function o(e) {
      return Array.isArray(e);
    }
    function s(e) {
      return e === void 0;
    }
    function c(e) {
      return (
        e !== null &&
        !s(e) &&
        e.constructor !== null &&
        !s(e.constructor) &&
        typeof e.constructor.isBuffer == `function` &&
        e.constructor.isBuffer(e)
      );
    }
    var l = a(`ArrayBuffer`);
    function u(e) {
      return typeof ArrayBuffer < `u` && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && l(e.buffer);
    }
    function d(e) {
      return typeof e == `string`;
    }
    function f(e) {
      return typeof e == `number`;
    }
    function p(e) {
      return typeof e == `object` && !!e;
    }
    function m(e) {
      if (i(e) !== `object`) return !1;
      var t = Object.getPrototypeOf(e);
      return t === null || t === Object.prototype;
    }
    var h = a(`Date`),
      g = a(`File`),
      _ = a(`Blob`),
      v = a(`FileList`);
    function y(e) {
      return r.call(e) === `[object Function]`;
    }
    function b(e) {
      return p(e) && y(e.pipe);
    }
    function x(e) {
      var t = `[object FormData]`;
      return (
        e &&
        ((typeof FormData == `function` && e instanceof FormData) ||
          r.call(e) === t ||
          (y(e.toString) && e.toString() === t))
      );
    }
    var S = a(`URLSearchParams`);
    function C(e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, ``);
    }
    function w() {
      return typeof navigator < `u` &&
        (navigator.product === `ReactNative` ||
          navigator.product === `NativeScript` ||
          navigator.product === `NS`)
        ? !1
        : typeof window < `u` && typeof document < `u`;
    }
    function T(e, t) {
      if (e != null) {
        if ((typeof e != `object` && (e = [e]), o(e)))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.call(null, e[i], i, e);
      }
    }
    function E() {
      var e = {};
      function t(t, n) {
        e[n] =
          m(e[n]) && m(t) ? E(e[n], t) : m(t) ? E({}, t) : o(t) ? t.slice() : t;
      }
      for (var n = 0, r = arguments.length; n < r; n++) T(arguments[n], t);
      return e;
    }
    function ee(e, t, r) {
      return (
        T(t, function (t, i) {
          e[i] = r && typeof t == `function` ? n(t, r) : t;
        }),
        e
      );
    }
    function te(e) {
      return (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e);
    }
    function D(e, t, n, r) {
      ((e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        n && Object.assign(e.prototype, n));
    }
    function O(e, t, n) {
      var r,
        i,
        a,
        o = {};
      t ||= {};
      do {
        for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0;)
          ((a = r[i]), o[a] || ((t[a] = e[a]), (o[a] = !0)));
        e = Object.getPrototypeOf(e);
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t;
    }
    function ne(e, t, n) {
      ((e = String(e)),
        (n === void 0 || n > e.length) && (n = e.length),
        (n -= t.length));
      var r = e.indexOf(t, n);
      return r !== -1 && r === n;
    }
    function re(e) {
      if (!e) return null;
      var t = e.length;
      if (s(t)) return null;
      for (var n = Array(t); t-- > 0;) n[t] = e[t];
      return n;
    }
    t.exports = {
      isArray: o,
      isArrayBuffer: l,
      isBuffer: c,
      isFormData: x,
      isArrayBufferView: u,
      isString: d,
      isNumber: f,
      isObject: p,
      isPlainObject: m,
      isUndefined: s,
      isDate: h,
      isFile: g,
      isBlob: _,
      isFunction: y,
      isStream: b,
      isURLSearchParams: S,
      isStandardBrowserEnv: w,
      forEach: T,
      merge: E,
      extend: ee,
      trim: C,
      stripBOM: te,
      inherits: D,
      toFlatObject: O,
      kindOf: i,
      kindOfTest: a,
      endsWith: ne,
      toArray: re,
      isTypedArray: (function (e) {
        return function (t) {
          return e && t instanceof e;
        };
      })(typeof Uint8Array < `u` && Object.getPrototypeOf(Uint8Array)),
      isFileList: v,
    };
  }),
  Ha = E((e, t) => {
    var n = F();
    function r(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, `:`)
        .replace(/%24/g, `$`)
        .replace(/%2C/gi, `,`)
        .replace(/%20/g, `+`)
        .replace(/%5B/gi, `[`)
        .replace(/%5D/gi, `]`);
    }
    t.exports = function (e, t, i) {
      if (!t) return e;
      var a;
      if (i) a = i(t);
      else if (n.isURLSearchParams(t)) a = t.toString();
      else {
        var o = [];
        (n.forEach(t, function (e, t) {
          e != null &&
            (n.isArray(e) ? (t += `[]`) : (e = [e]),
            n.forEach(e, function (e) {
              (n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                o.push(r(t) + `=` + r(e)));
            }));
        }),
          (a = o.join(`&`)));
      }
      if (a) {
        var s = e.indexOf(`#`);
        (s !== -1 && (e = e.slice(0, s)),
          (e += (e.indexOf(`?`) === -1 ? `?` : `&`) + a));
      }
      return e;
    };
  }),
  Ua = E((e, t) => {
    var n = F();
    function r() {
      this.handlers = [];
    }
    ((r.prototype.use = function (e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }),
      (r.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (r.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          t !== null && e(t);
        });
      }),
      (t.exports = r));
  }),
  Wa = E((e, t) => {
    var n = F();
    t.exports = function (e, t) {
      n.forEach(e, function (n, r) {
        r !== t &&
          r.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[r]);
      });
    };
  }),
  I = E((e, t) => {
    var n = F();
    function r(e, t, n, r, i) {
      (Error.call(this),
        (this.message = e),
        (this.name = `AxiosError`),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        i && (this.response = i));
    }
    n.inherits(r, Error, {
      toJSON: function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      },
    });
    var i = r.prototype,
      a = {};
    ([
      `ERR_BAD_OPTION_VALUE`,
      `ERR_BAD_OPTION`,
      `ECONNABORTED`,
      `ETIMEDOUT`,
      `ERR_NETWORK`,
      `ERR_FR_TOO_MANY_REDIRECTS`,
      `ERR_DEPRECATED`,
      `ERR_BAD_RESPONSE`,
      `ERR_BAD_REQUEST`,
      `ERR_CANCELED`,
    ].forEach(function (e) {
      a[e] = { value: e };
    }),
      Object.defineProperties(r, a),
      Object.defineProperty(i, "isAxiosError", { value: !0 }),
      (r.from = function (e, t, a, o, s, c) {
        var l = Object.create(i);
        return (
          n.toFlatObject(e, l, function (e) {
            return e !== Error.prototype;
          }),
          r.call(l, e.message, t, a, o, s),
          (l.name = e.name),
          c && Object.assign(l, c),
          l
        );
      }),
      (t.exports = r));
  }),
  Ga = E((e, t) => {
    t.exports = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    };
  }),
  Ka = E((e, t) => {
    var n = F();
    function r(e, t) {
      t ||= new FormData();
      var r = [];
      function i(e) {
        return e === null
          ? ``
          : n.isDate(e)
            ? e.toISOString()
            : n.isArrayBuffer(e) || n.isTypedArray(e)
              ? typeof Blob == `function`
                ? new Blob([e])
                : Buffer.from(e)
              : e;
      }
      function a(e, o) {
        if (n.isPlainObject(e) || n.isArray(e)) {
          if (r.indexOf(e) !== -1)
            throw Error(`Circular reference detected in ` + o);
          (r.push(e),
            n.forEach(e, function (e, r) {
              if (!n.isUndefined(e)) {
                var s = o ? o + `.` + r : r,
                  c;
                if (e && !o && typeof e == `object`) {
                  if (n.endsWith(r, `{}`)) e = JSON.stringify(e);
                  else if (n.endsWith(r, `[]`) && (c = n.toArray(e))) {
                    c.forEach(function (e) {
                      !n.isUndefined(e) && t.append(s, i(e));
                    });
                    return;
                  }
                }
                a(e, s);
              }
            }),
            r.pop());
        } else t.append(o, i(e));
      }
      return (a(e), t);
    }
    t.exports = r;
  }),
  qa = E((e, t) => {
    var n = I();
    t.exports = function (e, t, r) {
      var i = r.config.validateStatus;
      !r.status || !i || i(r.status)
        ? e(r)
        : t(
            new n(
              `Request failed with status code ` + r.status,
              [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][
                Math.floor(r.status / 100) - 4
              ],
              r.config,
              r.request,
              r,
            ),
          );
    };
  }),
  Ja = E((e, t) => {
    var n = F();
    t.exports = n.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (e, t, r, i, a, o) {
              var s = [];
              (s.push(e + `=` + encodeURIComponent(t)),
                n.isNumber(r) && s.push(`expires=` + new Date(r).toGMTString()),
                n.isString(i) && s.push(`path=` + i),
                n.isString(a) && s.push(`domain=` + a),
                o === !0 && s.push(`secure`),
                (document.cookie = s.join(`; `)));
            },
            read: function (e) {
              var t = document.cookie.match(
                RegExp(`(^|;\\s*)(` + e + `)=([^;]*)`),
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, ``, Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })();
  }),
  Ya = E((e, t) => {
    t.exports = function (e) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
    };
  }),
  Xa = E((e, t) => {
    t.exports = function (e, t) {
      return t ? e.replace(/\/+$/, ``) + `/` + t.replace(/^\/+/, ``) : e;
    };
  }),
  Za = E((e, t) => {
    var n = Ya(),
      r = Xa();
    t.exports = function (e, t) {
      return e && !n(t) ? r(e, t) : t;
    };
  }),
  Qa = E((e, t) => {
    var n = F(),
      r = [
        `age`,
        `authorization`,
        `content-length`,
        `content-type`,
        `etag`,
        `expires`,
        `from`,
        `host`,
        `if-modified-since`,
        `if-unmodified-since`,
        `last-modified`,
        `location`,
        `max-forwards`,
        `proxy-authorization`,
        `referer`,
        `retry-after`,
        `user-agent`,
      ];
    t.exports = function (e) {
      var t = {},
        i,
        a,
        o;
      return (
        e &&
          n.forEach(
            e.split(`
`),
            function (e) {
              if (
                ((o = e.indexOf(`:`)),
                (i = n.trim(e.substr(0, o)).toLowerCase()),
                (a = n.trim(e.substr(o + 1))),
                i)
              ) {
                if (t[i] && r.indexOf(i) >= 0) return;
                i === `set-cookie`
                  ? (t[i] = (t[i] ? t[i] : []).concat([a]))
                  : (t[i] = t[i] ? t[i] + `, ` + a : a);
              }
            },
          ),
        t
      );
    };
  }),
  $a = E((e, t) => {
    var n = F();
    t.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement(`a`),
            r;
          function i(n) {
            var r = n;
            return (
              e && (t.setAttribute(`href`, r), (r = t.href)),
              t.setAttribute(`href`, r),
              {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, ``) : ``,
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, ``) : ``,
                hash: t.hash ? t.hash.replace(/^#/, ``) : ``,
                hostname: t.hostname,
                port: t.port,
                pathname:
                  t.pathname.charAt(0) === `/` ? t.pathname : `/` + t.pathname,
              }
            );
          }
          return (
            (r = i(window.location.href)),
            function (e) {
              var t = n.isString(e) ? i(e) : e;
              return t.protocol === r.protocol && t.host === r.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })();
  }),
  eo = E((e, t) => {
    var n = I(),
      r = F();
    function i(e) {
      (n.call(this, e ?? `canceled`, n.ERR_CANCELED),
        (this.name = `CanceledError`));
    }
    (r.inherits(i, n, { __CANCEL__: !0 }), (t.exports = i));
  }),
  to = E((e, t) => {
    t.exports = function (e) {
      var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
      return (t && t[1]) || ``;
    };
  }),
  no = E((e, t) => {
    var n = F(),
      r = qa(),
      i = Ja(),
      a = Ha(),
      o = Za(),
      s = Qa(),
      c = $a(),
      l = Ga(),
      u = I(),
      d = eo(),
      f = to();
    t.exports = function (e) {
      return new Promise(function (t, p) {
        var m = e.data,
          h = e.headers,
          g = e.responseType,
          _;
        function v() {
          (e.cancelToken && e.cancelToken.unsubscribe(_),
            e.signal && e.signal.removeEventListener(`abort`, _));
        }
        n.isFormData(m) && n.isStandardBrowserEnv() && delete h[`Content-Type`];
        var y = new XMLHttpRequest();
        if (e.auth) {
          var b = e.auth.username || ``,
            x = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ``;
          h.Authorization = `Basic ` + btoa(b + `:` + x);
        }
        var S = o(e.baseURL, e.url);
        (y.open(e.method.toUpperCase(), a(S, e.params, e.paramsSerializer), !0),
          (y.timeout = e.timeout));
        function C() {
          if (y) {
            var n =
              `getAllResponseHeaders` in y
                ? s(y.getAllResponseHeaders())
                : null;
            (r(
              function (e) {
                (t(e), v());
              },
              function (e) {
                (p(e), v());
              },
              {
                data:
                  !g || g === `text` || g === `json`
                    ? y.responseText
                    : y.response,
                status: y.status,
                statusText: y.statusText,
                headers: n,
                config: e,
                request: y,
              },
            ),
              (y = null));
          }
        }
        if (
          (`onloadend` in y
            ? (y.onloadend = C)
            : (y.onreadystatechange = function () {
                y &&
                  y.readyState === 4 &&
                  (y.status !== 0 ||
                    (y.responseURL && y.responseURL.indexOf(`file:`) === 0)) &&
                  setTimeout(C);
              }),
          (y.onabort = function () {
            y &&= (p(new u(`Request aborted`, u.ECONNABORTED, e, y)), null);
          }),
          (y.onerror = function () {
            (p(new u(`Network Error`, u.ERR_NETWORK, e, y, y)), (y = null));
          }),
          (y.ontimeout = function () {
            var t = e.timeout
                ? `timeout of ` + e.timeout + `ms exceeded`
                : `timeout exceeded`,
              n = e.transitional || l;
            (e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              p(
                new u(
                  t,
                  n.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
                  e,
                  y,
                ),
              ),
              (y = null));
          }),
          n.isStandardBrowserEnv())
        ) {
          var w =
            (e.withCredentials || c(S)) && e.xsrfCookieName
              ? i.read(e.xsrfCookieName)
              : void 0;
          w && (h[e.xsrfHeaderName] = w);
        }
        (`setRequestHeader` in y &&
          n.forEach(h, function (e, t) {
            m === void 0 && t.toLowerCase() === `content-type`
              ? delete h[t]
              : y.setRequestHeader(t, e);
          }),
          n.isUndefined(e.withCredentials) ||
            (y.withCredentials = !!e.withCredentials),
          g && g !== `json` && (y.responseType = e.responseType),
          typeof e.onDownloadProgress == `function` &&
            y.addEventListener(`progress`, e.onDownloadProgress),
          typeof e.onUploadProgress == `function` &&
            y.upload &&
            y.upload.addEventListener(`progress`, e.onUploadProgress),
          (e.cancelToken || e.signal) &&
            ((_ = function (e) {
              y &&= (p(!e || (e && e.type) ? new d() : e), y.abort(), null);
            }),
            e.cancelToken && e.cancelToken.subscribe(_),
            e.signal &&
              (e.signal.aborted ? _() : e.signal.addEventListener(`abort`, _))),
          (m ||= null));
        var T = f(S);
        T && [`http`, `https`, `file`].indexOf(T) === -1
          ? p(new u(`Unsupported protocol ` + T + `:`, u.ERR_BAD_REQUEST, e))
          : y.send(m);
      });
    };
  }),
  ro = E((e, t) => {
    t.exports = null;
  }),
  io = E((e, t) => {
    var n = F(),
      r = Wa(),
      i = I(),
      a = Ga(),
      o = Ka(),
      s = { "Content-Type": `application/x-www-form-urlencoded` };
    function c(e, t) {
      !n.isUndefined(e) &&
        n.isUndefined(e[`Content-Type`]) &&
        (e[`Content-Type`] = t);
    }
    function l() {
      var e;
      return (
        (typeof XMLHttpRequest < `u` ||
          (typeof process < `u` &&
            Object.prototype.toString.call(process) === `[object process]`)) &&
          (e = no()),
        e
      );
    }
    function u(e, t, r) {
      if (n.isString(e))
        try {
          return ((t || JSON.parse)(e), n.trim(e));
        } catch (e) {
          if (e.name !== `SyntaxError`) throw e;
        }
      return (r || JSON.stringify)(e);
    }
    var d = {
      transitional: a,
      adapter: l(),
      transformRequest: [
        function (e, t) {
          if (
            (r(t, `Accept`),
            r(t, `Content-Type`),
            n.isFormData(e) ||
              n.isArrayBuffer(e) ||
              n.isBuffer(e) ||
              n.isStream(e) ||
              n.isFile(e) ||
              n.isBlob(e))
          )
            return e;
          if (n.isArrayBufferView(e)) return e.buffer;
          if (n.isURLSearchParams(e))
            return (
              c(t, `application/x-www-form-urlencoded;charset=utf-8`),
              e.toString()
            );
          var i = n.isObject(e),
            a = t && t[`Content-Type`],
            s;
          if ((s = n.isFileList(e)) || (i && a === `multipart/form-data`)) {
            var l = this.env && this.env.FormData;
            return o(s ? { "files[]": e } : e, l && new l());
          }
          return i || a === `application/json`
            ? (c(t, `application/json`), u(e))
            : e;
        },
      ],
      transformResponse: [
        function (e) {
          var t = this.transitional || d.transitional,
            r = t && t.silentJSONParsing,
            a = t && t.forcedJSONParsing,
            o = !r && this.responseType === `json`;
          if (o || (a && n.isString(e) && e.length))
            try {
              return JSON.parse(e);
            } catch (e) {
              if (o)
                throw e.name === `SyntaxError`
                  ? i.from(e, i.ERR_BAD_RESPONSE, this, null, this.response)
                  : e;
            }
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: `XSRF-TOKEN`,
      xsrfHeaderName: `X-XSRF-TOKEN`,
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: ro() },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: { common: { Accept: `application/json, text/plain, */*` } },
    };
    (n.forEach([`delete`, `get`, `head`], function (e) {
      d.headers[e] = {};
    }),
      n.forEach([`post`, `put`, `patch`], function (e) {
        d.headers[e] = n.merge(s);
      }),
      (t.exports = d));
  }),
  ao = E((e, t) => {
    var n = F(),
      r = io();
    t.exports = function (e, t, i) {
      var a = this || r;
      return (
        n.forEach(i, function (n) {
          e = n.call(a, e, t);
        }),
        e
      );
    };
  }),
  oo = E((e, t) => {
    t.exports = function (e) {
      return !!(e && e.__CANCEL__);
    };
  }),
  so = E((e, t) => {
    var n = F(),
      r = ao(),
      i = oo(),
      a = io(),
      o = eo();
    function s(e) {
      if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
      )
        throw new o();
    }
    t.exports = function (e) {
      return (
        s(e),
        (e.headers = e.headers || {}),
        (e.data = r.call(e, e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers,
        )),
        n.forEach(
          [`delete`, `get`, `head`, `post`, `put`, `patch`, `common`],
          function (t) {
            delete e.headers[t];
          },
        ),
        (e.adapter || a.adapter)(e).then(
          function (t) {
            return (
              s(e),
              (t.data = r.call(e, t.data, t.headers, e.transformResponse)),
              t
            );
          },
          function (t) {
            return (
              i(t) ||
                (s(e),
                t &&
                  t.response &&
                  (t.response.data = r.call(
                    e,
                    t.response.data,
                    t.response.headers,
                    e.transformResponse,
                  ))),
              Promise.reject(t)
            );
          },
        )
      );
    };
  }),
  co = E((e, t) => {
    var n = F();
    t.exports = function (e, t) {
      t ||= {};
      var r = {};
      function i(e, t) {
        return n.isPlainObject(e) && n.isPlainObject(t)
          ? n.merge(e, t)
          : n.isPlainObject(t)
            ? n.merge({}, t)
            : n.isArray(t)
              ? t.slice()
              : t;
      }
      function a(r) {
        if (!n.isUndefined(t[r])) return i(e[r], t[r]);
        if (!n.isUndefined(e[r])) return i(void 0, e[r]);
      }
      function o(e) {
        if (!n.isUndefined(t[e])) return i(void 0, t[e]);
      }
      function s(r) {
        if (!n.isUndefined(t[r])) return i(void 0, t[r]);
        if (!n.isUndefined(e[r])) return i(void 0, e[r]);
      }
      function c(n) {
        if (n in t) return i(e[n], t[n]);
        if (n in e) return i(void 0, e[n]);
      }
      var l = {
        url: o,
        method: o,
        data: o,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: c,
      };
      return (
        n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
          var t = l[e] || a,
            i = t(e);
          (n.isUndefined(i) && t !== c) || (r[e] = i);
        }),
        r
      );
    };
  }),
  lo = E((e, t) => {
    t.exports = { version: `0.27.2` };
  }),
  uo = E((e, t) => {
    var n = lo().version,
      r = I(),
      i = {};
    [`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach(
      function (e, t) {
        i[e] = function (n) {
          return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e;
        };
      },
    );
    var a = {};
    i.transitional = function (e, t, i) {
      function o(e, t) {
        return (
          `[Axios v` +
          n +
          `] Transitional option '` +
          e +
          `'` +
          t +
          (i ? `. ` + i : ``)
        );
      }
      return function (n, i, s) {
        if (e === !1)
          throw new r(
            o(i, ` has been removed` + (t ? ` in ` + t : ``)),
            r.ERR_DEPRECATED,
          );
        return (
          t &&
            !a[i] &&
            ((a[i] = !0),
            console.warn(
              o(
                i,
                ` has been deprecated since v` +
                  t +
                  ` and will be removed in the near future`,
              ),
            )),
          !e || e(n, i, s)
        );
      };
    };
    function o(e, t, n) {
      if (typeof e != `object`)
        throw new r(`options must be an object`, r.ERR_BAD_OPTION_VALUE);
      for (var i = Object.keys(e), a = i.length; a-- > 0;) {
        var o = i[a],
          s = t[o];
        if (s) {
          var c = e[o],
            l = c === void 0 || s(c, o, e);
          if (l !== !0)
            throw new r(
              `option ` + o + ` must be ` + l,
              r.ERR_BAD_OPTION_VALUE,
            );
        } else if (n !== !0)
          throw new r(`Unknown option ` + o, r.ERR_BAD_OPTION);
      }
    }
    t.exports = { assertOptions: o, validators: i };
  }),
  fo = E((e, t) => {
    var n = F(),
      r = Ha(),
      i = Ua(),
      a = so(),
      o = co(),
      s = Za(),
      c = uo(),
      l = c.validators;
    function u(e) {
      ((this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() }));
    }
    ((u.prototype.request = function (e, t) {
      (typeof e == `string` ? ((t ||= {}), (t.url = e)) : (t = e || {}),
        (t = o(this.defaults, t)),
        t.method
          ? (t.method = t.method.toLowerCase())
          : this.defaults.method
            ? (t.method = this.defaults.method.toLowerCase())
            : (t.method = `get`));
      var n = t.transitional;
      n !== void 0 &&
        c.assertOptions(
          n,
          {
            silentJSONParsing: l.transitional(l.boolean),
            forcedJSONParsing: l.transitional(l.boolean),
            clarifyTimeoutError: l.transitional(l.boolean),
          },
          !1,
        );
      var r = [],
        i = !0;
      this.interceptors.request.forEach(function (e) {
        (typeof e.runWhen != `function` || e.runWhen(t) !== !1) &&
          ((i &&= e.synchronous), r.unshift(e.fulfilled, e.rejected));
      });
      var s = [];
      this.interceptors.response.forEach(function (e) {
        s.push(e.fulfilled, e.rejected);
      });
      var u;
      if (!i) {
        var d = [a, void 0];
        for (
          Array.prototype.unshift.apply(d, r),
            d = d.concat(s),
            u = Promise.resolve(t);
          d.length;
        )
          u = u.then(d.shift(), d.shift());
        return u;
      }
      for (var f = t; r.length;) {
        var p = r.shift(),
          m = r.shift();
        try {
          f = p(f);
        } catch (e) {
          m(e);
          break;
        }
      }
      try {
        u = a(f);
      } catch (e) {
        return Promise.reject(e);
      }
      for (; s.length;) u = u.then(s.shift(), s.shift());
      return u;
    }),
      (u.prototype.getUri = function (e) {
        return (
          (e = o(this.defaults, e)),
          r(s(e.baseURL, e.url), e.params, e.paramsSerializer)
        );
      }),
      n.forEach([`delete`, `get`, `head`, `options`], function (e) {
        u.prototype[e] = function (t, n) {
          return this.request(
            o(n || {}, { method: e, url: t, data: (n || {}).data }),
          );
        };
      }),
      n.forEach([`post`, `put`, `patch`], function (e) {
        function t(t) {
          return function (n, r, i) {
            return this.request(
              o(i || {}, {
                method: e,
                headers: t ? { "Content-Type": `multipart/form-data` } : {},
                url: n,
                data: r,
              }),
            );
          };
        }
        ((u.prototype[e] = t()), (u.prototype[e + `Form`] = t(!0)));
      }),
      (t.exports = u));
  }),
  po = E((e, t) => {
    var n = eo();
    function r(e) {
      if (typeof e != `function`)
        throw TypeError(`executor must be a function.`);
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      (this.promise.then(function (e) {
        if (r._listeners) {
          var t,
            n = r._listeners.length;
          for (t = 0; t < n; t++) r._listeners[t](e);
          r._listeners = null;
        }
      }),
        (this.promise.then = function (e) {
          var t,
            n = new Promise(function (e) {
              (r.subscribe(e), (t = e));
            }).then(e);
          return (
            (n.cancel = function () {
              r.unsubscribe(t);
            }),
            n
          );
        }),
        e(function (e) {
          r.reason || ((r.reason = new n(e)), t(r.reason));
        }));
    }
    ((r.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (r.prototype.subscribe = function (e) {
        this.reason
          ? e(this.reason)
          : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
      }),
      (r.prototype.unsubscribe = function (e) {
        if (this._listeners) {
          var t = this._listeners.indexOf(e);
          t !== -1 && this._listeners.splice(t, 1);
        }
      }),
      (r.source = function () {
        var e;
        return {
          token: new r(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (t.exports = r));
  }),
  mo = E((e, t) => {
    t.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  }),
  ho = E((e, t) => {
    var n = F();
    t.exports = function (e) {
      return n.isObject(e) && e.isAxiosError === !0;
    };
  }),
  go = E((e, t) => {
    var n = F(),
      r = Va(),
      i = fo(),
      a = co(),
      o = io();
    function s(e) {
      var t = new i(e),
        o = r(i.prototype.request, t);
      return (
        n.extend(o, i.prototype, t),
        n.extend(o, t),
        (o.create = function (t) {
          return s(a(e, t));
        }),
        o
      );
    }
    var c = s(o);
    ((c.Axios = i),
      (c.CanceledError = eo()),
      (c.CancelToken = po()),
      (c.isCancel = oo()),
      (c.VERSION = lo().version),
      (c.toFormData = Ka()),
      (c.AxiosError = I()),
      (c.Cancel = c.CanceledError),
      (c.all = function (e) {
        return Promise.all(e);
      }),
      (c.spread = mo()),
      (c.isAxiosError = ho()),
      (t.exports = c),
      (t.exports.default = c));
  }),
  _o = E((e, t) => {
    t.exports = go();
  }),
  L = e(d(), 1),
  vo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.account_name || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_name: { n: 1, br: n.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetPasswordRSAPublicKey_Request`;
    }
  },
  yo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.publickey_mod || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            publickey_mod: { n: 1, br: n.readString, bw: C.writeString },
            publickey_exp: { n: 2, br: n.readString, bw: C.writeString },
            timestamp: {
              n: 3,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetPasswordRSAPublicKey_Response`;
    }
  },
  bo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device_friendly_name || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device_friendly_name: { n: 1, br: n.readString, bw: C.writeString },
            platform_type: { n: 2, br: n.readEnum, bw: C.writeEnum },
            os_type: { n: 3, br: n.readInt32, bw: C.writeInt32 },
            gaming_device_type: { n: 4, br: n.readUint32, bw: C.writeUint32 },
            client_count: { n: 5, br: n.readUint32, bw: C.writeUint32 },
            machine_id: { n: 6, br: n.readBytes, bw: C.writeBytes },
            app_type: { n: 7, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_DeviceDetails`;
    }
  },
  xo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.confirmation_type || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            confirmation_type: { n: 1, br: n.readEnum, bw: C.writeEnum },
            associated_message: { n: 2, br: n.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AllowedConfirmation`;
    }
  },
  So = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device_friendly_name || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device_friendly_name: { n: 1, br: n.readString, bw: C.writeString },
            platform_type: { n: 2, br: n.readEnum, bw: C.writeEnum },
            device_details: { n: 3, c: bo },
            website_id: {
              n: 4,
              d: `Unknown`,
              br: n.readString,
              bw: C.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaQR_Request`;
    }
  },
  Co = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            challenge_url: { n: 2, br: n.readString, bw: C.writeString },
            request_id: { n: 3, br: n.readBytes, bw: C.writeBytes },
            interval: { n: 4, br: n.readFloat, bw: C.writeFloat },
            allowed_confirmations: { n: 5, c: xo, r: !0, q: !0 },
            version: { n: 6, br: n.readInt32, bw: C.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaQR_Response`;
    }
  },
  wo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device_friendly_name || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device_friendly_name: { n: 1, br: n.readString, bw: C.writeString },
            account_name: { n: 2, br: n.readString, bw: C.writeString },
            encrypted_password: { n: 3, br: n.readString, bw: C.writeString },
            encryption_timestamp: {
              n: 4,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            remember_login: { n: 5, br: n.readBool, bw: C.writeBool },
            platform_type: { n: 6, br: n.readEnum, bw: C.writeEnum },
            persistence: { n: 7, d: 1, br: n.readEnum, bw: C.writeEnum },
            website_id: {
              n: 8,
              d: `Unknown`,
              br: n.readString,
              bw: C.writeString,
            },
            device_details: { n: 9, c: bo },
            guard_data: { n: 10, br: n.readString, bw: C.writeString },
            language: { n: 11, br: n.readUint32, bw: C.writeUint32 },
            qos_level: { n: 12, d: 2, br: n.readInt32, bw: C.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaCredentials_Request`;
    }
  },
  To = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            request_id: { n: 2, br: n.readBytes, bw: C.writeBytes },
            interval: { n: 3, br: n.readFloat, bw: C.writeFloat },
            allowed_confirmations: { n: 4, c: xo, r: !0, q: !0 },
            steamid: { n: 5, br: n.readUint64String, bw: C.writeUint64String },
            weak_token: { n: 6, br: n.readString, bw: C.writeString },
            agreement_session_url: {
              n: 7,
              br: n.readString,
              bw: C.writeString,
            },
            extended_error_message: {
              n: 8,
              br: n.readString,
              bw: C.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaCredentials_Response`;
    }
  },
  Eo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            request_id: { n: 2, br: n.readBytes, bw: C.writeBytes },
            token_to_revoke: {
              n: 3,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_PollAuthSessionStatus_Request`;
    }
  },
  Do = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.new_client_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            new_client_id: {
              n: 1,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            new_challenge_url: { n: 2, br: n.readString, bw: C.writeString },
            refresh_token: { n: 3, br: n.readString, bw: C.writeString },
            access_token: { n: 4, br: n.readString, bw: C.writeString },
            had_remote_interaction: { n: 5, br: n.readBool, bw: C.writeBool },
            account_name: { n: 6, br: n.readString, bw: C.writeString },
            new_guard_data: { n: 7, br: n.readString, bw: C.writeString },
            agreement_session_url: {
              n: 8,
              br: n.readString,
              bw: C.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_PollAuthSessionStatus_Response`;
    }
  },
  Oo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionInfo_Request`;
    }
  },
  ko = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ip || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ip: { n: 1, br: n.readString, bw: C.writeString },
            geoloc: { n: 2, br: n.readString, bw: C.writeString },
            city: { n: 3, br: n.readString, bw: C.writeString },
            state: { n: 4, br: n.readString, bw: C.writeString },
            country: { n: 5, br: n.readString, bw: C.writeString },
            platform_type: { n: 6, br: n.readEnum, bw: C.writeEnum },
            device_friendly_name: { n: 7, br: n.readString, bw: C.writeString },
            version: { n: 8, br: n.readInt32, bw: C.writeInt32 },
            login_history: { n: 9, br: n.readEnum, bw: C.writeEnum },
            requestor_location_mismatch: {
              n: 10,
              br: n.readBool,
              bw: C.writeBool,
            },
            high_usage_login: { n: 11, br: n.readBool, bw: C.writeBool },
            requested_persistence: { n: 12, br: n.readEnum, bw: C.writeEnum },
            device_trust: { n: 13, br: n.readInt32, bw: C.writeInt32 },
            app_type: { n: 14, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionInfo_Response`;
    }
  },
  Ao = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            language: { n: 2, br: n.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionRiskInfo_Request`;
    }
  },
  jo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.location_confirmer || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            location_confirmer: { n: 1, br: n.readString, bw: C.writeString },
            location_requestor: { n: 2, br: n.readString, bw: C.writeString },
            location_other: { n: 3, br: n.readString, bw: C.writeString },
            platform_type: { n: 4, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionRiskInfo_Response`;
    }
  },
  Mo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            results: { n: 2, c: No },
            selected_action: { n: 3, br: n.readString, bw: C.writeString },
            did_confirm_login: { n: 4, br: n.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_NotifyRiskQuizResults_Notification`;
    }
  },
  No = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.platform || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            platform: { n: 1, br: n.readBool, bw: C.writeBool },
            location: { n: 2, br: n.readBool, bw: C.writeBool },
            action: { n: 3, br: n.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults`;
    }
  },
  Po = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionsForAccount_Request`;
    }
  },
  Fo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_ids || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: n.readUint64String,
              pbr: n.readPackedUint64String,
              bw: C.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionsForAccount_Response`;
    }
  },
  Io = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.version || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            version: { n: 1, br: n.readInt32, bw: C.writeInt32 },
            client_id: {
              n: 2,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            steamid: {
              n: 3,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            signature: { n: 4, br: n.readBytes, bw: C.writeBytes },
            confirm: { n: 5, d: !1, br: n.readBool, bw: C.writeBool },
            persistence: { n: 6, d: 1, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request`;
    }
  },
  Lo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response`;
    }
  },
  Ro = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            code: { n: 3, br: n.readString, bw: C.writeString },
            code_type: { n: 4, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request`;
    }
  },
  zo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.agreement_session_url || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            agreement_session_url: {
              n: 7,
              br: n.readString,
              bw: C.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response`;
    }
  },
  Bo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_token || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refresh_token: { n: 1, br: n.readString, bw: C.writeString },
            steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            renewal_type: { n: 3, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AccessToken_GenerateForApp_Request`;
    }
  },
  Vo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.access_token || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            access_token: { n: 1, br: n.readString, bw: C.writeString },
            refresh_token: { n: 2, br: n.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AccessToken_GenerateForApp_Response`;
    }
  },
  Ho = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_revoked || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_revoked: { n: 1, d: !1, br: n.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Request`;
    }
  },
  Uo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_tokens || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refresh_tokens: { n: 1, c: Go, r: !0, q: !0 },
            requesting_token: {
              n: 2,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response`;
    }
  },
  Wo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: n.readUint32, bw: C.writeUint32 },
            ip: { n: 2, c: l },
            locale: { n: 3, br: n.readString, bw: C.writeString },
            country: { n: 4, br: n.readString, bw: C.writeString },
            state: { n: 5, br: n.readString, bw: C.writeString },
            city: { n: 6, br: n.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent`;
    }
  },
  Go = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            token_description: { n: 2, br: n.readString, bw: C.writeString },
            time_updated: { n: 3, br: n.readUint32, bw: C.writeUint32 },
            platform_type: { n: 4, br: n.readEnum, bw: C.writeEnum },
            logged_in: { n: 5, br: n.readBool, bw: C.writeBool },
            os_platform: { n: 6, br: n.readUint32, bw: C.writeUint32 },
            auth_type: { n: 7, br: n.readUint32, bw: C.writeUint32 },
            gaming_device_type: { n: 8, br: n.readUint32, bw: C.writeUint32 },
            first_seen: { n: 9, c: Wo },
            last_seen: { n: 10, c: Wo },
            os_type: { n: 11, br: n.readInt32, bw: C.writeInt32 },
            authentication_type: { n: 12, br: n.readEnum, bw: C.writeEnum },
            effective_token_state: { n: 13, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription`;
    }
  },
  Ko = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token: { n: 1, br: n.readString, bw: C.writeString },
            revoke_action: { n: 2, d: 1, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_Token_Revoke_Request`;
    }
  },
  qo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_Token_Revoke_Response`;
    }
  },
  Jo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            revoke_action: { n: 3, d: 1, br: n.readEnum, bw: C.writeEnum },
            signature: { n: 4, br: n.readBytes, bw: C.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Revoke_Request`;
    }
  },
  Yo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Revoke_Response`;
    }
  },
  Xo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            token_description: { n: 2, br: n.readString, bw: C.writeString },
            time_updated: { n: 3, br: n.readUint32, bw: C.writeUint32 },
            platform_type: { n: 4, br: n.readEnum, bw: C.writeEnum },
            token_state: { n: 5, br: n.readEnum, bw: C.writeEnum },
            owner_steamid: {
              n: 6,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            os_platform: { n: 7, br: n.readUint32, bw: C.writeUint32 },
            os_type: { n: 8, br: n.readInt32, bw: C.writeInt32 },
            auth_type: { n: 9, br: n.readUint32, bw: C.writeUint32 },
            gaming_device_type: { n: 10, br: n.readUint32, bw: C.writeUint32 },
            first_seen: { n: 11, c: Zo },
            last_seen: { n: 12, c: Zo },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenDescription`;
    }
  },
  Zo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: n.readUint32, bw: C.writeUint32 },
            ip: { n: 2, c: l },
            country: { n: 3, br: n.readString, bw: C.writeString },
            state: { n: 4, br: n.readString, bw: C.writeString },
            city: { n: 5, br: n.readString, bw: C.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenDescription_TokenUsageEvent`;
    }
  },
  Qo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.action || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            action: { n: 1, br: n.readInt32, bw: C.writeInt32 },
            time: { n: 2, br: n.readUint32, bw: C.writeUint32 },
            ip: { n: 3, c: l },
            actor: { n: 4, br: n.readFixed64String, bw: C.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenAudit`;
    }
  },
  $o = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            include_revoked_tokens: { n: 2, br: n.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokensByAccount_Request`;
    }
  },
  es = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_tokens || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refresh_tokens: { n: 1, c: Xo, r: !0, q: !0 },
            last_token_reset: { n: 2, br: n.readInt32, bw: C.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokensByAccount_Response`;
    }
  },
  ts = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokenByID_Request`;
    }
  },
  ns = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_tokens || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { refresh_tokens: { n: 1, c: Xo, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokenByID_Response`;
    }
  },
  rs = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_RevokeToken_Request`;
    }
  },
  is = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_RevokeToken_Response`;
    }
  },
  as = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_GetTokenHistory_Request`;
    }
  },
  os = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.history || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { history: { n: 1, c: Qo, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_GetTokenHistory_Response`;
    }
  },
  ss = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            token_id: {
              n: 2,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_MarkTokenCompromised_Request`;
    }
  },
  cs = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_MarkTokenCompromised_Response`;
    }
  },
  ls = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: C.writeUint32 },
            minutes_remaining: { n: 2, br: n.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_TimeRemaining`;
    }
  },
  us = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.platform || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            platform: { n: 1, br: n.readString, bw: C.writeString },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: C.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_GetTimeRemaining_Request`;
    }
  },
  ds = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 2, c: ls, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_GetTimeRemaining_Response`;
    }
  },
  fs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `Authentication.GetPasswordRSAPublicKey#1`,
      o(vo, t, n),
      yo,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetPasswordRSAPublicKey = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Authentication.BeginAuthSessionViaQR#1`,
      o(So, t, n),
      Co,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.BeginAuthSessionViaQR = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Authentication.BeginAuthSessionViaCredentials#1`,
      o(wo, t, n),
      To,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.BeginAuthSessionViaCredentials = r;
  function i(e, t, n) {
    return e.SendMsg(
      `Authentication.PollAuthSessionStatus#1`,
      o(Eo, t, n),
      Do,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.PollAuthSessionStatus = i;
  function a(e, t, n) {
    return e.SendMsg(`Authentication.GetAuthSessionInfo#1`, o(Oo, t, n), ko, {
      ePrivilege: 1,
    });
  }
  e.GetAuthSessionInfo = a;
  function s(e, t, n) {
    return e.SendMsg(
      `Authentication.GetAuthSessionRiskInfo#1`,
      o(Ao, t, n),
      jo,
      { ePrivilege: 1 },
    );
  }
  e.GetAuthSessionRiskInfo = s;
  function c(e, t) {
    return e.SendNotification(
      `Authentication.NotifyRiskQuizResults#1`,
      o(Mo, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyRiskQuizResults = c;
  function l(e, t, n) {
    return e.SendMsg(
      `Authentication.UpdateAuthSessionWithMobileConfirmation#1`,
      o(Io, t, n),
      Lo,
      { ePrivilege: 1 },
    );
  }
  e.UpdateAuthSessionWithMobileConfirmation = l;
  function u(e, t, n) {
    return e.SendMsg(
      `Authentication.UpdateAuthSessionWithSteamGuardCode#1`,
      o(Ro, t, n),
      zo,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.UpdateAuthSessionWithSteamGuardCode = u;
  function d(e, t, n) {
    return e.SendMsg(
      `Authentication.GenerateAccessTokenForApp#1`,
      o(Bo, t, n),
      Vo,
      { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GenerateAccessTokenForApp = d;
  function f(e, t, n) {
    return e.SendMsg(`Authentication.EnumerateTokens#1`, o(Ho, t, n), Uo, {
      ePrivilege: 1,
    });
  }
  e.EnumerateTokens = f;
  function p(e, t, n) {
    return e.SendMsg(
      `Authentication.GetAuthSessionsForAccount#1`,
      o(Po, t, n),
      Fo,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetAuthSessionsForAccount = p;
  function m(e, t, n) {
    return e.SendMsg(`Authentication.RevokeToken#1`, o(Ko, t, n), qo, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.RevokeToken = m;
  function h(e, t, n) {
    return e.SendMsg(`Authentication.RevokeRefreshToken#1`, o(Jo, t, n), Yo, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.RevokeRefreshToken = h;
})((fs ||= {}));
var ps;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.QueryRefreshTokensByAccount#1`,
      o($o, t, n),
      es,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.QueryRefreshTokensByAccount = t;
  function n(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.QueryRefreshTokenByID#1`,
      o(ts, t, n),
      ns,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.QueryRefreshTokenByID = n;
  function r(e, t, n) {
    return e.SendMsg(`AuthenticationSupport.RevokeToken#1`, o(rs, t, n), is, {
      ePrivilege: 5,
    });
  }
  e.RevokeToken = r;
  function i(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.GetTokenHistory#1`,
      o(as, t, n),
      os,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetTokenHistory = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.MarkTokenCompromised#1`,
      o(ss, t, n),
      cs,
      { ePrivilege: 5 },
    );
  }
  e.MarkTokenCompromised = a;
})((ps ||= {}));
var ms;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`CloudGaming.GetTimeRemaining#1`, o(us, t, n), ds, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTimeRemaining = t;
})((ms ||= {}));
var R,
  hs = !0;
function z(e, t, n) {
  e != null &&
    (typeof e == `number`
      ? this.fromNumber(e, t, n)
      : t == null && typeof e != `string`
        ? this.fromString(e, 256)
        : this.fromString(e, t));
}
function B() {
  return new z(null);
}
function gs(e, t, n, r, i, a) {
  for (; --a >= 0;) {
    var o = t * this[e++] + n[r] + i;
    ((i = Math.floor(o / 67108864)), (n[r++] = o & 67108863));
  }
  return i;
}
function _s(e, t, n, r, i, a) {
  for (var o = t & 32767, s = t >> 15; --a >= 0;) {
    var c = this[e] & 32767,
      l = this[e++] >> 15,
      u = s * c + l * o;
    ((c = o * c + ((u & 32767) << 15) + n[r] + (i & 1073741823)),
      (i = (c >>> 30) + (u >>> 15) + s * l + (i >>> 30)),
      (n[r++] = c & 1073741823));
  }
  return i;
}
function vs(e, t, n, r, i, a) {
  for (var o = t & 16383, s = t >> 14; --a >= 0;) {
    var c = this[e] & 16383,
      l = this[e++] >> 14,
      u = s * c + l * o;
    ((c = o * c + ((u & 16383) << 14) + n[r] + i),
      (i = (c >> 28) + (u >> 14) + s * l),
      (n[r++] = c & 268435455));
  }
  return i;
}
(hs && navigator.appName == `Microsoft Internet Explorer`
  ? ((z.prototype.am = _s), (R = 30))
  : hs && navigator.appName != `Netscape`
    ? ((z.prototype.am = gs), (R = 26))
    : ((z.prototype.am = vs), (R = 28)),
  (z.prototype.DB = R),
  (z.prototype.DM = (1 << R) - 1),
  (z.prototype.DV = 1 << R));
var ys = 52;
((z.prototype.FV = 2 ** ys),
  (z.prototype.F1 = ys - R),
  (z.prototype.F2 = 2 * R - ys));
for (
  var bs = `0123456789abcdefghijklmnopqrstuvwxyz`, xs = [], Ss = 48, V = 0;
  V <= 9;
  ++V
)
  xs[Ss++] = V;
for (Ss = 97, V = 10; V < 36; ++V) xs[Ss++] = V;
for (Ss = 65, V = 10; V < 36; ++V) xs[Ss++] = V;
function Cs(e) {
  return bs.charAt(e);
}
function ws(e, t) {
  return xs[e.charCodeAt(t)] ?? -1;
}
function Ts(e) {
  for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
  ((e.t = this.t), (e.s = this.s));
}
function Es(e) {
  ((this.t = 1),
    (this.s = e < 0 ? -1 : 0),
    e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0));
}
function H(e) {
  var t = B();
  return (t.fromInt(e), t);
}
function Ds(e, t) {
  var n;
  if (t == 16) n = 4;
  else if (t == 8) n = 3;
  else if (t == 256) n = 8;
  else if (t == 2) n = 1;
  else if (t == 32) n = 5;
  else if (t == 4) n = 2;
  else {
    this.fromRadix(e, t);
    return;
  }
  ((this.t = 0), (this.s = 0));
  for (var r = e.length, i = !1, a = 0; --r >= 0;) {
    var o = n == 8 ? e[r] & 255 : ws(e, r);
    o < 0
      ? e.charAt(r) == `-` && (i = !0)
      : ((i = !1),
        a == 0
          ? (this[this.t++] = o)
          : a + n > this.DB
            ? ((this[this.t - 1] |= (o & ((1 << (this.DB - a)) - 1)) << a),
              (this[this.t++] = o >> (this.DB - a)))
            : (this[this.t - 1] |= o << a),
        (a += n),
        a >= this.DB && (a -= this.DB));
  }
  (n == 8 &&
    e[0] & 128 &&
    ((this.s = -1),
    a > 0 && (this[this.t - 1] |= ((1 << (this.DB - a)) - 1) << a)),
    this.clamp(),
    i && z.ZERO.subTo(this, this));
}
function Os() {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t;
}
function ks(e) {
  if (this.s < 0) return `-` + this.negate().toString(e);
  var t;
  if (e == 16) t = 4;
  else if (e == 8) t = 3;
  else if (e == 2) t = 1;
  else if (e == 32) t = 5;
  else if (e == 4) t = 2;
  else return this.toRadix(e);
  var n = (1 << t) - 1,
    r,
    i = !1,
    a = ``,
    o = this.t,
    s = this.DB - ((o * this.DB) % t);
  if (o-- > 0)
    for (
      s < this.DB && (r = this[o] >> s) > 0 && ((i = !0), (a = Cs(r)));
      o >= 0;
    )
      (s < t
        ? ((r = (this[o] & ((1 << s) - 1)) << (t - s)),
          (r |= this[--o] >> (s += this.DB - t)))
        : ((r = (this[o] >> (s -= t)) & n), s <= 0 && ((s += this.DB), --o)),
        r > 0 && (i = !0),
        i && (a += Cs(r)));
  return i ? a : `0`;
}
function As() {
  var e = B();
  return (z.ZERO.subTo(this, e), e);
}
function js() {
  return this.s < 0 ? this.negate() : this;
}
function Ms(e) {
  var t = this.s - e.s;
  if (t != 0) return t;
  var n = this.t;
  if (((t = n - e.t), t != 0)) return t;
  for (; --n >= 0;) if ((t = this[n] - e[n]) != 0) return t;
  return 0;
}
function Ns(e) {
  var t = 1,
    n;
  return (
    (n = e >>> 16) != 0 && ((e = n), (t += 16)),
    (n = e >> 8) != 0 && ((e = n), (t += 8)),
    (n = e >> 4) != 0 && ((e = n), (t += 4)),
    (n = e >> 2) != 0 && ((e = n), (t += 2)),
    (n = e >> 1) != 0 && ((e = n), (t += 1)),
    t
  );
}
function Ps() {
  return this.t <= 0
    ? 0
    : this.DB * (this.t - 1) + Ns(this[this.t - 1] ^ (this.s & this.DM));
}
function Fs(e, t) {
  for (var n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
  for (n = e - 1; n >= 0; --n) t[n] = 0;
  ((t.t = this.t + e), (t.s = this.s));
}
function Is(e, t) {
  for (var n = e; n < this.t; ++n) t[n - e] = this[n];
  ((t.t = Math.max(this.t - e, 0)), (t.s = this.s));
}
function Ls(e, t) {
  for (
    var n = e % this.DB,
      r = this.DB - n,
      i = (1 << r) - 1,
      a = Math.floor(e / this.DB),
      o = (this.s << n) & this.DM,
      s = this.t - 1;
    s >= 0;
    --s
  )
    ((t[s + a + 1] = (this[s] >> r) | o), (o = (this[s] & i) << n));
  for (s = a - 1; s >= 0; --s) t[s] = 0;
  ((t[a] = o), (t.t = this.t + a + 1), (t.s = this.s), t.clamp());
}
function Rs(e, t) {
  t.s = this.s;
  var n = Math.floor(e / this.DB);
  if (n >= this.t) t.t = 0;
  else {
    var r = e % this.DB,
      i = this.DB - r,
      a = (1 << r) - 1;
    t[0] = this[n] >> r;
    for (var o = n + 1; o < this.t; ++o)
      ((t[o - n - 1] |= (this[o] & a) << i), (t[o - n] = this[o] >> r));
    (r > 0 && (t[this.t - n - 1] |= (this.s & a) << i),
      (t.t = this.t - n),
      t.clamp());
  }
}
function zs(e, t) {
  for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;)
    ((r += this[n] - e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
  if (e.t < this.t) {
    for (r -= e.s; n < this.t;)
      ((r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += this.s;
  } else {
    for (r += this.s; n < e.t;)
      ((r -= e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r -= e.s;
  }
  ((t.s = r < 0 ? -1 : 0),
    r < -1 ? (t[n++] = this.DV + r) : r > 0 && (t[n++] = r),
    (t.t = n),
    t.clamp());
}
function Bs(e, t) {
  var n = this.abs(),
    r = e.abs(),
    i = n.t;
  for (t.t = i + r.t; --i >= 0;) t[i] = 0;
  for (i = 0; i < r.t; ++i) t[i + n.t] = n.am(0, r[i], t, i, 0, n.t);
  ((t.s = 0), t.clamp(), this.s != e.s && z.ZERO.subTo(t, t));
}
function Vs(e) {
  for (var t = this.abs(), n = (e.t = 2 * t.t); --n >= 0;) e[n] = 0;
  for (n = 0; n < t.t - 1; ++n) {
    var r = t.am(n, t[n], e, 2 * n, 0, 1);
    (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >=
      t.DV && ((e[n + t.t] -= t.DV), (e[n + t.t + 1] = 1));
  }
  (e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
    (e.s = 0),
    e.clamp());
}
function Hs(e, t, n) {
  var r = e.abs();
  if (!(r.t <= 0)) {
    var i = this.abs();
    if (i.t < r.t) (t?.fromInt(0), n != null && this.copyTo(n));
    else {
      n ??= B();
      var a = B(),
        o = this.s,
        s = e.s,
        c = this.DB - Ns(r[r.t - 1]);
      c > 0 ? (r.lShiftTo(c, a), i.lShiftTo(c, n)) : (r.copyTo(a), i.copyTo(n));
      var l = a.t,
        u = a[l - 1];
      if (u != 0) {
        var d = u * (1 << this.F1) + (l > 1 ? a[l - 2] >> this.F2 : 0),
          f = this.FV / d,
          p = (1 << this.F1) / d,
          m = 1 << this.F2,
          h = n.t,
          g = h - l,
          _ = t ?? B();
        for (
          a.dlShiftTo(g, _),
            n.compareTo(_) >= 0 && ((n[n.t++] = 1), n.subTo(_, n)),
            z.ONE.dlShiftTo(l, _),
            _.subTo(a, a);
          a.t < l;
        )
          a[a.t++] = 0;
        for (; --g >= 0;) {
          var v =
            n[--h] == u ? this.DM : Math.floor(n[h] * f + (n[h - 1] + m) * p);
          if ((n[h] += a.am(0, v, n, g, 0, l)) < v)
            for (a.dlShiftTo(g, _), n.subTo(_, n); n[h] < --v;) n.subTo(_, n);
        }
        (t != null && (n.drShiftTo(l, t), o != s && z.ZERO.subTo(t, t)),
          (n.t = l),
          n.clamp(),
          c > 0 && n.rShiftTo(c, n),
          o < 0 && z.ZERO.subTo(n, n));
      }
    }
  }
}
function Us(e) {
  var t = B();
  return (
    this.abs().divRemTo(e, null, t),
    this.s < 0 && t.compareTo(z.ZERO) > 0 && e.subTo(t, t),
    t
  );
}
function U(e) {
  this.m = e;
}
function Ws(e) {
  return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
}
function Gs(e) {
  return e;
}
function Ks(e) {
  e.divRemTo(this.m, null, e);
}
function qs(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
function Js(e, t) {
  (e.squareTo(t), this.reduce(t));
}
((U.prototype.convert = Ws),
  (U.prototype.revert = Gs),
  (U.prototype.reduce = Ks),
  (U.prototype.mulTo = qs),
  (U.prototype.sqrTo = Js));
function Ys() {
  if (this.t < 1) return 0;
  var e = this[0];
  if (!(e & 1)) return 0;
  var t = e & 3;
  return (
    (t = (t * (2 - (e & 15) * t)) & 15),
    (t = (t * (2 - (e & 255) * t)) & 255),
    (t = (t * (2 - (((e & 65535) * t) & 65535))) & 65535),
    (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
    t > 0 ? this.DV - t : -t
  );
}
function W(e) {
  ((this.m = e),
    (this.mp = e.invDigit()),
    (this.mpl = this.mp & 32767),
    (this.mph = this.mp >> 15),
    (this.um = (1 << (e.DB - 15)) - 1),
    (this.mt2 = 2 * e.t));
}
function Xs(e) {
  var t = B();
  return (
    e.abs().dlShiftTo(this.m.t, t),
    t.divRemTo(this.m, null, t),
    e.s < 0 && t.compareTo(z.ZERO) > 0 && this.m.subTo(t, t),
    t
  );
}
function Zs(e) {
  var t = B();
  return (e.copyTo(t), this.reduce(t), t);
}
function Qs(e) {
  for (; e.t <= this.mt2;) e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var n = e[t] & 32767,
      r =
        (n * this.mpl +
          (((n * this.mph + (e[t] >> 15) * this.mpl) & this.um) << 15)) &
        e.DM;
    for (
      n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t);
      e[n] >= e.DV;
    )
      ((e[n] -= e.DV), e[++n]++);
  }
  (e.clamp(),
    e.drShiftTo(this.m.t, e),
    e.compareTo(this.m) >= 0 && e.subTo(this.m, e));
}
function $s(e, t) {
  (e.squareTo(t), this.reduce(t));
}
function ec(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
((W.prototype.convert = Xs),
  (W.prototype.revert = Zs),
  (W.prototype.reduce = Qs),
  (W.prototype.mulTo = ec),
  (W.prototype.sqrTo = $s));
function tc() {
  return (this.t > 0 ? this[0] & 1 : this.s) == 0;
}
function nc(e, t) {
  if (e > 4294967295 || e < 1) return z.ONE;
  var n = B(),
    r = B(),
    i = t.convert(this),
    a = Ns(e) - 1;
  for (i.copyTo(n); --a >= 0;)
    if ((t.sqrTo(n, r), (e & (1 << a)) > 0)) t.mulTo(r, i, n);
    else {
      var o = n;
      ((n = r), (r = o));
    }
  return t.revert(n);
}
function rc(e, t) {
  var n = e < 256 || t.isEven() ? new U(t) : new W(t);
  return this.exp(e, n);
}
((z.prototype.copyTo = Ts),
  (z.prototype.fromInt = Es),
  (z.prototype.fromString = Ds),
  (z.prototype.clamp = Os),
  (z.prototype.dlShiftTo = Fs),
  (z.prototype.drShiftTo = Is),
  (z.prototype.lShiftTo = Ls),
  (z.prototype.rShiftTo = Rs),
  (z.prototype.subTo = zs),
  (z.prototype.multiplyTo = Bs),
  (z.prototype.squareTo = Vs),
  (z.prototype.divRemTo = Hs),
  (z.prototype.invDigit = Ys),
  (z.prototype.isEven = tc),
  (z.prototype.exp = nc),
  (z.prototype.toString = ks),
  (z.prototype.negate = As),
  (z.prototype.abs = js),
  (z.prototype.compareTo = Ms),
  (z.prototype.bitLength = Ps),
  (z.prototype.mod = Us),
  (z.prototype.modPowInt = rc),
  (z.ZERO = H(0)),
  (z.ONE = H(1)));
function ic() {
  var e = B();
  return (this.copyTo(e), e);
}
function ac() {
  if (this.s < 0) {
    if (this.t == 1) return this[0] - this.DV;
    if (this.t == 0) return -1;
  } else if (this.t == 1) return this[0];
  else if (this.t == 0) return 0;
  return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
}
function oc() {
  return this.t == 0 ? this.s : (this[0] << 24) >> 24;
}
function sc() {
  return this.t == 0 ? this.s : (this[0] << 16) >> 16;
}
function cc(e) {
  return Math.floor((Math.LN2 * this.DB) / Math.log(e));
}
function lc() {
  return this.s < 0 ? -1 : this.t <= 0 || (this.t == 1 && this[0] <= 0) ? 0 : 1;
}
function uc(e) {
  if (((e ??= 10), this.signum() == 0 || e < 2 || e > 36)) return `0`;
  var t = this.chunkSize(e),
    n = e ** +t,
    r = H(n),
    i = B(),
    a = B(),
    o = ``;
  for (this.divRemTo(r, i, a); i.signum() > 0;)
    ((o = (n + a.intValue()).toString(e).substr(1) + o), i.divRemTo(r, i, a));
  return a.intValue().toString(e) + o;
}
function dc(e, t) {
  (this.fromInt(0), (t ??= 10));
  for (
    var n = this.chunkSize(t), r = t ** +n, i = !1, a = 0, o = 0, s = 0;
    s < e.length;
    ++s
  ) {
    var c = ws(e, s);
    c < 0
      ? e.charAt(s) == `-` && this.signum() == 0 && (i = !0)
      : ((o = t * o + c),
        ++a >= n &&
          (this.dMultiply(r), this.dAddOffset(o, 0), (a = 0), (o = 0)));
  }
  (a > 0 && (this.dMultiply(t ** +a), this.dAddOffset(o, 0)),
    i && z.ZERO.subTo(this, this));
}
function fc(e, t, n) {
  if (typeof t == `number`) {
    if (e < 2) this.fromInt(1);
    else
      for (
        this.fromNumber(e, n),
          this.testBit(e - 1) ||
            this.bitwiseTo(z.ONE.shiftLeft(e - 1), bc, this),
          this.isEven() && this.dAddOffset(1, 0);
        !this.isProbablePrime(t);
      )
        (this.dAddOffset(2, 0),
          this.bitLength() > e && this.subTo(z.ONE.shiftLeft(e - 1), this));
  } else {
    var r = [],
      i = e & 7;
    ((r.length = (e >> 3) + 1),
      t.nextBytes(r),
      i > 0 ? (r[0] &= (1 << i) - 1) : (r[0] = 0),
      this.fromString(r, 256));
  }
}
function pc() {
  var e = this.t,
    t = [];
  t[0] = this.s;
  var n = this.DB - ((e * this.DB) % 8),
    r,
    i = 0;
  if (e-- > 0)
    for (
      n < this.DB &&
      (r = this[e] >> n) != (this.s & this.DM) >> n &&
      (t[i++] = r | (this.s << (this.DB - n)));
      e >= 0;
    )
      (n < 8
        ? ((r = (this[e] & ((1 << n) - 1)) << (8 - n)),
          (r |= this[--e] >> (n += this.DB - 8)))
        : ((r = (this[e] >> (n -= 8)) & 255), n <= 0 && ((n += this.DB), --e)),
        r & 128 && (r |= -256),
        i == 0 && (this.s & 128) != (r & 128) && ++i,
        (i > 0 || r != this.s) && (t[i++] = r));
  return t;
}
function mc(e) {
  return this.compareTo(e) == 0;
}
function hc(e) {
  return this.compareTo(e) < 0 ? this : e;
}
function gc(e) {
  return this.compareTo(e) > 0 ? this : e;
}
function _c(e, t, n) {
  var r,
    i,
    a = Math.min(e.t, this.t);
  for (r = 0; r < a; ++r) n[r] = t(this[r], e[r]);
  if (e.t < this.t) {
    for (i = e.s & this.DM, r = a; r < this.t; ++r) n[r] = t(this[r], i);
    n.t = this.t;
  } else {
    for (i = this.s & this.DM, r = a; r < e.t; ++r) n[r] = t(i, e[r]);
    n.t = e.t;
  }
  ((n.s = t(this.s, e.s)), n.clamp());
}
function vc(e, t) {
  return e & t;
}
function yc(e) {
  var t = B();
  return (this.bitwiseTo(e, vc, t), t);
}
function bc(e, t) {
  return e | t;
}
function xc(e) {
  var t = B();
  return (this.bitwiseTo(e, bc, t), t);
}
function Sc(e, t) {
  return e ^ t;
}
function Cc(e) {
  var t = B();
  return (this.bitwiseTo(e, Sc, t), t);
}
function wc(e, t) {
  return e & ~t;
}
function Tc(e) {
  var t = B();
  return (this.bitwiseTo(e, wc, t), t);
}
function Ec() {
  for (var e = B(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
  return ((e.t = this.t), (e.s = ~this.s), e);
}
function Dc(e) {
  var t = B();
  return (e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t);
}
function Oc(e) {
  var t = B();
  return (e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t);
}
function kc(e) {
  if (e == 0) return -1;
  var t = 0;
  return (
    e & 65535 || ((e >>= 16), (t += 16)),
    e & 255 || ((e >>= 8), (t += 8)),
    e & 15 || ((e >>= 4), (t += 4)),
    e & 3 || ((e >>= 2), (t += 2)),
    e & 1 || ++t,
    t
  );
}
function Ac() {
  for (var e = 0; e < this.t; ++e)
    if (this[e] != 0) return e * this.DB + kc(this[e]);
  return this.s < 0 ? this.t * this.DB : -1;
}
function jc(e) {
  for (var t = 0; e != 0;) ((e &= e - 1), ++t);
  return t;
}
function Mc() {
  for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n)
    e += jc(this[n] ^ t);
  return e;
}
function Nc(e) {
  var t = Math.floor(e / this.DB);
  return t >= this.t ? this.s != 0 : !!(this[t] & (1 << (e % this.DB)));
}
function Pc(e, t) {
  var n = z.ONE.shiftLeft(e);
  return (this.bitwiseTo(n, t, n), n);
}
function Fc(e) {
  return this.changeBit(e, bc);
}
function Ic(e) {
  return this.changeBit(e, wc);
}
function Lc(e) {
  return this.changeBit(e, Sc);
}
function Rc(e, t) {
  for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;)
    ((r += this[n] + e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
  if (e.t < this.t) {
    for (r += e.s; n < this.t;)
      ((r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += this.s;
  } else {
    for (r += this.s; n < e.t;)
      ((r += e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += e.s;
  }
  ((t.s = r < 0 ? -1 : 0),
    r > 0 ? (t[n++] = r) : r < -1 && (t[n++] = this.DV + r),
    (t.t = n),
    t.clamp());
}
function zc(e) {
  var t = B();
  return (this.addTo(e, t), t);
}
function Bc(e) {
  var t = B();
  return (this.subTo(e, t), t);
}
function Vc(e) {
  var t = B();
  return (this.multiplyTo(e, t), t);
}
function Hc(e) {
  var t = B();
  return (this.divRemTo(e, t, null), t);
}
function Uc(e) {
  var t = B();
  return (this.divRemTo(e, null, t), t);
}
function Wc(e) {
  var t = B(),
    n = B();
  return (this.divRemTo(e, t, n), [t, n]);
}
function Gc(e) {
  ((this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
    ++this.t,
    this.clamp());
}
function Kc(e, t) {
  for (; this.t <= t;) this[this.t++] = 0;
  for (this[t] += e; this[t] >= this.DV;)
    ((this[t] -= this.DV), ++t >= this.t && (this[this.t++] = 0), ++this[t]);
}
function qc() {}
function Jc(e) {
  return e;
}
function Yc(e, t, n) {
  e.multiplyTo(t, n);
}
function Xc(e, t) {
  e.squareTo(t);
}
((qc.prototype.convert = Jc),
  (qc.prototype.revert = Jc),
  (qc.prototype.mulTo = Yc),
  (qc.prototype.sqrTo = Xc));
function Zc(e) {
  return this.exp(e, new qc());
}
function Qc(e, t, n) {
  var r = Math.min(this.t + e.t, t);
  for (n.s = 0, n.t = r; r > 0;) n[--r] = 0;
  for (var i = n.t - this.t; r < i; ++r)
    n[r + this.t] = this.am(0, e[r], n, r, 0, this.t);
  for (i = Math.min(e.t, t); r < i; ++r) this.am(0, e[r], n, r, 0, t - r);
  n.clamp();
}
function $c(e, t, n) {
  --t;
  var r = (n.t = this.t + e.t - t);
  for (n.s = 0; --r >= 0;) n[r] = 0;
  for (r = Math.max(t - this.t, 0); r < e.t; ++r)
    n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
  (n.clamp(), n.drShiftTo(1, n));
}
function el(e) {
  ((this.r2 = B()),
    (this.q3 = B()),
    z.ONE.dlShiftTo(2 * e.t, this.r2),
    (this.mu = this.r2.divide(e)),
    (this.m = e));
}
function tl(e) {
  if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
  if (e.compareTo(this.m) < 0) return e;
  var t = B();
  return (e.copyTo(t), this.reduce(t), t);
}
function nl(e) {
  return e;
}
function rl(e) {
  for (
    e.drShiftTo(this.m.t - 1, this.r2),
      e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    e.compareTo(this.r2) < 0;
  )
    e.dAddOffset(1, this.m.t + 1);
  for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;) e.subTo(this.m, e);
}
function il(e, t) {
  (e.squareTo(t), this.reduce(t));
}
function al(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
((el.prototype.convert = tl),
  (el.prototype.revert = nl),
  (el.prototype.reduce = rl),
  (el.prototype.mulTo = al),
  (el.prototype.sqrTo = il));
function ol(e, t) {
  var n = e.bitLength(),
    r,
    i = H(1),
    a;
  if (n <= 0) return i;
  ((r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
    (a = n < 8 ? new U(t) : t.isEven() ? new el(t) : new W(t)));
  var o = [],
    s = 3,
    c = r - 1,
    l = (1 << r) - 1;
  if (((o[1] = a.convert(this)), r > 1)) {
    var u = B();
    for (a.sqrTo(o[1], u); s <= l;)
      ((o[s] = B()), a.mulTo(u, o[s - 2], o[s]), (s += 2));
  }
  var d = e.t - 1,
    f,
    p = !0,
    m = B(),
    h;
  for (n = Ns(e[d]) - 1; d >= 0;) {
    for (
      n >= c
        ? (f = (e[d] >> (n - c)) & l)
        : ((f = (e[d] & ((1 << (n + 1)) - 1)) << (c - n)),
          d > 0 && (f |= e[d - 1] >> (this.DB + n - c))),
        s = r;
      !(f & 1);
    )
      ((f >>= 1), --s);
    if (((n -= s) < 0 && ((n += this.DB), --d), p)) (o[f].copyTo(i), (p = !1));
    else {
      for (; s > 1;) (a.sqrTo(i, m), a.sqrTo(m, i), (s -= 2));
      (s > 0 ? a.sqrTo(i, m) : ((h = i), (i = m), (m = h)),
        a.mulTo(m, o[f], i));
    }
    for (; d >= 0 && !(e[d] & (1 << n));)
      (a.sqrTo(i, m),
        (h = i),
        (i = m),
        (m = h),
        --n < 0 && ((n = this.DB - 1), --d));
  }
  return a.revert(i);
}
function sl(e) {
  var t = this.s < 0 ? this.negate() : this.clone(),
    n = e.s < 0 ? e.negate() : e.clone();
  if (t.compareTo(n) < 0) {
    var r = t;
    ((t = n), (n = r));
  }
  var i = t.getLowestSetBit(),
    a = n.getLowestSetBit();
  if (a < 0) return t;
  for (
    i < a && (a = i), a > 0 && (t.rShiftTo(a, t), n.rShiftTo(a, n));
    t.signum() > 0;
  )
    ((i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t),
      (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n),
      t.compareTo(n) >= 0
        ? (t.subTo(n, t), t.rShiftTo(1, t))
        : (n.subTo(t, n), n.rShiftTo(1, n)));
  return (a > 0 && n.lShiftTo(a, n), n);
}
function cl(e) {
  if (e <= 0) return 0;
  var t = this.DV % e,
    n = this.s < 0 ? e - 1 : 0;
  if (this.t > 0) {
    if (t == 0) n = this[0] % e;
    else for (var r = this.t - 1; r >= 0; --r) n = (t * n + this[r]) % e;
  }
  return n;
}
function ll(e) {
  var t = e.isEven();
  if ((this.isEven() && t) || e.signum() == 0) return z.ZERO;
  for (
    var n = e.clone(), r = this.clone(), i = H(1), a = H(0), o = H(0), s = H(1);
    n.signum() != 0;
  ) {
    for (; n.isEven();)
      (n.rShiftTo(1, n),
        t
          ? ((i.isEven() && a.isEven()) || (i.addTo(this, i), a.subTo(e, a)),
            i.rShiftTo(1, i))
          : a.isEven() || a.subTo(e, a),
        a.rShiftTo(1, a));
    for (; r.isEven();)
      (r.rShiftTo(1, r),
        t
          ? ((o.isEven() && s.isEven()) || (o.addTo(this, o), s.subTo(e, s)),
            o.rShiftTo(1, o))
          : s.isEven() || s.subTo(e, s),
        s.rShiftTo(1, s));
    n.compareTo(r) >= 0
      ? (n.subTo(r, n), t && i.subTo(o, i), a.subTo(s, a))
      : (r.subTo(n, r), t && o.subTo(i, o), s.subTo(a, s));
  }
  if (r.compareTo(z.ONE) != 0) return z.ZERO;
  if (s.compareTo(e) >= 0) return s.subtract(e);
  if (s.signum() < 0) s.addTo(e, s);
  else return s;
  return s.signum() < 0 ? s.add(e) : s;
}
var G = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509,
  ],
  ul = (1 << 26) / G[G.length - 1];
function dl(e) {
  var t,
    n = this.abs();
  if (n.t == 1 && n[0] <= G[G.length - 1]) {
    for (t = 0; t < G.length; ++t) if (n[0] == G[t]) return !0;
    return !1;
  }
  if (n.isEven()) return !1;
  for (t = 1; t < G.length;) {
    for (var r = G[t], i = t + 1; i < G.length && r < ul;) r *= G[i++];
    for (r = n.modInt(r); t < i;) if (r % G[t++] == 0) return !1;
  }
  return n.millerRabin(e);
}
function fl(e) {
  var t = this.subtract(z.ONE),
    n = t.getLowestSetBit();
  if (n <= 0) return !1;
  var r = t.shiftRight(n);
  ((e = (e + 1) >> 1), e > G.length && (e = G.length));
  for (var i = B(), a = 0; a < e; ++a) {
    i.fromInt(G[a]);
    var o = i.modPow(r, this);
    if (o.compareTo(z.ONE) != 0 && o.compareTo(t) != 0) {
      for (var s = 1; s++ < n && o.compareTo(t) != 0;)
        if (((o = o.modPowInt(2, this)), o.compareTo(z.ONE) == 0)) return !1;
      if (o.compareTo(t) != 0) return !1;
    }
  }
  return !0;
}
((z.prototype.chunkSize = cc),
  (z.prototype.toRadix = uc),
  (z.prototype.fromRadix = dc),
  (z.prototype.fromNumber = fc),
  (z.prototype.bitwiseTo = _c),
  (z.prototype.changeBit = Pc),
  (z.prototype.addTo = Rc),
  (z.prototype.dMultiply = Gc),
  (z.prototype.dAddOffset = Kc),
  (z.prototype.multiplyLowerTo = Qc),
  (z.prototype.multiplyUpperTo = $c),
  (z.prototype.modInt = cl),
  (z.prototype.millerRabin = fl),
  (z.prototype.clone = ic),
  (z.prototype.intValue = ac),
  (z.prototype.byteValue = oc),
  (z.prototype.shortValue = sc),
  (z.prototype.signum = lc),
  (z.prototype.toByteArray = pc),
  (z.prototype.equals = mc),
  (z.prototype.min = hc),
  (z.prototype.max = gc),
  (z.prototype.and = yc),
  (z.prototype.or = xc),
  (z.prototype.xor = Cc),
  (z.prototype.andNot = Tc),
  (z.prototype.not = Ec),
  (z.prototype.shiftLeft = Dc),
  (z.prototype.shiftRight = Oc),
  (z.prototype.getLowestSetBit = Ac),
  (z.prototype.bitCount = Mc),
  (z.prototype.testBit = Nc),
  (z.prototype.setBit = Fc),
  (z.prototype.clearBit = Ic),
  (z.prototype.flipBit = Lc),
  (z.prototype.add = zc),
  (z.prototype.subtract = Bc),
  (z.prototype.multiply = Vc),
  (z.prototype.divide = Hc),
  (z.prototype.remainder = Uc),
  (z.prototype.divideAndRemainder = Wc),
  (z.prototype.modPow = ol),
  (z.prototype.modInverse = ll),
  (z.prototype.pow = Zc),
  (z.prototype.gcd = sl),
  (z.prototype.isProbablePrime = dl));
var pl = function (e, t) {
    ((this.modulus = new z(e, 16)), (this.encryptionExponent = new z(t, 16)));
  },
  ml = {
    base64: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
    encode: function (e) {
      if (!e) return !1;
      var t = ``,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l = 0;
      do
        ((n = e.charCodeAt(l++)),
          (r = e.charCodeAt(l++)),
          (i = e.charCodeAt(l++)),
          (a = n >> 2),
          (o = ((n & 3) << 4) | (r >> 4)),
          (s = ((r & 15) << 2) | (i >> 6)),
          (c = i & 63),
          isNaN(r) ? (s = c = 64) : isNaN(i) && (c = 64),
          (t +=
            this.base64.charAt(a) +
            this.base64.charAt(o) +
            this.base64.charAt(s) +
            this.base64.charAt(c)));
      while (l < e.length);
      return t;
    },
    decode: function (e) {
      if (!e) return !1;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ``);
      var t = ``,
        n,
        r,
        i,
        a,
        o = 0;
      do
        ((n = this.base64.indexOf(e.charAt(o++))),
          (r = this.base64.indexOf(e.charAt(o++))),
          (i = this.base64.indexOf(e.charAt(o++))),
          (a = this.base64.indexOf(e.charAt(o++))),
          (t += String.fromCharCode((n << 2) | (r >> 4))),
          i != 64 && (t += String.fromCharCode(((r & 15) << 4) | (i >> 2))),
          a != 64 && (t += String.fromCharCode(((i & 3) << 6) | a)));
      while (o < e.length);
      return t;
    },
  },
  hl = {
    hex: `0123456789abcdef`,
    encode: function (e) {
      if (!e) return !1;
      var t = ``,
        n,
        r = 0;
      do
        ((n = e.charCodeAt(r++)),
          (t += this.hex.charAt((n >> 4) & 15) + this.hex.charAt(n & 15)));
      while (r < e.length);
      return t;
    },
    decode: function (e) {
      if (!e) return !1;
      e = e.replace(/[^0-9abcdef]/g, ``);
      var t = ``,
        n = 0;
      do
        t += String.fromCharCode(
          ((this.hex.indexOf(e.charAt(n++)) << 4) & 240) |
            (this.hex.indexOf(e.charAt(n++)) & 15),
        );
      while (n < e.length);
      return t;
    },
  },
  gl = {
    getPublicKey: function (e, t) {
      return new pl(e, t);
    },
    encrypt: function (e, t) {
      return !t ||
        ((e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)), !e) ||
        ((e = e.modPowInt(t.encryptionExponent, t.modulus)), !e)
        ? !1
        : ((e = e.toString(16)),
          (e.length & 1) == 1 && (e = `0` + e),
          ml.encode(hl.decode(e)));
    },
    pkcs1pad2: function (e, t) {
      if (t < e.length + 11) return null;
      for (var n = [], r = e.length - 1; r >= 0 && t > 0;)
        n[--t] = e.charCodeAt(r--);
      for (n[--t] = 0; t > 2;) n[--t] = Math.floor(Math.random() * 254) + 1;
      return ((n[--t] = 2), (n[--t] = 0), new z(n));
    },
  },
  _l = new ce(`Login`),
  vl = _l.Info;
_l.Debug;
var yl = _l.Warning,
  K = _l.Error;
function bl(e, t) {
  let n = gl.getPublicKey(t.publickey_mod, t.publickey_exp),
    r = gl.encrypt(e, n);
  return r === !1 ? null : r;
}
var q = e(_o(), 1),
  xl = e(me(), 1),
  J = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Generic = 1)] = `Generic`),
      (e[(e.Expired = 2)] = `Expired`),
      (e[(e.Network = 3)] = `Network`),
      (e[(e.MoveAuthenticator = 4)] = `MoveAuthenticator`),
      (e[(e.RateLimitExceeded = 5)] = `RateLimitExceeded`),
      (e[(e.AnonymousLogin = 6)] = `AnonymousLogin`),
      e
    );
  })({});
function Sl(e) {
  let {
    shared_secret: t,
    identity_secret: n,
    secret_1: r,
    status: i,
    uri: a,
    server_time: o,
    ...s
  } = e;
  return {
    shared_secret: xl.fromByteArray(t),
    identity_secret: xl.fromByteArray(n),
    secret_1: xl.fromByteArray(r),
    ...s,
  };
}
var Cl = (function (e) {
  return (
    (e[(e.k_Success = 0)] = `k_Success`),
    (e[(e.k_PrimaryDomainFail = 1)] = `k_PrimaryDomainFail`),
    (e[(e.k_SecondaryDomainFail = 2)] = `k_SecondaryDomainFail`),
    e
  );
})({});
function wl(e, t) {
  let n = Object.keys(e);
  return (
    n.length === Object.keys(t).length && n.every((n) => Object.is(e[n], t[n]))
  );
}
var Y = class {
  m_setListeners = new Set();
  m_snapshot;
  m_bNotifyPending = !1;
  m_transport;
  m_strClientID;
  m_msPollInterval;
  m_activeTimerID;
  m_rgRequestID;
  m_strTokenToRevoke;
  m_strChallengeURLValue = void 0;
  get m_strChallengeURL() {
    return this.m_strChallengeURLValue;
  }
  set m_strChallengeURL(e) {
    ((this.m_strChallengeURLValue = e), this.NotifyChanged());
  }
  m_onShowAgreement;
  m_bRemoteInteractionValue = !1;
  get m_bRemoteInteraction() {
    return this.m_bRemoteInteractionValue;
  }
  set m_bRemoteInteraction(e) {
    ((this.m_bRemoteInteractionValue = e), this.NotifyChanged());
  }
  m_onCompleteCallback;
  m_eFailureStateValue = 0;
  get m_eFailureState() {
    return this.m_eFailureStateValue;
  }
  set m_eFailureState(e) {
    ((this.m_eFailureStateValue = e), this.NotifyChanged());
  }
  m_strExtendedErrorMessageValue = ``;
  get m_strExtendedErrorMessage() {
    return this.m_strExtendedErrorMessageValue;
  }
  set m_strExtendedErrorMessage(e) {
    ((this.m_strExtendedErrorMessageValue = e), this.NotifyChanged());
  }
  m_onDeviceDetailsCallback;
  constructor(e, t, n, r) {
    ((this.m_transport = e),
      (this.m_onCompleteCallback = t),
      (this.m_onDeviceDetailsCallback = n),
      (this.m_onShowAgreement = r));
  }
  Subscribe(e) {
    return (
      this.m_setListeners.add(e),
      () => {
        this.m_setListeners.delete(e);
      }
    );
  }
  GetSnapshot() {
    let e = this.BuildSnapshot();
    return (
      (this.m_snapshot && wl(this.m_snapshot, e)) || (this.m_snapshot = e),
      this.m_snapshot
    );
  }
  NotifyChanged() {
    this.m_bNotifyPending ||
      ((this.m_bNotifyPending = !0),
      queueMicrotask(() => {
        this.m_bNotifyPending = !1;
        for (let e of this.m_setListeners) e();
      }));
  }
  StartPolling(e = !0) {
    (this.m_activeTimerID != null && this.StopPolling(),
      e
        ? this.PollForUpdate()
        : (this.m_activeTimerID = window.setTimeout(
            this.PollForUpdate,
            this.m_msPollInterval,
          )));
  }
  StopPolling() {
    (window.clearTimeout(this.m_activeTimerID),
      (this.m_activeTimerID = void 0));
  }
  async PollForUpdate() {
    try {
      let e = g.Init(Eo);
      (e.SetEMsg(s),
        e.Body().set_client_id(this.m_strClientID),
        e.Body().set_request_id(this.m_rgRequestID),
        this.m_strTokenToRevoke &&
          e.Body().set_token_to_revoke(this.m_strTokenToRevoke));
      let t = await fs.PollAuthSessionStatus(this.m_transport, e),
        n = t.GetEResult();
      if (n !== 1) {
        if (n === 2) {
          let e = t.Hdr().transport_error();
          if (
            (K(
              `Failed to poll auth session. Result ${n}. Transport Error: ${e}`,
            ),
            e === 2 || e === 3)
          )
            return (this.m_transport.MakeReady(), this.StartPolling(!1), 1);
        }
        if (n === 9 || n === 27) this.m_eFailureState = 2;
        else if (n === 84) this.m_eFailureState = 5;
        else if (n == 118) {
          let e = t.Body().agreement_session_url();
          if (
            (u(!!e, `Missing agreement session URL for result`, n),
            this.m_onShowAgreement)
          )
            this.m_onShowAgreement(e);
          else {
            let t = location.href;
            window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
          }
          return (this.m_onCompleteCallback({ bSuccess: !1 }), n);
        } else
          (K(`Failed to poll auth session. Result: ${n}`),
            (this.m_eFailureState = 1));
        return (this.m_onCompleteCallback({ bSuccess: !1 }), n);
      }
      let {
        new_challenge_url: r,
        new_client_id: i,
        refresh_token: a,
        access_token: o,
        account_name: c,
        had_remote_interaction: l,
        new_guard_data: d,
      } = t.Body().toObject();
      return (
        (this.m_bRemoteInteraction = !!l),
        a
          ? (u(
              !!o && !!c,
              `Missing access token or account name with refresh token`,
            ),
            this.m_onCompleteCallback({
              bSuccess: !0,
              strRefreshToken: a,
              strAccessToken: o,
              strAccountName: c,
              strNewGuardData: d,
            }),
            n)
          : (r && (this.m_strChallengeURL = r),
            i && (this.m_strClientID = i),
            this.StartPolling(!1),
            n)
      );
    } catch (e) {
      return (
        K(`Failed to poll auth session. ${e}`),
        (this.m_eFailureState = 1),
        this.m_onCompleteCallback({ bSuccess: !1 }),
        2
      );
    }
  }
  SetTokenToRevoke(e) {
    this.m_strTokenToRevoke = e;
  }
  GetFailureState() {
    return this.m_eFailureState;
  }
  GetExtendedErrorMessage() {
    return this.m_strExtendedErrorMessage;
  }
  BHadRemoteInteraction() {
    return this.m_bRemoteInteraction;
  }
  async GetDeviceDetails() {
    let e = await this.m_onDeviceDetailsCallback();
    return bo.fromObject(e);
  }
};
(t([k], Y.prototype, `Subscribe`, null),
  t([k], Y.prototype, `GetSnapshot`, null),
  t([k], Y.prototype, `PollForUpdate`, null),
  t([k], Y.prototype, `SetTokenToRevoke`, null));
function Tl(e) {
  let t = new FormData();
  (t.append(`nonce`, e), t.append(`sessionid`, oe(te) ?? ``));
  let n = new URL(location.href),
    r = new URLSearchParams(n.search);
  (r.has(`need_password`) &&
    (r.delete(`need_password`), (n.search = r.toString())),
    t.append(`redir`, n.toString()));
  let i = `${D.LOGIN_BASE_URL}jwt/finalizelogin`;
  return q.default.post(i, t, { withCredentials: !0 }).then(
    (e) => {
      let { data: t } = e;
      if (
        !t ||
        !t.transfer_info ||
        !t.steamID ||
        !Array.isArray(t.transfer_info)
      )
        return (K(`Result of finalizelogin does not match expectations!`), 1);
      let { transfer_info: n, steamID: r, primary_domain: i } = t;
      return Promise.all(
        n.map(({ url: e, params: t }) => Dl(e, { ...t, steamID: r })),
      ).then(
        (e) => El(e, i),
        () => 2,
      );
    },
    () => (K(`Failed to finalize login. Initial call failed.`), 1),
  );
}
function El(e, t) {
  let n = 0;
  return (
    e.forEach((e) => {
      e.bSuccess ||
        (t && e.domain.toLowerCase() === t.toLowerCase()
          ? (n = 1)
          : n == 0 && (n = 2));
    }),
    n
  );
}
async function Dl(e, t) {
  let n = new URL(e),
    r = !0;
  try {
    let i = new FormData();
    Object.keys(t).forEach((e) => i.append(e, t[e]));
    let a = await q.default.post(e, i, { withCredentials: !0, timeout: 1e4 });
    a.status === 200
      ? a.data.result !== 1 &&
        (K(`Transfer login to ${n.host} failed with result: ${a.data.result}`),
        (r = !1))
      : (K(`Transfer login to ${n.host} failed with status code: ${a.status}`),
        (r = !1));
  } catch (e) {
    (K(`Transfer login to ${n.host} failed: "${e}"`), (r = !1));
  }
  return { bSuccess: r, domain: n.host };
}
var Ol = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: n.readUint32, bw: C.writeUint32 },
            usage_type: { n: 2, br: n.readEnum, bw: C.writeEnum },
            confirmation_type: { n: 3, br: n.readInt32, bw: C.writeInt32 },
            confirmation_action: { n: 4, br: n.readInt32, bw: C.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UsageEvent`;
    }
  },
  kl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sender_time || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sender_time: {
              n: 1,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Time_Request`;
    }
  },
  Al = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.server_time || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            server_time: {
              n: 1,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            skew_tolerance_seconds: {
              n: 2,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            large_time_jink: {
              n: 3,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            probe_frequency_seconds: {
              n: 4,
              br: n.readUint32,
              bw: C.writeUint32,
            },
            adjusted_time_probe_frequency_seconds: {
              n: 5,
              br: n.readUint32,
              bw: C.writeUint32,
            },
            hint_probe_frequency_seconds: {
              n: 6,
              br: n.readUint32,
              bw: C.writeUint32,
            },
            sync_timeout: { n: 7, br: n.readUint32, bw: C.writeUint32 },
            try_again_seconds: { n: 8, br: n.readUint32, bw: C.writeUint32 },
            max_attempts: { n: 9, br: n.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Time_Response`;
    }
  },
  jl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            include: { n: 2, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Status_Request`;
    }
  },
  Ml = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.state || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            state: { n: 1, br: n.readUint32, bw: C.writeUint32 },
            inactivation_reason: { n: 2, br: n.readUint32, bw: C.writeUint32 },
            authenticator_type: { n: 3, br: n.readUint32, bw: C.writeUint32 },
            authenticator_allowed: { n: 4, br: n.readBool, bw: C.writeBool },
            steamguard_scheme: { n: 5, br: n.readUint32, bw: C.writeUint32 },
            token_gid: { n: 6, br: n.readString, bw: C.writeString },
            email_validated: { n: 7, br: n.readBool, bw: C.writeBool },
            device_identifier: { n: 8, br: n.readString, bw: C.writeString },
            time_created: { n: 9, br: n.readUint32, bw: C.writeUint32 },
            revocation_attempts_remaining: {
              n: 10,
              br: n.readUint32,
              bw: C.writeUint32,
            },
            classified_agent: { n: 11, br: n.readString, bw: C.writeString },
            allow_external_authenticator: {
              n: 12,
              br: n.readBool,
              bw: C.writeBool,
            },
            time_transferred: { n: 13, br: n.readUint32, bw: C.writeUint32 },
            version: { n: 14, br: n.readUint32, bw: C.writeUint32 },
            last_seen_auth_token_id: {
              n: 15,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            usages: { n: 16, c: Ol, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Status_Response`;
    }
  },
  Nl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            authenticator_time: {
              n: 2,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            serial_number: {
              n: 3,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            authenticator_type: { n: 4, br: n.readUint32, bw: C.writeUint32 },
            device_identifier: { n: 5, br: n.readString, bw: C.writeString },
            http_headers: {
              n: 7,
              r: !0,
              q: !0,
              br: n.readString,
              bw: C.writeRepeatedString,
            },
            version: { n: 8, d: 1, br: n.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_AddAuthenticator_Request`;
    }
  },
  Pl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.shared_secret || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            shared_secret: { n: 1, br: n.readBytes, bw: C.writeBytes },
            serial_number: {
              n: 2,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            revocation_code: { n: 3, br: n.readString, bw: C.writeString },
            uri: { n: 4, br: n.readString, bw: C.writeString },
            server_time: {
              n: 5,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            account_name: { n: 6, br: n.readString, bw: C.writeString },
            token_gid: { n: 7, br: n.readString, bw: C.writeString },
            identity_secret: { n: 8, br: n.readBytes, bw: C.writeBytes },
            secret_1: { n: 9, br: n.readBytes, bw: C.writeBytes },
            status: { n: 10, br: n.readInt32, bw: C.writeInt32 },
            phone_number_hint: { n: 11, br: n.readString, bw: C.writeString },
            confirm_type: { n: 12, br: n.readInt32, bw: C.writeInt32 },
            next_step: { n: 13, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_AddAuthenticator_Response`;
    }
  },
  Fl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || f(e.M()),
        L.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            authenticator_code: { n: 2, br: n.readString, bw: C.writeString },
            authenticator_time: {
              n: 3,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            activation_code: { n: 4, br: n.readString, bw: C.writeString },
            http_headers: {
              n: 5,
              r: !0,
              q: !0,
              br: n.readString,
              bw: C.writeRepeatedString,
            },
            validate_sms_code: { n: 6, br: n.readBool, bw: C.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_FinalizeAddAuthenticator_Request`;
    }
  },
  Il = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            success: { n: 1, br: n.readBool, bw: C.writeBool },
            server_time: {
              n: 3,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            status: { n: 4, br: n.readInt32, bw: C.writeInt32 },
            next_step: { n: 5, br: n.readEnum, bw: C.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_FinalizeAddAuthenticator_Response`;
    }
  },
  Ll = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.revocation_code || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            revocation_code: { n: 2, br: n.readString, bw: C.writeString },
            revocation_reason: { n: 5, br: n.readUint32, bw: C.writeUint32 },
            steamguard_scheme: { n: 6, br: n.readUint32, bw: C.writeUint32 },
            remove_all_steamguard_cookies: {
              n: 7,
              br: n.readBool,
              bw: C.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticator_Request`;
    }
  },
  Rl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            success: { n: 1, br: n.readBool, bw: C.writeBool },
            server_time: {
              n: 3,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            revocation_attempts_remaining: {
              n: 5,
              br: n.readUint32,
              bw: C.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticator_Response`;
    }
  },
  zl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request`;
    }
  },
  Bl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: n.readBool, bw: C.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response`;
    }
  },
  Vl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sms_code || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sms_code: { n: 1, br: n.readString, bw: C.writeString },
            generate_new_token: { n: 2, br: n.readBool, bw: C.writeBool },
            version: { n: 3, d: 1, br: n.readUint32, bw: C.writeUint32 },
            caller_version: { n: 4, br: n.readUint32, bw: C.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request`;
    }
  },
  Hl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.shared_secret || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            shared_secret: { n: 1, br: n.readBytes, bw: C.writeBytes },
            serial_number: {
              n: 2,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            revocation_code: { n: 3, br: n.readString, bw: C.writeString },
            uri: { n: 4, br: n.readString, bw: C.writeString },
            server_time: {
              n: 5,
              br: n.readUint64String,
              bw: C.writeUint64String,
            },
            account_name: { n: 6, br: n.readString, bw: C.writeString },
            token_gid: { n: 7, br: n.readString, bw: C.writeString },
            identity_secret: { n: 8, br: n.readBytes, bw: C.writeBytes },
            secret_1: { n: 9, br: n.readBytes, bw: C.writeBytes },
            status: { n: 10, br: n.readInt32, bw: C.writeInt32 },
            steamguard_scheme: { n: 11, br: n.readUint32, bw: C.writeUint32 },
            steamid: {
              n: 12,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CRemoveAuthenticatorViaChallengeContinue_Replacement_Token`;
    }
  },
  Ul = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            success: { n: 1, br: n.readBool, bw: C.writeBool },
            replacement_token: { n: 2, c: Hl },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response`;
    }
  },
  Wl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || f(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: C.writeFixed64String,
            },
            version: { n: 2, br: n.readUint32, bw: C.writeUint32 },
            signature: { n: 3, br: n.readBytes, bw: C.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= S(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return x(e.M(), t, n);
    }
    static fromObject(t) {
      return A(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return v(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      c(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UpdateTokenVersion_Request`;
    }
  },
  Gl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UpdateTokenVersion_Response`;
    }
  },
  Kl;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`TwoFactor.QueryTime#1`, o(kl, t, n), Al, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  e.QueryTime = t;
  function n(e, t, n) {
    return e.SendMsg(`TwoFactor.QueryStatus#1`, o(jl, t, n), Ml, {
      ePrivilege: 1,
    });
  }
  e.QueryStatus = n;
  function r(e, t, n) {
    return e.SendMsg(`TwoFactor.AddAuthenticator#1`, o(Nl, t, n), Pl, {
      ePrivilege: 1,
    });
  }
  e.AddAuthenticator = r;
  function i(e, t, n) {
    return e.SendMsg(`TwoFactor.FinalizeAddAuthenticator#1`, o(Fl, t, n), Il, {
      ePrivilege: 1,
    });
  }
  e.FinalizeAddAuthenticator = i;
  function a(e, t, n) {
    return e.SendMsg(`TwoFactor.UpdateTokenVersion#1`, o(Wl, t, n), Gl, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdateTokenVersion = a;
  function s(e, t, n) {
    return e.SendMsg(`TwoFactor.RemoveAuthenticator#1`, o(Ll, t, n), Rl, {
      ePrivilege: 9,
    });
  }
  e.RemoveAuthenticator = s;
  function c(e, t, n) {
    return e.SendMsg(
      `TwoFactor.RemoveAuthenticatorViaChallengeStart#1`,
      o(zl, t, n),
      Bl,
      { ePrivilege: 9 },
    );
  }
  e.RemoveAuthenticatorViaChallengeStart = c;
  function l(e, t, n) {
    return e.SendMsg(
      `TwoFactor.RemoveAuthenticatorViaChallengeContinue#1`,
      o(Vl, t, n),
      Ul,
      { ePrivilege: 9 },
    );
  }
  e.RemoveAuthenticatorViaChallengeContinue = l;
})((Kl ||= {}));
var X = class extends Y {
  m_eStatusValue = 0;
  get m_eStatus() {
    return this.m_eStatusValue;
  }
  set m_eStatus(e) {
    ((this.m_eStatusValue = e), this.NotifyChanged());
  }
  m_steamid;
  m_strAccountName;
  m_strConfirmationAssociatedMessage = ``;
  m_bUsingCodeOverride = !1;
  m_strWeakAuthToken = ``;
  m_weakAuthWebInterface;
  m_onGetMachineAuth;
  m_replacementAuthenticator;
  m_strErrorReferenceValue = ``;
  get m_strErrorReference() {
    return this.m_strErrorReferenceValue;
  }
  set m_strErrorReference(e) {
    ((this.m_strErrorReferenceValue = e), this.NotifyChanged());
  }
  m_onLoginComplete;
  constructor(e) {
    (super(
      e.transport,
      (e) => this.onAuthComplete(e),
      e.onDeviceDetails,
      e.onShowAgreement,
    ),
      (this.m_onLoginComplete = e.onComplete),
      (this.m_onGetMachineAuth = e.onGetMachineAuth));
  }
  BuildSnapshot() {
    return {
      strAccountName: this.GetAccountName(),
      steamid: this.GetSteamID(),
      eFailureState: this.GetFailureState(),
      strExtendedErrorMessage: this.GetExtendedErrorMessage(),
      strErrorReference: this.GetErrorReference(),
      strConfirmationAssociatedMessage: this.GetConfirmationAssociatedMessage(),
      eStatus: this.GetStatus(),
      bCanGoBack: this.BCanGoBack(),
      replacementAuthenticator: this.GetReplacementAuthenticator(),
    };
  }
  async Start(e, t, n) {
    if (this.m_eStatus !== 0 && this.m_eStatus !== 2)
      return (
        K(
          `Cannot start an already started auth session. Create a new session instance.`,
        ),
        29
      );
    let r = e.replace(/[^\x00-\x7F]/g, ``),
      i = t.replace(/[^\x00-\x7F]/g, ``).slice(0, 64);
    if (!r.length || !i.length) return 8;
    if (
      ((this.m_eStatus = 1), (this.m_bUsingCodeOverride = !1), e == `anonymous`)
    )
      return (this.SetFailureState(J.AnonymousLogin, Z.EResult(12)), 12);
    try {
      let t = await ql(this.m_transport, r);
      if (!t)
        return (
          K(`Cannot start auth session without a valid RSA key`),
          this.SetFailureState(J.Network, Z.EResult(20)),
          20
        );
      let a = bl(i, t),
        o = g.Init(wo);
      (o.SetEMsg(s),
        o.Body().set_account_name(r),
        o.Body().set_encrypted_password(a ?? void 0),
        o.Body().set_encryption_timestamp(t.timestamp),
        o.Body().set_remember_login(!!n),
        o.Body().set_persistence(+!!n));
      let c = y();
      c && o.Body().set_website_id(c.WEBSITE_ID);
      try {
        o.Body().set_device_details(await this.GetDeviceDetails());
      } catch (e) {
        (K(`Failed to GetDeviceDetails`), K(e));
      }
      if (
        (o.Body().set_language(b(D.LANGUAGE)), this.m_onGetMachineAuth != null)
      ) {
        let e = await this.m_onGetMachineAuth(r);
        e.eresult == 1 && o.Body().set_guard_data(e.data);
      }
      await this.m_transport.MakeReady();
      let l = await fs.BeginAuthSessionViaCredentials(this.m_transport, o);
      l.DEBUG_LogToConsole();
      let d = l.GetEResult(),
        f = l.Hdr().transport_error();
      if (d !== 1)
        switch (d) {
          case 5:
            return ((this.m_eStatus = 2), d);
          case 20:
          case 3:
            return (this.SetFailureState(J.Network, Z.EResult(20)), d);
          case 84:
            return (this.SetFailureState(J.RateLimitExceeded, Z.EResult(d)), d);
          case 118: {
            let e = l.Body().agreement_session_url();
            if (
              (u(!!e, `Missing agreement session URL for result`, d),
              this.m_onShowAgreement)
            )
              this.m_onShowAgreement(e);
            else {
              let t = location.href;
              window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
            }
            return (
              this.m_onCompleteCallback({ bSuccess: !1 }),
              (this.m_eStatus = 0),
              d
            );
          }
          default:
            return (
              K(`Failed to start auth session. Result: ${d} Transport: ${f}`),
              this.SetFailureState(
                J.Generic,
                Z.EResult(d),
                l.Body().extended_error_message(),
              ),
              this.m_onCompleteCallback({ bSuccess: !1 }),
              d
            );
        }
      this.m_strAccountName = e;
      let {
        client_id: p,
        request_id: m,
        interval: h,
        allowed_confirmations: _ = [],
        steamid: v,
        weak_token: x,
      } = l.Body().toObject();
      if (
        (u(
          h !== void 0 && !!p && !!v,
          `Missing poll interval, client ID, or steamid for result`,
          d,
        ),
        (this.m_msPollInterval = h * 1e3),
        (this.m_strClientID = p),
        (this.m_rgRequestID = m),
        (this.m_steamid = v),
        (this.m_strWeakAuthToken = x ?? ``),
        _.find(({ confirmation_type: e }) => e === 6))
      ) {
        let e = new FormData();
        (e.append(`clientid`, p), e.append(`steamid`, v));
        let t = `${D.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
        try {
          if (
            (
              await q.default.post(t, e, {
                headers: { "Content-Type": `multipart/form-data` },
                withCredentials: !0,
              })
            ).data.result == 1
          )
            return ((this.m_eStatus = 4), this.StartPolling(!0), 1);
        } catch (e) {
          if (
            (vl(`checkdevice ajax to ${t} failed: ${e.message}`),
            e instanceof q.AxiosError)
          ) {
            let t = e;
            return t.response
              ? (this.SetFailureState(
                  J.Network,
                  Z.AjaxFailureWithCode(t.response.status),
                ),
                20)
              : (this.SetFailureState(J.Network, Z.AjaxFailureNoCode()), 20);
          }
          return (this.SetFailureState(J.Network, Z.EResult(79)), 79);
        }
      }
      let S = Yl(
          _.map(
            ({ confirmation_type: e }) => (
              u(
                e !== void 0,
                `Missing confirmation type in allowed confirmations`,
              ),
              e
            ),
          ),
        ),
        C = _.find(({ confirmation_type: e }) => e === S);
      switch (
        (C &&
          C.associated_message &&
          (this.m_strConfirmationAssociatedMessage = C.associated_message),
        S)
      ) {
        case 1:
          return ((this.m_eStatus = 13), this.StartPolling(), d);
        case 2:
          this.m_eStatus = 3;
          break;
        case 5:
          ((this.m_eStatus = 4), this.StartPolling(!1));
          break;
        case 3:
          ((this.m_eStatus = 5), this.StartPolling(!1));
          break;
        case 4:
          ((this.m_eStatus = 6), this.StartPolling(!1));
      }
      return d;
    } catch (e) {
      return (
        K(`Failed to start auth session. Exception: ${JSON.stringify(e)}`),
        vl(e),
        this.SetFailureState(J.Generic, Z.FailedToStart()),
        this.m_onCompleteCallback({ bSuccess: !1 }),
        2
      );
    }
  }
  Stop() {
    (this.StopPolling(), (this.m_eStatus = 16));
  }
  GetStatus() {
    return this.m_eStatus;
  }
  GetConfirmationAssociatedMessage() {
    return this.m_strConfirmationAssociatedMessage;
  }
  GetAccountName() {
    return this.m_strAccountName;
  }
  GetSteamID() {
    return this.m_steamid;
  }
  GetReplacementAuthenticator() {
    return this.m_replacementAuthenticator;
  }
  GetErrorReference() {
    return this.m_strErrorReference;
  }
  async SendSteamGuardCode(e, t = !0) {
    if (e.length == 0) {
      switch (this.m_eStatus) {
        case 10:
          this.m_eStatus = 3;
          break;
        case 11:
          this.m_eStatus = 5;
          break;
        case 5:
        case 3:
          break;
        default:
          throw Error(`Attempted to clear code in invalid state`);
      }
      return Promise.resolve(1);
    }
    try {
      await this.m_transport.MakeReady();
      let n = this.m_eStatus === 3 || this.m_eStatus === 10,
        r = g.Init(Ro);
      (r.SetEMsg(s),
        r.Body().set_client_id(this.m_strClientID),
        r.Body().set_steamid(this.m_steamid),
        r.Body().set_code(e),
        r.Body().set_code_type(n ? 2 : 3));
      let i = await fs.UpdateAuthSessionWithSteamGuardCode(this.m_transport, r),
        a = i.GetEResult();
      if (a !== 1) {
        if (!t)
          return (
            K(
              `Failed to automatically update session with local SG info. Result ${a}. Transport ${i.Hdr().transport_error()}`,
            ),
            a
          );
        switch (a) {
          case 65:
          case 88:
            return ((this.m_eStatus = n ? 10 : 11), a);
          case 27:
            return (
              this.SetFailureState(J.Expired, Z.EResult(a)),
              this.m_onCompleteCallback({ bSuccess: !1 }),
              a
            );
          case 84:
            return (
              this.SetFailureState(J.RateLimitExceeded, Z.EResult(a)),
              this.m_onCompleteCallback({ bSuccess: !1 }),
              a
            );
          case 118: {
            let e = i.Body().agreement_session_url();
            if (
              (u(!!e, `Missing agreement session URL for result`, a),
              this.m_onShowAgreement)
            )
              this.m_onShowAgreement(e);
            else {
              let t = location.href;
              window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
            }
            return (
              this.m_onCompleteCallback({ bSuccess: !1 }),
              (this.m_eStatus = 0),
              a
            );
          }
          default:
            return (
              K(`Failed to update auth session with SG code. Result: ${a}`),
              this.SetFailureState(J.Generic, Z.EResult(a)),
              this.m_onCompleteCallback({ bSuccess: !1 }),
              a
            );
        }
      }
      return ((this.m_eStatus = 13), this.StartPolling(), a);
    } catch (e) {
      return (
        K(`Failed to update auth session with SG code. ${e}`),
        this.SetFailureState(J.Generic, Z.FailedToAddCode()),
        this.m_onCompleteCallback({ bSuccess: !1 }),
        2
      );
    }
  }
  UseCodeOverride() {
    switch (this.m_eStatus) {
      case 6:
        ((this.m_bUsingCodeOverride = !0), (this.m_eStatus = 5));
        return;
      case 4:
        ((this.m_bUsingCodeOverride = !0), (this.m_eStatus = 3));
        return;
      default:
        K(
          `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
        );
        return;
    }
  }
  CantAccessCode() {
    this.m_eStatus = 7;
  }
  async StartMoveAuthenticator() {
    this.m_weakAuthWebInterface = new ge(
      D.WEBAPI_BASE_URL,
      this.m_strWeakAuthToken,
    );
    try {
      let e = g.Init(zl),
        t = await Kl.RemoveAuthenticatorViaChallengeStart(
          this.m_weakAuthWebInterface.GetServiceTransport(),
          e,
        );
      t.GetEResult() == 1
        ? (this.m_eStatus = 8)
        : (t.DEBUG_LogToConsole(),
          K(
            `An unexpected error occured while adding an authenticator`,
            t.GetEResult(),
          ),
          this.SetFailureState(J.MoveAuthenticator, Z.EResult(t.GetEResult())));
    } catch (e) {
      (K(`An unexpected error occured while moving an authenticator`, e),
        this.SetFailureState(J.MoveAuthenticator, Z.EResult(2)));
    }
  }
  async ResendMoveCode() {
    u(
      !!this.m_weakAuthWebInterface,
      `Resending move code before StartMoveAuthenticator`,
    );
    let e = g.Init(zl),
      t = await Kl.RemoveAuthenticatorViaChallengeStart(
        this.m_weakAuthWebInterface.GetServiceTransport(),
        e,
      );
    (t.GetEResult() != 1 &&
      (t.DEBUG_LogToConsole(),
      K(
        `An unexpected error occured while adding an authenticator`,
        t.GetEResult(),
      )),
      (this.m_eStatus = 8));
  }
  async FinishMoveAuthenticator(e) {
    u(
      !!this.m_weakAuthWebInterface,
      `Finishing authenticator move before StartMoveAuthenticator`,
    );
    let t = g.Init(Vl);
    (t.Body().set_sms_code(e),
      t.Body().set_generate_new_token(!0),
      t.Body().set_version(2));
    let n = await Kl.RemoveAuthenticatorViaChallengeContinue(
      this.m_weakAuthWebInterface.GetServiceTransport(),
      t,
    );
    if (n.GetEResult() == 94) this.m_eStatus = 12;
    else if (!n.Body().success())
      (n.DEBUG_LogToConsole(),
        K(
          `Error when calling RemoveAuthenticatorViaChallengeContinue`,
          n.GetEResult(),
        ),
        this.SetFailureState(J.MoveAuthenticator, Z.EResult(n.GetEResult())));
    else {
      n.DEBUG_LogToConsole();
      let e = n.Body().replacement_token();
      (u(!!e, `Missing replacement token on successful authenticator move`),
        (this.m_replacementAuthenticator = Sl(e.toObject())),
        (this.m_eStatus = 9),
        (this.m_bUsingCodeOverride = !1));
    }
  }
  FinishMoveRecovery() {
    this.m_eStatus = 5;
  }
  BCanGoBack() {
    switch (this.m_eStatus) {
      case 5:
      case 11:
      case 3:
      case 10:
      case 6:
      case 4:
      case 7:
      case 8:
      case 12:
        return !0;
      default:
        return !1;
    }
  }
  GoBack() {
    switch (this.m_eStatus) {
      case 6:
      case 4:
        this.m_eStatus = 0;
        break;
      case 5:
      case 11:
        this.m_eStatus = this.m_bUsingCodeOverride ? 6 : 0;
        break;
      case 7:
      case 8:
      case 12:
        this.m_eStatus = (this.m_bUsingCodeOverride, 5);
        break;
      case 3:
      case 10:
        this.m_eStatus = this.m_bUsingCodeOverride ? 4 : 0;
        break;
      default:
        K(
          `Don't know how to GoBack from login session status ${this.m_eStatus}`,
        );
        return;
    }
  }
  SetFailureState(e, t, n = ``) {
    ((this.m_eStatus = 15),
      (this.m_eFailureState = e),
      (this.m_strErrorReference = t),
      (this.m_strExtendedErrorMessage = n));
  }
  onAuthComplete = (e) => {
    this.m_eStatus = e.bSuccess ? 14 : 15;
    let t;
    (e.bSuccess
      ? (u(
          !!this.m_strAccountName && !!this.m_steamid,
          `Missing account name or steamid on auth success`,
        ),
        (t = {
          ...e,
          strAccountName: this.m_strAccountName,
          steamid: this.m_steamid,
        }))
      : (t = { bSuccess: !1 }),
      this.m_onLoginComplete && this.m_onLoginComplete(t));
  };
  SetOnLoginComplete(e) {
    this.m_onLoginComplete = e;
  }
};
(t([k], X.prototype, `Start`, null),
  t([k], X.prototype, `SendSteamGuardCode`, null),
  t([k], X.prototype, `UseCodeOverride`, null),
  t([k], X.prototype, `CantAccessCode`, null),
  t([k], X.prototype, `StartMoveAuthenticator`, null),
  t([k], X.prototype, `ResendMoveCode`, null),
  t([k], X.prototype, `FinishMoveAuthenticator`, null),
  t([k], X.prototype, `FinishMoveRecovery`, null),
  t([k], X.prototype, `GoBack`, null),
  t([k], X.prototype, `SetOnLoginComplete`, null));
async function ql(e, t) {
  let n = g.Init(vo);
  (n.Body().set_account_name(t), n.SetEMsg(s));
  try {
    await e.MakeReady();
    let t = await fs.GetPasswordRSAPublicKey(e, n);
    if ((t.DEBUG_LogToConsole(), t.GetEResult() !== 1))
      return (K(`Failed to get RSA key with EResult: ${t.GetEResult()}`), null);
    let {
      publickey_exp: r,
      publickey_mod: i,
      timestamp: a,
    } = t.Body().toObject();
    return !r || !i || !a
      ? (K(
          `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: r, publickey_mod: i, timestamp: a })}`,
        ),
        null)
      : { publickey_exp: r, publickey_mod: i, timestamp: a };
  } catch (e) {
    return (K(`Failed to get RSA key: ${JSON.stringify(e)}`), null);
  }
}
var Jl = [4, 3, 2, 1, 0, 5].reduce((e, t, n) => ((e[t] = n), e), {});
function Yl(e) {
  let t = e[0] || 0;
  return (e.length > 1 && (t = e.sort((e, t) => Jl[e] - Jl[t])[0]), t);
}
function Xl(e) {
  let [t, n] = (0, j.useState)(() => new X(e));
  return (
    (0, j.useEffect)(() => {
      t?.SetOnLoginComplete(e.onComplete);
    }, [t, e.onComplete]),
    {
      ...(0, j.useSyncExternalStore)(t.Subscribe, t.GetSnapshot, t.GetSnapshot),
      start: t.Start,
      addCode: t.SendSteamGuardCode,
      useCodeOverride: t.UseCodeOverride,
      cantAccessCode: t.CantAccessCode,
      startMoveAuthenticator: t.StartMoveAuthenticator,
      resendMoveCode: t.ResendMoveCode,
      finishMoveAuthenticator: t.FinishMoveAuthenticator,
      finishMoveRecovery: t.FinishMoveRecovery,
      reset: () => n(new X(e)),
      goBack: t.GoBack,
      setTokenToRevoke: t.SetTokenToRevoke,
    }
  );
}
function Zl(e) {
  return e ? 7 : 5;
}
function Ql(e, t) {
  return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= Zl(t);
}
function $l(e, t) {
  return Ql(e, t) && e.length === Zl(t);
}
var Z = {
    EResult: (e) => `e${e}`,
    FailedToStart: () => `c-fts`,
    FailedToAddCode: () => `c-ftac`,
    AjaxFailureNoCode: () => `af`,
    AjaxFailureWithCode: (e) => `af-${e}`,
  },
  eu = class extends Y {
    m_eStatusValue = 0;
    get m_eStatus() {
      return this.m_eStatusValue;
    }
    set m_eStatus(e) {
      ((this.m_eStatusValue = e), this.NotifyChanged());
    }
    m_bPreloaded = !1;
    constructor(e) {
      (super(
        e.transport,
        (t) => {
          ((this.m_eStatus = t.bSuccess ? 3 : 4), e.onComplete(t));
        },
        e.onDeviceDetails,
      ),
        e.preloaded &&
          ((this.m_eStatusValue = 2),
          (this.m_strClientID = e.preloaded.strClientID),
          (this.m_strChallengeURL = e.preloaded.strChallengeURL),
          (this.m_msPollInterval = e.preloaded.msPollInterval),
          (this.m_rgRequestID = e.preloaded.rgRequestID),
          (this.m_bPreloaded = !0)));
    }
    BuildSnapshot() {
      return {
        strChallengeURL: this.GetChallengeURL(),
        strClientID: this.GetClientID(),
        eFailureState: this.GetFailureState(),
        eStatus: this.GetStatus(),
        bHadRemoteInteraction: this.BHadRemoteInteraction(),
      };
    }
    async Start() {
      if (this.m_bPreloaded && (this.m_eStatus === 2 || this.m_eStatus === 5))
        return (
          (this.m_eStatus = 2),
          this.m_transport.MakeReady(),
          this.StartPolling(!1),
          1
        );
      if (this.m_eStatus !== 0)
        return (
          console.error(
            `Cannot start an already started auth session. Create a new session instance.`,
          ),
          2
        );
      this.m_eStatus = 1;
      try {
        await this.m_transport.MakeReady();
        let e = g.Init(So);
        e.SetEMsg(s);
        try {
          e.Body().set_device_details(await this.GetDeviceDetails());
        } catch (e) {
          (console.error(`Failed to GetDeviceDetails`), console.log(e));
        }
        let t = y();
        t && e.Body().set_website_id(t.WEBSITE_ID);
        let n = await fs.BeginAuthSessionViaQR(this.m_transport, e),
          r = n.GetEResult(),
          i = n.Hdr().transport_error();
        if (r !== 1)
          return (
            console.error(
              `Failed to start auth session. Result: ${r} Transport: ${i}`,
            ),
            (this.m_eFailureState = J.Generic),
            this.m_onCompleteCallback({ bSuccess: !1 }),
            r
          );
        let {
          client_id: a,
          challenge_url: o,
          interval: c,
          request_id: l,
        } = n.Body().toObject();
        return (
          u(c !== void 0, `Missing poll interval for QR auth session`),
          (this.m_strClientID = a),
          (this.m_strChallengeURL = o),
          (this.m_msPollInterval = c * 1e3),
          (this.m_rgRequestID = l),
          (this.m_eStatus = 2),
          this.StartPolling(!1),
          r
        );
      } catch (e) {
        return (
          console.error(`Failed to start auth session: ${JSON.stringify(e)}`),
          (this.m_eFailureState = J.Generic),
          this.m_onCompleteCallback({ bSuccess: !1 }),
          2
        );
      }
    }
    Stop() {
      (this.StopPolling(), (this.m_eStatus = 5));
    }
    GetChallengeURL() {
      return this.m_strChallengeURL;
    }
    GetClientID() {
      return this.m_strClientID;
    }
    GetStatus() {
      return this.m_eStatus;
    }
  };
function tu(e) {
  let [t, n] = (0, j.useState)(() => new eu(e));
  return (
    (0, j.useEffect)(
      () => (
        t.Start(),
        () => {
          t.Stop();
        }
      ),
      [t],
    ),
    {
      ...(0, j.useSyncExternalStore)(t.Subscribe, t.GetSnapshot, t.GetSnapshot),
      reset: () => n(new eu({ ...e, preloaded: void 0 })),
      setTokenToRevoke: t.SetTokenToRevoke,
    }
  );
}
async function nu() {
  let [e, t, n, r] = await Promise.all([
    SteamClient.System.GetOSType(),
    SteamClient.System.GetSystemInfo(),
    SteamClient?.Auth?.GetLocalHostname?.() ?? ``,
    SteamClient?.Auth?.GetMachineID?.() ?? void 0,
  ]);
  return {
    os_type: e,
    device_friendly_name: n,
    machine_id: r,
    platform_type: 1,
    gaming_device_type: t.eGamingDeviceType,
  };
}
async function ru() {
  return { device_friendly_name: window.navigator.userAgent, platform_type: 2 };
}
var iu = `Login_RememberMeSetting`;
function au(e) {
  let { onSuccess: t, secureComputer: n = !0, isProbablySharedPC: r = !1 } = e,
    i = (0, j.useCallback)(
      (e) => {
        if (e.bSuccess) {
          let {
            strRefreshToken: n,
            strAccessToken: r,
            strAccountName: i,
            strNewGuardData: a,
          } = e;
          t({
            strRefreshToken: n,
            strAccessToken: r,
            strAccountName: i,
            strNewGuardData: a,
          });
        }
      },
      [t],
    ),
    a = Xl({
      transport: e.transport,
      onComplete: i,
      onDeviceDetails: e.onDeviceDetails,
      onGetMachineAuth: e.onGetMachineAuth,
      onShowAgreement: e.onShowAgreement,
    }),
    [o, s] = (0, j.useState)(0),
    [c, l] = (0, j.useState)(
      e.refreshInfo?.account_name ?? e.defaultAccountName ?? ``,
    ),
    [u, d] = (0, j.useState)(``),
    [f, p] = (0, j.useState)(n && !r);
  (0, j.useLayoutEffect)(() => {
    typeof localStorage < `u` && localStorage.getItem(iu) == `0` && p(!1);
  }, []);
  let m = a.eStatus !== 0 && a.eStatus !== 1 && a.eStatus !== 2;
  return (
    (0, j.useEffect)(() => {
      e.refreshInfo?.login_token_id &&
        a.setTokenToRevoke(e.refreshInfo.login_token_id);
    }, [e.refreshInfo, a]),
    {
      password: a,
      onComplete: i,
      eQRStatus: o,
      onQRStatusChange: s,
      strAccountName: c,
      onAccountNameChange: l,
      strPassword: u,
      onPasswordChange: d,
      bRememberMe: f,
      onRememberMeChange: (e) => {
        (p(e), localStorage?.setItem(iu, e ? `1` : `0`));
      },
      onPasswordSubmit: () =>
        !c || !u ? Promise.resolve(8) : a.start(c, u, f),
      bInPasswordFlow: m,
      onTryOffline: () => {
        (vl(`Logging in offline with username ${c}`),
          SteamClient.User.SetLoginCredentials(c, u, f),
          SteamClient.User.StartOffline(!0));
      },
    }
  );
}
function ou(e, t = ``) {
  let n = { title: ``, description: `` };
  switch (e) {
    case J.None:
      return { title: ``, description: `` };
    case J.Expired:
      n = {
        title: O.Localize(`#Login_Error_Expired_Title`),
        description: O.Localize(`#Login_Error_Expired_Description`),
      };
      break;
    case J.Network:
      n = {
        title: O.Localize(`#Login_Error_Network_Title`),
        description: O.Localize(`#Login_Error_Network_Description`),
      };
      break;
    case J.MoveAuthenticator:
      n = {
        title: O.Localize(`#Error_Generic`),
        description: O.Localize(`#Login_Error_MoveAuthenticator_Description`),
      };
      break;
    case J.RateLimitExceeded:
      n = {
        title: O.Localize(`#Login_Error_RateLimit_Title`),
        description: O.Localize(`#Login_Error_RateLimit_Description`),
      };
      break;
    case J.AnonymousLogin:
      n = {
        title: O.Localize(`#Login_Error_Anonymous_Title`),
        description: O.Localize(`#Login_Error_Anonymous_Description`),
      };
      break;
    case J.Generic:
    default:
      n = {
        title: O.Localize(`#Error_Generic`),
        description: O.Localize(`#Login_Error_Default_Description`),
      };
  }
  return (t && (n.description = t), n);
}
var su = `ZhRwp4aSW-8-`,
  cu = `QV15rhpdkBI-`,
  lu = `_3M1tVbU6uAM-`,
  uu = `p0lt1P2vwbI-`,
  du = `Lw5H9Bgq0ww-`,
  fu = `HD-XkY2oIS0-`,
  pu = `t972389vN-Y-`,
  mu = `_5U7-qgmzcvo-`,
  hu = `-HdQ6mrZKtA-`,
  gu = `Tr28R97XrnU-`,
  _u = `_17vA1ePJ-dw-`,
  vu = `hYiUBswjB8E-`,
  yu = `l-m0O8YsKvg-`,
  bu = `WNU0cJCzPqA-`,
  xu = `sljnSz9B7VM-`,
  Su = `KE-CI3fCrt4-`,
  Cu = `F2-23fRyFdg-`,
  wu = `_9ehBJOSNpjY-`,
  Tu = `H2e67uoFTZo-`,
  Eu = `_0O9XQ4NvNgg-`,
  Du = `SJJMt5-Nlqc-`,
  Ou = `_5HbDhenxKKA-`,
  ku = `JRre8-r--eY-`,
  Au = `-wYn7tUZ-Qc-`,
  ju = `Y0ZBzWFxTiU-`,
  Mu = `Rq9MD5lNpxw-`,
  Nu = `aDxXoSR2-2M-`,
  Pu = `A44IVG2oXaA-`,
  Fu = `DJzHz8vrR58-`,
  Iu = `_6uA-qQnXgqs-`,
  Lu = `zS2JKIAoqLs-`,
  Ru = `g2m1tomZf5Y-`,
  zu = `DSy9L5eaj5o-`,
  Bu = `riI5q82cESo-`,
  Vu = `gjs7dr1G9B4-`,
  Hu = `_8tHxNur8iVQ-`,
  Uu = `QDXFvQ1VRGs-`,
  Wu = `iI4-KPYmClQ-`,
  Gu = `FCVI1-X5QXI-`,
  Ku = `_-7t7WL8ib4U-`,
  qu = `_4cSRMvOczro-`,
  Ju = `urTXd9G8cNM-`,
  Yu = `tk1GT5on9gQ-`,
  Xu = `EUZmbwRThEY-`,
  Zu = `koI0X-poWGo-`,
  Qu = `ik9s3tnOv3M-`,
  $u = `e5FVer86lmY-`,
  ed = `O8iS-RxIxMc-`,
  td = `EWu0dHs0CgM-`,
  nd = `G3u-Es6yEe8-`,
  rd = `nr0J1UoEl8s-`,
  id = `_19NDBszdpt8-`,
  ad = `_4p53BqicMtw-`,
  od = `LJXTU0Fs0Mc-`,
  sd = `NoRFObwpjo0-`,
  cd = `u95III-ojfU-`,
  ld = `dfnWU-vLcuI-`,
  ud = `-iy7zxvavFA-`,
  dd = `_0wUoYmLYupw-`,
  fd = `V6VD9IECTcA-`,
  pd = `eDuVIFYKU84-`,
  md = `sH-b0kW7QCY-`,
  hd = `z8NjGLKg3z0-`,
  gd = `_4pLGekYMMsE-`,
  _d = `X1k4Ip6MIC8-`,
  vd = `qeijEUL7oHU-`;
function yd() {
  let e = be();
  return e ? ye(e.LAUNCHER_TYPE) : !1;
}
var bd = `SoYZJobaqlk-`,
  xd = `KQdWHvm1kCY-`;
function Sd(e) {
  let {
    length: t,
    value: n,
    onChange: r,
    onPaste: i,
    tone: a,
    autoFocus: o,
    disabled: s,
    loading: c,
    backupCode: l,
    allowCharacter: u,
  } = e;
  (0, j.useEffect)(() => {
    o && h();
  }, []);
  let d = (0, j.useRef)([]),
    f = () => r(d.current.map((e) => e.value)),
    p = (e) => {
      let t = e.target.value;
      if (t && u && !u(t)) return;
      let n = e.target.nextElementSibling;
      (e.target.value && n && n.focus(), f());
    },
    m = (e) => {
      d.current.findIndex((e) => !!e.value) === -1
        ? d.current[0]?.select()
        : e.target.select();
    },
    h = () => {
      let e = d.current.find((e) => !e.value);
      e ? e.focus() : d.current[d.current.length - 1].focus();
    },
    g = (e) => {
      let t = e.target;
      if (e.key === `Backspace` || e.key === `Delete`) {
        let n =
          e.key === `Backspace`
            ? t.previousElementSibling
            : t.nextElementSibling;
        t.value === `` &&
          n &&
          ((n.value = ``), n.focus(), e.preventDefault(), f());
      } else if (
        e.key === `ArrowLeft` ||
        e.key === `ArrowRight` ||
        e.key === `ArrowUp` ||
        e.key === `ArrowDown`
      ) {
        let n =
          e.key === `ArrowLeft` || e.key === `ArrowUp`
            ? t.previousElementSibling
            : t.nextElementSibling;
        n && (n.focus(), e.preventDefault());
      }
    },
    _ = (e) => {
      let t = e.clipboardData.getData(`Text`),
        n = e.target,
        r = 0;
      for (; n && r < t.length;)
        (n.focus(), (n.value = t.charAt(r)), (n = n.nextElementSibling), r++);
      (f(), e.preventDefault(), i && i());
    },
    v = [];
  for (let e = 0; e < t; e++)
    v.push(
      (0, M.jsx)(
        re,
        {
          noFocusRing: !0,
          type: `text`,
          maxLength: 1,
          ref: (t) => {
            t && (d.current[e] = t);
          },
          onChange: p,
          onFocus: m,
          onClick: (e) => e.stopPropagation(),
          onKeyDown: g,
          onPaste: _,
          value: n[e] ? n[e][0] : ``,
          autoComplete: `none`,
          autoFocus: e === 0 && o,
          disabled: s || c,
          className: xd,
        },
        e,
      ),
    );
  return (0, M.jsxs)(_e, {
    className: (0, P.default)(
      bd,
      a === `danger` && `faQ-XEuPsJg-`,
      s && `mIAxC7mq9-I-`,
      l && `eQsO7wBQCBc-`,
    ),
    onClick: h,
    children: [
      c &&
        (0, M.jsx)(`div`, {
          className: `_4vkP-m3oW-0-`,
          children: (0, M.jsx)(dp, { size: `small` }),
        }),
      v,
    ],
  });
}
function Cd() {
  let e = `svgid_` + (0, j.useId)().replace(/[^A-Za-z0-9_-]/g, ``);
  return [e, `url(#${e})`];
}
function wd(e) {
  let [t, n] = Cd();
  return (0, M.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 15 23`,
    fill: `none`,
    ...e,
    children: [
      (0, M.jsx)(`g`, {
        clipPath: n,
        children: (0, M.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M6.9955 11.5L15 3.4955L11.5045 -1.52793e-07L0.00450275 11.5L11.5045 23L15 19.5045L6.9955 11.5Z`,
        }),
      }),
      (0, M.jsx)(`defs`, {
        children: (0, M.jsx)(`clipPath`, {
          id: t,
          children: (0, M.jsx)(`rect`, {
            fill: `currentColor`,
            width: `15`,
            height: `23`,
          }),
        }),
      }),
    ],
  });
}
function Td(e) {
  let { color: t = `#fff`, ...n } = e;
  return (0, M.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Check`,
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    strokeWidth: `24`,
    stroke: t,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    strokeMiterlimit: `10`,
    ...n,
    children: (0, M.jsx)(`polyline`, {
      fill: `none`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var Ed = `_5ZSIN7wAn6E-`,
  Dd = `zuEsqPx3FlM-`,
  Od = `lSX5-sK13fE-`,
  kd = `_9ifT2fGdq30-`,
  Ad = `OZPDdNP4BlE-`,
  jd = `CiER6ovkLN4-`,
  Md = `ap9xoluiWE8-`,
  Nd = `Kpi0-rRHJgM-`,
  Pd = `DSe4gwh02MM-`,
  Fd = `Lkyq1egj6es-`,
  Id = `whGFWgAsd0U-`,
  Ld = `_2JDR7sA0aXg-`,
  Rd = `m2hvR7gx-6w-`,
  zd = `qqqupBFca0w-`,
  Bd = `KEh8FE6CS3A-`,
  Vd = `G-Ild6re3CI-`,
  Hd = `-GTUE7hcPdE-`,
  Ud = `JFEDQymQuzM-`,
  Wd = `EDwB-WhQu6w-`,
  Gd = `d-47LK5oiRI-`,
  Kd = `yFS9xOKggIk-`,
  qd = `LTHCVV1OMTQ-`,
  Jd = `G4dDPXGgXx8-`,
  Yd = `_4ccJpuR0F8o-`,
  Xd = `NVuf9TmVDOU-`,
  Zd = `EexJySqIon8-`,
  Qd = `aK59xJ2GP9s-`,
  $d = `_7sOsy8KxW18-`,
  ef = new URL(
    `../../../images/applications/stats/steam_spinner.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  tf = j.memo(function (e) {
    let {
        className: t,
        size: n,
        string: r,
        position: i,
        static: a,
        msDelayAppear: o,
      } = e,
      s = [Ed, `SteamLogoThrobber`, nf(n)],
      [c, l] = j.useState(!o),
      u = !yd();
    return (
      (0, j.useEffect)(() => {
        if (c) return;
        let e = setTimeout(() => l(!0), o);
        return () => clearTimeout(e);
      }, [o, c]),
      r === void 0 && s.push(kd),
      t && s.push(t),
      a && s.push(Dd),
      (0, M.jsxs)(`div`, {
        className: le(
          i == `center` && `CnlxA61G8kY-`,
          !!o && `VF2yNCE0Yms-`,
          c && `uALx1rZZEbE-`,
        ),
        children: [
          c &&
            u &&
            (0, M.jsx)(`div`, {
              className: s.join(` `),
              children: (0, M.jsx)(`div`, {
                className: `Laj-8wPgPBM-`,
                children: (0, M.jsx)(`img`, { src: xe(ef) }),
              }),
            }),
          !!r && (0, M.jsx)(`div`, { className: `flvSd6Licro-`, children: r }),
        ],
      })
    );
  });
j.memo(function (e) {
  let {
      className: t,
      size: n,
      string: r,
      position: i,
      static: a,
      msDelayAppear: o,
    } = e,
    s = [Ed, `SteamLogoThrobber`, nf(n)],
    [c, l] = j.useState(!o);
  return (
    (0, j.useEffect)(() => {
      if (c) return;
      let e = setTimeout(() => l(!0), o);
      return () => clearTimeout(e);
    }, [o, c]),
    r === void 0 && s.push(kd),
    t && s.push(t),
    a && s.push(Dd),
    (0, M.jsxs)(`div`, {
      className: le(
        i == `center` && `CnlxA61G8kY-`,
        !!o && `VF2yNCE0Yms-`,
        c && `uALx1rZZEbE-`,
      ),
      children: [
        c &&
          (0, M.jsx)(`div`, {
            className: s.join(` `),
            children: (0, M.jsxs)(`div`, {
              className: `kfL-m23H5XM-`,
              children: [
                (0, M.jsx)(rf, { className: void 0 }),
                (0, M.jsx)(rf, { className: `hxxrDeXoxWQ-` }),
              ],
            }),
          }),
        !!r && (0, M.jsx)(`div`, { className: `flvSd6Licro-`, children: r }),
      ],
    })
  );
});
function nf(e) {
  switch (e) {
    case `small`:
      return Ad;
    case `medium`:
      return jd;
    case `xlarge`:
      return Qd;
    case `xxlarge`:
      return $d;
    default:
      return Md;
  }
}
function rf(e) {
  let t = `SVGIcon_Button SVGIcon_Throbber `;
  return (
    e.className && (t += e.className),
    (0, M.jsxs)(`svg`, {
      version: `1.1`,
      id: `base`,
      xmlns: `http://www.w3.org/2000/svg`,
      className: t,
      x: `0px`,
      y: `0px`,
      width: `256px`,
      height: `256px`,
      viewBox: `0 0 256 256`,
      children: [
        (0, M.jsxs)(`g`, {
          className: void 0,
          children: [
            (0, M.jsx)(`path`, {
              className: Pd,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895`,
            }),
            (0, M.jsx)(`path`, {
              className: Pd,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M201.432,101.166`,
            }),
            (0, M.jsx)(`path`, {
              className: Pd,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754`,
            }),
          ],
        }),
        (0, M.jsxs)(`g`, {
          className: void 0,
          children: [
            (0, M.jsx)(`path`, {
              className: Fd,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Nd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Zd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Xd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Yd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Jd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: qd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Kd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Gd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Wd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Ud,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Hd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Vd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Bd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: zd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Rd,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
            (0, M.jsx)(`path`, {
              className: Ld,
              strokeLinecap: `butt`,
              fill: `none`,
              stroke: `#ffffff`,
              strokeWidth: `6`,
              strokeMiterlimit: `10`,
              d: `M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z`,
            }),
          ],
        }),
        (0, M.jsx)(`g`, {
          className: Od,
          children: (0, M.jsx)(`path`, {
            fill: `#ffffff`,
            d: `M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579`,
          }),
        }),
        (0, M.jsx)(`g`, {
          className: Id,
          children: (0, M.jsx)(`circle`, {
            fill: `none`,
            stroke: `#ffffff`,
            strokeWidth: `6`,
            strokeMiterlimit: `10`,
            cx: `161.731`,
            cy: `101.274`,
            r: `23.019`,
          }),
        }),
      ],
    })
  );
}
var af = new URL(
    `../../../images/applications/stats/login_mobile_auth.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  of = E((e, t) => {
    t.exports = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8,
    };
  }),
  sf = E((e, t) => {
    var n = of();
    function r(e) {
      ((this.mode = n.MODE_8BIT_BYTE), (this.data = e));
    }
    ((r.prototype = {
      getLength: function (e) {
        return this.data.length;
      },
      write: function (e) {
        for (var t = 0; t < this.data.length; t++)
          e.put(this.data.charCodeAt(t), 8);
      },
    }),
      (t.exports = r));
  }),
  cf = E((e, t) => {
    t.exports = { L: 1, M: 0, Q: 3, H: 2 };
  }),
  lf = E((e, t) => {
    var n = cf();
    function r(e, t) {
      ((this.totalCount = e), (this.dataCount = t));
    }
    ((r.RS_BLOCK_TABLE = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12],
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16],
    ]),
      (r.getRSBlocks = function (e, t) {
        var n = r.getRsBlockTable(e, t);
        if (n == null)
          throw Error(
            `bad rs block @ typeNumber:` + e + `/errorCorrectLevel:` + t,
          );
        for (var i = n.length / 3, a = [], o = 0; o < i; o++)
          for (
            var s = n[o * 3 + 0], c = n[o * 3 + 1], l = n[o * 3 + 2], u = 0;
            u < s;
            u++
          )
            a.push(new r(c, l));
        return a;
      }),
      (r.getRsBlockTable = function (e, t) {
        switch (t) {
          case n.L:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
          case n.M:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
          case n.Q:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
          case n.H:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
      (t.exports = r));
  }),
  uf = E((e, t) => {
    function n() {
      ((this.buffer = []), (this.length = 0));
    }
    ((n.prototype = {
      get: function (e) {
        var t = Math.floor(e / 8);
        return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
      },
      put: function (e, t) {
        for (var n = 0; n < t; n++) this.putBit(((e >>> (t - n - 1)) & 1) == 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (e) {
        var t = Math.floor(this.length / 8);
        (this.buffer.length <= t && this.buffer.push(0),
          e && (this.buffer[t] |= 128 >>> (this.length % 8)),
          this.length++);
      },
    }),
      (t.exports = n));
  }),
  df = E((e, t) => {
    for (
      var n = {
          glog: function (e) {
            if (e < 1) throw Error(`glog(` + e + `)`);
            return n.LOG_TABLE[e];
          },
          gexp: function (e) {
            for (; e < 0;) e += 255;
            for (; e >= 256;) e -= 255;
            return n.EXP_TABLE[e];
          },
          EXP_TABLE: Array(256),
          LOG_TABLE: Array(256),
        },
        r = 0;
      r < 8;
      r++
    )
      n.EXP_TABLE[r] = 1 << r;
    for (var r = 8; r < 256; r++)
      n.EXP_TABLE[r] =
        n.EXP_TABLE[r - 4] ^
        n.EXP_TABLE[r - 5] ^
        n.EXP_TABLE[r - 6] ^
        n.EXP_TABLE[r - 8];
    for (var r = 0; r < 255; r++) n.LOG_TABLE[n.EXP_TABLE[r]] = r;
    t.exports = n;
  }),
  ff = E((e, t) => {
    var n = df();
    function r(e, t) {
      if (e.length == null) throw Error(e.length + `/` + t);
      for (var n = 0; n < e.length && e[n] == 0;) n++;
      this.num = Array(e.length - n + t);
      for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n];
    }
    ((r.prototype = {
      get: function (e) {
        return this.num[e];
      },
      getLength: function () {
        return this.num.length;
      },
      multiply: function (e) {
        for (
          var t = Array(this.getLength() + e.getLength() - 1), i = 0;
          i < this.getLength();
          i++
        )
          for (var a = 0; a < e.getLength(); a++)
            t[i + a] ^= n.gexp(n.glog(this.get(i)) + n.glog(e.get(a)));
        return new r(t, 0);
      },
      mod: function (e) {
        if (this.getLength() - e.getLength() < 0) return this;
        for (
          var t = n.glog(this.get(0)) - n.glog(e.get(0)),
            i = Array(this.getLength()),
            a = 0;
          a < this.getLength();
          a++
        )
          i[a] = this.get(a);
        for (var a = 0; a < e.getLength(); a++)
          i[a] ^= n.gexp(n.glog(e.get(a)) + t);
        return new r(i, 0).mod(e);
      },
    }),
      (t.exports = r));
  }),
  pf = E((e, t) => {
    var n = of(),
      r = ff(),
      i = df(),
      a = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      },
      o = {
        PATTERN_POSITION_TABLE: [
          [],
          [6, 18],
          [6, 22],
          [6, 26],
          [6, 30],
          [6, 34],
          [6, 22, 38],
          [6, 24, 42],
          [6, 26, 46],
          [6, 28, 50],
          [6, 30, 54],
          [6, 32, 58],
          [6, 34, 62],
          [6, 26, 46, 66],
          [6, 26, 48, 70],
          [6, 26, 50, 74],
          [6, 30, 54, 78],
          [6, 30, 56, 82],
          [6, 30, 58, 86],
          [6, 34, 62, 90],
          [6, 28, 50, 72, 94],
          [6, 26, 50, 74, 98],
          [6, 30, 54, 78, 102],
          [6, 28, 54, 80, 106],
          [6, 32, 58, 84, 110],
          [6, 30, 58, 86, 114],
          [6, 34, 62, 90, 118],
          [6, 26, 50, 74, 98, 122],
          [6, 30, 54, 78, 102, 126],
          [6, 26, 52, 78, 104, 130],
          [6, 30, 56, 82, 108, 134],
          [6, 34, 60, 86, 112, 138],
          [6, 30, 58, 86, 114, 142],
          [6, 34, 62, 90, 118, 146],
          [6, 30, 54, 78, 102, 126, 150],
          [6, 24, 50, 76, 102, 128, 154],
          [6, 28, 54, 80, 106, 132, 158],
          [6, 32, 58, 84, 110, 136, 162],
          [6, 26, 54, 82, 110, 138, 166],
          [6, 30, 58, 86, 114, 142, 170],
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (e) {
          for (var t = e << 10; o.getBCHDigit(t) - o.getBCHDigit(o.G15) >= 0;)
            t ^= o.G15 << (o.getBCHDigit(t) - o.getBCHDigit(o.G15));
          return ((e << 10) | t) ^ o.G15_MASK;
        },
        getBCHTypeNumber: function (e) {
          for (var t = e << 12; o.getBCHDigit(t) - o.getBCHDigit(o.G18) >= 0;)
            t ^= o.G18 << (o.getBCHDigit(t) - o.getBCHDigit(o.G18));
          return (e << 12) | t;
        },
        getBCHDigit: function (e) {
          for (var t = 0; e != 0;) (t++, (e >>>= 1));
          return t;
        },
        getPatternPosition: function (e) {
          return o.PATTERN_POSITION_TABLE[e - 1];
        },
        getMask: function (e, t, n) {
          switch (e) {
            case a.PATTERN000:
              return (t + n) % 2 == 0;
            case a.PATTERN001:
              return t % 2 == 0;
            case a.PATTERN010:
              return n % 3 == 0;
            case a.PATTERN011:
              return (t + n) % 3 == 0;
            case a.PATTERN100:
              return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
            case a.PATTERN101:
              return ((t * n) % 2) + ((t * n) % 3) == 0;
            case a.PATTERN110:
              return (((t * n) % 2) + ((t * n) % 3)) % 2 == 0;
            case a.PATTERN111:
              return (((t * n) % 3) + ((t + n) % 2)) % 2 == 0;
            default:
              throw Error(`bad maskPattern:` + e);
          }
        },
        getErrorCorrectPolynomial: function (e) {
          for (var t = new r([1], 0), n = 0; n < e; n++)
            t = t.multiply(new r([1, i.gexp(n)], 0));
          return t;
        },
        getLengthInBits: function (e, t) {
          if (1 <= t && t < 10)
            switch (e) {
              case n.MODE_NUMBER:
                return 10;
              case n.MODE_ALPHA_NUM:
                return 9;
              case n.MODE_8BIT_BYTE:
                return 8;
              case n.MODE_KANJI:
                return 8;
              default:
                throw Error(`mode:` + e);
            }
          else if (t < 27)
            switch (e) {
              case n.MODE_NUMBER:
                return 12;
              case n.MODE_ALPHA_NUM:
                return 11;
              case n.MODE_8BIT_BYTE:
                return 16;
              case n.MODE_KANJI:
                return 10;
              default:
                throw Error(`mode:` + e);
            }
          else if (t < 41)
            switch (e) {
              case n.MODE_NUMBER:
                return 14;
              case n.MODE_ALPHA_NUM:
                return 13;
              case n.MODE_8BIT_BYTE:
                return 16;
              case n.MODE_KANJI:
                return 12;
              default:
                throw Error(`mode:` + e);
            }
          else throw Error(`type:` + t);
        },
        getLostPoint: function (e) {
          for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++)
            for (var i = 0; i < t; i++) {
              for (var a = 0, o = e.isDark(r, i), s = -1; s <= 1; s++)
                if (!(r + s < 0 || t <= r + s))
                  for (var c = -1; c <= 1; c++)
                    i + c < 0 ||
                      t <= i + c ||
                      ((s != 0 || c != 0) &&
                        o == e.isDark(r + s, i + c) &&
                        a++);
              a > 5 && (n += 3 + a - 5);
            }
          for (var r = 0; r < t - 1; r++)
            for (var i = 0; i < t - 1; i++) {
              var l = 0;
              (e.isDark(r, i) && l++,
                e.isDark(r + 1, i) && l++,
                e.isDark(r, i + 1) && l++,
                e.isDark(r + 1, i + 1) && l++,
                (l == 0 || l == 4) && (n += 3));
            }
          for (var r = 0; r < t; r++)
            for (var i = 0; i < t - 6; i++)
              e.isDark(r, i) &&
                !e.isDark(r, i + 1) &&
                e.isDark(r, i + 2) &&
                e.isDark(r, i + 3) &&
                e.isDark(r, i + 4) &&
                !e.isDark(r, i + 5) &&
                e.isDark(r, i + 6) &&
                (n += 40);
          for (var i = 0; i < t; i++)
            for (var r = 0; r < t - 6; r++)
              e.isDark(r, i) &&
                !e.isDark(r + 1, i) &&
                e.isDark(r + 2, i) &&
                e.isDark(r + 3, i) &&
                e.isDark(r + 4, i) &&
                !e.isDark(r + 5, i) &&
                e.isDark(r + 6, i) &&
                (n += 40);
          for (var u = 0, i = 0; i < t; i++)
            for (var r = 0; r < t; r++) e.isDark(r, i) && u++;
          var d = Math.abs((100 * u) / t / t - 50) / 5;
          return ((n += d * 10), n);
        },
      };
    t.exports = o;
  }),
  mf = E((e, t) => {
    var n = sf(),
      r = lf(),
      i = uf(),
      a = pf(),
      o = ff();
    function s(e, t) {
      ((this.typeNumber = e),
        (this.errorCorrectLevel = t),
        (this.modules = null),
        (this.moduleCount = 0),
        (this.dataCache = null),
        (this.dataList = []));
    }
    var c = s.prototype;
    ((c.addData = function (e) {
      var t = new n(e);
      (this.dataList.push(t), (this.dataCache = null));
    }),
      (c.isDark = function (e, t) {
        if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
          throw Error(e + `,` + t);
        return this.modules[e][t];
      }),
      (c.getModuleCount = function () {
        return this.moduleCount;
      }),
      (c.make = function () {
        if (this.typeNumber < 1) {
          var e = 1;
          for (e = 1; e < 40; e++) {
            for (
              var t = r.getRSBlocks(e, this.errorCorrectLevel),
                n = new i(),
                o = 0,
                s = 0;
              s < t.length;
              s++
            )
              o += t[s].dataCount;
            for (var s = 0; s < this.dataList.length; s++) {
              var c = this.dataList[s];
              (n.put(c.mode, 4),
                n.put(c.getLength(), a.getLengthInBits(c.mode, e)),
                c.write(n));
            }
            if (n.getLengthInBits() <= o * 8) break;
          }
          this.typeNumber = e;
        }
        this.makeImpl(!1, this.getBestMaskPattern());
      }),
      (c.makeImpl = function (e, t) {
        ((this.moduleCount = this.typeNumber * 4 + 17),
          (this.modules = Array(this.moduleCount)));
        for (var n = 0; n < this.moduleCount; n++) {
          this.modules[n] = Array(this.moduleCount);
          for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null;
        }
        (this.setupPositionProbePattern(0, 0),
          this.setupPositionProbePattern(this.moduleCount - 7, 0),
          this.setupPositionProbePattern(0, this.moduleCount - 7),
          this.setupPositionAdjustPattern(),
          this.setupTimingPattern(),
          this.setupTypeInfo(e, t),
          this.typeNumber >= 7 && this.setupTypeNumber(e),
          (this.dataCache ??= s.createData(
            this.typeNumber,
            this.errorCorrectLevel,
            this.dataList,
          )),
          this.mapData(this.dataCache, t));
      }),
      (c.setupPositionProbePattern = function (e, t) {
        for (var n = -1; n <= 7; n++)
          if (!(e + n <= -1 || this.moduleCount <= e + n))
            for (var r = -1; r <= 7; r++)
              t + r <= -1 ||
                this.moduleCount <= t + r ||
                ((0 <= n && n <= 6 && (r == 0 || r == 6)) ||
                (0 <= r && r <= 6 && (n == 0 || n == 6)) ||
                (2 <= n && n <= 4 && 2 <= r && r <= 4)
                  ? (this.modules[e + n][t + r] = !0)
                  : (this.modules[e + n][t + r] = !1));
      }),
      (c.getBestMaskPattern = function () {
        for (var e = 0, t = 0, n = 0; n < 8; n++) {
          this.makeImpl(!0, n);
          var r = a.getLostPoint(this);
          (n == 0 || e > r) && ((e = r), (t = n));
        }
        return t;
      }),
      (c.createMovieClip = function (e, t, n) {
        var r = e.createEmptyMovieClip(t, n),
          i = 1;
        this.make();
        for (var a = 0; a < this.modules.length; a++)
          for (var o = a * i, s = 0; s < this.modules[a].length; s++) {
            var c = s * i;
            this.modules[a][s] &&
              (r.beginFill(0, 100),
              r.moveTo(c, o),
              r.lineTo(c + i, o),
              r.lineTo(c + i, o + i),
              r.lineTo(c, o + i),
              r.endFill());
          }
        return r;
      }),
      (c.setupTimingPattern = function () {
        for (var e = 8; e < this.moduleCount - 8; e++)
          this.modules[e][6] ?? (this.modules[e][6] = e % 2 == 0);
        for (var t = 8; t < this.moduleCount - 8; t++)
          this.modules[6][t] ?? (this.modules[6][t] = t % 2 == 0);
      }),
      (c.setupPositionAdjustPattern = function () {
        for (
          var e = a.getPatternPosition(this.typeNumber), t = 0;
          t < e.length;
          t++
        )
          for (var n = 0; n < e.length; n++) {
            var r = e[t],
              i = e[n];
            if (this.modules[r][i] == null)
              for (var o = -2; o <= 2; o++)
                for (var s = -2; s <= 2; s++)
                  o == -2 || o == 2 || s == -2 || s == 2 || (o == 0 && s == 0)
                    ? (this.modules[r + o][i + s] = !0)
                    : (this.modules[r + o][i + s] = !1);
          }
      }),
      (c.setupTypeNumber = function (e) {
        for (var t = a.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
          var r = !e && ((t >> n) & 1) == 1;
          this.modules[Math.floor(n / 3)][(n % 3) + this.moduleCount - 8 - 3] =
            r;
        }
        for (var n = 0; n < 18; n++) {
          var r = !e && ((t >> n) & 1) == 1;
          this.modules[(n % 3) + this.moduleCount - 8 - 3][Math.floor(n / 3)] =
            r;
        }
      }),
      (c.setupTypeInfo = function (e, t) {
        for (
          var n = (this.errorCorrectLevel << 3) | t,
            r = a.getBCHTypeInfo(n),
            i = 0;
          i < 15;
          i++
        ) {
          var o = !e && ((r >> i) & 1) == 1;
          i < 6
            ? (this.modules[i][8] = o)
            : i < 8
              ? (this.modules[i + 1][8] = o)
              : (this.modules[this.moduleCount - 15 + i][8] = o);
        }
        for (var i = 0; i < 15; i++) {
          var o = !e && ((r >> i) & 1) == 1;
          i < 8
            ? (this.modules[8][this.moduleCount - i - 1] = o)
            : i < 9
              ? (this.modules[8][15 - i - 1 + 1] = o)
              : (this.modules[8][15 - i - 1] = o);
        }
        this.modules[this.moduleCount - 8][8] = !e;
      }),
      (c.mapData = function (e, t) {
        for (
          var n = -1,
            r = this.moduleCount - 1,
            i = 7,
            o = 0,
            s = this.moduleCount - 1;
          s > 0;
          s -= 2
        )
          for (s == 6 && s--; ;) {
            for (var c = 0; c < 2; c++)
              if (this.modules[r][s - c] == null) {
                var l = !1;
                (o < e.length && (l = ((e[o] >>> i) & 1) == 1),
                  a.getMask(t, r, s - c) && (l = !l),
                  (this.modules[r][s - c] = l),
                  i--,
                  i == -1 && (o++, (i = 7)));
              }
            if (((r += n), r < 0 || this.moduleCount <= r)) {
              ((r -= n), (n = -n));
              break;
            }
          }
      }),
      (s.PAD0 = 236),
      (s.PAD1 = 17),
      (s.createData = function (e, t, n) {
        for (
          var o = r.getRSBlocks(e, t), c = new i(), l = 0;
          l < n.length;
          l++
        ) {
          var u = n[l];
          (c.put(u.mode, 4),
            c.put(u.getLength(), a.getLengthInBits(u.mode, e)),
            u.write(c));
        }
        for (var d = 0, l = 0; l < o.length; l++) d += o[l].dataCount;
        if (c.getLengthInBits() > d * 8)
          throw Error(
            `code length overflow. (` + c.getLengthInBits() + `>` + d * 8 + `)`,
          );
        for (
          c.getLengthInBits() + 4 <= d * 8 && c.put(0, 4);
          c.getLengthInBits() % 8 != 0;
        )
          c.putBit(!1);
        for (
          ;
          !(
            c.getLengthInBits() >= d * 8 ||
            (c.put(s.PAD0, 8), c.getLengthInBits() >= d * 8)
          );
        )
          c.put(s.PAD1, 8);
        return s.createBytes(c, o);
      }),
      (s.createBytes = function (e, t) {
        for (
          var n = 0,
            r = 0,
            i = 0,
            s = Array(t.length),
            c = Array(t.length),
            l = 0;
          l < t.length;
          l++
        ) {
          var u = t[l].dataCount,
            d = t[l].totalCount - u;
          ((r = Math.max(r, u)), (i = Math.max(i, d)), (s[l] = Array(u)));
          for (var f = 0; f < s[l].length; f++) s[l][f] = 255 & e.buffer[f + n];
          n += u;
          var p = a.getErrorCorrectPolynomial(d),
            m = new o(s[l], p.getLength() - 1).mod(p);
          c[l] = Array(p.getLength() - 1);
          for (var f = 0; f < c[l].length; f++) {
            var h = f + m.getLength() - c[l].length;
            c[l][f] = h >= 0 ? m.get(h) : 0;
          }
        }
        for (var g = 0, f = 0; f < t.length; f++) g += t[f].totalCount;
        for (var _ = Array(g), v = 0, f = 0; f < r; f++)
          for (var l = 0; l < t.length; l++)
            f < s[l].length && (_[v++] = s[l][f]);
        for (var f = 0; f < i; f++)
          for (var l = 0; l < t.length; l++)
            f < c[l].length && (_[v++] = c[l][f]);
        return _;
      }),
      (t.exports = s));
  }),
  hf = E((e, t) => {
    var n = mf(),
      r = cf(),
      i = function (e, t) {
        t ||= {};
        var i = new n(t.typeNumber || -1, t.errorCorrectLevel || r.H);
        return (i.addData(e), i.make(), i);
      };
    ((i.ErrorCorrectLevel = r), (t.exports = i));
  }),
  gf = `RuVnOcF9yRI-`,
  _f = `QhysrBJX1dU-`,
  vf = e(hf(), 1),
  yf = (function (e) {
    return (
      (e[(e.L = 1)] = `L`),
      (e[(e.M = 0)] = `M`),
      (e[(e.Q = 3)] = `Q`),
      (e[(e.H = 2)] = `H`),
      e
    );
  })({});
function bf(e, t, n) {
  let r = e.length,
    i = e[0].length,
    a = (r + 2) * i,
    o = new Uint8Array(40 + a),
    s = 0;
  ((o[s++] = 71),
    (o[s++] = 73),
    (o[s++] = 70),
    (o[s++] = 56),
    (o[s++] = 57),
    (o[s++] = 97),
    (o[s++] = r),
    (o[s++] = 0),
    (o[s++] = i),
    (o[s++] = 0),
    u(
      t != `transparent` || n != `transparent`,
      `Trying to use transparent for both colors in QR`,
    ),
    (o[s++] = 161),
    (o[s++] = 0),
    (o[s++] = 0),
    t == `transparent`
      ? ((o[s++] = 0), (o[s++] = 0), (o[s++] = 0))
      : ((o[s++] = t[0]), (o[s++] = t[1]), (o[s++] = t[2])),
    n == `transparent`
      ? ((o[s++] = 0), (o[s++] = 0), (o[s++] = 0))
      : ((o[s++] = n[0]), (o[s++] = n[1]), (o[s++] = n[2])),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (t == `transparent` || n == `transparent`) &&
      ((o[s++] = 33),
      (o[s++] = 249),
      (o[s++] = 4),
      (o[s++] = 1),
      (o[s++] = 0),
      (o[s++] = 0),
      (o[s++] = t == `transparent` ? 0 : 1),
      (o[s++] = 0)),
    (o[s++] = 44),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = r),
    (o[s++] = 0),
    (o[s++] = i),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 7));
  for (let t = 0; t < e.length; t++) {
    ((o[s++] = r + 1), (o[s++] = 128));
    for (let n = 0; n < e.length; n++) o[s++] = +!e[t][n];
  }
  return ((o[s++] = 1), (o[s++] = 129), (o[s++] = 0), (o[s++] = 59), o);
}
function xf(
  e,
  {
    activeBitColor: t = [33, 35, 40],
    inactiveBitColor: n = [255, 255, 255],
    borderWidth: r = 3,
  } = {},
  i = {},
) {
  let a = (0, vf.default)(e, i).modules;
  if (!a) return null;
  let o = [];
  for (let e = 0; e < r; e++) o.push(Array(a.length + r * 2).fill(!1));
  for (let e = 0; e < a.length; e++)
    o.push([
      ...Array.from({ length: r }, () => !1),
      ...a[e],
      ...Array.from({ length: r }, () => !1),
    ]);
  for (let e = 0; e < r; e++) o.push(Array(a.length + r * 2).fill(!1));
  return bf(o, t, n);
}
function Sf(e) {
  let {
      quality: t = 0,
      children: n,
      className: r,
      activeBitColor: i = [33, 35, 40],
      inactiveBitColor: a = [255, 255, 255],
      borderWidth: o = 3,
      typeNumber: s = 6,
    } = e,
    c = Cf(n, {
      typeNumber: s,
      errorCorrectLevel: t,
      activeBitColor: i,
      inactiveBitColor: a,
      borderWidth: o,
    });
  if (!c) return null;
  let l = `rgb(${a[0]}, ${a[1]}, ${a[2]})`;
  return (0, M.jsx)(`div`, {
    className: (0, P.default)(gf, r),
    style: { "--qr-bright-color": l },
    children: (0, M.jsx)(`img`, { className: _f, src: c, alt: `` }),
  });
}
function Cf(e, t) {
  let {
    typeNumber: n,
    errorCorrectLevel: r,
    activeBitColor: i,
    inactiveBitColor: a,
    borderWidth: o,
  } = t;
  return (0, j.useMemo)(() => {
    let t = xf(
      e,
      { activeBitColor: i, inactiveBitColor: a, borderWidth: o },
      { typeNumber: n, errorCorrectLevel: r },
    );
    return t ? `data:image/gif;base64,${(0, xl.fromByteArray)(t)}` : null;
  }, [e, n, r, i, a, o]);
}
var wf = `WrkY9vjgO-o-`,
  Tf = `S5cukRF3668-`,
  Ef = `_-8GxbX7BdEU-`;
function Df(e) {
  let {
      transport: t,
      onComplete: n,
      onStatusChange: r,
      platform: i,
      styling: a = `default`,
      activeBitValue: o = 255,
      preloadedSession: s,
    } = e,
    {
      eStatus: c,
      strChallengeURL: l,
      strClientID: u,
      bHadRemoteInteraction: d,
      reset: f,
      setTokenToRevoke: p,
    } = tu({
      transport: t,
      onComplete: n,
      onDeviceDetails: D.IN_STEAMUI ? nu : ru,
      preloaded: s,
    });
  (0, j.useEffect)(() => r && r(c), [r, c]);
  let m = c === 2 && l ? l : D.STORE_BASE_URL,
    h = c === 0 || c === 1 || d,
    g = c === 4,
    _ = c === 3,
    v = _
      ? (0, M.jsx)(Mf, {})
      : g
        ? (0, M.jsx)(Af, { reset: f })
        : h
          ? (0, M.jsx)(kf, { size: `small` })
          : null,
    y = h || g || _;
  (0, j.useEffect)(() => {
    e.refreshInfo?.login_token_id && p(e.refreshInfo.login_token_id);
  }, [e.refreshInfo, p]);
  let b = D.EUNIVERSE !== 1,
    x = `rgb(${o}, ${o}, ${o})`;
  return (0, M.jsx)(`div`, {
    className: Tf,
    children: (0, M.jsxs)(`div`, {
      style: { position: `relative` },
      children: [
        (0, M.jsx)(Sf, {
          borderWidth: 0,
          activeBitColor: [21, 23, 28],
          inactiveBitColor: b ? [o, 0, o] : [o, o, o],
          quality: Of(m),
          className: (0, P.default)(
            wf,
            a == `deck` && `LfwdeqflbQQ-`,
            a == `vr` && `DlrZAVV1kSM-`,
            y && `AME4jRbjhDs-`,
            b && `FFV7o6c8MVE-`,
          ),
          children: m,
        }),
        y &&
          (0, M.jsx)(`div`, {
            className: `rAodxgQ4uTs-`,
            children: (0, M.jsx)(`div`, {
              className: `TxzArhnTYjU-`,
              style: { "--qr-bright-color": x },
              children: v,
            }),
          }),
      ],
    }),
  });
}
function Of(e) {
  return e.length <= 90 ? yf.Q : void 0;
}
function kf(e) {
  let { size: t } = e;
  return (0, M.jsx)(`div`, {
    className: (0, P.default)(
      Ef,
      t == `small` && `UmXCdAcOnc0-`,
      (t == `medium` || !t) && `dkcbyneVVOc-`,
      t == `large` && `y6M90bbs5Os-`,
    ),
  });
}
function Af(e) {
  return (0, M.jsx)(za, {
    color: `dull`,
    variant: `ghost`,
    onClick: e.reset,
    children: (0, M.jsx)(jf, {}),
  });
}
function jf(e) {
  return (0, M.jsxs)(`svg`, {
    version: `1.1`,
    id: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: { width: `40px`, height: `40px`, cursor: `pointer` },
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, M.jsx)(`path`, {
        fill: `none`,
        stroke: `#fff`,
        strokeWidth: `30`,
        strokeLinecap: `round`,
        strokeMiterlimit: `10`,
        d: `M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895`,
      }),
      (0, M.jsx)(`polygon`, {
        points: `147.639,108.361 245.755,10.166 245.834,108.361`,
        fill: `#fff`,
      }),
    ],
  });
}
function Mf() {
  return (0, M.jsx)(`svg`, {
    version: `1.1`,
    id: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: { width: `45px`, height: `45px` },
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, M.jsx)(`polyline`, {
      fill: `none`,
      stroke: `#fff`,
      strokeWidth: `24`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      strokeMiterlimit: `10`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var Nf = (0, j.createContext)(!1),
  Pf = () => (0, j.useContext)(Nf);
function Ff() {
  return (0, M.jsx)(`div`, {
    className: su,
    children: (0, M.jsx)(pp, {
      reset: () => window.location.reload(),
      failure: J.Generic,
    }),
  });
}
function If(e) {
  Fp(e.redirectUrl);
  let t = (t) => {
    let { strRefreshToken: n } = t;
    Tl(n).then(
      (t) => e.onComplete(t),
      () => e.onComplete(Cl.k_PrimaryDomainFail),
    );
  };
  return (0, M.jsx)(Lf, {
    ...e,
    creationRedirectUrl: e.redirectUrl,
    onSuccess: t,
    embedded: e.theme === `modal`,
  });
}
function Lf(e) {
  let { embedded: t, children: n, ...r } = e;
  return (0, M.jsx)(he, {
    children: (0, M.jsx)(Nf.Provider, {
      value: t ?? !1,
      children: (0, M.jsxs)(`div`, {
        className: su,
        children: [(0, M.jsx)(Hf, { ...r }), n],
      }),
    }),
  });
}
function Rf(e) {
  if (yd()) return null;
  let { variant: t } = e;
  return typeof t == `function`
    ? (0, M.jsx)(Q, { onClick: t, children: O.Localize(`#Login_Help_SignIn`) })
    : (0, M.jsx)(Q, {
        href: `${D.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
        children: O.Localize(`#Login_Help_SignIn`),
      });
}
function zf(e) {
  let { variant: t, redirectUrl: n } = e;
  if (typeof t == `function`)
    return (0, M.jsx)(Q, {
      inline: !0,
      onClick: t,
      children: O.Localize(`#Login_CreateAccount`),
    });
  {
    let e = n ? `?redir=${encodeURIComponent(n)}` : ``;
    switch (t ?? `normal`) {
      default:
      case `normal`:
        return (0, M.jsx)(Q, {
          inline: !0,
          href: `${D.STORE_BASE_URL}join/${e}`,
          children: O.Localize(`#Login_CreateAccount`),
        });
      case `partner`:
        return (0, M.jsx)(Q, {
          inline: !0,
          href: `${D.PARTNER_BASE_URL}${e}`,
          children: O.Localize(`#Login_CreateSteamworksAccount`),
        });
      case `none`:
        return null;
    }
  }
}
function Bf(e) {
  let { launcherType: t, variant: n, redirectUrl: r } = e;
  if (t === 8 || n == `none`) return null;
  let i = t !== void 0,
    a;
  switch (n ?? `normal`) {
    default:
    case `normal`:
      a = `#Login_NoSteamAccount`;
      break;
    case `partner`:
      a = `#Login_NoSteamworksAccount`;
  }
  return (0, M.jsxs)(`div`, {
    className: (0, P.default)(dd, i && `Kv7QdVcb2UI-`),
    children: [
      (0, M.jsx)(`span`, { className: fd, children: O.Localize(a) }),
      (0, M.jsx)(zf, { variant: n, redirectUrl: r }),
    ],
  });
}
function Vf() {
  let e =
    window?.location &&
    new URLSearchParams(window.location.search).getAll(`need_password`).pop();
  return e !== void 0 && e !== `false` && e !== `0`;
}
function Hf(e) {
  let {
      transport: t,
      onSuccess: n,
      platform: r,
      autoFocus: i,
      refreshInfo: o,
      renderSuccess: s = () => (0, M.jsx)(Pp, {}),
      lastResult: c,
      joinLinkVariant: l,
      defaultAccountName: d,
      secureComputer: f = !0,
      isProbablySharedPC: p = !1,
      onShowAgreement: m,
      creationRedirectUrl: h,
      preloadedQRSession: g,
    } = e,
    _ = D.IN_STEAMUI ? nu : ru,
    v = D.IN_STEAMUI ? (e) => SteamClient.Auth.GetSteamGuardData(e) : null,
    y = Vf(),
    b = au({
      transport: t,
      platform: r,
      onSuccess: n,
      refreshInfo: o,
      onDeviceDetails: _,
      onGetMachineAuth: v,
      defaultAccountName: d,
      secureComputer: f,
      isProbablySharedPC: p,
      onShowAgreement: m,
    }),
    x = Pf(),
    S = (0, j.useId)();
  if (c != null && c != 1)
    return (0, M.jsx)(`div`, {
      className: su,
      children: (0, M.jsx)(pp, {
        reset: () => window.location.reload(),
        failure: J.Generic,
        errorReference: c.toString(),
        extendedErrorMessage: b.password.strExtendedErrorMessage,
      }),
    });
  let C = D.EREALM !== a.k_ESteamRealmChina;
  if (!b.bInPasswordFlow) {
    let n = (0, M.jsxs)(`div`, {
      className: (0, P.default)(cu, x && `rvRWTXNBcK4-`),
      children: [
        (0, M.jsx)(Gf, {
          strAccountName: b.strAccountName,
          onAccountNameChange: b.onAccountNameChange,
          strPassword: b.strPassword,
          onPasswordChange: b.onPasswordChange,
          bRememberMe: b.bRememberMe,
          onRememberMeChange: b.onRememberMeChange,
          onSubmit: b.onPasswordSubmit,
          status: b.password.eStatus,
          autoFocus: i,
          secureComputer: f,
          refreshInfo: e.refreshInfo,
        }),
        C &&
          (0, M.jsx)(qf, {
            transport: t,
            onQRStatusChange: b.onQRStatusChange,
            onComplete: b.onComplete,
            platform: r,
            refreshInfo: o,
            preloadedQRSession: g,
          }),
      ],
    });
    if (x) {
      let t = D.IN_STEAMUI,
        r = be()?.LAUNCHER_TYPE;
      return (0, M.jsxs)($, {
        className: (0, P.default)(cd, t && `Kv7QdVcb2UI-`),
        children: [
          !t && !1,
          !e.refreshInfo &&
            (0, M.jsx)(Ap, {
              realm: D.EREALM,
              launcherType: r,
              className: `_19NDBszdpt8-`,
              onBack: e.onBack,
            }),
          (0, M.jsx)(Uf, { refreshInfo: o }),
          n,
          (0, M.jsxs)(`div`, {
            className: (0, P.default)(ud, t && `Kv7QdVcb2UI-`),
            children: [
              (0, M.jsx)(Rf, { variant: e.helpLinkVariant }),
              (0, M.jsx)(Bf, { launcherType: r, variant: l, redirectUrl: h }),
            ],
          }),
        ],
      });
    }
    let a = (0, M.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `8px`,
        margin: `8px 16px`,
      },
      children: [
        !1,
        (0, M.jsx)(`h2`, {
          className: nd,
          id: S,
          children: e.refreshInfo
            ? O.Localize(`#Login_RefreshSignIn`)
            : O.Localize(`#Login_SignInTitle`),
        }),
        (0, M.jsx)(Uf, { refreshInfo: e.refreshInfo }),
      ],
    });
    return (0, M.jsxs)(kp, {
      title: a,
      titleId: S,
      children: [y && (0, M.jsx)(Wf, {}), n],
    });
  }
  let w = b.password.eStatus;
  switch (w) {
    case 13:
      return e.renderLoading
        ? (0, M.jsx)(M.Fragment, { children: e.renderLoading() })
        : (0, M.jsx)(up, {});
    case 5:
    case 11:
    case 3:
    case 10:
      return (
        u(
          !!b.password.strAccountName,
          `Missing account name in login session for status`,
          w,
        ),
        (0, M.jsx)(hp, {
          type: w === 5 || w === 11 ? `mobile` : `email`,
          onSubmitCode: b.password.addCode,
          status: w,
          associatedLabel: b.password.strConfirmationAssociatedMessage,
          accountName: b.password.strAccountName,
          onBack: b.password.goBack,
          onCodeHelp: e.onCodeHelp,
        })
      );
    case 6:
    case 4:
      return (
        u(
          !!b.password.strAccountName,
          `Missing account name in login session for status`,
          w,
        ),
        (0, M.jsx)(wp, {
          type: w === 6 ? `mobile` : `email`,
          accountName: b.password.strAccountName,
          onUseCodeOverride: b.password.useCodeOverride,
          onCodeHelp: e.onCodeHelp,
        })
      );
    case 16:
      return (0, M.jsx)(mp, { reset: b.password.reset });
    case 15:
      return (0, M.jsx)(pp, {
        reset: b.password.reset,
        failure: b.password.eFailureState,
        onRequestOffline: b.onTryOffline,
        errorReference: b.password.strErrorReference,
        extendedErrorMessage: b.password.strExtendedErrorMessage,
      });
    case 14:
      return (0, M.jsx)(kp, { compact: !0, children: s() });
    default:
      return (
        K(`Unknown Phase: ${w}`),
        (0, M.jsx)(pp, {
          reset: b.password.reset,
          failure: J.Generic,
          onRequestOffline: b.onTryOffline,
          errorReference: b.password.strErrorReference,
          extendedErrorMessage: b.password.strExtendedErrorMessage,
        })
      );
  }
}
function Uf(e) {
  if (!e.refreshInfo) return null;
  let t;
  switch (e.refreshInfo?.reason ?? 2) {
    case 2:
    case 7:
    default:
      t = `#Login_RefreshReason_Generic`;
      break;
    case 6:
      t = `#Login_RefreshReason_LoggedInElsewhere`;
      break;
    case 34:
      t = `#Login_RefreshReason_LogonSessionReplaced`;
      break;
    case 5:
      t = `#Login_RefreshReason_InvalidPassword`;
      break;
    case 26:
      t = `#Login_RefreshReason_Revoked`;
      break;
    case 27:
      t = `#Login_RefreshReason_Expired`;
      break;
    case 49:
      t = `#Login_RefreshReason_PasswordRequiredToKickSession`;
      break;
    case 43:
      t = `#Login_RefreshReason_AccountDisabled`;
      break;
    case 69:
      t = `#Login_RefreshReason_ParentalControlRestricted`;
      break;
    case 84:
      t = `#Login_RefreshReason_RateLimitExceeded`;
  }
  return (0, M.jsxs)(`div`, {
    className: ld,
    children: [
      (0, M.jsx)(`div`, {
        className: $u,
        children: O.Localize(`#Login_RefreshSignIn`),
      }),
      (0, M.jsx)(`div`, { className: ed, children: O.Localize(t) }),
    ],
  });
}
function Wf() {
  return (0, M.jsx)(`div`, {
    className: uu,
    children: O.Localize(`#Login_ConfirmCredentials`),
  });
}
function Gf(e) {
  let {
      onSubmit: t,
      status: n,
      autoFocus: r,
      refreshInfo: i,
      strAccountName: a,
      onAccountNameChange: o,
      strPassword: s,
      onPasswordChange: c,
      bRememberMe: l,
      onRememberMeChange: u,
      secureComputer: d = !0,
    } = e,
    [f, p] = (0, j.useState)(!1),
    m = Pf(),
    h = Lp(),
    g = () => {
      t().then(() => {
        h() && p(!1);
      });
    },
    _ = n === 1 || n === 13,
    v = n === 2 && !f,
    y = v
      ? (0, M.jsx)(lp, { children: O.Localize(`#Login_CheckCredentials`) })
      : (0, M.jsx)(lp, { children: `\xA0` }),
    b = r && !a,
    x = r && !!a,
    S = !!e.refreshInfo,
    C = (0, j.useId)(),
    w = (0, j.useId)();
  return (0, M.jsxs)(Tp, {
    onSubmit: g,
    className: Su,
    children: [
      (0, M.jsx)(Qf, {
        tone: v ? `danger` : void 0,
        label: (0, M.jsx)($f, {
          highlight: !0,
          inputId: C,
          children: O.Localize(`#Login_SignIn_WithAccountName`),
        }),
        value: a,
        onChange: (e) => {
          (p(!0), o(e));
        },
        autoFocus: b,
        disabled: S,
        id: C,
      }),
      (0, M.jsx)(Qf, {
        tone: v ? `danger` : void 0,
        label: (0, M.jsx)($f, {
          inputId: w,
          children: O.Localize(`#Login_Password`),
        }),
        value: s,
        onChange: (e) => {
          (p(!0), c(e));
        },
        type: `password`,
        autoFocus: x,
        id: w,
      }),
      d
        ? (0, M.jsx)(np, {
            label: O.Localize(`#Login_RememberMe_Short`),
            title: O.Localize(`#Login_RememberMe_Tooltip`),
            value: l,
            onChange: u,
          })
        : (0, M.jsx)(`div`, {
            className: td,
            children: O.Localize(`#Login_InsecureComputer`),
          }),
      (0, M.jsx)(ip, { loading: _, refreshLogin: S }),
      y,
      !m &&
        (0, M.jsx)(Q, {
          href: `${D.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
          align: `center`,
          children: O.Localize(`#Login_Help_SignIn`),
        }),
    ],
  });
}
var Kf = 700;
function qf(e) {
  let t = fe(),
    [n, r] = (0, j.useState)(!1);
  return (
    (0, j.useLayoutEffect)(() => {
      r(t.ownerWindow.screen.width < Kf);
    }, [t.ownerWindow]),
    p(t.ownerWindow, `resize`, () => {
      r(t.ownerWindow.screen.width < Kf);
    }),
    (0, M.jsx)(`div`, {
      className: du,
      children: n ? (0, M.jsx)(Yf, { ...e }) : (0, M.jsx)(Jf, { ...e }),
    })
  );
}
function Jf(e) {
  return (0, M.jsx)(Zf, { ...e });
}
function Yf(e) {
  let [t, n] = (0, j.useState)(!1);
  return t
    ? (0, M.jsx)(Zf, { ...e, bShowHideButton: !0, setShowQR: n })
    : (0, M.jsx)(Xf, { setShowQR: n });
}
function Xf(e) {
  return (0, M.jsxs)(`div`, {
    className: fu,
    children: [
      (0, M.jsx)(`div`, {
        className: pu,
        children: O.Localize(`#Login_MobileFlow_New`),
      }),
      (0, M.jsx)(`div`, {
        className: mu,
        children: (0, M.jsx)(`div`, {
          className: mu,
          children: O.Localize(`#Login_MobileFlow_SignIn_ScanQR`),
        }),
      }),
      (0, M.jsx)(`button`, {
        type: `button`,
        className: hu,
        onClick: () => e.setShowQR(!0),
        children: O.Localize(`#Login_MobileFlow_ShowMeQR_Button`),
      }),
      (0, M.jsx)(`a`, {
        href: `${D.STORE_BASE_URL}mobile`,
        className: gu,
        children: O.Localize(`#Login_JoinBeta_Button`),
      }),
    ],
  });
}
function Zf(e) {
  let {
    onQRStatusChange: t,
    transport: n,
    onComplete: r,
    platform: i,
    refreshInfo: a,
    preloadedQRSession: o,
    bShowHideButton: s = !1,
    setShowQR: c,
  } = e;
  return (0, M.jsxs)(`div`, {
    className: _u,
    children: [
      (0, M.jsx)($f, {
        highlight: !0,
        children: O.Localize(`#Login_SignIn_OrWithQRCode`),
      }),
      (0, M.jsx)(`div`, {
        className: vu,
        children: (0, M.jsx)(Df, {
          onStatusChange: t,
          transport: n,
          onComplete: r,
          platform: i,
          refreshInfo: a,
          preloadedSession: o,
        }),
      }),
      s &&
        c &&
        (0, M.jsx)(`button`, {
          type: `button`,
          className: `X1WW6U5nVKQ-`,
          onClick: () => c(!1),
          children: O.Localize(`#Button_Hide`),
        }),
      (0, M.jsx)(`div`, {
        className: yu,
        children: Ba(
          O.Localize(`#Login_UseMobileAppForQR_Inline`),
          (0, M.jsx)(Q, { href: `${D.STORE_BASE_URL}mobile`, align: `center` }),
        ),
      }),
    ],
  });
}
function Qf(e) {
  let { label: t, error: n, tone: r, autoFocus: i, id: a, ...o } = e,
    s = r ?? (n ? `danger` : void 0);
  return (0, M.jsxs)(`div`, {
    className: bu,
    children: [
      typeof t == `string` ? (0, M.jsx)($f, { inputId: a, children: t }) : t,
      n && (0, M.jsx)(tp, { type: `error`, children: n }),
      (0, M.jsx)(ep, { autoFocus: i, tone: s, id: a, ...o }),
    ],
  });
}
function $f(e) {
  let { children: t, inputId: n, highlight: r } = e;
  return (0, M.jsx)(`label`, {
    className: (0, P.default)(Cu, r && `jAjiX6ujKzY-`),
    htmlFor: n,
    children: t,
  });
}
function ep(e) {
  let {
    value: t,
    onChange: n,
    type: r = `text`,
    tone: i,
    className: a,
    autoFocus: o,
    disabled: s,
    id: c,
  } = e;
  return (0, M.jsx)(`input`, {
    value: t,
    type: r,
    autoFocus: o,
    onChange: (e) => n(e.target.value),
    className: (0, P.default)(xu, i === `danger` && `kbZo38RXgJ0-`, a),
    disabled: s,
    id: c,
  });
}
function tp(e) {
  let { children: t, type: n } = e;
  return (0, M.jsx)(`div`, {
    className: (0, P.default)(void 0, n === `error` && void 0),
    children: t,
  });
}
function np(e) {
  let { label: t, title: n, onChange: r, value: i } = e,
    a = () => {
      r && r(!i);
    },
    o = (0, j.useId)();
  return (0, M.jsxs)(`div`, {
    role: `presentation`,
    className: wu,
    title: n,
    onClick: a,
    onKeyPress: (e) => {
      e.key == ` ` && (a(), e.preventDefault());
    },
    children: [
      (0, M.jsx)(rp, { labelledBy: o, value: i }),
      (0, M.jsx)(`label`, { id: o, className: Tu, children: t }),
    ],
  });
}
function rp(e) {
  let { value: t, labelledBy: n } = e;
  return (0, M.jsx)(`div`, {
    tabIndex: 0,
    className: Eu,
    "aria-labelledby": n,
    role: `checkbox`,
    "aria-checked": t,
    children:
      t &&
      (0, M.jsx)(`div`, {
        className: `GHsuNp6HqyY-`,
        children: (0, M.jsx)(Td, { strokeWidth: 35 }),
      }),
  });
}
function ip(e) {
  let { refreshLogin: t, ...n } = e;
  return t &&
    `SteamClient` in globalThis &&
    `User` in SteamClient &&
    `StartShutdown` in SteamClient.User
    ? (0, M.jsx)(op, {})
    : (0, M.jsx)(ap, { ...n });
}
function ap(e) {
  return (0, M.jsx)(`div`, {
    className: Ou,
    children: (0, M.jsx)(sp, { ...e, children: O.Localize(`#Login_SignIn`) }),
  });
}
function op() {
  return (0, M.jsxs)(`div`, {
    className: Du,
    children: [
      (0, M.jsx)(`button`, {
        className: Mu,
        type: `submit`,
        children: O.Localize(`#Login_SignIn`),
      }),
      (0, M.jsx)(`button`, {
        className: ku,
        onClick: () => SteamClient.User.StartShutdown(!0),
        children: O.Localize(`#Login_ExitSteam`),
      }),
    ],
  });
}
function sp(e) {
  return (0, M.jsx)(cp, { type: `submit`, ...e });
}
function cp(e) {
  let { className: t, loading: n, disabled: r, children: i, ...a } = e,
    o = r || n;
  return (0, M.jsxs)(`button`, {
    className: (0, P.default)(Mu, n && `QAA-fChDQFA-`, t),
    disabled: o,
    ...a,
    children: [
      i,
      n &&
        (0, M.jsx)(`div`, {
          className: `_7C2-lQ9GWRA-`,
          children: (0, M.jsx)(dp, { size: `small` }),
        }),
    ],
  });
}
function lp(e) {
  let t = e.children || `\xA0`;
  return (0, M.jsx)(`div`, { className: Pu, children: t });
}
function up() {
  return (0, M.jsx)(kp, {
    compact: !0,
    children: (0, M.jsxs)($, {
      alignItems: `center`,
      className: (0, P.default)(vd, D.IN_STEAMUI && `ZV64fnc7PdA-`),
      children: [
        (0, M.jsx)(tf, { size: `xlarge` }),
        (0, M.jsx)(`div`, {
          className: (0, P.default)(zu),
          children: O.Localize(
            D.IN_STEAMUI
              ? `#Login_ConnectingToSteam`
              : `#Login_LoadingAccountInfo`,
          ),
        }),
      ],
    }),
  });
}
function dp(e) {
  let { size: t } = e;
  return (0, M.jsx)(`div`, {
    className: (0, P.default)(
      _d,
      t == `small` && `-GciojHJFJo-`,
      (t == `medium` || !t) && `aNnjBlEgXeE-`,
      t == `large` && `SkijseWcXzM-`,
    ),
  });
}
function fp(e) {
  return (0, M.jsx)(`div`, {
    className: gd,
    children: (0, M.jsx)(`button`, {
      className: Au,
      onClick: e.onRequestOffline,
      children: O.Localize(`#Login_GoOffline_Button`),
    }),
  });
}
function pp(e) {
  let {
      reset: t,
      failure: n,
      onRequestOffline: r,
      errorReference: i,
      extendedErrorMessage: a,
    } = e,
    { title: o, description: s } = ou(n, a),
    c = D.IN_STEAMUI && n == J.Network;
  return (0, M.jsxs)(kp, {
    compact: !0,
    children: [
      (0, M.jsxs)($, {
        alignItems: `center`,
        gap: 12,
        children: [
          (0, M.jsx)(`div`, { className: pd, children: o }),
          (0, M.jsx)(`div`, { className: md, children: s }),
          c &&
            (0, M.jsx)(`div`, {
              className: `sH-b0kW7QCY-`,
              children: O.Localize(`#Login_GoOffline_Description`),
            }),
          (0, M.jsxs)(Ep, {
            className: hd,
            children: [
              (0, M.jsx)(cp, {
                className: ju,
                onClick: t,
                children: O.Localize(`#Button_Retry`),
              }),
              c && r && (0, M.jsx)(fp, { onRequestOffline: r }),
            ],
          }),
        ],
      }),
      i &&
        (0, M.jsx)(`div`, {
          className: `La0SBF0lXr0-`,
          children: O.Localize(`#Login_Error_Reference`, i),
        }),
    ],
  });
}
function mp(e) {
  let { reset: t } = e;
  return (0, M.jsx)(pp, { reset: t, failure: J.Generic });
}
function hp(e) {
  let {
      type: t,
      onSubmitCode: n,
      status: r,
      accountName: i,
      associatedLabel: a,
      onBack: o,
    } = e,
    [s, c] = (0, j.useState)([]),
    [l, u] = (0, j.useState)(!1),
    [d, f] = (0, j.useState)(!1),
    [p, m] = (0, j.useState)(!1),
    [h, g] = (0, j.useState)(0),
    _ = t === `mobile`,
    v = s.join(``),
    y = $l(v, p),
    b = (e) => {
      (f(!0),
        n(e).then(() => {
          (u(!1), f(!1));
        }));
    },
    x = (e) => {
      (l || u(!0), c(e));
      let t = e.join(``);
      $l(t, p) && b(t);
    },
    S = () => {
      y && b(v);
    },
    C = () => {
      (m(!p), c([]), n(``), g(h + 1));
    },
    w = !l && (r === 11 || r === 10),
    T,
    E;
  return (
    p
      ? t === `mobile`
        ? ((E = (0, M.jsx)(_p, {})), (T = `#Login_UseMobileCode`))
        : ((E = (0, M.jsx)(_p, {})), (T = `#Login_UseEmailCode`))
      : ((E =
          t === `mobile`
            ? (0, M.jsx)(vp, {})
            : (0, M.jsx)(yp, { emailAddress: a })),
        (T = `#Login_UseBackupCode`)),
    (0, M.jsx)(kp, {
      title: (0, M.jsx)(Ap, {}),
      compact: !0,
      children: (0, M.jsx)(Tp, {
        onSubmit: S,
        children: (0, M.jsxs)($, {
          alignItems: `center`,
          gap: 14,
          children: [
            (0, M.jsx)(bp, { type: t, accountName: i }),
            (0, M.jsxs)(`div`, {
              className: Hu,
              children: [
                (0, M.jsxs)($, {
                  alignItems: `center`,
                  gap: 2,
                  children: [
                    w &&
                      (0, M.jsx)(lp, {
                        children: O.Localize(`#Login_IncorrectSteamGuard`),
                      }),
                    (0, M.jsx)(
                      Dp,
                      {
                        value: s,
                        onChange: x,
                        tone: w ? `danger` : void 0,
                        loading: d,
                        backupCode: p,
                      },
                      h,
                    ),
                  ],
                }),
                E,
              ],
            }),
            _ &&
              (0, M.jsx)(Q, {
                onClick: C,
                align: `center`,
                children: O.Localize(T),
              }),
            (0, M.jsx)(gp, { type: t, onCodeHelp: e.onCodeHelp }),
          ],
        }),
      }),
    })
  );
}
function gp(e) {
  if (yd()) return null;
  let t, n;
  return (
    e.type === `mobile`
      ? ((t = `${D.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
        (n = O.Localize(`#Login_Help_AccessMobileApp`)))
      : ((t = `${D.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
        (n = O.Localize(`#Login_Help_AccessEmail`))),
    e.onCodeHelp
      ? (0, M.jsx)(Q, {
          onClick: () => e.onCodeHelp(t),
          align: `center`,
          children: n,
        })
      : (0, M.jsx)(Q, { href: t, align: `center`, children: n })
  );
}
function _p() {
  return (0, M.jsx)(Ep, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: qu,
    children: (0, M.jsxs)($, {
      children: [
        (0, M.jsx)(`div`, {
          className: Xu,
          children: O.Localize(`#Login_EnterBackupCode`),
        }),
        (0, M.jsx)(`div`, {
          className: Lu,
          children: O.Localize(`#Login_EnterBackupCodeDescription`),
        }),
      ],
    }),
  });
}
function vp() {
  return (0, M.jsxs)(Ep, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: Ju,
    children: [
      (0, M.jsx)(`div`, {
        className: Xu,
        children: O.Localize(`#Login_EnterMobileCode`),
      }),
      (0, M.jsx)(Sp, { className: Uu }),
    ],
  });
}
function yp(e) {
  return (0, M.jsxs)(Ep, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: Yu,
    children: [
      (0, M.jsx)(Op, {
        align: `center`,
        spacing: 6,
        children: (0, M.jsx)(`div`, {
          className: Zu,
          children: O.LocalizeReact(
            `#Login_EnterEmailCode`,
            (0, M.jsx)(`span`, { className: Qu, children: e.emailAddress }),
          ),
        }),
      }),
      (0, M.jsx)(Cp, { className: Wu }),
    ],
  });
}
function bp(e) {
  let { accountName: t, type: n } = e,
    r =
      n === `mobile`
        ? O.Localize(`#Login_MobileProtectingAccount`)
        : O.Localize(`#Login_EmailProtectingAccount`),
    i = Pf();
  return (0, M.jsxs)(`div`, {
    className: Iu,
    children: [
      (0, M.jsx)(`div`, {
        className: Lu,
        children: O.LocalizeReact(
          `#Login_ActiveAccountName`,
          (0, M.jsx)(`span`, { className: Ru, children: t }),
        ),
      }),
      !i && (0, M.jsx)(`div`, { className: `DSy9L5eaj5o-`, children: r }),
    ],
  });
}
function xp() {
  return (0, M.jsx)($, {
    alignItems: `center`,
    children: (0, M.jsxs)(`div`, {
      className: Bu,
      children: [
        (0, M.jsx)(`img`, { src: xe(af), alt: `` }),
        (0, M.jsx)(`div`, {
          className: Vu,
          children: Ba(O.Localize(`#Login_AwaitingMobileConfirmation`)),
        }),
      ],
    }),
  });
}
function Sp(e) {
  return (0, M.jsxs)(`svg`, {
    viewBox: `0 0 33 49`,
    fill: `currentColor`,
    className: e.className,
    children: [
      (0, M.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z`,
      }),
      (0, M.jsx)(`path`, {
        fill: `currentColor`,
        d: `M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z`,
      }),
      (0, M.jsx)(`path`, {
        fill: `currentColor`,
        d: `M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z`,
      }),
      (0, M.jsx)(`path`, {
        fill: `currentColor`,
        d: `M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z`,
      }),
      (0, M.jsx)(`path`, {
        fill: `currentColor`,
        d: `M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z`,
      }),
      (0, M.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z`,
      }),
    ],
  });
}
function Cp(e) {
  return (0, M.jsx)(`svg`, {
    viewBox: `0 0 58 56`,
    fill: `none`,
    className: e.className,
    children: (0, M.jsx)(`path`, {
      d: `M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z`,
      fill: `#1A99FF`,
    }),
  });
}
function wp(e) {
  let { type: t, accountName: n, onUseCodeOverride: r } = e,
    i = Pf(),
    a = (0, M.jsx)(gp, { type: `mobile`, onCodeHelp: e.onCodeHelp }),
    o = i
      ? (0, M.jsx)(`div`, {
          style: { paddingBottom: `20px` },
          children: (0, M.jsx)(Q, {
            align: `center`,
            onClick: r,
            children: O.Localize(`#Login_EnterCodeInstead`),
          }),
        })
      : (0, M.jsx)(`div`, {
          className: Ku,
          children: (0, M.jsx)(Q, {
            align: `center`,
            onClick: r,
            children: O.Localize(`#Login_EnterCodeInstead`),
          }),
        });
  return (0, M.jsx)(kp, {
    title: (0, M.jsx)(Ap, {}),
    compact: !0,
    children: (0, M.jsxs)($, {
      gap: D.IN_STEAMUI ? 24 : 40,
      children: [
        (0, M.jsx)(bp, { type: t, accountName: n }),
        (0, M.jsx)(xp, {}),
        (0, M.jsxs)(`div`, { className: Gu, children: [o, a] }),
      ],
    }),
  });
}
function Q(e) {
  let { children: t, align: n, inline: r } = e,
    i = (0, P.default)(Nu, n === `center` && `p1pxbjr1kTM-`);
  if (`href` in e) {
    let n = D.IN_STEAMUI ? `steam://openurl_external/${e.href}` : e.href;
    return (0, M.jsx)(`a`, { className: i, href: n, children: t });
  }
  return (0, M.jsx)(r ? `span` : `div`, {
    className: i,
    onClick: e.onClick,
    children: t,
  });
}
function Tp(e) {
  let { onSubmit: t, children: n, className: r } = e;
  return (0, M.jsx)(`form`, {
    onSubmit: (e) => (e.preventDefault(), t(), !1),
    className: r,
    children: n,
  });
}
function $(e) {
  let {
      alignItems: t,
      justifyContent: n,
      gap: r,
      className: i,
      ariaLabelledBy: a,
      children: o,
    } = e,
    s = (0, P.default)(
      Fu,
      t === `center` && `mQfJWqZo0U8-`,
      n === `center` && `h53Pyn--gk4-`,
      i,
    ),
    c = r ? { gap: typeof r == `number` ? `${r}px` : r } : void 0;
  return (0, M.jsx)(`section`, {
    className: s,
    style: c,
    "aria-labelledby": a,
    children: o,
  });
}
function Ep(e) {
  let { children: t, justifyContent: n, alignItems: r, className: i } = e;
  return (0, M.jsx)(`div`, {
    style: {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: n,
      alignItems: r,
    },
    className: i,
    children: t,
  });
}
function Dp(e) {
  let { onChange: t, backupCode: n = !1, ...r } = e;
  return (0, M.jsx)(Sd, {
    length: Zl(n),
    backupCode: n,
    onChange: (e) => {
      ((e = e.map((e) => e.toUpperCase())), Ql(e.join(``).trim(), n) && t(e));
    },
    autoFocus: !0,
    ...r,
    allowCharacter: (e) => /\w/g.test(e),
  });
}
function Op(e) {
  let { children: t, spacing: n = 0, align: r } = e;
  return (0, M.jsx)($, {
    alignItems: r,
    children: j.Children.map(t, (e, t) =>
      e
        ? (0, M.jsx)(`div`, {
            style: t > 0 ? { paddingTop: `${n}px` } : void 0,
            children: e,
          })
        : null,
    )?.filter(Boolean),
  });
}
function kp(e) {
  let { title: t, titleId: n, children: r, compact: i } = e,
    a = Pf(),
    o = (0, j.useId)();
  return (0, M.jsxs)($, {
    gap: D.IN_STEAMUI ? 0 : 32,
    className: (0, P.default)(
      lu,
      a && `rvRWTXNBcK4-`,
      i && `L35Fcv9fbYo-`,
      D.IN_STEAMUI && `IN_CLIENT`,
    ),
    ariaLabelledBy: n ?? o,
    children: [
      typeof t == `string`
        ? (0, M.jsx)(`div`, { className: nd, id: n ?? o, children: t })
        : t,
      (0, M.jsx)(`div`, { className: rd, children: r }),
    ],
  });
}
function Ap(e) {
  let {
    realm: t = D.EREALM,
    launcherType: n = be()?.LAUNCHER_TYPE,
    className: r = id,
  } = e;
  return n === 8
    ? (0, M.jsx)(`div`, { className: r })
    : (0, M.jsxs)(`div`, {
        className: ad,
        children: [
          (0, M.jsx)(jp, { onBack: e.onBack }),
          t === a.k_ESteamRealmChina
            ? (0, M.jsx)(Np, { className: r })
            : (0, M.jsx)(Mp, { className: r }),
          ` `,
        ],
      });
}
function jp(e) {
  return e.onBack
    ? (0, M.jsx)(`button`, {
        type: `button`,
        className: od,
        onClick: e.onBack,
        "aria-label": O.Localize(`#Button_Back`),
        children: (0, M.jsx)(wd, { className: sd }),
      })
    : null;
}
function Mp(e) {
  return (0, M.jsxs)(`svg`, {
    viewBox: `0 0 153 46`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: e.className,
    children: [
      (0, M.jsx)(`path`, {
        d: `M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z`,
        fill: `#E0E1E6`,
      }),
      (0, M.jsx)(`path`, {
        d: `M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z`,
        fill: `#E0E1E6`,
      }),
      (0, M.jsx)(`path`, {
        d: `M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z`,
        fill: `#E0E1E6`,
      }),
      (0, M.jsx)(`path`, {
        d: `M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z`,
        fill: `#E0E1E6`,
      }),
      (0, M.jsx)(`path`, {
        d: `M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z`,
        fill: `#E0E1E6`,
      }),
      (0, M.jsx)(`path`, {
        d: `M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z`,
        fill: `#E0E1E6`,
      }),
      (0, M.jsx)(`path`, {
        d: `M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z`,
        fill: `#E0E1E6`,
      }),
      (0, M.jsx)(`path`, {
        d: `M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z`,
        fill: `#E0E1E6`,
      }),
      (0, M.jsx)(`path`, {
        d: `M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z`,
        fill: `#E0E1E6`,
      }),
    ],
  });
}
function Np(e) {
  return (0, M.jsxs)(`svg`, {
    viewBox: `0 0 232.73 46.07`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: e.className,
    fill: `#E0E1E6`,
    children: [
      (0, M.jsxs)(`g`, {
        stroke: `null`,
        id: `svg_2`,
        children: [
          (0, M.jsx)(`path`, {
            stroke: `null`,
            id: `svg_3`,
            d: `m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037`,
          }),
          (0, M.jsx)(`path`, {
            stroke: `null`,
            id: `svg_4`,
            d: `m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836`,
          }),
          (0, M.jsx)(`path`, {
            stroke: `null`,
            id: `svg_5`,
            d: `m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287`,
          }),
        ],
      }),
      (0, M.jsx)(`path`, {
        stroke: `null`,
        id: `svg_6`,
        d: `m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z`,
      }),
      (0, M.jsxs)(`g`, {
        id: `svg_7`,
        children: [
          (0, M.jsx)(`path`, {
            id: `svg_8`,
            d: `m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z`,
          }),
          (0, M.jsx)(`path`, {
            id: `svg_9`,
            d: `m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z`,
          }),
          (0, M.jsx)(`path`, {
            id: `svg_10`,
            d: `m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z`,
          }),
          (0, M.jsx)(`path`, {
            id: `svg_11`,
            d: `m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z`,
          }),
        ],
      }),
      (0, M.jsxs)(`g`, {
        id: `svg_12`,
        children: [
          (0, M.jsx)(`path`, {
            id: `svg_13`,
            d: `m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z`,
          }),
          (0, M.jsx)(`path`, {
            id: `svg_14`,
            d: `m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z`,
          }),
        ],
      }),
    ],
  });
}
function Pp() {
  return (0, M.jsx)($, {
    alignItems: `center`,
    justifyContent: `center`,
    children: (0, M.jsx)(tf, {}),
  });
}
function Fp(e) {
  let t = (0, j.useRef)(e);
  ((t.current = e),
    (0, j.useEffect)(() => {
      new URLSearchParams(location.search).get(`need_password`) ||
        (t.current &&
          Ip(t.current).catch((e) => {
            yl(`PerformRefresh exception`, e);
          }));
    }, [t]));
}
async function Ip(e) {
  let t = new FormData();
  t.append(`redir`, e);
  let n = `${D.LOGIN_BASE_URL}jwt/ajaxrefresh`,
    r = await q.default.post(n, t, { timeout: 1e4, withCredentials: !0 });
  if (r.status !== 200 || !r?.data?.success) return !1;
  let { success: i, login_url: a, error: o, ...s } = r.data,
    c = new FormData();
  Object.entries(s).forEach(([e, t]) => c.append(e, t));
  let l = await q.default.post(a, c),
    u = l.status === 200 && l.data.result === 1;
  return (u && window.location.assign(e), u);
}
function Lp() {
  let e = (0, j.useRef)(!0);
  return (
    (0, j.useEffect)(
      () => () => {
        e.current = !1;
      },
      [e],
    ),
    (0, j.useCallback)(() => e.current, [e])
  );
}
var Rp = `_9-qRKyX6pp4-`;
function zp(e) {
  let { redirectUrl: t = r.STATS_BASE_URL } = e,
    [n] = (0, j.useState)(
      new de(new ge(r.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [i, a] = (0, j.useState)(!1);
  return (0, M.jsx)(`div`, {
    className: Rp,
    children: i
      ? (0, M.jsx)(Ff, {})
      : (0, M.jsx)(If, {
          autoFocus: !0,
          transport: n,
          platform: 2,
          onComplete: (e) => {
            e == Cl.k_PrimaryDomainFail ? a(!0) : window.location.assign(t);
          },
          redirectUrl: t,
          theme: `modal`,
          joinLinkVariant: `partner`,
        }),
  });
}
export { zp as default };
