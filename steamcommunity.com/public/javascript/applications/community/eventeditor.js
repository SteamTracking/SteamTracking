/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./monacoeditor.js",
      "./rolldown-runtime.js",
      "./libraries.js",
      "./main.js",
      "../../../css/applications/community/main.css",
      "../../../css/applications/community/monacoeditor.css",
      "./richeventeditor.js",
      "./eventrow.js",
      "./playerlinkdetailsdataloader.js",
      "./vodquery.js",
      "./clanstore.js",
      "./throbber.js",
      "../../../css/applications/community/throbber.css",
      "./basebuttons.js",
      "../../../css/applications/community/basebuttons.css",
      "./emoticonbutton.js",
      "./reactbbcodeparser.js",
      "./bbcodeparser.js",
      "./bbcodes.module.js",
      "../../../css/applications/community/bbcodes.css",
      "./numberformats.js",
      "./storeitemhooks.js",
      "../../../css/applications/community/emoticonbutton.css",
      "./storeassets.js",
      "./ajaxhooks.js",
      "./tabbar.js",
      "./historyutils.js",
      "../../../css/applications/community/tabbar.css",
      "./expandonappear.js",
      "./eventdevfeaturestore.js",
      "./rewarditemdisplay.js",
      "./partnereventdialog.module.js",
      "../../../css/applications/community/partnereventdialog.css",
      "./storeitemlink.js",
      "./currencyformat.js",
      "./visibilitytracker.js",
      "./personautils.js",
      "./appinfostore.js",
      "../../../css/applications/community/vodquery.css",
      "./eventinfinitescrollmodal.js",
      "./apppartnereventspage.js",
      "./textlink.js",
      "../../../css/applications/community/textlink.css",
      "./carouselarrows.js",
      "./simplesuccesserror.js",
      "../../../css/applications/community/simplesuccesserror.css",
      "./steammessages_loyalty_rewards_pb.js",
      "../../../css/applications/community/carouselarrows.css",
      "./localdateandtime.js",
      "../../../css/applications/community/localdateandtime.css",
      "../../../css/applications/community/apppartnereventspage.css",
      "./heading.js",
      "../../../css/applications/community/heading.css",
      "./coercingtextinput.js",
      "./textentry.js",
      "../../../css/applications/community/textentry.css",
      "../../../css/applications/community/coercingtextinput.css",
      "./segmentedcontrol.js",
      "../../../css/applications/community/segmentedcontrol.css",
      "./textarea.js",
      "./avatarurl.js",
      "./filehandling.js",
      "./slider.js",
      "../../../css/applications/community/slider.css",
      "../../../css/applications/community/filehandling.css",
      "./with-selector.js",
      "./languagepicker.js",
      "./playerstore.js",
      "./persona.js",
      "../../../css/applications/community/languagepicker.css",
      "./bbcode_lists.js",
      "../../../css/applications/community/bbcode_lists.css",
      "./clanimagepicker.js",
      "../../../css/applications/community/clanimagepicker.css",
      "./pmbbcodeschema.js",
      "../../../css/applications/community/pmbbcodeschema.css",
      "./collapseablesection.js",
      "../../../css/applications/community/collapseablesection.css",
      "../../../css/applications/community/eventrow.css",
      "./linkplugin.js",
      "../../../css/applications/community/linkplugin.css",
      "../../../css/applications/community/richeventeditor.css",
    ]),
) => i.map((i) => d[i]);

import { o as e } from "./rolldown-runtime.js";
import {
  A as t,
  B as n,
  C as r,
  E as i,
  Et as a,
  K as o,
  L as s,
  P as c,
  Pt as l,
  R as u,
  St as d,
  _t as f,
  bt as p,
  j as m,
  ot as h,
  w as g,
  xt as _,
} from "./libraries.js";
import {
  A as v,
  B as ee,
  C as te,
  D as ne,
  E as re,
  F as ie,
  G as ae,
  H as oe,
  I as se,
  J as ce,
  K as le,
  L as ue,
  M as de,
  N as fe,
  O as pe,
  P as me,
  Q as he,
  R as ge,
  S as _e,
  T as ve,
  U as ye,
  V as be,
  W as xe,
  X as Se,
  Y as Ce,
  Z as we,
  _ as Te,
  a as Ee,
  b as De,
  c as Oe,
  d as ke,
  f as Ae,
  g as je,
  h as Me,
  i as Ne,
  j as Pe,
  k as Fe,
  l as Ie,
  m as Le,
  n as Re,
  o as ze,
  p as Be,
  q as Ve,
  r as He,
  s as Ue,
  u as We,
  v as Ge,
  w as Ke,
  x as qe,
  y as Je,
  z as Ye,
} from "./partnereventmigrate.js";
import {
  $ as Xe,
  $t as Ze,
  A as Qe,
  Ar as $e,
  B as et,
  Bn as tt,
  Br as nt,
  Bt as rt,
  C as it,
  Ci as at,
  Cr as ot,
  D as st,
  E as ct,
  Er as lt,
  F as ut,
  Fn as dt,
  Fr as ft,
  G as pt,
  Gi as mt,
  Gr as ht,
  Gt as gt,
  H as _t,
  Hr as vt,
  Ht as yt,
  In as bt,
  Ir as xt,
  J as y,
  Jt as St,
  K as Ct,
  Kr as wt,
  Kt as Tt,
  Ln as Et,
  Lr as Dt,
  M as Ot,
  N as kt,
  Nn as At,
  Nr as jt,
  O as Mt,
  Oi as Nt,
  Or as Pt,
  P as Ft,
  Pn as It,
  Pr as Lt,
  Qn as Rt,
  Qt as zt,
  R as Bt,
  Rn as Vt,
  Rr as Ht,
  S as Ut,
  Sr as Wt,
  T as Gt,
  Tr as Kt,
  Ur as qt,
  Ut as Jt,
  V as Yt,
  Vn as Xt,
  Vr as Zt,
  W as Qt,
  Wr as $t,
  Wt as en,
  Xi as tn,
  Xt as nn,
  Yt as rn,
  Zi as an,
  Zt as on,
  _ as sn,
  _n as cn,
  _r as ln,
  an as un,
  ar as dn,
  b as fn,
  br as pn,
  bt as mn,
  c as b,
  cn as hn,
  d as gn,
  dn as _n,
  dt as vn,
  en as yn,
  er as bn,
  f as xn,
  fn as Sn,
  fr as Cn,
  ft as wn,
  g as Tn,
  gr as En,
  h as x,
  hr as Dn,
  in as On,
  ir as kn,
  jr as An,
  k as jn,
  kr as Mn,
  l as Nn,
  ln as Pn,
  mr as Fn,
  mt as In,
  na as Ln,
  nn as Rn,
  nr as zn,
  or as Bn,
  pn as Vn,
  pr as Hn,
  pt as Un,
  q as Wn,
  qt as Gn,
  rn as Kn,
  rr as qn,
  s as Jn,
  sn as Yn,
  sr as Xn,
  t as Zn,
  ta as Qn,
  tn as $n,
  tr as er,
  u as tr,
  un as nr,
  v as rr,
  vn as ir,
  w as ar,
  wr as or,
  x as sr,
  xr as cr,
  y as lr,
  yr as ur,
  yt as dr,
  z as fr,
  zn as pr,
  zr as mr,
  zt as hr,
} from "./eventrow.js";
import {
  An as gr,
  Ao as _r,
  Bi as vr,
  Br as yr,
  Er as br,
  Fi as xr,
  Fr as Sr,
  Ir as Cr,
  Kn as wr,
  Lr as Tr,
  Mt as Er,
  No as Dr,
  Or,
  Qn as kr,
  Rr as Ar,
  Ur as jr,
  Vi as Mr,
  Xa as Nr,
  Xr as Pr,
  Yn as Fr,
  Yr as Ir,
  _i as Lr,
  ai as Rr,
  bn as zr,
  d as Br,
  do as S,
  er as Vr,
  gi as Hr,
  io as Ur,
  jt as Wr,
  l as Gr,
  li as Kr,
  lr as qr,
  p as Jr,
  tt as Yr,
  u as Xr,
  vi as Zr,
  vn as Qr,
  yi as $r,
  zn as ei,
  zr as ti,
} from "./vodquery.js";
import {
  C as ni,
  _ as ri,
  a as ii,
  g as ai,
  i as oi,
  n as si,
  r as ci,
  t as li,
} from "./clanstore.js";
import { t as C } from "./throbber.js";
import { o as ui, s as di } from "./filehandling.js";
import { S as w } from "./emoticonbutton.js";
import {
  Gt as fi,
  Mt as pi,
  Pt as mi,
  Ut as hi,
  i as gi,
  on as _i,
  r as vi,
  sn as yi,
  un as bi,
} from "./apppartnereventspage.js";
import {
  $ as xi,
  G as Si,
  H as Ci,
  J as wi,
  R as Ti,
  W as T,
  Y as Ei,
  Z as Di,
  c as Oi,
  i as ki,
  j as Ai,
  n as ji,
  o as Mi,
  s as Ni,
  t as Pi,
} from "./carouselarrows.js";
import { t as Fi } from "./ajaxhooks.js";
import { o as Ii } from "./historyutils.js";
import { n as Li, t as Ri } from "./tabbar.js";
import { l as zi, n as Bi, r as Vi } from "./eventdevfeaturestore.js";
import { o as Hi, t as Ui } from "./localdateandtime.js";
import {
  B as Wi,
  V as Gi,
  _ as Ki,
  n as qi,
  r as Ji,
  t as Yi,
  v as Xi,
} from "./languagepicker.js";
import { l as Zi, r as Qi, u as $i } from "./partnereventdialog.module.js";
import { n as ea, r as ta } from "./simplesuccesserror.js";
import { t as na } from "./visibilitytracker.js";
import { t as ra } from "./appinfostore.js";
import { t as ia } from "./playerstore.js";
import { n as aa } from "./storeitemhooks.js";
import { t as oa } from "./linktoeventforusertocopy.js";
import {
  A as sa,
  C as ca,
  F as la,
  M as ua,
  N as da,
  O as fa,
  R as pa,
  T as ma,
  V as ha,
  _ as ga,
  a as _a,
  b as va,
  c as ya,
  d as ba,
  f as xa,
  g as Sa,
  h as Ca,
  i as wa,
  j as E,
  k as Ta,
  l as Ea,
  m as Da,
  p as Oa,
  r as ka,
  s as Aa,
  t as ja,
  u as Ma,
  v as Na,
  w as Pa,
  x as Fa,
  y as Ia,
} from "./clanimagepicker.js";
import {
  $l as La,
  $o as Ra,
  $r as za,
  Ad as Ba,
  Af as Va,
  An as Ha,
  Ar as Ua,
  Bf as Wa,
  Bo as Ga,
  Cr as Ka,
  Cs as qa,
  Cu as Ja,
  Dc as Ya,
  Dn as Xa,
  Dr as Za,
  Dt as Qa,
  Ec as $a,
  Ef as D,
  En as eo,
  Et as to,
  Fn as no,
  Fr as ro,
  Fu as io,
  Gd as ao,
  Gr as oo,
  Gs as so,
  Hh as co,
  Hm as lo,
  Hn as O,
  Hr as uo,
  Ic as fo,
  If as k,
  In as po,
  Jf as mo,
  Ji as ho,
  Jn as go,
  Jo as _o,
  Kd as vo,
  Ki as yo,
  Ko as bo,
  Kr as xo,
  Ks as So,
  Lm as Co,
  Ln as wo,
  Ls as To,
  Mn as Eo,
  Nd as Do,
  Nh as Oo,
  Nn as ko,
  Nr as Ao,
  On as jo,
  Or as Mo,
  Ph as A,
  Qd as No,
  Rf as Po,
  Rn as Fo,
  Ro as Io,
  Rs as Lo,
  Sf as Ro,
  Sm as zo,
  Sr as Bo,
  Ss as Vo,
  Tr as Ho,
  Ts as Uo,
  Uf as Wo,
  Uh as Go,
  Ui as j,
  Un as Ko,
  Ur as qo,
  Us as Jo,
  Vd as Yo,
  Vn as Xo,
  Wd as M,
  Wi as Zo,
  Wn as Qo,
  Wo as N,
  Wr as $o,
  Xi as P,
  Xo as F,
  Yh as es,
  Yi as ts,
  Yo as I,
  Zd as L,
  Zo as ns,
  _f as rs,
  _n as is,
  _r as as,
  ai as os,
  am as ss,
  ar as cs,
  bn as ls,
  cf as us,
  cs as ds,
  dd as fs,
  df as ps,
  dm as R,
  dr as ms,
  ds as z,
  du as hs,
  em as gs,
  fm as _s,
  gd as vs,
  gs as B,
  hc as ys,
  hf as bs,
  hs as xs,
  i as Ss,
  ip as Cs,
  ir as V,
  is as ws,
  kn as Ts,
  kr as Es,
  ln as Ds,
  mn as Os,
  ms as H,
  n as ks,
  nl as As,
  nr as U,
  ns as W,
  nt as js,
  o as Ms,
  os as Ns,
  pl as Ps,
  pm as Fs,
  qc as Is,
  qi as Ls,
  qm as Rs,
  rm as zs,
  rr as Bs,
  s as Vs,
  sd as Hs,
  sh as Us,
  td as G,
  tf as K,
  ts as Ws,
  ud as Gs,
  um as q,
  wr as Ks,
  ws as qs,
  wu as J,
  xn as Js,
  xr as Ys,
  xu as Y,
  zn as Xs,
  zo as Zs,
  zr as Qs,
} from "./main.js";
import { r as $s, t as ec } from "./collapseablesection.js";
import { t as tc } from "./giveawaystore.js";
import { d as nc } from "./partnereventsavebutton.module.js";
import {
  a as rc,
  d as ic,
  i as ac,
  l as oc,
  n as sc,
  o as cc,
  s as lc,
  t as uc,
  u as dc,
} from "./valvecrowdinsyncpanel.js";
import { t as fc } from "./managefriends.js";
async function pc() {
  let e = await he(`ajaxgetuserdeckcompatcounts`, new URLSearchParams());
  if (!e.counts)
    throw Error(`ajaxgetuserdeckcompatcounts answered without counts`);
  return e.counts;
}
var mc = 3e5;
function hc() {
  return [`DeckCompatCounts`];
}
function gc() {
  return { queryKey: hc(), queryFn: () => pc(), staleTime: mc, retry: !1 };
}
function _c() {
  let { data: e } = o(gc());
  return e;
}
function vc(e, t) {
  switch (t) {
    case 2:
      return e?.playable;
    case 1:
      return e?.unsupported;
    default:
      return e?.verified;
  }
}
var yc = `KPvOrtNfyKw-`,
  bc = `NocmFJ-s8IQ-`,
  xc = `L99Zi3J6VvE-`,
  Sc = `fCaYJgXg0-s-`,
  X = h();
function Cc(e) {
  let t = e.eventType == 36;
  return (0, X.jsxs)(`div`, {
    className: yc,
    children: [
      (0, X.jsx)(`div`, {
        className: Sc,
        children: Pr.Localize(`#EventEditor_Loc_Title`),
      }),
      (0, X.jsxs)(`div`, {
        className: xc,
        children: [
          t
            ? Pr.Localize(`#EventEditor_Loc_Overview_Page`)
            : Pr.Localize(`#EventEditor_Loc_Overview`),
          (0, X.jsx)(`div`, { className: bc, children: e.children }),
        ],
      }),
    ],
  });
}
var wc = `_9wARAhCZ86M-`,
  Z = e(l(), 1),
  Tc = class {
    m_mapVisibleSections = new Map();
    constructor() {
      s(this, { m_mapVisibleSections: u });
    }
  },
  Ec = (0, Z.createContext)(null);
function Dc(e) {
  let [t] = (0, Z.useState)(() => new Tc());
  return (0, X.jsx)(Ec.Provider, { value: t, children: e.children });
}
function Oc() {
  let e = (0, Z.useContext)(Ec);
  if (!e)
    throw Error(
      `useVisibleSectionStore must be used within a VisibleSectionStoreProvider`,
    );
  return e;
}
function kc(e) {
  let { strSectionId: t, children: n } = e,
    r = Oc(),
    i = js(
      {
        onEnter: () => r.m_mapVisibleSections.set(t, t),
        onLeave: () => r.m_mapVisibleSections.delete(t),
      },
      { rootMargin: `-100px 0px -100px 0px` },
    );
  return (0, X.jsx)(
    J,
    {
      children: (0, X.jsx)(
        `div`,
        { className: wc, ref: i, children: n },
        `waypoint_sale_sect_` + t,
      ),
    },
    `eb_sale_sect_` + t,
  );
}
var Ac = `ub-F6ByWbWM-`,
  jc = `-wz8sLmQUW8-`,
  Mc = `TNC7F1yA5S8-`,
  Nc = `FWd5NncN1sE-`,
  Pc = `rc1LDsbHMsc-`,
  Fc = `hrTU-0unzJ0-`,
  Ic = `bXQ6lVlQfeM-`,
  Lc = (e) => {
    let t = [];
    return (
      e.rows.forEach((n) => {
        let r = () => {
          e.onSelected && e.onSelected(n);
          let t = document.getElementById(n.strSectionId);
          t && (t.scrollIntoView(!0), window.scrollBy(0, -75));
        };
        t.push(
          (0, X.jsx)(
            `div`,
            {
              id: `tc_` + n.strSectionId,
              role: `button`,
              tabIndex: 0,
              className: Y(
                { [Mc]: !0, [Pc]: n.bSectionIsVisible, [Fc]: n.bIndent },
                n.strClassName,
              ),
              onClick: r,
              onKeyDown: (e) => {
                (e.key === `Enter` || e.key === ` `) &&
                  (e.preventDefault(), r());
              },
              children: (0, X.jsx)(`div`, {
                style: n.style,
                className: Nc,
                children: n.strLabel,
              }),
            },
            `tc_` + n.strSectionId,
          ),
        );
      }),
      (0, X.jsxs)(`div`, {
        className: Y(Ac, e.className),
        children: [
          e.elHeader,
          (0, X.jsxs)(`div`, {
            className: jc,
            children: [
              (0, X.jsx)(`div`, { className: Ic, children: e.strHeader }),
              t,
              e.elBottomContent,
            ],
          }),
        ],
      })
    );
  };
function Rc(e) {
  let { event: t } = e.context,
    n = Number.parseInt(w(e.args)),
    r = Z.useMemo(() => {
      if (t)
        return t.jsondata.sale_sections?.find(
          (e) =>
            e.section_type == `vo_internal` &&
            (e.internal_section_data?.internal_type == `reservation_widget` ||
              e.internal_section_data?.internal_type == `while_supplies_last`),
        );
    }, [t]);
  if (n && r) {
    let t = Number.parseInt(w(e.args, `depositpackageid`)),
      i = Number.parseInt(w(e.args, `psulesspackageid`)),
      a = w(e.args, `out_of_stock_override`),
      o = w(e.args, `delivery_override`),
      s = w(e.args, `delivery_override_out_of_stock`);
    return (0, X.jsx)(zc, {
      section: r,
      reservationPackageID: n,
      depositPackageID: t,
      psuLessPackageID: i,
      strOutOfStockOverride: a,
      strDeliveryOverride: s || o,
      bDeliveryOverrideOnlyIfOutOfStock: !!s,
      PreviewActions: e.PreviewActions,
    });
  }
  return (0, X.jsx)(X.Fragment, {});
}
function zc(e) {
  let {
      reservationPackageID: t,
      depositPackageID: n,
      bIsPreview: r,
      psuLessPackageID: i,
      strOutOfStockOverride: a,
      strDeliveryOverride: o,
      bDeliveryOverrideOnlyIfOutOfStock: s,
      section: c,
      PreviewActions: l,
    } = e,
    { data: u } = Rr(t),
    { data: d } = Rr(i),
    f = (0, Z.useMemo)(
      () => [
        {
          unique_id: `reservation_bbcode_` + t,
          reservation_package: t,
          deposit_package: n,
          localized_reservation_desc: Go([], 32, null),
          localized_out_of_stock_override: Go([a || null], 32, null),
          localized_delivery_override_desc: Go([o || null], 32, null),
          override_delivery_only_out_of_stock: !!s,
          psu_less_package: i,
        },
      ],
      [t, n, a, o, s, i],
    );
  if (!u || (i && !d))
    return (0, X.jsx)(C, {
      string: L(`#Loading`),
      size: `small`,
      position: `center`,
    });
  let p = !zs.logged_in || !u.account_restricted_from_purchasing,
    m =
      u.reservation_state == Ce.k_EPurchaseReservationState_Reserved
        ? u
        : void 0;
  return (0, X.jsxs)(J, {
    children: [
      l &&
        (0, X.jsx)(Z.Suspense, {
          fallback: null,
          children: (0, X.jsx)(l, { bIsPreview: !!r, rgReservationDef: f }),
        }),
      !!u.allow_purchase_in_country &&
        (0, X.jsxs)(`div`, {
          className: f[0].unique_id,
          children: [
            (0, X.jsx)(ce, {
              reservationDef: f[0],
              hardwareDetail: u,
              bPSULessModel: !1,
              reservedHardwareDetail: m,
            }),
            p &&
              (0, X.jsx)(Ve, {
                section: c,
                reservationDef: f[0],
                hardwareDetail: u,
                reservedHardwareDetail: m,
              }),
            d &&
              d?.allow_purchase_in_country &&
              (0, X.jsx)(ce, {
                reservationDef: f[0],
                hardwareDetail: d,
                bPSULessModel: !0,
                reservedHardwareDetail: void 0,
              }),
          ],
        }),
    ],
  });
}
var Bc = `wKSQT4ZMQNA-`,
  Vc = `NQcSXUQ7jyY-`;
function Hc(e) {
  let { appID: t, classOverride: n, styleOverride: r } = e,
    [i, a] = (0, Z.useState)(!1),
    o = Fi(`GameHoverFollowButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = Ir(),
    l = Er(t),
    { mutateAsync: u } = Wr(t, !l, void 0);
  return (0, X.jsxs)(Ja, {
    className: Y(Bc, n),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        _s.logged_in ? (a(!0), await u(), o.token.reason || a(!1)) : c());
    },
    style: r,
    children: [
      l ? (0, X.jsx)(La, {}) : (0, X.jsx)(fo, {}),
      (0, X.jsx)(`div`, {
        className: Y(Vc, i && `ijKnSJ3VcqM-`, `FollowGameButton`),
        children: L(l ? `#Sale_StopFollowingGame` : `#Sale_FollowGame`),
      }),
      s,
    ],
  });
}
var Q = e(t()),
  Uc = e(i());
function Wc(e) {
  let t = Number(e.args.packageid);
  return t
    ? (0, X.jsx)(oe, { packageID: t, display_style: xe(e.args.display) })
    : null;
}
function Gc(e) {
  let t = Number(e.args.packageid),
    n = Number(e.args.compareid);
  return !t || !n ? null : (0, X.jsx)(ye, { packageID: t, compareID: n });
}
function Kc(e) {
  let t = e.args[``]?.trim();
  return t
    ? (0, X.jsx)(`div`, { className: t, children: e.children })
    : (0, X.jsx)(X.Fragment, { children: e.children });
}
var qc = `_8XhS5eUF7W0-`;
function Jc(e) {
  let { clanAccountID: t, color: n, bgcolor: r } = e,
    [i, a] = Z.useState(!1);
  return (0, X.jsx)(`div`, {
    className: Y(qc, i && `Cc5dEagASNE-`),
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    children: (0, X.jsx)(Yr, {
      nCreatorAccountID: t,
      classOverride: vr,
      styleOverride: { color: n, backgroundColor: r },
      followType: `group`,
    }),
  });
}
function Yc(e) {
  let { event: t } = e.context,
    n = Number(e.args.groupid) || t?.clanSteamID.GetAccountID();
  if (!n) return null;
  let r = Ai(e.args.color, `black`),
    i = Ai(e.args.bgcolor, `white`);
  return (0, X.jsx)(Jc, { clanAccountID: n, color: r, bgcolor: i });
}
var Xc = `FClDTpQrpCc-`,
  Zc = `MYmTqhwexFc-`;
function Qc(e) {
  let { appid: t, color: n, bgcolor: r } = e,
    i = os(),
    a = _r(t),
    o = za(i);
  return (0, X.jsx)(`div`, {
    className: Xc,
    children: (0, X.jsx)(xr, {
      snr: o,
      id: a,
      classOverride: Y(Mr, Zc, `WishlistButton`),
      styleOverride: { color: n, backgroundColor: r },
      bShowInGamepadUI: !0,
    }),
  });
}
function $c(e) {
  let t = Number(e.args.appid);
  if (!t) return null;
  let n = Ai(e.args.color, `black`),
    r = Ai(e.args.bgcolor, `white`);
  return (0, X.jsx)(Qc, { appid: t, color: n, bgcolor: r });
}
var el = null;
function tl() {
  return (
    (el ??= new Map([
      [`wishlist`, { Constructor: $c, autocloses: !1 }],
      [`followgroup`, { Constructor: Yc, autocloses: !1 }],
      [`classname`, { Constructor: Kc, autocloses: !1 }],
      [`price`, { Constructor: Wc, autocloses: !1 }],
      [`pricesavings`, { Constructor: Gc, autocloses: !1 }],
      [`reservationbutton`, { Constructor: Rc, autocloses: !1 }],
    ])),
    el
  );
}
var nl = `J9aeUdcubJo-`,
  rl = { include_basic_info: !0 };
function il(e) {
  let { clanInfo: t, closeModal: n } = e,
    [r] = aa(t.appid, rl),
    [i, a] = Z.useState(!0),
    [o, s] = Z.useState(!0),
    c = 1063339200,
    l = Bi.GetTimeNowWithOverride(),
    [u, d] = Z.useState(l - Cs.PerMonth),
    [f, p] = Z.useState(l),
    [m, h] = Z.useState(-1),
    g = m >= 0;
  return (0, X.jsx)(j, {
    strTitle: L(`#EventDashboard_Stats_title`),
    strDescription: L(`#EventDashboard_Stats_desc`),
    closeModal: n,
    bDisableBackgroundDismiss: !0,
    bOKDisabled: g,
    onOK: () => al(t, r, i ? c : u, o ? 2 ** 53 - 1 : f, h).then(() => n()),
    children:
      t.appid && !r
        ? (0, X.jsx)(C, {
            string: L(`#Loading`),
            position: `center`,
            size: `medium`,
          })
        : (0, X.jsxs)(`div`, {
            className: nl,
            children: [
              (0, X.jsx)(`div`, {
                className: `DialogLabel`,
                children: L(`#EventDashboard_Stats_Oldest_Title`),
              }),
              (0, X.jsxs)(`div`, {
                className: `_DialogInputContainer _DialogLayout`,
                children: [
                  (0, X.jsx)(F, {
                    label: L(`#EventDashboard_Stats_Oldest`),
                    onChange: a,
                    checked: i,
                    disabled: g,
                  }),
                  !i &&
                    (0, X.jsxs)(`div`, {
                      children: [
                        L(`#EventDashboard_Stats_Oldest_Override`),
                        (0, X.jsx)(In, {
                          nEarliestTime: c,
                          nLatestTime: o ? void 0 : f,
                          bShowTimeZone: !0,
                          fnGetTimeToUpdate: () => u,
                          fnSetTimeToUpdate: d,
                          disabled: g,
                        }),
                      ],
                    }),
                ],
              }),
              (0, X.jsx)(`div`, {
                className: `DialogLabel`,
                children: L(`#EventDashboard_Stats_Newest_Title`),
              }),
              (0, X.jsxs)(`div`, {
                className: `_DialogInputContainer _DialogLayout`,
                children: [
                  (0, X.jsx)(F, {
                    label: L(`#EventDashboard_Stats_Newest`),
                    onChange: s,
                    checked: o,
                    disabled: g,
                  }),
                  !o &&
                    (0, X.jsxs)(`div`, {
                      children: [
                        L(`#EventDashboard_Stats_Newest_Override`),
                        (0, X.jsx)(In, {
                          nEarliestTime: i ? c : u,
                          bShowTimeZone: !0,
                          fnGetTimeToUpdate: () => f,
                          fnSetTimeToUpdate: p,
                          disabled: g,
                        }),
                      ],
                    }),
                ],
              }),
              g &&
                (0, X.jsx)(C, {
                  position: `center`,
                  size: `medium`,
                  string: L(`#EventDashboard_Stats_Progress`, m),
                }),
            ],
          }),
  });
}
async function al(e, t, n, r, i) {
  let a = [],
    o = Q.default.CancelToken.source(),
    s = 0;
  i(s);
  let c = 0,
    l,
    u = [],
    d = Rs(R.LANGUAGE);
  do
    if (
      ((c += 1),
      (u = await Gr.LoadAdjacentPartnerEvents(
        l,
        e.clanSteamID,
        void 0,
        0,
        100,
        { rtime_oldestevent: n, only_summaries: !0 },
        o,
      )),
      u?.length > 0)
    ) {
      ((s += u.length), i(s), (l = u[u.length - 1].GID));
      let n = u
        .filter((e) => e.startTime <= r && e.BIsVisibleEvent())
        .map((e) => e.GID);
      n.length > 0 &&
        (await ie.LoadStatsForEvents(e.clanSteamID, n, o),
        (s += n.length),
        i(s),
        n.forEach((n) => {
          let r = ie.GetStatsFor(e.clanSteamID, n),
            i = Gr.GetClanEventModel(n),
            o = i.GetStartTimeAndDateUnixSeconds(),
            s = i.GetEndTimeAndDateUnixSeconds();
          a.push({
            appid: e.appid,
            app_name: t?.GetName() || ``,
            event_name: i.GetNameWithFallback(d),
            event_type: i.GetEventTypeAsString(),
            event_start_date: us(o) + ` @ ` + ps(o),
            event_end_date: us(s) + ` @ ` + ps(s),
            ...r.m_stats,
            event_gid: `'` + n,
          });
        }));
    }
  while (u.length == 100 && c < 100);
  return (
    ma.WriteCSVToFile(
      a,
      `event_stats_` +
        e.group_name.toLocaleLowerCase().replace(/\s/g, `_`) +
        `.csv`,
    ),
    !0
  );
}
function ol(e) {
  let {
      summary: t,
      clanSteamID: n,
      bEventIsInModerationQueue: r,
      bIsAllowedInLibrary: i,
      bCompact: a,
    } = e,
    [o] = Ii(`expanded`, !1),
    [s, c] = Z.useState(!!o || a),
    l = oi.GetClanInfoByClanAccountID(n.GetAccountID());
  return (0, X.jsx)(Pe, {
    summary: t,
    bCompact: a,
    bExpanded: s,
    bIsAllowedInLibrary: i,
    bEventIsInModerationQueue: r,
    header: a
      ? void 0
      : (0, X.jsxs)(`div`, {
          className: me,
          children: [
            (0, X.jsxs)(`div`, {
              className: de,
              children: [
                L(`#EventDashBoard_SummaryStats_Title`),
                (0, X.jsx)(H, {
                  tooltip: L(`#EventDashBoard_SummaryStats_Desc`),
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              className: fe,
              children: [
                (0, X.jsx)(I, {
                  onClick: (e) =>
                    qs(
                      e,
                      `${R.PARTNER_BASE_URL}/doc/marketing/event_tools/stats`,
                    ),
                  children: L(`#EventDashBoard_SummaryStats_AboutStats`),
                }),
                (0, X.jsx)(I, {
                  onClick: (e) => P((0, X.jsx)(il, { clanInfo: l }), G(e)),
                  children: L(`#EventDashBoard_SummaryStats_Export`),
                }),
              ],
            }),
            (0, X.jsx)(`div`, {
              className: fe,
              children: (0, X.jsx)(I, {
                onClick: () => c(!s),
                children: L(`#EventDashBoard_SummaryStats_Details`),
              }),
            }),
          ],
        }),
  });
}
var sl = `_4PdojkXy0PM-`,
  cl = `FSqsdnZwEqw-`,
  ll = `KQqfjolvxWc-`,
  ul = `LBB5d88tm-s-`,
  dl = (e) => {
    let { closeModal: t } = e,
      n = ee(q.CLANACCOUNTID);
    return (0, X.jsx)(j, {
      strTitle: `Publishing Audit History`,
      bAlertDialog: !0,
      onOK: t,
      onCancel: t,
      className: `auditContents`,
      strDescription: `Here are the publishing audit history. Recorded starting from mid-June 2021`,
      children:
        n == null
          ? (0, X.jsx)(C, {
              string: L(`#Loading`),
              position: `center`,
              size: `medium`,
            })
          : n.length == 0
            ? (0, X.jsx)(`div`, { children: `No Publishing History available` })
            : n.map((e) => (0, X.jsx)(fl, { record: e }, e.clan_event_gid)),
    });
  },
  fl = (e) => {
    let { record: t } = e,
      n = Z.useMemo(() => zo.InitFromClanID(q.CLANACCOUNTID, R.EUNIVERSE), []);
    return (0, X.jsxs)(`div`, {
      className: ll,
      children: [
        (0, X.jsxs)(`div`, {
          children: [
            `Clan Event GID:`,
            (0, X.jsx)(`a`, {
              href: `${R.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/partnerevents/edit/${t.clan_event_gid}`,
              target: `_blank`,
              children: t.clan_event_gid,
            }),
          ],
        }),
        (0, X.jsxs)(`div`, { children: [`Type: `, ti(t.event_type)] }),
        (0, X.jsxs)(`div`, {
          children: [
            `Publish Time: `,
            (0, X.jsx)(Ui, { dateAndTime: t.publish_time, bSingleLine: !0 }),
          ],
        }),
        (0, X.jsx)(`div`, {
          children: (0, X.jsx)(yt, {
            accountID: t.publish_account_id,
            locToken: `#EventDashbard_PublishingAccount`,
          }),
        }),
        (0, X.jsxs)(`div`, { children: [`tags: `, t.tags?.join(`, `)] }),
        (0, X.jsx)(`div`, {
          className: ul,
          children: (0, X.jsx)($s, {
            title: `Show Event Stats`,
            bStartMinimized: !0,
            children: (0, X.jsx)(pl, { clanSteamID: n, record: t }),
          }),
        }),
        (0, X.jsx)(`hr`, {}),
      ],
    });
  };
function pl(e) {
  let { clanSteamID: t, record: n } = e,
    r = se(t, n.clan_event_gid);
  return (0, X.jsxs)(`div`, {
    children: [
      r == null &&
        (0, X.jsx)(C, {
          string: `loading`,
          position: `center`,
          size: `medium`,
        }),
      r == null &&
        (0, X.jsx)(`div`, { children: `Failed to load events stats` }),
      !!r && (0, X.jsx)(ol, { summary: r, clanSteamID: t, bCompact: !0 }),
    ],
  });
}
var ml = `title`,
  hl = `subtitle`,
  gl = `summary`,
  _l = `body`,
  vl = `email_headline_`,
  yl = `email_body_`,
  bl = `sale_section_label_`,
  xl = `sale_section_label_id_`,
  Sl = `sale_section_subtitle_id_`,
  Cl = `sale_section_text_id_`,
  wl = `email_subject`,
  Tl = `sale_tab_name_`,
  El = `sale_facet_name_`,
  Dl = `sale_facetvalue_name_`,
  Ol = `sale_facetvalue_subtitle_`,
  kl = `sale_reservation_bbcode_`,
  Al = `sale_reservation_outofstock_`,
  jl = `sale_reservation_delivery_`,
  Ml = `sale_reservation_product_`,
  Nl = `sale_reservation_variation_`,
  Pl = `sale_reservatin_callout_`,
  Fl = `sale_white_supplies_last_bbcode_`,
  Il = `sale_section_desc_`,
  Ll = `sale_section_title_desc_`,
  Rl = `broadcast_custom_title`,
  zl = `question_`,
  Bl = `answer_`,
  Vl = `badgename_`,
  Hl = `badgeinitial_`,
  Ul = `badgeprogress_`,
  Wl = `badgemax_`,
  Gl = `quest_close_`,
  Kl = `quest_open_`,
  ql = `discoqueue_desc_`,
  Jl = `socialshare_header_`,
  Yl = `socialshare_title_`,
  Xl = `socialshare_desc_`,
  Zl = `socialshare_image_`,
  Ql = `socialshare_imagealttext_`,
  $l = `rewardshelf_itemdef_`,
  eu = `claimitem_button_`,
  tu = `disclaimer_name_`,
  nu = `medialayout_item_`,
  ru = `mediacontent_title_`,
  iu = `mediacontent_sutitle_`,
  au = `mediacontent_desc_`,
  ou = `meetsteam_`,
  su = `meetsteam_title_`,
  cu = `meetsteam_desc_`,
  lu = `meetsteam_faq_`,
  uu = `meetsteam_ia_`,
  du = `meetsteam_break_`,
  fu = `techspecblock_`,
  pu = `_name_`,
  mu = `_desc_`,
  hu = `submenu_`,
  gu = `mediacontent_alt_text_`,
  _u = `mediacontent_title_alt_text_`,
  vu = `userpoll_`,
  yu = `userpoll_option_`,
  bu = `tabs_jumplist_`,
  xu = `tabs_tagfilter_name_`;
function Su(e, t, n, r) {
  let i = new ic();
  if (t) {
    let t = e.GetEventModel();
    for (let n = 0; n < 32; ++n)
      ((e.BHasLanguageTitle(n) || n == 0) &&
        i.SetLocalization(`title`, n, e.GetName(n)),
        (t.BHasSubTitle(n) || n == 0) &&
          i.SetLocalization(`subtitle`, n, e.GetSubTitle(n)),
        (e.BHasLanguageDescription(n) || n == 0) &&
          i.SetLocalization(`body`, n, e.GetDescription(n)),
        (t.BHasSummary(n) || n == 0) &&
          i.SetLocalization(`summary`, n, e.GetSummary(n)),
        e.GetEventModel().jsondata.meet_steam_groups &&
          e.GetEventModel().jsondata.meet_steam_groups.forEach((e) => {
            (e.localized_session_title &&
              M.Get(e.localized_session_title, n) &&
              i.SetLocalization(
                su + e.group_id,
                n,
                M.Get(e.localized_session_title, n),
              ),
              e.localized_session_description &&
                M.Get(e.localized_session_description, n) &&
                i.SetLocalization(
                  cu + e.group_id,
                  n,
                  M.Get(e.localized_session_description, n),
                ),
              e.localized_intended_audience &&
                M.Get(e.localized_intended_audience, n) &&
                i.SetLocalization(
                  cu + e.group_id,
                  n,
                  M.Get(e.localized_intended_audience, n),
                ),
              e.localized_sesssion_faq &&
                M.Get(e.localized_sesssion_faq, n) &&
                i.SetLocalization(
                  cu + e.group_id,
                  n,
                  M.Get(e.localized_sesssion_faq, n),
                ));
          }),
        e.GetEventModel().jsondata.meet_steam_schedules &&
          e.GetEventModel().jsondata.meet_steam_schedules.forEach((e) => {
            e?.session_breaks?.forEach((t) => {
              t.localized_break_description &&
                M.Get(t.localized_break_description, n) &&
                i.SetLocalization(
                  du + e.schedule_id + `_` + t.break_id,
                  n,
                  M.Get(t.localized_break_description, n),
                );
            });
          }));
  }
  if (n && e.BHasEmailEnabled()) {
    let t = e.GetEmailSettings();
    if (q.IS_VALVE_GROUP) {
      let t = new vt(e.GetEmailSettings());
      for (let e = 0; e < 32; ++e)
        t.BHasLocalizedSubject(e) &&
          i.SetLocalization(wl, e, t.GetLocalizedSubject(e));
    }
    t.sections.forEach((e, t) => {
      let n = new Zt(e);
      for (let e = 0; e < 32; ++e)
        (n.BHasHeadlineInLanguage(e) &&
          i.SetLocalization(vl + t, e, n.GetHeadline(e)),
          n.BHasBodyInLanguage(e) &&
            i.SetLocalization(yl + t, e, n.GetBody(e)));
    });
  }
  let a = e.GetEventModel().jsondata;
  if (a?.bBroadcastEnabled && a?.localized_broadcast_title?.length > 0) {
    for (let e = 0; e < 32; ++e)
      if (M.Get(a.localized_broadcast_title, e)) {
        let t = a.localized_broadcast_title[e];
        i.SetLocalization(Rl, e, t);
      }
  }
  if (
    (t &&
      a.user_polls?.length > 0 &&
      a.user_polls.forEach((e) => {
        for (let t = 0; t < 32; ++t)
          (e.localized_poll_description &&
            M.Get(e.localized_poll_description, t) &&
            i.SetLocalization(
              vu + e.poll_id,
              t,
              e.localized_poll_description[t],
            ),
            e?.options?.forEach((e) => {
              e.localized_option &&
                M.Get(e.localized_option, t) &&
                i.SetLocalization(yu + e.option_id, t, e.localized_option[t]);
            }));
      }),
    r && e.BHasSaleEnabled())
  ) {
    if (a?.sale_presenters?.length)
      for (let e = 0; e < 32; ++e)
        a.sale_presenters.forEach((t) => {
          if (M.Get(t.localized_presenter_name, e)) {
            let n = t.localized_presenter_name[e];
            i.SetLocalization(tu + t.unique_id, e, n);
          }
        });
    (a.sale_sub_menu?.menu_items?.length > 0 &&
      a.sale_sub_menu.menu_items
        .filter((e) => e.localized_sub_menu_name?.length > 0)
        .map((e) => {
          for (let t = 0; t < 32; ++t)
            e.localized_sub_menu_name &&
              M.Get(e.localized_sub_menu_name, t) &&
              i.SetLocalization(
                hu + e.unique_id,
                t,
                e.localized_sub_menu_name[t],
              );
        }),
      e
        .GetSaleSections()
        .filter((e) => !e.disable_localization)
        .forEach((t) => {
          let n = e.GetSaleSectionIndexByID(t.unique_id, !1);
          for (let r = 0; r < 32; ++r) {
            if (
              (e.BHasSaleSectionLabelLocalization(r, n) &&
                i.SetLocalization(xl + t.unique_id, r, t.localized_label[r]),
              e.BHasSaleSectionSubtitleLocalization(r, n) &&
                i.SetLocalization(Sl + t.unique_id, r, t.localized_subtitle[r]),
              e.BHasSaleSectionTextLocalizationForLang(r, n) &&
                i.SetLocalization(
                  Cl + t.unique_id,
                  r,
                  t.text_section_contents[r],
                ),
              e.BHasSaleSectionDescriptionBBCode(r, n) &&
                i.SetLocalization(
                  Il + t.unique_id,
                  r,
                  t.localized_description[r],
                ),
              e.BHasSaleSectionInnerTitle(r, n) &&
                i.SetLocalization(Ll + t.unique_id, r, t.localized_title[r]),
              t.section_type === `tabs` && t.tabs)
            )
              for (let n of t.tabs)
                (e.BHasSaleSectionTabName(r, n) &&
                  i.SetLocalization(
                    Tl + t.unique_id + `_` + n.unique_id,
                    r,
                    n.localized_label[r],
                  ),
                  n.tab_jump_list &&
                    n.tab_jump_list.menu_items &&
                    n.tab_jump_list.menu_items.length > 0 &&
                    n.tab_jump_list.menu_items
                      .filter((e) => e.localized_sub_menu_name?.length > 0)
                      .map((e) => {
                        for (let t = 0; t < 32; ++t)
                          e.localized_sub_menu_name &&
                            M.Get(e.localized_sub_menu_name, t) &&
                            i.SetLocalization(
                              bu + n.unique_id + `_` + e.unique_id,
                              t,
                              e.localized_sub_menu_name[t],
                            );
                      }),
                  wu(i, r, xu + n.unique_id + `_`, n.tab_tag_filter?.rgNodes));
            if (
              (t.enable_faceted_browsing &&
                (t.facets.forEach((n) => {
                  e.BHasSaleSectionFacetName(r, n) &&
                    i.SetLocalization(
                      El + t.unique_id + `_` + n.unique_id,
                      r,
                      n.name[r],
                    );
                }),
                t.facets.forEach((n) => {
                  n.facetValues.forEach((a) => {
                    (e.BHasSaleSectionFacetValueName(r, a) &&
                      i.SetLocalization(
                        Dl +
                          t.unique_id +
                          `_` +
                          n.unique_id +
                          `_` +
                          a.unique_id,
                        r,
                        a.name[r],
                      ),
                      e.BHasSaleSectionFacetValueSubtitle(r, a) &&
                        i.SetLocalization(
                          Ol +
                            t.unique_id +
                            `_` +
                            n.unique_id +
                            `_` +
                            a.unique_id,
                          r,
                          a.subtitle[r],
                        ));
                  });
                })),
              t.section_type == `vo_internal` &&
                t.internal_section_data?.internal_type ==
                  `reservation_widget` &&
                (t.internal_section_data.reservation_options?.length > 0 ||
                  t.internal_section_data.reservation_layout) &&
                (t.internal_section_data.reservation_options?.forEach((e) => {
                  (e.localized_reservation_desc &&
                    M.Get(e.localized_reservation_desc, r) &&
                    i.SetLocalization(
                      kl + t.unique_id + `_` + e.unique_id,
                      r,
                      e.localized_reservation_desc[r],
                    ),
                    e.callout &&
                      e.callout.localized_callout &&
                      M.Get(e.callout.localized_callout, r) &&
                      i.SetLocalization(
                        Pl + t.unique_id + `_` + e.unique_id,
                        r,
                        e.callout.localized_callout[r],
                      ),
                    e.localized_out_of_stock_override &&
                      M.Get(e.localized_out_of_stock_override, r) &&
                      i.SetLocalization(
                        Al + t.unique_id + `_` + e.unique_id,
                        r,
                        e.localized_out_of_stock_override[r],
                      ),
                    e.localized_delivery_override_desc &&
                      M.Get(e.localized_delivery_override_desc, r) &&
                      i.SetLocalization(
                        jl + t.unique_id + `_` + e.unique_id,
                        r,
                        e.localized_delivery_override_desc[r],
                      ));
                }),
                t.internal_section_data.reservation_layout?.product_configs?.forEach(
                  (e) => {
                    (e.localized_product_config_title &&
                      M.Get(e.localized_product_config_title, r) &&
                      i.SetLocalization(
                        Ml + t.unique_id + `_` + e.unique_id,
                        r,
                        e.localized_product_config_title[r],
                      ),
                      e.variations?.forEach((n) => {
                        n.localized_variation_name &&
                          M.Get(n.localized_variation_name, r) &&
                          i.SetLocalization(
                            Nl +
                              t.unique_id +
                              `_` +
                              e.unique_id +
                              `_` +
                              n.unique_id,
                            r,
                            n.localized_variation_name[r],
                          );
                      }));
                  },
                )),
              t.section_type == `vo_internal` &&
                t.internal_section_data?.internal_type ==
                  `while_supplies_last` &&
                t.internal_section_data.while_supplies_last_option?.length >
                  0 &&
                t.internal_section_data.while_supplies_last_option.forEach(
                  (e) => {
                    e.localized_supply_desc &&
                      M.Get(e.localized_supply_desc, r) &&
                      i.SetLocalization(
                        Fl + t.unique_id + `_` + e.unique_id,
                        r,
                        e.localized_supply_desc[r],
                      );
                  },
                ),
              (t.section_type == `quiz` || t.section_type == `template_faq`) &&
                t.quiz?.questions?.length > 0 &&
                t.quiz?.questions.forEach((e) => {
                  (e.localized_question &&
                    M.Get(e.localized_question, r) &&
                    i.SetLocalization(
                      zl + t.unique_id + `_` + e.unique_id,
                      r,
                      e.localized_question[r],
                    ),
                    e?.answers &&
                      e.answers.forEach((e) => {
                        e.localized_answer &&
                          M.Get(e.localized_answer, r) &&
                          i.SetLocalization(
                            Bl + t.unique_id + `_` + e.unique_id,
                            r,
                            e.localized_answer[r],
                          );
                      }));
                }),
              t.section_type == `template_techspec` &&
                t.tech_specs?.tech_spec_block_list?.length > 0 &&
                t.tech_specs?.tech_spec_block_list.forEach((e) => {
                  (e.localized_block_title &&
                    M.Get(e.localized_block_title, r) &&
                    i.SetLocalization(
                      fu + t.unique_id + `_` + e.unique_id,
                      r,
                      e.localized_block_title[r],
                    ),
                    e?.spec_list &&
                      e.spec_list.forEach((e) => {
                        if (
                          e.localized_spec_name &&
                          M.Get(e.localized_spec_name, r)
                        ) {
                          let n = fu + t.unique_id + pu + e.unique_id;
                          i.SetLocalization(n, r, e.localized_spec_name[r]);
                        }
                        if (
                          e.localized_spec_description &&
                          M.Get(e.localized_spec_description, r)
                        ) {
                          let n = fu + t.unique_id + mu + e.unique_id;
                          i.SetLocalization(
                            n,
                            r,
                            e.localized_spec_description[r].replace(
                              /\n/g,
                              `<br />`,
                            ),
                          );
                        }
                      }));
                }),
              t.section_type == `badge_progress` && t.badge_progress)
            ) {
              let e = t.badge_progress;
              (e.localized_name &&
                M.Get(e.localized_name, r) &&
                i.SetLocalization(Vl + t.unique_id, r, e.localized_name[r]),
                e.localized_initial_description &&
                  M.Get(e.localized_initial_description, r) &&
                  i.SetLocalization(
                    Hl + t.unique_id,
                    r,
                    e.localized_initial_description[r],
                  ),
                e.localized_progress_description &&
                  M.Get(e.localized_progress_description, r) &&
                  i.SetLocalization(
                    Ul + t.unique_id,
                    r,
                    e.localized_progress_description[r],
                  ),
                e.localized_maxtier_description &&
                  M.Get(e.localized_maxtier_description, r) &&
                  i.SetLocalization(
                    Wl + t.unique_id,
                    r,
                    e.localized_maxtier_description[r],
                  ));
            }
            (t.section_type == `quest` &&
              t.quest?.door_info?.length > 0 &&
              t.quest.door_info.forEach((e) => {
                (e.localized_open_door_description &&
                  M.Get(e.localized_open_door_description, r) &&
                  i.SetLocalization(
                    Gl + t.unique_id + `_` + e.unique_id,
                    r,
                    e.localized_open_door_description[r],
                  ),
                  e.localized_closed_door_description &&
                    M.Get(e.localized_closed_door_description, r) &&
                    i.SetLocalization(
                      Kl + t.unique_id + `_` + e.unique_id,
                      r,
                      e.localized_closed_door_description[r],
                    ));
              }),
              t.section_type == `rewards` &&
                t.rewards?.reward_items?.length > 0 &&
                t.rewards.reward_items.forEach((e) => {
                  e.localized_reward_description &&
                    M.Get(e.localized_reward_description, r) &&
                    i.SetLocalization(
                      $l + t.unique_id + `_` + e.virtual_item_reward_def_id,
                      r,
                      e.localized_reward_description[r],
                    );
                }),
              t.section_type == `claim_item` &&
                t.claim_item_section_data?.localized_claim_button?.length > 0 &&
                t.claim_item_section_data.localized_claim_button &&
                M.Get(t.claim_item_section_data.localized_claim_button, r) &&
                i.SetLocalization(
                  eu + t.unique_id,
                  r,
                  t.claim_item_section_data.localized_claim_button[r],
                ),
              t.section_type == `discoveryqueue` &&
                t.discovery_queue_localized_desc &&
                M.Get(t.discovery_queue_localized_desc, r) &&
                i.SetLocalization(
                  ql + t.unique_id,
                  r,
                  t.discovery_queue_localized_desc[r],
                ),
              t.section_type == `social_share` &&
                t.social_share.content_options.forEach((e) => {
                  let n = e.localized_option_fields;
                  (n.localized_header &&
                    M.Get(n.localized_header, r) &&
                    i.SetLocalization(
                      Jl + t.unique_id + `_` + e.unique_id,
                      r,
                      n.localized_header[r],
                    ),
                    n.title &&
                      M.Get(n.title, r) &&
                      i.SetLocalization(
                        Yl + t.unique_id + `_` + e.unique_id,
                        r,
                        n.title[r],
                      ),
                    n.description &&
                      M.Get(n.description, r) &&
                      i.SetLocalization(
                        Xl + t.unique_id + `_` + e.unique_id,
                        r,
                        n.description[r],
                      ),
                    n.image &&
                      M.Get(n.image, r) &&
                      i.SetLocalization(
                        Zl + t.unique_id + `_` + e.unique_id,
                        r,
                        n.image[r],
                      ),
                    n.twitter_alt_text &&
                      M.Get(n.twitter_alt_text, r) &&
                      i.SetLocalization(
                        Ql + t.unique_id + `_` + e.unique_id,
                        r,
                        n.twitter_alt_text[r],
                      ));
                }),
              t.section_type == `media_layout` &&
                t.media_layout.media_content.forEach((e, n) => {
                  let a = e.localized_media_desc;
                  a &&
                    M.Get(a, r) &&
                    i.SetLocalization(nu + t.unique_id + `_` + n, r, a[r]);
                }),
              t.section_type == `template_media_content` &&
                t.media_container?.media_rows?.forEach((e, n) => {
                  e?.media_columns?.forEach((e) => {
                    (Cu(i, r, t.unique_id + `_` + e.unique_id, e),
                      e.mobile_content_varient &&
                        Cu(
                          i,
                          r,
                          t.unique_id + `_` + e.unique_id + `_mobile`,
                          e.mobile_content_varient,
                        ),
                      e.tablet_content_varient &&
                        Cu(
                          i,
                          r,
                          t.unique_id + `_` + e.unique_id + `_tablet`,
                          e.tablet_content_varient,
                        ));
                  });
                }),
              t.section_type == `template_media_overlay` &&
                t.media_overlay &&
                (Cu(i, r, t.unique_id + `_overlay`, t.media_overlay),
                t.media_overlay_mobile_content_varient &&
                  Cu(
                    i,
                    r,
                    t.unique_id + `_overlay_mobile`,
                    t.media_overlay_mobile_content_varient,
                  ),
                t.media_overlay_tablet_content_varient &&
                  Cu(
                    i,
                    r,
                    t.unique_id + `_overlay_tablet`,
                    t.media_overlay_tablet_content_varient,
                  )));
          }
        }));
  }
  return i;
}
function Cu(e, t, n, r) {
  let i = r.localized_media_title;
  (i && M.Get(i, t) && e.SetLocalization(ru + n, t, i[t]),
    (i = r.localized_media_subtitle),
    i && M.Get(i, t) && e.SetLocalization(iu + n, t, i[t]),
    (i = r.localized_media_description),
    i && M.Get(i, t) && e.SetLocalization(au + n, t, i[t]),
    (i = r.localized_alt_text),
    i && M.Get(i, t) && e.SetLocalization(gu + n, t, i[t]),
    (i = r.title_media?.localized_alt_text),
    i && M.Get(i, t) && e.SetLocalization(_u + n, t, i[t]));
}
function wu(e, t, n, r) {
  for (let i of r ?? []) {
    let r = n + Nt(i);
    (M.Get(i.rgLocalizedNames, t) &&
      e.SetLocalization(r, t, i.rgLocalizedNames[t]),
      wu(e, t, r + `/`, i.rgChildren));
  }
}
function Tu(e, t, r) {
  let i = [],
    a = t.GetSortedTokenList();
  return (
    n(() => {
      r.forEach((n) => {
        let r = !1;
        (a.forEach((i) => {
          let a = t.GetLocalization(i, n) || ``;
          if (
            (i === ml &&
              (a || e.BHasLanguageTitle(n)) &&
              e.SetName(n, a) &&
              (r = !0),
            i === _l &&
              (a || e.BHasLanguageDescription(n)) &&
              e.SetDescription(n, a) &&
              (r = !0),
            i === hl &&
              (a || e.BHasLanguageSubTitle(n)) &&
              e.SetSubTitle(n, a) &&
              (r = !0),
            i === gl &&
              (a || e.BHasLanguageSummary(n)) &&
              e.SetSummary(n, a) &&
              (r = !0),
            i === Rl)
          ) {
            let t = e.GetEventModel().jsondata;
            (a ||
              (t.localized_broadcast_title &&
                M.Get(t.localized_broadcast_title, n))) &&
              M.Get(t.localized_broadcast_title, n) !== a &&
              ((t.localized_broadcast_title = M.Set(
                t.localized_broadcast_title || [],
                n,
                a,
              )),
              e.SetDirty(x.jsondata_sales),
              (r = !0));
          }
          if (
            (i.startsWith(vu) &&
              e.GetEventModel().jsondata?.user_polls?.forEach((t) => {
                i.startsWith(yu)
                  ? t.options?.forEach((t) => {
                      i == yu + t.option_id &&
                        (a ||
                          (t.localized_option &&
                            M.Get(t.localized_option, n))) &&
                        M.Get(t.localized_option, n) !== a &&
                        ((t.localized_option = M.Set(
                          t.localized_option || [],
                          n,
                          a,
                        )),
                        e.SetDirty(x.description),
                        (r = !0));
                    })
                  : i == vu + t.poll_id &&
                    (a ||
                      (t.localized_poll_description &&
                        M.Get(t.localized_poll_description, n))) &&
                    M.Get(t.localized_poll_description, n) !== a &&
                    ((t.localized_poll_description = M.Set(
                      t.localized_poll_description || [],
                      n,
                      a,
                    )),
                    e.SetDirty(x.description),
                    (r = !0));
              }),
            i.startsWith(du) && e.GetEventModel().jsondata.meet_steam_schedules)
          )
            for (
              let t = 0;
              t < e.GetEventModel().jsondata.meet_steam_schedules.length;
              ++t
            ) {
              let o = e.GetEventModel().jsondata.meet_steam_schedules[t];
              for (let t = 0; t < o?.session_breaks?.length; ++t) {
                let s = o.session_breaks[t];
                if (i == du + o.schedule_id + `_` + s.break_id) {
                  (a || M.Get(s.localized_break_description, n)) &&
                    M.Get(s.localized_break_description, n) !== a &&
                    ((s.localized_break_description = M.Set(
                      s.localized_break_description || [],
                      n,
                      a,
                    )),
                    e.SetDirty(x.description),
                    (r = !0));
                  break;
                }
              }
            }
          if (i.startsWith(ou) && e.GetEventModel().jsondata.meet_steam_groups)
            for (
              let t = 0;
              t < e.GetEventModel().jsondata.meet_steam_groups.length;
              ++t
            ) {
              let o = e.GetEventModel().jsondata.meet_steam_groups[t];
              if (i == su + o.group_id) {
                (a || M.Get(o.localized_session_title, n)) &&
                  M.Get(o.localized_session_title, n) !== a &&
                  ((o.localized_session_title = M.Set(
                    o.localized_session_title || [],
                    n,
                    a,
                  )),
                  e.SetDirty(x.description),
                  (r = !0));
                break;
              }
              if (i == cu + o.group_id) {
                (a || M.Get(o.localized_session_description, n)) &&
                  M.Get(o.localized_session_description, n) !== a &&
                  ((o.localized_session_description = M.Set(
                    o.localized_session_description || [],
                    n,
                    a,
                  )),
                  e.SetDirty(x.description),
                  (r = !0));
                break;
              }
              if (i == lu + o.group_id) {
                (a || M.Get(o.localized_sesssion_faq, n)) &&
                  M.Get(o.localized_sesssion_faq, n) !== a &&
                  ((o.localized_sesssion_faq = M.Set(
                    o.localized_sesssion_faq || [],
                    n,
                    a,
                  )),
                  e.SetDirty(x.description),
                  (r = !0));
                break;
              }
              if (i == uu + o.group_id) {
                (a || M.Get(o.localized_intended_audience, n)) &&
                  M.Get(o.localized_intended_audience, n) !== a &&
                  ((o.localized_intended_audience = M.Set(
                    o.localized_intended_audience || [],
                    n,
                    a,
                  )),
                  e.SetDirty(x.description),
                  (r = !0));
                break;
              }
            }
          if (e.BHasEmailEnabled()) {
            let t = e.GetEmailSettings();
            if (q.IS_VALVE_GROUP && i === wl) {
              let t = new xn(e);
              (a || t.BHasLocalizedSubject(n)) &&
                t.SetLocalizedSubject(n, a) &&
                (r = !0);
            }
            t.sections.forEach((t, o) => {
              let s = new gn(t, e);
              (s.BHasHeadline() &&
                i === vl + o &&
                (a || s.BHasHeadlineInLanguage(n)) &&
                s.SetHeadline(a, n) &&
                (r = !0),
                s.BHasBody() &&
                  i === yl + o &&
                  (a || s.BHasBodyInLanguage(n)) &&
                  s.SetBody(a, n) &&
                  (r = !0));
            });
          }
          if (e.BHasSaleEnabled()) {
            let o = e.GetEventModel().jsondata;
            (o?.sale_presenters?.length &&
              o.sale_presenters.forEach((o) => {
                if (i === tu + o.unique_id) {
                  (a || M.Get(o.localized_presenter_name, n)) &&
                    M.Get(o.localized_presenter_name, n) != a &&
                    ((o.localized_presenter_name = M.Set(
                      o.localized_presenter_name || [],
                      n,
                      a,
                    )),
                    e.SetDirty(x.jsondata_sales),
                    (r = !0));
                  let i = o.localized_presenter_name[n];
                  t.SetLocalization(tu + o.unique_id, n, i);
                }
              }),
              o.sale_sub_menu?.menu_items?.length > 0 &&
                o.sale_sub_menu.menu_items
                  .filter((e) => e.localized_sub_menu_name?.length > 0)
                  .map((o) => {
                    if (i === hu + o.unique_id) {
                      (a || M.Get(o.localized_sub_menu_name, n)) &&
                        M.Get(o.localized_sub_menu_name, n) != a &&
                        ((o.localized_sub_menu_name = M.Set(
                          o.localized_sub_menu_name || [],
                          n,
                          a,
                        )),
                        e.SetDirty(x.jsondata_sales),
                        (r = !0));
                      let i = o.localized_sub_menu_name[n];
                      t.SetLocalization(hu + o.unique_id, n, i);
                    }
                  }),
              e
                .GetSaleSections()
                .filter((e) => !e.disable_localization)
                .forEach((s) => {
                  let c = e.GetSaleSectionIndexByID(s.unique_id, !1);
                  if (
                    ((i === bl + c || i === xl + s.unique_id) &&
                      (a || e.BHasSaleSectionLabelLocalization(n, c)) &&
                      e.SetSaleSectionLabelLocalization(n, c, a) &&
                      (r = !0),
                    i === Sl + s.unique_id &&
                      (a || e.BHasSaleSectionSubtitleLocalization(n, c)) &&
                      e.SetSaleSectionSubtitleLocalization(n, c, a) &&
                      (r = !0),
                    i === Il + s.unique_id &&
                      (a || e.BHasSaleSectionDescriptionBBCode(n, c)) &&
                      e.SetSaleSectionDescriptionBBCode(n, c, a) &&
                      (r = !0),
                    i === Ll + s.unique_id &&
                      (a || e.BHasSaleSectionInnerTitle(n, c)) &&
                      e.SetSaleSectionInnerTitle(n, c, a) &&
                      (r = !0),
                    s.section_type === `tabs` && s.tabs)
                  )
                    for (let c of s.tabs)
                      (i === Tl + s.unique_id + `_` + c.unique_id &&
                        (a || e.BHasSaleSectionTabName(n, c)) &&
                        e.SetSaleSectionTabName(n, c, a) &&
                        (r = !0),
                        c.tab_jump_list?.menu_items?.length > 0 &&
                          o.sale_sub_menu.menu_items
                            .filter(
                              (e) => e.localized_sub_menu_name?.length > 0,
                            )
                            .map((o) => {
                              if (i === bu + c.unique_id + `_` + o.unique_id) {
                                (a || M.Get(o.localized_sub_menu_name, n)) &&
                                  M.Get(o.localized_sub_menu_name, n) != a &&
                                  ((o.localized_sub_menu_name = M.Set(
                                    o.localized_sub_menu_name || [],
                                    n,
                                    a,
                                  )),
                                  e.SetDirty(x.jsondata_sales),
                                  (r = !0));
                                let i = o.localized_sub_menu_name[n];
                                t.SetLocalization(
                                  bu + c.unique_id + `_` + o.unique_id,
                                  n,
                                  i,
                                );
                              }
                            }),
                        Du(
                          e,
                          i,
                          a,
                          n,
                          xu + c.unique_id + `_`,
                          c.tab_tag_filter?.rgNodes,
                        ) && (r = !0));
                  if (
                    (e.BHasSaleSectionTextLocalization(c) &&
                      i === Cl + s.unique_id &&
                      (a || e.BHasSaleSectionTextLocalizationForLang(n, c)) &&
                      e.SetSaleSectionTextLocalization(n, c, a) &&
                      (r = !0),
                    s.enable_faceted_browsing &&
                      s.facets.forEach((t) => {
                        (i === El + s.unique_id + `_` + t.unique_id &&
                          (a || e.BHasSaleSectionFacetName(n, t)) &&
                          e.SetSaleSectionFacetName(n, t, a) &&
                          (r = !0),
                          t.facetValues.forEach((o) => {
                            (i ===
                              Dl +
                                s.unique_id +
                                `_` +
                                t.unique_id +
                                `_` +
                                o.unique_id &&
                              (a || e.BHasSaleSectionFacetValueName(n, o)) &&
                              e.SetSaleSectionFacetValueName(n, o, a) &&
                              (r = !0),
                              i ===
                                Ol +
                                  s.unique_id +
                                  `_` +
                                  t.unique_id +
                                  `_` +
                                  o.unique_id &&
                                (a ||
                                  e.BHasSaleSectionFacetValueSubtitle(n, o)) &&
                                e.SetSaleSectionFacetValueSubtitle(n, o, a) &&
                                (r = !0));
                          }));
                      }),
                    s.section_type == `vo_internal` &&
                      s.internal_section_data?.internal_type ==
                        `reservation_widget` &&
                      (s.internal_section_data.reservation_options?.length >
                        0 ||
                        s.internal_section_data.reservation_layout) &&
                      (s.internal_section_data.reservation_options?.forEach(
                        (t) => {
                          (i === kl + s.unique_id + `_` + t.unique_id &&
                            (a ||
                              (t.localized_reservation_desc &&
                                M.Get(t.localized_reservation_desc, n))) &&
                            M.Get(t.localized_reservation_desc, n) !== a &&
                            ((t.localized_reservation_desc = M.Set(
                              t.localized_reservation_desc || [],
                              n,
                              a,
                            )),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0)),
                            i === Pl + s.unique_id + `_` + t.unique_id &&
                              (a && !t.callout && (t.callout = {}),
                              (a ||
                                (t.callout.localized_callout &&
                                  M.Get(t.callout.localized_callout, n))) &&
                                M.Get(t.callout.localized_callout, n) !== a &&
                                ((t.callout.localized_callout = M.Set(
                                  t.callout.localized_callout || [],
                                  n,
                                  a,
                                )),
                                e.SetDirty(x.jsondata_sales),
                                (r = !0))),
                            i === Al + s.unique_id + `_` + t.unique_id &&
                              (a ||
                                (t.localized_out_of_stock_override &&
                                  M.Get(
                                    t.localized_out_of_stock_override,
                                    n,
                                  ))) &&
                              M.Get(t.localized_out_of_stock_override, n) !==
                                a &&
                              ((t.localized_out_of_stock_override = M.Set(
                                t.localized_out_of_stock_override || [],
                                n,
                                a,
                              )),
                              e.SetDirty(x.jsondata_sales),
                              (r = !0)),
                            i === jl + s.unique_id + `_` + t.unique_id &&
                              (a ||
                                (t.localized_delivery_override_desc &&
                                  M.Get(
                                    t.localized_delivery_override_desc,
                                    n,
                                  ))) &&
                              M.Get(t.localized_delivery_override_desc, n) !==
                                a &&
                              ((t.localized_delivery_override_desc = M.Set(
                                t.localized_delivery_override_desc || [],
                                n,
                                a,
                              )),
                              e.SetDirty(x.jsondata_sales),
                              (r = !0)));
                        },
                      ),
                      s.internal_section_data.reservation_layout?.product_configs?.forEach(
                        (t) => {
                          (i === Ml + s.unique_id + `_` + t.unique_id &&
                            (a ||
                              (t.localized_product_config_title &&
                                M.Get(t.localized_product_config_title, n))) &&
                            M.Get(t.localized_product_config_title, n) !== a &&
                            ((t.localized_product_config_title = M.Set(
                              t.localized_product_config_title || [],
                              n,
                              a,
                            )),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0)),
                            t.variations?.forEach((o) => {
                              i ===
                                Ml +
                                  s.unique_id +
                                  `_` +
                                  t.unique_id +
                                  `_` +
                                  o.unique_id &&
                                (a ||
                                  (o.localized_variation_name &&
                                    M.Get(o.localized_variation_name, n))) &&
                                M.Get(o.localized_variation_name, n) !== a &&
                                ((o.localized_variation_name = M.Set(
                                  o.localized_variation_name || [],
                                  n,
                                  a,
                                )),
                                e.SetDirty(x.jsondata_sales),
                                (r = !0));
                            }));
                        },
                      )),
                    s.section_type == `vo_internal` &&
                      s.internal_section_data?.internal_type ==
                        `while_supplies_last` &&
                      s.internal_section_data.while_supplies_last_option
                        ?.length > 0 &&
                      s.internal_section_data.while_supplies_last_option.forEach(
                        (t) => {
                          i === Fl + s.unique_id + `_` + t.unique_id &&
                            (a ||
                              (t.localized_supply_desc &&
                                M.Get(t.localized_supply_desc, n))) &&
                            M.Get(t.localized_supply_desc, n) !== a &&
                            ((t.localized_supply_desc = M.Set(
                              t.localized_supply_desc || [],
                              n,
                              a,
                            )),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0));
                        },
                      ),
                    s.quiz?.questions?.length > 0 &&
                      s.quiz?.questions.forEach((t) => {
                        i === zl + s.unique_id + `_` + t.unique_id
                          ? (a ||
                              (t.localized_question &&
                                M.Get(t.localized_question, n))) &&
                            M.Get(t.localized_question, n) !== a &&
                            ((t.localized_question = M.Set(
                              t.localized_question || [],
                              n,
                              a,
                            )),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0))
                          : t.answers?.length > 0 &&
                            t.answers.forEach((t) => {
                              i === Bl + s.unique_id + `_` + t.unique_id &&
                                (a ||
                                  (t.localized_answer &&
                                    M.Get(t.localized_answer, n))) &&
                                M.Get(t.localized_answer, n) !== a &&
                                ((t.localized_answer = M.Set(
                                  t.localized_answer || [],
                                  n,
                                  a,
                                )),
                                e.SetDirty(x.jsondata_sales),
                                (r = !0));
                            });
                      }),
                    s.tech_specs?.tech_spec_block_list?.length > 0 &&
                      s.tech_specs.tech_spec_block_list.forEach((t) => {
                        i === fu + s.unique_id + `_` + t.unique_id
                          ? (a ||
                              (t.localized_block_title &&
                                M.Get(t.localized_block_title, n))) &&
                            M.Get(t.localized_block_title, n) !== a &&
                            ((t.localized_block_title = M.Set(
                              t.localized_block_title || [],
                              n,
                              a,
                            )),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0))
                          : t.spec_list?.length > 0 &&
                            t.spec_list.forEach((t) => {
                              i === fu + s.unique_id + pu + t.unique_id
                                ? (a ||
                                    (t.localized_spec_name &&
                                      M.Get(t.localized_spec_name, n))) &&
                                  M.Get(t.localized_spec_name, n) !== a &&
                                  ((t.localized_spec_name = M.Set(
                                    t.localized_spec_name || [],
                                    n,
                                    a,
                                  )),
                                  e.SetDirty(x.jsondata_sales),
                                  (r = !0))
                                : i === fu + s.unique_id + mu + t.unique_id &&
                                  (a ||
                                    (t.localized_spec_description &&
                                      M.Get(
                                        t.localized_spec_description,
                                        n,
                                      ))) &&
                                  M.Get(t.localized_spec_description, n) !==
                                    a &&
                                  ((t.localized_spec_description = M.Set(
                                    t.localized_spec_description || [],
                                    n,
                                    a.replace(
                                      /<br\s*\/?>/g,
                                      `
`,
                                    ),
                                  )),
                                  e.SetDirty(x.jsondata_sales),
                                  (r = !0));
                            });
                      }),
                    s.quest?.door_info?.length > 0 &&
                      s.quest?.door_info.forEach((t) => {
                        i === Gl + s.unique_id + `_` + t.unique_id
                          ? (a ||
                              (t.localized_closed_door_description &&
                                M.Get(
                                  t.localized_closed_door_description,
                                  n,
                                ))) &&
                            M.Get(t.localized_closed_door_description, n) !==
                              a &&
                            ((t.localized_closed_door_description = M.Set(
                              t.localized_closed_door_description || [],
                              n,
                              a,
                            )),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0))
                          : i === Kl + s.unique_id + `_` + t.unique_id &&
                            (a ||
                              (t.localized_open_door_description &&
                                M.Get(t.localized_open_door_description, n))) &&
                            M.Get(t.localized_open_door_description, n) !== a &&
                            ((t.localized_open_door_description = M.Set(
                              t.localized_open_door_description || [],
                              n,
                              a,
                            )),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0));
                      }),
                    s.rewards?.reward_items?.length > 0 &&
                      s.rewards.reward_items.forEach((t) => {
                        i ===
                          $l +
                            s.unique_id +
                            `_` +
                            t.virtual_item_reward_def_id &&
                          (a ||
                            (t.localized_reward_description &&
                              M.Get(t.localized_reward_description, n))) &&
                          M.Get(t.localized_reward_description, n) !== a &&
                          ((t.localized_reward_description = M.Set(
                            t.localized_reward_description || [],
                            n,
                            a,
                          )),
                          e.SetDirty(x.jsondata_sales),
                          (r = !0));
                      }),
                    s.claim_item_section_data?.localized_claim_button?.length >
                      0 &&
                      i === eu + s.unique_id &&
                      (a ||
                        (s.claim_item_section_data.localized_claim_button &&
                          M.Get(
                            s.claim_item_section_data.localized_claim_button,
                            n,
                          ))) &&
                      M.Get(
                        s.claim_item_section_data.localized_claim_button,
                        n,
                      ) !== a &&
                      ((s.claim_item_section_data.localized_claim_button =
                        M.Set(
                          s.claim_item_section_data.localized_claim_button ||
                            [],
                          n,
                          a,
                        )),
                      e.SetDirty(x.jsondata_sales),
                      (r = !0)),
                    s.section_type == `badge_progress` && s.badge_progress)
                  ) {
                    let t = s.badge_progress;
                    (i === Vl + s.unique_id &&
                      (a || (t.localized_name && M.Get(t.localized_name, n))) &&
                      M.Get(t.localized_name, n) !== a &&
                      ((t.localized_name = M.Set(t.localized_name || [], n, a)),
                      e.SetDirty(x.jsondata_sales),
                      (r = !0)),
                      i === Hl + s.unique_id &&
                        (a ||
                          (t.localized_initial_description &&
                            M.Get(t.localized_initial_description, n))) &&
                        M.Get(t.localized_initial_description, n) !== a &&
                        ((t.localized_initial_description = M.Set(
                          t.localized_initial_description || [],
                          n,
                          a,
                        )),
                        e.SetDirty(x.jsondata_sales),
                        (r = !0)),
                      i === Ul + s.unique_id &&
                        (a ||
                          (t.localized_progress_description &&
                            M.Get(t.localized_progress_description, n))) &&
                        M.Get(t.localized_progress_description, n) !== a &&
                        ((t.localized_progress_description = M.Set(
                          t.localized_progress_description || [],
                          n,
                          a,
                        )),
                        e.SetDirty(x.jsondata_sales),
                        (r = !0)),
                      i === Wl + s.unique_id &&
                        (a ||
                          (t.localized_maxtier_description &&
                            M.Get(t.localized_maxtier_description, n))) &&
                        M.Get(t.localized_maxtier_description, n) !== a &&
                        ((t.localized_maxtier_description = M.Set(
                          t.localized_maxtier_description || [],
                          n,
                          a,
                        )),
                        e.SetDirty(x.jsondata_sales),
                        (r = !0)));
                  }
                  if (
                    (s.section_type == `discoveryqueue` &&
                      i === ql + s.unique_id &&
                      (a ||
                        (s.discovery_queue_localized_desc &&
                          M.Get(s.discovery_queue_localized_desc, n))) &&
                      M.Get(s.discovery_queue_localized_desc, n) !== a &&
                      ((s.discovery_queue_localized_desc = M.Set(
                        s.discovery_queue_localized_desc || [],
                        n,
                        a,
                      )),
                      e.SetDirty(x.jsondata_sales),
                      (r = !0)),
                    s.section_type == `social_share` &&
                      s.social_share.content_options?.forEach((t) => {
                        let o = t.localized_option_fields;
                        (i === Jl + s.unique_id + `_` + t.unique_id &&
                          (a ||
                            (o.localized_header &&
                              M.Get(o.localized_header, n))) &&
                          M.Get(o.localized_header, n) !== a &&
                          ((o.localized_header = M.Set(
                            o.localized_header || [],
                            n,
                            a,
                          )),
                          e.SetDirty(x.jsondata_sales),
                          (r = !0)),
                          i === Yl + s.unique_id + `_` + t.unique_id &&
                            (a || (o.title && M.Get(o.title, n))) &&
                            M.Get(o.title, n) !== a &&
                            ((o.title = M.Set(o.title || [], n, a)),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0)),
                          i === Xl + s.unique_id + `_` + t.unique_id &&
                            (a || (o.description && M.Get(o.description, n))) &&
                            M.Get(o.description, n) !== a &&
                            ((o.description = M.Set(o.description || [], n, a)),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0)),
                          i === Zl + s.unique_id + `_` + t.unique_id &&
                            (a || (o.image && M.Get(o.image, n))) &&
                            M.Get(o.image, n) !== a &&
                            ((o.image = M.Set(o.image || [], n, a)),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0)),
                          i === Ql + s.unique_id + `_` + t.unique_id &&
                            (a ||
                              (o.twitter_alt_text &&
                                M.Get(o.twitter_alt_text, n))) &&
                            M.Get(o.twitter_alt_text, n) !== a &&
                            ((o.twitter_alt_text = M.Set(
                              o.twitter_alt_text || [],
                              n,
                              a,
                            )),
                            e.SetDirty(x.jsondata_sales),
                            (r = !0)));
                      }),
                    s.section_type == `media_layout` &&
                      s.media_layout.media_content?.forEach((t, o) => {
                        let c = t.localized_media_desc;
                        i === nu + s.unique_id + `_` + o &&
                          (a || (c && M.Get(c, n))) &&
                          M.Get(c, n) !== a &&
                          ((t.localized_media_desc = M.Set(c || [], n, a)),
                          e.SetDirty(x.jsondata_sales),
                          (r = !0));
                      }),
                    s.section_type == `template_media_content` &&
                      s.media_container.media_rows?.forEach((t) => {
                        t?.media_columns.forEach((t) => {
                          let o = Eu(
                            e,
                            i,
                            a,
                            s.unique_id + `_` + t.unique_id,
                            n,
                            t,
                          );
                          ((r ||= o),
                            t.mobile_content_varient &&
                              ((o = Eu(
                                e,
                                i,
                                a,
                                s.unique_id + `_` + t.unique_id + `_mobile`,
                                n,
                                t.mobile_content_varient,
                              )),
                              (r ||= o)),
                            t.tablet_content_varient &&
                              ((o = Eu(
                                e,
                                i,
                                a,
                                s.unique_id + `_` + t.unique_id + `_tablet`,
                                n,
                                t.tablet_content_varient,
                              )),
                              (r ||= o)));
                        });
                      }),
                    s.section_type == `template_media_overlay` &&
                      s.media_overlay)
                  ) {
                    let t = Eu(
                      e,
                      i,
                      a,
                      s.unique_id + `_overlay`,
                      n,
                      s.media_overlay,
                    );
                    if (((r ||= t), s.media_overlay_mobile_content_varient)) {
                      let t = Eu(
                        e,
                        i,
                        a,
                        s.unique_id + `_overlay_mobile`,
                        n,
                        s.media_overlay_mobile_content_varient,
                      );
                      r ||= t;
                    }
                    if (s.media_overlay_tablet_content_varient) {
                      let t = Eu(
                        e,
                        i,
                        a,
                        s.unique_id + `_overlay_tablet`,
                        n,
                        s.media_overlay_tablet_content_varient,
                      );
                      r ||= t;
                    }
                  }
                }));
          }
        }),
          r && i.push(n));
      });
    }),
    i
  );
}
function Eu(e, t, n, r, i, a) {
  let o = !1;
  if (t === ru + r) {
    let t = a.localized_media_title;
    (n || (t && M.Get(t, i))) &&
      M.Get(t, i) !== n &&
      ((a.localized_media_title = M.Set(t || [], i, n)),
      e.SetDirty(x.jsondata_sales),
      (o = !0));
  }
  if (t === iu + r) {
    let t = a.localized_media_subtitle;
    (n || (t && M.Get(t, i))) &&
      M.Get(t, i) !== n &&
      ((a.localized_media_subtitle = M.Set(t || [], i, n)),
      e.SetDirty(x.jsondata_sales),
      (o = !0));
  }
  if (t === au + r) {
    let t = a.localized_media_description;
    (n || (t && M.Get(t, i))) &&
      M.Get(t, i) !== n &&
      ((a.localized_media_description = M.Set(t || [], i, n)),
      e.SetDirty(x.jsondata_sales),
      (o = !0));
  }
  if (t === gu + r) {
    let t = a.localized_alt_text;
    (n || (t && M.Get(t, i))) &&
      M.Get(t, i) !== n &&
      ((a.localized_alt_text = M.Set(t || [], i, n)),
      e.SetDirty(x.jsondata_sales),
      (o = !0));
  }
  if (t === _u + r) {
    let t = a.title_media.localized_alt_text;
    (n || (t && M.Get(t, i))) &&
      M.Get(t, i) !== n &&
      ((a.title_media.localized_alt_text = M.Set(t || [], i, n)),
      e.SetDirty(x.jsondata_sales),
      (o = !0));
  }
  return o;
}
function Du(e, t, n, r, i, a) {
  for (let o of a ?? []) {
    let a = i + Nt(o);
    if (t === a)
      return (
        M.Get(o.rgLocalizedNames, r) !== n &&
        ((o.rgLocalizedNames = M.Set(o.rgLocalizedNames || [], r, n)),
        e.SetDirty(x.jsondata_sales),
        !0)
      );
    if (t.startsWith(a + `/`)) return Du(e, t, n, r, a + `/`, o.rgChildren);
  }
  return !1;
}
function Ou(e) {
  return (0, X.jsx)(`div`, {
    className: Y(V),
    children: (0, X.jsx)(ku, { editModel: e.editModel }),
  });
}
var ku = (e) => {
    let { data: t } = bi(e.editModel.GetClanAccountID());
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(B, {
          className: Y(jo),
          toolTipContent: L(`#EventEditor_Loc_Export_Desc0`),
          children: (0, X.jsx)(`a`, {
            onClick: (n) => {
              (n.preventDefault(),
                P(
                  (0, X.jsx)(Au, { editModel: e.editModel, permissions: t }),
                  G(n),
                ));
            },
            children: L(`#EventEditor_Loc_Export_Short`),
          }),
        }),
        (0, X.jsx)(dc, {
          strToolTip: L(`#EventEditor_Loc_Import_ttip`),
          strLabel: L(`#EventEditor_Loc_Import_Short`),
          fnOnImportLocData: (t, n) => Tu(e.editModel, t, n),
        }),
      ],
    });
  },
  Au = class extends Z.Component {
    state = {
      bShowCSV: !0,
      bExportEventBody: !0,
      bExportEmail: this.props.editModel.BHasEmailEnabled(),
      bExportSale: this.props.editModel.BHasSaleEnabled(),
    };
    GetLocalizationFilePrefix() {
      let { editModel: e } = this.props,
        t = e.GetName(0);
      return ((t && t.trim() != ``) || (t = `event`), t);
    }
    GetLocalizationModel() {
      return Su(
        this.props.editModel,
        this.state.bExportEventBody,
        this.state.bExportEmail,
        this.state.bExportSale,
      );
    }
    OnExportTypeChange(e) {
      this.setState({ bShowCSV: e == `csv` });
    }
    render() {
      let { closeModal: e, editModel: t, permissions: n } = this.props;
      return (0, X.jsx)(Ls, {
        title: L(`#EventEditor_Loc_Export`),
        onCancel: e,
        closeModal: e,
        children: (0, X.jsxs)(bo, {
          children: [
            (0, X.jsx)(_o, {
              children: (0, X.jsxs)(`div`, {
                className: Y(U),
                children: [
                  (0, X.jsx)(`p`, {
                    children: L(`#EventEditor_Loc_Export_Desc0`),
                  }),
                  (0, X.jsxs)(`div`, {
                    className: Y(V, Za),
                    children: [
                      (0, X.jsx)(`input`, {
                        type: `radio`,
                        name: `ExportOption`,
                        id: `EventEditor_ExportCSVOption`,
                        value: `csv`,
                        checked: this.state.bShowCSV,
                        onChange: () => this.OnExportTypeChange(`csv`),
                      }),
                      (0, X.jsx)(`label`, {
                        htmlFor: `EventEditor_ExportCSVOption`,
                        children: (0, X.jsx)(`span`, {
                          children: L(`#EventEditor_Loc_Export_CSV`),
                        }),
                      }),
                    ],
                  }),
                  (0, X.jsxs)(`div`, {
                    className: Y(V, Za),
                    children: [
                      (0, X.jsx)(`input`, {
                        type: `radio`,
                        name: `ExportOption`,
                        id: `EventEditor_ExportXMLOption`,
                        value: `xml`,
                        checked: !this.state.bShowCSV,
                        onChange: () => this.OnExportTypeChange(`xml`),
                      }),
                      (0, X.jsx)(`label`, {
                        htmlFor: `EventEditor_ExportXMLOption`,
                        children: (0, X.jsx)(`span`, {
                          children: L(`#EventEditor_Loc_Export_XML`),
                        }),
                      }),
                    ],
                  }),
                  !!(
                    n?.support_user &&
                    (t.BHasSaleEnabled() || t.BHasEmailEnabled)
                  ) &&
                    (0, X.jsxs)(`div`, {
                      className: `u6DPgTclyv4-`,
                      children: [
                        (0, X.jsx)(`p`, {
                          children: `(VO) Identify which sections to export`,
                        }),
                        (0, X.jsx)(F, {
                          label: `Export Event Body`,
                          onChange: (e) =>
                            this.setState({ bExportEventBody: e }),
                          checked: this.state.bExportEventBody,
                        }),
                        (0, X.jsx)(F, {
                          disabled: !t.BHasEmailEnabled(),
                          label: `Export Email`,
                          onChange: (e) => this.setState({ bExportEmail: e }),
                          checked: this.state.bExportEmail,
                        }),
                        (0, X.jsx)(F, {
                          disabled: !t.BHasSaleEnabled(),
                          label: `Export Sales`,
                          onChange: (e) => this.setState({ bExportSale: e }),
                          checked: this.state.bExportSale,
                        }),
                      ],
                    }),
                  this.state.bShowCSV
                    ? (0, X.jsxs)(Z.Fragment, {
                        children: [
                          (0, X.jsx)(`p`, {
                            children: L(`#EventEditor_Loc_Export_Desc`),
                          }),
                          (0, X.jsx)(`p`, {
                            children: L(`#EventEditor_Loc_Export_Desc2`),
                          }),
                          (0, X.jsx)(`p`, {
                            children: L(`#EventEditor_Loc_Export_Desc3`),
                          }),
                        ],
                      })
                    : (0, X.jsxs)(Z.Fragment, {
                        children: [
                          (0, X.jsx)(`p`, {
                            children: L(`#EventEditor_Loc_Export_XMLDesc`),
                          }),
                          (0, X.jsx)(`p`, {
                            children: L(`#EventEditor_Loc_Export_XMLDesc2`),
                          }),
                        ],
                      }),
                ],
              }),
            }),
            (0, X.jsxs)(Ra, {
              children: [
                (0, X.jsx)(oc, {
                  fnGetLocData: this.GetLocalizationModel,
                  bShowCSV: this.state.bShowCSV,
                  bShowXML: !this.state.bShowCSV,
                  strFileNamePrefix: this.GetLocalizationFilePrefix(),
                  lang: this.props.editModel.GetCurEditLanguage(),
                  closeModal: this.props.closeModal,
                }),
                (0, X.jsx)(I, { onClick: e, children: L(`#Button_Cancel`) }),
              ],
            }),
          ],
        }),
      });
    }
  };
(D([A], Au.prototype, `GetLocalizationModel`, null),
  D([A], Au.prototype, `OnExportTypeChange`, null),
  (Au = D([r], Au)));
var ju = `YBWwi-HOl1E-`,
  Mu = `uCIxyA-LA3Q-`,
  Nu = `r0b7DWVF3e4-`,
  Pu = `Y4r8IjkCy1E-`,
  Fu = `XUn78wTlnaY-`,
  Iu = `_63FcvyhtxcM-`,
  Lu = `jfntxey7t7c-`,
  Ru = `_-4MsJ5G6zdE-`,
  zu = `ZIL3OJeWmCg-`,
  Bu = `nlACRL4pa7A-`,
  Vu = `_4AEv7mdfUxA-`,
  Hu = `LaDAI-TTwvs-`,
  Uu = `nekuCRbl-Vc-`,
  Wu = `pn-2Qn6vgsE-`,
  Gu = `x9XyxPTd9is-`,
  Ku = `ZaQSVYiETdg-`,
  qu = `eTv6dbuis3U-`,
  Ju = `p3GJFHQgxzk-`,
  Yu = `_2nu-qoM02us-`,
  Xu = `_3bqlrKe3Els-`,
  Zu = `_7foPf9RqbFo-`,
  Qu = `QpY8YJxYS-g-`,
  $u = `HM4mIk-IXco-`,
  ed = `-O3ZHzqtKk0-`,
  td = `REjdL1PDe3c-`,
  nd = `qtuejhhL9U8-`,
  rd = `-BBdudeCu54-`;
function id(e) {
  let { eventModel: t, fnOnGotoPage: n } = e;
  return t.bOldAnnouncement
    ? null
    : (0, X.jsx)(`div`, {
        className: Y(Yu, Qu),
        onClick: (e) => {
          (e.stopPropagation(), ad(t, n));
        },
        children: L(`#Button_Clone`),
      });
}
function ad(e, t) {
  b.LoadEditorModel(e.clanSteamID, e.GID)
    .then((e) => {
      let n = Su(e, !0, !0, !0),
        r = n.GetLanguagesWithTokens();
      r.length > 1
        ? (r.sort((e, t) =>
            L(`#Language_` + lo(e)).localeCompare(L(`#Language_` + lo(t))),
          ),
          P((0, X.jsx)(sd, { langs: r, locData: n, fnOnGotoPage: t }), window))
        : od(t, n);
    })
    .catch((e) => {
      let t = k(e);
      P(
        (0, X.jsx)(Zo, {
          strTitle: L(`#EventEditor_CloneError`),
          bAlertDialog: !0,
          bDestructiveWarning: !0,
          strDescription: L(`#EventEditor_CloneError_Desc`, t.strErrorMsg),
        }),
        window,
        { strTitle: L(`#EventEditor_CloneError`) },
      );
    });
}
function od(e, t, n) {
  let r = b.CreateClone(),
    i = r.GetEventModel();
  if (
    ((i.jsondata.sale_header_offset = i.GetEventType() == 36 ? 0 : 530),
    n && n.length > 0)
  ) {
    let e = t.GetLanguagesWithTokens();
    t.ClearLanguagesTokens(n);
    let a = i.jsondata.bSaleEnabled;
    ((i.jsondata.bSaleEnabled = !0),
      Tu(r, t, e),
      (i.jsondata.bSaleEnabled = a));
  }
  e(`clone`);
}
function sd(e) {
  let { langs: t, locData: n, closeModal: r, fnOnGotoPage: i } = e,
    a = Rs(R.LANGUAGE),
    [o, s] = Z.useState(new Set(t.filter((e) => e != a)));
  return (0, X.jsxs)(j, {
    strTitle: L(`#Button_Clone`),
    onOK: () => od(i, n, Array.from(o)),
    strDescription: L(`#EventEditor_Clone_MultiLanguages`),
    closeModal: r,
    children: [
      (0, X.jsx)(`div`, {
        className: ed,
        children: L(`#EventEditor_Clone_Alert`),
      }),
      (0, X.jsx)(`div`, {
        className: td,
        children: t.map((e) =>
          (0, X.jsx)(
            F,
            {
              className: nd,
              onChange: (t) => {
                let n = new Set(o);
                (t ? n.delete(e) : n.add(e), s(n));
              },
              label: L(`#Language_` + lo(e)),
              checked: !o.has(e),
            },
            e,
          ),
        ),
      }),
      (0, X.jsx)(I, {
        onClick: () => s(new Set()),
        children: L(`#EventEditor_Clone_SelectAll`),
      }),
      (0, X.jsx)(I, {
        onClick: () => s(new Set(t)),
        children: L(`#EventEditor_Clone_DeSelectAll`),
      }),
    ],
  });
}
function cd(e) {
  let [t, n] = Br(e.GetEventModel());
  return [
    t,
    n,
    (r, i) => {
      (t != r || n != i) &&
        ((e.GetEventModel().m_nBuildID = r),
        (e.GetEventModel().m_strBuildBranch = i),
        e.SetDirty(x.description));
    },
  ];
}
var ld = `lpIpr-9uq38-`,
  ud = `x6W7a9fQ-BU-`,
  dd = `m8a0A9pPqq4-`,
  fd = `hwe7xoEoocc-`,
  pd = `iTgCU0dlN1k-`,
  md = `_4FlWuZ9-oTM-`;
function hd(e) {
  switch (e) {
    case 12:
    case 13:
    case 14:
      return !0;
  }
  return !1;
}
function gd(e) {
  let { eventModel: t, bAllowUpdate: n } = e,
    [r, i] = Br(t);
  if (!hd(t.type) && !r) return null;
  let a = (0, X.jsx)(`span`, {
    className: Y(ud, dd),
    children: L(`#EventEditor_AssociateBuildBlank`),
  });
  if (r) {
    let e = (0, X.jsx)(`a`, {
      className: Y(md),
      href: `${R.PARTNER_BASE_URL}apps/builddetails/${t.appid}/${r}`,
      onClick: (e) => e.stopPropagation(),
      children: r,
    });
    a = i
      ? (0, X.jsx)(`span`, {
          className: Y(ud, fd),
          children: K(`#EventEditor_AssociatedBuild`, e, i),
        })
      : (0, X.jsx)(`span`, {
          className: Y(ud, pd),
          children: K(`#EventEditor_AssociatedBuild_Default`, e),
        });
  } else if (!n) return null;
  return (0, X.jsxs)(`div`, {
    className: ld,
    children: [
      e.children,
      a,
      (0, X.jsx)(H, {
        tooltip: L(`#EventEditor_AssociateBuild_ttip`),
        className: oo,
      }),
    ],
  });
}
var _d = r((e) => {
  let { editModel: t } = e,
    n = t.GetEventModel();
  return (0, X.jsx)(gd, {
    eventModel: n,
    bAllowUpdate: !0,
    children: (0, X.jsx)(I, {
      onClick: (t) => P((0, X.jsx)(bd, { editModel: e.editModel }), G(t)),
      children: L(`#EventEditor_AssociateBuild`),
    }),
  });
});
function vd(e) {
  let [t, n] = Z.useState(null);
  return (
    Z.useEffect(() => {
      if ((n(null), !e)) return;
      let t = Q.default.CancelToken.source(),
        r = R.COMMUNITY_BASE_URL + `ogg/${e}/ajaxgetappbranches`;
      return (
        Q.default
          .get(r, { withCredentials: !0, cancelToken: t.token })
          .then((e) => {
            if (!t.token.reason) {
              let t = e?.data?.success == 1;
              n(t ? e.data.branches.sort((e, t) => t.date - e.date) : []);
            }
          })
          .catch((e) => {
            if (!t.token.reason) {
              let t = k(e);
              console.error(`useBranchInfo: ` + t.strErrorMsg, t);
            }
          }),
        () => t.cancel(`useBranchInfo: unmounting`)
      );
    }, [e]),
    t
  );
}
function yd(e) {
  let t = new Date(e.date * 1e3).toLocaleDateString(Qa());
  return e.branch
    ? L(`#EventEditor_AssociateBuildBranch`, e.branch, e.build_id, t)
    : L(`#EventEditor_AssociateBuildDefaultBranch`, e.build_id, t);
}
var bd = (e) => {
    let { editModel: t, closeModal: n } = e,
      r = vd(t.GetEventModel().appid),
      [i, a] = Z.useState(void 0),
      [o, s, c] = cd(t),
      l = () => {
        (c(i?.build_id, i?.branch), n());
      };
    if (r?.length && i === void 0) {
      let e = r.find((e) => e.branch == ``);
      e && a(e);
    }
    let u = !!r,
      d = [];
    return (
      d.push({ label: L(`#EventEditor_AssociateBuildClear`), data: null }),
      r?.forEach((e) => {
        d.push({ label: yd(e), data: e });
      }),
      (0, X.jsx)(J, {
        children: (0, X.jsx)(Lo, {
          onEscKeypress: n,
          children: (0, X.jsxs)(ns, {
            children: [
              (0, X.jsx)(Ws, {
                children: L(`#EventEditor_AssociateBuildDialog`),
              }),
              (0, X.jsxs)(bo, {
                children: [
                  (0, X.jsx)(_o, {
                    children: L(`#EventEditor_AssociateBuildDialogDesc`),
                  }),
                  u &&
                    (0, X.jsx)(Zs, {
                      rgOptions: d,
                      selectedOption: i,
                      onChange: (e) => a(e.data),
                    }),
                  !u && (0, X.jsx)(C, {}),
                ],
              }),
              (0, X.jsx)(Ra, {
                children: (0, X.jsx)(ws, {
                  onCancel: n,
                  bOKDisabled: !u,
                  onOK: l,
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  xd = r(function (e) {
    let {
        eventModel: t,
        appid_or_vanity_str: n,
        bShowGameName: r,
        bShowEventMetaDataSizes: i,
      } = e,
      [a, o] = Z.useState(null),
      s = Z.useRef(!1),
      c = Z.useCallback((e) => {
        ((s.current = !1), o(e));
      }, []),
      l = Z.useCallback(
        (e) => {
          e.target instanceof HTMLButtonElement ||
            e.target instanceof HTMLAnchorElement ||
            (c(`edit`), e.stopPropagation());
        },
        [c],
      ),
      u = Z.useCallback((e) => {
        e.stopPropagation();
      }, []),
      d = t.GID,
      f = t.bOldAnnouncement;
    if (a && !s.current)
      switch (((s.current = !0), a)) {
        case `clone`:
          return (0, X.jsx)(p, { push: !0, to: y.Edit(n, ``) });
        case `edit`:
          return (0, X.jsx)(wi, { eventModel: t, route: T.k_eCommunityEdit });
        case `view`:
          return t.BIsVisibleEvent()
            ? (0, X.jsx)(wi, { eventModel: t, route: T.k_eView })
            : (0, X.jsx)(wi, { eventModel: t, route: T.k_eCommunityPreview });
        default:
          console.log(`EventDisplayTile - Unexpected Case - ` + a);
      }
    let m = Rs(R.LANGUAGE);
    t.BIsLanguageValidForRealms(m) || (m = t.BInRealmGlobal() ? 0 : 29);
    let h = t.GetNameWithFallback(m),
      g = t.BHasSubTitle(m),
      _ = t.BHasSaleEnabled(),
      v = t.visibility_state != Vr.k_EEventStateUnpublished,
      ee = t.visibility_state != Vr.k_EEventStateVisible,
      te = t.visibility_state == Vr.k_EEventStateUnlisted,
      ne = t.BShowLibrarySpotlight(!0),
      re = v && ee && !te;
    r && (h = (Do.Get().GetApp(t.appid)?.GetName() || ``) + `: ` + h);
    let ae =
        t.BIsPartnerEvent() &&
        t.BIsVisibleEvent() &&
        ie.GetStatsFor(t.clanSteamID, d),
      oe = oi.GetOGGClanInfo(t.appid),
      se = !!(
        f &&
        oe &&
        oe.is_ogg &&
        oe.clanAccountID != t.announcementClanSteamID.GetAccountID()
      );
    return (0, X.jsx)(J, {
      children: (0, X.jsxs)(`div`, {
        className: Y({ [ju]: !0, [void 0]: !0, [Ju]: !1, [Nu]: i, [Pu]: ne }),
        children: [
          ne && (0, X.jsx)(Sd, {}),
          (0, X.jsxs)(`div`, {
            className: Mu,
            children: [
              (0, X.jsx)(Td, { fnOnFallbackClick: l, lang: m, eventModel: t }),
              (0, X.jsx)(`div`, {
                className: Hu,
                onClick: l,
                children: (0, X.jsxs)(`div`, {
                  className: Ku,
                  children: [
                    (0, X.jsxs)(`div`, {
                      style: { display: `flex` },
                      children: [
                        (0, X.jsx)(`div`, { className: Uu, children: h }),
                        (0, X.jsxs)(`div`, {
                          className: Wu,
                          children: [
                            t.GetCategoryAsString(!0),
                            _ &&
                              (0, X.jsxs)(`span`, {
                                className: `_0OaWdB9ZMN8-`,
                                children: [
                                  ` | `,
                                  L(`#EventEditor_Status_HasSale`),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    g && !1,
                    (0, X.jsxs)(`div`, {
                      className: Js,
                      children: [
                        (0, X.jsxs)(`div`, {
                          className: Gu,
                          children: [
                            (0, X.jsx)(Ui, {
                              dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                              bSingleLine: !0,
                            }),
                            !ee && v && (0, X.jsx)(Cd, { eventModel: t }),
                            t.BHasTag(`auto_rssfeed`) &&
                              (0, X.jsxs)(X.Fragment, {
                                children: [
                                  (0, X.jsx)(`br`, {}),
                                  (0, X.jsx)(`a`, {
                                    href:
                                      R.STORE_BASE_URL +
                                      `curator/` +
                                      t.clanSteamID.GetAccountID() +
                                      `/admin/manage_rss/`,
                                    children:
                                      ` ` +
                                      L(`#EventEditor_Status_FromRSSFeed`),
                                  }),
                                ],
                              }),
                            (0, X.jsx)(gd, { eventModel: t, bAllowUpdate: !1 }),
                          ],
                        }),
                        !!ae &&
                          (0, X.jsxs)(`div`, {
                            className: `_0Y7me0J1IkA-`,
                            children: [
                              K(
                                `#EventDashBoard_Summary_Tile_Impressions`,
                                (0, X.jsx)(`span`, {
                                  children: to(ae.m_stats.total_showm),
                                }),
                              ),
                              (0, X.jsx)(`br`, {}),
                              K(
                                `#EventDashBoard_Summary_Tile_Read`,
                                (0, X.jsx)(`span`, {
                                  children: to(ae.m_stats.total_read),
                                }),
                              ),
                            ],
                          }),
                      ],
                    }),
                    re && (0, X.jsx)(wd, { eventModel: t }),
                    se
                      ? (0, X.jsxs)(`div`, {
                          className: qu,
                          onClick: u,
                          children: [
                            (0, X.jsx)(`div`, {
                              children: L(
                                `#EventEditor_DataFromConnectAnnouncement`,
                              ),
                            }),
                            (0, X.jsx)(Si, {
                              className: Y(Yu, Xu),
                              eventModel: t,
                              route: T.k_eView,
                              children: L(`#Button_ViewPage`),
                            }),
                          ],
                        })
                      : (0, X.jsx)(Ed, { fnOnGotoPage: c, ...e }),
                    i &&
                      (0, X.jsx)(E, {
                        requireAdmin: !0,
                        clanSteamID: t.clanSteamID,
                        children: (0, X.jsx)(Ad, { eventModel: t }),
                      }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  });
function Sd() {
  return (0, X.jsxs)(`div`, {
    className: Iu,
    children: [
      L(`#EventDisplay_Visible_Featured`),
      (0, X.jsx)(B, {
        toolTipContent: L(`#EventDisplay_Visible_Featured_Tooltip`),
        children: `\xA0(?)`,
      }),
    ],
  });
}
var Cd = r(function (e) {
    let { eventModel: t } = e,
      n = Bi.GetTimeNowWithOverride();
    return t.GetStartTimeAndDateUnixSeconds() > n
      ? (0, X.jsx)(`span`, {
          className: Lu,
          children: L(`#EventDisplay_Upcoming`),
        })
      : Sr(t.type) && t.GetEndTimeAndDateUnixSeconds() > n
        ? (0, X.jsx)(`span`, {
            className: Ru,
            children: L(`#EventDisplay_Active`),
          })
        : t.GetStartTimeAndDateUnixSeconds() > n + 3600
          ? (0, X.jsx)(`span`, {
              className: zu,
              children: L(`#EventDisplay_RecentlyActive`),
            })
          : null;
  }),
  wd = r(function (e) {
    let { eventModel: t } = e;
    return t.visibilityStartTime == t.startTime
      ? (0, X.jsx)(`div`, {
          className: Gu,
          children: L(`#EventEditor_Status_WillBeVisible_EventStart`),
        })
      : (0, X.jsx)(`div`, {
          className: Gu,
          children: K(
            `#EventEditor_Status_WillBeVisible_At`,
            (0, X.jsx)(Ui, {
              dateAndTime: t.GetVisibilityStartTimeAndDateUnixSeconds(),
              bSingleLine: !0,
            }),
          ),
        });
  });
function Td(e) {
  let { fnOnFallbackClick: t, eventModel: n, lang: r } = e,
    i = [zr(n, `capsule`, r)];
  return (0, X.jsx)(`div`, {
    className: Fu,
    onClick: (e) => t(e),
    children: (0, X.jsx)(Nr, { className: Vu, srcs: i }),
  });
}
var Ed = r(function (e) {
  let { eventModel: t, fnOnGotoPage: n, refresh: r } = e,
    i = Z.useCallback((e) => {
      e.stopPropagation();
    }, []),
    a = Z.useCallback(() => {
      n(`view`);
    }, [n]),
    o = t.bOldAnnouncement,
    s = t.visibility_state != Vr.k_EEventStateVisible,
    c = t.visibility_state == Vr.k_EEventStateUnlisted,
    l = t.visibility_state != Vr.k_EEventStateUnpublished;
  return (0, X.jsxs)(`div`, {
    className: qu,
    onClick: i,
    children: [
      !o &&
        (0, X.jsx)(Si, {
          className: Y(`_2nu-qoM02us-`, `_3bqlrKe3Els-`),
          eventModel: t,
          route: T.k_eCommunityEdit,
          onClick: i,
          children: L(`#Button_Edit`),
        }),
      o &&
        (0, X.jsx)(Si, {
          className: Y(`_2nu-qoM02us-`, `_3bqlrKe3Els-`),
          eventModel: t,
          route: T.k_eCommunityMigrate,
          onClick: i,
          children: (0, X.jsx)(B, {
            toolTipContent: L(
              `#EventEditor_Button_MigrateAndEdit_Announcement_ttip`,
            ),
            children: L(`#EventEditor_Button_MigrateAndEdit`),
          }),
        }),
      s &&
        !c &&
        (0, X.jsx)(Si, {
          className: Y(`_2nu-qoM02us-`, `_95D2NgvQrwc-`),
          eventModel: t,
          route: T.k_eCommunityPreview,
          onClick: i,
          children: (0, X.jsx)(B, {
            toolTipContent: L(`#EventEditor_Button_PreviewButton_ttip`),
            children: L(`#EventDisplay_Preview`),
          }),
        }),
      (!s || c) &&
        (0, X.jsx)(Si, {
          className: Y(`_2nu-qoM02us-`, `_95D2NgvQrwc-`),
          eventModel: t,
          route: T.k_eView,
          onClick: i,
          children: L(`#EventDisplay_View`),
        }),
      !l && !o && (0, X.jsx)(Dd, { eventModel: t, OnPublishSuccess: a }),
      (0, X.jsx)(`div`, { className: Bu, children: `\xA0` }),
      (0, X.jsx)(id, { eventModel: t, fnOnGotoPage: n }),
      (0, X.jsx)(Od, { eventModel: t, refresh: r }),
    ],
  });
});
function Dd(e) {
  let { eventModel: t, OnPublishSuccess: n } = e,
    [r, i] = Z.useState({ kind: `none` }),
    a = Z.useCallback(() => i({ kind: `none` }), []),
    o = ua(t.clanSteamID, !0),
    s = Z.useCallback(
      (e) => {
        (e.stopPropagation(),
          b
            .LoadEditorModel(t.clanSteamID, t.GID)
            .then(() => {
              i({ kind: `publish` });
            })
            .catch((e) => {
              let t = k(e);
              i({ kind: `error`, strMessage: t.strErrorMsg });
            }));
      },
      [t],
    );
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`div`, {
        className: Y(Yu, $u),
        onClick: s,
        children: L(`#EventDisplay_Publish`),
      }),
      (0, X.jsx)(To, {
        active: r.kind == `publish`,
        children:
          r.kind == `publish` &&
          (0, X.jsx)(Je, {
            editModel: b.GetEditModel(),
            partnerEventEditorStore: b,
            bValveAdmin: o,
            closeModal: a,
            OnPublishSuccess: n,
          }),
      }),
      (0, X.jsx)(To, {
        active: r.kind == `error`,
        children:
          r.kind == `error` &&
          (0, X.jsx)(Zo, {
            strTitle: L(`#EventEditor_PublishingError`),
            bAlertDialog: !0,
            bDestructiveWarning: !0,
            strDescription: L(
              `#EventEditor_PublishingError_Desc`,
              r.strMessage,
            ),
            closeModal: a,
          }),
      }),
    ],
  });
}
function Od(e) {
  let { eventModel: t, refresh: n } = e,
    [r, i, a] = Gs(),
    o = Z.useCallback(
      (e) => {
        (e.stopPropagation(), i());
      },
      [i],
    );
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(B, {
        toolTipContent: L(`#EventEditor_Button_DeleteButton_ttip`),
        children: (0, X.jsx)(`div`, {
          className: Y(Yu, Zu),
          onClick: o,
          children: L(`#Button_Delete`),
        }),
      }),
      (0, X.jsx)(To, {
        active: r,
        children: (0, X.jsx)(Ge, {
          eventModel: t,
          partnerEventStore: b,
          closeModal: a,
          onDeleteSuccessAndCloseDialog: n,
        }),
      }),
    ],
  });
}
function kd(e, t) {
  if (!e || t <= 0) return [];
  let n = [];
  return (
    Object.keys(e).forEach((r) => {
      let i = e[r],
        a = JSON.stringify(i)?.length || 0;
      (n.push({ key: r, size: a }),
        i &&
          (typeof i == `object` || Array.isArray(i)) &&
          a > 100 &&
          kd(i, t - 1).forEach((e) => {
            n.push({ key: r + `:` + e.key, size: e.size });
          }));
    }),
    n
  );
}
var Ad = (e) => {
    let { eventModel: t } = e;
    if (!t?.jsondata) return null;
    let n = kd(t.jsondata, 3);
    return (
      n.sort((e, t) => t.size - e.size),
      (0, X.jsxs)(`div`, {
        className: rd,
        children: [
          (0, X.jsxs)(`div`, {
            children: [
              `Total Size: `,
              JSON.stringify(t.jsondata)?.length?.toLocaleString(Qa()),
            ],
          }),
          n
            .slice(0, 10)
            .map((e) =>
              (0, X.jsxs)(
                `div`,
                { children: [e.key, `: `, to(e.size)] },
                e.key,
              ),
            ),
        ],
      })
    );
  },
  jd = 10,
  Md = r((e) => {
    let { match: t } = e,
      [n, r] = Z.useState(!1),
      [i, a] = Z.useState(``),
      [o, s] = Z.useState(``),
      [c, l] = Z.useState(!1),
      [u, d] = Z.useState(0),
      f = Z.useRef(void 0),
      p = Z.useMemo(() => new zo(q.CLANSTEAMID), []),
      m = Z.useMemo(() => new Ro(), []),
      h = Z.useMemo(() => Q.default.CancelToken.source(), []),
      {
        bIsFetching: g,
        nHiddenEventCount: _,
        rgEventModels: v,
        fnRefetch: ee,
      } = tr(p, !n),
      {
        rgClanEventData: te,
        bHasNextPage: ne,
        fnFetchNextPage: re,
        bIsFetching: ae,
        bIsFetchingNextPage: oe,
        clanEventSummaryStatus: se,
        clanEventSummaryLoadError: ce,
        fnRefetch: le,
      } = Xr(p, jd, h);
    Z.useEffect(
      () => (ee(), le(), () => h.cancel(`EventListView to unload`)),
      [h, le, ee],
    );
    let ue = Nd(ae, g),
      de = fs(ae),
      fe = Z.useMemo(() => {
        es(!v || v.every((e) => e != null), `draftClanEvents has a null event`);
        let e = (e) => c || e.GetEventType() != 36,
          t = new Map(),
          n = te?.pages.flatMap((e) => e).map((e) => Qr(p, e)),
          r = n?.filter(e);
        r?.forEach((e) => t.set(e.GID, e));
        let i = v?.filter(e);
        i?.forEach((e) => t.set(e.GID, e));
        let a = (n ?? []).length + (v ?? []).length;
        return (
          d(a - (r ?? []).length - (i ?? []).length), Array.from(t.values())
        );
      }, [v, te?.pages, c, p]);
    (Z.useEffect(() => {
      let e = fe
        .filter((e) => !!(e && e.BIsVisibleEvent() && e.BIsPartnerEvent()))
        .map((e) => e.GID);
      e.length > 0 && ie.LoadStatsForEvents(p, e, h);
    }, [h, p, fe]),
      Z.useEffect(() => {
        if (se == `error`) {
          let e = k(ce);
          P(
            (0, X.jsx)(Zo, {
              children: L(`#Error_Description`, e.errorCode, e.strErrorMsg),
            }),
            window,
          );
        }
      }, [ce, se]));
    let pe = (e, r) => {
        let i = [],
          a = fe;
        if (a?.length > 0) {
          ((a = a
            .slice()
            .filter(
              (t) =>
                !(
                  t.visibility_state !== e ||
                  (o &&
                    !t
                      .GetNameWithFallback(Rs(R.LANGUAGE))
                      ?.toLocaleLowerCase()
                      .includes(o))
                ),
            )),
            a.sort(
              (e, t) => (
                es(e !== t, `Unexpected duplicates in the list: ${e} ${t}`),
                e.BShowLibrarySpotlight(!0) && !t.BShowLibrarySpotlight(!0)
                  ? -1
                  : !e.BShowLibrarySpotlight(!0) && t.BShowLibrarySpotlight(!0)
                    ? 1
                    : t.startTime - e.startTime
              ),
            ));
          for (let e of a)
            i.push(
              (0, X.jsx)(
                xd,
                {
                  appid_or_vanity_str: t.params.appid_or_vanity_str,
                  gid: e.GID,
                  eventModel: e,
                  bShowEventMetaDataSizes: n,
                  refresh: () => {
                    (le(), ee());
                  },
                },
                e.GID,
              ),
            );
        }
        for (let t = 0; t < r - (a?.length ?? 0); t++)
          i.push(
            (0, X.jsx)(
              `div`,
              {
                className: ju,
                children: (0, X.jsx)(Kr, {
                  capsules_per_row: [1],
                  is_event_dash_row: !0,
                }),
              },
              `tile_${e}_ghost_${t}`,
            ),
          );
        return i;
      },
      me = Z.useCallback(
        (e) => {
          e && !oe && re();
        },
        [oe, re],
      );
    Z.useEffect(() => {
      m.Schedule(200, () => s(i?.trim().toLocaleLowerCase()));
    }, [m, i]);
    let he = pe(Vr.k_EEventStateUnpublished, g ? _ : 0),
      ge = pe(Vr.k_EEventStateStaged),
      _e = pe(Vr.k_EEventStateUnlisted),
      ve = pe(Vr.k_EEventStateVisible),
      ye = Z.useMemo(() => {
        if (!ve) return;
        if (ae || !ne) return ve;
        let e = ve.length >= jd ? ve.length - jd : ve.length,
          t = (0, X.jsx)(
            na,
            { trigger: `repeated`, onVisibilityChange: me },
            `visibilityTracker`,
          );
        return [...ve.slice(0, e), t, ...ve.slice(e)];
      }, [ne, ae, ve, me]),
      be = he.length > 0 || ge.length > 0 || _e.length > 0 || ve.length > 0;
    return (0, X.jsx)(J, {
      children: (0, X.jsxs)(`div`, {
        ref: f,
        children: [
          (0, X.jsxs)(`div`, {
            className: Y(`maincontent`, sl),
            children: [
              (0, X.jsx)(Pd, {
                appid_or_vanity_str: t.params.appid_or_vanity_str,
              }),
              (0, X.jsxs)(E, {
                requireAdmin: !0,
                clanSteamID: p,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: Y(`maincontent`, sl, cl, V),
                    children: [
                      (0, X.jsx)(F, {
                        label: `Show Event Metadata Size`,
                        tooltip: `Surfaces the size of the biggest sections in the event's metadata`,
                        onChange: r,
                        checked: n,
                      }),
                      (0, X.jsx)(I, {
                        onClick: (e) => P((0, X.jsx)(dl, {}), G(e)),
                        children: `Show Publishing Audit History`,
                      }),
                    ],
                  }),
                  p.GetAccountID() == 41316928 &&
                    (0, X.jsxs)(X.Fragment, {
                      children: [
                        (0, X.jsx)(`a`, {
                          href: `https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m`,
                          target: `_blank`,
                          children: `Content Hub Graphana Stats Page`,
                        }),
                        (0, X.jsx)(`br`, {}),
                        (0, X.jsx)(`a`, {
                          href: `${R.COMMUNITY_BASE_URL}groups/store_contenthubs/partnerevents/edit/3016840454305565993?tab=sale`,
                          children: `Open 'Default Contnet Hub Sale Page Editor'`,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          (ae || be || i.length > 0) &&
            (0, X.jsx)(`div`, {
              className: Y(`_4PdojkXy0PM-`, `HYcZxnWua4s-`, `maincontent`),
              children: (0, X.jsx)(N, {
                type: `text`,
                label: L(`#EventCalendar_UniversalSearch`),
                value: i,
                onChange: (e) => a(e.target.value),
              }),
            }),
          !c &&
            u > 0 &&
            (0, X.jsx)(`div`, {
              className: Y(`_4PdojkXy0PM-`, `maincontent`),
              children: (0, X.jsx)(E, {
                requireAdmin: !0,
                clanSteamID: p,
                children: (0, X.jsx)(`a`, {
                  onClick: () => l(!0),
                  children: `Show ${u} hidden Creator Home events`,
                }),
              }),
            }),
          g && (0, X.jsx)(C, { position: `center`, string: L(`#Loading`) }),
          !ue &&
            (0, X.jsxs)(`div`, {
              className: `uG7NrIMnglw-`,
              children: [
                he.length > 0 &&
                  !g &&
                  (0, X.jsx)(`div`, {
                    className: Y(`s0sBjfH4scY-`, `-EXh8pc9P2A-`),
                    children: (0, X.jsxs)(`div`, {
                      className: Y(`maincontent`, `eventlist`, `_4PdojkXy0PM-`),
                      children: [
                        (0, X.jsxs)(`div`, {
                          className: `m5lh5kMJbds-`,
                          children: [
                            L(`#EventDisplay_Unpublished_Title`),
                            (0, X.jsx)(H, {
                              tooltip: L(`#EventDisplay_Unpublished_SubTitle`),
                            }),
                          ],
                        }),
                        he.length > 0 && he,
                      ],
                    }),
                  }),
                ge.length > 0 &&
                  (0, X.jsx)(`div`, {
                    className: Y(`s0sBjfH4scY-`, void 0),
                    children: (0, X.jsxs)(`div`, {
                      className: Y(`maincontent`, `eventlist`, `_4PdojkXy0PM-`),
                      children: [
                        (0, X.jsxs)(`div`, {
                          className: `m5lh5kMJbds-`,
                          children: [
                            L(`#EventDisplay_Stage_Title`),
                            (0, X.jsx)(H, {
                              tooltip: L(`#EventDisplay_Stage_SubTitle`),
                            }),
                          ],
                        }),
                        ge.length > 0 && ge,
                      ],
                    }),
                  }),
                _e.length > 0 &&
                  (0, X.jsx)(`div`, {
                    className: Y(`s0sBjfH4scY-`, void 0),
                    children: (0, X.jsxs)(`div`, {
                      className: Y(`maincontent`, `eventlist`, `_4PdojkXy0PM-`),
                      children: [
                        (0, X.jsxs)(`div`, {
                          className: `m5lh5kMJbds-`,
                          children: [
                            L(`#EventDisplay_Unlisted_Title`),
                            (0, X.jsx)(H, {
                              tooltip: L(`#EventDisplay_Unlisted_SubTitle`),
                            }),
                          ],
                        }),
                        _e.length > 0 && _e,
                      ],
                    }),
                  }),
                (0, X.jsx)(`div`, {
                  className: Y(`s0sBjfH4scY-`, `xUn6krwwLL8-`, void 0),
                  children: (0, X.jsxs)(`div`, {
                    className: Y(`maincontent`, `eventlist`, `_4PdojkXy0PM-`),
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `m5lh5kMJbds-`,
                        children: L(`#EventDisplay_Visible_Title`),
                      }),
                      (0, X.jsx)(`div`, {
                        className: `Wk3-2me4FUA-`,
                        children: L(`#EventDisplay_Visible_Title_WithRange`),
                      }),
                      ye,
                      !ae &&
                        !ye &&
                        (0, X.jsx)(`div`, {
                          children: L(`#EventDisplay_NoPublic`),
                        }),
                      (ae || (de && ne)) &&
                        (0, X.jsx)(C, {
                          position: `center`,
                          string: L(`#Loading`),
                        }),
                      !ne &&
                        (0, X.jsx)(`div`, {
                          children: L(`#EventDisplay_AllPublicShown`),
                        }),
                      ce &&
                        (0, X.jsx)(`div`, {
                          children: L(`#EventDisplay_HitErrorInfiniteScroll`),
                        }),
                    ],
                  }),
                }),
              ],
            }),
        ],
      }),
    });
  });
function Nd(e, t) {
  let [n, r] = Z.useState(!0);
  return (
    vs(() => r(!1), 4e3),
    Z.useEffect(() => {
      !e && !t && r(!1);
    }, [t, e]),
    n
  );
}
var Pd = r((e) => {
    let { appid_or_vanity_str: t } = e,
      n = new zo(q.CLANSTEAMID),
      r = oi.GetClanInfoByClanAccountID(n.GetAccountID()),
      i = ie.GetTotalStats(n);
    return (0, X.jsxs)(`div`, {
      className: no,
      children: [
        (0, X.jsx)(gi, { identifier: t }),
        (0, X.jsxs)(`div`, {
          className: wo,
          children: [
            (0, X.jsxs)(`div`, {
              className: qo,
              children: [
                L(`#EventDisplay_Events`),
                (0, X.jsx)(`div`, {
                  className: $o,
                  children: L(`#EventDisplay_Edit_Desc`),
                }),
              ],
            }),
            (0, X.jsx)(`div`, {
              className: ko,
              children: (0, X.jsx)(f, {
                className: Y(Os, Ho),
                to: y.Create(t),
                onClick: () => b.ResetModel(),
                children: L(`#EventDisplay_CreateNewEvent`),
              }),
            }),
          ],
        }),
        (0, X.jsx)(`div`, {
          className: po,
          children: (0, X.jsx)(ol, {
            summary: i.m_stats,
            clanSteamID: n,
            bIsAllowedInLibrary: r?.is_ogg,
          }),
        }),
      ],
    });
  }),
  Fd = be(Md),
  Id = class extends Z.Component {
    m_clanSteamID = new zo(q.CLANSTEAMID);
    componentDidMount() {
      b.GetEditModel() &&
        this.props.mode === `view` &&
        b.GetEditModel().ClearDirty();
    }
    componentDidUpdate(e) {
      b.GetEditModel() &&
        this.props.mode === `view` &&
        b.GetEditModel().ClearDirty();
    }
    render() {
      let { mode: e } = this.props;
      if (e === `view`) {
        let e = b.GetEditModel().GetEventModel(),
          t = Rs(R.LANGUAGE);
        return e.BHasSaleEnabled()
          ? (0, X.jsx)(J, {
              children: (0, X.jsx)(Ue, {
                eventModel: e,
                bIsPreview: !0,
                language: t,
              }),
            })
          : (0, X.jsx)(Ms, {
              children: (n) =>
                (0, X.jsx)(Te, {
                  event: e,
                  lang: t,
                  emoticonStore: n,
                  adminPanel: (0, X.jsx)(Le, {
                    eventModel: e,
                    partnerEventStore: b,
                  }),
                  otherEventRow: (0, X.jsx)(Zn, {
                    clanAccountID: e.clanSteamID.GetAccountID(),
                    trackingLocation: 6,
                    gidAnnouncement: e.AnnouncementGID,
                    partnerEventStore: Nn,
                    bViewAllShowInfiniteScroll: !e.BIsOGGEvent(),
                  }),
                }),
            });
      }
      return (0, X.jsx)(Ee, {
        editModel: b.GetEditModel(),
        appid_or_vanity_str: this.props.match.params.appid_or_vanity_str,
        gid: this.props.match.params.gid,
        bDisplaySale: e === `previewsale`,
      });
    }
  };
Id = D([r], Id);
var Ld = be(Id),
  Rd = (e) => {
    let t = null;
    e.artworkType === `capsule`
      ? (t = (0, X.jsxs)(Z.Fragment, {
          children: [
            (0, X.jsx)(`p`, { children: L(`#selectimage_tip_capsule_1`) }),
            (0, X.jsxs)(`div`, {
              children: [
                (0, X.jsx)(`img`, {
                  style: { width: `50%` },
                  src: `${S.GetBaseURL()}31721797/2ef00d65527edf9aecdaddee086b0f5ee0cc2fe6.jpg`,
                }),
                (0, X.jsx)(`img`, {
                  style: { width: `50%` },
                  src: `${S.GetBaseURL()}7614223/fe3aa1776d96e4aa215edbdacc363a9ed005213e.png`,
                }),
                (0, X.jsx)(`img`, {
                  style: { width: `50%` },
                  src: `${S.GetBaseURL()}27000850/dc17534edaabe8d351fdfb1c6186c4eb3e637c8d.png`,
                }),
                (0, X.jsx)(`img`, {
                  style: { width: `50%` },
                  src: `${S.GetBaseURL()}31013613/a98ecca7730e4857cb5f83e50f3304ce13bf56bf.jpg`,
                }),
              ],
            }),
          ],
        }))
      : e.artworkType === `background`
        ? (t = (0, X.jsxs)(Z.Fragment, {
            children: [
              (0, X.jsx)(`p`, { children: L(`#selectimage_tip_background_1`) }),
              (0, X.jsx)(`img`, {
                style: { width: `100%` },
                src: `${S.GetBaseURL()}3703047/72feb03fa4eced13596f0ff7b9ec434865cb73e4.png`,
              }),
              (0, X.jsx)(`img`, {
                style: { width: `100%` },
                src: `${S.GetBaseURL()}5193306/62436147b454715822a198a2767e5c7a8560617e.jpg`,
              }),
              (0, X.jsx)(`img`, {
                style: { width: `100%` },
                src: `${S.GetBaseURL()}31721797/77cbe3f768e16b149c78f127b09c047826646ba5.png`,
              }),
            ],
          }))
        : e.artworkType === `spotlight` &&
          (t = (0, X.jsx)(Z.Fragment, {
            children: (0, X.jsxs)(`div`, {
              className: ya,
              children: [
                (0, X.jsx)(`p`, {
                  children: L(`#selectimage_tip_store_spotlight_2`),
                }),
                (0, X.jsx)(`p`, {
                  children: L(`#selectimage_tip_store_spotlight_3`),
                }),
                (0, X.jsx)(`img`, {
                  style: { width: `100%` },
                  src: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/spotlight_example_3.jpg`,
                }),
                (0, X.jsx)(`img`, {
                  style: { width: `100%` },
                  src: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/spotlight_example_4.jpg`,
                }),
              ],
            }),
          }));
    let n = (t) => {
      P(
        (0, X.jsx)(j, {
          onOK: () => {},
          onCancel: () => {},
          bAlertDialog: !0,
          strTitle: L(`#EventEditor_ExampleTitle_${e.artworkType}`),
          strDescription: L(`#EventEditor_ExampleDescription`),
          children: t,
        }),
        window,
      );
    };
    return t
      ? (0, X.jsxs)(`div`, {
          className: V,
          children: [
            (0, X.jsx)(ds, {
              style: { width: `160px`, margin: `0px 8px 0px 0px` },
              onClick: () => n(t),
              children: L(`#EventEditor_ViewExamples`),
            }),
            (0, X.jsx)(ds, {
              style: { width: `160px`, margin: `0px 8px 0px 0px` },
              onClick: (e) =>
                qs(
                  e,
                  `https://partner.steamgames.com/doc/store/assets/eventassets`,
                ),
              children: L(`#EventEditor_Learn_More`),
            }),
          ],
        })
      : null;
  },
  zd = (e) => {
    let t = null;
    e.artworkType === `sale_header`
      ? (t = (0, X.jsxs)(Z.Fragment, {
          children: [
            (0, X.jsx)(`p`, { children: L(`#selectimage_tip_sale_header_1`) }),
            (0, X.jsx)(`p`, { children: L(`#selectimage_tip_sale_header_2`) }),
            (0, X.jsxs)(`div`, {
              className: Ca,
              children: [
                (0, X.jsxs)(`div`, {
                  className: Da,
                  children: [
                    (0, X.jsx)(`a`, {
                      href: `${S.GetBaseURL()}4/a7dcfaf476e3351bb34b8af3e423a6e6cd652a04.jpg`,
                      target: `_blank`,
                      children: (0, X.jsx)(`img`, {
                        src: `${S.GetBaseURL()}4/a7dcfaf476e3351bb34b8af3e423a6e6cd652a04.jpg`,
                      }),
                    }),
                    (0, X.jsx)(`a`, {
                      href: `${S.GetBaseURL()}4/502e9a6d3bb266b4274a946192bb960f15e1d136.png`,
                      target: `_blank`,
                      children: (0, X.jsx)(`img`, {
                        src: `${S.GetBaseURL()}4/502e9a6d3bb266b4274a946192bb960f15e1d136.png`,
                      }),
                    }),
                  ],
                }),
                (0, X.jsx)(`div`, {
                  className: Da,
                  children: (0, X.jsx)(`a`, {
                    href: `${S.GetBaseURL()}4/0b6edf0575cc418172fc9d7614ae5c2881d1dcc0.jpg`,
                    target: `_blank`,
                    children: (0, X.jsx)(`img`, {
                      src: `${S.GetBaseURL()}4/0b6edf0575cc418172fc9d7614ae5c2881d1dcc0.jpg`,
                    }),
                  }),
                }),
              ],
            }),
          ],
        }))
      : e.artworkType === `product_banner` &&
        (t = (0, X.jsxs)(Z.Fragment, {
          children: [
            (0, X.jsx)(`p`, {
              children: L(`#selectimage_tip_sale_product_banner`),
            }),
            (0, X.jsx)(`img`, {
              style: { width: `100%` },
              src: `${S.GetBaseURL()}4/8298b4d6ebf6f6dd2355054431d339ec9dcafdef.jpg`,
            }),
            (0, X.jsx)(`img`, {
              style: { width: `100%` },
              src: `${S.GetBaseURL()}4/cc803d270bf7f47ee508bbadf14577bbfe5f6500.jpg`,
            }),
            (0, X.jsx)(`img`, {
              style: { width: `100%` },
              src: `${S.GetBaseURL()}4/309cb650beb92e00ae352710387832aea78433ef.jpg`,
            }),
            (0, X.jsx)(`img`, {
              style: { width: `100%` },
              src: `${S.GetBaseURL()}4/ecd819245dd4aca57aed76f714a28b2356ad90f2.jpg`,
            }),
            (0, X.jsx)(`img`, {
              style: { width: `100%` },
              src: `${S.GetBaseURL()}4/7375e5c0f2adb7241870acfa931e167ff13c669f.gif`,
            }),
          ],
        }));
    let n = (t) => {
      P(
        (0, X.jsx)(j, {
          onOK: () => {},
          onCancel: () => {},
          bAlertDialog: !0,
          strTitle: L(`#EventEditor_ExampleTitle_${e.artworkType}`),
          strDescription: L(`#EventEditor_ExampleDescription`),
          children: t,
        }),
        window,
      );
    };
    return t
      ? (0, X.jsxs)(`div`, {
          className: V,
          children: [
            (0, X.jsx)(ds, {
              style: { width: `160px`, margin: `0px 8px 0px 0px` },
              onClick: () => n(t),
              children: L(`#EventEditor_ViewExamples`),
            }),
            (0, X.jsx)(ds, {
              style: { width: `160px`, margin: `0px 8px 0px 0px` },
              onClick: (e) =>
                qs(
                  e,
                  `https://partner.steamgames.com/doc/marketing/event_tools/sales/tools`,
                ),
              children: L(`#EventEditor_Learn_More`),
            }),
            (0, X.jsx)(`br`, {}),
          ],
        })
      : null;
  };
function Bd(e) {
  let { editModel: t } = e,
    n = t.GetEventModel(),
    r = g(() => n.jsondata.bAutoUpdateVanityURLForContentHub),
    i = g(() => n.jsondata.sale_defines_specific_contenthub),
    a = g(() => n.jsondata.sale_defines_temporary_contenthub),
    o = g(() => n.BContentHubDiscountedOnly()),
    s = g(() => n.jsondata.content_hub_restricted_width),
    c = g(() => n.jsondata.ignore_item_browser_overrides),
    l = g(() => n.jsondata.contenthub_override_artwork),
    u = g(() => n.jsondata.contenthub_override_section_styles),
    d = g(() => n.jsondata.contenthub_override_tab_styles),
    f = g(() => n.jsondata.contenthub_override_tab_definitions),
    p = g(() => n.jsondata.contenthub_override_item_browser_flavors),
    m = g(() => n.jsondata.contenthub_override_item_browser_facets),
    h = g(() => n.jsondata.contenthub_disable_overrides),
    _ = g(() => n.jsondata.contenthub_dlc_for_your_flavor_override),
    [v, ee] = (0, Z.useState)(
      () => n.jsondata.prune_list_optin_name?.length > 0,
    );
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(W, {
        style: { marginTop: `0px` },
        children: `Content Hub Specification`,
      }),
      (0, X.jsx)(F, {
        label: `Auto update vanity URL based on configured content hub`,
        checked: r,
        onChange: (e) => {
          ((n.jsondata.bAutoUpdateVanityURLForContentHub = e),
            e && Gt(n.GetContentHub(), t),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(F, {
        label: `This is an individual content hub...`,
        tooltip: `If checked, this sale page will be used to render only a specific content hub. Check this if you are defining tabs/merchandising for some specific hub, or if you're defining a theme sale.`,
        checked: i,
        onChange: (e) => {
          ((n.jsondata.sale_defines_specific_contenthub = e || void 0),
            n.jsondata.bAutoUpdateVanityURLForContentHub &&
              Gt(n.GetContentHub(), t),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      i && (0, X.jsx)(Vd, { ...e }),
      (0, X.jsx)(F, {
        label: `This is a limited time sale event`,
        tooltip: `If checked, this sale page will be used when rendering content hubs only during the time period specified in the Options tab of the sale editor. Check this if you are defining a takeover for a seasonal sale, or if you're defining a theme sale.`,
        checked: a,
        onChange: (e) => {
          ((n.jsondata.sale_defines_temporary_contenthub = e || void 0),
            n.jsondata.bAutoUpdateVanityURLForContentHub &&
              Gt(n.GetContentHub(), t),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(W, {
        style: { marginTop: `16px` },
        children: `App Inclusion`,
      }),
      (0, X.jsx)(F, {
        label: `Show discounted (and free-to-play) items only`,
        checked: o,
        onChange: (e) => {
          ((n.jsondata.content_hub_discounted_only = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(F, {
        label: `Include/exclude items based on registration state... `,
        tooltip: `If checked, this hub will include opted-in games and exclude pruned out games from the selected opt-in event. Typically used when defining a theme sale.`,
        checked: v,
        onChange: (e) => {
          (ee(e),
            e || (n.jsondata.prune_list_optin_name = void 0),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      v && (0, X.jsx)(Hd, { ...e }),
      (0, X.jsx)(W, { style: { marginTop: `16px` }, children: `Overrides` }),
      (0, X.jsx)(F, {
        label: `Show restricted-width title and main carousel`,
        checked: s,
        onChange: (e) => {
          ((n.jsondata.content_hub_restricted_width = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(F, {
        label: `Override artwork`,
        tooltip: `If checked, use artwork (background, fonts, colors, etc.) from this sale page instead of the artwork defined in the sale page it inherits from.`,
        checked: l,
        onChange: (e) => {
          ((n.jsondata.contenthub_override_artwork = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(F, {
        label: `Override section styles`,
        tooltip: `If checked, for every section that exists in this sale page and the parent sale page, use section styles (colors, etc.) from this sale page instead of from the parent.`,
        checked: u,
        onChange: (e) => {
          ((n.jsondata.contenthub_override_section_styles = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(F, {
        label: `Override tab styles`,
        tooltip: `If checked, and a tabs section exists in this sale page and the parent sale page, use tab styles (colors, fonts, etc.) from this sale page instead of from the parent.`,
        checked: d,
        onChange: (e) => {
          ((n.jsondata.contenthub_override_tab_styles = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(F, {
        label: `Override tab definitions`,
        tooltip: `If checked, and a tabs section exists in this sale page and the parent sale page, use the tab definitions (names, filters, etc.) from this sale page instead of from the parent.`,
        checked: f,
        onChange: (e) => {
          ((n.jsondata.contenthub_override_tab_definitions = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(F, {
        label: `Override item browser flavor tabs`,
        tooltip: `If checked, and an item browser section exists in this sale page and the parent sale page, use the flavor definitions (e.g. Popular, Recently Released, etc.) from this sale page instead of from the parent.`,
        checked: p,
        onChange: (e) => {
          ((n.jsondata.contenthub_override_item_browser_flavors = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(F, {
        label: `Ignore item browser tab overrides during sale takeovers`,
        checked: c,
        onChange: (e) => {
          ((n.jsondata.ignore_item_browser_overrides = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(F, {
        label: `Override item browser facets`,
        tooltip: `If checked, and an item browser section exists in this sale page and the parent sale page, use the facet menu from this sale page instead of from the parent.`,
        checked: m,
        onChange: (e) => {
          ((n.jsondata.contenthub_override_item_browser_facets = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(F, {
        label: `Disable override logic`,
        tooltip: `If checked, the sections defined in this sale page will be used as-is, instead of being combined with parent sale pages via the override logic.`,
        checked: h,
        onChange: (e) => {
          ((n.jsondata.contenthub_disable_overrides = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
      (0, X.jsx)(dr, {
        strFlavor: _ || `popular`,
        fnSetFlavor: (e) => {
          n.jsondata.contenthub_dlc_for_your_flavor_override = e;
        },
        strLabelOverride: `Override DLC For You filter/sort`,
      }),
      (0, X.jsx)(Ud, { ...e }),
    ],
  });
}
function Vd(e) {
  let { editModel: t } = e,
    n = t.GetEventModel(),
    r = g(() => n.GetContentHubType()),
    i = g(() => n.GetContentHubCategory()),
    a = g(() => n.GetContentHubTag()),
    { contentHubNames: o } = zt(),
    s = (0, Z.useMemo)(
      () => (o ? o.hubtypes.map((e) => ({ value: e, label: e })) : []),
      [o],
    ),
    c = (0, Z.useMemo)(
      () =>
        o
          ? Array.from(o.categories.keys()).map((e) => ({
              value: e,
              label: `${o.categories.get(e)} (${e})`,
            }))
          : [],
      [o],
    ),
    l = (0, Z.useMemo)(
      () =>
        o
          ? Array.from(o.tags.keys()).map((e) => ({
              value: `${e}`,
              label: `${o.tags.get(e)} (${e})`,
            }))
          : [],
      [o],
    );
  return (0, X.jsxs)(`div`, {
    style: { marginLeft: `32px`, marginRight: `32px` },
    children: [
      (0, X.jsx)(W, { children: L(`#Sale_BrowseSection_ContentHubType`) }),
      (0, X.jsx)(`div`, {
        style: { marginBottom: `12px` },
        children: (0, X.jsx)(Ze._default, {
          isSearchable: !0,
          className: `react-select-container`,
          classNamePrefix: `react-select`,
          isDisabled: !s,
          options: s,
          value: s?.find((e) => e.value === r),
          onChange: (e) => {
            ((n.jsondata.source_content_hub = {
              type: e.value,
              category: e.value === `category` ? i : void 0,
              tagid: e.value === `tags` ? a : void 0,
            }),
              t.SetDirty(x.jsondata_sales));
          },
        }),
      }),
      r === `category` &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(W, {
              children: L(`#Sale_BrowseSection_ContentHubCategory`),
            }),
            (0, X.jsx)(`div`, {
              style: { marginBottom: `12px` },
              children: (0, X.jsx)(Ze._default, {
                isSearchable: !0,
                className: `react-select-container`,
                classNamePrefix: `react-select`,
                isDisabled: !c,
                options: c,
                value: c?.find((e) => e.value === i),
                onChange: (e) => {
                  ((n.jsondata.source_content_hub = {
                    type: r,
                    category: e?.value,
                  }),
                    t.SetDirty(x.jsondata_sales));
                },
              }),
            }),
          ],
        }),
      r === `tags` &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(W, { children: L(`#Sale_BrowseSection_ContentHubTag`) }),
            (0, X.jsx)(`div`, {
              style: { marginBottom: `12px` },
              children: (0, X.jsx)(Ze._default, {
                isSearchable: !0,
                className: `react-select-container`,
                classNamePrefix: `react-select`,
                isDisabled: !l,
                options: l,
                value: l?.find((e) => Number(e.value) === a),
                onChange: (e) => {
                  ((n.jsondata.source_content_hub = {
                    type: r,
                    tagid: Number(e?.value),
                  }),
                    t.SetDirty(x.jsondata_sales));
                },
              }),
            }),
          ],
        }),
    ],
  });
}
function Hd(e) {
  let { editModel: t } = e,
    n = t.GetEventModel(),
    r = g(() => n.jsondata.prune_list_optin_name),
    i = g(() => n.jsondata.optin_only),
    { rgOptIns: a } = nt(),
    o = (0, Z.useMemo)(
      () =>
        a
          ? a.map((e) => ({
              value: e.pageid,
              label: `${e.title[R.LANGUAGE]} (${e.pageid})`,
            }))
          : [],
      [a],
    );
  return (0, X.jsxs)(`div`, {
    style: { marginLeft: `32px`, marginRight: `32px` },
    children: [
      (0, X.jsx)(W, { children: `Opt-In Event` }),
      (0, X.jsxs)(`div`, {
        style: { marginBottom: `12px` },
        children: [
          (0, X.jsx)(Ze._default, {
            isSearchable: !0,
            className: `react-select-container`,
            classNamePrefix: `react-select`,
            isDisabled: !o,
            options: o,
            value: o?.find((e) => e.value === r),
            onChange: (e) => {
              ((n.jsondata.prune_list_optin_name = e.value),
                t.SetDirty(x.jsondata_sales));
            },
          }),
          (0, X.jsx)(F, {
            label: `Only show invited games`,
            tooltip: `If checked, this hub will only show games that have been invited to register for the event. Typically used when defining a theme sale.`,
            checked: i,
            onChange: (e) => {
              ((n.jsondata.optin_only = e), t.SetDirty(x.jsondata_sales));
            },
          }),
        ],
      }),
    ],
  });
}
function Ud(e) {
  let { editModel: t } = e,
    n = t.GetEventModel(),
    r = g(
      () =>
        !n.jsondata.sale_defines_specific_contenthub &&
        !n.jsondata.sale_defines_temporary_contenthub,
    ),
    i = g(() => n.jsondata.contenthub_section_groups),
    [a, o] = je(!0);
  return !r && a
    ? null
    : (0, X.jsxs)(`div`, {
        style: { width: `100%` },
        children: [
          (0, X.jsx)(W, {
            style: { marginTop: `16px` },
            children: `Section Layout`,
          }),
          (0, X.jsx)(Hn, {
            items: i || [],
            onDelete: (e) => {
              ((n.jsondata.contenthub_section_groups = [
                ...n.jsondata.contenthub_section_groups.slice(0, e),
                ...n.jsondata.contenthub_section_groups.slice(e + 1),
              ]),
                t.SetDirty(x.jsondata_sales));
            },
            onReorder: () => {
              t.SetDirty(x.jsondata_sales);
            },
            render: (e) =>
              (0, X.jsx)(Wd, {
                editModel: t,
                group: e,
                isEditable: r,
                baseEventJSON: o,
                onChange: () => {
                  t.SetDirty(x.jsondata_sales);
                },
              }),
          }),
          (0, X.jsx)(I, {
            style: { maxWidth: `200px`, margin: `0 auto` },
            onClick: () => {
              (i || (n.jsondata.contenthub_section_groups = []),
                (n.jsondata.contenthub_section_groups = [
                  ...n.jsondata.contenthub_section_groups,
                  { name: ``, sections: [] },
                ]),
                t.SetDirty(x.jsondata_sales));
            },
            children: `Add Group`,
          }),
        ],
      });
}
function Wd(e) {
  let {
      editModel: t,
      group: n,
      isEditable: r,
      baseEventJSON: i,
      onChange: a,
    } = e,
    o = g(() => n.name),
    s = g(() => n.description),
    c = g(() => n.sections),
    l = g(() => n.override_type),
    u = (0, Z.useMemo)(
      () =>
        !r && i && i.contenthub_section_groups
          ? i.contenthub_section_groups.map((e) => ({
              data: e.name,
              label: e.name,
            }))
          : [],
      [i, r],
    );
  return !r && !i
    ? null
    : (0, X.jsxs)(`div`, {
        style: { width: `100%` },
        children: [
          r
            ? (0, X.jsxs)(`div`, {
                children: [
                  (0, X.jsx)(N, {
                    label: `Name`,
                    value: o,
                    onChange: (e) => {
                      ((n.name = e.target.value), a());
                    },
                  }),
                  (0, X.jsx)(N, {
                    label: `Description`,
                    value: s,
                    onChange: (e) => {
                      ((n.description = e.target.value), a());
                    },
                  }),
                ],
              })
            : (0, X.jsxs)(`div`, {
                style: { display: `flex` },
                children: [
                  (0, X.jsxs)(`div`, {
                    style: { flexGrow: 1, marginRight: `4px` },
                    children: [
                      (0, X.jsx)(W, {
                        children: `section group inherited from parent`,
                      }),
                      (0, X.jsx)(Zs, {
                        rgOptions: u,
                        selectedOption: o,
                        onChange: (e) => {
                          ((n.name = e.data), a());
                        },
                      }),
                    ],
                  }),
                  (0, X.jsxs)(`div`, {
                    style: { flexGrow: 1, marginLeft: `4px` },
                    children: [
                      (0, X.jsx)(W, { children: `Override Type` }),
                      (0, X.jsx)(Zs, {
                        rgOptions: [
                          { data: `replace`, label: `Replace` },
                          { data: `before`, label: `Add Before` },
                          { data: `after`, label: `Add After` },
                        ],
                        selectedOption: l,
                        onChange: (e) => {
                          ((n.override_type = e.data), a());
                        },
                      }),
                      !l &&
                        (0, X.jsx)(`div`, {
                          className: void 0,
                          children: `Must choose Override Type`,
                        }),
                    ],
                  }),
                ],
              }),
          (0, X.jsxs)(`div`, {
            style: { marginLeft: `32px`, marginRight: `32px` },
            children: [
              (0, X.jsx)(W, {
                children: `Locally Defined Sections To Display`,
              }),
              (0, X.jsx)(Hn, {
                items: c,
                onDelete: (e) => {
                  ((n.sections = [
                    ...n.sections.slice(0, e),
                    ...n.sections.slice(e + 1),
                  ]),
                    a());
                },
                onReorder: () => {
                  a();
                },
                render: (e) =>
                  (0, X.jsx)(Gd, { editModel: t, sectionRef: e, onChange: a }),
              }),
              (0, X.jsx)(I, {
                style: { maxWidth: `150px`, margin: `0 auto` },
                onClick: () => {
                  ((n.sections = [...n.sections, { sectionid: 0 }]), a());
                },
                children: `Add Section`,
              }),
            ],
          }),
        ],
      });
}
function Gd(e) {
  let { editModel: t, sectionRef: n, onChange: r } = e,
    i = t.GetEventModel(),
    a = g(() => i.GetSaleSections()),
    o = yi(),
    s = a.map((e, n) => ({
      data: e.unique_id,
      label: an(o.eLocation, e, Rs(R.LANGUAGE), t.GetEventModel(), n),
    })),
    c = g(() => n.sectionid);
  return (0, X.jsx)(`div`, {
    style: { width: `100%` },
    children: (0, X.jsx)(Zs, {
      rgOptions: s,
      selectedOption: c,
      onChange: (e) => {
        ((n.sectionid = e.data), r());
      },
    }),
  });
}
function Kd(e) {
  let { model: t, fnOnDirty: n } = e,
    { openColorPicker: r } = di(),
    [i, a] = g(() => [t.sale_background_color, t.sale_background_repeat]);
  return (0, X.jsxs)(`div`, {
    className: Y(V, ba),
    children: [
      (0, X.jsxs)(`div`, {
        className: Oa,
        children: [
          (0, X.jsx)(W, { children: L(`#Sale_Section_Background_Color`) }),
          (0, X.jsxs)(`div`, {
            className: xa,
            children: [
              (0, X.jsx)(I, {
                className: Ea,
                onClick: (e) => {
                  r(e, {
                    color: i,
                    onChange: (e) => {
                      ((t.sale_background_color = e), n());
                    },
                  });
                },
                style: { backgroundColor: i },
                children: L(`#Sale_BackgroundColor`),
              }),
              (0, X.jsx)(I, {
                className: Ma,
                onClick: (e) => {
                  ((t.sale_background_color = ``), n());
                },
                children: L(`#Sale_BackgroundColor_Reset`),
              }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(`div`, {
        className: Oa,
        children: (0, X.jsx)(Un, {
          setting: a,
          fnUpdateSetting: (e) => {
            t.sale_background_repeat != e &&
              ((t.sale_background_repeat = e), n());
          },
        }),
      }),
    ],
  });
}
function qd(e) {
  let { strArrowColor: t, fnUpdateArrowColor: n, arrowStyle: r } = e,
    { openColorPicker: i } = di(),
    [a, o] = Z.useState(t == null);
  return (0, X.jsx)(X.Fragment, {
    children: (0, X.jsxs)(I, {
      className: Ea,
      onClick: (e) => i(e, { color: t, onChange: n }),
      children: [
        (0, X.jsx)(Pi, { direction: `left`, arrowFill: t, arrowStyle: r }),
        L(`#EventEditor_BG_Arrow_Color`),
        (0, X.jsx)(H, { tooltip: L(`#EventEditor_BG_Arrow_Color_ttip`) }),
        (0, X.jsx)(Pi, { direction: `right`, arrowFill: t, arrowStyle: r }),
      ],
    }),
  });
}
function Jd(e) {
  let { label: t, fnUpdateColor: n, strColorToChange: r } = e,
    { openColorPicker: i } = di();
  return (0, X.jsx)(X.Fragment, {
    children: (0, X.jsxs)(I, {
      className: Ea,
      onClick: (e) => i(e, { color: r, onChange: n }),
      children: [
        t,
        (0, X.jsx)(H, { tooltip: L(`#EventEditor_BG_Arrow_Color_ttip`) }),
        (0, X.jsx)(ji, { ...e, bIsActive: !1 }),
        (0, X.jsx)(ji, { ...e, bIsActive: !0 }),
        (0, X.jsx)(ji, { ...e, bIsActive: !1 }),
        (0, X.jsx)(ji, { ...e, bIsActive: !1 }),
      ],
    }),
  });
}
function Yd(e) {
  return (0, X.jsxs)(X.Fragment, {
    children: [(0, X.jsx)(Xd, { ...e }), (0, X.jsx)(Zd, { ...e })],
  });
}
function Xd(e) {
  let { model: t, fnOnDirty: n } = e,
    [r, i] = g(() => [
      t.sale_carousel_arrow_color,
      t.sale_carousel_arrow_style || Mi.k_ECutArrowStyle,
    ]),
    a = (0, Z.useMemo)(() => {
      let e = [];
      return (
        e.push({
          label: L(`#Sale_Section_Carousel_CutArrowStyles`),
          data: Mi.k_ECutArrowStyle,
        }),
        e.push({
          label: L(`#Sale_Section_Carousel_DoubleArrowStyles`),
          data: Mi.k_EDoubleArrowStyle,
        }),
        e.push({
          label: L(`#Sale_Section_Carousel_ChevronStyles`),
          data: Mi.k_EThickChevron,
        }),
        e.push({
          label: L(`#Sale_Section_Carousel_FlatArrowStyles`),
          data: Mi.k_EFilledArrow,
        }),
        e.push({
          label: L(`#Sale_Section_Carousel_PointyArrowStyles`),
          data: Mi.k_EPointyArrow,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(`div`, {
    className: Y(V, ba),
    children: [
      (0, X.jsxs)(`div`, {
        className: Oa,
        children: [
          (0, X.jsx)(W, { children: L(`#Sale_Section_Carousel_Colors`) }),
          (0, X.jsx)(qd, {
            strArrowColor: r,
            arrowStyle: i,
            fnUpdateArrowColor: (e) => {
              t.sale_carousel_arrow_color != e &&
                ((t.sale_carousel_arrow_color = e), n());
            },
          }),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: Oa,
        children: [
          (0, X.jsx)(W, { children: L(`#Sale_Section_Carousel_ArrowStyles`) }),
          (0, X.jsx)(Zs, {
            strDropDownClassName: eo,
            rgOptions: a,
            selectedOption: i,
            onChange: (e) => {
              t.sale_carousel_arrow_style != e.data &&
                ((t.sale_carousel_arrow_style = e.data), n());
            },
            bDisableMouseOverlay: !0,
            contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
          }),
        ],
      }),
    ],
  });
}
function Zd(e) {
  let { model: t, fnOnDirty: n } = e,
    [r, i, a] = g(() => [
      t.sale_carousel_breadcrumb_color,
      t.sale_carousel_active_breadcrumb_color,
      t.sale_carousel_breadcrumb_style || Ni.k_EPillCrumb,
    ]),
    o = (0, Z.useMemo)(() => {
      let e = [];
      return (
        e.push({
          label: L(`#Sale_Section_Carousel_BreadCrumb_PillStyles`),
          data: Ni.k_EPillCrumb,
        }),
        e.push({
          label: L(`#Sale_Section_Carousel_BreadCrumb_CircularStyles`),
          data: Ni.k_ECircularCrumb,
        }),
        e.push({
          label: L(`#Sale_Section_Carousel_BreadCrumb_SquareStyles`),
          data: Ni.k_ESquareCrumb,
        }),
        e
      );
    }, []);
  return (0, X.jsxs)(`div`, {
    className: Y(V, ba),
    children: [
      (0, X.jsxs)(`div`, {
        className: Oa,
        children: [
          (0, X.jsx)(W, { children: L(`#Sale_Section_Carousel_BreadCrumb`) }),
          (0, X.jsx)(Jd, {
            label: L(`#Sale_Section_Carousel_BreadCrumb_Color`),
            strColorToChange: r,
            breadcrumbColor: r,
            breadcrumbActiveColor: i,
            breadcrumbStyle: a,
            fnUpdateColor: (e) => {
              t.sale_carousel_breadcrumb_color != e &&
                ((t.sale_carousel_breadcrumb_color = e), n());
            },
          }),
          (0, X.jsx)(Jd, {
            label: L(`#Sale_Section_Carousel_ActiveBreadCrumb_Color`),
            strColorToChange: i,
            breadcrumbColor: r,
            breadcrumbActiveColor: i,
            breadcrumbStyle: a,
            fnUpdateColor: (e) => {
              t.sale_carousel_active_breadcrumb_color != e &&
                ((t.sale_carousel_active_breadcrumb_color = e), n());
            },
          }),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: Oa,
        children: [
          (0, X.jsx)(W, {
            children: L(`#Sale_Section_Carousel_BreadCrumbStyles`),
          }),
          (0, X.jsx)(Zs, {
            strDropDownClassName: eo,
            rgOptions: o,
            selectedOption: a,
            onChange: (e) => {
              t.sale_carousel_breadcrumb_style != e.data &&
                ((t.sale_carousel_breadcrumb_style = e.data), n());
            },
            bDisableMouseOverlay: !0,
            contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
          }),
        ],
      }),
    ],
  });
}
function Qd(e) {
  let { editModel: t } = e,
    [n, r, i] = g(() => [
      t.GetEventModel().jsondata.sale_header_offset,
      t.GetEventModel().jsondata.localized_sale_logo?.filter(Boolean).length ||
        0,
      t.GetEventModel().jsondata.sale_header_disable_top_margin,
    ]);
  return (0, X.jsxs)(E, {
    requireAdmin: !0,
    clanSteamID: t.GetClanSteamID(),
    className: Y(Bo, Qs, Ua),
    children: [
      (0, X.jsx)(`div`, {
        className: `DialogLabel`,
        children: L(`#Sale_HeaderOffset`) + ` (VO)`,
      }),
      r > 0
        ? (0, X.jsx)(`div`, { children: L(`#Sale_HeaderOffset_disabled`) })
        : (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`div`, { children: L(`#Sale_HeaderOffset_Desc`) }),
              (0, X.jsxs)(`div`, {
                className: Y(V, Ks),
                children: [
                  (0, X.jsx)(N, {
                    value: n,
                    onChange: (e) => {
                      ((t.GetEventModel().jsondata.sale_header_offset =
                        Number(e?.target?.value) || 0),
                        t.SetDirty(x.jsondata_sales));
                    },
                  }),
                  (0, X.jsxs)(`div`, {
                    className: Ka,
                    children: [
                      (0, X.jsx)(`div`, {
                        className: Ys,
                        children: L(`#Sale_HeaderOffset_Max`, `530`),
                      }),
                      (0, X.jsx)(`div`, {
                        children: L(`#Sale_HeaderOffset_MaxDeck`),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      (0, X.jsx)(F, {
        checked: i,
        label: `Disable Sale Page Top Pixels`,
        onChange: (e) => {
          ((t.GetEventModel().jsondata.sale_header_disable_top_margin = e),
            t.SetDirty(x.jsondata_sales));
        },
      }),
    ],
  });
}
function $d(e) {
  let { editModel: t } = e,
    [n, r] = g(() => [
      t.GetEventModel().jsondata.sale_background_color,
      t.GetEventModel().jsondata.sale_background_repeat,
    ]);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(Kd, {
        model: t.GetEventModel().jsondata,
        fnOnDirty: () => t.SetDirty(x.jsondata_sales),
      }),
      (0, X.jsx)(Yd, {
        model: t.GetEventModel().jsondata,
        fnOnDirty: () => t.SetDirty(x.jsondata_sales),
      }),
      (0, X.jsx)(Qd, { editModel: t }),
      (0, X.jsx)(tf, { editModel: t }),
      (0, X.jsx)(ef, { editModel: t }),
    ],
  });
}
function ef(e) {
  let { editModel: t } = e,
    n = Z.createRef(),
    [r, i, a, o] = g(() => [
      Us(t.GetNumberOfDays(), 5, 14),
      t.GetNumSalesBackgroundHeader(),
      t.GetEventStartTime(),
      t.GetNumberOfDays(),
    ]),
    s = Z.useCallback(() => {
      let e = [{ label: L(`#Sale_HeaderArtwork_Single`), data: 1 }];
      if (r > 1)
        for (let t = 2; t <= r; t++)
          e.push({ label: L(`#Sale_HeaderArtwork_Multi_Amount`, t), data: t });
      return e;
    }, [r]),
    c = Z.useCallback(
      (e) => {
        let r = e.data;
        i !== r &&
          P(
            (0, X.jsx)(j, {
              strTitle: L(`#Button_Confirm`),
              strDescription: L(`#Sale_HeaderArtwork_Warning`),
              onOK: () => t.SetNumSalesBackgroundHeader(r),
              onCancel: () => n?.current?.SetSelectedOption(i),
            }),
            window,
          );
      },
      [t, i, n],
    ),
    l = Z.useCallback(() => {
      let e = [];
      for (let t = 0; t < i; t++) {
        let n = 86400,
          r = a + n * t,
          o = {
            label: K(
              t + 1 == i
                ? `#Sale_HeaderArtwork_DayTimeOnward`
                : `#Sale_HeaderArtwork_DayTime`,
              t + 1,
              (0, X.jsx)(Ui, { dateAndTime: r, bSingleLine: !0 }),
              (0, X.jsx)(Ui, { dateAndTime: r + n, bSingleLine: !0 }),
            ),
            data: t,
          };
        e.push(o);
      }
      return e;
    }, [i, a]);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(Zs, {
        dropDownControlRef: n,
        strDropDownClassName: eo,
        label: L(`#Sale_HeaderArtwork_Multi`),
        tooltip: L(`#Sale_HeaderArtwork_Multi_hint`),
        rgOptions: s(),
        selectedOption: i,
        onChange: c,
        bDisableMouseOverlay: !0,
        disabled: o <= 1,
        contextMenuPositionOptions: {
          bDisableMouseOverlay: !0,
          bDisablePopTop: !0,
        },
        strClassName: void 0,
      }),
      i > 1 &&
        (0, X.jsx)(Zs, {
          strDropDownClassName: `ZsXFGEgobIY-`,
          label: L(`#Sale_HeaderArtwork_EditDay`),
          tooltip: L(`#Sale_HeaderArtwork_EditDay_hint`),
          rgOptions: l(),
          selectedOption: t.GetEventModel().GetDayIndexFromEventStart(),
          onChange: (e) => {
            t.GetEventModel().m_overrideCurrentDay = e.data;
          },
          bDisableMouseOverlay: !0,
          contextMenuPositionOptions: {
            bDisableMouseOverlay: !0,
            bDisablePopTop: !0,
          },
          strClassName: void 0,
        }),
    ],
  });
}
function tf(e) {
  let { editModel: t } = e,
    [n, r] = g(() => [
      t.GetEventModel().jsondata.sale_background_video_webm,
      t.GetEventModel().jsondata.sale_background_video_mp4,
    ]);
  return (0, X.jsxs)(E, {
    requireAdmin: !0,
    clanSteamID: t.GetClanSteamID(),
    className: Y(Qs, Ua),
    children: [
      (0, X.jsx)(`div`, {
        className: O,
        children: L(`#Sale_BackgroundVideo_Title`),
      }),
      L(`#Sale_BackgroundVideo_Instructions`),
      (0, X.jsx)(N, {
        label: L(`#Sale_BackgroundVideo_WebM`),
        onChange: (e) => {
          ((t.GetEventModel().jsondata.sale_background_video_webm =
            e?.target?.value || ``),
            t.SetDirty(x.jsondata_sales));
        },
        value: n,
      }),
      (0, X.jsx)(N, {
        label: L(`#Sale_BackgroundVideo_MP4`),
        onChange: (e) => {
          ((t.GetEventModel().jsondata.sale_background_video_mp4 =
            e?.target?.value || ``),
            t.SetDirty(x.jsondata_sales));
        },
        value: r,
      }),
    ],
  });
}
var nf = `Bsl7UevRZFM-`,
  rf = `ndud1Kmayn8-`,
  af = `Og0zuR4T0bw-`,
  of = `r6WYpHbc7f8-`,
  sf = `hqqXLKJD908-`,
  cf = `Ib3ChwuUeec-`,
  lf = `IGXCZZdVoa4-`,
  uf = `Xg4jiVpnrEk-`,
  df = [`sale_cross_promo_background`];
function ff(e) {
  let { editModel: t } = e,
    { openColorPicker: r } = di(),
    [i, a] = g(() => [
      t.GetEventModel().jsondata.sale_cross_promo_carousel_background,
      t.GetEventModel().jsondata.sale_cross_promo_carousel_fade_color,
    ]),
    o = (0, Z.useCallback)(
      (e, r, i, a, o, s, c) => {
        let l = Ft(e, r);
        l?.image
          ? ((l.aspect_ratio = hi(s, c)),
            n(() => {
              ((t.GetEventModel().jsondata.sale_cross_promo_carousel_background =
                l),
                t.SetDirty(x.jsondata_image));
            }))
          : es(
              !1,
              `Cross-promote background conversion produced no image: ` + e,
            );
      },
      [t],
    ),
    s = (0, Z.useCallback)(
      (e) => {
        n(() => {
          ((t.GetEventModel().jsondata.sale_cross_promo_carousel_fade_color =
            e || void 0),
            t.SetDirty(x.jsondata_sales));
        });
      },
      [t],
    ),
    c = (0, Z.useCallback)(() => {
      n(() => {
        (delete t.GetEventModel().jsondata.sale_cross_promo_carousel_background,
          t.SetDirty(x.jsondata_image));
      });
    }, [t]),
    l = fi(t.GetClanAccountID(), i?.image),
    u = Ki.sale_cross_promo_background;
  return (0, X.jsxs)(`div`, {
    className: Aa,
    children: [
      (0, X.jsx)(`div`, {
        className: Na,
        children: `(VO) ` + L(`#EventEditor_CrossPromoArt_Title`),
      }),
      (0, X.jsx)(`div`, {
        className: Y(Sa, ga),
        children: (0, X.jsx)(`p`, {
          children: L(
            `#EventEditor_CrossPromoArt_Tip`,
            Xi(u.width),
            Xi(u.height),
          ),
        }),
      }),
      (0, X.jsx)(`div`, {
        className: Y(Sa, nf),
        children: (0, X.jsx)(Bt, {
          rgRealmList: t.GetIncludedRealmList(),
          rgSupportArtwork: df,
          strUploadAjaxURL: nn(t.GetClanSteamID()),
          fnOnUploadSuccess: o,
          bTwoPhaseUpload: !0,
          bDirectTempStorageUpload: !0,
        }),
      }),
      (0, X.jsxs)(`div`, {
        className: rf,
        children: [
          (0, X.jsx)(`span`, {
            className: af,
            children: L(`#EventEditor_CrossPromoArt_FadeColor_Label`),
          }),
          (0, X.jsx)(`span`, {
            className: of,
            style: a ? { background: a } : void 0,
          }),
          (0, X.jsx)(`span`, {
            className: sf,
            children: a || L(`#EventEditor_CrossPromoArt_FadeColor_Unset`),
          }),
          (0, X.jsx)(I, {
            className: cf,
            onClick: (e) => r(e, { color: a, onChange: s }),
            children: L(`#EventEditor_CrossPromoArt_FadeColor`),
          }),
          a &&
            (0, X.jsx)(I, {
              className: `Ib3ChwuUeec-`,
              onClick: () => s(void 0),
              children: L(`#EventEditor_CrossPromoArt_FadeColor_Clear`),
            }),
          l &&
            (0, X.jsx)(I, {
              className: `Ib3ChwuUeec-`,
              onClick: c,
              children: L(`#EventEditor_CrossPromoArt_Remove`),
            }),
        ],
      }),
      (0, X.jsx)(pf, { strBackgroundURL: l, strFadeColor: a }),
    ],
  });
}
function pf(e) {
  let { strBackgroundURL: t, strFadeColor: n } = e;
  return (0, X.jsx)(`div`, {
    className: lf,
    style: n ? { backgroundColor: n } : void 0,
    children: (0, X.jsxs)(`div`, {
      className: Y(uf, !t && `_1Sd0N8u6aBw-`),
      style: t ? { backgroundImage: `url(${t})` } : void 0,
      children: [
        !t &&
          (0, X.jsx)(`div`, {
            className: `tWqB2tcm1UY-`,
            children: L(`#EventEditor_CrossPromoArt_None`),
          }),
        n &&
          (0, X.jsx)(`div`, {
            className: `MQctGPD3vUA-`,
            style: { "--cross-promo-fade-color": n },
          }),
      ],
    }),
  });
}
var mf = r((e) => {
    let { editModel: t } = e,
      [r, i] = g(() => [t.GetAppID(), t.GetEventType()]),
      a = i == 36,
      o = ua(t.GetClanSteamID(), !0),
      s = (e, t = !1) => yn(e, t),
      c = (e, t = !1) => On(e, t),
      l = t.GetEventModel().jsondata.localized_sale_logo?.length || 0,
      u = t.GetEventModel().jsondata.localized_sale_overlay?.length || 0,
      d = v(t.GetEventModel().jsondata.sale_logo_url),
      f = [];
    return (
      a
        ? f.push(`sale_header`)
        : (f.push(`sale_header`, `sale_logo`), o && f.push(`sale_overlay`)),
      (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(Ia, {
            clanSteamID: t.GetClanSteamID(),
            rgSupportArtwork: f,
            fnSetImageURL: t.SetImageURL,
            bAllowPreviousClanImageSelection: !0,
            rgRealmList: t.GetIncludedRealmList(),
          }),
          (0, X.jsx)(kc, {
            strSectionId: `SalePageEdit_SaleBgImg`,
            children: (0, X.jsx)(wa, {
              id: `SalePageEdit_SaleBgImg`,
              appid: r,
              eventModel: t.GetEventModel(),
              clanSteamID: t.GetClanSteamID(),
              title: L(`#EventEditor_ArtworkType_sale_header`),
              artworkType: `sale_header`,
              elEventArtworkExample: (0, X.jsx)(zd, {
                artworkType: `sale_header`,
              }),
              bIsMinimized: s(`sale_header`),
              fnLangHasData: (e) => t.BHasImage(`sale_header`, e),
              fnSetImageURL: t.SetImageURL,
              fnGetImageHashAndExt: t.GetImageHashAndExt,
              fnToggleMinimize: () => c(`sale_header`),
              partnerEventStore: b,
              elAdditionalControls: (0, X.jsx)($d, { editModel: t }),
            }),
          }),
          !a &&
            (0, X.jsx)(kc, {
              strSectionId: `SalePageEdit_SaleLogo`,
              children: (0, X.jsxs)(`div`, {
                className: `LFm8D-pNUq0-`,
                children: [
                  (0, X.jsx)(wa, {
                    id: `SalePageEdit_SaleLogo`,
                    clanSteamID: t.GetClanSteamID(),
                    eventModel: t.GetEventModel(),
                    appid: r,
                    title: L(`#EventEditor_ArtworkType_sale_logo`),
                    artworkType: `sale_logo`,
                    elEventArtworkExample: (0, X.jsx)(zd, {
                      artworkType: `sale_logo`,
                    }),
                    bIsMinimized: s(`sale_logo`),
                    fnLangHasData: (e) => t.BHasImage(`sale_logo`, e),
                    fnSetImageURL: t.SetImageURL,
                    fnGetImageHashAndExt: t.GetImageHashAndExt,
                    fnToggleMinimize: () => c(`sale_logo`),
                    partnerEventStore: b,
                    fnRemoveAllArtwork:
                      l == 0
                        ? void 0
                        : () => {
                            n(() => {
                              ((t.GetEventModel().jsondata.localized_sale_logo =
                                []),
                                t.SetDirty(x.jsondata_sales));
                            });
                          },
                  }),
                  (0, X.jsx)(N, {
                    label: L(`#EventEditor_ArtworkType_sale_logo_url`),
                    value: t.GetEventModel().jsondata.sale_logo_url,
                    tooltip: L(
                      `#EventEditor_ArtworkType_sale_logo_url_tooltip`,
                    ),
                    description: L(
                      `#EventEditor_ArtworkType_sale_logo_url_example`,
                    ),
                    onChange: (e) => {
                      n(() => {
                        ((t.GetEventModel().jsondata.sale_logo_url =
                          e.target.value),
                          t.SetDirty(x.jsondata_sales));
                      });
                    },
                  }),
                  d &&
                    (0, X.jsx)(`div`, {
                      className: `wizbFzhGtBc-`,
                      children: d,
                    }),
                  (0, X.jsxs)(E, {
                    clanSteamID: t.GetClanSteamID(),
                    requireAdmin: !0,
                    children: [
                      (0, X.jsx)(F, {
                        label: L(`#EventEditor_SaleLogo_CrossPromoOnly`),
                        tooltip: L(`#EventEditor_SaleLogo_CrossPromoOnly_ttip`),
                        checked:
                          !!t.GetEventModel().jsondata
                            .sale_logo_cross_promo_only,
                        onChange: (e) => {
                          n(() => {
                            ((t.GetEventModel().jsondata.sale_logo_cross_promo_only =
                              e || void 0),
                              t.SetDirty(x.jsondata_sales));
                          });
                        },
                      }),
                      t.GetEventModel().jsondata.sale_logo_cross_promo_only &&
                        (0, X.jsx)(`div`, {
                          children: L(
                            `#EventEditor_SaleLogo_CrossPromoOnly_Note`,
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          !a &&
            (0, X.jsx)(kc, {
              strSectionId: `SalePageEdit_CrossPromoArt`,
              children: (0, X.jsx)(E, {
                clanSteamID: t.GetClanSteamID(),
                requireAdmin: !0,
                children: (0, X.jsx)(ff, { editModel: t }),
              }),
            }),
          !a &&
            (0, X.jsx)(kc, {
              strSectionId: `SalePageEdit_SaleOverlay`,
              children: (0, X.jsx)(E, {
                clanSteamID: t.GetClanSteamID(),
                requireAdmin: !0,
                className: `LFm8D-pNUq0-`,
                children: (0, X.jsx)(wa, {
                  id: `SalePageEdit_SaleOverlay`,
                  clanSteamID: t.GetClanSteamID(),
                  eventModel: t.GetEventModel(),
                  appid: r,
                  title: L(`#EventEditor_ArtworkType_sale_overlay`),
                  artworkType: `sale_overlay`,
                  elEventArtworkExample: (0, X.jsx)(zd, {
                    artworkType: `sale_overlay`,
                  }),
                  bIsMinimized: s(`sale_overlay`),
                  fnToggleMinimize: () => c(`sale_overlay`),
                  fnLangHasData: (e) => t.BHasImage(`sale_overlay`, e),
                  fnSetImageURL: t.SetImageURL,
                  fnGetImageHashAndExt: t.GetImageHashAndExt,
                  partnerEventStore: b,
                  fnRemoveAllArtwork:
                    u == 0
                      ? void 0
                      : () => {
                          n(() => {
                            ((t.GetEventModel().jsondata.localized_sale_overlay =
                              []),
                              t.SetDirty(x.jsondata_sales));
                          });
                        },
                }),
              }),
            }),
        ],
      })
    );
  }),
  hf = `QusoN4qyZiU-`,
  gf = `UxZSk5XcaNk-`,
  _f = `xn-GhARZTwY-`,
  vf = `iGXshzazNPs-`,
  yf = `Hnm-nE00SlA-`;
async function bf(e) {
  let t = { accountid: e, origin: self.origin },
    n = `${R.COMMUNITY_BASE_URL}actions/ajaxgetuserpartnerinfo`;
  Wa() == `partner` &&
    (n = `${R.PARTNER_BASE_URL}actions/ajaxgetuserpartnerinfo`);
  let r = await Q.default.get(n, { params: t, withCredentials: !0 });
  if (!r || r.status != 200 || r.data?.success != 1 || !r.data?.partners)
    throw `Load single user partner info failed ${k(r).strErrorMsg}`;
  return r.data.partners;
}
function xf(e) {
  let { data: t, isLoading: n } = o({
    queryKey: [`PartnerInfoList`, e],
    queryFn: () => bf(e),
  });
  return n ? null : t;
}
function Sf(e) {
  let {
      accountID: t,
      partnerID: n,
      fnSetPartnerID: r,
      strLabel: i,
      strTooltip: a,
    } = e,
    o = xf(t),
    s = (0, Z.useMemo)(
      () =>
        o?.length > 0
          ? o.map((e) => ({ label: e.partner_name, data: e.partnerid }))
          : null,
      [o],
    );
  return s == null
    ? null
    : (0, X.jsx)(Zs, {
        label: i,
        tooltip: a,
        rgOptions: s,
        selectedOption: n,
        onChange: (e) => r(e.data),
      });
}
function Cf(e) {
  let { strExternalSaleEventType: t, fnSetExternalSaleEventType: n } = e;
  return (0, X.jsxs)(`div`, {
    children: [
      `Please Select event type so that:`,
      (0, X.jsxs)(`ol`, {
        children: [
          (0, X.jsx)(`li`, {
            children: `we can show the right documentation to the partner`,
          }),
          (0, X.jsx)(`li`, {
            children: `Dev/Pub/Franchise sales are limited to the created apps if the hosting group is a creator hoem`,
          }),
        ],
      }),
      (0, X.jsx)(Zs, {
        rgOptions: [
          {
            label: `Publisher/Developer Sale`,
            data: `publisher`,
            tooltip: `A developer, publisher or franchise want to showcase their games on a sale page.`,
          },
          {
            label: `Showcase/Festival/Convention`,
            data: `showcase`,
            tooltip: `festivals, convensions, showcases. Typically events with a physical presence, but not always`,
          },
          {
            label: `Regional Sale`,
            data: `region`,
            tooltip: `For Made in XYZ Location events`,
          },
          {
            label: `Themed Sale`,
            data: `theme`,
            tooltip: `For events organized around a particular genre, theme, style`,
          },
          {
            label: `Franchise Sale`,
            data: `franchise`,
            tooltip: `For events organized around a particular franchise`,
          },
          {
            label: `DEV Only: Locked Publisher/Developer Sale`,
            data: `locked_publisher`,
            tooltip: `A developer, publisher or franchise want to showcase their games on a sale page and are limited to only their linked apps with their creator home.`,
          },
          {
            label: `DEV Only: Locked Franchise Sale`,
            data: `locked_franchise`,
            tooltip: `For events organized around a particular franchise and are limited to only their linked apps to their creator home`,
          },
        ],
        strDropDownClassName: eo,
        strDropDownMenuCtnClass: eo,
        strDropDownItemClassName: Xa,
        selectedOption: t,
        onChange: (e) => n(e.data),
        contextMenuPositionOptions: { bDisablePopTop: !0 },
      }),
    ],
  });
}
function wf(e) {
  let { clanSteamID: t, gidClanEvent: n } = e,
    { bLoading: r } = Gn(t.GetAccountID(), n);
  return r
    ? (0, X.jsx)(C, { string: L(`#Loading`) })
    : (0, X.jsx)(Tf, { ...e });
}
function Tf(e) {
  let { clanSteamID: t, gidClanEvent: n, fnOkCallbackList: r } = e,
    {
      bPublishRequiresValveApproval: i,
      fnSetStorePublishingRequiresValveApproval: a,
      bRequiresHostDisclaimer: o,
      fnSetStoreRequireHostDisclaimer: s,
      bHasSettingForRequiresValveApproval: c,
      strExternalSaleEventType: l,
      fnSetExternalSaleEventType: u,
    } = Gn(t.GetAccountID(), n),
    [d, f] = (0, Z.useState)(!c || i),
    [p, m] = (0, Z.useState)(o);
  return (
    Hs(r, () => {
      (a(d), s(p));
    }),
    (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(F, {
          checked: r ? d : !c || i,
          onChange: (e) => {
            (f(e), r || a(e));
          },
          label: `Require Approval by Valve Admin in order to publish this sales events`,
          tooltip: `They will see a warning indicating they cannot publish until Valve approves the page. Approval is done by Valve Admin in the same place.`,
        }),
        (0, X.jsx)(F, {
          checked: r ? p : o,
          onChange: (e) => {
            (m(e), r || s(e));
          },
          label: L(`#SalePresented_By_Admin`),
          tooltip: L(`#SalePresneted_By_Admin_ttip`),
        }),
        (0, X.jsx)(Cf, {
          strExternalSaleEventType: l,
          fnSetExternalSaleEventType: u,
        }),
      ],
    })
  );
}
function Ef(e) {
  let {
      clanSteamID: t,
      gidClanEvent: n,
      rgSalePresenters: r,
      fnCleanSaleEventPresenters: i,
      bPublishTab: a,
      bIsEventVisible: o,
    } = e,
    {
      bLoading: s,
      bPublishRequiresValveApproval: c,
      nAccountApproved: l,
      bRequiresHostDisclaimer: u,
      fnSetStoreRequireHostDisclaimer: d,
    } = Gn(t.GetAccountID(), n),
    { oPrivateData: f } = gt(t.GetAccountID(), n),
    p = Df(t, n);
  if (o)
    return (
      p &&
      (0, X.jsx)(`div`, {
        className: Y(`QusoN4qyZiU-`, `_2af3SrVy-3M-`),
        children: (0, X.jsx)(`div`, {
          className: void 0,
          children: (0, X.jsx)(Of, { clanSteamID: t, gidClanEvent: n }),
        }),
      })
    );
  if (!s && c && !l) {
    let e = (e) => {
        P((0, X.jsx)(Nf, { clanSteamID: t, gidClanEvent: n }), G(e));
      },
      a = (e) => {
        P((0, X.jsx)(jf, { clanSteamID: t, gidClanEvent: n }), G(e));
      },
      o = f?.jsonData?.strSalePageApprovalHelpTicketReferenceCode;
    return (0, X.jsxs)(`div`, {
      className: Y(hf, o ? gf : ``),
      children: [
        (0, X.jsx)(`div`, {
          className: void 0,
          children: o
            ? (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(`div`, {
                    className: yf,
                    children: L(`#EventEditor_SaleValveApproval_Title_Pending`),
                  }),
                  (0, X.jsx)(`div`, {
                    children: L(`#EventEditor_SaleValveApproval_Desc_Pending`),
                  }),
                ],
              })
            : (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(`div`, {
                    className: yf,
                    children: L(`#EventEditor_SaleValveApproval_Title`),
                  }),
                  (0, X.jsx)(`div`, {
                    children: L(`#EventEditor_SaleValveApproval_Desc`),
                  }),
                ],
              }),
        }),
        (0, X.jsxs)(`div`, {
          className: vf,
          children: [
            o
              ? (0, X.jsx)(qa, {
                  href: `${R.HELP_BASE_URL}en/wizard/HelpRequest/${f?.jsonData?.strSalePageApprovalHelpTicketReferenceCode}`,
                  className: Y(jo, Os),
                  bForceExternal: !0,
                  children: L(`#EventEditor_SaleValveApproval_Request_Link`),
                })
              : (0, X.jsx)(B, {
                  toolTipContent: L(
                    `#EventEditor_SaleValveApproval_Request_Approval_ttip`,
                  ),
                  children: (0, X.jsx)(Ns, {
                    onClick: e,
                    children: L(
                      `#EventEditor_SaleValveApproval_Request_Button`,
                    ),
                  }),
                }),
            (0, X.jsxs)(E, {
              clanSteamID: t,
              children: [
                (0, X.jsxs)(I, {
                  onClick: a,
                  children: [
                    `Approve... `,
                    (0, X.jsx)(H, {
                      tooltip: L(
                        `#EventEditor_SaleValveApproval_Admin_Tooltip`,
                      ),
                    }),
                  ],
                }),
                r?.length > 0 &&
                  (0, X.jsx)(I, {
                    onClick: i,
                    children: L(`#SalePresented_By_ClearPresenters`),
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  return !s && c && l
    ? (0, X.jsx)(`div`, {
        className: Y(hf, _f),
        children: (0, X.jsxs)(`div`, {
          className: void 0,
          children: [
            (0, X.jsxs)(`div`, {
              className: yf,
              children: [
                `✓ `,
                L(`#EventEditor_SaleValveApproval_Approved_Title`),
              ],
            }),
            (0, X.jsx)(`div`, {
              children: L(
                a
                  ? `#EventEditor_SaleValveApproval_Approved_Desc_OnPublish`
                  : `#EventEditor_SaleValveApproval_Approved_Desc`,
              ),
            }),
            (0, X.jsx)(`br`, {}),
            (0, X.jsx)(Of, { clanSteamID: t, gidClanEvent: n }),
          ],
        }),
      })
    : null;
}
function Df(e, t) {
  let {
    bLoading: n,
    bAllowAddingAppsPackagesBundles: r,
    bAllowChangingVanityURL: i,
    bAllowMakingChangesToSalePage: a,
  } = en(e.GetAccountID(), t);
  return !n && (!r || !i || !a);
}
function Of(e) {
  let { clanSteamID: t, gidClanEvent: n } = e,
    r = Df(t, n),
    {
      bAllowAddingAppsPackagesBundles: i,
      bAllowChangingVanityURL: a,
      bAllowMakingChangesToSalePage: o,
    } = en(t.GetAccountID(), n);
  return r
    ? (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(`div`, {
            children: L(`#EventEditor_SaleEditor_Restriction`),
          }),
          (0, X.jsxs)(`ul`, {
            children: [
              !a &&
                (0, X.jsxs)(`li`, {
                  children: [
                    L(`#EventEditor_SaleEditor_Block_URL`),
                    ` `,
                    (0, X.jsx)(H, {
                      tooltip: L(`#EventEditor_SaleEditor_Block_URL_ttip`),
                    }),
                  ],
                }),
              !i &&
                (0, X.jsxs)(`li`, {
                  children: [
                    L(`#EventEditor_SaleEditor_Block_App`),
                    ` `,
                    (0, X.jsx)(H, {
                      tooltip: L(`#EventEditor_SaleEditor_Block_App_ttip`),
                    }),
                  ],
                }),
              !o &&
                (0, X.jsx)(`li`, {
                  children: L(`#EventEditor_SaleEditor_Block_Sale`),
                }),
            ],
          }),
        ],
      })
    : null;
}
function kf(e) {
  let { clanSteamID: t, gidClanEvent: n, bShowThrobber: r } = e,
    {
      bLoading: i,
      bAllowChangingVanityURL: a,
      bAllowAddingAppsPackagesBundles: o,
      bAllowMakingChangesToSalePage: s,
      fnSetAllowAddingAppsPackagesBundles: c,
      fnSetAllowChangingVanityURL: l,
      fnSetAllowMakingChangesToSalePage: u,
    } = en(t.GetAccountID(), n);
  return r && i
    ? (0, X.jsx)(C, {
        string: L(`#Loading`),
        size: `medium`,
        position: `center`,
      })
    : (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(`h3`, { children: `Post Approval Controls` }),
          (0, X.jsx)(`br`, {}),
          (0, X.jsx)(F, {
            checked: a,
            onChange: l,
            label: `Allow Updating Vanity URL After Approval`,
            tooltip: `Unset when we plan to feature with a direct link to the landing page`,
          }),
          (0, X.jsx)(F, {
            checked: o,
            onChange: c,
            label: `Allow Adding Apps/Packages/Bundles after Approval`,
            tooltip: `Use when we agreed to a specific app/package/bundle list for them to use.`,
          }),
          (0, X.jsx)(F, {
            checked: s,
            onChange: u,
            label: `Allow Updating layout/artwork/ordering/carousels After Approval`,
            tooltip: `Use when we don't have full trust that they won't change the art or featuring in a way that breaks what we reviewed and agreed upon`,
          }),
        ],
      });
}
function Af(e) {
  let { clanSteamID: t, gidClanEvent: n, closeModal: r } = e,
    i = `Update Post Review Editability`,
    [a, o, s] = Tt(),
    c = ta();
  return c.bLoading
    ? (0, X.jsx)(ea, { state: c, strDialogTitle: i, closeModal: r })
    : (0, X.jsx)(j, {
        strTitle: i,
        onOK: () => {
          (c.fnSetLoading(!0),
            s(n)
              .then((e) => {
                e == 1
                  ? r()
                  : (o(),
                    c.fnSetError(!0),
                    c.fnSetStrError(`Failed to update Private Data: ` + e));
              })
              .catch((e) => {
                (o(), c.fnSetError(!0), c.fnSetStrError(k(e).strErrorMsg));
              }));
        },
        strOKButtonText: `Update`,
        bDisableBackgroundDismiss: !0,
        closeModal: r,
        onCancel: o,
        bOKDisabled: !!c.bError,
        children: (0, X.jsx)(kf, {
          clanSteamID: t,
          gidClanEvent: n,
          bShowThrobber: !0,
        }),
      });
}
function jf(e) {
  let { clanSteamID: t, gidClanEvent: n, closeModal: r } = e,
    { fnSetAccountApproved: i } = Gn(t.GetAccountID(), n),
    [a, o, s] = Tt(),
    c = `APPROVE SALE PAGE?`,
    l = ta();
  return l.bLoading
    ? (0, X.jsx)(ea, { state: l, strDialogTitle: c, closeModal: r })
    : (0, X.jsx)(j, {
        strTitle: c,
        strDescription: `This will remove the publishing block and allow the partner to publish anytime afterward. As a reminder, these are the things we should check before approving:`,
        onOK: () => {
          (l.fnSetLoading(!0),
            i(_s.accountid),
            s(n)
              .then((e) => {
                e == 1
                  ? r()
                  : (o(),
                    l.fnSetError(!0),
                    l.fnSetStrError(`Failed to update Private Data: ` + e));
              })
              .catch((e) => {
                (o(), l.fnSetError(!0), l.fnSetStrError(k(e).strErrorMsg));
              }));
        },
        strOKButtonText: `Yes, Approve`,
        bDisableBackgroundDismiss: !0,
        closeModal: r,
        onCancel: o,
        bOKDisabled: !!l.bError,
        children: (0, X.jsxs)(`div`, {
          children: [
            (0, X.jsx)(`br`, {}),
            (0, X.jsx)(`br`, {}),
            (0, X.jsx)(`h3`, { children: `Key requirements:` }),
            (0, X.jsxs)(`ul`, {
              children: [
                (0, X.jsx)(`li`, {
                  children: `Is the event organizer clearly communicated on the sale page?`,
                }),
                (0, X.jsx)(`li`, { children: `Are the dates set correctly?` }),
                (0, X.jsx)(`li`, {
                  children: `Are the store page banners reasonable and avoid sponsor logos?`,
                }),
              ],
            }),
            (0, X.jsx)(`h3`, { children: `If we are promoting this event:` }),
            (0, X.jsxs)(`ul`, {
              children: [
                (0, X.jsx)(`li`, {
                  children: `Does the artwork fit the space and fade nicely on the edges?`,
                }),
                (0, X.jsx)(`li`, {
                  children: `Do we have all layered art files in hand if we are promoting this event?`,
                }),
              ],
            }),
            (0, X.jsx)(kf, { clanSteamID: t, gidClanEvent: n }),
          ],
        }),
      });
}
async function Mf(e, t, n, r) {
  let i = R.COMMUNITY_BASE_URL + `partnereventdata/ajaxrequestsalepagereview`,
    a = new URLSearchParams();
  (a.append(`sessionid`, ss()),
    a.append(`clanAccountID`, `` + e.GetAccountID()),
    a.append(`gidClanEvent`, t),
    a.append(`partnerID`, `` + r),
    a.append(`message`, n));
  try {
    let e = await Q.default.post(i, a, { withCredentials: !0 });
    return !e || e.status != 200 || e.data.success != 1
      ? (console.error(`CreateReviewRequestTicket failed.`, e && k(e)),
        e.data.success == 29 ? e.data : null)
      : e.data;
  } catch (e) {
    let t = k(e);
    console.error(`CreateReviewRequestTicket failed: ` + t.strErrorMsg, t);
  }
  return null;
}
function Nf(e) {
  let { clanSteamID: t, gidClanEvent: n, closeModal: r } = e,
    {
      bLoading: i,
      oPrivateData: a,
      fnSetPrivateJsonNoDirty: o,
    } = gt(t.GetAccountID(), n),
    [s, c] = (0, Z.useState)(``),
    [l, u] = (0, Z.useState)(null),
    d = ta();
  return d.bLoading
    ? (0, X.jsx)(ea, {
        state: d,
        strDialogTitle: L(`#EventEditor_SaleValveApproval_Request_Approval`),
        closeModal: r,
      })
    : (0, X.jsxs)(j, {
        strTitle: L(`#EventEditor_SaleValveApproval_Request_Approval`),
        strDescription: L(`#EventEditor_SaleValveApproval_Request_Desc`),
        bDisableBackgroundDismiss: !0,
        bOKDisabled: i,
        onCancel: r,
        onOK: async () => {
          (d.fnSetLoading(!0),
            Mf(t, n, s, l)
              .then((e) => {
                e && e.success == 1
                  ? (o({
                      ...a,
                      strSalePageApprovalHelpTicketReferenceCode:
                        e.reference_code,
                    }),
                    d.fnSetSuccess(!0),
                    d.fnSetElSuccess(
                      (0, X.jsxs)(`div`, {
                        children: [
                          (0, X.jsx)(`div`, {
                            children: L(
                              `#EventEditor_SaleValveApproval_Request_Success`,
                            ),
                          }),
                          (0, X.jsx)(qa, {
                            href: e.help_url,
                            bForceExternal: !0,
                            children: L(
                              `#EventEditor_SaleValveApproval_Request_Link`,
                            ),
                          }),
                        ],
                      }),
                    ))
                  : e.success == 29
                    ? (d.fnSetError(!0),
                      d.fnSetStrError(
                        L(
                          `#EventEditor_SaleValveApproval_Request_DuplicateError`,
                        ),
                      ))
                    : (d.fnSetError(!0),
                      d.fnSetStrError(
                        L(`#EventEditor_SaleValveApproval_Request_Error`),
                      ));
              })
              .catch((e) => {
                (d.fnSetError(!0),
                  d.fnSetStrError(
                    L(`#EventEditor_SaleValveApproval_Request_Error`),
                  ));
              }));
        },
        children: [
          (0, X.jsx)(`br`, {}),
          (0, X.jsx)(`br`, {}),
          L(`#EventEditor_SaleValveApproval_Request_Desc2`),
          (0, X.jsx)(`br`, {}),
          (0, X.jsx)(`br`, {}),
          L(`#EventEditor_SaleValveApproval_Request_Desc3`),
          (0, X.jsx)(`br`, {}),
          (0, X.jsx)(`br`, {}),
          (0, X.jsx)(N, {
            type: `text`,
            label: L(`#EventEditor_SaleValveApproval_Request_InputText`),
            onChange: (e) => c(e.currentTarget.value || ``),
            value: s,
          }),
          (0, X.jsx)(Sf, {
            accountID: _s.accountid,
            partnerID: l,
            fnSetPartnerID: u,
            strLabel: L(`#EventEditor_SaleValveApproval_Request_Partner`),
            strTooltip: L(
              `#EventEditor_SaleValveApproval_Request_Partner_ttip`,
            ),
          }),
        ],
      });
}
var Pf = `ikJZ2Wb699k-`,
  Ff = `-GYWU4nsO5A-`,
  If = `t9Nl2VSlY74-`,
  Lf = `UZnDc5wL30g-`,
  Rf = `bmzCzldvNuQ-`,
  zf = `K-SFFuhLc68-`,
  Bf = `eUgw8zLTQ38-`,
  Vf = `FjsL5BOw9to-`,
  Hf = `JUGv-SQQBIw-`,
  Uf = `ylFvR-8cesI-`,
  Wf = `tjvsZItN4v8-`,
  Gf = `-v5zTj5SD-I-`,
  Kf = `fpGXzez-88A-`;
function qf(e) {
  let t = b.GetEditModel(),
    {
      bLoading: n,
      nAcceptingGuidelineAccount: r,
      bRequiresHostDisclaimer: i,
    } = Jt(t.GetClanAccountID(), t.GetGID()),
    [a, o] = g(() => [
      t.BHasSaleEnabled(),
      t.GetEventModel().jsondata.sale_presenters,
    ]),
    s = ua(t.GetClanSteamID(), !0);
  if (!a) return (0, X.jsx)(X.Fragment, {});
  let c = !!r;
  return s || (c && (!i || o?.length >= 1)) || t.GetEventType() == 36
    ? (0, X.jsx)(X.Fragment, { children: e.children })
    : n
      ? (0, X.jsx)(C, {})
      : c
        ? (0, X.jsxs)(`div`, {
            className: Lf,
            children: [
              (0, X.jsxs)(`div`, {
                className: Hf,
                children: [
                  (0, X.jsx)(`div`, {
                    className: Uf,
                    children: (0, X.jsx)(ys, {}),
                  }),
                  (0, X.jsx)(`div`, {
                    className: void 0,
                    children: L(`#EventDisclaimer_GuidelineAccepted`),
                  }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: Hf,
                children: [
                  (0, X.jsx)(`div`, { className: Uf, children: `\xA0` }),
                  (0, X.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      L(`#EventDisclaimer_desc`),
                      (0, X.jsx)(`div`, {
                        className: Rf,
                        children: (0, X.jsx)(Ns, {
                          onClick: (e) => P((0, X.jsx)(tp, {}), G(e)),
                          children: L(`#EventDisclaimer_button_enter`),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : (0, X.jsxs)(`div`, {
            className: Lf,
            children: [
              (0, X.jsxs)(`div`, {
                className: Hf,
                children: [` `, L(`#EventSaleGuidelines_desc`)],
              }),
              (0, X.jsx)(`div`, {
                className: Rf,
                children: (0, X.jsx)(Ns, {
                  onClick: (e) =>
                    P((0, X.jsx)(ep, { bCheckListReadOnly: !1 }), G(e)),
                  children: L(`#EventSaleGuidelines_Review`),
                }),
              }),
            ],
          });
}
function Jf(e) {
  let t = b.GetEditModel(),
    { bLoading: n, nAcceptingGuidelineAccount: r } = Jt(
      t.GetClanAccountID(),
      t.GetGID(),
    ),
    i = ua(t.GetClanSteamID(), !0),
    { bVisible: a } = ci(t.GetEventModel(), i),
    { bVisible: o } = li(t.GetEventModel());
  return n || a || o
    ? null
    : i
      ? (0, X.jsx)($f, {})
      : r
        ? (0, X.jsx)(Yf, {})
        : null;
}
function Yf() {
  let e = b.GetEditModel(),
    { rtAcceptanceTime: t, strSalePageApprovalHelpTicketReferenceCode: n } = Jt(
      e.GetClanAccountID(),
      e.GetGID(),
    ),
    r = g(() => {
      let t = e.GetEventModel().jsondata.sale_presenters;
      return (
        t?.length > 0 &&
        t[0].localized_presenter_name?.length > 0 &&
        t[0].localized_presenter_name[0].length > 0
      );
    });
  return (0, X.jsxs)(`div`, {
    className: Ff,
    children: [
      (0, X.jsxs)(`div`, {
        className: zf,
        children: [
          K(
            `#EventSaleGuidelines_AlreadyReviewed`,
            (0, X.jsx)(Ui, { dateAndTime: t, bSingleLine: !0 }),
          ),
          !r &&
            (0, X.jsxs)(`div`, {
              className: `_0ZMze601Qbg-`,
              children: [L(`#SalePresented_By_Instructions`), ` 🡆`],
            }),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: Bf,
        children: [
          (0, X.jsx)(I, {
            onClick: (e) => P((0, X.jsx)(ep, { bCheckListReadOnly: !0 }), G(e)),
            children: L(`#EventSaleGuidelines_Review`),
          }),
          r
            ? (0, X.jsx)(X.Fragment, {
                children: (0, X.jsx)(I, {
                  onClick: (e) => P((0, X.jsx)(tp, {}), G(e)),
                  children: L(`#EventDisclaimer_button`),
                }),
              })
            : (0, X.jsx)(X.Fragment, {
                children: (0, X.jsx)(Ns, {
                  onClick: (e) => P((0, X.jsx)(tp, {}), G(e)),
                  children: L(`#EventDisclaimer_button_enter`),
                }),
              }),
          !!n &&
            (0, X.jsx)(X.Fragment, {
              children: (0, X.jsx)(I, {
                onClick: (e) =>
                  Uo(e, `${R.HELP_BASE_URL}en/wizard/HelpRequest/${n}`),
                children: L(`#EventEditor_SaleValveApproval_Request_Link`),
              }),
            }),
          (0, X.jsx)(E, {
            clanSteamID: e.GetClanSteamID(),
            children: (0, X.jsx)(Xf, {}),
          }),
        ],
      }),
    ],
  });
}
function Xf(e) {
  let t = b.GetEditModel(),
    n = t.GetClanAccountID(),
    r = t.GetGID(),
    [i, a, o] = Gs(!1),
    {
      bLoading: s,
      bPublishRequiresValveApproval: c,
      nAccountApproved: l,
      bRequiresHostDisclaimer: u,
      fnSetStoreRequireHostDisclaimer: d,
    } = Gn(n, r);
  return !c || !l
    ? null
    : (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(I, {
            onClick: a,
            children: (0, X.jsx)(xs, {
              toolTipContent: `Make the partner re-request reviewing the sale page because we are allowing them to make further changes`,
              children: (0, X.jsx)(`span`, {
                children: `Remove Reviewed Stats`,
              }),
            }),
          }),
          (0, X.jsx)(To, {
            active: i,
            children: (0, X.jsx)(Zf, {
              clanSteamID: t.GetClanSteamID(),
              gidClanEvent: t.GetGID(),
              closeModal: o,
            }),
          }),
        ],
      });
}
function Zf(e) {
  let { clanSteamID: t, gidClanEvent: n, closeModal: r } = e,
    i = `Revert SALE PAGE Approval?`,
    [a, o, s] = Tt(),
    { fnRemoveApprovalAccount: c } = Gn(t.GetAccountID(), n),
    {
      fnSetAllowAddingAppsPackagesBundles: l,
      fnSetAllowChangingVanityURL: u,
      fnSetAllowMakingChangesToSalePage: d,
    } = en(t.GetAccountID(), n),
    f = ta();
  return f.bLoading
    ? (0, X.jsx)(ea, { state: f, strDialogTitle: i, closeModal: r })
    : (0, X.jsx)(j, {
        strTitle: i,
        strDescription: `The sale is currently approved. This will revert this state and will require the sale operator to request permissions again. Are you sure?`,
        onOK: () => {
          (f.fnSetLoading(!0),
            l(!0),
            u(!0),
            d(!0),
            c(_s.accountid),
            s(n)
              .then((e) => {
                e == 1
                  ? r()
                  : (o(),
                    f.fnSetError(!0),
                    f.fnSetStrError(`Failed to update Private Data: ` + e));
              })
              .catch((e) => {
                (o(), f.fnSetError(!0), f.fnSetStrError(k(e).strErrorMsg));
              }));
        },
        strOKButtonText: `Yes, Approve`,
        bDisableBackgroundDismiss: !0,
        closeModal: r,
        onCancel: o,
        bOKDisabled: !!f.bError,
        children: (0, X.jsx)(`div`, {
          children: `This will also permit them to make any changes to the sale page`,
        }),
      });
}
function Qf(e) {
  let t = b.GetEditModel(),
    { bLoading: n, bPublishRequiresValveApproval: r } = Gn(
      t.GetClanAccountID(),
      t.GetGID(),
    ),
    [i, a] = Z.useState(void 0);
  return (
    Z.useEffect(() => {
      n || (i === void 0 ? a(!!r) : i != !!r && t.SetDirty(x.jsondata_sales));
    }, [t, n, i, r]),
    !t.BHidden() || t.BPublished()
      ? null
      : (0, X.jsx)(wf, {
          gidClanEvent: t.GetGID(),
          clanSteamID: t.GetClanSteamID(),
        })
  );
}
function $f() {
  let e = b.GetEditModel(),
    { nAcceptingGuidelineAccount: t } = Jt(e.GetClanAccountID(), e.GetGID());
  return Ur.includes(e.GetClanAccountID())
    ? null
    : t
      ? (0, X.jsxs)(`div`, {
          className: Pf,
          children: [
            (0, X.jsx)(Yf, {}),
            (0, X.jsxs)(`div`, {
              className: If,
              children: [
                `Accepted by:\xA0`,
                (0, X.jsx)(yt, {
                  accountID: t,
                  locToken: `#EventModTile_Signer`,
                }),
              ],
            }),
            (0, X.jsx)(Qf, {}),
          ],
        })
      : (0, X.jsxs)(`div`, {
          className: Pf,
          children: [
            `The event organizer has not yet accepted the agreements for this sale page. The next time that any non-Valve account attempts to edit this sale, they should be required to accept the agreements.`,
            (0, X.jsx)(Qf, {}),
          ],
        });
}
function ep(e) {
  let { bCheckListReadOnly: t, closeModal: n } = e,
    r = b.GetEditModel(),
    {
      nAcceptingGuidelineAccount: i,
      strPrimaryContactName: a,
      strPrimaryContactEmail: o,
      fnSetAcceptingGuideLine: s,
      fnSetContactEmailAndName: c,
      strExternalSaleEventType: l,
    } = Jt(r.GetClanAccountID(), r.GetGID()),
    [u, d, f] = Tt(),
    p = !!i,
    [m, h] = Z.useState(p),
    [g, _] = Z.useState(p),
    [v, ee] = Z.useState(p),
    te = `${R.PARTNER_BASE_URL}doc/store/promo/${l}_page`,
    ne = L(`#EventSaleGuidelines_doc_${l}`),
    [re, ie] = Z.useState(a || ``),
    [ae, oe] = Z.useState(o || ``),
    [se, ce] = Z.useState(!1),
    [le, ue] = Z.useState(null),
    de = m && g && v && re.length > 0 && ae.length > 0;
  return (0, X.jsx)(j, {
    strTitle: L(`#EventSaleGuideLines_title`),
    strDescription: L(`#EventSaleGuidelines_desc`),
    bOKDisabled: !de || se,
    onOK: () => {
      (t || s(_s.accountid),
        c(re, ae),
        !t && r.GetGID()
          ? (ce(!0),
            f(r.GetGID())
              .then(n)
              .catch((e) => {
                ue(k(e).strErrorMsg);
              }))
          : n && n());
    },
    onCancel: n,
    closeModal: n,
    children:
      se || le
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              se &&
                (0, X.jsx)(C, {
                  string: L(`#Saving`),
                  size: `medium`,
                  position: `center`,
                }),
              !!le && (0, X.jsx)(`div`, { children: le }),
            ],
          })
        : (0, X.jsxs)(`div`, {
            className: Wf,
            children: [
              (0, X.jsxs)(`div`, {
                children: [
                  (0, X.jsx)(F, {
                    label: L(`#EventSaleGuidelines_rule_5`),
                    checked: m,
                    onChange: h,
                    disabled: t,
                  }),
                  (0, X.jsx)(F, {
                    label: L(`#EventSaleGuidelines_rule_1`),
                    checked: g,
                    onChange: _,
                    disabled: t,
                  }),
                  (0, X.jsx)(F, {
                    label: (0, X.jsx)(`span`, {
                      style: { display: `inline` },
                      children: K(
                        `#EventSaleGuidelines_rule_6`,
                        (0, X.jsx)(`a`, {
                          href: te,
                          target: `_blank`,
                          children: ne,
                        }),
                      ),
                    }),
                    checked: v,
                    onChange: ee,
                    disabled: t,
                  }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: Gf,
                children: [
                  (0, X.jsx)(`div`, {
                    className: Kf,
                    children: L(`#EventSaleGuidelines_PrimaryContact`),
                  }),
                  (0, X.jsx)(`div`, {
                    children: L(`#EventSaleGuidelines_PrimaryContact_desc`),
                  }),
                  (0, X.jsx)(N, {
                    placeholder: L(`#EventSaleGuidelines_PrimaryContact_name`),
                    value: re,
                    onChange: (e) => ie(e.currentTarget.value),
                  }),
                  (0, X.jsx)(N, {
                    placeholder: L(`#EventSaleGuidelines_PrimaryContact_email`),
                    value: ae,
                    onChange: (e) => oe(e.currentTarget.value),
                  }),
                ],
              }),
            ],
          }),
  });
}
function tp(e) {
  let { closeModal: t } = e,
    n = b.GetEditModel(),
    [r, i] = Z.useState(!1),
    a = g(() => n.GetEventModel().jsondata.sale_presenters || []),
    [o, s] = Z.useState(a);
  return (0, X.jsxs)(j, {
    strTitle: L(`#EventDisclaimer_title`),
    strDescription: L(`#EventDisclaimer_desc_details`),
    onCancel: t,
    bDisableBackgroundDismiss: !0,
    bOKDisabled:
      !r &&
      (o.length == 0 ||
        o[0].url?.length == 0 ||
        o.some((e) => !N.validateUrl(e.url)) ||
        o.some((e) => !(e.localized_presenter_name[0]?.length > 0))),
    onOK: () => {
      ((n.GetEventModel().jsondata.sale_presenters = o),
        n.SetDirty(x.jsondata_sales),
        t());
    },
    children: [
      (0, X.jsx)(Ct, { editModel: n, eInitLangLanguage: 0 }),
      (0, X.jsx)(Hn, {
        items: o,
        onDelete: (e) => s(o.length == 1 ? [] : [...o.splice(e, 1)]),
        onReorder: () => s([...o]),
        render: (e, t) =>
          (0, X.jsx)(np, {
            presenter: e,
            setPresenter: (e) => {
              ((o[t] = { ...e }), s([...o]));
            },
          }),
      }),
      (0, X.jsx)(I, {
        onClick: () => {
          let e = Math.floor(1 + Math.random() * 1e5);
          for (; o && o.some((t) => t.unique_id === e);)
            e = Math.floor(1 + Math.random() * 1e5);
          s([
            ...o,
            { unique_id: e, localized_presenter_name: Array(32), url: `` },
          ]);
        },
        children: L(`#EventDisclaimer_add`),
      }),
      o?.length > 0 &&
        (0, X.jsxs)(`div`, {
          className: `wK56V-mZ590-`,
          children: [
            (0, X.jsx)(`div`, {
              className: `ckeKG6BHXZQ-`,
              children: L(`#EventDisclaimer_preview`),
            }),
            (0, X.jsx)(le, { rgPresenters: o }),
          ],
        }),
      (0, X.jsx)(E, {
        clanSteamID: n.GetClanSteamID(),
        children: (0, X.jsx)(I, {
          onClick: () => {
            (s([]), i(!0));
          },
          children: `(VO) Clear Presenters to hide event organizers display`,
        }),
      }),
    ],
  });
}
function np(e) {
  let { presenter: t, setPresenter: n } = e,
    [r] = g(() => [Wi.Get().GetCurEditLanguage()]);
  return (0, X.jsxs)(`div`, {
    className: Vf,
    children: [
      (0, X.jsx)(N, {
        label: L(`#EventDisclaimer_name`),
        type: `text`,
        value: M.Get(t.localized_presenter_name, r) || ``,
        onChange: (e) => {
          ((t.localized_presenter_name = M.Set(
            t.localized_presenter_name,
            r,
            e.currentTarget.value,
          )),
            n(t));
        },
      }),
      (0, X.jsx)(N, {
        label: L(`#EventDisclaimer_url`),
        type: `text`,
        mustBeURL: !0,
        placeholder: `https://`,
        value: t.url,
        onChange: (e) => {
          ((t.url = e.currentTarget.value), n(t));
        },
      }),
    ],
  });
}
var rp = (function (e) {
    return (
      (e.EditInfo = `apprighteditinfo`),
      (e.Publish = `apprightpublish`),
      (e.ViewErrorData = `apprightviewerrordata`),
      (e.Download = `apprightdownload`),
      (e.UploadCDKeys = `apprightuploadcdkeys`),
      (e.GenerateCDKeys = `apprightgeneratecdkeys`),
      (e.ViewFinancials = `apprightviewfinancials`),
      (e.ManageCEG = `apprightmanageceg`),
      (e.ManagingSigning = `apprightmanagesigning`),
      (e.ManageCDKeys = `apprightmanagecdkeys`),
      (e.EditMarketing = `apprighteditmarketing`),
      (e.EconomySupport = `apprighteconomysupport`),
      (e.EconomySupportSupervisor = `apprighteconomysupportsupervisor`),
      (e.ManagePricing = `appmanagepricing`),
      (e.BroadcastLive = `apprightbroadcastlive`),
      (e.AppRightEditStoreDisplayContent = `apprighteditstoredisplaycontent`),
      (e.AppRightViewMarketingTraffic = `apprightviewmarketingtraffic`),
      e
    );
  })({}),
  ip = class e {
    static AppRights = [
      { flag: 1, token: `apprighteditinfo` },
      { flag: 2, token: `apprightpublish` },
      { flag: 4, token: `apprightviewerrordata` },
      { flag: 8, token: `apprightdownload` },
      { flag: 16, token: `apprightuploadcdkeys` },
      { flag: 32, token: `apprightgeneratecdkeys` },
      { flag: 64, token: `apprightviewfinancials` },
      { flag: 128, token: `apprightmanageceg` },
      { flag: 256, token: `apprightmanagesigning` },
      { flag: 512, token: `apprightmanagecdkeys` },
      { flag: 1024, token: `apprighteditmarketing` },
      { flag: 2048, token: `apprighteconomysupport` },
      { flag: 4096, token: `apprighteconomysupportsupervisor` },
      { flag: 8192, token: `appmanagepricing` },
      { flag: 16384, token: `apprightbroadcastlive` },
      { flag: 32768, token: `apprightviewmarketingtraffic` },
      { flag: 65536, token: `apprighteditstoredisplaycontent` },
    ];
    static MapAppRights = e.ConstructAppRightsMap();
    static ConstructAppRightsMap() {
      let t = new Map();
      return (e.AppRights.forEach((e) => t.set(e.token, e)), t);
    }
    static PubRights = [
      { flag: 1, token: `pubrightmanageusers` },
      { flag: 2, token: `pubrightactualauthority` },
      { flag: 4, token: `pubrightviewfinancials` },
      { flag: 8, token: `pubrightapprovewalletfunding` },
      { flag: 16, token: `pubrightmanagelicensedsites` },
    ];
    static MapPubRights = e.ConstructPubRightsMap();
    static ConstructPubRightsMap() {
      let t = new Map();
      return (e.PubRights.forEach((e) => t.set(e.token, e)), t);
    }
    static GetAppRightFlags(t) {
      let n = 0;
      return (
        t.forEach((t) => {
          n |= e.MapAppRights.get(t).flag;
        }),
        n
      );
    }
    static GetPublisherRightFlags(t) {
      let n = 0;
      return (
        t.forEach((t) => {
          n |= e.MapPubRights.get(t).flag;
        }),
        n
      );
    }
  };
function ap(e) {
  let { editModel: t } = e,
    [n] = g(() => [
      t.GetEventModel().jsondata.sale_named_section_background_styles,
    ]),
    [r, i, a] = Gs(),
    [o, s] = (0, Z.useState)(void 0);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(I, {
        onClick: i,
        children: L(`#Sale_ManageBackgroundStyles`),
      }),
      (0, X.jsx)(To, {
        active: r,
        children: (0, X.jsxs)(j, {
          strTitle: L(`#Sale_ManageBackgroundStyles`),
          strDescription: L(`#Sale_ManageBackgroundStyles_desc`),
          bAlertDialog: !0,
          closeModal: a,
          children: [
            (0, X.jsx)(I, {
              onClick: () => {
                let e = {};
                do
                  e.background_style_identifier =
                    `CustomBackground_` + Math.floor(1 + Math.random() * 1e5);
                while (
                  n &&
                  n.find(
                    (t) =>
                      t.background_style_identifier ==
                      e.background_style_identifier,
                  )
                );
                (n
                  ? (t.GetEventModel().jsondata.sale_named_section_background_styles =
                      [
                        ...t.GetEventModel().jsondata
                          .sale_named_section_background_styles,
                        e,
                      ])
                  : (t.GetEventModel().jsondata.sale_named_section_background_styles =
                      [e]),
                  t.SetDirty(x.jsondata_sales));
              },
              children: rs.Localize(`#Button_Create`),
            }),
            !n || n.length == 0
              ? (0, X.jsx)(`p`, {
                  children: L(`#Sale_ManageBackgroundStyles_none`),
                })
              : (0, X.jsx)(`ul`, {
                  children: n.map((e, t) =>
                    (0, X.jsx)(
                      `ol`,
                      {
                        onClick: () => s(t),
                        children: (0, X.jsx)(`p`, {
                          children: e.background_style_identifier,
                        }),
                      },
                      e.background_style_identifier,
                    ),
                  ),
                }),
            o !== void 0 &&
              (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(`hr`, {}),
                  (0, X.jsx)(W, {
                    children: L(
                      `#Sale_ManageBackgroundStyles_edit`,
                      n[o].background_style_identifier,
                    ),
                  }),
                  (0, X.jsx)(wn, {
                    editModel: t,
                    backgroundSection: n[o],
                    bHasBackgroundImageControls: !0,
                    bDisallowNamedStyles: !0,
                  }),
                ],
              }),
          ],
        }),
      }),
    ],
  });
}
function op(e) {
  let { salePage: t, updateLandingPage: r } = e,
    i = b.GetEditModel(),
    [a, o] = g(() => [
      i.GetEventModel().jsondata.sale_opt_in_page_name,
      i.GetEventModel().jsondata.sale_show_creator,
    ]);
  return (0, X.jsxs)(`div`, {
    className: ot,
    children: [
      (0, X.jsxs)(`div`, {
        className: Mn,
        children: [
          t && (0, X.jsx)(dp, {}),
          r && (0, X.jsx)(fp, {}),
          t && (0, X.jsx)(up, {}),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: $e,
        children: [
          t && (0, X.jsx)(lp, {}),
          t &&
            (0, X.jsx)(E, {
              clanSteamID: i.GetClanSteamID(),
              className: `ugkEbNZ8MZc-`,
              children: (0, X.jsx)(N, {
                type: `text`,
                label: L(`#Sale_OptInPageName`),
                tooltip: L(`#Sale_OptInPageName_ttip`),
                value: a,
                onChange: (e) => {
                  n(() => {
                    ((i.GetEventModel().jsondata.sale_opt_in_page_name =
                      e.target.value),
                      i.SetDirty(x.jsondata_sales));
                  });
                },
              }),
            }),
          t &&
            (0, X.jsx)(B, {
              toolTipContent: L(`#Sale_ShowCreatorHome_ttip`),
              direction: `top`,
              children: (0, X.jsx)(`div`, {
                className: `_6X-CA8E4ynU-`,
                children: (0, X.jsx)(z, {
                  onChange: (e) => {
                    n(() => {
                      ((i.GetEventModel().jsondata.sale_show_creator = e),
                        i.SetDirty(x.jsondata_sales));
                    });
                  },
                  label: L(`#Sale_ShowCreatorHome`),
                  checked: o,
                }),
              }),
            }),
          t &&
            (0, X.jsxs)(E, {
              clanSteamID: i.GetClanSteamID(),
              children: [
                (0, X.jsx)(cp, {}),
                (0, X.jsx)(sp, {}),
                (0, X.jsx)(B, {
                  toolTipContent: `Update what a partner is able to change after a sale page is reviewed by Valve`,
                  children: (0, X.jsx)(I, {
                    onClick: (e) =>
                      P(
                        (0, X.jsx)(Af, {
                          clanSteamID: i.GetClanSteamID(),
                          gidClanEvent: i.GetGID(),
                        }),
                        G(e),
                      ),
                    children: `Update Sale Page Editability`,
                  }),
                }),
              ],
            }),
          (0, X.jsx)(E, {
            clanSteamID: i.GetClanSteamID(),
            children: (0, X.jsx)(hr, { editModel: i }),
          }),
          (0, X.jsx)(E, {
            clanSteamID: i.GetClanSteamID(),
            children: (0, X.jsx)(ap, { editModel: i }),
          }),
        ],
      }),
    ],
  });
}
function sp(e) {
  let t = b.GetEditModel();
  return (0, X.jsx)(B, {
    toolTipContent: `Deep discount sale events are curated by Valve to promote successful older games, typically with a 90% discount`,
    direction: `top`,
    children: (0, X.jsx)(`div`, {
      className: ms,
      children: (0, X.jsx)(z, {
        onChange: (e) => t.SetTag(`vo_deep_discount_sale`, e),
        checked: t.GetEventModel().BHasTag(`vo_deep_discount_sale`),
        label: `(VO) This is a deep discount event?`,
      }),
    }),
  });
}
function cp(e) {
  let t = b.GetEditModel(),
    [r, i, a, o] = g(() => [
      t.GetEventModel().jsondata.ownership_requirement_info?.bLockedToAppOwners,
      t.GetEventModel().jsondata.ownership_requirement_info?.strRedirectURL,
      t.GetEventModel().jsondata.sale_use_subscription_layout,
      t.GetEventModel().jsondata.app_right_requirement_info
        ?.bLockedToPartnerAppRights,
    ]),
    [s, c] = Z.useState(
      t.GetEventModel().BIsLockedToGameOwners()
        ? t.GetEventModel().GetRequiredAppIDs()?.join(`,`)
        : ``,
    ),
    [l, u] = Z.useState(
      t.GetEventModel().BIsLockedToGameOwners()
        ? t.GetEventModel().GetRequiredPackageIDs()?.join(`,`)
        : ``,
    );
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(B, {
        toolTipContent: L(`#Sale_OwnershipRestrictions_ttip`),
        direction: `top`,
        children: (0, X.jsx)(`div`, {
          className: ms,
          children: (0, X.jsx)(z, {
            onChange: (e) => {
              n(() => {
                let n = t.GetEventModel().jsondata;
                (n.ownership_requirement_info
                  ? (n.ownership_requirement_info.bLockedToAppOwners = e)
                  : (n.ownership_requirement_info = {
                      bLockedToAppOwners: e,
                      rgRequiredAppIDs: [],
                      rgRequiredPackageIDs: [],
                      strRedirectURL: ``,
                    }),
                  t.SetDirty(x.jsondata_sales));
              });
            },
            label: L(`#Sale_OwnershipRestrictions`),
            checked: r,
          }),
        }),
      }),
      r &&
        (0, X.jsxs)(Z.Fragment, {
          children: [
            (0, X.jsx)(N, {
              type: `text`,
              label: L(`#Sale_RequiredApps`),
              tooltip: L(`#Sale_RequiredApps_ttip`),
              onChange: (e) => {
                s != e.target.value &&
                  (c(e.target.value),
                  n(() => {
                    let n = t.GetEventModel().GetRequiredAppIDs(),
                      r = e.target.value
                        .split(`,`)
                        .map(Number)
                        .filter((e) => e > 0);
                    (n.splice(0, n.length, ...r), t.SetDirty(x.jsondata_sales));
                  }));
              },
              value: s,
            }),
            (0, X.jsx)(N, {
              type: `text`,
              label: L(`#Sale_RequiredPackages`),
              tooltip: L(`#Sale_RequiredPackages_ttip`),
              onChange: (e) => {
                l != e.target.value &&
                  (u(e.target.value),
                  n(() => {
                    let n = t.GetEventModel().GetRequiredPackageIDs(),
                      r = e.target.value
                        .split(`,`)
                        .map(Number)
                        .filter((e) => e > 0);
                    (n.splice(0, n.length, ...r), t.SetDirty(x.jsondata_sales));
                  }));
              },
              value: l,
            }),
            (0, X.jsx)(N, {
              type: `text`,
              label: L(`#Sale_OwnershipLockRedirect`),
              tooltip: L(`#Sale_OwnershipLockRedirect_ttip`),
              onChange: (e) => {
                i != e.target.value &&
                  n(() => {
                    ((t.GetEventModel().jsondata.ownership_requirement_info.strRedirectURL =
                      e.target.value),
                      t.SetDirty(x.jsondata_sales));
                  });
              },
              value: i,
            }),
            (0, X.jsx)(E, {
              clanSteamID: t.GetClanSteamID(),
              children: (0, X.jsx)(F, {
                onChange: (e) => {
                  n(() => {
                    ((t.GetEventModel().jsondata.sale_use_subscription_layout =
                      e),
                      t.SetDirty(x.jsondata_sales));
                  });
                },
                label: `(VO) ` + L(`#Sale_UseSubscriptionLayout`),
                tooltip: L(`#Sale_UseSubscriptionLayout_ttip`),
                checked: !!a,
              }),
            }),
          ],
        }),
      (0, X.jsx)(B, {
        toolTipContent: L(`#Sale_PartnerAppEditRestrictions_ttip`),
        direction: `top`,
        children: (0, X.jsx)(`div`, {
          className: ms,
          children: (0, X.jsx)(z, {
            onChange: (e) => {
              n(() => {
                let n = t.GetEventModel().jsondata;
                (n.app_right_requirement_info
                  ? (n.app_right_requirement_info.bLockedToPartnerAppRights = e)
                  : (n.app_right_requirement_info = {
                      bLockedToPartnerAppRights: e,
                      nAppRightFlag: ip.GetAppRightFlags([rp.EditInfo]),
                    }),
                  t.SetDirty(x.jsondata_sales));
              });
            },
            label: L(`#Sale_PartnerAppEditRestrictions`),
            checked: !!o,
          }),
        }),
      }),
    ],
  });
}
function lp(e) {
  let t = b.GetEditModel(),
    n = g(() => t.GetEventModel().jsondata.sale_discount_event_id);
  return (0, X.jsxs)(E, {
    requireAdmin: !0,
    clanSteamID: t.GetClanSteamID(),
    className: jo,
    children: [
      (0, X.jsxs)(`div`, {
        className: O,
        children: [
          L(`#Sale_CreateUpdateDiscountEventTitle`),
          (0, X.jsx)(H, {
            tooltip: L(`#Sale_CreateUpdateDiscountEventTitle_ttip`),
          }),
        ],
      }),
      (0, X.jsx)(Ns, {
        onClick: async () => {
          let e = new Set(),
            n = [];
          (t.GetEventModel().jsondata.sale_sections.forEach((e) => {
            e.capsules.forEach(async (e) => {
              e.type === `bundle`
                ? n.push(Do.Get().QueueBundleRequest(Number(e.id), {}))
                : e.type === `sub` &&
                  n.push(Do.Get().QueuePackageRequest(Number(e.id), {}));
            });
          }),
            await Promise.all(n),
            t.GetEventModel().jsondata.sale_sections.forEach((t) => {
              t.capsules.forEach(async (t) => {
                if (t.type === `bundle` || t.type === `sub`) {
                  let n =
                    t.type === `bundle`
                      ? Do.Get().GetBundle(Number(t.id))
                      : Do.Get().GetPackage(Number(t.id));
                  n && n.GetIncludedAppIDs().forEach((t) => e.add(t));
                } else e.add(Number(t.id));
              });
            }));
          let r = Array.from(e);
          r.sort();
          let i = new FormData();
          (i.append(`sessionid`, ss()),
            i.append(`name`, `[AUTO] ` + t.GetName()),
            i.append(`event`, `1`),
            i.append(`type`, `discount`),
            i.append(`header`, t.GetName()),
            i.append(`appids`, r.join(`,`)),
            i.append(`start_date`, t.GetEventStartTime().toString()),
            i.append(`end_date`, t.GetEventEndTime().toString()),
            i.append(`description`, `#discount_desc_preset_special`),
            t.GetEventModel().jsondata.sale_discount_event_id &&
              i.append(
                `discount_id`,
                t.GetEventModel().jsondata.sale_discount_event_id.toString(),
              ));
          let a =
            (
              await Q.default.post(
                R.COMMUNITY_BASE_URL + `actions/ajaxcreateupdatediscountevent`,
                i,
                { withCredentials: !0 },
              )
            ).data.discountid ||
            t.GetEventModel().jsondata.sale_discount_event_id;
          (t.GetEventModel().jsondata.sale_discount_event_id ||
            (t.GetEventModel().jsondata.sale_discount_event_id = a),
            P(
              (0, X.jsx)(De, {
                editModel: t,
                bSkipChecks: !0,
                partnerEventEditorStore: b,
                OnSuccess: () => {
                  window.open(
                    R.PARTNER_BASE_URL + `admin/editdiscountevent/` + a,
                  );
                },
              }),
              window,
            ));
        },
        children: t.GetEventModel().jsondata.sale_discount_event_id
          ? L(
              `#Sale_UpdateDiscountEvent`,
              t.GetEventModel().jsondata.sale_discount_event_id,
            )
          : L(`#Sale_CreateDiscountEvent`),
      }),
      !!n &&
        (0, X.jsx)(`a`, {
          href: `${R.PARTNER_BASE_URL}admin/editdiscountevent/${n}`,
          target: `_blank`,
          children: `Edit Discount Event`,
        }),
    ],
  });
}
function up(e) {
  let t = b.GetEditModel(),
    [r, i, a, o, s] = g(() => {
      let e = t.GetEventModel().jsondata;
      return [
        e.sale_section_disable_capitalize,
        e.sale_section_font_size,
        e.sale_font,
        e.sale_font_weight,
        e.sale_associated_advertising_appid,
      ];
    }),
    c = [
      { label: `Default`, data: { fontFamily: `` } },
      {
        label: `Default, Bold`,
        data: {
          fontFamily: `'Motiva Sans', 'Play', sans-serif`,
          fontWeight: `bold`,
        },
      },
      {
        label: `Jolly Lodger (Halloween)`,
        data: {
          fontFamily: `'Jolly Lodger', 'New Rocker', 'Chonburi', 'Motiva Sans'`,
        },
      },
      { label: `Sigmar One`, data: { fontFamily: `'Sigmar One', sans-serif` } },
    ].map((e) => ({
      ...e,
      label: (0, X.jsx)(`div`, { style: { ...e.data }, children: e.label }),
    })),
    l = c.find((e) => e.data.fontFamily == a && e.data.fontWeight == o),
    u = l && l.data;
  return (0, X.jsxs)(E, {
    requireAdmin: !0,
    clanSteamID: t.GetClanSteamID(),
    children: [
      (0, X.jsx)(Zs, {
        label: L(`#Sale_SaleFont`),
        tooltip: L(`#Sale_SaleFont_ttip`),
        strDropDownClassName: eo,
        rgOptions: c,
        selectedOption: u,
        onChange: (e) => {
          n(() => {
            ((t.GetEventModel().jsondata.sale_font = e.data.fontFamily),
              (t.GetEventModel().jsondata.sale_font_weight = e.data.fontWeight),
              t.SetDirty(x.jsondata_sales));
          });
        },
        contextMenuPositionOptions: { bDisablePopTop: !0 },
      }),
      (0, X.jsx)(N, {
        type: `text`,
        label: L(`#Sale_SectionTitleFontSize`),
        tooltip: L(`#Sale_SectionTitleFontSize_ttip`),
        onChange: (e) => {
          n(() => {
            ((t.GetEventModel().jsondata.sale_section_font_size = Number(
              e.target.value,
            )),
              t.SetDirty(x.jsondata_sales));
          });
        },
        value: i,
      }),
      (0, X.jsx)(F, {
        label: L(`#Sale_DontCapitalizeSectionTitles`),
        tooltip: L(`#Sale_DontCapitalizeSectionTitles_ttip`),
        onChange: (e) => {
          n(() => {
            ((t.GetEventModel().jsondata.sale_section_disable_capitalize = e),
              t.SetDirty(x.jsondata_sales));
          });
        },
        checked: r,
      }),
      (0, X.jsx)(N, {
        type: `number`,
        label: L(`#Sale_AdvertisingApp_ID`),
        tooltip: L(`#Sale_AdvertisingApp_ID_ttip`),
        onChange: (e) => {
          n(() => {
            ((t.GetEventModel().jsondata.sale_associated_advertising_appid =
              Number(e.target.value)),
              t.SetDirty(x.jsondata_sales));
          });
        },
        value: s,
      }),
    ],
  });
}
function dp(e) {
  let t = b.GetEditModel(),
    { bAllowChangingVanityURL: r, bAllowMakingChangesToSalePage: i } = en(
      t.GetClanAccountID(),
      t.GetGID(),
    ),
    [a, o, s] = g(() => [
      t.GetEventModel().jsondata.sale_vanity_id,
      t.GetEventModel().jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
      t.GetEventModel().jsondata.bAutoUpdateVanityURLForContentHub,
    ]),
    { creatorHome: c } = ri(t.GetClanAccountID()),
    l = null;
  return (
    a && !o
      ? (l = c
          ? c.GetCreatorHomeURL(`publisher`) + `sale/` + a
          : `${R.STORE_BASE_URL}curator/${t.GetClanAccountID()}/sale/${a}`)
      : a && o && (l = R.STORE_BASE_URL + `sale/` + a),
    (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(N, {
          type: `text`,
          label: L(`#Sale_VanityID`),
          tooltip: L(`#Sale_VanityID_ttip`),
          onChange: (e) => t.SetSaleVanityID(e.target.value),
          value: a,
          disabled: s || !r || !i,
        }),
        t.GetEventModel().jsondata.bAutoUpdateVanityURLForContentHub &&
          (0, X.jsx)(`div`, {
            className: `LongURL Note`,
            children: `The vanity URL for this sale page is automatically set based on its content hub configuration. Adjust the settings under Content Hub Settings to change this behavior.`,
          }),
        l
          ? (0, X.jsxs)(`div`, {
              children: [
                (0, X.jsx)(`span`, {
                  className: `DialogLabel`,
                  children: L(`#Sale_VanityID_Link`),
                }),
                (0, X.jsx)(`br`, {}),
                (0, X.jsx)(`a`, {
                  href: l,
                  className: `LongURL`,
                  target: R.IN_CLIENT ? `` : `_blank`,
                  children: l,
                }),
              ],
            })
          : (0, X.jsx)(`div`, {
              className: Qi,
              children: L(`#EventEditor_SaleNotReady_SaleVanity_ttip`),
            }),
        (0, X.jsx)(E, {
          requireAdmin: !0,
          clanSteamID: t.GetClanSteamID(),
          children: (0, X.jsx)(F, {
            label: L(`#Sale_ValveTopSalePath`),
            tooltip: L(`#Sale_ValveTopSalePath_ttip`),
            onChange: (e) => {
              n(() => {
                ((t.GetEventModel().jsondata.sale_vanity_id_valve_approved_for_sale_subpath =
                  e),
                  t.SetDirty(x.jsondata_sales));
              });
            },
            checked: o,
          }),
        }),
      ],
    })
  );
}
function fp(e) {
  let t = b.GetEditModel(),
    n = g(() => t.GetEventModel().jsondata.sale_update_landing_page_vanity_id),
    [r, i] = ii(t.GetClanAccountID()),
    [a] = aa(i.appid, { include_basic_info: !0 });
  if (r || !a) return;
  let o = n?.length ? a.GetStorePageURL() + `/` + n : void 0;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(N, {
        type: `text`,
        label: L(`#Sale_VanityID`),
        tooltip: L(`#Sale_VanityID_ttip`),
        onChange: (e) => t.SetSaleUpdateLandingPageVanityID(e.target.value),
        value: n,
      }),
      o
        ? (0, X.jsxs)(`div`, {
            children: [
              (0, X.jsx)(`span`, {
                className: `DialogLabel`,
                children: L(`#Sale_VanityID_Link`),
              }),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`a`, {
                href: o,
                className: `LongURL`,
                target: R.IN_CLIENT ? `` : `_blank`,
                children: o,
              }),
            ],
          })
        : (0, X.jsx)(`div`, {
            className: Qi,
            children: L(`#EventEditor_SaleNotReady_UpdateLandingPage_ttip`),
          }),
    ],
  });
}
function pp(e) {
  let {
      strSectionId: t,
      hasMinimize: n,
      strTitle: r,
      children: i,
      strToolTip: a,
      valveOnly: o,
      valveOnlyClanSteamID: s,
      requireAdmin: c,
      dataToCopy: l,
    } = e,
    u = g(() => n && yn(t)),
    d = ua(s, c);
  if (s && !d) return null;
  let f = n
    ? (e) => {
        (On(t), e.preventDefault(), e.stopPropagation());
      }
    : void 0;
  return (0, X.jsx)(kc, {
    strSectionId: t,
    children: (0, X.jsxs)(`div`, {
      id: t,
      className: Y({ [xt]: !0, [mr]: o || !!s }),
      children: [
        (0, X.jsxs)(`div`, {
          className: Y(Ht, n && `lhCOGpxKsVw-`),
          onClick: f,
          children: [
            r,
            a && (0, X.jsx)(H, { tooltip: a }),
            !!l &&
              (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(St, { dataToCopy: on.k_EventData_SubMenu }),
                  (0, X.jsx)(rn, { dataToPaste: on.k_EventData_SubMenu }),
                ],
              }),
            n &&
              (0, X.jsx)(ec, {
                bIsMinimized: u,
                fnToggleMinimize: () => On(t),
              }),
          ],
        }),
        !u && i,
      ],
    }),
  });
}
var mp = `rxVTSdkm1jI-`,
  hp = `RfGnXsFXQtE-`,
  gp = `XdD9QmViKvQ-`,
  _p = `key8hGiJm88-`;
function vp(e) {
  let { editModel: t } = e,
    [n, r, i] = g(() => [
      t.GetEventModel().BIsNextFest(),
      t.GetEventModel().jsondata.sale_ml_recommender_delay_hours,
      t.GetEventModel().jsondata.sale_ml_recommender_weight_exponent,
    ]);
  return n
    ? (0, X.jsxs)(`div`, {
        className: xt,
        children: [
          (0, X.jsx)(`div`, { className: Ht, children: `Next Fest` }),
          `For the Live Next Fest event make sure to clone, review and operate the Next Fest event using:`,
          (0, X.jsx)(`a`, {
            target: `_blank`,
            href: `https://confluence.valve.org/display/SteamBiz/Next+Fest+Launch+Checklist`,
            children: ` Operations Checklist`,
          }),
          (0, X.jsxs)(`div`, {
            className: mp,
            children: [
              (0, X.jsx)(yp, {
                editModel: t,
                fnPredicate: (e) =>
                  !(e.jsondata.sale_ml_recommender_delay_hours > 0),
                fnFixIt: (e) =>
                  (e.jsondata.sale_ml_recommender_delay_hours = 48),
                fixItText: `Set to 48 hours`,
                children: () =>
                  (0, X.jsx)(`span`, {
                    children: `Next Fest should have ML Recommender Delay set.`,
                  }),
              }),
              (0, X.jsx)(bp, {
                editModel: t,
                fnPredicate: (e) => Fr(e.section_type) && !e.show_as_demos,
                fnFixIt: (e) => (e.show_as_demos = !0),
                children: (e) =>
                  (0, X.jsxs)(`span`, {
                    children: [
                      `There are `,
                      e,
                      ` that don't have the "Show demo information" checkbox checked.`,
                    ],
                  }),
              }),
              (0, X.jsx)(bp, {
                editModel: t,
                fnPredicate: (e) =>
                  Fr(e.section_type) && !e.prefer_demo_store_page,
                fnFixIt: (e) => (e.prefer_demo_store_page = !0),
                children: (e) =>
                  (0, X.jsxs)(`span`, {
                    children: [
                      `There are `,
                      e,
                      ` that don't have the "Prefer demo standalone store pages" checkbox checked.`,
                    ],
                  }),
              }),
            ],
          }),
          (0, X.jsx)(`br`, {}),
          (0, X.jsx)(N, {
            type: `number`,
            mustBeNumeric: !0,
            rangeMin: 0,
            label: `Randomization delay (hours)`,
            tooltip: `The number of hours from the start of Next Fest to show the items in random order instead of ML recommended order`,
            onChange: (e) => {
              ((t.GetEventModel().jsondata.sale_ml_recommender_delay_hours =
                Number(e.target.value)),
                t.SetDirty(x.jsondata_sales));
            },
            placeholder: `10000`,
            value: r,
          }),
          (0, X.jsx)(N, {
            type: `number`,
            mustBeNumeric: !0,
            rangeMin: -1,
            label: `Recommendation weight exponent`,
            tooltip:
              `After the randomization delay, items are shuffled weighted by their ML recommended rank. Higher values keep the top recommendations closer to the front. Leave empty or 0 to use the default of ` +
              br +
              `. Set to -1 to disable shuffling and use the exact recommended order.`,
            onChange: (e) => {
              ((t.GetEventModel().jsondata.sale_ml_recommender_weight_exponent =
                Number(e.target.value)),
                t.SetDirty(x.jsondata_sales));
            },
            placeholder: String(br),
            value: i,
          }),
        ],
      })
    : null;
}
var yp = r((e) => {
    let {
      editModel: t,
      fnPredicate: n,
      fnFixIt: r,
      fixItText: i,
      children: a,
    } = e;
    if (!n?.(t.GetEventModel())) return null;
    let o = () => {
      (r(t.GetEventModel()), t.SetDirty(x.jsondata_sales));
    };
    return (0, X.jsxs)(`div`, {
      className: hp,
      children: [
        a(),
        (0, X.jsx)(`div`, {
          className: gp,
          children:
            r && (0, X.jsx)(I, { onClick: () => o(), children: i || `Fix it` }),
        }),
      ],
    });
  }),
  bp = r((e) => {
    let {
        editModel: t,
        fnPredicate: n,
        fnFixIt: r,
        fixItText: i,
        children: a,
      } = e,
      o = t.GetSaleSections().filter(n);
    if (o.length == 0) return null;
    let s = (0, X.jsx)(X.Fragment, {
        children: o
          .slice(0, 25)
          .map((e, n) =>
            (0, X.jsx)(
              `div`,
              {
                children: (0, X.jsx)(tn, {
                  eventModel: t.GetEventModel(),
                  saleSection: e,
                  editLanguage: t.GetCurEditLanguage(),
                  index: n,
                }),
              },
              e.unique_id,
            ),
          )
          .concat(
            o.length > 25
              ? [(0, X.jsx)(`div`, { children: `...` }, `elipses`)]
              : [],
          ),
      }),
      c = (0, X.jsx)(xs, {
        toolTipContent: s,
        children: (0, X.jsxs)(`span`, {
          className: _p,
          children: [o.length, ` sections`],
        }),
      }),
      l = () => {
        (o.forEach(r), t.SetDirty(x.jsondata_sales));
      };
    return (0, X.jsxs)(`div`, {
      className: hp,
      children: [
        a(c),
        (0, X.jsx)(`div`, {
          className: gp,
          children:
            r && (0, X.jsx)(I, { onClick: () => l(), children: i ?? `Fix it` }),
        }),
      ],
    });
  }),
  xp = r((e) => {
    let { editModel: t, fnOnOKCallback: r } = e,
      i = t.GetEventModel(),
      {
        fnSetStorePublishingRequiresValveApproval: a,
        fnSetUserWhoEnabledSalePage: o,
      } = Gn(t.GetClanAccountID(), t.GetGID()),
      [s, c] = Z.useState(i.jsondata.sale_vanity_id ?? ``),
      [l] = Z.useState(new Oo()),
      u =
        !_s.is_support &&
        !ai.GetCreatorHome(t.GetClanSteamID())?.BHasClanAccountFlagSet(64),
      d = Math.floor(Date.now() / 1e3),
      f = new Date();
    (f.setHours(10), f.setMinutes(0), f.setSeconds(0));
    let p = new Date();
    (p.setDate(f.getDate() + 1),
      p.setHours(10),
      p.setMinutes(0),
      p.setSeconds(0));
    let [m, h] = Z.useState(
        i.startTime > d ? i.startTime : Math.floor(p.getTime() / 1e3),
      ),
      g = new Date();
    (g.setDate(p.getDate() + 1),
      g.setHours(10),
      g.setMinutes(0),
      g.setSeconds(0));
    let [_, v] = Z.useState(
        i?.endTime > Math.floor(g.getTime() / 1e3)
          ? i.endTime
          : Math.floor(g.getTime() / 1e3),
      ),
      ee = () => {
        (n(() => {
          (t.SetSaleVanityID(s),
            t.SetEventStartTime(m),
            t.SetEventEndTime(_),
            o(_s.accountid),
            u && a(!0),
            l.Dispatch(),
            r());
        }),
          e.closeModal && e.closeModal());
      },
      te = () => {
        (n(() => {
          ((t.GetEventModel().jsondata.bSaleEnabled = !1),
            t.SetDirty(x.jsondata_sales));
        }),
          e.closeModal && e.closeModal());
      },
      ne = s.replace(/[^\w-]/g, ``).length > 0 && m && _;
    return (0, X.jsx)(J, {
      children: (0, X.jsx)(Lo, {
        onEscKeypress: te,
        children: (0, X.jsxs)(ns, {
          children: [
            (0, X.jsx)(Ws, { children: L(`#Sale_EnableTitle`) }),
            (0, X.jsx)(bo, {
              children: (0, X.jsx)(_o, {
                children: (0, X.jsxs)(`div`, {
                  className: Dt,
                  children: [
                    (0, X.jsx)(`span`, { children: L(`#Sale_EnableDesc`) }),
                    (0, X.jsxs)(`ol`, {
                      children: [
                        (0, X.jsx)(`li`, { children: L(`#Sale_EnableDesc_1`) }),
                        (0, X.jsx)(`li`, { children: L(`#Sale_EnableDesc_2`) }),
                      ],
                    }),
                    (0, X.jsx)(`br`, {}),
                    (0, X.jsx)(N, {
                      type: `text`,
                      label: L(`#Sale_VanityID`),
                      tooltip: L(`#Sale_VanityID_ttip`),
                      onChange: (e) => c(e.target.value),
                      value: s,
                    }),
                    (0, X.jsx)(In, {
                      strDescription: L(`#Sale_New_Start`),
                      nEarliestTime: 0,
                      fnGetTimeToUpdate: () => m,
                      fnSetTimeToUpdate: h,
                      fnIsValidDateTime: () => !0,
                      bShowTimeZone: !0,
                    }),
                    (0, X.jsx)(In, {
                      strDescription: L(`#Sale_New_End`),
                      nEarliestTime: 0,
                      fnGetTimeToUpdate: () => _,
                      fnSetTimeToUpdate: v,
                      fnIsValidDateTime: () => _ > m,
                      bShowTimeZone: !0,
                    }),
                    (0, X.jsx)(E, {
                      clanSteamID: t.GetClanSteamID(),
                      requireAdmin: !0,
                      children: (0, X.jsx)(wf, {
                        clanSteamID: t.GetClanSteamID(),
                        gidClanEvent: t.GetGID(),
                        fnOkCallbackList: l,
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, X.jsx)(Ra, {
              children: (0, X.jsx)(ws, {
                onCancel: te,
                bOKDisabled: !ne,
                onOK: ee,
              }),
            }),
          ],
        }),
      }),
    });
  }),
  Sp = r((e) => {
    let { editModel: t, fnOnOKCallback: r } = e,
      i = t.GetEventModel(),
      [a, o] = Z.useState(i.jsondata.sale_update_landing_page_vanity_id ?? ``),
      s = () => {
        (n(() => {
          (t.SetSaleUpdateLandingPageVanityID(a), r());
        }),
          e.closeModal && e.closeModal());
      },
      c = () => {
        (n(() => {
          ((t.GetEventModel().jsondata.bSaleEnabled = !1),
            t.SetDirty(x.jsondata_sales));
        }),
          e.closeModal && e.closeModal());
      },
      l = a.replace(/[^\w-]/g, ``).length > 0;
    return (0, X.jsx)(J, {
      children: (0, X.jsx)(Lo, {
        onEscKeypress: c,
        children: (0, X.jsxs)(ns, {
          children: [
            (0, X.jsx)(Ws, {
              children: L(`#Sale_UpdateLandingPage_EnableTitle`),
            }),
            (0, X.jsx)(bo, {
              children: (0, X.jsx)(_o, {
                children: (0, X.jsxs)(`div`, {
                  children: [
                    (0, X.jsx)(`span`, {
                      children: L(`#Sale_UpdateLandingPage_EnableDesc`),
                    }),
                    (0, X.jsx)(`br`, {}),
                    (0, X.jsx)(`br`, {}),
                    (0, X.jsx)(N, {
                      type: `text`,
                      label: L(`#Sale_UpdateLandingPageVanityID`),
                      tooltip: L(`#Sale_UpdateLandingPageVanityID_ttip`),
                      onChange: (e) => o(e.target.value),
                      value: a,
                    }),
                  ],
                }),
              }),
            }),
            (0, X.jsx)(Ra, {
              children: (0, X.jsx)(ws, {
                onCancel: c,
                bOKDisabled: !l,
                onOK: s,
              }),
            }),
          ],
        }),
      }),
    });
  });
function Cp(e) {
  let { mode: t } = e,
    r = b.GetEditModel(),
    [i, a] = Z.useState(r.BHasSaleEnabled()),
    { creatorHome: o } = ri(r.GetEventModel().clanSteamID.GetAccountID()),
    s = Z.useRef(void 0),
    c = (e) => {
      (a(e),
        s?.current?.setState({ checked: e }),
        n(() => {
          ((r.GetEventModel().jsondata.bSaleEnabled = e),
            r.SetDirty(x.jsondata_sales));
        }));
    },
    l = ua(r.GetClanSteamID(), !0),
    u =
      !r.BIsSourceEventSaleEnabled() &&
      t != 2 &&
      (!o || !o.BHasClanAccountFlagSet(32)) &&
      !l,
    d = t != 2;
  return (0, X.jsxs)(`div`, {
    className: ms,
    children: [
      (0, X.jsx)(z, {
        ref: s,
        onChange: (e) => {
          e && d
            ? (s?.current?.setState({ checked: !1 }),
              a(!1),
              P(
                t == 1
                  ? (0, X.jsx)(Sp, {
                      editModel: r,
                      fnOnOKCallback: () => c(!0),
                    })
                  : (0, X.jsx)(xp, {
                      editModel: r,
                      fnOnOKCallback: () => c(!0),
                    }),
                window,
              ))
            : c(e);
        },
        label: L(t == 1 ? `#Sale_option_updatelandingpage` : `#Sale_option`),
        disabled: u,
        checked: i,
      }),
      u &&
        (0, X.jsx)(`div`, {
          className: `gtudVzPP4AY-`,
          children: L(`#Sale_Enable_Warning`),
        }),
    ],
  });
}
var wp = `kHFY03qXeCA-`;
function Tp(e) {
  let t = () => e.closeModal && e.closeModal(),
    [n, r] = (0, Z.useState)(!1),
    [i, a] = (0, Z.useState)(null),
    [o, s] = (0, Z.useState)(null),
    [c, l] = (0, Z.useState)(null),
    [u, d] = (0, Z.useState)(!1);
  return (
    (0, Z.useEffect)(() => {
      let e = Q.default.CancelToken.source();
      return (
        Ep().then(() => {
          e.token.reason || r(!0);
        }),
        () => e.cancel(`SaleEventExplorerDialog: unmounting`)
      );
    }, []),
    (0, X.jsx)(J, {
      children: (0, X.jsx)(Lo, {
        onEscKeypress: t,
        children: (0, X.jsxs)(ns, {
          children: [
            (0, X.jsx)(Ws, { children: L(`#Sale_Debug_Title`) }),
            (0, X.jsx)(bo, {
              children: (0, X.jsx)(_o, {
                children: n
                  ? (0, X.jsxs)(`div`, {
                      children: [
                        (0, X.jsx)(`div`, { children: L(`#Sale_Debug_Desc`) }),
                        (0, X.jsx)(Op, {
                          fnSetSaleItem: (e, t, n, r) => {
                            (a(e), s(t), l(n), d(r));
                          },
                        }),
                        i
                          ? (0, X.jsx)(Ap, {
                              saleCapsule: i,
                              list: o,
                              tabList: c,
                              bInLinkedItems: u,
                            })
                          : (0, X.jsx)(`div`, {
                              children: L(`#Sale_Debug_NoMatchingItem`),
                            }),
                      ],
                    })
                  : (0, X.jsx)(C, {
                      string: L(`#Sale_Debug_Loading`),
                      size: `medium`,
                    }),
              }),
            }),
            (0, X.jsx)(Ra, {
              children: (0, X.jsx)(ws, {
                onCancel: t,
                bOKDisabled: !i,
                strOKText: L(`#Button_Delete`),
                onOK: () => {
                  P(
                    (0, X.jsx)(j, {
                      strTitle: L(`#EventEditor_GenericAreYouSure`),
                      strDescription: L(`#Sale_Debug_Delete`),
                      onOK: () => {
                        (jp(i), t());
                      },
                    }),
                    window,
                  );
                },
              }),
            }),
          ],
        }),
      }),
    })
  );
}
async function Ep() {
  let e = b.GetEditModel();
  await Do.Get().HintLoadStoreItems(
    Array.from(e.GetAllSalePageFeaturedItems(`apps`)),
    Array.from(e.GetAllSalePageFeaturedItems(`packages`)),
    Array.from(e.GetAllSalePageFeaturedItems(`bundles`)),
    null,
    null,
    null,
    { include_assets: !0 },
  );
}
function Dp(e, t = ``) {
  return Do.Get().GetStoreItem(e.id, Va(e.type))?.GetName() || t;
}
function Op(e) {
  let { fnSetSaleItem: t } = e,
    n = (0, Z.useRef)(null),
    r = (0, Z.useRef)(null),
    i = (0, Z.useRef)(0),
    a = (0, Z.useRef)(void 0);
  (0, Z.useEffect)(() => () => window.clearTimeout(i.current), []);
  let o = (0, Z.useCallback)(
    async (e) => {
      let o = e.target.value;
      o &&
        o.trim().length != 0 &&
        ((o = o.toLocaleLowerCase()),
        window.clearTimeout(i.current),
        n.current && n.current(`SearchForCurator: new request`),
        (i.current = window.setTimeout(async () => {
          let e = b.GetEditModel(),
            n = Number.parseInt(o.trim()),
            i = [];
          if (e.GetEventModel().BHasSaleEnabled()) {
            let s = (e) => e.id == n || Dp(e).toLowerCase().indexOf(o) >= 0,
              c = (e) => {
                i.findIndex((t) => t.id == e.id && t.type == e.type) < 0 &&
                  i.push(e);
              };
            e.GetEventModel().jsondata.sale_sections.forEach((e) => {
              e.capsules && e.capsules.filter(s).forEach(c);
            });
            let l = e.GetTabSaleSection();
            (l &&
              l.tabs.forEach((e) => {
                e.capsules && e.capsules.filter(s).forEach(c);
              }),
              (r.current = Jo(
                (0, X.jsx)(kp, {
                  list: i,
                  fnChooseCapsule: (n) => {
                    let r = (e) => n.id == e.id && n.type == e.type,
                      i = [];
                    e.GetEventModel().jsondata.sale_sections.forEach((e) => {
                      e.capsules?.filter(r).length > 0 && i.push(e);
                    });
                    let a = [];
                    l &&
                      l.tabs?.forEach((e) => {
                        e.capsules.filter(r).length > 0 && a.push(e);
                      });
                    let o =
                      e
                        .GetEventModel()
                        .jsondata.tagged_items?.findIndex(
                          (e) => e && r(e?.capsule),
                        ) >= 0;
                    t(n, i, a, o);
                  },
                }),
                a.current.element,
                {
                  bOverlapHorizontal: !0,
                  bMatchWidth: !0,
                  bFitToWindow: !0,
                  bDisablePopTop: !0,
                  bNoFocusWhenShown: !0,
                  bSkipFocusWhenReady: !0,
                },
              )));
          }
        }, 300)));
    },
    [t],
  );
  return (0, X.jsx)(N, {
    type: `text`,
    placeholder: L(`#Sale_Debug_Placeholder`),
    tooltip: L(`#Sale_Debug_InputToolTip`),
    onChange: o,
    onBlur: () => {
      setTimeout(() => r.current && r.current.Hide(), 200);
    },
    ref: a,
  });
}
function kp(e) {
  let { list: t, fnChooseCapsule: n } = e;
  return (0, X.jsx)(so, {
    className: wp,
    children: t.map((e) =>
      (0, X.jsx)(
        So,
        {
          onSelected: () => n(e),
          children: (0, X.jsx)(`div`, {
            children: L(
              `#Sale_Debug_ContextItem`,
              Dp(e, L(`#Sale_Debug_Unknown`)),
              e.type,
            ),
          }),
        },
        `sale_` + e.id + `_tpe_` + e.type,
      ),
    ),
  });
}
function Ap(e) {
  let { saleCapsule: t, list: n, tabList: r, bInLinkedItems: i } = e,
    a = b.GetEditModel(),
    o = a.GetCurEditLanguage();
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(`div`, {
        children: L(
          `#Sale_Debug_MatchItem`,
          Dp(t, L(`#Sale_Debug_Unknown`)),
          t.type,
        ),
      }),
      (0, X.jsx)(`div`, { children: L(`#Sale_Debug_AppearsIn`) }),
      (0, X.jsx)(`ol`, {
        children:
          n && n.length > 0
            ? n.map((e) =>
                (0, X.jsx)(
                  `li`,
                  {
                    children: (0, X.jsx)(tn, {
                      saleSection: e,
                      editLanguage: o,
                      eventModel: a.GetEventModel(),
                      index: a.GetSaleSectionIndexByID(e.unique_id, !0),
                    }),
                  },
                  e.unique_id,
                ),
              )
            : L(`#Sale_Debug_NoMatchingItem`),
      }),
      (0, X.jsx)(`div`, { children: L(`#Sale_Debug_Tab_AppearsIn`) }),
      (0, X.jsx)(`ol`, {
        children:
          r && r.length > 0
            ? r.map((e) =>
                (0, X.jsx)(`li`, { children: Ot(e, o) }, e.unique_id),
              )
            : L(`#Sale_Debug_NoMatchingItem`),
      }),
      (0, X.jsx)(`div`, {
        children: L(
          i ? `#Sale_Debug_LinkedSection` : `#Sale_Debug_Not_LinkedSection`,
        ),
      }),
    ],
  });
}
function jp(e) {
  if (!e) return;
  let t = b.GetEditModel();
  n(() => {
    let n = 0,
      r = (t) => {
        let r = t.capsules.findIndex((t) => t.id == e.id && t.type == e.type);
        for (; r >= 0;)
          (t.capsules.splice(r, 1),
            (n += 1),
            (r = t.capsules.findIndex(
              (t) => t.id == e.id && t.type == e.type,
            )));
      };
    t.GetEventModel().jsondata.sale_sections.forEach(r);
    let i = t.GetTabSaleSection();
    (i && i.tabs.forEach(r), n && t.SetDirty(x.jsondata_sales));
  });
}
function Mp(e) {
  return `${e.type}:${e.id}`;
}
function Np(e) {
  let t = e.split(`:`);
  return { type: t[0], id: parseInt(t[1]) };
}
function Pp() {
  let e = [],
    t = new Map(),
    n = b.GetEditModel();
  return (
    n.GetTabSaleSection()?.tabs?.forEach((n) => {
      let r = {
        type: `tab`,
        unique_id: n.unique_id,
        strLabel: L(n.localized_label?.[0] || n.default_label),
      };
      (e.push(r),
        n.capsules.forEach((e) => {
          let r = Mp(e);
          (t.has(r) || t.set(r, new Set()), t.get(r).add(n.unique_id));
        }));
    }),
    n.GetEventModel().jsondata.sale_sections?.forEach((r) => {
      if (r.section_type != `items`) return;
      let i = {
        type: `section`,
        unique_id: r.unique_id,
        strLabel: L(
          Qn(r, n.GetEventModel(), 1) ||
            r.localized_label[0] ||
            r.default_label,
        ),
      };
      (e.push(i),
        r.capsules.forEach((e) => {
          let n = Mp(e);
          (t.has(n) || t.set(n, new Set()), t.get(n).add(r.unique_id));
        }));
    }),
    { mapItemLocations: t, rgSections: e }
  );
}
function Fp(e) {
  let [t, n] = (0, Z.useState)(!1),
    [r, i] = (0, Z.useState)(null),
    a = () => e.closeModal && e.closeModal();
  (0, Z.useEffect)(() => {
    let e = Q.default.CancelToken.source();
    return (
      Ep().then(() => {
        e.token.reason || n(!0);
      }),
      i(Pp()),
      () => e.cancel(`SaleEventItemLocationCSVDownloadDialog: unmounting`)
    );
  }, []);
  let o = null;
  if (r) {
    let e = r.rgSections.filter((e) => e.type == `tab`).length,
      t = r.rgSections.length - e,
      n = r.mapItemLocations.size;
    o = L(`#Sale_GameExport_ContentSummary`, e, t, n);
  }
  return (0, X.jsx)(J, {
    children: (0, X.jsx)(Lo, {
      onEscKeypress: a,
      children: (0, X.jsxs)(ns, {
        children: [
          (0, X.jsx)(Ws, { children: L(`#Sale_GameExport_Title`) }),
          (0, X.jsxs)(bo, {
            children: [
              (0, X.jsxs)(_o, {
                children: [
                  (0, X.jsx)(`div`, { children: L(`#Sale_GameExport_Desc`) }),
                  (0, X.jsx)(`br`, {}),
                  t
                    ? o
                    : (0, X.jsx)(C, {
                        position: `center`,
                        string: L(`#Sale_Debug_Loading`),
                        size: `medium`,
                      }),
                  (0, X.jsx)(I, {
                    onClick: () => {
                      let { mapItemLocations: e, rgSections: t } = r,
                        n = [];
                      for (let t of Array.from(e.keys())) {
                        let e = Np(t),
                          r;
                        try {
                          r = Do.Get()
                            .GetStoreItem(e.id, Va(e.type))
                            ?.GetName();
                        } catch {}
                        n.push([`${e.type}: ${r || e.id}`, t]);
                      }
                      n.sort();
                      let i = [],
                        o = [`Item`, `AppID`, `Count`];
                      for (let e of t) o.push(`${e.strLabel} (${e.type})`);
                      i.push(o);
                      for (let [r, a] of n) {
                        let n = e.get(a),
                          o = [r, Np(a).id.toString(), n.size.toString()];
                        for (let e of t) o.push(n.has(e.unique_id) ? `1` : ` `);
                        i.push(o);
                      }
                      let s = `item_locations.csv`;
                      (ma.WriteCSVToFile(i, s),
                        ho(
                          (0, X.jsx)(j, {
                            strTitle: L(`#Sale_GameExport_Title`),
                            bAlertDialog: !0,
                            strDescription: L(
                              `#Sale_GameExport_FileExported`,
                              s,
                            ),
                          }),
                          window,
                        ),
                        a());
                    },
                    disabled: !t,
                    children: L(`#Sale_Export`),
                  }),
                ],
              }),
              (0, X.jsx)(E, {
                clanSteamID: b.GetEditModel().GetClanSteamID(),
                children: (0, X.jsxs)(_o, {
                  children: [
                    (0, X.jsx)(`div`, {
                      children: L(`#Sale_GameExport_Desc2`),
                    }),
                    (0, X.jsx)(I, {
                      onClick: () => {
                        let { mapItemLocations: e } = r,
                          t = [];
                        t.push([
                          `Type`,
                          `ID`,
                          `Name`,
                          `Dev`,
                          `Pub`,
                          `Franchise`,
                        ]);
                        let n = [];
                        for (let t of Array.from(e.keys())) {
                          let e = Np(t);
                          try {
                            let t = Do.Get().GetStoreItem(e.id, Va(e.type));
                            n.push([e.type, t.GetName() || e.id.toString(), t]);
                          } catch {}
                        }
                        n.sort();
                        for (let [e, r, i] of n) {
                          let n = i.GetDeveloperNames().join(`,`),
                            a = i.GetPublisherNames().join(`,`),
                            o = i.GetFranchiseNames().join(`,`),
                            s = [
                              e.toString(),
                              i.GetID().toString(),
                              r,
                              n,
                              a,
                              o,
                            ];
                          t.push(s);
                        }
                        let i = `item_pubs.csv`;
                        (ma.WriteCSVToFile(t, i),
                          ho(
                            (0, X.jsx)(j, {
                              strTitle: L(`#Sale_GameExport_Title`),
                              bAlertDialog: !0,
                              strDescription: L(
                                `#Sale_GameExport_FileExported`,
                                i,
                              ),
                            }),
                            window,
                          ),
                          a());
                      },
                      disabled: !t,
                      children: L(`#Sale_Export`),
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, X.jsx)(Ra, {
            children: (0, X.jsx)(Ns, {
              onClick: a,
              children: L(`#Button_Close`),
            }),
          }),
        ],
      }),
    }),
  });
}
var Ip = `u4aLOwrPfus-`,
  Lp = `N1ODTGuuk-8-`,
  Rp = `e43HuEMqi7A-`,
  zp = `W9NfaK1HBQc-`,
  Bp = `_2fPV7BA5bHE-`,
  Vp = `hH3-hWAYgpQ-`;
function Hp(e) {
  let { editModel: t } = e,
    n = t.GetEventModel(),
    r = Ei(n, T.k_eStoreSalePage, `forceAbsolute`),
    i = Ei(n, T.k_eStoreHardwarePreview, `forceAbsolute`),
    a = ua(t.GetClanSteamID(), !0) && Ci(n),
    o = [
      {
        label: L(`#Sale_Debug_LivePreview_Device_Desktop`),
        data: `desktop`,
        size: { width: 1500, height: 1100 },
      },
      {
        label: L(`#Sale_Debug_LivePreview_Device_Mobile`),
        data: `mobile`,
        size: { width: 402, height: 874 },
      },
      {
        label: L(`#Sale_Debug_LivePreview_Device_SteamDeck`),
        data: `steamdeck`,
        size: { width: 852, height: 532 },
        queryParams: [{ key: `force_gamepad_client_view`, value: `1` }],
      },
      {
        label: L(`#Sale_Debug_LivePreview_Device_NewTab`),
        tooltip: L(`#Sale_Debug_LivePreview_Device_NewTab_ttip`),
        data: `window`,
        newWindow: !0,
      },
    ];
  a &&
    o.push({
      label: `(VO) Pre-launch hardware page`,
      tooltip: `Valve admins on dev and beta only.`,
      data: `hardwarepreview`,
      size: { width: 1500, height: 1100 },
      url: i,
    });
  let s = (e) => {
      let t = o.find((t) => t.data == e),
        i = !(t?.newWindow ?? !1);
      Fn.Get().ShowPreviewWindow(t?.url ?? r, n, i, t?.size, t?.queryParams);
    },
    c = Dn(),
    l = (e) => {
      Jo(
        (0, X.jsx)(Ga, { rgOptions: o, onValueSelected: (e, t) => s(t.data) }),
        e,
        { bOverlapHorizontal: !0 },
      );
    };
  return (0, X.jsxs)(`div`, {
    className: Y(zp, c && `qY967uCB9TY-`),
    children: [
      (0, X.jsx)(I, {
        className: Y(Bp),
        onClick: () => s(void 0),
        children: L(`#Sale_Debug_LivePreview`),
      }),
      (0, X.jsx)(I, {
        className: Y(Vp),
        onClick: (e) => l(e),
        children: (0, X.jsx)($a, {}),
      }),
    ],
  });
}
function Up(e) {
  return (0, X.jsx)(_i, { location: 3, children: (0, X.jsx)(Wp, { ...e }) });
}
var Wp = r((e) => {
    let { editModel: t } = e,
      n = Wo(),
      r = Oc(),
      [i, a, o, s] = g(() => [
        fr(),
        et(),
        !!t.GetEventModel().jsondata.sale_sub_menu,
        t.GetEventType(),
      ]),
      c = s == 36,
      l = (t) => {
        e.onSelected && e.onSelected(t);
      },
      u = (e, t, n, i = !1, a) => {
        e.push({
          strLabel: t,
          strSectionId: n,
          style: a,
          bIndent: i,
          bSectionIsVisible: r.m_mapVisibleSections.has(n),
        });
      },
      d = t.GetEventModel(),
      f = [];
    u(f, L(`#Sale_PageConfigOptions`), `SalePageEdit_Config`);
    let p = ua(t.GetClanSteamID(), !1);
    ((p || d.GetTaggedItems().length > 0) &&
      u(
        f,
        L(`#Sale_TaggedItemsSection`, d.GetTaggedItems().length),
        `SalePageEdit_TaggedItems`,
      ),
      u(
        f,
        L(c ? `#Sale_Artwork_Sections_Page` : `#Sale_Artwork_Sections`),
        `SalePageEdit_AllArtworkCtn`,
      ),
      (d.BHasTag(`contenthub`) || d.BUsesContentHubForItemSource()) &&
        u(f, `Content Hub Settings`, `SalePageEdit_ContentHub`));
    let m = !1,
      h = 0;
    return (
      d.GetSaleSections().forEach((e, r) => {
        if (m && i && !at(a, e)) h += 1;
        else {
          let i = (0, X.jsx)(tn, {
              saleSection: e,
              eventModel: t.GetEventModel(),
              editLanguage: t.GetCurEditLanguage(),
              index: r,
            }),
            a = { ...Ut(e, d, n), color: e.label_color },
            o = Ti + e.unique_id;
          (u(f, i, o, m, a), e.section_type === `tabs` && (m = !0));
        }
      }),
      h > 0 &&
        u(
          f,
          (0, X.jsxs)(`div`, {
            className: Ip,
            onClick: (e) => {
              (Yt(void 0), e.stopPropagation());
            },
            children: [
              (0, X.jsx)(`div`, {
                className: Lp,
                children: (0, X.jsx)(hs, {}),
              }),
              L(`#Sale_TOC_ClearFilter`),
              (0, X.jsx)(H, { tooltip: L(`#Sale_TOC_ClearFilter_ttip`, h) }),
            ],
          }),
          `DummyTargetNotReal`,
          !0,
        ),
      p &&
        (o && u(f, `(VO) Sub Menu Editor`, `SalePageEdit_SubMenuEditor`),
        u(f, `(VO) Custom CSS Editor`, `SalePageEdit_CustomCSSCode`)),
      (0, X.jsx)(J, {
        children: (0, X.jsx)(Lc, {
          className: Rp,
          elHeader: (0, X.jsx)(Cc, {
            eventType: e.editModel.GetEventType(),
            children: (0, X.jsx)(ku, { editModel: e.editModel }),
          }),
          strHeader: L(`#Sale_TOC`),
          rows: f,
          onSelected: l,
          elBottomContent: (0, X.jsx)(Gp, { editModel: e.editModel }),
        }),
      })
    );
  }),
  Gp = (e) => {
    let { editModel: t } = e,
      [n, r, i] = Gs(),
      a = m((e) => {
        let n = { ...kr, unique_id: t.GenerateSaleSectionUniqueID() },
          r = t.GetEventModel().jsondata.sale_sections.slice(-1)[0];
        (r &&
          ((n.label_color = r.label_color),
          (n.background_gradient_bottom = r.background_gradient_bottom),
          (n.background_gradient_top = r.background_gradient_top),
          (n.border_color = r.border_color),
          (n.border_width = r.border_width)),
          sn.SetSaleSectionType(t.GetEventType(), n, e),
          t.GetEventModel().jsondata.sale_sections.push(n),
          t.SetDirty(x.jsondata_sales),
          On(Rn(n), !0),
          i());
      });
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(J, {
          children: (0, X.jsx)(To, {
            active: n,
            children: (0, X.jsx)(Kp, {
              clanSteamID: t.GetClanSteamID(),
              eventType: t.GetEventType(),
              fnSectionTypeChosen: a,
              closeModal: i,
            }),
          }),
        }),
        (0, X.jsx)(Ns, {
          onClick: r,
          className: Ds,
          children: L(`#Sale_AddNewSection`),
        }),
      ],
    });
  };
function Kp(e) {
  let {
      clanSteamID: t,
      eventType: n,
      fnSectionTypeChosen: r,
      closeModal: i,
    } = e,
    [a, o] = Z.useState(`unselected_empty`),
    s = ct(t, n);
  return (0, X.jsxs)(j, {
    strTitle: L(`#Sale_AddNewSection_Title`),
    strDescription: L(`#Sale_AddNewSection_Desc`),
    onOK: () => r(a),
    onCancel: i,
    closeModal: i,
    children: [
      (0, X.jsx)(ar, {
        rgSectionTypeInfos: s,
        sectionType: a,
        fnSetSectionType: (e) => o(e),
      }),
      (0, X.jsx)(`div`, { className: Y(U, void 0) }),
    ],
  });
}
function qp(e) {
  let t = b.GetEditModel(),
    [n, r, i] = Gs(),
    { bSoloMode: a, SetSoloMode: o } = un();
  return (0, X.jsxs)(`div`, {
    className: _n,
    children: [
      (0, X.jsx)(`div`, {
        children: (0, X.jsx)(xs, {
          toolTipContent: L(`#Sale_Debug_LivePreview_ttip`),
          children: (0, X.jsx)(Hp, { editModel: t }),
        }),
      }),
      (0, X.jsx)(`div`, {
        children: (0, X.jsx)(xs, {
          toolTipContent: L(`#Sale_Debug_Tooltip`),
          children: (0, X.jsx)(I, {
            onClick: (e) => P((0, X.jsx)(Tp, {}), G(e)),
            children: (0, X.jsx)(Is, {}),
          }),
        }),
      }),
      (0, X.jsx)(`div`, {
        children: (0, X.jsx)(xs, {
          toolTipContent: L(`#Sale_GameExport_Desc`),
          children: (0, X.jsx)(I, {
            onClick: (e) => P((0, X.jsx)(Fp, {}), G(e)),
            children: (0, X.jsx)(Ya, {}),
          }),
        }),
      }),
      (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(To, {
            active: n,
            children: (0, X.jsx)(Jp, { editModel: t, closeModal: i }),
          }),
          (0, X.jsx)(xs, {
            toolTipContent: L(`#Sale_ReorderSections_ttip`),
            children: (0, X.jsx)(I, {
              onClick: () => r(),
              children: (0, X.jsx)(Ps, {}),
            }),
          }),
        ],
      }),
      (0, X.jsx)(`div`, {
        className: void 0,
        children: (0, X.jsx)(xs, {
          toolTipContent: L(`#Sale_Section_MinimizeAll_Tooltip`),
          children: (0, X.jsx)(I, {
            onClick: Kn,
            children: (0, X.jsx)(As, {}),
          }),
        }),
      }),
      (0, X.jsx)(`div`, {
        className: void 0,
        children: (0, X.jsx)(xs, {
          toolTipContent: L(`#Sale_Section_SoloMode_ttip`),
          children: (0, X.jsx)(F, {
            label: L(`#Sale_Section_SoloMode`),
            checked: a,
            onChange: (e) => o(e),
          }),
        }),
      }),
    ],
  });
}
function Jp(e) {
  let { editModel: t, closeModal: n } = e,
    r = g(() => t.GetSaleSections()),
    [i, a] = Z.useState(null);
  Z.useEffect(() => (a([...r]), () => a(null)), [r]);
  let o = Wo();
  return (0, X.jsx)(_i, {
    location: 4,
    children: (0, X.jsx)(j, {
      strTitle: L(`#Sale_ReorderSections`),
      onOK: () => {
        ((t.GetEventModel().jsondata.sale_sections = i),
          t.SetDirty(x.jsondata_sales),
          a(null));
      },
      onCancel: () => a(null),
      closeModal: n,
      children: i
        ? (0, X.jsx)(`div`, {
            className: zn,
            children: (0, X.jsx)(`div`, {
              className: kn,
              children: (0, X.jsx)(Hn, {
                items: i,
                onMove: (e, t) => {
                  let n = [...i];
                  (co(n, e, t), a(n));
                },
                render: (e) => {
                  let n = t.GetSaleSections().findIndex((t) => e === t),
                    r = {
                      ...Ut(e, t.GetEventModel(), o),
                      color: e.label_color,
                    };
                  return (0, X.jsx)(`div`, {
                    className: dn,
                    style: r,
                    children: (0, X.jsx)(tn, {
                      saleSection: e,
                      editLanguage: t.GetCurEditLanguage(),
                      eventModel: t.GetEventModel(),
                      index: n,
                    }),
                  });
                },
              }),
            }),
          })
        : (0, X.jsx)(C, {
            string: L(`#Loading`),
            size: `medium`,
            position: `center`,
          }),
    }),
  });
}
var Yp = Z.lazy(() =>
  mo(
    () => import(`./monacoeditor.js`).then((e) => e.t),
    __vite__mapDeps([0, 1, 2, 3, 4, 5]),
    import.meta.url,
  ),
);
function Xp(e) {
  let { editModel: t } = e,
    n = (e) => {
      t.GetEventModel().jsondata.sale_custom_css != e &&
        ((t.GetEventModel().jsondata.sale_custom_css = e),
        t.SetDirty(x.jsondata_sales));
    },
    r = t.GetEventModel().jsondata,
    [i, a, o] = g(() => [
      r.sale_custom_css,
      r.sale_vanity_id_valve_approved_for_sale_subpath,
      t.GetName(),
    ]),
    [s, c] = Z.useState(() => o + `_custom.css`);
  return (0, X.jsx)(X.Fragment, {
    children: a
      ? (0, X.jsxs)(`div`, {
          className: or,
          children: [
            (0, X.jsx)(`p`, {
              children: `Add custom CSS which is only added to the store's sale page header. Please include nocache=1 in url when viewing your latest changes on the store. Avoid targeting the generated class names like 'broadcast_embeddable_Event_1A0NY' as the 1A0NY is programmatically generated and can be changed by the compiler with future props.`,
            }),
            (0, X.jsx)(`h3`, { children: `Custom Fonts` }),
            (0, X.jsx)(`p`, {
              children: ` If you're going to import custom fonts you need to declare each family separately or they won't import correctly. `,
            }),
            (0, X.jsxs)(`div`, {
              className: Wt,
              children: [
                (0, X.jsx)(`code`, { children: `'//For Example'` }),
                (0, X.jsx)(`br`, {}),
                (0, X.jsx)(`code`, {
                  children: `@import url('https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap'); `,
                }),
                (0, X.jsx)(`br`, {}),
                (0, X.jsx)(`code`, {
                  children: `@import url('https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap');`,
                }),
              ],
            }),
            (0, X.jsx)(`p`, {
              children: `Additionally, when you declare a font-family in your custom CSS do not wrap the name of the family in quotation marks.`,
            }),
            (0, X.jsxs)(`div`, {
              className: Wt,
              children: [
                (0, X.jsx)(`code`, { children: `'//For Example'` }),
                (0, X.jsx)(`br`, {}),
                (0, X.jsx)(`code`, { children: `font-family: Protest Strike` }),
                ` will work, `,
                (0, X.jsx)(`code`, {
                  children: `font-family: "Protest Strike"`,
                }),
                ` will NOT`,
              ],
            }),
            (0, X.jsxs)(`div`, {
              className: pn,
              children: [
                (0, X.jsx)(`input`, {
                  type: `file`,
                  onChange: (e) => {
                    let n = e.target.files?.[0];
                    if (n) {
                      c(e.target.files[0].name);
                      let r = new FileReader();
                      ((r.onload = (n) => {
                        let r = n.target.result.toString();
                        ((t.GetEventModel().jsondata.sale_custom_css = r),
                          t.SetDirty(x.jsondata_sales),
                          (e.target.value = ``));
                      }),
                        r.readAsText(n));
                    }
                  },
                }),
                (0, X.jsx)(I, {
                  onClick: () => {
                    let e = document.createElement(`a`),
                      t = new Blob([i], { type: `text/css` });
                    ((e.href = URL.createObjectURL(t)),
                      (e.download = s),
                      document.body.appendChild(e),
                      e.click());
                  },
                  children: `Export`,
                }),
              ],
            }),
            (0, X.jsx)(`div`, {
              className: cr,
              children: (0, X.jsx)(Z.Suspense, {
                fallback: null,
                children: (0, X.jsx)(Yp, {
                  width: `100%`,
                  height: `100%`,
                  language: `css`,
                  theme: `vs-dark`,
                  value: i || ``,
                  options: {
                    selectOnLineNumbers: !0,
                    tabCompletion: `on`,
                    colorDecorators: !0,
                    scrollBeyondLastLine: !1,
                    automaticLayout: !0,
                  },
                  onChange: n,
                }),
              }),
            }),
          ],
        })
      : (0, X.jsx)(`div`, {
          className: xt,
          children: (0, X.jsx)(`p`, {
            children: `The custom CSS editor is disabled. The sale page needs to be setup to use store/sale. This is a Valve Only setting found in the General Configuration Section`,
          }),
        }),
  });
}
var Zp = Z.createContext(void 0);
function Qp(e) {
  return (0, X.jsx)(Zp, { value: e.elContent, children: e.children });
}
function $p(e) {
  let t = Z.useContext(Zp);
  return t ? Uc.createPortal(e.children, t) : null;
}
var em = r((e) => {
    let t = b.GetEditModel(),
      n = t.GetCategoryAsType(),
      r = t.BPublished(),
      i = t.BUnlisted(),
      a = t.BVisible(),
      o = n == 36;
    return (0, X.jsxs)(`div`, {
      className: Y(rc, r && (a || i) ? cc : lc),
      children: [
        (0, X.jsxs)(`div`, {
          className: Ha,
          children: [
            (0, X.jsx)(Si, {
              eventModel: t.GetEventModel(),
              route: T.k_eCommunityAdminPage,
              className: Ts,
              children: L(`#EventDisplay_EventsDashBtn`),
            }),
            (0, X.jsx)(`div`, {
              className: Eo,
              children: (0, X.jsx)(Wn, { editModel: t }),
            }),
          ],
        }),
        (0, X.jsx)(`div`, {
          className: go,
          children: (0, X.jsx)(Ct, { editModel: t }),
        }),
        (0, X.jsxs)(`div`, {
          className: Xs,
          children: [
            !o &&
              (0, X.jsx)(Si, {
                eventModel: t.GetEventModel(),
                route: T.k_eCommunityPreview,
                className: `ugkEbNZ8MZc-`,
                children: L(
                  n == 28
                    ? `#EventEditor_Preview_News`
                    : `#EventEditor_Preview`,
                ),
              }),
            t.BHasSaleEnabled() &&
              (0, X.jsx)(Si, {
                eventModel: t.GetEventModel(),
                route: T.k_eCommunityPreviewSale,
                className: `ugkEbNZ8MZc-`,
                children: L(
                  o
                    ? `#EventEditor_PreviewSale_Page`
                    : `#EventEditor_PreviewSale`,
                ),
              }),
            t.BHasSaleEnabled() &&
              (0, X.jsx)(xs, {
                toolTipContent: L(`#Sale_Debug_LivePreview_ttip`),
                children: (0, X.jsx)(Hp, { editModel: t }),
              }),
          ],
        }),
      ],
    });
  }),
  tm = r((e) => {
    let { setAdditionalContentDiv: t } = e,
      n = b.GetEditModel(),
      r = n.GetEventModel(),
      i = n.GetEventType() == 36,
      { creatorHome: a } = ri(n.GetClanAccountID()),
      o = i && a?.GetLinkedEventGID() == r.GID,
      s =
        (n.GetVisibilityState() == Vr.k_EEventStateVisible || n.BUnlisted()) &&
        (!i || o);
    return (0, X.jsxs)(`div`, {
      className: ac,
      children: [
        (0, X.jsx)(ze, { editModel: b.GetEditModel() }),
        !i &&
          (0, X.jsx)(Si, {
            eventModel: r,
            route: T.k_eCommunityPreview,
            className: `ugkEbNZ8MZc-`,
            children: L(`#EventEditor_Preview`),
          }),
        s &&
          (0, X.jsxs)(Z.Fragment, {
            children: [
              (0, X.jsx)(Si, {
                className: `ugkEbNZ8MZc-`,
                eventModel: r,
                route: T.k_eStoreView,
                children: L(
                  i
                    ? `#EventEditor_ViewLive_CreatorHome`
                    : `#EventEditor_ViewLive`,
                ),
              }),
              (0, X.jsx)(`span`, { className: `w4ILBBttnDY-`, children: ` ` }),
            ],
          }),
        (0, X.jsx)(`div`, { className: sc, ref: t }),
      ],
    });
  }),
  nm = `BYW-HIN5MJM-`,
  rm = `YLumvnNPU9s-`,
  im = `-cMku3m-rcw-`,
  am = `ZlgE-RXiZVA-`,
  om = `YLQlq21lYYY-`,
  sm = `UuWHe0byT9Y-`,
  cm = `ksCbmUv2cR4-`;
function lm(e) {
  let {
      rgSocialMediaItems: t,
      fnSetItems: n,
      rgSupportedSocialMediaTypes: r,
      rgValidationData: i,
    } = e,
    a = Z.useMemo(
      () =>
        r
          .filter(
            (e) =>
              t.findIndex((t) => t.type === e.type) === -1 ||
              e.type === `qq` ||
              e.type === `qqlink`,
          )
          .map((e) => ({
            label: L(`#StoreAdmin_SocialMedia_Type_${e.type}`),
            data: e.type,
          }))
          .sort((e, t) => (e.label < t.label ? -1 : 1)),
      [r, t],
    ),
    o = (e) => {
      let r = t.slice();
      (r.splice(e, 1), n(r));
    },
    s = (e, r) => {
      let i = t.slice();
      (co(i, e, r), n(i));
    },
    c = (e, r) => {
      let i = t.map((t, n) => (n === e ? { ...t, link: r } : t));
      n(i);
    };
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(um, {
        options: a,
        onAddLink: (e) => {
          let r = t.slice();
          (r.push({ type: e, link: `` }), n(r));
        },
      }),
      (0, X.jsx)(Hn, {
        items: t,
        onDelete: o,
        onMove: s,
        render: (e, t) =>
          (0, X.jsx)(
            fm,
            {
              item: e,
              onUpdateLink: (e) => c(t, e),
              validationData: i[e.type],
            },
            e.type,
          ),
      }),
    ],
  });
}
function um(e) {
  let { options: t, onAddLink: n } = e;
  return (0, X.jsx)(`div`, {
    className: cm,
    children: (0, X.jsx)(Io, {
      strDefaultLabel: L(`#StoreAdmin_SocialMedia_Add`),
      controlled: !0,
      rgOptions: t,
      onChange: (e) => {
        let t = e.data;
        t && n(t);
      },
      selectedOption: null,
    }),
  });
}
function dm(e, t) {
  let n = !0,
    r = ``;
  return (
    t.prefix
      ? ((r =
          e.type === `mastodon`
            ? L(
                `#StoreAdmin_SocialMedia_ValidationMastodon`,
                t.prefix.join(`, `),
              )
            : L(
                `#StoreAdmin_SocialMedia_ValidationPrefix`,
                t.prefix.join(`, `),
              )),
        e.link &&
          ((n = !1),
          t.prefix.forEach((t) => {
            e.link.startsWith(t) && (n = !0);
          })))
      : t.number
        ? ((r = L(`#StoreAdmin_SocialMedia_ValidationNumber`)),
          e.link && (n = /^\d+$/.test(e.link)))
        : t.text
          ? (r = L(`#StoreAdmin_SocialMedia_ValidationText`))
          : t.regex &&
            e.type === `tumblr` &&
            (r = L(`#StoreAdmin_SocialMedia_ValidationTumblr`)),
    { bValid: n, strTooltip: r }
  );
}
function fm(e) {
  let { item: t, onUpdateLink: n, validationData: r } = e,
    i;
  i = r.number
    ? L(`#StoreAdmin_SocialMedia_EnterNumber`)
    : r.text
      ? L(`#StoreAdmin_SocialMedia_EnterName`)
      : L(`#StoreAdmin_SocialMedia_EnterLink`);
  let { bValid: a, strTooltip: o } = dm(t, r);
  return (0, X.jsxs)(`div`, {
    className: am,
    children: [
      (0, X.jsx)(`div`, {
        className: om,
        children: L(`#StoreAdmin_SocialMedia_Type_${t.type}`),
      }),
      (0, X.jsx)(io, {
        className: sm,
        type: `text`,
        value: t.link,
        placeholder: i,
        onChange: (e) => n(e.target.value),
      }),
      o &&
        (0, X.jsx)(B, {
          className: `vIGgULQ6INU-`,
          toolTipContent: o,
          children: `(?)`,
        }),
      !a && (0, X.jsx)(`div`, { className: `TDokO-aV6BA-`, children: o }),
    ],
  });
}
function pm() {
  let e = o({
    queryKey: [`useSocialMediaSupports`],
    queryFn: async () => {
      let e = `${R.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
        t = { origin: self.origin },
        n = await Q.default.get(e, { params: t });
      return n?.status == 200 && n.data?.success == 1
        ? n.data
        : (console.error(`useSocialMediaSupports:`, n?.status), { success: 2 });
    },
  });
  return e.isLoading ? null : e.data;
}
function mm(e) {
  let { editModel: t } = e;
  return g(() => t.GetEventType()) == 36
    ? (0, X.jsx)(gm, { editModel: t })
    : (0, X.jsx)(hm, { editModel: t });
}
function hm(e) {
  let { editModel: t } = e,
    n = t.GetCurEditLanguage(),
    [r, i, a, o] = g(() => [
      t.GetName(n) || ``,
      t.GetSummary(n) || ``,
      t.GetDescription(n) || ``,
      t.GetImageURL(`capsule`, n) || null,
    ]),
    s = i || qr.GenerateSummaryFromText(a);
  return (0, X.jsx)(_m, {
    editModel: t,
    title: r,
    titleTip: L(`#Sale_DefaultSocialModule_DefaultTitle`),
    summary: s,
    summaryTip: L(`#Sale_DefaultSocialModule_DefaultDesc`),
    imageUrl: o,
    socialMediaLinksEditor: !0,
  });
}
function gm(e) {
  let { editModel: t } = e,
    [n, r] = ii(t.GetClanAccountID());
  return (0, X.jsx)(_m, {
    editModel: t,
    title: r.curator_title,
    titleTip: L(`#Sale_DefaultSocialModule_DefaultTitle_CreatorHome`),
    summary: r.curator_description,
    summaryTip: L(`#Sale_DefaultSocialModule_DefaultDesc_CreatorHome`),
    imageUrl: r.avatar_full_url,
    smallImage: !0,
  });
}
function _m(e) {
  let {
      editModel: t,
      title: n,
      titleTip: r,
      summary: i,
      summaryTip: a,
      imageUrl: o,
      socialMediaLinksEditor: s,
      smallImage: c,
    } = e,
    l = t.GetEventModel(),
    [u, d] = g(() => [
      l.GetSaleSectionsByType(`social_share`) || [],
      l.jsondata.sale_default_social_media_disabled,
    ]),
    f = (e) => {
      ((l.jsondata.sale_default_social_media_disabled = !e),
        t.SetDirty(x.jsondata_sales));
    },
    p = u.length > 0,
    m = !(d || p);
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(`p`, { children: L(`#Sale_DefaultSocialModule_Description`) }),
      (0, X.jsx)(E, {
        clanSteamID: t.GetClanSteamID(),
        requireAdmin: !0,
        children: (0, X.jsx)(`p`, {
          className: nm,
          children: L(
            p
              ? `#Sale_DefaultSocialModule_DisabledByOverride`
              : `#Sale_DefaultSocialModule_Override`,
          ),
        }),
      }),
      m &&
        (0, X.jsxs)(`div`, {
          className: `QMPAqEXFVPY-`,
          children: [
            (0, X.jsx)(`img`, {
              className: Y(`Cng3So-Ip-0-`, c && `TwBlEbBe-CE-`),
              src: o,
            }),
            (0, X.jsxs)(`div`, {
              className: `_8hgcebiuzyk-`,
              children: [
                (0, X.jsxs)(`div`, {
                  className: `mT3ZJ-asMXc-`,
                  children: [
                    n,
                    (0, X.jsx)(`br`, {}),
                    (0, X.jsx)(`span`, { children: r }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `eqzGUkS4cyA-`,
                  children: [
                    i,
                    (0, X.jsx)(`br`, {}),
                    (0, X.jsx)(`span`, { children: a }),
                  ],
                }),
              ],
            }),
          ],
        }),
      (0, X.jsx)(z, {
        onChange: f,
        label: L(`#Sale_DefaultSocialModule_Toggle`),
        checked: m,
        disabled: p,
      }),
      !s && (0, X.jsx)(vm, { editModel: t }),
    ],
  });
}
function vm(e) {
  let { editModel: t } = e,
    [n, r] = (0, Z.useState)(
      () => t.GetEventModel().jsondata.sale_social_media_items?.length > 0,
    );
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`p`, { children: L(`#Sale_DefaultSocialModule_LinkDesc`) }),
      n
        ? (0, X.jsx)(ym, { editModel: t })
        : (0, X.jsx)(z, {
            onChange: () => r(!0),
            label: L(`#Sale_DefaultSocialModule_EnableSocialMediaLink`),
            checked: n,
          }),
    ],
  });
}
function ym(e) {
  let { editModel: t } = e,
    n = pm();
  (0, Z.useEffect)(() => {
    let e = t.GetEventModel().jsondata;
    e.sale_social_media_items ||= [];
  }, [t]);
  let r = g(() => t.GetEventModel().jsondata.sale_social_media_items || []),
    [i, a] = (0, Z.useState)(() => r);
  return n
    ? n.success == 1
      ? (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(lm, {
              rgValidationData: n.rgValidationData,
              rgSupportedSocialMediaTypes: n.rgSupportedSocialMediaTypes,
              rgSocialMediaItems: i,
              fnSetItems: (e) => {
                let r = n.rgValidationData;
                ((t.GetEventModel().jsondata.sale_social_media_items = e
                  .filter((e) => !!e.link)
                  .filter((e) => dm(e, r[e.type]).bValid)),
                  t.SetDirty(x.jsondata_sales),
                  a(e));
              },
            }),
            r.length == 0 &&
              (0, X.jsx)(`div`, {
                children: L(`#Sale_DefaultSocialModule_NoLinks`),
              }),
          ],
        })
      : (0, X.jsx)(`div`, {
          className: rm,
          children: (0, X.jsx)(`div`, {
            className: im,
            children: L(`#GrantAwardError_Busy`),
          }),
        })
    : (0, X.jsx)(C, { string: L(`#Loading`), position: `center` });
}
var bm = `CKuXw36x-Lo-`,
  xm = `FYod3Y12L8w-`,
  Sm = `rKTPXtWYGYA-`,
  Cm = `Jw6f6Et0lA4-`,
  wm = class e {
    static s_newsCuratorStore;
    m_mapNewsCurators = new Map();
    m_bIsLoadComplete = !1;
    m_mapLangToNewsCurators = new Map();
    m_LoadingPromise = null;
    static Get() {
      return (
        e.s_newsCuratorStore ||
          ((e.s_newsCuratorStore = new e()),
          (e.s_newsCuratorStore.m_LoadingPromise = e.s_newsCuratorStore.Init()),
          (window.g_NewsCuratorStore = e.s_newsCuratorStore)),
        e.s_newsCuratorStore
      );
    }
    constructor() {
      s(this);
    }
    IsLoaded() {
      return this.m_bIsLoadComplete;
    }
    WaitForInitialLoad() {
      return this.m_LoadingPromise;
    }
    get allNewsCurators() {
      return Array.from(this.m_mapNewsCurators.values());
    }
    GetCuratorsForLang(e) {
      return this.m_mapLangToNewsCurators.get(e);
    }
    GetNewsCuratorForAccount(e) {
      return this.m_mapNewsCurators.get(e);
    }
    BIsTrustedPressAccount(e) {
      return this.GetNewsCuratorForAccount(e) !== void 0;
    }
    async Init() {
      ao.GetLanguageListForRealms([R.EREALM]).forEach((e) =>
        this.m_mapLangToNewsCurators.set(e, []),
      );
      let e = R.STORE_BASE_URL + `events/ajaxgetnewscurators`,
        t = { origin: self.origin },
        r = await Q.default.get(e, { params: t });
      n(() => {
        (r.data && r.data.success && this.HandleCuratorResponse(r.data),
          (this.m_bIsLoadComplete = !0));
      });
    }
    HandleCuratorResponse(e) {
      if (
        (e.groupvanityinfo && oi.RegisterClanData(e.groupvanityinfo),
        e.newscuratorinfo)
      )
        for (let t of e.newscuratorinfo) {
          if (this.m_mapNewsCurators.has(t.clanAccountID)) continue;
          this.m_mapNewsCurators.set(t.clanAccountID, t);
          let e = oi.GetClanInfoByClanAccountID(t.clanAccountID);
          e && this.m_mapLangToNewsCurators.get(e.rss_language)?.push(t);
        }
    }
  };
(D([u], wm.prototype, `m_mapNewsCurators`, void 0),
  D([u], wm.prototype, `m_bIsLoadComplete`, void 0),
  D([u], wm.prototype, `m_mapLangToNewsCurators`, void 0),
  D([c], wm.prototype, `allNewsCurators`, null),
  D([m], wm.prototype, `HandleCuratorResponse`, null));
var Tm = `_4gJW-1D-qoo-`,
  Em = `g-Xc-fP6jvg-`,
  Dm = `_1Wx2O8pIAbo-`,
  Om = `KYpVcvhG9vI-`;
function km(e) {
  let t = new Set();
  return (
    (e.indexOf(`games`) >= 0 || e.indexOf(`dlc`) >= 0) && t.add(`apps`),
    e.indexOf(`curators`) >= 0 && t.add(`curators`),
    t
  );
}
function Am(e) {
  return e == `game` || e == `software`
    ? `games`
    : e == `dlc` || e == `music`
      ? `dlc`
      : null;
}
var jm = 300,
  Mm = class extends Z.Component {
    state = {
      strSearchString: ``,
      rgAppSuggestions: null,
      rgCuratorSuggestions: null,
    };
    m_nHighestSentRequestID = 0;
    m_mapHighestReceivedRequestIDFromBackEnd = new Map([
      [`apps`, 0],
      [`curators`, 0],
    ]);
    m_timerForChange = new Ro();
    componentWillUnmount() {
      this.m_timerForChange.Cancel();
    }
    CloseSuggestions() {
      this.setState({
        rgCuratorSuggestions: null,
        rgAppSuggestions: null,
        strSearchString: ``,
      });
    }
    async GetSuggestionsFromServer(e) {
      let t = km(this.props.rgCorporaToSearch);
      (t.has(`apps`) && this.GetAppSuggestionsFromServer(e),
        t.has(`curators`) && this.GetCuratorSuggestions(e));
    }
    async GetCuratorSuggestions(e) {
      let t = wm.Get().allNewsCurators,
        n = [];
      for (let r of t) {
        let t = oi.GetClanInfoByClanAccountID(r.clanAccountID),
          i = {
            corpus: `curators`,
            id: r.clanAccountID,
            name: t?.group_name,
            img: t?.avatar_full_url,
          };
        if ((t?.group_name?.toLocaleLowerCase() || ``).indexOf(e) >= 0) {
          if (
            (this.props.fnFilterSuggestion &&
              !this.props.fnFilterSuggestion(i)) ||
            ei.Get().BIsIgnoringCurator(t.clanAccountID)
          )
            continue;
          let e = ei.Get().BIsFollowingCurator(t.clanAccountID),
            r = (0, X.jsx)(
              Nm,
              {
                suggestion: i,
                fnOnSelected: this.props.fnOnSelected,
                bShowFollowingLabel: e,
              },
              `curatorsug_` + i.id,
            );
          n.push(
            this.props.fnDecorateSuggestion
              ? this.props.fnDecorateSuggestion(i, r)
              : r,
          );
        }
      }
      (this.m_mapHighestReceivedRequestIDFromBackEnd.set(
        `curators`,
        this.m_nHighestSentRequestID,
      ),
        this.setState({ rgCuratorSuggestions: n }));
    }
    async GetAppSuggestionsFromServer(e) {
      let t = this.m_nHighestSentRequestID,
        n = [];
      (this.props.rgCorporaToSearch.indexOf(`games`) >= 0 &&
        (n.push(`game`), n.push(`software`)),
        this.props.rgCorporaToSearch.indexOf(`dlc`) >= 0 &&
          (n.push(`dlc`), n.push(`music`)));
      let r = {
          cc: R.COUNTRY,
          l: R.LANGUAGE,
          realm: Co.k_ESteamRealmGlobal,
          origin: self.origin,
          f: `jsonfull`,
          term: e.replace(` `, `+`),
          require_type: n.join(`,`),
          excluded_tags: ei.Get().GetExcludedTagsSortedByID(),
          excluded_content_descriptors: ei.Get().ExcludedContentDescriptor,
        },
        i = `${R.STORE_BASE_URL}search/suggest`,
        a = await Q.default.get(i, { params: r, withCredentials: !0 });
      if (t < this.m_mapHighestReceivedRequestIDFromBackEnd.get(`apps`)) return;
      this.m_mapHighestReceivedRequestIDFromBackEnd.set(`apps`, t);
      let o;
      (a?.data?.length &&
        (o = a.data.map((e) => {
          let t = { corpus: Am(e.type), ...e, id: parseInt(e.id) };
          if (
            this.props.fnFilterSuggestion &&
            !this.props.fnFilterSuggestion(t)
          )
            return null;
          let n = (0, X.jsx)(
            Nm,
            { suggestion: t, fnOnSelected: this.props.fnOnSelected },
            t.type + t.id,
          );
          return this.props.fnDecorateSuggestion
            ? this.props.fnDecorateSuggestion(t, n)
            : n;
        })),
        this.setState({ rgAppSuggestions: o }));
    }
    async UpdateSuggestions(e) {
      let t = e.target.value && e.target.value.trim().toLocaleLowerCase();
      (this.m_nHighestSentRequestID++,
        t?.length
          ? (this.setState({ strSearchString: t }),
            this.m_timerForChange.Schedule(jm, () =>
              this.GetSuggestionsFromServer(t),
            ))
          : (Array.from(km(this.props.rgCorporaToSearch)).forEach((e) =>
              this.m_mapHighestReceivedRequestIDFromBackEnd.set(
                e,
                this.m_nHighestSentRequestID,
              ),
            ),
            this.m_timerForChange.Cancel(),
            this.setState({ strSearchString: `` }),
            this.ResetSuggestions()));
    }
    ResetSuggestions() {
      this.setState({ rgAppSuggestions: null, rgCuratorSuggestions: null });
    }
    GetLimitedSuggestions() {
      let { rgAppSuggestions: e, rgCuratorSuggestions: t } = this.state,
        n = e ? e.length : 10,
        r = t ? t.length : 10;
      return (
        n + r > 10 && (n = 10 - Math.min(r, 2)),
        (r = 10 - n),
        (e = e?.slice(0, n)),
        (t = t?.slice(0, r)),
        { rgAppSuggestions: e, rgCuratorSuggestions: t }
      );
    }
    render() {
      let {
          strLabel: e,
          focusOnMount: t,
          rgCorporaToSearch: n,
          strResultsClass: r,
        } = this.props,
        { strSearchString: i } = this.state,
        { rgAppSuggestions: a, rgCuratorSuggestions: o } =
          this.GetLimitedSuggestions(),
        s = i?.length > 0,
        c = a?.length > 0,
        l = o?.length > 0,
        u = km(n).size > 1,
        d =
          u &&
          c &&
          L(
            n.indexOf(`dlc`) >= 0
              ? `#EventCalendar_SearchResultsHeader_GameAndDLCSection`
              : `#EventCalendar_SearchResultsHeader_GameSection`,
          ),
        f = Array.from(km(n)).some(
          (e) =>
            this.m_nHighestSentRequestID >
            this.m_mapHighestReceivedRequestIDFromBackEnd.get(e),
        ),
        p = !l && !c && !f;
      return (0, X.jsxs)(`div`, {
        className: Tm,
        children: [
          (0, X.jsx)(N, {
            type: `text`,
            label: e,
            onChange: this.UpdateSuggestions,
            bAlwaysShowClearAction: s,
            focusOnMount: t,
          }),
          s &&
            (0, X.jsxs)(`div`, {
              className: Y(`JjeIVeB00KI-`, r),
              children: [
                c &&
                  (0, X.jsxs)(
                    `div`,
                    {
                      children: [
                        u &&
                          (0, X.jsx)(`div`, {
                            className: `KIFc7JoTW0c-`,
                            children: d,
                          }),
                        a,
                      ],
                    },
                    `game-suggestions`,
                  ),
                l &&
                  (0, X.jsxs)(
                    `div`,
                    {
                      children: [
                        u &&
                          (0, X.jsx)(`div`, {
                            className: `KIFc7JoTW0c-`,
                            children: L(
                              `#EventCalendar_SearchResultsHeader_CuratorSection`,
                            ),
                          }),
                        o,
                      ],
                    },
                    `curator-suggestions`,
                  ),
                p &&
                  (0, X.jsx)(
                    `div`,
                    {
                      className: `jciUsTxtI2I-`,
                      children: L(`#EventCalendar_GameSearch_NoneFound`),
                    },
                    `empty-results`,
                  ),
                f && (0, X.jsx)(C, { size: `small` }),
              ],
            }),
        ],
      });
    }
  };
D([A], Mm.prototype, `UpdateSuggestions`, null);
var Nm = (e) =>
  (0, X.jsxs)(
    `div`,
    {
      className: Em,
      onClick: () => e.fnOnSelected(e.suggestion),
      children: [
        (0, X.jsx)(`img`, { src: e.suggestion.img, className: Dm }),
        (0, X.jsxs)(`div`, {
          className: Om,
          children: [` `, zi(e.suggestion.name), ` `],
        }),
        e.bShowFollowingLabel &&
          (0, X.jsx)(`div`, {
            className: `uKt-HtVvtDo-`,
            children: L(`#EventCalendar_FollowingCurator`),
          }),
      ],
    },
    `suggestion-${e.suggestion.id}`,
  );
function Pm(e) {
  let { editModel: t } = e,
    n = t.GetEventModel(),
    r = g(() => n.jsondata.associated_appid || 0),
    [i, a] = (0, Z.useState)(!!r);
  return n.appid
    ? null
    : i
      ? (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsxs)(`div`, {
              className: Ko,
              children: [
                (0, X.jsx)(`span`, {
                  className: O,
                  children: L(`#EventEditor_Associated_App`),
                }),
                (0, X.jsx)(H, {
                  tooltip: L(`#EventEditor_Associated_App_ttip`),
                  className: oo,
                }),
              ],
            }),
            (0, X.jsx)(`div`, {
              className: ms,
              children: (0, X.jsx)(`input`, {
                type: `number`,
                className: Y(Xt, Bn),
                value: r,
                onChange: (e) => {
                  let r = Number.parseInt(e.currentTarget.value);
                  r !== n.jsondata.associated_appid &&
                    ((n.jsondata.associated_appid = r || void 0),
                    t.SetDirty(x.description));
                },
              }),
            }),
          ],
        })
      : (0, X.jsx)(F, {
          checked: i,
          onChange: a,
          label: L(`#EventEditor_Associated_App_Question`),
          tooltip: L(`#EventEditor_Associated_App_ttip`),
        });
}
var Fm = `Lk-UDnVSqiY-`;
function Im(e) {
  return (0, X.jsx)(`div`, {
    className: Fm,
    children: No(`#PartnerEvent_MM_TitleTip`, (0, X.jsx)(`i`, {})),
  });
}
function Lm(e) {
  return (0, X.jsxs)(`div`, {
    className: Fm,
    children: [
      (0, X.jsx)(`p`, { children: L(`#PartnerEvent_MM_DescriptionTip1`) }),
      (0, X.jsxs)(`ul`, {
        children: [
          (0, X.jsx)(`li`, { children: L(`#PartnerEvent_MM_DescriptionTip2`) }),
          (0, X.jsx)(`li`, { children: L(`#PartnerEvent_MM_DescriptionTip3`) }),
          (0, X.jsx)(`li`, { children: L(`#PartnerEvent_MM_DescriptionTip4`) }),
        ],
      }),
      (0, X.jsx)(`p`, { children: L(`#PartnerEvent_MM_DescriptionTip5`) }),
      (0, X.jsx)(`p`, {
        children: (0, X.jsx)(`a`, {
          href: `${gs.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
          children: L(`#PartnerEvent_MM_LearnMore`),
        }),
      }),
    ],
  });
}
function Rm(e) {
  let t = Z.useRef(void 0),
    { editModel: n, bCanManuallyTagAssociatedApps: r } = e,
    i = Z.useCallback((e, n) => {
      t.current && t.current(e, n);
    }, []),
    a = g(() => n.BHasTag(`vo_marketing_message`));
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(zm, { editModel: n }),
      (0, X.jsx)(Bm, { editModel: n }),
      (0, X.jsx)(Vm, { editModel: n }),
      (0, X.jsx)(Hm, { editModel: n }),
      !!r && (0, X.jsx)(Um, { editModel: n }),
      (0, X.jsx)(_d, { editModel: n }),
      (0, X.jsx)(Pm, { editModel: n }),
      a && (0, X.jsx)(Lm, {}),
      (0, X.jsxs)(`div`, {
        className: ls,
        children: [
          (0, X.jsx)(Km, { editModel: n, refOnInsertImage: t }),
          (0, X.jsx)(Jm, { editModel: n, fnInsertImage: i }),
        ],
      }),
    ],
  });
}
function zm(e) {
  let { editModel: t } = e,
    n = nc(e.editModel.GetClanSteamID().ConvertTo64BitString()),
    r = n.isSuccess && !!n.data.crowdin_project_id;
  return (0, X.jsx)(`div`, {
    children: (0, X.jsx)(`div`, {
      className: U,
      children: (0, X.jsxs)(`div`, {
        className: jn,
        children: [
          L(`#EventEditor_LangaugeDesc`),
          (0, X.jsxs)(`div`, {
            className: Y(V, Qe),
            children: [
              (0, X.jsx)(Ct, { editModel: t }),
              (0, X.jsx)(Ou, { editModel: t }),
            ],
          }),
          r && (0, X.jsx)(uc, { editModel: e.editModel }),
        ],
      }),
    }),
  });
}
function Bm(e) {
  let { editModel: t } = e,
    [n, r] = g(() => [
      t.GetName(t.GetCurEditLanguage()) || ``,
      t.GetEventType(),
    ]),
    i = n.length >= 80,
    a = g(() => t.BHasTag(`vo_marketing_message`)),
    o = L(`#EventEditor_EventTitle`),
    s = L(`#EventEditor_Title_General_ttip`);
  return (
    r == 28
      ? (o = L(`#EventEditor_AnnouncementTitle`))
      : r == 36 &&
        ((o = L(`#EventEditor_CreatorHomeTitle`)),
        (s = L(`#EventEditor_Title_CreatorHome_ttip`))),
    (0, X.jsxs)(X.Fragment, {
      children: [
        a && (0, X.jsx)(Im, {}),
        (0, X.jsxs)(`div`, {
          className: O,
          children: [
            o,
            !!i &&
              (0, X.jsx)(`span`, {
                className: `V-kPLnIlom8-`,
                children: L(
                  `#EventEditor_EventTitle_Max_Characters_Reached`,
                  80,
                ),
              }),
            (0, X.jsx)(H, { tooltip: s, className: oo }),
            (0, X.jsx)(`span`, {
              className: Y(ir, i ? cn : ``),
              children: L(`#EventEditor_Input_Characters_Left`, 80 - n.length),
            }),
          ],
        }),
        (0, X.jsx)(`div`, {
          className: ms,
          children: (0, X.jsx)(`input`, {
            type: `text`,
            className: Y({ [Xt]: !0, [Rt]: !0, [Vt]: i }),
            value: n,
            placeholder: L(`#EventEditor_Name_Placeholder`),
            onFocus: (e) => e?.target?.select(),
            onChange: (e) =>
              t.SetName(t.GetCurEditLanguage(), e?.currentTarget?.value || ``),
            maxLength: 80,
          }),
        }),
      ],
    })
  );
}
function Vm(e) {
  let { editModel: t } = e,
    n = g(() => t.GetSubTitle(t.GetCurEditLanguage()) || ``),
    r = n.length >= 120;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsxs)(`div`, {
        className: Ko,
        children: [
          (0, X.jsx)(`span`, {
            className: O,
            children: L(`#EventEditor_Event_SubTitle`),
          }),
          (0, X.jsx)(`span`, {
            className: Qo,
            children: L(
              r
                ? `#EventEditor_Event_SubTitle_Details_Reached`
                : `#EventEditor_Event_SubTitle_Details`,
              120,
            ),
          }),
          (0, X.jsx)(H, {
            tooltip: L(`#EventEditor_SubTitle_General_ttip`, 120),
            className: oo,
          }),
          (0, X.jsx)(`span`, {
            className: Y(ir, r ? cn : ``),
            children: L(`#EventEditor_Input_Characters_Left`, 120 - n.length),
          }),
        ],
      }),
      (0, X.jsx)(`div`, {
        className: ms,
        children: (0, X.jsx)(`input`, {
          type: `text`,
          className: Y(Xt, Bn, r ? Vt : ``),
          value: n,
          placeholder: L(`#EventEditor_Name_SubTitle_Placeholder`),
          onFocus: (e) => e?.target?.select(),
          onChange: (e) =>
            t.SetSubTitle(
              t.GetCurEditLanguage(),
              e?.currentTarget?.value || ``,
            ),
          maxLength: 120,
        }),
      }),
    ],
  });
}
function Hm(e) {
  let { editModel: t } = e,
    [n, r] = g(() => [
      t.GetSummary(t.GetCurEditLanguage()) || ``,
      t.GetDescription(t.GetCurEditLanguage()) || ``,
    ]),
    i = ``;
  n.trim().length == 0 &&
    (i =
      r.length == 0
        ? L(`#EventEditor_Summary_Placeholder`, 180)
        : L(`#EventEditor_Summary_Autogenerated`) +
          qr.GenerateSummaryFromText(r));
  let a = n.length >= 180;
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsxs)(`div`, {
        className: tt,
        children: [
          (0, X.jsxs)(`div`, {
            className: Ko,
            children: [
              (0, X.jsx)(`span`, {
                className: O,
                children: L(`#EventEditor_Summary_Title`),
              }),
              (0, X.jsx)(`span`, {
                className: Qo,
                children: L(
                  a
                    ? `#EventEditor_Summary_Title_Length_Reached`
                    : `#EventEditor_Summary_Title_Length`,
                  180,
                ),
              }),
              (0, X.jsx)(H, {
                tooltip: L(`#EventEditor_Summary_Ttip`, 180),
                className: oo,
              }),
              (0, X.jsx)(`span`, {
                className: Y(ir, a ? cn : ``),
                children: L(
                  `#EventEditor_Input_Characters_Left`,
                  180 - n.length,
                ),
              }),
            ],
          }),
          (0, X.jsx)(`textarea`, {
            className: Y(Xt, Xn, a ? Vt : ``),
            value: n,
            placeholder: i,
            onFocus: (e) => e?.target?.select(),
            onChange: (e) =>
              t.SetSummary(
                t.GetCurEditLanguage(),
                e?.currentTarget?.value || ``,
              ),
            maxLength: 180,
            cols: 40,
            rows: 2,
          }),
        ],
      }),
      (0, X.jsx)(`div`, { className: is }),
    ],
  });
}
function Um(e) {
  let { editModel: t } = e;
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsxs)(`div`, {
        className: Ko,
        children: [
          (0, X.jsx)(`span`, {
            className: O,
            children: L(`#EventEditor_ReferencedAppIDs_Header`),
          }),
          (0, X.jsx)(H, {
            tooltip: L(`#EventEditor_ReferencedAppIDs_Tooltip`),
            className: oo,
          }),
        ],
      }),
      (0, X.jsx)(`div`, {
        className: void 0,
        children: (0, X.jsx)(Mm, {
          strLabel: L(`#EventEditor_ReferencedAppIDs_SearchLabel`),
          fnFilterSuggestion: (e) =>
            !t.GetReferencedAppIDArray().includes(Number(e.id)),
          fnOnSelected: (e) => {
            t.GetReferencedAppIDArray().includes(Number(e.id)) ||
              (t.GetReferencedAppIDArray().push(Number(e.id)),
              t.SetDirty(x.jsondata_other));
          },
          rgCorporaToSearch: [`games`, `dlc`],
        }),
      }),
      t.GetReferencedAppIDArray().length > 0 &&
        (0, X.jsx)(Hn, {
          items: t.GetReferencedAppIDArray(),
          onDelete: (e) => {
            (t.GetReferencedAppIDArray().splice(e),
              t.SetDirty(x.jsondata_other));
          },
          onReorder: () => t.SetDirty(x.jsondata_other),
          render: (e) => (0, X.jsx)(Wm, { appid: e }, `suggestion-${e}`),
        }),
    ],
  });
}
function Wm(e) {
  let { appid: t } = e,
    [n] = aa(t, {});
  return (0, X.jsx)(`div`, {
    className: void 0,
    children: (0, X.jsxs)(`div`, {
      className: void 0,
      children: [` `, zi(n?.GetName() || ``) + ` (${t})`, ` `],
    }),
  });
}
var Gm = Z.lazy(() =>
  mo(
    () => import(`./richeventeditor.js`),
    __vite__mapDeps([
      6, 1, 2, 7, 8, 3, 4, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81,
    ]),
    import.meta.url,
  ),
);
function Km(e) {
  let { editModel: t, refOnInsertImage: n } = e,
    r = Vs(),
    [i, a] = qm(t),
    o = g(() => t.GetEventType()),
    s = Ba(
      (e) => {
        if (!e) return;
        let t = (t, n) => ha(e, t, n);
        return (
          (n.current = t),
          () => {
            n.current == t && (n.current = void 0);
          }
        );
      },
      [n],
    ),
    c = Z.useMemo(() => {
      let e = _s.is_support;
      return jr({ bIncludeMedia: q.CAN_UPLOAD_IMAGES, bIncludeValveOnly: e });
    }, []);
  return (0, X.jsxs)(`div`, {
    className: Y(as, st),
    children: [
      (0, X.jsx)(`div`, {
        className: O,
        children: L(
          o == 28 ? `#EventEditor_DescriptionNews` : `#EventEditor_Description`,
        ),
      }),
      (0, X.jsxs)(`label`, {
        children: [
          (0, X.jsx)(`input`, {
            type: `checkbox`,
            checked: i,
            onChange: (e) => a(e.currentTarget.checked),
          }),
          L(`#EventEditor_UseVisualEditor`),
        ],
      }),
      i
        ? (0, X.jsx)(Z.Suspense, {
            children: (0, X.jsx)(Gm, {
              editModel: t,
              refOnInsertImage: n,
              limitBBCode: c,
            }),
          })
        : (0, X.jsx)(qi, {
            fnGetCurText: () => t.GetDescription(t.GetCurEditLanguage()),
            fnOnTextChange: (e) =>
              t.SetDescription(
                t.GetCurEditLanguage(),
                e?.currentTarget?.value || ``,
              ),
            fnSetText: (e) => t.SetDescription(t.GetCurEditLanguage(), e),
            strPlaceholder: L(`#EventEditor_Description_PlaceHolder`),
            ref: s,
            emoticonStore: r,
            bSupportHTMLImport: !0,
            showFormatHelp: `PartnerEvents`,
            limitBBCode: c,
            classNameForTextArea: Et,
            clanSteamID: t.GetClanSteamID(),
          }),
    ],
  });
}
function qm(e) {
  let t = `partnerEventsRichEditorOptIn`,
    [n, r] = Z.useState(() => (localStorage.getItem(t) ?? `1`) == `1`);
  return [
    n,
    Z.useCallback(
      (e) => {
        (localStorage.setItem(t, e ? `1` : `0`), r(e));
      },
      [t],
    ),
  ];
}
function Jm(e) {
  let { editModel: t, fnInsertImage: n } = e,
    [r, i, a] = g(() => [
      t.GetClanSteamID(),
      t.GetAppID(),
      t.GetIncludedRealmList(),
    ]);
  return q.CAN_UPLOAD_IMAGES
    ? (0, X.jsxs)(`div`, {
        className: Y(Mo, st, Mt),
        children: [
          (0, X.jsxs)(`div`, {
            className: O,
            children: [
              L(`#ImagePicker_PreviousImages2`),
              (0, X.jsx)(H, {
                tooltip: L(`#ImagePicker_Images_ttip`),
                className: oo,
              }),
            ],
          }),
          (0, X.jsx)(ja, {
            bShowLightBox: !0,
            appid: i,
            clanSteamID: r,
            imageInsertCallBack: n,
            fnSetImageURL: t.SetImageURL,
            rgRealmList: a,
            fnLangHasData: t.BHasTitleImage,
            fnGetImageHash: t.GetImageHashAndExt,
            partnerEventStore: b,
          }),
        ],
      })
    : null;
}
function Ym(e) {
  return (0, X.jsx)(`div`, {
    className: bm,
    children: (0, X.jsxs)(`div`, {
      className: Cm,
      children: [
        (0, X.jsx)(`h2`, {
          children: No(`#EventEditor_CreatorHome_Intro_Welcome`),
        }),
        (0, X.jsx)(`p`, {
          children: No(
            `#EventEditor_CreatorHome_Intro_Desc1`,
            (0, X.jsx)(`strong`, {}),
          ),
        }),
        (0, X.jsx)(`p`, {
          children: No(
            `#EventEditor_CreatorHome_Intro_Desc2`,
            (0, X.jsx)(`strong`, {}),
            (0, X.jsx)(`a`, {
              href: `https://partner.steamgames.com/doc/store/creator_homepage`,
            }),
          ),
        }),
        (0, X.jsx)(`p`, {
          children: No(
            `#EventEditor_CreatorHome_Intro_Desc3`,
            (0, X.jsx)(`strong`, {}),
          ),
        }),
        (0, X.jsx)(`p`, {
          children: (0, X.jsx)(`a`, {
            href: `https://partner.steamgames.com/doc/marketing/event_tools/creatorhome/tools`,
            children: No(`#EventEditor_CreatorHome_Intro_Documentation`),
          }),
        }),
      ],
    }),
  });
}
function Xm(e) {
  let { editModel: t } = e,
    [n, r] = g(() => [t.GetGID(), t.GetClanAccountID()]),
    i = !!n,
    { creatorHome: a } = ri(r),
    o = a ? a.GetCreatorHomeURL(null) + `admin/curator_edit` : void 0,
    s = a ? a.GetCreatorHomeURL(null) + `#edit` : void 0;
  return (0, X.jsxs)(`div`, {
    className: xm,
    children: [
      (0, X.jsx)(Zm, { editModel: t }),
      (0, X.jsx)(Bm, { editModel: t }),
      i &&
        a &&
        (0, X.jsx)(X.Fragment, {
          children: (0, X.jsxs)(`div`, {
            className: `-XEYTCWIGxs-`,
            children: [
              (0, X.jsxs)(`div`, {
                className: `j8oUDbYhdy0-`,
                children: [
                  (0, X.jsx)(`div`, {
                    className: `UFI2p-R7F6s-`,
                    children: L(
                      `#EventEditor_Event_CreatorHome_AdminAvatarLabel`,
                    ),
                  }),
                  (0, X.jsx)(`img`, {
                    src: a.GetAvatarURLFullSize(),
                    className: `AY2g3Nfbn5Y-`,
                  }),
                  (0, X.jsx)(`div`, {
                    className: `wh8u2HdFVqY-`,
                    children: No(
                      `#EventEditor_Event_CreatorHome_AdminLinkAvatarLabel`,
                      s ? (0, X.jsx)(`a`, { href: s }) : void 0,
                    ),
                  }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: `b3hg8bFHFyU-`,
                children: [
                  (0, X.jsx)(`div`, {
                    className: `UFI2p-R7F6s-`,
                    children: L(
                      `#EventEditor_Event_CreatorHome_AdminTaglineLabel`,
                    ),
                  }),
                  (0, X.jsx)(`div`, {
                    className: `CQW5hM3pY6g-`,
                    children: a.GetTagLine(),
                  }),
                  (0, X.jsx)(`div`, {
                    className: `wh8u2HdFVqY-`,
                    children: No(
                      `#EventEditor_Event_CreatorHome_AdminLinkTaglineLabel`,
                      o ? (0, X.jsx)(`a`, { href: o }) : void 0,
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      !i &&
        (0, X.jsx)(`div`, {
          className: `_4b1xTV-MdoY-`,
          children: L(`#Sale_SaveFirst_CreatorHome`),
        }),
      (0, X.jsx)(`br`, {}),
    ],
  });
}
function Zm(e) {
  let { editModel: t } = e,
    [n, r, i] = g(() => [
      t.GetGID(),
      t.GetClanAccountID(),
      t.BVisible() || t.BUnlisted(),
    ]),
    { creatorHome: a } = ri(r),
    o = a ? a.GetCreatorHomeURL(null) + `admin/creatorhome_link` : void 0,
    s = a?.GetLinkedEventGID() == n;
  return (0, X.jsxs)(`div`, {
    className: Y(Sm, (!i || !s) && `U-zW2IsEj04-`),
    children: [
      !i &&
        (0, X.jsx)(`div`, {
          children: L(`#EventEditor_Event_CreatorHome_Hidden`),
        }),
      i &&
        !s &&
        (0, X.jsx)(`div`, {
          children: No(
            `#EventEditor_Event_CreatorHome_NotSelected`,
            (0, X.jsx)(`b`, {}),
            o ? (0, X.jsx)(`a`, { href: o }) : void 0,
          ),
        }),
      i &&
        s &&
        (0, X.jsx)(`div`, {
          children: No(
            `#EventEditor_Event_CreatorHome_Selected`,
            o ? (0, X.jsx)(`a`, { href: o }) : void 0,
          ),
        }),
    ],
  });
}
function Qm(e) {
  let { editModel: t, mode: n } = e,
    [r, i] = g(() => [t.GetGID(), t.GetEventType()]);
  return r
    ? (0, X.jsx)(Xe, {
        children: (0, X.jsx)(Dc, {
          children: (0, X.jsx)($m, { editModel: t, mode: n }),
        }),
      })
    : i == 36
      ? (0, X.jsx)(Xm, { editModel: t })
      : (0, X.jsx)(`div`, {
          className: Y(An, `SaleContainer`),
          children: L(`#Sale_SaveFirst`),
        });
}
function $m(e) {
  let { editModel: t, mode: n } = e,
    [r, i, a, o, s, c, l] = g(() => [
      t.GetEventType(),
      t.GetEventModel().jsondata.sale_presenters,
      t.GetEventModel().jsondata,
      t.GetEventModel().clanSteamID,
      t.GetGID(),
      t.GetEventModel().jsondata.sale_presenters?.length > 0,
      t.BVisible(),
    ]),
    { creatorHome: u } = ri(o.GetAccountID()),
    { bRequiresHostDisclaimer: d } = Jt(o.GetAccountID(), s),
    f = Ur.includes(o.GetAccountID()),
    p = r == 36;
  (0, Z.useEffect)(() => {
    ($n.Get().EnsureLoaded(t),
      !$n.Get().BHasExplicitSettings(t) &&
        t.GetSaleSectionCount() > 10 &&
        Kn());
  }, [t]);
  let m = Z.useCallback((e) => {
      yn(e.strSectionId) && On(e.strSectionId);
    }, []),
    h = ua(t.GetClanSteamID()),
    _ = ua(t.GetClanSteamID(), !0);
  if (
    !t.BIsSourceEventSaleEnabled() &&
    a.clone_from_event_gid &&
    a.clone_from_sale_enabled &&
    (!u || !u.BHasClanAccountFlagSet(32))
  )
    return (0, X.jsxs)(`div`, {
      className: Y(An, `SaleContainer`),
      children: [
        (0, X.jsx)(`div`, {
          className: Zi,
          children: L(`#Sale_CloneNotReady`),
        }),
        (0, X.jsx)(Cp, { mode: n }),
      ],
    });
  let v = `#Sale_title`,
    ee = `doc/marketing/event_tools/sales/tools`;
  n == 1
    ? ((v = `#Sale_UpdateLandingPage_title`),
      (ee = `doc/marketing/event_tools/updatelandingpages/tools`))
    : n == 2 &&
      ((v = `#Sale_CreatorHome_title`),
      (ee = `doc/marketing/event_tools/creatorhome/tools`));
  let { bVisible: te } = si(t.GetEventModel(), _),
    { bVisible: ne } = ci(t.GetEventModel(), _),
    { bVisible: re } = li(t.GetEventModel()),
    ie = te || ne || (re && h);
  return (0, X.jsxs)(`div`, {
    className: Y(An, `SaleContainer`),
    children: [
      !p && (0, X.jsx)(Cp, { mode: n }),
      (0, X.jsxs)(`div`, {
        className: Ko,
        children: [
          (0, X.jsx)(`span`, { className: Y(O, Bs), children: L(v) }),
          (0, X.jsx)(qa, {
            href: R.PARTNER_BASE_URL + ee,
            className: Y(uo),
            children: (0, X.jsx)(`span`, {
              children: L(`#Broadcast_documentation`),
            }),
          }),
        ],
      }),
      p && (0, X.jsx)(Xm, { editModel: t }),
      (0, X.jsxs)(qf, {
        children: [
          !(f || (d && !c)) &&
            (0, X.jsx)(Ef, {
              clanSteamID: o,
              gidClanEvent: s,
              rgSalePresenters: i,
              bIsEventVisible: l,
              fnCleanSaleEventPresenters: () => {
                ((t.GetEventModel().jsondata.sale_presenters = void 0),
                  t.SetDirty(x.jsondata_sales));
              },
              bPublishTab: !1,
            }),
          (0, X.jsx)(Jf, {}),
          (0, X.jsxs)(`div`, {
            children: [
              (0, X.jsx)($p, { children: (0, X.jsx)(qp, {}) }),
              (0, X.jsx)(Up, { editModel: t, onSelected: m }),
              (0, X.jsx)(vp, { editModel: t }),
              p &&
                (0, X.jsx)(pp, {
                  strSectionId: `SalePageEdit_CreatorHomeTutorial`,
                  hasMinimize: !0,
                  strTitle: L(`#Sale_PageCreatorHomeTutorial`),
                  children: (0, X.jsx)(Ym, {}),
                }),
              ie &&
                (0, X.jsx)(pp, {
                  strSectionId: `SalePageEdit_Config`,
                  hasMinimize: !0,
                  strTitle: L(`#Sale_PageConfigOptions`),
                  children: (0, X.jsx)(op, {
                    salePage: te,
                    updateLandingPage: ne,
                  }),
                }),
              (0, X.jsx)(eh, { ...e }),
              (0, X.jsx)(pp, {
                strSectionId: `SalePageEdit_AllArtworkCtn`,
                hasMinimize: !0,
                strTitle: L(
                  p ? `#Sale_Artwork_Sections_Page` : `#Sale_Artwork_Sections`,
                ),
                children: (0, X.jsx)(mf, { editModel: t }),
              }),
              (t.BHasTag(`contenthub`) ||
                t.GetEventModel().BUsesContentHubForItemSource()) &&
                (0, X.jsx)(pp, {
                  strSectionId: `SalePageEdit_ContentHub`,
                  hasMinimize: !0,
                  strTitle: `Content Hub Settings`,
                  strToolTip: `Manage settings for content hubs, including overrides for specific hubs and hub-based sales.`,
                  children: (0, X.jsx)(Bd, { editModel: t }),
                }),
              (0, X.jsx)(th, { editModel: t }),
              (0, X.jsx)(pp, {
                strSectionId: `SalePageEdit_SocialModule`,
                hasMinimize: !0,
                strTitle: L(`#Sale_DefaultSocialModule`),
                children: (0, X.jsx)(mm, { editModel: t }),
              }),
              (0, X.jsx)(`div`, { className: ft }),
              !p &&
                (0, X.jsx)(pp, {
                  strSectionId: `SalePageEdit_BrowseMore`,
                  strTitle: `(VO) ${L(`#Sale_BrowseMore`)}`,
                  valveOnlyClanSteamID: t.GetClanSteamID(),
                  requireAdmin: !0,
                  children: (0, X.jsx)(rh, { editModel: t }),
                }),
              !p &&
                (0, X.jsx)(pp, {
                  strSectionId: `SalePageEdit_SubMenuEditor`,
                  hasMinimize: !0,
                  strTitle: `(VO) Sub Menu Editor`,
                  valveOnlyClanSteamID: t.GetClanSteamID(),
                  dataToCopy: on.k_EventData_SubMenu,
                  children: (0, X.jsx)(kt, { editModel: t }),
                }),
              (0, X.jsx)(pp, {
                strSectionId: `SalePageEdit_CustomCSSCode`,
                hasMinimize: !0,
                strTitle: `(VO) Custom CSS`,
                valveOnlyClanSteamID: t.GetClanSteamID(),
                children: (0, X.jsx)(Xp, { editModel: t }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function eh(e) {
  let { editModel: t, mode: n } = e,
    [r, i, a, o] = g(() => [
      t.GetEventType(),
      t.GetEventModel().clanSteamID,
      t.GetEventModel().GID,
      t.GetEventModel().jsondata.sale_creator_home_filter_listid,
    ]),
    s = vn(i.GetAccountID(), o),
    {
      bLoading: c,
      strExternalSaleEventType: l,
      fnSetExternalSaleEventType: u,
    } = Gn(i.GetAccountID(), a),
    d = ki(t.GetEventModel());
  if (c) return (0, X.jsx)(C, { size: `small` });
  let f = r == 36;
  return (0, X.jsx)(X.Fragment, {
    children: (0, X.jsxs)(pp, {
      strSectionId: `SalePageEdit_TaggedItems`,
      hasMinimize: !0,
      strToolTip: L(`#Sale_TagFilter_SectionTooltip`),
      strTitle: L(
        `#Sale_TaggedItemsSection`,
        d ? (s?.length ?? 0) : t.GetEventModel().GetTaggedItems().length,
      ),
      children: [
        d && (0, X.jsx)(lr, { editModel: t }),
        !d && (0, X.jsx)(fn, { editModel: t }),
        !f &&
          (0, X.jsxs)(E, {
            clanSteamID: i,
            children: [
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(Cf, {
                strExternalSaleEventType: l,
                fnSetExternalSaleEventType: u,
              }),
            ],
          }),
      ],
    }),
  });
}
function th(e) {
  let { editModel: t } = e,
    n = t.GetCurEditLanguage(),
    r = t.GetEventModel(),
    [i, a, o, s] = g(() => {
      let e = -1,
        t = new Map();
      for (let [n, i] of r.GetSaleSections().entries())
        (t.set(i.section_type, (t.get(i.section_type) || 0) + 1),
          e == -1 && i.section_type == `tabs` && (e = n));
      return [r.GetSaleSections().length, t, e, et()];
    }),
    [c, l] = Z.useState(``),
    u = (e) => {
      let t = c?.trim().toLowerCase() ?? ``;
      if (
        t.length == 0 ||
        e.internal_section_title?.toLowerCase().includes(t) ||
        e.section_type.includes(t)
      )
        return !0;
      let i = Ln(e, r, n, r.clanSteamID.GetAccountID(), 1);
      return typeof i == `string` && i.toLowerCase().includes(t);
    },
    d = s !== void 0 || c?.trim()?.length > 0,
    f = r
      .GetSaleSections()
      .filter((e, t) => (s === void 0 || t < o || at(s, e)) && u(e)),
    p = ih(f);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsxs)(`div`, {
        className: Kt,
        children: [
          (0, X.jsx)(`div`, {
            className: O,
            children: L(`#Sale_Sections_Title`),
          }),
          (0, X.jsx)(`div`, {
            className: lt,
            children: L(`#Sale_Sections_Search`),
          }),
          (0, X.jsx)(N, {
            type: `text`,
            value: c,
            onChange: (e) => l(e.target.value),
          }),
        ],
      }),
      i == 0
        ? (0, X.jsx)(nh, {})
        : (0, X.jsx)(Hn, {
            items: f,
            bDisabled: d,
            onMove: (e, n) => {
              (co(t.GetEventModel().jsondata.sale_sections, e, n),
                t.SetDirty(x.jsondata_sales));
            },
            render: (e, r) => {
              let i = Ti + e.unique_id,
                o = sr(e.section_type) && a.get(e.section_type) > 1;
              return (0, X.jsx)(
                kc,
                {
                  strSectionId: i,
                  children: (0, X.jsx)(it, {
                    ref:
                      r == f.length - 1 ? (e) => p(e, f[r].unique_id) : void 0,
                    index: r,
                    saleSection: e,
                    isDuplicateSingleton: o,
                    editModel: t,
                    editLanguage: n,
                  }),
                },
                Ti + (e.unique_id ?? r),
              );
            },
          }),
      (0, X.jsxs)(`div`, {
        id: `sale_editor_button_after_all_sections`,
        className: ur,
        children: [
          (0, X.jsx)(`div`, {
            className: Y(Ao, `SaleSectionHeader`),
            children: L(`#Sale_AddNewSection_Title`),
          }),
          (0, X.jsx)(`p`, { children: L(`#Sale_AddNewSection_Desc`) }),
          (0, X.jsx)(Gp, { editModel: t }),
        ],
      }),
    ],
  });
}
function nh(e) {
  return (0, X.jsxs)(`div`, {
    id: `NoSaleSections`,
    className: Y(jt, Pt),
    children: [
      (0, X.jsx)(`div`, {
        className: Y(Ao, `SaleSectionHeader`),
        children: L(`#Sale_SectionListPlaceholder_Header`),
      }),
      (0, X.jsx)(`div`, {
        className: Lt,
        children: L(`#Sale_SectionListPlaceholder_Content`),
      }),
    ],
  });
}
function rh(e) {
  let { editModel: t } = e,
    n = t.GetEventModel().jsondata,
    [r, i, a, o] = g(() => [
      n.sale_browsemore_url,
      n.sale_browsemore_color,
      n.sale_browsemore_bgcolor,
      n.sale_browse_more_button,
    ]),
    { openColorPicker: s } = di(),
    c = (e) => {
      s(e, { color: i, onChange: (e) => f(e, `sale_browsemore_color`) });
    },
    l = (e) => {
      let { sale_browsemore_bgcolor: n } = t.GetEventModel().jsondata;
      s(e, { color: n, onChange: (e) => f(e, `sale_browsemore_bgcolor`) });
    },
    u = (e) => {
      ((t.GetEventModel().jsondata.sale_browse_more_button = e),
        t.SetDirty(x.jsondata_sales));
    },
    d = (e) => {
      let n = t.GetEventModel().jsondata;
      ((n[e.target.name] = e.target.value), t.SetDirty(x.jsondata_sales));
    },
    f = (e, n) => {
      let r = t.GetEventModel().jsondata;
      ((r[n] = e), t.SetDirty(x.jsondata_sales));
    };
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(z, {
        onChange: u,
        label: L(`#Sale_BrowseMore_Desc`),
        checked: o,
      }),
      o &&
        (0, X.jsxs)(`div`, {
          children: [
            (0, X.jsx)(N, {
              type: `text`,
              label: L(`#Sale_BrowseMore_URL`),
              name: `sale_browsemore_url`,
              placeholder: L(`#Sale_BrowseMore_URL`),
              value: r,
              onChange: d,
            }),
            (0, X.jsx)(I, {
              onClick: c,
              className: `ized0rR3LUQ-`,
              style: { color: i, backgroundColor: a },
              children: L(`#Sale_Section_Label_Color`),
            }),
            (0, X.jsx)(I, {
              onClick: l,
              className: `ized0rR3LUQ-`,
              style: { color: i, backgroundColor: a },
              children: L(`#Sale_Section_Background_Color`),
            }),
            (0, X.jsx)(ae, {
              text: L(`#Sale_SeeAllSpecials`),
              url: ``,
              color: i,
              bgcolor: a,
            }),
          ],
        }),
    ],
  });
}
function ih(e) {
  let t = e.map((e) => e.unique_id).join(`,`),
    [n, r] = Z.useState(t);
  return (
    Z.useEffect(() => {
      r(t);
    }, [t]),
    (e, r) => {
      if (!e) return;
      let i = n.length == 0 && r > 0,
        a = n + `,` + r == t;
      (i || a) && e.scrollIntoView({ behavior: `smooth`, block: `start` });
    }
  );
}
function ah(e, t) {
  let n = o({
    queryKey: [`useSaleSectionAggregateData`, e, t],
    queryFn: async () => {
      let n = zo.InitFromClanID(t, gs.EUNIVERSE),
        r = `${gs.COMMUNITY_BASE_URL}gid/${n.ConvertTo64BitString()}/ajaxgetsalesectionstats?event_gid=${e}`,
        i = { event_gid: e };
      return (await Q.default.get(r, { params: i })).data.results || [];
    },
    enabled: !!(e && t),
  });
  return n.isLoading ? null : n.data;
}
function oh(e) {
  let { editModel: t } = e,
    n = Vi(),
    [r, i, a] = g(() => [
      t.BHasSaleEnabled(),
      t.BHidden(),
      t.GetEventStartTime(),
    ]);
  return !r || i || a > n
    ? (0, X.jsx)(`div`, {
        children: `Sale Page not visible or started. No stats to share`,
      })
    : (0, X.jsx)(sh, { ...e });
}
function sh(e) {
  let { editModel: t } = e,
    n = ah(t.GetGID(), t.GetClanAccountID());
  return n
    ? (0, X.jsxs)(`div`, {
        children: [
          (0, X.jsx)(I, {
            onClick: () => {
              let e = [];
              (e.push([
                `Feature`,
                `Date`,
                `Impression`,
                `Visits`,
                `Ownership Impression`,
                `Owner Visit`,
                `Wishlist`,
                `Add to Cart`,
                `Ignore`,
              ]),
                n.forEach((t) => {
                  e.push([
                    `` + t.feature,
                    us(t.rtdate + 86400),
                    `` + t.total_impressions,
                    `` + t.total_views,
                    `` + t.total_owner_impressions,
                    `` + t.total_owner_views,
                    `` + t.total_wishlists,
                    `` + t.total_add_to_carts,
                    `` + t.total_ignores,
                  ]);
                }));
              let r = (t.GetName() + `_stats`).replace(` `, `_`) + `.csv`;
              ma.WriteCSVToFile(e, r);
            },
            children: `Export to CSV`,
          }),
          (0, X.jsx)(uh, { rgStats: n }),
          (0, X.jsx)(fh, { rgStats: n }),
        ],
      })
    : (0, X.jsx)(C, {});
}
function ch(e, t) {
  return !t || t == 0 ? `` : `` + ((e * 100) / t).toFixed(1);
}
function lh(e) {
  return new Intl.NumberFormat(vo(), {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(e);
}
function uh(e) {
  let { rgStats: t } = e,
    n = (0, Z.useMemo)(() => {
      let e = new Map();
      return (
        t.forEach((t) => {
          if (e.has(t.feature)) {
            let n = e.get(t.feature);
            ((n.total_views += t.total_views),
              (n.total_impressions += t.total_impressions),
              (n.total_owner_views += t.total_owner_views),
              (n.total_owner_impressions += t.total_owner_impressions),
              (n.total_wishlists += t.total_wishlists),
              (n.total_ignores += t.total_ignores),
              (n.total_add_to_carts += t.total_add_to_carts),
              e.set(t.feature, n));
          } else e.set(t.feature, { ...t });
        }),
        Array.from(e.values()).sort(
          (e, t) => t.total_impressions - e.total_impressions,
        )
      );
    }, [t]);
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(`h3`, { children: `Total For Entire Sale` }),
      (0, X.jsx)(dh, { rgStats: n }),
    ],
  });
}
function dh(e) {
  let { rgStats: t } = e;
  return (0, X.jsx)(`div`, {
    children: (0, X.jsxs)(`table`, {
      children: [
        (0, X.jsxs)(`thead`, {
          children: [
            (0, X.jsx)(`th`, { children: `Feature` }),
            (0, X.jsx)(`th`, { children: `Impressions` }),
            (0, X.jsx)(`th`, { children: `Visits` }),
            (0, X.jsx)(`th`, { children: `Impression to Visits` }),
            (0, X.jsx)(`th`, { children: `Owner Impressions` }),
            (0, X.jsx)(`th`, { children: `Owner Visits` }),
            (0, X.jsx)(`th`, { children: `Wishlist` }),
            (0, X.jsx)(`th`, { children: `Impression to Wishlist` }),
            (0, X.jsx)(`th`, { children: `Add to Cart` }),
            (0, X.jsx)(`th`, { children: `Ignore` }),
          ],
        }),
        (0, X.jsx)(`tbody`, {
          children: t.map((e) =>
            (0, X.jsxs)(
              `tr`,
              {
                children: [
                  (0, X.jsx)(`td`, { children: e.feature }),
                  (0, X.jsx)(`td`, { children: lh(e.total_impressions) }),
                  (0, X.jsx)(`td`, { children: lh(e.total_views) }),
                  (0, X.jsx)(`td`, {
                    children: ch(e.total_views, e.total_impressions),
                  }),
                  (0, X.jsx)(`td`, { children: lh(e.total_owner_impressions) }),
                  (0, X.jsx)(`td`, { children: lh(e.total_owner_views) }),
                  (0, X.jsx)(`td`, { children: lh(e.total_wishlists) }),
                  (0, X.jsx)(`td`, {
                    children: ch(e.total_wishlists, e.total_impressions),
                  }),
                  (0, X.jsx)(`td`, { children: lh(e.total_add_to_carts) }),
                  (0, X.jsx)(`td`, { children: lh(e.total_ignores) }),
                ],
              },
              e.feature + `_` + e.rtdate,
            ),
          ),
        }),
      ],
    }),
  });
}
function fh(e) {
  let { rgStats: t } = e,
    n = (0, Z.useMemo)(() => {
      let e = new Set();
      return (
        t.forEach((t) => {
          e.add(t.rtdate);
        }),
        Array.from(e).sort((e, t) => e - t)
      );
    }, [t]);
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(`h1`, { children: `By Each Date` }),
      n.map((e) => (0, X.jsx)(ph, { rgStats: t, rtDate: e }, `` + e)),
    ],
  });
}
function ph(e) {
  let { rgStats: t, rtDate: n } = e,
    r = (0, Z.useMemo)(
      () =>
        t
          .filter((e) => e.rtdate == n)
          .sort((e, t) => t.total_impressions - e.total_impressions),
      [t, n],
    );
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsxs)(`h3`, { children: [`Stats for: `, us(n + 86400)] }),
      (0, X.jsx)(dh, { rgStats: r }),
    ],
  });
}
var mh = `vo_sale_store_capsules`,
  hh = [
    {
      type: `header_2x`,
      artworkType: `sale_store_capsule_header`,
      strDesignToken: `#EventEditor_SaleStoreCapsule_header_Design`,
      strUsageToken: `#EventEditor_SaleStoreCapsule_header_Usage`,
    },
    {
      type: `small_capsule_2x`,
      artworkType: `sale_store_capsule_small`,
      strDesignToken: `#EventEditor_SaleStoreCapsule_small_Design`,
      strUsageToken: `#EventEditor_SaleStoreCapsule_small_Usage`,
    },
    {
      type: `main_capsule_2x`,
      artworkType: `sale_store_capsule_main`,
      strDesignToken: `#EventEditor_SaleStoreCapsule_main_Design`,
      strUsageToken: `#EventEditor_SaleStoreCapsule_main_Usage`,
    },
    {
      type: `hero_capsule_2x`,
      artworkType: `sale_store_capsule_vertical`,
      strDesignToken: `#EventEditor_SaleStoreCapsule_vertical_Design`,
      strUsageToken: `#EventEditor_SaleStoreCapsule_vertical_Usage`,
    },
  ],
  gh = hh.map((e) => e.artworkType);
function _h(e) {
  return `#EventEditor_ArtworkType_` + e.artworkType;
}
function vh(e) {
  return hh.find((t) => t.artworkType === e)?.type;
}
function yh(e, t, n) {
  return e?.[t]?.[n] ?? null;
}
function bh(e, t) {
  return t ? `${R.STORE_ITEM_BASE_URL}steam/clans/${e}/${t}` : void 0;
}
function xh(e, t) {
  let n = e?.[t];
  return n ? Array.from(n.keys()).filter((e) => !!n[e]?.image) : [];
}
function Sh(e, t, n, r) {
  let i = Go([...(e?.[t] ?? [])], 32, null);
  return ((i[n] = r), { ...e, [t]: i });
}
function Ch(e, t) {
  let n = { ...e };
  return (delete n[t], n);
}
var wh = `dpDkUTjygsI-`,
  Th = `X3Yd08f5Ld4-`,
  Eh = `IrwJWuvsvB8-`,
  Dh = `VST3hTa0hIQ-`,
  Oh = `qTQFVLSufR8-`;
function kh(e, t) {
  return e.BHasSaleEnabled() && si(e, t).bVisible;
}
function Ah(e, t) {
  return kh(e.GetEventModel(), t)
    ? t || e.BHasTag(`vo_sale_store_capsules`)
    : !1;
}
function jh(e) {
  let { editModel: t } = e,
    r = (0, Z.useCallback)(
      (e, r, i) => {
        n(() => {
          let n = t.GetEventModel().jsondata;
          ((n.sale_store_capsules = Sh(n.sale_store_capsules, e, r, i)),
            t.SetDirty(x.jsondata_image));
        });
      },
      [t],
    ),
    i = (0, Z.useCallback)(
      (e) => {
        n(() => {
          let n = t.GetEventModel().jsondata;
          ((n.sale_store_capsules = Ch(n.sale_store_capsules, e)),
            t.SetDirty(x.jsondata_image));
        });
      },
      [t],
    ),
    a = (0, Z.useCallback)(
      (e, t, n, i, a) => {
        let o = vh(a);
        if (!o) {
          es(!1, `Unexpected artwork type for a sale store capsule: ` + a);
          return;
        }
        let s = Ft(e, t);
        s?.image
          ? r(o, n, s)
          : es(!1, `Sale store capsule conversion produced no image: ` + e);
      },
      [r],
    ),
    o = g(() => !t.BHasTag(mh));
  return (0, X.jsxs)(`div`, {
    className: Y(Aa, o && `u6DPgTclyv4-`),
    children: [
      (0, X.jsx)(`div`, {
        className: Na,
        children:
          (o ? `(VO) ` : ``) + L(`#EventEditor_SaleStoreCapsules_Title`),
      }),
      (0, X.jsxs)(`div`, {
        className: Y(Sa, ga),
        children: [
          (0, X.jsx)(`p`, {
            children: L(`#EventEditor_SaleStoreCapsules_Tip1`),
          }),
          (0, X.jsx)(`p`, {
            children: L(`#EventEditor_SaleStoreCapsules_Tip2`),
          }),
        ],
      }),
      (0, X.jsx)(`div`, {
        className: Y(Sa, wh),
        children: (0, X.jsx)(Bt, {
          rgRealmList: t.GetIncludedRealmList(),
          rgSupportArtwork: [...gh],
          strUploadAjaxURL: nn(t.GetClanSteamID()),
          fnOnUploadSuccess: a,
          bTwoPhaseUpload: !0,
          bDirectTempStorageUpload: !0,
        }),
      }),
      hh.map((e) =>
        (0, X.jsx)(
          Mh,
          { editModel: t, info: e, fnSetCapsuleMedia: r, fnClearCapsule: i },
          e.type,
        ),
      ),
    ],
  });
}
function Mh(e) {
  let { editModel: t, info: n, fnSetCapsuleMedia: r, fnClearCapsule: i } = e,
    a = g(() => t.GetEventModel().jsondata.sale_store_capsules),
    o = t.GetClanAccountID(),
    s = (0, Z.useCallback)(
      (e) => {
        let t = yh(a, n.type, e);
        return t ? bh(o, t.image_2x ?? t.image) : null;
      },
      [a, n.type, o],
    ),
    c = (0, Z.useMemo)(() => xh(a, n.type), [a, n.type]),
    l = Ki[n.artworkType];
  return (0, X.jsxs)(`div`, {
    className: Th,
    children: [
      (0, X.jsxs)(`div`, {
        className: Eh,
        children: [
          L(_h(n)),
          (0, X.jsxs)(`span`, {
            className: Dh,
            children: [Xi(l.width), `px x `, Xi(l.height), `px`],
          }),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: Y(Sa, ga),
        children: [
          (0, X.jsxs)(`p`, {
            children: [
              (0, X.jsx)(`b`, { children: L(`#selectimage_tip_design_title`) }),
              `: `,
              L(n.strDesignToken),
            ],
          }),
          (0, X.jsxs)(`p`, {
            children: [
              (0, X.jsx)(`b`, { children: L(`#selectimage_tip_usage_title`) }),
              `: `,
              L(n.strUsageToken),
            ],
          }),
        ],
      }),
      (0, X.jsx)(ut, {
        rgAssetLangs: c,
        fnGetAssetUrl: s,
        fnDeletAssetLang: (e) => r(n.type, e, null),
        fnDeleteAllAssets: () => i(n.type),
        imageClassname: Oh,
        bVerifyAssets: !0,
      }),
    ],
  });
}
var $ = class {
  m_editModel = void 0;
  constructor(e) {
    (s(this), (this.m_editModel = e));
  }
  GetJSONData() {
    return this.m_editModel.GetEventModel().jsondata;
  }
  GetBroadcastAllowList() {
    return this.GetJSONData().broadcast_whitelist;
  }
  SetBroadcastEnabled(e) {
    this.GetJSONData().bBroadcastEnabled !== e &&
      ((this.GetJSONData().bBroadcastEnabled = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetBroadcastForceBanner(e) {
    this.GetJSONData().broadcast_force_banner !== e &&
      ((this.GetJSONData().broadcast_force_banner = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetChangeSetting(e) {
    this.GetJSONData().broadcastChatSetting !== e &&
      ((this.GetJSONData().broadcastChatSetting = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetTitleToken(e) {
    this.GetJSONData().default_broadcast_title !== e &&
      ((this.GetJSONData().default_broadcast_title = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetCustomTitleLocalize(e, t) {
    this.GetJSONData().localized_broadcast_title[e] !== t &&
      ((this.GetJSONData().localized_broadcast_title[e] = t),
      (this.GetJSONData().localized_broadcast_title = [
        ...this.GetJSONData().localized_broadcast_title,
      ]),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  AddAccountToWhiteList(e) {
    let t = this.GetJSONData().broadcast_whitelist;
    t.includes(e) ||
      (t.push(e),
      (this.GetJSONData().broadcast_whitelist = [
        ...this.GetJSONData().broadcast_whitelist,
      ]),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  DeleteWhiteListAccount(e) {
    let t = this.GetJSONData().broadcast_whitelist.indexOf(e);
    t < 0 ||
      (this.GetJSONData().broadcast_whitelist.splice(t, 1),
      this.GetJSONData().broadcast_language &&
        this.GetJSONData().broadcast_language.length > t &&
        this.GetJSONData().broadcast_language.splice(t, 1),
      this.GetJSONData().broadcast_priority &&
        this.GetJSONData().broadcast_priority.length > t &&
        this.GetJSONData().broadcast_priority.splice(t, 1),
      (this.GetJSONData().broadcast_whitelist = [
        ...this.GetJSONData().broadcast_whitelist,
      ]),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetWhiteListAccountLanguage(e, t) {
    let n = this.GetJSONData().broadcast_whitelist.indexOf(e);
    if (!(n < 0) && n < this.GetJSONData().broadcast_whitelist.length) {
      if (!this.GetJSONData().broadcast_language) {
        if (t != -1) this.GetJSONData().broadcast_language = [];
        else return;
      }
      let e = this.GetJSONData().broadcast_language;
      if (e.length < n && t == -1) return;
      for (; e.length <= n;) e.push(-1);
      if (e[n] != t) {
        for (e[n] = t; e.length > 0 && e[e.length - 1] == -1;) e.pop();
        (e.length == 0
          ? (this.GetJSONData().broadcast_language = void 0)
          : (this.GetJSONData().broadcast_language = [
              ...this.GetJSONData().broadcast_language,
            ]),
          this.m_editModel.SetDirty(x.jsondata_broadcast));
      }
    }
  }
  SetWhiteListAccountPriority(e, t) {
    let n = this.GetJSONData().broadcast_whitelist.indexOf(e);
    if (n < 0) return;
    let r = Go(this.GetJSONData().broadcast_priority || [], n + 1, ``);
    for (r[n] = t; r.length > 0 && !r[r.length - 1];) r.pop();
    ((this.GetJSONData().broadcast_priority = r),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  GetWhiteListAccountPriority(e, t) {
    let n = this.GetJSONData().broadcast_whitelist.indexOf(e);
    return n < 0 ||
      !this.GetJSONData().broadcast_priority ||
      n >= this.GetJSONData().broadcast_priority.length
      ? t
      : this.GetJSONData().broadcast_priority[n] || t;
  }
  RemoveWhiteListAtIndex(e) {
    this.GetJSONData().broadcast_whitelist.length > e &&
      (this.GetJSONData().broadcast_whitelist.splice(e, 1),
      (this.GetJSONData().broadcast_whitelist = [
        ...this.GetJSONData().broadcast_whitelist,
      ]),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  ClearWhiteList() {
    this.GetJSONData().broadcast_whitelist.length > 0 &&
      ((this.GetJSONData().broadcast_whitelist = []),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  GetBroadcastContentType() {
    return this.GetJSONData().broadcast_content_type;
  }
  SetBroadcastContentType(e) {
    this.GetJSONData().broadcast_content_type != e &&
      ((this.GetJSONData().broadcast_content_type = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  GetPrerollVideo() {
    return this.GetJSONData().broadcast_preroll_vod_appid;
  }
  SetPrerollVODAppID(e) {
    this.GetJSONData().broadcast_preroll_vod_appid !== e &&
      ((this.GetJSONData().broadcast_preroll_vod_appid = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  GetPrerollTrailer() {
    return {
      strAppid: this.GetJSONData().broadcast_preroll_trailer_appid,
      strTrailerid: this.GetJSONData().broadcsat_preroll_trailer_id,
    };
  }
  SetPrerollTrailer(e, t) {
    (this.GetJSONData().broadcast_preroll_trailer_appid !== e ||
      this.GetJSONData().broadcsat_preroll_trailer_id !== t) &&
      ((this.GetJSONData().broadcast_preroll_trailer_appid = e),
      (this.GetJSONData().broadcsat_preroll_trailer_id = t),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetDropsEnabled(e) {
    this.GetJSONData().broadcast_item_drops_enabled != e &&
      (e
        ? ((this.GetJSONData().broadcast_item_drops_enabled = !0),
          (this.GetJSONData().broadcast_item_drops_manual = !1),
          (this.GetJSONData().broadcast_item_drops_min_watch_time_minutes = 30))
        : ((this.GetJSONData().broadcast_item_drops_enabled = void 0),
          (this.GetJSONData().broadcast_item_drops_manual = void 0),
          (this.GetJSONData().broadcast_item_drops_min_watch_time_minutes =
            void 0),
          (this.GetJSONData().broadcast_item_drops_details_clan_accountid =
            void 0),
          (this.GetJSONData().broadcast_item_drops_details_event_gid = void 0)),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetItemDropManual(e) {
    this.GetJSONData().broadcast_item_drops_manual != e &&
      ((this.GetJSONData().broadcast_item_drops_manual = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetItemDropMinutes(e) {
    this.GetJSONData().broadcast_item_drops_min_watch_time_minutes != e &&
      ((this.GetJSONData().broadcast_item_drops_min_watch_time_minutes = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetItemDropDetailEvents(e, t) {
    (this.GetJSONData().broadcast_item_drops_details_clan_accountid != e ||
      this.GetJSONData().broadcast_item_drops_details_event_gid != t) &&
      ((this.GetJSONData().broadcast_item_drops_details_event_gid = t),
      (this.GetJSONData().broadcast_item_drops_details_clan_accountid = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetWidePlayerLayout(e) {
    this.GetJSONData().broadcast_display_wide_player != e &&
      ((this.GetJSONData().broadcast_display_wide_player = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetWidePlayerSupportChat(e) {
    this.GetJSONData().broadcast_dispaly_wide_player_allow_chat != e &&
      ((this.GetJSONData().broadcast_dispaly_wide_player_allow_chat = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
  SetChatAnnouncementGiveawayGID(e) {
    this.GetJSONData().broadcast_chat_announcement_giveaway != e &&
      ((this.GetJSONData().broadcast_chat_announcement_giveaway = e),
      this.m_editModel.SetDirty(x.jsondata_broadcast));
  }
};
(D([u], $.prototype, `m_editModel`, void 0),
  D([m], $.prototype, `SetBroadcastEnabled`, null),
  D([m], $.prototype, `SetBroadcastForceBanner`, null),
  D([m], $.prototype, `SetChangeSetting`, null),
  D([m], $.prototype, `SetTitleToken`, null),
  D([m], $.prototype, `SetCustomTitleLocalize`, null),
  D([m], $.prototype, `AddAccountToWhiteList`, null),
  D([m], $.prototype, `DeleteWhiteListAccount`, null),
  D([m], $.prototype, `SetWhiteListAccountLanguage`, null),
  D([m], $.prototype, `SetWhiteListAccountPriority`, null),
  D([m], $.prototype, `RemoveWhiteListAtIndex`, null),
  D([m], $.prototype, `ClearWhiteList`, null),
  D([m], $.prototype, `SetBroadcastContentType`, null),
  D([m], $.prototype, `SetPrerollVODAppID`, null),
  D([m], $.prototype, `SetPrerollTrailer`, null),
  D([m], $.prototype, `SetDropsEnabled`, null),
  D([m], $.prototype, `SetItemDropManual`, null),
  D([m], $.prototype, `SetItemDropMinutes`, null),
  D([m], $.prototype, `SetItemDropDetailEvents`, null),
  D([m], $.prototype, `SetWidePlayerLayout`, null),
  D([m], $.prototype, `SetWidePlayerSupportChat`, null),
  D([m], $.prototype, `SetChatAnnouncementGiveawayGID`, null));
var Nh = class e {
  m_rgFriendsList = null;
  GetFriendLiset() {
    return this.m_rgFriendsList;
  }
  async LoadFriendList() {
    let e = null;
    if (this.m_rgFriendsList) return this.m_rgFriendsList;
    if (!_s.logged_in) return [];
    try {
      let t = await Q.default.get(
        R.COMMUNITY_BASE_URL + `actions/ajaxlistfriends`,
      );
      if (t?.status == 200 && t.data?.success == 1 && t.data?.friends)
        return ((this.m_rgFriendsList = t.data.friends), this.m_rgFriendsList);
      ((this.m_rgFriendsList = []), (e = k(t)));
    } catch (t) {
      e = k(t);
    }
    return (
      console.error(
        `CSimpleFriendsListStore.LoadFriendList failed: ` + e?.strErrorMsg,
        e,
      ),
      []
    );
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
  constructor() {}
};
function Ph() {
  let [e, t] = Z.useState(Nh.Get().GetFriendLiset());
  return (
    Z.useEffect(() => {
      e || Nh.Get().LoadFriendList().then(t);
    }, []),
    e
  );
}
var Fh = `-VtawmxssR4-`;
function Ih(e) {
  let { editModel: t, broadcastEditModel: n } = e,
    r = (e) => {},
    i = [
      {
        name: `Trailer`,
        key: `overview`,
        contents: (0, X.jsx)(J, { children: (0, X.jsx)(Lh, { ...e }) }),
        onClick: r,
      },
      {
        name: `Deprecated VOD`,
        key: `mature`,
        contents: (0, X.jsx)(J, { children: (0, X.jsx)(Rh, { ...e }) }),
        onClick: r,
      },
    ];
  return (0, X.jsxs)(E, {
    requireAdmin: !0,
    clanSteamID: t.GetClanSteamID(),
    className: Y(Qs),
    children: [
      (0, X.jsx)(`div`, {
        className: O,
        children: L(`#Broadcast_preroll_title`),
      }),
      (0, X.jsx)(Ri, { tabs: i, bDisableRouting: !0 }),
    ],
  });
}
function Lh(e) {
  let { editModel: t, broadcastEditModel: n } = e,
    r = g(() => n?.GetPrerollTrailer()),
    i = _r(r.strAppid ? Number.parseInt(r.strAppid) : void 0),
    a = Yo(i, r.strTrailerid ? Number.parseInt(r.strTrailerid) : void 0),
    o = a?.microtrailer?.[0].filename;
  return (0, X.jsxs)(`div`, {
    className: Y(U, Fo),
    children: [
      (0, X.jsx)(`div`, { children: L(`#Broadcast_preroll_trailer_desc`) }),
      (0, X.jsx)(N, {
        type: `text`,
        placeholder: L(`#Broadcast_preroll_trailer_AppPrompt`),
        mustBeNumeric: !0,
        rangeMin: 1,
        value: r.strAppid || ``,
        onChange: (e) =>
          n.SetPrerollTrailer(e.target.value.trim(), r.strTrailerid ?? ``),
      }),
      (0, X.jsx)(N, {
        type: `text`,
        placeholder: L(`#Broadcast_preroll_trailer_TrailerPrompt`),
        mustBeNumeric: !0,
        rangeMin: 1,
        value: r.strTrailerid || ``,
        onChange: (e) =>
          n.SetPrerollTrailer(r.strAppid || ``, e.target.value.trim()),
      }),
      a &&
        o &&
        (0, X.jsx)(`a`, {
          href: `${R.STORE_BASE_URL}trailer/assets/?trailer=${o.substring(0, o.lastIndexOf(`/`))}`,
          children: L(`#Broadcast_preroll_trailer_link`),
        }),
    ],
  });
}
function Rh(e) {
  let { editModel: t, broadcastEditModel: n } = e,
    r = g(() => n?.GetPrerollVideo());
  return (0, X.jsxs)(`div`, {
    className: Y(U, Fo),
    children: [
      (0, X.jsx)(`div`, { children: L(`#Broadcast_preroll_desc`) }),
      (0, X.jsx)(N, {
        type: `text`,
        placeholder: L(`#Broadcast_preroll_prompt`),
        mustBeNumeric: !0,
        rangeMin: 1,
        value: r || ``,
        onChange: (e) => n.SetPrerollVODAppID(e.target.value.trim()),
      }),
      !!r &&
        (0, X.jsx)(`a`, {
          href: R.PARTNER_BASE_URL + `apps/landing/` + r,
          children: L(`#Broadcast_preroll_app_link`),
        }),
    ],
  });
}
var zh = class extends Z.Component {
  state = { strCustomTitle: ``, customTitleLanguage: 0, whitelistSteamID: `` };
  GetBroadcastEditModel() {
    return new $(this.props.editModel);
  }
  OnBroadcastOptionChange(e) {
    this.GetBroadcastEditModel().SetBroadcastEnabled(e);
  }
  OnBroadcastForceBanner(e) {
    this.GetBroadcastEditModel().SetBroadcastForceBanner(e);
  }
  OnChatChange(e) {
    this.GetBroadcastEditModel().SetChangeSetting(e);
  }
  OnTitleChange(e) {
    this.GetBroadcastEditModel().SetTitleToken(e.data);
  }
  OnCustomTitleChange(e) {
    this.setState({ strCustomTitle: e.target.value });
  }
  OnCustomTitleLanguageChange(e) {
    this.setState({ customTitleLanguage: e.data });
  }
  AddTitle() {
    (this.GetBroadcastEditModel().SetCustomTitleLocalize(
      this.state.customTitleLanguage,
      this.state.strCustomTitle,
    ),
      this.setState({ strCustomTitle: `` }));
  }
  RemoveTitle(e) {
    this.GetBroadcastEditModel().SetCustomTitleLocalize(e, null);
  }
  OnSaleColorChange(e, t) {
    let n = this.props.editModel.GetEventModel().jsondata;
    ((n[t] = e), this.props.editModel.SetDirty(x.jsondata_sales));
  }
  OnOpenGradientInnerColor(e) {
    this.OpenColorPopover(e, `broadcast_gradient_inner_color`);
  }
  OnOpenGradientOuterColor(e) {
    this.OpenColorPopover(e, `broadcast_gradient_outer_color`);
  }
  OpenColorPopover(e, t) {
    let { editModel: n } = this.props;
    ui(
      e,
      {
        color: n.GetEventModel().jsondata[t],
        onChange: (e) => this.OnSaleColorChange(e, t),
      },
      fa(n),
    );
  }
  render() {
    let { editModel: e } = this.props,
      t = e.GetEventModel().jsondata,
      n = [
        `#Broadcast_default_title_dev`,
        `#Broadcast_default_title_community`,
        `#Broadcast_default_title_comp`,
        `#Broadcast_default_title_speed`,
        `#Broadcast_default_title_simple`,
        `#Broadcast_default_title_dev_chat`,
        `#Broadcast_default_title_ama`,
      ].map((e) => ({ label: L(e), data: e })),
      r = [],
      i = ao.GetLanguageListForRealms([Co.k_ESteamRealmGlobal]);
    for (let e of i) {
      let t = { label: L(`#language_selection_` + lo(e)), data: e };
      r.push(t);
    }
    let a = yr.map((t) =>
      (0, X.jsxs)(
        `div`,
        {
          className: Y(V, Za),
          children: [
            (0, X.jsx)(`input`, {
              type: `radio`,
              name: `BroadcastChat`,
              id: `EventEditor_BroadcastSChat_` + t,
              value: t,
              checked: e.GetEventModel().GetBroadcastChatVisibility() === t,
              onChange: () => this.OnChatChange(t),
            }),
            (0, X.jsx)(`label`, {
              htmlFor: `EventEditor_BroadcastSChat_` + t,
              children: (0, X.jsx)(`span`, {
                children: L(`#Broadcast_chat_` + t),
              }),
            }),
          ],
        },
        `broadcastchatOptions_` + t,
      ),
    );
    return (0, X.jsxs)(`div`, {
      className: tt,
      children: [
        (0, X.jsxs)(`div`, {
          className: Ko,
          children: [
            (0, X.jsx)(`span`, {
              className: Y(O, Bs),
              children: L(`#Broadcast_title`),
            }),
            (0, X.jsx)(`a`, {
              target: R.IN_CLIENT ? void 0 : `_blank`,
              href:
                R.PARTNER_BASE_URL +
                `doc/marketing/event_tools/sales/livestream`,
              className: Y(uo),
              children: (0, X.jsx)(`span`, {
                children: L(`#Broadcast_documentation`),
              }),
            }),
          ],
        }),
        (0, X.jsx)(`div`, {
          className: ms,
          children: (0, X.jsx)(z, {
            onChange: this.OnBroadcastOptionChange,
            label: L(`#Broadcast_option`),
            checked: e.GetEventModel().BHasBroadcastEnabled(),
          }),
        }),
        e.GetEventModel().BHasBroadcastEnabled() &&
          (0, X.jsxs)(`div`, {
            children: [
              (0, X.jsx)(`div`, {
                className: `ized0rR3LUQ-`,
                children: L(`#Broadcast_title_title`),
              }),
              (0, X.jsxs)(`div`, {
                className: Y(`_0UzWiVhBe8U-`, `nu6c4Lu0A9I-`),
                children: [
                  (0, X.jsx)(`p`, { children: L(`#Broadcast_title_desc`) }),
                  (0, X.jsx)(Zs, {
                    rgOptions: n,
                    selectedOption: n[0].data,
                    onChange: this.OnTitleChange,
                  }),
                  (0, X.jsx)(`div`, {
                    children: L(`#Broadcast_option_customtitle`),
                  }),
                  (0, X.jsxs)(`div`, {
                    className: `r0CsBXNrthw-`,
                    children: [
                      (0, X.jsxs)(`div`, {
                        className: Y(`befdhdeb-HY-`, `_7pYGpqdVmMk-`),
                        children: [
                          (0, X.jsx)(`div`, {
                            style: { width: `400px` },
                            children: (0, X.jsx)(N, {
                              placeholder: L(`#Broadcast_use_custom`),
                              onChange: this.OnCustomTitleChange,
                              value: this.state.strCustomTitle,
                            }),
                          }),
                          (0, X.jsx)(`div`, {
                            className: `s1sf1GTXia8-`,
                            children: (0, X.jsx)(Zs, {
                              bDisableMouseOverlay: !0,
                              strDropDownClassName: `ZsXFGEgobIY-`,
                              rgOptions: r,
                              selectedOption: this.state.customTitleLanguage,
                              onChange: this.OnCustomTitleLanguageChange,
                            }),
                          }),
                          (0, X.jsx)(`div`, {
                            className: `_8MsFoLxqrO8-`,
                            children: (0, X.jsx)(Ns, {
                              onClick: () => this.AddTitle(),
                              children: L(`#Broadcast_add_title`),
                            }),
                          }),
                        ],
                      }),
                      (0, X.jsx)(`p`, {
                        children: L(`#Sale_option_customtitle_entered`),
                      }),
                      (0, X.jsx)(`div`, {
                        className: Y(`_0UzWiVhBe8U-`),
                        children: t.localized_broadcast_title.map((e, t) =>
                          e
                            ? (0, X.jsxs)(
                                `div`,
                                {
                                  className: Y(`DiEM9fCHxAg-`, `befdhdeb-HY-`),
                                  children: [
                                    e,
                                    ` (`,
                                    L(`#language_selection_` + lo(t)),
                                    `)`,
                                    (0, X.jsx)(`div`, {
                                      style: { marginLeft: `auto` },
                                      children: (0, X.jsx)(`img`, {
                                        className: `EJE6Uh9cQZA-`,
                                        src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==`,
                                        onClick: () => this.RemoveTitle(t),
                                      }),
                                    }),
                                  ],
                                },
                                t,
                              )
                            : null,
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, X.jsx)(`div`, {
                className: `ized0rR3LUQ-`,
                children: L(`#Broadcast_background`),
              }),
              (0, X.jsx)(I, {
                onClick: this.OnOpenGradientOuterColor,
                className: `ized0rR3LUQ-`,
                style: {
                  backgroundColor:
                    this.props.editModel.GetEventModel().jsondata
                      .broadcast_gradient_outer_color,
                },
                children: L(`#Broadcast_GradientOuterColor`),
              }),
              (0, X.jsx)(I, {
                onClick: this.OnOpenGradientInnerColor,
                className: `ized0rR3LUQ-`,
                style: {
                  backgroundColor:
                    this.props.editModel.GetEventModel().jsondata
                      .broadcast_gradient_inner_color,
                },
                children: L(`#Broadcast_GradientInnerColor`),
              }),
              e.GetEventType() != 36 &&
                (0, X.jsx)(Bh, {
                  broadcastEditModel: this.GetBroadcastEditModel(),
                }),
              (0, X.jsx)(Ih, {
                editModel: e,
                broadcastEditModel: this.GetBroadcastEditModel(),
              }),
              (0, X.jsx)(`div`, {
                className: `ized0rR3LUQ-`,
                children: L(`#Broadcast_chat_title`),
              }),
              (0, X.jsx)(`div`, {
                className: Y(`_0UzWiVhBe8U-`, `nu6c4Lu0A9I-`),
                children: a,
              }),
              (0, X.jsx)(Hh, {
                editModel: e,
                broadcastEditModel: this.GetBroadcastEditModel(),
              }),
              (0, X.jsx)(Uh, {
                editModel: e,
                broadcastEditModel: this.GetBroadcastEditModel(),
              }),
              (0, X.jsx)(`div`, {
                className: `ized0rR3LUQ-`,
                children: L(`#Broadcast_artwork`),
              }),
              (0, X.jsx)(Ia, {
                clanSteamID: e.GetClanSteamID(),
                rgSupportArtwork: [`broadcast_left`, `broadcast_right`],
                fnSetImageURL: e.SetImageURL,
                bAllowPreviousClanImageSelection: !0,
                rgRealmList: e.GetIncludedRealmList(),
              }),
              (0, X.jsx)(`div`, {
                className: `ized0rR3LUQ-`,
                children: L(`#Broadcast_artwork_options`),
              }),
              (0, X.jsx)(`div`, {
                className: `_6X-CA8E4ynU-`,
                children: (0, X.jsx)(z, {
                  onChange: this.OnBroadcastForceBanner,
                  label: L(`#Broadcast_artwork_banner`),
                  tooltip: L(`#Broadcast_artwork_banner_hint`),
                  checked: e.GetEventModel().BHasBroadcastForceBanner(),
                }),
              }),
              (0, X.jsx)(wa, {
                clanSteamID: e.GetClanSteamID(),
                title: L(`#EventEditor_ArtworkType_broadcast_left`),
                artworkType: `broadcast_left`,
                appid: e.GetAppID(),
                eventModel: e.GetEventModel(),
                fnLangHasData: e.BHasTitleImage,
                realms: e.GetIncludedRealmList(),
                fnSetImageURL: e.SetImageURL,
                fnGetImageHashAndExt: e.GetImageHashAndExt,
                partnerEventStore: b,
              }),
              (0, X.jsx)(wa, {
                clanSteamID: e.GetClanSteamID(),
                title: L(`#EventEditor_ArtworkType_broadcast_right`),
                eventModel: e.GetEventModel(),
                artworkType: `broadcast_right`,
                appid: e.GetAppID(),
                fnLangHasData: e.BHasTitleImage,
                realms: e.GetIncludedRealmList(),
                fnSetImageURL: e.SetImageURL,
                fnGetImageHashAndExt: e.GetImageHashAndExt,
                partnerEventStore: b,
              }),
            ],
          }),
      ],
    });
  }
};
(D([A], zh.prototype, `OnBroadcastOptionChange`, null),
  D([A], zh.prototype, `OnBroadcastForceBanner`, null),
  D([A], zh.prototype, `OnChatChange`, null),
  D([A], zh.prototype, `OnTitleChange`, null),
  D([A], zh.prototype, `OnCustomTitleChange`, null),
  D([A], zh.prototype, `OnCustomTitleLanguageChange`, null),
  D([A], zh.prototype, `AddTitle`, null),
  D([A], zh.prototype, `RemoveTitle`, null),
  D([A], zh.prototype, `OnSaleColorChange`, null),
  D([A], zh.prototype, `OnOpenGradientInnerColor`, null),
  D([A], zh.prototype, `OnOpenGradientOuterColor`, null),
  (zh = D([r], zh)));
function Bh(e) {
  let { broadcastEditModel: t } = e,
    n = g(() => t.GetBroadcastAllowList() || []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`div`, { className: O, children: L(`#Broadcast_whitelist`) }),
      (0, X.jsxs)(`div`, {
        className: Y(U, Fo),
        children: [
          (0, X.jsx)(`div`, { children: L(`#Broadcast_whitelist_desc`) }),
          (0, X.jsx)(`div`, { children: L(`#Broadcast_option_drag_ttip`) }),
          (0, X.jsx)(`div`, {
            className: Vn,
            children: n.map((e) =>
              (0, X.jsx)(Wh, { accountid: e }, `broadcastaccountrow_` + e),
            ),
          }),
          (0, X.jsx)(Vh, { broadcastEditModel: t }),
          (0, X.jsx)(fc, {
            onButtonClick: async (e) => {
              let n = new zo(e);
              return (t.AddAccountToWhiteList(n.GetAccountID()), !0);
            },
            buttonText: L(`#Broadcast_whitelist_adduser`),
          }),
          (0, X.jsx)(`div`, {
            children: K(
              `#Broadcast_whitelist_friendcode`,
              (0, X.jsx)(`a`, {
                target: `_blank`,
                href: R.COMMUNITY_BASE_URL + `my/friends/add`,
                children: R.COMMUNITY_BASE_URL + `my/friends/add`,
              }),
            ),
          }),
        ],
      }),
    ],
  });
}
function Vh(e) {
  let { broadcastEditModel: t } = e,
    n = Ph();
  return (0, X.jsxs)(`div`, {
    className: Y(cs),
    children: [
      (0, X.jsx)(`a`, {
        onClick: () => t.AddAccountToWhiteList(_s.accountid),
        className: jo,
        children: L(`#Broadcast_whitelist_addme`),
      }),
      (0, X.jsx)(`a`, {
        onClick: (e) =>
          Jo(
            (0, X.jsx)(`div`, {
              className: eo,
              children: (n || []).map((e) =>
                (0, X.jsx)(
                  So,
                  {
                    onSelected: () => {
                      let n = new zo(e.steamid);
                      t.AddAccountToWhiteList(n.GetAccountID());
                    },
                    children: (0, X.jsxs)(`div`, {
                      style: { display: `flex`, alignItems: `center` },
                      children: [
                        (0, X.jsx)(`img`, {
                          className: void 0,
                          src: e.avatar_url,
                        }),
                        e.persona_name,
                      ],
                    }),
                  },
                  e.steamid,
                ),
              ),
            }),
            e,
          ),
        className: jo,
        children: L(`#Broadcast_whitelist_addfriend`),
      }),
      (0, X.jsx)(`a`, {
        onClick: () => t.ClearWhiteList(),
        className: jo,
        children: L(`#Broadcast_whitelist_clear`),
      }),
    ],
  });
}
function Hh(e) {
  let { editModel: t, broadcastEditModel: n } = e,
    [r, i, a, o, s, c] = g(() => [
      t.GetEventModel().jsondata.broadcast_item_drops_enabled,
      t.GetEventModel().jsondata.broadcast_item_drops_manual,
      t.GetEventModel().jsondata.broadcast_item_drops_min_watch_time_minutes,
      t.GetEventModel().jsondata.broadcast_item_drops_details_clan_accountid,
      t.GetEventModel().jsondata.broadcast_item_drops_details_event_gid,
      t.GetEventModel().jsondata.broadcast_chat_announcement_giveaway || 0,
    ]);
  return (0, X.jsxs)(E, {
    requireAdmin: !0,
    clanSteamID: t.GetClanSteamID(),
    className: Y(Qs),
    children: [
      (0, X.jsx)(`div`, {
        className: O,
        children: `(VO) ` + L(`#Broadcast_DropsTitle`),
      }),
      (0, X.jsx)(F, {
        onChange: (e) => n.SetDropsEnabled(e),
        label: L(`#Broadcast_Drops_Enable`),
        checked: !!r,
      }),
      !!r &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(F, {
              onChange: (e) => n.SetItemDropManual(e),
              label: L(`#Broadcast_Drops_IsManualDrops`),
              checked: !!i,
            }),
            (0, X.jsx)(`label`, {
              htmlFor: `broadcast_min_mintes`,
              children: L(`#Broadcast_Drops_Minute`),
            }),
            (0, X.jsx)(`input`, {
              id: `broadcast_min_mintes`,
              type: `number`,
              min: `5`,
              value: a,
              onChange: (e) =>
                n.SetItemDropMinutes(Number.parseInt(e.target.value)),
            }),
            (0, X.jsx)(`div`, {
              className: `xR9DWAbxNRc-`,
              children: L(`#Broadcast_Drops_Details`),
            }),
            (0, X.jsx)(`label`, {
              htmlFor: `broadcast_detail_clan_account`,
              children: L(`#Broadcast_Drops_Details_Account`),
            }),
            (0, X.jsx)(`input`, {
              id: `broadcast_detail_clan_account`,
              type: `number`,
              min: `0`,
              value: o,
              onChange: (e) =>
                n.SetItemDropDetailEvents(Number.parseInt(e.target.value), s),
            }),
            (0, X.jsx)(`label`, {
              htmlFor: `broadcast_detail_clan_event_gid`,
              children: L(`#Broadcast_Drops_Details_GID`),
            }),
            (0, X.jsx)(`input`, {
              id: `broadcast_detail_clan_event_gid`,
              type: `text`,
              value: s,
              onChange: (e) => n.SetItemDropDetailEvents(o, e.target.value),
            }),
          ],
        }),
      (0, X.jsx)(`div`, {
        className: O,
        children: `(VO) ` + L(`#Broadcast_ChatAnnouncement_Giveaway_title`),
      }),
      (0, X.jsx)(N, {
        type: `number`,
        value: c,
        tooltip: L(`#Broadcast_ChatAnnouncement_Giveaway_gid_ttip`),
        label: L(`#Broadcast_ChatAnnouncement_Giveaway_gid`),
        onChange: (e) => n.SetChatAnnouncementGiveawayGID(e.target.value),
      }),
    ],
  });
}
function Uh(e) {
  let { editModel: t, broadcastEditModel: n } = e,
    r = g(() => t.GetEventModel().jsondata.broadcast_display_wide_player),
    i = g(
      () => t.GetEventModel().jsondata.broadcast_dispaly_wide_player_allow_chat,
    );
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`div`, { className: O, children: L(`#Broadcast_WidePlayer`) }),
      (0, X.jsx)(F, {
        onChange: (e) => n.SetWidePlayerLayout(e),
        label: L(`#Broadcast_WidePlayer_Use`),
        tooltip: L(`#Broadcast_WidePlayer_ttip`),
        checked: !!r,
      }),
      (0, X.jsx)(F, {
        onChange: (e) => n.SetWidePlayerSupportChat(e),
        label: L(`#Broadcast_WidePlayer_Chat_Use`),
        tooltip: L(`#Broadcast_WidePlayer_Chat_ttip`),
        checked: !!i,
        disabled: !r,
      }),
      (0, X.jsxs)(E, {
        requireAdmin: !0,
        clanSteamID: t.GetClanSteamID(),
        className: Y(Qs),
        children: [
          (0, X.jsx)(B, {
            toolTipContent: L(`#Broadcast_ContentType_Desc`),
            children: (0, X.jsx)(`div`, {
              className: O,
              children: `(VO) ` + L(`#Broadcast_ContentType`),
            }),
          }),
          (0, X.jsx)(Kh, {}),
        ],
      }),
    ],
  });
}
function Wh(e) {
  let { accountid: t } = e,
    { isLoading: n, data: r } = ia(t),
    i = () => new $(b.GetEditModel()),
    a = b.GetEditModel().GetEventModel(),
    o = g(() => a.jsondata.broadcast_whitelist.indexOf(t)),
    s = g(() => {
      let e = a.jsondata.broadcast_language,
        t = -1;
      return (o >= 0 && e && o < e.length && e[o] !== void 0 && (t = e[o]), t);
    });
  return n
    ? (0, X.jsx)(C, { size: `small`, string: L(`#Loading`) })
    : r
      ? (0, X.jsxs)(`div`, {
          className: Y(ks, Fh),
          children: [
            (0, X.jsxs)(`a`, {
              className: Y(ks, Sn),
              href: r.GetCommunityProfileURL(),
              target: `_blank`,
              children: [
                r
                  ? (0, X.jsx)(`img`, {
                      style: { marginRight: `8px` },
                      src: r.avatar_url,
                    })
                  : null,
                r ? r.m_strPlayerName : null,
              ],
            }),
            (0, X.jsxs)(B, {
              toolTipContent: L(`#Broadcast_Language_hint`),
              children: [
                (0, X.jsxs)(`span`, {
                  children: [L(`#EventEditor_Langauge`), `: `],
                }),
                (0, X.jsx)(Yi, {
                  bAllowUnsetOption: !0,
                  selectedLang: s,
                  fnOnLanguageChanged: (e) =>
                    i().SetWhiteListAccountLanguage(t, e),
                }),
              ],
            }),
            (0, X.jsx)(Gh, { accountid: t }),
            (0, X.jsx)(`img`, {
              className: Y(ks, Ss),
              src: da,
              onClick: () => i().DeleteWhiteListAccount(t),
            }),
          ],
        })
      : (0, X.jsx)(`div`, { children: L(`#Broadcast_FailedToLoadUser`) });
}
function Gh(e) {
  let t = new $(b.GetEditModel()),
    n = (n) => {
      t.SetWhiteListAccountPriority(e.accountid, n.data);
    },
    r = [
      { label: L(`#Broadcast_Priority_Primary`), data: $r },
      { label: L(`#Broadcast_Priority_Featured`), data: Lr },
      { label: L(`#Broadcast_Priority_DefaultFeatured`), data: Hr },
      { label: L(`#Broadcast_Priority_General`), data: Zr },
    ],
    i = t.GetWhiteListAccountPriority(e.accountid, Zr);
  return (0, X.jsxs)(B, {
    toolTipContent: L(`#Broadcast_Priority_hint`),
    className: er,
    children: [
      (0, X.jsxs)(`span`, { children: [L(`#Broadcast_Priority_label`), `: `] }),
      (0, X.jsx)(Zs, { rgOptions: r, selectedOption: i, onChange: n }),
    ],
  });
}
function Kh(e) {
  let t = new $(b.GetEditModel()),
    n = [
      { label: L(`#Broadcast_ContentType_Unknown`), data: void 0 },
      { label: L(`#Broadcast_ContentType_Live`), data: `live` },
      { label: L(`#Broadcast_ContentType_Premiere`), data: `premiere` },
      { label: L(`#Broadcast_ContentType_Encore`), data: `encore` },
    ],
    r = t.GetBroadcastContentType();
  return (0, X.jsxs)(B, {
    toolTipContent: L(`#Broadcast_ContentType_Desc`),
    className: er,
    children: [
      (0, X.jsxs)(`span`, { children: [L(`#Broadcast_ContentType`), `: `] }),
      (0, X.jsx)(Zs, {
        rgOptions: n,
        selectedOption: r,
        onChange: (e) => t.SetBroadcastContentType(e.data),
      }),
    ],
  });
}
var qh = class e {
    m_mapAppIDToDLCs = new Map();
    m_mapAppIDToSoundTracks = new Map();
    m_mapPromise = new Map();
    GetDLCForAppID(e) {
      return this.m_mapAppIDToDLCs.get(e);
    }
    GetSoundTracksForAppID(e) {
      return this.m_mapAppIDToSoundTracks.get(e);
    }
    async LoadDLCAndSoundTracksForAppID(e, t) {
      return (
        this.m_mapPromise.has(e) ||
          this.m_mapPromise.set(
            e,
            this.InternalLoadDLCAndSoundTracksForAppID(e, t),
          ),
        this.m_mapPromise.get(e)
      );
    }
    async InternalLoadDLCAndSoundTracksForAppID(e, t) {
      if (!this.m_mapAppIDToDLCs.has(e) && e != 0)
        try {
          let n = { origin: self.origin, cc: R.COUNTRY || `US`, l: R.LANGUAGE },
            r = ``;
          r =
            Wa() == `partner`
              ? `${R.PARTNER_BASE_URL}seasonpass/ajaxgetreleasedorupcomingdlc?parentappid=${e}`
              : R.STORE_BASE_URL + `dlc/` + e + `/ajaxgetdlclist`;
          let i = await Q.default.get(r, { params: n, cancelToken: t?.token }),
            a = [];
          (i.data.dlcs &&
            i.data.dlcs.forEach((e) => {
              a.push({
                appid: e.appid,
                name: e.name,
                is_released_somewhere: !!e.is_released_somewhere,
              });
            }),
            this.m_mapAppIDToDLCs.set(e, a),
            (a = []),
            i.data.soundtracks &&
              i.data.soundtracks.forEach((e) => {
                a.push({
                  appid: e.appid,
                  name: e.name,
                  is_released_somewhere: !!e.is_released_somewhere,
                });
              }),
            this.m_mapAppIDToSoundTracks.set(e, a));
        } catch (t) {
          let n = k(t);
          console.error(
            `LoadDLCAndSoundTracksForAppID for appid: ` +
              e +
              ` hit: ` +
              n.strErrorMsg,
            n,
          );
        }
      return {
        dlcs: this.m_mapAppIDToDLCs.has(e) ? this.m_mapAppIDToDLCs.get(e) : [],
        soundtracks: this.m_mapAppIDToSoundTracks.has(e)
          ? this.m_mapAppIDToSoundTracks.get(e)
          : [],
      };
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {
      s(this);
    }
  },
  Jh = `Sj5pbkk23RM-`,
  Yh = `WAmKmYH7idI-`,
  Xh = `dgWPKVLI6KA-`,
  Zh = `KmtjPlOWMwk-`,
  Qh = `ZULNpNBJ0jg-`,
  $h = `R2WquxQJr5s-`,
  eg = `_5glg61Yp5Bw-`,
  tg = `w-rtyatI9AU-`,
  ng = `gk-idPo-bLk-`,
  rg = `_4vkR-XwtTyw-`,
  ig = `_6nAoRuKt5c0-`,
  ag = `QQXpHpzoJMA-`,
  og = `eYIAv8onnmM-`,
  sg = `_5bk9aHVDY38-`,
  cg = `_7AlJRAm5msU-`,
  lg = `XsDxoe8ydyY-`,
  ug = `s3oKC2PT5s4-`,
  dg = `phns3YQ2h-8-`,
  fg = `_2JhTF5EXu30-`,
  pg = `zoxKVO4TMUM-`,
  mg = `OcKbdEjWn9s-`,
  hg = `idPs2pUwiY0-`,
  gg = `FwdQEjc026s-`,
  _g = `_7e1Ypl3oqvA-`,
  vg = `iT4QVxb4UOQ-`,
  yg = `NoK6jgbpIeU-`,
  bg = `Jbog7e-aC-Y-`,
  xg = `o9-GABdxBww-`,
  Sg = `_549tBR4Cv24-`,
  Cg = `a6c-GXH5FVk-`,
  wg = `bAkq70apz9g-`,
  Tg = `pj3k57sWyk0-`,
  Eg = `Vcg2Fjmosrc-`,
  Dg = `z-EoGEG4Hew-`,
  Og = `ZrjpmQ9TeMA-`,
  kg = `KAhr-nT4Sx4-`,
  Ag = `qxB3zO6Ku-w-`,
  jg = `fjuJqLa3J-o-`,
  Mg = `LSRbqx78-wo-`,
  Ng = `LjEj3bt8OW8-`,
  Pg = `cTjDOKcbgHM-`,
  Fg = `YTh6vQHo6Jc-`,
  Ig = `PXQcQts0g1A-`,
  Lg = `_57BsOPIC9Zs-`,
  Rg = `JXwdlK7Z2CY-`,
  zg = `dvhtbD155b8-`,
  Bg = `TwH1GjSAbls-`,
  Vg = class extends Z.Component {
    OnHeadlineChange(e) {
      let { section: t, lang: n } = this.props;
      t.SetHeadline(e.currentTarget.value || null, n);
    }
    OnBodyChange(e) {
      let { section: t, lang: n } = this.props;
      t.SetBody(e.currentTarget.value || null, n);
    }
    OnVideoChange(e) {
      let { section: t } = this.props;
      t.SetVideoLink(e.currentTarget.value || null);
    }
    OnRemoveSubSection(e) {
      let { section: t, fnRemoveSection: n } = this.props;
      P(
        (0, X.jsx)(j, {
          strTitle: L(`#EventEmail_Template_EditTitle`),
          strDescription: L(
            `#EventEmail_Template_RemoveSubSection`,
            L(`#EventEmail_Template_Sub_` + e),
          ),
          onOK: () => {
            (t.RemoveSubSection(e), !t.BHasSomeSubSection() && n && n());
          },
        }),
        window,
      );
    }
    GenerateTemplateRemove(e) {
      let t = L(`#EventEmail_Template_Sub_` + e);
      return (0, X.jsx)(`div`, {
        className: pg,
        children: (0, X.jsx)(B, {
          toolTipContent: L(`#EventEmail_Template_Remove`, t),
          children: (0, X.jsx)(`img`, {
            className: void 0,
            src: da,
            onClick: () => this.OnRemoveSubSection(e),
          }),
        }),
      });
    }
    render() {
      let {
        section: e,
        additionalClassName: t,
        lang: n,
        bEditor: r,
        clanSteamID: i,
        appid: a,
        bTemplateEditable: o,
      } = this.props;
      return (0, X.jsxs)(`div`, {
        className: Y(t, tg, sg),
        children: [
          e.BHasHeadline() &&
            (0, X.jsxs)(Z.Fragment, {
              children: [
                o && this.GenerateTemplateRemove(`headline`),
                (0, X.jsx)(`input`, {
                  type: `text`,
                  className: `_2BYjqkm2wEo-`,
                  placeholder: L(`#EventEmail_EnterHeadline`),
                  value: e.GetHeadline(n),
                  onChange: this.OnHeadlineChange,
                }),
              ],
            }),
          e.BHasBody() &&
            (0, X.jsxs)(Z.Fragment, {
              children: [
                o && this.GenerateTemplateRemove(`body`),
                (0, X.jsx)(`textarea`, {
                  className: `idPs2pUwiY0-`,
                  placeholder: L(`#EventEmail_EnterBodyCopy`),
                  value: e.GetBody(n),
                  rows: 8,
                  onChange: this.OnBodyChange,
                }),
              ],
            }),
          e.BHasCallToAction() &&
            (0, X.jsxs)(Z.Fragment, {
              children: [
                o && this.GenerateTemplateRemove(`action`),
                (0, X.jsx)(Hg, { appid: a, section: e }),
              ],
            }),
          e.BHasImage() &&
            (0, X.jsxs)(Z.Fragment, {
              children: [
                o && this.GenerateTemplateRemove(`img`),
                (0, X.jsx)(Wg, {
                  section: e,
                  lang: n,
                  clanSteamID: i,
                  bEditor: r,
                  artworkType: o ? `email_centered` : `email_full`,
                }),
              ],
            }),
          e.BHasVideo() &&
            (0, X.jsxs)(Z.Fragment, {
              children: [
                o && this.GenerateTemplateRemove(`youtube`),
                (0, X.jsxs)(`div`, {
                  className: `NFpNVO-J9nM-`,
                  children: [
                    (0, X.jsx)(`img`, { src: e.GetYouTubeImageURL() }),
                    !!r &&
                      (0, X.jsxs)(`div`, {
                        className: `ds5rkAm8HH0-`,
                        children: [
                          (0, X.jsx)(`div`, {
                            children: L(
                              `#EventEditor_InsertYouTube_Placholder`,
                            ),
                          }),
                          (0, X.jsx)(`input`, {
                            type: `text`,
                            value: e.GetVideoURL(),
                            onChange: this.OnVideoChange,
                          }),
                          (0, X.jsxs)(`div`, {
                            children: [
                              L(`#EventEditor_InsertYouTube_UpdateThumbnail`),
                              (0, X.jsx)(`a`, {
                                href: `https://support.google.com/youtube/answer/72431`,
                                target: `_blank`,
                                children: L(
                                  `#EventEditor_InsertYouTube_LearnHow`,
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
      });
    }
  };
(D([A], Vg.prototype, `OnHeadlineChange`, null),
  D([A], Vg.prototype, `OnBodyChange`, null),
  D([A], Vg.prototype, `OnVideoChange`, null),
  D([A], Vg.prototype, `OnRemoveSubSection`, null),
  (Vg = D([r], Vg)));
var Hg = class extends Z.Component {
  m_cancelSignal = Q.default.CancelToken.source();
  state = { dlcs: void 0 };
  async LoadDLCForApp() {
    this.setState({
      dlcs: (
        await qh
          .Get()
          .LoadDLCAndSoundTracksForAppID(this.props.appid, this.m_cancelSignal)
      ).dlcs,
    });
  }
  componentDidMount() {
    this.LoadDLCForApp();
  }
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`EmailCallToAction cancelled`);
  }
  BuildTextOptions() {
    let e = [];
    return (
      $t.forEach((t) => {
        e.push((0, X.jsx)(`option`, { value: t, children: L(`#` + t) }, t));
      }),
      e
    );
  }
  BuildDestinationOptions() {
    let e = [];
    for (let t in qt)
      if (!isNaN(Number(t))) {
        let n = ht[t];
        e.push((0, X.jsx)(`option`, { value: t, children: L(`#` + n) }, n));
      }
    return (
      this.state.dlcs === void 0
        ? e.push(
            (0, X.jsx)(
              `option`,
              {
                children: (0, X.jsx)(C, {
                  string: L(`#EventEmail_LoadingDLC`),
                  size: `small`,
                }),
              },
              `CallToActionThrobber`,
            ),
          )
        : this.state.dlcs.forEach((t) => {
            e.push(
              (0, X.jsx)(
                `option`,
                {
                  value: t.appid,
                  children: L(
                    `#EventEmail_Destination_DLCPage`,
                    t.name,
                    t.appid,
                  ),
                },
                `dlc` + t.appid,
              ),
            );
          }),
      e
    );
  }
  OnButtonLocChange(e) {
    let { section: t } = this.props;
    $t.forEach((n) => {
      n === e.target.value && t.SetButtonTextLock(n);
    });
  }
  OnDestinationChange(e) {
    let { section: t } = this.props,
      r = Number(e.target.value);
    n(() => {
      r < 3
        ? (t.SetButtonDestination(r), t.SetButtonAppOverride(void 0))
        : (t.SetButtonDestination(qt.k_EStorePage), t.SetButtonAppOverride(r));
    });
  }
  OnChangeStorePageURL() {
    let { section: e } = this.props;
    P(
      (0, X.jsx)(Ug, {
        strExistingURL: R.STORE_BASE_URL + e.GetDestinationStorePath(),
        fnUpdateURLOnSuccess: e.SetButtonDestinationStoreURL,
      }),
      window,
    );
  }
  render() {
    let { section: e } = this.props,
      t = this.BuildTextOptions(),
      n = this.BuildDestinationOptions(),
      r = e.BHasButtonAppIDOverride()
        ? e.GetButtonAppidOverride()
        : e.GetDestination();
    return (0, X.jsxs)(`div`, {
      className: Xh,
      children: [
        (0, X.jsxs)(`div`, {
          className: Zh,
          children: [
            (0, X.jsx)(`span`, {
              children: L(`#EventEmail_Section_ButtonText`),
            }),
            (0, X.jsx)(`select`, {
              value: e.GetButtonTextLoc(),
              onChange: this.OnButtonLocChange,
              children: t,
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          children: [
            (0, X.jsx)(`span`, {
              children: L(`#EventEmail_Section_Destination`),
            }),
            (0, X.jsx)(`select`, {
              value: r,
              onChange: this.OnDestinationChange,
              children: n,
            }),
          ],
        }),
        e.BIsStoreSalesPage() &&
          (0, X.jsxs)(`div`, {
            children: [
              (0, X.jsxs)(`span`, {
                children: [
                  L(`#EventEmail_Section_EnterSalesPage`),
                  ` `,
                  (0, X.jsx)(H, {
                    tooltip: L(`#EventEmail_Section_EnterSalesPage_ttip`),
                  }),
                ],
              }),
              (0, X.jsx)(`span`, {
                children: R.STORE_BASE_URL + e.GetDestinationStorePath(),
              }),
              (0, X.jsx)(Ns, {
                onClick: this.OnChangeStorePageURL,
                children: L(`#EventEmail_Section_UpdateURL`),
              }),
            ],
          }),
      ],
    });
  }
};
(D([A], Hg.prototype, `OnButtonLocChange`, null),
  D([A], Hg.prototype, `OnDestinationChange`, null),
  D([A], Hg.prototype, `OnChangeStorePageURL`, null),
  (Hg = D([r], Hg)));
var Ug = class extends Z.Component {
  state = {
    bIsValid: gn.IsValidStoreURL(this.props.strExistingURL),
    strURL: this.props.strExistingURL ? this.props.strExistingURL : ``,
  };
  OnURLUpdate(e) {
    let t = e.currentTarget.value;
    this.setState({ bIsValid: gn.IsValidStoreURL(t), strURL: t });
  }
  render() {
    let { fnUpdateURLOnSuccess: e, closeModal: t } = this.props;
    return (0, X.jsx)(j, {
      strDescription: L(`#EventEmail_Section_EnterSalesPage_ttip`),
      strTitle: L(`#EventEmail_Section_UpdateURL`),
      onOK: () => {
        (e(this.state.strURL), t());
      },
      onCancel: t,
      bOKDisabled: !this.state.bIsValid,
      children: (0, X.jsx)(`div`, {
        children: (0, X.jsx)(`input`, {
          type: `test`,
          className: xg,
          value: this.state.strURL,
          onChange: this.OnURLUpdate,
        }),
      }),
    });
  }
};
(D([A], Ug.prototype, `OnURLUpdate`, null), (Ug = D([r], Ug)));
function Wg(e) {
  let { clanSteamID: t, section: n, lang: r, bEditor: i, artworkType: a } = e,
    [o, s] = Z.useState(r),
    c = b.GetEditModel(),
    l = Z.useCallback(
      (e, t, r) => {
        (S.GetExtensionString(e) && n.SetImage(S.GetHashAndExt(e), r), s(r));
      },
      [n],
    ),
    [u, d, f] = g(() => [
      n.BHasSomeImage(),
      Ki[a],
      n.GetEmailImageURLWithFallback(o, t),
    ]);
  return (0, X.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, X.jsxs)(`div`, {
        className: mg,
        children: [
          (0, X.jsx)(`img`, {
            width: f ? Xi(d.width) : void 0,
            height: f ? Xi(d.height) : void 0,
            src: f,
          }),
          !!i &&
            (0, X.jsx)(Gg, {
              section: n,
              clanSteamID: t,
              lang: r,
              artworkType: a,
            }),
        ],
      }),
      u &&
        (0, X.jsx)(_a, {
          clanSteamID: t,
          langOverride: o,
          fnGetImageHash: (e) => n.GetImageHash(e),
          fnOnLanguagePreviewChange: (e) => s(e),
          fnOnRemoveImage: (e) => n.SetImage(null, e),
          fnOnArtworkLangChange: l,
          realms: c.GetIncludedRealmList(),
          fnLangHasData: c.BHasTitleImage,
        }),
    ],
  });
}
var Gg = class extends Z.Component {
  state = { bDownloadFromClanImageStore: !1 };
  m_clanImageUploader = void 0;
  constructor(e) {
    (super(e), this.RefreshUploader());
  }
  componentDidUpdate(e) {
    (e.clanSteamID.GetAccountID() != this.props.clanSteamID.GetAccountID() ||
      e.artworkType != this.props.artworkType) &&
      this.RefreshUploader();
  }
  RefreshUploader() {
    this.m_clanImageUploader = new Ji(this.props.clanSteamID, [
      this.props.artworkType,
    ]);
  }
  async DoUpload() {
    let { section: e } = this.props;
    try {
      let t = await this.m_clanImageUploader.UploadAllImages();
      for (let n of t)
        if (!n.bSuccess || n.uploadResult.success !== 1)
          ((n.image.status = `failed`),
            (n.image.message = n.uploadResult.message));
        else {
          n.image.status = `success`;
          let t = S.GetExtensionString(n.uploadResult);
          e.SetImage(n.uploadResult.image_hash + t, n.image.language);
        }
    } catch (e) {
      console.error(`DoUpload failed:` + k(e).strErrorMsg);
    }
  }
  async OnDropFiles(e) {
    if (e && e.length > 0) {
      let { lang: t } = this.props,
        n = !0,
        r = Array.from(e);
      for (let e = 0; n && e < r.length; e++) {
        let i = r[e];
        ((n = await this.m_clanImageUploader.AddImage(i, t)),
          n ||
            (console.error(
              `ClanImagePicker.OnDropFiles: failed on i=` +
                e +
                ` file=` +
                i.name,
            ),
            P(
              (0, X.jsx)(Zo, {
                strDescription: L(`#ImagePicker_Error`, i.name),
              }),
              window,
            )));
      }
      return n;
    }
    return !1;
  }
  RenderInstructions() {
    let { artworkType: e } = this.props,
      t = Ki[e];
    return (0, X.jsxs)(Z.Fragment, {
      children: [
        (0, X.jsx)(`span`, {
          className: $h,
          children: L(`#EventEmail_SelectBrandingImage`),
        }),
        (0, X.jsx)(`span`, {
          children: L(`#EventEmail_ImageDimension`, Xi(t.width), Xi(t.height)),
        }),
      ],
    });
  }
  async OnPreviousImageSelected(e, t) {
    this.state.bDownloadFromClanImageStore ||
      this.setState({ bDownloadFromClanImageStore: !0 }, async () => {
        let { lang: t } = this.props;
        try {
          await this.m_clanImageUploader.AddExistingClanImage(e, t);
        } catch (e) {
          let t = k(e);
          (console.error(`AddExistingClanImage: ` + t.strErrorMsg, t),
            P(
              (0, X.jsx)(Zo, {
                strDescription: L(`#EventError_Code`, t.strErrorMsg),
              }),
              window,
            ));
        }
        this.setState({ bDownloadFromClanImageStore: !1 });
      });
  }
  render() {
    let { section: e } = this.props;
    if (this.state.bDownloadFromClanImageStore)
      return (0, X.jsx)(`div`, {
        className: ag,
        children: (0, X.jsx)(C, {
          position: `center`,
          size: `medium`,
          string: L(`#Loading`),
        }),
      });
    let { clanSteamID: t } = this.props,
      n = va(this.m_clanImageUploader, `emailartupload_`);
    return (0, X.jsx)(`div`, {
      className: ag,
      children: (0, X.jsxs)(Pa, {
        onDropFiles: this.OnDropFiles,
        elAdditonalButtons: [
          (0, X.jsx)(
            la,
            {
              OnClanImageSelected: this.OnPreviousImageSelected,
              clanSteamID: t,
            },
            `emailsecion`,
          ),
        ],
        renderDesciption: this.RenderInstructions,
        children: [
          (0, X.jsx)(`div`, { className: ca, children: n }),
          (0, X.jsx)(Fa, {
            imageUploader: this.m_clanImageUploader,
            fnOnUploadImageRequested: this.DoUpload,
          }),
        ],
      }),
    });
  }
};
(D([A], Gg.prototype, `DoUpload`, null),
  D([A], Gg.prototype, `OnDropFiles`, null),
  D([A], Gg.prototype, `RenderInstructions`, null),
  D([A], Gg.prototype, `OnPreviousImageSelected`, null),
  (Gg = D([r], Gg)));
var Kg = new URL(
    `../../../images/applications/community/Logo_Steamworks.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  qg = new URL(
    `../../../images/applications/community/Logo_Steam_NoWords_Dark.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Jg = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAgCAYAAAAPHGYtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8FJREFUeNrsWltIVEEYXs28ZPebEVq+BBGZIl1ALc0LaDd9q8gi6yl66LGgh24PPddDPkVXlCDIzbByqcwoSsEsWB80NKxIpIhKKiTdvh/+iZ/D6ZxZ3KNnaT74dmbOzM6emf8652xCJBIJGPgTiWYLjHAMjHCMcAwmCUn0sXN37VuzFRNCKxgEq8DeG43Xz8dMOMBys78TwmJwNvgLnBNTyxFoBDvMXmvjILia66/AMXDEK+G0wiQvmz3XA8JBiRIO9q0HRU/MY47LDexBMR0cxg20WPoyUZRzM4z+Tod5trD5K1zD+DGN369EsQQcxfgGl7GLUGzlZg/Gd1j681DkcTOE/g+W/vkodthM3Y2x3VOSELjgAFgKfqObt2xoLXiW67vAzn9sWgopFzhTXO4Fn2n8/jGwGPwKNriM/QnWg6lgG7jZ0n8CrAHHLYqisAy8ZHP9FAnIj6l0E5cU8NZZ+sq4HAVbHOYotggmIDQ8ZoDikL8PcbMASjFDKMg0FCXcbMfYzw5TUV+dYNOUpdIuoBRRpYbkwp7zYpNRFPL1B1jsd4c5lCA+gQMs5G3gcQ/WdAvcDiazUtzl6/ngXDHGCSN+iL2JGto4iOKlEI5CAZimuVjlxx8JC1sDAWd5sKbb7LYIFTZWHtCwhEw6+wmu8vMTgqCNq1AuIiL67eINLSxbWZjQ5ABbT6xdG7mkdhtlUvUuVrj4eEKgGXdOcta2CbwnFvsUix12+K4UAAmnn336AnZ39R65NlKeHChHBicThZpWTniPNWX73q2xNtIBSz3iKceC01Gu13QRKt4MYp434LgI2mWYK82Ddcl7qmAXnBqFcFLpDCOY7We3Jl0bWcxGtiLHxfK5oYibs9BuI6K+QW2CJRbEyrWR2+oSwinleh/6whpTZHB8VNzvZ7emtPEImMtnGsJrLLbf4TuVQgHmcfZkZ1l3PHJt+axM7zStZojPNFa0+V04T8AvvMl7NRcr481h8IdonwazeMwhj4RzBlzKdHXBULQhjq1xlRDQjY/BJTWjuk9Yg5NLo0NflXAnFyz9a1lglLbmclxzQjrG2W1uM7570eZ+wxjfh+oKvvQRfBFPz+6ifdkmU+YBlw0tEoe+kE3//ShTalKkahvmuFjP3/MPJyNxg6Qox9OGnuO626uF38J/252DHoq5nFLxmy7PtR479F0BU7h+NRBnSKC/RsH81f+j6swrA32wmyXrDWLfary2nJX8jsJADwsn060dZRrEYUJgMNkxx8BYjoERjhGOgRHO/40/AgwA6Pwl5bmDALcAAAAASUVORK5CYII=`,
  Yg = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA4CAYAAABJ7S5PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEJGOUM2QTBGNkY5MTFFOUJBQTg4OUJENjhFNUQyN0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEJGOUM2OUZGNkY5MTFFOUJBQTg4OUJENjhFNUQyN0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI2RThDNjdERjZGODExRTk5N0QwOTZDNjI3Q0M0MTRDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI2RThDNjdFRjZGODExRTk5N0QwOTZDNjI3Q0M0MTRDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XKq1FgAAAwJJREFUeNrsm4tRhDAQhoNjA7RAC7QQSzhLiCVgCVgClnBXAlcClAAlYAlnMm7OHeSRF4HEy8yOzp0w7Mfun90kJrfbjTwGIU8PBD/j2fYGSZJs/YwpN8Yt55bBTzmu3Fqwi8nN7xkhfrGxDYdwuhKPqGgdANO5d3r3Y8Y5ujMI4dCgAQFbM4oaPHIEt8KBMOVYBn/IdgJRGQLANiAYlFsJEYO/z9ZAFOgC5hmECwjY2bnvCqwRcyCa0UXME4iTQwhLVo3F8g8IUOipi9nGIFILTTCGAGlTTIGgS+G0IYjCA4QCdOGENGOQM4cOCGFnPOU4BLF1NHRzgjqXGlTxptQhCF/a8CfdlzSCatyohNwOIS0mIZiI5dIUxSxB1B4BDBCBRGX67AxzkB0cxGTFKf2e6j5NmhdZuw9InY82LtCcKbfhn5b1gJyaGoCSB9mG8zDpeWv9gctQw5EjCF+jlvkLvZ0WRHrfMVMk+ar0fFqx5P/TzJfijb1EtgjVKi/V8ZQ4caMAQ1z4CmH879YshdM1h9FxK+Gzd259BL72yhqhWVmGZkRZI/gH10gj/6qbGquiEqNQblFQhakPC3VEF5k+ZFoagcZ7ZGnRm6SGIHSJKEXUmsiVFeoq5rRYXI+IDEatGgiq23pFoE0YcwoCdaRFQDNKpyMNydpKtGjERo2X3BugBxfJNxXBVz4WsNMqs5do0BXLEBdpmHMQAUZFrZM/JmJ5DgDCoLuCbjprNCGuSzoFEQCMs83itekBsqNpRkMM92GtQKCzVuUBZpTBZhNJuaBaG3DOksLDyDORqaeiSW47tDYglAoqjcNkqeeZxSoSnKXGCATznCJOIDgDASlRE//ls7ONZWMQO3ehtWv90e01KDjfhFQs6YB4BuWnE2qfkmOcbWihpd52v2X05suDtdJsa8prh9KrHQslLwCUNQIVR7504UxGJ958glCqLLmGyOW53OHD9uT3ONGF7HQOQ/pvVGKDuGZoRiGoxJ7bie6RKe0+HR5EjOPxX34wvgUYAA3Q5FQ1OsEYAAAAAElFTkSuQmCC`,
  Xg = {
    localized_headline: Array(32),
    localized_body: Array(32),
    localized_image: Array(32),
    button_destination: qt.k_EEventPage,
    button_loc_token: `EventEmail_Button_ClickForMoreDetails`,
    video_link: ``,
  },
  Zg = class extends Z.Component {
    GetEmailEditModel() {
      return new xn(this.props.editModel);
    }
    render() {
      let { editModel: e } = this.props,
        t = e.GetCurEditLanguage(),
        n = this.GetEmailEditModel(),
        r = [];
      n.GetSectionObjects().forEach((i, a) => {
        r.push(
          (0, X.jsx)(
            Vg,
            {
              lang: t,
              clanSteamID: e.GetClanSteamID(),
              bEditor: e.BIsEmailEditable(),
              appid: e.GetAppID(),
              section: i,
              additionalClassName: void 0,
              bTemplateEditable: !0,
              fnRemoveSection: () => n.RemoveSection(a),
            },
            `email_editor_section_` + a,
          ),
        );
      });
      let i = n.GetLocalizedSubject(t);
      return (0, X.jsxs)(`div`, {
        className: ng,
        children: [
          (0, X.jsxs)(`div`, {
            className: yg,
            children: [
              (0, X.jsxs)(`span`, {
                className: og,
                children: [L(`#LanguageTitle`), `: `],
              }),
              (0, X.jsx)(Yi, {
                selectedLang: t,
                fnLangHasData: n.BHasSomeLanguage,
                fnOnLanguageChanged: (t) => e.SetCurEditLanguage(t),
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Y(V, cg),
            children: [
              (0, X.jsx)(`span`, {
                className: og,
                children: L(`#EventEmail_Subject`),
              }),
              (0, X.jsx)(`input`, {
                type: `text`,
                value: i,
                size: 90,
                maxLength: 250,
                onChange: (t) =>
                  this.GetEmailEditModel().SetLocalizedSubject(
                    e.GetCurEditLanguage(),
                    t.currentTarget.value,
                  ),
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Y(ug, Sg),
            children: [
              (0, X.jsx)(`div`, {
                className: Y(Jh, Tg),
                children: (0, X.jsx)(`a`, {
                  href: R.PARTNER_BASE_URL,
                  children: (0, X.jsx)(`img`, { src: Kg, className: wg }),
                }),
              }),
              (0, X.jsx)(`div`, {
                className: Y(Cg),
                children: (0, X.jsx)(`div`, { className: Eg, children: i }),
              }),
              r,
              (0, X.jsxs)(`div`, {
                className: Y(sg, Bg),
                children: [
                  (0, X.jsx)(`b`, { children: `Have Questions?` }),
                  (0, X.jsx)(`br`, {}),
                  (0, X.jsx)(`a`, { href: `#`, children: `Contact us` }),
                  ` and we'll get right back to you.`,
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: Y(Cg),
                children: [
                  (0, X.jsx)(`img`, { src: qg, className: Dg }),
                  (0, X.jsx)(`div`, {
                    className: Og,
                    children: (0, X.jsxs)(`div`, {
                      children: [`- `, L(`#EventEmail_Developer_SignOff2`)],
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Y(kg),
            children: [
              (0, X.jsx)(`span`, {
                className: Ag,
                children: L(`#EventEmail_Developer_Footer_Reason`),
              }),
              (0, X.jsxs)(`div`, {
                className: jg,
                children: [
                  (0, X.jsx)(`img`, { src: Jg, width: 103, height: 43 }),
                  (0, X.jsxs)(`div`, {
                    children: [
                      (0, X.jsx)(`div`, {
                        className: Mg,
                        children: (0, X.jsxs)(`strong`, {
                          children: [
                            L(`#EventEmail_Developer_Footer_Valve`),
                            (0, X.jsx)(`br`, {}),
                            L(`#EventEmail_Developer_Footer_Valve2`),
                          ],
                        }),
                      }),
                      (0, X.jsx)(`div`, {
                        className: Ng,
                        children: L(`#EventEmail_Developer_Footer_Valve3`),
                      }),
                      (0, X.jsx)(`div`, {
                        children: (0, X.jsxs)(`a`, {
                          className: V,
                          href:
                            (R.IN_CLIENT ? `steam://openurl/` : ``) +
                            `https://twitter.com/steam_games`,
                          target: R.IN_CLIENT ? void 0 : `_blank`,
                          children: [
                            (0, X.jsx)(`img`, {
                              src: Yg,
                              width: 33,
                              height: 28,
                            }),
                            (0, X.jsx)(`div`, {
                              className: Pg,
                              children: L(
                                `#EventEmail_Developer_Footer_Follow`,
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, X.jsx)(`button`, {
            className: Y(Os, Jh),
            onClick: () => {
              n.AddSection(Xg);
            },
            children: L(`#EventEmail_Template_AddSection`),
          }),
        ],
      });
    }
  };
Zg = D([r], Zg);
var Qg = class extends Z.Component {
  state = {
    capabilities: void 0,
    selectedCapability: void 0,
    nDuplicatesRemoved: 0,
  };
  m_cancelSignal = Q.default.CancelToken.source();
  m_appFileInput = Z.createRef();
  m_pubFileInput = Z.createRef();
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`DevEventRecipientOptions cancelled`);
  }
  async componentDidMount() {
    let e = await b.GetPartnerCapabilities(this.m_cancelSignal),
      t = this.GetEmailEditModel(),
      n = { label: e[0].capability, value: e[0] };
    (e.forEach((e) => {
      e.id === t.GetInternalTargetingPartnerCapability() &&
        (n = { label: e.capability, value: e });
    }),
      this.setState({ capabilities: e, selectedCapability: n }));
  }
  GetEmailEditModel() {
    return new xn(this.props.editModel);
  }
  async OnFileChoice(e, t) {
    let n = t.target.files;
    if (n && n.length > 0 && n[0]) {
      let t = this;
      this.setState({ readingFile: !0, file: n[0] }, () => {
        let n = new FileReader();
        ((n.onload = function () {
          let r = n.result
              .toString()
              .split(`
`)
              .map((e) => Number.parseInt(e)),
            i = new Set(r);
          (e == `app`
            ? t.GetEmailEditModel().SetInternalAppIDs(Array.from(i))
            : t.GetEmailEditModel().SetInternalPublisherIDs(Array.from(i)),
            t.setState({
              readingFile: !1,
              nDuplicatesRemoved: r.length - i.size,
              file: null,
            }));
        }),
          (n.onerror = function () {
            (console.error(`DevEventRecipientOptions - Failed to read file`, n),
              t.setState({ readingFile: !1, file: null }));
          }),
          n.readAsText(this.state.file));
      });
    }
    (this.m_appFileInput.current &&
      this.m_appFileInput.current.value &&
      (this.m_appFileInput.current.value = null),
      this.m_pubFileInput.current &&
        this.m_pubFileInput.current.value &&
        (this.m_pubFileInput.current.value = null));
  }
  ShowTargets(e) {
    let t = this.GetEmailEditModel(),
      n =
        e == `app`
          ? t.GetInternalTargetAppIDs()
          : t.GetInternalTargetPublisherIDs();
    P(
      (0, X.jsx)(j, {
        strTitle: L(
          e == `app`
            ? `#EventEmail_Developer_ShowApps`
            : `#EventEmail_Developer_ShowPublisher`,
          n.length,
        ),
        onOK: () => {},
        onCancel: () => {},
        bAlertDialog: !0,
        children: n.map((t) => (0, X.jsx)(`div`, { children: t }, e + `_` + t)),
      }),
      window,
    );
  }
  ClearTargets(e) {
    let t = this.GetEmailEditModel();
    e == `app`
      ? t.SetInternalAppIDs([])
      : e == `publisher` && t.SetInternalPublisherIDs([]);
  }
  render() {
    if (!this.state.capabilities)
      return (0, X.jsx)(C, { string: L(`#Loading`) });
    let e = this.GetEmailEditModel(),
      t = this.state.capabilities.map((e) => ({
        value: e,
        label: e.capability,
      })),
      n = ip.PubRights.map((t) =>
        (0, X.jsx)(
          F,
          {
            onChange: (n) => e.UpdateInternalTargetPublisherRights(t.flag, n),
            label: L(`#PubRight_` + t.token),
            tooltip: L(`#PubRight_` + t.token + `_Tooltip`),
            checked: e.BHasInternalTargetingPublisherRight(t.flag),
          },
          `PubRights` + t.flag,
        ),
      ),
      r = ip.AppRights.filter(
        (e) => ![rp.Download, rp.UploadCDKeys, rp.ManageCEG].includes(e.token),
      ).map((t) =>
        (0, X.jsx)(
          F,
          {
            onChange: (n) => e.UpdateInternalTargetAppRights(t.flag, n),
            label: L(`#AppRight_` + t.token),
            tooltip: L(`#AppRight_` + t.token + `_Tooltip`),
            checked: e.BHasInternalTargetingAppRight(t.flag),
          },
          `AppRights` + t.flag,
        ),
      );
    return (0, X.jsxs)(`div`, {
      className: vg,
      children: [
        (0, X.jsx)(`div`, {
          className: Y(O),
          children: (0, X.jsx)(`span`, {
            className: O,
            children: L(`#EventEmail_Recipients`),
          }),
        }),
        (0, X.jsxs)(`div`, {
          className: Y(U, Fo),
          children: [
            (0, X.jsx)(`div`, { children: L(`#EventEmail_Recipients_desc`) }),
            (0, X.jsx)(`table`, {
              className: Fg,
              children: (0, X.jsxs)(`tbody`, {
                children: [
                  (0, X.jsxs)(`tr`, {
                    children: [
                      (0, X.jsx)(`th`, {
                        children: L(`#EventEmail_Developer_IsUrgent`),
                      }),
                      (0, X.jsx)(`td`, {
                        children: (0, X.jsx)(F, {
                          onChange: (t) => e.SetInternalTargetPriority(t),
                          label: L(`#EventEmail_Developer_IsUrgent_Desc`),
                          checked: e.BHasInternalTargetingPriority(),
                        }),
                      }),
                    ],
                  }),
                  (0, X.jsxs)(`tr`, {
                    children: [
                      (0, X.jsx)(`th`, {
                        children: L(`#EventEmail_Developer_PartnerCapability`),
                      }),
                      (0, X.jsx)(`td`, {
                        children: (0, X.jsx)(Ze._default, {
                          className: `react-select-container`,
                          classNamePrefix: `react-select`,
                          isSearchable: !0,
                          isMulti: !1,
                          value: this.state.selectedCapability,
                          options: t,
                          onChange: (e) =>
                            this.setState({ selectedCapability: e }, () =>
                              this.GetEmailEditModel().SetInternalTargetPartnerCapability(
                                e.value.id,
                              ),
                            ),
                        }),
                      }),
                    ],
                  }),
                  (0, X.jsx)(`tr`, {
                    children: (0, X.jsx)(`th`, {
                      colSpan: 2,
                      children: L(`#EventEmail_Developer_RightDesc`),
                    }),
                  }),
                  (0, X.jsxs)(`tr`, {
                    children: [
                      (0, X.jsx)(`th`, {
                        children: L(`#EventEmail_Developer_PublisherRights`),
                      }),
                      (0, X.jsx)(`td`, { children: n }),
                    ],
                  }),
                  (0, X.jsxs)(`tr`, {
                    children: [
                      (0, X.jsx)(`th`, {
                        children: L(`#EventEmail_Developer_AppRights`),
                      }),
                      (0, X.jsx)(`td`, { children: r }),
                    ],
                  }),
                ],
              }),
            }),
            this.state.readingFile && (0, X.jsx)(C, { size: `small` }),
            (0, X.jsx)(`div`, {
              children: (0, X.jsx)(`b`, {
                children: L(`#EventEmail_Developer_FilterOptional`),
              }),
            }),
            this.state.nDuplicatesRemoved > 0 &&
              (0, X.jsx)(`div`, {
                className: `EHcr1piLxMU-`,
                children: (0, X.jsx)(`b`, {
                  children: L(
                    `#EventEmail_Developer_DuplicateRemoved`,
                    to(this.state.nDuplicatesRemoved),
                  ),
                }),
              }),
            (0, X.jsxs)(`div`, {
              className: Ig,
              children: [
                (0, X.jsx)(`div`, {
                  className: Lg,
                  children: (0, X.jsx)(`b`, { children: `App Targeting` }),
                }),
                (0, X.jsxs)(`div`, {
                  className: Rg,
                  children: [
                    !!e.GetInternalTargetAppCount() &&
                      (0, X.jsxs)(`div`, {
                        className: `n1a-yTuZoE0-`,
                        children: [
                          (0, X.jsxs)(`div`, {
                            children: [
                              e.GetInternalTargetAppCount(),
                              ` apps targeted.`,
                            ],
                          }),
                          (0, X.jsx)(`button`, {
                            className: `btn_blue_steamui btn_medium`,
                            onClick: () => this.ShowTargets(`app`),
                            children: (0, X.jsx)(`span`, {
                              children: L(
                                `#EventEmail_Developer_ShowApps`,
                                e.GetInternalTargetAppCount(),
                              ),
                            }),
                          }),
                          (0, X.jsx)(`button`, {
                            className: `btn_blue_steamui btn_medium`,
                            onClick: () => this.ClearTargets(`app`),
                            children: (0, X.jsx)(`span`, {
                              children: L(
                                `#EventEmail_Developer_ClearApps`,
                                e.GetInternalTargetAppCount(),
                              ),
                            }),
                          }),
                        ],
                      }),
                    (0, X.jsxs)(`div`, {
                      className: zg,
                      children: [
                        L(`#EventEmail_Developer_AddApps`),
                        (0, X.jsx)(`label`, {
                          className: pa,
                          htmlFor: `internal_loadappid`,
                          children: L(`#EventEmail_Developer_SelectFile`),
                        }),
                        (0, X.jsx)(`input`, {
                          ref: this.m_appFileInput,
                          id: `internal_loadappid`,
                          style: { display: `none` },
                          type: `file`,
                          onSubmit: (e) => this.OnFileChoice(`app`, e),
                          onChange: (e) => this.OnFileChoice(`app`, e),
                          multiple: !1,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              className: Ig,
              children: [
                (0, X.jsx)(`div`, {
                  className: Lg,
                  children: (0, X.jsx)(`b`, {
                    children: `Publisher Targeting`,
                  }),
                }),
                (0, X.jsxs)(`div`, {
                  className: Rg,
                  children: [
                    e.GetInternalTargetPublisherCount() &&
                      (0, X.jsxs)(`div`, {
                        className: `n1a-yTuZoE0-`,
                        children: [
                          (0, X.jsxs)(`div`, {
                            children: [
                              e.GetInternalTargetPublisherCount(),
                              ` publishers targeted.`,
                            ],
                          }),
                          (0, X.jsx)(`button`, {
                            className: `btn_blue_steamui btn_medium`,
                            onClick: () => this.ShowTargets(`publisher`),
                            children: (0, X.jsx)(`span`, {
                              children: L(
                                `#EventEmail_Developer_ShowPublisher`,
                                e.GetInternalTargetPublisherCount(),
                              ),
                            }),
                          }),
                          (0, X.jsx)(`button`, {
                            className: `btn_blue_steamui btn_medium`,
                            onClick: () => this.ClearTargets(`publisher`),
                            children: (0, X.jsx)(`span`, {
                              children: L(
                                `#EventEmail_Developer_ClearApps`,
                                e.GetInternalTargetAppCount(),
                              ),
                            }),
                          }),
                        ],
                      }),
                    (0, X.jsxs)(`div`, {
                      className: zg,
                      children: [
                        L(`#EventEmail_Developer_AddPublisher`),
                        (0, X.jsx)(`label`, {
                          className: pa,
                          htmlFor: `internal_loadpubid`,
                          children: L(`#EventEmail_Developer_SelectFile`),
                        }),
                        (0, X.jsx)(`input`, {
                          ref: this.m_appFileInput,
                          id: `internal_loadpubid`,
                          style: { display: `none` },
                          type: `file`,
                          onSubmit: (e) => this.OnFileChoice(`publisher`, e),
                          onChange: (e) => this.OnFileChoice(`publisher`, e),
                          multiple: !1,
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
    });
  }
};
(D([A], Qg.prototype, `OnFileChoice`, null),
  D([A], Qg.prototype, `ShowTargets`, null),
  D([A], Qg.prototype, `ClearTargets`, null),
  (Qg = D([r], Qg)));
var $g = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAAAgCAYAAAAPHGYtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABo1JREFUeNrsWg1MVlUY/iDTElOcI9ZgZBorV8ywVFYGc05mZQbmMgoNk37NQq3IJZWoLf+l9eMqSQ1lpm4aWgStpauZYbl+wK3EssjKflYmtAyi59Hnbme3e7/v3o9PVtt9t2fnfPe+55x7z3Pe97znvV9cZ2dnKJD/pvTwqji5oLAPiuuAscBwYBDQR7dbgWZgP1APbN9UXXU8mN6uSVwkywEpyShKgTsMMiJJG1AJLAZJLcE0x5gckBKH4i5gCXBOlP3TesqACpAU+M9YkANieqN4GbgpRuPsYLcgqC2Y8i6QI2I4maNjPNYHwJhgL4qSHLmyzcCNUfTVAewGPtHvoUA2EG/o1DKoAEF/B1PvP1q7P0pidjFgwKR/YbPCdBQviSTKOOAR4Mlg6n1YDiYyBQUn92yffbwJXC/L4R6Va1ynFZ4B7FQITvkTyLATGci/xXQ5ZVEQw/NNkeo1wBxgr8D6awDZv026lF7AY8HUe7QcWE1/1I8AZ/lsvxYWMA3t6Q4n0jrw+y9ZIl1mHbAN157G73WoTzX2p1Rc/97D4XegiL4SSAR+VHCxBu0/ls5CFJdG6KoG+muk/wKKc130jkLvTofn4KKqAs4EGqCzyOV556IYCRyEzoMuOv0UDcfrPWpwrQD1nnw//H7dtJyJURBjRWBW+6UWMRTU23kNyNOlvUY7urrJHoi5GAUJuA8YpqwEX3wm8D7uD5DqKOCGCMgwus4No5fr8jh03ZOkU4axE130RkpnDnQud9HhgT5feoOhd772/1vNM6UVEIyNgpgTis5Ccoe/O+jwWm/V2233OGZFhDEYPPRV25kiipZUCHyGBfCz9J6hhapOEm5XfQHwi+r7Hfpnqmmjw8HZSYqMei9N5LMRnr/UflYEEbS8B2x6fI8kvcdgOznDoyDncUxOo+rvArcYZFlSaFy7yHbvCg9jDFTZjLFWq74HqMZLxhtWusV4+TyDnErc+ypM/024v9aDBZ+nSNN6V1rqdA/kTELbCzHGQeMayUo1lXj2g95WVGlp6+3kJPsk5j25LEsWA/swwAqU1iTSb19D4uWv7dmGZFxPwIO1hhnncyCHxEJ3h1ZWPdp0xOis1Fd7miktcsmmTJErJtGz5c4z0XYYdD8Kt6cDDykNZonjPoR+DqM47BSt8QEfBg55zJdN5QQZHR9FkSUX9JZAn5yle/Ptq0WSGGGsJ0Knst0UZsTfYOCCSVkQxuf7kWnAlzakhnFpm/A+DTpyhAwLdZK3Ae7BRbI8WuAYFJcBJPQ3T6E0BvwJoCWka7UzBHZbmSXQPeTA/BGgGEgTihl54IHmy/f6FvapTMMs4FNdZpQ1D/jQCAhOm2CMESiGWI+kstpy27jvFkh9A2xQBFaia7NVPuU7QyBXwRRLLQZNk2sqFlF8oANWOBrmZZK0h2XqfJMeRv1XDwTR7a0i0Pcl2uTzFbkxNF/ZhblntrzEg3VZZ7ocPEOOYfH9lFHZ4NJ2qebgbrTjgr9WVsf95UU/h1D7pHwNcIWmaSJITgYGmcG9woWY8SgalRFYGIGYHyLsN+wvQecl65kabZFO0mm2GlpFgX4maCGsVJrLkulh5rBJh3O6++26vMTrftnDw8o9oSo3/DbtTVwJV+HeMb0EQ+nlwD0+3n2fBx1OwgytuiaFsAXG/YYuzj83dbvlHMN7VaqeJ+s4OanAH4beUN0fjT4GObl6w4VNAAbooL/eV+JT4SeTk8+Hy3lpJXCD2yg/Wo56psx6iM+JqfegczOQ4kJ6nbEao5VsIylrCSOmSlsgwDNVqc2qUnWIjFNgMM9lzvZAd7fGWWEsds+Ws0tuaxY6YqT1nNId7S7tuC/lQzdLbXv6nJQOY3MNJ+N0VuK3pQsUznKFblHqyMk9fGeQ5vZxry5c+sbwBq3qa6vDpLdAp0LP1d+4ZWVCzBCbi2uEntuSnXKVzV6y0qtt8fi3iu/fsX9ihu5y5ZgOiEi/UoU+pwSpTe97ziKRYaVbUpQ+4QphFvkVnQPGKwLhSlgXxZj8ZFAeTH1kMVMgjMsftd3PVfi3TMm6zSLlauWWRkUxZnnwLce/5YSUiMzWOcKSVUoq8nzTIh+7TKT5lVqvB7BAgj94/D/cmuHe2rSvvBrDcU6SHRDTRXIMgnjGuDfk/J3GqxxXXmxC8J+1GLg1hxQGPyfM1UHL6z8/g7/jdgc5Zp4rdOpTrflHdivHZv6RnYfYbYEL60ZyAul++UeAAQDyv2dSS4HffQAAAABJRU5ErkJggg==`,
  e_ = (e) => {
    let [t, n] = (0, Z.useState)(e ? void 0 : !1);
    return (
      (0, Z.useEffect)(() => {
        let t = Q.default.CancelToken.source();
        return (
          e &&
            (async () => {
              let r = await t_.Get().HintLoadIsAppReleaseInSteamChina(e, t);
              t.token.reason || n(r);
            })(),
          () => t.cancel(`useSteamChinaAppIsVisible: unmounting`)
        );
      }, [e]),
      !!t
    );
  },
  t_ = class e {
    m_mapAppToSCVisibility = new Map();
    BIsAppReleasedInSteamChina(e) {
      return !!this.m_mapAppToSCVisibility.get(e);
    }
    async HintLoadIsAppReleaseInSteamChina(e, t) {
      if (this.m_mapAppToSCVisibility.has(e))
        return this.m_mapAppToSCVisibility.get(e);
      let n = R.COMMUNITY_BASE_URL + `ogg/${e}/ajaxisvisibleinsc`;
      try {
        let r = await Q.default.get(n, {
          withCredentials: !0,
          cancelToken: t.token,
        });
        if (r?.data?.success == 1 && !t.token.reason)
          return (
            this.m_mapAppToSCVisibility.set(e, !!r.data.visible),
            !!r.data.visible
          );
      } catch (e) {
        let t = k(e);
        console.error(`HintLoadIsAppReleaseInSteamChina: ` + t.strErrorMsg, t);
      }
      return !1;
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
  };
function n_(e) {
  let { editModel: t } = e,
    n = Gi(),
    r = new xn(t).GetSectionObj(0),
    [i, a] = g(() => [r.GetHeadline(n), r.GetBody(n)]);
  return (0, X.jsx)(`div`, {
    className: ng,
    children: (0, X.jsx)(`div`, {
      className: ug,
      children: (0, X.jsxs)(`div`, {
        className: Y(tg, sg),
        children: [
          (0, X.jsx)(`p`, {
            children: `This description and location information is automatically injected into the registration and reminder emails`,
          }),
          (0, X.jsx)(W, { children: `Short Description For Email Rendering` }),
          (0, X.jsx)(`textarea`, {
            className: hg,
            placeholder: `Come join us...`,
            value: i,
            rows: 8,
            onChange: (e) => r.SetHeadline(e.currentTarget.value || ``, n),
          }),
          (0, X.jsx)(W, { children: `Event Location (address / building)` }),
          (0, X.jsx)(`textarea`, {
            className: hg,
            placeholder: `10040 NE 4th Ave..`,
            value: a,
            rows: 8,
            onChange: (e) => r.SetBody(e.currentTarget.value || ``, n),
          }),
        ],
      }),
    }),
  });
}
var r_ = `XzFUOm8Kn9I-`;
function i_(e, t) {
  return e.BHasEmailEnabled() || e.clanSteamID.GetAccountID() == ni()
    ? !0
    : (q.IS_OGG || q.IS_VALVE_GROUP) && !!t?.valve_admin;
}
var a_ = r((e) => {
    let { editModel: t } = e,
      { bHasValidatedEmail: n } = mi(),
      { data: r } = bi(t.GetClanAccountID());
    if (!i_(t.GetEventModel(), r)) return null;
    let i = ni() !== t.GetClanAccountID();
    return (0, X.jsxs)(Z.Fragment, {
      children: [
        (0, X.jsxs)(`div`, {
          className: Qh,
          children: [
            (0, X.jsxs)(`div`, {
              className: Y(Ko),
              children: [
                (0, X.jsx)(`span`, {
                  className: Y(O, Bs),
                  children: L(`#EventEmail_FeatureTitle`),
                }),
                (0, X.jsx)(`a`, {
                  href: `#`,
                  className: Y(uo),
                  children: (0, X.jsx)(`span`, {
                    children: L(`#selectimage_see_documentation`),
                  }),
                }),
              ],
            }),
            (0, X.jsx)(`div`, {
              className: Y(U),
              children: (0, X.jsx)(z, {
                label: L(`#EventEmail_EnableEmailOption`),
                onChange: (t) => {
                  let { editModel: n } = e,
                    r = n.GetClanSteamID().GetAccountID();
                  ((n.CreateOrGetEmailSettings(r).bEnable = t),
                    n.SetDirty(x.jsondata_email));
                },
                checked: t.BIsEmailEnabled(),
              }),
            }),
          ],
        }),
        !!t.BIsEmailEnabled() &&
          (0, X.jsxs)(`div`, {
            className: `SwPfkG3lQn8-`,
            children: [
              i &&
                (0, X.jsx)(J, { children: (0, X.jsx)(m_, { editModel: t }) }),
              i &&
                (0, X.jsx)(J, {
                  children: (0, X.jsx)(s_, {
                    editModel: t,
                    bHasValidatedEmail: n,
                    permissions: r,
                  }),
                }),
              (0, X.jsx)(J, {
                children:
                  ni() === t.GetClanAccountID()
                    ? (0, X.jsx)(n_, { editModel: t })
                    : (0, X.jsx)(X.Fragment, {
                        children: q.IS_VALVE_GROUP
                          ? (0, X.jsx)(Zg, { editModel: t })
                          : (0, X.jsx)(c_, { editModel: t }),
                      }),
              }),
              (0, X.jsx)(o_, { editModel: t }),
              i &&
                (0, X.jsx)(J, {
                  children: q.IS_VALVE_GROUP
                    ? (0, X.jsx)(Qg, { editModel: t })
                    : (0, X.jsxs)(Z.Fragment, {
                        children: [
                          (0, X.jsx)(u_, { editModel: t, permissions: r }),
                          (0, X.jsx)(l_, { editModel: t, permissions: r }),
                        ],
                      }),
                }),
            ],
          }),
      ],
    });
  }),
  o_ = (e) =>
    e_(e.editModel.GetAppID())
      ? (0, X.jsx)(`div`, {
          className: $i,
          children: L(`#EventEmail_SteamChina_Warning`),
        })
      : null,
  s_ = class extends Z.Component {
    state = { bSettingUp: !1 };
    m_cancelSignal = Q.default.CancelToken.source();
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventEmailControlBar cancelled`);
    }
    FireTestEmail() {
      let { editModel: e } = this.props;
      b.FireTestEmail(
        e.GetClanSteamID(),
        e.GetGID(),
        e.GetCurEditLanguage(),
        this.m_cancelSignal,
      )
        .then((e) => {
          P(
            (0, X.jsx)(j, {
              strTitle: L(`#EventDisplay_Share_Success`),
              onOK: () => {},
              onCancel: () => {},
              bAlertDialog: !0,
              children: L(`#EventEmail_TestEmailQueue`),
            }),
            window,
          );
        })
        .catch((e) => {
          P((0, X.jsx)(Zo, { children: k(e).strErrorMsg }), window);
        });
    }
    OnTestEmail(e) {
      let { editModel: t } = this.props;
      (e.preventDefault(),
        this.props.bHasValidatedEmail && !t.BIsDirtyType(x.jsondata_email)
          ? ts(
              (0, X.jsx)(j, {
                strTitle: L(`#EventEmail_Test_Email`),
                onOK: this.FireTestEmail,
                onCancel: () => {},
                children: K(
                  `#EventEmail_Send_TestEmail_Desc`,
                  (0, X.jsx)(`a`, {
                    target: R.IN_CLIENT ? void 0 : `blank`,
                    href: R.STORE_BASE_URL + `account/`,
                    children: R.STORE_BASE_URL + `account/`,
                  }),
                ),
              }),
              G(e),
            )
          : t.BIsDirtyType(x.jsondata_email)
            ? P(
                (0, X.jsx)(Zo, { children: L(`#EventEmail_Test_Dirty`) }),
                window,
              )
            : P(
                (0, X.jsx)(Zo, {
                  children: K(
                    `#EventEmail_Test_Email_Fail`,
                    (0, X.jsx)(`a`, {
                      target: R.IN_CLIENT ? void 0 : `blank`,
                      href: R.STORE_BASE_URL + `account/`,
                      children: R.STORE_BASE_URL + `account/`,
                    }),
                  ),
                }),
                window,
              ));
    }
    OnPrepareEmail(e) {
      P((0, X.jsx)(f_, { editModel: this.props.editModel }), G(e));
    }
    OnSetupAndFireEmailConfirm(e) {
      ts(
        (0, X.jsx)(j, {
          strTitle: `(VO) Setup and Send Email`,
          onOK: () =>
            this.setState({ bSettingUp: !0 }, this.OnSetupAndFireEmail),
          onCancel: () => {},
          children: (0, X.jsx)(`div`, {
            children: `(VO) Be thoughtful. Talk to Alden or Adil if not sure. By pressing this, we will setup a database entry to fire this email in its current form and target. Double check the audience make sense and the localization looks good. This will also begin firing immediately.`,
          }),
        }),
        G(e),
      );
    }
    async OnSetupAndFireEmail() {
      let { editModel: e } = this.props;
      try {
        let t = q.IS_VALVE_GROUP
          ? await b.SetupInternalPartnerCommunication(
              this.m_cancelSignal,
              e.GetClanSteamID(),
              e.GetGID(),
              e.GetEmailSettings().internal_targeting,
            )
          : await b.SetupPartnerEmailCampaign(
              e.GetClanSteamID(),
              e.GetGID(),
              this.m_cancelSignal,
            );
        P(
          (0, X.jsxs)(j, {
            strTitle: L(`#EventDisplay_Share_Success`),
            onOK: () => {},
            onCancel: () => {},
            bAlertDialog: !0,
            children: [
              (0, X.jsx)(`div`, {
                children: `Succesfully created the email on the server and saved it to the event. We are done!`,
              }),
              !!t.warning &&
                `However we hit the following warning: ` + t.warning_msg,
            ],
          }),
          window,
        );
      } catch (e) {
        let t = k(e);
        (console.error(`OnSetupAndFireEmail failed: ` + t.strErrorMsg),
          P(
            (0, X.jsx)(j, {
              strTitle: L(`#Error_Message`),
              onOK: () => {},
              onCancel: () => {},
              bAlertDialog: !0,
              children: (0, X.jsxs)(`div`, {
                children: [
                  `We hit the follwoing error: Error Code (`,
                  t.errorCode,
                  `)`,
                  (0, X.jsx)(`br`, {}),
                  `Error Message: `,
                  t.strErrorMsg,
                ],
              }),
            }),
            window,
          ));
      } finally {
        this.setState({ bSettingUp: !1 });
      }
    }
    render() {
      let { editModel: e } = this.props,
        t = !!e.GetEmailSettings().locked,
        { permissions: n } = this.props;
      return (0, X.jsxs)(`div`, {
        className: Yh,
        children: [
          (0, X.jsxs)(`a`, {
            onClick: this.OnTestEmail,
            className: jo,
            children: [
              this.state.bSettingUp && (0, X.jsx)(C, { size: `small` }),
              L(`#EventEmail_Control_TestEmail`),
            ],
          }),
          t &&
            n?.valve_admin &&
            (0, X.jsx)(`a`, {
              onClick: this.OnSetupAndFireEmailConfirm,
              className: `ugkEbNZ8MZc-`,
              children: `(VO) Setup and Fire Email`,
            }),
          t &&
            !n?.valve_admin &&
            (0, X.jsx)(`div`, {
              children: L(`#EventEmail_Ready_ValveRequiredToSend`),
            }),
          !t &&
            (0, X.jsx)(`a`, {
              onClick: this.OnPrepareEmail,
              className: `ugkEbNZ8MZc-`,
              children: L(`#EventEmail_Control_Prepare`),
            }),
        ],
      });
    }
  };
(D([A], s_.prototype, `FireTestEmail`, null),
  D([A], s_.prototype, `OnTestEmail`, null),
  D([A], s_.prototype, `OnPrepareEmail`, null),
  D([A], s_.prototype, `OnSetupAndFireEmailConfirm`, null),
  D([A], s_.prototype, `OnSetupAndFireEmail`, null),
  (s_ = D([r], s_)));
var c_ = r((e) => {
    let { editModel: t } = e,
      n = (e) => {
        let t = [],
          n = Do.Get().GetApp(e)?.GetName();
        return (
          wt.forEach((e) =>
            t.push(
              (0, X.jsx)(`option`, { value: e, children: L(`#` + e, n) }, e),
            ),
          ),
          t
        );
      },
      r = (t) => {
        e.editModel.SetCurEditLanguage(t);
      },
      i = (e) => {
        wt.forEach((n) => {
          n === e.target.value && new xn(t).SetSubjectTextLoc(n);
        });
      },
      a = new xn(t),
      o = n(t.GetAppID()),
      s = t.GetCurEditLanguage(),
      c = t.GetAppID(),
      [l] = aa(c, { include_basic_info: !0 });
    if (!l)
      return (0, X.jsx)(C, {
        string: L(`#Loading`),
        position: `center`,
        size: `small`,
      });
    let u = a.GetSectionObj(0),
      d = a.GetSectionObj(1),
      f = `#EventEmail_Reason_Played`,
      p = !1,
      m = `#EventEmail_Footer_Reason_Played`,
      h = l?.GetStorePageURL(),
      g = l?.GetName();
    if (!a.BIsTargetingGamePlayers()) {
      if (a.BIsTargetingGameFollowers())
        ((f = `#EventEmail_Reason_Follow`),
          (p = !0),
          (m = `#EventEmail_Footer_Reason_Followed`));
      else if (a.BIsTargetingGameWishlisters())
        ((f = `#EventEmail_Reason_Wishlist`),
          (p = !0),
          (m = `#EventEmail_Footer_Reason_Wishlisted`));
      else if (a.BIsTargetingSomeCreator()) {
        ((f = `#EventEmail_Reason_Follow`),
          (p = !0),
          (m = `#EventEmail_Footer_Reason_Followed`));
        let e = a.GetSomeCreatorTarget(),
          t = l.GetAllCreatorClanIDs().find((t) => t == e);
        if (t) {
          let e = zo.InitFromClanID(t, R.EUNIVERSE),
            n = ai.GetCreatorHome(e);
          if (n) {
            let e = `developer`;
            (l.GetAllDeveloperCreatorClans().includes(t) ||
              (e = l.GetAllPublisherCreatorClans().includes(t)
                ? `publisher`
                : `franchise`),
              (h = n.GetCreatorHomeURL(e)),
              (g = n.GetName()));
          }
        }
      }
    }
    return (0, X.jsxs)(`div`, {
      className: ng,
      children: [
        (0, X.jsxs)(`div`, {
          className: Y(V, cg),
          children: [
            (0, X.jsx)(`span`, {
              className: og,
              children: L(`#EventEmail_Subject`),
            }),
            (0, X.jsx)(`select`, {
              className: lg,
              value: a.GetSubjectTextLoc(),
              onChange: i,
              children: o,
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: yg,
          children: [
            (0, X.jsxs)(`span`, {
              className: og,
              children: [L(`#LanguageTitle`), `: `],
            }),
            (0, X.jsx)(Yi, {
              selectedLang: s,
              fnLangHasData: a.BHasSomeLanguage,
              fnOnLanguageChanged: r,
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: ug,
          children: [
            (0, X.jsx)(`div`, {
              className: Y(rg, Jh),
              children: (0, X.jsx)(`img`, { src: $g }),
            }),
            (0, X.jsxs)(`div`, {
              className: Y(eg, void 0, dg),
              children: [
                (0, X.jsx)(`div`, {
                  className: gg,
                  children: L(`#EventEmail_Hello`, L(`#EventEmail_UserName`)),
                }),
                (0, X.jsx)(`div`, { className: _g, children: L(f, g) }),
                !p &&
                  (0, X.jsx)(`a`, {
                    className: `_5GrDXiuhSWk-`,
                    href: h,
                    children: g,
                  }),
              ],
            }),
            (0, X.jsx)(Vg, {
              lang: s,
              clanSteamID: t.GetClanSteamID(),
              bEditor: t.BIsEmailEditable(),
              appid: t.GetAppID(),
              section: u,
              additionalClassName: void 0,
            }),
            (0, X.jsx)(Vg, {
              lang: s,
              clanSteamID: t.GetClanSteamID(),
              bEditor: t.BIsEmailEditable(),
              appid: t.GetAppID(),
              section: d,
              additionalClassName: void 0,
            }),
            (0, X.jsx)(`hr`, {}),
            (0, X.jsxs)(`div`, {
              className: fg,
              children: [
                (0, X.jsx)(`div`, { children: L(m) }),
                (0, X.jsx)(`span`, {
                  children: L(`#EventEmail_Footer_Game`, g),
                }),
                (0, X.jsx)(`div`, {
                  children: L(`#EventEmail_Footer_OptOut_Desc_Game`),
                }),
                (0, X.jsxs)(`span`, {
                  children: [
                    (0, X.jsx)(`a`, {
                      href: `#`,
                      children: L(`#EventEmail_Footer_OptOut_Target`, g),
                    }),
                    ` ` + L(`#EventEmail_Footer_OptOut_Or`) + ` `,
                    (0, X.jsx)(`a`, {
                      href: `#`,
                      children: L(`#EventEmail_Footer_Optout_All`),
                    }),
                  ],
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              className: Y(ig, V),
              children: [
                (0, X.jsx)(`img`, { src: Jg }),
                (0, X.jsxs)(`div`, {
                  children: [
                    (0, X.jsx)(`div`, {
                      children: L(`#EventEmail_Footer_LegalWithAddress_Line1`),
                    }),
                    (0, X.jsx)(`div`, {
                      children: L(`#EventEmail_Footer_LegalWithAddress_Line2`),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }),
  l_ = class extends Z.Component {
    state = {};
    GetEmailEditModel() {
      return new xn(this.props.editModel);
    }
    async componentDidMount() {
      let e = await oi.LoadClanInfoForClanSteamID(
        this.props.editModel.GetClanSteamID(),
      );
      this.setState({ clanInfo: e });
    }
    OnControlGroupSpinnerChange(e) {
      let t = Number.parseInt(e.target.value);
      this.GetEmailEditModel().SetControlGroupPercent(t);
    }
    render() {
      let { editModel: e, permissions: t } = this.props;
      if (!t?.support_user) return null;
      if (!this.state.clanInfo)
        return (0, X.jsx)(C, { string: L(`#Loading`), size: `medium` });
      let n = this.GetEmailEditModel();
      return (0, X.jsxs)(`div`, {
        className: Y(Qs, vg),
        children: [
          (0, X.jsx)(`div`, {
            className: Y(O),
            children: (0, X.jsx)(`span`, {
              className: O,
              children: L(`#EventEmail_Filter`),
            }),
          }),
          (0, X.jsxs)(`div`, {
            className: Y(U, Fo),
            children: [
              (0, X.jsx)(`div`, { children: L(`#EventEmail_Filter_Desc`) }),
              !!this.state.clanInfo.is_ogg &&
                (0, X.jsx)(z, {
                  onChange: (e) => this.GetEmailEditModel().SetFilterIRTopN(e),
                  label: L(`#EventEmail_Filter_IR`),
                  checked: n.BIsIRTopNFiltering(),
                }),
              !!this.state.clanInfo.is_ogg &&
                (0, X.jsx)(z, {
                  onChange: (e) =>
                    this.GetEmailEditModel().SetFilterWishlist(e),
                  label: L(`#EventEmail_Filter_Wishlist`),
                  checked: n.BIsWishListFiltering(),
                }),
              (0, X.jsx)(N, {
                type: `number`,
                min: `0`,
                max: `99`,
                label: L(`#EventEmail_Filter_ControlGroup`),
                value: n.GetControlGroupPercent(),
                onChange: this.OnControlGroupSpinnerChange,
              }),
            ],
          }),
        ],
      });
    }
  };
(D([A], l_.prototype, `OnControlGroupSpinnerChange`, null), (l_ = D([r], l_)));
var u_ = class extends Z.Component {
  state = { bLoadingCreator: !0 };
  m_cancelSignal = Q.default.CancelToken.source();
  async LoadCreatorHome() {
    this.state.bLoadingCreator || this.setState({ bLoadingCreator: !0 });
    let { editModel: e } = this.props;
    Do.Get().QueueAppRequest(e.GetAppID(), { include_basic_info: !0 });
    let t = [];
    ((
      await ai.LoadCreatorHomeListForAppIncludeHiddden(
        e.GetAppID(),
        this.m_cancelSignal,
      )
    ).forEach((e) => {
      let n = zo.InitFromClanID(e.clan_account_id, R.EUNIVERSE);
      t.push(ai.LoadCreatorHome(n, !1, this.m_cancelSignal));
    }),
      Promise.all(t).then((e) => {
        this.m_cancelSignal.token.reason ||
          this.setState({ bLoadingCreator: !1 });
      }));
  }
  componentDidMount() {
    this.LoadCreatorHome();
  }
  componentDidUpdate(e) {
    e.editModel.GetAppID() != this.props.editModel.GetAppID() &&
      this.LoadCreatorHome();
  }
  GetEmailEditModel() {
    return new xn(this.props.editModel);
  }
  BuildCreatorHomeToggle(e) {
    let t = [],
      n = [];
    if (this.state.bLoadingCreator)
      t.push((0, X.jsx)(C, {}, `EmailRecipientControls_creator`));
    else {
      let { editModel: r } = this.props,
        i = new xn(r);
      (ai.GetCreatorHomeListForAppIncludeHidden(r.GetAppID()).forEach((r) => {
        let a = ai.GetCreatorHomeByID(r);
        if (a && !n.some((e) => e.clan_account_id === a.GetClanAccountID())) {
          let o = (0, X.jsxs)(`a`, {
              target: R.IN_CLIENT ? void 0 : `_blank`,
              href: a.GetCreatorHomeURL(r.type),
              children: [
                a.BIsHidden() ? L(`#EventEmail_CreatorHidden`) + ` ` : ``,
                a.GetName(),
              ],
            }),
            s = (0, X.jsx)(d_, {
              audience: a.GetNumFollowers(),
              label: K(`#EventEmail_Recipients_follower_creator`, o),
            });
          (t.push(
            (0, X.jsx)(
              z,
              {
                onChange: (e) =>
                  this.GetEmailEditModel().SetTargetingCreator(
                    e,
                    r.clan_account_id,
                  ),
                label: s,
                checked: i.BIsTargetingCreator(a.GetClanAccountID()),
              },
              `RecipientToggle_` + r.clan_account_id,
            ),
          ),
            e?.support_user &&
              ((s = (0, X.jsx)(d_, {
                valveOnly: !0,
                label: K(`#EventEmail_Recipients_player_creator`, o),
              })),
              t.push(
                (0, X.jsx)(
                  `span`,
                  {
                    className: Y(Qs),
                    children: (0, X.jsx)(z, {
                      onChange: (e) =>
                        this.GetEmailEditModel().SetTargetingCreatorPlayer(
                          e,
                          r.clan_account_id,
                        ),
                      label: s,
                      checked: i.BIsTargetingCreatorPlayer(
                        a.GetClanAccountID(),
                      ),
                    }),
                  },
                  `RecipientToggle_player_` + r.clan_account_id,
                ),
              ),
              n.push(r)));
        }
      }),
        t.length == 0 &&
          t.push(
            (0, X.jsx)(
              `div`,
              {
                children: K(
                  `#EventEmail_Recipients_NoCreatorHome`,
                  (0, X.jsx)(`a`, {
                    href: `https://partner.steamgames.com/doc/store/creator_homepage`,
                    children: `https://partner.steamgames.com/doc/store/creator_homepage`,
                  }),
                ),
              },
              `creatorhome_plug`,
            ),
          ));
    }
    return t;
  }
  render() {
    let { editModel: e } = this.props,
      t = new xn(e),
      { permissions: n } = this.props;
    return (0, X.jsxs)(`div`, {
      className: vg,
      children: [
        (0, X.jsx)(`div`, {
          className: Y(O),
          children: (0, X.jsx)(`span`, {
            className: O,
            children: L(`#EventEmail_Recipients`),
          }),
        }),
        (0, X.jsxs)(`div`, {
          className: Y(U, Fo),
          children: [
            (0, X.jsx)(`div`, { children: L(`#EventEmail_Recipients_desc`) }),
            (0, X.jsx)(z, {
              onChange: (e) =>
                this.GetEmailEditModel().SetTargetingExistingPlayer(e),
              label: L(`#EventEmail_Recipients_players`),
              checked: t.BIsTargetingGamePlayers(),
            }),
            (0, X.jsx)(z, {
              onChange: (e) =>
                this.GetEmailEditModel().SetTargetingGameWishlist(e),
              label: L(`#EventEmail_Recipients_wishlist`),
              checked: t.BIsTargetingGameWishlisters(),
            }),
            (0, X.jsx)(z, {
              onChange: (e) =>
                this.GetEmailEditModel().SetTargetingGameFollower(e),
              label: (0, X.jsx)(d_, {
                label: L(`#EventEmail_Recipients_follower`),
                audience: oi.GetClanMemberCount(e.GetAppID()),
              }),
              checked: t.BIsTargetingGameFollowers(),
            }),
            (0, X.jsx)(z, {
              onChange: (e) => this.GetEmailEditModel().SetExcludeGameOwners(e),
              label: (0, X.jsx)(d_, {
                label: L(`#EventEmail_Recipients_exclude_owners`),
              }),
              checked: t.BIsExcludingGameOwners(),
            }),
            (0, X.jsx)(z, {
              onChange: (e) =>
                this.GetEmailEditModel().SetOwnersWithNoPlaytime(e),
              label: (0, X.jsx)(d_, {
                label: L(`#EventEmail_Recipients_no_playtime`),
              }),
              checked: t.BIsTargetingGameOwnersWithoutPlaytime(),
            }),
            this.BuildCreatorHomeToggle(n),
          ],
        }),
      ],
    });
  }
};
u_ = D([r], u_);
var d_ = class extends Z.Component {
    render() {
      let { valveOnly: e, label: t } = this.props;
      return (0, X.jsxs)(`div`, {
        className: bg,
        children: [
          (0, X.jsxs)(`span`, {
            children: [e && (0, X.jsx)(`span`, { children: `(VO) ` }), t],
          }),
          (0, X.jsx)(`span`, {
            children: this.props.audience !== void 0 && to(this.props.audience),
          }),
        ],
      });
    }
  },
  f_ = class extends Z.Component {
    state = { state: this.props.editModel.BIsDirty() ? `unsaved` : `loading` };
    componentDidMount() {
      let { editModel: e } = this.props;
      if (this.state.state == `loading`) {
        let t = qe(e),
          n = _e(e);
        this.setState({
          error: t,
          warning: n,
          state:
            t.length > 0
              ? `error`
              : n.length > 0
                ? `readywithwarning`
                : `ready`,
        });
      }
    }
    OnLockEmail() {
      let { editModel: e } = this.props;
      (new xn(e).LockEmail(),
        this.setState({ state: `saving` }, () => {
          b.SaveModel(e.GetClanSteamID()).then((e) => {
            this.setState({ state: `done` });
          });
        }));
    }
    render() {
      switch (this.state.state) {
        case `loading`:
          return (0, X.jsx)(j, {
            strTitle: L(`#EventEmail_Preparation_Title`),
            onOK: this.props.closeModal,
            onCancel: this.props.closeModal,
            closeModal: this.props.closeModal,
            children: (0, X.jsx)(C, {}),
          });
        case `ready`:
          return (0, X.jsx)(j, {
            strTitle: L(`#EventEmail_Preparation_Title`),
            strDescription: L(`#EventEmail_Preparation_Desc`),
            onOK: this.OnLockEmail,
            onCancel: this.props.closeModal,
          });
        case `readywithwarning`:
          return (0, X.jsx)(j, {
            strTitle: L(`#EventEmail_Preparation_Title`),
            strDescription: L(`#EventEmail_Preparation_Desc`),
            onOK: this.OnLockEmail,
            onCancel: this.props.closeModal,
            closeModal: this.props.closeModal,
            children: (0, X.jsxs)(`div`, {
              children: [
                (0, X.jsx)(`p`, {
                  children: L(`#EventEmail_Preparation_DescWarning`),
                }),
                (0, X.jsx)(`ol`, { children: this.state.warning }),
              ],
            }),
          });
        case `unsaved`:
          return (0, X.jsx)(Zo, {
            strTitle: L(`#EventEmail_Preparation_Title`),
            strDescription: L(`#EventEmail_Preparation_Unsaved`),
            closeModal: this.props.closeModal,
          });
        case `saving`:
          return (0, X.jsx)(j, {
            strTitle: L(`#EventEmail_Preparation_Title`),
            strDescription: L(`#EventEmail_Preparation_InProcess`),
            onOK: this.props.closeModal,
            onCancel: this.props.closeModal,
            children: (0, X.jsx)(C, {}),
          });
        case `done`:
          return (0, X.jsx)(j, {
            strTitle: L(`#EventEmail_Preparation_Title`),
            strDescription: L(`#EventEmail_Preparation_Done`),
            onOK: this.props.closeModal,
            onCancel: this.props.closeModal,
          });
        default:
          return (0, X.jsx)(Zo, {
            strTitle: L(`#EventEmail_Preparation_Title`),
            strDescription: L(`#EventEmail_Preparation_Error`),
            closeModal: this.props.closeModal,
            children: (0, X.jsxs)(`div`, {
              children: [
                (0, X.jsx)(`ol`, { children: this.state.error }),
                this.state.warning.length > 0 &&
                  (0, X.jsxs)(`div`, {
                    children: [
                      (0, X.jsx)(`p`, {
                        children: L(`#EventEmail_Preparation_DescWarning`),
                      }),
                      (0, X.jsx)(`ol`, { children: this.state.warning }),
                    ],
                  }),
              ],
            }),
          });
      }
    }
  };
(D([A], f_.prototype, `OnLockEmail`, null), (f_ = D([r], f_)));
var p_ = 300,
  m_ = class extends Z.Component {
    state = { rtimeLastRefresh: 0, bRefreshing: !1 };
    autoRefreshInterval;
    RefreshIfNeeded() {
      let e = Math.floor(Date.now() / 1e3),
        { editModel: t } = this.props;
      !this.state.err_msg &&
        t.GetEventModel().jsondata.email_setting.force_feature_id &&
        this.state.rtimeLastRefresh + p_ < e &&
        !this.state.bRefreshing &&
        this.setState({ bRefreshing: !0 }, this.RefreshStats);
    }
    async RefreshStats() {
      let { editModel: e } = this.props,
        t = R.COMMUNITY_BASE_URL + `eventemail/ajaxgetpartneremailstats`,
        n = {
          clanid: e.GetClanSteamID().GetAccountID(),
          gidevent: e.GetGID(),
          sessionid: ss(),
        };
      try {
        let e = await Q.default.get(t, { params: n, withCredentials: !0 });
        this.setState({ stats: e.data.result, bRefreshing: !1 });
      } catch (e) {
        this.setState({ bRefreshing: !1, err_msg: k(e).strErrorMsg });
      }
    }
    componentDidMount() {
      (this.RefreshIfNeeded(),
        (this.autoRefreshInterval = window.setInterval(
          this.RefreshIfNeeded,
          p_ * 1e3,
        )));
    }
    componentDidUpdate(e) {
      this.props.editModel.GetGID() != e.editModel.GetGID() &&
        this.setState({ rtimeLastRefresh: 0 }, this.RefreshIfNeeded);
    }
    componentWillUnmount() {
      this.autoRefreshInterval &&=
        (window.clearInterval(this.autoRefreshInterval), void 0);
    }
    render() {
      let { editModel: e } = this.props;
      if (!e.GetEventModel().jsondata.email_setting.force_feature_id)
        return (0, X.jsx)(`div`, {});
      if (this.state.err_msg)
        return (0, X.jsxs)(`div`, {
          className: tt,
          children: [
            (0, X.jsx)(`div`, {
              className: O,
              children: L(`#EventEmail_Stats_Title`),
            }),
            (0, X.jsx)(`div`, {
              className: Y(U, Fo),
              children: (0, X.jsx)(`span`, {
                className: r_,
                children: this.state.err_msg,
              }),
            }),
          ],
        });
      if (!this.state.stats)
        return (0, X.jsxs)(`div`, {
          className: tt,
          children: [
            (0, X.jsx)(`div`, {
              className: O,
              children: L(`#EventEmail_Stats_Title`),
            }),
            (0, X.jsx)(`div`, {
              className: Y(U, Fo),
              children: (0, X.jsx)(C, {}),
            }),
          ],
        });
      let t = this.state.stats;
      return (0, X.jsxs)(`div`, {
        className: tt,
        children: [
          (0, X.jsxs)(`div`, {
            className: O,
            children: [
              L(`#EventEmail_Stats_Title`),
              this.state.bRefreshing && (0, X.jsx)(C, { size: `small` }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Y(U, Fo),
            children: [
              (0, X.jsx)(`div`, {
                className: Xo,
                children: L(
                  `#EventEmail_Stats_State`,
                  L(`#EventEmail_Stats_State_` + t.state),
                ),
              }),
              t.state == `sending` &&
                (0, X.jsx)(`div`, {
                  children: L(
                    `#EventEmail_Stats_Started`,
                    us(t.rtime_start_firing),
                  ),
                }),
              (t.state == `complete` || t.state == `aborted`) &&
                (0, X.jsx)(`div`, {
                  children: L(
                    `#EventEmail_Stats_Completed`,
                    us(t.rtime_start_firing),
                    us(t.rtime_stop_firing),
                  ),
                }),
              t.state == `window_closed` &&
                (0, X.jsx)(`div`, {
                  children: L(
                    `#EventEmail_Stats_WindowClosed`,
                    us(t.rtime_stop_firing),
                  ),
                }),
              !!t.rtime_last_update_time &&
                (0, X.jsxs)(Z.Fragment, {
                  children: [
                    (0, X.jsx)(`div`, {
                      children: L(
                        `#EventEmail_Stats_Examined`,
                        t.accounts_examined?.toLocaleString(Qa()) ?? 0,
                      ),
                    }),
                    (0, X.jsx)(`div`, {
                      children: L(
                        `#EventEmail_Stats_Duplicates`,
                        t.accounts_duplicates?.toLocaleString(Qa()) ?? 0,
                      ),
                    }),
                    (0, X.jsx)(`div`, {
                      children: L(
                        `#EventEmail_Stats_Emailed`,
                        t.accounts_emailed?.toLocaleString(Qa()) ?? 0,
                      ),
                    }),
                    (0, X.jsx)(`div`, {
                      children: L(
                        `#EventEmail_Stats_Skipped`,
                        t.accounts_not_emailed?.toLocaleString(Qa()) ?? 0,
                      ),
                    }),
                    (0, X.jsx)(`div`, {
                      children: L(
                        `#EventEmail_Stats_Failed`,
                        t.accounts_email_failed?.toLocaleString(Qa()) ?? 0,
                      ),
                    }),
                  ],
                }),
              (0, X.jsx)(`div`, {
                children: L(
                  `#EventEmail_Stats_Last_Refresh_Time`,
                  bs(this.state.rtimeLastRefresh),
                ),
              }),
            ],
          }),
        ],
      });
    }
  };
(D([A], m_.prototype, `RefreshIfNeeded`, null),
  D([A], m_.prototype, `RefreshStats`, null),
  (m_ = D([r], m_)));
var h_ = `-t8zrhkJpVk-`;
function g_(e) {
  let t = e_(e.appid);
  return e.appid ? t : q.IS_ALLOWED_SC;
}
var __ = r((e) => {
  let { editModel: t } = e,
    n = Sr(t.GetEventType()),
    { data: r } = bi(t.GetClanAccountID()),
    i = t.BHasTag(`curator`);
  return (0, X.jsxs)(`div`, {
    className: ls,
    children: [
      (0, X.jsxs)(`div`, {
        className: Y(as),
        children: [
          (0, X.jsx)(S_, { editModel: t }),
          (0, X.jsx)(te, { bHideEndRange: !n, editModel: t }),
          !!t.BHasTag(`steam_award_nomination_request`) && (0, X.jsx)(Ye, {}),
          (0, X.jsx)(x_, { editModel: t }),
          (!i || r?.valve_admin) && (0, X.jsx)(v_, { editModel: t }),
          (0, X.jsx)(`div`, { className: is }),
        ],
      }),
      (0, X.jsxs)(`div`, {
        className: Y(bn, Mo),
        children: [
          (0, X.jsx)(`span`, {
            className: O,
            children: L(`#EventEditor_Time_Zone`),
          }),
          L(`#EventEditor_Time_ttip`),
        ],
      }),
    ],
  });
});
function v_(e) {
  let { editModel: t } = e,
    n = Z.useRef(void 0),
    r = Z.useCallback(
      (e) => {
        t.GetAppID() == 593110 && t.BHasTag(`hide_library_overview`) && e
          ? P(
              (0, X.jsx)(j, {
                strTitle: L(`#EventEditor_GenericAreYouSure`),
                strDescription: `Showing on the library home page will pin this event into the first spot in the 'Whats New' section for ALL Steam Library. Are you sure this is an Steam update that applies to all Steam Library users? Be thoughtful.`,
                onOK: () => t.ClearTags([`hide_library_overview`]),
                onCancel: () =>
                  n?.current?.setState({ checked: !n.current.checked }),
              }),
              window,
            )
          : t.SetTag(`hide_library_overview`, !e);
      },
      [t],
    ),
    i = (e) => {
      t.SetLibrarySpotlight(e);
    },
    [a, o, s, c, l, u, d, f, p] = g(() => [
      t.BIsAllowedOnLibraryOverview(),
      t.BIsAllowedOnLibraryDetail(),
      t.BIsAllowedOnStore(),
      t.GetCategoryAsString(),
      !t.GetEventModel().BHasTag(`hide_library_detail`),
      !t.GetEventModel().BHasTag(`hide_library_overview`),
      t.GetEventModel().BShowLibrarySpotlight(),
      !t.GetEventModel().BHasTag(`hide_store`),
      t.GetEventModel().BHasTag(`workshop`),
    ]);
  return (0, X.jsx)(`div`, {
    className: tt,
    children: (0, X.jsxs)(`div`, {
      className: as,
      children: [
        (0, X.jsx)(`div`, {
          className: O,
          children: L(`#EventEditor_Options_Title`),
        }),
        (0, X.jsxs)(`div`, {
          className: Y(U, Fo),
          children: [
            (0, X.jsx)(`div`, {
              className: Xo,
              children: K(
                `#EventEditor_Options_Show_Warning`,
                (0, X.jsx)(`a`, {
                  href: `https://help.steampowered.com/faqs/view/6862-8119-C23E-EA7B`,
                  target: R.IN_CLIENT ? void 0 : `_blank`,
                  children: L(`#EventEditor_Options_Show_WarningLink`),
                }),
              ),
            }),
            (0, X.jsx)(z, {
              onChange: (e) => t.SetTag(`hide_store`, !e),
              label: L(`#EventEditor_Options_Show_Store`),
              checked: s ? f : !1,
              description: s
                ? void 0
                : L(`#EventEditor_Options_WontDisplayHere`, c),
              disabled: !s,
            }),
            (0, X.jsx)(y_, { editModel: t }),
            (0, X.jsx)(z, {
              onChange: r,
              label: L(`#EventEditor_Options_Show_Library_Overview`),
              checked: a ? u : !1,
              description: a
                ? L(`#EventEditor_Options_Show_Library_Overview_Desc`)
                : L(`#EventEditor_Options_WontDisplayHere`, c),
              disabled: !a,
              ref: n,
            }),
            (0, X.jsx)(z, {
              onChange: (e) => t.SetTag(`hide_library_detail`, !e),
              label: L(`#EventEditor_Options_Show_Library_Detail`),
              checked: o ? l : !1,
              description: o
                ? void 0
                : L(`#EventEditor_Options_WontDisplayHere`, c),
              disabled: !o,
            }),
            (0, X.jsx)(`div`, {
              className: O,
              children: L(`#EventEditor_Options_Special_Desc`),
            }),
            (0, X.jsx)(z, {
              onChange: i,
              label: L(`#EventEditor_Options_Library_Spotlight_Label`),
              checked: d,
              description: L(`#EventEditor_Options_Library_Spotlight_Desc`),
              disabled: !l || !o,
            }),
            (0, X.jsx)(`div`, {
              className: O,
              children: L(`#EventEditor_Options_Desc`),
            }),
            (0, X.jsx)(z, {
              onChange: (e) => t.SetTag(`workshop`, e),
              label: L(`#EventEditor_Options_Workshop_Label`),
              checked: p,
              description: L(`#EventEditor_Options_Workshop_Desc`),
            }),
            !1,
            (0, X.jsx)(O_, { editModel: t }),
            (0, X.jsx)(E_, { editModel: t }),
          ],
        }),
        (0, X.jsx)(b_, { editModel: t }),
      ],
    }),
  });
}
var y_ = r((e) => {
    let { editModel: t } = e,
      { data: n } = bi(t.GetClanAccountID());
    if (!n?.valve_admin || q.IS_OGG || !t.BHasSaleEnabled()) return null;
    let r = R.STORE_BASE_URL + `specials/`;
    return (0, X.jsx)(`div`, {
      className: Y(U, Qs),
      children: (0, X.jsx)(z, {
        onChange: (e) => t.SetTag(Or, e),
        label: `(VO) Hide this sale from the Specials page carousel`,
        tooltip: `Affects the sale events carousel on ` + r,
        checked: t.GetEventModel().BHasTag(Or),
        description: `Live sale pages are listed in the sale events carousel on the store's Specials page. Turn this on to keep this sale out of that carousel. The store takes a few minutes to pick up the change.`,
      }),
    });
  }),
  b_ = r((e) => {
    let { editModel: t } = e,
      { data: n } = bi(t.GetClanAccountID()),
      r = !!n?.valve_admin,
      i = Z.useRef(void 0),
      a = t.GetEventType(),
      [o] = g(() => [t.GetEventModel().jsondata.country_restriction]);
    if (!r) return null;
    let s = (e) => {
        t.BHasSaleEnabled() && e && !t.BHasTag(`mod_hide_store`)
          ? P(
              (0, X.jsx)(j, {
                strTitle: L(`#EventEditor_Options_Hide_Store`),
                strDescription: `There is an active sale on this event. Setting this flag will HIDE the sale page completely. Are you sure?`,
                onOK: () => t.AddTag(`mod_hide_store`),
                onCancel: () => i.current.SetChecked(!1, !1),
              }),
              window,
            )
          : t.SetTag(`mod_hide_store`, e);
      },
      c =
        t.GetAppID() == 1675200
          ? `Deck`
          : t.GetAppID() == 4165890
            ? `Frame`
            : void 0;
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(`div`, {
          className: O,
          children: L(`#EventEditor_Options_Moderation`),
        }),
        (0, X.jsxs)(`div`, {
          className: Y(U, Fo, Qs),
          children: [
            (0, X.jsx)(z, {
              onChange: (e) => t.SetTag(`mod_hide_library_overview`, e),
              label: L(`#EventEditor_Options_Hide_Library_Overview`),
              checked: t.GetEventModel().BHasTag(`mod_hide_library_overview`),
            }),
            (0, X.jsx)(z, {
              onChange: (e) => t.SetTag(`mod_hide_library_detail`, e),
              label: L(`#EventEditor_Options_Hide_Library_Detail`),
              checked: t.GetEventModel().BHasTag(`mod_hide_library_detail`),
            }),
            (0, X.jsx)(z, {
              onChange: s,
              ref: i,
              label: L(`#EventEditor_Options_Hide_Store`),
              checked: t.GetEventModel().BHasTag(`mod_hide_store`),
            }),
            !!q.IS_OGG &&
              (0, X.jsx)(z, {
                onChange: (e) => t.SetSteamStoreSpotlight(e),
                label: `(VO) Allow Spotlight on Steam Store Product Page`,
                checked: t.BAllowedSteamStoreSpotlight(),
                description: `Allows the partner to upload a store spotlight artwork to be shown on the product page for upto a week from the event start.`,
              }),
            !!kh(t.GetEventModel(), r) &&
              (0, X.jsx)(z, {
                onChange: (e) => t.SetTag(`vo_sale_store_capsules`, e),
                label: `(VO) Let Partners Upload Store Capsules for this Sale`,
                checked: t.GetEventModel().BHasTag(`vo_sale_store_capsules`),
                description: `Opens the store capsule uploader on the artwork tab to everyone who can edit this event. We can always reach it ourselves without this; turning it off hides it from them again but keeps whatever they uploaded.`,
              }),
            (0, X.jsx)(z, {
              onChange: (e) => t.SetLibraryHomeSpotlight(e),
              label: `(VO) Force Spotlight on Library Home`,
              checked: t.BHasLibaryHomeSpotlight(),
              disabled: !t.BHasSpotlightArtwork(),
              description: `Shows the spotlight artwork in the 'Whats New' section at the top of the library home for all owners.`,
            }),
            (0, X.jsx)(z, {
              onChange: (e) => t.SetTag(`blog`, e),
              label: `(VO) Mark as Blog for Valve Game Teams`,
              checked: t.GetEventModel().BHasTag(`blog`),
              description: `Add the 'blog' tag to this post. Allowing game team website to filter news posts intended for their blog.`,
            }),
            (0, X.jsx)(z, {
              onChange: (e) => t.SetTag(`adult_only_content`, e),
              label: `(VO) Event Contains Adult Only Content`,
              checked: t.GetEventModel().BHasTag(`adult_only_content`),
              description: `Set this to on if the post contains adult only content so that it can be filtered accordingly.`,
            }),
            t.GetAppID() == 593110 &&
              (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(z, {
                    onChange: (e) => t.SetTag(`steam_blog`, e),
                    label: `(VO) Steam Official Blog`,
                    checked: t.GetEventModel().BHasTag(`steam_blog`),
                    description: `When checked this event will surface on https://store.steampowered.com/news/app/593110. Make sure to set this before you publish, or it will have no effect.`,
                  }),
                  (0, X.jsx)(z, {
                    onChange: (e) => t.SetTag(`skip_megaphone`, e),
                    label: `(VO) Skip Lighting Up Steam Client Megaphone`,
                    checked: t.GetEventModel().BHasTag(`skip_megaphone`),
                    description: `By default small event (patch notes) do not light up the megaphone in the Steam client. Enabling this flag does the same for all other event type.`,
                  }),
                ],
              }),
            (0, X.jsx)(z, {
              onChange: (e) => t.SetTag(`forced_featured`, e),
              label: `(VO) Force Feature this event in the NewsHub`,
              checked: t.GetEventModel().BHasTag(`forced_featured`),
              description: `Add the 'forced_featured' tag to this post. This will prioritize the event appearing in algorithmic featured newshub section.`,
            }),
            !!t.GetEventModel().BIsOGGEvent() &&
              (0, X.jsx)(z, {
                onChange: (e) => t.SetTag(`seasonal_sale_featuring`, e),
                label: `(VO) Feature this event during the Seasonal Sale`,
                checked: t.GetEventModel().BHasTag(`seasonal_sale_featuring`),
                description: `Add the 'seasonal_sale_featuring' tag to this post. This will push the event to appear on the front page during a seasonal sale. This assume the content is specific to in-game items on sale for the underlying game`,
              }),
            t.GetClanAccountID() == 41316928 &&
              (0, X.jsx)(z, {
                onChange: (e) => t.SetTag(`contenthub`, e),
                checked: t.GetEventModel().BHasTag(`contenthub`),
                label: `(VO) Tag as Content Hub`,
                description: `Add the 'contenthub' tag to this event. Removes certain publishing restrictions for this event.`,
              }),
            (0, X.jsx)(z, {
              onChange: (e) => t.SetTag(`patchnotes`, e),
              checked: t.GetEventModel().BHasTag(`patchnotes`),
              label: `(VO) Tag as Patch Notes`,
              description: `Add the 'patchnotes' tag to this event. Allows the event to show in certain contexts normally only showing Small Update/Patch Notes events such as Steam Client patch notes.`,
            }),
            !!q.IS_OGG &&
              (0, X.jsx)(z, {
                onChange: (e) => {
                  (e && (t.setEventType(14), t.SetSteamStoreSpotlight(e)),
                    t.SetTag(`vo_marketing_message`, e));
                },
                label: `(VO) Marketing Message Major Update`,
                disabled:
                  !t.GetEventModel().BHasTag(`vo_marketing_message`) && a != 14,
                checked: t.GetEventModel().BHasTag(`vo_marketing_message`),
                description:
                  `This will surface on the event editor the rules and requirements behind being featured in a marketing message to better align them with customer information.` +
                  (a == 14
                    ? ``
                    : ` This can only be enable for Major Update Type.`),
              }),
            (0, X.jsx)(z, {
              onChange: (e) => t.SetTag(`vo_prevent_delete`, e),
              label: `(VO) Prevent this event from being deleted.`,
              checked: t.GetEventModel().BHasTag(`vo_prevent_delete`),
              description: `To prevent a partner or Valve from deleting this event because something is featuring it or depends on it.`,
            }),
            (t.GetClanAccountID() == 39049601 ||
              ((R.EUNIVERSE == 2 || R.EUNIVERSE == 4) &&
                t.GetClanAccountID() == 20)) &&
              (0, X.jsx)(z, {
                onChange: (e) => t.SetTag(`steam_top_releases`, e),
                label: `(VO) Is Monthly Top Sellers?`,
                checked: t.GetEventModel().BHasTag(`steam_top_releases`),
                description: `Add the 'steam_top_releases' tag to this post. This allows the Steam Top Release Charts to pull the official top releases events into those pages.`,
              }),
            (t.GetClanAccountID() == 39049601 ||
              ((R.EUNIVERSE == 2 || R.EUNIVERSE == 4) &&
                t.GetClanAccountID() == 20)) &&
              (0, X.jsx)(z, {
                onChange: (e) => t.SetTag(`steam_best_of_year`, e),
                label: `(VO) Is Best of Year?`,
                checked: t.GetEventModel().BHasTag(`steam_best_of_year`),
                description: `Add the 'steam_best_of_year' tag to this post. This allows the Steam Best of Year to pull the official best of year events into those pages.`,
              }),
            !!c &&
              (0, X.jsxs)(`div`, {
                children: [
                  (0, X.jsx)(`p`, {
                    children: `Channels where we want to surface these events to. See for details: https://confluence.valve.org/pages/viewpage.action?pageId=214073964`,
                  }),
                  (0, X.jsx)(z, {
                    onChange: (e) => t.SetTag(`stablechannel`, e),
                    label: `(VO) Steam ${c} Stable Channel`,
                    checked: t.GetEventModel().BHasTag(`stablechannel`),
                    description: `Surface this to users who are subscribed to Steam ${c} Stable Build. Only include Stable Steam ${c} Client or Stable SteamOS notes.`,
                  }),
                  (0, X.jsx)(z, {
                    onChange: (e) => t.SetTag(`betachannel`, e),
                    label: `(VO) Steam ${c} Beta Channel`,
                    checked: t.GetEventModel().BHasTag(`betachannel`),
                    description: `Surface this to users who are subscribed to Steam ${c} Beta Build. Only include Beta Steam ${c} Client or Stable SteamOS notes.`,
                  }),
                  (0, X.jsx)(z, {
                    onChange: (e) => t.SetTag(`previewchannel`, e),
                    label: `(VO) Steam ${c} Preview Channel`,
                    checked: t.GetEventModel().BHasTag(`previewchannel`),
                    description: `Surface this to users who are subscribed to Steam ${c} Preview Build. Only include Beta Steam ${c} Client or Beta SteamOS notes.`,
                  }),
                ],
              }),
            (0, X.jsx)(N, {
              type: `text`,
              label: L(`#EventEditor_Options_RegionRestrictions`),
              placeholder: L(
                `#EventEditor_Options_RegionRestrictions_placeholder`,
              ),
              onChange: (e) => {
                ((t.GetEventModel().jsondata.country_restriction =
                  e.currentTarget.value),
                  t.SetDirty(x.description));
              },
              value: o,
            }),
          ],
        }),
      ],
    });
  }),
  x_ = class extends Z.Component {
    state = { bSending: !1 };
    m_cancelSignal = Q.default.CancelToken.source();
    TestFireEvent() {
      let { editModel: e } = this.props;
      this.setState({ bSending: !0 }, () => {
        (b.FireTestEventNotifiation(
          e.GetClanSteamID(),
          e.GetGID(),
          this.m_cancelSignal,
        ),
          this.setState({ bSending: !1 }));
      });
    }
    render() {
      let { editModel: e } = this.props,
        t = e.GetEventType(),
        n = Cr(t),
        r =
          e.GetEventModel().BIsVisibleEvent() &&
          e.GetEventModel().GetStartTimeAndDateUnixSeconds() <
            Math.floor(Date.now() / 1e3);
      if (!n || r) return null;
      let i = e.GetVisibilityPublishingSetup(),
        a = e.GetStartTimeEditChoice() == Tn.k_ENow || i == rr.event_start;
      return (0, X.jsx)(`div`, {
        className: Y(tt),
        children: (0, X.jsxs)(`div`, {
          className: Y(as, h_),
          children: [
            (0, X.jsx)(`div`, {
              className: O,
              children: L(`#EventEditor_Reminder_title`),
            }),
            (0, X.jsxs)(`div`, {
              className: Y(U, Fo),
              children: [
                (0, X.jsx)(`div`, {
                  className: Xo,
                  children: L(`#EventEditor_Reminder_desc`),
                }),
                (0, X.jsx)(`div`, {
                  className: Xo,
                  children: K(
                    `#EventEditor_Reminder_desc2`,
                    (0, X.jsx)(`a`, {
                      href: R.STORE_BASE_URL + `mobile?show=steamapp`,
                      target: R.IN_CLIENT ? void 0 : `_blank`,
                      children: L(`#EventEditor_Reminder_mobileapp`),
                    }),
                  ),
                }),
                this.state.bSending &&
                  (0, X.jsx)(C, { size: `small`, position: `center` }),
                (0, X.jsx)(`button`, {
                  className: Os,
                  onClick: this.TestFireEvent,
                  disabled: a,
                  children: L(`#EventEditor_Reminder_testfire`),
                }),
                a &&
                  (0, X.jsx)(`span`, {
                    children: L(`#EventEditor_Reminder_disable`),
                  }),
              ],
            }),
          ],
        }),
      });
    }
  };
(D([A], x_.prototype, `TestFireEvent`, null), (x_ = D([r], x_)));
var S_ = r((e) => {
  let { editModel: t } = e;
  return t.BIsEventForOGGWithoutVisibleStorePage()
    ? (0, X.jsx)(`div`, {
        className: tt,
        children: (0, X.jsxs)(`div`, {
          className: as,
          children: [
            (0, X.jsxs)(`div`, {
              className: O,
              children: [
                L(`#EventEditor_Options_VisibilityOptIn_Title`),
                (0, X.jsx)(`span`, {
                  className: qn,
                  children: L(`#EventEditor_Required`),
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              className: Y(U, Fo),
              children: [
                (0, X.jsx)(`div`, {
                  className: Xo,
                  children: L(
                    `#EventEditor_Options_VisibilityOptIn_Description`,
                    t.GetAppID(),
                  ),
                }),
                (0, X.jsx)(z, {
                  onChange: (e) => t.SetOptedInForOGGWithoutVisibleStorePage(e),
                  label: L(`#EventEditor_Options_VisibilityOptIn_Label`),
                  checked: t.BOptedInForOGGWithoutVisibleStorePage(),
                }),
              ],
            }),
          ],
        }),
      })
    : null;
});
function C_(e) {
  let t =
      e.BInRealmChina() &&
      ao.IsELanguageValidInRealm(e.GetCurEditLanguage(), Co.k_ESteamRealmChina),
    n =
      e.BInRealmGlobal() &&
      ao.IsELanguageValidInRealm(
        e.GetCurEditLanguage(),
        Co.k_ESteamRealmGlobal,
      );
  !t && !n && e.SetCurEditLanguage(e.BInRealmChina() ? 29 : 0);
}
var w_ = r((e) => {
    let { editModel: t } = e;
    return (0, X.jsx)(z, {
      onChange: (e) => {
        (e
          ? (t.AddTag(`enable_steam_china`), t.AddTag(`disable_steam_global`))
          : t.ClearTags([`enable_steam_china`, `disable_steam_global`]),
          C_(t));
      },
      label: L(`#EventEditor_Options_ShowInSteamChina`),
      description: L(`#EventEditor_Options_ShowInSteamChina_Desc`),
      checked: t.BInRealmChina(),
    });
  }),
  T_ = r((e) => {
    let { editModel: t } = e;
    return t.BInRealmGlobal() && !t.BInRealmChina()
      ? null
      : (0, X.jsx)(z, {
          onChange: (e) => {
            (e
              ? t.AddTag(`disable_steam_global`)
              : t.ClearTags([`disable_steam_global`]),
              C_(t));
          },
          label: L(`#EventEditor_Options_ShowInSteamGlobal`),
          description: L(`#EventEditor_Options_ShowInSteamGlobal_Desc`),
          checked: !t.BInRealmGlobal(),
        });
  }),
  E_ = r((e) => {
    let { editModel: t } = e,
      n = g_(t.GetEventModel());
    return (0, X.jsxs)(`div`, {
      children: [
        n && (0, X.jsx)(w_, { editModel: t }),
        (0, X.jsx)(T_, { editModel: t }),
      ],
    });
  }),
  D_ = (e) => {
    let [t] = aa(e, Do.k_DataRequest_CommonOnly);
    return !!(t && t.HasContentDescriptorID(3));
  },
  O_ = r((e) => {
    let { editModel: t } = e;
    return D_(t.GetAppID())
      ? (0, X.jsx)(z, {
          onChange: (e) => t.SetTag(`adult_only_content`, e),
          label: L(`#EventEditor_Options_Has_Adult_Only_Content`),
          checked: t.GetEventModel().BHasTag(`adult_only_content`),
          description: L(`#EventEditor_Options_Has_Adult_Only_Content_Desc`),
        })
      : null;
  }),
  k_ = `gWVjDcj9a9g-`,
  A_ = `IbTTCZak63E-`,
  j_ = `rO1ynldvvNw-`,
  M_ = `TP17QgKPcys-`;
function N_(e) {
  let { editModel: t } = e,
    n = g(() => ({
      bHidden: t.BHidden(),
      bUnlisted: t.BUnlisted(),
      bPublished: t.BPublished(),
    }));
  return (!n.bHidden || n.bUnlisted) && n.bPublished
    ? null
    : (0, X.jsx)(P_, { ...e });
}
var P_ = r((e) => {
  let { editModel: t, bTakePublishAction: n } = e,
    r = Z.useRef(void 0),
    [i, a] = Z.useState(!1),
    o = t.GetClanSteamID(),
    s = t.GetGID(),
    {
      bLoading: c,
      bPublishRequiresValveApproval: l,
      nAccountApproved: u,
    } = Gn(o.GetAccountID(), s);
  Z.useEffect(() => {
    n && r?.current && r.current.click();
  }, [n]);
  let d = t.GetEventType() == 36,
    f = o.GetAccountID() == ni() || d,
    p = ua(o, !0),
    m = !f && p,
    h = (e, n) => {
      P(
        (0, X.jsx)(Je, {
          editModel: t,
          bUnlistedMode: n,
          bValveAdmin: p,
          OnPublishSuccess: () => a(!0),
          partnerEventEditorStore: b,
        }),
        G(e),
      );
    },
    g = (e) => {
      (t.SetVisibilityPublishingSetup(rr.immediate),
        P(
          (0, X.jsx)(Je, {
            editModel: t,
            bValveAdmin: p,
            OnPublishSuccess: () => a(!0),
            partnerEventEditorStore: b,
            closeModal: () => {
              t.ResetSetVisibilityStartTime();
            },
          }),
          G(e),
        ));
    };
  if (i)
    return (0, X.jsx)(wi, { eventModel: t.GetEventModel(), route: T.k_eView });
  let _ = t.BHidden(),
    v = t.BPublished(),
    ee = t.BUnlisted();
  if ((!_ || ee) && v) return null;
  if (c) return (0, X.jsx)(C, { string: L(`#Loading`), size: `small` });
  let te = t.BAllowedToPublishStagedEvents(),
    ne = l && !u;
  return (0, X.jsxs)(`div`, {
    className: Y(U, k_),
    children: [
      (0, X.jsx)(`div`, { className: O, children: L(`#Button_Publish`) }),
      (0, X.jsxs)(`div`, {
        className: Y(j_),
        children: [
          ne &&
            (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(`div`, {
                  children: L(`#EventEditor_Publish_PublicBlock_Title`),
                }),
                (0, X.jsx)(`div`, {
                  children: L(`#EventEditor_Publish_PublicBlock_Desc`),
                }),
              ],
            }),
          !v &&
            !ne &&
            (0, X.jsxs)(X.Fragment, {
              children: [
                !f &&
                  (0, X.jsx)(F_, {
                    label: L(`#Button_Publish`),
                    description: L(`#EventEditor_Publish_Desc`),
                    refActionButton: r,
                    onClick: (e) => h(e, !1),
                  }),
                (f || m) &&
                  (0, X.jsx)(Vo, {
                    condition: m,
                    wrap: (e) =>
                      (0, X.jsx)(E, {
                        clanSteamID: o,
                        requireAdmin: !0,
                        children: e,
                      }),
                    children: (0, X.jsx)(F_, {
                      label: L(
                        d
                          ? `#EventEditor_Publish_Unlisted_CreatorHome`
                          : `#EventEditor_Publish_Unlisted`,
                      ),
                      description: L(
                        d
                          ? `#EventEditor_Publish_Unlisted_CreatorHome_Desc`
                          : `#EventEditor_Publish_Unlisted_Desc`,
                      ),
                      refActionButton: f ? r : void 0,
                      onClick: (e) => h(e, !0),
                    }),
                  }),
              ],
            }),
          !(!v || !_ || ee || ne) &&
            (0, X.jsx)(Vo, {
              condition: !te,
              wrap: (e) =>
                (0, X.jsx)(B, {
                  toolTipContent: L(`#EventEditor_Publish_Disable_ttip`),
                  children: e,
                }),
              children: (0, X.jsx)(F_, {
                label: L(`#EventEditor_Publish_VisibleNow`),
                refActionButton: r,
                disabled: !te,
                onClick: g,
              }),
            }),
        ],
      }),
    ],
  });
});
function F_(e) {
  let {
    label: t,
    description: n,
    tooltip: r,
    disabled: i,
    refActionButton: a,
    onClick: o,
  } = e;
  return (0, X.jsxs)(`div`, {
    children: [
      n && (0, X.jsx)(`div`, { className: `_0vqPGLYzI4A-`, children: n }),
      (0, X.jsxs)(I, {
        onClick: o,
        className: Y(M_, `DialogButton Primary`, A_),
        ref: a,
        disabled: i,
        children: [t, r && (0, X.jsx)(H, { tooltip: r })],
      }),
    ],
  });
}
var I_ = `oeK-Js89pJ0-`,
  L_ = `V3qc97I28JQ-`,
  R_ = `_5bo79cskKmk-`,
  z_ = `gEb-HGNoU68-`,
  B_ = `SIHAf9flQQY-`,
  V_ = `hYEGlRMe8uI-`,
  H_ = `Ss0JCBzLkng-`,
  U_ = `_9lP2K5bPXc8-`,
  W_ = `DQzwaTYjRLU-`,
  G_ = `qZGMgAp5pfM-`,
  K_ = `tWP3XkJX04Y-`,
  q_ = `uGTR8ycGstw-`,
  J_ = class e {
    m_mapVisibilityUpdateRounds = new Map();
    m_mapVisibilityUpdateLoadPromises = new Map();
    m_mapVisibilityUpdateChangeCallback = new Map();
    m_mapVisibilityLaunchRounds = new Map();
    m_mapVisibilityLaunchLoadPromises = new Map();
    m_mapVisibilityLaunchChangeCallback = new Map();
    GetVisibilityRounds(e, t) {
      return e == 0
        ? this.m_mapVisibilityUpdateRounds.get(t)
        : this.m_mapVisibilityLaunchRounds.get(t);
    }
    GetVisibilityRoundsChangeCallback(e, t) {
      let n =
        e == 0
          ? this.m_mapVisibilityUpdateChangeCallback
          : this.m_mapVisibilityLaunchChangeCallback;
      return (n.has(t) || n.set(t, new Oo()), n.get(t));
    }
    async LoadVisibilityRounds(e, t) {
      let n =
        e == 0
          ? this.m_mapVisibilityUpdateLoadPromises
          : this.m_mapVisibilityLaunchLoadPromises;
      return (
        n.has(t) || n.set(t, this.InternalLoadVisibilityRounds(e, t)), n.get(t)
      );
    }
    async InternalLoadVisibilityRounds(e, t) {
      let n = null;
      try {
        let r = `${R.COMMUNITY_BASE_URL}ogg/${t}/ajaxgetappvisibilityrounds`,
          i = { type: e },
          a = await Q.default.get(r, { params: i, withCredentials: !0 });
        if (a?.status == 200 && a?.data?.success == 1) {
          let n =
              e == 0
                ? this.m_mapVisibilityUpdateRounds
                : this.m_mapVisibilityLaunchRounds,
            r = a.data.data || [];
          return (
            n.set(t, r),
            this.GetVisibilityRoundsChangeCallback(e, t).Dispatch(r),
            r
          );
        }
        n = k(a);
      } catch (e) {
        n = k(e);
      }
      return (
        console.error(
          `CVisibilityRoundsStore.InternalLoadVisibilityRounds failed: ` +
            n?.strErrorMsg,
          n,
        ),
        null
      );
    }
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    constructor() {}
    Init() {}
  };
function Y_(e, t) {
  let [n, r] = (0, Z.useState)(J_.Get().GetVisibilityRounds(e, t));
  return (
    (0, Z.useEffect)(() => {
      (n && n.length != 0 && n[0].appid == t && n[0].feature_type == e) ||
        J_.Get()
          .LoadVisibilityRounds(e, t)
          .then((e) => r(e));
    }, [t, n, e]),
    Hs(J_.Get().GetVisibilityRoundsChangeCallback(e, t), r),
    n
  );
}
var X_ = 100;
function Z_(e) {
  let { editModel: t } = e,
    [n, r, i] = g(() => [
      t.GetEventState(),
      t.GetClanSteamID(),
      t.GetEventModel().jsondata.clone_from_event_gid,
    ]),
    a = Fi(`EventReplacePublishingControls`),
    { rgClanEventData: o } = Xr(r, X_, a);
  return !i || !o?.pages?.length || n != Vr.k_EEventStateUnpublished
    ? null
    : (0, X.jsxs)(`div`, {
        className: Y(U, V_),
        children: [
          (0, X.jsx)(`div`, {
            className: O,
            children: L(`#EventPublishing_Replace_To`),
          }),
          (0, X.jsxs)(`div`, {
            className: Y(Es),
            children: [
              L(`#EventPublishing_Replace_To_Desc`),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(`br`, {}),
              (0, X.jsx)(ev, { editModel: t }),
              (0, X.jsx)(Q_, { editModel: t, rgEventSummaries: o.pages[0] }),
            ],
          }),
        ],
      });
}
function Q_(e) {
  let { editModel: t, rgEventSummaries: n } = e,
    [r, i] = (0, Z.useState)(null),
    [a, o, s] = Gs(),
    c = (0, Z.useMemo)(
      () =>
        n.map((e) => ({
          value: e.gid,
          label:
            e.event_name +
            `: ` +
            us(e.rtime32_start_time) +
            ` @ ` +
            Hi(e.rtime32_start_time),
        })),
      [n],
    );
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`div`, { children: L(`#EventPublishing_Replace_Pick`) }),
      (0, X.jsx)(Ze._default, {
        isSearchable: !0,
        isMulti: !1,
        isClearable: !0,
        className: void 0,
        options: c,
        value: c.find((e) => e.value === r),
        onChange: (e) => {
          e && i(e.value);
        },
      }),
      (0, X.jsx)(I, {
        disabled: !r,
        onClick: o,
        children: L(`#EventPublishing_Replace_Selected`),
      }),
      (0, X.jsx)(To, {
        active: a,
        children: (0, X.jsx)($_, {
          editModel: t,
          gidTargetClanEvent: r,
          closeModal: s,
        }),
      }),
    ],
  });
}
function $_(e) {
  let { closeModal: t, editModel: n, gidTargetClanEvent: r } = e,
    i = Gi(),
    [a, o] = (0, Z.useState)(),
    [s] = (0, Z.useState)(() => new Jn()),
    [c, l] = (0, Z.useState)(null),
    [u, d] = (0, Z.useState)(!1),
    [f, p] = (0, Z.useState)(!1),
    [m, h, _] = g(() => [
      c?.GetClanSteamID(),
      c?.GetEventModel().GetNameWithFallback(i),
      c?.GetEventModel().GetLastUpdateTime(),
    ]);
  (0, Z.useEffect)(() => {
    (r &&
      c?.GetGID() != r &&
      s.LoadEditorModel(n.GetClanSteamID(), r).then((e) => {
        l(e);
      }),
      r &&
        !a &&
        Jn.GetLastUpdateTimeForEvent(n.GetClanSteamID(), r, null, null).then(
          o,
        ));
  }, [n, r, c, s, a]);
  let [v, ee] = (0, Z.useState)(!1),
    te = ta();
  return te.bLoading
    ? (0, X.jsx)(ea, {
        state: te,
        strDialogTitle: L(`#EventPublishing_Replace_To`),
        closeModal: t,
      })
    : v
      ? (0, X.jsx)(De, {
          editModel: c,
          partnerEventEditorStore: s,
          OnSuccess: () => {},
          closeModal: t,
          bReplaceEventMode: !0,
          elSuccessDisplayLinks: (0, X.jsx)(`a`, {
            href: `${gs.COMMUNITY_BASE_URL}/gid/${m?.ConvertTo64BitString()}/partnerevents/edit/${r}`,
            children: L(`#EventEdit_Replacing_Open`),
          }),
        })
      : (0, X.jsx)(j, {
          onCancel: t,
          strTitle: L(`#EventPublishing_Replace_To`),
          strDescription: L(`#EventPublishing_Replace_Dialog_Desc1`),
          bOKDisabled: !u,
          onOK: () => {
            f || (c.ReplaceFrom(n), ee(!0));
          },
          children:
            c && a
              ? (0, X.jsxs)(X.Fragment, {
                  children: [
                    (0, X.jsxs)(`ul`, {
                      children: [
                        (0, X.jsx)(`li`, {
                          children: L(
                            `#EventPublishing_Replace_Dialog_Desc2`,
                            h,
                          ),
                        }),
                        (0, X.jsx)(`li`, {
                          children: L(
                            `#EventPublishing_Replace_Dialog_Desc3`,
                            us(_) + ` @ ` + Hi(_),
                          ),
                        }),
                        (0, X.jsx)(`li`, {
                          children: L(
                            `#EventPublishing_Replace_Dialog_Desc4`,
                            a.persona_name,
                          ),
                        }),
                      ],
                    }),
                    (0, X.jsx)(`div`, { children: L(`#Dialog_AreYouSure`) }),
                    (0, X.jsx)(F, {
                      checked: u,
                      onChange: d,
                      label: L(`#EventPublishing_Replace_Confirm`),
                    }),
                    !!zs.is_support &&
                      (0, X.jsx)(rt, {
                        curEventModelJson: n.GetEventModel().jsondata,
                        prevEventModelJson: c.GetEventModel().jsondata,
                        onShowCallback: () => p(!0),
                        onCancelCallback: () => p(!1),
                      }),
                  ],
                })
              : (0, X.jsx)(C, { string: L(`#Loading`) }),
        });
}
function ev(e) {
  let { editModel: t } = e,
    n = Gi(),
    [r] = g(() => [t.GetEventModel().jsondata.clone_from_event_gid]),
    i = Jr(r),
    [a, o, s] = Gs();
  if (!r) return null;
  if (r && !i) return (0, X.jsx)(C, { string: L(`#Loading`) });
  let c = i.BIsVisibleEvent() || i.BIsUnlistedEvent();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`div`, {
        children: K(
          `#EventPublishing_Replace_CloneFrom`,
          (0, X.jsx)(f, { to: `${r}`, children: i.GetNameWithFallback(n) }),
        ),
      }),
      (0, X.jsxs)(I, {
        disabled: !c,
        onClick: o,
        children: [
          L(`#EventPublishing_Replace_CloneFrom_Replace`),
          (0, X.jsx)(H, {
            tooltip: L(
              c
                ? `#EventPublishing_Replace_CloneFrom_Replace_ttip`
                : `#EventPublishing_Replace_CloneFrom_Replace_ttip_fail`,
            ),
          }),
        ],
      }),
      (0, X.jsx)(To, {
        active: a,
        children: (0, X.jsx)($_, {
          editModel: t,
          gidTargetClanEvent: r,
          closeModal: s,
        }),
      }),
    ],
  });
}
var tv = `rKe1ooBZGpU-`;
function nv(e) {
  let { editModel: t } = e,
    [n] = g(() => [t.BHasTag(`vo_marketing_message`)]);
  if (n) return (0, X.jsx)(iv, { ...e });
}
var rv = 3;
function iv(e) {
  let { editModel: t } = e,
    [n, r, i] = g(() => [
      t.BHasTag(`vo_marketing_message`),
      t.GetClanAccountID(),
      t.GetGID(),
    ]),
    a = gt(r, i),
    [o, s] = (0, Z.useState)(
      () =>
        a?.oPrivateData?.jsonData
          ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
    ),
    [c, l] = (0, Z.useState)(null);
  (0, Z.useEffect)(() => {
    a?.oPrivateData?.jsonData
      ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode &&
      s(
        a?.oPrivateData?.jsonData
          ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
      );
  }, [
    a?.oPrivateData?.jsonData
      ?.strMarketingMessageMajorUpdateHelpTicketReferenceCode,
  ]);
  let [u, d, f] = Gs(!1);
  return (0, X.jsxs)(`div`, {
    className: tv,
    children: [
      (0, X.jsx)(`div`, {
        className: O,
        children: L(`#MM_MajorUpdate_Review_title`),
      }),
      (0, X.jsx)(`div`, {
        children: o
          ? (0, X.jsx)(`p`, {
              children: No(
                `#MM_MajorUpdate_Review_ticked_created`,
                (0, X.jsx)(qa, {
                  href: `${R.HELP_BASE_URL}en/wizard/HelpRequest/${o}`,
                  className: Y(jo, Os),
                  bForceExternal: !0,
                }),
              ),
            })
          : (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(`p`, {
                  children: L(`#MM_MajorUpdate_Review_desc`, rv),
                }),
                (0, X.jsx)(Sf, {
                  accountID: _s.accountid,
                  partnerID: c,
                  fnSetPartnerID: l,
                  strLabel: L(`#EventEditor_SaleValveApproval_Request_Partner`),
                  strTooltip: L(
                    `#EventEditor_SaleValveApproval_Request_Partner_ttip`,
                  ),
                }),
                (0, X.jsx)(I, {
                  onClick: d,
                  children: L(`#MM_MajorUpdate_Review_create`),
                }),
                (0, X.jsx)(To, {
                  active: u,
                  children: (0, X.jsx)(av, {
                    editModel: t,
                    nPartnerID: c,
                    closeModal: f,
                    fnSetTicketID: s,
                  }),
                }),
              ],
            }),
      }),
    ],
  });
}
function av(e) {
  let { editModel: t, nPartnerID: n, closeModal: r, fnSetTicketID: i } = e,
    a = ta();
  return (
    (0, Z.useEffect)(() => {
      a.bLoading ||
        (a.fnSetLoading(!0),
        (async () => {
          let e = t.GetClanSteamID(),
            r = t.GetGID(),
            o = await ov(
              e,
              t.GetAppID(),
              r,
              `Requesting Marketing Message Major Update Review`,
              n,
            );
          o
            ? (i(o.reference_code), a.fnSetSuccess(!0))
            : (a.fnSetError(!0),
              a.fnSetStrError(L(`#Login_Error_Network_Description`)));
        })());
    }, [n, t, a.bLoading, a, i]),
    (0, X.jsx)(ea, {
      state: a,
      strDialogTitle: L(`#MM_MajorUpdate_Review_create`),
      closeModal: r,
    })
  );
}
async function ov(e, t, n, r, i) {
  let a =
      R.COMMUNITY_BASE_URL +
      `partnereventdata/ajaxrequestmarketingmessagemajorupdatereview`,
    o = new URLSearchParams();
  (o.append(`sessionid`, ss()),
    o.append(`clanAccountID`, `` + e.GetAccountID()),
    o.append(`appid`, `` + t),
    o.append(`gidClanEvent`, n),
    o.append(`partnerID`, `` + i),
    o.append(`message`, r));
  try {
    let e = await Q.default.post(a, o, { withCredentials: !0 });
    return !e || e.status != 200 || e.data.success != 1
      ? (console.error(
          `CreateMarketingMessageMajorUpdateReviewRequestTicket failed.`,
          e && k(e),
        ),
        e.data.success == 29 ? e.data : null)
      : e.data;
  } catch (e) {
    let t = k(e);
    console.error(
      `CreateMarketingMessageMajorUpdateReviewRequestTicket failed: ` +
        t.strErrorMsg,
      t,
    );
  }
  return null;
}
function sv(e) {
  let { editModel: t } = e,
    [n, r, i, a, o] = g(() => [
      t.GetClanSteamID(),
      t.GetGID(),
      t.GetEventType(),
      t.GetEventModel().jsondata.sale_presenters,
      t.BVisible(),
    ]),
    { data: s } = bi(t.GetClanAccountID());
  return (0, X.jsx)(`div`, {
    className: Y(void 0),
    children: (0, X.jsx)(`div`, {
      className: Y(void 0),
      children: (0, X.jsxs)(`div`, {
        className: tt,
        children: [
          (0, X.jsx)(Ef, {
            clanSteamID: n,
            gidClanEvent: r,
            rgSalePresenters: a,
            fnCleanSaleEventPresenters: () => {
              ((t.GetEventModel().jsondata.sale_presenters = void 0),
                t.SetDirty(x.jsondata_sales));
            },
            bPublishTab: !0,
            bIsEventVisible: o,
          }),
          (0, X.jsx)(uv, { editModel: t }),
          (0, X.jsxs)(`div`, {
            className: Y(V, B_),
            children: [
              (0, X.jsx)(N_, { editModel: t, bTakePublishAction: !1 }),
              (0, X.jsx)(Z_, { editModel: t }),
            ],
          }),
          (0, X.jsx)(nv, { editModel: t }),
          (0, X.jsx)(cv, { eventType: i, clanSteamID: n, permissions: s }),
          (0, X.jsx)(`div`, { className: is }),
        ],
      }),
    }),
  });
}
var cv = class extends Z.Component {
  state = { bLoadingClanInfo: !oi.BHasClanInfoLoaded(this.props.clanSteamID) };
  async componentDidMount() {
    this.state.bLoadingClanInfo &&
      (await oi.LoadClanInfoForClanSteamID(this.props.clanSteamID),
      this.setState({ bLoadingClanInfo: !1 }));
  }
  render() {
    if (this.props.eventType == 36) return;
    if (this.state.bLoadingClanInfo)
      return (0, X.jsx)(`div`, {
        className: `ReachCtn`,
        children: (0, X.jsx)(C, {}),
      });
    let e = b.GetEditModel(),
      t = e.GetCategoryAsType(),
      { permissions: n } = this.props,
      r = oi.GetClanInfoByClanAccountID(e.GetClanSteamID().GetAccountID());
    if (!n?.can_edit) return (0, X.jsx)(Z.Fragment, {});
    let i = !!r.is_ogg,
      a =
        (e.BWillShowOnLibraryOverviewDueToSettings() ||
          e.BWillShowOnLibraryDetailDueToSettings()) &&
        wr(e.GetEventModel());
    return (0, X.jsxs)(`div`, {
      className: `ReachCtn`,
      children: [
        (0, X.jsx)(`div`, { className: O, children: L(`#EventReach_Title`) }),
        (0, X.jsxs)(`div`, {
          className: L_,
          children: [
            (0, X.jsx)(`div`, {
              className: Xo,
              children: L(`#EventReach_SubTitle`),
            }),
            (0, X.jsx)(`div`, {
              className: W_,
              children: (0, X.jsx)(`div`, {
                className: G_,
                children: L(`#EventReach_Location`),
              }),
            }),
            (0, X.jsxs)(`div`, {
              className: void 0,
              children: [
                e.BWillShowOnStoreDueToSettings() &&
                  (0, X.jsxs)(`div`, {
                    className: `_9lP2K5bPXc8-`,
                    children: [
                      L(`#EventReach_GamePage`),
                      (0, X.jsx)(H, {
                        tooltip: L(`#EventReach_GamePage_ttip`),
                      }),
                    ],
                  }),
                (0, X.jsxs)(`div`, {
                  className: U_,
                  children: [
                    L(`#EventReach_GameNewsPg`),
                    (0, X.jsx)(H, {
                      tooltip: L(`#EventReach_GameNewsPg_ttip`),
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: Y(U_),
                  children: [
                    L(`#EventReach_PersonalizedCalendar`),
                    (0, X.jsx)(H, {
                      tooltip: L(`#EventReach_PersonalizedCalendar_ttip`),
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: U_,
                  children: [
                    L(`#EventReach_Community`),
                    (0, X.jsx)(H, { tooltip: L(`#EventReach_Community_ttip`) }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: U_,
                  children: [
                    L(`#EventReach_FriendActivity`),
                    (0, X.jsx)(H, {
                      tooltip: L(`#EventReach_FriendActivity_ttip`),
                    }),
                  ],
                }),
                e.BWillShowOnLibraryOverviewDueToSettings() &&
                  (0, X.jsxs)(`div`, {
                    className: Y(`_9lP2K5bPXc8-`),
                    children: [
                      L(`#EventReach_LibraryHome`),
                      a &&
                        (0, X.jsxs)(`span`, {
                          className: `ctCW7tuCp6k-`,
                          children: [
                            `  `,
                            L(`#EventReach_LibraryVisibilityPendingModeration`),
                          ],
                        }),
                      (0, X.jsx)(H, {
                        tooltip: L(`#EventReach_LibraryHome_ttip`),
                      }),
                    ],
                  }),
                e.BWillShowOnLibraryDetailDueToSettings() &&
                  (0, X.jsxs)(`div`, {
                    className: Y(`_9lP2K5bPXc8-`),
                    children: [
                      L(`#EventReach_LibraryDetail`),
                      a &&
                        (0, X.jsxs)(`span`, {
                          className: `ctCW7tuCp6k-`,
                          children: [
                            `  `,
                            L(`#EventReach_LibraryVisibilityPendingModeration`),
                          ],
                        }),
                      (0, X.jsx)(H, {
                        tooltip: L(`#EventReach_LibraryDetail_ttip`),
                      }),
                    ],
                  }),
                !!(
                  e.BIsAllowedInNotifications() && e.BIsVisibleBeforeStart()
                ) &&
                  (0, X.jsxs)(`div`, {
                    className: Y(`_9lP2K5bPXc8-`, `_4e3PJiP9deM-`),
                    children: [
                      L(`#EventReach_Future`),
                      ` `,
                      L(`#EventReach_Reminder`),
                      (0, X.jsx)(H, {
                        tooltip: L(`#EventReach_Reminder_ttip`),
                      }),
                    ],
                  }),
                !!e.BIsAllowedInNotifications() &&
                  (0, X.jsxs)(`div`, {
                    className: Y(`_9lP2K5bPXc8-`, `_4e3PJiP9deM-`),
                    children: [
                      L(`#EventReach_Future`),
                      ` `,
                      L(`#EventReach_EmailRollUp`),
                      (0, X.jsx)(H, {
                        tooltip: L(`#EventReach_EmailRollUp_ttip`),
                      }),
                    ],
                  }),
              ],
            }),
            i &&
              (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(`div`, {
                    className: `DQzwaTYjRLU-`,
                    children: (0, X.jsx)(`div`, {
                      className: `qZGMgAp5pfM-`,
                      children: L(`#EventReach_OptionalLocation`),
                    }),
                  }),
                  r.is_ogg &&
                    (0, X.jsxs)(`div`, {
                      className: void 0,
                      children: [
                        (0, X.jsxs)(`div`, {
                          className: `_9lP2K5bPXc8-`,
                          children: [
                            (0, X.jsxs)(`span`, {
                              className: `tWP3XkJX04Y-`,
                              children: [
                                (0, X.jsx)(vi, {
                                  bOn: e.GetEventModel().BHasTag(`workshop`),
                                }),
                                (0, X.jsx)(`span`, {
                                  className: `uGTR8ycGstw-`,
                                  children: L(`#EventReach_Workshop`),
                                }),
                              ],
                            }),
                            (0, X.jsx)(H, {
                              tooltip: L(`#EventReach_Workshop_ttip`),
                            }),
                          ],
                        }),
                        t == 14 && (0, X.jsx)(lv, {}),
                        (0, X.jsxs)(`div`, {
                          className: Y(`_9lP2K5bPXc8-`),
                          children: [
                            (0, X.jsxs)(`span`, {
                              className: `tWP3XkJX04Y-`,
                              children: [
                                (0, X.jsx)(vi, {
                                  bOn: e
                                    .GetEventModel()
                                    .BShowLibrarySpotlight(),
                                }),
                                (0, X.jsx)(`span`, {
                                  className: `uGTR8ycGstw-`,
                                  children: L(`#EventReach_LibraySpotLight`),
                                }),
                              ],
                            }),
                            (0, X.jsx)(H, {
                              tooltip: L(`#EventReach_LibraySpotLight_ttip`),
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
    });
  }
};
cv = D([r], cv);
function lv(e) {
  let t = b.GetEditModel(),
    n = Y_(0, t.GetAppID());
  return (0, X.jsxs)(`div`, {
    className: U_,
    children: [
      (0, X.jsxs)(`span`, {
        className: K_,
        children: [
          n == null || n == null
            ? (0, X.jsx)(C, { size: `small`, string: L(`#Loading`) })
            : (0, X.jsx)(vi, {
                bOn: n.some((e) => e.announcementid == t.GetAnnouncementGID()),
              }),
          (0, X.jsx)(`span`, {
            className: q_,
            children: L(`#EventReach_RecentlyUpdatedPg`),
          }),
        ],
      }),
      (0, X.jsx)(H, { tooltip: L(`#EventReach_RecentlyUpdatedPg_ttip`) }),
    ],
  });
}
function uv(e) {
  let { editModel: t } = e,
    [n, r, i, a, o, s, c, l, u] = g(() => [
      t.GetEventModel().GID,
      t.GetEventModel().AnnouncementGID,
      t.ComputeEditingModelTimeOverrides(),
      t.BHidden(),
      t.BPublished(),
      t.GetEventVisibilityStartTime(),
      t.GetVisibilitySetting(),
      t.GetEventModel().GetVisibilityStartTimeAndDateUnixSeconds(),
      t.GetEventType() == 36,
    ]),
    d;
  if (!o) {
    if (t.GetStartTimeEditChoice() == Tn.k_ESpecified)
      switch (c) {
        case rr.event_start:
          d = (0, X.jsx)(`div`, {
            className: H_,
            children: (0, X.jsx)(`p`, {
              children: L(`#EventEditor_Status_WillBeVisible_EventStart`),
            }),
          });
          break;
        case rr.specified_time:
          d = (0, X.jsx)(`div`, {
            className: H_,
            children: (0, X.jsx)(`p`, {
              children: K(
                `#EventEditor_Status_WillBeVisible_At`,
                (0, X.jsx)(Ui, { dateAndTime: l, bSingleLine: !0 }),
              ),
            }),
          });
          break;
        case rr.immediate:
        default:
          d = (0, X.jsxs)(`div`, {
            className: H_,
            children: [
              (0, X.jsx)(`p`, {
                children: L(`#EventPublishing_Summary_Immediate`),
              }),
              (0, X.jsx)(`p`, {
                children: L(`#EventPublishing_Summary_ModerationNote`),
              }),
            ],
          });
      }
    else
      d = (0, X.jsxs)(`div`, {
        className: H_,
        children: [
          (0, X.jsx)(`p`, {
            children: L(`#EventPublishing_Summary_Immediate`),
          }),
          (0, X.jsx)(`p`, {
            children: L(`#EventPublishing_Summary_ModerationNote`),
          }),
        ],
      });
  }
  let f = Di(t.GetEventModel());
  return (0, X.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, X.jsx)(`div`, {
        className: O,
        children: L(`#EventPublishing_Summary`),
      }),
      (0, X.jsxs)(`div`, {
        className: I_,
        children: [
          (0, X.jsxs)(`div`, {
            className: R_,
            children: [
              (0, X.jsx)(`div`, {
                className: z_,
                children: (0, X.jsx)(Wn, { editModel: t }),
              }),
              o &&
                !a &&
                !u &&
                (0, X.jsx)(`div`, {
                  children: (0, X.jsx)(Si, {
                    className: Y(`yYL-OrX9PtQ-`, `_3UP7lu7R3VU-`),
                    eventModel: t.GetEventModel(),
                    route: T.k_eStoreView,
                    children: L(`#EventEditor_ViewLive`),
                  }),
                }),
            ],
          }),
          !u &&
            (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsxs)(`div`, {
                  className: `befdhdeb-HY-`,
                  children: [
                    (0, X.jsxs)(`span`, {
                      children: [
                        (0, X.jsxs)(`b`, {
                          children: [L(`#EventDisplay_TimeUpcoming`), `:`],
                        }),
                        `\xA0`,
                      ],
                    }),
                    (0, X.jsx)(Ui, {
                      dateAndTime: i.nOverrideStartTime,
                      bSingleLine: !0,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `befdhdeb-HY-`,
                  children: [
                    (0, X.jsxs)(`p`, {
                      children: [
                        (0, X.jsxs)(`b`, {
                          children: [
                            L(`#EventPublishing_Summary_VisibilityStart`),
                            `:`,
                          ],
                        }),
                        `\xA0`,
                      ],
                    }),
                    !!(o && a) &&
                      (0, X.jsxs)(`span`, {
                        children: [
                          K(
                            `#EventEditor_Visibility_AutoVisible`,
                            (0, X.jsx)(Ui, { dateAndTime: s, bSingleLine: !0 }),
                          ),
                          `\xA0`,
                          L(`#EventEditor_Visibility_NoAction`),
                        ],
                      }),
                    d,
                  ],
                }),
                !!(n || r) &&
                  (0, X.jsx)(`div`, {
                    className: `Z8Jq39deWKI-`,
                    children: (0, X.jsx)(oa, {
                      eventLink: f,
                      labelOverride: `#EventEditor_Status_FutureURL`,
                    }),
                  }),
              ],
            }),
          u &&
            (0, X.jsx)(`div`, {
              className: `befdhdeb-HY-`,
              children: (0, X.jsx)(Zm, { editModel: t }),
            }),
        ],
      }),
    ],
  });
}
function dv(e) {
  let { bInitiatePublishDialog: t, clanSteamID: n } = e,
    r = Fi(`EventInputPane`),
    i = sa(),
    a = i.GetEventModel();
  (0, Z.useEffect)(() => {
    q.IS_CURATOR && ai.LoadCreatorHome(n, !1, r);
  }, [n, r]);
  let o = (0, Z.useCallback)(() => {
      let e = ai.GetCreatorHome(n);
      return _s.is_support && q.CAN_UPLOAD_IMAGES && q.IS_CURATOR && e
        ? !(
            e.BHasClanAccountFlagSet(2) ||
            e.BHasClanAccountFlagSet(1) ||
            e.BHasClanAccountFlagSet(4) ||
            e.GetNumFollowers() >= 15e3
          )
        : !1;
    }, [n]),
    { data: s } = bi(a.clanSteamID.GetAccountID()),
    c = !!s?.valve_admin,
    l = si(a, c),
    u = g(() => pe(c)),
    d = ci(a, c),
    f = g(() => Fe(c)),
    p = li(a);
  es(
    [l.bVisible, d.bVisible, p.bVisible].filter(Boolean).length <= 1,
    `Sale, Update Landing Page, and Creator Home should be mutually exclusive`,
  );
  let m = !i_(i.GetEventModel(), s);
  oi.LoadClanInfoForClanSteamID(n);
  let h = !!oi.GetClanInfoByClanAccountID(n.GetAccountID())?.has_rss_feed,
    _ = (e) =>
      window.sessionStorage.setItem(`editorCurrentTab`, `?tab=${e.key}`),
    v = [
      {
        name: L(`#EventEditor_Description_tab`),
        key: `description`,
        status: (0, X.jsx)(pv, { fnGetStatus: re }),
        hidden: p.bVisible,
        contents: (0, X.jsx)(J, {
          children: (0, X.jsx)(Rm, {
            editModel: i,
            bInitiatePublishDialog: t,
            bCanManuallyTagAssociatedApps: h,
          }),
        }),
        onClick: _,
      },
      {
        name:
          (p.bValveOnly ? `(VO) ` : ``) + L(`#EventEditor_CreatorHome_Title`),
        key: `creatorhome`,
        hidden: !p.bVisible,
        vo_warning: o() && L(`#EventEditor_CuratorImageWarning`),
        contents: (0, X.jsx)(J, {
          children: (0, X.jsx)(Qm, { mode: 2, editModel: i }),
        }),
        onClick: _,
      },
      {
        name: L(`#EventEditor_Visibility_Title`),
        key: `options`,
        status: (0, X.jsx)(pv, { fnGetStatus: ne }),
        hidden: p.bVisible,
        contents: (0, X.jsxs)(J, {
          children: [
            (0, X.jsx)(__, { editModel: i }),
            (0, X.jsx)(`div`, { className: is }),
          ],
        }),
        onClick: _,
      },
      {
        name: L(`#EventEditor_Artwork`),
        key: `artwork`,
        status: (0, X.jsx)(pv, { fnGetStatus: ve }),
        hidden: !q.CAN_UPLOAD_IMAGES || p.bVisible,
        vo_warning: o() && L(`#EventEditor_CuratorImageWarning`),
        contents: (0, X.jsx)(xv, { editModel: i }),
        onClick: _,
      },
      {
        name: L(`#Broadcast_tab`),
        key: `broadcast`,
        hidden: !q.CAN_UPLOAD_IMAGES || i.GetClanAccountID() == ni(),
        vo_warning: o() && L(`#EventEditor_CuratorImageWarning`),
        contents: (0, X.jsx)(J, { children: (0, X.jsx)(zh, { editModel: i }) }),
        onClick: _,
      },
      {
        name: (a.BHasEmailEnabled() ? `` : `(VO) `) + L(`#EventEmail_TabTitle`),
        key: `email`,
        hidden: m,
        status:
          i.GetClanAccountID() == ni()
            ? (0, X.jsx)(pv, { fnGetStatus: Ke })
            : void 0,
        contents: (0, X.jsx)(J, { children: (0, X.jsx)(a_, { editModel: i }) }),
        onClick: _,
      },
      {
        name: (l.bValveOnly ? `(VO) ` : ``) + L(`#Sale_TabTitle`),
        key: `sale`,
        status: (0, X.jsx)(pv, { fnGetStatus: () => u }),
        statusToolTip: u?.ttip,
        hidden: !l.bVisible,
        vo_warning: o() && L(`#EventEditor_CuratorImageWarning`),
        contents: (0, X.jsx)(J, {
          children: (0, X.jsx)(Qm, { mode: 0, editModel: i }),
        }),
        onClick: _,
      },
      {
        name:
          (d.bValveOnly ? `(VO) ` : ``) +
          L(`#EventEditor_UpdateLandingPage_Title`),
        key: `updatelandingpage`,
        status: (0, X.jsx)(pv, { fnGetStatus: () => f }),
        statusToolTip: f?.ttip,
        hidden: !d.bVisible,
        vo_warning: o() && L(`#EventEditor_CuratorImageWarning`),
        contents: (0, X.jsx)(J, {
          children: (0, X.jsx)(Qm, { mode: 1, editModel: i }),
        }),
        onClick: _,
      },
      {
        name: L(`#Button_Publish`),
        key: `publishing`,
        contents: (0, X.jsx)(J, { children: (0, X.jsx)(sv, { editModel: i }) }),
        onClick: _,
      },
      {
        name: `(VO) Debug`,
        key: `debug`,
        hidden: !c,
        contents: (0, X.jsx)(J, { children: (0, X.jsx)(mn, { editModel: i }) }),
        onClick: _,
      },
      {
        name: `(VO) Stats`,
        key: `stats`,
        hidden: !c || !a.GID || !a.BHasSaleEnabled(),
        contents: (0, X.jsx)(J, { children: (0, X.jsx)(oh, { editModel: i }) }),
        onClick: _,
      },
    ];
  return (0, X.jsxs)(fv, {
    children: [
      (0, X.jsx)(Ri, { tabs: v }),
      (0, X.jsx)(`div`, { className: is }),
    ],
  });
}
function fv(e) {
  let [t, n] = Z.useState();
  return (0, X.jsx)(`div`, {
    className: pr,
    children: (0, X.jsxs)(Qp, {
      elContent: t,
      children: [
        (0, X.jsx)(`div`, { className: tt, children: e.children }),
        (0, X.jsx)(`div`, {
          className: Y(ro),
          children: (0, X.jsx)(tm, { setAdditionalContentDiv: n }),
        }),
      ],
    }),
  });
}
var pv = r(function (e) {
    let t = e.fnGetStatus();
    if (!t) return null;
    let { text: n, complete: r, total: i } = t;
    return (0, X.jsx)(Li, {
      statusType: r >= i ? `success` : `danger`,
      children: n,
    });
  }),
  mv = r((e) => {
    (0, Z.useEffect)(() => {
      oi.LoadOGGClanInfoForIdentifier(e.appid_or_vanity_str);
    }, [e.appid_or_vanity_str]);
    let {
        clanSteamID: t,
        gid: n,
        appid: r,
        bInitiatePublishDialog: i,
        appid_or_vanity_str: a,
      } = e,
      o =
        q.IS_CREATOR_HOME || q.IS_CURATOR
          ? q.VANITY_ID
          : Do.Get().GetApp(r)?.GetName(),
      s = b.GetEditModel();
    return (0, X.jsx)(Ta, {
      editModel: s,
      children: (0, X.jsxs)(`div`, {
        className: Y(Cn),
        children: [
          (0, X.jsx)(em, {
            clanSteamID: t,
            appid: r,
            gid: n,
            appid_or_vanity_str: a,
          }),
          (0, X.jsxs)(`div`, {
            className: Y(U, At),
            children: [
              (0, X.jsx)(`div`, { className: dt, children: o }),
              (0, X.jsxs)(`div`, {
                className: bt,
                children: [
                  (0, X.jsx)(hv, { editModel: s }),
                  (0, X.jsx)(xs, {
                    toolTipContent: s.GetName(),
                    direction: `bottom`,
                    children: (0, X.jsx)(`div`, {
                      className: It,
                      children: s.GetName(),
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, X.jsx)(`div`, {
            className: void 0,
            children: (0, X.jsx)(dv, {
              appid_or_vanity_str: a,
              appid: r,
              gid: n,
              bInitiatePublishDialog: i,
              clanSteamID: t,
            }),
          }),
          (0, X.jsx)(`div`, {}),
        ],
      }),
    });
  });
function hv(e) {
  let { editModel: t } = e,
    [n, r, i, a, o, s] = g(() => [
      t.GetEventModel().bOldAnnouncement,
      t.GetStrVanityOrAppID(),
      t.GetCategoryAsString(),
      t.GetAnnouncementGID(),
      t.BHasGid() ? t.GetGID() : ``,
      t.BHasTag(`vo_marketing_message`),
    ]),
    { bCanChange: c, strReasonText: l } = ue(t),
    u = (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsxs)(`span`, { children: [L(`#EventEditor_TypeTitle`), ` `] }),
        i,
        c &&
          (0, X.jsx)(`img`, {
            src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`,
          }),
        !c && (0, X.jsx)(H, { tooltip: l }),
      ],
    });
  return (0, X.jsxs)(X.Fragment, {
    children: [
      c &&
        (0, X.jsx)(f, {
          className: Y(`LOuAjg2drv4-`, `ES8aZ4XRC8g-`),
          to: n ? y.MigrateCategory(r, a) : y.Category(r, o),
          children: u,
        }),
      !c && (0, X.jsx)(`div`, { className: `LOuAjg2drv4-`, children: u }),
    ],
  });
}
function gv() {
  let e = ln(),
    t = b.GetEditModel(),
    [n, r] = (0, Z.useState)(!1);
  return (
    (0, Z.useEffect)(() => {
      if (!t?.BTagsNeedResync()) return;
      let n = !1;
      return (
        En(e, t)
          .then((e) => {
            !n &&
              e.length > 0 &&
              yo(
                L(
                  `#EventEditor_TagResyncIncomplete`,
                  e.length,
                  e
                    .slice(0, 10)
                    .map((e) => e.type + ` ` + e.id)
                    .join(`, `),
                ),
                window,
              );
          })
          .catch((e) => {
            (console.error(
              `Failed to rebuild the stripped tags for this event`,
              e,
            ),
              n || r(!0));
          }),
        () => {
          n = !0;
        }
      );
    }, [t, e]),
    { bResyncing: !!t?.BTagsNeedResync() && !n, bFailed: n }
  );
}
var _v = r(function (e) {
    let t = (0, Z.useMemo)(() => new zo(q.CLANSTEAMID), []),
      { bResyncing: n, bFailed: r } = gv();
    return n
      ? (0, X.jsxs)(`div`, {
          className: ks,
          children: [
            (0, X.jsx)(C, {}),
            (0, X.jsx)(`div`, {
              children: L(`#EventEditor_TagResyncProgress`),
            }),
          ],
        })
      : r
        ? (0, X.jsx)(pt, {
            strErrorMsg: L(`#EventEditor_TagResyncFailed`),
            appid_or_vanity_str: e.match.params.appid_or_vanity_str,
          })
        : (0, X.jsx)(mv, {
            appid_or_vanity_str: e.match.params.appid_or_vanity_str,
            appid: q.APPID,
            gid: e.match.params.gid,
            clanSteamID: t,
            bInitiatePublishDialog: e.bInitiatePublishDialog,
          });
  }),
  vv = be(_v),
  yv = class extends Z.Component {
    m_bRedirect = !1;
    constructor(e) {
      (super(e),
        (this.m_bRedirect =
          b.GetEditModel() === void 0 ||
          b.GetEditModel().GetCategoryAsType() == 1));
    }
    render() {
      return this.m_bRedirect
        ? (0, X.jsx)(p, {
            to: y.Category(this.props.match.params.appid_or_vanity_str, ``),
          })
        : (0, X.jsx)(vv, { ...this.props });
    }
  };
function bv(e) {
  return e ? e.filter(Boolean).length : 0;
}
function xv(e) {
  let { editModel: t } = e,
    n = ua(t.GetClanSteamID(), !0),
    [r, i, a, o, s, c, l, u, d, f] = g(() => [
      t.GetEventType(),
      !!t.GetEventModel().BHasTag(`steam_best_of_year`),
      t.GetClanSteamID(),
      t.GetEventModel().vecTags,
      t.GetIncludedRealmList(),
      t.GetEventType() === 34,
      bv(t.GetEventModel().jsondata.localized_spotlight_image),
      t.BAllowedSteamStoreSpotlight(),
      t.GetAppID(),
      Ah(t, n),
    ]),
    p = [`background`, `capsule`];
  (l > 0
    ? p.push(`spotlight`)
    : q.IS_OGG &&
      u &&
      (p.push(`localized_store_app_spotlight`),
      p.push(`localized_store_app_spotlight_mobile`)),
    i && p.push(`bestofyear_banner`, `bestofyear_banner_mobile`));
  let m = p.includes(`spotlight`),
    h = p.includes(`localized_store_app_spotlight`),
    _ = p.includes(`localized_store_app_spotlight_mobile`);
  return (0, X.jsxs)(J, {
    children: [
      (0, X.jsxs)(`div`, {
        className: nr,
        children: [
          (0, X.jsxs)(`div`, {
            className: void 0,
            children: [
              (0, X.jsxs)(`p`, {
                children: [
                  (0, X.jsx)(`strong`, {
                    children: L(`#selectimage_tip3_title`),
                  }),
                  `: `,
                  K(
                    `#selectimage_tip3`,
                    (0, X.jsxs)(`span`, {
                      children: [
                        (0, X.jsx)(`br`, {}),
                        (0, X.jsx)(`a`, {
                          target: R.IN_CLIENT ? void 0 : `_blank`,
                          href: `https://partner.steamgames.com/doc/store/localization#supported_languages`,
                          children: L(`#selectimage_see_documentation`),
                        }),
                      ],
                    }),
                  ),
                ],
              }),
              (0, X.jsx)(`p`, {
                children: (0, X.jsx)(`a`, {
                  href: `https://www.dropbox.com/scl/fo/cvkwbosmrimklcl9h0qko/AF5IPErKP-mQM_3YO1Dw2lA?rlkey=b3ad0izykq367g4luasrinw9z&dl=0`,
                  download: !0,
                  children: L(`#selectimage_downloadtemplate`),
                }),
              }),
            ],
          }),
          (0, X.jsxs)(`a`, {
            href: `https://partner.steamgames.com/doc/marketing/event_tools/event_examples`,
            className: Yn,
            target: R.IN_CLIENT ? void 0 : `_blank`,
            children: [
              (0, X.jsx)(`div`, {
                className: hn,
                children: (0, X.jsx)(`img`, {
                  className: void 0,
                  src: R.IMG_URL + `events/thumb_library_home.jpg`,
                }),
              }),
              (0, X.jsx)(`div`, {
                className: Pn,
                children: L(`#selectimage_viewExamples`),
              }),
            ],
          }),
        ],
      }),
      (0, X.jsx)(Ia, {
        clanSteamID: a,
        rgSupportArtwork: p,
        fnSetImageURL: t.SetImageURL,
        bAllowPreviousClanImageSelection: !0,
        rgRealmList: s,
      }),
      (0, X.jsx)(wa, {
        clanSteamID: a,
        appid: d,
        eventModel: t.GetEventModel(),
        title: L(`#EventEditor_ArtworkType_capsule`),
        artworkType: `capsule`,
        fnLangHasData: t.BHasTitleImage,
        fnSetImageURL: t.SetImageURL,
        fnGetImageHashAndExt: t.GetImageHashAndExt,
        headerHint: Tr(r, o) ? ka.k_Required : void 0,
        elEventArtworkExample: (0, X.jsx)(Rd, { artworkType: `capsule` }),
        partnerEventStore: b,
      }),
      (0, X.jsx)(wa, {
        clanSteamID: a,
        appid: d,
        eventModel: t.GetEventModel(),
        title: L(`#EventEditor_ArtworkType_background`),
        fnLangHasData: t.BHasTitleImage,
        fnSetImageURL: t.SetImageURL,
        fnGetImageHashAndExt: t.GetImageHashAndExt,
        artworkType: `background`,
        headerHint: ka.k_Suggested,
        elEventArtworkExample: (0, X.jsx)(Rd, { artworkType: `background` }),
        partnerEventStore: b,
      }),
      !!(c && (h || _ || m)) &&
        (0, X.jsxs)(`div`, {
          className: `_12sYjoMc9wE-`,
          children: [
            (0, X.jsx)(`div`, {
              className: `Y63LZFKwGXE-`,
              children: L(`#EventEditor_ArtworkType_store_spotlight`),
            }),
            (0, X.jsx)(`div`, {
              className: Y(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
              children: L(
                `#EventEditor_ArtworkType_SpotlightNotSupport`,
                t.GetCategoryAsString(),
              ),
            }),
            (0, X.jsx)(`br`, {}),
          ],
        }),
      !(!h || c) &&
        (0, X.jsx)(wa, {
          clanSteamID: a,
          appid: d,
          eventModel: t.GetEventModel(),
          title: L(`#EventEditor_ArtworkType_localized_store_app_spotlight`),
          fnLangHasData: t.BHasTitleImage,
          fnSetImageURL: t.SetImageURL,
          fnGetImageHashAndExt: t.GetImageHashAndExt,
          artworkType: `localized_store_app_spotlight`,
          elEventArtworkExample: (0, X.jsx)(Rd, {
            artworkType: `localized_store_app_spotlight`,
          }),
          headerHint: ka.k_Requested,
          partnerEventStore: b,
        }),
      !(!_ || c) &&
        (0, X.jsx)(wa, {
          clanSteamID: a,
          appid: d,
          eventModel: t.GetEventModel(),
          title: L(
            `#EventEditor_ArtworkType_localized_store_app_spotlight_mobile`,
          ),
          fnLangHasData: t.BHasTitleImage,
          fnSetImageURL: t.SetImageURL,
          fnGetImageHashAndExt: t.GetImageHashAndExt,
          artworkType: `localized_store_app_spotlight_mobile`,
          elEventArtworkExample: (0, X.jsx)(Rd, {
            artworkType: `localized_store_app_spotlight_mobile`,
          }),
          headerHint: ka.k_Requested,
          partnerEventStore: b,
        }),
      !(!m || c) &&
        (0, X.jsx)(wa, {
          clanSteamID: a,
          appid: d,
          eventModel: t.GetEventModel(),
          title: L(`#EventEditor_ArtworkType_store_spotlight`),
          fnLangHasData: t.BHasTitleImage,
          fnSetImageURL: t.SetImageURL,
          fnGetImageHashAndExt: t.GetImageHashAndExt,
          artworkType: `spotlight`,
          headerHint: Ar(r) ? ka.k_Suggested : void 0,
          elEventArtworkExample: (0, X.jsx)(Rd, { artworkType: `spotlight` }),
          partnerEventStore: b,
        }),
      !!q.IS_OGG &&
        (0, X.jsx)(wa, {
          clanSteamID: a,
          appid: d,
          eventModel: t.GetEventModel(),
          fnSetImageURL: t.SetImageURL,
          fnGetImageHashAndExt: t.GetImageHashAndExt,
          title: L(`#EventEditor_ArtworkType_hero`),
          fnLangHasData: t.BHasTitleImage,
          artworkType: `hero`,
          partnerEventStore: b,
        }),
      !!i &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(wa, {
              clanSteamID: a,
              appid: d,
              eventModel: t.GetEventModel(),
              fnLangHasData: t.BHasTitleImage,
              fnSetImageURL: t.SetImageURL,
              fnGetImageHashAndExt: t.GetImageHashAndExt,
              title: L(`#EventEditor_ArtworkType_bestofyear_banner`),
              artworkType: `bestofyear_banner`,
              partnerEventStore: b,
            }),
            (0, X.jsx)(wa, {
              clanSteamID: a,
              appid: d,
              eventModel: t.GetEventModel(),
              fnLangHasData: t.BHasTitleImage,
              fnSetImageURL: t.SetImageURL,
              fnGetImageHashAndExt: t.GetImageHashAndExt,
              title: L(`#EventEditor_ArtworkType_bestofyear_banner_mobile`),
              artworkType: `bestofyear_banner_mobile`,
              partnerEventStore: b,
            }),
          ],
        }),
      !!f && (0, X.jsx)(jh, { editModel: t }),
    ],
  });
}
var Sv = `XJDpqo3kSV4-`;
function Cv(e) {
  let { appid: t, color: n, bgcolor: r } = e;
  return (
    os(),
    (0, X.jsx)(Hc, {
      appID: t,
      classOverride: Y(vr, Sv),
      styleOverride: { color: n, backgroundColor: r },
    })
  );
}
function wv(e) {
  let t = Number(e.args.appid);
  if (!t) return null;
  let n = Ai(e.args.color, `black`),
    r = Ai(e.args.bgcolor, `white`);
  return (0, X.jsx)(Cv, { appid: t, color: n, bgcolor: r });
}
var Tv = `PrWjrQm2y8g-`;
function Ev(e) {
  return e < 10 ? `0` + e : e;
}
function Dv(e) {
  let { giveawayid: t } = e,
    {
      bLoadingGiveawayInfo: n,
      winner_count: r,
      closed: i,
      seconds_until_drawing: a,
    } = tc(t);
  return n
    ? null
    : (0, X.jsxs)(`div`, {
        className: Tv,
        children: [
          !!i &&
            (0, X.jsx)(`div`, {
              className: `baDBPeinwws-`,
              children:
                r > 0
                  ? L(`#Giveaway_Closed`, to(r))
                  : L(`#Giveaway_Closed_NoWinnerInfo`),
            }),
          !i &&
            (0, X.jsxs)(Z.Fragment, {
              children: [
                a <= 0
                  ? (0, X.jsxs)(`div`, {
                      className: `Yb8JolxIPe0-`,
                      children: [
                        (0, X.jsx)(C, { size: `small` }),
                        (0, X.jsx)(`div`, {
                          children: L(`#Giveaway_RandomDraw`),
                        }),
                      ],
                    })
                  : (0, X.jsxs)(`div`, {
                      className: `YnCoxa3m5cw-`,
                      children: [
                        (0, X.jsx)(`div`, {
                          className: `aOXiLwSp1Xc-`,
                          children: Ev(Math.floor(a / 60)) + `:` + Ev(a % 60),
                        }),
                        (0, X.jsxs)(`div`, {
                          className: `pnbvcAjswZk-`,
                          children: [
                            L(`#Giveaway_CountDown2`),
                            ` `,
                            L(`#Giveaway_KeepWatching`),
                          ],
                        }),
                      ],
                    }),
                r > 0 &&
                  (0, X.jsxs)(`div`, {
                    className: `-Q8aSdniAKw-`,
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `_4V6epCns4jI-`,
                        children: to(r),
                      }),
                      (0, X.jsx)(`div`, {
                        className: `EVJMTmpF-Vc-`,
                        children: L(`#Giveaway_Congratulation`),
                      }),
                    ],
                  }),
              ],
            }),
        ],
      });
}
function Ov(e) {
  let { eventModel: t, nEventBadgeID: n } = e,
    r = Me(n);
  if (r?.level > 0) {
    let e = r.level;
    if (t?.BHasSaleEnabled()) {
      let r = t.GetSaleSectionsByType(`badge_progress`);
      if (r?.length == 1) {
        let i = r[0].badge_progress;
        if (i?.event_badgeid == n && i?.granted_by_discovery_queue) {
          let n = i.levels[i.levels.length - 1].level;
          return (0, X.jsx)(kv, {
            eventModel: t,
            nBadgeLevel: e,
            nMaxLevel: n,
          });
        }
      }
    }
    return (0, X.jsx)(`span`, {
      className: `DisplayBadgeProgress`,
      children: to(e),
    });
  }
  return null;
}
function kv(e) {
  let { eventModel: t, nBadgeLevel: n, nMaxLevel: r } = e,
    i = Z.useMemo(() => {
      let e = t
        .GetSaleSections()
        .filter((e) => e.section_type == `discoveryqueue`);
      return e?.length > 0 ? e[0] : null;
    }, [t]),
    { storePageFilter: a, eStoreDiscoveryQueueType: o } = Z.useMemo(
      () => We(t, i),
      [t, i],
    ),
    s = Ae(o, a),
    c = Math.min(n + s, r);
  return (0, X.jsx)(`span`, {
    className: `DisplayBadgeProgress`,
    children: to(c),
  });
}
function Av(e) {
  let { event: t } = e.context,
    n = Number.parseInt(w(e.args, `eventid`));
  return _s.logged_in && n
    ? (0, X.jsx)(Ov, { nEventBadgeID: n, eventModel: t })
    : null;
}
function jv(e) {
  let { nDoorIndex: t, children: n } = e,
    r = Se(t),
    i = we(),
    [a, o] = Z.useState(!1),
    [s, c] = Z.useState(!1),
    { elDialogElement: l, fnShowLogonDialog: u } = Ir();
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(I, {
        disabled: r,
        onClick: (e) => {
          a ||
            (_s.logged_in
              ? (o(!0),
                i({ iDoorIndex: t })
                  .then((e) => {
                    (e || c(!0), o(!1));
                  })
                  .catch(() => {
                    (c(!0), o(!1));
                  }))
              : u());
        },
        children: s
          ? (0, X.jsx)(`div`, { children: L(`#GrantAwardError_Busy`) })
          : (0, X.jsxs)(X.Fragment, {
              children: [
                !!a && (0, X.jsx)(C, { size: `small` }),
                !!r && (0, X.jsx)(ys, {}),
                n,
              ],
            }),
      }),
      l,
    ],
  });
}
function Mv(e) {
  let t = Number.parseInt(w(e.args)) || 0;
  return t >= 0 && t < 32
    ? (0, X.jsx)(jv, { nDoorIndex: t, children: e.children })
    : null;
}
var Nv = a(Oe);
function Pv(e) {
  let t = Number.parseInt(w(e.args)),
    { event: n, showErrorInfo: r } = e.context;
  if (t) {
    let i = n?.jsondata?.sale_sections?.findIndex((e) => e.unique_id == t);
    if (i >= 0) {
      let t = n.GetDayIndexFromEventStart();
      return (0, X.jsx)(_i, {
        location: r ? 2 : 0,
        children: (0, X.jsx)(Nv, {
          event: n,
          section: n.jsondata.sale_sections[i],
          activeTab: new _t(null, t),
          language: e.language,
          nSaleDayIndex: t,
          promotionName: ``,
          appVisibilityTracker: null,
          ePreviewMode: r ? Be.EPreviewMode_Enabled : Be.EPreviewMode_Disabled,
        }),
      });
    }
    if (r)
      return (0, X.jsxs)(`div`, {
        className: pi,
        children: [`Error could not find sale section `, t],
      });
  }
  return null;
}
var Fv = null;
function Iv() {
  return (
    (Fv ??= new Map([
      ...Array.from(tl().entries()),
      [
        `itemdef`,
        {
          Constructor: Lv,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [`followgame`, { Constructor: wv, autocloses: !1 }],
      [`deckcompatcount`, { Constructor: Rv, autocloses: !1 }],
      [`deckcompatuserlibrarycount`, { Constructor: zv, autocloses: !1 }],
      [`giveawayinfo`, { Constructor: Uv, autocloses: !1 }],
      [`eventdoorvisibility`, { Constructor: Bv, autocloses: !1 }],
      [`badgecurrentlevel`, { Constructor: Av, autocloses: !1 }],
      [`optindoorquest`, { Constructor: Mv, autocloses: !1 }],
      [`localize`, { Constructor: Hv, autocloses: !1 }],
      [`salesection`, { Constructor: Pv, autocloses: !1 }],
      [`reservationbutton`, { Constructor: Gv, autocloses: !1 }],
    ])),
    Fv
  );
}
function Lv(e) {
  let { event: t } = e.context,
    n = Number.parseInt(w(e.args, `appid`)),
    r = Number.parseInt(w(e.args, `itemdefid`)),
    i = Number.parseInt(w(e.args, `maxquantity`)),
    a = w(e.args, `calltoaction`);
  return !mt(n, r, !1) || !t
    ? (0, X.jsx)(C, {
        size: `small`,
        position: `center`,
        string: L(`#Loading`),
      })
    : (0, X.jsx)(ke, {
        language: e.language,
        clanAccountID: t.clanSteamID.GetAccountID(),
        itemDefSetting: { nAppID: n, nItemDefID: r, max_quantity: i },
        strCallToAction: a,
      });
}
function Rv(e) {
  let t = _c();
  if (!t) return (0, X.jsx)(C, { size: `small` });
  let n = Number.parseInt(w(e.args));
  return (0, X.jsx)(`span`, { children: to(Number(vc(t, n))) });
}
function zv(e) {
  let t = Ie(_s.accountid, `library`);
  if (!t) return (0, X.jsx)(C, { size: `small` });
  let n = Number.parseInt(w(e.args)),
    r = t.verifiedList?.length || 0;
  switch (n) {
    case 2:
      r = t.playableList?.length || 0;
      break;
    case 1:
      r = t.unsupportedList?.length || 0;
      break;
    case 0:
      r = t.unknownList?.length || 0;
  }
  return (0, X.jsx)(`span`, { children: to(Number(r)) });
}
function Bv(e) {
  let t = Number.parseInt(w(e.args)),
    n = `hide` in e.args && !!Number.parseInt(w(e.args, `hide`));
  return t >= 0
    ? (0, X.jsx)(Vv, { nDoorIndex: t, bHide: n, children: e.children })
    : null;
}
function Vv(e) {
  let { nDoorIndex: t, bHide: n, children: r } = e,
    i = Se(t);
  return i == null
    ? null
    : (i && !n) || (!i && n)
      ? (0, X.jsx)(X.Fragment, { children: e.children })
      : null;
}
function Hv(e) {
  return (0, X.jsx)(`span`, {
    className: gr,
    children: No(
      e.children,
      (0, X.jsx)(`b`, {}),
      (0, X.jsx)(`b`, {}),
      (0, X.jsx)(`b`, {}),
      (0, X.jsx)(`b`, {}),
    ),
  });
}
function Uv(e) {
  let t = w(e.args);
  return t ? (0, X.jsx)(Dv, { giveawayid: t }) : (0, X.jsx)(Z.Fragment, {});
}
var Wv = void 0;
function Gv(e) {
  return (0, X.jsx)(Rc, { ...e, PreviewActions: Wv });
}
var Kv = class extends Ne {
  state = { bLoading: !0 };
  GetRedirectRender() {
    return (0, X.jsx)(p, {
      push: !0,
      to: y.Edit(
        this.props.match.params.appid_or_vanity_str,
        this.state.redirectToGIDEvent,
      ),
    });
  }
  render() {
    return (
      super.render() ??
      (0, X.jsx)(mv, {
        appid: q.APPID,
        appid_or_vanity_str: this.props.match.params.appid_or_vanity_str,
        gid: ``,
        clanSteamID: this.m_clanSteamID,
      })
    );
  }
};
Kv = D([r], Kv);
var qv = be(Jv);
function Jv(e) {
  let t = b.GetEditModel(),
    n = t.GetEventModel(),
    [r, i] = Z.useState();
  if ((Z.useEffect(() => ad(n, i), [n]), r))
    switch (r) {
      case `clone`:
        return (0, X.jsx)(p, {
          push: !0,
          to: y.Edit(e.match.params.appid_or_vanity_str, ``),
        });
      case `edit`:
        return (0, X.jsx)(wi, { eventModel: n, route: T.k_eCommunityEdit });
      case `view`:
        return n.BIsVisibleEvent()
          ? (0, X.jsx)(wi, { eventModel: n, route: T.k_eView })
          : (0, X.jsx)(wi, { eventModel: n, route: T.k_eCommunityPreview });
      default:
        console.log(`EventCloneLandingInternal - Unexpected Case - ` + r);
    }
  return (0, X.jsx)(Si, {
    eventModel: t.GetEventModel(),
    route: T.k_eCommunityAdminPage,
    children: L(`#EventDisplay_ReturnToDashboard`),
  });
}
function Yv(e) {
  let [t, n] = Z.useState(!0),
    r = Dr(R.LANGUAGE);
  return (
    Z.useEffect(() => {
      (ra.Init(Po(new Fs(R.WEBAPI_BASE_URL))), Gr.Init(), b.Init(), n(!1));
    }, []),
    t || !r
      ? (0, X.jsx)(C, {
          position: `center`,
          size: `medium`,
          string: L(`#Loading`),
        })
      : (0, X.jsx)(J, {
          children: (0, X.jsx)(Oi, {
            dictionary: Iv(),
            children: (0, X.jsxs)(xi.Provider, {
              value: { bCanUseLink: !0 },
              children: [
                (0, X.jsx)(Qt, {}),
                (0, X.jsxs)(d, {
                  children: [
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.Home(`:appid_or_vanity_str`),
                      component: Fd,
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.List(`:appid_or_vanity_str`),
                      component: Fd,
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.Create(`:appid_or_vanity_str`),
                      component: ge,
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.Category(`:appid_or_vanity_str`, `:gid(\\d+)?`),
                      render: (e) =>
                        (0, Z.createElement)(ge, {
                          ...e,
                          key: e.match.params.gid,
                        }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.EditRedirectToCategory(`:appid_or_vanity_str`),
                      render: (e) => (0, X.jsx)(yv, { ...e }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.Edit(`:appid_or_vanity_str`, `:gid(\\d+)?`),
                      render: (e) =>
                        (0, Z.createElement)(vv, {
                          ...e,
                          key: e.match.params.gid,
                        }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.Clone(`:appid_or_vanity_str`, `:gid(\\d+)?`),
                      render: (e) =>
                        (0, Z.createElement)(qv, {
                          ...e,
                          key: e.match.params.gid,
                        }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.Publish(`:appid_or_vanity_str`, `:gid(\\d+)?`),
                      render: (e) =>
                        (0, Z.createElement)(vv, {
                          ...e,
                          key: e.match.params.gid,
                          bInitiatePublishDialog: !0,
                        }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.PreviewSale(
                        `:appid_or_vanity_str`,
                        `:gid(\\d+)?`,
                      ),
                      render: (e) =>
                        (0, Z.createElement)(Ld, {
                          ...e,
                          key: e.match.params.gid,
                          mode: `previewsale`,
                        }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.Preview(`:appid_or_vanity_str`, `:gid(\\d+)?`),
                      render: (e) =>
                        (0, Z.createElement)(Ld, {
                          ...e,
                          key: e.match.params.gid,
                          mode: `preview`,
                        }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.View(`:appid_or_vanity_str`, `:gid(\\d+)`),
                      render: (e) =>
                        (0, Z.createElement)(Ld, {
                          ...e,
                          key: e.match.params.gid,
                          mode: `view`,
                        }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.Migrate(
                        `:appid_or_vanity_str`,
                        `:oldAnnouncementGID(\\d+)`,
                      ),
                      render: (e) =>
                        (0, Z.createElement)(Kv, {
                          ...e,
                          key: e.match.params.oldAnnouncementGID,
                        }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.MigrateCategory(
                        `:appid_or_vanity_str`,
                        `:oldAnnouncementGID(\\d+)`,
                      ),
                      render: (e) =>
                        (0, Z.createElement)(Re, {
                          ...e,
                          key: e.match.params.oldAnnouncementGID,
                        }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.ViewOldAnnouncement(
                        `:appid_or_vanity_str`,
                        `:oldAnnouncementGID(\\d+)`,
                      ),
                      render: (e) =>
                        (0, Z.createElement)(He, {
                          ...e,
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !1,
                        }),
                    }),
                    (0, X.jsx)(_, {
                      exact: !0,
                      path: y.PreviewOldAnnouncement(
                        `:appid_or_vanity_str`,
                        `:oldAnnouncementGID(\\d+)`,
                      ),
                      render: (e) =>
                        (0, Z.createElement)(He, {
                          ...e,
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !0,
                        }),
                    }),
                    (0, X.jsx)(_, { component: xo }),
                  ],
                }),
              ],
            }),
          }),
        })
  );
}
export { Yv as default };
