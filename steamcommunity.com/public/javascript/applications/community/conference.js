/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  C as n,
  Et as r,
  L as i,
  Pt as a,
  S as o,
  at as s,
  bt as c,
  xt as l,
} from "./chunk~01cfc309bf.js";
import {
  An as u,
  Cs as d,
  Ho as f,
  In as p,
  Wo as m,
  Yt as h,
  as as g,
  cn as _,
  dn as ee,
  ki as v,
  l as y,
  mi as te,
  ns as b,
  pn as ne,
} from "./chunk~3f4314f3b4.js";
import { t as re } from "./chunk~6eb508043a.js";
import { t as x } from "./chunk~404eafa76f.js";
import { a as S, s as ie } from "./chunk~437071091c.js";
import { t as ae } from "./chunk~eee3bbd4cd.js";
import { t as oe } from "./chunk~eefd71512b.js";
import {
  F as se,
  G as ce,
  K as le,
  R as ue,
  dt as de,
  z as fe,
} from "./chunk~05a38bc848.js";
import {
  It as C,
  Nt as pe,
  gt as me,
  mt as he,
  zt as ge,
} from "./chunk~77ea210942.js";
import {
  D as _e,
  H as ve,
  J as ye,
  U as be,
  W as xe,
} from "./chunk~21cdc464a1.js";
import { t as Se } from "./chunk~92931c6310.js";
import { o as w } from "./chunk~af36c62e9f.js";
import { t as Ce } from "./chunk~37e5316e27.js";
import { i as T, n as we, r as E } from "./chunk~0111fcd096.js";
import { l as D, o as O, u as k } from "./chunk~ec644f97c6.js";
import { t as A } from "./chunk~9d71b14b50.js";
import {
  $c as Te,
  Cc as Ee,
  Cu as j,
  Gs as M,
  Hf as N,
  Hs as De,
  Ji as P,
  Jo as Oe,
  Kl as ke,
  Lh as Ae,
  Ps as je,
  Qd as F,
  Tm as I,
  Vi as L,
  Ws as Me,
  Xm as R,
  _l as Ne,
  al as Pe,
  ap as Fe,
  bu as z,
  cd as Ie,
  dc as Le,
  f as Re,
  ff as ze,
  gf as B,
  hf as Be,
  hm as V,
  hs as H,
  ii as Ve,
  lf as He,
  ll as Ue,
  lm as We,
  mm as U,
  nd as Ge,
  nf as Ke,
  np as qe,
  of as Je,
  pm as Ye,
  ru as Xe,
  vc as Ze,
  wp as Qe,
  zr as $e,
} from "./main.js";
import { Q as et, S as tt } from "./chunk~750c562b0a.js";
import { c as nt, s as rt } from "./chunk~cadb22900a.js";
import { i as it, n as at, t as ot } from "./chunk~f17215eefb.js";
import { r as st } from "./chunk~eb66d0e2b2.js";
import {
  a as W,
  c as G,
  i as ct,
  l as K,
  o as lt,
  r as ut,
  s as dt,
  t as ft,
} from "./chunk~dd13412f72.js";
var q = e(a()),
  pt = class e {
    m_mapConferences = i.map();
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
      let e = We(`conferenceinfo`, `application_config`);
      if (this.ValidateStoreDefault(e)) {
        let t = R(U.LANGUAGE),
          n = it(e.clan_faq_about_page),
          r = at.Get().GetFAQPublishedContent(n, t),
          i = {
            strConferenceID: e.vanity,
            rtStartTime: e.start_rtime,
            rtEndTime: e.end_rtime,
            clanSteamID: new I(e.event_group_steamid),
            broadcastSteamID: new I(e.broadcast_steamid),
            bPartnerOnly: e.partner_only,
            faqAboutPage: r,
            strLocalizedLogos: null,
            strLocalizedMobileLogos: null,
            globalQandASessionID: e.global_qanda_session_id,
            youtubeVideoID: e.youtubeVideoID,
          };
        this.m_mapConferences.set(e.vanity, i);
        let a = await g(e.localized_logo, t, r?.timestamp),
          o = await g(e.localized_mobile_logo, t, r?.timestamp);
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
  mt = `rSAA9RImaO0-`,
  J = s();
function ht(e) {
  let { conferenceInfo: t } = e,
    n = t.broadcastSteamID.ConvertTo64BitString();
  return (0, J.jsx)(j, {
    children: (0, J.jsx)(ae, {
      steamIDBroadcast: n,
      watchLocation: 5,
      bStartMuted: !0,
    }),
  });
}
function gt(e) {
  let { conferenceInfo: t } = e,
    r = n(() => t.broadcastSteamID.ConvertTo64BitString());
  return (0, J.jsx)(`div`, {
    className: z(mt, e.className ? `${e.className}` : ``),
    children: (0, J.jsx)(j, {
      children: (0, J.jsx)(et, {
        emoticonStore: rt,
        watchLocation: 5,
        steamID: r,
        globalChat: !0,
        bPartnerMemberOnlyChat: t.bPartnerOnly,
        bInvertLayout: !0,
      }),
    }),
  });
}
function _t(e) {
  let { conferenceInfo: t } = e,
    [n, r] = q.useState(!1);
  return n
    ? null
    : (0, J.jsxs)(`div`, {
        className: tt,
        children: [
          (0, J.jsx)(x, {
            steamIDBroadcast: t.broadcastSteamID.ConvertTo64BitString(),
            OnPreventPopup: () => r(!0),
          }),
          (0, J.jsx)(ht, { conferenceInfo: t }),
        ],
      });
}
function vt(e) {
  let { conferenceInfo: t } = e;
  return null;
}
var yt = class e {
    m_inFlight = null;
    async LoadInitialCalendarData(e, t) {
      return (
        (this.m_inFlight ||= this.InternalLoadInitialCalendarData(e, t)),
        this.m_inFlight
      );
    }
    async InternalLoadInitialCalendarData(e, t) {
      lt({ collectionid: t, bSectionByDay: !0, rtCalendarEnd: e });
      let n = W(),
        r = We(`conference_calendar`, `application_config`);
      (r && (await n.RegisterCalendarEventsAndModels(r)),
        n.SetFilteredView((e) => !0));
    }
    static m_singleton;
    static Get() {
      return ((e.m_singleton ||= new e()), e.m_singleton);
    }
    constructor() {}
  },
  Y = t({
    AppBannerLogo: () => rn,
    AppIcon: () => St,
    CarouselMode: () => An,
    ClanSource: () => on,
    CommentIcon: () => Dn,
    CommentIconCtn: () => On,
    CoverImageCtn: () => Tt,
    DateAndSourceLine: () => It,
    DateAndTime: () => Nn,
    EnableHovers: () => X,
    EventCapsuleCtn: () => un,
    EventName: () => en,
    EventSubTitle: () => tn,
    EventSummaryDefault: () => _n,
    EventTitleCtn: () => Q,
    EventType10: () => Ht,
    EventType11: () => Ut,
    EventType12: () => $t,
    EventType13: () => Kt,
    EventType14: () => qt,
    EventType15: () => Jt,
    EventType23: () => Wt,
    EventType28: () => Vt,
    EventType35: () => Gt,
    EventTypeAndDateCtn: () => Lt,
    FallbackImage: () => an,
    Footer: () => ln,
    FooterRightSide: () => wn,
    FooterStat: () => $,
    FutureDateText: () => kt,
    GameCapsuleCtn: () => nn,
    GameShortDescription: () => Et,
    GameSource: () => jt,
    GameTitleContainer: () => xt,
    HasVideo: () => Pn,
    LeaveRoomForReminder: () => Rt,
    LiveBroadcastPreview: () => dn,
    LiveNow: () => Ot,
    LiveText: () => Dt,
    LoadingTile: () => kn,
    MainContentContainer: () => Xt,
    OnlyIcon: () => gn,
    Options: () => Tn,
    PastDateText: () => At,
    PatchIconCtn: () => cn,
    RateIcon: () => xn,
    RecommendedSource: () => Pt,
    ReminderContainer: () => hn,
    SmallAppName: () => zt,
    Source: () => Nt,
    SourceList: () => Mt,
    SourceRecommended: () => Ft,
    SubTitleShown: () => Fn,
    Tile: () => Yt,
    TileBackgroundImage: () => fn,
    TileContainer: () => wt,
    TileCoverImagePlayable: () => pn,
    TileCoverLiveIcon: () => mn,
    TileImage: () => Zt,
    TileTextAppName: () => Ct,
    TileTextCategoryType: () => Bt,
    TileTextContainer: () => Qt,
    TileTextHeader: () => sn,
    TileVideoIcon: () => Mn,
    TileViewerCount: () => En,
    UpcomingMode: () => jn,
    VideoPlayerReady: () => In,
    Vote_LimitedUser: () => yn,
    Vote_Negative: () => Sn,
    Vote_NotLoggedIn: () => vn,
    Vote_Positive: () => bn,
    Vote_Ready: () => Cn,
    YoutubePreviewImage: () => Z,
    default: () => Ln,
    narrowWidth: () => bt,
  }),
  bt = `500px`,
  xt = `Zlty4OIYdk8-`,
  St = `go8QhZVoiDg-`,
  Ct = `C2L2kTp8KYY-`,
  X = `cJRhUD4vyks-`,
  wt = `JTFHmASEfjQ-`,
  Tt = `lSYF-snjG-M-`,
  Et = `NH4KbTPWsVo-`,
  Dt = `oKFVegN0DBM-`,
  Ot = `b6-KxfcdLaA-`,
  kt = `fTNya0ypDaA-`,
  At = `xsBu3BpyRkM-`,
  jt = `HcQu8--ilOI-`,
  Mt = `Posg84PD4bE-`,
  Nt = `k2N88JaY6V0-`,
  Pt = `ZoGr1X5RSXM-`,
  Ft = `EQ3XQ1YOQmQ-`,
  It = `C0xcw-dBN9k-`,
  Lt = `IF22HifrVkU-`,
  Rt = `_6qTH13L4IdM-`,
  zt = `_3tNrYR8q4PM-`,
  Bt = `ohvlfUuwWIg-`,
  Vt = `mo9oCL-5zMc-`,
  Ht = `ZN1vuColBC4-`,
  Ut = `icDmaRX1BV0-`,
  Wt = `optYdsri3U8-`,
  Gt = `_5zGVMek4WGM-`,
  Kt = `KdEmVjNtWfQ-`,
  qt = `LnEJdWlC4Ss-`,
  Jt = `NG3wNiIIJXs-`,
  Yt = `bOEXfqM27eQ-`,
  Xt = `o-fQFsyOEMY-`,
  Z = `q8QvDCYSn5E-`,
  Zt = `_1ZYmIx0m7bo-`,
  Qt = `OHAAoz1G1I4-`,
  $t = `k1akHy9HHzA-`,
  en = `SlFMYJwWSU4-`,
  tn = `_9lDmRzgjqs4-`,
  nn = `E-S8WDov49g-`,
  rn = `fzWS9zjHBQA-`,
  an = `yI-XQCfZhjU-`,
  on = `zEB6Vo-lSoU-`,
  sn = `hG0eaq6y-C8-`,
  cn = `wdp2jpfiGas-`,
  Q = `ym2tgXthxzw-`,
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
    narrowWidth: bt,
    GameTitleContainer: xt,
    AppIcon: St,
    TileTextAppName: Ct,
    EnableHovers: X,
    TileContainer: wt,
    CoverImageCtn: Tt,
    GameShortDescription: Et,
    LiveText: Dt,
    LiveNow: Ot,
    FutureDateText: kt,
    PastDateText: At,
    GameSource: jt,
    SourceList: Mt,
    Source: Nt,
    RecommendedSource: Pt,
    SourceRecommended: Ft,
    DateAndSourceLine: It,
    EventTypeAndDateCtn: Lt,
    LeaveRoomForReminder: Rt,
    SmallAppName: zt,
    TileTextCategoryType: Bt,
    EventType28: Vt,
    EventType10: Ht,
    EventType11: Ut,
    EventType23: Wt,
    EventType35: Gt,
    EventType13: Kt,
    EventType14: qt,
    EventType15: Jt,
    Tile: Yt,
    MainContentContainer: Xt,
    YoutubePreviewImage: Z,
    TileImage: Zt,
    TileTextContainer: Qt,
    EventType12: $t,
    EventName: en,
    EventSubTitle: tn,
    GameCapsuleCtn: nn,
    AppBannerLogo: rn,
    FallbackImage: an,
    ClanSource: on,
    TileTextHeader: sn,
    PatchIconCtn: cn,
    EventTitleCtn: Q,
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
  return (0, J.jsx)(L, {
    strTitle: F(`#EventCalendar_GameSource_UnhideCuratorsDialog_Title`),
    strDescription: F(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_Description`,
    ),
    strOKButtonText: F(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton`,
    ),
    strCancelButtonText: F(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton`,
    ),
    onOK: () => {
      (W().m_visibilityStore.SetGameSourceAllowed(G.k_ECurator, !0), t && t());
    },
    onCancel: () => {
      (W().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(!0),
        t && t());
    },
  });
}
function zn(e) {
  e ||
    (ct() &&
      (W().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
        W().m_visibilityStore.BIsGameSourceAllowed(G.k_ECurator) ||
        P((0, J.jsx)(Rn, {}), window)));
}
var Bn = o((e) => {
  let { eventModel: t, calendarEvent: n, history: r } = e,
    i = (e) => {
      let t = n.GetEntityName();
      P(
        (0, J.jsx)(L, {
          strTitle: F(`#EventCalendar_MuteApp_Title`, t),
          strDescription: F(`#EventCalendar_MuteApp_details`, t),
          onOK: () => W().UpdateEventBlockFromCalendarEvent(n, !1),
          children: (0, J.jsx)(`a`, {
            href: U.STORE_BASE_URL + `account/emailoptout/app`,
            target: U.IN_CLIENT ? void 0 : `_blank`,
            children: F(`#EventCalendar_ManageMutedSources`),
          }),
        }),
        Ge(e),
      );
    },
    a = () => {
      W().UpdateEventBlockFromCalendarEvent(n, !0);
    },
    o = () => {
      let e = s().MapClanEventTypeToGroup(t.GetEventType());
      s().SetEventTypeGroupAllowed(e, !1);
    },
    s = () => W().m_visibilityStore,
    c = (e, t, n, r = !0) => {
      s().BIsGameSourceAllowed(t) &&
        (r &&
          e.push(
            (0, J.jsx)(
              M,
              {
                disabled: !0,
                onSelected: () => {},
                children: F(`#EventCalender_Reason_` + t),
              },
              `item-source-${n}-${t}`,
            ),
          ),
        e.push(
          (0, J.jsx)(
            M,
            {
              onSelected: () => {
                s().SetGameSourceAllowed(t, !1);
              },
              children: F(`#EventCalender_Hide_Reason_` + t),
            },
            `item-hidesource-${n}-${t}`,
          ),
        ));
    },
    l = ye(t, be.k_eStoreNewsHub, `allowRelative`),
    u = () => {
      l.startsWith(`http`) ? (window.location.href = l) : r.push(l);
    };
  return (0, J.jsx)(`div`, {
    className: z($, Tn),
    onClick: (e) => {
      let r = [],
        l = n.GetSource(),
        d = n.unique_id,
        f = N(),
        p = W();
      (p.BIsGlobalCalendar() &&
        (l &&
          l & K.k_eLibrary &&
          (s().BIsGameSourceAllowed(G.k_ERecent) && n.appInfo
            ? (r.push(
                (0, J.jsx)(
                  M,
                  {
                    disabled: !0,
                    onSelected: () => {},
                    children: F(
                      `#EventCalender_LastPlayed`,
                      B(we.GetTimeNowWithOverride() - n.appInfo.last_played),
                    ),
                  },
                  `item-source-${d}-lastplayed`,
                ),
              ),
              c(r, G.k_ERecent, d, !1))
            : c(r, G.k_ELibrary, d)),
        l && l & K.k_eWishlist && c(r, G.k_EWishlist, d),
        l && l & K.k_eFollowing && c(r, G.k_EFollowing, d),
        !f && l && l & K.k_eCurator && c(r, G.k_ECurator, d),
        l && l & K.k_eRecommended && c(r, G.k_ERecommended, d),
        l && l & K.k_eSteam && c(r, G.k_ESteam, d),
        l && l & K.k_eFeatured && c(r, G.k_EFeatured, d)),
        r.push(
          (0, J.jsx)(
            M,
            {
              onSelected: o,
              children: F(
                `#EVentCalendar_Hide_EventType`,
                F(
                  `#EventCalendar_EventTypeGroup_` +
                    s().MapClanEventTypeToGroup(t.GetEventType()),
                ),
              ),
            },
            t.GID + `hidetype`,
          ),
        ),
        V.logged_in &&
          (dt.Get().BIsEventBlocked(n)
            ? r.push(
                (0, J.jsx)(
                  M,
                  {
                    onSelected: a,
                    children: (0, J.jsx)(H, {
                      toolTipContent: F(`#EventCalendar_UnMuteApp_ttip`),
                      children: F(
                        `#EventCalendar_UnMuteApp_Title`,
                        n.GetEntityName(),
                      ),
                    }),
                  },
                  t.GID + `unmuteapp`,
                ),
              )
            : r.push(
                (0, J.jsx)(
                  M,
                  {
                    onSelected: i,
                    children: (0, J.jsx)(H, {
                      toolTipContent: F(`#EventCalendar_MuteApp_ttip`),
                      children: F(
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
          r.push((0, J.jsx)(Vn, { eventModel: t, calendarEvent: n })),
        p.BIsSingleSourceCalendar() ||
          r.push(
            (0, J.jsx)(
              M,
              {
                onSelected: u,
                children: F(
                  `#EventCalendar_Goto_SpecificCalendar`,
                  n.GetEntityName(),
                ),
              },
              t.GID + `goto`,
            ),
          ),
        t.appid &&
          r.push(
            (0, J.jsx)(
              M,
              {
                onSelected: () =>
                  (window.location.href = je(
                    U.STORE_BASE_URL + `app/` + t.appid,
                  )),
                children: F(`#EventDisplay_ViewStorePage`),
              },
              t.GID + `goto`,
            ),
          ),
        De((0, J.jsx)(Me, { children: r }), e));
    },
    children: (0, J.jsx)(Te, {}),
  });
});
function Vn(e) {
  let { eventModel: t, calendarEvent: n } = e,
    r = h(t.clanSteamID.GetAccountID()),
    { elDialogElement: i, fnShowLogonDialog: a } = p(),
    o = q.useCallback(async () => {
      V.logged_in
        ? (await u.Get().UpdateFollowOrIgnoreCurator(t.clanSteamID, !0, !r),
          zn(!!r))
        : a();
    }, [r, t.clanSteamID, a]);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(
        M,
        {
          onSelected: o,
          children: (0, J.jsx)(H, {
            toolTipContent: F(
              r
                ? `#EventCalendar_UnFollowCurator_ttip`
                : `#EventCalendar_FollowCurator_ttip`,
            ),
            children: F(
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
      [n, r] = q.useState(0);
    q.useEffect(() => r(0), [e.video]);
    let i = q.useRef(null);
    if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
      return (0, J.jsx)(f, {
        className: e.className,
        srcs: e.altImgWithFallback,
      });
    if (e.altImg)
      return (0, J.jsx)(`img`, { src: e.altImg, className: e.className });
    {
      let a = `https://img.youtube.com/vi/` + e.video + `/` + t[n] + `.jpg`,
        o = () => {
          n + 1 < t.length && r(n + 1);
        };
      return (0, J.jsx)(`img`, {
        ref: i,
        onLoad: () => {
          i.current && i.current.naturalHeight < 91 && o();
        },
        onError: o,
        src: a,
        className: z(Un, e.className),
      });
    }
  },
  Kn = (e) => {
    let [t, n] = q.useState(!1);
    fe(!!e.preloadYoutubeScripts);
    let r = le(`youtube`);
    return !t || !r
      ? (0, J.jsxs)(`div`, {
          className: z(`YoutubePreviewContainer`, Un, e.imageClassnames),
          onClick: r
            ? (t) => {
                (e.onPlayerActivated && e.onPlayerActivated(),
                  n(!0),
                  t.stopPropagation(),
                  t.preventDefault());
              }
            : void 0,
          children: [
            (0, J.jsx)(Gn, {
              className: `YoutubePreviewImage`,
              altImgWithFallback: e.altImgWithFallback,
              altImg: e.altImg,
              video: e.video,
            }),
            r &&
              (0, J.jsxs)(J.Fragment, {
                children: [
                  (0, J.jsx)(`div`, {
                    className: `YoutubePreviewPlay`,
                    children: (0, J.jsx)(Xe, {}),
                  }),
                  (0, J.jsx)(`div`, {
                    className: `VideoHintText`,
                    children: F(`#EventCalendar_WatchYouTubeVideo`),
                  }),
                ],
              }),
          ],
        })
      : (0, J.jsx)(ue, { ...e, classnames: z(Wn, e.classnames) });
  };
function qn(e) {
  let {
      eventModel: t,
      calendarEvent: r,
      bSuppressHoverEffects: i,
      mode: a,
      bHideGameTitle: o,
      fnOnClicked: s,
    } = e,
    [c, l] = q.useState(!1),
    u = ge(),
    f = d(t.GetAppIDOrReferenceAppID());
  Qe(f);
  let p = ne(t);
  ie(r.clanInfo?.clanid);
  let h = R(U.LANGUAGE),
    g = `capsule`,
    [_, v, y, re, x, S, ae, oe, se, le, ue] = n(() => [
      t.has_live_stream,
      t.GetEventType(),
      t.GetAllTags(),
      t.GetCategoryAsString(),
      t.GetNameWithFallback(h),
      t.BImageNeedScreenshotFallback(g, h),
      t.appid,
      t.GID,
      t.GetStartTimeAndDateUnixSeconds(),
      t.GetSubTitleWithLanguageFallback(h),
      t.GetSummaryWithFallback(h),
    ]),
    [de, fe] = q.useState(() => (m() && v == 14 ? b.full : b.capsule_main)),
    me = ce(),
    he = ee(S && ae && p ? void 0 : t, g, h, de, me) ?? p,
    _e = Yn(t, a),
    ye = Re(oe),
    Se = Y[`EventType${v}`],
    w = y.map((e) => Y[`Tag-${e}`]),
    Ce = z(
      wt,
      Se,
      _ && `MVfZPnoopw0-`,
      i ? void 0 : X,
      c && `utI2vL1PRLs-`,
      _e && `_4wxMhjLGDEo-`,
      ye && void 0,
      a === `wide` && void 0,
      a === `carousel` && `_6IHSOcZWQTI-`,
      a === `upcoming` && `i7ABr2eulso-`,
      ...w,
    ),
    T = le,
    E = ue;
  (T === E && (E = void 0), T === x && (T = void 0));
  let D = te(he),
    O = (0, J.jsx)(Zn, {
      setVideoPlayerReady: l,
      calendarEvent: r,
      eventModel: t,
      mode: a,
      artworkType: g,
      strCapsuleImgURLForBackground: D,
      fnSetCoverSize: fe,
    }),
    k = i && v != 14 && !(c && a !== `carousel`),
    A = k && O,
    Te = !k && O,
    Ee = v !== 28 && v !== 12 && we.GetTimeNowWithOverride() < se,
    j = a !== `wide` || i,
    M =
      Ee &&
      (0, J.jsx)(`div`, {
        className: z(`-VpcmDHYJBs-`, j && `_8hZf0ZZtftA-`),
        children: (0, J.jsx)(pe, {
          eventModel: t,
          lang: h,
          bShowStartTime: !0,
          bOnlyShowIcon: j,
          bExpandLeft: j,
        }),
      }),
    N = !!(v !== 12 && E),
    De = !(!T || (N && Jn(T, E)));
  return (0, J.jsxs)(`div`, {
    className: Ce,
    children: [
      (0, J.jsx)(ft, { event: t, recordNewsHubStats: !0 }),
      (0, J.jsx)(xe, {
        eventModel: t,
        route: be.k_eView,
        children: (0, J.jsxs)(`div`, {
          className: Yt,
          onClick: (e) => {
            (u.RecordInteraction(C.k_eClickThrough),
              !ve() && (s(t), e.stopPropagation(), e.preventDefault()));
          },
          children: [
            v === 14 &&
              (0, J.jsx)(`div`, {
                className: z(`TtzbM79RcOo-`, S && `yI-XQCfZhjU-`),
                style: { backgroundImage: `url(${D})` },
              }),
            (0, J.jsxs)(`div`, {
              className: Xt,
              children: [
                Te,
                (0, J.jsxs)(`div`, {
                  className: Qt,
                  children: [
                    v == 12 &&
                      (0, J.jsx)(`div`, {
                        className: `wdp2jpfiGas-`,
                        children: (0, J.jsx)(Pe, {}),
                      }),
                    (0, J.jsxs)(`div`, {
                      className: Q,
                      children: [
                        A,
                        !o &&
                          (0, J.jsxs)(`div`, {
                            className: `HcQu8--ilOI-`,
                            children: [
                              (0, J.jsx)($n, { ...e }),
                              r && (0, J.jsx)(tr, { calendarEvent: r }),
                            ],
                          }),
                        (0, J.jsx)(`div`, { className: en, children: x }),
                        (0, J.jsxs)(`div`, {
                          className: Lt,
                          children: [
                            (0, J.jsx)(`div`, {
                              className: z(Bt, Se),
                              children: re,
                            }),
                            (0, J.jsx)(er, {
                              eventModel: t,
                              className: z(j && `_6qTH13L4IdM-`),
                            }),
                            j && M,
                          ],
                        }),
                        De &&
                          (0, J.jsx)(`div`, {
                            className: `_9lDmRzgjqs4-`,
                            children: T,
                          }),
                        N &&
                          (0, J.jsx)(`div`, {
                            className: z(
                              `O79JneSzM9g-`,
                              T ? `h-oZBBAdgfo-` : ``,
                            ),
                            children: E,
                          }),
                      ],
                    }),
                    !j && M,
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, J.jsx)(ir, { ...e }),
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
    o = ge(),
    s = R(U.LANGUAGE),
    c = m() && a == 14 ? b.full : b.capsule_main,
    l = _e(t, `capsule`, s, c, !0);
  return r === `carousel`
    ? (0, J.jsx)(Gn, { altImgWithFallback: l, video: i, className: Z })
    : (0, J.jsx)(Kn, {
        video: i,
        altImgWithFallback: l,
        autoplay: !0,
        autopause: !0,
        showFullscreenBtn: !0,
        controls: !0,
        imageClassnames: Z,
        onPlayerActivated: () => {
          (o.RecordInteraction(C.k_ePlayedVideo), n(!0));
        },
        preloadYoutubeScripts: !0,
        playsInline: !0,
      });
}
function Zn(e) {
  let {
      eventModel: t,
      calendarEvent: r,
      mode: i,
      artworkType: a,
      strCapsuleImgURLForBackground: o,
      setVideoPlayerReady: s,
      fnSetCoverSize: c,
    } = e,
    l = R(U.LANGUAGE),
    u = Yn(t, i),
    d = !Yn(t, i) && i !== `upcoming`,
    [f, p, m, h, g, _] = n(() => [
      t.GetEventType(),
      t.has_live_stream,
      t.has_live_stream,
      t.clanSteamID.GetAccountID(),
      r.GetGameCapsule(),
      t.BImageNeedScreenshotFallback(a, l),
    ]);
  q.useEffect(() => {
    if (o) {
      let e = new Image();
      ((e.src = o),
        (e.onerror = () => {
          c(b.full);
        }));
    }
  }, [o, c]);
  let [, ee] = S(h),
    v = ee && !ee.is_ogg,
    y = t.GetSummaryWithFallback(l);
  return (
    t.GetSubTitleWithLanguageFallback(l) === y && (y = void 0),
    (0, J.jsxs)(`div`, {
      className: Tt,
      children: [
        u &&
          (0, J.jsx)(Xn, {
            eventModel: t,
            mode: i,
            calendarEvent: r,
            fnSetVideoStateReady: s,
          }),
        d &&
          (0, J.jsxs)(J.Fragment, {
            children: [
              f === 12 &&
                (0, J.jsxs)(J.Fragment, {
                  children: [
                    (0, J.jsx)(`div`, {
                      className: `E-S8WDov49g-`,
                      children: (0, J.jsx)(`div`, {
                        className: z({
                          "fzWS9zjHBQA-": !0,
                          "yI-XQCfZhjU-": _,
                          "zEB6Vo-lSoU-": v,
                        }),
                        style: { backgroundImage: `url(${g})` },
                      }),
                    }),
                    (0, J.jsx)(`div`, {
                      className: `NH4KbTPWsVo-`,
                      children: y,
                    }),
                  ],
                }),
              f !== 12 &&
                (0, J.jsxs)(`div`, {
                  className: z({ "iogiG-p5PHg-": !0, "e2Xhb-5xMvY-": m }),
                  children: [
                    (0, J.jsx)(`div`, {
                      className: z({
                        "_1ZYmIx0m7bo-": !0,
                        "yI-XQCfZhjU-": _,
                        "zEB6Vo-lSoU-": v,
                      }),
                      style: { backgroundImage: `url(${o})` },
                    }),
                    m && (0, J.jsx)(`div`, { className: `-y6T-NRjq1Q-` }),
                    p &&
                      (0, J.jsx)(`div`, {
                        className: `_0hsSPkL5myo-`,
                        children: F(`#home_page_live_broadcast`),
                      }),
                    m &&
                      (0, J.jsx)(`div`, {
                        className: `VideoHintText`,
                        children: F(`#EventCalendar_WatchLiveBroadcast`),
                      }),
                  ],
                }),
            ],
          }),
      ],
    })
  );
}
var Qn = o((e) => {
    let {
        eventModel: t,
        calendarEvent: n,
        bSuppressHoverEffects: r,
        history: i,
      } = e,
      a = ye(t, be.k_eStoreNewsHub, `allowRelative`),
      o = (e) => {
        (a.startsWith(`http`) ? (window.location.href = a) : i.push(a),
          e.stopPropagation(),
          e.preventDefault());
      },
      s = n.GetEntityName(),
      c = n.GetGameIcon(),
      l = z(xt, r ? void 0 : X);
    return (0, J.jsx)(j, {
      children: (0, J.jsx)(`div`, {
        className: sn,
        children: (0, J.jsxs)(`div`, {
          className: l,
          onClick: o,
          children: [
            (0, J.jsx)(`img`, { className: St, src: c }),
            (0, J.jsxs)(`div`, { className: Ct, children: [s, ` `] }),
          ],
        }),
      }),
    });
  }),
  $n = r(Qn),
  er = o((e) => {
    let { eventModel: t, calendarEvent: n, className: r } = e,
      i = W().GetStoreInitializationTimestamp().getTime() / 1e3,
      a = t ? t.GetStartTimeAndDateUnixSeconds() : n.start_time,
      o = t && v(t.type) && t.GetEndTimeAndDateUnixSeconds();
    if (o && a < i && i < o) {
      let e = o - i,
        t = B(e, !0);
      return (0, J.jsxs)(`div`, {
        className: z(Dt, r),
        children: [
          (0, J.jsx)(k, {
            rtFullDate: a,
            stylesmodule: Y,
            children: (0, J.jsx)(`div`, {
              className: Ot,
              children: F(`#EventCalendar_LiveNow`),
            }),
          }),
          (0, J.jsx)(k, {
            rtFullDate: o,
            stylesmodule: Y,
            children: F(`#EventCalendar_TimeLeft`, t),
          }),
        ],
      });
    }
    if (a < i) {
      let e = i - a,
        t = e < 86400 ? B(e, !1, !0) : Be(a);
      return (0, J.jsx)(k, {
        className: r,
        rtFullDate: a,
        stylesmodule: Y,
        children: (0, J.jsx)(`div`, { className: At, children: t }),
      });
    }
    {
      let e = new Date(i * 1e3);
      e.setHours(0, 0, 0, 1);
      let t = e.getTime() / 1e3,
        n = Math.floor((a - t) / 86400),
        o = n > 1 && n <= 5 ? Je(new Date(a * 1e3)) : Be(a),
        s = D(a);
      return (0, J.jsx)(k, {
        className: r,
        rtFullDate: a,
        stylesmodule: Y,
        children: (0, J.jsx)(`div`, {
          className: kt,
          children: F(`#EventCalendar_WillStartAtDateTime`, o, s),
        }),
      });
    }
  }),
  tr = o((e) => {
    let t = e.calendarEvent.GetSource(),
      n = [],
      r = W().m_visibilityStore;
    (t & K.k_eLibrary && r.BIsGameSourceAllowed(G.k_ELibrary)
      ? n.push({
          id: K.k_eLibrary,
          name: `#EventCalendar_GameSource_inLibrary`,
          ttip: `#EventCalendar_GameSource_EventExplanation_ttip_library`,
          styles: void 0,
        })
      : t & K.k_eWishlist && r.BIsGameSourceAllowed(G.k_EWishlist)
        ? n.push({
            id: K.k_eWishlist,
            name: `#EventCalendar_GameSource_onWishlist`,
            ttip: `#EventCalendar_GameSource_EventExplanation_ttip_wishlist`,
            styles: void 0,
          })
        : t & K.k_eRecommended && r.BIsGameSourceAllowed(G.k_ERecommended)
          ? n.push({
              id: K.k_eRecommended,
              name: `#EventCalendar_GameSource_recommended_Verbose`,
              ttip: `#EventCalendar_GameSource_EventExplanation_ttip_recommended`,
              styles: Pt,
            })
          : t & K.k_eFeatured &&
            r.BIsGameSourceAllowed(G.k_EFeatured) &&
            n.push({
              id: K.k_eFeatured,
              name: `#EventCalendar_GameSource_featured`,
              ttip: `#EventCalendar_GameSource_ttip_featured`,
              styles: void 0,
            }),
      t & K.k_eFollowing &&
        r.BIsGameSourceAllowed(G.k_EFollowing) &&
        n.push({
          id: K.k_eFollowing,
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
    return (0, J.jsx)(`div`, { className: Mt, children: i });
  }),
  nr = (e, t, n, r, i) =>
    (0, J.jsx)(
      H,
      {
        className: z(Nt, r),
        toolTipContent: F(n),
        children: F(t) + (i ? `, ` : ``),
      },
      e,
    );
function rr(e) {
  return V.logged_in
    ? V.is_limited
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
    r = ge(),
    { myVote: i, Vote: a } = me(t, { bAsk: !1 }),
    [, o] = S(t.clanSteamID.GetAccountID()),
    s = () => {
      i !== `up` && he() && (a(`up`), r.RecordInteraction(C.k_eThumbsUp));
    },
    c = () => {
      r.RecordInteraction(C.k_eDiscussions);
    },
    [l, u, d] = n(() => [
      Math.max(0, t.nVotesUp - t.nVotesDown),
      t.GetDiscussionURL(o?.vanity_url),
      t.nCommentCount,
    ]),
    f = rr(i),
    p = !N() && u,
    m = t.live_stream_viewer_count > 0 ? t.live_stream_viewer_count : void 0;
  return (0, J.jsx)(`div`, {
    className: ln,
    children: (0, J.jsxs)(`div`, {
      className: wn,
      children: [
        !!m && (0, J.jsx)(`div`, { className: `zxaNRVKQnTM-`, children: A(m) }),
        (0, J.jsxs)(`div`, {
          className: z($, void 0, f),
          onClick: s,
          children: [
            (0, J.jsx)(ke, { className: xn }),
            (0, J.jsx)(`span`, { children: A(Number(l)) }),
          ],
        }),
        p &&
          (0, J.jsx)(`div`, {
            className: `CakmFSjnZaQ-`,
            children: (0, J.jsxs)(`a`, {
              href: u,
              className: `_2aS2MHSUX-U-`,
              target: `_blank`,
              onClick: c,
              children: [
                (0, J.jsx)(Ze, { className: `Ilo9d6Bcf60-` }),
                (0, J.jsx)(`span`, { children: A(Number(d)) }),
              ],
            }),
          }),
        (0, J.jsx)(Hn, { ...e }),
      ],
    }),
  });
}
var ar = `emclan`,
  or = `emgid`;
function sr(e) {
  let { displayLocation: t, fnChangeModalEvent: n } = e,
    [r, i] = q.useState(null),
    [a, o] = w(or, null),
    [s, c] = w(ar, null);
  return (
    Ie(n, (e, t) => {
      (o(e), c(I.InitFromClanID(t, U.EUNIVERSE).ConvertTo64BitString()));
    }),
    q.useEffect(() => {
      if (a != null && s != null) {
        let e = new I(s);
        y.LoadPartnerEventFromClanEventGIDAndClanSteamID(e, a, 0).then(i);
      }
    }, [a, s]),
    r
      ? (0, J.jsx)(re, {
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
  let t = W(),
    n = T(Tr),
    r = t.GetActiveEventsAt(n) || [],
    [i] = q.useState(new Ae()),
    a = q.useCallback((e, t) => ut(y.GetClanEventModel(e), window), []);
  return t.GetNumEventsLoaded() == 0
    ? (0, J.jsx)(`div`, { children: F(`#Conference_No_Schedule_Yet`) })
    : (0, J.jsxs)(`div`, {
        className: yr,
        children: [
          (0, J.jsx)(sr, { displayLocation: 6, fnChangeModalEvent: i }),
          (0, J.jsx)(Ar, { rgActiveEvents: r, fnDisplayModalEvent: a }),
          (0, J.jsx)(Or, {
            rgActiveEvents: r,
            fnDisplayModalEvent: a,
            rtNow: n,
          }),
          (0, J.jsx)(`br`, {}),
          (0, J.jsx)(`br`, {}),
          (0, J.jsx)(Oe, {
            onClick: (e) => P((0, J.jsx)(Pr, {}), Ge(e)),
            children: F(`#Conference_NeedHelp`),
          }),
        ],
      });
}
function Dr(e) {
  return (0, J.jsx)(Nr, { ...e, children: (0, J.jsx)(Er, { ...e }) });
}
function Or(e) {
  let { rgActiveEvents: t, rtNow: n } = e,
    r = W()
      .GetCalendarItemsInTimeRange(n + 1)
      .rgCalendarItems.filter((e) => !t.some((t) => t.GID == e.unique_id))
      .sort((e, t) => e.start_time - t.start_time);
  return r.length == 0
    ? (0, J.jsx)(`div`, { children: F(`#Conference_No_More_Schedule`) })
    : (0, J.jsxs)(`div`, {
        className: cr,
        children: [
          (0, J.jsx)(`div`, {
            className: lr,
            children: F(`#Conference_ScheduleNext`),
          }),
          (0, J.jsx)(`div`, {
            className: ur,
            children: r.map((r, i) =>
              (0, J.jsx)(
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
    o = R(U.LANGUAGE),
    s = a.GetStartTimeAndDateUnixSeconds(),
    c = qe(new Date(i * 1e3), new Date(s * 1e3));
  return (0, J.jsxs)(`div`, {
    className: dr,
    onClick: () => r(a.GID, a.clanSteamID.GetAccountID()),
    children: [
      (0, J.jsx)(`div`, { className: fr, children: a.GetNameWithFallback(o) }),
      (0, J.jsxs)(`div`, {
        className: pr,
        children: [
          !c && (0, J.jsx)(`div`, { children: He(s, !0) }),
          (0, J.jsx)(`div`, {
            children:
              n && c
                ? F(
                    `#Conference_StartInMin`,
                    Math.max(1, Math.floor((s - i) / 60)),
                  )
                : F(`#Conference_StartsAt`, ze(s, { bForce24HourClock: !1 })),
          }),
        ],
      }),
      (0, J.jsx)(`div`, {
        className: z(br, xr),
        children: (0, J.jsx)(pe, {
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
    i = R(U.LANGUAGE),
    a = nt.ParseEventModelPresenters(r, i);
  return (0, J.jsxs)(`div`, {
    className: mr,
    children: [
      (0, J.jsxs)(`div`, {
        className: hr,
        children: [(0, J.jsx)(`div`, { className: gr }), `Live Now!`],
      }),
      (0, J.jsx)(`div`, { className: fr, children: r.GetNameWithFallback(i) }),
      !!a &&
        a.map((e) =>
          (0, J.jsx)(
            _,
            {
              name: e.name,
              title: e.title,
              photo: e.photo,
              company: e.company,
              bioString: e.bio,
              children: (0, J.jsx)(`div`, { children: e.name }),
            },
            `presenter_` + e.name,
          ),
        ),
      (0, J.jsx)(`div`, {
        className: _r,
        children: r.GetSummaryWithFallback(i),
      }),
      (0, J.jsx)(`div`, {
        className: vr,
        onClick: () => n(r.GID, r.clanSteamID.GetAccountID()),
        children: F(`#EventEmail_Button_ClickForMoreDetails`),
      }),
    ],
  });
}
function jr(e) {
  let { conferenceInfo: t } = e,
    n = W(),
    r = T(Tr),
    i = n.GetActiveEventsAt(r) || [],
    [a] = q.useState(new Ae()),
    o = n
      .GetCalendarItemsInTimeRange(t.rtStartTime - 1, r)
      .rgCalendarItems.filter((e) => i.length == 0 || i[0].GID != e.unique_id)
      .sort((e, t) => e.start_time - t.start_time);
  return o.length == 0
    ? (0, J.jsx)(`div`, { children: F(`#Conference_NoPastEvents`) })
    : (0, J.jsxs)(`div`, {
        className: Sr,
        children: [
          (0, J.jsx)(sr, { displayLocation: 6, fnChangeModalEvent: a }),
          o.map((e) => {
            let t = y.GetClanEventModel(e.unique_id);
            return (0, J.jsx)(
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
  return (0, J.jsx)(Nr, { ...e, children: (0, J.jsx)(jr, { ...e }) });
}
function Nr(e) {
  let { conferenceInfo: t } = e,
    n = Se(`WithCalendarStore`),
    [r, i] = (0, q.useState)(!0);
  return (
    (0, q.useEffect)(() => {
      n.token.reason ||
        yt
          .Get()
          .LoadInitialCalendarData(t.rtEndTime, t.strConferenceID)
          .finally(() => {
            n.token.reason || i(!1);
          });
    }, [t.rtEndTime, t.strConferenceID, n]),
    r ? (0, J.jsx)(oe, {}) : (0, J.jsx)(J.Fragment, { children: e.children })
  );
}
function Pr(e) {
  let { closeModal: t } = e;
  return (0, J.jsxs)(L, {
    strTitle: F(`#Conference_NeedHelp`),
    bAlertDialog: !0,
    onCancel: t,
    onOK: t,
    children: [
      (0, J.jsx)(`div`, { children: F(`#Conference_NeedHelp_Desc1`) }),
      (0, J.jsxs)(`div`, {
        children: [
          (0, J.jsxs)(`div`, {
            className: Cr,
            children: [
              (0, J.jsx)(`div`, {
                children: F(`#Conference_NeedHelp_BroadcastChatQ`),
              }),
              (0, J.jsxs)(`ul`, {
                className: wr,
                children: [
                  (0, J.jsx)(`li`, {
                    children: F(`#Conference_NeedHelp_ChatA1`),
                  }),
                  (0, J.jsx)(`li`, {
                    children: Ke(
                      `#Conference_NeedHelp_BroadcastChatA1`,
                      (0, J.jsx)(`a`, {
                        href: `https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A`,
                        children: F(`#Conferenec_NeedHelp_LimitedAccounts`),
                      }),
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: Cr,
            children: [
              (0, J.jsx)(`div`, { children: F(`#Conference_NeedHelp_QandAQ`) }),
              (0, J.jsx)(`ul`, {
                children: (0, J.jsx)(`li`, {
                  children: F(`#Conference_NeedHelp_ChatA1`),
                }),
              }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: Cr,
            children: [
              (0, J.jsx)(`span`, {
                children: F(`#Conference_NeedHelp_StillHaveQuestions`),
              }),
              (0, J.jsx)(`a`, {
                href: `https://help.steampowered.com/wizard/HelpWithPublishing?issueid=933`,
                children: F(`#Conference_NeedHelp_CreateTicket`),
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
    [r, i] = q.useState(!1),
    a = T(Fe.PerMinute) < t.rtStartTime - ei * Fe.PerMinute;
  return (0, J.jsxs)(`div`, {
    className: Fr,
    children: [
      (0, J.jsx)(`div`, {
        className: z(Ir, r ? `Active` : `Hidden`),
        children: (0, J.jsxs)(`div`, {
          className: void 0,
          children: [
            (0, J.jsx)(Dr, { conferenceInfo: t }),
            (0, J.jsxs)(`div`, {
              className: Lr,
              onClick: () => {
                i(!r);
              },
              children: [
                (0, J.jsx)(H, {
                  toolTipContent: F(`#QAndA_HideSchedule`),
                  children: (0, J.jsx)(`div`, {
                    className: Rr,
                    children: (0, J.jsx)(Ee, { angle: 0 }),
                  }),
                }),
                (0, J.jsx)(H, {
                  toolTipContent: F(`#QAndA_ShowSchedule`),
                  children: (0, J.jsxs)(`div`, {
                    className: zr,
                    children: [
                      (0, J.jsx)(Le, {}),
                      (0, J.jsx)(`div`, {
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
      (0, J.jsxs)(`div`, {
        className: Vr,
        children: [
          n &&
            (0, J.jsx)(se, {
              videoID: t.youtubeVideoID,
              bAutoPlay: !0,
              bShowVideoImmediately: !0,
            }),
          a
            ? (0, J.jsx)(`div`, {
                className: Hr,
                children: (0, J.jsx)(`div`, {
                  className: Ur,
                  children: F(`#Conference_ChatHidden`, ei),
                }),
              })
            : (0, J.jsx)(ni, { conferenceInfo: t }),
        ],
      }),
    ],
  });
}
function ni(e) {
  let { conferenceInfo: t } = e,
    [n, r] = q.useState(window.innerWidth > 910),
    [i, a] = q.useState(!0),
    o =
      U.COMMUNITY_BASE_URL +
      `broadcast/chatonly/` +
      t.broadcastSteamID.ConvertTo64BitString(),
    s =
      U.COMMUNITY_BASE_URL +
      `questions/` +
      Ye.VANITY_ID +
      `/view/` +
      t.globalQandASessionID;
  return (0, J.jsxs)(`div`, {
    className: Hr,
    children: [
      (0, J.jsxs)(`div`, {
        className: Wr,
        children: [
          (0, J.jsxs)(`div`, {
            className: z(Jr, Kr, n ? Zr : ``),
            children: [
              (0, J.jsx)(`div`, {
                className: Yr,
                onClick: () => {
                  (r(!0), a(!1));
                },
                children: F(`#Conference_Tab_Chat`),
              }),
              (0, J.jsx)(H, {
                toolTipContent: F(`#QAndA_PopOutChat_ttip`),
                children: (0, J.jsx)(`a`, {
                  className: Xr,
                  href: o,
                  target: `_blank`,
                  children: (0, J.jsx)(Ue, {}),
                }),
              }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: z(Jr, qr, i ? Zr : ``),
            children: [
              (0, J.jsx)(`div`, {
                className: Yr,
                onClick: () => {
                  (r(!1), a(!0));
                },
                children: F(`#Conference_Tab_QandA`),
              }),
              (0, J.jsx)(H, {
                toolTipContent: F(`#QAndA_PopOutQAndA_ttip`),
                children: (0, J.jsx)(`a`, {
                  className: Xr,
                  href: s,
                  target: `_blank`,
                  children: (0, J.jsx)(Ue, {}),
                }),
              }),
            ],
          }),
          (0, J.jsx)(H, {
            toolTipContent: F(`#QAndA_ChatToggle_ShowBoth`),
            children: (0, J.jsx)(`div`, {
              className: Gr,
              onClick: () => {
                (r(!0), a(!0));
              },
              children: (0, J.jsx)(Ne, {}),
            }),
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: Qr,
        children: [
          !!((n && i) || (!i && !n)) &&
            (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(`div`, {
                  className: `udjEFKIUdiE-`,
                  children: (0, J.jsx)(gt, {
                    conferenceInfo: t,
                    className: void 0,
                  }),
                }),
                (0, J.jsx)(`div`, {
                  className: `DIG-5XDM5sY-`,
                  children: (0, J.jsx)(st, {
                    gidSession: t.globalQandASessionID,
                  }),
                }),
              ],
            }),
          !(!n || i) &&
            (0, J.jsx)(gt, { conferenceInfo: t, className: void 0 }),
          !(n || !i) && (0, J.jsx)(st, { gidSession: t.globalQandASessionID }),
        ],
      }),
    ],
  });
}
function ri(e) {
  let { conferenceInfo: t } = e;
  if (!t.faqAboutPage)
    return (0, J.jsx)(`div`, { children: F(`#Conference_NoAbout`) });
  let { title: n, content: r, timestamp: i } = t.faqAboutPage;
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsx)(`div`, { className: $r, children: n }),
      (0, J.jsx)(ot, { text: r, bShowErrorInfo: !1, version: `0` }),
    ],
  });
}
function ii(e) {
  let { conferenceInfo: t } = e;
  return (0, J.jsx)(Mr, { conferenceInfo: t });
}
var ai = `M42gpbQtAZI-`,
  oi = `hdKB5VYayBQ-`,
  si = `nMQQZr-aUcU-`,
  ci = `t1L6jOPZ6ZI-`,
  li = `erGrP-fnka8-`,
  ui = `oAPQHisXVV4-`;
function di(e) {
  let { strVanity: t } = e,
    n = pt.Get().GetConferenceInfo(t);
  return n
    ? (0, J.jsx)(j, {
        children: (0, J.jsx)(`div`, {
          className: ai,
          children: (0, J.jsx)(fi, { conferenceInfo: n }),
        }),
      })
    : (0, J.jsx)(`div`, { children: F(`#Conference_Invalid`) });
}
function fi(e) {
  let { conferenceInfo: t } = e,
    n = (e) =>
      window.sessionStorage.setItem(`conferenceCurrentTab`, `?tab=${e.key}`),
    r = [],
    i = E();
  return (
    i < t.rtEndTime &&
      r.push({
        name: F(`#Conference_tab_Home`),
        key: `live`,
        contents: (0, J.jsx)(j, {
          children: (0, J.jsx)(ti, {
            bShowYouTube: !!t.youtubeVideoID,
            conferenceInfo: t,
          }),
        }),
        onClick: n,
      }),
    r.push({
      name: F(`#Conference_tab_Past`),
      key: `past`,
      contents: (0, J.jsxs)(j, {
        children: [
          (0, J.jsx)(ii, { conferenceInfo: t }),
          !t.youtubeVideoID &&
            i < t.rtEndTime &&
            (0, J.jsx)(_t, { conferenceInfo: t }),
        ],
      }),
      onClick: n,
    }),
    r.push({
      name: F(`#Conference_tab_Info`),
      key: `about`,
      contents: (0, J.jsxs)(j, {
        children: [
          (0, J.jsx)(ri, { conferenceInfo: t }),
          !t.youtubeVideoID &&
            i < t.rtEndTime &&
            (0, J.jsx)(_t, { conferenceInfo: t }),
        ],
      }),
      onClick: n,
    }),
    r.push({
      name: `(VO/Internal) Debug`,
      key: `debug`,
      hidden: !0,
      contents: (0, J.jsx)(j, {
        children: (0, J.jsx)(vt, { conferenceInfo: t }),
      }),
      onClick: n,
    }),
    (0, J.jsxs)(`div`, {
      className: oi,
      children: [
        (0, J.jsxs)(`div`, {
          className: si,
          children: [
            (0, J.jsx)(de, { className: ci, rgSources: t.strLocalizedLogos }),
            (0, J.jsx)(de, {
              className: li,
              rgSources: t.strLocalizedMobileLogos,
            }),
            (0, J.jsx)(`div`, {
              className: ui,
              children: (0, J.jsx)(O, {
                rtStartDate: t.rtStartTime,
                rtEndDate: t.rtEndTime,
              }),
            }),
          ],
        }),
        (0, J.jsx)(Ce, { tabs: r }),
      ],
    })
  );
}
var pi = {
  LandingPage: (e) => `/(conference|steamworksvirtualconference)/${e}`,
};
function mi(e) {
  return (0, J.jsxs)(l, {
    children: [
      (0, J.jsx)(c, {
        path: pi.LandingPage(`:vanity_str`),
        render: (e) =>
          (0, J.jsx)(Ve, {
            config: {
              "conference-root": () => {
                let { vanity_str: t } = e.match.params;
                return (0, J.jsx)(di, { strVanity: t.toLocaleLowerCase() });
              },
            },
          }),
      }),
      (0, J.jsx)(c, { component: $e }),
    ],
  });
}
export { pi as ConferenceRoutes, mi as default };
