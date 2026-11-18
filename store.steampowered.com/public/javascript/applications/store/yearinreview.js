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
  Bn as y,
  Br as b,
  Cn as ee,
  Cr as te,
  Dn as ne,
  Do as re,
  Dr as ie,
  En as ae,
  Er as x,
  Fn as oe,
  Fr as se,
  Gn as ce,
  Gr as le,
  Hn as ue,
  Hr as de,
  In as fe,
  Ir as S,
  Jn as pe,
  Jr as me,
  Kn as he,
  Kr as ge,
  Ln as _e,
  Lr as ve,
  Mn as ye,
  Mr as be,
  Nn as xe,
  Nr as Se,
  On as Ce,
  Or as we,
  Pn as Te,
  Pr as C,
  Qn as Ee,
  Qr as De,
  Rn as Oe,
  Rr as ke,
  Sn as Ae,
  Sr as je,
  Tn as Me,
  Tr as Ne,
  Un as Pe,
  Ur as Fe,
  Ut as Ie,
  Vn as Le,
  Vr as Re,
  Wn as ze,
  Wr as Be,
  Xn as Ve,
  Xr as He,
  Yn as Ue,
  Yr as We,
  Zn as Ge,
  Zr as Ke,
  _n as qe,
  _r as Je,
  an as Ye,
  ar as Xe,
  bn as Ze,
  bo as Qe,
  br as $e,
  cn as et,
  cr as tt,
  dn as nt,
  dr as rt,
  ei as it,
  en as at,
  er as ot,
  fn as st,
  fr as ct,
  gi as lt,
  gn as ut,
  gr as dt,
  hn as ft,
  hr as pt,
  in as mt,
  ir as ht,
  jn as gt,
  jr as _t,
  kn as vt,
  kr as yt,
  ln as bt,
  lr as xt,
  mn as St,
  mr as Ct,
  nn as wt,
  nr as Tt,
  on as Et,
  or as Dt,
  pn as Ot,
  pr as kt,
  qn as At,
  qr as jt,
  rn as Mt,
  rr as Nt,
  sn as Pt,
  sr as Ft,
  tn as It,
  tr as Lt,
  un as Rt,
  ur as zt,
  vi as Bt,
  vn as Vt,
  vr as Ht,
  wn as Ut,
  wr as Wt,
  xn as Gt,
  xr as Kt,
  yn as qt,
  yr as Jt,
  zn as Yt,
  zr as Xt,
} from "./chunk~6b8ddcaac8.js";
import { t as Zt } from "./chunk~4c13037b22.js";
import { a as Qt, i as $t } from "./chunk~5adf866415.js";
import { t as en } from "./chunk~684e72ad45.js";
import "./chunk~8681f5c764.js";
import { t as tn } from "./chunk~eefd71512b.js";
import { t as nn } from "./chunk~91ae5e1167.js";
import { M as rn } from "./chunk~2f8c67b4de.js";
import { n as an } from "./chunk~710e3cfd2f.js";
import { t as on } from "./chunk~a8b8151a67.js";
import { n as sn } from "./chunk~5e5f1b9ccf.js";
import {
  $_ as cn,
  $d as ln,
  $f as un,
  $g as dn,
  $h as fn,
  $i as pn,
  $m as mn,
  $p as hn,
  $u as gn,
  A_ as _n,
  Ad as vn,
  Af as yn,
  Ag as bn,
  Ah as xn,
  Am as Sn,
  Ap as Cn,
  Av as wn,
  B_ as Tn,
  Ba as En,
  Bd as Dn,
  Bf as On,
  Bg as kn,
  Bh as An,
  Bm as jn,
  Bp as Mn,
  C_ as Nn,
  Cf as Pn,
  Cg as Fn,
  Ch as In,
  Cm as Ln,
  Cp as Rn,
  D_ as zn,
  Db as w,
  Dc as Bn,
  Dd as Vn,
  Df as Hn,
  Dg as Un,
  Dh as Wn,
  Dm as Gn,
  Dp as Kn,
  E_ as qn,
  Eb as Jn,
  Ef as Yn,
  Eg as Xn,
  Eh as Zn,
  Em as Qn,
  Ep as $n,
  F_ as er,
  Fd as tr,
  Ff as nr,
  Fg as rr,
  Fh as ir,
  Fm as ar,
  Fn as or,
  Fp as sr,
  G_ as cr,
  Gd as lr,
  Gf as ur,
  Gg as dr,
  Gh as fr,
  Gm as pr,
  Gp as mr,
  H_ as hr,
  Hd as gr,
  Hf as _r,
  Hg as vr,
  Hh as yr,
  Hm as br,
  Hp as xr,
  Hr as Sr,
  I_ as Cr,
  Id as wr,
  Ig as Tr,
  Ih as Er,
  Im as Dr,
  Ip as Or,
  J_ as kr,
  Jd as Ar,
  Jf as jr,
  Jg as Mr,
  Jh as Nr,
  Jm as Pr,
  Jp as Fr,
  Ju as Ir,
  K_ as Lr,
  Kd as Rr,
  Kf as zr,
  Kg as Br,
  Kh as Vr,
  Ki as Hr,
  Km as Ur,
  Kp as Wr,
  L_ as Gr,
  Ld as Kr,
  Lf as qr,
  Lg as Jr,
  Lh as Yr,
  Li as Xr,
  Lm as Zr,
  Lp as Qr,
  M_ as $r,
  Md as ei,
  Mf as ti,
  Mg as ni,
  Mh as ri,
  Mm as ii,
  Mp as ai,
  N_ as oi,
  Nd as si,
  Nf as ci,
  Ng as li,
  Nh as ui,
  Nm as di,
  Np as fi,
  O_ as pi,
  Ob as mi,
  Od as hi,
  Of as gi,
  Og as _i,
  Om as vi,
  Op as yi,
  P_ as bi,
  Pd as xi,
  Pf as Si,
  Pg as Ci,
  Ph as wi,
  Pm as Ti,
  Pp as Ei,
  Pv as Di,
  Q_ as Oi,
  Qd as ki,
  Qf as Ai,
  Qg as ji,
  Qh as Mi,
  Qm as Ni,
  Qp as Pi,
  Qu as Fi,
  Qx as Ii,
  R_ as Li,
  Rd as Ri,
  Rf as zi,
  Rg as Bi,
  Rh as Vi,
  Rm as Hi,
  Rp as Ui,
  S_ as Wi,
  Sf as Gi,
  Sg as Ki,
  Sh as qi,
  Sm as Ji,
  Sp as Yi,
  Sv as Xi,
  T_ as Zi,
  Tc as Qi,
  Tf as $i,
  Tg as ea,
  Th as ta,
  Tm as na,
  Tp as ra,
  U_ as ia,
  Ub as aa,
  Ud as oa,
  Uf as sa,
  Ug as ca,
  Uh as la,
  Up as ua,
  Us as da,
  Uv as fa,
  V_ as pa,
  Vd as ma,
  Vf as ha,
  Vg as ga,
  Vh as _a,
  Vi as va,
  Vm as ya,
  Vp as ba,
  Vr as xa,
  Vu as Sa,
  Vy as Ca,
  W_ as wa,
  Wb as Ta,
  Wd as Ea,
  Wf as Da,
  Wg as Oa,
  Wh as ka,
  Wm as Aa,
  Wp as ja,
  Wr as Ma,
  X_ as Na,
  Xb as T,
  Xc as E,
  Xd as Pa,
  Xf as Fa,
  Xg as Ia,
  Xh as La,
  Xi as Ra,
  Xm as za,
  Xp as Ba,
  Y_ as Va,
  Yd as Ha,
  Yf as Ua,
  Yg as Wa,
  Yh as Ga,
  Ym as Ka,
  Yn as qa,
  Yp as Ja,
  Yu as Ya,
  Z_ as Xa,
  Zd as Za,
  Zf as Qa,
  Zg as $a,
  Zh as eo,
  Zi as D,
  Zm as to,
  Zp as no,
  __ as ro,
  _d as io,
  _f as ao,
  _g as oo,
  _h as so,
  _l as co,
  _m as lo,
  _p as uo,
  aS as O,
  a_ as fo,
  af as po,
  ag as mo,
  ah as ho,
  am as go,
  ap as _o,
  b_ as vo,
  bf as yo,
  bg as bo,
  bh as xo,
  bm as So,
  bp as Co,
  bt as wo,
  bx as To,
  c_ as Eo,
  cf as Do,
  cg as Oo,
  ch as ko,
  cm as Ao,
  cp as jo,
  d_ as Mo,
  df as No,
  dg as Po,
  dh as Fo,
  dm as Io,
  dp as Lo,
  ds as Ro,
  eS as k,
  e_ as zo,
  ef as Bo,
  eg as Vo,
  eh as Ho,
  em as Uo,
  ep as Wo,
  ev as Go,
  ex as Ko,
  f_ as qo,
  ff as Jo,
  fg as Yo,
  fh as Xo,
  fm as Zo,
  fp as Qo,
  g_ as $o,
  gf as es,
  gg as ts,
  gh as ns,
  gm as rs,
  gp as is,
  gv as as,
  h_ as os,
  hf as ss,
  hg as cs,
  hh as ls,
  hm as us,
  hp as ds,
  ht as fs,
  iS as A,
  i_ as ps,
  if as ms,
  ig as hs,
  ih as gs,
  il as _s,
  im as vs,
  ip as ys,
  iv as bs,
  j_ as xs,
  jc as j,
  jd as Ss,
  jf as Cs,
  jh as ws,
  jm as Ts,
  jp as Es,
  jx as Ds,
  k_ as Os,
  kd as ks,
  kf as As,
  kg as js,
  kh as Ms,
  km as Ns,
  kn as Ps,
  ko as Fs,
  kp as Is,
  l_ as Ls,
  lc as Rs,
  lf as zs,
  lg as Bs,
  lh as Vs,
  lm as Hs,
  lp as Us,
  ly as Ws,
  mS as Gs,
  m_ as Ks,
  mf as qs,
  mg as Js,
  mh as Ys,
  mm as Xs,
  mp as Zs,
  mv as Qs,
  nS as M,
  n_ as $s,
  nf as ec,
  ng as tc,
  nh as nc,
  nm as rc,
  np as ic,
  ns as ac,
  nv as oc,
  oS as N,
  o_ as sc,
  og as cc,
  oh as lc,
  ol as uc,
  om as dc,
  op as fc,
  p_ as pc,
  pf as mc,
  pg as hc,
  ph as gc,
  pm as _c,
  pp as vc,
  pt as yc,
  q_ as bc,
  qb as P,
  qd as xc,
  qf as Sc,
  qg as Cc,
  qh as wc,
  qm as Tc,
  qp as Ec,
  rS as F,
  r_ as Dc,
  rf as Oc,
  rg as kc,
  rh as Ac,
  rm as jc,
  rp as Mc,
  rv as Nc,
  rx as Pc,
  sS as I,
  s_ as Fc,
  sf as Ic,
  sg as Lc,
  sh as Rc,
  sm as zc,
  so as Bc,
  sp as Vc,
  tS as L,
  t_ as Hc,
  tf as Uc,
  tg as Wc,
  th as Gc,
  tm as Kc,
  tp as qc,
  tv as Jc,
  u_ as Yc,
  uf as Xc,
  ug as Zc,
  uh as Qc,
  um as $c,
  up as el,
  ut as tl,
  uv as nl,
  v_ as rl,
  vc as il,
  vd as al,
  vg as ol,
  vh as sl,
  vl as cl,
  vp as ll,
  vt as ul,
  w_ as dl,
  wc as fl,
  wd as pl,
  wf as ml,
  wg as hl,
  wh as gl,
  wm as _l,
  wp as vl,
  x_ as yl,
  xc as bl,
  xf as xl,
  xg as Sl,
  xh as Cl,
  xm as wl,
  xp as Tl,
  yS as El,
  y_ as Dl,
  yc as Ol,
  yf as kl,
  yg as Al,
  yh as jl,
  ym as Ml,
  yp as Nl,
  yr as Pl,
  z_ as Fl,
  zd as Il,
  zf as Ll,
  zg as Rl,
  zh as zl,
  zm as Bl,
  zp as Vl,
  zr as Hl,
} from "./main.js";
import { y as Ul } from "./chunk~ec93a260ba.js";
import { t as Wl } from "./chunk~65da1d3223.js";
import { t as Gl } from "./chunk~d7992cfd18.js";
import { i as Kl, n as ql } from "./chunk~4c65b375ad.js";
import { r as Jl, t as Yl } from "./chunk~f6ebb80c8b.js";
import { n as R, r as Xl, t as Zl } from "./chunk~c0f9f0eb46.js";
import { t as Ql } from "./chunk~10ec219681.js";
var z = e(a());
function $l() {
  return (
    ($l = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $l.apply(null, arguments)
  );
}
function eu(e, t) {
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
function tu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? eu(Object(n), !0).forEach(function (t) {
          nu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : eu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function nu(e, t, n) {
  return (
    (t = ru(t)) in e
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
function ru(e) {
  var t = iu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function iu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var au = 32,
  ou = class extends z.PureComponent {
    renderIcon(e, t) {
      var { inactiveColor: n } = this.props,
        r = au / 2,
        i = au / 6,
        a = au / 3,
        o = e.inactive ? n : e.color,
        s = t ?? e.type;
      if (s === `none`) return null;
      if (s === `plainline`)
        return z.createElement(`line`, {
          strokeWidth: 4,
          fill: `none`,
          stroke: o,
          strokeDasharray: e.payload.strokeDasharray,
          x1: 0,
          y1: r,
          x2: au,
          y2: r,
          className: `recharts-legend-icon`,
        });
      if (s === `line`)
        return z.createElement(`path`, {
          strokeWidth: 4,
          fill: `none`,
          stroke: o,
          d: `M0,${r}h${a}
            A${i},${i},0,1,1,${2 * a},${r}
            H${au}M${2 * a},${r}
            A${i},${i},0,1,1,${a},${r}`,
          className: `recharts-legend-icon`,
        });
      if (s === `rect`)
        return z.createElement(`path`, {
          stroke: `none`,
          fill: o,
          d: `M0,${au / 8}h${au}v${(au * 3) / 4}h${-au}z`,
          className: `recharts-legend-icon`,
        });
      if (z.isValidElement(e.legendIcon)) {
        var c = tu({}, e);
        return (delete c.legendIcon, z.cloneElement(e.legendIcon, c));
      }
      return z.createElement(b, {
        fill: o,
        cx: r,
        cy: r,
        size: au,
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
        o = { x: 0, y: 0, width: au, height: au },
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
          u = it({
            "recharts-legend-item": !0,
            [`legend-item-${n}`]: !0,
            inactive: e.inactive,
          });
        if (e.type === `none`) return null;
        var d = e.inactive ? i : e.color,
          f = l ? l(e.value, e, n) : e.value;
        return z.createElement(
          `li`,
          $l(
            { className: u, style: s, key: `legend-item-${n}` },
            Xt(this.props, e, n),
          ),
          z.createElement(
            We,
            {
              width: t,
              height: t,
              viewBox: o,
              style: c,
              "aria-label": `${f} legend icon`,
            },
            this.renderIcon(e, a),
          ),
          z.createElement(
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
      return z.createElement(
        `ul`,
        { className: `recharts-default-legend`, style: r },
        this.renderItems(),
      );
    }
  };
(nu(ou, `displayName`, `Legend`),
  nu(ou, `defaultProps`, {
    align: `center`,
    iconSize: 14,
    inactiveColor: `#ccc`,
    layout: `horizontal`,
    verticalAlign: `middle`,
  }));
function su() {
  return S(Se);
}
var cu = e(r()),
  lu = [`contextPayload`];
function uu() {
  return (
    (uu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    uu.apply(null, arguments)
  );
}
function du(e, t) {
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
function fu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? du(Object(n), !0).forEach(function (t) {
          pu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : du(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function pu(e, t, n) {
  return (
    (t = mu(t)) in e
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
function mu(e) {
  var t = hu(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function hu(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function gu(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = _u(e, t);
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
function _u(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function vu(e) {
  return e.value;
}
function yu(e) {
  var { contextPayload: t } = e,
    n = gu(e, lu),
    r = ve(t, e.payloadUniqBy, vu),
    i = fu(fu({}, n), {}, { payload: r });
  return z.isValidElement(e.content)
    ? z.cloneElement(e.content, i)
    : typeof e.content == `function`
      ? z.createElement(e.content, i)
      : z.createElement(ou, i);
}
function bu(e, t, n, r, i, a) {
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
    fu(fu({}, l), u)
  );
}
function xu(e) {
  var t = se();
  return (
    (0, z.useEffect)(() => {
      t(Ct(e));
    }, [t, e]),
    null
  );
}
function Su(e) {
  var t = se();
  return (
    (0, z.useEffect)(
      () => (
        t(pt(e)),
        () => {
          t(pt({ width: 0, height: 0 }));
        }
      ),
      [t, e],
    ),
    null
  );
}
function Cu(e) {
  var t = su(),
    n = jt(),
    r = Jt(),
    { width: i, height: a, wrapperStyle: o, portal: s } = e,
    [c, l] = be([t]),
    u = Ht(),
    d = Je();
  if (u == null || d == null) return null;
  var f = u - (r.left || 0) - (r.right || 0),
    p = wu.getWidthOrHeight(e.layout, a, i, f),
    m = s
      ? o
      : fu(
          fu(
            {
              position: `absolute`,
              width: p?.width || i || `auto`,
              height: p?.height || a || `auto`,
            },
            bu(o, e, r, u, d, c),
          ),
          o,
        ),
    h = s ?? n;
  if (h == null) return null;
  var g = z.createElement(
    `div`,
    { className: `recharts-legend-wrapper`, style: m, ref: l },
    z.createElement(xu, {
      layout: e.layout,
      align: e.align,
      verticalAlign: e.verticalAlign,
      itemSorter: e.itemSorter,
    }),
    z.createElement(Su, { width: c.width, height: c.height }),
    z.createElement(
      yu,
      uu({}, e, p, {
        margin: r,
        chartWidth: u,
        chartHeight: d,
        contextPayload: t,
      }),
    ),
  );
  return (0, cu.createPortal)(g, h);
}
var wu = class extends z.PureComponent {
  static getWidthOrHeight(e, t, n, r) {
    return e === `vertical` && Be(t)
      ? { height: t }
      : e === `horizontal`
        ? { width: n || r }
        : null;
  }
  render() {
    return z.createElement(Cu, this.props);
  }
};
(pu(wu, `displayName`, `Legend`),
  pu(wu, `defaultProps`, {
    align: `center`,
    iconSize: 14,
    itemSorter: `value`,
    layout: `horizontal`,
    verticalAlign: `bottom`,
  }));
var Tu = [`points`, `className`, `baseLinePoints`, `connectNulls`];
function Eu() {
  return (
    (Eu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Eu.apply(null, arguments)
  );
}
function Du(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Ou(e, t);
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
function Ou(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var ku = (e) => e && e.x === +e.x && e.y === +e.y,
  Au = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = [[]];
    return (
      e.forEach((e) => {
        ku(e)
          ? t[t.length - 1].push(e)
          : t[t.length - 1].length > 0 && t.push([]);
      }),
      ku(e[0]) && t[t.length - 1].push(e[0]),
      t[t.length - 1].length <= 0 && (t = t.slice(0, -1)),
      t
    );
  },
  ju = (e, t) => {
    var n = Au(e);
    t && (n = [n.reduce((e, t) => [...e, ...t], [])]);
    var r = n
      .map((e) =>
        e.reduce((e, t, n) => `${e}${n === 0 ? `M` : `L`}${t.x},${t.y}`, ``),
      )
      .join(``);
    return n.length === 1 ? `${r}Z` : r;
  },
  Mu = (e, t, n) => {
    var r = ju(e, n);
    return `${r.slice(-1) === `Z` ? r.slice(0, -1) : r}L${ju(Array.from(t).reverse(), n).slice(1)}`;
  },
  Nu = (e) => {
    var { points: t, className: n, baseLinePoints: r, connectNulls: i } = e,
      a = Du(e, Tu);
    if (!t || !t.length) return null;
    var o = it(`recharts-polygon`, n);
    if (r && r.length) {
      var s = a.stroke && a.stroke !== `none`,
        c = Mu(t, r, i);
      return z.createElement(
        `g`,
        { className: o },
        z.createElement(
          `path`,
          Eu({}, He(a), {
            fill: c.slice(-1) === `Z` ? a.fill : `none`,
            stroke: `none`,
            d: c,
          }),
        ),
        s
          ? z.createElement(
              `path`,
              Eu({}, He(a), { fill: `none`, d: ju(t, i) }),
            )
          : null,
        s
          ? z.createElement(
              `path`,
              Eu({}, He(a), { fill: `none`, d: ju(r, i) }),
            )
          : null,
      );
    }
    var l = ju(t, i);
    return z.createElement(
      `path`,
      Eu({}, He(a), {
        fill: l.slice(-1) === `Z` ? a.fill : `none`,
        className: o,
        d: l,
      }),
    );
  };
function Pu() {
  return (
    (Pu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pu.apply(null, arguments)
  );
}
var Fu = (e) => {
    var { cx: t, cy: n, r, className: i } = e,
      a = it(`recharts-dot`, i);
    return t === +t && n === +n && r === +r
      ? z.createElement(
          `circle`,
          Pu({}, De(e), ke(e), { className: a, cx: t, cy: n, r }),
        )
      : null;
  },
  Iu = (e) => e.graphicalItems.polarItems,
  Lu = C([ot, m], ce),
  Ru = C([Iu, pe, Lu], Le),
  zu = C([Ru], y),
  Bu = C([zu, tt], _e),
  Vu = C([Bu, pe, Ru], ye);
C([Bu, pe, Ru], (e, t, n) =>
  n.length > 0
    ? e
        .flatMap((e) =>
          n.flatMap((n) => ({
            value: x(e, t.dataKey ?? n.dataKey),
            errorDomain: [],
          })),
        )
        .filter(Boolean)
    : t?.dataKey == null
      ? e.map((e) => ({ value: e, errorDomain: [] }))
      : e.map((e) => ({ value: x(e, t.dataKey), errorDomain: [] })),
);
var Hu = () => void 0,
  Uu = C([Bu, pe, Ru, he, ot], Oe),
  Wu = C([pe, Ue, Ve, Hu, Uu, Hu, dt, ot], Pe),
  Gu = C([pe, dt, Bu, Vu, Ft, ot, Wu], xe),
  Ku = C([Gu, pe, Ee], ue),
  qu = C([pe, Gu, Ku, ot], Te),
  Ju = (e, t, n) => {
    switch (t) {
      case `angleAxis`:
        return Lt(e, n);
      case `radiusAxis`:
        return ht(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Yu = (e, t, n) => {
    switch (t) {
      case `angleAxis`:
        return Tt(e, n);
      case `radiusAxis`:
        return Xe(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Xu = C([Ju, Ee, qu, Yu], ze),
  Zu = C([dt, Vu, At, ot], fe),
  Qu = C([dt, Ju, Ee, Xu, Ku, Yu, Ge, Zu, ot], oe);
C([dt, Ju, Xu, Yu, Ge, Zu, ot], Yt);
var $u = C([(e, t) => Qu(e, `angleAxis`, t, !1)], (e) => {
    if (e) return e.map((e) => e.coordinate);
  }),
  ed = C([(e, t) => Qu(e, `radiusAxis`, t, !1)], (e) => {
    if (e) return e.map((e) => e.coordinate);
  }),
  td = [
    `gridType`,
    `radialLines`,
    `angleAxisId`,
    `radiusAxisId`,
    `cx`,
    `cy`,
    `innerRadius`,
    `outerRadius`,
  ];
function nd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = rd(e, t);
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
function rd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function id() {
  return (
    (id = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    id.apply(null, arguments)
  );
}
function ad(e, t) {
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
function od(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? ad(Object(n), !0).forEach(function (t) {
          sd(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ad(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function sd(e, t, n) {
  return (
    (t = cd(t)) in e
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
function cd(e) {
  var t = ld(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function ld(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ud = (e, t, n, r) => {
    var i = ``;
    return (
      r.forEach((r, a) => {
        var o = _t(t, n, e, r);
        i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
      }),
      (i += `Z`),
      i
    );
  },
  dd = (e) => {
    var {
      cx: t,
      cy: n,
      innerRadius: r,
      outerRadius: i,
      polarAngles: a,
      radialLines: o,
    } = e;
    if (!a || !a.length || !o) return null;
    var s = od({ stroke: `#ccc` }, De(e));
    return z.createElement(
      `g`,
      { className: `recharts-polar-grid-angle` },
      a.map((e) => {
        var a = _t(t, n, r, e),
          o = _t(t, n, i, e);
        return z.createElement(
          `line`,
          id({ key: `line-${e}` }, s, { x1: a.x, y1: a.y, x2: o.x, y2: o.y }),
        );
      }),
    );
  },
  fd = (e) => {
    var { cx: t, cy: n, radius: r } = e,
      i = od({ stroke: `#ccc`, fill: `none` }, De(e));
    return z.createElement(
      `circle`,
      id({}, i, {
        className: it(`recharts-polar-grid-concentric-circle`, e.className),
        cx: t,
        cy: n,
        r,
      }),
    );
  },
  pd = (e) => {
    var { radius: t } = e,
      n = od({ stroke: `#ccc`, fill: `none` }, De(e));
    return z.createElement(
      `path`,
      id({}, n, {
        className: it(`recharts-polar-grid-concentric-polygon`, e.className),
        d: ud(t, e.cx, e.cy, e.polarAngles),
      }),
    );
  },
  md = (e) => {
    var { polarRadius: t, gridType: n } = e;
    if (!t || !t.length) return null;
    var r = Math.max(...t),
      i = e.fill && e.fill !== `none`;
    return z.createElement(
      `g`,
      { className: `recharts-polar-grid-concentric` },
      i && n === `circle` && z.createElement(fd, id({}, e, { radius: r })),
      i && n !== `circle` && z.createElement(pd, id({}, e, { radius: r })),
      t.map((t, r) => {
        var i = r;
        return n === `circle`
          ? z.createElement(fd, id({ key: i }, e, { fill: `none`, radius: t }))
          : z.createElement(pd, id({ key: i }, e, { fill: `none`, radius: t }));
      }),
    );
  },
  hd = (e) => {
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
      l = nd(e, td),
      u = S(Nt),
      d = od(
        {
          cx: u?.cx ?? a ?? 0,
          cy: u?.cy ?? o ?? 0,
          innerRadius: u?.innerRadius ?? s ?? 0,
          outerRadius: u?.outerRadius ?? c ?? 0,
        },
        l,
      ),
      { polarAngles: f, polarRadius: p, outerRadius: m } = d,
      h = S((e) => $u(e, r)),
      g = S((e) => ed(e, i)),
      _ = Array.isArray(f) ? f : h,
      v = Array.isArray(p) ? p : g;
    return m <= 0 || _ == null || v == null
      ? null
      : z.createElement(
          `g`,
          { className: `recharts-polar-grid` },
          z.createElement(
            md,
            id({ gridType: t, radialLines: n }, d, {
              polarAngles: _,
              polarRadius: v,
            }),
          ),
          z.createElement(
            dd,
            id({ gridType: t, radialLines: n }, d, {
              polarAngles: _,
              polarRadius: v,
            }),
          ),
        );
  };
hd.displayName = `PolarGrid`;
var gd = [`children`];
function _d() {
  return (
    (_d = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _d.apply(null, arguments)
  );
}
function vd(e, t) {
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
function yd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? vd(Object(n), !0).forEach(function (t) {
          bd(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : vd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function bd(e, t, n) {
  return (
    (t = xd(t)) in e
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
function xd(e) {
  var t = Sd(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Sd(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Cd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = wd(e, t);
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
function wd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Td = 1e-5,
  Ed = Math.cos(we(45)),
  Dd = `angleAxis`;
function Od(e) {
  var t = se(),
    n = (0, z.useMemo)(() => {
      var { children: t } = e;
      return Cd(e, gd);
    }, [e]),
    r = n === S((e) => Lt(e, n.id));
  return (
    (0, z.useEffect)(
      () => (
        t(Ze(n)),
        () => {
          t(Gt(n));
        }
      ),
      [t, n],
    ),
    r ? e.children : null
  );
}
var kd = (e, t) => {
    var { cx: n, cy: r, radius: i, orientation: a, tickSize: o } = t,
      s = o || 8,
      c = _t(n, r, i, e.coordinate),
      l = _t(n, r, i + (a === `inner` ? -1 : 1) * s, e.coordinate);
    return { x1: c.x, y1: c.y, x2: l.x, y2: l.y };
  },
  Ad = (e, t) => {
    var n = Math.cos(we(-e.coordinate));
    return n > Td
      ? t === `outer`
        ? `start`
        : `end`
      : n < -Td
        ? t === `outer`
          ? `end`
          : `start`
        : `middle`;
  },
  jd = (e) => {
    var t = Math.cos(we(-e.coordinate)),
      n = Math.sin(we(-e.coordinate));
    return Math.abs(t) <= Ed ? (n > 0 ? `start` : `end`) : `middle`;
  },
  Md = (e) => {
    var { cx: t, cy: n, radius: r, axisLineType: i, axisLine: a, ticks: o } = e;
    if (!a) return null;
    var s = yd(yd({}, De(e)), {}, { fill: `none` }, De(a));
    if (i === `circle`)
      return z.createElement(
        Fu,
        _d({ className: `recharts-polar-angle-axis-line` }, s, {
          cx: t,
          cy: n,
          r,
        }),
      );
    var c = o.map((e) => _t(t, n, r, e.coordinate));
    return z.createElement(
      Nu,
      _d({ className: `recharts-polar-angle-axis-line` }, s, { points: c }),
    );
  },
  Nd = (e) => {
    var { tick: t, tickProps: n, value: r } = e;
    return t
      ? z.isValidElement(t)
        ? z.cloneElement(t, n)
        : typeof t == `function`
          ? t(n)
          : z.createElement(
              ae,
              _d({}, n, { className: `recharts-polar-angle-axis-tick-value` }),
              r,
            )
      : null;
  },
  Pd = (e) => {
    var { tick: t, tickLine: n, tickFormatter: r, stroke: i, ticks: a } = e,
      o = De(e),
      s = h(t),
      c = yd(yd({}, o), {}, { fill: `none` }, De(n)),
      l = a.map((a, l) => {
        var u = kd(a, e),
          d = Ad(a, e.orientation),
          f = jd(a),
          p = yd(
            yd(
              yd({}, o),
              {},
              { textAnchor: d, verticalAnchor: f, stroke: `none`, fill: i },
              s,
            ),
            {},
            { index: l, payload: a, x: u.x2, y: u.y2 },
          );
        return z.createElement(
          me,
          _d(
            {
              className: it(`recharts-polar-angle-axis-tick`, v(t)),
              key: `tick-${a.coordinate}`,
            },
            Xt(e, a, l),
          ),
          n &&
            z.createElement(
              `line`,
              _d({ className: `recharts-polar-angle-axis-tick-line` }, c, u),
            ),
          z.createElement(Nd, {
            tick: t,
            tickProps: p,
            value: r ? r(a.value, l) : a.value,
          }),
        );
      });
    return z.createElement(
      me,
      { className: `recharts-polar-angle-axis-ticks` },
      l,
    );
  },
  Fd = (e) => {
    var { angleAxisId: t } = e,
      n = S(Nt),
      r = S((e) => Xu(e, `angleAxis`, t)),
      i = $e(),
      a = S((e) => Qu(e, `angleAxis`, t, i));
    if (n == null || !a || !a.length) return null;
    var o = yd(
      yd(yd({}, e), {}, { scale: r }, n),
      {},
      { radius: n.outerRadius },
    );
    return z.createElement(
      me,
      { className: it(`recharts-polar-angle-axis`, Dd, o.className) },
      z.createElement(Md, _d({}, o, { ticks: a })),
      z.createElement(Pd, _d({}, o, { ticks: a })),
    );
  },
  Id = class extends z.PureComponent {
    render() {
      return this.props.radius <= 0
        ? null
        : z.createElement(
            Od,
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
            z.createElement(Fd, this.props),
          );
    }
  };
(bd(Id, `displayName`, `PolarAngleAxis`),
  bd(Id, `axisType`, Dd),
  bd(Id, `defaultProps`, Dt));
function Ld(e, t) {
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
function Rd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ld(Object(n), !0).forEach(function (t) {
          zd(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ld(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function zd(e, t, n) {
  return (
    (t = Bd(t)) in e
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
function Bd(e) {
  var t = Vd(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Vd(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Hd = C([Iu, (e, t) => t], (e, t) =>
    e.filter((e) => e.type === `pie`).find((e) => e.id === t),
  ),
  Ud = [],
  Wd = (e, t, n) => (n?.length === 0 ? Ud : n),
  Gd = C([tt, Hd, Wd], (e, t, n) => {
    var { chartData: r } = e;
    if (t != null) {
      var i = t?.data != null && t.data.length > 0 ? t.data : r;
      if (
        ((i && i.length) ||
          n == null ||
          (i = n.map((e) => Rd(Rd({}, t.presentationProps), e.props))),
        i != null)
      )
        return i;
    }
  }),
  Kd = C([Gd, Hd, Wd], (e, t, n) => {
    if (e != null && t != null)
      return e.map((e, r) => {
        var i,
          a = x(e, t.nameKey, t.name),
          o =
            n != null && (i = n[r]) != null && (i = i.props) != null && i.fill
              ? n[r].props.fill
              : typeof e == `object` && e && `fill` in e
                ? e.fill
                : t.fill;
        return {
          value: Ne(a, t.dataKey),
          color: o,
          payload: e,
          type: t.legendType,
        };
      });
  }),
  qd = C([Gd, Hd, Wd, Kt], (e, t, n, r) => {
    if (t != null && e != null)
      return vf({ offset: r, pieSettings: t, displayedData: e, cells: n });
  }),
  Jd = e(ge()),
  Yd = [`onMouseEnter`, `onClick`, `onMouseLeave`],
  Xd = [`id`],
  Zd = [`id`];
function Qd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = $d(e, t);
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
function $d(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function ef(e, t) {
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
      ? ef(Object(n), !0).forEach(function (t) {
          tf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ef(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function tf(e, t, n) {
  return (
    (t = nf(t)) in e
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
function nf(e) {
  var t = rf(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function rf(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function af() {
  return (
    (af = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    af.apply(null, arguments)
  );
}
function of(e) {
  var t = (0, z.useMemo)(() => qt(e.children, Ce), [e.children]),
    n = S((n) => Kd(n, e.id, t));
  return n == null ? null : z.createElement(Ot, { legendPayload: n });
}
function sf(e) {
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
      name: Ne(s, t),
      hide: c,
      type: l,
      color: o,
      unit: ``,
    },
  };
}
var cf = (e, t) => (e > t ? `start` : e < t ? `end` : `middle`),
  lf = (e, t, n) => Re(typeof t == `function` ? t(e) : t, n, n * 0.8),
  uf = (e, t, n) => {
    var { top: r, left: i, width: a, height: o } = t,
      s = yt(a, o);
    return {
      cx: i + Re(e.cx, a, a / 2),
      cy: r + Re(e.cy, o, o / 2),
      innerRadius: Re(e.innerRadius, s, 0),
      outerRadius: lf(n, e.outerRadius, s),
      maxRadius: e.maxRadius || Math.sqrt(a * a + o * o) / 2,
    };
  },
  df = (e, t) => le(t - e) * Math.min(Math.abs(t - e), 360);
function ff(e) {
  return e &&
    typeof e == `object` &&
    `className` in e &&
    typeof e.className == `string`
    ? e.className
    : ``;
}
var pf = (e, t) => {
    if (z.isValidElement(e)) return z.cloneElement(e, t);
    if (typeof e == `function`) return e(t);
    var n = it(
      `recharts-pie-label-line`,
      typeof e == `boolean` ? `` : e.className,
    );
    return z.createElement(ct, af({}, t, { type: `linear`, className: n }));
  },
  mf = (e, t, n) => {
    if (z.isValidElement(e)) return z.cloneElement(e, t);
    var r = n;
    if (typeof e == `function` && ((r = e(t)), z.isValidElement(r))) return r;
    var i = it(`recharts-pie-label-text`, ff(e));
    return z.createElement(
      ae,
      af({}, t, { alignmentBaseline: `middle`, className: i }),
      r,
    );
  };
function hf(e) {
  var { sectors: t, props: n, showLabels: r } = e,
    { label: i, labelLine: a, dataKey: o } = n;
  if (!r || !i || !t) return null;
  var s = De(n),
    c = h(i),
    l = h(a),
    u =
      (typeof i == `object` &&
        `offsetRadius` in i &&
        typeof i.offsetRadius == `number` &&
        i.offsetRadius) ||
      20,
    d = t.map((e, t) => {
      var n = (e.startAngle + e.endAngle) / 2,
        r = _t(e.cx, e.cy, e.outerRadius + u, n),
        d = B(
          B(B(B({}, s), e), {}, { stroke: `none` }, c),
          {},
          { index: t, textAnchor: cf(r.x, e.cx) },
          r,
        ),
        f = B(
          B(B(B({}, s), e), {}, { fill: `none`, stroke: e.fill }, l),
          {},
          {
            index: t,
            points: [_t(e.cx, e.cy, e.outerRadius, n), r],
            key: `line`,
          },
        );
      return z.createElement(
        me,
        { key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}` },
        a && pf(a, f),
        mf(i, d, x(e, o)),
      );
    });
  return z.createElement(me, { className: `recharts-pie-labels` }, d);
}
function gf(e) {
  var { sectors: t, props: n, showLabels: r } = e,
    { label: i } = n;
  return typeof i == `object` && i && `position` in i
    ? z.createElement(ee, { label: i })
    : z.createElement(hf, { sectors: t, props: n, showLabels: r });
}
function _f(e) {
  var { sectors: t, activeShape: n, inactiveShape: r, allOtherPieProps: i } = e,
    a = S(gt),
    { onMouseEnter: o, onClick: s, onMouseLeave: c } = i,
    l = Qd(i, Yd),
    u = ut(o, i.dataKey),
    d = qe(c),
    f = ft(s, i.dataKey);
  return t == null || t.length === 0
    ? null
    : z.createElement(
        z.Fragment,
        null,
        t.map((e, o) => {
          if (e?.startAngle === 0 && e?.endAngle === 0 && t.length !== 1)
            return null;
          var s = n && String(o) === a,
            c = s ? n : a ? r : null,
            p = B(
              B({}, e),
              {},
              { stroke: e.stroke, tabIndex: -1, [te]: o, [je]: i.dataKey },
            );
          return z.createElement(
            me,
            af(
              {
                key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${o}`,
                tabIndex: -1,
                className: `recharts-pie-sector`,
              },
              Xt(l, e, o),
              {
                onMouseEnter: u(e, o),
                onMouseLeave: d(e, o),
                onClick: f(e, o),
              },
            ),
            z.createElement(
              Vt,
              af({ option: c, isActive: s, shapeType: `sector` }, p),
            ),
          );
        }),
      );
}
function vf(e) {
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
    f = df(o, s),
    p = Math.abs(f),
    m = n.length <= 1 ? 0 : (t.paddingAngle ?? 0),
    h = n.filter((e) => x(e, c, 0) !== 0).length,
    g = (p >= 360 ? h : h - 1) * m,
    _ = p - h * d - g,
    v = n.reduce((e, t) => {
      var n = x(t, c, 0);
      return e + (Be(n) ? n : 0);
    }, 0),
    y;
  if (v > 0) {
    var b;
    y = n.map((e, n) => {
      var s = x(e, c, 0),
        p = x(e, l, n),
        h = uf(t, i, e),
        g = (Be(s) ? s : 0) / v,
        y,
        ee = B(B({}, e), r && r[n] && r[n].props);
      y = n ? b.endAngle + le(f) * m * (s === 0 ? 0 : 1) : o;
      var te = y + le(f) * ((s === 0 ? 0 : d) + g * _),
        ne = (y + te) / 2,
        re = (h.innerRadius + h.outerRadius) / 2,
        ie = [{ name: p, value: s, payload: ee, dataKey: c, type: u }],
        ae = _t(h.cx, h.cy, re, ne);
      return (
        (b = B(
          B(
            B(
              B({}, t.presentationProps),
              {},
              {
                percent: g,
                cornerRadius: a,
                name: p,
                tooltipPayload: ie,
                midAngle: ne,
                middleRadius: re,
                tooltipPosition: ae,
              },
              ee,
            ),
            h,
          ),
          {},
          {
            value: s,
            startAngle: y,
            endAngle: te,
            payload: ee,
            paddingAngle: le(f) * m,
          },
        )),
        b
      );
    });
  }
  return y;
}
function yf(e) {
  var { showLabels: t, sectors: n, children: r } = e,
    i = (0, z.useMemo)(
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
  return z.createElement(Ut, { value: t ? i : void 0 }, r);
}
function bf(e) {
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
    f = xt(t, `recharts-pie-`),
    p = n.current,
    [m, h] = (0, z.useState)(!1),
    g = (0, z.useCallback)(() => {
      (typeof d == `function` && d(), h(!1));
    }, [d]),
    _ = (0, z.useCallback)(() => {
      (typeof u == `function` && u(), h(!0));
    }, [u]);
  return z.createElement(
    yf,
    { showLabels: !m, sectors: r },
    z.createElement(
      zt,
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
              o = n > 0 ? (0, Jd.default)(t, `paddingAngle`, 0) : 0;
            if (r) {
              var s = de(
                  r.endAngle - r.startAngle,
                  t.endAngle - t.startAngle,
                  e,
                ),
                c = B(B({}, t), {}, { startAngle: a + o, endAngle: a + s + o });
              (i.push(c), (a = c.endAngle));
            } else {
              var { endAngle: l, startAngle: u } = t,
                d = de(0, l - u, e),
                f = B(B({}, t), {}, { startAngle: a + o, endAngle: a + d + o });
              (i.push(f), (a = f.endAngle));
            }
          }),
          (n.current = i),
          z.createElement(
            me,
            null,
            z.createElement(_f, {
              sectors: i,
              activeShape: c,
              inactiveShape: l,
              allOtherPieProps: t,
            }),
          )
        );
      },
    ),
    z.createElement(gf, { showLabels: !m, sectors: r, props: t }),
    t.children,
  );
}
var xf = {
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
  isAnimationActive: !kt.isSsr,
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
function Sf(e) {
  var { id: t } = e,
    n = Qd(e, Xd),
    { hide: r, className: i, rootTabIndex: a } = e,
    o = (0, z.useMemo)(() => qt(e.children, Ce), [e.children]),
    s = S((e) => qd(e, t, o)),
    c = (0, z.useRef)(null),
    l = it(`recharts-pie`, i);
  return r || s == null
    ? ((c.current = null), z.createElement(me, { tabIndex: a, className: l }))
    : z.createElement(
        z.Fragment,
        null,
        z.createElement(St, { fn: sf, args: B(B({}, e), {}, { sectors: s }) }),
        z.createElement(
          me,
          { tabIndex: a, className: l },
          z.createElement(bf, {
            props: B(B({}, n), {}, { sectors: s }),
            previousSectorsRef: c,
          }),
        ),
      );
}
function Cf(e) {
  var t = rt(e, xf),
    { id: n } = t,
    r = Qd(t, Zd),
    i = De(r);
  return z.createElement(st, { id: n, type: `pie` }, (e) =>
    z.createElement(
      z.Fragment,
      null,
      z.createElement(nt, {
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
      z.createElement(of, af({}, r, { id: e })),
      z.createElement(Sf, af({}, r, { id: e })),
    ),
  );
}
Cf.displayName = `Pie`;
function wf(e, t) {
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
function Tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? wf(Object(n), !0).forEach(function (t) {
          Ef(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Ef(e, t, n) {
  return (
    (t = Df(t)) in e
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
function Df(e) {
  var t = Of(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Of(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var kf = (e) => {
  var { point: t, childIndex: n, mainColor: r, activeDot: i, dataKey: a } = e;
  if (i === !1 || t.x == null || t.y == null) return null;
  var o = Tf(
      Tf(
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
        h(i),
      ),
      ke(i),
    ),
    s = (0, z.isValidElement)(i)
      ? (0, z.cloneElement)(i, o)
      : typeof i == `function`
        ? i(o)
        : z.createElement(Fu, o);
  return z.createElement(me, { className: `recharts-active-dot` }, s);
};
function Af(e) {
  var { points: t, mainColor: n, activeDot: r, itemDataKey: i } = e,
    a = S(gt),
    o = Rt();
  if (t == null || o == null) return null;
  var s = t.find((e) => o.includes(e.payload));
  return Fe(s)
    ? null
    : kf({
        point: s,
        childIndex: Number(a),
        mainColor: n,
        dataKey: i,
        activeDot: r,
      });
}
function jf(e, t) {
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
function Mf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? jf(Object(n), !0).forEach(function (t) {
          Nf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : jf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Nf(e, t, n) {
  return (
    (t = Pf(t)) in e
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
function Pf(e) {
  var t = Ff(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Ff(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var If = (e, t) => Xu(e, `radiusAxis`, t),
  Lf = C([If], (e) => {
    if (e != null) return { scale: e };
  }),
  Rf = C([ht, If], (e, t) => {
    if (e != null && t != null) return Mf(Mf({}, e), {}, { scale: t });
  }),
  zf = (e, t, n, r) => Qu(e, `radiusAxis`, t, r),
  Bf = (e, t, n) => Lt(e, n),
  Vf = (e, t, n) => Xu(e, `angleAxis`, n),
  Hf = C([Bf, Vf], (e, t) => {
    if (e != null && t != null) return Mf(Mf({}, e), {}, { scale: t });
  }),
  Uf = (e, t, n, r) => Qu(e, `angleAxis`, n, r),
  Wf = C([Bf, Vf, Nt], (e, t, n) => {
    if (n != null && t != null)
      return { scale: t, type: e.type, dataKey: e.dataKey, cx: n.cx, cy: n.cy };
  }),
  Gf = (e, t, n, r, i) => i,
  Kf = C([dt, Rf, zf, Hf, Uf], (e, t, n, r, i) =>
    ie(e, `radiusAxis`) ? Wt(t, n, !1) : Wt(r, i, !1),
  ),
  qf = C([Iu, Gf], (e, t) => {
    if (e != null)
      return e.find((e) => e.type === `radar` && t === e.id)?.dataKey;
  }),
  Jf = C([Lf, Wf, tt, qf, Kf], (e, t, n, r, i) => {
    var { chartData: a, dataStartIndex: o, dataEndIndex: s } = n;
    if (e != null && t != null && a != null && i != null && r != null)
      return cp({
        radiusAxis: e,
        angleAxis: t,
        displayedData: a.slice(o, s + 1),
        dataKey: r,
        bandSize: i,
      });
  }),
  Yf = e(Me()),
  Xf = [`id`];
function Zf(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Qf(e, t);
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
function Qf(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function $f(e, t) {
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
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? $f(Object(n), !0).forEach(function (t) {
          ep(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : $f(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function ep(e, t, n) {
  return (
    (t = tp(t)) in e
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
function tp(e) {
  var t = np(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function np(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function rp() {
  return (
    (rp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rp.apply(null, arguments)
  );
}
function ip(e, t) {
  return e && e !== `none` ? e : t;
}
var ap = (e) => {
  var { dataKey: t, name: n, stroke: r, fill: i, legendType: a, hide: o } = e;
  return [
    {
      inactive: o,
      dataKey: t,
      type: a,
      color: ip(r, i),
      value: Ne(n, t),
      payload: e,
    },
  ];
};
function op(e) {
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
      name: Ne(a, t),
      hide: o,
      type: s,
      color: ip(n, i),
      unit: ``,
    },
  };
}
function sp(e, t) {
  return z.isValidElement(e)
    ? z.cloneElement(e, t)
    : typeof e == `function`
      ? e(t)
      : z.createElement(
          Fu,
          rp({}, t, {
            className: it(
              `recharts-radar-dot`,
              typeof e == `boolean` ? `` : e.className,
            ),
          }),
        );
}
function cp(e) {
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
    var a = x(e, n.dataKey, r),
      d = x(e, i),
      f = n.scale(a) + u,
      p = Array.isArray(d) ? (0, Yf.default)(d) : d,
      m = Fe(p) ? void 0 : t.scale(p);
    (Array.isArray(d) && d.length >= 2 && (c = !0),
      l.push(
        V(
          V({}, _t(o, s, m, f)),
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
            r = Fe(n) ? void 0 : t.scale(n);
          d.push(V(V({}, e), {}, { radius: r }, _t(o, s, r, e.angle)));
        } else d.push(e);
      }),
    { points: l, isRange: c, baseLinePoints: d }
  );
}
function lp(e) {
  var { points: t, props: n } = e,
    { dot: r, dataKey: i } = n;
  if (!r) return null;
  var { id: a } = n,
    o = Zf(n, Xf),
    s = De(o),
    c = Ke(r),
    l = t.map((e, t) =>
      sp(
        r,
        V(
          V(V({ key: `dot-${t}`, r: 3 }, s), c),
          {},
          { dataKey: i, cx: e.x, cy: e.y, index: t, payload: e },
        ),
      ),
    );
  return z.createElement(me, { className: `recharts-radar-dots` }, l);
}
function up(e) {
  var { showLabels: t, points: n, children: r } = e,
    i = n.map((e) => {
      var t = { x: e.x, y: e.y, width: 0, height: 0 };
      return V(
        V({}, t),
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
  return z.createElement(Ae, { value: t ? i : null }, r);
}
function dp(e) {
  var { points: t, baseLinePoints: n, props: r } = e;
  if (t == null) return null;
  var { shape: i, isRange: a, connectNulls: o } = r,
    s = z.isValidElement(i)
      ? z.cloneElement(i, V(V({}, r), {}, { points: t }))
      : typeof i == `function`
        ? i(V(V({}, r), {}, { points: t }))
        : z.createElement(
            Nu,
            rp({}, He(r), {
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
  return z.createElement(
    me,
    { className: `recharts-radar-polygon` },
    s,
    z.createElement(lp, { props: r, points: t }),
  );
}
var fp = (e, t, n) => (r, i) => {
  var a = e && e[Math.floor(i * t)];
  return a
    ? V(V({}, r), {}, { x: de(a.x, r.x, n), y: de(a.y, r.y, n) })
    : V(V({}, r), {}, { x: de(r.cx, r.x, n), y: de(r.cy, r.y, n) });
};
function pp(e) {
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
    g = xt(t, `recharts-radar-`),
    [_, v] = (0, z.useState)(!1),
    y = !_,
    b = (0, z.useCallback)(() => {
      (typeof u == `function` && u(), v(!1));
    }, [u]),
    te = (0, z.useCallback)(() => {
      (typeof d == `function` && d(), v(!0));
    }, [d]);
  return z.createElement(
    up,
    { showLabels: y, points: i },
    z.createElement(
      zt,
      {
        animationId: g,
        begin: s,
        duration: c,
        isActive: o,
        easing: l,
        key: `radar-${g}`,
        onAnimationEnd: b,
        onAnimationStart: te,
      },
      (e) => {
        var o = e === 1 ? i : i.map(fp(f, m, e)),
          s = e === 1 ? a : a?.map(fp(p, h, e));
        return (
          e > 0 && ((n.current = o), (r.current = s)),
          z.createElement(dp, { points: o, baseLinePoints: s, props: t })
        );
      },
    ),
    z.createElement(ee, { label: t.label }),
    t.children,
  );
}
function mp(e) {
  var t = (0, z.useRef)(void 0),
    n = (0, z.useRef)(void 0);
  return z.createElement(pp, {
    props: e,
    previousPointsRef: t,
    previousBaseLinePointsRef: n,
  });
}
var hp = {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: !1,
    activeDot: !0,
    dot: !1,
    legendType: `rect`,
    isAnimationActive: !kt.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  gp = class extends z.PureComponent {
    render() {
      var { hide: e, className: t, points: n } = this.props;
      if (e || n == null) return null;
      var r = it(`recharts-radar`, t);
      return z.createElement(
        z.Fragment,
        null,
        z.createElement(me, { className: r }, z.createElement(mp, this.props)),
        z.createElement(Af, {
          points: n,
          mainColor: ip(this.props.stroke, this.props.fill),
          itemDataKey: this.props.dataKey,
          activeDot: this.props.activeDot,
        }),
      );
    }
  };
function _p(e) {
  var t = $e(),
    n = S((n) => Jf(n, e.radiusAxisId, e.angleAxisId, t, e.id));
  return z.createElement(
    gp,
    rp({}, e, {
      points: n?.points,
      baseLinePoints: n?.baseLinePoints,
      isRange: n?.isRange,
    }),
  );
}
var vp = class extends z.PureComponent {
  render() {
    return z.createElement(st, { id: this.props.id, type: `radar` }, (e) =>
      z.createElement(
        z.Fragment,
        null,
        z.createElement(nt, {
          type: `radar`,
          id: e,
          data: void 0,
          dataKey: this.props.dataKey,
          hide: this.props.hide,
          angleAxisId: this.props.angleAxisId,
          radiusAxisId: this.props.radiusAxisId,
        }),
        z.createElement(Ot, { legendPayload: ap(this.props) }),
        z.createElement(St, { fn: op, args: this.props }),
        z.createElement(_p, rp({}, this.props, { id: e })),
      ),
    );
  }
};
(ep(vp, `displayName`, `Radar`), ep(vp, `defaultProps`, hp));
function yp(e) {
  var t = se();
  return (
    (0, z.useEffect)(() => {
      t(mt(e));
    }, [t, e]),
    null
  );
}
var bp = [`layout`];
function xp() {
  return (
    (xp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xp.apply(null, arguments)
  );
}
function Sp(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Cp(e, t);
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
function Cp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var wp = {
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
  Tp = (0, z.forwardRef)(function (e, t) {
    var n = rt(e.categoricalChartProps, wp),
      { layout: r } = n,
      i = Sp(n, bp),
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
    return z.createElement(
      Mt,
      { preloadedState: { options: l }, reduxStoreName: n.id ?? a },
      z.createElement(et, { chartData: n.data }),
      z.createElement(wt, { layout: r, margin: n.margin }),
      z.createElement(It, {
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
      z.createElement(yp, {
        cx: n.cx,
        cy: n.cy,
        startAngle: n.startAngle,
        endAngle: n.endAngle,
        innerRadius: n.innerRadius,
        outerRadius: n.outerRadius,
      }),
      z.createElement(at, xp({}, i, { ref: t })),
    );
  }),
  Ep = [`item`],
  Dp = {
    layout: `centric`,
    startAngle: 0,
    endAngle: 360,
    cx: `50%`,
    cy: `50%`,
    innerRadius: 0,
    outerRadius: `80%`,
  },
  Op = (0, z.forwardRef)((e, t) => {
    var n = rt(e, Dp);
    return z.createElement(Tp, {
      chartName: `PieChart`,
      defaultTooltipEventType: `item`,
      validateTooltipEventTypes: Ep,
      tooltipPayloadSearcher: _,
      categoricalChartProps: n,
      ref: t,
    });
  }),
  kp = [`axis`],
  Ap = {
    layout: `centric`,
    startAngle: 90,
    endAngle: -270,
    cx: `50%`,
    cy: `50%`,
    innerRadius: 0,
    outerRadius: `80%`,
  },
  jp = (0, z.forwardRef)((e, t) => {
    var n = rt(e, Ap);
    return z.createElement(Tp, {
      chartName: `RadarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: kp,
      tooltipPayloadSearcher: _,
      categoricalChartProps: n,
      ref: t,
    });
  }),
  Mp = [`axis`],
  Np = (0, z.forwardRef)((e, t) =>
    z.createElement(g, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: Mp,
      tooltipPayloadSearcher: _,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  H = e(s(), 1),
  Pp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_playtime_seconds || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: F.readUint32,
              bw: I.writeUint32,
            },
            total_sessions: { n: 20, br: F.readUint32, bw: I.writeUint32 },
            vr_sessions: { n: 21, br: F.readUint32, bw: I.writeUint32 },
            deck_sessions: { n: 22, br: F.readUint32, bw: I.writeUint32 },
            controller_sessions: { n: 23, br: F.readUint32, bw: I.writeUint32 },
            linux_sessions: { n: 24, br: F.readUint32, bw: I.writeUint32 },
            macos_sessions: { n: 25, br: F.readUint32, bw: I.writeUint32 },
            windows_sessions: { n: 26, br: F.readUint32, bw: I.writeUint32 },
            total_playtime_percentagex100: {
              n: 27,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            vr_playtime_percentagex100: {
              n: 28,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            deck_playtime_percentagex100: {
              n: 29,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            controller_playtime_percentagex100: {
              n: 30,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            linux_playtime_percentagex100: {
              n: 31,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            macos_playtime_percentagex100: {
              n: 32,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            windows_playtime_percentagex100: {
              n: 33,
              br: F.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStats`;
    }
  },
  Fp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: F.readUint32, bw: I.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreakGame`;
    }
  },
  Ip = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.longest_consecutive_days || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [3], null));
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
              br: F.readUint32,
              bw: I.writeUint32,
            },
            rtime_start: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            streak_games: { n: 3, c: Fp, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreak`;
    }
  },
  Lp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_rank || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_rank: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            vr_rank: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            deck_rank: { n: 3, br: F.readUint32, bw: I.writeUint32 },
            controller_rank: { n: 4, br: F.readUint32, bw: I.writeUint32 },
            linux_rank: { n: 5, br: F.readUint32, bw: I.writeUint32 },
            mac_rank: { n: 6, br: F.readUint32, bw: I.writeUint32 },
            windows_rank: { n: 7, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeRanks`;
    }
  },
  Rp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            stats: { n: 2, c: Pp },
            playtime_streak: { n: 3, c: Ip },
            playtime_ranks: { n: 4, c: Lp },
            rtime_first_played: { n: 5, br: F.readUint32, bw: I.writeUint32 },
            relative_game_stats: { n: 6, c: Pp },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePlaytimeStats`;
    }
  },
  zp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            new_this_year: { n: 2, br: F.readBool, bw: I.writeBool },
            rtime_first_played_lifetime: {
              n: 3,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            demo: { n: 4, br: F.readBool, bw: I.writeBool },
            playtest: { n: 5, br: F.readBool, bw: I.writeBool },
            played_during_early_access: {
              n: 6,
              br: F.readBool,
              bw: I.writeBool,
            },
            played_vr: { n: 7, br: F.readBool, bw: I.writeBool },
            played_deck: { n: 8, br: F.readBool, bw: I.writeBool },
            played_controller: { n: 9, br: F.readBool, bw: I.writeBool },
            played_linux: { n: 10, br: F.readBool, bw: I.writeBool },
            played_mac: { n: 11, br: F.readBool, bw: I.writeBool },
            played_windows: { n: 12, br: F.readBool, bw: I.writeBool },
            total_playtime_percentagex100: {
              n: 13,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            total_sessions: { n: 14, br: F.readUint32, bw: I.writeUint32 },
            rtime_release_date: { n: 15, br: F.readUint32, bw: I.writeUint32 },
            parent_appid: { n: 16, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameSummary`;
    }
  },
  Bp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            total_playtime_percentagex100: {
              n: 2,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            relative_playtime_percentagex100: {
              n: 3,
              br: F.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSimpleGameSummary`;
    }
  },
  Vp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            rank: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            relative_playtime_percentagex100: {
              n: 3,
              br: F.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRank`;
    }
  },
  Hp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category: { n: 1, br: F.readString, bw: I.writeString },
            rankings: { n: 2, c: Vp, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CRankingCategory`;
    }
  },
  Up = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_ranking || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_ranking: { n: 1, c: Hp },
            vr_ranking: { n: 2, c: Hp },
            deck_ranking: { n: 3, c: Hp },
            controller_ranking: { n: 4, c: Hp },
            linux_ranking: { n: 5, c: Hp },
            mac_ranking: { n: 6, c: Hp },
            windows_ranking: { n: 7, c: Hp },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRankings`;
    }
  },
  Wp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_achievements || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_achievements: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            total_games_with_achievements: {
              n: 3,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            total_rare_achievements: {
              n: 4,
              br: F.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeSummaryStats`;
    }
  },
  Gp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: Kp, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats`;
    }
  },
  Kp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tag_id || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tag_id: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            tag_weight: { n: 2, br: F.readFloat, bw: I.writeFloat },
            tag_weight_pre_selection: {
              n: 3,
              br: F.readFloat,
              bw: I.writeFloat,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats_Tag`;
    }
  },
  qp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.screenshots_shared || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            screenshots_shared: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            gifts_sent: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            loyalty_reactions: { n: 3, br: F.readUint32, bw: I.writeUint32 },
            written_reviews: { n: 4, br: F.readUint32, bw: I.writeUint32 },
            guides_submitted: { n: 5, br: F.readUint32, bw: I.writeUint32 },
            workshop_contributions: {
              n: 6,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            badges_earned: { n: 7, br: F.readUint32, bw: I.writeUint32 },
            friends_added: { n: 8, br: F.readUint32, bw: I.writeUint32 },
            forum_posts: { n: 9, br: F.readUint32, bw: I.writeUint32 },
            workshop_subscriptions: {
              n: 10,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            guide_subscribers: { n: 11, br: F.readUint32, bw: I.writeUint32 },
            workshop_subscribers: {
              n: 12,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            games_played_pct: { n: 13, br: F.readUint32, bw: I.writeUint32 },
            achievements_pct: { n: 14, br: F.readUint32, bw: I.writeUint32 },
            game_streak_pct: { n: 15, br: F.readUint32, bw: I.writeUint32 },
            games_played_avg: { n: 16, br: F.readUint32, bw: I.writeUint32 },
            achievements_avg: { n: 17, br: F.readUint32, bw: I.writeUint32 },
            game_streak_avg: { n: 18, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeByNumbers`;
    }
  },
  Jp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_stats || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [2, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_stats: { n: 1, c: Pp },
            games: { n: 2, c: Rp, r: !0, q: !0 },
            playtime_streak: { n: 3, c: Ip },
            months: { n: 5, c: Yp, r: !0, q: !0 },
            game_summary: { n: 6, c: zp, r: !0, q: !0 },
            demos_played: { n: 7, br: F.readUint32, bw: I.writeUint32 },
            game_rankings: { n: 8, c: Up },
            playtests_played: { n: 9, br: F.readUint32, bw: I.writeUint32 },
            summary_stats: { n: 10, c: Wp },
            substantial: { n: 11, d: !0, br: F.readBool, bw: I.writeBool },
            tag_stats: { n: 12, c: Gp },
            by_numbers: { n: 13, c: qp },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeStats`;
    }
  },
  Yp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_month || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [4, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_month: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            stats: { n: 2, c: Pp },
            appid: { n: 4, c: Rp, r: !0, q: !0 },
            relative_monthly_stats: { n: 5, c: Pp },
            game_summary: { n: 6, c: Bp, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMonthlyPlaytimeStats`;
    }
  },
  Xp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.account_id || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_id: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            year: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            playtime_stats: { n: 3, c: Jp },
            privacy_state: { n: 4, br: F.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserYearInReviewStats`;
    }
  },
  Zp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.from_dbo || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            from_dbo: { n: 1, br: F.readBool, bw: I.writeBool },
            overall_time_ms: {
              n: 2,
              br: F.readUint64String,
              bw: I.writeUint64String,
            },
            dbo_load_ms: {
              n: 3,
              br: F.readUint64String,
              bw: I.writeUint64String,
            },
            query_execution_ms: {
              n: 4,
              br: F.readUint64String,
              bw: I.writeUint64String,
            },
            message_population_ms: {
              n: 5,
              br: F.readUint64String,
              bw: I.writeUint64String,
            },
            dbo_lock_load_ms: {
              n: 6,
              br: F.readUint64String,
              bw: I.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CYearInReviewPerformanceStats`;
    }
  },
  Qp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.statid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            statid: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            fieldid: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            achievement_name_internal: {
              n: 3,
              br: F.readString,
              bw: I.writeString,
            },
            rtime_unlocked: { n: 4, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAchievementDetails`;
    }
  },
  $p = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [2, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            achievements: { n: 2, c: Qp, r: !0, q: !0 },
            all_time_unlocked_achievements: {
              n: 3,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            unlocked_more_in_future: { n: 4, br: F.readBool, bw: I.writeBool },
            completed_sets: { n: 5, c: em, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameAchievements`;
    }
  },
  em = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groupid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            rtime_completed: { n: 2, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameAchievements_CompletedSet`;
    }
  },
  tm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.median_achievements || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            median_achievements: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            median_games: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            median_streak: { n: 3, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPercentiles`;
    }
  },
  nm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.new_releases || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            new_releases: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            recent_releases: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            classic_releases: { n: 3, br: F.readUint32, bw: I.writeUint32 },
            recent_cutoff_year: { n: 4, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPlaytimeDistribution`;
    }
  },
  rm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.games_played || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            games_played: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            unlocked_achievements: {
              n: 2,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            longest_streak: { n: 3, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPreviousYIRSummaryData`;
    }
  },
  im = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            force_regenerate: { n: 3, br: F.readBool, bw: I.writeBool },
            access_source: { n: 4, br: F.readInt32, bw: I.writeInt32 },
            fetch_previous_year_summary: {
              n: 5,
              d: !1,
              br: F.readBool,
              bw: I.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Request`;
    }
  },
  am = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: Xp },
            performance_stats: { n: 2, c: Zp },
            percentiles: { n: 3, c: tm },
            distribution: { n: 4, c: nm },
            previous_year_summary: { n: 5, c: rm },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Response`;
    }
  },
  om = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            privacy_state: { n: 3, br: F.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Request`;
    }
  },
  sm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { privacy_state: { n: 1, br: F.readEnum, bw: I.writeEnum } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Response`;
    }
  },
  cm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Request`;
    }
  },
  lm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            privacy_state: { n: 1, br: F.readEnum, bw: I.writeEnum },
            generated_value: { n: 2, br: F.readBool, bw: I.writeBool },
            steamid: {
              n: 3,
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            rt_privacy_updated: { n: 4, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Response`;
    }
  },
  um = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [3], null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: F.readUint32,
              pbr: F.readPackedUint32,
              bw: I.writeRepeatedUint32,
            },
            total_only: { n: 4, br: F.readBool, bw: I.writeBool },
            include_completed_sets: { n: 5, br: F.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Request`;
    }
  },
  dm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_achievements || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_achievements: { n: 1, c: $p, r: !0, q: !0 },
            total_achievements: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            total_rare_achievements: {
              n: 3,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            total_games_with_achievements: {
              n: 4,
              br: F.readUint32,
              bw: I.writeUint32,
            },
            total_completed_sets: { n: 5, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Response`;
    }
  },
  fm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [3], null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: F.readUint32,
              pbr: F.readPackedUint32,
              bw: I.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Request`;
    }
  },
  pm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response`;
    }
  },
  mm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_url || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_url: { n: 1, br: F.readString, bw: I.writeString },
            preview_url: { n: 2, br: F.readString, bw: I.writeString },
            image_width: { n: 3, br: F.readUint32, bw: I.writeUint32 },
            image_height: { n: 4, br: F.readUint32, bw: I.writeUint32 },
            maybe_inappropriate_sex: { n: 5, br: F.readBool, bw: I.writeBool },
            maybe_inappropriate_violence: {
              n: 6,
              br: F.readBool,
              bw: I.writeBool,
            },
            visibility: { n: 7, br: F.readUint32, bw: I.writeUint32 },
            spoiler_tag: { n: 8, br: F.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_Screenshot`;
    }
  },
  hm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            screenshots: { n: 2, c: mm, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp`;
    }
  },
  gm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            gid: { n: 2, br: F.readFixed64String, bw: I.writeFixed64String },
            type: { n: 3, br: F.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Request`;
    }
  },
  _m = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.jsondata || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { jsondata: { n: 1, br: F.readString, bw: I.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Response`;
    }
  },
  vm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            gids: {
              n: 2,
              r: !0,
              q: !0,
              br: F.readFixed64String,
              pbr: F.readPackedFixed64String,
              bw: I.writeRepeatedFixed64String,
            },
            type: { n: 3, br: F.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Request`;
    }
  },
  ym = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response`;
    }
  },
  bm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: F.readFixed64String, bw: I.writeFixed64String },
            jsondata: { n: 2, br: F.readString, bw: I.writeString },
            steamid: {
              n: 3,
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response_Entry`;
    }
  },
  xm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: F.readFixed64String, bw: I.writeFixed64String },
            type: { n: 2, br: F.readEnum, bw: I.writeEnum },
            count: { n: 3, br: F.readUint32, bw: I.writeUint32 },
            last_account_index: { n: 4, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Request`;
    }
  },
  Sm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: Cm, r: !0, q: !0 },
            last_account_index: { n: 2, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response`;
    }
  },
  Cm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: F.readFixed64String, bw: I.writeFixed64String },
            jsondata: { n: 2, br: F.readString, bw: I.writeString },
            steamid: {
              n: 3,
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response_Entry`;
    }
  },
  wm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            return_private: { n: 3, br: F.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Request`;
    }
  },
  Tm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            privacy_state: { n: 3, br: F.readEnum, bw: I.writeEnum },
            rt_privacy_updated: { n: 4, br: F.readUint32, bw: I.writeUint32 },
            privacy_override: { n: 5, br: F.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendSharedYearInView`;
    }
  },
  Em = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.friend_shares || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            friend_shares: { n: 1, c: Tm, r: !0, q: !0 },
            year: { n: 2, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Response`;
    }
  },
  Dm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            language: { n: 3, br: F.readString, bw: I.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Request`;
    }
  },
  Om = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || k(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response`;
    }
  },
  km = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: F.readString, bw: I.writeString },
            url_path: { n: 2, br: F.readString, bw: I.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response_Image`;
    }
  },
  Am = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: F.readFixed64String,
              bw: I.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Request`;
    }
  },
  jm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.year || k(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            year: { n: 1, br: F.readUint32, bw: I.writeUint32 },
            month: { n: 2, br: F.readUint32, bw: I.writeUint32 },
            games_played: { n: 4, br: F.readUint32, bw: I.writeUint32 },
            top_played_appid: { n: 5, br: F.readUint32, bw: I.writeUint32 },
            longest_streak_days: { n: 6, br: F.readUint32, bw: I.writeUint32 },
            rt_streak_start: { n: 7, br: F.readUint32, bw: I.writeUint32 },
            achievements: { n: 8, br: F.readUint32, bw: I.writeUint32 },
            screenshots: { n: 9, br: F.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return N(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return L(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Response`;
    }
  },
  Mm;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearInReview#1`, To(im, t, n), am, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetUserYearInReview = t;
  function n(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserSharingPermissions#1`,
      To(cm, t, n),
      lm,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetUserSharingPermissions = n;
  function r(e, t, n) {
    return e.SendMsg(
      `SaleFeature.SetUserSharingPermissions#1`,
      To(om, t, n),
      sm,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2, rgBrowserAPISites: [`store`] },
    );
  }
  e.SetUserSharingPermissions = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearAchievements#1`,
      To(um, t, n),
      dm,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.GetUserYearAchievements = i;
  function a(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearScreenshots#1`, To(fm, t, n), pm, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetUserYearScreenshots = a;
  function o(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserActionData#1`, To(gm, t, n), _m, {
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
      To(vm, t, n),
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
      To(xm, t, n),
      Sm,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllUserActionDataForType = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetFriendsSharedYearInReview#1`,
      To(wm, t, n),
      Em,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.GetFriendsSharedYearInReview = l;
  function u(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearInReviewShareImage#1`,
      To(Dm, t, n),
      Om,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.GetUserYearInReviewShareImage = u;
  function d(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetYIRCurrentMonthlySummary#1`,
      To(Am, t, n),
      jm,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetYIRCurrentMonthlySummary = d;
})((Mm ||= {}));
var Nm = {
    19: [19, xr, bn, $o, rc, Xc],
    [ho]: [ho, Ua, ta, Vo, pc, ur, Rl],
    [rr]: [rr, Bo, vn, Qo],
    113: [113],
    21: [21, yr],
    492: [492],
    [Zn]: [Zn, Wn],
    [xr]: [19, xr, bn, Qr],
    9: [9, Al, er, ci, Pi, Kr, kc],
    [Ua]: [ho, Ua, ta, Sn, Fa],
    122: [122, gr, _l, ui, Wo],
    [sc]: [sc, Wn],
    [bn]: [19, xr, bn, Za],
    599: [599, Hi, Co],
    [Qr]: [xr, Qr],
    [Zo]: [Zo, La, Fc],
    [_i]: [_i, Cl, zc],
    [Bo]: [rr, Bo, Va, Mc],
    [Cl]: [_i, Cl, zc],
    597: [597],
    [dn]: [dn, yn, Yi, gc],
    [hn]: [hn],
    [Ar]: [Ar],
    [vn]: [rr, vn, li, ei],
    [Ki]: [Ki, ao],
    [ta]: [ho, Ua, ta],
    [La]: [Zo, La],
    [ua]: [ua, sa],
    [Qo]: [rr, Qo, fr],
    [An]: [An],
    [eo]: [eo],
    [sr]: [sr, Ms],
    [os]: [os],
    [hl]: [hl, Br, Rr],
    128: [128, Ni],
    [bs]: [bs],
    [Yc]: [Yc],
    [Vo]: [ho, Vo],
    [yi]: [yi],
    493: [493],
    [Ba]: [Ba, cr],
    [Es]: [Es, Zr],
    [sa]: [ua, sa],
    [pc]: [ho, pc],
    [Qa]: [Qa, Wn],
    [ao]: [Ki, ao],
    [mo]: [mo],
    [Vc]: [Vc, oo],
    [qc]: [qc],
    [Na]: [Na, Tc],
    [Lr]: [Lr, Ms],
    [zc]: [_i, Cl, zc],
    [Fc]: [Zo, Fc],
    [_a]: [_a, fr],
    [gr]: [122, gr],
    [Tc]: [Na, Tc],
    [$a]: [$a],
    [cr]: [Ba, cr],
    [ur]: [ho, ur],
    [ka]: [ka],
    [Cn]: [Cn],
    [pr]: [pr],
    [nr]: [nr],
    [Br]: [hl, Br, Cc, Mr],
    [kr]: [kr],
    699: [699],
    [oc]: [oc],
    [$o]: [19, $o],
    [Gc]: [Gc],
    [Io]: [Io],
    [Va]: [Bo, Va],
    [yn]: [dn, yn],
    [yr]: [21, yr],
    [gi]: [gi],
    [Js]: [Js, cs, Os, ts],
    [rc]: [19, rc],
    [Mc]: [Bo, Mc],
    [Yr]: [Yr],
    [_o]: [_o],
    [On]: [On],
    [Po]: [Po],
    [po]: [po],
    [Ha]: [Ha],
    [$n]: [$n],
    [oi]: [oi],
    [Aa]: [Aa],
    [Ei]: [Ei],
    701: [701, Bi, ba, Nc],
    [Hi]: [599, Hi, Co],
    [Bs]: [Bs],
    [Lc]: [Lc],
    [Al]: [9, Al, oa],
    [ns]: [ns, ls],
    [Ni]: [128, Ni],
    [Sc]: [Sc],
    [si]: [si],
    [Sn]: [Ua, Sn, Ts],
    [ls]: [ns, ls],
    [lc]: [lc],
    [Gn]: [Gn],
    [Or]: [Or],
    [er]: [9, er],
    [un]: [un],
    [_l]: [122, _l],
    [Oa]: [Oa],
    [Ts]: [Sn, Ts, wr, wi, ri],
    [is]: [is, ms],
    [xn]: [xn],
    [Qc]: [Qc],
    [ci]: [9, ci],
    [oo]: [Vc, oo],
    [fn]: [fn],
    [ic]: [ic],
    [Ur]: [Ur],
    [hc]: [hc],
    [uo]: [uo],
    [mn]: [mn],
    [cs]: [Js, cs],
    [ja]: [ja],
    [Zr]: [Es, Zr],
    [Dn]: [Dn],
    [Zi]: [Zi],
    [li]: [vn, li],
    [zn]: [zn],
    [No]: [No],
    [Wi]: [Wi],
    [ni]: [ni],
    [zs]: [zs],
    [kl]: [kl],
    [Zc]: [Zc],
    [Pi]: [9, Pi],
    [di]: [di],
    [Rr]: [hl, Rr],
    [Ln]: [Ln],
    [$i]: [$i],
    [Ea]: [Ea],
    [Co]: [599, Hi, Co],
    [fc]: [fc],
    [Rn]: [Rn],
    [Rc]: [Rc, Yo],
    [el]: [el],
    [bi]: [bi],
    [ha]: [ha],
    [Pn]: [Pn, pi, jo, Gi, ca],
    [Wn]: [Zn, sc, Qa, Wn],
    [Xc]: [19, Xc],
    [js]: [js],
    [Oo]: [Oo],
    [vs]: [vs],
    [Hc]: [Hc],
    [Ho]: [Ho],
    [$c]: [$c],
    [Vr]: [Vr],
    [vc]: [vc],
    [ir]: [ir],
    [ei]: [vn, ei],
    [ii]: [ii],
    [Tl]: [Tl],
    [Lo]: [Lo],
    [ar]: [ar],
    [Vl]: [Vl],
    [dc]: [dc],
    [Ss]: [Ss],
    [Nl]: [Nl],
    [za]: [za],
    [fo]: [fo],
    [ds]: [ds],
    [Mi]: [Mi],
    [tr]: [tr],
    [In]: [In],
    [Us]: [Us],
    [Cs]: [Cs],
    [Cr]: [Cr],
    [qo]: [qo],
    [ml]: [ml],
    [wa]: [wa],
    [ji]: [ji],
    [qr]: [qr],
    [so]: [so],
    [wr]: [Ts, wr],
    [hi]: [hi],
    [Yo]: [Rc, Yo],
    [mc]: [mc, Ls],
    [Si]: [Si],
    [Nn]: [Nn],
    [Yi]: [dn, Yi],
    [Dr]: [Dr],
    [Vn]: [Vn],
    [xc]: [xc],
    [Ga]: [Ga],
    [Ns]: [Ns],
    [Xs]: [Xs],
    [bo]: [bo],
    [ti]: [ti],
    [Cc]: [Br, Cc],
    [Kr]: [9, Kr],
    [jc]: [jc],
    [hs]: [hs],
    [vl]: [vl],
    [pa]: [pa],
    [Dc]: [Dc],
    [Za]: [bn, Za],
    [dr]: [dr],
    [bc]: [bc],
    [Eo]: [Eo],
    [ui]: [122, ui],
    872: [872],
    [xl]: [xl],
    [br]: [br],
    [ks]: [ks],
    [ys]: [ys],
    [Kc]: [Kc],
    [Ia]: [Ia],
    [So]: [So],
    [Nr]: [Nr],
    [lo]: [lo],
    [ro]: [ro],
    [mr]: [mr],
    [Bi]: [701, Bi, ba],
    [Jc]: [Jc],
    [ma]: [ma],
    [lr]: [lr],
    [cn]: [cn],
    [Xo]: [Xo],
    [zl]: [zl],
    [Wa]: [Wa],
    [Qn]: [Qn],
    [ya]: [ya],
    [tc]: [tc],
    [kc]: [9, kc],
    [ea]: [ea],
    [yl]: [yl],
    [rs]: [rs],
    [ps]: [ps],
    87: [87],
    [Wo]: [122, Wo],
    [ms]: [is, ms],
    84: [84],
    [vi]: [vi],
    [Fa]: [Ua, Fa],
    [Fr]: [Fr],
    [Wc]: [Wc],
    [Ui]: [Ui],
    [kn]: [kn],
    [Xa]: [Xa],
    [Hn]: [Hn],
    [sl]: [sl],
    [Il]: [Il],
    [Ll]: [Ll],
    [Xn]: [Xn],
    [_n]: [_n],
    [Da]: [Da],
    [ba]: [701, Bi, ba],
    [Li]: [Li],
    [Ms]: [sr, Lr, Ms],
    [Ks]: [Ks],
    [vo]: [vo],
    [Mo]: [Mo],
    [wl]: [wl],
    [Ti]: [Ti],
    [Yn]: [Yn],
    [Kn]: [Kn],
    [jn]: [jn],
    [yo]: [yo],
    [no]: [no],
    [zo]: [zo],
    [Tr]: [Tr],
    [Fn]: [Fn],
    [ws]: [ws],
    [_c]: [_c],
    [fi]: [fi],
    [Ys]: [Ys],
    [pi]: [Pn, pi],
    [Er]: [Er],
    [xo]: [xo],
    [Hs]: [Hs],
    [Ic]: [Ic],
    [Un]: [Un],
    [jo]: [Pn, jo, Gi],
    [Ji]: [Ji],
    [gs]: [gs],
    [zr]: [zr],
    [Ao]: [Ao],
    [Ci]: [Ci],
    [Wr]: [Wr],
    [Oc]: [Oc],
    [qi]: [qi],
    [fr]: [Qo, _a, fr],
    [Ls]: [mc, Ls],
    [nc]: [nc],
    [hr]: [hr],
    [Dl]: [Dl],
    [dl]: [dl],
    [Mn]: [Mn],
    [gl]: [gl],
    [Go]: [Go],
    [to]: [to],
    [Ec]: [Ec],
    [Zs]: [Zs],
    [us]: [us],
    [Ka]: [Ka],
    [jl]: [jl],
    [Is]: [Is],
    [ai]: [ai],
    [ol]: [ol],
    [ra]: [ra],
    [wi]: [Ts, wi, ri],
    [xi]: [xi],
    [wc]: [wc],
    [Ai]: [Ai],
    [qn]: [qn],
    [Gi]: [Pn, jo, Gi],
    [Uo]: [Uo],
    [go]: [go],
    [ki]: [ki],
    [ll]: [ll],
    [jr]: [jr],
    [Sl]: [Sl],
    784: [784],
    [zi]: [zi],
    [ss]: [ss],
    [Fo]: [Fo],
    [Do]: [Do],
    [Rl]: [ho, Rl],
    [Gr]: [Gr],
    [As]: [As],
    [ln]: [ln],
    [la]: [la],
    [ec]: [ec],
    [gc]: [dn, gc],
    [oa]: [Al, oa],
    [ia]: [ia],
    [rl]: [rl],
    [ko]: [ko],
    [na]: [na],
    [Jo]: [Jo],
    [$s]: [$s],
    [Ri]: [Ri],
    [Bl]: [Bl],
    [$r]: [$r],
    [xs]: [xs],
    [Uc]: [Uc],
    [Vi]: [Vi],
    [Vs]: [Vs],
    [Fl]: [Fl],
    [ri]: [Ts, wi, ri],
    [Tn]: [Tn],
    [Mr]: [Br, Mr],
    [_r]: [_r],
    [cc]: [cc],
    [ts]: [Js, ts],
    809: [809],
    [vr]: [vr],
    [Ml]: [Ml],
    [es]: [es],
    [Oi]: [Oi],
    [ga]: [ga],
    [Ja]: [Ja, Pr],
    [ca]: [Pn, ca],
    [Pa]: [Pa],
    [Pr]: [Ja, Pr],
    [Ac]: [Ac],
    [Jr]: [Jr],
    [Os]: [Js, Os],
    [Nc]: [701, Nc],
    [qs]: [qs],
  },
  Pm = [_i, Cl, zc, La];
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
  return T.country_code.toLowerCase() === `cn`;
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
  return Ds((a * r) / t, 0, 1e4);
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
    Ii(
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
    Ii(
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
      Ii(
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
      Ii(
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
      return new Ca(this.m_steamid).GetAccountID();
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
        (this.m_steamid = Ca.InitFromAccountID(
          i.account_id,
          P.EUNIVERSE,
        ).ConvertTo64BitString()),
        (this.m_globalPercentiles = t ?? void 0),
        (this.m_globalGameplayDistribution = Jm(n)),
        (this.m_previousYearSummary = Ym(r)),
        this.BHasPlaytimeData() &&
          i.playtime_stats.total_stats.total_sessions > 0)
      ) {
        (i.playtime_stats.game_summary.forEach((e) => {
          (Ii(
            !this.m_mapGameSummary.has(e.appid),
            `Found at least two record of appid ${e.appid} in stats.playtime_stats.game_summary`,
          ),
            this.m_mapGameSummary.set(e.appid, e));
        }),
          i.playtime_stats.games.forEach((e) => {
            (Ii(
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
        let a = (n - t) / Ra.PerYear,
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
  return p(th(Ws(), e, t));
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
    userYearInReview: z.useMemo(() => {
      if (i == 1 && a) return new Xm(a, o, s, c);
    }, [i, a, o, s, c]),
    isLoading: r,
  };
}
function ih(e, t) {
  return nh(e, t).data?.privacy_state;
}
function ah(e, t) {
  let n = Ws(),
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
var sh = z.createContext(void 0);
function ch() {
  let e = z.useContext(sh);
  return (
    Ii(e, `Cannot use YIR data loaders outside of Steam Replay page!`), e
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
        let r = await tl.GetGameAchievements(e, { appid: t, language: n });
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
  let n = Ws(),
    { data: r } = p({
      ...ph(n, e, P.LANGUAGE || `english`),
      enabled: t && !!e,
    });
  return r;
}
function hh(e) {
  let t = mh(e);
  return z.useMemo(() => {
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
  return p(bh(Ws(), e, t, T.is_support));
}
function Sh(e, t) {
  return {
    queryKey: [`YIR`, `FamilyGroup`, t],
    queryFn: async () => {
      let n = await Ul.GetFamilyGroupForUser(e, {
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
  return p(Sh(Ws(), e));
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
  return p(wh(Ws(), e, t, n));
}
var Eh = z.createContext(void 0);
function Dh() {
  let e = z.useContext(Eh);
  return (Ii(e, `Cannot use YIR page data outside of Steam Replay page!`), e);
}
function Oh(e) {
  return e?.success === 1 || e?.success === 15;
}
function kh(e) {
  let t = e ? { appid: e } : void 0,
    { data: n, isLoading: r } = Di(t),
    { data: i, isLoading: a } = wn(t);
  return {
    item: z.useMemo(
      () => (Oh(n) ? { info: n, assets: i ?? null } : void 0),
      [n, i],
    ),
    bLoading: r || a,
  };
}
function Ah(e, t = !1) {
  return p(jh(c(), nl(), e, t));
}
function jh(e, t, n, r = !1) {
  return {
    queryKey: [`YIR`, `storeitems`, n, r],
    queryFn: async () => {
      let i = await Promise.all(
          n.map(async (n) => {
            let [i, a] = await Promise.allSettled([
              e.fetchQuery(as(t, { appid: n })),
              e.fetchQuery(Qs(t, { appid: n })),
              r && e.fetchQuery(Xi(t, { appid: n })),
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
var U = {};
((U.arabic = () =>
  w(() => import(`./chunk~e848daa62e.js`), [], import.meta.url)),
  (U.brazilian = () =>
    w(() => import(`./chunk~c38582be51.js`), [], import.meta.url)),
  (U.bulgarian = () =>
    w(() => import(`./chunk~ccfa18fa3d.js`), [], import.meta.url)),
  (U.czech = () =>
    w(() => import(`./chunk~1f89df6a13.js`), [], import.meta.url)),
  (U.danish = () =>
    w(() => import(`./chunk~fc2bbceb5d.js`), [], import.meta.url)),
  (U.dutch = () =>
    w(() => import(`./chunk~da5799f81f.js`), [], import.meta.url)),
  (U.english = () =>
    w(() => import(`./chunk~2516855c32.js`), [], import.meta.url)),
  (U.finnish = () =>
    w(() => import(`./chunk~d587003d0a.js`), [], import.meta.url)),
  (U.french = () =>
    w(() => import(`./chunk~ed4ff863ac.js`), [], import.meta.url)),
  (U.german = () =>
    w(() => import(`./chunk~81227c1f72.js`), [], import.meta.url)),
  (U.greek = () =>
    w(() => import(`./chunk~8e60606527.js`), [], import.meta.url)),
  (U.hungarian = () =>
    w(() => import(`./chunk~75ebecc6b1.js`), [], import.meta.url)),
  (U.indonesian = () =>
    w(() => import(`./chunk~0098d8b0af.js`), [], import.meta.url)),
  (U.italian = () =>
    w(() => import(`./chunk~957a796a0a.js`), [], import.meta.url)),
  (U.japanese = () =>
    w(() => import(`./chunk~7629d9c89e.js`), [], import.meta.url)),
  (U.koreana = () =>
    w(() => import(`./chunk~b6086b9c24.js`), [], import.meta.url)),
  (U.latam = () =>
    w(() => import(`./chunk~7e7a28ac3e.js`), [], import.meta.url)),
  (U.malay = () =>
    w(() => import(`./chunk~4ee96a1953.js`), [], import.meta.url)),
  (U.norwegian = () =>
    w(() => import(`./chunk~da887fc950.js`), [], import.meta.url)),
  (U.polish = () =>
    w(() => import(`./chunk~c56820d9a8.js`), [], import.meta.url)),
  (U.portuguese = () =>
    w(() => import(`./chunk~e06c119adf.js`), [], import.meta.url)),
  (U.romanian = () =>
    w(() => import(`./chunk~369394c631.js`), [], import.meta.url)),
  (U.russian = () =>
    w(() => import(`./chunk~d7addddcd5.js`), [], import.meta.url)),
  (U.sc_schinese = () =>
    w(() => import(`./chunk~c3ba49c415.js`), [], import.meta.url)),
  (U.schinese = () =>
    w(() => import(`./chunk~8b81f35864.js`), [], import.meta.url)),
  (U.spanish = () =>
    w(() => import(`./chunk~050cba1d23.js`), [], import.meta.url)),
  (U.swedish = () =>
    w(() => import(`./chunk~052acd148b.js`), [], import.meta.url)),
  (U.tchinese = () =>
    w(() => import(`./chunk~bb59787bf8.js`), [], import.meta.url)),
  (U.thai = () =>
    w(() => import(`./chunk~e8f199b312.js`), [], import.meta.url)),
  (U.turkish = () =>
    w(() => import(`./chunk~6cc30891b5.js`), [], import.meta.url)),
  (U.ukrainian = () =>
    w(() => import(`./chunk~75429e242c.js`), [], import.meta.url)),
  (U.vietnamese = () =>
    w(() => import(`./chunk~96e64272d7.js`), [], import.meta.url)));
async function Mh(e) {
  if (U[e]) return await U[e]();
}
var Nh = mi(Mh),
  W = {};
((W.arabic = () =>
  w(() => import(`./chunk~2a9ee28e4f.js`), [], import.meta.url)),
  (W.brazilian = () =>
    w(() => import(`./chunk~f8d7ac36da.js`), [], import.meta.url)),
  (W.bulgarian = () =>
    w(() => import(`./chunk~aaa9c40b3c.js`), [], import.meta.url)),
  (W.czech = () =>
    w(() => import(`./chunk~a1b78a4c90.js`), [], import.meta.url)),
  (W.danish = () =>
    w(() => import(`./chunk~a91207123e.js`), [], import.meta.url)),
  (W.dutch = () =>
    w(() => import(`./chunk~435b527bf1.js`), [], import.meta.url)),
  (W.english = () =>
    w(() => import(`./chunk~d172c03b1c.js`), [], import.meta.url)),
  (W.finnish = () =>
    w(() => import(`./chunk~bfb6237bed.js`), [], import.meta.url)),
  (W.french = () =>
    w(() => import(`./chunk~2c42f52255.js`), [], import.meta.url)),
  (W.german = () =>
    w(() => import(`./chunk~ad973f8cdb.js`), [], import.meta.url)),
  (W.greek = () =>
    w(() => import(`./chunk~8d234bc224.js`), [], import.meta.url)),
  (W.hungarian = () =>
    w(() => import(`./chunk~b331777e11.js`), [], import.meta.url)),
  (W.indonesian = () =>
    w(() => import(`./chunk~618ee32f14.js`), [], import.meta.url)),
  (W.italian = () =>
    w(() => import(`./chunk~f1ffa65450.js`), [], import.meta.url)),
  (W.japanese = () =>
    w(() => import(`./chunk~76a55c4c25.js`), [], import.meta.url)),
  (W.koreana = () =>
    w(() => import(`./chunk~cdde58a513.js`), [], import.meta.url)),
  (W.latam = () =>
    w(() => import(`./chunk~8b4e3972ff.js`), [], import.meta.url)),
  (W.malay = () =>
    w(() => import(`./chunk~2595da3066.js`), [], import.meta.url)),
  (W.norwegian = () =>
    w(() => import(`./chunk~5afd320c84.js`), [], import.meta.url)),
  (W.polish = () =>
    w(() => import(`./chunk~9282844403.js`), [], import.meta.url)),
  (W.portuguese = () =>
    w(() => import(`./chunk~c163bd573d.js`), [], import.meta.url)),
  (W.romanian = () =>
    w(() => import(`./chunk~09a2963a34.js`), [], import.meta.url)),
  (W.russian = () =>
    w(() => import(`./chunk~e3d6765cd6.js`), [], import.meta.url)),
  (W.sc_schinese = () =>
    w(() => import(`./chunk~a0a45dd693.js`), [], import.meta.url)),
  (W.schinese = () =>
    w(() => import(`./chunk~3893a6c80f.js`), [], import.meta.url)),
  (W.spanish = () =>
    w(() => import(`./chunk~685c663764.js`), [], import.meta.url)),
  (W.swedish = () =>
    w(() => import(`./chunk~1ba18ad10d.js`), [], import.meta.url)),
  (W.tchinese = () =>
    w(() => import(`./chunk~6765789f0d.js`), [], import.meta.url)),
  (W.thai = () =>
    w(() => import(`./chunk~0ebe7e9b63.js`), [], import.meta.url)),
  (W.turkish = () =>
    w(() => import(`./chunk~3b6d72df14.js`), [], import.meta.url)),
  (W.ukrainian = () =>
    w(() => import(`./chunk~0c6c7fcccd.js`), [], import.meta.url)),
  (W.vietnamese = () =>
    w(() => import(`./chunk~c45856eefb.js`), [], import.meta.url)));
async function Ph(e) {
  if (W[e]) return await W[e]();
}
var Fh = mi(Ph),
  G = {};
((G.arabic = () =>
  w(() => import(`./chunk~2fe7aa2317.js`), [], import.meta.url)),
  (G.brazilian = () =>
    w(() => import(`./chunk~5e4fd7dc0f.js`), [], import.meta.url)),
  (G.bulgarian = () =>
    w(() => import(`./chunk~88092a0904.js`), [], import.meta.url)),
  (G.czech = () =>
    w(() => import(`./chunk~1b633fa830.js`), [], import.meta.url)),
  (G.danish = () =>
    w(() => import(`./chunk~5ef149ef0c.js`), [], import.meta.url)),
  (G.dutch = () =>
    w(() => import(`./chunk~6e9c13f2b2.js`), [], import.meta.url)),
  (G.english = () =>
    w(() => import(`./chunk~ab24f40556.js`), [], import.meta.url)),
  (G.finnish = () =>
    w(() => import(`./chunk~6152752886.js`), [], import.meta.url)),
  (G.french = () =>
    w(() => import(`./chunk~6b67b676cb.js`), [], import.meta.url)),
  (G.german = () =>
    w(() => import(`./chunk~fbf253d943.js`), [], import.meta.url)),
  (G.greek = () =>
    w(() => import(`./chunk~3428bc53a5.js`), [], import.meta.url)),
  (G.hungarian = () =>
    w(() => import(`./chunk~3cfb626910.js`), [], import.meta.url)),
  (G.indonesian = () =>
    w(() => import(`./chunk~f2ddcf973a.js`), [], import.meta.url)),
  (G.italian = () =>
    w(() => import(`./chunk~7bf1420f7c.js`), [], import.meta.url)),
  (G.japanese = () =>
    w(() => import(`./chunk~83852f9c50.js`), [], import.meta.url)),
  (G.koreana = () =>
    w(() => import(`./chunk~f6b67c2a99.js`), [], import.meta.url)),
  (G.latam = () =>
    w(() => import(`./chunk~0e50e7bbbb.js`), [], import.meta.url)),
  (G.malay = () =>
    w(() => import(`./chunk~c4ff866828.js`), [], import.meta.url)),
  (G.norwegian = () =>
    w(() => import(`./chunk~8b1d1eb8bd.js`), [], import.meta.url)),
  (G.polish = () =>
    w(() => import(`./chunk~62e22aebed.js`), [], import.meta.url)),
  (G.portuguese = () =>
    w(() => import(`./chunk~5bd109855c.js`), [], import.meta.url)),
  (G.romanian = () =>
    w(() => import(`./chunk~25da5b8e6d.js`), [], import.meta.url)),
  (G.russian = () =>
    w(() => import(`./chunk~0d8846738b.js`), [], import.meta.url)),
  (G.sc_schinese = () =>
    w(() => import(`./chunk~c68b2602f6.js`), [], import.meta.url)),
  (G.schinese = () =>
    w(() => import(`./chunk~724571da0c.js`), [], import.meta.url)),
  (G.spanish = () =>
    w(() => import(`./chunk~293f64f382.js`), [], import.meta.url)),
  (G.swedish = () =>
    w(() => import(`./chunk~19cb7f6cba.js`), [], import.meta.url)),
  (G.tchinese = () =>
    w(() => import(`./chunk~42b1a18a7a.js`), [], import.meta.url)),
  (G.thai = () =>
    w(() => import(`./chunk~75c28cc2a3.js`), [], import.meta.url)),
  (G.turkish = () =>
    w(() => import(`./chunk~d8552b3afe.js`), [], import.meta.url)),
  (G.ukrainian = () =>
    w(() => import(`./chunk~e6018f1bdb.js`), [], import.meta.url)),
  (G.vietnamese = () =>
    w(() => import(`./chunk~5e649757bf.js`), [], import.meta.url)));
async function Ih(e) {
  if (G[e]) return await G[e]();
}
var Lh = mi(Ih),
  K = {};
((K.arabic = () =>
  w(() => import(`./chunk~2ccce839d9.js`), [], import.meta.url)),
  (K.brazilian = () =>
    w(() => import(`./chunk~a4b02e3aec.js`), [], import.meta.url)),
  (K.bulgarian = () =>
    w(() => import(`./chunk~323e3dd751.js`), [], import.meta.url)),
  (K.czech = () =>
    w(() => import(`./chunk~ab1c53a7a8.js`), [], import.meta.url)),
  (K.danish = () =>
    w(() => import(`./chunk~d7df11c444.js`), [], import.meta.url)),
  (K.dutch = () =>
    w(() => import(`./chunk~499b67db82.js`), [], import.meta.url)),
  (K.english = () =>
    w(() => import(`./chunk~f9dcc7ae33.js`), [], import.meta.url)),
  (K.finnish = () =>
    w(() => import(`./chunk~8e3265a9b2.js`), [], import.meta.url)),
  (K.french = () =>
    w(() => import(`./chunk~65bde88826.js`), [], import.meta.url)),
  (K.german = () =>
    w(() => import(`./chunk~7558ac0638.js`), [], import.meta.url)),
  (K.greek = () =>
    w(() => import(`./chunk~80d5e98417.js`), [], import.meta.url)),
  (K.hungarian = () =>
    w(() => import(`./chunk~7cfa6da95d.js`), [], import.meta.url)),
  (K.indonesian = () =>
    w(() => import(`./chunk~f523ee529d.js`), [], import.meta.url)),
  (K.italian = () =>
    w(() => import(`./chunk~a9dcad5016.js`), [], import.meta.url)),
  (K.japanese = () =>
    w(() => import(`./chunk~8f28cd54ad.js`), [], import.meta.url)),
  (K.koreana = () =>
    w(() => import(`./chunk~4db0d8d0b7.js`), [], import.meta.url)),
  (K.latam = () =>
    w(() => import(`./chunk~ba0a093efb.js`), [], import.meta.url)),
  (K.malay = () =>
    w(() => import(`./chunk~8ee08d7313.js`), [], import.meta.url)),
  (K.norwegian = () =>
    w(() => import(`./chunk~ed2c9b4b07.js`), [], import.meta.url)),
  (K.polish = () =>
    w(() => import(`./chunk~be96f85c04.js`), [], import.meta.url)),
  (K.portuguese = () =>
    w(() => import(`./chunk~9623731241.js`), [], import.meta.url)),
  (K.romanian = () =>
    w(() => import(`./chunk~aea2485f2f.js`), [], import.meta.url)),
  (K.russian = () =>
    w(() => import(`./chunk~229cf520cb.js`), [], import.meta.url)),
  (K.sc_schinese = () =>
    w(() => import(`./chunk~f3360eb1b0.js`), [], import.meta.url)),
  (K.schinese = () =>
    w(() => import(`./chunk~95fc239b12.js`), [], import.meta.url)),
  (K.spanish = () =>
    w(() => import(`./chunk~33841c653b.js`), [], import.meta.url)),
  (K.swedish = () =>
    w(() => import(`./chunk~89ccff5b84.js`), [], import.meta.url)),
  (K.tchinese = () =>
    w(() => import(`./chunk~6ff3439c0c.js`), [], import.meta.url)),
  (K.thai = () =>
    w(() => import(`./chunk~116fb5962a.js`), [], import.meta.url)),
  (K.turkish = () =>
    w(() => import(`./chunk~30207c52bc.js`), [], import.meta.url)),
  (K.ukrainian = () =>
    w(() => import(`./chunk~7ab9abd8ae.js`), [], import.meta.url)),
  (K.vietnamese = () =>
    w(() => import(`./chunk~58fcf52d61.js`), [], import.meta.url)));
async function Rh(e) {
  if (K[e]) return await K[e]();
}
var zh = mi(Rh),
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
  let e = wo(R),
    t = wo(Nh),
    n = wo(Fh),
    r = wo(Lh),
    i = wo(zh);
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
  l_ = z.createContext({
    bIsUser: !1,
    persona_name: ``,
    avatar_url: ``,
    themeStyle: {},
  });
function u_() {
  return (0, z.useContext)(l_).bIsUser;
}
function q() {
  return (0, z.useContext)(l_).themeStyle;
}
function d_(e) {
  let t = T.logged_in,
    n = e?.content_descriptorids ?? [],
    r = u_(),
    i = c(),
    { data: a } = gn(),
    o = a ?? Fi(i),
    s =
      !!e &&
      (n.some((e) => o.setExcludedContentDescriptors.has(e)) ||
        (!!e.appid && o.mapIgnoredApps.has(e.appid)));
  return t ? !r && s : n.length > 0;
}
function f_() {
  return (0, z.useContext)(l_).persona_name;
}
function J() {
  let { persona_name: e, bIsUser: t } = (0, z.useContext)(l_);
  return z.useCallback((n, ...r) => Zl(R, n, t, e, ...r) ?? n, [t, e]);
}
function p_() {
  let { persona_name: e, bIsUser: t } = (0, z.useContext)(l_);
  return z.useCallback(
    (n, r, ...i) => {
      let a = Vh(n);
      return a && Zl(a, r, t, e, ...i);
    },
    [t, e],
  );
}
function m_(e) {
  return e < 100
    ? R.Localize(`#YIR_Percent_Low`, `1`)
    : R.Localize(`#YIR_Percent`, Math.round(e / 100).toFixed(0));
}
function h_() {
  return !0;
}
function g_() {
  let e = h_(),
    t = pn();
  return z.useCallback(
    (n) =>
      va(n, { weekday: `short`, year: e ? void 0 : `numeric`, timeZone: t }),
    [e, t],
  );
}
var Y = l(),
  __ = { index: void 0, appids: [] },
  v_ = z.createContext(__),
  y_ = z.createContext(() => {});
function b_(e) {
  let [t, n] = z.useState(__);
  return (0, Y.jsx)(y_.Provider, {
    value: n,
    children: (0, Y.jsx)(v_.Provider, { value: t, children: e.children }),
  });
}
function x_(e) {
  return typeof e.index == `number` && e.appids.length > e.index
    ? e.appids[e.index]
    : null;
}
function S_() {
  let e = z.useContext(v_);
  return { unAppID: x_(e), length: e.appids.length, index: e.index };
}
function C_() {
  let e = z.useContext(y_);
  return z.useCallback((t, n) => e({ index: t, appids: n }), [e]);
}
function w_(e, t) {
  let n = C_();
  return z.useCallback(() => n(e, t), [n, e, t]);
}
function T_(e) {
  let t = z.useContext(y_);
  return z.useCallback(() => {
    t((t) => (e >= 0 && e < t.appids.length ? { ...t, index: e } : t));
  }, [t, e]);
}
function E_() {
  let e = z.useContext(y_);
  return z.useCallback(
    (t) => {
      e((e) => (x_(e) == t ? __ : e));
    },
    [e],
  );
}
var D_ = t({
    Achievements: () => vv,
    AllFirstPlayedCtn: () => Vv,
    AllPlayedContentCtn: () => Bv,
    AllPlayedCtn: () => zv,
    Answer: () => ey,
    Appear: () => V_,
    ArrowDownCtn: () => Nv,
    ArrowUpCtn: () => Mv,
    AvatarName: () => I_,
    BackgroundImage: () => $_,
    BackgroundImageCover: () => _v,
    BadgeBarFiller: () => iy,
    BadgeBoxIntro: () => ry,
    Big: () => xv,
    BigNum: () => nv,
    BottomCtn: () => ty,
    CompareArrow: () => Av,
    CompareCtn: () => kv,
    CompareText: () => jv,
    ConclusionCtn: () => Yv,
    ContentCtn: () => cv,
    ControllerPortion: () => dv,
    DevToggle: () => Hv,
    DeviceBlock: () => iv,
    DeviceSummary: () => Pv,
    ElementFadeIn: () => ny,
    ErrorMsg: () => qv,
    FAQSection: () => Zv,
    Game0: () => Y_,
    Game1: () => X_,
    Game2: () => Z_,
    GenericBackground: () => Gv,
    GraphRelatedCtn: () => Iv,
    GridItem: () => J_,
    HardwareBlock: () => rv,
    HardwareStats: () => Fv,
    HardwareSummary: () => sv,
    HeaderCtn: () => P_,
    HeaderShareCtn: () => Jv,
    InlineUserName: () => z_,
    KeyboardPortion: () => lv,
    Large: () => pv,
    LogInCtn: () => Wv,
    LoginButtonCtn: () => Kv,
    LongestStreakStat: () => wv,
    MissingUserCtn: () => Uv,
    OverviewBlock: () => Q_,
    Question: () => $v,
    QuestionCtn: () => Qv,
    Questions: () => Xv,
    RewindHeader: () => F_,
    SectionSubTitle: () => H_,
    SectionTitle: () => B_,
    SixNumbers: () => Dv,
    Small: () => fv,
    SmallLightText: () => Ov,
    SmallText: () => Tv,
    Stat: () => uv,
    StatBox: () => Sv,
    StreakBlock: () => ev,
    SubSummaryCtn: () => Cv,
    Subtitle: () => mv,
    SubtleBorder: () => ov,
    SummaryArea: () => U_,
    SummaryBlockExtrasCtn: () => gv,
    SummaryBlockGameName: () => hv,
    SummaryBlockHugeNumCtn: () => tv,
    SummaryBlockTitle: () => yv,
    SummaryCtn: () => av,
    SummaryCtnShadow: () => G_,
    SummaryGridCtn: () => W_,
    SummaryGridSparse: () => q_,
    SummaryGridStandard: () => K_,
    Tab: () => N_,
    TabBar: () => M_,
    TabCtn: () => j_,
    ThreeNumbers: () => Ev,
    TimeRelatedCtn: () => Lv,
    TopAreaSizer: () => k_,
    TopHonorsContent: () => A_,
    TopHonorsSection: () => Rv,
    UserAvatar: () => L_,
    UserName: () => R_,
    YearInReviewContainer: () => O_,
    YearInReviewContent: () => X,
    YearSubtitle: () => bv,
    default: () => ay,
  }),
  O_ = `KoPRGmgJJqo-`,
  X = `hJYEynQkmdU-`,
  k_ = `wbSwZ4ddIBM-`,
  A_ = `_06vjX6-LZ3o-`,
  j_ = `rb53CfOiFDE-`,
  M_ = `vK7--H0SAkw-`,
  N_ = `gMb-gEMJz-o-`,
  P_ = `ubb8Zl0avoo-`,
  F_ = `f5HUQVPUdec-`,
  I_ = `skidEiMf2PY-`,
  L_ = `_6BJlyLcB6b0-`,
  R_ = `EzNrIbLqFyI-`,
  z_ = `D317B3qRUg4-`,
  B_ = `jKX9urC1MxY-`,
  V_ = `_4nPP92NisYg-`,
  H_ = `bXtzee8AefM-`,
  U_ = `zn9KZEp--BA-`,
  W_ = `xJQGByL-21g-`,
  G_ = `Ir5Sa8Wyk54-`,
  K_ = `Du1AFzeoCqQ-`,
  q_ = `DtJ29CA3-5w-`,
  J_ = `gIuYhaWQ4fc-`,
  Y_ = `fKe87BWrvfQ-`,
  X_ = `_-5OsCs7YPk8-`,
  Z_ = `Zg95Ba7p3Qw-`,
  Q_ = `_8Y3H4R2pQus-`,
  $_ = `GAtCzNnRjO8-`,
  ev = `dEuc93cpmYk-`,
  tv = `nZ9-nfKNk0k-`,
  nv = `ERwgqbs67Y0-`,
  rv = `e6T89MsSCU4-`,
  iv = `PSZWXs0q2BA-`,
  av = `ojW6P77M2CU-`,
  ov = `gq51gWeAGwg-`,
  sv = `y29Eo6crp1Y-`,
  cv = `lVezcGtu14c-`,
  lv = `XrqoWcWOWto-`,
  uv = `nuUlfFr-4go-`,
  dv = `BJLPLEcobNA-`,
  fv = `pM0nmAh-JmE-`,
  pv = `czEXrqIBjoY-`,
  mv = `V22nqpPVUDE-`,
  hv = `r7SaWklbiLk-`,
  gv = `WQbJEJwrh6A-`,
  _v = `yhKq8JqyhHU-`,
  vv = `NFRRVbS6gNQ-`,
  yv = `quOp3zDhs0Q-`,
  bv = `WtmqBEWwXUU-`,
  xv = `OiCGsb3ZVjo-`,
  Sv = `-DExq33nuLc-`,
  Cv = `iO7bySBmLDQ-`,
  wv = `rakWUwgngNs-`,
  Tv = `Ro3m9drEqnI-`,
  Ev = `L57SkFUBplo-`,
  Dv = `YLnkFjFOQOs-`,
  Ov = `_0XQzOjcNRaw-`,
  kv = `kCKbop9CpRg-`,
  Av = `_9tAN2yCIirs-`,
  jv = `kK5H6hWa6D4-`,
  Mv = `BEY87Y5nD4o-`,
  Nv = `HaiVKIU8Khw-`,
  Pv = `qg0kxFOh1tk-`,
  Fv = `qK-bv0Ju3ZE-`,
  Iv = `Tyh9FPCHRrc-`,
  Lv = `xan-F7AKHTg-`,
  Rv = `msW7t3zPawc-`,
  zv = `zWuJ9eO1deE-`,
  Bv = `HguwBviDKIo-`,
  Vv = `_2m4YMjqffsc-`,
  Hv = `GDQOIFoBCP4-`,
  Uv = `GM1A55ZEulI-`,
  Wv = `jvwbuCbEfxI-`,
  Gv = `tGzVeFXNEfc-`,
  Kv = `CTJEahoyd2c-`,
  qv = `gHS2We-nxiI-`,
  Jv = `-vTPvlHUL7g-`,
  Yv = `ofmH8EfaBy4-`,
  Xv = `fGLzTigSNnY-`,
  Zv = `_6ALXCVcszOs-`,
  Qv = `X-87SlZ9MKU-`,
  $v = `_38wDSMap-gY-`,
  ey = `bXJ94GBFl3U-`,
  ty = `DALsnbbp3sE-`,
  ny = `VgC9GOlWj28-`,
  ry = `XJWfnQSYNt8-`,
  iy = `FlPXt8CIBlI-`,
  ay = {
    YearInReviewContainer: O_,
    YearInReviewContent: X,
    TopAreaSizer: k_,
    TopHonorsContent: A_,
    TabCtn: j_,
    TabBar: M_,
    Tab: N_,
    HeaderCtn: P_,
    RewindHeader: F_,
    AvatarName: I_,
    UserAvatar: L_,
    UserName: R_,
    InlineUserName: z_,
    SectionTitle: B_,
    Appear: V_,
    SectionSubTitle: H_,
    SummaryArea: U_,
    SummaryGridCtn: W_,
    SummaryCtnShadow: G_,
    SummaryGridStandard: K_,
    SummaryGridSparse: q_,
    GridItem: J_,
    Game0: Y_,
    Game1: X_,
    Game2: Z_,
    OverviewBlock: Q_,
    BackgroundImage: $_,
    StreakBlock: ev,
    SummaryBlockHugeNumCtn: tv,
    BigNum: nv,
    HardwareBlock: rv,
    DeviceBlock: iv,
    SummaryCtn: av,
    SubtleBorder: ov,
    HardwareSummary: sv,
    ContentCtn: cv,
    KeyboardPortion: lv,
    Stat: uv,
    ControllerPortion: dv,
    Small: fv,
    Large: pv,
    Subtitle: mv,
    SummaryBlockGameName: hv,
    SummaryBlockExtrasCtn: gv,
    BackgroundImageCover: _v,
    Achievements: vv,
    SummaryBlockTitle: yv,
    YearSubtitle: bv,
    Big: xv,
    StatBox: Sv,
    SubSummaryCtn: Cv,
    LongestStreakStat: wv,
    SmallText: Tv,
    ThreeNumbers: Ev,
    SixNumbers: Dv,
    SmallLightText: Ov,
    CompareCtn: kv,
    CompareArrow: Av,
    CompareText: jv,
    ArrowUpCtn: Mv,
    ArrowDownCtn: Nv,
    DeviceSummary: Pv,
    HardwareStats: Fv,
    GraphRelatedCtn: Iv,
    TimeRelatedCtn: Lv,
    TopHonorsSection: Rv,
    AllPlayedCtn: zv,
    AllPlayedContentCtn: Bv,
    AllFirstPlayedCtn: Vv,
    DevToggle: Hv,
    MissingUserCtn: Uv,
    LogInCtn: Wv,
    GenericBackground: Gv,
    LoginButtonCtn: Kv,
    ErrorMsg: qv,
    HeaderShareCtn: Jv,
    ConclusionCtn: Yv,
    Questions: Xv,
    FAQSection: Zv,
    QuestionCtn: Qv,
    Question: $v,
    Answer: ey,
    BottomCtn: ty,
    ElementFadeIn: ny,
    BadgeBoxIntro: ry,
    BadgeBarFiller: iy,
  },
  oy = `C5cdndOEHt4-`,
  sy = `-q0-kXkWN9U-`,
  cy = `TB8Ftf6yNUE-`,
  ly = `EOEvelxRXZw-`,
  uy = `vCsbBq7knm8-`,
  dy = `_4hgWT24Sdeo-`,
  fy = `_7yIZmyI8qQk-`,
  py = `omJUDnVgRY4-`,
  my = `wqTsvDkdQRg-`,
  hy = `HJLVd81kwnI-`,
  gy = `TwAc8u5RE4g-`,
  _y = `_2dQ-fNFsnAo-`,
  vy = `nDPpMWikWgc-`,
  yy = `_6qFV0psARg8-`,
  by = `Di5p4F2SHus-`,
  xy = `p34Ga9p9kxA-`,
  Sy = `_6dXzDQP9ksI-`,
  Cy = `_8-zKy--vwkI-`,
  wy = `iKMpkIE2CyM-`,
  Ty = `S9H5nON1Nw0-`,
  Ey = `-c1ti2-skhU-`,
  Dy = `uvBrTjofppg-`,
  Z = {
    Section: oy,
    Windows: sy,
    Linux: cy,
    Controller: ly,
    Mac: uy,
    Deck: dy,
    CapRow: fy,
    PlatformContentsCtn: py,
    VR: my,
    SectionTitle: hy,
    BackgroundImage: gy,
    Playtest: _y,
    BG_Playtest: vy,
    Demo: yy,
    BG_Demo: by,
    GameImage: xy,
    SectionSubTitle: Sy,
    ElementFadeIn: Cy,
    StatsRow: wy,
    StatBlock: Ty,
    BigNum: Ey,
    StatDescription: Dy,
    DemoSash: `WwCfmup4R-o-`,
    BadgeBoxIntro: `XGtVJBBHDi4-`,
    BadgeBarFiller: `_-0RNm-50A-I-`,
    Appear: `_52VPPk07IBk-`,
  },
  Q = e(o(), 1);
function $(e) {
  let { className: t, children: n, strClassOnFirstVisible: r } = e,
    [i, a] = (0, z.useState)(!1);
  return (0, Y.jsx)(fs, {
    trigger: `once`,
    onVisibilityChange: a,
    className: (0, Q.default)(t, i ? r || `NowVisible` : void 0),
    children: n,
  });
}
function Oy(e) {
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
    } = (0, z.useMemo)(() => Hm(l, t), [l, t]),
    { rgResults: p, nTotalResultCount: m } = (0, z.useMemo)(
      () => Rm(n, t, 5, f),
      [n, t, f, 5],
    ),
    h = (0, z.useMemo)(() => p.map((e) => e.parent_appid || e.appid), [p]),
    [g, _] = (0, z.useState)(
      p.length > 0 ? p[0].parent_appid || p[0].appid : 0,
    ),
    { isLoading: v, data: y } = Ah(h, t == `vr`),
    b = ky(p, t, v, y),
    ee =
      t === `overall` || t === `controller` || t == `demo` || t == `playtest`;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(r, t, py),
    children: [
      (0, Y.jsx)(`div`, { className: hy, children: a }),
      !!i && (0, Y.jsx)(`img`, { alt: ``, src: i, className: `TwAc8u5RE4g-` }),
      t === `vr` && g > 0 && (0, Y.jsx)(Ay, { appid: g }),
      (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(X, wy),
        children: [
          (0, Y.jsxs)(`div`, {
            className: Ty,
            children: [
              (0, Y.jsx)(`div`, { className: Ey, children: D(u) }),
              (0, Y.jsx)(`div`, {
                className: Dy,
                children: R.LocalizePlural(`#YIR_NewLine_Games`, u),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Ty,
            children: [
              (0, Y.jsx)(`div`, { className: Ey, children: D(d) }),
              (0, Y.jsx)(`div`, {
                className: Dy,
                children: R.LocalizePlural(`#YIR_NewLine_Session`, d),
              }),
            ],
          }),
          !ee && (0, Y.jsx)(Py, { percentVal: f, subToken: `#YIR_NewLine` }),
        ],
      }),
      !!o && (0, Y.jsx)(`div`, { className: `_6dXzDQP9ksI-`, children: o }),
      !o &&
        !!c &&
        m > 5 &&
        b > 0 &&
        (0, Y.jsx)(`div`, {
          className: `_6dXzDQP9ksI-`,
          children: R.Localize(c, b),
        }),
      !!s && (0, Y.jsx)(`div`, { className: void 0, children: s }),
      (0, Y.jsx)($, {
        className: kg,
        children: (0, Y.jsx)(jy, {
          rgGamePercentages: p,
          category: t,
          fnOnHoverApp: _,
        }),
      }),
    ],
  });
}
function ky(e, t, n, r) {
  return (0, z.useMemo)(
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
function Ay(e) {
  let { appid: t } = e,
    { data: n } = fa({ appid: t }),
    r = al();
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
    src: Bn(a),
    className: (0, Q.default)({ [xy]: !0, [void 0]: o }),
  });
}
function jy(e) {
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
  return (0, Y.jsx)(j, {
    "flow-children": `grid`,
    className: (0, Q.default)(X, fy, Ug),
    children: t.map((e, t) =>
      (0, Y.jsx)(
        My,
        {
          appid: e.appid,
          strInfo:
            e.nPercentagex100 === void 0 ? void 0 : m_(e.nPercentagex100),
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
function My(e) {
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
    d = w_(i, r);
  if (u) return null;
  if (!l || !l.info.visible)
    return s && (c == 1 || c == 12)
      ? (0, Y.jsx)(My, { ...e, nParentAppID: s, eChildType: 0 })
      : null;
  let f = Qi(l.assets, `library_capsule`);
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
                      children: R.Localize(`#YIR_Played_Demo`),
                    }),
                  s &&
                    c == 12 &&
                    (0, Y.jsx)(`div`, {
                      className: `pvLpzVIEyJQ-`,
                      children: R.Localize(`#YIR_Played_PlayTest`),
                    }),
                ],
              }),
              (0, Y.jsx)(`img`, { loading: a, src: f, alt: l.info.name }),
            ],
          })
        : (0, Y.jsx)(Ny, { item: l.info }),
      !!n && (0, Y.jsx)(`div`, { className: `x6rpHBjxzTg-`, children: n }),
    ],
  });
}
function Ny(e) {
  let { item: t } = e;
  return (0, Y.jsxs)(`div`, {
    className: Jg,
    children: [
      (0, Y.jsx)(`img`, { src: Uh, alt: t.name || `` + t.appid }),
      (0, Y.jsx)(`div`, { className: Yg, children: t.name }),
    ],
  });
}
function Py(e) {
  let { percentVal: t, subToken: n } = e,
    r = m_(t),
    i = `${n}_Percent`;
  return (0, Y.jsxs)(`div`, {
    className: Ty,
    children: [
      (0, Y.jsx)(`div`, { className: Ey, children: r }),
      (0, Y.jsx)(`div`, { className: Dy, children: R.Localize(i) }),
    ],
  });
}
var Fy = `_1zHgawHGZQ8-`,
  Iy = `maZLLs320ng-`,
  Ly = `FBNO-i1eCDU-`,
  Ry = `lvInkGaT6tc-`,
  zy = `CdHUHmprZLc-`,
  By = `_0Di7EGWRhhg-`,
  Vy = `xhff4YTQuUs-`,
  Hy = `KxbX2VmSNpY-`;
function Uy(e) {
  let { userYearInReview: t, nYear: n } = e,
    r = q(),
    i = (0, z.useMemo)(() => {
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
    o = J(),
    s = [
      {
        name: R.Localize(`#YIR_FirstTime_Tab_MonthlyGrid`),
        key: `firsttimebymonth`,
        contents: (0, Y.jsx)(E, {
          children: (0, Y.jsx)(`div`, {
            className: Fy,
            children: (0, Y.jsx)(qy, { userYearInReview: t, nYear: n }),
          }),
        }),
      },
      {
        name: R.Localize(`#YIR_FirstTime_Tab_Grid`),
        key: `firsttimegrid`,
        contents: (0, Y.jsx)(E, {
          children: (0, Y.jsx)(Ky, { userYearInReview: t, nYear: n }),
        }),
      },
    ];
  return i.length == 0
    ? null
    : (0, Y.jsxs)($, {
        className: Vv,
        children: [
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)(By, r.AllGamesBGImage),
          }),
          (0, Y.jsxs)(`div`, {
            className: X,
            children: [
              (0, Y.jsx)(`div`, {
                className: B_,
                children: o(`#YIR_FirstTime_Title`, i.length),
              }),
              a
                ? (0, Y.jsx)(tn, {
                    size: `medium`,
                    position: `center`,
                    string: Jn.Localize(`#Loading`),
                  })
                : (0, Y.jsx)(`div`, {
                    className: j_,
                    children: (0, Y.jsx)(Wy, {
                      className: M_,
                      classNameTab: (0, Q.default)(N_, r.Tab),
                      tabs: s,
                    }),
                  }),
            ],
          }),
        ],
      });
}
function Wy(e) {
  let { className: t, classNameTab: n, tabs: r } = e,
    [i, a] = (0, z.useState)(r[0]?.key);
  if (!r.length) return null;
  let o = r.find(({ key: e }) => e === i) ?? r[0];
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(j, {
        className: (0, Q.default)(Vy, t),
        navEntryPreferPosition: co.FIRST,
        children: r.map((e) =>
          (0, Y.jsx)(
            Gy,
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
      (0, Y.jsx)(j, { children: o.contents }),
    ],
  });
}
function Gy(e) {
  let { className: t, active: n, onActivate: r, children: i } = e;
  return (0, Y.jsx)(j, {
    className: (0, Q.default)(Hy, n && `_2Nz6-T0g-zc-`, n && `ActiveTab`, t),
    onActivate: r,
    children: i,
  });
}
function Ky(e) {
  let { nYear: t, userYearInReview: n } = e,
    r = n.GetPlayTimeStats().game_summary,
    i = J(),
    [a, o] = z.useState(!1),
    { bShouldShowMore: s, rgGamesInOrderOfPlaytime: c } = (0, z.useMemo)(() => {
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
      (0, Y.jsx)(Yy, {
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
            children: R.Localize(`#YIR_ShowMore`),
          }),
        }),
    ],
  });
}
function qy(e) {
  let { nYear: t, userYearInReview: n } = e,
    r = n.GetRawStats().playtime_stats.months;
  return (0, Y.jsx)(Y.Fragment, {
    children: r
      .filter((e) => e.stats.total_sessions > 0)
      .map((e) =>
        (0, Y.jsx)(
          Jy,
          { month: e, userYearInReview: n, nYear: t },
          `outermonth` + e.rtime_month,
        ),
      ),
  });
}
function Jy(e) {
  let { nYear: t, userYearInReview: n, month: r } = e,
    i = h_(),
    a = J(),
    [o, s] = z.useState(!1),
    { bShouldShowMore: c, rgGameStats: l } = (0, z.useMemo)(() => {
      let e = r.game_summary
          .filter((e) => {
            let t = n.GetGameSummaryForApp(e.appid);
            return (
              Ii(
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
      className: Iy,
      children: [
        (0, Y.jsx)(`div`, {
          className: Ry,
          children: i
            ? R.Localize(
                `#YIR_MonthlyGrid_MonthSingular_${u.getUTCMonth() + 1}`,
              )
            : Xr(u),
        }),
        (0, Y.jsx)(Yy, {
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
              children: R.Localize(`#YIR_ShowMore`),
            }),
          }),
      ],
    },
    `monthgroup_` + r.rtime_month,
  );
}
function Yy(e) {
  let { nYear: t, rgGamesInOrderOfPlaytime: n, strTooltip: r } = e,
    i = C_(),
    { data: a } = Ah(
      (0, z.useMemo)(() => n.map((e) => e.nParentAppID || e.appid), [n]),
    ),
    o = n.filter((e) => a?.has(e.nParentAppID || e.appid)),
    s = o.map((e) => e.appid),
    c = o.map((e, n) =>
      (0, Y.jsx)(
        Xy,
        {
          appid: e.nParentAppID || e.appid,
          bNewThisYear: e.bNewThisYear,
          fnOnClick: () => i(n, s),
          nYear: t,
          strPercentage:
            e.nPercentagex100 === void 0 ? void 0 : m_(e.nPercentagex100),
          strTooltip: r,
          bIsDemo: e.bIsDemo,
          bIsPlayTest: e.bIsPlaytest,
        },
        e.appid,
      ),
    );
  return (0, Y.jsx)(j, {
    "flow-children": `grid`,
    className: (0, Q.default)(Mg, Ly),
    children: c,
  });
}
function Xy(e) {
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
    u = Ir(l && Zt(l.info)) || ``,
    d = q();
  if (!l || !l.info.visible) return null;
  let f = Qi(l.assets, `library_capsule`);
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)({ [Eg]: !0, [zy]: !0, [void 0]: r }),
    onClick: (e) => {
      i && (e.preventDefault(), i());
    },
    children: (0, Y.jsx)(Ie, {
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
                    children: R.Localize(`#YIR_FirstTime_Played`, t),
                  }),
                !!s &&
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(
                      `qEnvz1uXbQU-`,
                      d.DemoPlayDetails,
                    ),
                    children: R.Localize(`#YIR_Played_Demo`),
                  }),
                !!c &&
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(
                      `pvLpzVIEyJQ-`,
                      d.PlaytestPlayDetails,
                    ),
                    children: R.Localize(`#YIR_Played_PlayTest`),
                  }),
              ],
            }),
          f
            ? (0, Y.jsx)(`img`, { alt: ``, loading: `lazy`, src: f })
            : (0, Y.jsx)(Ny, { item: l.info }),
          !!a &&
            (0, Y.jsx)(xa, {
              toolTipContent: o,
              className: `x6rpHBjxzTg-`,
              children: a,
            }),
        ],
      }),
    }),
  });
}
var Zy = `-mIgF6AA5LY-`,
  Qy = `Vi83-LkMtoI-`,
  $y = `YXohyZxdvfQ-`,
  eb = `-XC-c1uz0Ko-`,
  tb = `zZFozEpTZI0-`,
  nb = `xUqkAY4Oj3o-`,
  rb = `rwGMj4tdqJs-`,
  ib = `-ZlfMJZNVtw-`,
  ab = `F6KTgf9lssw-`,
  ob = 9e3,
  sb = 1,
  cb = 50;
function lb(e) {
  let t = e
    .GetPlayTimeStats()
    .games.map((t) => e.GetGameSummaryForApp(t.appid))
    .filter((e) => e && (e.parent_appid || (!e.demo && !e.playtest)));
  if (t.length == 0) return { eType: `basic` };
  let n = t[0].total_playtime_percentagex100 ?? 0;
  return e.GetPlayTimeStats().game_summary.length < sb || n >= ob
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
              .slice(0, cb)
              .map((e) => e.parent_appid || e.appid),
          ),
        ),
      };
}
var ub = `ugL-G4FTy2w-`,
  db = `c8-WfKGtCq8-`,
  fb = `OsIwsZtSRZQ-`,
  pb = `_1RZIc4-Ydv8-`,
  mb = `_4Q73gvvwSoU-`,
  hb = `_6LO5BaihEDc-`,
  gb = `bV66XEiP5a8-`;
function _b(e) {
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
    className: fl(ub, n),
    children: (0, Y.jsx)(`div`, {
      className: fl(db, !o && `dXaS0YLAPWg-`),
      children: (0, Y.jsx)(`div`, {
        className: fl(fb, s && `dKtBrMD331I-`, r),
        children: (0, Y.jsx)(`div`, {
          className: fl({ [pb]: !0, [hb]: !a, [gb]: o }, i),
          children: t,
        }),
      }),
    }),
  });
}
function vb(e) {
  return (0, Y.jsx)(`img`, {
    className: fl(mb, e.className),
    src: e.strImageURL,
    alt: ``,
  });
}
function yb(e) {
  let { userYearInReview: t, children: n } = e,
    r = (0, z.useMemo)(() => lb(t), [t]);
  return r.eType == `basic`
    ? (0, Y.jsx)(Cb, { children: n })
    : r.eType == `single`
      ? (0, Y.jsx)(Sb, { appid: r.appid, children: n })
      : (0, Y.jsx)(bb, { rgAppIDs: r.rgAppIDs, children: n });
}
function bb(e) {
  let { rgAppIDs: t, children: n } = e,
    r = q(),
    { data: i } = Ah(t),
    { rgStoreItems: a, rgImageURLs: o } = (0, z.useMemo)(() => {
      if (!i) return { rgStoreItems: null, rgImageURLs: null };
      let e = t.map((e) => i.get(e)).filter((e) => !!e && !!e.assets);
      return { rgStoreItems: e, rgImageURLs: xb(e) };
    }, [t, i]);
  return a
    ? (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(_b, {
            className: (0, Q.default)(Zy, r.ImagesCtn),
            squareClassName: Qy,
            gridClassName: (0, Q.default)({
              [$y]: !0,
              [nb]: a.length <= 10,
              [tb]: a.length <= 20,
              [eb]: a.length <= 40,
            }),
            bFadeInTiles: !0,
            bDrift: !0,
            children: o.map((e, t) =>
              (0, Y.jsx)(vb, { strImageURL: e, className: rb }, t),
            ),
          }),
          n,
        ],
      })
    : (0, Y.jsx)(Cb, { children: n });
}
function xb(e) {
  let t = (e) => (
      Ii(e.assets, `Cannot get image without assets`),
      Qi(e.assets, `library_hero`, `main_capsule`)
    ),
    n = (e) => (
      Ii(e.assets, `Cannot get image without assets`),
      Qi(e.assets, `raw_page_background`, `main_capsule`)
    ),
    r = e.map(t);
  return (
    e.length <= 50 && r.push(...e.map(n)),
    e.length <= 20 && r.push(...e.map(t)),
    r
  );
}
function Sb(e) {
  let { appid: t, children: n } = e,
    { item: r } = kh(t),
    i = q();
  return r
    ? (0, Y.jsxs)(Y.Fragment, {
        children: [
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)(Zy, i.ImagesCtn),
            children: (0, Y.jsx)(`div`, {
              className: (0, Q.default)(ib, i.SingleGame),
              children: (0, Y.jsx)(`div`, {
                className: (0, Q.default)(ab, i.ImageTint),
                children: (0, Y.jsx)(`img`, {
                  alt: ``,
                  src: Qi(r.assets, `library_hero`),
                }),
              }),
            }),
          }),
          n,
        ],
      })
    : (0, Y.jsx)(Cb, { children: n });
}
function Cb(e) {
  return (0, Y.jsx)(`div`, { className: void 0, children: e.children });
}
var wb = t({
    Active: () => Nx,
    Appear: () => Sx,
    BadgeBarFiller: () => Vb,
    BadgeBox: () => Eb,
    BadgeBoxIntro: () => Db,
    BadgeContents: () => Ob,
    BadgeDesc: () => Gb,
    BadgeGetBtn: () => Kb,
    BadgeImgCtn: () => Wb,
    BadgeName: () => Ub,
    BadgeRarity_common: () => kb,
    BadgeRarity_epic: () => Nb,
    BadgeRarity_legendary: () => Pb,
    BadgeRarity_rare: () => Mb,
    BadgeRarity_uncommon: () => jb,
    DataBox: () => Lx,
    DataBoxArrow: () => Bx,
    DataBoxesContainer: () => Fx,
    Disabled: () => ox,
    ElementFadeIn: () => Hx,
    FillerBar: () => zb,
    FillerDots: () => ax,
    FlavorLabel: () => Ix,
    GameNewnessComparisonContainer: () => kx,
    GameNewnessDataCnt: () => Ax,
    GameNewnessTitle: () => Vx,
    Glitter: () => px,
    GlitterBox: () => dx,
    GlitterSecond: () => fx,
    GraphBox: () => Xb,
    HalfwidthColumn: () => Jb,
    NumbersLabel: () => rx,
    NumbersRow: () => nx,
    NumbersRowsCnt: () => tx,
    NumbersValue: () => ix,
    PercentageDescriptionLabel: () => zx,
    PercentageLabel: () => Rx,
    PlayBehaviorContainer: () => lx,
    PlayBehaviorSectionSubTitle: () => gx,
    PlayNewnessContainer: () => Ox,
    PlayerBehaviorProgressCnt: () => _x,
    ProgressBar: () => Ex,
    ProgressBarFilled: () => ux,
    ProgressBarWrapper: () => vx,
    ProgressIcon: () => Cx,
    ProgressIconSVG: () => wx,
    ProgressLabel: () => Dx,
    ProgressLabelsCnt: () => yx,
    ProgressRightSide: () => Tx,
    ProgressSteamAvgLabel: () => bx,
    RadarChartLegend: () => ex,
    RadarText: () => Zb,
    RadarTextContainer: () => Qb,
    RarityBar: () => Lb,
    RarityBarSegment: () => Rb,
    RarityDesc: () => Hb,
    RarityInfoCtn: () => Ib,
    RarityText: () => Ab,
    RightCol: () => Fb,
    RightSideContainer: () => Px,
    SectionDesc: () => cx,
    SectionLabel: () => sx,
    SegmentCap: () => Bb,
    SpiderAndNumbersCnt: () => qb,
    SpiderResponsiveContainer: () => $b,
    SpidergraphContainer: () => Yb,
    TopHonorsCtn: () => Tb,
    WheelArc: () => Mx,
    WheelChart: () => jx,
    default: () => Ux,
    glitterMove: () => mx,
    glitterMove2: () => hx,
    progressBar: () => xx,
  }),
  Tb = `_8MMZZOMlBHA-`,
  Eb = `kjlSrD84bUs-`,
  Db = `CnBmGiFtNT0-`,
  Ob = `_2H6regBFr4A-`,
  kb = `xMSIrz8QNm4-`,
  Ab = `IveJy5QZXYo-`,
  jb = `_571YhehUkx4-`,
  Mb = `-nnBxrwGwuc-`,
  Nb = `J6oM-PiOKAA-`,
  Pb = `KSTPULVW5bQ-`,
  Fb = `gUjbsGPoR4E-`,
  Ib = `x3GiOuwvZgI-`,
  Lb = `_2z5eG5DUYNA-`,
  Rb = `OcZxMthyO1Q-`,
  zb = `dogr49iCxO0-`,
  Bb = `xIw4nr0zmDU-`,
  Vb = `hrrpNs-t5os-`,
  Hb = `d2u0-poYQ6Q-`,
  Ub = `RP9sAnKzwq4-`,
  Wb = `YCkJBRdHX74-`,
  Gb = `wsZ4D5OBXxA-`,
  Kb = `VbvjmHdYZUs-`,
  qb = `PMUu6aR8bT0-`,
  Jb = `NTDxIz9hpZQ-`,
  Yb = `-LL-rRwXHvQ-`,
  Xb = `udPMl22PhSc-`,
  Zb = `URBSKU-uKts-`,
  Qb = `p7VrPSl4acM-`,
  $b = `xPpu-EhMrzM-`,
  ex = `e5EFq580oLg-`,
  tx = `lkrsOd-pN7M-`,
  nx = `gdGCZIz-fdM-`,
  rx = `_2AcQ3eLZpqQ-`,
  ix = `aBL1S716KHI-`,
  ax = `_9kf74DPWJHs-`,
  ox = `MvmFmRp0gao-`,
  sx = `qFjJzWZ5t6U-`,
  cx = `lBH0gHt22Fc-`,
  lx = `EcABZ-m3zvk-`,
  ux = `ntvLkao7PkE-`,
  dx = `NJBuZKTDzAE-`,
  fx = `n62MYB6VP4U-`,
  px = `FVHCXXtwkMc-`,
  mx = `FZJGl5gD9TA-`,
  hx = `_9WKfAIJ7GYg-`,
  gx = `_0jnwL-HxS8o-`,
  _x = `r-PiY57GlY8-`,
  vx = `E8dRIfC8z8U-`,
  yx = `qffLKsSHu0M-`,
  bx = `aKnZAgIhrq0-`,
  xx = `MAhYpOkM9Zs-`,
  Sx = `_4xkdBuilUW8-`,
  Cx = `_1paAUH9-U80-`,
  wx = `QwRTqCa5RJI-`,
  Tx = `_54a2wTltSQo-`,
  Ex = `ACraqmlP6JQ-`,
  Dx = `Em-W-2-scx4-`,
  Ox = `_93HCZZaF-GQ-`,
  kx = `Lj6zc-CzUcI-`,
  Ax = `PPF1V2vagl4-`,
  jx = `Os1d9o6QJ48-`,
  Mx = `ncAmk-wH-LE-`,
  Nx = `DXcvT92GGo8-`,
  Px = `AaHMu4lT7dk-`,
  Fx = `xBfnjHBm-1E-`,
  Ix = `mJeXM2yr-2Q-`,
  Lx = `RRGyT0y5ixE-`,
  Rx = `GKnUCAKm6-M-`,
  zx = `_3mHbUC3OZ1w-`,
  Bx = `eeacvOJIz2s-`,
  Vx = `TUUDCjzjuow-`,
  Hx = `f5WBpNOlO1E-`,
  Ux = {
    TopHonorsCtn: Tb,
    BadgeBox: Eb,
    BadgeBoxIntro: Db,
    BadgeContents: Ob,
    BadgeRarity_common: kb,
    RarityText: Ab,
    BadgeRarity_uncommon: jb,
    BadgeRarity_rare: Mb,
    BadgeRarity_epic: Nb,
    BadgeRarity_legendary: Pb,
    RightCol: Fb,
    RarityInfoCtn: Ib,
    RarityBar: Lb,
    RarityBarSegment: Rb,
    FillerBar: zb,
    SegmentCap: Bb,
    BadgeBarFiller: Vb,
    RarityDesc: Hb,
    BadgeName: Ub,
    BadgeImgCtn: Wb,
    BadgeDesc: Gb,
    BadgeGetBtn: Kb,
    SpiderAndNumbersCnt: qb,
    HalfwidthColumn: Jb,
    SpidergraphContainer: Yb,
    GraphBox: Xb,
    RadarText: Zb,
    RadarTextContainer: Qb,
    SpiderResponsiveContainer: $b,
    RadarChartLegend: ex,
    NumbersRowsCnt: tx,
    NumbersRow: nx,
    NumbersLabel: rx,
    NumbersValue: ix,
    FillerDots: ax,
    Disabled: ox,
    SectionLabel: sx,
    SectionDesc: cx,
    PlayBehaviorContainer: lx,
    ProgressBarFilled: ux,
    GlitterBox: dx,
    GlitterSecond: fx,
    Glitter: px,
    glitterMove: mx,
    glitterMove2: hx,
    PlayBehaviorSectionSubTitle: gx,
    PlayerBehaviorProgressCnt: _x,
    ProgressBarWrapper: vx,
    ProgressLabelsCnt: yx,
    ProgressSteamAvgLabel: bx,
    progressBar: xx,
    Appear: Sx,
    ProgressIcon: Cx,
    ProgressIconSVG: wx,
    ProgressRightSide: Tx,
    ProgressBar: Ex,
    ProgressLabel: Dx,
    PlayNewnessContainer: Ox,
    GameNewnessComparisonContainer: kx,
    GameNewnessDataCnt: Ax,
    WheelChart: jx,
    WheelArc: Mx,
    Active: Nx,
    RightSideContainer: Px,
    DataBoxesContainer: Fx,
    FlavorLabel: Ix,
    DataBox: Lx,
    PercentageLabel: Rx,
    PercentageDescriptionLabel: zx,
    DataBoxArrow: Bx,
    GameNewnessTitle: Vx,
    ElementFadeIn: Hx,
  },
  Wx = ({
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
    let [u, d] = (0, z.useState)(0),
      f = z.useRef(null),
      p = (e) => (e < 0.5 ? 4 * e ** 3 : 1 - (-2 * e + 2) ** 3 / 2);
    return (
      (0, z.useEffect)(() => {
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
        ? (0, Y.jsxs)(Y.Fragment, { children: [`\xA0`, ul(u), `\xA0`] })
        : (0, Y.jsx)(Y.Fragment, { children: ul(u) })
    );
  };
function Gx() {
  typeof ne == `function`
    ? ne({
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
Gx();
var Kx = () => {
    let e = q();
    return (0, Y.jsxs)(`svg`, {
      className: (0, Q.default)(wx, void 0, e.IconStreak),
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
  qx = () => {
    let e = q();
    return (0, Y.jsxs)(`svg`, {
      className: (0, Q.default)(wx, void 0, e.IconGamesPlayed),
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
  Jx = () => {
    let e = q();
    return (0, Y.jsx)(`svg`, {
      className: (0, Q.default)(wx, void 0, e.IconAchievement),
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
function Yx(e) {
  let { userYearInReview: t } = e,
    n = q();
  return (0, Y.jsx)($, {
    className: (0, Q.default)(Rv, n.TopHonorsSection),
    children: (0, Y.jsx)(`div`, {
      className: (0, Q.default)(X, A_),
      children: (0, Y.jsxs)(`div`, {
        className: Tb,
        children: [
          (0, Y.jsx)(Xx, { userYearInReview: t }),
          (0, Y.jsxs)(`div`, {
            className: qb,
            children: [
              (0, Y.jsx)(eS, { userYearInReview: t }),
              (0, Y.jsx)(iS, { userYearInReview: t }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Xx(e) {
  let { userYearInReview: t } = e;
  t.GetYear();
  let n = J(),
    r = q(),
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
  let [d, f] = z.useState(!1),
    [p, m] = z.useState(!1),
    [h, g] = z.useState(!1),
    _ = z.useCallback(async (e) => {
      e && (f(!0), m(!0), g(!0));
    }, []),
    v = (0, Y.jsx)(Wx, {
      endValue: i,
      maxValue: (i * 100) / s,
      duration: 2e3,
      startAnimation: d,
      delay: 500,
    }),
    y = (0, Y.jsx)(Wx, {
      endValue: a,
      maxValue: (a * 100) / c,
      duration: 2e3,
      startAnimation: p,
      delay: 700,
    }),
    b = (0, Y.jsx)(Wx, {
      endValue: o,
      maxValue: (o * 100) / l,
      duration: 2e3,
      startAnimation: h,
      delay: 900,
    });
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(lx, r.PlayBehaviorContainer),
    children: [
      (0, Y.jsx)(`div`, {
        className: B_,
        children: n(`#YIR_Compare_Title_Label`),
      }),
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(H_, gx),
        children: n(`#YIR_Compare_Subtitle_Label`),
      }),
      (0, Y.jsxs)(fs, {
        onVisibilityChange: _,
        children: [
          (0, Y.jsx)(Zx, {
            progressLabel: n(
              i == 1
                ? `#YIR_Compare_PlayerProgress_Achievements_Single`
                : `#YIR_Compare_PlayerProgress_Achievements_Label`,
              v,
            ),
            userPercent: s,
            steamAverage: t.GetPlayTimeStats().by_numbers?.achievements_avg,
            progressIcon: (0, Y.jsx)(Jx, {}),
          }),
          (0, Y.jsx)(Zx, {
            progressLabel: n(
              a == 1
                ? `#YIR_Compare_PlayerProgress_PlayedGames_Single`
                : `#YIR_Compare_PlayerProgress_PlayedGames_Label`,
              y,
            ),
            userPercent: c,
            steamAverage: t.GetPlayTimeStats().by_numbers?.games_played_avg,
            progressIcon: (0, Y.jsx)(qx, {}),
          }),
          u &&
            (0, Y.jsx)(Zx, {
              progressLabel: n(
                o == 1
                  ? `#YIR_Compare_PlayerProgress_LongestStreak_Single`
                  : `#YIR_Compare_PlayerProgress_LongestStreak_Label`,
                b,
              ),
              userPercent: l,
              steamAverage: t.GetPlayTimeStats().by_numbers?.game_streak_avg,
              progressIcon: (0, Y.jsx)(Kx, {}),
            }),
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: Ox,
        children: (0, Y.jsx)($x, { userYearInReview: t }),
      }),
    ],
  });
}
function Zx(e) {
  let {
      progressLabel: t,
      steamAverage: n,
      progressIcon: r,
      userPercent: i,
    } = e,
    a = q();
  return (
    (i = Ds(i, 0, 100)),
    (0, Y.jsxs)($, {
      className: _x,
      children: [
        (0, Y.jsx)(`div`, { className: Cx, children: r }),
        (0, Y.jsxs)(`div`, {
          className: Tx,
          children: [
            (0, Y.jsx)(`div`, {
              className: (0, Q.default)(Dx, a.ProgressLabel),
              children: t,
            }),
            (0, Y.jsx)(`div`, {
              className: Ex,
              children: (0, Y.jsx)(`div`, {
                className: vx,
                children: (0, Y.jsx)(`div`, {
                  className: (0, Q.default)(
                    ux,
                    a.ProgressBarFilled,
                    a.ProgressBarFilledGradient,
                  ),
                  style: {
                    clipPath:
                      `polygon(0% 0, ` + i + `% 0%, ` + i + `% 100%, 0% 100%)`,
                  },
                  children: (0, Y.jsxs)(`div`, {
                    className: dx,
                    children: [
                      (0, Y.jsx)(`div`, { className: px }),
                      (0, Y.jsx)(`div`, { className: (0, Q.default)(px, fx) }),
                    ],
                  }),
                }),
              }),
            }),
            (0, Y.jsx)(`div`, {
              className: yx,
              children:
                n &&
                (0, Y.jsx)(`div`, {
                  className: `aKnZAgIhrq0-`,
                  children: R.Localize(
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
var Qx = {
  NewActive: `#YIR_Compare_NewGames_Flavor`,
  UsedActive: `#YIR_Compare_ComfortGames_Flavor`,
  OldActive: `#YIR_Compare_OldGames_Flavor`,
};
function $x(e) {
  let { userYearInReview: t } = e,
    n = t.GetYear(),
    r = q(),
    i = r.new_games_color,
    a = r.used_games_color,
    o = r.old_games_color,
    [s, c] = (0, z.useState)(`NewActive`),
    l = J(),
    u = t.GetGlobalGameplayDistribition(),
    d = {
      NewActive: u?.new_releases || 0,
      UsedActive: u?.recent_releases || 0,
      OldActive: u?.classic_releases || 0,
    },
    f = u && u.new_releases ? u.recent_cutoff_year : 7,
    p = f + 1,
    [m, h, g] = z.useMemo(() => {
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
    y = {
      NewActive: R.Localize(`#YIR_Compare_NewGames_Desc_AvgSteam`, n),
      UsedActive: R.Localize(`#YIR_Compare_ComfortGames_Desc_AvgSteam`, f),
      OldActive: R.Localize(`#YIR_Compare_OldGames_Desc_AvgSteam`, p),
    },
    b = (0, z.useMemo)(() => {
      let e = [];
      return (
        e.push({ name: `new`, value: m > 0 ? m : 1 }),
        e.push({ name: `used`, value: h > 0 ? h : 1 }),
        e.push({ name: `old`, value: g > 0 ? g : 1 }),
        e
      );
    }, [m, h, g]);
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(kx, wb[s], r[s]),
    children: [
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(Vx, r.GameNewnessTitle),
        children: R.LocalizeReact(
          `#YIR_Compare_Flavor_Title`,
          (0, Y.jsx)(`div`, {}),
        ),
      }),
      (0, Y.jsxs)(`div`, {
        className: Ax,
        children: [
          (0, Y.jsx)(`div`, {
            className: jx,
            children: (0, Y.jsx)(Op, {
              responsive: !0,
              style: { width: `100%`, aspectRatio: 1 },
              children: (0, Y.jsxs)(Cf, {
                data: b,
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
                    Ce,
                    {
                      onMouseEnter: () => c(`NewActive`),
                      className: (0, Q.default)(
                        Mx,
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
                    Ce,
                    {
                      onMouseEnter: () => c(`UsedActive`),
                      className: (0, Q.default)(
                        Mx,
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
                    Ce,
                    {
                      onMouseEnter: () => c(`OldActive`),
                      className: (0, Q.default)(
                        Mx,
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
            className: Px,
            children: (0, Y.jsxs)(`div`, {
              className: Fx,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: (0, Q.default)(
                    void 0,
                    r.UserData,
                    Lx,
                    r.DataBox,
                    r.Background,
                  ),
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(
                        Bx,
                        r.DataBoxArrow,
                        r.Background,
                      ),
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: (0, Q.default)(Rx, r.PercentageLabel, r.Color),
                      children: [
                        R.Localize(`#YIR_Compare_Percentage`, _[s]),
                        (0, Y.jsx)(`div`, {
                          className: Ix,
                          children: R.Localize(Qx[s]),
                        }),
                      ],
                    }),
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(
                        zx,
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
                    Lx,
                    r.DataBox,
                    r.Border,
                  ),
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(Rx, r.PercentageLabel, r.Color),
                      children: R.Localize(`#YIR_Compare_Percentage`, d[s]),
                    }),
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(
                        zx,
                        r.PercentageDescriptionLabel,
                        r.Color,
                      ),
                      children: y[s],
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
function eS(e) {
  let { userYearInReview: t } = e,
    n = t.GetUserAggregateTagData(),
    { data: r } = pl(P.LANGUAGE),
    i = J(),
    a = q(),
    o = tS(),
    s = n.map((e) => e.nPreSelectionWeight).sort((e, t) => t - e),
    c = n.map((e, t) => {
      let n = s.findIndex((t) => t - e.nPreSelectionWeight < 1e-5);
      return { subject: r && r[e.nTagId], A: (6 - n) * 10 + 2 * t + 0.5 };
    });
  if (c.length == 0) return null;
  let l = c.map((e, t) => (0, Y.jsx)(`li`, { children: e.subject }, t));
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(Yb, Jb),
    children: [
      (0, Y.jsx)(`div`, {
        className: sx,
        children: R.Localize(`#YIR_Spider_Title`),
      }),
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(cx, a.SectionDesc),
        children: i(`#YIR_Spider_Desc`, t.GetYear()),
      }),
      (0, Y.jsx)(`div`, {
        className: Xb,
        children: (0, Y.jsxs)(jp, {
          responsive: !0,
          className: $b,
          style: { width: `100%`, height: `100%` },
          cx: `50%`,
          cy: `50%`,
          outerRadius: `70%`,
          data: c,
          children: [
            (0, Y.jsx)(hd, {}),
            (0, Y.jsx)(Id, {
              tick: (0, Y.jsx)(nS, { bNumberedLabels: o }),
              dataKey: `subject`,
            }),
            (0, Y.jsx)(vp, {
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
function tS() {
  let [e, t] = (0, z.useState)(!1);
  return ((0, z.useEffect)(() => t(Pc() || window.innerWidth <= 300), []), e);
}
function nS(e) {
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
          className: Qb,
          dy: `20px`,
          width: `170`,
          height: `150`,
          children: (0, Y.jsx)(`div`, { className: Zb, children: t.value }),
        }),
      });
}
function rS(e) {
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
function iS(e) {
  let { userYearInReview: t } = e,
    n = rS(t);
  if (n.length == 0) return null;
  let r = n.map(([e, t]) =>
    (0, Y.jsx)(aS, { label: R.Localize(e), value: t }, e),
  );
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(void 0, Jb),
    children: [
      (0, Y.jsx)(`div`, {
        className: sx,
        children: R.Localize(`#YIR_ByTheNum_Title`),
      }),
      (0, Y.jsx)(`div`, { className: tx, children: r }),
    ],
  });
}
function aS(e) {
  let { label: t, value: n } = e,
    r = n ? D(n) : `-`;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(nx, n == 0 && `MvmFmRp0gao-`),
    children: [
      (0, Y.jsx)(`div`, { className: rx, children: t }),
      (0, Y.jsx)(`div`, { className: ax }),
      (0, Y.jsx)(`div`, { className: ix, children: r }),
    ],
  });
}
var oS = `Wdvtmz-DIUA-`,
  sS = `_30hJH5z6jtk-`,
  cS = `nFsP-fXNWUA-`,
  lS = `c1gySWWvs3I-`;
function uS(e) {
  let { userYearInReview: t } = e;
  if (T.is_support || T.accountid == t.GetAccountID()) {
    let e = t.GetSteamID(),
      n = t.GetYear();
    return (0, Y.jsxs)(an, {
      rootMargin: `0px 0px 100% 0px`,
      children: [
        (0, Y.jsx)(dS, { steamid: e, year: n }),
        (0, Y.jsx)(pS, { steamid: e, year: n }),
      ],
    });
  }
  return null;
}
function dS(e) {
  let { steamid: t, year: n } = e,
    { data: r } = Ch(t);
  if (!r || r.is_not_member_of_any_group || !r.family_group) return null;
  let i = (r.family_group.members ?? [])
    .map((e) => e.steamid)
    .filter((e) => !!e && e !== t);
  return i.length == 0
    ? null
    : (0, Y.jsxs)(`div`, {
        className: sS,
        children: [
          (0, Y.jsx)(`div`, {
            className: cS,
            children: R.Localize(`#YIR_FamilyShared`),
          }),
          (0, Y.jsx)(`div`, {
            className: lS,
            children: i.map((e) =>
              (0, Y.jsx)(
                mS,
                { steamid: e, year: n, ePrivacy: 3, bPrivacyOverride: !1 },
                `family_` + e,
              ),
            ),
          }),
        ],
      });
}
var fS = 50;
function pS(e) {
  let { steamid: t, year: n } = e,
    { isLoading: r, data: i } = xh(t, n),
    a = (0, z.useMemo)(
      () =>
        i
          ? [...i]
              .sort(
                (e, t) =>
                  (t.rt_privacy_updated ?? 0) - (e.rt_privacy_updated ?? 0),
              )
              .slice(0, fS)
          : [],
      [i],
    ),
    o = (0, z.useMemo)(
      () => a.map((e) => new Ca(e.steamid).GetAccountID()),
      [a],
    ),
    s = Jl(o);
  if (r || o?.length == 0 || !s) return null;
  let c = new Map();
  for (let e of s) e && e.steamid && c.set(e.steamid, e.persona_name ?? ``);
  return (
    a.sort((e, t) => c.get(e.steamid).localeCompare(c.get(t.steamid))),
    (0, Y.jsxs)(`div`, {
      className: sS,
      children: [
        (0, Y.jsx)(`div`, {
          className: cS,
          children: R.Localize(`#YIR_FriendShared`),
        }),
        (0, Y.jsx)(j, {
          className: lS,
          "flow-children": `grid`,
          children: a
            .slice(0, fS)
            .map((e) =>
              (0, Y.jsx)(
                mS,
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
        !!T.is_support &&
          (0, Y.jsx)(`div`, {
            style: {
              backgroundColor: `#461F28`,
              border: `1px solid #761F28`,
              padding: `4px`,
            },
            children: R.Localize(`#YIR_FriendShared_support`),
          }),
      ],
    })
  );
}
function mS(e) {
  let { steamid: t, year: n, ePrivacy: r } = e,
    i = q();
  return (0, Y.jsx)(uc, {
    href: `${P.STORE_BASE_URL}replay/${t}/${n}`,
    className: (0, Q.default)({
      [void 0]: r == 1,
      [oS]: !0,
      [i.FriendCtn]: !0,
    }),
    children: (0, Y.jsx)(Ql, {
      accountID: new Ca(t).GetAccountID(),
      bHideWhenNotAvailable: !0,
      bLink: !1,
    }),
  });
}
function hS(e) {
  return `${P.STORE_CDN_URL}public/images/yearinreview/${e}`;
}
var gS = `cQe-oob-ixY-`,
  _S = `tv7SmCaHL8c-`,
  vS = `QEvd6eyhjtk-`,
  yS = `VKJxuXZg9J4-`,
  bS = `_8fQsxmA8PSo-`,
  xS = `UNBAK8TydWc-`,
  SS = `qxLHCRfIBjM-`;
Gx();
var CS = 100;
function wS(e) {
  let { userYearInReview: t } = e,
    n = t.GetPlayTimeStats(),
    r = n.total_stats,
    i = n.game_summary,
    a = J(),
    o = q(),
    s = (0, z.useMemo)(() => {
      let e = [];
      return (
        typeof r.windows_playtime_percentagex100 == `number` &&
          r.windows_playtime_percentagex100 > CS &&
          e.push({
            id: `windows`,
            name: R.Localize(`#YIR_Platfrom_windows`),
            value: r.windows_playtime_percentagex100,
          }),
        typeof r.linux_playtime_percentagex100 == `number` &&
          r.linux_playtime_percentagex100 > CS &&
          e.push({
            id: `linux`,
            name: R.Localize(`#YIR_Platfrom_linux`),
            value: r.linux_playtime_percentagex100,
          }),
        typeof r.macos_playtime_percentagex100 == `number` &&
          r.macos_playtime_percentagex100 > CS &&
          e.push({
            id: `mac`,
            name: R.Localize(`#YIR_Platfrom_macos`),
            value: r.macos_playtime_percentagex100,
          }),
        typeof r.vr_playtime_percentagex100 == `number` &&
          r.vr_playtime_percentagex100 > CS &&
          e.push({
            id: `vr`,
            name: R.Localize(`#YIR_Platfrom_vr`),
            value: r.vr_playtime_percentagex100,
          }),
        typeof r.deck_playtime_percentagex100 == `number` &&
          r.deck_playtime_percentagex100 > CS &&
          e.push({
            id: `deck`,
            name: R.Localize(`#YIR_Platfrom_deck`),
            value: r.deck_playtime_percentagex100,
          }),
        e
      );
    }, [r]),
    c = (0, z.useMemo)(() => {
      let e = [];
      return (
        typeof r.windows_playtime_percentagex100 == `number` &&
          r.windows_playtime_percentagex100 > CS &&
          e.push({
            id: `windows`,
            name: R.Localize(`#YIR_Platfrom_windows`),
            value: i.filter((e) => e.played_windows).length,
          }),
        typeof r.linux_playtime_percentagex100 == `number` &&
          r.linux_playtime_percentagex100 > CS &&
          e.push({
            id: `linux`,
            name: R.Localize(`#YIR_Platfrom_linux`),
            value: i.filter((e) => e.played_linux).length,
          }),
        typeof r.macos_playtime_percentagex100 == `number` &&
          r.macos_playtime_percentagex100 > CS &&
          e.push({
            id: `mac`,
            name: R.Localize(`#YIR_Platfrom_macos`),
            value: i.filter((e) => e.played_mac).length,
          }),
        typeof r.vr_playtime_percentagex100 == `number` &&
          r.vr_playtime_percentagex100 > CS &&
          e.push({
            id: `vr`,
            name: R.Localize(`#YIR_Platfrom_vr`),
            value: i.filter((e) => e.played_vr).length,
          }),
        typeof r.deck_playtime_percentagex100 == `number` &&
          r.deck_playtime_percentagex100 > CS &&
          e.push({
            id: `deck`,
            name: R.Localize(`#YIR_Platfrom_deck`),
            value: i.filter((e) => e.played_deck).length,
          }),
        e
      );
    }, [r, i]);
  if (s.length < 2) return null;
  let l = kS(r);
  return (0, Y.jsx)($, {
    className: (0, Q.default)(Ig, o.PlatformChartsCtn),
    children: (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(X, Lg),
      children: [
        (0, Y.jsx)(`div`, { className: B_, children: a(`#YIR_Platform`) }),
        (0, Y.jsxs)(`div`, {
          className: Rg,
          children: [
            (0, Y.jsxs)(`div`, {
              className: zg,
              children: [
                (0, Y.jsx)(`div`, {
                  className: Bg,
                  children: R.Localize(`#YIR_Platfrom_playtime`),
                }),
                (0, Y.jsxs)(Op, {
                  responsive: !0,
                  style: { width: `90%`, aspectRatio: 1 },
                  children: [
                    (0, Y.jsx)(Cf, {
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
                        (0, Y.jsx)(Ce, { fill: o[`pie_${e.id}`] }, `cell-${t}`),
                      ),
                    }),
                    (0, Y.jsx)(vt, {
                      content: (e) =>
                        (0, Y.jsx)(TS, {
                          active: e.active,
                          payload: e.payload,
                        }),
                    }),
                    (0, Y.jsx)(wu, {}),
                  ],
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: zg,
              children: [
                (0, Y.jsx)(`div`, {
                  className: Bg,
                  children: R.Localize(`#YIR_Platfrom_games`),
                }),
                (0, Y.jsxs)(Op, {
                  responsive: !0,
                  style: { width: `90%`, aspectRatio: 1 },
                  children: [
                    (0, Y.jsx)(Cf, {
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
                        (0, Y.jsx)(Ce, { fill: o[`pie_${e.id}`] }, `cell-${t}`),
                      ),
                    }),
                    (0, Y.jsx)(vt, {
                      content: (e) =>
                        (0, Y.jsx)(ES, {
                          active: e.active,
                          payload: e.payload,
                        }),
                    }),
                    (0, Y.jsx)(wu, {}),
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
function TS(e) {
  let { active: t, payload: n } = e;
  if (t && n && n.length) {
    let e = n[0].value;
    return (0, Y.jsxs)(Hl, {
      children: [n[0].name, `: `, R.Localize(`#YIR_Percent_Playtime`, m_(e))],
    });
  }
  return null;
}
function ES(e) {
  let { active: t, payload: n } = e;
  if (t && n && n.length) {
    let e = n[0].value,
      t = n[0].name;
    return (0, Y.jsx)(Hl, {
      children: R.Localize(
        e === 1
          ? `#YIR_Platfrom_gamesplays_tooltip`
          : `#YIR_Platfrom_gamesplays_tooltip_Plural`,
        D(e),
        t,
      ),
    });
  }
  return null;
}
function DS(e) {
  let { userYearInReview: t } = e;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(wS, { userYearInReview: t }),
      (0, Y.jsx)(AS, { userYearInReview: t }),
    ],
  });
}
function OS(e) {
  let { userYearInReview: t, strClassName: n, nYear: r } = e,
    i = t.GetRawStats(),
    a = J(),
    o = a(`#YIR_TopGames_deck_subtitle`),
    {
      nTotalGames: s,
      nTotalSessions: c,
      nTotalPercentage: l,
    } = (0, z.useMemo)(() => Hm(i, `deck`), [i]),
    { rgResults: u } = (0, z.useMemo)(() => Rm(t, `deck`, 5, l), [t, l]),
    d = Number(Math.round(l / 100).toFixed(0)),
    f = a(`#YIR_TopGames_deck_new`);
  d > 50 && (f = a(`#YIR_TopGames_deck_mostly`));
  let p = (0, z.useRef)(null),
    m = _s((e) => {
      p.current &&
        p.current.style.setProperty(
          `--contentSize`,
          `${e.contentRect.width}px`,
        );
    }),
    [h, g] = z.useState(!1),
    _ = z.useCallback((e) => {
      e && g(!0);
    }, []),
    v = (0, Y.jsx)(Wx, { endValue: s, duration: 2e3, startAnimation: h }),
    y = (0, Y.jsx)(Wx, { endValue: c, duration: 2e3, startAnimation: h }),
    b = (0, z.useRef)(null);
  return (
    Gl(b),
    (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(n, Z.PlatformContentsCtn, vS),
      ref: p,
      children: [
        (0, Y.jsx)(`div`, {
          className: (0, Q.default)(Z.SectionTitle, xS),
          children: f,
        }),
        (0, Y.jsxs)(`div`, {
          className: SS,
          ref: m,
          children: [
            (0, Y.jsxs)(`div`, {
              className: _S,
              children: [
                (0, Y.jsxs)(fs, {
                  onVisibilityChange: _,
                  className: (0, Q.default)(X, Z.StatsRow, yS),
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: Z.StatBlock,
                      children: [
                        (0, Y.jsx)(`div`, { className: Z.BigNum, children: v }),
                        (0, Y.jsx)(`div`, {
                          className: Z.StatDescription,
                          children: R.LocalizePlural(`#YIR_NewLine_Games`, s),
                        }),
                      ],
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: Z.StatBlock,
                      children: [
                        (0, Y.jsx)(`div`, { className: Z.BigNum, children: y }),
                        (0, Y.jsx)(`div`, {
                          className: Z.StatDescription,
                          children: R.LocalizePlural(`#YIR_NewLine_Session`, c),
                        }),
                      ],
                    }),
                    (0, Y.jsx)(Py, { percentVal: l, subToken: `#YIR_NewLine` }),
                  ],
                }),
                !1,
                (0, Y.jsx)($, {
                  className: kg,
                  children: (0, Y.jsx)(jy, {
                    rgGamePercentages: u,
                    category: `deck`,
                  }),
                }),
              ],
            }),
            (0, Y.jsxs)(`video`, {
              className: gS,
              poster: `https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesPoster.jpg`,
              playsInline: !0,
              loop: !0,
              muted: !0,
              autoPlay: !0,
              controls: !1,
              ref: b,
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
          className: (0, Q.default)(Z.Disclaimer, bS),
          children: o,
        }),
      ],
    })
  );
}
function kS(e) {
  return {
    bDeck:
      typeof e.deck_playtime_percentagex100 == `number` &&
      e.deck_playtime_percentagex100 > 100,
    bVR:
      typeof e.vr_playtime_percentagex100 == `number` &&
      e.vr_playtime_percentagex100 > 100,
  };
}
function AS(e) {
  let { userYearInReview: t } = e,
    n = t.GetYear(),
    r = J(),
    i = t.GetPlayTimeStats().total_stats,
    a = i.controller_playtime_percentagex100 + i.deck_playtime_percentagex100,
    o = !1;
  a > 7e3 && (o = !0);
  let s = kS(i);
  return (0, Y.jsxs)(an, {
    rootMargin: `0px 0px 100% 0px`,
    children: [
      !!s.bDeck &&
        (0, Y.jsx)($, {
          className: (0, Q.default)(Z.Section, Z.Deck),
          children: (0, Y.jsx)(OS, { userYearInReview: t, nYear: n }),
        }),
      !!s.bVR &&
        (0, Y.jsx)($, {
          className: (0, Q.default)(Z.Section, Z.VR),
          children: (0, Y.jsx)(Oy, {
            category: `vr`,
            userYearInReview: t,
            bgImageURL: hS(`vr_background6.webp`),
            title: r(`#YIR_TopGames_vr`),
            subTitle: void 0,
          }),
        }),
      a > 1e3 &&
        (0, Y.jsx)($, {
          className: (0, Q.default)(Z.Section, Z.Controller),
          children: (0, Y.jsx)(Oy, {
            category: `controller`,
            userYearInReview: t,
            title: r(
              o ? `#YIR_TopGames_controllerMost` : `#YIR_TopGames_controller`,
              m_(a),
            ),
            subTitle: r(
              `#YIR_Platform_subtitle_controller`,
              R.Localize(`#YIR_Platfrom_controller_forsubtitle`),
            ),
          }),
        }),
      n >= 2024 &&
        (0, Y.jsx)(E, { children: (0, Y.jsx)(jS, { userYearInReview: t }) }),
    ],
  });
}
function jS(e) {
  let { userYearInReview: t } = e,
    n = J(),
    [r, i] = (0, z.useMemo)(
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
            (0, Y.jsx)(Oy, {
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
            (0, Y.jsx)(Oy, {
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
var MS = `Zyx-HjZHUjo-`,
  NS = `_1lcI3rMkINQ-`,
  PS = `qHBQax2jUhc-`,
  FS = `O1K2KPMCdBU-`,
  IS = `vNi0RlyomPM-`,
  LS = `TX-ZbWuG6nU-`,
  RS = `IrsybK-NCqg-`,
  zS = `-cwbu3H1bWI-`,
  BS = `N6MvnixTrWs-`,
  VS = `jYZcHfHVJ7Q-`,
  HS = `pMnJje5ddJk-`,
  US = `_2hCwBXP7Dak-`,
  WS = `yvIttucwtMQ-`,
  GS = `yy3vzELgSfc-`,
  KS = `SOTrGkaPWt0-`,
  qS = `ttuzGl2s44c-`;
function JS(e) {
  let { userYearInReview: t } = e;
  if (Im()) return null;
  let n = t.GetPlayTimeStats().playtime_streak;
  return !n ||
    (typeof n.longest_consecutive_days == `number` &&
      n.longest_consecutive_days < 5)
    ? null
    : (0, Y.jsx)(YS, { ...e, longestStreak: n });
}
function YS(e) {
  let { userYearInReview: t, longestStreak: n } = e,
    r = J(),
    i = g_(),
    a = q(),
    [o, s] = z.useState(!1),
    c = z.useCallback((e) => {
      e && s(!0);
    }, []),
    [l, u] = z.useState(!1),
    d = z.useCallback((e) => {
      e &&
        window.setTimeout(() => {
          u(!0);
        }, 30);
    }, []),
    [f, p] = z.useState(!1),
    m = n.streak_games.length > 12 && !f,
    h = m
      ? n.streak_games.sort((e, t) => e.appid - t.appid).slice(0, 12)
      : n.streak_games.sort((e, t) => e.appid - t.appid),
    g = h.map((e) => e.appid),
    _ = n.streak_games.length,
    v = n.longest_consecutive_days ?? 0;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(Kg, BS, MS, a.Section),
    children: [
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(qS, a.LongestStreakBgImage),
      }),
      (0, Y.jsxs)(`div`, {
        className: X,
        children: [
          (0, Y.jsxs)(`div`, {
            className: NS,
            children: [
              (0, Y.jsx)(fs, {
                className: PS,
                onVisibilityChange: c,
                children: r(
                  `#YIR_Longest_Streak_Title`,
                  (0, Y.jsx)(Wx, {
                    className: IS,
                    endValue: v,
                    duration: 2e3,
                    startAnimation: o,
                  }),
                ),
              }),
              (0, Y.jsxs)($, {
                className: HS,
                children: [
                  (0, Y.jsx)(`div`, { className: FS }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(US, a.StreakSizeFullBar),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)({ [GS]: !0, [KS]: v < 40 }),
                    children: (0, Y.jsx)(ZS, { nDays: v - 1 }),
                  }),
                  (0, Y.jsx)(`div`, { className: FS }),
                ],
              }),
              (0, Y.jsxs)($, {
                className: LS,
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
          (0, Y.jsxs)(fs, {
            onVisibilityChange: d,
            className: (0, Q.default)(Hg, RS),
            children: [
              (0, Y.jsx)(`div`, {
                className: (0, Q.default)(zS, l && `JoDLfdcjJPY-`),
                children: r(
                  _ > 1
                    ? `#YIR_Longest_Streak_Games`
                    : `#YIR_Longest_Streak_Games_Singular`,
                  D(_),
                ),
              }),
              (0, Y.jsx)(`div`, {
                className: (0, Q.default)(VS),
                children: (0, Y.jsx)(j, {
                  "flow-children": `grid`,
                  className: (0, Q.default)(Ug, Wg, l && `c42w8bI3Dx0-`),
                  children: h.map((e, n) => {
                    let r = t.GetGameSummaryForApp(e.appid);
                    return (0, Y.jsx)(
                      My,
                      {
                        appid: e.appid,
                        index: n,
                        loading: `lazy`,
                        rgAppIDs: g,
                        nParentAppID: r?.parent_appid,
                        eChildType: XS(r),
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
                children: R.Localize(`#YIR_ShowMore`),
              }),
            }),
        ],
      }),
    ],
  });
}
function XS(e) {
  if (e?.demo) return 1;
  if (e?.playtest) return 12;
}
function ZS(e) {
  let { nDays: t } = e,
    n = [];
  if (t > 0) {
    for (let e = 0; e < t + 2; ++e)
      n.push((0, Y.jsx)(`div`, { className: WS }, `DrawNDivForStreakDays` + e));
    return (0, Y.jsx)(Y.Fragment, { children: n });
  }
  return null;
}
var QS = `qdYD-Nli-BU-`,
  $S = `ocrq1-0nW8Y-`,
  eC = `uvsrpXUQL6E-`,
  tC = `JSoZ402xLkY-`;
function nC(e) {
  let { steamid: t, year: n } = e,
    r = q(),
    { rgOtherYears: i } = Dh(),
    a = J();
  return i.length === 0
    ? null
    : (0, Y.jsxs)(`div`, {
        className: QS,
        children: [
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)($S, r.OtherYearsHeader),
            children: a(`#YearInReview_OtherYearLinks_Header`),
          }),
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)(eC, r.OtherYearLinks),
            children: i.map((e) =>
              (0, Y.jsx)(
                uc,
                {
                  href: `${P.STORE_BASE_URL}replay/${t}/${e}?src=8`,
                  className: (0, Q.default)(tC, r.OtherYearLink),
                  children: e,
                },
                e,
              ),
            ),
          }),
        ],
      });
}
var rC = t({
    ActiveHint: () => nw,
    Appear: () => ww,
    Arrow: () => RC,
    ArrowDisabled: () => VC,
    BadgeBarFiller: () => Cw,
    BadgeBoxIntro: () => Sw,
    CarouselCtn: () => OC,
    CarouselHint: () => tw,
    CarouselHintCtn: () => ew,
    CenterImage: () => UC,
    CenterImg: () => YC,
    CloseIcon: () => NC,
    Disabled: () => gw,
    DropDownSizer: () => gC,
    DropdownButton: () => vC,
    DropdownOption: () => bC,
    ElementFadeIn: () => xw,
    Error: () => yC,
    FB: () => pw,
    FeedBtn: () => fw,
    FooterCtn: () => iw,
    FormatHint: () => rw,
    ImageArrowCtn: () => LC,
    ImagesCtn: () => HC,
    ImgAndPreviewCtn: () => WC,
    InteractButton: () => ZC,
    InteractButtonIcon: () => QC,
    InteractButtonText: () => $C,
    LangaugeDropdown: () => DC,
    LanguageLabel: () => EC,
    Left: () => zC,
    LeftPeak: () => JC,
    LoadingCtn: () => kC,
    MobileCtn: () => vw,
    PeakImg: () => XC,
    Peek: () => KC,
    PreviewAndIconCtn: () => MC,
    PreviewClickCtn: () => jC,
    PreviewImageCtn: () => AC,
    PreviewImage_1080x1080: () => PC,
    PreviewImage_1080x1920: () => FC,
    PreviewImage_1200x628: () => IC,
    PreviewMask: () => GC,
    PrivacyWarning: () => dC,
    RD: () => hw,
    Right: () => BC,
    RightPeak: () => qC,
    SeeRewindButton: () => mC,
    ShareArea: () => pC,
    ShareButton: () => uC,
    ShareColumns: () => oC,
    ShareCtn: () => cC,
    ShareHeader: () => _C,
    ShareIcon: () => SC,
    ShareLanguagePicker: () => TC,
    ShareLinkButton: () => sw,
    ShareLinkIcon: () => yw,
    ShareLinkText: () => bw,
    ShareModal: () => wC,
    ShareModalDialogCtn: () => CC,
    ShareOptions: () => iC,
    ShareShortUrl: () => cw,
    ShareText: () => xC,
    ShareTitle: () => aC,
    ShareTypeTitle: () => fC,
    ShareURLCtn: () => ow,
    ShareURLTitle: () => lw,
    ShowcaseInfo: () => sC,
    SocialButtons: () => dw,
    SteamButtons: () => uw,
    TW: () => mw,
    TooltipCtn: () => aw,
    VisBorder: () => _w,
    Visible: () => hC,
    YIRShareCtn: () => lC,
    default: () => Tw,
  }),
  iC = `GQ15KBYq0dM-`,
  aC = `aXiQBfYGO9I-`,
  oC = `QsTph6fo6tE-`,
  sC = `MqMesN--4dY-`,
  cC = `mPg8ksPIypA-`,
  lC = `ql9xSqCdaH0-`,
  uC = `j8A4NpxJ0t0-`,
  dC = `wzkr-U2Espw-`,
  fC = `smzKi1RTbdQ-`,
  pC = `PmXhnAChGR0-`,
  mC = `F8tObD0Db8k-`,
  hC = `_74rjTvdFGHA-`,
  gC = `_3K3tDOC4GJc-`,
  _C = `r3ltIfNjuPk-`,
  vC = `PzQjhUmqibw-`,
  yC = `n1Fb28gGkQA-`,
  bC = `IvgYPzwuDSc-`,
  xC = `_2-Cr-SQJps0-`,
  SC = `CnI2waDfQ34-`,
  CC = `YKCweqawRAg-`,
  wC = `WoxdMMqJPdU-`,
  TC = `xH2JulcKe14-`,
  EC = `UDsOCbvSZIU-`,
  DC = `Gr4dorQ7W5c-`,
  OC = `ANCmTxdRftQ-`,
  kC = `p0yOORO-3xk-`,
  AC = `v3ht7HUJu3M-`,
  jC = `DIelFHIZzhU-`,
  MC = `_7cpnCIhhrPY-`,
  NC = `_1sB-7CAJZ8k-`,
  PC = `xPVASClAx0k-`,
  FC = `MUHNnGqkOqY-`,
  IC = `vBdHL5mBGrg-`,
  LC = `Zhn0fcf8K0A-`,
  RC = `e1abu676--0-`,
  zC = `H-DDc-hfx8I-`,
  BC = `YH-nSsaJzMU-`,
  VC = `pOiTs551keM-`,
  HC = `IwfOPZqUlI0-`,
  UC = `J3x0rrHLezU-`,
  WC = `fmGqpqE4kNI-`,
  GC = `boHwEaOCYyc-`,
  KC = `IyLe07FQrvw-`,
  qC = `XJ0X2gf4Bj8-`,
  JC = `G3q0v1ojD1Y-`,
  YC = `qfIY3K5wcM0-`,
  XC = `_7c1acrIAHH4-`,
  ZC = `wNE8ANE5TsM-`,
  QC = `cHPBGtpOoh8-`,
  $C = `W6T4-MeSpIc-`,
  ew = `hbAE9JcKwtk-`,
  tw = `OOKPlPQEH-w-`,
  nw = `a5nzDP5fAS8-`,
  rw = `OKLgRZL9G-8-`,
  iw = `YZ3SbPJqfpo-`,
  aw = `mhqjR9vpV54-`,
  ow = `vYxszMZbMu8-`,
  sw = `gCfLNYFfCkY-`,
  cw = `Fszxyt7mMys-`,
  lw = `LFvgTxoh4cM-`,
  uw = `O8FfPGGUfsk-`,
  dw = `DT0tk4O37yI-`,
  fw = `ICd7j4gYWCY-`,
  pw = `h96vh8Y0dDU-`,
  mw = `_0XH6IlZcmBQ-`,
  hw = `CJhunxWUcHo-`,
  gw = `Vpkqj7M1WBw-`,
  _w = `_7V5HmtHlzMQ-`,
  vw = `RsGMBAZHmro-`,
  yw = `uc6rSxuiYYU-`,
  bw = `_6S7z8D0l51A-`,
  xw = `W42-VaMVayE-`,
  Sw = `-Lm3gVp9t28-`,
  Cw = `Bp9o640kQcU-`,
  ww = `F-nVb84xjt4-`,
  Tw = {
    ShareOptions: iC,
    ShareTitle: aC,
    ShareColumns: oC,
    ShowcaseInfo: sC,
    ShareCtn: cC,
    YIRShareCtn: lC,
    ShareButton: uC,
    PrivacyWarning: dC,
    ShareTypeTitle: fC,
    ShareArea: pC,
    SeeRewindButton: mC,
    Visible: hC,
    DropDownSizer: gC,
    ShareHeader: _C,
    DropdownButton: vC,
    Error: `n1Fb28gGkQA-`,
    DropdownOption: bC,
    ShareText: xC,
    ShareIcon: SC,
    ShareModalDialogCtn: CC,
    ShareModal: wC,
    ShareLanguagePicker: TC,
    LanguageLabel: EC,
    LangaugeDropdown: DC,
    CarouselCtn: OC,
    LoadingCtn: kC,
    PreviewImageCtn: AC,
    PreviewClickCtn: jC,
    PreviewAndIconCtn: MC,
    CloseIcon: NC,
    PreviewImage_1080x1080: PC,
    PreviewImage_1080x1920: FC,
    PreviewImage_1200x628: IC,
    ImageArrowCtn: LC,
    Arrow: RC,
    Left: zC,
    Right: BC,
    ArrowDisabled: VC,
    ImagesCtn: HC,
    CenterImage: UC,
    ImgAndPreviewCtn: WC,
    PreviewMask: GC,
    Peek: KC,
    RightPeak: qC,
    LeftPeak: JC,
    CenterImg: YC,
    PeakImg: XC,
    InteractButton: ZC,
    InteractButtonIcon: QC,
    InteractButtonText: $C,
    CarouselHintCtn: ew,
    CarouselHint: tw,
    ActiveHint: nw,
    FormatHint: rw,
    FooterCtn: iw,
    TooltipCtn: aw,
    ShareURLCtn: ow,
    ShareLinkButton: sw,
    ShareShortUrl: cw,
    ShareURLTitle: lw,
    SteamButtons: uw,
    SocialButtons: dw,
    FeedBtn: fw,
    FB: pw,
    TW: mw,
    RD: hw,
    Disabled: gw,
    VisBorder: _w,
    MobileCtn: vw,
    ShareLinkIcon: yw,
    ShareLinkText: bw,
    ElementFadeIn: xw,
    BadgeBoxIntro: Sw,
    BadgeBarFiller: Cw,
    Appear: ww,
  },
  Ew = `0123456789abcdef`,
  Dw = `bcdfghjkmnpqrtvw`;
function Ow(e, t, n) {
  return Array.from(e, (e) => {
    let r = t.indexOf(e);
    return r >= 0 ? n[r] : e;
  }).join(``);
}
function kw(e) {
  return e ? Ow(new Ca(e).GetAccountID().toString(16), Ew, Dw) : ``;
}
function Aw(e) {
  let { steamid: t, nYear: n } = e,
    r = u_(),
    i = q();
  return T.logged_in
    ? !r && T.logged_in
      ? (0, Y.jsx)(uc, {
          className: (0, Q.default)(mC, i.SeeRewindButton),
          href: `${P.STORE_BASE_URL}replay/${T.steamid}/${n}?src=9`,
          children: R.Localize(`#YIR_SeeYourRewind`),
        })
      : (0, Y.jsxs)(j, {
          className: lC,
          children: [
            (0, Y.jsx)(jw, { steamid: t, nYear: n }),
            (0, Y.jsxs)(j, {
              className: uC,
              onActivate: () => {
                or((0, Y.jsx)(Fw, { steamid: t, nYear: n }), window, {
                  strTitle: Jn.Localize(`#Button_Share`),
                });
              },
              children: [
                (0, Y.jsx)(Ro, { className: (0, Q.default)(SC) }),
                (0, Y.jsx)(`span`, {
                  className: (0, Q.default)(xC),
                  children: Jn.Localize(`#Button_Share`),
                }),
              ],
            }),
          ],
        })
    : null;
}
function jw(e) {
  let { steamid: t, nYear: n } = e,
    [r, i] = (0, z.useState)(``),
    a = ih(t, n),
    { mutateAsync: o } = ah(t, n),
    s = (0, z.useMemo)(() => a === 3 || a === 2, [a]),
    c = [
      { data: 1, label: R.Localize(`#YIR_ShareVisbility_Private`) },
      { data: 2, label: R.Localize(`#YIR_ShareVisbility_FriendsOnly`) },
      { data: 3, label: R.Localize(`#YIR_ShareVisbility_Public`) },
    ];
  return (0, Y.jsxs)(j, {
    "flow-children": `column`,
    children: [
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(dC, s ? hC : ``),
        children: s
          ? R.Localize(`#YIR_ShareVisbility`)
          : R.Localize(`#YIR_ShareModal_DisabledShareTtp`),
      }),
      (0, Y.jsx)(`div`, {
        className: gC,
        children: (0, Y.jsx)(qa, {
          strDropDownButtonClassName: vC,
          strDropDownClassName: bC,
          rgOptions: c,
          selectedOption: a,
          onChange: async (e) => {
            if (e.data !== a) {
              let { eResult: t } = await o(e.data),
                n = t == 1 ? `` : Mw(t);
              n && i(n);
            }
          },
        }),
      }),
      r && (0, Y.jsx)(`div`, { className: `n1Fb28gGkQA-`, children: r }),
    ],
  });
}
function Mw(e) {
  switch (e) {
    case 10:
      return `Servers are busy, please try again later`;
    default:
      return ``;
  }
}
function Nw(e) {
  return `y${e % 100}`;
}
var Pw = `l`;
function Fw(e) {
  let { closeModal: t, steamid: n, nYear: r } = e,
    [i, a] = (0, z.useState)(),
    o = ih(n, r),
    s = (0, z.useMemo)(() => o === 3 || o === 2, [o]),
    [c, l] = (0, z.useState)(El(P.LANGUAGE)),
    u = (0, z.useMemo)(() => Gs(c), [c]),
    d = kw(n),
    f = `https://s.team/${Nw(r)}/${d}`,
    p = (0, z.useMemo)(() => {
      let e = new URL(f);
      return (e.searchParams.set(Pw, u), e.href);
    }, [u, f]),
    m = () => {
      a(!0);
    };
  return i
    ? (0, Y.jsx)(on, { eventLink: p, closeModal: t })
    : (0, Y.jsx)(Ps, {
        strDescription: ``,
        strTitle: R.Localize(`#YIR_ShareModal_Title`),
        onCancel: t,
        onOK: t,
        bAlertDialog: !0,
        modalClassName: CC,
        children: (0, Y.jsxs)(`div`, {
          className: wC,
          children: [
            (0, Y.jsx)(`div`, {
              className: TC,
              children: (0, Y.jsx)(`div`, {
                className: DC,
                children: (0, Y.jsx)(nn, {
                  selectedLang: c,
                  fnOnLanguageChanged: l,
                  fnFilterLanguage: (e) => e !== 25,
                }),
              }),
            }),
            (0, Y.jsx)(Iw, { language: u, steamid: n, nYear: r, shareUrl: p }),
            (0, Y.jsxs)(`div`, {
              className: iw,
              children: [
                (0, Y.jsx)(jw, { steamid: n, nYear: r }),
                (0, Y.jsx)(`div`, {
                  className: (0, Q.default)(_w, !s && `Vpkqj7M1WBw-`),
                  children: P.IN_MOBILE_WEBVIEW
                    ? (0, Y.jsx)(Vw, {
                        bCanShare: s,
                        shareUrl: p,
                        shareOnSteamActivityFeed: m,
                      })
                    : (0, Y.jsx)(Bw, {
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
function Iw(e) {
  let { language: t, steamid: n, nYear: r, shareUrl: i } = e,
    [a, o] = (0, z.useState)(0),
    [s, c] = (0, z.useState)(!1),
    { isLoading: l, data: u } = Th(n, r, t),
    d = u ? u.length - 1 : 0,
    f = `${P.BASE_URL_SHARED_CDN}social_sharing/`,
    p = (e) => {
      a > 0 && (o(a - 1), e.stopPropagation());
    },
    m = (e) => {
      a < d && (o(a + 1), e.stopPropagation());
    };
  return (
    en(`ArrowLeft`, p),
    en(`Left`, p),
    en(`ArrowRight`, m),
    en(`Right`, m),
    l
      ? (0, Y.jsx)(`div`, {
          className: (0, Q.default)(OC, kC),
          children: (0, Y.jsx)(tn, { position: `center` }),
        })
      : u
        ? (0, Y.jsxs)(`div`, {
            className: OC,
            children: [
              s &&
                (0, Y.jsx)(Lw, {
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
                className: LC,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(
                      RC,
                      zC,
                      a === 0 && `pOiTs551keM-`,
                    ),
                    onClick: p,
                    children: (0, Y.jsx)(Fs, { angle: 270 }),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(
                      RC,
                      BC,
                      a === d && `pOiTs551keM-`,
                    ),
                    onClick: m,
                    children: (0, Y.jsx)(Fs, { angle: 90 }),
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: HC,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: (0, Q.default)(KC, JC),
                        children:
                          a !== 0 &&
                          (0, Y.jsx)(`img`, {
                            alt: ``,
                            className: `_7c1acrIAHH4-`,
                            src: `${f}${u[a - 1].url_path}`,
                          }),
                      }),
                      (0, Y.jsx)(`div`, {
                        className: UC,
                        children: (0, Y.jsxs)(`div`, {
                          className: WC,
                          children: [
                            (0, Y.jsx)(`div`, {
                              onClick: (e) => {
                                (c(!0), e.stopPropagation());
                              },
                              className: GC,
                              children: R.Localize(
                                `#YIR_ShareModal_FullscreenPreview`,
                              ),
                            }),
                            (0, Y.jsx)(`img`, {
                              alt: ``,
                              className: YC,
                              src: `${f}${u[a].url_path}`,
                            }),
                          ],
                        }),
                      }),
                      (0, Y.jsx)(`div`, {
                        className: (0, Q.default)(KC, qC),
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
              P.IN_MOBILE_WEBVIEW
                ? (0, Y.jsx)(zw, {
                    imageUrl: `${f}${u[a].url_path}`,
                    shareUrl: i,
                  })
                : P.IN_CLIENT
                  ? null
                  : (0, Y.jsx)(Rw, { imageUrl: `${f}${u[a].url_path}` }),
              (0, Y.jsx)(`div`, {
                className: ew,
                children: u.map((e, t) =>
                  (0, Y.jsx)(
                    `div`,
                    { className: (0, Q.default)(tw, t === a ? nw : null) },
                    `${t}_hint`,
                  ),
                ),
              }),
              (0, Y.jsx)(`div`, {
                className: rw,
                children: R.Localize(
                  `#YIR_ShareModal_ImageCaption_${u[a].name}`,
                ),
              }),
            ],
          })
        : (0, Y.jsx)(`div`, {
            className: (0, Q.default)(OC, kC),
            children: (0, Y.jsx)(`div`, {
              children: R.Localize(`#YIR_ShareModal_FailedToGenerateImages`),
            }),
          })
  );
}
function Lw(e) {
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
    en(`Escape`, a),
    en(`Esc`, a),
    (0, Y.jsx)(`div`, {
      className: AC,
      children: (0, Y.jsx)(`div`, {
        className: jC,
        onClick: a,
        children: (0, Y.jsxs)(`div`, {
          className: MC,
          children: [
            (0, Y.jsx)(`div`, { className: NC, children: (0, Y.jsx)(bl, {}) }),
            (0, Y.jsx)(`div`, {
              className: (0, Q.default)(RC, zC, t === 0 && `pOiTs551keM-`),
              onClick: r,
              children: (0, Y.jsx)(Fs, { angle: 270 }),
            }),
            (0, Y.jsx)(`div`, {
              className: (0, Q.default)(RC, BC, t === n && `pOiTs551keM-`),
              onClick: i,
              children: (0, Y.jsx)(Fs, { angle: 90 }),
            }),
            (0, Y.jsx)(`img`, {
              alt: ``,
              className: rC[`PreviewImage_${o}`],
              src: s,
            }),
          ],
        }),
      }),
    })
  );
}
function Rw(e) {
  return (0, Y.jsxs)(`div`, {
    className: ZC,
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
      (0, Y.jsx)(Bc, { className: QC }),
      (0, Y.jsx)(`span`, {
        className: (0, Q.default)($C),
        children: R.Localize(`#YIR_ShareModal_SaveImage`),
      }),
    ],
  });
}
function zw(e) {
  let { imageUrl: t, shareUrl: n } = e;
  return (0, Y.jsxs)(`div`, {
    className: ZC,
    onClick: () => {
      let e = Reflect.get(window, `ReactNativeWebView`);
      if (e?.postMessage) {
        let r = {
          event_name: `shareimage`,
          link: t,
          url: t,
          subject: R.Localize(`#YIR_ShareModal_MobileSubject`),
          message: n,
          title: R.Localize(`#YIR_ShareModal_MobileMessage`),
        };
        e.postMessage(JSON.stringify(r));
      }
    },
    children: [
      (0, Y.jsx)(Ro, { className: QC }),
      (0, Y.jsx)(`span`, {
        className: (0, Q.default)($C),
        children: R.Localize(`#YIR_ShareModal_ShareImage`),
      }),
    ],
  });
}
function Bw(e) {
  let {
      bCanShare: t,
      shareUrl: n,
      shortAccountCode: r,
      language: i,
      nYear: a,
      shareOnSteamActivityFeed: o,
    } = e,
    [s, c] = (0, z.useState)(!1);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(`div`, {
        className: lw,
        children: R.Localize(`#YIR_ShareModal_YourLink`),
      }),
      (0, Y.jsxs)(`div`, {
        className: ow,
        children: [
          (0, Y.jsx)(`div`, { className: cw, children: n }),
          (0, Y.jsxs)(`div`, {
            className: (0, Q.default)(sw),
            onClick: () => {
              (navigator.clipboard.writeText(n), c(!0));
            },
            children: [
              (0, Y.jsx)(Ro, { className: yw }),
              (0, Y.jsx)(`span`, {
                className: (0, Q.default)(bw),
                children: R.Localize(
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
        className: (0, Q.default)(dw, uw),
        children: [
          (0, Y.jsxs)(`div`, {
            onClick: o,
            className: (0, Q.default)(sw, fw),
            children: [
              (0, Y.jsx)(da, { className: yw }),
              (0, Y.jsx)(`span`, {
                className: (0, Q.default)(bw),
                children: R.Localize(`#YIR_ShareModal_ShareOnFriendsActivity`),
              }),
            ],
          }),
          (0, Y.jsxs)(`a`, {
            href: `${P.COMMUNITY_BASE_URL}profiles/${T.steamid}/edit/showcases`,
            className: (0, Q.default)(sw, fw),
            children: [
              (0, Y.jsx)(Rs, { className: yw }),
              (0, Y.jsx)(`span`, {
                className: (0, Q.default)(bw),
                children: R.Localize(`#YIR_ShareModal_AddShowcase`),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Vw(e) {
  let { bCanShare: t, shareUrl: n, shareOnSteamActivityFeed: r } = e;
  return (0, Y.jsx)(Y.Fragment, {
    children: (0, Y.jsxs)(`div`, {
      className: vw,
      children: [
        (0, Y.jsxs)(`div`, {
          className: (0, Q.default)(sw, !t && `Vpkqj7M1WBw-`),
          onClick: () => {
            let e = Reflect.get(window, `ReactNativeWebView`);
            if (e?.postMessage) {
              let t = {
                event_name: `share`,
                link: n,
                url: n,
                subject: R.Localize(`#YIR_ShareModal_MobileSubject`),
                message: R.Localize(`#YIR_ShareModal_MobileMessage`),
                title: R.Localize(`#YIR_ShareModal_MobileMessage`),
              };
              e.postMessage(JSON.stringify(t));
            }
          },
          children: [
            (0, Y.jsx)(Ro, { className: yw }),
            (0, Y.jsx)(`span`, {
              className: (0, Q.default)(bw),
              children: R.Localize(`#YIR_ShareModal_ShareLink`),
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          onClick: r,
          className: (0, Q.default)(sw, !t && `Vpkqj7M1WBw-`),
          children: [
            (0, Y.jsx)(da, { className: yw }),
            (0, Y.jsx)(`span`, {
              className: (0, Q.default)(bw),
              children: R.Localize(`#YIR_ShareModal_ShareOnFriendsActivity`),
            }),
          ],
        }),
      ],
    }),
  });
}
function Hw(e) {
  return e >= 2024;
}
function Uw(e) {
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
    d = J(),
    f = (0, z.useMemo)(() => u.slice(0, 5), [u]),
    { data: p } = Ah((0, z.useMemo)(() => f.map((e) => e.appid), [f])),
    m = f
      .map((e, t) =>
        p?.has(e.appid)
          ? (0, Y.jsx)(
              tT,
              { gameStat: e, gridClass: `Game${t}` },
              `${t}_${e.appid}`,
            )
          : null,
      )
      .filter((e) => e !== null),
    h = [
      Gw(s, t),
      Jw(n, r),
      Kw(n, l, Hw(n) ? t.GetPreviousYearSummary()?.longest_streak : void 0),
    ].filter((e) => e !== null),
    g = (0, Y.jsx)(
      Xw,
      {
        rgGamesLength: o.length,
        nNewGames: c,
        nDemoPlayed: i,
        nPlaytestPlayed: a,
        nYear: t.GetYear(),
        nPreviousYearsGames: Hw(n)
          ? t.GetPreviousYearSummary()?.games_played
          : void 0,
      },
      `overview`,
    );
  return (0, Y.jsx)($, {
    children: (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(X, U_),
      children: [
        (0, Y.jsx)(Yw, {
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
                (0, Y.jsx)(Ww, { overview: g, statFillers: h, gameFillers: m }),
              ],
            }),
          }),
      ],
    }),
  });
}
function Ww(e) {
  let { statFillers: t, gameFillers: n, overview: r } = e;
  return n.length > 2 && t.length > 1
    ? (0, Y.jsx)(`div`, {
        className: K_,
        children: [r, t[0], t[1], n[0], n[1], n[2]],
      })
    : n.length > 1 && t.length > 2
      ? (0, Y.jsx)(`div`, {
          className: K_,
          children: [r, t[1], t[2], t[0], n[0], n[1]],
        })
      : t.length == 1 && n.length > 3
        ? (0, Y.jsx)(`div`, {
            className: K_,
            children: [r, t[0], n[0], n[1], n[2], n[3]],
          })
        : n.length > 1
          ? (0, Y.jsx)(`div`, { className: q_, children: [r, n[0], n[1]] })
          : null;
}
function Gw(e, t) {
  return e > 0
    ? (0, Y.jsx)(Qw, { userYearInReview: t }, `totalAchievements`)
    : null;
}
function Kw(e, t, n) {
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
          $w,
          { oLongestStreak: t, nYear: e, nPrevLongestStreamDays: n },
          `longestStreak`,
        )
      : null;
}
var qw = 1e3;
function Jw(e, t) {
  let n = t.controller_playtime_percentagex100 + t.deck_playtime_percentagex100,
    r =
      t.total_playtime_percentagex100 -
      t.controller_playtime_percentagex100 -
      t.vr_playtime_percentagex100 -
      t.deck_playtime_percentagex100;
  return n < qw || r < qw
    ? null
    : (0, Y.jsx)(eT, { oTotalStats: t, nYear: e }, `hardwareTime`);
}
function Yw(e) {
  let {
      rgGamesLength: t,
      nNewGames: n,
      totalAchievementUnlocked: r,
      nTotalPlaytimeSeconds: i,
      nTotalPercentagePlaytimex100: a,
    } = e,
    o = J(),
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
    (0, Y.jsx)(`div`, { className: B_, children: s })
  );
}
function Xw(e) {
  let t = f_(),
    {
      rgGamesLength: n,
      nNewGames: r,
      nDemoPlayed: i,
      nPlaytestPlayed: a,
      nYear: o,
      nPreviousYearsGames: s,
    } = e,
    c = q(),
    l = hS(`bg_2023.svg`),
    u;
  return (
    n > 99999 ? (u = Dv) : n > 99 && (u = Ev),
    (0, Y.jsx)(`div`, {
      className: (0, Q.default)(G_, c.SummaryCtnShadow),
      children: (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(av, J_, c.GridItem, Q_, c.SummaryCtn),
        children: [
          (0, Y.jsx)(`div`, { className: ov }),
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)($_, _v),
            style: { backgroundImage: `url(${l})` },
          }),
          (0, Y.jsxs)(`div`, {
            className: yv,
            children: [
              (0, Y.jsx)(`div`, {
                className: F_,
                children: R.LocalizeReact(
                  `#YearInReview_SteamRewindHeader`,
                  (0, Y.jsx)(`span`, {
                    className: (0, Q.default)(R_, c.UserName),
                    children: R.Localize(`#YearInReview_PossessiveUserName`, t),
                  }),
                  Jn.Localize(`#date_year`, o),
                ),
              }),
              (0, Y.jsxs)(`div`, {
                className: (0, Q.default)(Sv, xv),
                children: [
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(nv, u),
                    children: D(n),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: Tv,
                    children: R.LocalizePlural(`#YIR_YourSummary_Games`, n),
                  }),
                  (0, Y.jsx)(Zw, {
                    strTokenPrefix: `#YIR_YourSummary_PrevYear_Game`,
                    nCurValue: n,
                    nPrevValue: s,
                  }),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Cv,
            children: [
              !!r &&
                (0, Y.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: D(r),
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: R.LocalizePlural(
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
                      children: D(i),
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: R.LocalizePlural(`#YIR_YourSummary_Demos`, i),
                    }),
                  ],
                }),
              !!a &&
                (0, Y.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: D(a),
                    }),
                    (0, Y.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: R.LocalizePlural(
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
function Zw(e) {
  let { strTokenPrefix: t, nCurValue: n, nPrevValue: r } = e;
  if (r != null && r !== 0 && n !== 0)
    return n == r
      ? null
      : n < r
        ? (0, Y.jsxs)(`div`, {
            className: kv,
            children: [
              (0, Y.jsx)(`div`, { className: (0, Q.default)(Av, Nv) }),
              (0, Y.jsx)(`div`, {
                className: jv,
                children: R.LocalizePlural(`${t}Less`, r - n, D(r - n)),
              }),
            ],
          })
        : (0, Y.jsxs)(`div`, {
            className: kv,
            children: [
              (0, Y.jsx)(`div`, { className: (0, Q.default)(Av, Mv) }),
              (0, Y.jsx)(`div`, {
                className: jv,
                children: R.LocalizePlural(`${t}More`, n - r, D(n - r)),
              }),
            ],
          });
}
function Qw(e) {
  let { userYearInReview: t } = e,
    n = t.GetPlayTimeStats().summary_stats;
  t.GetFilteredGameSummary();
  let r = t.GetYear(),
    i = q();
  if (!n) return null;
  let a = hS(`achievement_grid_02.webp`),
    o;
  return (
    typeof n.total_achievements == `number` && n.total_achievements > 99999
      ? (o = Dv)
      : typeof n.total_achievements == `number` &&
        n.total_achievements > 99 &&
        (o = Ev),
    (0, Y.jsx)(`div`, {
      className: (0, Q.default)(G_, i.SummaryCtnShadow),
      children: (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(
          av,
          J_,
          i.GridItem,
          vv,
          void 0,
          i.SummaryCtn,
          i.AchievementBlock,
        ),
        children: [
          (0, Y.jsx)(`div`, { className: ov }),
          (0, Y.jsx)(`div`, {
            className: (0, Q.default)($_, _v),
            style: { backgroundImage: `url(${a})` },
          }),
          (0, Y.jsxs)(`div`, {
            className: (0, Q.default)(Sv, tv),
            children: [
              (0, Y.jsx)(`div`, {
                className: (0, Q.default)(nv, o),
                children: D(n.total_achievements),
              }),
              (0, Y.jsx)(`div`, {
                className: Tv,
                children: R.LocalizePlural(
                  `#YIR_YourSummary_Achievement`,
                  n.total_achievements,
                ),
              }),
              (0, Y.jsx)(Zw, {
                strTokenPrefix: `#YIR_YourSummary_PrevYear_Ach`,
                nCurValue: n.total_achievements,
                nPrevValue: Hw(r)
                  ? t.GetPreviousYearSummary()?.unlocked_achievements
                  : void 0,
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: gv,
            children: [
              (0, Y.jsxs)(`div`, {
                className: Sv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(nv),
                    children: D(n.total_games_with_achievements || 0),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: Tv,
                    children: R.LocalizePlural(
                      `#YIR_YourSummary_Achievement_Games`,
                      n.total_games_with_achievements,
                    ),
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: Sv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: nv,
                    children: D(n.total_rare_achievements || 0),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: Tv,
                    children: R.LocalizePlural(
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
function $w(e) {
  let { oLongestStreak: t, nPrevLongestStreamDays: n } = e,
    r = t.rtime_start ?? 0,
    i = t.longest_consecutive_days ?? 0,
    a = g_(),
    o = a(r),
    s = a(r + i * 24 * 60 * 60),
    c = q();
  if (Im()) return null;
  let l = hS(`streak_bg.jpg`);
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(G_, c.SummaryCtnShadow),
    children: (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(
        av,
        J_,
        c.GridItem,
        ev,
        c.SummaryCtn,
        c.StreakBlock,
      ),
      children: [
        (0, Y.jsx)(`div`, { className: ov }),
        (0, Y.jsx)(`div`, {
          className: (0, Q.default)($_, _v),
          style: { backgroundImage: `url(${l})` },
        }),
        (0, Y.jsxs)(`div`, {
          className: (0, Q.default)(Sv, tv),
          children: [
            (0, Y.jsx)(`div`, {
              className: nv,
              children: R.LocalizePlural(
                `#YIR_Game_LongestStreak_DaysPlayed`,
                i,
              ),
            }),
            (0, Y.jsx)(`div`, {
              className: Tv,
              children: R.Localize(`#YIR_YourSummary_Stat_Streak`),
            }),
            (0, Y.jsx)(`div`, {
              className: Ov,
              children: R.Localize(
                `#YIR_Game_LongestStreak_FromDateToDate`,
                o,
                s,
              ),
            }),
            (0, Y.jsx)(Zw, {
              strTokenPrefix: `#YIR_YourSummary_PrevYear_Day`,
              nCurValue: i,
              nPrevValue: n,
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: gv,
          children: (0, Y.jsxs)(`div`, {
            className: (0, Q.default)(Sv, wv),
            children: [
              (0, Y.jsx)(`div`, {
                className: nv,
                children: D(t.streak_games.length),
              }),
              (0, Y.jsx)(`div`, {
                className: Tv,
                children: R.LocalizePlural(
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
function eT(e) {
  let { oTotalStats: t, nYear: n } = e,
    r = m_(
      t.total_playtime_percentagex100 -
        t.controller_playtime_percentagex100 -
        t.vr_playtime_percentagex100 -
        t.deck_playtime_percentagex100,
    ),
    i = t.controller_playtime_percentagex100 + t.deck_playtime_percentagex100,
    a = m_(i),
    o = hS(`keyboard.png?v=3`),
    s = hS(`controllers.png?v=2`),
    c = q(),
    l,
    u,
    d;
  return (
    Math.floor(i / 100) < 40
      ? ((l = 40), (u = fv), (d = pv))
      : Math.floor(i / 100) > 60
        ? ((l = 60), (u = pv), (d = fv))
        : (l = i / 100),
    (0, Y.jsx)(`div`, {
      className: (0, Q.default)(G_, c.SummaryCtnShadow),
      children: (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(
          sv,
          av,
          J_,
          c.GridItem,
          rv,
          c.SummaryCtn,
          c.HardwareBlock,
        ),
        children: [
          (0, Y.jsx)(`div`, { className: ov }),
          (0, Y.jsxs)(`div`, {
            className: cv,
            children: [
              (0, Y.jsxs)(`div`, {
                className: lv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: $_,
                    style: { background: `url(${o}) bottom` },
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(uv, d),
                    children: r,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(mv, d),
                    children: R.Localize(`#YIR_HowYouPlayed_Keyboard_Generic`),
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: dv,
                style: { height: l + `%` },
                children: [
                  (0, Y.jsx)(`div`, {
                    className: $_,
                    style: { background: `url(${s}) top` },
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(uv, u),
                    children: a,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(mv, u),
                    children: R.Localize(
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
function tT(e) {
  let { gameStat: t, gridClass: n } = e,
    { appid: r } = t,
    { item: i } = kh(r),
    a = w_(0, [r]),
    o = q();
  if (!i) return null;
  let s = Qi(i.assets, `library_hero`),
    c = Math.trunc(t.stats.total_sessions);
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(G_, o.SummaryCtnShadow),
    children: (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(av, J_, o.GridItem, D_[n], o.SummaryCtn, o[n]),
      onClick: a,
      children: [
        (0, Y.jsx)(`div`, { className: ov }),
        (0, Y.jsx)(`div`, {
          className: (0, Q.default)($_, o.BackgroundImage),
          style: { backgroundImage: `url(${s})` },
        }),
        (0, Y.jsx)(`div`, { className: hv, children: i.info.name }),
        (0, Y.jsxs)(`div`, {
          className: gv,
          children: [
            (0, Y.jsx)(nT, {
              percentVal: t.stats.total_playtime_percentagex100,
              subToken: `#YIR_Game_PlayStat`,
            }),
            (0, Y.jsxs)(`div`, {
              className: Sv,
              children: [
                (0, Y.jsx)(`div`, { className: nv, children: D(c) }),
                (0, Y.jsx)(`div`, {
                  className: Tv,
                  children: R.Localize(
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
function nT(e) {
  let { percentVal: t, subToken: n, className: r } = e,
    i = m_(t),
    a = `${n}_Percent`;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(Sv, r),
    children: [
      (0, Y.jsx)(`div`, { className: nv, children: i }),
      (0, Y.jsx)(`div`, { className: Tv, children: R.Localize(a) }),
    ],
  });
}
var rT = `VliP-d3rrOA-`,
  iT = `rN6Rp7gRK-8-`,
  aT = `_0KyNXUd2ye8-`,
  oT = `XVKp9D8UO7c-`,
  sT = `RY2J6XyyEuM-`,
  cT = `yaLK-z4T8sw-`;
Gx();
var lT = z.memo(function (e) {
    let { data: t, topMonthlyAppsAndRanks: n } = e,
      r = q(),
      i = (0, z.useCallback)((e, n) => (t[n]?.date ? Hr(t[n].date) : ``), [t]),
      a = (0, z.useRef)(void 0);
    return (0, Y.jsxs)(Np, {
      responsive: !0,
      style: { width: `100%`, height: `100%` },
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 30,
      children: [
        (0, Y.jsx)(Pt, { vertical: !1, stroke: `#a0aab6` }),
        (0, Y.jsx)(Ye, {
          tickFormatter: m_,
          tick: { fill: `white` },
          axisLine: !0,
        }),
        (0, Y.jsx)(vt, {
          wrapperStyle: { outline: `none` },
          allowEscapeViewBox: { x: !1, y: !0 },
          isAnimationActive: !1,
          offset: 0,
          content: (e) =>
            (0, Y.jsx)(dT, {
              active: e.active,
              payload: e.payload,
              hoveredBarIDRef: a,
            }),
        }),
        (0, Y.jsx)(bt, {
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
            bt,
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
        (0, Y.jsx)(Et, {
          interval: 0,
          tick: (0, Y.jsx)(_T, {}),
          tickFormatter: i,
        }),
      ],
    });
  }),
  uT = 7;
function dT(e) {
  let { active: t, payload: n, hoveredBarIDRef: r } = e,
    i = q(),
    a = J();
  if (t && n && n.length) {
    let e = n[0].payload.date.getUTCMonth(),
      t = R.Localize(`#YIR_MonthlyCharts_MonthNoun_${e + 1}`),
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
              z.Fragment,
              {
                children: [
                  !a &&
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(e === l && `QlEkl-Bj9Tk-`),
                      children: yT(
                        i,
                        t,
                        `#YIR_MonthlyCharts_OtherGamesTooltip`,
                      ),
                    }),
                  u &&
                    s
                      .slice(0, uT)
                      .map((e) =>
                        (0, Y.jsx)(
                          mT,
                          { appId: e, className: `QlEkl-Bj9Tk-` },
                          e,
                        ),
                      ),
                  u &&
                    s.length > uT &&
                    (0, Y.jsx)(`div`, {
                      className: `QlEkl-Bj9Tk-`,
                      children: R.Localize(
                        `#YIR_MonthlyCharts_OtherGamesTooltip_AndMore`,
                        s.length - uT,
                      ),
                    }),
                ],
              },
              r,
            );
          }
          return e.value
            ? (0, Y.jsx)(
                hT,
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
    return (0, Y.jsxs)(Hl, {
      style: { background: l?.color ?? i.monthOthersColor },
      className: rT,
      children: [
        (0, Y.jsx)(`div`, { className: iT }),
        (0, Y.jsx)(`div`, {
          className: oT,
          children:
            l &&
            (0, Y.jsxs)(Y.Fragment, {
              children: [
                !u && (0, Y.jsx)(pT, { appId: l.name }),
                u && (0, Y.jsx)(fT, { appIds: s.slice(0, 7) }),
              ],
            }),
        }),
        (0, Y.jsxs)(`div`, {
          className: aT,
          children: [
            (0, Y.jsx)(`div`, {
              className: void 0,
              children: yT(o, t, `#YIR_MonthlyCharts_PlayedTotalTooltip`),
            }),
            !f &&
              (0, Y.jsxs)(Y.Fragment, {
                children: [
                  (0, Y.jsx)(`div`, {
                    children: R.Localize(
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
function fT({ appIds: e }) {
  return (0, Y.jsx)(`div`, {
    className: sT,
    children: e?.map((t, n) =>
      (0, Y.jsx)(
        pT,
        { appId: t, style: { zIndex: e.length - n, "--stack-position": n } },
        t,
      ),
    ),
  });
}
function pT({ appId: e, style: t }) {
  let { item: n } = kh(parseInt(e));
  if (!n?.assets) return null;
  let r = Qi(n.assets, `library_capsule`) || Uh;
  return (0, Y.jsx)(`img`, { alt: ``, style: t, className: cT, src: r });
}
function mT({ appId: e, className: t }) {
  let { item: n } = kh(parseInt(e));
  return n
    ? (0, Y.jsx)(`div`, { className: t, children: n.info.name }, e)
    : null;
}
function hT(e) {
  let { appId: t, className: n, value: r, date: i } = e,
    { item: a } = kh(parseInt(t));
  return a
    ? (0, Y.jsx)(
        `div`,
        {
          className: n,
          children: yT(
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
var gT = z.memo(function (e) {
  let { data: t, name: n, color: r } = e,
    i = q(),
    a = (0, z.useCallback)((e, n) => (t[n]?.date ? Hr(t[n].date) : ``), [t]),
    [o, s] = (0, z.useState)(!1);
  (0, z.useEffect)(() => {
    s(document.documentElement.matches(`:dir(rtl)`));
  }, []);
  let c = `left`;
  return (
    o && (c = `right`),
    (0, Y.jsxs)(Np, {
      responsive: !0,
      style: { width: `100%`, height: `100%` },
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 30,
      children: [
        (0, Y.jsx)(vt, {
          wrapperStyle: {
            outline: `1px solid ` + (r ?? i.chartAccentColorAlt),
          },
          allowEscapeViewBox: { x: !1, y: !0 },
          reverseDirection: { x: o, y: !1 },
          isAnimationActive: !1,
          content: (e) =>
            (0, Y.jsx)(vT, { active: e.active, payload: e.payload, name: n }),
        }),
        (0, Y.jsx)(Pt, { vertical: !1, stroke: `#a0aab6` }),
        (0, Y.jsx)(Ye, {
          tickFormatter: m_,
          tick: { fill: `white` },
          axisLine: !0,
          orientation: c,
        }),
        (0, Y.jsx)(bt, {
          barSize: 60,
          dataKey: `percent`,
          fill: r ?? i.chartAccentColorAlt,
        }),
        (0, Y.jsx)(Et, {
          interval: 0,
          tick: (0, Y.jsx)(_T, { bRTL: o }),
          tickFormatter: a,
          color: `#ffffff`,
          reversed: o,
        }),
      ],
    })
  );
});
function _T(e) {
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
function vT(e) {
  let { active: t, payload: n, name: r } = e,
    i = q(),
    a = n[0];
  if (t && a?.value) {
    let e = a.payload.date.getUTCMonth(),
      t = R.Localize(`#YIR_MonthlyCharts_MonthNoun_${e + 1}`),
      n = a.value;
    return (0, Y.jsx)(Hl, {
      style: { background: `#0e1014` },
      children: (0, Y.jsx)(
        `div`,
        {
          style: { color: i.chartAccentColor },
          children: R.LocalizeReact(
            `#YIR_MonthlyCharts_TopPlayedGameTooltip_Percent`,
            (0, Y.jsx)(`b`, { children: m_(n) }),
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
function yT(e, t, n, ...r) {
  let i = `${n}_Percent`;
  return R.LocalizeReact(i, (0, Y.jsx)(`b`, { children: m_(e) }), t, ...r);
}
var bT = `Md96G4kZDAE-`;
function xT(e) {
  let { userYearInReview: t } = e,
    n = J(),
    r = t.GetChartMonthlyData(),
    i = t.GetTopGameIdsAndRanks(),
    a = t.GetPlayTimeStats().games?.length ?? 0;
  return (0, Y.jsx)(`div`, {
    className: bT,
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
              children: (0, Y.jsx)(lT, { data: r, topMonthlyAppsAndRanks: i }),
            }),
          }),
        ],
      }),
  });
}
function ST(e) {
  let t = fh(e),
    n = mh(e, !1);
  return CT(t?.all_time_unlocked_achievements, n?.length ?? 0);
}
function CT(e, t) {
  return typeof e == `number` && e > 0 && t > 0 && t <= e;
}
var wT = 2022,
  TT = `_2fXTkYFuLL0-`,
  ET = `_5hU6-LHkC9I-`,
  DT = `zDLaFJWW2Nk-`,
  OT = `N5WJoNh0dWc-`,
  kT = `JIuGrMQYevI-`,
  AT = `WzRwXnpcz6g-`,
  jT = `_4AJ91mlqTEg-`,
  MT = `OetAU-ImB-A-`,
  NT = `qRqoeOi-LW0-`,
  PT = `wlHDLgvcDaY-`,
  FT = `_7HxW8ABT2Qw-`,
  IT = `_1XiF5sig4jA-`;
function LT(e) {
  let { appid: t, userYearInReview: n } = e,
    r = fh(t);
  return !r || !((r?.achievements?.length ?? 0) > 0)
    ? null
    : (0, Y.jsx)(E, {
        children: (0, z.createElement)(RT, {
          ...e,
          key: `achievementunlucklist_` + t,
          userUnlockedAchievements: r,
        }),
      });
}
function RT(e) {
  let {
      appid: t,
      userYearInReview: n,
      bBlurContent: r,
      userUnlockedAchievements: i,
    } = e,
    [a, o] = (0, z.useState)(r),
    s = J(),
    c = gh(t),
    l = () => o(!1),
    u = i.achievements?.length ?? 0,
    d = i.all_time_unlocked_achievements,
    f = d == c && c > 0 && u > 0 && d > 0 && !i.unlocked_more_in_future,
    p = Kl({ appid: t, profileUrl: sn(n.GetSteamID()) }),
    m = aa();
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(X, TT),
    children: [
      a &&
        (0, Y.jsx)(`div`, {
          onClick: l,
          className: `_2i6-GdwcqFw-`,
          children: R.Localize(`#YIR_TopGames_ContentRestrictionAchievements`),
        }),
      (0, Y.jsxs)(`div`, {
        className: ET,
        children: [
          (0, Y.jsx)(`div`, {
            className: OT,
            children: s(`#YIR_TopGames_Achievements`),
          }),
          (0, Y.jsxs)(`div`, {
            className: DT,
            children: [
              m &&
                (0, Y.jsx)(`a`, {
                  href: p,
                  className: `cOnRdqZh5ak-`,
                  children: R.Localize(`#YIR_SeeAllAchievements`),
                }),
              !m &&
                (0, Y.jsx)(uc, {
                  href: p,
                  target: `_blank`,
                  className: `cOnRdqZh5ak-`,
                  children: R.Localize(`#YIR_SeeAllAchievements`),
                }),
            ],
          }),
        ],
      }),
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)({ [void 0]: f, [kT]: !0 }),
        children: (0, Y.jsxs)(`div`, {
          className: AT,
          children: [
            (0, Y.jsxs)(`div`, {
              className: jT,
              children: [
                (0, Y.jsx)(`div`, { className: MT, children: D(u) }),
                (0, Y.jsx)(`div`, {
                  className: NT,
                  children: R.LocalizeReact(
                    `#YIR_UnlockedThisYear_Short`,
                    (0, Y.jsx)(`br`, {}),
                  ),
                }),
              ],
            }),
            (0, Y.jsx)(zT, { userUnlockedAchievements: i }),
          ],
        }),
      }),
    ],
  });
}
function zT(e) {
  let { userUnlockedAchievements: t } = e,
    n = t.appid;
  Ii(n, `Missing appid for achievements list!`);
  let r = hh(n),
    i = (0, z.useMemo)(
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
              VT,
              { appid: n, display: e },
              `displayAch_` + e.internal_name,
            ),
          ),
      })
    : (0, Y.jsx)(tn, { size: `small`, string: Jn.Localize(`#Loading`) });
}
var BT = 10;
function VT(e) {
  let { display: t, appid: n } = e,
    r = `${P.MEDIA_CDN_COMMUNITY_URL}images/apps/${n}/${t.icon}`,
    i = Number.parseFloat(`` + t.player_percent_unlocked) < BT;
  return (0, Y.jsx)(Sr, {
    toolTipContent: (0, Y.jsx)(HT, { display: t }),
    className: (0, Q.default)({ [FT]: i, [PT]: !0 }),
    children: (0, Y.jsx)(ql, {
      imgURL: r,
      className: IT,
      alt: t.localized_name ?? t.internal_name,
      glow: i,
      hideNativeTooltip: !0,
    }),
  });
}
function HT(e) {
  let { display: t } = e,
    n;
  return (
    t.localized_desc && t.localized_name
      ? (n = `${t?.localized_name}: ${t.localized_desc}`)
      : t.localized_name
        ? (n = t.localized_name)
        : t.internal_name && (n = t.internal_name),
    (0, Y.jsxs)(`div`, {
      className: Ma,
      children: [
        (0, Y.jsx)(`div`, { children: n }),
        (0, Y.jsx)(`br`, {}),
        (0, Y.jsx)(`div`, {
          children: R.Localize(
            `#YIR_Achievement_ttip`,
            D(Math.max(0.1, Number.parseFloat(`` + t.player_percent_unlocked))),
          ),
        }),
      ],
    })
  );
}
var UT = `l-51YapU23U-`,
  WT = `MFK0ZYn4p8Y-`,
  GT = `z5SvMUtFD4c-`,
  KT = `Pj3LFELaj0I-`;
function qT(e) {
  let { appid: t, bBlurContent: n, nYear: r } = e,
    i = yh(t),
    [a, o] = Qt(),
    s = J();
  return !i || i.length == 0
    ? null
    : (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(X, UT),
        children: [
          o,
          (0, Y.jsx)(`div`, {
            className: WT,
            children: s(`#YIR_ScreenshotsThisYear`),
          }),
          (0, Y.jsx)(`div`, {
            className: GT,
            children: i.map((e, t) =>
              (0, Y.jsx)(
                YT,
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
var JT = `?imw=375&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false`;
function YT(e) {
  let {
      screenshot: t,
      fnSetExpandScreenShot: n,
      bBlurContent: r,
      nYear: i,
    } = e,
    [a, o] = (0, z.useState)(r),
    s = { backgroundImage: `url(${t.image_url + JT})` };
  return (0, Y.jsxs)(`div`, {
    className: KT,
    onClick: () => {
      (a && o(!1), n());
    },
    style: s,
    children: [
      a &&
        (0, Y.jsx)(`div`, {
          className: `L83TMGRMjs8-`,
          children: R.Localize(`#YIR_TopGames_ContentRestrictionScreenshots`),
        }),
      (0, Y.jsx)(`img`, { alt: ``, src: hS(`screenshot_placeholder.png`) }),
    ],
  });
}
function XT(e) {
  let { userYearInReview: t } = e,
    n = t.GetTopGamesShownAppIDs(),
    r = J(),
    i = (0, z.useMemo)(() => n?.slice(0, 5), [0, 5, n]);
  if (!n || n.length == 0 || 0 > n.length) return null;
  let a = n.length > 1;
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(Xh),
    children: (0, Y.jsxs)(an, {
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
                tE,
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
function ZT(e) {
  let { gameSummary: t, index: n, userYearInReview: r } = e,
    i = J(),
    a = p_(),
    o = t.appid,
    s = r.GetYear();
  for (let e = s; e >= wT; --e) {
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
function QT(e) {
  let [t, n] = z.useState(!1),
    r = z.useRef(null),
    i = r.current,
    a = E_();
  (z.useEffect(() => {
    (e !== null && e != i && n(!0), e === null && t && n(!1));
  }, [n, t, e, i]),
    (r.current = e));
  let o = z.useRef(void 0),
    s = z.useCallback(() => {
      ((o.current = setTimeout(() => a(e), parseInt(Gh))), n(!1));
    }, [a, e]);
  return (
    z.useEffect(
      () => () => {
        (o.current && clearTimeout(o.current), (o.current = void 0));
      },
      [],
    ),
    [t, s]
  );
}
function $T(e) {
  return z.useCallback(
    (t) => {
      t.target == t.currentTarget && e();
    },
    [e],
  );
}
function eE(e) {
  let { userYearInReview: t } = e,
    { unAppID: n, length: r, index: i = 0 } = S_(),
    [a, o] = QT(n),
    s = $T(o),
    c = T_(i + 1),
    l = T_(i - 1),
    u = Ta();
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
              (0, Y.jsx)(tE, { unAppID: n, userYearInReview: t, index: 1 }),
          }),
          (0, Y.jsx)($t, {
            index: i,
            numElements: r,
            fnForward: c,
            fnBackwards: l,
            fnClose: o,
          }),
        ],
      }),
    });
  return typeof document > `u` ? null : cu.createPortal(f, document.body);
}
var tE = z.memo(function (e) {
  let { unAppID: t, userYearInReview: n, index: r } = e,
    i = n.GetGameStats(t),
    a = Math.trunc(i?.playtime_streak?.longest_consecutive_days || 1),
    o = n.GetGameSummaryForApp(t),
    s = o ? o.parent_appid || t : 0,
    { item: c, bLoading: l } = kh(s),
    u = ST(s),
    d = Ir(c ? Zt(c.info) : void 0),
    f = J(),
    p = r % 2 ? `OddGradient` : `EvenGradient`,
    m = Ta(),
    h = u_(),
    g = q(),
    _ = aa(),
    { gameChartData: v, rank: y } = (0, z.useMemo)(
      () => n.GetChartMonthlyDataForApp(t),
      [t, n],
    );
  if (l)
    return (0, Y.jsx)(`div`, {
      className: (0, Q.default)($h, Wh[p], g.TopGameBlockContainer, g[p], eg),
      children: (0, Y.jsx)(tn, { position: `center` }),
    });
  if (!c || !o) return null;
  let b = d;
  P.IN_CLIENT && (b = `steam://openurl/` + b);
  let ee = v?.find((e) => e.percent > 0),
    te = ee ? ee.date.getUTCMonth() : null,
    ne = te ? R.Localize(`#YIR_MonthlyCharts_MonthNoun_${te + 1}`) : ``,
    re = Math.trunc(o.total_sessions),
    ie = ``;
  h && m
    ? (ie = `steam://open/games/details/${t}`)
    : h && !P.IN_MOBILE_WEBVIEW && (ie = `steam://open/library/details/${t}`);
  let ae = c.info.name ?? ``,
    x = ae;
  return (
    o.demo
      ? (x = R.Localize(`#YIR_GameName_PlusDemo`, x))
      : o.playtest && (x = R.Localize(`#YIR_GameName_PlusPlaytest`, x)),
    (0, Y.jsxs)($, {
      className: (0, Q.default)($h, Wh[p], g.TopGameBlockContainer, g[p]),
      children: [
        (0, Y.jsx)(rE, { item: c }),
        (0, Y.jsxs)(`div`, {
          className: ng,
          children: [
            (0, Y.jsx)(nE, { item: c }),
            (0, Y.jsxs)(`div`, {
              className: (0, Q.default)(X, fg),
              children: [
                (0, Y.jsxs)(`div`, {
                  className: pg,
                  children: [
                    (0, Y.jsxs)(j, {
                      className: mg,
                      "flow-children": `row`,
                      children: [
                        _ &&
                          (0, Y.jsx)(`a`, {
                            href: b,
                            className: `_3zY6l-RwMbM-`,
                            children: R.Localize(`#YIR_TopGames_VisitInStore`),
                          }),
                        !_ &&
                          (0, Y.jsx)(uc, {
                            href: b,
                            target: `_blank`,
                            className: `_3zY6l-RwMbM-`,
                            children: R.Localize(`#YIR_TopGames_VisitInStore`),
                          }),
                        !!ie &&
                          (0, Y.jsx)(uc, {
                            href: ie,
                            className: `_3zY6l-RwMbM-`,
                            children: R.Localize(
                              `#YIR_TopGames_VisitInLibrary`,
                            ),
                          }),
                        !h && (0, Y.jsx)(aE, { appID: s }),
                      ],
                    }),
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)({
                        [ag]: !0,
                        [_g]: (x?.length ?? 0) > 25,
                      }),
                      children: x,
                    }),
                    (0, Y.jsx)(ZT, {
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
                                children: m_(
                                  Math.ceil(o.total_playtime_percentagex100),
                                ),
                              }),
                              (0, Y.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: R.Localize(
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
                                children: D(re),
                              }),
                              (0, Y.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: R.Localize(
                                  re == 1
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
                            children: (0, Y.jsxs)(xa, {
                              toolTipContent: R.LocalizeReact(
                                `#YIR_Game_LongestStreak_ttip`,
                              ),
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `Jsbe84OZILs-`,
                                  children: D(a),
                                }),
                                (0, Y.jsx)(`div`, {
                                  className: `ao7jCFf5gSI-`,
                                  children: R.Localize(
                                    `#YIR_Game_LongestStreak`,
                                  ),
                                }),
                              ],
                            }),
                          }),
                        !!o?.new_this_year &&
                          (0, Y.jsx)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: (0, Y.jsxs)(xa, {
                              toolTipContent: f(
                                `#YIR_TopGames_NewThisYEar_ttip`,
                              ),
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `Jsbe84OZILs-`,
                                  children: (0, Y.jsx)(ac, {}),
                                }),
                                (0, Y.jsx)(`div`, {
                                  className: `ao7jCFf5gSI-`,
                                  children: R.Localize(
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
                                children: (0, Y.jsx)(En, {}),
                              }),
                              (0, Y.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: R.Localize(`#YIR_TopGames_100`),
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
                        children: ne
                          ? f(
                              o?.new_this_year
                                ? `#YIR_TopGames_firstplayedNew`
                                : `#YIR_TopGames_firstplayed`,
                              ne,
                            )
                          : null,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `xPrgBVyuYEE-`,
                        children: (0, Y.jsx)(gT, {
                          data: v,
                          name: ae,
                          color: g[`topApp_${y}`],
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, Y.jsx)(iE, { appid: s, userYearInReview: n, item: c }),
      ],
    })
  );
});
function nE(e) {
  let { item: t } = e,
    n = d_(t.info),
    r = Qi(t.assets, `library_hero`);
  return (0, Y.jsx)(`div`, {
    className: dg,
    style: n ? void 0 : { backgroundImage: `url(${r})` },
  });
}
function rE(e) {
  let { item: t } = e,
    n = q(),
    r = d_(t.info),
    i = Qi(t.assets, `library_hero`);
  return (0, Y.jsx)(Y.Fragment, {
    children: (0, Y.jsx)(`div`, {
      className: (0, Q.default)(lg, n.BackgroundImageFull),
      style: r ? void 0 : { backgroundImage: `url(${i})` },
    }),
  });
}
function iE(e) {
  let { appid: t, userYearInReview: n, item: r } = e,
    i = d_(r.info);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(LT, { bBlurContent: i, appid: t, userYearInReview: n }),
      (0, Y.jsx)(qT, { bBlurContent: i, appid: t, nYear: n.GetYear() }),
    ],
  });
}
function aE(e) {
  let { appID: t } = e,
    n = re(t),
    r = Bt(t),
    { bIsOwned: i } = Qe(n),
    a = Ya(),
    { mutate: o } = lt(t, !r, a);
  return !T.logged_in || i
    ? null
    : (0, Y.jsxs)(j, {
        className: (0, Q.default)(gg),
        onActivate: (e) => {
          (e.preventDefault(), e.stopPropagation(), o());
        },
        children: [
          r ? (0, Y.jsx)(il, {}) : (0, Y.jsx)(Ol, {}),
          Jn.Localize(r ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`),
        ],
      });
}
function oE(e) {
  let { pageData: t } = e,
    { steamid: n, nYear: r, eResult: i } = t;
  z.useEffect(() => {
    let e = new URL(window.location.href),
      t = [`src`, `snr`, `sP`].filter((t) => e.searchParams.has(t));
    t.length &&
      (t.forEach((t) => e.searchParams.delete(t)),
      window.history.replaceState(window.history.state, ``, e));
  }, []);
  let a = z.useRef(null);
  return (
    z.useEffect(() => {
      a.current && a.current.NavTree()?.Activate(!0);
    }, []),
    i == 15
      ? (0, Y.jsx)(mE, {
          message: R.Localize(`#YIR_Error_NoShareNoGameplayNotUser`),
        })
      : !n || !r
        ? (0, Y.jsx)(mE, { message: R.Localize(`#YIR_Error_NoData`) })
        : (0, Y.jsx)(Eh.Provider, {
            value: t,
            children: (0, Y.jsx)(j, {
              navRef: a,
              children: (0, Y.jsx)(sE, { steamid: n, year: r }),
            }),
          })
  );
}
function sE(e) {
  let { steamid: t, year: n } = e,
    r = new Ca(t),
    [i, a] = Yl(r.GetAccountID()),
    { userYearInReview: o, isLoading: s } = rh(t, n),
    { isLoading: c, isError: l } = Ah(o?.GetTopGamesShownAppIDs() ?? []),
    u = Hh();
  if (a || s || c || !u)
    return (0, Y.jsx)(tn, {
      string: Jn.Localize(`#Loading`),
      position: `center`,
    });
  if (!i || !r.BIsIndividualAccount())
    return (0, Y.jsx)(mE, { message: R.Localize(`#YIR_Error_NoUser`) });
  if (!o || l)
    return (0, Y.jsx)(mE, { message: R.Localize(`#YIR_Error_PageLoadFailed`) });
  let d = !o.GetPlayTimeStats()?.game_summary?.length;
  return T.steamid !== i.steamid && d
    ? (0, Y.jsx)(mE, {
        message: R.Localize(`#YIR_Error_NoShareNoGameplayNotUser`),
      })
    : d
      ? (0, Y.jsx)(mE, { message: R.Localize(`#YIR_Error_NoShareNoGameplay`) })
      : (0, Y.jsx)(j, {
          autoFocus: !0,
          noFocusRing: !0,
          focusable: !1,
          scrollIntoViewType: cl.NoTransformSparseContent,
          children: (0, Y.jsx)(`div`, {
            className: O_,
            children: (0, Y.jsx)(lE, {
              userYearInReview: o,
              avatarAndPersona: i,
            }),
          }),
        });
}
function cE(e) {
  let {
      viewAsUser: t,
      avatarAndPersona: n,
      userYearInReview: r,
      themeYear: i,
      children: a,
    } = e,
    o = Xl(i),
    s = Ws(),
    c = r.GetSteamID(),
    l = r.GetYear(),
    u = z.useMemo(() => oh(s, c, l), [s, c, l]),
    d = z.useMemo(
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
    children: (0, Y.jsx)(io, {
      eAdultOnlyMediaBehavior: t ? `allowed` : `masked`,
      children: (0, Y.jsx)(sh.Provider, {
        value: u,
        children: (0, Y.jsx)(b_, { children: a }),
      }),
    }),
  });
}
function lE(e) {
  let { userYearInReview: t, avatarAndPersona: n } = e,
    r = t.GetYear(),
    i = T.logged_in && T.steamid === n.steamid,
    [a, o] = (0, z.useState)(i),
    [s, c] = (0, z.useState)(r);
  return (0, Y.jsxs)(cE, {
    viewAsUser: a,
    userYearInReview: t,
    avatarAndPersona: n,
    themeYear: s,
    children: [
      (0, Y.jsx)(pE, {
        viewAsUser: a,
        setViewAsUser: o,
        themeYear: s,
        setThemeYear: c,
      }),
      (0, Y.jsx)(uE, { ...e, viewAsUser: a }),
    ],
  });
}
function uE(e) {
  let { userYearInReview: t, viewAsUser: n } = e,
    r = t.GetSteamID(),
    i = t.GetYear();
  dh(t);
  let { persona_name: a } = (0, z.useContext)(l_),
    o = t.GetPlayTimeStats().game_summary?.length;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(fE, { userYearInReview: t }),
      (0, Y.jsx)(E, {
        children: (0, Y.jsxs)(yb, {
          userYearInReview: t,
          children: [
            (0, Y.jsx)(Uw, { userYearInReview: t }),
            o === 1 && (0, Y.jsx)(XT, { userYearInReview: t }),
          ],
        }),
      }),
      (0, Y.jsx)(E, { children: (0, Y.jsx)(Yx, { userYearInReview: t }) }),
      typeof o == `number` &&
        o > 1 &&
        (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(XT, { userYearInReview: t }),
            (0, Y.jsx)(`div`, {
              className: `xan-F7AKHTg-`,
              children: (0, Y.jsx)(E, {
                children: (0, Y.jsx)(xT, { userYearInReview: t }),
              }),
            }),
          ],
        }),
      (0, Y.jsx)(`div`, {
        className: Iv,
        children: (0, Y.jsx)(E, {
          children: (0, Y.jsx)(DS, { userYearInReview: t }),
        }),
      }),
      !!t.GetPlayTimeStats().playtime_streak &&
        (0, Y.jsx)(E, { children: (0, Y.jsx)(JS, { userYearInReview: t }) }),
      typeof o == `number` &&
        o > 5 &&
        (0, Y.jsx)(E, {
          children: (0, Y.jsx)(Uy, { userYearInReview: t, nYear: i }),
        }),
      (0, Y.jsx)(E, {
        children: (0, Y.jsxs)(`div`, {
          className: ty,
          children: [
            (0, Y.jsx)(yb, {
              userYearInReview: t,
              children: (0, Y.jsx)(hE, { playerName: a, userYearInReview: t }),
            }),
            n &&
              (0, Y.jsxs)(`div`, {
                className: `GQ15KBYq0dM-`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `aXiQBfYGO9I-`,
                    children: R.Localize(`#YIR_ShareOptionsTitle`),
                  }),
                  (0, Y.jsxs)(j, {
                    className: `QsTph6fo6tE-`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: (0, Q.default)(`PmXhnAChGR0-`),
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `smzKi1RTbdQ-`,
                            children: R.Localize(`#YIR_ShareModal_TitleSocial`),
                          }),
                          (0, Y.jsx)(Aw, { steamid: r, nYear: i }),
                        ],
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: (0, Q.default)(`PmXhnAChGR0-`),
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `smzKi1RTbdQ-`,
                            children: R.Localize(
                              `#YIR_ShareModal_TitleProfile`,
                            ),
                          }),
                          (0, Y.jsxs)(uc, {
                            href: `${P.COMMUNITY_BASE_URL}profiles/${T.steamid}/edit/showcases`,
                            className: (0, Q.default)(`j8A4NpxJ0t0-`),
                            children: [
                              (0, Y.jsx)(Rs, { className: `uc6rSxuiYYU-` }),
                              (0, Y.jsx)(`span`, {
                                className: (0, Q.default)(`_2-Cr-SQJps0-`),
                                children: R.Localize(
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
      (0, Y.jsx)(E, { children: (0, Y.jsx)(uS, { userYearInReview: t }) }),
      (0, Y.jsx)(E, { children: (0, Y.jsx)(nC, { steamid: r, year: i }) }),
      (0, Y.jsx)(E, { children: (0, Y.jsx)(gE, { year: i }) }),
      (0, Y.jsx)(E, { children: (0, Y.jsx)(eE, { userYearInReview: t }) }),
    ],
  });
}
function dE() {
  let e = q(),
    { persona_name: t, avatar_url: n } = (0, z.useContext)(l_);
  return (0, Y.jsxs)(`div`, {
    className: I_,
    children: [
      (0, Y.jsx)(Wl, {
        strAvatarURL: n.replace(/\.jpg$/, `_full.jpg`),
        className: L_,
      }),
      (0, Y.jsx)(`span`, {
        className: (0, Q.default)(R_, e.UserName),
        children: R.Localize(`#YearInReview_PossessiveUserName`, t),
      }),
    ],
  });
}
function fE(e) {
  let { userYearInReview: t } = e,
    n = t.GetSteamID(),
    r = t.GetYear();
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(X, k_),
    children: (0, Y.jsxs)(`div`, {
      className: P_,
      children: [
        (0, Y.jsx)(`div`, {
          className: F_,
          children: R.LocalizeReact(
            `#YearInReview_SteamRewindHeader`,
            (0, Y.jsx)(dE, {}),
            Jn.Localize(`#date_year`, r, ` `),
          ),
        }),
        T.logged_in &&
          (0, Y.jsx)(`div`, {
            className: `-vTPvlHUL7g-`,
            children: (0, Y.jsx)(`div`, {
              className: (0, Q.default)(`PmXhnAChGR0-`),
              children: (0, Y.jsx)(E, {
                children: (0, Y.jsx)(Aw, { steamid: n, nYear: r }),
              }),
            }),
          }),
      ],
    }),
  });
}
function pE(e) {
  let { viewAsUser: t, setViewAsUser: n, themeYear: r, setThemeYear: i } = e,
    a = [
      { data: 2022, label: `2022` },
      { data: 2023, label: `2023` },
      { data: 2024, label: `2024` },
      { data: 2025, label: `2025` },
      { data: 2026, label: `2026` },
    ],
    o = (0, z.useCallback)(
      (e) => {
        i(e.data);
      },
      [i],
    ),
    s = Ta(),
    { bAllowDevToggles: c } = Dh();
  return !c || s
    ? null
    : (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(Hv, rn),
        children: [
          (0, Y.jsx)(`div`, {
            children: `Debug Only: Toggle First Person View`,
          }),
          (0, Y.jsx)(Pl, { onChange: n, checked: t }),
          (0, Y.jsx)(`div`, {
            children: `Debug Only: Change to view the contents in the css style of a different year`,
          }),
          (0, Y.jsx)(qa, { rgOptions: a, selectedOption: r, onChange: o }),
        ],
      });
}
function mE(e) {
  let { message: t } = e;
  return (0, Y.jsxs)(`div`, {
    className: Uv,
    children: [
      (0, Y.jsx)(`div`, { className: Gv }),
      (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(O_, qv),
        children: [
          (0, Y.jsx)(`div`, { className: B_, children: t }),
          (0, Y.jsx)(`div`, {}),
        ],
      }),
    ],
  });
}
function hE(e) {
  let { userYearInReview: t } = e,
    n = q();
  if (!T.is_support && T.accountid != t.GetAccountID()) return null;
  let r = t.GetYear();
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(X, Yv),
    children: (0, Y.jsx)(`div`, {
      className: B_,
      children: R.LocalizeReact(
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
function gE(e) {
  let { year: t } = e;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(void 0, Zv),
    children: [
      (0, Y.jsx)(`div`, {
        className: B_,
        children: R.Localize(`#YIR_FAQ_Title`),
      }),
      (0, Y.jsxs)(`div`, {
        className: Xv,
        children: [
          (0, Y.jsxs)(`div`, {
            className: Qv,
            children: [
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_Dates_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: ey,
                children: R.Localize(`#YIR_FAQ_Dates_A`, t),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Qv,
            children: [
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_Offline_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: ey,
                children: R.Localize(`#YIR_FAQ_Offline_A`),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Qv,
            children: [
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_Types_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: ey,
                children: R.Localize(`#YIR_FAQ_Types_A`),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Qv,
            children: [
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_Share_Q`),
              }),
              (0, Y.jsxs)(`div`, {
                className: ey,
                children: [
                  R.Localize(`#YIR_FAQ_Share_A`),
                  (0, Y.jsxs)(`ol`, {
                    children: [
                      (0, Y.jsx)(`li`, {
                        children: R.Localize(`#YIR_FAQ_Share_A_b1`),
                      }),
                      (0, Y.jsx)(`li`, {
                        children: R.Localize(`#YIR_FAQ_Share_A_b2`),
                      }),
                      (0, Y.jsx)(`li`, {
                        children: R.Localize(`#YIR_FAQ_Share_A_b3`),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Qv,
            children: [
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_ShareFamily_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: ey,
                children: R.Localize(`#YIR_FAQ_ShareFamily_A`),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Qv,
            children: [
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_Controller_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: ey,
                children: R.Localize(`#YIR_FAQ_Controller_A1`),
              }),
              (0, Y.jsx)(`br`, {}),
              (0, Y.jsx)(`div`, {
                className: ey,
                children: R.Localize(`#YIR_FAQ_Controller_A2`),
              }),
            ],
          }),
          t == 2022
            ? (0, Y.jsxs)(`div`, {
                className: Qv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: $v,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_Q`),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: ey,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_A`, t),
                  }),
                ],
              })
            : (0, Y.jsxs)(`div`, {
                className: Qv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: $v,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_v2_Q`),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: ey,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_v2_A`, t),
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
var _E = { Home: (e, t) => `${Sa.YearInReview(e, t)}` };
function vE(e) {
  return (0, Y.jsx)(yc, {
    domain: `store.steampowered.com`,
    controller: `yearinreview`,
    children: (0, Y.jsx)(i, {
      children: (0, Y.jsx)(n, {
        path: `${_E.Home(`:steamId?`, `:year?`)}`,
        render: (e) =>
          (0, Y.jsx)(yc, {
            method: `yearinreview`,
            children: (0, Y.jsx)(E, {
              children: (0, Y.jsx)(yE, {
                steamId: e.match.params.steamId,
                year: e.match.params.year,
              }),
            }),
          }),
      }),
    }),
  });
}
function yE(e) {
  let { steamId: t, year: n } = e,
    r = c(),
    i = z.useMemo(() => bE(t, n), [t, n]);
  return (z.useMemo(() => xE(r, i), [r, i]), (0, Y.jsx)(oE, { pageData: i }));
}
function bE(e, t) {
  let n = e == `my` ? T.steamid : e || ``,
    r = parseInt(t ?? ``),
    i = n ? new Ca(n).GetAccountID() : 0,
    a =
      T.is_support &&
      !!Ko(`localization_advanced_access`, `application_config`);
  return {
    steamid: n,
    nYear: r,
    eResult: Number.parseInt(Ko(`yearinreview_eresults`, `application_config`)),
    rgOtherYears:
      Ko(`yearinreview_otheryears_${i}_${r}`, `application_config`) ?? [],
    bLocalizationAdvancedAccess: a,
    bAllowDevToggles: a,
  };
}
function xE(e, t) {
  let { steamid: n, nYear: r } = t;
  if (!n || !r) return;
  let i = new Ca(n),
    a = eh(i.ConvertTo64BitString(), r);
  if (e.getQueryData(a)) return;
  let o = Ko(`yearinreview_${i.GetAccountID()}_${r}`, `application_config`);
  SE(o) &&
    e.setQueryData(
      a,
      $m(1, {
        stats: o,
        percentiles: Ko(`yearinreview_${r}_percentiles`, `application_config`),
        distribution: Ko(
          `yearinreview_${r}_distribution`,
          `application_config`,
        ),
        previous_year_summary: Ko(
          `yearinreview_${r}_previous_year_summary`,
          `application_config`,
        ),
      }),
    );
}
function SE(e) {
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
export { _E as YearInReviewRoutes, vE as default };
