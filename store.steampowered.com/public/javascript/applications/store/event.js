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
  D as fe,
  Er as pe,
  O as w,
  Or as me,
  Tr as he,
  a as ge,
} from "./saletags.js";
import { u as _e } from "./claninfo.js";
import {
  $ as ve,
  F as ye,
  G as be,
  L as xe,
  R as T,
  o as Se,
} from "./partnerevent.js";
import {
  $ as Ce,
  A as we,
  At as Te,
  B as Ee,
  C as De,
  D as Oe,
  F as ke,
  G as Ae,
  I as je,
  J as Me,
  K as Ne,
  N as Pe,
  Ot as Fe,
  P as Ie,
  Q as Le,
  R as Re,
  S as ze,
  U as Be,
  V as Ve,
  W as He,
  X as Ue,
  Y as We,
  Z as Ge,
  _ as Ke,
  a as qe,
  at as Je,
  d as Ye,
  f as Xe,
  ft as Ze,
  g as Qe,
  ht as $e,
  i as et,
  it as tt,
  j as nt,
  kt as rt,
  l as it,
  lt as at,
  m as ot,
  nt as st,
  p as ct,
  pt as lt,
  q as ut,
  r as dt,
  rt as ft,
  s as pt,
  st as mt,
  tt as ht,
  v as gt,
  vt as _t,
  x as vt,
  y as yt,
} from "./apppartnereventspage.js";
import {
  a as bt,
  c as xt,
  n as E,
  r as St,
  s as Ct,
  t as wt,
} from "./eventlink.js";
import "./modals.js";
import { i as D } from "./ostype.js";
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
  $n as pn,
  Ar as A,
  Au as mn,
  B as hn,
  Cb as gn,
  Dn as _n,
  Dr as vn,
  En as yn,
  Fu as bn,
  Gb as xn,
  Hb as Sn,
  Hy as Cn,
  Ib as wn,
  Iu as j,
  Iy as M,
  Jb as Tn,
  Jc as N,
  Jy as En,
  Ko as Dn,
  Kx as On,
  L as kn,
  Ma as An,
  Mb as P,
  Mn as jn,
  Nb as Mn,
  Nn,
  Ob as Pn,
  Oi as Fn,
  Qs as In,
  Qy as Ln,
  Rr as Rn,
  Rv as zn,
  Rx as F,
  Sb as Bn,
  Sc as I,
  Uc as Vn,
  Uo as Hn,
  Uy as L,
  Vl as R,
  Vo as Un,
  Vs as Wn,
  Xi as Gn,
  Xo as Kn,
  Zn as qn,
  Zy as Jn,
  ax as z,
  bS as Yn,
  br as Xn,
  bt as B,
  cr as Zn,
  cs as Qn,
  dr as $n,
  fl as er,
  gu as tr,
  ir as nr,
  kc as V,
  kr as rr,
  kv as ir,
  lS as ar,
  mS as H,
  ml as or,
  nl as sr,
  or as cr,
  pb as lr,
  pc as ur,
  pl as dr,
  po as fr,
  qb as pr,
  qx as mr,
  rr as hr,
  rx as U,
  so as gr,
  sr as _r,
  t as vr,
  tb as yr,
  uS as br,
  ub as xr,
  us as Sr,
  vd as Cr,
  wv as wr,
  xl as Tr,
  xr as Er,
  yu as Dr,
  zb as Or,
  zr as kr,
  zy as Ar,
} from "./main.js";
import { n as jr, r as Mr } from "./display.js";
import { n as Nr, r as Pr, t as W } from "./clanstore.js";
import { t as Fr } from "./salebanner.js";
import { t as Ir } from "./eventinfinitescrollmodal.js";
import { r as Lr } from "./basicpartnereventrender.js";
import { n as Rr, r as zr, t as Br } from "./breadcrumbs.js";
var G = e(s(), 1),
  K = l();
function Vr(e) {
  let { events: t, clanAccountID: n, onViewAll: r, children: i } = e,
    { data: a } = _e(n);
  return !t.length || !a
    ? null
    : (0, K.jsx)(N, {
        children: (0, K.jsxs)(`div`, {
          className: I(an, `OtherEventsCtn`),
          children: [
            (0, K.jsxs)(`div`, {
              className: Vt,
              children: [
                (0, K.jsx)(`div`, {
                  className: I(Ht, `EventSectionTitle`),
                  children: En(`#EventBrowse_MoreEventsTitle`, a.group_name),
                }),
                (0, K.jsx)(`div`, { className: Wt, children: `\xA0` }),
                r
                  ? (0, K.jsx)(V, {
                      focusable: !0,
                      className: Kt,
                      onActivate: r,
                      children: L(`#EventBrowse_MoreEventsBtn`),
                    })
                  : (0, K.jsx)(St, {
                      eventModel: t[0],
                      route: E.k_eViewWebSiteHub,
                      className: Kt,
                      children: L(`#EventBrowse_MoreEventsBtn`),
                    }),
              ],
            }),
            (0, K.jsx)(V, {
              className: on,
              "flow-children": `row`,
              navEntryPreferPosition: dr.PREFERRED_CHILD,
              children: t.map((e) =>
                (0, K.jsx)(b, { event: e }, e.AnnouncementGID),
              ),
            }),
            i,
          ],
        }),
      });
}
var Hr = {};
Hr.english = () =>
  Bn(() => import(`./partnerevents_english.js`), [], import.meta.url);
async function Ur(e) {
  if (Hr[e]) return await Hr[e]();
}
var Wr = gn(Ur);
function Gr(e) {
  let { appid: t } = e,
    { data: n } = ir(t ? { appid: t } : void 0);
  return !t || !xn.logged_in || n?.type != 12
    ? null
    : (0, K.jsx)(Kr, { appid: t });
}
function Kr(e) {
  return me(e.appid) === !1
    ? (0, K.jsxs)(`div`, {
        className: st,
        children: [
          (0, K.jsx)(`span`, {
            className: tt,
            children: Wr.Localize(`#PartnerEvents_PlaytestOnly_Header`),
          }),
          (0, K.jsx)(`span`, {
            className: ft,
            children: Wr.Localize(`#PartnerEvents_PlaytestOnly_Detail`),
          }),
        ],
      })
    : null;
}
var qr = f((e) => {
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
      { data: l } = zn(t.appid ? { appid: t.appid } : void 0),
      { data: u } = _e(t.clanSteamID.GetAccountID()),
      d = t.BIsImageSafeForAllAges(`background`, n, {
        bAppHasAgeSafeScreenshots: (l?.all_ages_screenshots?.length ?? 0) > 0,
        clanInfo: u ?? void 0,
      }),
      f = `lang_` + br(n),
      p = !!c && t.BImageNeedScreenshotFallback(`background`, n);
    return (0, K.jsxs)(V, {
      scrollIntoViewType: or.NoTransformSparseContent,
      className: I(
        Le,
        f,
        zt,
        d ? vt : ze,
        !c && `u0Scnt9OeIA-`,
        p && `udKyBXdwthE-`,
      ),
      children: [
        r,
        i,
        (0, K.jsx)(Gr, { appid: t.appid }),
        (0, K.jsx)(Jr, { strImageURL: c }),
        (0, K.jsx)(Yr, { strImageURL: c, body: a, postbody: o }),
        !!s && (0, K.jsx)(N, { children: s }),
      ],
    });
  }),
  Jr = (e) => {
    let { strImageURL: t } = e;
    return (0, K.jsxs)(`div`, {
      className: Ve,
      children: [
        (0, K.jsx)(`div`, {
          className: Ee,
          children:
            t &&
            (0, K.jsxs)(K.Fragment, {
              children: [
                (0, K.jsx)(`div`, {
                  className: `PJL3cTty0Ls-`,
                  style: {
                    backgroundColor: `rgb(37, 41, 46)`,
                    backgroundImage: `url(${t})`,
                  },
                }),
                (0, K.jsx)(`div`, {
                  className: `zU-vHqqb-eQ-`,
                  style: {
                    backgroundColor: `rgb(37, 41, 46)`,
                    backgroundImage: `url(${t})`,
                  },
                }),
              ],
            }),
        }),
        t && (0, K.jsx)(`div`, { className: `-wy0zbfIpXg-` }),
      ],
    });
  },
  Yr = (e) => {
    let { body: t, postbody: n, strImageURL: r } = e;
    return (0, K.jsxs)(`div`, {
      className: ke,
      children: [
        (0, K.jsx)(`div`, { className: Pe }),
        (0, K.jsxs)(`div`, {
          className: je,
          children: [
            (0, K.jsxs)(`div`, {
              className: Ie,
              children: [
                !!r &&
                  (0, K.jsx)(`div`, {
                    className: `V-UPj6R9FQU-`,
                    style: { backgroundImage: `url(${r})` },
                  }),
                (0, K.jsx)(N, { children: t }),
              ],
            }),
            !!n && (0, K.jsx)(N, { children: n }),
          ],
        }),
      ],
    });
  },
  q = e(p()),
  Xr = f((e) => {
    let {
        clanAccountID: t,
        gidAnnouncement: n,
        partnerEventStore: r,
        trackingLocation: i,
        bViewAllShowInfiniteScroll: a,
      } = e,
      o = M.InitFromClanID(t, U.EUNIVERSE),
      s = kn(),
      c = (0, G.useRef)(null),
      [l, u] = (0, G.useState)([]),
      [d, f] = (0, G.useState)(!0),
      [p, m] = (0, G.useState)(!1);
    return (
      (0, G.useEffect)(
        () => (
          (async () => {
            c.current && c.current(`PartnerEventRow Initializng new mount`);
            let e = q.default.CancelToken.source();
            c.current = e.cancel;
            let a = M.InitFromClanID(t, U.EUNIVERSE),
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
              On(e);
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
                t.length > 0 &&
                  (o
                    .filter((e) => e.BIsPartnerEvent())
                    .forEach((e) => s.RecordEventShown(e, i)),
                  (e = !0)),
                  e && s.Flush();
              }
            }
          })().catch((e) => {
            console.error(
              `PartnerEventRow: loading the adjacent events failed`,
              e,
            ),
              f(!1);
          }),
          () => {
            c.current && c.current(`PartnerEventRow: unmounting`);
          }
        ),
        [t, n, r, i, s],
      ),
      d
        ? (0, K.jsx)(O, { position: `center`, size: `medium` })
        : (0, K.jsx)(Vr, {
            events: l,
            clanAccountID: t,
            onViewAll: a ? () => m(!0) : void 0,
            children:
              !!(p && l.length) &&
              (0, K.jsx)(Ir, {
                appid: l[0].appid,
                clanSteamID: o,
                announcementGID: l[0].AnnouncementGID,
                closeModal: () => m(!1),
                partnerEventStore: r,
              }),
          })
    );
  }),
  J = class {
    constructor(e) {
      d(this),
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
        (this.m_lastUpdateTime = e ? Math.floor(Date.now() / 1e3) : 0);
    }
    reset(e) {
      (this.m_stats.library_overview_shown = e.library_overview_shown),
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
        (this.m_lastUpdateTime = Date.now() / 1e3);
    }
    m_stats = void 0;
    m_lastUpdateTime = void 0;
  };
P([n], J.prototype, `m_stats`, void 0),
  P([n], J.prototype, `m_lastUpdateTime`, void 0);
var Zr = 3600,
  Qr = class {
    m_mapPerEventStats = new Map();
    m_mapSummaryStats = new Map();
    m_bLoadedFromConfig = !1;
    constructor() {
      d(this);
    }
    LazyInit() {
      if (!this.m_bLoadedFromConfig) {
        let e = Tn(`trackingdatasummary`, `application_config`);
        this.ValidateStoreDefault(e) &&
          this.m_mapSummaryStats.set(e.clan_account_id, new J(e));
        let t = Tn(`trackingdataevents`, `application_config`);
        this.ValidateStoreDefaultList(t) &&
          t.forEach((e) => {
            let t = M.InitFromClanID(e.clan_account_id, U.EUNIVERSE),
              n = this.GetKey(t, e.event_gid);
            this.m_mapPerEventStats.set(n, new J(e));
          }),
          (this.m_bLoadedFromConfig = !0);
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
          this.m_mapPerEventStats.set(n, new J(null)),
        this.m_mapPerEventStats.get(n)
      );
    }
    GetTotalStats(e) {
      return (
        this.LazyInit(),
        this.m_mapSummaryStats.has(e.GetAccountID()) ||
          this.m_mapSummaryStats.set(e.GetAccountID(), new J(null)),
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
          return !i || i.m_stats == null || i.m_lastUpdateTime < r - Zr;
        });
      if (!i || i.length == 0) return !0;
      let a = Mn() + `actions/ajaxgetpartnereventsreport`,
        o = {
          sessionid: pr(),
          clan_account_id: e.GetAccountID(),
          gidlist: i.join(`,`),
        };
      try {
        let t = await q.default.get(a, {
          params: o,
          withCredentials: !0,
          cancelToken: n?.token,
        });
        return (
          u(() => {
            this.m_mapSummaryStats.set(e.GetAccountID(), new J(t.data.summary)),
              t.data.events_detail.forEach((t) => {
                let n = this.GetKey(e, t.event_gid);
                this.m_mapPerEventStats.has(n)
                  ? this.m_mapPerEventStats.get(n).reset(t)
                  : this.m_mapPerEventStats.set(n, new J(t));
              });
          }),
          !0
        );
      } catch (e) {
        let t = bn(e);
        console.error(`CPartnerEventReportingStore ` + t.strErrorMsg, t);
      }
      return !1;
    }
    BHasEventStats(e, t) {
      let n = M.InitFromClanID(e, U.EUNIVERSE),
        r = this.GetKey(n, t),
        i = this.m_mapPerEventStats.get(r);
      return !!(i && i.m_stats);
    }
  };
P([n], Qr.prototype, `m_mapPerEventStats`, void 0),
  P([n], Qr.prototype, `m_mapSummaryStats`, void 0),
  P([r], Qr.prototype, `LazyInit`, null);
var $r = new Qr();
function ei(e) {
  let { appid: t, creatorHome: n } = e;
  return (0, K.jsx)(`div`, {
    className: Ke,
    children: (0, K.jsxs)(`div`, {
      className: je,
      children: [t ? (0, K.jsx)(ti, { appid: t }) : null, n],
    }),
  });
}
function ti(e) {
  let { appid: t } = e,
    { data: n } = ir({ appid: t });
  if (!n) return null;
  let r = ce(n.type ?? 0);
  return (0, K.jsxs)(`div`, {
    className: yt,
    children: [
      (0, K.jsx)(`span`, {
        className: Ze,
        children: L(`#CreatorHome_ThisGame`),
      }),
      (0, K.jsx)(`div`, {
        className: I(gt, `AppSummaryWidgetCtn`),
        children: (0, K.jsx)(Et, {
          id: t,
          type: r,
          bPreferAssetWithoutOverride: !1,
        }),
      }),
    ],
  });
}
var ni = `hb8M4McjnY0-`,
  ri = `_5Oji4nFqXAc-`,
  ii = `xYo1g0NDhqo-`,
  ai = `A8oYb8l7LVE-`,
  oi = `uroGt4fECQw-`,
  si = `xjV-4UVwNKQ-`;
function ci(e) {
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
    : (0, K.jsxs)(`div`, {
        className: I(i ? ai : ni),
        children: [
          (0, K.jsxs)(`div`, {
            className: I(ri),
            children: [
              o,
              (0, K.jsxs)(`div`, {
                className: ii,
                children: [
                  (0, K.jsxs)(`div`, {
                    className: oi,
                    children: [
                      (0, K.jsx)(`span`, {
                        className: void 0,
                        children: L(
                          `#EventDashBoard_SummaryStats_TotalImpressions`,
                        ),
                      }),
                      (0, K.jsx)(`span`, { className: si, children: B(s) }),
                    ],
                  }),
                  (0, K.jsxs)(`div`, {
                    className: oi,
                    children: [
                      (0, K.jsx)(`span`, {
                        className: void 0,
                        children: L(`#EventDashBoard_SummaryStats_TotalViews`),
                      }),
                      (0, K.jsx)(`span`, { className: si, children: B(c) }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          !!(r && n) &&
            (0, K.jsxs)(`div`, {
              className: `g2M5qxpNbc0-`,
              children: [
                (0, K.jsx)(`div`, {
                  className: `_5uAuMCFB1mA-`,
                  children: L(`#EventDashBoard_ModerationQueueWarning`),
                }),
                (0, K.jsx)(`a`, {
                  href:
                    Sn.PARTNER_BASE_URL +
                    `doc/marketing/event_tools/moderation`,
                  children: L(`#EventDashBoard_Location_ModerationTitle`),
                }),
              ],
            }),
          a &&
            (0, K.jsxs)(`div`, {
              className: I(`_7gP-7IL8pWM-`),
              children: [
                r &&
                  (0, K.jsxs)(`div`, {
                    className: I(`txBIc-iUtwo-`, n && `TmD6LK-KQ2g-`),
                    children: [
                      (0, K.jsxs)(`div`, {
                        className: `M2UcssSbqTM-`,
                        children: [
                          (0, K.jsx)(`span`, {
                            children: L(`#EventDashBoard_Location_LibraryHome`),
                          }),
                          (0, K.jsxs)(`span`, {
                            className: `_1E0Xm5nvOIs-`,
                            children: [
                              `( `,
                              L(`#EventDashBoard_Location_WaitingModeraion`),
                              ` )`,
                            ],
                          }),
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `pPkrPZbyS28-`,
                        children: [
                          (0, K.jsx)(`span`, {
                            children: L(
                              `#EventDashBoard_Summary_LibraryHome_Shown`,
                            ),
                          }),
                          (0, K.jsx)(`span`, { children: B(l) }),
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `pPkrPZbyS28-`,
                        children: [
                          (0, K.jsx)(`span`, {
                            children: L(
                              `#EventDashBoard_Summary_LibraryHome_Read`,
                            ),
                          }),
                          (0, K.jsx)(`span`, { children: B(u) }),
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `M2UcssSbqTM-`,
                        children: [
                          (0, K.jsx)(`span`, {
                            children: L(
                              `#EventDashBoard_Location_LibraryDetail`,
                            ),
                          }),
                          (0, K.jsxs)(`span`, {
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
                        (0, K.jsxs)(K.Fragment, {
                          children: [
                            (0, K.jsxs)(`div`, {
                              className: `pPkrPZbyS28-`,
                              children: [
                                (0, K.jsx)(`span`, {
                                  children: L(
                                    `#EventDashBoard_Summary_AppDetailSpotlight_Shown`,
                                  ),
                                }),
                                (0, K.jsx)(`span`, { children: B(d) }),
                              ],
                            }),
                            (0, K.jsxs)(`div`, {
                              className: `pPkrPZbyS28-`,
                              children: [
                                (0, K.jsx)(`span`, {
                                  children: L(
                                    `#EventDashBoard_Summary_AppDetailSpotlight_Read`,
                                  ),
                                }),
                                (0, K.jsx)(`span`, { children: B(f) }),
                              ],
                            }),
                          ],
                        }),
                      (0, K.jsxs)(`div`, {
                        className: `pPkrPZbyS28-`,
                        children: [
                          (0, K.jsx)(`span`, {
                            children: L(
                              `#EventDashBoard_Summary_AppDetailActivity_Shown`,
                            ),
                          }),
                          (0, K.jsx)(`span`, { children: B(p) }),
                        ],
                      }),
                      (0, K.jsxs)(`div`, {
                        className: `pPkrPZbyS28-`,
                        children: [
                          (0, K.jsx)(`span`, {
                            children: L(
                              `#EventDashBoard_Summary_AppDetailActivity_Read`,
                            ),
                          }),
                          (0, K.jsx)(`span`, { children: B(m) }),
                        ],
                      }),
                    ],
                  }),
                (0, K.jsxs)(`div`, {
                  className: `mev6biKK3PY-`,
                  children: [
                    (0, K.jsx)(`div`, {
                      className: `M2UcssSbqTM-`,
                      children: (0, K.jsx)(`span`, {
                        children: L(`#EventDashBoard_Location_StoreDetail`),
                      }),
                    }),
                    (0, K.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, K.jsx)(`span`, {
                          children: L(
                            `#EventDashBoard_Summary_StoreAppPage_Shown`,
                          ),
                        }),
                        (0, K.jsx)(`span`, { children: B(h) }),
                      ],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, K.jsx)(`span`, {
                          children: L(
                            `#EventDashBoard_Summary_StoreAppPage_Read`,
                          ),
                        }),
                        (0, K.jsx)(`span`, { children: B(g) }),
                      ],
                    }),
                    (0, K.jsx)(`div`, {
                      className: `M2UcssSbqTM-`,
                      children: (0, K.jsx)(`span`, {
                        children: L(`#EventDashBoard_Location_CommunityDetail`),
                      }),
                    }),
                    (0, K.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, K.jsx)(`span`, {
                          children: L(
                            `#EventDashBoard_Summary_Community_Shown`,
                          ),
                        }),
                        (0, K.jsx)(`span`, { children: B(_) }),
                      ],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, K.jsx)(`span`, {
                          children: L(`#EventDashBoard_Summary_Community_Read`),
                        }),
                        (0, K.jsx)(`span`, { children: B(v) }),
                      ],
                    }),
                    (0, K.jsx)(`div`, {
                      className: `M2UcssSbqTM-`,
                      children: (0, K.jsx)(`span`, {
                        children: L(`#EventDashBoard_Location_NewsHubDetail`),
                      }),
                    }),
                    (0, K.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, K.jsx)(`span`, {
                          children: L(`#EventDashBoard_Summary_NewsHub_Shown`),
                        }),
                        (0, K.jsx)(`span`, { children: B(y) }),
                      ],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: `pPkrPZbyS28-`,
                      children: [
                        (0, K.jsx)(`span`, {
                          children: L(`#EventDashBoard_Summary_NewsHub_Read`),
                        }),
                        (0, K.jsx)(`span`, { children: B(b) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      });
}
var li = f(function (e) {
    let { event: t, bIsOGG: n, summary: r } = e,
      i = Lt();
    return (0, K.jsxs)(N, {
      children: [
        (0, K.jsxs)(`div`, {
          className: we,
          children: [
            (0, K.jsxs)(`div`, {
              className: nt,
              children: [
                (0, K.jsx)(`span`, { children: L(`#EventEditor_Comments`) }),
                (0, K.jsx)(`span`, { children: B(t.nCommentCount) }),
              ],
            }),
            (0, K.jsxs)(`div`, {
              className: nt,
              children: [
                (0, K.jsx)(`span`, { children: L(`#EventEditor_UpVotes`) }),
                (0, K.jsx)(`span`, {
                  children: t.nVotesUp ? B(t.nVotesUp) : 0,
                }),
              ],
            }),
            (0, K.jsxs)(`div`, {
              className: nt,
              children: [
                (0, K.jsx)(`span`, { children: L(`#EventEditor_DownVotes`) }),
                (0, K.jsx)(`span`, {
                  children: t.nVotesDown ? B(t.nVotesDown) : 0,
                }),
              ],
            }),
          ],
        }),
        r &&
          (0, K.jsxs)(`div`, {
            className: `W-arcmNojEY-`,
            children: [
              L(`#EventDashBoard_SummaryStats_Admin_Title`),
              (0, K.jsx)(ci, {
                summary: r,
                bIsAllowedInLibrary: n,
                bEventIsInModerationQueue: Se(t, i),
                bCompact: !0,
                bExpanded: !0,
              }),
            ],
          }),
      ],
    });
  }),
  ui = f((e) => {
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
      { data: f, isPending: p } = ir(l ? { appid: l } : void 0),
      { data: m, isPending: h } = _e(u.GetAccountID());
    return h || (l && p)
      ? null
      : (0, K.jsx)(`div`, {
          className: ut,
          children: (0, K.jsxs)(`div`, {
            className: Ce,
            children: [
              (m?.is_ogg ?? !!l)
                ? (0, K.jsx)(di, { appid: m?.appid || l })
                : (0, K.jsx)(fi, { clanSteamID: u }),
              (0, K.jsx)(ot, {
                event: t,
                className: He,
                nOverrideEndTime: i,
                nOverrideStartTime: r,
              }),
              a &&
                t.type !== 28 &&
                c < d &&
                (0, K.jsx)(`div`, { className: `qpxV4nQHXMc-`, children: a }),
              (0, K.jsxs)(`div`, {
                className: Me,
                children: [
                  (0, K.jsx)(`div`, {
                    className: at,
                    children: L(`#EventDisplay_RightColumnTitle_EventType`),
                  }),
                  (0, K.jsxs)(`div`, {
                    className: ht,
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
function di(e) {
  let { appid: t } = e;
  mr(t && t != 0, `Expected Appid In Game Info Section`);
  let { data: n, isPending: r } = ir(t ? { appid: t } : void 0);
  return (0, K.jsxs)(`div`, {
    className: Be,
    children: [
      (0, K.jsx)(`div`, {
        className: at,
        children: xe.some((e) => t === e)
          ? L(`#EventDisplay_RightColumnTitle_Blog`)
          : L(`#EventDisplay_RightColumnTitle_Game`),
      }),
      (0, K.jsx)(sn, {
        imageType: `header`,
        capsule: { id: t, type: `game` },
        bHidePriceIfOwned: !0,
        bHideStatusBanners: !0,
        bPreferAssetWithoutOverride: !1,
      }),
      (0, K.jsxs)(`div`, {
        className: I(Je),
        children: [
          n &&
            (0, K.jsx)(dn, {
              appid: t,
              bIsFree: !!n.is_free,
              bIsComingSoon: !!n.is_coming_soon,
              className: `T-oflieec2c-`,
            }),
          r && (0, K.jsx)(O, { size: `small`, position: `center` }),
        ],
      }),
    ],
  });
}
function fi(e) {
  let { clanSteamID: t } = e,
    n = t.GetAccountID(),
    { data: r } = _e(n),
    { data: i } = pe(n);
  if (!r) return null;
  let a = i
    ? he(i, `developer`)
    : Sn.COMMUNITY_BASE_URL +
      (r.vanity_url
        ? `groups/` + r.vanity_url
        : `gid/` + t.ConvertTo64BitString());
  return (0, K.jsxs)(`div`, {
    className: Be,
    children: [
      (0, K.jsx)(`div`, { className: at, children: r.group_name }),
      (0, K.jsx)(re, {
        href: Vn(a),
        children: (0, K.jsx)(`div`, {
          className: We,
          style: { backgroundImage: `url(${r.avatar_full_url})` },
        }),
      }),
    ],
  });
}
var pi = `i4n3Txt5Cl4-`,
  mi = `TGoEUZkVmh8-`;
function hi(e) {
  let { event: t, lang: n } = e,
    r = m(() => t.jsondata.meet_steam_groups),
    { data: i } = Te(t.clanSteamID.GetAccountID()),
    [a, o, s] = (0, G.useMemo)(() => {
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
    : (0, K.jsxs)(`div`, {
        className: I(mi, pi),
        children: [
          (0, K.jsx)(Zn, { children: `(VO) Meet Steam URLs` }),
          Array.from(a.keys()).map((e) => {
            let n = a.get(e);
            return (0, K.jsx)(
              `div`,
              {
                children: (0, K.jsxs)(`a`, {
                  href: `${U.STORE_BASE_URL}meetsteam/${t.GID}/${e}`,
                  target: `_blank`,
                  children: [
                    `Shows Sessions: `,
                    n.map((t) =>
                      (0, K.jsxs)(
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
            (0, K.jsx)(`div`, {
              children: (0, K.jsx)(`a`, {
                href: `${U.STORE_BASE_URL}meetsteam/${t.GID}`,
                target: `_blank`,
                children: `Show all public sessions`,
              }),
            }),
        ],
      });
}
var gi = G.lazy(() =>
    Bn(
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
  _i = f((e) => {
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
      { data: p, isPending: m } = ir(l ? { appid: l } : void 0),
      { data: h, isPending: g } = _e(u);
    if (
      (G.useEffect(() => {
        window.scrollTo(0, 0);
      }, [l, u]),
      !d && t.GetEventType() == 36)
    )
      return (0, K.jsx)(Ct, {
        eventModel: t,
        route: E.k_eStoreSalePage,
        bPopup: !1,
      });
    let _ = xt(t, E.k_eStoreNewsHub, `allowRelative`),
      v = xt(t, E.k_eStoreUsersNewsHub, `allowRelative`);
    if (!t.bLoaded || g || (l && m))
      return (0, K.jsx)(`div`, {
        className: vr,
        style: { height: `400px` },
        children: (0, K.jsx)(O, { size: `medium`, string: L(`#Loading`) }),
      });
    let y = p?.name || h?.group_name,
      b = t.GetDescriptionWithFallback(n);
    return (0, K.jsx)(qr, {
      event: t,
      lang: n,
      titleBar: c,
      banner: (0, K.jsx)(et, { appId: t.appid, clanId: u }),
      body: (0, K.jsxs)(N, {
        children: [
          (0, K.jsxs)(`div`, {
            className: Ne,
            children: [
              (0, K.jsx)(Br, {
                crumbs: [
                  { name: L(`#BreadCrumbs_AllEvents`), url: v },
                  ...(y
                    ? [{ name: L(`#BreadCrumbs_GameEvents`, y), url: _ }]
                    : []),
                ],
              }),
              (0, K.jsx)(`div`, {
                className: Ae,
                children: t.GetNameWithFallback(n),
              }),
              t.BHasSubTitle(n) &&
                (0, K.jsx)(`div`, {
                  className: `ay-K0NBOIuc-`,
                  children: t.GetSubTitle(n),
                }),
            ],
          }),
          !!t.BEventCanShowBroadcastWidget(d, f) &&
            (0, K.jsx)(`div`, {
              className: `hSFWQBRmqTY-`,
              children: (0, K.jsx)(G.Suspense, {
                fallback: null,
                children: (0, K.jsx)(gi, {
                  event: t,
                  bIsPreview: d,
                  accountIDs: d ? t.jsondata.broadcast_whitelist : void 0,
                }),
              }),
            }),
          (0, K.jsxs)(`div`, {
            className: I(Re, `EventDetail`),
            children: [
              (0, K.jsxs)(`div`, {
                className: Ge,
                children: [
                  (0, K.jsxs)(N, {
                    children: [
                      t.BHasTag(`steam_award_nomination_request`) &&
                        (0, K.jsx)(jr, { event: t, lang: n, previewMode: d }),
                      t.BHasTag(`steam_award_vote_request`) &&
                        (0, K.jsx)(Mr, {
                          appID: t.appid,
                          bIsEventActionEnabled: t.BIsEventActionEnabled(f),
                          voteCategories: t.GetSteamAwardNomineeCategories(),
                        }),
                    ],
                  }),
                  (0, K.jsx)(N, {
                    children: (0, K.jsxs)(`div`, {
                      className: I(`EventDetailsBody`, Ue),
                      children: [
                        (0, K.jsx)(it, {
                          text: b || ``,
                          showErrorInfo: d,
                          event: t,
                          languageOverride: n,
                        }),
                        !!(
                          t.jsondata.bSaleEnabled && t.jsondata.sale_vanity_id
                        ) &&
                          (0, K.jsxs)(`div`, {
                            className: I(`iMj27DR-pkY-`),
                            children: [
                              (0, K.jsx)(Fr, { gidEvent: t.GID }),
                              (0, K.jsx)(sr, {
                                className: I(`yYL-OrX9PtQ-`, `LinkButton`),
                                href: Vn(nn(t)),
                                children: L(`#Event_Button_VisitSalePage`),
                              }),
                            ],
                          }),
                        !!t.jsondata.associated_appid &&
                          (0, K.jsx)(Zt, {
                            id: t.jsondata.associated_appid,
                            inputType: `game`,
                            bApplyUserContentPref: !1,
                          }),
                      ],
                    }),
                  }),
                  (0, K.jsx)(N, { children: (0, K.jsx)(dt, { event: t }) }),
                  !!t.jsondata.read_more_link &&
                    (0, K.jsx)(`div`, {
                      className: I(`iMj27DR-pkY-`),
                      children: (0, K.jsx)(Xn, {
                        className: I(`yYL-OrX9PtQ-`),
                        href: t.jsondata.read_more_link,
                        children: L(`#EventEmail_Button_ClickForMoreDetails`),
                      }),
                    }),
                  (0, K.jsx)(`span`, { className: Gt }),
                  (0, K.jsxs)(N, {
                    children: [
                      !!t.appid && (0, K.jsx)(ln, { appid: t.appid }),
                      !!t.jsondata.sale_social_media_items &&
                        (0, K.jsx)(un, {
                          gidClanEvent: t.GID,
                          rgSocial: t.jsondata.sale_social_media_items,
                        }),
                    ],
                  }),
                ],
              }),
              (0, K.jsx)(N, {
                children: (0, K.jsx)(ui, {
                  event: t,
                  lang: n,
                  nOverrideStartTime: i,
                  nOverrideEndTime: a,
                  reminder: (0, K.jsx)(lt, { eventModel: t, lang: n }),
                  editorInfo: (0, K.jsx)(vi, {
                    event: t,
                    bIsOGG: h?.is_ogg ?? !!l,
                  }),
                  meetSteamInfo: (0, K.jsx)(hi, { event: t, lang: n }),
                }),
              }),
            ],
          }),
          (0, K.jsx)(Xe, { eventModel: t, emoticonStore: r }),
        ],
      }),
      postbody: (0, K.jsxs)(N, { children: [o, s] }),
      footer: (0, K.jsx)(ei, {
        appid: t.appid,
        creatorHome: (0, K.jsx)(oe, { appid: t.appid, bSmallFormat: !0 }),
      }),
    });
  });
function vi(e) {
  let { event: t, bIsOGG: n } = e,
    r = Lt(),
    { data: i } = Te(t.clanSteamID.GetAccountID()),
    a = !!i?.can_edit,
    o = t.clanSteamID,
    s = t.GID,
    c = a && t.BIsPartnerEvent() && t.BIsVisibleEvent(r);
  G.useEffect(() => {
    if (!c) return;
    let e = q.default.CancelToken.source();
    return (
      $r.LoadStatsForEvents(o, [s], e),
      () => e.cancel(`EventDisplayEditorInfo cancelled`)
    );
  }, [c, o, s]);
  let l = m(() => c && $r.GetStatsFor(o, s));
  return a
    ? (0, K.jsx)(li, { event: t, bIsOGG: n, summary: l ? l.m_stats : void 0 })
    : null;
}
var yi = `FDyPgF-sqXU-`,
  bi = class e {
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
      let e = U.STORE_BASE_URL + `events_admin/ajaxgetscapprovalpriviledge`;
      try {
        let t = await q.default.get(e, { withCredentials: !0 });
        if (t?.data?.success == 1)
          return (
            (this.m_objApprovalPriviledge = { bHasAccess: t.data.bHasAccess }),
            this.m_objApprovalPriviledge
          );
      } catch (e) {
        let t = bn(e);
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
      return (e.s_Singleton ||= new e()), e.s_Singleton;
    }
    constructor() {
      d(this);
      let e = Tn(`sc_app_privildge`, `application_config`);
      this.ValidateStoreDefault(e)
        ? ((this.m_objApprovalPriviledge = e),
          (this.m_LoadingPriviledgePromise = null))
        : (z.logged_in && U.EREALM === Yn.k_ESteamRealmChina) ||
          (this.m_objApprovalPriviledge = { bHasAccess: !1 });
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && typeof t == `object` && typeof t.bHasAccess == `boolean`;
    }
  };
P([n], bi.prototype, `m_objApprovalPriviledge`, void 0);
var xi = f((e) => {
    let [t, n] = G.useState(null),
      { eventModel: r } = e,
      i = r.clanSteamID.GetAccountID(),
      { data: a } = Te(i);
    return (
      G.useEffect(() => {
        let e = q.default.CancelToken.source();
        return (
          (async () => {
            let t = await bi.Get().HintLoadAppApprovalPriviledge();
            e.token.reason || n(z.is_support || !!a?.can_edit || t.bHasAccess);
          })(),
          () => e.cancel(`SteamChinaAdminPanel is unmounting`)
        );
      }, [i, a]),
      z.is_support || a?.can_edit
        ? (0, K.jsx)(fn, {
            eventModel: r,
            partnerEventStore: e.partnerEventStore,
            addtionalAdminButtons: t
              ? [(0, K.jsx)(Si, { eventModel: r }, `removesteamchina`)]
              : void 0,
          })
        : bi.Get().BHasSteamChinaAppApprovalPriviledge()
          ? (0, K.jsxs)(`div`, {
              className: De,
              children: [
                (0, K.jsx)(`span`, {
                  className: Oe,
                  children: L(`#EventDisplay_Admin_Title`),
                }),
                (0, K.jsx)(Si, { eventModel: r }, `removesteamchina`),
              ],
            })
          : null
    );
  }),
  Si = (e) => {
    let { eventModel: t } = e,
      n = async () => {
        let n = new URLSearchParams();
        n.append(`sessionid`, pr()),
          n.append(`clan_accountid`, `` + t.clanSteamID.GetAccountID()),
          n.append(`gid_clan_event`, `` + t.GID);
        let r = !1,
          i = 0;
        try {
          let e = `${U.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
            a = await q.default.post(e, n, { withCredentials: !0 });
          (r = a?.data?.success == 1 || a?.data?.success == 29),
            a?.data?.success == 29 &&
              console.warn(
                `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${t.GID}; event is still removed from SC`,
              ),
            (i = a?.data?.success);
        } catch (e) {
          let t = bn(e);
          (i = t.errorCode),
            console.error(
              `RemoveEventFromSteamChinaButton: error ` + t.strErrorMsg,
              t,
            );
        }
        e.closeModal && e.closeModal(),
          jn(
            r
              ? (0, K.jsx)(yn, {
                  bAlertDialog: !0,
                  children: L(`#EventDisplay_Share_Success`),
                })
              : (0, K.jsx)(_n, {
                  children: L(`#EventDisplay_Share_Failure`) + ` ` + i,
                }),
            window,
          );
      };
    return (0, K.jsx)(`div`, {
      className: I(Ut, Qe, Bt),
      onClick: (t) => {
        let r = !1;
        jn(
          (0, K.jsx)(yn, {
            strTitle: L(`#EventAdmin_Moderation_HideEventInSC`),
            strDescription: L(`#EventAdmin_Moderation_HideEventInSC_Desc`),
            bDestructiveWarning: !0,
            closeModal: e.closeModal,
            onOK: () => {
              (r = !0), n();
            },
            children:
              r && (0, K.jsx)(O, { size: `medium`, position: `center` }),
          }),
          mn(t),
        );
      },
      children: L(`#EventAdmin_Moderation_HideEventInSC`),
    });
  },
  Y = Lr.Get(),
  Ci = Lr.GetSummaryStore();
function wi() {
  document.body.classList.contains(`events_hub`) &&
    document.body.classList.remove(`events_hub`);
}
function Ti(e) {
  let t;
  if (e && e.appid) t = R.Get().GetApp(e.appid)?.GetName();
  else if (e && e.clanSteamID) {
    let n = W.GetClanInfoByClanAccountID(e.clanSteamID.GetAccountID());
    t = n && n.group_name;
  }
  let n = e && e.GetNameWithFallback(H(U.LANGUAGE));
  if (e && t && n) {
    let e = L(`#EventCalendar_TabTitle_GroupNameAndEventDetail`, t, n);
    document.title != e && (document.title = e);
  }
}
var Ei = f((e) => {
    let {
        bInfiniteScroll: t,
        event_gid: n,
        announcement_gid: r,
        clansteamid: i,
        appid: a,
      } = e,
      [o, s] = (0, G.useState)(n ? Y.GetClanEventModel(n) : void 0),
      [, c] = cn(o?.appid, {
        include_assets: !0,
        include_release: !0,
        include_platforms: !0,
        include_screenshots: !0,
      }),
      [l, u] = (0, G.useState)(!1),
      d = (e, t) => {
        t.token.reason || (s(e), Ti(e));
      },
      f = (e) => {
        let t = bn(e);
        console.error(`StoreEventDetailView failed ` + t.strErrorMsg, t), u(!0);
      };
    (0, G.useEffect)(wi, []),
      (0, G.useEffect)(() => {
        let e = q.default.CancelToken.source();
        return (
          o ||
            (n && !Y.GetClanEventModel(n)
              ? Y.LoadPartnerEventGeneric(i, a, n, void 0, 0)
                  .then((t) => d(t, e))
                  .catch(() => {
                    e.token.reason ||
                      Y.LoadPartnerEventGeneric(i, a, void 0, n, 0)
                        .then((t) => d(t, e))
                        .catch(f);
                  })
              : r &&
                !Y.GetClanEventGIDFromAnnouncementGID(r) &&
                Y.LoadPartnerEventGeneric(i, a, void 0, r, 0)
                  .then((t) => d(t, e))
                  .catch(f)),
          () => {
            e.cancel(`StoreEventDetailView: unmounting`);
          }
        );
      }, [n, i, a, r, o]);
    let p = xt(o, E.k_eStoreNewsHub, `allowRelative`);
    if (l || !o || (o?.appid && c == 1)) {
      let e = `lang_` + br(H(U.LANGUAGE));
      return (0, K.jsxs)(`div`, {
        className: I(Le, e, zt, mt),
        children: [
          (0, K.jsx)(`div`, { style: { height: `100px` } }),
          (0, K.jsx)(Jr, { strImageURL: `` }),
          (0, K.jsx)(Yr, {
            strImageURL: ``,
            body: l
              ? (0, K.jsx)(`div`, {
                  className: yi,
                  children: En(
                    `#Events_FailedToFind`,
                    (0, K.jsx)(`a`, {
                      href: U.STORE_BASE_URL + `news/`,
                      children: L(`#EventDisplay_NewsHubSubtitle`),
                    }),
                  ),
                })
              : (0, K.jsx)(O, {
                  string: L(`#Loading`),
                  size: `medium`,
                  position: `center`,
                }),
            postbody:
              l && i
                ? (0, K.jsx)(Xr, {
                    clanAccountID: i.GetAccountID(),
                    partnerEventStore: Ci,
                  })
                : void 0,
          }),
        ],
      });
    }
    return t
      ? (0, K.jsx)(N, {
          children: (0, K.jsx)(Ir, {
            appid: o.appid,
            trackingLocation: 7,
            announcementGID: o.GetAnnouncementGID(),
            partnerEventStore: Y,
            eventModel: o,
            showAppHeader: !0,
            closeModal: () => e.history.push(p),
          }),
        })
      : (0, K.jsx)(N, {
          children: (0, K.jsx)(_i, {
            lang: H(U.LANGUAGE),
            event: o,
            adminPanel:
              U.EREALM === Yn.k_ESteamRealmChina
                ? (0, K.jsx)(xi, { eventModel: o })
                : (0, K.jsx)(fn, { eventModel: o, partnerEventStore: Y }),
            otherEventRow: (0, K.jsx)(Xr, {
              clanAccountID: o.clanSteamID.GetAccountID(),
              gidAnnouncement: o.AnnouncementGID,
              partnerEventStore: Ci,
            }),
          }),
        });
  }),
  Di = c(Ei),
  X = class e {
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
      Ar.GetLanguageListForRealms([U.EREALM]).forEach((e) =>
        this.m_mapLangToNewsCurators.set(e, []),
      );
      let e = U.STORE_BASE_URL + `events/ajaxgetnewscurators`,
        t = { origin: self.origin },
        n = await q.default.get(e, { params: t });
      u(() => {
        n.data && n.data.success && this.HandleCuratorResponse(n.data),
          (this.m_bIsLoadComplete = !0);
      });
    }
    HandleCuratorResponse(e) {
      if (
        (e.groupvanityinfo && W.RegisterClanData(e.groupvanityinfo),
        e.newscuratorinfo)
      )
        for (let t of e.newscuratorinfo) {
          if (this.m_mapNewsCurators.has(t.clanAccountID)) continue;
          this.m_mapNewsCurators.set(t.clanAccountID, t);
          let e = W.GetClanInfoByClanAccountID(t.clanAccountID);
          e && this.m_mapLangToNewsCurators.get(e.rss_language)?.push(t);
        }
    }
  };
P([n], X.prototype, `m_mapNewsCurators`, void 0),
  P([n], X.prototype, `m_bIsLoadComplete`, void 0),
  P([n], X.prototype, `m_mapLangToNewsCurators`, void 0),
  P([i], X.prototype, `allNewsCurators`, null),
  P([r], X.prototype, `HandleCuratorResponse`, null);
var Oi = `_4gJW-1D-qoo-`,
  ki = `g-Xc-fP6jvg-`,
  Ai = `_1Wx2O8pIAbo-`,
  ji = `KYpVcvhG9vI-`;
function Mi(e) {
  let t = new Set();
  return (
    (e.indexOf(`games`) >= 0 || e.indexOf(`dlc`) >= 0) && t.add(`apps`),
    e.indexOf(`curators`) >= 0 && t.add(`curators`),
    t
  );
}
function Ni(e) {
  return e == `game` || e == `software`
    ? `games`
    : e == `dlc` || e == `music`
      ? `dlc`
      : null;
}
var Pi = 300,
  Fi = class extends G.Component {
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
    m_timerForChange = new Pn();
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
      let t = Mi(this.props.rgCorporaToSearch);
      t.has(`apps`) && this.GetAppSuggestionsFromServer(e),
        t.has(`curators`) && this.GetCuratorSuggestions(e);
    }
    async GetCuratorSuggestions(e) {
      let t = X.Get().allNewsCurators,
        n = [];
      for (let r of t) {
        let t = W.GetClanInfoByClanAccountID(r.clanAccountID),
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
            Dr.Get().BIsIgnoringCurator(t.clanAccountID)
          )
            continue;
          let e = Dr.Get().BIsFollowingCurator(t.clanAccountID),
            r = (0, K.jsx)(
              Ii,
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
      this.m_mapHighestReceivedRequestIDFromBackEnd.set(
        `curators`,
        this.m_nHighestSentRequestID,
      ),
        this.setState({ rgCuratorSuggestions: n });
    }
    async GetAppSuggestionsFromServer(e) {
      let t = this.m_nHighestSentRequestID,
        n = [];
      this.props.rgCorporaToSearch.indexOf(`games`) >= 0 &&
        (n.push(`game`), n.push(`software`)),
        this.props.rgCorporaToSearch.indexOf(`dlc`) >= 0 &&
          (n.push(`dlc`), n.push(`music`));
      let r = {
          cc: U.COUNTRY,
          l: U.LANGUAGE,
          realm: Yn.k_ESteamRealmGlobal,
          origin: self.origin,
          f: `jsonfull`,
          term: e.replace(` `, `+`),
          require_type: n.join(`,`),
          excluded_tags: Dr.Get().GetExcludedTagsSortedByID(),
          excluded_content_descriptors: Dr.Get().ExcludedContentDescriptor,
        },
        i = `${U.STORE_BASE_URL}search/suggest`,
        a = await q.default.get(i, { params: r, withCredentials: !0 });
      if (t < this.m_mapHighestReceivedRequestIDFromBackEnd.get(`apps`)) return;
      this.m_mapHighestReceivedRequestIDFromBackEnd.set(`apps`, t);
      let o;
      a?.data?.length &&
        (o = a.data.map((e) => {
          let t = { corpus: Ni(e.type), ...e, id: parseInt(e.id) };
          if (
            this.props.fnFilterSuggestion &&
            !this.props.fnFilterSuggestion(t)
          )
            return null;
          let n = (0, K.jsx)(
            Ii,
            { suggestion: t, fnOnSelected: this.props.fnOnSelected },
            t.type + t.id,
          );
          return this.props.fnDecorateSuggestion
            ? this.props.fnDecorateSuggestion(t, n)
            : n;
        })),
        this.setState({ rgAppSuggestions: o });
    }
    async UpdateSuggestions(e) {
      let t = e.target.value && e.target.value.trim().toLocaleLowerCase();
      this.m_nHighestSentRequestID++,
        t?.length
          ? (this.setState({ strSearchString: t }),
            this.m_timerForChange.Schedule(Pi, () =>
              this.GetSuggestionsFromServer(t),
            ))
          : (Array.from(Mi(this.props.rgCorporaToSearch)).forEach((e) =>
              this.m_mapHighestReceivedRequestIDFromBackEnd.set(
                e,
                this.m_nHighestSentRequestID,
              ),
            ),
            this.m_timerForChange.Cancel(),
            this.setState({ strSearchString: `` }),
            this.ResetSuggestions());
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
        u = Mi(n).size > 1,
        d =
          u &&
          c &&
          L(
            n.indexOf(`dlc`) >= 0
              ? `#EventCalendar_SearchResultsHeader_GameAndDLCSection`
              : `#EventCalendar_SearchResultsHeader_GameSection`,
          ),
        f = Array.from(Mi(n)).some(
          (e) =>
            this.m_nHighestSentRequestID >
            this.m_mapHighestReceivedRequestIDFromBackEnd.get(e),
        ),
        p = !l && !c && !f;
      return (0, K.jsxs)(`div`, {
        className: Oi,
        children: [
          (0, K.jsx)(qn, {
            type: `text`,
            label: e,
            onChange: this.UpdateSuggestions,
            bAlwaysShowClearAction: s,
            focusOnMount: t,
          }),
          s &&
            (0, K.jsxs)(`div`, {
              className: I(`JjeIVeB00KI-`, r),
              children: [
                c &&
                  (0, K.jsxs)(
                    `div`,
                    {
                      children: [
                        u &&
                          (0, K.jsx)(`div`, {
                            className: `KIFc7JoTW0c-`,
                            children: d,
                          }),
                        a,
                      ],
                    },
                    `game-suggestions`,
                  ),
                l &&
                  (0, K.jsxs)(
                    `div`,
                    {
                      children: [
                        u &&
                          (0, K.jsx)(`div`, {
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
                  (0, K.jsx)(
                    `div`,
                    {
                      className: `jciUsTxtI2I-`,
                      children: L(`#EventCalendar_GameSearch_NoneFound`),
                    },
                    `empty-results`,
                  ),
                f && (0, K.jsx)(O, { size: `small` }),
              ],
            }),
        ],
      });
    }
  };
P([F], Fi.prototype, `UpdateSuggestions`, null);
var Ii = (e) =>
    (0, K.jsxs)(
      `div`,
      {
        className: ki,
        onClick: () => e.fnOnSelected(e.suggestion),
        children: [
          (0, K.jsx)(`img`, { src: e.suggestion.img, className: Ai }),
          (0, K.jsxs)(`div`, {
            className: ji,
            children: [` `, Pt(e.suggestion.name), ` `],
          }),
          e.bShowFollowingLabel &&
            (0, K.jsx)(`div`, {
              className: `uKt-HtVvtDo-`,
              children: L(`#EventCalendar_FollowingCurator`),
            }),
        ],
      },
      `suggestion-${e.suggestion.id}`,
    ),
  Li = `_6ZHZTf7muKA-`,
  Ri = `zdmQVstxVQg-`,
  zi = `iT-bz3pMJXU-`,
  Bi = `oZDQ4c13u2U-`,
  Vi = `oFY5ImXfh3c-`,
  Hi = `Ik8p1HIXTW0-`,
  Ui = `_3IhI4vEjnlA-`,
  Wi = `RG84muU5ZUQ-`,
  Gi = `LuMqJf79rpI-`;
function Ki(e) {
  let { closeModal: t } = e;
  return (0, K.jsx)(yn, {
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
      v().m_visibilityStore.SetGameSourceAllowed(S.k_ECurator, !0), t && t();
    },
    onCancel: () => {
      v().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(!0),
        t && t();
    },
  });
}
function qi(e) {
  e ||
    (y() &&
      (v().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
        v().m_visibilityStore.BIsGameSourceAllowed(S.k_ECurator) ||
        jn((0, K.jsx)(Ki, {}), window)));
}
var Ji = (e) =>
    (0, K.jsx)(Nn, {
      onEscKeypress: e.closeModal,
      children: (0, K.jsx)(N, {
        children: (0, K.jsxs)(nr, {
          children: [
            (0, K.jsx)(_r, { children: L(`#EventCurator_BrowseDialog_Title`) }),
            (0, K.jsxs)(pn, {
              children: [
                (0, K.jsx)(`div`, {
                  children: L(`#EventCurator_BrowseDialog_Desc`),
                }),
                (0, K.jsx)(Xi, {}),
              ],
            }),
            (0, K.jsx)(cr, {
              children: (0, K.jsx)($n, {
                onClick: e.closeModal,
                children: L(`#Button_Dismiss`),
              }),
            }),
          ],
        }),
      }),
    }),
  Yi = (e) =>
    (0, K.jsx)(Ko, {
      title: L(`#EventCurator_BrowseDialog_Title`),
      description: L(`#EventCurator_BrowseDialog_Desc`),
      children: (0, K.jsx)(Xi, {}),
    }),
  Xi = (e) => {
    let [t, n] = G.useState(X.Get().IsLoaded());
    G.useEffect(() => {
      t ||
        (async () => {
          await X.Get().WaitForInitialLoad(), n(!0);
        })();
    }, [t]);
    let r = [];
    return (
      t &&
        Cn.GetELanguageFallbackOrder([Yn.k_ESteamRealmGlobal]).forEach((e) =>
          r.push((0, K.jsx)(Zi, { lang: e }, `curlang` + e)),
        ),
      (0, K.jsx)(K.Fragment, {
        children: t
          ? (0, K.jsx)(G.Fragment, { children: r })
          : (0, K.jsx)(O, {
              size: `medium`,
              position: `center`,
              string: L(`#Loading`),
            }),
      })
    );
  },
  Zi = (e) => {
    let t = X.Get().GetCuratorsForLang(e.lang);
    if (!t) return null;
    let n = t
      .map((e) => W.GetClanInfoByClanAccountID(e.clanAccountID))
      .filter((e) => !!e);
    if (n.length == 0) return null;
    n.sort((e, t) => e.group_name.localeCompare(t.group_name));
    let r = n.map((e) =>
      (0, K.jsx)(
        $i,
        { clanInfo: e, layout: `row` },
        `curatorbrowse_` + e.clanAccountID,
      ),
    );
    return (0, K.jsxs)(`div`, {
      children: [
        (0, K.jsx)(`div`, {
          className: Li,
          children: L(
            `#EventCurator_BrowseDialog_LangCurator`,
            L(`#Language_` + ar(e.lang)),
          ),
        }),
        r,
      ],
    });
  },
  Qi = f((e) => {
    let t = W.GetClanInfoByClanAccountID(e.clanid);
    if (!t) return (0, K.jsx)(`div`, { children: e.children });
    let n = {
        clan_account_id: t.clanAccountID,
        name: t.group_name,
        type: `developer`,
      },
      r = (0, K.jsx)(`div`, {
        className: Gi,
        children: (0, K.jsx)(se, {
          creatorID: n,
          bSmallFormat: !0,
          bHideCreatorType: !0,
          bHideFollowButton: !0,
        }),
      });
    return (0, K.jsx)(kr, {
      toolTipContent: r,
      bTopmost: !0,
      children: e.children,
    });
  }),
  $i = (e) => {
    let [t, n] = G.useState(!1),
      r = () => {
        jn(
          (0, K.jsx)(_n, {
            strDescription: L(`#EventCurator_NoEventsFound_Body`),
            strTitle: L(`#EventCurator_NoEventsFound_Title`),
          }),
          window,
        ),
          n(!1);
      },
      i = () =>
        t
          ? (0, K.jsx)(N, {
              children: (0, K.jsx)(Ir, {
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
      s = o === `row` ? Ri : Ui,
      c = (0, K.jsx)(Qi, {
        clanid: a.clanSteamID.GetAccountID(),
        children: (0, K.jsxs)(`div`, {
          className: I(qt, Vi),
          onClick: () => n(!0),
          children: [
            (0, K.jsx)(`img`, {
              className: zi,
              src: a.avatar_full_url,
              alt: a.group_name,
            }),
            (0, K.jsx)(`div`, { className: Bi, children: a.group_name }),
          ],
        }),
      });
    return (0, K.jsxs)(`div`, {
      className: I(Jt, s),
      children: [
        i(),
        (0, K.jsx)(`div`, { onClick: () => n(!0), children: c }),
        (0, K.jsx)(`div`, {
          className: I(qt, Hi),
          children: (0, K.jsx)(ge, {
            clanAccountID: a.clanAccountID,
            className: Wi,
            fnSuccessCallback: qi,
          }),
        }),
      ],
    });
  },
  ea = `360px`,
  ta = `104px`,
  na = `62px`,
  ra = `80px`,
  ia = `150px`,
  aa = `70px`,
  oa = `37px`,
  sa = `52px`,
  ca = `239px`,
  la = `70px`,
  ua = `_63S-hd0G758-`,
  da = `CcXjKFWLiuk-`,
  fa = `_9G7NHoSd69Q-`,
  pa = `_1-sUXu7fTvU-`,
  ma = `WvKwdkLJAUg-`,
  ha = `dHSWxCRbYYc-`,
  ga = `_4MJDHlbGuWs-`,
  _a = `_1JOM9TMmvIE-`,
  va = `dMXRMeBnIbQ-`,
  ya = `FjJKgh0dFDI-`,
  ba = `S1RrUvN-5Ow-`,
  xa = `_6M3zetsKboA-`,
  Sa = `aNHqqAqPfAg-`,
  Ca = `_5k6bkVvOlEg-`,
  wa = `UpJim05UMg4-`,
  Ta = `BTbgNF3Ls1o-`,
  Ea = `AiM8sHhrdtk-`,
  Da = `suB5yaFI5Sk-`,
  Oa = `QiZCPwhEAvE-`,
  ka = `yaPFfqmtDGE-`,
  Aa = `yDJ1-6CIoOA-`,
  ja = `-CiPbviVzto-`,
  Ma = `hqPTI05KkUw-`,
  Na = `WrrRzpmMmK8-`,
  Pa = `UEdZYCw7i6A-`,
  Fa = `xE9Dp6pmE08-`,
  Ia = `TE8-IBbD3VQ-`,
  La = `_0az7EQ9Oqik-`,
  Ra = `gPGNIeRVWCQ-`,
  za = `JiIEZc04Kp4-`,
  Ba = `MaaVjvZivZw-`,
  Va = `AWm6RNWZdM4-`,
  Ha = `Vi2EIPmgpxw-`,
  Ua = `RdMlBc0C1Rk-`,
  Wa = `YZlg66ByM1Q-`,
  Ga = `a5rNqLH4CAA-`,
  Ka = `_2qk4lp7nG4g-`,
  qa = `kBqESD5qsDg-`,
  Ja = `_3h8e6e0K-2Q-`,
  Ya = `G85BTMaJ9aw-`,
  Xa = `o85pOaYa4XA-`,
  Za = `_1l9EsBTVpJQ-`,
  Qa = `DYkXiBUMpUw-`,
  $a = `FR7ZKI-8vps-`,
  eo = `t-DkBN8lilM-`,
  to = `DE-3biPKNTM-`,
  no = `_0sA1Zp8H8XE-`,
  ro = `_0EXug2246p8-`,
  io = `-lh-rCi0CMA-`,
  ao = `_9SxOFYZ-a9I-`,
  oo = `gGUEn3t3t40-`,
  so = `LJ2a4Je-OMo-`,
  co = `hZ0IRZS-U9c-`,
  lo = `IPHnNxEFo0g-`,
  uo = `J5j2hV1tRBE-`,
  fo = `Xu2D-jOAvXU-`,
  po = `FfLcl-LcD3M-`,
  mo = `_7Ya--Q9-pQI-`,
  ho = `odhWkLdRWAY-`,
  go = `OS05IXLXqrA-`,
  _o = `PJz5mrc1q-s-`,
  vo = `NXNrp52mykc-`,
  yo = e(It()),
  bo = class {
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
      let t = e.startEvent.toLocaleDateString(Cn.GetPreferredLocales(), {
        month: `long`,
        day: `numeric`,
      });
      if (!e.endEvent) return t;
      let n = {
        month:
          e.startEvent.getMonth() == e.endEvent.getMonth() ? void 0 : `long`,
        day: `numeric`,
      };
      return `${t} - ${e.endEvent.toLocaleDateString(Cn.GetPreferredLocales(), n)}`;
    }
    GetVisibleSpecialEvents() {
      return [
        {
          sLocToken: `#NewsHubSpecialEvent_GameFestival`,
          startVisible: new Date(
            (0, yo.default)(`2020-06-16T14:00:00-07:00`).unix() * 1e3,
          ),
          endVisible: new Date(
            (0, yo.default)(`2020-06-22T10:00:00-07:00`).unix() * 1e3,
          ),
          startEvent: new Date(
            (0, yo.default)(`2020-06-16T10:00:00-07:00`).unix() * 1e3,
          ),
          endEvent: new Date(
            (0, yo.default)(`2020-06-22T10:00:00-07:00`).unix() * 1e3,
          ),
          newshubUrl: `news/collection/GameFestival2020`,
        },
      ].filter((e) => this.IsCurrentlyVisible(e));
    }
  },
  xo = new bo(),
  So = class extends G.Component {
    render() {
      let { specialEvent: e } = this.props,
        t = window.location.href === U.STORE_BASE_URL + e.newshubUrl,
        n = bo.IsCurrentlyActive(e),
        r = bo.LocalizeDateString(e);
      return (0, K.jsx)(tr, {
        to: `/` + e.newshubUrl,
        children: (0, K.jsxs)(`div`, {
          className: I(Za, t && void 0, n && void 0),
          children: [
            (0, K.jsx)(`div`, { className: Qa, children: L(e.sLocToken) }),
            r && (0, K.jsx)(`div`, { className: `_5I-2eN6CnII-`, children: r }),
          ],
        }),
      });
    }
  },
  Co = class extends G.Component {
    render() {
      let e = xo.GetVisibleSpecialEvents();
      return e.length === 0
        ? null
        : (0, K.jsxs)(`div`, {
            className: Ja,
            children: [
              (0, K.jsx)(`div`, {
                className: Ya,
                children: L(`#Events_SpecialEvents`),
              }),
              (0, K.jsx)(`div`, {
                className: Xa,
                children: e.map((e) =>
                  (0, K.jsx)(So, { specialEvent: e }, e.sLocToken),
                ),
              }),
            ],
          });
    }
  },
  wo = `PsNUSZrnhwo-`,
  To = `kJyrTBjLD7Q-`,
  Eo = `NacinvTIzSA-`,
  Do = `deJTdy55RnQ-`,
  Oo = `F6eodJBqkg4-`,
  ko = `_4GeOIQtMlK4-`,
  Ao = `bGyZZ0TxG24-`,
  jo = `_0D-fKtXb90E-`,
  Mo = `-YMuG9CeZOo-`;
function No() {
  return yr(new Date());
}
var Po = (e) => {
    let t = U.PUBLIC_SHARED_URL + `images/`;
    return (0, K.jsxs)(`div`, {
      className: wo,
      children: [
        (0, K.jsxs)(`div`, {
          className: Do,
          children: [
            (0, K.jsx)(`a`, {
              href: U.STORE_BASE_URL + `about`,
              children: `关于蒸汽平台`,
            }),
            `\xA0 | \xA0`,
            (0, K.jsx)(`a`, {
              href: U.STORE_BASE_URL + `steam_refunds`,
              children: `退款政策`,
            }),
            `\xA0 | \xA0`,
            (0, K.jsx)(`a`, {
              href: U.STORE_BASE_URL + `subscriber_agreement`,
              children: `软件许可服务协议`,
            }),
            `\xA0 | \xA0`,
            (0, K.jsx)(`br`, {}),
            (0, K.jsx)(`a`, {
              href: U.STORE_BASE_URL + `privacy_agreement`,
              children: `个人信息保护政策`,
            }),
            `\xA0 | \xA0`,
            (0, K.jsx)(`a`, {
              href: `https://about.steamchina.com/content_report.html`,
              target: `_blank`,
              rel: `noreferrer`,
              children: `不良内容举报投诉`,
            }),
            `\xA0 | \xA0`,
            (0, K.jsx)(`a`, {
              href: `https://about.steamchina.com/infringement_report.html`,
              target: `_blank`,
              rel: `noreferrer`,
              children: `侵权投诉`,
            }),
            `\xA0 | \xA0`,
            (0, K.jsx)(`a`, {
              href: `https://about.steamchina.com/parentguardianship_agreement.html`,
              target: `_blank`,
              rel: `noreferrer`,
              children: `家长监护`,
            }),
          ],
        }),
        (0, K.jsx)(`div`, { className: Eo }),
        (0, K.jsxs)(`div`, {
          className: Ao,
          children: [
            (0, K.jsx)(`a`, {
              href: `https://www.wanmei.com/`,
              target: `_blank`,
              rel: `noreferrer`,
              children: (0, K.jsx)(`img`, {
                className: jo,
                src: t + `footer/pw_logo_gy.svg?v=1`,
              }),
            }),
            (0, K.jsx)(`a`, {
              href: `https://valvesoftware.com`,
              target: `_blank`,
              rel: `noreferrer`,
              children: (0, K.jsx)(`img`, {
                className: Mo,
                src: t + `footer/valve_logo_gy.svg?v=1`,
              }),
            }),
          ],
        }),
        (0, K.jsxs)(`div`, {
          className: Oo,
          children: [
            (0, K.jsxs)(`div`, {
              className: void 0,
              children: [
                `© ${No()} Valve Corporation 版权所有，完美世界已获授权`,
                (0, K.jsx)(`br`, {}),
                `所有商标均属于其在美国或其他国家的拥有者。`,
              ],
            }),
            (0, K.jsxs)(`div`, {
              className: ko,
              children: [
                `© 完美世界征奇(上海)多媒体科技有限公司 版权所有。`,
                (0, K.jsx)(`br`, {}),
                `增值电信业务经营许可证沪B2-20180406`,
              ],
            }),
          ],
        }),
      ],
    });
  },
  Fo = (e) =>
    (0, K.jsxs)(`div`, {
      className: wo,
      children: [
        (0, K.jsx)(`img`, {
          src: U.STORE_CDN_URL + `public/images/footerLogo_valve_new.png`,
        }),
        (0, K.jsx)(`div`, {
          className: To,
          children: L(`#Legal_Footer_WithYear`, No()),
        }),
      ],
    }),
  Io = (e) => (wn() ? (0, K.jsx)(Po, {}) : (0, K.jsx)(Fo, {})),
  Lo = class e {
    m_curDisplay = `desktop_navigation`;
    m_fnGetRouterHistory = void 0;
    static s_GlobalStore;
    static Get() {
      return (e.s_GlobalStore ||= new e()), e.s_GlobalStore;
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
      (this.m_curDisplay = e),
        this.m_fnGetRouterHistory &&
          kt(
            this.m_fnGetRouterHistory(),
            `optionpane`,
            this.m_curDisplay == `desktop_navigation`
              ? void 0
              : this.m_curDisplay,
          );
    }
    GetDisplay() {
      return this.m_curDisplay;
    }
    ShowBrowseCurator(t) {
      Vl()
        ? e.Get().SetDisplay(`browse_curator`)
        : jn((0, K.jsx)(Ji, {}), mn(t));
    }
  };
P([n], Lo.prototype, `m_curDisplay`, void 0);
var Ro = class extends G.Component {
  GetVisibilityStore() {
    return v().m_visibilityStore;
  }
  OnEventTypeChange(e, t) {
    this.GetVisibilityStore().SetEventTypeGroupAllowed(e, t),
      this.props.fnOnFilterChange();
  }
  RenderEventTypeCheckbox(e) {
    let t = this.GetVisibilityStore().BIsEventTypeGroupAllowed(e);
    return (0, K.jsx)(
      Rn,
      {
        toolTipContent: L(`#EventCalendar_EventTypeGroup_ttip_` + e),
        direction: `top`,
        children: (0, K.jsx)(Go, {
          label: L(`#EventCalendar_EventTypeGroup_` + e),
          checked: t,
          onChange: (t) => this.OnEventTypeChange(e, t),
        }),
      },
      `group-${e}`,
    );
  }
  OnGameSourceChange(e, t) {
    this.GetVisibilityStore().SetGameSourceAllowed(e, t),
      this.props.fnOnFilterChange();
  }
  RenderGameSourceCheckbox(e, t) {
    let n =
      this.GetVisibilityStore().BIsGameSourceAllowed(e) ||
      (e == S.k_ELibrary &&
        this.GetVisibilityStore().BIsGameSourceAllowed(S.k_ERecent));
    return (0, K.jsx)(
      Rn,
      {
        direction: `top`,
        toolTipContent: L(
          t
            ? `#EventCalendar_DisabledFilter_LoginPrompt`
            : `#EventCalendar_GameSource_ttip_` + e,
        ),
        children: (0, K.jsx)(Go, {
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
      let e = W.GetClanInfoByClanAccountID(t.GetSingleGroupID());
      e && e.has_rss_feed && (n = !1);
    } else
      t.BIsCollectionCalendar() &&
        (t.GetKey().collectionid == _.Press ||
          t.GetKey().collectionid == _.Dev_Sales ||
          t.GetKey().collectionid == _.Dev_AssociatedPress) &&
        (n = !1);
    let r = os(t),
      i = ae.Get().GetMutedSourceCount(),
      a = t.BIsSingleSourceMuted() || (!t.BIsSingleSourceCalendar() && i > 0);
    return (0, K.jsxs)(Ko, {
      title: L(`#EventCalendar_FiltersTitle`),
      description: L(
        t.BIsGlobalCalendar()
          ? `#EventCalendar_FiltersDescription`
          : `#EventCalendar_FiltersDescription_NonPersonalized`,
      ),
      children: [
        (0, K.jsxs)(`div`, {
          className: wa,
          children: [
            n &&
              (0, K.jsxs)(zo, {
                children: [
                  (0, K.jsx)(Bo, {
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
              (0, K.jsxs)(zo, {
                children: [
                  (0, K.jsx)(Bo, {
                    children: L(`#EventCalendar_FilterSubSection_GameSources`),
                  }),
                  this.RenderGameSourceCheckbox(S.k_ELibrary, !e),
                  (0, K.jsx)(`div`, {
                    className: `CJP1VU5BCsw-`,
                    children: this.RenderGameSourceCheckbox(S.k_ERecent, !e),
                  }),
                  this.RenderGameSourceCheckbox(S.k_EWishlist, !e),
                  w() && this.RenderGameSourceCheckbox(S.k_EFollowing, !e),
                  this.RenderGameSourceCheckbox(S.k_ERecommended, !e),
                  this.RenderGameSourceCheckbox(S.k_ESteam),
                  Rt.bIncludeFeaturedAsGameSource &&
                    this.RenderGameSourceCheckbox(S.k_EFeatured),
                ],
              }),
            !!(fe() && (t.BIsGlobalCalendar() || t.BIsSingleAppCalendar())) &&
              (0, K.jsxs)(zo, {
                children: [
                  (0, K.jsx)(Bo, {
                    children: L(
                      `#EventCalendar_FilterSubSection_CuratorSources`,
                    ),
                  }),
                  this.RenderGameSourceCheckbox(S.k_ECurator, !e),
                  (0, K.jsx)(Vo, {
                    onClick: Lo.Get().ShowBrowseCurator,
                    children: L(`#EventCalendar_BrowseCurators`),
                  }),
                ],
              }),
            r &&
              (0, K.jsx)(Ho, {
                calendar: t,
                onFilterChange: this.props.fnOnFilterChange,
              }),
            !!t.BIsSingleSourceMuted() &&
              (0, K.jsx)(`div`, {
                children: L(
                  t.BIsSingleGroupCalendar()
                    ? `#EventCalendar_SingleGroupIsMuted`
                    : `#EventCalendar_SingleAppIsMuted`,
                ),
              }),
          ],
        }),
        (0, K.jsxs)(`div`, {
          className: xa,
          children: [
            a &&
              (0, K.jsx)(Xn, {
                className: `b-LIxOOiVlM-`,
                href: U.STORE_BASE_URL + `account/emailoptout/app`,
                bDisableContextMenu: !0,
                children: (0, K.jsxs)(Vo, {
                  children: [
                    (0, K.jsx)(ur, { muted: !0 }),
                    L(`#EventCalendar_ManageMutedSources`),
                    (0, K.jsx)(`div`, {
                      className: `oLxn7HICsb0-`,
                      children: i,
                    }),
                  ],
                }),
              }),
            (0, K.jsx)(Xn, {
              href: U.STORE_BASE_URL + `account/preferences`,
              bDisableContextMenu: !0,
              children: (0, K.jsxs)(Vo, {
                children: [
                  (0, K.jsx)(An, {}),
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
Ro = P([f], Ro);
var zo = Er(Ta),
  Bo = Er(Ea),
  Vo = Er(Sa);
function Ho(e) {
  let { calendar: t, onFilterChange: n } = e,
    [r, i] = m(() => [
      t
        .GetAllClans()
        .filter((e) => W.GetClanInfoByClanAccountID(e)?.group_name),
      t.GetAllApps().filter((e) => R.Get().GetApp(e)?.GetName()),
    ]);
  return (
    mr(
      t.BIsCollectionCalendar,
      `Attempted to render collection source filters for a non collection calendar`,
    ),
    t.BIsCollectionCalendar()
      ? (0, K.jsxs)(zo, {
          children: [
            (0, K.jsx)(Bo, {
              children: L(`#EventCalendar_FilterSubSection_CollectionSources`),
            }),
            r.map((e) =>
              (0, K.jsx)(Uo, { calendar: t, clanid: e, onFilterChange: n }, e),
            ),
            i.map((e) =>
              (0, K.jsx)(Wo, { calendar: t, appid: e, onFilterChange: n }, e),
            ),
          ],
        })
      : null
  );
}
function Uo(e) {
  let { calendar: t, clanid: n, onFilterChange: r } = e,
    i = m(() => t.m_visibilityStore.BIsClanVisible(n));
  return (0, K.jsx)(Go, {
    label: W.GetClanInfoByClanAccountID(n)?.group_name,
    checked: i,
    onChange: (e) => {
      t.m_visibilityStore.SetClanVisibility(n, e), r();
    },
  });
}
function Wo(e) {
  let { calendar: t, appid: n, onFilterChange: r } = e,
    i = t.m_visibilityStore.BIsAppVisible(n);
  return (0, K.jsx)(Go, {
    label: R.Get().GetApp(n)?.GetName(),
    checked: i,
    onChange: (e) => {
      t.m_visibilityStore.SetAppVisibility(n, e), r();
    },
  });
}
function Go(e) {
  return (0, K.jsx)(`div`, {
    className: ba,
    children: (0, K.jsx)(hr, { ...e }),
  });
}
var Ko = (e) =>
  (0, K.jsxs)(`div`, {
    className: ya,
    children: [
      (0, K.jsx)(`div`, { className: fa, children: e.title }),
      !!e.description &&
        (0, K.jsx)(`div`, {
          className: `z7aV1pd6aPU-`,
          children: e.description,
        }),
      e.children,
    ],
  });
function qo(e) {
  Lo.Get().SetDisplay(e ? `event_filter` : `desktop_navigation`);
}
var Jo = f(function (e) {
    let {
        bUserIsLoggedIn: t,
        nDisappearingHeaderVisibleHeight: n,
        bIsCollapsed: r,
        fnToggleCollapsed: i,
        fnOnFilterChange: a,
      } = e,
      o = Vl(),
      s = (0, K.jsx)(`div`, {
        className: Ca,
        onClick: () => {
          qo(!1), i();
        },
        children: (0, K.jsx)(Sr, {}),
      }),
      c = Or(),
      l = r ? Math.max(0, n) : 0,
      u =
        o || c
          ? null
          : (0, K.jsx)(`div`, {
              onClick: i,
              className: ma,
              children: (0, K.jsx)(`div`, {
                style: { marginTop: `${l}px` },
                className: ha,
                children: (0, K.jsx)(fr, { angle: r ? 180 : 0 }),
              }),
            }),
      d = o
        ? null
        : (0, K.jsx)(`div`, {
            onClick: () => qo(!1),
            className: ma,
            children: (0, K.jsx)(`div`, {
              style: { marginTop: `${l}px` },
              className: ha,
              children: (0, K.jsx)(Sr, {}),
            }),
          }),
      f = Lo.Get().GetDisplay() == `desktop_navigation` ? u : d,
      p = r ? void 0 : { top: `${n}px` };
    v();
    let m;
    switch (Lo.Get().GetDisplay()) {
      case `event_filter`:
        m = (0, K.jsx)(Ro, { bUserIsLoggedIn: t, fnOnFilterChange: a });
        break;
      case `browse_curator`:
        m = (0, K.jsx)(Yi, {});
        break;
      case `desktop_navigation`:
        m = (0, K.jsx)(Yo, { ...e, fnOpenFilterSettings: qo });
    }
    return (0, K.jsx)(G.Fragment, {
      children: (0, K.jsx)(V, {
        className: I(pa, r && `Lny0vLSKJv0-`),
        style: p,
        "flow-children": `column`,
        children: r
          ? f
          : (0, K.jsxs)(`div`, {
              className: _a,
              children: [
                s,
                f,
                (0, K.jsx)(`div`, { className: da, children: m }),
              ],
            }),
      }),
    });
  }),
  Yo = f((e) => {
    let { bShouldIncludeLegalFooter: t, bShowUpcoming: n } = e,
      r =
        `Responsive_RequestMobileView` in window &&
        window.Responsive_RequestMobileView,
      i = Or();
    return (0, K.jsxs)(G.Fragment, {
      children: [
        (0, K.jsx)(`div`, { className: ga, children: (0, K.jsx)(Wn, {}) }),
        (0, K.jsx)(`div`, {
          className: va,
          children: En(`#EventCalendar_Title`, (0, K.jsx)(`br`, {})),
        }),
        (0, K.jsx)(is, { bIsUpcoming: n }),
        (0, K.jsx)(Co, {}),
        (0, K.jsx)(`div`, {
          className: so,
          children: (0, K.jsx)(Xo, {
            label: L(`#EventCalendar_UniversalSearch`),
          }),
        }),
        (0, K.jsx)(as, { bIsUpcoming: n }),
        !i &&
          (0, K.jsx)(`div`, {
            className: `R57iwKqlC-4-`,
            children: (0, K.jsxs)(`div`, {
              className: I(`aNHqqAqPfAg-`, `_55sl-K26NHU-`),
              onClick: () => e.fnOpenFilterSettings(!0),
              children: [(0, K.jsx)(Qn, {}), L(`#EventCalendar_EditFilters`)],
            }),
          }),
        r &&
          (0, K.jsx)(`div`, {
            className: I(`Yhmcnc2ixQ0-`, `m4BNbAMqtL0-`),
            onClick: r,
            children: L(`#EventCalendar_ShowResponsiveView`),
          }),
        t && (0, K.jsx)(Io, {}),
      ],
    });
  }),
  Xo = class extends G.Component {
    DecorateSearchSuggestion(e, t) {
      if (e && e.id) {
        let n = ``;
        return (
          e.corpus == `curators`
            ? (n = `group/` + e.id)
            : e.corpus == `games` &&
              (mr(le(e.type), `Unexpected app type ` + e.type),
              (n = `app/` + e.id)),
          (0, K.jsx)(
            sr,
            { href: `/${bt()}/${n}/`, children: t },
            `suggestion-${e.id}`,
          )
        );
      }
      return t;
    }
    render() {
      return (0, K.jsx)(Fi, {
        strLabel: this.props.label,
        fnOnSelected: () => {},
        fnDecorateSuggestion: this.DecorateSearchSuggestion,
        rgCorporaToSearch: [`games`, `curators`],
        focusOnMount: this.props.focusOnMount,
      });
    }
  };
Xo = P([f], Xo);
function Zo() {
  if (!v().BIsGlobalCalendar() || !z.logged_in) return;
  let e = v().GetStoreInitializationTimestamp().getTime() / 1e3,
    t = v().GetCurrentlyLoadedEventCount(e);
  if (t)
    return v().BHitEventHorizon(`forward`) ? String(t.nCount) : t.nCount + `+`;
}
function Z(e, t) {
  let n = ie(e);
  if ((mr(!!n, `Must define collection ` + e), !n)) return null;
  let r = v().GetCollectionID() == e,
    i;
  switch (e) {
    case _.Default:
      r = v().BIsGlobalCalendar() && !t;
      break;
    case _.Upcoming:
      (r = v().BIsGlobalCalendar() && t), (i = Zo());
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
function Qo(e, t) {
  let n = [];
  return n.push(Z(_.Default, e)), n.push(Z(_.Upcoming, e)), n;
}
function $o(e, t) {
  let n = [];
  return (
    n.push(Z(_.Featured, e)),
    n.push(Z(_.Steam, e)),
    Rt.GetTimeNowWithOverride() < 1668160800 && n.push(Z(_.Halloween, e)),
    n
  );
}
function es(e, t) {
  v().BIsCollectionCalendar(), bt();
  let n = [];
  if ((fe() && n.push(Z(_.Press, e)), t))
    for (let e of xo.GetVisibleSpecialEvents())
      n.push({
        name: L(e.sLocToken),
        url: e.newshubUrl,
        onPage: !1,
        key: `event_` + e.sLocToken,
      });
  return (
    n.push(Z(_.Dev_Sales, e)),
    z.is_support &&
      (n.push(Z(_.Dev_All, e)), n.push(Z(_.Dev_AssociatedPress, e))),
    n
  );
}
var ts = (e) => {
    let {
      shortName: t,
      name: n,
      url: r,
      onPage: i,
      count: a,
      bValveOnly: o,
    } = e.element;
    return !z.is_support && o
      ? null
      : (0, K.jsx)(tr, {
          to: `/` + r,
          children: (0, K.jsxs)(`div`, {
            className: I(po, i && `OH3M5fhybLw-`),
            children: [
              t || n,
              a &&
                (0, K.jsx)(`div`, { className: `b-2wzF1-IAg-`, children: a }),
            ],
          }),
        });
  },
  ns = class extends G.Component {
    state = { bSearchExpanded: !1 };
    onExpandSearch(e) {
      this.setState({ bSearchExpanded: e });
    }
    render() {
      let { bSearchExpanded: e } = this.state,
        t = Qo(this.props.bIsUpcoming, !1),
        n = $o(this.props.bIsUpcoming, !1),
        r = es(this.props.bIsUpcoming, !1),
        i = [...t, ...n, ...r];
      return (0, K.jsxs)(`div`, {
        style: { transform: `translateY(${this.props.nTopOffset}px)` },
        className: co,
        children: [
          (0, K.jsx)(`div`, {
            className: lo,
            onClick: this.props.fnToggleCollapsed,
            children: (0, K.jsx)(Qn, {}),
          }),
          (0, K.jsx)(`div`, {
            className: I(lo, e && `F-oQOYMXtaY-`),
            onClick: () => this.onExpandSearch(!e),
            children: (0, K.jsx)(Hn, {}),
          }),
          e &&
            (0, K.jsxs)(G.Fragment, {
              children: [
                (0, K.jsx)(`div`, {
                  className: `gUhEHpUvHRM-`,
                  onClick: () => this.onExpandSearch(!1),
                }),
                (0, K.jsx)(`div`, {
                  className: I(`nUSnEoVXKTE-`, e && `F-oQOYMXtaY-`),
                  children: (0, K.jsx)(Xo, { focusOnMount: !0 }),
                }),
              ],
            }),
          (0, K.jsx)(ne, {
            className: uo,
            children: (0, K.jsx)(`div`, {
              className: fo,
              children: i.map((e) => (0, K.jsx)(ts, { element: e }, e.key)),
            }),
          }),
        ],
      });
    }
  };
P([F], ns.prototype, `onExpandSearch`, null), (ns = P([f], ns));
function rs(e) {
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
  return !z.is_support && s
    ? null
    : (0, K.jsx)(sr, {
        href: `/` + i,
        children: (0, K.jsxs)(`div`, {
          className: I({ [no]: !0, [io]: a, [Bt]: s }),
          children: [
            !!c && (0, K.jsx)(`img`, { className: I(`R1REIT575ow-`), src: c }),
            (0, K.jsxs)(`div`, {
              className: ro,
              children: [
                (0, K.jsxs)(`div`, {
                  className: ao,
                  children: [s && `(VO) `, n],
                }),
                r &&
                  (0, K.jsx)(`div`, { className: `LURVMdGd1ko-`, children: r }),
              ],
            }),
            o !== void 0 &&
              (0, K.jsx)(`div`, { className: `rtSzZU-QRcY-`, children: o }),
          ],
        }),
      });
}
var is = class extends G.Component {
  render() {
    let e = Qo(this.props.bIsUpcoming, !1),
      t = $o(this.props.bIsUpcoming, !1);
    return (0, K.jsxs)(`div`, {
      className: $a,
      children: [
        (0, K.jsx)(`div`, {
          className: eo,
          children: L(`#EventCalendar_NewsChannels`),
        }),
        (0, K.jsx)(`div`, {
          className: to,
          children: e.map((e) => (0, K.jsx)(rs, { element: e }, e.key)),
        }),
        (0, K.jsx)(`div`, {
          className: eo,
          children: L(`#EventCalendar_NewsChannels_Global`),
        }),
        (0, K.jsx)(`div`, {
          className: to,
          children: t.map((e) => (0, K.jsx)(rs, { element: e }, e.key)),
        }),
      ],
    });
  }
};
is = P([f], is);
function as(e) {
  let { bIsUpcoming: t } = e,
    n = es(t, !1);
  return n && n.length > 0
    ? (0, K.jsxs)(`div`, {
        className: I($a, oo),
        children: [
          (0, K.jsx)(`div`, {
            className: eo,
            children: L(`#EventCalendar_NewsChannels_Discover`),
          }),
          (0, K.jsx)(`div`, {
            className: to,
            children: n.map((e) => (0, K.jsx)(rs, { element: e }, e.key)),
          }),
        ],
      })
    : null;
}
function os(e) {
  return e.BIsCollectionCalendar() && e.GetCollectionID() === `steam`;
}
var ss = t({
    AppBannerLogo: () => qs,
    AppIcon: () => us,
    CarouselMode: () => xc,
    ClanSource: () => Ys,
    CommentIcon: () => vc,
    CommentIconCtn: () => yc,
    CoverImageCtn: () => ms,
    DateAndSourceLine: () => Ts,
    DateAndTime: () => wc,
    EnableHovers: () => fs,
    EventCapsuleCtn: () => ec,
    EventName: () => Ws,
    EventSubTitle: () => Gs,
    EventSummaryDefault: () => sc,
    EventTitleCtn: () => Qs,
    EventType10: () => js,
    EventType11: () => Ms,
    EventType12: () => Us,
    EventType13: () => Fs,
    EventType14: () => Is,
    EventType15: () => Ls,
    EventType23: () => Ns,
    EventType28: () => As,
    EventType35: () => Ps,
    EventTypeAndDateCtn: () => Es,
    FallbackImage: () => Js,
    Footer: () => $s,
    FooterRightSide: () => mc,
    FooterStat: () => _c,
    FutureDateText: () => vs,
    GameCapsuleCtn: () => Ks,
    GameShortDescription: () => hs,
    GameSource: () => bs,
    GameTitleContainer: () => ls,
    HasVideo: () => Tc,
    LeaveRoomForReminder: () => Ds,
    LiveBroadcastPreview: () => tc,
    LiveNow: () => _s,
    LiveText: () => gs,
    LoadingTile: () => bc,
    MainContentContainer: () => zs,
    OnlyIcon: () => oc,
    Options: () => hc,
    PastDateText: () => ys,
    PatchIconCtn: () => Zs,
    RateIcon: () => dc,
    RecommendedSource: () => Cs,
    ReminderContainer: () => ac,
    SmallAppName: () => Os,
    Source: () => Ss,
    SourceList: () => xs,
    SourceRecommended: () => ws,
    SubTitleShown: () => Ec,
    Tile: () => Rs,
    TileBackgroundImage: () => nc,
    TileContainer: () => ps,
    TileCoverImagePlayable: () => rc,
    TileCoverLiveIcon: () => ic,
    TileImage: () => Vs,
    TileTextAppName: () => ds,
    TileTextCategoryType: () => ks,
    TileTextContainer: () => Hs,
    TileTextHeader: () => Xs,
    TileVideoIcon: () => Cc,
    TileViewerCount: () => gc,
    UpcomingMode: () => Sc,
    VideoPlayerReady: () => Dc,
    Vote_LimitedUser: () => lc,
    Vote_Negative: () => fc,
    Vote_NotLoggedIn: () => cc,
    Vote_Positive: () => uc,
    Vote_Ready: () => pc,
    YoutubePreviewImage: () => Bs,
    default: () => Oc,
    narrowWidth: () => cs,
  }),
  cs = `500px`,
  ls = `Zlty4OIYdk8-`,
  us = `go8QhZVoiDg-`,
  ds = `C2L2kTp8KYY-`,
  fs = `cJRhUD4vyks-`,
  ps = `JTFHmASEfjQ-`,
  ms = `lSYF-snjG-M-`,
  hs = `NH4KbTPWsVo-`,
  gs = `oKFVegN0DBM-`,
  _s = `b6-KxfcdLaA-`,
  vs = `fTNya0ypDaA-`,
  ys = `xsBu3BpyRkM-`,
  bs = `HcQu8--ilOI-`,
  xs = `Posg84PD4bE-`,
  Ss = `k2N88JaY6V0-`,
  Cs = `ZoGr1X5RSXM-`,
  ws = `EQ3XQ1YOQmQ-`,
  Ts = `C0xcw-dBN9k-`,
  Es = `IF22HifrVkU-`,
  Ds = `_6qTH13L4IdM-`,
  Os = `_3tNrYR8q4PM-`,
  ks = `ohvlfUuwWIg-`,
  As = `mo9oCL-5zMc-`,
  js = `ZN1vuColBC4-`,
  Ms = `icDmaRX1BV0-`,
  Ns = `optYdsri3U8-`,
  Ps = `_5zGVMek4WGM-`,
  Fs = `KdEmVjNtWfQ-`,
  Is = `LnEJdWlC4Ss-`,
  Ls = `NG3wNiIIJXs-`,
  Rs = `bOEXfqM27eQ-`,
  zs = `o-fQFsyOEMY-`,
  Bs = `q8QvDCYSn5E-`,
  Vs = `_1ZYmIx0m7bo-`,
  Hs = `OHAAoz1G1I4-`,
  Us = `k1akHy9HHzA-`,
  Ws = `SlFMYJwWSU4-`,
  Gs = `_9lDmRzgjqs4-`,
  Ks = `E-S8WDov49g-`,
  qs = `fzWS9zjHBQA-`,
  Js = `yI-XQCfZhjU-`,
  Ys = `zEB6Vo-lSoU-`,
  Xs = `hG0eaq6y-C8-`,
  Zs = `wdp2jpfiGas-`,
  Qs = `ym2tgXthxzw-`,
  $s = `KQCQvl8Sul0-`,
  ec = `iogiG-p5PHg-`,
  tc = `e2Xhb-5xMvY-`,
  nc = `TtzbM79RcOo-`,
  rc = `-y6T-NRjq1Q-`,
  ic = `_0hsSPkL5myo-`,
  ac = `-VpcmDHYJBs-`,
  oc = `_8hZf0ZZtftA-`,
  sc = `O79JneSzM9g-`,
  cc = `je6TW3nEJQQ-`,
  lc = `C-MokZjgv5M-`,
  uc = `Ba6BoHg0H10-`,
  dc = `bzgJpyO0RQM-`,
  fc = `-How-9UKQAA-`,
  pc = `EY35qqcJWWo-`,
  mc = `_79iz6FtxgOc-`,
  hc = `ozmBXi7xV-Y-`,
  gc = `zxaNRVKQnTM-`,
  _c = `CakmFSjnZaQ-`,
  vc = `Ilo9d6Bcf60-`,
  yc = `_2aS2MHSUX-U-`,
  bc = `D2jHVCUP6G0-`,
  xc = `_6IHSOcZWQTI-`,
  Sc = `i7ABr2eulso-`,
  Cc = `MVfZPnoopw0-`,
  wc = `ckxFzo4Jdqs-`,
  Tc = `_4wxMhjLGDEo-`,
  Ec = `h-oZBBAdgfo-`,
  Dc = `utI2vL1PRLs-`,
  Oc = {
    narrowWidth: cs,
    GameTitleContainer: ls,
    AppIcon: us,
    TileTextAppName: ds,
    EnableHovers: fs,
    TileContainer: ps,
    CoverImageCtn: ms,
    GameShortDescription: hs,
    LiveText: gs,
    LiveNow: _s,
    FutureDateText: vs,
    PastDateText: ys,
    GameSource: bs,
    SourceList: xs,
    Source: Ss,
    RecommendedSource: Cs,
    SourceRecommended: ws,
    DateAndSourceLine: Ts,
    EventTypeAndDateCtn: Es,
    LeaveRoomForReminder: Ds,
    SmallAppName: Os,
    TileTextCategoryType: ks,
    EventType28: As,
    EventType10: js,
    EventType11: Ms,
    EventType23: Ns,
    EventType35: Ps,
    EventType13: Fs,
    EventType14: Is,
    EventType15: Ls,
    Tile: Rs,
    MainContentContainer: zs,
    YoutubePreviewImage: Bs,
    TileImage: Vs,
    TileTextContainer: Hs,
    EventType12: Us,
    EventName: Ws,
    EventSubTitle: Gs,
    GameCapsuleCtn: Ks,
    AppBannerLogo: qs,
    FallbackImage: Js,
    ClanSource: Ys,
    TileTextHeader: Xs,
    PatchIconCtn: Zs,
    EventTitleCtn: Qs,
    Footer: $s,
    EventCapsuleCtn: ec,
    LiveBroadcastPreview: tc,
    TileBackgroundImage: nc,
    TileCoverImagePlayable: rc,
    TileCoverLiveIcon: ic,
    ReminderContainer: ac,
    OnlyIcon: oc,
    EventSummaryDefault: sc,
    Vote_NotLoggedIn: cc,
    Vote_LimitedUser: lc,
    Vote_Positive: uc,
    RateIcon: dc,
    Vote_Negative: fc,
    Vote_Ready: pc,
    FooterRightSide: mc,
    Options: hc,
    TileViewerCount: gc,
    FooterStat: _c,
    CommentIcon: vc,
    CommentIconCtn: yc,
    LoadingTile: bc,
    CarouselMode: xc,
    UpcomingMode: Sc,
    TileVideoIcon: Cc,
    DateAndTime: wc,
    HasVideo: Tc,
    SubTitleShown: Ec,
    VideoPlayerReady: Dc,
  },
  kc = f((e) => {
    let { eventModel: t, calendarEvent: n, history: r } = e,
      i = (e) => {
        let t = n.GetEntityName();
        jn(
          (0, K.jsx)(yn, {
            strTitle: L(`#EventCalendar_MuteApp_Title`, t),
            strDescription: L(`#EventCalendar_MuteApp_details`, t),
            onOK: () => v().UpdateEventBlockFromCalendarEvent(n, !1),
            children: (0, K.jsx)(`a`, {
              href: U.STORE_BASE_URL + `account/emailoptout/app`,
              target: U.IN_CLIENT ? void 0 : `_blank`,
              children: L(`#EventCalendar_ManageMutedSources`),
            }),
          }),
          mn(e),
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
              (0, K.jsx)(
                A,
                {
                  disabled: !0,
                  onSelected: () => {},
                  children: L(`#EventCalender_Reason_` + t),
                },
                `item-source-${n}-${t}`,
              ),
            ),
          e.push(
            (0, K.jsx)(
              A,
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
      l = xt(t, E.k_eStoreNewsHub, `allowRelative`),
      u = () => {
        l.startsWith(`http`) ? (window.location.href = l) : r.push(l);
      };
    return (0, K.jsx)(`div`, {
      className: I(_c, hc),
      onClick: (e) => {
        let r = [],
          l = n.GetSource(),
          d = n.unique_id,
          f = wn(),
          p = v();
        p.BIsGlobalCalendar() &&
          (l &&
            l & C.k_eLibrary &&
            (s().BIsGameSourceAllowed(S.k_ERecent) && n.appInfo
              ? (r.push(
                  (0, K.jsx)(
                    A,
                    {
                      disabled: !0,
                      onSelected: () => {},
                      children: L(
                        `#EventCalender_LastPlayed`,
                        lr(Rt.GetTimeNowWithOverride() - n.appInfo.last_played),
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
            (0, K.jsx)(
              A,
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
          z.logged_in &&
            (ae.Get().BIsEventBlocked(n)
              ? r.push(
                  (0, K.jsx)(
                    A,
                    {
                      onSelected: a,
                      children: (0, K.jsx)(Rn, {
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
                  (0, K.jsx)(
                    A,
                    {
                      onSelected: i,
                      children: (0, K.jsx)(Rn, {
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
            r.push((0, K.jsx)(Ac, { eventModel: t, calendarEvent: n })),
          p.BIsSingleSourceCalendar() ||
            r.push(
              (0, K.jsx)(
                A,
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
              (0, K.jsx)(
                A,
                {
                  onSelected: () =>
                    (window.location.href = Vn(
                      U.STORE_BASE_URL + `app/` + t.appid,
                    )),
                  children: L(`#EventDisplay_ViewStorePage`),
                },
                t.GID + `goto`,
              ),
            ),
          vn((0, K.jsx)(rr, { children: r }), e);
      },
      children: (0, K.jsx)(Dn, {}),
    });
  });
function Ac(e) {
  let { eventModel: t, calendarEvent: n } = e,
    r = de(t.clanSteamID.GetAccountID()),
    { elDialogElement: i, fnShowLogonDialog: a } = Ft(),
    o = G.useCallback(async () => {
      z.logged_in
        ? (await Dr.Get().UpdateFollowOrIgnoreCurator(t.clanSteamID, !0, !r),
          qi(!!r))
        : a();
    }, [r, t.clanSteamID, a]);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(
        A,
        {
          onSelected: o,
          children: (0, K.jsx)(Rn, {
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
var jc = c(kc);
function Mc(e) {
  let {
      eventModel: t,
      calendarEvent: n,
      bSuppressHoverEffects: r,
      mode: i,
      bHideGameTitle: a,
      fnOnClicked: o,
    } = e,
    [s, c] = G.useState(!1),
    l = _t(),
    u = ue(t.GetAppIDOrReferenceAppID());
  wr(u);
  let d = $t(t);
  Pr(n.clanInfo?.clanid);
  let f = H(U.LANGUAGE),
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
    [ie, ae] = G.useState(() => (D() && _ == 14 ? g.full : g.capsule_main)),
    oe = Qt(),
    se = en(x && S && d ? void 0 : t, p, f, ie, oe) ?? d,
    ce = Pc(t, i),
    le = hn(ee),
    de = ss[`EventType${_}`],
    fe = v.map((e) => ss[`Tag-${e}`]),
    pe = I(
      ps,
      de,
      h && `MVfZPnoopw0-`,
      r ? void 0 : fs,
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
  w === me && (me = void 0), w === b && (w = void 0);
  let he = ye(se),
    ge = (0, K.jsx)(Ic, {
      setVideoPlayerReady: c,
      calendarEvent: n,
      eventModel: t,
      mode: i,
      artworkType: p,
      strCapsuleImgURLForBackground: he,
      fnSetCoverSize: ae,
    }),
    _e = r && _ != 14 && !(s && i !== `carousel`),
    ve = _e && ge,
    be = !_e && ge,
    xe = _ !== 28 && _ !== 12 && Rt.GetTimeNowWithOverride() < C,
    T = i !== `wide` || r,
    Se =
      xe &&
      (0, K.jsx)(`div`, {
        className: I(`-VpcmDHYJBs-`, T && `_8hZf0ZZtftA-`),
        children: (0, K.jsx)(lt, {
          eventModel: t,
          lang: f,
          bShowStartTime: !0,
          bOnlyShowIcon: T,
          bExpandLeft: T,
        }),
      }),
    Ce = !!(_ !== 12 && me),
    we = !(!w || (Ce && Nc(w, me)));
  return (0, K.jsxs)(`div`, {
    className: pe,
    children: [
      (0, K.jsx)(te, { event: t, recordNewsHubStats: !0 }),
      (0, K.jsx)(St, {
        eventModel: t,
        route: E.k_eView,
        children: (0, K.jsxs)(`div`, {
          className: Rs,
          onClick: (e) => {
            l.RecordInteraction($e.k_eClickThrough),
              !wt() && (o(t), e.stopPropagation(), e.preventDefault());
          },
          children: [
            _ === 14 &&
              (0, K.jsx)(`div`, {
                className: I(`TtzbM79RcOo-`, x && `yI-XQCfZhjU-`),
                style: { backgroundImage: `url(${he})` },
              }),
            (0, K.jsxs)(`div`, {
              className: zs,
              children: [
                be,
                (0, K.jsxs)(`div`, {
                  className: Hs,
                  children: [
                    _ == 12 &&
                      (0, K.jsx)(`div`, {
                        className: `wdp2jpfiGas-`,
                        children: (0, K.jsx)(Kn, {}),
                      }),
                    (0, K.jsxs)(`div`, {
                      className: Qs,
                      children: [
                        ve,
                        !a &&
                          (0, K.jsxs)(`div`, {
                            className: `HcQu8--ilOI-`,
                            children: [
                              (0, K.jsx)(Rc, { ...e }),
                              n && (0, K.jsx)(Bc, { calendarEvent: n }),
                            ],
                          }),
                        (0, K.jsx)(`div`, { className: Ws, children: b }),
                        (0, K.jsxs)(`div`, {
                          className: Es,
                          children: [
                            (0, K.jsx)(`div`, {
                              className: I(ks, de),
                              children: y,
                            }),
                            (0, K.jsx)(zc, {
                              eventModel: t,
                              className: I(T && `_6qTH13L4IdM-`),
                            }),
                            T && Se,
                          ],
                        }),
                        we &&
                          (0, K.jsx)(`div`, {
                            className: `_9lDmRzgjqs4-`,
                            children: w,
                          }),
                        Ce &&
                          (0, K.jsx)(`div`, {
                            className: I(
                              `O79JneSzM9g-`,
                              w ? `h-oZBBAdgfo-` : ``,
                            ),
                            children: me,
                          }),
                      ],
                    }),
                    !T && Se,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, K.jsx)(Uc, { ...e }),
    ],
  });
}
function Nc(e, t) {
  let n = (e) => e.replace(/\W+/g, ``).toLocaleLowerCase(),
    r = n(e);
  return n(t).startsWith(r);
}
function Pc(e, t) {
  let { video_preview_type: n, video_preview_id: r, type: i } = e;
  return !(t === `upcoming` || !r || i === 12 || n !== `youtube`);
}
function Fc(e) {
  let { eventModel: t, fnSetVideoStateReady: n, mode: r } = e,
    { video_preview_id: i, type: a } = e.eventModel,
    o = _t(),
    s = H(U.LANGUAGE),
    c = D() && a == 14 ? g.full : g.capsule_main,
    l = Xt(t, `capsule`, s, c, !0);
  return r === `carousel`
    ? (0, K.jsx)(Rr, { altImgWithFallback: l, video: i, className: Bs })
    : (0, K.jsx)(zr, {
        video: i,
        altImgWithFallback: l,
        autoplay: !0,
        autopause: !0,
        showFullscreenBtn: !0,
        controls: !0,
        imageClassnames: Bs,
        onPlayerActivated: () => {
          o.RecordInteraction($e.k_ePlayedVideo), n(!0);
        },
        preloadYoutubeScripts: !0,
        playsInline: !0,
      });
}
function Ic(e) {
  let {
      eventModel: t,
      calendarEvent: n,
      mode: r,
      artworkType: i,
      strCapsuleImgURLForBackground: a,
      setVideoPlayerReady: o,
      fnSetCoverSize: s,
    } = e,
    c = H(U.LANGUAGE),
    l = Pc(t, r),
    u = !Pc(t, r) && r !== `upcoming`,
    [d, f, p, h, _, v] = m(() => [
      t.GetEventType(),
      t.has_live_stream,
      t.has_live_stream,
      t.clanSteamID.GetAccountID(),
      n.GetGameCapsule(),
      t.BImageNeedScreenshotFallback(i, c),
    ]);
  G.useEffect(() => {
    if (a) {
      let e = new Image();
      (e.src = a),
        (e.onerror = () => {
          s(g.full);
        });
    }
  }, [a, s]);
  let [, y] = Nr(h),
    b = y && !y.is_ogg,
    x = t.GetSummaryWithFallback(c);
  return (
    t.GetSubTitleWithLanguageFallback(c) === x && (x = void 0),
    (0, K.jsxs)(`div`, {
      className: ms,
      children: [
        l &&
          (0, K.jsx)(Fc, {
            eventModel: t,
            mode: r,
            calendarEvent: n,
            fnSetVideoStateReady: o,
          }),
        u &&
          (0, K.jsxs)(K.Fragment, {
            children: [
              d === 12 &&
                (0, K.jsxs)(K.Fragment, {
                  children: [
                    (0, K.jsx)(`div`, {
                      className: `E-S8WDov49g-`,
                      children: (0, K.jsx)(`div`, {
                        className: I({
                          "fzWS9zjHBQA-": !0,
                          "yI-XQCfZhjU-": v,
                          "zEB6Vo-lSoU-": b,
                        }),
                        style: { backgroundImage: `url(${_})` },
                      }),
                    }),
                    (0, K.jsx)(`div`, {
                      className: `NH4KbTPWsVo-`,
                      children: x,
                    }),
                  ],
                }),
              d !== 12 &&
                (0, K.jsxs)(`div`, {
                  className: I({ "iogiG-p5PHg-": !0, "e2Xhb-5xMvY-": p }),
                  children: [
                    (0, K.jsx)(`div`, {
                      className: I({
                        "_1ZYmIx0m7bo-": !0,
                        "yI-XQCfZhjU-": v,
                        "zEB6Vo-lSoU-": b,
                      }),
                      style: { backgroundImage: `url(${a})` },
                    }),
                    p && (0, K.jsx)(`div`, { className: `-y6T-NRjq1Q-` }),
                    f &&
                      (0, K.jsx)(`div`, {
                        className: `_0hsSPkL5myo-`,
                        children: L(`#home_page_live_broadcast`),
                      }),
                    p &&
                      (0, K.jsx)(`div`, {
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
var Lc = f((e) => {
    let {
        eventModel: t,
        calendarEvent: n,
        bSuppressHoverEffects: r,
        history: i,
      } = e,
      a = xt(t, E.k_eStoreNewsHub, `allowRelative`),
      o = (e) => {
        a.startsWith(`http`) ? (window.location.href = a) : i.push(a),
          e.stopPropagation(),
          e.preventDefault();
      },
      s = n.GetEntityName(),
      c = n.GetGameIcon(),
      l = I(ls, r ? void 0 : fs);
    return (0, K.jsx)(N, {
      children: (0, K.jsx)(`div`, {
        className: Xs,
        children: (0, K.jsxs)(`div`, {
          className: l,
          onClick: o,
          children: [
            (0, K.jsx)(`img`, { className: us, src: c }),
            (0, K.jsxs)(`div`, { className: ds, children: [s, ` `] }),
          ],
        }),
      }),
    });
  }),
  Rc = c(Lc),
  zc = f((e) => {
    let { eventModel: t, calendarEvent: n, className: r } = e,
      i = v().GetStoreInitializationTimestamp().getTime() / 1e3,
      a = t ? t.GetStartTimeAndDateUnixSeconds() : n.start_time,
      o = t && be(t.type) && t.GetEndTimeAndDateUnixSeconds();
    if (o && a < i && i < o) {
      let e = o - i,
        t = lr(e, !0);
      return (0, K.jsxs)(`div`, {
        className: I(gs, r),
        children: [
          (0, K.jsx)(rt, {
            rtFullDate: a,
            stylesmodule: ss,
            children: (0, K.jsx)(`div`, {
              className: _s,
              children: L(`#EventCalendar_LiveNow`),
            }),
          }),
          (0, K.jsx)(rt, {
            rtFullDate: o,
            stylesmodule: ss,
            children: L(`#EventCalendar_TimeLeft`, t),
          }),
        ],
      });
    }
    if (a < i) {
      let e = i - a,
        t = e < 86400 ? lr(e, !1, !0) : xr(a);
      return (0, K.jsx)(rt, {
        className: r,
        rtFullDate: a,
        stylesmodule: ss,
        children: (0, K.jsx)(`div`, { className: ys, children: t }),
      });
    }
    {
      let e = new Date(i * 1e3);
      e.setHours(0, 0, 0, 1);
      let t = e.getTime() / 1e3,
        n = Math.floor((a - t) / 86400),
        o = n > 1 && n <= 5 ? Ln(new Date(a * 1e3)) : xr(a),
        s = Fe(a);
      return (0, K.jsx)(rt, {
        className: r,
        rtFullDate: a,
        stylesmodule: ss,
        children: (0, K.jsx)(`div`, {
          className: vs,
          children: L(`#EventCalendar_WillStartAtDateTime`, o, s),
        }),
      });
    }
  }),
  Bc = f((e) => {
    let t = e.calendarEvent.GetSource(),
      n = [],
      r = v().m_visibilityStore;
    t & C.k_eLibrary && r.BIsGameSourceAllowed(S.k_ELibrary)
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
              styles: Cs,
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
        });
    let i = n.map((t, r) => {
      let i = e.calendarEvent.unique_id;
      return Vc(
        `item-source-${i}-${t.id}`,
        t.name,
        t.ttip,
        t.styles,
        r + 1 < n.length,
      );
    });
    return (0, K.jsx)(`div`, { className: xs, children: i });
  }),
  Vc = (e, t, n, r, i) =>
    (0, K.jsx)(
      Rn,
      {
        className: I(Ss, r),
        toolTipContent: L(n),
        children: L(t) + (i ? `, ` : ``),
      },
      e,
    );
function Hc(e) {
  return z.logged_in
    ? z.is_limited
      ? lc
      : e === `up`
        ? uc
        : e === `down`
          ? fc
          : pc
    : cc;
}
function Uc(e) {
  let { eventModel: t } = e,
    n = _t(),
    { myVote: r, Vote: i } = ct(t, { bAsk: !1 }),
    [, a] = Nr(t.clanSteamID.GetAccountID()),
    o = () => {
      r !== `up` && Ye() && (i(`up`), n.RecordInteraction($e.k_eThumbsUp));
    },
    s = () => {
      n.RecordInteraction($e.k_eDiscussions);
    },
    [c, l, u] = m(() => [
      Math.max(0, t.nVotesUp - t.nVotesDown),
      t.GetDiscussionURL(a?.vanity_url),
      t.nCommentCount,
    ]),
    d = Hc(r),
    f = !wn() && l,
    p = t.live_stream_viewer_count > 0 ? t.live_stream_viewer_count : void 0;
  return (0, K.jsx)(`div`, {
    className: $s,
    children: (0, K.jsxs)(`div`, {
      className: mc,
      children: [
        !!p && (0, K.jsx)(`div`, { className: `zxaNRVKQnTM-`, children: B(p) }),
        (0, K.jsxs)(`div`, {
          className: I(_c, void 0, d),
          onClick: o,
          children: [
            (0, K.jsx)(In, { className: dc }),
            (0, K.jsx)(`span`, { children: B(Number(c)) }),
          ],
        }),
        f &&
          (0, K.jsx)(`div`, {
            className: `CakmFSjnZaQ-`,
            children: (0, K.jsxs)(`a`, {
              href: l,
              className: `_2aS2MHSUX-U-`,
              target: `_blank`,
              onClick: s,
              children: [
                (0, K.jsx)(gr, { className: `Ilo9d6Bcf60-` }),
                (0, K.jsx)(`span`, { children: B(Number(u)) }),
              ],
            }),
          }),
        (0, K.jsx)(jc, { ...e }),
      ],
    }),
  });
}
function Wc(e, t, n) {
  let r = [];
  r.push(t.QueueLoadPartnerEvent(e.clanid, e.unique_id)),
    e.appid && r.push(R.Get().QueueAppRequest(e.appid, Gc)),
    e.clanInfo && r.push(W.LoadClanInfoForClanAccountID(e.clanInfo.clanid)),
    Promise.all(r).then(() => {
      let r = t.GetClanEventModel(e.unique_id);
      r && r.appid && r.appid != e.appid && !R.Get().BHasApp(r.appid, Gc)
        ? R.Get().QueueAppRequest(r.appid, Gc).then(n)
        : n();
    });
}
var Gc = { include_assets: !0, include_release: !0, include_screenshots: !0 };
function Kc(e, t) {
  let n = t.GetClanEventModel(e.unique_id);
  return !(
    !n ||
    (e.appid && !R.Get().BHasApp(e.appid, Gc)) ||
    (n.appid && n.appid != e.appid && !R.Get().BHasApp(n.appid, Gc)) ||
    (e.clanInfo && !W.HasLoadedClanAccountID(e.clanInfo.clanid))
  );
}
var qc = f((e) => {
    let {
        calendarEvent: t,
        partnerEventStore: n,
        mode: r,
        forceParentUpdate: i,
      } = e,
      a = `500px`,
      o = ss[`EventType${t.event_type}`],
      s = I(ps, o),
      c = r === `carousel`,
      l = Fn(
        {
          onEnter: () => {
            Wc(t, n, i);
          },
        },
        { rootMargin: `${a} 0px ${a} 0px` },
      );
    return (0, K.jsxs)(`div`, {
      className: s,
      ref: l,
      children: [
        (0, K.jsx)(`div`, {
          className: I(Rs, bc),
          children: c && (0, K.jsx)(O, {}),
        }),
        (0, K.jsx)(`div`, { className: $s }),
      ],
    });
  }),
  Jc = f((e) => {
    let { partnerEventStore: t, calendarEvent: n, ...r } = e,
      i = t.GetClanEventModel(n.unique_id),
      a = Kc(n, t),
      o = Tr();
    return a
      ? (0, K.jsx)(Mc, { eventModel: i, calendarEvent: n, ...r })
      : (0, K.jsx)(qc, {
          calendarEvent: n,
          partnerEventStore: t,
          ...r,
          forceParentUpdate: o,
        });
  }),
  Yc = `SWQ4gmR-Kcs-`,
  Xc = `izaCQUJJRYU-`,
  Zc = `podvtky5AYo-`,
  Qc = `rMEgGPCw-uA-`,
  $c = `_4wBEEK8xCqw-`,
  el = `Auch081N4Vk-`,
  tl = `SteamNewsHub_SuggestCuratorsDismissed`;
function nl() {
  let e = JSON.parse(localStorage.getItem(tl));
  return e && e.bDismissed;
}
function rl() {
  let e = Cn.GetELanguageFallbackOrder();
  e.find((e) => e === 0) === void 0 && e.push(0);
  let t = [];
  for (let n of e) {
    let e = X.Get().GetCuratorsForLang(n);
    if (!e) continue;
    let r = e.filter((e) => !Dr.Get().BIsIgnoringCurator(e.clanAccountID));
    On(r), t.push(...r);
  }
  return t;
}
function il(e) {
  let { bCanDismiss: t } = e,
    [n, r] = (0, G.useState)(() => nl()),
    [i, a] = (0, G.useState)(0),
    [o, s] = (0, G.useState)(null),
    c = (0, G.useRef)(void 0),
    l = Dt(`CuratorFeedSuggestRow`),
    u = (0, G.useCallback)(() => {
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
    ((0, G.useEffect)(() => u(), [u]),
    (0, G.useEffect)(
      () => (
        o ??
          (async () => {
            await X.Get().WaitForInitialLoad(), l.token.reason || s(rl);
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
    let t = W.GetClanInfoByClanAccountID(e.clanAccountID);
    return t
      ? (0, K.jsx)(
          `div`,
          {
            className: $c,
            children: (0, K.jsx)($i, { clanInfo: t, layout: `icon` }),
          },
          t.clanAccountID,
        )
      : null;
  });
  return (0, K.jsx)(N, {
    children: (0, K.jsx)(`div`, {
      className: Yc,
      children: (0, K.jsxs)(`div`, {
        className: Xc,
        children: [
          (0, K.jsx)(`div`, {
            className: Zc,
            children: L(`#EventCurator_FeedCaption_Long`),
          }),
          t &&
            (0, K.jsx)(`div`, {
              className: `dOIuQRkhLak-`,
              onClick: (e) => {
                jn(
                  (0, K.jsx)(yn, {
                    strTitle: L(`#EventCurator_DismissTitle`),
                    strDescription: L(`#EventCurator_DismissBody`),
                    onOK: () => {
                      localStorage.setItem(
                        tl,
                        JSON.stringify({ bDismissed: !0 }),
                      ),
                        l.token.reason || r(!0);
                    },
                  }),
                  mn(e),
                );
              },
              children: (0, K.jsx)(Sr, {}),
            }),
          (0, K.jsxs)(V, {
            className: Qc,
            ref: c,
            "flow-children": `row`,
            children: [
              d || (0, K.jsx)(O, {}),
              (0, K.jsx)(`div`, {
                className: el,
                onClick: Lo.Get().ShowBrowseCurator,
                children: L(`#EventCurator_BrowseMore`),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
var al = `_7wtqpIaQJlI-`,
  ol = `J1LSw12RNvU-`,
  sl = `Evh8j7It0bw-`,
  cl = `oD7LStihTaw-`,
  ll = `Du-T0LYtFw8-`,
  ul = (e) => {
    let {
        titleToken: t,
        subtitleToken: n,
        backgroundImg: r,
        headerImg: i,
        headerURL: a,
      } = e,
      o = r ? { backgroundImage: r } : {};
    return (0, K.jsx)(`div`, {
      className: I(void 0, al, e.largeHeader && `lxqRwnfggNE-`),
      style: o,
      children: (0, K.jsxs)(`div`, {
        className: I(ol, i ? void 0 : ll),
        children: [
          !!(a && i) &&
            (0, K.jsx)(`a`, {
              href: a,
              className: `i6-WbcT81F0-`,
              children: (0, K.jsx)(`img`, {
                className: `_9PhikteEvrs-`,
                src: i,
              }),
            }),
          !(!i || a) &&
            (0, K.jsx)(`div`, {
              className: `i6-WbcT81F0-`,
              children: (0, K.jsx)(`img`, {
                className: `_9PhikteEvrs-`,
                src: i,
              }),
            }),
          (0, K.jsxs)(`div`, {
            className: sl,
            children: [
              (0, K.jsx)(`div`, {
                className: cl,
                children: t.startsWith(`#`) ? L(t) : t,
              }),
              n &&
                (0, K.jsx)(`div`, {
                  className: `o1aL-5aRB7w-`,
                  children: n.startsWith(`#`) ? L(n) : n,
                }),
            ],
          }),
        ],
      }),
    });
  };
function dl(e) {
  let t = ie(e);
  return (
    mr(!!t, `Must define collection ` + e),
    {
      collection: e,
      smallHeight: 80,
      largeHeight: 200,
      component: (e, n, r) =>
        (0, K.jsx)(ul, {
          largeHeader: e,
          titleToken: t?.strHeaderTitle ?? ``,
          subtitleToken: t?.strHeaderSubtitle,
          headerImg: n,
          headerURL: r,
        }),
    }
  );
}
function fl(e, t) {
  if (!e) return 0;
  let n = vl().find((t) => t.collection === e);
  return n ? (t ? n.largeHeight : n.smallHeight) : 0;
}
function pl(e, t, n, r) {
  if (!e) return null;
  let i = vl().find((t) => t.collection === e);
  return i ? i.component(t, n, r) : null;
}
function ml(e, t) {
  return !e || !k.GetClanEventModel(e) ? 0 : t ? 200 : 80;
}
function hl(e, t) {
  if (!e) return null;
  let n = k.GetClanEventModel(e);
  return n ? (0, K.jsx)(gl, { bLargeHeader: t, eventModel: n }) : null;
}
function gl(e) {
  let { bLargeHeader: t, eventModel: n } = e,
    r = H(U.LANGUAGE),
    i = en(n, `capsule`, r, g.capsule_main);
  return (0, K.jsx)(ul, {
    largeHeader: t,
    titleToken: n.GetNameWithFallback(r) ?? ``,
    subtitleToken: n.GetSubTitleWithSummaryFallback(r),
    headerImg: i,
  });
}
var _l = null;
function vl() {
  return _l || ((_l = []), _l.push(dl(_.Press)), _l.push(dl(_.Halloween))), _l;
}
var yl = `_8cquMQJOr-c-`,
  bl = `yU9ZvjZaQZ4-`,
  xl = `czO-Paq-O-0-`,
  Sl = `gycNuT5NcpQ-`,
  Cl = `jcq6-nYn6P0-`,
  wl,
  Tl = class extends G.Component {
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
          ? (0, K.jsx)(`div`, {
              className: xl,
              children: (0, K.jsx)(`div`, { className: Sl, children: n }),
            })
          : null;
      let i = !!(r.appid === 0 && z.accountid);
      return (0, K.jsxs)(`div`, {
        className: xl,
        children: [
          (0, K.jsx)(`div`, {
            className: Cl,
            children: (0, K.jsx)(Yl, {
              calendarItem: r,
              bSuppressHoverEffects: t,
            }),
          }),
          i &&
            (0, K.jsx)(`div`, {
              className: `C9sbbTu0HGw-`,
              children: (0, K.jsx)(ge, { clanAccountID: r.clanid }),
            }),
        ],
      });
    }
  };
Tl = P([f], Tl);
var El = (wl = class extends G.Component {
  state = {
    bScreenIsWide: wl.IsWideScreen(),
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
    return wl.IsWideScreen() ? 3 : window.innerWidth > 700 ? 2 : 1;
  }
  OnResize() {
    this.setState({
      bScreenIsWide: wl.IsWideScreen(),
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
      (0, K.jsx)(
        Jc,
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
    return (0, K.jsxs)(`div`, {
      className: void 0,
      children: [
        (0, K.jsx)(Tl, {
          rgCalendarItems: e,
          bSuppressHoverEffects: n,
          strMultipleSourceTitle: i,
        }),
        (0, K.jsx)(`div`, {
          className: I(yl, `EventTileCarouselCtn`),
          children: (0, K.jsx)(Yt, {
            ...this.props,
            hideArrows: !0,
            visibleElements: Math.min(
              this.state.nMaxCapsulesPerRow,
              this.props.rgCalendarItems.length,
            ),
            className: bl,
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
P([F], El.prototype, `OnResize`, null), (El = wl = P([f], El));
var Dl = `g9t-2syJNnE-`,
  Ol = `_4O47-h0zJ1s-`,
  kl = `x1sf2kCIcTg-`,
  Al = `-mhlza7f4UU-`,
  jl = `wd8nzpJZvoU-`,
  Ml = `IuCiqaN3930-`,
  Nl = `Lvx9YqtBZ0M-`,
  Pl = `U-2BVq-0Ddc-`,
  Fl = `eNrYBw-D864-`,
  Il = (e) => {
    let t = [];
    return (
      U.SUPPORTED_LANGUAGES?.length
        ? (t = U.SUPPORTED_LANGUAGES.map((e) => e.localizedName))
        : t.push(L(`#Language_` + U.LANGUAGE)),
      (0, K.jsx)(`div`, { className: Nl, children: t.join(`, `) })
    );
  },
  Ll = (e) => {
    let t = `SteamNewsHub_LanguageDismissed`,
      [n, r] = G.useState(
        (() => {
          let e = JSON.parse(localStorage.getItem(t));
          return e && e.bDismissed;
        })(),
      );
    if (n || wn()) return null;
    let i = () => {
        r(!0), localStorage.setItem(t, JSON.stringify({ bDismissed: !0 }));
      },
      a = U.STORE_BASE_URL + `account/languagepreferences/`;
    return (0, K.jsx)(`div`, {
      className: Dl,
      children: (0, K.jsxs)(`div`, {
        className: Ol,
        children: [
          (0, K.jsx)(`div`, {
            className: Fl,
            onClick: i,
            children: (0, K.jsx)(Sr, {}),
          }),
          (0, K.jsxs)(`div`, {
            className: kl,
            children: [
              (0, K.jsx)(`div`, {
                className: Al,
                children: (0, K.jsx)(Un, {}),
              }),
              (0, K.jsxs)(`div`, {
                className: jl,
                children: [
                  (0, K.jsx)(`div`, {
                    className: Ml,
                    children: L(`#EventCalendar_NewsLanguage_Title`),
                  }),
                  (0, K.jsx)(Il, {}),
                  (0, K.jsx)(`div`, {
                    className: Pl,
                    children: En(
                      `#EventCalendar_NewsLanguage_Text`,
                      (0, K.jsx)(`a`, {
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
  Rl,
  zl,
  Bl = `global_header`;
function Q() {
  let e = document.getElementById(Bl);
  if (e && getComputedStyle(e).display != `none`) return e;
  let t = document.getElementsByClassName(`responsive_header`);
  return (
    mr(t.length <= 1, `Must have at most one responsive_header`),
    t.length == 1 ? t[0] : null
  );
}
function Vl() {
  let e = Q();
  return (e && e.id != Bl) || U.IN_MOBILE_WEBVIEW;
}
function Hl() {
  return Vl() || window.innerWidth < 1e3;
}
var $ = class extends G.Component {
  static {
    Rl = this;
  }
  state = {
    bUserIsLoggedIn: z.logged_in,
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
  m_cancelSignal = q.default.CancelToken.source();
  componentDidMount() {
    this.InitEventCalendarStore(),
      this.UpdateDocumentUI(),
      window.addEventListener(`resize`, this.OnResize),
      window.addEventListener(`scroll`, this.OnScroll),
      this.setState({ nVisibleHeight: window.innerHeight }),
      window.scrollTo(0, 0),
      this.UpdateEventControlLocationAndVisibility(),
      U.IN_MOBILE_WEBVIEW &&
        this.props.location &&
        this.props.history.length == 0 &&
        this.props.history.push(this.props.location),
      er();
  }
  componentDidUpdate(e, t) {
    (t.bUserIsLoggedIn != this.state.bUserIsLoggedIn ||
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
      this.UpdateEventControlLocationAndVisibility();
  }
  UpdateEventControlLocationAndVisibility() {
    if (this.props.location) {
      let e = Lo.Get().UpdateLocation(
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
    this.m_cancelSignal.cancel(`component unmounted`),
      window.removeEventListener(`resize`, this.OnResize),
      window.removeEventListener(`scroll`, this.OnScroll),
      this.UpdateBodyScrollState(!0);
    let e = Q();
    e && (e.style.transform = ``);
  }
  GetCurrentHubBannerHeight(e) {
    let t = e && !D();
    return v().GetCollectionID()
      ? fl(v().GetCollectionID(), t)
      : v().BIsSaleCalendar()
        ? ml(v().GetSaleID(), t)
        : v().BIsSingleSourceCalendar()
          ? parseInt(t ? ia : ra) - 1
          : 0;
  }
  BShowLogInBanner() {
    return !(this.state.bUserIsLoggedIn || !v().BIsGlobalCalendar());
  }
  GetCurrentHeaderHeights(e) {
    let t = Vl(),
      n = D(),
      r = 0;
    Q() && ((r = parseInt(t ? na : ta)), --r);
    let i = parseInt(n ? oa : aa) - 1,
      a = (t ? parseInt(sa) : 0) - 1,
      o = this.GetCurrentHubBannerHeight(e),
      s = 0;
    return (
      this.BShowLogInBanner() && (s = parseInt(e && !n ? ca : la)),
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
      let e = await k.LoadAdjacentPartnerEvents(null, null, T, 0, 1, {
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
      let [e, n] = t === `beta` ? [null, ve] : [T, null],
        r = await k.LoadAdjacentPartnerEvents(
          null,
          M.InitFromClanID(n, U.EUNIVERSE),
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
      let e = new M(n);
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
      e = R.Get().GetApp(t)?.GetName();
    } else if (n.BIsSingleGroupCalendar()) {
      let t = n.GetSingleGroupID(),
        r = t && W.GetClanInfoByClanAccountID(t);
      e = r && r.group_name;
    } else if (n.BIsCollectionCalendar()) {
      let t = n.GetCollectionID(),
        r = ie(t);
      e = r?.strHeaderTitle ?? r?.strName;
    } else if (n.BIsSaleCalendar()) {
      let r = k.GetClanEventModel(n.GetSaleID());
      if (r) {
        if (r.appid) e = R.Get().GetApp(r.appid)?.GetName();
        else {
          let t = r.clanSteamID?.GetAccountID(),
            n = t && W.GetClanInfoByClanAccountID(t);
          e = n && n.group_name;
        }
        t = r && r.GetNameWithFallback(H(U.LANGUAGE));
      }
    }
    let r = L(`#EventCalendar_TabTitle_Global`);
    e &&
      (r = t
        ? L(`#EventCalendar_TabTitle_GroupNameAndEventDetail`, e, t)
        : L(`#EventCalendar_TabTitle_GroupHub`, e)),
      document.title != r && (document.title = r),
      document.body.classList.contains(`events_hub`) ||
        document.body.classList.add(`events_hub`);
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
        (i = e.nHubBannerHeight), (a = e.nLogInBannerHeight);
      }
      let o = e - t.nScrollTop,
        s = Math.max(0, t.nAccumScrollUp - o),
        c = Math.max(0, t.nAccumScrollDown + o),
        l = t.nDisappearingHeaderTop,
        u = t.nDisappearingHeaderTop < 0;
      c > 80 && ((s = 0), (c = 0), (u = !0)),
        (s > 100 || r) && ((s = 0), (c = 0), (u = !1)),
        this.state.bControlBarIsCollapsed || (u = !1),
        t.modalEvent && (u = !0);
      let d = t.nSteamNavHeaderHeight + i + t.nMobileNavBannerHeight;
      if (((l = u ? -1 * d : 0), l !== t.nDisappearingHeaderTop)) {
        let e = Q();
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
    let r = !!(this.state.bUserIsLoggedIn && z.accountid),
      i = n.BIsGlobalCalendar() && r ? `local` : `session`,
      a = n.BIsGlobalCalendar() ? `U` + z.accountid : t;
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
      Rl.m_bInitialLoad)
    ) {
      let e = Tn(`metadatainfo`, `application_config`);
      n.SetCollectionMetaData(n.ValidateCollectionMetadata(e) ? e : null);
    }
    let s = Rl.m_bInitialLoad && Tn(`initialEvents`, `application_config`);
    s
      ? (await n.RegisterCalendarEventsAndModels(s), (Rl.m_bInitialLoad = !1))
      : await n.RegisterCalendarEventsAndModels({ success: 1 }),
      n.BIsSingleSourceCalendar() &&
        (n.BIsSingleAppCalendar()
          ? R.Get().QueueAppRequest(n.GetSingleAppID(), {
              include_assets: !0,
              include_platforms: !0,
              include_basic_info: !0,
              include_release: !0,
            })
          : W.LoadClanInfoForClanSteamID(
              M.InitFromClanID(n.GetSingleGroupID(), U.EUNIVERSE),
            )),
      this.OnResize();
  }
  UpdateBodyScrollState(e) {
    let t = !e && Vl(),
      n = document.body;
    n && (t ? n.classList.add(Da) : n.classList.remove(Da));
  }
  MobileNavOpenSettings() {
    this.ToggleControlBarCollapsed(), qo(!0);
  }
  ToggleControlBarCollapsed() {
    this.setState((e) => {
      let t = !e.bControlBarIsCollapsed,
        n = e.bControlBarIsCollapsed,
        r = t ? e.nDisappearingHeaderTop : 0,
        i = Q();
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
    let e = Q();
    e &&
      (e.style.transform = `translateY(${this.state.nDisappearingHeaderTop}px)`),
      this.props.history.action === `PUSH`
        ? this.props.history.goBack()
        : Ot(this.props.history, { emclan: void 0, emgid: void 0 });
  }
  async OnEventClicked(e) {
    this.props.tracker.RecordEventRead(e, 8);
    let t =
        this.state.nSteamNavHeaderHeight +
        this.state.nHubBannerHeight +
        this.state.nMobileNavBannerHeight,
      n = Q();
    n && (n.style.transform = `translateY(${-1 * t}px)`),
      Ot(this.props.history, {
        emclan: e.clanSteamID.ConvertTo64BitString(),
        emgid: e.GID,
      });
  }
  ToggleFutureView() {
    kt(
      this.props.history,
      `upcoming`,
      this.BShowFutureView() ? `false` : `true`,
    );
  }
  ResetAllFilters() {
    kt(this.props.history, `updates`, void 0),
      v().m_visibilityStore.InitDefaultCheckboxes(
        this.state.bUserIsLoggedIn,
        !1,
      );
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
      i = this.state.nVisibleHeight <= parseInt(ea),
      a = i
        ? 0
        : this.state.nDisappearingHeaderTop + this.state.nSteamNavHeaderHeight,
      o = i ? 0 : this.state.nDisappearingHeaderTop + e,
      s = v().m_visibilityStore.BAreAnyEventsFiltered(
        this.state.bUserIsLoggedIn,
      )
        ? this.ResetAllFilters
        : null;
    return (0, K.jsx)(G.Fragment, {
      children: (0, K.jsxs)(V, {
        className: I(Oa, this.state.bControlBarIsCollapsed ? ka : ``),
        "flow-children": `row`,
        children: [
          (0, K.jsx)(N, {
            children: this.state.modalEvent
              ? (0, K.jsx)(Ir, {
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
          (0, K.jsx)(N, {
            children: (0, K.jsx)(Jo, {
              bUserIsLoggedIn: this.state.bUserIsLoggedIn,
              nDisappearingHeaderVisibleHeight: a,
              bIsCollapsed: this.state.bControlBarIsCollapsed,
              bShowUpcoming: this.BShowFutureView(),
              bShouldIncludeLegalFooter: !Vl(),
              fnToggleCollapsed: this.ToggleControlBarCollapsed,
              fnOnFilterChange: this.OnControlBarChange,
            }),
          }),
          (0, K.jsx)(N, {
            children: (0, K.jsxs)(V, {
              className: I(
                Aa,
                !this.state.bControlBarIsCollapsed && `LH-GwC6nGI4-`,
              ),
              "flow-children": `column`,
              children: [
                (0, K.jsx)(N, {
                  children:
                    this.state.nLogInBannerHeight > 0 &&
                    (0, K.jsx)(Ql, {
                      nTopOffset: n,
                      bLargeMode: this.state.nScrollTop <= 0 && !D(),
                    }),
                }),
                (0, K.jsxs)(N, {
                  children: [
                    this.state.nMobileNavBannerHeight > 0 &&
                      (0, K.jsx)(ns, {
                        bIsUpcoming: this.BShowFutureView(),
                        nTopOffset: t,
                        fnToggleCollapsed: this.MobileNavOpenSettings,
                      }),
                    (0, K.jsx)(Wl, {
                      nTopOffset: r,
                      bLargeMode: this.state.nScrollTop <= 0 && !D(),
                    }),
                  ],
                }),
                (0, K.jsx)(N, {
                  children: (0, K.jsx)(Kl, {
                    bShowFutureViewOnly: this.BShowFutureView(),
                    bShowUpdatesOnly: this.BShowUpdatesOnly(),
                    fnOnEventClick: this.OnEventClicked,
                    fnToggleSeeFuture: this.ToggleFutureView,
                    fnResetFilters: s,
                    nVisibleHeight: this.state.nVisibleHeight,
                    nScrollTop: this.state.nScrollTop,
                    nDisappearingHeaderVisibleHeight: o,
                    bUserIsLoggedIn: !!(
                      this.state.bUserIsLoggedIn && z.accountid
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
P([F], $.prototype, `OnResize`, null),
  P([F], $.prototype, `OnScroll`, null),
  P([F], $.prototype, `MobileNavOpenSettings`, null),
  P([F], $.prototype, `ToggleControlBarCollapsed`, null),
  P([F], $.prototype, `OnControlBarChange`, null),
  P([F], $.prototype, `CloseEventModal`, null),
  P([F], $.prototype, `OnEventClicked`, null),
  P([F], $.prototype, `ToggleFutureView`, null),
  P([F], $.prototype, `ResetAllFilters`, null),
  ($ = Rl = P([f], $));
var Ul = c(function (e) {
  return (0, K.jsx)($, { ...e, tracker: kn() });
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
    [u, d] = G.useState(!1),
    f = H(U.LANGUAGE);
  if (
    (G.useEffect(() => {
      i &&
        n &&
        !k.GetClanEventModel(n) &&
        (d(!0),
        (async () => {
          let e = t.GetCollectionMetaData(),
            n = M.InitFromClanID(e.clanid, U.EUNIVERSE);
          await k.LoadPartnerEventFromClanEventGIDAndClanSteamID(
            n,
            e.clan_event_gid,
            0,
          ),
            d(!1);
        })());
    }, [t, i, n]),
    r)
  ) {
    let t;
    return (
      i && !u && (t = k.GetClanEventModel(n)),
      (0, K.jsx)(Gl, { ...e, collectionID: r, eventModel: t, language: f })
    );
  }
  if (a) {
    let t = hl(o, e.bLargeMode);
    if (!t) return null;
    let n = I(ua, pt);
    return (0, K.jsx)(`div`, {
      style: { transform: `translateY(${e.nTopOffset}px)` },
      className: n,
      children: t,
    });
  }
  if (s) {
    let t = I(
      ua,
      pt,
      e.bLargeMode && `mnYmd2J72yY-`,
      e.bLargeMode && `iBRlCPA5wLk-`,
    );
    return (0, K.jsx)(`div`, {
      style: { transform: `translateY(${e.nTopOffset}px)` },
      className: t,
      children: (0, K.jsx)(qe, { appId: c, clanId: l, bShowRSSFeed: !0 }),
    });
  }
  return null;
}
function Gl(e) {
  let { collectionID: t, language: n, eventModel: r } = e,
    i = en(r, `capsule`, n, g.capsule_main),
    a = nn(r) ?? void 0,
    o = pl(t, e.bLargeMode, i, a);
  if (!o) return null;
  let s = I(ua, pt);
  return (0, K.jsx)(`div`, {
    style: { transform: `translateY(${e.nTopOffset}px)` },
    className: s,
    children: o,
  });
}
var Kl = class extends G.Component {
  GetCurrentSectionLayout() {
    let e = 0;
    return v()
      .GetCalendarSections(this.props.bShowFutureViewOnly)
      .map((t) => {
        let n = Math.max(e, t.nTopOffset);
        return (e = n + t.nRenderedHeight), { section: t, nTopOfSection: n };
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
    if (z.accountid && fe()) {
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
    let l = D(),
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
                v = I(Fa, f && `SqY7DmeCIqo-`);
              g > 0 &&
                ((f = !f),
                p.nInlineOffset !== void 0 &&
                  n >= p.nInlineOffset &&
                  m === void 0 &&
                  (m = a));
              let y = !t && h;
              return (0, K.jsx)(
                tn,
                {
                  className: vo,
                  placeholderHeight: g,
                  rootMargin: `100% 0px 100% 0px`,
                  children: (0, K.jsx)(Xl, {
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
    m !== void 0 &&
      h.splice(
        m,
        0,
        (0, K.jsx)(
          il,
          { bCanDismiss: p.bInlineDismissable },
          `CuratorSuggestions`,
        ),
      ),
      e.GetCollectionID() === _.Press &&
        h.splice(0, 0, (0, K.jsx)(Ll, {}, `LanguageFeedRow`));
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
        (0, K.jsx)(
          Rn,
          {
            toolTipContent: L(`#EventCalendar_ResetFilters_ttip`),
            className: I(`_1-we0jg7skM-`, `j0zYlXH6S-E-`),
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
            (0, K.jsxs)(
              `div`,
              {
                className: `_1-we0jg7skM-`,
                onClick: i,
                children: [
                  L(`#EventCalendar_PastEventsLink`),
                  (0, K.jsx)(`span`, {
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
        (ee = (0, K.jsxs)(G.Fragment, {
          children: [
            (0, K.jsx)(
              `div`,
              {
                className: I(Ka, Ra),
                children: (0, K.jsxs)(`div`, {
                  className: void 0,
                  children: [` `, L(x), ` `],
                }),
              },
              `no-more-events`,
            ),
            p.bShowAtEnd &&
              (0, K.jsx)(il, { bCanDismiss: !1 }, `CuratorSuggestions`),
            S,
          ],
        })),
      (0, K.jsx)(`div`, {
        className: Ma,
        style: { transform: `translateY(${s - 1}px)` },
        children: (0, K.jsxs)(`div`, {
          className: Pa,
          children: [
            n &&
              (0, K.jsx)(`div`, {
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
Kl = P([f], Kl);
var ql = class extends G.Component {
  render() {
    let e = this.props.rgCalendarItems[0].start_time,
      t = v().GetCurrentlyLoadedEventCount(e);
    return this.props.rgCalendarItems.length <= 1
      ? null
      : (0, K.jsxs)(
          `div`,
          {
            className: qa,
            onClick: this.props.fnOnSeeFutureClick,
            children: [
              L(`#EventCalendar_FutureEventsLink`),
              (0, K.jsx)(`span`, {
                className: Ua,
                children: t.nCount + (t.bIsComplete ? `` : `+`),
              }),
            ],
          },
          `see-all-link`,
        );
  }
};
ql = P([f], ql);
var Jl = class extends G.Component {
  render() {
    let {
      rgCalendarItems: e,
      fnOnEventClick: t,
      fnOnSeeFutureClick: n,
      bSuppressHoverEffects: r,
    } = this.props;
    return !e || e.length == 0
      ? null
      : (0, K.jsx)(`div`, {
          className: Ra,
          children: (0, K.jsxs)(`div`, {
            className: I(Wa, `HorizontalTileCtn`),
            children: [
              (0, K.jsx)(V, {
                className: Ga,
                "flow-children": `row`,
                children: e.map((n) =>
                  (0, K.jsx)(
                    Jc,
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
              (0, K.jsx)(ql, { rgCalendarItems: e, fnOnSeeFutureClick: n }),
            ],
          }),
        });
  }
};
Jl = P([f], Jl);
var Yl = f((e) => {
    let { calendarItem: t, bSuppressHoverEffects: n } = e,
      r = k.GetClanEventModel(t.unique_id);
    return r
      ? (0, K.jsx)(`div`, {
          className: za,
          children: (0, K.jsx)(Rc, {
            eventModel: r,
            calendarEvent: t,
            bSuppressHoverEffects: n,
          }),
        })
      : null;
  }),
  Xl = (zl = class extends G.Component {
    m_ref = G.createRef();
    rtSectionStart = void 0;
    rtSectionEnd = void 0;
    constructor(e) {
      super(e),
        d(this),
        (this.rtSectionStart = e.rtSectionStart),
        (this.rtSectionEnd = e.rtSectionEnd);
    }
    componentDidMount() {
      this.UpdatePositioning();
    }
    componentDidUpdate() {
      this.UpdatePositioning(),
        (this.rtSectionStart = this.props.rtSectionStart),
        (this.rtSectionEnd = this.props.rtSectionEnd);
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
        zl.IsTimestampInRange(i.rtTime, t, n) && r.push(i.component);
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
            n.push(t), a.set(e, n);
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
            l.sort((e, t) =>
              t.score == e.score
                ? t.start_time - e.start_time
                : t.score - e.score,
            ),
              e.push(
                (0, K.jsx)(
                  `div`,
                  {
                    className: Ia,
                    children: (0, K.jsx)(`div`, {
                      className: La,
                      children: (0, K.jsx)(
                        El,
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
              a.delete(o);
            continue;
          }
        }
        e === o &&
          (this.AddTimestampEventsInInterval(
            l,
            Math.min(u, s.start_time),
            Math.max(u, s.start_time),
            o,
          ),
          (u = s.start_time)),
          e.push(
            (0, K.jsx)(
              `div`,
              {
                className: Ra,
                children: (0, K.jsx)(Jc, {
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
          );
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
        return (0, K.jsx)(`div`, { ref: this.m_ref, className: n });
      c.length && a && (c = c.slice().reverse());
      let u = null;
      c.length > 0 &&
        (u = (0, K.jsx)(`div`, {
          className: I(Ba, Ra, e && `_2QBIePCAKoY-`),
          children: (0, K.jsxs)(`div`, {
            className: Va,
            children: [
              (0, K.jsx)(`span`, { children: t }),
              (0, K.jsx)(`div`, { className: Ha }),
              r &&
                c.length > 3 &&
                (0, K.jsxs)(`div`, {
                  className: `QgcGWkkF5Is-`,
                  onClick: i,
                  children: [
                    L(`#EventCalendar_FutureEventsLink`),
                    (0, K.jsx)(`span`, {
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
            ? (0, K.jsx)(Jl, {
                rgCalendarItems: c.slice(0, 3),
                fnOnEventClick: o,
                fnOnSeeFutureClick: i,
                bSuppressHoverEffects: s,
              })
            : this.RenderEventList(c)),
        (0, K.jsxs)(`div`, {
          ref: this.m_ref,
          className: n,
          children: [
            u,
            f,
            !l &&
              !r &&
              (0, K.jsx)(Zl, {
                bShowEarliestFirst: this.props.bShowEarliestFirst,
              }),
          ],
        })
      );
    }
  });
P([n], Xl.prototype, `rtSectionStart`, void 0),
  P([n], Xl.prototype, `rtSectionEnd`, void 0),
  P([i], Xl.prototype, `cachedCalendarItems`, null),
  (Xl = zl = P([f], Xl));
var Zl = (e) => {
    let t = v().GetTimeEdgeForDirection(
      e.bShowEarliestFirst ? `forward` : `backward`,
      void 0,
    );
    return (0, K.jsxs)(`div`, {
      className: Na,
      children: [
        (0, K.jsx)(O, { size: `xlarge`, position: `center` }),
        t &&
          (0, K.jsxs)(G.Fragment, {
            children: [
              (0, K.jsx)(`div`, {
                className: `bCGiT56jHnw-`,
                children: L(
                  `#EventCalendar_LoadEventsProgress`,
                  Gn(Number(v().GetNumEventsLoaded())),
                  Jn(t),
                ),
              }),
              (0, K.jsx)(`div`, {
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
    return (0, K.jsxs)(`div`, {
      className: I(ja, !e.bLargeMode && `ZyWFq6-rPTk-`),
      style: { transform: `translateY(${e.nTopOffset}px)` },
      children: [
        (0, K.jsxs)(`div`, {
          className: ho,
          children: [
            (0, K.jsx)(`div`, {
              className: go,
              children: L(`#EventCalendar_SignIn_Title`),
            }),
            (0, K.jsx)(`button`, {
              onClick: n,
              className: _o,
              children: L(`#Login_SignIn`),
            }),
            (0, K.jsx)(`div`, {
              className: mo,
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
    return Cr(U.LANGUAGE)
      ? (0, K.jsx)(Tt, {
          bSalePage: !0,
          children: (0, K.jsxs)(o, {
            children: [
              (0, K.jsx)(a, {
                exact: !0,
                path: j.EventViewByApp(
                  `:appid(\\d+)`,
                  `:event_gid(\\d+)`,
                  `:vanity?`,
                ),
                render: (e) =>
                  (0, K.jsx)(
                    Di,
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
              (0, K.jsx)(a, {
                exact: !0,
                path: j.EventViewByGroup(
                  `:groupid(\\d+)`,
                  `:event_gid(\\d+)`,
                  `:vanity?`,
                ),
                render: (e) =>
                  (0, K.jsx)(
                    Di,
                    {
                      ...e,
                      clansteamid: new M(e.match.params.groupid),
                      event_gid: e.match.params.event_gid,
                      bInfiniteScroll: e.match.params.viewtype == `inline`,
                    },
                    `detailview_` + e.match.params.event_gid,
                  ),
              }),
              (0, K.jsx)(a, {
                exact: !0,
                path: j.OldAnnouncementViewByApp(
                  `:appid(\\d+)`,
                  `:announcement_gid(\\d+)`,
                  `:vanity?`,
                ),
                render: (e) =>
                  (0, K.jsx)(
                    Di,
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
              (0, K.jsx)(a, {
                exact: !0,
                path: j.OldAnnouncementViewByGroup(
                  `:groupid(\\d+)`,
                  `:announcement_gid(\\d+)`,
                  `:vanity?`,
                ),
                render: (e) =>
                  (0, K.jsx)(
                    Di,
                    {
                      ...e,
                      clansteamid: new M(e.match.params.groupid),
                      announcement_gid: e.match.params.announcement_gid,
                      bInfiniteScroll: e.match.params.viewtype == `old_inline`,
                    },
                    `detailoldview_` + e.match.params.announcement_gid,
                  ),
              }),
              (0, K.jsx)(a, {
                exact: !0,
                path: j.NewsHubApp(`:appid(\\d+)`, `:vanity?`),
                render: (e) =>
                  (0, K.jsx)(
                    Ul,
                    {
                      ...e,
                      filter_to_appids: [Number(e.match.params.appid)],
                      section_by_day: t,
                    },
                    e.match.params.appid,
                  ),
              }),
              (0, K.jsx)(a, {
                exact: !0,
                path: j.NewsHubGroup(`:groupid(\\d+)`, `:vanity?`),
                render: (e) =>
                  (0, K.jsx)(
                    Ul,
                    {
                      ...e,
                      filter_to_clanids: [Number(e.match.params.groupid)],
                      section_by_day: t,
                    },
                    e.match.params.groupid,
                  ),
              }),
              (0, K.jsx)(a, {
                exact: !0,
                path: j.NewsHubCollection(`:collectionid`, `:vanity?`),
                render: (e) =>
                  (0, K.jsx)(
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
              (0, K.jsx)(a, {
                exact: !0,
                path: j.NewsHubSale(`:saleid`, `:vanity?`),
                render: (e) =>
                  (0, K.jsx)(
                    Ul,
                    {
                      ...e,
                      filter_to_saleid: e.match.params.saleid,
                      section_by_day: t || n,
                    },
                    e.match.params.saleid,
                  ),
              }),
              (0, K.jsx)(a, {
                exact: !0,
                path: j.NewsHubContentHub(
                  `:hubtype`,
                  `:category_or_language?`,
                  `:tag_name?`,
                ),
                render: (e) =>
                  (0, K.jsx)(
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
              (0, K.jsx)(a, {
                exact: !0,
                path: j.NewsHub(),
                render: (e) =>
                  (0, K.jsx)(Ul, { ...e, section_by_day: t }, `global`),
              }),
            ],
          }),
        })
      : null;
  };
function eu(e) {
  if (e === `steam` && new URLSearchParams().get(`branch`) !== `beta`)
    return { rgHiddenClans: [ve] };
}
export { $l as default, Gr as i, Jr as n, Yr as r, qr as t };
