/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  F as n,
  It as r,
  L as i,
  Lt as a,
  N as o,
  Pt as s,
  dt as c,
  ft as l,
  lt as u,
  nt as d,
  ot as f,
  st as p,
} from "./chunk~01cfc309bf.js";
import {
  $n as m,
  $r as h,
  $t as g,
  An as _,
  Ar as v,
  Bn as ee,
  Br as y,
  Cn as te,
  Cr as ne,
  Dn as re,
  Dr as ie,
  En as ae,
  Eo as oe,
  Er as se,
  Fn as ce,
  Fr as b,
  Gn as le,
  Gr as ue,
  Hn as de,
  Hr as fe,
  Ht as pe,
  In as me,
  Ir as he,
  Jn as ge,
  Jr as _e,
  Kn as ve,
  Kr as ye,
  Ln as be,
  Lr as xe,
  Mn as Se,
  Mr as Ce,
  Nn as we,
  Nr as x,
  On as Te,
  Or as Ee,
  Pn as De,
  Pr as Oe,
  Qn as ke,
  Qr as Ae,
  Qt as je,
  Rn as Me,
  Rr as Ne,
  Sn as Pe,
  Sr as Fe,
  Tn as Ie,
  Tr as Le,
  Un as Re,
  Ur as ze,
  Vn as Be,
  Vr as Ve,
  Wn as He,
  Wr as Ue,
  Xn as We,
  Xr as Ge,
  Yn as Ke,
  Yr as qe,
  Zn as Je,
  Zr as Ye,
  _i as Xe,
  _n as Ze,
  _r as Qe,
  an as $e,
  ar as et,
  bn as tt,
  br as nt,
  cn as rt,
  cr as it,
  dn as at,
  dr as ot,
  en as st,
  er as ct,
  fn as lt,
  fr as ut,
  gn as dt,
  gr as ft,
  hi as pt,
  hn as mt,
  hr as ht,
  in as gt,
  ir as _t,
  jn as vt,
  jr as yt,
  kn as bt,
  kr as xt,
  ln as St,
  lr as Ct,
  mn as wt,
  mr as Tt,
  nn as Et,
  nr as Dt,
  on as Ot,
  or as kt,
  pn as At,
  pr as jt,
  qn as Mt,
  qr as S,
  rn as Nt,
  rr as Pt,
  sn as Ft,
  sr as It,
  tn as Lt,
  tr as Rt,
  un as zt,
  ur as Bt,
  vn as Vt,
  vr as Ht,
  wn as Ut,
  wr as Wt,
  xn as Gt,
  xr as Kt,
  yn as qt,
  yo as Jt,
  yr as Yt,
  zn as Xt,
  zr as Zt,
} from "./chunk~6b8ddcaac8.js";
import { t as Qt } from "./chunk~4c13037b22.js";
import { a as $t, i as en } from "./chunk~5adf866415.js";
import { t as tn } from "./chunk~684e72ad45.js";
import "./chunk~8681f5c764.js";
import { t as nn } from "./chunk~eefd71512b.js";
import { t as rn } from "./chunk~91ae5e1167.js";
import { M as an } from "./chunk~2f8c67b4de.js";
import { n as on } from "./chunk~710e3cfd2f.js";
import { t as sn } from "./chunk~a8b8151a67.js";
import { n as cn } from "./chunk~5e5f1b9ccf.js";
import {
  $_ as ln,
  $d as un,
  $f as dn,
  $g as fn,
  $h as pn,
  $i as mn,
  $m as hn,
  $p as gn,
  $u as _n,
  A_ as vn,
  Ad as yn,
  Af as bn,
  Ag as xn,
  Ah as Sn,
  Am as Cn,
  Ap as wn,
  Av as Tn,
  B_ as En,
  Ba as Dn,
  Bd as On,
  Bf as kn,
  Bg as An,
  Bh as jn,
  Bm as Mn,
  Bp as Nn,
  C_ as Pn,
  Cf as Fn,
  Cg as In,
  Ch as Ln,
  Cm as Rn,
  Cp as zn,
  D_ as Bn,
  Db as C,
  Dc as Vn,
  Dd as Hn,
  Df as Un,
  Dg as Wn,
  Dh as Gn,
  Dm as Kn,
  Dp as qn,
  E_ as Jn,
  Eb as Yn,
  Ef as Xn,
  Eg as Zn,
  Eh as Qn,
  Em as $n,
  Ep as er,
  F_ as tr,
  Fd as nr,
  Ff as rr,
  Fg as ir,
  Fh as ar,
  Fm as or,
  Fn as sr,
  Fp as cr,
  G_ as lr,
  Gd as ur,
  Gf as dr,
  Gg as fr,
  Gh as pr,
  Gm as mr,
  Gp as hr,
  H_ as gr,
  Hd as _r,
  Hf as vr,
  Hg as yr,
  Hh as br,
  Hm as xr,
  Hp as Sr,
  Hr as Cr,
  I_ as wr,
  Id as Tr,
  Ig as Er,
  Ih as Dr,
  Im as Or,
  Ip as kr,
  J_ as Ar,
  Jd as jr,
  Jf as Mr,
  Jg as Nr,
  Jh as Pr,
  Jm as Fr,
  Jp as Ir,
  Ju as Lr,
  K_ as Rr,
  Kd as zr,
  Kf as Br,
  Kg as Vr,
  Kh as Hr,
  Ki as Ur,
  Km as Wr,
  Kp as Gr,
  L_ as Kr,
  Ld as qr,
  Lf as Jr,
  Lg as Yr,
  Lh as Xr,
  Li as Zr,
  Lm as Qr,
  Lp as $r,
  M_ as ei,
  Md as ti,
  Mf as ni,
  Mg as ri,
  Mh as ii,
  Mm as ai,
  Mp as oi,
  N_ as si,
  Nd as ci,
  Nf as li,
  Ng as ui,
  Nh as di,
  Nm as fi,
  Np as pi,
  O_ as mi,
  Ob as hi,
  Od as gi,
  Of as _i,
  Og as vi,
  Om as yi,
  Op as bi,
  P_ as xi,
  Pd as Si,
  Pf as Ci,
  Pg as wi,
  Ph as Ti,
  Pm as Ei,
  Pp as Di,
  Pv as Oi,
  Q_ as ki,
  Qd as Ai,
  Qf as ji,
  Qg as Mi,
  Qh as Ni,
  Qm as Pi,
  Qp as Fi,
  Qu as Ii,
  Qx as Li,
  R_ as Ri,
  Rd as zi,
  Rf as Bi,
  Rg as Vi,
  Rh as Hi,
  Rm as Ui,
  Rp as Wi,
  S_ as Gi,
  Sf as Ki,
  Sg as qi,
  Sh as Ji,
  Sm as Yi,
  Sp as Xi,
  Sv as Zi,
  T_ as Qi,
  Tc as $i,
  Tf as ea,
  Tg as ta,
  Th as na,
  Tm as ra,
  Tp as ia,
  U_ as aa,
  Ub as oa,
  Ud as sa,
  Uf as ca,
  Ug as la,
  Uh as ua,
  Up as da,
  Us as fa,
  Uv as pa,
  V_ as ma,
  Vd as ha,
  Vf as ga,
  Vg as _a,
  Vh as va,
  Vi as ya,
  Vm as ba,
  Vp as xa,
  Vr as Sa,
  Vu as Ca,
  Vy as wa,
  W_ as Ta,
  Wb as Ea,
  Wd as Da,
  Wf as Oa,
  Wg as ka,
  Wh as Aa,
  Wm as ja,
  Wp as Ma,
  Wr as Na,
  X_ as Pa,
  Xb as w,
  Xc as T,
  Xd as Fa,
  Xf as Ia,
  Xg as La,
  Xh as Ra,
  Xi as za,
  Xm as Ba,
  Xp as Va,
  Y_ as Ha,
  Yd as Ua,
  Yf as Wa,
  Yg as Ga,
  Yh as Ka,
  Ym as qa,
  Yn as Ja,
  Yp as Ya,
  Yu as Xa,
  Z_ as Za,
  Zd as Qa,
  Zf as $a,
  Zg as eo,
  Zh as to,
  Zi as E,
  Zm as no,
  Zp as ro,
  __ as io,
  _d as ao,
  _f as oo,
  _g as so,
  _h as co,
  _l as lo,
  _m as uo,
  _p as fo,
  aS as D,
  a_ as po,
  af as mo,
  ag as ho,
  ah as go,
  am as _o,
  ap as vo,
  b_ as yo,
  bf as bo,
  bg as xo,
  bh as So,
  bm as Co,
  bp as wo,
  bt as To,
  bx as Eo,
  c_ as Do,
  cf as Oo,
  cg as ko,
  ch as Ao,
  cm as jo,
  cp as Mo,
  d_ as No,
  df as Po,
  dg as Fo,
  dh as Io,
  dm as Lo,
  dp as Ro,
  ds as zo,
  eS as O,
  e_ as Bo,
  ef as Vo,
  eg as Ho,
  eh as Uo,
  em as Wo,
  ep as Go,
  ev as Ko,
  ex as qo,
  f_ as Jo,
  ff as Yo,
  fg as Xo,
  fh as Zo,
  fm as Qo,
  fp as $o,
  g_ as es,
  gf as ts,
  gg as ns,
  gh as rs,
  gm as is,
  gp as as,
  gv as os,
  h_ as ss,
  hf as cs,
  hg as ls,
  hh as us,
  hm as ds,
  hp as fs,
  ht as ps,
  iS as k,
  i_ as ms,
  if as hs,
  ig as gs,
  ih as _s,
  il as vs,
  im as ys,
  ip as bs,
  iv as xs,
  j_ as Ss,
  jc as A,
  jd as Cs,
  jf as ws,
  jh as Ts,
  jm as Es,
  jp as Ds,
  jx as Os,
  k_ as ks,
  kd as As,
  kf as js,
  kg as Ms,
  kh as Ns,
  km as Ps,
  kn as Fs,
  ko as Is,
  kp as Ls,
  l_ as Rs,
  lc as zs,
  lf as Bs,
  lg as Vs,
  lh as Hs,
  lm as Us,
  lp as Ws,
  ly as Gs,
  mS as Ks,
  m_ as qs,
  mf as Js,
  mg as Ys,
  mh as Xs,
  mm as Zs,
  mp as Qs,
  mv as $s,
  nS as j,
  n_ as ec,
  nf as tc,
  ng as nc,
  nh as rc,
  nm as ic,
  np as ac,
  ns as oc,
  nv as sc,
  oS as M,
  o_ as cc,
  og as lc,
  oh as uc,
  ol as dc,
  om as fc,
  op as pc,
  p_ as mc,
  pf as hc,
  pg as gc,
  ph as _c,
  pm as vc,
  pp as yc,
  pt as bc,
  q_ as xc,
  qb as N,
  qd as Sc,
  qf as Cc,
  qg as wc,
  qh as Tc,
  qm as Ec,
  qp as Dc,
  rS as P,
  r_ as Oc,
  rf as kc,
  rg as Ac,
  rh as jc,
  rm as Mc,
  rp as Nc,
  rv as Pc,
  rx as Fc,
  sS as F,
  s_ as Ic,
  sf as Lc,
  sg as Rc,
  sh as zc,
  sm as Bc,
  so as Vc,
  sp as Hc,
  tS as I,
  t_ as Uc,
  tf as Wc,
  tg as Gc,
  th as Kc,
  tm as qc,
  tp as Jc,
  tv as Yc,
  u_ as Xc,
  uf as Zc,
  ug as Qc,
  uh as $c,
  um as el,
  up as tl,
  ut as nl,
  uv as rl,
  v_ as il,
  vc as al,
  vd as ol,
  vg as sl,
  vh as cl,
  vl as ll,
  vp as ul,
  vt as dl,
  w_ as fl,
  wc as pl,
  wd as ml,
  wf as hl,
  wg as gl,
  wh as _l,
  wm as vl,
  wp as yl,
  x_ as bl,
  xc as xl,
  xf as Sl,
  xg as Cl,
  xh as wl,
  xm as Tl,
  xp as El,
  yS as Dl,
  y_ as Ol,
  yc as kl,
  yf as Al,
  yg as jl,
  yh as Ml,
  ym as Nl,
  yp as Pl,
  yr as Fl,
  z_ as Il,
  zd as Ll,
  zf as Rl,
  zg as zl,
  zh as Bl,
  zm as Vl,
  zp as Hl,
  zr as Ul,
} from "./main.js";
import { y as Wl } from "./chunk~ec93a260ba.js";
import { t as Gl } from "./chunk~65da1d3223.js";
import { t as Kl } from "./chunk~d7992cfd18.js";
import { i as ql, n as Jl } from "./chunk~4c65b375ad.js";
import { r as Yl, t as Xl } from "./chunk~f6ebb80c8b.js";
import { n as L, r as Zl, t as Ql } from "./chunk~c0f9f0eb46.js";
import { t as $l } from "./chunk~10ec219681.js";
var R = e(a());
function eu() {
  return (
    (eu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    eu.apply(null, arguments)
  );
}
function tu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function nu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tu(Object(n), !0).forEach(function (t) {
          ru(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ru(e, t, n) {
  return (
    (t = iu(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function iu(e) {
  var t = au(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function au(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ou = 32,
  su = class extends R.PureComponent {
    renderIcon(e, t) {
      var { inactiveColor: n } = this.props,
        r = ou / 2,
        i = ou / 6,
        a = ou / 3,
        o = e.inactive ? n : e.color,
        s = t ?? e.type;
      if (s === `none`) return null;
      if (s === `plainline`)
        return R.createElement(`line`, {
          strokeWidth: 4,
          fill: `none`,
          stroke: o,
          strokeDasharray: e.payload.strokeDasharray,
          x1: 0,
          y1: r,
          x2: ou,
          y2: r,
          className: `recharts-legend-icon`,
        });
      if (s === `line`)
        return R.createElement(`path`, {
          strokeWidth: 4,
          fill: `none`,
          stroke: o,
          d: `M0,${r}h${a}
            A${i},${i},0,1,1,${2 * a},${r}
            H${ou}M${2 * a},${r}
            A${i},${i},0,1,1,${a},${r}`,
          className: `recharts-legend-icon`,
        });
      if (s === `rect`)
        return R.createElement(`path`, {
          stroke: `none`,
          fill: o,
          d: `M0,${ou / 8}h${ou}v${(ou * 3) / 4}h${-ou}z`,
          className: `recharts-legend-icon`,
        });
      if (R.isValidElement(e.legendIcon)) {
        var c = nu({}, e);
        return (delete c.legendIcon, R.cloneElement(e.legendIcon, c));
      }
      return R.createElement(Zt, {
        fill: o,
        cx: r,
        cy: r,
        size: ou,
        sizeType: `diameter`,
        type: s,
      });
    }
    renderItems() {
      var {
          payload: e,
          iconSize: t,
          layout: n,
          formatter: r,
          inactiveColor: i,
          iconType: a,
        } = this.props,
        o = { x: 0, y: 0, width: ou, height: ou },
        s = {
          display: n === `horizontal` ? `inline-block` : `block`,
          marginRight: 10,
        },
        c = {
          display: `inline-block`,
          verticalAlign: `middle`,
          marginRight: 4,
        };
      return e.map((e, n) => {
        var l = e.formatter || r,
          u = h({
            "recharts-legend-item": !0,
            [`legend-item-${n}`]: !0,
            inactive: e.inactive,
          });
        if (e.type === `none`) return null;
        var d = e.inactive ? i : e.color,
          f = l ? l(e.value, e, n) : e.value;
        return R.createElement(
          `li`,
          eu(
            { className: u, style: s, key: `legend-item-${n}` },
            Ne(this.props, e, n),
          ),
          R.createElement(
            _e,
            {
              width: t,
              height: t,
              viewBox: o,
              style: c,
              "aria-label": `${f} legend icon`,
            },
            this.renderIcon(e, a),
          ),
          R.createElement(
            `span`,
            { className: `recharts-legend-item-text`, style: { color: d } },
            f,
          ),
        );
      });
    }
    render() {
      var { payload: e, layout: t, align: n } = this.props;
      if (!e || !e.length) return null;
      var r = {
        padding: 0,
        margin: 0,
        textAlign: t === `horizontal` ? n : `left`,
      };
      return R.createElement(
        `ul`,
        { className: `recharts-default-legend`, style: r },
        this.renderItems(),
      );
    }
  };
(ru(su, `displayName`, `Legend`),
  ru(su, `defaultProps`, {
    align: `center`,
    iconSize: 14,
    inactiveColor: `#ccc`,
    layout: `horizontal`,
    verticalAlign: `middle`,
  }));
function cu() {
  return b(Ce);
}
var lu = e(r()),
  uu = [`contextPayload`];
function du() {
  return (
    (du = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    du.apply(null, arguments)
  );
}
function fu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function pu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? fu(Object(n), !0).forEach(function (t) {
          mu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function mu(e, t, n) {
  return (
    (t = hu(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function hu(e) {
  var t = gu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function gu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function _u(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = vu(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function vu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function yu(e) {
  return e.value;
}
function bu(e) {
  var { contextPayload: t } = e,
    n = _u(e, uu),
    r = he(t, e.payloadUniqBy, yu),
    i = pu(pu({}, n), {}, { payload: r });
  return R.isValidElement(e.content)
    ? R.cloneElement(e.content, i)
    : typeof e.content == `function`
      ? R.createElement(e.content, i)
      : R.createElement(su, i);
}
function xu(e, t, n, r, i, a) {
  var { layout: o, align: s, verticalAlign: c } = t,
    l,
    u;
  return (
    (e &&
      ((e.left !== void 0 && e.left !== null) ||
        (e.right !== void 0 && e.right !== null))) ||
      (l =
        s === `center` && o === `vertical`
          ? { left: ((r || 0) - a.width) / 2 }
          : s === `right`
            ? { right: (n && n.right) || 0 }
            : { left: (n && n.left) || 0 }),
    (e &&
      ((e.top !== void 0 && e.top !== null) ||
        (e.bottom !== void 0 && e.bottom !== null))) ||
      (u =
        c === `middle`
          ? { top: ((i || 0) - a.height) / 2 }
          : c === `bottom`
            ? { bottom: (n && n.bottom) || 0 }
            : { top: (n && n.top) || 0 }),
    pu(pu({}, l), u)
  );
}
function Su(e) {
  var t = Oe();
  return (
    (0, R.useEffect)(() => {
      t(jt(e));
    }, [t, e]),
    null
  );
}
function Cu(e) {
  var t = Oe();
  return (
    (0, R.useEffect)(
      () => (
        t(Tt(e)),
        () => {
          t(Tt({ width: 0, height: 0 }));
        }
      ),
      [t, e],
    ),
    null
  );
}
function wu(e) {
  var t = cu(),
    n = ye(),
    r = Ht(),
    { width: i, height: a, wrapperStyle: o, portal: s } = e,
    [c, l] = yt([t]),
    u = Qe(),
    d = ft();
  if (u == null || d == null) return null;
  var f = u - (r.left || 0) - (r.right || 0),
    p = Tu.getWidthOrHeight(e.layout, a, i, f),
    m = s
      ? o
      : pu(
          pu(
            {
              position: `absolute`,
              width: p?.width || i || `auto`,
              height: p?.height || a || `auto`,
            },
            xu(o, e, r, u, d, c),
          ),
          o,
        ),
    h = s ?? n;
  if (h == null) return null;
  var g = R.createElement(
    `div`,
    { className: `recharts-legend-wrapper`, style: m, ref: l },
    R.createElement(Su, {
      layout: e.layout,
      align: e.align,
      verticalAlign: e.verticalAlign,
      itemSorter: e.itemSorter,
    }),
    R.createElement(Cu, { width: c.width, height: c.height }),
    R.createElement(
      bu,
      du({}, e, p, {
        margin: r,
        chartWidth: u,
        chartHeight: d,
        contextPayload: t,
      }),
    ),
  );
  return (0, lu.createPortal)(g, h);
}
var Tu = class extends R.PureComponent {
  static getWidthOrHeight(e, t, n, r) {
    return e === `vertical` && ze(t)
      ? { height: t }
      : e === `horizontal`
        ? { width: n || r }
        : null;
  }
  render() {
    return R.createElement(wu, this.props);
  }
};
(mu(Tu, `displayName`, `Legend`),
  mu(Tu, `defaultProps`, {
    align: `center`,
    iconSize: 14,
    itemSorter: `value`,
    layout: `horizontal`,
    verticalAlign: `bottom`,
  }));
var Eu = [`points`, `className`, `baseLinePoints`, `connectNulls`];
function Du() {
  return (
    (Du = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Du.apply(null, arguments)
  );
}
function Ou(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ku(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function ku(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Au = (e) => e && e.x === +e.x && e.y === +e.y,
  ju = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = [[]];
    return (
      e.forEach((e) => {
        Au(e)
          ? t[t.length - 1].push(e)
          : t[t.length - 1].length > 0 && t.push([]);
      }),
      Au(e[0]) && t[t.length - 1].push(e[0]),
      t[t.length - 1].length <= 0 && (t = t.slice(0, -1)),
      t
    );
  },
  Mu = (e, t) => {
    var n = ju(e);
    t && (n = [n.reduce((e, t) => [...e, ...t], [])]);
    var r = n
      .map((e) =>
        e.reduce((e, t, n) => `${e}${n === 0 ? `M` : `L`}${t.x},${t.y}`, ``),
      )
      .join(``);
    return n.length === 1 ? `${r}Z` : r;
  },
  Nu = (e, t, n) => {
    var r = Mu(e, n);
    return `${r.slice(-1) === `Z` ? r.slice(0, -1) : r}L${Mu(Array.from(t).reverse(), n).slice(1)}`;
  },
  Pu = (e) => {
    var { points: t, className: n, baseLinePoints: r, connectNulls: i } = e,
      a = Ou(e, Eu);
    if (!t || !t.length) return null;
    var o = h(`recharts-polygon`, n);
    if (r && r.length) {
      var s = a.stroke && a.stroke !== `none`,
        c = Nu(t, r, i);
      return R.createElement(
        `g`,
        { className: o },
        R.createElement(
          `path`,
          Du({}, qe(a), {
            fill: c.slice(-1) === `Z` ? a.fill : `none`,
            stroke: `none`,
            d: c,
          }),
        ),
        s
          ? R.createElement(
              `path`,
              Du({}, qe(a), { fill: `none`, d: Mu(t, i) }),
            )
          : null,
        s
          ? R.createElement(
              `path`,
              Du({}, qe(a), { fill: `none`, d: Mu(r, i) }),
            )
          : null,
      );
    }
    var l = Mu(t, i);
    return R.createElement(
      `path`,
      Du({}, qe(a), {
        fill: l.slice(-1) === `Z` ? a.fill : `none`,
        className: o,
        d: l,
      }),
    );
  };
function Fu() {
  return (
    (Fu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fu.apply(null, arguments)
  );
}
var Iu = (e) => {
    var { cx: t, cy: n, r, className: i } = e,
      a = h(`recharts-dot`, i);
    return t === +t && n === +n && r === +r
      ? R.createElement(
          `circle`,
          Fu({}, Ye(e), xe(e), { className: a, cx: t, cy: n, r }),
        )
      : null;
  },
  Lu = (e) => e.graphicalItems.polarItems,
  Ru = x([m, ke], He),
  zu = x([Lu, Mt, Ru], ee),
  Bu = x([zu], Xt),
  Vu = x([Bu, It], me),
  Hu = x([Vu, Mt, zu], vt);
x([Vu, Mt, zu], (e, t, n) =>
  n.length > 0
    ? e
        .flatMap((e) =>
          n.flatMap((n) => ({
            value: Le(e, t.dataKey ?? n.dataKey),
            errorDomain: [],
          })),
        )
        .filter(Boolean)
    : t?.dataKey == null
      ? e.map((e) => ({ value: e, errorDomain: [] }))
      : e.map((e) => ({ value: Le(e, t.dataKey), errorDomain: [] })),
);
var Uu = () => void 0,
  Wu = x([Vu, Mt, zu, le, m], be),
  Gu = x([Mt, ge, Ke, Uu, Wu, Uu, ht, m], de),
  Ku = x([Mt, ht, Vu, Hu, kt, m, Gu], Se),
  qu = x([Ku, Mt, Je], Be),
  Ju = x([Mt, Ku, qu, m], we),
  Yu = (e, t, n) => {
    switch (t) {
      case `angleAxis`:
        return ct(e, n);
      case `radiusAxis`:
        return Pt(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Xu = (e, t, n) => {
    switch (t) {
      case `angleAxis`:
        return Rt(e, n);
      case `radiusAxis`:
        return _t(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Zu = x([Yu, Je, Ju, Xu], Re),
  Qu = x([ht, Hu, ve, m], ce),
  $u = x([ht, Yu, Je, Zu, qu, Xu, We, Qu, m], De);
x([ht, Yu, Zu, Xu, We, Qu, m], Me);
var ed = x([(e, t) => $u(e, `angleAxis`, t, !1)], (e) => {
    if (e) return e.map((e) => e.coordinate);
  }),
  td = x([(e, t) => $u(e, `radiusAxis`, t, !1)], (e) => {
    if (e) return e.map((e) => e.coordinate);
  }),
  nd = [
    `gridType`,
    `radialLines`,
    `angleAxisId`,
    `radiusAxisId`,
    `cx`,
    `cy`,
    `innerRadius`,
    `outerRadius`,
  ];
function rd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = id(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function id(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function ad() {
  return (
    (ad = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ad.apply(null, arguments)
  );
}
function od(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function sd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? od(Object(n), !0).forEach(function (t) {
          cd(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : od(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function cd(e, t, n) {
  return (
    (t = ld(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ld(e) {
  var t = ud(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ud(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var dd = (e, t, n, r) => {
    var i = ``;
    return (
      r.forEach((r, a) => {
        var o = v(t, n, e, r);
        i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
      }),
      (i += `Z`),
      i
    );
  },
  fd = (e) => {
    var {
      cx: t,
      cy: n,
      innerRadius: r,
      outerRadius: i,
      polarAngles: a,
      radialLines: o,
    } = e;
    if (!a || !a.length || !o) return null;
    var s = sd({ stroke: `#ccc` }, Ye(e));
    return R.createElement(
      `g`,
      { className: `recharts-polar-grid-angle` },
      a.map((e) => {
        var a = v(t, n, r, e),
          o = v(t, n, i, e);
        return R.createElement(
          `line`,
          ad({ key: `line-${e}` }, s, { x1: a.x, y1: a.y, x2: o.x, y2: o.y }),
        );
      }),
    );
  },
  pd = (e) => {
    var { cx: t, cy: n, radius: r } = e,
      i = sd({ stroke: `#ccc`, fill: `none` }, Ye(e));
    return R.createElement(
      `circle`,
      ad({}, i, {
        className: h(`recharts-polar-grid-concentric-circle`, e.className),
        cx: t,
        cy: n,
        r,
      }),
    );
  },
  md = (e) => {
    var { radius: t } = e,
      n = sd({ stroke: `#ccc`, fill: `none` }, Ye(e));
    return R.createElement(
      `path`,
      ad({}, n, {
        className: h(`recharts-polar-grid-concentric-polygon`, e.className),
        d: dd(t, e.cx, e.cy, e.polarAngles),
      }),
    );
  },
  hd = (e) => {
    var { polarRadius: t, gridType: n } = e;
    if (!t || !t.length) return null;
    var r = Math.max(...t),
      i = e.fill && e.fill !== `none`;
    return R.createElement(
      `g`,
      { className: `recharts-polar-grid-concentric` },
      i && n === `circle` && R.createElement(pd, ad({}, e, { radius: r })),
      i && n !== `circle` && R.createElement(md, ad({}, e, { radius: r })),
      t.map((t, r) => {
        var i = r;
        return n === `circle`
          ? R.createElement(pd, ad({ key: i }, e, { fill: `none`, radius: t }))
          : R.createElement(md, ad({ key: i }, e, { fill: `none`, radius: t }));
      }),
    );
  },
  gd = (e) => {
    var {
        gridType: t = `polygon`,
        radialLines: n = !0,
        angleAxisId: r = 0,
        radiusAxisId: i = 0,
        cx: a,
        cy: o,
        innerRadius: s,
        outerRadius: c,
      } = e,
      l = rd(e, nd),
      u = b(Dt),
      d = sd(
        {
          cx: u?.cx ?? a ?? 0,
          cy: u?.cy ?? o ?? 0,
          innerRadius: u?.innerRadius ?? s ?? 0,
          outerRadius: u?.outerRadius ?? c ?? 0,
        },
        l,
      ),
      { polarAngles: f, polarRadius: p, outerRadius: m } = d,
      h = b((e) => ed(e, r)),
      g = b((e) => td(e, i)),
      _ = Array.isArray(f) ? f : h,
      v = Array.isArray(p) ? p : g;
    return m <= 0 || _ == null || v == null
      ? null
      : R.createElement(
          `g`,
          { className: `recharts-polar-grid` },
          R.createElement(
            hd,
            ad({ gridType: t, radialLines: n }, d, {
              polarAngles: _,
              polarRadius: v,
            }),
          ),
          R.createElement(
            fd,
            ad({ gridType: t, radialLines: n }, d, {
              polarAngles: _,
              polarRadius: v,
            }),
          ),
        );
  };
gd.displayName = `PolarGrid`;
var _d = [`children`];
function vd() {
  return (
    (vd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vd.apply(null, arguments)
  );
}
function yd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function bd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? yd(Object(n), !0).forEach(function (t) {
          xd(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : yd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function xd(e, t, n) {
  return (
    (t = Sd(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Sd(e) {
  var t = Cd(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Cd(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function wd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Td(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function Td(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Ed = 1e-5,
  Dd = Math.cos(ie(45)),
  Od = `angleAxis`;
function kd(e) {
  var t = Oe(),
    n = (0, R.useMemo)(() => {
      var { children: t } = e;
      return wd(e, _d);
    }, [e]),
    r = n === b((e) => ct(e, n.id));
  return (
    (0, R.useEffect)(
      () => (
        t(qt(n)),
        () => {
          t(tt(n));
        }
      ),
      [t, n],
    ),
    r ? e.children : null
  );
}
var Ad = (e, t) => {
    var { cx: n, cy: r, radius: i, orientation: a, tickSize: o } = t,
      s = o || 8,
      c = v(n, r, i, e.coordinate),
      l = v(n, r, i + (a === `inner` ? -1 : 1) * s, e.coordinate);
    return { x1: c.x, y1: c.y, x2: l.x, y2: l.y };
  },
  jd = (e, t) => {
    var n = Math.cos(ie(-e.coordinate));
    return n > Ed
      ? t === `outer`
        ? `start`
        : `end`
      : n < -Ed
        ? t === `outer`
          ? `end`
          : `start`
        : `middle`;
  },
  Md = (e) => {
    var t = Math.cos(ie(-e.coordinate)),
      n = Math.sin(ie(-e.coordinate));
    return Math.abs(t) <= Dd ? (n > 0 ? `start` : `end`) : `middle`;
  },
  Nd = (e) => {
    var { cx: t, cy: n, radius: r, axisLineType: i, axisLine: a, ticks: o } = e;
    if (!a) return null;
    var s = bd(bd({}, Ye(e)), {}, { fill: `none` }, Ye(a));
    if (i === `circle`)
      return R.createElement(
        Iu,
        vd({ className: `recharts-polar-angle-axis-line` }, s, {
          cx: t,
          cy: n,
          r,
        }),
      );
    var c = o.map((e) => v(t, n, r, e.coordinate));
    return R.createElement(
      Pu,
      vd({ className: `recharts-polar-angle-axis-line` }, s, { points: c }),
    );
  },
  Pd = (e) => {
    var { tick: t, tickProps: n, value: r } = e;
    return t
      ? R.isValidElement(t)
        ? R.cloneElement(t, n)
        : typeof t == `function`
          ? t(n)
          : R.createElement(
              Ie,
              vd({}, n, { className: `recharts-polar-angle-axis-tick-value` }),
              r,
            )
      : null;
  },
  Fd = (e) => {
    var { tick: t, tickLine: n, tickFormatter: r, stroke: i, ticks: a } = e,
      o = Ye(e),
      s = Ae(t),
      c = bd(bd({}, o), {}, { fill: `none` }, Ye(n)),
      l = a.map((a, l) => {
        var u = Ad(a, e),
          d = jd(a, e.orientation),
          f = Md(a),
          p = bd(
            bd(
              bd({}, o),
              {},
              { textAnchor: d, verticalAnchor: f, stroke: `none`, fill: i },
              s,
            ),
            {},
            { index: l, payload: a, x: u.x2, y: u.y2 },
          );
        return R.createElement(
          S,
          vd(
            {
              className: h(`recharts-polar-angle-axis-tick`, xt(t)),
              key: `tick-${a.coordinate}`,
            },
            Ne(e, a, l),
          ),
          n &&
            R.createElement(
              `line`,
              vd({ className: `recharts-polar-angle-axis-tick-line` }, c, u),
            ),
          R.createElement(Pd, {
            tick: t,
            tickProps: p,
            value: r ? r(a.value, l) : a.value,
          }),
        );
      });
    return R.createElement(
      S,
      { className: `recharts-polar-angle-axis-ticks` },
      l,
    );
  },
  Id = (e) => {
    var { angleAxisId: t } = e,
      n = b(Dt),
      r = b((e) => Zu(e, `angleAxis`, t)),
      i = Yt(),
      a = b((e) => $u(e, `angleAxis`, t, i));
    if (n == null || !a || !a.length) return null;
    var o = bd(
      bd(bd({}, e), {}, { scale: r }, n),
      {},
      { radius: n.outerRadius },
    );
    return R.createElement(
      S,
      { className: h(`recharts-polar-angle-axis`, Od, o.className) },
      R.createElement(Nd, vd({}, o, { ticks: a })),
      R.createElement(Fd, vd({}, o, { ticks: a })),
    );
  },
  Ld = class extends R.PureComponent {
    render() {
      return this.props.radius <= 0
        ? null
        : R.createElement(
            kd,
            {
              id: this.props.angleAxisId,
              scale: this.props.scale,
              type: this.props.type,
              dataKey: this.props.dataKey,
              unit: void 0,
              name: this.props.name,
              allowDuplicatedCategory: !1,
              allowDataOverflow: !1,
              reversed: this.props.reversed,
              includeHidden: !1,
              allowDecimals: this.props.allowDecimals,
              tickCount: this.props.tickCount,
              ticks: this.props.ticks,
              tick: this.props.tick,
              domain: this.props.domain,
            },
            R.createElement(Id, this.props),
          );
    }
  };
(xd(Ld, `displayName`, `PolarAngleAxis`),
  xd(Ld, `axisType`, Od),
  xd(Ld, `defaultProps`, et));
function Rd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function zd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Rd(Object(n), !0).forEach(function (t) {
          Bd(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Rd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Bd(e, t, n) {
  return (
    (t = Vd(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Vd(e) {
  var t = Hd(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Hd(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Ud = x([Lu, (e, t) => t], (e, t) =>
    e.filter((e) => e.type === `pie`).find((e) => e.id === t),
  ),
  Wd = [],
  Gd = (e, t, n) => (n?.length === 0 ? Wd : n),
  Kd = x([It, Ud, Gd], (e, t, n) => {
    var { chartData: r } = e;
    if (t != null) {
      var i = t?.data != null && t.data.length > 0 ? t.data : r;
      if (
        ((i && i.length) ||
          n == null ||
          (i = n.map((e) => zd(zd({}, t.presentationProps), e.props))),
        i != null)
      )
        return i;
    }
  }),
  qd = x([Kd, Ud, Gd], (e, t, n) => {
    if (e != null && t != null)
      return e.map((e, r) => {
        var i,
          a = Le(e, t.nameKey, t.name),
          o =
            n != null && (i = n[r]) != null && (i = i.props) != null && i.fill
              ? n[r].props.fill
              : typeof e == `object` && e && `fill` in e
                ? e.fill
                : t.fill;
        return {
          value: Wt(a, t.dataKey),
          color: o,
          payload: e,
          type: t.legendType,
        };
      });
  }),
  Jd = x([Kd, Ud, Gd, nt], (e, t, n, r) => {
    if (t != null && e != null)
      return yf({ offset: r, pieSettings: t, displayedData: e, cells: n });
  }),
  Yd = e(ue()),
  Xd = [`onMouseEnter`, `onClick`, `onMouseLeave`],
  Zd = [`id`],
  Qd = [`id`];
function $d(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ef(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function ef(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function tf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? tf(Object(n), !0).forEach(function (t) {
          nf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : tf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function nf(e, t, n) {
  return (
    (t = rf(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function rf(e) {
  var t = af(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function af(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function of() {
  return (
    (of = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    of.apply(null, arguments)
  );
}
function sf(e) {
  var t = (0, R.useMemo)(() => Vt(e.children, re), [e.children]),
    n = b((n) => qd(n, e.id, t));
  return n == null ? null : R.createElement(lt, { legendPayload: n });
}
function cf(e) {
  var {
    dataKey: t,
    nameKey: n,
    sectors: r,
    stroke: i,
    strokeWidth: a,
    fill: o,
    name: s,
    hide: c,
    tooltipType: l,
  } = e;
  return {
    dataDefinedOnItem: r.map((e) => e.tooltipPayload),
    positions: r.map((e) => e.tooltipPosition),
    settings: {
      stroke: i,
      strokeWidth: a,
      fill: o,
      dataKey: t,
      nameKey: n,
      name: Wt(s, t),
      hide: c,
      type: l,
      color: o,
      unit: ``,
    },
  };
}
var lf = (e, t) => (e > t ? `start` : e < t ? `end` : `middle`),
  uf = (e, t, n) => y(typeof t == `function` ? t(e) : t, n, n * 0.8),
  df = (e, t, n) => {
    var { top: r, left: i, width: a, height: o } = t,
      s = Ee(a, o);
    return {
      cx: i + y(e.cx, a, a / 2),
      cy: r + y(e.cy, o, o / 2),
      innerRadius: y(e.innerRadius, s, 0),
      outerRadius: uf(n, e.outerRadius, s),
      maxRadius: e.maxRadius || Math.sqrt(a * a + o * o) / 2,
    };
  },
  ff = (e, t) => Ue(t - e) * Math.min(Math.abs(t - e), 360);
function pf(e) {
  return e &&
    typeof e == `object` &&
    `className` in e &&
    typeof e.className == `string`
    ? e.className
    : ``;
}
var mf = (e, t) => {
    if (R.isValidElement(e)) return R.cloneElement(e, t);
    if (typeof e == `function`) return e(t);
    var n = h(
      `recharts-pie-label-line`,
      typeof e == `boolean` ? `` : e.className,
    );
    return R.createElement(ot, of({}, t, { type: `linear`, className: n }));
  },
  hf = (e, t, n) => {
    if (R.isValidElement(e)) return R.cloneElement(e, t);
    var r = n;
    if (typeof e == `function` && ((r = e(t)), R.isValidElement(r))) return r;
    var i = h(`recharts-pie-label-text`, pf(e));
    return R.createElement(
      Ie,
      of({}, t, { alignmentBaseline: `middle`, className: i }),
      r,
    );
  };
function gf(e) {
  var { sectors: t, props: n, showLabels: r } = e,
    { label: i, labelLine: a, dataKey: o } = n;
  if (!r || !i || !t) return null;
  var s = Ye(n),
    c = Ae(i),
    l = Ae(a),
    u =
      (typeof i == `object` &&
        `offsetRadius` in i &&
        typeof i.offsetRadius == `number` &&
        i.offsetRadius) ||
      20,
    d = t.map((e, t) => {
      var n = (e.startAngle + e.endAngle) / 2,
        r = v(e.cx, e.cy, e.outerRadius + u, n),
        d = z(
          z(z(z({}, s), e), {}, { stroke: `none` }, c),
          {},
          { index: t, textAnchor: lf(r.x, e.cx) },
          r,
        ),
        f = z(
          z(z(z({}, s), e), {}, { fill: `none`, stroke: e.fill }, l),
          {},
          {
            index: t,
            points: [v(e.cx, e.cy, e.outerRadius, n), r],
            key: `line`,
          },
        );
      return R.createElement(
        S,
        { key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}` },
        a && mf(a, f),
        hf(i, d, Le(e, o)),
      );
    });
  return R.createElement(S, { className: `recharts-pie-labels` }, d);
}
function _f(e) {
  var { sectors: t, props: n, showLabels: r } = e,
    { label: i } = n;
  return typeof i == `object` && i && `position` in i
    ? R.createElement(Pe, { label: i })
    : R.createElement(gf, { sectors: t, props: n, showLabels: r });
}
function vf(e) {
  var { sectors: t, activeShape: n, inactiveShape: r, allOtherPieProps: i } = e,
    a = b(_),
    { onMouseEnter: o, onClick: s, onMouseLeave: c } = i,
    l = $d(i, Xd),
    u = mt(o, i.dataKey),
    d = dt(c),
    f = wt(s, i.dataKey);
  return t == null || t.length === 0
    ? null
    : R.createElement(
        R.Fragment,
        null,
        t.map((e, o) => {
          if (e?.startAngle === 0 && e?.endAngle === 0 && t.length !== 1)
            return null;
          var s = n && String(o) === a,
            c = s ? n : a ? r : null,
            p = z(
              z({}, e),
              {},
              { stroke: e.stroke, tabIndex: -1, [Fe]: o, [Kt]: i.dataKey },
            );
          return R.createElement(
            S,
            of(
              {
                key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${o}`,
                tabIndex: -1,
                className: `recharts-pie-sector`,
              },
              Ne(l, e, o),
              {
                onMouseEnter: u(e, o),
                onMouseLeave: d(e, o),
                onClick: f(e, o),
              },
            ),
            R.createElement(
              Ze,
              of({ option: c, isActive: s, shapeType: `sector` }, p),
            ),
          );
        }),
      );
}
function yf(e) {
  var { pieSettings: t, displayedData: n, cells: r, offset: i } = e,
    {
      cornerRadius: a,
      startAngle: o,
      endAngle: s,
      dataKey: c,
      nameKey: l,
      tooltipType: u,
    } = t,
    d = Math.abs(t.minAngle),
    f = ff(o, s),
    p = Math.abs(f),
    m = n.length <= 1 ? 0 : (t.paddingAngle ?? 0),
    h = n.filter((e) => Le(e, c, 0) !== 0).length,
    g = (p >= 360 ? h : h - 1) * m,
    _ = p - h * d - g,
    ee = n.reduce((e, t) => {
      var n = Le(t, c, 0);
      return e + (ze(n) ? n : 0);
    }, 0),
    y;
  if (ee > 0) {
    var te;
    y = n.map((e, n) => {
      var s = Le(e, c, 0),
        p = Le(e, l, n),
        h = df(t, i, e),
        g = (ze(s) ? s : 0) / ee,
        y,
        ne = z(z({}, e), r && r[n] && r[n].props);
      y = n ? te.endAngle + Ue(f) * m * (s === 0 ? 0 : 1) : o;
      var re = y + Ue(f) * ((s === 0 ? 0 : d) + g * _),
        ie = (y + re) / 2,
        ae = (h.innerRadius + h.outerRadius) / 2,
        oe = [{ name: p, value: s, payload: ne, dataKey: c, type: u }],
        se = v(h.cx, h.cy, ae, ie);
      return (
        (te = z(
          z(
            z(
              z({}, t.presentationProps),
              {},
              {
                percent: g,
                cornerRadius: a,
                name: p,
                tooltipPayload: oe,
                midAngle: ie,
                middleRadius: ae,
                tooltipPosition: se,
              },
              ne,
            ),
            h,
          ),
          {},
          {
            value: s,
            startAngle: y,
            endAngle: re,
            payload: ne,
            paddingAngle: Ue(f) * m,
          },
        )),
        te
      );
    });
  }
  return y;
}
function bf(e) {
  var { showLabels: t, sectors: n, children: r } = e,
    i = (0, R.useMemo)(
      () =>
        !t || !n
          ? []
          : n.map((e) => ({
              value: e.value,
              payload: e.payload,
              clockWise: !1,
              parentViewBox: void 0,
              viewBox: {
                cx: e.cx,
                cy: e.cy,
                innerRadius: e.innerRadius,
                outerRadius: e.outerRadius,
                startAngle: e.startAngle,
                endAngle: e.endAngle,
                clockWise: !1,
              },
              fill: e.fill,
            })),
      [n, t],
    );
  return R.createElement(te, { value: t ? i : void 0 }, r);
}
function xf(e) {
  var { props: t, previousSectorsRef: n } = e,
    {
      sectors: r,
      isAnimationActive: i,
      animationBegin: a,
      animationDuration: o,
      animationEasing: s,
      activeShape: c,
      inactiveShape: l,
      onAnimationStart: u,
      onAnimationEnd: d,
    } = t,
    f = it(t, `recharts-pie-`),
    p = n.current,
    [m, h] = (0, R.useState)(!1),
    g = (0, R.useCallback)(() => {
      (typeof d == `function` && d(), h(!1));
    }, [d]),
    _ = (0, R.useCallback)(() => {
      (typeof u == `function` && u(), h(!0));
    }, [u]);
  return R.createElement(
    bf,
    { showLabels: !m, sectors: r },
    R.createElement(
      Ct,
      {
        animationId: f,
        begin: a,
        duration: o,
        isActive: i,
        easing: s,
        onAnimationStart: _,
        onAnimationEnd: g,
        key: f,
      },
      (e) => {
        var i = [],
          a = (r && r[0])?.startAngle;
        return (
          r?.forEach((t, n) => {
            var r = p && p[n],
              o = n > 0 ? (0, Yd.default)(t, `paddingAngle`, 0) : 0;
            if (r) {
              var s = Ve(
                  r.endAngle - r.startAngle,
                  t.endAngle - t.startAngle,
                  e,
                ),
                c = z(z({}, t), {}, { startAngle: a + o, endAngle: a + s + o });
              (i.push(c), (a = c.endAngle));
            } else {
              var { endAngle: l, startAngle: u } = t,
                d = Ve(0, l - u, e),
                f = z(z({}, t), {}, { startAngle: a + o, endAngle: a + d + o });
              (i.push(f), (a = f.endAngle));
            }
          }),
          (n.current = i),
          R.createElement(
            S,
            null,
            R.createElement(vf, {
              sectors: i,
              activeShape: c,
              inactiveShape: l,
              allOtherPieProps: t,
            }),
          )
        );
      },
    ),
    R.createElement(_f, { showLabels: !m, sectors: r, props: t }),
    t.children,
  );
}
var Sf = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: `ease`,
  cx: `50%`,
  cy: `50%`,
  dataKey: `value`,
  endAngle: 360,
  fill: `#808080`,
  hide: !1,
  innerRadius: 0,
  isAnimationActive: !ut.isSsr,
  labelLine: !0,
  legendType: `rect`,
  minAngle: 0,
  nameKey: `name`,
  outerRadius: `80%`,
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: `#fff`,
};
function Cf(e) {
  var { id: t } = e,
    n = $d(e, Zd),
    { hide: r, className: i, rootTabIndex: a } = e,
    o = (0, R.useMemo)(() => Vt(e.children, re), [e.children]),
    s = b((e) => Jd(e, t, o)),
    c = (0, R.useRef)(null),
    l = h(`recharts-pie`, i);
  return r || s == null
    ? ((c.current = null), R.createElement(S, { tabIndex: a, className: l }))
    : R.createElement(
        R.Fragment,
        null,
        R.createElement(At, { fn: cf, args: z(z({}, e), {}, { sectors: s }) }),
        R.createElement(
          S,
          { tabIndex: a, className: l },
          R.createElement(xf, {
            props: z(z({}, n), {}, { sectors: s }),
            previousSectorsRef: c,
          }),
        ),
      );
}
function wf(e) {
  var t = Bt(e, Sf),
    { id: n } = t,
    r = $d(t, Qd),
    i = Ye(r);
  return R.createElement(at, { id: n, type: `pie` }, (e) =>
    R.createElement(
      R.Fragment,
      null,
      R.createElement(zt, {
        type: `pie`,
        id: e,
        data: r.data,
        dataKey: r.dataKey,
        hide: r.hide,
        angleAxisId: 0,
        radiusAxisId: 0,
        name: r.name,
        nameKey: r.nameKey,
        tooltipType: r.tooltipType,
        legendType: r.legendType,
        fill: r.fill,
        cx: r.cx,
        cy: r.cy,
        startAngle: r.startAngle,
        endAngle: r.endAngle,
        paddingAngle: r.paddingAngle,
        minAngle: r.minAngle,
        innerRadius: r.innerRadius,
        outerRadius: r.outerRadius,
        cornerRadius: r.cornerRadius,
        presentationProps: i,
        maxRadius: t.maxRadius,
      }),
      R.createElement(sf, of({}, r, { id: e })),
      R.createElement(Cf, of({}, r, { id: e })),
    ),
  );
}
wf.displayName = `Pie`;
function Tf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ef(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Tf(Object(n), !0).forEach(function (t) {
          Df(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Tf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Df(e, t, n) {
  return (
    (t = Of(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Of(e) {
  var t = kf(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function kf(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Af = (e) => {
  var { point: t, childIndex: n, mainColor: r, activeDot: i, dataKey: a } = e;
  if (i === !1 || t.x == null || t.y == null) return null;
  var o = Ef(
      Ef(
        {
          index: n,
          dataKey: a,
          cx: t.x,
          cy: t.y,
          r: 4,
          fill: r ?? `none`,
          strokeWidth: 2,
          stroke: `#fff`,
          payload: t.payload,
          value: t.value,
        },
        Ae(i),
      ),
      xe(i),
    ),
    s = (0, R.isValidElement)(i)
      ? (0, R.cloneElement)(i, o)
      : typeof i == `function`
        ? i(o)
        : R.createElement(Iu, o);
  return R.createElement(S, { className: `recharts-active-dot` }, s);
};
function jf(e) {
  var { points: t, mainColor: n, activeDot: r, itemDataKey: i } = e,
    a = b(_),
    o = St();
  if (t == null || o == null) return null;
  var s = t.find((e) => o.includes(e.payload));
  return fe(s)
    ? null
    : Af({
        point: s,
        childIndex: Number(a),
        mainColor: n,
        dataKey: i,
        activeDot: r,
      });
}
function Mf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Nf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Mf(Object(n), !0).forEach(function (t) {
          Pf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Mf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Pf(e, t, n) {
  return (
    (t = Ff(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Ff(e) {
  var t = If(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function If(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Lf = (e, t) => Zu(e, `radiusAxis`, t),
  Rf = x([Lf], (e) => {
    if (e != null) return { scale: e };
  }),
  zf = x([Pt, Lf], (e, t) => {
    if (e != null && t != null) return Nf(Nf({}, e), {}, { scale: t });
  }),
  Bf = (e, t, n, r) => $u(e, `radiusAxis`, t, r),
  Vf = (e, t, n) => ct(e, n),
  Hf = (e, t, n) => Zu(e, `angleAxis`, n),
  Uf = x([Vf, Hf], (e, t) => {
    if (e != null && t != null) return Nf(Nf({}, e), {}, { scale: t });
  }),
  Wf = (e, t, n, r) => $u(e, `angleAxis`, n, r),
  Gf = x([Vf, Hf, Dt], (e, t, n) => {
    if (n != null && t != null)
      return { scale: t, type: e.type, dataKey: e.dataKey, cx: n.cx, cy: n.cy };
  }),
  Kf = (e, t, n, r, i) => i,
  qf = x([ht, zf, Bf, Uf, Wf], (e, t, n, r, i) =>
    se(e, `radiusAxis`) ? ne(t, n, !1) : ne(r, i, !1),
  ),
  Jf = x([Lu, Kf], (e, t) => {
    if (e != null)
      return e.find((e) => e.type === `radar` && t === e.id)?.dataKey;
  }),
  Yf = x([Rf, Gf, It, Jf, qf], (e, t, n, r, i) => {
    var { chartData: a, dataStartIndex: o, dataEndIndex: s } = n;
    if (e != null && t != null && a != null && i != null && r != null)
      return lp({
        radiusAxis: e,
        angleAxis: t,
        displayedData: a.slice(o, s + 1),
        dataKey: r,
        bandSize: i,
      });
  }),
  Xf = e(Ut()),
  Zf = [`id`];
function Qf(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = $f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function $f(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function ep(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ep(Object(n), !0).forEach(function (t) {
          tp(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ep(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function tp(e, t, n) {
  return (
    (t = np(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function np(e) {
  var t = rp(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function rp(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function ip() {
  return (
    (ip = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ip.apply(null, arguments)
  );
}
function ap(e, t) {
  return e && e !== `none` ? e : t;
}
var op = (e) => {
  var { dataKey: t, name: n, stroke: r, fill: i, legendType: a, hide: o } = e;
  return [
    {
      inactive: o,
      dataKey: t,
      type: a,
      color: ap(r, i),
      value: Wt(n, t),
      payload: e,
    },
  ];
};
function sp(e) {
  var {
    dataKey: t,
    stroke: n,
    strokeWidth: r,
    fill: i,
    name: a,
    hide: o,
    tooltipType: s,
  } = e;
  return {
    dataDefinedOnItem: void 0,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: r,
      fill: i,
      nameKey: void 0,
      dataKey: t,
      name: Wt(a, t),
      hide: o,
      type: s,
      color: ap(n, i),
      unit: ``,
    },
  };
}
function cp(e, t) {
  return R.isValidElement(e)
    ? R.cloneElement(e, t)
    : typeof e == `function`
      ? e(t)
      : R.createElement(
          Iu,
          ip({}, t, {
            className: h(
              `recharts-radar-dot`,
              typeof e == `boolean` ? `` : e.className,
            ),
          }),
        );
}
function lp(e) {
  var {
      radiusAxis: t,
      angleAxis: n,
      displayedData: r,
      dataKey: i,
      bandSize: a,
    } = e,
    { cx: o, cy: s } = n,
    c = !1,
    l = [],
    u = n.type === `number` ? 0 : (a ?? 0);
  r.forEach((e, r) => {
    var a = Le(e, n.dataKey, r),
      d = Le(e, i),
      f = n.scale(a) + u,
      p = Array.isArray(d) ? (0, Xf.default)(d) : d,
      m = fe(p) ? void 0 : t.scale(p);
    (Array.isArray(d) && d.length >= 2 && (c = !0),
      l.push(
        B(
          B({}, v(o, s, m, f)),
          {},
          { name: a, value: d, cx: o, cy: s, radius: m, angle: f, payload: e },
        ),
      ));
  });
  var d = [];
  return (
    c &&
      l.forEach((e) => {
        if (Array.isArray(e.value)) {
          var n = e.value[0],
            r = fe(n) ? void 0 : t.scale(n);
          d.push(B(B({}, e), {}, { radius: r }, v(o, s, r, e.angle)));
        } else d.push(e);
      }),
    { points: l, isRange: c, baseLinePoints: d }
  );
}
function up(e) {
  var { points: t, props: n } = e,
    { dot: r, dataKey: i } = n;
  if (!r) return null;
  var { id: a } = n,
    o = Qf(n, Zf),
    s = Ye(o),
    c = Ge(r),
    l = t.map((e, t) =>
      cp(
        r,
        B(
          B(B({ key: `dot-${t}`, r: 3 }, s), c),
          {},
          { dataKey: i, cx: e.x, cy: e.y, index: t, payload: e },
        ),
      ),
    );
  return R.createElement(S, { className: `recharts-radar-dots` }, l);
}
function dp(e) {
  var { showLabels: t, points: n, children: r } = e,
    i = n.map((e) => {
      var t = { x: e.x, y: e.y, width: 0, height: 0 };
      return B(
        B({}, t),
        {},
        {
          value: e.value,
          payload: e.payload,
          parentViewBox: void 0,
          viewBox: t,
          fill: void 0,
        },
      );
    });
  return R.createElement(Gt, { value: t ? i : null }, r);
}
function fp(e) {
  var { points: t, baseLinePoints: n, props: r } = e;
  if (t == null) return null;
  var { shape: i, isRange: a, connectNulls: o } = r,
    s = R.isValidElement(i)
      ? R.cloneElement(i, B(B({}, r), {}, { points: t }))
      : typeof i == `function`
        ? i(B(B({}, r), {}, { points: t }))
        : R.createElement(
            Pu,
            ip({}, qe(r), {
              onMouseEnter: (e) => {
                var { onMouseEnter: t } = r;
                t && t(r, e);
              },
              onMouseLeave: (e) => {
                var { onMouseLeave: t } = r;
                t && t(r, e);
              },
              points: t,
              baseLinePoints: a ? n : void 0,
              connectNulls: o,
            }),
          );
  return R.createElement(
    S,
    { className: `recharts-radar-polygon` },
    s,
    R.createElement(up, { props: r, points: t }),
  );
}
var pp = (e, t, n) => (r, i) => {
  var a = e && e[Math.floor(i * t)];
  return a
    ? B(B({}, r), {}, { x: Ve(a.x, r.x, n), y: Ve(a.y, r.y, n) })
    : B(B({}, r), {}, { x: Ve(r.cx, r.x, n), y: Ve(r.cy, r.y, n) });
};
function mp(e) {
  var { props: t, previousPointsRef: n, previousBaseLinePointsRef: r } = e,
    {
      points: i,
      baseLinePoints: a,
      isAnimationActive: o,
      animationBegin: s,
      animationDuration: c,
      animationEasing: l,
      onAnimationEnd: u,
      onAnimationStart: d,
    } = t,
    f = n.current,
    p = r.current,
    m = f && f.length / i.length,
    h = p && p.length / a.length,
    g = it(t, `recharts-radar-`),
    [_, v] = (0, R.useState)(!1),
    ee = !_,
    y = (0, R.useCallback)(() => {
      (typeof u == `function` && u(), v(!1));
    }, [u]),
    te = (0, R.useCallback)(() => {
      (typeof d == `function` && d(), v(!0));
    }, [d]);
  return R.createElement(
    dp,
    { showLabels: ee, points: i },
    R.createElement(
      Ct,
      {
        animationId: g,
        begin: s,
        duration: c,
        isActive: o,
        easing: l,
        key: `radar-${g}`,
        onAnimationEnd: y,
        onAnimationStart: te,
      },
      (e) => {
        var o = e === 1 ? i : i.map(pp(f, m, e)),
          s = e === 1 ? a : a?.map(pp(p, h, e));
        return (
          e > 0 && ((n.current = o), (r.current = s)),
          R.createElement(fp, { points: o, baseLinePoints: s, props: t })
        );
      },
    ),
    R.createElement(Pe, { label: t.label }),
    t.children,
  );
}
function hp(e) {
  var t = (0, R.useRef)(void 0),
    n = (0, R.useRef)(void 0);
  return R.createElement(mp, {
    props: e,
    previousPointsRef: t,
    previousBaseLinePointsRef: n,
  });
}
var gp = {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: !1,
    activeDot: !0,
    dot: !1,
    legendType: `rect`,
    isAnimationActive: !ut.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  _p = class extends R.PureComponent {
    render() {
      var { hide: e, className: t, points: n } = this.props;
      if (e || n == null) return null;
      var r = h(`recharts-radar`, t);
      return R.createElement(
        R.Fragment,
        null,
        R.createElement(S, { className: r }, R.createElement(hp, this.props)),
        R.createElement(jf, {
          points: n,
          mainColor: ap(this.props.stroke, this.props.fill),
          itemDataKey: this.props.dataKey,
          activeDot: this.props.activeDot,
        }),
      );
    }
  };
function vp(e) {
  var t = Yt(),
    n = b((n) => Yf(n, e.radiusAxisId, e.angleAxisId, t, e.id));
  return R.createElement(
    _p,
    ip({}, e, {
      points: n?.points,
      baseLinePoints: n?.baseLinePoints,
      isRange: n?.isRange,
    }),
  );
}
var yp = class extends R.PureComponent {
  render() {
    return R.createElement(at, { id: this.props.id, type: `radar` }, (e) =>
      R.createElement(
        R.Fragment,
        null,
        R.createElement(zt, {
          type: `radar`,
          id: e,
          data: void 0,
          dataKey: this.props.dataKey,
          hide: this.props.hide,
          angleAxisId: this.props.angleAxisId,
          radiusAxisId: this.props.radiusAxisId,
        }),
        R.createElement(lt, { legendPayload: op(this.props) }),
        R.createElement(At, { fn: sp, args: this.props }),
        R.createElement(vp, ip({}, this.props, { id: e })),
      ),
    );
  }
};
(tp(yp, `displayName`, `Radar`), tp(yp, `defaultProps`, gp));
function bp(e) {
  var t = Oe();
  return (
    (0, R.useEffect)(() => {
      t(Nt(e));
    }, [t, e]),
    null
  );
}
var xp = [`layout`];
function Sp() {
  return (
    (Sp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Sp.apply(null, arguments)
  );
}
function Cp(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = wp(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]),
        t.indexOf(n) === -1 &&
          {}.propertyIsEnumerable.call(e, n) &&
          (i[n] = e[n]));
  }
  return i;
}
function wp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Tp = {
    accessibilityLayer: !0,
    stackOffset: `none`,
    barCategoryGap: `10%`,
    barGap: 4,
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
    reverseStackOrder: !1,
    syncMethod: `index`,
    layout: `radial`,
    responsive: !1,
  },
  Ep = (0, R.forwardRef)(function (e, t) {
    var n = Bt(e.categoricalChartProps, Tp),
      { layout: r } = n,
      i = Cp(n, xp),
      {
        chartName: a,
        defaultTooltipEventType: o,
        validateTooltipEventTypes: s,
        tooltipPayloadSearcher: c,
      } = e,
      l = {
        chartName: a,
        defaultTooltipEventType: o,
        validateTooltipEventTypes: s,
        tooltipPayloadSearcher: c,
        eventEmitter: void 0,
      };
    return R.createElement(
      Et,
      { preloadedState: { options: l }, reduxStoreName: n.id ?? a },
      R.createElement(Ft, { chartData: n.data }),
      R.createElement(Lt, { layout: r, margin: n.margin }),
      R.createElement(st, {
        accessibilityLayer: n.accessibilityLayer,
        barCategoryGap: n.barCategoryGap,
        maxBarSize: n.maxBarSize,
        stackOffset: n.stackOffset,
        barGap: n.barGap,
        barSize: n.barSize,
        syncId: n.syncId,
        syncMethod: n.syncMethod,
        className: n.className,
      }),
      R.createElement(bp, {
        cx: n.cx,
        cy: n.cy,
        startAngle: n.startAngle,
        endAngle: n.endAngle,
        innerRadius: n.innerRadius,
        outerRadius: n.outerRadius,
      }),
      R.createElement(g, Sp({}, i, { ref: t })),
    );
  }),
  Dp = [`item`],
  Op = {
    layout: `centric`,
    startAngle: 0,
    endAngle: 360,
    cx: `50%`,
    cy: `50%`,
    innerRadius: 0,
    outerRadius: `80%`,
  },
  kp = (0, R.forwardRef)((e, t) => {
    var n = Bt(e, Op);
    return R.createElement(Ep, {
      chartName: `PieChart`,
      defaultTooltipEventType: `item`,
      validateTooltipEventTypes: Dp,
      tooltipPayloadSearcher: bt,
      categoricalChartProps: n,
      ref: t,
    });
  }),
  Ap = [`axis`],
  jp = {
    layout: `centric`,
    startAngle: 90,
    endAngle: -270,
    cx: `50%`,
    cy: `50%`,
    innerRadius: 0,
    outerRadius: `80%`,
  },
  Mp = (0, R.forwardRef)((e, t) => {
    var n = Bt(e, jp);
    return R.createElement(Ep, {
      chartName: `RadarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: Ap,
      tooltipPayloadSearcher: bt,
      categoricalChartProps: n,
      ref: t,
    });
  }),
  Np = [`axis`],
  Pp = (0, R.forwardRef)((e, t) =>
    R.createElement(je, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: Np,
      tooltipPayloadSearcher: bt,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  V = e(s(), 1),
  Fp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_playtime_seconds || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_playtime_seconds: {
              n: 1,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            total_sessions: { n: 20, br: P.readUint32, bw: F.writeUint32 },
            vr_sessions: { n: 21, br: P.readUint32, bw: F.writeUint32 },
            deck_sessions: { n: 22, br: P.readUint32, bw: F.writeUint32 },
            controller_sessions: { n: 23, br: P.readUint32, bw: F.writeUint32 },
            linux_sessions: { n: 24, br: P.readUint32, bw: F.writeUint32 },
            macos_sessions: { n: 25, br: P.readUint32, bw: F.writeUint32 },
            windows_sessions: { n: 26, br: P.readUint32, bw: F.writeUint32 },
            total_playtime_percentagex100: {
              n: 27,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            vr_playtime_percentagex100: {
              n: 28,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            deck_playtime_percentagex100: {
              n: 29,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            controller_playtime_percentagex100: {
              n: 30,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            linux_playtime_percentagex100: {
              n: 31,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            macos_playtime_percentagex100: {
              n: 32,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            windows_playtime_percentagex100: {
              n: 33,
              br: P.readUint32,
              bw: F.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStats`;
    }
  },
  Ip = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: P.readUint32, bw: F.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreakGame`;
    }
  },
  Lp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.longest_consecutive_days || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            longest_consecutive_days: {
              n: 1,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            rtime_start: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            streak_games: { n: 3, c: Ip, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreak`;
    }
  },
  Rp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_rank || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_rank: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            vr_rank: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            deck_rank: { n: 3, br: P.readUint32, bw: F.writeUint32 },
            controller_rank: { n: 4, br: P.readUint32, bw: F.writeUint32 },
            linux_rank: { n: 5, br: P.readUint32, bw: F.writeUint32 },
            mac_rank: { n: 6, br: P.readUint32, bw: F.writeUint32 },
            windows_rank: { n: 7, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeRanks`;
    }
  },
  zp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            stats: { n: 2, c: Fp },
            playtime_streak: { n: 3, c: Lp },
            playtime_ranks: { n: 4, c: Rp },
            rtime_first_played: { n: 5, br: P.readUint32, bw: F.writeUint32 },
            relative_game_stats: { n: 6, c: Fp },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePlaytimeStats`;
    }
  },
  Bp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            new_this_year: { n: 2, br: P.readBool, bw: F.writeBool },
            rtime_first_played_lifetime: {
              n: 3,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            demo: { n: 4, br: P.readBool, bw: F.writeBool },
            playtest: { n: 5, br: P.readBool, bw: F.writeBool },
            played_during_early_access: {
              n: 6,
              br: P.readBool,
              bw: F.writeBool,
            },
            played_vr: { n: 7, br: P.readBool, bw: F.writeBool },
            played_deck: { n: 8, br: P.readBool, bw: F.writeBool },
            played_controller: { n: 9, br: P.readBool, bw: F.writeBool },
            played_linux: { n: 10, br: P.readBool, bw: F.writeBool },
            played_mac: { n: 11, br: P.readBool, bw: F.writeBool },
            played_windows: { n: 12, br: P.readBool, bw: F.writeBool },
            total_playtime_percentagex100: {
              n: 13,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            total_sessions: { n: 14, br: P.readUint32, bw: F.writeUint32 },
            rtime_release_date: { n: 15, br: P.readUint32, bw: F.writeUint32 },
            parent_appid: { n: 16, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameSummary`;
    }
  },
  Vp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            total_playtime_percentagex100: {
              n: 2,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            relative_playtime_percentagex100: {
              n: 3,
              br: P.readUint32,
              bw: F.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSimpleGameSummary`;
    }
  },
  Hp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            rank: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            relative_playtime_percentagex100: {
              n: 3,
              br: P.readUint32,
              bw: F.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRank`;
    }
  },
  Up = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category: { n: 1, br: P.readString, bw: F.writeString },
            rankings: { n: 2, c: Hp, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CRankingCategory`;
    }
  },
  Wp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_ranking || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_ranking: { n: 1, c: Up },
            vr_ranking: { n: 2, c: Up },
            deck_ranking: { n: 3, c: Up },
            controller_ranking: { n: 4, c: Up },
            linux_ranking: { n: 5, c: Up },
            mac_ranking: { n: 6, c: Up },
            windows_ranking: { n: 7, c: Up },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRankings`;
    }
  },
  Gp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_achievements || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_achievements: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            total_games_with_achievements: {
              n: 3,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            total_rare_achievements: {
              n: 4,
              br: P.readUint32,
              bw: F.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeSummaryStats`;
    }
  },
  Kp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: qp, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats`;
    }
  },
  qp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tag_id || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tag_id: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            tag_weight: { n: 2, br: P.readFloat, bw: F.writeFloat },
            tag_weight_pre_selection: {
              n: 3,
              br: P.readFloat,
              bw: F.writeFloat,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats_Tag`;
    }
  },
  Jp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.screenshots_shared || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            screenshots_shared: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            gifts_sent: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            loyalty_reactions: { n: 3, br: P.readUint32, bw: F.writeUint32 },
            written_reviews: { n: 4, br: P.readUint32, bw: F.writeUint32 },
            guides_submitted: { n: 5, br: P.readUint32, bw: F.writeUint32 },
            workshop_contributions: {
              n: 6,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            badges_earned: { n: 7, br: P.readUint32, bw: F.writeUint32 },
            friends_added: { n: 8, br: P.readUint32, bw: F.writeUint32 },
            forum_posts: { n: 9, br: P.readUint32, bw: F.writeUint32 },
            workshop_subscriptions: {
              n: 10,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            guide_subscribers: { n: 11, br: P.readUint32, bw: F.writeUint32 },
            workshop_subscribers: {
              n: 12,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            games_played_pct: { n: 13, br: P.readUint32, bw: F.writeUint32 },
            achievements_pct: { n: 14, br: P.readUint32, bw: F.writeUint32 },
            game_streak_pct: { n: 15, br: P.readUint32, bw: F.writeUint32 },
            games_played_avg: { n: 16, br: P.readUint32, bw: F.writeUint32 },
            achievements_avg: { n: 17, br: P.readUint32, bw: F.writeUint32 },
            game_streak_avg: { n: 18, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeByNumbers`;
    }
  },
  Yp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_stats || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [2, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_stats: { n: 1, c: Fp },
            games: { n: 2, c: zp, r: !0, q: !0 },
            playtime_streak: { n: 3, c: Lp },
            months: { n: 5, c: Xp, r: !0, q: !0 },
            game_summary: { n: 6, c: Bp, r: !0, q: !0 },
            demos_played: { n: 7, br: P.readUint32, bw: F.writeUint32 },
            game_rankings: { n: 8, c: Wp },
            playtests_played: { n: 9, br: P.readUint32, bw: F.writeUint32 },
            summary_stats: { n: 10, c: Gp },
            substantial: { n: 11, d: !0, br: P.readBool, bw: F.writeBool },
            tag_stats: { n: 12, c: Kp },
            by_numbers: { n: 13, c: Jp },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeStats`;
    }
  },
  Xp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_month || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [4, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_month: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            stats: { n: 2, c: Fp },
            appid: { n: 4, c: zp, r: !0, q: !0 },
            relative_monthly_stats: { n: 5, c: Fp },
            game_summary: { n: 6, c: Vp, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMonthlyPlaytimeStats`;
    }
  },
  Zp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.account_id || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_id: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            year: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            playtime_stats: { n: 3, c: Yp },
            privacy_state: { n: 4, br: P.readEnum, bw: F.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserYearInReviewStats`;
    }
  },
  Qp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.from_dbo || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            from_dbo: { n: 1, br: P.readBool, bw: F.writeBool },
            overall_time_ms: {
              n: 2,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
            dbo_load_ms: {
              n: 3,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
            query_execution_ms: {
              n: 4,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
            message_population_ms: {
              n: 5,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
            dbo_lock_load_ms: {
              n: 6,
              br: P.readUint64String,
              bw: F.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CYearInReviewPerformanceStats`;
    }
  },
  $p = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.statid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            statid: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            fieldid: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            achievement_name_internal: {
              n: 3,
              br: P.readString,
              bw: F.writeString,
            },
            rtime_unlocked: { n: 4, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAchievementDetails`;
    }
  },
  em = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            achievements: { n: 2, c: $p, r: !0, q: !0 },
            all_time_unlocked_achievements: {
              n: 3,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            unlocked_more_in_future: { n: 4, br: P.readBool, bw: F.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameAchievements`;
    }
  },
  tm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.median_achievements || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            median_achievements: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            median_games: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            median_streak: { n: 3, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPercentiles`;
    }
  },
  nm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.new_releases || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            new_releases: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            recent_releases: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            classic_releases: { n: 3, br: P.readUint32, bw: F.writeUint32 },
            recent_cutoff_year: { n: 4, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPlaytimeDistribution`;
    }
  },
  rm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.games_played || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            games_played: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            unlocked_achievements: {
              n: 2,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            longest_streak: { n: 3, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPreviousYIRSummaryData`;
    }
  },
  im = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            year: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            force_regenerate: { n: 3, br: P.readBool, bw: F.writeBool },
            access_source: { n: 4, br: P.readInt32, bw: F.writeInt32 },
            fetch_previous_year_summary: {
              n: 5,
              d: !1,
              br: P.readBool,
              bw: F.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Request`;
    }
  },
  am = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: Zp },
            performance_stats: { n: 2, c: Qp },
            percentiles: { n: 3, c: tm },
            distribution: { n: 4, c: nm },
            previous_year_summary: { n: 5, c: rm },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Response`;
    }
  },
  om = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            year: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            privacy_state: { n: 3, br: P.readEnum, bw: F.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Request`;
    }
  },
  sm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { privacy_state: { n: 1, br: P.readEnum, bw: F.writeEnum } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Response`;
    }
  },
  cm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            year: { n: 2, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Request`;
    }
  },
  lm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            privacy_state: { n: 1, br: P.readEnum, bw: F.writeEnum },
            generated_value: { n: 2, br: P.readBool, bw: F.writeBool },
            steamid: {
              n: 3,
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            rt_privacy_updated: { n: 4, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Response`;
    }
  },
  um = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [3], null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            year: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: P.readUint32,
              pbr: P.readPackedUint32,
              bw: F.writeRepeatedUint32,
            },
            total_only: { n: 4, br: P.readBool, bw: F.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Request`;
    }
  },
  dm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_achievements || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_achievements: { n: 1, c: em, r: !0, q: !0 },
            total_achievements: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            total_rare_achievements: {
              n: 3,
              br: P.readUint32,
              bw: F.writeUint32,
            },
            total_games_with_achievements: {
              n: 4,
              br: P.readUint32,
              bw: F.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Response`;
    }
  },
  fm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [3], null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            year: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: P.readUint32,
              pbr: P.readPackedUint32,
              bw: F.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Request`;
    }
  },
  pm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: hm, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response`;
    }
  },
  mm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_url || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_url: { n: 1, br: P.readString, bw: F.writeString },
            preview_url: { n: 2, br: P.readString, bw: F.writeString },
            image_width: { n: 3, br: P.readUint32, bw: F.writeUint32 },
            image_height: { n: 4, br: P.readUint32, bw: F.writeUint32 },
            maybe_inappropriate_sex: { n: 5, br: P.readBool, bw: F.writeBool },
            maybe_inappropriate_violence: {
              n: 6,
              br: P.readBool,
              bw: F.writeBool,
            },
            visibility: { n: 7, br: P.readUint32, bw: F.writeUint32 },
            spoiler_tag: { n: 8, br: P.readBool, bw: F.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_Screenshot`;
    }
  },
  hm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            screenshots: { n: 2, c: mm, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp`;
    }
  },
  gm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            gid: { n: 2, br: P.readFixed64String, bw: F.writeFixed64String },
            type: { n: 3, br: P.readEnum, bw: F.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Request`;
    }
  },
  _m = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.jsondata || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { jsondata: { n: 1, br: P.readString, bw: F.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Response`;
    }
  },
  vm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [2], null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            gids: {
              n: 2,
              r: !0,
              q: !0,
              br: P.readFixed64String,
              pbr: P.readPackedFixed64String,
              bw: F.writeRepeatedFixed64String,
            },
            type: { n: 3, br: P.readEnum, bw: F.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Request`;
    }
  },
  ym = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: bm, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response`;
    }
  },
  bm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: P.readFixed64String, bw: F.writeFixed64String },
            jsondata: { n: 2, br: P.readString, bw: F.writeString },
            steamid: {
              n: 3,
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response_Entry`;
    }
  },
  xm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: P.readFixed64String, bw: F.writeFixed64String },
            type: { n: 2, br: P.readEnum, bw: F.writeEnum },
            count: { n: 3, br: P.readUint32, bw: F.writeUint32 },
            last_account_index: { n: 4, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Request`;
    }
  },
  Sm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: Cm, r: !0, q: !0 },
            last_account_index: { n: 2, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response`;
    }
  },
  Cm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: P.readFixed64String, bw: F.writeFixed64String },
            jsondata: { n: 2, br: P.readString, bw: F.writeString },
            steamid: {
              n: 3,
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response_Entry`;
    }
  },
  wm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            year: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            return_private: { n: 3, br: P.readBool, bw: F.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Request`;
    }
  },
  Tm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            privacy_state: { n: 3, br: P.readEnum, bw: F.writeEnum },
            rt_privacy_updated: { n: 4, br: P.readUint32, bw: F.writeUint32 },
            privacy_override: { n: 5, br: P.readBool, bw: F.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendSharedYearInView`;
    }
  },
  Em = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.friend_shares || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            friend_shares: { n: 1, c: Tm, r: !0, q: !0 },
            year: { n: 2, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Response`;
    }
  },
  Dm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
            year: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            language: { n: 3, br: P.readString, bw: F.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Request`;
    }
  },
  Om = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || O(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: km, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response`;
    }
  },
  km = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: P.readString, bw: F.writeString },
            url_path: { n: 2, br: P.readString, bw: F.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response_Image`;
    }
  },
  Am = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: P.readFixed64String,
              bw: F.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Request`;
    }
  },
  jm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.year || O(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            year: { n: 1, br: P.readUint32, bw: F.writeUint32 },
            month: { n: 2, br: P.readUint32, bw: F.writeUint32 },
            games_played: { n: 4, br: P.readUint32, bw: F.writeUint32 },
            top_played_appid: { n: 5, br: P.readUint32, bw: F.writeUint32 },
            longest_streak_days: { n: 6, br: P.readUint32, bw: F.writeUint32 },
            rt_streak_start: { n: 7, br: P.readUint32, bw: F.writeUint32 },
            achievements: { n: 8, br: P.readUint32, bw: F.writeUint32 },
            screenshots: { n: 9, br: P.readUint32, bw: F.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return I(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Response`;
    }
  },
  Mm;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearInReview#1`, Eo(im, t, n), am, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetUserYearInReview = t;
  function n(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserSharingPermissions#1`,
      Eo(cm, t, n),
      lm,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetUserSharingPermissions = n;
  function r(e, t, n) {
    return e.SendMsg(
      `SaleFeature.SetUserSharingPermissions#1`,
      Eo(om, t, n),
      sm,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetUserSharingPermissions = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearAchievements#1`,
      Eo(um, t, n),
      dm,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetUserYearAchievements = i;
  function a(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearScreenshots#1`, Eo(fm, t, n), pm, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetUserYearScreenshots = a;
  function o(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserActionData#1`, Eo(gm, t, n), _m, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetUserActionData = o;
  function s(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetMultipleUserActionData#1`,
      Eo(vm, t, n),
      ym,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.GetMultipleUserActionData = s;
  function c(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetAllUserActionDataForType#1`,
      Eo(xm, t, n),
      Sm,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllUserActionDataForType = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetFriendsSharedYearInReview#1`,
      Eo(wm, t, n),
      Em,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetFriendsSharedYearInReview = l;
  function u(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearInReviewShareImage#1`,
      Eo(Dm, t, n),
      Om,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetUserYearInReviewShareImage = u;
  function d(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetYIRCurrentMonthlySummary#1`,
      Eo(Am, t, n),
      jm,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetYIRCurrentMonthlySummary = d;
})((Mm ||= {}));
var Nm = {
    19: [19, Sr, xn, es, ic, Zc],
    [go]: [go, Wa, na, Ho, mc, dr, zl],
    [ir]: [ir, Vo, yn, $o],
    113: [113],
    21: [21, br],
    492: [492],
    [Qn]: [Qn, Gn],
    [Sr]: [19, Sr, xn, $r],
    9: [9, jl, tr, li, Fi, qr, Ac],
    [Wa]: [go, Wa, na, Cn, Ia],
    122: [122, _r, vl, di, Go],
    [cc]: [cc, Gn],
    [xn]: [19, Sr, xn, Qa],
    599: [599, Ui, wo],
    [$r]: [Sr, $r],
    [Qo]: [Qo, Ra, Ic],
    [vi]: [vi, wl, Bc],
    [Vo]: [ir, Vo, Ha, Nc],
    [wl]: [vi, wl, Bc],
    597: [597],
    [fn]: [fn, bn, Xi, _c],
    [gn]: [gn],
    [jr]: [jr],
    [yn]: [ir, yn, ui, ti],
    [qi]: [qi, oo],
    [na]: [go, Wa, na],
    [Ra]: [Qo, Ra],
    [da]: [da, ca],
    [$o]: [ir, $o, pr],
    [jn]: [jn],
    [to]: [to],
    [cr]: [cr, Ns],
    [ss]: [ss],
    [gl]: [gl, Vr, zr],
    128: [128, Pi],
    [xs]: [xs],
    [Xc]: [Xc],
    [Ho]: [go, Ho],
    [bi]: [bi],
    493: [493],
    [Va]: [Va, lr],
    [Ds]: [Ds, Qr],
    [ca]: [da, ca],
    [mc]: [go, mc],
    [$a]: [$a, Gn],
    [oo]: [qi, oo],
    [ho]: [ho],
    [Hc]: [Hc, so],
    [Jc]: [Jc],
    [Pa]: [Pa, Ec],
    [Rr]: [Rr, Ns],
    [Bc]: [vi, wl, Bc],
    [Ic]: [Qo, Ic],
    [va]: [va, pr],
    [_r]: [122, _r],
    [Ec]: [Pa, Ec],
    [eo]: [eo],
    [lr]: [Va, lr],
    [dr]: [go, dr],
    [Aa]: [Aa],
    [wn]: [wn],
    [mr]: [mr],
    [rr]: [rr],
    [Vr]: [gl, Vr, wc, Nr],
    [Ar]: [Ar],
    699: [699],
    [sc]: [sc],
    [es]: [19, es],
    [Kc]: [Kc],
    [Lo]: [Lo],
    [Ha]: [Vo, Ha],
    [bn]: [fn, bn],
    [br]: [21, br],
    [_i]: [_i],
    [Ys]: [Ys, ls, ks, ns],
    [ic]: [19, ic],
    [Nc]: [Vo, Nc],
    [Xr]: [Xr],
    [vo]: [vo],
    [kn]: [kn],
    [Fo]: [Fo],
    [mo]: [mo],
    [Ua]: [Ua],
    [er]: [er],
    [si]: [si],
    [ja]: [ja],
    [Di]: [Di],
    701: [701, Vi, xa, Pc],
    [Ui]: [599, Ui, wo],
    [Vs]: [Vs],
    [Rc]: [Rc],
    [jl]: [9, jl, sa],
    [rs]: [rs, us],
    [Pi]: [128, Pi],
    [Cc]: [Cc],
    [ci]: [ci],
    [Cn]: [Wa, Cn, Es],
    [us]: [rs, us],
    [uc]: [uc],
    [Kn]: [Kn],
    [kr]: [kr],
    [tr]: [9, tr],
    [dn]: [dn],
    [vl]: [122, vl],
    [ka]: [ka],
    [Es]: [Cn, Es, Tr, Ti, ii],
    [as]: [as, hs],
    [Sn]: [Sn],
    [$c]: [$c],
    [li]: [9, li],
    [so]: [Hc, so],
    [pn]: [pn],
    [ac]: [ac],
    [Wr]: [Wr],
    [gc]: [gc],
    [fo]: [fo],
    [hn]: [hn],
    [ls]: [Ys, ls],
    [Ma]: [Ma],
    [Qr]: [Ds, Qr],
    [On]: [On],
    [Qi]: [Qi],
    [ui]: [yn, ui],
    [Bn]: [Bn],
    [Po]: [Po],
    [Gi]: [Gi],
    [ri]: [ri],
    [Bs]: [Bs],
    [Al]: [Al],
    [Qc]: [Qc],
    [Fi]: [9, Fi],
    [fi]: [fi],
    [zr]: [gl, zr],
    [Rn]: [Rn],
    [ea]: [ea],
    [Da]: [Da],
    [wo]: [599, Ui, wo],
    [pc]: [pc],
    [zn]: [zn],
    [zc]: [zc, Xo],
    [tl]: [tl],
    [xi]: [xi],
    [ga]: [ga],
    [Fn]: [Fn, mi, Mo, Ki, la],
    [Gn]: [Qn, cc, $a, Gn],
    [Zc]: [19, Zc],
    [Ms]: [Ms],
    [ko]: [ko],
    [ys]: [ys],
    [Uc]: [Uc],
    [Uo]: [Uo],
    [el]: [el],
    [Hr]: [Hr],
    [yc]: [yc],
    [ar]: [ar],
    [ti]: [yn, ti],
    [ai]: [ai],
    [El]: [El],
    [Ro]: [Ro],
    [or]: [or],
    [Hl]: [Hl],
    [fc]: [fc],
    [Cs]: [Cs],
    [Pl]: [Pl],
    [Ba]: [Ba],
    [po]: [po],
    [fs]: [fs],
    [Ni]: [Ni],
    [nr]: [nr],
    [Ln]: [Ln],
    [Ws]: [Ws],
    [ws]: [ws],
    [wr]: [wr],
    [Jo]: [Jo],
    [hl]: [hl],
    [Ta]: [Ta],
    [Mi]: [Mi],
    [Jr]: [Jr],
    [co]: [co],
    [Tr]: [Es, Tr],
    [gi]: [gi],
    [Xo]: [zc, Xo],
    [hc]: [hc, Rs],
    [Ci]: [Ci],
    [Pn]: [Pn],
    [Xi]: [fn, Xi],
    [Or]: [Or],
    [Hn]: [Hn],
    [Sc]: [Sc],
    [Ka]: [Ka],
    [Ps]: [Ps],
    [Zs]: [Zs],
    [xo]: [xo],
    [ni]: [ni],
    [wc]: [Vr, wc],
    [qr]: [9, qr],
    [Mc]: [Mc],
    [gs]: [gs],
    [yl]: [yl],
    [ma]: [ma],
    [Oc]: [Oc],
    [Qa]: [xn, Qa],
    [fr]: [fr],
    [xc]: [xc],
    [Do]: [Do],
    [di]: [122, di],
    872: [872],
    [Sl]: [Sl],
    [xr]: [xr],
    [As]: [As],
    [bs]: [bs],
    [qc]: [qc],
    [La]: [La],
    [Co]: [Co],
    [Pr]: [Pr],
    [uo]: [uo],
    [io]: [io],
    [hr]: [hr],
    [Vi]: [701, Vi, xa],
    [Yc]: [Yc],
    [ha]: [ha],
    [ur]: [ur],
    [ln]: [ln],
    [Zo]: [Zo],
    [Bl]: [Bl],
    [Ga]: [Ga],
    [$n]: [$n],
    [ba]: [ba],
    [nc]: [nc],
    [Ac]: [9, Ac],
    [ta]: [ta],
    [bl]: [bl],
    [is]: [is],
    [ms]: [ms],
    87: [87],
    [Go]: [122, Go],
    [hs]: [as, hs],
    84: [84],
    [yi]: [yi],
    [Ia]: [Wa, Ia],
    [Ir]: [Ir],
    [Gc]: [Gc],
    [Wi]: [Wi],
    [An]: [An],
    [Za]: [Za],
    [Un]: [Un],
    [cl]: [cl],
    [Ll]: [Ll],
    [Rl]: [Rl],
    [Zn]: [Zn],
    [vn]: [vn],
    [Oa]: [Oa],
    [xa]: [701, Vi, xa],
    [Ri]: [Ri],
    [Ns]: [cr, Rr, Ns],
    [qs]: [qs],
    [yo]: [yo],
    [No]: [No],
    [Tl]: [Tl],
    [Ei]: [Ei],
    [Xn]: [Xn],
    [qn]: [qn],
    [Mn]: [Mn],
    [bo]: [bo],
    [ro]: [ro],
    [Bo]: [Bo],
    [Er]: [Er],
    [In]: [In],
    [Ts]: [Ts],
    [vc]: [vc],
    [pi]: [pi],
    [Xs]: [Xs],
    [mi]: [Fn, mi],
    [Dr]: [Dr],
    [So]: [So],
    [Us]: [Us],
    [Lc]: [Lc],
    [Wn]: [Wn],
    [Mo]: [Fn, Mo, Ki],
    [Yi]: [Yi],
    [_s]: [_s],
    [Br]: [Br],
    [jo]: [jo],
    [wi]: [wi],
    [Gr]: [Gr],
    [kc]: [kc],
    [Ji]: [Ji],
    [pr]: [$o, va, pr],
    [Rs]: [hc, Rs],
    [rc]: [rc],
    [gr]: [gr],
    [Ol]: [Ol],
    [fl]: [fl],
    [Nn]: [Nn],
    [_l]: [_l],
    [Ko]: [Ko],
    [no]: [no],
    [Dc]: [Dc],
    [Qs]: [Qs],
    [ds]: [ds],
    [qa]: [qa],
    [Ml]: [Ml],
    [Ls]: [Ls],
    [oi]: [oi],
    [sl]: [sl],
    [ia]: [ia],
    [Ti]: [Es, Ti, ii],
    [Si]: [Si],
    [Tc]: [Tc],
    [ji]: [ji],
    [Jn]: [Jn],
    [Ki]: [Fn, Mo, Ki],
    [Wo]: [Wo],
    [_o]: [_o],
    [Ai]: [Ai],
    [ul]: [ul],
    [Mr]: [Mr],
    [Cl]: [Cl],
    784: [784],
    [Bi]: [Bi],
    [cs]: [cs],
    [Io]: [Io],
    [Oo]: [Oo],
    [zl]: [go, zl],
    [Kr]: [Kr],
    [js]: [js],
    [un]: [un],
    [ua]: [ua],
    [tc]: [tc],
    [_c]: [fn, _c],
    [sa]: [jl, sa],
    [aa]: [aa],
    [il]: [il],
    [Ao]: [Ao],
    [ra]: [ra],
    [Yo]: [Yo],
    [ec]: [ec],
    [zi]: [zi],
    [Vl]: [Vl],
    [ei]: [ei],
    [Ss]: [Ss],
    [Wc]: [Wc],
    [Hi]: [Hi],
    [Hs]: [Hs],
    [Il]: [Il],
    [ii]: [Es, Ti, ii],
    [En]: [En],
    [Nr]: [Vr, Nr],
    [vr]: [vr],
    [lc]: [lc],
    [ns]: [Ys, ns],
    809: [809],
    [yr]: [yr],
    [Nl]: [Nl],
    [ts]: [ts],
    [ki]: [ki],
    [_a]: [_a],
    [Ya]: [Ya, Fr],
    [la]: [Fn, la],
    [Fa]: [Fa],
    [Fr]: [Ya, Fr],
    [jc]: [jc],
    [Yr]: [Yr],
    [ks]: [Ys, ks],
    [Pc]: [701, Pc],
    [Js]: [Js],
  },
  Pm = [vi, wl, Bc, Ra];
function Fm(e, t) {
  let n = e.filter((e) => Pm.findIndex((t) => t == e.nTagId) == -1),
    r = [],
    i = [],
    a = n.length,
    o = 0,
    s = 0;
  for (; o < n.length && a + s > t && s < t;) {
    let e = n[o].nTagId;
    (i.findIndex((t) => t == e) == -1 &&
      (r.push({
        nTagId: e,
        nWeight: n[o].nWeight,
        nPreSelectionWeight: n[o].nPreSelectionWeight,
      }),
      Nm[e] &&
        Nm[e].forEach((e) => {
          i.push(e);
        }),
      s++),
      o++,
      a--);
  }
  for (; o < n.length && s < t;)
    (r.push({
      nTagId: n[o].nTagId,
      nWeight: n[o].nWeight,
      nPreSelectionWeight: n[o].nPreSelectionWeight,
    }),
      o++,
      s++);
  return r;
}
function Im() {
  return w.country_code.toLowerCase() === `cn`;
}
function Lm(e, t, n) {
  let { rgRankings: r, nTotalResultCount: i } = zm(e, t),
    a = new Set(r.map((e) => e.appid).slice(0, n));
  return {
    rgResults: e
      .GetRawStats()
      .playtime_stats.games.filter((e) => a.has(e.appid))
      .sort((e, n) => {
        let r = `${t}_rank`;
        return (e.playtime_ranks[r] ?? 0) - (n.playtime_ranks[r] ?? 0);
      }),
    nTotalResultCount: i,
  };
}
function Rm(e, t, n, r) {
  let { rgRankings: i, nTotalResultCount: a } = zm(e, t, n);
  return {
    nTotalResultCount: a,
    rgResults: i.map((n) => {
      if (n.relative_playtime_percentagex100) {
        let e = 0;
        return (
          (e =
            t == `demo` || t == `playtest`
              ? r > 0
                ? (n.relative_playtime_percentagex100 * 100 * 100) / r
                : 0
              : n.relative_playtime_percentagex100),
          { appid: n.appid, parent_appid: n.parent_appid, nPercentagex100: e }
        );
      }
      let i = e
        .GetRawStats()
        .playtime_stats.games.findIndex((e) => e.appid == n.appid);
      if (i >= 0) {
        let a = Bm(t, r, e.GetRawStats().playtime_stats.games[i]);
        return {
          appid: n.appid,
          parent_appid: n.parent_appid,
          nPercentagex100: a,
        };
      }
      return { appid: n.appid };
    }),
  };
}
function zm(e, t, n) {
  if (t == `demo` || t == `playtest`) {
    let r = t == `demo` ? e.GetDemoByPlaytime() : e.GetPlaytestByPlaytime();
    return {
      nTotalResultCount: r.length,
      rgRankings: r
        .slice(0, n)
        .map((e) => ({
          appid: e.appid,
          parent_appid: e.parent_appid,
          relative_playtime_percentagex100: e.total_playtime_percentagex100,
        })),
    };
  }
  let r = `${t}_ranking`,
    i = e.GetRawStats().playtime_stats.game_rankings[r]?.rankings;
  return {
    nTotalResultCount: i?.length ?? 0,
    rgRankings: i?.slice(0, n) || [],
  };
}
function Bm(e, t, n) {
  let r = n.stats.total_playtime_percentagex100,
    i = `${e}_playtime_percentagex100`,
    a = n.relative_game_stats[i] ?? 0;
  return Os((a * r) / t, 0, 1e4);
}
function Vm(e, t) {
  let n = () => !0;
  if (!e.playtime_stats?.game_summary) return [];
  switch (t) {
    case `overall`:
      n = (e) => !e.demo && !e.playtest;
      break;
    case `vr`:
      n = (e) => !e.demo && !e.playtest && e.played_vr;
      break;
    case `deck`:
      n = (e) => !e.demo && !e.playtest && e.played_deck;
      break;
    case `controller`:
      n = (e) => !e.demo && !e.playtest && e.played_controller;
      break;
    case `linux`:
      n = (e) => !e.demo && !e.playtest && e.played_linux;
      break;
    case `mac`:
      n = (e) => !e.demo && !e.playtest && e.played_mac;
      break;
    case `windows`:
      n = (e) => !e.demo && !e.playtest && e.played_windows;
      break;
    case `demo`:
      n = (e) => !!e.demo;
      break;
    case `playtest`:
      n = (e) => !!e.playtest;
  }
  return e.playtime_stats.game_summary.filter(n);
}
function Hm(e, t) {
  if (t != `demo` && t != `playtest`) {
    let n = `${t === `overall` ? `total` : t}_sessions`,
      r = `${t === `overall` ? `total` : t}_playtime_percentagex100`;
    return {
      nTotalGames: Vm(e, t).length || 0,
      nTotalSessions: e.playtime_stats.total_stats[n] || 0,
      nTotalPercentage: e.playtime_stats.total_stats[r] || 0,
    };
  }
  {
    let n = Vm(e, t);
    return {
      nTotalGames: n.length,
      nTotalSessions: n
        .map((e) => e.total_sessions)
        .reduce((e, t) => (e ?? 0) + (t ?? 0), 0),
      nTotalPercentage: n
        .map((e) => e.total_playtime_percentagex100)
        .reduce((e, t) => (e ?? 0) + (t ?? 0), 0),
    };
  }
}
var Um = `percentMonthOfOverall`,
  Wm = `percentOtherGamesRelativeMonth`;
function Gm(e, t, n, r) {
  let i = new Set(n),
    a = t
      .map((e, t) => {
        let n = new Date((e.rtime_month + 86400) * 1e3),
          a = {},
          o = {},
          s = {},
          c = {},
          l = e.stats.total_playtime_percentagex100,
          u = 0,
          d = 0;
        return (
          [...e.game_summary]
            .sort(
              (e, t) =>
                (t?.total_playtime_percentagex100 ?? 0) -
                (e?.total_playtime_percentagex100 ?? 0),
            )
            .filter((e) => r.has(e.appid))
            .forEach((e, t) => {
              let { appid: n } = e,
                l = e.total_playtime_percentagex100,
                f = e.relative_playtime_percentagex100;
              t < 6 && typeof f == `number` && f > 100 && i.has(n)
                ? ((a[n] = l), (o[n] = f), (u += l), (d += f))
                : (s[n] = f);
              let p = r.get(n).total_playtime_percentagex100 ?? 1;
              c[n] = (l / p) * 1e4;
            }),
          (a[Um] = l),
          (a[Wm] = l - u),
          (o[Wm] = 1e4 - d),
          {
            date: n,
            topPlayedPercentBreakdownPerMonth: a,
            topPlayedRelativePercentBreakdownForMonth: o,
            otherPlayedPercentBreakdownForMonth: s,
            playPercentBreakdownForGame: c,
          }
        );
      })
      .sort((e, t) => e.date.getTime() - t.date.getTime()),
    o = [];
  for (let t = 0; t < 12; ++t) {
    let n = a.findIndex(
      (n) => n.date.getUTCMonth() === t && n.date.getUTCFullYear() === e,
    );
    n === -1
      ? o.push({
          date: new Date(Date.UTC(e, t, 15)),
          topPlayedPercentBreakdownPerMonth: {},
          topPlayedRelativePercentBreakdownForMonth: {},
          otherPlayedPercentBreakdownForMonth: {},
          playPercentBreakdownForGame: {},
        })
      : o.push(a[n]);
  }
  return o;
}
function Km(e) {
  e.game_summary?.length &&
    Li(
      e.total_stats &&
        Array.isArray(e.games) &&
        Array.isArray(e.months) &&
        typeof e.demos_played == `number` &&
        e.game_rankings &&
        typeof e.playtests_played == `number` &&
        (typeof e.substantial == `boolean` ||
          typeof e.substantial == `number`) &&
        e.by_numbers,
      `YIR playtime stats missing expected fields!`,
    );
}
function qm(e) {
  return (
    Li(
      typeof e.account_id == `number` &&
        typeof e.year == `number` &&
        typeof e.privacy_state == `number` &&
        e.playtime_stats,
      `YIR stats missing expected fields!`,
    ),
    e.playtime_stats && Km(e.playtime_stats),
    e
  );
}
function Jm(e) {
  if (typeof e?.new_releases == `number`)
    return (
      Li(
        typeof e.recent_releases == `number` &&
          typeof e.classic_releases == `number` &&
          typeof e.recent_cutoff_year == `number`,
        `YIR global playtime distribution missing expected fields!`,
      ),
      e
    );
}
function Ym(e) {
  if (typeof e?.games_played == `number`)
    return (
      Li(
        typeof e.unlocked_achievements == `number` &&
          typeof e.longest_streak == `number`,
        `YIR previous year summary missing expected fields!`,
      ),
      e
    );
}
var Xm = class {
    m_allStats;
    m_steamid;
    m_mapGameSummary = new Map();
    m_mapGameStats = new Map();
    m_globalPercentiles;
    m_globalGameplayDistribution;
    m_previousYearSummary;
    m_rgTopGamesShown = [];
    m_rgTopGameShownAppIDs = [];
    m_rgMonthChartData = [];
    m_rgTopGameMonthsChartIdsAndRanks = [];
    m_rgAggregateTagData = [];
    m_rgDemoByPlaytime = [];
    m_rgPlaytestByPlaytime = [];
    GetRawStats() {
      return this.m_allStats;
    }
    GetDemoByPlaytime() {
      return this.m_rgDemoByPlaytime;
    }
    BHasDemoByPlaytime() {
      return this.m_rgDemoByPlaytime.length > 0;
    }
    GetPlaytestByPlaytime() {
      return this.m_rgPlaytestByPlaytime;
    }
    BHasPlaytestByPlaytime() {
      return this.m_rgPlaytestByPlaytime.length > 0;
    }
    BHasPlaytimeData() {
      return this.m_allStats.playtime_stats.game_summary.length > 0;
    }
    GetPlayTimeStats() {
      return this.m_allStats.playtime_stats;
    }
    GetSteamID() {
      return this.m_steamid;
    }
    GetYear() {
      return this.m_allStats.year;
    }
    GetGameSummaryForApp(e) {
      return this.m_mapGameSummary.get(e);
    }
    GetAccountID() {
      return new wa(this.m_steamid).GetAccountID();
    }
    GetFilteredGameSummary() {
      return this.m_allStats.playtime_stats.game_summary.filter(
        (e) => !e.demo && !e.playtest,
      );
    }
    GetGameStats(e) {
      return this.m_mapGameStats.get(e);
    }
    GetTopGamesShown() {
      return this.m_rgTopGamesShown;
    }
    GetTopGamesShownAppIDs() {
      return this.m_rgTopGameShownAppIDs;
    }
    GetChartMonthlyData() {
      return this.m_rgMonthChartData;
    }
    GetTopGameIdsAndRanks() {
      return this.m_rgTopGameMonthsChartIdsAndRanks;
    }
    GetGlobalPercentiles() {
      return this.m_globalPercentiles;
    }
    GetGlobalGameplayDistribition() {
      return this.m_globalGameplayDistribution;
    }
    GetPreviousYearSummary() {
      return this.m_previousYearSummary;
    }
    GetChartMonthlyDataForApp(e) {
      return {
        gameChartData: this.m_rgMonthChartData.map((t) => ({
          date: t.date,
          percent: t.playPercentBreakdownForGame[e],
        })),
        rank: this.m_rgTopGameMonthsChartIdsAndRanks.find((t) => t.appid === e)
          ?.rank,
      };
    }
    GetUserAggregateTagData() {
      return this.m_rgAggregateTagData;
    }
    constructor(e, t, n, r) {
      let i = qm(e);
      if (
        ((this.m_allStats = i),
        (this.m_steamid = wa
          .InitFromAccountID(i.account_id, N.EUNIVERSE)
          .ConvertTo64BitString()),
        (this.m_globalPercentiles = t ?? void 0),
        (this.m_globalGameplayDistribution = Jm(n)),
        (this.m_previousYearSummary = Ym(r)),
        this.BHasPlaytimeData() &&
          i.playtime_stats.total_stats.total_sessions > 0)
      ) {
        (i.playtime_stats.game_summary.forEach((e) => {
          (Li(
            !this.m_mapGameSummary.has(e.appid),
            `Found at least two record of appid ${e.appid} in stats.playtime_stats.game_summary`,
          ),
            this.m_mapGameSummary.set(e.appid, e));
        }),
          i.playtime_stats.games.forEach((e) => {
            (Li(
              !this.m_mapGameStats.has(e.appid),
              `Found at least two record of appid ${e.appid} in stats.playtime_stats.games`,
            ),
              this.m_mapGameStats.set(e.appid, e));
          }));
        let { rgResults: e } = Lm(this, `overall`, 8),
          t = e.map((e) => e.appid);
        ((this.m_rgTopGameMonthsChartIdsAndRanks = t.map((e, t) => ({
          appid: e,
          rank: t,
        }))),
          (this.m_rgTopGamesShown = e.slice(0, 5)),
          (this.m_rgTopGameShownAppIDs = this.m_rgTopGamesShown.map(
            (e) => e.appid,
          )),
          (this.m_rgMonthChartData = Gm(
            this.GetYear(),
            this.GetPlayTimeStats().months,
            t,
            this.m_mapGameSummary,
          )));
      }
      if (
        i.playtime_stats.tag_stats &&
        i.playtime_stats.tag_stats.stats.length > 0
      ) {
        let e = i.playtime_stats.tag_stats.stats.map((e) => ({
          nTagId: e.tag_id,
          nWeight: parseFloat(e.tag_weight.toString()),
          nPreSelectionWeight: parseFloat(
            e.tag_weight_pre_selection
              ? e.tag_weight_pre_selection.toString()
              : `0.0`,
          ),
        }));
        this.m_rgAggregateTagData = Fm(e, 6);
      }
      i &&
        ((this.m_rgDemoByPlaytime = i.playtime_stats.game_summary
          .filter((e) => !!e.demo)
          .sort(
            (e, t) =>
              t.total_playtime_percentagex100 - e.total_playtime_percentagex100,
          )),
        (this.m_rgPlaytestByPlaytime = i.playtime_stats.game_summary
          .filter((e) => !!e.playtest)
          .sort(
            (e, t) =>
              t.total_playtime_percentagex100 - e.total_playtime_percentagex100,
          )));
    }
    GetGameAgeCounts(e) {
      let t = this.m_allStats.playtime_stats?.game_summary || [];
      if (e.length == 0) return [t.length];
      let n = Date.UTC(this.GetYear(), 11, 15) / 1e3,
        r = Array(e.length + 1).fill(0);
      for (let i of t) {
        let t = i.rtime_release_date || n;
        if (t >= n) {
          r[0] += i.total_playtime_percentagex100;
          continue;
        }
        let a = (n - t) / za.PerYear,
          o = e.findIndex((e) => a < e);
        o >= 0
          ? (r[o] += i.total_playtime_percentagex100)
          : (r[r.length - 1] += i.total_playtime_percentagex100);
      }
      return r;
    }
  },
  Zm = `0px 0px 100% 0px`,
  Qm = e(d(), 1);
function $m(e, t) {
  let {
    stats: n,
    percentiles: r,
    distribution: i,
    previous_year_summary: a,
  } = t;
  return {
    eResult: e,
    privacy_state: n?.privacy_state,
    stats: n,
    percentiles: r,
    distribution: i,
    previous_year_summary: a,
  };
}
function eh(e, t) {
  return [`YIR`, `Get`, e, t];
}
function th(e, t, n, r = {}) {
  return {
    queryKey: eh(t, n),
    queryFn: async () => {
      let i = await Mm.GetUserYearInReview(e, {
        steamid: t,
        year: n,
        fetch_previous_year_summary: !0,
        access_source: r.eAccessSource,
        force_regenerate: r.bForceRegenerate,
      });
      return $m(i.GetEResult(), i.Body().toObject());
    },
    staleTime: 1 / 0,
  };
}
function nh(e, t) {
  return p(th(Gs(), e, t));
}
function rh(e, t) {
  let { data: n, isLoading: r } = nh(e, t),
    {
      eResult: i,
      stats: a,
      percentiles: o,
      distribution: s,
      previous_year_summary: c,
    } = n ?? {};
  return {
    userYearInReview: R.useMemo(() => {
      if (i == 1 && a) return new Xm(a, o, s, c);
    }, [i, a, o, s, c]),
    isLoading: r,
  };
}
function ih(e, t) {
  return nh(e, t).data?.privacy_state;
}
function ah(e, t) {
  let n = Gs(),
    r = c();
  return f({
    mutationFn: async (r) => {
      let i = await Mm.SetUserSharingPermissions(n, {
        steamid: e,
        year: t,
        privacy_state: r,
      });
      return {
        eResult: i.GetEResult(),
        privacy_state: i.Body().privacy_state(),
      };
    },
    onSuccess: ({ eResult: n, privacy_state: i }) => {
      n == 1 &&
        i !== void 0 &&
        r.setQueryData(eh(e, t), (e) => e && { ...e, privacy_state: i });
    },
  });
}
function oh(e, t, n) {
  return {
    steamid: t,
    nYear: n,
    achievements: new Qm.default((r) => lh(e, t, n, r), { cache: !1 }),
    screenshots: new Qm.default((r) => _h(e, t, n, r), { cache: !1 }),
  };
}
var sh = R.createContext(void 0);
function ch() {
  let e = R.useContext(sh);
  return (
    Li(e, `Cannot use YIR data loaders outside of Steam Replay page!`), e
  );
}
async function lh(e, t, n, r) {
  try {
    let i = await Mm.GetUserYearAchievements(e, {
      steamid: t,
      year: n,
      appids: [...r],
      total_only: !1,
    });
    if (i.GetEResult() == 1) {
      let { game_achievements: e = [] } = i.Body().toObject(),
        t = e.reduce((e, t) => ((e[t.appid] = t), e), {});
      return r.map((e) => {
        let n = t[e];
        return {
          ...n,
          appid: e,
          achievements: (n?.achievements ?? []).map((e) => ({
            ...e,
            achievement_name_internal: (
              e.achievement_name_internal ?? ``
            ).toLowerCase(),
          })),
        };
      });
    }
    console.error(`GetUserYearAchievements failed: ` + i.GetEResult());
  } catch (e) {
    console.error(`GetUserYearAchievements failed`, e);
  }
  return r.map((e) => ({ appid: e, achievements: [] }));
}
function uh(e, t) {
  return {
    queryKey: [`YIR`, `achievements`, `apps`, e.steamid, e.nYear, t],
    queryFn: () => e.achievements.load(t),
    staleTime: 1 / 0,
  };
}
function dh(e) {
  let t = ch();
  u({ queries: e.GetTopGamesShownAppIDs().map((e) => uh(t, e)) });
}
function fh(e) {
  let { data: t } = p({ ...uh(ch(), e), enabled: !!e });
  return t;
}
function ph(e, t, n) {
  return {
    queryKey: [`YIR`, `achievements`, `display`, t, n],
    queryFn: async () => {
      try {
        let r = await nl.GetGameAchievements(e, { appid: t, language: n });
        if (r.GetEResult() == 1)
          return (r.Body().toObject().achievements ?? []).map((e) => ({
            ...e,
            internal_name: (e.internal_name ?? ``).toLowerCase(),
          }));
        console.error(`GetGameAchievements failed: ` + r.GetEResult());
      } catch (e) {
        console.error(`GetGameAchievements failed`, e);
      }
      return [];
    },
    staleTime: 1 / 0,
  };
}
function mh(e, t = !0) {
  let n = Gs(),
    { data: r } = p({
      ...ph(n, e, N.LANGUAGE || `english`),
      enabled: t && !!e,
    });
  return r;
}
function hh(e) {
  let t = mh(e);
  return R.useMemo(() => {
    let e = new Map();
    for (let n of t ?? []) n.internal_name && e.set(n.internal_name, n);
    return e;
  }, [t]);
}
function gh(e) {
  return mh(e)?.length ?? 0;
}
async function _h(e, t, n, r) {
  let i = await Mm.GetUserYearScreenshots(e, {
    steamid: t,
    year: n,
    appids: [...r],
  });
  if (!i.BSuccess()) throw `Load Screenshots failed: ${i.GetErrorMessage()}`;
  let { apps: a = [] } = i.Body().toObject(),
    o = a.reduce((e, t) => ((e[t.appid] = t), e), {});
  return r.map((e) => o[e]?.screenshots);
}
function vh(e, t) {
  return {
    queryKey: [`YIR`, `Screenshots`, e.steamid, e.nYear, t],
    queryFn: async () => (await e.screenshots.load(t)) ?? null,
    staleTime: 1 / 0,
  };
}
function yh(e) {
  let { data: t } = p({ ...vh(ch(), e), enabled: !!e });
  return t ?? void 0;
}
function bh(e, t, n, r) {
  return {
    queryKey: [`YIR`, `Friends`, t, n, r],
    queryFn: async () => {
      let i = await Mm.GetFriendsSharedYearInReview(e, {
        steamid: t,
        year: n,
        return_private: r,
      });
      if (i.GetEResult() != 1)
        throw `error friend sharing information ` + i.GetEResult();
      let { friend_shares: a = [] } = i.Body().toObject();
      return a
        .filter((e) => !!e.steamid)
        .map(
          ({
            steamid: e,
            privacy_state: t,
            rt_privacy_updated: n,
            privacy_override: r,
          }) => ({
            steamid: e,
            privacy_state: t ?? 0,
            rt_privacy_updated: n ?? 0,
            privacy_override: !!r,
          }),
        );
    },
    staleTime: 1 / 0,
  };
}
function xh(e, t) {
  return p(bh(Gs(), e, t, w.is_support));
}
function Sh(e, t) {
  return {
    queryKey: [`YIR`, `FamilyGroup`, t],
    queryFn: async () => {
      let n = await Wl.GetFamilyGroupForUser(e, {
        steamid: t,
        include_family_group_response: !0,
      });
      if (n.GetEResult() != 1)
        throw `error loading family group ` + n.GetEResult();
      return n.Body().toObject();
    },
    staleTime: 1 / 0,
  };
}
function Ch(e) {
  return p(Sh(Gs(), e));
}
function wh(e, t, n, r) {
  return {
    queryKey: [`YIR`, `ShareImages`, t, n, r],
    queryFn: async () => {
      let i = await Mm.GetUserYearInReviewShareImage(e, {
        steamid: t,
        year: n,
        language: r,
      });
      if (i.GetEResult() != 1)
        throw `Load social images failed: ${i.GetErrorMessage()}`;
      return i.Body().toObject().images ?? [];
    },
    staleTime: 1 / 0,
  };
}
function Th(e, t, n) {
  return p(wh(Gs(), e, t, n));
}
var Eh = R.createContext(void 0);
function Dh() {
  let e = R.useContext(Eh);
  return (Li(e, `Cannot use YIR page data outside of Steam Replay page!`), e);
}
function Oh(e) {
  return e?.success === 1 || e?.success === 15;
}
function kh(e) {
  let t = e ? { appid: e } : void 0,
    { data: n, isLoading: r } = Oi(t),
    { data: i, isLoading: a } = Tn(t);
  return {
    item: R.useMemo(
      () => (Oh(n) ? { info: n, assets: i ?? null } : void 0),
      [n, i],
    ),
    bLoading: r || a,
  };
}
function Ah(e, t = !1) {
  return p(jh(c(), rl(), e, t));
}
function jh(e, t, n, r = !1) {
  return {
    queryKey: [`YIR`, `storeitems`, n, r],
    queryFn: async () => {
      let i = await Promise.all(
          n.map(async (n) => {
            let [i, a] = await Promise.allSettled([
              e.fetchQuery(os(t, { appid: n })),
              e.fetchQuery($s(t, { appid: n })),
              r && e.fetchQuery(Zi(t, { appid: n })),
            ]);
            return i.status === `rejected` || !Oh(i.value)
              ? null
              : {
                  appid: n,
                  info: i.value,
                  assets: a.status === `fulfilled` ? a.value : null,
                };
          }),
        ),
        a = new Map();
      for (let e of i) e && a.set(e.appid, e);
      if (a.size === 0 && n.length > 0)
        throw Error(`Error loading store items!`);
      return a;
    },
    staleTime: 0,
  };
}
var H = {};
((H.arabic = () =>
  C(() => import(`./chunk~e848daa62e.js`), [], import.meta.url)),
  (H.brazilian = () =>
    C(() => import(`./chunk~c38582be51.js`), [], import.meta.url)),
  (H.bulgarian = () =>
    C(() => import(`./chunk~ccfa18fa3d.js`), [], import.meta.url)),
  (H.czech = () =>
    C(() => import(`./chunk~1f89df6a13.js`), [], import.meta.url)),
  (H.danish = () =>
    C(() => import(`./chunk~fc2bbceb5d.js`), [], import.meta.url)),
  (H.dutch = () =>
    C(() => import(`./chunk~da5799f81f.js`), [], import.meta.url)),
  (H.english = () =>
    C(() => import(`./chunk~2516855c32.js`), [], import.meta.url)),
  (H.finnish = () =>
    C(() => import(`./chunk~d587003d0a.js`), [], import.meta.url)),
  (H.french = () =>
    C(() => import(`./chunk~ed4ff863ac.js`), [], import.meta.url)),
  (H.german = () =>
    C(() => import(`./chunk~81227c1f72.js`), [], import.meta.url)),
  (H.greek = () =>
    C(() => import(`./chunk~8e60606527.js`), [], import.meta.url)),
  (H.hungarian = () =>
    C(() => import(`./chunk~75ebecc6b1.js`), [], import.meta.url)),
  (H.indonesian = () =>
    C(() => import(`./chunk~0098d8b0af.js`), [], import.meta.url)),
  (H.italian = () =>
    C(() => import(`./chunk~957a796a0a.js`), [], import.meta.url)),
  (H.japanese = () =>
    C(() => import(`./chunk~7629d9c89e.js`), [], import.meta.url)),
  (H.koreana = () =>
    C(() => import(`./chunk~b6086b9c24.js`), [], import.meta.url)),
  (H.latam = () =>
    C(() => import(`./chunk~7e7a28ac3e.js`), [], import.meta.url)),
  (H.malay = () =>
    C(() => import(`./chunk~4ee96a1953.js`), [], import.meta.url)),
  (H.norwegian = () =>
    C(() => import(`./chunk~da887fc950.js`), [], import.meta.url)),
  (H.polish = () =>
    C(() => import(`./chunk~c56820d9a8.js`), [], import.meta.url)),
  (H.portuguese = () =>
    C(() => import(`./chunk~e06c119adf.js`), [], import.meta.url)),
  (H.romanian = () =>
    C(() => import(`./chunk~369394c631.js`), [], import.meta.url)),
  (H.russian = () =>
    C(() => import(`./chunk~d7addddcd5.js`), [], import.meta.url)),
  (H.sc_schinese = () =>
    C(() => import(`./chunk~c3ba49c415.js`), [], import.meta.url)),
  (H.schinese = () =>
    C(() => import(`./chunk~8b81f35864.js`), [], import.meta.url)),
  (H.spanish = () =>
    C(() => import(`./chunk~050cba1d23.js`), [], import.meta.url)),
  (H.swedish = () =>
    C(() => import(`./chunk~052acd148b.js`), [], import.meta.url)),
  (H.tchinese = () =>
    C(() => import(`./chunk~bb59787bf8.js`), [], import.meta.url)),
  (H.thai = () =>
    C(() => import(`./chunk~e8f199b312.js`), [], import.meta.url)),
  (H.turkish = () =>
    C(() => import(`./chunk~6cc30891b5.js`), [], import.meta.url)),
  (H.ukrainian = () =>
    C(() => import(`./chunk~75429e242c.js`), [], import.meta.url)),
  (H.vietnamese = () =>
    C(() => import(`./chunk~96e64272d7.js`), [], import.meta.url)));
async function Mh(e) {
  if (H[e]) return await H[e]();
}
var Nh = hi(Mh),
  U = {};
((U.arabic = () =>
  C(() => import(`./chunk~2a9ee28e4f.js`), [], import.meta.url)),
  (U.brazilian = () =>
    C(() => import(`./chunk~f8d7ac36da.js`), [], import.meta.url)),
  (U.bulgarian = () =>
    C(() => import(`./chunk~aaa9c40b3c.js`), [], import.meta.url)),
  (U.czech = () =>
    C(() => import(`./chunk~a1b78a4c90.js`), [], import.meta.url)),
  (U.danish = () =>
    C(() => import(`./chunk~a91207123e.js`), [], import.meta.url)),
  (U.dutch = () =>
    C(() => import(`./chunk~435b527bf1.js`), [], import.meta.url)),
  (U.english = () =>
    C(() => import(`./chunk~d172c03b1c.js`), [], import.meta.url)),
  (U.finnish = () =>
    C(() => import(`./chunk~bfb6237bed.js`), [], import.meta.url)),
  (U.french = () =>
    C(() => import(`./chunk~2c42f52255.js`), [], import.meta.url)),
  (U.german = () =>
    C(() => import(`./chunk~ad973f8cdb.js`), [], import.meta.url)),
  (U.greek = () =>
    C(() => import(`./chunk~8d234bc224.js`), [], import.meta.url)),
  (U.hungarian = () =>
    C(() => import(`./chunk~b331777e11.js`), [], import.meta.url)),
  (U.indonesian = () =>
    C(() => import(`./chunk~618ee32f14.js`), [], import.meta.url)),
  (U.italian = () =>
    C(() => import(`./chunk~f1ffa65450.js`), [], import.meta.url)),
  (U.japanese = () =>
    C(() => import(`./chunk~76a55c4c25.js`), [], import.meta.url)),
  (U.koreana = () =>
    C(() => import(`./chunk~cdde58a513.js`), [], import.meta.url)),
  (U.latam = () =>
    C(() => import(`./chunk~8b4e3972ff.js`), [], import.meta.url)),
  (U.malay = () =>
    C(() => import(`./chunk~2595da3066.js`), [], import.meta.url)),
  (U.norwegian = () =>
    C(() => import(`./chunk~5afd320c84.js`), [], import.meta.url)),
  (U.polish = () =>
    C(() => import(`./chunk~9282844403.js`), [], import.meta.url)),
  (U.portuguese = () =>
    C(() => import(`./chunk~c163bd573d.js`), [], import.meta.url)),
  (U.romanian = () =>
    C(() => import(`./chunk~09a2963a34.js`), [], import.meta.url)),
  (U.russian = () =>
    C(() => import(`./chunk~e3d6765cd6.js`), [], import.meta.url)),
  (U.sc_schinese = () =>
    C(() => import(`./chunk~a0a45dd693.js`), [], import.meta.url)),
  (U.schinese = () =>
    C(() => import(`./chunk~3893a6c80f.js`), [], import.meta.url)),
  (U.spanish = () =>
    C(() => import(`./chunk~685c663764.js`), [], import.meta.url)),
  (U.swedish = () =>
    C(() => import(`./chunk~1ba18ad10d.js`), [], import.meta.url)),
  (U.tchinese = () =>
    C(() => import(`./chunk~6765789f0d.js`), [], import.meta.url)),
  (U.thai = () =>
    C(() => import(`./chunk~0ebe7e9b63.js`), [], import.meta.url)),
  (U.turkish = () =>
    C(() => import(`./chunk~3b6d72df14.js`), [], import.meta.url)),
  (U.ukrainian = () =>
    C(() => import(`./chunk~0c6c7fcccd.js`), [], import.meta.url)),
  (U.vietnamese = () =>
    C(() => import(`./chunk~c45856eefb.js`), [], import.meta.url)));
async function Ph(e) {
  if (U[e]) return await U[e]();
}
var Fh = hi(Ph),
  W = {};
((W.arabic = () =>
  C(() => import(`./chunk~2fe7aa2317.js`), [], import.meta.url)),
  (W.brazilian = () =>
    C(() => import(`./chunk~5e4fd7dc0f.js`), [], import.meta.url)),
  (W.bulgarian = () =>
    C(() => import(`./chunk~88092a0904.js`), [], import.meta.url)),
  (W.czech = () =>
    C(() => import(`./chunk~1b633fa830.js`), [], import.meta.url)),
  (W.danish = () =>
    C(() => import(`./chunk~5ef149ef0c.js`), [], import.meta.url)),
  (W.dutch = () =>
    C(() => import(`./chunk~6e9c13f2b2.js`), [], import.meta.url)),
  (W.english = () =>
    C(() => import(`./chunk~ab24f40556.js`), [], import.meta.url)),
  (W.finnish = () =>
    C(() => import(`./chunk~6152752886.js`), [], import.meta.url)),
  (W.french = () =>
    C(() => import(`./chunk~6b67b676cb.js`), [], import.meta.url)),
  (W.german = () =>
    C(() => import(`./chunk~fbf253d943.js`), [], import.meta.url)),
  (W.greek = () =>
    C(() => import(`./chunk~3428bc53a5.js`), [], import.meta.url)),
  (W.hungarian = () =>
    C(() => import(`./chunk~3cfb626910.js`), [], import.meta.url)),
  (W.indonesian = () =>
    C(() => import(`./chunk~f2ddcf973a.js`), [], import.meta.url)),
  (W.italian = () =>
    C(() => import(`./chunk~7bf1420f7c.js`), [], import.meta.url)),
  (W.japanese = () =>
    C(() => import(`./chunk~83852f9c50.js`), [], import.meta.url)),
  (W.koreana = () =>
    C(() => import(`./chunk~f6b67c2a99.js`), [], import.meta.url)),
  (W.latam = () =>
    C(() => import(`./chunk~0e50e7bbbb.js`), [], import.meta.url)),
  (W.malay = () =>
    C(() => import(`./chunk~c4ff866828.js`), [], import.meta.url)),
  (W.norwegian = () =>
    C(() => import(`./chunk~8b1d1eb8bd.js`), [], import.meta.url)),
  (W.polish = () =>
    C(() => import(`./chunk~62e22aebed.js`), [], import.meta.url)),
  (W.portuguese = () =>
    C(() => import(`./chunk~5bd109855c.js`), [], import.meta.url)),
  (W.romanian = () =>
    C(() => import(`./chunk~25da5b8e6d.js`), [], import.meta.url)),
  (W.russian = () =>
    C(() => import(`./chunk~0d8846738b.js`), [], import.meta.url)),
  (W.sc_schinese = () =>
    C(() => import(`./chunk~c68b2602f6.js`), [], import.meta.url)),
  (W.schinese = () =>
    C(() => import(`./chunk~724571da0c.js`), [], import.meta.url)),
  (W.spanish = () =>
    C(() => import(`./chunk~293f64f382.js`), [], import.meta.url)),
  (W.swedish = () =>
    C(() => import(`./chunk~19cb7f6cba.js`), [], import.meta.url)),
  (W.tchinese = () =>
    C(() => import(`./chunk~42b1a18a7a.js`), [], import.meta.url)),
  (W.thai = () =>
    C(() => import(`./chunk~75c28cc2a3.js`), [], import.meta.url)),
  (W.turkish = () =>
    C(() => import(`./chunk~d8552b3afe.js`), [], import.meta.url)),
  (W.ukrainian = () =>
    C(() => import(`./chunk~e6018f1bdb.js`), [], import.meta.url)),
  (W.vietnamese = () =>
    C(() => import(`./chunk~5e649757bf.js`), [], import.meta.url)));
async function Ih(e) {
  if (W[e]) return await W[e]();
}
var Lh = hi(Ih),
  G = {};
((G.arabic = () =>
  C(() => import(`./chunk~2ccce839d9.js`), [], import.meta.url)),
  (G.brazilian = () =>
    C(() => import(`./chunk~a4b02e3aec.js`), [], import.meta.url)),
  (G.bulgarian = () =>
    C(() => import(`./chunk~323e3dd751.js`), [], import.meta.url)),
  (G.czech = () =>
    C(() => import(`./chunk~ab1c53a7a8.js`), [], import.meta.url)),
  (G.danish = () =>
    C(() => import(`./chunk~d7df11c444.js`), [], import.meta.url)),
  (G.dutch = () =>
    C(() => import(`./chunk~499b67db82.js`), [], import.meta.url)),
  (G.english = () =>
    C(() => import(`./chunk~f9dcc7ae33.js`), [], import.meta.url)),
  (G.finnish = () =>
    C(() => import(`./chunk~8e3265a9b2.js`), [], import.meta.url)),
  (G.french = () =>
    C(() => import(`./chunk~65bde88826.js`), [], import.meta.url)),
  (G.german = () =>
    C(() => import(`./chunk~7558ac0638.js`), [], import.meta.url)),
  (G.greek = () =>
    C(() => import(`./chunk~80d5e98417.js`), [], import.meta.url)),
  (G.hungarian = () =>
    C(() => import(`./chunk~7cfa6da95d.js`), [], import.meta.url)),
  (G.indonesian = () =>
    C(() => import(`./chunk~f523ee529d.js`), [], import.meta.url)),
  (G.italian = () =>
    C(() => import(`./chunk~a9dcad5016.js`), [], import.meta.url)),
  (G.japanese = () =>
    C(() => import(`./chunk~8f28cd54ad.js`), [], import.meta.url)),
  (G.koreana = () =>
    C(() => import(`./chunk~4db0d8d0b7.js`), [], import.meta.url)),
  (G.latam = () =>
    C(() => import(`./chunk~ba0a093efb.js`), [], import.meta.url)),
  (G.malay = () =>
    C(() => import(`./chunk~8ee08d7313.js`), [], import.meta.url)),
  (G.norwegian = () =>
    C(() => import(`./chunk~ed2c9b4b07.js`), [], import.meta.url)),
  (G.polish = () =>
    C(() => import(`./chunk~be96f85c04.js`), [], import.meta.url)),
  (G.portuguese = () =>
    C(() => import(`./chunk~9623731241.js`), [], import.meta.url)),
  (G.romanian = () =>
    C(() => import(`./chunk~aea2485f2f.js`), [], import.meta.url)),
  (G.russian = () =>
    C(() => import(`./chunk~229cf520cb.js`), [], import.meta.url)),
  (G.sc_schinese = () =>
    C(() => import(`./chunk~f3360eb1b0.js`), [], import.meta.url)),
  (G.schinese = () =>
    C(() => import(`./chunk~95fc239b12.js`), [], import.meta.url)),
  (G.spanish = () =>
    C(() => import(`./chunk~33841c653b.js`), [], import.meta.url)),
  (G.swedish = () =>
    C(() => import(`./chunk~89ccff5b84.js`), [], import.meta.url)),
  (G.tchinese = () =>
    C(() => import(`./chunk~6ff3439c0c.js`), [], import.meta.url)),
  (G.thai = () =>
    C(() => import(`./chunk~116fb5962a.js`), [], import.meta.url)),
  (G.turkish = () =>
    C(() => import(`./chunk~30207c52bc.js`), [], import.meta.url)),
  (G.ukrainian = () =>
    C(() => import(`./chunk~7ab9abd8ae.js`), [], import.meta.url)),
  (G.vietnamese = () =>
    C(() => import(`./chunk~58fcf52d61.js`), [], import.meta.url)));
async function Rh(e) {
  if (G[e]) return await G[e]();
}
var zh = hi(Rh),
  Bh = new Map([
    [2022, Nh],
    [2023, Fh],
    [2024, Lh],
    [2025, zh],
  ]);
function Vh(e) {
  return Bh.get(e);
}
function Hh() {
  let e = To(L),
    t = To(Nh),
    n = To(Fh),
    r = To(Lh),
    i = To(zh);
  return e && t && n && r && i;
}
var Uh = new URL(
    `../../../images/applications/store/defaultappimage.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Wh = t({
    AddToWishlist: () => gg,
    AnimateCap: () => Gg,
    Appear: () => jg,
    BackgroundImage: () => dg,
    BackgroundImageFull: () => lg,
    BadgeBarFiller: () => s_,
    BadgeBoxIntro: () => o_,
    BigNum: () => yg,
    ButtonCtn: () => $g,
    ButtonIcon: () => e_,
    CapRow: () => Ug,
    CapsuleCtn: () => Ag,
    ChartStuff: () => bg,
    ChartWidthHelper: () => wg,
    ContentWrapper: () => Qg,
    DemoPlayDetails: () => Pg,
    Disabled: () => t_,
    ElementFadeIn: () => ug,
    EvenGradient: () => sg,
    FirstPlayCtn: () => Mg,
    FullWidth: () => Yh,
    GameChart: () => Sg,
    GameChartCtn: () => xg,
    GameChartFirstPlayed: () => Cg,
    GameContentCtn: () => Tg,
    GameCtn: () => Eg,
    GameDetailsPopup: () => Xg,
    GameItemDetails: () => Dg,
    GameLink: () => hg,
    GameLinks: () => mg,
    GamePlayDetails: () => Og,
    GameTitle: () => Yg,
    GameWrapper: () => n_,
    GamepadUI: () => r_,
    GraphTitle: () => Bg,
    HoursPlayed: () => qh,
    InfoContainer: () => pg,
    InfoContentSpacing: () => fg,
    IntroLine: () => ig,
    LoadingCtn: () => eg,
    LongestStreak: () => Wg,
    LongestStreakGamesWrapper: () => Hg,
    MoreButtonContainer: () => i_,
    NumSubtitle: () => rg,
    OddGradient: () => tg,
    PieCtn: () => zg,
    PlatformChartsCtn: () => Ig,
    PlatformChartsRow: () => Rg,
    PlatformDetailsSetup: () => Vg,
    PlatformSpacing: () => Lg,
    PlaytestPlayDetails: () => Fg,
    SelectedInfoCtn: () => cg,
    ShowMoreBtn: () => a_,
    SpecialFlags: () => Ng,
    StandardInfoCtn: () => ng,
    StatContainer: () => vg,
    StatsGroup: () => og,
    SteamDeckGameCapRow: () => kg,
    StreakCtn: () => Kg,
    TimePlayed: () => qg,
    Title: () => ag,
    TitleLongName: () => _g,
    TopGameBlockContainer: () => $h,
    TopGameTitle: () => Qh,
    TopGameTitleCtn: () => Zh,
    TopGamesContainer: () => Xh,
    TotalHoursContainer: () => Kh,
    TotalHoursSubtitle: () => Jh,
    UnavailableGame: () => Jg,
    Visible: () => Zg,
    default: () => c_,
    strGameDetailsTransitionTimeMS: () => Gh,
  }),
  Gh = `300ms`,
  Kh = `wIYiBzezGYc-`,
  qh = `VnoH-uQh03Y-`,
  Jh = `-NNdNMK5dTk-`,
  Yh = `nFWRruBwpxI-`,
  Xh = `JM6qKRW4grY-`,
  Zh = `_4RT2F1qWDf0-`,
  Qh = `mNRC0alPlMM-`,
  $h = `ZUs2MlmX1nw-`,
  eg = `xsI-Ph4IYTU-`,
  tg = `EunXAzl3zkY-`,
  ng = `orlaFahxAKc-`,
  rg = `ao7jCFf5gSI-`,
  ig = `GfwKvHYeK18-`,
  ag = `Y3O3VXtp-D8-`,
  og = `XGhwjejL9wI-`,
  sg = `_9nzY-F9xpiE-`,
  cg = `_3-uTrEiiMzE-`,
  lg = `Qh0Qui4WgT0-`,
  ug = `itZDEq-F1CU-`,
  dg = `QSp4obZnVo0-`,
  fg = `_3o5wxwNyWus-`,
  pg = `idhrMs53sfk-`,
  mg = `ulgSRWu9qlw-`,
  hg = `_3zY6l-RwMbM-`,
  gg = `mlF-EqS-dRc-`,
  _g = `FKqdvD3uF8E-`,
  vg = `XEHQVJnV1Do-`,
  yg = `Jsbe84OZILs-`,
  bg = `QJCEe-O2tKI-`,
  xg = `v6AigbmQ0CY-`,
  Sg = `xPrgBVyuYEE-`,
  Cg = `_1X4tYa2ADHY-`,
  wg = `AJaOL928lBE-`,
  Tg = `YDlYx-AV0BQ-`,
  Eg = `WWkwetmW1kk-`,
  Dg = `w-Y5hex-hO4-`,
  Og = `v6qwr186rUA-`,
  kg = `AdwjekHqa-w-`,
  Ag = `I9igJfhUSos-`,
  jg = `_4mSZbBPxm6s-`,
  Mg = `SjRQa1Q12OA-`,
  Ng = `onO-DMSltE0-`,
  Pg = `qEnvz1uXbQU-`,
  Fg = `pvLpzVIEyJQ-`,
  Ig = `FrX7CkXY94E-`,
  Lg = `MAfKrCX7pZU-`,
  Rg = `_8yz-q4EfKbc-`,
  zg = `finR-g0jShM-`,
  Bg = `zt5AycfIbtY-`,
  Vg = `_2fuIOljIHpg-`,
  Hg = `hvOxlXCSt2s-`,
  Ug = `X6gvHabLLJk-`,
  Wg = `mcYlyLIeBhs-`,
  Gg = `c42w8bI3Dx0-`,
  Kg = `yVvCXO9ZLwg-`,
  qg = `x6rpHBjxzTg-`,
  Jg = `_--0ITpMloRU-`,
  Yg = `h9g2oo0APag-`,
  Xg = `_9tm73MPUptI-`,
  Zg = `eAjysxH-TgY-`,
  Qg = `eFHWwCj3bVQ-`,
  $g = `p6eqlCr2YT0-`,
  e_ = `mzZt1E4LKBc-`,
  t_ = `sNJz4ri3Yvk-`,
  n_ = `_2y76lTJ5USE-`,
  r_ = `maE92CVTDsk-`,
  i_ = `z4JPVbkRELk-`,
  a_ = `dUBouRPf5BM-`,
  o_ = `i798-6QCweY-`,
  s_ = `_6FvqHneqGds-`,
  c_ = {
    strGameDetailsTransitionTimeMS: Gh,
    TotalHoursContainer: Kh,
    HoursPlayed: qh,
    TotalHoursSubtitle: Jh,
    FullWidth: Yh,
    TopGamesContainer: Xh,
    TopGameTitleCtn: Zh,
    TopGameTitle: Qh,
    TopGameBlockContainer: $h,
    LoadingCtn: eg,
    OddGradient: tg,
    StandardInfoCtn: ng,
    NumSubtitle: rg,
    IntroLine: ig,
    Title: ag,
    StatsGroup: og,
    EvenGradient: sg,
    SelectedInfoCtn: cg,
    BackgroundImageFull: lg,
    ElementFadeIn: ug,
    BackgroundImage: dg,
    InfoContentSpacing: fg,
    InfoContainer: pg,
    GameLinks: mg,
    GameLink: hg,
    AddToWishlist: gg,
    TitleLongName: _g,
    StatContainer: vg,
    BigNum: yg,
    ChartStuff: bg,
    GameChartCtn: xg,
    GameChart: Sg,
    GameChartFirstPlayed: Cg,
    ChartWidthHelper: wg,
    GameContentCtn: Tg,
    GameCtn: Eg,
    GameItemDetails: Dg,
    GamePlayDetails: Og,
    SteamDeckGameCapRow: kg,
    CapsuleCtn: Ag,
    Appear: jg,
    FirstPlayCtn: Mg,
    SpecialFlags: Ng,
    DemoPlayDetails: Pg,
    PlaytestPlayDetails: Fg,
    PlatformChartsCtn: Ig,
    PlatformSpacing: Lg,
    PlatformChartsRow: Rg,
    PieCtn: zg,
    GraphTitle: Bg,
    PlatformDetailsSetup: Vg,
    LongestStreakGamesWrapper: Hg,
    CapRow: Ug,
    LongestStreak: Wg,
    AnimateCap: Gg,
    StreakCtn: Kg,
    TimePlayed: qg,
    UnavailableGame: Jg,
    GameTitle: Yg,
    GameDetailsPopup: Xg,
    Visible: Zg,
    ContentWrapper: Qg,
    ButtonCtn: $g,
    ButtonIcon: e_,
    Disabled: t_,
    GameWrapper: n_,
    GamepadUI: r_,
    MoreButtonContainer: i_,
    ShowMoreBtn: a_,
    BadgeBoxIntro: o_,
    BadgeBarFiller: s_,
  },
  l_ = R.createContext({
    bIsUser: !1,
    persona_name: ``,
    avatar_url: ``,
    themeStyle: {},
  });
function u_() {
  return (0, R.useContext)(l_).bIsUser;
}
function K() {
  return (0, R.useContext)(l_).themeStyle;
}
function d_(e) {
  let t = w.logged_in,
    n = e?.content_descriptorids ?? [],
    r = u_(),
    i = c(),
    { data: a } = _n(),
    o = a ?? Ii(i),
    s =
      !!e &&
      (n.some((e) => o.setExcludedContentDescriptors.has(e)) ||
        (!!e.appid && o.mapIgnoredApps.has(e.appid)));
  return t ? !r && s : n.length > 0;
}
function f_() {
  return (0, R.useContext)(l_).persona_name;
}
function q() {
  let { persona_name: e, bIsUser: t } = (0, R.useContext)(l_);
  return R.useCallback((n, ...r) => Ql(L, n, t, e, ...r) ?? n, [t, e]);
}
function p_() {
  let { persona_name: e, bIsUser: t } = (0, R.useContext)(l_);
  return R.useCallback(
    (n, r, ...i) => {
      let a = Vh(n);
      return a && Ql(a, r, t, e, ...i);
    },
    [t, e],
  );
}
function J(e) {
  return e < 100
    ? L.Localize(`#YIR_Percent_Low`, `1`)
    : L.Localize(`#YIR_Percent`, Math.round(e / 100).toFixed(0));
}
function m_() {
  return !0;
}
function h_() {
  let e = m_(),
    t = mn();
  return R.useCallback(
    (n) =>
      ya(n, { weekday: `short`, year: e ? void 0 : `numeric`, timeZone: t }),
    [e, t],
  );
}
var Y = l(),
  g_ = { index: void 0, appids: [] },
  __ = R.createContext(g_),
  v_ = R.createContext(() => {});
function y_(e) {
  let [t, n] = R.useState(g_);
  return (0, Y.jsx)(v_.Provider, {
    value: n,
    children: (0, Y.jsx)(__.Provider, { value: t, children: e.children }),
  });
}
function b_(e) {
  return typeof e.index == `number` && e.appids.length > e.index
    ? e.appids[e.index]
    : null;
}
function x_() {
  let e = R.useContext(__);
  return { unAppID: b_(e), length: e.appids.length, index: e.index };
}
function S_() {
  let e = R.useContext(v_);
  return R.useCallback((t, n) => e({ index: t, appids: n }), [e]);
}
function C_(e, t) {
  let n = S_();
  return R.useCallback(() => n(e, t), [n, e, t]);
}
function w_(e) {
  let t = R.useContext(v_);
  return R.useCallback(() => {
    t((t) => (e >= 0 && e < t.appids.length ? { ...t, index: e } : t));
  }, [t, e]);
}
function T_() {
  let e = R.useContext(v_);
  return R.useCallback(
    (t) => {
      e((e) => (b_(e) == t ? g_ : e));
    },
    [e],
  );
}
var E_ = t({
    Achievements: () => _v,
    AllFirstPlayedCtn: () => Bv,
    AllPlayedContentCtn: () => zv,
    AllPlayedCtn: () => Rv,
    Answer: () => $v,
    Appear: () => B_,
    ArrowDownCtn: () => Mv,
    ArrowUpCtn: () => jv,
    AvatarName: () => F_,
    BackgroundImage: () => Q_,
    BackgroundImageCover: () => gv,
    BadgeBarFiller: () => ry,
    BadgeBoxIntro: () => ny,
    Big: () => bv,
    BigNum: () => tv,
    BottomCtn: () => ey,
    CompareArrow: () => kv,
    CompareCtn: () => Ov,
    CompareText: () => Av,
    ConclusionCtn: () => Jv,
    ContentCtn: () => sv,
    ControllerPortion: () => uv,
    DevToggle: () => Vv,
    DeviceBlock: () => rv,
    DeviceSummary: () => Nv,
    ElementFadeIn: () => ty,
    ErrorMsg: () => Kv,
    FAQSection: () => Xv,
    Game0: () => J_,
    Game1: () => Y_,
    Game2: () => X_,
    GenericBackground: () => Wv,
    GraphRelatedCtn: () => Fv,
    GridItem: () => q_,
    HardwareBlock: () => nv,
    HardwareStats: () => Pv,
    HardwareSummary: () => ov,
    HeaderCtn: () => N_,
    HeaderShareCtn: () => qv,
    InlineUserName: () => R_,
    KeyboardPortion: () => cv,
    Large: () => fv,
    LogInCtn: () => Uv,
    LoginButtonCtn: () => Gv,
    LongestStreakStat: () => Cv,
    MissingUserCtn: () => Hv,
    OverviewBlock: () => Z_,
    Question: () => Qv,
    QuestionCtn: () => Zv,
    Questions: () => Yv,
    RewindHeader: () => P_,
    SectionSubTitle: () => V_,
    SectionTitle: () => z_,
    SixNumbers: () => Ev,
    Small: () => dv,
    SmallLightText: () => Dv,
    SmallText: () => wv,
    Stat: () => lv,
    StatBox: () => xv,
    StreakBlock: () => $_,
    SubSummaryCtn: () => Sv,
    Subtitle: () => pv,
    SubtleBorder: () => av,
    SummaryArea: () => H_,
    SummaryBlockExtrasCtn: () => hv,
    SummaryBlockGameName: () => mv,
    SummaryBlockHugeNumCtn: () => ev,
    SummaryBlockTitle: () => vv,
    SummaryCtn: () => iv,
    SummaryCtnShadow: () => W_,
    SummaryGridCtn: () => U_,
    SummaryGridSparse: () => K_,
    SummaryGridStandard: () => G_,
    Tab: () => M_,
    TabBar: () => j_,
    TabCtn: () => A_,
    ThreeNumbers: () => Tv,
    TimeRelatedCtn: () => Iv,
    TopAreaSizer: () => O_,
    TopHonorsContent: () => k_,
    TopHonorsSection: () => Lv,
    UserAvatar: () => I_,
    UserName: () => L_,
    YearInReviewContainer: () => D_,
    YearInReviewContent: () => X,
    YearSubtitle: () => yv,
    default: () => iy,
  }),
  D_ = `KoPRGmgJJqo-`,
  X = `hJYEynQkmdU-`,
  O_ = `wbSwZ4ddIBM-`,
  k_ = `_06vjX6-LZ3o-`,
  A_ = `rb53CfOiFDE-`,
  j_ = `vK7--H0SAkw-`,
  M_ = `gMb-gEMJz-o-`,
  N_ = `ubb8Zl0avoo-`,
  P_ = `f5HUQVPUdec-`,
  F_ = `skidEiMf2PY-`,
  I_ = `_6BJlyLcB6b0-`,
  L_ = `EzNrIbLqFyI-`,
  R_ = `D317B3qRUg4-`,
  z_ = `jKX9urC1MxY-`,
  B_ = `_4nPP92NisYg-`,
  V_ = `bXtzee8AefM-`,
  H_ = `zn9KZEp--BA-`,
  U_ = `xJQGByL-21g-`,
  W_ = `Ir5Sa8Wyk54-`,
  G_ = `Du1AFzeoCqQ-`,
  K_ = `DtJ29CA3-5w-`,
  q_ = `gIuYhaWQ4fc-`,
  J_ = `fKe87BWrvfQ-`,
  Y_ = `_-5OsCs7YPk8-`,
  X_ = `Zg95Ba7p3Qw-`,
  Z_ = `_8Y3H4R2pQus-`,
  Q_ = `GAtCzNnRjO8-`,
  $_ = `dEuc93cpmYk-`,
  ev = `nZ9-nfKNk0k-`,
  tv = `ERwgqbs67Y0-`,
  nv = `e6T89MsSCU4-`,
  rv = `PSZWXs0q2BA-`,
  iv = `ojW6P77M2CU-`,
  av = `gq51gWeAGwg-`,
  ov = `y29Eo6crp1Y-`,
  sv = `lVezcGtu14c-`,
  cv = `XrqoWcWOWto-`,
  lv = `nuUlfFr-4go-`,
  uv = `BJLPLEcobNA-`,
  dv = `pM0nmAh-JmE-`,
  fv = `czEXrqIBjoY-`,
  pv = `V22nqpPVUDE-`,
  mv = `r7SaWklbiLk-`,
  hv = `WQbJEJwrh6A-`,
  gv = `yhKq8JqyhHU-`,
  _v = `NFRRVbS6gNQ-`,
  vv = `quOp3zDhs0Q-`,
  yv = `WtmqBEWwXUU-`,
  bv = `OiCGsb3ZVjo-`,
  xv = `-DExq33nuLc-`,
  Sv = `iO7bySBmLDQ-`,
  Cv = `rakWUwgngNs-`,
  wv = `Ro3m9drEqnI-`,
  Tv = `L57SkFUBplo-`,
  Ev = `YLnkFjFOQOs-`,
  Dv = `_0XQzOjcNRaw-`,
  Ov = `kCKbop9CpRg-`,
  kv = `_9tAN2yCIirs-`,
  Av = `kK5H6hWa6D4-`,
  jv = `BEY87Y5nD4o-`,
  Mv = `HaiVKIU8Khw-`,
  Nv = `qg0kxFOh1tk-`,
  Pv = `qK-bv0Ju3ZE-`,
  Fv = `Tyh9FPCHRrc-`,
  Iv = `xan-F7AKHTg-`,
  Lv = `msW7t3zPawc-`,
  Rv = `zWuJ9eO1deE-`,
  zv = `HguwBviDKIo-`,
  Bv = `_2m4YMjqffsc-`,
  Vv = `GDQOIFoBCP4-`,
  Hv = `GM1A55ZEulI-`,
  Uv = `jvwbuCbEfxI-`,
  Wv = `tGzVeFXNEfc-`,
  Gv = `CTJEahoyd2c-`,
  Kv = `gHS2We-nxiI-`,
  qv = `-vTPvlHUL7g-`,
  Jv = `ofmH8EfaBy4-`,
  Yv = `fGLzTigSNnY-`,
  Xv = `_6ALXCVcszOs-`,
  Zv = `X-87SlZ9MKU-`,
  Qv = `_38wDSMap-gY-`,
  $v = `bXJ94GBFl3U-`,
  ey = `DALsnbbp3sE-`,
  ty = `VgC9GOlWj28-`,
  ny = `XJWfnQSYNt8-`,
  ry = `FlPXt8CIBlI-`,
  iy = {
    YearInReviewContainer: D_,
    YearInReviewContent: X,
    TopAreaSizer: O_,
    TopHonorsContent: k_,
    TabCtn: A_,
    TabBar: j_,
    Tab: M_,
    HeaderCtn: N_,
    RewindHeader: P_,
    AvatarName: F_,
    UserAvatar: I_,
    UserName: L_,
    InlineUserName: R_,
    SectionTitle: z_,
    Appear: B_,
    SectionSubTitle: V_,
    SummaryArea: H_,
    SummaryGridCtn: U_,
    SummaryCtnShadow: W_,
    SummaryGridStandard: G_,
    SummaryGridSparse: K_,
    GridItem: q_,
    Game0: J_,
    Game1: Y_,
    Game2: X_,
    OverviewBlock: Z_,
    BackgroundImage: Q_,
    StreakBlock: $_,
    SummaryBlockHugeNumCtn: ev,
    BigNum: tv,
    HardwareBlock: nv,
    DeviceBlock: rv,
    SummaryCtn: iv,
    SubtleBorder: av,
    HardwareSummary: ov,
    ContentCtn: sv,
    KeyboardPortion: cv,
    Stat: lv,
    ControllerPortion: uv,
    Small: dv,
    Large: fv,
    Subtitle: pv,
    SummaryBlockGameName: mv,
    SummaryBlockExtrasCtn: hv,
    BackgroundImageCover: gv,
    Achievements: _v,
    SummaryBlockTitle: vv,
    YearSubtitle: yv,
    Big: bv,
    StatBox: xv,
    SubSummaryCtn: Sv,
    LongestStreakStat: Cv,
    SmallText: wv,
    ThreeNumbers: Tv,
    SixNumbers: Ev,
    SmallLightText: Dv,
    CompareCtn: Ov,
    CompareArrow: kv,
    CompareText: Av,
    ArrowUpCtn: jv,
    ArrowDownCtn: Mv,
    DeviceSummary: Nv,
    HardwareStats: Pv,
    GraphRelatedCtn: Fv,
    TimeRelatedCtn: Iv,
    TopHonorsSection: Lv,
    AllPlayedCtn: Rv,
    AllPlayedContentCtn: zv,
    AllFirstPlayedCtn: Bv,
    DevToggle: Vv,
    MissingUserCtn: Hv,
    LogInCtn: Uv,
    GenericBackground: Wv,
    LoginButtonCtn: Gv,
    ErrorMsg: Kv,
    HeaderShareCtn: qv,
    ConclusionCtn: Jv,
    Questions: Yv,
    FAQSection: Xv,
    QuestionCtn: Zv,
    Question: Qv,
    Answer: $v,
    BottomCtn: ey,
    ElementFadeIn: ty,
    BadgeBoxIntro: ny,
    BadgeBarFiller: ry,
  },
  ay = `C5cdndOEHt4-`,
  oy = `-q0-kXkWN9U-`,
  sy = `TB8Ftf6yNUE-`,
  cy = `EOEvelxRXZw-`,
  ly = `vCsbBq7knm8-`,
  uy = `_4hgWT24Sdeo-`,
  dy = `_7yIZmyI8qQk-`,
  fy = `omJUDnVgRY4-`,
  py = `wqTsvDkdQRg-`,
  my = `HJLVd81kwnI-`,
  hy = `TwAc8u5RE4g-`,
  gy = `_2dQ-fNFsnAo-`,
  _y = `nDPpMWikWgc-`,
  vy = `_6qFV0psARg8-`,
  yy = `Di5p4F2SHus-`,
  by = `p34Ga9p9kxA-`,
  xy = `_6dXzDQP9ksI-`,
  Sy = `_8-zKy--vwkI-`,
  Cy = `iKMpkIE2CyM-`,
  wy = `S9H5nON1Nw0-`,
  Ty = `-c1ti2-skhU-`,
  Ey = `uvBrTjofppg-`,
  Z = {
    Section: ay,
    Windows: oy,
    Linux: sy,
    Controller: cy,
    Mac: ly,
    Deck: uy,
    CapRow: dy,
    PlatformContentsCtn: fy,
    VR: py,
    SectionTitle: my,
    BackgroundImage: hy,
    Playtest: gy,
    BG_Playtest: _y,
    Demo: vy,
    BG_Demo: yy,
    GameImage: by,
    SectionSubTitle: xy,
    ElementFadeIn: Sy,
    StatsRow: Cy,
    StatBlock: wy,
    BigNum: Ty,
    StatDescription: Ey,
    DemoSash: `WwCfmup4R-o-`,
    BadgeBoxIntro: `XGtVJBBHDi4-`,
    BadgeBarFiller: `_-0RNm-50A-I-`,
    Appear: `_52VPPk07IBk-`,
  },
  Q = e(o(), 1);
function $(e) {
  let { className: t, children: n, strClassOnFirstVisible: r } = e,
    [i, a] = (0, R.useState)(!1);
  return (0, Y.jsx)(ps, {
    trigger: `once`,
    onVisibilityChange: a,
    className: (0, Q.default)(t, i ? r || `NowVisible` : void 0),
    children: n,
  });
}
function Dy(e) {
  let {
      category: t,
      userYearInReview: n,
      strClassName: r,
      bgImageURL: i,
      title: a,
      subTitle: o,
      disclaimer: s,
      subTitleTokenIfMax: c,
    } = e,
    l = n.GetRawStats(),
    {
      nTotalGames: u,
      nTotalSessions: d,
      nTotalPercentage: f,
    } = (0, R.useMemo)(() => Hm(l, t), [l, t]),
    { rgResults: p, nTotalResultCount: m } = (0, R.useMemo)(
      () => Rm(n, t, 5, f),
      [n, t, f, 5],
    ),
    h = (0, R.useMemo)(() => p.map((e) => e.parent_appid || e.appid), [p]),
    [g, _] = (0, R.useState)(
      p.length > 0 ? p[0].parent_appid || p[0].appid : 0,
    ),
    { isLoading: v, data: ee } = Ah(h, t == `vr`),
    y = Oy(p, t, v, ee),
    te =
      t === `overall` || t === `controller` || t == `demo` || t == `playtest`;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(r, t, fy),
    children: [
      (0, Y.jsx)(`div`, { className: my, children: a }),
      !!i && (0, Y.jsx)(`img`, { alt: ``, src: i, className: `TwAc8u5RE4g-` }),
      t === `vr` && g > 0 && (0, Y.jsx)(ky, { appid: g }),
      (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(X, Cy),
        children: [
          (0, Y.jsxs)(`div`, {
            className: wy,
            children: [
              (0, Y.jsx)(`div`, { className: Ty, children: E(u) }),
              (0, Y.jsx)(`div`, {
                className: Ey,
                children: L.LocalizePlural(`#YIR_NewLine_Games`, u),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: wy,
            children: [
              (0, Y.jsx)(`div`, { className: Ty, children: E(d) }),
              (0, Y.jsx)(`div`, {
                className: Ey,
                children: L.LocalizePlural(`#YIR_NewLine_Session`, d),
              }),
            ],
          }),
          !te && (0, Y.jsx)(Ny, { percentVal: f, subToken: `#YIR_NewLine` }),
        ],
      }),
      !!o && (0, Y.jsx)(`div`, { className: `_6dXzDQP9ksI-`, children: o }),
      !o &&
        !!c &&
        m > 5 &&
        y > 0 &&
        (0, Y.jsx)(`div`, {
          className: `_6dXzDQP9ksI-`,
          children: L.Localize(c, y),
        }),
      !!s && (0, Y.jsx)(`div`, { className: void 0, children: s }),
      (0, Y.jsx)($, {
        className: kg,
        children: (0, Y.jsx)(Ay, {
          rgGamePercentages: p,
          category: t,
          fnOnHoverApp: _,
        }),
      }),
    ],
  });
}
function Oy(e, t, n, r) {
  return (0, R.useMemo)(
    () =>
      n || !r
        ? 0
        : e.reduce((e, n) => {
            let i = n.parent_appid || n.appid,
              a = r.get(i)?.info.visible,
              o = (t != `demo` && t != `playtest`) || n.parent_appid;
            return e + (a && o ? 1 : 0);
          }, 0),
    [e, n, r, t],
  );
}
function ky(e) {
  let { appid: t } = e,
    { data: n } = pa({ appid: t }),
    r = ol();
  if (!n) return null;
  let i = n.all_ages_screenshots ?? [],
    a = (
      r == `blocked`
        ? i
        : [...i, ...(n.mature_content_screenshots ?? [])].sort(
            (e, t) => e.ordinal - t.ordinal,
          )
    )[1];
  if (!a) return null;
  let o = r == `masked` && !i.includes(a);
  return (0, Y.jsx)(`img`, {
    alt: ``,
    src: Vn(a),
    className: (0, Q.default)({ [by]: !0, [void 0]: o }),
  });
}
function Ay(e) {
  let { rgGamePercentages: t, category: n, fnOnHoverApp: r } = e,
    i = t.map((e) => e.appid),
    a;
  switch (n) {
    case `demo`:
      a = 1;
      break;
    case `playtest`:
      a = 12;
  }
  return (0, Y.jsx)(A, {
    "flow-children": `grid`,
    className: (0, Q.default)(X, dy, Ug),
    children: t.map((e, t) =>
      (0, Y.jsx)(
        jy,
        {
          appid: e.appid,
          strInfo: e.nPercentagex100 === void 0 ? void 0 : J(e.nPercentagex100),
          nParentAppID: e.parent_appid,
          eChildType: a,
          index: t,
          loading: `eager`,
          rgAppIDs: i,
          fnOnMouseEvent: () => r && r(e.appid),
        },
        n + `_` + e.appid,
      ),
    ),
  });
}
function jy(e) {
  let {
      appid: t,
      strInfo: n,
      rgAppIDs: r,
      index: i,
      loading: a,
      fnOnMouseEvent: o,
      nParentAppID: s,
      eChildType: c,
    } = e,
    { item: l, bLoading: u } = kh(c == null ? t : s),
    d = C_(i, r);
  if (u) return null;
  if (!l || !l.info.visible)
    return s && (c == 1 || c == 12)
      ? (0, Y.jsx)(jy, { ...e, nParentAppID: s, eChildType: 0 })
      : null;
  let f = $i(l.assets, `library_capsule`);
  return (0, Y.jsxs)(`a`, {
    className: Ag,
    onClick: d,
    onMouseEnter: o,
    children: [
      f
        ? (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsxs)(`div`, {
                className: Ng,
                children: [
                  s &&
                    c == 1 &&
                    (0, Y.jsx)(`div`, {
                      className: `qEnvz1uXbQU-`,
                      children: L.Localize(`#YIR_Played_Demo`),
                    }),
                  s &&
                    c == 12 &&
                    (0, Y.jsx)(`div`, {
                      className: `pvLpzVIEyJQ-`,
                      children: L.Localize(`#YIR_Played_PlayTest`),
                    }),
                ],
              }),
              (0, Y.jsx)(`img`, { loading: a, src: f, alt: l.info.name }),
            ],
          })
        : (0, Y.jsx)(My, { item: l.info }),
      !!n && (0, Y.jsx)(`div`, { className: `x6rpHBjxzTg-`, children: n }),
    ],
  });
}
function My(e) {
  let { item: t } = e;
  return (0, Y.jsxs)(`div`, {
    className: Jg,
    children: [
      (0, Y.jsx)(`img`, { src: Uh, alt: t.name || `` + t.appid }),
      (0, Y.jsx)(`div`, { className: Yg, children: t.name }),
    ],
  });
}
function Ny(e) {
  let { percentVal: t, subToken: n } = e,
    r = J(t),
    i = `${n}_Percent`;
  return (0, Y.jsxs)(`div`, {
    className: wy,
    children: [
      (0, Y.jsx)(`div`, { className: Ty, children: r }),
      (0, Y.jsx)(`div`, { className: Ey, children: L.Localize(i) }),
    ],
  });
}
var Py = `_1zHgawHGZQ8-`,
  Fy = `maZLLs320ng-`,
  Iy = `FBNO-i1eCDU-`,
  Ly = `lvInkGaT6tc-`,
  Ry = `CdHUHmprZLc-`,
  zy = `_0Di7EGWRhhg-`,
  By = `xhff4YTQuUs-`,
  Vy = `KxbX2VmSNpY-`;
function Hy(e) {
  let { userYearInReview: t, nYear: n } = e,
    r = K(),
    i = (0, R.useMemo)(() => {
      let e = new Set();
      return (
        t.GetPlayTimeStats().game_summary.forEach((t) => {
          !t.demo && !t.playtest
            ? e.add(t.appid)
            : t.parent_appid && e.add(t.parent_appid);
        }),
        Array.from(e)
      );
    }, [t]),
    { isLoading: a } = Ah(i),
    o = q(),
    s = [
      {
        name: L.Localize(`#YIR_FirstTime_Tab_MonthlyGrid`),
        key: `firsttimebymonth`,
        contents: (0, Y.jsx)(T, {
          children: (0, Y.jsx)(`div`, {
            className: Py,
            children: (0, Y.jsx)(Ky, { userYearInReview: t, nYear: n }),
          }),
        }),
      },
      {
        name: L.Localize(`#YIR_FirstTime_Tab_Grid`),
        key: `firsttimegrid`,
        contents: (0, Y.jsx)(T, {
          children: (0, Y.jsx)(Gy, { userYearInReview: t, nYear: n }),
        }),
      },
    ];
  return i.length == 0
    ? null
    : (0, Y.jsxs)($, {
        className: Bv,
        children: [
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)(zy, r.AllGamesBGImage),
          }),
          (0, Y.jsxs)(`div`, {
            className: X,
            children: [
              (0, Y.jsx)(`div`, {
                className: z_,
                children: o(`#YIR_FirstTime_Title`, i.length),
              }),
              a
                ? (0, Y.jsx)(nn, {
                    size: `medium`,
                    position: `center`,
                    string: Yn.Localize(`#Loading`),
                  })
                : (0, Y.jsx)(`div`, {
                    className: A_,
                    children: (0, Y.jsx)(Uy, {
                      className: j_,
                      classNameTab: (0, Q.default)(M_, r.Tab),
                      tabs: s,
                    }),
                  }),
            ],
          }),
        ],
      });
}
function Uy(e) {
  let { className: t, classNameTab: n, tabs: r } = e,
    [i, a] = (0, R.useState)(r[0]?.key);
  if (!r.length) return null;
  let o = r.find(({ key: e }) => e === i) ?? r[0];
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(A, {
        className: (0, Q.default)(By, t),
        navEntryPreferPosition: lo.FIRST,
        children: r.map((e) =>
          (0, Y.jsx)(
            Wy,
            {
              className: n,
              active: e.key === o.key,
              onActivate: () => a(e.key),
              children: e.name,
            },
            e.key,
          ),
        ),
      }),
      (0, Y.jsx)(A, { children: o.contents }),
    ],
  });
}
function Wy(e) {
  let { className: t, active: n, onActivate: r, children: i } = e;
  return (0, Y.jsx)(A, {
    className: (0, Q.default)(Vy, n && `_2Nz6-T0g-zc-`, n && `ActiveTab`, t),
    onActivate: r,
    children: i,
  });
}
function Gy(e) {
  let { nYear: t, userYearInReview: n } = e,
    r = n.GetPlayTimeStats().game_summary,
    i = q(),
    [a, o] = R.useState(!1),
    { bShouldShowMore: s, rgGamesInOrderOfPlaytime: c } = (0, R.useMemo)(() => {
      let e = new Set(),
        t = r
          .filter(
            (t) =>
              !e.has(t.appid) &&
              (e.add(t.appid), t.parent_appid || (!t.demo && !t.playtest)),
          )
          .sort(
            (e, t) =>
              t.total_playtime_percentagex100 - e.total_playtime_percentagex100,
          )
          .map((e) => ({
            appid: e.appid,
            nPercentagex100: e.total_playtime_percentagex100,
            bNewThisYear: !!e.new_this_year,
            bIsDemo: !!e.demo,
            bIsPlaytest: !!e.playtest,
            nParentAppID: e.parent_appid,
          })),
        n = r.length > 100 && !a;
      return {
        bShouldShowMore: n,
        rgGamesInOrderOfPlaytime: n ? t.slice(0, 100) : t,
      };
    }, [r, a]);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(Jy, {
        nYear: t,
        rgGamesInOrderOfPlaytime: c,
        strTooltip: i(`#YIR_FirstTime_Percentages`),
      }),
      s &&
        (0, Y.jsx)(`div`, {
          className: `z4JPVbkRELk-`,
          children: (0, Y.jsx)(`a`, {
            href: `#`,
            className: `dUBouRPf5BM-`,
            onClick: () => o(!0),
            children: L.Localize(`#YIR_ShowMore`),
          }),
        }),
    ],
  });
}
function Ky(e) {
  let { nYear: t, userYearInReview: n } = e,
    r = n.GetRawStats().playtime_stats.months;
  return (0, Y.jsx)(Y.Fragment, {
    children: r
      .filter((e) => e.stats.total_sessions > 0)
      .map((e) =>
        (0, Y.jsx)(
          qy,
          { month: e, userYearInReview: n, nYear: t },
          `outermonth` + e.rtime_month,
        ),
      ),
  });
}
function qy(e) {
  let { nYear: t, userYearInReview: n, month: r } = e,
    i = m_(),
    a = q(),
    [o, s] = R.useState(!1),
    { bShouldShowMore: c, rgGameStats: l } = (0, R.useMemo)(() => {
      let e = r.game_summary
          .filter((e) => {
            let t = n.GetGameSummaryForApp(e.appid);
            return (
              Li(
                t,
                `Displaying Month Data ${r.rtime_month} missing summary for appid: ${e.appid}`,
              ),
              t && (t.parent_appid || (!t.demo && !t.playtest))
            );
          })
          .sort(
            (e, t) =>
              t.relative_playtime_percentagex100 -
              e.relative_playtime_percentagex100,
          )
          .map((e) => {
            let t = n.GetGameSummaryForApp(e.appid);
            return {
              appid: t.appid,
              nPercentagex100: e.relative_playtime_percentagex100,
              bNewThisYear: !!t.new_this_year,
              bIsDemo: !!t.demo,
              bIsPlaytest: !!t.playtest,
              nParentAppID: t.parent_appid,
            };
          }),
        t = e.length > 8 && !o;
      return { bShouldShowMore: t, rgGameStats: t ? e.slice(0, 8) : e };
    }, [r.game_summary, r.rtime_month, o, n]);
  if (l.length == 0) return null;
  let u = new Date((r.rtime_month + 86400) * 1e3);
  return (0, Y.jsxs)(
    `div`,
    {
      className: Fy,
      children: [
        (0, Y.jsx)(`div`, {
          className: Ly,
          children: i
            ? L.Localize(
                `#YIR_MonthlyGrid_MonthSingular_${u.getUTCMonth() + 1}`,
              )
            : Zr(u),
        }),
        (0, Y.jsx)(Jy, {
          rgGamesInOrderOfPlaytime: l,
          nYear: t,
          strTooltip: a(`#YIR_FirstTime_MonthlyPercentages`),
        }),
        c &&
          (0, Y.jsx)(`div`, {
            className: `z4JPVbkRELk-`,
            children: (0, Y.jsx)(`a`, {
              href: `#`,
              className: `dUBouRPf5BM-`,
              onClick: () => s(!0),
              children: L.Localize(`#YIR_ShowMore`),
            }),
          }),
      ],
    },
    `monthgroup_` + r.rtime_month,
  );
}
function Jy(e) {
  let { nYear: t, rgGamesInOrderOfPlaytime: n, strTooltip: r } = e,
    i = S_(),
    { data: a } = Ah(
      (0, R.useMemo)(() => n.map((e) => e.nParentAppID || e.appid), [n]),
    ),
    o = n.filter((e) => a?.has(e.nParentAppID || e.appid)),
    s = o.map((e) => e.appid),
    c = o.map((e, n) =>
      (0, Y.jsx)(
        Yy,
        {
          appid: e.nParentAppID || e.appid,
          bNewThisYear: e.bNewThisYear,
          fnOnClick: () => i(n, s),
          nYear: t,
          strPercentage:
            e.nPercentagex100 === void 0 ? void 0 : J(e.nPercentagex100),
          strTooltip: r,
          bIsDemo: e.bIsDemo,
          bIsPlayTest: e.bIsPlaytest,
        },
        e.appid,
      ),
    );
  return (0, Y.jsx)(A, {
    "flow-children": `grid`,
    className: (0, Q.default)(Mg, Iy),
    children: c,
  });
}
function Yy(e) {
  let {
      nYear: t,
      appid: n,
      bNewThisYear: r,
      fnOnClick: i,
      strPercentage: a,
      strTooltip: o,
      bIsDemo: s,
      bIsPlayTest: c,
    } = e,
    { item: l } = kh(n),
    u = Lr(l && Qt(l.info)) || ``,
    d = K();
  if (!l || !l.info.visible) return null;
  let f = $i(l.assets, `library_capsule`);
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)({ [Eg]: !0, [Ry]: !0, [void 0]: r }),
    onClick: (e) => {
      i && (e.preventDefault(), i());
    },
    children: (0, Y.jsx)(pe, {
      appid: n,
      children: (0, Y.jsxs)(`a`, {
        href: i ? void 0 : u,
        className: Ag,
        children: [
          (!!r || !!s || !!c) &&
            (0, Y.jsxs)(`div`, {
              className: `onO-DMSltE0-`,
              children: [
                !!r &&
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(
                      `v6qwr186rUA-`,
                      d.GamePlayDetails,
                    ),
                    children: L.Localize(`#YIR_FirstTime_Played`, t),
                  }),
                !!s &&
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(
                      `qEnvz1uXbQU-`,
                      d.DemoPlayDetails,
                    ),
                    children: L.Localize(`#YIR_Played_Demo`),
                  }),
                !!c &&
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(
                      `pvLpzVIEyJQ-`,
                      d.PlaytestPlayDetails,
                    ),
                    children: L.Localize(`#YIR_Played_PlayTest`),
                  }),
              ],
            }),
          f
            ? (0, Y.jsx)(`img`, { alt: ``, loading: `lazy`, src: f })
            : (0, Y.jsx)(My, { item: l.info }),
          !!a &&
            (0, Y.jsx)(Sa, {
              toolTipContent: o,
              className: `x6rpHBjxzTg-`,
              children: a,
            }),
        ],
      }),
    }),
  });
}
var Xy = `-mIgF6AA5LY-`,
  Zy = `Vi83-LkMtoI-`,
  Qy = `YXohyZxdvfQ-`,
  $y = `-XC-c1uz0Ko-`,
  eb = `zZFozEpTZI0-`,
  tb = `xUqkAY4Oj3o-`,
  nb = `rwGMj4tdqJs-`,
  rb = `-ZlfMJZNVtw-`,
  ib = `F6KTgf9lssw-`,
  ab = 9e3,
  ob = 1,
  sb = 50;
function cb(e) {
  let t = e
    .GetPlayTimeStats()
    .games.map((t) => e.GetGameSummaryForApp(t.appid))
    .filter((e) => e && (e.parent_appid || (!e.demo && !e.playtest)));
  if (t.length == 0) return { eType: `basic` };
  let n = t[0].total_playtime_percentagex100 ?? 0;
  return e.GetPlayTimeStats().game_summary.length < ob || n >= ab
    ? { eType: `single`, appid: t[0].parent_appid || t[0].appid }
    : {
        eType: `tiles`,
        rgAppIDs: Array.from(
          new Set(
            e
              .GetPlayTimeStats()
              .game_summary.filter(
                (e) => e.parent_appid || (!e.demo && !e.playtest),
              )
              .sort(
                (e, t) =>
                  t.total_playtime_percentagex100 -
                  e.total_playtime_percentagex100,
              )
              .slice(0, sb)
              .map((e) => e.parent_appid || e.appid),
          ),
        ),
      };
}
var lb = `ugL-G4FTy2w-`,
  ub = `c8-WfKGtCq8-`,
  db = `OsIwsZtSRZQ-`,
  fb = `_1RZIc4-Ydv8-`,
  pb = `_4Q73gvvwSoU-`,
  mb = `_6LO5BaihEDc-`,
  hb = `bV66XEiP5a8-`;
function gb(e) {
  let {
    children: t,
    className: n,
    squareClassName: r,
    gridClassName: i,
    bEvenTiles: a,
    bFadeInTiles: o,
    bDrift: s,
  } = e;
  return (0, Y.jsx)(`div`, {
    className: pl(lb, n),
    children: (0, Y.jsx)(`div`, {
      className: pl(ub, !o && `dXaS0YLAPWg-`),
      children: (0, Y.jsx)(`div`, {
        className: pl(db, s && `dKtBrMD331I-`, r),
        children: (0, Y.jsx)(`div`, {
          className: pl({ [fb]: !0, [mb]: !a, [hb]: o }, i),
          children: t,
        }),
      }),
    }),
  });
}
function _b(e) {
  return (0, Y.jsx)(`img`, {
    className: pl(pb, e.className),
    src: e.strImageURL,
    alt: ``,
  });
}
function vb(e) {
  let { userYearInReview: t, children: n } = e,
    r = (0, R.useMemo)(() => cb(t), [t]);
  return r.eType == `basic`
    ? (0, Y.jsx)(Sb, { children: n })
    : r.eType == `single`
      ? (0, Y.jsx)(xb, { appid: r.appid, children: n })
      : (0, Y.jsx)(yb, { rgAppIDs: r.rgAppIDs, children: n });
}
function yb(e) {
  let { rgAppIDs: t, children: n } = e,
    r = K(),
    { data: i } = Ah(t),
    { rgStoreItems: a, rgImageURLs: o } = (0, R.useMemo)(() => {
      if (!i) return { rgStoreItems: null, rgImageURLs: null };
      let e = t.map((e) => i.get(e)).filter((e) => !!e && !!e.assets);
      return { rgStoreItems: e, rgImageURLs: bb(e) };
    }, [t, i]);
  return a
    ? (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(gb, {
            className: (0, Q.default)(Xy, r.ImagesCtn),
            squareClassName: Zy,
            gridClassName: (0, Q.default)({
              [Qy]: !0,
              [tb]: a.length <= 10,
              [eb]: a.length <= 20,
              [$y]: a.length <= 40,
            }),
            bFadeInTiles: !0,
            bDrift: !0,
            children: o.map((e, t) =>
              (0, Y.jsx)(_b, { strImageURL: e, className: nb }, t),
            ),
          }),
          n,
        ],
      })
    : (0, Y.jsx)(Sb, { children: n });
}
function bb(e) {
  let t = (e) => (
      Li(e.assets, `Cannot get image without assets`),
      $i(e.assets, `library_hero`, `main_capsule`)
    ),
    n = (e) => (
      Li(e.assets, `Cannot get image without assets`),
      $i(e.assets, `raw_page_background`, `main_capsule`)
    ),
    r = e.map(t);
  return (
    e.length <= 50 && r.push(...e.map(n)),
    e.length <= 20 && r.push(...e.map(t)),
    r
  );
}
function xb(e) {
  let { appid: t, children: n } = e,
    { item: r } = kh(t),
    i = K();
  return r
    ? (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)(Xy, i.ImagesCtn),
            children: (0, Y.jsx)(`div`, {
              className: (0, Q.default)(rb, i.SingleGame),
              children: (0, Y.jsx)(`div`, {
                className: (0, Q.default)(ib, i.ImageTint),
                children: (0, Y.jsx)(`img`, {
                  alt: ``,
                  src: $i(r.assets, `library_hero`),
                }),
              }),
            }),
          }),
          n,
        ],
      })
    : (0, Y.jsx)(Sb, { children: n });
}
function Sb(e) {
  return (0, Y.jsx)(`div`, { className: void 0, children: e.children });
}
var Cb = t({
    Active: () => Mx,
    Appear: () => xx,
    BadgeBarFiller: () => Bb,
    BadgeBox: () => Tb,
    BadgeBoxIntro: () => Eb,
    BadgeContents: () => Db,
    BadgeDesc: () => Wb,
    BadgeGetBtn: () => Gb,
    BadgeImgCtn: () => Ub,
    BadgeName: () => Hb,
    BadgeRarity_common: () => Ob,
    BadgeRarity_epic: () => Mb,
    BadgeRarity_legendary: () => Nb,
    BadgeRarity_rare: () => jb,
    BadgeRarity_uncommon: () => Ab,
    DataBox: () => Ix,
    DataBoxArrow: () => zx,
    DataBoxesContainer: () => Px,
    Disabled: () => ax,
    ElementFadeIn: () => Vx,
    FillerBar: () => Rb,
    FillerDots: () => ix,
    FlavorLabel: () => Fx,
    GameNewnessComparisonContainer: () => Ox,
    GameNewnessDataCnt: () => kx,
    GameNewnessTitle: () => Bx,
    Glitter: () => fx,
    GlitterBox: () => ux,
    GlitterSecond: () => dx,
    GraphBox: () => Yb,
    HalfwidthColumn: () => qb,
    NumbersLabel: () => nx,
    NumbersRow: () => tx,
    NumbersRowsCnt: () => ex,
    NumbersValue: () => rx,
    PercentageDescriptionLabel: () => Rx,
    PercentageLabel: () => Lx,
    PlayBehaviorContainer: () => cx,
    PlayBehaviorSectionSubTitle: () => hx,
    PlayNewnessContainer: () => Dx,
    PlayerBehaviorProgressCnt: () => gx,
    ProgressBar: () => Tx,
    ProgressBarFilled: () => lx,
    ProgressBarWrapper: () => _x,
    ProgressIcon: () => Sx,
    ProgressIconSVG: () => Cx,
    ProgressLabel: () => Ex,
    ProgressLabelsCnt: () => vx,
    ProgressRightSide: () => wx,
    ProgressSteamAvgLabel: () => yx,
    RadarChartLegend: () => $b,
    RadarText: () => Xb,
    RadarTextContainer: () => Zb,
    RarityBar: () => Ib,
    RarityBarSegment: () => Lb,
    RarityDesc: () => Vb,
    RarityInfoCtn: () => Fb,
    RarityText: () => kb,
    RightCol: () => Pb,
    RightSideContainer: () => Nx,
    SectionDesc: () => sx,
    SectionLabel: () => ox,
    SegmentCap: () => zb,
    SpiderAndNumbersCnt: () => Kb,
    SpiderResponsiveContainer: () => Qb,
    SpidergraphContainer: () => Jb,
    TopHonorsCtn: () => wb,
    WheelArc: () => jx,
    WheelChart: () => Ax,
    default: () => Hx,
    glitterMove: () => px,
    glitterMove2: () => mx,
    progressBar: () => bx,
  }),
  wb = `_8MMZZOMlBHA-`,
  Tb = `kjlSrD84bUs-`,
  Eb = `CnBmGiFtNT0-`,
  Db = `_2H6regBFr4A-`,
  Ob = `xMSIrz8QNm4-`,
  kb = `IveJy5QZXYo-`,
  Ab = `_571YhehUkx4-`,
  jb = `-nnBxrwGwuc-`,
  Mb = `J6oM-PiOKAA-`,
  Nb = `KSTPULVW5bQ-`,
  Pb = `gUjbsGPoR4E-`,
  Fb = `x3GiOuwvZgI-`,
  Ib = `_2z5eG5DUYNA-`,
  Lb = `OcZxMthyO1Q-`,
  Rb = `dogr49iCxO0-`,
  zb = `xIw4nr0zmDU-`,
  Bb = `hrrpNs-t5os-`,
  Vb = `d2u0-poYQ6Q-`,
  Hb = `RP9sAnKzwq4-`,
  Ub = `YCkJBRdHX74-`,
  Wb = `wsZ4D5OBXxA-`,
  Gb = `VbvjmHdYZUs-`,
  Kb = `PMUu6aR8bT0-`,
  qb = `NTDxIz9hpZQ-`,
  Jb = `-LL-rRwXHvQ-`,
  Yb = `udPMl22PhSc-`,
  Xb = `URBSKU-uKts-`,
  Zb = `p7VrPSl4acM-`,
  Qb = `xPpu-EhMrzM-`,
  $b = `e5EFq580oLg-`,
  ex = `lkrsOd-pN7M-`,
  tx = `gdGCZIz-fdM-`,
  nx = `_2AcQ3eLZpqQ-`,
  rx = `aBL1S716KHI-`,
  ix = `_9kf74DPWJHs-`,
  ax = `MvmFmRp0gao-`,
  ox = `qFjJzWZ5t6U-`,
  sx = `lBH0gHt22Fc-`,
  cx = `EcABZ-m3zvk-`,
  lx = `ntvLkao7PkE-`,
  ux = `NJBuZKTDzAE-`,
  dx = `n62MYB6VP4U-`,
  fx = `FVHCXXtwkMc-`,
  px = `FZJGl5gD9TA-`,
  mx = `_9WKfAIJ7GYg-`,
  hx = `_0jnwL-HxS8o-`,
  gx = `r-PiY57GlY8-`,
  _x = `E8dRIfC8z8U-`,
  vx = `qffLKsSHu0M-`,
  yx = `aKnZAgIhrq0-`,
  bx = `MAhYpOkM9Zs-`,
  xx = `_4xkdBuilUW8-`,
  Sx = `_1paAUH9-U80-`,
  Cx = `QwRTqCa5RJI-`,
  wx = `_54a2wTltSQo-`,
  Tx = `ACraqmlP6JQ-`,
  Ex = `Em-W-2-scx4-`,
  Dx = `_93HCZZaF-GQ-`,
  Ox = `Lj6zc-CzUcI-`,
  kx = `PPF1V2vagl4-`,
  Ax = `Os1d9o6QJ48-`,
  jx = `ncAmk-wH-LE-`,
  Mx = `DXcvT92GGo8-`,
  Nx = `AaHMu4lT7dk-`,
  Px = `xBfnjHBm-1E-`,
  Fx = `mJeXM2yr-2Q-`,
  Ix = `RRGyT0y5ixE-`,
  Lx = `GKnUCAKm6-M-`,
  Rx = `_3mHbUC3OZ1w-`,
  zx = `eeacvOJIz2s-`,
  Bx = `TUUDCjzjuow-`,
  Vx = `f5WBpNOlO1E-`,
  Hx = {
    TopHonorsCtn: wb,
    BadgeBox: Tb,
    BadgeBoxIntro: Eb,
    BadgeContents: Db,
    BadgeRarity_common: Ob,
    RarityText: kb,
    BadgeRarity_uncommon: Ab,
    BadgeRarity_rare: jb,
    BadgeRarity_epic: Mb,
    BadgeRarity_legendary: Nb,
    RightCol: Pb,
    RarityInfoCtn: Fb,
    RarityBar: Ib,
    RarityBarSegment: Lb,
    FillerBar: Rb,
    SegmentCap: zb,
    BadgeBarFiller: Bb,
    RarityDesc: Vb,
    BadgeName: Hb,
    BadgeImgCtn: Ub,
    BadgeDesc: Wb,
    BadgeGetBtn: Gb,
    SpiderAndNumbersCnt: Kb,
    HalfwidthColumn: qb,
    SpidergraphContainer: Jb,
    GraphBox: Yb,
    RadarText: Xb,
    RadarTextContainer: Zb,
    SpiderResponsiveContainer: Qb,
    RadarChartLegend: $b,
    NumbersRowsCnt: ex,
    NumbersRow: tx,
    NumbersLabel: nx,
    NumbersValue: rx,
    FillerDots: ix,
    Disabled: ax,
    SectionLabel: ox,
    SectionDesc: sx,
    PlayBehaviorContainer: cx,
    ProgressBarFilled: lx,
    GlitterBox: ux,
    GlitterSecond: dx,
    Glitter: fx,
    glitterMove: px,
    glitterMove2: mx,
    PlayBehaviorSectionSubTitle: hx,
    PlayerBehaviorProgressCnt: gx,
    ProgressBarWrapper: _x,
    ProgressLabelsCnt: vx,
    ProgressSteamAvgLabel: yx,
    progressBar: bx,
    Appear: xx,
    ProgressIcon: Sx,
    ProgressIconSVG: Cx,
    ProgressRightSide: wx,
    ProgressBar: Tx,
    ProgressLabel: Ex,
    PlayNewnessContainer: Dx,
    GameNewnessComparisonContainer: Ox,
    GameNewnessDataCnt: kx,
    WheelChart: Ax,
    WheelArc: jx,
    Active: Mx,
    RightSideContainer: Nx,
    DataBoxesContainer: Px,
    FlavorLabel: Fx,
    DataBox: Ix,
    PercentageLabel: Lx,
    PercentageDescriptionLabel: Rx,
    DataBoxArrow: zx,
    GameNewnessTitle: Bx,
    ElementFadeIn: Vx,
  },
  Ux = ({
    spaceAroundCount: e,
    endValue: t,
    maxValue: n,
    duration: r = 1e3,
    startAnimation: i = !1,
    stopAnimation: a = !1,
    onAnimationStart: o,
    onAnimationStop: s,
    delay: c = 0,
    className: l,
  }) => {
    let [u, d] = (0, R.useState)(0),
      f = R.useRef(null),
      p = (e) => (e < 0.5 ? 4 * e ** 3 : 1 - (-2 * e + 2) ** 3 / 2);
    return (
      (0, R.useEffect)(() => {
        let e = null,
          l = () => {
            if (!e) return;
            let i = Date.now() - e,
              a = Math.min(1, i / r),
              o = p(a),
              s = Math.round((n ?? t) * o);
            s <= t ? (d(s), (f.current = requestAnimationFrame(l))) : d(t);
          };
        return (
          i &&
            (o && o(),
            window.setTimeout(() => {
              ((e = Date.now()),
                o && o(),
                (f.current = requestAnimationFrame(l)));
            }, c)),
          () => {
            (f.current && cancelAnimationFrame(f.current), a && s && s());
          }
        );
      }, [t, r, i, a, o, s, c, n]),
      e
        ? (0, Y.jsxs)(Y.Fragment, { children: [`\xA0`, dl(u), `\xA0`] })
        : (0, Y.jsx)(Y.Fragment, { children: dl(u) })
    );
  };
function Wx() {
  typeof ae == `function`
    ? ae({
        measureText: (e, t) => {
          let n = e.toString(),
            r = typeof t?.fontSize == `number` ? t.fontSize : 13;
          return { width: n.length * 8, height: r * 1.3 };
        },
      })
    : console.error(
        `Cannot find configureTextMeasurement. Recharts not patched correctly for this context.`,
      );
}
Wx();
var Gx = () => {
    let e = K();
    return (0, Y.jsxs)(`svg`, {
      className: (0, Q.default)(Cx, void 0, e.IconStreak),
      x: `0px`,
      y: `0px`,
      width: `100px`,
      height: `100px`,
      viewBox: `0 0 220 256`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, Y.jsx)(`path`, {
          d: `M62.8236 111.578C62.8236 118.539 57.1801 124.183 50.2186 124.183C43.257 124.183 37.6135 118.539 37.6135 111.578C37.6135 104.616 43.257 98.9728 50.2186 98.9728C57.1801 98.9728 62.8236 104.616 62.8236 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M104.84 111.578C104.84 118.539 99.197 124.183 92.2354 124.183C85.2738 124.183 79.6304 118.539 79.6304 111.578C79.6304 104.616 85.2738 98.9728 92.2354 98.9728C99.197 98.9728 104.84 104.616 104.84 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M146.857 111.578C146.857 118.539 141.214 124.183 134.252 124.183C127.29 124.183 121.647 118.539 121.647 111.578C121.647 104.616 127.29 98.9728 134.252 98.9728C141.214 98.9728 146.857 104.616 146.857 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M188.874 111.578C188.874 118.539 183.23 124.183 176.269 124.183C169.307 124.183 163.664 118.539 163.664 111.578C163.664 104.616 169.307 98.9728 176.269 98.9728C183.23 98.9728 188.874 104.616 188.874 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M62.8236 153.595C62.8236 160.556 57.1801 166.2 50.2186 166.2C43.257 166.2 37.6135 160.556 37.6135 153.595C37.6135 146.633 43.257 140.99 50.2186 140.99C57.1801 140.99 62.8236 146.633 62.8236 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M104.84 153.595C104.84 160.556 99.197 166.2 92.2354 166.2C85.2738 166.2 79.6304 160.556 79.6304 153.595C79.6304 146.633 85.2738 140.99 92.2354 140.99C99.197 140.99 104.84 146.633 104.84 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M146.857 153.595C146.857 160.556 141.214 166.2 134.252 166.2C127.29 166.2 121.647 160.556 121.647 153.595C121.647 146.633 127.29 140.99 134.252 140.99C141.214 140.99 146.857 146.633 146.857 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M188.874 153.595C188.874 160.556 183.23 166.2 176.269 166.2C169.307 166.2 163.664 160.556 163.664 153.595C163.664 146.633 169.307 140.99 176.269 140.99C183.23 140.99 188.874 146.633 188.874 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M62.8236 195.611C62.8236 202.573 57.1801 208.216 50.2186 208.216C43.257 208.216 37.6135 202.573 37.6135 195.611C37.6135 188.65 43.257 183.006 50.2186 183.006C57.1801 183.006 62.8236 188.65 62.8236 195.611Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M104.84 195.611C104.84 202.573 99.197 208.216 92.2354 208.216C85.2738 208.216 79.6304 202.573 79.6304 195.611C79.6304 188.65 85.2738 183.006 92.2354 183.006C99.197 183.006 104.84 188.65 104.84 195.611Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M146.857 195.611C146.857 202.573 141.214 208.216 134.252 208.216C127.29 208.216 121.647 202.573 121.647 195.611C121.647 188.65 127.29 183.006 134.252 183.006C141.214 183.006 146.857 188.65 146.857 195.611Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M216.696 196.876C218.637 198.84 218.617 202.006 216.653 203.947L197.527 222.839C194.78 225.552 190.355 225.529 187.636 222.787L177.266 212.324C175.322 210.363 175.336 207.197 177.297 205.253C179.258 203.309 182.424 203.323 184.368 205.284L192.63 213.62L209.625 196.832C211.59 194.892 214.755 194.911 216.696 196.876Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M169.538 8H156.974V44.6175L169.538 44.6175V8ZM156.974 0C152.556 0 148.974 3.58172 148.974 7.99999V12.8068H78.3153V8C78.3153 3.58172 74.7335 0 70.3153 0H57.7515C53.3332 0 49.7515 3.58172 49.7515 7.99999V12.8068H12C5.37258 12.8068 0 18.1794 0 24.8068V108.777C0 110.986 1.79086 112.777 4 112.777C6.20914 112.777 8 110.986 8 108.777V77.7627H162.73C164.939 77.7627 166.73 75.9718 166.73 73.7627C166.73 71.5536 164.939 69.7627 162.73 69.7627H8V24.8068C8 22.5976 9.79086 20.8068 12 20.8068H49.7515V44.6175C49.7515 49.0358 53.3332 52.6175 57.7515 52.6175H70.3153C74.7335 52.6175 78.3153 49.0358 78.3153 44.6175V20.8068H148.974V44.6175C148.974 49.0358 152.556 52.6175 156.974 52.6175H169.538C173.956 52.6175 177.538 49.0358 177.538 44.6175V20.8068H214.487C216.696 20.8068 218.487 22.5976 218.487 24.8068V69.7627H181.404C179.195 69.7627 177.404 71.5536 177.404 73.7627C177.404 75.9718 179.195 77.7627 181.404 77.7627H218.487V174.637C212.078 170.481 204.434 168.067 196.227 168.067C173.602 168.067 155.26 186.408 155.26 209.034C155.26 216.458 157.235 223.421 160.689 229.426H12C9.79086 229.426 8 227.636 8 225.426V127.918C8 125.709 6.20914 123.918 4 123.918C1.79086 123.918 0 125.709 0 127.918V225.426C0 232.054 5.37256 237.426 12 237.426H166.695C174.149 245.177 184.625 250 196.227 250C218.852 250 237.193 231.659 237.193 209.034C237.193 198.394 233.137 188.702 226.487 181.419V24.8068C226.487 18.1794 221.115 12.8068 214.487 12.8068H177.538V8C177.538 3.58172 173.956 0 169.538 0H156.974ZM229.193 209.034C229.193 227.24 214.434 242 196.227 242C178.02 242 163.26 227.24 163.26 209.034C163.26 190.827 178.02 176.067 196.227 176.067C214.434 176.067 229.193 190.827 229.193 209.034ZM57.7515 8H70.3153V44.6175L57.7515 44.6175V8Z`,
          fill: `#E5E5E5`,
        }),
      ],
    });
  },
  Kx = () => {
    let e = K();
    return (0, Y.jsxs)(`svg`, {
      className: (0, Q.default)(Cx, void 0, e.IconGamesPlayed),
      x: `0px`,
      y: `0px`,
      width: `100px`,
      height: `100px`,
      viewBox: `0 0 215 215`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, Y.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M37.6146 37.7144C-0.630497 75.9444 -0.631195 137.928 37.6151 176.159C66.7056 205.238 109.551 212.205 145.234 197.037C147.268 196.173 149.617 197.12 150.481 199.153C151.345 201.186 150.397 203.534 148.364 204.399C109.781 220.8 63.4338 213.28 31.9583 181.817C-9.41226 140.463 -9.41295 73.4128 31.9588 32.0574C33.5213 30.4955 36.0541 30.4957 37.6159 32.0578C39.1777 33.6199 39.1771 36.1525 37.6146 37.7144Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M57.6852 17.4447C56.6914 15.4719 57.4852 13.0669 59.4583 12.0728C99.1749 -7.93684 148.868 -1.37195 182.042 31.7888C223.412 73.143 223.413 140.193 182.041 181.548C180.479 183.11 177.946 183.11 176.384 181.548C174.822 179.986 174.823 177.453 176.385 175.891C214.63 137.661 214.631 75.6779 176.385 37.4467C145.724 6.79791 99.7824 0.714176 63.0573 19.2167C61.0842 20.2108 58.679 19.4174 57.6852 17.4447Z`,
          fill: `#E5E5E5`,
        }),
        (0, Y.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M106.838 188.612C152.036 188.612 188.676 151.986 188.676 106.806C188.676 61.6257 152.036 25 106.838 25C61.6402 25 25 61.6257 25 106.806C25 151.986 61.6402 188.612 106.838 188.612ZM142.994 113.577C148.329 110.499 148.329 102.799 142.994 99.7197L93.9972 71.4425C88.6639 68.3645 81.9984 72.2136 81.9984 78.3714L81.9984 134.926C81.9984 141.084 88.6639 144.933 93.9972 141.855L142.994 113.577Z`,
          fill: `#E5E5E5`,
        }),
      ],
    });
  },
  qx = () => {
    let e = K();
    return (0, Y.jsx)(`svg`, {
      className: (0, Q.default)(Cx, void 0, e.IconAchievement),
      x: `0px`,
      y: `0px`,
      width: `100px`,
      height: `120px`,
      viewBox: `0 0 240 276`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, Y.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M107.636 23.0644L120.478 8.96963L133.319 23.0644C137.003 27.1077 142.704 28.6353 147.916 26.9756L166.085 21.19L170.159 39.8174C171.327 45.1608 175.501 49.3343 180.844 50.5029L199.472 54.5768L193.686 72.7455C192.026 77.9573 193.554 83.6585 197.597 87.3422L211.692 100.184L197.597 113.026C193.554 116.709 192.026 122.411 193.686 127.622L199.472 145.791L180.844 149.865C175.501 151.034 171.327 155.207 170.159 160.551L166.085 179.178L147.916 173.392C142.704 171.733 137.003 173.26 133.319 177.303L120.478 191.398L107.636 177.303C103.952 173.26 98.251 171.733 93.0392 173.392L74.8705 179.178L70.7966 160.551C69.628 155.207 65.4545 151.034 60.1111 149.865L41.4837 145.791L47.2693 127.622C48.929 122.411 47.4014 116.709 43.3581 113.026L29.2633 100.184L43.3581 87.3422C47.4014 83.6584 48.929 77.9573 47.2693 72.7455L41.4837 54.5768L60.1111 50.5029C65.4545 49.3343 69.628 45.1608 70.7966 39.8174L74.8705 21.19L93.0391 26.9756C98.251 28.6353 103.952 27.1077 107.636 23.0644ZM116.042 1.95909C118.422 -0.653032 122.533 -0.653031 124.913 1.9591L139.233 17.6766C140.812 19.4094 143.255 20.0641 145.489 19.3528L165.749 12.9011C169.116 11.8289 172.676 13.8842 173.431 17.3363L177.974 38.1081C178.475 40.3982 180.263 42.1868 182.553 42.6877L203.325 47.2305C206.777 47.9855 208.833 51.5454 207.76 54.9125L201.309 75.1729C200.598 77.4065 201.252 79.8499 202.985 81.4286L218.703 95.7488C221.315 98.1287 221.315 102.239 218.703 104.619L202.985 118.939C201.252 120.518 200.598 122.961 201.309 125.195L207.76 145.455C208.833 148.823 206.777 152.382 203.325 153.137L190.801 155.876L239.847 236.34C242.331 240.415 239.521 245.659 234.753 245.849L206.74 246.963C204.683 247.045 202.798 248.133 201.698 249.874L186.727 273.576C184.178 277.611 178.232 277.422 175.945 273.234L131.275 191.426L124.913 198.409C122.533 201.021 118.422 201.021 116.042 198.409L109.564 191.298L64.8244 273.234C62.5373 277.422 56.5913 277.611 54.0427 273.576L39.0711 249.874C37.9718 248.133 36.0867 247.045 34.0298 246.963L6.01687 245.849C1.24829 245.659 -1.56099 240.415 0.922882 236.34L49.9904 155.841L37.63 153.137C34.1779 152.382 32.1226 148.823 33.1948 145.455L39.6465 125.195C40.3578 122.961 39.7031 120.518 37.9703 118.939L22.2528 104.619C19.6407 102.239 19.6407 98.1286 22.2528 95.7487L37.9703 81.4286C39.7031 79.8499 40.3578 77.4065 39.6465 75.1729L33.1948 54.9125C32.1226 51.5454 34.1779 47.9855 37.63 47.2305L58.4018 42.6877C60.6919 42.1868 62.4805 40.3982 62.9814 38.1081L67.5242 17.3363C68.2792 13.8842 71.8391 11.8289 75.2062 12.9011L95.4666 19.3528C97.7002 20.0641 100.144 19.4094 101.722 17.6766L116.042 1.95909ZM58.2574 157.649L9.29666 237.973L34.3478 238.969C39.0346 239.156 43.3299 241.636 45.8348 245.601L59.2235 266.798L103.865 185.043L101.722 182.691C100.144 180.959 97.7002 180.304 95.4666 181.015L75.2062 187.467C71.8391 188.539 68.2792 186.484 67.5242 183.032L62.9814 162.26C62.4805 159.97 60.6919 158.181 58.4018 157.68L58.2574 157.649ZM136.974 185.17L181.546 266.798L194.935 245.601C197.44 241.636 201.735 239.156 206.422 238.969L231.473 237.973L182.534 157.684C180.253 158.191 178.473 159.976 177.974 162.26L173.431 183.032C172.676 186.484 169.116 188.539 165.749 187.467L145.489 181.015C143.255 180.304 140.812 180.959 139.233 182.691L136.974 185.17ZM146.738 53.2766C121.119 38.4858 88.3612 47.2633 73.5704 72.8818C62.3219 92.3648 64.7011 115.986 77.7705 132.691C79.1317 134.431 78.8247 136.945 77.0848 138.307C75.3449 139.668 72.8309 139.361 71.4697 137.621C56.4587 118.434 53.7068 91.2865 66.6422 68.8818C83.6422 39.437 121.293 29.3484 150.738 46.3484C152.651 47.453 153.307 49.8993 152.202 51.8125C151.097 53.7257 148.651 54.3812 146.738 53.2766ZM167.979 60.9959C166.588 59.2794 164.069 59.0153 162.353 60.406C160.636 61.7967 160.372 64.3156 161.763 66.032C175.326 82.7723 177.936 106.79 166.527 126.551C151.737 152.169 118.978 160.947 93.3599 146.156C91.4467 145.051 89.0003 145.707 87.8957 147.62C86.7912 149.533 87.4467 151.98 89.3599 153.084C118.805 170.084 156.456 159.996 173.456 130.551C186.575 107.827 183.558 80.2246 167.979 60.9959Z`,
        fill: `#E5E5E5`,
      }),
    });
  };
function Jx(e) {
  let { userYearInReview: t } = e,
    n = K();
  return (0, Y.jsx)($, {
    className: (0, Q.default)(Lv, n.TopHonorsSection),
    children: (0, Y.jsx)(`div`, {
      className: (0, Q.default)(X, k_),
      children: (0, Y.jsxs)(`div`, {
        className: wb,
        children: [
          (0, Y.jsx)(Yx, { userYearInReview: t }),
          (0, Y.jsxs)(`div`, {
            className: Kb,
            children: [
              (0, Y.jsx)($x, { userYearInReview: t }),
              (0, Y.jsx)(rS, { userYearInReview: t }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Yx(e) {
  let { userYearInReview: t } = e;
  t.GetYear();
  let n = q(),
    r = K(),
    i = t.GetPlayTimeStats().summary_stats?.total_achievements || 0,
    a = t.GetFilteredGameSummary()?.length || 0,
    o = t.GetPlayTimeStats().playtime_streak?.longest_consecutive_days || 0,
    s = t.GetPlayTimeStats().by_numbers?.achievements_pct || 0,
    c = t.GetPlayTimeStats().by_numbers?.games_played_pct || 0,
    l = t.GetPlayTimeStats().by_numbers?.game_streak_pct || 0,
    u = o > 0 && l > 0 && !Im();
  (s >= 99 && (s = 100),
    c >= 99 && (c = 100),
    l >= 99 && (l = 100),
    i == t.GetPlayTimeStats().by_numbers?.achievements_avg && (s = 50),
    a == t.GetPlayTimeStats().by_numbers?.games_played_avg && (c = 50),
    o == t.GetPlayTimeStats().by_numbers?.game_streak_avg && (l = 50),
    i == 0 && (s = 0),
    a == 0 && (c = 0),
    o == 0 && (l = 0));
  let [d, f] = R.useState(!1),
    [p, m] = R.useState(!1),
    [h, g] = R.useState(!1),
    _ = R.useCallback(async (e) => {
      e && (f(!0), m(!0), g(!0));
    }, []),
    v = (0, Y.jsx)(Ux, {
      endValue: i,
      maxValue: (i * 100) / s,
      duration: 2e3,
      startAnimation: d,
      delay: 500,
    }),
    ee = (0, Y.jsx)(Ux, {
      endValue: a,
      maxValue: (a * 100) / c,
      duration: 2e3,
      startAnimation: p,
      delay: 700,
    }),
    y = (0, Y.jsx)(Ux, {
      endValue: o,
      maxValue: (o * 100) / l,
      duration: 2e3,
      startAnimation: h,
      delay: 900,
    });
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(cx, r.PlayBehaviorContainer),
    children: [
      (0, Y.jsx)(`div`, {
        className: z_,
        children: n(`#YIR_Compare_Title_Label`),
      }),
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(V_, hx),
        children: n(`#YIR_Compare_Subtitle_Label`),
      }),
      (0, Y.jsxs)(ps, {
        onVisibilityChange: _,
        children: [
          (0, Y.jsx)(Xx, {
            progressLabel: n(
              i == 1
                ? `#YIR_Compare_PlayerProgress_Achievements_Single`
                : `#YIR_Compare_PlayerProgress_Achievements_Label`,
              v,
            ),
            userPercent: s,
            steamAverage: t.GetPlayTimeStats().by_numbers?.achievements_avg,
            progressIcon: (0, Y.jsx)(qx, {}),
          }),
          (0, Y.jsx)(Xx, {
            progressLabel: n(
              a == 1
                ? `#YIR_Compare_PlayerProgress_PlayedGames_Single`
                : `#YIR_Compare_PlayerProgress_PlayedGames_Label`,
              ee,
            ),
            userPercent: c,
            steamAverage: t.GetPlayTimeStats().by_numbers?.games_played_avg,
            progressIcon: (0, Y.jsx)(Kx, {}),
          }),
          u &&
            (0, Y.jsx)(Xx, {
              progressLabel: n(
                o == 1
                  ? `#YIR_Compare_PlayerProgress_LongestStreak_Single`
                  : `#YIR_Compare_PlayerProgress_LongestStreak_Label`,
                y,
              ),
              userPercent: l,
              steamAverage: t.GetPlayTimeStats().by_numbers?.game_streak_avg,
              progressIcon: (0, Y.jsx)(Gx, {}),
            }),
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: Dx,
        children: (0, Y.jsx)(Qx, { userYearInReview: t }),
      }),
    ],
  });
}
function Xx(e) {
  let {
      progressLabel: t,
      steamAverage: n,
      progressIcon: r,
      userPercent: i,
    } = e,
    a = K();
  return (
    (i = Os(i, 0, 100)),
    (0, Y.jsxs)($, {
      className: gx,
      children: [
        (0, Y.jsx)(`div`, { className: Sx, children: r }),
        (0, Y.jsxs)(`div`, {
          className: wx,
          children: [
            (0, Y.jsx)(`div`, {
              className: (0, Q.default)(Ex, a.ProgressLabel),
              children: t,
            }),
            (0, Y.jsx)(`div`, {
              className: Tx,
              children: (0, Y.jsx)(`div`, {
                className: _x,
                children: (0, Y.jsx)(`div`, {
                  className: (0, Q.default)(
                    lx,
                    a.ProgressBarFilled,
                    a.ProgressBarFilledGradient,
                  ),
                  style: {
                    clipPath:
                      `polygon(0% 0, ` + i + `% 0%, ` + i + `% 100%, 0% 100%)`,
                  },
                  children: (0, Y.jsxs)(`div`, {
                    className: ux,
                    children: [
                      (0, Y.jsx)(`div`, { className: fx }),
                      (0, Y.jsx)(`div`, { className: (0, Q.default)(fx, dx) }),
                    ],
                  }),
                }),
              }),
            }),
            (0, Y.jsx)(`div`, {
              className: vx,
              children:
                n &&
                (0, Y.jsx)(`div`, {
                  className: `aKnZAgIhrq0-`,
                  children: L.Localize(
                    `#YIR_Compare_PlayerProgress_Steam_Avg`,
                    n,
                  ),
                }),
            }),
          ],
        }),
      ],
    })
  );
}
var Zx = {
  NewActive: `#YIR_Compare_NewGames_Flavor`,
  UsedActive: `#YIR_Compare_ComfortGames_Flavor`,
  OldActive: `#YIR_Compare_OldGames_Flavor`,
};
function Qx(e) {
  let { userYearInReview: t } = e,
    n = t.GetYear(),
    r = K(),
    i = r.new_games_color,
    a = r.used_games_color,
    o = r.old_games_color,
    [s, c] = (0, R.useState)(`NewActive`),
    l = q(),
    u = t.GetGlobalGameplayDistribition(),
    d = {
      NewActive: u?.new_releases || 0,
      UsedActive: u?.recent_releases || 0,
      OldActive: u?.classic_releases || 0,
    },
    f = u && u.new_releases ? u.recent_cutoff_year : 7,
    p = f + 1,
    [m, h, g] = R.useMemo(() => {
      let e = t.GetGameAgeCounts([1, p]),
        n = e.reduce((e, t) => t + e, 0);
      if (n == 0) return [0, 0, 0];
      let r = e.map((e) => Math.floor((e * 100) / n)),
        i = 100 - r.reduce((e, t) => t + e, 0),
        a = e.map((e, t) => ({ decimal: ((e * 100) / n) % 1, index: t }));
      for (
        a = a.sort((e, t) => e.decimal - t.decimal);
        i > 0 && a.length > 0;
      ) {
        let e = a.pop();
        ((r[e.index] += 1), --i);
      }
      return r;
    }, [t, p]),
    _ = { NewActive: m, UsedActive: h, OldActive: g },
    v = {
      NewActive: l(`#YIR_Compare_NewGames_Desc_User`, n),
      UsedActive: l(`#YIR_Compare_ComfortGames_Desc_User`, f),
      OldActive: l(`#YIR_Compare_OldGames_Desc_User`, p),
    },
    ee = {
      NewActive: L.Localize(`#YIR_Compare_NewGames_Desc_AvgSteam`, n),
      UsedActive: L.Localize(`#YIR_Compare_ComfortGames_Desc_AvgSteam`, f),
      OldActive: L.Localize(`#YIR_Compare_OldGames_Desc_AvgSteam`, p),
    },
    y = (0, R.useMemo)(() => {
      let e = [];
      return (
        e.push({ name: `new`, value: m > 0 ? m : 1 }),
        e.push({ name: `used`, value: h > 0 ? h : 1 }),
        e.push({ name: `old`, value: g > 0 ? g : 1 }),
        e
      );
    }, [m, h, g]);
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(Ox, Cb[s], r[s]),
    children: [
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(Bx, r.GameNewnessTitle),
        children: L.LocalizeReact(
          `#YIR_Compare_Flavor_Title`,
          (0, Y.jsx)(`div`, {}),
        ),
      }),
      (0, Y.jsxs)(`div`, {
        className: kx,
        children: [
          (0, Y.jsx)(`div`, {
            className: Ax,
            children: (0, Y.jsx)(kp, {
              responsive: !0,
              style: { width: `100%`, aspectRatio: 1 },
              children: (0, Y.jsxs)(wf, {
                data: y,
                dataKey: `value`,
                nameKey: `name`,
                cx: `50%`,
                cy: `50%`,
                innerRadius: `48%`,
                outerRadius: `92%`,
                fill: `#8884d8`,
                paddingAngle: 3,
                minAngle: 2,
                startAngle: 45,
                endAngle: 405,
                children: [
                  (0, Y.jsx)(
                    re,
                    {
                      onMouseEnter: () => c(`NewActive`),
                      className: (0, Q.default)(
                        jx,
                        s === `NewActive` && `DXcvT92GGo8-`,
                      ),
                      fill: i,
                      style:
                        s === `NewActive`
                          ? { opacity: `1` }
                          : { opacity: `0.75` },
                    },
                    `cell-1`,
                  ),
                  (0, Y.jsx)(
                    re,
                    {
                      onMouseEnter: () => c(`UsedActive`),
                      className: (0, Q.default)(
                        jx,
                        s === `UsedActive` && `DXcvT92GGo8-`,
                      ),
                      fill: a,
                      style:
                        s === `UsedActive`
                          ? { opacity: `1` }
                          : { opacity: `0.75` },
                    },
                    `cell-2`,
                  ),
                  (0, Y.jsx)(
                    re,
                    {
                      onMouseEnter: () => c(`OldActive`),
                      className: (0, Q.default)(
                        jx,
                        s === `OldActive` && `DXcvT92GGo8-`,
                      ),
                      fill: o,
                      style:
                        s === `OldActive`
                          ? { opacity: `1` }
                          : { opacity: `0.75` },
                    },
                    `cell-3`,
                  ),
                ],
              }),
            }),
          }),
          (0, Y.jsx)(`div`, {
            className: Nx,
            children: (0, Y.jsxs)(`div`, {
              className: Px,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: (0, Q.default)(
                    void 0,
                    r.UserData,
                    Ix,
                    r.DataBox,
                    r.Background,
                  ),
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(
                        zx,
                        r.DataBoxArrow,
                        r.Background,
                      ),
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: (0, Q.default)(Lx, r.PercentageLabel, r.Color),
                      children: [
                        L.Localize(`#YIR_Compare_Percentage`, _[s]),
                        (0, Y.jsx)(`div`, {
                          className: Fx,
                          children: L.Localize(Zx[s]),
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(
                        Rx,
                        r.PercentageDescriptionLabel,
                        r.Color,
                      ),
                      children: v[s],
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: (0, Q.default)(
                    void 0,
                    r.SteamData,
                    Ix,
                    r.DataBox,
                    r.Border,
                  ),
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(Lx, r.PercentageLabel, r.Color),
                      children: L.Localize(`#YIR_Compare_Percentage`, d[s]),
                    }),
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(
                        Rx,
                        r.PercentageDescriptionLabel,
                        r.Color,
                      ),
                      children: ee[s],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function $x(e) {
  let { userYearInReview: t } = e,
    n = t.GetUserAggregateTagData(),
    { data: r } = ml(N.LANGUAGE),
    i = q(),
    a = K(),
    o = eS(),
    s = n.map((e) => e.nPreSelectionWeight).sort((e, t) => t - e),
    c = n.map((e, t) => {
      let n = s.findIndex((t) => t - e.nPreSelectionWeight < 1e-5);
      return { subject: r && r[e.nTagId], A: (6 - n) * 10 + 2 * t + 0.5 };
    });
  if (c.length == 0) return null;
  let l = c.map((e, t) => (0, Y.jsx)(`li`, { children: e.subject }, t));
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(Jb, qb),
    children: [
      (0, Y.jsx)(`div`, {
        className: ox,
        children: L.Localize(`#YIR_Spider_Title`),
      }),
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(sx, a.SectionDesc),
        children: i(`#YIR_Spider_Desc`, t.GetYear()),
      }),
      (0, Y.jsx)(`div`, {
        className: Yb,
        children: (0, Y.jsxs)(Mp, {
          responsive: !0,
          className: Qb,
          style: { width: `100%`, height: `100%` },
          cx: `50%`,
          cy: `50%`,
          outerRadius: `70%`,
          data: c,
          children: [
            (0, Y.jsx)(gd, {}),
            (0, Y.jsx)(Ld, {
              tick: (0, Y.jsx)(tS, { bNumberedLabels: o }),
              dataKey: `subject`,
            }),
            (0, Y.jsx)(yp, {
              name: `tempRadar`,
              dataKey: `A`,
              stroke: `#8884d8`,
              fill: `#8884d8`,
              fillOpacity: 1,
              animationDuration: 2e3,
              isAnimationActive: !0,
            }),
          ],
        }),
      }),
      o &&
        (0, Y.jsxs)(`ol`, {
          className: `e5EFq580oLg-`,
          children: [` `, l, ` `],
        }),
    ],
  });
}
function eS() {
  let [e, t] = (0, R.useState)(!1);
  return ((0, R.useEffect)(() => t(Fc() || window.innerWidth <= 300), []), e);
}
function tS(e) {
  let { payload: t, x: n, verticalAnchor: r, bNumberedLabels: i, ...a } = e;
  return i
    ? (0, Y.jsx)(`text`, {
        x: n,
        ...a,
        children: (0, Y.jsx)(`tspan`, {
          x: n,
          dy: `20px`,
          children: t.index + 1,
        }),
      })
    : (0, Y.jsx)(`svg`, {
        x: n - 85,
        ...a,
        width: `170px`,
        height: `100%`,
        children: (0, Y.jsx)(`foreignObject`, {
          className: Zb,
          dy: `20px`,
          width: `170`,
          height: `150`,
          children: (0, Y.jsx)(`div`, { className: Xb, children: t.value }),
        }),
      });
}
function nS(e) {
  let t = e.GetRawStats().playtime_stats?.by_numbers;
  return t
    ? [
        [`#YIR_ByTheNum_Friends`, t.friends_added || 0],
        [`#YIR_ByTheNum_GiftsSent`, t.gifts_sent || 0],
        [`#YIR_ByTheNum_AwardsGiven`, t.loyalty_reactions || 0],
        [`#YIR_ByTheNum_Badges`, t.badges_earned || 0],
        [`#YIR_ByTheNum_Screenshots`, t.screenshots_shared || 0],
        [`#YIR_ByTheNum_Reviews`, t.written_reviews || 0],
        [`#YIR_ByTheNum_Posts`, t.forum_posts || 0],
        [`#YIR_ByTheNum_Guides`, t.guides_submitted || 0],
        [`#YIR_ByTheNum_GuideSubs`, t.guide_subscribers || 0],
        [`#YIR_ByTheNum_Workshops`, t.workshop_contributions || 0],
        [`#YIR_ByTheNum_WorkshopSubscribers`, t.workshop_subscribers || 0],
        [`#YIR_ByTheNum_WorkshopSubscriptions`, t.workshop_subscriptions || 0],
      ].sort((e, t) => t[1] - e[1])
    : [];
}
function rS(e) {
  let { userYearInReview: t } = e,
    n = nS(t);
  if (n.length == 0) return null;
  let r = n.map(([e, t]) =>
    (0, Y.jsx)(iS, { label: L.Localize(e), value: t }, e),
  );
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(void 0, qb),
    children: [
      (0, Y.jsx)(`div`, {
        className: ox,
        children: L.Localize(`#YIR_ByTheNum_Title`),
      }),
      (0, Y.jsx)(`div`, { className: ex, children: r }),
    ],
  });
}
function iS(e) {
  let { label: t, value: n } = e,
    r = n ? E(n) : `-`;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(tx, n == 0 && `MvmFmRp0gao-`),
    children: [
      (0, Y.jsx)(`div`, { className: nx, children: t }),
      (0, Y.jsx)(`div`, { className: ix }),
      (0, Y.jsx)(`div`, { className: rx, children: r }),
    ],
  });
}
var aS = `Wdvtmz-DIUA-`,
  oS = `_30hJH5z6jtk-`,
  sS = `nFsP-fXNWUA-`,
  cS = `c1gySWWvs3I-`;
function lS(e) {
  let { userYearInReview: t } = e;
  if (w.is_support || w.accountid == t.GetAccountID()) {
    let e = t.GetSteamID(),
      n = t.GetYear();
    return (0, Y.jsxs)(on, {
      rootMargin: `0px 0px 100% 0px`,
      children: [
        (0, Y.jsx)(uS, { steamid: e, year: n }),
        (0, Y.jsx)(fS, { steamid: e, year: n }),
      ],
    });
  }
  return null;
}
function uS(e) {
  let { steamid: t, year: n } = e,
    { data: r } = Ch(t);
  if (!r || r.is_not_member_of_any_group || !r.family_group) return null;
  let i = (r.family_group.members ?? [])
    .map((e) => e.steamid)
    .filter((e) => !!e && e !== t);
  return i.length == 0
    ? null
    : (0, Y.jsxs)(`div`, {
        className: oS,
        children: [
          (0, Y.jsx)(`div`, {
            className: sS,
            children: L.Localize(`#YIR_FamilyShared`),
          }),
          (0, Y.jsx)(`div`, {
            className: cS,
            children: i.map((e) =>
              (0, Y.jsx)(
                pS,
                { steamid: e, year: n, ePrivacy: 3, bPrivacyOverride: !1 },
                `family_` + e,
              ),
            ),
          }),
        ],
      });
}
var dS = 50;
function fS(e) {
  let { steamid: t, year: n } = e,
    { isLoading: r, data: i } = xh(t, n),
    a = (0, R.useMemo)(
      () =>
        i
          ? [...i]
              .sort(
                (e, t) =>
                  (t.rt_privacy_updated ?? 0) - (e.rt_privacy_updated ?? 0),
              )
              .slice(0, dS)
          : [],
      [i],
    ),
    o = (0, R.useMemo)(
      () => a.map((e) => new wa(e.steamid).GetAccountID()),
      [a],
    ),
    s = Yl(o);
  if (r || o?.length == 0 || !s) return null;
  let c = new Map();
  for (let e of s) e && e.steamid && c.set(e.steamid, e.persona_name ?? ``);
  return (
    a.sort((e, t) => c.get(e.steamid).localeCompare(c.get(t.steamid))),
    (0, Y.jsxs)(`div`, {
      className: oS,
      children: [
        (0, Y.jsx)(`div`, {
          className: sS,
          children: L.Localize(`#YIR_FriendShared`),
        }),
        (0, Y.jsx)(A, {
          className: cS,
          "flow-children": `grid`,
          children: a
            .slice(0, dS)
            .map((e) =>
              (0, Y.jsx)(
                pS,
                {
                  steamid: e.steamid,
                  ePrivacy: e.privacy_state,
                  year: n,
                  bPrivacyOverride: e.privacy_override,
                },
                `friendshare_` + e.steamid + `_` + n,
              ),
            ),
        }),
        !!w.is_support &&
          (0, Y.jsx)(`div`, {
            style: {
              backgroundColor: `#461F28`,
              border: `1px solid #761F28`,
              padding: `4px`,
            },
            children: L.Localize(`#YIR_FriendShared_support`),
          }),
      ],
    })
  );
}
function pS(e) {
  let { steamid: t, year: n, ePrivacy: r } = e,
    i = K();
  return (0, Y.jsx)(dc, {
    href: `${N.STORE_BASE_URL}replay/${t}/${n}`,
    className: (0, Q.default)({
      [void 0]: r == 1,
      [aS]: !0,
      [i.FriendCtn]: !0,
    }),
    children: (0, Y.jsx)($l, {
      accountID: new wa(t).GetAccountID(),
      bHideWhenNotAvailable: !0,
      bLink: !1,
    }),
  });
}
function mS(e) {
  return `${N.STORE_CDN_URL}public/images/yearinreview/${e}`;
}
var hS = `cQe-oob-ixY-`,
  gS = `tv7SmCaHL8c-`,
  _S = `QEvd6eyhjtk-`,
  vS = `VKJxuXZg9J4-`,
  yS = `_8fQsxmA8PSo-`,
  bS = `UNBAK8TydWc-`,
  xS = `qxLHCRfIBjM-`;
Wx();
var SS = 100;
function CS(e) {
  let { userYearInReview: t } = e,
    n = t.GetPlayTimeStats(),
    r = n.total_stats,
    i = n.game_summary,
    a = q(),
    o = K(),
    s = (0, R.useMemo)(() => {
      let e = [];
      return (
        typeof r.windows_playtime_percentagex100 == `number` &&
          r.windows_playtime_percentagex100 > SS &&
          e.push({
            id: `windows`,
            name: L.Localize(`#YIR_Platfrom_windows`),
            value: r.windows_playtime_percentagex100,
          }),
        typeof r.linux_playtime_percentagex100 == `number` &&
          r.linux_playtime_percentagex100 > SS &&
          e.push({
            id: `linux`,
            name: L.Localize(`#YIR_Platfrom_linux`),
            value: r.linux_playtime_percentagex100,
          }),
        typeof r.macos_playtime_percentagex100 == `number` &&
          r.macos_playtime_percentagex100 > SS &&
          e.push({
            id: `mac`,
            name: L.Localize(`#YIR_Platfrom_macos`),
            value: r.macos_playtime_percentagex100,
          }),
        typeof r.vr_playtime_percentagex100 == `number` &&
          r.vr_playtime_percentagex100 > SS &&
          e.push({
            id: `vr`,
            name: L.Localize(`#YIR_Platfrom_vr`),
            value: r.vr_playtime_percentagex100,
          }),
        typeof r.deck_playtime_percentagex100 == `number` &&
          r.deck_playtime_percentagex100 > SS &&
          e.push({
            id: `deck`,
            name: L.Localize(`#YIR_Platfrom_deck`),
            value: r.deck_playtime_percentagex100,
          }),
        e
      );
    }, [r]),
    c = (0, R.useMemo)(() => {
      let e = [];
      return (
        typeof r.windows_playtime_percentagex100 == `number` &&
          r.windows_playtime_percentagex100 > SS &&
          e.push({
            id: `windows`,
            name: L.Localize(`#YIR_Platfrom_windows`),
            value: i.filter((e) => e.played_windows).length,
          }),
        typeof r.linux_playtime_percentagex100 == `number` &&
          r.linux_playtime_percentagex100 > SS &&
          e.push({
            id: `linux`,
            name: L.Localize(`#YIR_Platfrom_linux`),
            value: i.filter((e) => e.played_linux).length,
          }),
        typeof r.macos_playtime_percentagex100 == `number` &&
          r.macos_playtime_percentagex100 > SS &&
          e.push({
            id: `mac`,
            name: L.Localize(`#YIR_Platfrom_macos`),
            value: i.filter((e) => e.played_mac).length,
          }),
        typeof r.vr_playtime_percentagex100 == `number` &&
          r.vr_playtime_percentagex100 > SS &&
          e.push({
            id: `vr`,
            name: L.Localize(`#YIR_Platfrom_vr`),
            value: i.filter((e) => e.played_vr).length,
          }),
        typeof r.deck_playtime_percentagex100 == `number` &&
          r.deck_playtime_percentagex100 > SS &&
          e.push({
            id: `deck`,
            name: L.Localize(`#YIR_Platfrom_deck`),
            value: i.filter((e) => e.played_deck).length,
          }),
        e
      );
    }, [r, i]);
  if (s.length < 2) return null;
  let l = OS(r);
  return (0, Y.jsx)($, {
    className: (0, Q.default)(Ig, o.PlatformChartsCtn),
    children: (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(X, Lg),
      children: [
        (0, Y.jsx)(`div`, { className: z_, children: a(`#YIR_Platform`) }),
        (0, Y.jsxs)(`div`, {
          className: Rg,
          children: [
            (0, Y.jsxs)(`div`, {
              className: zg,
              children: [
                (0, Y.jsx)(`div`, {
                  className: Bg,
                  children: L.Localize(`#YIR_Platfrom_playtime`),
                }),
                (0, Y.jsxs)(kp, {
                  responsive: !0,
                  style: { width: `90%`, aspectRatio: 1 },
                  children: [
                    (0, Y.jsx)(wf, {
                      data: s,
                      dataKey: `value`,
                      nameKey: `name`,
                      cx: `50%`,
                      cy: `50%`,
                      innerRadius: `40%`,
                      outerRadius: `80%`,
                      fill: `#8884d8`,
                      paddingAngle: 1,
                      children: s.map((e, t) =>
                        (0, Y.jsx)(re, { fill: o[`pie_${e.id}`] }, `cell-${t}`),
                      ),
                    }),
                    (0, Y.jsx)(Te, {
                      content: (e) =>
                        (0, Y.jsx)(wS, {
                          active: e.active,
                          payload: e.payload,
                        }),
                    }),
                    (0, Y.jsx)(Tu, {}),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: zg,
              children: [
                (0, Y.jsx)(`div`, {
                  className: Bg,
                  children: L.Localize(`#YIR_Platfrom_games`),
                }),
                (0, Y.jsxs)(kp, {
                  responsive: !0,
                  style: { width: `90%`, aspectRatio: 1 },
                  children: [
                    (0, Y.jsx)(wf, {
                      data: c,
                      dataKey: `value`,
                      nameKey: `name`,
                      cx: `50%`,
                      cy: `50%`,
                      innerRadius: `40%`,
                      outerRadius: `80%`,
                      fill: `#82ca9d`,
                      paddingAngle: 1,
                      children: c.map((e, t) =>
                        (0, Y.jsx)(re, { fill: o[`pie_${e.id}`] }, `cell-${t}`),
                      ),
                    }),
                    (0, Y.jsx)(Te, {
                      content: (e) =>
                        (0, Y.jsx)(TS, {
                          active: e.active,
                          payload: e.payload,
                        }),
                    }),
                    (0, Y.jsx)(Tu, {}),
                  ],
                }),
              ],
            }),
          ],
        }),
        (l.bDeck || l.bVR) &&
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)(`jKX9urC1MxY-`, `_2fuIOljIHpg-`),
            children: a(`#YIR_Platform_DiveIn`),
          }),
      ],
    }),
  });
}
function wS(e) {
  let { active: t, payload: n } = e;
  if (t && n && n.length) {
    let e = n[0].value;
    return (0, Y.jsxs)(Ul, {
      children: [n[0].name, `: `, L.Localize(`#YIR_Percent_Playtime`, J(e))],
    });
  }
  return null;
}
function TS(e) {
  let { active: t, payload: n } = e;
  if (t && n && n.length) {
    let e = n[0].value,
      t = n[0].name;
    return (0, Y.jsx)(Ul, {
      children: L.Localize(
        e === 1
          ? `#YIR_Platfrom_gamesplays_tooltip`
          : `#YIR_Platfrom_gamesplays_tooltip_Plural`,
        E(e),
        t,
      ),
    });
  }
  return null;
}
function ES(e) {
  let { userYearInReview: t } = e;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(CS, { userYearInReview: t }),
      (0, Y.jsx)(kS, { userYearInReview: t }),
    ],
  });
}
function DS(e) {
  let { userYearInReview: t, strClassName: n, nYear: r } = e,
    i = t.GetRawStats(),
    a = q(),
    o = a(`#YIR_TopGames_deck_subtitle`),
    {
      nTotalGames: s,
      nTotalSessions: c,
      nTotalPercentage: l,
    } = (0, R.useMemo)(() => Hm(i, `deck`), [i]),
    { rgResults: u } = (0, R.useMemo)(() => Rm(t, `deck`, 5, l), [t, l]),
    d = Number(Math.round(l / 100).toFixed(0)),
    f = a(`#YIR_TopGames_deck_new`);
  d > 50 && (f = a(`#YIR_TopGames_deck_mostly`));
  let p = (0, R.useRef)(null),
    m = vs((e) => {
      p.current &&
        p.current.style.setProperty(
          `--contentSize`,
          `${e.contentRect.width}px`,
        );
    }),
    [h, g] = R.useState(!1),
    _ = R.useCallback((e) => {
      e && g(!0);
    }, []),
    v = (0, Y.jsx)(Ux, { endValue: s, duration: 2e3, startAnimation: h }),
    ee = (0, Y.jsx)(Ux, { endValue: c, duration: 2e3, startAnimation: h }),
    y = (0, R.useRef)(null);
  return (
    Kl(y),
    (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(n, Z.PlatformContentsCtn, _S),
      ref: p,
      children: [
        (0, Y.jsx)(`div`, {
          className: (0, Q.default)(Z.SectionTitle, bS),
          children: f,
        }),
        (0, Y.jsxs)(`div`, {
          className: xS,
          ref: m,
          children: [
            (0, Y.jsxs)(`div`, {
              className: gS,
              children: [
                (0, Y.jsxs)(ps, {
                  onVisibilityChange: _,
                  className: (0, Q.default)(X, Z.StatsRow, vS),
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: Z.StatBlock,
                      children: [
                        (0, Y.jsx)(`div`, { className: Z.BigNum, children: v }),
                        (0, Y.jsx)(`div`, {
                          className: Z.StatDescription,
                          children: L.LocalizePlural(`#YIR_NewLine_Games`, s),
                        }),
                      ],
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: Z.StatBlock,
                      children: [
                        (0, Y.jsx)(`div`, {
                          className: Z.BigNum,
                          children: ee,
                        }),
                        (0, Y.jsx)(`div`, {
                          className: Z.StatDescription,
                          children: L.LocalizePlural(`#YIR_NewLine_Session`, c),
                        }),
                      ],
                    }),
                    (0, Y.jsx)(Ny, { percentVal: l, subToken: `#YIR_NewLine` }),
                  ],
                }),
                !1,
                (0, Y.jsx)($, {
                  className: kg,
                  children: (0, Y.jsx)(Ay, {
                    rgGamePercentages: u,
                    category: `deck`,
                  }),
                }),
              ],
            }),
            (0, Y.jsxs)(`video`, {
              className: hS,
              poster: `https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesPoster.jpg`,
              playsInline: !0,
              loop: !0,
              muted: !0,
              autoPlay: !0,
              controls: !1,
              ref: y,
              children: [
                (0, Y.jsx)(`source`, {
                  src: `https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.webm`,
                  type: `video/webm`,
                }),
                (0, Y.jsx)(`source`, {
                  src: `https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.mp4`,
                  type: `video/mp4`,
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: (0, Q.default)(Z.Disclaimer, yS),
          children: o,
        }),
      ],
    })
  );
}
function OS(e) {
  return {
    bDeck:
      typeof e.deck_playtime_percentagex100 == `number` &&
      e.deck_playtime_percentagex100 > 100,
    bVR:
      typeof e.vr_playtime_percentagex100 == `number` &&
      e.vr_playtime_percentagex100 > 100,
  };
}
function kS(e) {
  let { userYearInReview: t } = e,
    n = t.GetYear(),
    r = q(),
    i = t.GetPlayTimeStats().total_stats,
    a = i.controller_playtime_percentagex100 + i.deck_playtime_percentagex100,
    o = !1;
  a > 7e3 && (o = !0);
  let s = OS(i);
  return (0, Y.jsxs)(on, {
    rootMargin: `0px 0px 100% 0px`,
    children: [
      !!s.bDeck &&
        (0, Y.jsx)($, {
          className: (0, Q.default)(Z.Section, Z.Deck),
          children: (0, Y.jsx)(DS, { userYearInReview: t, nYear: n }),
        }),
      !!s.bVR &&
        (0, Y.jsx)($, {
          className: (0, Q.default)(Z.Section, Z.VR),
          children: (0, Y.jsx)(Dy, {
            category: `vr`,
            userYearInReview: t,
            bgImageURL: mS(`vr_background6.webp`),
            title: r(`#YIR_TopGames_vr`),
            subTitle: void 0,
          }),
        }),
      a > 1e3 &&
        (0, Y.jsx)($, {
          className: (0, Q.default)(Z.Section, Z.Controller),
          children: (0, Y.jsx)(Dy, {
            category: `controller`,
            userYearInReview: t,
            title: r(
              o ? `#YIR_TopGames_controllerMost` : `#YIR_TopGames_controller`,
              J(a),
            ),
            subTitle: r(
              `#YIR_Platform_subtitle_controller`,
              L.Localize(`#YIR_Platfrom_controller_forsubtitle`),
            ),
          }),
        }),
      n >= 2024 &&
        (0, Y.jsx)(T, { children: (0, Y.jsx)(AS, { userYearInReview: t }) }),
    ],
  });
}
function AS(e) {
  let { userYearInReview: t } = e,
    n = q(),
    [r, i] = (0, R.useMemo)(
      () => [
        t
          .GetDemoByPlaytime()
          .filter(Boolean)
          .map((e) => e.total_playtime_percentagex100)
          .reduce((e, t) => e + t, 0),
        t
          .GetPlaytestByPlaytime()
          .filter(Boolean)
          .map((e) => e.total_playtime_percentagex100)
          .reduce((e, t) => e + t, 0),
      ],
      [t],
    );
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      r > 100 &&
        (0, Y.jsxs)($, {
          className: (0, Q.default)(Z.Section, Z.Demo),
          children: [
            (0, Y.jsx)(`div`, { className: Z.BG_Demo }),
            (0, Y.jsx)(Dy, {
              category: `demo`,
              userYearInReview: t,
              title: n(`#YIR_TopGames_demo`),
              subTitleTokenIfMax: `#YIR_TopGames_demoMax`,
            }),
          ],
        }),
      i > 100 &&
        (0, Y.jsxs)($, {
          className: (0, Q.default)(Z.Section, Z.Playtest),
          children: [
            (0, Y.jsx)(`div`, { className: Z.BG_Playtest }),
            (0, Y.jsx)(Dy, {
              category: `playtest`,
              userYearInReview: t,
              title: n(`#YIR_TopGames_playtest`),
              subTitleTokenIfMax: `#YIR_TopGames_playtestMax`,
            }),
          ],
        }),
    ],
  });
}
var jS = `Zyx-HjZHUjo-`,
  MS = `_1lcI3rMkINQ-`,
  NS = `qHBQax2jUhc-`,
  PS = `O1K2KPMCdBU-`,
  FS = `vNi0RlyomPM-`,
  IS = `TX-ZbWuG6nU-`,
  LS = `IrsybK-NCqg-`,
  RS = `-cwbu3H1bWI-`,
  zS = `N6MvnixTrWs-`,
  BS = `jYZcHfHVJ7Q-`,
  VS = `pMnJje5ddJk-`,
  HS = `_2hCwBXP7Dak-`,
  US = `yvIttucwtMQ-`,
  WS = `yy3vzELgSfc-`,
  GS = `SOTrGkaPWt0-`,
  KS = `ttuzGl2s44c-`;
function qS(e) {
  let { userYearInReview: t } = e;
  if (Im()) return null;
  let n = t.GetPlayTimeStats().playtime_streak;
  return !n ||
    (typeof n.longest_consecutive_days == `number` &&
      n.longest_consecutive_days < 5)
    ? null
    : (0, Y.jsx)(JS, { ...e, longestStreak: n });
}
function JS(e) {
  let { userYearInReview: t, longestStreak: n } = e,
    r = q(),
    i = h_(),
    a = K(),
    [o, s] = R.useState(!1),
    c = R.useCallback((e) => {
      e && s(!0);
    }, []),
    [l, u] = R.useState(!1),
    d = R.useCallback((e) => {
      e &&
        window.setTimeout(() => {
          u(!0);
        }, 30);
    }, []),
    [f, p] = R.useState(!1),
    m = n.streak_games.length > 12 && !f,
    h = m
      ? n.streak_games.sort((e, t) => e.appid - t.appid).slice(0, 12)
      : n.streak_games.sort((e, t) => e.appid - t.appid),
    g = h.map((e) => e.appid),
    _ = n.streak_games.length,
    v = n.longest_consecutive_days ?? 0;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(Kg, zS, jS, a.Section),
    children: [
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(KS, a.LongestStreakBgImage),
      }),
      (0, Y.jsxs)(`div`, {
        className: X,
        children: [
          (0, Y.jsxs)(`div`, {
            className: MS,
            children: [
              (0, Y.jsx)(ps, {
                className: NS,
                onVisibilityChange: c,
                children: r(
                  `#YIR_Longest_Streak_Title`,
                  (0, Y.jsx)(Ux, {
                    className: FS,
                    endValue: v,
                    duration: 2e3,
                    startAnimation: o,
                  }),
                ),
              }),
              (0, Y.jsxs)($, {
                className: VS,
                children: [
                  (0, Y.jsx)(`div`, { className: PS }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(HS, a.StreakSizeFullBar),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)({ [WS]: !0, [GS]: v < 40 }),
                    children: (0, Y.jsx)(XS, { nDays: v - 1 }),
                  }),
                  (0, Y.jsx)(`div`, { className: PS }),
                ],
              }),
              (0, Y.jsxs)($, {
                className: IS,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: void 0,
                    children: i(n.rtime_start ?? 0),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: void 0,
                    children: i((n.rtime_start ?? 0) + v * 24 * 60 * 60),
                  }),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(ps, {
            onVisibilityChange: d,
            className: (0, Q.default)(Hg, LS),
            children: [
              (0, Y.jsx)(`div`, {
                className: (0, Q.default)(RS, l && `JoDLfdcjJPY-`),
                children: r(
                  _ > 1
                    ? `#YIR_Longest_Streak_Games`
                    : `#YIR_Longest_Streak_Games_Singular`,
                  E(_),
                ),
              }),
              (0, Y.jsx)(`div`, {
                className: (0, Q.default)(BS),
                children: (0, Y.jsx)(A, {
                  "flow-children": `grid`,
                  className: (0, Q.default)(Ug, Wg, l && `c42w8bI3Dx0-`),
                  children: h.map((e, n) => {
                    let r = t.GetGameSummaryForApp(e.appid);
                    return (0, Y.jsx)(
                      jy,
                      {
                        appid: e.appid,
                        index: n,
                        loading: `lazy`,
                        rgAppIDs: g,
                        nParentAppID: r?.parent_appid,
                        eChildType: YS(r),
                      },
                      `longest_` + e.appid,
                    );
                  }),
                }),
              }),
            ],
          }),
          m &&
            (0, Y.jsx)(`div`, {
              className: `z4JPVbkRELk-`,
              children: (0, Y.jsx)(`a`, {
                href: `#`,
                className: `dUBouRPf5BM-`,
                onClick: () => p(!0),
                children: L.Localize(`#YIR_ShowMore`),
              }),
            }),
        ],
      }),
    ],
  });
}
function YS(e) {
  if (e?.demo) return 1;
  if (e?.playtest) return 12;
}
function XS(e) {
  let { nDays: t } = e,
    n = [];
  if (t > 0) {
    for (let e = 0; e < t + 2; ++e)
      n.push((0, Y.jsx)(`div`, { className: US }, `DrawNDivForStreakDays` + e));
    return (0, Y.jsx)(Y.Fragment, { children: n });
  }
  return null;
}
var ZS = `qdYD-Nli-BU-`,
  QS = `ocrq1-0nW8Y-`,
  $S = `uvsrpXUQL6E-`,
  eC = `JSoZ402xLkY-`;
function tC(e) {
  let { steamid: t, year: n } = e,
    r = K(),
    { rgOtherYears: i } = Dh(),
    a = q();
  return i.length === 0
    ? null
    : (0, Y.jsxs)(`div`, {
        className: ZS,
        children: [
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)(QS, r.OtherYearsHeader),
            children: a(`#YearInReview_OtherYearLinks_Header`),
          }),
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)($S, r.OtherYearLinks),
            children: i.map((e) =>
              (0, Y.jsx)(
                dc,
                {
                  href: `${N.STORE_BASE_URL}replay/${t}/${e}?src=8`,
                  className: (0, Q.default)(eC, r.OtherYearLink),
                  children: e,
                },
                e,
              ),
            ),
          }),
        ],
      });
}
var nC = t({
    ActiveHint: () => tw,
    Appear: () => Cw,
    Arrow: () => LC,
    ArrowDisabled: () => BC,
    BadgeBarFiller: () => Sw,
    BadgeBoxIntro: () => xw,
    CarouselCtn: () => DC,
    CarouselHint: () => ew,
    CarouselHintCtn: () => $C,
    CenterImage: () => HC,
    CenterImg: () => JC,
    CloseIcon: () => MC,
    Disabled: () => hw,
    DropDownSizer: () => hC,
    DropdownButton: () => _C,
    DropdownOption: () => yC,
    ElementFadeIn: () => bw,
    Error: () => vC,
    FB: () => fw,
    FeedBtn: () => dw,
    FooterCtn: () => rw,
    FormatHint: () => nw,
    ImageArrowCtn: () => IC,
    ImagesCtn: () => VC,
    ImgAndPreviewCtn: () => UC,
    InteractButton: () => XC,
    InteractButtonIcon: () => ZC,
    InteractButtonText: () => QC,
    LangaugeDropdown: () => EC,
    LanguageLabel: () => TC,
    Left: () => RC,
    LeftPeak: () => qC,
    LoadingCtn: () => OC,
    MobileCtn: () => _w,
    PeakImg: () => YC,
    Peek: () => GC,
    PreviewAndIconCtn: () => jC,
    PreviewClickCtn: () => AC,
    PreviewImageCtn: () => kC,
    PreviewImage_1080x1080: () => NC,
    PreviewImage_1080x1920: () => PC,
    PreviewImage_1200x628: () => FC,
    PreviewMask: () => WC,
    PrivacyWarning: () => uC,
    RD: () => mw,
    Right: () => zC,
    RightPeak: () => KC,
    SeeRewindButton: () => pC,
    ShareArea: () => fC,
    ShareButton: () => lC,
    ShareColumns: () => aC,
    ShareCtn: () => sC,
    ShareHeader: () => gC,
    ShareIcon: () => xC,
    ShareLanguagePicker: () => wC,
    ShareLinkButton: () => ow,
    ShareLinkIcon: () => vw,
    ShareLinkText: () => yw,
    ShareModal: () => CC,
    ShareModalDialogCtn: () => SC,
    ShareOptions: () => rC,
    ShareShortUrl: () => sw,
    ShareText: () => bC,
    ShareTitle: () => iC,
    ShareTypeTitle: () => dC,
    ShareURLCtn: () => aw,
    ShareURLTitle: () => cw,
    ShowcaseInfo: () => oC,
    SocialButtons: () => uw,
    SteamButtons: () => lw,
    TW: () => pw,
    TooltipCtn: () => iw,
    VisBorder: () => gw,
    Visible: () => mC,
    YIRShareCtn: () => cC,
    default: () => ww,
  }),
  rC = `GQ15KBYq0dM-`,
  iC = `aXiQBfYGO9I-`,
  aC = `QsTph6fo6tE-`,
  oC = `MqMesN--4dY-`,
  sC = `mPg8ksPIypA-`,
  cC = `ql9xSqCdaH0-`,
  lC = `j8A4NpxJ0t0-`,
  uC = `wzkr-U2Espw-`,
  dC = `smzKi1RTbdQ-`,
  fC = `PmXhnAChGR0-`,
  pC = `F8tObD0Db8k-`,
  mC = `_74rjTvdFGHA-`,
  hC = `_3K3tDOC4GJc-`,
  gC = `r3ltIfNjuPk-`,
  _C = `PzQjhUmqibw-`,
  vC = `n1Fb28gGkQA-`,
  yC = `IvgYPzwuDSc-`,
  bC = `_2-Cr-SQJps0-`,
  xC = `CnI2waDfQ34-`,
  SC = `YKCweqawRAg-`,
  CC = `WoxdMMqJPdU-`,
  wC = `xH2JulcKe14-`,
  TC = `UDsOCbvSZIU-`,
  EC = `Gr4dorQ7W5c-`,
  DC = `ANCmTxdRftQ-`,
  OC = `p0yOORO-3xk-`,
  kC = `v3ht7HUJu3M-`,
  AC = `DIelFHIZzhU-`,
  jC = `_7cpnCIhhrPY-`,
  MC = `_1sB-7CAJZ8k-`,
  NC = `xPVASClAx0k-`,
  PC = `MUHNnGqkOqY-`,
  FC = `vBdHL5mBGrg-`,
  IC = `Zhn0fcf8K0A-`,
  LC = `e1abu676--0-`,
  RC = `H-DDc-hfx8I-`,
  zC = `YH-nSsaJzMU-`,
  BC = `pOiTs551keM-`,
  VC = `IwfOPZqUlI0-`,
  HC = `J3x0rrHLezU-`,
  UC = `fmGqpqE4kNI-`,
  WC = `boHwEaOCYyc-`,
  GC = `IyLe07FQrvw-`,
  KC = `XJ0X2gf4Bj8-`,
  qC = `G3q0v1ojD1Y-`,
  JC = `qfIY3K5wcM0-`,
  YC = `_7c1acrIAHH4-`,
  XC = `wNE8ANE5TsM-`,
  ZC = `cHPBGtpOoh8-`,
  QC = `W6T4-MeSpIc-`,
  $C = `hbAE9JcKwtk-`,
  ew = `OOKPlPQEH-w-`,
  tw = `a5nzDP5fAS8-`,
  nw = `OKLgRZL9G-8-`,
  rw = `YZ3SbPJqfpo-`,
  iw = `mhqjR9vpV54-`,
  aw = `vYxszMZbMu8-`,
  ow = `gCfLNYFfCkY-`,
  sw = `Fszxyt7mMys-`,
  cw = `LFvgTxoh4cM-`,
  lw = `O8FfPGGUfsk-`,
  uw = `DT0tk4O37yI-`,
  dw = `ICd7j4gYWCY-`,
  fw = `h96vh8Y0dDU-`,
  pw = `_0XH6IlZcmBQ-`,
  mw = `CJhunxWUcHo-`,
  hw = `Vpkqj7M1WBw-`,
  gw = `_7V5HmtHlzMQ-`,
  _w = `RsGMBAZHmro-`,
  vw = `uc6rSxuiYYU-`,
  yw = `_6S7z8D0l51A-`,
  bw = `W42-VaMVayE-`,
  xw = `-Lm3gVp9t28-`,
  Sw = `Bp9o640kQcU-`,
  Cw = `F-nVb84xjt4-`,
  ww = {
    ShareOptions: rC,
    ShareTitle: iC,
    ShareColumns: aC,
    ShowcaseInfo: oC,
    ShareCtn: sC,
    YIRShareCtn: cC,
    ShareButton: lC,
    PrivacyWarning: uC,
    ShareTypeTitle: dC,
    ShareArea: fC,
    SeeRewindButton: pC,
    Visible: mC,
    DropDownSizer: hC,
    ShareHeader: gC,
    DropdownButton: _C,
    Error: `n1Fb28gGkQA-`,
    DropdownOption: yC,
    ShareText: bC,
    ShareIcon: xC,
    ShareModalDialogCtn: SC,
    ShareModal: CC,
    ShareLanguagePicker: wC,
    LanguageLabel: TC,
    LangaugeDropdown: EC,
    CarouselCtn: DC,
    LoadingCtn: OC,
    PreviewImageCtn: kC,
    PreviewClickCtn: AC,
    PreviewAndIconCtn: jC,
    CloseIcon: MC,
    PreviewImage_1080x1080: NC,
    PreviewImage_1080x1920: PC,
    PreviewImage_1200x628: FC,
    ImageArrowCtn: IC,
    Arrow: LC,
    Left: RC,
    Right: zC,
    ArrowDisabled: BC,
    ImagesCtn: VC,
    CenterImage: HC,
    ImgAndPreviewCtn: UC,
    PreviewMask: WC,
    Peek: GC,
    RightPeak: KC,
    LeftPeak: qC,
    CenterImg: JC,
    PeakImg: YC,
    InteractButton: XC,
    InteractButtonIcon: ZC,
    InteractButtonText: QC,
    CarouselHintCtn: $C,
    CarouselHint: ew,
    ActiveHint: tw,
    FormatHint: nw,
    FooterCtn: rw,
    TooltipCtn: iw,
    ShareURLCtn: aw,
    ShareLinkButton: ow,
    ShareShortUrl: sw,
    ShareURLTitle: cw,
    SteamButtons: lw,
    SocialButtons: uw,
    FeedBtn: dw,
    FB: fw,
    TW: pw,
    RD: mw,
    Disabled: hw,
    VisBorder: gw,
    MobileCtn: _w,
    ShareLinkIcon: vw,
    ShareLinkText: yw,
    ElementFadeIn: bw,
    BadgeBoxIntro: xw,
    BadgeBarFiller: Sw,
    Appear: Cw,
  },
  Tw = `0123456789abcdef`,
  Ew = `bcdfghjkmnpqrtvw`;
function Dw(e, t, n) {
  return Array.from(e, (e) => {
    let r = t.indexOf(e);
    return r >= 0 ? n[r] : e;
  }).join(``);
}
function Ow(e) {
  return e ? Dw(new wa(e).GetAccountID().toString(16), Tw, Ew) : ``;
}
function kw(e) {
  let { steamid: t, nYear: n } = e,
    r = u_(),
    i = K();
  return w.logged_in
    ? !r && w.logged_in
      ? (0, Y.jsx)(dc, {
          className: (0, Q.default)(pC, i.SeeRewindButton),
          href: `${N.STORE_BASE_URL}replay/${w.steamid}/${n}?src=9`,
          children: L.Localize(`#YIR_SeeYourRewind`),
        })
      : (0, Y.jsxs)(A, {
          className: cC,
          children: [
            (0, Y.jsx)(Aw, { steamid: t, nYear: n }),
            (0, Y.jsxs)(A, {
              className: lC,
              onActivate: () => {
                sr((0, Y.jsx)(Pw, { steamid: t, nYear: n }), window, {
                  strTitle: Yn.Localize(`#Button_Share`),
                });
              },
              children: [
                (0, Y.jsx)(zo, { className: (0, Q.default)(xC) }),
                (0, Y.jsx)(`span`, {
                  className: (0, Q.default)(bC),
                  children: Yn.Localize(`#Button_Share`),
                }),
              ],
            }),
          ],
        })
    : null;
}
function Aw(e) {
  let { steamid: t, nYear: n } = e,
    [r, i] = (0, R.useState)(``),
    a = ih(t, n),
    { mutateAsync: o } = ah(t, n),
    s = (0, R.useMemo)(() => a === 3 || a === 2, [a]),
    c = [
      { data: 1, label: L.Localize(`#YIR_ShareVisbility_Private`) },
      { data: 2, label: L.Localize(`#YIR_ShareVisbility_FriendsOnly`) },
      { data: 3, label: L.Localize(`#YIR_ShareVisbility_Public`) },
    ];
  return (0, Y.jsxs)(A, {
    "flow-children": `column`,
    children: [
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(uC, s ? mC : ``),
        children: s
          ? L.Localize(`#YIR_ShareVisbility`)
          : L.Localize(`#YIR_ShareModal_DisabledShareTtp`),
      }),
      (0, Y.jsx)(`div`, {
        className: hC,
        children: (0, Y.jsx)(Ja, {
          strDropDownButtonClassName: _C,
          strDropDownClassName: yC,
          rgOptions: c,
          selectedOption: a,
          onChange: async (e) => {
            if (e.data !== a) {
              let { eResult: t } = await o(e.data),
                n = t == 1 ? `` : jw(t);
              n && i(n);
            }
          },
        }),
      }),
      r && (0, Y.jsx)(`div`, { className: `n1Fb28gGkQA-`, children: r }),
    ],
  });
}
function jw(e) {
  switch (e) {
    case 10:
      return `Servers are busy, please try again later`;
    default:
      return ``;
  }
}
function Mw(e) {
  return `y${e % 100}`;
}
var Nw = `l`;
function Pw(e) {
  let { closeModal: t, steamid: n, nYear: r } = e,
    [i, a] = (0, R.useState)(),
    o = ih(n, r),
    s = (0, R.useMemo)(() => o === 3 || o === 2, [o]),
    [c, l] = (0, R.useState)(Dl(N.LANGUAGE)),
    u = (0, R.useMemo)(() => Ks(c), [c]),
    d = Ow(n),
    f = `https://s.team/${Mw(r)}/${d}`,
    p = (0, R.useMemo)(() => {
      let e = new URL(f);
      return (e.searchParams.set(Nw, u), e.href);
    }, [u, f]),
    m = () => {
      a(!0);
    };
  return i
    ? (0, Y.jsx)(sn, { eventLink: p, closeModal: t })
    : (0, Y.jsx)(Fs, {
        strDescription: ``,
        strTitle: L.Localize(`#YIR_ShareModal_Title`),
        onCancel: t,
        onOK: t,
        bAlertDialog: !0,
        modalClassName: SC,
        children: (0, Y.jsxs)(`div`, {
          className: CC,
          children: [
            (0, Y.jsx)(`div`, {
              className: wC,
              children: (0, Y.jsx)(`div`, {
                className: EC,
                children: (0, Y.jsx)(rn, {
                  selectedLang: c,
                  fnOnLanguageChanged: l,
                  fnFilterLanguage: (e) => e !== 25,
                }),
              }),
            }),
            (0, Y.jsx)(Fw, { language: u, steamid: n, nYear: r, shareUrl: p }),
            (0, Y.jsxs)(`div`, {
              className: rw,
              children: [
                (0, Y.jsx)(Aw, { steamid: n, nYear: r }),
                (0, Y.jsx)(`div`, {
                  className: (0, Q.default)(gw, !s && `Vpkqj7M1WBw-`),
                  children: N.IN_MOBILE_WEBVIEW
                    ? (0, Y.jsx)(Bw, {
                        bCanShare: s,
                        shareUrl: p,
                        shareOnSteamActivityFeed: m,
                      })
                    : (0, Y.jsx)(zw, {
                        nYear: r,
                        bCanShare: s,
                        shareUrl: p,
                        shortAccountCode: d,
                        language: u,
                        shareOnSteamActivityFeed: m,
                      }),
                }),
              ],
            }),
          ],
        }),
      });
}
function Fw(e) {
  let { language: t, steamid: n, nYear: r, shareUrl: i } = e,
    [a, o] = (0, R.useState)(0),
    [s, c] = (0, R.useState)(!1),
    { isLoading: l, data: u } = Th(n, r, t),
    d = u ? u.length - 1 : 0,
    f = `${N.BASE_URL_SHARED_CDN}social_sharing/`,
    p = (e) => {
      a > 0 && (o(a - 1), e.stopPropagation());
    },
    m = (e) => {
      a < d && (o(a + 1), e.stopPropagation());
    };
  return (
    tn(`ArrowLeft`, p),
    tn(`Left`, p),
    tn(`ArrowRight`, m),
    tn(`Right`, m),
    l
      ? (0, Y.jsx)(`div`, {
          className: (0, Q.default)(DC, OC),
          children: (0, Y.jsx)(nn, { position: `center` }),
        })
      : u
        ? (0, Y.jsxs)(`div`, {
            className: DC,
            children: [
              s &&
                (0, Y.jsx)(Iw, {
                  carouselIndex: a,
                  endPreviewImage: (e) => {
                    (c(!1), e.stopPropagation());
                  },
                  onMoveLeft: p,
                  onMoveRight: m,
                  name: u[a].name,
                  url: `${f}${u[a].url_path}`,
                  maxIndex: d,
                }),
              (0, Y.jsxs)(`div`, {
                className: IC,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(
                      LC,
                      RC,
                      a === 0 && `pOiTs551keM-`,
                    ),
                    onClick: p,
                    children: (0, Y.jsx)(Is, { angle: 270 }),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(
                      LC,
                      zC,
                      a === d && `pOiTs551keM-`,
                    ),
                    onClick: m,
                    children: (0, Y.jsx)(Is, { angle: 90 }),
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: VC,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: (0, Q.default)(GC, qC),
                        children:
                          a !== 0 &&
                          (0, Y.jsx)(`img`, {
                            alt: ``,
                            className: `_7c1acrIAHH4-`,
                            src: `${f}${u[a - 1].url_path}`,
                          }),
                      }),
                      (0, Y.jsx)(`div`, {
                        className: HC,
                        children: (0, Y.jsxs)(`div`, {
                          className: UC,
                          children: [
                            (0, Y.jsx)(`div`, {
                              onClick: (e) => {
                                (c(!0), e.stopPropagation());
                              },
                              className: WC,
                              children: L.Localize(
                                `#YIR_ShareModal_FullscreenPreview`,
                              ),
                            }),
                            (0, Y.jsx)(`img`, {
                              alt: ``,
                              className: JC,
                              src: `${f}${u[a].url_path}`,
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsx)(`div`, {
                        className: (0, Q.default)(GC, KC),
                        children:
                          a !== d &&
                          (0, Y.jsx)(`img`, {
                            alt: ``,
                            className: `_7c1acrIAHH4-`,
                            src: `${f}${u[a + 1].url_path}`,
                          }),
                      }),
                    ],
                  }),
                ],
              }),
              N.IN_MOBILE_WEBVIEW
                ? (0, Y.jsx)(Rw, {
                    imageUrl: `${f}${u[a].url_path}`,
                    shareUrl: i,
                  })
                : N.IN_CLIENT
                  ? null
                  : (0, Y.jsx)(Lw, { imageUrl: `${f}${u[a].url_path}` }),
              (0, Y.jsx)(`div`, {
                className: $C,
                children: u.map((e, t) =>
                  (0, Y.jsx)(
                    `div`,
                    { className: (0, Q.default)(ew, t === a ? tw : null) },
                    `${t}_hint`,
                  ),
                ),
              }),
              (0, Y.jsx)(`div`, {
                className: nw,
                children: L.Localize(
                  `#YIR_ShareModal_ImageCaption_${u[a].name}`,
                ),
              }),
            ],
          })
        : (0, Y.jsx)(`div`, {
            className: (0, Q.default)(DC, OC),
            children: (0, Y.jsx)(`div`, {
              children: L.Localize(`#YIR_ShareModal_FailedToGenerateImages`),
            }),
          })
  );
}
function Iw(e) {
  let {
    carouselIndex: t,
    maxIndex: n,
    onMoveLeft: r,
    onMoveRight: i,
    endPreviewImage: a,
    name: o,
    url: s,
  } = e;
  return (
    tn(`Escape`, a),
    tn(`Esc`, a),
    (0, Y.jsx)(`div`, {
      className: kC,
      children: (0, Y.jsx)(`div`, {
        className: AC,
        onClick: a,
        children: (0, Y.jsxs)(`div`, {
          className: jC,
          children: [
            (0, Y.jsx)(`div`, { className: MC, children: (0, Y.jsx)(xl, {}) }),
            (0, Y.jsx)(`div`, {
              className: (0, Q.default)(LC, RC, t === 0 && `pOiTs551keM-`),
              onClick: r,
              children: (0, Y.jsx)(Is, { angle: 270 }),
            }),
            (0, Y.jsx)(`div`, {
              className: (0, Q.default)(LC, zC, t === n && `pOiTs551keM-`),
              onClick: i,
              children: (0, Y.jsx)(Is, { angle: 90 }),
            }),
            (0, Y.jsx)(`img`, {
              alt: ``,
              className: nC[`PreviewImage_${o}`],
              src: s,
            }),
          ],
        }),
      }),
    })
  );
}
function Lw(e) {
  return (0, Y.jsxs)(`div`, {
    className: XC,
    onClick: () => {
      fetch(e.imageUrl)
        .then((e) => e.blob())
        .then((e) => URL.createObjectURL(e))
        .then((e) => {
          let t = document.createElement(`a`);
          ((t.href = e),
            (t.download = ``),
            document.body.appendChild(t),
            t.click(),
            document.body.removeChild(t));
        });
    },
    children: [
      (0, Y.jsx)(Vc, { className: ZC }),
      (0, Y.jsx)(`span`, {
        className: (0, Q.default)(QC),
        children: L.Localize(`#YIR_ShareModal_SaveImage`),
      }),
    ],
  });
}
function Rw(e) {
  let { imageUrl: t, shareUrl: n } = e;
  return (0, Y.jsxs)(`div`, {
    className: XC,
    onClick: () => {
      let e = Reflect.get(window, `ReactNativeWebView`);
      if (e?.postMessage) {
        let r = {
          event_name: `shareimage`,
          link: t,
          url: t,
          subject: L.Localize(`#YIR_ShareModal_MobileSubject`),
          message: n,
          title: L.Localize(`#YIR_ShareModal_MobileMessage`),
        };
        e.postMessage(JSON.stringify(r));
      }
    },
    children: [
      (0, Y.jsx)(zo, { className: ZC }),
      (0, Y.jsx)(`span`, {
        className: (0, Q.default)(QC),
        children: L.Localize(`#YIR_ShareModal_ShareImage`),
      }),
    ],
  });
}
function zw(e) {
  let {
      bCanShare: t,
      shareUrl: n,
      shortAccountCode: r,
      language: i,
      nYear: a,
      shareOnSteamActivityFeed: o,
    } = e,
    [s, c] = (0, R.useState)(!1);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(`div`, {
        className: cw,
        children: L.Localize(`#YIR_ShareModal_YourLink`),
      }),
      (0, Y.jsxs)(`div`, {
        className: aw,
        children: [
          (0, Y.jsx)(`div`, { className: sw, children: n }),
          (0, Y.jsxs)(`div`, {
            className: (0, Q.default)(ow),
            onClick: () => {
              (navigator.clipboard.writeText(n), c(!0));
            },
            children: [
              (0, Y.jsx)(zo, { className: vw }),
              (0, Y.jsx)(`span`, {
                className: (0, Q.default)(yw),
                children: L.Localize(
                  s
                    ? `#YIR_ShareModal_CopyLink_Success`
                    : `#YIR_ShareModal_CopyLink`,
                ),
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(uw, lw),
        children: [
          (0, Y.jsxs)(`div`, {
            onClick: o,
            className: (0, Q.default)(ow, dw),
            children: [
              (0, Y.jsx)(fa, { className: vw }),
              (0, Y.jsx)(`span`, {
                className: (0, Q.default)(yw),
                children: L.Localize(`#YIR_ShareModal_ShareOnFriendsActivity`),
              }),
            ],
          }),
          (0, Y.jsxs)(`a`, {
            href: `${N.COMMUNITY_BASE_URL}profiles/${w.steamid}/edit/showcases`,
            className: (0, Q.default)(ow, dw),
            children: [
              (0, Y.jsx)(zs, { className: vw }),
              (0, Y.jsx)(`span`, {
                className: (0, Q.default)(yw),
                children: L.Localize(`#YIR_ShareModal_AddShowcase`),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Bw(e) {
  let { bCanShare: t, shareUrl: n, shareOnSteamActivityFeed: r } = e;
  return (0, Y.jsx)(Y.Fragment, {
    children: (0, Y.jsxs)(`div`, {
      className: _w,
      children: [
        (0, Y.jsxs)(`div`, {
          className: (0, Q.default)(ow, !t && `Vpkqj7M1WBw-`),
          onClick: () => {
            let e = Reflect.get(window, `ReactNativeWebView`);
            if (e?.postMessage) {
              let t = {
                event_name: `share`,
                link: n,
                url: n,
                subject: L.Localize(`#YIR_ShareModal_MobileSubject`),
                message: L.Localize(`#YIR_ShareModal_MobileMessage`),
                title: L.Localize(`#YIR_ShareModal_MobileMessage`),
              };
              e.postMessage(JSON.stringify(t));
            }
          },
          children: [
            (0, Y.jsx)(zo, { className: vw }),
            (0, Y.jsx)(`span`, {
              className: (0, Q.default)(yw),
              children: L.Localize(`#YIR_ShareModal_ShareLink`),
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          onClick: r,
          className: (0, Q.default)(ow, !t && `Vpkqj7M1WBw-`),
          children: [
            (0, Y.jsx)(fa, { className: vw }),
            (0, Y.jsx)(`span`, {
              className: (0, Q.default)(yw),
              children: L.Localize(`#YIR_ShareModal_ShareOnFriendsActivity`),
            }),
          ],
        }),
      ],
    }),
  });
}
function Vw(e) {
  return e >= 2024;
}
function Hw(e) {
  let { userYearInReview: t } = e,
    n = t.GetYear(),
    r = t.GetPlayTimeStats().total_stats,
    i = t.GetPlayTimeStats().demos_played || 0,
    a = t.GetPlayTimeStats().playtests_played || 0,
    o = t.GetFilteredGameSummary(),
    s = t.GetPlayTimeStats().summary_stats?.total_achievements || 0,
    c = o.filter((e) => e.new_this_year).length || 0,
    l = t.GetPlayTimeStats().playtime_streak,
    u = t.GetTopGamesShown(),
    d = q(),
    f = (0, R.useMemo)(() => u.slice(0, 5), [u]),
    { data: p } = Ah((0, R.useMemo)(() => f.map((e) => e.appid), [f])),
    m = f
      .map((e, t) =>
        p?.has(e.appid)
          ? (0, Y.jsx)(
              eT,
              { gameStat: e, gridClass: `Game${t}` },
              `${t}_${e.appid}`,
            )
          : null,
      )
      .filter((e) => e !== null),
    h = [
      Ww(s, t),
      qw(n, r),
      Gw(n, l, Vw(n) ? t.GetPreviousYearSummary()?.longest_streak : void 0),
    ].filter((e) => e !== null),
    g = (0, Y.jsx)(
      Yw,
      {
        rgGamesLength: o.length,
        nNewGames: c,
        nDemoPlayed: i,
        nPlaytestPlayed: a,
        nYear: t.GetYear(),
        nPreviousYearsGames: Vw(n)
          ? t.GetPreviousYearSummary()?.games_played
          : void 0,
      },
      `overview`,
    );
  return (0, Y.jsx)($, {
    children: (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(X, H_),
      children: [
        (0, Y.jsx)(Jw, {
          rgGamesLength: o.length,
          nNewGames: c,
          totalAchievementUnlocked: s,
          nTotalPlaytimeSeconds: r.total_playtime_seconds || 0,
          nTotalPercentagePlaytimex100: r.total_playtime_percentagex100,
        }),
        o.length !== 1 &&
          (0, Y.jsx)(Y.Fragment, {
            children: (0, Y.jsxs)(`div`, {
              className: `xJQGByL-21g-`,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `bXtzee8AefM-`,
                  children: d(`#YIR_YourSummary_SubTitle`),
                }),
                (0, Y.jsx)(Uw, { overview: g, statFillers: h, gameFillers: m }),
              ],
            }),
          }),
      ],
    }),
  });
}
function Uw(e) {
  let { statFillers: t, gameFillers: n, overview: r } = e;
  return n.length > 2 && t.length > 1
    ? (0, Y.jsx)(`div`, {
        className: G_,
        children: [r, t[0], t[1], n[0], n[1], n[2]],
      })
    : n.length > 1 && t.length > 2
      ? (0, Y.jsx)(`div`, {
          className: G_,
          children: [r, t[1], t[2], t[0], n[0], n[1]],
        })
      : t.length == 1 && n.length > 3
        ? (0, Y.jsx)(`div`, {
            className: G_,
            children: [r, t[0], n[0], n[1], n[2], n[3]],
          })
        : n.length > 1
          ? (0, Y.jsx)(`div`, { className: K_, children: [r, n[0], n[1]] })
          : null;
}
function Ww(e, t) {
  return e > 0
    ? (0, Y.jsx)(Zw, { userYearInReview: t }, `totalAchievements`)
    : null;
}
function Gw(e, t, n) {
  return t &&
    typeof t.longest_consecutive_days == `number` &&
    typeof n == `number` &&
    t.longest_consecutive_days <= 1 &&
    n <= 1
    ? null
    : t &&
        typeof t.longest_consecutive_days == `number` &&
        t.longest_consecutive_days > 0 &&
        !Im()
      ? (0, Y.jsx)(
          Qw,
          { oLongestStreak: t, nYear: e, nPrevLongestStreamDays: n },
          `longestStreak`,
        )
      : null;
}
var Kw = 1e3;
function qw(e, t) {
  let n = t.controller_playtime_percentagex100 + t.deck_playtime_percentagex100,
    r =
      t.total_playtime_percentagex100 -
      t.controller_playtime_percentagex100 -
      t.vr_playtime_percentagex100 -
      t.deck_playtime_percentagex100;
  return n < Kw || r < Kw
    ? null
    : (0, Y.jsx)($w, { oTotalStats: t, nYear: e }, `hardwareTime`);
}
function Jw(e) {
  let {
      rgGamesLength: t,
      nNewGames: n,
      totalAchievementUnlocked: r,
      nTotalPlaytimeSeconds: i,
      nTotalPercentagePlaytimex100: a,
    } = e,
    o = q(),
    s;
  return (
    (s =
      n > 50 && r > 100
        ? o(`#YIR_YourSummary_GamesTonNewAchievements`)
        : n > 20 && r > 100
          ? o(`#YIR_YourSummary_GamesNewAchievements`)
          : n > 20 && i > 36e4
            ? o(`#YIR_YourSummary_GamesNew`)
            : t > 10 && n < 5
              ? o(`#YIR_YourSummary_GamesManyTriedNew`)
              : t > 10
                ? o(`#YIR_YourSummary_GamesMany`)
                : n > 1 &&
                    n < 5 &&
                    (i > 36e4 || (i == 0 && typeof a == `number` && a > 5e3))
                  ? o(`#YIR_YourSummary_HoursManyTriedNew`)
                  : t < 2 && i > 36e4
                    ? o(`#YIR_YourSummary_HoursManySingleGame`)
                    : t < 2
                      ? o(`#YIR_YourSummary_SingleGame`)
                      : t < 5
                        ? o(`#YIR_YourSummary_GamesFew`)
                        : i > 36e4
                          ? o(`#YIR_YourSummary_HoursMany`)
                          : null),
    (0, Y.jsx)(`div`, { className: z_, children: s })
  );
}
function Yw(e) {
  let t = f_(),
    {
      rgGamesLength: n,
      nNewGames: r,
      nDemoPlayed: i,
      nPlaytestPlayed: a,
      nYear: o,
      nPreviousYearsGames: s,
    } = e,
    c = K(),
    l = mS(`bg_2023.svg`),
    u;
  return (
    n > 99999 ? (u = Ev) : n > 99 && (u = Tv),
    (0, Y.jsx)(`div`, {
      className: (0, Q.default)(W_, c.SummaryCtnShadow),
      children: (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(iv, q_, c.GridItem, Z_, c.SummaryCtn),
        children: [
          (0, Y.jsx)(`div`, { className: av }),
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)(Q_, gv),
            style: { backgroundImage: `url(${l})` },
          }),
          (0, Y.jsxs)(`div`, {
            className: vv,
            children: [
              (0, Y.jsx)(`div`, {
                className: P_,
                children: L.LocalizeReact(
                  `#YearInReview_SteamRewindHeader`,
                  (0, Y.jsx)(`span`, {
                    className: (0, Q.default)(L_, c.UserName),
                    children: L.Localize(`#YearInReview_PossessiveUserName`, t),
                  }),
                  Yn.Localize(`#date_year`, o),
                ),
              }),
              (0, Y.jsxs)(`div`, {
                className: (0, Q.default)(xv, bv),
                children: [
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(tv, u),
                    children: E(n),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: wv,
                    children: L.LocalizePlural(`#YIR_YourSummary_Games`, n),
                  }),
                  (0, Y.jsx)(Xw, {
                    strTokenPrefix: `#YIR_YourSummary_PrevYear_Game`,
                    nCurValue: n,
                    nPrevValue: s,
                  }),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Sv,
            children: [
              !!r &&
                (0, Y.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: E(r),
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: L.LocalizePlural(
                        `#YIR_YourSummary_GamesFirst`,
                        r,
                      ),
                    }),
                  ],
                }),
              !!i &&
                (0, Y.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: E(i),
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: L.LocalizePlural(`#YIR_YourSummary_Demos`, i),
                    }),
                  ],
                }),
              !!a &&
                (0, Y.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: E(a),
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: L.LocalizePlural(
                        `#YIR_YourSummary_PlayTests`,
                        a,
                      ),
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    })
  );
}
function Xw(e) {
  let { strTokenPrefix: t, nCurValue: n, nPrevValue: r } = e;
  if (r != null && r !== 0 && n !== 0)
    return n == r
      ? null
      : n < r
        ? (0, Y.jsxs)(`div`, {
            className: Ov,
            children: [
              (0, Y.jsx)(`div`, { className: (0, Q.default)(kv, Mv) }),
              (0, Y.jsx)(`div`, {
                className: Av,
                children: L.LocalizePlural(`${t}Less`, r - n, E(r - n)),
              }),
            ],
          })
        : (0, Y.jsxs)(`div`, {
            className: Ov,
            children: [
              (0, Y.jsx)(`div`, { className: (0, Q.default)(kv, jv) }),
              (0, Y.jsx)(`div`, {
                className: Av,
                children: L.LocalizePlural(`${t}More`, n - r, E(n - r)),
              }),
            ],
          });
}
function Zw(e) {
  let { userYearInReview: t } = e,
    n = t.GetPlayTimeStats().summary_stats;
  t.GetFilteredGameSummary();
  let r = t.GetYear(),
    i = K();
  if (!n) return null;
  let a = mS(`achievement_grid_02.webp`),
    o;
  return (
    typeof n.total_achievements == `number` && n.total_achievements > 99999
      ? (o = Ev)
      : typeof n.total_achievements == `number` &&
        n.total_achievements > 99 &&
        (o = Tv),
    (0, Y.jsx)(`div`, {
      className: (0, Q.default)(W_, i.SummaryCtnShadow),
      children: (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(
          iv,
          q_,
          i.GridItem,
          _v,
          void 0,
          i.SummaryCtn,
          i.AchievementBlock,
        ),
        children: [
          (0, Y.jsx)(`div`, { className: av }),
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)(Q_, gv),
            style: { backgroundImage: `url(${a})` },
          }),
          (0, Y.jsxs)(`div`, {
            className: (0, Q.default)(xv, ev),
            children: [
              (0, Y.jsx)(`div`, {
                className: (0, Q.default)(tv, o),
                children: E(n.total_achievements),
              }),
              (0, Y.jsx)(`div`, {
                className: wv,
                children: L.LocalizePlural(
                  `#YIR_YourSummary_Achievement`,
                  n.total_achievements,
                ),
              }),
              (0, Y.jsx)(Xw, {
                strTokenPrefix: `#YIR_YourSummary_PrevYear_Ach`,
                nCurValue: n.total_achievements,
                nPrevValue: Vw(r)
                  ? t.GetPreviousYearSummary()?.unlocked_achievements
                  : void 0,
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: hv,
            children: [
              (0, Y.jsxs)(`div`, {
                className: xv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(tv),
                    children: E(n.total_games_with_achievements || 0),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: wv,
                    children: L.LocalizePlural(
                      `#YIR_YourSummary_Achievement_Games`,
                      n.total_games_with_achievements,
                    ),
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: xv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: tv,
                    children: E(n.total_rare_achievements || 0),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: wv,
                    children: L.LocalizePlural(
                      `#YIR_YourSummary_Achievement_Rare`,
                      n.total_rare_achievements,
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function Qw(e) {
  let { oLongestStreak: t, nPrevLongestStreamDays: n } = e,
    r = t.rtime_start ?? 0,
    i = t.longest_consecutive_days ?? 0,
    a = h_(),
    o = a(r),
    s = a(r + i * 24 * 60 * 60),
    c = K();
  if (Im()) return null;
  let l = mS(`streak_bg.jpg`);
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(W_, c.SummaryCtnShadow),
    children: (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(
        iv,
        q_,
        c.GridItem,
        $_,
        c.SummaryCtn,
        c.StreakBlock,
      ),
      children: [
        (0, Y.jsx)(`div`, { className: av }),
        (0, Y.jsx)(`div`, {
          className: (0, Q.default)(Q_, gv),
          style: { backgroundImage: `url(${l})` },
        }),
        (0, Y.jsxs)(`div`, {
          className: (0, Q.default)(xv, ev),
          children: [
            (0, Y.jsx)(`div`, {
              className: tv,
              children: L.LocalizePlural(
                `#YIR_Game_LongestStreak_DaysPlayed`,
                i,
              ),
            }),
            (0, Y.jsx)(`div`, {
              className: wv,
              children: L.Localize(`#YIR_YourSummary_Stat_Streak`),
            }),
            (0, Y.jsx)(`div`, {
              className: Dv,
              children: L.Localize(
                `#YIR_Game_LongestStreak_FromDateToDate`,
                o,
                s,
              ),
            }),
            (0, Y.jsx)(Xw, {
              strTokenPrefix: `#YIR_YourSummary_PrevYear_Day`,
              nCurValue: i,
              nPrevValue: n,
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: hv,
          children: (0, Y.jsxs)(`div`, {
            className: (0, Q.default)(xv, Cv),
            children: [
              (0, Y.jsx)(`div`, {
                className: tv,
                children: E(t.streak_games.length),
              }),
              (0, Y.jsx)(`div`, {
                className: wv,
                children: L.LocalizePlural(
                  `#YIR_YourSummary_Games`,
                  t.streak_games.length,
                ),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function $w(e) {
  let { oTotalStats: t, nYear: n } = e,
    r = J(
      t.total_playtime_percentagex100 -
        t.controller_playtime_percentagex100 -
        t.vr_playtime_percentagex100 -
        t.deck_playtime_percentagex100,
    ),
    i = t.controller_playtime_percentagex100 + t.deck_playtime_percentagex100,
    a = J(i),
    o = mS(`keyboard.png?v=3`),
    s = mS(`controllers.png?v=2`),
    c = K(),
    l,
    u,
    d;
  return (
    Math.floor(i / 100) < 40
      ? ((l = 40), (u = dv), (d = fv))
      : Math.floor(i / 100) > 60
        ? ((l = 60), (u = fv), (d = dv))
        : (l = i / 100),
    (0, Y.jsx)(`div`, {
      className: (0, Q.default)(W_, c.SummaryCtnShadow),
      children: (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(
          ov,
          iv,
          q_,
          c.GridItem,
          nv,
          c.SummaryCtn,
          c.HardwareBlock,
        ),
        children: [
          (0, Y.jsx)(`div`, { className: av }),
          (0, Y.jsxs)(`div`, {
            className: sv,
            children: [
              (0, Y.jsxs)(`div`, {
                className: cv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: Q_,
                    style: { background: `url(${o}) bottom` },
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(lv, d),
                    children: r,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(pv, d),
                    children: L.Localize(`#YIR_HowYouPlayed_Keyboard_Generic`),
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: uv,
                style: { height: l + `%` },
                children: [
                  (0, Y.jsx)(`div`, {
                    className: Q_,
                    style: { background: `url(${s}) top` },
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(lv, u),
                    children: a,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(pv, u),
                    children: L.Localize(
                      `#YIR_HowYouPlayed_Controllers_Percent`,
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function eT(e) {
  let { gameStat: t, gridClass: n } = e,
    { appid: r } = t,
    { item: i } = kh(r),
    a = C_(0, [r]),
    o = K();
  if (!i) return null;
  let s = $i(i.assets, `library_hero`),
    c = Math.trunc(t.stats.total_sessions);
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(W_, o.SummaryCtnShadow),
    children: (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(iv, q_, o.GridItem, E_[n], o.SummaryCtn, o[n]),
      onClick: a,
      children: [
        (0, Y.jsx)(`div`, { className: av }),
        (0, Y.jsx)(`div`, {
          className: (0, Q.default)(Q_, o.BackgroundImage),
          style: { backgroundImage: `url(${s})` },
        }),
        (0, Y.jsx)(`div`, { className: mv, children: i.info.name }),
        (0, Y.jsxs)(`div`, {
          className: hv,
          children: [
            (0, Y.jsx)(tT, {
              percentVal: t.stats.total_playtime_percentagex100,
              subToken: `#YIR_Game_PlayStat`,
            }),
            (0, Y.jsxs)(`div`, {
              className: xv,
              children: [
                (0, Y.jsx)(`div`, { className: tv, children: E(c) }),
                (0, Y.jsx)(`div`, {
                  className: wv,
                  children: L.Localize(
                    c == 1
                      ? `#YIR_Game_PlaySession_Singular`
                      : `#YIR_Game_PlaySessions`,
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function tT(e) {
  let { percentVal: t, subToken: n, className: r } = e,
    i = J(t),
    a = `${n}_Percent`;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(xv, r),
    children: [
      (0, Y.jsx)(`div`, { className: tv, children: i }),
      (0, Y.jsx)(`div`, { className: wv, children: L.Localize(a) }),
    ],
  });
}
var nT = `VliP-d3rrOA-`,
  rT = `rN6Rp7gRK-8-`,
  iT = `_0KyNXUd2ye8-`,
  aT = `XVKp9D8UO7c-`,
  oT = `RY2J6XyyEuM-`,
  sT = `yaLK-z4T8sw-`;
Wx();
var cT = R.memo(function (e) {
    let { data: t, topMonthlyAppsAndRanks: n } = e,
      r = K(),
      i = (0, R.useCallback)((e, n) => (t[n]?.date ? Ur(t[n].date) : ``), [t]),
      a = (0, R.useRef)(void 0);
    return (0, Y.jsxs)(Pp, {
      responsive: !0,
      style: { width: `100%`, height: `100%` },
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 30,
      children: [
        (0, Y.jsx)(Ot, { vertical: !1, stroke: `#a0aab6` }),
        (0, Y.jsx)(gt, {
          tickFormatter: J,
          tick: { fill: `white` },
          axisLine: !0,
        }),
        (0, Y.jsx)(Te, {
          wrapperStyle: { outline: `none` },
          allowEscapeViewBox: { x: !1, y: !0 },
          isAnimationActive: !1,
          offset: 0,
          content: (e) =>
            (0, Y.jsx)(uT, {
              active: e.active,
              payload: e.payload,
              hoveredBarIDRef: a,
            }),
        }),
        (0, Y.jsx)(rt, {
          barSize: 60,
          dataKey: `topPlayedPercentBreakdownPerMonth.${Wm}`,
          name: Wm,
          stackId: `a`,
          fill: r.monthOthersColor,
          onMouseEnter: () => (a.current = Wm),
          onMouseOut: () => (a.current = void 0),
        }),
        n.map((e, t) =>
          (0, Y.jsx)(
            rt,
            {
              barSize: 60,
              dataKey: `topPlayedPercentBreakdownPerMonth.${e.appid}`,
              name: e.appid.toString(),
              stackId: `a`,
              fill: r[`topApp_${e.rank}`],
              onMouseEnter: () => (a.current = e.appid.toString()),
              onMouseOut: () => (a.current = void 0),
            },
            `${t}`,
          ),
        ),
        (0, Y.jsx)($e, {
          interval: 0,
          tick: (0, Y.jsx)(gT, {}),
          tickFormatter: i,
        }),
      ],
    });
  }),
  lT = 7;
function uT(e) {
  let { active: t, payload: n, hoveredBarIDRef: r } = e,
    i = K(),
    a = q();
  if (t && n && n.length) {
    let e = n[0].payload.date.getUTCMonth(),
      t = L.Localize(`#YIR_MonthlyCharts_MonthNoun_${e + 1}`),
      o = n[0].payload.topPlayedPercentBreakdownPerMonth[Um],
      s = Object.keys(n[0].payload.otherPlayedPercentBreakdownForMonth),
      c = n[0].payload.topPlayedRelativePercentBreakdownForMonth,
      l = n.find((e) => e.name === r.current),
      u = l?.name === Wm,
      d = n
        .map((e) => {
          let r = e.name,
            i = c[e.name];
          if (r === `percentOtherGamesRelativeMonth`) {
            let a = u && n.length == 1;
            return (0, Y.jsxs)(
              R.Fragment,
              {
                children: [
                  !a &&
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(e === l && `QlEkl-Bj9Tk-`),
                      children: vT(
                        i,
                        t,
                        `#YIR_MonthlyCharts_OtherGamesTooltip`,
                      ),
                    }),
                  u &&
                    s
                      .slice(0, lT)
                      .map((e) =>
                        (0, Y.jsx)(
                          pT,
                          { appId: e, className: `QlEkl-Bj9Tk-` },
                          e,
                        ),
                      ),
                  u &&
                    s.length > lT &&
                    (0, Y.jsx)(`div`, {
                      className: `QlEkl-Bj9Tk-`,
                      children: L.Localize(
                        `#YIR_MonthlyCharts_OtherGamesTooltip_AndMore`,
                        s.length - lT,
                      ),
                    }),
                ],
              },
              r,
            );
          }
          return e.value
            ? (0, Y.jsx)(
                mT,
                {
                  appId: r,
                  className: (0, Q.default)(e === l && `QlEkl-Bj9Tk-`),
                  date: t,
                  value: i,
                },
                r,
              )
            : null;
        })
        .reverse(),
      f = d.length == 1 && s.length > 0;
    return (0, Y.jsxs)(Ul, {
      style: { background: l?.color ?? i.monthOthersColor },
      className: nT,
      children: [
        (0, Y.jsx)(`div`, { className: rT }),
        (0, Y.jsx)(`div`, {
          className: aT,
          children:
            l &&
            (0, Y.jsxs)(Y.Fragment, {
              children: [
                !u && (0, Y.jsx)(fT, { appId: l.name }),
                u && (0, Y.jsx)(dT, { appIds: s.slice(0, 7) }),
              ],
            }),
        }),
        (0, Y.jsxs)(`div`, {
          className: iT,
          children: [
            (0, Y.jsx)(`div`, {
              className: void 0,
              children: vT(o, t, `#YIR_MonthlyCharts_PlayedTotalTooltip`),
            }),
            !f &&
              (0, Y.jsxs)(Y.Fragment, {
                children: [
                  (0, Y.jsx)(`div`, {
                    children: L.Localize(
                      `#YIR_MonthlyCharts_PlayedSubtitleTooltip`,
                    ),
                  }),
                  d,
                ],
              }),
            f &&
              l &&
              (0, Y.jsxs)(Y.Fragment, {
                children: [
                  (0, Y.jsx)(`div`, {
                    children: a(`#YIR_MonthlyCharts_OtherGamesTooltip_Only`),
                  }),
                  d,
                ],
              }),
          ],
        }),
      ],
    });
  }
  return null;
}
function dT({ appIds: e }) {
  return (0, Y.jsx)(`div`, {
    className: oT,
    children: e?.map((t, n) =>
      (0, Y.jsx)(
        fT,
        { appId: t, style: { zIndex: e.length - n, "--stack-position": n } },
        t,
      ),
    ),
  });
}
function fT({ appId: e, style: t }) {
  let { item: n } = kh(parseInt(e));
  if (!n?.assets) return null;
  let r = $i(n.assets, `library_capsule`) || Uh;
  return (0, Y.jsx)(`img`, { alt: ``, style: t, className: sT, src: r });
}
function pT({ appId: e, className: t }) {
  let { item: n } = kh(parseInt(e));
  return n
    ? (0, Y.jsx)(`div`, { className: t, children: n.info.name }, e)
    : null;
}
function mT(e) {
  let { appId: t, className: n, value: r, date: i } = e,
    { item: a } = kh(parseInt(t));
  return a
    ? (0, Y.jsx)(
        `div`,
        {
          className: n,
          children: vT(
            r,
            i,
            `#YIR_MonthlyCharts_TopPlayedTooltip`,
            (0, Y.jsx)(`b`, { children: a.info.name }),
          ),
        },
        t,
      )
    : null;
}
var hT = R.memo(function (e) {
  let { data: t, name: n, color: r } = e,
    i = K(),
    a = (0, R.useCallback)((e, n) => (t[n]?.date ? Ur(t[n].date) : ``), [t]),
    [o, s] = (0, R.useState)(!1);
  (0, R.useEffect)(() => {
    s(document.documentElement.matches(`:dir(rtl)`));
  }, []);
  let c = `left`;
  return (
    o && (c = `right`),
    (0, Y.jsxs)(Pp, {
      responsive: !0,
      style: { width: `100%`, height: `100%` },
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 30,
      children: [
        (0, Y.jsx)(Te, {
          wrapperStyle: {
            outline: `1px solid ` + (r ?? i.chartAccentColorAlt),
          },
          allowEscapeViewBox: { x: !1, y: !0 },
          reverseDirection: { x: o, y: !1 },
          isAnimationActive: !1,
          content: (e) =>
            (0, Y.jsx)(_T, { active: e.active, payload: e.payload, name: n }),
        }),
        (0, Y.jsx)(Ot, { vertical: !1, stroke: `#a0aab6` }),
        (0, Y.jsx)(gt, {
          tickFormatter: J,
          tick: { fill: `white` },
          axisLine: !0,
          orientation: c,
        }),
        (0, Y.jsx)(rt, {
          barSize: 60,
          dataKey: `percent`,
          fill: r ?? i.chartAccentColorAlt,
        }),
        (0, Y.jsx)($e, {
          interval: 0,
          tick: (0, Y.jsx)(gT, { bRTL: o }),
          tickFormatter: a,
          color: `#ffffff`,
          reversed: o,
        }),
      ],
    })
  );
});
function gT(e) {
  let { x: t, y: n, payload: r, bRTL: i } = e,
    a = e.tickFormatter(r.value, r.index),
    o = `end`,
    s = `rotate(-35)`;
  return (
    i && ((o = `start`), (s = `rotate(35)`)),
    (0, Y.jsx)(`g`, {
      transform: `translate(${t},${n})`,
      children: (0, Y.jsx)(`text`, {
        x: 0,
        y: 0,
        dy: 16,
        textAnchor: o,
        fill: `#FFFFFF`,
        transform: s,
        children: a,
      }),
    })
  );
}
function _T(e) {
  let { active: t, payload: n, name: r } = e,
    i = K(),
    a = n[0];
  if (t && a?.value) {
    let e = a.payload.date.getUTCMonth(),
      t = L.Localize(`#YIR_MonthlyCharts_MonthNoun_${e + 1}`),
      n = a.value;
    return (0, Y.jsx)(Ul, {
      style: { background: `#0e1014` },
      children: (0, Y.jsx)(
        `div`,
        {
          style: { color: i.chartAccentColor },
          children: L.LocalizeReact(
            `#YIR_MonthlyCharts_TopPlayedGameTooltip_Percent`,
            (0, Y.jsx)(`b`, { children: J(n) }),
            t,
            r,
          ),
        },
        r,
      ),
    });
  }
  return null;
}
function vT(e, t, n, ...r) {
  let i = `${n}_Percent`;
  return L.LocalizeReact(i, (0, Y.jsx)(`b`, { children: J(e) }), t, ...r);
}
var yT = `Md96G4kZDAE-`;
function bT(e) {
  let { userYearInReview: t } = e,
    n = q(),
    r = t.GetChartMonthlyData(),
    i = t.GetTopGameIdsAndRanks(),
    a = t.GetPlayTimeStats().games?.length ?? 0;
  return (0, Y.jsx)(`div`, {
    className: yT,
    children:
      a > 1 &&
      (0, Y.jsxs)($, {
        className: void 0,
        children: [
          (0, Y.jsx)(`div`, {
            className: `jKX9urC1MxY-`,
            children: n(`#YIR_MonthlyCharts_Title`),
          }),
          (0, Y.jsx)(`div`, {
            className: `-q3HKBZo0Fg-`,
            children: (0, Y.jsx)(`div`, {
              className: `J-KteziHcsY-`,
              children: (0, Y.jsx)(cT, { data: r, topMonthlyAppsAndRanks: i }),
            }),
          }),
        ],
      }),
  });
}
function xT(e) {
  let t = fh(e),
    n = mh(e, !1);
  return ST(t?.all_time_unlocked_achievements, n?.length ?? 0);
}
function ST(e, t) {
  return typeof e == `number` && e > 0 && t > 0 && t <= e;
}
var CT = 2022,
  wT = `_2fXTkYFuLL0-`,
  TT = `_5hU6-LHkC9I-`,
  ET = `zDLaFJWW2Nk-`,
  DT = `N5WJoNh0dWc-`,
  OT = `JIuGrMQYevI-`,
  kT = `WzRwXnpcz6g-`,
  AT = `_4AJ91mlqTEg-`,
  jT = `OetAU-ImB-A-`,
  MT = `qRqoeOi-LW0-`,
  NT = `wlHDLgvcDaY-`,
  PT = `_7HxW8ABT2Qw-`,
  FT = `_1XiF5sig4jA-`;
function IT(e) {
  let { appid: t, userYearInReview: n } = e,
    r = fh(t);
  return !r || !((r?.achievements?.length ?? 0) > 0)
    ? null
    : (0, Y.jsx)(T, {
        children: (0, R.createElement)(LT, {
          ...e,
          key: `achievementunlucklist_` + t,
          userUnlockedAchievements: r,
        }),
      });
}
function LT(e) {
  let {
      appid: t,
      userYearInReview: n,
      bBlurContent: r,
      userUnlockedAchievements: i,
    } = e,
    [a, o] = (0, R.useState)(r),
    s = q(),
    c = gh(t),
    l = () => o(!1),
    u = i.achievements?.length ?? 0,
    d = i.all_time_unlocked_achievements,
    f = d == c && c > 0 && u > 0 && d > 0 && !i.unlocked_more_in_future,
    p = ql({ appid: t, profileUrl: cn(n.GetSteamID()) }),
    m = oa();
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(X, wT),
    children: [
      a &&
        (0, Y.jsx)(`div`, {
          onClick: l,
          className: `_2i6-GdwcqFw-`,
          children: L.Localize(`#YIR_TopGames_ContentRestrictionAchievements`),
        }),
      (0, Y.jsxs)(`div`, {
        className: TT,
        children: [
          (0, Y.jsx)(`div`, {
            className: DT,
            children: s(`#YIR_TopGames_Achievements`),
          }),
          (0, Y.jsxs)(`div`, {
            className: ET,
            children: [
              m &&
                (0, Y.jsx)(`a`, {
                  href: p,
                  className: `cOnRdqZh5ak-`,
                  children: L.Localize(`#YIR_SeeAllAchievements`),
                }),
              !m &&
                (0, Y.jsx)(dc, {
                  href: p,
                  target: `_blank`,
                  className: `cOnRdqZh5ak-`,
                  children: L.Localize(`#YIR_SeeAllAchievements`),
                }),
            ],
          }),
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)({ [void 0]: f, [OT]: !0 }),
        children: (0, Y.jsxs)(`div`, {
          className: kT,
          children: [
            (0, Y.jsxs)(`div`, {
              className: AT,
              children: [
                (0, Y.jsx)(`div`, { className: jT, children: E(u) }),
                (0, Y.jsx)(`div`, {
                  className: MT,
                  children: L.LocalizeReact(
                    `#YIR_UnlockedThisYear_Short`,
                    (0, Y.jsx)(`br`, {}),
                  ),
                }),
              ],
            }),
            (0, Y.jsx)(RT, { userUnlockedAchievements: i }),
          ],
        }),
      }),
    ],
  });
}
function RT(e) {
  let { userUnlockedAchievements: t } = e,
    n = t.appid;
  Li(n, `Missing appid for achievements list!`);
  let r = hh(n),
    i = (0, R.useMemo)(
      () =>
        [...(t.achievements ?? [])].sort(
          (e, t) => (e.rtime_unlocked ?? 0) - (t.rtime_unlocked ?? 0),
        ),
      [t],
    );
  return i?.length > 0
    ? (0, Y.jsx)(Y.Fragment, {
        children: i
          .map((e) => r.get(e.achievement_name_internal ?? ``))
          .filter((e) => !!e?.icon)
          .map((e) =>
            (0, Y.jsx)(
              BT,
              { appid: n, display: e },
              `displayAch_` + e.internal_name,
            ),
          ),
      })
    : (0, Y.jsx)(nn, { size: `small`, string: Yn.Localize(`#Loading`) });
}
var zT = 10;
function BT(e) {
  let { display: t, appid: n } = e,
    r = `${N.MEDIA_CDN_COMMUNITY_URL}images/apps/${n}/${t.icon}`,
    i = Number.parseFloat(`` + t.player_percent_unlocked) < zT;
  return (0, Y.jsx)(Cr, {
    toolTipContent: (0, Y.jsx)(VT, { display: t }),
    className: (0, Q.default)({ [PT]: i, [NT]: !0 }),
    children: (0, Y.jsx)(Jl, {
      imgURL: r,
      className: FT,
      alt: t.localized_name ?? t.internal_name,
      glow: i,
      hideNativeTooltip: !0,
    }),
  });
}
function VT(e) {
  let { display: t } = e,
    n;
  return (
    t.localized_desc && t.localized_name
      ? (n = `${t?.localized_name}: ${t.localized_desc}`)
      : t.localized_name
        ? (n = t.localized_name)
        : t.internal_name && (n = t.internal_name),
    (0, Y.jsxs)(`div`, {
      className: Na,
      children: [
        (0, Y.jsx)(`div`, { children: n }),
        (0, Y.jsx)(`br`, {}),
        (0, Y.jsx)(`div`, {
          children: L.Localize(
            `#YIR_Achievement_ttip`,
            E(Math.max(0.1, Number.parseFloat(`` + t.player_percent_unlocked))),
          ),
        }),
      ],
    })
  );
}
var HT = `l-51YapU23U-`,
  UT = `MFK0ZYn4p8Y-`,
  WT = `z5SvMUtFD4c-`,
  GT = `Pj3LFELaj0I-`;
function KT(e) {
  let { appid: t, bBlurContent: n, nYear: r } = e,
    i = yh(t),
    [a, o] = $t(),
    s = q();
  return !i || i.length == 0
    ? null
    : (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(X, HT),
        children: [
          o,
          (0, Y.jsx)(`div`, {
            className: UT,
            children: s(`#YIR_ScreenshotsThisYear`),
          }),
          (0, Y.jsx)(`div`, {
            className: WT,
            children: i.map((e, t) =>
              (0, Y.jsx)(
                JT,
                {
                  nYear: r,
                  bBlurContent: n,
                  screenshot: e,
                  fnSetExpandScreenShot: () => {
                    let e = i
                      .slice(t)
                      .concat(i.slice(0, t))
                      .map((e) => e.image_url);
                    a(e);
                  },
                },
                `${e.image_url}_${t}`,
              ),
            ),
          }),
        ],
      });
}
var qT = `?imw=375&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false`;
function JT(e) {
  let {
      screenshot: t,
      fnSetExpandScreenShot: n,
      bBlurContent: r,
      nYear: i,
    } = e,
    [a, o] = (0, R.useState)(r),
    s = { backgroundImage: `url(${t.image_url + qT})` };
  return (0, Y.jsxs)(`div`, {
    className: GT,
    onClick: () => {
      (a && o(!1), n());
    },
    style: s,
    children: [
      a &&
        (0, Y.jsx)(`div`, {
          className: `L83TMGRMjs8-`,
          children: L.Localize(`#YIR_TopGames_ContentRestrictionScreenshots`),
        }),
      (0, Y.jsx)(`img`, { alt: ``, src: mS(`screenshot_placeholder.png`) }),
    ],
  });
}
function YT(e) {
  let { userYearInReview: t } = e,
    n = t.GetTopGamesShownAppIDs(),
    r = q(),
    i = (0, R.useMemo)(() => n?.slice(0, 5), [0, 5, n]);
  if (!n || n.length == 0 || 0 > n.length) return null;
  let a = n.length > 1;
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(Xh),
    children: (0, Y.jsxs)(on, {
      placeholderHeight: `100vh`,
      rootMargin: Zm,
      className: Yh,
      children: [
        !!a &&
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)(`_4RT2F1qWDf0-`, void 0),
            children: (0, Y.jsx)(`div`, {
              className: `mNRC0alPlMM-`,
              children: r(`#YIR_TopGame_mostplayed_intro`),
            }),
          }),
        i.map((e, n) =>
          (0, Y.jsx)(
            $,
            {
              children: (0, Y.jsx)(
                eE,
                { unAppID: e, userYearInReview: t, index: n },
                n,
              ),
            },
            n,
          ),
        ),
      ],
    }),
  });
}
function XT(e) {
  let { gameSummary: t, index: n, userYearInReview: r } = e,
    i = q(),
    a = p_(),
    o = t.appid,
    s = r.GetYear();
  for (let e = s; e >= CT; --e) {
    let t = `#steamrewind${e}_gametext_appid_${o}`,
      n = a(e, t, s);
    if (n !== void 0)
      return (0, Y.jsxs)(`div`, { className: ig, children: [n, ` `] });
  }
  let c;
  return (
    n == 0
      ? (c = t?.new_this_year
          ? typeof t.total_playtime_percentagex100 == `number` &&
            t.total_playtime_percentagex100 > 1e3
            ? `#YIR_TopGame_first_new_hooked`
            : `#YIR_TopGame_first_new`
          : `#YIR_TopGame_first_continued`)
      : n == 1 &&
        (c = t?.new_this_year
          ? `#YIR_TopGame_top_new`
          : `#YIR_TopGame_top_continued`),
    c
      ? (0, Y.jsx)(`div`, {
          className: (0, Q.default)(ig, void 0),
          children: i(c, r.GetYear()),
        })
      : null
  );
}
function ZT(e) {
  let [t, n] = R.useState(!1),
    r = R.useRef(null),
    i = r.current,
    a = T_();
  (R.useEffect(() => {
    (e !== null && e != i && n(!0), e === null && t && n(!1));
  }, [n, t, e, i]),
    (r.current = e));
  let o = R.useRef(void 0),
    s = R.useCallback(() => {
      ((o.current = setTimeout(() => a(e), parseInt(Gh))), n(!1));
    }, [a, e]);
  return (
    R.useEffect(
      () => () => {
        (o.current && clearTimeout(o.current), (o.current = void 0));
      },
      [],
    ),
    [t, s]
  );
}
function QT(e) {
  return R.useCallback(
    (t) => {
      t.target == t.currentTarget && e();
    },
    [e],
  );
}
function $T(e) {
  let { userYearInReview: t } = e,
    { unAppID: n, length: r, index: i = 0 } = x_(),
    [a, o] = ZT(n),
    s = QT(o),
    c = w_(i + 1),
    l = w_(i - 1),
    u = Ea();
  if (n == null && !a) return null;
  let d = (0, Q.default)(Xg, a && `eAjysxH-TgY-`, u && `maE92CVTDsk-`),
    f = (0, Y.jsx)(`div`, {
      className: d,
      onClick: s,
      children: (0, Y.jsxs)(`div`, {
        className: Qg,
        children: [
          (0, Y.jsx)(`div`, {
            className: n_,
            children:
              n !== null &&
              (0, Y.jsx)(eE, { unAppID: n, userYearInReview: t, index: 1 }),
          }),
          (0, Y.jsx)(en, {
            index: i,
            numElements: r,
            fnForward: c,
            fnBackwards: l,
            fnClose: o,
          }),
        ],
      }),
    });
  return typeof document > `u` ? null : lu.createPortal(f, document.body);
}
var eE = R.memo(function (e) {
  let { unAppID: t, userYearInReview: n, index: r } = e,
    i = n.GetGameStats(t),
    a = Math.trunc(i?.playtime_streak?.longest_consecutive_days || 1),
    o = n.GetGameSummaryForApp(t),
    s = o ? o.parent_appid || t : 0,
    { item: c, bLoading: l } = kh(s),
    u = xT(s),
    d = Lr(c ? Qt(c.info) : void 0),
    f = q(),
    p = r % 2 ? `OddGradient` : `EvenGradient`,
    m = Ea(),
    h = u_(),
    g = K(),
    _ = oa(),
    { gameChartData: v, rank: ee } = (0, R.useMemo)(
      () => n.GetChartMonthlyDataForApp(t),
      [t, n],
    );
  if (l)
    return (0, Y.jsx)(`div`, {
      className: (0, Q.default)($h, Wh[p], g.TopGameBlockContainer, g[p], eg),
      children: (0, Y.jsx)(nn, { position: `center` }),
    });
  if (!c || !o) return null;
  let y = d;
  N.IN_CLIENT && (y = `steam://openurl/` + y);
  let te = v?.find((e) => e.percent > 0),
    ne = te ? te.date.getUTCMonth() : null,
    re = ne ? L.Localize(`#YIR_MonthlyCharts_MonthNoun_${ne + 1}`) : ``,
    ie = Math.trunc(o.total_sessions),
    ae = ``;
  h && m
    ? (ae = `steam://open/games/details/${t}`)
    : h && !N.IN_MOBILE_WEBVIEW && (ae = `steam://open/library/details/${t}`);
  let oe = c.info.name ?? ``,
    se = oe;
  return (
    o.demo
      ? (se = L.Localize(`#YIR_GameName_PlusDemo`, se))
      : o.playtest && (se = L.Localize(`#YIR_GameName_PlusPlaytest`, se)),
    (0, Y.jsxs)($, {
      className: (0, Q.default)($h, Wh[p], g.TopGameBlockContainer, g[p]),
      children: [
        (0, Y.jsx)(nE, { item: c }),
        (0, Y.jsxs)(`div`, {
          className: ng,
          children: [
            (0, Y.jsx)(tE, { item: c }),
            (0, Y.jsxs)(`div`, {
              className: (0, Q.default)(X, fg),
              children: [
                (0, Y.jsxs)(`div`, {
                  className: pg,
                  children: [
                    (0, Y.jsxs)(A, {
                      className: mg,
                      "flow-children": `row`,
                      children: [
                        _ &&
                          (0, Y.jsx)(`a`, {
                            href: y,
                            className: `_3zY6l-RwMbM-`,
                            children: L.Localize(`#YIR_TopGames_VisitInStore`),
                          }),
                        !_ &&
                          (0, Y.jsx)(dc, {
                            href: y,
                            target: `_blank`,
                            className: `_3zY6l-RwMbM-`,
                            children: L.Localize(`#YIR_TopGames_VisitInStore`),
                          }),
                        !!ae &&
                          (0, Y.jsx)(dc, {
                            href: ae,
                            className: `_3zY6l-RwMbM-`,
                            children: L.Localize(
                              `#YIR_TopGames_VisitInLibrary`,
                            ),
                          }),
                        !h && (0, Y.jsx)(iE, { appID: s }),
                      ],
                    }),
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)({
                        [ag]: !0,
                        [_g]: (se?.length ?? 0) > 25,
                      }),
                      children: se,
                    }),
                    (0, Y.jsx)(XT, {
                      gameSummary: o,
                      userYearInReview: n,
                      index: r,
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: og,
                      children: [
                        !!o.total_playtime_percentagex100 &&
                          (0, Y.jsxs)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: [
                              (0, Y.jsx)(`div`, {
                                className: `Jsbe84OZILs-`,
                                children: J(
                                  Math.ceil(o.total_playtime_percentagex100),
                                ),
                              }),
                              (0, Y.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: L.Localize(
                                  `#YIR_Game_PercentPlaytime`,
                                ),
                              }),
                            ],
                          }),
                        !!o.total_sessions &&
                          (0, Y.jsxs)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: [
                              (0, Y.jsx)(`div`, {
                                className: `Jsbe84OZILs-`,
                                children: E(ie),
                              }),
                              (0, Y.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: L.Localize(
                                  ie == 1
                                    ? `#YIR_Game_PlaySession_Singular`
                                    : `#YIR_Game_PlaySessions`,
                                ),
                              }),
                            ],
                          }),
                        !Im() &&
                          a > 1 &&
                          (0, Y.jsx)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: (0, Y.jsxs)(Sa, {
                              toolTipContent: L.LocalizeReact(
                                `#YIR_Game_LongestStreak_ttip`,
                              ),
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `Jsbe84OZILs-`,
                                  children: E(a),
                                }),
                                (0, Y.jsx)(`div`, {
                                  className: `ao7jCFf5gSI-`,
                                  children: L.Localize(
                                    `#YIR_Game_LongestStreak`,
                                  ),
                                }),
                              ],
                            }),
                          }),
                        !!o?.new_this_year &&
                          (0, Y.jsx)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: (0, Y.jsxs)(Sa, {
                              toolTipContent: f(
                                `#YIR_TopGames_NewThisYEar_ttip`,
                              ),
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `Jsbe84OZILs-`,
                                  children: (0, Y.jsx)(oc, {}),
                                }),
                                (0, Y.jsx)(`div`, {
                                  className: `ao7jCFf5gSI-`,
                                  children: L.Localize(
                                    `#YIR_TopGames_NewThisYEar`,
                                  ),
                                }),
                              ],
                            }),
                          }),
                        !!u &&
                          (0, Y.jsxs)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: [
                              (0, Y.jsx)(`div`, {
                                className: `Jsbe84OZILs-`,
                                children: (0, Y.jsx)(Dn, {}),
                              }),
                              (0, Y.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: L.Localize(`#YIR_TopGames_100`),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                v &&
                  (0, Y.jsxs)(`div`, {
                    className: (0, Q.default)(`v6AigbmQ0CY-`, `AJaOL928lBE-`),
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `_1X4tYa2ADHY-`,
                        children: re
                          ? f(
                              o?.new_this_year
                                ? `#YIR_TopGames_firstplayedNew`
                                : `#YIR_TopGames_firstplayed`,
                              re,
                            )
                          : null,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `xPrgBVyuYEE-`,
                        children: (0, Y.jsx)(hT, {
                          data: v,
                          name: oe,
                          color: g[`topApp_${ee}`],
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, Y.jsx)(rE, { appid: s, userYearInReview: n, item: c }),
      ],
    })
  );
});
function tE(e) {
  let { item: t } = e,
    n = d_(t.info),
    r = $i(t.assets, `library_hero`);
  return (0, Y.jsx)(`div`, {
    className: dg,
    style: n ? void 0 : { backgroundImage: `url(${r})` },
  });
}
function nE(e) {
  let { item: t } = e,
    n = K(),
    r = d_(t.info),
    i = $i(t.assets, `library_hero`);
  return (0, Y.jsx)(Y.Fragment, {
    children: (0, Y.jsx)(`div`, {
      className: (0, Q.default)(lg, n.BackgroundImageFull),
      style: r ? void 0 : { backgroundImage: `url(${i})` },
    }),
  });
}
function rE(e) {
  let { appid: t, userYearInReview: n, item: r } = e,
    i = d_(r.info);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(IT, { bBlurContent: i, appid: t, userYearInReview: n }),
      (0, Y.jsx)(KT, { bBlurContent: i, appid: t, nYear: n.GetYear() }),
    ],
  });
}
function iE(e) {
  let { appID: t } = e,
    n = oe(t),
    r = Xe(t),
    { bIsOwned: i } = Jt(n),
    a = Xa(),
    { mutate: o } = pt(t, !r, a);
  return !w.logged_in || i
    ? null
    : (0, Y.jsxs)(A, {
        className: (0, Q.default)(gg),
        onActivate: (e) => {
          (e.preventDefault(), e.stopPropagation(), o());
        },
        children: [
          r ? (0, Y.jsx)(al, {}) : (0, Y.jsx)(kl, {}),
          Yn.Localize(r ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`),
        ],
      });
}
function aE(e) {
  let { pageData: t } = e,
    { steamid: n, nYear: r, eResult: i } = t;
  R.useEffect(() => {
    let e = new URL(window.location.href),
      t = [`src`, `snr`, `sP`].filter((t) => e.searchParams.has(t));
    t.length &&
      (t.forEach((t) => e.searchParams.delete(t)),
      window.history.replaceState(window.history.state, ``, e));
  }, []);
  let a = R.useRef(null);
  return (
    R.useEffect(() => {
      a.current && a.current.NavTree()?.Activate(!0);
    }, []),
    i == 15
      ? (0, Y.jsx)(pE, {
          message: L.Localize(`#YIR_Error_NoShareNoGameplayNotUser`),
        })
      : !n || !r
        ? (0, Y.jsx)(pE, { message: L.Localize(`#YIR_Error_NoData`) })
        : (0, Y.jsx)(Eh.Provider, {
            value: t,
            children: (0, Y.jsx)(A, {
              navRef: a,
              children: (0, Y.jsx)(oE, { steamid: n, year: r }),
            }),
          })
  );
}
function oE(e) {
  let { steamid: t, year: n } = e,
    r = new wa(t),
    [i, a] = Xl(r.GetAccountID()),
    { userYearInReview: o, isLoading: s } = rh(t, n),
    { isLoading: c, isError: l } = Ah(o?.GetTopGamesShownAppIDs() ?? []),
    u = Hh();
  if (a || s || c || !u)
    return (0, Y.jsx)(nn, {
      string: Yn.Localize(`#Loading`),
      position: `center`,
    });
  if (!i || !r.BIsIndividualAccount())
    return (0, Y.jsx)(pE, { message: L.Localize(`#YIR_Error_NoUser`) });
  if (!o || l)
    return (0, Y.jsx)(pE, { message: L.Localize(`#YIR_Error_PageLoadFailed`) });
  let d = !o.GetPlayTimeStats()?.game_summary?.length;
  return w.steamid !== i.steamid && d
    ? (0, Y.jsx)(pE, {
        message: L.Localize(`#YIR_Error_NoShareNoGameplayNotUser`),
      })
    : d
      ? (0, Y.jsx)(pE, { message: L.Localize(`#YIR_Error_NoShareNoGameplay`) })
      : (0, Y.jsx)(A, {
          autoFocus: !0,
          noFocusRing: !0,
          focusable: !1,
          scrollIntoViewType: ll.NoTransformSparseContent,
          children: (0, Y.jsx)(`div`, {
            className: D_,
            children: (0, Y.jsx)(cE, {
              userYearInReview: o,
              avatarAndPersona: i,
            }),
          }),
        });
}
function sE(e) {
  let {
      viewAsUser: t,
      avatarAndPersona: n,
      userYearInReview: r,
      themeYear: i,
      children: a,
    } = e,
    o = Zl(i),
    s = Gs(),
    c = r.GetSteamID(),
    l = r.GetYear(),
    u = R.useMemo(() => oh(s, c, l), [s, c, l]),
    d = R.useMemo(
      () => ({
        bIsUser: t,
        persona_name: n.persona_name,
        avatar_url: n.avatar_url,
        themeStyle: o,
      }),
      [t, n.persona_name, n.avatar_url, o],
    );
  return (0, Y.jsx)(l_.Provider, {
    value: d,
    children: (0, Y.jsx)(ao, {
      eAdultOnlyMediaBehavior: t ? `allowed` : `masked`,
      children: (0, Y.jsx)(sh.Provider, {
        value: u,
        children: (0, Y.jsx)(y_, { children: a }),
      }),
    }),
  });
}
function cE(e) {
  let { userYearInReview: t, avatarAndPersona: n } = e,
    r = t.GetYear(),
    i = w.logged_in && w.steamid === n.steamid,
    [a, o] = (0, R.useState)(i),
    [s, c] = (0, R.useState)(r);
  return (0, Y.jsxs)(sE, {
    viewAsUser: a,
    userYearInReview: t,
    avatarAndPersona: n,
    themeYear: s,
    children: [
      (0, Y.jsx)(fE, {
        viewAsUser: a,
        setViewAsUser: o,
        themeYear: s,
        setThemeYear: c,
      }),
      (0, Y.jsx)(lE, { ...e, viewAsUser: a }),
    ],
  });
}
function lE(e) {
  let { userYearInReview: t, viewAsUser: n } = e,
    r = t.GetSteamID(),
    i = t.GetYear();
  dh(t);
  let { persona_name: a } = (0, R.useContext)(l_),
    o = t.GetPlayTimeStats().game_summary?.length;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(dE, { userYearInReview: t }),
      (0, Y.jsx)(T, {
        children: (0, Y.jsxs)(vb, {
          userYearInReview: t,
          children: [
            (0, Y.jsx)(Hw, { userYearInReview: t }),
            o === 1 && (0, Y.jsx)(YT, { userYearInReview: t }),
          ],
        }),
      }),
      (0, Y.jsx)(T, { children: (0, Y.jsx)(Jx, { userYearInReview: t }) }),
      typeof o == `number` &&
        o > 1 &&
        (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(YT, { userYearInReview: t }),
            (0, Y.jsx)(`div`, {
              className: `xan-F7AKHTg-`,
              children: (0, Y.jsx)(T, {
                children: (0, Y.jsx)(bT, { userYearInReview: t }),
              }),
            }),
          ],
        }),
      (0, Y.jsx)(`div`, {
        className: Fv,
        children: (0, Y.jsx)(T, {
          children: (0, Y.jsx)(ES, { userYearInReview: t }),
        }),
      }),
      !!t.GetPlayTimeStats().playtime_streak &&
        (0, Y.jsx)(T, { children: (0, Y.jsx)(qS, { userYearInReview: t }) }),
      typeof o == `number` &&
        o > 5 &&
        (0, Y.jsx)(T, {
          children: (0, Y.jsx)(Hy, { userYearInReview: t, nYear: i }),
        }),
      (0, Y.jsx)(T, {
        children: (0, Y.jsxs)(`div`, {
          className: ey,
          children: [
            (0, Y.jsx)(vb, {
              userYearInReview: t,
              children: (0, Y.jsx)(mE, { playerName: a, userYearInReview: t }),
            }),
            n &&
              (0, Y.jsxs)(`div`, {
                className: `GQ15KBYq0dM-`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `aXiQBfYGO9I-`,
                    children: L.Localize(`#YIR_ShareOptionsTitle`),
                  }),
                  (0, Y.jsxs)(A, {
                    className: `QsTph6fo6tE-`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: (0, Q.default)(`PmXhnAChGR0-`),
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `smzKi1RTbdQ-`,
                            children: L.Localize(`#YIR_ShareModal_TitleSocial`),
                          }),
                          (0, Y.jsx)(kw, { steamid: r, nYear: i }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: (0, Q.default)(`PmXhnAChGR0-`),
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `smzKi1RTbdQ-`,
                            children: L.Localize(
                              `#YIR_ShareModal_TitleProfile`,
                            ),
                          }),
                          (0, Y.jsxs)(dc, {
                            href: `${N.COMMUNITY_BASE_URL}profiles/${w.steamid}/edit/showcases`,
                            className: (0, Q.default)(`j8A4NpxJ0t0-`),
                            children: [
                              (0, Y.jsx)(zs, { className: `uc6rSxuiYYU-` }),
                              (0, Y.jsx)(`span`, {
                                className: (0, Q.default)(`_2-Cr-SQJps0-`),
                                children: L.Localize(
                                  `#YIR_ShareModal_AddShowcase`,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      }),
      (0, Y.jsx)(T, { children: (0, Y.jsx)(lS, { userYearInReview: t }) }),
      (0, Y.jsx)(T, { children: (0, Y.jsx)(tC, { steamid: r, year: i }) }),
      (0, Y.jsx)(T, { children: (0, Y.jsx)(hE, { year: i }) }),
      (0, Y.jsx)(T, { children: (0, Y.jsx)($T, { userYearInReview: t }) }),
    ],
  });
}
function uE() {
  let e = K(),
    { persona_name: t, avatar_url: n } = (0, R.useContext)(l_);
  return (0, Y.jsxs)(`div`, {
    className: F_,
    children: [
      (0, Y.jsx)(Gl, {
        strAvatarURL: n.replace(/\.jpg$/, `_full.jpg`),
        className: I_,
      }),
      (0, Y.jsx)(`span`, {
        className: (0, Q.default)(L_, e.UserName),
        children: L.Localize(`#YearInReview_PossessiveUserName`, t),
      }),
    ],
  });
}
function dE(e) {
  let { userYearInReview: t } = e,
    n = t.GetSteamID(),
    r = t.GetYear();
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(X, O_),
    children: (0, Y.jsxs)(`div`, {
      className: N_,
      children: [
        (0, Y.jsx)(`div`, {
          className: P_,
          children: L.LocalizeReact(
            `#YearInReview_SteamRewindHeader`,
            (0, Y.jsx)(uE, {}),
            Yn.Localize(`#date_year`, r, ` `),
          ),
        }),
        w.logged_in &&
          (0, Y.jsx)(`div`, {
            className: `-vTPvlHUL7g-`,
            children: (0, Y.jsx)(`div`, {
              className: (0, Q.default)(`PmXhnAChGR0-`),
              children: (0, Y.jsx)(T, {
                children: (0, Y.jsx)(kw, { steamid: n, nYear: r }),
              }),
            }),
          }),
      ],
    }),
  });
}
function fE(e) {
  let { viewAsUser: t, setViewAsUser: n, themeYear: r, setThemeYear: i } = e,
    a = [
      { data: 2022, label: `2022` },
      { data: 2023, label: `2023` },
      { data: 2024, label: `2024` },
      { data: 2025, label: `2025` },
      { data: 2026, label: `2026` },
    ],
    o = (0, R.useCallback)(
      (e) => {
        i(e.data);
      },
      [i],
    ),
    s = Ea(),
    { bAllowDevToggles: c } = Dh();
  return !c || s
    ? null
    : (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(Vv, an),
        children: [
          (0, Y.jsx)(`div`, {
            children: `Debug Only: Toggle First Person View`,
          }),
          (0, Y.jsx)(Fl, { onChange: n, checked: t }),
          (0, Y.jsx)(`div`, {
            children: `Debug Only: Change to view the contents in the css style of a different year`,
          }),
          (0, Y.jsx)(Ja, { rgOptions: a, selectedOption: r, onChange: o }),
        ],
      });
}
function pE(e) {
  let { message: t } = e;
  return (0, Y.jsxs)(`div`, {
    className: Hv,
    children: [
      (0, Y.jsx)(`div`, { className: Wv }),
      (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(D_, Kv),
        children: [
          (0, Y.jsx)(`div`, { className: z_, children: t }),
          (0, Y.jsx)(`div`, {}),
        ],
      }),
    ],
  });
}
function mE(e) {
  let { userYearInReview: t } = e,
    n = K();
  if (!w.is_support && w.accountid != t.GetAccountID()) return null;
  let r = t.GetYear();
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(X, Jv),
    children: (0, Y.jsx)(`div`, {
      className: z_,
      children: L.LocalizeReact(
        `#YIR_Conclusion`,
        (0, Y.jsx)(`span`, {
          className: (0, Q.default)(void 0, n.ConclusionName),
          children: e.playerName,
        }),
        r,
      ),
    }),
  });
}
function hE(e) {
  let { year: t } = e;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(void 0, Xv),
    children: [
      (0, Y.jsx)(`div`, {
        className: z_,
        children: L.Localize(`#YIR_FAQ_Title`),
      }),
      (0, Y.jsxs)(`div`, {
        className: Yv,
        children: [
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: L.Localize(`#YIR_FAQ_Dates_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: L.Localize(`#YIR_FAQ_Dates_A`, t),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: L.Localize(`#YIR_FAQ_Offline_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: L.Localize(`#YIR_FAQ_Offline_A`),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: L.Localize(`#YIR_FAQ_Types_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: L.Localize(`#YIR_FAQ_Types_A`),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: L.Localize(`#YIR_FAQ_Share_Q`),
              }),
              (0, Y.jsxs)(`div`, {
                className: $v,
                children: [
                  L.Localize(`#YIR_FAQ_Share_A`),
                  (0, Y.jsxs)(`ol`, {
                    children: [
                      (0, Y.jsx)(`li`, {
                        children: L.Localize(`#YIR_FAQ_Share_A_b1`),
                      }),
                      (0, Y.jsx)(`li`, {
                        children: L.Localize(`#YIR_FAQ_Share_A_b2`),
                      }),
                      (0, Y.jsx)(`li`, {
                        children: L.Localize(`#YIR_FAQ_Share_A_b3`),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: L.Localize(`#YIR_FAQ_ShareFamily_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: L.Localize(`#YIR_FAQ_ShareFamily_A`),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: L.Localize(`#YIR_FAQ_Controller_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: L.Localize(`#YIR_FAQ_Controller_A1`),
              }),
              (0, Y.jsx)(`br`, {}),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: L.Localize(`#YIR_FAQ_Controller_A2`),
              }),
            ],
          }),
          t == 2022
            ? (0, Y.jsxs)(`div`, {
                className: Zv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: Qv,
                    children: L.Localize(`#YIR_FAQ_PrivateApps_Q`),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: $v,
                    children: L.Localize(`#YIR_FAQ_PrivateApps_A`, t),
                  }),
                ],
              })
            : (0, Y.jsxs)(`div`, {
                className: Zv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: Qv,
                    children: L.Localize(`#YIR_FAQ_PrivateApps_v2_Q`),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: $v,
                    children: L.Localize(`#YIR_FAQ_PrivateApps_v2_A`, t),
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
var gE = { Home: (e, t) => `${Ca.YearInReview(e, t)}` };
function _E(e) {
  return (0, Y.jsx)(bc, {
    domain: `store.steampowered.com`,
    controller: `yearinreview`,
    children: (0, Y.jsx)(i, {
      children: (0, Y.jsx)(n, {
        path: `${gE.Home(`:steamId?`, `:year?`)}`,
        render: (e) =>
          (0, Y.jsx)(bc, {
            method: `yearinreview`,
            children: (0, Y.jsx)(T, {
              children: (0, Y.jsx)(vE, {
                steamId: e.match.params.steamId,
                year: e.match.params.year,
              }),
            }),
          }),
      }),
    }),
  });
}
function vE(e) {
  let { steamId: t, year: n } = e,
    r = c(),
    i = R.useMemo(() => yE(t, n), [t, n]);
  return (R.useMemo(() => bE(r, i), [r, i]), (0, Y.jsx)(aE, { pageData: i }));
}
function yE(e, t) {
  let n = e == `my` ? w.steamid : e || ``,
    r = parseInt(t ?? ``),
    i = n ? new wa(n).GetAccountID() : 0,
    a =
      w.is_support &&
      !!qo(`localization_advanced_access`, `application_config`);
  return {
    steamid: n,
    nYear: r,
    eResult: Number.parseInt(qo(`yearinreview_eresults`, `application_config`)),
    rgOtherYears:
      qo(`yearinreview_otheryears_${i}_${r}`, `application_config`) ?? [],
    bLocalizationAdvancedAccess: a,
    bAllowDevToggles: a,
  };
}
function bE(e, t) {
  let { steamid: n, nYear: r } = t;
  if (!n || !r) return;
  let i = new wa(n),
    a = eh(i.ConvertTo64BitString(), r);
  if (e.getQueryData(a)) return;
  let o = qo(`yearinreview_${i.GetAccountID()}_${r}`, `application_config`);
  xE(o) &&
    e.setQueryData(
      a,
      $m(1, {
        stats: o,
        percentiles: qo(`yearinreview_${r}_percentiles`, `application_config`),
        distribution: qo(
          `yearinreview_${r}_distribution`,
          `application_config`,
        ),
        previous_year_summary: qo(
          `yearinreview_${r}_previous_year_summary`,
          `application_config`,
        ),
      }),
    );
}
function xE(e) {
  let t = e;
  return (
    !!t &&
    typeof t == `object` &&
    !!t.account_id &&
    typeof t.account_id == `number` &&
    !!t.playtime_stats &&
    typeof t.playtime_stats == `object`
  );
}
export { gE as YearInReviewRoutes, _E as default };
