/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./cartmodal.js",
      "./rolldown-runtime.js",
      "./libraries.js",
      "./storelink.js",
      "./main.js",
      "../../../css/applications/store/main.css",
      "../../../css/applications/store/storelink.css",
      "./saletags.js",
      "./usedataloader.client.js",
      "./claninfo.js",
      "./storeurl.js",
      "./modals.js",
      "./ostype.js",
      "../../../css/applications/store/ostype.css",
      "./microtrailerdisplay.js",
      "../../../css/applications/store/microtrailerdisplay.css",
      "./ajaxhooks.js",
      "./historyutils.js",
      "./throbber.js",
      "../../../css/applications/store/throbber.css",
      "./stringutils.js",
      "./linkfilter.js",
      "./saletechredirectsignin.js",
      "./partnereventshared.module.js",
      "../../../css/applications/store/partnereventshared.css",
      "./personautils.js",
      "./csstransitionwrapper.js",
      "../../../css/applications/store/csstransitionwrapper.css",
      "./remotedownloadhooks.js",
      "./steammessages_clan_pb.js",
      "../../../css/applications/store/saletags.css",
      "./simplemodaldialog.js",
      "../../../css/applications/store/simplemodaldialog.css",
      "./platforms.js",
      "../../../css/applications/store/platforms.css",
      "./packagepricewidget.js",
      "./errors.js",
      "./playerlinkdetailsdataloader.js",
      "../../../css/applications/store/packagepricewidget.css",
      "./privateapps.js",
      "./steammessages_friendslist_pb.js",
      "./getprofileurl.js",
      "../../../css/applications/store/cartmodal.css",
      "./seasonpassdisplay.js",
      "./heading.js",
      "../../../css/applications/store/heading.css",
      "./textlink.js",
      "../../../css/applications/store/textlink.css",
      "./storepagebbcoderenderer.js",
      "./clanimagemodels.js",
      "./image.js",
      "./usehotkeys.js",
      "../../../css/applications/store/image.css",
      "./basicbbcodeparser.js",
      "./youtubeplayer.js",
      "../../../css/applications/store/basicbbcodeparser.css",
      "../../../css/applications/store/storepagebbcoderenderer.css",
      "./storeitemhooks.js",
      "./partnereventstore.js",
      "./partnerevent.js",
      "./eventtime.js",
      "./steammessages_storesales_pb.js",
      "./appinfo.js",
      "./partnereventutils.js",
      "./eventinfinitescrollmodal.js",
      "./apppartnereventspage.js",
      "./multisourceimage.js",
      "./meetsteamclanid.js",
      "./eventlink.js",
      "./eventtimeoverridecontext.js",
      "./eventdevfeaturestore.js",
      "./moment.js",
      "./moment-timezone.js",
      "./simplesuccesserror.js",
      "../../../css/applications/store/simplesuccesserror.css",
      "./loyaltyrewarddefs.js",
      "./salestoreitemutils.js",
      "../../../css/applications/store/salestoreitemutils.css",
      "./salepreviewwidgets.js",
      "./storetypes.js",
      "./saleghostsections.js",
      "../../../css/applications/store/saleghostsections.css",
      "../../../css/applications/store/salepreviewwidgets.css",
      "./carouselarrows.js",
      "./lazyrenderchildren.js",
      "../../../css/applications/store/carouselarrows.css",
      "./eventbbcodeparser.module.js",
      "../../../css/applications/store/eventbbcodeparser.css",
      "./presenterpopup.js",
      "../../../css/applications/store/presenterpopup.css",
      "./eventimageurlwithfallback.js",
      "./creatorhomegamelock.js",
      "./trailertitlebar.js",
      "./dashplayer.js",
      "../../../css/applications/store/trailertitlebar.css",
      "./salehilightplayerembed.js",
      "../../../css/applications/store/salehilightplayerembed.css",
      "./steammessages_loyalty_rewards_pb.js",
      "../../../css/applications/store/loyaltyrewarddefs.css",
      "./creatorhomestore.js",
      "./partnereventeditorcontext.js",
      "./storegamehover.js",
      "./steammessages_quest_pb.js",
      "./saleclaim.js",
      "./steammessages_salerewards_pb.js",
      "./steammessages_experiments_pb.js",
      "./discussionwidget.module.js",
      "../../../css/applications/store/discussionwidget.css",
      "./socialmediadisplay.js",
      "../../../css/applications/store/socialmediadisplay2.css",
      "./salewishlistbutton.js",
      "./display.js",
      "./eventadminpanel.js",
      "./salesectionfactory.js",
      "./salecapsuleutils.js",
      "./storedisplayutils.js",
      "./linkwidget.js",
      "./saleitemlibrarywidget.js",
      "./seemorebutton.js",
      "../../../css/applications/store/seemorebutton.css",
      "./bottomrow.js",
      "../../../css/applications/store/bottomrow.css",
      "./crosspromotesalelayouts.module.js",
      "../../../css/applications/store/crosspromotesalelayouts.css",
      "../../../css/applications/store/linkwidget.css",
      "./clanimage.js",
      "./slider.js",
      "../../../css/applications/store/slider.css",
      "./playtime.js",
      "./contentdescriptors.js",
      "./trailerdefines.js",
      "./trailerstate.js",
      "../../../css/applications/store/trailerdefines.css",
      "./steammessages_user_reviews_pb.js",
      "./unstyledbutton.js",
      "../../../css/applications/store/unstyledbutton.css",
      "./reviewajax.js",
      "./twitter_large.js",
      "./discoveryqueuestore.js",
      "./preloaddiscoveryqueue.js",
      "./clanstore.js",
      "./personalcalendarstore.js",
      "./assetutils.js",
      "./broadcastwatchstore.js",
      "./salebanner.js",
      "../../../css/applications/store/salebanner.css",
      "./broadcast_embeddable.js",
      "./basicpartnereventrender.js",
      "../../../css/applications/store/basicpartnereventrender.css",
      "./discoveryqueuewidget.js",
      "./storequery.js",
      "../../../css/applications/store/discoveryqueuewidget.css",
      "./videoautopauseonblur.js",
      "./curatorliststore.js",
      "./summersale2021store.js",
      "../../../css/applications/store/salesectionfactory2.css",
      "./event.js",
      "./eventinitialization.js",
      "./appinfostore.js",
      "./giveawaystore.js",
      "../../../css/applications/store/eventinitialization.css",
      "./breadcrumbs.js",
      "../../../css/applications/store/breadcrumbs.css",
      "../../../css/applications/store/event.css",
      "../../../css/applications/store/display.css",
      "./expanderbutton.js",
      "../../../css/applications/store/expanderbutton.css",
      "./meetsteamregistrationhooks.js",
      "../../../css/applications/store/apppartnereventspage.css",
      "../../../css/applications/store/seasonpassdisplay.css",
      "./storesalecrosspromo.js",
      "./crosspromotesalelayouts.js",
      "./fakesalehelper.js",
      "../../../css/applications/store/storesalecrosspromo.css",
      "./discoveryqueueappwidget.js",
      "../../../css/applications/store/discoveryqueueappwidget.css",
      "./broadcast_embeddable2.js",
      "./textfilterstore.js",
      "./emoticonbutton.js",
      "./alternate_icons.js",
      "../../../css/applications/store/emoticonbutton.css",
      "./reddit_large.js",
      "./partnereventslogin.js",
      "./steammessages_twofactor_pb.js",
      "./logindialog.js",
      "../../../css/applications/store/logindialog.css",
      "./broadcastplayer.js",
      "./linkregionbox.js",
      "../../../css/applications/store/linkregionbox.css",
      "../../../css/applications/store/broadcastplayer.css",
      "../../../css/applications/store/broadcast_embeddable.css",
      "./accessibilityfeaturedisplay.js",
      "../../../css/applications/store/accessibilityfeaturedisplay.css",
    ]),
) => i.map((i) => d[i]);

import { o as e } from "./rolldown-runtime.js";
import {
  At as t,
  H as n,
  Lt as r,
  N as i,
  Pt as a,
  dt as o,
  ft as s,
  kt as c,
  lt as l,
  ot as u,
  st as d,
  tt as f,
  u as p,
} from "./libraries.js";
import { t as m } from "./errors.js";
import {
  B as h,
  H as g,
  I as _,
  L as v,
  R as y,
  Tt as ee,
  U as te,
  V as ne,
  W as re,
  dt as ie,
  ft as ae,
  ht as oe,
  lt as se,
  pt as ce,
  q as le,
  ut as ue,
  z as de,
} from "./salesectionfactory.js";
import { R as fe, V as pe, z as me } from "./storelink.js";
import {
  $ as he,
  Ar as ge,
  Ct as _e,
  F as ve,
  Ft as ye,
  G as be,
  J as xe,
  K as Se,
  Mt as Ce,
  Nt as we,
  Sr as Te,
  V as Ee,
  _t as De,
  a as Oe,
  at as ke,
  bt as Ae,
  et as je,
  gt as Me,
  it as Ne,
  jr as Pe,
  jt as Fe,
  k as Ie,
  lt as Le,
  ot as Re,
  q as ze,
  st as Be,
  ut as Ve,
  vt as He,
  wr as Ue,
  yt as We,
} from "./saletags.js";
import { u as Ge } from "./claninfo.js";
import { Dt as Ke, t as qe } from "./apppartnereventspage.js";
import { n as Je, t as Ye } from "./storeurl.js";
import { n as Xe, r as Ze, t as Qe } from "./eventlink.js";
import { n as $e, t as et } from "./simplemodaldialog.js";
import { n as tt } from "./openindesktopclient.js";
import { t as nt } from "./heading.js";
import { n as rt, t as b } from "./textlink.js";
import { n as it, r as at, t as ot } from "./storepagebbcoderenderer.js";
import { n as st, t as ct } from "./hoversource.js";
import { n as lt } from "./enums_epersonastateflag.js";
import "./appinfo.js";
import { r as ut, t as dt } from "./modals.js";
import { t as ft } from "./eventinitialization.js";
import { r as pt } from "./saletechredirectsignin.js";
import { r as mt } from "./eventdevfeaturestore.js";
import { H as ht, V as gt, z as _t } from "./basicbbcodeparser.js";
import { u as vt } from "./carouselarrows.js";
import {
  a as yt,
  c as bt,
  l as xt,
  o as St,
  s as Ct,
} from "./packagepricewidget.js";
import {
  a as wt,
  c as Tt,
  d as Et,
  f as Dt,
  g as Ot,
  h as kt,
  i as At,
  l as jt,
  m as Mt,
  o as Nt,
  p as Pt,
  r as Ft,
  s as It,
  u as Lt,
} from "./trailertitlebar.js";
import { n as Rt } from "./lazyrenderchildren.js";
import { n as zt, t as Bt } from "./seemorebutton.js";
import { u as Vt } from "./creatorhomestore.js";
import { n as Ht } from "./personautils.js";
import { a as Ut } from "./storeitemhooks.js";
import { i as Wt, o as Gt } from "./socialmediadisplay.js";
import { r as Kt } from "./storedisplayutils.js";
import { n as qt } from "./steammessages_user_reviews_pb.js";
import { t as Jt } from "./getprofileurl.js";
import { n as Yt } from "./salewishlistbutton.js";
import {
  a as Xt,
  i as Zt,
  o as Qt,
  r as $t,
  s as en,
  t as tn,
} from "./partnereventwebrowembed.module.js";
import { n as nn, s as rn } from "./partnereventstore.js";
import {
  $c as an,
  $i as on,
  $r as sn,
  $x as x,
  Ar as cn,
  Av as S,
  Bi as ln,
  Bl as un,
  Bv as dn,
  Cb as fn,
  Ci as pn,
  Cl as mn,
  Ct as hn,
  Cv as gn,
  Db as _n,
  Dr as vn,
  Dv as yn,
  Ea as bn,
  Eb as xn,
  En as Sn,
  Ev as Cn,
  Ex as wn,
  Fi as Tn,
  Fl as En,
  Gb as C,
  Hb as w,
  Hi as Dn,
  Hu as On,
  Hv as kn,
  Hy as An,
  Il as jn,
  Iv as Mn,
  Ix as Nn,
  Iy as Pn,
  J as Fn,
  Jb as In,
  Ji as Ln,
  Jv as Rn,
  Ki as zn,
  Kn as Bn,
  L as Vn,
  Lr as Hn,
  Lv as Un,
  Mb as Wn,
  Mv as Gn,
  Na as Kn,
  Ni as qn,
  Nl as Jn,
  Nu as Yn,
  Nv as Xn,
  Oa as Zn,
  Oo as Qn,
  Ot as $n,
  Qr as er,
  Qu as tr,
  Qx as T,
  Rr as nr,
  Rv as rr,
  S as ir,
  Sb as E,
  Sc as D,
  Si as ar,
  Su as or,
  Ta as sr,
  Tc as cr,
  Tr as lr,
  Ui as ur,
  Ur as dr,
  Uu as fr,
  Uv as pr,
  Uy as O,
  Vl as mr,
  Vo as hr,
  Vs as gr,
  Vv as _r,
  Wi as vr,
  Wu as yr,
  Wy as br,
  Xi as xr,
  Xr as Sr,
  Xx as k,
  Yb as Cr,
  Yc as wr,
  Yr as Tr,
  Ys as Er,
  Yx as A,
  Zi as Dr,
  Zl as Or,
  Zr as kr,
  Zs as Ar,
  Zx as j,
  _ as jr,
  _c as Mr,
  _l as Nr,
  a as Pr,
  ac as Fr,
  ad as Ir,
  al as Lr,
  av as Rr,
  b as zr,
  bS as Br,
  bc as Vr,
  bi as Hr,
  c as Ur,
  cd as Wr,
  ci as Gr,
  cl as Kr,
  cy as qr,
  d as Jr,
  da as Yr,
  dd as Xr,
  dv as Zr,
  eS as M,
  ed as Qr,
  el as $r,
  fd as ei,
  fv as ti,
  g as ni,
  ga as ri,
  gc as ii,
  gd as ai,
  gi as oi,
  gn as si,
  ha as N,
  hc as ci,
  ht as li,
  hx as P,
  ia as ui,
  id as di,
  il as fi,
  iy as pi,
  jl as mi,
  jv as hi,
  jx as gi,
  ka as _i,
  kc as F,
  ki as vi,
  kl as yi,
  kr as bi,
  kt as xi,
  kv as I,
  l as Si,
  lS as Ci,
  la as L,
  li as wi,
  ll as Ti,
  mS as Ei,
  ma as R,
  mx as Di,
  nS as z,
  nd as Oi,
  nl as B,
  ns as ki,
  oc as Ai,
  od as ji,
  oi as Mi,
  oo as Ni,
  ov as Pi,
  pa as Fi,
  pc as Ii,
  pi as Li,
  pl as Ri,
  pn as zi,
  qb as Bi,
  qi as Vi,
  ql as Hi,
  qx as Ui,
  ra as Wi,
  rd as Gi,
  rl as Ki,
  rx as qi,
  s as Ji,
  sS as Yi,
  sa as V,
  si as Xi,
  sl as Zi,
  sn as Qi,
  sy as $i,
  tS as H,
  ta as ea,
  td as ta,
  ts as na,
  tx as ra,
  uS as ia,
  ua as aa,
  ub as oa,
  us as sa,
  ut as ca,
  vl as la,
  vn as ua,
  vt as da,
  wa as fa,
  wc as pa,
  wl as ma,
  wr as ha,
  wt as ga,
  wv as U,
  wy as _a,
  xb as W,
  xi as va,
  xo as ya,
  y as G,
  yS as ba,
  yl as K,
  yn as xa,
  zb as Sa,
  zl as Ca,
  zv as wa,
} from "./main.js";
import { GameRatingBlock as Ta, t as Ea } from "./gameratingblock.js";
import { n as Da } from "./clanstore.js";
import { t as Oa } from "./eventinfinitescrollmodal.js";
import { f as ka } from "./steamnotifications.js";
import { n as Aa, t as ja } from "./accessibilityfeaturedisplay.js";
import { a as Ma, i as Na, r as Pa, t as Fa } from "./apprelevancestore.js";
import Ia, { n as La, t as Ra } from "./storeitemscarousel.js";
import { r as za } from "./basicpartnereventrender.js";
import { i as Ba, n as Va } from "./playteststore.js";
import { i as Ha, r as Ua, t as Wa } from "./achievementiconbase.js";
import { t as Ga } from "./communityitemstore.js";
var q = e(r(), 1);
function Ka(e) {
  let t = o();
  return (
    q.useEffect(() => {
      let { rgPayloads: n, markReady: r } = e;
      for (let e of n || [])
        for (let n of e.rgStoreItems || []) Pi(t, n, e.dataRequestStoreItems);
      r();
    }, [t, e]),
    null
  );
}
function qa() {
  if (w.EREALM == Br.k_ESteamRealmChina) return;
  let e =
      new URLSearchParams(window.location.search).get(`curator_clanid`) ?? ``,
    t = /^\d+$/.test(e) ? Number(e) : 0;
  return t > 0 && t <= 4294967295 ? t : void 0;
}
var Ja = `WKhffzvaq2A-`;
function Ya() {
  return Ja;
}
var J = s(),
  Xa = (e) => (0, J.jsx)(Yr, { icon: !0, ...e }),
  Y = e(i(), 1);
function Za(e) {
  let {
      rows: t = 3,
      sizing: n = `content`,
      resize: r = `none`,
      ref: i,
      value: a,
      onTextChange: o,
      onChange: s,
      disabled: c,
      variant: l,
      ...u
    } = e,
    d = (e) => {
      c || (o(e.target.value), s && s(e));
    },
    f = Fi(`TextArea`, l),
    p = Sa(),
    [m, h] = $a(t),
    g = { resize: r, fieldSizing: n, minHeight: m, maxHeight: h },
    _ = Wi({
      ...u,
      className: (0, Y.default)(ri(), Ya()),
      style: g,
      cursor: `text`,
      disabled: c,
      variant: f,
    });
  return (0, J.jsx)(p ? Qa : `textarea`, {
    ref: i,
    ..._,
    value: a || ``,
    onChange: d,
    readOnly: c,
    "aria-disabled": c,
  });
}
function Qa(e) {
  return (0, J.jsx)(Zi, { noFocusRing: !0, ...e });
}
function $a(e) {
  let t = typeof e == `number` ? e : e.min,
    n = typeof e == `number` ? void 0 : e.max;
  return [
    typeof t == `number` ? `calc( ${t}lh + 2 * var(--spacing-1) )` : void 0,
    typeof n == `number` ? `calc( ${n}lh + 2 * var(--spacing-1) )` : void 0,
  ];
}
var eo = `wlnXL0IxOx4-`,
  to = `_3oxp0mBJHow-`,
  no = `_4dYEoJ-5Bkg-`;
function ro(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = yn(t),
    { data: i } = I(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return !a?.hide_discount_pct_for_compliance || a.discount_pct <= 0
    ? null
    : (0, J.jsx)(`table`, {
        className: eo,
        children: (0, J.jsxs)(`tbody`, {
          children: [
            (0, J.jsxs)(`tr`, {
              children: [
                (0, J.jsx)(`th`, {
                  children: pt.Localize(`#PriceGrid_NormalPrice`),
                }),
                (0, J.jsx)(`th`, {
                  children: pt.Localize(`#PriceGrid_RecentPrice`),
                }),
                (0, J.jsx)(`th`, {
                  children: pt.Localize(`#PriceGrid_CurrentPrice`),
                }),
              ],
            }),
            (0, J.jsxs)(`tr`, {
              children: [
                (0, J.jsx)(`td`, {
                  className: void 0,
                  children: a.formatted_original_price,
                }),
                (0, J.jsx)(`td`, {
                  className: to,
                  children: a.formatted_lowest_recent_price,
                }),
                (0, J.jsx)(`td`, {
                  className: no,
                  children: a.formatted_final_price,
                }),
              ],
            }),
          ],
        }),
      });
}
var io = 500;
function ao(e) {
  let {
      strClassName: t,
      rgEvents: n,
      fnEventShowModal: r,
      elPostRowElement: i,
      bViewAllShowInfiniteScroll: a,
      nSummaryMaxLength: o,
    } = e,
    s = sr(),
    c = Zn(),
    l = Sa(),
    u = 2,
    d = 501;
  return (
    c.ownerWindow.window
      ? (d = c.ownerWindow.window.innerWidth)
      : s.viewportWidth && (d = s.viewportWidth.value),
    (u = d <= io ? 1 : 2),
    n && n.length == 0 && !i
      ? null
      : (0, J.jsxs)(F, {
          className: t,
          "flow-children": `row`,
          children: [
            !!n &&
              n.length > 0 &&
              (0, J.jsx)(`div`, {
                className: `OdUWUqw0tkM-`,
                children: (0, J.jsxs)(_i, {
                  children: [
                    (0, J.jsxs)(`h2`, {
                      children: [
                        W.Localize(`#EventBrowse_RecentEvents`),
                        !l &&
                          !!n &&
                          (0, J.jsx)(J.Fragment, {
                            children:
                              a && r
                                ? (0, J.jsx)(fi, {
                                    className: `d-5nAi7tljQ-`,
                                    onClick: () => r(n[0]),
                                    children: W.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  })
                                : (0, J.jsx)(Ze, {
                                    eventModel: n[0],
                                    route: Xe.k_eViewWebSiteHub,
                                    className: `d-5nAi7tljQ-`,
                                    children: W.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  }),
                          }),
                      ],
                    }),
                    (0, J.jsx)(`div`, {
                      className: `YZMD3BYfIGw-`,
                      children: n.slice(0, u).map((e) => {
                        let t =
                          r && !Qe()
                            ? (t) => {
                                r(e), t.stopPropagation(), t.preventDefault();
                              }
                            : void 0;
                        return (0, J.jsx)(
                          _,
                          { event: e, onClick: t, nSummaryMaxLength: o },
                          e.GID,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            i,
          ],
        })
  );
}
function oo(e) {
  return (0, J.jsxs)(`div`, {
    className: Zt,
    children: [
      (0, J.jsx)(`div`, {
        className: Xt,
        children: (0, J.jsx)(Ai, { role: `presentation` }),
      }),
      (0, J.jsx)(fi, {
        className: $t,
        onClick: e.onClick,
        children: W.Localize(
          `#EventBrowse_LatestUpdateTime_Button`,
          oa(e.nUpdateTime),
        ),
      }),
    ],
  });
}
function so(e) {
  let { nUpdateTime: t, announcementGID: n, onClick: r } = e,
    i = n ? nn.GetClanEventFromAnnouncementGID(n) : null,
    a = _;
  return (0, J.jsxs)(`div`, {
    className: tn,
    children: [
      (0, J.jsxs)(`h2`, {
        children: [
          O(`#EventBrowse_LastUpdateDate`, oa(t)),
          (0, J.jsx)(fi, {
            className: Qt,
            onClick: (e) => {
              r?.(), e.stopPropagation(), e.preventDefault();
            },
            children: O(`#EventBrowse_MoreEventsBtn`),
          }),
        ],
      }),
      !!i &&
        (0, J.jsx)(F, {
          className: `YZMD3BYfIGw-`,
          "flow-children": `column`,
          navEntryPreferPosition: Ri.PREFERRED_CHILD,
          children: (0, J.jsx)(a, {
            event: i,
            onClick: (e) => {
              r?.(), e.stopPropagation(), e.preventDefault();
            },
          }),
        }),
    ],
  });
}
function co(e) {
  let {
      trackingLocation: t,
      strClassName: n,
      bViewAllShowInfiniteScroll: r,
    } = e,
    [i, a, o] = mn(),
    [s, c] = (0, q.useState)(null),
    [l, u] = (0, q.useState)(void 0),
    d = Vn(),
    f = (0, q.useCallback)(() => {
      c(null), o();
    }, [o]),
    p = (0, q.useCallback)(
      (e) => {
        t &&
          e &&
          e.BIsPartnerEvent() &&
          d.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
          d.Flush(),
          c(e),
          u(void 0),
          a();
      },
      [t, d, a],
    ),
    { last_update_event: m, rgEvents: h } = lo({ ...e, fnEventShowModal: p }),
    g = (0, q.useCallback)(() => {
      let { event_gid: e, announcement_gid: n, clan_account_id: r } = m;
      t && e && d.MarkEventRead(e, r, t) && d.Flush(), u(n), c(null), a();
    }, [m, a, d, t]);
  (0, q.useEffect)(
    () => (
      (window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
        u(t), c(null), u(t), a();
      }),
      () => {
        window.fnPartnerEvent_ShowInfiniteScroll &&
          delete window.fnPartnerEvent_ShowInfiniteScroll;
      }
    ),
    [a],
  );
  let _ = Sa(),
    v = !!m && !!m.rtime,
    y =
      v && m.announcement_gid && (!h || h.length == 0)
        ? m.announcement_gid
        : void 0,
    ee;
  return (
    v && y
      ? (ee = (0, J.jsx)(so, {
          nUpdateTime: m.rtime,
          announcementGID: y,
          onClick: g,
        }))
      : v &&
        !y &&
        !_ &&
        (ee = (0, J.jsx)(oo, { nUpdateTime: m.rtime, onClick: g })),
    (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(zi, {
          active: i,
          children: (0, J.jsx)(fo, {
            ...e,
            announcementGID: l || s?.AnnouncementGID,
            eventModel: s,
            closeModal: f,
          }),
        }),
        (0, J.jsx)(ao, {
          elPostRowElement: ee,
          rgEvents: h,
          fnEventShowModal: p,
          bViewAllShowInfiniteScroll: r,
          strClassName: n,
        }),
      ],
    })
  );
}
function lo(e) {
  let {
      appid: t,
      event_customization: n,
      partnerEventStore: r,
      trackingLocation: i,
      fnEventShowModal: a,
    } = e,
    [o, s] = (0, q.useState)(null),
    [c, l] = (0, q.useState)(null),
    u = Vn(),
    [d] = ee(`emgid`, void 0),
    [f] = ee(`announce_gid`, void 0);
  return (
    (0, q.useEffect)(() => {
      let e = rn(`EventWebRowEmbed`),
        a = !1;
      if (uo(e)) {
        (a = e.bPreLoaded), s(e.last_update_event);
        let t = [];
        e.announcementGIDList.forEach((e) => {
          let n = nn.GetClanEventFromAnnouncementGID(e);
          n && t.push(n);
        }),
          l(t);
      }
      a ||
        (async () => {
          let e = await r.LoadAdjacentPartnerEvents(void 0, void 0, t, 0, 2, n);
          l(e),
            i &&
              e &&
              e.length > 0 &&
              (e
                .filter((e) => e.BIsPartnerEvent())
                .forEach((e) =>
                  u.MarkEventShown(e.GID, e.clanSteamID.GetAccountID(), i),
                ),
              u.Flush());
        })();
    }, [t, n, a, r, u, i]),
    (0, q.useEffect)(() => {
      if (c != null && (d || f)) {
        let e = c.find((e) => e.GID === d || e.AnnouncementGID == f);
        e
          ? a(e)
          : (async () => {
              let e = d
                ? await r.LoadPartnerEventFromClanEventGID(t, d, 0)
                : await r.LoadPartnerEventFromAnnoucementGID(t, f, 0);
              e && l([...c, e]);
            })();
      }
    }, [d, f, c, a, l, r, t]),
    { last_update_event: o, rgEvents: c }
  );
}
function uo(e) {
  let t = e;
  return t && typeof t == `object`
    ? t.bPreLoaded !== void 0 &&
        typeof t.bPreLoaded == `boolean` &&
        Array.isArray(t.announcementGIDList)
    : !1;
}
function fo(e) {
  let {
      appid: t,
      partnerEventStore: n,
      trackingLocation: r,
      announcementGID: i,
      eventModel: a,
      closeModal: o,
    } = e,
    s = Sa();
  return (0, J.jsx)(Oa, {
    className: s ? void 0 : en,
    eventClassName: void 0,
    appid: t,
    trackingLocation: r,
    announcementGID: i,
    partnerEventStore: n,
    eventModel: a ?? void 0,
    closeModal: o,
  });
}
function po(e) {
  let t = mt(),
    n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
    r = Math.floor(n.getTime() / 1e3),
    { appid: i } = e;
  return (0, J.jsx)(co, {
    appid: i,
    partnerEventStore: za.Get(),
    event_customization: {
      rtime_oldestevent: r,
      exclude_tags: [`patchnotes`, `hide_store`, `mod_hide_store`],
      exclude_event_types: [34],
    },
    strClassName: `early_access_announcements`,
    trackingLocation: 3,
  });
}
var mo = e(f()),
  ho = `lZh7v-2Q4qs-`,
  go = `RkWauN7-BcQ-`,
  _o = `nfL29TIJe7s-`,
  vo = `LLPOJJr5gLY-`,
  yo = `iEN-UBbNelE-`,
  bo = `s06MbIUoENc-`;
function xo(e) {
  let t = (0, q.useRef)(null),
    n = Pr(),
    r = Number(e.appID),
    i = pe(r),
    { data: a } = I(i),
    [o, s] = (0, q.useState)(null);
  (0, q.useEffect)(
    () => (
      (async () => {
        let e = mo.default.CancelToken.source();
        t.current = e.cancel;
        let n = await nn.LoadAdjacentPartnerEvents(void 0, void 0, r, 0, 1, {
          exclude_tags: [`steam_game_festival_artist_statement`],
          require_tags: [`steam_game_festival_broadcast`],
        });
        e.token.reason || (n.length > 0 && s(n[0]));
      })(),
      () => {
        t.current && t.current(`DemoAndQuickPitch: Unmounting`);
      }
    ),
    [r],
  );
  let [c, l, u] = mn(),
    d = o ? o.GetNameWithFallback(Ei(qi.LANGUAGE)) : null,
    f = !o || o.BHasEventEnded();
  return !a ||
    !a.related_items?.demo_appid ||
    a.related_items?.demo_appid.length == 0
    ? null
    : (0, J.jsxs)(J.Fragment, {
        children: [
          (0, J.jsxs)(`div`, {
            className: ho,
            children: [
              (0, J.jsxs)(`div`, {
                className: go,
                children: [
                  (0, J.jsxs)(`div`, {
                    className: _o,
                    children: [
                      (0, J.jsx)(`div`, {
                        className: vo,
                        children: O(`#Sale_DownloadDemo`, a.name || ``),
                      }),
                      (0, J.jsx)(he, { id: i }),
                    ],
                  }),
                  (0, J.jsx)(ve, { id: i, className: yo }),
                ],
              }),
              (0, J.jsx)(`div`, {
                className: bo,
                children:
                  o &&
                  d &&
                  (0, J.jsxs)(`div`, {
                    className: `Wf88S2KTI24-`,
                    children: [
                      f
                        ? (0, J.jsx)(`h1`, {
                            children: O(`#EventBrowse_RecentUpdates`),
                          })
                        : (0, J.jsx)(`h1`, {
                            children: O(`#EventCalendar_TuneIn`),
                          }),
                      (0, J.jsxs)(`div`, {
                        className: `Q7pm2wFjHcs-`,
                        onClick: l,
                        children: [
                          (0, J.jsx)(`div`, {
                            className: `_0uw4OZ-1NFo-`,
                            children: d,
                          }),
                          (0, J.jsx)(`div`, {
                            className: `-iPxm-yQn7E-`,
                            children: (0, J.jsx)(Ke, {
                              dateAndTime: o.GetStartTimeAndDateUnixSeconds(),
                              bSingleLine: !0,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          }),
          (0, J.jsx)(zi, {
            active: c,
            children: (0, J.jsx)(qe, {
              initialEvent: o,
              bShowOnlyInitialEvent: !1,
              partnerEventStore: nn,
              emoticonStore: n,
              showAppHeader: !0,
              closeModal: u,
            }),
          }),
        ],
      });
}
var So = `e01m0n3aRww-`,
  Co = `ei2O1OfjpJw-`,
  wo = `Qg-JVWJh-m8-`,
  To = `knekjG8ZpGY-`,
  Eo = `VmovKDLtYwA-`,
  Do = `VtVy-zpXsyA-`,
  Oo = `NX10JMIib5g-`;
new ka();
var ko = (function (e) {
  return (
    (e[(e.EPurchaseNoticeType_ControllerRequired = 0)] =
      `EPurchaseNoticeType_ControllerRequired`),
    (e[(e.EPurchaseNoticeType_VRRequired = 1)] =
      `EPurchaseNoticeType_VRRequired`),
    (e[(e.EPurchaseNoticeType_VRSupported = 2)] =
      `EPurchaseNoticeType_VRSupported`),
    e
  );
})({});
function Ao(e) {
  let { appid: t, type: n } = e;
  switch (n) {
    case 0:
      return (0, J.jsx)(jo, { appid: t, controllerType: 32 });
    case 1:
      return (0, J.jsx)(Mo, {});
    default:
      return (0, J.jsx)(No, {});
  }
}
function jo(e) {
  return (0, J.jsxs)(`div`, {
    className: D(So),
    children: [
      (0, J.jsx)(`div`, {
        className: D(wo),
        children: (0, J.jsx)(er, { type: `xbox`, className: D(Eo, Do) }),
      }),
      (0, J.jsx)(`div`, {
        className: D(Co),
        children: O(`#PurchaseNotice_ControllerRequired`),
      }),
    ],
  });
}
function Mo(e) {
  return (0, J.jsxs)(`div`, {
    className: D(So),
    children: [
      (0, J.jsx)(`div`, {
        className: D(wo),
        children: (0, J.jsx)(ar, { className: D(Eo, Oo) }),
      }),
      (0, J.jsx)(`div`, {
        className: D(Co),
        children: O(`#PurchaseNotice_VRRequired`),
      }),
    ],
  });
}
function No(e) {
  return (0, J.jsxs)(`div`, {
    className: D(So),
    children: [
      (0, J.jsx)(`div`, {
        className: D(wo, To),
        children: (0, J.jsx)(pn, { className: D(Eo, To) }),
      }),
      (0, J.jsx)(`div`, {
        className: D(Co),
        children: O(`#PurchaseNotice_VRSupported`),
      }),
    ],
  });
}
var Po = (function (e) {
  return (
    (e[(e.k_CreatorHomeNone = 0)] = `k_CreatorHomeNone`),
    (e[(e.k_CreatorHomeAll = -1)] = `k_CreatorHomeAll`),
    e
  );
})({});
function Fo(e) {
  let { src: t, className: n, maxWidth: r } = e,
    i = (0, q.useRef)(null),
    a = (0, q.useRef)(null),
    [o, s] = (0, q.useState)(!1);
  return (
    (0, q.useEffect)(() => {
      let e = i.current,
        t = a.current;
      if (!e || !t) return;
      s(!1);
      let n = () => {
        e.naturalWidth &&
          ((t.width = r ? Math.min(e.naturalWidth, r) : e.naturalWidth),
          (t.height = Math.round((t.width * e.naturalHeight) / e.naturalWidth)),
          t.getContext(`2d`)?.drawImage(e, 0, 0, t.width, t.height),
          s(!0));
      };
      return (
        e.complete ? n() : e.addEventListener(`load`, n),
        () => e.removeEventListener(`load`, n)
      );
    }, [t, r]),
    (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(`img`, { ref: i, src: t, alt: ``, className: n, hidden: o }),
        (0, J.jsx)(`canvas`, { ref: a, className: n, hidden: !o }),
      ],
    })
  );
}
var Io = `ldWb6jgZfvY-`,
  Lo = `NKWB31pHc-k-`,
  Ro = `Y2-ks0gaz6E-`,
  zo = `_8ad-y5MwlAM-`,
  Bo = `_86zdotJFKYs-`,
  Vo = `FRI8flteHN0-`,
  Ho = `QSQUGSN7NMg-`,
  Uo = `O69Qt34832M-`,
  Wo = `L1upjLLYkOs-`,
  Go = `jkeKAkBr8lA-`,
  Ko = `BiCc1c0dnlc-`,
  qo = `-Lm9ctFXaxs-`,
  Jo = `XdqYj7xUx4k-`,
  Yo = `D9KI9XMKGTs-`,
  Xo = `_4suFylh-u1Q-`;
function Zo(e) {
  let {
      clanID: t,
      title: n,
      seeAllLink: r,
      appIDs: i,
      rgAppIDToCreatorIDs: a,
      rgAllCreatorClanIDs: o,
      strFeatureFirstAppMsg: s,
      bFullWidth: c,
    } = e,
    l = Ut(i, Kt),
    u = (0, q.useMemo)(() => {
      let e = new Map(Object.entries(a).map(([e, t]) => [Number(e), t]));
      if (l != 1 && t == Po.k_CreatorHomeAll) {
        let t = new Set(o);
        i.forEach((n) => {
          if (!e.has(n)) {
            let r = mr.Get().GetApp(n);
            r &&
              r
                .GetAllCreatorClanIDs()
                ?.some((r) => (t.has(r) ? (e.set(n, r), !0) : !1));
          }
        });
      }
      return e;
    }, [a, l, t, o, i]),
    d = `developer`;
  return i.length > 0
    ? (0, J.jsx)(Qo, {
        creatorHomeType: d,
        clanID: t,
        titleOverride: n,
        seeAllLink: r,
        appIDs: i,
        mapAppIDsToCreatorClanID: u,
        strFeatureFirstAppMsg: s,
        bFullWidth: c,
      })
    : (0, J.jsx)($o, { creatorHomeType: d, clanID: t, bFullWidth: c });
}
function Qo(e) {
  let {
      creatorHomeType: t,
      clanID: n,
      titleOverride: r,
      seeAllLink: i,
      appIDs: a,
      mapAppIDsToCreatorClanID: o,
      strFeatureFirstAppMsg: s,
      bFullWidth: c,
    } = e,
    l = Sa(),
    [u, d] = Da(n),
    { creatorHome: f } = Vt(n),
    p = f?.GetCreatorHomeURL(t),
    [m, h] = q.useState(void 0),
    { bShowSeeMoreHint: g, panelProps: _ } = zt(i),
    v = vt(910);
  if (!f) return;
  let y = !l && v && (s ? m == 1 : m <= 2) && d;
  return (0, J.jsx)(F, {
    className: D(Ro, y ? zo : ``, c && `m6Zi3VVUIok-`),
    navEntryPreferPosition: Ri.PREFERRED_CHILD,
    ..._,
    children: (0, J.jsxs)(_i, {
      children: [
        d?.creator_page_bg_url &&
          (0, J.jsx)(`div`, {
            className: `fyTBoA4Uknk-`,
            children: (0, J.jsx)(Fo, {
              src: d.creator_page_bg_url,
              className: `_2ELZkhGAUq4-`,
            }),
          }),
        (0, J.jsxs)(F, {
          className: Io,
          "flow-children": `row`,
          children: [
            (0, J.jsxs)(`div`, {
              className: Ho,
              children: [
                !!d &&
                  (0, J.jsx)(`div`, {
                    children: (0, J.jsx)(B, {
                      href: p,
                      focusable: p !== i,
                      children: (0, J.jsx)(`img`, {
                        className: `jkeKAkBr8lA-`,
                        src: f.GetAvatarURLFullSize(),
                      }),
                    }),
                  }),
                (0, J.jsx)(`img`, {
                  className: Vo,
                  src: f.GetAvatarURLFullSize(),
                }),
                (0, J.jsx)(`div`, {
                  className: Wo,
                  children: (0, J.jsx)(`a`, {
                    href: p,
                    children: r || f.GetName(),
                  }),
                }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: Uo,
              children: [
                !(y || !d || l) &&
                  (0, J.jsx)(Oe, {
                    className: `gALZJvDHaGE-`,
                    clanAccountID: n,
                  }),
                !l && (0, J.jsx)(La, { url: i }),
                l && (0, J.jsx)(Bt, { label: O(`#StoreApp_SeeAll`), shown: g }),
              ],
            }),
          ],
        }),
        (0, J.jsxs)(F, {
          className: D(Lo, y && `sYo1J58T0-0-`),
          preferredFocus: !0,
          children: [
            (0, J.jsx)(Ra, {
              navKey: `store_page_` + t,
              classes: Bo,
              appIDs: a,
              maxItemCount: y ? m : 4,
              mapAppToCreatorClan: o,
              strFeatureFirstAppMsg: s,
              setNumberVisibleItems: h,
            }),
            y &&
              (0, J.jsx)(`div`, {
                className: `-XvC9GcZR28-`,
                children: (0, J.jsx)(es, {
                  clanID: n,
                  creatorName: f.GetName(),
                  creatorUrl: p,
                }),
              }),
          ],
        }),
      ],
    }),
  });
}
function $o(e) {
  let { creatorHomeType: t, clanID: n, bFullWidth: r } = e,
    [i, a] = Da(n),
    { creatorHome: o } = Vt(n),
    s = o?.GetCreatorHomeURL(t);
  if (o)
    return (0, J.jsxs)(`div`, {
      className: D(qo, r && `m6Zi3VVUIok-`),
      children: [
        a?.creator_page_bg_url &&
          (0, J.jsx)(`div`, {
            className: `fyTBoA4Uknk-`,
            children: (0, J.jsx)(Fo, {
              src: a.creator_page_bg_url,
              className: `_2ELZkhGAUq4-`,
            }),
          }),
        (0, J.jsx)(`div`, {
          children: (0, J.jsx)(`a`, {
            href: s,
            children: (0, J.jsx)(`img`, {
              className: Go,
              src: o.GetAvatarURLFullSize(),
            }),
          }),
        }),
        (0, J.jsx)(es, { clanID: n, creatorName: o.GetName(), creatorUrl: s }),
      ],
    });
}
function es(e) {
  let { clanID: t, creatorName: n, creatorUrl: r } = e;
  return (0, J.jsxs)(`div`, {
    className: Ko,
    children: [
      (0, J.jsx)(`div`, {
        className: Jo,
        children: (0, J.jsx)(`a`, {
          href: r,
          children: O(`#StoreApp_FollowCreator`, n),
        }),
      }),
      (0, J.jsx)(`div`, {
        className: void 0,
        children: O(`#StoreApp_FollowCreatorSubtitle`),
      }),
      (0, J.jsx)(`div`, {
        className: Yo,
        children: (0, J.jsx)(Oe, { className: Xo, clanAccountID: t }),
      }),
    ],
  });
}
function ts(e) {
  let {
      id: t,
      dashManifests: n,
      hlsManifest: r,
      screenshot: i,
      title: a,
      category: o,
      statsURL: s,
    } = e,
    c = as(),
    [l, u, d, f] = p(() => [
      !c.BPlayTrailer(t),
      c.BAutoplayEnabled(),
      c.GetPlayerVolume(),
      c.BAudioMuted(),
    ]),
    m = (0, q.useCallback)(() => {
      c.FireTrailerPlaybackEnded();
    }, [c]);
  return ns(l)
    ? (0, J.jsx)(Mt, {
        autoplayEnabled: u,
        setAutoplayEnabled: c.GetSetAutoplayEnabled(),
        playerVolume: d,
        setPlayerVolume: c.GetSetPlayerVolume(),
        audioMuted: f,
        setAudioMuted: c.GetSetAudioMuted(),
        children: (0, J.jsx)(Ft, {
          dashManifests: n,
          hlsManifest: r,
          screenshot: i,
          forcePause: l,
          onPlaybackEnd: m,
          altText: a,
          title: a,
          category: o,
          statsURL: s,
        }),
      })
    : null;
}
function ns(e) {
  let t = q.useRef(!1);
  return e || (t.current = !0), t.current;
}
var rs = class {
  m_mapTrailerPlay = new Map();
  m_fnOnTrailerEnd;
  m_bAutoplayEnabled = !1;
  m_fnSetAutoplayEnabled;
  m_flPlayerVolume = 1;
  m_fnSetPlayerVolume;
  m_bAudioMuted = !0;
  m_fnSetAudioMuted;
  constructor() {
    c(this);
  }
  InitAutoplayMethods(e, t) {
    (this.m_bAutoplayEnabled = e), (this.m_fnSetAutoplayEnabled = t);
  }
  InitPlayerVolumeMethods(e, t) {
    (this.m_flPlayerVolume = e / 100),
      (this.m_fnSetPlayerVolume = (e) => {
        (e *= 100), t(e);
      });
  }
  InitAudioMutedMethods(e, t) {
    (this.m_bAudioMuted = e), (this.m_fnSetAudioMuted = t);
  }
  UpdateAutoplay(e) {
    this.m_bAutoplayEnabled = e;
  }
  UpdateVolume(e) {
    this.m_flPlayerVolume = e / 100;
  }
  UpdateMuted(e) {
    this.m_bAudioMuted = e;
  }
  BAutoplayEnabled() {
    return this.m_bAutoplayEnabled;
  }
  GetSetAutoplayEnabled() {
    return this.m_fnSetAutoplayEnabled;
  }
  GetPlayerVolume() {
    return this.m_flPlayerVolume;
  }
  GetSetPlayerVolume() {
    return this.m_fnSetPlayerVolume;
  }
  BAudioMuted() {
    return this.m_bAudioMuted;
  }
  GetSetAudioMuted() {
    return this.m_fnSetAudioMuted;
  }
  SetTrailerState(e, t) {
    this.m_mapTrailerPlay.set(e, t);
  }
  SetTrailerEndCallback(e) {
    this.m_fnOnTrailerEnd = e;
  }
  FireTrailerPlaybackEnded() {
    this.m_fnOnTrailerEnd && this.m_fnOnTrailerEnd();
  }
  BPlayTrailer(e) {
    let t = this.m_mapTrailerPlay.get(e);
    return t !== void 0 && t;
  }
};
Wn([t], rs.prototype, `m_mapTrailerPlay`, void 0),
  Wn([t], rs.prototype, `m_bAutoplayEnabled`, void 0),
  Wn([t], rs.prototype, `m_flPlayerVolume`, void 0),
  Wn([t], rs.prototype, `m_bAudioMuted`, void 0);
var is = null;
function as() {
  return (
    is ||
      ((is = new rs()),
      window.dispatchEvent(
        new CustomEvent(`valve_gamehighlighttrailers_ready`, { detail: is }),
      )),
    is
  );
}
var os = `GMZfIVrEZB0-`,
  ss = `TM-gf0Qc-hM-`,
  cs = `kMCVIwCpXwE-`,
  ls = `gOWLvh1zsGE-`,
  us = `TP4hd63bK9g-`,
  ds = `_4HJ4TxI7VGA-`,
  fs = `_3z50y552VaM-`,
  ps = `zNam2sH3JOc-`,
  ms = `xFCMLN1hRNQ-`;
function hs(e) {
  let t = e.strSecondaryCategory
      ? `${qi.STORE_BASE_URL}search/?controllersupport=${e.strCategory}%2C${e.strSecondaryCategory}`
      : `${qi.STORE_BASE_URL}search/?controllersupport=${e.strCategory}`,
    n = (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(`div`, {
          className: D(
            ls,
            e.bHightlightRow && `VFEhs8s4XjQ-`,
            e.bHighlightGPRequired && `XXKNqeXLmoo-`,
          ),
          children: e.tagImage,
        }),
        (0, J.jsxs)(`div`, {
          className: D(
            ss,
            e.bHighlightText && `op0rZhgyRd8-`,
            e.bHightlightRow && `VFEhs8s4XjQ-`,
            e.bHighlightGPRequired && `XXKNqeXLmoo-`,
          ),
          children: [
            (0, J.jsx)(`div`, {
              className: D(
                cs,
                e.bHighlightText && `op0rZhgyRd8-`,
                e.bHightlightRow && `VFEhs8s4XjQ-`,
                e.bHighlightGPRequired && `XXKNqeXLmoo-`,
                e.bPersonalized && `aYsYtJOhj9Q-`,
              ),
              children: O(e.strLocalizationToken),
            }),
            e.strTooltipString &&
              (0, J.jsx)(nr, {
                toolTipContent: O(e.strTooltipString),
                className: `fGXAfQIw1s8-`,
                children: (0, J.jsx)(`span`, {
                  className: `Tu69Vg196Wk-`,
                  children: `?`,
                }),
              }),
          ],
        }),
      ],
    });
  return e.strCategory
    ? (0, J.jsx)(`a`, { href: t, className: os, children: n })
    : (0, J.jsx)(`div`, { className: os, children: n });
}
function gs(e) {
  return (0, J.jsx)(J.Fragment, {
    children:
      (e.bPartialXboxControllerSupport || e.bFullXboxControllerSupport) &&
      (0, J.jsx)(`div`, {
        className: `BxW4vbYGn9w-`,
        children: (0, J.jsx)(bs, { ...e }),
      }),
  });
}
function _s() {
  return (0, J.jsx)(hs, {
    tagImage: (0, J.jsx)(Xi, { className: D(ms, us), role: `presentation` }),
    strLocalizationToken: `#Store_ControllerSupport_GamepadRequired`,
    bHighlightGPRequired: !0,
    strTooltipString: `#Store_ControllerSupport_Tooltip_ControllerRequired`,
  });
}
function vs() {
  return (0, J.jsxs)(`div`, {
    className: D(ds),
    children: [
      (0, J.jsx)(Hr, { className: D(fs), role: `presentation` }),
      (0, J.jsx)(`div`, {
        className: D(void 0),
        children: O(`#Store_ControllerSupport_GamepadPreferred`),
      }),
    ],
  });
}
function ys(e) {
  let { bNoKeyboardSupport: t, bGamepadPreferred: n } = e;
  return (0, J.jsxs)(`div`, {
    className: D(ps),
    children: [t && (0, J.jsx)(_s, {}), n && !t && (0, J.jsx)(vs, {})],
  });
}
function bs(e) {
  let {
      bControllerSupportWizardComplete: t,
      bPS4ControllerSupport: n,
      bPS5ControllerSupport: r,
      bPS4ControllerBTSupport: i,
      bPS5ControllerBTSupport: a,
      bFullXboxControllerSupport: o,
      bPartialXboxControllerSupport: s,
      bSteamInputAPISupport: c,
      bHasOther: l,
      bHasPS4: u,
      bHasPS5: d,
      bHasXbox: f,
      bPreview: p,
    } = e,
    m = [];
  if (n && r && i && a) {
    let e = (0, J.jsx)(sn, {
        className: us,
        controllerType: 34,
        partial: !o,
        role: `presentation`,
      }),
      t = u || d;
    m.push(
      (0, J.jsx)(
        hs,
        {
          tagImage: e,
          strLocalizationToken: t
            ? `#Store_ControllerSupport_PS_Personalized`
            : `#Store_ControllerSupport_PS`,
          bPersonalized: t,
          strCategory: `55`,
          strSecondaryCategory: `57`,
        },
        `1`,
      ),
    );
  } else {
    if (n) {
      let e = (0, J.jsx)(sn, {
        className: us,
        controllerType: 34,
        partial: !o,
        role: `presentation`,
      });
      i
        ? m.push(
            (0, J.jsx)(
              hs,
              {
                tagImage: e,
                strLocalizationToken: u
                  ? `#Store_ControllerSupport_PS4_Personalized`
                  : `#Store_ControllerSupport_PS4`,
                bPersonalized: u,
                strCategory: `55`,
              },
              `2`,
            ),
          )
        : m.push(
            (0, J.jsx)(
              hs,
              {
                tagImage: e,
                strLocalizationToken: u
                  ? `#Store_ControllerSupport_PS4_USB_Personalized`
                  : `#Store_ControllerSupport_PS4_USB`,
                bPersonalized: u,
                strCategory: `55`,
              },
              `3`,
            ),
          );
    }
    if (r) {
      let e = (0, J.jsx)(sn, {
        className: us,
        controllerType: 45,
        partial: !o,
        role: `presentation`,
      });
      a
        ? m.push(
            (0, J.jsx)(
              hs,
              {
                tagImage: e,
                strLocalizationToken: d
                  ? `#Store_ControllerSupport_PS5_Personalized`
                  : `#Store_ControllerSupport_PS5`,
                bPersonalized: d,
                strCategory: `57`,
              },
              `4`,
            ),
          )
        : m.push(
            (0, J.jsx)(
              hs,
              {
                tagImage: e,
                strLocalizationToken: d
                  ? `#Store_ControllerSupport_PS5_USB_Personalized`
                  : `#Store_ControllerSupport_PS5_USB`,
                bPersonalized: d,
                strCategory: `57`,
              },
              `5`,
            ),
          );
    }
  }
  return (0, J.jsx)(J.Fragment, {
    children:
      (s || o) &&
      (0, J.jsxs)(J.Fragment, {
        children: [
          (0, J.jsx)(`div`, {
            className: `_1jp-rCKW9iQ-`,
            children: O(
              o
                ? `#Store_ControllerSupport_FullController`
                : `#Store_ControllerSupport_PartialController`,
            ),
          }),
          (0, J.jsx)(hs, {
            tagImage: (0, J.jsx)(sn, {
              className: `TP4hd63bK9g-`,
              controllerType: 32,
              partial: !o,
              role: `presentation`,
            }),
            strLocalizationToken: f
              ? `#Store_ControllerSupport_Xbox_Personalized`
              : `#Store_ControllerSupport_Xbox`,
            bPersonalized: f,
            strCategory: `18`,
          }),
          m,
          c &&
            (0, J.jsx)(hs, {
              tagImage: (0, J.jsx)(Mi, {
                className: `kFzhb-mNMzc-`,
                bGreyOutRightSide: !o,
                role: `presentation`,
              }),
              strLocalizationToken: `#Store_ControllerSupport_SIAPI`,
              strTooltipString: `#Store_ControllerSupport_Tooltip_SIAPI`,
              strCategory: `59`,
            }),
          ((!p && !t) || (!c && l && !f)) &&
            (0, J.jsx)(hs, {
              tagImage: (0, J.jsx)(va, {
                className: `kFzhb-mNMzc-`,
                role: `presentation`,
              }),
              strLocalizationToken:
                l || u || d
                  ? `#Store_ControllerSupport_Unknown_Personalized`
                  : `#Store_ControllerSupport_Unknown`,
              bPersonalized: l || u || d,
            }),
          (0, J.jsx)(ys, { ...e }),
        ],
      }),
  });
}
var xs = `OV8HMeZ1Few-`,
  Ss = `uUIKAMUoP2Y-`,
  Cs = `sWo2vXzSKeQ-`,
  ws = `lbUlWW44G1k-`,
  Ts = `-vDGco4-c68-`,
  Es = `_9RmH7bEJNos-`,
  Ds = `TvyYMFtB-E4-`,
  Os = `VFKUOs-XyW4-`,
  ks = `NqYE0Lg7Ns0-`,
  As = `l3xbgNByDqQ-`,
  js = `UtgswVUIqno-`,
  Ms = `hjrCySV5Tu4-`,
  Ns = `Nny9i1-OQ2Q-`,
  Ps = `p1O-6-65TA8-`,
  Fs = `FyUqKFBrgqM-`,
  Is = `_5UUBGyAqwfo-`,
  Ls = `s2ZVNXlduCQ-`,
  Rs = `vzlv-aTcooc-`,
  zs = `_6BrjqwxZ8sE-`,
  Bs = `eLYl3cSeDHk-`,
  Vs = `_8BbaQ0xWWo8-`,
  Hs = `N5MZaZCEdJc-`,
  Us = `wP4pUIEZ5oI-`,
  Ws = `_2BssK7u2xtU-`,
  Gs = `nh9RIgtIRPw-`,
  Ks = `dDQmGw5hMhA-`,
  X = {};
(X.arabic = () => E(() => import(`./apppage_arabic.js`), [], import.meta.url)),
  (X.brazilian = () =>
    E(() => import(`./apppage_brazilian.js`), [], import.meta.url)),
  (X.bulgarian = () =>
    E(() => import(`./apppage_bulgarian.js`), [], import.meta.url)),
  (X.czech = () => E(() => import(`./apppage_czech.js`), [], import.meta.url)),
  (X.danish = () =>
    E(() => import(`./apppage_danish.js`), [], import.meta.url)),
  (X.dutch = () => E(() => import(`./apppage_dutch.js`), [], import.meta.url)),
  (X.english = () =>
    E(() => import(`./apppage_english.js`), [], import.meta.url)),
  (X.finnish = () =>
    E(() => import(`./apppage_finnish.js`), [], import.meta.url)),
  (X.french = () =>
    E(() => import(`./apppage_french.js`), [], import.meta.url)),
  (X.german = () =>
    E(() => import(`./apppage_german.js`), [], import.meta.url)),
  (X.greek = () => E(() => import(`./apppage_greek.js`), [], import.meta.url)),
  (X.hungarian = () =>
    E(() => import(`./apppage_hungarian.js`), [], import.meta.url)),
  (X.indonesian = () =>
    E(() => import(`./apppage_indonesian.js`), [], import.meta.url)),
  (X.italian = () =>
    E(() => import(`./apppage_italian.js`), [], import.meta.url)),
  (X.japanese = () =>
    E(() => import(`./apppage_japanese.js`), [], import.meta.url)),
  (X.koreana = () =>
    E(() => import(`./apppage_koreana.js`), [], import.meta.url)),
  (X.latam = () => E(() => import(`./apppage_latam.js`), [], import.meta.url)),
  (X.malay = () => E(() => import(`./apppage_malay.js`), [], import.meta.url)),
  (X.norwegian = () =>
    E(() => import(`./apppage_norwegian.js`), [], import.meta.url)),
  (X.polish = () =>
    E(() => import(`./apppage_polish.js`), [], import.meta.url)),
  (X.portuguese = () =>
    E(() => import(`./apppage_portuguese.js`), [], import.meta.url)),
  (X.romanian = () =>
    E(() => import(`./apppage_romanian.js`), [], import.meta.url)),
  (X.russian = () =>
    E(() => import(`./apppage_russian.js`), [], import.meta.url)),
  (X.sc_schinese = () =>
    E(() => import(`./apppage_sc_schinese.js`), [], import.meta.url)),
  (X.schinese = () =>
    E(() => import(`./apppage_schinese.js`), [], import.meta.url)),
  (X.spanish = () =>
    E(() => import(`./apppage_spanish.js`), [], import.meta.url)),
  (X.swedish = () =>
    E(() => import(`./apppage_swedish.js`), [], import.meta.url)),
  (X.tchinese = () =>
    E(() => import(`./apppage_tchinese.js`), [], import.meta.url)),
  (X.thai = () => E(() => import(`./apppage_thai.js`), [], import.meta.url)),
  (X.turkish = () =>
    E(() => import(`./apppage_turkish.js`), [], import.meta.url)),
  (X.ukrainian = () =>
    E(() => import(`./apppage_ukrainian.js`), [], import.meta.url)),
  (X.vietnamese = () =>
    E(() => import(`./apppage_vietnamese.js`), [], import.meta.url));
async function qs(e) {
  if (X[e]) return await X[e]();
}
var Z = fn(qs),
  Js = new Map([
    [2379780, { strInternalAppName: `Balatro`, strBannerType: `bus` }],
    [413150, { strInternalAppName: `StardewValley`, strBannerType: `farmer` }],
    [1086940, { strInternalAppName: `BaldursGate3`, strBannerType: `knight` }],
    [1091500, { strInternalAppName: `Cyberpunk2077`, strBannerType: `robot` }],
    [1245620, { strInternalAppName: `EldenRing`, strBannerType: `campfire` }],
    [
      1794680,
      { strInternalAppName: `VampireSurvivors`, strBannerType: `zombies` },
    ],
    [
      1174180,
      { strInternalAppName: `RedDeadRedemption2`, strBannerType: `campfire` },
    ],
    [990080, { strInternalAppName: `HogwartsLegacy`, strBannerType: `family` }],
    [1942280, { strInternalAppName: `Brotato`, strBannerType: `bus` }],
    [1868140, { strInternalAppName: `DaveTheDiver`, strBannerType: `beach` }],
    [1145360, { strInternalAppName: `Hades`, strBannerType: `campfire` }],
    [292030, { strInternalAppName: `TheWitcher3`, strBannerType: `campfire` }],
    [646570, { strInternalAppName: `SlayTheSpire`, strBannerType: `city` }],
    [2344520, { strInternalAppName: `Diablo4`, strBannerType: `knight` }],
    [1145350, { strInternalAppName: `Hades2`, strBannerType: `campfire` }],
    [
      250900,
      {
        strInternalAppName: `TheBindingOfIsaacRebirth`,
        strBannerType: `busstop`,
      },
    ],
    [377160, { strInternalAppName: `Fallout4`, strBannerType: `apocalypse` }],
    [
      2321470,
      {
        strInternalAppName: `DeepRockGalacticSurvivor`,
        strBannerType: `miner`,
      },
    ],
    [367520, { strInternalAppName: `HollowKnight`, strBannerType: `miner` }],
    [
      1030300,
      { strInternalAppName: `HollowKnightSilksong`, strBannerType: `knight` },
    ],
    [2767030, { strInternalAppName: `MarvelRivals`, strBannerType: `porch` }],
    [
      2679460,
      { strInternalAppName: `MetaphorReFantazio`, strBannerType: `bed` },
    ],
    [1313140, { strInternalAppName: `CultOfTheLamb`, strBannerType: `city` }],
    [275850, { strInternalAppName: `NoMansSky`, strBannerType: `astronaut` }],
    [2694490, { strInternalAppName: `PathOfExile2`, strBannerType: `knight` }],
    [1687950, { strInternalAppName: `Persona5Royal`, strBannerType: `anime` }],
    [
      582010,
      { strInternalAppName: `MonsterHunterWorld`, strBannerType: `campfire` },
    ],
    [
      2142790,
      { strInternalAppName: `FieldsOfMistria`, strBannerType: `farmer` },
    ],
    [553850, { strInternalAppName: `HELLDIVERS2`, strBannerType: `porch` }],
    [1623730, { strInternalAppName: `Palworld`, strBannerType: `woodsman` }],
    [588650, { strInternalAppName: `DeadCells`, strBannerType: `bus` }],
    [
      1903340,
      {
        strInternalAppName: `ClairObscurExpedition33`,
        strBannerType: `campfire`,
      },
    ],
    [
      2993780,
      { strInternalAppName: `FantasyLifei`, strBannerType: `woodsman` },
    ],
    [2623190, { strInternalAppName: `Oblivion`, strBannerType: `knight` }],
    [230410, { strInternalAppName: `Warframe`, strBannerType: `robot` }],
    [1551360, { strInternalAppName: `ForzaHorizon5`, strBannerType: `car` }],
    [
      976730,
      {
        strInternalAppName: `HaloMasterChiefCollection`,
        strBannerType: `robot`,
      },
    ],
    [12210, { strInternalAppName: `GTAIV`, strBannerType: `car` }],
    [1562430, { strInternalAppName: `Dredge`, strBannerType: `beach` }],
    [
      1446780,
      { strInternalAppName: `MonsterHunterRise`, strBannerType: `campfire` },
    ],
    [3164500, { strInternalAppName: `Schedule1`, strBannerType: `city` }],
    [
      1817070,
      { strInternalAppName: `SpiderManRemastered`, strBannerType: `superhero` },
    ],
    [105600, { strInternalAppName: `Terraria`, strBannerType: `miner` }],
    [1293830, { strInternalAppName: `ForzaHorizon4`, strBannerType: `car` }],
    [3527290, { strInternalAppName: `Peak`, strBannerType: `porch` }],
    [2161700, { strInternalAppName: `Persona3Reload`, strBannerType: `anime` }],
    [
      1850570,
      { strInternalAppName: `DeathStranding`, strBannerType: `busstop` },
    ],
    [2552430, { strInternalAppName: `KingdomHearts`, strBannerType: `family` }],
    [504230, { strInternalAppName: `Celeste`, strBannerType: `adventurer` }],
    [632470, { strInternalAppName: `DiscoElysium`, strBannerType: `city` }],
    [
      227300,
      { strInternalAppName: `EuroTruckSimulator2`, strBannerType: `car` },
    ],
    [3405340, { strInternalAppName: `Megabonk`, strBannerType: `zombies` }],
    [2062430, { strInternalAppName: `BallxPit`, strBannerType: `city` }],
    [2592160, { strInternalAppName: `Dispatch`, strBannerType: `superhero` }],
    [
      1771300,
      {
        strInternalAppName: `KingdomComeDeliverance2`,
        strBannerType: `knight`,
      },
    ],
    [3241660, { strInternalAppName: `REPO`, strBannerType: `porch` }],
    [
      1984270,
      {
        strInternalAppName: `DigimonStoryTimeStranger`,
        strBannerType: `anime`,
      },
    ],
    [2878980, { strInternalAppName: `NBA2K25`, strBannerType: `city` }],
    [
      108600,
      { strInternalAppName: `ProjectZomboid`, strBannerType: `zombies` },
    ],
    [
      381210,
      { strInternalAppName: `DeadByDaylight`, strBannerType: `zombies` },
    ],
    [
      1401590,
      { strInternalAppName: `DisneyDreamlightValley`, strBannerType: `family` },
    ],
    [892970, { strInternalAppName: `Valheim`, strBannerType: `knight` }],
  ]),
  Ys = new Map([
    [`adventurer`, { className: Ds }],
    [`anime`, { className: Os }],
    [`apocalypse`, { className: ks }],
    [`astronaut`, { className: As }],
    [`beach`, { className: js }],
    [`bed`, { className: Ms }],
    [`bus`, { className: Ns }],
    [`busstop`, { className: Ps }],
    [`campfire`, { className: Fs }],
    [`car`, { className: Is }],
    [`city`, { className: Ls }],
    [`family`, { className: Rs }],
    [`farmer`, { className: zs }],
    [`knight`, { className: Bs }],
    [`miner`, { className: Vs }],
    [`porch`, { className: Hs }],
    [`robot`, { className: Us }],
    [`superhero`, { className: Ws }],
    [`woodsman`, { className: Gs }],
    [`zombies`, { className: Ks }],
  ]);
function Xs(e) {
  return Js.get(e);
}
function Zs(e) {
  return Ys.get(e);
}
function Qs(e) {
  let { appid: t } = e,
    n = Xs(t);
  return n ? (0, J.jsx)($s, { appBannerDef: n, ...e }) : null;
}
function $s(e) {
  let { appid: t, appBannerDef: n, app_name: r } = e,
    i = Zs(n.strBannerType),
    a = fr(
      w.STORE_BASE_URL +
        `app/${oe}?deckapp=${t}&utm_source=topplayed_app_banner&utm_campaign=${t}`,
      `topplayed_app_banner`,
      t,
    );
  return i
    ? (0, J.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, J.jsxs)(`div`, {
            className: Cs,
            children: [
              (0, J.jsx)(`div`, { className: Ss }),
              Z.Localize(`#DeckTopPlayedAppBanner_Title`),
            ],
          }),
          (0, J.jsx)(`a`, {
            href: a,
            className: D(xs, i.className),
            children: (0, J.jsxs)(`div`, {
              className: ws,
              children: [
                (0, J.jsx)(`div`, {
                  className: Ts,
                  children: Z.Localize(`#DeckTopPlayedAppBanner_Header`),
                }),
                (0, J.jsx)(`div`, {
                  className: Es,
                  children: Z.LocalizeReact(
                    `#DeckTopPlayedAppBanner_GameText`,
                    (0, J.jsx)(`span`, { children: r }),
                  ),
                }),
              ],
            }),
          }),
        ],
      })
    : (console.warn(`No banner type found for ${n.strBannerType}`), null);
}
var ec = `_68PDiTbmwNU-`,
  tc = `YbN2zI-t-cU-`,
  nc = `Id5GoO-PXMM-`,
  rc = `nL42CwuwEAI-`,
  ic = `iFwF6Q3uLSs-`,
  ac = `oWqwv9OuU6E-`,
  oc = `bux5R6XRmCw-`;
function sc(e) {
  let { appid: t } = e,
    n = pe(t),
    { data: r } = U(n),
    { data: i } = I(n),
    a = ga(i);
  return !r || !i
    ? null
    : (0, J.jsxs)(F, {
        focusable: !0,
        className: ec,
        onActivate: () => {
          window.location.href = a;
        },
        children: [
          (0, J.jsx)(`div`, {
            className: D(tc),
            children: (0, J.jsx)(`a`, {
              href: a,
              children: (0, J.jsx)(`img`, {
                className: nc,
                src: pa(r, `small_capsule`),
              }),
            }),
          }),
          (0, J.jsxs)(`div`, {
            className: ic,
            children: [
              (0, J.jsx)(`a`, { className: D(rc), href: a, children: i.name }),
              (0, J.jsxs)(`div`, {
                className: ac,
                children: [
                  (0, J.jsx)(ze, { id: n }),
                  (0, J.jsx)(Yt, { appid: t, className: oc, bTextMode: !0 }),
                ],
              }),
            ],
          }),
        ],
      });
}
var cc = `ng6euk2oJRM-`,
  lc = `fDnUmmpEDr4-`,
  uc = `IXaJGMe19a0-`,
  dc = `xw9-I4B2KUk-`,
  fc = `zveLzqpea5Q-`,
  pc = `Eq1JXhZBDVw-`,
  mc = `XY4ycPTAUz0-`,
  hc = `c75xBETk62U-`,
  gc = `_103ffsVWYo4-`,
  _c = `_8feLLiXVP5Y-`,
  vc = `gJDSs-Ay09o-`,
  yc = `_5nSpn64KpGI-`,
  bc = `rcXISLP6D-c-`;
function xc(e, t) {
  return (0, q.useMemo)(() => {
    let n = [],
      r = new Map();
    for (let t of e)
      if (
        (t.featured &&
          (n.push({ type: `trailer`, key: `t_${t.id}`, data: t }),
          r.set(t.id, !0)),
        n.length >= 2)
      )
        break;
    for (let e of t)
      n.push({ type: `screenshot`, key: `s_${e.name}`, data: e });
    for (let t of e)
      r.has(t.id) || n.push({ type: `trailer`, key: `t_${t.id}`, data: t });
    return n;
  }, [e, t]);
}
function Sc(e) {
  let { data: t } = pr({ appid: e }),
    { data: n } = rr({ appid: e }),
    r = ai(e);
  return (
    (0, q.use)(Z.Ready()),
    {
      trailers: (0, q.useMemo)(() => {
        let n = (t?.highlights ?? []).map((t) => Cc(e, t, !0, r)),
          i = (t?.other_trailers ?? []).map((t) => Cc(e, t, !1, r));
        return [...n, ...i].filter((e) => e !== null);
      }, [e, t, r]),
      screenshots: (0, q.useMemo)(() => {
        let e = [
          ...(n?.all_ages_screenshots ?? []),
          ...(r ? [] : (n?.mature_content_screenshots ?? [])),
        ];
        return (
          e.sort((e, t) => e.ordinal - t.ordinal),
          e.map((e, t) => ({
            name: e.filename,
            thumbnail: cr(e, `thumb`),
            standard: cr(e, `600x338`),
            full: cr(e, `1920x1080`),
            altText:
              e.alt_text ||
              Z.Localize(`#AppPage_Screenshot_DefaultAltText`, String(t + 1)),
            category: e.category,
          }))
        );
      }, [n, r]),
    }
  );
}
function Cc(e, t, n, r) {
  if (r && !t.all_ages) return null;
  let { rgDashTrailers: i, rgHlsTrailers: a } = Hi(t);
  if (i.length == 0 || a.length == 0) return null;
  let o = {
    id: t.trailer_base_id,
    featured: n,
    thumbnail: wc(t, t.screenshot_small),
    poster: wc(t, t.screenshot_medium || t.screenshot_small),
    dashManifests: i,
    hlsManifest: a[0],
    statsURL: `${w.STORE_BASE_URL}app/trailerstats/${e}/${t.trailer_id}`,
  };
  return (
    t.trailer_category &&
      ((o.category = t.trailer_category), (o.title = t.trailer_name)),
    o
  );
}
function wc(e, t) {
  return w.STORE_ITEM_BASE_URL + e.trailer_url_format.replace("${FILENAME}", t);
}
var Tc = `lI-XRMv-ul0-`;
function Ec(e) {
  let { category: t, shown: n } = e;
  return !n || !t
    ? null
    : (0, J.jsx)(`div`, { className: Tc, children: Dc(t) });
}
function Dc(e) {
  switch (e) {
    case 1:
      return Z.Localize(`#AppPage_Screenshot_Category_Gameplay`);
    case 2:
      return Z.Localize(`#AppPage_Screenshot_Category_GameMenu`);
    case 3:
      return Z.Localize(`#AppPage_Screenshot_Category_Cinematic`);
    case 4:
      return Z.Localize(`#AppPage_Screenshot_Category_ConceptArt`);
  }
  return ``;
}
function Oc(e) {
  let { id: t, bSelfPurchaseOption: n, bHideNewTag: r } = e,
    { data: i } = I(t);
  return i
    ? (0, J.jsx)(ze, {
        id: t,
        bPurchaseOptionDisplay: !0,
        bHidePrePurchase: !0,
        bSelfPurchaseOption: n,
        bHideNewTag: r,
      })
    : null;
}
var kc = new la(`GameInterest`);
function Ac(e, t) {
  return [`GameInterest`, e, t];
}
function jc(e, t, n, r) {
  e.setQueryData(Ac(t, n), r);
}
function Mc(e) {
  let t = o(),
    n = qr();
  return (
    q.useEffect(() => {
      let { appid: r, userInterest: i, markReady: a } = e;
      jc(t, n, r, i), a();
    }, [t, n, e]),
    null
  );
}
function Nc(e) {
  let t = qr();
  return d({
    queryKey: Ac(t, e),
    enabled: !!t,
    queryFn: async () => {
      throw (
        (kc.Info(`Fetching user game interest from the back end for `, e),
        Error(`Fetching user game interest is not yet supported`))
      );
    },
  });
}
function Pc(e, t, n) {
  let r = o(),
    i = yr(),
    a = qr();
  return u({
    mutationKey: [t, ...Ac(a, e)],
    mutationFn: async (o) => {
      kc.Info(`Mutating ${e} for ${t}`, o);
      let s = new FormData();
      s.set(`sessionid`, Bi()), s.set(`appid`, e.toString()), s.set(`snr`, i);
      let { url: c, new_interest: l } = n(o, s);
      kc.Info(` new interest before backend call`, l),
        r.setQueryData(Ac(a, e), l);
      try {
        let n = await fetch(c, { method: `POST`, body: s });
        return n.ok
          ? !0
          : (kc.Info(`request to ${t} ${e} failed with ${n}`, o), !1);
      } catch (n) {
        return kc.Info(`request to ${t} ${e} failed with ${n}`, o), !1;
      }
    },
    onSuccess: (t, n) => {
      t || r.setQueryData(Ac(a, e), n.old_interest);
    },
    onError: (t, n, i) => {
      r.setQueryData(Ac(a, e), n.old_interest);
    },
  });
}
function Fc(e) {
  return Pc(e, `wishlist`, (e, t) => {
    let { wishlist: n, old_interest: r } = e;
    return {
      new_interest: { ...r, wishlist: n },
      url: n
        ? `${w.STORE_BASE_URL}api/addtowishlist`
        : `${w.STORE_BASE_URL}api/removefromwishlist`,
    };
  });
}
function Ic(e) {
  return Pc(e, `ignore`, (e, t) => {
    let { ignored: n, ignored_reason: r, old_interest: i } = e,
      a = { ...i, ignored: n, ignored_reason: r };
    return (
      n && r !== void 0
        ? t.set(`ignore_reason`, r.toString())
        : t.set(`remove`, `1`),
      {
        new_interest: a,
        url: `${w.STORE_BASE_URL}recommended/ignorerecommendation/`,
      }
    );
  });
}
function Lc(e) {
  return Pc(e, `follow`, (e, t) => {
    let { following: n, old_interest: r } = e,
      i = { ...r, following: n };
    return (
      n || t.set(`unfollow`, `1`),
      { new_interest: i, url: `${w.STORE_BASE_URL}explore/followgame/` }
    );
  });
}
function Rc(e) {
  let { appid: t } = e,
    { trailers: n, screenshots: r } = Sc(t);
  return (0, J.jsx)(Et, {
    supportsFullscreen: !1,
    supportsTheater: !0,
    children: (0, J.jsx)(Vc, {
      children: (0, J.jsx)(zc, { trailers: n, screenshots: r, appid: t }),
    }),
  });
}
function zc(e) {
  let { trailers: t, screenshots: n, appid: r } = e,
    i = Dt(),
    a = i?.strMode == `theater`,
    o = Pt(i, `theater`),
    s = Pt(i, `none`),
    c = xa(),
    [l, u] = Hc(a, s),
    d = xc(t, n);
  Bc(d);
  let f = q.useCallback(
    (e) => {
      i?.refTheater && i.refTheater(e);
    },
    [i],
  );
  if ((q.use(da.Ready()), d.length == 0)) return null;
  let p = d.map((e, t) =>
      e.type == `screenshot`
        ? (0, J.jsx)(Uc, { autoFocus: t == 0, screenshot: e.data }, e.key)
        : e.type == `trailer`
          ? (0, J.jsx)(Wc, { autoFocus: t == 0, trailer: e.data }, e.key)
          : null,
    ),
    m = a ? `` : da.Localize(`#TrailerPlayer_FullScreen_Tooltip`);
  return (0, J.jsx)(`div`, {
    ref: f,
    className: cc,
    popover: `manual`,
    children: (0, J.jsx)(`div`, {
      className: uc,
      children: (0, J.jsx)(_i, {
        rootClassName: lc,
        disableFocusRing: a,
        children: (0, J.jsxs)(F, {
          ref: c.ref,
          navRef: c.navRef,
          className: dc,
          "flow-children": `row`,
          navEntryPreferPosition: Ri.MAINTAIN_X,
          onOptionsActionDescription: m,
          onOptionsButton: o,
          onCancelButton: a ? s : void 0,
          onGamepadDirection: l,
          onFocusWithin: u,
          children: [
            !!r && (0, J.jsx)($c, { appid: r, fnExitTheaterMode: s }),
            p,
          ],
        }),
      }),
    }),
  });
}
function Bc(e) {
  let t = e.length;
  (0, q.useLayoutEffect)(() => {
    t < 1 ||
      document
        .querySelectorAll(`.gamehighlight_gamepadskeleton`)
        .forEach((e) => e.remove());
  }, [t]);
}
function Vc(e) {
  let { children: t } = e,
    n = (0, q.useCallback)(() => {}, []),
    [r, i] = (0, q.useState)(!0);
  return (0, J.jsx)(Mt, {
    autoplayEnabled: !1,
    setAutoplayEnabled: n,
    playerVolume: 1,
    setPlayerVolume: n,
    audioMuted: r,
    setAudioMuted: i,
    children: t,
  });
}
function Hc(e, t) {
  let n = (0, q.useCallback)(
    (n) => {
      e && !n && t();
    },
    [e, t],
  );
  return [(0, q.useCallback)((t) => !!e, [e]), n];
}
function Uc(e) {
  let { screenshot: t, autoFocus: n } = e,
    [r, i] = (0, q.useState)(!1),
    a = D(fc, yc);
  return (0, J.jsxs)(F, {
    className: a,
    autoFocus: n,
    focusable: !0,
    onOKActionDescription: ``,
    onFocusWithin: i,
    children: [
      (0, J.jsx)(`img`, { src: t.full, alt: t.altText }),
      (0, J.jsx)(Ec, { category: t.category, shown: r }),
    ],
  });
}
function Wc(e) {
  let { trailer: t, autoFocus: n } = e;
  return t.dashManifests
    ? (0, J.jsx)(Zc, { trailer: t, autoFocus: n })
    : (0, J.jsx)(Gc, { trailer: t, autoFocus: n });
}
function Gc(e) {
  let { trailer: t, autoFocus: n } = e,
    r = (0, q.useRef)(null),
    [i, a] = Kc(),
    o = Ca(r, a),
    [s, c] = qc(r),
    l = Jc(s),
    u = Yc(r),
    d = (0, q.useCallback)(
      (e) => {
        let t = r.current;
        e.detail.button == Nr.TRIGGER_LEFT && t
          ? ((t.currentTime = Math.max(0, t.currentTime - 10)),
            e.preventDefault(),
            e.stopPropagation())
          : e.detail.button == Nr.TRIGGER_RIGHT &&
            t &&
            ((t.currentTime = Math.min(t.duration, t.currentTime + 10)),
            e.preventDefault(),
            e.stopPropagation());
      },
      [r],
    );
  if (!t.webmMax) return null;
  let f = t.poster || ``,
    p = i.bMuted
      ? da.Localize(`#TrailerPlayer_Unmute_Tooltip`)
      : da.Localize(`#TrailerPlayer_Mute_Tooltip`),
    m = i.bPaused
      ? da.Localize(`#TrailerPlayer_Play_Tooltip`)
      : da.Localize(`#TrailerPlayer_Pause_Tooltip`),
    h = D(fc, vc);
  return (0, J.jsx)(F, {
    className: h,
    onActivate: c,
    onOKActionDescription: m,
    ...l,
    onSecondaryButton: u,
    onSecondaryActionDescription: p,
    onButtonDown: d,
    autoFocus: n,
    children: (0, J.jsx)(`video`, {
      ref: o,
      controls: !0,
      muted: !0,
      disablePictureInPicture: !0,
      controlsList: `nodownload`,
      playsInline: !0,
      preload: `none`,
      poster: f,
      children: (0, J.jsx)(`source`, { src: t.webmMax, type: `video/webm` }),
    }),
  });
}
function Kc() {
  let [e, t] = (0, q.useState)({ bPaused: !0, bMuted: !0 });
  return [
    e,
    un(
      (e) => {
        if (!e) return () => {};
        let n = () => {
            t((t) => ({ ...t, bMuted: e.muted }));
          },
          r = () => {
            t((e) => ({ ...e, bPaused: !1 }));
          },
          i = () => {
            t((e) => ({ ...e, bPaused: !0 }));
          };
        return (
          e.addEventListener(`volumechange`, n),
          e.addEventListener(`play`, r),
          e.addEventListener(`pause`, i),
          () => {
            e.removeEventListener(`volumechange`, n),
              e.removeEventListener(`play`, r),
              e.removeEventListener(`pause`, i);
          }
        );
      },
      [t],
    ),
  ];
}
function qc(e) {
  let t = (0, q.useRef)(!1),
    n = (0, q.useRef)(null),
    r = (0, q.useCallback)(
      (r) => {
        let i = e.current;
        i &&
          ((t.current = r),
          !n.current &&
            (r
              ? ((n.current = i.play()),
                n.current
                  .then(() => {
                    !t.current && e.current && e.current.pause(),
                      (n.current = null);
                  })
                  .catch(() => {
                    n.current = null;
                  }))
              : i.paused || i.pause()));
      },
      [e],
    );
  return [
    r,
    (0, q.useCallback)(() => {
      let t = e.current;
      t && r(t.paused);
    }, [r, e]),
  ];
}
function Jc(e) {
  return {
    onGamepadFocus: (0, q.useCallback)(() => e(!0), [e]),
    onGamepadBlur: (0, q.useCallback)(() => e(!1), [e]),
  };
}
function Yc(e) {
  return (0, q.useCallback)(() => {
    let t = e.current;
    t && (t.muted = !t.muted);
  }, [e]);
}
function Xc(e) {
  let { poster: t, bVideoReady: n } = e;
  return t
    ? (0, J.jsxs)(`div`, {
        className: D(pc, n && `BxzYv55DKVA-`),
        children: [
          (0, J.jsx)(`img`, { className: D(mc), src: t, alt: `` }),
          (0, J.jsx)(Ot, { className: hc }),
        ],
      })
    : null;
}
function Zc(e) {
  let { trailer: t, autoFocus: n } = e,
    [r, i] = (0, q.useState)(!1),
    [a, o] = (0, q.useState)(!1),
    [s, c] = yi(),
    l = q.useCallback(() => {
      i(!0);
    }, []),
    u = D(fc, bc);
  return (0, J.jsxs)(F, {
    ref: c,
    className: u,
    onFocusWithin: o,
    autoFocus: n,
    children: [
      (0, J.jsx)(Xc, { poster: t.poster, bVideoReady: r }),
      (0, J.jsx)(Rt, {
        mode: `JustLoad`,
        horizontal: !0,
        holdGamepadFocus: !0,
        children: (0, J.jsx)(Ft, {
          dashManifests: t.dashManifests,
          hlsManifest: t.hlsManifest,
          screenshot: t.poster,
          altText: t.title,
          forcePause: !a || !s,
          onPlaybackEnd: void 0,
          onPlaybackStart: l,
          title: t.title,
          category: t.category,
          statsURL: t.statsURL,
        }),
      }),
    ],
  });
}
function Qc(e, t) {
  return w.STORE_ITEM_BASE_URL + e.replace("${FILENAME}", t);
}
function $c(e) {
  let { appid: t, fnExitTheaterMode: n } = e,
    { data: r } = I({ appid: t }),
    { data: i } = Cn({ appid: t }),
    { data: a } = U({ appid: t }),
    { data: o } = Nc(t),
    { mutateAsync: s } = Fc(t),
    c = !!o?.wishlist,
    l = !o?.owned,
    u = q.useCallback(() => {
      o && s({ wishlist: !o.wishlist, old_interest: o });
    }, [s, o]),
    d,
    f;
  l &&
    o &&
    ((d = W.Localize(c ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`)),
    (f = u));
  let p = q.useCallback(() => {
    window.postMessage({ method: `FocusPurchaseOptions` });
  }, []);
  if (!a) return null;
  let m = D(fc, gc);
  return (0, J.jsx)(F, {
    className: m,
    onActivate: p,
    onSecondaryActionDescription: d,
    onSecondaryButton: f,
    onOptionsActionDescription: null,
    onOptionsButton: () => {},
    onFocus: n,
    children: (0, J.jsxs)(R, {
      position: `absolute`,
      inset: `0 0 0 0`,
      direction: `column`,
      overflow: `hidden`,
      children: [
        (0, J.jsx)(`img`, {
          className: void 0,
          src: Qc(a.asset_url_format, a.header),
          alt: ``,
        }),
        (0, J.jsxs)(R, {
          className: _c,
          flexGrow: `1`,
          flexShrink: `1`,
          direction: `column`,
          overflow: `hidden`,
          padding: `3`,
          paddingTop: `2`,
          children: [
            (0, J.jsx)(R, {
              flexGrow: `0`,
              flexShrink: `0`,
              children: (0, J.jsx)(V, {
                contrast: `title`,
                weight: `heavy`,
                size: { initial: `2`, md: `4`, lg: `6` },
                children: r?.name,
              }),
            }),
            (0, J.jsx)(N, {
              flexGrow: `1`,
              overflow: `hidden`,
              children: (0, J.jsx)(V, {
                size: { initial: `1`, md: `2`, lg: `4` },
                lineClamp: 7,
                contrast: `body`,
                children: i?.short_description,
              }),
            }),
            r?.best_purchase_option &&
              (0, J.jsxs)(R, {
                className: `LxSwKUAt72s-`,
                flexGrow: `0`,
                flexShrink: `0`,
                children: [
                  (0, J.jsx)(Oc, { id: { appid: t }, bHideNewTag: !0 }),
                  l &&
                    (0, J.jsxs)(R, {
                      className: `QilvZ2g5iKM-`,
                      children: [
                        c
                          ? (0, J.jsx)(ii, { className: `ruSTV5CjuqM-` })
                          : (0, J.jsx)(Mr, { className: `ruSTV5CjuqM-` }),
                        (0, J.jsx)(dr, {
                          button: `X`,
                          className: `RlVUvFTc-UQ-`,
                        }),
                      ],
                    }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
var el = `Z16CPxiJR6U-`,
  tl = `zINzcHjlPXg-`,
  nl = `_6JPEf-8jLkY-`,
  rl = `HSYdVVf6raY-`,
  il = `UkRozutPl6U-`,
  al = `HJ9ZocIzR0c-`,
  ol = `zD-Om9FDHYQ-`,
  sl = `V3qCIVA6veU-`,
  cl = `eUqFFnnOpaE-`,
  ll = `_3De1jkvoS8c-`,
  ul = `_5CHYrerXt9w-`,
  dl = `FC1IQaEyNis-`,
  fl = `-enfPEBGitg-`,
  pl = `vKmge4moTPw-`;
function ml() {
  let e = document.cookie.match(/(^|; )bGameHighlightAutoplayDisabled=([^;]*)/);
  return !(e && e[2] == `true`);
}
function hl(e) {
  let t = new Date();
  t.setTime(t.getTime() + 31536e7),
    (document.cookie = `bGameHighlightAutoplayDisabled=${e ? `false` : `true`}; expires=${t.toUTCString()};path=/`);
}
function gl() {
  let e = document.cookie.match(/(^|; )flGameHighlightPlayerVolume=([^;]*)/),
    t = e && e[2] ? parseFloat(e[2]) : 80;
  return t < 0 ? 0 : t > 100 ? 100 : t;
}
function _l(e) {
  let t = new Date();
  t.setTime(t.getTime() + 31536e7),
    (document.cookie = `flGameHighlightPlayerVolume=${e}; expires=${t.toUTCString()};path=/`);
}
function vl() {
  let e = document.cookie.match(/(^|; )bGameHighlightAudioEnabled=([^;]*)/);
  return e && e[2] == `true`;
}
function yl(e) {
  let t = new Date();
  t.setTime(t.getTime() + 31536e7),
    (document.cookie = `bGameHighlightAudioEnabled=${e ? `true` : `false`}; expires=${t.toUTCString()};path=/`);
}
function bl(e) {
  let { children: t } = e,
    [n, r] = (0, q.useState)(ml),
    i = (0, q.useCallback)((e) => {
      hl(e), r(e);
    }, []),
    [a, o] = (0, q.useState)(gl),
    s = (0, q.useCallback)((e) => {
      (e *= 100), _l(e), o(e);
    }, []),
    [c, l] = (0, q.useState)(vl),
    u = (0, q.useCallback)((e) => {
      yl(!e), l(!e);
    }, []);
  return (0, J.jsx)(Mt, {
    autoplayEnabled: n,
    setAutoplayEnabled: i,
    playerVolume: a / 100,
    setPlayerVolume: s,
    audioMuted: !c,
    setAudioMuted: u,
    children: t,
  });
}
function xl() {
  return kt().m_bAutoplayEnabled ?? !1;
}
var Sl = (0, q.createContext)(void 0);
function Cl(e) {
  let { orderedItems: t, children: n } = e,
    r = xl(),
    [i, a] = (0, q.useState)(() => Dl(t, r)),
    o = (0, q.useMemo)(() => {
      if (t.length == 0)
        return {
          strActiveID: ``,
          strActiveType: ``,
          strPreviousID: ``,
          strNextID: ``,
          fnSetActive: a,
        };
      let e = t.findIndex((e) => e.key == i);
      e ||= 0;
      let n = t[e].type,
        o = Ol(`previous`, t, e, r),
        s = Ol(`next`, t, e, r);
      return {
        strActiveID: i,
        strActiveType: n,
        strPreviousID: o,
        strNextID: s,
        fnSetActive: a,
      };
    }, [i, a, t, r]);
  return (0, J.jsx)(Sl.Provider, { value: o, children: n });
}
function wl() {
  let e = (0, q.useContext)(Sl);
  return (
    Ui(
      e != null,
      `useHighlightContext used outside of HighlightContextProvider`,
    ),
    e
  );
}
function Tl(e) {
  return e == wl().strActiveID;
}
function El(e) {
  return e == wl().strNextID;
}
function Dl(e, t) {
  return (
    Ui(e.length > 0, `Unexpected length`),
    e[0].type == `trailer` && !t ? Ol(`next`, e, 0, t) : e[0].key
  );
}
function Ol(e, t, n, r) {
  Ui(t.length > 0, `Unexpected length`);
  let i = n;
  do
    if (
      ((i = e == `next` ? (i + 1) % t.length : (i - 1 + t.length) % t.length),
      t[i].type != `trailer` || r)
    )
      break;
  while (i != n);
  return t[i].key;
}
var kl = `yFfOMK5rW-Q-`,
  Al = `TZAuDvW8qHw-`,
  jl = `-jBZhJ-lHUU-`,
  Ml = `WgVMB4YQiSs-`,
  Nl = `PXfzURLcJGs-`,
  Pl = `OX1oObP8BBs-`,
  Fl = `dhoOKL-yTAw-`,
  Il = `_1WAcs3o8Lg4-`,
  Ll = `xfzmpLIv9nQ-`,
  Rl = `JIdk89M-jjc-`;
function zl(e) {
  let { items: t } = e,
    { refStrip: n, refTrack: r, refThumb: i, fnRegisterItemElement: a } = Bl(),
    o = Dt()?.strMode == `theater`;
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsxs)(`div`, {
        className: D(kl, o && `xzC-zxJ5V7w-`),
        children: [
          (0, J.jsx)(`div`, { className: Al }),
          (0, J.jsx)(`div`, { className: jl }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: D(Ml, o && `xzC-zxJ5V7w-`),
        children: [
          (0, J.jsx)(Vl, { refStrip: n, items: t, registerItemElement: a }),
          (0, J.jsx)(Wl, { refTrack: r, refThumb: i }),
        ],
      }),
    ],
  });
}
function Bl() {
  let e = wl(),
    t = (0, q.useRef)(null),
    n = (0, q.useRef)(null),
    r = (0, q.useRef)(null),
    i = (0, q.useRef)(null),
    a = (0, q.useRef)(void 0);
  (a.current ||= new Map()),
    (0, q.useEffect)(() => {
      let e = r.current,
        a = n.current,
        o = t.current;
      if (!e || !a || !o) return;
      let s = o.matches(`:dir(rtl)`),
        c = () => {
          i.current ||= requestAnimationFrame(() => {
            i.current = null;
            let t = a.getBoundingClientRect(),
              n = e.getBoundingClientRect(),
              r = t.width - n.width,
              c = o.scrollWidth - o.clientWidth,
              l;
            (l = s
              ? gi(o.scrollLeft, -c, 0, -r, 0)
              : gi(o.scrollLeft, 0, c, 0, r)),
              (e.style.transform = `translateX( ${l}px )`);
          });
        };
      return (
        o.addEventListener(`scroll`, c, { passive: !0 }),
        () => {
          o.removeEventListener(`scroll`, c),
            i.current && cancelAnimationFrame(i.current);
        }
      );
    }, []),
    (0, q.useEffect)(() => {
      let e = r.current,
        i = n.current,
        a = t.current;
      if (!e || !i || !a) return;
      let o = null,
        s = a.matches(`:dir(rtl)`),
        c = (e) => {
          if (!o) return;
          let t = e.clientX - o.nInitialClientX,
            n = wn(o.nInitialPosition + t, 0, o.nTrackWidth),
            r = gi(n, 0, o.nTrackWidth, 0, o.nScrollWidth);
          s && (r = -(o.nScrollWidth - r)),
            a.scrollTo({ left: r, behavior: `auto` });
        },
        l = (t) => {
          i.setPointerCapture(t.pointerId);
          let n = i.getBoundingClientRect(),
            r = e.getBoundingClientRect(),
            s = n.width - r.width,
            l = a.scrollWidth - a.clientWidth,
            u = Math.max(r.left - n.left, 0),
            d = t.clientX;
          t.target != e &&
            ((u = t.clientX - n.left),
            (u -= Math.floor(r.width / 2)),
            (u = wn(u, 0, s))),
            (o = {
              nInitialPosition: u,
              nInitialClientX: d,
              nTrackWidth: s,
              nScrollWidth: l,
            }),
            (document.body.style.userSelect = `none`),
            c(t);
        },
        u = (e) => {
          (o = null), (document.body.style.userSelect = ``);
        };
      return (
        i.addEventListener(`pointerdown`, l),
        i.addEventListener(`pointermove`, c),
        i.addEventListener(`lostpointercapture`, u),
        () => {
          i.removeEventListener(`pointerdown`, l),
            i.removeEventListener(`pointermove`, c),
            i.removeEventListener(`lostpointercapture`, u);
        }
      );
    }, []);
  let o = e.strActiveID;
  return (
    (0, q.useEffect)(() => {
      let e = a.current.get(o);
      if (!e) return;
      let n = t.current;
      if (!n) return;
      let r = n.getBoundingClientRect(),
        i = e.getBoundingClientRect();
      if (i.left < r.left || i.right > r.right) {
        let e = i.left - r.left + n.scrollLeft;
        n.scrollTo({ left: e, behavior: `smooth` });
      }
    }, [o]),
    {
      refStrip: t,
      refTrack: n,
      refThumb: r,
      fnRegisterItemElement: (0, q.useCallback)(
        (e, t) => {
          t ? a.current.set(e, t) : a.current.delete(e);
        },
        [a],
      ),
    }
  );
}
function Vl(e) {
  let { refStrip: t, items: n, registerItemElement: r } = e,
    i = Hl(),
    a = n.map((e) =>
      (0, J.jsx)(Ul, { item: e, registerItemElement: r }, e.key),
    );
  return (0, J.jsx)(`div`, {
    ref: t,
    className: Nl,
    onKeyDown: i,
    tabIndex: 0,
    children: a,
  });
}
function Hl() {
  let e = wl();
  return (0, q.useCallback)(
    (t) => {
      t.repeat ||
        (t.code == `ArrowLeft`
          ? (t.currentTarget.matches(`:dir(rtl)`)
              ? e.strNextID && e.fnSetActive(e.strNextID)
              : e.strPreviousID && e.fnSetActive(e.strPreviousID),
            t.preventDefault())
          : t.code == `ArrowRight` &&
            (t.currentTarget.matches(`:dir(rtl)`)
              ? e.strPreviousID && e.fnSetActive(e.strPreviousID)
              : e.strNextID && e.fnSetActive(e.strNextID),
            t.preventDefault()));
    },
    [e],
  );
}
function Ul(e) {
  let { item: t, registerItemElement: n } = e,
    r = wl(),
    i = t.key == r.strActiveID,
    a = () => r.fnSetActive(t.key),
    o = t.key,
    s = (0, q.useCallback)((e) => n(o, e), [o, n]),
    c = t.data.thumbnail ? t.data.thumbnail : ``,
    l = D(Pl, i && `HxQpo4wzmz8-`);
  return (0, J.jsxs)(`div`, {
    ref: s,
    className: l,
    onClick: a,
    children: [
      !!c && (0, J.jsx)(`img`, { src: c, alt: `` }),
      t.type == `trailer` &&
        (0, J.jsx)(`div`, {
          className: `GssTy6neAgg-`,
          children: (0, J.jsx)(Ot, {}),
        }),
    ],
  });
}
function Wl(e) {
  let { refTrack: t, refThumb: n } = e,
    r = wl(),
    i = r.strPreviousID ? () => r.fnSetActive(r.strPreviousID) : void 0,
    a = r.strNextID ? () => r.fnSetActive(r.strNextID) : void 0;
  return (0, J.jsxs)(`div`, {
    className: Fl,
    children: [
      (0, J.jsx)(`div`, {
        className: Il,
        onClick: i,
        children: (0, J.jsx)(Gl, { direction: `left` }),
      }),
      (0, J.jsx)(`div`, {
        ref: t,
        className: Ll,
        children: (0, J.jsx)(`div`, { ref: n, className: Rl }),
      }),
      (0, J.jsx)(`div`, {
        className: Il,
        onClick: a,
        children: (0, J.jsx)(Gl, { direction: `right` }),
      }),
    ],
  });
}
function Gl(e) {
  let { direction: t } = e;
  return t == `right`
    ? (0, J.jsx)(`svg`, {
        viewBox: `0 0 49 79`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        children: (0, J.jsx)(`path`, {
          d: `M8.81647 0L48 39.5005L8.81647 79L0 70.1124L30.3671 39.4995L0 8.88756L8.81647 0Z`,
          fill: `currentColor`,
        }),
      })
    : (0, J.jsx)(`svg`, {
        viewBox: `0 0 49 80`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        children: (0, J.jsx)(`path`, {
          d: `M39.3427 79.6279L0.159182 40.1274L39.3427 0.627931L48.1592 9.51549L17.7921 40.1284L48.1592 70.7404L39.3427 79.6279Z`,
          fill: `currentColor`,
        }),
      });
}
var Kl = 5e3;
function ql(e) {
  let { appName: t, trailers: n, screenshots: r } = e,
    i = Jl(),
    a = xc(n, r);
  return (
    Yl(a),
    a.length == 0
      ? null
      : (0, J.jsx)(Et, {
          supportsTheater: !i,
          supportsFullscreen: or(),
          children: (0, J.jsx)(bl, {
            children: (0, J.jsx)(Cl, {
              orderedItems: a,
              children: (0, J.jsxs)(Ql, {
                children: [
                  (0, J.jsx)(eu, { appName: t, items: a }),
                  (0, J.jsx)(zl, { items: a }),
                ],
              }),
            }),
          }),
        })
  );
}
function Jl() {
  return bn(`(max-width: 910px)`) || w.IN_MOBILE_WEBVIEW;
}
function Yl(e) {
  let t = e.length;
  (0, q.useLayoutEffect)(() => {
    t < 1 ||
      document
        .querySelectorAll(`.gamehighlight_desktopskeleton`)
        .forEach((e) => e.remove());
  }, [t]);
}
var Xl = (0, q.createContext)(!1);
function Zl() {
  return (0, q.useContext)(Xl);
}
function Ql(e) {
  let { children: t } = e,
    [n, r] = (0, q.useState)(!1),
    i = (0, q.useCallback)((e) => r(e.isIntersecting), []),
    a = an(i),
    { refRoot: o } = $l(n),
    s = Ca(a, o);
  return (0, J.jsx)(Xl.Provider, {
    value: n,
    children: (0, J.jsx)(`div`, { ref: s, children: t }),
  });
}
function $l(e) {
  let t = (0, q.useRef)(null),
    n = (0, q.useRef)(0),
    r = (0, q.useRef)(!1),
    i = (0, q.useRef)(e),
    a = wl(),
    o = (0, q.useRef)(a);
  o.current = a;
  let s = (Dt()?.strMode ?? `none`) != `none`,
    c = (0, q.useRef)(s);
  c.current = s;
  let l = (0, q.useCallback)(() => {
      !o.current ||
        o.current.strActiveType != `screenshot` ||
        n.current ||
        r.current ||
        c.current ||
        !i.current ||
        (n.current = window.setTimeout(() => {
          (n.current = 0), o.current.fnSetActive(o.current.strNextID);
        }, Kl));
    }, []),
    u = (0, q.useCallback)(() => {
      n.current &&= (window.clearTimeout(n.current), 0);
    }, []),
    d = a.strActiveID;
  return (
    (0, q.useEffect)(() => {
      l();
    }, [d]),
    (0, q.useEffect)(() => {
      s ? u() : l();
    }, [s]),
    (0, q.useEffect)(() => {
      let e = t.current;
      if (!e) return;
      let n = () => {
          document.visibilityState == `visible` ? l() : u();
        },
        i = () => {
          (r.current = !0), u();
        },
        a = () => {
          (r.current = !1), l();
        };
      return (
        e.addEventListener(`pointerenter`, i),
        e.addEventListener(`pointerleave`, a),
        document.addEventListener(`visibilitychange`, n),
        () => {
          e.removeEventListener(`pointerenter`, i),
            e.removeEventListener(`pointerleave`, a),
            document.addEventListener(`visibilitychange`, n);
        }
      );
    }, []),
    (0, q.useEffect)(() => {
      (i.current = e), e ? l() : u();
    }, [e, l, u]),
    { refRoot: t }
  );
}
function eu(e) {
  let { appName: t, items: n } = e,
    r = wl(),
    i = au(),
    a = Dt(),
    o = a?.strMode == `theater`,
    [s, c] = ou(),
    [l, u] = mi(),
    d = l ? r.strActiveID : ``,
    f = nu(r),
    p = Ca(a?.refTheater, f),
    m = n.map((e) =>
      e.type == `screenshot`
        ? (0, J.jsx)(
            su,
            { id: e.key, screenshot: e.data, focus: e.key == d },
            e.key,
          )
        : e.type == `trailer`
          ? (0, J.jsx)(
              cu,
              { id: e.key, trailer: e.data, focus: e.key == d },
              e.key,
            )
          : null,
    ),
    h = r.strPreviousID ? () => r.fnSetActive(r.strPreviousID) : void 0,
    g = r.strNextID ? () => r.fnSetActive(r.strNextID) : void 0;
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(tu, {
        ref: p,
        className: el,
        ...u,
        children: (0, J.jsxs)(`div`, {
          className: rl,
          children: [
            (0, J.jsx)(ru, { appName: t }),
            (0, J.jsxs)(`div`, {
              ref: a?.refFullscreen,
              className: sl,
              ...c,
              onKeyDown: i,
              tabIndex: 0,
              children: [
                m,
                (0, J.jsx)(`div`, {
                  className: D(cl, s && `Iw1YuPhqkqE-`, ul),
                  onClick: h,
                  "data-keepcontrols": !0,
                  children: (0, J.jsx)(Gl, { direction: `left` }),
                }),
                (0, J.jsx)(`div`, {
                  className: D(cl, s && `Iw1YuPhqkqE-`, ll),
                  onClick: g,
                  "data-keepcontrols": !0,
                  children: (0, J.jsx)(Gl, { direction: `right` }),
                }),
              ],
            }),
            (0, J.jsx)(iu, { items: n, activeItem: r.strActiveID }),
          ],
        }),
      }),
      (0, J.jsx)(`div`, { className: D(ol, o && `_90em5Bg1rW8-`) }),
    ],
  });
}
function tu(e) {
  let { ref: t, children: n, ...r } = e,
    i = Dt(),
    a = i?.strMode,
    o = Pt(i, `none`),
    s = (0, q.useCallback)(
      (e) => {
        e.target === e.currentTarget && o();
      },
      [o],
    );
  return (
    (0, q.useEffect)(() => {
      if (a != `theater`) return;
      let e = (e) => {
        e.key == `Escape` && !e.repeat && o();
      };
      return (
        window.addEventListener(`keydown`, e),
        () => window.removeEventListener(`keydown`, e)
      );
    }, [a, o]),
    (0, J.jsx)(`div`, {
      ref: t,
      ...r,
      popover: `manual`,
      onClick: s,
      children: n,
    })
  );
}
function nu(e) {
  let t = (0, q.useCallback)(
    (t) => {
      t == `left` && e.strNextID
        ? e.fnSetActive(e.strNextID)
        : t == `right` && e.strPreviousID && e.fnSetActive(e.strPreviousID);
    },
    [e],
  );
  return jn(t);
}
function ru(e) {
  let { appName: t } = e,
    n = Dt(),
    r = Pt(n, `none`);
  return (0, J.jsxs)(`div`, {
    className: tl,
    children: [
      (0, J.jsx)(`div`, {
        className: il,
        children: O(`#GameHighlight_Theater_Header`, t),
      }),
      (0, J.jsx)(`div`, {
        className: al,
        children: (0, J.jsx)(Vr, { onClick: r }),
      }),
    ],
  });
}
function iu(e) {
  let { items: t, activeItem: n } = e,
    r = t.findIndex((e) => n && e.key == n),
    i = ``;
  return (
    r >= 0 && (i = O(`#GameHighlight_Theater_ItemCount`, r + 1, t.length)),
    (0, J.jsx)(`div`, {
      className: nl,
      children: i.length > 0 && (0, J.jsx)(`div`, { children: i }),
    })
  );
}
function au() {
  let e = wl();
  return (0, q.useCallback)(
    (t) => {
      t.repeat ||
        e.strActiveType == `trailer` ||
        (t.code == `ArrowLeft`
          ? (t.currentTarget.matches(`:dir(rtl)`)
              ? e.strNextID && e.fnSetActive(e.strNextID)
              : e.strPreviousID && e.fnSetActive(e.strPreviousID),
            t.preventDefault())
          : t.code == `ArrowRight` &&
            (t.currentTarget.matches(`:dir(rtl)`)
              ? e.strPreviousID && e.fnSetActive(e.strPreviousID)
              : e.strNextID && e.fnSetActive(e.strNextID),
            t.preventDefault()));
    },
    [e],
  );
}
function ou() {
  let [e, t] = jt(),
    n = (0, q.useRef)({ element: void 0, bKeepControls: !1 }),
    r = (0, q.useCallback)(
      (e) => {
        if (e.target == n.current.element) return;
        let t = Nt(e);
        n.current = { element: e.target, bKeepControls: t };
      },
      [n],
    ),
    i = (0, q.useCallback)(
      (e) => {
        n.current.bKeepControls ? t(!0, 0) : t(!0, e);
      },
      [n, t],
    );
  return [
    e,
    {
      onPointerEnter: (0, q.useCallback)(
        (e) => {
          e.pointerType != `touch` && (r(e), i(It(e)));
        },
        [i, r],
      ),
      onPointerMove: (0, q.useCallback)(
        (e) => {
          e.pointerType != `touch` && (r(e), i(It(e)));
        },
        [r, i],
      ),
      onPointerLeave: (0, q.useCallback)(
        (e) => {
          e.pointerType != `touch` &&
            ((n.current = { element: void 0, bKeepControls: !1 }), i(Tt()));
        },
        [n, i],
      ),
      onPointerDown: (0, q.useCallback)(
        (e) => {
          i(It(e));
        },
        [i],
      ),
    },
  ];
}
function su(e) {
  let { id: t, screenshot: n, focus: r } = e,
    i = Tl(t),
    a = El(t),
    o = lu(i || a),
    s = Dt(),
    c = Pt(s, `theater`),
    l = !s?.strMode || s.strMode == `none`,
    u = En(r);
  if (!o) return null;
  let d = D(dl, i && `O4bfbToNY90-`, fl, l && `YPHwC3Y5DhE-`),
    f = n.full;
  return (0, J.jsxs)(`div`, {
    ref: u,
    className: d,
    onClick: l ? c : void 0,
    tabIndex: 0,
    children: [
      (0, J.jsx)(`img`, { src: f, alt: n.altText }),
      (0, J.jsx)(Ec, { category: n.category, shown: i }),
      (0, J.jsxs)(`div`, {
        className: pl,
        children: [
          s?.bSupportsTheater && (0, J.jsx)(wt, {}),
          s?.bSupportsFullscreen && (0, J.jsx)(At, {}),
        ],
      }),
    ],
  });
}
function cu(e) {
  let { id: t, trailer: n, focus: r } = e,
    i = Tl(t),
    a = lu(i),
    [o, s] = yi(),
    c = Zl(),
    l = wl(),
    u = (0, q.useCallback)(() => l.fnSetActive(l.strNextID), [l]);
  if (!a) return null;
  let d = D(dl, i && `O4bfbToNY90-`, void 0);
  return (0, J.jsx)(Lt, {
    drop: !or(),
    children: (0, J.jsx)(`div`, {
      ref: s,
      className: d,
      children: (0, J.jsx)(Ft, {
        dashManifests: n.dashManifests,
        hlsManifest: n.hlsManifest,
        screenshot: n.poster,
        altText: n.title,
        forcePause: !i || !o || !c,
        onPlaybackEnd: u,
        title: n.title,
        category: n.category,
        statsURL: n.statsURL,
        focus: r,
      }),
    }),
  });
}
function lu(e) {
  let t = (0, q.useRef)(!1);
  return e && (t.current = !0), t.current;
}
function uu(e) {
  let { appID: t, results: n, appName: r, tab: i = 1 } = e,
    a = Sa(),
    o;
  o = O(
    i == 3
      ? `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`
      : i == 2
        ? `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`
        : i == 4
          ? `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`
          : a
            ? `#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`
            : `#SteamDeckVerified_Store_CompatSectionHeader_Desktop`,
  );
  let s = q.useId();
  return n
    ? (0, J.jsxs)(`div`, {
        className: Me,
        role: `group`,
        "aria-labelledby": s,
        children: [
          (0, J.jsx)(`div`, { className: We, id: s, children: o }),
          (0, J.jsx)(du, { ...e }),
        ],
      })
    : null;
}
function du(e) {
  let { appID: t, results: n, appName: r, tab: i = 1, className: a } = e,
    o = Sa(),
    s,
    c;
  if (
    (i == 2
      ? ((s = (0, J.jsx)(Le, { category: n.steamos_resolved_category })),
        (c = (0, J.jsx)(pu, { category: n.steamos_resolved_category })))
      : i == 3
        ? ((s = (0, J.jsx)(Ne, { category: n.machine_resolved_category })),
          (c = (0, J.jsx)(fu, { category: n.machine_resolved_category })))
        : i == 4
          ? ((s = (0, J.jsx)(Ne, { category: n.frame_resolved_category })),
            (c = (0, J.jsx)(fu, { category: n.frame_resolved_category })))
          : ((s = (0, J.jsx)(Ne, { category: n.resolved_category })),
            (c = (0, J.jsx)(fu, { category: n.resolved_category }))),
    !n)
  )
    return null;
  let l = n?.steam_deck_blog_url && i != 4;
  return (0, J.jsxs)(`div`, {
    className: D(o ? De : He, a),
    children: [
      (0, J.jsxs)(`div`, { children: [s, c] }),
      (0, J.jsx)(mu, {
        results: n,
        learnMore: O(`#SteamDeckVerified_Store_CompatSection_LearnMore`),
        appName: r || ``,
        eStartingTab: i,
      }),
      l && (0, J.jsx)(`div`, { className: `ahykWXj-Rak-` }),
      l &&
        (0, J.jsx)(Be, {
          url: n.steam_deck_blog_url,
          containerClass: `TxQs7xIpj2A-`,
          bIncludeIcon: !0,
        }),
    ],
  });
}
function fu(e) {
  let { category: t } = e;
  return (0, J.jsx)(`span`, { className: Ae, children: O(ke(t)) });
}
function pu(e) {
  let { category: t } = e;
  return (0, J.jsx)(`span`, { className: Ae, children: O(Re(t)) });
}
function mu(e) {
  let { results: t, learnMore: n, appName: r, eStartingTab: i = 1 } = e,
    [a, o] = (0, q.useState)(!1),
    s = q.useCallback(
      (e) => {
        let t = Ji();
        t && t.AddEvent(_a), o(!0);
      },
      [o],
    ),
    c = () => {
      o(!1);
    },
    l = {
      onOKButton: void 0,
      onOKActionDescription: null,
      onCancelActionDescription: W.Localize(`#Button_Close`),
      onCancelButton: () => o(!1),
    };
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsx)(B, { className: _e, onClick: s, children: n }),
      (0, J.jsx)(dt, {
        active: a,
        onDismiss: c,
        modalClassName: `DeckVerifiedModalDialog`,
        children: (0, J.jsx)(_i, {
          children: (0, J.jsx)(Ve, {
            results: t,
            buttonProps: l,
            appName: r,
            eStartingTab: i,
          }),
        }),
      }),
    ],
  });
}
var hu = uu,
  gu = `vAM8b-ZY9mg-`,
  _u = `-Lssf7qCuck-`,
  vu = `xg727Sw5Dto-`,
  yu = `_3Z8-qcYC8tQ-`,
  bu = `_2tuDsHuAv3Y-`,
  xu = `aEn6UBB81tQ-`,
  Su = `MhHDG2lJOfc-`,
  Cu = `b3n0javi-L0-`,
  wu = `tx4MH6fVbk8-`,
  Tu = `qyrAWwPB5NQ-`,
  Eu = `gkSYGkz7qzU-`,
  Du = `aIrdaHGPRmY-`,
  Ou = `ikIdunLNs7o-`,
  ku = `kJp0zXFfeYs-`,
  Au = `wishlistcategories`;
function ju(e, t, n) {
  return [Au, e, t, n];
}
function Mu(e, t, n, r) {
  return {
    queryKey: ju(t, !n || n === `0` ? `` : n, r),
    queryFn: () => Nu(e, t, n, r),
    staleTime: 6e5,
  };
}
async function Nu(e, t, n, r) {
  if (!t || (n != t && !r)) return [];
  let i = [];
  if (r) {
    let n = Di.Init(Oi);
    n.Body().set_steamid(t),
      n.Body().set_share_token(r),
      (i =
        (await Ir.GetSharedWishlistCategories(e, n)).Body().toObject()
          .categories ?? []);
  } else {
    let t = Di.Init(Gi);
    i =
      (await Ir.GetWishlistCategories(e, t)).Body().toObject().categories ?? [];
  }
  return Ku(i);
}
function Pu(e, t) {
  let n = qr(),
    r = pi();
  return d(Mu(r, e, n, t));
}
function Fu(e, t) {
  let n = qr(),
    r = pi(),
    i = q.useCallback((e) => new Map(e.map((e) => [e.id, e])), []);
  return d({ ...Mu(r, e, n, t), select: i });
}
var Iu = `wishlistappidcategories`;
function Lu(e, t) {
  return [Iu, e, t];
}
function Ru(e, t, n) {
  return {
    queryKey: Lu(t, n),
    queryFn: async () => {
      let t = Di.Init(ta);
      t.Body().set_appid(n);
      let r = await Ir.GetItemCategories(e, t);
      return r.BSuccess() ? Ku(r.Body().toObject().categories ?? []) : [];
    },
    staleTime: 6e5,
  };
}
function zu(e, t) {
  let n = pi();
  return d(Ru(n, e, t));
}
function Bu(e) {
  let t = pi(),
    n = o();
  return u({
    mutationFn: async (e) => {
      let n = Di.Init(Qr);
      n.Body().set_appid(e.appid),
        n.Body().set_category_name(e.categoryName),
        n.Body().set_categoryid(e.categoryID);
      let r = await Ir.AddWishlistItemCategory(t, n),
        i = { eresult: r.GetEResult() };
      return (
        r.BSuccess() &&
          (i.category = {
            id: r.Body().categoryid(),
            name: r.Body().name(),
            cItems: r.Body().item_count(),
            bNotificationOptIn: !!r.Body().notification_opt_in(),
          }),
        i
      );
    },
    onSuccess(t, r) {
      n.invalidateQueries({
        queryKey: [`WishlistSortedFiltered`, e],
        exact: !1,
      }),
        n.invalidateQueries({ queryKey: [Au, e], exact: !1 }),
        n.invalidateQueries({ queryKey: Lu(e, r.appid) });
    },
  });
}
function Vu(e) {
  let t = pi(),
    n = o();
  return u({
    mutationFn: async (e) => {
      let n = Di.Init(di);
      return (
        n.Body().set_appid(e.appid),
        n.Body().set_categoryid(e.categoryID),
        (await Ir.RemoveWishlistItemCategory(t, n)).GetEResult()
      );
    },
    onSuccess(t, r) {
      n.invalidateQueries({
        queryKey: [`WishlistSortedFiltered`, e],
        exact: !1,
      }),
        n.invalidateQueries({ queryKey: [Au, e], exact: !1 }),
        n.invalidateQueries({ queryKey: Lu(e, r.appid) });
    },
  });
}
var Hu = `wishlist_recent_categories`;
function Uu(e) {
  return {
    queryKey: [Hu],
    queryFn: async () => (await e.GetObject(Hu)) ?? [],
    staleTime: 36e5,
  };
}
function Wu() {
  let e = $i();
  return d(Uu(e));
}
function Gu() {
  let e = $i(),
    t = o();
  return u({
    mutationFn: async (n) => {
      let r = (await t.ensureQueryData(Uu(e))) ?? [],
        i = Array.from(new Set([...n.rgCategoryIDs, r])).slice(0, 3);
      return await e.StoreObject(Hu, i), i;
    },
    onSuccess: async (e) => {
      t.setQueryData([Hu], e);
    },
  });
}
function Ku(e) {
  return (
    e.map((e) => ({
      id: e.categoryid,
      name: e.name,
      cItems: e.item_count ?? 0,
      bNotificationOptIn: !!e.notification_opt_in,
    })) ?? []
  ).sort((e, t) =>
    e.cItems === t.cItems ? e.name.localeCompare(t.name) : t.cItems - e.cItems,
  );
}
function qu(e) {
  let { data: t } = Pu(e);
  return q.useMemo(() => {
    let e = [
      {
        id: `0`,
        name: G(`#Wishlist_Categories_Suggested_Birthday`),
        cItems: 0,
        bNotificationOptIn: !1,
      },
      {
        id: `0`,
        name: G(`#Wishlist_Categories_Suggested_Recommended`),
        cItems: 0,
        bNotificationOptIn: !1,
      },
      {
        id: `0`,
        name: G(`#Wishlist_Categories_Suggested_Discount`),
        cItems: 0,
        bNotificationOptIn: !1,
      },
    ];
    for (let n of t ?? [])
      e = e.filter(
        (e) => e.name.toLocaleLowerCase() !== n.name.toLocaleLowerCase(),
      );
    return e;
  }, [t]);
}
var Ju = 30,
  Yu = (function (e) {
    return (
      (e[(e.k_ECategoryButtonAction_None = 0)] =
        `k_ECategoryButtonAction_None`),
      (e[(e.k_ECategoryButtonAction_Filter = 1)] =
        `k_ECategoryButtonAction_Filter`),
      (e[(e.k_ECategoryButtonAction_Add = 2)] = `k_ECategoryButtonAction_Add`),
      (e[(e.k_ECategoryButtonAction_Remove = 3)] =
        `k_ECategoryButtonAction_Remove`),
      (e[(e.k_ECategoryButtonAction_Select = 4)] =
        `k_ECategoryButtonAction_Select`),
      e
    );
  })({});
function Xu(e) {
  let {
      rgCategories: t,
      header: n,
      onClick: r,
      eAction: i,
      bMultiline: a,
      bShowEmptyLabel: o,
      bShowAllButton: s,
      containerClassName: c,
      size: l,
      bShowCounts: u,
    } = e,
    d = q.useRef(null),
    f = i !== 3 && i !== 0,
    p = [],
    m = !1;
  for (let e of t) {
    e.bSelected && (m = !0);
    let t = e.id === `0` ? e.name : e.id,
      n = (0, J.jsx)(
        Zu,
        {
          category: e,
          selected: f && !!e.bSelected,
          onClick: r ? () => r(e.name, e.id) : void 0,
          eAction: i ?? 0,
          bShowCount: u,
        },
        t,
      );
    p.push(n);
  }
  let h = G(`#Wishlist_Controls_Categories_All`);
  return (
    q.useEffect(() => {
      d.current?.Node().BFocusWithin() &&
        d.current.Node().ForceMeasureFocusRing();
    }, [t]),
    (0, J.jsxs)(F, {
      className: (0, Y.default)(wu, c),
      scrollIntoViewWhenChildFocused: !0,
      children: [
        n !== null &&
          (0, J.jsx)(`span`, {
            className: `RzMJXT6de0A-`,
            children: n ?? G(`#Wishlist_Controls_Categories_Header`),
          }),
        (0, J.jsxs)(F, {
          className: (0, Y.default)(
            Tu,
            a && `-IV1e5ljOFk-`,
            l === `small` && `RGMCcuTVATk-`,
            l === "default" && `gj5C88bE4LY-`,
          ),
          "flow-children": a ? `grid` : `row`,
          focusableIfEmpty: t.length > 0,
          navRef: d,
          children: [
            s &&
              (0, J.jsx)(Zu, {
                category: {
                  cItems: 0,
                  id: `-1`,
                  name: h,
                  bNotificationOptIn: !1,
                },
                selected: !m,
                onClick: () => r && r(h, `-1`),
                onOKActionDescription: G(
                  `#Wishlist_Gamepad_Filter_Clear_Category`,
                ),
              }),
            p,
            !t.length &&
              o &&
              (0, J.jsx)(`div`, {
                className: `RzMJXT6de0A-`,
                children: G(`#Wishlist_Categories_None`),
              }),
          ],
        }),
      ],
    })
  );
}
function Zu(e) {
  let {
      category: t,
      selected: n,
      className: r,
      onOKActionDescription: i,
      onClick: a,
      eAction: o,
      bShowCount: s,
    } = e,
    c = o === 3,
    l = o === 1,
    u = t.name.length >= Ju,
    d = i;
  l && !d
    ? (d = G(`#Wishlist_Gamepad_Filter_Category`))
    : o === 2 && !d
      ? (d = G(`#Wishlist_Gamepad_Add_Category`))
      : o === 3 && !d && (d = G(`#Wishlist_Gamepad_Removecategory`));
  let f = {
      onOKActionDescription: d,
      onOKButton: () => a && a(),
      focusClassName: Ou,
    },
    p = !!a,
    m;
  return (
    u
      ? (m = t.name)
      : c && p
        ? (m = G(`#Wishlist_Controls_Categories_Remove_Tooltip`))
        : l && p && (m = G(`#Wishlist_Controls_Categories_Filter_Tooltip`)),
    (0, J.jsx)(Hn, {
      toolTipContent: m,
      usePointerEvents: !0,
      children: (0, J.jsxs)(Ki, {
        className: (0, Y.default)(
          Eu,
          c && `ehcj09JYGzI-`,
          n && `GSN-XregESo-`,
          !p && `SnoaT-xgEmw-`,
          r,
        ),
        onClick: a,
        ...f,
        children: [
          (0, J.jsx)(`span`, { className: Du, children: t.name }),
          s &&
            t.cItems > 0 &&
            (0, J.jsxs)(`span`, { children: [`(`, t.cItems, `)`] }),
          c && (0, J.jsx)(sa, {}),
        ],
      }),
    })
  );
}
function Qu(e) {
  let { categoryCount: t, onClick: n, bSimulateHover: r } = e;
  return (0, J.jsx)(Hn, {
    toolTipContent: G(`#Wishlist_Controls_Categories_Manage`),
    usePointerEvents: !0,
    children: (0, J.jsx)(Ki, {
      className: (0, Y.default)(Eu, ku, r && `ikIdunLNs7o-`),
      onClick: n,
      children: t > 0 ? (0, J.jsx)(ki, {}) : (0, J.jsx)(na, {}),
    }),
  });
}
var $u = 16;
function ed(e) {
  let {
      appid: t,
      steamid: n,
      onClose: r,
      filteredCategoryIDs: i,
      onAdvanced: a,
    } = e,
    [o, s] = q.useState([]),
    c = Gu(),
    { data: l } = I({ appid: t }),
    u =
      l && l.name && l.visible
        ? G(`#Wishlist_Controls_Categories_Manageitem`, l?.name)
        : G(`#Wishlist_Controls_Categories_Manage`),
    { data: d } = Pu(n),
    f = !!a && !!d && d.length > 0,
    p = q.useCallback(() => {
      c.mutate({ rgCategoryIDs: o.reverse() }), r();
    }, [c, o, r]);
  return (0, J.jsx)(et, {
    onClose: p,
    strTitle: u,
    navID: `AddWishlistCategoryDialog`,
    className: gu,
    children: (0, J.jsxs)(F, {
      "flow-children": `column`,
      children: [
        (0, J.jsx)(nd, {
          appid: t,
          steamid: n,
          onCategoryAdd: (e) => s([...o, e].slice(-3)),
          onCategoryRemove: (e) => {
            i && i.has(e) && p();
          },
        }),
        (0, J.jsxs)(F, {
          className: Cu,
          children: [
            f &&
              (0, J.jsx)(Ue, {
                onClick: a,
                children: G(`#Wishlist_Categories_Dialog_Advanced`),
              }),
            (0, J.jsx)(Te, {
              onClick: p,
              children: W.Localize(`#Button_Done`),
            }),
          ],
        }),
      ],
    }),
  });
}
function td(e, t, n, r) {
  let { data: i } = zu(n, t),
    { data: a } = Wu(),
    o = (e, t) => {
      let n = new Set(t);
      return [
        ...t.map((t) => e.find((e) => e.id === t)).filter((e) => !!e),
        ...e.filter((e) => !n.has(e.id)),
      ];
    };
  return q.useMemo(() => {
    if (!i) return [];
    let t = new Set(i?.map((e) => e.id) ?? []),
      n = e.filter((e) => !t.has(e.id));
    if (!r || r.length === 0)
      return o(
        n.filter((e) => e.cItems > 0),
        a ?? [],
      );
    let s = r.toLocaleLowerCase(),
      c = !1,
      l = n.filter((e) => {
        let t = e.name.toLocaleLowerCase();
        return (c ||= t === s), t.indexOf(s) > -1;
      });
    return (
      (l = o(l, [])),
      c || l.unshift({ id: `0`, name: r, cItems: 0, bNotificationOptIn: !1 }),
      l
    );
  }, [i, a, e, r]);
}
function nd(e) {
  let { appid: t, steamid: n, onCategoryAdd: r, onCategoryRemove: i } = e,
    [a, o] = q.useState(``),
    [s, c] = q.useState(void 0),
    l = Pu(n);
  q.useEffect(() => {
    !s && l.data && c(l.data);
  }, [l.data, s]);
  let u = Bu(n),
    d = async (e, n) => {
      if (!e || t === 0) return;
      let i = await u.mutateAsync({
        appid: t,
        categoryName: e,
        categoryID: n ?? `0`,
      });
      i.eresult === 1 &&
        i.category?.id &&
        (r(i.category.id),
        s &&
          !s.some((e) => e.id === i.category.id) &&
          c((e) => [...e, i.category]));
    },
    f = Vu(n),
    p = (e) => {
      t !== 0 && (f.mutate({ appid: t, categoryID: e }), i(e));
    },
    m = (e) => {
      e.stopPropagation(),
        e.preventDefault(),
        a && a.length !== 0 && (o(``), d(a));
    },
    { data: h } = zu(n, t),
    g = qu(n),
    _ = g.length > 0,
    v = td(s ?? [], t, n, a),
    y = Sa();
  return (0, J.jsxs)(F, {
    className: yu,
    "flow-children": `column`,
    children: [
      (0, J.jsxs)(`div`, {
        children: [
          (0, J.jsx)(`div`, {
            className: bu,
            children: G(`#Wishlist_Controls_Categories_Header_Current`),
          }),
          (0, J.jsx)(Xu, {
            rgCategories: h ?? [],
            header: null,
            eAction: Yu.k_ECategoryButtonAction_Remove,
            onClick: (e, t) => p(t),
            bMultiline: !0,
            bShowEmptyLabel: !0,
            containerClassName: xu,
          }),
          !!h && h.length >= $u && (0, J.jsx)(rd, {}),
        ],
      }),
      (0, J.jsxs)(`form`, {
        className: _u,
        onSubmit: m,
        children: [
          (0, J.jsx)(Lr, {
            autoFocus: !0,
            value: a,
            className: vu,
            type: `search`,
            placeholder: G(`#Wishlist_Categories_Dialog_Search`),
            onChange: (e) => o(e.target.value),
            onOKActionDescription:
              a.length > 0 ? G(`#Wishlist_Categories_Dialog_Add`) : null,
            maxLength: 500,
          }),
          !y &&
            (0, J.jsx)(`div`, {
              className: (0, Y.default)(
                `nieTkWOdh5g-`,
                a.length > 0 && `s4b2x4JdaY0-`,
              ),
              children: (0, J.jsx)(Ue, {
                onClick: m,
                children: G(`#Wishlist_Categories_Dialog_Add`),
              }),
            }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        children: [
          (0, J.jsx)(`div`, {
            className: bu,
            children: G(`#Wishlist_Controls_Categories_Header_Other`),
          }),
          (0, J.jsx)(Xu, {
            rgCategories: v,
            onClick: d,
            header: null,
            bMultiline: !0,
            bShowEmptyLabel: !0,
            containerClassName: xu,
            eAction: Yu.k_ECategoryButtonAction_Add,
          }),
        ],
      }),
      _ &&
        (0, J.jsxs)(`div`, {
          children: [
            (0, J.jsx)(`div`, {
              className: `_2tuDsHuAv3Y-`,
              children: G(`#Wishlist_Controls_Categories_Header_Suggested`),
            }),
            (0, J.jsx)(Xu, {
              rgCategories: g,
              onClick: d,
              header: null,
              bMultiline: !0,
              containerClassName: (0, Y.default)(
                `aEn6UBB81tQ-`,
                `r-e08Rj2miw-`,
              ),
            }),
          ],
        }),
    ],
  });
}
function rd() {
  return (0, J.jsx)(`div`, {
    className: Su,
    children: G(`#Wishlist_Categories_Max_Per_App_Reached`, $u),
  });
}
var id = `_3OBYC1AY3xE-`,
  ad = `bAXKAbpoIl8-`,
  od = `_292mngwtrSI-`;
function sd(e, t) {
  if (!e.current) return;
  let n = e.current.closest(`.queue_menu_flyout`);
  n &&
    (t ? n.classList.add(`force_expand`) : n.classList.remove(`force_expand`));
}
function cd(e) {
  let { appid: t } = e,
    n = qr(),
    [r, i] = q.useState(void 0),
    [a, o] = q.useState(!1),
    s = q.useRef(null),
    [c, l] = Jn(),
    { data: u } = Fu(n),
    { data: d } = Pu(n),
    f = qu(n),
    { data: p } = Wu(),
    { data: m } = zu(n, t),
    h = Bu(n),
    g = Vu(n),
    _ = Gu(),
    v = async (e, n) => {
      if (!r) return;
      let a = n ? r.find((e) => e.id === n) : void 0;
      if (a?.bSelected)
        g.mutate({ appid: t, categoryID: a.id }),
          i(
            r.map((e) =>
              e.id === n
                ? { ...e, bSelected: !1, cItems: Math.max(0, e.cItems - 1) }
                : e,
            ),
          );
      else if (e) {
        let r = await h.mutateAsync({
          appid: t,
          categoryName: e,
          categoryID: n ?? `0`,
        });
        if (r.eresult === 1 && r.category?.id) {
          let t = { ...r.category, bSelected: !0 };
          i((n) => n?.map((n) => (n.name === e ? t : n)) ?? [t]),
            _.mutate({ rgCategoryIDs: [r.category.id] });
        }
      }
    },
    y = (e) => {
      e.stopPropagation(), e.preventDefault(), sd(s, !0), o(!0);
    },
    ee = () => {
      o(!1), sd(s, !1), i(void 0);
    };
  if (
    (q.useEffect(() => {
      if (r || !u || !d || !m || !p || !f) return;
      let e = new Set(m.map((e) => e.id) ?? []),
        t = m.map((e) => ({ ...e, bSelected: !0 })),
        n = p.map((e) => u.get(e)).filter((e) => !!e);
      for (let r of [...n, ...d]) {
        if (t.length >= 6) break;
        e.has(r.id) || (t.push(r), e.add(r.id));
      }
      t.length < 6 && (t = [...t, ...(f?.slice(0, 6 - t.length) ?? [])]), i(t);
    }, [r, d, u, p, m, f]),
    !r || r.length === 0)
  )
    return null;
  let te = r.filter((e) => !e.bSelected),
    ne = r.filter((e) => e.bSelected);
  return (0, J.jsxs)(`div`, {
    className: id,
    ref: s,
    children: [
      (0, J.jsxs)(fi, {
        className: od,
        ...l,
        onClick: y,
        children: [
          (0, J.jsx)(`div`, {
            className: ad,
            children: O(`#Wishlist_QuickAdd_Header`),
          }),
          (0, J.jsx)(Qu, {
            categoryCount: m?.length ?? 0,
            bSimulateHover: c,
            onClick: () => {},
          }),
        ],
      }),
      ne.length > 0 &&
        (0, J.jsx)(Xu, {
          rgCategories: ne,
          header: null,
          onClick: v,
          bMultiline: !0,
        }),
      te.length > 0 &&
        (0, J.jsxs)(`div`, {
          children: [
            (0, J.jsx)(`div`, {
              children: O(`#Wishlist_QuickAdd_RecentAndSuggested`),
            }),
            (0, J.jsx)(Xu, {
              rgCategories: te,
              header: null,
              onClick: v,
              bMultiline: !0,
            }),
          ],
        }),
      a && (0, J.jsx)(ed, { appid: t, steamid: n, onClose: ee }),
    ],
  });
}
function ld(e) {
  return e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid };
}
function ud(e) {
  return Rn(ld(e));
}
function dd() {
  let e = pi(),
    t = C.accountid;
  return d(fd(e, t));
}
function fd(e, t) {
  return {
    queryKey: pd(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await md(e, t);
      return new Set(n);
    },
    placeholderData: new Set(),
    staleTime: 6e5,
  };
}
function pd(e) {
  return [`AccountActiveLicenses`, e ?? 0];
}
async function md(e, t) {
  throw new m(20, `Not implemented`);
}
function hd() {
  let e = o(),
    t = C.accountid;
  return q.useCallback(
    (n) => {
      e.setQueryData(pd(t), () => new Set(n));
    },
    [e, t],
  );
}
function gd(e, t) {
  return !e?.appid ||
    e.type === 4 ||
    !t ||
    !t.included_appids?.length ||
    !t.included_types?.length
    ? !1
    : t.included_appids.length > 1 &&
        !t.included_appids.includes(e.appid) &&
        t.included_types.every((e) => e === 4);
}
function _d(e) {
  let { data: t } = I({ appid: e }),
    n = t?.included_items?.included_packages;
  return q.useMemo(() => {
    let e = new Set();
    for (let r of n || []) r.id && gd(t, r) && e.add(r.id);
    return e;
  }, [t, n]);
}
function vd(e) {
  let { data: t } = gn({ appid: e }),
    n = _d(e),
    r = t?.purchase_options;
  return q.useMemo(() => {
    if (r)
      return r
        .filter((e) => e.packageid && n.has(e.packageid))
        .sort(
          (e, t) =>
            Number(e.final_price_in_cents || 0) -
            Number(t.final_price_in_cents || 0),
        );
  }, [r, n]);
}
var yd = q.createContext({ appid: 0, nOptions: 0 }),
  bd = q.createContext({ ShowConfirmDialog: () => {} });
function xd(e) {
  let {
    active: t,
    onOK: n,
    closeModal: r,
    bCloseOnOK: i,
    children: a,
    ...o
  } = e;
  if (!t) return null;
  let s = (typeof o.strTitle == `string` && o.strTitle) || O(`#Steam_Platform`);
  return (0, J.jsx)(ut, {
    onlyPopoutIfNeeded: !0,
    popupHeight: 340,
    popupWidth: 640,
    strTitle: s,
    children: (0, J.jsx)(Sn, {
      ...o,
      onCancel: r,
      onOK: () => {
        n(), i && r();
      },
      children: a,
    }),
  });
}
function Sd(e) {
  let { bCloseOnOK: t = !0, children: n, ...r } = e,
    [i, a, o] = mn();
  return [
    (0, J.jsx)(xd, {
      active: i,
      bCloseOnOK: t,
      closeModal: o,
      ...r,
      children: n,
    }),
    a,
    o,
  ];
}
function Cd(e) {
  let [t, n] = q.useState(``),
    [r, i] = q.useState(``),
    [a, o] = Sd({
      bCloseOnOK: !0,
      bAlertDialog: !0,
      onOK: () => {},
      strTitle: t,
      strDescription: r,
    }),
    s = q.useCallback(
      (e, t) => {
        n(e), i(t), o();
      },
      [o],
    ),
    c = q.useMemo(() => ({ ShowConfirmDialog: s }), [s]);
  return (0, J.jsxs)(bd.Provider, { value: c, children: [e.children, a] });
}
var wd = `FneGtSBNXCI-`,
  Td = `IUsPuPTR0bA-`;
function Ed(e) {
  let { color: t, onClick: n, strIconTitle: r, children: i } = e,
    a = (e) => {
      e.stopPropagation(), n && n(e);
    };
  return r
    ? (0, J.jsx)(Xa, {
        color: t,
        onClick: a,
        title: r,
        width: `36px`,
        minWidth: `36px`,
        children: i,
      })
    : (0, J.jsx)(L, { color: t, onClick: a, children: i });
}
function Dd(e) {
  let {
    onActivate: t,
    onOKActionDescription: n,
    onSecondaryButton: r,
    onSecondaryActionDescription: i,
    price: a,
    okIcon: o,
  } = e;
  return a || n
    ? (0, J.jsxs)(R, {
        direction: `row`,
        flexGrow: `0`,
        flexShrink: `0`,
        align: `stretch`,
        justify: `end`,
        gap: `2`,
        children: [
          a,
          !1,
          n &&
            (o
              ? (0, J.jsx)(Ed, {
                  color: `storegreen`,
                  onClick: t,
                  strIconTitle: n,
                  children: o,
                })
              : (0, J.jsx)(Ed, {
                  color: `storegreen`,
                  onClick: t,
                  children: n,
                })),
        ],
      })
    : null;
}
function Od(e) {
  let {
      className: t,
      option: n,
      color: r = `blue`,
      allowSingleLine: i,
      allowTwoColumn: a,
      price: o,
      okIcon: s,
      children: c,
      ...l
    } = e,
    { nOptions: u } = q.useContext(yd),
    d = u == 1;
  return (0, J.jsx)(_i, {
    rootClassName: Td,
    children: (0, J.jsxs)(F, {
      className: D(
        wd,
        r == `green` && `OAJ4eiwTj3c-`,
        i && `ptOPVGPk478-`,
        a && `gOU8BYZPoto-`,
        d && `cW0LB8YY43s-`,
      ),
      focusable: !0,
      ...l,
      children: [
        d && a && (0, J.jsx)(`div`, { className: `vvBNb7Eudb0-`, children: c }),
        !(d && a) && c,
        (0, J.jsx)(Dd, { ...l, price: o, okIcon: s }),
        !1,
      ],
    }),
  });
}
function kd(e) {
  let t = On();
  return q.useCallback(() => {
    e.packageid
      ? window.AddItemToCart(e.packageid, void 0, t)
      : e.bundleid && window.AddItemToCart(void 0, e.bundleid, t);
  }, [t, e.packageid, e.bundleid]);
}
function Ad(e, t) {
  return q.useCallback(() => {
    Se(e, t);
  }, [e, t]);
}
function jd(e, t) {
  return q.useCallback(() => {
    be(e, t);
  }, [e, t]);
}
function Md(e) {
  let { data: t } = I(e),
    { ShowConfirmDialog: n } = q.useContext(bd),
    { data: r = new Set() } = dd(),
    i = hd(),
    a = Fe(e);
  return q.useCallback(() => {
    a.mutateAsync().then(([e, a]) => {
      let o,
        s = t?.name || ``;
      if (e != 1)
        o = Z.Localize(`#AppPage_PurchaseOption_AddToLibraryError`, s, e);
      else {
        o = Z.Localize(`#AppPage_PurchaseOption_AddedToLibrary`, s);
        for (let e of a.packageids_added || []) r.add(e);
        i(Array.from(r));
      }
      n(s, o);
    });
  }, [a, n, t?.name, r, i]);
}
function Nd(e) {
  let { id: t, bPrepurchase: n } = e,
    { data: r } = I(t);
  return r ? (n ? Z.Localize(`#AppPage_Prepurchase`, r.name) : r.name) : null;
}
function Pd(e) {
  let { id: t, title: n, bPrepurchase: r = !1, children: i } = e;
  return (0, J.jsxs)(nt, {
    size: `4`,
    weight: `heavy`,
    children: [n || (0, J.jsx)(Nd, { id: t, bPrepurchase: r }), i],
  });
}
function Fd(e) {
  let { children: t } = e;
  return (0, J.jsx)(R, {
    direction: `column`,
    flexGrow: `1`,
    gap: `2`,
    overflow: `hidden`,
    children: t,
  });
}
function Id(e) {
  let { option: t } = e,
    n = { appid: t.appid },
    { data: r } = I(n),
    i = Md(n),
    a = ge(),
    o = t.bStandalone,
    s = a.data?.has(t.appid),
    c = jd(t.appid, r?.name ?? ``),
    l = ga(r),
    u = q.useCallback(() => {
      l && (window.location.href = l);
    }, [l]);
  return r
    ? (0, J.jsx)(J.Fragment, {
        children: (0, J.jsxs)(Od, {
          color: `green`,
          allowSingleLine: !t.label,
          allowTwoColumn: !!t.label,
          option: t,
          onActivate: c,
          onOKActionDescription: Z.Localize(`#AppPage_PurchaseOption_Download`),
          onSecondaryButton: o ? u : void 0,
          onSecondaryActionDescription: o
            ? Z.Localize(`#AppPage_PurchaseOption_MoreInfo`)
            : void 0,
          onOptionsButton: s ? void 0 : i,
          onOptionsActionDescription: s
            ? void 0
            : Z.Localize(`#AppPage_PurchaseOption_AddToLibrary`),
          children: [
            (0, J.jsx)(Pd, {
              title: Z.Localize(`#AppPage_PurchaseOption_DownloadDemo`, r.name),
            }),
            (0, J.jsx)(Fd, { children: (0, J.jsx)(V, { children: t.label }) }),
          ],
        }),
      })
    : null;
}
function Ld(e) {
  let { option: t } = e,
    n = q.useContext(yd),
    { data: r } = I({ appid: n.appid }),
    i = Ad(n.appid, r?.name ?? ``),
    a = Ln(),
    o =
      r &&
      r.free_weekend &&
      (r.free_weekend.start_time || 0) <= a &&
      (r.free_weekend.end_time || 0) > a;
  return r
    ? (0, J.jsxs)(Od, {
        option: t,
        color: `green`,
        allowSingleLine: !0,
        onActivate: i,
        onOKActionDescription: Z.Localize(`#AppPage_PurchaseOption_PlayNow`),
        children: [
          (0, J.jsx)(Pd, {
            title: Z.Localize(`#AppPage_PurchaseOption_Play`, r.name),
          }),
          (0, J.jsxs)(Fd, {
            children: [
              !o &&
                (0, J.jsx)(V, {
                  children: Z.Localize(
                    r.type == 1
                      ? `#AppPage_PurchaseOption_FreeDemo`
                      : `#AppPage_PurchaseOption_FreeToPlay`,
                  ),
                }),
              o &&
                (0, J.jsx)(V, {
                  children: Z.Localize(
                    `#AppPage_PurchaseOption_FreeWeekend`,
                    ln(r.free_weekend.end_time, {
                      weekday: void 0,
                      year: void 0,
                      hour: `numeric`,
                      minute: `numeric`,
                    }),
                  ),
                }),
            ],
          }),
        ],
      })
    : null;
}
function Rd(e) {
  let { text: t, onURLDetected: n } = e,
    r = q.useCallback(
      (e) => {
        let t = ce(e.args) ?? ce(e.args, `href`);
        return ha(t) && (t = lr(t)), n && n(t), ue(e);
      },
      [n],
    );
  return q
    .useMemo(() => {
      let e = (e) => new ht(new gt()),
        t = { ...ae, ...se, ...ie, url: { Constructor: r } };
      return new _t(t, e, w.LANGUAGE);
    }, [r])
    .ParseBBCode(t, void 0);
}
var zd = `SWkSqnXPXNE-`;
function Bd(e) {
  let { option: t } = e,
    n = kd(t),
    r = t.packageid ? { packageid: t.packageid } : { bundleid: t.bundleid };
  return (0, J.jsxs)(cn, {
    className: zd,
    onSelected: n,
    children: [
      (0, J.jsx)(`div`, {
        className: void 0,
        children: t.purchase_option_name,
      }),
      (0, J.jsx)(`div`, {
        className: void 0,
        children: (0, J.jsx)(xe, { id: r, purchaseOption: t }),
      }),
    ],
  });
}
function Vd(e) {
  let { option: t } = e;
  return (0, J.jsx)(bi, {
    label: t.data.package_group.dropdown_title,
    children: t.data.items.map((e) =>
      (0, J.jsx)(Bd, { option: e }, e.packageid ?? e.bundleid),
    ),
  });
}
function Hd(e) {
  if (e.data.package_group.name == `subscriptions`) return !0;
  for (let t of e.data.items) if (!t.recurrence_info?.packageid) return !1;
  return !0;
}
function Ud(e) {
  let { option: t } = e,
    { appid: n } = q.useContext(yd),
    { data: r } = I({ appid: n }),
    i = t.data.package_group,
    [a, o] = q.useState(``),
    s = fr(a),
    c = q.useCallback(() => {
      a && (window.location.href = s);
    }, [a, s]),
    l = q.useCallback(
      (e) => {
        vn((0, J.jsx)(Vd, { option: t }), e);
      },
      [t],
    );
  return (0, J.jsxs)(Od, {
    option: t,
    allowTwoColumn: !0,
    onActivate: l,
    onSecondaryButton: a ? c : void 0,
    onSecondaryActionDescription: a
      ? Z.Localize(`#AppPage_PurchaseOption_MoreInfo`)
      : void 0,
    children: [
      (0, J.jsx)(Pd, {
        title:
          i.dropdown_title ||
          Z.Localize(`#AppPage_Dropdown_DefaultTitle`, r?.name),
      }),
      (0, J.jsxs)(Fd, {
        children: [
          i.dropdown_description_bbcode &&
            (0, J.jsx)(V, {
              size: `2`,
              children: (0, J.jsx)(Rd, {
                text: i.dropdown_description_bbcode,
                onURLDetected: o,
              }),
            }),
          !i.dropdown_description_bbcode &&
            Hd(t) &&
            (0, J.jsx)(V, {
              size: `2`,
              children: Z.Localize(
                `#AppPage_Dropdown_DefaultDescription_Subscription`,
              ),
            }),
        ],
      }),
      (0, J.jsx)(R, {
        direction: `row`,
        flexGrow: `0`,
        flexShrink: `0`,
        align: `end`,
        justify: `end`,
        gap: `2`,
        children: (0, J.jsx)(L, {
          color: `greyneutral`,
          variant: `dark`,
          children: Z.Localize(`#AppPage_PurchaseOption_ViewOptions`),
        }),
      }),
    ],
  });
}
function Wd(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t }),
    { data: r } = U({ appid: t });
  return !n || !r
    ? null
    : (pa(r, `community_icon`),
      (0, J.jsxs)(J.Fragment, {
        children: [
          !1,
          (0, J.jsx)(V, {
            children: on(
              Z.Localize(
                `#AppPage_PurchaseOption_IncludedWithMasterSub`,
                n.name,
              ),
              (0, J.jsx)(`b`, {}),
            ),
          }),
        ],
      }));
}
function Gd(e) {
  let { option: t, appidMasterSub: n } = e,
    r = q.useContext(yd),
    { data: i } = I({ appid: r.appid }),
    a = Ad(r.appid, i?.name ?? ``);
  return i
    ? (0, J.jsxs)(Od, {
        option: t,
        color: `green`,
        onActivate: a,
        onOKActionDescription: Z.Localize(`#AppPage_PurchaseOption_PlayNow`),
        children: [
          (0, J.jsx)(Pd, {
            title: Z.Localize(`#AppPage_PurchaseOption_Play`, i.name),
          }),
          (0, J.jsxs)(Fd, {
            children: [
              !n &&
                (0, J.jsx)(V, {
                  children: Z.Localize(
                    `#AppPage_PurchaseOption_Play_Description`,
                    i.name,
                  ),
                }),
              !!n && (0, J.jsx)(Wd, { appid: n }),
            ],
          }),
        ],
      })
    : null;
}
function Kd(e) {
  let { option: t, appidPlaytest: n, bIsOpen: r } = e,
    { data: i } = I({ appid: n }),
    { data: a } = Mn({ appid: n }),
    { data: o } = Va(n);
  if (!i || !a || !o) return null;
  let s = o?.[0]?.status || 0;
  console.log(o, s);
  let c, l;
  switch (s) {
    case 0:
      (c = `#AppPage_PurchaseOption_JoinPlaytest`),
        (l = r
          ? (a.steam_release_date || 2147483647) < Ln()
            ? `#AppPage_PurchaseOption_Playtest_Open`
            : `#AppPage_PurchaseOption_Playtest_Open_Unreleased`
          : `#AppPage_PurchaseOption_JoinPlaytest_Description`);
      break;
    case 1:
      (c = `#AppPage_PurchaseOption_JoinPlaytest`),
        (l = `#AppPage_PurchaseOption_JoinPlaytest_InvitePending`);
      break;
    case 2:
      (c = `#AppPage_PurchaseOption_JoinPlaytest`),
        (l = `#AppPage_PurchaseOption_JoinPlaytest_InvitedByFriend`);
      break;
    case 3:
      (a.steam_release_date || 2147483647) < Ln()
        ? ((c = `#AppPage_PurchaseOption_Playtest_Accepted_Title`),
          (l = `#AppPage_PurchaseOption_Playtest_Accepted`))
        : (a.is_preload,
          (c = `#AppPage_PurchaseOption_Playtest_Accepted_Unavailable_Title`),
          (l = `#AppPage_PurchaseOption_Playtest_Accepted_Unavailable`));
      break;
    default:
      Ui(!1, `Unknown playtest status ${s}`);
  }
  return c && l
    ? (0, J.jsxs)(Od, {
        option: t,
        onActivate: void 0,
        children: [
          (0, J.jsx)(Pd, { title: Z.Localize(c, i.name) }),
          (0, J.jsx)(Fd, {
            children: (0, J.jsx)(V, { children: Z.Localize(l) }),
          }),
        ],
      })
    : null;
}
var qd = `R9ByU6YMiD4-`,
  Jd = `xuPRLi4b2mk-`,
  Yd = `_7z0gGAzBFng-`,
  Xd = `icVMLgHBdvI-`;
function Zd(e) {
  let { option: t } = e,
    n = { appid: t.appid },
    { data: r } = I(n),
    i = ga(r),
    a = q.useCallback(() => {
      i && (window.location.href = i);
    }, [i]);
  return r
    ? (0, J.jsx)(J.Fragment, {
        children: (0, J.jsxs)(Od, {
          option: t,
          onActivate: a,
          onOKActionDescription: Z.Localize(`#AppPage_PurchaseOption_MoreInfo`),
          children: [
            (0, J.jsx)(Pd, { title: t.title }),
            (0, J.jsx)(Fd, {
              children: (0, J.jsx)(V, { size: `2`, children: t.description }),
            }),
          ],
        }),
      })
    : null;
}
function Qd(e) {
  let { discount: t } = e;
  ma({ msInterval: 1e3 });
  let n = Ln();
  if (t.discount_end_date <= n) return null;
  let r = Math.max(t.discount_end_date - n, 0),
    i = t.discount_description,
    a = Z.Localize(i, zn(r));
  return a == i
    ? null
    : (0, J.jsx)(V, { contrast: `body`, size: `2`, children: a });
}
function $d(e) {
  let { option: t } = e;
  return !t || !t.discount_pct || t.hide_discount_pct_for_compliance
    ? null
    : C.country_code == `PL`
      ? (0, J.jsx)(V, {
          size: `2`,
          children: Z.Localize(`#AppPage_Discount_Last30`),
        })
      : null;
}
function ef(e) {
  let { option: t, discount: n } = e,
    r = q.useContext(yd),
    { data: i } = I({ appid: r.appid }),
    { data: a } = I({ appid: n.master_sub_appid || 0 });
  if (!i || !a || t.discount_pct <= 0) return null;
  let o = n.discount_description,
    s = Z.Localize(o, ``, t.discount_pct || 0, a.name, i.name);
  return o == s
    ? null
    : (0, J.jsx)(V, { contrast: `body`, size: `2`, children: s });
}
function tf(e) {
  let { option: t } = e;
  if (!t) return null;
  if (t.is_free_to_keep && t.free_to_keep_ends)
    return (0, J.jsx)(V, {
      contrast: `body`,
      size: `2`,
      children: Z.Localize(
        `#AppPage_PurchaseOption_FreeToKeepDescription`,
        ln(t.free_to_keep_ends, {
          weekday: void 0,
          year: void 0,
          hour: `numeric`,
          minute: `numeric`,
        }),
      ),
    });
  if (!t?.active_discounts?.length) return null;
  let n = Ln(),
    r = t.active_discounts.reduce((e, t) =>
      t.discount_end_date != 2147483647 &&
      (!e ||
        (t.discount_end_date > n && t.discount_end_date < e.discount_end_date))
        ? t
        : e,
    ),
    i = ``;
  if (r.discount_end_date == 2147483647)
    i = (0, J.jsx)(ef, { option: t, discount: r });
  else if (
    r.discount_end_date != 2147483647 &&
    r.discount_end_date - n > 172800
  ) {
    let e = r.discount_description + `_date`;
    (i = Z.Localize(
      e,
      ln(r.discount_end_date, { weekday: void 0, year: void 0 }),
    )),
      i == e && (i = null);
  } else return (0, J.jsx)(Qd, { discount: r });
  return i ? (0, J.jsx)(V, { contrast: `body`, size: `2`, children: i }) : null;
}
function nf(e) {
  let { option: t } = e;
  return (0, J.jsxs)(J.Fragment, {
    children: [(0, J.jsx)(tf, { option: t }), (0, J.jsx)($d, { option: t })],
  });
}
var rf = `daydpfSPo4Q-`;
function af(e) {
  let { id: t } = e,
    { data: n } = I(t),
    { data: r } = Mn(t),
    { data: i } = yn(t),
    { data: a } = ge();
  if (!n || !r || !i || !a) return null;
  let o = `bundleid` in t && !i.must_purchase_as_set,
    s = r?.is_coming_soon && !!r?.advance_access_date,
    c = null,
    l,
    u;
  if (o) {
    let e = n.included_appids?.filter((e) => !a.has(e)) || [];
    e.length > 0 &&
      e.length < (n.included_appids?.length || 0) &&
      ((l = `slate-12`),
      (u = `blue-8`),
      (c = Z.Localize(`#AppPage_PurchaseOption_CompleteYourCollection`)));
  } else if (s) {
    let e = ln(r.advance_access_date, {
      weekday: void 0,
      month: `short`,
      day: `numeric`,
      year: void 0,
    });
    (l = `slate-12`),
      (u = `blue-8`),
      (c = Z.Localize(`#AppPage_AdvanceAccess_Banner`, e));
  }
  return c
    ? (0, J.jsx)(R, {
        className: rf,
        paddingX: `1`,
        background: u,
        children: (0, J.jsx)(V, {
          size: `1`,
          color: l,
          contrast: `title`,
          whiteSpace: `nowrap`,
          truncate: !0,
          children: c,
        }),
      })
    : null;
}
function of(e, t) {
  return w.STORE_ITEM_BASE_URL + e.replace("${FILENAME}", t);
}
function sf(e) {
  let { closeModal: t } = e,
    n = q.useContext(yd),
    { data: r } = I({ appid: n.appid }),
    { data: i } = U({ appid: n.appid });
  return (0, J.jsxs)(R, {
    direction: `column`,
    height: `90vh`,
    overflow: `hidden`,
    align: `center`,
    gap: `2`,
    children: [
      (0, J.jsx)(N, {
        aspectRatio: `748 / 896`,
        flexGrow: `1`,
        flexShrink: `1`,
        flexBasis: `90%`,
        overflow: `hidden`,
        children:
          r &&
          i &&
          (0, J.jsx)(Ea, {
            width: `100%`,
            src: of(i.asset_url_format, i.edition_comparison),
            alt: r.name,
          }),
      }),
      (0, J.jsx)(N, {
        flexGrow: `0`,
        flexShrink: `0`,
        children: (0, J.jsx)(L, {
          onClick: t,
          children: W.Localize(`#Button_Close`),
        }),
      }),
    ],
  });
}
var cf = new la(`PurchaseOptions`);
function lf(e) {
  let { id: t } = e,
    { data: n } = I(t);
  return n?.purchase_description_bbcode
    ? (0, J.jsx)(`div`, {
        children: (0, J.jsx)(Rd, { text: n.purchase_description_bbcode }),
      })
    : null;
}
function uf(e) {
  let { id: t } = e,
    { data: n } = Mn(t),
    { data: r } = dd();
  if (
    !n ||
    !n.advance_access_date ||
    !n.steam_release_date ||
    !r ||
    !n.is_coming_soon
  )
    return null;
  let i = `packageid` in t && r.has(t.packageid),
    a = Ln(),
    o = Dn(n.advance_access_date - a),
    s = Dn(n.steam_release_date - n.advance_access_date),
    c;
  return (
    (c =
      a > n.advance_access_date
        ? i
          ? `#AppPage_AdvanceAccess_Now_Owned`
          : `#AppPage_AdvanceAccess_Now`
        : i
          ? `#AppPage_AdvanceAccess_Starts_Owned`
          : `#AppPage_AdvanceAccess_Starts`),
    c
      ? (0, J.jsx)(V, {
          size: `2`,
          color: `blue-10`,
          children: Z.Localize(c, o, s),
        })
      : null
  );
}
function df(e) {
  let { id: t, option: n } = e,
    r = q.useContext(yd),
    { data: i } = I(t),
    { data: a } = I({ appid: r.appid }),
    { data: o } = Mn(t),
    { data: s } = dd(),
    c = Md(t),
    l = Ad(r.appid, a?.name ?? ``);
  if (!i || !a || !s) return null;
  let u = `packageid` in t && s.has(t.packageid);
  cf.Debug(i);
  let d = i.self_purchase_option?.packageid
      ? i.self_purchase_option
      : i.best_purchase_option,
    f = Z.Localize(`#AppPage_PurchaseOption_GetFreeToKeep`, a.name),
    p = u && d?.is_free_to_keep,
    m = p ? l : c,
    h = Z.Localize(
      p
        ? `#AppPage_PurchaseOption_PlayNow`
        : `#AppPage_PurchaseOption_AddToLibrary`,
    );
  return (
    cf.Debug(t, d, i),
    (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(af, { id: t }),
        (0, J.jsxs)(Od, {
          option: n,
          onActivate: m,
          onOKActionDescription: h,
          price: (0, J.jsx)(Oc, {
            id: t,
            bSelfPurchaseOption: !!i.self_purchase_option?.packageid,
          }),
          children: [
            (0, J.jsx)(Pd, { id: t, title: f, bPrepurchase: we(o, d) }),
            u &&
              (0, J.jsx)(V, {
                size: `3`,
                weight: `heavy`,
                color: `storegreen-10`,
                children: Z.Localize(`#AppPage_PurchaseOption_InLibrary`),
              }),
            (0, J.jsxs)(Fd, {
              children: [
                (0, J.jsx)(ro, {
                  id: t,
                  bSelfPurchaseOption: !!i.self_purchase_option?.packageid,
                }),
                (0, J.jsx)(uf, { id: t }),
                (0, J.jsx)(nf, { option: d }),
                (0, J.jsx)(lf, { id: t }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function ff(e) {
  let { id: t, option: n } = e,
    r = q.useContext(yd),
    { data: i } = I(t),
    { data: a } = I({ appid: r.appid }),
    { data: o } = Mn(t),
    { data: s } = dd(),
    c = Md(t),
    l = kd(n.data),
    [u, d, f] = mn(!1);
  if (!i || !a) return null;
  cf.Debug(i);
  let p = i.self_purchase_option?.packageid
    ? i.self_purchase_option
    : i.best_purchase_option;
  if (p?.is_free_to_keep) return (0, J.jsx)(df, { ...e });
  let m = n.bAvailableForFree && n.data.packageid && !s?.has(n.data.packageid),
    h = `packageid` in t && !!s?.has(t.packageid),
    g,
    _;
  n.data.is_edition &&
    ((g = d), (_ = Z.Localize(`#AppPage_PurchaseOption_CompareEditions`)));
  let v, y;
  return (
    m && ((v = c), (y = Z.Localize(`#AppPage_PurchaseOption_AddToLibrary`))),
    cf.Debug(t, p, i),
    (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(af, { id: t }),
        (0, J.jsxs)(Od, {
          option: n,
          allowTwoColumn: !0,
          onActivate: l,
          onOKActionDescription: Z.Localize(
            `#AppPage_PurchaseOption_AddToCart`,
          ),
          onSecondaryButton: g,
          onSecondaryActionDescription: _,
          onOptionsButton: v,
          onOptionsActionDescription: y,
          price: (0, J.jsx)(Oc, {
            id: t,
            bSelfPurchaseOption: !!i.self_purchase_option?.packageid,
          }),
          okIcon: (0, J.jsx)(oi, { width: `24`, height: `24` }),
          children: [
            (0, J.jsx)(Pd, { id: t, bPrepurchase: we(o, p) }),
            h &&
              (0, J.jsx)(V, {
                size: `3`,
                weight: `heavy`,
                color: `storegreen-10`,
                children: Z.Localize(`#AppPage_PurchaseOption_InLibrary`),
              }),
            (0, J.jsxs)(Fd, {
              children: [
                (0, J.jsx)(ro, {
                  id: t,
                  bSelfPurchaseOption: !!i.self_purchase_option?.packageid,
                }),
                (0, J.jsx)(uf, { id: t }),
                (0, J.jsx)(nf, { option: p }),
                (0, J.jsx)(lf, { id: t }),
              ],
            }),
          ],
        }),
        u &&
          n.data.is_edition &&
          (0, J.jsx)($e.Root, {
            onClose: f,
            children: (0, J.jsx)(sf, { closeModal: f }),
          }),
      ],
    })
  );
}
var pf = `Z88TtPWw8sg-`,
  mf = `QdwgsULLvB8-`,
  hf = `xrKGNtqGzZw-`,
  gf = `HtAI-m1hxaE-`,
  _f = `v1CdORaq5c4-`;
function vf(e) {
  let { bComingSoon: t, purchaseOption: n, className: r } = e;
  return Ce(t, n)
    ? (0, J.jsxs)(`div`, {
        className: (0, Y.default)(_f, r),
        children: [
          (0, J.jsx)(kr, {}),
          W.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
        ],
      })
    : null;
}
var yf = new la(`PurchaseOptions`);
function bf(e) {
  let { id: t, option: n } = e,
    { data: r } = I(t),
    { data: i } = U(t),
    { data: a } = ge(),
    o = kd(n.data),
    s = ga(r),
    c = q.useCallback(() => {
      s && (window.location.href = s);
    }, [s]);
  if (!r || !a) return console.warn(`Not ready`, t, r, i, a), null;
  let l = r.included_appids?.length || 0,
    u = r.included_appids?.filter((e) => !a.has(e)) || [],
    d = r.included_appids?.filter((e) => a.has(e)) || [],
    f = u.length,
    p =
      l == u.length
        ? `#AppPage_BuyThisBundle`
        : `#AppPage_BuyThisBundle_Partial`;
  return (
    u.length == 0 &&
      ((p = `#AppPage_CollectionComplete`),
      (f = r.included_appids?.length || 0)),
    yf.Debug(t, r.best_purchase_option, r),
    (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(af, { id: t }),
        (0, J.jsxs)(Od, {
          option: n,
          onActivate: o,
          onOKActionDescription: Z.Localize(
            `#AppPage_PurchaseOption_AddToCart`,
          ),
          onSecondaryButton: c,
          onSecondaryActionDescription: Z.Localize(
            `#AppPage_PurchaseOption_BundleInfo`,
          ),
          price: (0, J.jsx)(Oc, { id: t, bSelfPurchaseOption: !0 }),
          okIcon: (0, J.jsx)(oi, { width: `24`, height: `24` }),
          children: [
            (0, J.jsx)(Pd, {
              id: t,
              children: (0, J.jsxs)(V, {
                size: `3`,
                color: `blue-8`,
                children: [` `, Z.Localize(`#AppPage_PurchaseOption_Bundle`)],
              }),
            }),
            (0, J.jsxs)(Fd, {
              children: [
                (0, J.jsx)(ro, { id: t, bSelfPurchaseOption: !0 }),
                (0, J.jsxs)(R, {
                  direction: `column`,
                  flexGrow: `1`,
                  flexShrink: `1`,
                  overflow: `hidden`,
                  gap: `1`,
                  children: [
                    (0, J.jsx)(nf, { option: r.best_purchase_option }),
                    (0, J.jsxs)(R, {
                      direction: `column`,
                      flexGrow: `1`,
                      overflow: `hidden`,
                      children: [
                        (0, J.jsx)(V, {
                          size: `2`,
                          children: Z.LocalizePlural(
                            p,
                            f,
                            r.best_purchase_option?.discount_pct ||
                              r.best_purchase_option?.bundle_discount_pct ||
                              0,
                          ),
                        }),
                        (0, J.jsx)(xf, { apps: [...u, ...d], setOwnedApps: a }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function xf(e) {
  let { apps: t, setOwnedApps: n } = e,
    [r, i] = q.useState(t.length > 7 ? 6 : t.length),
    a = q.useRef(null),
    o = $r((e) => {
      if (a.current) {
        let n = e.contentRect,
          o = a.current?.getBoundingClientRect(),
          s = n.height,
          c = 0;
        for (let n of e.target.children) {
          if (n.tagName != `LI`) continue;
          let e = n.getBoundingClientRect();
          if (
            (c != t.length - 1 && e.height < s - o.height) ||
            (c == t.length - 1 && e.height < s)
          )
            c++, (s -= e.height);
          else break;
        }
        r != c && i(c), (a.current.style.opacity = c == t.length ? `0` : `1`);
      }
    });
  if (t.length == 0 || r == 0) return null;
  let s = t.length - r;
  return (0, J.jsxs)(`ul`, {
    className: pf,
    ref: o,
    children: [
      t
        .slice(0, r)
        .map((e) => (0, J.jsx)(Sf, { appid: e, bOwned: n.has(e) }, e)),
      (0, J.jsx)(V, {
        as: `div`,
        ref: a,
        size: `2`,
        children: Z.LocalizePlural(`#AppPage_AdditionalItem`, s),
      }),
    ],
  });
}
function Sf(e) {
  let { appid: t, bOwned: n } = e,
    { data: r } = I({ appid: t }),
    { data: i } = U({ appid: t }),
    a = fe({ appid: t }),
    { data: o } = U(a);
  if (!r) return null;
  let s = (i && pa(i, `community_icon`)) || (o && pa(o, `community_icon`));
  return (0, J.jsxs)(`li`, {
    className: void 0,
    children: [
      (0, J.jsx)(`div`, {
        className: gf,
        children: s && (0, J.jsx)(`img`, { src: s, alt: `` }),
      }),
      (0, J.jsxs)(`div`, {
        className: mf,
        children: [
          (0, J.jsx)(V, {
            size: `2`,
            contrast: n ? `description` : `subtitle`,
            lineClamp: n ? 1 : 2,
            className: n ? void 0 : hf,
            children: r.name,
          }),
          n &&
            (0, J.jsx)(V, {
              size: `1`,
              weight: `heavy`,
              color: `storegreen-10`,
              className: `CB48yfyQmdY-`,
              children: Si(`in_library`),
            }),
          !n &&
            (0, J.jsx)(vf, {
              bComingSoon: r.is_coming_soon,
              purchaseOption: r.best_purchase_option,
              className: `cPaT47Ow46o-`,
            }),
        ],
      }),
    ],
  });
}
function Cf(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t });
  return (0, J.jsx)(hn, {
    storeItem: n,
    children: (0, J.jsx)(rt, { size: `2`, children: n?.name }),
  });
}
function wf(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t });
  return n
    ? (0, J.jsx)(`li`, { children: (0, J.jsx)(Cf, { appid: t }) })
    : null;
}
function Tf(e) {
  let {
    appid: t,
    strLocTagTitle: n,
    strLocTagBody: r,
    rgAppidParent: i,
    color: a,
  } = e;
  return (0, J.jsx)(de, {
    children: (0, J.jsxs)(R, {
      background: a,
      direction: `column`,
      padding: `3`,
      children: [
        (0, J.jsx)(nt, { size: `5`, children: Z.Localize(n) }),
        i.length == 1 &&
          (0, J.jsx)(V, {
            children: Z.LocalizeReact(r, (0, J.jsx)(Cf, { appid: i[0] })),
          }),
        i.length > 1 &&
          (0, J.jsxs)(J.Fragment, {
            children: [
              (0, J.jsx)(V, {
                children: Z.Localize(`#AppPage_DLCWarning_OneOf`),
              }),
              (0, J.jsx)(`ul`, {
                className: `ziEcggOwN8E-`,
                children: i.map((e) => (0, J.jsx)(wf, { appid: e }, e)),
              }),
            ],
          }),
      ],
    }),
  });
}
function Ef(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t });
  return !n ||
    n.type != 11 ||
    !n.related_items?.parent_appid ||
    n.related_items.parent_appid == 0
    ? null
    : (0, J.jsx)(Tf, {
        appid: t,
        strLocTagTitle: `#AppPage_DLCWarning_Title_Soundtrack`,
        strLocTagBody: `#AppPage_DLCWarning_Soundtrack`,
        rgAppidParent: [n.related_items.parent_appid],
        color: `crimson-7`,
      });
}
function Df(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t });
  return !n || n.type != 4 || !n.related_items?.parent_appid
    ? null
    : (0, J.jsx)(Of, { appid: t, appidParent: n.related_items.parent_appid });
}
function Of(e) {
  let { appid: t, appidParent: n } = e,
    { data: r } = I({ appid: t }),
    { data: i } = I({ appid: n });
  if (!r || !i || r.type != 4) return null;
  let a =
      i && i.type == 6 ? `#AppPage_DLCWarning_Software` : `#AppPage_DLCWarning`,
    o = r.related_items?.dlc_parent_appids?.length
      ? r.related_items?.dlc_parent_appids
      : [n];
  return (0, J.jsx)(Tf, {
    appid: t,
    strLocTagTitle: `#AppPage_DLCWarning_Title`,
    strLocTagBody: a,
    rgAppidParent: o,
    color: `purple-7`,
  });
}
function kf(e) {
  let { appid: t } = e;
  return (0, J.jsxs)(J.Fragment, {
    children: [(0, J.jsx)(Ef, { appid: t }), (0, J.jsx)(Df, { appid: t })],
  });
}
var Af = `ph-l5g0kZSw-`,
  jf = wr(function (e) {
    let { appid: t, bAllowRemove: n, children: r, color: i, width: a } = e,
      o = qr(),
      { data: s } = Nc(t),
      c = Fc(t),
      [l, u, d] = mn();
    (0, q.use)(W.Ready());
    let f = !!o;
    if (f && !s) return null;
    let p = f && !!s?.wishlist;
    if (p && !n) return null;
    let m = () => {
        c.mutateAsync({ wishlist: !p, old_interest: s });
      },
      h = p ? `#RemoveFromWishlist_ttip` : `#AddToWishlist_ttip`,
      g = p ? `#Wishlisted` : `#AddToYourWishlist`;
    return (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(Hn, {
          toolTipContent: W.Localize(h),
          children: (0, J.jsx)(L, {
            color: i,
            width: a,
            onClick: f ? m : u,
            children: r ? r(p) : W.Localize(g),
          }),
        }),
        !f && (0, J.jsx)(Mf, { active: l, closeModal: d }),
      ],
    });
  });
function Mf(e) {
  let { active: t, closeModal: n } = e,
    { fnOpenInSteamClient: r } = tt();
  return (
    (0, q.use)(Z.Ready()),
    (0, J.jsx)(zi, {
      active: t,
      children: (0, J.jsxs)(Sn, {
        strTitle: Z.Localize(`#OpenInDesktopAppBanner_NotSignedIn`),
        className: Af,
        strDescription: Z.Localize(`#Wishlist_NotSignedIn`),
        closeModal: n,
        bAlertDialog: !0,
        children: [
          (0, J.jsxs)(R, {
            direction: `row`,
            gap: `4`,
            paddingTop: `4`,
            paddingBottom: `4`,
            children: [
              (0, J.jsx)(L, {
                onClick: r,
                children: Z.Localize(`#OpenInDesktopAppBanner_OpenAppButton`),
              }),
              (0, J.jsx)(L, {
                color: `dull`,
                onClick: Je,
                children: W.Localize(`#Login_SignIn`),
              }),
            ],
          }),
          (0, J.jsx)(V, {
            children: br(
              W.Localize(`#GotSteam_NeedSteam`),
              (0, J.jsx)(b, { href: `${w.STORE_BASE_URL}about` }),
            ),
          }),
        ],
      }),
    })
  );
}
var Nf = `S2ZtHPkA12w-`,
  Pf = `Exw0IX9gJwM-`;
function Ff(e) {
  let { id: t } = e,
    { data: n } = _r(t);
  if (!n) return null;
  let r = [];
  return (
    n.windows &&
      r.push(
        (0, J.jsx)(
          `div`,
          { className: Pf, children: (0, J.jsx)(ci, {}) },
          `windows`,
        ),
      ),
    n.mac &&
      r.push(
        (0, J.jsx)(
          `div`,
          { className: Pf, children: (0, J.jsx)(Kn, {}) },
          `mac`,
        ),
      ),
    n.steamos_linux &&
      r.push(
        (0, J.jsx)(
          `div`,
          { className: Pf, children: (0, J.jsx)(gr, {}) },
          `steamos`,
        ),
      ),
    r.length == 0 ? null : (0, J.jsx)(`div`, { className: Nf, children: r })
  );
}
var If = `LaubUPuY3d4-`,
  Lf = `lZ9pdXM8A8A-`,
  Rf = `_5Cbjgxcp8Y0-`,
  zf = `COQBeBty-xk-`,
  Bf = `ol4losGCoN4-`,
  Vf = `ZJ9z1gfeIYY-`;
function Hf(e, t) {
  if (t) return `#AppPage_ComingSoon_UnlocksIn_Software`;
  switch (e) {
    case 7:
      return `#AppPage_ComingSoon_UnlocksIn_Video`;
    case 8:
      return `#AppPage_ComingSoon_UnlocksIn_Series`;
    case 4:
      return `#AppPage_ComingSoon_UnlocksIn_DLC`;
    default:
      return `#AppPage_ComingSoon_UnlocksIn`;
  }
}
function Uf(e, t) {
  return t
    ? e.custom_release_date_message
      ? e.custom_release_date_message
      : e.steam_release_date
        ? ur(e.steam_release_date)
        : ``
    : ``;
}
function Wf(e, t, n) {
  return e ? e != `date_full` : t ? !0 : !n;
}
function Gf(e) {
  let {
      appid: t,
      bHasPrePurchaseSub: n,
      bGetsSoftwareTreatment: r,
      bShowReleaseDateIfComingSoon: i,
      strOffsitePrice: a,
      preload: o,
    } = e,
    { data: s } = I({ appid: t }),
    { data: c } = Mn({ appid: t }),
    l = ye(c);
  if (!s || !c) return null;
  let u = c.coming_soon_display,
    d = c.steam_release_date,
    f = !!d && d < Ln(),
    p = u == `text_comingsoon` || u == `text_tba`,
    m = u != `text_comingsoon`,
    h = s.type == 4,
    g = u ? l : Uf(c, i),
    _ = !!g,
    v = n && !p && _,
    y = !f && !!d && !Wf(u, c.custom_release_date_message, i);
  return (0, J.jsxs)(de, {
    children: [
      (0, J.jsxs)(R, {
        direction: `row`,
        className: If,
        children: [
          (0, J.jsxs)(R, {
            direction: `column`,
            className: Lf,
            children: [
              f &&
                (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsx)(nt, {
                      size: `5`,
                      children: Z.Localize(`#AppPage_ComingSoon_Title`),
                    }),
                    (0, J.jsx)(V, {
                      size: `2`,
                      color: `greyneutral-11`,
                      children: Z.Localize(
                        `#AppPage_ComingSoon_ReleaseDatePassed`,
                      ),
                    }),
                  ],
                }),
              !f &&
                v &&
                (0, J.jsx)(nt, {
                  size: `5`,
                  children: Z.Localize(`#AppPage_ComingSoon_ReleasesOn`, g),
                }),
              !f &&
                !v &&
                (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsx)(V, {
                      size: `2`,
                      color: `greyneutral-11`,
                      children: Z.Localize(
                        h
                          ? `#AppPage_ComingSoon_NotYetAvailable_DLC`
                          : `#AppPage_ComingSoon_NotYetAvailable`,
                      ),
                    }),
                    _ &&
                      (0, J.jsxs)(nt, {
                        size: `5`,
                        children: [
                          m &&
                            `${Z.Localize(`#AppPage_ComingSoon_IntendedRelease`)}: `,
                          g,
                        ],
                      }),
                  ],
                }),
              y &&
                (0, J.jsx)(V, {
                  size: `2`,
                  children: Z.Localize(
                    Hf(s.type, r),
                    Vi(d - Ln(), { eSuffix: Tn.None }),
                  ),
                }),
              a &&
                (0, J.jsx)(V, {
                  size: `3`,
                  weight: `heavy`,
                  className: `RaX5EvP-nV0-`,
                  children: a,
                }),
            ],
          }),
          !n && (0, J.jsx)(Kf, { appid: t }),
        ],
      }),
      o && (0, J.jsx)(qf, { appid: t, preload: o }),
    ],
  });
}
function Kf(e) {
  let { appid: t } = e,
    { data: n } = Nc(t);
  if (!n) return null;
  let r = n.wishlist;
  return (0, J.jsxs)(R, {
    direction: `column`,
    className: Rf,
    children: [
      (0, J.jsxs)(R, {
        direction: `column`,
        className: zf,
        children: [
          r &&
            (0, J.jsx)(V, {
              size: `2`,
              children: Z.Localize(`#AppPage_ComingSoon_WishlistReminder_On`),
            }),
          !r &&
            (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(V, {
                  size: `2`,
                  children: Z.Localize(`#AppPage_ComingSoon_WishlistPrompt`),
                }),
                (0, J.jsx)(V, {
                  size: `2`,
                  children: Z.Localize(`#AppPage_ComingSoon_WishlistReminder`),
                }),
              ],
            }),
        ],
      }),
      r &&
        (0, J.jsx)(b, {
          href: `${w.STORE_BASE_URL}wishlist/`,
          children: Z.Localize(`#AppPage_ComingSoon_ViewWishlist`),
        }),
      !r && (0, J.jsx)(jf, { appid: t, color: `storegreen` }),
    ],
  });
}
function qf(e) {
  let { appid: t, preload: n } = e,
    { subidFreeOnDemand: r, bOwnedPermanent: i } = n,
    { data: a } = I({ appid: t }),
    o = qr(),
    s = Ad(a?.free_weekend?.appid ?? t, a?.name ?? ``);
  if (!a) return null;
  let c = !!o && !!r && !i;
  return (0, J.jsxs)(R, {
    direction: `column`,
    className: Bf,
    children: [
      (0, J.jsx)(Ff, { id: { appid: t } }),
      (0, J.jsx)(nt, {
        size: `5`,
        children: Z.Localize(`#AppPage_ComingSoon_PreloadTitle`, a.name),
      }),
      (0, J.jsxs)(R, {
        direction: `row`,
        className: Vf,
        children: [
          (0, J.jsx)(L, {
            onClick: s,
            children: Z.Localize(`#AppPage_ComingSoon_PreloadButton`),
          }),
          c && (0, J.jsx)(Jf, { subid: r }),
        ],
      }),
    ],
  });
}
function Jf(e) {
  let t = Md({ packageid: e.subid });
  return (0, J.jsx)(L, {
    color: `greyneutral`,
    onClick: t,
    children: Z.Localize(`#AppPage_ComingSoon_AddToLibrary`),
  });
}
var Yf = `ZFPORaHJPdc-`,
  Xf = !1,
  Zf = `orange-8`,
  Qf = `faqs/view/7451-A8FE-3867-6A2E`,
  $f = `kb_article.php?ref=1055-ISJM-8568`,
  ep = `https://support.apple.com/en-us/HT211814`,
  tp = {
    1: `#AppPage_PurchaseNote_Type_Notice`,
    2: `#AppPage_PurchaseNote_Type_LowViolence`,
    3: `#AppPage_PurchaseNote_Type_CreditCardRequired`,
    4: `#AppPage_PurchaseNote_Type_SystemRequirements`,
  };
function np(e) {
  let {
    appid: t,
    bUnsupportedLanguage: n,
    bAdminExcludedFromDiscovery: r,
    bRetired: i,
    bMac64BitNotice: a,
    bMacAppleSiliconNotice: o,
    b360Video: s,
  } = e;
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(ap, { appid: t }),
      (n || Xf) && (0, J.jsx)(op, {}),
      (r || Xf) && (0, J.jsx)(sp, { appid: t }),
      (0, J.jsx)(cp, {
        appid: t,
        bRetired: i || Xf,
        bMac64BitNotice: a || Xf,
        bMacAppleSiliconNotice: o || Xf,
      }),
      (0, J.jsx)(dp, { appid: t }),
      (0, J.jsx)(fp, { appid: t, b360Video: s }),
    ],
  });
}
function rp(e) {
  let { title: t, bHighlight: n, children: r } = e;
  return (0, J.jsx)(de, {
    children: (0, J.jsxs)(R, {
      background: n ? `sky-4` : void 0,
      borderColor: n ? void 0 : Zf,
      direction: `column`,
      gap: `2`,
      padding: n ? `4` : `3`,
      marginBottom: `3`,
      children: [
        t &&
          (0, J.jsx)(nt, {
            size: `4`,
            weight: `heavy`,
            color: n ? void 0 : Zf,
            children: t,
          }),
        r,
      ],
    }),
  });
}
function ip(e) {
  let [t, n] = q.useState(!1);
  return (
    q.useEffect(() => {
      if (e != `secureboot_tpm2` || !Yn(`Compat.CheckBootProtectionEnabled`))
        return;
      let t = !1;
      return (
        SteamClient.Compat.CheckBootProtectionEnabled(`2`, !0).then((e) => {
          t || n(!e);
        }),
        () => {
          t = !0;
        }
      );
    }, [e]),
    t
  );
}
function ap(e) {
  let { appid: t } = e,
    { data: n } = S({ appid: t }),
    r = n?.anticheat;
  return ip(r?.boot_protection ? r.boot_protection_name : void 0)
    ? (0, J.jsx)(rp, {
        title: Z.Localize(`#AppPage_PurchaseNote_BootProtection_Title`),
        children: (0, J.jsx)(V, {
          children: K(
            Z.Localize(`#AppPage_PurchaseNote_BootProtection`),
            (0, J.jsx)(b, { href: `${w.HELP_BASE_URL}${Qf}`, color: `blue-8` }),
          ),
        }),
      })
    : null;
}
function op() {
  return (0, J.jsxs)(rp, {
    title: Z.Localize(
      `#AppPage_PurchaseNote_UnsupportedLanguage_Title`,
      O(`#Language_${w.LANGUAGE}`),
    ),
    children: [
      (0, J.jsx)(V, {
        children: Z.Localize(`#AppPage_PurchaseNote_UnsupportedLanguage`),
      }),
      C.logged_in &&
        (0, J.jsx)(V, {
          children: K(
            Z.Localize(`#AppPage_PurchaseNote_UnsupportedLanguage_Change`),
            (0, J.jsx)(b, {
              href: `${w.STORE_BASE_URL}account/preferences`,
              color: `blue-8`,
            }),
          ),
        }),
    ],
  });
}
function sp(e) {
  let { appid: t } = e;
  return (0, J.jsx)(rp, {
    bHighlight: !0,
    children: (0, J.jsx)(V, {
      size: `4`,
      color: `sky-11`,
      children: K(
        Z.Localize(`#AppPage_PurchaseNote_ExcludedFromDiscovery`),
        (0, J.jsx)(V, { size: `5`, weight: `medium`, contrast: `title` }),
        (0, J.jsx)(V, { color: `valveonly-7` }),
        (0, J.jsx)(b, {
          href: `${w.PARTNER_BASE_URL}apps/landing/${t}`,
          target: `_blank`,
          color: `blue-8`,
        }),
      ),
    }),
  });
}
function cp(e) {
  let {
      appid: t,
      bRetired: n,
      bMac64BitNotice: r,
      bMacAppleSiliconNotice: i,
    } = e,
    { data: a } = I({ appid: t });
  if (!a) return null;
  let o = (0, J.jsx)(up, {
      strType: Z.Localize(`#AppPage_PurchaseNote_Type_Notice`),
    }),
    s;
  return (
    n
      ? (s = Z.Localize(`#AppPage_PurchaseNote_Retired`, a.name ?? ``))
      : a.unlisted &&
        (s = Z.Localize(`#AppPage_PurchaseNote_Unlisted`, a.name ?? ``)),
    (0, J.jsxs)(J.Fragment, {
      children: [
        s && (0, J.jsx)(rp, { children: (0, J.jsxs)(V, { children: [o, s] }) }),
        Xf,
        r &&
          (0, J.jsx)(rp, {
            children: (0, J.jsxs)(V, {
              children: [
                o,
                K(
                  Z.Localize(`#AppPage_PurchaseNote_Mac64Bit`),
                  (0, J.jsx)(b, {
                    href: `${w.SUPPORT_BASE_URL}${$f}`,
                    color: `blue-8`,
                  }),
                ),
              ],
            }),
          }),
        i &&
          (0, J.jsx)(rp, {
            children: (0, J.jsxs)(V, {
              children: [
                o,
                K(
                  Z.Localize(`#AppPage_PurchaseNote_MacAppleSilicon`),
                  (0, J.jsx)(b, { href: ep, color: `blue-8` }),
                ),
              ],
            }),
          }),
      ],
    })
  );
}
function lp(e) {
  let { note: t } = e,
    { type: n, highlighted: r, text_bbcode: i } = t;
  if (!i) return null;
  let a = i,
    o = n === void 0 ? void 0 : tp[n];
  return (
    o &&
      (a = `[b][color=var(--color-${Zf})][noparse]${Z.Localize(`#AppPage_PurchaseNote_TypeLabel`, Z.Localize(o))}[/noparse][/color][/b] ${i}`),
    (0, J.jsx)(rp, {
      bHighlight: !!r,
      children: (0, J.jsx)(V, {
        as: `div`,
        size: r ? `4` : void 0,
        color: r ? `sky-11` : void 0,
        children: (0, J.jsx)(ot, { text: a }),
      }),
    })
  );
}
function up(e) {
  let { strType: t } = e;
  return (0, J.jsx)(V, {
    weight: `heavy`,
    color: Zf,
    marginRight: `1`,
    children: Z.Localize(`#AppPage_PurchaseNote_TypeLabel`, t),
  });
}
function dp(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t }),
    { data: r } = gn({ appid: t }),
    i = r?.purchase_notes;
  return !n || !i?.length || n.type == 2
    ? null
    : (0, J.jsx)(J.Fragment, {
        children: i.map((e, t) => (0, J.jsx)(lp, { note: e }, t)),
      });
}
function fp(e) {
  let { appid: t, b360Video: n } = e,
    { data: r } = _r({ appid: t }),
    { data: i } = S({ appid: t }),
    a = r?.vr_support,
    o;
  return (
    a?.vrhmd_only && !n
      ? (o = ko.EPurchaseNoticeType_VRRequired)
      : i?.no_mouse_keyboard_support
        ? (o = ko.EPurchaseNoticeType_ControllerRequired)
        : a?.vrhmd &&
          a.show_optional_vr_mode_notice &&
          (o = ko.EPurchaseNoticeType_VRSupported),
    o === void 0
      ? null
      : (0, J.jsx)(de, { children: (0, J.jsx)(Ao, { appid: t, type: o }) })
  );
}
function pp(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t }),
    { data: r } = gn({ appid: t }),
    i = fr(`${w.STORE_BASE_URL}about/communitymods/`),
    a = r?.purchase_notes;
  return !n || n.type != 2 || !a?.[0]?.text_bbcode
    ? null
    : (0, J.jsxs)(J.Fragment, {
        children: [
          (0, J.jsx)(de, {
            children: (0, J.jsxs)(R, {
              className: Yf,
              direction: `column`,
              gap: `2`,
              paddingX: `4`,
              paddingY: `3`,
              marginBottom: `3`,
              children: [
                (0, J.jsx)(nt, {
                  size: `6`,
                  weight: `heavy`,
                  contrast: `title`,
                  children: Z.Localize(`#AppPage_PurchaseNote_Mod_Title`),
                }),
                (0, J.jsx)(V, {
                  as: `div`,
                  contrast: `subtitle`,
                  children: (0, J.jsx)(ot, { text: a[0].text_bbcode }),
                }),
                (0, J.jsx)(V, {
                  contrast: `subtitle`,
                  children: K(
                    Z.Localize(`#AppPage_PurchaseNote_Mod_LearnMore`),
                    (0, J.jsx)(b, {
                      href: i,
                      color: `text-body`,
                      contrast: `subtitle`,
                      underline: `always`,
                    }),
                  ),
                }),
              ],
            }),
          }),
          a.slice(1).map((e, t) => (0, J.jsx)(lp, { note: e }, t)),
        ],
      });
}
var mp = new la(`PurchaseOptions`);
function hp(e) {
  let {
      appid: t,
      rgOwnedApps: n,
      rgOwnedPackages: r,
      playtestStatus: i,
      rgFreePackagesAvailable: a,
      strAccountTypeDescription: o,
      comingSoon: s,
      purchaseNotes: c,
    } = e,
    l = Pe(!0),
    u = hd(),
    d = Ba(),
    [f, p] = q.useState(!1);
  return (
    q.useEffect(() => {
      mp.Debug(`Initializing PurchaseOptions`),
        mp.Debug(`rgOwnedApps`, n),
        mp.Debug(`rgActiveLicenses`, r),
        mp.Debug(`playtestStatus`, i),
        mp.Debug(`rgFreePackagesAvailable`, a),
        mp.Debug(`strAccountTypeDescription`, o),
        l(n),
        u(r),
        p(!0);
    }, [t, r, n, i, l, u, d, a, o]),
    q.use(Z.Ready()),
    q.use(W.Ready()),
    f
      ? (0, J.jsx)(q.Suspense, {
          children: (0, J.jsx)(_p, {
            appid: t,
            rgPackagesAvailableForFree: a,
            strAccountTypeDescription: o,
            comingSoon: s,
            purchaseNotes: c,
          }),
        })
      : null
  );
}
function gp(e, t, n) {
  let { data: r } = I({ appid: e }),
    { data: i } = gn({ appid: e }),
    { data: a } = ge(),
    o = _d(e),
    s = i?.purchase_options;
  return (
    mp.Debug(s),
    q.useMemo(() => {
      if (!r || !s || !a) return null;
      let n = r.is_free && !r.is_free_temporarily,
        c = Ln(),
        l =
          r.free_weekend &&
          (r.free_weekend.start_time || 0) <= c &&
          (r.free_weekend.end_time || 0) > c,
        u = new Set(t),
        d = [];
      if (!n) {
        if (a.has(e)) d.push({ type: `play` });
        else {
          let e = (i.purchase_options || [])
            .map((e) => e.free_with_master_sub_appid)
            .filter((e) => !!e);
          mp.Debug(e);
          for (let t of e)
            if (t && a.has(t)) {
              d.push({ type: `play`, appidMasterSub: t });
              break;
            }
        }
      }
      let f = new Set(),
        p = new Set(
          (r.related_items?.standalone_demos || []).map((e) => e.appid),
        );
      for (let e of r.related_items?.demos?.filter(
        (e) => e.show_above_purchase,
      ) || [])
        f.has(e.appid) ||
          (d.push({
            type: `demo`,
            appid: e.appid,
            label: e.label,
            bStandalone: p.has(e.appid),
          }),
          f.add(e.appid));
      (n || l) && d.push({ type: `free` });
      let m = new Map();
      for (let e of i.package_groups || [])
        m.set(e.name, { id: e.name, package_group: e, items: [] });
      let h = !!r.related_items?.related_f2p,
        g = new Set(
          s.map((e) => e.free_to_keep_base_package).filter((e) => !!e),
        );
      for (let e of s)
        e.is_free_license &&
          !e.package_group &&
          (d.push({
            type: `item`,
            data: e,
            bAvailableForFree: !!e.packageid && u.has(e.packageid),
          }),
          g.add(e.packageid));
      let _;
      for (let e of s)
        if (!g.has(e.packageid) && !(e.packageid && o.has(e.packageid))) {
          if (h && !e.is_edition && r.related_items) {
            let e = r.related_items.related_f2p;
            d.push({
              type: `related`,
              appid: e.appid,
              title: e.header_text,
              description: e.description_text,
            }),
              (h = !1);
          }
          e.package_group !== _?.id &&
            (e.package_group
              ? ((_ = m.get(e.package_group)),
                _?.package_group.display_type == 1 &&
                  d.push({ type: `dropdown`, data: _ }))
              : (_ = void 0)),
            _ && _?.package_group.display_type == 1
              ? _.items.push(e)
              : d.push({
                  type: `item`,
                  data: e,
                  bAvailableForFree: !!e.packageid && u.has(e.packageid),
                });
        }
      return mp.Debug(m), d;
    }, [e, r, i, s, a, t, o])
  );
}
function _p(e) {
  let {
      appid: t,
      rgPackagesAvailableForFree: n,
      strAccountTypeDescription: r,
      comingSoon: i,
      purchaseNotes: a,
    } = e,
    { data: o } = I({ appid: t }),
    s = gp(t, n, r),
    c = q.useRef(null),
    l = q.useCallback((e) => {
      e.data?.method == `FocusPurchaseOptions` &&
        (c.current?.NavTree().Activate(), c.current?.TakeFocus(Nr.OK));
    }, []);
  return (
    q.useEffect(
      () => (
        window.addEventListener(`message`, l),
        () => window.removeEventListener(`message`, l)
      ),
      [l],
    ),
    !o || !s
      ? (mp.Warning(`Not ready`, t), null)
      : (mp.Debug(o),
        mp.Debug(s),
        (0, J.jsx)(yd.Provider, {
          value: { appid: t, nOptions: s.length },
          children: (0, J.jsx)(Cd, {
            children: (0, J.jsxs)(F, {
              className: qd,
              navEntryPreferPosition: Ri.PREFERRED_CHILD,
              navRef: c,
              children: [
                i && (0, J.jsx)(Gf, { appid: t, ...i }),
                (0, J.jsx)(np, { appid: t, ...a }),
                (0, J.jsx)(kf, { appid: t }),
                (0, J.jsx)(pp, { appid: t }),
                s.length > 0 &&
                  (0, J.jsxs)(J.Fragment, {
                    children: [
                      (0, J.jsx)(de, {
                        children: (0, J.jsx)(V, {
                          size: `3`,
                          contrast: `title`,
                          weight: `heavy`,
                          children: Z.Localize(
                            `#AppPage_PurchaseOptions_Title`,
                          ),
                        }),
                      }),
                      s.length > 2 && (0, J.jsx)(yp, { options: s }),
                      s.length <= 2 &&
                        (0, J.jsxs)(F, {
                          className: D(
                            `xuPRLi4b2mk-`,
                            s.length <= 2 && `EhRuAtUzTdM-`,
                            s.length == 1 && `RTybnTPHSD0-`,
                          ),
                          preferredFocus: !0,
                          children: [
                            s.length <= 2 && (0, J.jsx)(vp, { option: s[0] }),
                            s.length == 2 && (0, J.jsx)(vp, { option: s[1] }),
                          ],
                        }),
                    ],
                  }),
              ],
            }),
          }),
        }))
  );
}
function vp(e) {
  let { option: t } = e,
    n = null;
  switch (t.type) {
    case `item`:
      n = t.data.packageid
        ? (0, J.jsx)(ff, { id: ld(t.data), option: t })
        : (0, J.jsx)(bf, { id: ld(t.data), option: t });
      break;
    case `dropdown`:
      n = (0, J.jsx)(Ud, { option: t });
      break;
    case `demo`:
      n = (0, J.jsx)(Id, { option: t });
      break;
    case `free`:
      n = (0, J.jsx)(Ld, { option: t });
      break;
    case `play`:
      n = (0, J.jsx)(Gd, { option: t, appidMasterSub: t.appidMasterSub });
      break;
    case `playtest`:
      n = (0, J.jsx)(Kd, {
        option: t,
        appidPlaytest: t.appidPlaytest,
        bIsOpen: t.bIsOpen,
      });
      break;
    case `related`:
      n = (0, J.jsx)(Zd, { option: t });
  }
  return n ? (0, J.jsx)(`div`, { className: Xd, children: n }) : null;
}
function yp(e) {
  let { options: t } = e,
    n = `purchase_options`,
    [r, i] = ne(n),
    a = q.useCallback(
      (e, n, r, i) => {
        let a = t[e];
        return (0, J.jsx)(`div`, {
          style: { width: n, height: r },
          children: (0, J.jsx)(vp, { option: a }),
        });
      },
      [t],
    ),
    o = q.useCallback(() => 256, [256]),
    s = q.useCallback(
      (e) => {
        let n = t[e];
        switch (n.type) {
          case `item`:
            return ud(n.data);
          case `dropdown`:
            return `dropdown_package_group_` + n.data.id;
          case `demo`:
            return `demo_` + n.appid;
          case `free`:
            return `free`;
          case `playtest`:
            return `playtest_` + n.appidPlaytest;
          case `play`:
            return `play_` + n.appidMasterSub;
          case `related`:
            return `related_` + n.appid;
          default:
            return Ui(!1, `Unknown purchase option type`, n.type), `unknown`;
        }
      },
      [t],
    );
  return t.length == 0
    ? null
    : (0, J.jsx)(F, {
        className: D(Jd, r != 0 && void 0),
        preferredFocus: !0,
        children: (0, J.jsx)(h, {
          name: n,
          "aria-label": Z.Localize(`#AppPage_PurchaseOptions_Title`),
          className: D(Yd, `PurchaseOptions`),
          focusedColumn: r,
          setFocusedColumn: i,
          nNumItems: t.length,
          nHeight: 282.6666666666667,
          nItemHeight: 256 / 0.96,
          nItemMarginX: 8,
          fnGetColumnWidth: o,
          fnGetId: s,
          fnItemRenderer: a,
          scrollToAlignment: `center`,
        }),
      });
}
var bp = q.lazy(() =>
  E(
    () => import(`./cartmodal.js`),
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42,
    ]),
    import.meta.url,
  ),
);
function xp(e) {
  let { rgPackageIDs: t, strButtonToken: n } = e,
    [r, i] = q.useState(void 0),
    a = t.map((e) => ({ packageid: e })),
    { mutate: o, isPending: s } = Ee(a),
    { data: c } = xi(),
    l = c !== void 0 && t.length > 0 && t.every((e) => $n(c, e, void 0)),
    u = q.useCallback(() => i(void 0), []),
    d = q.useCallback(() => {
      o(void 0, { onSuccess: (e) => i(e) });
    }, [o]);
  return t.length == 0
    ? null
    : (0, J.jsxs)(J.Fragment, {
        children: [
          r &&
            (0, J.jsx)(q.Suspense, {
              children: (0, J.jsx)(bp, { lineItemIDs: r, closeCart: u }),
            }),
          l
            ? (0, J.jsx)(aa, {
                navProps: { preferredFocus: !0 },
                color: `storegreen`,
                focusable: !0,
                href: `${w.STORE_BASE_URL}cart/`,
                children: zr.Localize(`#AddToCartButton_InCart`),
              })
            : (0, J.jsx)(L, {
                navProps: { preferredFocus: !0 },
                color: `storegreen`,
                disabled: s,
                onClick: d,
                children: Z.Localize(n),
              }),
        ],
      });
}
function Sp(e, t, n = { style: `long`, type: `conjunction` }) {
  let r = new Intl.ListFormat(An.GetPreferredLocales(), n)
    .formatToParts(e.map((e, t) => t.toString()))
    .map((n) => {
      if (n.type === `literal`) return n.value;
      let r = Number.parseInt(n.value);
      return t(e[r], r);
    });
  return q.createElement(q.Fragment, null, ...r);
}
var Cp = `17px`;
function wp(e) {
  let {
    overhang: t = Cp,
    marginTop: n,
    marginBottom: r,
    buttonBarContents: i,
    children: a,
  } = e;
  return (0, J.jsxs)(st, {
    columns: `1fr`,
    rows: `auto ${t}`,
    marginTop: n,
    marginBottom: r,
    children: [a, (0, J.jsx)(Tp, { children: i })],
  });
}
function Tp(e) {
  let { children: t } = e;
  return (0, J.jsx)(R, {
    marginX: `4`,
    alignSelf: `end`,
    justify: `end`,
    gap: `1`,
    zIndex: `1`,
    gridColumn: `1`,
    gridRow: `1 / -1`,
    navProps: { navEntryPreferPosition: Ri.PREFERRED_CHILD },
    children: t,
  });
}
var Ep = `cku-GdzVICA-`,
  Dp = `_6TIp2KPRETQ-`,
  Op = `VT02nkpSHRw-`,
  kp = 6,
  Ap = 5,
  jp = 135;
function Mp(e) {
  let { appid: t, rgOptions: n } = e;
  return (0, J.jsx)(J.Fragment, {
    children: n.map((e) =>
      (0, J.jsx)(Np, { appid: t, option: e }, e.packageid),
    ),
  });
}
function Np(e) {
  let { appid: t, option: n } = e,
    r = n.packageid,
    { data: i } = I({ appid: t }),
    { data: a } = I({ packageid: r }),
    { data: o } = dd(),
    s = q.useMemo(() => {
      let e = new Map();
      for (let t of i?.included_items?.included_apps || [])
        t.id && e.set(t.id, t);
      return (a?.included_appids || []).map((t) => e.get(t)).filter((e) => !!e);
    }, [i, a]);
  if (!a) return null;
  let c = !!o?.has(r),
    l = !!a.purchase_description_bbcode,
    u = s.slice(0, kp);
  return (0, J.jsx)(wp, {
    marginBottom: `4`,
    buttonBarContents: (0, J.jsx)(Pp, { pkg: a, option: n }),
    children: (0, J.jsxs)(N, {
      position: `relative`,
      gridRow: `1`,
      gridColumn: `1`,
      padding: `4`,
      paddingTop: `2`,
      paddingBottom: `5`,
      radius: `md`,
      className: Ep,
      children: [
        c &&
          (0, J.jsx)(R, {
            align: `center`,
            gap: `1`,
            position: `absolute`,
            inset: `-8px auto auto 6px`,
            paddingX: `1`,
            className: `imw--3EwnYA-`,
            children: Si(`in_library`),
          }),
        (0, J.jsxs)(R, {
          justify: `between`,
          align: `center`,
          children: [
            (0, J.jsx)(V, {
              size: `5`,
              children: Z.Localize(
                `#AppPage_Dropdown_DefaultTitle`,
                n.purchase_option_name || a.name || ``,
              ),
            }),
            (0, J.jsx)(N, {
              marginBottom: `1`,
              children: (0, J.jsx)(Ff, { id: { packageid: r } }),
            }),
          ],
        }),
        !l && s.length > 1 && (0, J.jsx)(Ip, { rgApps: s }),
        u.length > 1 &&
          (0, J.jsx)(N, {
            position: `relative`,
            padding: `2`,
            className: `M8ovBxzctW4-`,
            children: (0, J.jsx)(N, {
              className: D(`j-L8So7bl4k-`, u.length >= Ap && `_75AeATqFH6w-`),
              children: u.map((e, t) =>
                (0, J.jsx)(Lp, { appid: e.id, zIndex: 10 - t }, e.id),
              ),
            }),
          }),
      ],
    }),
  });
}
function Pp(e) {
  let { pkg: t, option: n } = e,
    r = q.useMemo(() => [n.packageid], [n.packageid]);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(Fp, {
        children: (0, J.jsx)(aa, {
          focusable: !0,
          href: Ye(t),
          children: Z.Localize(`#AppPage_PurchaseOption_MoreInfo`),
        }),
      }),
      (0, J.jsxs)(Fp, {
        children: [
          (0, J.jsx)(Ur, { purchaseOption: n }),
          (0, J.jsx)(xp, {
            rgPackageIDs: r,
            strButtonToken: `#AppPage_PurchaseOption_AddToCart`,
          }),
        ],
      }),
    ],
  });
}
function Fp(e) {
  let { children: t } = e;
  return (0, J.jsx)(R, {
    align: `center`,
    gap: `1`,
    zIndex: `1`,
    className: Op,
    children: t,
  });
}
function Ip(e) {
  let { rgApps: t } = e,
    [n, r] = q.useState(!1),
    i = q.useCallback(() => r((e) => !e), []),
    a = q.useMemo(() => {
      let e = 0,
        n = 0;
      for (let r of t) {
        let t = (r.name || ``).length;
        if (n > 0 && e + t >= jp) break;
        (e += t), n++;
      }
      return n;
    }, [t]),
    o = a < t.length,
    s = o && !n ? t.slice(0, a) : t;
  return (0, J.jsx)(F, {
    children: (0, J.jsxs)(V, {
      size: `2`,
      marginY: `2`,
      children: [
        (0, J.jsx)(`b`, {
          children: Z.LocalizePlural(
            `#AppPage_DLCPack_IncludesItems`,
            t.length,
            xr(t.length),
          ),
        }),
        ` `,
        Sp(
          s,
          (e) =>
            (0, J.jsx)(
              b,
              { href: Ye(e), whiteSpace: `nowrap`, children: e.name },
              e.id,
            ),
          { type: `unit`, style: `short` },
        ),
        o && (n ? ` ` : `… `),
        o &&
          (0, J.jsx)(rt, {
            onClick: i,
            children: Z.Localize(
              n ? `#AppPage_DLCPack_ShowLess` : `#AppPage_DLCPack_ShowMore`,
            ),
          }),
      ],
    }),
  });
}
function Lp(e) {
  let { appid: t, zIndex: n } = e,
    { data: r } = I({ appid: t }),
    { data: i } = U({ appid: t }),
    a =
      i?.asset_url_format && i.small_capsule
        ? of(i.asset_url_format, i.small_capsule)
        : void 0;
  return a
    ? (0, J.jsx)(N, {
        position: `relative`,
        display: `inline-block`,
        height: `45px`,
        width: `120px`,
        overflow: `hidden`,
        className: Dp,
        style: { zIndex: n },
        children: (0, J.jsx)(Ea, {
          height: `100%`,
          width: `100%`,
          src: a,
          alt: r?.name || ``,
        }),
      })
    : null;
}
var Rp = `k4U-U7-NtBA-`,
  zp = `zFNhs83JILA-`,
  Bp = `fHvl6Cv3a5w-`,
  Vp = `Uo8NpUGwZQ8-`,
  Hp = `pXV42Bs5yTQ-`,
  Up = `hjADKMF9Yhw-`,
  Wp = `UGZyRf4lfDc-`,
  Gp = 5;
function Kp(e) {
  switch (e) {
    case 1:
      return `#AppPage_DLC_Highlight_New`;
    case 2:
      return `#AppPage_DLC_Highlight_ComingSoon`;
    case 3:
      return `#AppPage_DLC_Highlight_PlayerFavorite`;
    case 4:
      return `#AppPage_DLC_Highlight_Recommended`;
    case 5:
      return `#AppPage_DLC_Highlight_RecommendedForNewPlayers`;
    default:
      return null;
  }
}
function qp(e) {
  switch (e) {
    case `in_cart`:
      return Vp;
    case `in_library`:
      return zp;
    case `on_wishlist`:
      return Bp;
    case `ignored`:
    case `excluded_by_preferences`:
      return Hp;
  }
}
function Jp(e) {
  let {
      appid: t,
      rgRows: n,
      nDlcBrowseCount: r,
      nNumDLCExcludedByPreferences: i,
      addAllToCart: a,
    } = e,
    [o, s] = q.useState(!1),
    c = q.useCallback(() => s(!0), []),
    { data: l } = I({ appid: t }),
    u = vd(t);
  if (!l || (n.length == 0 && i == 0 && !u?.length)) return null;
  q.use(Z.Ready()), q.use(zr.Ready());
  let d = l.type == 6,
    f = !o && n.length > Gp,
    p = f ? n.slice(0, Gp) : n;
  return (0, J.jsx)(q.Suspense, {
    children: (0, J.jsxs)(R, {
      direction: `column`,
      gap: `4`,
      marginY: `5`,
      children: [
        (0, J.jsxs)(si, {
          "flow-children": `column`,
          children: [
            (0, J.jsxs)(R, {
              direction: `row`,
              justify: `between`,
              align: `center`,
              marginBottom: `2`,
              children: [
                (0, J.jsx)(V, {
                  size: `3`,
                  contrast: `title`,
                  weight: `heavy`,
                  children: Z.Localize(
                    d ? `#AppPage_DLC_Header_Software` : `#AppPage_DLC_Header`,
                  ),
                }),
                r > 0 &&
                  (0, J.jsx)(b, {
                    size: `2`,
                    href: `${w.STORE_BASE_URL}dlc/${t}/`,
                    children: Z.Localize(`#AppPage_DLC_BrowseAll`, xr(r)),
                  }),
              ],
            }),
            i > 0 &&
              (0, J.jsx)(N, {
                padding: `1`,
                paddingStart: `0`,
                marginBottom: `1`,
                children: (0, J.jsx)(V, {
                  size: `2`,
                  color: `greyneutral-11`,
                  children: K(
                    Z.LocalizePlural(`#AppPage_DLC_ExcludedByPreferences`, i),
                    (0, J.jsx)(b, {
                      href: `${w.STORE_BASE_URL}account/preferences/`,
                    }),
                  ),
                }),
              }),
            p.map((e, t) =>
              (0, J.jsx)(Yp, { row: e, bRevealed: t >= Gp }, e.appid),
            ),
            f &&
              (0, J.jsxs)(R, {
                direction: `row`,
                justify: `between`,
                align: `center`,
                marginTop: `1`,
                className: `SjH6VoSyhLw-`,
                children: [
                  (0, J.jsx)(L, {
                    onClick: c,
                    children: Z.Localize(`#AppPage_DLC_SeeAll`),
                  }),
                  (0, J.jsx)(V, {
                    size: `2`,
                    color: `greyneutral-11`,
                    children: Z.Localize(
                      `#AppPage_DLC_ShowingResults`,
                      `1`,
                      xr(Gp),
                      xr(r),
                    ),
                  }),
                ],
              }),
            !f &&
              n.length < r &&
              (0, J.jsx)(N, {
                marginTop: `1`,
                children: (0, J.jsx)(V, {
                  size: `2`,
                  color: `greyneutral-11`,
                  className: `_7irs6MOPNT0-`,
                  children: Z.Localize(
                    `#AppPage_DLC_ShowingPartialList`,
                    xr(n.length),
                    xr(r),
                  ),
                }),
              }),
          ],
        }),
        !f &&
          a &&
          (0, J.jsxs)(R, {
            direction: `row`,
            justify: `between`,
            align: `center`,
            gap: `2`,
            marginTop: `2`,
            padding: `2`,
            className: `lK4ttMmrmLg-`,
            children: [
              (0, J.jsx)(V, {
                size: `3`,
                weight: `heavy`,
                children: a.strTotalPrice,
              }),
              (0, J.jsx)(xp, {
                rgPackageIDs: a.rgPackageIDs,
                strButtonToken: `#AppPage_DLC_BuyAll`,
              }),
            ],
          }),
        !!u?.length && (0, J.jsx)(Mp, { appid: t, rgOptions: u }),
      ],
    }),
  });
}
function Yp(e) {
  let { bRevealed: t } = e,
    { appid: n, packageid: r, nHighlightReason: i } = e.row,
    { data: a } = I({ appid: n }),
    { data: o } = wa(r ? { packageid: r } : void 0),
    s = i !== 0,
    { data: c } = U(s ? { appid: n } : void 0),
    l = Jr({ appid: n });
  if (!a) return null;
  let u = Kp(i),
    d =
      c?.asset_url_format && c.small_capsule
        ? of(c.asset_url_format, c.small_capsule)
        : void 0;
  return (0, J.jsxs)(hn, {
    storeItem: a,
    className: D(Rp, s && `_08ZDyPudkLY-`, t && `qIDIYWnjvP0-`),
    children: [
      s &&
        d &&
        (0, J.jsx)(Ea, {
          maxHeight: `87px`,
          flexGrow: `0`,
          src: d,
          alt: a.name,
        }),
      (0, J.jsxs)(R, {
        direction: `column`,
        align: `start`,
        gap: `1`,
        paddingEnd: `1`,
        className: Wp,
        children: [
          l &&
            (0, J.jsx)(V, {
              size: `1`,
              marginBottom: `1`,
              className: D(`LIRlEhTkRY0-`, qp(l)),
              children: Si(l),
            }),
          u &&
            (0, J.jsx)(V, {
              size: `1`,
              className: D(`LIRlEhTkRY0-`, `xWJ-3g1C64c-`),
              children: Z.Localize(u),
            }),
          (0, J.jsx)(V, { size: `3`, children: a.name }),
        ],
      }),
      (0, J.jsxs)(N, {
        flexShrink: `0`,
        textAlign: `end`,
        className: Up,
        children: [
          a.is_free &&
            (0, J.jsx)(V, {
              size: `4`,
              children: Z.Localize(`#AppPage_DLC_Free`),
            }),
          !a.is_free &&
            (0, J.jsx)(vf, {
              bComingSoon: a.is_coming_soon,
              purchaseOption: o,
            }),
          !a.is_free &&
            o &&
            (0, J.jsx)(Ur, { purchaseOption: o, size: `inline` }),
          !a.is_free &&
            !o &&
            (0, J.jsx)(V, {
              size: `4`,
              children: Z.Localize(`#AppPage_DLC_NoPrice`),
            }),
        ],
      }),
    ],
  });
}
var Xp = `BxdAVGcpVdY-`,
  Zp = `LIdTXjCwkQU-`,
  Qp = `EbPTyBfQ4tU-`,
  $p = `LHQWli4YR9Q-`,
  em = `MZ3cHb40P88-`,
  tm = `hNBS2V6Ryso-`,
  nm = `j-Y80dVZUUE-`,
  rm = `DuacFKyac78-`,
  im = `RVBKXyFibkI-`;
function am(e) {
  let {
      thisDLC: t,
      rgDependencies: n,
      rgPackageIDsToAdd: r,
      strTotalPrice: i,
    } = e,
    a = n.length == 1,
    { data: o } = I({ appid: t.appid }),
    { data: s } = I(a ? { appid: n[0].appid } : void 0);
  if (!o || n.length == 0 || (a && !s)) return null;
  q.use(Z.Ready()), q.use(zr.Ready());
  let c = n[0].bRequired,
    l = a
      ? Z.Localize(
          c
            ? `#AppPage_DLCDependency_RequiredTitle`
            : `#AppPage_DLCDependency_RecommendedTitle`,
        )
      : null,
    u = a
      ? Z.Localize(
          c
            ? `#AppPage_DLCDependency_RequiredDesc`
            : `#AppPage_DLCDependency_RecommendedDesc`,
          o.name || ``,
          s.name || ``,
        )
      : Z.Localize(`#AppPage_DLCDependency_MultipleDesc`, o.name || ``);
  return (0, J.jsx)(q.Suspense, {
    children: (0, J.jsx)(wp, {
      marginTop: `5`,
      marginBottom: `5`,
      buttonBarContents: (0, J.jsx)(om, { rgPackageIDs: r, strTotalPrice: i }),
      children: (0, J.jsxs)(si, {
        "flow-children": `column`,
        className: Xp,
        children: [
          l &&
            (0, J.jsx)(V, {
              size: `6`,
              contrast: `title`,
              marginBottom: `2`,
              children: l,
            }),
          (0, J.jsx)(V, {
            size: `3`,
            children: K(u, (0, J.jsx)(`b`, {}), (0, J.jsx)(`b`, {})),
          }),
          (0, J.jsxs)(F, {
            "flow-children": `row`,
            className: Zp,
            children: [
              (0, J.jsx)(sm, {
                appid: t.appid,
                packageid: t.packageid,
                strCallout: Z.Localize(`#AppPage_DLCDependency_ThisDLC`),
              }),
              n.map((e) =>
                (0, J.jsxs)(
                  q.Fragment,
                  {
                    children: [
                      (0, J.jsx)(N, {
                        "aria-hidden": !0,
                        className: nm,
                        children: `+`,
                      }),
                      (0, J.jsx)(sm, {
                        appid: e.appid,
                        packageid: e.packageid,
                        strCallout: Z.Localize(
                          e.bRequired
                            ? `#AppPage_DLCDependency_RequiredTab`
                            : `#AppPage_DLCDependency_RecommendedTab`,
                        ),
                      }),
                    ],
                  },
                  e.appid,
                ),
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
function om(e) {
  let { rgPackageIDs: t, strTotalPrice: n } = e;
  return (0, J.jsxs)(R, {
    align: `center`,
    gap: `1`,
    className: rm,
    children: [
      (0, J.jsx)(V, { size: `3`, className: im, children: n }),
      (0, J.jsx)(xp, {
        rgPackageIDs: t,
        strButtonToken: `#AppPage_DLCDependency_AddAllToCart`,
      }),
    ],
  });
}
function sm(e) {
  let { appid: t, packageid: n, strCallout: r } = e,
    { data: i } = I({ appid: t }),
    { data: a } = U({ appid: t }),
    { data: o } = wa(n ? { packageid: n } : void 0);
  if (!i) return null;
  let s =
    a?.asset_url_format && a.small_capsule
      ? of(a.asset_url_format, a.small_capsule)
      : void 0;
  return (0, J.jsxs)(F, {
    "flow-children": `column`,
    className: Qp,
    children: [
      (0, J.jsx)(R, {
        justify: `center`,
        position: `absolute`,
        inset: `-16px 0 auto 0`,
        className: $p,
        children: (0, J.jsx)(V, {
          size: `1`,
          contrast: `title`,
          className: em,
          children: r,
        }),
      }),
      (0, J.jsxs)(hn, {
        storeItem: i,
        className: tm,
        children: [
          s &&
            (0, J.jsx)(Ea, {
              display: `block`,
              width: `100%`,
              src: s,
              alt: i.name || ``,
            }),
          (0, J.jsxs)(N, {
            children: [
              i.is_free &&
                (0, J.jsx)(V, {
                  size: `3`,
                  children: Z.Localize(`#AppPage_DLC_Free`),
                }),
              !i.is_free &&
                o &&
                (0, J.jsx)(Ur, { purchaseOption: o, size: `inline` }),
              !i.is_free &&
                !o &&
                (0, J.jsx)(V, {
                  size: `3`,
                  children: Z.Localize(`#AppPage_DLC_NoPrice`),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
var cm = `V88-l-UtA-I-`,
  lm = `alRCY87ae-s-`,
  um = `_2uksoC263vE-`,
  dm = `tyEizPHzFuw-`,
  fm = `lSXh8Kk-MNs-`,
  pm = `eZTYkQe7vtU-`,
  mm = `_3ZBzmpG7qIg-`;
function hm(e) {
  let {
      appid: t,
      oTags: n,
      oCreatorLinks: r,
      reviewSummaryRecent: i,
      strIdForReviewSummary: a,
    } = e,
    o = new Map();
  for (let [e, t] of Object.entries(n)) o.set(e, t);
  let s = new Map();
  for (let [e, t] of Object.entries(r)) s.set(e, t);
  return (
    q.useLayoutEffect(() => {
      let e = document.querySelector(`#summaryBarTop`);
      e && (e.style.height = `unset`);
    }, []),
    q.use(Z.Ready()),
    (0, J.jsx)(q.Suspense, {
      children: (0, J.jsxs)(F, {
        className: cm,
        "flow-children": `grid`,
        navEntryPreferPosition: Ri.MAINTAIN_X,
        resetNavOnEntry: !0,
        children: [
          (0, J.jsx)(Sm, { appid: t, recent: i, strIdForReviewSummary: a }),
          (0, J.jsx)(_m, { appid: t }),
          (0, J.jsx)(bm, { appid: t, mapTags: o }),
          (0, J.jsx)(Cm, { appid: t, mapCreatorLinks: s }),
        ],
      }),
    })
  );
}
function gm(e) {
  let { children: t } = e;
  return (0, J.jsx)(`div`, {
    className: mm,
    children: (0, J.jsx)(V, { contrast: `title`, children: t }),
  });
}
function _m(e) {
  let { appid: t } = e,
    n = q.useMemo(() => In(`hardwarecompatibility`, `application_config`), []),
    { bSteamDeck: r, bSteamOS: i, bSteamMachine: a, bSteamFrame: o } = Qi(),
    [s, c] = q.useMemo(
      () =>
        a
          ? [3, Z.Localize(`#AppPage_SummaryBar_SteamMachineCompat`)]
          : o
            ? [4, Z.Localize(`#AppPage_SummaryBar_SteamFrameCompat`)]
            : i && !r
              ? [2, Z.Localize(`#AppPage_SummaryBar_SteamOSCompat`)]
              : [1, Z.Localize(`#AppPage_SummaryBar_SteamDeckCompat`)],
      [r, i, a, o],
    );
  return n
    ? (0, J.jsxs)(F, {
        className: D(lm, um),
        children: [
          (0, J.jsx)(gm, { children: c }),
          (0, J.jsx)(du, { className: dm, appID: t, results: n, tab: s }),
        ],
      })
    : null;
}
function vm(e) {
  let t = e.Element?.getBoundingClientRect(),
    n = e.m_Parent?.Element?.getBoundingClientRect();
  return !t || !n ? !1 : t.bottom <= n.bottom;
}
function ym(e) {
  let { tag: t } = e,
    n = fr(w.STORE_BASE_URL + `tags/${xn(w.LANGUAGE)}/${t}`);
  return (0, J.jsx)(B, {
    className: void 0,
    href: n,
    fnCanTakeFocus: vm,
    children: (0, J.jsx)(N, {
      background: `blue-5`,
      paddingX: `1`,
      paddingY: `0`,
      children: (0, J.jsx)(V, { color: `blue-8`, children: t }),
    }),
  });
}
function bm(e) {
  let { appid: t, mapTags: n } = e;
  return (0, J.jsxs)(si, {
    className: D(lm, fm),
    focusable: !0,
    children: [
      (0, J.jsx)(gm, { children: Z.Localize(`#AppPage_SummaryBar_UserTags`) }),
      (0, J.jsx)(F, {
        className: pm,
        children: Array.from(n.entries()).map(([e, t]) =>
          (0, J.jsx)(ym, { tag: e }, e),
        ),
      }),
    ],
  });
}
function xm(e) {
  let { label: t, reviewScoreDescription: n, percentage: r, count: i } = e;
  return !t || !n || r == null || !i
    ? null
    : (0, J.jsxs)(`div`, {
        children: [
          (0, J.jsx)(V, { contrast: `body`, children: Z.Localize(t) }),
          ` `,
          (0, J.jsx)(V, { color: `blue-8`, children: n }),
          ` `,
          (0, J.jsxs)(V, {
            contrast: `body`,
            children: [`(`, Z.Localize(`#AppPage_ReviewStats`, r, xr(i)), `)`],
          }),
        ],
      });
}
function Sm(e) {
  let { appid: t, recent: n, strIdForReviewSummary: r } = e,
    { data: i } = Un({ appid: t }),
    a = q.useCallback(() => {
      window.MoveFocusToId(r);
    }, [r]);
  return !i || !i.summary_filtered?.review_count
    ? null
    : (0, J.jsxs)(F, {
        className: lm,
        onActivate: a,
        children: [
          (0, J.jsx)(gm, {
            children: Z.Localize(`#AppPage_SummaryBar_UserReviews`),
          }),
          (0, J.jsx)(xm, {
            label: `#AppPage_Reviews_AllTime`,
            reviewScoreDescription: i.summary_filtered?.review_score_label,
            percentage: i.summary_filtered.percent_positive,
            count: i.summary_filtered.review_count,
          }),
          n &&
            (0, J.jsx)(xm, {
              label: `#AppPage_Reviews_Recent`,
              reviewScoreDescription: n.description,
              percentage: n.percentage,
              count: n.count,
            }),
        ],
      });
}
function Cm(e) {
  let { appid: t, mapCreatorLinks: n } = e,
    { data: r } = Cn({ appid: t }),
    { data: i } = Mn({ appid: t }),
    { data: a } = S({ appid: t }),
    o = a?.links_and_info?.manufacturers?.map((e) => ({ name: e }));
  return r
    ? (0, J.jsxs)(si, {
        className: D(lm, void 0),
        children: [
          (0, J.jsx)(gm, {
            children: Z.Localize(`#AppPage_SummaryBar_GameInfo`),
          }),
          (0, J.jsx)(`table`, {
            children: (0, J.jsxs)(`tbody`, {
              children: [
                (0, J.jsx)(Tm, {
                  label: `#AppPage_SummaryBar_Developer`,
                  strType: `developer`,
                  rgCreators: r.developers,
                  mapCreatorLinks: n,
                }),
                (0, J.jsx)(Tm, {
                  label: `#AppPage_SummaryBar_Publisher`,
                  strType: `publisher`,
                  rgCreators: r.publishers,
                  mapCreatorLinks: n,
                }),
                (0, J.jsx)(Tm, {
                  label: `#AppPage_SummaryBar_Manufacturer`,
                  strType: `manufacturer`,
                  rgCreators: o,
                }),
                !!i?.steam_release_date &&
                  (0, J.jsxs)(`tr`, {
                    children: [
                      (0, J.jsx)(`td`, {
                        children: (0, J.jsx)(V, {
                          contrast: `body`,
                          children: Z.Localize(
                            `#AppPage_SummaryBar_ReleaseDate`,
                          ),
                        }),
                      }),
                      (0, J.jsx)(`td`, {
                        children: (0, J.jsx)(V, {
                          contrast: `body`,
                          children: vr(i?.steam_release_date, {
                            fullmonthname: !1,
                            bUseRelativeNames: !1,
                            bIncludeDayName: !1,
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        ],
      })
    : null;
}
function wm(e) {
  let { creator: t, strType: n, mapCreatorLinks: r } = e,
    i = fr(r?.get(t.name)),
    a = fr(w.STORE_BASE_URL + `search/?${n}=${encodeURIComponent(t.name)}`);
  return (0, J.jsx)(B, {
    href: i || a,
    children: (0, J.jsx)(V, {
      color: `blue-8`,
      whiteSpace: `nowrap`,
      children: t.name,
    }),
  });
}
function Tm(e) {
  let { label: t, strType: n, rgCreators: r, mapCreatorLinks: i } = e;
  return !r || r.length == 0
    ? null
    : (0, J.jsxs)(`tr`, {
        children: [
          (0, J.jsx)(`td`, {
            children: (0, J.jsx)(V, {
              contrast: `body`,
              children: Z.Localize(t),
            }),
          }),
          (0, J.jsx)(`td`, {
            children: (0, J.jsx)(F, {
              children: (0, J.jsxs)(V, {
                contrast: `body`,
                lineClamp: 3,
                children: [
                  Sp(
                    r.slice(0, 4),
                    (e) =>
                      (0, J.jsx)(
                        wm,
                        { strType: n, creator: e, mapCreatorLinks: i },
                        e.creator_clan_account_id || e.name,
                      ),
                    { type: `unit`, style: `short` },
                  ),
                  r.length > 4 &&
                    (0, J.jsx)(`span`, {
                      children: Z.Localize(
                        `#AppPage_SummaryBar_AndMore`,
                        r.length - 4,
                      ),
                    }),
                ],
              }),
            }),
          }),
        ],
      });
}
var Em = `Z4mpo66bOSA-`,
  Dm = `PvkZ1H4YD7c-`,
  Om = `hbHBLs7yn3w-`,
  km = `_7vc464K17Zg-`,
  Am = `mlLGitOJ9B8-`;
function jm(e) {
  let { children: t, className: n, fillHeight: r } = e,
    {
      setExpanded: i,
      refContents: a,
      bCollapsible: o,
      refPanel: s,
      bExpanded: c,
      bCollapsed: l,
    } = Nm(),
    u = q.useCallback(() => {
      i(!c);
    }, [c, i]);
  return (0, J.jsx)(F, {
    ref: s,
    className: D(Om, r && `-cg0jf0kHt8-`, n),
    focusableIfEmpty: !0,
    onActivate: o ? u : void 0,
    children: (0, J.jsxs)(
      F,
      {
        className: km,
        focusable: o,
        children: [
          (0, J.jsx)(`div`, {
            ref: a,
            className: D(Am, l && `MTT0efrxJpY-`, c && `xPdTxzb8EF8-`),
            children: t,
          }),
          o &&
            (0, J.jsx)(`div`, {
              className: `ZTOMwbUkto4-`,
              children: Z.Localize(c ? `#btn_read_less` : `#btn_read_more`),
            }),
        ],
      },
      l ? `collapsed` : `expanded`,
    ),
  });
}
function Mm(e) {
  let { children: t, className: n, fillHeight: r } = e,
    {
      setExpanded: i,
      refContents: a,
      bCollapsible: o,
      refPanel: s,
      bExpanded: c,
      bCollapsed: l,
    } = Nm(),
    u = q.useCallback(
      (e) => {
        e && i(!0);
      },
      [i],
    ),
    d = q.useCallback(() => {
      i(!1);
    }, [i]);
  return (0, J.jsxs)(si, {
    ref: s,
    className: D(Om, r && `-cg0jf0kHt8-`, n),
    onExplicitFocusLevelChanged: o ? u : void 0,
    children: [
      (0, J.jsx)(`div`, {
        ref: a,
        className: D(Am, l && `MTT0efrxJpY-`, c && `xPdTxzb8EF8-`),
        children: t,
      }),
      o &&
        !c &&
        (0, J.jsx)(`div`, {
          className: `ZTOMwbUkto4-`,
          children: Z.Localize(`#btn_read_more`),
        }),
      o &&
        c &&
        (0, J.jsx)(F, {
          className: `ZTOMwbUkto4-`,
          onActivate: d,
          children: Z.Localize(`#btn_read_less`),
        }),
    ],
  });
}
function Nm() {
  let [e, t] = q.useState(!1),
    [n, r] = q.useState(!1),
    i = q.useRef(null),
    a = q.useRef(!1),
    o = q.useCallback(
      (t) => {
        e || r(t.target.scrollHeight > t.target.clientHeight);
      },
      [e],
    ),
    s = vi(o),
    c = n && !e;
  return (
    q.useLayoutEffect(() => {
      a.current && !e && i.current?.scrollIntoView({ block: `nearest` }),
        (a.current = !1);
    }, [e]),
    {
      setExpanded: q.useCallback(
        (e) => {
          t(e), e || (a.current = !0);
        },
        [t, a],
      ),
      refContents: s,
      refPanel: i,
      bCollapsed: c,
      bExpanded: e,
      bCollapsible: n,
    }
  );
}
function Pm(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t }),
    { data: r } = hi({ appid: t });
  return (
    q.use(Z.Ready()),
    !n || n.type == null || !r
      ? null
      : (0, J.jsxs)(jm, {
          className: Em,
          fillHeight: !0,
          "flow-children": `column`,
          children: [
            (0, J.jsx)(`h2`, {
              className: Dm,
              children: Z.Localize(Z.GetAppTypeLocKey(`#About_This`, n.type)),
            }),
            (0, J.jsx)(ot, { text: r }),
          ],
        })
  );
}
var Fm = `SmjknELvUJc-`,
  Im = `_9ZUIwntU8mE-`,
  Lm = `fvd6xBU8wtw-`,
  Rm = `_8UMaB7c9dnc-`,
  zm = `hRZ-zLs0eA8-`,
  Bm = `weE-Kv3O-4s-`,
  Vm = `mFXN9RHFnFg-`,
  Hm = `_4oRcyz2NLmA-`,
  Um = `_8V9fwX5AIOQ-`,
  Wm = `r5OVdMU7fys-`,
  Gm = { 1: `date_full`, 2: `date_month`, 3: `date_quarter`, 4: `date_year` };
function Km(e) {
  let t = e.release_from_early_access_date,
    n = Gm[e.release_from_early_access_style];
  return !t || !n ? `` : Or(n, t);
}
function qm(e) {
  let { appid: t, staleUpdate: n, bIsAppEditor: r } = e,
    { data: i } = I({ appid: t }),
    { data: a } = Mn({ appid: t }),
    { data: o } = S({ appid: t }),
    [s, c] = q.useState(!1),
    l = q.useCallback(() => c((e) => !e), []);
  if ((q.use(Z.Ready()), !i || !a)) return null;
  let u = i.type == 6,
    d = !!a.is_coming_soon,
    f = Km(a),
    p = `#AppPage_EarlyAccess_Header`,
    m = `#AppPage_EarlyAccess_BannerDesc`;
  return (
    d
      ? ((p = `#AppPage_EarlyAccess_Header_Soon`),
        (m = `#AppPage_EarlyAccess_BannerDesc_Soon`))
      : u &&
        ((p = `#AppPage_EarlyAccess_Header_Software`),
        (m = `#AppPage_EarlyAccess_BannerDesc_Software`)),
    (0, J.jsxs)(si, {
      className: Fm,
      "flow-children": `column`,
      children: [
        !!f &&
          (0, J.jsx)(`div`, {
            className: `erIWSowjELQ-`,
            children: Z.Localize(`#AppPage_EarlyAccess_LeaveWhen`, f),
          }),
        (0, J.jsxs)(F, {
          className: Im,
          "flow-children": `column`,
          children: [
            (0, J.jsx)(`h2`, { className: Lm, children: Z.Localize(p) }),
            (0, J.jsx)(`p`, { className: Rm, children: Z.Localize(m) }),
            (0, J.jsx)(rt, {
              onClick: l,
              children: Z.Localize(
                s
                  ? `#AppPage_EarlyAccess_ShowLess`
                  : `#AppPage_EarlyAccess_ShowMore`,
              ),
            }),
            s &&
              (0, J.jsx)(Jm, {
                earlyAccess: o?.early_access,
                staleUpdate: n,
                bIsAppEditor: r,
                bSoftware: u,
              }),
          ],
        }),
      ],
    })
  );
}
function Jm(e) {
  let { earlyAccess: t, staleUpdate: n, bIsAppEditor: r, bSoftware: i } = e,
    a = `${w.STORE_BASE_URL}earlyaccessfaq/`,
    o = !!t?.description_bbcode,
    s;
  s = o
    ? [
        {
          text: t?.description_bbcode,
          tokenHeader: `#AppPage_EarlyAccess_WhatDevsSay`,
        },
      ]
    : [
        { text: t?.why_bbcode, tokenHeader: `#AppPage_EarlyAccess_Why` },
        {
          text: t?.how_long_bbcode,
          tokenHeader: i
            ? `#AppPage_EarlyAccess_HowLong_Software`
            : `#AppPage_EarlyAccess_HowLong`,
        },
        {
          text: t?.full_version_bbcode,
          tokenHeader: `#AppPage_EarlyAccess_FullVersion`,
        },
        {
          text: t?.current_state_bbcode,
          tokenHeader: `#AppPage_EarlyAccess_CurrentState`,
        },
        {
          text: t?.pricing_bbcode,
          tokenHeader: i
            ? `#AppPage_EarlyAccess_Pricing_Software`
            : `#AppPage_EarlyAccess_Pricing`,
        },
        {
          text: t?.community_bbcode,
          tokenHeader: `#AppPage_EarlyAccess_Community`,
        },
      ];
  let c = s.some((e) => !!e.text);
  return (0, J.jsxs)(F, {
    className: zm,
    "flow-children": `column`,
    children: [
      (0, J.jsxs)(`p`, {
        className: Bm,
        children: [
          Z.Localize(
            i
              ? `#AppPage_EarlyAccess_Warn_Software`
              : `#AppPage_EarlyAccess_Warn`,
          ),
          ` `,
          (0, J.jsx)(B, {
            className: Wm,
            href: a,
            children: Z.Localize(`#AppPage_EarlyAccess_LearnMore`),
          }),
        ],
      }),
      !!n && (0, J.jsx)(Xm, { staleUpdate: n, bIsAppEditor: r }),
      c &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            !o &&
              (0, J.jsx)(`div`, {
                className: `cUrPN9kdh0g-`,
                children: Z.Localize(`#AppPage_EarlyAccess_WhatDevsSay`),
              }),
            s.map((e, t) =>
              (0, J.jsx)(Ym, { text: e.text, tokenHeader: e.tokenHeader }, t),
            ),
          ],
        }),
    ],
  });
}
function Ym(e) {
  let { text: t, tokenHeader: n } = e;
  return t
    ? (0, J.jsxs)(J.Fragment, {
        children: [
          (0, J.jsx)(`h3`, { className: Hm, children: Z.Localize(n) }),
          (0, J.jsx)(`div`, {
            className: Um,
            children: K(
              Z.Localize(`#AppPage_EarlyAccess_Quote`),
              (0, J.jsx)(ot, { text: t }),
            ),
          }),
        ],
      })
    : null;
}
function Xm(e) {
  let { staleUpdate: t, bIsAppEditor: n } = e,
    { nMonthsAgo: r, bNoUpdatesEverPublished: i } = t,
    a;
  if (!r && i) a = Z.Localize(`#AppPage_EarlyAccess_NoUpdates`);
  else if (r && r > 24) {
    let e = Math.floor(r / 12);
    a = Z.LocalizePlural(`#AppPage_EarlyAccess_StaleYears`, e);
  } else a = Z.LocalizePlural(`#AppPage_EarlyAccess_StaleMonths`, r);
  return (0, J.jsxs)(`div`, {
    className: Vm,
    children: [
      a,
      ` `,
      Z.Localize(`#AppPage_EarlyAccess_StaleWarning2`),
      n &&
        (0, J.jsx)(`div`, {
          className: `_8YZjfHNPh-s-`,
          children: K(
            Z.Localize(`#AppPage_EarlyAccess_StaleDevs`),
            (0, J.jsx)(B, {
              className: `r5OVdMU7fys-`,
              href: `${w.PARTNER_BASE_URL}doc/store/earlyaccess#update_notice`,
            }),
          ),
        }),
    ],
  });
}
var Zm = `sc7-FhwYc9o-`,
  Qm = `wdWA8dz-mvE-`;
function $m(e) {
  let { appid: t } = e,
    { data: n } = S({ appid: t });
  q.use(Z.Ready());
  let r = n?.section;
  return r?.length
    ? (0, J.jsx)(`div`, {
        className: Zm,
        children: r.map((e, t) => (0, J.jsx)(eh, { section: e }, t)),
      })
    : null;
}
function eh(e) {
  let { label: t, content_bbcode: n, banner: r } = e.section;
  return (0, J.jsxs)(jm, {
    className: Qm,
    "flow-children": `column`,
    children: [
      t && (0, J.jsx)(`h2`, { className: `IMHXUoHv-T8-`, children: t }),
      n && (0, J.jsx)(ot, { text: n }),
    ],
  });
}
var th = `Dzos8MWn8Lo-`;
function nh(e) {
  let { appid: t } = e,
    { data: n } = S({ appid: t });
  return (
    q.use(Z.Ready()),
    n?.legal_notice_bbcode
      ? (0, J.jsx)(Mm, {
          className: th,
          children: (0, J.jsx)(ot, {
            text: n.legal_notice_bbcode,
            bBypassLinkFilter: !0,
          }),
        })
      : null
  );
}
function rh(e) {
  let { appid: t } = e,
    { data: n } = S({ appid: t }),
    r = n?.press_review;
  return r?.length
    ? (q.use(Z.Ready()),
      (0, J.jsx)(N, {
        marginTop: `5`,
        children: (0, J.jsxs)(si, {
          children: [
            (0, J.jsx)(nt, {
              level: `2`,
              size: `2`,
              weight: `heavy`,
              contrast: `title`,
              children: Z.Localize(`#AppPage_PressReviews_Header`),
            }),
            r.map((e, t) => (0, J.jsx)(ih, { review: e }, t)),
          ],
        }),
      }))
    : null;
}
function ih(e) {
  let { quote: t, score: n, site: r, url: i } = e.review,
    a = t;
  t && r && (a = Z.Localize(`#AppPage_PressReviews_Quote`, t));
  let o = r;
  r && i && (o = (0, J.jsx)(b, { href: i, color: `blue-8`, children: r }));
  let s = o;
  return (
    n && r
      ? (s = Z.LocalizeReact(`#AppPage_PressReviews_Attribution`, n, o))
      : n && (s = n),
    (0, J.jsxs)(N, {
      marginBottom: `3`,
      children: [
        a && (0, J.jsx)(V, { as: `div`, size: `2`, children: a }),
        s && (0, J.jsx)(V, { as: `div`, size: `2`, children: s }),
      ],
    })
  );
}
function ah(e) {
  let { strHeading: t, strIntro: n, strBody: r, children: i } = e;
  return (0, J.jsx)(N, {
    maxWidth: `100%`,
    marginTop: `5`,
    children: (0, J.jsxs)(jm, {
      children: [
        (0, J.jsx)(nt, {
          level: `2`,
          size: `2`,
          weight: `heavy`,
          contrast: `title`,
          children: t,
        }),
        (0, J.jsx)(V, { as: `p`, size: `3`, marginTop: `3`, children: n }),
        (0, J.jsx)(V, {
          as: `p`,
          size: `3`,
          whiteSpace: `pre-line`,
          style: { fontStyle: `italic` },
          children: r,
        }),
        i,
      ],
    }),
  });
}
function oh(e) {
  let { appid: t } = e,
    { data: n } = S({ appid: t }),
    r = n?.content_survey_ai_notes;
  if (!r) return null;
  let i = n?.ai_generation_service;
  q.use(Z.Ready());
  let a = null;
  return (
    i?.name && i.url
      ? (a = on(
          Z.Localize(
            `#feature_ai_generated_content_external_account_service`,
            i.name,
          ),
          (0, J.jsx)(B, { href: i.url }),
        ))
      : i?.name && (a = Z.Localize(`#AppPage_AIDisclosure_ModelName`, i.name)),
    (0, J.jsx)(ah, {
      strHeading: Z.Localize(`#AppPage_AIDisclosure_Header`),
      strIntro: Z.Localize(`#AppPage_AIDisclosure_Intro`),
      strBody: r,
      children:
        a && (0, J.jsx)(V, { as: `p`, size: `3`, marginTop: `3`, children: a }),
    })
  );
}
var sh = [
  {
    descid: 5,
    parentDescID: 0,
    strNameToken: `#ContentDescriptor_GeneralMatureContent`,
    strUserDescToken: `#ContentDescriptor_GeneralMatureContent_Description`,
    bAllowSearch: !0,
    bCustomerFacing: !0,
    bAdultsOnly: !1,
  },
  {
    descid: 2,
    parentDescID: 5,
    strNameToken: `#ContentDescriptor_FrequentViolenceOrGore`,
    strUserDescToken: `#ContentDescriptor_FrequentViolenceOrGore_Description`,
    bAllowSearch: !0,
    bCustomerFacing: !0,
    bAdultsOnly: !1,
  },
  {
    descid: 1,
    parentDescID: 5,
    strNameToken: `#ContentDescriptor_NudityOrSexualContent`,
    strUserDescToken: `#ContentDescriptor_NudityOrSexualContent_Description`,
    bAllowSearch: !0,
    bCustomerFacing: !0,
    bAdultsOnly: !1,
  },
  {
    descid: 4,
    parentDescID: 1,
    strNameToken: `#ContentDescriptor_GratuitousNudityOrSexualContent`,
    strUserDescToken: `#ContentDescriptor_GratuitousNudityOrSexualContent_Description`,
    bAllowSearch: !0,
    bCustomerFacing: !0,
    bAdultsOnly: !0,
  },
  {
    descid: 3,
    parentDescID: 4,
    strNameToken: `#ContentDescriptor_AdultOnlySexualContent`,
    strUserDescToken: `#ContentDescriptor_AdultOnlySexualContent_Description`,
    bAllowSearch: !0,
    bCustomerFacing: !0,
    bAdultsOnly: !0,
  },
];
function ch(e) {
  return sh.find((t) => t.descid === e);
}
function lh(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t }),
    { data: r } = Gn({ appid: t }),
    i = n?.content_descriptorids;
  if (!n || n.type == null || !i?.length || r === void 0 || ba(w.EREALM))
    return null;
  q.use(Z.Ready()), q.use(W.Ready());
  let a = r?.content_survey_notes;
  if (!a) {
    let e = [];
    for (let t of i) {
      let n = ch(t);
      n?.bCustomerFacing && e.push(W.Localize(n.strNameToken));
    }
    a = Z.Localize(
      Z.GetAppTypeLocKey(`#AppPage_MatureContent_Descriptors`, n.type),
      new Intl.ListFormat(Dr(), { type: `unit`, style: `short` }).format(e),
    );
  }
  return (0, J.jsx)(ah, {
    strHeading: Z.Localize(`#AppPage_MatureContent_Header`),
    strIntro: Z.Localize(`#AppPage_AgeGate_DescriptorNotes`),
    strBody: a,
  });
}
var uh = [
  { role: `directors`, strTitleToken: `#AppPage_CastAndCrew_DirectedBy` },
  { role: `producers`, strTitleToken: `#AppPage_CastAndCrew_ProducedBy` },
  { role: `writers`, strTitleToken: `#AppPage_CastAndCrew_WrittenBy` },
  { role: `music`, strTitleToken: `#AppPage_CastAndCrew_MusicBy` },
  { role: `actors`, strTitleToken: `#AppPage_CastAndCrew_Starring` },
];
function dh(e) {
  let { appid: t } = e,
    { data: n } = S({ appid: t }),
    r = n?.cast_and_crew,
    i = uh.filter(({ role: e }) => r?.[e]?.length);
  return !r || !i.length
    ? null
    : (q.use(Z.Ready()),
      (0, J.jsx)(N, {
        marginTop: `5`,
        children: (0, J.jsxs)(Mm, {
          children: [
            (0, J.jsx)(nt, {
              level: `2`,
              size: `2`,
              weight: `heavy`,
              contrast: `title`,
              children: Z.Localize(`#AppPage_CastAndCrew_Header`),
            }),
            (0, J.jsx)(st, {
              columns: `150px 1fr`,
              marginTop: `2`,
              children: i.map(({ role: e, strTitleToken: t }) =>
                (0, J.jsx)(fh, { strTitle: Z.Localize(t), rgNames: r[e] }, e),
              ),
            }),
          ],
        }),
      }));
}
function fh(e) {
  let { strTitle: t, rgNames: n } = e;
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(V, {
        as: `div`,
        size: `4`,
        weight: `heavy`,
        contrast: `subtitle`,
        children: t,
      }),
      (0, J.jsx)(V, {
        as: `div`,
        size: `4`,
        contrast: `subtitle`,
        children: Sp(n, (e, t) => (0, J.jsx)(ph, { strName: e }, t), {
          type: `unit`,
          style: `short`,
        }),
      }),
    ],
  });
}
function ph(e) {
  let { strName: t } = e,
    n = fr(`${w.STORE_BASE_URL}search/?term=${encodeURIComponent(t)}`);
  return (0, J.jsx)(b, { href: n, contrast: `title`, children: t });
}
function mh(e, t, n) {
  return [`FriendsGameplayInfo`, e, t, !!n];
}
async function hh(e, t, n) {
  let r = Di.Init(Fn);
  r.Body().set_appid(t), n && r.Body().set_include_family_licenses(!0);
  let i = await ca.GetFriendsGameplayInfo(e, r);
  return (
    i.BSuccess() ||
      console.warn(`Failed to get gameplay info: ${i.GetEResult()}`),
    i.Body().toObject()
  );
}
function gh(e, t, n, r) {
  return {
    queryKey: mh(t, n, r),
    queryFn: async () => await hh(e, n, r),
    enabled: !!t,
    staleTime: 36e5,
  };
}
function _h(e, t) {
  let n = pi(),
    r = qr();
  return d(gh(n, r, e, t));
}
function vh(e, t = !1) {
  return (e / 60).toFixed(t || e < 1200 ? 1 : 0);
}
function yh(e) {
  let { data: t } = I({ appid: e }),
    n = me(e),
    { data: r } = _h(n),
    i = r?.your_info;
  if (!i?.owned || !i.minutes_played_forever) return null;
  let a = !!t?.categories?.feature_categoryids?.includes(22);
  return {
    nMinutesForever: i.minutes_played_forever,
    nMinutesLastTwoWeeks: i.minutes_played ?? 0,
    bShowStatsLinks: a && !ba(w.EREALM),
    nSteamworksAppid: n,
  };
}
function bh(e) {
  let {
      nMinutesForever: t,
      nMinutesLastTwoWeeks: n,
      bShowStatsLinks: r,
      nSteamworksAppid: i,
    } = e.stats,
    { data: a } = yt(C.steamid);
  q.use(Z.Ready());
  let o = `${Jt(a, C.steamid)}/stats/appid/${i}`,
    s = Ha({ appid: i });
  return (0, J.jsxs)(R, {
    direction: `column`,
    children: [
      (0, J.jsxs)(V, {
        size: `3`,
        color: `slate-11`,
        children: [
          n > 0 &&
            `${Z.Localize(`#AppPage_MyActivity_HoursLastTwoWeeks`, vh(n))} / `,
          Z.Localize(`#AppPage_MyActivity_HoursOnRecord`, vh(t)),
        ],
      }),
      r &&
        (0, J.jsxs)(R, {
          gap: `2`,
          children: [
            (0, J.jsx)(b, {
              size: `3`,
              color: `blue-8`,
              href: o,
              children: Z.Localize(`#AppPage_MyActivity_ViewStats`),
            }),
            (0, J.jsx)(b, {
              size: `3`,
              color: `blue-8`,
              href: s,
              children: Z.Localize(`#AppPage_MyActivity_ViewGlobalStats`),
            }),
          ],
        }),
    ],
  });
}
var xh = `MaLZY4IFehM-`,
  Sh = `_0JoKMLyWAYs-`,
  Ch = `I9Xc-FWPA2g-`,
  wh = `RaiVZAVGOU4-`;
function Th(e) {
  return (ba(w.EREALM) ? `steamchina://` : `steam://`) + e;
}
function Eh(e) {
  let { appid: t, bOwned: n, masterSub: r, timedTrial: i, playAppid: a } = e,
    { data: o } = I({ appid: t }),
    s = yh(t);
  if (!o || (!n && !s)) return null;
  q.use(Z.Ready());
  let c = o.type == 10,
    l = !!i && i.nSecondsRemaining == 0 && !!r?.subscription,
    u = n && !c && !l;
  return (0, J.jsxs)(R, {
    direction: `column`,
    paddingX: `5`,
    paddingY: `3`,
    background: `greyneutral-2 80%`,
    children: [
      n && r && (0, J.jsx)(kh, { masterSub: r, bTrial: !!i }),
      n && !r && (0, J.jsx)(Oh, { strAppName: o.name ?? `` }),
      n && l && (0, J.jsx)(jh, { subscription: r.subscription }),
      u &&
        (0, J.jsx)(Ah, {
          strAppName: o.name ?? ``,
          masterSub: r,
          timedTrial: i,
        }),
      (0, J.jsxs)(F, {
        className: wh,
        "flow-children": `row`,
        children: [
          u && a !== null && (0, J.jsx)(Mh, { appid: a, eType: o.type }),
          u &&
            !!i &&
            (0, J.jsx)(Nh, { nSecondsRemaining: i.nSecondsRemaining }),
          !!s && (0, J.jsx)(bh, { stats: s }),
        ],
      }),
    ],
  });
}
function Dh() {
  return (0, J.jsxs)(R, {
    className: Sh,
    gap: `1`,
    flexShrink: `0`,
    align: `center`,
    height: `18px`,
    paddingX: `1`,
    background: `storegreen-10`,
    children: [
      (0, J.jsx)(wi, { className: Ch }),
      (0, J.jsx)(V, {
        size: `1`,
        color: `slate-1`,
        children: Z.Localize(`#AppPage_Owned_InLibraryFlag`),
      }),
    ],
  });
}
function Oh(e) {
  let { strAppName: t } = e;
  return (0, J.jsxs)(R, {
    gap: `2`,
    justify: `between`,
    paddingBottom: `3`,
    className: xh,
    children: [
      (0, J.jsx)(V, {
        size: `4`,
        color: `storegreen-10`,
        children: Z.Localize(`#AppPage_Owned_AlreadyInLibrary`, t),
      }),
      (0, J.jsx)(Dh, {}),
    ],
  });
}
function kh(e) {
  let { masterSub: t, bTrial: n } = e,
    { strPackageName: r, subscription: i } = t,
    a = n
      ? `#AppPage_Owned_MasterSubTrialHeader`
      : `#AppPage_Owned_MasterSubHeader`;
  return (0, J.jsxs)(R, {
    align: `center`,
    gap: `2`,
    children: [
      i?.strBadgeImage
        ? (0, J.jsx)(R, {
            background: `blue-7`,
            justify: `center`,
            align: `center`,
            paddingY: `1`,
            paddingLeft: `2`,
            paddingRight: `5`,
            children: (0, J.jsx)(Ea, {
              src: i.strBadgeImage,
              alt: ``,
              height: `18px`,
            }),
          })
        : (0, J.jsx)(Dh, {}),
      (0, J.jsx)(N, {
        flexGrow: `0`,
        children: (0, J.jsx)(V, {
          size: `4`,
          color: `storegreen-10`,
          children: Z.Localize(a, r),
        }),
      }),
      !!i &&
        (0, J.jsx)(N, {
          flexShrink: `0`,
          children: (0, J.jsx)(b, {
            href: i.strInfoURL,
            size: `2`,
            color: `text-light`,
            underline: `always`,
            children: Z.Localize(`#AppPage_Owned_MasterSubBrowse`, i.strName),
          }),
        }),
    ],
  });
}
function Ah(e) {
  let { strAppName: t, masterSub: n, timedTrial: r } = e,
    i = n?.subscription,
    a = null;
  if (r) {
    let e = Vi(r.nSecondsAllowed, { eSuffix: Tn.None });
    a = i
      ? K(
          Z.Localize(`#AppPage_Owned_TrialWithMasterSub`, e, i.strName),
          (0, J.jsx)(b, { href: i.strInfoURL }),
        )
      : Z.Localize(`#AppPage_Owned_TrialFree`, t, e);
  } else
    i &&
      (a = K(
        Z.Localize(`#AppPage_Owned_MasterSubDesc`, i.strName),
        (0, J.jsx)(b, { href: i.strInfoURL }),
      ));
  return a ? (0, J.jsx)(V, { size: `3`, marginTop: `3`, children: a }) : null;
}
function jh(e) {
  let { subscription: t } = e;
  return (0, J.jsx)(V, {
    size: `3`,
    marginTop: `3`,
    children: K(
      Z.Localize(`#AppPage_Owned_TrialEnded`, t.strName),
      (0, J.jsx)(b, { href: t.strInfoURL }),
    ),
  });
}
function Mh(e) {
  let { appid: t, eType: n } = e,
    r = `#AppPage_Owned_Play`;
  return (
    n == 6
      ? (r = `#AppPage_Owned_Use`)
      : n == 7
        ? (r = `#AppPage_Owned_Watch`)
        : n == 11 && (r = `#AppPage_Owned_PlayMusic`),
    (0, J.jsx)(aa, {
      focusable: !0,
      color: `blue`,
      href: Th(`launch/${t}/Dialog`),
      children: Z.Localize(r),
    })
  );
}
function Nh(e) {
  let { nSecondsRemaining: t } = e;
  return t <= 0
    ? null
    : (0, J.jsx)(V, {
        size: `4`,
        color: `text-light`,
        children: Vi(t, { eSuffix: Tn.Remaining }),
      });
}
var Ph = {
    0: void 0,
    1: `#AppPage_Series_Type_Episode`,
    2: `#AppPage_Series_Type_Chapter`,
    3: `#AppPage_Series_Type_Bonus`,
    4: `#AppPage_Series_Type_BehindTheScenes`,
    5: `#AppPage_Series_Type_Deleted`,
  },
  Fh = {
    0: `#AppPage_Series_ExtrasNote_Purchase`,
    1: `#AppPage_Series_ExtrasNote_Rental`,
    2: `#AppPage_Series_ExtrasNote_PurchaseRental`,
    3: `#AppPage_Series_ExtrasNote_PurchaseSpecialEdition`,
    4: `#AppPage_Series_ExtrasNote_PurchaseDeluxeEdition`,
  };
function Ih(e) {
  return e === 1 || e === 2;
}
var Lh = {
  "#Season_Number": `#AppPage_Series_SeasonName_Season`,
  "#Section_Number": `#AppPage_Series_SeasonName_Section`,
  "#Volume_Number": `#AppPage_Series_SeasonName_Volume`,
  "#Tutorial_Content": `#AppPage_Series_SeasonName_TutorialContent`,
  "#Additional_Content": `#AppPage_Series_SeasonName_AdditionalContent`,
  "#Series_Content": `#AppPage_Series_ContentTitle`,
  "#Extra_Content": `#AppPage_Series_ExtraContent`,
};
function Rh(e) {
  let t = e.name && Lh[e.name];
  return t ? Z.Localize(t, e.index || 0) : e.name;
}
function zh(e, t) {
  let n = Rr();
  return l({ queries: e.map((e) => t(n, e)) });
}
function Bh(e) {
  let { appid: t } = e,
    { season: r, episode: i } = n();
  return (0, J.jsx)(Vh, {
    appid: t,
    nRequestedSeason: r ? Number(r) : void 0,
    nRequestedEpisode: i ? Number(i) : void 0,
  });
}
function Vh(e) {
  let { appid: t, nRequestedSeason: n, nRequestedEpisode: r } = e,
    { data: i } = I({ appid: t }),
    { data: a } = S({ appid: t }),
    { data: o } = U({ appid: t }),
    s = a?.seasons || [],
    [c, l] = q.useState(s.some((e) => e.index === n) ? n : s[0]?.index),
    [u, d] = q.useState(!1);
  if (!i || (!s.length && i.type !== 8)) return null;
  if ((q.use(Z.Ready()), !s.length))
    return (0, J.jsxs)(N, {
      marginTop: `5`,
      children: [
        (0, J.jsx)(nt, {
          level: `2`,
          size: `2`,
          weight: `heavy`,
          contrast: `title`,
          children: Z.Localize(`#AppPage_Series_ContentTitle`),
        }),
        (0, J.jsx)(V, {
          as: `p`,
          size: `4`,
          contrast: `subtitle`,
          children: Z.Localize(`#AppPage_Series_NoContent`),
        }),
      ],
    });
  let f = s.find((e) => e.index === c) || s[0],
    p = (e) => {
      l(e), d(!0);
    };
  return (0, J.jsx)(N, {
    marginTop: `5`,
    children: (0, J.jsxs)(F, {
      "flow-children": `column`,
      children: [
        (0, J.jsx)(nt, {
          level: `2`,
          size: `2`,
          weight: `heavy`,
          contrast: `title`,
          children:
            s.length > 1 ? Z.Localize(`#AppPage_Series_ContentTitle`) : Rh(f),
        }),
        s.length > 1 &&
          (0, J.jsx)(R, {
            wrap: `wrap`,
            gap: `2`,
            marginTop: `2`,
            children: s.map((e) =>
              (0, J.jsx)(
                L,
                {
                  variant: e === f ? `default` : `outline`,
                  onClick: () => p(e.index),
                  children: Rh(e),
                },
                e.index,
              ),
            ),
          }),
        i.type === 7 &&
          (0, J.jsx)(Hh, {
            appName: i.name,
            season: f,
            eNote: a?.video_extras_note,
          }),
        (0, J.jsx)(
          Uh,
          {
            season: f,
            series: i,
            strSeriesHeaderImage:
              o?.asset_url_format && o.header
                ? of(o.asset_url_format, o.header)
                : void 0,
            bFocusFirstEpisode: u,
            nActiveEpisode: !u && f.index === n ? (r ?? 0) : 0,
          },
          f.index,
        ),
      ],
    }),
  });
}
function Hh(e) {
  let { appName: t, season: n, eNote: r } = e,
    i = zh(
      (n.episode_appids || []).map((e) => ({ appid: e })),
      ti,
    ),
    a = 0,
    o = 0;
  for (let { data: e } of i)
    e?.episode?.type !== void 0 && !Ih(e.episode.type) && a++,
      (o += e?.running_time_minutes || 0);
  return (0, J.jsxs)(N, {
    marginTop: `2`,
    children: [
      (0, J.jsx)(V, {
        as: `div`,
        size: `3`,
        contrast: `description`,
        children: Z.LocalizePlural(`#AppPage_Series_ExtrasSummary`, a, o),
      }),
      (0, J.jsx)(V, {
        as: `div`,
        size: `3`,
        contrast: `subtitle`,
        marginTop: `1`,
        children: Z.Localize(Fh[r ?? 0], t || ``),
      }),
    ],
  });
}
function Uh(e) {
  let {
      season: t,
      series: n,
      strSeriesHeaderImage: r,
      bFocusFirstEpisode: i,
      nActiveEpisode: a,
    } = e,
    o = t.episode_appids || [],
    s = zh(
      o.map((e) => ({ appid: e })),
      Zr,
    );
  return (0, J.jsx)(N, {
    marginTop: `3`,
    children: (0, J.jsxs)(si, {
      "flow-children": `column`,
      children: [
        s.every(({ data: e, isPending: t }) => !t && !e?.visible) &&
          (0, J.jsx)(V, {
            as: `div`,
            size: `3`,
            contrast: `subtitle`,
            marginBottom: `2`,
            children: K(
              Z.Localize(`#AppPage_Series_SeasonNotAvailable`),
              (0, J.jsx)(`b`, {}),
            ),
          }),
        o.map((e, o) =>
          (0, J.jsx)(
            Wh,
            {
              appid: e,
              nSeason: t.index || 0,
              nPosition: o + 1,
              series: n,
              strSeriesHeaderImage: r,
              bActive: o + 1 === a,
              bAutoFocus: i && o === 0,
            },
            e,
          ),
        ),
      ],
    }),
  });
}
function Wh(e) {
  let {
      appid: t,
      nSeason: n,
      nPosition: r,
      series: i,
      strSeriesHeaderImage: a,
      bActive: o,
      bAutoFocus: s,
    } = e,
    c = q.useRef(null),
    { data: l } = I({ appid: t }),
    { data: u } = Cn({ appid: t }),
    { data: d } = Mn({ appid: t }),
    { data: f } = S({ appid: t }),
    { data: p } = U({ appid: t });
  q.useEffect(() => {
    o && c.current?.scrollIntoView({ block: `center` });
  }, [o]);
  let m = !!l?.visible,
    h = f?.episode,
    g = !m || !!h?.hide_details,
    _ = `${i.name}: `,
    v = l?.name || ``;
  v.startsWith(_) && (v = v.slice(_.length));
  let y = h?.number || String(r);
  g &&
    ((y = String(r)),
    (v = Z.Localize(
      `#AppPage_Series_EpisodePlaceholder`,
      String(n).padStart(2, `0`),
      String(r).padStart(2, `0`),
    )));
  let ee = v;
  Ih(h?.type) && (ee = Z.Localize(`#AppPage_Series_EpisodeName`, y, v));
  let te;
  if (h?.type === 1 && m) {
    let e = d?.original_release_date || d?.steam_release_date;
    e &&
      ((te = ur(e)),
      i.is_coming_soon && (te = Z.Localize(`#AppPage_Series_AvailableOn`, te)));
  } else {
    let e = h?.type === void 0 ? void 0 : Ph[h.type];
    te = e && Z.Localize(e);
  }
  let ne =
    p?.asset_url_format && p.header ? of(p.asset_url_format, p.header) : a;
  return (0, J.jsxs)(st, {
    ref: c,
    focusable: !0,
    navProps: { autoFocus: s },
    columns: `160px 1fr auto`,
    gap: `3`,
    padding: `2`,
    marginBottom: `2`,
    background: o ? `blue-3 60%` : `greyneutral-3 60%`,
    onClick:
      m && l?.is_free && !i.is_coming_soon
        ? () => {
            window.location.href = Th(`run/${t}`);
          }
        : void 0,
    children: [
      ne &&
        (0, J.jsx)(N, {
          children: (0, J.jsx)(Ea, { src: ne, alt: ``, width: `100%` }),
        }),
      (0, J.jsxs)(N, {
        children: [
          (0, J.jsx)(V, {
            as: `div`,
            size: `4`,
            weight: `heavy`,
            contrast: `title`,
            children: ee,
          }),
          (0, J.jsxs)(V, {
            as: `div`,
            size: `2`,
            contrast: `description`,
            children: [
              te && (0, J.jsx)(V, { marginEnd: `3`, children: te }),
              !g &&
                !!f?.running_time_minutes &&
                Z.LocalizePlural(
                  `#AppPage_Series_RunningTime`,
                  f.running_time_minutes,
                ),
            ],
          }),
          (0, J.jsx)(V, {
            as: `div`,
            size: `3`,
            contrast: `body`,
            whiteSpace: `pre-line`,
            marginTop: `1`,
            children: g
              ? Z.Localize(`#AppPage_Series_DescriptionNotAvailable`)
              : u?.short_description,
          }),
        ],
      }),
      m &&
        l?.is_free &&
        (0, J.jsxs)(N, {
          textAlign: `end`,
          children: [
            (0, J.jsx)(V, {
              as: `div`,
              size: `3`,
              contrast: `title`,
              children: Z.Localize(`#AppPage_Series_Free`),
            }),
            i.is_coming_soon
              ? (0, J.jsx)(V, {
                  as: `div`,
                  size: `3`,
                  contrast: `description`,
                  marginTop: `1`,
                  children: Z.Localize(`#AppPage_Series_ComingSoon`),
                })
              : (0, J.jsx)(L, {
                  color: `storegreen`,
                  focusable: !1,
                  marginTop: `1`,
                  children: Z.Localize(`#AppPage_Series_Watch`),
                }),
          ],
        }),
    ],
  });
}
var Gh = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAgCAYAAAEqOGvwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTgwMDZCNzcxMzUyMTFFODg3NzNBQkE4REFCMjBFRUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTgwMDZCNzgxMzUyMTFFODg3NzNBQkE4REFCMjBFRUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxODAwNkI3NTEzNTIxMUU4ODc3M0FCQThEQUIyMEVFQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxODAwNkI3NjEzNTIxMUU4ODc3M0FCQThEQUIyMEVFQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pna5vfcAAAPDSURBVHjaYvz//z8DLsCExv+PTxJFEbKkGhBPhbIZQQRAADHishOmSxxKrwFiX4ihQB1A/AFKwzFMhwCSKW9BBEAAMaCrBOKlQKyKxF8BxGzIatA1/EdiM6PJzUF3AjZwF42/GxFKmM4D4X9AzArEGmi2gzFAADHiiyti4xAjHrHwsUY8I5piEP8DPk2MSGxLJHYpqtHYA2INtgDAFU+44mwntqSC09NIiQ6v80CJMBXJhlR0NQABhM95yFgciD9DnfwHajAM9BJjBiEFoAT/BE2MH4jD0cTU8AU2IYs+o+Uq5IgAgfk4kjkXqRb9wSIGcvkDID6NQw8oL33CJocv1zJjEbsFpU1w6FEG4nvE5j8Y6APiFSTm5+tAbIC94MWfGNig8eFLQN1bIN5FSapDxlzQkvIT1PILWFIfTgwQQGSVd+QAJiLV9UKLjf/Qou8PlP0Zqc6iyCI2qIHS0OKTEVq1sUDZxkD8AoiXErSJQNj+h+YdZLFwaOmALPYEWoqQlRg+YElta5BKBmyOEsdlHq6g4wJiPiDejCb+GU/ggFokd0gNujnYinootsDSQMBWIREVdJ+g5Ra6+EFoWWdBQvmINx/9R6uk0WvGj2gNKxj4gEMcZxxdBGINLOKMBBIxP6n5qB2IJ1KzZMBXBOELPmxBByrpnwJxMakZNhVaKmNLWVOoWZUzQIv+twTU+EItYaO0mkiFGrQT2uSFVdmp0DbCB2q0gtDLuAtQSz9BMzUXsfoBAlRjBasJA0EUhB4qtBcvOZcKfkTBU2/t2YIXEfI5/QLPgWC/QP9AEKE9eipUvAXEioUWm87CSxni6swaN+LAu4Sd3UwyO+/N+OCjKlqce2iLG8IVK2FGU4zROZgStz4F70kWoiiYr7MidAkjwhOhxqishmcjrFkxLg2P8iYOqWDTR0OkRqLQSdIFSbDXULoox8pt28VKLDzPYYT7nFHyfIeY5+UlCywsK6BnHBgr1r6m2/am8Itd+q4iAbVYydOsDxAADyZQ+g7g0/IZUFZOGwXuixYN1kZ4CyjVEg/hxZJuY8fzFhJlF+WhJXjmkvAjrDXSuEe4Y/SwSwfa7ILwBZ669sVDfTTpHcVa07g3CR8HMkoHZ/V98lAVc5RfofxyvLOU06ZrHWd8usgeaVxiM/P7b5F60/8p7n7b5Pwle8TeS5y1LkspRPjqM4FcK4QHoCKQ6gx7RmUrBS5/IpZSsUMqZqkVM/+oiOw5JOXy9k1oQ3gGaL0mbICTYoCzyA1zMkzgE2CPNvb00kuepf0BBMCt9fl7kCsAAAAASUVORK5CYII=`,
  Kh = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAgCAQAAAD3NpPtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9/NocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A/hXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V/pHDBYY1hrFGNuayJsym740u2C+02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT//ID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs+ZmX8xlz7PPryjYVPiuWLskq3RV2ZsK/cqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta+x/+5Em0mzJ/+dGj/t8AyNmf2zvs9JmHt6vvmCpYtEFrcu+bYsc/m9lSGrTq9xWbtvveWGbZtMNm/ZarJt+w6rnft3u+45uy9s/4ODOYd+Hmk/Jn58xUnrU+fOJJ/9dX7SRe1LR68kXv13fc5Nm1t379TfU75/4mHeY7En+59lvhB5efB1/lv5dxc+NH0y/fzq64Lv4T8Ffp360/rP8f9/AA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIDSURBVHja7JYxaBRREIb/Pc8jnCIhBEEOOSTssQQRQdKIeIhgoU1ARQvBxoCNkiKNNiFYKEEshSAELGNhIcHSCHKSIITDxkY5UCPGmEtQ0fMI77PI0+I0bx+7G6vMNLPM7PtnZuf9swH6P5LTFtAmAxXVo7y1K/qmuc0CuqYnOm3tsnaoYu289iv8k4JL8NEc08ArehDiONC0nkE+84Le+DP8gMQATQzDCFFhmRpC9PEamM0CqEDBWsMsMWbtfnYjxE1glcgnVbe7zDR1TlrIEsUO/xB1rvv1xO2OeAv84N5fEJ0acocbdCcFKlDlPm3eU3bGjdMEFlxRPmWf4JSzooiPwDsu0bVxVJABqXZrRF/1QA1XkAuoqlBGy3qmZgxUXmtpLuwKBkOLEZReXeTxRiUFWtFCbLaRRhXK6IMGk1FQiT2xgy3EGb5jMLSTVSSPWtalpqsqyWgp2TCsy1H1qqbF1LPp5OwDTNCixTln4/p82M7lLPIYaDNL6DzkEZ+YYIBcUqAublHnQmy2d1kDVjmcxT7qZ4rLG+Y8RINFjmUB9BSY6fiCY8xzyD7tJXIxnS/QOIafXESI2zQ4iBCTwEu73jNZ5TlmMEzaxs0DZxHiCF+A0fQU9FuMrmif5mQkSdskbZckPdeUzitIf4/+rQ9pUbX2Lsrs9Hsv2PrJTyq/BgA2L+kLTtrBuQAAAABJRU5ErkJggg==`,
  qh = `Sl0-0gWyXH4-`,
  Jh = `vEPSMT4v-yc-`,
  Yh = `xkSCKlqYixE-`,
  Xh = `_3NqWEVeqDKg-`,
  Zh = `bSxWVOcA-Rs-`,
  Qh = `xqyRHioUNOA-`,
  $h = `jzzyZV9Ndlw-`,
  eg = `GP5CsLCzIRQ-`,
  tg = `_30JAWN5Kor0-`,
  ng = `oHED7Dz7YUw-`,
  rg = `G4Y5vnKnjss-`,
  ig = `IzHgqx05hwg-`,
  ag = `RAdU2xWu3-4-`,
  og = `FARJToyLDAA-`,
  sg = `dA19VXylzCQ-`,
  cg = `q22iQ3zsDw4-`,
  lg = `_7N-2YpVL29o-`,
  ug = `-wlmXLWOiJ4-`,
  dg = `c5K1j23qVAM-`,
  fg = `q-JkuJiivV4-`,
  pg = `AGXVnc2o2GA-`;
function mg(e) {
  return _g(e)
    ? O(`#Language_` + Ci(e.elanguage))
    : vg(e)
      ? O(`#language_ext_` + Yi(e.eadditionallanguage))
      : O(`#language_selection_none`);
}
function hg(e) {
  if (!e) return [];
  let t = [];
  for (let n = 0; n < e.length; n++) e[e.length - n - 1] == `1` && t.push(n);
  return t;
}
function gg(e) {
  if (!e) return [];
  let t = [],
    n = BigInt(e);
  for (let e = 0; e < 32; e++) (n >> BigInt(e)) & BigInt(1) && t.push(e);
  return t;
}
function _g(e) {
  return e.elanguage != null && e.elanguage != -1;
}
function vg(e) {
  return e.eadditionallanguage != null && e.eadditionallanguage != -1;
}
function yg(e, t) {
  let n;
  if (!e || !t?.length)
    return { rgSorted: [], nForceVisible: 0, firstPreferredLanguage: n };
  let r = [],
    i = [Wr(e), ...gg(e.preferences?.secondary_languages)].filter(
      (e) => e != null,
    ),
    a = new Set();
  for (let e of i) {
    let i = t.findIndex((t) => t.elanguage == e);
    i != -1 &&
      (r.push({ ...t[i], preferred: !0 }),
      a.add(e),
      (n ||= { ...t[i], preferred: !0 }));
  }
  let o = hg(e.preferences?.additional_languages),
    s = new Set();
  for (let e of o) {
    let n = t.findIndex((t) => t.eadditionallanguage == e);
    n != -1 && (r.push({ ...t[n], preferred: !0 }), s.add(e));
  }
  let c = r.length;
  for (let e of t)
    if (_g(e)) {
      if (a.has(e.elanguage)) continue;
      r.push({ ...e, preferred: !1 }), a.add(e.elanguage);
    } else if (vg(e)) {
      if (s.has(e.elanguage)) continue;
      r.push({ ...e, preferred: !1 }), s.add(e.eadditionallanguage);
    }
  return { rgSorted: r, nForceVisible: c, firstPreferredLanguage: n };
}
function bg(e) {
  let { appid: t, initialOpen: n } = e,
    [r, i] = (0, q.useState)(n ?? !1),
    { data: a } = dn({ appid: t }),
    { data: o } = I({ appid: t }),
    { data: s } = Xr(),
    [c, l] = (0, q.useState)(!1),
    u = fa(`md`);
  q.useId();
  let {
    rgSorted: d,
    nForceVisible: f,
    firstPreferredLanguage: p,
  } = q.useMemo(() => yg(s, a ?? []), [s, a]);
  if (!d.length || !o || o.type == 11) return null;
  let m = o.type == 7 || o.type == 8,
    h = u ? ug : dg,
    g = u ? Sg : Cg;
  return (0, J.jsxs)(Kr, {
    className: rg,
    focusableIfEmpty: !0,
    open: r,
    onToggle: (e) => i(e.currentTarget.open),
    children: [
      (0, J.jsxs)(
        Ti,
        {
          className: ng,
          children: [
            (0, J.jsx)(`div`, {
              className: ig,
              children: (0, J.jsx)(hr, { className: og }),
            }),
            (0, J.jsxs)(`div`, {
              className: ag,
              children: [
                (0, J.jsx)(V, {
                  color: `blue-8`,
                  children: Z.Localize(`#languages_supported`, d.length),
                }),
                !r && (0, J.jsx)(xg, { language: p }),
              ],
            }),
            r &&
              (0, J.jsx)(`div`, { className: `zIMPfMwOipk-`, children: `-` }),
            !r &&
              (0, J.jsx)(`div`, { className: `oGgdefKPK7A-`, children: `+` }),
          ],
        },
        r ? `open` : `closed`,
      ),
      (0, J.jsxs)(ua, {
        className: sg,
        focusable: r,
        children: [
          !u &&
            (0, J.jsxs)(`div`, {
              className: `D7NzJWmwmw0-`,
              children: [
                (0, J.jsx)(V, {
                  color: `greyneutral-11`,
                  children: Z.Localize(`#language_header_subtitles`),
                }),
                (0, J.jsx)(`div`, {
                  className: `_6tDDt-5hCL0-`,
                  children: (0, J.jsx)(Er, { className: `E2GHWqOnriU-` }),
                }),
                (0, J.jsx)(V, {
                  color: `greyneutral-11`,
                  children: Z.Localize(`#language_header_full_audio_short`),
                }),
                (0, J.jsx)(`div`, {
                  className: `_6tDDt-5hCL0-`,
                  children: (0, J.jsx)(Ii, { className: `E2GHWqOnriU-` }),
                }),
              ],
            }),
          (0, J.jsxs)(`table`, {
            className: cg,
            children: [
              (0, J.jsxs)(`colgroup`, {
                children: [
                  (0, J.jsx)(`col`, { className: lg }),
                  (0, J.jsx)(`col`, { className: h }),
                  (0, J.jsx)(`col`, { className: h }),
                  u && (0, J.jsx)(`col`, { className: h }),
                ],
              }),
              u &&
                (0, J.jsx)(`thead`, {
                  children: (0, J.jsxs)(`tr`, {
                    children: [
                      (0, J.jsx)(`th`, {}),
                      (0, J.jsx)(`th`, {
                        children: (0, J.jsx)(V, {
                          color: `greyneutral-11`,
                          children: Z.Localize(
                            m
                              ? `#language_header_interface_video`
                              : `#language_header_interface`,
                          ),
                        }),
                      }),
                      (0, J.jsx)(`th`, {
                        children: (0, J.jsx)(V, {
                          color: `greyneutral-11`,
                          children: Z.Localize(`#language_header_subtitles`),
                        }),
                      }),
                      (0, J.jsx)(`th`, {
                        children: (0, J.jsx)(V, {
                          color: `greyneutral-11`,
                          children: Z.Localize(`#language_header_full_audio`),
                        }),
                      }),
                    ],
                  }),
                }),
              (0, J.jsx)(`tbody`, {
                children: d.map((e, t) => (0, J.jsx)(g, { language: e }, t)),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function xg(e) {
  let { language: t } = e,
    { data: n } = Xr();
  if (!n) return null;
  if (!t || (!t.supported && !t.subtitles && !t.full_audio))
    return (0, J.jsx)(V, {
      color: `blue-8`,
      children: O(`#Language_` + Ci(Wr(n))),
    });
  {
    let e;
    return (
      (e = t.full_audio
        ? t.subtitles
          ? `#language_supported_subtitles_audio`
          : `#language_supported_audio`
        : t.subtitles
          ? `#language_supported_subtitles`
          : `#language_supported_interface`),
      (0, J.jsx)(V, { color: `storegreen-7`, children: Z.Localize(e, mg(t)) })
    );
  }
}
function Sg(e) {
  let { language: t } = e;
  return (
    fa(`md`),
    !t.supported && !t.full_audio && !t.subtitles
      ? (0, J.jsxs)(`tr`, {
          className: D(t.preferred && `VgbXhKO-yY4-`),
          children: [
            (0, J.jsx)(`td`, {
              children: (0, J.jsx)(V, {
                color: t.preferred ? `storegreen-7` : `blue-8`,
                children: mg(t),
              }),
            }),
            (0, J.jsx)(`td`, {
              colSpan: 3,
              children: Z.Localize(`#language_not_supported`),
            }),
          ],
        })
      : (0, J.jsxs)(`tr`, {
          className: D(t.preferred && `VgbXhKO-yY4-`),
          children: [
            (0, J.jsx)(`td`, { className: pg, children: mg(t) }),
            (0, J.jsx)(`td`, {
              children:
                (t.supported && (0, J.jsx)(`span`, { children: `✔` })) ||
                (0, J.jsx)(J.Fragment, {}),
            }),
            (0, J.jsx)(`td`, {
              children:
                (t.subtitles && (0, J.jsx)(`span`, { children: `✔` })) ||
                (0, J.jsx)(J.Fragment, {}),
            }),
            (0, J.jsx)(`td`, {
              children:
                (t.full_audio && (0, J.jsx)(`span`, { children: `✔` })) ||
                (0, J.jsx)(J.Fragment, {}),
            }),
          ],
        })
  );
}
function Cg(e) {
  let { language: t } = e;
  return !t.supported && !t.full_audio && !t.subtitles
    ? (0, J.jsx)(`tr`, {
        className: D(t.preferred && `VgbXhKO-yY4-`),
        children: (0, J.jsx)(`td`, {
          colSpan: 3,
          children: Z.Localize(`#language_not_supported_inline`, mg(t)),
        }),
      })
    : (0, J.jsxs)(`tr`, {
        className: D(t.preferred && `VgbXhKO-yY4-`),
        children: [
          (0, J.jsx)(`td`, { className: pg, children: mg(t) }),
          (0, J.jsx)(`td`, {
            children: (0, J.jsx)(`div`, {
              className: fg,
              children:
                (t.subtitles && (0, J.jsx)(Er, {})) ||
                (0, J.jsx)(J.Fragment, {}),
            }),
          }),
          (0, J.jsx)(`td`, {
            children: (0, J.jsx)(`div`, {
              className: fg,
              children:
                (t.full_audio && (0, J.jsx)(Ii, {})) ||
                (0, J.jsx)(J.Fragment, {}),
            }),
          }),
        ],
      });
}
function wg(e) {
  return (0, J.jsx)(N, {
    marginBottom: `2`,
    children: (0, J.jsx)(V, {
      contrast: `title`,
      size: `2`,
      weight: `heavy`,
      style: { letterSpacing: `0.5px` },
      children: e.text,
    }),
  });
}
function Tg(e) {
  let { appid: t, rgCategories: n, controllersUsed: r } = e,
    { data: i } = I({ appid: t }),
    { data: a } = S({ appid: t }),
    o = q.useMemo(() => {
      let e = new Set(i?.categories?.feature_categoryids ?? []);
      return (
        i?.categories?.supported_player_categoryids?.forEach((t) => e.add(t)),
        i?.categories?.controller_categoryids?.forEach((t) => e.add(t)),
        e
      );
    }, [i]),
    { data: s } = gn({ appid: t }),
    c =
      s?.purchase_options?.find(
        (e) =>
          e.free_with_master_sub_appid && e.free_with_master_sub_appid != 0,
      )?.free_with_master_sub_appid ?? 0;
  if (
    (q.use(Z.Ready()),
    q.use(W.Ready()),
    !i || i.type == null || i?.type == 10 || !a)
  )
    return null;
  let l = n.filter((e) => o.has(e.categoryid ?? 0));
  if (i.type == 11 && l.length == 0) return null;
  let { vetted: u } = a;
  return (0, J.jsxs)(si, {
    className: qh,
    "flow-children": `column`,
    children: [
      (0, J.jsx)(wg, { text: Z.Localize(`#AppPage_Features`) }),
      (0, J.jsxs)(V, {
        color: `blue-8`,
        size: `2`,
        children: [
          l.length > 0 &&
            (0, J.jsx)(J.Fragment, {
              children: (0, J.jsx)(F, {
                className: `YxRJGsT3nxM-`,
                "flow-children": `column`,
                children: l.map((e, t) => (0, J.jsx)(Og, { category: e }, t)),
              }),
            }),
          !u && (0, J.jsx)(Ag, { appid: t }),
          (0, J.jsx)(ja, {
            features: Aa(i?.categories?.feature_categoryids ?? []),
          }),
          (0, J.jsx)(bg, { appid: t }),
          (0, J.jsx)(gs, { ...jg(t, o, r, a) }),
          (0, J.jsxs)(V, {
            color: `gold-11`,
            children: [
              (0, J.jsx)(Ng, { extraDetails: a }),
              (0, J.jsx)(Bg, { extraDetails: a }),
              (0, J.jsx)(Fg, { extraDetails: a }),
              (0, J.jsx)(Rg, { eulas: a.eula ?? [] }),
              c != 0 && (0, J.jsx)(Ig, { appid: c }),
              (0, J.jsx)(zg, { extraDetails: a }),
              (0, J.jsx)(Vg, { extraDetails: a }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Eg(e) {
  switch (e.categoryid) {
    case 21:
    case 10:
      return `category1=` + e.categoryid;
    case 54:
      return `vrsupport=401`;
    case 53:
      return `vrsupport=402`;
    default:
      return `category2=` + e.categoryid;
  }
}
function Dg(e) {
  return e == 18 || e == 28 || (e >= 55 && e <= 60) || (e >= 64 && e <= 82);
}
function Og(e) {
  let { category: t } = e,
    n = fr(`${w.STORE_BASE_URL}search/?${Eg(t)}`);
  return Dg(t.categoryid)
    ? null
    : (0, J.jsxs)(B, {
        href: n,
        className: D(Jh),
        children: [
          (0, J.jsx)(`div`, {
            className: Xh,
            children: (0, J.jsx)(`img`, {
              className: Zh,
              src: `${w.STORE_CDN_URL}${t.image_url}`,
              alt: ``,
            }),
          }),
          (0, J.jsx)(V, {
            className: Yh,
            marginLeft: `2`,
            children: t.display_name,
          }),
        ],
      });
}
var kg = 60;
function Ag(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t }),
    { data: r } = Mn({ appid: t });
  if (!n || w.EREALM == Br.k_ESteamRealmChina) return null;
  let i = r?.steam_release_date ?? 0,
    a = i != 0 && Date.now() / 1e3 - i < 86400 * kg,
    o,
    s;
  switch (n.type) {
    case 0:
      (o = a
        ? `#feature_learning_about_game`
        : `#feature_profile_features_limited`),
        (s = `#feature_learning_about_desc_game`);
      break;
    case 6:
      (o = a
        ? `#feature_learning_about_software`
        : `#feature_profile_features_limited`),
        (s = `#feature_learning_about_desc_software`);
      break;
    case 4:
      (o = a
        ? `#feature_learning_about_dlc`
        : `#feature_profile_features_limited`),
        (s = `#feature_learning_about_desc_dlc`);
      break;
    case 2:
      (o = a
        ? `#feature_learning_about_mod`
        : `#feature_profile_features_limited`),
        (s = `#feature_learning_about_desc_mod`);
  }
  return !o || !s
    ? null
    : (0, J.jsxs)(F, {
        className: Qh,
        children: [
          (0, J.jsx)(`div`, {
            className: Xh,
            children: (0, J.jsx)(`img`, {
              className: Zh,
              src: a ? Kh : Gh,
              alt: ``,
            }),
          }),
          (0, J.jsxs)(V, {
            className: Yh,
            marginLeft: `2`,
            children: [Z.Localize(o), ` `],
          }),
        ],
      });
}
function jg(e, t, n, r) {
  let { controller_wizard_complete: i, no_mouse_keyboard_support: a } = r,
    o =
      !!n.has_any_controller &&
      !n.has_ps4_controller &&
      !n.has_ps5_controller &&
      !n.has_xbox_controller;
  return {
    unAppID: e,
    bFullXboxControllerSupport: t.has(28),
    bPartialXboxControllerSupport: t.has(18),
    bPS4ControllerSupport: t.has(55),
    bPS4ControllerBTSupport: t.has(56),
    bPS5ControllerSupport: t.has(56),
    bPS5ControllerBTSupport: t.has(58),
    bSteamInputAPISupport: t.has(59),
    bNoKeyboardSupport: a,
    bGamepadPreferred: t.has(60),
    bControllerSupportWizardComplete: i,
    bHasXbox: !!n.has_xbox_controller,
    bHasPS4: !!n.has_ps4_controller,
    bHasPS5: !!n.has_ps5_controller,
    bHasOther: o,
  };
}
function Mg(e) {
  let { activationLimit: t } = e;
  return t
    ? t == `Unlimited`
      ? (0, J.jsx)(`div`, {
          className: void 0,
          children: Z.Localize(`#feature_machine_activation_limit_unlimited`),
        })
      : (0, J.jsx)(`div`, {
          className: void 0,
          children: Z.Localize(`#feature_machine_activation_limit`, t),
        })
    : null;
}
function Ng(e) {
  let { extraDetails: t } = e,
    { drm_third_party_type: n, drm_activation_limit: r } = t;
  return n
    ? (0, J.jsx)(`div`, {
        className: $h,
        children: (0, J.jsxs)(V, {
          children: [
            Z.Localize(`#feature_third_party_drm`, n),
            (0, J.jsx)(Mg, { activationLimit: r }),
          ],
        }),
      })
    : null;
}
function Pg(e) {
  return e == `secureboot_tpm2`
    ? Z.Localize(`#feature_anticheat_bootprotection_secureboottpm2_desc`)
    : ``;
}
function Fg(e) {
  let { extraDetails: t } = e,
    { anticheat: n } = t;
  if (!n) return null;
  let {
    kernel_mode: r,
    boot_protection: i,
    uninstall_completely: a,
    name: o,
    boot_protection_name: s,
  } = n;
  return (0, J.jsxs)(`div`, {
    className: D($h, eg),
    children: [
      (0, J.jsx)(V, {
        children: Z.Localize(
          r
            ? `#feature_includes_kernel_anti_cheat`
            : `#feature_includes_non_kernel_anti_cheat`,
        ),
      }),
      (0, J.jsxs)(V, {
        color: `bronze-12`,
        children: [
          o,
          r &&
            !a &&
            (0, J.jsx)(V, {
              children: Z.Localize(
                `#feature_anti_cheat_requires_manual_removal`,
              ),
            }),
        ],
      }),
      i &&
        (0, J.jsxs)(V, {
          children: [
            Z.Localize(`#feature_anticheat_bootprotection`),
            (0, J.jsx)(`div`, { className: void 0, children: Pg(s) }),
          ],
        }),
    ],
  });
}
function Ig(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t });
  return !n || !n.name
    ? null
    : (0, J.jsx)(Lg, {
        appid: t,
        title: Z.Localize(`#feature_master_sub_app_eula`, n.name),
      });
}
function Lg(e) {
  let { appid: t, title: n } = e,
    { data: r } = S({ appid: t });
  return r ? (0, J.jsx)(Rg, { eulas: r.eula ?? [], title: n }) : null;
}
function Rg(e) {
  let { eulas: t, title: n } = e;
  if (!t?.length) return null;
  let r = n || Z.Localize(`#feature_third_party_eula`);
  return (0, J.jsxs)(`div`, {
    className: D($h, void 0),
    children: [
      (0, J.jsxs)(V, { children: [r, ` `] }),
      t.map((e, t) =>
        (0, J.jsx)(
          B,
          {
            className: void 0,
            href: e.url,
            children: (0, J.jsx)(V, { color: `bronze-12`, children: e.name }),
          },
          t,
        ),
      ),
    ],
  });
}
function zg(e) {
  return e.extraDetails.refund_checks_ea_playtime
    ? (0, J.jsx)(`div`, {
        className: $h,
        children: (0, J.jsx)(V, {
          children: Z.Localize(`#feature_third_party_refund_playtime`),
        }),
      })
    : null;
}
function Bg(e) {
  let { extraDetails: t } = e,
    { user_account_third_party: n, user_account_third_party_link_to_steam: r } =
      t;
  return n
    ? (0, J.jsx)(`div`, {
        className: D($h, tg),
        children: (0, J.jsxs)(V, {
          children: [
            Z.Localize(`#feature_external_account_service`, n),
            !!r &&
              (0, J.jsx)(J.Fragment, {
                children: Z.Localize(
                  `#feature_external_account_service_canlink`,
                ),
              }),
          ],
        }),
      })
    : null;
}
function Vg(e) {
  let { extraDetails: t } = e,
    { ai_generation_service: n } = t;
  return !n || !n.name || !n.url
    ? null
    : (0, J.jsx)(`div`, {
        className: $h,
        children: (0, J.jsx)(V, {
          children: on(
            Z.Localize(
              `#feature_ai_generated_content_external_account_service`,
              n.name,
            ),
            (0, J.jsx)(B, { href: n.url }),
          ),
        }),
      });
}
var Hg = `MzQ075tv64A-`,
  Ug = `uTf-rMHm9-k-`,
  Wg = `CxfOaHR8QmQ-`,
  Gg = `YF4iasdfvoA-`;
function Kg(e) {
  let { appid: t } = e,
    { data: n } = S({ appid: t }),
    r = n?.music_album,
    i = r?.tracks,
    [a, o] = q.useState(),
    { mapDiscs: s, sortedDiscIDs: c } = q.useMemo(() => {
      let e = new Map();
      for (let t of i ?? []) {
        let n = t.disc_number ?? 1;
        e.has(n)
          ? e.get(n)?.tracks.push(t)
          : e.set(n, { discNumber: n, tracks: [t] });
      }
      return { mapDiscs: e, sortedDiscIDs: Array.from(e.keys()).sort() };
    }, [i]);
  if (!r || !c.length) return null;
  q.use(Z.Ready());
  let l = s.get(a ?? c[0]);
  return (0, J.jsxs)(R, {
    direction: `column`,
    children: [
      l &&
        (0, J.jsxs)(R, {
          className: `_4q1FU2WiIPM-`,
          direction: `column`,
          children: [
            c.length > 1 &&
              (0, J.jsx)(F, {
                "flow-children": `row`,
                className: `bOl0oTaLV4s-`,
                children: c.map((e) =>
                  (0, J.jsx)(
                    L,
                    {
                      variant: e == l.discNumber ? `inverted` : void 0,
                      onClick: () => o(e),
                      children: Z.Localize(`#music_disc_tab`, e),
                    },
                    e,
                  ),
                ),
              }),
            (0, J.jsx)(N, {
              className: `-ucDH6QzrY8-`,
              children: (0, J.jsx)(qg, { tracks: l.tracks }),
            }),
          ],
        }),
      (0, J.jsx)(Zg, { album: r }),
    ],
  });
}
function qg(e) {
  let { tracks: t } = e;
  return (0, J.jsx)(V, {
    color: `greyneutral-12`,
    children: (0, J.jsxs)(`table`, {
      className: Hg,
      children: [
        (0, J.jsxs)(`colgroup`, {
          children: [
            (0, J.jsx)(`col`, { className: Ug }),
            (0, J.jsx)(`col`, { className: Wg }),
            (0, J.jsx)(`col`, { className: Gg }),
          ],
        }),
        (0, J.jsx)(`tbody`, {
          children: t.map((e, t) =>
            (0, J.jsx)(Jg, { track: e, odd: t % 2 != 0 }, t),
          ),
        }),
      ],
    }),
  });
}
function Jg(e) {
  let { track: t, odd: n } = e;
  return (0, J.jsxs)(`tr`, {
    className: D(n && `dagEXsxeNCk-`),
    children: [
      (0, J.jsx)(`td`, { children: t.track_number }),
      (0, J.jsx)(`td`, { children: Yg(t) }),
      (0, J.jsx)(`td`, { className: Gg, children: Xg(t) }),
    ],
  });
}
function Yg(e) {
  return e.other_name
    ? Z.Localize(`#music_localized_track_name`, e.name ?? ``, e.other_name)
    : e.name;
}
function Xg(e) {
  let t = e.duration_seconds ?? 0;
  return Z.Localize(
    `#music_album_track_duration`,
    Math.floor(t / 60),
    (t % 60).toString().padStart(2, `0`),
  );
}
function Zg(e) {
  let { album: t } = e;
  return !t.artist && !t.composer && !t.label && !t.other_credits
    ? null
    : (0, J.jsxs)(R, {
        direction: `column`,
        className: void 0,
        marginTop: `4`,
        children: [
          (0, J.jsx)(V, {
            size: `5`,
            weight: `heavy`,
            children: Z.Localize(`#AppPage_MusicAlbum_Credits`),
          }),
          (0, J.jsxs)(st, {
            columns: `max-content max-content`,
            gapX: `2`,
            margin: `2`,
            children: [
              (0, J.jsx)(Qg, {
                token: `#AppPage_MusicAlbum_Credits_Artist`,
                value: t.artist,
              }),
              (0, J.jsx)(Qg, {
                token: `#AppPage_MusicAlbum_Credits_Composer`,
                value: t.composer,
              }),
              (0, J.jsx)(Qg, {
                token: `#AppPage_MusicAlbum_Credits_Label`,
                value: t.label,
              }),
              (0, J.jsx)(Qg, {
                token: `#AppPage_MusicAlbum_Credits_OtherCredits`,
                value: t.other_credits,
              }),
            ],
          }),
        ],
      });
}
function Qg(e) {
  let { token: t, value: n } = e;
  return n
    ? (0, J.jsxs)(J.Fragment, {
        children: [
          (0, J.jsx)(V, { className: void 0, children: Z.Localize(t) }),
          (0, J.jsx)(V, { whiteSpace: `pre-line`, children: n }),
        ],
      })
    : null;
}
var $g = `YIjhJAb5kRs-`,
  e_ = `x8REL9YrNUs-`,
  t_ = new la(`InterestButtons`);
function n_(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t });
  return !n || n.type == null
    ? null
    : (0, J.jsx)(F, {
        className: void 0,
        "flow-children": `column`,
        children: (0, J.jsxs)(R, {
          direction: `column`,
          gap: `1`,
          children: [
            (0, J.jsx)(u_, { appid: t }),
            (0, J.jsxs)(R, {
              direction: `row`,
              width: `100%`,
              gap: `1`,
              children: [
                (0, J.jsx)(a_, { appid: t }),
                (0, J.jsx)(o_, { appid: t }),
              ],
            }),
          ],
        }),
      });
}
function r_(e) {
  let { options: t, children: n } = e;
  return (0, J.jsxs)(`span`, {
    className: $g,
    children: [
      t.map((e, t) => (0, J.jsx)(`span`, { className: e_, children: e }, t)),
      (0, J.jsx)(`span`, { children: n }),
    ],
  });
}
function i_() {
  return (0, J.jsx)(N, {
    width: `16px`,
    marginRight: `1`,
    marginTop: `1`,
    children: (0, J.jsx)(Tr, {}),
  });
}
function a_(e) {
  let { appid: t } = e,
    { data: n } = Nc(t),
    r = Lc(t);
  if (!n) return null;
  let { following: i = !1 } = n,
    a = (e) => {
      r.mutateAsync({ following: e, old_interest: n });
    },
    o = Z.Localize(`#button_follow`),
    s = (0, J.jsxs)(R, {
      direction: `row`,
      align: `center`,
      gap: `1`,
      children: [(0, J.jsx)(i_, {}), Z.Localize(`#button_follow_undo`)],
    });
  return (0, J.jsx)(N, {
    flexGrow: `1`,
    children: (0, J.jsxs)(L, {
      color: `greyneutral`,
      onClick: () => a(!i),
      width: `100%`,
      children: [
        (0, J.jsx)(N, {
          children: i ? (0, J.jsx)(Qn, {}) : (0, J.jsx)(Fr, {}),
        }),
        (0, J.jsx)(r_, { options: [o, s], children: i ? s : o }),
      ],
    }),
  });
}
function o_(e) {
  let { appid: t } = e,
    { data: n } = Nc(t),
    r = Ic(t),
    [i, a] = q.useState(!1);
  if (!n) return null;
  let { ignored: o = !1, ignored_reason: s } = n,
    c = !!o && (s ?? !1),
    l = (e, t) => {
      t_.Info(`ignoring`, e, t),
        r.mutateAsync({ ignored: e, ignored_reason: t, old_interest: n });
    },
    u = (e) => {
      l(e !== !1, e === !1 ? void 0 : e), a(!1);
    },
    d = Z.Localize(`#button_ignore`),
    f = (0, J.jsxs)(R, {
      direction: `row`,
      align: `center`,
      gap: `1`,
      children: [(0, J.jsx)(i_, {}), Z.Localize(`#button_ignore_undo`)],
    });
  return (0, J.jsx)(N, {
    flexGrow: `1`,
    children: (0, J.jsxs)(ui.Root, {
      open: i,
      onOpenChange: a,
      children: [
        (0, J.jsx)(ui.Anchor, {
          children: (0, J.jsx)(L, {
            color: `greyneutral`,
            onClick: () => a(!i),
            width: `100%`,
            children: (0, J.jsx)(r_, { options: [d, f], children: o ? f : d }),
          }),
        }),
        (0, J.jsx)(ui.Positioner, {
          children: (0, J.jsx)(ui.FocusManager, {
            children: (0, J.jsx)(N, {
              border: `1`,
              borderColor: `blue-7`,
              background: `greyneutral-4`,
              elevation: `1`,
              padding: `1`,
              children: (0, J.jsx)(_i, {
                children: (0, J.jsxs)(R, {
                  direction: `column`,
                  children: [
                    (0, J.jsx)(l_, { type: 0, currentType: c, select: u }),
                    (0, J.jsx)(l_, { type: 2, currentType: c, select: u }),
                    (0, J.jsx)(l_, { type: !1, currentType: c, select: u }),
                  ],
                }),
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function s_(e) {
  switch (e) {
    default:
    case !1:
      return `#ignore_reason_none_header`;
    case 0:
      return `#ignore_reason_generic_header`;
    case 2:
      return `#ignore_reason_otherstore_header`;
  }
}
function c_(e) {
  switch (e) {
    default:
    case !1:
      return `#ignore_reason_none_desc`;
    case 0:
      return `#ignore_reason_generic_desc`;
    case 2:
      return `#ignore_reason_otherstore_desc`;
  }
}
function l_(e) {
  let { type: t, currentType: n, select: r } = e;
  return (0, J.jsx)(F, {
    focusable: !0,
    onActivate: () => r(t),
    autoFocus: n == 0,
    children: (0, J.jsxs)(R, {
      direction: `row`,
      padding: `2`,
      maxWidth: `275px`,
      gap: `2`,
      children: [
        (0, J.jsx)(N, {
          minWidth: `16px`,
          maxWidth: `16px`,
          children: t === n && (0, J.jsx)(V, { children: (0, J.jsx)(Tr, {}) }),
        }),
        (0, J.jsxs)(R, {
          direction: `column`,
          gap: `1`,
          children: [
            (0, J.jsx)(V, {
              color: `greyneutral-12`,
              weight: `heavy`,
              children: Z.Localize(s_(t)),
            }),
            (0, J.jsx)(V, {
              color: `greyneutral-11`,
              children: Z.Localize(c_(t)),
            }),
          ],
        }),
      ],
    }),
  });
}
function u_(e) {
  let { appid: t } = e,
    [n, r] = q.useState(!1),
    i = qr(),
    a = (0, J.jsxs)(R, {
      direction: `row`,
      align: `center`,
      gap: `1`,
      children: [
        (0, J.jsx)(N, {
          width: `20px`,
          marginRight: `1`,
          children: (0, J.jsx)(Mr, {}),
        }),
        Z.Localize(`#button_wishlist`),
      ],
    }),
    o = (0, J.jsxs)(R, {
      direction: `row`,
      align: `center`,
      gap: `1`,
      children: [
        (0, J.jsx)(N, {
          width: `20px`,
          marginRight: `1`,
          children: (0, J.jsx)(ii, {}),
        }),
        Z.Localize(`#button_wishlist_undo`),
      ],
    });
  return (0, J.jsx)(N, {
    children: (0, J.jsxs)(F, {
      onSecondaryButton: () => r(!0),
      onSecondaryActionDescription: Z.Localize(`#wishlist_manage_categories`),
      children: [
        (0, J.jsx)(jf, {
          appid: t,
          bAllowRemove: !0,
          width: `100%`,
          children: (e) =>
            (0, J.jsx)(r_, { options: [a, o], children: e ? o : a }),
        }),
        n && (0, J.jsx)(ed, { appid: t, steamid: i, onClose: () => r(!1) }),
      ],
    }),
  });
}
var d_ = `ix-tBm6Bho8-`,
  f_ = `ddSW8NTrpmA-`,
  p_ = `tHgINvo1Hnc-`,
  m_ = `bIkJK6-VgKQ-`;
function h_(e, t) {
  return (e || []).map((e) => ({
    accountid: Pn.ToAccountID(e.steamid),
    nMinutesPlayedRecent: e.minutes_played || 0,
    nMinutesPlayedForever: e.minutes_played_forever || 0,
    bInGame: t,
  }));
}
function g_(e) {
  return h_(e.in_wishlist, !1);
}
function __(e, t) {
  let n = h_(e.in_game, !0).concat(
    h_(e.played_recently, !1),
    h_(e.played_ever, !1),
    h_(e.owns, !1),
  );
  return t ? n.filter((e) => e.nMinutesPlayedForever > 0) : n;
}
function v_(e) {
  let { data: t } = I({ appid: e }),
    { data: n } = _h(e);
  return q.useMemo(
    () =>
      !t || !n
        ? null
        : { rgFriendsThatOwn: __(n, !!t.is_free), rgFriendsThatWant: g_(n) },
    [t, n],
  );
}
async function y_(e, t) {
  let n = ji(w.STORE_BASE_URL, t, C.country_code),
    r = (await (await fetch(n)).json()).rgCurations[e] || {};
  return Object.entries(r).map((e) => ({
    clan_accountid: Number(e[0]),
    recommendation: e[1],
  }));
}
function b_(e) {
  return d({
    queryKey: [`UserCurations` + C.accountid],
    queryFn: async () => y_(e, C.accountid),
    enabled: !!C.accountid,
  });
}
function x_(e) {
  let { data: t } = I({ appid: e }),
    { data: n } = Cn({ appid: e }),
    { data: r } = kn({ appid: e }),
    { data: i } = Un({ appid: e }),
    { data: a } = dn({ appid: e }),
    { data: o } = Fa(e),
    { data: s } = ni(),
    { data: c } = Na(e),
    { data: l } = Pa(),
    { data: u } = _h(e),
    { data: d } = Xr(),
    { data: f } = tr(C.steamid),
    { data: p } = Ie(),
    { data: m } = b_(e);
  return q.useMemo(() => {
    if (
      !t ||
      !n ||
      !r ||
      !i ||
      !a ||
      !o ||
      !s ||
      !c ||
      !l ||
      !u ||
      !d ||
      !f ||
      !p ||
      !m
    )
      return null;
    let h = { appid: e };
    (h.nCurrentUserPlaytimeMins = u.your_info?.minutes_played_forever || 0),
      (h.bCurrentUserOwns = !!u.your_info?.owned),
      (h.bFromInteractiveRecommender = c.bRecommendedByIR),
      h.bCurrentUserOwns ||
        ((h.rgSimilarApps = c.arrSimilarPlayedApps || []),
        h.rgSimilarApps?.length == 0 &&
          (h.rgMatchingTagsPlayed =
            s.filter((e) => r?.find((t) => t.tagid == e.tagid)) || []));
    let g =
        (d.preferences?.review_score_preference == 1 && i.summary_unfiltered) ||
        i.summary_filtered,
      _ = g?.review_score || 0;
    if (
      ((h.bPositiveReviews = _ > 6),
      (h.bNegativeReviews = _ > 0 && _ < 5),
      (h.eReviewScore = _),
      (h.strReviewScoreLabel = g?.review_score_label),
      t.type != 10 && t.type != 11)
    ) {
      let e = Wr(d);
      h.bUserLanguageSupported = !!a.find((t) => t.elanguage == e);
    } else h.bUserLanguageSupported = !0;
    let v = l.GetItems().findIndex((t) => t.GetAppID() == e);
    return (
      v != -1 && (v < 25 ? (h.bTopSeller = !0) : (h.bPopular = !0)),
      (h.bWishlisted = !!f.items.find((t) => t.appid == e)),
      (h.rgExcludedTags =
        d.tag_preferences?.tags_to_exclude?.filter((e) =>
          r?.find((t) => t.tagid == e.tagid),
        ) || []),
      (h.rgPublishersFollowed = n.publishers?.filter(
        (e) =>
          e.creator_clan_account_id &&
          p?.get(e.creator_clan_account_id)?.is_creator,
      )),
      (h.rgDevelopersFollowed = n.developers?.filter(
        (e) =>
          e.creator_clan_account_id &&
          p?.get(e.creator_clan_account_id)?.is_creator,
      )),
      (h.rgFranchisesFollowed = n.franchises?.filter(
        (e) =>
          e.creator_clan_account_id &&
          p?.get(e.creator_clan_account_id)?.is_creator,
      )),
      (h.rgPublishersFollowed = h.rgPublishersFollowed?.filter(
        (e) =>
          !h.rgDevelopersFollowed?.find(
            (t) => t.creator_clan_account_id == e.creator_clan_account_id,
          ),
      )),
      (h.rgCuratorsPositive = m
        .filter((e) => e.recommendation == 0)
        .map((e) => e.clan_accountid)),
      (h.rgCuratorsNegative = m
        .filter((e) => e.recommendation == 1)
        .map((e) => e.clan_accountid)),
      (h.rgFriendsRecommended = o.accountids_recommended || []),
      (h.rgFriendsDisrecommended = o.accountids_not_recommended || []),
      (h.rgFriendsWishlisted = g_(u).map((e) => e.accountid)),
      (h.rgFriendsOwned = __(u, !!t.is_free).map((e) => e.accountid)),
      h
    );
  }, [e, n, m, p, u, o, l, t, r, s, i, d, c, a, f]);
}
var S_ = `HyQJJqDXNrI-`,
  C_ = `V9KeuIO8sXU-`,
  w_ = `u5uXtc2qnAA-`,
  T_ = `QPrrLuAdSdA-`,
  E_ = `_8pP6IigPovU-`,
  D_ = `kplRbfzM2sk-`,
  O_ = (function (e) {
    return (
      (e[(e.Info = 0)] = `Info`),
      (e[(e.Positive = 1)] = `Positive`),
      (e[(e.Negative = 2)] = `Negative`),
      e
    );
  })({});
function k_(e) {
  let { type: t, description: n, children: r } = e,
    i = (0, J.jsx)(Gr, {});
  return (
    t == 1
      ? (i = (0, J.jsx)(Tr, { className: T_ }))
      : t == 2 && (i = (0, J.jsx)(Vr, { className: E_ })),
    (0, J.jsxs)(`div`, {
      className: S_,
      children: [
        (0, J.jsxs)(`div`, {
          className: C_,
          children: [
            (0, J.jsx)(`div`, { className: w_, children: i }),
            (0, J.jsx)(`div`, { className: void 0, children: n }),
          ],
        }),
        r && (0, J.jsx)(`div`, { className: `D6nW3MBohHk-`, children: r }),
        (0, J.jsx)(`div`, { className: D_ }),
      ],
    })
  );
}
function A_(e) {
  let { description: t, children: n } = e;
  return (0, J.jsx)(k_, { type: 0, description: t, children: n });
}
function j_(e) {
  let { description: t, children: n } = e;
  return (0, J.jsx)(k_, { type: 1, description: t, children: n });
}
function M_(e) {
  let { description: t, children: n } = e;
  return (0, J.jsx)(k_, { type: 2, description: t, children: n });
}
var N_ = `NzqTeat1g8k-`;
function P_(e) {
  let { children: t } = e;
  return (0, J.jsx)(F, { className: N_, children: t });
}
var F_ = `BUXGJFFSUM0-`,
  I_ = `tIYw2vK2a44-`,
  L_ = `q-3HgIvUKYc-`,
  R_ = `_3RoGz3tBOuM-`,
  z_ = `-ibXGx28MHE-`,
  B_ = `Fjz4qO7h02c-`,
  V_ = `_6n9Xi6nSeAg-`;
function H_(e) {
  let { onlineState: t, animating: n, className: r, size: i, dim: a, ...o } = e,
    s = ``;
  return (
    i == `medium` ? (s = L_) : i == `large` && (s = R_),
    (0, J.jsxs)(`div`, {
      className: (0, Y.default)(
        F_,
        t,
        r,
        n && `MHExJmKU71k-`,
        s,
        a && `mJxmT6zIN80-`,
      ),
      ...o,
      children: [
        (0, J.jsx)(`div`, {
          "data-text": `Z`,
          className: (0, Y.default)(I_, z_),
          children: `Z`,
        }),
        (0, J.jsx)(`div`, {
          "data-text": `Z`,
          className: (0, Y.default)(I_, B_),
          children: `Z`,
        }),
        (0, J.jsx)(`div`, {
          "data-text": `Z`,
          className: (0, Y.default)(I_, V_),
          children: `Z`,
        }),
      ],
    })
  );
}
var Q = {};
(Q.arabic = () =>
  E(() => import(`./miniprofile_arabic.js`), [], import.meta.url)),
  (Q.brazilian = () =>
    E(() => import(`./miniprofile_brazilian.js`), [], import.meta.url)),
  (Q.bulgarian = () =>
    E(() => import(`./miniprofile_bulgarian.js`), [], import.meta.url)),
  (Q.czech = () =>
    E(() => import(`./miniprofile_czech.js`), [], import.meta.url)),
  (Q.danish = () =>
    E(() => import(`./miniprofile_danish.js`), [], import.meta.url)),
  (Q.dutch = () =>
    E(() => import(`./miniprofile_dutch.js`), [], import.meta.url)),
  (Q.english = () =>
    E(() => import(`./miniprofile_english.js`), [], import.meta.url)),
  (Q.finnish = () =>
    E(() => import(`./miniprofile_finnish.js`), [], import.meta.url)),
  (Q.french = () =>
    E(() => import(`./miniprofile_french.js`), [], import.meta.url)),
  (Q.german = () =>
    E(() => import(`./miniprofile_german.js`), [], import.meta.url)),
  (Q.greek = () =>
    E(() => import(`./miniprofile_greek.js`), [], import.meta.url)),
  (Q.hungarian = () =>
    E(() => import(`./miniprofile_hungarian.js`), [], import.meta.url)),
  (Q.indonesian = () =>
    E(() => import(`./miniprofile_indonesian.js`), [], import.meta.url)),
  (Q.italian = () =>
    E(() => import(`./miniprofile_italian.js`), [], import.meta.url)),
  (Q.japanese = () =>
    E(() => import(`./miniprofile_japanese.js`), [], import.meta.url)),
  (Q.koreana = () =>
    E(() => import(`./miniprofile_koreana.js`), [], import.meta.url)),
  (Q.latam = () =>
    E(() => import(`./miniprofile_latam.js`), [], import.meta.url)),
  (Q.malay = () =>
    E(() => import(`./miniprofile_malay.js`), [], import.meta.url)),
  (Q.norwegian = () =>
    E(() => import(`./miniprofile_norwegian.js`), [], import.meta.url)),
  (Q.polish = () =>
    E(() => import(`./miniprofile_polish.js`), [], import.meta.url)),
  (Q.portuguese = () =>
    E(() => import(`./miniprofile_portuguese.js`), [], import.meta.url)),
  (Q.romanian = () =>
    E(() => import(`./miniprofile_romanian.js`), [], import.meta.url)),
  (Q.russian = () =>
    E(() => import(`./miniprofile_russian.js`), [], import.meta.url)),
  (Q.sc_schinese = () =>
    E(() => import(`./miniprofile_sc_schinese.js`), [], import.meta.url)),
  (Q.schinese = () =>
    E(() => import(`./miniprofile_schinese.js`), [], import.meta.url)),
  (Q.spanish = () =>
    E(() => import(`./miniprofile_spanish.js`), [], import.meta.url)),
  (Q.swedish = () =>
    E(() => import(`./miniprofile_swedish.js`), [], import.meta.url)),
  (Q.tchinese = () =>
    E(() => import(`./miniprofile_tchinese.js`), [], import.meta.url)),
  (Q.thai = () =>
    E(() => import(`./miniprofile_thai.js`), [], import.meta.url)),
  (Q.turkish = () =>
    E(() => import(`./miniprofile_turkish.js`), [], import.meta.url)),
  (Q.ukrainian = () =>
    E(() => import(`./miniprofile_ukrainian.js`), [], import.meta.url)),
  (Q.vietnamese = () =>
    E(() => import(`./miniprofile_vietnamese.js`), [], import.meta.url));
async function U_(e) {
  if (Q[e]) return await Q[e]();
}
var W_ = fn(U_);
function G_(e) {
  if (e >= 120) {
    let t = Math.round((e / 60) * 10) / 10;
    return W_.Localize(`#Playtime_Hours`, xr(t));
  }
  return W_.Localize(`#Playtime_Minutes`, e);
}
var K_ = `ISB4pqL9Dbk-`,
  q_ = `Yjofe5yJagc-`,
  J_ = `cYBie2Th6RU-`,
  Y_ = `RW7aRhxMSg8-`,
  X_ = `ZV7bZcBIUYg-`,
  Z_ = `mHCDRNm52bY-`,
  Q_ = `_8k38SvFkuTE-`,
  $_ = `kX1OrJH1SQU-`,
  ev = `I-Xx50eeDK4-`,
  tv = `_4jtK2z57ZeY-`,
  nv = `sXtMvDz447Q-`,
  rv = `jasUsCNn-9E-`,
  iv = `SvlrrFSeAnw-`,
  av = `CU123SNxnwU-`,
  ov = `oma9OsFDh1s-`,
  sv = `CZahCWXXFw0-`,
  cv = `mezBkZNI18w-`,
  lv = `_8-zmIEnirL0-`,
  uv = `gy4XLTtW4uY-`,
  dv = `TsT1wwaqRsc-`,
  fv = `KwK0PkK32j0-`,
  pv = `OoUO3ZvpbQg-`,
  mv = `nbdleeasZnY-`,
  hv = `Zky-JEkMXTY-`,
  gv = `PAkkfrJr700-`,
  _v = `eDe3-rwPi-s-`,
  vv = `onBn9rQ8CFY-`,
  yv = `LgmSRMkfhFI-`,
  bv = `xTQdbh4jwLM-`,
  xv = `WzhqgHcbFeE-`,
  Sv = `GNOGs-0lvJo-`,
  Cv = `A0nvo-TnMug-`,
  wv = `FVnvPWUHHP4-`,
  Tv = `_8KjKctvSPNM-`,
  Ev = `-uyqRuwu4B8-`,
  Dv = `W5uSuTTutqM-`,
  Ov = `zJ-bwe2ibqI-`;
function kv(e) {
  let t = e?.private_data?.persona_state ?? 0;
  return t != 0 && t != 7;
}
function Av(e) {
  let t = e?.private_data?.game_id;
  return kv(e) && !!t && t != `0`;
}
function jv(e) {
  return !!e?.private_data?.watching_broadcast_accountid;
}
function Mv(e) {
  let t = e?.private_data?.persona_state;
  return t == 3 || t == 4;
}
function Nv(e) {
  return kv(e)
    ? Av(e)
      ? `in-game`
      : jv(e)
        ? `watchingbroadcast`
        : `online`
    : `offline`;
}
function Pv(e) {
  let t;
  return (
    (t = Av(e)
      ? `ingame`
      : jv(e)
        ? `watchingbroadcast`
        : kv(e)
          ? `online`
          : `offline`),
    Mv(e) && (t += ` awayOrSnooze`),
    t
  );
}
function Fv(e, t) {
  return ((e?.private_data?.persona_state_flags ?? 0) & t) != 0;
}
function Iv(e) {
  return e?.private_data?.game_device_type;
}
function Lv(e) {
  return Iv(e) == 544;
}
function Rv(e) {
  return Iv(e) == 545;
}
function zv(e) {
  return e?.public_data?.persona_name ?? ``;
}
function Bv(e) {
  let t = Math.floor(e / 60);
  if (t < 60) return `${t}m`;
  let n = Math.floor(t / 60);
  return n < 24 ? `${n}h` : `${Math.floor(n / 24)}d`;
}
function Vv(e) {
  let t =
    e?.private_data?.last_seen_online || e?.private_data?.last_logoff_time || 0;
  if (t == 0) return W.Localize(`#PersonaStateOffline`);
  let n = Math.floor(Date.now() / 1e3) - t;
  return n < 60
    ? W.Localize(`#PersonaStateLastSeen_JustNow`)
    : W.Localize(`#PersonaStateLastSeen`, Bv(n));
}
function Hv(e) {
  switch (e?.private_data?.persona_state ?? 0) {
    case 0:
    case 7:
      return Vv(e);
    case 1:
      return W.Localize(`#PersonaStateOnline`);
    case 2:
      return W.Localize(`#PersonaStateBusy`);
    case 3:
      return W.Localize(`#PersonaStateAway`);
    case 4:
      return W.Localize(`#PersonaStateSnooze`);
    case 5:
      return W.Localize(`#PersonaStateLookingToTrade`);
    case 6:
      return W.Localize(`#PersonaStateLookingToPlay`);
    default:
      return ``;
  }
}
function Uv(e) {
  return e?.private_data?.watching_broadcast_appid;
}
function Wv() {
  return (0, J.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    children: (0, J.jsx)(`path`, {
      d: `M16 1H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zm-4 20a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5-4H7V5h10z`,
    }),
  });
}
function Gv() {
  return (0, J.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    children: (0, J.jsx)(`path`, {
      d: `M21 6H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5l2-3h4l2 3h5a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z`,
    }),
  });
}
function Kv() {
  return (0, J.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    children: (0, J.jsx)(`path`, {
      d: `M21 3H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6v2H7v2h10v-2h-2v-2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 13H3V5h18z`,
    }),
  });
}
function qv() {
  return (0, J.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    children: (0, J.jsx)(`path`, {
      d: `M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm3 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm10 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z`,
    }),
  });
}
function Jv(e) {
  let { playerLinkDetails: t, className: n, ...r } = e;
  if (!kv(t)) return null;
  let i = Fv(t, 512),
    a = Fv(t, lt),
    o = Lv(t),
    s = Rv(t),
    c = !o && !s && !a && Fv(t, 1024),
    l = Pv(t);
  return (0, J.jsxs)(q.Fragment, {
    children: [
      i &&
        (0, J.jsx)(`div`, {
          className: (0, Y.default)(n, `_4v4QMUMYvOM-`, `VMLw1nBy-Q4-`, l),
          title: W.Localize(`#Platform_Hint_Mobile`),
          ...r,
          children: (0, J.jsx)(Wv, {}),
        }),
      a &&
        (0, J.jsx)(`div`, {
          className: (0, Y.default)(n, `_4v4QMUMYvOM-`, `_6PzC4RL-NF0-`, l),
          title: W.Localize(`#Platform_Hint_VR`),
          ...r,
          children: (0, J.jsx)(Gv, {}),
        }),
      c &&
        (0, J.jsx)(`div`, {
          className: (0, Y.default)(n, `_4v4QMUMYvOM-`, void 0, l),
          title: W.Localize(`#Platform_Hint_BigPicture`),
          ...r,
          children: (0, J.jsx)(Kv, {}),
        }),
      o &&
        (0, J.jsx)(`div`, {
          className: (0, Y.default)(n, `_4v4QMUMYvOM-`, `-neFsnd34Gs-`, l),
          title: W.Localize(`#Platform_Hint_SteamDeck`),
          ...r,
          children: (0, J.jsx)(qv, {}),
        }),
      s &&
        (0, J.jsx)(`div`, {
          className: (0, Y.default)(n, `_4v4QMUMYvOM-`, `-neFsnd34Gs-`, l),
          title: W.Localize(`#Platform_Hint_LegionGoS`),
          ...r,
          children: (0, J.jsx)(qv, {}),
        }),
    ],
  });
}
var Yv = `_0EaX9C5QSfI-`,
  Xv = `_26RXTT8HCt8-`,
  Zv = `IsWKnPdqqzc-`,
  Qv = {
    0: `#9b9b9b`,
    10: `#c02942`,
    20: `#d95b43`,
    30: `#fecc23`,
    40: `#467a3c`,
    50: `#4e8ddb`,
    60: `#7652c9`,
    70: `#c252c9`,
    80: `#542437`,
    90: `#997c52`,
  },
  $v = {
    100: `levels_hexagons.png`,
    200: `levels_shields.png`,
    300: `levels_books.png`,
    400: `levels_chevrons.png`,
    500: `levels_circle2.png`,
    600: `levels_angle.png`,
    700: `levels_flag.png`,
    800: `levels_wings.png`,
    900: `levels_arrows.png`,
    1e3: `levels_crystals.png`,
    1100: `levels_space.png`,
    1200: `levels_waterelement.png`,
    1300: `levels_fireelement.png`,
    1400: `levels_earthelement.png`,
    1500: `levels_airelement_1-2.png`,
    1600: `levels_airelement_3-4.png`,
    1700: `levels_airelement_5-6.png`,
    1800: `levels_airelement_7-8.png`,
    1900: `levels_airelement_9-10.png`,
    2e3: `levels_geo_1-2.png?v=2`,
    2100: `levels_geo_3-4.png?v=2`,
    2200: `levels_geo_5-6.png?v=2`,
    2300: `levels_geo_7-8.png?v=2`,
    2400: `levels_geo_9-10.png?v=2`,
    2500: `levels_mandala_1-2.png?v=2`,
    2600: `levels_mandala_3-4.png?v=2`,
    2700: `levels_mandala_5-6.png?v=2`,
    2800: `levels_mandala_7-8.png?v=2`,
    2900: `levels_mandala_9-10.png?v=2`,
    3e3: `levels_spiro_1-2.png?v=2`,
    3100: `levels_spiro_3-4.png?v=2`,
    3200: `levels_spiro_5-6.png?v=2`,
    3300: `levels_spiro_7-8.png?v=2`,
    3400: `levels_spiro_9-10.png?v=2`,
    3500: `levels_patterns_1-2.png?v=2`,
    3600: `levels_patterns_3-4.png?v=2`,
    3700: `levels_patterns_5-6.png?v=2`,
    3800: `levels_patterns_7-8.png?v=2`,
    3900: `levels_patterns_9-10.png?v=2`,
    4e3: `levels_shapes_1.png?v=2`,
    4100: `levels_shapes_2.png?v=2`,
    4200: `levels_shapes_3.png?v=2`,
    4300: `levels_shapes_4.png?v=2`,
    4400: `levels_shapes_5.png?v=2`,
    4500: `levels_grunge_1.png?v=2`,
    4600: `levels_grunge_2.png?v=2`,
    4700: `levels_grunge_3.png?v=2`,
    4800: `levels_grunge_4.png?v=2`,
    4900: `levels_grunge_5.png?v=2`,
    5e3: `levels_halftone_1.png?v=2`,
    5100: `levels_halftone_2.png?v=2`,
    5200: `levels_halftone_3.png?v=2`,
    5300: `levels_5300_dashes.png`,
    5400: `levels_5400_crosshatch.png`,
    5500: `levels_5500_spiral.png`,
    5600: `levels_5600_leaves.png`,
    5700: `levels_5700_mountain.png`,
    5800: `levels_5800_rain.png`,
    5900: `levels_5900_tornado.png`,
    6e3: `levels_6000_snowflake.png`,
    6100: `levels_6100_crown.png`,
  };
function ey(e) {
  let { level: t, className: n } = e,
    r = Yv,
    i = {};
  if (t >= 100) {
    let e = Math.floor(t / 100) * 100,
      n = Math.floor((t - e) / 10) * 10,
      a = $v[e];
    a
      ? ((r = (0, Y.default)(Yv, Zv)),
        (i.backgroundImage = `url( "${w.BASE_URL_SHARED_CDN}community/${a}" )`),
        (i.backgroundPosition = `0 -${(n / 10) * 32}px`))
      : (i.borderColor = Qv[90]);
  } else i.borderColor = Qv[Math.floor(t / 10) * 10] ?? Qv[0];
  return (0, J.jsx)(`div`, {
    className: (0, Y.default)(r, n),
    style: i,
    children: (0, J.jsx)(`span`, { className: Xv, children: t }),
  });
}
function ty(e) {
  if (e)
    return e.startsWith(`https://`)
      ? e
      : w.MEDIA_CDN_COMMUNITY_URL + `images/` + e;
}
function ny({ profileBackground: e, avatarURL: t }) {
  if (e) {
    let t = ty(e.movie_webm),
      n = ty(e.movie_mp4),
      r = ty(e.image_large);
    if (t || n)
      return (0, J.jsx)(
        `div`,
        {
          className: $_,
          children: (0, J.jsxs)(`video`, {
            className: Q_,
            playsInline: !0,
            muted: !0,
            autoPlay: !0,
            loop: !0,
            poster: r,
            children: [
              t && (0, J.jsx)(`source`, { src: t, type: `video/webm` }),
              n && (0, J.jsx)(`source`, { src: n, type: `video/mp4` }),
            ],
          }),
        },
        t || n || `image`,
      );
    if (r)
      return (0, J.jsx)(`div`, {
        className: $_,
        children: (0, J.jsx)(`img`, {
          className: Q_,
          src: r,
          alt: `background`,
        }),
      });
  }
  return (0, J.jsx)(`div`, {
    className: Z_,
    children:
      t &&
      (0, J.jsx)(`img`, { className: `M2XZ6hlhUmQ-`, src: t, alt: `avatar` }),
  });
}
function ry(e) {
  let { playerLinkDetails: t, size: n } = e;
  return (0, J.jsx)(Ct, {
    playerLinkDetails: t,
    size: n || `X-Large`,
    statusPosition: `bottom`,
    className: nv,
    alt: zv(t),
  });
}
function iy({ badge: e, className: t }) {
  return (0, J.jsxs)(`div`, {
    className: (0, Y.default)(bv, t),
    children: [
      (0, J.jsx)(`div`, {
        className: xv,
        children: (0, J.jsx)(`img`, {
          src: e.icon,
          className: wv,
          alt: e.name,
        }),
      }),
      (0, J.jsxs)(`div`, {
        className: (0, Y.default)(Tv, void 0),
        children: [
          (0, J.jsx)(`div`, { className: Ev, children: e.name }),
          (0, J.jsx)(`div`, {
            className: Dv,
            children: W.Localize(`#Hover_BadgeXP`, e.xp),
          }),
        ],
      }),
    ],
  });
}
function ay({ level: e, className: t }) {
  return (0, J.jsxs)(`div`, {
    className: (0, Y.default)(bv, t),
    children: [
      (0, J.jsx)(ey, { level: e }),
      (0, J.jsx)(`div`, {
        className: Tv,
        children: (0, J.jsx)(`div`, {
          className: Ev,
          children: W.Localize(`#Hover_SteamLevel`) + ` `,
        }),
      }),
    ],
  });
}
function oy({ appid: e, playtime: t, className: n }) {
  let { data: r } = U({ appid: e }),
    i = r ? pa(r, `header`) : void 0,
    a = t.playtime_2weeks ?? 0,
    o = t.playtime_forever ?? 0;
  return (0, J.jsxs)(`div`, {
    className: (0, Y.default)(Sv, n),
    children: [
      i &&
        (0, J.jsx)(`img`, {
          className: `_3fT0RDmpqIY-`,
          src: i,
          alt: `Game Logo`,
        }),
      (0, J.jsxs)(`div`, {
        className: Cv,
        children: [
          a > 0 &&
            (0, J.jsx)(`div`, {
              children: W_.LocalizeReact(
                `#Playtime_Recently`,
                (0, J.jsx)(`span`, {
                  className: `MY7ZiFgqaTU-`,
                  children: G_(a),
                }),
              ),
            }),
          (a <= 0 || o != a) &&
            (0, J.jsx)(`div`, {
              children: W_.LocalizeReact(
                `#Playtime_Total`,
                (0, J.jsx)(`span`, {
                  className: `MY7ZiFgqaTU-`,
                  children: G_(o),
                }),
              ),
            }),
        ],
      }),
    ],
  });
}
function sy({ appid: e }) {
  let { data: t } = U(e ? { appid: e } : void 0);
  if (!t) return null;
  let n = pa(t, `header`);
  return n
    ? (0, J.jsx)(`img`, { className: pv, src: n, alt: `Game Logo` })
    : null;
}
function cy(e) {
  let { inGame: t, inGameSectionAdditional: n, className: r } = e;
  return (0, J.jsxs)(`div`, {
    className: (0, Y.default)(fv, r),
    children: [
      t.logo &&
        (0, J.jsx)(`img`, {
          className: `OoUO3ZvpbQg-`,
          src: t.logo,
          alt: `Game Logo`,
        }),
      (0, J.jsxs)(`div`, {
        className: (0, Y.default)(vv, sv, mv, yv),
        children: [
          (0, J.jsx)(`div`, {
            className: hv,
            children: W.Localize(
              t.is_non_steam
                ? `#PersonaStateInNonSteamGame`
                : `#PersonaStateInGame`,
            ),
          }),
          t.name,
          t.rich_presence &&
            (0, J.jsx)(`div`, {
              className: `MFwmj5RoRI4-`,
              children: t.rich_presence,
            }),
          n,
        ],
      }),
    ],
  });
}
function ly(e) {
  let t = e.broadcastDescription,
    n = Uv(e.playerLinkDetails) ?? 0;
  return (0, J.jsxs)(`div`, {
    className: (0, Y.default)(fv, e.className),
    children: [
      n > 0 && (0, J.jsx)(sy, { appid: n }),
      (0, J.jsxs)(`div`, {
        className: (0, Y.default)(vv, sv, gv, yv),
        children: [
          (0, J.jsx)(`div`, {
            className: hv,
            children: W.Localize(`#PersonaStateWatchingBroadcast`),
          }),
          t && (0, J.jsx)(`div`, { className: `MFwmj5RoRI4-`, children: t }),
          (0, J.jsx)(`div`, { className: _v, children: e.broadcastThumbnail }),
        ],
      }),
    ],
  });
}
function uy(e) {
  let {
      className: t,
      playerLinkDetails: n,
      miniProfileBackground: r,
      communityData: i,
      appid: a,
      playtime: o,
      nickname: s,
      isFriend: c,
      isBlocked: l,
      friendRelationship: u,
      broadcastDescription: d,
      broadcastThumbnail: f,
      mutualFriends: p,
      inGameSectionAdditional: m,
      bottomSectionAdditional: h,
      ...g
    } = e,
    _ = n,
    v = !!r,
    y,
    ee = q_;
  i?.in_game
    ? (y = (0, J.jsx)(cy, {
        inGame: i.in_game,
        inGameSectionAdditional: m,
        className: v ? ev : void 0,
      }))
    : jv(_)
      ? (y = (0, J.jsx)(ly, { ...e, className: v ? ev : void 0 }))
      : (ee += ` ` + uv);
  let te = !0,
    ne = !1,
    re = !1;
  c || ((ee += ` ` + tv), (te = !1)), l && ((ee += ` undefined`), (re = !0));
  let ie = s ?? i?.nickname,
    ae = ie !== void 0,
    oe = Mv(_),
    se = zv(_),
    ce;
  return (
    (ce = ae
      ? (0, J.jsxs)(`div`, {
          children: [
            (0, J.jsxs)(`div`, {
              className: cv,
              children: [
                (0, J.jsxs)(`div`, {
                  className: (0, Y.default)(rv, ov),
                  children: [
                    (0, J.jsx)(`div`, { className: av, children: ie }),
                    (0, J.jsx)(`div`, {
                      className: lv,
                      title: W.Localize(`#isNickname`),
                      children: `*`,
                    }),
                  ],
                }),
                (0, J.jsx)(Jv, { playerLinkDetails: _ }),
              ],
            }),
            (0, J.jsxs)(`div`, {
              className: (0, Y.default)(rv, iv),
              children: [
                `( `,
                (0, J.jsx)(`div`, { className: av, children: se }),
                ` )`,
              ],
            }),
          ],
        })
      : (0, J.jsxs)(`div`, {
          className: cv,
          children: [
            (0, J.jsx)(`div`, {
              className: rv,
              children: (0, J.jsx)(`div`, { className: av, children: se }),
            }),
            (0, J.jsx)(Jv, { playerLinkDetails: _ }),
          ],
        })),
    u == 2 && (ne = !0),
    (0, J.jsx)(`div`, {
      className: (0, Y.default)(t, K_),
      ...g,
      children: (0, J.jsxs)(`div`, {
        className: ee,
        children: [
          (0, J.jsx)(ny, { profileBackground: r, avatarURL: i?.avatar_url }),
          (0, J.jsx)(`div`, {
            className: J_,
            children: (0, J.jsxs)(`div`, {
              className: (0, Y.default)(Y_, Nv(_), oe && void 0, Pv(_)),
              children: [
                (0, J.jsx)(ry, { playerLinkDetails: _ }),
                oe &&
                  (0, J.jsx)(H_, {
                    onlineState: Nv(_),
                    animating: !0,
                    className: `YipraV6F2kM-`,
                    size: `large`,
                  }),
                (0, J.jsx)(`div`, {
                  className: X_,
                  children: (0, J.jsx)(`div`, {
                    className: void 0,
                    children: (0, J.jsxs)(`div`, {
                      className: sv,
                      children: [
                        ce,
                        oe &&
                          (0, J.jsx)(`div`, {
                            className: `VZNbu1D6UwA-`,
                            children: W.Localize(`#PersonaStateAway`),
                          }),
                        !kv(_) &&
                          (0, J.jsx)(`div`, {
                            className: `VZNbu1D6UwA-`,
                            children: Hv(_),
                          }),
                        Nv(_) == `online` &&
                          !oe &&
                          (0, J.jsx)(`div`, {
                            className: `VZNbu1D6UwA-`,
                            children: W.Localize(`#PersonaStateOnline`),
                          }),
                        !te &&
                          (0, J.jsx)(`div`, {
                            className: `ls2Xhp419LQ-`,
                            children: ne
                              ? W.Localize(`#Friend_Menu_NotAFriendRequesting`)
                              : W.Localize(`#Friend_Menu_NotAFriendLabel`),
                          }),
                        re &&
                          (0, J.jsx)(`div`, {
                            className: `RuIMBXtsKJQ-`,
                            children: W.Localize(`#PersonaStateBlocked`),
                          }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          y,
          (0, J.jsxs)(`div`, {
            className: (0, Y.default)(dv, v && `I-Xx50eeDK4-`),
            children: [
              i?.favorite_badge && (0, J.jsx)(iy, { badge: i.favorite_badge }),
              typeof i?.level == `number` && (0, J.jsx)(ay, { level: i.level }),
            ],
          }),
          a &&
            o &&
            !!o.playtime_forever &&
            (0, J.jsx)(oy, { appid: a, playtime: o }),
          h,
          (0, J.jsx)(`div`, { className: Ov, children: p }),
        ],
      }),
    })
  );
}
var dy = 3e3,
  fy = 12e4;
function py(e, t) {
  return [`MiniProfileCommunityData`, e, t ?? null];
}
function my(e, t) {
  return {
    queryKey: py(e, t),
    async queryFn() {
      let n = new Pn(e).GetAccountID(),
        r = await fetch(
          `${w.COMMUNITY_BASE_URL}miniprofile/${n}/json/${t ? `?appid=${t}` : ``}`,
          { signal: AbortSignal.timeout(dy) },
        );
      if (!r.ok) return null;
      let i = await r.json().catch(() => null);
      return i && typeof i.level == `number` && typeof i.level_class == `string`
        ? i
        : null;
    },
    staleTime: fy,
  };
}
function hy(e, t) {
  return d(my(e, t));
}
function gy(e) {
  let { steamid: t, appid: n } = e,
    r = yt(t),
    i = xt(t),
    a = hy(t, n);
  if ([r, i, a].some((e) => e.isLoading && e.failureCount == 0)) return null;
  let o = r.data;
  return o?.public_data?.steamid
    ? (0, J.jsx)(uy, {
        playerLinkDetails: o,
        miniProfileBackground: i.data?.mini_profile_background,
        communityData: a.data,
        appid: n,
        playtime: a.data?.playtime,
      })
    : null;
}
function _y(e) {
  let {
    steamid: t,
    appid: n,
    children: r,
    nDelayShowMS: i = 250,
    popoverProps: a,
  } = e;
  return (0, J.jsx)(ct, {
    nDelayShowMS: i,
    bTooltipMode: !0,
    popoverProps: { placement: `right`, ...a },
    hoverContent: (0, J.jsx)(gy, { steamid: t, appid: n }),
    children: r,
  });
}
var vy = `aixRG9poJe8-`,
  yy = `biNGN-3WUzk-`;
function by(e) {
  let t = qr(),
    { data: n } = yt(t);
  return Jt(n, t) + `/friendsthatplay/${e}`;
}
function xy(e) {
  let { accountid: t, appid: n, bLinkToReview: r, bShowName: i, friend: a } = e,
    o = yt(t);
  if (!o.data || !o.data.public_data) return null;
  let s = r ? `${Jt(o.data)}/recommended/${n}` : Jt(o.data),
    c = o.data.public_data.persona_name;
  return (0, J.jsx)(_y, {
    steamid: o.data.public_data.steamid,
    appid: n,
    children: (0, J.jsxs)(B, {
      className: vy,
      href: s,
      children: [
        (0, J.jsx)(bt, { playerLinkDetails: o.data, alt: c }),
        i &&
          c &&
          (0, J.jsxs)(V, {
            as: `div`,
            size: `2`,
            color: `blue-10`,
            className: `qXkJiKKyyvA-`,
            children: [
              (0, J.jsx)(`div`, { className: `w-Iai2ZDheg-`, children: c }),
              a && (0, J.jsx)(Sy, { friend: a }),
            ],
          }),
      ],
    }),
  });
}
function Sy(e) {
  let { friend: t } = e,
    n;
  return (
    t.bInGame
      ? (n = Z.Localize(`#AppPage_FriendOwnership_NowPlaying`))
      : t.nMinutesPlayedRecent > 0 &&
        (n = Z.Localize(
          `#AppPage_FriendOwnership_PlayedHours`,
          vh(t.nMinutesPlayedRecent, !0),
        )),
    n ? (0, J.jsx)(`div`, { className: yy, children: n }) : null
  );
}
function Cy(e) {
  let { accountid: t, appid: n, bLinkToReview: r } = e;
  return (0, J.jsx)(xy, { accountid: t, appid: n, bLinkToReview: r });
}
function wy(e) {
  let { rgFriends: t, appid: n, bLinkToReview: r } = e;
  return (0, J.jsx)(P_, {
    children: t.map((e) =>
      (0, J.jsx)(Cy, { accountid: e, appid: n, bLinkToReview: r }, e),
    ),
  });
}
function Ty(e) {
  let {
      type: t,
      appid: n,
      strLocTag: r,
      rgFriends: i,
      nMax: a = 5,
      bLinkToReview: o,
    } = e,
    s = by(n);
  if (!i || i.length == 0) return null;
  let c = K(Z.LocalizePlural(r, i.length), (0, J.jsx)(B, { href: s }));
  return (0, J.jsx)(k_, {
    type: t,
    description: c,
    children: (0, J.jsx)(wy, {
      rgFriends: i.slice(0, a),
      appid: n,
      bLinkToReview: o,
    }),
  });
}
function Ey(e) {
  let { url: t, avatarUrl: n, alt: r } = e;
  return (0, J.jsx)(nr, {
    toolTipContent: r,
    children: (0, J.jsx)(B, {
      href: t,
      children: (0, J.jsx)(St, { avatarURL: n, alt: r }),
    }),
  });
}
function Dy(e) {
  let { accountid: t, appid: n, fnURLGenerator: r } = e,
    i = Ge(t);
  if (!i.data) return null;
  let a = r(i.data, n);
  return (0, J.jsx)(Ey, {
    url: a,
    avatarUrl: i.data.avatar_full_url,
    alt: i.data.group_name,
  });
}
function Oy(e) {
  let { rgCurators: t, appid: n, fnURLGenerator: r } = e;
  return (0, J.jsx)(P_, {
    children: t.map((e) =>
      (0, J.jsx)(Dy, { accountid: e, appid: n, fnURLGenerator: r }, e),
    ),
  });
}
function ky(e) {
  let {
      type: t,
      fnURLGenerator: n,
      appid: r,
      strLocTag: i,
      rgCurators: a,
      nMax: o = 6,
    } = e,
    s = fr(w.STORE_BASE_URL + `curators/mycuratorsreviewing/?appid=${r}`);
  if (!a || a.length == 0) return null;
  let c = K(Z.Localize(i), (0, J.jsx)(B, { href: s }));
  return (0, J.jsx)(k_, {
    type: t,
    description: c,
    children: (0, J.jsx)(Oy, {
      rgCurators: a.slice(0, o),
      appid: r,
      fnURLGenerator: n,
    }),
  });
}
var Ay = `ahcmbFKFShw-`,
  jy = `_3qdZjzvKgfw-`;
function My(e) {
  let { tag: t } = e;
  return (0, J.jsx)(B, {
    className: jy,
    href: `${w.STORE_BASE_URL}tags/${ia(Ei(w.LANGUAGE))}/${t.name}`,
    children: t.name,
  });
}
function Ny(e) {
  let { rgTags: t } = e;
  return t.length == 0
    ? null
    : (0, J.jsx)(`div`, {
        className: Ay,
        children: t.map((e) => (0, J.jsx)(My, { tag: e }, e.tagid)),
      });
}
var Py = `KDpGlXoOnsk-`,
  Fy = `LX-5qC48OEE-`,
  Iy = `KnILproBOh0-`,
  Ly = `LC1Y4SvhNNw-`;
function Ry(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t }),
    { data: r } = U({ appid: t });
  if (!n || !r) return null;
  let i = pa(r, `community_icon`);
  return (0, J.jsx)(je, {
    id: { appid: t },
    bPreventNavigation: !0,
    hoverProps: {
      direction: `overlay`,
      nBodyAlignment: 1,
      style: { minWidth: `320px`, zIndex: 5e3 },
    },
    children: (0, J.jsxs)(hn, {
      className: Fy,
      storeItem: n,
      children: [
        (0, J.jsx)(`div`, {
          className: Iy,
          children: i && (0, J.jsx)(`img`, { src: i, alt: `` }),
        }),
        (0, J.jsx)(`div`, { className: Ly, children: n.name }),
      ],
    }),
  });
}
function zy(e) {
  let { rgApps: t } = e;
  return t.length == 0
    ? null
    : (0, J.jsx)(`div`, {
        className: Py,
        children: t.map((e) => (0, J.jsx)(Ry, { appid: e.appid }, e.appid)),
      });
}
function By(e) {
  let { appid: t, friendsRecommended: n, recommendedTags: r } = e,
    [i, a] = q.useState(!1),
    o = Ma(),
    s = jr();
  return (
    q.useEffect(() => {
      o(t, n), s(r), a(!0);
    }, [t, n, r, o, s]),
    q.use(Z.Ready()),
    q.use(W.Ready()),
    i
      ? (0, J.jsx)(q.Suspense, { children: (0, J.jsx)(Wy, { appid: t }) })
      : null
  );
}
function Vy(e, t) {
  let { data: n } = I({ appid: t.appid });
  return Z.GetAppTypePluralLocKey(e, n?.type || 0);
}
function Hy(e, t) {
  let { data: n } = I({ appid: t.appid });
  return Z.GetAppTypeLocKey(e, n?.type || 0);
}
function Uy(e, t) {
  let n = Hy(e, t);
  return Z.Localize(n);
}
function Wy(e) {
  let { appid: t } = e,
    n = x_(t);
  return n
    ? (0, J.jsxs)(si, {
        className: d_,
        navEntryPreferPosition: Ri.PREFERRED_CHILD,
        children: [
          (0, J.jsx)(Gy, { reasons: n }),
          (0, J.jsx)(Ky, { reasons: n }),
          (0, J.jsx)(Yy, { reasons: n }),
          (0, J.jsx)(Xy, { reasons: n }),
          (0, J.jsx)(Zy, { reasons: n }),
          (0, J.jsx)($y, { reasons: n }),
          (0, J.jsx)(Qy, { reasons: n }),
          (0, J.jsx)(eb, { reasons: n }),
          (0, J.jsx)(tb, { reasons: n }),
          (0, J.jsx)(sb, { reasons: n }),
          (0, J.jsx)(cb, { reasons: n }),
          (0, J.jsx)(lb, { reasons: n }),
          (0, J.jsx)(ub, { reasons: n }),
          (0, J.jsx)(db, { reasons: n }),
          (0, J.jsx)(fb, { reasons: n }),
          (0, J.jsx)(pb, { reasons: n }),
          (0, J.jsx)(mb, { reasons: n }),
          (0, J.jsx)(hb, { reasons: n }),
        ],
      })
    : null;
}
function Gy(e) {
  let { reasons: t } = e,
    n = Uy(`#AppPage_RecommendationReason_Header`, t);
  return (0, J.jsx)(wg, { text: n });
}
function Ky(e) {
  let { reasons: t } = e;
  if (t.nCurrentUserPlaytimeMins > 0) {
    let e = vh(t.nCurrentUserPlaytimeMins);
    return (0, J.jsx)(A_, {
      description: Z.Localize(`#AppPage_RecommendationReason_Playtime`, e),
    });
  }
  return t.bCurrentUserOwns
    ? (0, J.jsx)(A_, {
        description: Z.Localize(`#AppPage_RecommendationReason_InLibrary`),
      })
    : null;
}
function qy(e) {
  let { reasons: t } = e,
    n = Uy(`#AppPage_RecommendationReason_MatchingApps`, t);
  return (0, J.jsx)(j_, {
    description: n,
    children: (0, J.jsx)(zy, { rgApps: t.rgSimilarApps }),
  });
}
function Jy(e) {
  let { reasons: t } = e,
    n = Uy(`#AppPage_RecommendationReason_MatchingTags`, t);
  return (0, J.jsx)(j_, {
    description: n,
    children: (0, J.jsx)(Ny, { rgTags: t.rgMatchingTagsPlayed }),
  });
}
function Yy(e) {
  let { reasons: t } = e;
  return t.rgSimilarApps && t.rgSimilarApps.length > 0
    ? (0, J.jsx)(qy, { reasons: t })
    : t.rgMatchingTagsPlayed && t.rgMatchingTagsPlayed.length > 0
      ? (0, J.jsx)(Jy, { reasons: t })
      : null;
}
function Xy(e) {
  let { reasons: t } = e;
  return t.bFromInteractiveRecommender
    ? (0, J.jsx)(j_, {
        description: Z.Localize(
          `#AppPage_RecommendationReason_FromInteractiveRecommender`,
        ),
      })
    : null;
}
function Zy(e) {
  let { reasons: t } = e;
  return t.bPositiveReviews || t.bNegativeReviews
    ? (0, J.jsx)(k_, {
        type: t.bPositiveReviews ? O_.Positive : O_.Negative,
        description: K(
          Z.Localize(
            `#AppPage_RecommendationReason_UserReviews`,
            t.strReviewScoreLabel,
          ),
          (0, J.jsx)(`span`, {
            className: D(f_, t.bPositiveReviews ? p_ : m_),
          }),
        ),
      })
    : null;
}
function Qy(e) {
  let { reasons: t } = e;
  return !t.bTopSeller && !t.bPopular
    ? null
    : (0, J.jsx)(j_, {
        description: Z.Localize(
          t.bTopSeller
            ? `#AppPage_RecommendationReason_TopSeller`
            : `#AppPage_RecommendationReason_Popular`,
        ),
      });
}
function $y(e) {
  let { reasons: t } = e;
  return t.bUserLanguageSupported
    ? null
    : (0, J.jsx)(M_, {
        description: K(
          Z.Localize(`#AppPage_RecommendationReason_LanguageUnsupported`),
          (0, J.jsx)(B, {
            href: `${w.STORE_BASE_URL}account/languagepreferences/`,
          }),
        ),
      });
}
function eb(e) {
  let { reasons: t } = e,
    n = fr(w.STORE_BASE_URL + `wishlist`);
  return t.bWishlisted
    ? (0, J.jsx)(j_, {
        description: K(
          Z.Localize(`#AppPage_RecommendationReason_Wishlisted`),
          (0, J.jsx)(B, { href: n }),
        ),
      })
    : null;
}
function tb(e) {
  let { reasons: t } = e;
  return !t.rgExcludedTags || t.rgExcludedTags.length == 0
    ? null
    : (0, J.jsx)(M_, {
        description: K(
          Z.Localize(`#AppPage_RecommendationReason_ExcludedTags`),
          (0, J.jsx)(B, { href: `${w.STORE_BASE_URL}account/preferences` }),
        ),
        children: (0, J.jsx)(Ny, { rgTags: t.rgExcludedTags }),
      });
}
function nb(e, t) {
  return e.vanity_url
    ? `${w.STORE_BASE_URL}${t}/${e.vanity_url}`
    : `${w.STORE_BASE_URL}curator/${e.clanAccountID}`;
}
function rb(e, t, n) {
  return `${nb(e, t)}?appid=${n}`;
}
function ib(e) {
  return e.vanity_url
    ? `${w.COMMUNITY_BASE_URL}groups/${e.vanity_url}`
    : `${w.COMMUNITY_BASE_URL}gid/${e.clanSteamID?.ConvertTo64BitString()}`;
}
function ab(e, t) {
  return `${ib(e)}/curation/app/${t}`;
}
function ob(e) {
  let { reasons: t, type: n, strLocTag: r, rgCreators: i } = e;
  return !i || i.length == 0
    ? null
    : (0, J.jsx)(ky, {
        appid: t.appid,
        type: O_.Positive,
        fnURLGenerator: (e, t) => rb(e, n, t),
        strLocTag: r,
        rgCurators: i.map((e) => e.creator_clan_account_id),
      });
}
function sb(e) {
  let { reasons: t } = e;
  return (0, J.jsx)(ob, {
    reasons: t,
    type: `developer`,
    strLocTag: `#AppPage_RecommendationReason_FollowedDeveloper`,
    rgCreators: t?.rgDevelopersFollowed,
  });
}
function cb(e) {
  let { reasons: t } = e;
  return (0, J.jsx)(ob, {
    reasons: t,
    type: `publisher`,
    strLocTag: `#AppPage_RecommendationReason_FollowedPublisher`,
    rgCreators: t?.rgPublishersFollowed,
  });
}
function lb(e) {
  let { reasons: t } = e;
  return (0, J.jsx)(ob, {
    reasons: t,
    type: `franchise`,
    strLocTag: `#AppPage_RecommendationReason_FollowedFranchise`,
    rgCreators: t?.rgFranchisesFollowed,
  });
}
function ub(e) {
  let { reasons: t } = e;
  return (0, J.jsx)(ky, {
    appid: t.appid,
    type: O_.Positive,
    fnURLGenerator: ab,
    strLocTag: `#AppPage_RecommendationReason_CuratorRecommended`,
    rgCurators: t.rgCuratorsPositive,
  });
}
function db(e) {
  let { reasons: t } = e;
  return (0, J.jsx)(ky, {
    appid: t.appid,
    type: O_.Negative,
    fnURLGenerator: ab,
    strLocTag: `#AppPage_RecommendationReason_CuratorDisrecommended`,
    rgCurators: t.rgCuratorsNegative,
  });
}
function fb(e) {
  let { reasons: t } = e;
  return (0, J.jsx)(Ty, {
    appid: t.appid,
    type: O_.Positive,
    strLocTag: `#AppPage_RecommendationReason_FriendsRecommended`,
    rgFriends: t.rgFriendsRecommended,
    bLinkToReview: !0,
  });
}
function pb(e) {
  let { reasons: t } = e;
  return (0, J.jsx)(Ty, {
    appid: t.appid,
    type: O_.Negative,
    strLocTag: `#AppPage_RecommendationReason_FriendsDisrecommended`,
    rgFriends: t.rgFriendsDisrecommended,
    bLinkToReview: !0,
  });
}
function mb(e) {
  let { reasons: t } = e,
    n = Vy(`#AppPage_RecommendationReason_FriendsWishlisted`, t);
  return (0, J.jsx)(Ty, {
    appid: t.appid,
    type: O_.Info,
    strLocTag: n,
    rgFriends: t.rgFriendsWishlisted,
  });
}
function hb(e) {
  let { reasons: t } = e,
    n = Vy(`#AppPage_RecommendationReason_FriendsOwned`, t);
  return (0, J.jsx)(Ty, {
    appid: t.appid,
    type: O_.Info,
    strLocTag: n,
    rgFriends: t.rgFriendsOwned,
  });
}
var gb = `dfyW4vddZFI-`,
  _b = `cGC4Nn1VgUI-`,
  vb = 2;
function yb(e) {
  let { appid: t, bCanShowOwners: n } = e,
    r = v_(t),
    { data: i } = I({ appid: t }),
    a = r?.rgFriendsThatWant || [],
    o = (n && r?.rgFriendsThatOwn) || [];
  if (a.length == 0 && o.length == 0) return null;
  q.use(Z.Ready());
  let s = i?.type || 0;
  return (0, J.jsxs)(si, {
    className: gb,
    "flow-children": `column`,
    children: [
      a.length > 0 &&
        (0, J.jsx)(bb, {
          appid: t,
          strLocTag: Z.GetAppTypePluralLocKey(
            `#AppPage_RecommendationReason_FriendsWishlisted`,
            s,
          ),
          rgFriends: a,
          bShowNames: a.length <= vb,
          bShowPlaytime: !1,
        }),
      o.length > 0 &&
        (0, J.jsx)(bb, {
          appid: t,
          strLocTag: Z.GetAppTypePluralLocKey(
            `#AppPage_RecommendationReason_FriendsOwned`,
            s,
          ),
          rgFriends: o,
          bShowNames: !0,
          bShowPlaytime: !0,
        }),
    ],
  });
}
function bb(e) {
  let {
      appid: t,
      strLocTag: n,
      rgFriends: r,
      bShowNames: i,
      bShowPlaytime: a,
    } = e,
    o = by(t),
    s = K(Z.LocalizePlural(n, r.length), (0, J.jsx)(b, { href: o, size: `2` }));
  return (0, J.jsx)(A_, {
    description: s,
    children: (0, J.jsx)(F, {
      className: D(_b, i && `_1D1697tuA0o-`),
      "flow-children": i ? `grid` : `row`,
      children: r
        .slice(0, 6)
        .map((e) =>
          (0, J.jsx)(
            xy,
            {
              accountid: e.accountid,
              appid: t,
              bShowName: i,
              friend: a ? e : void 0,
            },
            e.accountid,
          ),
        ),
    }),
  });
}
var xb = `raUIt1RrwOs-`,
  Sb = `yIfZGwYBj54-`,
  Cb = `na0PCn-S-kg-`,
  wb = `RrkgWopWeiU-`,
  Tb = `VgJigqD0FVQ-`,
  Eb = `TX8efiPiYX4-`,
  Db = `_2gsSRry-fjM-`,
  Ob = `zCGLWZcdVVA-`,
  kb = `ga1O0rBdfCo-`,
  Ab = `yyfCIcmjqvc-`,
  jb = `DLQxsiWsW3M-`;
function Mb(e) {
  if (!e || !/^https?:/.test(e)) return;
  if (!ha(e)) return e;
  let t = lr(e);
  return w.IN_CLIENT ? `steam://openurl_external/` + t : t;
}
function Nb(e) {
  let { recommendation: t } = e,
    n = qa(),
    r = n ? { creatorid: n } : void 0,
    { data: i } = I(r),
    { data: a } = U(r);
  if (!i || !a) return null;
  let o = `${w.STORE_BASE_URL}${i.store_url_path}?appid=${t.appid}`,
    s = zb(t.link_url),
    c = Mb(t.link_url),
    l = !!s?.iframe || !!s?.image;
  return (0, J.jsxs)(`div`, {
    className: xb,
    children: [
      (0, J.jsx)(`h2`, { children: Z.Localize(`#AppPage_Curator_Title`) }),
      (0, J.jsxs)(si, {
        "flow-children": `row`,
        className: Sb,
        children: [
          l &&
            (0, J.jsxs)(R, {
              direction: `column`,
              className: `V36MLVI1Wfw-`,
              gap: `1`,
              align: `center`,
              children: [
                s.iframe &&
                  (0, J.jsx)(`iframe`, {
                    src: s.iframe,
                    frameBorder: `0`,
                    allowFullScreen: !0,
                    title: `referring_curator_video_embed`,
                  }),
                s.image &&
                  (0, J.jsxs)(B, {
                    href: c,
                    className: `vy-rbTAF1ss-`,
                    children: [
                      (0, J.jsx)(`img`, {
                        src: s.image,
                        alt: Z.Localize(`#AppPage_Curator_VideoThumbnail`),
                      }),
                      (0, J.jsx)(`div`, {
                        className: `DDBd6YjNuJ4-`,
                        children: (0, J.jsx)(Li, {}),
                      }),
                    ],
                  }),
                (0, J.jsx)(Pb, { ...e }),
              ],
            }),
          (0, J.jsx)(`div`, {
            className: D(Cb, !l && `_6FfXaBCSvws-`),
            children: (0, J.jsx)(`div`, {
              className: wb,
              children: (0, J.jsxs)(R, {
                direction: `column`,
                gap: `1`,
                children: [
                  (0, J.jsxs)(R, {
                    direction: `row`,
                    gap: `1`,
                    children: [
                      (0, J.jsx)(`div`, {
                        className: Db,
                        children: (0, J.jsx)(`img`, {
                          src: Ht(a.clan_avatar, `full`, `web`),
                          alt: ``,
                        }),
                      }),
                      (0, J.jsxs)(R, {
                        direction: `column`,
                        flexGrow: `1`,
                        children: [
                          (0, J.jsx)(Ib, { state: t.recommendation_state }),
                          (0, J.jsx)(V, {
                            size: `2`,
                            color: `greyneutral-11`,
                            children: (0, J.jsxs)(R, {
                              direction: `row`,
                              gap: `1`,
                              children: [
                                K(
                                  Z.Localize(
                                    `#AppPage_Curator_By`,
                                    i.name ?? ``,
                                  ),
                                  (0, J.jsx)(B, { href: o }),
                                ),
                                ur(t.time_recommended, { month: `long` }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, J.jsxs)(R, {
                        direction: `row`,
                        children: [
                          !!t.received_for_free &&
                            (0, J.jsx)(Fb, {
                              strToolTip: Z.Localize(
                                `#AppPage_Curator_ReceivedForFree`,
                              ),
                              strIconURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUEzODZBRDBCQTY2MTFFN0EzNDhCMkU0Qjk3OTkxNUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUEzODZBRDFCQTY2MTFFN0EzNDhCMkU0Qjk3OTkxNUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQTM4NkFDRUJBNjYxMUU3QTM0OEIyRTRCOTc5OTE1RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTM4NkFDRkJBNjYxMUU3QTM0OEIyRTRCOTc5OTE1RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpwBFL4AAADcSURBVHjaYmRAApPW71IAUiZA/AOIv+QFuh2AijsAKR4g5gDiM0DxBzA9TAyoAKR5LVDBFiD9FqhRB4RBbKjYWqgaOGBEsh3E9gZikK2GQHwTiG2g0keAWB2IzwMxyDVbgQb+R3EBVOAPEPsA8TMg1gNiUSjWg4r5gtTANINdALQ5E0iLM5AHXrJANU+ABhwycAHiPVA2yCtnsKipYIEyfgCd9QMtRv7AxEBsHGqo44UZQFyPxRuEvFABxPNZQCEKcgq6Ewl5AaoHIyGRDEYNgGYmMtPCS1ASAAgwAOqYYptRaTpTAAAAAElFTkSuQmCC`,
                            }),
                          !!t.received_compensation &&
                            (0, J.jsx)(Fb, {
                              strToolTip: Z.Localize(
                                `#AppPage_Curator_ReceivedCompensation`,
                              ),
                              strIconURL: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUUwMERGQzRCQTY2MTFFN0E5RjVCNDIzQkNGOENGQUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUUwMERGQzVCQTY2MTFFN0E5RjVCNDIzQkNGOENGQUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRTAwREZDMkJBNjYxMUU3QTlGNUI0MjNCQ0Y4Q0ZBQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRTAwREZDM0JBNjYxMUU3QTlGNUI0MjNCQ0Y4Q0ZBQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmcq2P4AAADESURBVHjaYvz//z8DJYCJgUJAsQEskzfs1gHSXkDMRaLeb0C8jQWqeSMQPyTRAHkg9meB2vwwL9DtB0xm0vpdrEDKGYiZoUJ/gXgvUM1voFw4VGwVSC8LDtNBms8ANbyBGigCEgPSO4kNRGaYZhCAspmRbF4FFAPHP4YLgLYw4vM4TCOGC0B+Q/LfX6izGZC88BddM7IL0G3dC/UzSiBiTQfQ+JSD+g3mxN9AvAPmHWw2A+XUQXoZgQyKEhLj0M9MAAEGAK+hTfu+MwujAAAAAElFTkSuQmCC`,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, J.jsx)(Lb, { strBlurb: t.blurb }),
                  !l &&
                    (0, J.jsx)(R, {
                      direction: `row`,
                      children: (0, J.jsx)(Pb, { ...e }),
                    }),
                ],
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function Pb(e) {
  let { recommendation: t } = e,
    n = zb(t.link_url),
    r = Mb(t.link_url),
    i = !!n?.iframe || !!n?.image;
  return r
    ? (0, J.jsx)(Rb, {
        strURL: r,
        bPlayIcon: i,
        strText: Z.Localize(
          i
            ? `#AppPage_Curator_WatchFullReview`
            : `#AppPage_Curator_ReadFullReview`,
        ),
      })
    : null;
}
function Fb(e) {
  let { strToolTip: t, strIconURL: n } = e;
  return (0, J.jsx)(nr, {
    toolTipContent: t,
    children: (0, J.jsx)(`div`, {
      className: Eb,
      children: (0, J.jsx)(`img`, { src: n, alt: `` }),
    }),
  });
}
function Ib(e) {
  switch (e.state) {
    case 0:
      return (0, J.jsx)(`span`, {
        className: D(Ob, kb),
        children: Z.Localize(`#AppPage_Curator_Recommended`),
      });
    case 1:
      return (0, J.jsx)(`span`, {
        className: D(Ob, Ab),
        children: Z.Localize(`#AppPage_Curator_NotRecommended`),
      });
    case 2:
      return (0, J.jsx)(`span`, {
        className: D(Ob, jb),
        children: Z.Localize(`#AppPage_Curator_Informational`),
      });
    default:
      return null;
  }
}
function Lb(e) {
  let t = (e.strBlurb ?? ``).split(`
`);
  return t.length == 0
    ? null
    : ((t[0] = Z.Localize(`#AppPage_Curator_QuoteLeft`) + t[0].trim()),
      (t[t.length - 1] =
        t[t.length - 1].trim() + Z.Localize(`#AppPage_Curator_QuoteRight`)),
      (0, J.jsx)(V, {
        className: Tb,
        children: t.map((e, t) => (0, J.jsx)(`div`, { children: e }, t)),
      }));
}
function Rb(e) {
  let { strURL: t, strText: n, bPlayIcon: r } = e;
  return (0, J.jsx)(nr, {
    toolTipContent: t,
    children: (0, J.jsxs)(aa, {
      href: t,
      openInNewWindow: !0,
      size: `1`,
      variant: `inverted`,
      color: `sky`,
      width: `100%`,
      children: [
        r &&
          (0, J.jsx)(`span`, {
            className: `_4APRMKizlDI-`,
            children: (0, J.jsx)(Li, {}),
          }),
        n,
      ],
    }),
  });
}
function zb(e) {
  if (e)
    for (let [t, n] of [
      [
        /(?:youtube\.com|youtu\.be)\/(?:watch)?(?:\?v=)?([a-zA-Z0-9_-]+)/,
        { image: `https://img.youtube.com/vi/%s/mqdefault.jpg` },
      ],
      [
        /nicovideo\.jp\/watch\/([sm0-9]+)/,
        { iframe: `https://embed.nicovideo.jp/watch/%s` },
      ],
      [
        /escapistmagazine\.com\/videos\/view\/.+\/([0-9]+)/,
        { iframe: `https://www.escapistmagazine.com/videos/embed/%s` },
      ],
      [
        /youku\.com\/v_show\/id_([0-9A-z=]+)/,
        { iframe: `https://player.youku.com/embed/%s` },
      ],
      [
        /bilibili\.com\/video\/av([0-9]+)/,
        { iframe: `https://www.bilibili.com/blackboard/player.html?aid=%s` },
      ],
    ]) {
      let r = e.match(t);
      if (r)
        return {
          iframe: n.iframe?.replace(`%s`, r[1]),
          image: n.image?.replace(`%s`, r[1]),
        };
    }
}
function Bb(e, t) {
  return [`OwnReview`, e, t];
}
function Vb(e) {
  let t = pi(),
    n = me(e),
    r = Hb(t, C.steamid, n);
  return d(r);
}
function Hb(e, t, n) {
  return {
    queryKey: Bb(t, n),
    queryFn: async () => {
      let r = await qt.GetIndividualRecommendations(e, {
        requests: [{ steamid: t, appid: n }],
      });
      if (r.GetEResult() == 42) return null;
      if (r.GetEResult() != 1)
        throw new m(r.GetEResult(), `Error from GetIndividualRecommendations`);
      return r.Body().recommendations()[0]?.toObject() ?? null;
    },
    staleTime: 1 / 0,
  };
}
function Ub(e) {
  let t = o(),
    n = me(e);
  return q.useCallback(
    (e) => {
      t.setQueryData(Bb(C.steamid, n), e);
    },
    [t, n],
  );
}
var Wb = `JAio9iWUQ0I-`;
function Gb(e) {
  let { review: t, eAppType: n, nSteamworksAppid: r, onEdit: i } = e,
    { data: a } = yt(C.steamid);
  q.use(Z.Ready());
  let o = le(Jt(a, C.steamid), r),
    s = t.is_public
      ? `#AppPage_OwnReview_PostedPublic`
      : `#AppPage_OwnReview_PostedFriendsOnly`;
  return (0, J.jsxs)(R, {
    direction: `column`,
    padding: `4`,
    borderColor: `greyneutral-9 50%`,
    children: [
      (0, J.jsx)(Kb, { review: t, eAppType: n }),
      (0, J.jsxs)(R, {
        direction: `column`,
        background: `greyneutral-11 14%`,
        children: [
          (0, J.jsx)(Jb, { review: t }),
          (0, J.jsxs)(R, {
            direction: `column`,
            gap: `3`,
            padding: `3`,
            children: [
              (0, J.jsxs)(R, {
                gap: `3`,
                align: `center`,
                children: [
                  (0, J.jsx)(qb, { bPositive: !!t.voted_up }),
                  (0, J.jsx)(N, {
                    flexGrow: `1`,
                    children: (0, J.jsx)(V, {
                      size: `3`,
                      color: `slate-11`,
                      children: Z.Localize(s),
                    }),
                  }),
                ],
              }),
              (0, J.jsx)(Yb, { review: t }),
              (0, J.jsxs)(R, {
                gap: `2`,
                justify: `end`,
                children: [
                  (0, J.jsx)(L, {
                    focusable: !0,
                    color: `blue`,
                    onClick: i,
                    children: Z.Localize(`#AppPage_OwnReview_Edit`),
                  }),
                  (0, J.jsx)(aa, {
                    focusable: !0,
                    color: `blue`,
                    href: o,
                    children: Z.Localize(`#AppPage_OwnReview_View`),
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
function Kb(e) {
  let { review: t, eAppType: n } = e,
    r = Z.GetAppTypeLocKey(`#AppPage_OwnReview_Reviewed`, n ?? 0),
    i = vr(t.time_created ?? 0, { fullmonthname: !0 });
  return (0, J.jsxs)(V, {
    size: `5`,
    weight: `medium`,
    color: `text-light`,
    contrast: `title`,
    marginBottom: `2`,
    children: [
      Z.Localize(r, i),
      !!t.time_updated &&
        ` (${Z.Localize(`#AppPage_OwnReview_Updated`, vr(t.time_updated, { fullmonthname: !0 }))})`,
    ],
  });
}
function qb(e) {
  let { bPositive: t } = e;
  return (0, J.jsx)(`div`, {
    className: D(Wb, !t && `dFiFaaLthkY-`),
    children: (0, J.jsx)(Ar, {}),
  });
}
function Jb(e) {
  let { review: t } = e,
    n = t.votes_up ?? 0,
    r = t.comment_count ?? 0;
  return !n && !r
    ? null
    : (0, J.jsxs)(R, {
        gap: `3`,
        align: `center`,
        paddingX: `4`,
        paddingY: `2`,
        background: `greyneutral-9 50%`,
        children: [
          n > 0 &&
            (0, J.jsx)(V, {
              size: `3`,
              children: Z.LocalizePlural(`#AppPage_OwnReview_HelpfulCount`, n),
            }),
          r > 0 &&
            (0, J.jsxs)(R, {
              gap: `1`,
              align: `center`,
              children: [
                (0, J.jsx)(V, { size: `3`, children: r }),
                (0, J.jsx)(Ni, { className: `y2kZKvZ2sp8-` }),
              ],
            }),
        ],
      });
}
function Yb(e) {
  let { review: t } = e,
    [n, r] = q.useState(!1),
    i = q.useCallback(() => r(!0), []);
  if (!t.developer_response) return null;
  q.use(te.Ready());
  let a = vr(t.time_developer_responded ?? 0, {
    fullmonthname: !0,
    bUseRelativeNames: !1,
  });
  return (0, J.jsxs)(R, {
    direction: `column`,
    gap: `2`,
    children: [
      (0, J.jsxs)(R, {
        gap: `2`,
        align: `center`,
        wrap: `wrap`,
        children: [
          (0, J.jsx)(V, {
            size: `3`,
            color: `slate-11`,
            children: te.Localize(
              `#Review_OfficialDeveloperResponseExistsDate`,
              a,
            ),
          }),
          !n &&
            (0, J.jsx)(L, {
              focusable: !0,
              size: `1`,
              variant: `ghost`,
              color: `blue`,
              onClick: i,
              children: te.Localize(`#Review_OfficialDeveloperResponse_View`),
            }),
        ],
      }),
      n &&
        (0, J.jsx)(N, {
          padding: `3`,
          background: `greyneutral-9 50%`,
          className: D(`qXOh-7nWDCE-`, `CJxzCQdgSiI-`),
          children: (0, J.jsx)(g, { text: t.developer_response, bBeWary: !0 }),
        }),
    ],
  });
}
function Xb(e, t) {
  let n = me(e),
    r = yr(`recommend-game`);
  return u({
    mutationFn: (i) => (t ? $b(t, i) : Qb(e, n, i, r)),
    onSuccess: () => {
      window.location.reload();
    },
  });
}
function Zb(e) {
  function t(e) {
    return typeof e == `boolean` || e == null ? (e ? `1` : `0`) : String(e);
  }
  let n = new FormData();
  return (
    Object.entries(e).forEach(([e, r]) => {
      if (Array.isArray(r)) for (let i of r) n.append(e + `[]`, t(i));
      else n.append(e, t(r));
    }),
    n
  );
}
async function Qb(e, t, n, r) {
  let i = await ex(`${w.STORE_BASE_URL}friends/recommendgame`, {
    appid: e,
    steamworksappid: t,
    comment: n.review ?? ``,
    rated_up: n.voted_up,
    is_public: n.is_public,
    language: n.language ?? ``,
    received_compensation: n.received_compensation,
    disable_comments: n.comments_disabled,
    sessionid: Bi(),
    hide_in_steam_china: !ba(w.EREALM),
    saved_hardware_id: n.saved_hardware_id,
    snr: r,
  });
  if (!i.success) throw Error(i.strError ?? ``);
}
async function $b(e, t) {
  if (
    (
      await ex(`${w.STORE_BASE_URL}userreviews/update/${e}`, {
        review_text: t.review ?? ``,
        voted_up: t.voted_up,
        is_public: t.is_public,
        language: t.language ?? ``,
        received_compensation: t.received_compensation,
        comments_disabled: t.comments_disabled,
        saved_hardware_id: t.saved_hardware_id,
        sessionid: Bi(),
      })
    ).success != 1
  )
    throw Error(``);
}
async function ex(e, t) {
  let n = Zb(t);
  return await (
    await fetch(e, { method: `POST`, body: n, credentials: `include` })
  )
    .json()
    .catch(() => ({}));
}
var $ = e(a(), 1),
  tx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            controller_code: { n: 2, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_QueryAccountsRegisteredToSerial_Request`;
    }
  },
  nx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: T.readUint32, bw: z.writeUint32 },
            registration_complete: { n: 2, br: T.readBool, bw: z.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_QueryAccountsRegisteredToSerial_Accounts`;
    }
  },
  rx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accounts || A(e.M()),
        $.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { accounts: { n: 1, c: nx, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_QueryAccountsRegisteredToSerial_Response`;
    }
  },
  ix = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            controller_code: { n: 2, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_RegisterSteamController_Request`;
    }
  },
  ax = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), $.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_RegisterSteamController_Response`;
    }
  },
  ox = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            controller_code: { n: 2, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_CompleteSteamControllerRegistration_Request`;
    }
  },
  sx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), $.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_CompleteSteamControllerRegistration_Response`;
    }
  },
  cx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appidorname || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appidorname: { n: 1, br: T.readString, bw: z.writeString },
            publishedfileid: {
              n: 2,
              br: T.readUint64String,
              bw: z.writeUint64String,
            },
            templatename: { n: 3, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SteamControllerSetConfig_ControllerConfig`;
    }
  },
  lx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            controller_code: { n: 2, br: T.readString, bw: z.writeString },
            accountid: { n: 3, br: T.readUint32, bw: z.writeUint32 },
            configurations: { n: 4, c: cx, r: !0, q: !0 },
            controller_type: { n: 5, d: 2, br: T.readInt32, bw: z.writeInt32 },
            only_for_this_serial: {
              n: 6,
              d: !1,
              br: T.readBool,
              bw: z.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SteamControllerSetConfig_Request`;
    }
  },
  ux = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), $.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SteamControllerSetConfig_Response`;
    }
  },
  dx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            controller_code: { n: 2, br: T.readString, bw: z.writeString },
            accountid: { n: 3, br: T.readUint32, bw: z.writeUint32 },
            appidorname: { n: 4, br: T.readString, bw: z.writeString },
            controller_type: { n: 5, d: 2, br: T.readInt32, bw: z.writeInt32 },
            only_for_this_serial: {
              n: 6,
              d: !1,
              br: T.readBool,
              bw: z.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SteamControllerGetConfig_Request`;
    }
  },
  fx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appidorname || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appidorname: { n: 1, br: T.readString, bw: z.writeString },
            publishedfileid: {
              n: 2,
              br: T.readUint64String,
              bw: z.writeUint64String,
            },
            templatename: { n: 3, br: T.readString, bw: z.writeString },
            serial_number: { n: 4, d: ``, br: T.readString, bw: z.writeString },
            autosave: { n: 5, d: !1, br: T.readBool, bw: z.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SteamControllerGetConfig_ControllerConfig`;
    }
  },
  px = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.configurations || A(e.M()),
        $.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { configurations: { n: 1, c: fx, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SteamControllerGetConfig_Response`;
    }
  },
  mx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            controller_code: { n: 2, br: T.readString, bw: z.writeString },
            accountid: { n: 3, br: T.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_DeRegisterSteamController_Request`;
    }
  },
  hx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), $.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_DeRegisterSteamController_Response`;
    }
  },
  gx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            publishedfileid: {
              n: 2,
              br: T.readUint64String,
              bw: z.writeUint64String,
            },
            accountid: { n: 3, br: T.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SetPersonalizationFile_Request`;
    }
  },
  _x = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), $.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SetPersonalizationFile_Response`;
    }
  },
  vx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            accountid: { n: 2, br: T.readUint32, bw: z.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_GetPersonalizationFile_Request`;
    }
  },
  yx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.publishedfileid || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            publishedfileid: {
              n: 1,
              br: T.readUint64String,
              bw: z.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_GetPersonalizationFile_Response`;
    }
  },
  bx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.product_name || A(e.M()),
        $.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            product_name: { n: 1, br: T.readString, bw: z.writeString },
            values: { n: 2, c: xx, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_VRCompatibilityCheck_Request`;
    }
  },
  xx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.key || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: T.readString, bw: z.writeString },
            value: { n: 2, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_VRCompatibilityCheck_Request_Pair`;
    }
  },
  Sx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.values || A(e.M()),
        $.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            values: { n: 1, c: Cx, r: !0, q: !0 },
            components: { n: 2, c: wx, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_VRCompatibilityCheck_Response`;
    }
  },
  Cx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.key || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: T.readString, bw: z.writeString },
            value: { n: 2, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_VRCompatibilityCheck_Response_Pair`;
    }
  },
  wx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: z.writeString },
            image: { n: 2, br: T.readString, bw: z.writeString },
            value: { n: 3, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_VRCompatibilityCheck_Response_ComponentDisplay`;
    }
  },
  Tx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            manufacturer_serial_number: {
              n: 2,
              br: T.readString,
              bw: z.writeString,
            },
            component_code: { n: 3, br: T.readString, bw: z.writeString },
            component_type: { n: 4, br: T.readEnum, bw: z.writeEnum },
            estimated_time_registered: {
              n: 5,
              br: T.readInt32,
              bw: z.writeInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_RegisterValveIndexComponent_Request`;
    }
  },
  Ex = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), $.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_RegisterValveIndexComponent_Response`;
    }
  },
  Dx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            controller_code: { n: 2, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_GetSteamDeckComponents_Request`;
    }
  },
  Ox = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.json_components || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            json_components: { n: 1, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_GetSteamDeckComponents_Response`;
    }
  },
  kx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.friendly_name || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            friendly_name: { n: 1, br: T.readString, bw: z.writeString },
            system_info: { n: 2, c: Nn },
            backfill_user_reviews: { n: 3, br: T.readBool, bw: z.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SaveHardware_Request`;
    }
  },
  Ax = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.hardware_id || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            hardware_id: {
              n: 1,
              br: T.readUint64String,
              bw: z.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SaveHardware_Response`;
    }
  },
  jx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.hardware_id || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            hardware_id: {
              n: 1,
              br: T.readUint64String,
              bw: z.writeUint64String,
            },
            friendly_name: { n: 2, br: T.readString, bw: z.writeString },
            timestamp_created: { n: 3, br: T.readUint32, bw: z.writeUint32 },
            hardware_cluster_id: {
              n: 4,
              br: T.readUint64String,
              bw: z.writeUint64String,
            },
            system_info: { n: 5, c: Nn },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_SavedHardware_Details`;
    }
  },
  Mx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: T.readFixed64String,
              bw: z.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_GetSavedHardwareList_Request`;
    }
  },
  Nx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.saved_hardware || A(e.M()),
        $.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { saved_hardware: { n: 1, c: jx, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_GetSavedHardwareList_Response`;
    }
  },
  Px = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.hardware_id || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            hardware_id: {
              n: 1,
              br: T.readUint64String,
              bw: z.writeUint64String,
            },
            delete_hardware: { n: 2, br: T.readBool, bw: z.writeBool },
            friendly_name_update: { n: 3, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_ManageSavedHardware_Request`;
    }
  },
  Fx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), $.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_ManageSavedHardware_Response`;
    }
  },
  Ix = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            machine_code: { n: 2, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_RegisterSteamMachine_Request`;
    }
  },
  Lx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), $.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_RegisterSteamMachine_Response`;
    }
  },
  Rx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.controllers || A(e.M()),
        $.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { controllers: { n: 1, c: zx, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_UpdateControllerUsageReport_Request`;
    }
  },
  zx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: T.readString, bw: z.writeString },
            controller_code: { n: 2, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_UpdateControllerUsageReport_Request_Controller`;
    }
  },
  Bx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), $.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardware_UpdateControllerUsageReport_Response`;
    }
  },
  Vx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial || A(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial: { n: 1, br: T.readString, bw: z.writeString },
            component_serial: { n: 2, br: T.readString, bw: z.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= x(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return H(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return k(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      M(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardwarePromotions_RedeemFramePromoPackage_Request`;
    }
  },
  Hx = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), $.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAccountHardwarePromotions_RedeemFramePromoPackage_Response`;
    }
  },
  Ux;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `AccountHardware.RegisterSteamController#1`,
      P(ix, t, n),
      ax,
      { ePrivilege: 1 },
    );
  }
  e.RegisterSteamController = t;
  function n(e, t, n) {
    return e.SendMsg(
      `AccountHardware.CompleteSteamControllerRegistration#1`,
      P(ox, t, n),
      sx,
      { ePrivilege: 1 },
    );
  }
  e.CompleteSteamControllerRegistration = n;
  function r(e, t, n) {
    return e.SendMsg(
      `AccountHardware.QueryAccountsRegisteredToController#1`,
      P(tx, t, n),
      rx,
      { ePrivilege: 1 },
    );
  }
  e.QueryAccountsRegisteredToController = r;
  function i(e, t, n) {
    return e.SendMsg(
      `AccountHardware.UpdateControllerUsageReport#1`,
      P(Rx, t, n),
      Bx,
      { ePrivilege: 1 },
    );
  }
  e.UpdateControllerUsageReport = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AccountHardware.SetDesiredControllerConfigForApp#1`,
      P(lx, t, n),
      ux,
      { ePrivilege: 1 },
    );
  }
  e.SetDesiredControllerConfigForApp = a;
  function o(e, t, n) {
    return e.SendMsg(
      `AccountHardware.GetDesiredControllerConfigForApp#1`,
      P(dx, t, n),
      px,
      { ePrivilege: 1 },
    );
  }
  e.GetDesiredControllerConfigForApp = o;
  function s(e, t, n) {
    return e.SendMsg(
      `AccountHardware.DeRegisterSteamController#1`,
      P(mx, t, n),
      hx,
      { ePrivilege: 1 },
    );
  }
  e.DeRegisterSteamController = s;
  function c(e, t, n) {
    return e.SendMsg(
      `AccountHardware.SetControllerPersonalizationFile#1`,
      P(gx, t, n),
      _x,
      { ePrivilege: 1 },
    );
  }
  e.SetControllerPersonalizationFile = c;
  function l(e, t, n) {
    return e.SendMsg(
      `AccountHardware.GetControllerPersonalizationFile#1`,
      P(vx, t, n),
      yx,
      { ePrivilege: 1 },
    );
  }
  e.GetControllerPersonalizationFile = l;
  function u(e, t, n) {
    return e.SendMsg(
      `AccountHardware.VRCompatibilityCheck#1`,
      P(bx, t, n),
      Sx,
      { ePrivilege: 0 },
    );
  }
  e.VRCompatibilityCheck = u;
  function d(e, t, n) {
    return e.SendMsg(
      `AccountHardware.RegisterValveIndexComponent#1`,
      P(Tx, t, n),
      Ex,
      { ePrivilege: 1 },
    );
  }
  e.RegisterValveIndexComponent = d;
  function f(e, t, n) {
    return e.SendMsg(
      `AccountHardware.GetSteamDeckComponents#1`,
      P(Dx, t, n),
      Ox,
      { ePrivilege: 1 },
    );
  }
  e.GetSteamDeckComponents = f;
  function p(e, t, n) {
    return e.SendMsg(`AccountHardware.SaveHardware#1`, P(kx, t, n), Ax, {
      ePrivilege: 1,
    });
  }
  e.SaveHardware = p;
  function m(e, t, n) {
    return e.SendMsg(`AccountHardware.ManageSavedHardware#1`, P(Px, t, n), Fx, {
      ePrivilege: 1,
    });
  }
  e.ManageSavedHardware = m;
  function h(e, t, n) {
    return e.SendMsg(
      `AccountHardware.GetSavedHardwareList#1`,
      P(Mx, t, n),
      Nx,
      { ePrivilege: 1 },
    );
  }
  e.GetSavedHardwareList = h;
  function g(e, t, n) {
    return e.SendMsg(
      `AccountHardware.RegisterSteamMachine#1`,
      P(Ix, t, n),
      Lx,
      { ePrivilege: 1 },
    );
  }
  e.RegisterSteamMachine = g;
})((Ux ||= {}));
var Wx;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `AccountHardwarePromotions.RedeemFramePromoPackage#1`,
      P(Vx, t, n),
      Hx,
      { ePrivilege: 1 },
    );
  }
  e.RedeemFramePromoPackage = t;
})((Wx ||= {}));
function Gx(e) {
  return [`SavedHardware`, e];
}
function Kx(e) {
  let t = pi();
  return d(qx(t, C.steamid, e));
}
function qx(e, t, n) {
  return {
    queryKey: Gx(t),
    queryFn: async () => {
      let n = await Ux.GetSavedHardwareList(e, { steamid: t });
      if (!n.BSuccess())
        throw new m(n.GetEResult(), `Error from GetSavedHardwareList`);
      return n.Body().toObject().saved_hardware ?? [];
    },
    enabled: n,
    staleTime: 3e5,
  };
}
var Jx = 1770934110;
function Yx() {
  let e = o(),
    t = Xx();
  q.useEffect(() => {
    if (t)
      return SteamClient.BrowserView.RegisterForMessageFromParent((t) => {
        t == `OnCloseSaveHardwareDialog` &&
          e.invalidateQueries({ queryKey: Gx(C.steamid) });
      }).unregister;
  }, [e, t]);
  let n = q.useCallback(() => {
    SteamClient.BrowserView.PostMessageToParent(`ShowSavedHardwareDialog`, ``);
  }, []);
  return t ? n : void 0;
}
function Xx() {
  if (
    !Yn(`BrowserView.PostMessageToParent`) ||
    !Yn(`BrowserView.RegisterForMessageFromParent`)
  )
    return !1;
  let e = ra();
  return e == 0 || e >= Jx;
}
var Zx = `_2GB3qMfl4Ks-`,
  Qx = `6862-8119-C23E-EA7B`,
  $x = 8e3,
  eS = _n.filter((e) => e != `sc_schinese` && e != `arabic`);
function tS(e) {
  let { appid: t, review: n } = e,
    { data: r } = I({ appid: t }),
    { data: i } = yt(C.steamid),
    [a, o] = q.useState(() => sS(n)),
    [s, c] = q.useState(``),
    l = Xb(t, n?.recommendationid),
    u = l.mutate,
    d = q.useCallback((e) => {
      o((t) => ({ ...t, ...e }));
    }, []),
    f = q.useCallback((e) => d({ review: e }), [d]),
    p = r?.name ?? ``,
    m = q.useCallback(() => {
      a.review?.trim()
        ? a.voted_up === void 0
          ? c(Z.Localize(`#AppPage_WriteReview_ErrorNoRating`, p))
          : (c(``), u(a))
        : c(Z.Localize(`#AppPage_WriteReview_ErrorNoText`));
    }, [a, u, p]);
  if (!r) return null;
  q.use(Z.Ready()), q.use(W.Ready());
  let h = !!n,
    g = r.type ?? 0,
    _ = l.error
      ? l.error.message || Z.Localize(`#AppPage_WriteReview_ErrorPosting`)
      : ``;
  return (0, J.jsx)(si, {
    navEntryPreferPosition: Ri.PREFERRED_CHILD,
    children: (0, J.jsxs)(R, {
      direction: `column`,
      gap: `3`,
      padding: `4`,
      borderColor: `greyneutral-9 50%`,
      children: [
        (0, J.jsx)(nS, { strAppName: p, eAppType: g, bUpdate: h }),
        (0, J.jsxs)(R, {
          gap: `3`,
          children: [
            !!i &&
              (0, J.jsx)(bt, {
                playerLinkDetails: i,
                size: `MediumLarge`,
                statusPosition: `border`,
                alt: ``,
              }),
            (0, J.jsxs)(R, {
              direction: `column`,
              gap: `3`,
              flexGrow: `1`,
              navProps: { preferredFocus: !0 },
              children: [
                (!!s || !!_) &&
                  (0, J.jsx)(V, {
                    size: `3`,
                    color: `red-10`,
                    children: s || _,
                  }),
                (0, J.jsx)(Za, {
                  value: a.review ?? ``,
                  onTextChange: f,
                  placeholder: Z.Localize(`#AppPage_WriteReview_Placeholder`),
                  rows: 4,
                  maxLength: $x,
                }),
                (0, J.jsx)(rS, {
                  review: a,
                  bFreeApp: !!r.is_free,
                  UpdateForm: d,
                }),
                (0, J.jsx)(aS, {
                  bVotedUp: a.voted_up,
                  eAppType: g,
                  bUpdate: h,
                  bPosting: l.isPending,
                  UpdateForm: d,
                  OnSubmit: m,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function nS(e) {
  let { strAppName: t, eAppType: n, bUpdate: r } = e;
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(V, {
        size: `5`,
        color: `blue-11`,
        children: Z.Localize(
          r ? `#AppPage_WriteReview_TitleUpdate` : `#AppPage_WriteReview_Title`,
          t,
        ),
      }),
      (0, J.jsx)(V, {
        size: `3`,
        color: `greyneutral-11`,
        children: K(
          Z.Localize(Z.GetAppTypeLocKey(`#AppPage_WriteReview_Desc`, n)),
          (0, J.jsx)(b, {
            underline: `always`,
            color: `blue-8`,
            href: `${w.HELP_BASE_URL}faqs/view/${Qx}`,
          }),
        ),
      }),
      ba(w.EREALM) &&
        (0, J.jsx)(V, {
          size: `3`,
          color: `brown-10`,
          children: Z.Localize(`#AppPage_WriteReview_ChinaDisclaimer`),
        }),
    ],
  });
}
function rS(e) {
  let { review: t, bFreeApp: n, UpdateForm: r } = e,
    [i, a] = q.useState(!1),
    o = q.useCallback(() => a((e) => !e), []),
    s = q.useCallback((e) => r({ is_public: e.data }), [r]),
    c = q.useCallback((e) => r({ language: e.data }), [r]),
    l = q.useCallback((e) => r({ comments_disabled: !e }), [r]),
    u = q.useCallback((e) => r({ received_compensation: e }), [r]),
    d = Z.Localize(`#AppPage_WriteReview_Visibility`),
    f = Z.Localize(`#AppPage_WriteReview_Language`),
    p = [
      { label: Z.Localize(`#AppPage_WriteReview_VisibilityPublic`), data: !0 },
      { label: Z.Localize(`#AppPage_WriteReview_VisibilityFriends`), data: !1 },
    ],
    m = eS.map((e) => ({ label: y(e), data: e }));
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(L, {
        variant: `basic`,
        color: `greyneutral`,
        width: `100%`,
        focusable: !0,
        onClick: o,
        children: (0, J.jsxs)(R, {
          justify: `between`,
          align: `center`,
          width: `100%`,
          children: [
            Z.Localize(`#AppPage_WriteReview_Settings`),
            (0, J.jsx)(ea, { direction: i ? `up` : `down` }),
          ],
        }),
      }),
      i &&
        (0, J.jsxs)(R, {
          direction: `column`,
          gap: `2`,
          children: [
            (0, J.jsxs)(R, {
              justify: `between`,
              align: `center`,
              gap: `2`,
              children: [
                (0, J.jsx)(V, { size: `3`, children: d }),
                C.is_limited
                  ? (0, J.jsx)(V, {
                      size: `3`,
                      color: `greyneutral-11`,
                      children: Z.Localize(
                        `#AppPage_WriteReview_VisibilityLimited`,
                      ),
                    })
                  : (0, J.jsx)(N, {
                      width: `50%`,
                      children: (0, J.jsx)(Bn, {
                        controlled: !0,
                        rgOptions: p,
                        selectedOption: !!t.is_public,
                        onChange: s,
                        menuLabel: d,
                      }),
                    }),
              ],
            }),
            !ba(w.EREALM) &&
              (0, J.jsxs)(R, {
                justify: `between`,
                align: `center`,
                gap: `2`,
                children: [
                  (0, J.jsx)(V, { size: `3`, children: f }),
                  (0, J.jsx)(N, {
                    width: `50%`,
                    children: (0, J.jsx)(Bn, {
                      controlled: !0,
                      rgOptions: m,
                      selectedOption: t.language,
                      onChange: c,
                      menuLabel: f,
                      strDefaultLabel: y(t.language ?? ``),
                    }),
                  }),
                ],
              }),
            (0, J.jsx)(qn, {
              checked: !t.comments_disabled,
              onChange: l,
              children: (0, J.jsx)(V, {
                size: `3`,
                children: Z.Localize(`#AppPage_WriteReview_AllowComments`),
              }),
            }),
            (0, J.jsx)(iS, {
              strSavedHardwareID: t.saved_hardware_id,
              UpdateForm: r,
            }),
            !n &&
              (0, J.jsx)(qn, {
                checked: !!t.received_compensation,
                onChange: u,
                children: (0, J.jsx)(V, {
                  size: `3`,
                  children: Z.Localize(`#AppPage_WriteReview_ReceivedFree`),
                }),
              }),
            (0, J.jsx)(at, { color: `greyneutral-9 50%`, size: `4` }),
          ],
        }),
    ],
  });
}
function iS(e) {
  let { strSavedHardwareID: t, UpdateForm: n } = e,
    [r, i] = q.useState(!!t),
    { data: a, isPending: o } = Kx(r),
    s = Yx(),
    c = q.useCallback(
      (e) => {
        i(e), e || n({ saved_hardware_id: void 0 });
      },
      [n],
    ),
    l = q.useCallback((e) => n({ saved_hardware_id: e.data }), [n]),
    u = a?.[0]?.hardware_id;
  q.useEffect(() => {
    r && !t && u && n({ saved_hardware_id: u });
  }, [r, t, u, n]);
  let d = Z.Localize(`#AppPage_WriteReview_PCSpecs`),
    f = (a ?? []).map((e) => ({
      label: e.friendly_name ?? ``,
      data: e.hardware_id ?? ``,
    }));
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(qn, {
        checked: r,
        onChange: c,
        children: (0, J.jsx)(V, {
          size: `3`,
          children: Z.Localize(`#AppPage_WriteReview_AttachHardware`),
        }),
      }),
      r &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsxs)(R, {
              justify: `between`,
              align: `center`,
              gap: `2`,
              children: [
                (0, J.jsx)(V, { size: `3`, children: d }),
                (0, J.jsx)(N, {
                  width: `50%`,
                  children: (0, J.jsx)(Bn, {
                    controlled: !0,
                    disabled: !f.length,
                    rgOptions: f,
                    selectedOption: t,
                    onChange: l,
                    menuLabel: d,
                    strDefaultLabel: o
                      ? W.Localize(`#Loading`)
                      : Z.Localize(`#AppPage_WriteReview_PCSpecsNone`),
                  }),
                }),
              ],
            }),
            !!s &&
              (0, J.jsx)(R, {
                justify: `end`,
                children: (0, J.jsx)(L, {
                  focusable: !0,
                  variant: `basic`,
                  color: `greyneutral`,
                  onClick: s,
                  children: Z.Localize(`#AppPage_WriteReview_AddPC`),
                }),
              }),
          ],
        }),
    ],
  });
}
function aS(e) {
  let {
      bVotedUp: t,
      eAppType: n,
      bUpdate: r,
      bPosting: i,
      UpdateForm: a,
      OnSubmit: o,
    } = e,
    s = q.useCallback(() => a({ voted_up: !0 }), [a]),
    c = q.useCallback(() => a({ voted_up: !1 }), [a]);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsxs)(R, {
        direction: `column`,
        gap: `2`,
        children: [
          (0, J.jsx)(V, {
            size: `4`,
            children: Z.Localize(
              Z.GetAppTypeLocKey(`#AppPage_WriteReview_Recommend`, n),
            ),
          }),
          (0, J.jsxs)(R, {
            gap: `2`,
            children: [
              (0, J.jsx)(oS, {
                bThumbsUp: !0,
                bSelected: t === !0,
                onSelect: s,
              }),
              (0, J.jsx)(oS, {
                bThumbsUp: !1,
                bSelected: t === !1,
                onSelect: c,
              }),
            ],
          }),
        ],
      }),
      (0, J.jsx)(R, {
        justify: `end`,
        children: (0, J.jsx)(L, {
          focusable: !0,
          color: `blue`,
          loading: i,
          onClick: o,
          children: Z.Localize(
            r ? `#AppPage_WriteReview_Update` : `#AppPage_WriteReview_Post`,
          ),
        }),
      }),
    ],
  });
}
function oS(e) {
  let { bThumbsUp: t, bSelected: n, onSelect: r } = e;
  return (0, J.jsx)(L, {
    focusable: !0,
    variant: `basic`,
    color: n ? `blue` : `greyneutral`,
    onClick: r,
    children: (0, J.jsxs)(R, {
      direction: `row`,
      gap: `1`,
      align: `center`,
      children: [
        (0, J.jsx)(Ar, { className: D(Zx, !t && `-QoCTiqpxhg-`) }),
        (0, J.jsx)(V, {
          size: `4`,
          contrast: `title`,
          children: Z.Localize(
            t
              ? `#AppPage_WriteReview_RecommendYes`
              : `#AppPage_WriteReview_RecommendNo`,
          ),
        }),
      ],
    }),
  });
}
function sS(e) {
  let t = ba(w.EREALM);
  return e
    ? {
        ...e,
        language: t || !e.language ? cS() : e.language,
        comments_disabled: e.comments_disabled || t,
        is_public: e.is_public && !C.is_limited,
      }
    : { is_public: !C.is_limited, language: cS(), comments_disabled: t };
}
function cS() {
  return ba(w.EREALM)
    ? `schinese`
    : w.LANGUAGE == `korean`
      ? `koreana`
      : w.LANGUAGE;
}
function lS(e) {
  let { appid: t, ownReview: n } = e,
    r = Ub(t),
    [i, a] = q.useState(!1);
  return (
    q.useEffect(() => {
      r(n), a(!0);
    }, [n, r]),
    i ? (0, J.jsx)(uS, { appid: t }) : null
  );
}
function uS(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t }),
    { data: r } = Vb(t),
    i = me(t),
    [a, o] = q.useState(!1),
    s = q.useCallback(() => o(!0), []);
  return n
    ? (0, J.jsx)(R, {
        direction: `column`,
        paddingX: `5`,
        paddingY: `3`,
        background: `greyneutral-2 80%`,
        children:
          r && !a
            ? (0, J.jsx)(Gb, {
                review: r,
                eAppType: n.type,
                nSteamworksAppid: i,
                onEdit: s,
              })
            : (0, J.jsx)(tS, { appid: t, review: r ?? null }),
      })
    : null;
}
var dS = `_5Tz45s7G-GY-`,
  fS = `Y8gMcjwZ9hM-`,
  pS = `_5-HPcNInFag-`,
  mS = `FunRCPAPbPs-`,
  hS = `_3g1BKwoe9TA-`,
  gS = `Tx8J3kg0lO4-`,
  _S = { 2023: `L6kQPtKJSNQ-`, 2024: `MCt-hwZmC-4-`, 2025: `JLXpbR9DqHc-` };
function vS(e) {
  let { appid: t } = e,
    { data: n } = S({ appid: t }),
    r = (n?.steam_award ?? [])
      .filter((e) => !!e.localization?.title && !!_S[e.award_year])
      .sort((e, t) => t.award_year - e.award_year);
  return r.length
    ? (0, J.jsx)(R, {
        direction: `column`,
        gap: `4`,
        children: r.map((e) =>
          (0, J.jsx)(yS, { award: e }, `${e.award_year}_${e.voteid}`),
        ),
      })
    : null;
}
function yS(e) {
  let { award: t } = e,
    n = t.award_year,
    r = fr(`${w.STORE_BASE_URL}steamawards/${n}/`);
  return (0, J.jsxs)(B, {
    className: D(fS, _S[n]),
    href: r,
    children: [
      (0, J.jsxs)(`div`, {
        className: pS,
        children: [
          (0, J.jsx)(`span`, {
            className: void 0,
            children: Z.Localize(`#AppPage_SteamAwards_Title`),
          }),
          (0, J.jsx)(`span`, { className: gS, children: n }),
        ],
      }),
      (0, J.jsx)(`div`, {
        className: mS,
        children: Z.Localize(`#AppPage_SteamAwards_Winner`),
      }),
      (0, J.jsx)(`div`, { className: hS, children: t.localization.title }),
    ],
  });
}
var bS = new URL(
    `../../../images/applications/store/mc_logo_no_text.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  xS = `_9kTS-uc-PFM-`,
  SS = `Rw7IxWL6zmw-`,
  CS = `hHvFqfYmdOM-`,
  wS = `SykA5r-tXQo-`,
  TS = `ZrXq2qc5NwY-`;
function ES(e) {
  let { appid: t } = e,
    { metacritic: n, app: r, bShow: i, nScore: a } = DS(t);
  return (
    q.use(Z.Ready()),
    !i || !r
      ? null
      : (0, J.jsxs)(R, {
          align: `start`,
          paddingY: `2`,
          direction: `row`,
          children: [
            (0, J.jsx)(R, {
              className: D(xS, a > 0 ? OS(a, r.type) : wS),
              width: `50px`,
              height: `50px`,
              flexShrink: `0`,
              align: `center`,
              justify: `center`,
              children: a > 0 ? a : `NA`,
            }),
            (0, J.jsxs)(R, {
              direction: `column`,
              paddingLeft: `2`,
              children: [
                (0, J.jsx)(AS, {}),
                a > 0
                  ? n?.url && (0, J.jsx)(kS, { url: n.url })
                  : (0, J.jsx)(V, {
                      size: `2`,
                      children: Z.Localize(`#AppPage_Metacritic_NotReviewed`),
                    }),
              ],
            }),
          ],
        })
  );
}
function DS(e) {
  let { data: t } = I({ appid: e }),
    { data: n } = S({ appid: e }),
    r = t?.type === 1 ? t.related_items?.parent_appid : void 0,
    { data: i } = S(r ? { appid: r } : void 0);
  if (!t) return { bShow: !1, nScore: 0 };
  let a = n?.metacritic,
    o = (r ? i?.metacritic?.score : a?.score) ?? 0;
  return { metacritic: a, app: t, nScore: o, bShow: !!a?.always_show || o > 0 };
}
function OS(e, t) {
  let n = t === 7 || t === 8;
  return e >= (n ? 61 : 75) ? SS : e >= (n ? 40 : 50) ? CS : wS;
}
function kS(e) {
  let { url: t } = e;
  return (0, J.jsxs)(b, {
    size: `2`,
    color: `blue-8`,
    href: w.IN_CLIENT ? `steam://openurl/${t}` : t,
    target: w.IN_CLIENT ? void 0 : `_blank`,
    children: [
      Z.Localize(`#AppPage_Metacritic_ReadCriticReviews`),
      (0, J.jsx)(`span`, { className: TS, children: (0, J.jsx)(ya, {}) }),
    ],
  });
}
function AS(e) {
  return (0, J.jsxs)(R, {
    direction: `row`,
    gap: `1`,
    align: `center`,
    children: [
      (0, J.jsx)(Ea, {
        src: bS,
        alt: ``,
        width: `24px`,
        height: `24px`,
        flexShrink: `0`,
      }),
      (0, J.jsx)(V, {
        size: `7`,
        weight: `heavy`,
        contrast: `title`,
        children: `metacritic`,
      }),
    ],
  });
}
function jS(e) {
  let { appid: t } = e,
    { data: n } = S({ appid: t }),
    { bShow: r } = DS(t);
  q.use(Z.Ready());
  let i = n?.partner_awards_bbcode && n.partner_awards_bbcode.length > 0,
    a = n?.steam_award && n.steam_award.length > 0;
  return !i && !a && !r
    ? null
    : (0, J.jsxs)(Mm, {
        className: dS,
        "flow-children": `column`,
        children: [
          (0, J.jsx)(wg, { text: Z.Localize(`#AppPage_Awards_Header`) }),
          (0, J.jsx)(ES, { appid: t }),
          (0, J.jsx)(vS, { appid: t }),
          n?.partner_awards_bbcode &&
            (0, J.jsx)(ot, { text: n.partner_awards_bbcode }),
        ],
      });
}
var MS = `bQJ6th3Q-wM-`,
  NS = `uZGVdQKYKa0-`,
  PS = `OqPhTeqCwa8-`,
  FS = `kZa66EAHeHM-`,
  IS = `wIhBj-NKBJ0-`,
  LS = `l98CR7uB-F8-`,
  RS = `F2gk6wzla9E-`,
  zS = `HgN-F5fOmGs-`,
  BS = `-Sbo-YHiWHU-`,
  VS = `N0lq2uMA5pI-`,
  HS = `zTSW4zwKftI-`,
  US = `JCza1joeTfs-`,
  WS = `GGwblaoJnso-`;
function GS(e) {
  let {
      title: t,
      link_text: n,
      url: r,
      linkType: i = `inline`,
      children: a,
      total_count: o,
      link_footer: s,
      block_footer: c,
    } = e,
    l = Sa(),
    u = l
      ? (0, J.jsx)(V, {
          contrast: `title`,
          size: `2`,
          weight: `heavy`,
          style: { letterSpacing: `0.5px` },
          children: t,
        })
      : (0, J.jsx)(V, {
          contrast: `body`,
          size: `2`,
          weight: `regular`,
          children: t,
        }),
    d = i == `inline` ? VS : BS;
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(YS, { title: t, link_text: n ?? qS(o), url: r }),
      (0, J.jsx)(`div`, {
        className: `noOpinionatedGlobalStyles`,
        children: (0, J.jsxs)(R, {
          direction: `column`,
          gap: `2`,
          className: NS,
          children: [
            (0, J.jsx)(B, {
              className: D(d, FS),
              "flow-children": `column`,
              focusClassName: zS,
              focusable: !0,
              href: r,
              "aria-label": qS(o),
              children: (0, J.jsxs)(R, {
                direction: `column`,
                gap: l ? `1` : `2`,
                children: [
                  u,
                  (0, J.jsxs)(st, {
                    autoFlow: `column`,
                    autoColumns: `1fr`,
                    gap: `2`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    className: PS,
                    children: [a, (0, J.jsx)(JS, { total_count: o })],
                  }),
                  n &&
                    (0, J.jsx)(`div`, {
                      className: `LKFqGx9On18-`,
                      children: (0, J.jsx)(N, {
                        background: `blue-8`,
                        padding: `2`,
                        radius: `sm`,
                        children: (0, J.jsx)(V, {
                          size: `2`,
                          contrast: `title`,
                          children: n,
                        }),
                      }),
                    }),
                  s,
                ],
              }),
            }),
            c,
          ],
        }),
      }),
    ],
  });
}
function KS(e) {
  return e == null
    ? Z.Localize(`#ShopLink_ViewAll_NoCount_Narrow`)
    : e >= 1e3
      ? Z.Localize(`#ShopLink_ViewAll_NarrowThousands`, (e / 1e3).toFixed())
      : Z.Localize(`#ShopLink_ViewAll_NarrowUnderThousand`, e);
}
function qS(e) {
  return e == null
    ? Z.Localize(`#ShopLink_ViewAll_NoCount`)
    : e >= 1e3
      ? Z.Localize(`#ShopLink_ViewAll_WideThousands`, (e / 1e3).toFixed())
      : Z.Localize(`#ShopLink_ViewAll_WideUnderThousand`, e);
}
function JS(e) {
  let { total_count: t } = e;
  return (0, J.jsx)(st, {
    className: IS,
    height: `100%`,
    background: `greyneutral-5`,
    children: (0, J.jsxs)(N, {
      alignSelf: `center`,
      textAlign: `center`,
      justifySelf: `center`,
      children: [
        (0, J.jsx)(V, {
          contrast: `description`,
          className: RS,
          children: qS(t),
        }),
        (0, J.jsx)(V, {
          contrast: `description`,
          className: LS,
          children: KS(t),
        }),
      ],
    }),
  });
}
function YS(e) {
  let { title: t, link_text: n, url: r } = e;
  return (0, J.jsx)(`a`, {
    href: r,
    className: HS,
    children: (0, J.jsxs)(R, {
      direction: `row`,
      background: `blue-3`,
      padding: `2`,
      align: `center`,
      children: [
        (0, J.jsxs)(V, {
          contrast: `subtitle`,
          className: US,
          children: [t, ` - `, n],
        }),
        (0, J.jsx)(V, {
          contrast: `subtitle`,
          className: WS,
          children: (0, J.jsx)(Sr, { direction: `right` }),
        }),
      ],
    }),
  });
}
function XS(e, t) {
  let n = t.community_item_data;
  switch (t.community_item_class) {
    case 3:
    case 13:
      return `${w.COMMUNITY_CDN_URL}economy/profilebackground/items/${e}/${n?.item_image_large}?size=320x200`;
    case 17:
      return Ga(e, n?.item_image_small ?? ``);
    default:
      return Ga(e, n?.item_image_large ?? ``);
  }
}
function ZS(e) {
  let { appid: t, items: n, total_count: r, shop_url: i } = e;
  return (
    q.use(Z.Ready()),
    n?.length
      ? (0, J.jsx)(GS, {
          title: Z.Localize(`#AppPage_PointsShop_Header`),
          url: i,
          total_count: r,
          children: n.map((e) =>
            (0, J.jsx)(QS, { appid: t, item: e }, e.defid),
          ),
        })
      : null
  );
}
function QS(e) {
  let { appid: t, item: n } = e,
    r =
      n.community_item_data?.item_title ??
      Z.Localize(`#AppPage_PointsShop_ItemAlt`),
    i = XS(t, n);
  return (0, J.jsx)(
    N,
    {
      alignSelf: `center`,
      children: (0, J.jsx)(Ea, {
        className: D(MS, n.community_item_class == 3 && `oMeBrP-Ubuw-`),
        src: i,
        alt: r,
      }),
    },
    n.defid,
  );
}
var $S = `KaMnQO1zZG0-`,
  eC = `_57I5mL0-qio-`,
  tC = `MyXg4X6BTI8-`,
  nC = 256;
function rC(e) {
  let t = `${w.COMMUNITY_CDN_URL}economy/image/${e}/${nC}fx${nC}f`;
  return { src: t, srcSet: `${t} 1x, ${t}dpx2x 2x` };
}
function iC(e) {
  let { items: t, shop_url: n } = e;
  return (
    q.use(Z.Ready()),
    t?.length
      ? (0, J.jsx)(GS, {
          title: Z.Localize(`#AppPage_ItemShop_Header`),
          link_text: Z.Localize(`#AppPage_ItemShop_ShopAll`),
          url: n,
          linkType: `overlay`,
          children: t.map((e) =>
            (0, J.jsxs)(
              N,
              {
                className: $S,
                textAlign: `center`,
                children: [
                  (0, J.jsx)(Ea, {
                    className: eC,
                    ...rC(e.icon_url),
                    alt: e.name,
                  }),
                  (0, J.jsx)(V, {
                    size: `2`,
                    weight: `heavy`,
                    className: tC,
                    children: e.price,
                  }),
                ],
              },
              e.itemdefid,
            ),
          ),
        })
      : null
  );
}
var aC = `steamQueryPersist`,
  oC = q.createContext(void 0);
oC.Provider;
function sC(e) {
  let { area: t, maxAgeSeconds: n, meta: r, ...i } = e,
    a = q.useContext(oC),
    o = q.useMemo(() => cC(r, t, n), [r, t, n]);
  return d({ ...i, meta: o, persister: a?.GetPersister(t) });
}
function cC(e, t, n) {
  return { ...e, [aC]: { area: t, maxAgeSeconds: n } };
}
function lC(e, ...t) {
  return [`achievements`, e, ...t];
}
var uC = (e) => lC(e, `schema_v2`);
async function dC(e, t, n, r) {
  return (await r?.(t)) ?? fC(e, t, n);
}
async function fC(e, t, n) {
  let r = await ca.GetGameAchievements(e, { appid: t, language: n });
  if (r.GetEResult() === 42)
    return {
      appid: t,
      language: n,
      groups: [],
      schema_hash: 0,
      schema_version: 0,
    };
  if (gC(r)) throw new hC();
  if (r.GetEResult() !== 1)
    throw (
      (console.error(`Received error from GetGameAchievements`, r.GetEResult()),
      Error(`Error from GetGameAchievements: ${r.GetEResult()}`))
    );
  let i = {};
  return (
    (i[0] = {
      id: 0,
      archived: !1,
      developeronly: !1,
      ispublic: !0,
      dlcappid: 0,
      order: -1,
      achievements: [],
    }),
    r.Body().groups().toString(),
    r
      .Body()
      .groups()
      .forEach((e) => {
        let t = e.groupid();
        i[t] = {
          id: t,
          name: e.localized_name(),
          archived: e.archived() ?? !1,
          ispublic: e.ispublic() ?? !0,
          developeronly: e.developeronly() ?? !1,
          dlcappid: e.dlcappid() ?? 0,
          order: e.order() ?? 0,
          achievements: [],
        };
      }),
    r
      .Body()
      .toObject()
      ?.achievements?.forEach((e) => {
        let t = e.groupid ?? 0;
        i[t].achievements.push({
          internal_key: e.internal_key ?? 0,
          api_name: e.internal_name ?? ``,
          name: e.localized_name,
          description: e.localized_desc,
          hidden: e.hidden ?? !1,
          archived: e.archived ?? !1,
          icon_achieved: e.icon || void 0,
          icon_unachieved: e.icon_gray || void 0,
          groupid: e.groupid ?? 0,
          min_progress: e.min_progress_int ?? e.min_progress_float,
          max_progress: e.max_progress_int ?? e.max_progress_float,
        });
      }),
    {
      appid: t,
      language: n,
      groups: Object.values(i)
        .filter((e) => e.achievements.length > 0)
        .sort((e, t) => e.order - t.order),
      schema_hash: r.Body()?.schema_hash() ?? 0,
      schema_version: r.Body()?.schema_version() ?? 0,
    }
  );
}
var pC = (e) => lC(e, `globalpercentages`);
async function mC(e, t) {
  let n = await ca.GetGlobalAchievementPercentages(e, { appid: t });
  if (n.GetEResult() === 42) return { percentages: {} };
  if (gC(n)) throw new hC();
  if (n.GetEResult() !== 1)
    throw (
      (console.error(
        `Received error from GetGlobalAchievementPercentages`,
        n.GetEResult(),
      ),
      Error(`Error from GetGlobalAchievementPercentages: ${n.GetEResult()}`))
    );
  return {
    percentages: n
      .Body()
      .achievements()
      .reduce((e, t) => {
        let n = t.internal_key();
        return n === void 0 || (e[n] = t.player_percent_unlocked() ?? 0.1), e;
      }, {}),
  };
}
var hC = class extends Error {
  constructor() {
    super(`Achievements request: server unreachable`);
  }
};
function gC(e) {
  let t = e.Hdr().transport_error();
  return t === 2 || t === 3 || e.GetEResult() === 3;
}
var _C = (0, q.createContext)({});
function vC() {
  return (0, q.useContext)(_C);
}
function yC(e) {
  return e?.bNoRetryOnError
    ? {
        retry: !1,
        retryOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }
    : {};
}
function bC(e, t) {
  return !(t instanceof hC) && e < 3;
}
function xC(e, t) {
  return `${w.BASE_URL_SHARED_CDN}community_assets/images/apps/${e}/${t}`;
}
function SC(e, t, n) {
  return {
    ...t,
    icon_achieved: t.icon_achieved ? n(e, t.icon_achieved) : void 0,
    icon_unachieved: t.icon_unachieved ? n(e, t.icon_unachieved) : void 0,
  };
}
function CC(e, t) {
  return {
    ...e,
    groups: e.groups.map((n) => ({
      ...n,
      name: n.id === 0 ? Ua.Localize(`#Achievements_Set_BaseGame`) : n.name,
      achievements: n.achievements.map((n) => SC(e.appid, n, t)),
    })),
  };
}
function wC(e, t, n) {
  return {
    queryKey: uC(t),
    queryFn: () => dC(e, t, w.LANGUAGE, n),
    staleTime: 864e5,
    retry: bC,
    area: `achievements`,
  };
}
function TC(e, t) {
  let n = pi(),
    { fnGetAchievementIconURL: r = xC, fnFetchLocalGameAchievements: i } = vC(),
    a = (0, q.useCallback)((e) => CC(e, r), [r]);
  return sC({ ...wC(n, e, i), select: a, ...yC(t) });
}
function EC(e, t) {
  return {
    queryKey: pC(t),
    queryFn: async () => mC(e, t),
    staleTime: 864e5,
    retry: bC,
    area: `achievements`,
  };
}
function DC(e, t) {
  return sC({ ...EC(pi(), e), ...yC(t) });
}
function OC(e, t) {
  let { data: n } = TC(e);
  if (!n) return;
  let r = new Set(),
    i = 0,
    a = [];
  for (let e of n.groups) {
    let n = e.achievements.filter((e) => !e.archived);
    if (n && n?.length && !e.archived) {
      if (t) {
        if (e.dlcappid != t) continue;
      } else if (e.dlcappid) {
        r.add(e.dlcappid);
        continue;
      }
      a.push(...n), i++;
    }
  }
  if (a?.length) return { achievements: a, nDLCCount: r.size, nGroupCount: i };
}
function kC(e) {
  let { appid: t, dlcappid: n, iconCount: r = 4 } = e;
  q.use(Z.Ready());
  let i = OC(t, n),
    a = DC(t),
    o = Sa();
  if (!i || a.isPending) return null;
  let { achievements: s, nDLCCount: c, nGroupCount: l } = i,
    u = s
      .sort((e, t) => {
        if (!e.hidden && t.hidden) return -1;
        if (e.hidden && !t.hidden) return 1;
        let n = a?.data?.percentages?.[e.internal_key] ?? 0;
        return (a?.data?.percentages?.[t.internal_key] ?? 0) - n;
      })
      .slice(0, r),
    d = Array(r - u.length).fill(void 0),
    f = Ha({ appid: t, dlc: n }),
    p = Ha({ appid: t, dlc: `all` }),
    m =
      c == 0 || !o
        ? null
        : (0, J.jsx)(V, {
            color: `plum-8`,
            size: `2`,
            children: Z.Localize(`#AppPage_Achievements_DLCCount`, c),
          }),
    h =
      (l <= 1 && c == 0) || o
        ? null
        : (0, J.jsxs)(J.Fragment, {
            children: [
              l > 1 &&
                (0, J.jsx)(b, {
                  size: `2`,
                  contrast: `title`,
                  href: f,
                  children: Z.Localize(`#AppPage_Achievements_GroupCount`, l),
                }),
              c > 0 &&
                (0, J.jsx)(b, {
                  size: `2`,
                  color: `plum-8`,
                  href: p,
                  children: Z.Localize(`#AppPage_Achievements_DLCCount`, c),
                }),
            ],
          }),
    g =
      l <= 1 || !o ? void 0 : Z.Localize(`#AppPage_Achievements_GroupCount`, l);
  return (0, J.jsxs)(GS, {
    title: Z.Localize(
      o
        ? `#AppPage_Achievements_Header`
        : `#AppPage_Achievements_Header_Desktop`,
    ),
    link_text: g,
    total_count: s?.length,
    url: f,
    link_footer: m,
    block_footer: h,
    children: [
      d.map((e, t) => (0, J.jsx)(N, {}, t)),
      u.map((e, t) =>
        (0, J.jsx)(
          Wa,
          { achievement: e, unlocked: !e.hidden, size: `fill` },
          e.api_name,
        ),
      ),
    ],
  });
}
var AC = `UYNL6RrUB-0-`,
  jC = `t2HZBSscf90-`,
  MC = `Z913WZ0e5xo-`,
  NC = `JEt-Ty7qP4w-`,
  PC = 30,
  FC = [
    {
      eType: 2,
      strPath: `quickref`,
      strLabel: `#AppPage_LinksAndInfo_QuickRef`,
    },
    { eType: 1, strPath: `manual`, strLabel: `#AppPage_LinksAndInfo_Manual` },
    {
      eType: 8,
      strPath: `warranty`,
      strLabel: `#AppPage_LinksAndInfo_Warranty`,
    },
  ];
function IC(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t }),
    { data: r } = S({ appid: t }),
    { data: i } = Xn({ appid: t }),
    { data: a } = gn({ appid: t }),
    o = me(t);
  if ((q.use(Z.Ready()), !n)) return null;
  let s = w.EREALM === Br.k_ESteamRealmChina;
  return (0, J.jsxs)(si, {
    className: AC,
    children: [
      (0, J.jsx)(wg, { text: Z.Localize(`#AppPage_LinksAndInfo_Header`) }),
      (0, J.jsx)(VC, {
        url: `${w.COMMUNITY_BASE_URL}app/${t}`,
        label: `#AppPage_LinksAndInfo_CommunityHub`,
      }),
      (!s || zC(n)) &&
        (0, J.jsx)(LC, {
          children: (0, J.jsx)(BC, {
            appid: t,
            steamworksAppID: o,
            app: n,
            bSteamChina: s,
            links: r?.links_and_info,
            rgSocialLinks: i,
            bRequiresShipping: !!a?.purchase_options?.some(
              (e) => e.requires_shipping,
            ),
          }),
        }),
    ],
  });
}
function LC(e) {
  let [t, n] = q.useState(!1),
    r = q.useCallback(() => n((e) => !e), []);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsxs)(R, {
        align: `center`,
        cursor: `pointer`,
        background: `sky-6 50%`,
        radius: `sm`,
        role: `button`,
        onClick: r,
        "aria-expanded": t,
        children: [
          (0, J.jsx)(N, {
            flexGrow: `1`,
            paddingX: `3`,
            paddingY: `2`,
            children: (0, J.jsx)(V, {
              size: `2`,
              color: `blue-8`,
              children: Z.Localize(`#AppPage_LinksAndInfo_MoreLinks`),
            }),
          }),
          (0, J.jsx)(R, {
            paddingX: `2`,
            children: (0, J.jsx)(RC, { bExpanded: t }),
          }),
        ],
      }),
      t &&
        (0, J.jsx)(`div`, { className: `AMP-phNYw6A-`, children: e.children }),
    ],
  });
}
function RC(e) {
  let { bExpanded: t } = e;
  return (0, J.jsx)(`svg`, {
    width: `16`,
    height: `16`,
    viewBox: `0 0 18 18`,
    fill: `#e5e5e5`,
    "aria-hidden": `true`,
    children: t
      ? (0, J.jsx)(`path`, {
          d: `M9.7,9.7h4.7C14.7,9.7,15,9.4,15,9s-0.3-0.7-0.7-0.7H9.7H8.3H3.7C3.3,8.3,3,8.6,3,9s0.3,0.7,0.7,0.7h4.7H9.7z`,
        })
      : (0, J.jsx)(`path`, {
          d: `M9.7,3.7C9.7,3.3,9.4,3,9,3S8.3,3.3,8.3,3.7v4.7H3.7C3.3,8.3,3,8.6,3,9s0.3,0.7,0.7,0.7h4.7v4.7C8.3,14.7,8.6,15,9,15s0.7-0.3,0.7-0.7V9.7h4.7C14.7,9.7,15,9.4,15,9s-0.3-0.7-0.7-0.7H9.7V3.7z`,
        }),
  });
}
function zC(e) {
  return e.type != 2 && e.type != 1 && e.type != 3;
}
function BC(e) {
  let {
      appid: t,
      steamworksAppID: n,
      app: r,
      bSteamChina: i,
      links: a,
      rgSocialLinks: o,
      bRequiresShipping: s,
    } = e,
    c = !!r.categories?.feature_categoryids?.includes(PC);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      !i &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            s &&
              (0, J.jsx)(VC, {
                url: `${w.STORE_BASE_URL}hardware_order_terms`,
                label: `#AppPage_LinksAndInfo_HardwareOrderTerms`,
                bStoreNav: !0,
              }),
            (0, J.jsx)(UC, {
              url: a?.website,
              label: Z.Localize(`#AppPage_LinksAndInfo_Website`),
            }),
            o?.map((e) =>
              (0, J.jsx)(
                WC,
                { social: e },
                `${e.link_type}_${e.url ?? e.text}`,
              ),
            ),
            FC.filter((e) => a?.available_documents?.includes(e.eType)).map(
              (e) =>
                (0, J.jsx)(
                  HC,
                  {
                    url: `${w.STORE_BASE_URL}${e.strPath}/${t}`,
                    label: e.strLabel,
                  },
                  e.eType,
                ),
            ),
            (0, J.jsx)(UC, {
              url: a?.online_manual_url,
              label: Z.Localize(`#AppPage_LinksAndInfo_Manual`),
            }),
            (0, J.jsx)(UC, {
              url: a?.health_warning_url,
              label: Z.Localize(`#AppPage_LinksAndInfo_HealthWarning`),
            }),
            (0, J.jsx)(UC, {
              url: a?.privacy_policy_url,
              label: Z.Localize(`#AppPage_LinksAndInfo_PrivacyPolicy`),
            }),
            (0, J.jsx)(UC, {
              url: a?.stats_url,
              label: Z.Localize(`#AppPage_LinksAndInfo_Stats`),
            }),
          ],
        }),
      zC(r) &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(VC, {
              url: `${w.STORE_BASE_URL}newshub/?appids=${t}`,
              label: `#AppPage_LinksAndInfo_UpdateHistory`,
              bStoreNav: !0,
            }),
            (0, J.jsx)(VC, {
              url: `${w.STORE_BASE_URL}newshub/app/${t}`,
              label: `#AppPage_LinksAndInfo_News`,
              bStoreNav: !0,
            }),
          ],
        }),
      !i &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            c &&
              (0, J.jsx)(VC, {
                url: `${w.COMMUNITY_BASE_URL}app/${n}/workshop/`,
                label: `#AppPage_LinksAndInfo_Workshop`,
              }),
            r.name &&
              (0, J.jsx)(VC, {
                url: `${w.COMMUNITY_BASE_URL}actions/Search?T=ClanAccount&K=${encodeURIComponent(r.name)}`,
                label: `#AppPage_LinksAndInfo_CommunityGroups`,
              }),
          ],
        }),
    ],
  });
}
function VC(e) {
  let { url: t, label: n, bStoreNav: r } = e,
    i = fr(r ? t : void 0);
  return (0, J.jsx)(B, {
    className: jC,
    href: i || t,
    children: (0, J.jsx)(V, { color: `blue-8`, children: Z.Localize(n) }),
  });
}
function HC(e) {
  let { url: t, label: n } = e;
  return (0, J.jsxs)(B, {
    className: jC,
    href: w.IN_CLIENT ? `steam://openurl_external/${t}` : t,
    target: w.IN_CLIENT ? void 0 : `_blank`,
    children: [
      (0, J.jsx)(V, { color: `blue-8`, children: Z.Localize(n) }),
      (0, J.jsx)(GC, {}),
    ],
  });
}
function UC(e) {
  let { url: t, label: n, children: r } = e,
    i = Mb(t);
  return i
    ? (0, J.jsxs)(B, {
        className: jC,
        href: i,
        target: w.IN_CLIENT ? void 0 : `_blank`,
        rel: `noopener noreferrer`,
        children: [
          r,
          (0, J.jsx)(V, { color: `blue-8`, children: n }),
          (0, J.jsx)(GC, {}),
        ],
      })
    : null;
}
function WC(e) {
  let { social: t } = e,
    n = t.link_type ?? 0,
    r = Gt(n);
  if (!r) return null;
  let i = O(`#StoreAdmin_SocialMedia_Type_${r}`),
    a = (0, J.jsx)(Wt, { linkType: n, className: MC });
  return t.url
    ? (0, J.jsx)(UC, { url: t.url, label: i, children: a })
    : (0, J.jsxs)(`div`, {
        className: jC,
        children: [
          a,
          (0, J.jsx)(V, { contrast: `body`, children: `${i} ${t.text ?? ``}` }),
        ],
      });
}
function GC() {
  return (0, J.jsx)(`span`, { className: NC, children: (0, J.jsx)(ya, {}) });
}
var KC = `Wq-uCg3I5pw-`,
  qC = `arvEElVfZ-k-`;
function JC(e) {
  let { appid: t } = e,
    { data: n } = I({ appid: t }),
    { data: r } = Cn({ appid: t }),
    i = r?.franchises?.find(
      (e) => !!e.creator_clan_account_id,
    )?.creator_clan_account_id,
    a = n?.type == 4 || n?.type == 11,
    o = i && !a ? { creatorid: i } : void 0,
    { data: s } = I(o),
    { data: c } = U(o),
    l = s?.name,
    u = fr(
      i && l ? YC(i, l, s?.store_url_slug) : void 0,
      `franchise-home-link`,
    );
  if (!l || !u) return null;
  q.use(Z.Ready());
  let d = c?.creator_home_background,
    f = d
      ? `${w.CLAN_CDN_ASSET_URL}images/${i}/${encodeURIComponent(d)}`
      : void 0,
    p = l.toLowerCase().includes(`franchise`);
  return (0, J.jsxs)(B, {
    className: KC,
    href: u,
    children: [
      f &&
        (0, J.jsx)(`div`, {
          className: `x22x1GJpXwA-`,
          style: { backgroundImage: `url( "${f}" )` },
        }),
      (0, J.jsx)(`div`, {
        className: qC,
        children: Z.Localize(
          p
            ? `#AppPage_Franchise_SeeAll_NamedFranchise`
            : `#AppPage_Franchise_SeeAll`,
          l,
        ),
      }),
    ],
  });
}
function YC(e, t, n) {
  return w.EREALM === Br.k_ESteamRealmChina
    ? `${w.STORE_BASE_URL}search/?franchise=${encodeURIComponent(t)}`
    : n
      ? `${w.STORE_BASE_URL}franchise/${encodeURIComponent(n)}`
      : `${w.STORE_BASE_URL}curator/${e}`;
}
var XC = q.lazy(() =>
    E(
      () => import(`./seasonpassdisplay.js`),
      __vite__mapDeps([
        43, 1, 2, 3, 4, 5, 6, 10, 44, 45, 46, 47, 48, 49, 50, 51, 11, 12, 13,
        52, 53, 18, 19, 21, 54, 55, 56, 57, 58, 59, 20, 60, 61, 62, 25, 16, 63,
        64, 65, 7, 8, 9, 14, 15, 17, 22, 23, 24, 26, 27, 28, 29, 30, 66, 67, 68,
        69, 70, 71, 72, 73, 74, 75, 76, 33, 34, 77, 78, 79, 80, 81, 82, 83, 84,
        85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
        102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 36, 114,
        115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 35, 37,
        38, 128, 129, 130, 131, 132, 133, 134, 135, 136, 41, 137, 138, 139, 140,
        141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154,
        155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168,
        169,
      ]),
      import.meta.url,
    ),
  ),
  ZC = q.lazy(async () => ({
    default: (
      await E(
        async () => {
          let { SeasonPassDisplayFromStoreBrowse: e } = await import(
            `./seasonpassdisplay.js`
          );
          return { SeasonPassDisplayFromStoreBrowse: e };
        },
        __vite__mapDeps([
          43, 1, 2, 3, 4, 5, 6, 10, 44, 45, 46, 47, 48, 49, 50, 51, 11, 12, 13,
          52, 53, 18, 19, 21, 54, 55, 56, 57, 58, 59, 20, 60, 61, 62, 25, 16,
          63, 64, 65, 7, 8, 9, 14, 15, 17, 22, 23, 24, 26, 27, 28, 29, 30, 66,
          67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 33, 34, 77, 78, 79, 80, 81,
          82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
          99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
          113, 36, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125,
          126, 127, 35, 37, 38, 128, 129, 130, 131, 132, 133, 134, 135, 136, 41,
          137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
          151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164,
          165, 166, 167, 168, 169,
        ]),
        import.meta.url,
      )
    ).SeasonPassDisplayFromStoreBrowse,
  })),
  QC = q.lazy(async () => ({
    default: (
      await E(
        async () => {
          let { SteamAwardStorePageVoteWidget: e } = await import(
            `./display.js`
          ).then((e) => e.t);
          return { SteamAwardStorePageVoteWidget: e };
        },
        __vite__mapDeps([
          111, 1, 2, 18, 4, 5, 19, 22, 10, 71, 69, 60, 23, 24, 61, 102, 112,
          113, 36, 49, 79, 114, 59, 20, 115, 116, 8, 3, 6, 7, 9, 11, 12, 13, 14,
          15, 16, 17, 21, 25, 26, 27, 28, 29, 30, 50, 51, 52, 76, 33, 34, 77,
          78, 80, 81, 82, 117, 95, 92, 93, 94, 96, 101, 83, 84, 85, 86, 87, 90,
          63, 91, 118, 119, 99, 100, 120, 110, 121, 122, 123, 124, 66, 125, 65,
          67, 68, 46, 47, 70, 72, 53, 54, 55, 73, 74, 75, 88, 89, 97, 98, 103,
          104, 105, 106, 107, 57, 108, 109, 58, 62, 140, 165, 166, 167, 144,
          145, 168, 126, 127, 35, 37, 38, 128, 129, 130, 131, 132, 133, 134,
          135, 136, 41, 137, 138, 139, 141, 142, 143, 146, 147, 148, 149, 150,
          151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 64, 161, 162, 163,
          164,
        ]),
        import.meta.url,
      )
    ).SteamAwardStorePageVoteWidget,
  })),
  $C = q.lazy(() =>
    E(
      () => import(`./storesalecrosspromo.js`),
      __vite__mapDeps([
        170, 1, 2, 49, 4, 5, 116, 8, 114, 79, 59, 20, 60, 61, 115, 3, 6, 7, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 50, 51, 52, 76, 33, 34, 77, 78, 80, 81, 82, 117, 95, 92, 93, 94,
        96, 101, 69, 83, 84, 85, 86, 87, 90, 63, 91, 118, 119, 99, 100, 120,
        110, 121, 122, 123, 124, 171, 172, 173,
      ]),
      import.meta.url,
    ),
  ),
  ew = q.lazy(() =>
    E(
      () => import(`./discoveryqueueappwidget.js`),
      __vite__mapDeps([174, 1, 2, 17, 4, 5, 138, 20, 139, 175]),
      import.meta.url,
    ),
  ),
  tw = q.lazy(() =>
    E(
      () => import(`./broadcast_embeddable2.js`),
      __vite__mapDeps([
        176, 1, 2, 49, 4, 5, 177, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 50, 51, 52, 76, 33,
        34, 77, 78, 79, 80, 81, 82, 54, 88, 53, 55, 89, 84, 99, 101, 105, 106,
        107, 57, 178, 179, 180, 181, 137, 144, 58, 59, 60, 61, 62, 63, 145, 143,
        93, 146, 70, 71, 182, 183, 184, 185, 159, 186, 187, 188, 189, 190,
      ]),
      import.meta.url,
    ),
  ),
  nw = q.lazy(async () => ({
    default: (
      await E(
        async () => {
          let { AccessibilityFeatureDisplay: e } = await import(
            `./accessibilityfeaturedisplay.js`
          ).then((e) => e.r);
          return { AccessibilityFeatureDisplay: e };
        },
        __vite__mapDeps([191, 1, 2, 4, 5, 192]),
        import.meta.url,
      )
    ).AccessibilityFeatureDisplay,
  }));
function rw(e) {
  let { appid: t } = e,
    n = Cr(`store_page_asset_url`, `application_config`);
  return (0, J.jsx)(it, {
    store_page_asset_url: n,
    children: (0, J.jsx)(aw, {
      children: (0, J.jsx)(iw, {
        children: (0, J.jsxs)(ei, {
          eAdultOnlyMediaBehavior: `allowed`,
          children: [
            (0, J.jsx)(ir, {
              config: {
                "events-row": () =>
                  (0, J.jsx)(ft, { children: (0, J.jsx)(po, { appid: t }) }),
                "deck-topplayed-banner": (e) => (0, J.jsx)(Qs, { ...e }),
                "steamawardsvote-embed": () => (0, J.jsx)(QC, { appID: t }),
                "demo-and-quick-pitch": () =>
                  (0, J.jsx)(ft, { children: (0, J.jsx)(xo, { appID: t }) }),
                "deck-verified-results": (e) =>
                  (0, J.jsx)(hu, {
                    appID: t,
                    results: In(`hardwarecompatibility`, `application_config`),
                    appName: In(`appname`, `application_config`),
                    ...e,
                  }),
                "gamehighlight-trailer": (e) => (0, J.jsx)(ts, { ...e }),
                "gamehighlight-gamepadcarousel": () =>
                  (0, J.jsx)(Rc, { appid: t }),
                "gamehighlight-desktopcarousel": (e) =>
                  (0, J.jsx)(ql, { ...e }),
                "discovery-queue-app-widget": () =>
                  (0, J.jsx)(ew, { appID: t }),
                "game-notice-controller-required": () =>
                  (0, J.jsx)(Ao, {
                    appid: t,
                    type: ko.EPurchaseNoticeType_ControllerRequired,
                  }),
                "game-notice-vr-required": () =>
                  (0, J.jsx)(Ao, { type: ko.EPurchaseNoticeType_VRRequired }),
                "game-notice-vr-supported": () =>
                  (0, J.jsx)(Ao, { type: ko.EPurchaseNoticeType_VRSupported }),
                "season-pass-display": (e) => (0, J.jsx)(XC, { ...e }),
                "season-pass-display-gamepad": () =>
                  (0, J.jsx)(ZC, { appid: t }),
                "storeitems-carousel": (e) =>
                  (0, J.jsx)(li, {
                    feature: `recommended`,
                    children: (0, J.jsx)(Ia, { ...e }),
                  }),
                "store-sale-crosspromo": (e) =>
                  (0, J.jsx)($C, { ...e, item: { appid: t } }),
                "storeitems-carousel-dlc": (e) =>
                  (0, J.jsx)(li, {
                    feature: `dlc`,
                    children: (0, J.jsx)(Ia, { ...e }),
                  }),
                "creatorhome-carousel": (e) =>
                  (0, J.jsx)(li, {
                    feature: `creator`,
                    children: (0, J.jsx)(Zo, { ...e }),
                  }),
                parentappwidget: (e) =>
                  (0, J.jsx)(li, {
                    feature: e.feature,
                    children: (0, J.jsx)(sc, { appid: e.appid }),
                  }),
                appreviews: (e) => (0, J.jsx)(v, { ...e }),
                "wishlist-item-categories": (e) => (0, J.jsx)(cd, { ...e }),
                "purchase-options": (e) => (0, J.jsx)(hp, { ...e }),
                "purchase-options-dlc": (e) =>
                  (0, J.jsx)(li, {
                    feature: `game-purchase-dlc`,
                    children: (0, J.jsx)(Jp, { ...e, appid: t }),
                  }),
                "purchase-options-dependent-dlc": (e) =>
                  (0, J.jsx)(li, {
                    feature: `dlc-dependency`,
                    children: (0, J.jsx)(am, { ...e }),
                  }),
                "summary-bar-top": (e) => (0, J.jsx)(hm, { ...e }),
                "features-section": (e) => (0, J.jsx)(Tg, { ...e, appid: t }),
                "about-this-game": () => (0, J.jsx)(Pm, { appid: t }),
                "page-sections": () => (0, J.jsx)($m, { appid: t }),
                "legal-notice": () => (0, J.jsx)(nh, { appid: t }),
                "press-reviews": () => (0, J.jsx)(rh, { appid: t }),
                "ai-disclosure": () => (0, J.jsx)(oh, { appid: t }),
                "mature-content-description": () =>
                  (0, J.jsx)(lh, { appid: t }),
                "cast-and-crew": () =>
                  (0, J.jsx)(li, {
                    feature: `cast-and-crew`,
                    children: (0, J.jsx)(dh, { appid: t }),
                  }),
                "series-episodes": () => (0, J.jsx)(Bh, { appid: t }),
                "music-album-details": () => (0, J.jsx)(Kg, { appid: t }),
                "interest-buttons": (e) => (0, J.jsx)(n_, { appid: t }),
                "add-to-wishlist": (e) =>
                  (0, J.jsx)(jf, { ...e, color: `storegreen` }),
                "recommendation-reasons": (e) =>
                  (0, J.jsx)(By, { ...e, appid: t }),
                "friend-ownership": (e) => (0, J.jsx)(yb, { ...e, appid: t }),
                "referring-curator-review": (e) => (0, J.jsx)(Nb, { ...e }),
                "game-rating-block": (e) =>
                  (0, J.jsx)(Ta, { ...e, id: { appid: t } }),
                achievements: (e) =>
                  (0, J.jsx)(kC, {
                    appid: e.parent_appid ?? t,
                    dlcappid: e.dlcappid,
                  }),
                "early-access": (e) => (0, J.jsx)(qm, { ...e, appid: t }),
                "ownership-banner": (e) =>
                  (0, J.jsx)(li, {
                    feature: `owned-game`,
                    children: (0, J.jsx)(Eh, { ...e, appid: t }),
                  }),
                "store-awards": () => (0, J.jsx)(jS, { appid: t }),
                "points-shop-items": (e) => (0, J.jsx)(ZS, { ...e }),
                "item-shop-items": (e) => (0, J.jsx)(iC, { ...e }),
                "links-and-info": () => (0, J.jsx)(IC, { appid: t }),
                "franchise-notice": () => (0, J.jsx)(JC, { appid: t }),
                "write-review": (e) =>
                  (0, J.jsx)(li, {
                    feature: `owned-game`,
                    children: (0, J.jsx)(lS, { ...e, appid: t }),
                  }),
              },
            }),
            (0, J.jsx)(ir, {
              omitFocusNavTreeBridge: !0,
              config: {
                "review-award": () => (0, J.jsx)(re, {}),
                "broadcast-embed": (t) =>
                  (0, J.jsx)(tw, { ...e, appid: t.appid }),
                "store-sidebar-accessibility-info": (e) =>
                  (0, J.jsx)(nw, { features: e }),
                "store-sidebar-controller-support-info": (e) =>
                  (0, J.jsx)(gs, { ...e }),
              },
            }),
          ],
        }),
      }),
    }),
  });
}
function iw(e) {
  let { children: t } = e,
    [n, r] = q.useState(!1);
  return n
    ? t
    : (0, J.jsx)(ir, {
        omitFocusNavTreeBridge: !0,
        config: {
          "apppage-gameinterest-cache": (e) =>
            (0, J.jsx)(Mc, { ...e, markReady: () => r(!0) }),
        },
      });
}
function aw(e) {
  let { children: t } = e,
    [n, r] = q.useState(!1);
  return n
    ? t
    : (0, J.jsx)(ir, {
        omitFocusNavTreeBridge: !0,
        config: {
          "apppage-store-browse-cache": (e) =>
            (0, J.jsx)(Ka, { ...e, markReady: () => r(!0) }),
        },
      });
}
export {
  iw as AppGameInterestCacheInit,
  aw as AppStoreBrowseCacheInit,
  rw as default,
};
