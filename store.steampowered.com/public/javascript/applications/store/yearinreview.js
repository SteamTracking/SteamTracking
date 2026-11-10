/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t } from "./rolldown-runtime.js";
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
} from "./libraries.js";
import { V as m } from "./storelink.js";
import {
  $n as h,
  $t as g,
  An as _,
  Ar as v,
  At as y,
  Bn as b,
  Bt as x,
  Cn as ee,
  Ct as te,
  Dn as ne,
  Dt as re,
  En as ie,
  Et as ae,
  Fn as oe,
  Ft as se,
  Gn as ce,
  Gt as le,
  Hn as ue,
  Ht as de,
  In as fe,
  It as pe,
  Jn as S,
  Jt as me,
  Kn as C,
  Kt as he,
  Ln as ge,
  Lt as _e,
  Mn as ve,
  Mt as ye,
  Nn as be,
  Nt as xe,
  On as Se,
  Or as Ce,
  Ot as we,
  Pn as Te,
  Pt as Ee,
  Qn as De,
  Qt as Oe,
  Rn as ke,
  Rt as Ae,
  Sn as je,
  St as Me,
  Tn as Ne,
  Tt as Pe,
  Un as Fe,
  Ut as Ie,
  Vn as Le,
  Vt as Re,
  Wn as ze,
  Wt as Be,
  Xn as Ve,
  Xt as He,
  Yn as Ue,
  Yt as We,
  Zn as Ge,
  Zt as Ke,
  _n as qe,
  _t as Je,
  an as Ye,
  ar as Xe,
  bn as Ze,
  bt as Qe,
  cn as $e,
  cr as et,
  dn as tt,
  dr as nt,
  dt as rt,
  en as it,
  er as at,
  fn as ot,
  fr as st,
  ft as ct,
  gn as lt,
  gt as ut,
  hn as dt,
  ht as ft,
  in as pt,
  ir as mt,
  ja as ht,
  jn as gt,
  jt as _t,
  kn as vt,
  kt as yt,
  ln as bt,
  lr as xt,
  mn as St,
  mt as Ct,
  nn as wt,
  nr as Tt,
  on as Et,
  or as Dt,
  pn as Ot,
  pt as kt,
  qn as At,
  qt as jt,
  rn as Mt,
  rr as Nt,
  sn as Pt,
  sr as Ft,
  tn as It,
  tr as Lt,
  tt as Rt,
  un as zt,
  ur as Bt,
  vn as Vt,
  vt as Ht,
  wn as Ut,
  wt as Wt,
  xn as Gt,
  xt as Kt,
  yn as qt,
  yt as Jt,
  zn as Yt,
  zt as Xt,
} from "./saletags.js";
import { t as Zt } from "./storeurl.js";
import { a as Qt, i as $t } from "./image.js";
import { t as en } from "./usehotkeys.js";
import "./modals.js";
import { t as tn } from "./throbber.js";
import { t as nn } from "./languagepicker.js";
import { N as rn } from "./partnereventshared.module.js";
import { n as an } from "./lazyrenderchildren.js";
import { t as on } from "./sharewithfriends.js";
import { n as sn } from "./getprofileurl.js";
import {
  $_ as cn,
  $b as ln,
  $d as un,
  $f as dn,
  $g as fn,
  $h as pn,
  $i as mn,
  $m as hn,
  $p as gn,
  $x as w,
  A_ as _n,
  Ac as T,
  Ad as vn,
  Af as yn,
  Ag as bn,
  Ah as xn,
  Ai as Sn,
  Am as Cn,
  Ap as wn,
  Av as Tn,
  B_ as En,
  Bb as Dn,
  Bd as On,
  Bf as kn,
  Bg as An,
  Bh as jn,
  Bm as Mn,
  Bp as Nn,
  Br as Pn,
  C_ as Fn,
  Cb as E,
  Cc as In,
  Cd as Ln,
  Cf as Rn,
  Cg as zn,
  Ch as Bn,
  Cm as Vn,
  Cp as Hn,
  D_ as Un,
  Dd as Wn,
  Df as Gn,
  Dh as Kn,
  Dm as qn,
  Dn as Jn,
  Dp as Yn,
  Dx as Xn,
  E_ as Zn,
  Ec as Qn,
  Ed as $n,
  Ef as er,
  Eg as tr,
  Eh as nr,
  Em as rr,
  Ep as ir,
  Ev as ar,
  F_ as or,
  Fd as sr,
  Ff as cr,
  Fg as lr,
  Fh as ur,
  Fm as dr,
  Fp as fr,
  G_ as pr,
  Gd as mr,
  Gf as hr,
  Gg as gr,
  Gh as _r,
  Gm as vr,
  Gp as yr,
  Gu as br,
  H_ as xr,
  Hd as Sr,
  Hf as Cr,
  Hg as wr,
  Hh as Tr,
  Hm as Er,
  Hp as Dr,
  Hr as Or,
  Hs as kr,
  I_ as Ar,
  Id as jr,
  If as Mr,
  Ig as Nr,
  Ih as Pr,
  Im as Fr,
  Ip as Ir,
  J_ as Lr,
  Jd as Rr,
  Jf as zr,
  Jg as Br,
  Jh as Vr,
  Jm as Hr,
  Jp as Ur,
  Ju as Wr,
  Jx as Gr,
  K_ as Kr,
  Kb as D,
  Kd as qr,
  Kf as Jr,
  Kg as Yr,
  Kh as Xr,
  Ki as Zr,
  Km as Qr,
  Kp as $r,
  L_ as ei,
  Ld as ti,
  Lf as ni,
  Lg as ri,
  Lh as ii,
  Li as ai,
  Lm as oi,
  Lp as si,
  Lr as ci,
  Lu as li,
  Ly as ui,
  M_ as di,
  Md as fi,
  Mg as pi,
  Mh as mi,
  Mm as hi,
  Mp as gi,
  N_ as _i,
  Nd as vi,
  Nf as yi,
  Ng as bi,
  Nh as xi,
  Nm as Si,
  Nn as Ci,
  Np as wi,
  O_ as Ti,
  Od as Ei,
  Of as Di,
  Og as Oi,
  Oh as ki,
  Om as Ai,
  Oo as ji,
  Op as Mi,
  P_ as Ni,
  Pd as Pi,
  Pf as Fi,
  Pg as Ii,
  Ph as Li,
  Pm as Ri,
  Pp as zi,
  Q_ as Bi,
  Qd as Vi,
  Qf as Hi,
  Qg as Ui,
  Qh as Wi,
  Qm as Gi,
  Qp as Ki,
  Qx as O,
  R_ as qi,
  Rd as Ji,
  Rf as Yi,
  Rg as Xi,
  Rh as Zi,
  Rm as Qi,
  Rp as $i,
  S_ as ea,
  Sb as ta,
  Sf as na,
  Sg as ra,
  Sh as ia,
  Sm as aa,
  Sp as oa,
  St as sa,
  T_ as ca,
  Td as la,
  Tf as ua,
  Tg as da,
  Th as fa,
  Tm as pa,
  Tp as ma,
  U_ as ha,
  Ub as k,
  Ud as ga,
  Uf as _a,
  Ug as va,
  Uh as ya,
  Um as ba,
  Up as xa,
  V_ as Sa,
  Vd as Ca,
  Vf as wa,
  Vg as Ta,
  Vh as Ea,
  Vi as Da,
  Vm as Oa,
  Vp as ka,
  W_ as Aa,
  Wd as ja,
  Wf as Ma,
  Wg as Na,
  Wh as Pa,
  Wm as Fa,
  Wp as Ia,
  Wu as La,
  X_ as Ra,
  Xb as za,
  Xd as Ba,
  Xf as Va,
  Xg as Ha,
  Xh as Ua,
  Xi as Wa,
  Xm as Ga,
  Xp as Ka,
  Xx as A,
  Y_ as qa,
  Yc as j,
  Yd as Ja,
  Yf as Ya,
  Yg as Xa,
  Yh as Za,
  Ym as Qa,
  Yp as $a,
  Yu as eo,
  Z_ as to,
  Zd as no,
  Zf as ro,
  Zg as io,
  Zh as ao,
  Zi as M,
  Zm as oo,
  Zp as so,
  Zx as N,
  __ as co,
  _c as lo,
  _f as uo,
  _g as fo,
  _h as po,
  _m as mo,
  _p as ho,
  _r as go,
  _t as _o,
  a_ as vo,
  af as yo,
  ag as bo,
  ah as xo,
  am as So,
  ap as Co,
  ay as wo,
  b_ as To,
  bc as Eo,
  bd as Do,
  bf as Oo,
  bg as ko,
  bh as Ao,
  bm as jo,
  bp as Mo,
  bt as No,
  c_ as Po,
  cc as Fo,
  cf as Io,
  cg as Lo,
  ch as Ro,
  cm as zo,
  cp as Bo,
  d_ as Vo,
  df as Ho,
  dg as Uo,
  dh as Wo,
  dm as Go,
  dp as Ko,
  eS as P,
  e_ as qo,
  ef as Jo,
  eg as Yo,
  eh as Xo,
  em as Zo,
  ep as Qo,
  ev as $o,
  f_ as es,
  ff as ts,
  fg as ns,
  fh as rs,
  fm as is,
  fp as as,
  fv as os,
  g_ as ss,
  gf as cs,
  gg as ls,
  gh as us,
  gm as ds,
  gp as fs,
  gx as ps,
  hS as ms,
  h_ as hs,
  hf as gs,
  hg as _s,
  hh as vs,
  hl as ys,
  hm as bs,
  hp as xs,
  ht as Ss,
  i_ as Cs,
  if as ws,
  ig as Ts,
  ih as Es,
  im as Ds,
  ip as Os,
  j_ as ks,
  jd as As,
  jf as js,
  jg as Ms,
  jh as Ns,
  jm as Ps,
  jp as Fs,
  k_ as Is,
  kd as Ls,
  kf as Rs,
  kg as zs,
  kh as Bs,
  km as Vs,
  kp as Hs,
  l_ as Us,
  lf as Ws,
  lg as Gs,
  lh as Ks,
  lm as qs,
  lp as Js,
  m_ as Ys,
  md as Xs,
  mg as Zs,
  mh as Qs,
  ml as $s,
  mp as ec,
  nS as F,
  n_ as tc,
  ng as nc,
  nh as rc,
  nm as ic,
  np as ac,
  o_ as oc,
  of as sc,
  og as cc,
  oh as lc,
  om as uc,
  oo as dc,
  op as fc,
  ov as pc,
  p_ as mc,
  pd as hc,
  pf as gc,
  pg as _c,
  ph as vc,
  pm as yc,
  pp as bc,
  q_ as xc,
  qd as Sc,
  qf as Cc,
  qg as wc,
  qh as Tc,
  qm as Ec,
  qn as Dc,
  qp as Oc,
  rS as I,
  r_ as kc,
  rf as Ac,
  rg as jc,
  rh as Mc,
  rl as Nc,
  rm as Pc,
  rp as Fc,
  s_ as Ic,
  sf as Lc,
  sg as Rc,
  sh as zc,
  sm as Bc,
  sp as Vc,
  tS as L,
  t_ as Hc,
  tf as Uc,
  tg as Wc,
  th as Gc,
  tm as Kc,
  tp as qc,
  ts as Jc,
  uS as Yc,
  u_ as Xc,
  uf as Zc,
  ug as Qc,
  uh as $c,
  um as el,
  up as tl,
  us as nl,
  ut as rl,
  uv as il,
  v_ as al,
  vc as ol,
  vf as sl,
  vg as cl,
  vh as ll,
  vm as ul,
  vp as dl,
  vv as fl,
  w_ as pl,
  wb as ml,
  wc as hl,
  wd as gl,
  wf as _l,
  wg as vl,
  wm as yl,
  wp as bl,
  x_ as xl,
  xf as Sl,
  xg as Cl,
  xh as wl,
  xm as Tl,
  xp as El,
  y_ as Dl,
  yf as Ol,
  yg as kl,
  yh as Al,
  ym as jl,
  yp as Ml,
  z_ as Nl,
  za as Pl,
  zb as Fl,
  zd as Il,
  zf as Ll,
  zg as Rl,
  zh as zl,
  zp as Bl,
  zr as Vl,
  zv as Hl,
} from "./main.js";
import { y as Ul } from "./steammessages_familygroups_pb.js";
import { t as Wl } from "./steamavatar.js";
import { t as Gl } from "./videoautopauseonblur.js";
import { i as Kl, n as ql } from "./achievementiconbase.js";
import { r as Jl, t as Yl } from "./useavatarandpersona.js";
import { n as R, r as Xl, t as Zl } from "./localization.js";
import { t as Ql } from "./userprofile.js";
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
      return z.createElement(De, {
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
          u = st({
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
            Ge(this.props, e, n),
          ),
          z.createElement(
            Ft,
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
  return S(ce);
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
    r = Ue(t, e.payloadUniqBy, vu),
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
  var t = At();
  return (
    (0, z.useEffect)(() => {
      t(ie(e));
    }, [t, e]),
    null
  );
}
function Su(e) {
  var t = At();
  return (
    (0, z.useEffect)(
      () => (
        t(ne(e)),
        () => {
          t(ne({ width: 0, height: 0 }));
        }
      ),
      [t, e],
    ),
    null
  );
}
function Cu(e) {
  var t = su(),
    n = Xe(),
    r = gt(),
    { width: i, height: a, wrapperStyle: o, portal: s } = e,
    [c, l] = ze([t]),
    u = _(),
    d = vt();
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
    return e === `vertical` && Tt(t)
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
    var o = st(`recharts-polygon`, n);
    if (r && r.length) {
      var s = a.stroke && a.stroke !== `none`,
        c = Mu(t, r, i);
      return z.createElement(
        `g`,
        { className: o },
        z.createElement(
          `path`,
          Eu({}, et(a), {
            fill: c.slice(-1) === `Z` ? a.fill : `none`,
            stroke: `none`,
            d: c,
          }),
        ),
        s
          ? z.createElement(
              `path`,
              Eu({}, et(a), { fill: `none`, d: ju(t, i) }),
            )
          : null,
        s
          ? z.createElement(
              `path`,
              Eu({}, et(a), { fill: `none`, d: ju(r, i) }),
            )
          : null,
      );
    }
    var l = ju(t, i);
    return z.createElement(
      `path`,
      Eu({}, et(a), {
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
      a = st(`recharts-dot`, i);
    return t === +t && n === +n && r === +r
      ? z.createElement(
          `circle`,
          Pu({}, Bt(e), Ve(e), { className: a, cx: t, cy: n, r }),
        )
      : null;
  },
  Iu = (e) => e.graphicalItems.polarItems,
  Lu = C([ot, tt], Mt),
  Ru = C([Iu, Et, Lu], g),
  zu = C([Ru], Oe),
  Bu = C([zu, Ze], We),
  Vu = C([Bu, Et, Ru], Be);
C([Bu, Et, Ru], (e, t, n) =>
  n.length > 0
    ? e
        .flatMap((e) =>
          n.flatMap((n) => ({
            value: ke(e, t.dataKey ?? n.dataKey),
            errorDomain: [],
          })),
        )
        .filter(Boolean)
    : t?.dataKey == null
      ? e.map((e) => ({ value: e, errorDomain: [] }))
      : e.map((e) => ({ value: ke(e, t.dataKey), errorDomain: [] })),
);
var Hu = () => void 0,
  Uu = C([Bu, Et, Ru, pt, ot], He),
  Wu = C([Et, Pt, $e, Hu, Uu, Hu, Se, ot], It),
  Gu = C([Et, Se, Bu, Vu, qt, ot, Wu], le),
  Ku = C([Gu, Et, zt], it),
  qu = C([Et, Gu, Ku, ot], he),
  Ju = (e, t, n) => {
    switch (t) {
      case `angleAxis`:
        return Ot(e, n);
      case `radiusAxis`:
        return lt(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Yu = (e, t, n) => {
    switch (t) {
      case `angleAxis`:
        return St(e, n);
      case `radiusAxis`:
        return qe(e, n);
      default:
        throw Error(`Unexpected axis type: ${t}`);
    }
  },
  Xu = C([Ju, zt, qu, Yu], wt),
  Zu = C([Se, Vu, Ye, ot], me),
  Qu = C([Se, Ju, zt, Xu, Ku, Yu, bt, Zu, ot], jt);
C([Se, Ju, Xu, Yu, bt, Zu, ot], Ke);
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
        var o = Fe(t, n, e, r);
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
    var s = od({ stroke: `#ccc` }, Bt(e));
    return z.createElement(
      `g`,
      { className: `recharts-polar-grid-angle` },
      a.map((e) => {
        var a = Fe(t, n, r, e),
          o = Fe(t, n, i, e);
        return z.createElement(
          `line`,
          id({ key: `line-${e}` }, s, { x1: a.x, y1: a.y, x2: o.x, y2: o.y }),
        );
      }),
    );
  },
  fd = (e) => {
    var { cx: t, cy: n, radius: r } = e,
      i = od({ stroke: `#ccc`, fill: `none` }, Bt(e));
    return z.createElement(
      `circle`,
      id({}, i, {
        className: st(`recharts-polar-grid-concentric-circle`, e.className),
        cx: t,
        cy: n,
        r,
      }),
    );
  },
  pd = (e) => {
    var { radius: t } = e,
      n = od({ stroke: `#ccc`, fill: `none` }, Bt(e));
    return z.createElement(
      `path`,
      id({}, n, {
        className: st(`recharts-polar-grid-concentric-polygon`, e.className),
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
      u = S(dt),
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
  Ed = Math.cos(b(45)),
  Dd = `angleAxis`;
function Od(e) {
  var t = At(),
    n = (0, z.useMemo)(() => {
      var { children: t } = e;
      return Cd(e, gd);
    }, [e]),
    r = n === S((e) => Ot(e, n.id));
  return (
    (0, z.useEffect)(
      () => (
        t(ye(n)),
        () => {
          t(xe(n));
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
      c = Fe(n, r, i, e.coordinate),
      l = Fe(n, r, i + (a === `inner` ? -1 : 1) * s, e.coordinate);
    return { x1: c.x, y1: c.y, x2: l.x, y2: l.y };
  },
  Ad = (e, t) => {
    var n = Math.cos(b(-e.coordinate));
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
    var t = Math.cos(b(-e.coordinate)),
      n = Math.sin(b(-e.coordinate));
    return Math.abs(t) <= Ed ? (n > 0 ? `start` : `end`) : `middle`;
  },
  Md = (e) => {
    var { cx: t, cy: n, radius: r, axisLineType: i, axisLine: a, ticks: o } = e;
    if (!a) return null;
    var s = yd(yd({}, Bt(e)), {}, { fill: `none` }, Bt(a));
    if (i === `circle`)
      return z.createElement(
        Fu,
        _d({ className: `recharts-polar-angle-axis-line` }, s, {
          cx: t,
          cy: n,
          r,
        }),
      );
    var c = o.map((e) => Fe(t, n, r, e.coordinate));
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
              Ae,
              _d({}, n, { className: `recharts-polar-angle-axis-tick-value` }),
              r,
            )
      : null;
  },
  Pd = (e) => {
    var { tick: t, tickLine: n, tickFormatter: r, stroke: i, ticks: a } = e,
      o = Bt(e),
      s = nt(t),
      c = yd(yd({}, o), {}, { fill: `none` }, Bt(n)),
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
          Dt,
          _d(
            {
              className: st(`recharts-polar-angle-axis-tick`, ue(t)),
              key: `tick-${a.coordinate}`,
            },
            Ge(e, a, l),
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
      Dt,
      { className: `recharts-polar-angle-axis-ticks` },
      l,
    );
  },
  Fd = (e) => {
    var { angleAxisId: t } = e,
      n = S(dt),
      r = S((e) => Xu(e, `angleAxis`, t)),
      i = ve(),
      a = S((e) => Qu(e, `angleAxis`, t, i));
    if (n == null || !a || !a.length) return null;
    var o = yd(
      yd(yd({}, e), {}, { scale: r }, n),
      {},
      { radius: n.outerRadius },
    );
    return z.createElement(
      Dt,
      { className: st(`recharts-polar-angle-axis`, Dd, o.className) },
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
  bd(Id, `defaultProps`, Vt));
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
  Gd = C([Ze, Hd, Wd], (e, t, n) => {
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
          a = ke(e, t.nameKey, t.name),
          o =
            n != null && (i = n[r]) != null && (i = i.props) != null && i.fill
              ? n[r].props.fill
              : typeof e == `object` && e && `fill` in e
                ? e.fill
                : t.fill;
        return {
          value: ge(a, t.dataKey),
          color: o,
          payload: e,
          type: t.legendType,
        };
      });
  }),
  qd = C([Gd, Hd, Wd, be], (e, t, n, r) => {
    if (t != null && e != null)
      return vf({ offset: r, pieSettings: t, displayedData: e, cells: n });
  }),
  Jd = e(mt()),
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
  var t = (0, z.useMemo)(() => _t(e.children, x), [e.children]),
    n = S((n) => Kd(n, e.id, t));
  return n == null ? null : z.createElement(Pe, { legendPayload: n });
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
      name: ge(s, t),
      hide: c,
      type: l,
      color: o,
      unit: ``,
    },
  };
}
var cf = (e, t) => (e > t ? `start` : e < t ? `end` : `middle`),
  lf = (e, t, n) => h(typeof t == `function` ? t(e) : t, n, n * 0.8),
  uf = (e, t, n) => {
    var { top: r, left: i, width: a, height: o } = t,
      s = Le(a, o);
    return {
      cx: i + h(e.cx, a, a / 2),
      cy: r + h(e.cy, o, o / 2),
      innerRadius: h(e.innerRadius, s, 0),
      outerRadius: lf(n, e.outerRadius, s),
      maxRadius: e.maxRadius || Math.sqrt(a * a + o * o) / 2,
    };
  },
  df = (e, t) => Nt(t - e) * Math.min(Math.abs(t - e), 360);
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
    var n = st(
      `recharts-pie-label-line`,
      typeof e == `boolean` ? `` : e.className,
    );
    return z.createElement(Ut, af({}, t, { type: `linear`, className: n }));
  },
  mf = (e, t, n) => {
    if (z.isValidElement(e)) return z.cloneElement(e, t);
    var r = n;
    if (typeof e == `function` && ((r = e(t)), z.isValidElement(r))) return r;
    var i = st(`recharts-pie-label-text`, ff(e));
    return z.createElement(
      Ae,
      af({}, t, { alignmentBaseline: `middle`, className: i }),
      r,
    );
  };
function hf(e) {
  var { sectors: t, props: n, showLabels: r } = e,
    { label: i, labelLine: a, dataKey: o } = n;
  if (!r || !i || !t) return null;
  var s = Bt(n),
    c = nt(i),
    l = nt(a),
    u =
      (typeof i == `object` &&
        `offsetRadius` in i &&
        typeof i.offsetRadius == `number` &&
        i.offsetRadius) ||
      20,
    d = t.map((e, t) => {
      var n = (e.startAngle + e.endAngle) / 2,
        r = Fe(e.cx, e.cy, e.outerRadius + u, n),
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
            points: [Fe(e.cx, e.cy, e.outerRadius, n), r],
            key: `line`,
          },
        );
      return z.createElement(
        Dt,
        { key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}` },
        a && pf(a, f),
        mf(i, d, ke(e, o)),
      );
    });
  return z.createElement(Dt, { className: `recharts-pie-labels` }, d);
}
function gf(e) {
  var { sectors: t, props: n, showLabels: r } = e,
    { label: i } = n;
  return typeof i == `object` && i && `position` in i
    ? z.createElement(se, { label: i })
    : z.createElement(hf, { sectors: t, props: n, showLabels: r });
}
function _f(e) {
  var { sectors: t, activeShape: n, inactiveShape: r, allOtherPieProps: i } = e,
    a = S(Ie),
    { onMouseEnter: o, onClick: s, onMouseLeave: c } = i,
    l = Qd(i, Yd),
    u = we(o, i.dataKey),
    d = yt(c),
    f = re(s, i.dataKey);
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
              { stroke: e.stroke, tabIndex: -1, [oe]: o, [Te]: i.dataKey },
            );
          return z.createElement(
            Dt,
            af(
              {
                key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${o}`,
                tabIndex: -1,
                className: `recharts-pie-sector`,
              },
              Ge(l, e, o),
              {
                onMouseEnter: u(e, o),
                onMouseLeave: d(e, o),
                onClick: f(e, o),
              },
            ),
            z.createElement(
              y,
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
    h = n.filter((e) => ke(e, c, 0) !== 0).length,
    g = (p >= 360 ? h : h - 1) * m,
    _ = p - h * d - g,
    v = n.reduce((e, t) => {
      var n = ke(t, c, 0);
      return e + (Tt(n) ? n : 0);
    }, 0),
    y;
  if (v > 0) {
    var b;
    y = n.map((e, n) => {
      var s = ke(e, c, 0),
        p = ke(e, l, n),
        h = uf(t, i, e),
        g = (Tt(s) ? s : 0) / v,
        y,
        x = B(B({}, e), r && r[n] && r[n].props);
      y = n ? b.endAngle + Nt(f) * m * (s === 0 ? 0 : 1) : o;
      var ee = y + Nt(f) * ((s === 0 ? 0 : d) + g * _),
        te = (y + ee) / 2,
        ne = (h.innerRadius + h.outerRadius) / 2,
        re = [{ name: p, value: s, payload: x, dataKey: c, type: u }],
        ie = Fe(h.cx, h.cy, ne, te);
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
                tooltipPayload: re,
                midAngle: te,
                middleRadius: ne,
                tooltipPosition: ie,
              },
              x,
            ),
            h,
          ),
          {},
          {
            value: s,
            startAngle: y,
            endAngle: ee,
            payload: x,
            paddingAngle: Nt(f) * m,
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
  return z.createElement(pe, { value: t ? i : void 0 }, r);
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
    f = Gt(t, `recharts-pie-`),
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
      je,
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
              var s = at(
                  r.endAngle - r.startAngle,
                  t.endAngle - t.startAngle,
                  e,
                ),
                c = B(B({}, t), {}, { startAngle: a + o, endAngle: a + s + o });
              (i.push(c), (a = c.endAngle));
            } else {
              var { endAngle: l, startAngle: u } = t,
                d = at(0, l - u, e),
                f = B(B({}, t), {}, { startAngle: a + o, endAngle: a + d + o });
              (i.push(f), (a = f.endAngle));
            }
          }),
          (n.current = i),
          z.createElement(
            Dt,
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
  isAnimationActive: !Ne.isSsr,
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
    o = (0, z.useMemo)(() => _t(e.children, x), [e.children]),
    s = S((e) => qd(e, t, o)),
    c = (0, z.useRef)(null),
    l = st(`recharts-pie`, i);
  return r || s == null
    ? ((c.current = null), z.createElement(Dt, { tabIndex: a, className: l }))
    : z.createElement(
        z.Fragment,
        null,
        z.createElement(ae, { fn: sf, args: B(B({}, e), {}, { sectors: s }) }),
        z.createElement(
          Dt,
          { tabIndex: a, className: l },
          z.createElement(bf, {
            props: B(B({}, n), {}, { sectors: s }),
            previousSectorsRef: c,
          }),
        ),
      );
}
function Cf(e) {
  var t = ee(e, xf),
    { id: n } = t,
    r = Qd(t, Zd),
    i = Bt(r);
  return z.createElement(Wt, { id: n, type: `pie` }, (e) =>
    z.createElement(
      z.Fragment,
      null,
      z.createElement(te, {
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
        nt(i),
      ),
      Ve(i),
    ),
    s = (0, z.isValidElement)(i)
      ? (0, z.cloneElement)(i, o)
      : typeof i == `function`
        ? i(o)
        : z.createElement(Fu, o);
  return z.createElement(Dt, { className: `recharts-active-dot` }, s);
};
function Af(e) {
  var { points: t, mainColor: n, activeDot: r, itemDataKey: i } = e,
    a = S(Ie),
    o = Me();
  if (t == null || o == null) return null;
  var s = t.find((e) => o.includes(e.payload));
  return Lt(s)
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
  Rf = C([lt, If], (e, t) => {
    if (e != null && t != null) return Mf(Mf({}, e), {}, { scale: t });
  }),
  zf = (e, t, n, r) => Qu(e, `radiusAxis`, t, r),
  Bf = (e, t, n) => Ot(e, n),
  Vf = (e, t, n) => Xu(e, `angleAxis`, n),
  Hf = C([Bf, Vf], (e, t) => {
    if (e != null && t != null) return Mf(Mf({}, e), {}, { scale: t });
  }),
  Uf = (e, t, n, r) => Qu(e, `angleAxis`, n, r),
  Wf = C([Bf, Vf, dt], (e, t, n) => {
    if (n != null && t != null)
      return { scale: t, type: e.type, dataKey: e.dataKey, cx: n.cx, cy: n.cy };
  }),
  Gf = (e, t, n, r, i) => i,
  Kf = C([Se, Rf, zf, Hf, Uf], (e, t, n, r, i) =>
    Yt(e, `radiusAxis`) ? fe(t, n, !1) : fe(r, i, !1),
  ),
  qf = C([Iu, Gf], (e, t) => {
    if (e != null)
      return e.find((e) => e.type === `radar` && t === e.id)?.dataKey;
  }),
  Jf = C([Lf, Wf, Ze, qf, Kf], (e, t, n, r, i) => {
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
  Yf = e(_e()),
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
      value: ge(n, t),
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
      name: ge(a, t),
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
            className: st(
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
    var a = ke(e, n.dataKey, r),
      d = ke(e, i),
      f = n.scale(a) + u,
      p = Array.isArray(d) ? (0, Yf.default)(d) : d,
      m = Lt(p) ? void 0 : t.scale(p);
    (Array.isArray(d) && d.length >= 2 && (c = !0),
      l.push(
        V(
          V({}, Fe(o, s, m, f)),
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
            r = Lt(n) ? void 0 : t.scale(n);
          d.push(V(V({}, e), {}, { radius: r }, Fe(o, s, r, e.angle)));
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
    s = Bt(o),
    c = xt(r),
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
  return z.createElement(Dt, { className: `recharts-radar-dots` }, l);
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
  return z.createElement(Ee, { value: t ? i : null }, r);
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
            rp({}, et(r), {
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
    Dt,
    { className: `recharts-radar-polygon` },
    s,
    z.createElement(lp, { props: r, points: t }),
  );
}
var fp = (e, t, n) => (r, i) => {
  var a = e && e[Math.floor(i * t)];
  return a
    ? V(V({}, r), {}, { x: at(a.x, r.x, n), y: at(a.y, r.y, n) })
    : V(V({}, r), {}, { x: at(r.cx, r.x, n), y: at(r.cy, r.y, n) });
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
    g = Gt(t, `recharts-radar-`),
    [_, v] = (0, z.useState)(!1),
    y = !_,
    b = (0, z.useCallback)(() => {
      (typeof u == `function` && u(), v(!1));
    }, [u]),
    x = (0, z.useCallback)(() => {
      (typeof d == `function` && d(), v(!0));
    }, [d]);
  return z.createElement(
    up,
    { showLabels: y, points: i },
    z.createElement(
      je,
      {
        animationId: g,
        begin: s,
        duration: c,
        isActive: o,
        easing: l,
        key: `radar-${g}`,
        onAnimationEnd: b,
        onAnimationStart: x,
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
    z.createElement(se, { label: t.label }),
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
    isAnimationActive: !Ne.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  gp = class extends z.PureComponent {
    render() {
      var { hide: e, className: t, points: n } = this.props;
      if (e || n == null) return null;
      var r = st(`recharts-radar`, t);
      return z.createElement(
        z.Fragment,
        null,
        z.createElement(Dt, { className: r }, z.createElement(mp, this.props)),
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
  var t = ve(),
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
    return z.createElement(Wt, { id: this.props.id, type: `radar` }, (e) =>
      z.createElement(
        z.Fragment,
        null,
        z.createElement(te, {
          type: `radar`,
          id: e,
          data: void 0,
          dataKey: this.props.dataKey,
          hide: this.props.hide,
          angleAxisId: this.props.angleAxisId,
          radiusAxisId: this.props.radiusAxisId,
        }),
        z.createElement(Pe, { legendPayload: ap(this.props) }),
        z.createElement(ae, { fn: op, args: this.props }),
        z.createElement(_p, rp({}, this.props, { id: e })),
      ),
    );
  }
};
(ep(vp, `displayName`, `Radar`), ep(vp, `defaultProps`, hp));
function yp(e) {
  var t = At();
  return (
    (0, z.useEffect)(() => {
      t(ut(e));
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
    var n = ee(e.categoricalChartProps, wp),
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
      ft,
      { preloadedState: { options: l }, reduxStoreName: n.id ?? a },
      z.createElement(Qe, { chartData: n.data }),
      z.createElement(Ct, { layout: r, margin: n.margin }),
      z.createElement(kt, {
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
      z.createElement(ct, xp({}, i, { ref: t })),
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
    var n = ee(e, Dp);
    return z.createElement(Tp, {
      chartName: `PieChart`,
      defaultTooltipEventType: `item`,
      validateTooltipEventTypes: Ep,
      tooltipPayloadSearcher: de,
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
    var n = ee(e, Ap);
    return z.createElement(Tp, {
      chartName: `RadarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: kp,
      tooltipPayloadSearcher: de,
      categoricalChartProps: n,
      ref: t,
    });
  }),
  Mp = [`axis`],
  Np = (0, z.forwardRef)((e, t) =>
    z.createElement(rt, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: Mp,
      tooltipPayloadSearcher: de,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  H = e(s(), 1),
  Pp = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_playtime_seconds || A(e.M()),
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
              br: w.readUint32,
              bw: I.writeUint32,
            },
            total_sessions: { n: 20, br: w.readUint32, bw: I.writeUint32 },
            vr_sessions: { n: 21, br: w.readUint32, bw: I.writeUint32 },
            deck_sessions: { n: 22, br: w.readUint32, bw: I.writeUint32 },
            controller_sessions: { n: 23, br: w.readUint32, bw: I.writeUint32 },
            linux_sessions: { n: 24, br: w.readUint32, bw: I.writeUint32 },
            macos_sessions: { n: 25, br: w.readUint32, bw: I.writeUint32 },
            windows_sessions: { n: 26, br: w.readUint32, bw: I.writeUint32 },
            total_playtime_percentagex100: {
              n: 27,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            vr_playtime_percentagex100: {
              n: 28,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            deck_playtime_percentagex100: {
              n: 29,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            controller_playtime_percentagex100: {
              n: 30,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            linux_playtime_percentagex100: {
              n: 31,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            macos_playtime_percentagex100: {
              n: 32,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            windows_playtime_percentagex100: {
              n: 33,
              br: w.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.appid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: w.readUint32, bw: I.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.longest_consecutive_days || A(e.M()),
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
              br: w.readUint32,
              bw: I.writeUint32,
            },
            rtime_start: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            streak_games: { n: 3, c: Fp, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.overall_rank || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_rank: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            vr_rank: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            deck_rank: { n: 3, br: w.readUint32, bw: I.writeUint32 },
            controller_rank: { n: 4, br: w.readUint32, bw: I.writeUint32 },
            linux_rank: { n: 5, br: w.readUint32, bw: I.writeUint32 },
            mac_rank: { n: 6, br: w.readUint32, bw: I.writeUint32 },
            windows_rank: { n: 7, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.appid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            stats: { n: 2, c: Pp },
            playtime_streak: { n: 3, c: Ip },
            playtime_ranks: { n: 4, c: Lp },
            rtime_first_played: { n: 5, br: w.readUint32, bw: I.writeUint32 },
            relative_game_stats: { n: 6, c: Pp },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.appid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            new_this_year: { n: 2, br: w.readBool, bw: I.writeBool },
            rtime_first_played_lifetime: {
              n: 3,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            demo: { n: 4, br: w.readBool, bw: I.writeBool },
            playtest: { n: 5, br: w.readBool, bw: I.writeBool },
            played_during_early_access: {
              n: 6,
              br: w.readBool,
              bw: I.writeBool,
            },
            played_vr: { n: 7, br: w.readBool, bw: I.writeBool },
            played_deck: { n: 8, br: w.readBool, bw: I.writeBool },
            played_controller: { n: 9, br: w.readBool, bw: I.writeBool },
            played_linux: { n: 10, br: w.readBool, bw: I.writeBool },
            played_mac: { n: 11, br: w.readBool, bw: I.writeBool },
            played_windows: { n: 12, br: w.readBool, bw: I.writeBool },
            total_playtime_percentagex100: {
              n: 13,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            total_sessions: { n: 14, br: w.readUint32, bw: I.writeUint32 },
            rtime_release_date: { n: 15, br: w.readUint32, bw: I.writeUint32 },
            parent_appid: { n: 16, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.appid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            total_playtime_percentagex100: {
              n: 2,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            relative_playtime_percentagex100: {
              n: 3,
              br: w.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.appid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            rank: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            relative_playtime_percentagex100: {
              n: 3,
              br: w.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.category || A(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category: { n: 1, br: w.readString, bw: I.writeString },
            rankings: { n: 2, c: Vp, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.overall_ranking || A(e.M()),
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
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.total_achievements || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_achievements: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            total_games_with_achievements: {
              n: 3,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            total_rare_achievements: {
              n: 4,
              br: w.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.stats || A(e.M()),
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
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.tag_id || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tag_id: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            tag_weight: { n: 2, br: w.readFloat, bw: I.writeFloat },
            tag_weight_pre_selection: {
              n: 3,
              br: w.readFloat,
              bw: I.writeFloat,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.screenshots_shared || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            screenshots_shared: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            gifts_sent: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            loyalty_reactions: { n: 3, br: w.readUint32, bw: I.writeUint32 },
            written_reviews: { n: 4, br: w.readUint32, bw: I.writeUint32 },
            guides_submitted: { n: 5, br: w.readUint32, bw: I.writeUint32 },
            workshop_contributions: {
              n: 6,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            badges_earned: { n: 7, br: w.readUint32, bw: I.writeUint32 },
            friends_added: { n: 8, br: w.readUint32, bw: I.writeUint32 },
            forum_posts: { n: 9, br: w.readUint32, bw: I.writeUint32 },
            workshop_subscriptions: {
              n: 10,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            guide_subscribers: { n: 11, br: w.readUint32, bw: I.writeUint32 },
            workshop_subscribers: {
              n: 12,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            games_played_pct: { n: 13, br: w.readUint32, bw: I.writeUint32 },
            achievements_pct: { n: 14, br: w.readUint32, bw: I.writeUint32 },
            game_streak_pct: { n: 15, br: w.readUint32, bw: I.writeUint32 },
            games_played_avg: { n: 16, br: w.readUint32, bw: I.writeUint32 },
            achievements_avg: { n: 17, br: w.readUint32, bw: I.writeUint32 },
            game_streak_avg: { n: 18, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.total_stats || A(e.M()),
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
            demos_played: { n: 7, br: w.readUint32, bw: I.writeUint32 },
            game_rankings: { n: 8, c: Up },
            playtests_played: { n: 9, br: w.readUint32, bw: I.writeUint32 },
            summary_stats: { n: 10, c: Wp },
            substantial: { n: 11, d: !0, br: w.readBool, bw: I.writeBool },
            tag_stats: { n: 12, c: Gp },
            by_numbers: { n: 13, c: qp },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.rtime_month || A(e.M()),
        H.Message.initialize(this, t, 0, -1, [4, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_month: { n: 1, br: w.readUint32, bw: I.writeUint32 },
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
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.account_id || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_id: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            year: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            playtime_stats: { n: 3, c: Jp },
            privacy_state: { n: 4, br: w.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.from_dbo || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            from_dbo: { n: 1, br: w.readBool, bw: I.writeBool },
            overall_time_ms: {
              n: 2,
              br: w.readUint64String,
              bw: I.writeUint64String,
            },
            dbo_load_ms: {
              n: 3,
              br: w.readUint64String,
              bw: I.writeUint64String,
            },
            query_execution_ms: {
              n: 4,
              br: w.readUint64String,
              bw: I.writeUint64String,
            },
            message_population_ms: {
              n: 5,
              br: w.readUint64String,
              bw: I.writeUint64String,
            },
            dbo_lock_load_ms: {
              n: 6,
              br: w.readUint64String,
              bw: I.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.statid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            statid: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            fieldid: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            achievement_name_internal: {
              n: 3,
              br: w.readString,
              bw: I.writeString,
            },
            rtime_unlocked: { n: 4, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.appid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            achievements: { n: 2, c: Qp, r: !0, q: !0 },
            all_time_unlocked_achievements: {
              n: 3,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            unlocked_more_in_future: { n: 4, br: w.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
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
        e.prototype.median_achievements || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            median_achievements: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            median_games: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            median_streak: { n: 3, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPercentiles`;
    }
  },
  tm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.new_releases || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            new_releases: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            recent_releases: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            classic_releases: { n: 3, br: w.readUint32, bw: I.writeUint32 },
            recent_cutoff_year: { n: 4, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPlaytimeDistribution`;
    }
  },
  nm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.games_played || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            games_played: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            unlocked_achievements: {
              n: 2,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            longest_streak: { n: 3, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPreviousYIRSummaryData`;
    }
  },
  rm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            force_regenerate: { n: 3, br: w.readBool, bw: I.writeBool },
            access_source: { n: 4, br: w.readInt32, bw: I.writeInt32 },
            fetch_previous_year_summary: {
              n: 5,
              d: !1,
              br: w.readBool,
              bw: I.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Request`;
    }
  },
  im = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || A(e.M()),
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
            percentiles: { n: 3, c: em },
            distribution: { n: 4, c: tm },
            previous_year_summary: { n: 5, c: nm },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Response`;
    }
  },
  am = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            privacy_state: { n: 3, br: w.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Request`;
    }
  },
  om = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { privacy_state: { n: 1, br: w.readEnum, bw: I.writeEnum } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Response`;
    }
  },
  sm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Request`;
    }
  },
  cm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            privacy_state: { n: 1, br: w.readEnum, bw: I.writeEnum },
            generated_value: { n: 2, br: w.readBool, bw: I.writeBool },
            steamid: {
              n: 3,
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            rt_privacy_updated: { n: 4, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Response`;
    }
  },
  lm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: I.writeRepeatedUint32,
            },
            total_only: { n: 4, br: w.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Request`;
    }
  },
  um = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_achievements || A(e.M()),
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
            total_achievements: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            total_rare_achievements: {
              n: 3,
              br: w.readUint32,
              bw: I.writeUint32,
            },
            total_games_with_achievements: {
              n: 4,
              br: w.readUint32,
              bw: I.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Response`;
    }
  },
  dm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: I.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Request`;
    }
  },
  fm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || A(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: mm, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response`;
    }
  },
  pm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_url || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_url: { n: 1, br: w.readString, bw: I.writeString },
            preview_url: { n: 2, br: w.readString, bw: I.writeString },
            image_width: { n: 3, br: w.readUint32, bw: I.writeUint32 },
            image_height: { n: 4, br: w.readUint32, bw: I.writeUint32 },
            maybe_inappropriate_sex: { n: 5, br: w.readBool, bw: I.writeBool },
            maybe_inappropriate_violence: {
              n: 6,
              br: w.readBool,
              bw: I.writeBool,
            },
            visibility: { n: 7, br: w.readUint32, bw: I.writeUint32 },
            spoiler_tag: { n: 8, br: w.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_Screenshot`;
    }
  },
  mm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            screenshots: { n: 2, c: pm, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp`;
    }
  },
  hm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            gid: { n: 2, br: w.readFixed64String, bw: I.writeFixed64String },
            type: { n: 3, br: w.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Request`;
    }
  },
  gm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.jsondata || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { jsondata: { n: 1, br: w.readString, bw: I.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Response`;
    }
  },
  _m = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            gids: {
              n: 2,
              r: !0,
              q: !0,
              br: w.readFixed64String,
              pbr: w.readPackedFixed64String,
              bw: I.writeRepeatedFixed64String,
            },
            type: { n: 3, br: w.readEnum, bw: I.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Request`;
    }
  },
  vm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || A(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: ym, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response`;
    }
  },
  ym = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: w.readFixed64String, bw: I.writeFixed64String },
            jsondata: { n: 2, br: w.readString, bw: I.writeString },
            steamid: {
              n: 3,
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response_Entry`;
    }
  },
  bm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: w.readFixed64String, bw: I.writeFixed64String },
            type: { n: 2, br: w.readEnum, bw: I.writeEnum },
            count: { n: 3, br: w.readUint32, bw: I.writeUint32 },
            last_account_index: { n: 4, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Request`;
    }
  },
  xm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || A(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: Sm, r: !0, q: !0 },
            last_account_index: { n: 2, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response`;
    }
  },
  Sm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: w.readFixed64String, bw: I.writeFixed64String },
            jsondata: { n: 2, br: w.readString, bw: I.writeString },
            steamid: {
              n: 3,
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response_Entry`;
    }
  },
  Cm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            return_private: { n: 3, br: w.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Request`;
    }
  },
  wm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            privacy_state: { n: 3, br: w.readEnum, bw: I.writeEnum },
            rt_privacy_updated: { n: 4, br: w.readUint32, bw: I.writeUint32 },
            privacy_override: { n: 5, br: w.readBool, bw: I.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendSharedYearInView`;
    }
  },
  Tm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.friend_shares || A(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            friend_shares: { n: 1, c: wm, r: !0, q: !0 },
            year: { n: 2, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Response`;
    }
  },
  Em = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
            year: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            language: { n: 3, br: w.readString, bw: I.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Request`;
    }
  },
  Dm = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || A(e.M()),
        H.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: Om, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response`;
    }
  },
  Om = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: w.readString, bw: I.writeString },
            url_path: { n: 2, br: w.readString, bw: I.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response_Image`;
    }
  },
  km = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || A(e.M()),
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
              br: w.readFixed64String,
              bw: I.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Request`;
    }
  },
  Am = class e extends H.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.year || A(e.M()),
        H.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            year: { n: 1, br: w.readUint32, bw: I.writeUint32 },
            month: { n: 2, br: w.readUint32, bw: I.writeUint32 },
            games_played: { n: 4, br: w.readUint32, bw: I.writeUint32 },
            top_played_appid: { n: 5, br: w.readUint32, bw: I.writeUint32 },
            longest_streak_days: { n: 6, br: w.readUint32, bw: I.writeUint32 },
            rt_streak_start: { n: 7, br: w.readUint32, bw: I.writeUint32 },
            achievements: { n: 8, br: w.readUint32, bw: I.writeUint32 },
            screenshots: { n: 9, br: w.readUint32, bw: I.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= P(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new H.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return N(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      L(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new H.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Response`;
    }
  },
  jm;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearInReview#1`, ps(rm, t, n), im, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetUserYearInReview = t;
  function n(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserSharingPermissions#1`,
      ps(sm, t, n),
      cm,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetUserSharingPermissions = n;
  function r(e, t, n) {
    return e.SendMsg(
      `SaleFeature.SetUserSharingPermissions#1`,
      ps(am, t, n),
      om,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetUserSharingPermissions = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearAchievements#1`,
      ps(lm, t, n),
      um,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetUserYearAchievements = i;
  function a(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearScreenshots#1`, ps(dm, t, n), fm, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetUserYearScreenshots = a;
  function o(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserActionData#1`, ps(hm, t, n), gm, {
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
      ps(_m, t, n),
      vm,
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
      ps(bm, t, n),
      xm,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllUserActionDataForType = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetFriendsSharedYearInReview#1`,
      ps(Cm, t, n),
      Tm,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetFriendsSharedYearInReview = l;
  function u(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearInReviewShareImage#1`,
      ps(Em, t, n),
      Dm,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetUserYearInReviewShareImage = u;
  function d(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetYIRCurrentMonthlySummary#1`,
      ps(km, t, n),
      Am,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetYIRCurrentMonthlySummary = d;
})((jm ||= {}));
var Mm = {
    19: [19, $i, tr, es, Ki, sc],
    [Gc]: [Gc, hr, wl, Ua, Us, wa, lr],
    [Ms]: [Ms, Ba, $n, Bo],
    113: [113],
    21: [21, Zi],
    492: [492],
    [ia]: [ia, Bn],
    [$i]: [19, $i, tr, wi],
    9: [9, _s, ks, Rs, Ur, vi, pn],
    [hr]: [Gc, hr, wl, rr, Jr],
    122: [122, Ji, jo, Bs, Va],
    [tc]: [tc, Bn],
    [tr]: [19, $i, tr, Sc],
    599: [599, Ri, fs],
    [wi]: [$i, wi],
    [zo]: [zo, Xr, kc],
    [vl]: [vl, po, Pc],
    [Ba]: [Ms, Ba, pr, dn],
    [po]: [vl, po, Pc],
    597: [597],
    [Xa]: [Xa, er, dl, Ks],
    [$a]: [$a],
    [ja]: [ja],
    [$n]: [Ms, $n, zs, Ei],
    [cl]: [cl, gc],
    [wl]: [Gc, hr, wl],
    [Xr]: [zo, Xr],
    [Bl]: [Bl, Ll],
    [Bo]: [Ms, Bo, Ea],
    [Pr]: [Pr],
    [Tc]: [Tc],
    [Fs]: [Fs, fa],
    [Vo]: [Vo],
    [ko]: [ko, wr, Sr],
    128: [128, Hr],
    [$o]: [$o],
    [oc]: [oc],
    [Ua]: [Gc, Ua],
    [bl]: [bl],
    493: [493],
    [$r]: [$r, Sa],
    [Yn]: [Yn, Si],
    [Ll]: [Bl, Ll],
    [Us]: [Gc, Us],
    [Cc]: [Cc, Bn],
    [gc]: [cl, gc],
    [Wc]: [Wc],
    [Fc]: [Fc, _c],
    [ro]: [ro],
    [Kr]: [Kr, ba],
    [xr]: [xr, fa],
    [Pc]: [vl, po, Pc],
    [kc]: [zo, kc],
    [ii]: [ii, Ea],
    [Ji]: [122, Ji],
    [ba]: [Kr, ba],
    [wc]: [wc],
    [Sa]: [$r, Sa],
    [wa]: [Gc, wa],
    [jn]: [jn],
    [ir]: [ir],
    [Oa]: [Oa],
    [js]: [js],
    [wr]: [ko, wr, va, Na],
    [Aa]: [Aa],
    699: [699],
    [Bi]: [Bi],
    [es]: [19, es],
    [oo]: [oo],
    [Bc]: [Bc],
    [pr]: [Ba, pr],
    [er]: [Xa, er],
    [Zi]: [21, Zi],
    [_l]: [_l],
    [Qc]: [Qc, Uo, ca, ns],
    [Ki]: [19, Ki],
    [dn]: [Ba, dn],
    [xi]: [xi],
    [qc]: [qc],
    [Mr]: [Mr],
    [Rc]: [Rc],
    [Uc]: [Uc],
    [mr]: [mr],
    [oa]: [oa],
    [Is]: [Is],
    [Mn]: [Mn],
    [wn]: [wn],
    701: [701, Ii, si, cn],
    [Ri]: [599, Ri, fs],
    [bo]: [bo],
    [jc]: [jc],
    [_s]: [9, _s, Il],
    [rs]: [rs, Wo],
    [Hr]: [128, Hr],
    [_a]: [_a],
    [Ls]: [Ls],
    [rr]: [hr, rr, qn],
    [Wo]: [rs, Wo],
    [rc]: [rc],
    [Vn]: [Vn],
    [gi]: [gi],
    [ks]: [9, ks],
    [Ya]: [Ya],
    [jo]: [122, jo],
    [An]: [An],
    [qn]: [rr, qn, fi, xn, ki],
    [as]: [as, Jo],
    [nr]: [nr],
    [lc]: [lc],
    [Rs]: [9, Rs],
    [_c]: [Fc, _c],
    [Za]: [Za],
    [Hi]: [Hi],
    [Er]: [Er],
    [Gs]: [Gs],
    [bc]: [bc],
    [Qa]: [Qa],
    [Uo]: [Qc, Uo],
    [Nn]: [Nn],
    [Si]: [Yn, Si],
    [jr]: [jr],
    [xl]: [xl],
    [zs]: [$n, zs],
    [Fn]: [Fn],
    [Lc]: [Lc],
    [al]: [al],
    [Oi]: [Oi],
    [yo]: [yo],
    [gs]: [gs],
    [cc]: [cc],
    [Ur]: [9, Ur],
    [Vs]: [Vs],
    [Sr]: [ko, Sr],
    [jl]: [jl],
    [Sl]: [Sl],
    [On]: [On],
    [fs]: [599, Ri, fs],
    [ac]: [ac],
    [Ml]: [Ml],
    [Mc]: [Mc, Lo],
    [fc]: [fc],
    [_n]: [_n],
    [ni]: [ni],
    [Ol]: [Ol, pl, Os, sl, Rl],
    [Bn]: [ia, tc, Cc, Bn],
    [sc]: [19, sc],
    [da]: [da],
    [Ts]: [Ts],
    [Zo]: [Zo],
    [io]: [io],
    [Ga]: [Ga],
    [uc]: [uc],
    [Tr]: [Tr],
    [Js]: [Js],
    [Ns]: [Ns],
    [Ei]: [$n, Ei],
    [Ai]: [Ai],
    [ho]: [ho],
    [Vc]: [Vc],
    [Ps]: [Ps],
    [fr]: [fr],
    [ic]: [ic],
    [Wn]: [Wn],
    [xs]: [xs],
    [Qr]: [Qr],
    [Hc]: [Hc],
    [Ko]: [Ko],
    [Vr]: [Vr],
    [As]: [As],
    [Al]: [Al],
    [Co]: [Co],
    [Gn]: [Gn],
    [di]: [di],
    [Po]: [Po],
    [Oo]: [Oo],
    [En]: [En],
    [Br]: [Br],
    [yi]: [yi],
    [vc]: [vc],
    [fi]: [qn, fi],
    [gl]: [gl],
    [Lo]: [Mc, Lo],
    [Ws]: [Ws, vo],
    [yn]: [yn],
    [Dl]: [Dl],
    [dl]: [Xa, dl],
    [hi]: [hi],
    [Ln]: [Ln],
    [ga]: [ga],
    [_r]: [_r],
    [pa]: [pa],
    [el]: [el],
    [ls]: [ls],
    [Di]: [Di],
    [va]: [wr, va],
    [vi]: [9, vi],
    [gn]: [gn],
    [Yo]: [Yo],
    [Mo]: [Mo],
    [ei]: [ei],
    [fn]: [fn],
    [Sc]: [tr, Sc],
    [Ta]: [Ta],
    [ha]: [ha],
    [Cs]: [Cs],
    [Bs]: [122, Bs],
    872: [872],
    [uo]: [uo],
    [Qi]: [Qi],
    [la]: [la],
    [Qo]: [Qo],
    [so]: [so],
    [Yr]: [Yr],
    [ds]: [ds],
    [Pa]: [Pa],
    [yc]: [yc],
    [mc]: [mc],
    [ka]: [ka],
    [Ii]: [701, Ii, si],
    [to]: [to],
    [ti]: [ti],
    [Ca]: [Ca],
    [qa]: [qa],
    [Ro]: [Ro],
    [ur]: [ur],
    [gr]: [gr],
    [aa]: [aa],
    [oi]: [oi],
    [Wi]: [Wi],
    [pn]: [9, pn],
    [Cl]: [Cl],
    [co]: [co],
    [is]: [is],
    [qo]: [qo],
    87: [87],
    [Va]: [122, Va],
    [Jo]: [as, Jo],
    84: [84],
    [yl]: [yl],
    [Jr]: [hr, Jr],
    [Ia]: [Ia],
    [ao]: [ao],
    [zi]: [zi],
    [Nr]: [Nr],
    [xc]: [xc],
    [Rn]: [Rn],
    [Qs]: [Qs],
    [sr]: [sr],
    [cr]: [cr],
    [ra]: [ra],
    [Zn]: [Zn],
    [kn]: [kn],
    [si]: [701, Ii, si],
    [Ni]: [Ni],
    [fa]: [Fs, xr, fa],
    [Xc]: [Xc],
    [ss]: [ss],
    [Ic]: [Ic],
    [mo]: [mo],
    [Cn]: [Cn],
    [na]: [na],
    [Hn]: [Hn],
    [Fr]: [Fr],
    [cs]: [cs],
    [Oc]: [Oc],
    [Ha]: [Ha],
    [pi]: [pi],
    [kl]: [kl],
    [Kn]: [Kn],
    [qs]: [qs],
    [Hs]: [Hs],
    [$c]: [$c],
    [pl]: [Ol, pl],
    [mi]: [mi],
    [us]: [us],
    [So]: [So],
    [Ac]: [Ac],
    [zn]: [zn],
    [Os]: [Ol, Os, sl],
    [ul]: [ul],
    [Xo]: [Xo],
    [Cr]: [Cr],
    [Ds]: [Ds],
    [bn]: [bn],
    [Dr]: [Dr],
    [un]: [un],
    [ll]: [ll],
    [Ea]: [Bo, ii, Ea],
    [vo]: [Ws, vo],
    [Gi]: [Gi],
    [qi]: [qi],
    [hs]: [hs],
    [To]: [To],
    [Ir]: [Ir],
    [Ao]: [Ao],
    [Ra]: [Ra],
    [Ec]: [Ec],
    [xa]: [xa],
    [tl]: [tl],
    [Go]: [Go],
    [vr]: [vr],
    [vs]: [vs],
    [ma]: [ma],
    [Mi]: [Mi],
    [Zs]: [Zs],
    [El]: [El],
    [xn]: [qn, xn, ki],
    [vn]: [vn],
    [ya]: [ya],
    [zr]: [zr],
    [ea]: [ea],
    [sl]: [Ol, Os, sl],
    [Ka]: [Ka],
    [Kc]: [Kc],
    [Rr]: [Rr],
    [ec]: [ec],
    [Ma]: [Ma],
    [fo]: [fo],
    784: [784],
    [Fi]: [Fi],
    [Ho]: [Ho],
    [zc]: [zc],
    [ws]: [ws],
    [lr]: [Gc, lr],
    [_i]: [_i],
    [ua]: [ua],
    [Ja]: [Ja],
    [zl]: [zl],
    [Vi]: [Vi],
    [Ks]: [Xa, Ks],
    [Il]: [_s, Il],
    [Nl]: [Nl],
    [Ys]: [Ys],
    [Es]: [Es],
    [Tl]: [Tl],
    [Io]: [Io],
    [Ui]: [Ui],
    [Pi]: [Pi],
    [dr]: [dr],
    [Ti]: [Ti],
    [Un]: [Un],
    [no]: [no],
    [Li]: [Li],
    [xo]: [xo],
    [or]: [or],
    [ki]: [qn, xn, ki],
    [Ar]: [Ar],
    [Na]: [wr, Na],
    [Yi]: [Yi],
    [nc]: [nc],
    [ns]: [Qc, ns],
    809: [809],
    [Xi]: [Xi],
    [bs]: [bs],
    [ts]: [ts],
    [Lr]: [Lr],
    [ri]: [ri],
    [yr]: [yr, Fa],
    [Rl]: [Ol, Rl],
    [qr]: [qr],
    [Fa]: [yr, Fa],
    [hn]: [hn],
    [bi]: [bi],
    [ca]: [Qc, ca],
    [cn]: [701, cn],
    [Zc]: [Zc],
  },
  Nm = [vl, po, Pc, Xr];
function Pm(e, t) {
  let n = e.filter((e) => Nm.findIndex((t) => t == e.nTagId) == -1),
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
      Mm[e] &&
        Mm[e].forEach((e) => {
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
function Fm() {
  return D.country_code.toLowerCase() === `cn`;
}
function Im(e, t, n) {
  let { rgRankings: r, nTotalResultCount: i } = Rm(e, t),
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
function Lm(e, t, n, r) {
  let { rgRankings: i, nTotalResultCount: a } = Rm(e, t, n);
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
        let a = zm(t, r, e.GetRawStats().playtime_stats.games[i]);
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
function Rm(e, t, n) {
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
function zm(e, t, n) {
  let r = n.stats.total_playtime_percentagex100,
    i = `${e}_playtime_percentagex100`,
    a = n.relative_game_stats[i] ?? 0;
  return Xn((a * r) / t, 0, 1e4);
}
function Bm(e, t) {
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
function Vm(e, t) {
  if (t != `demo` && t != `playtest`) {
    let n = `${t === `overall` ? `total` : t}_sessions`,
      r = `${t === `overall` ? `total` : t}_playtime_percentagex100`;
    return {
      nTotalGames: Bm(e, t).length || 0,
      nTotalSessions: e.playtime_stats.total_stats[n] || 0,
      nTotalPercentage: e.playtime_stats.total_stats[r] || 0,
    };
  }
  {
    let n = Bm(e, t);
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
var Hm = `percentMonthOfOverall`,
  Um = `percentOtherGamesRelativeMonth`;
function Wm(e, t, n, r) {
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
          (a[Hm] = l),
          (a[Um] = l - u),
          (o[Um] = 1e4 - d),
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
function Gm(e) {
  e.game_summary?.length &&
    Gr(
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
function Km(e) {
  return (
    Gr(
      typeof e.account_id == `number` &&
        typeof e.year == `number` &&
        typeof e.privacy_state == `number` &&
        e.playtime_stats,
      `YIR stats missing expected fields!`,
    ),
    e.playtime_stats && Gm(e.playtime_stats),
    e
  );
}
function qm(e) {
  if (typeof e?.new_releases == `number`)
    return (
      Gr(
        typeof e.recent_releases == `number` &&
          typeof e.classic_releases == `number` &&
          typeof e.recent_cutoff_year == `number`,
        `YIR global playtime distribution missing expected fields!`,
      ),
      e
    );
}
function Jm(e) {
  if (typeof e?.games_played == `number`)
    return (
      Gr(
        typeof e.unlocked_achievements == `number` &&
          typeof e.longest_streak == `number`,
        `YIR previous year summary missing expected fields!`,
      ),
      e
    );
}
var Ym = class {
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
      return new ui(this.m_steamid).GetAccountID();
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
      let i = Km(e);
      if (
        ((this.m_allStats = i),
        (this.m_steamid = ui
          .InitFromAccountID(i.account_id, k.EUNIVERSE)
          .ConvertTo64BitString()),
        (this.m_globalPercentiles = t ?? void 0),
        (this.m_globalGameplayDistribution = qm(n)),
        (this.m_previousYearSummary = Jm(r)),
        this.BHasPlaytimeData() &&
          i.playtime_stats.total_stats.total_sessions > 0)
      ) {
        (i.playtime_stats.game_summary.forEach((e) => {
          (Gr(
            !this.m_mapGameSummary.has(e.appid),
            `Found at least two record of appid ${e.appid} in stats.playtime_stats.game_summary`,
          ),
            this.m_mapGameSummary.set(e.appid, e));
        }),
          i.playtime_stats.games.forEach((e) => {
            (Gr(
              !this.m_mapGameStats.has(e.appid),
              `Found at least two record of appid ${e.appid} in stats.playtime_stats.games`,
            ),
              this.m_mapGameStats.set(e.appid, e));
          }));
        let { rgResults: e } = Im(this, `overall`, 8),
          t = e.map((e) => e.appid);
        ((this.m_rgTopGameMonthsChartIdsAndRanks = t.map((e, t) => ({
          appid: e,
          rank: t,
        }))),
          (this.m_rgTopGamesShown = e.slice(0, 5)),
          (this.m_rgTopGameShownAppIDs = this.m_rgTopGamesShown.map(
            (e) => e.appid,
          )),
          (this.m_rgMonthChartData = Wm(
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
        this.m_rgAggregateTagData = Pm(e, 6);
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
        let a = (n - t) / Wa.PerYear,
          o = e.findIndex((e) => a < e);
        o >= 0
          ? (r[o] += i.total_playtime_percentagex100)
          : (r[r.length - 1] += i.total_playtime_percentagex100);
      }
      return r;
    }
  },
  Xm = `0px 0px 100% 0px`,
  Zm = e(d(), 1);
function Qm(e, t) {
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
function $m(e, t) {
  return [`YIR`, `Get`, e, t];
}
function eh(e, t, n, r = {}) {
  return {
    queryKey: $m(t, n),
    queryFn: async () => {
      let i = await jm.GetUserYearInReview(e, {
        steamid: t,
        year: n,
        fetch_previous_year_summary: !0,
        access_source: r.eAccessSource,
        force_regenerate: r.bForceRegenerate,
      });
      return Qm(i.GetEResult(), i.Body().toObject());
    },
    staleTime: 1 / 0,
  };
}
function th(e, t) {
  return p(eh(wo(), e, t));
}
function nh(e, t) {
  let { data: n, isLoading: r } = th(e, t),
    {
      eResult: i,
      stats: a,
      percentiles: o,
      distribution: s,
      previous_year_summary: c,
    } = n ?? {};
  return {
    userYearInReview: z.useMemo(() => {
      if (i == 1 && a) return new Ym(a, o, s, c);
    }, [i, a, o, s, c]),
    isLoading: r,
  };
}
function rh(e, t) {
  return th(e, t).data?.privacy_state;
}
function ih(e, t) {
  let n = wo(),
    r = c();
  return f({
    mutationFn: async (r) => {
      let i = await jm.SetUserSharingPermissions(n, {
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
        r.setQueryData($m(e, t), (e) => e && { ...e, privacy_state: i });
    },
  });
}
function ah(e, t, n) {
  return {
    steamid: t,
    nYear: n,
    achievements: new Zm.default((r) => ch(e, t, n, r), { cache: !1 }),
    screenshots: new Zm.default((r) => gh(e, t, n, r), { cache: !1 }),
  };
}
var oh = z.createContext(void 0);
function sh() {
  let e = z.useContext(oh);
  return (
    Gr(e, `Cannot use YIR data loaders outside of Steam Replay page!`), e
  );
}
async function ch(e, t, n, r) {
  try {
    let i = await jm.GetUserYearAchievements(e, {
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
function lh(e, t) {
  return {
    queryKey: [`YIR`, `achievements`, `apps`, e.steamid, e.nYear, t],
    queryFn: () => e.achievements.load(t),
    staleTime: 1 / 0,
  };
}
function uh(e) {
  let t = sh();
  u({ queries: e.GetTopGamesShownAppIDs().map((e) => lh(t, e)) });
}
function dh(e) {
  let { data: t } = p({ ...lh(sh(), e), enabled: !!e });
  return t;
}
function fh(e, t, n) {
  return {
    queryKey: [`YIR`, `achievements`, `display`, t, n],
    queryFn: async () => {
      try {
        let r = await rl.GetGameAchievements(e, { appid: t, language: n });
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
function ph(e, t = !0) {
  let n = wo(),
    { data: r } = p({
      ...fh(n, e, k.LANGUAGE || `english`),
      enabled: t && !!e,
    });
  return r;
}
function mh(e) {
  let t = ph(e);
  return z.useMemo(() => {
    let e = new Map();
    for (let n of t ?? []) n.internal_name && e.set(n.internal_name, n);
    return e;
  }, [t]);
}
function hh(e) {
  return ph(e)?.length ?? 0;
}
async function gh(e, t, n, r) {
  let i = await jm.GetUserYearScreenshots(e, {
    steamid: t,
    year: n,
    appids: [...r],
  });
  if (!i.BSuccess()) throw `Load Screenshots failed: ${i.GetErrorMessage()}`;
  let { apps: a = [] } = i.Body().toObject(),
    o = a.reduce((e, t) => ((e[t.appid] = t), e), {});
  return r.map((e) => o[e]?.screenshots);
}
function _h(e, t) {
  return {
    queryKey: [`YIR`, `Screenshots`, e.steamid, e.nYear, t],
    queryFn: async () => (await e.screenshots.load(t)) ?? null,
    staleTime: 1 / 0,
  };
}
function vh(e) {
  let { data: t } = p({ ..._h(sh(), e), enabled: !!e });
  return t ?? void 0;
}
function yh(e, t, n, r) {
  return {
    queryKey: [`YIR`, `Friends`, t, n, r],
    queryFn: async () => {
      let i = await jm.GetFriendsSharedYearInReview(e, {
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
function bh(e, t) {
  return p(yh(wo(), e, t, D.is_support));
}
function xh(e, t) {
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
function Sh(e) {
  return p(xh(wo(), e));
}
function Ch(e, t, n, r) {
  return {
    queryKey: [`YIR`, `ShareImages`, t, n, r],
    queryFn: async () => {
      let i = await jm.GetUserYearInReviewShareImage(e, {
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
function wh(e, t, n) {
  return p(Ch(wo(), e, t, n));
}
var Th = z.createContext(void 0);
function Eh() {
  let e = z.useContext(Th);
  return (Gr(e, `Cannot use YIR page data outside of Steam Replay page!`), e);
}
function Dh(e) {
  return e?.success === 1 || e?.success === 15;
}
function Oh(e) {
  let t = e ? { appid: e } : void 0,
    { data: n, isLoading: r } = Tn(t),
    { data: i, isLoading: a } = ar(t);
  return {
    item: z.useMemo(
      () => (Dh(n) ? { info: n, assets: i ?? null } : void 0),
      [n, i],
    ),
    bLoading: r || a,
  };
}
function kh(e, t = !1) {
  return p(Ah(c(), pc(), e, t));
}
function Ah(e, t, n, r = !1) {
  return {
    queryKey: [`YIR`, `storeitems`, n, r],
    queryFn: async () => {
      let i = await Promise.all(
          n.map(async (n) => {
            let [i, a] = await Promise.allSettled([
              e.fetchQuery(os(t, { appid: n })),
              e.fetchQuery(il(t, { appid: n })),
              r && e.fetchQuery(fl(t, { appid: n })),
            ]);
            return i.status === `rejected` || !Dh(i.value)
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
  E(() => import(`./yearinreview_2022_arabic.js`), [], import.meta.url)),
  (U.brazilian = () =>
    E(() => import(`./yearinreview_2022_brazilian.js`), [], import.meta.url)),
  (U.bulgarian = () =>
    E(() => import(`./yearinreview_2022_bulgarian.js`), [], import.meta.url)),
  (U.czech = () =>
    E(() => import(`./yearinreview_2022_czech.js`), [], import.meta.url)),
  (U.danish = () =>
    E(() => import(`./yearinreview_2022_danish.js`), [], import.meta.url)),
  (U.dutch = () =>
    E(() => import(`./yearinreview_2022_dutch.js`), [], import.meta.url)),
  (U.english = () =>
    E(() => import(`./yearinreview_2022_english.js`), [], import.meta.url)),
  (U.finnish = () =>
    E(() => import(`./yearinreview_2022_finnish.js`), [], import.meta.url)),
  (U.french = () =>
    E(() => import(`./yearinreview_2022_french.js`), [], import.meta.url)),
  (U.german = () =>
    E(() => import(`./yearinreview_2022_german.js`), [], import.meta.url)),
  (U.greek = () =>
    E(() => import(`./yearinreview_2022_greek.js`), [], import.meta.url)),
  (U.hungarian = () =>
    E(() => import(`./yearinreview_2022_hungarian.js`), [], import.meta.url)),
  (U.indonesian = () =>
    E(() => import(`./yearinreview_2022_indonesian.js`), [], import.meta.url)),
  (U.italian = () =>
    E(() => import(`./yearinreview_2022_italian.js`), [], import.meta.url)),
  (U.japanese = () =>
    E(() => import(`./yearinreview_2022_japanese.js`), [], import.meta.url)),
  (U.koreana = () =>
    E(() => import(`./yearinreview_2022_koreana.js`), [], import.meta.url)),
  (U.latam = () =>
    E(() => import(`./yearinreview_2022_latam.js`), [], import.meta.url)),
  (U.malay = () =>
    E(() => import(`./yearinreview_2022_malay.js`), [], import.meta.url)),
  (U.norwegian = () =>
    E(() => import(`./yearinreview_2022_norwegian.js`), [], import.meta.url)),
  (U.polish = () =>
    E(() => import(`./yearinreview_2022_polish.js`), [], import.meta.url)),
  (U.portuguese = () =>
    E(() => import(`./yearinreview_2022_portuguese.js`), [], import.meta.url)),
  (U.romanian = () =>
    E(() => import(`./yearinreview_2022_romanian.js`), [], import.meta.url)),
  (U.russian = () =>
    E(() => import(`./yearinreview_2022_russian.js`), [], import.meta.url)),
  (U.sc_schinese = () =>
    E(() => import(`./yearinreview_2022_sc_schinese.js`), [], import.meta.url)),
  (U.schinese = () =>
    E(() => import(`./yearinreview_2022_schinese.js`), [], import.meta.url)),
  (U.spanish = () =>
    E(() => import(`./yearinreview_2022_spanish.js`), [], import.meta.url)),
  (U.swedish = () =>
    E(() => import(`./yearinreview_2022_swedish.js`), [], import.meta.url)),
  (U.tchinese = () =>
    E(() => import(`./yearinreview_2022_tchinese.js`), [], import.meta.url)),
  (U.thai = () =>
    E(() => import(`./yearinreview_2022_thai.js`), [], import.meta.url)),
  (U.turkish = () =>
    E(() => import(`./yearinreview_2022_turkish.js`), [], import.meta.url)),
  (U.ukrainian = () =>
    E(() => import(`./yearinreview_2022_ukrainian.js`), [], import.meta.url)),
  (U.vietnamese = () =>
    E(() => import(`./yearinreview_2022_vietnamese.js`), [], import.meta.url)));
async function jh(e) {
  if (U[e]) return await U[e]();
}
var Mh = ml(jh),
  W = {};
((W.arabic = () =>
  E(() => import(`./yearinreview_2023_arabic.js`), [], import.meta.url)),
  (W.brazilian = () =>
    E(() => import(`./yearinreview_2023_brazilian.js`), [], import.meta.url)),
  (W.bulgarian = () =>
    E(() => import(`./yearinreview_2023_bulgarian.js`), [], import.meta.url)),
  (W.czech = () =>
    E(() => import(`./yearinreview_2023_czech.js`), [], import.meta.url)),
  (W.danish = () =>
    E(() => import(`./yearinreview_2023_danish.js`), [], import.meta.url)),
  (W.dutch = () =>
    E(() => import(`./yearinreview_2023_dutch.js`), [], import.meta.url)),
  (W.english = () =>
    E(() => import(`./yearinreview_2023_english.js`), [], import.meta.url)),
  (W.finnish = () =>
    E(() => import(`./yearinreview_2023_finnish.js`), [], import.meta.url)),
  (W.french = () =>
    E(() => import(`./yearinreview_2023_french.js`), [], import.meta.url)),
  (W.german = () =>
    E(() => import(`./yearinreview_2023_german.js`), [], import.meta.url)),
  (W.greek = () =>
    E(() => import(`./yearinreview_2023_greek.js`), [], import.meta.url)),
  (W.hungarian = () =>
    E(() => import(`./yearinreview_2023_hungarian.js`), [], import.meta.url)),
  (W.indonesian = () =>
    E(() => import(`./yearinreview_2023_indonesian.js`), [], import.meta.url)),
  (W.italian = () =>
    E(() => import(`./yearinreview_2023_italian.js`), [], import.meta.url)),
  (W.japanese = () =>
    E(() => import(`./yearinreview_2023_japanese.js`), [], import.meta.url)),
  (W.koreana = () =>
    E(() => import(`./yearinreview_2023_koreana.js`), [], import.meta.url)),
  (W.latam = () =>
    E(() => import(`./yearinreview_2023_latam.js`), [], import.meta.url)),
  (W.malay = () =>
    E(() => import(`./yearinreview_2023_malay.js`), [], import.meta.url)),
  (W.norwegian = () =>
    E(() => import(`./yearinreview_2023_norwegian.js`), [], import.meta.url)),
  (W.polish = () =>
    E(() => import(`./yearinreview_2023_polish.js`), [], import.meta.url)),
  (W.portuguese = () =>
    E(() => import(`./yearinreview_2023_portuguese.js`), [], import.meta.url)),
  (W.romanian = () =>
    E(() => import(`./yearinreview_2023_romanian.js`), [], import.meta.url)),
  (W.russian = () =>
    E(() => import(`./yearinreview_2023_russian.js`), [], import.meta.url)),
  (W.sc_schinese = () =>
    E(() => import(`./yearinreview_2023_sc_schinese.js`), [], import.meta.url)),
  (W.schinese = () =>
    E(() => import(`./yearinreview_2023_schinese.js`), [], import.meta.url)),
  (W.spanish = () =>
    E(() => import(`./yearinreview_2023_spanish.js`), [], import.meta.url)),
  (W.swedish = () =>
    E(() => import(`./yearinreview_2023_swedish.js`), [], import.meta.url)),
  (W.tchinese = () =>
    E(() => import(`./yearinreview_2023_tchinese.js`), [], import.meta.url)),
  (W.thai = () =>
    E(() => import(`./yearinreview_2023_thai.js`), [], import.meta.url)),
  (W.turkish = () =>
    E(() => import(`./yearinreview_2023_turkish.js`), [], import.meta.url)),
  (W.ukrainian = () =>
    E(() => import(`./yearinreview_2023_ukrainian.js`), [], import.meta.url)),
  (W.vietnamese = () =>
    E(() => import(`./yearinreview_2023_vietnamese.js`), [], import.meta.url)));
async function Nh(e) {
  if (W[e]) return await W[e]();
}
var Ph = ml(Nh),
  G = {};
((G.arabic = () =>
  E(() => import(`./yearinreview_2024_arabic.js`), [], import.meta.url)),
  (G.brazilian = () =>
    E(() => import(`./yearinreview_2024_brazilian.js`), [], import.meta.url)),
  (G.bulgarian = () =>
    E(() => import(`./yearinreview_2024_bulgarian.js`), [], import.meta.url)),
  (G.czech = () =>
    E(() => import(`./yearinreview_2024_czech.js`), [], import.meta.url)),
  (G.danish = () =>
    E(() => import(`./yearinreview_2024_danish.js`), [], import.meta.url)),
  (G.dutch = () =>
    E(() => import(`./yearinreview_2024_dutch.js`), [], import.meta.url)),
  (G.english = () =>
    E(() => import(`./yearinreview_2024_english.js`), [], import.meta.url)),
  (G.finnish = () =>
    E(() => import(`./yearinreview_2024_finnish.js`), [], import.meta.url)),
  (G.french = () =>
    E(() => import(`./yearinreview_2024_french.js`), [], import.meta.url)),
  (G.german = () =>
    E(() => import(`./yearinreview_2024_german.js`), [], import.meta.url)),
  (G.greek = () =>
    E(() => import(`./yearinreview_2024_greek.js`), [], import.meta.url)),
  (G.hungarian = () =>
    E(() => import(`./yearinreview_2024_hungarian.js`), [], import.meta.url)),
  (G.indonesian = () =>
    E(() => import(`./yearinreview_2024_indonesian.js`), [], import.meta.url)),
  (G.italian = () =>
    E(() => import(`./yearinreview_2024_italian.js`), [], import.meta.url)),
  (G.japanese = () =>
    E(() => import(`./yearinreview_2024_japanese.js`), [], import.meta.url)),
  (G.koreana = () =>
    E(() => import(`./yearinreview_2024_koreana.js`), [], import.meta.url)),
  (G.latam = () =>
    E(() => import(`./yearinreview_2024_latam.js`), [], import.meta.url)),
  (G.malay = () =>
    E(() => import(`./yearinreview_2024_malay.js`), [], import.meta.url)),
  (G.norwegian = () =>
    E(() => import(`./yearinreview_2024_norwegian.js`), [], import.meta.url)),
  (G.polish = () =>
    E(() => import(`./yearinreview_2024_polish.js`), [], import.meta.url)),
  (G.portuguese = () =>
    E(() => import(`./yearinreview_2024_portuguese.js`), [], import.meta.url)),
  (G.romanian = () =>
    E(() => import(`./yearinreview_2024_romanian.js`), [], import.meta.url)),
  (G.russian = () =>
    E(() => import(`./yearinreview_2024_russian.js`), [], import.meta.url)),
  (G.sc_schinese = () =>
    E(() => import(`./yearinreview_2024_sc_schinese.js`), [], import.meta.url)),
  (G.schinese = () =>
    E(() => import(`./yearinreview_2024_schinese.js`), [], import.meta.url)),
  (G.spanish = () =>
    E(() => import(`./yearinreview_2024_spanish.js`), [], import.meta.url)),
  (G.swedish = () =>
    E(() => import(`./yearinreview_2024_swedish.js`), [], import.meta.url)),
  (G.tchinese = () =>
    E(() => import(`./yearinreview_2024_tchinese.js`), [], import.meta.url)),
  (G.thai = () =>
    E(() => import(`./yearinreview_2024_thai.js`), [], import.meta.url)),
  (G.turkish = () =>
    E(() => import(`./yearinreview_2024_turkish.js`), [], import.meta.url)),
  (G.ukrainian = () =>
    E(() => import(`./yearinreview_2024_ukrainian.js`), [], import.meta.url)),
  (G.vietnamese = () =>
    E(() => import(`./yearinreview_2024_vietnamese.js`), [], import.meta.url)));
async function Fh(e) {
  if (G[e]) return await G[e]();
}
var Ih = ml(Fh),
  K = {};
((K.arabic = () =>
  E(() => import(`./yearinreview_2025_arabic.js`), [], import.meta.url)),
  (K.brazilian = () =>
    E(() => import(`./yearinreview_2025_brazilian.js`), [], import.meta.url)),
  (K.bulgarian = () =>
    E(() => import(`./yearinreview_2025_bulgarian.js`), [], import.meta.url)),
  (K.czech = () =>
    E(() => import(`./yearinreview_2025_czech.js`), [], import.meta.url)),
  (K.danish = () =>
    E(() => import(`./yearinreview_2025_danish.js`), [], import.meta.url)),
  (K.dutch = () =>
    E(() => import(`./yearinreview_2025_dutch.js`), [], import.meta.url)),
  (K.english = () =>
    E(() => import(`./yearinreview_2025_english.js`), [], import.meta.url)),
  (K.finnish = () =>
    E(() => import(`./yearinreview_2025_finnish.js`), [], import.meta.url)),
  (K.french = () =>
    E(() => import(`./yearinreview_2025_french.js`), [], import.meta.url)),
  (K.german = () =>
    E(() => import(`./yearinreview_2025_german.js`), [], import.meta.url)),
  (K.greek = () =>
    E(() => import(`./yearinreview_2025_greek.js`), [], import.meta.url)),
  (K.hungarian = () =>
    E(() => import(`./yearinreview_2025_hungarian.js`), [], import.meta.url)),
  (K.indonesian = () =>
    E(() => import(`./yearinreview_2025_indonesian.js`), [], import.meta.url)),
  (K.italian = () =>
    E(() => import(`./yearinreview_2025_italian.js`), [], import.meta.url)),
  (K.japanese = () =>
    E(() => import(`./yearinreview_2025_japanese.js`), [], import.meta.url)),
  (K.koreana = () =>
    E(() => import(`./yearinreview_2025_koreana.js`), [], import.meta.url)),
  (K.latam = () =>
    E(() => import(`./yearinreview_2025_latam.js`), [], import.meta.url)),
  (K.malay = () =>
    E(() => import(`./yearinreview_2025_malay.js`), [], import.meta.url)),
  (K.norwegian = () =>
    E(() => import(`./yearinreview_2025_norwegian.js`), [], import.meta.url)),
  (K.polish = () =>
    E(() => import(`./yearinreview_2025_polish.js`), [], import.meta.url)),
  (K.portuguese = () =>
    E(() => import(`./yearinreview_2025_portuguese.js`), [], import.meta.url)),
  (K.romanian = () =>
    E(() => import(`./yearinreview_2025_romanian.js`), [], import.meta.url)),
  (K.russian = () =>
    E(() => import(`./yearinreview_2025_russian.js`), [], import.meta.url)),
  (K.sc_schinese = () =>
    E(() => import(`./yearinreview_2025_sc_schinese.js`), [], import.meta.url)),
  (K.schinese = () =>
    E(() => import(`./yearinreview_2025_schinese.js`), [], import.meta.url)),
  (K.spanish = () =>
    E(() => import(`./yearinreview_2025_spanish.js`), [], import.meta.url)),
  (K.swedish = () =>
    E(() => import(`./yearinreview_2025_swedish.js`), [], import.meta.url)),
  (K.tchinese = () =>
    E(() => import(`./yearinreview_2025_tchinese.js`), [], import.meta.url)),
  (K.thai = () =>
    E(() => import(`./yearinreview_2025_thai.js`), [], import.meta.url)),
  (K.turkish = () =>
    E(() => import(`./yearinreview_2025_turkish.js`), [], import.meta.url)),
  (K.ukrainian = () =>
    E(() => import(`./yearinreview_2025_ukrainian.js`), [], import.meta.url)),
  (K.vietnamese = () =>
    E(() => import(`./yearinreview_2025_vietnamese.js`), [], import.meta.url)));
async function Lh(e) {
  if (K[e]) return await K[e]();
}
var Rh = ml(Lh),
  zh = new Map([
    [2022, Mh],
    [2023, Ph],
    [2024, Ih],
    [2025, Rh],
  ]);
function Bh(e) {
  return zh.get(e);
}
function Vh() {
  let e = sa(R),
    t = sa(Mh),
    n = sa(Ph),
    r = sa(Ih),
    i = sa(Rh);
  return e && t && n && r && i;
}
var Hh = new URL(
    `../../../images/applications/store/defaultappimage.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Uh = t({
    AddToWishlist: () => hg,
    AnimateCap: () => Wg,
    Appear: () => Ag,
    BackgroundImage: () => ug,
    BackgroundImageFull: () => cg,
    BadgeBarFiller: () => o_,
    BadgeBoxIntro: () => a_,
    BigNum: () => vg,
    ButtonCtn: () => Qg,
    ButtonIcon: () => $g,
    CapRow: () => Hg,
    CapsuleCtn: () => kg,
    ChartStuff: () => yg,
    ChartWidthHelper: () => Cg,
    ContentWrapper: () => Zg,
    DemoPlayDetails: () => Ng,
    Disabled: () => e_,
    ElementFadeIn: () => lg,
    EvenGradient: () => og,
    FirstPlayCtn: () => jg,
    FullWidth: () => Jh,
    GameChart: () => xg,
    GameChartCtn: () => bg,
    GameChartFirstPlayed: () => Sg,
    GameContentCtn: () => wg,
    GameCtn: () => Tg,
    GameDetailsPopup: () => Yg,
    GameItemDetails: () => Eg,
    GameLink: () => mg,
    GameLinks: () => pg,
    GamePlayDetails: () => Dg,
    GameTitle: () => Jg,
    GameWrapper: () => t_,
    GamepadUI: () => n_,
    GraphTitle: () => zg,
    HoursPlayed: () => Kh,
    InfoContainer: () => fg,
    InfoContentSpacing: () => dg,
    IntroLine: () => rg,
    LoadingCtn: () => $h,
    LongestStreak: () => Ug,
    LongestStreakGamesWrapper: () => Vg,
    MoreButtonContainer: () => r_,
    NumSubtitle: () => ng,
    OddGradient: () => eg,
    PieCtn: () => Rg,
    PlatformChartsCtn: () => Fg,
    PlatformChartsRow: () => Lg,
    PlatformDetailsSetup: () => Bg,
    PlatformSpacing: () => Ig,
    PlaytestPlayDetails: () => Pg,
    SelectedInfoCtn: () => sg,
    ShowMoreBtn: () => i_,
    SpecialFlags: () => Mg,
    StandardInfoCtn: () => tg,
    StatContainer: () => _g,
    StatsGroup: () => ag,
    SteamDeckGameCapRow: () => Og,
    StreakCtn: () => Gg,
    TimePlayed: () => Kg,
    Title: () => ig,
    TitleLongName: () => gg,
    TopGameBlockContainer: () => Qh,
    TopGameTitle: () => Zh,
    TopGameTitleCtn: () => Xh,
    TopGamesContainer: () => Yh,
    TotalHoursContainer: () => Gh,
    TotalHoursSubtitle: () => qh,
    UnavailableGame: () => qg,
    Visible: () => Xg,
    default: () => s_,
    strGameDetailsTransitionTimeMS: () => Wh,
  }),
  Wh = `300ms`,
  Gh = `wIYiBzezGYc-`,
  Kh = `VnoH-uQh03Y-`,
  qh = `-NNdNMK5dTk-`,
  Jh = `nFWRruBwpxI-`,
  Yh = `JM6qKRW4grY-`,
  Xh = `_4RT2F1qWDf0-`,
  Zh = `mNRC0alPlMM-`,
  Qh = `ZUs2MlmX1nw-`,
  $h = `xsI-Ph4IYTU-`,
  eg = `EunXAzl3zkY-`,
  tg = `orlaFahxAKc-`,
  ng = `ao7jCFf5gSI-`,
  rg = `GfwKvHYeK18-`,
  ig = `Y3O3VXtp-D8-`,
  ag = `XGhwjejL9wI-`,
  og = `_9nzY-F9xpiE-`,
  sg = `_3-uTrEiiMzE-`,
  cg = `Qh0Qui4WgT0-`,
  lg = `itZDEq-F1CU-`,
  ug = `QSp4obZnVo0-`,
  dg = `_3o5wxwNyWus-`,
  fg = `idhrMs53sfk-`,
  pg = `ulgSRWu9qlw-`,
  mg = `_3zY6l-RwMbM-`,
  hg = `mlF-EqS-dRc-`,
  gg = `FKqdvD3uF8E-`,
  _g = `XEHQVJnV1Do-`,
  vg = `Jsbe84OZILs-`,
  yg = `QJCEe-O2tKI-`,
  bg = `v6AigbmQ0CY-`,
  xg = `xPrgBVyuYEE-`,
  Sg = `_1X4tYa2ADHY-`,
  Cg = `AJaOL928lBE-`,
  wg = `YDlYx-AV0BQ-`,
  Tg = `WWkwetmW1kk-`,
  Eg = `w-Y5hex-hO4-`,
  Dg = `v6qwr186rUA-`,
  Og = `AdwjekHqa-w-`,
  kg = `I9igJfhUSos-`,
  Ag = `_4mSZbBPxm6s-`,
  jg = `SjRQa1Q12OA-`,
  Mg = `onO-DMSltE0-`,
  Ng = `qEnvz1uXbQU-`,
  Pg = `pvLpzVIEyJQ-`,
  Fg = `FrX7CkXY94E-`,
  Ig = `MAfKrCX7pZU-`,
  Lg = `_8yz-q4EfKbc-`,
  Rg = `finR-g0jShM-`,
  zg = `zt5AycfIbtY-`,
  Bg = `_2fuIOljIHpg-`,
  Vg = `hvOxlXCSt2s-`,
  Hg = `X6gvHabLLJk-`,
  Ug = `mcYlyLIeBhs-`,
  Wg = `c42w8bI3Dx0-`,
  Gg = `yVvCXO9ZLwg-`,
  Kg = `x6rpHBjxzTg-`,
  qg = `_--0ITpMloRU-`,
  Jg = `h9g2oo0APag-`,
  Yg = `_9tm73MPUptI-`,
  Xg = `eAjysxH-TgY-`,
  Zg = `eFHWwCj3bVQ-`,
  Qg = `p6eqlCr2YT0-`,
  $g = `mzZt1E4LKBc-`,
  e_ = `sNJz4ri3Yvk-`,
  t_ = `_2y76lTJ5USE-`,
  n_ = `maE92CVTDsk-`,
  r_ = `z4JPVbkRELk-`,
  i_ = `dUBouRPf5BM-`,
  a_ = `i798-6QCweY-`,
  o_ = `_6FvqHneqGds-`,
  s_ = {
    strGameDetailsTransitionTimeMS: Wh,
    TotalHoursContainer: Gh,
    HoursPlayed: Kh,
    TotalHoursSubtitle: qh,
    FullWidth: Jh,
    TopGamesContainer: Yh,
    TopGameTitleCtn: Xh,
    TopGameTitle: Zh,
    TopGameBlockContainer: Qh,
    LoadingCtn: $h,
    OddGradient: eg,
    StandardInfoCtn: tg,
    NumSubtitle: ng,
    IntroLine: rg,
    Title: ig,
    StatsGroup: ag,
    EvenGradient: og,
    SelectedInfoCtn: sg,
    BackgroundImageFull: cg,
    ElementFadeIn: lg,
    BackgroundImage: ug,
    InfoContentSpacing: dg,
    InfoContainer: fg,
    GameLinks: pg,
    GameLink: mg,
    AddToWishlist: hg,
    TitleLongName: gg,
    StatContainer: _g,
    BigNum: vg,
    ChartStuff: yg,
    GameChartCtn: bg,
    GameChart: xg,
    GameChartFirstPlayed: Sg,
    ChartWidthHelper: Cg,
    GameContentCtn: wg,
    GameCtn: Tg,
    GameItemDetails: Eg,
    GamePlayDetails: Dg,
    SteamDeckGameCapRow: Og,
    CapsuleCtn: kg,
    Appear: Ag,
    FirstPlayCtn: jg,
    SpecialFlags: Mg,
    DemoPlayDetails: Ng,
    PlaytestPlayDetails: Pg,
    PlatformChartsCtn: Fg,
    PlatformSpacing: Ig,
    PlatformChartsRow: Lg,
    PieCtn: Rg,
    GraphTitle: zg,
    PlatformDetailsSetup: Bg,
    LongestStreakGamesWrapper: Vg,
    CapRow: Hg,
    LongestStreak: Ug,
    AnimateCap: Wg,
    StreakCtn: Gg,
    TimePlayed: Kg,
    UnavailableGame: qg,
    GameTitle: Jg,
    GameDetailsPopup: Yg,
    Visible: Xg,
    ContentWrapper: Zg,
    ButtonCtn: Qg,
    ButtonIcon: $g,
    Disabled: e_,
    GameWrapper: t_,
    GamepadUI: n_,
    MoreButtonContainer: r_,
    ShowMoreBtn: i_,
    BadgeBoxIntro: a_,
    BadgeBarFiller: o_,
  },
  c_ = z.createContext({
    bIsUser: !1,
    persona_name: ``,
    avatar_url: ``,
    themeStyle: {},
  });
function l_() {
  return (0, z.useContext)(c_).bIsUser;
}
function q() {
  return (0, z.useContext)(c_).themeStyle;
}
function u_(e) {
  let t = D.logged_in,
    n = e?.content_descriptorids ?? [],
    r = l_(),
    i = c(),
    { data: a } = eo(),
    o = a ?? Wr(i),
    s =
      !!e &&
      (n.some((e) => o.setExcludedContentDescriptors.has(e)) ||
        (!!e.appid && o.mapIgnoredApps.has(e.appid)));
  return t ? !r && s : n.length > 0;
}
function d_() {
  return (0, z.useContext)(c_).persona_name;
}
function J() {
  let { persona_name: e, bIsUser: t } = (0, z.useContext)(c_);
  return z.useCallback((n, ...r) => Zl(R, n, t, e, ...r) ?? n, [t, e]);
}
function f_() {
  let { persona_name: e, bIsUser: t } = (0, z.useContext)(c_);
  return z.useCallback(
    (n, r, ...i) => {
      let a = Bh(n);
      return a && Zl(a, r, t, e, ...i);
    },
    [t, e],
  );
}
function p_(e) {
  return e < 100
    ? R.Localize(`#YIR_Percent_Low`, `1`)
    : R.Localize(`#YIR_Percent`, Math.round(e / 100).toFixed(0));
}
function m_() {
  return !0;
}
function h_() {
  let e = m_(),
    t = mn();
  return z.useCallback(
    (n) =>
      Da(n, { weekday: `short`, year: e ? void 0 : `numeric`, timeZone: t }),
    [e, t],
  );
}
var Y = l(),
  g_ = { index: void 0, appids: [] },
  __ = z.createContext(g_),
  v_ = z.createContext(() => {});
function y_(e) {
  let [t, n] = z.useState(g_);
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
  let e = z.useContext(__);
  return { unAppID: b_(e), length: e.appids.length, index: e.index };
}
function S_() {
  let e = z.useContext(v_);
  return z.useCallback((t, n) => e({ index: t, appids: n }), [e]);
}
function C_(e, t) {
  let n = S_();
  return z.useCallback(() => n(e, t), [n, e, t]);
}
function w_(e) {
  let t = z.useContext(v_);
  return z.useCallback(() => {
    t((t) => (e >= 0 && e < t.appids.length ? { ...t, index: e } : t));
  }, [t, e]);
}
function T_() {
  let e = z.useContext(v_);
  return z.useCallback(
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
    [i, a] = (0, z.useState)(!1);
  return (0, Y.jsx)(_o, {
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
    } = (0, z.useMemo)(() => Vm(l, t), [l, t]),
    { rgResults: p, nTotalResultCount: m } = (0, z.useMemo)(
      () => Lm(n, t, 5, f),
      [n, t, f, 5],
    ),
    h = (0, z.useMemo)(() => p.map((e) => e.parent_appid || e.appid), [p]),
    [g, _] = (0, z.useState)(
      p.length > 0 ? p[0].parent_appid || p[0].appid : 0,
    ),
    { isLoading: v, data: y } = kh(h, t == `vr`),
    b = Oy(p, t, v, y),
    x = t === `overall` || t === `controller` || t == `demo` || t == `playtest`;
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
              (0, Y.jsx)(`div`, { className: Ty, children: M(u) }),
              (0, Y.jsx)(`div`, {
                className: Ey,
                children: R.LocalizePlural(`#YIR_NewLine_Games`, u),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: wy,
            children: [
              (0, Y.jsx)(`div`, { className: Ty, children: M(d) }),
              (0, Y.jsx)(`div`, {
                className: Ey,
                children: R.LocalizePlural(`#YIR_NewLine_Session`, d),
              }),
            ],
          }),
          !x && (0, Y.jsx)(Ny, { percentVal: f, subToken: `#YIR_NewLine` }),
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
        className: Og,
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
function ky(e) {
  let { appid: t } = e,
    { data: n } = Hl({ appid: t }),
    r = Xs();
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
    src: Qn(a),
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
  return (0, Y.jsx)(T, {
    "flow-children": `grid`,
    className: (0, Q.default)(X, dy, Hg),
    children: t.map((e, t) =>
      (0, Y.jsx)(
        jy,
        {
          appid: e.appid,
          strInfo:
            e.nPercentagex100 === void 0 ? void 0 : p_(e.nPercentagex100),
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
    { item: l, bLoading: u } = Oh(c == null ? t : s),
    d = C_(i, r);
  if (u) return null;
  if (!l || !l.info.visible)
    return s && (c == 1 || c == 12)
      ? (0, Y.jsx)(jy, { ...e, nParentAppID: s, eChildType: 0 })
      : null;
  let f = hl(l.assets, `library_capsule`);
  return (0, Y.jsxs)(`a`, {
    className: kg,
    onClick: d,
    onMouseEnter: o,
    children: [
      f
        ? (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsxs)(`div`, {
                className: Mg,
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
        : (0, Y.jsx)(My, { item: l.info }),
      !!n && (0, Y.jsx)(`div`, { className: `x6rpHBjxzTg-`, children: n }),
    ],
  });
}
function My(e) {
  let { item: t } = e;
  return (0, Y.jsxs)(`div`, {
    className: qg,
    children: [
      (0, Y.jsx)(`img`, { src: Hh, alt: t.name || `` + t.appid }),
      (0, Y.jsx)(`div`, { className: Jg, children: t.name }),
    ],
  });
}
function Ny(e) {
  let { percentVal: t, subToken: n } = e,
    r = p_(t),
    i = `${n}_Percent`;
  return (0, Y.jsxs)(`div`, {
    className: wy,
    children: [
      (0, Y.jsx)(`div`, { className: Ty, children: r }),
      (0, Y.jsx)(`div`, { className: Ey, children: R.Localize(i) }),
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
    { isLoading: a } = kh(i),
    o = J(),
    s = [
      {
        name: R.Localize(`#YIR_FirstTime_Tab_MonthlyGrid`),
        key: `firsttimebymonth`,
        contents: (0, Y.jsx)(j, {
          children: (0, Y.jsx)(`div`, {
            className: Py,
            children: (0, Y.jsx)(Ky, { userYearInReview: t, nYear: n }),
          }),
        }),
      },
      {
        name: R.Localize(`#YIR_FirstTime_Tab_Grid`),
        key: `firsttimegrid`,
        contents: (0, Y.jsx)(j, {
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
                ? (0, Y.jsx)(tn, {
                    size: `medium`,
                    position: `center`,
                    string: ta.Localize(`#Loading`),
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
    [i, a] = (0, z.useState)(r[0]?.key);
  if (!r.length) return null;
  let o = r.find(({ key: e }) => e === i) ?? r[0];
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(T, {
        className: (0, Q.default)(By, t),
        navEntryPreferPosition: $s.FIRST,
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
      (0, Y.jsx)(T, { children: o.contents }),
    ],
  });
}
function Wy(e) {
  let { className: t, active: n, onActivate: r, children: i } = e;
  return (0, Y.jsx)(T, {
    className: (0, Q.default)(Vy, n && `_2Nz6-T0g-zc-`, n && `ActiveTab`, t),
    onActivate: r,
    children: i,
  });
}
function Gy(e) {
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
            children: R.Localize(`#YIR_ShowMore`),
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
    a = J(),
    [o, s] = z.useState(!1),
    { bShouldShowMore: c, rgGameStats: l } = (0, z.useMemo)(() => {
      let e = r.game_summary
          .filter((e) => {
            let t = n.GetGameSummaryForApp(e.appid);
            return (
              Gr(
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
            ? R.Localize(
                `#YIR_MonthlyGrid_MonthSingular_${u.getUTCMonth() + 1}`,
              )
            : ai(u),
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
              children: R.Localize(`#YIR_ShowMore`),
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
    { data: a } = kh(
      (0, z.useMemo)(() => n.map((e) => e.nParentAppID || e.appid), [n]),
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
            e.nPercentagex100 === void 0 ? void 0 : p_(e.nPercentagex100),
          strTooltip: r,
          bIsDemo: e.bIsDemo,
          bIsPlayTest: e.bIsPlaytest,
        },
        e.appid,
      ),
    );
  return (0, Y.jsx)(T, {
    "flow-children": `grid`,
    className: (0, Q.default)(jg, Iy),
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
    { item: l } = Oh(n),
    u = La(l && Zt(l.info)) || ``,
    d = q();
  if (!l || !l.info.visible) return null;
  let f = hl(l.assets, `library_capsule`);
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)({ [Tg]: !0, [Ry]: !0, [void 0]: r }),
    onClick: (e) => {
      i && (e.preventDefault(), i());
    },
    children: (0, Y.jsx)(Rt, {
      appid: n,
      children: (0, Y.jsxs)(`a`, {
        href: i ? void 0 : u,
        className: kg,
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
            : (0, Y.jsx)(My, { item: l.info }),
          !!a &&
            (0, Y.jsx)(Vl, {
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
    className: In(lb, n),
    children: (0, Y.jsx)(`div`, {
      className: In(ub, !o && `dXaS0YLAPWg-`),
      children: (0, Y.jsx)(`div`, {
        className: In(db, s && `dKtBrMD331I-`, r),
        children: (0, Y.jsx)(`div`, {
          className: In({ [fb]: !0, [mb]: !a, [hb]: o }, i),
          children: t,
        }),
      }),
    }),
  });
}
function _b(e) {
  return (0, Y.jsx)(`img`, {
    className: In(pb, e.className),
    src: e.strImageURL,
    alt: ``,
  });
}
function vb(e) {
  let { userYearInReview: t, children: n } = e,
    r = (0, z.useMemo)(() => cb(t), [t]);
  return r.eType == `basic`
    ? (0, Y.jsx)(Sb, { children: n })
    : r.eType == `single`
      ? (0, Y.jsx)(xb, { appid: r.appid, children: n })
      : (0, Y.jsx)(yb, { rgAppIDs: r.rgAppIDs, children: n });
}
function yb(e) {
  let { rgAppIDs: t, children: n } = e,
    r = q(),
    { data: i } = kh(t),
    { rgStoreItems: a, rgImageURLs: o } = (0, z.useMemo)(() => {
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
      Gr(e.assets, `Cannot get image without assets`),
      hl(e.assets, `library_hero`, `main_capsule`)
    ),
    n = (e) => (
      Gr(e.assets, `Cannot get image without assets`),
      hl(e.assets, `raw_page_background`, `main_capsule`)
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
    { item: r } = Oh(t),
    i = q();
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
                  src: hl(r.assets, `library_hero`),
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
        ? (0, Y.jsxs)(Y.Fragment, { children: [`\xA0`, No(u), `\xA0`] })
        : (0, Y.jsx)(Y.Fragment, { children: No(u) })
    );
  };
function Wx() {
  typeof Xt == `function`
    ? Xt({
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
    let e = q();
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
    let e = q();
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
    let e = q();
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
    n = q();
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
  let n = J(),
    r = q(),
    i = t.GetPlayTimeStats().summary_stats?.total_achievements || 0,
    a = t.GetFilteredGameSummary()?.length || 0,
    o = t.GetPlayTimeStats().playtime_streak?.longest_consecutive_days || 0,
    s = t.GetPlayTimeStats().by_numbers?.achievements_pct || 0,
    c = t.GetPlayTimeStats().by_numbers?.games_played_pct || 0,
    l = t.GetPlayTimeStats().by_numbers?.game_streak_pct || 0,
    u = o > 0 && l > 0 && !Fm();
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
    v = (0, Y.jsx)(Ux, {
      endValue: i,
      maxValue: (i * 100) / s,
      duration: 2e3,
      startAnimation: d,
      delay: 500,
    }),
    y = (0, Y.jsx)(Ux, {
      endValue: a,
      maxValue: (a * 100) / c,
      duration: 2e3,
      startAnimation: p,
      delay: 700,
    }),
    b = (0, Y.jsx)(Ux, {
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
      (0, Y.jsxs)(_o, {
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
              y,
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
                b,
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
    a = q();
  return (
    (i = Xn(i, 0, 100)),
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
var Zx = {
  NewActive: `#YIR_Compare_NewGames_Flavor`,
  UsedActive: `#YIR_Compare_ComfortGames_Flavor`,
  OldActive: `#YIR_Compare_OldGames_Flavor`,
};
function Qx(e) {
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
    className: (0, Q.default)(Ox, Cb[s], r[s]),
    children: [
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(Bx, r.GameNewnessTitle),
        children: R.LocalizeReact(
          `#YIR_Compare_Flavor_Title`,
          (0, Y.jsx)(`div`, {}),
        ),
      }),
      (0, Y.jsxs)(`div`, {
        className: kx,
        children: [
          (0, Y.jsx)(`div`, {
            className: Ax,
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
                    x,
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
                    x,
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
                    x,
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
                        R.Localize(`#YIR_Compare_Percentage`, _[s]),
                        (0, Y.jsx)(`div`, {
                          className: Fx,
                          children: R.Localize(Zx[s]),
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
                      children: R.Localize(`#YIR_Compare_Percentage`, d[s]),
                    }),
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)(
                        Rx,
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
function $x(e) {
  let { userYearInReview: t } = e,
    n = t.GetUserAggregateTagData(),
    { data: r } = Do(k.LANGUAGE),
    i = J(),
    a = q(),
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
        children: R.Localize(`#YIR_Spider_Title`),
      }),
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(sx, a.SectionDesc),
        children: i(`#YIR_Spider_Desc`, t.GetYear()),
      }),
      (0, Y.jsx)(`div`, {
        className: Yb,
        children: (0, Y.jsxs)(jp, {
          responsive: !0,
          className: Qb,
          style: { width: `100%`, height: `100%` },
          cx: `50%`,
          cy: `50%`,
          outerRadius: `70%`,
          data: c,
          children: [
            (0, Y.jsx)(hd, {}),
            (0, Y.jsx)(Id, {
              tick: (0, Y.jsx)(tS, { bNumberedLabels: o }),
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
function eS() {
  let [e, t] = (0, z.useState)(!1);
  return ((0, z.useEffect)(() => t(ln() || window.innerWidth <= 300), []), e);
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
    (0, Y.jsx)(iS, { label: R.Localize(e), value: t }, e),
  );
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(void 0, qb),
    children: [
      (0, Y.jsx)(`div`, {
        className: ox,
        children: R.Localize(`#YIR_ByTheNum_Title`),
      }),
      (0, Y.jsx)(`div`, { className: ex, children: r }),
    ],
  });
}
function iS(e) {
  let { label: t, value: n } = e,
    r = n ? M(n) : `-`;
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
  if (D.is_support || D.accountid == t.GetAccountID()) {
    let e = t.GetSteamID(),
      n = t.GetYear();
    return (0, Y.jsxs)(an, {
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
    { data: r } = Sh(t);
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
            children: R.Localize(`#YIR_FamilyShared`),
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
    { isLoading: r, data: i } = bh(t, n),
    a = (0, z.useMemo)(
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
    o = (0, z.useMemo)(
      () => a.map((e) => new ui(e.steamid).GetAccountID()),
      [a],
    ),
    s = Jl(o);
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
          children: R.Localize(`#YIR_FriendShared`),
        }),
        (0, Y.jsx)(T, {
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
        !!D.is_support &&
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
function pS(e) {
  let { steamid: t, year: n, ePrivacy: r } = e,
    i = q();
  return (0, Y.jsx)(Nc, {
    href: `${k.STORE_BASE_URL}replay/${t}/${n}`,
    className: (0, Q.default)({
      [void 0]: r == 1,
      [aS]: !0,
      [i.FriendCtn]: !0,
    }),
    children: (0, Y.jsx)(Ql, {
      accountID: new ui(t).GetAccountID(),
      bHideWhenNotAvailable: !0,
      bLink: !1,
    }),
  });
}
function mS(e) {
  return `${k.STORE_CDN_URL}public/images/yearinreview/${e}`;
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
    a = J(),
    o = q(),
    s = (0, z.useMemo)(() => {
      let e = [];
      return (
        typeof r.windows_playtime_percentagex100 == `number` &&
          r.windows_playtime_percentagex100 > SS &&
          e.push({
            id: `windows`,
            name: R.Localize(`#YIR_Platfrom_windows`),
            value: r.windows_playtime_percentagex100,
          }),
        typeof r.linux_playtime_percentagex100 == `number` &&
          r.linux_playtime_percentagex100 > SS &&
          e.push({
            id: `linux`,
            name: R.Localize(`#YIR_Platfrom_linux`),
            value: r.linux_playtime_percentagex100,
          }),
        typeof r.macos_playtime_percentagex100 == `number` &&
          r.macos_playtime_percentagex100 > SS &&
          e.push({
            id: `mac`,
            name: R.Localize(`#YIR_Platfrom_macos`),
            value: r.macos_playtime_percentagex100,
          }),
        typeof r.vr_playtime_percentagex100 == `number` &&
          r.vr_playtime_percentagex100 > SS &&
          e.push({
            id: `vr`,
            name: R.Localize(`#YIR_Platfrom_vr`),
            value: r.vr_playtime_percentagex100,
          }),
        typeof r.deck_playtime_percentagex100 == `number` &&
          r.deck_playtime_percentagex100 > SS &&
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
          r.windows_playtime_percentagex100 > SS &&
          e.push({
            id: `windows`,
            name: R.Localize(`#YIR_Platfrom_windows`),
            value: i.filter((e) => e.played_windows).length,
          }),
        typeof r.linux_playtime_percentagex100 == `number` &&
          r.linux_playtime_percentagex100 > SS &&
          e.push({
            id: `linux`,
            name: R.Localize(`#YIR_Platfrom_linux`),
            value: i.filter((e) => e.played_linux).length,
          }),
        typeof r.macos_playtime_percentagex100 == `number` &&
          r.macos_playtime_percentagex100 > SS &&
          e.push({
            id: `mac`,
            name: R.Localize(`#YIR_Platfrom_macos`),
            value: i.filter((e) => e.played_mac).length,
          }),
        typeof r.vr_playtime_percentagex100 == `number` &&
          r.vr_playtime_percentagex100 > SS &&
          e.push({
            id: `vr`,
            name: R.Localize(`#YIR_Platfrom_vr`),
            value: i.filter((e) => e.played_vr).length,
          }),
        typeof r.deck_playtime_percentagex100 == `number` &&
          r.deck_playtime_percentagex100 > SS &&
          e.push({
            id: `deck`,
            name: R.Localize(`#YIR_Platfrom_deck`),
            value: i.filter((e) => e.played_deck).length,
          }),
        e
      );
    }, [r, i]);
  if (s.length < 2) return null;
  let l = OS(r);
  return (0, Y.jsx)($, {
    className: (0, Q.default)(Fg, o.PlatformChartsCtn),
    children: (0, Y.jsxs)(`div`, {
      className: (0, Q.default)(X, Ig),
      children: [
        (0, Y.jsx)(`div`, { className: z_, children: a(`#YIR_Platform`) }),
        (0, Y.jsxs)(`div`, {
          className: Lg,
          children: [
            (0, Y.jsxs)(`div`, {
              className: Rg,
              children: [
                (0, Y.jsx)(`div`, {
                  className: zg,
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
                        (0, Y.jsx)(x, { fill: o[`pie_${e.id}`] }, `cell-${t}`),
                      ),
                    }),
                    (0, Y.jsx)(Re, {
                      content: (e) =>
                        (0, Y.jsx)(wS, {
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
              className: Rg,
              children: [
                (0, Y.jsx)(`div`, {
                  className: zg,
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
                        (0, Y.jsx)(x, { fill: o[`pie_${e.id}`] }, `cell-${t}`),
                      ),
                    }),
                    (0, Y.jsx)(Re, {
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
    return (0, Y.jsxs)(ci, {
      children: [n[0].name, `: `, R.Localize(`#YIR_Percent_Playtime`, p_(e))],
    });
  }
  return null;
}
function TS(e) {
  let { active: t, payload: n } = e;
  if (t && n && n.length) {
    let e = n[0].value,
      t = n[0].name;
    return (0, Y.jsx)(ci, {
      children: R.Localize(
        e === 1
          ? `#YIR_Platfrom_gamesplays_tooltip`
          : `#YIR_Platfrom_gamesplays_tooltip_Plural`,
        M(e),
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
    a = J(),
    o = a(`#YIR_TopGames_deck_subtitle`),
    {
      nTotalGames: s,
      nTotalSessions: c,
      nTotalPercentage: l,
    } = (0, z.useMemo)(() => Vm(i, `deck`), [i]),
    { rgResults: u } = (0, z.useMemo)(() => Lm(t, `deck`, 5, l), [t, l]),
    d = Number(Math.round(l / 100).toFixed(0)),
    f = a(`#YIR_TopGames_deck_new`);
  d > 50 && (f = a(`#YIR_TopGames_deck_mostly`));
  let p = (0, z.useRef)(null),
    m = Sn((e) => {
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
    v = (0, Y.jsx)(Ux, { endValue: s, duration: 2e3, startAnimation: h }),
    y = (0, Y.jsx)(Ux, { endValue: c, duration: 2e3, startAnimation: h }),
    b = (0, z.useRef)(null);
  return (
    Gl(b),
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
                (0, Y.jsxs)(_o, {
                  onVisibilityChange: _,
                  className: (0, Q.default)(X, Z.StatsRow, vS),
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
                    (0, Y.jsx)(Ny, { percentVal: l, subToken: `#YIR_NewLine` }),
                  ],
                }),
                !1,
                (0, Y.jsx)($, {
                  className: Og,
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
    r = J(),
    i = t.GetPlayTimeStats().total_stats,
    a = i.controller_playtime_percentagex100 + i.deck_playtime_percentagex100,
    o = !1;
  a > 7e3 && (o = !0);
  let s = OS(i);
  return (0, Y.jsxs)(an, {
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
              p_(a),
            ),
            subTitle: r(
              `#YIR_Platform_subtitle_controller`,
              R.Localize(`#YIR_Platfrom_controller_forsubtitle`),
            ),
          }),
        }),
      n >= 2024 &&
        (0, Y.jsx)(j, { children: (0, Y.jsx)(AS, { userYearInReview: t }) }),
    ],
  });
}
function AS(e) {
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
  if (Fm()) return null;
  let n = t.GetPlayTimeStats().playtime_streak;
  return !n ||
    (typeof n.longest_consecutive_days == `number` &&
      n.longest_consecutive_days < 5)
    ? null
    : (0, Y.jsx)(JS, { ...e, longestStreak: n });
}
function JS(e) {
  let { userYearInReview: t, longestStreak: n } = e,
    r = J(),
    i = h_(),
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
    className: (0, Q.default)(Gg, zS, jS, a.Section),
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
              (0, Y.jsx)(_o, {
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
          (0, Y.jsxs)(_o, {
            onVisibilityChange: d,
            className: (0, Q.default)(Vg, LS),
            children: [
              (0, Y.jsx)(`div`, {
                className: (0, Q.default)(RS, l && `JoDLfdcjJPY-`),
                children: r(
                  _ > 1
                    ? `#YIR_Longest_Streak_Games`
                    : `#YIR_Longest_Streak_Games_Singular`,
                  M(_),
                ),
              }),
              (0, Y.jsx)(`div`, {
                className: (0, Q.default)(BS),
                children: (0, Y.jsx)(T, {
                  "flow-children": `grid`,
                  className: (0, Q.default)(Hg, Ug, l && `c42w8bI3Dx0-`),
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
                children: R.Localize(`#YIR_ShowMore`),
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
    r = q(),
    { rgOtherYears: i } = Eh(),
    a = J();
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
                Nc,
                {
                  href: `${k.STORE_BASE_URL}replay/${t}/${e}?src=8`,
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
  return e ? Dw(new ui(e).GetAccountID().toString(16), Tw, Ew) : ``;
}
function kw(e) {
  let { steamid: t, nYear: n } = e,
    r = l_(),
    i = q();
  return D.logged_in
    ? !r && D.logged_in
      ? (0, Y.jsx)(Nc, {
          className: (0, Q.default)(pC, i.SeeRewindButton),
          href: `${k.STORE_BASE_URL}replay/${D.steamid}/${n}?src=9`,
          children: R.Localize(`#YIR_SeeYourRewind`),
        })
      : (0, Y.jsxs)(T, {
          className: cC,
          children: [
            (0, Y.jsx)(Aw, { steamid: t, nYear: n }),
            (0, Y.jsxs)(T, {
              className: lC,
              onActivate: () => {
                Ci((0, Y.jsx)(Pw, { steamid: t, nYear: n }), window, {
                  strTitle: ta.Localize(`#Button_Share`),
                });
              },
              children: [
                (0, Y.jsx)(nl, { className: (0, Q.default)(xC) }),
                (0, Y.jsx)(`span`, {
                  className: (0, Q.default)(bC),
                  children: ta.Localize(`#Button_Share`),
                }),
              ],
            }),
          ],
        })
    : null;
}
function Aw(e) {
  let { steamid: t, nYear: n } = e,
    [r, i] = (0, z.useState)(``),
    a = rh(t, n),
    { mutateAsync: o } = ih(t, n),
    s = (0, z.useMemo)(() => a === 3 || a === 2, [a]),
    c = [
      { data: 1, label: R.Localize(`#YIR_ShareVisbility_Private`) },
      { data: 2, label: R.Localize(`#YIR_ShareVisbility_FriendsOnly`) },
      { data: 3, label: R.Localize(`#YIR_ShareVisbility_Public`) },
    ];
  return (0, Y.jsxs)(T, {
    "flow-children": `column`,
    children: [
      (0, Y.jsx)(`div`, {
        className: (0, Q.default)(uC, s ? mC : ``),
        children: s
          ? R.Localize(`#YIR_ShareVisbility`)
          : R.Localize(`#YIR_ShareModal_DisabledShareTtp`),
      }),
      (0, Y.jsx)(`div`, {
        className: hC,
        children: (0, Y.jsx)(Dc, {
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
    [i, a] = (0, z.useState)(),
    o = rh(n, r),
    s = (0, z.useMemo)(() => o === 3 || o === 2, [o]),
    [c, l] = (0, z.useState)(ms(k.LANGUAGE)),
    u = (0, z.useMemo)(() => Yc(c), [c]),
    d = Ow(n),
    f = `https://s.team/${Mw(r)}/${d}`,
    p = (0, z.useMemo)(() => {
      let e = new URL(f);
      return (e.searchParams.set(Nw, u), e.href);
    }, [u, f]),
    m = () => {
      a(!0);
    };
  return i
    ? (0, Y.jsx)(on, { eventLink: p, closeModal: t })
    : (0, Y.jsx)(Jn, {
        strDescription: ``,
        strTitle: R.Localize(`#YIR_ShareModal_Title`),
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
                children: (0, Y.jsx)(nn, {
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
                  children: k.IN_MOBILE_WEBVIEW
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
    [a, o] = (0, z.useState)(0),
    [s, c] = (0, z.useState)(!1),
    { isLoading: l, data: u } = wh(n, r, t),
    d = u ? u.length - 1 : 0,
    f = `${k.BASE_URL_SHARED_CDN}social_sharing/`,
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
          className: (0, Q.default)(DC, OC),
          children: (0, Y.jsx)(tn, { position: `center` }),
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
                    children: (0, Y.jsx)(ji, { angle: 270 }),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(
                      LC,
                      zC,
                      a === d && `pOiTs551keM-`,
                    ),
                    onClick: m,
                    children: (0, Y.jsx)(ji, { angle: 90 }),
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
                              children: R.Localize(
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
              k.IN_MOBILE_WEBVIEW
                ? (0, Y.jsx)(Rw, {
                    imageUrl: `${f}${u[a].url_path}`,
                    shareUrl: i,
                  })
                : k.IN_CLIENT
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
                children: R.Localize(
                  `#YIR_ShareModal_ImageCaption_${u[a].name}`,
                ),
              }),
            ],
          })
        : (0, Y.jsx)(`div`, {
            className: (0, Q.default)(DC, OC),
            children: (0, Y.jsx)(`div`, {
              children: R.Localize(`#YIR_ShareModal_FailedToGenerateImages`),
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
    en(`Escape`, a),
    en(`Esc`, a),
    (0, Y.jsx)(`div`, {
      className: kC,
      children: (0, Y.jsx)(`div`, {
        className: AC,
        onClick: a,
        children: (0, Y.jsxs)(`div`, {
          className: jC,
          children: [
            (0, Y.jsx)(`div`, { className: MC, children: (0, Y.jsx)(Eo, {}) }),
            (0, Y.jsx)(`div`, {
              className: (0, Q.default)(LC, RC, t === 0 && `pOiTs551keM-`),
              onClick: r,
              children: (0, Y.jsx)(ji, { angle: 270 }),
            }),
            (0, Y.jsx)(`div`, {
              className: (0, Q.default)(LC, zC, t === n && `pOiTs551keM-`),
              onClick: i,
              children: (0, Y.jsx)(ji, { angle: 90 }),
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
      (0, Y.jsx)(dc, { className: ZC }),
      (0, Y.jsx)(`span`, {
        className: (0, Q.default)(QC),
        children: R.Localize(`#YIR_ShareModal_SaveImage`),
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
          subject: R.Localize(`#YIR_ShareModal_MobileSubject`),
          message: n,
          title: R.Localize(`#YIR_ShareModal_MobileMessage`),
        };
        e.postMessage(JSON.stringify(r));
      }
    },
    children: [
      (0, Y.jsx)(nl, { className: ZC }),
      (0, Y.jsx)(`span`, {
        className: (0, Q.default)(QC),
        children: R.Localize(`#YIR_ShareModal_ShareImage`),
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
    [s, c] = (0, z.useState)(!1);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(`div`, {
        className: cw,
        children: R.Localize(`#YIR_ShareModal_YourLink`),
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
              (0, Y.jsx)(nl, { className: vw }),
              (0, Y.jsx)(`span`, {
                className: (0, Q.default)(yw),
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
        className: (0, Q.default)(uw, lw),
        children: [
          (0, Y.jsxs)(`div`, {
            onClick: o,
            className: (0, Q.default)(ow, dw),
            children: [
              (0, Y.jsx)(kr, { className: vw }),
              (0, Y.jsx)(`span`, {
                className: (0, Q.default)(yw),
                children: R.Localize(`#YIR_ShareModal_ShareOnFriendsActivity`),
              }),
            ],
          }),
          (0, Y.jsxs)(`a`, {
            href: `${k.COMMUNITY_BASE_URL}profiles/${D.steamid}/edit/showcases`,
            className: (0, Q.default)(ow, dw),
            children: [
              (0, Y.jsx)(Fo, { className: vw }),
              (0, Y.jsx)(`span`, {
                className: (0, Q.default)(yw),
                children: R.Localize(`#YIR_ShareModal_AddShowcase`),
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
                subject: R.Localize(`#YIR_ShareModal_MobileSubject`),
                message: R.Localize(`#YIR_ShareModal_MobileMessage`),
                title: R.Localize(`#YIR_ShareModal_MobileMessage`),
              };
              e.postMessage(JSON.stringify(t));
            }
          },
          children: [
            (0, Y.jsx)(nl, { className: vw }),
            (0, Y.jsx)(`span`, {
              className: (0, Q.default)(yw),
              children: R.Localize(`#YIR_ShareModal_ShareLink`),
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          onClick: r,
          className: (0, Q.default)(ow, !t && `Vpkqj7M1WBw-`),
          children: [
            (0, Y.jsx)(kr, { className: vw }),
            (0, Y.jsx)(`span`, {
              className: (0, Q.default)(yw),
              children: R.Localize(`#YIR_ShareModal_ShareOnFriendsActivity`),
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
    d = J(),
    f = (0, z.useMemo)(() => u.slice(0, 5), [u]),
    { data: p } = kh((0, z.useMemo)(() => f.map((e) => e.appid), [f])),
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
        !Fm()
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
    (0, Y.jsx)(`div`, { className: z_, children: s })
  );
}
function Yw(e) {
  let t = d_(),
    {
      rgGamesLength: n,
      nNewGames: r,
      nDemoPlayed: i,
      nPlaytestPlayed: a,
      nYear: o,
      nPreviousYearsGames: s,
    } = e,
    c = q(),
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
                children: R.LocalizeReact(
                  `#YearInReview_SteamRewindHeader`,
                  (0, Y.jsx)(`span`, {
                    className: (0, Q.default)(L_, c.UserName),
                    children: R.Localize(`#YearInReview_PossessiveUserName`, t),
                  }),
                  ta.Localize(`#date_year`, o),
                ),
              }),
              (0, Y.jsxs)(`div`, {
                className: (0, Q.default)(xv, bv),
                children: [
                  (0, Y.jsx)(`div`, {
                    className: (0, Q.default)(tv, u),
                    children: M(n),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: wv,
                    children: R.LocalizePlural(`#YIR_YourSummary_Games`, n),
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
                      children: M(r),
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
                      children: M(i),
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
                      children: M(a),
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
                children: R.LocalizePlural(`${t}Less`, r - n, M(r - n)),
              }),
            ],
          })
        : (0, Y.jsxs)(`div`, {
            className: Ov,
            children: [
              (0, Y.jsx)(`div`, { className: (0, Q.default)(kv, jv) }),
              (0, Y.jsx)(`div`, {
                className: Av,
                children: R.LocalizePlural(`${t}More`, n - r, M(n - r)),
              }),
            ],
          });
}
function Zw(e) {
  let { userYearInReview: t } = e,
    n = t.GetPlayTimeStats().summary_stats;
  t.GetFilteredGameSummary();
  let r = t.GetYear(),
    i = q();
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
                children: M(n.total_achievements),
              }),
              (0, Y.jsx)(`div`, {
                className: wv,
                children: R.LocalizePlural(
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
                    children: M(n.total_games_with_achievements || 0),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: wv,
                    children: R.LocalizePlural(
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
                    children: M(n.total_rare_achievements || 0),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: wv,
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
function Qw(e) {
  let { oLongestStreak: t, nPrevLongestStreamDays: n } = e,
    r = t.rtime_start ?? 0,
    i = t.longest_consecutive_days ?? 0,
    a = h_(),
    o = a(r),
    s = a(r + i * 24 * 60 * 60),
    c = q();
  if (Fm()) return null;
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
              children: R.LocalizePlural(
                `#YIR_Game_LongestStreak_DaysPlayed`,
                i,
              ),
            }),
            (0, Y.jsx)(`div`, {
              className: wv,
              children: R.Localize(`#YIR_YourSummary_Stat_Streak`),
            }),
            (0, Y.jsx)(`div`, {
              className: Dv,
              children: R.Localize(
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
                children: M(t.streak_games.length),
              }),
              (0, Y.jsx)(`div`, {
                className: wv,
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
function $w(e) {
  let { oTotalStats: t, nYear: n } = e,
    r = p_(
      t.total_playtime_percentagex100 -
        t.controller_playtime_percentagex100 -
        t.vr_playtime_percentagex100 -
        t.deck_playtime_percentagex100,
    ),
    i = t.controller_playtime_percentagex100 + t.deck_playtime_percentagex100,
    a = p_(i),
    o = mS(`keyboard.png?v=3`),
    s = mS(`controllers.png?v=2`),
    c = q(),
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
                    children: R.Localize(`#YIR_HowYouPlayed_Keyboard_Generic`),
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
function eT(e) {
  let { gameStat: t, gridClass: n } = e,
    { appid: r } = t,
    { item: i } = Oh(r),
    a = C_(0, [r]),
    o = q();
  if (!i) return null;
  let s = hl(i.assets, `library_hero`),
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
                (0, Y.jsx)(`div`, { className: tv, children: M(c) }),
                (0, Y.jsx)(`div`, {
                  className: wv,
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
function tT(e) {
  let { percentVal: t, subToken: n, className: r } = e,
    i = p_(t),
    a = `${n}_Percent`;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(xv, r),
    children: [
      (0, Y.jsx)(`div`, { className: tv, children: i }),
      (0, Y.jsx)(`div`, { className: wv, children: R.Localize(a) }),
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
var cT = z.memo(function (e) {
    let { data: t, topMonthlyAppsAndRanks: n } = e,
      r = q(),
      i = (0, z.useCallback)((e, n) => (t[n]?.date ? Zr(t[n].date) : ``), [t]),
      a = (0, z.useRef)(void 0);
    return (0, Y.jsxs)(Np, {
      responsive: !0,
      style: { width: `100%`, height: `100%` },
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 30,
      children: [
        (0, Y.jsx)(Jt, { vertical: !1, stroke: `#a0aab6` }),
        (0, Y.jsx)(Je, {
          tickFormatter: p_,
          tick: { fill: `white` },
          axisLine: !0,
        }),
        (0, Y.jsx)(Re, {
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
        (0, Y.jsx)(Kt, {
          barSize: 60,
          dataKey: `topPlayedPercentBreakdownPerMonth.${Um}`,
          name: Um,
          stackId: `a`,
          fill: r.monthOthersColor,
          onMouseEnter: () => (a.current = Um),
          onMouseOut: () => (a.current = void 0),
        }),
        n.map((e, t) =>
          (0, Y.jsx)(
            Kt,
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
        (0, Y.jsx)(Ht, {
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
    i = q(),
    a = J();
  if (t && n && n.length) {
    let e = n[0].payload.date.getUTCMonth(),
      t = R.Localize(`#YIR_MonthlyCharts_MonthNoun_${e + 1}`),
      o = n[0].payload.topPlayedPercentBreakdownPerMonth[Hm],
      s = Object.keys(n[0].payload.otherPlayedPercentBreakdownForMonth),
      c = n[0].payload.topPlayedRelativePercentBreakdownForMonth,
      l = n.find((e) => e.name === r.current),
      u = l?.name === Um,
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
                      children: R.Localize(
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
    return (0, Y.jsxs)(ci, {
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
  let { item: n } = Oh(parseInt(e));
  if (!n?.assets) return null;
  let r = hl(n.assets, `library_capsule`) || Hh;
  return (0, Y.jsx)(`img`, { alt: ``, style: t, className: sT, src: r });
}
function pT({ appId: e, className: t }) {
  let { item: n } = Oh(parseInt(e));
  return n
    ? (0, Y.jsx)(`div`, { className: t, children: n.info.name }, e)
    : null;
}
function mT(e) {
  let { appId: t, className: n, value: r, date: i } = e,
    { item: a } = Oh(parseInt(t));
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
var hT = z.memo(function (e) {
  let { data: t, name: n, color: r } = e,
    i = q(),
    a = (0, z.useCallback)((e, n) => (t[n]?.date ? Zr(t[n].date) : ``), [t]),
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
        (0, Y.jsx)(Re, {
          wrapperStyle: {
            outline: `1px solid ` + (r ?? i.chartAccentColorAlt),
          },
          allowEscapeViewBox: { x: !1, y: !0 },
          reverseDirection: { x: o, y: !1 },
          isAnimationActive: !1,
          content: (e) =>
            (0, Y.jsx)(_T, { active: e.active, payload: e.payload, name: n }),
        }),
        (0, Y.jsx)(Jt, { vertical: !1, stroke: `#a0aab6` }),
        (0, Y.jsx)(Je, {
          tickFormatter: p_,
          tick: { fill: `white` },
          axisLine: !0,
          orientation: c,
        }),
        (0, Y.jsx)(Kt, {
          barSize: 60,
          dataKey: `percent`,
          fill: r ?? i.chartAccentColorAlt,
        }),
        (0, Y.jsx)(Ht, {
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
    i = q(),
    a = n[0];
  if (t && a?.value) {
    let e = a.payload.date.getUTCMonth(),
      t = R.Localize(`#YIR_MonthlyCharts_MonthNoun_${e + 1}`),
      n = a.value;
    return (0, Y.jsx)(ci, {
      style: { background: `#0e1014` },
      children: (0, Y.jsx)(
        `div`,
        {
          style: { color: i.chartAccentColor },
          children: R.LocalizeReact(
            `#YIR_MonthlyCharts_TopPlayedGameTooltip_Percent`,
            (0, Y.jsx)(`b`, { children: p_(n) }),
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
  return R.LocalizeReact(i, (0, Y.jsx)(`b`, { children: p_(e) }), t, ...r);
}
var yT = `Md96G4kZDAE-`;
function bT(e) {
  let { userYearInReview: t } = e,
    n = J(),
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
  let t = dh(e),
    n = ph(e, !1);
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
    r = dh(t);
  return !r || !((r?.achievements?.length ?? 0) > 0)
    ? null
    : (0, Y.jsx)(j, {
        children: (0, z.createElement)(LT, {
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
    [a, o] = (0, z.useState)(r),
    s = J(),
    c = hh(t),
    l = () => o(!1),
    u = i.achievements?.length ?? 0,
    d = i.all_time_unlocked_achievements,
    f = d == c && c > 0 && u > 0 && d > 0 && !i.unlocked_more_in_future,
    p = Kl({ appid: t, profileUrl: sn(n.GetSteamID()) }),
    m = Fl();
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(X, wT),
    children: [
      a &&
        (0, Y.jsx)(`div`, {
          onClick: l,
          className: `_2i6-GdwcqFw-`,
          children: R.Localize(`#YIR_TopGames_ContentRestrictionAchievements`),
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
                  children: R.Localize(`#YIR_SeeAllAchievements`),
                }),
              !m &&
                (0, Y.jsx)(Nc, {
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
        className: (0, Q.default)({ [void 0]: f, [OT]: !0 }),
        children: (0, Y.jsxs)(`div`, {
          className: kT,
          children: [
            (0, Y.jsxs)(`div`, {
              className: AT,
              children: [
                (0, Y.jsx)(`div`, { className: jT, children: M(u) }),
                (0, Y.jsx)(`div`, {
                  className: MT,
                  children: R.LocalizeReact(
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
  Gr(n, `Missing appid for achievements list!`);
  let r = mh(n),
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
              BT,
              { appid: n, display: e },
              `displayAch_` + e.internal_name,
            ),
          ),
      })
    : (0, Y.jsx)(tn, { size: `small`, string: ta.Localize(`#Loading`) });
}
var zT = 10;
function BT(e) {
  let { display: t, appid: n } = e,
    r = `${k.MEDIA_CDN_COMMUNITY_URL}images/apps/${n}/${t.icon}`,
    i = Number.parseFloat(`` + t.player_percent_unlocked) < zT;
  return (0, Y.jsx)(Pn, {
    toolTipContent: (0, Y.jsx)(VT, { display: t }),
    className: (0, Q.default)({ [PT]: i, [NT]: !0 }),
    children: (0, Y.jsx)(ql, {
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
      className: Or,
      children: [
        (0, Y.jsx)(`div`, { children: n }),
        (0, Y.jsx)(`br`, {}),
        (0, Y.jsx)(`div`, {
          children: R.Localize(
            `#YIR_Achievement_ttip`,
            M(Math.max(0.1, Number.parseFloat(`` + t.player_percent_unlocked))),
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
    i = vh(t),
    [a, o] = Qt(),
    s = J();
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
    [a, o] = (0, z.useState)(r),
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
          children: R.Localize(`#YIR_TopGames_ContentRestrictionScreenshots`),
        }),
      (0, Y.jsx)(`img`, { alt: ``, src: mS(`screenshot_placeholder.png`) }),
    ],
  });
}
function YT(e) {
  let { userYearInReview: t } = e,
    n = t.GetTopGamesShownAppIDs(),
    r = J(),
    i = (0, z.useMemo)(() => n?.slice(0, 5), [0, 5, n]);
  if (!n || n.length == 0 || 0 > n.length) return null;
  let a = n.length > 1;
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(Yh),
    children: (0, Y.jsxs)(an, {
      placeholderHeight: `100vh`,
      rootMargin: Xm,
      className: Jh,
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
    i = J(),
    a = f_(),
    o = t.appid,
    s = r.GetYear();
  for (let e = s; e >= CT; --e) {
    let t = `#steamrewind${e}_gametext_appid_${o}`,
      n = a(e, t, s);
    if (n !== void 0)
      return (0, Y.jsxs)(`div`, { className: rg, children: [n, ` `] });
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
          className: (0, Q.default)(rg, void 0),
          children: i(c, r.GetYear()),
        })
      : null
  );
}
function ZT(e) {
  let [t, n] = z.useState(!1),
    r = z.useRef(null),
    i = r.current,
    a = T_();
  (z.useEffect(() => {
    (e !== null && e != i && n(!0), e === null && t && n(!1));
  }, [n, t, e, i]),
    (r.current = e));
  let o = z.useRef(void 0),
    s = z.useCallback(() => {
      ((o.current = setTimeout(() => a(e), parseInt(Wh))), n(!1));
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
function QT(e) {
  return z.useCallback(
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
    u = Dn();
  if (n == null && !a) return null;
  let d = (0, Q.default)(Yg, a && `eAjysxH-TgY-`, u && `maE92CVTDsk-`),
    f = (0, Y.jsx)(`div`, {
      className: d,
      onClick: s,
      children: (0, Y.jsxs)(`div`, {
        className: Zg,
        children: [
          (0, Y.jsx)(`div`, {
            className: t_,
            children:
              n !== null &&
              (0, Y.jsx)(eE, { unAppID: n, userYearInReview: t, index: 1 }),
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
var eE = z.memo(function (e) {
  let { unAppID: t, userYearInReview: n, index: r } = e,
    i = n.GetGameStats(t),
    a = Math.trunc(i?.playtime_streak?.longest_consecutive_days || 1),
    o = n.GetGameSummaryForApp(t),
    s = o ? o.parent_appid || t : 0,
    { item: c, bLoading: l } = Oh(s),
    u = xT(s),
    d = La(c ? Zt(c.info) : void 0),
    f = J(),
    p = r % 2 ? `OddGradient` : `EvenGradient`,
    m = Dn(),
    h = l_(),
    g = q(),
    _ = Fl(),
    { gameChartData: v, rank: y } = (0, z.useMemo)(
      () => n.GetChartMonthlyDataForApp(t),
      [t, n],
    );
  if (l)
    return (0, Y.jsx)(`div`, {
      className: (0, Q.default)(Qh, Uh[p], g.TopGameBlockContainer, g[p], $h),
      children: (0, Y.jsx)(tn, { position: `center` }),
    });
  if (!c || !o) return null;
  let b = d;
  k.IN_CLIENT && (b = `steam://openurl/` + b);
  let x = v?.find((e) => e.percent > 0),
    ee = x ? x.date.getUTCMonth() : null,
    te = ee ? R.Localize(`#YIR_MonthlyCharts_MonthNoun_${ee + 1}`) : ``,
    ne = Math.trunc(o.total_sessions),
    re = ``;
  h && m
    ? (re = `steam://open/games/details/${t}`)
    : h && !k.IN_MOBILE_WEBVIEW && (re = `steam://open/library/details/${t}`);
  let ie = c.info.name ?? ``,
    ae = ie;
  return (
    o.demo
      ? (ae = R.Localize(`#YIR_GameName_PlusDemo`, ae))
      : o.playtest && (ae = R.Localize(`#YIR_GameName_PlusPlaytest`, ae)),
    (0, Y.jsxs)($, {
      className: (0, Q.default)(Qh, Uh[p], g.TopGameBlockContainer, g[p]),
      children: [
        (0, Y.jsx)(nE, { item: c }),
        (0, Y.jsxs)(`div`, {
          className: tg,
          children: [
            (0, Y.jsx)(tE, { item: c }),
            (0, Y.jsxs)(`div`, {
              className: (0, Q.default)(X, dg),
              children: [
                (0, Y.jsxs)(`div`, {
                  className: fg,
                  children: [
                    (0, Y.jsxs)(T, {
                      className: pg,
                      "flow-children": `row`,
                      children: [
                        _ &&
                          (0, Y.jsx)(`a`, {
                            href: b,
                            className: `_3zY6l-RwMbM-`,
                            children: R.Localize(`#YIR_TopGames_VisitInStore`),
                          }),
                        !_ &&
                          (0, Y.jsx)(Nc, {
                            href: b,
                            target: `_blank`,
                            className: `_3zY6l-RwMbM-`,
                            children: R.Localize(`#YIR_TopGames_VisitInStore`),
                          }),
                        !!re &&
                          (0, Y.jsx)(Nc, {
                            href: re,
                            className: `_3zY6l-RwMbM-`,
                            children: R.Localize(
                              `#YIR_TopGames_VisitInLibrary`,
                            ),
                          }),
                        !h && (0, Y.jsx)(iE, { appID: s }),
                      ],
                    }),
                    (0, Y.jsx)(`div`, {
                      className: (0, Q.default)({
                        [ig]: !0,
                        [gg]: (ae?.length ?? 0) > 25,
                      }),
                      children: ae,
                    }),
                    (0, Y.jsx)(XT, {
                      gameSummary: o,
                      userYearInReview: n,
                      index: r,
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: ag,
                      children: [
                        !!o.total_playtime_percentagex100 &&
                          (0, Y.jsxs)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: [
                              (0, Y.jsx)(`div`, {
                                className: `Jsbe84OZILs-`,
                                children: p_(
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
                                children: M(ne),
                              }),
                              (0, Y.jsx)(`div`, {
                                className: `ao7jCFf5gSI-`,
                                children: R.Localize(
                                  ne == 1
                                    ? `#YIR_Game_PlaySession_Singular`
                                    : `#YIR_Game_PlaySessions`,
                                ),
                              }),
                            ],
                          }),
                        !Fm() &&
                          a > 1 &&
                          (0, Y.jsx)(`div`, {
                            className: `XEHQVJnV1Do-`,
                            children: (0, Y.jsxs)(Vl, {
                              toolTipContent: R.LocalizeReact(
                                `#YIR_Game_LongestStreak_ttip`,
                              ),
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `Jsbe84OZILs-`,
                                  children: M(a),
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
                            children: (0, Y.jsxs)(Vl, {
                              toolTipContent: f(
                                `#YIR_TopGames_NewThisYEar_ttip`,
                              ),
                              children: [
                                (0, Y.jsx)(`div`, {
                                  className: `Jsbe84OZILs-`,
                                  children: (0, Y.jsx)(Jc, {}),
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
                                children: (0, Y.jsx)(Pl, {}),
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
                        children: te
                          ? f(
                              o?.new_this_year
                                ? `#YIR_TopGames_firstplayedNew`
                                : `#YIR_TopGames_firstplayed`,
                              te,
                            )
                          : null,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `xPrgBVyuYEE-`,
                        children: (0, Y.jsx)(hT, {
                          data: v,
                          name: ie,
                          color: g[`topApp_${y}`],
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
    n = u_(t.info),
    r = hl(t.assets, `library_hero`);
  return (0, Y.jsx)(`div`, {
    className: ug,
    style: n ? void 0 : { backgroundImage: `url(${r})` },
  });
}
function nE(e) {
  let { item: t } = e,
    n = q(),
    r = u_(t.info),
    i = hl(t.assets, `library_hero`);
  return (0, Y.jsx)(Y.Fragment, {
    children: (0, Y.jsx)(`div`, {
      className: (0, Q.default)(cg, n.BackgroundImageFull),
      style: r ? void 0 : { backgroundImage: `url(${i})` },
    }),
  });
}
function rE(e) {
  let { appid: t, userYearInReview: n, item: r } = e,
    i = u_(r.info);
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(IT, { bBlurContent: i, appid: t, userYearInReview: n }),
      (0, Y.jsx)(KT, { bBlurContent: i, appid: t, nYear: n.GetYear() }),
    ],
  });
}
function iE(e) {
  let { appID: t } = e,
    n = m(t),
    r = v(t),
    { bIsOwned: i } = ht(n),
    a = br(),
    { mutate: o } = Ce(t, !r, a);
  return !D.logged_in || i
    ? null
    : (0, Y.jsxs)(T, {
        className: (0, Q.default)(hg),
        onActivate: (e) => {
          (e.preventDefault(), e.stopPropagation(), o());
        },
        children: [
          r ? (0, Y.jsx)(lo, {}) : (0, Y.jsx)(ol, {}),
          ta.Localize(r ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`),
        ],
      });
}
function aE(e) {
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
      ? (0, Y.jsx)(pE, {
          message: R.Localize(`#YIR_Error_NoShareNoGameplayNotUser`),
        })
      : !n || !r
        ? (0, Y.jsx)(pE, { message: R.Localize(`#YIR_Error_NoData`) })
        : (0, Y.jsx)(Th.Provider, {
            value: t,
            children: (0, Y.jsx)(T, {
              navRef: a,
              children: (0, Y.jsx)(oE, { steamid: n, year: r }),
            }),
          })
  );
}
function oE(e) {
  let { steamid: t, year: n } = e,
    r = new ui(t),
    [i, a] = Yl(r.GetAccountID()),
    { userYearInReview: o, isLoading: s } = nh(t, n),
    { isLoading: c, isError: l } = kh(o?.GetTopGamesShownAppIDs() ?? []),
    u = Vh();
  if (a || s || c || !u)
    return (0, Y.jsx)(tn, {
      string: ta.Localize(`#Loading`),
      position: `center`,
    });
  if (!i || !r.BIsIndividualAccount())
    return (0, Y.jsx)(pE, { message: R.Localize(`#YIR_Error_NoUser`) });
  if (!o || l)
    return (0, Y.jsx)(pE, { message: R.Localize(`#YIR_Error_PageLoadFailed`) });
  let d = !o.GetPlayTimeStats()?.game_summary?.length;
  return D.steamid !== i.steamid && d
    ? (0, Y.jsx)(pE, {
        message: R.Localize(`#YIR_Error_NoShareNoGameplayNotUser`),
      })
    : d
      ? (0, Y.jsx)(pE, { message: R.Localize(`#YIR_Error_NoShareNoGameplay`) })
      : (0, Y.jsx)(T, {
          autoFocus: !0,
          noFocusRing: !0,
          focusable: !1,
          scrollIntoViewType: ys.NoTransformSparseContent,
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
    o = Xl(i),
    s = wo(),
    c = r.GetSteamID(),
    l = r.GetYear(),
    u = z.useMemo(() => ah(s, c, l), [s, c, l]),
    d = z.useMemo(
      () => ({
        bIsUser: t,
        persona_name: n.persona_name,
        avatar_url: n.avatar_url,
        themeStyle: o,
      }),
      [t, n.persona_name, n.avatar_url, o],
    );
  return (0, Y.jsx)(c_.Provider, {
    value: d,
    children: (0, Y.jsx)(hc, {
      eAdultOnlyMediaBehavior: t ? `allowed` : `masked`,
      children: (0, Y.jsx)(oh.Provider, {
        value: u,
        children: (0, Y.jsx)(y_, { children: a }),
      }),
    }),
  });
}
function cE(e) {
  let { userYearInReview: t, avatarAndPersona: n } = e,
    r = t.GetYear(),
    i = D.logged_in && D.steamid === n.steamid,
    [a, o] = (0, z.useState)(i),
    [s, c] = (0, z.useState)(r);
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
  uh(t);
  let { persona_name: a } = (0, z.useContext)(c_),
    o = t.GetPlayTimeStats().game_summary?.length;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(dE, { userYearInReview: t }),
      (0, Y.jsx)(j, {
        children: (0, Y.jsxs)(vb, {
          userYearInReview: t,
          children: [
            (0, Y.jsx)(Hw, { userYearInReview: t }),
            o === 1 && (0, Y.jsx)(YT, { userYearInReview: t }),
          ],
        }),
      }),
      (0, Y.jsx)(j, { children: (0, Y.jsx)(Jx, { userYearInReview: t }) }),
      typeof o == `number` &&
        o > 1 &&
        (0, Y.jsxs)(Y.Fragment, {
          children: [
            (0, Y.jsx)(YT, { userYearInReview: t }),
            (0, Y.jsx)(`div`, {
              className: `xan-F7AKHTg-`,
              children: (0, Y.jsx)(j, {
                children: (0, Y.jsx)(bT, { userYearInReview: t }),
              }),
            }),
          ],
        }),
      (0, Y.jsx)(`div`, {
        className: Fv,
        children: (0, Y.jsx)(j, {
          children: (0, Y.jsx)(ES, { userYearInReview: t }),
        }),
      }),
      !!t.GetPlayTimeStats().playtime_streak &&
        (0, Y.jsx)(j, { children: (0, Y.jsx)(qS, { userYearInReview: t }) }),
      typeof o == `number` &&
        o > 5 &&
        (0, Y.jsx)(j, {
          children: (0, Y.jsx)(Hy, { userYearInReview: t, nYear: i }),
        }),
      (0, Y.jsx)(j, {
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
                    children: R.Localize(`#YIR_ShareOptionsTitle`),
                  }),
                  (0, Y.jsxs)(T, {
                    className: `QsTph6fo6tE-`,
                    children: [
                      (0, Y.jsxs)(`div`, {
                        className: (0, Q.default)(`PmXhnAChGR0-`),
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `smzKi1RTbdQ-`,
                            children: R.Localize(`#YIR_ShareModal_TitleSocial`),
                          }),
                          (0, Y.jsx)(kw, { steamid: r, nYear: i }),
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
                          (0, Y.jsxs)(Nc, {
                            href: `${k.COMMUNITY_BASE_URL}profiles/${D.steamid}/edit/showcases`,
                            className: (0, Q.default)(`j8A4NpxJ0t0-`),
                            children: [
                              (0, Y.jsx)(Fo, { className: `uc6rSxuiYYU-` }),
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
      (0, Y.jsx)(j, { children: (0, Y.jsx)(lS, { userYearInReview: t }) }),
      (0, Y.jsx)(j, { children: (0, Y.jsx)(tC, { steamid: r, year: i }) }),
      (0, Y.jsx)(j, { children: (0, Y.jsx)(hE, { year: i }) }),
      (0, Y.jsx)(j, { children: (0, Y.jsx)($T, { userYearInReview: t }) }),
    ],
  });
}
function uE() {
  let e = q(),
    { persona_name: t, avatar_url: n } = (0, z.useContext)(c_);
  return (0, Y.jsxs)(`div`, {
    className: F_,
    children: [
      (0, Y.jsx)(Wl, {
        strAvatarURL: n.replace(/\.jpg$/, `_full.jpg`),
        className: I_,
      }),
      (0, Y.jsx)(`span`, {
        className: (0, Q.default)(L_, e.UserName),
        children: R.Localize(`#YearInReview_PossessiveUserName`, t),
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
          children: R.LocalizeReact(
            `#YearInReview_SteamRewindHeader`,
            (0, Y.jsx)(uE, {}),
            ta.Localize(`#date_year`, r, ` `),
          ),
        }),
        D.logged_in &&
          (0, Y.jsx)(`div`, {
            className: `-vTPvlHUL7g-`,
            children: (0, Y.jsx)(`div`, {
              className: (0, Q.default)(`PmXhnAChGR0-`),
              children: (0, Y.jsx)(j, {
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
    o = (0, z.useCallback)(
      (e) => {
        i(e.data);
      },
      [i],
    ),
    s = Dn(),
    { bAllowDevToggles: c } = Eh();
  return !c || s
    ? null
    : (0, Y.jsxs)(`div`, {
        className: (0, Q.default)(Vv, rn),
        children: [
          (0, Y.jsx)(`div`, {
            children: `Debug Only: Toggle First Person View`,
          }),
          (0, Y.jsx)(go, { onChange: n, checked: t }),
          (0, Y.jsx)(`div`, {
            children: `Debug Only: Change to view the contents in the css style of a different year`,
          }),
          (0, Y.jsx)(Dc, { rgOptions: a, selectedOption: r, onChange: o }),
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
    n = q();
  if (!D.is_support && D.accountid != t.GetAccountID()) return null;
  let r = t.GetYear();
  return (0, Y.jsx)(`div`, {
    className: (0, Q.default)(X, Jv),
    children: (0, Y.jsx)(`div`, {
      className: z_,
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
function hE(e) {
  let { year: t } = e;
  return (0, Y.jsxs)(`div`, {
    className: (0, Q.default)(void 0, Xv),
    children: [
      (0, Y.jsx)(`div`, {
        className: z_,
        children: R.Localize(`#YIR_FAQ_Title`),
      }),
      (0, Y.jsxs)(`div`, {
        className: Yv,
        children: [
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: R.Localize(`#YIR_FAQ_Dates_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_Dates_A`, t),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: R.Localize(`#YIR_FAQ_Offline_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_Offline_A`),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: R.Localize(`#YIR_FAQ_Types_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_Types_A`),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: R.Localize(`#YIR_FAQ_Share_Q`),
              }),
              (0, Y.jsxs)(`div`, {
                className: $v,
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
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: R.Localize(`#YIR_FAQ_ShareFamily_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_ShareFamily_A`),
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Zv,
            children: [
              (0, Y.jsx)(`div`, {
                className: Qv,
                children: R.Localize(`#YIR_FAQ_Controller_Q`),
              }),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_Controller_A1`),
              }),
              (0, Y.jsx)(`br`, {}),
              (0, Y.jsx)(`div`, {
                className: $v,
                children: R.Localize(`#YIR_FAQ_Controller_A2`),
              }),
            ],
          }),
          t == 2022
            ? (0, Y.jsxs)(`div`, {
                className: Zv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: Qv,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_Q`),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: $v,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_A`, t),
                  }),
                ],
              })
            : (0, Y.jsxs)(`div`, {
                className: Zv,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: Qv,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_v2_Q`),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: $v,
                    children: R.Localize(`#YIR_FAQ_PrivateApps_v2_A`, t),
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
var gE = { Home: (e, t) => `${li.YearInReview(e, t)}` };
function _E(e) {
  return (0, Y.jsx)(Ss, {
    domain: `store.steampowered.com`,
    controller: `yearinreview`,
    children: (0, Y.jsx)(i, {
      children: (0, Y.jsx)(n, {
        path: `${gE.Home(`:steamId?`, `:year?`)}`,
        render: (e) =>
          (0, Y.jsx)(Ss, {
            method: `yearinreview`,
            children: (0, Y.jsx)(j, {
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
    i = z.useMemo(() => yE(t, n), [t, n]);
  return (z.useMemo(() => bE(r, i), [r, i]), (0, Y.jsx)(aE, { pageData: i }));
}
function yE(e, t) {
  let n = e == `my` ? D.steamid : e || ``,
    r = parseInt(t ?? ``),
    i = n ? new ui(n).GetAccountID() : 0,
    a =
      D.is_support &&
      !!za(`localization_advanced_access`, `application_config`);
  return {
    steamid: n,
    nYear: r,
    eResult: Number.parseInt(za(`yearinreview_eresults`, `application_config`)),
    rgOtherYears:
      za(`yearinreview_otheryears_${i}_${r}`, `application_config`) ?? [],
    bLocalizationAdvancedAccess: a,
    bAllowDevToggles: a,
  };
}
function bE(e, t) {
  let { steamid: n, nYear: r } = t;
  if (!n || !r) return;
  let i = new ui(n),
    a = $m(i.ConvertTo64BitString(), r);
  if (e.getQueryData(a)) return;
  let o = za(`yearinreview_${i.GetAccountID()}_${r}`, `application_config`);
  xE(o) &&
    e.setQueryData(
      a,
      Qm(1, {
        stats: o,
        percentiles: za(`yearinreview_${r}_percentiles`, `application_config`),
        distribution: za(
          `yearinreview_${r}_distribution`,
          `application_config`,
        ),
        previous_year_summary: za(
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
