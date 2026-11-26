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
  Ai as u,
  Go as d,
  Ln as f,
  Uo as p,
  Yt as m,
  cn as h,
  fn as ee,
  hi as g,
  jn as _,
  l as v,
  mn as y,
  os as b,
  rs as x,
  ws as te,
} from "./chunk~3f4314f3b4.js";
import { t as ne } from "./chunk~6eb508043a.js";
import { t as S } from "./chunk~404eafa76f.js";
import { a as C, s as re } from "./chunk~437071091c.js";
import { t as ie } from "./chunk~eee3bbd4cd.js";
import { t as ae } from "./chunk~eefd71512b.js";
import {
  F as oe,
  G as se,
  K as ce,
  R as le,
  dt as w,
  z as ue,
} from "./chunk~05a38bc848.js";
import {
  It as T,
  Nt as de,
  gt as fe,
  mt as pe,
  zt as me,
} from "./chunk~77ea210942.js";
import {
  D as he,
  H as ge,
  J as E,
  U as D,
  W as _e,
} from "./chunk~21cdc464a1.js";
import { t as ve } from "./chunk~92931c6310.js";
import { o as ye } from "./chunk~af36c62e9f.js";
import { t as be } from "./chunk~37e5316e27.js";
import { i as O, n as xe, r as k } from "./chunk~0111fcd096.js";
import { l as A, o as Se, u as j } from "./chunk~ec644f97c6.js";
import { t as M } from "./chunk~9d71b14b50.js";
import {
  $c as Ce,
  Cc as we,
  Cu as N,
  Gs as P,
  Hf as F,
  Hs as Te,
  Ji as I,
  Jo as Ee,
  Kl as De,
  Lh as Oe,
  Ps as ke,
  Qd as L,
  Tm as R,
  Vi as Ae,
  Ws as je,
  Xm as z,
  _l as Me,
  al as Ne,
  ap as Pe,
  bu as B,
  cd as Fe,
  dc as Ie,
  f as Le,
  ff as Re,
  gf as ze,
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
        let t = z(U.LANGUAGE),
          n = it(e.clan_faq_about_page),
          r = at.Get().GetFAQPublishedContent(n, t),
          i = {
            strConferenceID: e.vanity,
            rtStartTime: e.start_rtime,
            rtEndTime: e.end_rtime,
            clanSteamID: new R(e.event_group_steamid),
            broadcastSteamID: new R(e.broadcast_steamid),
            bPartnerOnly: e.partner_only,
            faqAboutPage: r,
            strLocalizedLogos: null,
            strLocalizedMobileLogos: null,
            globalQandASessionID: e.global_qanda_session_id,
            youtubeVideoID: e.youtubeVideoID,
          };
        this.m_mapConferences.set(e.vanity, i);
        let a = await b(e.localized_logo, t, r?.timestamp),
          o = await b(e.localized_mobile_logo, t, r?.timestamp);
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
  return (0, J.jsx)(N, {
    children: (0, J.jsx)(ie, {
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
    className: B(mt, e.className ? `${e.className}` : ``),
    children: (0, J.jsx)(N, {
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
          (0, J.jsx)(S, {
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
    EventCapsuleCtn: () => dn,
    EventName: () => en,
    EventSubTitle: () => tn,
    EventSummaryDefault: () => vn,
    EventTitleCtn: () => ln,
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
    Footer: () => un,
    FooterRightSide: () => Q,
    FooterStat: () => $,
    FutureDateText: () => kt,
    GameCapsuleCtn: () => nn,
    GameShortDescription: () => Et,
    GameSource: () => jt,
    GameTitleContainer: () => xt,
    HasVideo: () => Pn,
    LeaveRoomForReminder: () => Rt,
    LiveBroadcastPreview: () => fn,
    LiveNow: () => Ot,
    LiveText: () => Dt,
    LoadingTile: () => kn,
    MainContentContainer: () => Xt,
    OnlyIcon: () => _n,
    Options: () => Tn,
    PastDateText: () => At,
    PatchIconCtn: () => cn,
    RateIcon: () => Sn,
    RecommendedSource: () => Pt,
    ReminderContainer: () => gn,
    SmallAppName: () => zt,
    Source: () => Nt,
    SourceList: () => Mt,
    SourceRecommended: () => Ft,
    SubTitleShown: () => Fn,
    Tile: () => Yt,
    TileBackgroundImage: () => pn,
    TileContainer: () => wt,
    TileCoverImagePlayable: () => mn,
    TileCoverLiveIcon: () => hn,
    TileImage: () => Zt,
    TileTextAppName: () => Ct,
    TileTextCategoryType: () => Bt,
    TileTextContainer: () => Qt,
    TileTextHeader: () => sn,
    TileVideoIcon: () => Mn,
    TileViewerCount: () => En,
    UpcomingMode: () => jn,
    VideoPlayerReady: () => In,
    Vote_LimitedUser: () => bn,
    Vote_Negative: () => Cn,
    Vote_NotLoggedIn: () => yn,
    Vote_Positive: () => xn,
    Vote_Ready: () => wn,
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
  ln = `ym2tgXthxzw-`,
  un = `KQCQvl8Sul0-`,
  dn = `iogiG-p5PHg-`,
  fn = `e2Xhb-5xMvY-`,
  pn = `TtzbM79RcOo-`,
  mn = `-y6T-NRjq1Q-`,
  hn = `_0hsSPkL5myo-`,
  gn = `-VpcmDHYJBs-`,
  _n = `_8hZf0ZZtftA-`,
  vn = `O79JneSzM9g-`,
  yn = `je6TW3nEJQQ-`,
  bn = `C-MokZjgv5M-`,
  xn = `Ba6BoHg0H10-`,
  Sn = `bzgJpyO0RQM-`,
  Cn = `-How-9UKQAA-`,
  wn = `EY35qqcJWWo-`,
  Q = `_79iz6FtxgOc-`,
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
    EventTitleCtn: ln,
    Footer: un,
    EventCapsuleCtn: dn,
    LiveBroadcastPreview: fn,
    TileBackgroundImage: pn,
    TileCoverImagePlayable: mn,
    TileCoverLiveIcon: hn,
    ReminderContainer: gn,
    OnlyIcon: _n,
    EventSummaryDefault: vn,
    Vote_NotLoggedIn: yn,
    Vote_LimitedUser: bn,
    Vote_Positive: xn,
    RateIcon: Sn,
    Vote_Negative: Cn,
    Vote_Ready: wn,
    FooterRightSide: Q,
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
  return (0, J.jsx)(Ae, {
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
        I((0, J.jsx)(Rn, {}), window)));
}
var Bn = o((e) => {
  let { eventModel: t, calendarEvent: n, history: r } = e,
    i = (e) => {
      let t = n.GetEntityName();
      I(
        (0, J.jsx)(Ae, {
          strTitle: L(`#EventCalendar_MuteApp_Title`, t),
          strDescription: L(`#EventCalendar_MuteApp_details`, t),
          onOK: () => W().UpdateEventBlockFromCalendarEvent(n, !1),
          children: (0, J.jsx)(`a`, {
            href: U.STORE_BASE_URL + `account/emailoptout/app`,
            target: U.IN_CLIENT ? void 0 : `_blank`,
            children: L(`#EventCalendar_ManageMutedSources`),
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
              P,
              {
                disabled: !0,
                onSelected: () => {},
                children: L(`#EventCalender_Reason_` + t),
              },
              `item-source-${n}-${t}`,
            ),
          ),
        e.push(
          (0, J.jsx)(
            P,
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
    l = E(t, D.k_eStoreNewsHub, `allowRelative`),
    u = () => {
      l.startsWith(`http`) ? (window.location.href = l) : r.push(l);
    };
  return (0, J.jsx)(`div`, {
    className: B($, Tn),
    onClick: (e) => {
      let r = [],
        l = n.GetSource(),
        d = n.unique_id,
        f = F(),
        p = W();
      (p.BIsGlobalCalendar() &&
        (l &&
          l & K.k_eLibrary &&
          (s().BIsGameSourceAllowed(G.k_ERecent) && n.appInfo
            ? (r.push(
                (0, J.jsx)(
                  P,
                  {
                    disabled: !0,
                    onSelected: () => {},
                    children: L(
                      `#EventCalender_LastPlayed`,
                      ze(xe.GetTimeNowWithOverride() - n.appInfo.last_played),
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
            P,
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
        V.logged_in &&
          (dt.Get().BIsEventBlocked(n)
            ? r.push(
                (0, J.jsx)(
                  P,
                  {
                    onSelected: a,
                    children: (0, J.jsx)(H, {
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
                (0, J.jsx)(
                  P,
                  {
                    onSelected: i,
                    children: (0, J.jsx)(H, {
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
          r.push((0, J.jsx)(Vn, { eventModel: t, calendarEvent: n })),
        p.BIsSingleSourceCalendar() ||
          r.push(
            (0, J.jsx)(
              P,
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
            (0, J.jsx)(
              P,
              {
                onSelected: () =>
                  (window.location.href = ke(
                    U.STORE_BASE_URL + `app/` + t.appid,
                  )),
                children: L(`#EventDisplay_ViewStorePage`),
              },
              t.GID + `goto`,
            ),
          ),
        Te((0, J.jsx)(je, { children: r }), e));
    },
    children: (0, J.jsx)(Ce, {}),
  });
});
function Vn(e) {
  let { eventModel: t, calendarEvent: n } = e,
    r = m(t.clanSteamID.GetAccountID()),
    { elDialogElement: i, fnShowLogonDialog: a } = f(),
    o = q.useCallback(async () => {
      V.logged_in
        ? (await _.Get().UpdateFollowOrIgnoreCurator(t.clanSteamID, !0, !r),
          zn(!!r))
        : a();
    }, [r, t.clanSteamID, a]);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(
        P,
        {
          onSelected: o,
          children: (0, J.jsx)(H, {
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
var Hn = r(Bn),
  Un = `slvPA8f0gLM-`,
  Wn = `kcXPMd3IHiw-`,
  Gn = (e) => {
    let t = [`maxresdefault`, `mqdefault`, `default`],
      [n, r] = q.useState(0);
    q.useEffect(() => r(0), [e.video]);
    let i = q.useRef(null);
    if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
      return (0, J.jsx)(p, {
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
        className: B(Un, e.className),
      });
    }
  },
  Kn = (e) => {
    let [t, n] = q.useState(!1);
    ue(!!e.preloadYoutubeScripts);
    let r = ce(`youtube`);
    return !t || !r
      ? (0, J.jsxs)(`div`, {
          className: B(`YoutubePreviewContainer`, Un, e.imageClassnames),
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
                    children: L(`#EventCalendar_WatchYouTubeVideo`),
                  }),
                ],
              }),
          ],
        })
      : (0, J.jsx)(le, { ...e, classnames: B(Wn, e.classnames) });
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
    u = me(),
    f = te(t.GetAppIDOrReferenceAppID());
  Qe(f);
  let p = y(t);
  re(r.clanInfo?.clanid);
  let m = z(U.LANGUAGE),
    h = `capsule`,
    [_, v, b, ne, S, C, ie, ae, oe, ce, le] = n(() => [
      t.has_live_stream,
      t.GetEventType(),
      t.GetAllTags(),
      t.GetCategoryAsString(),
      t.GetNameWithFallback(m),
      t.BImageNeedScreenshotFallback(h, m),
      t.appid,
      t.GID,
      t.GetStartTimeAndDateUnixSeconds(),
      t.GetSubTitleWithLanguageFallback(m),
      t.GetSummaryWithFallback(m),
    ]),
    [w, ue] = q.useState(() => (d() && v == 14 ? x.full : x.capsule_main)),
    fe = se(),
    pe = ee(C && ie && p ? void 0 : t, h, m, w, fe) ?? p,
    he = Yn(t, a),
    E = Le(ae),
    ve = Y[`EventType${v}`],
    ye = b.map((e) => Y[`Tag-${e}`]),
    be = B(
      wt,
      ve,
      _ && `MVfZPnoopw0-`,
      i ? void 0 : X,
      c && `utI2vL1PRLs-`,
      he && `_4wxMhjLGDEo-`,
      E && void 0,
      a === `wide` && void 0,
      a === `carousel` && `_6IHSOcZWQTI-`,
      a === `upcoming` && `i7ABr2eulso-`,
      ...ye,
    ),
    O = ce,
    k = le;
  (O === k && (k = void 0), O === S && (O = void 0));
  let A = g(pe),
    Se = (0, J.jsx)(Zn, {
      setVideoPlayerReady: l,
      calendarEvent: r,
      eventModel: t,
      mode: a,
      artworkType: h,
      strCapsuleImgURLForBackground: A,
      fnSetCoverSize: ue,
    }),
    j = i && v != 14 && !(c && a !== `carousel`),
    M = j && Se,
    Ce = !j && Se,
    we = v !== 28 && v !== 12 && xe.GetTimeNowWithOverride() < oe,
    N = a !== `wide` || i,
    P =
      we &&
      (0, J.jsx)(`div`, {
        className: B(`-VpcmDHYJBs-`, N && `_8hZf0ZZtftA-`),
        children: (0, J.jsx)(de, {
          eventModel: t,
          lang: m,
          bShowStartTime: !0,
          bOnlyShowIcon: N,
          bExpandLeft: N,
        }),
      }),
    F = !!(v !== 12 && k),
    Te = !(!O || (F && Jn(O, k)));
  return (0, J.jsxs)(`div`, {
    className: be,
    children: [
      (0, J.jsx)(ft, { event: t, recordNewsHubStats: !0 }),
      (0, J.jsx)(_e, {
        eventModel: t,
        route: D.k_eView,
        children: (0, J.jsxs)(`div`, {
          className: Yt,
          onClick: (e) => {
            (u.RecordInteraction(T.k_eClickThrough),
              !ge() && (s(t), e.stopPropagation(), e.preventDefault()));
          },
          children: [
            v === 14 &&
              (0, J.jsx)(`div`, {
                className: B(`TtzbM79RcOo-`, C && `yI-XQCfZhjU-`),
                style: { backgroundImage: `url(${A})` },
              }),
            (0, J.jsxs)(`div`, {
              className: Xt,
              children: [
                Ce,
                (0, J.jsxs)(`div`, {
                  className: Qt,
                  children: [
                    v == 12 &&
                      (0, J.jsx)(`div`, {
                        className: `wdp2jpfiGas-`,
                        children: (0, J.jsx)(Ne, {}),
                      }),
                    (0, J.jsxs)(`div`, {
                      className: ln,
                      children: [
                        M,
                        !o &&
                          (0, J.jsxs)(`div`, {
                            className: `HcQu8--ilOI-`,
                            children: [
                              (0, J.jsx)($n, { ...e }),
                              r && (0, J.jsx)(tr, { calendarEvent: r }),
                            ],
                          }),
                        (0, J.jsx)(`div`, { className: en, children: S }),
                        (0, J.jsxs)(`div`, {
                          className: Lt,
                          children: [
                            (0, J.jsx)(`div`, {
                              className: B(Bt, ve),
                              children: ne,
                            }),
                            (0, J.jsx)(er, {
                              eventModel: t,
                              className: B(N && `_6qTH13L4IdM-`),
                            }),
                            N && P,
                          ],
                        }),
                        Te &&
                          (0, J.jsx)(`div`, {
                            className: `_9lDmRzgjqs4-`,
                            children: O,
                          }),
                        F &&
                          (0, J.jsx)(`div`, {
                            className: B(
                              `O79JneSzM9g-`,
                              O ? `h-oZBBAdgfo-` : ``,
                            ),
                            children: k,
                          }),
                      ],
                    }),
                    !N && P,
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
    o = me(),
    s = z(U.LANGUAGE),
    c = d() && a == 14 ? x.full : x.capsule_main,
    l = he(t, `capsule`, s, c, !0);
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
          (o.RecordInteraction(T.k_ePlayedVideo), n(!0));
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
    l = z(U.LANGUAGE),
    u = Yn(t, i),
    d = !Yn(t, i) && i !== `upcoming`,
    [f, p, m, h, ee, g] = n(() => [
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
          c(x.full);
        }));
    }
  }, [o, c]);
  let [, _] = C(h),
    v = _ && !_.is_ogg,
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
                        className: B({
                          "fzWS9zjHBQA-": !0,
                          "yI-XQCfZhjU-": g,
                          "zEB6Vo-lSoU-": v,
                        }),
                        style: { backgroundImage: `url(${ee})` },
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
                  className: B({ "iogiG-p5PHg-": !0, "e2Xhb-5xMvY-": m }),
                  children: [
                    (0, J.jsx)(`div`, {
                      className: B({
                        "_1ZYmIx0m7bo-": !0,
                        "yI-XQCfZhjU-": g,
                        "zEB6Vo-lSoU-": v,
                      }),
                      style: { backgroundImage: `url(${o})` },
                    }),
                    m && (0, J.jsx)(`div`, { className: `-y6T-NRjq1Q-` }),
                    p &&
                      (0, J.jsx)(`div`, {
                        className: `_0hsSPkL5myo-`,
                        children: L(`#home_page_live_broadcast`),
                      }),
                    m &&
                      (0, J.jsx)(`div`, {
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
var Qn = o((e) => {
    let {
        eventModel: t,
        calendarEvent: n,
        bSuppressHoverEffects: r,
        history: i,
      } = e,
      a = E(t, D.k_eStoreNewsHub, `allowRelative`),
      o = (e) => {
        (a.startsWith(`http`) ? (window.location.href = a) : i.push(a),
          e.stopPropagation(),
          e.preventDefault());
      },
      s = n.GetEntityName(),
      c = n.GetGameIcon(),
      l = B(xt, r ? void 0 : X);
    return (0, J.jsx)(N, {
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
      o = t && u(t.type) && t.GetEndTimeAndDateUnixSeconds();
    if (o && a < i && i < o) {
      let e = o - i,
        t = ze(e, !0);
      return (0, J.jsxs)(`div`, {
        className: B(Dt, r),
        children: [
          (0, J.jsx)(j, {
            rtFullDate: a,
            stylesmodule: Y,
            children: (0, J.jsx)(`div`, {
              className: Ot,
              children: L(`#EventCalendar_LiveNow`),
            }),
          }),
          (0, J.jsx)(j, {
            rtFullDate: o,
            stylesmodule: Y,
            children: L(`#EventCalendar_TimeLeft`, t),
          }),
        ],
      });
    }
    if (a < i) {
      let e = i - a,
        t = e < 86400 ? ze(e, !1, !0) : Be(a);
      return (0, J.jsx)(j, {
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
        s = A(a);
      return (0, J.jsx)(j, {
        className: r,
        rtFullDate: a,
        stylesmodule: Y,
        children: (0, J.jsx)(`div`, {
          className: kt,
          children: L(`#EventCalendar_WillStartAtDateTime`, o, s),
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
        className: B(Nt, r),
        toolTipContent: L(n),
        children: L(t) + (i ? `, ` : ``),
      },
      e,
    );
function rr(e) {
  return V.logged_in
    ? V.is_limited
      ? bn
      : e === `up`
        ? xn
        : e === `down`
          ? Cn
          : wn
    : yn;
}
function ir(e) {
  let { eventModel: t } = e,
    r = me(),
    { myVote: i, Vote: a } = fe(t, { bAsk: !1 }),
    [, o] = C(t.clanSteamID.GetAccountID()),
    s = () => {
      i !== `up` && pe() && (a(`up`), r.RecordInteraction(T.k_eThumbsUp));
    },
    c = () => {
      r.RecordInteraction(T.k_eDiscussions);
    },
    [l, u, d] = n(() => [
      Math.max(0, t.nVotesUp - t.nVotesDown),
      t.GetDiscussionURL(o?.vanity_url),
      t.nCommentCount,
    ]),
    f = rr(i),
    p = !F() && u,
    m = t.live_stream_viewer_count > 0 ? t.live_stream_viewer_count : void 0;
  return (0, J.jsx)(`div`, {
    className: un,
    children: (0, J.jsxs)(`div`, {
      className: Q,
      children: [
        !!m && (0, J.jsx)(`div`, { className: `zxaNRVKQnTM-`, children: M(m) }),
        (0, J.jsxs)(`div`, {
          className: B($, void 0, f),
          onClick: s,
          children: [
            (0, J.jsx)(De, { className: Sn }),
            (0, J.jsx)(`span`, { children: M(Number(l)) }),
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
                (0, J.jsx)(`span`, { children: M(Number(d)) }),
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
    [a, o] = ye(or, null),
    [s, c] = ye(ar, null);
  return (
    Fe(n, (e, t) => {
      (o(e), c(R.InitFromClanID(t, U.EUNIVERSE).ConvertTo64BitString()));
    }),
    q.useEffect(() => {
      if (a != null && s != null) {
        let e = new R(s);
        v.LoadPartnerEventFromClanEventGIDAndClanSteamID(e, a, 0).then(i);
      }
    }, [a, s]),
    r
      ? (0, J.jsx)(ne, {
          appid: r.appid,
          trackingLocation: t,
          announcementGID: r.GetAnnouncementGID(),
          partnerEventStore: v,
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
    n = O(Tr),
    r = t.GetActiveEventsAt(n) || [],
    [i] = q.useState(new Oe()),
    a = q.useCallback((e, t) => ut(v.GetClanEventModel(e), window), []);
  return t.GetNumEventsLoaded() == 0
    ? (0, J.jsx)(`div`, { children: L(`#Conference_No_Schedule_Yet`) })
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
          (0, J.jsx)(Ee, {
            onClick: (e) => I((0, J.jsx)(Pr, {}), Ge(e)),
            children: L(`#Conference_NeedHelp`),
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
    ? (0, J.jsx)(`div`, { children: L(`#Conference_No_More_Schedule`) })
    : (0, J.jsxs)(`div`, {
        className: cr,
        children: [
          (0, J.jsx)(`div`, {
            className: lr,
            children: L(`#Conference_ScheduleNext`),
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
    a = v.GetClanEventModel(t.unique_id),
    o = z(U.LANGUAGE),
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
                ? L(
                    `#Conference_StartInMin`,
                    Math.max(1, Math.floor((s - i) / 60)),
                  )
                : L(`#Conference_StartsAt`, Re(s, { bForce24HourClock: !1 })),
          }),
        ],
      }),
      (0, J.jsx)(`div`, {
        className: B(br, xr),
        children: (0, J.jsx)(de, {
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
    i = z(U.LANGUAGE),
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
            h,
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
        children: L(`#EventEmail_Button_ClickForMoreDetails`),
      }),
    ],
  });
}
function jr(e) {
  let { conferenceInfo: t } = e,
    n = W(),
    r = O(Tr),
    i = n.GetActiveEventsAt(r) || [],
    [a] = q.useState(new Oe()),
    o = n
      .GetCalendarItemsInTimeRange(t.rtStartTime - 1, r)
      .rgCalendarItems.filter((e) => i.length == 0 || i[0].GID != e.unique_id)
      .sort((e, t) => e.start_time - t.start_time);
  return o.length == 0
    ? (0, J.jsx)(`div`, { children: L(`#Conference_NoPastEvents`) })
    : (0, J.jsxs)(`div`, {
        className: Sr,
        children: [
          (0, J.jsx)(sr, { displayLocation: 6, fnChangeModalEvent: a }),
          o.map((e) => {
            let t = v.GetClanEventModel(e.unique_id);
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
    n = ve(`WithCalendarStore`),
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
    r ? (0, J.jsx)(ae, {}) : (0, J.jsx)(J.Fragment, { children: e.children })
  );
}
function Pr(e) {
  let { closeModal: t } = e;
  return (0, J.jsxs)(Ae, {
    strTitle: L(`#Conference_NeedHelp`),
    bAlertDialog: !0,
    onCancel: t,
    onOK: t,
    children: [
      (0, J.jsx)(`div`, { children: L(`#Conference_NeedHelp_Desc1`) }),
      (0, J.jsxs)(`div`, {
        children: [
          (0, J.jsxs)(`div`, {
            className: Cr,
            children: [
              (0, J.jsx)(`div`, {
                children: L(`#Conference_NeedHelp_BroadcastChatQ`),
              }),
              (0, J.jsxs)(`ul`, {
                className: wr,
                children: [
                  (0, J.jsx)(`li`, {
                    children: L(`#Conference_NeedHelp_ChatA1`),
                  }),
                  (0, J.jsx)(`li`, {
                    children: Ke(
                      `#Conference_NeedHelp_BroadcastChatA1`,
                      (0, J.jsx)(`a`, {
                        href: `https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A`,
                        children: L(`#Conferenec_NeedHelp_LimitedAccounts`),
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
              (0, J.jsx)(`div`, { children: L(`#Conference_NeedHelp_QandAQ`) }),
              (0, J.jsx)(`ul`, {
                children: (0, J.jsx)(`li`, {
                  children: L(`#Conference_NeedHelp_ChatA1`),
                }),
              }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: Cr,
            children: [
              (0, J.jsx)(`span`, {
                children: L(`#Conference_NeedHelp_StillHaveQuestions`),
              }),
              (0, J.jsx)(`a`, {
                href: `https://help.steampowered.com/wizard/HelpWithPublishing?issueid=933`,
                children: L(`#Conference_NeedHelp_CreateTicket`),
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
    a = O(Pe.PerMinute) < t.rtStartTime - ei * Pe.PerMinute;
  return (0, J.jsxs)(`div`, {
    className: Fr,
    children: [
      (0, J.jsx)(`div`, {
        className: B(Ir, r ? `Active` : `Hidden`),
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
                  toolTipContent: L(`#QAndA_HideSchedule`),
                  children: (0, J.jsx)(`div`, {
                    className: Rr,
                    children: (0, J.jsx)(we, { angle: 0 }),
                  }),
                }),
                (0, J.jsx)(H, {
                  toolTipContent: L(`#QAndA_ShowSchedule`),
                  children: (0, J.jsxs)(`div`, {
                    className: zr,
                    children: [
                      (0, J.jsx)(Ie, {}),
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
            (0, J.jsx)(oe, {
              videoID: t.youtubeVideoID,
              bAutoPlay: !0,
              bShowVideoImmediately: !0,
            }),
          a
            ? (0, J.jsx)(`div`, {
                className: Hr,
                children: (0, J.jsx)(`div`, {
                  className: Ur,
                  children: L(`#Conference_ChatHidden`, ei),
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
            className: B(Jr, Kr, n ? Zr : ``),
            children: [
              (0, J.jsx)(`div`, {
                className: Yr,
                onClick: () => {
                  (r(!0), a(!1));
                },
                children: L(`#Conference_Tab_Chat`),
              }),
              (0, J.jsx)(H, {
                toolTipContent: L(`#QAndA_PopOutChat_ttip`),
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
            className: B(Jr, qr, i ? Zr : ``),
            children: [
              (0, J.jsx)(`div`, {
                className: Yr,
                onClick: () => {
                  (r(!1), a(!0));
                },
                children: L(`#Conference_Tab_QandA`),
              }),
              (0, J.jsx)(H, {
                toolTipContent: L(`#QAndA_PopOutQAndA_ttip`),
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
            toolTipContent: L(`#QAndA_ChatToggle_ShowBoth`),
            children: (0, J.jsx)(`div`, {
              className: Gr,
              onClick: () => {
                (r(!0), a(!0));
              },
              children: (0, J.jsx)(Me, {}),
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
    return (0, J.jsx)(`div`, { children: L(`#Conference_NoAbout`) });
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
    ? (0, J.jsx)(N, {
        children: (0, J.jsx)(`div`, {
          className: ai,
          children: (0, J.jsx)(fi, { conferenceInfo: n }),
        }),
      })
    : (0, J.jsx)(`div`, { children: L(`#Conference_Invalid`) });
}
function fi(e) {
  let { conferenceInfo: t } = e,
    n = (e) =>
      window.sessionStorage.setItem(`conferenceCurrentTab`, `?tab=${e.key}`),
    r = [],
    i = k();
  return (
    i < t.rtEndTime &&
      r.push({
        name: L(`#Conference_tab_Home`),
        key: `live`,
        contents: (0, J.jsx)(N, {
          children: (0, J.jsx)(ti, {
            bShowYouTube: !!t.youtubeVideoID,
            conferenceInfo: t,
          }),
        }),
        onClick: n,
      }),
    r.push({
      name: L(`#Conference_tab_Past`),
      key: `past`,
      contents: (0, J.jsxs)(N, {
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
      name: L(`#Conference_tab_Info`),
      key: `about`,
      contents: (0, J.jsxs)(N, {
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
      contents: (0, J.jsx)(N, {
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
            (0, J.jsx)(w, { className: ci, rgSources: t.strLocalizedLogos }),
            (0, J.jsx)(w, {
              className: li,
              rgSources: t.strLocalizedMobileLogos,
            }),
            (0, J.jsx)(`div`, {
              className: ui,
              children: (0, J.jsx)(Se, {
                rtStartDate: t.rtStartTime,
                rtEndDate: t.rtEndTime,
              }),
            }),
          ],
        }),
        (0, J.jsx)(be, { tabs: r }),
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
