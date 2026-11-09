/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./shareeventdialogbody.js",
      "./rolldown-runtime.js",
      "./libraries.js",
      "./eventlink.js",
      "./partnerevent.js",
      "./clanimagemodels.js",
      "./main.js",
      "../../../css/applications/store/main.css",
      "./stringutils.js",
      "./eventtime.js",
      "./steammessages_storesales_pb.js",
      "./meetsteamclanid.js",
      "./storeurl.js",
      "./saletechredirectsignin.js",
      "./languagepicker.js",
      "./modals.js",
      "./throbber.js",
      "../../../css/applications/store/throbber.css",
      "./partnereventshared.module.js",
      "../../../css/applications/store/partnereventshared.css",
      "./clanimageupload.js",
      "./ajaxhooks.js",
      "./linkregionbox.js",
      "../../../css/applications/store/linkregionbox.css",
      "../../../css/applications/store/clanimageupload.css",
      "../../../css/applications/store/languagepicker.css",
      "./discussionwidget.module.js",
      "../../../css/applications/store/discussionwidget.css",
      "./sharewithfriends.js",
      "./basicbbcodeparser.js",
      "./linkfilter.js",
      "./youtubeplayer.js",
      "../../../css/applications/store/basicbbcodeparser.css",
      "./loyaltyrewarddefs.js",
      "./storelink.js",
      "../../../css/applications/store/storelink.css",
      "./saletags.js",
      "./usedataloader.client.js",
      "./claninfo.js",
      "./ostype.js",
      "../../../css/applications/store/ostype.css",
      "./microtrailerdisplay.js",
      "../../../css/applications/store/microtrailerdisplay.css",
      "./historyutils.js",
      "./personautils.js",
      "./csstransitionwrapper.js",
      "../../../css/applications/store/csstransitionwrapper.css",
      "./remotedownloadhooks.js",
      "./steammessages_clan_pb.js",
      "../../../css/applications/store/saletags.css",
      "./multisourceimage.js",
      "./image.js",
      "./usehotkeys.js",
      "../../../css/applications/store/image.css",
      "./salestoreitemutils.js",
      "./platforms.js",
      "../../../css/applications/store/platforms.css",
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
      "./partnereventutils.js",
      "./trailertitlebar.js",
      "./dashplayer.js",
      "../../../css/applications/store/trailertitlebar.css",
      "./salehilightplayerembed.js",
      "../../../css/applications/store/salehilightplayerembed.css",
      "./steammessages_loyalty_rewards_pb.js",
      "../../../css/applications/store/loyaltyrewarddefs.css",
      "./appinfostore.js",
      "./appinfo.js",
      "./playerstore.js",
      "./persona.js",
      "./playerlinkdetailsdataloader.js",
      "./emoticonbutton.js",
      "./storeitemhooks.js",
      "./alternate_icons.js",
      "../../../css/applications/store/emoticonbutton.css",
      "./reorderablelist.module.js",
      "../../../css/applications/store/reorderablelist.css",
      "./friendsstore.js",
      "./steammessages_friendslist_pb.js",
      "../../../css/applications/store/sharewithfriends.css",
      "./reddit_large.js",
      "./twitter_large.js",
      "./broadcastplayer.js",
      "./salebanner.js",
      "./creatorhomestore.js",
      "./partnereventstore.js",
      "../../../css/applications/store/salebanner.css",
      "./broadcastwatchstore.js",
      "../../../css/applications/store/broadcastplayer.css",
      "./broadcast_embeddable2.js",
      "./textfilterstore.js",
      "./storegamehover.js",
      "./steammessages_experiments_pb.js",
      "./broadcast_embeddable.js",
      "./eventdevfeaturestore.js",
      "./moment.js",
      "./partnereventslogin.js",
      "./steammessages_twofactor_pb.js",
      "./logindialog.js",
      "../../../css/applications/store/logindialog.css",
      "./giveawaystore.js",
      "../../../css/applications/store/broadcast_embeddable.css",
    ]),
) => i.map((i) => d[i]);

import { o as e, r as t } from "./rolldown-runtime.js";
import {
  At as n,
  Ct as r,
  Lt as i,
  Ot as a,
  dt as o,
  ft as s,
  jt as c,
  kt as l,
  l as u,
  lt as d,
  ot as f,
  st as p,
  tt as m,
  u as h,
} from "./libraries.js";
import { t as g } from "./clanimagemodels.js";
import { H as _, V as v } from "./storelink.js";
import { a as y, et as b, i as x, o as S } from "./saletags.js";
import { u as C } from "./claninfo.js";
import { t as w } from "./multisourceimage.js";
import { G as T, R as E } from "./partnerevent.js";
import { t as ee } from "./meetsteamclanid.js";
import { n as te, t as ne } from "./storeurl.js";
import {
  a as re,
  c as ie,
  i as ae,
  n as oe,
  r as se,
  u as ce,
} from "./eventlink.js";
import { n as le } from "./textlink.js";
import "./modals.js";
import { t as ue } from "./ajaxhooks.js";
import { t as D } from "./throbber.js";
import { n as de } from "./saletechredirectsignin.js";
import { t as fe } from "./eventtimeoverridecontext.js";
import { n as pe } from "./eventdevfeaturestore.js";
import { t as me } from "./moment-timezone.js";
import {
  b as he,
  i as ge,
  o as _e,
  x as ve,
} from "./partnereventshared.module.js";
import { i as O } from "./basicbbcodeparser.js";
import { a as ye, n as be, t as xe, u as Se } from "./simplesuccesserror.js";
import { a as Ce, i as we, n as Te, r as Ee } from "./loyaltyrewarddefs.js";
import { a as De } from "./youtubeplayer.js";
import { d as Oe } from "./eventbbcodeparser.module.js";
import { r as ke } from "./creatorhomegamelock.js";
import { c as Ae } from "./creatorhomestore.js";
import { a as je, i as Me } from "./partnereventeditorcontext.js";
import { t as Ne } from "./storegamehover.js";
import { r as Pe } from "./steammessages_quest_pb.js";
import { a as Fe, i as Ie, t as Le } from "./saleclaim.js";
import { n as Re, t as ze } from "./steammessages_experiments_pb.js";
import {
  C as Be,
  D as Ve,
  E as He,
  S as Ue,
  T as We,
  a as Ge,
  b as Ke,
  c as qe,
  g as Je,
  i as Ye,
  o as Xe,
  r as Ze,
  s as Qe,
  w as $e,
  x as et,
} from "./discussionwidget.module.js";
import { n as tt } from "./storeitemhooks.js";
import { n as nt } from "./socialmediadisplay.js";
import { t as rt } from "./salewishlistbutton.js";
import { o as it } from "./partnereventstore.js";
import {
  $n as at,
  Au as ot,
  By as st,
  Cl as k,
  Dn as ct,
  Do as lt,
  Dr as ut,
  Dy as dt,
  En as ft,
  Ex as pt,
  Gb as A,
  Gx as mt,
  Hb as j,
  Ib as ht,
  Iy as M,
  Jc as gt,
  Jy as _t,
  Kb as vt,
  Ki as yt,
  L as bt,
  Lr as xt,
  Mb as N,
  Ml as St,
  Mn as Ct,
  Ob as wt,
  On as Tt,
  Oy as Et,
  Pb as Dt,
  Pr as Ot,
  Qi as kt,
  Qn as At,
  Qs as jt,
  Rr as Mt,
  Rx as P,
  Ry as F,
  Sb as Nt,
  Sc as I,
  Sr as Pt,
  Tu as Ft,
  Ty as It,
  Uc as L,
  Uy as R,
  V as Lt,
  Vc as Rt,
  Vl as zt,
  Vn as Bt,
  Xi as Vt,
  Yb as Ht,
  Yo as Ut,
  Za as Wt,
  Zi as Gt,
  Zn as z,
  _b as Kt,
  _r as qt,
  ab as Jt,
  av as Yt,
  ax as Xt,
  ay as Zt,
  br as Qt,
  bt as $t,
  cr as en,
  dr as tn,
  dv as nn,
  gd as rn,
  is as an,
  iy as on,
  jr as sn,
  ju as cn,
  kc as B,
  kn as ln,
  kv as un,
  lS as dn,
  ls as fn,
  mS as V,
  ml as pn,
  mu as mn,
  nb as hn,
  nl as gn,
  nr as H,
  pb as _n,
  pn as U,
  qb as vn,
  qc as yn,
  qn as bn,
  qx as xn,
  qy as Sn,
  rl as Cn,
  rr as wn,
  rx as W,
  sr as Tn,
  to as En,
  tr as Dn,
  uc as On,
  vn as kn,
  wb as An,
  yb as jn,
  yc as Mn,
  yu as Nn,
  za as Pn,
  zb as Fn,
  zr as In,
} from "./main.js";
import { n as Ln, r as Rn } from "./display.js";
import { n as zn, t as Bn } from "./clanstore.js";
import { t as Vn } from "./expanderbutton.js";
import {
  c as Hn,
  d as Un,
  f as Wn,
  i as Gn,
  l as Kn,
  p as qn,
  r as Jn,
  s as Yn,
  u as Xn,
} from "./meetsteamregistrationhooks.js";
import { r as Zn, t as Qn } from "./salebanner.js";
function $n(e, t) {
  return {
    clanid: e,
    appid: t,
    can_edit: !1,
    owns_app: !1,
    event_followed: [],
    event_followed_flags: [],
    event_ignored: [],
    follows_app: !1,
    valve_admin: !1,
    support_user: !1,
    limited_user: !0,
  };
}
function er(e, t) {
  return !t || !(e.support_user || e.valve_admin)
    ? e
    : { ...e, can_edit: !0, support_user: !1, valve_admin: !1 };
}
async function tr(e, t, n) {
  let r = vt(),
    i = Ht(`partnereventpermissions`, `application_config`);
  if (nr(i)) {
    let t = i.find((t) => t.clanid == e);
    if (t) {
      let { success: e, warn_msg: n, err_msg: i, ...a } = t;
      return er(a, r);
    }
  }
  if (A.logged_in) {
    let t = M.InitFromClanID(e, j.EUNIVERSE),
      n = `${j.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
    Dt() == `partner`
      ? (n = `${j.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${e}`)
      : Dt() == `store` &&
        (n = `${j.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${e}`);
    let i = await fetch(n, { method: `GET`, credentials: `include` });
    if (i.status == 200) {
      let e = await i.json();
      if (e) {
        let { success: t, warn_msg: n, err_msg: i, ...a } = e;
        return er(a, r);
      }
    }
  }
  return $n(e, void 0);
}
function nr(e) {
  let t = e;
  return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
    ? typeof t[0].clanid == `number` && typeof t[0].appid == `number`
    : !1;
}
function rr(e) {
  let t = o(),
    n = on();
  return p(ir(e, t, n));
}
function ir(e, t, n) {
  return {
    queryKey: ar(e),
    queryFn: async () => await tr(e, t, n),
    enabled: !!e,
  };
}
function ar(e) {
  return [`useEventUserPermissions`, A.accountid, e];
}
var G = e(i()),
  K = s(),
  q = t({
    ActiveEvent: () => lr,
    ActiveEventCallOut: () => ur,
    At: () => cr,
    DateAndTime: () => or,
    DateAndTimeInline: () => sr,
    DateToolTip: () => fr,
    RightSideTitles: () => dr,
    ShortDateAndTime: () => pr,
    ShortDateRange: () => mr,
    default: () => hr,
  }),
  or = `pWmENeJ0-44-`,
  sr = `FyNXXMXFmw0-`,
  cr = `_9CQfpCiPrSo-`,
  lr = `_2XvsAfXG3pE-`,
  ur = `NXUU0ns18S4-`,
  dr = `Z-QZHH73ytw-`,
  fr = `OxCNfwcporA-`,
  pr = `wTXCXrhlyX8-`,
  mr = `AKCBA7goWOo-`,
  hr = {
    DateAndTime: or,
    DateAndTimeInline: sr,
    At: cr,
    ActiveEvent: lr,
    ActiveEventCallOut: ur,
    RightSideTitles: dr,
    DateToolTip: fr,
    ShortDateAndTime: pr,
    ShortDateRange: mr,
  },
  J = e(me());
function gr(e, t) {
  let n = t ?? J.default.tz.guess(),
    r = J.default.unix(e).tz(n),
    i = st();
  return i && r.locale(i), r.format(`LT`);
}
function _r(e, t, n) {
  let r = n ?? J.default.tz.guess(),
    i = J.default.unix(e).tz(r),
    a = st();
  return (
    a && i.locale(a),
    (0, K.jsxs)(G.Fragment, {
      children: [
        i.format(`LT`),
        t
          ? (0, K.jsx)(xt, {
              toolTipContent: i.format(`Z`) + `, ` + r,
              children: (0, K.jsxs)(`span`, {
                children: [`\xA0`, i.zoneAbbr()],
              }),
            })
          : null,
      ],
    })
  );
}
function vr(e, t, n) {
  return hn(e, { weekday: `short`, year: n ? void 0 : `numeric`, timeZone: t });
}
function yr(e, t, n, r) {
  return (
    (n ||= J.default.tz.guess()),
    J.default.unix(e).tz(n).isSame(J.default.unix(t).tz(n), r)
  );
}
var Y = u((e) => {
    let { dateAndTime: t, bSingleLine: n, bOnlyTime: r, bOnlyDate: i } = e,
      a = kt(),
      o = !r && !!t,
      s = !i && !!t,
      c = o && vr(t, a),
      l = e.stylesmodule ? { ...q, ...e.stylesmodule } : q;
    return n
      ? (0, K.jsxs)(`span`, {
          className: r || i ? l.DateAndTimeInline : l.DateAndTime,
          children: [
            o && c,
            o && s ? (0, K.jsx)(`span`, { children: `\xA0` }) : void 0,
            !!(t && s) && _r(t, s, a),
          ],
        })
      : (0, K.jsxs)(`div`, {
          className: l.DateAndTime,
          children: [
            o &&
              (0, K.jsxs)(K.Fragment, {
                children: [
                  (0, K.jsx)(`div`, {
                    className: l.LocalizedDate,
                    children: c,
                  }),
                  ` `,
                  (0, K.jsx)(`span`, {
                    className: l.At,
                    children: R(`#EventDisplay_DateAndTimeCombiner`),
                  }),
                ],
              }),
            (0, K.jsx)(`div`, {
              className: l.LocalizedTime,
              children: !!(t && s) && _r(t, s, a),
            }),
          ],
        });
  }),
  X = (e) => {
    let t = (0, K.jsx)(`div`, {
      className: e.stylesmodule?.DateToolTip,
      children: (0, K.jsx)(Y, {
        dateAndTime: e.rtFullDate,
        bSingleLine: !0,
        stylesmodule: e.stylesmodule,
      }),
    });
    return (0, K.jsx)(In, {
      toolTipContent: t,
      direction: `top`,
      className: e.className,
      bTopmost: !0,
      children: e.children,
    });
  },
  br = u((e) => {
    let { startDateAndTime: t, endDateAndTime: n = 0 } = e,
      r = e.stylesmodule ? { ...q, ...e.stylesmodule } : q,
      i = kt(),
      a = fe(),
      o = e.bHideEndTime || e.endDateAndTime == null || e.endDateAndTime < 1;
    if (t == null || t == 0)
      return (0, K.jsxs)(`div`, {
        className: r.DateAndTime,
        children: [
          (0, K.jsx)(`span`, {
            className: r.RightSideTitles,
            children: R(`#EventDisplay_TimeRange`),
          }),
          R(`#EventDisplay_TimeDisplayNone`),
        ],
      });
    if (o)
      return (0, K.jsxs)(`div`, {
        className: r.StartDate,
        children: [
          (0, K.jsxs)(`div`, {
            className: r.RightSideTitles,
            children: [
              R(
                t < a
                  ? `#EventDisplay_TimeInPast`
                  : `#EventDisplay_TimeUpcoming`,
              ),
              `\xA0`,
            ],
          }),
          (0, K.jsx)(Y, { stylesmodule: r, dateAndTime: t }),
        ],
      });
    let s = t <= a && a <= n,
      c = yr(t, n, i, `day`);
    return (0, K.jsxs)(`div`, {
      className: r.MultiDateAndTime,
      children: [
        (0, K.jsxs)(`div`, {
          className: r.StartDate,
          children: [
            (0, K.jsx)(`span`, {
              className: r.RightSideTitles,
              children: R(
                t >= a
                  ? `#EventDisplay_TimeBeginsOn`
                  : n >= a
                    ? `#EventDisplay_TimeBeginsOn_Past`
                    : `#EventDisplay_TimeBeginsOn_StartAndEnd_Past`,
              ),
            }),
            (0, K.jsx)(Y, { stylesmodule: r, bSingleLine: !0, dateAndTime: t }),
          ],
        }),
        (0, K.jsxs)(`div`, {
          className: r.EndDate,
          children: [
            (0, K.jsx)(`span`, {
              className: r.RightSideTitles,
              children: R(
                n < a
                  ? `#EventDisplay_TimeEndsOn_Past`
                  : `#EventDisplay_TimeEndsOn`,
              ),
            }),
            (0, K.jsx)(Y, {
              stylesmodule: r,
              bSingleLine: !0,
              bOnlyTime: c,
              dateAndTime: n,
            }),
          ],
        }),
        s &&
          (0, K.jsx)(`span`, {
            className: r.ActiveEvent,
            children: (0, K.jsx)(`span`, {
              className: I(r.RightSideTitles, r.ActiveEventCallOut),
              children: R(`#Time_Now`),
            }),
          }),
      ],
    });
  }),
  xr = u((e) => {
    let { startDateAndTime: t, endDateAndTime: n, bHideEndTime: r } = e,
      i = e.stylesmodule ? { ...q, ...e.stylesmodule } : q,
      a = kt(),
      o = fe();
    if (t == null || t == 0)
      return (0, K.jsxs)(`div`, {
        className: i.DateAndTime,
        children: [
          (0, K.jsx)(`span`, {
            className: i.RightSideTitles,
            children: R(`#EventDisplay_TimeRange`),
          }),
          R(`#EventDisplay_TimeDisplayNone`),
        ],
      });
    let s = yr(t, o, a, `year`),
      c = (0, K.jsx)(`div`, {
        className: i.ShortDateAndTime,
        children: vr(t, a, s),
      }),
      l = (0, K.jsxs)(X, {
        rtFullDate: t,
        stylesmodule: i,
        children: [
          (0, K.jsx)(`div`, {
            className: i.RightSideTitles,
            children: R(
              t < o ? `#EventDisplay_TimeInPast` : `#EventDisplay_TimeUpcoming`,
            ),
          }),
          c,
        ],
      });
    if (
      (o < t &&
        t < o + jn.PerWeek &&
        (l = (0, K.jsx)(X, {
          rtFullDate: t,
          stylesmodule: i,
          children: (0, K.jsx)(`div`, {
            className: i.RightSideTitles,
            children: _t(
              `#EventDisplay_EventUpcoming_WithDateAndTime`,
              c,
              (0, K.jsxs)(`div`, {
                className: i.ShortDateAndTime,
                children: [_r(t, !1, a), ` `],
              }),
            ),
          }),
        })),
      r || n == null || n < 1)
    )
      return l;
    let u = t <= o && o <= n;
    u &&
      (l = (0, K.jsx)(X, {
        rtFullDate: t,
        className: i.ActiveEvent,
        stylesmodule: i,
        children: (0, K.jsx)(`span`, {
          className: i.ActiveEventCallOut,
          children: R(`#Time_Now`),
        }),
      }));
    let d = null,
      f = u ? n - o : n - t;
    if (f <= jn.PerDay) {
      let e = (0, K.jsx)(`div`, {
        className: i.ShortDateAndTime,
        children: _n(f, !0),
      });
      d =
        n < o
          ? (0, K.jsxs)(`div`, {
              className: i.RightSideTitles,
              children: [R(`#EventDisplay_TimeEndsOn_Ran`), e],
            })
          : (0, K.jsx)(`div`, {
              className: i.RightSideTitles,
              children: _t(
                u ? `#EventDisplay_TimeLeft` : `#EventDisplay_RunsForDuration`,
                e,
              ),
            });
    } else {
      let e = yr(n, o, a, `year`);
      d = (0, K.jsxs)(G.Fragment, {
        children: [
          (0, K.jsx)(`div`, {
            className: i.RightSideTitles,
            children: R(
              n < o
                ? `#EventDisplay_TimeEndsOn_Past`
                : `#EventDisplay_TimeEndsOn`,
            ),
          }),
          (0, K.jsx)(`div`, {
            className: i.ShortDateAndTime,
            children: vr(n, a, e),
          }),
        ],
      });
    }
    let p = (0, K.jsx)(X, { rtFullDate: n, stylesmodule: i, children: d });
    return (0, K.jsxs)(`div`, {
      className: i.ShortDateRange,
      children: [l, p],
    });
  });
async function Sr(e, t) {
  let n = await Pe.GetCommunityInventory(e, { filter_appids: [t] });
  if (n.GetEResult() != 1)
    throw Error(
      `Quest.GetCommunityInventory on app ` + t + ` answered ` + n.GetEResult(),
    );
  return n.Body().toObject().items ?? [];
}
var Cr;
function wr() {
  let e = mn();
  if (e) return e.GetServiceTransport();
  if (!Cr) {
    let e = Ht(`read_inventory_token`, `application_config`);
    Cr = It(e ? new Et(j.WEBAPI_BASE_URL, e) : dt());
  }
  return Cr.GetServiceTransport();
}
async function Tr(e) {
  return Sr(wr(), e);
}
var Er = 3e3,
  Dr = 5e3;
function Or(e) {
  return [`QuestCommunityInventory`, e];
}
function kr(e) {
  return {
    queryKey: Or(e),
    queryFn: () => Tr(e),
    enabled: !!e,
    staleTime: 1 / 0,
    retry: !1,
  };
}
function Ar(e) {
  let { data: t } = p(kr(e));
  return t;
}
function jr(e, t) {
  let n = Ar(e);
  return {
    communityItem: (0, G.useMemo)(
      () => n?.find((n) => n.appid == e && n.item_type == t),
      [n, e, t],
    ),
    bLoaded: n != null,
  };
}
function Mr() {
  let e = o();
  return f({ mutationFn: (t) => Pr(e, t.appid, t.fnBHasExpectedItems) });
}
var Nr = new WeakMap();
function Pr(e, t, n) {
  if (!t || n(e.getQueryData(Or(t)) ?? [])) return Promise.resolve();
  let r = Nr.get(e);
  r || ((r = new Map()), Nr.set(e, r));
  let i = r.get(t);
  return i || ((i = Fr(e, t, n).finally(() => r?.delete(t))), r.set(t, i)), i;
}
async function Fr(e, t, n) {
  let r = [0, Er, Ir()];
  for (let i of r) {
    i > 0 && (await Lr(i));
    let r;
    try {
      (r = await Tr(t)), e.setQueryData(Or(t), r);
    } catch (e) {
      console.error(
        `Re-reading the community inventory for app ` + t + ` failed`,
        e,
      );
    }
    if (n(r ?? [])) return;
  }
}
function Ir() {
  return Dr + Math.floor(Math.random() * 1e4);
}
function Lr(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Rr(e, t, n) {
  e.setQueryData(Or(t), n);
}
var zr = `minigamev2/itemdefs`,
  Br = `appid`,
  Vr = `editor`;
function Hr() {
  return (typeof self < `u` ? self.origin + `/` : ``) === j.STORE_BASE_URL
    ? j.STORE_BASE_URL
    : j.COMMUNITY_BASE_URL;
}
async function Ur(e, t) {
  if (!e) return [];
  let n = new URLSearchParams({ [Br]: String(e), l: j.LANGUAGE });
  t && n.set(Vr, `1`);
  let r = `${Hr()}${zr}?${n}`,
    i = await fetch(r, { credentials: t ? `include` : `same-origin` });
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json();
  if (a?.success == 1 && a.item_definitions) return a.item_definitions;
  throw Error(
    `Community item definitions for app ` + e + ` answered ` + a?.success,
  );
}
function Wr(e, t) {
  return [`MinigameCommunityItemDefs`, e, !!t];
}
function Gr(e, t) {
  return {
    queryKey: Wr(e, t),
    queryFn: () => Ur(e, t),
    enabled: !!e,
    retry: !1,
  };
}
function Kr(e, t) {
  let { data: n } = p(Gr(e, t));
  return n;
}
function qr(e, t, n) {
  let r = Kr(e, n);
  return (0, G.useMemo)(
    () => r?.find((r) => (n || r.active) && r.appid == e && r.item_type == t),
    [r, e, t, n],
  );
}
function Jr(e) {
  let {
    appid: t,
    item_image_small: n,
    item_image_large: r,
    item_movie_mp4: i,
    item_movie_webm: a,
    item_title: o,
  } = e;
  if (i && a) {
    let r = `${j.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${n}`,
      o = `${j.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${a}`,
      s = `${j.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${i}`;
    return (0, K.jsx)(K.Fragment, {
      children: (0, K.jsxs)(`video`, {
        muted: !0,
        controls: !1,
        autoPlay: !0,
        loop: !0,
        poster: r,
        playsInline: !0,
        className: e.videoClassName,
        children: [
          (0, K.jsx)(`source`, { src: o, type: `video/webm` }),
          !j.IN_CLIENT && (0, K.jsx)(`source`, { src: s, type: `video/mp4` }),
        ],
      }),
    });
  }
  {
    let i = `${j.MEDIA_CDN_COMMUNITY_URL}images/items/${t}/${n || r}`;
    return (0, K.jsx)(`img`, { className: e.className, src: i, alt: o });
  }
}
function Yr(e) {
  let { appid: t, community_item_type: n, bForEdit: r } = e,
    i = qr(t, n, r),
    a =
      i && !i.active
        ? (0, K.jsx)(`div`, {
            className: Se,
            children: R(`#Sale_Section_RewardShelf_ItemInActiveWarning`),
          })
        : void 0;
  return i
    ? (0, K.jsxs)(K.Fragment, { children: [(0, K.jsx)(Jr, { ...i }), a] })
    : (0, K.jsx)(D, { size: `small`, string: R(`#Loading`) });
}
function Xr(e) {
  let { section: t, rewardDef: n, language: r } = e,
    i = qr(n.appid ?? 0, n.community_item_type ?? 0),
    [a] = h(() => [!!t.rewards?.show_reward_item_name]),
    o;
  switch (n.community_class) {
    case 14:
    case 15:
      o = `${j.COMMUNITY_BASE_URL}my/edit/avatar`;
      break;
    case 1:
      o = `${j.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
      break;
    case 3:
    case 8:
      o = `${j.COMMUNITY_BASE_URL}my/edit/background`;
      break;
    case 13:
      o = `${j.COMMUNITY_BASE_URL}my/edit/miniprofile`;
      break;
    case 11:
      o = `${j.COMMUNITY_BASE_URL}chat`;
  }
  return (0, K.jsxs)(`a`, {
    href: o,
    children: [
      (0, K.jsx)(Yr, {
        appid: n.appid ?? 0,
        community_item_type: n.community_item_type ?? 0,
      }),
      !!a && (0, K.jsx)(`span`, { children: i?.item_name }),
    ],
  });
}
var Zr = `sQ3oyZUR-zg-`,
  Qr = `xlE3GjrXwxc-`,
  $r = `-kwnh0mPXe8-`;
function ei(e) {
  let t = Fe(),
    { bLoading: n } = t,
    { className: r, bPreviewMode: i, rewardType: a } = e,
    [o, s, c] = k();
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(H, {
        className: I(`CSSClaimItemButton`, r),
        onClick: () => {
          t.bCanClaimNewItem
            ? s()
            : i &&
              (s(),
              console.log(
                `Show dialog for debugging, since already claimed: `,
                t,
              ));
        },
        disabled: n,
        children: n
          ? (0, K.jsx)(D, { string: R(`#Loading`), size: `small` })
          : (0, K.jsx)(ti, { claimState: t }),
      }),
      (0, K.jsx)(U, {
        active: o,
        children: (0, K.jsx)(ni, { rewardType: a, closeModal: c }),
      }),
    ],
  });
}
function ti(e) {
  let { claimState: t, strButtonOverride: n, rewardType: r } = e;
  if (t.bAlreadyClaimedCurrentItem)
    return (0, K.jsxs)(`div`, {
      className: I(Zr, `CSSClaimedState`),
      children: [
        (0, K.jsx)(En, {}),
        (0, K.jsxs)(`span`, {
          children: [` `, n || R(`#Sale_ClaimableReward_AlreadyClaimed`)],
        }),
      ],
    });
  let i = R(`#Sale_ClaimableReward_generic`);
  switch (t?.community_item_class || r) {
    case 11:
      i = R(`#Sale_ClaimableReward_sticker`);
      break;
    case 8:
      i = R(`#Sale_ClaimableReward_profilemodifier`);
      break;
    case 15:
      i = R(`#Sale_ClaimableReward_animatedavatar`);
  }
  return (0, K.jsx)(`span`, { className: `CSSUnclaimedState`, children: i });
}
function ni(e) {
  let { closeModal: t, rewardType: n } = e,
    { fnClaimItem: r } = Ie(),
    i = be(),
    [a, o] = G.useState(null);
  G.useEffect(() => {
    i.bLoading ||
      (i.fnSetLoading(!0),
      r()
        .then((e) => {
          if ((o(e), e.appid)) {
            let t = R(`#Sale_ClaimableReward_completed_generic`),
              r = a?.community_item_class || n;
            switch (r) {
              case 11:
                t = R(`#Sale_ClaimableReward_completed_sticker`);
                break;
              case 8:
                t = R(`#Sale_ClaimableReward_completed_profilemodifier`);
                break;
              case 15:
                t = R(`#Sale_ClaimableReward_completed_animatedavatar`);
            }
            i.fnSetStrSuccess(`   `),
              i.fnSetElSuccess(
                (0, K.jsxs)(`div`, {
                  className: Qr,
                  children: [
                    (0, K.jsx)(`span`, { children: t }),
                    (0, K.jsx)(ri, {
                      appid: e.appid,
                      community_item_type: e.community_item_type,
                      rewardType: r,
                    }),
                  ],
                }),
              );
          } else i.fnSetStrError(R(`#Sale_ClaimableReward_Busy`));
        })
        .catch(() => i.fnSetStrError(R(`#Sale_ClaimableReward_Busy`))));
  }, [a?.community_item_class, i, r, n]);
  let s = R(`#Sale_ClaimableReward_generic`);
  switch (a?.community_item_class || n) {
    case 11:
      s = R(`#Sale_ClaimableReward_sticker`);
      break;
    case 8:
      s = R(`#Sale_ClaimableReward_profilemodifier`);
      break;
    case 15:
      s = R(`#Sale_ClaimableReward_animatedavatar`);
  }
  return (0, K.jsx)(xe, { state: i, strDialogTitle: s, closeModal: t });
}
function ri(e) {
  let { appid: t, community_item_type: n, rewardType: r } = e;
  return !t || !n
    ? null
    : (0, K.jsxs)(K.Fragment, {
        children: [
          (0, K.jsx)(Yr, { appid: t, community_item_type: n }),
          r == 8 && (0, K.jsx)(ii, { appid: t, community_item_type: n }),
        ],
      });
}
function ii(e) {
  let { appid: t, community_item_type: n } = e,
    r = Ar(t),
    { mutate: i, isSuccess: a } = Le();
  if (!r) return null;
  let o = r.find((e) => e.item_type == n);
  return o
    ? (0, K.jsxs)(`div`, {
        className: $r,
        children: [
          a
            ? (0, K.jsx)(`div`, {
                children: R(
                  `#Sale_ClaimableReward_profilemodifier_apply_success`,
                ),
              })
            : (0, K.jsx)(H, {
                onClick: () => i(o),
                children: R(`#Sale_ClaimableReward_profilemodifier_apply`),
              }),
          (0, K.jsx)(gn, {
            href: `${j.COMMUNITY_BASE_URL}profiles/${A.steamid}`,
            children: R(`#Sale_ClaimableReward_profilemodifier_view`),
          }),
        ],
      })
    : (0, K.jsxs)(`div`, {
        children: [
          (0, K.jsx)(gn, {
            href: `${j.COMMUNITY_BASE_URL}profiles/${A.steamid}/edit/goldenprofile`,
            children: R(`#Sale_ClaimableReward_profilemodifier_choose`),
          }),
          (0, K.jsx)(gn, {
            href: `${j.COMMUNITY_BASE_URL}profiles/${A.steamid}`,
            children: R(`#Sale_ClaimableReward_profilemodifier_view`),
          }),
        ],
      });
}
var ai = G.lazy(() =>
  Nt(
    () =>
      import(`./shareeventdialogbody.js`).then((e) => ({
        default: e.ShareEventDialogBody,
      })),
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
      75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
      93, 94, 95,
    ]),
    import.meta.url,
  ),
);
function oi(e) {
  let { bActive: t, ...n } = e;
  return (0, K.jsx)(U, {
    active: t,
    children: (0, K.jsx)(G.Suspense, {
      fallback: null,
      children: (0, K.jsx)(ai, { ...n }),
    }),
  });
}
function si(e) {
  let { eventModel: t, emoticonStore: n } = e,
    [r, i, a] = k(),
    o = ce(t);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsxs)(B, {
        focusable: !0,
        className: I(ge, ve, Ge),
        onActivate: i,
        children: [
          (0, K.jsx)(fn, { className: Je }),
          (0, K.jsx)(`span`, { className: Xe, children: R(`#Button_Share`) }),
        ],
      }),
      (0, K.jsx)(oi, {
        eventModel: t,
        strEventLink: o ?? ``,
        bActive: r,
        closeModal: a,
        emoticonStore: n,
      }),
    ],
  });
}
function ci(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${j.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
var li = `poster`,
  ui = `${li}.avif`,
  di = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function fi(e) {
  let t = e.video_webm_src || e.video_mp4_src;
  if (!t || e.image?.includes(`.${li}.`)) return e.image;
  let n = di.exec(t);
  return n ? `${n[1]}.${ui}` : e.image;
}
async function pi(e, t) {
  let n = new URLSearchParams();
  n.append(`page_action`, String(e)),
    n.append(`snr`, W.SNR),
    n.append(`uint_data`, String(t)),
    n.append(`str_data`, mi());
  try {
    await fetch(W.STORE_BASE_URL + `events/ajaxreportnewshubstats/`, {
      method: `POST`,
      body: n,
    });
  } catch {}
}
function mi() {
  if (W.IN_CLIENT) return `steam`;
  let e = navigator.userAgent;
  return /iPhone|iPad|iPod/i.test(e) ||
    (/Macintosh/i.test(e) && /Safari/i.test(e))
    ? `ios`
    : /Android/i.test(e)
      ? `android`
      : ``;
}
var Z = (function (e) {
    return (
      (e[(e.k_eDiscussions = 0)] = `k_eDiscussions`),
      (e[(e.k_eThumbsUp = 1)] = `k_eThumbsUp`),
      (e[(e.k_eClickThrough = 2)] = `k_eClickThrough`),
      (e[(e.k_eMuted = 3)] = `k_eMuted`),
      (e[(e.k_ePlayedVideo = 4)] = `k_ePlayedVideo`),
      (e[(e.k_eReminder_Opened = 5)] = `k_eReminder_Opened`),
      (e[(e.k_eReminder_MobilePush = 6)] = `k_eReminder_MobilePush`),
      (e[(e.k_eReminder_Email = 7)] = `k_eReminder_Email`),
      (e[(e.k_eReminder_CalendarApple = 8)] = `k_eReminder_CalendarApple`),
      (e[(e.k_eReminder_CalendarGoogle = 9)] = `k_eReminder_CalendarGoogle`),
      (e[(e.k_eReminder_CalendarOutlook = 10)] = `k_eReminder_CalendarOutlook`),
      (e[(e.k_eReminder_EmailUnverified = 11)] = `k_eReminder_EmailUnverified`),
      (e[(e.k_eReminder_MobilePushMissing = 12)] =
        `k_eReminder_MobilePushMissing`),
      e
    );
  })({}),
  hi = { nFutureViewedIndex: 0, nPastViewedIndex: 0, nLastRecordedFilter: 0 };
function gi() {
  return [`EventCalendarTrackingProgress`];
}
function _i(e) {
  return e.getQueryData(gi()) ?? hi;
}
function vi(e, t) {
  e.setQueryDefaults(gi(), { staleTime: 1 / 0, gcTime: 1 / 0 }),
    e.setQueryData(gi(), (e) => ({ ...(e ?? hi), ...t }));
}
function yi(e, t, n) {
  return clearTimeout(e), setTimeout(n, t);
}
function bi(e) {
  pi(19, e);
}
function xi(e, t) {
  vi(e, {
    schFilter: yi(_i(e).schFilter, 1e3, () => {
      t != _i(e).nLastRecordedFilter &&
        (vi(e, { nLastRecordedFilter: t }), pi(16, t));
    }),
  });
}
function Si(e, t, n, r) {
  let i = 0,
    a = 0,
    o,
    s;
  for (let e of n) {
    let n = e.start_time > r;
    if ((e.unique_id == t && ((o = a), (s = e)), n)) i++;
    else if (o !== void 0) break;
    a++;
  }
  if (o === void 0 || !s) return;
  let c = _i(e);
  if (o < i) {
    let t = i - o;
    if (c.nFutureViewedIndex >= t) return;
    vi(e, {
      nFutureViewedIndex: t,
      schFuture: yi(c.schFuture, 500, () => {
        pi(
          18,
          Math.min(t, 4095) |
            (Math.min(i, 255) << 12) |
            (Math.min(Ci(r), 2047) << 20),
        );
      }),
    });
    return;
  }
  let l = o - i;
  if (c.nPastViewedIndex >= l) return;
  let u = Math.floor((r - s.start_time) / 86400);
  vi(e, {
    nPastViewedIndex: l,
    schPast: yi(c.schPast, 500, () => {
      pi(
        17,
        Math.min(l, 4095) |
          (Math.min(u, 255) << 12) |
          (Math.min(Ci(r), 2047) << 20),
      );
    }),
  });
}
function Ci(e) {
  return Math.max(0, Math.floor(Date.now() / 1e3 - e));
}
function wi() {
  let e = o(),
    { mutate: t } = f({
      mutationFn: async (t) => {
        switch (t.type) {
          case `interaction`:
            bi(t.interaction);
            break;
          case `filter-change`:
            xi(e, t.nFilterBitMask);
            break;
          case `event-viewed`:
            Si(e, t.gidEvent, t.rgItemsInView, t.rtCalendarInit);
        }
      },
    });
  return G.useMemo(
    () => ({
      RecordInteraction: (e) => t({ type: `interaction`, interaction: e }),
      RecordFilterChange: (e) =>
        t({ type: `filter-change`, nFilterBitMask: e }),
      RecordEventViewed: (e, n, r) =>
        t({
          type: `event-viewed`,
          gidEvent: e,
          rgItemsInView: n,
          rtCalendarInit: r,
        }),
    }),
    [t],
  );
}
function Ti(e, t) {
  return [`GetClanAnnouncementVoteForUser`, t, e];
}
function Ei(e, t, n, r) {
  let i = o(),
    a = Ti(e, A.accountid),
    { data: s } = p({
      queryKey: a,
      queryFn: async () => await n.GetMyEventVote(e),
      initialData: r?.initialVote,
      enabled: !!e && !!A.accountid && (r?.bAsk ?? !0),
      staleTime: 1 / 0,
      gcTime: 1 / 0,
    }),
    { mutate: c } = f({
      mutationFn: async (r) => {
        let i = await n.RateEvent(e, t, r);
        if (i != 1) throw Error(`RateClanAnnouncement failed with ${i}`);
      },
      onMutate: (e) => i.setQueryData(a, e),
      onError: () => i.invalidateQueries({ queryKey: a }),
    });
  return {
    myVote: s,
    Vote: (t) => {
      e && t != s && c(t);
    },
  };
}
function Di(e, t) {
  if (e.length == 0) return;
  let n = t ?? Lt(`SetMyEventVotes`);
  n &&
    e.forEach((e) =>
      n.setQueryData(Ti(e.gidAnnouncement, A.accountid), e.vote),
    );
}
var Oi = `partnereventaction/myvote`,
  ki = `partnereventaction/rateevent`;
async function Ai(e) {
  let t = j.STORE_BASE_URL + Oi + `?gid=` + encodeURIComponent(e),
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  return (await n.json()).vote ?? null;
}
async function ji(e, t, n) {
  let r = j.STORE_BASE_URL + ki,
    i = await fetch(r, {
      method: `POST`,
      credentials: `include`,
      body: new URLSearchParams({
        gid: e,
        clanaccountid: String(t),
        voteup: n == `up` ? `1` : `0`,
      }),
    });
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  return (await i.json()).success ?? 2;
}
var Mi = { GetMyEventVote: Ai, RateEvent: ji },
  Ni = `notificationaction/usercontactmethods`;
async function Pi() {
  let e = j.STORE_BASE_URL + Ni,
    t = await fetch(e, { credentials: `include` });
  if (!t.ok) throw Error(`${e} answered ${t.status}`);
  return await t.json();
}
var Fi = { bHasValidatedEmail: !1, bHasPushNotification: !1 };
function Ii() {
  let { data: e } = p(Ri());
  return e ?? Fi;
}
function Li(e) {
  return [`useUserContactMethods`, e];
}
function Ri() {
  return {
    queryKey: Li(A.accountid),
    queryFn: Pi,
    enabled: !!A.logged_in,
    initialData: () => {
      let e = Ht(`notificationstore`, `application_config`);
      return Bi(e) ? zi(e) : void 0;
    },
  };
}
function zi(e) {
  return {
    bHasValidatedEmail: !!e.email_validated,
    bHasPushNotification: (e.mobile_device_count ?? 0) > 0,
  };
}
function Bi(e) {
  let t = e;
  return (
    !!t && typeof t == `object` && typeof t.mobile_device_count == `number`
  );
}
var Vi = `_5AgZEgYk43o-`,
  Hi = `_8D33ZtA7ymg-`,
  Ui = `KtGRAufC8Rg-`,
  Wi = `Kd1BYtvJHJU-`,
  Gi = `N7OtL5zwQl8-`,
  Ki = `s1rk-Hqt8Vo-`,
  qi = `LQdMT5i8LTs-`,
  Ji = `Es2eMo59RY8-`,
  Yi = `QcOIba5EbY0-`,
  Xi = `Rudc0MPiyKA-`,
  Zi = `cVnNrHICBDo-`,
  Qi = `NOqR9p4DLhY-`,
  $i = `kuZjNUoyxrA-`;
function ea(e) {
  return (
    (e.bHasVerifiedEmail && e.bFollowsByEmail) ||
    (e.bHasPushNotification && e.bFollowsByPush)
  );
}
function ta(e) {
  let {
      eventModel: t,
      rtNow: n,
      notifyState: r,
      bOnlyShowIcon: i,
      renderPanel: a,
      onRequestSignIn: o,
      bSignedIn: s,
      onTrack: c,
    } = e,
    [l, u] = G.useState(!1),
    d = G.useRef(null),
    f = G.useRef(null),
    p = G.useCallback(() => {
      f.current?.Hide(), u(!1);
    }, []),
    m = () => {
      let e = {
        bOverlapHorizontal: !0,
        bOverlapVertical: !0,
        bDisablePopTop: !0,
        bMatchWidth: !0,
        strClassName: I(Hi, Ui, Ot),
      };
      (f.current = ut(a(p), d.current, e)),
        f.current.SetOnHideCallback(p),
        u(!0),
        c?.(`opened`);
    },
    h = (e) => {
      s ? (l ? p() : m(), e.stopPropagation(), e.preventDefault()) : o?.();
    },
    g = i && !l,
    _ = ea(r);
  return (t.startTime !== void 0 && t.startTime < n) || t.BIsUnlistedEvent()
    ? null
    : (0, K.jsxs)(`div`, {
        className: I({
          [qi]: !0,
          [Oe]: !0,
          [Ji]: g,
          [Xi]: !g,
          ReminderSet: _,
          RemindMeWidget: !0,
        }),
        role: `button`,
        tabIndex: 0,
        "aria-expanded": l,
        onClick: h,
        onKeyDown: (e) => {
          (e.key === `Enter` || e.key === ` `) && h(e);
        },
        ref: d,
        children: [
          _ &&
            (0, K.jsx)(`div`, {
              className: `oz3mjoeUVmI-`,
              children: (0, K.jsx)(En, {}),
            }),
          g &&
            (0, K.jsx)(`div`, {
              className: `XaxmL5123ZA-`,
              children: (0, K.jsx)(Pn, {}),
            }),
          (0, K.jsx)(`div`, {
            className: Yi,
            children: R(`#EventDisplay_Reminder_SetReminder`),
          }),
          (0, K.jsx)(`div`, { className: Ui }),
        ],
      });
}
function na(e) {
  let {
      eventModel: t,
      lang: n,
      rtNow: r,
      notifyState: i,
      bShowStartTime: a,
      bExpandLeft: o,
      bOnlyShowIcon: s,
      strCalendarEventTitle: c,
      onChangeNotify: l,
      onTrack: u,
      fnHidePanel: d,
    } = e,
    [f, p] = G.useState(!1),
    [m, h] = G.useState(void 0),
    [g, _, v] = k(),
    y = async (e, n) => {
      if (t.GID && t.GID != `18446744073709551615`) {
        p(!0);
        try {
          await l(e, n),
            e && u?.(n == `email` ? `notify-email` : `notify-push`);
        } catch (e) {
          h(e instanceof Error ? e.message : String(e)), _();
        }
        p(!1);
      }
    },
    b = t.jsondata.bSaleEnabled ? oe.k_eStoreSalePage : oe.k_eStoreView,
    x = ie(t, b, `forceAbsolute`),
    S = () => {
      let e = t.GetSubTitleWithLanguageFallback(n);
      e = e ? `${e}\n\n\n` : ``;
      let r = t.GetSummaryWithFallback(n);
      return `${e}${r}\n\n${x}`;
    },
    C = () => {
      let e = encodeURIComponent(c),
        n = encodeURIComponent(S()),
        r = t.GetStartTimeAndDateUnixSeconds(),
        i = ra(r),
        a = ra(t.GetEndTimeAndDateUnixSeconds() || r + jn.PerHour),
        o =
          (j.IN_CLIENT ? `steam://openurl_external/` : ``) +
          `https://calendar.google.com/calendar/r/eventedit?text=${e}&details=${n}&dates=${i}/${a}`;
      return L(o);
    },
    w = (e) => {
      let r = t.appid
          ? `app/` + t.appid
          : `group/` + t.clanSteamID.GetAccountID(),
        i = `l=` + dn(n);
      return `${j.STORE_BASE_URL}${re()}/download/${r}/${e}/${t.GID}?${i}`;
    },
    {
      bHasVerifiedEmail: T,
      bHasPushNotification: E,
      bFollowsByEmail: ee,
      bFollowsByPush: te,
    } = i,
    ne = a && t.GetStartTimeAndDateUnixSeconds();
  return (0, K.jsxs)(`div`, {
    children: [
      (0, K.jsxs)(`div`, {
        className: I(qi, s ? Ji : Xi, `RemindMeWidget`),
        role: `button`,
        tabIndex: 0,
        onClick: d,
        onKeyDown: (e) => {
          (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), d());
        },
        children: [
          ea(i) &&
            (0, K.jsx)(`div`, {
              className: `oz3mjoeUVmI-`,
              children: (0, K.jsx)(En, {}),
            }),
          s &&
            (0, K.jsx)(`div`, {
              className: `XaxmL5123ZA-`,
              children: (0, K.jsx)(Pn, {}),
            }),
          (0, K.jsx)(`div`, {
            className: Yi,
            children: R(`#EventDisplay_Reminder_SetReminder`),
          }),
          (0, K.jsx)(`div`, { className: Zi }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: I(Vi, Wi, o && `_4kHkgBu8y8A-`),
        children: [
          f &&
            (0, K.jsx)(D, {
              className: `xPjWHd9Ig14-`,
              size: `xlarge`,
              position: `center`,
            }),
          ne &&
            (0, K.jsx)(`div`, {
              className: `QivD6fzvu-Q-`,
              children: _t(
                `#EventDisplay_EventUpcoming_WithDateAndTime`,
                hn(ne, Kt(new Date(ne * 1e3), new Date(r * 1e3))),
                _r(ne, !0),
              ),
            }),
          (0, K.jsx)(`div`, {
            className: Qi,
            children: R(`#EventDisplay_Reminder_GetNotification_Via`),
          }),
          (0, K.jsxs)(`div`, {
            className: I(Gi, !T && `jtgpkfFhOJ8-`),
            children: [
              (0, K.jsx)(Mt, {
                className: Ki,
                bTopmost: !0,
                toolTipContent: R(
                  T
                    ? `#EventReminder_NotifyByEmail_ttip`
                    : `#EventReminder_NotifyByEmail_Missing`,
                ),
                children: (0, K.jsx)(wn, {
                  label: R(`#EventDisplay_Reminder_ViaEmail`),
                  disabled: !T,
                  checked: ee,
                  onChange: (e) => y(e, `email`),
                }),
              }),
              !T &&
                (0, K.jsx)(`div`, {
                  className: `_0UzWiVhBe8U-`,
                  children: (0, K.jsx)(`a`, {
                    href: j.STORE_BASE_URL + `account/`,
                    target: j.IN_CLIENT ? void 0 : `_blank`,
                    onClick: () => u?.(`email-unverified`),
                    rel: `noreferrer`,
                    children: R(`#EventReminder_NotifyByEmail_Missing_Add`),
                  }),
                }),
            ],
          }),
          (0, K.jsxs)(`div`, {
            className: I(Gi, !E && `jtgpkfFhOJ8-`),
            children: [
              (0, K.jsx)(Mt, {
                className: Ki,
                bTopmost: !0,
                toolTipContent: R(
                  E
                    ? `#EventReminder_NotifyByMobile_ttip`
                    : `#EventReminder_NotifyByMobile_Missing`,
                ),
                children: (0, K.jsx)(wn, {
                  label: R(`#EventDisplay_Reminder_ViaMobileApp`),
                  disabled: !E,
                  checked: te,
                  onChange: (e) => y(e, `push`),
                }),
              }),
              !E &&
                (0, K.jsx)(`div`, {
                  className: `_0UzWiVhBe8U-`,
                  children: (0, K.jsx)(`a`, {
                    href: j.STORE_BASE_URL + `mobile/?show=steamapp`,
                    target: j.IN_CLIENT ? void 0 : `_blank`,
                    onClick: () => u?.(`push-missing`),
                    rel: `noreferrer`,
                    children: R(`#EventReminder_NotifyByMobile_Install`),
                  }),
                }),
            ],
          }),
          (0, K.jsxs)(G.Fragment, {
            children: [
              (0, K.jsx)(`div`, {
                className: Qi,
                children: R(`#EventDisplay_Reminder_AddToCalendar`),
              }),
              (0, K.jsxs)(`div`, {
                className: $i,
                children: [
                  (0, K.jsx)(`a`, {
                    className: Gi,
                    href: w(`ics`),
                    onClick: () => u?.(`calendar-apple`),
                    children: R(`#EventDisplay_Reminder_AppleCalendar_Short`),
                  }),
                  (0, K.jsx)(`a`, {
                    className: Gi,
                    target: j.IN_CLIENT ? void 0 : `_blank`,
                    href: C(),
                    onClick: () => u?.(`calendar-google`),
                    rel: `noreferrer`,
                    children: R(`#EventDisplay_Reminder_GoogleCalendar_Short`),
                  }),
                  (0, K.jsx)(`a`, {
                    className: Gi,
                    href: w(`outlook`),
                    onClick: () => u?.(`calendar-outlook`),
                    children: R(`#EventDisplay_Reminder_OutlookCalendar_Short`),
                  }),
                ],
              }),
            ],
          }),
          !1,
        ],
      }),
      (0, K.jsx)(U, {
        active: g,
        children: (0, K.jsx)(ct, {
          strTitle: R(`#EventDisplay_Reminder_FollowEvent_Error`),
          strDescription: R(`#EventDisplay_Reminder_FollowEvent_ErrorDesc`),
          closeModal: v,
          children: m,
        }),
      }),
    ],
  });
}
function ra(e) {
  return new Date(e * 1e3)
    .toISOString()
    .replace(/[-:]/g, ``)
    .replace(/\.\d{3}Z$/, `Z`);
}
var ia = (function (e) {
  return (
    (e[(e.k_ENotifyFlagNone = 0)] = `k_ENotifyFlagNone`),
    (e[(e.k_ENotifyFlagByEmail = 1)] = `k_ENotifyFlagByEmail`),
    (e[(e.k_ENotifyFlagByPush = 2)] = `k_ENotifyFlagByPush`),
    e
  );
})({});
function aa(e, t) {
  let n = o(),
    r = on(),
    { data: i } = p(ir(e, n, r)),
    a = Ii(),
    s = sa(i, t);
  return {
    bHasVerifiedEmail: a.bHasValidatedEmail,
    bHasPushNotification: a.bHasPushNotification,
    bFollowsByEmail: (s & ia.k_ENotifyFlagByEmail) != 0,
    bFollowsByPush: (s & ia.k_ENotifyFlagByPush) != 0,
  };
}
function oa(e, t) {
  let n = o(),
    r = ir(e, n, on());
  return async (i, a) => {
    if (!t) return;
    let o = n.getQueryData(r.queryKey),
      s = a == `email` ? ia.k_ENotifyFlagByEmail : ia.k_ENotifyFlagByPush,
      c = sa(o, t);
    await ca(e, t, i ? c | s : c & ~s),
      await n.invalidateQueries({ queryKey: r.queryKey });
  };
}
function sa(e, t) {
  let n = t ? (e?.event_followed?.indexOf(t) ?? -1) : -1;
  return n == -1 ? 0 : (e?.event_followed_flags?.[n] ?? 0);
}
async function ca(e, t, n) {
  let r = n == 0,
    i = `${`${j.STORE_BASE_URL}events/`}${r ? `unfolloworunignoreevent` : `followorignoreevent`}`,
    a = new URLSearchParams();
  a.append(`sessionid`, vn()),
    a.append(`ignore`, `false`),
    a.append(`gid`, t),
    a.append(`notification_flag`, `` + n),
    a.append(`clan_accountid`, `` + e);
  let o = await fetch(i, { method: `POST`, body: a, credentials: `include` });
  if (!o.ok) throw Error(`${i} answered ${o.status}`);
}
function la(e) {
  let { eventModel: t, bOnlyShowIcon: n, onTrack: r } = e,
    i = fe(),
    a = aa(t.clanSteamID.GetAccountID(), t.GID),
    { elDialogElement: o, fnShowLogonDialog: s } = de();
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(ta, {
        eventModel: t,
        rtNow: i,
        notifyState: a,
        bOnlyShowIcon: n,
        bSignedIn: !!A.logged_in || j.IN_CLIENT,
        onRequestSignIn: s,
        onTrack: r,
        renderPanel: (t) => (0, K.jsx)(ua, { ...e, rtNow: i, fnHidePanel: t }),
      }),
      o,
    ],
  });
}
function ua(e) {
  let {
      eventModel: t,
      lang: n,
      strHubName: r,
      bShowStartTime: i,
      bExpandLeft: a,
      bOnlyShowIcon: o,
      onTrack: s,
      rtNow: c,
      fnHidePanel: l,
    } = e,
    u = t.clanSteamID.GetAccountID(),
    d = aa(u, t.GID),
    f = oa(u, t.GID),
    p = t.GetNameWithFallback(n) ?? ``,
    m = r ? `${r}: ${p}` : p;
  return (0, K.jsx)(na, {
    eventModel: t,
    lang: n,
    rtNow: c,
    notifyState: d,
    strCalendarEventTitle: m,
    bShowStartTime: i,
    bExpandLeft: a,
    bOnlyShowIcon: o,
    onChangeNotify: f,
    onTrack: s,
    fnHidePanel: l,
  });
}
function da(e) {
  let {
      eventModel: t,
      lang: n,
      bShowStartTime: r,
      bExpandLeft: i,
      bOnlyShowIcon: a,
    } = e,
    o = wi(),
    s = fa(t);
  return (0, K.jsx)(la, {
    eventModel: t,
    lang: n,
    strHubName: s,
    bShowStartTime: r,
    bExpandLeft: i,
    bOnlyShowIcon: a,
    onTrack: (e) => o.RecordInteraction(pa[e]),
  });
}
function fa(e) {
  let t = e.appid || void 0,
    n = v(t),
    { data: r } = un(n),
    { data: i } = C(t ? void 0 : e.clanSteamID.GetAccountID());
  return (t ? r?.name : i?.group_name) || void 0;
}
var pa = {
    opened: Z.k_eReminder_Opened,
    "notify-email": Z.k_eReminder_Email,
    "notify-push": Z.k_eReminder_MobilePush,
    "email-unverified": Z.k_eReminder_EmailUnverified,
    "push-missing": Z.k_eReminder_MobilePushMissing,
    "calendar-apple": Z.k_eReminder_CalendarApple,
    "calendar-google": Z.k_eReminder_CalendarGoogle,
    "calendar-outlook": Z.k_eReminder_CalendarOutlook,
  },
  ma = e(m()),
  ha = `FCDwJOWV1GM-`,
  ga = `txlNpNdL6ek-`,
  _a = `Lz8xvnLQ5-w-`,
  va = `_3TchWdVwz8s-`,
  ya = `MCGIDfV4nO0-`,
  ba = `V-UPj6R9FQU-`,
  xa = `X60rhq3vCCI-`,
  Sa = `KXp1skLG3-I-`,
  Ca = `q7dZi0jYxLw-`,
  wa = `xgATxxvgldU-`,
  Ta = `DwYwmDj0vwI-`,
  Ea = `_4OTq0--XlTY-`,
  Da = `hSFWQBRmqTY-`,
  Oa = `si-5WbiV7Zo-`,
  ka = `ZUZG5K1lErM-`,
  Aa = `u0Scnt9OeIA-`,
  ja = `udKyBXdwthE-`,
  Ma = `zU-vHqqb-eQ-`,
  Na = `zMH1K8bigkM-`,
  Pa = `TyI03RMpz2I-`,
  Fa = `PJL3cTty0Ls-`,
  Ia = `DCoTBaIhgjA-`,
  La = `-wy0zbfIpXg-`,
  Ra = `QHeuRajwcnQ-`,
  za = `_87rt595tHvU-`,
  Ba = `wu5bVGwl0TE-`,
  Va = `_8J5uJ6Ccisw-`,
  Ha = `qpxV4nQHXMc-`,
  Ua = `HWbJ1A3y1Vk-`,
  Wa = `aFhUTUuEGZ4-`,
  Ga = `_7Wxxgtnu5oA-`,
  Ka = `cd6NBhGLkfw-`,
  qa = `T-oflieec2c-`,
  Ja = `_5q65CKymFcE-`,
  Ya = `_3wNjVve5vqc-`,
  Xa = `bD0kY0dKy3k-`,
  Za = `ay-K0NBOIuc-`,
  Qa = `Dw62Gq5AJZE-`,
  $a = `iv48xfQdA94-`,
  eo = `kSHlVJTPUms-`,
  to = `tSbTvpNvWOQ-`,
  no = `WgF5nilVEJk-`,
  ro = `fhefwW6bGXQ-`,
  io = `bSRjbpQs554-`,
  ao = `Y0F9HI70evM-`,
  oo = `FWx4hiffwLs-`,
  so = `y9pBu-aZo-k-`,
  co = `ZlbFAmu86SM-`,
  lo = `_7rUyZ-4uXHM-`,
  uo = `WTcfl-4gbXY-`,
  fo = `fsvOA1PS33M-`,
  po = `CYRhg26l0dc-`,
  mo = `_09V7NXTmtlY-`,
  ho = `W-arcmNojEY-`,
  go = `MjUEpAp0LdA-`,
  _o = `iMj27DR-pkY-`,
  vo = t({
    DateAndTime: () => To,
    EndDate: () => So,
    EventDetailTimeInfo: () => bo,
    MultiDateAndTime: () => Co,
    RightSideTitles: () => wo,
    StartDate: () => xo,
    VerticalLocalDateAndTime: () => Eo,
    default: () => Do,
    narrowWidth: () => yo,
  }),
  yo = `500px`,
  bo = `PIDa4iwF6Qw-`,
  xo = `_4UxlTCOSE90-`,
  So = `okJSO6KUIW4-`,
  Co = `eOfJfzt9Vmk-`,
  wo = `ezwq3bm0cG4-`,
  To = `j7kT1VnCe70-`,
  Eo = `YHODzfld870-`,
  Do = {
    narrowWidth: yo,
    EventDetailTimeInfo: bo,
    StartDate: xo,
    EndDate: So,
    MultiDateAndTime: Co,
    RightSideTitles: wo,
    DateAndTime: To,
    VerticalLocalDateAndTime: Eo,
  };
function Oo(e) {
  let {
      event: t,
      className: n,
      nOverrideStartTime: r,
      nOverrideEndTime: i,
    } = e,
    a = e.stylesmodule ? { ...vo, ...e.stylesmodule } : vo,
    [o, s, c] = h(() => [
      r ||
        (t.bOldAnnouncement ? t.postTime : t.GetStartTimeAndDateUnixSeconds()),
      i || t.GetEndTimeAndDateUnixSeconds(),
      t.type,
    ]),
    l = !T(c);
  return (0, K.jsx)(`div`, {
    className: I(a.EventDetailTimeInfo, n),
    children: (0, K.jsx)(br, {
      startDateAndTime: o,
      endDateAndTime: s,
      bHideEndTime: l,
      stylesmodule: a,
    }),
  });
}
function ko(e) {
  let { id: t, event: n, className: r, dateRangeLayout: i = `horizontal` } = e,
    [a, o, s] = h(() => [
      n.GetStartTimeAndDateUnixSeconds(),
      n.GetEndTimeAndDateUnixSeconds(),
      n.type,
    ]),
    c = {};
  return (
    i == `vertical` && (c.ShortDateRange = Eo),
    (0, K.jsx)(`div`, {
      id: t,
      className: I(bo, r),
      children: (0, K.jsx)(xr, {
        startDateAndTime: a,
        endDateAndTime: o,
        bHideEndTime: !T(s),
        stylesmodule: c,
      }),
    })
  );
}
var Ao = /(?<!\\)\[(meetsteamsessiongroup|meetsteamscheduleview)\b([^\]]*)\]/gi,
  jo = /\b(?:group_id|schedule_id)\s*=\s*"?(\d+)/i;
function Mo(e) {
  let t = [];
  for (let n of e.matchAll(Ao))
    t.push({
      strTag: n[1].toLowerCase(),
      nID: Number(jo.exec(n[2])?.[1] ?? 0),
    });
  return t;
}
function No(e, t) {
  return (
    e === void 0 ||
    Mo(e).find((e) => e.strTag == `meetsteamsessiongroup`)?.nID == t
  );
}
function Po(e, t, n) {
  if (e === void 0) return !0;
  let r = Mo(e),
    i = r[r.length - 1];
  return i?.strTag == t && i.nID == n;
}
var Fo = G.createContext(null);
function Io() {
  return G.useContext(Fo);
}
var Lo = void 0;
function Ro(e, t) {
  let n = e?.AnnouncementGID,
    { myVote: r, Vote: i } = Ei(n, e?.clanSteamID.GetAccountID() ?? 0, zo(), {
      initialVote: Ho(n),
      ...t,
    });
  return {
    myVote: r,
    Vote: (t) => {
      e &&
        n &&
        t != r &&
        (r && e.UpdateVoteCount(r, -1), e.UpdateVoteCount(t, 1), i(t));
    },
  };
}
function zo() {
  let { useActiveCMInterface: e } = Zt(),
    t = on(),
    n = !!e;
  return G.useMemo(
    () =>
      n
        ? {
            GetMyEventVote: async (e) => await Bo(t, e),
            RateEvent: async (e, n, r) => await Vo(t, e, n, r),
          }
        : Mi,
    [n, t],
  );
}
async function Bo(e, t) {
  if (!e) return null;
  let n = await yn.GetClanAnnouncementVoteForUser(e, { announcementid: t });
  return n.BSuccess()
    ? n.Body().voted_up()
      ? `up`
      : n.Body().voted_down()
        ? `down`
        : null
    : null;
}
async function Vo(e, t, n, r) {
  return e
    ? (
        await yn.RateClanAnnouncement(e, {
          announcementid: t,
          vote_up: r == `up`,
          clan_accountid: n,
        })
      ).GetEResult()
    : 21;
}
function Ho(e) {
  if (typeof window > `u`) xn(!1, `GetVoteFromPageConfig is browser only`);
  else
    return (
      Lo ||
        ((Lo = new Map()),
        Ht(`uservotes`, `application_config`)?.forEach((e) => {
          e.clanAnnouncementGID &&
            Lo.set(
              e.clanAnnouncementGID,
              e.voted_up ? `up` : e.voted_down ? `down` : null,
            );
        })),
      e ? Lo.get(e) : void 0
    );
}
function Uo(e) {
  let {
    nVoteCount: t,
    nCommentCount: n,
    myVote: r,
    onVote: i,
    strDiscussionURL: a,
    onDiscussionUnavailable: o,
    bShowDiscussion: s,
    repost: c,
    share: l,
  } = e;
  return (0, K.jsxs)(B, {
    className: Ze,
    "flow-children": `row`,
    focusable: !1,
    children: [
      (0, K.jsxs)(`div`, {
        className: qe,
        children: [
          (0, K.jsxs)(`div`, {
            className: et,
            children: [
              (0, K.jsxs)(`div`, {
                className: Ue,
                children: [(0, K.jsx)(jt, { className: Ve }), $t(t)],
              }),
              (0, K.jsxs)(B, {
                focusable: !0,
                className: I(ge, ve, Ge, r == `up` ? Ke : ``),
                onActivate: () => i(`up`),
                children: [
                  (0, K.jsx)(jt, { className: r == `up` ? He : We }),
                  (0, K.jsx)(`span`, {
                    className: Xe,
                    children: R(`#Button_RateUp`),
                  }),
                ],
              }),
              (0, K.jsx)(B, {
                focusable: !0,
                className: I(ge, ve, Ge, r == `down` ? Ke : ``),
                onActivate: () => i(`down`),
                "aria-label": R(`#Button_RateDown`),
                children: (0, K.jsx)(jt, { className: r == `down` ? $e : Be }),
              }),
            ],
          }),
          s &&
            (0, K.jsx)(Wo, {
              commentCount: n,
              discussionURL: a,
              gotoDiscussion: o,
            }),
          c,
        ],
      }),
      l && (0, K.jsx)(`div`, { className: `vmIVedNuofw-`, children: l }),
    ],
  });
}
function Wo(e) {
  let { commentCount: t, discussionURL: n, gotoDiscussion: r } = e;
  return (0, K.jsxs)(`div`, {
    className: Ye,
    children: [
      (0, K.jsxs)(`div`, {
        className: Qe,
        children: [(0, K.jsx)(Wt, {}), $t(t)],
      }),
      n &&
        (0, K.jsx)(gn, {
          href: L(n),
          children: (0, K.jsxs)(`div`, {
            className: I(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `yGT3R-m6gZk-`),
            children: [
              (0, K.jsx)(Wt, {}),
              (0, K.jsx)(`span`, {
                className: `x25qTcshK-4-`,
                children: R(`#Button_Discuss`),
              }),
            ],
          }),
        }),
      !n &&
        (0, K.jsxs)(B, {
          focusable: !0,
          onActivate: r,
          className: I(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `yGT3R-m6gZk-`),
          children: [
            (0, K.jsx)(Wt, {}),
            (0, K.jsx)(`span`, {
              className: `x25qTcshK-4-`,
              children: R(`#Button_Discuss`),
            }),
          ],
        }),
    ],
  });
}
function Go() {
  return Xt.logged_in
    ? !Xt.is_limited || (Ct((0, K.jsx)(S, {}), window), !1)
    : (W.IN_CLIENT
        ? console.log(
            `EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.`,
          )
        : Ct(
            (0, K.jsx)(ft, {
              strTitle: R(`#EventDisplay_Share_NotLoggedIn`),
              strDescription: R(`#EventDisplay_Share_NotLoggedIn_Description`),
              strOKButtonText: R(`#MobileLogin_SignIn`),
              onOK: () => te(),
            }),
            window,
          ),
      !1);
}
function Ko(e) {
  let { eventModel: t, emoticonStore: n } = e,
    r = Fn(),
    { myVote: i, Vote: a } = Ro(t),
    o = (e) => {
      Go() && i !== void 0 && a(e);
    },
    [, s] = zn(t.clanSteamID.GetAccountID()),
    c = (e) => {
      let t = ot(e);
      t &&
        Ct(
          (0, K.jsx)(ct, {
            strDescription: R(`#EventDisplay_Share_CommentMigrationInProcess`),
          }),
          t,
        );
    },
    [l, u, d, f] = h(() => [
      pt(t.nVotesUp - t.nVotesDown, 0, 2 ** 53 - 1),
      Rt(t.GetDiscussionURL(s?.vanity_url)),
      t.BIsUnlistedEvent(),
      t.nCommentCount,
    ]),
    p = ht();
  return (0, K.jsx)(Uo, {
    nVoteCount: l,
    nCommentCount: f,
    myVote: i ?? void 0,
    onVote: o,
    strDiscussionURL: u,
    onDiscussionUnavailable: c,
    bShowDiscussion: !p && !d,
    share: !r && (0, K.jsx)(si, { eventModel: t, emoticonStore: n }),
  });
}
var qo = `m7T1AR0hEMQ-`;
function Jo(e) {
  let { MissingEventFallback: t } = e,
    { event: n, showErrorInfo: r } = e.context,
    i = O(e.args),
    a = !!i && i != n?.GID,
    { data: o, isPending: s } = ke(
      a && n
        ? { clanAccountID: n.clanSteamID.GetAccountID(), eventGID: i }
        : void 0,
    );
  if (!a) return n ? (0, K.jsx)(da, { eventModel: n, lang: e.language }) : null;
  if (n) {
    if (o) return (0, K.jsx)(da, { eventModel: o, lang: e.language });
    if (s) return null;
  }
  return t
    ? (0, K.jsx)(t, { eventGID: i, lang: e.language, bShowErrorInfo: !!r })
    : r
      ? (0, K.jsx)(Yo, { eventGID: i })
      : null;
}
function Yo({ eventGID: e }) {
  return (0, K.jsx)(`div`, {
    className: qo,
    children: R(`#EventDidplay_Reminder_EventNotVisible`, e),
  });
}
var Xo = new Map([[`remindme`, { Constructor: Zo, autocloses: !1 }]]);
function Zo(e) {
  return (0, K.jsx)(Jo, { ...e, MissingEventFallback: Qo });
}
function Qo({ eventGID: e, lang: t, bShowErrorInfo: n }) {
  let r = it(e);
  return r
    ? (0, K.jsx)(da, { eventModel: r, lang: t })
    : n
      ? (0, K.jsx)(Yo, { eventGID: e })
      : null;
}
function $o(e) {
  if (e === `GameAwardDrop2022`) {
    let t = Re(e),
      n = ze();
    return t
      ? t.registered
        ? {
            bInitialState: !1,
            bSuccessState: t.eligible,
            bFailedState: !t.eligible,
            fnAction: t.eligible
              ? void 0
              : async () => {
                  await n.fnCreateRegistration(e);
                },
          }
        : {
            bInitialState: !0,
            fnAction: async () => {
              await n.fnCreateRegistration(e);
            },
          }
      : { bInitialState: !0 };
  }
  return { bInitialState: !0 };
}
function es(e) {
  let t = O(e.args, `action`),
    n = O(e.args, `initialToken`),
    r = O(e.args, `successToken`),
    i = O(e.args, `failToken`),
    a = $o(t),
    { elDialogElement: o, fnShowLogonDialog: s } = de(),
    [c, l, u] = k();
  return !t || !n || !r || !i
    ? e.context.showErrorInfo
      ? (0, K.jsx)(`div`, {
          children: `Failed to provide all tokens. Dialog will not appear`,
        })
      : null
    : !A.logged_in && t != `test` && t != `nologinrequired`
      ? (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(H, {
              className: `CSSActionDialogButton`,
              onClick: s,
              children: R(`#Login_SignIn`),
            }),
            o,
          ],
        })
      : (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsxs)(H, {
              className: `CSSActionDialogButton`,
              onClick: l,
              children: [
                !!a.bInitialState && R(n),
                !!a.bSuccessState && R(r),
                !!a.bFailedState && R(i),
              ],
            }),
            (0, K.jsx)(U, {
              active: c,
              children: (0, K.jsx)(ts, {
                strAction: t,
                strInitialToken: n,
                strSuccessToken: r,
                strFailToken: i,
                closeModal: u,
                children: e.children,
              }),
            }),
          ],
        });
}
function ts(e) {
  let {
      strAction: t,
      children: n,
      closeModal: r,
      strInitialToken: i,
      strSuccessToken: a,
      strFailToken: o,
    } = e,
    s = $o(t),
    [c, l] = G.useState(!!s.fnAction),
    u = G.useRef(!1);
  G.useEffect(() => {
    s.fnAction &&
      !u.current &&
      ((u.current = !0), l(!0), s.fnAction().finally(() => l(!1)));
  }, [s]);
  let d = G.useId();
  return (0, K.jsxs)(ln, {
    bDisableBackgroundDismiss: !0,
    closeModal: r,
    onCancel: r,
    className: `CSSActionDialogDialog`,
    "aria-labelledby": d,
    children: [
      (0, K.jsxs)(Tn, {
        id: d,
        children: [
          !!s.bInitialState && R(i),
          !!s.bSuccessState && R(a),
          !!s.bFailedState && R(o),
        ],
      }),
      (0, K.jsx)(at, {
        children: (0, K.jsx)(Dn, {
          children: c
            ? (0, K.jsx)(D, {
                size: `medium`,
                position: `center`,
                string: R(`#Loading`),
              })
            : n,
        }),
      }),
    ],
  });
}
function ns(e) {
  let t = !!e.context.showErrorInfo,
    { elDialogElement: n, fnShowLogonDialog: r } = de();
  if (!A.logged_in)
    return (0, K.jsxs)(K.Fragment, {
      children: [
        (0, K.jsx)(H, {
          onClick: r,
          className: `CSSClaimItemLoginButton`,
          children: R(`#Sale_ClaimableReward_Login`),
        }),
        n,
      ],
    });
  let i = O(e.args, `type`),
    a;
  if (i)
    switch (i) {
      case `profilemodifier`:
        a = 8;
        break;
      case `sticker`:
        a = 11;
    }
  return (0, K.jsx)(ei, { bPreviewMode: t, rewardType: a });
}
function rs(e) {
  let t = O(e.args, `name`),
    n = (O(e.args, `visible`) || `false`).toLowerCase() === `true`,
    r = Re(t);
  return t
    ? !r || !r.registered
      ? null
      : (r.eligible && n) || (!r.eligible && !n)
        ? (0, K.jsx)(K.Fragment, { children: e.children })
        : null
    : e.context.showErrorInfo
      ? (0, K.jsx)(`div`, { children: `Failed to provide giveaway name` })
      : null;
}
function is(e, t) {
  let n = G.useCallback(
    (e) => {
      e.preventDefault(), (e.returnValue = t);
    },
    [t],
  );
  St(window, `beforeunload`, e ? n : void 0),
    G.useEffect(() => {
      if (!e || !window.navigation) return;
      let n = (e) => {
        (e.navigationType != `push` && e.navigationType != `traverse`) ||
          e.hashChange ||
          e.downloadRequest !== null ||
          !e.cancelable ||
          window.confirm(t) ||
          e.preventDefault();
      };
      return (
        window.navigation.addEventListener(`navigate`, n),
        () => window.navigation.removeEventListener(`navigate`, n)
      );
    }, [e, t]);
}
var as = new Map(),
  os = ``,
  ss = 0;
function cs(e, t) {
  return [`MeetSteamRegistrations`, e, t];
}
function ls(e, t) {
  return [`MeetSteamSelections`, e, t];
}
function us(e) {
  return {
    queryKey: cs(e?.gidClanEvent ?? os, e?.userAccountID ?? ss),
    queryFn: async () => {
      if (!e) return as;
      let t = await Wn(e.gidClanEvent),
        n = new Map();
      return (
        t.forEach((e) => {
          let t = {
            ...e,
            regmodel: e.jsondata ? JSON.parse(e.jsondata) : void 0,
          };
          t.group_id !== void 0 &&
            t.session_id !== void 0 &&
            n.set(t.group_id, t);
        }),
        n
      );
    },
    enabled: !!e && ee() == e?.clanAccountID && !!e?.userAccountID,
  };
}
function ds(e, t) {
  return {
    queryKey: ls(e, t),
    queryFn: () => null,
    initialData: null,
    staleTime: 1 / 0,
    gcTime: 1 / 0,
  };
}
var fs = G.createContext(void 0);
function ps(e) {
  let { clanAccountID: t, gidClanEvent: n, userAccountID: r, children: i } = e,
    a = G.useMemo(
      () => ({ clanAccountID: t, gidClanEvent: n, userAccountID: r }),
      [t, n, r],
    );
  return (0, K.jsx)(fs.Provider, { value: a, children: i });
}
function Q() {
  let e = G.useContext(fs),
    t = p(us(e)),
    n = p(ds(e?.gidClanEvent ?? os, e?.userAccountID ?? ss)),
    r = t.data ?? as;
  return G.useMemo(
    () => ({
      registrations: r,
      selections: n.data ?? ms(r),
      bLoading: t.isFetching,
    }),
    [r, n.data, t.isFetching],
  );
}
function ms(e) {
  let t = new Map();
  return (
    e.forEach((e, n) => {
      e.session_id !== void 0 && t.set(n, e.session_id);
    }),
    t
  );
}
function hs(e, t) {
  return t === void 0 ? void 0 : e.selections.get(t);
}
function gs(e) {
  return Array.from(e.selections.keys());
}
function _s(e, t, n) {
  if (t === void 0 || n === void 0) return 0;
  let r = e.registrations.get(t)?.session_id == n,
    i = e.selections.get(t) == n;
  return r && i ? 1 : !r && i ? 2 : r && !i ? 3 : 0;
}
function vs(e, t, n) {
  if (t === void 0 || n === void 0) return !1;
  let r = !!e.registrations.get(t),
    i = e.selections.get(t) == n,
    a = e.registrations.get(t)?.session_id == e.selections.get(t);
  return r && !i && a;
}
function ys(e, t) {
  return t === void 0 ? void 0 : e.registrations.get(t)?.session_id;
}
function bs(e) {
  return e.selections.size == 0 && e.registrations.size == 0
    ? !1
    : e.selections.size != e.registrations.size ||
        !Array.from(e.selections.entries()).every(
          (t) => e.registrations.get(t[0])?.session_id == t[1],
        );
}
function xs(e) {
  return Array.from(e.selections.entries()).some((t) => {
    let n = e.registrations.get(t[0]);
    return !n || n.session_id != t[1];
  });
}
function Ss(e) {
  return e.registrations.size > 0;
}
function Cs() {
  return Q().bLoading;
}
function ws() {
  return bs(Q());
}
function Ts() {
  return Ss(Q());
}
function Es(e, t) {
  return Ds(
    Q(),
    e.filter((e) => !!e.ask_registration_question),
    t,
  );
}
function Ds(e, t, n) {
  return t
    .filter((t) => t.sessions.some((r) => _s(e, t.group_id, r.id) == n))
    .map((e) => e.group_id)
    .filter((e) => e !== void 0);
}
function Os(e, t, n, r) {
  n !== void 0 &&
    e.setQueryData(ls(t.gidClanEvent, t.userAccountID), (i) => {
      let a = e.getQueryData(cs(t.gidClanEvent, t.userAccountID)) ?? as,
        o = new Map(i ?? ms(a));
      return r !== void 0 && r > 0 ? o.set(n, r) : o.delete(n), o;
    });
}
function ks() {
  let e = G.useContext(fs),
    t = o(),
    n = Q();
  return G.useCallback(
    (r, i) => {
      if (!e) return;
      let a = hs(n, r) == i;
      Os(t, e, r, a ? void 0 : i);
    },
    [e, t, n],
  );
}
function As() {
  let e = G.useContext(fs),
    t = o(),
    n = Q(),
    { mutateAsync: r } = f({
      mutationFn: async (r) => {
        if (!e) return !1;
        let i = Object.fromEntries(
            Object.entries(r).filter(
              ([e]) => !e.startsWith(`registration_emailed_`),
            ),
          ),
          a = [];
        for (let [t, o] of n.selections)
          a.push({
            gid: e.gidClanEvent,
            group_id: t,
            session_id: o,
            guest_count: r.guests_registered ?? 1,
            jsondata: JSON.stringify(i),
            skip_email: !1,
          });
        for (let t of n.registrations.keys())
          n.selections.has(t) ||
            a.push({
              gid: e.gidClanEvent,
              group_id: t,
              session_id: 0,
              guest_count: 0,
              jsondata: JSON.stringify({}),
              skip_email: !1,
            });
        let o = !0;
        for (let e = 0; e < a.length; e++) {
          let t = await qn({ ...a[e], skip_email: e != a.length - 1 });
          o &&= t == 1;
        }
        return (
          t.setQueryData(ls(e.gidClanEvent, e.userAccountID), null),
          await t.invalidateQueries({
            queryKey: cs(e.gidClanEvent, e.userAccountID),
          }),
          o
        );
      },
    });
  return r;
}
var js = `W-F7GLCqlcg-`,
  Ms = `bilOH9M934k-`,
  Ns = `agQ2BkMSeCM-`,
  Ps = `_9pkUjSUWRSQ-`,
  Fs = `BCyPVJOGhgM-`,
  Is = `JpmP7DWHpp0-`,
  Ls = `q8jAq4KzxAM-`,
  Rs = `deh5s-2tc5M-`,
  zs = `mQfwtw56WrA-`,
  Bs = `S1RYAnxBfII-`,
  Vs = `B3xO2i-k6cM-`,
  Hs = `nZIJPOo7vBM-`,
  Us = `nbc1xcxJWEU-`,
  Ws = `lC5ou-9b3nc-`,
  Gs = `OUTrt07mRK4-`,
  Ks = `kZyobSpKcm8-`,
  qs = `Q2G049jKL5A-`,
  Js = `FvT0LzOkuOg-`,
  Ys = `R5xCQ-5jSoc-`,
  Xs = `RRmxXSqY2J4-`,
  Zs = `OEZsEKTEoHM-`,
  Qs = `pZUqA-PH2Go-`,
  $s = `_5FwT-TqGtrc-`,
  ec = `wO3Xgsj1Sm0-`,
  tc = `gBWKuzZ3gZU-`,
  nc = `AmH6OYf5Hbw-`,
  rc = [];
function ic(e) {
  let {
      eventModel: t,
      fnConfirm: n,
      fnHideModal: r,
      nMaxPerTeam: i,
      bAddingOrChangingSessions: a,
    } = e,
    o = V(j.LANGUAGE),
    [s, c] = G.useState({}),
    [l, u] = G.useState(!1),
    d = G.useCallback(
      (e) => {
        c({ ...s, ...e });
      },
      [s],
    ),
    f = Hn(t.clanSteamID.GetAccountID(), t.GID ?? ``, A.accountid),
    { data: p } = Xn(A.accountid),
    m = p?.realname ?? ``,
    h = p?.email ?? ``,
    g = p?.partners ?? rc,
    [_, v] = G.useState(void 0),
    [y, b] = G.useState(void 0),
    x = G.useMemo(() => {
      let e = [];
      return (
        y ?? e.push({ data: void 0, label: R(`#MeetSteam_ChoosePartner`) }),
        e.push(
          ...g.map((e, t) => ({ data: e.partnerid, label: e.partner_name })),
        ),
        e.push({ data: 0, label: R(`#MeetSteam_ChoosePartnerOther`) }),
        e
      );
    }, [g, y]);
  G.useEffect(() => {
    if (!f.isSuccess) return;
    let e = g.find((e) => e.partnerid == f.data.partner_id),
      t = f.data.partner_id === 0 ? 0 : e?.partnerid;
    b(t), v(t), c(f.data);
  }, [f.isSuccess, f.data, g]);
  let S = g?.length > 0,
    C = !S || y != null,
    w = C && y === 0;
  G.useEffect(() => {
    if (y == _ || (v(y), !S || !C)) return;
    let e,
      t = g.find((e) => e.partnerid == y);
    (e =
      w || !t
        ? {
            name: h?.length > 0 ? m : void 0,
            email_override: h?.length > 0 ? h : void 0,
            partner_id: 0,
          }
        : {
            name:
              t.partneruserrealname?.length > 0
                ? t.partneruserrealname
                : void 0,
            company: t.partner_name?.length > 0 ? t.partner_name : void 0,
            email_override:
              t.partneruseremail?.length > 0 ? t.partneruseremail : void 0,
            partner_id: t.partnerid,
          }),
      Object.values(e).some((e) => e != null) && d(ac(e));
  }, [C, w, S, y, _, g, h, m, d]);
  let T = f.isLoading || l,
    E = a
      ? R(`#MeetSteam_Register_title`, t.GetNameWithFallback(o) ?? ``)
      : R(`#MeetSteam_Unregister_title`),
    ee =
      !a ||
      (C &&
        !!s.name &&
        (!s.guest_names || s.guest_names.every((e) => e.length > 0)) &&
        !!s.email_override &&
        !!s.company);
  return (0, K.jsxs)(U, {
    active: !0,
    children: [
      T &&
        (0, K.jsx)(ln, {
          "aria-label": R(l ? `#Saving` : `#Loading`),
          bOKDisabled: !0,
          bHideCloseIcon: !0,
          onCancel: () => !1,
          children: (0, K.jsx)(D, {
            size: `medium`,
            position: `center`,
            string: R(l ? `#Saving` : `#Loading`),
          }),
        }),
      !T &&
        (0, K.jsx)(ft, {
          strTitle: E,
          onCancel: r,
          bOKDisabled: !ee,
          onOK: async () => {
            u(!0), await n(s), u(!1), f.refetch(), r();
          },
          children:
            a &&
            (0, K.jsxs)(K.Fragment, {
              children: [
                (0, K.jsx)(`div`, { children: R(`#MeetSteam_Reg_Intro`) }),
                (0, K.jsx)(`br`, {}),
                S &&
                  (0, K.jsx)(bn, {
                    label: R(`#MeetSteam_Reg_Preset`),
                    tooltip: R(`#MeetSteam_Reg_Preset_ttip`),
                    rgOptions: x,
                    selectedOption: y,
                    onChange: (e) => b(e.data),
                  }),
                C &&
                  (0, K.jsxs)(K.Fragment, {
                    children: [
                      (0, K.jsx)(z, {
                        type: `text`,
                        label: R(`#MeetSteam_Reg_Name`),
                        value: s.name || ``,
                        onChange: (e) => d({ name: e.currentTarget.value }),
                      }),
                      (0, K.jsx)(z, {
                        type: `text`,
                        label: R(`#MeetSteam_Reg_Email`),
                        value: s.email_override || ``,
                        mustBeEmail: !0,
                        onChange: (e) =>
                          d({ email_override: e.currentTarget.value }),
                      }),
                      (0, K.jsx)(z, {
                        type: `text`,
                        label: R(`#MeetSteam_Reg_Company`),
                        value: s.company || ``,
                        onChange: (e) => d({ company: e.currentTarget.value }),
                      }),
                      (0, K.jsx)(z, {
                        type: `text`,
                        label: R(`#MeetSteam_Reg_Game`),
                        value: s.game || ``,
                        onChange: (e) => d({ game: e.currentTarget.value }),
                      }),
                      i > 0 &&
                        (0, K.jsx)(bn, {
                          label: R(`#MeetSteam_Reg_GuestCount`),
                          tooltip: R(`#MeetSteam_Reg_GuestCount_ttip`),
                          rgOptions: Array.from({ length: i + 1 }).map(
                            (e, t) => ({ data: t, label: t }),
                          ),
                          selectedOption: (s.guests_registered ?? 1) - 1,
                          onChange: (e) => {
                            let t = s.guest_names ?? [];
                            d({
                              guests_registered: e.data + 1,
                              guest_names:
                                t.length > e.data
                                  ? t.slice(0, e.data)
                                  : mt(t, e.data, ``),
                            });
                          },
                        }),
                      (s.guests_registered ?? 0) > 1 &&
                        (0, K.jsxs)(`div`, {
                          children: [
                            (0, K.jsx)(`div`, {
                              children: R(`#MeetSteam_Reg_Others`),
                            }),
                            (0, K.jsx)(`br`, {}),
                            (s.guest_names ?? []).map((e, t) =>
                              (0, K.jsx)(
                                z,
                                {
                                  type: `text`,
                                  label: R(`#MeetSteam_Reg_Others_name`),
                                  value: e,
                                  onChange: (e) => {
                                    let n = [...(s.guest_names ?? [])];
                                    (n[t] = e.currentTarget.value),
                                      d({ guest_names: n });
                                  },
                                },
                                `guesname_` + t,
                              ),
                            ),
                          ],
                        }),
                      (0, K.jsx)(oc, {
                        eventModel: t,
                        oReg: s,
                        fnUpdateRegistration: d,
                      }),
                    ],
                  }),
              ],
            }),
        }),
    ],
  });
}
function ac(e) {
  return Object.fromEntries(Object.entries(e).filter(([e, t]) => t !== void 0));
}
function oc(e) {
  let { eventModel: t, oReg: n, fnUpdateRegistration: r } = e,
    i = Es(t.jsondata.meet_steam_groups ?? [], 2);
  return !i || i.length == 0
    ? null
    : (0, K.jsxs)(`div`, {
        children: [
          (0, K.jsx)(`h3`, { children: R(`#MeetSteam_Reg_Question_title`) }),
          (0, K.jsx)(`p`, { children: R(`#MeetSteam_Reg_Question_desc`) }),
          i.map((e) => {
            let i = t.jsondata.meet_steam_groups?.find((t) => t.group_id == e);
            return i
              ? (0, K.jsx)(
                  sc,
                  {
                    groupInfo: i,
                    oReg: n,
                    fnUpdateText: (t) => {
                      let i = n.pre_event_partner_questions
                          ? [...n.pre_event_partner_questions]
                          : [],
                        a = i.findIndex((t) => t.group_id == e);
                      a < 0
                        ? i.push({ group_id: e, question: t })
                        : (i[a] = { group_id: e, question: t }),
                        r({ pre_event_partner_questions: i });
                    },
                  },
                  `groupquestion` + e,
                )
              : null;
          }),
        ],
      });
}
function sc(e) {
  let { fnUpdateText: t, groupInfo: n, oReg: r } = e,
    i = V(j.LANGUAGE),
    [a, o] = h(() => [
      F.GetWithFallback(n.localized_session_title, i) ?? ``,
      r.pre_event_partner_questions?.find((e) => e.group_id == n.group_id)
        ?.question || ``,
    ]);
  return (0, K.jsxs)(`div`, {
    children: [
      (0, K.jsx)(en, { children: a }),
      (0, K.jsx)(`div`, {
        className: `DialogInput_Wrapper`,
        children: (0, K.jsx)(`textarea`, {
          value: o,
          className: I(`DialogTextInputBase`, `_DialogInputContainer`),
          cols: 80,
          rows: 3,
          placeholder: R(`#MeetSteam_Reg_Question_placeholder`),
          onChange: (e) => t(e.currentTarget.value),
        }),
      }),
    ],
  });
}
function cc(e) {
  let t = e.context.event,
    n = e.context.showErrorInfo,
    r = O(e.args, `group_id`),
    i = Number.parseInt(r),
    a = h(() => vc(t, i));
  if (!a || !t)
    return n
      ? (0, K.jsxs)(`div`, {
          children: [`Failed to find session group id `, i],
        })
      : null;
  if (t.clanSteamID.GetAccountID() != ee())
    return n
      ? (0, K.jsx)(`div`, { children: `Only support on special group` })
      : null;
  let o = No(e.context.bbcode, i),
    s = Po(e.context.bbcode, `meetsteamsessiongroup`, i);
  return (0, K.jsxs)(ps, {
    clanAccountID: t.clanSteamID.GetAccountID(),
    gidClanEvent: t.GID ?? ``,
    userAccountID: A.accountid,
    children: [
      o && (0, K.jsx)(lc, { eventModel: t }),
      (0, K.jsx)(dc, { groupData: a, eventModel: t }),
      (0, K.jsx)(_c, { eventModel: t, bIsLast: s }),
    ],
  });
}
function lc(e) {
  let { eventModel: t } = e;
  return Ts()
    ? (0, K.jsx)(uc, { eventModel: t, accountID: A.accountid })
    : null;
}
function uc(e) {
  let { eventModel: t, accountID: n } = e,
    r = Kn(t.GID ?? ``, n);
  return (0, K.jsx)(`div`, {
    children:
      !!r &&
      (0, K.jsxs)(K.Fragment, {
        children: [
          (0, K.jsx)(`div`, { children: R(`#MeetSteam_QR_CheckIn`) }),
          (0, K.jsx)(`img`, { src: r, alt: `` }),
        ],
      }),
  });
}
function dc(e) {
  let { groupData: t, eventModel: n } = e,
    r = Me(),
    i = Io(),
    a = Cs(),
    o = Yn(n.clanSteamID.GetAccountID(), n.GID ?? ``),
    s = (0, G.useMemo)(
      () =>
        t?.sessions &&
        [...t.sessions].sort(
          (e, t) => (e.rtime_start ?? 0) - (t.rtime_start ?? 0),
        ),
      [t?.sessions],
    ),
    { elLogInDialog: c, fnRequireLogIn: l } = bc(),
    u = Q(),
    d = h(() =>
      s?.reduce((e, n) => e.set(n.id ?? 0, _s(u, t.group_id, n.id)), new Map()),
    ),
    f = ks(),
    p = Hn(n.clanSteamID.GetAccountID(), n.GID ?? ``, A.accountid),
    m = p.isSuccess && !!p.data.allow_registration_if_full,
    g = o.data;
  if (o.isError)
    return (0, K.jsx)(`div`, {
      children: R(`#Error_ErrorCommunicatingWithNetwork`),
    });
  if (!g || (a && A.accountid))
    return (0, K.jsx)(D, {
      size: `medium`,
      position: `center`,
      string: R(`#Loading`),
    });
  let _ = (e) => f(t.group_id, e),
    v = t.group_visibility_tokens ?? [],
    y = i !== null && v.includes(i);
  return v.length > 0 && !y && !r
    ? null
    : (0, K.jsxs)(fc, {
        groupData: t,
        children: [
          s?.map((e, n) => {
            let r = g.find(
                (n) => n.group_id === t.group_id && n.session_id === e.id,
              ),
              i = d?.get(e.id ?? 0),
              a = n + 1 < s.length;
            return (0, K.jsxs)(
              G.Fragment,
              {
                children: [
                  (0, K.jsx)(`div`, {
                    className: Rs,
                    children: (0, K.jsx)(mc, {
                      sessionData: e,
                      onClick: () => l(() => _(e.id)),
                      nGuestReservations: r?.guest_count || 0,
                      eRegistrationStatus: i,
                      bAllowedToRegisterIfFull: m,
                    }),
                  }),
                  a && (0, K.jsx)(gc, {}),
                ],
              },
              `timecol_` + t.group_id + `_` + e.id,
            );
          }),
          c,
        ],
      });
}
function fc(e) {
  let { groupData: t, children: n } = e,
    r = V(j.LANGUAGE),
    i = F.GetWithFallback(t?.localized_session_title, r),
    a = F.GetWithFallback(t?.localized_session_description, r),
    o = F.GetWithFallback(t?.localized_intended_audience, r),
    s = F.GetWithFallback(t?.localized_sesssion_faq, r),
    c = Me(),
    [l, u] = (0, G.useState)(!1);
  return t
    ? (0, K.jsxs)(`div`, {
        className: I({
          [js]: !0,
          [Ns]: !1,
          [Ms]: c && (t.group_visibility_tokens?.length ?? 0) > 0,
        }),
        children: [
          !!i && (0, K.jsx)(`div`, { className: `_9pkUjSUWRSQ-`, children: i }),
          !!a && (0, K.jsx)(`div`, { className: `_44vexuSzOpI-`, children: a }),
          !!o &&
            (0, K.jsx)(`div`, {
              className: `Z3-m6-rkasQ-`,
              children: R(`#MeetSteam_Session_Audience`, o ?? ``),
            }),
          (0, K.jsx)(`div`, { className: Is, children: n }),
          !!s &&
            (0, K.jsxs)(K.Fragment, {
              children: [
                (0, K.jsxs)(`div`, {
                  className: `kWmpNwJ92-k-`,
                  children: [
                    (0, K.jsx)(Vn, { bExpanded: l, setExpanded: u }),
                    (0, K.jsx)(`div`, { children: R(`#MeetSteam_FAQ`) }),
                  ],
                }),
                l &&
                  (0, K.jsx)(`div`, {
                    className: `jvyIIEyjFZw-`,
                    children: (0, K.jsx)(Ee, { text: s ?? `` }),
                  }),
              ],
            }),
        ],
      })
    : null;
}
function pc(e, t, n, r) {
  let i = n || (e === 0 && t > 0) || e === 1 || e === 2 || e === 3,
    a = null,
    o = null;
  return (
    e == 1
      ? ((a = R(`#MeetSteam_Registered`)), (o = Gs))
      : e == 2
        ? ((a = R(`#MeetSteam_Registering`)), (o = Ws))
        : e == 3
          ? ((a = R(`#MeetSteam_Unegistering`)), (o = qs))
          : r && ((a = R(`#MeetSteam_Already`)), (o = Ks)),
    { bEnabled: i, strStatusClass: o, strStatusToken: a }
  );
}
function mc(e) {
  let {
      sessionData: t,
      onClick: n,
      nGuestReservations: r,
      eRegistrationStatus: i = 0,
      bAllowedToRegisterIfFull: a,
    } = e,
    o = h(() => t.max_capacity ?? 0),
    s = Math.max(0, o - (r || 0)),
    { strStatusClass: c, strStatusToken: l, bEnabled: u } = pc(i, s, !!a),
    { sDisplayTimeZone: d, rtime_start: f, rtime_end: p } = Un(t),
    m = Jn(f ?? 0, d),
    g = Gn(f ?? 0, p ?? 0, d);
  return (0, K.jsx)(K.Fragment, {
    children: (0, K.jsxs)(`div`, {
      className: I(zs, c),
      children: [
        (0, K.jsx)(`div`, {
          className: Js,
          children: (0, K.jsx)(`span`, { children: l }),
        }),
        (0, K.jsxs)(`button`, {
          className: I(Vs, Bs),
          disabled: !u,
          onClick: n,
          children: [
            (0, K.jsx)(`div`, { className: Hs, children: m }),
            (0, K.jsx)(`div`, { className: Us, children: g }),
          ],
        }),
        (0, K.jsx)(hc, { nAvailableSpace: s, bAllowedToRegisterIfFull: a }),
      ],
    }),
  });
}
function hc(e) {
  let { nAvailableSpace: t, bAllowedToRegisterIfFull: n } = e;
  return (0, K.jsx)(K.Fragment, {
    children:
      n ||
      (0, K.jsxs)(K.Fragment, {
        children: [
          ` `,
          t < 1
            ? (0, K.jsx)(`div`, {
                className: `oojf8t--dHM-`,
                children: R(`#MeetSteam_SoldOut`),
              })
            : (0, K.jsx)(`div`, {
                className: `LG2AAuUnr-g-`,
                children: Sn(`#MeetSteam_Spot`, t.toLocaleString(Gt())),
              }),
          ` `,
        ],
      }),
  });
}
function gc() {
  return (0, K.jsx)(`div`, { className: Ls, children: `◆` });
}
function _c(e) {
  let { eventModel: t, bIsLast: n } = e,
    [r, i] = G.useState(!1),
    [a, o] = G.useState(!1),
    s = Yn(t.clanSteamID.GetAccountID(), t.GID ?? ``),
    [c, l, u] = k(),
    { elLogInDialog: d, fnRequireLogIn: f } = bc(),
    p = As(),
    m = async (e) => {
      i(!0), (await p(e)) || l(), s.refetch(), i(!1);
    },
    g = Cs(),
    _ = r || g,
    v = ws(),
    y = Q(),
    b = xs(y),
    x = Ss(y),
    S = h(() =>
      gs(y).reduce((e, n) => {
        let r = vc(t, n),
          i = hs(y, r?.group_id),
          a = r?.sessions?.find((e) => e.id == i)?.max_per_team ?? 0;
        return Math.max(e, a);
      }, 1),
    );
  return (
    is(v, R(`#EventEditor_UnsavedChanges`)),
    (0, K.jsxs)(`div`, {
      className: I(Ys, n && v && `_1Uk08Y71bw4-`),
      children: [
        (0, K.jsx)(`p`, {
          children: R(
            x
              ? `#MeetSteam_UpdateRegistration_Desc`
              : `#MeetSteam_CompleteRegistration_Desc`,
          ),
        }),
        n &&
          (0, K.jsxs)(K.Fragment, {
            children: [
              !_ &&
                (0, K.jsx)(tn, {
                  disabled: !v,
                  onClick: () => f(() => o(!0)),
                  children: R(
                    x
                      ? `#MeetSteam_UpdateRegistration`
                      : `#MeetSteam_CompleteRegistration`,
                  ),
                }),
              _ &&
                (0, K.jsx)(D, {
                  size: `small`,
                  position: `center`,
                  string: R(`#Saving`),
                }),
              a &&
                (0, K.jsx)(ic, {
                  eventModel: t,
                  fnConfirm: m,
                  fnHideModal: () => o(!1),
                  nMaxPerTeam: S,
                  bAddingOrChangingSessions: b,
                }),
              c &&
                (0, K.jsx)(U, {
                  active: !0,
                  children: (0, K.jsx)(Tt, {
                    strTitle: R(`#Error_Generic`),
                    strDescription: R(`#MeetSteam_RegistrationFailed`),
                    closeModal: u,
                  }),
                }),
              d,
            ],
          }),
      ],
    })
  );
}
function vc(e, t) {
  return (e?.jsondata?.meet_steam_groups || [])?.find((e) => e.group_id == t);
}
function yc(e, t) {
  return (e?.jsondata?.meet_steam_schedules || [])?.find(
    (e) => e.schedule_id == t,
  );
}
function bc() {
  let { elDialogElement: e, fnShowLogonDialog: t } = de(
    R(`#EventDisplay_Share_NotLoggedIn_Description`),
  );
  return {
    elLogInDialog: e,
    fnRequireLogIn: (e) => {
      A.logged_in ? e() : t();
    },
  };
}
function xc(e) {
  let t = e.context.event,
    n = e.context.showErrorInfo,
    r = O(e.args, `schedule_id`),
    i = Number.parseInt(r),
    a = h(() => yc(t, i));
  if (!a || !t)
    return n
      ? (0, K.jsxs)(`div`, {
          children: [`Failed to find session schedule id `, i],
        })
      : null;
  if (t.clanSteamID.GetAccountID() != ee())
    return n
      ? (0, K.jsx)(`div`, { children: `Only support on special group` })
      : null;
  let o = Po(e.context.bbcode, `meetsteamscheduleview`, i);
  return (0, K.jsxs)(ps, {
    clanAccountID: t.clanSteamID.GetAccountID(),
    gidClanEvent: t.GID ?? ``,
    userAccountID: A.accountid,
    children: [
      (0, K.jsx)(Sc, { scheduleData: a, eventModel: t }),
      (0, K.jsx)(_c, { eventModel: t, bIsLast: o }),
    ],
  });
}
function Sc(e) {
  let { eventModel: t } = e,
    n = ks(),
    r = Cs(),
    i = Yn(t.clanSteamID.GetAccountID(), t.GID ?? ``),
    a = Hn(t.clanSteamID.GetAccountID(), t.GID ?? ``, A.accountid),
    o = i.data;
  return i.isError
    ? (0, K.jsx)(`div`, { children: R(`#Error_ErrorCommunicatingWithNetwork`) })
    : !o || (r && A.accountid)
      ? (0, K.jsx)(D, {
          size: `medium`,
          position: `center`,
          string: R(`#Loading`),
        })
      : (0, K.jsx)(Cc, {
          ...e,
          fnOnClick: n,
          rgAvailability: o,
          bAllowedToRegisterIfFull: a.data?.allow_registration_if_full,
        });
}
function Cc(e) {
  let {
      eventModel: t,
      scheduleData: n,
      bAllowedToRegisterIfFull: r,
      fnOnClick: i,
      rgAvailability: a,
    } = e,
    o = je(),
    s = Io(),
    c = kt(),
    [l, u, d] = h(() => [
      t.jsondata.meet_steam_groups,
      n.in_person_time_zone ?? `America/Los_Angeles`,
      n.location_type,
    ]),
    [f, p, m] = (0, G.useMemo)(() => {
      if (!l) return [new Map(), new Map(), []];
      let e = new Map(),
        t = new Map();
      for (let t of l) {
        let n = t.group_visibility_tokens ?? [],
          r = s !== null && n.includes(s);
        if (!(n.length > 0 && !r && !o))
          for (let n of t.sessions) {
            let r = (
                d == `in_person`
                  ? J.default.unix(n.rtime_start ?? 0).tz(u)
                  : J.default.unix(n.rtime_start ?? 0).tz(c)
              ).format(`YYYY-MM-DD`),
              i = e.get(r);
            i || ((i = []), e.set(r, i)), i.push({ group: t, session: n });
          }
      }
      for (let e of n.session_breaks || []) {
        let n = (
            d == `in_person`
              ? J.default.unix(e.rtime_start ?? 0).tz(u)
              : J.default.unix(e.rtime_start ?? 0).tz(c)
          ).format(`YYYY-MM-DD`),
          r = t.get(n);
        r || ((r = []), t.set(n, r)), r.push(e);
      }
      for (let t of e.values())
        t.sort(
          (e, t) => (e.session.rtime_start ?? 0) - (t.session.rtime_start ?? 0),
        );
      return [e, t, Array.from(e.keys()).sort()];
    }, [l, s, o, d, u, c, n.session_breaks]);
  return l
    ? (0, K.jsx)(K.Fragment, {
        children: m.map((e) => {
          let t = f.get(e);
          return (0, K.jsx)(
            `div`,
            {
              className: Xs,
              children: (0, K.jsx)(wc, {
                scheduleData: n,
                bAllowedToRegisterIfFull: !!r,
                fnOnClick: i,
                rgDayGroupSessions: t ?? [],
                rgBreakSessions: p.get(e) || [],
                rgAvailability: a ?? [],
              }),
            },
            `day_` + e,
          );
        }),
      })
    : (0, K.jsx)(`div`, {
        children: `No Meet Steam Events; please create some first.`,
      });
}
function wc(e) {
  let {
      scheduleData: t,
      rgDayGroupSessions: n,
      rgBreakSessions: r,
      bAllowedToRegisterIfFull: i,
      fnOnClick: a,
      rgAvailability: o,
    } = e,
    s = (0, G.useMemo)(() => {
      let e = [];
      for (let t of n)
        e.length == 0 ||
        e[e.length - 1][0].session.rtime_start != t.session.rtime_start
          ? e.push([t])
          : e[e.length - 1].push(t);
      return e;
    }, [n]),
    { sDisplayTimeZone: c, rtime_start: l } = Un(n[0].session),
    u = Jn(l ?? 0, c);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(`h2`, { className: Zs, children: u }),
      r
        .filter((e) => (e.rtime_end ?? 0) <= (s[0][0].session.rtime_start ?? 0))
        .map((e) =>
          (0, K.jsx)(
            Tc,
            { scheduleData: t, breakSession: e },
            `breaks_${t.schedule_id}_${e.break_id}`,
          ),
        ),
      s.map((e, n) => {
        let c = [];
        if (n + 1 < s.length) {
          let t = e[0].session.rtime_start ?? 0,
            i = s[n + 1][0].session.rtime_end ?? 0;
          c = r.filter(
            (e) => t < (e.rtime_start ?? 0) && (e.rtime_end ?? 0) < i,
          );
        }
        return (0, K.jsxs)(
          G.Fragment,
          {
            children: [
              (0, K.jsx)(Ec, {
                bAllowedToRegisterIfFull: i,
                fnOnClick: a,
                scheduleData: t,
                rgSlotSessions: e,
                rgAvailability: o,
              }),
              c.map((e) =>
                (0, K.jsx)(
                  Tc,
                  { scheduleData: t, breakSession: e },
                  `breaks_${t.schedule_id}_${e.break_id}`,
                ),
              ),
            ],
          },
          `start_` + e[0].session.rtime_start,
        );
      }),
      r
        .filter(
          (e) =>
            (e.rtime_start ?? 0) >= (s[s.length - 1][0].session.rtime_end ?? 0),
        )
        .map((e) =>
          (0, K.jsx)(
            Tc,
            { scheduleData: t, breakSession: e },
            `breaks_${t.schedule_id}_${e.break_id}`,
          ),
        ),
    ],
  });
}
function Tc(e) {
  let { scheduleData: t, breakSession: n } = e,
    r = V(j.LANGUAGE),
    i = h(() => F.GetWithFallback(n.localized_break_description, r) ?? ``),
    a = h(() => ({
      rtime_start: n.rtime_start,
      rtime_end: n.rtime_end,
      location_type: t.location_type,
      in_person_time_zone: t.in_person_time_zone,
    }));
  return (0, K.jsxs)(`div`, {
    className: Qs,
    children: [
      (0, K.jsx)(Dc, { session: a }),
      (0, K.jsx)(`div`, { children: i }),
    ],
  });
}
function Ec(e) {
  let {
    scheduleData: t,
    rgSlotSessions: n,
    bAllowedToRegisterIfFull: r,
    fnOnClick: i,
    rgAvailability: a,
  } = e;
  return (0, K.jsxs)(`div`, {
    className: Qs,
    children: [
      (0, K.jsx)(Dc, { session: n[0].session }),
      (0, K.jsx)(`div`, {
        className: tc,
        children: n.map((e) =>
          (0, K.jsx)(
            Oc,
            {
              bAllowedToRegisterIfFull: r,
              fnOnClick: i,
              session: e,
              rgAvailability: a,
            },
            `entry_${e.group.group_id}_${e.session.id}`,
          ),
        ),
      }),
    ],
  });
}
function Dc(e) {
  let { session: t } = e,
    { sDisplayTimeZone: n, rtime_start: r, rtime_end: i } = Un(t),
    a = Jn(r ?? 0, n),
    o = Gn(r ?? 0, i ?? 0, n);
  return (0, K.jsxs)(`div`, {
    className: $s,
    children: [
      (0, K.jsx)(`div`, { children: o }),
      (0, K.jsx)(`div`, { className: ec, children: a }),
    ],
  });
}
function Oc(e) {
  let {
      session: t,
      bAllowedToRegisterIfFull: n,
      fnOnClick: r,
      rgAvailability: i,
    } = e,
    a = V(j.LANGUAGE),
    [o, s, c, l] = h(() => [
      F.GetWithFallback(t.group.localized_session_title, a) ?? ``,
      F.GetWithFallback(t.group.localized_intended_audience, a) ?? ``,
      F.GetWithFallback(t.group.localized_sesssion_faq, a) ?? ``,
      F.GetWithFallback(t.group.localized_session_description, a) ?? ``,
    ]),
    [u, d, f] = k(!1),
    p = Q(),
    [m, g, _] = h(() => [
      _s(p, t.group.group_id, t.session.id),
      vs(p, t.group.group_id, t.session.id),
      ys(p, t.group.group_id),
    ]),
    v = i?.find(
      (e) => e.group_id === t.group.group_id && e.session_id === t.session.id,
    )?.guest_count,
    y = Math.max(0, (t.session.max_capacity ?? 0) - (v || 0)),
    { strStatusClass: b, strStatusToken: x, bEnabled: S } = pc(m, y, n, g),
    C = g && _ ? t.group.sessions.find((e) => e.id == _)?.rtime_start : void 0;
  return (0, K.jsx)(xt, {
    toolTipContent: C ? R(`#MeetSteam_AlreadyReg`, hn(C), Jt(C)) : void 0,
    children: (0, K.jsxs)(`div`, {
      className: I(zs, b),
      children: [
        (0, K.jsx)(`div`, {
          className: Js,
          children: (0, K.jsx)(`span`, { children: x }),
        }),
        (0, K.jsxs)(`div`, {
          className: Bs,
          children: [
            (0, K.jsx)(`div`, { className: Ps, children: o }),
            s &&
              (0, K.jsx)(`div`, {
                className: `Z3-m6-rkasQ-`,
                children: R(`#MeetSteam_Session_Audience`, s),
              }),
            (0, K.jsx)(`button`, {
              type: `button`,
              className: Fs,
              onClick: d,
              children: R(`#MeetSteam_Session_Details`),
            }),
            (0, K.jsx)(`div`, {
              className: nc,
              children: (0, K.jsx)(H, {
                onClick: () => {
                  r && r(t.group.group_id, t.session.id);
                },
                disabled: !S,
                children: R(m == 1 ? `#Button_Unselect` : `#Button_Select`),
              }),
            }),
          ],
        }),
        (0, K.jsx)(hc, { nAvailableSpace: y, bAllowedToRegisterIfFull: n }),
        (0, K.jsx)(U, {
          active: u,
          children: (0, K.jsxs)(ft, {
            strTitle: o,
            bAlertDialog: !0,
            bAllowFullSize: !0,
            closeModal: f,
            children: [
              (0, K.jsx)(`div`, { children: s }),
              (0, K.jsx)(`div`, { children: l }),
              !!c &&
                (0, K.jsxs)(K.Fragment, {
                  children: [
                    (0, K.jsx)(`div`, { children: R(`#MeetSteam_FAQ`) }),
                    (0, K.jsx)(Ee, { text: c }),
                  ],
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
function kc(e) {
  let t = Number.parseInt(O(e.args, `id`)) || 0,
    n = (O(e.args, `visible`) || `false`).toLowerCase() === `true`,
    r = e.context.showErrorInfo,
    i = _(t),
    { data: a, isPending: o } = un(i);
  if (!t)
    return r
      ? (0, K.jsx)(`div`, { children: `Error: PackageID Not Set` })
      : null;
  if (o) return null;
  let s =
    a?.success == 1
      ? !!(a.visible && a.best_purchase_option)
      : !a?.unvailable_for_country_restriction;
  return (!s && !n) || (s && n)
    ? (0, K.jsx)(K.Fragment, { children: e.children })
    : null;
}
function Ac() {
  return a(
    {
      exportFn: void 0,
      file: void 0,
      dataURL: void 0,
      uploadFileName: ``,
      displayFileName: void 0,
      sha1: ``,
      hmac: ``,
      timestamp: 0,
      imageWidth: 0,
      imageHeight: 0,
      fileInfo: void 0,
      uploadInfo: void 0,
      eUploadState: 0,
      uploadProgress: 0,
      strErrorDescription: void 0,
    },
    {
      exportFn: !1,
      file: n.ref,
      uploadFileName: !1,
      displayFileName: !1,
      sha1: !1,
      hmac: !1,
      timestamp: !1,
      fileInfo: !1,
      uploadInfo: !1,
    },
  );
}
var jc = class {
  m_Callbacks;
  m_fileUploadProps = Ac();
  m_onComplete;
  constructor(e) {
    l(this, {
      SetUploadFileError: r,
      StartFileExportToUpload: r,
      SetImageFileToUpload: r,
      SetOtherFileToUpload: r,
      SetFileToUpload: r,
      RetryFileUpload: r,
      BeginFileUpload: r,
      DoFileUpload: r,
      CommitFileUpload: r,
      ClearFileUploadError: r,
      Reset: r,
    }),
      (this.m_Callbacks = e);
  }
  get file_upload_props() {
    return this.m_fileUploadProps;
  }
  get file_upload_data_url() {
    return this.m_fileUploadProps.dataURL;
  }
  get file() {
    return this.m_fileUploadProps.file;
  }
  LogFileUploadMessage(e) {
    this.m_Callbacks.LogFileUploadMessage &&
      this.m_Callbacks.LogFileUploadMessage(e);
  }
  SetUploadFileError(e, t) {
    (this.m_fileUploadProps.eUploadState = e),
      (this.m_fileUploadProps.strErrorDescription = t),
      (this.m_fileUploadProps.displayFileName = void 0);
  }
  async StartFileExportToUpload(e, t = {}) {
    let { displayFilename: n, info: r, onComplete: i } = t;
    (this.m_fileUploadProps.eUploadState = 7),
      (this.m_fileUploadProps.uploadProgress = 0),
      (this.m_onComplete = i),
      (this.m_fileUploadProps.fileInfo = r),
      this.SetFileToUpload(e),
      (this.m_fileUploadProps.displayFileName = n);
  }
  async SetImageFileToUpload(e, t = {}) {
    let { processor: n = Mc, info: r } = t;
    if (!e) {
      this.SetFileToUpload(void 0);
      return;
    }
    this.m_fileUploadProps.fileInfo = r;
    let i = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
    if (e.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
      this.SetUploadFileError(
        4,
        R(
          `#Chat_Settings_Error_ChatFileTooLarge_dynamic`,
          i,
          this.m_Callbacks.GetMaxFileSizeMB(),
        ),
      );
      return;
    }
    let a = [
        `jpg`,
        `jpeg`,
        `png`,
        `gif`,
        `webm`,
        `mpg`,
        `mp4`,
        `mpeg`,
        `ogv`,
        `webp`,
        `avif`,
      ],
      o = e.name.split(`.`).pop()?.toLowerCase() ?? ``;
    if (a.indexOf(o) == -1) {
      let e = o || i;
      this.SetUploadFileError(
        5,
        R(`#Chat_Settings_Error_ChatUploadFileTypeNotSupported`, e),
      );
      return;
    }
    let s = await n(e);
    this.SetFileToUpload(s.file),
      (this.m_fileUploadProps.imageHeight = s.height),
      (this.m_fileUploadProps.imageWidth = s.width);
  }
  async SetOtherFileToUpload(e, t = {}) {
    if (!e) {
      this.SetFileToUpload(void 0);
      return;
    }
    this.m_fileUploadProps.fileInfo = t.info;
    let n = this.m_Callbacks.GetFileNameOverride?.() ?? e.name;
    if (e.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
      this.SetUploadFileError(
        4,
        R(
          `#Chat_Settings_Error_ChatFileTooLarge_dynamic`,
          n,
          this.m_Callbacks.GetMaxFileSizeMB(),
        ),
      );
      return;
    }
    let r = [`zip`],
      i = e.name.split(`.`).pop()?.toLowerCase() ?? ``;
    if (r.indexOf(i) == -1) {
      let e = i || n;
      this.SetUploadFileError(5, R(`#Chat_Settings_Error_FileTypeNotZip`, e));
    } else this.SetFileToUpload(e);
  }
  SetFileToUpload(e) {
    if (
      ((this.m_fileUploadProps.file = void 0),
      (this.m_fileUploadProps.dataURL = void 0),
      (this.m_fileUploadProps.hmac = ``),
      (this.m_fileUploadProps.sha1 = ``),
      (this.m_fileUploadProps.imageWidth = 0),
      (this.m_fileUploadProps.imageHeight = 0),
      (this.m_fileUploadProps.displayFileName = void 0),
      !e)
    ) {
      this.m_fileUploadProps.eUploadState = 0;
      return;
    }
    let t = ``;
    if (typeof e == `function`)
      (this.m_fileUploadProps.file = void 0),
        (this.m_fileUploadProps.exportFn = e);
    else {
      (this.m_fileUploadProps.file = e),
        (this.m_fileUploadProps.exportFn = void 0);
      try {
        t = URL.createObjectURL(e);
      } catch (e) {
        console.error(`Failed to created object URL from file: ${e}`);
      }
      (this.m_fileUploadProps.displayFileName =
        this.m_fileUploadProps.file.name),
        (this.m_fileUploadProps.uploadFileName =
          window.performance.now() + `_` + this.m_fileUploadProps.file.name);
    }
    this.m_fileUploadProps.eUploadState = 1;
    let n = ``;
    for (; n.length < 40; ) n += Math.floor(Math.random() * 16).toString(16);
    (this.m_fileUploadProps.dataURL = t),
      (this.m_fileUploadProps.sha1 = n),
      (this.m_fileUploadProps.hmac = ``),
      (this.m_fileUploadProps.timestamp = 0);
  }
  async RetryFileUpload() {
    return this.BeginFileUpload();
  }
  async BeginFileUpload(e) {
    if (
      ((this.m_fileUploadProps.uploadProgress = 0),
      this.m_fileUploadProps.exportFn)
    ) {
      this.m_fileUploadProps.eUploadState = 7;
      let { eResult: e, file: t } = await this.m_fileUploadProps.exportFn(
        (e) => {
          c(() => {
            this.m_fileUploadProps.uploadProgress = e * 0.5;
          });
        },
      );
      if (e != 1 || !t)
        return (
          this.SetUploadFileError(3, R(`#Chat_Settings_Error_ExportFailed`)),
          new Response()
        );
      (this.m_fileUploadProps.file = t),
        (this.m_fileUploadProps.uploadFileName =
          window.performance.now() + `_` + t.name);
    }
    let t = this.m_fileUploadProps.file;
    if (!t)
      throw (
        (xn(!1, `Must SetImageFileToUpload before calling BeginFileUpload`),
        Error(`Invalid State`))
      );
    (this.m_fileUploadProps.eUploadState = 2),
      (this.m_fileUploadProps.uploadInfo = e);
    let n = new FormData();
    n.append(`sessionid`, vn()),
      n.append(`l`, j.LANGUAGE),
      n.append(`file_size`, t.size.toString()),
      n.append(`file_name`, this.m_fileUploadProps.uploadFileName),
      n.append(`file_sha`, this.m_fileUploadProps.sha1),
      n.append(
        `file_image_width`,
        this.m_fileUploadProps.imageWidth.toString(),
      ),
      n.append(
        `file_image_height`,
        this.m_fileUploadProps.imageHeight.toString(),
      ),
      n.append(`file_type`, t.type),
      this.m_Callbacks.PopulateBeginFileUploadFormData &&
        this.m_Callbacks.PopulateBeginFileUploadFormData(
          n,
          this.file_upload_props.uploadInfo,
          this.file_upload_props.fileInfo,
        );
    try {
      let e = await fetch(
          this.m_Callbacks.GetBeginFileUploadURL() + `?l=${j.LANGUAGE}`,
          { method: `POST`, body: n, credentials: `include` },
        ),
        r;
      try {
        r = await e.json();
      } catch {}
      if (!e.ok) {
        let t = ``;
        throw (
          (c(() => {
            (this.m_fileUploadProps.eUploadState = 3),
              this.LogFileUploadMessage(e),
              (t = r?.message
                ? r?.message
                : R(`#Chat_Settings_Error_ServerError`)),
              (this.m_fileUploadProps.strErrorDescription = R(
                `#Chat_Upload_ErrorStart`,
                t,
              ));
          }),
          t)
        );
      }
      if (!r || !r.result) throw Error();
      return (
        (this.m_fileUploadProps.timestamp = r.timestamp),
        (this.m_fileUploadProps.hmac = r.hmac),
        this.DoFileUpload(r.result, t)
      );
    } catch (e) {
      let t = e || R(`#ConnectionTrouble_FailedToConnect`);
      throw (
        (c(() => {
          (this.m_fileUploadProps.eUploadState = 3),
            (this.m_fileUploadProps.strErrorDescription = R(
              `#Chat_Upload_ErrorStart`,
              t,
            ));
        }),
        t)
      );
    }
  }
  async DoFileUpload(e, t) {
    let n = e.use_https ? `https://` : `http://`;
    n += e.url_host + e.url_path;
    let r = {};
    for (let t of e.request_headers) {
      if (
        t.name.toLowerCase() == `content-length` ||
        t.name.toLowerCase() == `host`
      )
        continue;
      let e = t.name;
      e.toLowerCase() === `content-type` && (e = `Content-Type`),
        (r[e] = t.value);
    }
    let i = {
      onUploadProgress: (e) => {
        let t = !!this.m_fileUploadProps.exportFn,
          n = t ? 50 : 0,
          r = t ? 50 : 100,
          i = n + (e.loaded / e.total) * r;
        i > this.m_fileUploadProps.uploadProgress &&
          c(() => {
            this.m_fileUploadProps.uploadProgress = i;
          });
      },
      headers: r,
      transformRequest: [(e) => e],
    };
    try {
      return (
        await ma.default.put(n, t, i), this.CommitFileUpload(!0, e.ugcid, t)
      );
    } catch (n) {
      throw (
        (this.LogFileUploadMessage(n.response),
        c(() => {
          (this.m_fileUploadProps.strErrorDescription = R(
            `#Chat_Upload_ErrorCloud`,
          )),
            (this.m_fileUploadProps.eUploadState = 3),
            (this.m_fileUploadProps.uploadProgress = 0);
        }),
        this.CommitFileUpload(!1, e.ugcid, t),
        this.m_fileUploadProps.strErrorDescription)
      );
    }
  }
  async CommitFileUpload(e, t, n) {
    let r = this.m_fileUploadProps.sha1,
      i = new FormData();
    i.append(`sessionid`, vn()),
      i.append(`l`, j.LANGUAGE),
      i.append(`file_name`, this.m_fileUploadProps.uploadFileName),
      i.append(`file_sha`, r),
      i.append(`success`, e ? `1` : `0`),
      i.append(`ugcid`, t),
      i.append(`file_type`, n.type),
      i.append(
        `file_image_width`,
        this.m_fileUploadProps.imageWidth.toString(),
      ),
      i.append(
        `file_image_height`,
        this.m_fileUploadProps.imageHeight.toString(),
      ),
      i.append(`timestamp`, this.m_fileUploadProps.timestamp.toString()),
      i.append(`hmac`, this.m_fileUploadProps.hmac),
      this.m_Callbacks.PopulateCommitFileUploadFormData(
        i,
        this.file_upload_props.uploadInfo,
        this.file_upload_props.fileInfo,
      );
    try {
      let t = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
        method: `POST`,
        body: i,
        credentials: `include`,
      });
      return (
        e
          ? ((this.m_fileUploadProps.uploadProgress = 0),
            (this.m_fileUploadProps.eUploadState = 6),
            this.m_onComplete && this.m_onComplete(1, n.size))
          : ((this.m_fileUploadProps.eUploadState = 3),
            this.m_onComplete && this.m_onComplete(2, n.size)),
        t
      );
    } catch (t) {
      if (!e) return;
      let r = ``;
      throw (
        (c(() => {
          if (
            (this.LogFileUploadMessage(t),
            (this.m_fileUploadProps.uploadProgress = 0),
            (this.m_fileUploadProps.eUploadState = 3),
            t.response)
          ) {
            let e = t.response.data;
            t.response.status,
              e && e.success,
              (r = e.message
                ? e.message
                : R(`#Chat_Settings_Error_ServerError`));
          } else r = R(`#ConnectionTrouble_FailedToConnect`);
          (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${r}`),
            this.m_onComplete && this.m_onComplete(2, n.size);
        }),
        r)
      );
    }
  }
  ClearFileUploadError() {
    (this.m_fileUploadProps.eUploadState == 3 ||
      this.m_fileUploadProps.eUploadState == 4 ||
      this.m_fileUploadProps.eUploadState == 5) &&
      this.Reset();
  }
  Reset() {
    this.SetFileToUpload(void 0);
  }
};
function Mc(e) {
  return new Promise((t) => {
    let n = new FileReader();
    (n.onload = () => {
      let r = e,
        i = n.result,
        a = Nc(i),
        o = new Blob([a], { type: e.type });
      if (o) {
        let t = o;
        (t.lastModifiedDate = new Date(e.lastModified)),
          (t.name = e.name),
          (r = t);
      }
      if (e.type.indexOf(`image`) == 0) {
        let n = new Image();
        (n.src = URL.createObjectURL(e)),
          (n.onload = (e) => {
            t({ file: r, width: n.width, height: n.height });
          });
      } else t({ file: r, width: 0, height: 0 });
    }),
      n.readAsArrayBuffer(e);
  });
}
function Nc(e) {
  let t = new DataView(e),
    n = 0,
    r = 0,
    i = [],
    a = 0;
  if (t.getUint16(n) == 65496) {
    n += 2;
    let o = t.getUint16(n);
    for (n += 2; n < t.byteLength && n < 131072; ) {
      if (o == 65505)
        (i[a] = { recess: r, offset: n - 2 }), (r = n + t.getUint16(n)), a++;
      else if (o == 65498) break;
      (n += t.getUint16(n)), (o = t.getUint16(n)), (n += 2);
    }
    let s = e.byteLength - r;
    if (
      (i.forEach((e) => {
        s += e.offset - e.recess;
      }),
      s === e.byteLength)
    )
      return e;
    let c = new Uint8Array(s);
    if (i.length > 0) {
      let t = 0;
      i.forEach((n) => {
        let r = n.offset - n.recess;
        c.set(new Uint8Array(e.slice(n.recess, n.offset)), t), (t += r);
      }),
        c.set(new Uint8Array(e.slice(r)), t);
    }
    return c.buffer;
  }
  return e;
}
var Pc = `PA1GbfX4Jak-`;
function Fc(e) {
  let { fileUploadManager: t } = e,
    n = (0, G.useRef)(null);
  return (0, K.jsxs)(`div`, {
    className: Pc,
    children: [
      (0, K.jsx)(`input`, {
        type: `file`,
        accept: `.jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4`,
        style: { display: `none` },
        name: `fileupload`,
        ref: n,
        onChange: (e) => {
          let n = e.currentTarget.files;
          n?.length &&
            (t.SetImageFileToUpload(n[0]), (e.currentTarget.value = ``));
        },
      }),
      (0, K.jsx)(Cn, {
        type: `button`,
        title: R(`#Button_Upload`),
        onOKActionDescription: R(`#Button_Upload`),
        onClick: () => n.current?.click(),
        children: (0, K.jsx)(Ut, {}),
      }),
    ],
  });
}
var Ic = `lcuTEjXO8Io-`,
  Lc = `YEGC6ugnl7c-`,
  Rc = `_2B1-NsNzm7s-`,
  zc = `EP9i3QuHHYI-`,
  Bc = `PIibQBztc3I-`,
  Vc = `_5bCd1bDYPEM-`,
  Hc = `_80jOlfR7esU-`;
function Uc(e) {
  let { fileUploadManager: t } = e,
    n = h(() => t.file_upload_props.eUploadState);
  return n == 1
    ? (0, K.jsx)(Wc, { fileUploadManager: t })
    : n == 3 || n == 5 || n == 4
      ? (0, K.jsx)(Kc, { fileUploadManager: t })
      : n == 0
        ? null
        : (0, K.jsx)(Gc, { fileUploadManager: t });
}
function Wc(e) {
  let { fileUploadManager: t } = e,
    n = t.file;
  return n
    ? (0, K.jsxs)(`div`, {
        className: Ic,
        children: [
          n.type.indexOf(`image`) != -1 &&
            (0, K.jsx)(`img`, {
              className: `e8e5WRBahao-`,
              src: t.file_upload_data_url,
            }),
          n.type.indexOf(`video`) != -1 && (0, K.jsx)(On, {}),
          (0, K.jsxs)(`div`, { className: Lc, children: [`'`, n.name, `'`] }),
          (0, K.jsx)(`div`, {
            className: Rc,
            onClick: () => t.Reset(),
            children: (0, K.jsx)(Mn, {}),
          }),
          (0, K.jsx)(tn, {
            className: zc,
            onClick: async () => {
              await t.BeginFileUpload(), t.Reset();
            },
            children: R(`#Button_Upload`),
          }),
        ],
      })
    : null;
}
function Gc(e) {
  let { fileUploadManager: t } = e,
    [n, r, i] = h(() => [
      t.file_upload_props.file,
      t.file_upload_props.displayFileName,
      t.file_upload_props.uploadProgress,
    ]),
    a = n ? R(`#Uploading_Item`, r ?? ``) : ``,
    o = { width: i + `%` };
  return (0, K.jsxs)(`div`, {
    className: Bc,
    children: [
      (0, K.jsx)(`div`, { className: Hc, children: a }),
      (0, K.jsx)(`div`, {
        className: I(Vc, `DialogProgressBar_ProgressBarContainer`),
        children: (0, K.jsx)(`div`, {
          className: `DialogProgressBar_Value`,
          style: o,
        }),
      }),
    ],
  });
}
function Kc(e) {
  let { fileUploadManager: t } = e,
    [n, r, i] = h(() => [
      t.file_upload_props.strErrorDescription,
      t.file_upload_props.displayFileName,
      t.file_upload_props.eUploadState,
    ]),
    a = r ? R(`#Uploading_Item`, r) : ``,
    o = n || R(`#Chat_Upload_ErrorCloud`);
  return (0, K.jsxs)(`div`, {
    className: Bc,
    children: [
      (0, K.jsx)(`div`, { className: Hc, children: a }),
      (0, K.jsx)(`div`, { className: void 0, children: o }),
      (0, K.jsx)(`div`, {
        className: void 0,
        children: (0, K.jsxs)(qt, {
          className: `DialogLayout_NoMinWidth`,
          children: [
            i == 3 &&
              (0, K.jsx)(tn, {
                onClick: async () => {
                  await t.RetryFileUpload(), t.Reset();
                },
                children: R(`#Chat_Upload_ErrorAction_Retry`),
              }),
            (0, K.jsx)(H, {
              onClick: () => t.ClearFileUploadError(),
              children: R(`#Chat_Upload_ErrorAction_Close`),
            }),
          ],
        }),
      }),
    ],
  });
}
function qc(e) {
  let { showErrorInfo: t, event: n } = e.context,
    r = n?.clanSteamID.GetAccountID() ?? 0;
  return r == 39049601 ||
    r == 41316928 ||
    (j.EUNIVERSE == 2 && r == 20) ||
    (j.EUNIVERSE == 1 && r == 4)
    ? (0, K.jsx)(gt, { children: (0, K.jsx)(Jc, { clanAccountID: r }) })
    : t
      ? (0, K.jsx)(`div`, { children: R(`#CloudUpload_NotSupport`) })
      : null;
}
function Jc(e) {
  let { clanAccountID: t } = e,
    [n] = G.useState(() => new jc(Yc(t)));
  return (0, K.jsxs)(`div`, {
    children: [
      (0, K.jsx)(Fc, { fileUploadManager: n }),
      (0, K.jsx)(Uc, { fileUploadManager: n }),
    ],
  });
}
function Yc(e) {
  return {
    PopulateBeginFileUploadFormData: (t) => {
      t.append(`clan_account_id`, `` + e);
    },
    PopulateCommitFileUploadFormData: (t) => {
      t.append(`clan_account_id`, `` + e);
    },
    GetBeginFileUploadURL: () =>
      j.STORE_BASE_URL + `saleaction/ajaxbeginfileupload`,
    GetCommitFileUploadURL: () =>
      j.STORE_BASE_URL + `saleaction/ajaxcommitfileupload`,
    LogFileUploadMessage: (e) => {
      console.log(`UploadFileButton: `, e);
    },
    GetMaxFileSizeMB: () => 100,
  };
}
function Xc(e, t, n) {
  let r = Zc(e, t);
  return (0, G.useMemo)(() => {
    let e = r.results.find((e) => n == e.unique_id);
    return {
      bLoading: r.bLoading,
      success: r.success,
      userPollData: e,
      error_message: r.error_message,
      userPollSubmitData: r.userPollSubmitData,
    };
  }, [r, n]);
}
function Zc(e, t) {
  let n = p({
    queryKey: el(e, t),
    queryFn: async () =>
      $c(
        await (
          await fetch(nl(e, t, !1), { method: `GET`, credentials: `include` })
        ).json(),
      ),
    placeholderData: {
      results: [],
      success: 10,
      bLoading: !0,
      userPollSubmitData: { user_poll_option_votes: [] },
    },
  });
  return n.data
    ? n.data
    : {
        results: [],
        success: 10,
        bLoading: !0,
        userPollSubmitData: { user_poll_option_votes: [] },
      };
}
function Qc(e, t) {
  let n = o();
  return f({
    mutationKey: [`useSetPartnerEventCastVoteUserPoll`, e.GetAccountID(), t],
    mutationFn: async (n) => {
      let r = { votes: n.votes },
        i = await fetch(nl(e, t, !0), {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify(r),
          credentials: `include`,
        });
      if (!i.ok) throw Error(`Server returned ${i.status}`);
      return await i.json();
    },
    onSuccess: (r, i) => {
      if (r.success == 1) n.setQueryData(el(e, t), () => $c(r));
      else {
        let i = n.getQueryData(el(e, t));
        if (i) {
          let a = { ...i, success: r.success, error_message: r.error_message };
          n.setQueryData(el(e, t), () => a);
        }
      }
    },
  });
}
function $c(e) {
  return {
    ...e,
    bLoading: !1,
    userPollSubmitData: {
      user_poll_option_votes: e.results
        .map((e) => e.voted_option_id)
        .reduce((e, t) => e.concat(t), []),
    },
  };
}
function el(e, t) {
  return tl(e.ConvertTo64BitString(), t);
}
function tl(e, t) {
  return [`usePartnerEventUserPoll`, e, t];
}
function nl(e, t, n) {
  return `${j.COMMUNITY_BASE_URL}partnerevents/${e.ConvertTo64BitString()}/userpoll/${t}/${n ? `ajaxcastvote` : `ajaxloaddata`}/?origin=${encodeURIComponent(location.origin)}`;
}
var rl = 86400;
function il(e, t) {
  let n = 0;
  return (
    (n = t.poll_end_time
      ? t.poll_end_time
      : (e.rtime32_visibility_start ?? e.rtime32_start_time ?? 0) +
        (t.poll_end_days_since_start || rl)),
    n
  );
}
function al(e, t) {
  return il(e, t) < Math.floor(Date.now() / 1e3);
}
var ol = (function (e) {
    return (
      (e.k_EPollResult_NotVisible = `not_visible`),
      (e.k_EPollResult_Visible_After_Vote = `after_vote`),
      (e.k_EPollResult_Visible_After_End = `after_end`),
      (e.k_EPollResult_Visible_After_Vote_Or_End = `after_vote_or_end`),
      (e.k_EPollResult_Visible_On_Demand = `on_demand`),
      e
    );
  })({}),
  sl = `UfoLzSTxTuA-`,
  cl = `YhWjKAr35yQ-`,
  ll = `PP2xaI-f6Ek-`,
  ul = `vcEow-tUZwo-`,
  dl = `_2kvsAdIW-7M-`,
  fl = `_8aI8-jd1icQ-`,
  pl = `dNzBZMJItoE-`,
  ml = `w0JrdYGNpkE-`,
  hl = `wsXRKtszMHI-`,
  gl = `_0xYjduHFIA0-`,
  _l = `ia46etUoIVc-`,
  vl = `YZZ1ufCMojA-`,
  yl = `ppFEAMbJ96c-`;
function bl(e) {
  let t = e.context.event,
    n = e.context.showErrorInfo,
    r = O(e.args, `poll_id`),
    i = Number.parseInt(r),
    a = h(() => xl(t, i));
  if (!a || !t)
    return n
      ? (0, K.jsx)(`div`, {
          className: ye,
          children: R(`#UserPolls_Editor_FailToFindModel`, i),
        })
      : null;
  let o = V(j.LANGUAGE);
  return (0, K.jsx)(gt, {
    children: (0, K.jsx)(Sl, { userPollDef: a, lang: o, eventModel: t }),
  });
}
function xl(e, t) {
  return (e?.jsondata?.user_polls || [])?.find((e) => e.poll_id == t) || null;
}
function Sl(e) {
  let { eventModel: t, userPollDef: n, lang: r } = e,
    { userPollData: i, ...a } = Xc(t.clanSteamID, t.GID || `0`, n.poll_id),
    o = !!(a.error_message && a.error_message?.length > 0),
    s = Qc(t.clanSteamID, t.GID || `0`),
    [c, l] = (0, G.useState)(void 0),
    [u, d] = (0, G.useState)(!1),
    [f, p] = (0, G.useState)(!1),
    m = i?.option_results && i?.option_results.length > 0,
    h = ((i && i.voted_option_id?.length) || 0) > 0;
  return (
    (0, G.useEffect)(() => {
      !f &&
        n.results_visibility_settings != ol.k_EPollResult_NotVisible &&
        m &&
        (al(
          {
            rtime32_visibility_start:
              t.GetVisibilityStartTimeAndDateUnixSeconds(),
            rtime32_start_time: t.GetStartTimeAndDateUnixSeconds(),
          },
          n,
        ) ||
          h) &&
        p(!0);
    }, [m, h, f, t, n]),
    (0, K.jsxs)(Cl, {
      ...e,
      children: [
        n.options?.map((e) => {
          let t = i?.option_results.find((t) => t.unique_id == e.option_id),
            n =
              i?.voted_option_id.includes(e.option_id || 0) ||
              c === e.option_id;
          return (0, K.jsx)(
            wl,
            {
              lang: r,
              pollOptionDef: e,
              bSelected: n,
              nPercentage: f ? t?.percent : void 0,
              onClick: () => l(e.option_id),
              bDisableSelection:
                a.bLoading || !i?.vote_permitted || o || u || h,
            },
            `polloption` + e.option_id,
          );
        }),
        !!c &&
          (0, K.jsx)(H, {
            onClick: async () => {
              if (!a.userPollSubmitData.user_poll_option_votes.includes(c)) {
                d(!0);
                let e = {
                  user_poll_option_votes: [
                    ...a.userPollSubmitData.user_poll_option_votes,
                  ],
                };
                e.user_poll_option_votes.push(c),
                  await s.mutateAsync({ votes: e }),
                  l(void 0),
                  d(!1);
              }
            },
            children: R(`#Button_Submit`),
          }),
        (u || a.bLoading) &&
          (0, K.jsx)(D, {
            size: `small`,
            position: `center`,
            string: a.bLoading ? R(`#Loading`) : void 0,
          }),
        m &&
          !h &&
          !f &&
          (0, K.jsx)(le, {
            onClick: () => p(!0),
            children: R(`#UserPolls_JustSeeResults`),
          }),
        o &&
          (0, K.jsx)(`div`, {
            className: `wizbFzhGtBc-`,
            children: a.error_message,
          }),
      ],
    })
  );
}
function Cl(e) {
  let { userPollDef: t, lang: n, eventModel: r, children: i } = e,
    a = fe(),
    [o, s] = h(() => [
      F.GetWithFallback(t.localized_poll_description, n),
      t.user_poll_background,
    ]),
    c,
    l = r.clanSteamID.GetAccountID();
  s &&
    (c = {
      backgroundImage: `url('${ci(l, s)}')`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
    });
  let { userPollData: u } = Xc(
      (0, G.useMemo)(() => M.InitFromClanID(l, j.EUNIVERSE), [l]),
      r.GID || `0`,
      t.poll_id,
    ),
    d = il(
      {
        rtime32_visibility_start: r.GetVisibilityStartTimeAndDateUnixSeconds(),
        rtime32_start_time: r.GetStartTimeAndDateUnixSeconds(),
      },
      t,
    );
  return (0, K.jsx)(`div`, {
    className: sl,
    style: c,
    children: (0, K.jsxs)(`div`, {
      className: cl,
      children: [
        (0, K.jsx)(`div`, { className: ll, children: o }),
        (0, K.jsx)(`div`, { className: ul, children: i }),
        (0, K.jsxs)(`div`, {
          className: yl,
          children: [
            (0, K.jsx)(`div`, {
              children: Sn(
                `#UserPolls_status_N_Votes`,
                Vt(u?.total_votes || 0),
              ),
            }),
            u?.display_message
              ? (0, K.jsx)(`div`, { children: u?.display_message })
              : (0, K.jsx)(`div`, {
                  children: _t(`#UserPolls_status_N_TimeRemaining`, yt(d - a)),
                }),
          ],
        }),
      ],
    }),
  });
}
function wl(e) {
  let {
      pollOptionDef: t,
      onClick: n,
      lang: r,
      bDisableSelection: i,
      bSelected: a,
      nPercentage: o,
    } = e,
    [s] = h(() => [F.GetWithFallback(t.localized_option, r)]),
    c = Math.round((o ?? 0) * 100),
    l = !i && !!n;
  return (0, K.jsxs)(`div`, {
    className: I({ [dl]: !0, [fl]: a, [ml]: i }),
    role: `button`,
    "aria-pressed": !!a,
    "aria-disabled": !!i,
    tabIndex: l ? 0 : void 0,
    onClick: l ? n : void 0,
    onKeyDown: l
      ? (e) => {
          (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), n?.());
        }
      : void 0,
    children: [
      (0, K.jsx)(`div`, { className: gl }),
      (0, K.jsx)(`div`, { className: _l, style: { width: `${c}%` } }),
      (0, K.jsxs)(`div`, {
        className: hl,
        children: [
          (0, K.jsx)(`div`, { className: pl }),
          o !== void 0 &&
            (0, K.jsxs)(`div`, {
              className: `PTiNIjMkeqY-`,
              children: [c, `%`],
            }),
          (0, K.jsx)(`span`, { className: vl, children: s }),
        ],
      }),
    ],
  });
}
function Tl(e) {
  let { dynamicImport: t, fallback: n, ...r } = e,
    [i] = (0, G.useState)(() =>
      G.lazy(async () => {
        let e = await t();
        return await An(), { default: e };
      }),
    );
  return (0, K.jsx)(Bt, {
    fallback: n,
    children: (0, K.jsx)(G.Suspense, {
      fallback: n,
      children: (0, K.jsx)(i, { ...r }),
    }),
  });
}
var El = `_8eEm0FMiv8s-`,
  Dl = (e) => {
    let { vodInfo: t, bLoading: n } = Zn(e.appid);
    return !t && e.bPreviewMode
      ? (0, K.jsx)(`div`, {
          children: R(
            n ? `#VODPlayer_Loading` : `#VODPlayer_ErrorLoading`,
            e.appid,
          ),
        })
      : (0, K.jsx)(`div`, {
          className: El,
          children: (0, K.jsx)(gt, {
            children: (0, K.jsx)(Tl, {
              dynamicImport: async () =>
                (
                  await Nt(
                    async () => {
                      let { default: e } = await import(`./broadcastplayer.js`);
                      return { default: e };
                    },
                    __vite__mapDeps([
                      96, 1, 2, 58, 59, 6, 7, 34, 35, 36, 37, 38, 12, 15, 39,
                      40, 41, 42, 21, 43, 16, 17, 8, 30, 13, 18, 19, 44, 45, 46,
                      47, 48, 49, 54, 51, 52, 53, 55, 56, 57, 60, 61, 62, 74,
                      22, 23, 97, 5, 98, 99, 4, 9, 10, 81, 72, 100, 101, 102,
                    ]),
                    import.meta.url,
                  )
                ).default,
              nAppIDVOD: e.appid,
              watchLocation: 9,
              bStartPaused: !0,
            }),
          }),
        });
  };
function Ol(e) {
  let t = we(e.args, `appid`, 0);
  return (0, K.jsx)(Dl, { appid: t, bPreviewMode: !!e.context.showErrorInfo });
}
var kl = null;
function Al() {
  return (
    (kl ??= new Map([
      [`remindme`, { Constructor: Jo, autocloses: !1 }],
      [`vod`, { Constructor: Ol, autocloses: !1 }],
      [`giveawayeligible`, { Constructor: rs, autocloses: !1 }],
      [`claimitem`, { Constructor: ns, autocloses: !0 }],
      [`packagepurchaseable`, { Constructor: kc, autocloses: !1 }],
      [`actiondialog`, { Constructor: es, autocloses: !1 }],
      [`uploadfilebutton`, { Constructor: qc, autocloses: !0 }],
      [`userpolls`, { Constructor: bl, autocloses: !1 }],
      [`meetsteamsessiongroup`, { Constructor: cc, autocloses: !1 }],
      [`meetsteamscheduleview`, { Constructor: xc, autocloses: !1 }],
    ])),
    kl
  );
}
var jl = null;
function Ml() {
  return (
    (jl ??= new Map([
      ...Array.from(Al().entries()),
      ...Array.from(Xo.entries()),
    ])),
    jl
  );
}
function Nl(e) {
  return (0, K.jsx)(Pl, { children: (0, K.jsx)(Ee, { ...e }) });
}
function Pl(e) {
  return (0, K.jsx)(Te, { dictionary: Ml(), children: e.children });
}
var Fl = `CmGdbGDNSV4-`,
  Il = `iPOPhGzC-a0-`,
  Ll = `xrOiSU9R97s-`,
  Rl = `LwJMhK0HNVM-`,
  zl = `ZGGCLp-BDTo-`,
  Bl = `M7DOVjQK--s-`,
  Vl = `gKDPu8oCj8M-`,
  Hl = `CI7Kfj6g0IA-`,
  Ul = `wkqGxJzBufw-`,
  Wl = `iBRlCPA5wLk-`,
  Gl = `ia4XSgYUjLE-`,
  Kl = `wqku6E-Abwg-`,
  ql = `gg4cpQLGyDc-`,
  Jl = `_7YWF9gABggY-`,
  Yl = `_5p-Wrlk9bgc-`,
  Xl = `_72FICgCQSdY-`,
  Zl = `UnBqYIhvFvg-`,
  Ql = `nT35pSNPuYs-`,
  $l = `_2XopQbI8Bi8-`,
  eu = `o6bVF1-qPXQ-`,
  tu = `qvYW3H-Yr-I-`,
  nu = `Cfio5qjFtHU-`,
  ru = `oN6p82rKRck-`,
  iu = `vO1QeI3w9Dk-`,
  au = `_3aW3Mxt8m1Q-`,
  ou = `Qe4MY8-rwjI-`,
  su = `jcxmsuUFA2M-`,
  cu = `KdR0M-oN1oY-`,
  lu = `QHtC9T0nSOI-`,
  uu = `ibKXDplBVRg-`,
  du = `CmfveJtv4Vo-`,
  fu = `W178nE7W-R0-`,
  pu = `fY9hFy-ZiKw-`,
  mu = `KwOhtU9RR3w-`,
  hu = `_9QcJ0ABITrA-`;
function gu(e) {
  let {
      appId: t,
      clanId: n,
      strCapsuleUrl: r,
      strGroupTitle: i,
      strExtraBannerGroupStyle: a,
      actions: o,
    } = e,
    s = t !== E,
    c = G.useMemo(() => (t ? { appid: t } : { creatorid: n }), [t, n]),
    l = (0, K.jsx)(`img`, { className: Yl, src: r });
  return Fn()
    ? null
    : (0, K.jsxs)(`div`, {
        className: Vl,
        children: [
          (0, K.jsx)(`div`, {
            className: Hl,
            style: { backgroundImage: `url(${r})` },
          }),
          (0, K.jsxs)(`div`, {
            className: I(zl, a),
            children: [
              s
                ? t
                  ? (0, K.jsx)(b, {
                      id: c,
                      className: Jl,
                      hoverProps: {
                        direction: `overlay`,
                        style: { minWidth: `320px` },
                      },
                      children: l,
                    })
                  : (0, K.jsx)(Ne, { id: c, hoverClassName: Jl, children: l })
                : (0, K.jsxs)(`div`, { className: Jl, children: [l, ` `] }),
              (0, K.jsxs)(`div`, {
                className: Kl,
                children: [
                  i,
                  (0, K.jsx)(`div`, {
                    className: ql,
                    children: R(`#EventDisplay_NewsHubSubtitle`),
                  }),
                ],
              }),
              s &&
                (0, K.jsx)(`div`, { className: `XVaKlThraAU-`, children: o }),
            ],
          }),
        ],
      });
}
function _u(e, t) {
  let [n, r] = (0, G.useState)({}),
    i = ue(`useEventHeaderData`);
  return (
    (0, G.useEffect)(() => {
      if (e)
        zt.Get()
          .QueueAppRequest(e, { include_assets: !0, include_screenshots: !0 })
          .then(() => {
            let t = zt.Get().GetApp(e);
            t &&
              !i?.token?.reason &&
              r({
                strCapsuleUrl: t.GetAssets()?.GetHeaderURL(),
                strGroupTitle: t.GetName(),
                strStoreURL:
                  (W.IN_CLIENT ? `steam://openurl/` : ``) + t.GetStorePageURL(),
                strCommunityURL:
                  (W.IN_CLIENT ? `steam://openurl/` : ``) +
                  t.GetCommunityPageURL(),
                strForumURL:
                  (W.IN_CLIENT ? `steam://openurl/` : ``) +
                  t.GetCommunityDiscussionForumsURL(),
              });
          });
      else if (t) {
        let e = M.InitFromClanID(t, W.EUNIVERSE);
        Bn.LoadClanInfoForClanSteamID(e).then((n) => {
          n &&
            !i?.token?.reason &&
            r({
              strCapsuleUrl: n.avatar_full_url,
              strGroupTitle: n.group_name,
              strStoreURL:
                (W.IN_CLIENT ? `steam://openurl/` : ``) +
                W.STORE_BASE_URL +
                `curator/` +
                t +
                `/`,
              strCommunityURL:
                (W.IN_CLIENT ? `steam://openurl/` : ``) +
                W.COMMUNITY_BASE_URL +
                `gid/` +
                e.ConvertTo64BitString(),
              strExtraBannerGroupStyle: Ul,
            });
        });
      }
    }, [e, i?.token?.reason, t]),
    n
  );
}
function vu(e) {
  let { appId: t, clanId: n, bShowRSSFeed: r } = e,
    { strStoreURL: i, strCommunityURL: a, strForumURL: o } = _u(t, n),
    s = ht(),
    c =
      W.STORE_BASE_URL +
      `feeds/` +
      re() +
      (t ? `/app/` + t : `/group/` + n) +
      `/?cc=` +
      W.COUNTRY +
      `&l=` +
      W.LANGUAGE,
    { data: l } = rr(n),
    u = !!(l?.can_edit || l?.support_user),
    d = Nn.Get().BOwnsApp(t),
    f = (0, G.useMemo)(() => {
      let e = [];
      return (
        W.IN_CLIENT &&
          d &&
          e.push({
            label: R(`#EventDisplay_ViewInLibrary_ExtraShort`),
            data: `steam://nav/games/details/` + t,
          }),
        i &&
          e.push({
            label: R(`#EventDisplay_ViewStorePage_ExtraShort`),
            data: L(i),
          }),
        s ||
          (a &&
            e.push({
              label: R(`#EventDisplay_ViewCommunityPage_ExtraShort`),
              data: L(a),
            }),
          o &&
            e.push({
              label: R(`#EventDisplay_ViewForum_ExtraShort`),
              data: L(o),
            }),
          r &&
            e.push({
              label: (0, K.jsxs)(`div`, {
                className: nu,
                children: [
                  (0, K.jsx)(an, {}),
                  R(`#EventDisplay_RSSFeed_ExtraShort`),
                ],
              }),
              data: c,
            })),
        u &&
          e.push({
            label: R(`#EventDisplay_Admin_ExtraShort`),
            data: ae(t, M.InitFromClanID(n, W.EUNIVERSE), `admin`),
          }),
        e
      );
    }, [d, i, s, u, a, o, r, c, t, n]);
  return (0, K.jsx)(bn, {
    strDefaultLabel: R(`#EventDisplay_LinksDropDown_ExtraShort`),
    strClassName: Ql,
    strDropDownButtonClassName: $l,
    strDropDownMenuCtnClass: tu,
    contextMenuPositionOptions: { bMatchWidth: !1 },
    arrowClassName: eu,
    rgOptions: f,
    onChange: (e, t, n) => {
      n && Pt(n, e.data);
    },
  });
}
var yu = u((e) => {
  let { appId: t, clanId: n } = e,
    {
      strCapsuleUrl: r,
      strGroupTitle: i,
      strExtraBannerGroupStyle: a,
    } = _u(t, n),
    o = (0, G.useMemo)(() => (t ? { appid: t } : { creatorid: n }), [t, n]),
    { data: s } = un(o),
    c = Nn.Get().BOwnsApp(t);
  return (0, K.jsx)(gu, {
    appId: t,
    clanId: n,
    strCapsuleUrl: r,
    strGroupTitle: i,
    strExtraBannerGroupStyle: a,
    actions: (0, K.jsxs)(K.Fragment, {
      children: [
        !(c || !t) &&
          (0, K.jsx)(`div`, {
            className: `_1US5O8GIUEc-`,
            children: (0, K.jsx)(rt, {
              appid: t,
              bIsFree: !!s?.is_free,
              bIsComingSoon: !!s?.is_coming_soon,
              className: I(void 0, `mJ5CX9X1A8E-`),
            }),
          }),
        (0, K.jsx)(`div`, {
          className: Zl,
          children: t
            ? (0, K.jsx)(x, { appid: t, className: Xl })
            : (0, K.jsx)(y, { clanAccountID: n, className: Xl }),
        }),
        (0, K.jsx)(vu, { ...e }),
      ],
    }),
  });
});
function bu(e) {
  return (0, K.jsx)(`div`, {
    className: I(Il, `AppPartnerEventsBanner`),
    children: (0, K.jsx)(yu, { ...e }),
  });
}
var xu = `WbZZkptWLHg-`;
function Su(e) {
  let { event: t } = e,
    n = h(() => t.jsondata?.referenced_appids || []),
    r = Yt(),
    i = d({
      queries: n.map((e) => nn(r, { appid: e })),
      combine: (e) => ({
        bLoaded: e.every((e) => !e.isPending),
        data: e.map((e) => e.data),
      }),
    });
  if (!n.length || !i.bLoaded) return null;
  let a = i.data
      .flatMap((e) =>
        e?.store_url_path && e?.name ? [`[url="${ne(e)}"]${e.name}[/url]`] : [],
      )
      .join(R(`#EventDisplay_ReferencedApps_Joiner`)),
    o = Sn(`#EventDisplay_ReferencedApps`, n.length, a);
  return (0, K.jsx)(`div`, {
    className: xu,
    children: (0, K.jsx)(Ee, { text: o, event: t }),
  });
}
function Cu(e) {
  let { children: t } = e;
  return Fn() && !W.IN_STEAMUI
    ? (0, K.jsx)(kn, { className: he, children: t })
    : (0, K.jsx)(K.Fragment, { children: t });
}
var wu = 56,
  Tu = 136,
  Eu = G.lazy(() =>
    Nt(
      () => import(`./broadcast_embeddable2.js`),
      __vite__mapDeps([
        103, 1, 2, 5, 6, 7, 104, 34, 35, 36, 37, 38, 12, 15, 39, 40, 41, 42, 21,
        43, 16, 17, 8, 30, 13, 18, 19, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54,
        55, 56, 57, 58, 59, 60, 61, 62, 31, 68, 29, 32, 69, 64, 98, 105, 106,
        26, 27, 86, 85, 87, 88, 94, 95, 97, 99, 4, 9, 10, 81, 72, 100, 101, 74,
        107, 108, 109, 110, 111, 112, 113, 114, 96, 22, 23, 102, 115,
      ]),
      import.meta.url,
    ),
  );
function Du(e) {
  let [t, n] = tt(e.appid, { include_assets: !0 }),
    [r, i] = zn(e.clanID),
    a = ``;
  return (
    e.appid
      ? (a = t?.GetAssets()?.GetCommunityIconURL() || ``)
      : e.clanID && (a = i?.avatar_full_url ?? ``),
    (0, K.jsx)(`div`, {
      className: I(lu, cu, uu),
      onClick: e.onAppIconClick,
      children: !!a && (0, K.jsx)(`img`, { src: a, alt: `` }),
    })
  );
}
var $ = class extends G.Component {
  m_loader;
  m_refPage = G.createRef();
  m_refContent = G.createRef();
  m_refScroll = G.createRef();
  m_refScrollAnchor = G.createRef();
  m_scrollAnimation = null;
  m_nTouchStartClientY;
  m_nPreviousRenderCount = 0;
  m_nCurrentRenderCount = 0;
  constructor(e) {
    super(e),
      (this.m_loader = new Mu(this.props.partnerEventStore)),
      !this.props.bShowOnlyInitialEvent &&
        this.props.initialEvent &&
        this.m_loader.InitAroundEvent(
          this.props.initialEvent,
          this.props.additionalParams,
        );
  }
  FindCurrentlyViewedEventIndex() {
    let e = this.m_refScroll.current;
    if (!this.m_refContent.current || !e) return -1;
    let t = this.m_refContent.current.children,
      n = this.GetScrollTopForComparison(e);
    for (let e = 0; e < t.length; e++) {
      let r = t[e],
        i = r.offsetTop,
        a = i + r.clientHeight;
      if (i <= n && a > n) return e;
    }
    return -1;
  }
  GetPaddingTop() {
    return this.props.showAppHeader ? Tu : wu;
  }
  GetScrollTopForComparison(e) {
    return Math.ceil(e.scrollTop + this.GetPaddingTop() + 24);
  }
  ScrollToEvent(e) {
    let t = this.m_refContent.current;
    if (!t || e < 0 || e >= t.children.length || this.m_scrollAnimation) return;
    let n = t.children[e].offsetTop - this.GetPaddingTop();
    this.ScrollToOffset(n);
  }
  ScrollToOffset(e) {
    let t = this.m_refScroll.current;
    if (!t) return;
    let n = {
      msDuration: 500,
      timing: `cubic-in-out`,
      onComplete: this.OnScrollComplete,
    };
    (this.m_scrollAnimation = new At(t, { scrollTop: e }, n)),
      this.m_scrollAnimation.Start();
  }
  ScrollToBottom() {
    this.m_refScroll.current &&
      this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
  }
  ScrollToNextEvent() {
    let e = this.m_loader.GetEvents(),
      t = this.FindCurrentlyViewedEventIndex() + 1;
    t >= e.length
      ? this.ScrollToBottom()
      : (this.ScrollToEvent(t),
        t == e.length - 1 && this.m_loader.LoadMoreAtEnd());
  }
  ScrollToPrevEvent() {
    let e = this.FindCurrentlyViewedEventIndex(),
      t = e - 1;
    if (t < 0) {
      this.ScrollToOffset(0);
      return;
    }
    let n = this.m_refContent.current,
      r = this.m_refScroll.current;
    if (n && r) {
      let i = n.children[e],
        a = i.offsetTop,
        o = a + i.clientHeight,
        s = this.GetScrollTopForComparison(r);
      (s -= (o - a) * 0.3), a <= s && (t = e);
    }
    this.ScrollToEvent(t);
  }
  OnScrollComplete() {
    this.m_scrollAnimation = null;
  }
  Close() {
    this.props.closeModal && this.props.closeModal();
  }
  OnBackgroundClick(e) {
    e.currentTarget == e.target && this.Close();
  }
  OnKeyDown(e) {
    e.keyCode == 27 && this.Close();
  }
  OnScroll(e) {
    if (this.props.bShowOnlyInitialEvent) return;
    let t = this.m_refScroll.current;
    if (!t) return;
    let n = t.clientHeight;
    t.scrollHeight - (t.scrollTop + n) <= n && this.m_loader.LoadMoreAtEnd(),
      t.scrollTop <= n && this.m_loader.LoadMoreAtBeginning();
  }
  getSnapshotBeforeUpdate(e) {
    let t = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
    if (((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !t))
      return null;
    let n = this.m_refScroll.current;
    if (!n || !this.m_refScrollAnchor.current) return null;
    let r = this.m_refScrollAnchor.current.GetDOM();
    return r ? r.offsetTop - n.scrollTop : null;
  }
  OnTouchStart(e) {
    e.touches.length == 1 && (this.m_nTouchStartClientY = e.touches[0].clientY);
  }
  OnTouchMove(e) {
    if (!this.m_refScroll.current || e.touches.length == 0) return;
    let t = 0;
    this.m_nTouchStartClientY !== void 0 &&
      (t = this.m_nTouchStartClientY - e.touches[0].clientY),
      this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, t);
  }
  OnWheel(e) {
    this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, e.deltaY);
  }
  SuppressUnwantedScrollEventsBecauseSafariIsDumb(e, t) {
    let n = this.m_refScroll.current;
    if (!n) return;
    let r = cn(e.target) && Ft(n, e.target),
      i = t < 0 && n.scrollTop < 1,
      a = n.scrollHeight - n.scrollTop <= n.clientHeight;
    (!r || i || (t > 0 && a)) && e.cancelable && e.preventDefault();
  }
  SetGlobalHeaderHidden(e) {
    let t = document.getElementsByClassName(`responsive_header`);
    xn(t.length <= 1, `Must have at most one responsive_header`),
      t.length >= 1 && (t[0].style.display = e ? `none` : ``);
  }
  SetFooterPinnedToBottom(e) {
    let t = document.getElementById(`footer`);
    t && (t.style.position = e ? `absolute` : ``);
  }
  componentDidMount() {
    let e = this.m_refScroll.current;
    e && !Ft(e, e.ownerDocument.activeElement) && e.focus();
    let t = this.m_refPage.current;
    t &&
      (t.addEventListener(`touchstart`, this.OnTouchStart),
      t.addEventListener(`touchmove`, this.OnTouchMove, { passive: !1 }),
      t.addEventListener(`wheel`, this.OnWheel, { passive: !1 })),
      this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
      this.SetFooterPinnedToBottom(!0);
  }
  componentDidUpdate(e, t, n) {
    if (n === null) return;
    let r = this.m_refScroll.current;
    if (!r) return;
    Ft(r, r.ownerDocument.activeElement) || r.focus();
    let i = this.m_refScrollAnchor.current
      ? this.m_refScrollAnchor.current.GetDOM()
      : null;
    i && (r.scrollTop = i.offsetTop - n);
  }
  componentWillUnmount() {
    let e = this.m_refPage.current;
    e &&
      (e.removeEventListener(`touchstart`, this.OnTouchStart),
      e.removeEventListener(`touchmove`, this.OnTouchMove),
      e.removeEventListener(`wheel`, this.OnWheel)),
      this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
      this.SetFooterPinnedToBottom(!1);
  }
  render() {
    let { initialEvent: e, bShowOnlyInitialEvent: t } = this.props,
      n = !e,
      r = e ? (t ? [e] : this.m_loader.GetEvents()) : [],
      i = [],
      a = this.props.appid,
      o = this.props.clanSteamID?.GetAccountID();
    for (let t of r) {
      let n = e !== void 0 && t.GID == e.GID,
        r = n;
      i.push(
        (0, K.jsx)(
          ku,
          {
            ref: n ? this.m_refScrollAnchor : null,
            event: t,
            emoticonStore: this.props.emoticonStore,
            partnerEventStore: this.props.partnerEventStore,
            disableReadTracking: n,
            fnFilterImageURLsForKnownFailures:
              this.props.fnFilterImageURLsForKnownFailures,
            fnImageFailureCallback: this.props.fnImageFailureCallback,
            bDisableBroadcastPlayer: !r,
            className: this.props.eventClassName,
          },
          t.GID,
        ),
      ),
        (a ??= t.appid),
        (o ??= t.clanSteamID.GetAccountID());
    }
    return (
      (this.m_nCurrentRenderCount = i.length),
      (0, K.jsxs)(B, {
        onCancelButton: this.props.closeModal,
        className: Fl,
        ref: this.m_refPage,
        children: [
          this.props.showAppHeader &&
            (0, K.jsx)(bu, { appId: a ?? 0, clanId: o ?? 0 }),
          (0, K.jsx)(B, {
            className: I(Rl, void 0),
            ref: this.m_refScroll,
            onScroll: this.OnScroll,
            onClick: this.OnBackgroundClick,
            tabIndex: -1,
            onKeyDown: this.OnKeyDown,
            scrollIntoViewType: pn.NoTransformSparseContent,
            children: n
              ? (0, K.jsx)(`div`, {
                  className: Bl,
                  children: R(`#EventDisplay_NoEventsToSee`),
                })
              : (0, K.jsxs)(K.Fragment, {
                  children: [
                    (0, K.jsx)(`div`, {
                      className: I(
                        Ll,
                        !this.props.onAppIconClick && `R-q7sW-Xkg4-`,
                        t && `LIm3FCjFgqo-`,
                      ),
                      children: (0, K.jsx)(`div`, {
                        className: ou,
                        children: (0, K.jsxs)(`div`, {
                          className: su,
                          children: [
                            !!this.props.closeModal &&
                              (0, K.jsx)(`div`, {
                                className: I(`TlGGn2-aFiY-`, `ibKXDplBVRg-`),
                                onClick: this.Close,
                                children: (0, K.jsx)(Mn, {}),
                              }),
                            !t &&
                              (0, K.jsx)(`div`, {
                                className: I(
                                  `QHtC9T0nSOI-`,
                                  `yPve79a1Qm0-`,
                                  `ibKXDplBVRg-`,
                                ),
                                onClick: this.ScrollToPrevEvent,
                                children: (0, K.jsx)(lt, { angle: 0 }),
                              }),
                            !t &&
                              (0, K.jsx)(`div`, {
                                className: I(
                                  `QHtC9T0nSOI-`,
                                  `_4Lwn5F4-kiE-`,
                                  `ibKXDplBVRg-`,
                                ),
                                onClick: this.ScrollToNextEvent,
                                children: (0, K.jsx)(lt, { angle: 180 }),
                              }),
                            this.props.onAppIconClick &&
                              (0, K.jsx)(Du, {
                                appid: a,
                                clanID: o ?? 0,
                                onAppIconClick: this.props.onAppIconClick,
                              }),
                          ],
                        }),
                      }),
                    }),
                    !t &&
                      (0, K.jsx)(Ou, {
                        loader: this.m_loader,
                        location: `top`,
                      }),
                    (0, K.jsx)(`div`, {
                      ref: this.m_refContent,
                      className: I(
                        ru,
                        !this.props.onAppIconClick && `R-q7sW-Xkg4-`,
                      ),
                      children: i,
                    }),
                    !t &&
                      (0, K.jsx)(Ou, {
                        loader: this.m_loader,
                        location: `bottom`,
                      }),
                  ],
                }),
          }),
        ],
      })
    );
  }
};
N([P], $.prototype, `ScrollToNextEvent`, null),
  N([P], $.prototype, `ScrollToPrevEvent`, null),
  N([P], $.prototype, `OnScrollComplete`, null),
  N([P], $.prototype, `Close`, null),
  N([P], $.prototype, `OnBackgroundClick`, null),
  N([P], $.prototype, `OnKeyDown`, null),
  N([P], $.prototype, `OnScroll`, null),
  N([P], $.prototype, `OnTouchStart`, null),
  N([P], $.prototype, `OnTouchMove`, null),
  N([P], $.prototype, `OnWheel`, null),
  ($ = N([u], $));
var Ou = u((e) => {
    let t = e.loader.GetNewerState(),
      n = e.loader.GetOlderState();
    return t == 2 && n == 2
      ? null
      : (e.location == `top` ? t : n) == 2
        ? (0, K.jsx)(`div`, {
            className: du,
            children: (0, K.jsx)(D, {
              position: `center`,
              string: R(`#Loading`),
            }),
          })
        : null;
  }),
  ku = G.forwardRef(function (e, t) {
    let n = Fn(),
      [r, i] = tt(e.event.appid, { include_assets: !0 }),
      a = rn(e.event.appid),
      o = bt();
    return (0, K.jsx)(Au, {
      ref: t,
      ...e,
      bInGamepadUI: n,
      bShouldMaskImages: a,
      storeItem: r,
      tracker: o,
    });
  }),
  Au = class extends G.Component {
    m_refContent = G.createRef();
    m_sendReadInfo = new wt();
    m_bSentRead = !1;
    OnEnterVisible() {
      this.m_bSentRead ||
        this.m_sendReadInfo.IsScheduled() ||
        this.m_sendReadInfo.Schedule(750, () => {
          this.props.tracker.RecordEventRead(this.props.event, 4),
            (this.m_bSentRead = !0);
        });
    }
    OnLeaveVisible() {
      this.m_sendReadInfo.Cancel();
    }
    GetDOM() {
      return this.m_refContent.current;
    }
    render() {
      let {
          event: e,
          langOverride: t,
          partnerEventStore: n,
          emoticonStore: r,
          className: i,
          additionalTypeAndDateElement: a,
          headerClassnames: o,
          isPreview: s,
          bShouldMaskImages: c,
          storeItem: l,
        } = this.props,
        u = t || V(W.LANGUAGE),
        d = e.GetDescriptionWithFallback(u) || ``,
        f = o,
        p = e.GetCategoryAsString(),
        m = e.type,
        h = ``;
      e.appid
        ? (h = l?.GetName() || ``)
        : e.clanSteamID &&
          (h =
            Bn.GetClanInfoByClanAccountID(e.clanSteamID.GetAccountID())
              ?.group_name ?? ``);
      let g = pe.GetTimeNowWithOverride(),
        _ = m !== 28 && g < e.GetStartTimeAndDateUnixSeconds() && !s,
        v = null;
      return (
        e.jsondata.bSaleEnabled && e.jsondata.sale_vanity_id && (v = Ae(e)),
        (0, K.jsx)(Cu, {
          children: (0, K.jsxs)(`div`, {
            ref: this.m_refContent,
            className: I(i, iu, Na, f == `editor` ? Pa : ``),
            children: [
              (0, K.jsx)(ju, { ...this.props, eLanguage: u }),
              (0, K.jsx)(`div`, {
                className: Ia,
                children: (0, K.jsxs)(`div`, {
                  className: Xa,
                  children: [
                    this.props.headerElement,
                    (0, K.jsxs)(`div`, {
                      className: I(fu, _ && `EL3MaVqCn0g-`),
                      children: [
                        (0, K.jsxs)(`div`, {
                          className: pu,
                          children: [
                            (0, K.jsx)(`span`, { className: mu, children: p }),
                            (0, K.jsxs)(`span`, {
                              className: hu,
                              children: [
                                ` `,
                                R(`#EventDisplay_PostedBy`),
                                h,
                                ` `,
                              ],
                            }),
                            (0, K.jsx)(ko, { event: e, className: Ha }),
                          ],
                        }),
                        _ &&
                          !s &&
                          (0, K.jsx)(`div`, {
                            className: `Q4ZSdOUuSKg-`,
                            children: (0, K.jsx)(da, {
                              eventModel: e,
                              lang: u,
                              bExpandLeft: !0,
                            }),
                          }),
                        !s && a,
                      ],
                    }),
                    !this.props.disableReadTracking &&
                      !s &&
                      (0, K.jsx)(De, {
                        onEnter: this.OnEnterVisible,
                        onLeave: this.OnLeaveVisible,
                        options: { rootMargin: `0px 0px -300px 0px` },
                      }),
                    this.props.bInGamepadUI
                      ? (0, K.jsx)(`div`, {
                          className: Ya,
                          children: e.GetNameWithFallback(u),
                        })
                      : (0, K.jsx)(se, {
                          eventModel: e,
                          route: oe.k_eView,
                          className: Ya,
                          children: e.GetNameWithFallback(u),
                        }),
                    e.BHasSubTitle(u) &&
                      (0, K.jsx)(`div`, {
                        className: I(`ay-K0NBOIuc-`, `ID9Ds4YdxDc-`),
                        children: e.GetSubTitle(u),
                      }),
                    (0, K.jsx)(`div`, { className: Ba }),
                  ],
                }),
              }),
              !(
                !e.BEventCanShowBroadcastWidget() ||
                this.props.bDisableBroadcastPlayer
              ) &&
                (0, K.jsx)(`div`, {
                  className: `hSFWQBRmqTY-`,
                  children: (0, K.jsx)(G.Suspense, {
                    fallback: null,
                    children: (0, K.jsx)(Eu, { event: this.props.event }),
                  }),
                }),
              e.BHasTag(`steam_award_nomination_request`) &&
                (0, K.jsx)(Ln, { event: e, lang: u }),
              e.BHasTag(`steam_award_vote_request`) &&
                (0, K.jsx)(Rn, {
                  appID: e.appid,
                  bIsEventActionEnabled: e.BIsEventActionEnabled(),
                  voteCategories: e.GetSteamAwardNomineeCategories(),
                }),
              (0, K.jsxs)(`div`, {
                className: Qa,
                children: [
                  (0, K.jsxs)(`div`, {
                    className: I(Wa, au, c && `Vye1545x6hY-`),
                    onContextMenu: W.IN_CLIENT ? sn : void 0,
                    children: [
                      (0, K.jsx)(Nl, { text: d, event: e }),
                      (0, K.jsx)(`span`, { className: _e }),
                    ],
                  }),
                  (0, K.jsx)(Su, { event: this.props.event }),
                  !!e.jsondata.read_more_link &&
                    (0, K.jsx)(`div`, {
                      className: I(`Hr-OMRnVpqk-`),
                      children: (0, K.jsx)(Qt, {
                        className: I(`yYL-OrX9PtQ-`),
                        href: e.jsondata.read_more_link,
                        children: R(`#EventEmail_Button_ClickForMoreDetails`),
                      }),
                    }),
                  v &&
                    e.GID &&
                    (0, K.jsxs)(`div`, {
                      className: I(`Hr-OMRnVpqk-`),
                      children: [
                        (0, K.jsx)(Qn, { gidEvent: e.GID }),
                        (0, K.jsx)(`a`, {
                          className: I(`yYL-OrX9PtQ-`, `LinkButton`),
                          href: L(v),
                          children: R(`#Event_Button_VisitSalePage`),
                        }),
                      ],
                    }),
                  (0, K.jsx)(nt, { appid: e.appid }),
                ],
              }),
              !s && (0, K.jsx)(Ko, { eventModel: e, emoticonStore: r }),
            ],
          }),
        })
      );
    }
  };
N([P], Au.prototype, `OnEnterVisible`, null),
  N([P], Au.prototype, `OnLeaveVisible`, null),
  (Au = N([u], Au));
function ju(e) {
  let {
      event: t,
      fnFilterImageURLsForKnownFailures: n,
      fnImageFailureCallback: r,
      eLanguage: i,
      bShouldMaskImages: a,
    } = e,
    o = t.BImageNeedScreenshotFallback(`background`, i),
    s = t.type,
    c = Ce(t, `background`, i, g.background_main, !o);
  return (
    n && c && (c = n(c)),
    (0, K.jsxs)(K.Fragment, {
      children: [
        s != 12 &&
          !o &&
          c &&
          (0, K.jsx)(w, {
            className: I(`b5t8fHKcG3c-`, a && `Vye1545x6hY-`),
            rgSources: c,
            onIncrementalError: (e, t, n) => r && r(t),
          }),
        c &&
          c.length > 0 &&
          (0, K.jsx)(w, {
            className: `V-UPj6R9FQU-`,
            rgSources: c,
            onIncrementalError: (e, t, n) => r && r(t),
          }),
      ],
    })
  );
}
var Mu = class {
  k_nMaxPerDirection = 3;
  m_nAppID = 0;
  m_clanSteamID = new M();
  m_partnerEventStore;
  m_additionalParams;
  m_rgEvents = [];
  m_eOlderDirection = 1;
  m_eNewerDirection = 1;
  constructor(e) {
    l(this), (this.m_partnerEventStore = e);
  }
  GetEvents() {
    return this.m_rgEvents;
  }
  GetAppID() {
    return this.m_nAppID;
  }
  GetOlderState() {
    return this.m_eOlderDirection;
  }
  GetNewerState() {
    return this.m_eNewerDirection;
  }
  async InitAroundEvent(e, t) {
    let n = this.m_partnerEventStore;
    (this.m_nAppID = e.appid),
      (this.m_clanSteamID = e.clanSteamID),
      (this.m_rgEvents = []),
      (this.m_eOlderDirection = 2),
      (this.m_eNewerDirection = 2),
      (this.m_additionalParams = t),
      this.m_rgEvents.push(e);
    let r;
    try {
      r = await n.LoadAdjacentPartnerEventsByEvent(
        e,
        this.m_clanSteamID,
        this.m_nAppID,
        this.k_nMaxPerDirection,
        this.k_nMaxPerDirection,
        this.m_additionalParams,
      );
    } catch {}
    c(() => {
      if (!r || r.length == 0) {
        (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
        return;
      }
      let t = r.findIndex((t) => t.GID == e.GID),
        n = t,
        i = t >= 0 ? r.length - t - 1 : 0;
      (this.m_eNewerDirection = n >= this.k_nMaxPerDirection ? 1 : 3),
        (this.m_eOlderDirection = i >= this.k_nMaxPerDirection ? 1 : 3),
        (this.m_rgEvents = r);
    });
  }
  async LoadMoreAtEnd() {
    if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0) return;
    let e = this.m_rgEvents[this.m_rgEvents.length - 1];
    this.m_eOlderDirection = 2;
    let t;
    try {
      t = await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
        e,
        this.m_clanSteamID,
        this.m_nAppID,
        0,
        this.k_nMaxPerDirection,
        this.m_additionalParams,
      );
    } catch {}
    c(() => {
      if (!t) {
        this.m_eOlderDirection = 1;
        return;
      }
      let e = new Set(
        this.m_rgEvents.map((e) => e.GID).filter((e) => e !== void 0),
      );
      for (let n of t) {
        let t = n.GID;
        t && !e.has(t) && (this.m_rgEvents.push(n), e.add(t));
      }
      this.m_eOlderDirection = t.length >= this.k_nMaxPerDirection ? 1 : 3;
    });
  }
  async LoadMoreAtBeginning() {
    if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0) return;
    let e = this.m_rgEvents[0];
    this.m_eNewerDirection = 2;
    let t;
    try {
      t = await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
        e,
        this.m_clanSteamID,
        this.m_nAppID,
        this.k_nMaxPerDirection,
        0,
        this.m_additionalParams,
      );
    } catch {}
    c(() => {
      if (!t) {
        this.m_eNewerDirection = 1;
        return;
      }
      let e = new Set(
        this.m_rgEvents.map((e) => e.GID).filter((e) => e !== void 0),
      );
      for (let n of t.reverse()) {
        let t = n.GID;
        t && !e.has(t) && (this.m_rgEvents.unshift(n), e.add(t));
      }
      this.m_eNewerDirection = t.length >= this.k_nMaxPerDirection ? 1 : 3;
    });
  }
};
N([n.shallow], Mu.prototype, `m_rgEvents`, void 0),
  N([n], Mu.prototype, `m_eOlderDirection`, void 0),
  N([n], Mu.prototype, `m_eNewerDirection`, void 0);
export {
  za as $,
  ho as A,
  rr as At,
  Ca as B,
  ao as C,
  Xr as Ct,
  eo as D,
  Y as Dt,
  po as E,
  Mr as Et,
  wa as F,
  Ya as G,
  Fa as H,
  Ta as I,
  Ba as J,
  Xa as K,
  Da as L,
  ba as M,
  ya as N,
  fo as O,
  gr as Ot,
  Ea as P,
  ha as Q,
  Oa as R,
  Sa as S,
  ei as St,
  so as T,
  jr as Tt,
  Va as U,
  ka as V,
  Ha as W,
  Wa as X,
  Ga as Y,
  Ua as Z,
  to as _,
  bi as _t,
  yu as a,
  Ka as at,
  La as b,
  fi as bt,
  Pl as c,
  _o as ct,
  Go as d,
  oo as dt,
  Za as et,
  Ko as f,
  ro as ft,
  mo as g,
  xi as gt,
  qa as h,
  Z as ht,
  bu as i,
  _a as it,
  go as j,
  uo as k,
  X as kt,
  Nl as l,
  $a as lt,
  Oo as m,
  Di as mt,
  ku as n,
  ga as nt,
  Wl as o,
  lo as ot,
  Ro as p,
  da as pt,
  Ra as q,
  Su as r,
  va as rt,
  Gl as s,
  Aa as st,
  $ as t,
  Ja as tt,
  qo as u,
  ja as ut,
  io as v,
  wi as vt,
  co as w,
  Rr as wt,
  xa as x,
  oi as xt,
  no as y,
  ci as yt,
  Ma as z,
};
