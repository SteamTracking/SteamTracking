/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  C as n,
  Dt as r,
  Ft as i,
  R as a,
  St as o,
  ot as s,
  w as c,
  xt as l,
} from "./chunk~01cfc309bf.js";
import {
  Ao as u,
  Bn as d,
  Gt as f,
  Hn as p,
  In as m,
  No as h,
  Vr as ee,
  Zo as te,
  _o as g,
  ar as _,
  gi as v,
  l as y,
  ni as ne,
  yo as re,
} from "./chunk~3f4314f3b4.js";
import { t as ie } from "./chunk~6eb508043a.js";
import { t as ae } from "./chunk~404eafa76f.js";
import { a as b, s as oe } from "./chunk~437071091c.js";
import { t as se } from "./chunk~eee3bbd4cd.js";
import { t as ce } from "./chunk~eefd71512b.js";
import {
  F as le,
  G as ue,
  K as de,
  R as fe,
  dt as x,
  z as pe,
} from "./chunk~05a38bc848.js";
import {
  It as S,
  Nt as me,
  gt as he,
  mt as ge,
  zt as _e,
} from "./chunk~77ea210942.js";
import {
  G as ve,
  K as ye,
  W as be,
  X as C,
  k as xe,
} from "./chunk~21cdc464a1.js";
import { t as w } from "./chunk~92931c6310.js";
import { o as T } from "./chunk~af36c62e9f.js";
import { t as Se } from "./chunk~37e5316e27.js";
import { i as E, n as Ce, r as D } from "./chunk~0111fcd096.js";
import { l as we, o as O, u as k } from "./chunk~ec644f97c6.js";
import { t as A } from "./chunk~9d71b14b50.js";
import {
  $i as j,
  $o as Te,
  Am as M,
  Cc as N,
  Ki as P,
  Oc as Ee,
  Ou as F,
  Sl as De,
  Tu as I,
  Vh as Oe,
  Wr as ke,
  Xs as L,
  Ys as Ae,
  Zl as je,
  _f as Me,
  bf as Ne,
  bm as R,
  bs as z,
  cu as Pe,
  df as Fe,
  f as Ie,
  gc as Le,
  il as Re,
  kp as ze,
  li as Be,
  mf as Ve,
  ml as He,
  mm as Ue,
  pd as We,
  qf as Ge,
  qs as Ke,
  rf as B,
  sd as qe,
  sf as Je,
  sp as Ye,
  th as V,
  ul as Xe,
  up as Ze,
  vm as Qe,
  xf as $e,
  ym as H,
  zs as et,
} from "./main.js";
import { Q as tt, S as nt } from "./chunk~750c562b0a.js";
import { c as rt, s as it } from "./chunk~cadb22900a.js";
import { i as at, n as ot, t as st } from "./chunk~f17215eefb.js";
import { r as ct } from "./chunk~eb66d0e2b2.js";
import {
  a as U,
  c as W,
  i as lt,
  l as G,
  o as ut,
  r as dt,
  s as ft,
  t as pt,
} from "./chunk~dd13412f72.js";
var K = e(i()),
  mt = class e {
    m_mapConferences = a.map();
    GetConferenceInfo(e) {
      return this.m_mapConferences.get(e);
    }
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    async Init() {
      let e = Ue(`conferenceinfo`, `application_config`);
      if (this.ValidateStoreDefault(e)) {
        let t = V(H.LANGUAGE),
          n = at(e.clan_faq_about_page),
          r = ot.Get().GetFAQPublishedContent(n, t),
          i = {
            strConferenceID: e.vanity,
            rtStartTime: e.start_rtime,
            rtEndTime: e.end_rtime,
            clanSteamID: new M(e.event_group_steamid),
            broadcastSteamID: new M(e.broadcast_steamid),
            bPartnerOnly: e.partner_only,
            faqAboutPage: r,
            strLocalizedLogos: null,
            strLocalizedMobileLogos: null,
            globalQandASessionID: e.global_qanda_session_id,
            youtubeVideoID: e.youtubeVideoID,
          };
        this.m_mapConferences.set(e.vanity, i);
        let a = await h(e.localized_logo, t, r?.timestamp),
          o = await h(e.localized_mobile_logo, t, r?.timestamp);
        this.m_mapConferences.set(e.vanity, {
          ...i,
          strLocalizedLogos: typeof a == `string` ? [a] : a,
          strLocalizedMobileLogos: typeof o == `string` ? [o] : o,
        });
      }
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && typeof t == `object`
        ? typeof t.event_group_steamid == `string` &&
            typeof t.start_rtime == `number` &&
            typeof t.end_rtime == `number`
        : !1;
    }
  },
  ht = `rSAA9RImaO0-`,
  q = s();
function gt(e) {
  let { conferenceInfo: t } = e,
    n = t.broadcastSteamID.ConvertTo64BitString();
  return (0, q.jsx)(F, {
    children: (0, q.jsx)(se, {
      steamIDBroadcast: n,
      watchLocation: 5,
      bStartMuted: !0,
    }),
  });
}
function _t(e) {
  let { conferenceInfo: t } = e,
    n = c(() => t.broadcastSteamID.ConvertTo64BitString());
  return (0, q.jsx)(`div`, {
    className: I(ht, e.className ? `${e.className}` : ``),
    children: (0, q.jsx)(F, {
      children: (0, q.jsx)(tt, {
        emoticonStore: it,
        watchLocation: 5,
        steamID: n,
        globalChat: !0,
        bPartnerMemberOnlyChat: t.bPartnerOnly,
        bInvertLayout: !0,
      }),
    }),
  });
}
function vt(e) {
  let { conferenceInfo: t } = e,
    [n, r] = K.useState(!1);
  return n
    ? null
    : (0, q.jsxs)(`div`, {
        className: nt,
        children: [
          (0, q.jsx)(ae, {
            steamIDBroadcast: t.broadcastSteamID.ConvertTo64BitString(),
            OnPreventPopup: () => r(!0),
          }),
          (0, q.jsx)(gt, { conferenceInfo: t }),
        ],
      });
}
function yt(e) {
  let { conferenceInfo: t } = e;
  return null;
}
var bt = class e {
    m_inFlight = null;
    async LoadInitialCalendarData(e, t) {
      return (
        (this.m_inFlight ||= this.InternalLoadInitialCalendarData(e, t)),
        this.m_inFlight
      );
    }
    async InternalLoadInitialCalendarData(e, t) {
      ut({ collectionid: t, bSectionByDay: !0, rtCalendarEnd: e });
      let n = U(),
        r = Ue(`conference_calendar`, `application_config`);
      (r && (await n.RegisterCalendarEventsAndModels(r)),
        n.SetFilteredView((e) => !0));
    }
    static m_singleton;
    static Get() {
      return ((e.m_singleton ||= new e()), e.m_singleton);
    }
    constructor() {}
  },
  J = t({
    AppBannerLogo: () => nn,
    AppIcon: () => St,
    CarouselMode: () => An,
    ClanSource: () => an,
    CommentIcon: () => Dn,
    CommentIconCtn: () => On,
    CoverImageCtn: () => Tt,
    DateAndSourceLine: () => Ft,
    DateAndTime: () => Nn,
    EnableHovers: () => X,
    EventCapsuleCtn: () => un,
    EventName: () => $t,
    EventSubTitle: () => en,
    EventSummaryDefault: () => _n,
    EventTitleCtn: () => cn,
    EventType10: () => Vt,
    EventType11: () => Ht,
    EventType12: () => Qt,
    EventType13: () => Gt,
    EventType14: () => Kt,
    EventType15: () => qt,
    EventType23: () => Ut,
    EventType28: () => Bt,
    EventType35: () => Wt,
    EventTypeAndDateCtn: () => It,
    FallbackImage: () => rn,
    Footer: () => ln,
    FooterRightSide: () => wn,
    FooterStat: () => $,
    FutureDateText: () => Z,
    GameCapsuleCtn: () => tn,
    GameShortDescription: () => Et,
    GameSource: () => At,
    GameTitleContainer: () => Y,
    HasVideo: () => Pn,
    LeaveRoomForReminder: () => Lt,
    LiveBroadcastPreview: () => dn,
    LiveNow: () => Ot,
    LiveText: () => Dt,
    LoadingTile: () => kn,
    MainContentContainer: () => Yt,
    OnlyIcon: () => gn,
    Options: () => Tn,
    PastDateText: () => kt,
    PatchIconCtn: () => sn,
    RateIcon: () => xn,
    RecommendedSource: () => Nt,
    ReminderContainer: () => hn,
    SmallAppName: () => Rt,
    Source: () => Mt,
    SourceList: () => jt,
    SourceRecommended: () => Pt,
    SubTitleShown: () => Fn,
    Tile: () => Jt,
    TileBackgroundImage: () => fn,
    TileContainer: () => wt,
    TileCoverImagePlayable: () => pn,
    TileCoverLiveIcon: () => mn,
    TileImage: () => Xt,
    TileTextAppName: () => Ct,
    TileTextCategoryType: () => zt,
    TileTextContainer: () => Zt,
    TileTextHeader: () => on,
    TileVideoIcon: () => Mn,
    TileViewerCount: () => En,
    UpcomingMode: () => jn,
    VideoPlayerReady: () => In,
    Vote_LimitedUser: () => yn,
    Vote_Negative: () => Sn,
    Vote_NotLoggedIn: () => vn,
    Vote_Positive: () => bn,
    Vote_Ready: () => Cn,
    YoutubePreviewImage: () => Q,
    default: () => Ln,
    narrowWidth: () => xt,
  }),
  xt = `500px`,
  Y = `Zlty4OIYdk8-`,
  St = `go8QhZVoiDg-`,
  Ct = `C2L2kTp8KYY-`,
  X = `cJRhUD4vyks-`,
  wt = `JTFHmASEfjQ-`,
  Tt = `lSYF-snjG-M-`,
  Et = `NH4KbTPWsVo-`,
  Dt = `oKFVegN0DBM-`,
  Ot = `b6-KxfcdLaA-`,
  Z = `fTNya0ypDaA-`,
  kt = `xsBu3BpyRkM-`,
  At = `HcQu8--ilOI-`,
  jt = `Posg84PD4bE-`,
  Mt = `k2N88JaY6V0-`,
  Nt = `ZoGr1X5RSXM-`,
  Pt = `EQ3XQ1YOQmQ-`,
  Ft = `C0xcw-dBN9k-`,
  It = `IF22HifrVkU-`,
  Lt = `_6qTH13L4IdM-`,
  Rt = `_3tNrYR8q4PM-`,
  zt = `ohvlfUuwWIg-`,
  Bt = `mo9oCL-5zMc-`,
  Vt = `ZN1vuColBC4-`,
  Ht = `icDmaRX1BV0-`,
  Ut = `optYdsri3U8-`,
  Wt = `_5zGVMek4WGM-`,
  Gt = `KdEmVjNtWfQ-`,
  Kt = `LnEJdWlC4Ss-`,
  qt = `NG3wNiIIJXs-`,
  Jt = `bOEXfqM27eQ-`,
  Yt = `o-fQFsyOEMY-`,
  Q = `q8QvDCYSn5E-`,
  Xt = `_1ZYmIx0m7bo-`,
  Zt = `OHAAoz1G1I4-`,
  Qt = `k1akHy9HHzA-`,
  $t = `SlFMYJwWSU4-`,
  en = `_9lDmRzgjqs4-`,
  tn = `E-S8WDov49g-`,
  nn = `fzWS9zjHBQA-`,
  rn = `yI-XQCfZhjU-`,
  an = `zEB6Vo-lSoU-`,
  on = `hG0eaq6y-C8-`,
  sn = `wdp2jpfiGas-`,
  cn = `ym2tgXthxzw-`,
  ln = `KQCQvl8Sul0-`,
  un = `iogiG-p5PHg-`,
  dn = `e2Xhb-5xMvY-`,
  fn = `TtzbM79RcOo-`,
  pn = `-y6T-NRjq1Q-`,
  mn = `_0hsSPkL5myo-`,
  hn = `-VpcmDHYJBs-`,
  gn = `_8hZf0ZZtftA-`,
  _n = `O79JneSzM9g-`,
  vn = `je6TW3nEJQQ-`,
  yn = `C-MokZjgv5M-`,
  bn = `Ba6BoHg0H10-`,
  xn = `bzgJpyO0RQM-`,
  Sn = `-How-9UKQAA-`,
  Cn = `EY35qqcJWWo-`,
  wn = `_79iz6FtxgOc-`,
  Tn = `ozmBXi7xV-Y-`,
  En = `zxaNRVKQnTM-`,
  $ = `CakmFSjnZaQ-`,
  Dn = `Ilo9d6Bcf60-`,
  On = `_2aS2MHSUX-U-`,
  kn = `D2jHVCUP6G0-`,
  An = `_6IHSOcZWQTI-`,
  jn = `i7ABr2eulso-`,
  Mn = `MVfZPnoopw0-`,
  Nn = `ckxFzo4Jdqs-`,
  Pn = `_4wxMhjLGDEo-`,
  Fn = `h-oZBBAdgfo-`,
  In = `utI2vL1PRLs-`,
  Ln = {
    narrowWidth: xt,
    GameTitleContainer: Y,
    AppIcon: St,
    TileTextAppName: Ct,
    EnableHovers: X,
    TileContainer: wt,
    CoverImageCtn: Tt,
    GameShortDescription: Et,
    LiveText: Dt,
    LiveNow: Ot,
    FutureDateText: Z,
    PastDateText: kt,
    GameSource: At,
    SourceList: jt,
    Source: Mt,
    RecommendedSource: Nt,
    SourceRecommended: Pt,
    DateAndSourceLine: Ft,
    EventTypeAndDateCtn: It,
    LeaveRoomForReminder: Lt,
    SmallAppName: Rt,
    TileTextCategoryType: zt,
    EventType28: Bt,
    EventType10: Vt,
    EventType11: Ht,
    EventType23: Ut,
    EventType35: Wt,
    EventType13: Gt,
    EventType14: Kt,
    EventType15: qt,
    Tile: Jt,
    MainContentContainer: Yt,
    YoutubePreviewImage: Q,
    TileImage: Xt,
    TileTextContainer: Zt,
    EventType12: Qt,
    EventName: $t,
    EventSubTitle: en,
    GameCapsuleCtn: tn,
    AppBannerLogo: nn,
    FallbackImage: rn,
    ClanSource: an,
    TileTextHeader: on,
    PatchIconCtn: sn,
    EventTitleCtn: cn,
    Footer: ln,
    EventCapsuleCtn: un,
    LiveBroadcastPreview: dn,
    TileBackgroundImage: fn,
    TileCoverImagePlayable: pn,
    TileCoverLiveIcon: mn,
    ReminderContainer: hn,
    OnlyIcon: gn,
    EventSummaryDefault: _n,
    Vote_NotLoggedIn: vn,
    Vote_LimitedUser: yn,
    Vote_Positive: bn,
    RateIcon: xn,
    Vote_Negative: Sn,
    Vote_Ready: Cn,
    FooterRightSide: wn,
    Options: Tn,
    TileViewerCount: En,
    FooterStat: $,
    CommentIcon: Dn,
    CommentIconCtn: On,
    LoadingTile: kn,
    CarouselMode: An,
    UpcomingMode: jn,
    TileVideoIcon: Mn,
    DateAndTime: Nn,
    HasVideo: Pn,
    SubTitleShown: Fn,
    VideoPlayerReady: In,
  };
function Rn(e) {
  let { closeModal: t } = e;
  return (0, q.jsx)(P, {
    strTitle: B(`#EventCalendar_GameSource_UnhideCuratorsDialog_Title`),
    strDescription: B(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_Description`,
    ),
    strOKButtonText: B(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton`,
    ),
    strCancelButtonText: B(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton`,
    ),
    onOK: () => {
      (U().m_visibilityStore.SetGameSourceAllowed(W.k_ECurator, !0), t && t());
    },
    onCancel: () => {
      (U().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(!0),
        t && t());
    },
  });
}
function zn(e) {
  e ||
    (lt() &&
      (U().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
        U().m_visibilityStore.BIsGameSourceAllowed(W.k_ECurator) ||
        j((0, q.jsx)(Rn, {}), window)));
}
var Bn = n((e) => {
  let { eventModel: t, calendarEvent: n, history: r } = e,
    i = (e) => {
      let t = n.GetEntityName();
      j(
        (0, q.jsx)(P, {
          strTitle: B(`#EventCalendar_MuteApp_Title`, t),
          strDescription: B(`#EventCalendar_MuteApp_details`, t),
          onOK: () => U().UpdateEventBlockFromCalendarEvent(n, !1),
          children: (0, q.jsx)(`a`, {
            href: H.STORE_BASE_URL + `account/emailoptout/app`,
            target: H.IN_CLIENT ? void 0 : `_blank`,
            children: B(`#EventCalendar_ManageMutedSources`),
          }),
        }),
        qe(e),
      );
    },
    a = () => {
      U().UpdateEventBlockFromCalendarEvent(n, !0);
    },
    o = () => {
      let e = s().MapClanEventTypeToGroup(t.GetEventType());
      s().SetEventTypeGroupAllowed(e, !1);
    },
    s = () => U().m_visibilityStore,
    c = (e, t, n, r = !0) => {
      s().BIsGameSourceAllowed(t) &&
        (r &&
          e.push(
            (0, q.jsx)(
              L,
              {
                disabled: !0,
                onSelected: () => {},
                children: B(`#EventCalender_Reason_` + t),
              },
              `item-source-${n}-${t}`,
            ),
          ),
        e.push(
          (0, q.jsx)(
            L,
            {
              onSelected: () => {
                s().SetGameSourceAllowed(t, !1);
              },
              children: B(`#EventCalender_Hide_Reason_` + t),
            },
            `item-hidesource-${n}-${t}`,
          ),
        ));
    },
    l = C(t, ve.k_eStoreNewsHub, `allowRelative`),
    u = () => {
      l.startsWith(`http`) ? (window.location.href = l) : r.push(l);
    };
  return (0, q.jsx)(`div`, {
    className: I($, Tn),
    onClick: (e) => {
      let r = [],
        l = n.GetSource(),
        d = n.unique_id,
        f = Ge(),
        p = U();
      (p.BIsGlobalCalendar() &&
        (l &&
          l & G.k_eLibrary &&
          (s().BIsGameSourceAllowed(W.k_ERecent) && n.appInfo
            ? (r.push(
                (0, q.jsx)(
                  L,
                  {
                    disabled: !0,
                    onSelected: () => {},
                    children: B(
                      `#EventCalender_LastPlayed`,
                      $e(Ce.GetTimeNowWithOverride() - n.appInfo.last_played),
                    ),
                  },
                  `item-source-${d}-lastplayed`,
                ),
              ),
              c(r, W.k_ERecent, d, !1))
            : c(r, W.k_ELibrary, d)),
        l && l & G.k_eWishlist && c(r, W.k_EWishlist, d),
        l && l & G.k_eFollowing && c(r, W.k_EFollowing, d),
        !f && l && l & G.k_eCurator && c(r, W.k_ECurator, d),
        l && l & G.k_eRecommended && c(r, W.k_ERecommended, d),
        l && l & G.k_eSteam && c(r, W.k_ESteam, d),
        l && l & G.k_eFeatured && c(r, W.k_EFeatured, d)),
        r.push(
          (0, q.jsx)(
            L,
            {
              onSelected: o,
              children: B(
                `#EVentCalendar_Hide_EventType`,
                B(
                  `#EventCalendar_EventTypeGroup_` +
                    s().MapClanEventTypeToGroup(t.GetEventType()),
                ),
              ),
            },
            t.GID + `hidetype`,
          ),
        ),
        R.logged_in &&
          (ft.Get().BIsEventBlocked(n)
            ? r.push(
                (0, q.jsx)(
                  L,
                  {
                    onSelected: a,
                    children: (0, q.jsx)(z, {
                      toolTipContent: B(`#EventCalendar_UnMuteApp_ttip`),
                      children: B(
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
                  L,
                  {
                    onSelected: i,
                    children: (0, q.jsx)(z, {
                      toolTipContent: B(`#EventCalendar_MuteApp_ttip`),
                      children: B(
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
          r.push((0, q.jsx)(Vn, { eventModel: t, calendarEvent: n })),
        p.BIsSingleSourceCalendar() ||
          r.push(
            (0, q.jsx)(
              L,
              {
                onSelected: u,
                children: B(
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
              L,
              {
                onSelected: () =>
                  (window.location.href = et(
                    H.STORE_BASE_URL + `app/` + t.appid,
                  )),
                children: B(`#EventDisplay_ViewStorePage`),
              },
              t.GID + `goto`,
            ),
          ),
        Ke((0, q.jsx)(Ae, { children: r }), e));
    },
    children: (0, q.jsx)(Re, {}),
  });
});
function Vn(e) {
  let { eventModel: t, calendarEvent: n } = e,
    r = f(t.clanSteamID.GetAccountID()),
    { elDialogElement: i, fnShowLogonDialog: a } = v(),
    o = K.useCallback(async () => {
      R.logged_in
        ? (await _.Get().UpdateFollowOrIgnoreCurator(t.clanSteamID, !0, !r),
          zn(!!r))
        : a();
    }, [r, t.clanSteamID, a]);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(
        L,
        {
          onSelected: o,
          children: (0, q.jsx)(z, {
            toolTipContent: B(
              r
                ? `#EventCalendar_UnFollowCurator_ttip`
                : `#EventCalendar_FollowCurator_ttip`,
            ),
            children: B(
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
var Hn = r(Bn),
  Un = `slvPA8f0gLM-`,
  Wn = `kcXPMd3IHiw-`,
  Gn = (e) => {
    let t = [`maxresdefault`, `mqdefault`, `default`],
      [n, r] = K.useState(0);
    K.useEffect(() => r(0), [e.video]);
    let i = K.useRef(null);
    if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
      return (0, q.jsx)(g, {
        className: e.className,
        srcs: e.altImgWithFallback,
      });
    if (e.altImg)
      return (0, q.jsx)(`img`, { src: e.altImg, className: e.className });
    {
      let a = `https://img.youtube.com/vi/` + e.video + `/` + t[n] + `.jpg`,
        o = () => {
          n + 1 < t.length && r(n + 1);
        };
      return (0, q.jsx)(`img`, {
        ref: i,
        onLoad: () => {
          i.current && i.current.naturalHeight < 91 && o();
        },
        onError: o,
        src: a,
        className: I(Un, e.className),
      });
    }
  },
  Kn = (e) => {
    let [t, n] = K.useState(!1);
    pe(!!e.preloadYoutubeScripts);
    let r = de(`youtube`);
    return !t || !r
      ? (0, q.jsxs)(`div`, {
          className: I(`YoutubePreviewContainer`, Un, e.imageClassnames),
          onClick: r
            ? (t) => {
                (e.onPlayerActivated && e.onPlayerActivated(),
                  n(!0),
                  t.stopPropagation(),
                  t.preventDefault());
              }
            : void 0,
          children: [
            (0, q.jsx)(Gn, {
              className: `YoutubePreviewImage`,
              altImgWithFallback: e.altImgWithFallback,
              altImg: e.altImg,
              video: e.video,
            }),
            r &&
              (0, q.jsxs)(q.Fragment, {
                children: [
                  (0, q.jsx)(`div`, {
                    className: `YoutubePreviewPlay`,
                    children: (0, q.jsx)(Pe, {}),
                  }),
                  (0, q.jsx)(`div`, {
                    className: `VideoHintText`,
                    children: B(`#EventCalendar_WatchYouTubeVideo`),
                  }),
                ],
              }),
          ],
        })
      : (0, q.jsx)(fe, { ...e, classnames: I(Wn, e.classnames) });
  };
function qn(e) {
  let {
      eventModel: t,
      calendarEvent: n,
      bSuppressHoverEffects: r,
      mode: i,
      bHideGameTitle: a,
      fnOnClicked: o,
    } = e,
    [s, l] = K.useState(!1),
    f = _e(),
    m = te(t.GetAppIDOrReferenceAppID());
  ze(m);
  let h = p(t);
  oe(n.clanInfo?.clanid);
  let g = V(H.LANGUAGE),
    _ = `capsule`,
    [v, y, ne, ie, ae, b, se, ce, le, de, fe] = c(() => [
      t.has_live_stream,
      t.GetEventType(),
      t.GetAllTags(),
      t.GetCategoryAsString(),
      t.GetNameWithFallback(g),
      t.BImageNeedScreenshotFallback(_, g),
      t.appid,
      t.GID,
      t.GetStartTimeAndDateUnixSeconds(),
      t.GetSubTitleWithLanguageFallback(g),
      t.GetSummaryWithFallback(g),
    ]),
    [x, pe] = K.useState(() => (re() && y == 14 ? u.full : u.capsule_main)),
    he = ue(),
    ge = d(b && se && h ? void 0 : t, _, g, x, he) ?? h,
    C = Yn(t, i),
    xe = Ie(ce),
    w = J[`EventType${y}`],
    T = ne.map((e) => J[`Tag-${e}`]),
    Se = I(
      wt,
      w,
      v && `MVfZPnoopw0-`,
      r ? void 0 : X,
      s && `utI2vL1PRLs-`,
      C && `_4wxMhjLGDEo-`,
      xe && void 0,
      i === `wide` && void 0,
      i === `carousel` && `_6IHSOcZWQTI-`,
      i === `upcoming` && `i7ABr2eulso-`,
      ...T,
    ),
    E = de,
    D = fe;
  (E === D && (D = void 0), E === ae && (E = void 0));
  let we = ee(ge),
    O = (0, q.jsx)(Zn, {
      setVideoPlayerReady: l,
      calendarEvent: n,
      eventModel: t,
      mode: i,
      artworkType: _,
      strCapsuleImgURLForBackground: we,
      fnSetCoverSize: pe,
    }),
    k = r && y != 14 && !(s && i !== `carousel`),
    A = k && O,
    j = !k && O,
    Te = y !== 28 && y !== 12 && Ce.GetTimeNowWithOverride() < le,
    M = i !== `wide` || r,
    N =
      Te &&
      (0, q.jsx)(`div`, {
        className: I(`-VpcmDHYJBs-`, M && `_8hZf0ZZtftA-`),
        children: (0, q.jsx)(me, {
          eventModel: t,
          lang: g,
          bShowStartTime: !0,
          bOnlyShowIcon: M,
          bExpandLeft: M,
        }),
      }),
    P = !!(y !== 12 && D),
    Ee = !(!E || (P && Jn(E, D)));
  return (0, q.jsxs)(`div`, {
    className: Se,
    children: [
      (0, q.jsx)(pt, { event: t, recordNewsHubStats: !0 }),
      (0, q.jsx)(ye, {
        eventModel: t,
        route: ve.k_eView,
        children: (0, q.jsxs)(`div`, {
          className: Jt,
          onClick: (e) => {
            (f.RecordInteraction(S.k_eClickThrough),
              !be() && (o(t), e.stopPropagation(), e.preventDefault()));
          },
          children: [
            y === 14 &&
              (0, q.jsx)(`div`, {
                className: I(`TtzbM79RcOo-`, b && `yI-XQCfZhjU-`),
                style: { backgroundImage: `url(${we})` },
              }),
            (0, q.jsxs)(`div`, {
              className: Yt,
              children: [
                j,
                (0, q.jsxs)(`div`, {
                  className: Zt,
                  children: [
                    y == 12 &&
                      (0, q.jsx)(`div`, {
                        className: `wdp2jpfiGas-`,
                        children: (0, q.jsx)(Xe, {}),
                      }),
                    (0, q.jsxs)(`div`, {
                      className: cn,
                      children: [
                        A,
                        !a &&
                          (0, q.jsxs)(`div`, {
                            className: `HcQu8--ilOI-`,
                            children: [
                              (0, q.jsx)($n, { ...e }),
                              n && (0, q.jsx)(tr, { calendarEvent: n }),
                            ],
                          }),
                        (0, q.jsx)(`div`, { className: $t, children: ae }),
                        (0, q.jsxs)(`div`, {
                          className: It,
                          children: [
                            (0, q.jsx)(`div`, {
                              className: I(zt, w),
                              children: ie,
                            }),
                            (0, q.jsx)(er, {
                              eventModel: t,
                              className: I(M && `_6qTH13L4IdM-`),
                            }),
                            M && N,
                          ],
                        }),
                        Ee &&
                          (0, q.jsx)(`div`, {
                            className: `_9lDmRzgjqs4-`,
                            children: E,
                          }),
                        P &&
                          (0, q.jsx)(`div`, {
                            className: I(
                              `O79JneSzM9g-`,
                              E ? `h-oZBBAdgfo-` : ``,
                            ),
                            children: D,
                          }),
                      ],
                    }),
                    !M && N,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, q.jsx)(ir, { ...e }),
    ],
  });
}
function Jn(e, t) {
  let n = (e) => e.replace(/\W+/g, ``).toLocaleLowerCase(),
    r = n(e);
  return n(t).startsWith(r);
}
function Yn(e, t) {
  let { video_preview_type: n, video_preview_id: r, type: i } = e;
  return !(t === `upcoming` || !r || i === 12 || n !== `youtube`);
}
function Xn(e) {
  let { eventModel: t, fnSetVideoStateReady: n, mode: r } = e,
    { video_preview_id: i, type: a } = e.eventModel,
    o = _e(),
    s = V(H.LANGUAGE),
    c = re() && a == 14 ? u.full : u.capsule_main,
    l = xe(t, `capsule`, s, c, !0);
  return r === `carousel`
    ? (0, q.jsx)(Gn, { altImgWithFallback: l, video: i, className: Q })
    : (0, q.jsx)(Kn, {
        video: i,
        altImgWithFallback: l,
        autoplay: !0,
        autopause: !0,
        showFullscreenBtn: !0,
        controls: !0,
        imageClassnames: Q,
        onPlayerActivated: () => {
          (o.RecordInteraction(S.k_ePlayedVideo), n(!0));
        },
        preloadYoutubeScripts: !0,
        playsInline: !0,
      });
}
function Zn(e) {
  let {
      eventModel: t,
      calendarEvent: n,
      mode: r,
      artworkType: i,
      strCapsuleImgURLForBackground: a,
      setVideoPlayerReady: o,
      fnSetCoverSize: s,
    } = e,
    l = V(H.LANGUAGE),
    d = Yn(t, r),
    f = !Yn(t, r) && r !== `upcoming`,
    [p, m, h, ee, te, g] = c(() => [
      t.GetEventType(),
      t.has_live_stream,
      t.has_live_stream,
      t.clanSteamID.GetAccountID(),
      n.GetGameCapsule(),
      t.BImageNeedScreenshotFallback(i, l),
    ]);
  K.useEffect(() => {
    if (a) {
      let e = new Image();
      ((e.src = a),
        (e.onerror = () => {
          s(u.full);
        }));
    }
  }, [a, s]);
  let [, _] = b(ee),
    v = _ && !_.is_ogg,
    y = t.GetSummaryWithFallback(l);
  return (
    t.GetSubTitleWithLanguageFallback(l) === y && (y = void 0),
    (0, q.jsxs)(`div`, {
      className: Tt,
      children: [
        d &&
          (0, q.jsx)(Xn, {
            eventModel: t,
            mode: r,
            calendarEvent: n,
            fnSetVideoStateReady: o,
          }),
        f &&
          (0, q.jsxs)(q.Fragment, {
            children: [
              p === 12 &&
                (0, q.jsxs)(q.Fragment, {
                  children: [
                    (0, q.jsx)(`div`, {
                      className: `E-S8WDov49g-`,
                      children: (0, q.jsx)(`div`, {
                        className: I({
                          "fzWS9zjHBQA-": !0,
                          "yI-XQCfZhjU-": g,
                          "zEB6Vo-lSoU-": v,
                        }),
                        style: { backgroundImage: `url(${te})` },
                      }),
                    }),
                    (0, q.jsx)(`div`, {
                      className: `NH4KbTPWsVo-`,
                      children: y,
                    }),
                  ],
                }),
              p !== 12 &&
                (0, q.jsxs)(`div`, {
                  className: I({ "iogiG-p5PHg-": !0, "e2Xhb-5xMvY-": h }),
                  children: [
                    (0, q.jsx)(`div`, {
                      className: I({
                        "_1ZYmIx0m7bo-": !0,
                        "yI-XQCfZhjU-": g,
                        "zEB6Vo-lSoU-": v,
                      }),
                      style: { backgroundImage: `url(${a})` },
                    }),
                    h && (0, q.jsx)(`div`, { className: `-y6T-NRjq1Q-` }),
                    m &&
                      (0, q.jsx)(`div`, {
                        className: `_0hsSPkL5myo-`,
                        children: B(`#home_page_live_broadcast`),
                      }),
                    h &&
                      (0, q.jsx)(`div`, {
                        className: `VideoHintText`,
                        children: B(`#EventCalendar_WatchLiveBroadcast`),
                      }),
                  ],
                }),
            ],
          }),
      ],
    })
  );
}
var Qn = n((e) => {
    let {
        eventModel: t,
        calendarEvent: n,
        bSuppressHoverEffects: r,
        history: i,
      } = e,
      a = C(t, ve.k_eStoreNewsHub, `allowRelative`),
      o = (e) => {
        (a.startsWith(`http`) ? (window.location.href = a) : i.push(a),
          e.stopPropagation(),
          e.preventDefault());
      },
      s = n.GetEntityName(),
      c = n.GetGameIcon(),
      l = I(Y, r ? void 0 : X);
    return (0, q.jsx)(F, {
      children: (0, q.jsx)(`div`, {
        className: on,
        children: (0, q.jsxs)(`div`, {
          className: l,
          onClick: o,
          children: [
            (0, q.jsx)(`img`, { className: St, src: c }),
            (0, q.jsxs)(`div`, { className: Ct, children: [s, ` `] }),
          ],
        }),
      }),
    });
  }),
  $n = r(Qn),
  er = n((e) => {
    let { eventModel: t, calendarEvent: n, className: r } = e,
      i = U().GetStoreInitializationTimestamp().getTime() / 1e3,
      a = t ? t.GetStartTimeAndDateUnixSeconds() : n.start_time,
      o = t && ne(t.type) && t.GetEndTimeAndDateUnixSeconds();
    if (o && a < i && i < o) {
      let e = o - i,
        t = $e(e, !0);
      return (0, q.jsxs)(`div`, {
        className: I(Dt, r),
        children: [
          (0, q.jsx)(k, {
            rtFullDate: a,
            stylesmodule: J,
            children: (0, q.jsx)(`div`, {
              className: Ot,
              children: B(`#EventCalendar_LiveNow`),
            }),
          }),
          (0, q.jsx)(k, {
            rtFullDate: o,
            stylesmodule: J,
            children: B(`#EventCalendar_TimeLeft`, t),
          }),
        ],
      });
    }
    if (a < i) {
      let e = i - a,
        t = e < 86400 ? $e(e, !1, !0) : Ne(a);
      return (0, q.jsx)(k, {
        className: r,
        rtFullDate: a,
        stylesmodule: J,
        children: (0, q.jsx)(`div`, { className: kt, children: t }),
      });
    }
    {
      let e = new Date(i * 1e3);
      e.setHours(0, 0, 0, 1);
      let t = e.getTime() / 1e3,
        n = Math.floor((a - t) / 86400),
        o = n > 1 && n <= 5 ? Fe(new Date(a * 1e3)) : Ne(a),
        s = we(a);
      return (0, q.jsx)(k, {
        className: r,
        rtFullDate: a,
        stylesmodule: J,
        children: (0, q.jsx)(`div`, {
          className: Z,
          children: B(`#EventCalendar_WillStartAtDateTime`, o, s),
        }),
      });
    }
  }),
  tr = n((e) => {
    let t = e.calendarEvent.GetSource(),
      n = [],
      r = U().m_visibilityStore;
    (t & G.k_eLibrary && r.BIsGameSourceAllowed(W.k_ELibrary)
      ? n.push({
          id: G.k_eLibrary,
          name: `#EventCalendar_GameSource_inLibrary`,
          ttip: `#EventCalendar_GameSource_EventExplanation_ttip_library`,
          styles: void 0,
        })
      : t & G.k_eWishlist && r.BIsGameSourceAllowed(W.k_EWishlist)
        ? n.push({
            id: G.k_eWishlist,
            name: `#EventCalendar_GameSource_onWishlist`,
            ttip: `#EventCalendar_GameSource_EventExplanation_ttip_wishlist`,
            styles: void 0,
          })
        : t & G.k_eRecommended && r.BIsGameSourceAllowed(W.k_ERecommended)
          ? n.push({
              id: G.k_eRecommended,
              name: `#EventCalendar_GameSource_recommended_Verbose`,
              ttip: `#EventCalendar_GameSource_EventExplanation_ttip_recommended`,
              styles: Nt,
            })
          : t & G.k_eFeatured &&
            r.BIsGameSourceAllowed(W.k_EFeatured) &&
            n.push({
              id: G.k_eFeatured,
              name: `#EventCalendar_GameSource_featured`,
              ttip: `#EventCalendar_GameSource_ttip_featured`,
              styles: void 0,
            }),
      t & G.k_eFollowing &&
        r.BIsGameSourceAllowed(W.k_EFollowing) &&
        n.push({
          id: G.k_eFollowing,
          name: `#EventCalendar_GameSource_followed`,
          ttip: `#EventCalendar_GameSource_EventExplanation_ttip_following`,
          styles: void 0,
        }));
    let i = n.map((t, r) => {
      let i = e.calendarEvent.unique_id;
      return nr(
        `item-source-${i}-${t.id}`,
        t.name,
        t.ttip,
        t.styles,
        r + 1 < n.length,
      );
    });
    return (0, q.jsx)(`div`, { className: jt, children: i });
  }),
  nr = (e, t, n, r, i) =>
    (0, q.jsx)(
      z,
      {
        className: I(Mt, r),
        toolTipContent: B(n),
        children: B(t) + (i ? `, ` : ``),
      },
      e,
    );
function rr(e) {
  return R.logged_in
    ? R.is_limited
      ? yn
      : e === `up`
        ? bn
        : e === `down`
          ? Sn
          : Cn
    : vn;
}
function ir(e) {
  let { eventModel: t } = e,
    n = _e(),
    { myVote: r, Vote: i } = he(t, { bAsk: !1 }),
    [, a] = b(t.clanSteamID.GetAccountID()),
    o = () => {
      r !== `up` && ge() && (i(`up`), n.RecordInteraction(S.k_eThumbsUp));
    },
    s = () => {
      n.RecordInteraction(S.k_eDiscussions);
    },
    [l, u, d] = c(() => [
      Math.max(0, t.nVotesUp - t.nVotesDown),
      t.GetDiscussionURL(a?.vanity_url),
      t.nCommentCount,
    ]),
    f = rr(r),
    p = !Ge() && u,
    m = t.live_stream_viewer_count > 0 ? t.live_stream_viewer_count : void 0;
  return (0, q.jsx)(`div`, {
    className: ln,
    children: (0, q.jsxs)(`div`, {
      className: wn,
      children: [
        !!m && (0, q.jsx)(`div`, { className: `zxaNRVKQnTM-`, children: A(m) }),
        (0, q.jsxs)(`div`, {
          className: I($, void 0, f),
          onClick: o,
          children: [
            (0, q.jsx)(je, { className: xn }),
            (0, q.jsx)(`span`, { children: A(Number(l)) }),
          ],
        }),
        p &&
          (0, q.jsx)(`div`, {
            className: `CakmFSjnZaQ-`,
            children: (0, q.jsxs)(`a`, {
              href: u,
              className: `_2aS2MHSUX-U-`,
              target: `_blank`,
              onClick: s,
              children: [
                (0, q.jsx)(N, { className: `Ilo9d6Bcf60-` }),
                (0, q.jsx)(`span`, { children: A(Number(d)) }),
              ],
            }),
          }),
        (0, q.jsx)(Hn, { ...e }),
      ],
    }),
  });
}
var ar = `emclan`,
  or = `emgid`;
function sr(e) {
  let { displayLocation: t, fnChangeModalEvent: n } = e,
    [r, i] = K.useState(null),
    [a, o] = T(or, null),
    [s, c] = T(ar, null);
  return (
    We(n, (e, t) => {
      (o(e), c(M.InitFromClanID(t, H.EUNIVERSE).ConvertTo64BitString()));
    }),
    K.useEffect(() => {
      if (a != null && s != null) {
        let e = new M(s);
        y.LoadPartnerEventFromClanEventGIDAndClanSteamID(e, a, 0).then(i);
      }
    }, [a, s]),
    r
      ? (0, q.jsx)(ie, {
          appid: r.appid,
          trackingLocation: t,
          announcementGID: r.GetAnnouncementGID(),
          partnerEventStore: y,
          eventModel: r,
          showAppHeader: !0,
          closeModal: () => {
            (i(null), c(null), o(null));
          },
        })
      : null
  );
}
var cr = `_9ldA8d1EI20-`,
  lr = `gR9r-CA9v-w-`,
  ur = `qg0kDpti4nE-`,
  dr = `RhSVO9z6QFw-`,
  fr = `_52BS7g513UA-`,
  pr = `_3HVlNg-lHhM-`,
  mr = `NEE4v7KTl5A-`,
  hr = `Ij-p0urNq-A-`,
  gr = `m-cXhST-lJs-`,
  _r = `_-0S-Vs5hcTA-`,
  vr = `mf3O9nhppOo-`,
  yr = `eRhFVaYP2IQ-`,
  br = `EcxG9qqzLWQ-`,
  xr = `HKC2EnBS1BQ-`,
  Sr = `Mm-257yMXGI-`,
  Cr = `_2tmnI4Ea2-o-`,
  wr = `RiHHUUkg-WU-`,
  Tr = 10;
function Er(e) {
  let t = U(),
    n = E(Tr),
    r = t.GetActiveEventsAt(n) || [],
    [i] = K.useState(new Oe()),
    a = K.useCallback((e, t) => dt(y.GetClanEventModel(e), window), []);
  return t.GetNumEventsLoaded() == 0
    ? (0, q.jsx)(`div`, { children: B(`#Conference_No_Schedule_Yet`) })
    : (0, q.jsxs)(`div`, {
        className: yr,
        children: [
          (0, q.jsx)(sr, { displayLocation: 6, fnChangeModalEvent: i }),
          (0, q.jsx)(Ar, { rgActiveEvents: r, fnDisplayModalEvent: a }),
          (0, q.jsx)(Or, {
            rgActiveEvents: r,
            fnDisplayModalEvent: a,
            rtNow: n,
          }),
          (0, q.jsx)(`br`, {}),
          (0, q.jsx)(`br`, {}),
          (0, q.jsx)(Te, {
            onClick: (e) => j((0, q.jsx)(Pr, {}), qe(e)),
            children: B(`#Conference_NeedHelp`),
          }),
        ],
      });
}
function Dr(e) {
  return (0, q.jsx)(Nr, { ...e, children: (0, q.jsx)(Er, { ...e }) });
}
function Or(e) {
  let { rgActiveEvents: t, rtNow: n } = e,
    r = U()
      .GetCalendarItemsInTimeRange(n + 1)
      .rgCalendarItems.filter((e) => !t.some((t) => t.GID == e.unique_id))
      .sort((e, t) => e.start_time - t.start_time);
  return r.length == 0
    ? (0, q.jsx)(`div`, { children: B(`#Conference_No_More_Schedule`) })
    : (0, q.jsxs)(`div`, {
        className: cr,
        children: [
          (0, q.jsx)(`div`, {
            className: lr,
            children: B(`#Conference_ScheduleNext`),
          }),
          (0, q.jsx)(`div`, {
            className: ur,
            children: r.map((r, i) =>
              (0, q.jsx)(
                kr,
                {
                  bDisplayAsUpNext: i == 0 && t.length >= 1,
                  calendarItem: r,
                  fnDisplayModalEvent: e.fnDisplayModalEvent,
                  rtNow: n,
                },
                r.unique_id,
              ),
            ),
          }),
        ],
      });
}
function kr(e) {
  let {
      calendarItem: t,
      bDisplayAsUpNext: n,
      fnDisplayModalEvent: r,
      rtNow: i,
    } = e,
    a = y.GetClanEventModel(t.unique_id),
    o = V(H.LANGUAGE),
    s = a.GetStartTimeAndDateUnixSeconds(),
    c = Ye(new Date(i * 1e3), new Date(s * 1e3));
  return (0, q.jsxs)(`div`, {
    className: dr,
    onClick: () => r(a.GID, a.clanSteamID.GetAccountID()),
    children: [
      (0, q.jsx)(`div`, { className: fr, children: a.GetNameWithFallback(o) }),
      (0, q.jsxs)(`div`, {
        className: pr,
        children: [
          !c && (0, q.jsx)(`div`, { children: Ve(s, !0) }),
          (0, q.jsx)(`div`, {
            children:
              n && c
                ? B(
                    `#Conference_StartInMin`,
                    Math.max(1, Math.floor((s - i) / 60)),
                  )
                : B(`#Conference_StartsAt`, Me(s, { bForce24HourClock: !1 })),
          }),
        ],
      }),
      (0, q.jsx)(`div`, {
        className: I(br, xr),
        children: (0, q.jsx)(me, {
          eventModel: a,
          lang: o,
          bOnlyShowIcon: !0,
          bExpandLeft: !0,
          bShowStartTime: !1,
        }),
      }),
    ],
  });
}
function Ar(e) {
  let { rgActiveEvents: t, fnDisplayModalEvent: n } = e;
  if (!t || t.length == 0) return null;
  let r = t[0],
    i = V(H.LANGUAGE),
    a = rt.ParseEventModelPresenters(r, i);
  return (0, q.jsxs)(`div`, {
    className: mr,
    children: [
      (0, q.jsxs)(`div`, {
        className: hr,
        children: [(0, q.jsx)(`div`, { className: gr }), `Live Now!`],
      }),
      (0, q.jsx)(`div`, { className: fr, children: r.GetNameWithFallback(i) }),
      !!a &&
        a.map((e) =>
          (0, q.jsx)(
            m,
            {
              name: e.name,
              title: e.title,
              photo: e.photo,
              company: e.company,
              bioString: e.bio,
              children: (0, q.jsx)(`div`, { children: e.name }),
            },
            `presenter_` + e.name,
          ),
        ),
      (0, q.jsx)(`div`, {
        className: _r,
        children: r.GetSummaryWithFallback(i),
      }),
      (0, q.jsx)(`div`, {
        className: vr,
        onClick: () => n(r.GID, r.clanSteamID.GetAccountID()),
        children: B(`#EventEmail_Button_ClickForMoreDetails`),
      }),
    ],
  });
}
function jr(e) {
  let { conferenceInfo: t } = e,
    n = U(),
    r = E(Tr),
    i = n.GetActiveEventsAt(r) || [],
    [a] = K.useState(new Oe()),
    o = n
      .GetCalendarItemsInTimeRange(t.rtStartTime - 1, r)
      .rgCalendarItems.filter((e) => i.length == 0 || i[0].GID != e.unique_id)
      .sort((e, t) => e.start_time - t.start_time);
  return o.length == 0
    ? (0, q.jsx)(`div`, { children: B(`#Conference_NoPastEvents`) })
    : (0, q.jsxs)(`div`, {
        className: Sr,
        children: [
          (0, q.jsx)(sr, { displayLocation: 6, fnChangeModalEvent: a }),
          o.map((e) => {
            let t = y.GetClanEventModel(e.unique_id);
            return (0, q.jsx)(
              qn,
              {
                eventModel: t,
                calendarEvent: e,
                bSuppressHoverEffects: !1,
                mode: `wide`,
                fnOnClicked: () =>
                  a.Dispatch(t.GID, t.clanSteamID.GetAccountID()),
              },
              `row` + e.unique_id,
            );
          }),
        ],
      });
}
function Mr(e) {
  return (0, q.jsx)(Nr, { ...e, children: (0, q.jsx)(jr, { ...e }) });
}
function Nr(e) {
  let { conferenceInfo: t } = e,
    n = w(`WithCalendarStore`),
    [r, i] = (0, K.useState)(!0);
  return (
    (0, K.useEffect)(() => {
      n.token.reason ||
        bt
          .Get()
          .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
          .finally(() => {
            n.token.reason || i(!1);
          });
    }, [t.rtEndTime, t.strConferenceID, n]),
    r ? (0, q.jsx)(ce, {}) : (0, q.jsx)(q.Fragment, { children: e.children })
  );
}
function Pr(e) {
  let { closeModal: t } = e;
  return (0, q.jsxs)(P, {
    strTitle: B(`#Conference_NeedHelp`),
    bAlertDialog: !0,
    onCancel: t,
    onOK: t,
    children: [
      (0, q.jsx)(`div`, { children: B(`#Conference_NeedHelp_Desc1`) }),
      (0, q.jsxs)(`div`, {
        children: [
          (0, q.jsxs)(`div`, {
            className: Cr,
            children: [
              (0, q.jsx)(`div`, {
                children: B(`#Conference_NeedHelp_BroadcastChatQ`),
              }),
              (0, q.jsxs)(`ul`, {
                className: wr,
                children: [
                  (0, q.jsx)(`li`, {
                    children: B(`#Conference_NeedHelp_ChatA1`),
                  }),
                  (0, q.jsx)(`li`, {
                    children: Je(
                      `#Conference_NeedHelp_BroadcastChatA1`,
                      (0, q.jsx)(`a`, {
                        href: `https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A`,
                        children: B(`#Conferenec_NeedHelp_LimitedAccounts`),
                      }),
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            className: Cr,
            children: [
              (0, q.jsx)(`div`, { children: B(`#Conference_NeedHelp_QandAQ`) }),
              (0, q.jsx)(`ul`, {
                children: (0, q.jsx)(`li`, {
                  children: B(`#Conference_NeedHelp_ChatA1`),
                }),
              }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            className: Cr,
            children: [
              (0, q.jsx)(`span`, {
                children: B(`#Conference_NeedHelp_StillHaveQuestions`),
              }),
              (0, q.jsx)(`a`, {
                href: `https://help.steampowered.com/wizard/HelpWithPublishing?issueid=933`,
                children: B(`#Conference_NeedHelp_CreateTicket`),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Fr = `CosXX3EOimc-`,
  Ir = `_2G0l2P7PdWE-`,
  Lr = `Spx81IioUbg-`,
  Rr = `_5GDAhGXpfUc-`,
  zr = `yGA4wdnOjDA-`,
  Br = `NxERYIoK1Cw-`,
  Vr = `_8l8J-kgwB7U-`,
  Hr = `aXXmPKkbnXQ-`,
  Ur = `oOUQlEGxQVM-`,
  Wr = `ytU2QJl67fo-`,
  Gr = `_9VrU0Y2zPEY-`,
  Kr = `EpnFxSwyOrQ-`,
  qr = `_2wHhSwgxybU-`,
  Jr = `EYfvQDnLzvo-`,
  Yr = `bD4DgBpQoNM-`,
  Xr = `oxOiIg7VE2E-`,
  Zr = `EKfk3W5MSVw-`,
  Qr = `_4cL0DDhwyxw-`,
  $r = `_1A3aZ6j-Szc-`,
  ei = 30;
function ti(e) {
  let { conferenceInfo: t, bShowYouTube: n } = e,
    [r, i] = K.useState(!1),
    a = E(Ze.PerMinute) < t.rtStartTime - ei * Ze.PerMinute;
  return (0, q.jsxs)(`div`, {
    className: Fr,
    children: [
      (0, q.jsx)(`div`, {
        className: I(Ir, r ? `Active` : `Hidden`),
        children: (0, q.jsxs)(`div`, {
          className: void 0,
          children: [
            (0, q.jsx)(Dr, { conferenceInfo: t }),
            (0, q.jsxs)(`div`, {
              className: Lr,
              onClick: () => {
                i(!r);
              },
              children: [
                (0, q.jsx)(z, {
                  toolTipContent: B(`#QAndA_HideSchedule`),
                  children: (0, q.jsx)(`div`, {
                    className: Rr,
                    children: (0, q.jsx)(Ee, { angle: 0 }),
                  }),
                }),
                (0, q.jsx)(z, {
                  toolTipContent: B(`#QAndA_ShowSchedule`),
                  children: (0, q.jsxs)(`div`, {
                    className: zr,
                    children: [
                      (0, q.jsx)(Le, {}),
                      (0, q.jsx)(`div`, {
                        className: Br,
                        children: `See Event Schedule`,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, q.jsxs)(`div`, {
        className: Vr,
        children: [
          n &&
            (0, q.jsx)(le, {
              videoID: t.youtubeVideoID,
              bAutoPlay: !0,
              bShowVideoImmediately: !0,
            }),
          a
            ? (0, q.jsx)(`div`, {
                className: Hr,
                children: (0, q.jsx)(`div`, {
                  className: Ur,
                  children: B(`#Conference_ChatHidden`, ei),
                }),
              })
            : (0, q.jsx)(ni, { conferenceInfo: t }),
        ],
      }),
    ],
  });
}
function ni(e) {
  let { conferenceInfo: t } = e,
    [n, r] = K.useState(window.innerWidth > 910),
    [i, a] = K.useState(!0),
    o =
      H.COMMUNITY_BASE_URL +
      `broadcast/chatonly/` +
      t.broadcastSteamID.ConvertTo64BitString(),
    s =
      H.COMMUNITY_BASE_URL +
      `questions/` +
      Qe.VANITY_ID +
      `/view/` +
      t.globalQandASessionID;
  return (0, q.jsxs)(`div`, {
    className: Hr,
    children: [
      (0, q.jsxs)(`div`, {
        className: Wr,
        children: [
          (0, q.jsxs)(`div`, {
            className: I(Jr, Kr, n ? Zr : ``),
            children: [
              (0, q.jsx)(`div`, {
                className: Yr,
                onClick: () => {
                  (r(!0), a(!1));
                },
                children: B(`#Conference_Tab_Chat`),
              }),
              (0, q.jsx)(z, {
                toolTipContent: B(`#QAndA_PopOutChat_ttip`),
                children: (0, q.jsx)(`a`, {
                  className: Xr,
                  href: o,
                  target: `_blank`,
                  children: (0, q.jsx)(He, {}),
                }),
              }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            className: I(Jr, qr, i ? Zr : ``),
            children: [
              (0, q.jsx)(`div`, {
                className: Yr,
                onClick: () => {
                  (r(!1), a(!0));
                },
                children: B(`#Conference_Tab_QandA`),
              }),
              (0, q.jsx)(z, {
                toolTipContent: B(`#QAndA_PopOutQAndA_ttip`),
                children: (0, q.jsx)(`a`, {
                  className: Xr,
                  href: s,
                  target: `_blank`,
                  children: (0, q.jsx)(He, {}),
                }),
              }),
            ],
          }),
          (0, q.jsx)(z, {
            toolTipContent: B(`#QAndA_ChatToggle_ShowBoth`),
            children: (0, q.jsx)(`div`, {
              className: Gr,
              onClick: () => {
                (r(!0), a(!0));
              },
              children: (0, q.jsx)(De, {}),
            }),
          }),
        ],
      }),
      (0, q.jsxs)(`div`, {
        className: Qr,
        children: [
          !!((n && i) || (!i && !n)) &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(`div`, {
                  className: `udjEFKIUdiE-`,
                  children: (0, q.jsx)(_t, {
                    conferenceInfo: t,
                    className: void 0,
                  }),
                }),
                (0, q.jsx)(`div`, {
                  className: `DIG-5XDM5sY-`,
                  children: (0, q.jsx)(ct, {
                    gidSession: t.globalQandASessionID,
                  }),
                }),
              ],
            }),
          !(!n || i) &&
            (0, q.jsx)(_t, { conferenceInfo: t, className: void 0 }),
          !(n || !i) && (0, q.jsx)(ct, { gidSession: t.globalQandASessionID }),
        ],
      }),
    ],
  });
}
function ri(e) {
  let { conferenceInfo: t } = e;
  if (!t.faqAboutPage)
    return (0, q.jsx)(`div`, { children: B(`#Conference_NoAbout`) });
  let { title: n, content: r, timestamp: i } = t.faqAboutPage;
  return (0, q.jsxs)(`div`, {
    children: [
      (0, q.jsx)(`div`, { className: $r, children: n }),
      (0, q.jsx)(st, { text: r, bShowErrorInfo: !1, version: `0` }),
    ],
  });
}
function ii(e) {
  let { conferenceInfo: t } = e;
  return (0, q.jsx)(Mr, { conferenceInfo: t });
}
var ai = `M42gpbQtAZI-`,
  oi = `hdKB5VYayBQ-`,
  si = `nMQQZr-aUcU-`,
  ci = `t1L6jOPZ6ZI-`,
  li = `erGrP-fnka8-`,
  ui = `oAPQHisXVV4-`;
function di(e) {
  let { strVanity: t } = e,
    n = mt.Get().GetConferenceInfo(t);
  return n
    ? (0, q.jsx)(F, {
        children: (0, q.jsx)(`div`, {
          className: ai,
          children: (0, q.jsx)(fi, { conferenceInfo: n }),
        }),
      })
    : (0, q.jsx)(`div`, { children: B(`#Conference_Invalid`) });
}
function fi(e) {
  let { conferenceInfo: t } = e,
    n = (e) =>
      window.sessionStorage.setItem(`conferenceCurrentTab`, `?tab=${e.key}`),
    r = [],
    i = D();
  return (
    i < t.rtEndTime &&
      r.push({
        name: B(`#Conference_tab_Home`),
        key: `live`,
        contents: (0, q.jsx)(F, {
          children: (0, q.jsx)(ti, {
            bShowYouTube: !!t.youtubeVideoID,
            conferenceInfo: t,
          }),
        }),
        onClick: n,
      }),
    r.push({
      name: B(`#Conference_tab_Past`),
      key: `past`,
      contents: (0, q.jsxs)(F, {
        children: [
          (0, q.jsx)(ii, { conferenceInfo: t }),
          !t.youtubeVideoID &&
            i < t.rtEndTime &&
            (0, q.jsx)(vt, { conferenceInfo: t }),
        ],
      }),
      onClick: n,
    }),
    r.push({
      name: B(`#Conference_tab_Info`),
      key: `about`,
      contents: (0, q.jsxs)(F, {
        children: [
          (0, q.jsx)(ri, { conferenceInfo: t }),
          !t.youtubeVideoID &&
            i < t.rtEndTime &&
            (0, q.jsx)(vt, { conferenceInfo: t }),
        ],
      }),
      onClick: n,
    }),
    r.push({
      name: `(VO/Internal) Debug`,
      key: `debug`,
      hidden: !0,
      contents: (0, q.jsx)(F, {
        children: (0, q.jsx)(yt, { conferenceInfo: t }),
      }),
      onClick: n,
    }),
    (0, q.jsxs)(`div`, {
      className: oi,
      children: [
        (0, q.jsxs)(`div`, {
          className: si,
          children: [
            (0, q.jsx)(x, { className: ci, rgSources: t.strLocalizedLogos }),
            (0, q.jsx)(x, {
              className: li,
              rgSources: t.strLocalizedMobileLogos,
            }),
            (0, q.jsx)(`div`, {
              className: ui,
              children: (0, q.jsx)(O, {
                rtStartDate: t.rtStartTime,
                rtEndDate: t.rtEndTime,
              }),
            }),
          ],
        }),
        (0, q.jsx)(Se, { tabs: r }),
      ],
    })
  );
}
var pi = {
  LandingPage: (e) => `/(conference|steamworksvirtualconference)/${e}`,
};
function mi(e) {
  return (0, q.jsxs)(o, {
    children: [
      (0, q.jsx)(l, {
        path: pi.LandingPage(`:vanity_str`),
        render: (e) =>
          (0, q.jsx)(Be, {
            config: {
              "conference-root": () => {
                let { vanity_str: t } = e.match.params;
                return (0, q.jsx)(di, { strVanity: t.toLocaleLowerCase() });
              },
            },
          }),
      }),
      (0, q.jsx)(l, { component: ke }),
    ],
  });
}
export { pi as ConferenceRoutes, mi as default };
