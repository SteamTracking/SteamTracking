/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  Ft as n,
  I as r,
  It as i,
  M as a,
  Nt as o,
  P as s,
  at as c,
  ct as l,
  dt as u,
  ot as d,
  tt as f,
  ut as p,
  vt as m,
} from "./chunk~01cfc309bf.js";
import {
  $i as h,
  $r as g,
  Ai as _,
  Ar as v,
  Bi as ee,
  Br as y,
  Ci as te,
  Cr as ne,
  Di as re,
  Dr as ie,
  Ei as ae,
  Er as oe,
  Fi as se,
  Fr as ce,
  Gi as le,
  Gr as ue,
  Hi as de,
  Hr as fe,
  Ii as pe,
  Ir as me,
  Ji as he,
  Jr as ge,
  Ki as _e,
  Kr as ve,
  Li as ye,
  Lr as be,
  Mi as xe,
  Mr as Se,
  Ni as Ce,
  Nr as we,
  Oi as Te,
  Or as Ee,
  Pi as De,
  Pr as Oe,
  Qi as ke,
  Qr as Ae,
  Ri as je,
  Rr as Me,
  Sa as Ne,
  Si as Pe,
  Sr as Fe,
  Ti as Ie,
  Tr as Le,
  Ui as Re,
  Ur as ze,
  Vi as Be,
  Vr as Ve,
  Wi as He,
  Wr as Ue,
  Xi as We,
  Xr as Ge,
  Yi as Ke,
  Yr as qe,
  Zi as Je,
  Zr as Ye,
  _a as Xe,
  _i as Ze,
  aa as Qe,
  ai as $e,
  ba as et,
  bi as tt,
  ca as nt,
  ci as rt,
  da as it,
  di as at,
  ea as ot,
  ei as st,
  fa as ct,
  fi as lt,
  ga as b,
  gi as ut,
  ha as dt,
  hi as ft,
  ia as x,
  ii as pt,
  ji as mt,
  jr as ht,
  ki as gt,
  kr as _t,
  la as vt,
  li as yt,
  ma as bt,
  mi as xt,
  na as S,
  ni as St,
  oa as Ct,
  oi as wt,
  pa as Tt,
  pi as Et,
  qi as Dt,
  qr as Ot,
  ra as kt,
  ri as At,
  sa as jt,
  si as Mt,
  ta as Nt,
  ti as Pt,
  ua as Ft,
  ui as It,
  va as Lt,
  vi as Rt,
  wi as zt,
  wr as Bt,
  xa as Vt,
  xi as Ht,
  xr as Ut,
  ya as Wt,
  yi as Gt,
  zi as Kt,
  zr as qt,
} from "./chunk~6b8ddcaac8.js";
import { S as Jt, g as Yt, k as Xt, p as Zt } from "./chunk~4eed35ad1f.js";
import { t as Qt } from "./chunk~4c13037b22.js";
import { a as $t, i as en } from "./chunk~5adf866415.js";
import { t as tn } from "./chunk~684e72ad45.js";
import "./chunk~8681f5c764.js";
import { t as nn } from "./chunk~eefd71512b.js";
import { N as rn } from "./chunk~2f8c67b4de.js";
import { t as an } from "./chunk~91ae5e1167.js";
import { n as on } from "./chunk~710e3cfd2f.js";
import { t as sn } from "./chunk~a8b8151a67.js";
import { n as cn } from "./chunk~5e5f1b9ccf.js";
import {
  $_ as ln,
  $b as un,
  $d as dn,
  $f as fn,
  $g as pn,
  $h as mn,
  $p as hn,
  $s as gn,
  $v as _n,
  AS as vn,
  A_ as yn,
  Af as bn,
  Ag as xn,
  Ah as Sn,
  Am as Cn,
  Ap as wn,
  Ax as Tn,
  B_ as En,
  Bd as Dn,
  Bf as On,
  Bg as kn,
  Bh as An,
  Bm as jn,
  Bp as Mn,
  Bv as Nn,
  C_ as Pn,
  Cf as Fn,
  Cg as In,
  Ch as Ln,
  Cm as Rn,
  Cp as zn,
  Ct as Bn,
  D_ as Vn,
  Dd as Hn,
  Df as Un,
  Dg as Wn,
  Dh as Gn,
  Dl as Kn,
  Dm as qn,
  Dp as Jn,
  E_ as Yn,
  Ea as Xn,
  Ef as Zn,
  Eg as Qn,
  Eh as $n,
  Em as er,
  Ep as tr,
  Er as nr,
  Ev as rr,
  F_ as ir,
  Fc as ar,
  Ff as or,
  Fg as sr,
  Fh as cr,
  Fm as lr,
  Fp as ur,
  G_ as dr,
  Gd as fr,
  Gf as pr,
  Gg as mr,
  Gh as hr,
  Gm as gr,
  Gp as _r,
  H_ as vr,
  Hd as yr,
  Hf as br,
  Hg as xr,
  Hh as Sr,
  Hm as Cr,
  Hn as wr,
  Hp as Tr,
  I_ as Er,
  Ib as Dr,
  If as Or,
  Ig as kr,
  Ih as Ar,
  Im as jr,
  In as Mr,
  Ip as Nr,
  J_ as Pr,
  Jd as Fr,
  Jf as Ir,
  Jg as Lr,
  Jh as Rr,
  Jm as zr,
  Jp as Br,
  K_ as Vr,
  Kd as Hr,
  Kg as Ur,
  Kh as Wr,
  Km as Gr,
  Kp as Kr,
  L_ as qr,
  Lb as C,
  Lc as Jr,
  Ld as Yr,
  Lf as Xr,
  Lg as Zr,
  Lh as Qr,
  Lm as $r,
  Lp as ei,
  M_ as ti,
  Mf as ni,
  Mg as ri,
  Mh as ii,
  Mm as ai,
  Mp as oi,
  Mv as si,
  N_ as ci,
  Nf as li,
  Ng as ui,
  Nh as di,
  Nm as fi,
  Np as pi,
  O_ as mi,
  Oc as hi,
  Od as gi,
  Og as _i,
  Oh as vi,
  Ol as yi,
  Op as bi,
  P_ as xi,
  Pc as Si,
  Pd as Ci,
  Pf as wi,
  Pg as Ti,
  Ph as Ei,
  Pm as Di,
  Pp as Oi,
  Q_ as ki,
  Qd as Ai,
  Qf as ji,
  Qg as Mi,
  Qh as Ni,
  Qm as Pi,
  Qp as Fi,
  R_ as Ii,
  Rb as Li,
  Rd as Ri,
  Rf as zi,
  Rg as Bi,
  Rm as Vi,
  Rp as Hi,
  S_ as Ui,
  Sf as Wi,
  Sg as Gi,
  Sh as Ki,
  Sm as qi,
  Sp as Ji,
  TS as Yi,
  T_ as Xi,
  Tf as Zi,
  Tg as Qi,
  Th as $i,
  Tm as ea,
  Tp as ta,
  U_ as na,
  Ud as ra,
  Uf as ia,
  Ug as aa,
  Uh as oa,
  Um as sa,
  Up as ca,
  V_ as la,
  Vc as w,
  Vd as ua,
  Vf as da,
  Vh as fa,
  Vm as pa,
  Vp as ma,
  Vx as ha,
  W_ as ga,
  Wd as _a,
  Wf as va,
  Wg as ya,
  Wh as ba,
  Wm as xa,
  Wp as Sa,
  Wv as Ca,
  X_ as wa,
  Xa as Ta,
  Xd as Ea,
  Xf as Da,
  Xg as Oa,
  Xh as ka,
  Xm as Aa,
  Xp as ja,
  Xr as Ma,
  Y_ as Na,
  Yd as Pa,
  Yf as Fa,
  Yg as Ia,
  Yh as La,
  Ym as Ra,
  Yp as za,
  Yr as Ba,
  Z_ as Va,
  Zd as Ha,
  Zf as Ua,
  Zg as Wa,
  Zh as Ga,
  Zi as Ka,
  Zm as qa,
  Zp as Ja,
  Zu as Ya,
  Zy as Xa,
  _S as T,
  __ as Za,
  _f as Qa,
  _g as $a,
  _h as eo,
  _m as to,
  _o as no,
  _p as ro,
  a_ as io,
  ad as ao,
  af as oo,
  ag as so,
  ah as co,
  am as lo,
  ap as uo,
  av as fo,
  b_ as po,
  bf as mo,
  bg as ho,
  bh as go,
  bm as _o,
  bp as vo,
  bv as yo,
  c_ as bo,
  cd as xo,
  cf as So,
  cg as Co,
  ch as wo,
  cm as To,
  cp as Eo,
  cv as Do,
  dS as E,
  d_ as Oo,
  df as ko,
  dg as Ao,
  dh as jo,
  dm as Mo,
  dp as No,
  dv as Po,
  e_ as Fo,
  ef as Io,
  eg as Lo,
  eh as Ro,
  em as zo,
  ep as Bo,
  ev as Vo,
  ex as Ho,
  fS as D,
  f_ as Uo,
  ff as Wo,
  fg as Go,
  fh as Ko,
  fm as qo,
  fp as Jo,
  fs as Yo,
  fv as Xo,
  gS as O,
  g_ as Zo,
  gg as Qo,
  gh as $o,
  gl as es,
  gm as ts,
  gp as ns,
  gt as rs,
  hS as k,
  h_ as is,
  hf as as,
  hg as os,
  hh as ss,
  hm as cs,
  hp as ls,
  i_ as us,
  id as ds,
  if as fs,
  ig as ps,
  ih as ms,
  im as hs,
  ip as gs,
  iv as _s,
  j_ as vs,
  jc as ys,
  jf as bs,
  jg as xs,
  jh as Ss,
  jm as Cs,
  jp as ws,
  k_ as Ts,
  kc as Es,
  kf as Ds,
  kg as Os,
  kh as ks,
  km as As,
  kp as js,
  lS as Ms,
  l_ as Ns,
  la as Ps,
  ld as Fs,
  lf as Is,
  lg as Ls,
  lh as Rs,
  lm as zs,
  lp as Bs,
  lv as Vs,
  mS as A,
  m_ as Hs,
  mf as Us,
  mg as Ws,
  mh as Gs,
  ml as Ks,
  mm as qs,
  mp as Js,
  mv as Ys,
  n_ as Xs,
  na as Zs,
  nf as Qs,
  ng as $s,
  nh as ec,
  nm as tc,
  np as nc,
  nr as rc,
  nv as ic,
  o_ as ac,
  oa as oc,
  of as sc,
  og as cc,
  oh as lc,
  ol as j,
  om as uc,
  op as dc,
  ov as fc,
  ox as M,
  pS as N,
  p_ as pc,
  pf as mc,
  pg as hc,
  ph as gc,
  pm as _c,
  pp as vc,
  pv as yc,
  px as bc,
  q_ as xc,
  qd as Sc,
  qf as Cc,
  qg as wc,
  qh as Tc,
  qi as Ec,
  qm as Dc,
  qp as Oc,
  qr as kc,
  r_ as Ac,
  rf as jc,
  rg as Mc,
  rh as Nc,
  rm as Pc,
  rn as Fc,
  rp as Ic,
  rv as Lc,
  rx as P,
  s_ as Rc,
  sa as F,
  sf as zc,
  sg as Bc,
  sh as Vc,
  sm as Hc,
  sp as Uc,
  sv as Wc,
  t_ as Gc,
  tf as Kc,
  tg as qc,
  th as Jc,
  tm as Yc,
  tp as Xc,
  tv as Zc,
  u_ as Qc,
  uf as $c,
  ug as el,
  uh as tl,
  um as nl,
  up as rl,
  ut as il,
  uv as al,
  ux as ol,
  vS as I,
  v_ as sl,
  va as cl,
  vf as ll,
  vg as ul,
  vh as dl,
  vm as fl,
  vp as pl,
  vt as ml,
  w_ as hl,
  wf as gl,
  wg as _l,
  wh as vl,
  wm as yl,
  wp as bl,
  wv as xl,
  x_ as Sl,
  xf as Cl,
  xg as wl,
  xh as Tl,
  xm as El,
  xp as Dl,
  xs as Ol,
  xt as kl,
  y_ as Al,
  yc as jl,
  yf as Ml,
  yg as Nl,
  yh as Pl,
  ym as Fl,
  yp as Il,
  yy as Ll,
  z_ as Rl,
  zd as zl,
  zf as Bl,
  zg as Vl,
  zh as Hl,
  zm as Ul,
  zo as Wl,
  zp as Gl,
} from "./main.js";
import { y as Kl } from "./chunk~ec93a260ba.js";
import { t as ql } from "./chunk~65da1d3223.js";
import { t as Jl } from "./chunk~d7992cfd18.js";
import {
  a as Yl,
  c as Xl,
  d as Zl,
  f as Ql,
  l as $l,
  m as eu,
  n as tu,
  p as nu,
  r as ru,
  s as iu,
  u as au,
} from "./chunk~4c65b375ad.js";
import { r as ou, t as su } from "./chunk~f6ebb80c8b.js";
import { n as L, r as cu, t as lu } from "./chunk~c0f9f0eb46.js";
import { t as uu } from "./chunk~10ec219681.js";
var R = e(i());
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
var _u = 32,
  vu = class extends R.PureComponent {
    renderIcon(e, t) {
      var { inactiveColor: n } = this.props,
        r = _u / 2,
        i = _u / 6,
        a = _u / 3,
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
          x2: _u,
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
            H${_u}M${2 * a},${r}
            A${i},${i},0,1,1,${a},${r}`,
          className: `recharts-legend-icon`,
        });
      if (s === `rect`)
        return R.createElement(`path`, {
          stroke: `none`,
          fill: o,
          d: `M0,${_u / 8}h${_u}v${(_u * 3) / 4}h${-_u}z`,
          className: `recharts-legend-icon`,
        });
      if (R.isValidElement(e.legendIcon)) {
        var c = pu({}, e);
        return (delete c.legendIcon, R.cloneElement(e.legendIcon, c));
      }
      return R.createElement(nt, {
        fill: o,
        cx: r,
        cy: r,
        size: _u,
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
        o = { x: 0, y: 0, width: _u, height: _u },
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
          u = Ne({
            "recharts-legend-item": !0,
            [`legend-item-${n}`]: !0,
            inactive: e.inactive,
          });
        if (e.type === `none`) return null;
        var d = e.inactive ? i : e.color,
          f = l ? l(e.value, e, n) : e.value;
        return R.createElement(
          `li`,
          du(
            { className: u, style: s, key: `legend-item-${n}` },
            jt(this.props, e, n),
          ),
          R.createElement(
            Xe,
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
(mu(vu, `displayName`, `Legend`),
  mu(vu, `defaultProps`, {
    align: `center`,
    iconSize: 14,
    inactiveColor: `#ccc`,
    layout: `horizontal`,
    verticalAlign: `middle`,
  }));
function yu() {
  return x(Nt);
}
var bu = e(n()),
  xu = [`contextPayload`];
function Su() {
  return (
    (Su = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Su.apply(null, arguments)
  );
}
function Cu(e, t) {
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
function wu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Cu(Object(n), !0).forEach(function (t) {
          Tu(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Tu(e, t, n) {
  return (
    (t = Eu(t)) in e
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
function Eu(e) {
  var t = Du(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Du(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
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
function Au(e) {
  return e.value;
}
function ju(e) {
  var { contextPayload: t } = e,
    n = Ou(e, xu),
    r = Qe(t, e.payloadUniqBy, Au),
    i = wu(wu({}, n), {}, { payload: r });
  return R.isValidElement(e.content)
    ? R.cloneElement(e.content, i)
    : typeof e.content == `function`
      ? R.createElement(e.content, i)
      : R.createElement(vu, i);
}
function Mu(e, t, n, r, i, a) {
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
    wu(wu({}, l), u)
  );
}
function Nu(e) {
  var t = kt();
  return (
    (0, R.useEffect)(() => {
      t(pe(e));
    }, [t, e]),
    null
  );
}
function Pu(e) {
  var t = kt();
  return (
    (0, R.useEffect)(
      () => (
        t(ye(e)),
        () => {
          t(ye({ width: 0, height: 0 }));
        }
      ),
      [t, e],
    ),
    null
  );
}
function Fu(e) {
  var t = yu(),
    n = dt(),
    r = Be(),
    { width: i, height: a, wrapperStyle: o, portal: s } = e,
    [c, l] = ot([t]),
    u = ee(),
    d = Kt();
  if (u == null || d == null) return null;
  var f = u - (r.left || 0) - (r.right || 0),
    p = Iu.getWidthOrHeight(e.layout, a, i, f),
    m = s
      ? o
      : wu(
          wu(
            {
              position: `absolute`,
              width: p?.width || i || `auto`,
              height: p?.height || a || `auto`,
            },
            Mu(o, e, r, u, d, c),
          ),
          o,
        ),
    h = s ?? n;
  if (h == null) return null;
  var g = R.createElement(
    `div`,
    { className: `recharts-legend-wrapper`, style: m, ref: l },
    R.createElement(Nu, {
      layout: e.layout,
      align: e.align,
      verticalAlign: e.verticalAlign,
      itemSorter: e.itemSorter,
    }),
    R.createElement(Pu, { width: c.width, height: c.height }),
    R.createElement(
      ju,
      Su({}, e, p, {
        margin: r,
        chartWidth: u,
        chartHeight: d,
        contextPayload: t,
      }),
    ),
  );
  return (0, bu.createPortal)(g, h);
}
var Iu = class extends R.PureComponent {
  static getWidthOrHeight(e, t, n, r) {
    return e === `vertical` && ct(t)
      ? { height: t }
      : e === `horizontal`
        ? { width: n || r }
        : null;
  }
  render() {
    return R.createElement(Fu, this.props);
  }
};
(Tu(Iu, `displayName`, `Legend`),
  Tu(Iu, `defaultProps`, {
    align: `center`,
    iconSize: 14,
    itemSorter: `value`,
    layout: `horizontal`,
    verticalAlign: `bottom`,
  }));
var Lu = [`points`, `className`, `baseLinePoints`, `connectNulls`];
function Ru() {
  return (
    (Ru = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ru.apply(null, arguments)
  );
}
function zu(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Bu(e, t);
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
function Bu(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Vu = (e) => e && e.x === +e.x && e.y === +e.y,
  Hu = function () {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      t = [[]];
    return (
      e.forEach((e) => {
        Vu(e)
          ? t[t.length - 1].push(e)
          : t[t.length - 1].length > 0 && t.push([]);
      }),
      Vu(e[0]) && t[t.length - 1].push(e[0]),
      t[t.length - 1].length <= 0 && (t = t.slice(0, -1)),
      t
    );
  },
  Uu = (e, t) => {
    var n = Hu(e);
    t && (n = [n.reduce((e, t) => [...e, ...t], [])]);
    var r = n
      .map((e) =>
        e.reduce((e, t, n) => `${e}${n === 0 ? `M` : `L`}${t.x},${t.y}`, ``),
      )
      .join(``);
    return n.length === 1 ? `${r}Z` : r;
  },
  Wu = (e, t, n) => {
    var r = Uu(e, n);
    return `${r.slice(-1) === `Z` ? r.slice(0, -1) : r}L${Uu(Array.from(t).reverse(), n).slice(1)}`;
  },
  Gu = (e) => {
    var { points: t, className: n, baseLinePoints: r, connectNulls: i } = e,
      a = zu(e, Lu);
    if (!t || !t.length) return null;
    var o = Ne(`recharts-polygon`, n);
    if (r && r.length) {
      var s = a.stroke && a.stroke !== `none`,
        c = Wu(t, r, i);
      return R.createElement(
        `g`,
        { className: o },
        R.createElement(
          `path`,
          Ru({}, Lt(a), {
            fill: c.slice(-1) === `Z` ? a.fill : `none`,
            stroke: `none`,
            d: c,
          }),
        ),
        s
          ? R.createElement(
              `path`,
              Ru({}, Lt(a), { fill: `none`, d: Uu(t, i) }),
            )
          : null,
        s
          ? R.createElement(
              `path`,
              Ru({}, Lt(a), { fill: `none`, d: Uu(r, i) }),
            )
          : null,
      );
    }
    var l = Uu(t, i);
    return R.createElement(
      `path`,
      Ru({}, Lt(a), {
        fill: l.slice(-1) === `Z` ? a.fill : `none`,
        className: o,
        d: l,
      }),
    );
  };
function Ku() {
  return (
    (Ku = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ku.apply(null, arguments)
  );
}
var qu = (e) => {
    var { cx: t, cy: n, r, className: i } = e,
      a = Ne(`recharts-dot`, i);
    return t === +t && n === +n && r === +r
      ? R.createElement(
          `circle`,
          Ku({}, et(e), Ct(e), { className: a, cx: t, cy: n, r }),
        )
      : null;
  },
  Ju = (e) => e.graphicalItems.polarItems,
  Yu = S([Pe, Ht], Et),
  Xu = S([Ju, ut, Yu], yt),
  Zu = S([Xu], rt),
  Qu = S([Zu, _], $e),
  $u = S([Qu, ut, Xu], st);
S([Qu, ut, Xu], (e, t, n) =>
  n.length > 0
    ? e
        .flatMap((e) =>
          n.flatMap((n) => ({
            value: he(e, t.dataKey ?? n.dataKey),
            errorDomain: [],
          })),
        )
        .filter(Boolean)
    : t?.dataKey == null
      ? e.map((e) => ({ value: e, errorDomain: [] }))
      : e.map((e) => ({ value: he(e, t.dataKey), errorDomain: [] })),
);
var ed = () => void 0,
  td = S([Qu, ut, Xu, xt, Pe], wt),
  nd = S([ut, Ze, Rt, ed, td, ed, je, Pe], at),
  rd = S([ut, je, Qu, $u, gt, Pe, nd], Pt),
  id = S([rd, ut, tt], It),
  ad = S([ut, rd, id, Pe], St),
  od = (e, t, n) => {
    switch (t) {
      case `angleAxis`:
        return te(e, n);
      case `radiusAxis`:
        return ae(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  sd = (e, t, n) => {
    switch (t) {
      case `angleAxis`:
        return zt(e, n);
      case `radiusAxis`:
        return re(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  cd = S([od, tt, ad, sd], lt),
  ld = S([je, $u, ft, Pe], pt),
  ud = S([je, od, tt, cd, id, sd, Gt, ld, Pe], At);
S([je, od, cd, sd, Gt, ld, Pe], Mt);
var dd = S([(e, t) => ud(e, `angleAxis`, t, !1)], (e) => {
    if (e) return e.map((e) => e.coordinate);
  }),
  fd = S([(e, t) => ud(e, `radiusAxis`, t, !1)], (e) => {
    if (e) return e.map((e) => e.coordinate);
  }),
  pd = [
    `gridType`,
    `radialLines`,
    `angleAxisId`,
    `radiusAxisId`,
    `cx`,
    `cy`,
    `innerRadius`,
    `outerRadius`,
  ];
function md(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = hd(e, t);
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
function hd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function gd() {
  return (
    (gd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gd.apply(null, arguments)
  );
}
function _d(e, t) {
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
function vd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? _d(Object(n), !0).forEach(function (t) {
          yd(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : _d(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function yd(e, t, n) {
  return (
    (t = bd(t)) in e
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
function bd(e) {
  var t = xd(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function xd(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Sd = (e, t, n, r) => {
    var i = ``;
    return (
      r.forEach((r, a) => {
        var o = h(t, n, e, r);
        i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
      }),
      (i += `Z`),
      i
    );
  },
  Cd = (e) => {
    var {
      cx: t,
      cy: n,
      innerRadius: r,
      outerRadius: i,
      polarAngles: a,
      radialLines: o,
    } = e;
    if (!a || !a.length || !o) return null;
    var s = vd({ stroke: `#ccc` }, et(e));
    return R.createElement(
      `g`,
      { className: `recharts-polar-grid-angle` },
      a.map((e) => {
        var a = h(t, n, r, e),
          o = h(t, n, i, e);
        return R.createElement(
          `line`,
          gd({ key: `line-${e}` }, s, { x1: a.x, y1: a.y, x2: o.x, y2: o.y }),
        );
      }),
    );
  },
  wd = (e) => {
    var { cx: t, cy: n, radius: r } = e,
      i = vd({ stroke: `#ccc`, fill: `none` }, et(e));
    return R.createElement(
      `circle`,
      gd({}, i, {
        className: Ne(`recharts-polar-grid-concentric-circle`, e.className),
        cx: t,
        cy: n,
        r,
      }),
    );
  },
  Td = (e) => {
    var { radius: t } = e,
      n = vd({ stroke: `#ccc`, fill: `none` }, et(e));
    return R.createElement(
      `path`,
      gd({}, n, {
        className: Ne(`recharts-polar-grid-concentric-polygon`, e.className),
        d: Sd(t, e.cx, e.cy, e.polarAngles),
      }),
    );
  },
  Ed = (e) => {
    var { polarRadius: t, gridType: n } = e;
    if (!t || !t.length) return null;
    var r = Math.max(...t),
      i = e.fill && e.fill !== `none`;
    return R.createElement(
      `g`,
      { className: `recharts-polar-grid-concentric` },
      i && n === `circle` && R.createElement(wd, gd({}, e, { radius: r })),
      i && n !== `circle` && R.createElement(Td, gd({}, e, { radius: r })),
      t.map((t, r) => {
        var i = r;
        return n === `circle`
          ? R.createElement(wd, gd({ key: i }, e, { fill: `none`, radius: t }))
          : R.createElement(Td, gd({ key: i }, e, { fill: `none`, radius: t }));
      }),
    );
  },
  Dd = (e) => {
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
      l = md(e, pd),
      u = x(Ie),
      d = vd(
        {
          cx: u?.cx ?? a ?? 0,
          cy: u?.cy ?? o ?? 0,
          innerRadius: u?.innerRadius ?? s ?? 0,
          outerRadius: u?.outerRadius ?? c ?? 0,
        },
        l,
      ),
      { polarAngles: f, polarRadius: p, outerRadius: m } = d,
      h = x((e) => dd(e, r)),
      g = x((e) => fd(e, i)),
      _ = Array.isArray(f) ? f : h,
      v = Array.isArray(p) ? p : g;
    return m <= 0 || _ == null || v == null
      ? null
      : R.createElement(
          `g`,
          { className: `recharts-polar-grid` },
          R.createElement(
            Ed,
            gd({ gridType: t, radialLines: n }, d, {
              polarAngles: _,
              polarRadius: v,
            }),
          ),
          R.createElement(
            Cd,
            gd({ gridType: t, radialLines: n }, d, {
              polarAngles: _,
              polarRadius: v,
            }),
          ),
        );
  };
Dd.displayName = `PolarGrid`;
var Od = [`children`];
function kd() {
  return (
    (kd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kd.apply(null, arguments)
  );
}
function Ad(e, t) {
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
function jd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Ad(Object(n), !0).forEach(function (t) {
          Md(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ad(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Md(e, t, n) {
  return (
    (t = Nd(t)) in e
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
function Nd(e) {
  var t = Pd(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Pd(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Fd(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Id(e, t);
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
function Id(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Ld = 1e-5,
  Rd = Math.cos(We(45)),
  zd = `angleAxis`;
function Bd(e) {
  var t = kt(),
    n = (0, R.useMemo)(() => {
      var { children: t } = e;
      return Fd(e, Od);
    }, [e]),
    r = n === x((e) => te(e, n.id));
  return (
    (0, R.useEffect)(
      () => (
        t(fe(n)),
        () => {
          t(ze(n));
        }
      ),
      [t, n],
    ),
    r ? e.children : null
  );
}
var Vd = (e, t) => {
    var { cx: n, cy: r, radius: i, orientation: a, tickSize: o } = t,
      s = o || 8,
      c = h(n, r, i, e.coordinate),
      l = h(n, r, i + (a === `inner` ? -1 : 1) * s, e.coordinate);
    return { x1: c.x, y1: c.y, x2: l.x, y2: l.y };
  },
  Hd = (e, t) => {
    var n = Math.cos(We(-e.coordinate));
    return n > Ld
      ? t === `outer`
        ? `start`
        : `end`
      : n < -Ld
        ? t === `outer`
          ? `end`
          : `start`
        : `middle`;
  },
  Ud = (e) => {
    var t = Math.cos(We(-e.coordinate)),
      n = Math.sin(We(-e.coordinate));
    return Math.abs(t) <= Rd ? (n > 0 ? `start` : `end`) : `middle`;
  },
  Wd = (e) => {
    var { cx: t, cy: n, radius: r, axisLineType: i, axisLine: a, ticks: o } = e;
    if (!a) return null;
    var s = jd(jd({}, et(e)), {}, { fill: `none` }, et(a));
    if (i === `circle`)
      return R.createElement(
        qu,
        kd({ className: `recharts-polar-angle-axis-line` }, s, {
          cx: t,
          cy: n,
          r,
        }),
      );
    var c = o.map((e) => h(t, n, r, e.coordinate));
    return R.createElement(
      Gu,
      kd({ className: `recharts-polar-angle-axis-line` }, s, { points: c }),
    );
  },
  Gd = (e) => {
    var { tick: t, tickProps: n, value: r } = e;
    return t
      ? R.isValidElement(t)
        ? R.cloneElement(t, n)
        : typeof t == `function`
          ? t(n)
          : R.createElement(
              ge,
              kd({}, n, { className: `recharts-polar-angle-axis-tick-value` }),
              r,
            )
      : null;
  },
  Kd = (e) => {
    var { tick: t, tickLine: n, tickFormatter: r, stroke: i, ticks: a } = e,
      o = et(e),
      s = Vt(t),
      c = jd(jd({}, o), {}, { fill: `none` }, et(n)),
      l = a.map((a, l) => {
        var u = Vd(a, e),
          d = Hd(a, e.orientation),
          f = Ud(a),
          p = jd(
            jd(
              jd({}, o),
              {},
              { textAnchor: d, verticalAnchor: f, stroke: `none`, fill: i },
              s,
            ),
            {},
            { index: l, payload: a, x: u.x2, y: u.y2 },
          );
        return R.createElement(
          b,
          kd(
            {
              className: Ne(`recharts-polar-angle-axis-tick`, ke(t)),
              key: `tick-${a.coordinate}`,
            },
            jt(e, a, l),
          ),
          n &&
            R.createElement(
              `line`,
              kd({ className: `recharts-polar-angle-axis-tick-line` }, c, u),
            ),
          R.createElement(Gd, {
            tick: t,
            tickProps: p,
            value: r ? r(a.value, l) : a.value,
          }),
        );
      });
    return R.createElement(
      b,
      { className: `recharts-polar-angle-axis-ticks` },
      l,
    );
  },
  qd = (e) => {
    var { angleAxisId: t } = e,
      n = x(Ie),
      r = x((e) => cd(e, `angleAxis`, t)),
      i = de(),
      a = x((e) => ud(e, `angleAxis`, t, i));
    if (n == null || !a || !a.length) return null;
    var o = jd(
      jd(jd({}, e), {}, { scale: r }, n),
      {},
      { radius: n.outerRadius },
    );
    return R.createElement(
      b,
      { className: Ne(`recharts-polar-angle-axis`, zd, o.className) },
      R.createElement(Wd, kd({}, o, { ticks: a })),
      R.createElement(Kd, kd({}, o, { ticks: a })),
    );
  },
  Jd = class extends R.PureComponent {
    render() {
      return this.props.radius <= 0
        ? null
        : R.createElement(
            Bd,
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
            R.createElement(qd, this.props),
          );
    }
  };
(Md(Jd, `displayName`, `PolarAngleAxis`),
  Md(Jd, `axisType`, zd),
  Md(Jd, `defaultProps`, Te));
function Yd(e, t) {
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
function Xd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Yd(Object(n), !0).forEach(function (t) {
          Zd(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Yd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Zd(e, t, n) {
  return (
    (t = Qd(t)) in e
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
function Qd(e) {
  var t = $d(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function $d(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var ef = S([Ju, (e, t) => t], (e, t) =>
    e.filter((e) => e.type === `pie`).find((e) => e.id === t),
  ),
  tf = [],
  nf = (e, t, n) => (n?.length === 0 ? tf : n),
  rf = S([_, ef, nf], (e, t, n) => {
    var { chartData: r } = e;
    if (t != null) {
      var i = t?.data != null && t.data.length > 0 ? t.data : r;
      if (
        ((i && i.length) ||
          n == null ||
          (i = n.map((e) => Xd(Xd({}, t.presentationProps), e.props))),
        i != null)
      )
        return i;
    }
  }),
  af = S([rf, ef, nf], (e, t, n) => {
    if (e != null && t != null)
      return e.map((e, r) => {
        var i,
          a = he(e, t.nameKey, t.name),
          o =
            n != null && (i = n[r]) != null && (i = i.props) != null && i.fill
              ? n[r].props.fill
              : typeof e == `object` && e && `fill` in e
                ? e.fill
                : t.fill;
        return {
          value: Dt(a, t.dataKey),
          color: o,
          payload: e,
          type: t.legendType,
        };
      });
  }),
  of = S([rf, ef, nf, Re], (e, t, n, r) => {
    if (t != null && e != null)
      return Af({ offset: r, pieSettings: t, displayedData: e, cells: n });
  }),
  sf = e(bt()),
  cf = [`onMouseEnter`, `onClick`, `onMouseLeave`],
  lf = [`id`],
  uf = [`id`];
function df(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = ff(e, t);
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
function ff(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function pf(e, t) {
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
      ? pf(Object(n), !0).forEach(function (t) {
          mf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function mf(e, t, n) {
  return (
    (t = hf(t)) in e
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
function hf(e) {
  var t = gf(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function gf(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function _f() {
  return (
    (_f = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _f.apply(null, arguments)
  );
}
function vf(e) {
  var t = (0, R.useMemo)(() => Ve(e.children, Ge), [e.children]),
    n = x((n) => af(n, e.id, t));
  return n == null ? null : R.createElement(ce, { legendPayload: n });
}
function yf(e) {
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
      name: Dt(s, t),
      hide: c,
      type: l,
      color: o,
      unit: ``,
    },
  };
}
var bf = (e, t) => (e > t ? `start` : e < t ? `end` : `middle`),
  xf = (e, t, n) => vt(typeof t == `function` ? t(e) : t, n, n * 0.8),
  Sf = (e, t, n) => {
    var { top: r, left: i, width: a, height: o } = t,
      s = Je(a, o);
    return {
      cx: i + vt(e.cx, a, a / 2),
      cy: r + vt(e.cy, o, o / 2),
      innerRadius: vt(e.innerRadius, s, 0),
      outerRadius: xf(n, e.outerRadius, s),
      maxRadius: e.maxRadius || Math.sqrt(a * a + o * o) / 2,
    };
  },
  Cf = (e, t) => Tt(t - e) * Math.min(Math.abs(t - e), 360);
function wf(e) {
  return e &&
    typeof e == `object` &&
    `className` in e &&
    typeof e.className == `string`
    ? e.className
    : ``;
}
var Tf = (e, t) => {
    if (R.isValidElement(e)) return R.cloneElement(e, t);
    if (typeof e == `function`) return e(t);
    var n = Ne(
      `recharts-pie-label-line`,
      typeof e == `boolean` ? `` : e.className,
    );
    return R.createElement(De, _f({}, t, { type: `linear`, className: n }));
  },
  Ef = (e, t, n) => {
    if (R.isValidElement(e)) return R.cloneElement(e, t);
    var r = n;
    if (typeof e == `function` && ((r = e(t)), R.isValidElement(r))) return r;
    var i = Ne(`recharts-pie-label-text`, wf(e));
    return R.createElement(
      ge,
      _f({}, t, { alignmentBaseline: `middle`, className: i }),
      r,
    );
  };
function Df(e) {
  var { sectors: t, props: n, showLabels: r } = e,
    { label: i, labelLine: a, dataKey: o } = n;
  if (!r || !i || !t) return null;
  var s = et(n),
    c = Vt(i),
    l = Vt(a),
    u =
      (typeof i == `object` &&
        `offsetRadius` in i &&
        typeof i.offsetRadius == `number` &&
        i.offsetRadius) ||
      20,
    d = t.map((e, t) => {
      var n = (e.startAngle + e.endAngle) / 2,
        r = h(e.cx, e.cy, e.outerRadius + u, n),
        d = z(
          z(z(z({}, s), e), {}, { stroke: `none` }, c),
          {},
          { index: t, textAnchor: bf(r.x, e.cx) },
          r,
        ),
        f = z(
          z(z(z({}, s), e), {}, { fill: `none`, stroke: e.fill }, l),
          {},
          {
            index: t,
            points: [h(e.cx, e.cy, e.outerRadius, n), r],
            key: `line`,
          },
        );
      return R.createElement(
        b,
        { key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}` },
        a && Tf(a, f),
        Ef(i, d, he(e, o)),
      );
    });
  return R.createElement(b, { className: `recharts-pie-labels` }, d);
}
function Of(e) {
  var { sectors: t, props: n, showLabels: r } = e,
    { label: i } = n;
  return typeof i == `object` && i && `position` in i
    ? R.createElement(ue, { label: i })
    : R.createElement(Df, { sectors: t, props: n, showLabels: r });
}
function kf(e) {
  var { sectors: t, activeShape: n, inactiveShape: r, allOtherPieProps: i } = e,
    a = x(g),
    { onMouseEnter: o, onClick: s, onMouseLeave: c } = i,
    l = df(i, cf),
    u = Me(o, i.dataKey),
    d = qt(c),
    f = be(s, i.dataKey);
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
              { stroke: e.stroke, tabIndex: -1, [le]: o, [He]: i.dataKey },
            );
          return R.createElement(
            b,
            _f(
              {
                key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${o}`,
                tabIndex: -1,
                className: `recharts-pie-sector`,
              },
              jt(l, e, o),
              {
                onMouseEnter: u(e, o),
                onMouseLeave: d(e, o),
                onClick: f(e, o),
              },
            ),
            R.createElement(
              y,
              _f({ option: c, isActive: s, shapeType: `sector` }, p),
            ),
          );
        }),
      );
}
function Af(e) {
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
    f = Cf(o, s),
    p = Math.abs(f),
    m = n.length <= 1 ? 0 : (t.paddingAngle ?? 0),
    g = n.filter((e) => he(e, c, 0) !== 0).length,
    _ = (p >= 360 ? g : g - 1) * m,
    v = p - g * d - _,
    ee = n.reduce((e, t) => {
      var n = he(t, c, 0);
      return e + (ct(n) ? n : 0);
    }, 0),
    y;
  if (ee > 0) {
    var te;
    y = n.map((e, n) => {
      var s = he(e, c, 0),
        p = he(e, l, n),
        g = Sf(t, i, e),
        _ = (ct(s) ? s : 0) / ee,
        y,
        ne = z(z({}, e), r && r[n] && r[n].props);
      y = n ? te.endAngle + Tt(f) * m * (s === 0 ? 0 : 1) : o;
      var re = y + Tt(f) * ((s === 0 ? 0 : d) + _ * v),
        ie = (y + re) / 2,
        ae = (g.innerRadius + g.outerRadius) / 2,
        oe = [{ name: p, value: s, payload: ne, dataKey: c, type: u }],
        se = h(g.cx, g.cy, ae, ie);
      return (
        (te = z(
          z(
            z(
              z({}, t.presentationProps),
              {},
              {
                percent: _,
                cornerRadius: a,
                name: p,
                tooltipPayload: oe,
                midAngle: ie,
                middleRadius: ae,
                tooltipPosition: se,
              },
              ne,
            ),
            g,
          ),
          {},
          {
            value: s,
            startAngle: y,
            endAngle: re,
            payload: ne,
            paddingAngle: Tt(f) * m,
          },
        )),
        te
      );
    });
  }
  return y;
}
function jf(e) {
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
  return R.createElement(ve, { value: t ? i : void 0 }, r);
}
function Mf(e) {
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
    f = mt(t, `recharts-pie-`),
    p = n.current,
    [m, h] = (0, R.useState)(!1),
    g = (0, R.useCallback)(() => {
      (typeof d == `function` && d(), h(!1));
    }, [d]),
    _ = (0, R.useCallback)(() => {
      (typeof u == `function` && u(), h(!0));
    }, [u]);
  return R.createElement(
    jf,
    { showLabels: !m, sectors: r },
    R.createElement(
      xe,
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
              o = n > 0 ? (0, sf.default)(t, `paddingAngle`, 0) : 0;
            if (r) {
              var s = Ft(
                  r.endAngle - r.startAngle,
                  t.endAngle - t.startAngle,
                  e,
                ),
                c = z(z({}, t), {}, { startAngle: a + o, endAngle: a + s + o });
              (i.push(c), (a = c.endAngle));
            } else {
              var { endAngle: l, startAngle: u } = t,
                d = Ft(0, l - u, e),
                f = z(z({}, t), {}, { startAngle: a + o, endAngle: a + d + o });
              (i.push(f), (a = f.endAngle));
            }
          }),
          (n.current = i),
          R.createElement(
            b,
            null,
            R.createElement(kf, {
              sectors: i,
              activeShape: c,
              inactiveShape: l,
              allOtherPieProps: t,
            }),
          )
        );
      },
    ),
    R.createElement(Of, { showLabels: !m, sectors: r, props: t }),
    t.children,
  );
}
var Nf = {
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
  isAnimationActive: !se.isSsr,
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
function Pf(e) {
  var { id: t } = e,
    n = df(e, lf),
    { hide: r, className: i, rootTabIndex: a } = e,
    o = (0, R.useMemo)(() => Ve(e.children, Ge), [e.children]),
    s = x((e) => of(e, t, o)),
    c = (0, R.useRef)(null),
    l = Ne(`recharts-pie`, i);
  return r || s == null
    ? ((c.current = null), R.createElement(b, { tabIndex: a, className: l }))
    : R.createElement(
        R.Fragment,
        null,
        R.createElement(me, { fn: yf, args: z(z({}, e), {}, { sectors: s }) }),
        R.createElement(
          b,
          { tabIndex: a, className: l },
          R.createElement(Mf, {
            props: z(z({}, n), {}, { sectors: s }),
            previousSectorsRef: c,
          }),
        ),
      );
}
function Ff(e) {
  var t = Ce(e, Nf),
    { id: n } = t,
    r = df(t, uf),
    i = et(r);
  return R.createElement(Oe, { id: n, type: `pie` }, (e) =>
    R.createElement(
      R.Fragment,
      null,
      R.createElement(we, {
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
      R.createElement(vf, _f({}, r, { id: e })),
      R.createElement(Pf, _f({}, r, { id: e })),
    ),
  );
}
Ff.displayName = `Pie`;
function If(e, t) {
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
function Lf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? If(Object(n), !0).forEach(function (t) {
          Rf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : If(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Rf(e, t, n) {
  return (
    (t = zf(t)) in e
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
function zf(e) {
  var t = Bf(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Bf(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Vf = (e) => {
  var { point: t, childIndex: n, mainColor: r, activeDot: i, dataKey: a } = e;
  if (i === !1 || t.x == null || t.y == null) return null;
  var o = Lf(
      Lf(
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
        Vt(i),
      ),
      Ct(i),
    ),
    s = (0, R.isValidElement)(i)
      ? (0, R.cloneElement)(i, o)
      : typeof i == `function`
        ? i(o)
        : R.createElement(qu, o);
  return R.createElement(b, { className: `recharts-active-dot` }, s);
};
function Hf(e) {
  var { points: t, mainColor: n, activeDot: r, itemDataKey: i } = e,
    a = x(g),
    o = Se();
  if (t == null || o == null) return null;
  var s = t.find((e) => o.includes(e.payload));
  return it(s)
    ? null
    : Vf({
        point: s,
        childIndex: Number(a),
        mainColor: n,
        dataKey: i,
        activeDot: r,
      });
}
function Uf(e, t) {
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
function Wf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? Uf(Object(n), !0).forEach(function (t) {
          Gf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Uf(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function Gf(e, t, n) {
  return (
    (t = Kf(t)) in e
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
function Kf(e) {
  var t = qf(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function qf(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
var Jf = (e, t) => cd(e, `radiusAxis`, t),
  Yf = S([Jf], (e) => {
    if (e != null) return { scale: e };
  }),
  Xf = S([ae, Jf], (e, t) => {
    if (e != null && t != null) return Wf(Wf({}, e), {}, { scale: t });
  }),
  Zf = (e, t, n, r) => ud(e, `radiusAxis`, t, r),
  Qf = (e, t, n) => te(e, n),
  $f = (e, t, n) => cd(e, `angleAxis`, n),
  ep = S([Qf, $f], (e, t) => {
    if (e != null && t != null) return Wf(Wf({}, e), {}, { scale: t });
  }),
  tp = (e, t, n, r) => ud(e, `angleAxis`, n, r),
  np = S([Qf, $f, Ie], (e, t, n) => {
    if (n != null && t != null)
      return { scale: t, type: e.type, dataKey: e.dataKey, cx: n.cx, cy: n.cy };
  }),
  rp = (e, t, n, r, i) => i,
  ip = S([je, Xf, Zf, ep, tp], (e, t, n, r, i) =>
    Ke(e, `radiusAxis`) ? _e(t, n, !1) : _e(r, i, !1),
  ),
  ap = S([Ju, rp], (e, t) => {
    if (e != null)
      return e.find((e) => e.type === `radar` && t === e.id)?.dataKey;
  }),
  op = S([Yf, np, _, ap, ip], (e, t, n, r, i) => {
    var { chartData: a, dataStartIndex: o, dataEndIndex: s } = n;
    if (e != null && t != null && a != null && i != null && r != null)
      return bp({
        radiusAxis: e,
        angleAxis: t,
        displayedData: a.slice(o, s + 1),
        dataKey: r,
        bandSize: i,
      });
  }),
  sp = e(Ot()),
  cp = [`id`];
function lp(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = up(e, t);
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
function up(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function dp(e, t) {
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
      ? dp(Object(n), !0).forEach(function (t) {
          fp(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : dp(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function fp(e, t, n) {
  return (
    (t = pp(t)) in e
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
function pp(e) {
  var t = mp(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function mp(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function hp() {
  return (
    (hp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hp.apply(null, arguments)
  );
}
function gp(e, t) {
  return e && e !== `none` ? e : t;
}
var _p = (e) => {
  var { dataKey: t, name: n, stroke: r, fill: i, legendType: a, hide: o } = e;
  return [
    {
      inactive: o,
      dataKey: t,
      type: a,
      color: gp(r, i),
      value: Dt(n, t),
      payload: e,
    },
  ];
};
function vp(e) {
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
      name: Dt(a, t),
      hide: o,
      type: s,
      color: gp(n, i),
      unit: ``,
    },
  };
}
function yp(e, t) {
  return R.isValidElement(e)
    ? R.cloneElement(e, t)
    : typeof e == `function`
      ? e(t)
      : R.createElement(
          qu,
          hp({}, t, {
            className: Ne(
              `recharts-radar-dot`,
              typeof e == `boolean` ? `` : e.className,
            ),
          }),
        );
}
function bp(e) {
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
    var a = he(e, n.dataKey, r),
      d = he(e, i),
      f = n.scale(a) + u,
      p = Array.isArray(d) ? (0, sp.default)(d) : d,
      m = it(p) ? void 0 : t.scale(p);
    (Array.isArray(d) && d.length >= 2 && (c = !0),
      l.push(
        B(
          B({}, h(o, s, m, f)),
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
            r = it(n) ? void 0 : t.scale(n);
          d.push(B(B({}, e), {}, { radius: r }, h(o, s, r, e.angle)));
        } else d.push(e);
      }),
    { points: l, isRange: c, baseLinePoints: d }
  );
}
function xp(e) {
  var { points: t, props: n } = e,
    { dot: r, dataKey: i } = n;
  if (!r) return null;
  var { id: a } = n,
    o = lp(n, cp),
    s = et(o),
    c = Wt(r),
    l = t.map((e, t) =>
      yp(
        r,
        B(
          B(B({ key: `dot-${t}`, r: 3 }, s), c),
          {},
          { dataKey: i, cx: e.x, cy: e.y, index: t, payload: e },
        ),
      ),
    );
  return R.createElement(b, { className: `recharts-radar-dots` }, l);
}
function Sp(e) {
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
  return R.createElement(Ue, { value: t ? i : null }, r);
}
function Cp(e) {
  var { points: t, baseLinePoints: n, props: r } = e;
  if (t == null) return null;
  var { shape: i, isRange: a, connectNulls: o } = r,
    s = R.isValidElement(i)
      ? R.cloneElement(i, B(B({}, r), {}, { points: t }))
      : typeof i == `function`
        ? i(B(B({}, r), {}, { points: t }))
        : R.createElement(
            Gu,
            hp({}, Lt(r), {
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
    b,
    { className: `recharts-radar-polygon` },
    s,
    R.createElement(xp, { props: r, points: t }),
  );
}
var wp = (e, t, n) => (r, i) => {
  var a = e && e[Math.floor(i * t)];
  return a
    ? B(B({}, r), {}, { x: Ft(a.x, r.x, n), y: Ft(a.y, r.y, n) })
    : B(B({}, r), {}, { x: Ft(r.cx, r.x, n), y: Ft(r.cy, r.y, n) });
};
function Tp(e) {
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
    g = mt(t, `recharts-radar-`),
    [_, v] = (0, R.useState)(!1),
    ee = !_,
    y = (0, R.useCallback)(() => {
      (typeof u == `function` && u(), v(!1));
    }, [u]),
    te = (0, R.useCallback)(() => {
      (typeof d == `function` && d(), v(!0));
    }, [d]);
  return R.createElement(
    Sp,
    { showLabels: ee, points: i },
    R.createElement(
      xe,
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
        var o = e === 1 ? i : i.map(wp(f, m, e)),
          s = e === 1 ? a : a?.map(wp(p, h, e));
        return (
          e > 0 && ((n.current = o), (r.current = s)),
          R.createElement(Cp, { points: o, baseLinePoints: s, props: t })
        );
      },
    ),
    R.createElement(ue, { label: t.label }),
    t.children,
  );
}
function Ep(e) {
  var t = (0, R.useRef)(void 0),
    n = (0, R.useRef)(void 0);
  return R.createElement(Tp, {
    props: e,
    previousPointsRef: t,
    previousBaseLinePointsRef: n,
  });
}
var Dp = {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: !1,
    activeDot: !0,
    dot: !1,
    legendType: `rect`,
    isAnimationActive: !se.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  Op = class extends R.PureComponent {
    render() {
      var { hide: e, className: t, points: n } = this.props;
      if (e || n == null) return null;
      var r = Ne(`recharts-radar`, t);
      return R.createElement(
        R.Fragment,
        null,
        R.createElement(b, { className: r }, R.createElement(Ep, this.props)),
        R.createElement(Hf, {
          points: n,
          mainColor: gp(this.props.stroke, this.props.fill),
          itemDataKey: this.props.dataKey,
          activeDot: this.props.activeDot,
        }),
      );
    }
  };
function kp(e) {
  var t = de(),
    n = x((n) => op(n, e.radiusAxisId, e.angleAxisId, t, e.id));
  return R.createElement(
    Op,
    hp({}, e, {
      points: n?.points,
      baseLinePoints: n?.baseLinePoints,
      isRange: n?.isRange,
    }),
  );
}
var Ap = class extends R.PureComponent {
  render() {
    return R.createElement(Oe, { id: this.props.id, type: `radar` }, (e) =>
      R.createElement(
        R.Fragment,
        null,
        R.createElement(we, {
          type: `radar`,
          id: e,
          data: void 0,
          dataKey: this.props.dataKey,
          hide: this.props.hide,
          angleAxisId: this.props.angleAxisId,
          radiusAxisId: this.props.radiusAxisId,
        }),
        R.createElement(ce, { legendPayload: _p(this.props) }),
        R.createElement(me, { fn: vp, args: this.props }),
        R.createElement(kp, hp({}, this.props, { id: e })),
      ),
    );
  }
};
(fp(Ap, `displayName`, `Radar`), fp(Ap, `defaultProps`, Dp));
function jp(e) {
  var t = kt();
  return (
    (0, R.useEffect)(() => {
      t(oe(e));
    }, [t, e]),
    null
  );
}
var Mp = [`layout`];
function Np() {
  return (
    (Np = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Np.apply(null, arguments)
  );
}
function Pp(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = Fp(e, t);
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
function Fp(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var Ip = {
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
  Lp = (0, R.forwardRef)(function (e, t) {
    var n = Ce(e.categoricalChartProps, Ip),
      { layout: r } = n,
      i = Pp(n, Mp),
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
      Le,
      { preloadedState: { options: l }, reduxStoreName: n.id ?? a },
      R.createElement(v, { chartData: n.data }),
      R.createElement(Bt, { layout: r, margin: n.margin }),
      R.createElement(ne, {
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
      R.createElement(jp, {
        cx: n.cx,
        cy: n.cy,
        startAngle: n.startAngle,
        endAngle: n.endAngle,
        innerRadius: n.innerRadius,
        outerRadius: n.outerRadius,
      }),
      R.createElement(Fe, Np({}, i, { ref: t })),
    );
  }),
  Rp = [`item`],
  zp = {
    layout: `centric`,
    startAngle: 0,
    endAngle: 360,
    cx: `50%`,
    cy: `50%`,
    innerRadius: 0,
    outerRadius: `80%`,
  },
  Bp = (0, R.forwardRef)((e, t) => {
    var n = Ce(e, zp);
    return R.createElement(Lp, {
      chartName: `PieChart`,
      defaultTooltipEventType: `item`,
      validateTooltipEventTypes: Rp,
      tooltipPayloadSearcher: Ae,
      categoricalChartProps: n,
      ref: t,
    });
  }),
  Vp = [`axis`],
  Hp = {
    layout: `centric`,
    startAngle: 90,
    endAngle: -270,
    cx: `50%`,
    cy: `50%`,
    innerRadius: 0,
    outerRadius: `80%`,
  },
  Up = (0, R.forwardRef)((e, t) => {
    var n = Ce(e, Hp);
    return R.createElement(Lp, {
      chartName: `RadarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: Vp,
      tooltipPayloadSearcher: Ae,
      categoricalChartProps: n,
      ref: t,
    });
  }),
  Wp = [`axis`],
  Gp = (0, R.forwardRef)((e, t) =>
    R.createElement(Ut, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: Wp,
      tooltipPayloadSearcher: Ae,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  V = e(o(), 1),
  Kp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_playtime_seconds || E(e.M()),
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
              br: A.readUint32,
              bw: I.writeUint32,
            },
            total_sessions: { n: 20, br: A.readUint32, bw: I.writeUint32 },
            vr_sessions: { n: 21, br: A.readUint32, bw: I.writeUint32 },
            deck_sessions: { n: 22, br: A.readUint32, bw: I.writeUint32 },
            controller_sessions: { n: 23, br: A.readUint32, bw: I.writeUint32 },
            linux_sessions: { n: 24, br: A.readUint32, bw: I.writeUint32 },
            macos_sessions: { n: 25, br: A.readUint32, bw: I.writeUint32 },
            windows_sessions: { n: 26, br: A.readUint32, bw: I.writeUint32 },
            total_playtime_percentagex100: {
              n: 27,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            vr_playtime_percentagex100: {
              n: 28,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            deck_playtime_percentagex100: {
              n: 29,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            controller_playtime_percentagex100: {
              n: 30,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            linux_playtime_percentagex100: {
              n: 31,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            macos_playtime_percentagex100: {
              n: 32,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            windows_playtime_percentagex100: {
              n: 33,
              br: A.readUint32,
              bw: I.writeUint32,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStats`;
    }
  },
  qp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: A.readUint32, bw: I.writeUint32 } },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreakGame`;
    }
  },
  Jp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.longest_consecutive_days || E(e.M()),
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
              br: A.readUint32,
              bw: I.writeUint32,
            },
            rtime_start: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            streak_games: { n: 3, c: qp, r: !0, q: !0 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreak`;
    }
  },
  Yp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_rank || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_rank: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            vr_rank: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            deck_rank: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            controller_rank: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            linux_rank: { n: 5, br: A.readUint32, bw: I.writeUint32 },
            mac_rank: { n: 6, br: A.readUint32, bw: I.writeUint32 },
            windows_rank: { n: 7, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeRanks`;
    }
  },
  Xp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            stats: { n: 2, c: Kp },
            playtime_streak: { n: 3, c: Jp },
            playtime_ranks: { n: 4, c: Yp },
            rtime_first_played: { n: 5, br: A.readUint32, bw: I.writeUint32 },
            relative_game_stats: { n: 6, c: Kp },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePlaytimeStats`;
    }
  },
  Zp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            new_this_year: { n: 2, br: A.readBool, bw: I.writeBool },
            rtime_first_played_lifetime: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            demo: { n: 4, br: A.readBool, bw: I.writeBool },
            playtest: { n: 5, br: A.readBool, bw: I.writeBool },
            played_during_early_access: {
              n: 6,
              br: A.readBool,
              bw: I.writeBool,
            },
            played_vr: { n: 7, br: A.readBool, bw: I.writeBool },
            played_deck: { n: 8, br: A.readBool, bw: I.writeBool },
            played_controller: { n: 9, br: A.readBool, bw: I.writeBool },
            played_linux: { n: 10, br: A.readBool, bw: I.writeBool },
            played_mac: { n: 11, br: A.readBool, bw: I.writeBool },
            played_windows: { n: 12, br: A.readBool, bw: I.writeBool },
            total_playtime_percentagex100: {
              n: 13,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            total_sessions: { n: 14, br: A.readUint32, bw: I.writeUint32 },
            rtime_release_date: { n: 15, br: A.readUint32, bw: I.writeUint32 },
            parent_appid: { n: 16, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameSummary`;
    }
  },
  Qp = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            total_playtime_percentagex100: {
              n: 2,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            relative_playtime_percentagex100: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSimpleGameSummary`;
    }
  },
  $p = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            rank: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            relative_playtime_percentagex100: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRank`;
    }
  },
  em = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category: { n: 1, br: A.readString, bw: I.writeString },
            rankings: { n: 2, c: $p, r: !0, q: !0 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CRankingCategory`;
    }
  },
  tm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_ranking || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_ranking: { n: 1, c: em },
            vr_ranking: { n: 2, c: em },
            deck_ranking: { n: 3, c: em },
            controller_ranking: { n: 4, c: em },
            linux_ranking: { n: 5, c: em },
            mac_ranking: { n: 6, c: em },
            windows_ranking: { n: 7, c: em },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRankings`;
    }
  },
  nm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_achievements || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_achievements: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            total_games_with_achievements: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            total_rare_achievements: {
              n: 4,
              br: A.readUint32,
              bw: I.writeUint32,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeSummaryStats`;
    }
  },
  rm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: im, r: !0, q: !0 } },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats`;
    }
  },
  im = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tag_id || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tag_id: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            tag_weight: { n: 2, br: A.readFloat, bw: I.writeFloat },
            tag_weight_pre_selection: {
              n: 3,
              br: A.readFloat,
              bw: I.writeFloat,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats_Tag`;
    }
  },
  am = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.screenshots_shared || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            screenshots_shared: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            gifts_sent: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            loyalty_reactions: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            written_reviews: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            guides_submitted: { n: 5, br: A.readUint32, bw: I.writeUint32 },
            workshop_contributions: {
              n: 6,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            badges_earned: { n: 7, br: A.readUint32, bw: I.writeUint32 },
            friends_added: { n: 8, br: A.readUint32, bw: I.writeUint32 },
            forum_posts: { n: 9, br: A.readUint32, bw: I.writeUint32 },
            workshop_subscriptions: {
              n: 10,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            guide_subscribers: { n: 11, br: A.readUint32, bw: I.writeUint32 },
            workshop_subscribers: {
              n: 12,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            games_played_pct: { n: 13, br: A.readUint32, bw: I.writeUint32 },
            achievements_pct: { n: 14, br: A.readUint32, bw: I.writeUint32 },
            game_streak_pct: { n: 15, br: A.readUint32, bw: I.writeUint32 },
            games_played_avg: { n: 16, br: A.readUint32, bw: I.writeUint32 },
            achievements_avg: { n: 17, br: A.readUint32, bw: I.writeUint32 },
            game_streak_avg: { n: 18, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeByNumbers`;
    }
  },
  om = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_stats || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [2, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_stats: { n: 1, c: Kp },
            games: { n: 2, c: Xp, r: !0, q: !0 },
            playtime_streak: { n: 3, c: Jp },
            months: { n: 5, c: sm, r: !0, q: !0 },
            game_summary: { n: 6, c: Zp, r: !0, q: !0 },
            demos_played: { n: 7, br: A.readUint32, bw: I.writeUint32 },
            game_rankings: { n: 8, c: tm },
            playtests_played: { n: 9, br: A.readUint32, bw: I.writeUint32 },
            summary_stats: { n: 10, c: nm },
            substantial: { n: 11, d: !0, br: A.readBool, bw: I.writeBool },
            tag_stats: { n: 12, c: rm },
            by_numbers: { n: 13, c: am },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeStats`;
    }
  },
  sm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_month || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [4, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_month: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            stats: { n: 2, c: Kp },
            appid: { n: 4, c: Xp, r: !0, q: !0 },
            relative_monthly_stats: { n: 5, c: Kp },
            game_summary: { n: 6, c: Qp, r: !0, q: !0 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMonthlyPlaytimeStats`;
    }
  },
  cm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.account_id || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_id: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            playtime_stats: { n: 3, c: om },
            privacy_state: { n: 4, br: A.readEnum, bw: I.writeEnum },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserYearInReviewStats`;
    }
  },
  lm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.from_dbo || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            from_dbo: { n: 1, br: A.readBool, bw: I.writeBool },
            overall_time_ms: {
              n: 2,
              br: A.readUint64String,
              bw: I.writeUint64String,
            },
            dbo_load_ms: {
              n: 3,
              br: A.readUint64String,
              bw: I.writeUint64String,
            },
            query_execution_ms: {
              n: 4,
              br: A.readUint64String,
              bw: I.writeUint64String,
            },
            message_population_ms: {
              n: 5,
              br: A.readUint64String,
              bw: I.writeUint64String,
            },
            dbo_lock_load_ms: {
              n: 6,
              br: A.readUint64String,
              bw: I.writeUint64String,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CYearInReviewPerformanceStats`;
    }
  },
  um = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.statid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            statid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            fieldid: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            achievement_name_internal: {
              n: 3,
              br: A.readString,
              bw: I.writeString,
            },
            rtime_unlocked: { n: 4, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAchievementDetails`;
    }
  },
  dm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            achievements: { n: 2, c: um, r: !0, q: !0 },
            all_time_unlocked_achievements: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            unlocked_more_in_future: { n: 4, br: A.readBool, bw: I.writeBool },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameAchievements`;
    }
  },
  fm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.median_achievements || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            median_achievements: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            median_games: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            median_streak: { n: 3, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPercentiles`;
    }
  },
  pm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.new_releases || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            new_releases: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            recent_releases: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            classic_releases: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            recent_cutoff_year: { n: 4, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPlaytimeDistribution`;
    }
  },
  mm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.games_played || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            games_played: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            unlocked_achievements: {
              n: 2,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            longest_streak: { n: 3, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPreviousYIRSummaryData`;
    }
  },
  hm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            force_regenerate: { n: 3, br: A.readBool, bw: I.writeBool },
            access_source: { n: 4, br: A.readInt32, bw: I.writeInt32 },
            fetch_previous_year_summary: {
              n: 5,
              d: !1,
              br: A.readBool,
              bw: I.writeBool,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Request`;
    }
  },
  gm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: cm },
            performance_stats: { n: 2, c: lm },
            percentiles: { n: 3, c: fm },
            distribution: { n: 4, c: pm },
            previous_year_summary: { n: 5, c: mm },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Response`;
    }
  },
  _m = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            privacy_state: { n: 3, br: A.readEnum, bw: I.writeEnum },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Request`;
    }
  },
  vm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { privacy_state: { n: 1, br: A.readEnum, bw: I.writeEnum } },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Response`;
    }
  },
  ym = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Request`;
    }
  },
  bm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            privacy_state: { n: 1, br: A.readEnum, bw: I.writeEnum },
            generated_value: { n: 2, br: A.readBool, bw: I.writeBool },
            steamid: {
              n: 3,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            rt_privacy_updated: { n: 4, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Response`;
    }
  },
  xm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: I.writeRepeatedUint32,
            },
            total_only: { n: 4, br: A.readBool, bw: I.writeBool },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Request`;
    }
  },
  Sm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_achievements || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_achievements: { n: 1, c: dm, r: !0, q: !0 },
            total_achievements: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            total_rare_achievements: {
              n: 3,
              br: A.readUint32,
              bw: I.writeUint32,
            },
            total_games_with_achievements: {
              n: 4,
              br: A.readUint32,
              bw: I.writeUint32,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Response`;
    }
  },
  Cm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievementSets_Request`;
    }
  },
  wm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.games || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            games: { n: 1, c: Em, r: !0, q: !0 },
            total_sets: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            total_base_game_sets: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            total_dlc_sets: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            total_games: { n: 5, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievementSets_Response`;
    }
  },
  Tm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groupid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            rtime_completed: { n: 2, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievementSets_Response_CompletedSet`;
    }
  },
  Em = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            base_sets_completed: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            dlc_sets_completed: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            rtime_last_completed: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            completed_sets: { n: 5, c: Tm, r: !0, q: !0 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievementSets_Response_Game`;
    }
  },
  Dm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: I.writeRepeatedUint32,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Request`;
    }
  },
  Om = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: Am, r: !0, q: !0 } },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response`;
    }
  },
  km = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_url || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_url: { n: 1, br: A.readString, bw: I.writeString },
            preview_url: { n: 2, br: A.readString, bw: I.writeString },
            image_width: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            image_height: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            maybe_inappropriate_sex: { n: 5, br: A.readBool, bw: I.writeBool },
            maybe_inappropriate_violence: {
              n: 6,
              br: A.readBool,
              bw: I.writeBool,
            },
            visibility: { n: 7, br: A.readUint32, bw: I.writeUint32 },
            spoiler_tag: { n: 8, br: A.readBool, bw: I.writeBool },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_Screenshot`;
    }
  },
  Am = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            screenshots: { n: 2, c: km, r: !0, q: !0 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp`;
    }
  },
  jm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            gid: { n: 2, br: A.readFixed64String, bw: I.writeFixed64String },
            type: { n: 3, br: A.readEnum, bw: I.writeEnum },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Request`;
    }
  },
  Mm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.jsondata || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { jsondata: { n: 1, br: A.readString, bw: I.writeString } },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Response`;
    }
  },
  Nm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            gids: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readFixed64String,
              pbr: A.readPackedFixed64String,
              bw: I.writeRepeatedFixed64String,
            },
            type: { n: 3, br: A.readEnum, bw: I.writeEnum },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Request`;
    }
  },
  Pm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: Fm, r: !0, q: !0 } },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response`;
    }
  },
  Fm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: A.readFixed64String, bw: I.writeFixed64String },
            jsondata: { n: 2, br: A.readString, bw: I.writeString },
            steamid: {
              n: 3,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response_Entry`;
    }
  },
  Im = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: A.readFixed64String, bw: I.writeFixed64String },
            type: { n: 2, br: A.readEnum, bw: I.writeEnum },
            count: { n: 3, br: A.readUint32, bw: I.writeUint32 },
            last_account_index: { n: 4, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Request`;
    }
  },
  Lm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: Rm, r: !0, q: !0 },
            last_account_index: { n: 2, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response`;
    }
  },
  Rm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: A.readFixed64String, bw: I.writeFixed64String },
            jsondata: { n: 2, br: A.readString, bw: I.writeString },
            steamid: {
              n: 3,
              br: A.readFixed64String,
              bw: I.writeFixed64String,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response_Entry`;
    }
  },
  zm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            return_private: { n: 3, br: A.readBool, bw: I.writeBool },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Request`;
    }
  },
  Bm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            privacy_state: { n: 3, br: A.readEnum, bw: I.writeEnum },
            rt_privacy_updated: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            privacy_override: { n: 5, br: A.readBool, bw: I.writeBool },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendSharedYearInView`;
    }
  },
  Vm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.friend_shares || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            friend_shares: { n: 1, c: Bm, r: !0, q: !0 },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Response`;
    }
  },
  Hm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            language: { n: 3, br: A.readString, bw: I.writeString },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Request`;
    }
  },
  Um = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || E(e.M()),
        V.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: Wm, r: !0, q: !0 } },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response`;
    }
  },
  Wm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: A.readString, bw: I.writeString },
            url_path: { n: 2, br: A.readString, bw: I.writeString },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response_Image`;
    }
  },
  Gm = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: A.readFixed64String,
              bw: I.writeFixed64String,
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Request`;
    }
  },
  Km = class e extends V.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.year || E(e.M()),
        V.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            year: { n: 1, br: A.readUint32, bw: I.writeUint32 },
            month: { n: 2, br: A.readUint32, bw: I.writeUint32 },
            games_played: { n: 4, br: A.readUint32, bw: I.writeUint32 },
            top_played_appid: { n: 5, br: A.readUint32, bw: I.writeUint32 },
            longest_streak_days: { n: 6, br: A.readUint32, bw: I.writeUint32 },
            rt_streak_start: { n: 7, br: A.readUint32, bw: I.writeUint32 },
            achievements: { n: 8, br: A.readUint32, bw: I.writeUint32 },
            screenshots: { n: 9, br: A.readUint32, bw: I.writeUint32 },
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
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return N(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new V.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new V.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Response`;
    }
  },
  qm;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearInReview#1`, Tn(hm, t, n), gm, {
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
      Tn(ym, t, n),
      bm,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetUserSharingPermissions = n;
  function r(e, t, n) {
    return e.SendMsg(
      `SaleFeature.SetUserSharingPermissions#1`,
      Tn(_m, t, n),
      vm,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2, rgBrowserAPISites: [`store`] },
    );
  }
  e.SetUserSharingPermissions = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearAchievements#1`,
      Tn(xm, t, n),
      Sm,
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
    return e.SendMsg(
      `SaleFeature.GetUserYearAchievementSets#1`,
      Tn(Cm, t, n),
      wm,
      { bConstMethod: !0, ePrivilege: 2, rgBrowserAPISites: [`all`] },
    );
  }
  e.GetUserYearAchievementSets = a;
  function o(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearScreenshots#1`, Tn(Dm, t, n), Om, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetUserYearScreenshots = o;
  function s(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserActionData#1`, Tn(jm, t, n), Mm, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetUserActionData = s;
  function c(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetMultipleUserActionData#1`,
      Tn(Nm, t, n),
      Pm,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.GetMultipleUserActionData = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetAllUserActionDataForType#1`,
      Tn(Im, t, n),
      Lm,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllUserActionDataForType = l;
  function u(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetFriendsSharedYearInReview#1`,
      Tn(zm, t, n),
      Vm,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.GetFriendsSharedYearInReview = u;
  function d(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearInReviewShareImage#1`,
      Tn(Hm, t, n),
      Um,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.GetUserYearInReviewShareImage = d;
  function f(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetYIRCurrentMonthlySummary#1`,
      Tn(Gm, t, n),
      Km,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetYIRCurrentMonthlySummary = f;
})((qm ||= {}));
var Jm = `GwOTkls9wBU-`,
  Ym = `_2KGKjN-sgQI-`,
  Xm = `s5xhgmFvlcc-`,
  Zm = `RT0zcREZx6Q-`,
  Qm = `okfAhWg-xsA-`,
  H = u();
function $m(e) {
  return e.isHidden === void 0 && e.achievement.hidden
    ? (0, H.jsx)(eh, { ...e })
    : (0, H.jsx)(th, { ...e, isHidden: e.isHidden ?? !1 });
}
function eh(e) {
  let { appid: t, achievement: n } = e,
    r = iu(t, M.logged_in ? M.steamid : ``),
    i = r.isSuccess && r.data?.achievements?.[n.internal_key]?.unlocked === !0;
  return (0, H.jsx)(th, { ...e, isHidden: !i });
}
function th(e) {
  return e.globalUnlockPercent === void 0
    ? (0, H.jsx)(nh, { ...e })
    : (0, H.jsx)(rh, { ...e });
}
function nh(e) {
  let t = Yl(e.appid, e.achievement.internal_key);
  return (0, H.jsx)(rh, { ...e, globalUnlockPercent: t });
}
function rh(e) {
  let {
      achievement: t,
      progress: n,
      isHidden: r,
      globalUnlockPercent: i,
      hideUnlockLine: a,
    } = e,
    { bForce24HourClock: o } = Xl(),
    s = n?.unlocked,
    c = (s ? t.icon_achieved : t.icon_unachieved) ?? ``,
    l = Ql(i),
    u = n?.unlock_time
      ? nu.Localize(`#Achievements_Row_UnlockedOnDate`, $l(n.unlock_time, o))
      : nu.Localize(`#Achievements_Row_UnlockedNoDate`),
    d = ru(`96`),
    { name: f, description: p } = au(t, r);
  return (0, H.jsxs)(Xn, {
    direction: `column`,
    background: `dull-8`,
    className: Ym,
    style: d,
    children: [
      (0, H.jsx)(`div`, {
        className: Xm,
        children: (0, H.jsx)(`div`, {
          className: Zm,
          children: (0, H.jsx)(tu, { imgURL: c, hidden: r }),
        }),
      }),
      (0, H.jsxs)(Xn, {
        direction: `row`,
        padding: `3`,
        gap: `3`,
        minWidth: `calc(4 * var(--icon-size))`,
        maxWidth: `calc(4 * var(--icon-size))`,
        children: [
          (0, H.jsx)(tu, {
            style: { flexShrink: `0` },
            imgURL: c,
            glow: s && l,
            hidden: r,
          }),
          (0, H.jsxs)(Xn, {
            direction: `column`,
            justify: `start`,
            gap: `3`,
            flexGrow: `1`,
            children: [
              (0, H.jsx)(cl, { contrast: `title`, size: `4`, children: f }),
              (0, H.jsx)(cl, { contrast: `subtitle`, children: p }),
            ],
          }),
        ],
      }),
      (0, H.jsxs)(Xn, {
        direction: `column`,
        padding: `3`,
        gap: `2`,
        className: Qm,
        children: [
          s && !a && (0, H.jsx)(cl, { contrast: `description`, children: u }),
          i !== void 0 &&
            (0, H.jsx)(cl, {
              contrast: l ? void 0 : `subtitle`,
              color: l ? `amber-9` : void 0,
              children: Zl(i),
            }),
        ],
      }),
    ],
  });
}
function ih(e) {
  let {
      appid: t,
      achievement: n,
      progress: r,
      globalUnlockPercent: i,
      isHidden: a,
      hideUnlockLine: o,
      direction: s = `bottom`,
      strTooltipClassname: c,
      bNavStop: l = !0,
      ...u
    } = e,
    d = (0, H.jsx)($m, {
      appid: t,
      achievement: n,
      progress: r,
      globalUnlockPercent: i,
      isHidden: a,
      hideUnlockLine: o,
    }),
    f = Si(c, Jm);
  return (0, H.jsx)(Ba, {
    direction: s,
    strTooltipClassname: f,
    toolTipContent: d,
    bNavStop: l,
    ...u,
  });
}
var ah = {
    19: [19, Fi, kn, Yn, qo, mo],
    [ss]: [ss, uo, cr, el, Pn, Xc, Ia],
    [mr]: [mr, $c, Dn, Ji],
    113: [113],
    21: [21, Ni],
    492: [492],
    [Ar]: [Ar, Qr],
    [Fi]: [19, Fi, kn, Oc],
    9: [9, Os, dr, ia, To, Sc, hc],
    [uo]: [ss, uo, cr, jn, dc],
    122: [122, Ai, Di, oa, rl],
    [Zo]: [Zo, Qr],
    [kn]: [19, Fi, kn, zc],
    599: [599, zr, wn],
    [Oc]: [Fi, Oc],
    [qi]: [qi, cc, Za],
    [Bi]: [Bi, Ss, to],
    [$c]: [mr, $c, fo, vc],
    [Ss]: [Bi, Ss, to],
    597: [597],
    [Ns]: [Ns, On, oi, Ln],
    [zs]: [zs],
    [fs]: [fs],
    [Dn]: [mr, Dn, aa, yr],
    [ri]: [ri, Un],
    [cr]: [ss, uo, cr],
    [cc]: [qi, cc],
    [hn]: [hn, fn],
    [Ji]: [mr, Ji, qc],
    [ka]: [ka],
    [Bc]: [Bc],
    [_r]: [_r, Hl],
    [Xi]: [Xi],
    [Ti]: [Ti, Xs, Qs],
    128: [128, wo],
    [Ys]: [Ys],
    [po]: [po],
    [el]: [ss, el],
    [Hi]: [Hi],
    493: [493],
    [uc]: [uc, Zc],
    [ma]: [ma, Dc],
    [fn]: [hn, fn],
    [Pn]: [ss, Pn],
    [Uc]: [Uc, Qr],
    [Un]: [ri, Un],
    [os]: [os],
    [ro]: [ro, Wn],
    [No]: [No],
    [fc]: [fc, Nc],
    [ic]: [ic, Hl],
    [to]: [Bi, Ss, to],
    [Za]: [qi, Za],
    [Ga]: [Ga, qc],
    [Ai]: [122, Ai],
    [Nc]: [fc, Nc],
    [Rc]: [Rc],
    [Zc]: [uc, Zc],
    [Xc]: [ss, Xc],
    [Lo]: [Lo],
    [Mn]: [Mn],
    [Jc]: [Jc],
    [pr]: [pr],
    [Xs]: [Ti, Xs, Ac, us],
    [_s]: [_s],
    699: [699],
    [Xo]: [Xo],
    [Yn]: [19, Yn],
    [jo]: [jo],
    [El]: [El],
    [fo]: [$c, fo],
    [On]: [Ns, On],
    [Ni]: [21, Ni],
    [zi]: [zi],
    [_l]: [_l, Qi, Rl, Qn],
    [qo]: [19, qo],
    [vc]: [$c, vc],
    [Tc]: [Tc],
    [ls]: [ls],
    [Da]: [Da],
    [wl]: [wl],
    [as]: [as],
    [oo]: [oo],
    [Nr]: [Nr],
    [na]: [na],
    [Ro]: [Ro],
    [Sa]: [Sa],
    701: [701, Lr, Ja, yc],
    [zr]: [599, zr, wn],
    [Nl]: [Nl],
    [$a]: [$a],
    [Os]: [9, Os, dn],
    [$n]: [$n, $i],
    [wo]: [128, wo],
    [Ic]: [Ic],
    [ra]: [ra],
    [jn]: [uo, jn, pa],
    [$i]: [$n, $i],
    [$o]: [$o],
    [$r]: [$r],
    [Kr]: [Kr],
    [dr]: [9, dr],
    [Bs]: [Bs],
    [Di]: [122, Di],
    [Fo]: [Fo],
    [pa]: [jn, pa, Hr, ba, Sr],
    [tr]: [tr, Us],
    [An]: [An],
    [go]: [go],
    [ia]: [9, ia],
    [Wn]: [ro, Wn],
    [Ls]: [Ls],
    [Jo]: [Jo],
    [ec]: [ec],
    [In]: [In],
    [Jn]: [Jn],
    [Rs]: [Rs],
    [Qi]: [_l, Qi],
    [zo]: [zo],
    [Dc]: [ma, Dc],
    [Ea]: [Ea],
    [ir]: [ir],
    [aa]: [Dn, aa],
    [qr]: [qr],
    [Cl]: [Cl],
    [ti]: [ti],
    [xr]: [xr],
    [Ml]: [Ml],
    [Ds]: [Ds],
    [ho]: [ho],
    [To]: [9, To],
    [sa]: [sa],
    [Qs]: [Ti, Qs],
    [fi]: [fi],
    [or]: [or],
    [Io]: [Io],
    [wn]: [599, zr, wn],
    [ns]: [ns],
    [pi]: [pi],
    [eo]: [eo, Gi],
    [vo]: [vo],
    [ga]: [ga],
    [Ua]: [Ua],
    [li]: [li, Ii, pl, ni, pn],
    [Qr]: [Ar, Zo, Uc, Qr],
    [mo]: [19, mo],
    [Vl]: [Vl],
    [ul]: [ul],
    [qs]: [qs],
    [Oo]: [Oo],
    [tl]: [tl],
    [_o]: [_o],
    [$s]: [$s],
    [zn]: [zn],
    [hr]: [hr],
    [yr]: [Dn, yr],
    [Cr]: [Cr],
    [ws]: [ws],
    [Dl]: [Dl],
    [gr]: [gr],
    [za]: [za],
    [ts]: [ts],
    [ua]: [ua],
    [js]: [js],
    [lc]: [lc],
    [is]: [is],
    [ta]: [ta],
    [Co]: [Co],
    [fr]: [fr],
    [di]: [di],
    [Il]: [Il],
    [da]: [da],
    [Vr]: [Vr],
    [Ui]: [Ui],
    [wi]: [wi],
    [Vo]: [Vo],
    [bo]: [bo],
    [Cc]: [Cc],
    [Gn]: [Gn],
    [Hr]: [pa, Hr],
    [Ri]: [Ri],
    [Gi]: [eo, Gi],
    [Fn]: [Fn, Al],
    [va]: [va],
    [ci]: [ci],
    [oi]: [Ns, oi],
    [Gr]: [Gr],
    [Yr]: [Yr],
    [jc]: [jc],
    [so]: [so],
    [Ul]: [Ul],
    [yl]: [yl],
    [xn]: [xn],
    [br]: [br],
    [Ac]: [Xs, Ac],
    [Sc]: [9, Sc],
    [_c]: [_c],
    [Ws]: [Ws],
    [Oi]: [Oi],
    [Va]: [Va],
    [pc]: [pc],
    [zc]: [kn, zc],
    [Gc]: [Gc],
    [Lc]: [Lc],
    [sl]: [sl],
    [oa]: [122, oa],
    872: [872],
    [bs]: [bs],
    [Pi]: [Pi],
    [zl]: [zl],
    [Js]: [Js],
    [Mo]: [Mo],
    [ac]: [ac],
    [Cn]: [Cn],
    [ps]: [ps],
    [qn]: [qn],
    [Vn]: [Vn],
    [Yc]: [Yc],
    [Lr]: [701, Lr, Ja],
    [Po]: [Po],
    [Ha]: [Ha],
    [Kc]: [Kc],
    [Vs]: [Vs],
    [Ki]: [Ki],
    [La]: [La],
    [io]: [io],
    [jr]: [jr],
    [qa]: [qa],
    [Go]: [Go],
    [hc]: [9, hc],
    [sr]: [sr],
    [vs]: [vs],
    [er]: [er],
    [Hs]: [Hs],
    87: [87],
    [rl]: [122, rl],
    [Us]: [tr, Us],
    84: [84],
    [Vi]: [Vi],
    [dc]: [uo, dc],
    [hs]: [hs],
    [Ao]: [Ao],
    [Br]: [Br],
    [Oa]: [Oa],
    [Wc]: [Wc],
    [Xr]: [Xr],
    [vi]: [vi],
    [Pa]: [Pa],
    [Fa]: [Fa],
    [kr]: [kr],
    [En]: [En],
    [Bo]: [Bo],
    [Ja]: [701, Lr, Ja],
    [Pr]: [Pr],
    [Hl]: [_r, ic, Hl],
    [hl]: [hl],
    [yn]: [yn],
    [Sl]: [Sl],
    [Cs]: [Cs],
    [xa]: [xa],
    [Or]: [Or],
    [ei]: [ei],
    [Aa]: [Aa],
    [bn]: [bn],
    [Hc]: [Hc],
    [Qc]: [Qc],
    [Ur]: [Ur],
    [ui]: [ui],
    [fa]: [fa],
    [Rn]: [Rn],
    [ca]: [ca],
    [vl]: [vl],
    [Ii]: [li, Ii],
    [Wr]: [Wr],
    [Sn]: [Sn],
    [Fl]: [Fl],
    [Qa]: [Qa],
    [Zr]: [Zr],
    [pl]: [li, pl, ni],
    [ai]: [ai],
    [Gs]: [Gs],
    [nc]: [nc],
    [fl]: [fl],
    [ya]: [ya],
    [tc]: [tc],
    [mc]: [mc],
    [ii]: [ii],
    [qc]: [Ji, Ga, qc],
    [Al]: [Fn, Al],
    [Ko]: [Ko],
    [ki]: [ki],
    [Ts]: [Ts],
    [xi]: [xi],
    [ja]: [ja],
    [Ei]: [Ei],
    [al]: [al],
    [Vc]: [Vc],
    [Pc]: [Pc],
    [bl]: [bl],
    [ea]: [ea],
    [co]: [co],
    [ks]: [ks],
    [Gl]: [Gl],
    [Tr]: [Tr],
    [_i]: [_i],
    [ur]: [ur],
    [ba]: [pa, ba, Sr],
    [_a]: [_a],
    [Mc]: [Mc],
    [Eo]: [Eo],
    [Er]: [Er],
    [ni]: [li, pl, ni],
    [nl]: [nl],
    [cs]: [cs],
    [So]: [So],
    [bi]: [bi],
    [gs]: [gs],
    [xs]: [xs],
    784: [784],
    [Ir]: [Ir],
    [Zi]: [Zi],
    [Tl]: [Tl],
    [ll]: [ll],
    [Ia]: [ss, Ia],
    [xc]: [xc],
    [Bl]: [Bl],
    [Is]: [Is],
    [mn]: [mn],
    [Wo]: [Wo],
    [Ln]: [Ns, Ln],
    [dn]: [Os, dn],
    [ln]: [ln],
    [mi]: [mi],
    [dl]: [dl],
    [lr]: [lr],
    [Wi]: [Wi],
    [Uo]: [Uo],
    [Fr]: [Fr],
    [Ra]: [Ra],
    [vr]: [vr],
    [la]: [la],
    [ko]: [ko],
    [Rr]: [Rr],
    [Pl]: [Pl],
    [Na]: [Na],
    [Sr]: [pa, ba, Sr],
    [wa]: [wa],
    [us]: [Xs, us],
    [ji]: [ji],
    [Qo]: [Qo],
    [Qn]: [_l, Qn],
    809: [809],
    [Mi]: [Mi],
    [As]: [As],
    [Zn]: [Zn],
    [Do]: [Do],
    [Wa]: [Wa],
    [lo]: [lo, ms],
    [pn]: [li, pn],
    [sc]: [sc],
    [ms]: [lo, ms],
    [gc]: [gc],
    [wc]: [wc],
    [Rl]: [_l, Rl],
    [yc]: [701, yc],
    [gl]: [gl],
  },
  oh = [Bi, Ss, to, cc];
function sh(e, t) {
  let n = e.filter((e) => oh.findIndex((t) => t == e.nTagId) == -1),
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
      ah[e] &&
        ah[e].forEach((e) => {
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
function ch() {
  return M.country_code.toLowerCase() === `cn`;
}
function lh(e, t, n) {
  let { rgRankings: r, nTotalResultCount: i } = dh(e, t),
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
function uh(e, t, n, r) {
  let { rgRankings: i, nTotalResultCount: a } = dh(e, t, n);
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
        let a = fh(t, r, e.GetRawStats().playtime_stats.games[i]);
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
function dh(e, t, n) {
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
function fh(e, t, n) {
  let r = n.stats.total_playtime_percentagex100,
    i = `${e}_playtime_percentagex100`,
    a = n.relative_game_stats[i] ?? 0;
  return ha((a * r) / t, 0, 1e4);
}
function ph(e, t) {
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
function mh(e, t) {
  if (t != `demo` && t != `playtest`) {
    let n = `${t === `overall` ? `total` : t}_sessions`,
      r = `${t === `overall` ? `total` : t}_playtime_percentagex100`;
    return {
      nTotalGames: ph(e, t).length || 0,
      nTotalSessions: e.playtime_stats.total_stats[n] || 0,
      nTotalPercentage: e.playtime_stats.total_stats[r] || 0,
    };
  }
  {
    let n = ph(e, t);
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
var hh = `percentMonthOfOverall`,
  gh = `percentOtherGamesRelativeMonth`;
function _h(e, t, n, r) {
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
          (a[hh] = l),
          (a[gh] = l - u),
          (o[gh] = 1e4 - d),
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
function vh(e) {
  e.game_summary?.length &&
    Ms(
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
function yh(e) {
  return (
    Ms(
      typeof e.account_id == `number` &&
        typeof e.year == `number` &&
        typeof e.privacy_state == `number` &&
        e.playtime_stats,
      `YIR stats missing expected fields!`,
    ),
    e.playtime_stats && vh(e.playtime_stats),
    e
  );
}
function bh(e) {
  if (typeof e?.new_releases == `number`)
    return (
      Ms(
        typeof e.recent_releases == `number` &&
          typeof e.classic_releases == `number` &&
          typeof e.recent_cutoff_year == `number`,
        `YIR global playtime distribution missing expected fields!`,
      ),
      e
    );
}
function xh(e) {
  if (typeof e?.games_played == `number`)
    return (
      Ms(
        typeof e.unlocked_achievements == `number` &&
          typeof e.longest_streak == `number`,
        `YIR previous year summary missing expected fields!`,
      ),
      e
    );
}
var Sh = class {
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
      return new Xa(this.m_steamid).GetAccountID();
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
      let i = yh(e);
      if (
        ((this.m_allStats = i),
        (this.m_steamid = Xa.InitFromAccountID(
          i.account_id,
          P.EUNIVERSE,
        ).ConvertTo64BitString()),
        (this.m_globalPercentiles = t ?? void 0),
        (this.m_globalGameplayDistribution = bh(n)),
        (this.m_previousYearSummary = xh(r)),
        this.BHasPlaytimeData() &&
          i.playtime_stats.total_stats.total_sessions > 0)
      ) {
        (i.playtime_stats.game_summary.forEach((e) => {
          (Ms(
            !this.m_mapGameSummary.has(e.appid),
            `Found at least two record of appid ${e.appid} in stats.playtime_stats.game_summary`,
          ),
            this.m_mapGameSummary.set(e.appid, e));
        }),
          i.playtime_stats.games.forEach((e) => {
            (Ms(
              !this.m_mapGameStats.has(e.appid),
              `Found at least two record of appid ${e.appid} in stats.playtime_stats.games`,
            ),
              this.m_mapGameStats.set(e.appid, e));
          }));
        let { rgResults: e } = lh(this, `overall`, 8),
          t = e.map((e) => e.appid);
        ((this.m_rgTopGameMonthsChartIdsAndRanks = t.map((e, t) => ({
          appid: e,
          rank: t,
        }))),
          (this.m_rgTopGamesShown = e.slice(0, 5)),
          (this.m_rgTopGameShownAppIDs = this.m_rgTopGamesShown.map(
            (e) => e.appid,
          )),
          (this.m_rgMonthChartData = _h(
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
        this.m_rgAggregateTagData = sh(e, 6);
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
        let a = (n - t) / oc.PerYear,
          o = e.findIndex((e) => a < e);
        o >= 0
          ? (r[o] += i.total_playtime_percentagex100)
          : (r[r.length - 1] += i.total_playtime_percentagex100);
      }
      return r;
    }
  },
  Ch = `0px 0px 100% 0px`,
  wh = e(f(), 1);
function Th(e, t) {
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
function Eh(e, t) {
  return [`YIR`, `Get`, e, t];
}
function Dh(e, t, n, r = {}) {
  return {
    queryKey: Eh(t, n),
    queryFn: async () => {
      let i = await qm.GetUserYearInReview(e, {
        steamid: t,
        year: n,
        fetch_previous_year_summary: !0,
        access_source: r.eAccessSource,
        force_regenerate: r.bForceRegenerate,
      });
      return Th(i.GetEResult(), i.Body().toObject());
    },
    staleTime: 1 / 0,
  };
}
function Oh(e, t) {
  return d(Dh(Ll(), e, t));
}
function kh(e, t) {
  let { data: n, isLoading: r } = Oh(e, t),
    {
      eResult: i,
      stats: a,
      percentiles: o,
      distribution: s,
      previous_year_summary: c,
    } = n ?? {};
  return {
    userYearInReview: R.useMemo(() => {
      if (i == 1 && a) return new Sh(a, o, s, c);
    }, [i, a, o, s, c]),
    isLoading: r,
  };
}
function Ah(e, t) {
  return Oh(e, t).data?.privacy_state;
}
function jh(e, t) {
  let n = Ll(),
    r = p();
  return c({
    mutationFn: async (r) => {
      let i = await qm.SetUserSharingPermissions(n, {
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
        r.setQueryData(Eh(e, t), (e) => e && { ...e, privacy_state: i });
    },
  });
}
function Mh(e, t, n) {
  return {
    steamid: t,
    nYear: n,
    achievements: new wh.default((r) => Fh(e, t, n, r), { cache: !1 }),
    screenshots: new wh.default((r) => Uh(e, t, n, r), { cache: !1 }),
  };
}
var Nh = R.createContext(void 0);
function Ph() {
  let e = R.useContext(Nh);
  return (
    Ms(e, `Cannot use YIR data loaders outside of Steam Replay page!`), e
  );
}
async function Fh(e, t, n, r) {
  try {
    let i = await qm.GetUserYearAchievements(e, {
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
function Ih(e, t) {
  return {
    queryKey: [`YIR`, `achievements`, `apps`, e.steamid, e.nYear, t],
    queryFn: () => e.achievements.load(t),
    staleTime: 1 / 0,
  };
}
function Lh(e) {
  let t = Ph();
  l({ queries: e.GetTopGamesShownAppIDs().map((e) => Ih(t, e)) });
}
function Rh(e) {
  let { data: t } = d({ ...Ih(Ph(), e), enabled: !!e });
  return t;
}
function zh(e, t, n) {
  return {
    queryKey: [`YIR`, `achievements`, `display`, t, n],
    queryFn: async () => {
      try {
        let r = await il.GetGameAchievements(e, { appid: t, language: n });
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
function Bh(e, t = !0) {
  let n = Ll(),
    { data: r } = d({
      ...zh(n, e, P.LANGUAGE || `english`),
      enabled: t && !!e,
    });
  return r;
}
function Vh(e) {
  let t = Bh(e);
  return R.useMemo(() => {
    let e = new Map();
    for (let n of t ?? []) n.internal_name && e.set(n.internal_name, n);
    return e;
  }, [t]);
}
function Hh(e) {
  return Bh(e)?.length ?? 0;
}
async function Uh(e, t, n, r) {
  let i = await qm.GetUserYearScreenshots(e, {
    steamid: t,
    year: n,
    appids: [...r],
  });
  if (!i.BSuccess()) throw `Load Screenshots failed: ${i.GetErrorMessage()}`;
  let { apps: a = [] } = i.Body().toObject(),
    o = a.reduce((e, t) => ((e[t.appid] = t), e), {});
  return r.map((e) => o[e]?.screenshots);
}
function Wh(e, t) {
  return {
    queryKey: [`YIR`, `Screenshots`, e.steamid, e.nYear, t],
    queryFn: async () => (await e.screenshots.load(t)) ?? null,
    staleTime: 1 / 0,
  };
}
function Gh(e) {
  let { data: t } = d({ ...Wh(Ph(), e), enabled: !!e });
  return t ?? void 0;
}
function Kh(e, t, n, r) {
  return {
    queryKey: [`YIR`, `Friends`, t, n, r],
    queryFn: async () => {
      let i = await qm.GetFriendsSharedYearInReview(e, {
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
function qh(e, t) {
  return d(Kh(Ll(), e, t, M.is_support));
}
function Jh(e, t) {
  return {
    queryKey: [`YIR`, `FamilyGroup`, t],
    queryFn: async () => {
      let n = await Kl.GetFamilyGroupForUser(e, {
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
function Yh(e) {
  return d(Jh(Ll(), e));
}
function Xh(e, t, n, r) {
  return {
    queryKey: [`YIR`, `ShareImages`, t, n, r],
    queryFn: async () => {
      let i = await qm.GetUserYearInReviewShareImage(e, {
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
function Zh(e, t, n) {
  return d(Xh(Ll(), e, t, n));
}
var Qh = R.createContext(void 0);
function $h() {
  let e = R.useContext(Qh);
  return (Ms(e, `Cannot use YIR page data outside of Steam Replay page!`), e);
}
function eg(e) {
  return e?.success === 1 || e?.success === 15;
}
function tg(e) {
  let t = e ? { appid: e } : void 0,
    { data: n, isLoading: r } = Ca(t),
    { data: i, isLoading: a } = Nn(t);
  return {
    item: R.useMemo(
      () => (eg(n) ? { info: n, assets: i ?? null } : void 0),
      [n, i],
    ),
    bLoading: r || a,
  };
}
function ng(e, t = !1) {
  return d({ ...rg(p(), yo(), e, t), placeholderData: m });
}
function rg(e, t, n, r = !1) {
  return {
    queryKey: [`YIR`, `storeitems`, n, r],
    queryFn: async () => {
      let i = await Promise.all(
          n.map(async (n) => {
            let [i, a] = await Promise.allSettled([
              e.fetchQuery(rr(t, { appid: n })),
              e.fetchQuery(xl(t, { appid: n })),
              r && e.fetchQuery(si(t, { appid: n })),
            ]);
            return i.status === `rejected` || !eg(i.value)
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
  C(() => import(`./chunk~e848daa62e.js`), [], import.meta.url)),
  (U.brazilian = () =>
    C(() => import(`./chunk~c38582be51.js`), [], import.meta.url)),
  (U.bulgarian = () =>
    C(() => import(`./chunk~ccfa18fa3d.js`), [], import.meta.url)),
  (U.czech = () =>
    C(() => import(`./chunk~1f89df6a13.js`), [], import.meta.url)),
  (U.danish = () =>
    C(() => import(`./chunk~fc2bbceb5d.js`), [], import.meta.url)),
  (U.dutch = () =>
    C(() => import(`./chunk~da5799f81f.js`), [], import.meta.url)),
  (U.english = () =>
    C(() => import(`./chunk~2516855c32.js`), [], import.meta.url)),
  (U.finnish = () =>
    C(() => import(`./chunk~d587003d0a.js`), [], import.meta.url)),
  (U.french = () =>
    C(() => import(`./chunk~ed4ff863ac.js`), [], import.meta.url)),
  (U.german = () =>
    C(() => import(`./chunk~81227c1f72.js`), [], import.meta.url)),
  (U.greek = () =>
    C(() => import(`./chunk~8e60606527.js`), [], import.meta.url)),
  (U.hungarian = () =>
    C(() => import(`./chunk~75ebecc6b1.js`), [], import.meta.url)),
  (U.indonesian = () =>
    C(() => import(`./chunk~0098d8b0af.js`), [], import.meta.url)),
  (U.italian = () =>
    C(() => import(`./chunk~957a796a0a.js`), [], import.meta.url)),
  (U.japanese = () =>
    C(() => import(`./chunk~7629d9c89e.js`), [], import.meta.url)),
  (U.koreana = () =>
    C(() => import(`./chunk~b6086b9c24.js`), [], import.meta.url)),
  (U.latam = () =>
    C(() => import(`./chunk~7e7a28ac3e.js`), [], import.meta.url)),
  (U.malay = () =>
    C(() => import(`./chunk~4ee96a1953.js`), [], import.meta.url)),
  (U.norwegian = () =>
    C(() => import(`./chunk~da887fc950.js`), [], import.meta.url)),
  (U.polish = () =>
    C(() => import(`./chunk~c56820d9a8.js`), [], import.meta.url)),
  (U.portuguese = () =>
    C(() => import(`./chunk~e06c119adf.js`), [], import.meta.url)),
  (U.romanian = () =>
    C(() => import(`./chunk~369394c631.js`), [], import.meta.url)),
  (U.russian = () =>
    C(() => import(`./chunk~d7addddcd5.js`), [], import.meta.url)),
  (U.sc_schinese = () =>
    C(() => import(`./chunk~c3ba49c415.js`), [], import.meta.url)),
  (U.schinese = () =>
    C(() => import(`./chunk~8b81f35864.js`), [], import.meta.url)),
  (U.spanish = () =>
    C(() => import(`./chunk~050cba1d23.js`), [], import.meta.url)),
  (U.swedish = () =>
    C(() => import(`./chunk~052acd148b.js`), [], import.meta.url)),
  (U.tchinese = () =>
    C(() => import(`./chunk~bb59787bf8.js`), [], import.meta.url)),
  (U.thai = () =>
    C(() => import(`./chunk~e8f199b312.js`), [], import.meta.url)),
  (U.turkish = () =>
    C(() => import(`./chunk~6cc30891b5.js`), [], import.meta.url)),
  (U.ukrainian = () =>
    C(() => import(`./chunk~75429e242c.js`), [], import.meta.url)),
  (U.vietnamese = () =>
    C(() => import(`./chunk~96e64272d7.js`), [], import.meta.url)));
async function ig(e) {
  if (U[e]) return await U[e]();
}
var ag = Li(ig),
  W = {};
((W.arabic = () =>
  C(() => import(`./chunk~2a9ee28e4f.js`), [], import.meta.url)),
  (W.brazilian = () =>
    C(() => import(`./chunk~f8d7ac36da.js`), [], import.meta.url)),
  (W.bulgarian = () =>
    C(() => import(`./chunk~aaa9c40b3c.js`), [], import.meta.url)),
  (W.czech = () =>
    C(() => import(`./chunk~a1b78a4c90.js`), [], import.meta.url)),
  (W.danish = () =>
    C(() => import(`./chunk~a91207123e.js`), [], import.meta.url)),
  (W.dutch = () =>
    C(() => import(`./chunk~435b527bf1.js`), [], import.meta.url)),
  (W.english = () =>
    C(() => import(`./chunk~d172c03b1c.js`), [], import.meta.url)),
  (W.finnish = () =>
    C(() => import(`./chunk~bfb6237bed.js`), [], import.meta.url)),
  (W.french = () =>
    C(() => import(`./chunk~2c42f52255.js`), [], import.meta.url)),
  (W.german = () =>
    C(() => import(`./chunk~ad973f8cdb.js`), [], import.meta.url)),
  (W.greek = () =>
    C(() => import(`./chunk~8d234bc224.js`), [], import.meta.url)),
  (W.hungarian = () =>
    C(() => import(`./chunk~b331777e11.js`), [], import.meta.url)),
  (W.indonesian = () =>
    C(() => import(`./chunk~618ee32f14.js`), [], import.meta.url)),
  (W.italian = () =>
    C(() => import(`./chunk~f1ffa65450.js`), [], import.meta.url)),
  (W.japanese = () =>
    C(() => import(`./chunk~76a55c4c25.js`), [], import.meta.url)),
  (W.koreana = () =>
    C(() => import(`./chunk~cdde58a513.js`), [], import.meta.url)),
  (W.latam = () =>
    C(() => import(`./chunk~8b4e3972ff.js`), [], import.meta.url)),
  (W.malay = () =>
    C(() => import(`./chunk~2595da3066.js`), [], import.meta.url)),
  (W.norwegian = () =>
    C(() => import(`./chunk~5afd320c84.js`), [], import.meta.url)),
  (W.polish = () =>
    C(() => import(`./chunk~9282844403.js`), [], import.meta.url)),
  (W.portuguese = () =>
    C(() => import(`./chunk~c163bd573d.js`), [], import.meta.url)),
  (W.romanian = () =>
    C(() => import(`./chunk~09a2963a34.js`), [], import.meta.url)),
  (W.russian = () =>
    C(() => import(`./chunk~e3d6765cd6.js`), [], import.meta.url)),
  (W.sc_schinese = () =>
    C(() => import(`./chunk~a0a45dd693.js`), [], import.meta.url)),
  (W.schinese = () =>
    C(() => import(`./chunk~3893a6c80f.js`), [], import.meta.url)),
  (W.spanish = () =>
    C(() => import(`./chunk~685c663764.js`), [], import.meta.url)),
  (W.swedish = () =>
    C(() => import(`./chunk~1ba18ad10d.js`), [], import.meta.url)),
  (W.tchinese = () =>
    C(() => import(`./chunk~6765789f0d.js`), [], import.meta.url)),
  (W.thai = () =>
    C(() => import(`./chunk~0ebe7e9b63.js`), [], import.meta.url)),
  (W.turkish = () =>
    C(() => import(`./chunk~3b6d72df14.js`), [], import.meta.url)),
  (W.ukrainian = () =>
    C(() => import(`./chunk~0c6c7fcccd.js`), [], import.meta.url)),
  (W.vietnamese = () =>
    C(() => import(`./chunk~c45856eefb.js`), [], import.meta.url)));
async function og(e) {
  if (W[e]) return await W[e]();
}
var sg = Li(og),
  G = {};
((G.arabic = () =>
  C(() => import(`./chunk~2fe7aa2317.js`), [], import.meta.url)),
  (G.brazilian = () =>
    C(() => import(`./chunk~5e4fd7dc0f.js`), [], import.meta.url)),
  (G.bulgarian = () =>
    C(() => import(`./chunk~88092a0904.js`), [], import.meta.url)),
  (G.czech = () =>
    C(() => import(`./chunk~1b633fa830.js`), [], import.meta.url)),
  (G.danish = () =>
    C(() => import(`./chunk~5ef149ef0c.js`), [], import.meta.url)),
  (G.dutch = () =>
    C(() => import(`./chunk~6e9c13f2b2.js`), [], import.meta.url)),
  (G.english = () =>
    C(() => import(`./chunk~ab24f40556.js`), [], import.meta.url)),
  (G.finnish = () =>
    C(() => import(`./chunk~6152752886.js`), [], import.meta.url)),
  (G.french = () =>
    C(() => import(`./chunk~6b67b676cb.js`), [], import.meta.url)),
  (G.german = () =>
    C(() => import(`./chunk~fbf253d943.js`), [], import.meta.url)),
  (G.greek = () =>
    C(() => import(`./chunk~3428bc53a5.js`), [], import.meta.url)),
  (G.hungarian = () =>
    C(() => import(`./chunk~3cfb626910.js`), [], import.meta.url)),
  (G.indonesian = () =>
    C(() => import(`./chunk~f2ddcf973a.js`), [], import.meta.url)),
  (G.italian = () =>
    C(() => import(`./chunk~7bf1420f7c.js`), [], import.meta.url)),
  (G.japanese = () =>
    C(() => import(`./chunk~83852f9c50.js`), [], import.meta.url)),
  (G.koreana = () =>
    C(() => import(`./chunk~f6b67c2a99.js`), [], import.meta.url)),
  (G.latam = () =>
    C(() => import(`./chunk~0e50e7bbbb.js`), [], import.meta.url)),
  (G.malay = () =>
    C(() => import(`./chunk~c4ff866828.js`), [], import.meta.url)),
  (G.norwegian = () =>
    C(() => import(`./chunk~8b1d1eb8bd.js`), [], import.meta.url)),
  (G.polish = () =>
    C(() => import(`./chunk~62e22aebed.js`), [], import.meta.url)),
  (G.portuguese = () =>
    C(() => import(`./chunk~5bd109855c.js`), [], import.meta.url)),
  (G.romanian = () =>
    C(() => import(`./chunk~25da5b8e6d.js`), [], import.meta.url)),
  (G.russian = () =>
    C(() => import(`./chunk~0d8846738b.js`), [], import.meta.url)),
  (G.sc_schinese = () =>
    C(() => import(`./chunk~c68b2602f6.js`), [], import.meta.url)),
  (G.schinese = () =>
    C(() => import(`./chunk~724571da0c.js`), [], import.meta.url)),
  (G.spanish = () =>
    C(() => import(`./chunk~293f64f382.js`), [], import.meta.url)),
  (G.swedish = () =>
    C(() => import(`./chunk~19cb7f6cba.js`), [], import.meta.url)),
  (G.tchinese = () =>
    C(() => import(`./chunk~42b1a18a7a.js`), [], import.meta.url)),
  (G.thai = () =>
    C(() => import(`./chunk~75c28cc2a3.js`), [], import.meta.url)),
  (G.turkish = () =>
    C(() => import(`./chunk~d8552b3afe.js`), [], import.meta.url)),
  (G.ukrainian = () =>
    C(() => import(`./chunk~e6018f1bdb.js`), [], import.meta.url)),
  (G.vietnamese = () =>
    C(() => import(`./chunk~5e649757bf.js`), [], import.meta.url)));
async function cg(e) {
  if (G[e]) return await G[e]();
}
var lg = Li(cg),
  K = {};
((K.arabic = () =>
  C(() => import(`./chunk~2ccce839d9.js`), [], import.meta.url)),
  (K.brazilian = () =>
    C(() => import(`./chunk~a4b02e3aec.js`), [], import.meta.url)),
  (K.bulgarian = () =>
    C(() => import(`./chunk~323e3dd751.js`), [], import.meta.url)),
  (K.czech = () =>
    C(() => import(`./chunk~ab1c53a7a8.js`), [], import.meta.url)),
  (K.danish = () =>
    C(() => import(`./chunk~d7df11c444.js`), [], import.meta.url)),
  (K.dutch = () =>
    C(() => import(`./chunk~499b67db82.js`), [], import.meta.url)),
  (K.english = () =>
    C(() => import(`./chunk~f9dcc7ae33.js`), [], import.meta.url)),
  (K.finnish = () =>
    C(() => import(`./chunk~8e3265a9b2.js`), [], import.meta.url)),
  (K.french = () =>
    C(() => import(`./chunk~65bde88826.js`), [], import.meta.url)),
  (K.german = () =>
    C(() => import(`./chunk~7558ac0638.js`), [], import.meta.url)),
  (K.greek = () =>
    C(() => import(`./chunk~80d5e98417.js`), [], import.meta.url)),
  (K.hungarian = () =>
    C(() => import(`./chunk~7cfa6da95d.js`), [], import.meta.url)),
  (K.indonesian = () =>
    C(() => import(`./chunk~f523ee529d.js`), [], import.meta.url)),
  (K.italian = () =>
    C(() => import(`./chunk~a9dcad5016.js`), [], import.meta.url)),
  (K.japanese = () =>
    C(() => import(`./chunk~8f28cd54ad.js`), [], import.meta.url)),
  (K.koreana = () =>
    C(() => import(`./chunk~4db0d8d0b7.js`), [], import.meta.url)),
  (K.latam = () =>
    C(() => import(`./chunk~ba0a093efb.js`), [], import.meta.url)),
  (K.malay = () =>
    C(() => import(`./chunk~8ee08d7313.js`), [], import.meta.url)),
  (K.norwegian = () =>
    C(() => import(`./chunk~ed2c9b4b07.js`), [], import.meta.url)),
  (K.polish = () =>
    C(() => import(`./chunk~be96f85c04.js`), [], import.meta.url)),
  (K.portuguese = () =>
    C(() => import(`./chunk~9623731241.js`), [], import.meta.url)),
  (K.romanian = () =>
    C(() => import(`./chunk~aea2485f2f.js`), [], import.meta.url)),
  (K.russian = () =>
    C(() => import(`./chunk~229cf520cb.js`), [], import.meta.url)),
  (K.sc_schinese = () =>
    C(() => import(`./chunk~f3360eb1b0.js`), [], import.meta.url)),
  (K.schinese = () =>
    C(() => import(`./chunk~95fc239b12.js`), [], import.meta.url)),
  (K.spanish = () =>
    C(() => import(`./chunk~33841c653b.js`), [], import.meta.url)),
  (K.swedish = () =>
    C(() => import(`./chunk~89ccff5b84.js`), [], import.meta.url)),
  (K.tchinese = () =>
    C(() => import(`./chunk~6ff3439c0c.js`), [], import.meta.url)),
  (K.thai = () =>
    C(() => import(`./chunk~116fb5962a.js`), [], import.meta.url)),
  (K.turkish = () =>
    C(() => import(`./chunk~30207c52bc.js`), [], import.meta.url)),
  (K.ukrainian = () =>
    C(() => import(`./chunk~7ab9abd8ae.js`), [], import.meta.url)),
  (K.vietnamese = () =>
    C(() => import(`./chunk~58fcf52d61.js`), [], import.meta.url)));
async function ug(e) {
  if (K[e]) return await K[e]();
}
var dg = Li(ug),
  fg = new Map([
    [2022, ag],
    [2023, sg],
    [2024, lg],
    [2025, dg],
  ]);
function pg(e) {
  return fg.get(e);
}
function mg() {
  let e = Bn(L),
    t = Bn(ag),
    n = Bn(sg),
    r = Bn(lg),
    i = Bn(dg);
  return e && t && n && r && i;
}
var hg = new URL(
    `../../../images/applications/store/defaultappimage.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  gg = t({
    AddToWishlist: () => Hg,
    AnimateCap: () => __,
    Appear: () => r_,
    BackgroundImage: () => Lg,
    BackgroundImageFull: () => Fg,
    BadgeBarFiller: () => N_,
    BadgeBoxIntro: () => M_,
    BigNum: () => Gg,
    ButtonCtn: () => T_,
    ButtonIcon: () => E_,
    CapRow: () => h_,
    CapsuleCtn: () => n_,
    ChartStuff: () => Kg,
    ChartWidthHelper: () => Xg,
    ContentWrapper: () => w_,
    DemoPlayDetails: () => o_,
    Disabled: () => D_,
    ElementFadeIn: () => Ig,
    EvenGradient: () => Ng,
    FirstPlayCtn: () => i_,
    FullWidth: () => xg,
    GameChart: () => Jg,
    GameChartCtn: () => qg,
    GameChartFirstPlayed: () => Yg,
    GameContentCtn: () => Zg,
    GameCtn: () => Qg,
    GameDetailsPopup: () => S_,
    GameItemDetails: () => $g,
    GameLink: () => Vg,
    GameLinks: () => Bg,
    GamePlayDetails: () => e_,
    GameTitle: () => x_,
    GameWrapper: () => O_,
    GamepadUI: () => k_,
    GraphTitle: () => f_,
    HoursPlayed: () => yg,
    InfoContainer: () => zg,
    InfoContentSpacing: () => Rg,
    IntroLine: () => Ag,
    LoadingCtn: () => Eg,
    LongestStreak: () => g_,
    LongestStreakGamesWrapper: () => m_,
    MoreButtonContainer: () => A_,
    NumSubtitle: () => kg,
    OddGradient: () => Dg,
    PieCtn: () => d_,
    PlatformChartsCtn: () => c_,
    PlatformChartsRow: () => u_,
    PlatformDetailsSetup: () => p_,
    PlatformSpacing: () => l_,
    PlaytestPlayDetails: () => s_,
    SelectedInfoCtn: () => Pg,
    ShowMoreBtn: () => j_,
    SpecialFlags: () => a_,
    StandardInfoCtn: () => Og,
    StatContainer: () => Wg,
    StatsGroup: () => Mg,
    SteamDeckGameCapRow: () => t_,
    StreakCtn: () => v_,
    TimePlayed: () => y_,
    Title: () => jg,
    TitleLongName: () => Ug,
    TopGameBlockContainer: () => Tg,
    TopGameTitle: () => wg,
    TopGameTitleCtn: () => Cg,
    TopGamesContainer: () => Sg,
    TotalHoursContainer: () => vg,
    TotalHoursSubtitle: () => bg,
    UnavailableGame: () => b_,
    Visible: () => C_,
    default: () => P_,
    strGameDetailsTransitionTimeMS: () => _g,
  }),
  _g = `300ms`,
  vg = `wIYiBzezGYc-`,
  yg = `VnoH-uQh03Y-`,
  bg = `-NNdNMK5dTk-`,
  xg = `nFWRruBwpxI-`,
  Sg = `JM6qKRW4grY-`,
  Cg = `_4RT2F1qWDf0-`,
  wg = `mNRC0alPlMM-`,
  Tg = `ZUs2MlmX1nw-`,
  Eg = `xsI-Ph4IYTU-`,
  Dg = `EunXAzl3zkY-`,
  Og = `orlaFahxAKc-`,
  kg = `ao7jCFf5gSI-`,
  Ag = `GfwKvHYeK18-`,
  jg = `Y3O3VXtp-D8-`,
  Mg = `XGhwjejL9wI-`,
  Ng = `_9nzY-F9xpiE-`,
  Pg = `_3-uTrEiiMzE-`,
  Fg = `Qh0Qui4WgT0-`,
  Ig = `itZDEq-F1CU-`,
  Lg = `QSp4obZnVo0-`,
  Rg = `_3o5wxwNyWus-`,
  zg = `idhrMs53sfk-`,
  Bg = `ulgSRWu9qlw-`,
  Vg = `_3zY6l-RwMbM-`,
  Hg = `mlF-EqS-dRc-`,
  Ug = `FKqdvD3uF8E-`,
  Wg = `XEHQVJnV1Do-`,
  Gg = `Jsbe84OZILs-`,
  Kg = `QJCEe-O2tKI-`,
  qg = `v6AigbmQ0CY-`,
  Jg = `xPrgBVyuYEE-`,
  Yg = `_1X4tYa2ADHY-`,
  Xg = `AJaOL928lBE-`,
  Zg = `YDlYx-AV0BQ-`,
  Qg = `WWkwetmW1kk-`,
  $g = `w-Y5hex-hO4-`,
  e_ = `v6qwr186rUA-`,
  t_ = `AdwjekHqa-w-`,
  n_ = `I9igJfhUSos-`,
  r_ = `_4mSZbBPxm6s-`,
  i_ = `SjRQa1Q12OA-`,
  a_ = `onO-DMSltE0-`,
  o_ = `qEnvz1uXbQU-`,
  s_ = `pvLpzVIEyJQ-`,
  c_ = `FrX7CkXY94E-`,
  l_ = `MAfKrCX7pZU-`,
  u_ = `_8yz-q4EfKbc-`,
  d_ = `finR-g0jShM-`,
  f_ = `zt5AycfIbtY-`,
  p_ = `_2fuIOljIHpg-`,
  m_ = `hvOxlXCSt2s-`,
  h_ = `X6gvHabLLJk-`,
  g_ = `mcYlyLIeBhs-`,
  __ = `c42w8bI3Dx0-`,
  v_ = `yVvCXO9ZLwg-`,
  y_ = `x6rpHBjxzTg-`,
  b_ = `_--0ITpMloRU-`,
  x_ = `h9g2oo0APag-`,
  S_ = `_9tm73MPUptI-`,
  C_ = `eAjysxH-TgY-`,
  w_ = `eFHWwCj3bVQ-`,
  T_ = `p6eqlCr2YT0-`,
  E_ = `mzZt1E4LKBc-`,
  D_ = `sNJz4ri3Yvk-`,
  O_ = `_2y76lTJ5USE-`,
  k_ = `maE92CVTDsk-`,
  A_ = `z4JPVbkRELk-`,
  j_ = `dUBouRPf5BM-`,
  M_ = `i798-6QCweY-`,
  N_ = `_6FvqHneqGds-`,
  P_ = {
    strGameDetailsTransitionTimeMS: _g,
    TotalHoursContainer: vg,
    HoursPlayed: yg,
    TotalHoursSubtitle: bg,
    FullWidth: xg,
    TopGamesContainer: Sg,
    TopGameTitleCtn: Cg,
    TopGameTitle: wg,
    TopGameBlockContainer: Tg,
    LoadingCtn: Eg,
    OddGradient: Dg,
    StandardInfoCtn: Og,
    NumSubtitle: kg,
    IntroLine: Ag,
    Title: jg,
    StatsGroup: Mg,
    EvenGradient: Ng,
    SelectedInfoCtn: Pg,
    BackgroundImageFull: Fg,
    ElementFadeIn: Ig,
    BackgroundImage: Lg,
    InfoContentSpacing: Rg,
    InfoContainer: zg,
    GameLinks: Bg,
    GameLink: Vg,
    AddToWishlist: Hg,
    TitleLongName: Ug,
    StatContainer: Wg,
    BigNum: Gg,
    ChartStuff: Kg,
    GameChartCtn: qg,
    GameChart: Jg,
    GameChartFirstPlayed: Yg,
    ChartWidthHelper: Xg,
    GameContentCtn: Zg,
    GameCtn: Qg,
    GameItemDetails: $g,
    GamePlayDetails: e_,
    SteamDeckGameCapRow: t_,
    CapsuleCtn: n_,
    Appear: r_,
    FirstPlayCtn: i_,
    SpecialFlags: a_,
    DemoPlayDetails: o_,
    PlaytestPlayDetails: s_,
    PlatformChartsCtn: c_,
    PlatformSpacing: l_,
    PlatformChartsRow: u_,
    PieCtn: d_,
    GraphTitle: f_,
    PlatformDetailsSetup: p_,
    LongestStreakGamesWrapper: m_,
    CapRow: h_,
    LongestStreak: g_,
    AnimateCap: __,
    StreakCtn: v_,
    TimePlayed: y_,
    UnavailableGame: b_,
    GameTitle: x_,
    GameDetailsPopup: S_,
    Visible: C_,
    ContentWrapper: w_,
    ButtonCtn: T_,
    ButtonIcon: E_,
    Disabled: D_,
    GameWrapper: O_,
    GamepadUI: k_,
    MoreButtonContainer: A_,
    ShowMoreBtn: j_,
    BadgeBoxIntro: M_,
    BadgeBarFiller: N_,
  },
  F_ = R.createContext({
    bIsUser: !1,
    persona_name: ``,
    avatar_url: ``,
    themeStyle: {},
  });
function I_() {
  return (0, R.useContext)(F_).bIsUser;
}
function q() {
  return (0, R.useContext)(F_).themeStyle;
}
function L_(e) {
  let t = M.logged_in,
    n = e?.content_descriptorids ?? [],
    r = I_(),
    i = p(),
    { data: a } = Fs(),
    o = a ?? xo(i),
    s =
      !!e &&
      (n.some((e) => o.setExcludedContentDescriptors.has(e)) ||
        (!!e.appid && o.mapIgnoredApps.has(e.appid)));
  return t ? !r && s : n.length > 0;
}
function R_() {
  return (0, R.useContext)(F_).persona_name;
}
function J() {
  let { persona_name: e, bIsUser: t } = (0, R.useContext)(F_);
  return R.useCallback((n, ...r) => lu(L, n, t, e, ...r) ?? n, [t, e]);
}
function z_() {
  let { persona_name: e, bIsUser: t } = (0, R.useContext)(F_);
  return R.useCallback(
    (n, r, ...i) => {
      let a = pg(n);
      return a && lu(a, r, t, e, ...i);
    },
    [t, e],
  );
}
function Y(e) {
  return e < 100
    ? L.Localize(`#YIR_Percent_Low`, `1`)
    : L.Localize(`#YIR_Percent`, Math.round(e / 100).toFixed(0));
}
function B_() {
  return !0;
}
function V_() {
  let e = B_(),
    t = Ps();
  return R.useCallback(
    (n) =>
      Ka(n, { weekday: `short`, year: e ? void 0 : `numeric`, timeZone: t }),
    [e, t],
  );
}
var H_ = { index: void 0, appids: [] },
  U_ = R.createContext(H_),
  W_ = R.createContext(() => {});
function G_(e) {
  let [t, n] = R.useState(H_);
  return (0, H.jsx)(W_.Provider, {
    value: n,
    children: (0, H.jsx)(U_.Provider, { value: t, children: e.children }),
  });
}
function K_(e) {
  return typeof e.index == `number` && e.appids.length > e.index
    ? e.appids[e.index]
    : null;
}
function q_() {
  let e = R.useContext(U_);
  return { unAppID: K_(e), length: e.appids.length, index: e.index };
}
function J_() {
  let e = R.useContext(W_);
  return R.useCallback((t, n) => e({ index: t, appids: n }), [e]);
}
function Y_(e, t) {
  let n = J_();
  return R.useCallback(() => n(e, t), [n, e, t]);
}
function X_(e) {
  let t = R.useContext(W_);
  return R.useCallback(() => {
    t((t) => (e >= 0 && e < t.appids.length ? { ...t, index: e } : t));
  }, [t, e]);
}
function Z_() {
  let e = R.useContext(W_);
  return R.useCallback(
    (t) => {
      e((e) => (K_(e) == t ? H_ : e));
    },
    [e],
  );
}
var Q_ = t({
    Achievements: () => Uv,
    AllFirstPlayedCtn: () => fy,
    AllPlayedContentCtn: () => dy,
    AllPlayedCtn: () => uy,
    Answer: () => Ty,
    Appear: () => fv,
    ArrowDownCtn: () => iy,
    ArrowUpCtn: () => ry,
    AvatarName: () => sv,
    BackgroundImage: () => wv,
    BackgroundImageCover: () => Hv,
    BadgeBarFiller: () => ky,
    BadgeBoxIntro: () => Oy,
    Big: () => Kv,
    BigNum: () => Dv,
    BottomCtn: () => Ey,
    CompareArrow: () => ty,
    CompareCtn: () => ey,
    CompareText: () => ny,
    ConclusionCtn: () => by,
    ContentCtn: () => Nv,
    ControllerPortion: () => Iv,
    DevToggle: () => py,
    DeviceBlock: () => kv,
    DeviceSummary: () => ay,
    ElementFadeIn: () => Dy,
    ErrorMsg: () => vy,
    FAQSection: () => Sy,
    Game0: () => bv,
    Game1: () => xv,
    Game2: () => Sv,
    GenericBackground: () => gy,
    GraphRelatedCtn: () => sy,
    GridItem: () => yv,
    HardwareBlock: () => Ov,
    HardwareStats: () => oy,
    HardwareSummary: () => Mv,
    HeaderCtn: () => av,
    HeaderShareCtn: () => yy,
    InlineUserName: () => uv,
    KeyboardPortion: () => Pv,
    Large: () => Rv,
    LogInCtn: () => hy,
    LoginButtonCtn: () => _y,
    LongestStreakStat: () => Yv,
    MissingUserCtn: () => my,
    OverviewBlock: () => Cv,
    Question: () => wy,
    QuestionCtn: () => Cy,
    Questions: () => xy,
    RewindHeader: () => ov,
    SectionSubTitle: () => pv,
    SectionTitle: () => dv,
    SixNumbers: () => Qv,
    Small: () => Lv,
    SmallLightText: () => $v,
    SmallText: () => Xv,
    Stat: () => Fv,
    StatBox: () => qv,
    StreakBlock: () => Tv,
    SubSummaryCtn: () => Jv,
    Subtitle: () => zv,
    SubtleBorder: () => jv,
    SummaryArea: () => mv,
    SummaryBlockExtrasCtn: () => Vv,
    SummaryBlockGameName: () => Bv,
    SummaryBlockHugeNumCtn: () => Ev,
    SummaryBlockTitle: () => Wv,
    SummaryCtn: () => Av,
    SummaryCtnShadow: () => gv,
    SummaryGridCtn: () => hv,
    SummaryGridSparse: () => vv,
    SummaryGridStandard: () => _v,
    Tab: () => iv,
    TabBar: () => rv,
    TabCtn: () => nv,
    ThreeNumbers: () => Zv,
    TimeRelatedCtn: () => cy,
    TopAreaSizer: () => ev,
    TopHonorsContent: () => tv,
    TopHonorsSection: () => ly,
    UserAvatar: () => cv,
    UserName: () => lv,
    YearInReviewContainer: () => $_,
    YearInReviewContent: () => X,
    YearSubtitle: () => Gv,
    default: () => Ay,
  }),
  $_ = `KoPRGmgJJqo-`,
  X = `hJYEynQkmdU-`,
  ev = `wbSwZ4ddIBM-`,
  tv = `_06vjX6-LZ3o-`,
  nv = `rb53CfOiFDE-`,
  rv = `vK7--H0SAkw-`,
  iv = `gMb-gEMJz-o-`,
  av = `ubb8Zl0avoo-`,
  ov = `f5HUQVPUdec-`,
  sv = `skidEiMf2PY-`,
  cv = `_6BJlyLcB6b0-`,
  lv = `EzNrIbLqFyI-`,
  uv = `D317B3qRUg4-`,
  dv = `jKX9urC1MxY-`,
  fv = `_4nPP92NisYg-`,
  pv = `bXtzee8AefM-`,
  mv = `zn9KZEp--BA-`,
  hv = `xJQGByL-21g-`,
  gv = `Ir5Sa8Wyk54-`,
  _v = `Du1AFzeoCqQ-`,
  vv = `DtJ29CA3-5w-`,
  yv = `gIuYhaWQ4fc-`,
  bv = `fKe87BWrvfQ-`,
  xv = `_-5OsCs7YPk8-`,
  Sv = `Zg95Ba7p3Qw-`,
  Cv = `_8Y3H4R2pQus-`,
  wv = `GAtCzNnRjO8-`,
  Tv = `dEuc93cpmYk-`,
  Ev = `nZ9-nfKNk0k-`,
  Dv = `ERwgqbs67Y0-`,
  Ov = `e6T89MsSCU4-`,
  kv = `PSZWXs0q2BA-`,
  Av = `ojW6P77M2CU-`,
  jv = `gq51gWeAGwg-`,
  Mv = `y29Eo6crp1Y-`,
  Nv = `lVezcGtu14c-`,
  Pv = `XrqoWcWOWto-`,
  Fv = `nuUlfFr-4go-`,
  Iv = `BJLPLEcobNA-`,
  Lv = `pM0nmAh-JmE-`,
  Rv = `czEXrqIBjoY-`,
  zv = `V22nqpPVUDE-`,
  Bv = `r7SaWklbiLk-`,
  Vv = `WQbJEJwrh6A-`,
  Hv = `yhKq8JqyhHU-`,
  Uv = `NFRRVbS6gNQ-`,
  Wv = `quOp3zDhs0Q-`,
  Gv = `WtmqBEWwXUU-`,
  Kv = `OiCGsb3ZVjo-`,
  qv = `-DExq33nuLc-`,
  Jv = `iO7bySBmLDQ-`,
  Yv = `rakWUwgngNs-`,
  Xv = `Ro3m9drEqnI-`,
  Zv = `L57SkFUBplo-`,
  Qv = `YLnkFjFOQOs-`,
  $v = `_0XQzOjcNRaw-`,
  ey = `kCKbop9CpRg-`,
  ty = `_9tAN2yCIirs-`,
  ny = `kK5H6hWa6D4-`,
  ry = `BEY87Y5nD4o-`,
  iy = `HaiVKIU8Khw-`,
  ay = `qg0kxFOh1tk-`,
  oy = `qK-bv0Ju3ZE-`,
  sy = `Tyh9FPCHRrc-`,
  cy = `xan-F7AKHTg-`,
  ly = `msW7t3zPawc-`,
  uy = `zWuJ9eO1deE-`,
  dy = `HguwBviDKIo-`,
  fy = `_2m4YMjqffsc-`,
  py = `GDQOIFoBCP4-`,
  my = `GM1A55ZEulI-`,
  hy = `jvwbuCbEfxI-`,
  gy = `tGzVeFXNEfc-`,
  _y = `CTJEahoyd2c-`,
  vy = `gHS2We-nxiI-`,
  yy = `-vTPvlHUL7g-`,
  by = `ofmH8EfaBy4-`,
  xy = `fGLzTigSNnY-`,
  Sy = `_6ALXCVcszOs-`,
  Cy = `X-87SlZ9MKU-`,
  wy = `_38wDSMap-gY-`,
  Ty = `bXJ94GBFl3U-`,
  Ey = `DALsnbbp3sE-`,
  Dy = `VgC9GOlWj28-`,
  Oy = `XJWfnQSYNt8-`,
  ky = `FlPXt8CIBlI-`,
  Ay = {
    YearInReviewContainer: $_,
    YearInReviewContent: X,
    TopAreaSizer: ev,
    TopHonorsContent: tv,
    TabCtn: nv,
    TabBar: rv,
    Tab: iv,
    HeaderCtn: av,
    RewindHeader: ov,
    AvatarName: sv,
    UserAvatar: cv,
    UserName: lv,
    InlineUserName: uv,
    SectionTitle: dv,
    Appear: fv,
    SectionSubTitle: pv,
    SummaryArea: mv,
    SummaryGridCtn: hv,
    SummaryCtnShadow: gv,
    SummaryGridStandard: _v,
    SummaryGridSparse: vv,
    GridItem: yv,
    Game0: bv,
    Game1: xv,
    Game2: Sv,
    OverviewBlock: Cv,
    BackgroundImage: wv,
    StreakBlock: Tv,
    SummaryBlockHugeNumCtn: Ev,
    BigNum: Dv,
    HardwareBlock: Ov,
    DeviceBlock: kv,
    SummaryCtn: Av,
    SubtleBorder: jv,
    HardwareSummary: Mv,
    ContentCtn: Nv,
    KeyboardPortion: Pv,
    Stat: Fv,
    ControllerPortion: Iv,
    Small: Lv,
    Large: Rv,
    Subtitle: zv,
    SummaryBlockGameName: Bv,
    SummaryBlockExtrasCtn: Vv,
    BackgroundImageCover: Hv,
    Achievements: Uv,
    SummaryBlockTitle: Wv,
    YearSubtitle: Gv,
    Big: Kv,
    StatBox: qv,
    SubSummaryCtn: Jv,
    LongestStreakStat: Yv,
    SmallText: Xv,
    ThreeNumbers: Zv,
    SixNumbers: Qv,
    SmallLightText: $v,
    CompareCtn: ey,
    CompareArrow: ty,
    CompareText: ny,
    ArrowUpCtn: ry,
    ArrowDownCtn: iy,
    DeviceSummary: ay,
    HardwareStats: oy,
    GraphRelatedCtn: sy,
    TimeRelatedCtn: cy,
    TopHonorsSection: ly,
    AllPlayedCtn: uy,
    AllPlayedContentCtn: dy,
    AllFirstPlayedCtn: fy,
    DevToggle: py,
    MissingUserCtn: my,
    LogInCtn: hy,
    GenericBackground: gy,
    LoginButtonCtn: _y,
    ErrorMsg: vy,
    HeaderShareCtn: yy,
    ConclusionCtn: by,
    Questions: xy,
    FAQSection: Sy,
    QuestionCtn: Cy,
    Question: wy,
    Answer: Ty,
    BottomCtn: Ey,
    ElementFadeIn: Dy,
    BadgeBoxIntro: Oy,
    BadgeBarFiller: ky,
  },
  jy = `C5cdndOEHt4-`,
  My = `-q0-kXkWN9U-`,
  Ny = `TB8Ftf6yNUE-`,
  Py = `EOEvelxRXZw-`,
  Fy = `vCsbBq7knm8-`,
  Iy = `_4hgWT24Sdeo-`,
  Ly = `_7yIZmyI8qQk-`,
  Ry = `omJUDnVgRY4-`,
  zy = `wqTsvDkdQRg-`,
  By = `HJLVd81kwnI-`,
  Vy = `TwAc8u5RE4g-`,
  Hy = `_2dQ-fNFsnAo-`,
  Uy = `nDPpMWikWgc-`,
  Wy = `_6qFV0psARg8-`,
  Gy = `Di5p4F2SHus-`,
  Ky = `p34Ga9p9kxA-`,
  qy = `_6dXzDQP9ksI-`,
  Jy = `_8-zKy--vwkI-`,
  Yy = `iKMpkIE2CyM-`,
  Xy = `S9H5nON1Nw0-`,
  Zy = `-c1ti2-skhU-`,
  Qy = `uvBrTjofppg-`,
  Z = {
    Section: jy,
    Windows: My,
    Linux: Ny,
    Controller: Py,
    Mac: Fy,
    Deck: Iy,
    CapRow: Ly,
    PlatformContentsCtn: Ry,
    VR: zy,
    SectionTitle: By,
    BackgroundImage: Vy,
    Playtest: Hy,
    BG_Playtest: Uy,
    Demo: Wy,
    BG_Demo: Gy,
    GameImage: Ky,
    SectionSubTitle: qy,
    ElementFadeIn: Jy,
    StatsRow: Yy,
    StatBlock: Xy,
    BigNum: Zy,
    StatDescription: Qy,
    DemoSash: `WwCfmup4R-o-`,
    BadgeBoxIntro: `XGtVJBBHDi4-`,
    BadgeBarFiller: `_-0RNm-50A-I-`,
    Appear: `_52VPPk07IBk-`,
  },
  Q = e(a(), 1);
function $(e) {
  let { className: t, children: n, strClassOnFirstVisible: r } = e,
    [i, a] = (0, R.useState)(!1);
  return (0, H.jsx)(ml, {
    trigger: `once`,
    onVisibilityChange: a,
    className: (0, Q.default)(t, i ? r || `NowVisible` : void 0),
    children: n,
  });
}
function $y(e) {
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
    } = (0, R.useMemo)(() => mh(l, t), [l, t]),
    { rgResults: p, nTotalResultCount: m } = (0, R.useMemo)(
      () => uh(n, t, 5, f),
      [n, t, f, 5],
    ),
    h = (0, R.useMemo)(() => p.map((e) => e.parent_appid || e.appid), [p]),
    [g, _] = (0, R.useState)(
      p.length > 0 ? p[0].parent_appid || p[0].appid : 0,
    ),
    { isLoading: v, data: ee } = ng(h, t == `vr`),
    y = eb(p, t, v, ee),
    te =
      t === `overall` || t === `controller` || t == `demo` || t == `playtest`;
  return (0, H.jsxs)(`div`, {
    className: (0, Q.default)(r, t, Ry),
    children: [
      (0, H.jsx)(`div`, { className: By, children: a }),
      !!i && (0, H.jsx)(`img`, { alt: ``, src: i, className: `TwAc8u5RE4g-` }),
      t === `vr` && g > 0 && (0, H.jsx)(tb, { appid: g }),
      (0, H.jsxs)(`div`, {
        className: (0, Q.default)(X, Yy),
        children: [
          (0, H.jsxs)(`div`, {
            className: Xy,
            children: [
              (0, H.jsx)(`div`, { className: Zy, children: F(u) }),
              (0, H.jsx)(`div`, {
                className: Qy,
                children: L.LocalizePlural(`#YIR_NewLine_Games`, u),
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Xy,
            children: [
              (0, H.jsx)(`div`, { className: Zy, children: F(d) }),
              (0, H.jsx)(`div`, {
                className: Qy,
                children: L.LocalizePlural(`#YIR_NewLine_Session`, d),
              }),
            ],
          }),
          !te && (0, H.jsx)(ab, { percentVal: f, subToken: `#YIR_NewLine` }),
        ],
      }),
      !!o && (0, H.jsx)(`div`, { className: `_6dXzDQP9ksI-`, children: o }),
      !o &&
        !!c &&
        m > 5 &&
        y > 0 &&
        (0, H.jsx)(`div`, {
          className: `_6dXzDQP9ksI-`,
          children: L.Localize(c, y),
        }),
      !!s && (0, H.jsx)(`div`, { className: void 0, children: s }),
      (0, H.jsx)($, {
        className: t_,
        children: (0, H.jsx)(nb, {
          rgGamePercentages: p,
          category: t,
          fnOnHoverApp: _,
        }),
      }),
    ],
  });
}
function eb(e, t, n, r) {
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
function tb(e) {
  let { appid: t } = e,
    { data: n } = _n({ appid: t }),
    r = gi();
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
  return (0, H.jsx)(`img`, {
    alt: ``,
    src: Jr(a),
    className: (0, Q.default)({ [Ky]: !0, [void 0]: o }),
  });
}
function nb(e) {
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
  return (0, H.jsx)(w, {
    "flow-children": `grid`,
    className: (0, Q.default)(X, Ly, h_),
    children: t.map((e, t) =>
      (0, H.jsx)(
        rb,
        {
          appid: e.appid,
          strInfo: e.nPercentagex100 === void 0 ? void 0 : Y(e.nPercentagex100),
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
function rb(e) {
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
    { item: l, bLoading: u } = tg(c == null ? t : s),
    d = Y_(i, r);
  if (u) return null;
  if (!l || !l.info.visible)
    return s && (c == 1 || c == 12)
      ? (0, H.jsx)(rb, { ...e, nParentAppID: s, eChildType: 0 })
      : null;
  let f = ar(l.assets, `library_capsule`);
  return (0, H.jsxs)(`a`, {
    className: n_,
    onClick: d,
    onMouseEnter: o,
    children: [
      f
        ? (0, H.jsxs)(H.Fragment, {
            children: [
              (0, H.jsxs)(`div`, {
                className: a_,
                children: [
                  s &&
                    c == 1 &&
                    (0, H.jsx)(`div`, {
                      className: `qEnvz1uXbQU-`,
                      children: L.Localize(`#YIR_Played_Demo`),
                    }),
                  s &&
                    c == 12 &&
                    (0, H.jsx)(`div`, {
                      className: `pvLpzVIEyJQ-`,
                      children: L.Localize(`#YIR_Played_PlayTest`),
                    }),
                ],
              }),
              (0, H.jsx)(`img`, { loading: a, src: f, alt: l.info.name }),
            ],
          })
        : (0, H.jsx)(ib, { item: l.info }),
      !!n && (0, H.jsx)(`div`, { className: `x6rpHBjxzTg-`, children: n }),
    ],
  });
}
function ib(e) {
  let { item: t } = e;
  return (0, H.jsxs)(`div`, {
    className: b_,
    children: [
      (0, H.jsx)(`img`, { src: hg, alt: t.name || `` + t.appid }),
      (0, H.jsx)(`div`, { className: x_, children: t.name }),
    ],
  });
}
function ab(e) {
  let { percentVal: t, subToken: n } = e,
    r = Y(t),
    i = `${n}_Percent`;
  return (0, H.jsxs)(`div`, {
    className: Xy,
    children: [
      (0, H.jsx)(`div`, { className: Zy, children: r }),
      (0, H.jsx)(`div`, { className: Qy, children: L.Localize(i) }),
    ],
  });
}
var ob = `_1zHgawHGZQ8-`,
  sb = `maZLLs320ng-`,
  cb = `FBNO-i1eCDU-`,
  lb = `lvInkGaT6tc-`,
  ub = `CdHUHmprZLc-`,
  db = `_0Di7EGWRhhg-`,
  fb = `xhff4YTQuUs-`,
  pb = `KxbX2VmSNpY-`;
function mb(e) {
  let { userYearInReview: t, nYear: n } = e,
    r = q(),
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
    { isLoading: a } = ng(i),
    o = J(),
    s = [
      {
        name: L.Localize(`#YIR_FirstTime_Tab_MonthlyGrid`),
        key: `firsttimebymonth`,
        contents: (0, H.jsx)(j, {
          children: (0, H.jsx)(`div`, {
            className: ob,
            children: (0, H.jsx)(vb, { userYearInReview: t, nYear: n }),
          }),
        }),
      },
      {
        name: L.Localize(`#YIR_FirstTime_Tab_Grid`),
        key: `firsttimegrid`,
        contents: (0, H.jsx)(j, {
          children: (0, H.jsx)(_b, { userYearInReview: t, nYear: n }),
        }),
      },
    ];
  return i.length == 0
    ? null
    : (0, H.jsxs)($, {
        className: fy,
        children: [
          (0, H.jsx)(`div`, {
            className: (0, Q.default)(db, r.AllGamesBGImage),
          }),
          (0, H.jsxs)(`div`, {
            className: X,
            children: [
              (0, H.jsx)(`div`, {
                className: dv,
                children: o(`#YIR_FirstTime_Title`, i.length),
              }),
              a
                ? (0, H.jsx)(nn, {
                    size: `medium`,
                    position: `center`,
                    string: Dr.Localize(`#Loading`),
                  })
                : (0, H.jsx)(`div`, {
                    className: nv,
                    children: (0, H.jsx)(hb, {
                      className: rv,
                      classNameTab: (0, Q.default)(iv, r.Tab),
                      tabs: s,
                    }),
                  }),
            ],
          }),
        ],
      });
}
function hb(e) {
  let { className: t, classNameTab: n, tabs: r } = e,
    [i, a] = (0, R.useState)(r[0]?.key);
  if (!r.length) return null;
  let o = r.find(({ key: e }) => e === i) ?? r[0];
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(w, {
        className: (0, Q.default)(fb, t),
        navEntryPreferPosition: Kn.FIRST,
        children: r.map((e) =>
          (0, H.jsx)(
            gb,
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
      (0, H.jsx)(w, { children: o.contents }),
    ],
  });
}
function gb(e) {
  let { className: t, active: n, onActivate: r, children: i } = e;
  return (0, H.jsx)(w, {
    className: (0, Q.default)(pb, n && `_2Nz6-T0g-zc-`, n && `ActiveTab`, t),
    onActivate: r,
    children: i,
  });
}
function _b(e) {
  let { nYear: t, userYearInReview: n } = e,
    r = n.GetPlayTimeStats().game_summary,
    i = J(),
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
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(bb, {
        nYear: t,
        rgGamesInOrderOfPlaytime: c,
        strTooltip: i(`#YIR_FirstTime_Percentages`),
      }),
      s &&
        (0, H.jsx)(`div`, {
          className: `z4JPVbkRELk-`,
          children: (0, H.jsx)(`button`, {
            type: `button`,
            className: `dUBouRPf5BM-`,
            onClick: () => o(!0),
            children: L.Localize(`#YIR_ShowMore`),
          }),
        }),
    ],
  });
}
function vb(e) {
  let { nYear: t, userYearInReview: n } = e,
    r = n.GetRawStats().playtime_stats.months;
  return (0, H.jsx)(H.Fragment, {
    children: r
      .filter((e) => e.stats.total_sessions > 0)
      .map((e) =>
        (0, H.jsx)(
          yb,
          { month: e, userYearInReview: n, nYear: t },
          `outermonth` + e.rtime_month,
        ),
      ),
  });
}
function yb(e) {
  let { nYear: t, userYearInReview: n, month: r } = e,
    i = B_(),
    a = J(),
    [o, s] = R.useState(!1),
    { bShouldShowMore: c, rgGameStats: l } = (0, R.useMemo)(() => {
      let e = r.game_summary
          .filter((e) => {
            let t = n.GetGameSummaryForApp(e.appid);
            return (
              Ms(
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
  return (0, H.jsxs)(
    `div`,
    {
      className: sb,
      children: [
        (0, H.jsx)(`div`, {
          className: lb,
          children: i
            ? L.Localize(
                `#YIR_MonthlyGrid_MonthSingular_${u.getUTCMonth() + 1}`,
              )
            : Ec(u),
        }),
        (0, H.jsx)(bb, {
          rgGamesInOrderOfPlaytime: l,
          nYear: t,
          strTooltip: a(`#YIR_FirstTime_MonthlyPercentages`),
        }),
        c &&
          (0, H.jsx)(`div`, {
            className: `z4JPVbkRELk-`,
            children: (0, H.jsx)(`button`, {
              type: `button`,
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
function bb(e) {
  let { nYear: t, rgGamesInOrderOfPlaytime: n, strTooltip: r } = e,
    i = J_(),
    { data: a } = ng(
      (0, R.useMemo)(() => n.map((e) => e.nParentAppID || e.appid), [n]),
    ),
    o = n.filter((e) => a?.has(e.nParentAppID || e.appid)),
    s = o.map((e) => e.appid),
    c = o.map((e, n) =>
      (0, H.jsx)(
        xb,
        {
          appid: e.nParentAppID || e.appid,
          bNewThisYear: e.bNewThisYear,
          fnOnClick: () => i(n, s),
          nYear: t,
          strPercentage:
            e.nPercentagex100 === void 0 ? void 0 : Y(e.nPercentagex100),
          strTooltip: r,
          bIsDemo: e.bIsDemo,
          bIsPlayTest: e.bIsPlaytest,
        },
        e.appid,
      ),
    );
  return (0, H.jsx)(w, {
    "flow-children": `grid`,
    className: (0, Q.default)(i_, cb),
    children: c,
  });
}
function xb(e) {
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
    { item: l } = tg(n),
    u = ds(l && Qt(l.info)) || ``,
    d = q();
  if (!l || !l.info.visible) return null;
  let f = ar(l.assets, `library_capsule`);
  return (0, H.jsx)(`div`, {
    className: (0, Q.default)({ [Qg]: !0, [ub]: !0, [void 0]: r }),
    onClick: (e) => {
      i && (e.preventDefault(), i());
    },
    children: (0, H.jsx)(Zt, {
      appid: n,
      children: (0, H.jsxs)(`a`, {
        href: i ? void 0 : u,
        className: n_,
        children: [
          (!!r || !!s || !!c) &&
            (0, H.jsxs)(`div`, {
              className: `onO-DMSltE0-`,
              children: [
                !!r &&
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(
                      `v6qwr186rUA-`,
                      d.GamePlayDetails,
                    ),
                    children: L.Localize(`#YIR_FirstTime_Played`, t),
                  }),
                !!s &&
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(
                      `qEnvz1uXbQU-`,
                      d.DemoPlayDetails,
                    ),
                    children: L.Localize(`#YIR_Played_Demo`),
                  }),
                !!c &&
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(
                      `pvLpzVIEyJQ-`,
                      d.PlaytestPlayDetails,
                    ),
                    children: L.Localize(`#YIR_Played_PlayTest`),
                  }),
              ],
            }),
          f
            ? (0, H.jsx)(`img`, { alt: ``, loading: `lazy`, src: f })
            : (0, H.jsx)(ib, { item: l.info }),
          !!a &&
            (0, H.jsx)(Ma, {
              toolTipContent: o,
              className: `x6rpHBjxzTg-`,
              children: a,
            }),
        ],
      }),
    }),
  });
}
var Sb = `-mIgF6AA5LY-`,
  Cb = `_6-qe6OwxbGw-`,
  wb = `Vi83-LkMtoI-`,
  Tb = `YXohyZxdvfQ-`,
  Eb = `-XC-c1uz0Ko-`,
  Db = `zZFozEpTZI0-`,
  Ob = `xUqkAY4Oj3o-`,
  kb = `rwGMj4tdqJs-`,
  Ab = `j0W76427BJs-`,
  jb = `-F6YVRDK5LU-`,
  Mb = `Y--QEtA1ZRM-`,
  Nb = `vhVXp-NJd5Y-`,
  Pb = `yqFgGpjFdcE-`,
  Fb = `-ZlfMJZNVtw-`,
  Ib = `F6KTgf9lssw-`,
  Lb = 9e3,
  Rb = 1,
  zb = 50;
function Bb(e) {
  let t = e
    .GetPlayTimeStats()
    .games.map((t) => e.GetGameSummaryForApp(t.appid))
    .filter((e) => e && (e.parent_appid || (!e.demo && !e.playtest)));
  if (t.length == 0) return { eType: `basic` };
  let n = t[0].total_playtime_percentagex100 ?? 0;
  return e.GetPlayTimeStats().game_summary.length < Rb || n >= Lb
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
              .slice(0, zb)
              .map((e) => e.parent_appid || e.appid),
          ),
        ),
      };
}
var Vb = `ugL-G4FTy2w-`,
  Hb = `c8-WfKGtCq8-`,
  Ub = `OsIwsZtSRZQ-`,
  Wb = `_1RZIc4-Ydv8-`,
  Gb = `_4Q73gvvwSoU-`,
  Kb = `_6LO5BaihEDc-`,
  qb = `bV66XEiP5a8-`;
function Jb(e) {
  let {
    children: t,
    className: n,
    squareClassName: r,
    gridClassName: i,
    bEvenTiles: a,
    bFadeInTiles: o,
    bDrift: s,
  } = e;
  return (0, H.jsx)(`div`, {
    className: Si(Vb, n),
    children: (0, H.jsx)(`div`, {
      className: Si(Hb, !o && `dXaS0YLAPWg-`),
      children: (0, H.jsx)(`div`, {
        className: Si(Ub, s && `dKtBrMD331I-`, r),
        children: (0, H.jsx)(`div`, {
          className: Si({ [Wb]: !0, [Kb]: !a, [qb]: o }, i),
          children: t,
        }),
      }),
    }),
  });
}
function Yb(e) {
  return (0, H.jsx)(`img`, {
    className: Si(Gb, e.className),
    src: e.strImageURL,
    alt: ``,
  });
}
function Xb(e) {
  let { userYearInReview: t, children: n } = e,
    r = (0, R.useMemo)(() => Bb(t), [t]);
  return r.eType == `basic`
    ? (0, H.jsx)(ex, { children: n })
    : r.eType == `single`
      ? (0, H.jsx)($b, { appid: r.appid, children: n })
      : (0, H.jsx)(Zb, { rgAppIDs: r.rgAppIDs, children: n });
}
function Zb(e) {
  let { rgAppIDs: t, children: n } = e,
    r = q(),
    { data: i } = ng(t),
    { rgStoreItems: a, rgImageURLs: o } = (0, R.useMemo)(() => {
      if (!i) return { rgStoreItems: null, rgImageURLs: null };
      let e = t.map((e) => i.get(e)).filter((e) => !!e && !!e.assets);
      return { rgStoreItems: e, rgImageURLs: Qb(e) };
    }, [t, i]);
  return a
    ? (0, H.jsxs)(H.Fragment, {
        children: [
          (0, H.jsx)(`div`, { className: (0, Q.default)(Sb, r.ImagesCtn) }),
          (0, H.jsx)(Jb, {
            className: Cb,
            squareClassName: wb,
            gridClassName: (0, Q.default)({
              [Tb]: !0,
              [Ob]: a.length <= 10,
              [Db]: a.length <= 20,
              [Eb]: a.length <= 40,
            }),
            bFadeInTiles: !0,
            bDrift: !0,
            children: o.map((e, t) =>
              (0, H.jsx)(Yb, { strImageURL: e, className: kb }, t),
            ),
          }),
          (0, H.jsxs)(`div`, {
            className: Ab,
            children: [
              (0, H.jsx)(`div`, {
                className: (0, Q.default)(jb, Mb, r.ImagesCtn),
              }),
              (0, H.jsx)(`div`, {
                className: (0, Q.default)(jb, Nb, r.ImagesCtn),
              }),
              (0, H.jsx)(`div`, {
                className: (0, Q.default)(jb, Pb, r.ImagesCtn),
              }),
            ],
          }),
          n,
        ],
      })
    : (0, H.jsx)(ex, { children: n });
}
function Qb(e) {
  let t = (e) => (
      Ms(e.assets, `Cannot get image without assets`),
      ar(e.assets, `library_hero`, `main_capsule`)
    ),
    n = (e) => (
      Ms(e.assets, `Cannot get image without assets`),
      ar(e.assets, `raw_page_background`, `main_capsule`)
    ),
    r = e.map(t);
  return (
    e.length <= 50 && r.push(...e.map(n)),
    e.length <= 20 && r.push(...e.map(t)),
    r
  );
}
function $b(e) {
  let { appid: t, children: n } = e,
    { item: r } = tg(t),
    i = q();
  return r
    ? (0, H.jsxs)(H.Fragment, {
        children: [
          (0, H.jsx)(`div`, {
            className: (0, Q.default)(Sb, i.ImagesCtn),
            children: (0, H.jsx)(`div`, {
              className: (0, Q.default)(Fb, i.SingleGame),
              children: (0, H.jsx)(`div`, {
                className: (0, Q.default)(Ib, i.ImageTint),
                children: (0, H.jsx)(`img`, {
                  alt: ``,
                  src: ar(r.assets, `library_hero`),
                }),
              }),
            }),
          }),
          n,
        ],
      })
    : (0, H.jsx)(ex, { children: n });
}
function ex(e) {
  return (0, H.jsx)(`div`, { className: void 0, children: e.children });
}
var tx = t({
    Active: () => uS,
    Appear: () => $x,
    BadgeBarFiller: () => vx,
    BadgeBox: () => rx,
    BadgeBoxIntro: () => ix,
    BadgeContents: () => ax,
    BadgeDesc: () => Sx,
    BadgeGetBtn: () => Cx,
    BadgeImgCtn: () => xx,
    BadgeName: () => bx,
    BadgeRarity_common: () => ox,
    BadgeRarity_epic: () => ux,
    BadgeRarity_legendary: () => dx,
    BadgeRarity_rare: () => lx,
    BadgeRarity_uncommon: () => cx,
    DataBox: () => mS,
    DataBoxArrow: () => _S,
    DataBoxesContainer: () => fS,
    Disabled: () => Lx,
    ElementFadeIn: () => yS,
    FillerBar: () => gx,
    FillerDots: () => Ix,
    FlavorLabel: () => pS,
    GameNewnessComparisonContainer: () => oS,
    GameNewnessDataCnt: () => sS,
    GameNewnessTitle: () => vS,
    Glitter: () => Wx,
    GlitterBox: () => Hx,
    GlitterSecond: () => Ux,
    GraphBox: () => Dx,
    HalfwidthColumn: () => Tx,
    NumbersLabel: () => Px,
    NumbersRow: () => Nx,
    NumbersRowsCnt: () => Mx,
    NumbersValue: () => Fx,
    PercentageDescriptionLabel: () => gS,
    PercentageLabel: () => hS,
    PlayBehaviorContainer: () => Bx,
    PlayBehaviorSectionSubTitle: () => qx,
    PlayNewnessContainer: () => aS,
    PlayerBehaviorProgressCnt: () => Jx,
    ProgressBar: () => rS,
    ProgressBarFilled: () => Vx,
    ProgressBarWrapper: () => Yx,
    ProgressIcon: () => eS,
    ProgressIconSVG: () => tS,
    ProgressLabel: () => iS,
    ProgressLabelsCnt: () => Xx,
    ProgressRightSide: () => nS,
    ProgressSteamAvgLabel: () => Zx,
    RadarChartLegend: () => jx,
    RadarText: () => Ox,
    RadarTextContainer: () => kx,
    RarityBar: () => mx,
    RarityBarSegment: () => hx,
    RarityDesc: () => yx,
    RarityInfoCtn: () => px,
    RarityText: () => sx,
    RightCol: () => fx,
    RightSideContainer: () => dS,
    SectionDesc: () => zx,
    SectionLabel: () => Rx,
    SegmentCap: () => _x,
    SpiderAndNumbersCnt: () => wx,
    SpiderResponsiveContainer: () => Ax,
    SpidergraphContainer: () => Ex,
    TopHonorsCtn: () => nx,
    WheelArc: () => lS,
    WheelChart: () => cS,
    default: () => bS,
    glitterMove: () => Gx,
    glitterMove2: () => Kx,
    progressBar: () => Qx,
  }),
  nx = `_8MMZZOMlBHA-`,
  rx = `kjlSrD84bUs-`,
  ix = `CnBmGiFtNT0-`,
  ax = `_2H6regBFr4A-`,
  ox = `xMSIrz8QNm4-`,
  sx = `IveJy5QZXYo-`,
  cx = `_571YhehUkx4-`,
  lx = `-nnBxrwGwuc-`,
  ux = `J6oM-PiOKAA-`,
  dx = `KSTPULVW5bQ-`,
  fx = `gUjbsGPoR4E-`,
  px = `x3GiOuwvZgI-`,
  mx = `_2z5eG5DUYNA-`,
  hx = `OcZxMthyO1Q-`,
  gx = `dogr49iCxO0-`,
  _x = `xIw4nr0zmDU-`,
  vx = `hrrpNs-t5os-`,
  yx = `d2u0-poYQ6Q-`,
  bx = `RP9sAnKzwq4-`,
  xx = `YCkJBRdHX74-`,
  Sx = `wsZ4D5OBXxA-`,
  Cx = `VbvjmHdYZUs-`,
  wx = `PMUu6aR8bT0-`,
  Tx = `NTDxIz9hpZQ-`,
  Ex = `-LL-rRwXHvQ-`,
  Dx = `udPMl22PhSc-`,
  Ox = `URBSKU-uKts-`,
  kx = `p7VrPSl4acM-`,
  Ax = `xPpu-EhMrzM-`,
  jx = `e5EFq580oLg-`,
  Mx = `lkrsOd-pN7M-`,
  Nx = `gdGCZIz-fdM-`,
  Px = `_2AcQ3eLZpqQ-`,
  Fx = `aBL1S716KHI-`,
  Ix = `_9kf74DPWJHs-`,
  Lx = `MvmFmRp0gao-`,
  Rx = `qFjJzWZ5t6U-`,
  zx = `lBH0gHt22Fc-`,
  Bx = `EcABZ-m3zvk-`,
  Vx = `ntvLkao7PkE-`,
  Hx = `NJBuZKTDzAE-`,
  Ux = `n62MYB6VP4U-`,
  Wx = `FVHCXXtwkMc-`,
  Gx = `FZJGl5gD9TA-`,
  Kx = `_9WKfAIJ7GYg-`,
  qx = `_0jnwL-HxS8o-`,
  Jx = `r-PiY57GlY8-`,
  Yx = `E8dRIfC8z8U-`,
  Xx = `qffLKsSHu0M-`,
  Zx = `aKnZAgIhrq0-`,
  Qx = `MAhYpOkM9Zs-`,
  $x = `_4xkdBuilUW8-`,
  eS = `_1paAUH9-U80-`,
  tS = `QwRTqCa5RJI-`,
  nS = `_54a2wTltSQo-`,
  rS = `ACraqmlP6JQ-`,
  iS = `Em-W-2-scx4-`,
  aS = `_93HCZZaF-GQ-`,
  oS = `Lj6zc-CzUcI-`,
  sS = `PPF1V2vagl4-`,
  cS = `Os1d9o6QJ48-`,
  lS = `ncAmk-wH-LE-`,
  uS = `DXcvT92GGo8-`,
  dS = `AaHMu4lT7dk-`,
  fS = `xBfnjHBm-1E-`,
  pS = `mJeXM2yr-2Q-`,
  mS = `RRGyT0y5ixE-`,
  hS = `GKnUCAKm6-M-`,
  gS = `_3mHbUC3OZ1w-`,
  _S = `eeacvOJIz2s-`,
  vS = `TUUDCjzjuow-`,
  yS = `f5WBpNOlO1E-`,
  bS = {
    TopHonorsCtn: nx,
    BadgeBox: rx,
    BadgeBoxIntro: ix,
    BadgeContents: ax,
    BadgeRarity_common: ox,
    RarityText: sx,
    BadgeRarity_uncommon: cx,
    BadgeRarity_rare: lx,
    BadgeRarity_epic: ux,
    BadgeRarity_legendary: dx,
    RightCol: fx,
    RarityInfoCtn: px,
    RarityBar: mx,
    RarityBarSegment: hx,
    FillerBar: gx,
    SegmentCap: _x,
    BadgeBarFiller: vx,
    RarityDesc: yx,
    BadgeName: bx,
    BadgeImgCtn: xx,
    BadgeDesc: Sx,
    BadgeGetBtn: Cx,
    SpiderAndNumbersCnt: wx,
    HalfwidthColumn: Tx,
    SpidergraphContainer: Ex,
    GraphBox: Dx,
    RadarText: Ox,
    RadarTextContainer: kx,
    SpiderResponsiveContainer: Ax,
    RadarChartLegend: jx,
    NumbersRowsCnt: Mx,
    NumbersRow: Nx,
    NumbersLabel: Px,
    NumbersValue: Fx,
    FillerDots: Ix,
    Disabled: Lx,
    SectionLabel: Rx,
    SectionDesc: zx,
    PlayBehaviorContainer: Bx,
    ProgressBarFilled: Vx,
    GlitterBox: Hx,
    GlitterSecond: Ux,
    Glitter: Wx,
    glitterMove: Gx,
    glitterMove2: Kx,
    PlayBehaviorSectionSubTitle: qx,
    PlayerBehaviorProgressCnt: Jx,
    ProgressBarWrapper: Yx,
    ProgressLabelsCnt: Xx,
    ProgressSteamAvgLabel: Zx,
    progressBar: Qx,
    Appear: $x,
    ProgressIcon: eS,
    ProgressIconSVG: tS,
    ProgressRightSide: nS,
    ProgressBar: rS,
    ProgressLabel: iS,
    PlayNewnessContainer: aS,
    GameNewnessComparisonContainer: oS,
    GameNewnessDataCnt: sS,
    WheelChart: cS,
    WheelArc: lS,
    Active: uS,
    RightSideContainer: dS,
    DataBoxesContainer: fS,
    FlavorLabel: pS,
    DataBox: mS,
    PercentageLabel: hS,
    PercentageDescriptionLabel: gS,
    DataBoxArrow: _S,
    GameNewnessTitle: vS,
    ElementFadeIn: yS,
  },
  xS = ({
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
        ? (0, H.jsxs)(H.Fragment, { children: [`\xA0`, kl(u), `\xA0`] })
        : (0, H.jsx)(H.Fragment, { children: kl(u) })
    );
  };
function SS() {
  typeof qe == `function`
    ? qe({
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
SS();
var CS = () => {
    let e = q();
    return (0, H.jsxs)(`svg`, {
      className: (0, Q.default)(tS, void 0, e.IconStreak),
      x: `0px`,
      y: `0px`,
      width: `100px`,
      height: `100px`,
      viewBox: `0 0 220 256`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, H.jsx)(`path`, {
          d: `M62.8236 111.578C62.8236 118.539 57.1801 124.183 50.2186 124.183C43.257 124.183 37.6135 118.539 37.6135 111.578C37.6135 104.616 43.257 98.9728 50.2186 98.9728C57.1801 98.9728 62.8236 104.616 62.8236 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          d: `M104.84 111.578C104.84 118.539 99.197 124.183 92.2354 124.183C85.2738 124.183 79.6304 118.539 79.6304 111.578C79.6304 104.616 85.2738 98.9728 92.2354 98.9728C99.197 98.9728 104.84 104.616 104.84 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          d: `M146.857 111.578C146.857 118.539 141.214 124.183 134.252 124.183C127.29 124.183 121.647 118.539 121.647 111.578C121.647 104.616 127.29 98.9728 134.252 98.9728C141.214 98.9728 146.857 104.616 146.857 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          d: `M188.874 111.578C188.874 118.539 183.23 124.183 176.269 124.183C169.307 124.183 163.664 118.539 163.664 111.578C163.664 104.616 169.307 98.9728 176.269 98.9728C183.23 98.9728 188.874 104.616 188.874 111.578Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          d: `M62.8236 153.595C62.8236 160.556 57.1801 166.2 50.2186 166.2C43.257 166.2 37.6135 160.556 37.6135 153.595C37.6135 146.633 43.257 140.99 50.2186 140.99C57.1801 140.99 62.8236 146.633 62.8236 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          d: `M104.84 153.595C104.84 160.556 99.197 166.2 92.2354 166.2C85.2738 166.2 79.6304 160.556 79.6304 153.595C79.6304 146.633 85.2738 140.99 92.2354 140.99C99.197 140.99 104.84 146.633 104.84 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          d: `M146.857 153.595C146.857 160.556 141.214 166.2 134.252 166.2C127.29 166.2 121.647 160.556 121.647 153.595C121.647 146.633 127.29 140.99 134.252 140.99C141.214 140.99 146.857 146.633 146.857 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          d: `M188.874 153.595C188.874 160.556 183.23 166.2 176.269 166.2C169.307 166.2 163.664 160.556 163.664 153.595C163.664 146.633 169.307 140.99 176.269 140.99C183.23 140.99 188.874 146.633 188.874 153.595Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          d: `M62.8236 195.611C62.8236 202.573 57.1801 208.216 50.2186 208.216C43.257 208.216 37.6135 202.573 37.6135 195.611C37.6135 188.65 43.257 183.006 50.2186 183.006C57.1801 183.006 62.8236 188.65 62.8236 195.611Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          d: `M104.84 195.611C104.84 202.573 99.197 208.216 92.2354 208.216C85.2738 208.216 79.6304 202.573 79.6304 195.611C79.6304 188.65 85.2738 183.006 92.2354 183.006C99.197 183.006 104.84 188.65 104.84 195.611Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          d: `M146.857 195.611C146.857 202.573 141.214 208.216 134.252 208.216C127.29 208.216 121.647 202.573 121.647 195.611C121.647 188.65 127.29 183.006 134.252 183.006C141.214 183.006 146.857 188.65 146.857 195.611Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M216.696 196.876C218.637 198.84 218.617 202.006 216.653 203.947L197.527 222.839C194.78 225.552 190.355 225.529 187.636 222.787L177.266 212.324C175.322 210.363 175.336 207.197 177.297 205.253C179.258 203.309 182.424 203.323 184.368 205.284L192.63 213.62L209.625 196.832C211.59 194.892 214.755 194.911 216.696 196.876Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M169.538 8H156.974V44.6175L169.538 44.6175V8ZM156.974 0C152.556 0 148.974 3.58172 148.974 7.99999V12.8068H78.3153V8C78.3153 3.58172 74.7335 0 70.3153 0H57.7515C53.3332 0 49.7515 3.58172 49.7515 7.99999V12.8068H12C5.37258 12.8068 0 18.1794 0 24.8068V108.777C0 110.986 1.79086 112.777 4 112.777C6.20914 112.777 8 110.986 8 108.777V77.7627H162.73C164.939 77.7627 166.73 75.9718 166.73 73.7627C166.73 71.5536 164.939 69.7627 162.73 69.7627H8V24.8068C8 22.5976 9.79086 20.8068 12 20.8068H49.7515V44.6175C49.7515 49.0358 53.3332 52.6175 57.7515 52.6175H70.3153C74.7335 52.6175 78.3153 49.0358 78.3153 44.6175V20.8068H148.974V44.6175C148.974 49.0358 152.556 52.6175 156.974 52.6175H169.538C173.956 52.6175 177.538 49.0358 177.538 44.6175V20.8068H214.487C216.696 20.8068 218.487 22.5976 218.487 24.8068V69.7627H181.404C179.195 69.7627 177.404 71.5536 177.404 73.7627C177.404 75.9718 179.195 77.7627 181.404 77.7627H218.487V174.637C212.078 170.481 204.434 168.067 196.227 168.067C173.602 168.067 155.26 186.408 155.26 209.034C155.26 216.458 157.235 223.421 160.689 229.426H12C9.79086 229.426 8 227.636 8 225.426V127.918C8 125.709 6.20914 123.918 4 123.918C1.79086 123.918 0 125.709 0 127.918V225.426C0 232.054 5.37256 237.426 12 237.426H166.695C174.149 245.177 184.625 250 196.227 250C218.852 250 237.193 231.659 237.193 209.034C237.193 198.394 233.137 188.702 226.487 181.419V24.8068C226.487 18.1794 221.115 12.8068 214.487 12.8068H177.538V8C177.538 3.58172 173.956 0 169.538 0H156.974ZM229.193 209.034C229.193 227.24 214.434 242 196.227 242C178.02 242 163.26 227.24 163.26 209.034C163.26 190.827 178.02 176.067 196.227 176.067C214.434 176.067 229.193 190.827 229.193 209.034ZM57.7515 8H70.3153V44.6175L57.7515 44.6175V8Z`,
          fill: `#E5E5E5`,
        }),
      ],
    });
  },
  wS = () => {
    let e = q();
    return (0, H.jsxs)(`svg`, {
      className: (0, Q.default)(tS, void 0, e.IconGamesPlayed),
      x: `0px`,
      y: `0px`,
      width: `100px`,
      height: `100px`,
      viewBox: `0 0 215 215`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, H.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M37.6146 37.7144C-0.630497 75.9444 -0.631195 137.928 37.6151 176.159C66.7056 205.238 109.551 212.205 145.234 197.037C147.268 196.173 149.617 197.12 150.481 199.153C151.345 201.186 150.397 203.534 148.364 204.399C109.781 220.8 63.4338 213.28 31.9583 181.817C-9.41226 140.463 -9.41295 73.4128 31.9588 32.0574C33.5213 30.4955 36.0541 30.4957 37.6159 32.0578C39.1777 33.6199 39.1771 36.1525 37.6146 37.7144Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M57.6852 17.4447C56.6914 15.4719 57.4852 13.0669 59.4583 12.0728C99.1749 -7.93684 148.868 -1.37195 182.042 31.7888C223.412 73.143 223.413 140.193 182.041 181.548C180.479 183.11 177.946 183.11 176.384 181.548C174.822 179.986 174.823 177.453 176.385 175.891C214.63 137.661 214.631 75.6779 176.385 37.4467C145.724 6.79791 99.7824 0.714176 63.0573 19.2167C61.0842 20.2108 58.679 19.4174 57.6852 17.4447Z`,
          fill: `#E5E5E5`,
        }),
        (0, H.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M106.838 188.612C152.036 188.612 188.676 151.986 188.676 106.806C188.676 61.6257 152.036 25 106.838 25C61.6402 25 25 61.6257 25 106.806C25 151.986 61.6402 188.612 106.838 188.612ZM142.994 113.577C148.329 110.499 148.329 102.799 142.994 99.7197L93.9972 71.4425C88.6639 68.3645 81.9984 72.2136 81.9984 78.3714L81.9984 134.926C81.9984 141.084 88.6639 144.933 93.9972 141.855L142.994 113.577Z`,
          fill: `#E5E5E5`,
        }),
      ],
    });
  },
  TS = () => {
    let e = q();
    return (0, H.jsx)(`svg`, {
      className: (0, Q.default)(tS, void 0, e.IconAchievement),
      x: `0px`,
      y: `0px`,
      width: `100px`,
      height: `120px`,
      viewBox: `0 0 240 276`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, H.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M107.636 23.0644L120.478 8.96963L133.319 23.0644C137.003 27.1077 142.704 28.6353 147.916 26.9756L166.085 21.19L170.159 39.8174C171.327 45.1608 175.501 49.3343 180.844 50.5029L199.472 54.5768L193.686 72.7455C192.026 77.9573 193.554 83.6585 197.597 87.3422L211.692 100.184L197.597 113.026C193.554 116.709 192.026 122.411 193.686 127.622L199.472 145.791L180.844 149.865C175.501 151.034 171.327 155.207 170.159 160.551L166.085 179.178L147.916 173.392C142.704 171.733 137.003 173.26 133.319 177.303L120.478 191.398L107.636 177.303C103.952 173.26 98.251 171.733 93.0392 173.392L74.8705 179.178L70.7966 160.551C69.628 155.207 65.4545 151.034 60.1111 149.865L41.4837 145.791L47.2693 127.622C48.929 122.411 47.4014 116.709 43.3581 113.026L29.2633 100.184L43.3581 87.3422C47.4014 83.6584 48.929 77.9573 47.2693 72.7455L41.4837 54.5768L60.1111 50.5029C65.4545 49.3343 69.628 45.1608 70.7966 39.8174L74.8705 21.19L93.0391 26.9756C98.251 28.6353 103.952 27.1077 107.636 23.0644ZM116.042 1.95909C118.422 -0.653032 122.533 -0.653031 124.913 1.9591L139.233 17.6766C140.812 19.4094 143.255 20.0641 145.489 19.3528L165.749 12.9011C169.116 11.8289 172.676 13.8842 173.431 17.3363L177.974 38.1081C178.475 40.3982 180.263 42.1868 182.553 42.6877L203.325 47.2305C206.777 47.9855 208.833 51.5454 207.76 54.9125L201.309 75.1729C200.598 77.4065 201.252 79.8499 202.985 81.4286L218.703 95.7488C221.315 98.1287 221.315 102.239 218.703 104.619L202.985 118.939C201.252 120.518 200.598 122.961 201.309 125.195L207.76 145.455C208.833 148.823 206.777 152.382 203.325 153.137L190.801 155.876L239.847 236.34C242.331 240.415 239.521 245.659 234.753 245.849L206.74 246.963C204.683 247.045 202.798 248.133 201.698 249.874L186.727 273.576C184.178 277.611 178.232 277.422 175.945 273.234L131.275 191.426L124.913 198.409C122.533 201.021 118.422 201.021 116.042 198.409L109.564 191.298L64.8244 273.234C62.5373 277.422 56.5913 277.611 54.0427 273.576L39.0711 249.874C37.9718 248.133 36.0867 247.045 34.0298 246.963L6.01687 245.849C1.24829 245.659 -1.56099 240.415 0.922882 236.34L49.9904 155.841L37.63 153.137C34.1779 152.382 32.1226 148.823 33.1948 145.455L39.6465 125.195C40.3578 122.961 39.7031 120.518 37.9703 118.939L22.2528 104.619C19.6407 102.239 19.6407 98.1286 22.2528 95.7487L37.9703 81.4286C39.7031 79.8499 40.3578 77.4065 39.6465 75.1729L33.1948 54.9125C32.1226 51.5454 34.1779 47.9855 37.63 47.2305L58.4018 42.6877C60.6919 42.1868 62.4805 40.3982 62.9814 38.1081L67.5242 17.3363C68.2792 13.8842 71.8391 11.8289 75.2062 12.9011L95.4666 19.3528C97.7002 20.0641 100.144 19.4094 101.722 17.6766L116.042 1.95909ZM58.2574 157.649L9.29666 237.973L34.3478 238.969C39.0346 239.156 43.3299 241.636 45.8348 245.601L59.2235 266.798L103.865 185.043L101.722 182.691C100.144 180.959 97.7002 180.304 95.4666 181.015L75.2062 187.467C71.8391 188.539 68.2792 186.484 67.5242 183.032L62.9814 162.26C62.4805 159.97 60.6919 158.181 58.4018 157.68L58.2574 157.649ZM136.974 185.17L181.546 266.798L194.935 245.601C197.44 241.636 201.735 239.156 206.422 238.969L231.473 237.973L182.534 157.684C180.253 158.191 178.473 159.976 177.974 162.26L173.431 183.032C172.676 186.484 169.116 188.539 165.749 187.467L145.489 181.015C143.255 180.304 140.812 180.959 139.233 182.691L136.974 185.17ZM146.738 53.2766C121.119 38.4858 88.3612 47.2633 73.5704 72.8818C62.3219 92.3648 64.7011 115.986 77.7705 132.691C79.1317 134.431 78.8247 136.945 77.0848 138.307C75.3449 139.668 72.8309 139.361 71.4697 137.621C56.4587 118.434 53.7068 91.2865 66.6422 68.8818C83.6422 39.437 121.293 29.3484 150.738 46.3484C152.651 47.453 153.307 49.8993 152.202 51.8125C151.097 53.7257 148.651 54.3812 146.738 53.2766ZM167.979 60.9959C166.588 59.2794 164.069 59.0153 162.353 60.406C160.636 61.7967 160.372 64.3156 161.763 66.032C175.326 82.7723 177.936 106.79 166.527 126.551C151.737 152.169 118.978 160.947 93.3599 146.156C91.4467 145.051 89.0003 145.707 87.8957 147.62C86.7912 149.533 87.4467 151.98 89.3599 153.084C118.805 170.084 156.456 159.996 173.456 130.551C186.575 107.827 183.558 80.2246 167.979 60.9959Z`,
        fill: `#E5E5E5`,
      }),
    });
  };
function ES(e) {
  let { userYearInReview: t } = e,
    n = q();
  return (0, H.jsx)($, {
    className: (0, Q.default)(ly, n.TopHonorsSection),
    children: (0, H.jsx)(`div`, {
      className: (0, Q.default)(X, tv),
      children: (0, H.jsxs)(`div`, {
        className: nx,
        children: [
          (0, H.jsx)(DS, { userYearInReview: t }),
          (0, H.jsxs)(`div`, {
            className: wx,
            children: [
              (0, H.jsx)(jS, { userYearInReview: t }),
              (0, H.jsx)(FS, { userYearInReview: t }),
            ],
          }),
        ],
      }),
    }),
  });
}
function DS(e) {
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
    u = o > 0 && l > 0 && !ch();
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
    v = (0, H.jsx)(xS, {
      endValue: i,
      maxValue: (i * 100) / s,
      duration: 2e3,
      startAnimation: d,
      delay: 500,
    }),
    ee = (0, H.jsx)(xS, {
      endValue: a,
      maxValue: (a * 100) / c,
      duration: 2e3,
      startAnimation: p,
      delay: 700,
    }),
    y = (0, H.jsx)(xS, {
      endValue: o,
      maxValue: (o * 100) / l,
      duration: 2e3,
      startAnimation: h,
      delay: 900,
    });
  return (0, H.jsxs)(`div`, {
    className: (0, Q.default)(Bx, r.PlayBehaviorContainer),
    children: [
      (0, H.jsx)(`div`, {
        className: dv,
        children: n(`#YIR_Compare_Title_Label`),
      }),
      (0, H.jsx)(`div`, {
        className: (0, Q.default)(pv, qx),
        children: n(`#YIR_Compare_Subtitle_Label`),
      }),
      (0, H.jsxs)(ml, {
        onVisibilityChange: _,
        children: [
          (0, H.jsx)(OS, {
            progressLabel: n(
              i == 1
                ? `#YIR_Compare_PlayerProgress_Achievements_Single`
                : `#YIR_Compare_PlayerProgress_Achievements_Label`,
              v,
            ),
            userPercent: s,
            steamAverage: t.GetPlayTimeStats().by_numbers?.achievements_avg,
            progressIcon: (0, H.jsx)(TS, {}),
          }),
          (0, H.jsx)(OS, {
            progressLabel: n(
              a == 1
                ? `#YIR_Compare_PlayerProgress_PlayedGames_Single`
                : `#YIR_Compare_PlayerProgress_PlayedGames_Label`,
              ee,
            ),
            userPercent: c,
            steamAverage: t.GetPlayTimeStats().by_numbers?.games_played_avg,
            progressIcon: (0, H.jsx)(wS, {}),
          }),
          u &&
            (0, H.jsx)(OS, {
              progressLabel: n(
                o == 1
                  ? `#YIR_Compare_PlayerProgress_LongestStreak_Single`
                  : `#YIR_Compare_PlayerProgress_LongestStreak_Label`,
                y,
              ),
              userPercent: l,
              steamAverage: t.GetPlayTimeStats().by_numbers?.game_streak_avg,
              progressIcon: (0, H.jsx)(CS, {}),
            }),
        ],
      }),
      (0, H.jsx)(`div`, {
        className: aS,
        children: (0, H.jsx)(AS, { userYearInReview: t }),
      }),
    ],
  });
}
function OS(e) {
  let {
      progressLabel: t,
      steamAverage: n,
      progressIcon: r,
      userPercent: i,
    } = e,
    a = q();
  return (
    (i = ha(i, 0, 100)),
    (0, H.jsxs)($, {
      className: Jx,
      children: [
        (0, H.jsx)(`div`, { className: eS, children: r }),
        (0, H.jsxs)(`div`, {
          className: nS,
          children: [
            (0, H.jsx)(`div`, {
              className: (0, Q.default)(iS, a.ProgressLabel),
              children: t,
            }),
            (0, H.jsx)(`div`, {
              className: rS,
              children: (0, H.jsx)(`div`, {
                className: Yx,
                children: (0, H.jsx)(`div`, {
                  className: (0, Q.default)(
                    Vx,
                    a.ProgressBarFilled,
                    a.ProgressBarFilledGradient,
                  ),
                  style: {
                    clipPath:
                      `polygon(0% 0, ` + i + `% 0%, ` + i + `% 100%, 0% 100%)`,
                  },
                  children: (0, H.jsxs)(`div`, {
                    className: Hx,
                    children: [
                      (0, H.jsx)(`div`, { className: Wx }),
                      (0, H.jsx)(`div`, { className: (0, Q.default)(Wx, Ux) }),
                    ],
                  }),
                }),
              }),
            }),
            (0, H.jsx)(`div`, {
              className: Xx,
              children:
                n &&
                (0, H.jsx)(`div`, {
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
var kS = {
  NewActive: `#YIR_Compare_NewGames_Flavor`,
  UsedActive: `#YIR_Compare_ComfortGames_Flavor`,
  OldActive: `#YIR_Compare_OldGames_Flavor`,
};
function AS(e) {
  let { userYearInReview: t } = e,
    n = t.GetYear(),
    r = q(),
    i = r.new_games_color,
    a = r.used_games_color,
    o = r.old_games_color,
    [s, c] = (0, R.useState)(`NewActive`),
    l = J(),
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
  return (0, H.jsxs)(`div`, {
    className: (0, Q.default)(oS, tx[s], r[s]),
    children: [
      (0, H.jsx)(`div`, {
        className: (0, Q.default)(vS, r.GameNewnessTitle),
        children: L.LocalizeReact(
          `#YIR_Compare_Flavor_Title`,
          (0, H.jsx)(`div`, {}),
        ),
      }),
      (0, H.jsxs)(`div`, {
        className: sS,
        children: [
          (0, H.jsx)(`div`, {
            className: cS,
            children: (0, H.jsx)(Bp, {
              responsive: !0,
              style: { width: `100%`, aspectRatio: 1 },
              children: (0, H.jsxs)(Ff, {
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
                  (0, H.jsx)(
                    Ge,
                    {
                      onMouseEnter: () => c(`NewActive`),
                      className: (0, Q.default)(
                        lS,
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
                  (0, H.jsx)(
                    Ge,
                    {
                      onMouseEnter: () => c(`UsedActive`),
                      className: (0, Q.default)(
                        lS,
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
                  (0, H.jsx)(
                    Ge,
                    {
                      onMouseEnter: () => c(`OldActive`),
                      className: (0, Q.default)(
                        lS,
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
          (0, H.jsx)(`div`, {
            className: dS,
            children: (0, H.jsxs)(`div`, {
              className: fS,
              children: [
                (0, H.jsxs)(`div`, {
                  className: (0, Q.default)(
                    void 0,
                    r.UserData,
                    mS,
                    r.DataBox,
                    r.Background,
                  ),
                  children: [
                    (0, H.jsx)(`div`, {
                      className: (0, Q.default)(
                        _S,
                        r.DataBoxArrow,
                        r.Background,
                      ),
                    }),
                    (0, H.jsxs)(`div`, {
                      className: (0, Q.default)(hS, r.PercentageLabel, r.Color),
                      children: [
                        L.Localize(`#YIR_Compare_Percentage`, _[s]),
                        (0, H.jsx)(`div`, {
                          className: pS,
                          children: L.Localize(kS[s]),
                        }),
                      ],
                    }),
                    (0, H.jsx)(`div`, {
                      className: (0, Q.default)(
                        gS,
                        r.PercentageDescriptionLabel,
                        r.Color,
                      ),
                      children: v[s],
                    }),
                  ],
                }),
                (0, H.jsxs)(`div`, {
                  className: (0, Q.default)(
                    void 0,
                    r.SteamData,
                    mS,
                    r.DataBox,
                    r.Border,
                  ),
                  children: [
                    (0, H.jsx)(`div`, {
                      className: (0, Q.default)(hS, r.PercentageLabel, r.Color),
                      children: L.Localize(`#YIR_Compare_Percentage`, d[s]),
                    }),
                    (0, H.jsx)(`div`, {
                      className: (0, Q.default)(
                        gS,
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
function jS(e) {
  let { userYearInReview: t } = e,
    n = t.GetUserAggregateTagData(),
    { data: r } = Ci(P.LANGUAGE),
    i = J(),
    a = q(),
    o = MS(),
    s = n.map((e) => e.nPreSelectionWeight).sort((e, t) => t - e),
    c = n.map((e, t) => {
      let n = s.findIndex((t) => t - e.nPreSelectionWeight < 1e-5);
      return { subject: r && r[e.nTagId], A: (6 - n) * 10 + 2 * t + 0.5 };
    });
  if (c.length == 0) return null;
  let l = c.map((e, t) => (0, H.jsx)(`li`, { children: e.subject }, t));
  return (0, H.jsxs)(`div`, {
    className: (0, Q.default)(Ex, Tx),
    children: [
      (0, H.jsx)(`div`, {
        className: Rx,
        children: L.Localize(`#YIR_Spider_Title`),
      }),
      (0, H.jsx)(`div`, {
        className: (0, Q.default)(zx, a.SectionDesc),
        children: i(`#YIR_Spider_Desc`, t.GetYear()),
      }),
      (0, H.jsx)(`div`, {
        className: Dx,
        children: (0, H.jsxs)(Up, {
          responsive: !0,
          className: Ax,
          style: { width: `100%`, height: `100%` },
          cx: `50%`,
          cy: `50%`,
          outerRadius: `70%`,
          data: c,
          children: [
            (0, H.jsx)(Dd, {}),
            (0, H.jsx)(Jd, {
              tick: (0, H.jsx)(NS, { bNumberedLabels: o }),
              dataKey: `subject`,
            }),
            (0, H.jsx)(Ap, {
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
        (0, H.jsxs)(`ol`, {
          className: `e5EFq580oLg-`,
          children: [` `, l, ` `],
        }),
    ],
  });
}
function MS() {
  let [e, t] = (0, R.useState)(!1);
  return ((0, R.useEffect)(() => t(bc() || window.innerWidth <= 300), []), e);
}
function NS(e) {
  let { payload: t, x: n, verticalAnchor: r, bNumberedLabels: i, ...a } = e;
  return i
    ? (0, H.jsx)(`text`, {
        x: n,
        ...a,
        children: (0, H.jsx)(`tspan`, {
          x: n,
          dy: `20px`,
          children: t.index + 1,
        }),
      })
    : (0, H.jsx)(`svg`, {
        x: n - 85,
        ...a,
        width: `170px`,
        height: `100%`,
        children: (0, H.jsx)(`foreignObject`, {
          className: kx,
          dy: `20px`,
          width: `170`,
          height: `150`,
          children: (0, H.jsx)(`div`, { className: Ox, children: t.value }),
        }),
      });
}
function PS(e) {
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
function FS(e) {
  let { userYearInReview: t } = e,
    n = PS(t);
  if (n.length == 0) return null;
  let r = n.map(([e, t]) =>
    (0, H.jsx)(IS, { label: L.Localize(e), value: t }, e),
  );
  return (0, H.jsxs)(`div`, {
    className: (0, Q.default)(void 0, Tx),
    children: [
      (0, H.jsx)(`div`, {
        className: Rx,
        children: L.Localize(`#YIR_ByTheNum_Title`),
      }),
      (0, H.jsx)(`div`, { className: Mx, children: r }),
    ],
  });
}
function IS(e) {
  let { label: t, value: n } = e,
    r = n ? F(n) : `-`;
  return (0, H.jsxs)(`div`, {
    className: (0, Q.default)(Nx, n == 0 && `MvmFmRp0gao-`),
    children: [
      (0, H.jsx)(`div`, { className: Px, children: t }),
      (0, H.jsx)(`div`, { className: Ix }),
      (0, H.jsx)(`div`, { className: Fx, children: r }),
    ],
  });
}
var LS = `Wdvtmz-DIUA-`,
  RS = `_30hJH5z6jtk-`,
  zS = `nFsP-fXNWUA-`,
  BS = `c1gySWWvs3I-`;
function VS(e) {
  let { userYearInReview: t } = e;
  if (M.is_support || M.accountid == t.GetAccountID()) {
    let e = t.GetSteamID(),
      n = t.GetYear();
    return (0, H.jsxs)(on, {
      rootMargin: `0px 0px 100% 0px`,
      children: [
        (0, H.jsx)(HS, { steamid: e, year: n }),
        (0, H.jsx)(WS, { steamid: e, year: n }),
      ],
    });
  }
  return null;
}
function HS(e) {
  let { steamid: t, year: n } = e,
    { data: r } = Yh(t);
  if (!r || r.is_not_member_of_any_group || !r.family_group) return null;
  let i = (r.family_group.members ?? [])
    .map((e) => e.steamid)
    .filter((e) => !!e && e !== t);
  return i.length == 0
    ? null
    : (0, H.jsxs)(`div`, {
        className: RS,
        children: [
          (0, H.jsx)(`div`, {
            className: zS,
            children: L.Localize(`#YIR_FamilyShared`),
          }),
          (0, H.jsx)(`div`, {
            className: BS,
            children: i.map((e) =>
              (0, H.jsx)(
                GS,
                { steamid: e, year: n, ePrivacy: 3, bPrivacyOverride: !1 },
                `family_` + e,
              ),
            ),
          }),
        ],
      });
}
var US = 50;
function WS(e) {
  let { steamid: t, year: n } = e,
    { isLoading: r, data: i } = qh(t, n),
    a = (0, R.useMemo)(
      () =>
        i
          ? [...i]
              .sort(
                (e, t) =>
                  (t.rt_privacy_updated ?? 0) - (e.rt_privacy_updated ?? 0),
              )
              .slice(0, US)
          : [],
      [i],
    ),
    o = (0, R.useMemo)(
      () => a.map((e) => new Xa(e.steamid).GetAccountID()),
      [a],
    ),
    s = ou(o);
  if (r || o?.length == 0 || !s) return null;
  let c = new Map();
  for (let e of s) e && e.steamid && c.set(e.steamid, e.persona_name ?? ``);
  return (
    a.sort((e, t) => c.get(e.steamid).localeCompare(c.get(t.steamid))),
    (0, H.jsxs)(`div`, {
      className: RS,
      children: [
        (0, H.jsx)(`div`, {
          className: zS,
          children: L.Localize(`#YIR_FriendShared`),
        }),
        (0, H.jsx)(w, {
          className: BS,
          "flow-children": `grid`,
          children: a
            .slice(0, US)
            .map((e) =>
              (0, H.jsx)(
                GS,
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
        !!M.is_support &&
          (0, H.jsx)(`div`, {
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
function GS(e) {
  let { steamid: t, year: n, ePrivacy: r } = e,
    i = q();
  return (0, H.jsx)(es, {
    href: `${P.STORE_BASE_URL}replay/${t}/${n}`,
    className: (0, Q.default)({
      [void 0]: r == 1,
      [LS]: !0,
      [i.FriendCtn]: !0,
    }),
    children: (0, H.jsx)(uu, {
      accountID: new Xa(t).GetAccountID(),
      bHideWhenNotAvailable: !0,
      bLink: !1,
    }),
  });
}
function KS(e) {
  return `${P.STORE_CDN_URL}public/images/yearinreview/${e}`;
}
var qS = `cQe-oob-ixY-`,
  JS = `tv7SmCaHL8c-`,
  YS = `QEvd6eyhjtk-`,
  XS = `VKJxuXZg9J4-`,
  ZS = `_8fQsxmA8PSo-`,
  QS = `UNBAK8TydWc-`,
  $S = `qxLHCRfIBjM-`;
SS();
var eC = 100;
function tC(e) {
  let { userYearInReview: t } = e,
    n = t.GetPlayTimeStats(),
    r = n.total_stats,
    i = n.game_summary,
    a = J(),
    o = q(),
    s = (0, R.useMemo)(() => {
      let e = [];
      return (
        typeof r.windows_playtime_percentagex100 == `number` &&
          r.windows_playtime_percentagex100 > eC &&
          e.push({
            id: `windows`,
            name: L.Localize(`#YIR_Platfrom_windows`),
            value: r.windows_playtime_percentagex100,
          }),
        typeof r.linux_playtime_percentagex100 == `number` &&
          r.linux_playtime_percentagex100 > eC &&
          e.push({
            id: `linux`,
            name: L.Localize(`#YIR_Platfrom_linux`),
            value: r.linux_playtime_percentagex100,
          }),
        typeof r.macos_playtime_percentagex100 == `number` &&
          r.macos_playtime_percentagex100 > eC &&
          e.push({
            id: `mac`,
            name: L.Localize(`#YIR_Platfrom_macos`),
            value: r.macos_playtime_percentagex100,
          }),
        typeof r.vr_playtime_percentagex100 == `number` &&
          r.vr_playtime_percentagex100 > eC &&
          e.push({
            id: `vr`,
            name: L.Localize(`#YIR_Platfrom_vr`),
            value: r.vr_playtime_percentagex100,
          }),
        typeof r.deck_playtime_percentagex100 == `number` &&
          r.deck_playtime_percentagex100 > eC &&
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
          r.windows_playtime_percentagex100 > eC &&
          e.push({
            id: `windows`,
            name: L.Localize(`#YIR_Platfrom_windows`),
            value: i.filter((e) => e.played_windows).length,
          }),
        typeof r.linux_playtime_percentagex100 == `number` &&
          r.linux_playtime_percentagex100 > eC &&
          e.push({
            id: `linux`,
            name: L.Localize(`#YIR_Platfrom_linux`),
            value: i.filter((e) => e.played_linux).length,
          }),
        typeof r.macos_playtime_percentagex100 == `number` &&
          r.macos_playtime_percentagex100 > eC &&
          e.push({
            id: `mac`,
            name: L.Localize(`#YIR_Platfrom_macos`),
            value: i.filter((e) => e.played_mac).length,
          }),
        typeof r.vr_playtime_percentagex100 == `number` &&
          r.vr_playtime_percentagex100 > eC &&
          e.push({
            id: `vr`,
            name: L.Localize(`#YIR_Platfrom_vr`),
            value: i.filter((e) => e.played_vr).length,
          }),
        typeof r.deck_playtime_percentagex100 == `number` &&
          r.deck_playtime_percentagex100 > eC &&
          e.push({
            id: `deck`,
            name: L.Localize(`#YIR_Platfrom_deck`),
            value: i.filter((e) => e.played_deck).length,
          }),
        e
      );
    }, [r, i]);
  if (s.length < 2) return null;
  let l = oC(r);
  return (0, H.jsx)($, {
    className: (0, Q.default)(c_, o.PlatformChartsCtn),
    children: (0, H.jsxs)(`div`, {
      className: (0, Q.default)(X, l_),
      children: [
        (0, H.jsx)(`div`, { className: dv, children: a(`#YIR_Platform`) }),
        (0, H.jsxs)(`div`, {
          className: u_,
          children: [
            (0, H.jsxs)(`div`, {
              className: d_,
              children: [
                (0, H.jsx)(`div`, {
                  className: f_,
                  children: L.Localize(`#YIR_Platfrom_playtime`),
                }),
                (0, H.jsxs)(Bp, {
                  responsive: !0,
                  style: { width: `90%`, aspectRatio: 1 },
                  children: [
                    (0, H.jsx)(Ff, {
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
                        (0, H.jsx)(Ge, { fill: o[`pie_${e.id}`] }, `cell-${t}`),
                      ),
                    }),
                    (0, H.jsx)(Ye, {
                      content: (e) =>
                        (0, H.jsx)(nC, {
                          active: e.active,
                          payload: e.payload,
                        }),
                    }),
                    (0, H.jsx)(Iu, {}),
                  ],
                }),
              ],
            }),
            (0, H.jsxs)(`div`, {
              className: d_,
              children: [
                (0, H.jsx)(`div`, {
                  className: f_,
                  children: L.Localize(`#YIR_Platfrom_games`),
                }),
                (0, H.jsxs)(Bp, {
                  responsive: !0,
                  style: { width: `90%`, aspectRatio: 1 },
                  children: [
                    (0, H.jsx)(Ff, {
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
                        (0, H.jsx)(Ge, { fill: o[`pie_${e.id}`] }, `cell-${t}`),
                      ),
                    }),
                    (0, H.jsx)(Ye, {
                      content: (e) =>
                        (0, H.jsx)(rC, {
                          active: e.active,
                          payload: e.payload,
                        }),
                    }),
                    (0, H.jsx)(Iu, {}),
                  ],
                }),
              ],
            }),
          ],
        }),
        (l.bDeck || l.bVR) &&
          (0, H.jsx)(`div`, {
            className: (0, Q.default)(`jKX9urC1MxY-`, `_2fuIOljIHpg-`),
            children: a(`#YIR_Platform_DiveIn`),
          }),
      ],
    }),
  });
}
function nC(e) {
  let { active: t, payload: n } = e;
  if (t && n && n.length) {
    let e = n[0].value;
    return (0, H.jsxs)(kc, {
      children: [n[0].name, `: `, L.Localize(`#YIR_Percent_Playtime`, Y(e))],
    });
  }
  return null;
}
function rC(e) {
  let { active: t, payload: n } = e;
  if (t && n && n.length) {
    let e = n[0].value,
      t = n[0].name;
    return (0, H.jsx)(kc, {
      children: L.Localize(
        e === 1
          ? `#YIR_Platfrom_gamesplays_tooltip`
          : `#YIR_Platfrom_gamesplays_tooltip_Plural`,
        F(e),
        t,
      ),
    });
  }
  return null;
}
function iC(e) {
  let { userYearInReview: t } = e;
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(tC, { userYearInReview: t }),
      (0, H.jsx)(sC, { userYearInReview: t }),
    ],
  });
}
function aC(e) {
  let { userYearInReview: t, strClassName: n, nYear: r } = e,
    i = t.GetRawStats(),
    a = J(),
    o = a(`#YIR_TopGames_deck_subtitle`),
    {
      nTotalGames: s,
      nTotalSessions: c,
      nTotalPercentage: l,
    } = (0, R.useMemo)(() => mh(i, `deck`), [i]),
    { rgResults: u } = (0, R.useMemo)(() => uh(t, `deck`, 5, l), [t, l]),
    d = Number(Math.round(l / 100).toFixed(0)),
    f = a(`#YIR_TopGames_deck_new`);
  d > 50 && (f = a(`#YIR_TopGames_deck_mostly`));
  let p = (0, R.useRef)(null),
    m = Ks((e) => {
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
    v = (0, H.jsx)(xS, { endValue: s, duration: 2e3, startAnimation: h }),
    ee = (0, H.jsx)(xS, { endValue: c, duration: 2e3, startAnimation: h }),
    y = (0, R.useRef)(null);
  return (
    Jl(y),
    (0, H.jsxs)(`div`, {
      className: (0, Q.default)(n, Z.PlatformContentsCtn, YS),
      ref: p,
      children: [
        (0, H.jsx)(`div`, {
          className: (0, Q.default)(Z.SectionTitle, QS),
          children: f,
        }),
        (0, H.jsxs)(`div`, {
          className: $S,
          ref: m,
          children: [
            (0, H.jsxs)(`div`, {
              className: JS,
              children: [
                (0, H.jsxs)(ml, {
                  onVisibilityChange: _,
                  className: (0, Q.default)(X, Z.StatsRow, XS),
                  children: [
                    (0, H.jsxs)(`div`, {
                      className: Z.StatBlock,
                      children: [
                        (0, H.jsx)(`div`, { className: Z.BigNum, children: v }),
                        (0, H.jsx)(`div`, {
                          className: Z.StatDescription,
                          children: L.LocalizePlural(`#YIR_NewLine_Games`, s),
                        }),
                      ],
                    }),
                    (0, H.jsxs)(`div`, {
                      className: Z.StatBlock,
                      children: [
                        (0, H.jsx)(`div`, {
                          className: Z.BigNum,
                          children: ee,
                        }),
                        (0, H.jsx)(`div`, {
                          className: Z.StatDescription,
                          children: L.LocalizePlural(`#YIR_NewLine_Session`, c),
                        }),
                      ],
                    }),
                    (0, H.jsx)(ab, { percentVal: l, subToken: `#YIR_NewLine` }),
                  ],
                }),
                !1,
                (0, H.jsx)($, {
                  className: t_,
                  children: (0, H.jsx)(nb, {
                    rgGamePercentages: u,
                    category: `deck`,
                  }),
                }),
              ],
            }),
            (0, H.jsxs)(`video`, {
              className: qS,
              poster: `https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesPoster.jpg`,
              playsInline: !0,
              loop: !0,
              muted: !0,
              autoPlay: !0,
              controls: !1,
              ref: y,
              children: [
                (0, H.jsx)(`source`, {
                  src: `https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.webm`,
                  type: `video/webm`,
                }),
                (0, H.jsx)(`source`, {
                  src: `https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.mp4`,
                  type: `video/mp4`,
                }),
              ],
            }),
          ],
        }),
        (0, H.jsx)(`div`, {
          className: (0, Q.default)(Z.Disclaimer, ZS),
          children: o,
        }),
      ],
    })
  );
}
function oC(e) {
  return {
    bDeck:
      typeof e.deck_playtime_percentagex100 == `number` &&
      e.deck_playtime_percentagex100 > 100,
    bVR:
      typeof e.vr_playtime_percentagex100 == `number` &&
      e.vr_playtime_percentagex100 > 100,
  };
}
function sC(e) {
  let { userYearInReview: t } = e,
    n = t.GetYear(),
    r = J(),
    i = t.GetPlayTimeStats().total_stats,
    a = i.controller_playtime_percentagex100 + i.deck_playtime_percentagex100,
    o = !1;
  a > 7e3 && (o = !0);
  let s = oC(i);
  return (0, H.jsxs)(on, {
    rootMargin: `0px 0px 100% 0px`,
    children: [
      !!s.bDeck &&
        (0, H.jsx)($, {
          className: (0, Q.default)(Z.Section, Z.Deck),
          children: (0, H.jsx)(aC, { userYearInReview: t, nYear: n }),
        }),
      !!s.bVR &&
        (0, H.jsx)($, {
          className: (0, Q.default)(Z.Section, Z.VR),
          children: (0, H.jsx)($y, {
            category: `vr`,
            userYearInReview: t,
            bgImageURL: KS(`vr_background6.webp`),
            title: r(`#YIR_TopGames_vr`),
            subTitle: void 0,
          }),
        }),
      a > 1e3 &&
        (0, H.jsx)($, {
          className: (0, Q.default)(Z.Section, Z.Controller),
          children: (0, H.jsx)($y, {
            category: `controller`,
            userYearInReview: t,
            title: r(
              o ? `#YIR_TopGames_controllerMost` : `#YIR_TopGames_controller`,
              Y(a),
            ),
            subTitle: r(
              `#YIR_Platform_subtitle_controller`,
              L.Localize(`#YIR_Platfrom_controller_forsubtitle`),
            ),
          }),
        }),
      n >= 2024 &&
        (0, H.jsx)(j, { children: (0, H.jsx)(cC, { userYearInReview: t }) }),
    ],
  });
}
function cC(e) {
  let { userYearInReview: t } = e,
    n = J(),
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
  return (0, H.jsxs)(H.Fragment, {
    children: [
      r > 100 &&
        (0, H.jsxs)($, {
          className: (0, Q.default)(Z.Section, Z.Demo),
          children: [
            (0, H.jsx)(`div`, { className: Z.BG_Demo }),
            (0, H.jsx)($y, {
              category: `demo`,
              userYearInReview: t,
              title: n(`#YIR_TopGames_demo`),
              subTitleTokenIfMax: `#YIR_TopGames_demoMax`,
            }),
          ],
        }),
      i > 100 &&
        (0, H.jsxs)($, {
          className: (0, Q.default)(Z.Section, Z.Playtest),
          children: [
            (0, H.jsx)(`div`, { className: Z.BG_Playtest }),
            (0, H.jsx)($y, {
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
var lC = `Zyx-HjZHUjo-`,
  uC = `_1lcI3rMkINQ-`,
  dC = `qHBQax2jUhc-`,
  fC = `O1K2KPMCdBU-`,
  pC = `vNi0RlyomPM-`,
  mC = `TX-ZbWuG6nU-`,
  hC = `IrsybK-NCqg-`,
  gC = `-cwbu3H1bWI-`,
  _C = `N6MvnixTrWs-`,
  vC = `jYZcHfHVJ7Q-`,
  yC = `pMnJje5ddJk-`,
  bC = `_2hCwBXP7Dak-`,
  xC = `yvIttucwtMQ-`,
  SC = `yy3vzELgSfc-`,
  CC = `SOTrGkaPWt0-`,
  wC = `ttuzGl2s44c-`;
function TC(e) {
  let { userYearInReview: t } = e;
  if (ch()) return null;
  let n = t.GetPlayTimeStats().playtime_streak;
  return !n ||
    (typeof n.longest_consecutive_days == `number` &&
      n.longest_consecutive_days < 5)
    ? null
    : (0, H.jsx)(EC, { ...e, longestStreak: n });
}
function EC(e) {
  let { userYearInReview: t, longestStreak: n } = e,
    r = J(),
    i = V_(),
    a = q(),
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
  return (0, H.jsxs)(`div`, {
    className: (0, Q.default)(v_, _C, lC, a.Section),
    children: [
      (0, H.jsx)(`div`, {
        className: (0, Q.default)(wC, a.LongestStreakBgImage),
      }),
      (0, H.jsxs)(`div`, {
        className: X,
        children: [
          (0, H.jsxs)(`div`, {
            className: uC,
            children: [
              (0, H.jsx)(ml, {
                className: dC,
                onVisibilityChange: c,
                children: r(
                  `#YIR_Longest_Streak_Title`,
                  (0, H.jsx)(xS, {
                    className: pC,
                    endValue: v,
                    duration: 2e3,
                    startAnimation: o,
                  }),
                ),
              }),
              (0, H.jsxs)($, {
                className: yC,
                children: [
                  (0, H.jsx)(`div`, { className: fC }),
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(bC, a.StreakSizeFullBar),
                  }),
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)({ [SC]: !0, [CC]: v < 40 }),
                    children: (0, H.jsx)(OC, { nDays: v - 1 }),
                  }),
                  (0, H.jsx)(`div`, { className: fC }),
                ],
              }),
              (0, H.jsxs)($, {
                className: mC,
                children: [
                  (0, H.jsx)(`div`, {
                    className: void 0,
                    children: i(n.rtime_start ?? 0),
                  }),
                  (0, H.jsx)(`div`, {
                    className: void 0,
                    children: i((n.rtime_start ?? 0) + v * 24 * 60 * 60),
                  }),
                ],
              }),
            ],
          }),
          (0, H.jsxs)(ml, {
            onVisibilityChange: d,
            className: (0, Q.default)(m_, hC),
            children: [
              (0, H.jsx)(`div`, {
                className: (0, Q.default)(gC, l && `JoDLfdcjJPY-`),
                children: r(
                  _ > 1
                    ? `#YIR_Longest_Streak_Games`
                    : `#YIR_Longest_Streak_Games_Singular`,
                  F(_),
                ),
              }),
              (0, H.jsx)(`div`, {
                className: (0, Q.default)(vC),
                children: (0, H.jsx)(w, {
                  "flow-children": `grid`,
                  className: (0, Q.default)(h_, g_, l && `c42w8bI3Dx0-`),
                  children: h.map((e, n) => {
                    let r = t.GetGameSummaryForApp(e.appid);
                    return (0, H.jsx)(
                      rb,
                      {
                        appid: e.appid,
                        index: n,
                        loading: `lazy`,
                        rgAppIDs: g,
                        nParentAppID: r?.parent_appid,
                        eChildType: DC(r),
                      },
                      `longest_` + e.appid,
                    );
                  }),
                }),
              }),
            ],
          }),
          m &&
            (0, H.jsx)(`div`, {
              className: `z4JPVbkRELk-`,
              children: (0, H.jsx)(`button`, {
                type: `button`,
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
function DC(e) {
  if (e?.demo) return 1;
  if (e?.playtest) return 12;
}
function OC(e) {
  let { nDays: t } = e,
    n = [];
  if (t > 0) {
    for (let e = 0; e < t + 2; ++e)
      n.push((0, H.jsx)(`div`, { className: xC }, `DrawNDivForStreakDays` + e));
    return (0, H.jsx)(H.Fragment, { children: n });
  }
  return null;
}
var kC = `qdYD-Nli-BU-`,
  AC = `ocrq1-0nW8Y-`,
  jC = `uvsrpXUQL6E-`,
  MC = `JSoZ402xLkY-`;
function NC(e) {
  let { steamid: t, year: n } = e,
    r = q(),
    { rgOtherYears: i } = $h(),
    a = J();
  return i.length === 0
    ? null
    : (0, H.jsxs)(`div`, {
        className: kC,
        children: [
          (0, H.jsx)(`div`, {
            className: (0, Q.default)(AC, r.OtherYearsHeader),
            children: a(`#YearInReview_OtherYearLinks_Header`),
          }),
          (0, H.jsx)(`div`, {
            className: (0, Q.default)(jC, r.OtherYearLinks),
            children: i.map((e) =>
              (0, H.jsx)(
                es,
                {
                  href: `${P.STORE_BASE_URL}replay/${t}/${e}?src=8`,
                  className: (0, Q.default)(MC, r.OtherYearLink),
                  children: e,
                },
                e,
              ),
            ),
          }),
        ],
      });
}
var PC = t({
    ActiveHint: () => Nw,
    Appear: () => tT,
    Arrow: () => hw,
    ArrowDisabled: () => vw,
    BadgeBarFiller: () => eT,
    BadgeBoxIntro: () => $w,
    CarouselCtn: () => aw,
    CarouselHint: () => Mw,
    CarouselHintCtn: () => jw,
    CenterImage: () => bw,
    CenterImg: () => Ew,
    CloseIcon: () => uw,
    Disabled: () => qw,
    DropDownSizer: () => qC,
    DropdownButton: () => YC,
    DropdownOption: () => ZC,
    ElementFadeIn: () => Qw,
    Error: () => XC,
    FB: () => Ww,
    FeedBtn: () => Uw,
    FooterCtn: () => Fw,
    FormatHint: () => Pw,
    ImageArrowCtn: () => mw,
    ImagesCtn: () => yw,
    ImgAndPreviewCtn: () => xw,
    InteractButton: () => Ow,
    InteractButtonIcon: () => kw,
    InteractButtonText: () => Aw,
    LangaugeDropdown: () => iw,
    LanguageLabel: () => rw,
    Left: () => gw,
    LeftPeak: () => Tw,
    LoadingCtn: () => ow,
    MobileCtn: () => Yw,
    PeakImg: () => Dw,
    Peek: () => Cw,
    PreviewAndIconCtn: () => lw,
    PreviewClickCtn: () => cw,
    PreviewImageCtn: () => sw,
    PreviewImage_1080x1080: () => dw,
    PreviewImage_1080x1920: () => fw,
    PreviewImage_1200x628: () => pw,
    PreviewMask: () => Sw,
    PrivacyWarning: () => HC,
    RD: () => Kw,
    Right: () => _w,
    RightPeak: () => ww,
    SeeRewindButton: () => GC,
    ShareArea: () => WC,
    ShareButton: () => VC,
    ShareColumns: () => LC,
    ShareCtn: () => zC,
    ShareHeader: () => JC,
    ShareIcon: () => $C,
    ShareLanguagePicker: () => nw,
    ShareLinkButton: () => Rw,
    ShareLinkIcon: () => Xw,
    ShareLinkText: () => Zw,
    ShareModal: () => tw,
    ShareModalDialogCtn: () => ew,
    ShareOptions: () => FC,
    ShareShortUrl: () => zw,
    ShareText: () => QC,
    ShareTitle: () => IC,
    ShareTypeTitle: () => UC,
    ShareURLCtn: () => Lw,
    ShareURLTitle: () => Bw,
    ShowcaseInfo: () => RC,
    SocialButtons: () => Hw,
    SteamButtons: () => Vw,
    TW: () => Gw,
    TooltipCtn: () => Iw,
    VisBorder: () => Jw,
    Visible: () => KC,
    YIRShareCtn: () => BC,
    default: () => nT,
  }),
  FC = `GQ15KBYq0dM-`,
  IC = `aXiQBfYGO9I-`,
  LC = `QsTph6fo6tE-`,
  RC = `MqMesN--4dY-`,
  zC = `mPg8ksPIypA-`,
  BC = `ql9xSqCdaH0-`,
  VC = `j8A4NpxJ0t0-`,
  HC = `wzkr-U2Espw-`,
  UC = `smzKi1RTbdQ-`,
  WC = `PmXhnAChGR0-`,
  GC = `F8tObD0Db8k-`,
  KC = `_74rjTvdFGHA-`,
  qC = `_3K3tDOC4GJc-`,
  JC = `r3ltIfNjuPk-`,
  YC = `PzQjhUmqibw-`,
  XC = `n1Fb28gGkQA-`,
  ZC = `IvgYPzwuDSc-`,
  QC = `_2-Cr-SQJps0-`,
  $C = `CnI2waDfQ34-`,
  ew = `YKCweqawRAg-`,
  tw = `WoxdMMqJPdU-`,
  nw = `xH2JulcKe14-`,
  rw = `UDsOCbvSZIU-`,
  iw = `Gr4dorQ7W5c-`,
  aw = `ANCmTxdRftQ-`,
  ow = `p0yOORO-3xk-`,
  sw = `v3ht7HUJu3M-`,
  cw = `DIelFHIZzhU-`,
  lw = `_7cpnCIhhrPY-`,
  uw = `_1sB-7CAJZ8k-`,
  dw = `xPVASClAx0k-`,
  fw = `MUHNnGqkOqY-`,
  pw = `vBdHL5mBGrg-`,
  mw = `Zhn0fcf8K0A-`,
  hw = `e1abu676--0-`,
  gw = `H-DDc-hfx8I-`,
  _w = `YH-nSsaJzMU-`,
  vw = `pOiTs551keM-`,
  yw = `IwfOPZqUlI0-`,
  bw = `J3x0rrHLezU-`,
  xw = `fmGqpqE4kNI-`,
  Sw = `boHwEaOCYyc-`,
  Cw = `IyLe07FQrvw-`,
  ww = `XJ0X2gf4Bj8-`,
  Tw = `G3q0v1ojD1Y-`,
  Ew = `qfIY3K5wcM0-`,
  Dw = `_7c1acrIAHH4-`,
  Ow = `wNE8ANE5TsM-`,
  kw = `cHPBGtpOoh8-`,
  Aw = `W6T4-MeSpIc-`,
  jw = `hbAE9JcKwtk-`,
  Mw = `OOKPlPQEH-w-`,
  Nw = `a5nzDP5fAS8-`,
  Pw = `OKLgRZL9G-8-`,
  Fw = `YZ3SbPJqfpo-`,
  Iw = `mhqjR9vpV54-`,
  Lw = `vYxszMZbMu8-`,
  Rw = `gCfLNYFfCkY-`,
  zw = `Fszxyt7mMys-`,
  Bw = `LFvgTxoh4cM-`,
  Vw = `O8FfPGGUfsk-`,
  Hw = `DT0tk4O37yI-`,
  Uw = `ICd7j4gYWCY-`,
  Ww = `h96vh8Y0dDU-`,
  Gw = `_0XH6IlZcmBQ-`,
  Kw = `CJhunxWUcHo-`,
  qw = `Vpkqj7M1WBw-`,
  Jw = `_7V5HmtHlzMQ-`,
  Yw = `RsGMBAZHmro-`,
  Xw = `uc6rSxuiYYU-`,
  Zw = `_6S7z8D0l51A-`,
  Qw = `W42-VaMVayE-`,
  $w = `-Lm3gVp9t28-`,
  eT = `Bp9o640kQcU-`,
  tT = `F-nVb84xjt4-`,
  nT = {
    ShareOptions: FC,
    ShareTitle: IC,
    ShareColumns: LC,
    ShowcaseInfo: RC,
    ShareCtn: zC,
    YIRShareCtn: BC,
    ShareButton: VC,
    PrivacyWarning: HC,
    ShareTypeTitle: UC,
    ShareArea: WC,
    SeeRewindButton: GC,
    Visible: KC,
    DropDownSizer: qC,
    ShareHeader: JC,
    DropdownButton: YC,
    Error: `n1Fb28gGkQA-`,
    DropdownOption: ZC,
    ShareText: QC,
    ShareIcon: $C,
    ShareModalDialogCtn: ew,
    ShareModal: tw,
    ShareLanguagePicker: nw,
    LanguageLabel: rw,
    LangaugeDropdown: iw,
    CarouselCtn: aw,
    LoadingCtn: ow,
    PreviewImageCtn: sw,
    PreviewClickCtn: cw,
    PreviewAndIconCtn: lw,
    CloseIcon: uw,
    PreviewImage_1080x1080: dw,
    PreviewImage_1080x1920: fw,
    PreviewImage_1200x628: pw,
    ImageArrowCtn: mw,
    Arrow: hw,
    Left: gw,
    Right: _w,
    ArrowDisabled: vw,
    ImagesCtn: yw,
    CenterImage: bw,
    ImgAndPreviewCtn: xw,
    PreviewMask: Sw,
    Peek: Cw,
    RightPeak: ww,
    LeftPeak: Tw,
    CenterImg: Ew,
    PeakImg: Dw,
    InteractButton: Ow,
    InteractButtonIcon: kw,
    InteractButtonText: Aw,
    CarouselHintCtn: jw,
    CarouselHint: Mw,
    ActiveHint: Nw,
    FormatHint: Pw,
    FooterCtn: Fw,
    TooltipCtn: Iw,
    ShareURLCtn: Lw,
    ShareLinkButton: Rw,
    ShareShortUrl: zw,
    ShareURLTitle: Bw,
    SteamButtons: Vw,
    SocialButtons: Hw,
    FeedBtn: Uw,
    FB: Ww,
    TW: Gw,
    RD: Kw,
    Disabled: qw,
    VisBorder: Jw,
    MobileCtn: Yw,
    ShareLinkIcon: Xw,
    ShareLinkText: Zw,
    ElementFadeIn: Qw,
    BadgeBoxIntro: $w,
    BadgeBarFiller: eT,
    Appear: tT,
  },
  rT = `0123456789abcdef`,
  iT = `bcdfghjkmnpqrtvw`;
function aT(e, t, n) {
  return Array.from(e, (e) => {
    let r = t.indexOf(e);
    return r >= 0 ? n[r] : e;
  }).join(``);
}
function oT(e) {
  return e ? aT(new Xa(e).GetAccountID().toString(16), rT, iT) : ``;
}
function sT(e) {
  let { steamid: t, nYear: n } = e,
    r = I_(),
    i = q();
  return M.logged_in
    ? !r && M.logged_in
      ? (0, H.jsx)(es, {
          className: (0, Q.default)(GC, i.SeeRewindButton),
          href: `${P.STORE_BASE_URL}replay/${M.steamid}/${n}?src=9`,
          children: L.Localize(`#YIR_SeeYourRewind`),
        })
      : (0, H.jsxs)(w, {
          className: BC,
          children: [
            (0, H.jsx)(cT, { steamid: t, nYear: n }),
            (0, H.jsxs)(w, {
              className: VC,
              onActivate: () => {
                wr((0, H.jsx)(fT, { steamid: t, nYear: n }), window, {
                  strTitle: Dr.Localize(`#Button_Share`),
                });
              },
              children: [
                (0, H.jsx)(Ol, { className: (0, Q.default)($C) }),
                (0, H.jsx)(`span`, {
                  className: (0, Q.default)(QC),
                  children: Dr.Localize(`#Button_Share`),
                }),
              ],
            }),
          ],
        })
    : null;
}
function cT(e) {
  let { steamid: t, nYear: n } = e,
    [r, i] = (0, R.useState)(``),
    a = Ah(t, n),
    { mutateAsync: o } = jh(t, n),
    s = (0, R.useMemo)(() => a === 3 || a === 2, [a]),
    c = [
      { data: 1, label: L.Localize(`#YIR_ShareVisbility_Private`) },
      { data: 2, label: L.Localize(`#YIR_ShareVisbility_FriendsOnly`) },
      { data: 3, label: L.Localize(`#YIR_ShareVisbility_Public`) },
    ];
  return (0, H.jsxs)(w, {
    "flow-children": `column`,
    children: [
      (0, H.jsx)(`div`, {
        className: (0, Q.default)(HC, s ? KC : ``),
        children: s
          ? L.Localize(`#YIR_ShareVisbility`)
          : L.Localize(`#YIR_ShareModal_DisabledShareTtp`),
      }),
      (0, H.jsx)(`div`, {
        className: qC,
        children: (0, H.jsx)(rc, {
          strDropDownButtonClassName: YC,
          strDropDownClassName: ZC,
          rgOptions: c,
          selectedOption: a,
          onChange: async (e) => {
            if (e.data !== a) {
              let { eResult: t } = await o(e.data),
                n = t == 1 ? `` : lT(t);
              n && i(n);
            }
          },
        }),
      }),
      r && (0, H.jsx)(`div`, { className: `n1Fb28gGkQA-`, children: r }),
    ],
  });
}
function lT(e) {
  switch (e) {
    case 10:
      return `Servers are busy, please try again later`;
    default:
      return ``;
  }
}
function uT(e) {
  return `y${e % 100}`;
}
var dT = `l`;
function fT(e) {
  let { closeModal: t, steamid: n, nYear: r } = e,
    [i, a] = (0, R.useState)(),
    o = Ah(n, r),
    s = (0, R.useMemo)(() => o === 3 || o === 2, [o]),
    [c, l] = (0, R.useState)(vn(P.LANGUAGE)),
    u = (0, R.useMemo)(() => Yi(c), [c]),
    d = oT(n),
    f = `https://s.team/${uT(r)}/${d}`,
    p = (0, R.useMemo)(() => {
      let e = new URL(f);
      return (e.searchParams.set(dT, u), e.href);
    }, [u, f]),
    m = () => {
      a(!0);
    };
  return i
    ? (0, H.jsx)(sn, { eventLink: p, closeModal: t })
    : (0, H.jsx)(Mr, {
        strDescription: ``,
        strTitle: L.Localize(`#YIR_ShareModal_Title`),
        onCancel: t,
        onOK: t,
        bAlertDialog: !0,
        modalClassName: ew,
        children: (0, H.jsxs)(`div`, {
          className: tw,
          children: [
            (0, H.jsx)(`div`, {
              className: nw,
              children: (0, H.jsx)(`div`, {
                className: iw,
                children: (0, H.jsx)(an, {
                  selectedLang: c,
                  fnOnLanguageChanged: l,
                  fnFilterLanguage: (e) => e !== 25,
                }),
              }),
            }),
            (0, H.jsx)(pT, { language: u, steamid: n, nYear: r, shareUrl: p }),
            (0, H.jsxs)(`div`, {
              className: Fw,
              children: [
                (0, H.jsx)(cT, { steamid: n, nYear: r }),
                (0, H.jsx)(`div`, {
                  className: (0, Q.default)(Jw, !s && `Vpkqj7M1WBw-`),
                  children: P.IN_MOBILE_WEBVIEW
                    ? (0, H.jsx)(vT, {
                        bCanShare: s,
                        shareUrl: p,
                        shareOnSteamActivityFeed: m,
                      })
                    : (0, H.jsx)(_T, {
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
function pT(e) {
  let { language: t, steamid: n, nYear: r, shareUrl: i } = e,
    [a, o] = (0, R.useState)(0),
    [s, c] = (0, R.useState)(!1),
    { isLoading: l, data: u } = Zh(n, r, t),
    d = u ? u.length - 1 : 0,
    f = `${P.BASE_URL_SHARED_CDN}social_sharing/`,
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
      ? (0, H.jsx)(`div`, {
          className: (0, Q.default)(aw, ow),
          children: (0, H.jsx)(nn, { position: `center` }),
        })
      : u
        ? (0, H.jsxs)(`div`, {
            className: aw,
            children: [
              s &&
                (0, H.jsx)(mT, {
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
              (0, H.jsxs)(`div`, {
                className: mw,
                children: [
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(
                      hw,
                      gw,
                      a === 0 && `pOiTs551keM-`,
                    ),
                    onClick: p,
                    children: (0, H.jsx)(Wl, { angle: 270 }),
                  }),
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(
                      hw,
                      _w,
                      a === d && `pOiTs551keM-`,
                    ),
                    onClick: m,
                    children: (0, H.jsx)(Wl, { angle: 90 }),
                  }),
                  (0, H.jsxs)(`div`, {
                    className: yw,
                    children: [
                      (0, H.jsx)(`div`, {
                        className: (0, Q.default)(Cw, Tw),
                        children:
                          a !== 0 &&
                          (0, H.jsx)(`img`, {
                            alt: ``,
                            className: `_7c1acrIAHH4-`,
                            src: `${f}${u[a - 1].url_path}`,
                          }),
                      }),
                      (0, H.jsx)(`div`, {
                        className: bw,
                        children: (0, H.jsxs)(`div`, {
                          className: xw,
                          children: [
                            (0, H.jsx)(`div`, {
                              onClick: (e) => {
                                (c(!0), e.stopPropagation());
                              },
                              className: Sw,
                              children: L.Localize(
                                `#YIR_ShareModal_FullscreenPreview`,
                              ),
                            }),
                            (0, H.jsx)(`img`, {
                              alt: ``,
                              className: Ew,
                              src: `${f}${u[a].url_path}`,
                            }),
                          ],
                        }),
                      }),
                      (0, H.jsx)(`div`, {
                        className: (0, Q.default)(Cw, ww),
                        children:
                          a !== d &&
                          (0, H.jsx)(`img`, {
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
                ? (0, H.jsx)(gT, {
                    imageUrl: `${f}${u[a].url_path}`,
                    shareUrl: i,
                  })
                : P.IN_CLIENT
                  ? null
                  : (0, H.jsx)(hT, { imageUrl: `${f}${u[a].url_path}` }),
              (0, H.jsx)(`div`, {
                className: jw,
                children: u.map((e, t) =>
                  (0, H.jsx)(
                    `div`,
                    { className: (0, Q.default)(Mw, t === a ? Nw : null) },
                    `${t}_hint`,
                  ),
                ),
              }),
              (0, H.jsx)(`div`, {
                className: Pw,
                children: L.Localize(
                  `#YIR_ShareModal_ImageCaption_${u[a].name}`,
                ),
              }),
            ],
          })
        : (0, H.jsx)(`div`, {
            className: (0, Q.default)(aw, ow),
            children: (0, H.jsx)(`div`, {
              children: L.Localize(`#YIR_ShareModal_FailedToGenerateImages`),
            }),
          })
  );
}
function mT(e) {
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
    (0, H.jsx)(`div`, {
      className: sw,
      children: (0, H.jsx)(`div`, {
        className: cw,
        onClick: a,
        children: (0, H.jsxs)(`div`, {
          className: lw,
          children: [
            (0, H.jsx)(`div`, { className: uw, children: (0, H.jsx)(ys, {}) }),
            (0, H.jsx)(`div`, {
              className: (0, Q.default)(hw, gw, t === 0 && `pOiTs551keM-`),
              onClick: r,
              children: (0, H.jsx)(Wl, { angle: 270 }),
            }),
            (0, H.jsx)(`div`, {
              className: (0, Q.default)(hw, _w, t === n && `pOiTs551keM-`),
              onClick: i,
              children: (0, H.jsx)(Wl, { angle: 90 }),
            }),
            (0, H.jsx)(`img`, {
              alt: ``,
              className: PC[`PreviewImage_${o}`],
              src: s,
            }),
          ],
        }),
      }),
    })
  );
}
function hT(e) {
  return (0, H.jsxs)(`div`, {
    className: Ow,
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
      (0, H.jsx)(no, { className: kw }),
      (0, H.jsx)(`span`, {
        className: (0, Q.default)(Aw),
        children: L.Localize(`#YIR_ShareModal_SaveImage`),
      }),
    ],
  });
}
function gT(e) {
  let { imageUrl: t, shareUrl: n } = e;
  return (0, H.jsxs)(`div`, {
    className: Ow,
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
      (0, H.jsx)(Ol, { className: kw }),
      (0, H.jsx)(`span`, {
        className: (0, Q.default)(Aw),
        children: L.Localize(`#YIR_ShareModal_ShareImage`),
      }),
    ],
  });
}
function _T(e) {
  let {
      bCanShare: t,
      shareUrl: n,
      shortAccountCode: r,
      language: i,
      nYear: a,
      shareOnSteamActivityFeed: o,
    } = e,
    [s, c] = (0, R.useState)(!1);
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(`div`, {
        className: Bw,
        children: L.Localize(`#YIR_ShareModal_YourLink`),
      }),
      (0, H.jsxs)(`div`, {
        className: Lw,
        children: [
          (0, H.jsx)(`div`, { className: zw, children: n }),
          (0, H.jsxs)(`div`, {
            className: (0, Q.default)(Rw),
            onClick: () => {
              (navigator.clipboard.writeText(n), c(!0));
            },
            children: [
              (0, H.jsx)(Ol, { className: Xw }),
              (0, H.jsx)(`span`, {
                className: (0, Q.default)(Zw),
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
      (0, H.jsxs)(`div`, {
        className: (0, Q.default)(Hw, Vw),
        children: [
          (0, H.jsxs)(`div`, {
            onClick: o,
            className: (0, Q.default)(Rw, Uw),
            children: [
              (0, H.jsx)(gn, { className: Xw }),
              (0, H.jsx)(`span`, {
                className: (0, Q.default)(Zw),
                children: L.Localize(`#YIR_ShareModal_ShareOnFriendsActivity`),
              }),
            ],
          }),
          (0, H.jsxs)(`a`, {
            href: `${P.COMMUNITY_BASE_URL}profiles/${M.steamid}/edit/showcases`,
            className: (0, Q.default)(Rw, Uw),
            children: [
              (0, H.jsx)(jl, { className: Xw }),
              (0, H.jsx)(`span`, {
                className: (0, Q.default)(Zw),
                children: L.Localize(`#YIR_ShareModal_AddShowcase`),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function vT(e) {
  let { bCanShare: t, shareUrl: n, shareOnSteamActivityFeed: r } = e;
  return (0, H.jsx)(H.Fragment, {
    children: (0, H.jsxs)(`div`, {
      className: Yw,
      children: [
        (0, H.jsxs)(`div`, {
          className: (0, Q.default)(Rw, !t && `Vpkqj7M1WBw-`),
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
            (0, H.jsx)(Ol, { className: Xw }),
            (0, H.jsx)(`span`, {
              className: (0, Q.default)(Zw),
              children: L.Localize(`#YIR_ShareModal_ShareLink`),
            }),
          ],
        }),
        (0, H.jsxs)(`div`, {
          onClick: r,
          className: (0, Q.default)(Rw, !t && `Vpkqj7M1WBw-`),
          children: [
            (0, H.jsx)(gn, { className: Xw }),
            (0, H.jsx)(`span`, {
              className: (0, Q.default)(Zw),
              children: L.Localize(`#YIR_ShareModal_ShareOnFriendsActivity`),
            }),
          ],
        }),
      ],
    }),
  });
}
function yT(e) {
  return e >= 2024;
}
function bT(e) {
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
    f = (0, R.useMemo)(() => u.slice(0, 5), [u]),
    { data: p } = ng((0, R.useMemo)(() => f.map((e) => e.appid), [f])),
    m = f
      .map((e, t) =>
        p?.has(e.appid)
          ? (0, H.jsx)(
              MT,
              { gameStat: e, gridClass: `Game${t}` },
              `${t}_${e.appid}`,
            )
          : null,
      )
      .filter((e) => e !== null),
    h = [
      ST(s, t),
      TT(n, r),
      CT(n, l, yT(n) ? t.GetPreviousYearSummary()?.longest_streak : void 0),
    ].filter((e) => e !== null),
    g = (0, H.jsx)(
      DT,
      {
        rgGamesLength: o.length,
        nNewGames: c,
        nDemoPlayed: i,
        nPlaytestPlayed: a,
        nYear: t.GetYear(),
        nPreviousYearsGames: yT(n)
          ? t.GetPreviousYearSummary()?.games_played
          : void 0,
      },
      `overview`,
    );
  return (0, H.jsx)($, {
    children: (0, H.jsxs)(`div`, {
      className: (0, Q.default)(X, mv),
      children: [
        (0, H.jsx)(ET, {
          rgGamesLength: o.length,
          nNewGames: c,
          totalAchievementUnlocked: s,
          nTotalPlaytimeSeconds: r.total_playtime_seconds || 0,
          nTotalPercentagePlaytimex100: r.total_playtime_percentagex100,
        }),
        o.length !== 1 &&
          (0, H.jsx)(H.Fragment, {
            children: (0, H.jsxs)(`div`, {
              className: `xJQGByL-21g-`,
              children: [
                (0, H.jsx)(`div`, {
                  className: `bXtzee8AefM-`,
                  children: d(`#YIR_YourSummary_SubTitle`),
                }),
                (0, H.jsx)(xT, { overview: g, statFillers: h, gameFillers: m }),
              ],
            }),
          }),
      ],
    }),
  });
}
function xT(e) {
  let { statFillers: t, gameFillers: n, overview: r } = e;
  return n.length > 2 && t.length > 1
    ? (0, H.jsx)(`div`, {
        className: _v,
        children: [r, t[0], t[1], n[0], n[1], n[2]],
      })
    : n.length > 1 && t.length > 2
      ? (0, H.jsx)(`div`, {
          className: _v,
          children: [r, t[1], t[2], t[0], n[0], n[1]],
        })
      : t.length == 1 && n.length > 3
        ? (0, H.jsx)(`div`, {
            className: _v,
            children: [r, t[0], n[0], n[1], n[2], n[3]],
          })
        : n.length > 1
          ? (0, H.jsx)(`div`, { className: vv, children: [r, n[0], n[1]] })
          : null;
}
function ST(e, t) {
  return e > 0
    ? (0, H.jsx)(kT, { userYearInReview: t }, `totalAchievements`)
    : null;
}
function CT(e, t, n) {
  return t &&
    typeof t.longest_consecutive_days == `number` &&
    typeof n == `number` &&
    t.longest_consecutive_days <= 1 &&
    n <= 1
    ? null
    : t &&
        typeof t.longest_consecutive_days == `number` &&
        t.longest_consecutive_days > 0 &&
        !ch()
      ? (0, H.jsx)(
          AT,
          { oLongestStreak: t, nYear: e, nPrevLongestStreamDays: n },
          `longestStreak`,
        )
      : null;
}
var wT = 1e3;
function TT(e, t) {
  let n = t.controller_playtime_percentagex100 + t.deck_playtime_percentagex100,
    r =
      t.total_playtime_percentagex100 -
      t.controller_playtime_percentagex100 -
      t.vr_playtime_percentagex100 -
      t.deck_playtime_percentagex100;
  return n < wT || r < wT
    ? null
    : (0, H.jsx)(jT, { oTotalStats: t, nYear: e }, `hardwareTime`);
}
function ET(e) {
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
    (0, H.jsx)(`div`, { className: dv, children: s })
  );
}
function DT(e) {
  let t = R_(),
    {
      rgGamesLength: n,
      nNewGames: r,
      nDemoPlayed: i,
      nPlaytestPlayed: a,
      nYear: o,
      nPreviousYearsGames: s,
    } = e,
    c = q(),
    l = KS(`bg_2023.svg`),
    u;
  return (
    n > 99999 ? (u = Qv) : n > 99 && (u = Zv),
    (0, H.jsx)(`div`, {
      className: (0, Q.default)(gv, c.SummaryCtnShadow),
      children: (0, H.jsxs)(`div`, {
        className: (0, Q.default)(Av, yv, c.GridItem, Cv, c.SummaryCtn),
        children: [
          (0, H.jsx)(`div`, { className: jv }),
          (0, H.jsx)(`div`, {
            className: (0, Q.default)(wv, Hv),
            style: { backgroundImage: `url(${l})` },
          }),
          (0, H.jsxs)(`div`, {
            className: Wv,
            children: [
              (0, H.jsx)(`div`, {
                className: ov,
                children: L.LocalizeReact(
                  `#YearInReview_SteamRewindHeader`,
                  (0, H.jsx)(`span`, {
                    className: (0, Q.default)(lv, c.UserName),
                    children: L.Localize(`#YearInReview_PossessiveUserName`, t),
                  }),
                  Dr.Localize(`#date_year`, o),
                ),
              }),
              (0, H.jsxs)(`div`, {
                className: (0, Q.default)(qv, Kv),
                children: [
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(Dv, u),
                    children: F(n),
                  }),
                  (0, H.jsx)(`div`, {
                    className: Xv,
                    children: L.LocalizePlural(`#YIR_YourSummary_Games`, n),
                  }),
                  (0, H.jsx)(OT, {
                    strTokenPrefix: `#YIR_YourSummary_PrevYear_Game`,
                    nCurValue: n,
                    nPrevValue: s,
                  }),
                ],
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Jv,
            children: [
              !!r &&
                (0, H.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, H.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: F(r),
                    }),
                    (0, H.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: L.LocalizePlural(
                        `#YIR_YourSummary_GamesFirst`,
                        r,
                      ),
                    }),
                  ],
                }),
              !!i &&
                (0, H.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, H.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: F(i),
                    }),
                    (0, H.jsx)(`div`, {
                      className: `Ro3m9drEqnI-`,
                      children: L.LocalizePlural(`#YIR_YourSummary_Demos`, i),
                    }),
                  ],
                }),
              !!a &&
                (0, H.jsxs)(`div`, {
                  className: `-DExq33nuLc-`,
                  children: [
                    (0, H.jsx)(`div`, {
                      className: `ERwgqbs67Y0-`,
                      children: F(a),
                    }),
                    (0, H.jsx)(`div`, {
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
function OT(e) {
  let { strTokenPrefix: t, nCurValue: n, nPrevValue: r } = e;
  if (r != null && r !== 0 && n !== 0)
    return n == r
      ? null
      : n < r
        ? (0, H.jsxs)(`div`, {
            className: ey,
            children: [
              (0, H.jsx)(`div`, { className: (0, Q.default)(ty, iy) }),
              (0, H.jsx)(`div`, {
                className: ny,
                children: L.LocalizePlural(`${t}Less`, r - n, F(r - n)),
              }),
            ],
          })
        : (0, H.jsxs)(`div`, {
            className: ey,
            children: [
              (0, H.jsx)(`div`, { className: (0, Q.default)(ty, ry) }),
              (0, H.jsx)(`div`, {
                className: ny,
                children: L.LocalizePlural(`${t}More`, n - r, F(n - r)),
              }),
            ],
          });
}
function kT(e) {
  let { userYearInReview: t } = e,
    n = t.GetPlayTimeStats().summary_stats;
  t.GetFilteredGameSummary();
  let r = t.GetYear(),
    i = q();
  if (!n) return null;
  let a = KS(`achievement_grid_02.webp`),
    o;
  return (
    typeof n.total_achievements == `number` && n.total_achievements > 99999
      ? (o = Qv)
      : typeof n.total_achievements == `number` &&
        n.total_achievements > 99 &&
        (o = Zv),
    (0, H.jsx)(`div`, {
      className: (0, Q.default)(gv, i.SummaryCtnShadow),
      children: (0, H.jsxs)(`div`, {
        className: (0, Q.default)(
          Av,
          yv,
          i.GridItem,
          Uv,
          void 0,
          i.SummaryCtn,
          i.AchievementBlock,
        ),
        children: [
          (0, H.jsx)(`div`, { className: jv }),
          (0, H.jsx)(`div`, {
            className: (0, Q.default)(wv, Hv),
            style: { backgroundImage: `url(${a})` },
          }),
          (0, H.jsxs)(`div`, {
            className: (0, Q.default)(qv, Ev),
            children: [
              (0, H.jsx)(`div`, {
                className: (0, Q.default)(Dv, o),
                children: F(n.total_achievements),
              }),
              (0, H.jsx)(`div`, {
                className: Xv,
                children: L.LocalizePlural(
                  `#YIR_YourSummary_Achievement`,
                  n.total_achievements,
                ),
              }),
              (0, H.jsx)(OT, {
                strTokenPrefix: `#YIR_YourSummary_PrevYear_Ach`,
                nCurValue: n.total_achievements,
                nPrevValue: yT(r)
                  ? t.GetPreviousYearSummary()?.unlocked_achievements
                  : void 0,
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Vv,
            children: [
              (0, H.jsxs)(`div`, {
                className: qv,
                children: [
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(Dv),
                    children: F(n.total_games_with_achievements || 0),
                  }),
                  (0, H.jsx)(`div`, {
                    className: Xv,
                    children: L.LocalizePlural(
                      `#YIR_YourSummary_Achievement_Games`,
                      n.total_games_with_achievements,
                    ),
                  }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: qv,
                children: [
                  (0, H.jsx)(`div`, {
                    className: Dv,
                    children: F(n.total_rare_achievements || 0),
                  }),
                  (0, H.jsx)(`div`, {
                    className: Xv,
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
function AT(e) {
  let { oLongestStreak: t, nPrevLongestStreamDays: n } = e,
    r = t.rtime_start ?? 0,
    i = t.longest_consecutive_days ?? 0,
    a = V_(),
    o = a(r),
    s = a(r + i * 24 * 60 * 60),
    c = q();
  if (ch()) return null;
  let l = KS(`streak_bg.jpg`);
  return (0, H.jsx)(`div`, {
    className: (0, Q.default)(gv, c.SummaryCtnShadow),
    children: (0, H.jsxs)(`div`, {
      className: (0, Q.default)(
        Av,
        yv,
        c.GridItem,
        Tv,
        c.SummaryCtn,
        c.StreakBlock,
      ),
      children: [
        (0, H.jsx)(`div`, { className: jv }),
        (0, H.jsx)(`div`, {
          className: (0, Q.default)(wv, Hv),
          style: { backgroundImage: `url(${l})` },
        }),
        (0, H.jsxs)(`div`, {
          className: (0, Q.default)(qv, Ev),
          children: [
            (0, H.jsx)(`div`, {
              className: Dv,
              children: L.LocalizePlural(
                `#YIR_Game_LongestStreak_DaysPlayed`,
                i,
              ),
            }),
            (0, H.jsx)(`div`, {
              className: Xv,
              children: L.Localize(`#YIR_YourSummary_Stat_Streak`),
            }),
            (0, H.jsx)(`div`, {
              className: $v,
              children: L.Localize(
                `#YIR_Game_LongestStreak_FromDateToDate`,
                o,
                s,
              ),
            }),
            (0, H.jsx)(OT, {
              strTokenPrefix: `#YIR_YourSummary_PrevYear_Day`,
              nCurValue: i,
              nPrevValue: n,
            }),
          ],
        }),
        (0, H.jsx)(`div`, {
          className: Vv,
          children: (0, H.jsxs)(`div`, {
            className: (0, Q.default)(qv, Yv),
            children: [
              (0, H.jsx)(`div`, {
                className: Dv,
                children: F(t.streak_games.length),
              }),
              (0, H.jsx)(`div`, {
                className: Xv,
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
function jT(e) {
  let { oTotalStats: t, nYear: n } = e,
    r = Y(
      t.total_playtime_percentagex100 -
        t.controller_playtime_percentagex100 -
        t.vr_playtime_percentagex100 -
        t.deck_playtime_percentagex100,
    ),
    i = t.controller_playtime_percentagex100 + t.deck_playtime_percentagex100,
    a = Y(i),
    o = KS(`keyboard.png?v=3`),
    s = KS(`controllers.png?v=2`),
    c = q(),
    l,
    u,
    d;
  return (
    Math.floor(i / 100) < 40
      ? ((l = 40), (u = Lv), (d = Rv))
      : Math.floor(i / 100) > 60
        ? ((l = 60), (u = Rv), (d = Lv))
        : (l = i / 100),
    (0, H.jsx)(`div`, {
      className: (0, Q.default)(gv, c.SummaryCtnShadow),
      children: (0, H.jsxs)(`div`, {
        className: (0, Q.default)(
          Mv,
          Av,
          yv,
          c.GridItem,
          Ov,
          c.SummaryCtn,
          c.HardwareBlock,
        ),
        children: [
          (0, H.jsx)(`div`, { className: jv }),
          (0, H.jsxs)(`div`, {
            className: Nv,
            children: [
              (0, H.jsxs)(`div`, {
                className: Pv,
                children: [
                  (0, H.jsx)(`div`, {
                    className: wv,
                    style: { background: `url(${o}) bottom` },
                  }),
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(Fv, d),
                    children: r,
                  }),
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(zv, d),
                    children: L.Localize(`#YIR_HowYouPlayed_Keyboard_Generic`),
                  }),
                ],
              }),
              (0, H.jsxs)(`div`, {
                className: Iv,
                style: { height: l + `%` },
                children: [
                  (0, H.jsx)(`div`, {
                    className: wv,
                    style: { background: `url(${s}) top` },
                  }),
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(Fv, u),
                    children: a,
                  }),
                  (0, H.jsx)(`div`, {
                    className: (0, Q.default)(zv, u),
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
function MT(e) {
  let { gameStat: t, gridClass: n } = e,
    { appid: r } = t,
    { item: i } = tg(r),
    a = Y_(0, [r]),
    o = q();
  if (!i) return null;
  let s = ar(i.assets, `library_hero`),
    c = Math.trunc(t.stats.total_sessions);
  return (0, H.jsx)(`div`, {
    className: (0, Q.default)(gv, o.SummaryCtnShadow),
    children: (0, H.jsxs)(`div`, {
      className: (0, Q.default)(Av, yv, o.GridItem, Q_[n], o.SummaryCtn, o[n]),
      onClick: a,
      children: [
        (0, H.jsx)(`div`, { className: jv }),
        (0, H.jsx)(`div`, {
          className: (0, Q.default)(wv, o.BackgroundImage),
          style: { backgroundImage: `url(${s})` },
        }),
        (0, H.jsx)(`div`, { className: Bv, children: i.info.name }),
        (0, H.jsxs)(`div`, {
          className: Vv,
          children: [
            (0, H.jsx)(NT, {
              percentVal: t.stats.total_playtime_percentagex100,
              subToken: `#YIR_Game_PlayStat`,
            }),
            (0, H.jsxs)(`div`, {
              className: qv,
              children: [
                (0, H.jsx)(`div`, { className: Dv, children: F(c) }),
                (0, H.jsx)(`div`, {
                  className: Xv,
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
function NT(e) {
  let { percentVal: t, subToken: n, className: r } = e,
    i = Y(t),
    a = `${n}_Percent`;
  return (0, H.jsxs)(`div`, {
    className: (0, Q.default)(qv, r),
    children: [
      (0, H.jsx)(`div`, { className: Dv, children: i }),
      (0, H.jsx)(`div`, { className: Xv, children: L.Localize(a) }),
    ],
  });
}
var PT = `VliP-d3rrOA-`,
  FT = `rN6Rp7gRK-8-`,
  IT = `_0KyNXUd2ye8-`,
  LT = `XVKp9D8UO7c-`,
  RT = `RY2J6XyyEuM-`,
  zT = `yaLK-z4T8sw-`;
SS();
var BT = R.memo(function (e) {
    let { data: t, topMonthlyAppsAndRanks: n } = e,
      r = q(),
      i = (0, R.useCallback)((e, n) => (t[n]?.date ? Zs(t[n].date) : ``), [t]),
      a = (0, R.useRef)(void 0);
    return (0, H.jsxs)(Gp, {
      responsive: !0,
      style: { width: `100%`, height: `100%` },
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 30,
      children: [
        (0, H.jsx)(_t, { vertical: !1, stroke: `#a0aab6` }),
        (0, H.jsx)(ie, {
          tickFormatter: Y,
          tick: { fill: `white` },
          axisLine: !0,
        }),
        (0, H.jsx)(Ye, {
          wrapperStyle: { outline: `none` },
          allowEscapeViewBox: { x: !1, y: !0 },
          isAnimationActive: !1,
          offset: 0,
          content: (e) =>
            (0, H.jsx)(HT, {
              active: e.active,
              payload: e.payload,
              hoveredBarIDRef: a,
            }),
        }),
        (0, H.jsx)(ht, {
          barSize: 60,
          dataKey: `topPlayedPercentBreakdownPerMonth.${gh}`,
          name: gh,
          stackId: `a`,
          fill: r.monthOthersColor,
          onMouseEnter: () => (a.current = gh),
          onMouseOut: () => (a.current = void 0),
        }),
        n.map((e, t) =>
          (0, H.jsx)(
            ht,
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
        (0, H.jsx)(Ee, {
          interval: 0,
          tick: (0, H.jsx)(JT, {}),
          tickFormatter: i,
        }),
      ],
    });
  }),
  VT = 7;
function HT(e) {
  let { active: t, payload: n, hoveredBarIDRef: r } = e,
    i = q(),
    a = J();
  if (t && n && n.length) {
    let e = n[0].payload.date.getUTCMonth(),
      t = L.Localize(`#YIR_MonthlyCharts_MonthNoun_${e + 1}`),
      o = n[0].payload.topPlayedPercentBreakdownPerMonth[hh],
      s = Object.keys(n[0].payload.otherPlayedPercentBreakdownForMonth),
      c = n[0].payload.topPlayedRelativePercentBreakdownForMonth,
      l = n.find((e) => e.name === r.current),
      u = l?.name === gh,
      d = n
        .map((e) => {
          let r = e.name,
            i = c[e.name];
          if (r === `percentOtherGamesRelativeMonth`) {
            let a = u && n.length == 1;
            return (0, H.jsxs)(
              R.Fragment,
              {
                children: [
                  !a &&
                    (0, H.jsx)(`div`, {
                      className: (0, Q.default)(e === l && `QlEkl-Bj9Tk-`),
                      children: XT(
                        i,
                        t,
                        `#YIR_MonthlyCharts_OtherGamesTooltip`,
                      ),
                    }),
                  u &&
                    s
                      .slice(0, VT)
                      .map((e) =>
                        (0, H.jsx)(
                          GT,
                          { appId: e, className: `QlEkl-Bj9Tk-` },
                          e,
                        ),
                      ),
                  u &&
                    s.length > VT &&
                    (0, H.jsx)(`div`, {
                      className: `QlEkl-Bj9Tk-`,
                      children: L.Localize(
                        `#YIR_MonthlyCharts_OtherGamesTooltip_AndMore`,
                        s.length - VT,
                      ),
                    }),
                ],
              },
              r,
            );
          }
          return e.value
            ? (0, H.jsx)(
                KT,
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
    return (0, H.jsxs)(kc, {
      style: { background: l?.color ?? i.monthOthersColor },
      className: PT,
      children: [
        (0, H.jsx)(`div`, { className: FT }),
        (0, H.jsx)(`div`, {
          className: LT,
          children:
            l &&
            (0, H.jsxs)(H.Fragment, {
              children: [
                !u && (0, H.jsx)(WT, { appId: l.name }),
                u && (0, H.jsx)(UT, { appIds: s.slice(0, 7) }),
              ],
            }),
        }),
        (0, H.jsxs)(`div`, {
          className: IT,
          children: [
            (0, H.jsx)(`div`, {
              className: void 0,
              children: XT(o, t, `#YIR_MonthlyCharts_PlayedTotalTooltip`),
            }),
            !f &&
              (0, H.jsxs)(H.Fragment, {
                children: [
                  (0, H.jsx)(`div`, {
                    children: L.Localize(
                      `#YIR_MonthlyCharts_PlayedSubtitleTooltip`,
                    ),
                  }),
                  d,
                ],
              }),
            f &&
              l &&
              (0, H.jsxs)(H.Fragment, {
                children: [
                  (0, H.jsx)(`div`, {
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
function UT({ appIds: e }) {
  return (0, H.jsx)(`div`, {
    className: RT,
    children: e?.map((t, n) =>
      (0, H.jsx)(
        WT,
        { appId: t, style: { zIndex: e.length - n, "--stack-position": n } },
        t,
      ),
    ),
  });
}
function WT({ appId: e, style: t }) {
  let { item: n } = tg(parseInt(e));
  if (!n?.assets) return null;
  let r = ar(n.assets, `library_capsule`) || hg;
  return (0, H.jsx)(`img`, { alt: ``, style: t, className: zT, src: r });
}
function GT({ appId: e, className: t }) {
  let { item: n } = tg(parseInt(e));
  return n
    ? (0, H.jsx)(`div`, { className: t, children: n.info.name }, e)
    : null;
}
function KT(e) {
  let { appId: t, className: n, value: r, date: i } = e,
    { item: a } = tg(parseInt(t));
  return a
    ? (0, H.jsx)(
        `div`,
        {
          className: n,
          children: XT(
            r,
            i,
            `#YIR_MonthlyCharts_TopPlayedTooltip`,
            (0, H.jsx)(`b`, { children: a.info.name }),
          ),
        },
        t,
      )
    : null;
}
var qT = R.memo(function (e) {
  let { data: t, name: n, color: r } = e,
    i = q(),
    a = (0, R.useCallback)((e, n) => (t[n]?.date ? Zs(t[n].date) : ``), [t]),
    [o, s] = (0, R.useState)(!1);
  (0, R.useEffect)(() => {
    s(document.documentElement.matches(`:dir(rtl)`));
  }, []);
  let c = `left`;
  return (
    o && (c = `right`),
    (0, H.jsxs)(Gp, {
      responsive: !0,
      style: { width: `100%`, height: `100%` },
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 30,
      children: [
        (0, H.jsx)(Ye, {
          wrapperStyle: {
            outline: `1px solid ` + (r ?? i.chartAccentColorAlt),
          },
          allowEscapeViewBox: { x: !1, y: !0 },
          reverseDirection: { x: o, y: !1 },
          isAnimationActive: !1,
          content: (e) =>
            (0, H.jsx)(YT, { active: e.active, payload: e.payload, name: n }),
        }),
        (0, H.jsx)(_t, { vertical: !1, stroke: `#a0aab6` }),
        (0, H.jsx)(ie, {
          tickFormatter: Y,
          tick: { fill: `white` },
          axisLine: !0,
          orientation: c,
        }),
        (0, H.jsx)(ht, {
          barSize: 60,
          dataKey: `percent`,
          fill: r ?? i.chartAccentColorAlt,
        }),
        (0, H.jsx)(Ee, {
          interval: 0,
          tick: (0, H.jsx)(JT, { bRTL: o }),
          tickFormatter: a,
          color: `#ffffff`,
          reversed: o,
        }),
      ],
    })
  );
});
function JT(e) {
  let { x: t, y: n, payload: r, bRTL: i } = e,
    a = e.tickFormatter(r.value, r.index),
    o = `end`,
    s = `rotate(-35)`;
  return (
    i && ((o = `start`), (s = `rotate(35)`)),
    (0, H.jsx)(`g`, {
      transform: `translate(${t},${n})`,
      children: (0, H.jsx)(`text`, {
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
function YT(e) {
  let { active: t, payload: n, name: r } = e,
    i = q(),
    a = n[0];
  if (t && a?.value) {
    let e = a.payload.date.getUTCMonth(),
      t = L.Localize(`#YIR_MonthlyCharts_MonthNoun_${e + 1}`),
      n = a.value;
    return (0, H.jsx)(kc, {
      style: { background: `#0e1014` },
      children: (0, H.jsx)(
        `div`,
        {
          style: { color: i.chartAccentColor },
          children: L.LocalizeReact(
            `#YIR_MonthlyCharts_TopPlayedGameTooltip_Percent`,
            (0, H.jsx)(`b`, { children: Y(n) }),
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
function XT(e, t, n, ...r) {
  let i = `${n}_Percent`;
  return L.LocalizeReact(i, (0, H.jsx)(`b`, { children: Y(e) }), t, ...r);
}
var ZT = `Md96G4kZDAE-`;
function QT(e) {
  let { userYearInReview: t } = e,
    n = J(),
    r = t.GetChartMonthlyData(),
    i = t.GetTopGameIdsAndRanks(),
    a = t.GetPlayTimeStats().games?.length ?? 0;
  return (0, H.jsx)(`div`, {
    className: ZT,
    children:
      a > 1 &&
      (0, H.jsxs)($, {
        className: void 0,
        children: [
          (0, H.jsx)(`div`, {
            className: `jKX9urC1MxY-`,
            children: n(`#YIR_MonthlyCharts_Title`),
          }),
          (0, H.jsx)(`div`, {
            className: `-q3HKBZo0Fg-`,
            children: (0, H.jsx)(`div`, {
              className: `J-KteziHcsY-`,
              children: (0, H.jsx)(BT, { data: r, topMonthlyAppsAndRanks: i }),
            }),
          }),
        ],
      }),
  });
}
function $T(e) {
  let t = Rh(e),
    n = Bh(e, !1);
  return eE(t?.all_time_unlocked_achievements, n?.length ?? 0);
}
function eE(e, t) {
  return typeof e == `number` && e > 0 && t > 0 && t <= e;
}
var tE = 2022,
  nE = `_2fXTkYFuLL0-`,
  rE = `_5hU6-LHkC9I-`,
  iE = `zDLaFJWW2Nk-`,
  aE = `N5WJoNh0dWc-`,
  oE = `JIuGrMQYevI-`,
  sE = `WzRwXnpcz6g-`,
  cE = `_4AJ91mlqTEg-`,
  lE = `OetAU-ImB-A-`,
  uE = `qRqoeOi-LW0-`,
  dE = `wlHDLgvcDaY-`,
  fE = `_7HxW8ABT2Qw-`,
  pE = `_1XiF5sig4jA-`;
function mE(e) {
  let { appid: t, userYearInReview: n } = e,
    r = Rh(t);
  return !r || !((r?.achievements?.length ?? 0) > 0)
    ? null
    : (0, H.jsx)(j, {
        children: (0, R.createElement)(hE, {
          ...e,
          key: `achievementunlucklist_` + t,
          userUnlockedAchievements: r,
        }),
      });
}
function hE(e) {
  let {
      appid: t,
      userYearInReview: n,
      bBlurContent: r,
      userUnlockedAchievements: i,
    } = e,
    [a, o] = (0, R.useState)(r),
    s = J(),
    c = Hh(t),
    l = () => o(!1),
    u = i.achievements?.length ?? 0,
    d = i.all_time_unlocked_achievements,
    f = d == c && c > 0 && u > 0 && d > 0 && !i.unlocked_more_in_future,
    p = eu({ appid: t, profileUrl: cn(n.GetSteamID()) }),
    m = un();
  return (0, H.jsxs)(`div`, {
    className: (0, Q.default)(X, nE),
    children: [
      a &&
        (0, H.jsx)(`div`, {
          onClick: l,
          className: `_2i6-GdwcqFw-`,
          children: L.Localize(`#YIR_TopGames_ContentRestrictionAchievements`),
        }),
      (0, H.jsxs)(`div`, {
        className: rE,
        children: [
          (0, H.jsx)(`div`, {
            className: aE,
            children: s(`#YIR_TopGames_Achievements`),
          }),
          (0, H.jsxs)(`div`, {
            className: iE,
            children: [
              m &&
                (0, H.jsx)(`a`, {
                  href: p,
                  className: `cOnRdqZh5ak-`,
                  children: L.Localize(`#YIR_SeeAllAchievements`),
                }),
              !m &&
                (0, H.jsx)(es, {
                  href: p,
                  target: `_blank`,
                  className: `cOnRdqZh5ak-`,
                  children: L.Localize(`#YIR_SeeAllAchievements`),
                }),
            ],
          }),
        ],
      }),
      (0, H.jsx)(`div`, {
        className: (0, Q.default)({ [void 0]: f, [oE]: !0 }),
        children: (0, H.jsxs)(`div`, {
          className: sE,
          children: [
            (0, H.jsxs)(`div`, {
              className: cE,
              children: [
                (0, H.jsx)(`div`, { className: lE, children: F(u) }),
                (0, H.jsx)(`div`, {
                  className: uE,
                  children: L.LocalizeReact(
                    `#YIR_UnlockedThisYear_Short`,
                    (0, H.jsx)(`br`, {}),
                  ),
                }),
              ],
            }),
            (0, H.jsx)(gE, { userUnlockedAchievements: i }),
          ],
        }),
      }),
    ],
  });
}
function gE(e) {
  let { userUnlockedAchievements: t } = e,
    n = t.appid;
  Ms(n, `Missing appid for achievements list!`);
  let r = Vh(n),
    i = (0, R.useMemo)(
      () =>
        [...(t.achievements ?? [])].sort(
          (e, t) => (e.rtime_unlocked ?? 0) - (t.rtime_unlocked ?? 0),
        ),
      [t],
    );
  return i?.length > 0
    ? (0, H.jsx)(H.Fragment, {
        children: i
          .map((e) => r.get(e.achievement_name_internal ?? ``))
          .filter((e) => !!e?.icon)
          .map((e) =>
            (0, H.jsx)(
              vE,
              { appid: n, display: e },
              `displayAch_` + e.internal_name,
            ),
          ),
      })
    : (0, H.jsx)(nn, { size: `small`, string: Dr.Localize(`#Loading`) });
}
var _E = 10;
function vE(e) {
  let { display: t, appid: n } = e,
    r = `${P.MEDIA_CDN_COMMUNITY_URL}images/apps/${n}/${t.icon}`,
    i = Number.parseFloat(`` + t.player_percent_unlocked),
    a = i < _E,
    o = t.internal_key ?? 0,
    s = {
      internal_key: o,
      api_name: t.internal_name ?? ``,
      name: t.localized_name ?? t.internal_name,
      description: t.localized_desc,
      hidden: !!t.hidden,
      archived: !!t.archived,
      icon_achieved: r,
      groupid: t.groupid,
    };
  return (0, H.jsx)(ih, {
    appid: n,
    achievement: s,
    progress: { internal_key: o, unlocked: !0, unlock_time: 0 },
    globalUnlockPercent: Number.isNaN(i) ? void 0 : i,
    isHidden: !1,
    hideUnlockLine: !0,
    children: (0, H.jsx)(`div`, {
      className: (0, Q.default)({ [fE]: a, [dE]: !0 }),
      children: (0, H.jsx)(tu, {
        imgURL: r,
        className: pE,
        alt: t.localized_name ?? t.internal_name,
        glow: a,
        hideNativeTooltip: !0,
      }),
    }),
  });
}
var yE = `l-51YapU23U-`,
  bE = `MFK0ZYn4p8Y-`,
  xE = `z5SvMUtFD4c-`,
  SE = `Pj3LFELaj0I-`;
function CE(e) {
  let { appid: t, bBlurContent: n, nYear: r } = e,
    i = Gh(t),
    [a, o] = $t(),
    s = J();
  return !i || i.length == 0
    ? null
    : (0, H.jsxs)(`div`, {
        className: (0, Q.default)(X, yE),
        children: [
          o,
          (0, H.jsx)(`div`, {
            className: bE,
            children: s(`#YIR_ScreenshotsThisYear`),
          }),
          (0, H.jsx)(`div`, {
            className: xE,
            children: i.map((e, t) =>
              (0, H.jsx)(
                TE,
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
var wE = `?imw=375&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false`;
function TE(e) {
  let {
      screenshot: t,
      fnSetExpandScreenShot: n,
      bBlurContent: r,
      nYear: i,
    } = e,
    [a, o] = (0, R.useState)(r),
    s = { backgroundImage: `url(${t.image_url + wE})` };
  return (0, H.jsxs)(`div`, {
    className: SE,
    onClick: () => {
      (a && o(!1), n());
    },
    style: s,
    children: [
      a &&
        (0, H.jsx)(`div`, {
          className: `L83TMGRMjs8-`,
          children: L.Localize(`#YIR_TopGames_ContentRestrictionScreenshots`),
        }),
      (0, H.jsx)(`img`, { alt: ``, src: KS(`screenshot_placeholder.png`) }),
    ],
  });
}
function EE(e) {
  let { userYearInReview: t } = e,
    n = t.GetTopGamesShownAppIDs(),
    r = J(),
    i = (0, R.useMemo)(() => n?.slice(0, 5), [0, 5, n]);
  if (!n || n.length == 0 || 0 > n.length) return null;
  let a = n.length > 1;
  return (0, H.jsx)(`div`, {
    className: (0, Q.default)(Sg),
    children: (0, H.jsxs)(on, {
      placeholderHeight: `100vh`,
      rootMargin: Ch,
      className: xg,
      children: [
        !!a &&
          (0, H.jsx)(`div`, {
            className: (0, Q.default)(`_4RT2F1qWDf0-`, void 0),
            children: (0, H.jsx)(`div`, {
              className: `mNRC0alPlMM-`,
              children: r(`#YIR_TopGame_mostplayed_intro`),
            }),
          }),
        i.map((e, n) =>
          (0, H.jsx)(
            $,
            {
              children: (0, H.jsx)(
                jE,
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
function DE(e) {
  let { gameSummary: t, index: n, userYearInReview: r } = e,
    i = J(),
    a = z_(),
    o = t.appid,
    s = r.GetYear();
  for (let e = s; e >= tE; --e) {
    let t = `#steamrewind${e}_gametext_appid_${o}`,
      n = a(e, t, s);
    if (n !== void 0)
      return (0, H.jsxs)(`div`, { className: Ag, children: [n, ` `] });
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
      ? (0, H.jsx)(`div`, {
          className: (0, Q.default)(Ag, void 0),
          children: i(c, r.GetYear()),
        })
      : null
  );
}
function OE(e) {
  let [t, n] = R.useState(!1),
    r = R.useRef(null),
    i = r.current,
    a = Z_();
  (R.useEffect(() => {
    (e !== null && e != i && n(!0), e === null && t && n(!1));
  }, [n, t, e, i]),
    (r.current = e));
  let o = R.useRef(void 0),
    s = R.useCallback(() => {
      ((o.current = setTimeout(() => a(e), parseInt(_g))), n(!1));
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
function kE(e) {
  return R.useCallback(
    (t) => {
      t.target == t.currentTarget && e();
    },
    [e],
  );
}
function AE(e) {
  let { userYearInReview: t } = e,
    { unAppID: n, length: r, index: i = 0 } = q_(),
    [a, o] = OE(n),
    s = kE(o),
    c = X_(i + 1),
    l = X_(i - 1),
    u = Ho();
  if (n == null && !a) return null;
  let d = (0, Q.default)(S_, a && `eAjysxH-TgY-`, u && `maE92CVTDsk-`),
    f = (0, H.jsx)(`div`, {
      className: d,
      onClick: s,
      children: (0, H.jsxs)(`div`, {
        className: w_,
        children: [
          (0, H.jsx)(`div`, {
            className: O_,
            children:
              n !== null &&
              (0, H.jsx)(jE, { unAppID: n, userYearInReview: t, index: 1 }),
          }),
          (0, H.jsx)(en, {
            index: i,
            numElements: r,
            fnForward: c,
            fnBackwards: l,
            fnClose: o,
          }),
        ],
      }),
    });
  return typeof document > `u` ? null : bu.createPortal(f, document.body);
}
var jE = R.memo(function (e) {
  let { unAppID: t, userYearInReview: n, index: r } = e,
    i = n.GetGameStats(t),
    a = Math.trunc(i?.playtime_streak?.longest_consecutive_days || 1),
    o = n.GetGameSummaryForApp(t),
    s = o ? o.parent_appid || t : 0,
    { item: c, bLoading: l } = tg(s),
    u = $T(s),
    d = ds(c ? Qt(c.info) : void 0),
    f = J(),
    p = r % 2 ? `OddGradient` : `EvenGradient`,
    m = Ho(),
    h = I_(),
    g = q(),
    _ = un(),
    { gameChartData: v, rank: ee } = (0, R.useMemo)(
      () => n.GetChartMonthlyDataForApp(t),
      [t, n],
    );
  if (l)
    return (0, H.jsx)(`div`, {
      className: (0, Q.default)(Tg, gg[p], g.TopGameBlockContainer, g[p], Eg),
      children: (0, H.jsx)(nn, { position: `center` }),
    });
  if (!c || !o) return null;
  let y = d;
  P.IN_CLIENT && (y = `steam://openurl/` + y);
  let te = v?.find((e) => e.percent > 0),
    ne = te ? te.date.getUTCMonth() : null,
    re = ne ? L.Localize(`#YIR_MonthlyCharts_MonthNoun_${ne + 1}`) : ``,
    ie = Math.trunc(o.total_sessions),
    ae = ``;
  h && m
    ? (ae = `steam://open/games/details/${t}`)
    : h && !P.IN_MOBILE_WEBVIEW && (ae = `steam://open/library/details/${t}`);
  let oe = c.info.name ?? ``,
    se = oe;
  return (
    o.demo
      ? (se = L.Localize(`#YIR_GameName_PlusDemo`, se))
      : o.playtest && (se = L.Localize(`#YIR_GameName_PlusPlaytest`, se)),
    (0, H.jsxs)($, {
      className: (0, Q.default)(Tg, gg[p], g.TopGameBlockContainer, g[p]),
      children: [
        (0, H.jsx)(NE, { item: c }),
        (0, H.jsxs)(`div`, {
          className: Og,
          children: [
            (0, H.jsx)(ME, { item: c }),
            (0, H.jsxs)(`div`, {
              className: (0, Q.default)(X, Rg),
              children: [
                (0, H.jsxs)(`div`, {
                  className: zg,
                  children: [
                    (0, H.jsxs)(w, {
                      className: Bg,
                      "flow-children": `row`,
                      children: [
                        _ &&
                          (0, H.jsx)(`a`, {
                            href: y,
                            className: `_3zY6l-RwMbM-`,
                            children: L.Localize(`#YIR_TopGames_VisitInStore`),
                          }),
                        !_ &&
                          (0, H.jsx)(es, {
                            href: y,
                            target: `_blank`,
                            className: `_3zY6l-RwMbM-`,
                            children: L.Localize(`#YIR_TopGames_VisitInStore`),
                          }),
                        !!ae &&
                          (0, H.jsx)(es, {
                            href: ae,
                            className: `_3zY6l-RwMbM-`,
                            children: L.Localize(
                              `#YIR_TopGames_VisitInLibrary`,
                            ),
                          }),
                        !h && (0, H.jsx)(FE, { appID: s }),
                      ],
                    }),
                    (0, H.jsx)(`div`, {
                      className: (0, Q.default)({
                        [jg]: !0,
                        [Ug]: (se?.length ?? 0) > 25,
                      }),
                      children: se,
                    }),
                    (0, H.jsx)(DE, {
                      gameSummary: o,
                      userYearInReview: n,
                      index: r,
                    }),
                    (0, H.jsxs)(`div`, {
                      className: Mg,
                      children: [
                        !!o.total_playtime_percentagex100 &&
                          (0, H.jsxs)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: [
                              (0, H.jsx)(`div`, {
                                className: `Jsbe84OZILs-`,
                                children: Y(
                                  Math.ceil(o.total_playtime_percentagex100),
                                ),
                              }),
                              (0, H.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: L.Localize(
                                  `#YIR_Game_PercentPlaytime`,
                                ),
                              }),
                            ],
                          }),
                        !!o.total_sessions &&
                          (0, H.jsxs)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: [
                              (0, H.jsx)(`div`, {
                                className: `Jsbe84OZILs-`,
                                children: F(ie),
                              }),
                              (0, H.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: L.Localize(
                                  ie == 1
                                    ? `#YIR_Game_PlaySession_Singular`
                                    : `#YIR_Game_PlaySessions`,
                                ),
                              }),
                            ],
                          }),
                        !ch() &&
                          a > 1 &&
                          (0, H.jsx)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: (0, H.jsxs)(Ma, {
                              toolTipContent: L.LocalizeReact(
                                `#YIR_Game_LongestStreak_ttip`,
                              ),
                              children: [
                                (0, H.jsx)(`div`, {
                                  className: `Jsbe84OZILs-`,
                                  children: F(a),
                                }),
                                (0, H.jsx)(`div`, {
                                  className: `ao7jCFf5gSI-`,
                                  children: L.Localize(
                                    `#YIR_Game_LongestStreak`,
                                  ),
                                }),
                              ],
                            }),
                          }),
                        !!o?.new_this_year &&
                          (0, H.jsx)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: (0, H.jsxs)(Ma, {
                              toolTipContent: f(
                                `#YIR_TopGames_NewThisYEar_ttip`,
                              ),
                              children: [
                                (0, H.jsx)(`div`, {
                                  className: `Jsbe84OZILs-`,
                                  children: (0, H.jsx)(Yo, {}),
                                }),
                                (0, H.jsx)(`div`, {
                                  className: `ao7jCFf5gSI-`,
                                  children: L.Localize(
                                    `#YIR_TopGames_NewThisYEar`,
                                  ),
                                }),
                              ],
                            }),
                          }),
                        !!u &&
                          (0, H.jsxs)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: [
                              (0, H.jsx)(`div`, {
                                className: `Jsbe84OZILs-`,
                                children: (0, H.jsx)(Ta, {}),
                              }),
                              (0, H.jsx)(`div`, {
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
                  (0, H.jsxs)(`div`, {
                    className: (0, Q.default)(`v6AigbmQ0CY-`, `AJaOL928lBE-`),
                    children: [
                      (0, H.jsx)(`div`, {
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
                      (0, H.jsx)(`div`, {
                        className: `xPrgBVyuYEE-`,
                        children: (0, H.jsx)(qT, {
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
        (0, H.jsx)(PE, { appid: s, userYearInReview: n, item: c }),
      ],
    })
  );
});
function ME(e) {
  let { item: t } = e,
    n = L_(t.info),
    r = ar(t.assets, `library_hero`);
  return (0, H.jsx)(`div`, {
    className: Lg,
    style: n ? void 0 : { backgroundImage: `url(${r})` },
  });
}
function NE(e) {
  let { item: t } = e,
    n = q(),
    r = L_(t.info),
    i = ar(t.assets, `library_hero`);
  return (0, H.jsx)(H.Fragment, {
    children: (0, H.jsx)(`div`, {
      className: (0, Q.default)(Fg, n.BackgroundImageFull),
      style: r ? void 0 : { backgroundImage: `url(${i})` },
    }),
  });
}
function PE(e) {
  let { appid: t, userYearInReview: n, item: r } = e,
    i = L_(r.info);
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(mE, { bBlurContent: i, appid: t, userYearInReview: n }),
      (0, H.jsx)(CE, { bBlurContent: i, appid: t, nYear: n.GetYear() }),
    ],
  });
}
function FE(e) {
  let { appID: t } = e,
    n = Xt(t),
    r = Fc(t),
    { bIsOwned: i } = Jt(n),
    a = ao(),
    { mutate: o } = Yt(t, !r, a);
  return !M.logged_in || i
    ? null
    : (0, H.jsxs)(w, {
        className: (0, Q.default)(Hg),
        onActivate: (e) => {
          (e.preventDefault(), e.stopPropagation(), o());
        },
        children: [
          r ? (0, H.jsx)(hi, {}) : (0, H.jsx)(Es, {}),
          Dr.Localize(r ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`),
        ],
      });
}
function IE(e) {
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
      ? (0, H.jsx)(WE, {
          message: L.Localize(`#YIR_Error_NoShareNoGameplayNotUser`),
        })
      : !n || !r
        ? (0, H.jsx)(WE, { message: L.Localize(`#YIR_Error_NoData`) })
        : (0, H.jsx)(Qh.Provider, {
            value: t,
            children: (0, H.jsx)(w, {
              navRef: a,
              children: (0, H.jsx)(LE, { steamid: n, year: r }),
            }),
          })
  );
}
function LE(e) {
  let { steamid: t, year: n } = e,
    r = new Xa(t),
    [i, a] = su(r.GetAccountID()),
    { userYearInReview: o, isLoading: s } = kh(t, n),
    { isLoading: c, isError: l } = ng(o?.GetTopGamesShownAppIDs() ?? []),
    u = mg();
  if (a || s || c || !u)
    return (0, H.jsx)(nn, {
      string: Dr.Localize(`#Loading`),
      position: `center`,
    });
  if (!i || !r.BIsIndividualAccount())
    return (0, H.jsx)(WE, { message: L.Localize(`#YIR_Error_NoUser`) });
  if (!o || l)
    return (0, H.jsx)(WE, { message: L.Localize(`#YIR_Error_PageLoadFailed`) });
  let d = !o.GetPlayTimeStats()?.game_summary?.length;
  return M.steamid !== i.steamid && d
    ? (0, H.jsx)(WE, {
        message: L.Localize(`#YIR_Error_NoShareNoGameplayNotUser`),
      })
    : d
      ? (0, H.jsx)(WE, { message: L.Localize(`#YIR_Error_NoShareNoGameplay`) })
      : (0, H.jsx)(w, {
          autoFocus: !0,
          noFocusRing: !0,
          focusable: !1,
          scrollIntoViewType: yi.NoTransformSparseContent,
          children: (0, H.jsx)(`div`, {
            className: $_,
            children: (0, H.jsx)(zE, {
              userYearInReview: o,
              avatarAndPersona: i,
            }),
          }),
        });
}
function RE(e) {
  let {
      viewAsUser: t,
      avatarAndPersona: n,
      userYearInReview: r,
      themeYear: i,
      children: a,
    } = e,
    o = cu(i),
    s = Ll(),
    c = r.GetSteamID(),
    l = r.GetYear(),
    u = R.useMemo(() => Mh(s, c, l), [s, c, l]),
    d = R.useMemo(
      () => ({
        bIsUser: t,
        persona_name: n.persona_name,
        avatar_url: n.avatar_url,
        themeStyle: o,
      }),
      [t, n.persona_name, n.avatar_url, o],
    );
  return (0, H.jsx)(F_.Provider, {
    value: d,
    children: (0, H.jsx)(Hn, {
      eAdultOnlyMediaBehavior: t ? `allowed` : `masked`,
      children: (0, H.jsx)(Nh.Provider, {
        value: u,
        children: (0, H.jsx)(G_, { children: a }),
      }),
    }),
  });
}
function zE(e) {
  let { userYearInReview: t, avatarAndPersona: n } = e,
    r = t.GetYear(),
    i = M.logged_in && M.steamid === n.steamid,
    [a, o] = (0, R.useState)(i),
    [s, c] = (0, R.useState)(r);
  return (0, H.jsxs)(RE, {
    viewAsUser: a,
    userYearInReview: t,
    avatarAndPersona: n,
    themeYear: s,
    children: [
      (0, H.jsx)(UE, {
        viewAsUser: a,
        setViewAsUser: o,
        themeYear: s,
        setThemeYear: c,
      }),
      (0, H.jsx)(BE, { ...e, viewAsUser: a }),
    ],
  });
}
function BE(e) {
  let { userYearInReview: t, viewAsUser: n } = e,
    r = t.GetSteamID(),
    i = t.GetYear();
  Lh(t);
  let { persona_name: a } = (0, R.useContext)(F_),
    o = t.GetPlayTimeStats().game_summary?.length;
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(HE, { userYearInReview: t }),
      (0, H.jsx)(j, {
        children: (0, H.jsxs)(Xb, {
          userYearInReview: t,
          children: [
            (0, H.jsx)(bT, { userYearInReview: t }),
            o === 1 && (0, H.jsx)(EE, { userYearInReview: t }),
          ],
        }),
      }),
      (0, H.jsx)(j, { children: (0, H.jsx)(ES, { userYearInReview: t }) }),
      typeof o == `number` &&
        o > 1 &&
        (0, H.jsxs)(H.Fragment, {
          children: [
            (0, H.jsx)(EE, { userYearInReview: t }),
            (0, H.jsx)(`div`, {
              className: `xan-F7AKHTg-`,
              children: (0, H.jsx)(j, {
                children: (0, H.jsx)(QT, { userYearInReview: t }),
              }),
            }),
          ],
        }),
      (0, H.jsx)(`div`, {
        className: sy,
        children: (0, H.jsx)(j, {
          children: (0, H.jsx)(iC, { userYearInReview: t }),
        }),
      }),
      !!t.GetPlayTimeStats().playtime_streak &&
        (0, H.jsx)(j, { children: (0, H.jsx)(TC, { userYearInReview: t }) }),
      typeof o == `number` &&
        o > 5 &&
        (0, H.jsx)(j, {
          children: (0, H.jsx)(mb, { userYearInReview: t, nYear: i }),
        }),
      (0, H.jsx)(j, {
        children: (0, H.jsxs)(`div`, {
          className: Ey,
          children: [
            (0, H.jsx)(Xb, {
              userYearInReview: t,
              children: (0, H.jsx)(GE, { playerName: a, userYearInReview: t }),
            }),
            n &&
              (0, H.jsxs)(`div`, {
                className: `GQ15KBYq0dM-`,
                children: [
                  (0, H.jsx)(`div`, {
                    className: `aXiQBfYGO9I-`,
                    children: L.Localize(`#YIR_ShareOptionsTitle`),
                  }),
                  (0, H.jsxs)(w, {
                    className: `QsTph6fo6tE-`,
                    children: [
                      (0, H.jsxs)(`div`, {
                        className: (0, Q.default)(`PmXhnAChGR0-`),
                        children: [
                          (0, H.jsx)(`div`, {
                            className: `smzKi1RTbdQ-`,
                            children: L.Localize(`#YIR_ShareModal_TitleSocial`),
                          }),
                          (0, H.jsx)(sT, { steamid: r, nYear: i }),
                        ],
                      }),
                      (0, H.jsxs)(`div`, {
                        className: (0, Q.default)(`PmXhnAChGR0-`),
                        children: [
                          (0, H.jsx)(`div`, {
                            className: `smzKi1RTbdQ-`,
                            children: L.Localize(
                              `#YIR_ShareModal_TitleProfile`,
                            ),
                          }),
                          (0, H.jsxs)(es, {
                            href: `${P.COMMUNITY_BASE_URL}profiles/${M.steamid}/edit/showcases`,
                            className: (0, Q.default)(`j8A4NpxJ0t0-`),
                            children: [
                              (0, H.jsx)(jl, { className: `uc6rSxuiYYU-` }),
                              (0, H.jsx)(`span`, {
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
      (0, H.jsx)(j, { children: (0, H.jsx)(VS, { userYearInReview: t }) }),
      (0, H.jsx)(j, { children: (0, H.jsx)(NC, { steamid: r, year: i }) }),
      (0, H.jsx)(j, { children: (0, H.jsx)(KE, { year: i }) }),
      (0, H.jsx)(j, { children: (0, H.jsx)(AE, { userYearInReview: t }) }),
    ],
  });
}
function VE() {
  let e = q(),
    { persona_name: t, avatar_url: n } = (0, R.useContext)(F_);
  return (0, H.jsxs)(`div`, {
    className: sv,
    children: [
      (0, H.jsx)(ql, {
        strAvatarURL: n.replace(/\.jpg$/, `_full.jpg`),
        className: cv,
      }),
      (0, H.jsx)(`span`, {
        className: (0, Q.default)(lv, e.UserName),
        children: L.Localize(`#YearInReview_PossessiveUserName`, t),
      }),
    ],
  });
}
function HE(e) {
  let { userYearInReview: t } = e,
    n = t.GetSteamID(),
    r = t.GetYear();
  return (0, H.jsx)(`div`, {
    className: (0, Q.default)(X, ev),
    children: (0, H.jsxs)(`div`, {
      className: av,
      children: [
        (0, H.jsx)(`div`, {
          className: ov,
          children: L.LocalizeReact(
            `#YearInReview_SteamRewindHeader`,
            (0, H.jsx)(VE, {}),
            Dr.Localize(`#date_year`, r, ` `),
          ),
        }),
        M.logged_in &&
          (0, H.jsx)(`div`, {
            className: `-vTPvlHUL7g-`,
            children: (0, H.jsx)(`div`, {
              className: (0, Q.default)(`PmXhnAChGR0-`),
              children: (0, H.jsx)(j, {
                children: (0, H.jsx)(sT, { steamid: n, nYear: r }),
              }),
            }),
          }),
      ],
    }),
  });
}
function UE(e) {
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
    s = Ho(),
    { bAllowDevToggles: c } = $h();
  return !c || s
    ? null
    : (0, H.jsxs)(`div`, {
        className: (0, Q.default)(py, rn),
        children: [
          (0, H.jsx)(`div`, {
            children: `Debug Only: Toggle First Person View`,
          }),
          (0, H.jsx)(nr, { onChange: n, checked: t }),
          (0, H.jsx)(`div`, {
            children: `Debug Only: Change to view the contents in the css style of a different year`,
          }),
          (0, H.jsx)(rc, { rgOptions: a, selectedOption: r, onChange: o }),
        ],
      });
}
function WE(e) {
  let { message: t } = e;
  return (0, H.jsxs)(`div`, {
    className: my,
    children: [
      (0, H.jsx)(`div`, { className: gy }),
      (0, H.jsxs)(`div`, {
        className: (0, Q.default)($_, vy),
        children: [
          (0, H.jsx)(`div`, { className: dv, children: t }),
          (0, H.jsx)(`div`, {}),
        ],
      }),
    ],
  });
}
function GE(e) {
  let { userYearInReview: t } = e,
    n = q();
  if (!M.is_support && M.accountid != t.GetAccountID()) return null;
  let r = t.GetYear();
  return (0, H.jsx)(`div`, {
    className: (0, Q.default)(X, by),
    children: (0, H.jsx)(`div`, {
      className: dv,
      children: L.LocalizeReact(
        `#YIR_Conclusion`,
        (0, H.jsx)(`span`, {
          className: (0, Q.default)(void 0, n.ConclusionName),
          children: e.playerName,
        }),
        r,
      ),
    }),
  });
}
function KE(e) {
  let { year: t } = e;
  return (0, H.jsxs)(`div`, {
    className: (0, Q.default)(void 0, Sy),
    children: [
      (0, H.jsx)(`div`, {
        className: dv,
        children: L.Localize(`#YIR_FAQ_Title`),
      }),
      (0, H.jsxs)(`div`, {
        className: xy,
        children: [
          (0, H.jsxs)(`div`, {
            className: Cy,
            children: [
              (0, H.jsx)(`div`, {
                className: wy,
                children: L.Localize(`#YIR_FAQ_Dates_Q`),
              }),
              (0, H.jsx)(`div`, {
                className: Ty,
                children: L.Localize(`#YIR_FAQ_Dates_A`, t),
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Cy,
            children: [
              (0, H.jsx)(`div`, {
                className: wy,
                children: L.Localize(`#YIR_FAQ_Offline_Q`),
              }),
              (0, H.jsx)(`div`, {
                className: Ty,
                children: L.Localize(`#YIR_FAQ_Offline_A`),
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Cy,
            children: [
              (0, H.jsx)(`div`, {
                className: wy,
                children: L.Localize(`#YIR_FAQ_Types_Q`),
              }),
              (0, H.jsx)(`div`, {
                className: Ty,
                children: L.Localize(`#YIR_FAQ_Types_A`),
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Cy,
            children: [
              (0, H.jsx)(`div`, {
                className: wy,
                children: L.Localize(`#YIR_FAQ_Share_Q`),
              }),
              (0, H.jsxs)(`div`, {
                className: Ty,
                children: [
                  L.Localize(`#YIR_FAQ_Share_A`),
                  (0, H.jsxs)(`ol`, {
                    children: [
                      (0, H.jsx)(`li`, {
                        children: L.Localize(`#YIR_FAQ_Share_A_b1`),
                      }),
                      (0, H.jsx)(`li`, {
                        children: L.Localize(`#YIR_FAQ_Share_A_b2`),
                      }),
                      (0, H.jsx)(`li`, {
                        children: L.Localize(`#YIR_FAQ_Share_A_b3`),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Cy,
            children: [
              (0, H.jsx)(`div`, {
                className: wy,
                children: L.Localize(`#YIR_FAQ_ShareFamily_Q`),
              }),
              (0, H.jsx)(`div`, {
                className: Ty,
                children: L.Localize(`#YIR_FAQ_ShareFamily_A`),
              }),
            ],
          }),
          (0, H.jsxs)(`div`, {
            className: Cy,
            children: [
              (0, H.jsx)(`div`, {
                className: wy,
                children: L.Localize(`#YIR_FAQ_Controller_Q`),
              }),
              (0, H.jsx)(`div`, {
                className: Ty,
                children: L.Localize(`#YIR_FAQ_Controller_A1`),
              }),
              (0, H.jsx)(`br`, {}),
              (0, H.jsx)(`div`, {
                className: Ty,
                children: L.Localize(`#YIR_FAQ_Controller_A2`),
              }),
            ],
          }),
          t == 2022
            ? (0, H.jsxs)(`div`, {
                className: Cy,
                children: [
                  (0, H.jsx)(`div`, {
                    className: wy,
                    children: L.Localize(`#YIR_FAQ_PrivateApps_Q`),
                  }),
                  (0, H.jsx)(`div`, {
                    className: Ty,
                    children: L.Localize(`#YIR_FAQ_PrivateApps_A`, t),
                  }),
                ],
              })
            : (0, H.jsxs)(`div`, {
                className: Cy,
                children: [
                  (0, H.jsx)(`div`, {
                    className: wy,
                    children: L.Localize(`#YIR_FAQ_PrivateApps_v2_Q`),
                  }),
                  (0, H.jsx)(`div`, {
                    className: Ty,
                    children: L.Localize(`#YIR_FAQ_PrivateApps_v2_A`, t),
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
var qE = { Home: (e, t) => `${Ya.YearInReview(e, t)}` };
function JE(e) {
  return (0, H.jsx)(rs, {
    domain: `store.steampowered.com`,
    controller: `yearinreview`,
    children: (0, H.jsx)(r, {
      children: (0, H.jsx)(s, {
        path: `${qE.Home(`:steamId?`, `:year?`)}`,
        render: (e) =>
          (0, H.jsx)(rs, {
            method: `yearinreview`,
            children: (0, H.jsx)(j, {
              children: (0, H.jsx)(YE, {
                steamId: e.match.params.steamId,
                year: e.match.params.year,
              }),
            }),
          }),
      }),
    }),
  });
}
function YE(e) {
  let { steamId: t, year: n } = e,
    r = p(),
    i = R.useMemo(() => XE(t, n), [t, n]);
  return (R.useMemo(() => ZE(r, i), [r, i]), (0, H.jsx)(IE, { pageData: i }));
}
function XE(e, t) {
  let n = e == `my` ? M.steamid : e || ``,
    r = parseInt(t ?? ``),
    i = n ? new Xa(n).GetAccountID() : 0,
    a =
      M.is_support &&
      !!ol(`localization_advanced_access`, `application_config`);
  return {
    steamid: n,
    nYear: r,
    eResult: Number.parseInt(ol(`yearinreview_eresults`, `application_config`)),
    rgOtherYears:
      ol(`yearinreview_otheryears_${i}_${r}`, `application_config`) ?? [],
    bLocalizationAdvancedAccess: a,
    bAllowDevToggles: a,
  };
}
function ZE(e, t) {
  let { steamid: n, nYear: r } = t;
  if (!n || !r) return;
  let i = new Xa(n),
    a = Eh(i.ConvertTo64BitString(), r);
  if (e.getQueryData(a)) return;
  let o = ol(`yearinreview_${i.GetAccountID()}_${r}`, `application_config`);
  QE(o) &&
    e.setQueryData(
      a,
      Th(1, {
        stats: o,
        percentiles: ol(`yearinreview_${r}_percentiles`, `application_config`),
        distribution: ol(
          `yearinreview_${r}_distribution`,
          `application_config`,
        ),
        previous_year_summary: ol(
          `yearinreview_${r}_previous_year_summary`,
          `application_config`,
        ),
      }),
    );
}
function QE(e) {
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
export { qE as YearInReviewRoutes, JE as default };
