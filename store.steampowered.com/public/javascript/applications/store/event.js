/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./broadcast_embeddable2.js",
      "./rolldown-runtime.js",
      "./libraries.js",
      "./clanimagemodels.js",
      "./main.js",
      "../../../css/applications/store/main.css",
      "./textfilterstore.js",
      "./storelink.js",
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
      "./youtubeplayer.js",
      "./presenterpopup.js",
      "./basicbbcodeparser.js",
      "../../../css/applications/store/basicbbcodeparser.css",
      "../../../css/applications/store/presenterpopup.css",
      "./lazyrenderchildren.js",
      "./creatorhomestore.js",
      "./storegamehover.js",
      "./steammessages_experiments_pb.js",
      "./discussionwidget.module.js",
      "../../../css/applications/store/discussionwidget.css",
      "./storeitemhooks.js",
      "./emoticonbutton.js",
      "./alternate_icons.js",
      "../../../css/applications/store/emoticonbutton.css",
      "./reddit_large.js",
      "./twitter_large.js",
      "./salebanner.js",
      "./partnereventstore.js",
      "./partnerevent.js",
      "./eventtime.js",
      "./steammessages_storesales_pb.js",
      "./appinfo.js",
      "./partnereventutils.js",
      "../../../css/applications/store/salebanner.css",
      "./broadcastwatchstore.js",
      "./dashplayer.js",
      "./broadcast_embeddable.js",
      "./eventdevfeaturestore.js",
      "./moment.js",
      "./partnereventslogin.js",
      "./steammessages_twofactor_pb.js",
      "./logindialog.js",
      "../../../css/applications/store/logindialog.css",
      "./giveawaystore.js",
      "./broadcastplayer.js",
      "./linkregionbox.js",
      "../../../css/applications/store/linkregionbox.css",
      "../../../css/applications/store/broadcastplayer.css",
      "../../../css/applications/store/broadcast_embeddable.css",
    ]),
) => i.map((i) => d[i]);

import { o as e, r as t } from "./rolldown-runtime.js";
import {
  At as n,
  Ct as r,
  Et as i,
  F as a,
  L as o,
  Lt as s,
  W as c,
  ft as l,
  jt as u,
  kt as d,
  l as f,
  tt as p,
  u as m,
  xt as h,
} from "./libraries.js";
import { t as g } from "./clanimagemodels.js";
import {
  A as _,
  D as v,
  E as y,
  I as b,
  M as x,
  N as S,
  O as ee,
  P as C,
  T as te,
  X as ne,
  h as re,
  j as ie,
  k as ae,
  m as oe,
  p as se,
  wt as ce,
} from "./salesectionfactory.js";
import { t as le } from "./storetypes.js";
import { V as ue } from "./storelink.js";
import {
  A as de,
  Aa as fe,
  D as pe,
  Da as w,
  O as me,
  Oa as he,
  a as ge,
} from "./saletags.js";
import { u as T } from "./claninfo.js";
import {
  $ as _e,
  F as ve,
  G as ye,
  L as be,
  R as E,
  o as xe,
} from "./partnerevent.js";
import {
  $ as Se,
  A as Ce,
  At as we,
  B as Te,
  C as Ee,
  D as De,
  F as Oe,
  G as ke,
  I as Ae,
  J as je,
  K as Me,
  N as Ne,
  Ot as Pe,
  P as Fe,
  Q as Ie,
  R as Le,
  S as Re,
  U as ze,
  V as Be,
  W as Ve,
  X as He,
  Y as Ue,
  Z as We,
  _ as Ge,
  a as Ke,
  at as qe,
  d as Je,
  f as Ye,
  ft as Xe,
  g as Ze,
  ht as Qe,
  i as $e,
  it as et,
  j as tt,
  kt as nt,
  l as rt,
  lt as it,
  m as at,
  nt as ot,
  p as st,
  pt as ct,
  q as lt,
  r as ut,
  rt as dt,
  s as ft,
  st as pt,
  tt as mt,
  v as ht,
  vt as gt,
  x as _t,
  y as vt,
} from "./apppartnereventspage.js";
import {
  a as yt,
  c as bt,
  n as D,
  r as xt,
  s as St,
  t as Ct,
} from "./eventlink.js";
import "./modals.js";
import { i as wt } from "./ostype.js";
import { t as Tt } from "./eventinitialization.js";
import { t as Et } from "./salepreviewwidgets.js";
import { t as Dt } from "./ajaxhooks.js";
import {
  a as Ot,
  i as kt,
  n as At,
  o as jt,
  r as Mt,
  t as Nt,
} from "./historyutils.js";
import { t as O } from "./throbber.js";
import { a as Pt } from "./stringutils.js";
import { n as Ft } from "./saletechredirectsignin.js";
import { t as It } from "./moment.js";
import { t as Lt } from "./eventtimeoverridecontext.js";
import { n as Rt } from "./eventdevfeaturestore.js";
import {
  C as zt,
  N as Bt,
  g as Vt,
  h as Ht,
  i as Ut,
  m as Wt,
  o as Gt,
  p as Kt,
  v as qt,
  y as Jt,
} from "./partnereventshared.module.js";
import { r as Yt } from "./carouselarrows.js";
import { a as Xt, o as Zt } from "./loyaltyrewarddefs.js";
import { l as Qt } from "./youtubeplayer.js";
import { i as $t, n as en } from "./eventimageurlwithfallback.js";
import { n as tn } from "./lazyrenderchildren.js";
import { c as nn } from "./creatorhomestore.js";
import { i as rn } from "./partnereventeditorcontext.js";
import { _ as an, g as on, n as sn } from "./bottomrow.js";
import { n as cn } from "./storeitemhooks.js";
import { n as ln, r as un } from "./socialmediadisplay.js";
import { t as dn } from "./salewishlistbutton.js";
import { t as fn } from "./eventadminpanel.js";
import { n as k } from "./partnereventstore.js";
import {
  $s as pn,
  $y as mn,
  Ac as A,
  Ar as hn,
  Av as gn,
  B as _n,
  Bb as vn,
  Br as yn,
  By as bn,
  Cb as xn,
  Cc as j,
  Dn as Sn,
  Hl as M,
  Ho as Cn,
  Hs as wn,
  Iu as Tn,
  Jb as En,
  Jx as Dn,
  Kb as On,
  L as kn,
  Lb as An,
  Lu as N,
  Ly as P,
  Na as jn,
  Nb as F,
  Nn as I,
  On as Mn,
  Or as Nn,
  Pb as Pn,
  Pn as Fn,
  Qn as In,
  Qy as Ln,
  Sl as Rn,
  Sr as zn,
  Tv as Bn,
  Ub as Vn,
  Uy as Hn,
  Wc as Un,
  Wo as Wn,
  Wy as L,
  Yb as Gn,
  Yc as R,
  Yy as Kn,
  Zi as qn,
  Zo as Jn,
  _u as Yn,
  ar as Xn,
  bt as z,
  bu as Zn,
  co as Qn,
  cr as $n,
  dS as er,
  db as tr,
  ds as nr,
  er as rr,
  fr as ir,
  hS as B,
  hl as ar,
  ir as or,
  ix as V,
  jr as H,
  ju as sr,
  kb as cr,
  ki as lr,
  lr as ur,
  ls as dr,
  mb as fr,
  mc as pr,
  ml as mr,
  mo as hr,
  nb as gr,
  ox as U,
  pl as _r,
  qo as vr,
  qx as yr,
  rl as br,
  sr as xr,
  t as Sr,
  uS as Cr,
  wb as wr,
  xS as Tr,
  xr as Er,
  yd as Dr,
  zr as Or,
  zv as kr,
  zx as W,
} from "./main.js";
import { n as Ar, r as jr } from "./display.js";
import { n as Mr, r as Nr, t as G } from "./clanstore.js";
import { t as Pr } from "./salebanner.js";
import { t as Fr } from "./eventinfinitescrollmodal.js";
import { r as Ir } from "./basicpartnereventrender.js";
import { n as Lr, r as Rr, t as zr } from "./breadcrumbs.js";
var K = e(s(), 1),
  q = l();
function Br(e) {
  let { events: t, clanAccountID: n, onViewAll: r, children: i } = e,
    { data: a } = T(n);
  return !t.length || !a
    ? null
    : (0, q.jsx)(R, {
        children: (0, q.jsxs)(`div`, {
          className: j(an, `OtherEventsCtn`),
          children: [
            (0, q.jsxs)(`div`, {
              className: Vt,
              children: [
                (0, q.jsx)(`div`, {
                  className: j(Ht, `EventSectionTitle`),
                  children: Kn(`#EventBrowse_MoreEventsTitle`, a.group_name),
                }),
                (0, q.jsx)(`div`, { className: Wt, children: `\xA0` }),
                r
                  ? (0, q.jsx)(A, {
                      focusable: !0,
                      className: Kt,
                      onActivate: r,
                      children: L(`#EventBrowse_MoreEventsBtn`),
                    })
                  : (0, q.jsx)(xt, {
                      eventModel: t[0],
                      route: D.k_eViewWebSiteHub,
                      className: Kt,
                      children: L(`#EventBrowse_MoreEventsBtn`),
                    }),
              ],
            }),
            (0, q.jsx)(A, {
              className: on,
              "flow-children": `row`,
              navEntryPreferPosition: mr.PREFERRED_CHILD,
              children: t.map((e) =>
                (0, q.jsx)(b, { event: e }, e.AnnouncementGID),
              ),
            }),
            i,
          ],
        }),
      });
}
var Vr = {};
Vr.english = () =>
  xn(() => import(`./partnerevents_english.js`), [], import.meta.url);
async function Hr(e) {
  if (Vr[e]) return await Vr[e]();
}
var Ur = wr(Hr);
function Wr(e) {
  let { appid: t } = e,
    { data: n } = gn(t ? { appid: t } : void 0);
  return !t || !On.logged_in || n?.type != 12
    ? null
    : (0, q.jsx)(Gr, { appid: t });
}
function Gr(e) {
  return fe(e.appid) === !1
    ? (0, q.jsxs)(`div`, {
        className: ot,
        children: [
          (0, q.jsx)(`span`, {
            className: et,
            children: Ur.Localize(`#PartnerEvents_PlaytestOnly_Header`),
          }),
          (0, q.jsx)(`span`, {
            className: dt,
            children: Ur.Localize(`#PartnerEvents_PlaytestOnly_Detail`),
          }),
        ],
      })
    : null;
}
var Kr = f((e) => {
    let {
        event: t,
        lang: n,
        banner: r,
        titleBar: i,
        body: a,
        postbody: o,
        footer: s,
      } = e,
      c = en(t, `background`, n),
      { data: l } = kr(t.appid ? { appid: t.appid } : void 0),
      { data: u } = T(t.clanSteamID.GetAccountID()),
      d = t.BIsImageSafeForAllAges(`background`, n, {
        bAppHasAgeSafeScreenshots: (l?.all_ages_screenshots?.length ?? 0) > 0,
        clanInfo: u ?? void 0,
      }),
      f = `lang_` + er(n),
      p = !!c && t.BImageNeedScreenshotFallback(`background`, n);
    return (0, q.jsxs)(A, {
      scrollIntoViewType: ar.NoTransformSparseContent,
      className: j(
        Ie,
        f,
        zt,
        d ? _t : Re,
        !c && `u0Scnt9OeIA-`,
        p && `udKyBXdwthE-`,
      ),
      children: [
        r,
        i,
        (0, q.jsx)(Wr, { appid: t.appid }),
        (0, q.jsx)(qr, { strImageURL: c }),
        (0, q.jsx)(Jr, { strImageURL: c, body: a, postbody: o }),
        !!s && (0, q.jsx)(R, { children: s }),
      ],
    });
  }),
  qr = (e) => {
    let { strImageURL: t } = e;
    return (0, q.jsxs)(`div`, {
      className: Be,
      children: [
        (0, q.jsx)(`div`, {
          className: Te,
          children:
            t &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(`div`, {
                  className: `PJL3cTty0Ls-`,
                  style: {
                    backgroundColor: `rgb(37, 41, 46)`,
                    backgroundImage: `url(${t})`,
                  },
                }),
                (0, q.jsx)(`div`, {
                  className: `zU-vHqqb-eQ-`,
                  style: {
                    backgroundColor: `rgb(37, 41, 46)`,
                    backgroundImage: `url(${t})`,
                  },
                }),
              ],
            }),
        }),
        t && (0, q.jsx)(`div`, { className: `-wy0zbfIpXg-` }),
      ],
    });
  },
  Jr = (e) => {
    let { body: t, postbody: n, strImageURL: r } = e;
    return (0, q.jsxs)(`div`, {
      className: Oe,
      children: [
        (0, q.jsx)(`div`, { className: Ne }),
        (0, q.jsxs)(`div`, {
          className: Ae,
          children: [
            (0, q.jsxs)(`div`, {
              className: Fe,
              children: [
                !!r &&
                  (0, q.jsx)(`div`, {
                    className: `V-UPj6R9FQU-`,
                    style: { backgroundImage: `url(${r})` },
                  }),
                (0, q.jsx)(R, { children: t }),
              ],
            }),
            !!n && (0, q.jsx)(R, { children: n }),
          ],
        }),
      ],
    });
  },
  J = e(p()),
  Yr = f((e) => {
    let {
        clanAccountID: t,
        gidAnnouncement: n,
        partnerEventStore: r,
        trackingLocation: i,
        bViewAllShowInfiniteScroll: a,
      } = e,
      o = P.InitFromClanID(t, V.EUNIVERSE),
      s = kn(),
      c = (0, K.useRef)(null),
      [l, u] = (0, K.useState)([]),
      [d, f] = (0, K.useState)(!0),
      [p, m] = (0, K.useState)(!1);
    return (
      (0, K.useEffect)(
        () => (
          (async () => {
            c.current && c.current(`PartnerEventRow Initializng new mount`);
            let e = J.default.CancelToken.source();
            c.current = e.cancel;
            let a = P.InitFromClanID(t, V.EUNIVERSE),
              o = await r.LoadAdjacentPartnerEventsByAnnouncement(
                n,
                a,
                null,
                4,
                4,
                { only_summaries: !0 },
                e,
              );
            if (!e.token.reason) {
              o ||= [];
              let e = o
                .filter((e) => e.GetAnnouncementGID() != n)
                .map((e) => e.AnnouncementGID);
              yr(e);
              let t = e
                .slice(0, 3)
                .map((e) => r.GetClanEventFromAnnouncementGID(e))
                .filter((e) => !!e);
              if ((u(t), f(!1), i)) {
                let e = !1;
                if (r.BHasClanAnnouncementGID(n)) {
                  let t = r.GetClanEventFromAnnouncementGID(n);
                  t &&
                    t.BIsPartnerEvent() &&
                    t.BIsVisibleEvent() &&
                    (s.RecordEventRead(t, i), (e = !0));
                }
                (t.length > 0 &&
                  (o
                    .filter((e) => e.BIsPartnerEvent())
                    .forEach((e) => s.RecordEventShown(e, i)),
                  (e = !0)),
                  e && s.Flush());
              }
            }
          })().catch((e) => {
            (console.error(
              `PartnerEventRow: loading the adjacent events failed`,
              e,
            ),
              f(!1));
          }),
          () => {
            c.current && c.current(`PartnerEventRow: unmounting`);
          }
        ),
        [t, n, r, i, s],
      ),
      d
        ? (0, q.jsx)(O, { position: `center`, size: `medium` })
        : (0, q.jsx)(Br, {
            events: l,
            clanAccountID: t,
            onViewAll: a ? () => m(!0) : void 0,
            children:
              !!(p && l.length) &&
              (0, q.jsx)(Fr, {
                appid: l[0].appid,
                clanSteamID: o,
                announcementGID: l[0].AnnouncementGID,
                closeModal: () => m(!1),
                partnerEventStore: r,
              }),
          })
    );
  }),
  Y = class {
    constructor(e) {
      (d(this),
        (this.m_stats = {
          event_gid: `0`,
          library_overview_shown: 0,
          library_overview_read: 0,
          app_details_spotlight_shown: 0,
          app_details_spotlight_read: 0,
          app_details_activity_shown: 0,
          app_details_activity_read: 0,
          store_app_page_shown: 0,
          store_app_page_read: 0,
          store_front_page_shown: 0,
          store_front_page_read: 0,
          community_hub_shown: 0,
          community_hub_read: 0,
          news_hub_shown: 0,
          news_hub_read: 0,
          event_scroller_read: 0,
          ...e,
        }),
        (this.m_stats.total_showm =
          this.m_stats.library_overview_shown +
          this.m_stats.app_details_activity_shown +
          this.m_stats.app_details_spotlight_shown +
          this.m_stats.store_app_page_shown +
          this.m_stats.store_front_page_shown +
          this.m_stats.community_hub_shown +
          this.m_stats.news_hub_shown),
        (this.m_stats.total_read =
          this.m_stats.library_overview_read +
          this.m_stats.app_details_activity_read +
          this.m_stats.app_details_spotlight_read +
          this.m_stats.store_app_page_read +
          this.m_stats.store_front_page_read +
          this.m_stats.community_hub_read +
          this.m_stats.news_hub_read +
          this.m_stats.event_scroller_read),
        (this.m_lastUpdateTime = e ? Math.floor(Date.now() / 1e3) : 0));
    }
    reset(e) {
      ((this.m_stats.library_overview_shown = e.library_overview_shown),
        (this.m_stats.library_overview_read = e.library_overview_read),
        (this.m_stats.app_details_spotlight_shown =
          e.app_details_spotlight_shown),
        (this.m_stats.app_details_spotlight_read =
          e.app_details_spotlight_read),
        (this.m_stats.app_details_activity_shown =
          e.app_details_activity_shown),
        (this.m_stats.app_details_activity_read = e.app_details_activity_read),
        (this.m_stats.store_app_page_shown = e.store_app_page_shown),
        (this.m_stats.store_app_page_read = e.store_app_page_read),
        (this.m_stats.store_front_page_shown = e.store_front_page_shown),
        (this.m_stats.store_front_page_read = e.store_front_page_read),
        (this.m_stats.community_hub_shown = e.community_hub_shown),
        (this.m_stats.community_hub_read = e.community_hub_read),
        (this.m_stats.news_hub_shown = e.news_hub_shown),
        (this.m_stats.news_hub_read = e.news_hub_read),
        (this.m_stats.event_scroller_read = e.event_scroller_read),
        (this.m_stats.total_showm =
          e.library_overview_shown +
          e.app_details_activity_shown +
          e.app_details_spotlight_shown +
          e.store_app_page_shown +
          e.store_front_page_shown +
          e.community_hub_shown +
          e.news_hub_shown),
        (this.m_stats.total_read =
          e.library_overview_read +
          e.app_details_activity_read +
          e.app_details_spotlight_read +
          e.store_app_page_read +
          e.store_front_page_read +
          e.community_hub_read +
          e.news_hub_read +
          e.event_scroller_read),
        (this.m_lastUpdateTime = Date.now() / 1e3));
    }
    m_stats = void 0;
    m_lastUpdateTime = void 0;
  };
(F([n], Y.prototype, `m_stats`, void 0),
  F([n], Y.prototype, `m_lastUpdateTime`, void 0));
var Xr = 3600,
  Zr = class {
    m_mapPerEventStats = new Map();
    m_mapSummaryStats = new Map();
    m_bLoadedFromConfig = !1;
    constructor() {
      d(this);
    }
    LazyInit() {
      if (!this.m_bLoadedFromConfig) {
        let e = Gn(`trackingdatasummary`, `application_config`);
        this.ValidateStoreDefault(e) &&
          this.m_mapSummaryStats.set(e.clan_account_id, new Y(e));
        let t = Gn(`trackingdataevents`, `application_config`);
        (this.ValidateStoreDefaultList(t) &&
          t.forEach((e) => {
            let t = P.InitFromClanID(e.clan_account_id, V.EUNIVERSE),
              n = this.GetKey(t, e.event_gid);
            this.m_mapPerEventStats.set(n, new Y(e));
          }),
          (this.m_bLoadedFromConfig = !0));
      }
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && typeof t == `object` && t.clan_account_id
        ? typeof t.clan_account_id == `number` && t.clan_account_id > 0
        : !1;
    }
    ValidateStoreDefaultList(e) {
      let t = e;
      return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
        ? typeof t[0].clan_account_id == `number` && t[0].clan_account_id > 0
        : !1;
    }
    GetStatsFor(e, t) {
      this.LazyInit();
      let n = this.GetKey(e, t);
      return (
        this.m_mapPerEventStats.has(n) ||
          this.m_mapPerEventStats.set(n, new Y(null)),
        this.m_mapPerEventStats.get(n)
      );
    }
    GetTotalStats(e) {
      return (
        this.LazyInit(),
        this.m_mapSummaryStats.has(e.GetAccountID()) ||
          this.m_mapSummaryStats.set(e.GetAccountID(), new Y(null)),
        this.m_mapSummaryStats.get(e.GetAccountID())
      );
    }
    GetKey(e, t) {
      return e.GetAccountID() + `_` + t;
    }
    async LoadStatsForEvents(e, t, n) {
      this.LazyInit();
      let r = Date.now() / 1e3,
        i = t.filter((t) => {
          let n = this.GetKey(e, t),
            i = this.m_mapPerEventStats.get(n);
          return !i || i.m_stats == null || i.m_lastUpdateTime < r - Xr;
        });
      if (!i || i.length == 0) return !0;
      let a = Pn() + `actions/ajaxgetpartnereventsreport`,
        o = {
          sessionid: En(),
          clan_account_id: e.GetAccountID(),
          gidlist: i.join(`,`),
        };
      try {
        let t = await J.default.get(a, {
          params: o,
          withCredentials: !0,
          cancelToken: n?.token,
        });
        return (
          u(() => {
            (this.m_mapSummaryStats.set(
              e.GetAccountID(),
              new Y(t.data.summary),
            ),
              t.data.events_detail.forEach((t) => {
                let n = this.GetKey(e, t.event_gid);
                this.m_mapPerEventStats.has(n)
                  ? this.m_mapPerEventStats.get(n).reset(t)
                  : this.m_mapPerEventStats.set(n, new Y(t));
              }));
          }),
          !0
        );
      } catch (e) {
        let t = Tn(e);
        console.error(`CPartnerEventReportingStore ` + t.strErrorMsg, t);
      }
      return !1;
    }
    BHasEventStats(e, t) {
      let n = P.InitFromClanID(e, V.EUNIVERSE),
        r = this.GetKey(n, t),
        i = this.m_mapPerEventStats.get(r);
      return !!(i && i.m_stats);
    }
  };
(F([n], Zr.prototype, `m_mapPerEventStats`, void 0),
  F([n], Zr.prototype, `m_mapSummaryStats`, void 0),
  F([r], Zr.prototype, `LazyInit`, null));
var Qr = new Zr();
function $r(e) {
  let { appid: t, creatorHome: n } = e;
  return (0, q.jsx)(`div`, {
    className: Ge,
    children: (0, q.jsxs)(`div`, {
      className: Ae,
      children: [t ? (0, q.jsx)(ei, { appid: t }) : null, n],
    }),
  });
}
function ei(e) {
  let { appid: t } = e,
    { data: n } = gn({ appid: t });
  if (!n) return null;
  let r = ce(n.type ?? 0);
  return (0, q.jsxs)(`div`, {
    className: vt,
    children: [
      (0, q.jsx)(`span`, {
        className: Xe,
        children: L(`#CreatorHome_ThisGame`),
      }),
      (0, q.jsx)(`div`, {
        className: j(ht, `AppSummaryWidgetCtn`),
        children: (0, q.jsx)(Et, {
          id: t,
          type: r,
          bPreferAssetWithoutOverride: !1,
        }),
      }),
    ],
  });
}
var ti = `hb8M4McjnY0-`,
  ni = `_5Oji4nFqXAc-`,
  ri = `xYo1g0NDhqo-`,
  ii = `A8oYb8l7LVE-`,
  ai = `uroGt4fECQw-`,
  oi = `xjV-4UVwNKQ-`;
function si(e) {
  let {
      summary: t,
      bEventIsInModerationQueue: n,
      bIsAllowedInLibrary: r,
      bCompact: i,
      bExpanded: a,
      header: o,
    } = e,
    {
      total_showm: s = 0,
      total_read: c = 0,
      library_overview_shown: l = 0,
      library_overview_read: u = 0,
      app_details_spotlight_shown: d = 0,
      app_details_spotlight_read: f = 0,
      app_details_activity_shown: p = 0,
      app_details_activity_read: m = 0,
      store_app_page_shown: h = 0,
      store_app_page_read: g = 0,
      community_hub_shown: _ = 0,
      community_hub_read: v = 0,
      news_hub_shown: y = 0,
      news_hub_read: b = 0,
    } = t;
  return c + s == 0
    ? null
    : (0, q.jsxs)(`div`, {
        className: j(i ? ii : ti),
        children: [
          (0, q.jsxs)(`div`, {
            className: j(ni),
            children: [
              o,
              (0, q.jsxs)(`div`, {
                className: ri,
                children: [
                  (0, q.jsxs)(`div`, {
                    className: ai,
                    children: [
                      (0, q.jsx)(`span`, {
                        className: void 0,
                        children: L(
                          `#EventDashBoard_SummaryStats_TotalImpressions`,
                        ),
                      }),
                      (0, q.jsx)(`span`, { className: oi, children: z(s) }),
                    ],
                  }),
                  (0, q.jsxs)(`div`, {
                    className: ai,
                    children: [
                      (0, q.jsx)(`span`, {
                        className: void 0,
                        children: L(`#EventDashBoard_SummaryStats_TotalViews`),
                      }),
                      (0, q.jsx)(`span`, { className: oi, children: z(c) }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          !!(r && n) &&
            (0, q.jsxs)(`div`, {
              className: `g2M5qxpNbc0-`,
              children: [
                (0, q.jsx)(`div`, {
                  className: `_5uAuMCFB1mA-`,
                  children: L(`#EventDashBoard_ModerationQueueWarning`),
                }),
                (0, q.jsx)(`a`, {
                  href:
                    Vn.PARTNER_BASE_URL +
                    `doc/marketing/event_tools/moderation`,
                  children: L(`#EventDashBoard_Location_ModerationTitle`),
                }),
              ],
            }),
          a &&
            (0, q.jsxs)(`div`, {
              className: j(`_7gP-7IL8pWM-`),
              children: [
                r &&
                  (0, q.jsxs)(`div`, {
                    className: j(`txBIc-iUtwo-`, n && `TmD6LK-KQ2g-`),
                    children: [
                      (0, q.jsxs)(`div`, {
                        className: `M2UcssSbqTM-`,
                        children: [
                          (0, q.jsx)(`span`, {
                            children: L(`#EventDashBoard_Location_LibraryHome`),
                          }),
                          (0, q.jsxs)(`span`, {
                            className: `_1E0Xm5nvOIs-`,
                            children: [
                              `( `,
                              L(`#EventDashBoard_Location_WaitingModeraion`),
                              ` )`,
                            ],
                          }),
                        ],
                      }),
                      (0, q.jsxs)(`div`, {
                        className: `pPkrPZbyS28-`,
                        children: [
                          (0, q.jsx)(`span`, {
                            children: L(
                              `#EventDashBoard_Summary_LibraryHome_Shown`,
                            ),
                          }),
                          (0, q.jsx)(`span`, { children: z(l) }),
                        ],
                      }),
                      (0, q.jsxs)(`div`, {
                        className: `pPkrPZbyS28-`,
                        children: [
                          (0, q.jsx)(`span`, {
                            children: L(
                              `#EventDashBoard_Summary_LibraryHome_Read`,
                            ),
                          }),
                          (0, q.jsx)(`span`, { children: z(u) }),
                        ],
                      }),
                      (0, q.jsxs)(`div`, {
                        className: `M2UcssSbqTM-`,
                        children: [
                          (0, q.jsx)(`span`, {
                            children: L(
                              `#EventDashBoard_Location_LibraryDetail`,
                            ),
                          }),
                          (0, q.jsxs)(`span`, {
                            className: `_1E0Xm5nvOIs-`,
                            children: [
                              `( `,
                              L(`#EventDashBoard_Location_WaitingModeraion`),
                              ` )`,
                            ],
                          }),
                        ],
                      }),
                      d > 0 &&
                        (0, q.jsxs)(q.Fragment, {
                          children: [
                            (0, q.jsxs)(`div`, {
                              className: `pPkrPZbyS28-`,
                              children: [
                                (0, q.jsx)(`span`, {
                                  children: L(
                                    `#EventDashBoard_Summary_AppDetailSpotlight_Shown`,
                                  ),
                                }),
                                (0, q.jsx)(`span`, { children: z(d) }),
                              ],
                            }),
                            (0, q.jsxs)(`div`, {
                              className: `pPkrPZbyS28-`,
                              children: [
                                (0, q.jsx)(`span`, {
                                  children: L(
                                    `#EventDashBoard_Summary_AppDetailSpotlight_Read`,
                                  ),
                                }),
                                (0, q.jsx)(`span`, { children: z(f) }),
                              ],
                            }),
                          ],
                        }),
                      (0, q.jsxs)(`div`, {
                        className: `pPkrPZbyS28-`,
                        children: [
                          (0, q.jsx)(`span`, {
                            children: L(
                              `#EventDashBoard_Summary_AppDetailActivity_Shown`,
                            ),
                          }),
                          (0, q.jsx)(`span`, { children: z(p) }),
                        ],
                      }),
                      (0, q.jsxs)(`div`, {
                        className: `pPkrPZbyS28-`,
                        children: [
                          (0, q.jsx)(`span`, {
                            children: L(
                              `#EventDashBoard_Summary_AppDetailActivity_Read`,
                            ),
                          }),
                          (0, q.jsx)(`span`, { children: z(m) }),
                        ],
                      }),
                    ],
                  }),
                (0, q.jsxs)(`div`, {
                  className: `mev6biKK3PY-`,
                  children: [
                    (0, q.jsx)(`div`, {
                      className: `M2UcssSbqTM-`,
                      children: (0, q.jsx)(`span`, {
                        children: L(`#EventDashBoard_Location_StoreDetail`),
                      }),
                    }),
                    (0, q.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, q.jsx)(`span`, {
                          children: L(
                            `#EventDashBoard_Summary_StoreAppPage_Shown`,
                          ),
                        }),
                        (0, q.jsx)(`span`, { children: z(h) }),
                      ],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, q.jsx)(`span`, {
                          children: L(
                            `#EventDashBoard_Summary_StoreAppPage_Read`,
                          ),
                        }),
                        (0, q.jsx)(`span`, { children: z(g) }),
                      ],
                    }),
                    (0, q.jsx)(`div`, {
                      className: `M2UcssSbqTM-`,
                      children: (0, q.jsx)(`span`, {
                        children: L(`#EventDashBoard_Location_CommunityDetail`),
                      }),
                    }),
                    (0, q.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, q.jsx)(`span`, {
                          children: L(
                            `#EventDashBoard_Summary_Community_Shown`,
                          ),
                        }),
                        (0, q.jsx)(`span`, { children: z(_) }),
                      ],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, q.jsx)(`span`, {
                          children: L(`#EventDashBoard_Summary_Community_Read`),
                        }),
                        (0, q.jsx)(`span`, { children: z(v) }),
                      ],
                    }),
                    (0, q.jsx)(`div`, {
                      className: `M2UcssSbqTM-`,
                      children: (0, q.jsx)(`span`, {
                        children: L(`#EventDashBoard_Location_NewsHubDetail`),
                      }),
                    }),
                    (0, q.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, q.jsx)(`span`, {
                          children: L(`#EventDashBoard_Summary_NewsHub_Shown`),
                        }),
                        (0, q.jsx)(`span`, { children: z(y) }),
                      ],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, q.jsx)(`span`, {
                          children: L(`#EventDashBoard_Summary_NewsHub_Read`),
                        }),
                        (0, q.jsx)(`span`, { children: z(b) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      });
}
var ci = f(function (e) {
    let { event: t, bIsOGG: n, summary: r } = e,
      i = Lt();
    return (0, q.jsxs)(R, {
      children: [
        (0, q.jsxs)(`div`, {
          className: Ce,
          children: [
            (0, q.jsxs)(`div`, {
              className: tt,
              children: [
                (0, q.jsx)(`span`, { children: L(`#EventEditor_Comments`) }),
                (0, q.jsx)(`span`, { children: z(t.nCommentCount) }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: tt,
              children: [
                (0, q.jsx)(`span`, { children: L(`#EventEditor_UpVotes`) }),
                (0, q.jsx)(`span`, {
                  children: t.nVotesUp ? z(t.nVotesUp) : 0,
                }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: tt,
              children: [
                (0, q.jsx)(`span`, { children: L(`#EventEditor_DownVotes`) }),
                (0, q.jsx)(`span`, {
                  children: t.nVotesDown ? z(t.nVotesDown) : 0,
                }),
              ],
            }),
          ],
        }),
        r &&
          (0, q.jsxs)(`div`, {
            className: `W-arcmNojEY-`,
            children: [
              L(`#EventDashBoard_SummaryStats_Admin_Title`),
              (0, q.jsx)(si, {
                summary: r,
                bIsAllowedInLibrary: n,
                bEventIsInModerationQueue: xe(t, i),
                bCompact: !0,
                bExpanded: !0,
              }),
            ],
          }),
      ],
    });
  }),
  li = f((e) => {
    let {
        event: t,
        lang: n,
        nOverrideStartTime: r,
        nOverrideEndTime: i,
        reminder: a,
        editorInfo: o,
        meetSteamInfo: s,
      } = e,
      c = Lt(),
      l = t.appid,
      u = t.clanSteamID,
      d = r || t.GetStartTimeAndDateUnixSeconds(),
      { data: f, isPending: p } = gn(l ? { appid: l } : void 0),
      { data: m, isPending: h } = T(u.GetAccountID());
    return h || (l && p)
      ? null
      : (0, q.jsx)(`div`, {
          className: lt,
          children: (0, q.jsxs)(`div`, {
            className: Se,
            children: [
              (m?.is_ogg ?? !!l)
                ? (0, q.jsx)(ui, { appid: m?.appid || l })
                : (0, q.jsx)(di, { clanSteamID: u }),
              (0, q.jsx)(at, {
                event: t,
                className: Ve,
                nOverrideEndTime: i,
                nOverrideStartTime: r,
              }),
              a &&
                t.type !== 28 &&
                c < d &&
                (0, q.jsx)(`div`, { className: `qpxV4nQHXMc-`, children: a }),
              (0, q.jsxs)(`div`, {
                className: je,
                children: [
                  (0, q.jsx)(`div`, {
                    className: it,
                    children: L(`#EventDisplay_RightColumnTitle_EventType`),
                  }),
                  (0, q.jsxs)(`div`, {
                    className: mt,
                    children: [t.GetCategoryAsString(), ` `],
                  }),
                ],
              }),
              o,
              !!t.jsondata.meet_steam_groups && s,
            ],
          }),
        });
  });
function ui(e) {
  let { appid: t } = e;
  Dn(t && t != 0, `Expected Appid In Game Info Section`);
  let { data: n, isPending: r } = gn(t ? { appid: t } : void 0);
  return (0, q.jsxs)(`div`, {
    className: ze,
    children: [
      (0, q.jsx)(`div`, {
        className: it,
        children: be.some((e) => t === e)
          ? L(`#EventDisplay_RightColumnTitle_Blog`)
          : L(`#EventDisplay_RightColumnTitle_Game`),
      }),
      (0, q.jsx)(sn, {
        imageType: `header`,
        capsule: { id: t, type: `game` },
        bHidePriceIfOwned: !0,
        bHideStatusBanners: !0,
        bPreferAssetWithoutOverride: !1,
      }),
      (0, q.jsxs)(`div`, {
        className: j(qe),
        children: [
          n &&
            (0, q.jsx)(dn, {
              appid: t,
              bIsFree: !!n.is_free,
              bIsComingSoon: !!n.is_coming_soon,
              className: `T-oflieec2c-`,
            }),
          r && (0, q.jsx)(O, { size: `small`, position: `center` }),
        ],
      }),
    ],
  });
}
function di(e) {
  let { clanSteamID: t } = e,
    n = t.GetAccountID(),
    { data: r } = T(n),
    { data: i } = he(n);
  if (!r) return null;
  let a = i
    ? w(i, `developer`)
    : Vn.COMMUNITY_BASE_URL +
      (r.vanity_url
        ? `groups/` + r.vanity_url
        : `gid/` + t.ConvertTo64BitString());
  return (0, q.jsxs)(`div`, {
    className: ze,
    children: [
      (0, q.jsx)(`div`, { className: it, children: r.group_name }),
      (0, q.jsx)(re, {
        href: Un(a),
        children: (0, q.jsx)(`div`, {
          className: Ue,
          style: { backgroundImage: `url(${r.avatar_full_url})` },
        }),
      }),
    ],
  });
}
var fi = `i4n3Txt5Cl4-`,
  pi = `TGoEUZkVmh8-`;
function mi(e) {
  let { event: t, lang: n } = e,
    r = m(() => t.jsondata.meet_steam_groups),
    { data: i } = we(t.clanSteamID.GetAccountID()),
    [a, o, s] = (0, K.useMemo)(() => {
      let e = new Map(),
        t = new Map(),
        n = !1;
      return (
        r.forEach((r) => {
          r.group_visibility_tokens?.length > 0
            ? (r.group_visibility_tokens.forEach((t) => {
                e.has(t) ? e.get(t).push(r.group_id) : e.set(t, [r.group_id]);
              }),
              t.set(r.group_id, r.localized_session_title[0]))
            : (n = !0);
        }),
        [e, t, n]
      );
    }, [r]);
  return a.size == 0 || !i?.can_edit
    ? null
    : (0, q.jsxs)(`div`, {
        className: j(pi, fi),
        children: [
          (0, q.jsx)(ur, { children: `(VO) Meet Steam URLs` }),
          Array.from(a.keys()).map((e) => {
            let n = a.get(e);
            return (0, q.jsx)(
              `div`,
              {
                children: (0, q.jsxs)(`a`, {
                  href: `${V.STORE_BASE_URL}meetsteam/${t.GID}/${e}`,
                  target: `_blank`,
                  children: [
                    `Shows Sessions: `,
                    n.map((t) =>
                      (0, q.jsxs)(
                        `span`,
                        { children: [o.get(t), `,`] },
                        `name` + e + `_` + t,
                      ),
                    ),
                  ],
                }),
              },
              `tokenurl_${e}`,
            );
          }),
          !!s &&
            (0, q.jsx)(`div`, {
              children: (0, q.jsx)(`a`, {
                href: `${V.STORE_BASE_URL}meetsteam/${t.GID}`,
                target: `_blank`,
                children: `Show all public sessions`,
              }),
            }),
        ],
      });
}
var hi = K.lazy(() =>
    xn(
      () => import(`./broadcast_embeddable2.js`),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
        74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
      ]),
      import.meta.url,
    ),
  ),
  gi = f((e) => {
    let {
        event: t,
        lang: n,
        emoticonStore: r,
        nOverrideStartTime: i,
        nOverrideEndTime: a,
        adminPanel: o,
        otherEventRow: s,
        titleBar: c,
      } = e,
      l = t.appid,
      u = t.clanSteamID.GetAccountID(),
      d = rn(),
      f = Lt(),
      { data: p, isPending: m } = gn(l ? { appid: l } : void 0),
      { data: h, isPending: g } = T(u);
    if (
      (K.useEffect(() => {
        window.scrollTo(0, 0);
      }, [l, u]),
      !d && t.GetEventType() == 36)
    )
      return (0, q.jsx)(St, {
        eventModel: t,
        route: D.k_eStoreSalePage,
        bPopup: !1,
      });
    let _ = bt(t, D.k_eStoreNewsHub, `allowRelative`),
      v = bt(t, D.k_eStoreUsersNewsHub, `allowRelative`);
    if (!t.bLoaded || g || (l && m))
      return (0, q.jsx)(`div`, {
        className: Sr,
        style: { height: `400px` },
        children: (0, q.jsx)(O, { size: `medium`, string: L(`#Loading`) }),
      });
    let y = p?.name || h?.group_name,
      b = t.GetDescriptionWithFallback(n);
    return (0, q.jsx)(Kr, {
      event: t,
      lang: n,
      titleBar: c,
      banner: (0, q.jsx)($e, { appId: t.appid, clanId: u }),
      body: (0, q.jsxs)(R, {
        children: [
          (0, q.jsxs)(`div`, {
            className: Me,
            children: [
              (0, q.jsx)(zr, {
                crumbs: [
                  { name: L(`#BreadCrumbs_AllEvents`), url: v },
                  ...(y
                    ? [{ name: L(`#BreadCrumbs_GameEvents`, y), url: _ }]
                    : []),
                ],
              }),
              (0, q.jsx)(`div`, {
                className: ke,
                children: t.GetNameWithFallback(n),
              }),
              t.BHasSubTitle(n) &&
                (0, q.jsx)(`div`, {
                  className: `ay-K0NBOIuc-`,
                  children: t.GetSubTitle(n),
                }),
            ],
          }),
          !!t.BEventCanShowBroadcastWidget(d, f) &&
            (0, q.jsx)(`div`, {
              className: `hSFWQBRmqTY-`,
              children: (0, q.jsx)(K.Suspense, {
                fallback: null,
                children: (0, q.jsx)(hi, {
                  event: t,
                  bIsPreview: d,
                  accountIDs: d ? t.jsondata.broadcast_whitelist : void 0,
                }),
              }),
            }),
          (0, q.jsxs)(`div`, {
            className: j(Le, `EventDetail`),
            children: [
              (0, q.jsxs)(`div`, {
                className: We,
                children: [
                  (0, q.jsxs)(R, {
                    children: [
                      t.BHasTag(`steam_award_nomination_request`) &&
                        (0, q.jsx)(Ar, { event: t, lang: n, previewMode: d }),
                      t.BHasTag(`steam_award_vote_request`) &&
                        (0, q.jsx)(jr, {
                          appID: t.appid,
                          bIsEventActionEnabled: t.BIsEventActionEnabled(f),
                          voteCategories: t.GetSteamAwardNomineeCategories(),
                        }),
                    ],
                  }),
                  (0, q.jsx)(R, {
                    children: (0, q.jsxs)(`div`, {
                      className: j(`EventDetailsBody`, He),
                      children: [
                        (0, q.jsx)(rt, {
                          text: b || ``,
                          showErrorInfo: d,
                          event: t,
                          languageOverride: n,
                        }),
                        !!(
                          t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id
                        ) &&
                          (0, q.jsxs)(`div`, {
                            className: j(`iMj27DR-pkY-`),
                            children: [
                              (0, q.jsx)(Pr, { gidEvent: t.GID }),
                              (0, q.jsx)(br, {
                                className: j(`yYL-OrX9PtQ-`, `LinkButton`),
                                href: Un(nn(t)),
                                children: L(`#Event_Button_VisitSalePage`),
                              }),
                            ],
                          }),
                        !!t.jsondata.associated_appid &&
                          (0, q.jsx)(Zt, {
                            id: t.jsondata.associated_appid,
                            inputType: `game`,
                            bApplyUserContentPref: !1,
                          }),
                      ],
                    }),
                  }),
                  (0, q.jsx)(R, { children: (0, q.jsx)(ut, { event: t }) }),
                  !!t.jsondata.read_more_link &&
                    (0, q.jsx)(`div`, {
                      className: j(`iMj27DR-pkY-`),
                      children: (0, q.jsx)(Er, {
                        className: j(`yYL-OrX9PtQ-`),
                        href: t.jsondata.read_more_link,
                        children: L(`#EventEmail_Button_ClickForMoreDetails`),
                      }),
                    }),
                  (0, q.jsx)(`span`, { className: Gt }),
                  (0, q.jsxs)(R, {
                    children: [
                      !!t.appid && (0, q.jsx)(ln, { appid: t.appid }),
                      !!t.jsondata.sale_social_media_items &&
                        (0, q.jsx)(un, {
                          gidClanEvent: t.GID,
                          rgSocial: t.jsondata.sale_social_media_items,
                        }),
                    ],
                  }),
                ],
              }),
              (0, q.jsx)(R, {
                children: (0, q.jsx)(li, {
                  event: t,
                  lang: n,
                  nOverrideStartTime: i,
                  nOverrideEndTime: a,
                  reminder: (0, q.jsx)(ct, { eventModel: t, lang: n }),
                  editorInfo: (0, q.jsx)(_i, {
                    event: t,
                    bIsOGG: h?.is_ogg ?? !!l,
                  }),
                  meetSteamInfo: (0, q.jsx)(mi, { event: t, lang: n }),
                }),
              }),
            ],
          }),
          (0, q.jsx)(Ye, { eventModel: t, emoticonStore: r }),
        ],
      }),
      postbody: (0, q.jsxs)(R, { children: [o, s] }),
      footer: (0, q.jsx)($r, {
        appid: t.appid,
        creatorHome: (0, q.jsx)(oe, { appid: t.appid, bSmallFormat: !0 }),
      }),
    });
  });
function _i(e) {
  let { event: t, bIsOGG: n } = e,
    r = Lt(),
    { data: i } = we(t.clanSteamID.GetAccountID()),
    a = !!i?.can_edit,
    o = t.clanSteamID,
    s = t.GID,
    c = a && t.BIsPartnerEvent() && t.BIsVisibleEvent(r);
  K.useEffect(() => {
    if (!c) return;
    let e = J.default.CancelToken.source();
    return (
      Qr.LoadStatsForEvents(o, [s], e),
      () => e.cancel(`EventDisplayEditorInfo cancelled`)
    );
  }, [c, o, s]);
  let l = m(() => c && Qr.GetStatsFor(o, s));
  return a
    ? (0, q.jsx)(ci, { event: t, bIsOGG: n, summary: l ? l.m_stats : void 0 })
    : null;
}
var vi = `FDyPgF-sqXU-`,
  yi = class e {
    m_objApprovalPriviledge = null;
    m_LoadingPriviledgePromise = null;
    BHasSteamChinaAppApprovalPriviledge() {
      return this.m_objApprovalPriviledge?.bHasAccess;
    }
    async HintLoadAppApprovalPriviledge() {
      return this.m_objApprovalPriviledge
        ? this.m_objApprovalPriviledge
        : ((this.m_LoadingPriviledgePromise ||=
            this.InternalLoadAppApprovalPriviledge()),
          this.m_LoadingPriviledgePromise);
    }
    async InternalLoadAppApprovalPriviledge() {
      let e = V.STORE_BASE_URL + `events_admin/ajaxgetscapprovalpriviledge`;
      try {
        let t = await J.default.get(e, { withCredentials: !0 });
        if (t?.data?.success == 1)
          return (
            (this.m_objApprovalPriviledge = { bHasAccess: t.data.bHasAccess }),
            this.m_objApprovalPriviledge
          );
      } catch (e) {
        let t = Tn(e);
        console.error(
          `CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: ` +
            t.strErrorMsg,
          t,
        );
      }
      return { bHasAccess: !1 };
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {
      d(this);
      let e = Gn(`sc_app_privildge`, `application_config`);
      this.ValidateStoreDefault(e)
        ? ((this.m_objApprovalPriviledge = e),
          (this.m_LoadingPriviledgePromise = null))
        : (U.logged_in && V.EREALM === Tr.k_ESteamRealmChina) ||
          (this.m_objApprovalPriviledge = { bHasAccess: !1 });
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && typeof t == `object` && typeof t.bHasAccess == `boolean`;
    }
  };
F([n], yi.prototype, `m_objApprovalPriviledge`, void 0);
var bi = f((e) => {
    let [t, n] = K.useState(null),
      { eventModel: r } = e,
      i = r.clanSteamID.GetAccountID(),
      { data: a } = we(i);
    return (
      K.useEffect(() => {
        let e = J.default.CancelToken.source();
        return (
          (async () => {
            let t = await yi.Get().HintLoadAppApprovalPriviledge();
            e.token.reason || n(U.is_support || !!a?.can_edit || t.bHasAccess);
          })(),
          () => e.cancel(`SteamChinaAdminPanel is unmounting`)
        );
      }, [i, a]),
      U.is_support || a?.can_edit
        ? (0, q.jsx)(fn, {
            eventModel: r,
            partnerEventStore: e.partnerEventStore,
            addtionalAdminButtons: t
              ? [(0, q.jsx)(xi, { eventModel: r }, `removesteamchina`)]
              : void 0,
          })
        : yi.Get().BHasSteamChinaAppApprovalPriviledge()
          ? (0, q.jsxs)(`div`, {
              className: Ee,
              children: [
                (0, q.jsx)(`span`, {
                  className: De,
                  children: L(`#EventDisplay_Admin_Title`),
                }),
                (0, q.jsx)(xi, { eventModel: r }, `removesteamchina`),
              ],
            })
          : null
    );
  }),
  xi = (e) => {
    let { eventModel: t } = e,
      n = async () => {
        let n = new URLSearchParams();
        (n.append(`sessionid`, En()),
          n.append(`clan_accountid`, `` + t.clanSteamID.GetAccountID()),
          n.append(`gid_clan_event`, `` + t.GID));
        let r = !1,
          i = 0;
        try {
          let e = `${V.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
            a = await J.default.post(e, n, { withCredentials: !0 });
          ((r = a?.data?.success == 1 || a?.data?.success == 29),
            a?.data?.success == 29 &&
              console.warn(
                `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${t.GID}; event is still removed from SC`,
              ),
            (i = a?.data?.success));
        } catch (e) {
          let t = Tn(e);
          ((i = t.errorCode),
            console.error(
              `RemoveEventFromSteamChinaButton: error ` + t.strErrorMsg,
              t,
            ));
        }
        (e.closeModal && e.closeModal(),
          I(
            r
              ? (0, q.jsx)(Sn, {
                  bAlertDialog: !0,
                  children: L(`#EventDisplay_Share_Success`),
                })
              : (0, q.jsx)(Mn, {
                  children: L(`#EventDisplay_Share_Failure`) + ` ` + i,
                }),
            window,
          ));
      };
    return (0, q.jsx)(`div`, {
      className: j(Ut, Ze, Bt),
      onClick: (t) => {
        let r = !1;
        I(
          (0, q.jsx)(Sn, {
            strTitle: L(`#EventAdmin_Moderation_HideEventInSC`),
            strDescription: L(`#EventAdmin_Moderation_HideEventInSC_Desc`),
            bDestructiveWarning: !0,
            closeModal: e.closeModal,
            onOK: () => {
              ((r = !0), n());
            },
            children:
              r && (0, q.jsx)(O, { size: `medium`, position: `center` }),
          }),
          sr(t),
        );
      },
      children: L(`#EventAdmin_Moderation_HideEventInSC`),
    });
  },
  X = Ir.Get(),
  Si = Ir.GetSummaryStore();
function Ci() {
  document.body.classList.contains(`events_hub`) &&
    document.body.classList.remove(`events_hub`);
}
function wi(e) {
  let t;
  if (e && e.appid) t = M.Get().GetApp(e.appid)?.GetName();
  else if (e && e.clanSteamID) {
    let n = G.GetClanInfoByClanAccountID(e.clanSteamID.GetAccountID());
    t = n && n.group_name;
  }
  let n = e && e.GetNameWithFallback(B(V.LANGUAGE));
  if (e && t && n) {
    let e = L(`#EventCalendar_TabTitle_GroupNameAndEventDetail`, t, n);
    document.title != e && (document.title = e);
  }
}
var Ti = f((e) => {
    let {
        bInfiniteScroll: t,
        event_gid: n,
        announcement_gid: r,
        clansteamid: i,
        appid: a,
      } = e,
      [o, s] = (0, K.useState)(n ? X.GetClanEventModel(n) : void 0),
      [, c] = cn(o?.appid, {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_screenshots: !0,
      }),
      [l, u] = (0, K.useState)(!1),
      d = (e, t) => {
        t.token.reason || (s(e), wi(e));
      },
      f = (e) => {
        let t = Tn(e);
        (console.error(`StoreEventDetailView failed ` + t.strErrorMsg, t),
          u(!0));
      };
    ((0, K.useEffect)(Ci, []),
      (0, K.useEffect)(() => {
        let e = J.default.CancelToken.source();
        return (
          o ||
            (n && !X.GetClanEventModel(n)
              ? X.LoadPartnerEventGeneric(i, a, n, void 0, 0)
                  .then((t) => d(t, e))
                  .catch(() => {
                    e.token.reason ||
                      X.LoadPartnerEventGeneric(i, a, void 0, n, 0)
                        .then((t) => d(t, e))
                        .catch(f);
                  })
              : r &&
                !X.GetClanEventGIDFromAnnouncementGID(r) &&
                X.LoadPartnerEventGeneric(i, a, void 0, r, 0)
                  .then((t) => d(t, e))
                  .catch(f)),
          () => {
            e.cancel(`StoreEventDetailView: unmounting`);
          }
        );
      }, [n, i, a, r, o]));
    let p = bt(o, D.k_eStoreNewsHub, `allowRelative`);
    if (l || !o || (o?.appid && c == 1)) {
      let e = `lang_` + er(B(V.LANGUAGE));
      return (0, q.jsxs)(`div`, {
        className: j(Ie, e, zt, pt),
        children: [
          (0, q.jsx)(`div`, { style: { height: `100px` } }),
          (0, q.jsx)(qr, { strImageURL: `` }),
          (0, q.jsx)(Jr, {
            strImageURL: ``,
            body: l
              ? (0, q.jsx)(`div`, {
                  className: vi,
                  children: Kn(
                    `#Events_FailedToFind`,
                    (0, q.jsx)(`a`, {
                      href: V.STORE_BASE_URL + `news/`,
                      children: L(`#EventDisplay_NewsHubSubtitle`),
                    }),
                  ),
                })
              : (0, q.jsx)(O, {
                  string: L(`#Loading`),
                  size: `medium`,
                  position: `center`,
                }),
            postbody:
              l && i
                ? (0, q.jsx)(Yr, {
                    clanAccountID: i.GetAccountID(),
                    partnerEventStore: Si,
                  })
                : void 0,
          }),
        ],
      });
    }
    return t
      ? (0, q.jsx)(R, {
          children: (0, q.jsx)(Fr, {
            appid: o.appid,
            trackingLocation: 7,
            announcementGID: o.GetAnnouncementGID(),
            partnerEventStore: X,
            eventModel: o,
            showAppHeader: !0,
            closeModal: () => e.history.push(p),
          }),
        })
      : (0, q.jsx)(R, {
          children: (0, q.jsx)(gi, {
            lang: B(V.LANGUAGE),
            event: o,
            adminPanel:
              V.EREALM === Tr.k_ESteamRealmChina
                ? (0, q.jsx)(bi, { eventModel: o })
                : (0, q.jsx)(fn, { eventModel: o, partnerEventStore: X }),
            otherEventRow: (0, q.jsx)(Yr, {
              clanAccountID: o.clanSteamID.GetAccountID(),
              gidAnnouncement: o.AnnouncementGID,
              partnerEventStore: Si,
            }),
          }),
        });
  }),
  Ei = c(Ti),
  Z = class e {
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
      d(this);
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
      bn.GetLanguageListForRealms([V.EREALM]).forEach((e) =>
        this.m_mapLangToNewsCurators.set(e, []),
      );
      let e = V.STORE_BASE_URL + `events/ajaxgetnewscurators`,
        t = { origin: self.origin },
        n = await J.default.get(e, { params: t });
      u(() => {
        (n.data && n.data.success && this.HandleCuratorResponse(n.data),
          (this.m_bIsLoadComplete = !0));
      });
    }
    HandleCuratorResponse(e) {
      if (
        (e.groupvanityinfo && G.RegisterClanData(e.groupvanityinfo),
        e.newscuratorinfo)
      )
        for (let t of e.newscuratorinfo) {
          if (this.m_mapNewsCurators.has(t.clanAccountID)) continue;
          this.m_mapNewsCurators.set(t.clanAccountID, t);
          let e = G.GetClanInfoByClanAccountID(t.clanAccountID);
          e && this.m_mapLangToNewsCurators.get(e.rss_language)?.push(t);
        }
    }
  };
(F([n], Z.prototype, `m_mapNewsCurators`, void 0),
  F([n], Z.prototype, `m_bIsLoadComplete`, void 0),
  F([n], Z.prototype, `m_mapLangToNewsCurators`, void 0),
  F([i], Z.prototype, `allNewsCurators`, null),
  F([r], Z.prototype, `HandleCuratorResponse`, null));
var Di = `_4gJW-1D-qoo-`,
  Oi = `g-Xc-fP6jvg-`,
  ki = `_1Wx2O8pIAbo-`,
  Ai = `KYpVcvhG9vI-`;
function ji(e) {
  let t = new Set();
  return (
    (e.indexOf(`games`) >= 0 || e.indexOf(`dlc`) >= 0) && t.add(`apps`),
    e.indexOf(`curators`) >= 0 && t.add(`curators`),
    t
  );
}
function Mi(e) {
  return e == `game` || e == `software`
    ? `games`
    : e == `dlc` || e == `music`
      ? `dlc`
      : null;
}
var Ni = 300,
  Pi = class extends K.Component {
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
    m_timerForChange = new cr();
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
      let t = ji(this.props.rgCorporaToSearch);
      (t.has(`apps`) && this.GetAppSuggestionsFromServer(e),
        t.has(`curators`) && this.GetCuratorSuggestions(e));
    }
    async GetCuratorSuggestions(e) {
      let t = Z.Get().allNewsCurators,
        n = [];
      for (let r of t) {
        let t = G.GetClanInfoByClanAccountID(r.clanAccountID),
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
            Zn.Get().BIsIgnoringCurator(t.clanAccountID)
          )
            continue;
          let e = Zn.Get().BIsFollowingCurator(t.clanAccountID),
            r = (0, q.jsx)(
              Fi,
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
          cc: V.COUNTRY,
          l: V.LANGUAGE,
          realm: Tr.k_ESteamRealmGlobal,
          origin: self.origin,
          f: `jsonfull`,
          term: e.replace(` `, `+`),
          require_type: n.join(`,`),
          excluded_tags: Zn.Get().GetExcludedTagsSortedByID(),
          excluded_content_descriptors: Zn.Get().ExcludedContentDescriptor,
        },
        i = `${V.STORE_BASE_URL}search/suggest`,
        a = await J.default.get(i, { params: r, withCredentials: !0 });
      if (t < this.m_mapHighestReceivedRequestIDFromBackEnd.get(`apps`)) return;
      this.m_mapHighestReceivedRequestIDFromBackEnd.set(`apps`, t);
      let o;
      (a?.data?.length &&
        (o = a.data.map((e) => {
          let t = { corpus: Mi(e.type), ...e, id: parseInt(e.id) };
          if (
            this.props.fnFilterSuggestion &&
            !this.props.fnFilterSuggestion(t)
          )
            return null;
          let n = (0, q.jsx)(
            Fi,
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
            this.m_timerForChange.Schedule(Ni, () =>
              this.GetSuggestionsFromServer(t),
            ))
          : (Array.from(ji(this.props.rgCorporaToSearch)).forEach((e) =>
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
        u = ji(n).size > 1,
        d =
          u &&
          c &&
          L(
            n.indexOf(`dlc`) >= 0
              ? `#EventCalendar_SearchResultsHeader_GameAndDLCSection`
              : `#EventCalendar_SearchResultsHeader_GameSection`,
          ),
        f = Array.from(ji(n)).some(
          (e) =>
            this.m_nHighestSentRequestID >
            this.m_mapHighestReceivedRequestIDFromBackEnd.get(e),
        ),
        p = !l && !c && !f;
      return (0, q.jsxs)(`div`, {
        className: Di,
        children: [
          (0, q.jsx)(In, {
            type: `text`,
            label: e,
            onChange: this.UpdateSuggestions,
            bAlwaysShowClearAction: s,
            focusOnMount: t,
          }),
          s &&
            (0, q.jsxs)(`div`, {
              className: j(`JjeIVeB00KI-`, r),
              children: [
                c &&
                  (0, q.jsxs)(
                    `div`,
                    {
                      children: [
                        u &&
                          (0, q.jsx)(`div`, {
                            className: `KIFc7JoTW0c-`,
                            children: d,
                          }),
                        a,
                      ],
                    },
                    `game-suggestions`,
                  ),
                l &&
                  (0, q.jsxs)(
                    `div`,
                    {
                      children: [
                        u &&
                          (0, q.jsx)(`div`, {
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
                  (0, q.jsx)(
                    `div`,
                    {
                      className: `jciUsTxtI2I-`,
                      children: L(`#EventCalendar_GameSearch_NoneFound`),
                    },
                    `empty-results`,
                  ),
                f && (0, q.jsx)(O, { size: `small` }),
              ],
            }),
        ],
      });
    }
  };
F([W], Pi.prototype, `UpdateSuggestions`, null);
var Fi = (e) =>
    (0, q.jsxs)(
      `div`,
      {
        className: Oi,
        onClick: () => e.fnOnSelected(e.suggestion),
        children: [
          (0, q.jsx)(`img`, { src: e.suggestion.img, className: ki }),
          (0, q.jsxs)(`div`, {
            className: Ai,
            children: [` `, Pt(e.suggestion.name), ` `],
          }),
          e.bShowFollowingLabel &&
            (0, q.jsx)(`div`, {
              className: `uKt-HtVvtDo-`,
              children: L(`#EventCalendar_FollowingCurator`),
            }),
        ],
      },
      `suggestion-${e.suggestion.id}`,
    ),
  Ii = `_6ZHZTf7muKA-`,
  Li = `zdmQVstxVQg-`,
  Ri = `iT-bz3pMJXU-`,
  zi = `oZDQ4c13u2U-`,
  Bi = `oFY5ImXfh3c-`,
  Vi = `Ik8p1HIXTW0-`,
  Hi = `_3IhI4vEjnlA-`,
  Ui = `RG84muU5ZUQ-`,
  Wi = `LuMqJf79rpI-`;
function Gi(e) {
  let { closeModal: t } = e;
  return (0, q.jsx)(Sn, {
    strTitle: L(`#EventCalendar_GameSource_UnhideCuratorsDialog_Title`),
    strDescription: L(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_Description`,
    ),
    strOKButtonText: L(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton`,
    ),
    strCancelButtonText: L(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton`,
    ),
    onOK: () => {
      (v().m_visibilityStore.SetGameSourceAllowed(S.k_ECurator, !0), t && t());
    },
    onCancel: () => {
      (v().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(!0),
        t && t());
    },
  });
}
function Ki(e) {
  e ||
    (y() &&
      (v().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
        v().m_visibilityStore.BIsGameSourceAllowed(S.k_ECurator) ||
        I((0, q.jsx)(Gi, {}), window)));
}
var qi = (e) =>
    (0, q.jsx)(Fn, {
      onEscKeypress: e.closeModal,
      children: (0, q.jsx)(R, {
        children: (0, q.jsxs)(Xn, {
          children: [
            (0, q.jsx)($n, { children: L(`#EventCurator_BrowseDialog_Title`) }),
            (0, q.jsxs)(rr, {
              children: [
                (0, q.jsx)(`div`, {
                  children: L(`#EventCurator_BrowseDialog_Desc`),
                }),
                (0, q.jsx)(Yi, {}),
              ],
            }),
            (0, q.jsx)(xr, {
              children: (0, q.jsx)(ir, {
                onClick: e.closeModal,
                children: L(`#Button_Dismiss`),
              }),
            }),
          ],
        }),
      }),
    }),
  Ji = (e) =>
    (0, q.jsx)(Go, {
      title: L(`#EventCurator_BrowseDialog_Title`),
      description: L(`#EventCurator_BrowseDialog_Desc`),
      children: (0, q.jsx)(Yi, {}),
    }),
  Yi = (e) => {
    let [t, n] = K.useState(Z.Get().IsLoaded());
    K.useEffect(() => {
      t ||
        (async () => {
          (await Z.Get().WaitForInitialLoad(), n(!0));
        })();
    }, [t]);
    let r = [];
    return (
      t &&
        Hn.GetELanguageFallbackOrder([Tr.k_ESteamRealmGlobal]).forEach((e) =>
          r.push((0, q.jsx)(Xi, { lang: e }, `curlang` + e)),
        ),
      (0, q.jsx)(q.Fragment, {
        children: t
          ? (0, q.jsx)(K.Fragment, { children: r })
          : (0, q.jsx)(O, {
              size: `medium`,
              position: `center`,
              string: L(`#Loading`),
            }),
      })
    );
  },
  Xi = (e) => {
    let t = Z.Get().GetCuratorsForLang(e.lang);
    if (!t) return null;
    let n = t
      .map((e) => G.GetClanInfoByClanAccountID(e.clanAccountID))
      .filter((e) => !!e);
    if (n.length == 0) return null;
    n.sort((e, t) => e.group_name.localeCompare(t.group_name));
    let r = n.map((e) =>
      (0, q.jsx)(
        Qi,
        { clanInfo: e, layout: `row` },
        `curatorbrowse_` + e.clanAccountID,
      ),
    );
    return (0, q.jsxs)(`div`, {
      children: [
        (0, q.jsx)(`div`, {
          className: Ii,
          children: L(
            `#EventCurator_BrowseDialog_LangCurator`,
            L(`#Language_` + Cr(e.lang)),
          ),
        }),
        r,
      ],
    });
  },
  Zi = f((e) => {
    let t = G.GetClanInfoByClanAccountID(e.clanid);
    if (!t) return (0, q.jsx)(`div`, { children: e.children });
    let n = {
        clan_account_id: t.clanAccountID,
        name: t.group_name,
        type: `developer`,
      },
      r = (0, q.jsx)(`div`, {
        className: Wi,
        children: (0, q.jsx)(se, {
          creatorID: n,
          bSmallFormat: !0,
          bHideCreatorType: !0,
          bHideFollowButton: !0,
        }),
      });
    return (0, q.jsx)(yn, {
      toolTipContent: r,
      bTopmost: !0,
      children: e.children,
    });
  }),
  Qi = (e) => {
    let [t, n] = K.useState(!1),
      r = () => {
        (I(
          (0, q.jsx)(Mn, {
            strDescription: L(`#EventCurator_NoEventsFound_Body`),
            strTitle: L(`#EventCurator_NoEventsFound_Title`),
          }),
          window,
        ),
          n(!1));
      },
      i = () =>
        t
          ? (0, q.jsx)(R, {
              children: (0, q.jsx)(Fr, {
                onEventNotFound: r,
                appid: 0,
                clanSteamID: e.clanInfo.clanSteamID,
                trackingLocation: 8,
                eventModel: void 0,
                announcementGID: void 0,
                partnerEventStore: k,
                showAppHeader: !0,
                closeModal: () => n(!1),
              }),
            })
          : null,
      { clanInfo: a, layout: o } = e,
      s = o === `row` ? Li : Hi,
      c = (0, q.jsx)(Zi, {
        clanid: a.clanSteamID.GetAccountID(),
        children: (0, q.jsxs)(`div`, {
          className: j(qt, Bi),
          onClick: () => n(!0),
          children: [
            (0, q.jsx)(`img`, {
              className: Ri,
              src: a.avatar_full_url,
              alt: a.group_name,
            }),
            (0, q.jsx)(`div`, { className: zi, children: a.group_name }),
          ],
        }),
      });
    return (0, q.jsxs)(`div`, {
      className: j(Jt, s),
      children: [
        i(),
        (0, q.jsx)(`div`, { onClick: () => n(!0), children: c }),
        (0, q.jsx)(`div`, {
          className: j(qt, Vi),
          children: (0, q.jsx)(ge, {
            clanAccountID: a.clanAccountID,
            className: Ui,
            fnSuccessCallback: Ki,
          }),
        }),
      ],
    });
  },
  $i = `360px`,
  ea = `104px`,
  ta = `62px`,
  na = `80px`,
  ra = `150px`,
  ia = `70px`,
  aa = `37px`,
  oa = `52px`,
  sa = `239px`,
  ca = `70px`,
  la = `_63S-hd0G758-`,
  ua = `CcXjKFWLiuk-`,
  da = `_9G7NHoSd69Q-`,
  fa = `_1-sUXu7fTvU-`,
  pa = `WvKwdkLJAUg-`,
  ma = `dHSWxCRbYYc-`,
  ha = `_4MJDHlbGuWs-`,
  ga = `_1JOM9TMmvIE-`,
  _a = `dMXRMeBnIbQ-`,
  va = `FjJKgh0dFDI-`,
  ya = `S1RrUvN-5Ow-`,
  ba = `_6M3zetsKboA-`,
  xa = `aNHqqAqPfAg-`,
  Sa = `_5k6bkVvOlEg-`,
  Ca = `UpJim05UMg4-`,
  wa = `BTbgNF3Ls1o-`,
  Ta = `AiM8sHhrdtk-`,
  Ea = `suB5yaFI5Sk-`,
  Da = `QiZCPwhEAvE-`,
  Oa = `yaPFfqmtDGE-`,
  ka = `yDJ1-6CIoOA-`,
  Aa = `-CiPbviVzto-`,
  ja = `hqPTI05KkUw-`,
  Ma = `WrrRzpmMmK8-`,
  Na = `UEdZYCw7i6A-`,
  Pa = `xE9Dp6pmE08-`,
  Fa = `TE8-IBbD3VQ-`,
  Ia = `_0az7EQ9Oqik-`,
  La = `gPGNIeRVWCQ-`,
  Ra = `JiIEZc04Kp4-`,
  za = `MaaVjvZivZw-`,
  Ba = `AWm6RNWZdM4-`,
  Va = `Vi2EIPmgpxw-`,
  Ha = `RdMlBc0C1Rk-`,
  Ua = `YZlg66ByM1Q-`,
  Wa = `a5rNqLH4CAA-`,
  Ga = `_2qk4lp7nG4g-`,
  Ka = `kBqESD5qsDg-`,
  qa = `_3h8e6e0K-2Q-`,
  Ja = `G85BTMaJ9aw-`,
  Ya = `o85pOaYa4XA-`,
  Xa = `_1l9EsBTVpJQ-`,
  Za = `DYkXiBUMpUw-`,
  Qa = `FR7ZKI-8vps-`,
  $a = `t-DkBN8lilM-`,
  eo = `DE-3biPKNTM-`,
  to = `_0sA1Zp8H8XE-`,
  no = `_0EXug2246p8-`,
  ro = `-lh-rCi0CMA-`,
  io = `_9SxOFYZ-a9I-`,
  ao = `gGUEn3t3t40-`,
  oo = `LJ2a4Je-OMo-`,
  so = `hZ0IRZS-U9c-`,
  co = `IPHnNxEFo0g-`,
  lo = `J5j2hV1tRBE-`,
  uo = `Xu2D-jOAvXU-`,
  fo = `FfLcl-LcD3M-`,
  po = `_7Ya--Q9-pQI-`,
  mo = `odhWkLdRWAY-`,
  ho = `OS05IXLXqrA-`,
  go = `PJz5mrc1q-s-`,
  _o = `NXNrp52mykc-`,
  vo = e(It()),
  yo = class {
    m_dateLoadTime = Rt.GetTimeNowWithOverrideAsDate();
    IsCurrentlyVisible(e) {
      return (
        (!e.startVisible || e.startVisible <= this.m_dateLoadTime) &&
        (!e.endVisible || e.endVisible >= this.m_dateLoadTime)
      );
    }
    static IsCurrentlyActive(e) {
      let t = Rt.GetTimeNowWithOverrideAsDate();
      return (
        (!e.startEvent || e.startEvent <= t) && (!e.endEvent || e.endEvent >= t)
      );
    }
    static LocalizeDateString(e) {
      if (!e.startEvent) return null;
      let t = e.startEvent.toLocaleDateString(Hn.GetPreferredLocales(), {
        month: `long`,
        day: `numeric`,
      });
      if (!e.endEvent) return t;
      let n = {
        month:
          e.startEvent.getMonth() == e.endEvent.getMonth() ? void 0 : `long`,
        day: `numeric`,
      };
      return `${t} - ${e.endEvent.toLocaleDateString(Hn.GetPreferredLocales(), n)}`;
    }
    GetVisibleSpecialEvents() {
      return [
        {
          sLocToken: `#NewsHubSpecialEvent_GameFestival`,
          startVisible: new Date(
            (0, vo.default)(`2020-06-16T14:00:00-07:00`).unix() * 1e3,
          ),
          endVisible: new Date(
            (0, vo.default)(`2020-06-22T10:00:00-07:00`).unix() * 1e3,
          ),
          startEvent: new Date(
            (0, vo.default)(`2020-06-16T10:00:00-07:00`).unix() * 1e3,
          ),
          endEvent: new Date(
            (0, vo.default)(`2020-06-22T10:00:00-07:00`).unix() * 1e3,
          ),
          newshubUrl: `news/collection/GameFestival2020`,
        },
      ].filter((e) => this.IsCurrentlyVisible(e));
    }
  },
  bo = new yo(),
  xo = class extends K.Component {
    render() {
      let { specialEvent: e } = this.props,
        t = window.location.href === V.STORE_BASE_URL + e.newshubUrl,
        n = yo.IsCurrentlyActive(e),
        r = yo.LocalizeDateString(e);
      return (0, q.jsx)(Yn, {
        to: `/` + e.newshubUrl,
        children: (0, q.jsxs)(`div`, {
          className: j(Xa, t && void 0, n && void 0),
          children: [
            (0, q.jsx)(`div`, { className: Za, children: L(e.sLocToken) }),
            r && (0, q.jsx)(`div`, { className: `_5I-2eN6CnII-`, children: r }),
          ],
        }),
      });
    }
  },
  So = class extends K.Component {
    render() {
      let e = bo.GetVisibleSpecialEvents();
      return e.length === 0
        ? null
        : (0, q.jsxs)(`div`, {
            className: qa,
            children: [
              (0, q.jsx)(`div`, {
                className: Ja,
                children: L(`#Events_SpecialEvents`),
              }),
              (0, q.jsx)(`div`, {
                className: Ya,
                children: e.map((e) =>
                  (0, q.jsx)(xo, { specialEvent: e }, e.sLocToken),
                ),
              }),
            ],
          });
    }
  },
  Co = `PsNUSZrnhwo-`,
  wo = `kJyrTBjLD7Q-`,
  To = `NacinvTIzSA-`,
  Eo = `deJTdy55RnQ-`,
  Do = `F6eodJBqkg4-`,
  Oo = `_4GeOIQtMlK4-`,
  ko = `bGyZZ0TxG24-`,
  Ao = `_0D-fKtXb90E-`,
  jo = `-YMuG9CeZOo-`;
function Mo() {
  return gr(new Date());
}
var No = (e) => {
    let t = V.PUBLIC_SHARED_URL + `images/`;
    return (0, q.jsxs)(`div`, {
      className: Co,
      children: [
        (0, q.jsxs)(`div`, {
          className: Eo,
          children: [
            (0, q.jsx)(`a`, {
              href: V.STORE_BASE_URL + `about`,
              children: `关于蒸汽平台`,
            }),
            `\xA0 | \xA0`,
            (0, q.jsx)(`a`, {
              href: V.STORE_BASE_URL + `steam_refunds`,
              children: `退款政策`,
            }),
            `\xA0 | \xA0`,
            (0, q.jsx)(`a`, {
              href: V.STORE_BASE_URL + `subscriber_agreement`,
              children: `软件许可服务协议`,
            }),
            `\xA0 | \xA0`,
            (0, q.jsx)(`br`, {}),
            (0, q.jsx)(`a`, {
              href: V.STORE_BASE_URL + `privacy_agreement`,
              children: `个人信息保护政策`,
            }),
            `\xA0 | \xA0`,
            (0, q.jsx)(`a`, {
              href: `https://about.steamchina.com/content_report.html`,
              target: `_blank`,
              rel: `noreferrer`,
              children: `不良内容举报投诉`,
            }),
            `\xA0 | \xA0`,
            (0, q.jsx)(`a`, {
              href: `https://about.steamchina.com/infringement_report.html`,
              target: `_blank`,
              rel: `noreferrer`,
              children: `侵权投诉`,
            }),
            `\xA0 | \xA0`,
            (0, q.jsx)(`a`, {
              href: `https://about.steamchina.com/parentguardianship_agreement.html`,
              target: `_blank`,
              rel: `noreferrer`,
              children: `家长监护`,
            }),
          ],
        }),
        (0, q.jsx)(`div`, { className: To }),
        (0, q.jsxs)(`div`, {
          className: ko,
          children: [
            (0, q.jsx)(`a`, {
              href: `https://www.wanmei.com/`,
              target: `_blank`,
              rel: `noreferrer`,
              children: (0, q.jsx)(`img`, {
                className: Ao,
                src: t + `footer/pw_logo_gy.svg?v=1`,
              }),
            }),
            (0, q.jsx)(`a`, {
              href: `https://valvesoftware.com`,
              target: `_blank`,
              rel: `noreferrer`,
              children: (0, q.jsx)(`img`, {
                className: jo,
                src: t + `footer/valve_logo_gy.svg?v=1`,
              }),
            }),
          ],
        }),
        (0, q.jsxs)(`div`, {
          className: Do,
          children: [
            (0, q.jsxs)(`div`, {
              className: void 0,
              children: [
                `© ${Mo()} Valve Corporation 版权所有，完美世界已获授权`,
                (0, q.jsx)(`br`, {}),
                `所有商标均属于其在美国或其他国家的拥有者。`,
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: Oo,
              children: [
                `© 完美世界征奇(上海)多媒体科技有限公司 版权所有。`,
                (0, q.jsx)(`br`, {}),
                `增值电信业务经营许可证沪B2-20180406`,
              ],
            }),
          ],
        }),
      ],
    });
  },
  Po = (e) =>
    (0, q.jsxs)(`div`, {
      className: Co,
      children: [
        (0, q.jsx)(`img`, {
          src: V.STORE_CDN_URL + `public/images/footerLogo_valve_new.png`,
        }),
        (0, q.jsx)(`div`, {
          className: wo,
          children: L(`#Legal_Footer_WithYear`, Mo()),
        }),
      ],
    }),
  Fo = (e) => (An() ? (0, q.jsx)(No, {}) : (0, q.jsx)(Po, {})),
  Io = class e {
    m_curDisplay = `desktop_navigation`;
    m_fnGetRouterHistory = void 0;
    static s_GlobalStore;
    static Get() {
      return ((e.s_GlobalStore ||= new e()), e.s_GlobalStore);
    }
    constructor() {
      d(this);
    }
    UpdateLocation(e, t) {
      this.m_fnGetRouterHistory = e;
      let n = Nt(t, `optionpane`);
      if (n)
        switch (n) {
          case `event_filter`:
          case `browse_curator`:
          case `desktop_navigation`:
            this.m_curDisplay != n && (this.m_curDisplay = n);
        }
      else
        this.m_curDisplay != `desktop_navigation` &&
          (this.m_curDisplay = `desktop_navigation`);
      return this.m_curDisplay;
    }
    SetDisplay(e) {
      ((this.m_curDisplay = e),
        this.m_fnGetRouterHistory &&
          kt(
            this.m_fnGetRouterHistory(),
            `optionpane`,
            this.m_curDisplay == `desktop_navigation`
              ? void 0
              : this.m_curDisplay,
          ));
    }
    GetDisplay() {
      return this.m_curDisplay;
    }
    ShowBrowseCurator(t) {
      Vl()
        ? e.Get().SetDisplay(`browse_curator`)
        : I((0, q.jsx)(qi, {}), sr(t));
    }
  };
F([n], Io.prototype, `m_curDisplay`, void 0);
var Lo = class extends K.Component {
  GetVisibilityStore() {
    return v().m_visibilityStore;
  }
  OnEventTypeChange(e, t) {
    (this.GetVisibilityStore().SetEventTypeGroupAllowed(e, t),
      this.props.fnOnFilterChange());
  }
  RenderEventTypeCheckbox(e) {
    let t = this.GetVisibilityStore().BIsEventTypeGroupAllowed(e);
    return (0, q.jsx)(
      Or,
      {
        toolTipContent: L(`#EventCalendar_EventTypeGroup_ttip_` + e),
        direction: `top`,
        children: (0, q.jsx)(Wo, {
          label: L(`#EventCalendar_EventTypeGroup_` + e),
          checked: t,
          onChange: (t) => this.OnEventTypeChange(e, t),
        }),
      },
      `group-${e}`,
    );
  }
  OnGameSourceChange(e, t) {
    (this.GetVisibilityStore().SetGameSourceAllowed(e, t),
      this.props.fnOnFilterChange());
  }
  RenderGameSourceCheckbox(e, t) {
    let n =
      this.GetVisibilityStore().BIsGameSourceAllowed(e) ||
      (e == S.k_ELibrary &&
        this.GetVisibilityStore().BIsGameSourceAllowed(S.k_ERecent));
    return (0, q.jsx)(
      Or,
      {
        direction: `top`,
        toolTipContent: L(
          t
            ? `#EventCalendar_DisabledFilter_LoginPrompt`
            : `#EventCalendar_GameSource_ttip_` + e,
        ),
        children: (0, q.jsx)(Wo, {
          label: L(`#EventCalendar_GameSource_` + e),
          checked: n,
          disabled: t,
          onChange: (t) => this.OnGameSourceChange(e, t),
        }),
      },
      `gs-${e}`,
    );
  }
  render() {
    let { bUserIsLoggedIn: e } = this.props,
      t = v(),
      n = !0;
    if (t.BIsSingleGroupCalendar()) {
      let e = G.GetClanInfoByClanAccountID(t.GetSingleGroupID());
      e && e.has_rss_feed && (n = !1);
    } else
      t.BIsCollectionCalendar() &&
        (t.GetKey().collectionid == _.Press ||
          t.GetKey().collectionid == _.Dev_Sales ||
          t.GetKey().collectionid == _.Dev_AssociatedPress) &&
        (n = !1);
    let r = as(t),
      i = ae.Get().GetMutedSourceCount(),
      a = t.BIsSingleSourceMuted() || (!t.BIsSingleSourceCalendar() && i > 0);
    return (0, q.jsxs)(Go, {
      title: L(`#EventCalendar_FiltersTitle`),
      description: L(
        t.BIsGlobalCalendar()
          ? `#EventCalendar_FiltersDescription`
          : `#EventCalendar_FiltersDescription_NonPersonalized`,
      ),
      children: [
        (0, q.jsxs)(`div`, {
          className: Ca,
          children: [
            n &&
              (0, q.jsxs)(Ro, {
                children: [
                  (0, q.jsx)(zo, {
                    children: L(
                      `#EventCalendar_FilterSubSection_EventTypeGroups`,
                    ),
                  }),
                  this.RenderEventTypeCheckbox(x.k_EEvents),
                  this.RenderEventTypeCheckbox(x.k_EStreaming),
                  this.RenderEventTypeCheckbox(x.k_EUpdates),
                  this.RenderEventTypeCheckbox(x.k_EReleases),
                  this.RenderEventTypeCheckbox(x.k_ESales),
                  this.RenderEventTypeCheckbox(x.k_ENews),
                ],
              }),
            !!t.BIsGlobalCalendar() &&
              (0, q.jsxs)(Ro, {
                children: [
                  (0, q.jsx)(zo, {
                    children: L(`#EventCalendar_FilterSubSection_GameSources`),
                  }),
                  this.RenderGameSourceCheckbox(S.k_ELibrary, !e),
                  (0, q.jsx)(`div`, {
                    className: `CJP1VU5BCsw-`,
                    children: this.RenderGameSourceCheckbox(S.k_ERecent, !e),
                  }),
                  this.RenderGameSourceCheckbox(S.k_EWishlist, !e),
                  me() && this.RenderGameSourceCheckbox(S.k_EFollowing, !e),
                  this.RenderGameSourceCheckbox(S.k_ERecommended, !e),
                  this.RenderGameSourceCheckbox(S.k_ESteam),
                  Rt.bIncludeFeaturedAsGameSource &&
                    this.RenderGameSourceCheckbox(S.k_EFeatured),
                ],
              }),
            !!(pe() && (t.BIsGlobalCalendar() || t.BIsSingleAppCalendar())) &&
              (0, q.jsxs)(Ro, {
                children: [
                  (0, q.jsx)(zo, {
                    children: L(
                      `#EventCalendar_FilterSubSection_CuratorSources`,
                    ),
                  }),
                  this.RenderGameSourceCheckbox(S.k_ECurator, !e),
                  (0, q.jsx)(Bo, {
                    onClick: Io.Get().ShowBrowseCurator,
                    children: L(`#EventCalendar_BrowseCurators`),
                  }),
                ],
              }),
            r &&
              (0, q.jsx)(Vo, {
                calendar: t,
                onFilterChange: this.props.fnOnFilterChange,
              }),
            !!t.BIsSingleSourceMuted() &&
              (0, q.jsx)(`div`, {
                children: L(
                  t.BIsSingleGroupCalendar()
                    ? `#EventCalendar_SingleGroupIsMuted`
                    : `#EventCalendar_SingleAppIsMuted`,
                ),
              }),
          ],
        }),
        (0, q.jsxs)(`div`, {
          className: ba,
          children: [
            a &&
              (0, q.jsx)(Er, {
                className: `b-LIxOOiVlM-`,
                href: V.STORE_BASE_URL + `account/emailoptout/app`,
                bDisableContextMenu: !0,
                children: (0, q.jsxs)(Bo, {
                  children: [
                    (0, q.jsx)(pr, { muted: !0 }),
                    L(`#EventCalendar_ManageMutedSources`),
                    (0, q.jsx)(`div`, {
                      className: `oLxn7HICsb0-`,
                      children: i,
                    }),
                  ],
                }),
              }),
            (0, q.jsx)(Er, {
              href: V.STORE_BASE_URL + `account/preferences`,
              bDisableContextMenu: !0,
              children: (0, q.jsxs)(Bo, {
                children: [
                  (0, q.jsx)(jn, {}),
                  L(`#EventCalendar_ManageStorePref`),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  }
};
Lo = F([f], Lo);
var Ro = zn(wa),
  zo = zn(Ta),
  Bo = zn(xa);
function Vo(e) {
  let { calendar: t, onFilterChange: n } = e,
    [r, i] = m(() => [
      t
        .GetAllClans()
        .filter((e) => G.GetClanInfoByClanAccountID(e)?.group_name),
      t.GetAllApps().filter((e) => M.Get().GetApp(e)?.GetName()),
    ]);
  return (
    Dn(
      t.BIsCollectionCalendar,
      `Attempted to render collection source filters for a non collection calendar`,
    ),
    t.BIsCollectionCalendar()
      ? (0, q.jsxs)(Ro, {
          children: [
            (0, q.jsx)(zo, {
              children: L(`#EventCalendar_FilterSubSection_CollectionSources`),
            }),
            r.map((e) =>
              (0, q.jsx)(Ho, { calendar: t, clanid: e, onFilterChange: n }, e),
            ),
            i.map((e) =>
              (0, q.jsx)(Uo, { calendar: t, appid: e, onFilterChange: n }, e),
            ),
          ],
        })
      : null
  );
}
function Ho(e) {
  let { calendar: t, clanid: n, onFilterChange: r } = e,
    i = m(() => t.m_visibilityStore.BIsClanVisible(n));
  return (0, q.jsx)(Wo, {
    label: G.GetClanInfoByClanAccountID(n)?.group_name,
    checked: i,
    onChange: (e) => {
      (t.m_visibilityStore.SetClanVisibility(n, e), r());
    },
  });
}
function Uo(e) {
  let { calendar: t, appid: n, onFilterChange: r } = e,
    i = t.m_visibilityStore.BIsAppVisible(n);
  return (0, q.jsx)(Wo, {
    label: M.Get().GetApp(n)?.GetName(),
    checked: i,
    onChange: (e) => {
      (t.m_visibilityStore.SetAppVisibility(n, e), r());
    },
  });
}
function Wo(e) {
  return (0, q.jsx)(`div`, {
    className: ya,
    children: (0, q.jsx)(or, { ...e }),
  });
}
var Go = (e) =>
  (0, q.jsxs)(`div`, {
    className: va,
    children: [
      (0, q.jsx)(`div`, { className: da, children: e.title }),
      !!e.description &&
        (0, q.jsx)(`div`, {
          className: `z7aV1pd6aPU-`,
          children: e.description,
        }),
      e.children,
    ],
  });
function Ko(e) {
  Io.Get().SetDisplay(e ? `event_filter` : `desktop_navigation`);
}
var qo = f(function (e) {
    let {
        bUserIsLoggedIn: t,
        nDisappearingHeaderVisibleHeight: n,
        bIsCollapsed: r,
        fnToggleCollapsed: i,
        fnOnFilterChange: a,
      } = e,
      o = Vl(),
      s = (0, q.jsx)(`div`, {
        className: Sa,
        onClick: () => {
          (Ko(!1), i());
        },
        children: (0, q.jsx)(nr, {}),
      }),
      c = vn(),
      l = r ? Math.max(0, n) : 0,
      u =
        o || c
          ? null
          : (0, q.jsx)(`div`, {
              onClick: i,
              className: pa,
              children: (0, q.jsx)(`div`, {
                style: { marginTop: `${l}px` },
                className: ma,
                children: (0, q.jsx)(hr, { angle: r ? 180 : 0 }),
              }),
            }),
      d = o
        ? null
        : (0, q.jsx)(`div`, {
            onClick: () => Ko(!1),
            className: pa,
            children: (0, q.jsx)(`div`, {
              style: { marginTop: `${l}px` },
              className: ma,
              children: (0, q.jsx)(nr, {}),
            }),
          }),
      f = Io.Get().GetDisplay() == `desktop_navigation` ? u : d,
      p = r ? void 0 : { top: `${n}px` };
    v();
    let m;
    switch (Io.Get().GetDisplay()) {
      case `event_filter`:
        m = (0, q.jsx)(Lo, { bUserIsLoggedIn: t, fnOnFilterChange: a });
        break;
      case `browse_curator`:
        m = (0, q.jsx)(Ji, {});
        break;
      case `desktop_navigation`:
        m = (0, q.jsx)(Jo, { ...e, fnOpenFilterSettings: Ko });
    }
    return (0, q.jsx)(K.Fragment, {
      children: (0, q.jsx)(A, {
        className: j(fa, r && `Lny0vLSKJv0-`),
        style: p,
        "flow-children": `column`,
        children: r
          ? f
          : (0, q.jsxs)(`div`, {
              className: ga,
              children: [
                s,
                f,
                (0, q.jsx)(`div`, { className: ua, children: m }),
              ],
            }),
      }),
    });
  }),
  Jo = f((e) => {
    let { bShouldIncludeLegalFooter: t, bShowUpcoming: n } = e,
      r =
        `Responsive_RequestMobileView` in window &&
        window.Responsive_RequestMobileView,
      i = vn();
    return (0, q.jsxs)(K.Fragment, {
      children: [
        (0, q.jsx)(`div`, { className: ha, children: (0, q.jsx)(wn, {}) }),
        (0, q.jsx)(`div`, {
          className: _a,
          children: Kn(`#EventCalendar_Title`, (0, q.jsx)(`br`, {})),
        }),
        (0, q.jsx)(rs, { bIsUpcoming: n }),
        (0, q.jsx)(So, {}),
        (0, q.jsx)(`div`, {
          className: oo,
          children: (0, q.jsx)(Yo, {
            label: L(`#EventCalendar_UniversalSearch`),
          }),
        }),
        (0, q.jsx)(is, { bIsUpcoming: n }),
        !i &&
          (0, q.jsx)(`div`, {
            className: `R57iwKqlC-4-`,
            children: (0, q.jsxs)(`div`, {
              className: j(`aNHqqAqPfAg-`, `_55sl-K26NHU-`),
              onClick: () => e.fnOpenFilterSettings(!0),
              children: [(0, q.jsx)(dr, {}), L(`#EventCalendar_EditFilters`)],
            }),
          }),
        r &&
          (0, q.jsx)(`div`, {
            className: j(`Yhmcnc2ixQ0-`, `m4BNbAMqtL0-`),
            onClick: r,
            children: L(`#EventCalendar_ShowResponsiveView`),
          }),
        t && (0, q.jsx)(Fo, {}),
      ],
    });
  }),
  Yo = class extends K.Component {
    DecorateSearchSuggestion(e, t) {
      if (e && e.id) {
        let n = ``;
        return (
          e.corpus == `curators`
            ? (n = `group/` + e.id)
            : e.corpus == `games` &&
              (Dn(le(e.type), `Unexpected app type ` + e.type),
              (n = `app/` + e.id)),
          (0, q.jsx)(
            br,
            { href: `/${yt()}/${n}/`, children: t },
            `suggestion-${e.id}`,
          )
        );
      }
      return t;
    }
    render() {
      return (0, q.jsx)(Pi, {
        strLabel: this.props.label,
        fnOnSelected: () => {},
        fnDecorateSuggestion: this.DecorateSearchSuggestion,
        rgCorporaToSearch: [`games`, `curators`],
        focusOnMount: this.props.focusOnMount,
      });
    }
  };
Yo = F([f], Yo);
function Xo() {
  if (!v().BIsGlobalCalendar() || !U.logged_in) return;
  let e = v().GetStoreInitializationTimestamp().getTime() / 1e3,
    t = v().GetCurrentlyLoadedEventCount(e);
  if (t)
    return v().BHitEventHorizon(`forward`) ? String(t.nCount) : t.nCount + `+`;
}
function Q(e, t) {
  let n = ie(e);
  if ((Dn(!!n, `Must define collection ` + e), !n)) return null;
  let r = v().GetCollectionID() == e,
    i;
  switch (e) {
    case _.Default:
      r = v().BIsGlobalCalendar() && !t;
      break;
    case _.Upcoming:
      ((r = v().BIsGlobalCalendar() && t), (i = Xo()));
  }
  return {
    name: n.strName,
    shortName: n.strShortName,
    key: e,
    url: n.strUrl,
    subtitle: n.strSubtitle,
    onPage: r,
    count: i,
    bValveOnly: n.bIsValveOnly,
  };
}
function Zo(e, t) {
  let n = [];
  return (n.push(Q(_.Default, e)), n.push(Q(_.Upcoming, e)), n);
}
function Qo(e, t) {
  let n = [];
  return (
    n.push(Q(_.Featured, e)),
    n.push(Q(_.Steam, e)),
    Rt.GetTimeNowWithOverride() < 1668160800 && n.push(Q(_.Halloween, e)),
    n
  );
}
function $o(e, t) {
  (v().BIsCollectionCalendar(), yt());
  let n = [];
  if ((pe() && n.push(Q(_.Press, e)), t))
    for (let e of bo.GetVisibleSpecialEvents())
      n.push({
        name: L(e.sLocToken),
        url: e.newshubUrl,
        onPage: !1,
        key: `event_` + e.sLocToken,
      });
  return (
    n.push(Q(_.Dev_Sales, e)),
    U.is_support &&
      (n.push(Q(_.Dev_All, e)), n.push(Q(_.Dev_AssociatedPress, e))),
    n
  );
}
var es = (e) => {
    let {
      shortName: t,
      name: n,
      url: r,
      onPage: i,
      count: a,
      bValveOnly: o,
    } = e.element;
    return !U.is_support && o
      ? null
      : (0, q.jsx)(Yn, {
          to: `/` + r,
          children: (0, q.jsxs)(`div`, {
            className: j(fo, i && `OH3M5fhybLw-`),
            children: [
              t || n,
              a &&
                (0, q.jsx)(`div`, { className: `b-2wzF1-IAg-`, children: a }),
            ],
          }),
        });
  },
  ts = class extends K.Component {
    state = { bSearchExpanded: !1 };
    onExpandSearch(e) {
      this.setState({ bSearchExpanded: e });
    }
    render() {
      let { bSearchExpanded: e } = this.state,
        t = Zo(this.props.bIsUpcoming, !1),
        n = Qo(this.props.bIsUpcoming, !1),
        r = $o(this.props.bIsUpcoming, !1),
        i = [...t, ...n, ...r];
      return (0, q.jsxs)(`div`, {
        style: { transform: `translateY(${this.props.nTopOffset}px)` },
        className: so,
        children: [
          (0, q.jsx)(`div`, {
            className: co,
            onClick: this.props.fnToggleCollapsed,
            children: (0, q.jsx)(dr, {}),
          }),
          (0, q.jsx)(`div`, {
            className: j(co, e && `F-oQOYMXtaY-`),
            onClick: () => this.onExpandSearch(!e),
            children: (0, q.jsx)(Wn, {}),
          }),
          e &&
            (0, q.jsxs)(K.Fragment, {
              children: [
                (0, q.jsx)(`div`, {
                  className: `gUhEHpUvHRM-`,
                  onClick: () => this.onExpandSearch(!1),
                }),
                (0, q.jsx)(`div`, {
                  className: j(`nUSnEoVXKTE-`, e && `F-oQOYMXtaY-`),
                  children: (0, q.jsx)(Yo, { focusOnMount: !0 }),
                }),
              ],
            }),
          (0, q.jsx)(ne, {
            className: lo,
            children: (0, q.jsx)(`div`, {
              className: uo,
              children: i.map((e) => (0, q.jsx)(es, { element: e }, e.key)),
            }),
          }),
        ],
      });
    }
  };
(F([W], ts.prototype, `onExpandSearch`, null), (ts = F([f], ts)));
function ns(e) {
  let {
    key: t,
    name: n,
    subtitle: r,
    url: i,
    onPage: a,
    count: o,
    bValveOnly: s,
    icon: c,
  } = e.element;
  return !U.is_support && s
    ? null
    : (0, q.jsx)(br, {
        href: `/` + i,
        children: (0, q.jsxs)(`div`, {
          className: j({ [to]: !0, [ro]: a, [Bt]: s }),
          children: [
            !!c && (0, q.jsx)(`img`, { className: j(`R1REIT575ow-`), src: c }),
            (0, q.jsxs)(`div`, {
              className: no,
              children: [
                (0, q.jsxs)(`div`, {
                  className: io,
                  children: [s && `(VO) `, n],
                }),
                r &&
                  (0, q.jsx)(`div`, { className: `LURVMdGd1ko-`, children: r }),
              ],
            }),
            o !== void 0 &&
              (0, q.jsx)(`div`, { className: `rtSzZU-QRcY-`, children: o }),
          ],
        }),
      });
}
var rs = class extends K.Component {
  render() {
    let e = Zo(this.props.bIsUpcoming, !1),
      t = Qo(this.props.bIsUpcoming, !1);
    return (0, q.jsxs)(`div`, {
      className: Qa,
      children: [
        (0, q.jsx)(`div`, {
          className: $a,
          children: L(`#EventCalendar_NewsChannels`),
        }),
        (0, q.jsx)(`div`, {
          className: eo,
          children: e.map((e) => (0, q.jsx)(ns, { element: e }, e.key)),
        }),
        (0, q.jsx)(`div`, {
          className: $a,
          children: L(`#EventCalendar_NewsChannels_Global`),
        }),
        (0, q.jsx)(`div`, {
          className: eo,
          children: t.map((e) => (0, q.jsx)(ns, { element: e }, e.key)),
        }),
      ],
    });
  }
};
rs = F([f], rs);
function is(e) {
  let { bIsUpcoming: t } = e,
    n = $o(t, !1);
  return n && n.length > 0
    ? (0, q.jsxs)(`div`, {
        className: j(Qa, ao),
        children: [
          (0, q.jsx)(`div`, {
            className: $a,
            children: L(`#EventCalendar_NewsChannels_Discover`),
          }),
          (0, q.jsx)(`div`, {
            className: eo,
            children: n.map((e) => (0, q.jsx)(ns, { element: e }, e.key)),
          }),
        ],
      })
    : null;
}
function as(e) {
  return e.BIsCollectionCalendar() && e.GetCollectionID() === `steam`;
}
var os = t({
    AppBannerLogo: () => Ks,
    AppIcon: () => ls,
    CarouselMode: () => bc,
    ClanSource: () => Js,
    CommentIcon: () => _c,
    CommentIconCtn: () => vc,
    CoverImageCtn: () => ps,
    DateAndSourceLine: () => ws,
    DateAndTime: () => Cc,
    EnableHovers: () => ds,
    EventCapsuleCtn: () => $s,
    EventName: () => Us,
    EventSubTitle: () => Ws,
    EventSummaryDefault: () => oc,
    EventTitleCtn: () => Zs,
    EventType10: () => As,
    EventType11: () => js,
    EventType12: () => Hs,
    EventType13: () => Ps,
    EventType14: () => Fs,
    EventType15: () => Is,
    EventType23: () => Ms,
    EventType28: () => ks,
    EventType35: () => Ns,
    EventTypeAndDateCtn: () => Ts,
    FallbackImage: () => qs,
    Footer: () => Qs,
    FooterRightSide: () => pc,
    FooterStat: () => gc,
    FutureDateText: () => _s,
    GameCapsuleCtn: () => Gs,
    GameShortDescription: () => ms,
    GameSource: () => ys,
    GameTitleContainer: () => cs,
    HasVideo: () => wc,
    LeaveRoomForReminder: () => Es,
    LiveBroadcastPreview: () => ec,
    LiveNow: () => gs,
    LiveText: () => hs,
    LoadingTile: () => yc,
    MainContentContainer: () => Rs,
    OnlyIcon: () => ac,
    Options: () => mc,
    PastDateText: () => vs,
    PatchIconCtn: () => Xs,
    RateIcon: () => uc,
    RecommendedSource: () => Ss,
    ReminderContainer: () => ic,
    SmallAppName: () => Ds,
    Source: () => xs,
    SourceList: () => bs,
    SourceRecommended: () => Cs,
    SubTitleShown: () => Tc,
    Tile: () => Ls,
    TileBackgroundImage: () => tc,
    TileContainer: () => fs,
    TileCoverImagePlayable: () => nc,
    TileCoverLiveIcon: () => rc,
    TileImage: () => Bs,
    TileTextAppName: () => us,
    TileTextCategoryType: () => Os,
    TileTextContainer: () => Vs,
    TileTextHeader: () => Ys,
    TileVideoIcon: () => Sc,
    TileViewerCount: () => hc,
    UpcomingMode: () => xc,
    VideoPlayerReady: () => Ec,
    Vote_LimitedUser: () => cc,
    Vote_Negative: () => dc,
    Vote_NotLoggedIn: () => sc,
    Vote_Positive: () => lc,
    Vote_Ready: () => fc,
    YoutubePreviewImage: () => zs,
    default: () => Dc,
    narrowWidth: () => ss,
  }),
  ss = `500px`,
  cs = `Zlty4OIYdk8-`,
  ls = `go8QhZVoiDg-`,
  us = `C2L2kTp8KYY-`,
  ds = `cJRhUD4vyks-`,
  fs = `JTFHmASEfjQ-`,
  ps = `lSYF-snjG-M-`,
  ms = `NH4KbTPWsVo-`,
  hs = `oKFVegN0DBM-`,
  gs = `b6-KxfcdLaA-`,
  _s = `fTNya0ypDaA-`,
  vs = `xsBu3BpyRkM-`,
  ys = `HcQu8--ilOI-`,
  bs = `Posg84PD4bE-`,
  xs = `k2N88JaY6V0-`,
  Ss = `ZoGr1X5RSXM-`,
  Cs = `EQ3XQ1YOQmQ-`,
  ws = `C0xcw-dBN9k-`,
  Ts = `IF22HifrVkU-`,
  Es = `_6qTH13L4IdM-`,
  Ds = `_3tNrYR8q4PM-`,
  Os = `ohvlfUuwWIg-`,
  ks = `mo9oCL-5zMc-`,
  As = `ZN1vuColBC4-`,
  js = `icDmaRX1BV0-`,
  Ms = `optYdsri3U8-`,
  Ns = `_5zGVMek4WGM-`,
  Ps = `KdEmVjNtWfQ-`,
  Fs = `LnEJdWlC4Ss-`,
  Is = `NG3wNiIIJXs-`,
  Ls = `bOEXfqM27eQ-`,
  Rs = `o-fQFsyOEMY-`,
  zs = `q8QvDCYSn5E-`,
  Bs = `_1ZYmIx0m7bo-`,
  Vs = `OHAAoz1G1I4-`,
  Hs = `k1akHy9HHzA-`,
  Us = `SlFMYJwWSU4-`,
  Ws = `_9lDmRzgjqs4-`,
  Gs = `E-S8WDov49g-`,
  Ks = `fzWS9zjHBQA-`,
  qs = `yI-XQCfZhjU-`,
  Js = `zEB6Vo-lSoU-`,
  Ys = `hG0eaq6y-C8-`,
  Xs = `wdp2jpfiGas-`,
  Zs = `ym2tgXthxzw-`,
  Qs = `KQCQvl8Sul0-`,
  $s = `iogiG-p5PHg-`,
  ec = `e2Xhb-5xMvY-`,
  tc = `TtzbM79RcOo-`,
  nc = `-y6T-NRjq1Q-`,
  rc = `_0hsSPkL5myo-`,
  ic = `-VpcmDHYJBs-`,
  ac = `_8hZf0ZZtftA-`,
  oc = `O79JneSzM9g-`,
  sc = `je6TW3nEJQQ-`,
  cc = `C-MokZjgv5M-`,
  lc = `Ba6BoHg0H10-`,
  uc = `bzgJpyO0RQM-`,
  dc = `-How-9UKQAA-`,
  fc = `EY35qqcJWWo-`,
  pc = `_79iz6FtxgOc-`,
  mc = `ozmBXi7xV-Y-`,
  hc = `zxaNRVKQnTM-`,
  gc = `CakmFSjnZaQ-`,
  _c = `Ilo9d6Bcf60-`,
  vc = `_2aS2MHSUX-U-`,
  yc = `D2jHVCUP6G0-`,
  bc = `_6IHSOcZWQTI-`,
  xc = `i7ABr2eulso-`,
  Sc = `MVfZPnoopw0-`,
  Cc = `ckxFzo4Jdqs-`,
  wc = `_4wxMhjLGDEo-`,
  Tc = `h-oZBBAdgfo-`,
  Ec = `utI2vL1PRLs-`,
  Dc = {
    narrowWidth: ss,
    GameTitleContainer: cs,
    AppIcon: ls,
    TileTextAppName: us,
    EnableHovers: ds,
    TileContainer: fs,
    CoverImageCtn: ps,
    GameShortDescription: ms,
    LiveText: hs,
    LiveNow: gs,
    FutureDateText: _s,
    PastDateText: vs,
    GameSource: ys,
    SourceList: bs,
    Source: xs,
    RecommendedSource: Ss,
    SourceRecommended: Cs,
    DateAndSourceLine: ws,
    EventTypeAndDateCtn: Ts,
    LeaveRoomForReminder: Es,
    SmallAppName: Ds,
    TileTextCategoryType: Os,
    EventType28: ks,
    EventType10: As,
    EventType11: js,
    EventType23: Ms,
    EventType35: Ns,
    EventType13: Ps,
    EventType14: Fs,
    EventType15: Is,
    Tile: Ls,
    MainContentContainer: Rs,
    YoutubePreviewImage: zs,
    TileImage: Bs,
    TileTextContainer: Vs,
    EventType12: Hs,
    EventName: Us,
    EventSubTitle: Ws,
    GameCapsuleCtn: Gs,
    AppBannerLogo: Ks,
    FallbackImage: qs,
    ClanSource: Js,
    TileTextHeader: Ys,
    PatchIconCtn: Xs,
    EventTitleCtn: Zs,
    Footer: Qs,
    EventCapsuleCtn: $s,
    LiveBroadcastPreview: ec,
    TileBackgroundImage: tc,
    TileCoverImagePlayable: nc,
    TileCoverLiveIcon: rc,
    ReminderContainer: ic,
    OnlyIcon: ac,
    EventSummaryDefault: oc,
    Vote_NotLoggedIn: sc,
    Vote_LimitedUser: cc,
    Vote_Positive: lc,
    RateIcon: uc,
    Vote_Negative: dc,
    Vote_Ready: fc,
    FooterRightSide: pc,
    Options: mc,
    TileViewerCount: hc,
    FooterStat: gc,
    CommentIcon: _c,
    CommentIconCtn: vc,
    LoadingTile: yc,
    CarouselMode: bc,
    UpcomingMode: xc,
    TileVideoIcon: Sc,
    DateAndTime: Cc,
    HasVideo: wc,
    SubTitleShown: Tc,
    VideoPlayerReady: Ec,
  },
  Oc = f((e) => {
    let { eventModel: t, calendarEvent: n, history: r } = e,
      i = (e) => {
        let t = n.GetEntityName();
        I(
          (0, q.jsx)(Sn, {
            strTitle: L(`#EventCalendar_MuteApp_Title`, t),
            strDescription: L(`#EventCalendar_MuteApp_details`, t),
            onOK: () => v().UpdateEventBlockFromCalendarEvent(n, !1),
            children: (0, q.jsx)(`a`, {
              href: V.STORE_BASE_URL + `account/emailoptout/app`,
              target: V.IN_CLIENT ? void 0 : `_blank`,
              children: L(`#EventCalendar_ManageMutedSources`),
            }),
          }),
          sr(e),
        );
      },
      a = () => {
        v().UpdateEventBlockFromCalendarEvent(n, !0);
      },
      o = () => {
        let e = s().MapClanEventTypeToGroup(t.GetEventType());
        s().SetEventTypeGroupAllowed(e, !1);
      },
      s = () => v().m_visibilityStore,
      c = (e, t, n, r = !0) => {
        s().BIsGameSourceAllowed(t) &&
          (r &&
            e.push(
              (0, q.jsx)(
                H,
                {
                  disabled: !0,
                  onSelected: () => {},
                  children: L(`#EventCalender_Reason_` + t),
                },
                `item-source-${n}-${t}`,
              ),
            ),
          e.push(
            (0, q.jsx)(
              H,
              {
                onSelected: () => {
                  s().SetGameSourceAllowed(t, !1);
                },
                children: L(`#EventCalender_Hide_Reason_` + t),
              },
              `item-hidesource-${n}-${t}`,
            ),
          ));
      },
      l = bt(t, D.k_eStoreNewsHub, `allowRelative`),
      u = () => {
        l.startsWith(`http`) ? (window.location.href = l) : r.push(l);
      };
    return (0, q.jsx)(`div`, {
      className: j(gc, mc),
      onClick: (e) => {
        let r = [],
          l = n.GetSource(),
          d = n.unique_id,
          f = An(),
          p = v();
        (p.BIsGlobalCalendar() &&
          (l &&
            l & C.k_eLibrary &&
            (s().BIsGameSourceAllowed(S.k_ERecent) && n.appInfo
              ? (r.push(
                  (0, q.jsx)(
                    H,
                    {
                      disabled: !0,
                      onSelected: () => {},
                      children: L(
                        `#EventCalender_LastPlayed`,
                        fr(Rt.GetTimeNowWithOverride() - n.appInfo.last_played),
                      ),
                    },
                    `item-source-${d}-lastplayed`,
                  ),
                ),
                c(r, S.k_ERecent, d, !1))
              : c(r, S.k_ELibrary, d)),
          l && l & C.k_eWishlist && c(r, S.k_EWishlist, d),
          l && l & C.k_eFollowing && c(r, S.k_EFollowing, d),
          !f && l && l & C.k_eCurator && c(r, S.k_ECurator, d),
          l && l & C.k_eRecommended && c(r, S.k_ERecommended, d),
          l && l & C.k_eSteam && c(r, S.k_ESteam, d),
          l && l & C.k_eFeatured && c(r, S.k_EFeatured, d)),
          r.push(
            (0, q.jsx)(
              H,
              {
                onSelected: o,
                children: L(
                  `#EVentCalendar_Hide_EventType`,
                  L(
                    `#EventCalendar_EventTypeGroup_` +
                      s().MapClanEventTypeToGroup(t.GetEventType()),
                  ),
                ),
              },
              t.GID + `hidetype`,
            ),
          ),
          U.logged_in &&
            (ae.Get().BIsEventBlocked(n)
              ? r.push(
                  (0, q.jsx)(
                    H,
                    {
                      onSelected: a,
                      children: (0, q.jsx)(Or, {
                        toolTipContent: L(`#EventCalendar_UnMuteApp_ttip`),
                        children: L(
                          `#EventCalendar_UnMuteApp_Title`,
                          n.GetEntityName(),
                        ),
                      }),
                    },
                    t.GID + `unmuteapp`,
                  ),
                )
              : r.push(
                  (0, q.jsx)(
                    H,
                    {
                      onSelected: i,
                      children: (0, q.jsx)(Or, {
                        toolTipContent: L(`#EventCalendar_MuteApp_ttip`),
                        children: L(
                          `#EventCalendar_MuteApp_Title`,
                          n.GetEntityName(),
                        ),
                      }),
                    },
                    t.GID + `muteapp`,
                  ),
                )),
          !t.BIsOGGEvent() &&
            !f &&
            r.push((0, q.jsx)(kc, { eventModel: t, calendarEvent: n })),
          p.BIsSingleSourceCalendar() ||
            r.push(
              (0, q.jsx)(
                H,
                {
                  onSelected: u,
                  children: L(
                    `#EventCalendar_Goto_SpecificCalendar`,
                    n.GetEntityName(),
                  ),
                },
                t.GID + `goto`,
              ),
            ),
          t.appid &&
            r.push(
              (0, q.jsx)(
                H,
                {
                  onSelected: () =>
                    (window.location.href = Un(
                      V.STORE_BASE_URL + `app/` + t.appid,
                    )),
                  children: L(`#EventDisplay_ViewStorePage`),
                },
                t.GID + `goto`,
              ),
            ),
          Nn((0, q.jsx)(hn, { children: r }), e));
      },
      children: (0, q.jsx)(vr, {}),
    });
  });
function kc(e) {
  let { eventModel: t, calendarEvent: n } = e,
    r = de(t.clanSteamID.GetAccountID()),
    { elDialogElement: i, fnShowLogonDialog: a } = Ft(),
    o = K.useCallback(async () => {
      U.logged_in
        ? (await Zn.Get().UpdateFollowOrIgnoreCurator(t.clanSteamID, !0, !r),
          Ki(!!r))
        : a();
    }, [r, t.clanSteamID, a]);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(
        H,
        {
          onSelected: o,
          children: (0, q.jsx)(Or, {
            toolTipContent: L(
              r
                ? `#EventCalendar_UnFollowCurator_ttip`
                : `#EventCalendar_FollowCurator_ttip`,
            ),
            children: L(
              r
                ? `#EventCalendar_UnFollowCurator`
                : `#EventCalendar_FollowCurator`,
              n.GetEntityName(),
            ),
          }),
        },
        t.GID + `followcurator`,
      ),
      i,
    ],
  });
}
var Ac = c(Oc);
function jc(e) {
  let {
      eventModel: t,
      calendarEvent: n,
      bSuppressHoverEffects: r,
      mode: i,
      bHideGameTitle: a,
      fnOnClicked: o,
    } = e,
    [s, c] = K.useState(!1),
    l = gt(),
    u = ue(t.GetAppIDOrReferenceAppID());
  Bn(u);
  let d = $t(t);
  Nr(n.clanInfo?.clanid);
  let f = B(V.LANGUAGE),
    p = `capsule`,
    [h, _, v, y, b, x, S, ee, C, ne, re] = m(() => [
      t.has_live_stream,
      t.GetEventType(),
      t.GetAllTags(),
      t.GetCategoryAsString(),
      t.GetNameWithFallback(f),
      t.BImageNeedScreenshotFallback(p, f),
      t.appid,
      t.GID,
      t.GetStartTimeAndDateUnixSeconds(),
      t.GetSubTitleWithLanguageFallback(f),
      t.GetSummaryWithFallback(f),
    ]),
    [ie, ae] = K.useState(() => (wt() && _ == 14 ? g.full : g.capsule_main)),
    oe = Qt(),
    se = en(x && S && d ? void 0 : t, p, f, ie, oe) ?? d,
    ce = Nc(t, i),
    le = _n(ee),
    de = os[`EventType${_}`],
    fe = v.map((e) => os[`Tag-${e}`]),
    pe = j(
      fs,
      de,
      h && `MVfZPnoopw0-`,
      r ? void 0 : ds,
      s && `utI2vL1PRLs-`,
      ce && `_4wxMhjLGDEo-`,
      le && void 0,
      i === `wide` && void 0,
      i === `carousel` && `_6IHSOcZWQTI-`,
      i === `upcoming` && `i7ABr2eulso-`,
      ...fe,
    ),
    w = ne,
    me = re;
  (w === me && (me = void 0), w === b && (w = void 0));
  let he = ve(se),
    ge = (0, q.jsx)(Fc, {
      setVideoPlayerReady: c,
      calendarEvent: n,
      eventModel: t,
      mode: i,
      artworkType: p,
      strCapsuleImgURLForBackground: he,
      fnSetCoverSize: ae,
    }),
    T = r && _ != 14 && !(s && i !== `carousel`),
    _e = T && ge,
    ye = !T && ge,
    be = _ !== 28 && _ !== 12 && Rt.GetTimeNowWithOverride() < C,
    E = i !== `wide` || r,
    xe =
      be &&
      (0, q.jsx)(`div`, {
        className: j(`-VpcmDHYJBs-`, E && `_8hZf0ZZtftA-`),
        children: (0, q.jsx)(ct, {
          eventModel: t,
          lang: f,
          bShowStartTime: !0,
          bOnlyShowIcon: E,
          bExpandLeft: E,
        }),
      }),
    Se = !!(_ !== 12 && me),
    Ce = !(!w || (Se && Mc(w, me)));
  return (0, q.jsxs)(`div`, {
    className: pe,
    children: [
      (0, q.jsx)(te, { event: t, recordNewsHubStats: !0 }),
      (0, q.jsx)(xt, {
        eventModel: t,
        route: D.k_eView,
        children: (0, q.jsxs)(`div`, {
          className: Ls,
          onClick: (e) => {
            (l.RecordInteraction(Qe.k_eClickThrough),
              !Ct() && (o(t), e.stopPropagation(), e.preventDefault()));
          },
          children: [
            _ === 14 &&
              (0, q.jsx)(`div`, {
                className: j(`TtzbM79RcOo-`, x && `yI-XQCfZhjU-`),
                style: { backgroundImage: `url(${he})` },
              }),
            (0, q.jsxs)(`div`, {
              className: Rs,
              children: [
                ye,
                (0, q.jsxs)(`div`, {
                  className: Vs,
                  children: [
                    _ == 12 &&
                      (0, q.jsx)(`div`, {
                        className: `wdp2jpfiGas-`,
                        children: (0, q.jsx)(Jn, {}),
                      }),
                    (0, q.jsxs)(`div`, {
                      className: Zs,
                      children: [
                        _e,
                        !a &&
                          (0, q.jsxs)(`div`, {
                            className: `HcQu8--ilOI-`,
                            children: [
                              (0, q.jsx)(Lc, { ...e }),
                              n && (0, q.jsx)(zc, { calendarEvent: n }),
                            ],
                          }),
                        (0, q.jsx)(`div`, { className: Us, children: b }),
                        (0, q.jsxs)(`div`, {
                          className: Ts,
                          children: [
                            (0, q.jsx)(`div`, {
                              className: j(Os, de),
                              children: y,
                            }),
                            (0, q.jsx)(Rc, {
                              eventModel: t,
                              className: j(E && `_6qTH13L4IdM-`),
                            }),
                            E && xe,
                          ],
                        }),
                        Ce &&
                          (0, q.jsx)(`div`, {
                            className: `_9lDmRzgjqs4-`,
                            children: w,
                          }),
                        Se &&
                          (0, q.jsx)(`div`, {
                            className: j(
                              `O79JneSzM9g-`,
                              w ? `h-oZBBAdgfo-` : ``,
                            ),
                            children: me,
                          }),
                      ],
                    }),
                    !E && xe,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, q.jsx)(Hc, { ...e }),
    ],
  });
}
function Mc(e, t) {
  let n = (e) => e.replace(/\W+/g, ``).toLocaleLowerCase(),
    r = n(e);
  return n(t).startsWith(r);
}
function Nc(e, t) {
  let { video_preview_type: n, video_preview_id: r, type: i } = e;
  return !(t === `upcoming` || !r || i === 12 || n !== `youtube`);
}
function Pc(e) {
  let { eventModel: t, fnSetVideoStateReady: n, mode: r } = e,
    { video_preview_id: i, type: a } = e.eventModel,
    o = gt(),
    s = B(V.LANGUAGE),
    c = wt() && a == 14 ? g.full : g.capsule_main,
    l = Xt(t, `capsule`, s, c, !0);
  return r === `carousel`
    ? (0, q.jsx)(Lr, { altImgWithFallback: l, video: i, className: zs })
    : (0, q.jsx)(Rr, {
        video: i,
        altImgWithFallback: l,
        autoplay: !0,
        autopause: !0,
        showFullscreenBtn: !0,
        controls: !0,
        imageClassnames: zs,
        onPlayerActivated: () => {
          (o.RecordInteraction(Qe.k_ePlayedVideo), n(!0));
        },
        preloadYoutubeScripts: !0,
        playsInline: !0,
      });
}
function Fc(e) {
  let {
      eventModel: t,
      calendarEvent: n,
      mode: r,
      artworkType: i,
      strCapsuleImgURLForBackground: a,
      setVideoPlayerReady: o,
      fnSetCoverSize: s,
    } = e,
    c = B(V.LANGUAGE),
    l = Nc(t, r),
    u = !Nc(t, r) && r !== `upcoming`,
    [d, f, p, h, _, v] = m(() => [
      t.GetEventType(),
      t.has_live_stream,
      t.has_live_stream,
      t.clanSteamID.GetAccountID(),
      n.GetGameCapsule(),
      t.BImageNeedScreenshotFallback(i, c),
    ]);
  K.useEffect(() => {
    if (a) {
      let e = new Image();
      ((e.src = a),
        (e.onerror = () => {
          s(g.full);
        }));
    }
  }, [a, s]);
  let [, y] = Mr(h),
    b = y && !y.is_ogg,
    x = t.GetSummaryWithFallback(c);
  return (
    t.GetSubTitleWithLanguageFallback(c) === x && (x = void 0),
    (0, q.jsxs)(`div`, {
      className: ps,
      children: [
        l &&
          (0, q.jsx)(Pc, {
            eventModel: t,
            mode: r,
            calendarEvent: n,
            fnSetVideoStateReady: o,
          }),
        u &&
          (0, q.jsxs)(q.Fragment, {
            children: [
              d === 12 &&
                (0, q.jsxs)(q.Fragment, {
                  children: [
                    (0, q.jsx)(`div`, {
                      className: `E-S8WDov49g-`,
                      children: (0, q.jsx)(`div`, {
                        className: j({
                          "fzWS9zjHBQA-": !0,
                          "yI-XQCfZhjU-": v,
                          "zEB6Vo-lSoU-": b,
                        }),
                        style: { backgroundImage: `url(${_})` },
                      }),
                    }),
                    (0, q.jsx)(`div`, {
                      className: `NH4KbTPWsVo-`,
                      children: x,
                    }),
                  ],
                }),
              d !== 12 &&
                (0, q.jsxs)(`div`, {
                  className: j({ "iogiG-p5PHg-": !0, "e2Xhb-5xMvY-": p }),
                  children: [
                    (0, q.jsx)(`div`, {
                      className: j({
                        "_1ZYmIx0m7bo-": !0,
                        "yI-XQCfZhjU-": v,
                        "zEB6Vo-lSoU-": b,
                      }),
                      style: { backgroundImage: `url(${a})` },
                    }),
                    p && (0, q.jsx)(`div`, { className: `-y6T-NRjq1Q-` }),
                    f &&
                      (0, q.jsx)(`div`, {
                        className: `_0hsSPkL5myo-`,
                        children: L(`#home_page_live_broadcast`),
                      }),
                    p &&
                      (0, q.jsx)(`div`, {
                        className: `VideoHintText`,
                        children: L(`#EventCalendar_WatchLiveBroadcast`),
                      }),
                  ],
                }),
            ],
          }),
      ],
    })
  );
}
var Ic = f((e) => {
    let {
        eventModel: t,
        calendarEvent: n,
        bSuppressHoverEffects: r,
        history: i,
      } = e,
      a = bt(t, D.k_eStoreNewsHub, `allowRelative`),
      o = (e) => {
        (a.startsWith(`http`) ? (window.location.href = a) : i.push(a),
          e.stopPropagation(),
          e.preventDefault());
      },
      s = n.GetEntityName(),
      c = n.GetGameIcon(),
      l = j(cs, r ? void 0 : ds);
    return (0, q.jsx)(R, {
      children: (0, q.jsx)(`div`, {
        className: Ys,
        children: (0, q.jsxs)(`div`, {
          className: l,
          onClick: o,
          children: [
            (0, q.jsx)(`img`, { className: ls, src: c }),
            (0, q.jsxs)(`div`, { className: us, children: [s, ` `] }),
          ],
        }),
      }),
    });
  }),
  Lc = c(Ic),
  Rc = f((e) => {
    let { eventModel: t, calendarEvent: n, className: r } = e,
      i = v().GetStoreInitializationTimestamp().getTime() / 1e3,
      a = t ? t.GetStartTimeAndDateUnixSeconds() : n.start_time,
      o = t && ye(t.type) && t.GetEndTimeAndDateUnixSeconds();
    if (o && a < i && i < o) {
      let e = o - i,
        t = fr(e, !0);
      return (0, q.jsxs)(`div`, {
        className: j(hs, r),
        children: [
          (0, q.jsx)(nt, {
            rtFullDate: a,
            stylesmodule: os,
            children: (0, q.jsx)(`div`, {
              className: gs,
              children: L(`#EventCalendar_LiveNow`),
            }),
          }),
          (0, q.jsx)(nt, {
            rtFullDate: o,
            stylesmodule: os,
            children: L(`#EventCalendar_TimeLeft`, t),
          }),
        ],
      });
    }
    if (a < i) {
      let e = i - a,
        t = e < 86400 ? fr(e, !1, !0) : tr(a);
      return (0, q.jsx)(nt, {
        className: r,
        rtFullDate: a,
        stylesmodule: os,
        children: (0, q.jsx)(`div`, { className: vs, children: t }),
      });
    }
    {
      let e = new Date(i * 1e3);
      e.setHours(0, 0, 0, 1);
      let t = e.getTime() / 1e3,
        n = Math.floor((a - t) / 86400),
        o = n > 1 && n <= 5 ? mn(new Date(a * 1e3)) : tr(a),
        s = Pe(a);
      return (0, q.jsx)(nt, {
        className: r,
        rtFullDate: a,
        stylesmodule: os,
        children: (0, q.jsx)(`div`, {
          className: _s,
          children: L(`#EventCalendar_WillStartAtDateTime`, o, s),
        }),
      });
    }
  }),
  zc = f((e) => {
    let t = e.calendarEvent.GetSource(),
      n = [],
      r = v().m_visibilityStore;
    (t & C.k_eLibrary && r.BIsGameSourceAllowed(S.k_ELibrary)
      ? n.push({
          id: C.k_eLibrary,
          name: `#EventCalendar_GameSource_inLibrary`,
          ttip: `#EventCalendar_GameSource_EventExplanation_ttip_library`,
          styles: void 0,
        })
      : t & C.k_eWishlist && r.BIsGameSourceAllowed(S.k_EWishlist)
        ? n.push({
            id: C.k_eWishlist,
            name: `#EventCalendar_GameSource_onWishlist`,
            ttip: `#EventCalendar_GameSource_EventExplanation_ttip_wishlist`,
            styles: void 0,
          })
        : t & C.k_eRecommended && r.BIsGameSourceAllowed(S.k_ERecommended)
          ? n.push({
              id: C.k_eRecommended,
              name: `#EventCalendar_GameSource_recommended_Verbose`,
              ttip: `#EventCalendar_GameSource_EventExplanation_ttip_recommended`,
              styles: Ss,
            })
          : t & C.k_eFeatured &&
            r.BIsGameSourceAllowed(S.k_EFeatured) &&
            n.push({
              id: C.k_eFeatured,
              name: `#EventCalendar_GameSource_featured`,
              ttip: `#EventCalendar_GameSource_ttip_featured`,
              styles: void 0,
            }),
      t & C.k_eFollowing &&
        r.BIsGameSourceAllowed(S.k_EFollowing) &&
        n.push({
          id: C.k_eFollowing,
          name: `#EventCalendar_GameSource_followed`,
          ttip: `#EventCalendar_GameSource_EventExplanation_ttip_following`,
          styles: void 0,
        }));
    let i = n.map((t, r) => {
      let i = e.calendarEvent.unique_id;
      return Bc(
        `item-source-${i}-${t.id}`,
        t.name,
        t.ttip,
        t.styles,
        r + 1 < n.length,
      );
    });
    return (0, q.jsx)(`div`, { className: bs, children: i });
  }),
  Bc = (e, t, n, r, i) =>
    (0, q.jsx)(
      Or,
      {
        className: j(xs, r),
        toolTipContent: L(n),
        children: L(t) + (i ? `, ` : ``),
      },
      e,
    );
function Vc(e) {
  return U.logged_in
    ? U.is_limited
      ? cc
      : e === `up`
        ? lc
        : e === `down`
          ? dc
          : fc
    : sc;
}
function Hc(e) {
  let { eventModel: t } = e,
    n = gt(),
    { myVote: r, Vote: i } = st(t, { bAsk: !1 }),
    [, a] = Mr(t.clanSteamID.GetAccountID()),
    o = () => {
      r !== `up` && Je() && (i(`up`), n.RecordInteraction(Qe.k_eThumbsUp));
    },
    s = () => {
      n.RecordInteraction(Qe.k_eDiscussions);
    },
    [c, l, u] = m(() => [
      Math.max(0, t.nVotesUp - t.nVotesDown),
      t.GetDiscussionURL(a?.vanity_url),
      t.nCommentCount,
    ]),
    d = Vc(r),
    f = !An() && l,
    p = t.live_stream_viewer_count > 0 ? t.live_stream_viewer_count : void 0;
  return (0, q.jsx)(`div`, {
    className: Qs,
    children: (0, q.jsxs)(`div`, {
      className: pc,
      children: [
        !!p && (0, q.jsx)(`div`, { className: `zxaNRVKQnTM-`, children: z(p) }),
        (0, q.jsxs)(`div`, {
          className: j(gc, void 0, d),
          onClick: o,
          children: [
            (0, q.jsx)(pn, { className: uc }),
            (0, q.jsx)(`span`, { children: z(Number(c)) }),
          ],
        }),
        f &&
          (0, q.jsx)(`div`, {
            className: `CakmFSjnZaQ-`,
            children: (0, q.jsxs)(`a`, {
              href: l,
              className: `_2aS2MHSUX-U-`,
              target: `_blank`,
              onClick: s,
              children: [
                (0, q.jsx)(Qn, { className: `Ilo9d6Bcf60-` }),
                (0, q.jsx)(`span`, { children: z(Number(u)) }),
              ],
            }),
          }),
        (0, q.jsx)(Ac, { ...e }),
      ],
    }),
  });
}
function Uc(e, t, n) {
  let r = [];
  (r.push(t.QueueLoadPartnerEvent(e.clanid, e.unique_id)),
    e.appid && r.push(M.Get().QueueAppRequest(e.appid, Wc)),
    e.clanInfo && r.push(G.LoadClanInfoForClanAccountID(e.clanInfo.clanid)),
    Promise.all(r).then(() => {
      let r = t.GetClanEventModel(e.unique_id);
      r && r.appid && r.appid != e.appid && !M.Get().BHasApp(r.appid, Wc)
        ? M.Get().QueueAppRequest(r.appid, Wc).then(n)
        : n();
    }));
}
var Wc = { include_assets: !0, include_release: !0, include_screenshots: !0 };
function Gc(e, t) {
  let n = t.GetClanEventModel(e.unique_id);
  return !(
    !n ||
    (e.appid && !M.Get().BHasApp(e.appid, Wc)) ||
    (n.appid && n.appid != e.appid && !M.Get().BHasApp(n.appid, Wc)) ||
    (e.clanInfo && !G.HasLoadedClanAccountID(e.clanInfo.clanid))
  );
}
var Kc = f((e) => {
    let {
        calendarEvent: t,
        partnerEventStore: n,
        mode: r,
        forceParentUpdate: i,
      } = e,
      a = `500px`,
      o = os[`EventType${t.event_type}`],
      s = j(fs, o),
      c = r === `carousel`,
      l = lr(
        {
          onEnter: () => {
            Uc(t, n, i);
          },
        },
        { rootMargin: `${a} 0px ${a} 0px` },
      );
    return (0, q.jsxs)(`div`, {
      className: s,
      ref: l,
      children: [
        (0, q.jsx)(`div`, {
          className: j(Ls, yc),
          children: c && (0, q.jsx)(O, {}),
        }),
        (0, q.jsx)(`div`, { className: Qs }),
      ],
    });
  }),
  qc = f((e) => {
    let { partnerEventStore: t, calendarEvent: n, ...r } = e,
      i = t.GetClanEventModel(n.unique_id),
      a = Gc(n, t),
      o = Rn();
    return a
      ? (0, q.jsx)(jc, { eventModel: i, calendarEvent: n, ...r })
      : (0, q.jsx)(Kc, {
          calendarEvent: n,
          partnerEventStore: t,
          ...r,
          forceParentUpdate: o,
        });
  }),
  Jc = `SWQ4gmR-Kcs-`,
  Yc = `izaCQUJJRYU-`,
  Xc = `podvtky5AYo-`,
  Zc = `rMEgGPCw-uA-`,
  Qc = `_4wBEEK8xCqw-`,
  $c = `Auch081N4Vk-`,
  el = `SteamNewsHub_SuggestCuratorsDismissed`;
function tl() {
  let e = JSON.parse(localStorage.getItem(el));
  return e && e.bDismissed;
}
function nl() {
  let e = Hn.GetELanguageFallbackOrder();
  e.find((e) => e === 0) === void 0 && e.push(0);
  let t = [];
  for (let n of e) {
    let e = Z.Get().GetCuratorsForLang(n);
    if (!e) continue;
    let r = e.filter((e) => !Zn.Get().BIsIgnoringCurator(e.clanAccountID));
    (yr(r), t.push(...r));
  }
  return t;
}
function rl(e) {
  let { bCanDismiss: t } = e,
    [n, r] = (0, K.useState)(() => tl()),
    [i, a] = (0, K.useState)(0),
    [o, s] = (0, K.useState)(null),
    c = (0, K.useRef)(void 0),
    l = Dt(`CuratorFeedSuggestRow`),
    u = (0, K.useCallback)(() => {
      if (!l.token.reason) {
        if (!c.current) a(0);
        else {
          let e = Math.floor(
            Math.min(c.current.clientWidth, window.innerWidth) / 118,
          );
          a(Math.max(e - 1, 0));
        }
      }
    }, [l.token.reason]);
  if (
    ((0, K.useEffect)(() => u(), [u]),
    (0, K.useEffect)(
      () => (
        o ??
          (async () => {
            (await Z.Get().WaitForInitialLoad(), l.token.reason || s(nl));
          })(),
        window.addEventListener(`resize`, u),
        () => window.removeEventListener(`resize`, u)
      ),
      [l.token.reason, u, o],
    ),
    n)
  )
    return null;
  let d = o?.slice(0, i).map((e) => {
    let t = G.GetClanInfoByClanAccountID(e.clanAccountID);
    return t
      ? (0, q.jsx)(
          `div`,
          {
            className: Qc,
            children: (0, q.jsx)(Qi, { clanInfo: t, layout: `icon` }),
          },
          t.clanAccountID,
        )
      : null;
  });
  return (0, q.jsx)(R, {
    children: (0, q.jsx)(`div`, {
      className: Jc,
      children: (0, q.jsxs)(`div`, {
        className: Yc,
        children: [
          (0, q.jsx)(`div`, {
            className: Xc,
            children: L(`#EventCurator_FeedCaption_Long`),
          }),
          t &&
            (0, q.jsx)(`div`, {
              className: `dOIuQRkhLak-`,
              onClick: (e) => {
                I(
                  (0, q.jsx)(Sn, {
                    strTitle: L(`#EventCurator_DismissTitle`),
                    strDescription: L(`#EventCurator_DismissBody`),
                    onOK: () => {
                      (localStorage.setItem(
                        el,
                        JSON.stringify({ bDismissed: !0 }),
                      ),
                        l.token.reason || r(!0));
                    },
                  }),
                  sr(e),
                );
              },
              children: (0, q.jsx)(nr, {}),
            }),
          (0, q.jsxs)(A, {
            className: Zc,
            ref: c,
            "flow-children": `row`,
            children: [
              d || (0, q.jsx)(O, {}),
              (0, q.jsx)(`div`, {
                className: $c,
                onClick: Io.Get().ShowBrowseCurator,
                children: L(`#EventCurator_BrowseMore`),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
var il = `_7wtqpIaQJlI-`,
  al = `J1LSw12RNvU-`,
  ol = `Evh8j7It0bw-`,
  sl = `oD7LStihTaw-`,
  cl = `Du-T0LYtFw8-`,
  ll = (e) => {
    let {
        titleToken: t,
        subtitleToken: n,
        backgroundImg: r,
        headerImg: i,
        headerURL: a,
      } = e,
      o = r ? { backgroundImage: r } : {};
    return (0, q.jsx)(`div`, {
      className: j(void 0, il, e.largeHeader && `lxqRwnfggNE-`),
      style: o,
      children: (0, q.jsxs)(`div`, {
        className: j(al, i ? void 0 : cl),
        children: [
          !!(a && i) &&
            (0, q.jsx)(`a`, {
              href: a,
              className: `i6-WbcT81F0-`,
              children: (0, q.jsx)(`img`, {
                className: `_9PhikteEvrs-`,
                src: i,
              }),
            }),
          !(!i || a) &&
            (0, q.jsx)(`div`, {
              className: `i6-WbcT81F0-`,
              children: (0, q.jsx)(`img`, {
                className: `_9PhikteEvrs-`,
                src: i,
              }),
            }),
          (0, q.jsxs)(`div`, {
            className: ol,
            children: [
              (0, q.jsx)(`div`, {
                className: sl,
                children: t.startsWith(`#`) ? L(t) : t,
              }),
              n &&
                (0, q.jsx)(`div`, {
                  className: `o1aL-5aRB7w-`,
                  children: n.startsWith(`#`) ? L(n) : n,
                }),
            ],
          }),
        ],
      }),
    });
  };
function ul(e) {
  let t = ie(e);
  return (
    Dn(!!t, `Must define collection ` + e),
    {
      collection: e,
      smallHeight: 80,
      largeHeight: 200,
      component: (e, n, r) =>
        (0, q.jsx)(ll, {
          largeHeader: e,
          titleToken: t?.strHeaderTitle ?? ``,
          subtitleToken: t?.strHeaderSubtitle,
          headerImg: n,
          headerURL: r,
        }),
    }
  );
}
function dl(e, t) {
  if (!e) return 0;
  let n = _l().find((t) => t.collection === e);
  return n ? (t ? n.largeHeight : n.smallHeight) : 0;
}
function fl(e, t, n, r) {
  if (!e) return null;
  let i = _l().find((t) => t.collection === e);
  return i ? i.component(t, n, r) : null;
}
function pl(e, t) {
  return !e || !k.GetClanEventModel(e) ? 0 : t ? 200 : 80;
}
function ml(e, t) {
  if (!e) return null;
  let n = k.GetClanEventModel(e);
  return n ? (0, q.jsx)(hl, { bLargeHeader: t, eventModel: n }) : null;
}
function hl(e) {
  let { bLargeHeader: t, eventModel: n } = e,
    r = B(V.LANGUAGE),
    i = en(n, `capsule`, r, g.capsule_main);
  return (0, q.jsx)(ll, {
    largeHeader: t,
    titleToken: n.GetNameWithFallback(r) ?? ``,
    subtitleToken: n.GetSubTitleWithSummaryFallback(r),
    headerImg: i,
  });
}
var gl = null;
function _l() {
  return (
    gl || ((gl = []), gl.push(ul(_.Press)), gl.push(ul(_.Halloween))), gl
  );
}
var vl = `_8cquMQJOr-c-`,
  yl = `yU9ZvjZaQZ4-`,
  bl = `czO-Paq-O-0-`,
  xl = `gycNuT5NcpQ-`,
  Sl = `jcq6-nYn6P0-`,
  Cl,
  wl = class extends K.Component {
    render() {
      let {
        rgCalendarItems: e,
        bSuppressHoverEffects: t,
        strMultipleSourceTitle: n,
      } = this.props;
      if (!e || e.length == 0) return null;
      let r = e[0];
      if (!e.every((e) => e.appid === r.appid && e.clanid === r.clanid))
        return n
          ? (0, q.jsx)(`div`, {
              className: bl,
              children: (0, q.jsx)(`div`, { className: xl, children: n }),
            })
          : null;
      let i = !!(r.appid === 0 && U.accountid);
      return (0, q.jsxs)(`div`, {
        className: bl,
        children: [
          (0, q.jsx)(`div`, {
            className: Sl,
            children: (0, q.jsx)(Yl, {
              calendarItem: r,
              bSuppressHoverEffects: t,
            }),
          }),
          i &&
            (0, q.jsx)(`div`, {
              className: `C9sbbTu0HGw-`,
              children: (0, q.jsx)(ge, { clanAccountID: r.clanid }),
            }),
        ],
      });
    }
  };
wl = F([f], wl);
var Tl = (Cl = class extends K.Component {
  state = {
    bScreenIsWide: Cl.IsWideScreen(),
    nMaxCapsulesPerRow: this.GetMaxCapsulesPerRow(),
  };
  componentDidMount() {
    window.addEventListener(`resize`, this.OnResize);
  }
  componentWillUnmount() {
    window.removeEventListener(`resize`, this.OnResize);
  }
  static IsWideScreen() {
    return window.innerWidth >= 910;
  }
  GetMaxCapsulesPerRow() {
    return Cl.IsWideScreen() ? 3 : window.innerWidth > 700 ? 2 : 1;
  }
  OnResize() {
    this.setState({
      bScreenIsWide: Cl.IsWideScreen(),
      nMaxCapsulesPerRow: this.GetMaxCapsulesPerRow(),
    });
  }
  render() {
    let {
      rgCalendarItems: e,
      fnOnEventClick: t,
      bSuppressHoverEffects: n,
      bHideGameTitle: r,
      strMultipleSourceTitle: i,
    } = this.props;
    if (!e || e.length == 0) return null;
    let a = e.map((i) =>
      (0, q.jsx)(
        qc,
        {
          calendarEvent: i,
          partnerEventStore: k,
          fnOnClicked: t,
          bSuppressHoverEffects: n,
          mode: e.length > 1 ? `carousel` : `wide`,
          bHideGameTitle: r,
        },
        `ht-` + i.unique_id,
      ),
    );
    return (0, q.jsxs)(`div`, {
      className: void 0,
      children: [
        (0, q.jsx)(wl, {
          rgCalendarItems: e,
          bSuppressHoverEffects: n,
          strMultipleSourceTitle: i,
        }),
        (0, q.jsx)(`div`, {
          className: j(vl, `EventTileCarouselCtn`),
          children: (0, q.jsx)(Yt, {
            ...this.props,
            hideArrows: !0,
            visibleElements: Math.min(
              this.state.nMaxCapsulesPerRow,
              this.props.rgCalendarItems.length,
            ),
            className: yl,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            disableEdgeWrap: !0,
            screenIsWide: this.state.bScreenIsWide,
            children: a,
          }),
        }),
      ],
    });
  }
});
(F([W], Tl.prototype, `OnResize`, null), (Tl = Cl = F([f], Tl)));
var El = `g9t-2syJNnE-`,
  Dl = `_4O47-h0zJ1s-`,
  Ol = `x1sf2kCIcTg-`,
  kl = `-mhlza7f4UU-`,
  Al = `wd8nzpJZvoU-`,
  jl = `IuCiqaN3930-`,
  Ml = `Lvx9YqtBZ0M-`,
  Nl = `U-2BVq-0Ddc-`,
  Pl = `eNrYBw-D864-`,
  Fl = (e) => {
    let t = [];
    return (
      V.SUPPORTED_LANGUAGES?.length
        ? (t = V.SUPPORTED_LANGUAGES.map((e) => e.localizedName))
        : t.push(L(`#Language_` + V.LANGUAGE)),
      (0, q.jsx)(`div`, { className: Ml, children: t.join(`, `) })
    );
  },
  Il = (e) => {
    let t = `SteamNewsHub_LanguageDismissed`,
      [n, r] = K.useState(
        (() => {
          let e = JSON.parse(localStorage.getItem(t));
          return e && e.bDismissed;
        })(),
      );
    if (n || An()) return null;
    let i = () => {
        (r(!0), localStorage.setItem(t, JSON.stringify({ bDismissed: !0 })));
      },
      a = V.STORE_BASE_URL + `account/languagepreferences/`;
    return (0, q.jsx)(`div`, {
      className: El,
      children: (0, q.jsxs)(`div`, {
        className: Dl,
        children: [
          (0, q.jsx)(`div`, {
            className: Pl,
            onClick: i,
            children: (0, q.jsx)(nr, {}),
          }),
          (0, q.jsxs)(`div`, {
            className: Ol,
            children: [
              (0, q.jsx)(`div`, {
                className: kl,
                children: (0, q.jsx)(Cn, {}),
              }),
              (0, q.jsxs)(`div`, {
                className: Al,
                children: [
                  (0, q.jsx)(`div`, {
                    className: jl,
                    children: L(`#EventCalendar_NewsLanguage_Title`),
                  }),
                  (0, q.jsx)(Fl, {}),
                  (0, q.jsx)(`div`, {
                    className: Nl,
                    children: Kn(
                      `#EventCalendar_NewsLanguage_Text`,
                      (0, q.jsx)(`a`, {
                        href: a,
                        children: L(
                          `#EventCalendar_NewsLanguage_TextInHyperlink`,
                        ),
                      }),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ll,
  Rl,
  zl = `global_header`;
function Bl() {
  let e = document.getElementById(zl);
  if (e && getComputedStyle(e).display != `none`) return e;
  let t = document.getElementsByClassName(`responsive_header`);
  return (
    Dn(t.length <= 1, `Must have at most one responsive_header`),
    t.length == 1 ? t[0] : null
  );
}
function Vl() {
  let e = Bl();
  return (e && e.id != zl) || V.IN_MOBILE_WEBVIEW;
}
function Hl() {
  return Vl() || window.innerWidth < 1e3;
}
var $ = class extends K.Component {
  static {
    Ll = this;
  }
  state = {
    bUserIsLoggedIn: U.logged_in,
    nVisibleHeight: 0,
    nScrollTop: 0,
    bControlBarIsCollapsed: Hl(),
    bControlBarWasOpenedByUser: !1,
    nDisappearingHeaderTop: 0,
    nSteamNavHeaderHeight: 0,
    nMobileNavBannerHeight: 0,
    nHubBannerHeight: 0,
    nGroupHeaderHeight: 0,
    nLogInBannerHeight: 0,
    nAccumScrollUp: 0,
    nAccumScrollDown: 0,
  };
  m_cancelSignal = J.default.CancelToken.source();
  componentDidMount() {
    (this.InitEventCalendarStore(),
      this.UpdateDocumentUI(),
      window.addEventListener(`resize`, this.OnResize),
      window.addEventListener(`scroll`, this.OnScroll),
      this.setState({ nVisibleHeight: window.innerHeight }),
      window.scrollTo(0, 0),
      this.UpdateEventControlLocationAndVisibility(),
      V.IN_MOBILE_WEBVIEW &&
        this.props.location &&
        this.props.history.length == 0 &&
        this.props.history.push(this.props.location),
      _r());
  }
  componentDidUpdate(e, t) {
    ((t.bUserIsLoggedIn != this.state.bUserIsLoggedIn ||
      JSON.stringify(e.filter_to_appids) !=
        JSON.stringify(this.props.filter_to_appids) ||
      JSON.stringify(e.filter_to_clanids) !=
        JSON.stringify(this.props.filter_to_clanids) ||
      e.filter_to_collection !== this.props.filter_to_collection ||
      e.filter_to_saleid !== this.props.filter_to_saleid ||
      e.filter_to_contenthub_hubtype !==
        this.props.filter_to_contenthub_hubtype ||
      e.filter_to_contenthub_category_or_language !==
        this.props.filter_to_contenthub_category_or_language ||
      e.filter_to_contenthub_tag_name !==
        this.props.filter_to_contenthub_tag_name ||
      e.section_by_day !== this.props.section_by_day) &&
      (window.scrollTo(0, 0), this.InitEventCalendarStore()),
      this.UpdateDocumentUI(),
      this.LoadEventToShowAsModal(),
      this.UpdateEventControlLocationAndVisibility());
  }
  UpdateEventControlLocationAndVisibility() {
    if (this.props.location) {
      let e = Io.Get().UpdateLocation(
        () => this.props.history,
        this.props.location,
      );
      ((e != `desktop_navigation` && this.state.bControlBarIsCollapsed) ||
        (e == `desktop_navigation` &&
          !this.state.bControlBarIsCollapsed &&
          Vl())) &&
        this.ToggleControlBarCollapsed();
    }
  }
  componentWillUnmount() {
    (this.m_cancelSignal.cancel(`component unmounted`),
      window.removeEventListener(`resize`, this.OnResize),
      window.removeEventListener(`scroll`, this.OnScroll),
      this.UpdateBodyScrollState(!0));
    let e = Bl();
    e && (e.style.transform = ``);
  }
  GetCurrentHubBannerHeight(e) {
    let t = e && !wt();
    return v().GetCollectionID()
      ? dl(v().GetCollectionID(), t)
      : v().BIsSaleCalendar()
        ? pl(v().GetSaleID(), t)
        : v().BIsSingleSourceCalendar()
          ? parseInt(t ? ra : na) - 1
          : 0;
  }
  BShowLogInBanner() {
    return !(this.state.bUserIsLoggedIn || !v().BIsGlobalCalendar());
  }
  GetCurrentHeaderHeights(e) {
    let t = Vl(),
      n = wt(),
      r = 0;
    Bl() && ((r = parseInt(t ? ta : ea)), --r);
    let i = parseInt(n ? aa : ia) - 1,
      a = (t ? parseInt(oa) : 0) - 1,
      o = this.GetCurrentHubBannerHeight(e),
      s = 0;
    return (
      this.BShowLogInBanner() && (s = parseInt(e && !n ? sa : ca)),
      {
        nSteamNavHeaderHeight: r,
        nMobileNavBannerHeight: a,
        nHubBannerHeight: o,
        nGroupHeaderHeight: i,
        nLogInBannerHeight: s,
      }
    );
  }
  async LoadEventToShowAsModal() {
    let e = Nt(this.props.location, `megaphone`);
    if (e && e !== `0` && e !== `false`) {
      At(this.props.history, `megaphone`, null);
      let e = await k.LoadAdjacentPartnerEvents(null, null, E, 0, 1, {
        exclude_tags: [`patchnotes`, `skip_megaphone`],
      });
      if (e?.length == 1) {
        let t = e[0];
        Mt(this.props.history, {
          emclan: t.clanSteamID.ConvertTo64BitString(),
          emgid: t.GID,
        });
      } else console.error(`Could not find the most recent Steam Blog post.`);
    }
    let t = Nt(this.props.location, `clientpatchnotes`);
    if (t && t !== `0` && t !== `false`) {
      At(this.props.history, `clientpatchnotes`, null);
      let [e, n] = t === `beta` ? [null, _e] : [E, null],
        r = await k.LoadAdjacentPartnerEvents(
          null,
          P.InitFromClanID(n, V.EUNIVERSE),
          e,
          0,
          1,
          { require_tags: [`patchnotes`] },
        );
      if (r?.length == 1) {
        let e = r[0];
        Mt(this.props.history, {
          emclan: e.clanSteamID.ConvertTo64BitString(),
          emgid: e.GID,
        });
      } else
        console.error(
          `Could not find the most recent Steam client patch notes.`,
        );
    }
    let n = Nt(this.props.location, `emclan`),
      r = Nt(this.props.location, `emgid`);
    if (n && r) {
      let e = new P(n);
      if (
        this.state.modalEvent &&
        this.state.modalEvent.clanSteamID.ConvertTo64BitString() ==
          e.ConvertTo64BitString() &&
        this.state.modalEvent.GID == r
      )
        return;
      let t = await k.LoadPartnerEventFromClanEventGIDAndClanSteamID(e, r, 0);
      this.setState({ modalEvent: t });
    } else this.state.modalEvent && this.setState({ modalEvent: null });
  }
  BShowFutureView() {
    let e = Nt(this.props.location, `upcoming`);
    return e && e != `false`;
  }
  BShowUpdatesOnly() {
    return !!(
      this.props.filter_to_appids &&
      this.props.filter_to_appids.length == 1 &&
      Nt(this.props.location, `updates`) == `true`
    );
  }
  UpdateDocumentUI() {
    let e,
      t,
      n = v();
    if (n.BIsGlobalCalendar()) {
      let t = ie(this.BShowFutureView() ? _.Upcoming : _.Default);
      e = t?.strHeaderTitle ?? t?.strName;
    } else if (n.BIsSingleAppCalendar()) {
      let t = n.GetSingleAppID();
      e = M.Get().GetApp(t)?.GetName();
    } else if (n.BIsSingleGroupCalendar()) {
      let t = n.GetSingleGroupID(),
        r = t && G.GetClanInfoByClanAccountID(t);
      e = r && r.group_name;
    } else if (n.BIsCollectionCalendar()) {
      let t = n.GetCollectionID(),
        r = ie(t);
      e = r?.strHeaderTitle ?? r?.strName;
    } else if (n.BIsSaleCalendar()) {
      let r = k.GetClanEventModel(n.GetSaleID());
      if (r) {
        if (r.appid) e = M.Get().GetApp(r.appid)?.GetName();
        else {
          let t = r.clanSteamID?.GetAccountID(),
            n = t && G.GetClanInfoByClanAccountID(t);
          e = n && n.group_name;
        }
        t = r && r.GetNameWithFallback(B(V.LANGUAGE));
      }
    }
    let r = L(`#EventCalendar_TabTitle_Global`);
    (e &&
      (r = t
        ? L(`#EventCalendar_TabTitle_GroupNameAndEventDetail`, e, t)
        : L(`#EventCalendar_TabTitle_GroupHub`, e)),
      document.title != r && (document.title = r),
      document.body.classList.contains(`events_hub`) ||
        document.body.classList.add(`events_hub`));
  }
  OnResize() {
    this.setState((e) => {
      let t = window.innerHeight,
        n = !e.bControlBarWasOpenedByUser && Hl(),
        r = this.GetCurrentHeaderHeights(this.state.nScrollTop <= 0);
      return (
        this.UpdateBodyScrollState(n),
        { nVisibleHeight: t, bControlBarIsCollapsed: n, ...r }
      );
    });
  }
  OnScroll() {
    let e = Math.round(window.scrollY);
    this.setState((t) => {
      let n = t.nScrollTop <= 0,
        r = e <= 0,
        { nHubBannerHeight: i, nLogInBannerHeight: a } = t;
      if (n != r) {
        let e = this.GetCurrentHeaderHeights(r);
        ((i = e.nHubBannerHeight), (a = e.nLogInBannerHeight));
      }
      let o = e - t.nScrollTop,
        s = Math.max(0, t.nAccumScrollUp - o),
        c = Math.max(0, t.nAccumScrollDown + o),
        l = t.nDisappearingHeaderTop,
        u = t.nDisappearingHeaderTop < 0;
      (c > 80 && ((s = 0), (c = 0), (u = !0)),
        (s > 100 || r) && ((s = 0), (c = 0), (u = !1)),
        this.state.bControlBarIsCollapsed || (u = !1),
        t.modalEvent && (u = !0));
      let d = t.nSteamNavHeaderHeight + i + t.nMobileNavBannerHeight;
      if (((l = u ? -1 * d : 0), l !== t.nDisappearingHeaderTop)) {
        let e = Bl();
        e && (e.style.transform = `translateY(${l}px)`);
      }
      return {
        nScrollTop: e,
        nAccumScrollUp: s,
        nAccumScrollDown: c,
        nDisappearingHeaderTop: l,
        nHubBannerHeight: i,
        nLogInBannerHeight: a,
      };
    });
  }
  static m_bInitialLoad = !0;
  async InitEventCalendarStore() {
    let e = {
        appids: this.props.filter_to_appids,
        clanaccountids: this.props.filter_to_clanids,
        collectionid: this.props.filter_to_collection,
        saleid: this.props.filter_to_saleid,
        hubtype: this.props.filter_to_contenthub_hubtype,
        category_or_language:
          this.props.filter_to_contenthub_category_or_language,
        tag_name: this.props.filter_to_contenthub_tag_name,
        bSectionByDay: this.props.section_by_day,
      },
      t = ee(e, this.props.initialFilters),
      n = v();
    ae.Get();
    let r = !!(this.state.bUserIsLoggedIn && U.accountid),
      i = n.BIsGlobalCalendar() && r ? `local` : `session`,
      a = n.BIsGlobalCalendar() ? `U` + U.accountid : t;
    n.m_visibilityStore.Init(
      r,
      this.BShowUpdatesOnly(),
      n.BIsShowingFeaturedFeed(),
      a,
      i,
    );
    let o = !n.BIsCollectionCalendar();
    if (
      (n.SetFilteredView((e) => n.m_visibilityStore.BShouldDisplayEvent(e), o),
      Ll.m_bInitialLoad)
    ) {
      let e = Gn(`metadatainfo`, `application_config`);
      n.SetCollectionMetaData(n.ValidateCollectionMetadata(e) ? e : null);
    }
    let s = Ll.m_bInitialLoad && Gn(`initialEvents`, `application_config`);
    (s
      ? (await n.RegisterCalendarEventsAndModels(s), (Ll.m_bInitialLoad = !1))
      : await n.RegisterCalendarEventsAndModels({ success: 1 }),
      n.BIsSingleSourceCalendar() &&
        (n.BIsSingleAppCalendar()
          ? M.Get().QueueAppRequest(n.GetSingleAppID(), {
              include_assets: !0,
              include_platforms: !0,
              include_basic_info: !0,
              include_release: !0,
            })
          : G.LoadClanInfoForClanSteamID(
              P.InitFromClanID(n.GetSingleGroupID(), V.EUNIVERSE),
            )),
      this.OnResize());
  }
  UpdateBodyScrollState(e) {
    let t = !e && Vl(),
      n = document.body;
    n && (t ? n.classList.add(Ea) : n.classList.remove(Ea));
  }
  MobileNavOpenSettings() {
    (this.ToggleControlBarCollapsed(), Ko(!0));
  }
  ToggleControlBarCollapsed() {
    this.setState((e) => {
      let t = !e.bControlBarIsCollapsed,
        n = e.bControlBarIsCollapsed,
        r = t ? e.nDisappearingHeaderTop : 0,
        i = Bl();
      return (
        i && (i.style.transform = `translateY(${r}px)`),
        this.UpdateBodyScrollState(t),
        {
          bControlBarIsCollapsed: t,
          bControlBarWasOpenedByUser: n,
          nDisappearingHeaderTop: r,
        }
      );
    });
  }
  OnControlBarChange() {
    window.scrollTo(0, 0);
  }
  CloseEventModal() {
    let e = Bl();
    (e &&
      (e.style.transform = `translateY(${this.state.nDisappearingHeaderTop}px)`),
      this.props.history.action === `PUSH`
        ? this.props.history.goBack()
        : Ot(this.props.history, { emclan: void 0, emgid: void 0 }));
  }
  async OnEventClicked(e) {
    this.props.tracker.RecordEventRead(e, 8);
    let t =
        this.state.nSteamNavHeaderHeight +
        this.state.nHubBannerHeight +
        this.state.nMobileNavBannerHeight,
      n = Bl();
    (n && (n.style.transform = `translateY(${-1 * t}px)`),
      Ot(this.props.history, {
        emclan: e.clanSteamID.ConvertTo64BitString(),
        emgid: e.GID,
      }));
  }
  ToggleFutureView() {
    kt(
      this.props.history,
      `upcoming`,
      this.BShowFutureView() ? `false` : `true`,
    );
  }
  ResetAllFilters() {
    (kt(this.props.history, `updates`, void 0),
      v().m_visibilityStore.InitDefaultCheckboxes(
        this.state.bUserIsLoggedIn,
        !1,
      ));
  }
  render() {
    let e =
        this.state.nSteamNavHeaderHeight +
        this.state.nHubBannerHeight +
        this.state.nMobileNavBannerHeight +
        this.state.nLogInBannerHeight,
      t = this.state.nDisappearingHeaderTop + this.state.nSteamNavHeaderHeight,
      n = t + this.state.nMobileNavBannerHeight,
      r = n + this.state.nLogInBannerHeight,
      i = this.state.nVisibleHeight <= parseInt($i),
      a = i
        ? 0
        : this.state.nDisappearingHeaderTop + this.state.nSteamNavHeaderHeight,
      o = i ? 0 : this.state.nDisappearingHeaderTop + e,
      s = v().m_visibilityStore.BAreAnyEventsFiltered(
        this.state.bUserIsLoggedIn,
      )
        ? this.ResetAllFilters
        : null;
    return (0, q.jsx)(K.Fragment, {
      children: (0, q.jsxs)(A, {
        className: j(Da, this.state.bControlBarIsCollapsed ? Oa : ``),
        "flow-children": `row`,
        children: [
          (0, q.jsx)(R, {
            children: this.state.modalEvent
              ? (0, q.jsx)(Fr, {
                  appid: this.state.modalEvent.appid,
                  trackingLocation: 8,
                  announcementGID: this.state.modalEvent.GetAnnouncementGID(),
                  partnerEventStore: k,
                  eventModel: this.state.modalEvent,
                  showAppHeader: !0,
                  closeModal: this.CloseEventModal,
                })
              : null,
          }),
          (0, q.jsx)(R, {
            children: (0, q.jsx)(qo, {
              bUserIsLoggedIn: this.state.bUserIsLoggedIn,
              nDisappearingHeaderVisibleHeight: a,
              bIsCollapsed: this.state.bControlBarIsCollapsed,
              bShowUpcoming: this.BShowFutureView(),
              bShouldIncludeLegalFooter: !Vl(),
              fnToggleCollapsed: this.ToggleControlBarCollapsed,
              fnOnFilterChange: this.OnControlBarChange,
            }),
          }),
          (0, q.jsx)(R, {
            children: (0, q.jsxs)(A, {
              className: j(
                ka,
                !this.state.bControlBarIsCollapsed && `LH-GwC6nGI4-`,
              ),
              "flow-children": `column`,
              children: [
                (0, q.jsx)(R, {
                  children:
                    this.state.nLogInBannerHeight > 0 &&
                    (0, q.jsx)(Ql, {
                      nTopOffset: n,
                      bLargeMode: this.state.nScrollTop <= 0 && !wt(),
                    }),
                }),
                (0, q.jsxs)(R, {
                  children: [
                    this.state.nMobileNavBannerHeight > 0 &&
                      (0, q.jsx)(ts, {
                        bIsUpcoming: this.BShowFutureView(),
                        nTopOffset: t,
                        fnToggleCollapsed: this.MobileNavOpenSettings,
                      }),
                    (0, q.jsx)(Wl, {
                      nTopOffset: r,
                      bLargeMode: this.state.nScrollTop <= 0 && !wt(),
                    }),
                  ],
                }),
                (0, q.jsx)(R, {
                  children: (0, q.jsx)(Kl, {
                    bShowFutureViewOnly: this.BShowFutureView(),
                    bShowUpdatesOnly: this.BShowUpdatesOnly(),
                    fnOnEventClick: this.OnEventClicked,
                    fnToggleSeeFuture: this.ToggleFutureView,
                    fnResetFilters: s,
                    nVisibleHeight: this.state.nVisibleHeight,
                    nScrollTop: this.state.nScrollTop,
                    nDisappearingHeaderVisibleHeight: o,
                    bUserIsLoggedIn: !!(
                      this.state.bUserIsLoggedIn && U.accountid
                    ),
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  }
};
(F([W], $.prototype, `OnResize`, null),
  F([W], $.prototype, `OnScroll`, null),
  F([W], $.prototype, `MobileNavOpenSettings`, null),
  F([W], $.prototype, `ToggleControlBarCollapsed`, null),
  F([W], $.prototype, `OnControlBarChange`, null),
  F([W], $.prototype, `CloseEventModal`, null),
  F([W], $.prototype, `OnEventClicked`, null),
  F([W], $.prototype, `ToggleFutureView`, null),
  F([W], $.prototype, `ResetAllFilters`, null),
  ($ = Ll = F([f], $)));
var Ul = c(function (e) {
  return (0, q.jsx)($, { ...e, tracker: kn() });
});
function Wl(e) {
  let t = m(() => v()),
    [n, r, i, a, o, s, c, l] = m(() => [
      t.GetCollectionMetaData()?.clan_event_gid || void 0,
      t.GetCollectionID(),
      t.BHasCollectionMetaData(),
      t.BIsSaleCalendar(),
      t.GetSaleID(),
      t.BIsSingleSourceCalendar(),
      t.BIsSingleAppCalendar() ? t.GetSingleAppID() : void 0,
      t.BIsSingleGroupCalendar() ? t.GetSingleGroupID() : void 0,
    ]),
    [u, d] = K.useState(!1),
    f = B(V.LANGUAGE);
  if (
    (K.useEffect(() => {
      i &&
        n &&
        !k.GetClanEventModel(n) &&
        (d(!0),
        (async () => {
          let e = t.GetCollectionMetaData(),
            n = P.InitFromClanID(e.clanid, V.EUNIVERSE);
          (await k.LoadPartnerEventFromClanEventGIDAndClanSteamID(
            n,
            e.clan_event_gid,
            0,
          ),
            d(!1));
        })());
    }, [t, i, n]),
    r)
  ) {
    let t;
    return (
      i && !u && (t = k.GetClanEventModel(n)),
      (0, q.jsx)(Gl, { ...e, collectionID: r, eventModel: t, language: f })
    );
  }
  if (a) {
    let t = ml(o, e.bLargeMode);
    if (!t) return null;
    let n = j(la, ft);
    return (0, q.jsx)(`div`, {
      style: { transform: `translateY(${e.nTopOffset}px)` },
      className: n,
      children: t,
    });
  }
  if (s) {
    let t = j(
      la,
      ft,
      e.bLargeMode && `mnYmd2J72yY-`,
      e.bLargeMode && `iBRlCPA5wLk-`,
    );
    return (0, q.jsx)(`div`, {
      style: { transform: `translateY(${e.nTopOffset}px)` },
      className: t,
      children: (0, q.jsx)(Ke, { appId: c, clanId: l, bShowRSSFeed: !0 }),
    });
  }
  return null;
}
function Gl(e) {
  let { collectionID: t, language: n, eventModel: r } = e,
    i = en(r, `capsule`, n, g.capsule_main),
    a = nn(r) ?? void 0,
    o = fl(t, e.bLargeMode, i, a);
  if (!o) return null;
  let s = j(la, ft);
  return (0, q.jsx)(`div`, {
    style: { transform: `translateY(${e.nTopOffset}px)` },
    className: s,
    children: o,
  });
}
var Kl = class extends K.Component {
  GetCurrentSectionLayout() {
    let e = 0;
    return v()
      .GetCalendarSections(this.props.bShowFutureViewOnly)
      .map((t) => {
        let n = Math.max(e, t.nTopOffset);
        return ((e = n + t.nRenderedHeight), { section: t, nTopOfSection: n });
      });
  }
  GetMergeEventsType() {
    let e = v(),
      t = e.GetCollectionID();
    return e.BIsSingleSourceCalendar() || t === _.Steam
      ? `none`
      : e.BIsShowingFeaturedFeed()
        ? `full`
        : t
          ? `samesource`
          : `full`;
  }
  GetCuratorSuggestionSettings(e) {
    let t = 1e3;
    if (U.accountid && pe()) {
      if (e.BIsGlobalCalendar() && !this.props.bShowFutureViewOnly) {
        if (e.m_visibilityStore.BIsGameSourceAllowed(S.k_ECurator))
          return { nInlineOffset: t, bInlineDismissable: !0, bShowAtEnd: !0 };
      } else if (e.GetCollectionID() === _.Press)
        return { nInlineOffset: t, bInlineDismissable: !1, bShowAtEnd: !1 };
    }
    return { nInlineOffset: void 0, bInlineDismissable: !1, bShowAtEnd: !1 };
  }
  render() {
    let e = v(),
      {
        bShowFutureViewOnly: t,
        bShowUpdatesOnly: n,
        fnOnEventClick: r,
        fnToggleSeeFuture: i,
        fnResetFilters: a,
        nScrollTop: o,
        nDisappearingHeaderVisibleHeight: s,
      } = this.props,
      c = e.GetCalendarSections(t);
    if (c.length == 0) return null;
    let l = wt(),
      u = e.m_visibilityStore.BAreAllEventsHidden(),
      d = o,
      f = !0,
      p = this.GetCuratorSuggestionSettings(e),
      m,
      h = u
        ? []
        : this.GetCurrentSectionLayout().map(
            ({ section: e, nTopOfSection: n }, a) => {
              let {
                  strId: o,
                  strSectionLabel: s,
                  rtSectionStart: c,
                  rtSectionEnd: u,
                  bIsFutureSection: h,
                  nRenderedHeight: g,
                } = e,
                _ = n < d,
                v = j(Pa, f && `SqY7DmeCIqo-`);
              g > 0 &&
                ((f = !f),
                p.nInlineOffset !== void 0 &&
                  n >= p.nInlineOffset &&
                  m === void 0 &&
                  (m = a));
              let y = !t && h;
              return (0, q.jsx)(
                tn,
                {
                  className: _o,
                  placeholderHeight: g,
                  rootMargin: `100% 0px 100% 0px`,
                  children: (0, q.jsx)(Xl, {
                    bRenderStickyHeader: _,
                    strSectionLabel: s,
                    rtSectionStart: c,
                    rtSectionEnd: u,
                    strSectionClassname: v,
                    bUseHorizontalLayout: y,
                    fnOnSeeFutureClick: i,
                    bShowEarliestFirst: t || y,
                    section: e,
                    fnOnEventClick: r,
                    bSuppressHoverEffects: l,
                    strMergeEvents: this.GetMergeEventsType(),
                  }),
                },
                o,
              );
            },
          );
    (m !== void 0 &&
      h.splice(
        m,
        0,
        (0, q.jsx)(
          rl,
          { bCanDismiss: p.bInlineDismissable },
          `CuratorSuggestions`,
        ),
      ),
      e.GetCollectionID() === _.Press &&
        h.splice(0, 0, (0, q.jsx)(Il, {}, `LanguageFeedRow`)));
    let g = c[0].rtSectionStart,
      y = v().GetCurrentlyLoadedEventCount(0, g),
      b = v().GetCurrentlyLoadedEventCount(g),
      x =
        y &&
        (y.nCount
          ? `#EventCalendar_NoMorePastEvents`
          : `#EventCalendar_NoPastEvents`),
      S =
        a &&
        (0, q.jsx)(
          Or,
          {
            toolTipContent: L(`#EventCalendar_ResetFilters_ttip`),
            className: j(`_1-we0jg7skM-`, `j0zYlXH6S-E-`),
            onClick: a,
            children: L(`#EventCalendar_ResetFiltersButton`),
          },
          `link-back`,
        );
    u && this.props.fnResetFilters
      ? (x = `#EventCalendar_EmptyCalendar`)
      : t
        ? ((x =
            b &&
            (b.nCount
              ? `#EventCalendar_NoMoreFutureEvents`
              : `#EventCalendar_NoFutureEvents`)),
          (S =
            y &&
            (0, q.jsxs)(
              `div`,
              {
                className: `_1-we0jg7skM-`,
                onClick: i,
                children: [
                  L(`#EventCalendar_PastEventsLink`),
                  (0, q.jsx)(`span`, {
                    className: `RdMlBc0C1Rk-`,
                    children: y.nCount + (y.bIsComplete ? `` : `+`),
                  }),
                ],
              },
              `link-back`,
            )))
        : n &&
          (x =
            y &&
            (y.nCount
              ? `#EventCalendar_NoMorePastUpdates`
              : `#EventCalendar_NoPastUpdates`));
    let ee = null;
    return (
      (u || e.BHitEventHorizon(t ? `forward` : `backward`)) &&
        (ee = (0, q.jsxs)(K.Fragment, {
          children: [
            (0, q.jsx)(
              `div`,
              {
                className: j(Ga, La),
                children: (0, q.jsxs)(`div`, {
                  className: void 0,
                  children: [` `, L(x), ` `],
                }),
              },
              `no-more-events`,
            ),
            p.bShowAtEnd &&
              (0, q.jsx)(rl, { bCanDismiss: !1 }, `CuratorSuggestions`),
            S,
          ],
        })),
      (0, q.jsx)(`div`, {
        className: ja,
        style: { transform: `translateY(${s - 1}px)` },
        children: (0, q.jsxs)(`div`, {
          className: Na,
          children: [
            n &&
              (0, q.jsx)(`div`, {
                className: `u4e7qyvvG4Q-`,
                children: L(`#EventCalendar_UpdatesViewHeader`),
              }),
            h,
            ee,
          ],
        }),
      })
    );
  }
};
Kl = F([f], Kl);
var ql = class extends K.Component {
  render() {
    let e = this.props.rgCalendarItems[0].start_time,
      t = v().GetCurrentlyLoadedEventCount(e);
    return this.props.rgCalendarItems.length <= 1
      ? null
      : (0, q.jsxs)(
          `div`,
          {
            className: Ka,
            onClick: this.props.fnOnSeeFutureClick,
            children: [
              L(`#EventCalendar_FutureEventsLink`),
              (0, q.jsx)(`span`, {
                className: Ha,
                children: t.nCount + (t.bIsComplete ? `` : `+`),
              }),
            ],
          },
          `see-all-link`,
        );
  }
};
ql = F([f], ql);
var Jl = class extends K.Component {
  render() {
    let {
      rgCalendarItems: e,
      fnOnEventClick: t,
      fnOnSeeFutureClick: n,
      bSuppressHoverEffects: r,
    } = this.props;
    return !e || e.length == 0
      ? null
      : (0, q.jsx)(`div`, {
          className: La,
          children: (0, q.jsxs)(`div`, {
            className: j(Ua, `HorizontalTileCtn`),
            children: [
              (0, q.jsx)(A, {
                className: Wa,
                "flow-children": `row`,
                children: e.map((n) =>
                  (0, q.jsx)(
                    qc,
                    {
                      calendarEvent: n,
                      partnerEventStore: k,
                      fnOnClicked: t,
                      bSuppressHoverEffects: r,
                      mode: e.length > 1 ? `upcoming` : `wide`,
                      bHideGameTitle:
                        v().BIsSingleSourceCalendar() &&
                        v().BEventMatchCalendarSingleSource(n),
                    },
                    `ht-` + n.unique_id,
                  ),
                ),
              }),
              (0, q.jsx)(ql, { rgCalendarItems: e, fnOnSeeFutureClick: n }),
            ],
          }),
        });
  }
};
Jl = F([f], Jl);
var Yl = f((e) => {
    let { calendarItem: t, bSuppressHoverEffects: n } = e,
      r = k.GetClanEventModel(t.unique_id);
    return r
      ? (0, q.jsx)(`div`, {
          className: Ra,
          children: (0, q.jsx)(Lc, {
            eventModel: r,
            calendarEvent: t,
            bSuppressHoverEffects: n,
          }),
        })
      : null;
  }),
  Xl = (Rl = class extends K.Component {
    m_ref = K.createRef();
    rtSectionStart = void 0;
    rtSectionEnd = void 0;
    constructor(e) {
      (super(e),
        d(this),
        (this.rtSectionStart = e.rtSectionStart),
        (this.rtSectionEnd = e.rtSectionEnd));
    }
    componentDidMount() {
      this.UpdatePositioning();
    }
    componentDidUpdate() {
      (this.UpdatePositioning(),
        (this.rtSectionStart = this.props.rtSectionStart),
        (this.rtSectionEnd = this.props.rtSectionEnd));
    }
    UpdatePositioning() {
      this.m_ref.current &&
        u(() => {
          let { section: e } = this.props,
            t = this.m_ref.current.getBoundingClientRect().height;
          e.nRenderedHeight != t && (e.nRenderedHeight = t);
          let n = this.m_ref.current.offsetTop;
          e.nTopOffset != n && (e.nTopOffset = n);
        });
    }
    get cachedCalendarItems() {
      return v().GetCalendarItemsInTimeRange(
        h(() => this.rtSectionStart),
        h(() => this.rtSectionEnd),
      );
    }
    GetCarouselGroupTitle(e) {
      return e.BIsShowingFeaturedFeed()
        ? L(`#EventCalendar_GroupTitle_FeaturedCurators`)
        : e.BIsGlobalCalendar()
          ? L(`#EventCalendar_GroupTitle_Curators`)
          : ``;
    }
    GenerateKeyFromItem(e, t) {
      return t.GetSource() & C.k_eSteam
        ? t.clanid
        : !t.appid && e === `full`
          ? 1
          : t.clanid;
    }
    static IsTimestampInRange(e, t, n) {
      return !!e && t < e && e <= n;
    }
    GetTimestampEvents(e) {
      return [];
    }
    AddTimestampEventsInInterval(e, t, n, r) {
      for (let i of e)
        Rl.IsTimestampInRange(i.rtTime, t, n) && r.push(i.component);
    }
    RenderEventList(e) {
      let {
          fnOnEventClick: t,
          bSuppressHoverEffects: n,
          strMergeEvents: r,
        } = this.props,
        i = v(),
        a = null;
      if (r !== `none`) {
        a = new Map();
        for (let t of e) {
          let e = this.GenerateKeyFromItem(r, t),
            n = a.get(e);
          if (n) n.push(t);
          else {
            let n = [];
            (n.push(t), a.set(e, n));
          }
        }
      }
      let o = [],
        s = [],
        c = r === `full` ? s : o,
        l = this.GetTimestampEvents(i),
        u = this.props.bShowEarliestFirst
          ? this.props.rtSectionStart
          : this.props.rtSectionEnd;
      for (let s of e) {
        let e = o;
        if (a) {
          let o = this.GenerateKeyFromItem(r, s),
            l = a.get(o);
          if (!l) continue;
          if ((o === 1 && (e = c), l.length >= 3)) {
            let r = o === 1 ? this.GetCarouselGroupTitle(i) : ``,
              c = !l.find((e) => e.clanid != s.clanid);
            (l.sort((e, t) =>
              t.score == e.score
                ? t.start_time - e.start_time
                : t.score - e.score,
            ),
              e.push(
                (0, q.jsx)(
                  `div`,
                  {
                    className: Fa,
                    children: (0, q.jsx)(`div`, {
                      className: Ia,
                      children: (0, q.jsx)(
                        Tl,
                        {
                          rgCalendarItems: l,
                          bSuppressHoverEffects: n,
                          fnOnEventClick: t,
                          bHideGameTitle: c,
                          strMultipleSourceTitle: r,
                        },
                        s.unique_id,
                      ),
                    }),
                  },
                  s.unique_id,
                ),
              ),
              a.delete(o));
            continue;
          }
        }
        (e === o &&
          (this.AddTimestampEventsInInterval(
            l,
            Math.min(u, s.start_time),
            Math.max(u, s.start_time),
            o,
          ),
          (u = s.start_time)),
          e.push(
            (0, q.jsx)(
              `div`,
              {
                className: La,
                children: (0, q.jsx)(qc, {
                  calendarEvent: s,
                  partnerEventStore: k,
                  mode: `wide`,
                  fnOnClicked: t,
                  bSuppressHoverEffects: n,
                  bHideGameTitle:
                    i.BIsSingleSourceCalendar() &&
                    i.BEventMatchCalendarSingleSource(s),
                }),
              },
              s.unique_id,
            ),
          ));
      }
      return (
        this.props.bShowEarliestFirst
          ? this.AddTimestampEventsInInterval(l, u, this.props.rtSectionEnd, o)
          : this.AddTimestampEventsInInterval(
              l,
              this.props.rtSectionStart,
              u,
              o,
            ),
        o.push(...s),
        o
      );
    }
    render() {
      let {
          bRenderStickyHeader: e,
          strSectionLabel: t,
          strSectionClassname: n,
          bUseHorizontalLayout: r,
          fnOnSeeFutureClick: i,
          bShowEarliestFirst: a,
          fnOnEventClick: o,
          bSuppressHoverEffects: s,
        } = this.props,
        { rgCalendarItems: c, bIsComplete: l } = this.cachedCalendarItems;
      if (c.length == 0 && l)
        return (0, q.jsx)(`div`, { ref: this.m_ref, className: n });
      c.length && a && (c = c.slice().reverse());
      let u = null;
      c.length > 0 &&
        (u = (0, q.jsx)(`div`, {
          className: j(za, La, e && `_2QBIePCAKoY-`),
          children: (0, q.jsxs)(`div`, {
            className: Ba,
            children: [
              (0, q.jsx)(`span`, { children: t }),
              (0, q.jsx)(`div`, { className: Va }),
              r &&
                c.length > 3 &&
                (0, q.jsxs)(`div`, {
                  className: `QgcGWkkF5Is-`,
                  onClick: i,
                  children: [
                    L(`#EventCalendar_FutureEventsLink`),
                    (0, q.jsx)(`span`, {
                      className: `RdMlBc0C1Rk-`,
                      children: c.length + (l ? `` : `+`),
                    }),
                  ],
                }),
            ],
          }),
        }));
      let d =
          !Rt.bRequireAllEventsLoadedInTimeBlock || l || (r && c.length >= 3),
        f = null;
      return (
        d &&
          (f = r
            ? (0, q.jsx)(Jl, {
                rgCalendarItems: c.slice(0, 3),
                fnOnEventClick: o,
                fnOnSeeFutureClick: i,
                bSuppressHoverEffects: s,
              })
            : this.RenderEventList(c)),
        (0, q.jsxs)(`div`, {
          ref: this.m_ref,
          className: n,
          children: [
            u,
            f,
            !l &&
              !r &&
              (0, q.jsx)(Zl, {
                bShowEarliestFirst: this.props.bShowEarliestFirst,
              }),
          ],
        })
      );
    }
  });
(F([n], Xl.prototype, `rtSectionStart`, void 0),
  F([n], Xl.prototype, `rtSectionEnd`, void 0),
  F([i], Xl.prototype, `cachedCalendarItems`, null),
  (Xl = Rl = F([f], Xl)));
var Zl = (e) => {
    let t = v().GetTimeEdgeForDirection(
      e.bShowEarliestFirst ? `forward` : `backward`,
      void 0,
    );
    return (0, q.jsxs)(`div`, {
      className: Ma,
      children: [
        (0, q.jsx)(O, { size: `xlarge`, position: `center` }),
        t &&
          (0, q.jsxs)(K.Fragment, {
            children: [
              (0, q.jsx)(`div`, {
                className: `bCGiT56jHnw-`,
                children: L(
                  `#EventCalendar_LoadEventsProgress`,
                  qn(Number(v().GetNumEventsLoaded())),
                  Ln(t),
                ),
              }),
              (0, q.jsx)(`div`, {
                className: `_1x0FeYlLIa8-`,
                children: L(`#EventCalendar_LoadEventsFilters`),
              }),
            ],
          }),
      ],
    });
  },
  Ql = (e) => {
    let { elDialogElement: t, fnShowLogonDialog: n } = Ft();
    return (0, q.jsxs)(`div`, {
      className: j(Aa, !e.bLargeMode && `ZyWFq6-rPTk-`),
      style: { transform: `translateY(${e.nTopOffset}px)` },
      children: [
        (0, q.jsxs)(`div`, {
          className: mo,
          children: [
            (0, q.jsx)(`div`, {
              className: ho,
              children: L(`#EventCalendar_SignIn_Title`),
            }),
            (0, q.jsx)(`button`, {
              onClick: n,
              className: go,
              children: L(`#Login_SignIn`),
            }),
            (0, q.jsx)(`div`, {
              className: po,
              children: L(`#EventCalendar_SignIn_Text`),
            }),
          ],
        }),
        t,
      ],
    });
  },
  $l = (e) => {
    let [t] = jt(`byday`, !1),
      [n] = jt(`upcoming`, !1);
    return Dr(V.LANGUAGE)
      ? (0, q.jsx)(Tt, {
          bSalePage: !0,
          children: (0, q.jsxs)(o, {
            children: [
              (0, q.jsx)(a, {
                exact: !0,
                path: N.EventViewByApp(
                  `:appid(\\d+)`,
                  `:event_gid(\\d+)`,
                  `:vanity?`,
                ),
                render: (e) =>
                  (0, q.jsx)(
                    Ei,
                    {
                      ...e,
                      appid:
                        e.match.params.appid &&
                        Number.parseInt(e.match.params.appid),
                      event_gid: e.match.params.event_gid,
                      bInfiniteScroll: e.match.params.viewtype == `inline`,
                    },
                    `detailview_` + e.match.params.event_gid,
                  ),
              }),
              (0, q.jsx)(a, {
                exact: !0,
                path: N.EventViewByGroup(
                  `:groupid(\\d+)`,
                  `:event_gid(\\d+)`,
                  `:vanity?`,
                ),
                render: (e) =>
                  (0, q.jsx)(
                    Ei,
                    {
                      ...e,
                      clansteamid: new P(e.match.params.groupid),
                      event_gid: e.match.params.event_gid,
                      bInfiniteScroll: e.match.params.viewtype == `inline`,
                    },
                    `detailview_` + e.match.params.event_gid,
                  ),
              }),
              (0, q.jsx)(a, {
                exact: !0,
                path: N.OldAnnouncementViewByApp(
                  `:appid(\\d+)`,
                  `:announcement_gid(\\d+)`,
                  `:vanity?`,
                ),
                render: (e) =>
                  (0, q.jsx)(
                    Ei,
                    {
                      ...e,
                      appid:
                        e.match.params.appid &&
                        Number.parseInt(e.match.params.appid),
                      announcement_gid: e.match.params.announcement_gid,
                      bInfiniteScroll: e.match.params.viewtype == `old_inline`,
                    },
                    `detailoldview_` + e.match.params.announcement_gid,
                  ),
              }),
              (0, q.jsx)(a, {
                exact: !0,
                path: N.OldAnnouncementViewByGroup(
                  `:groupid(\\d+)`,
                  `:announcement_gid(\\d+)`,
                  `:vanity?`,
                ),
                render: (e) =>
                  (0, q.jsx)(
                    Ei,
                    {
                      ...e,
                      clansteamid: new P(e.match.params.groupid),
                      announcement_gid: e.match.params.announcement_gid,
                      bInfiniteScroll: e.match.params.viewtype == `old_inline`,
                    },
                    `detailoldview_` + e.match.params.announcement_gid,
                  ),
              }),
              (0, q.jsx)(a, {
                exact: !0,
                path: N.NewsHubApp(`:appid(\\d+)`, `:vanity?`),
                render: (e) =>
                  (0, q.jsx)(
                    Ul,
                    {
                      ...e,
                      filter_to_appids: [Number(e.match.params.appid)],
                      section_by_day: t,
                    },
                    e.match.params.appid,
                  ),
              }),
              (0, q.jsx)(a, {
                exact: !0,
                path: N.NewsHubGroup(`:groupid(\\d+)`, `:vanity?`),
                render: (e) =>
                  (0, q.jsx)(
                    Ul,
                    {
                      ...e,
                      filter_to_clanids: [Number(e.match.params.groupid)],
                      section_by_day: t,
                    },
                    e.match.params.groupid,
                  ),
              }),
              (0, q.jsx)(a, {
                exact: !0,
                path: N.NewsHubCollection(`:collectionid`, `:vanity?`),
                render: (e) =>
                  (0, q.jsx)(
                    Ul,
                    {
                      initialFilters: eu(e.match.params.collectionid),
                      ...e,
                      filter_to_collection: e.match.params.collectionid,
                      section_by_day: t,
                    },
                    e.match.params.collectionid,
                  ),
              }),
              (0, q.jsx)(a, {
                exact: !0,
                path: N.NewsHubSale(`:saleid`, `:vanity?`),
                render: (e) =>
                  (0, q.jsx)(
                    Ul,
                    {
                      ...e,
                      filter_to_saleid: e.match.params.saleid,
                      section_by_day: t || n,
                    },
                    e.match.params.saleid,
                  ),
              }),
              (0, q.jsx)(a, {
                exact: !0,
                path: N.NewsHubContentHub(
                  `:hubtype`,
                  `:category_or_language?`,
                  `:tag_name?`,
                ),
                render: (e) =>
                  (0, q.jsx)(
                    Ul,
                    {
                      ...e,
                      filter_to_contenthub_hubtype: e.match.params.hubtype,
                      filter_to_contenthub_category_or_language:
                        e.match.params.category_or_language,
                      filter_to_contenthub_tag_name: e.match.params.tag_name,
                      section_by_day: t,
                    },
                    e.match.params.hubtype +
                      `_` +
                      e.match.params.category_or_language +
                      `_` +
                      e.match.params.tag_name,
                  ),
              }),
              (0, q.jsx)(a, {
                exact: !0,
                path: N.NewsHub(),
                render: (e) =>
                  (0, q.jsx)(Ul, { ...e, section_by_day: t }, `global`),
              }),
            ],
          }),
        })
      : null;
  };
function eu(e) {
  if (e === `steam` && new URLSearchParams().get(`branch`) !== `beta`)
    return { rgHiddenClans: [_e] };
}
export { $l as default, Wr as i, qr as n, Jr as r, Kr as t };
