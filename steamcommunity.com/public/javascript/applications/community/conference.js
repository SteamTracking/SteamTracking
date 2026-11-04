/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import {
  C as n,
  Et as r,
  Pt as i,
  R as a,
  St as o,
  ot as s,
  w as c,
  xt as l,
} from "./libraries.js?contenthash=BSMOk6Fq";
import {
  Aa as u,
  Dr as d,
  Et as f,
  Ga as p,
  Ha as m,
  Oa as h,
  Qn as ee,
  _n as g,
  lo as _,
  mn as v,
  pr as y,
  u as b,
} from "./salebanner.js?contenthash=CGp1YmSU";
import { t as te } from "./eventinfinitescrollmodal.js?contenthash=CwSO9dJK";
import { t as x } from "./broadcast_embeddable.js?contenthash=Du9xrRwA";
import { a as S, s as ne } from "./clanstore.js?contenthash=ipycUSTp";
import { t as re } from "./broadcastplayer.js?contenthash=BdIDM2vG";
import { t as ie } from "./throbber.js?contenthash=Cd5Ml_20";
import {
  F as ae,
  G as oe,
  K as se,
  R as ce,
  dt as le,
  z as ue,
} from "./emoticonbutton.js?contenthash=D7f64lEU";
import {
  Ft as C,
  Mt as de,
  Rt as w,
  ht as fe,
  pt as pe,
} from "./apppartnereventspage.js?contenthash=BgeoB7uU";
import {
  A as me,
  X as T,
  Y as he,
  Z as ge,
  j as _e,
  k as ve,
  tt as E,
} from "./carouselarrows.js?contenthash=BswsvuFh";
import { t as ye } from "./ajaxhooks.js?contenthash=fHwhjvXf";
import { o as be } from "./historyutils.js?contenthash=j-8hxDg1";
import { t as xe } from "./tabbar.js?contenthash=BwB8L3fw";
import {
  d as D,
  f as O,
  o as k,
  r as A,
  s as j,
  u as Se,
} from "./localdateandtime.js?contenthash=B8Choir7";
import { t as M } from "./numberformats.js?contenthash=Blcjv6G9";
import {
  Cm as N,
  Cu as P,
  Ec as Ce,
  Gi as F,
  Gs as we,
  Hf as I,
  Jm as L,
  Jr as Te,
  Js as R,
  Ls as Ee,
  Ph as De,
  Qd as z,
  Qi as Oe,
  Sp as ke,
  Tu as B,
  Yl as Ae,
  Zo as je,
  ap as Me,
  bl as Ne,
  cd as Pe,
  cl as Fe,
  dm as Ie,
  f as Le,
  ff as Re,
  fl as ze,
  fm as V,
  gf as Be,
  hf as Ve,
  lf as He,
  mc as Ue,
  nd as We,
  nf as Ge,
  nl as Ke,
  np as qe,
  of as Je,
  ou as Ye,
  pi as Xe,
  pm as H,
  qs as Ze,
  sm as Qe,
  vs as U,
  xc as $e,
} from "./main.js?contenthash=BMjFHmU0";
import {
  Q as et,
  S as tt,
} from "./broadcast_embeddable.module.js?contenthash=DFI3oA8h";
import {
  c as nt,
  s as rt,
} from "./broadcast_embeddable2.js?contenthash=D9GZGJO7";
import { i as it, n as at, t as ot } from "./faqbbcode.js?contenthash=Dlzvnab-";
import { r as st } from "./questions.js?contenthash=Df9Qf7LO";
import {
  a as ct,
  c as W,
  i as G,
  n as lt,
  o as ut,
  r as dt,
  s as K,
  t as ft,
} from "./eventimpressiontracker.js?contenthash=Brdx0KqX";
var q = e(i()),
  pt = class e {
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
      let e = Qe(`conferenceinfo`, `application_config`);
      if (this.ValidateStoreDefault(e)) {
        let t = L(V.LANGUAGE),
          n = it(e.clan_faq_about_page),
          r = at.Get().GetFAQPublishedContent(n, t),
          i = {
            strConferenceID: e.vanity,
            rtStartTime: e.start_rtime,
            rtEndTime: e.end_rtime,
            clanSteamID: new N(e.event_group_steamid),
            broadcastSteamID: new N(e.broadcast_steamid),
            bPartnerOnly: e.partner_only,
            faqAboutPage: r,
            strLocalizedLogos: null,
            strLocalizedMobileLogos: null,
            globalQandASessionID: e.global_qanda_session_id,
            youtubeVideoID: e.youtubeVideoID,
          };
        this.m_mapConferences.set(e.vanity, i);
        let a = await p(e.localized_logo, t, r?.timestamp),
          o = await p(e.localized_mobile_logo, t, r?.timestamp);
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
  return (0, J.jsx)(B, {
    children: (0, J.jsx)(re, {
      steamIDBroadcast: n,
      watchLocation: 5,
      bStartMuted: !0,
    }),
  });
}
function gt(e) {
  let { conferenceInfo: t } = e,
    n = c(() => t.broadcastSteamID.ConvertTo64BitString());
  return (0, J.jsx)(`div`, {
    className: P(mt, e.className ? `${e.className}` : ``),
    children: (0, J.jsx)(B, {
      children: (0, J.jsx)(et, {
        emoticonStore: rt,
        watchLocation: 5,
        steamID: n,
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
      ct({ collectionid: t, bSectionByDay: !0, rtCalendarEnd: e });
      let n = G(),
        r = Qe(`conference_calendar`, `application_config`);
      r && (await n.RegisterCalendarEventsAndModels(r)),
        n.SetFilteredView((e) => !0);
    }
    static m_singleton;
    static Get() {
      return (e.m_singleton ||= new e()), e.m_singleton;
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
    FooterRightSide: () => wn,
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
    RateIcon: () => xn,
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
    Vote_LimitedUser: () => Q,
    Vote_Negative: () => Sn,
    Vote_NotLoggedIn: () => yn,
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
  Q = `C-MokZjgv5M-`,
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
    Vote_LimitedUser: Q,
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
  return (0, J.jsx)(F, {
    strTitle: z(`#EventCalendar_GameSource_UnhideCuratorsDialog_Title`),
    strDescription: z(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_Description`,
    ),
    strOKButtonText: z(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_OKButton`,
    ),
    strCancelButtonText: z(
      `#EventCalendar_GameSource_UnhideCuratorsDialog_CancelButton`,
    ),
    onOK: () => {
      G().m_visibilityStore.SetGameSourceAllowed(K.k_ECurator, !0), t && t();
    },
    onCancel: () => {
      G().m_visibilityStore.SetCuratorUnhideOnFollowDialogDismissed(!0),
        t && t();
    },
  });
}
function zn(e) {
  e ||
    (dt() &&
      (G().m_visibilityStore.BCuratorUnhideOnFollowDialogDismissed() ||
        G().m_visibilityStore.BIsGameSourceAllowed(K.k_ECurator) ||
        Oe((0, J.jsx)(Rn, {}), window)));
}
var Bn = n((e) => {
  let { eventModel: t, calendarEvent: n, history: r } = e,
    i = (e) => {
      let t = n.GetEntityName();
      Oe(
        (0, J.jsx)(F, {
          strTitle: z(`#EventCalendar_MuteApp_Title`, t),
          strDescription: z(`#EventCalendar_MuteApp_details`, t),
          onOK: () => G().UpdateEventBlockFromCalendarEvent(n, !1),
          children: (0, J.jsx)(`a`, {
            href: V.STORE_BASE_URL + `account/emailoptout/app`,
            target: V.IN_CLIENT ? void 0 : `_blank`,
            children: z(`#EventCalendar_ManageMutedSources`),
          }),
        }),
        We(e),
      );
    },
    a = () => {
      G().UpdateEventBlockFromCalendarEvent(n, !0);
    },
    o = () => {
      let e = s().MapClanEventTypeToGroup(t.GetEventType());
      s().SetEventTypeGroupAllowed(e, !1);
    },
    s = () => G().m_visibilityStore,
    c = (e, t, n, r = !0) => {
      s().BIsGameSourceAllowed(t) &&
        (r &&
          e.push(
            (0, J.jsx)(
              R,
              {
                disabled: !0,
                onSelected: () => {},
                children: z(`#EventCalender_Reason_` + t),
              },
              `item-source-${n}-${t}`,
            ),
          ),
        e.push(
          (0, J.jsx)(
            R,
            {
              onSelected: () => {
                s().SetGameSourceAllowed(t, !1);
              },
              children: z(`#EventCalender_Hide_Reason_` + t),
            },
            `item-hidesource-${n}-${t}`,
          ),
        ));
    },
    l = E(t, T.k_eStoreNewsHub, `allowRelative`),
    u = () => {
      l.startsWith(`http`) ? (window.location.href = l) : r.push(l);
    };
  return (0, J.jsx)(`div`, {
    className: P($, Tn),
    onClick: (e) => {
      let r = [],
        l = n.GetSource(),
        d = n.unique_id,
        f = I(),
        p = G();
      p.BIsGlobalCalendar() &&
        (l &&
          l & W.k_eLibrary &&
          (s().BIsGameSourceAllowed(K.k_ERecent) && n.appInfo
            ? (r.push(
                (0, J.jsx)(
                  R,
                  {
                    disabled: !0,
                    onSelected: () => {},
                    children: z(
                      `#EventCalender_LastPlayed`,
                      Be(Se.GetTimeNowWithOverride() - n.appInfo.last_played),
                    ),
                  },
                  `item-source-${d}-lastplayed`,
                ),
              ),
              c(r, K.k_ERecent, d, !1))
            : c(r, K.k_ELibrary, d)),
        l && l & W.k_eWishlist && c(r, K.k_EWishlist, d),
        l && l & W.k_eFollowing && c(r, K.k_EFollowing, d),
        !f && l && l & W.k_eCurator && c(r, K.k_ECurator, d),
        l && l & W.k_eRecommended && c(r, K.k_ERecommended, d),
        l && l & W.k_eSteam && c(r, K.k_ESteam, d),
        l && l & W.k_eFeatured && c(r, K.k_EFeatured, d)),
        r.push(
          (0, J.jsx)(
            R,
            {
              onSelected: o,
              children: z(
                `#EVentCalendar_Hide_EventType`,
                z(
                  `#EventCalendar_EventTypeGroup_` +
                    s().MapClanEventTypeToGroup(t.GetEventType()),
                ),
              ),
            },
            t.GID + `hidetype`,
          ),
        ),
        H.logged_in &&
          (ut.Get().BIsEventBlocked(n)
            ? r.push(
                (0, J.jsx)(
                  R,
                  {
                    onSelected: a,
                    children: (0, J.jsx)(U, {
                      toolTipContent: z(`#EventCalendar_UnMuteApp_ttip`),
                      children: z(
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
                  R,
                  {
                    onSelected: i,
                    children: (0, J.jsx)(U, {
                      toolTipContent: z(`#EventCalendar_MuteApp_ttip`),
                      children: z(
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
              R,
              {
                onSelected: u,
                children: z(
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
              R,
              {
                onSelected: () =>
                  (window.location.href = Ee(
                    V.STORE_BASE_URL + `app/` + t.appid,
                  )),
                children: z(`#EventDisplay_ViewStorePage`),
              },
              t.GID + `goto`,
            ),
          ),
        we((0, J.jsx)(Ze, { children: r }), e);
    },
    children: (0, J.jsx)(Ke, {}),
  });
});
function Vn(e) {
  let { eventModel: t, calendarEvent: n } = e,
    r = f(t.clanSteamID.GetAccountID()),
    { elDialogElement: i, fnShowLogonDialog: a } = d(),
    o = q.useCallback(async () => {
      H.logged_in
        ? (await g.Get().UpdateFollowOrIgnoreCurator(t.clanSteamID, !0, !r),
          zn(!!r))
        : a();
    }, [r, t.clanSteamID, a]);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(
        R,
        {
          onSelected: o,
          children: (0, J.jsx)(U, {
            toolTipContent: z(
              r
                ? `#EventCalendar_UnFollowCurator_ttip`
                : `#EventCalendar_FollowCurator_ttip`,
            ),
            children: z(
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
    let i = q.useRef(void 0);
    if (e.altImgWithFallback && e.altImgWithFallback.length > 0)
      return (0, J.jsx)(h, {
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
        className: P(Un, e.className),
      });
    }
  },
  Kn = (e) => {
    let [t, n] = q.useState(!1);
    ue(!!e.preloadYoutubeScripts);
    let r = se(`youtube`);
    return !t || !r
      ? (0, J.jsxs)(`div`, {
          className: P(`YoutubePreviewContainer`, Un, e.imageClassnames),
          onClick: r
            ? (t) => {
                e.onPlayerActivated && e.onPlayerActivated(),
                  n(!0),
                  t.stopPropagation(),
                  t.preventDefault();
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
                    children: (0, J.jsx)(Ye, {}),
                  }),
                  (0, J.jsx)(`div`, {
                    className: `VideoHintText`,
                    children: z(`#EventCalendar_WatchYouTubeVideo`),
                  }),
                ],
              }),
          ],
        })
      : (0, J.jsx)(ce, { ...e, classnames: P(Wn, e.classnames) });
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
    [s, l] = q.useState(!1),
    d = w(),
    f = _(t.GetAppIDOrReferenceAppID());
  ke(f);
  let p = _e(t);
  ne(n.clanInfo?.clanid);
  let h = L(V.LANGUAGE),
    g = `capsule`,
    [v, y, b, te, x, S, re, ie, ae, se, ce] = c(() => [
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
    [le, ue] = q.useState(() => (u() && y == 14 ? m.full : m.capsule_main)),
    fe = oe(),
    pe = me(S && re && p ? void 0 : t, g, h, le, fe) ?? p,
    ve = Yn(t, i),
    E = Le(ie),
    ye = Y[`EventType${y}`],
    be = b.map((e) => Y[`Tag-${e}`]),
    xe = P(
      wt,
      ye,
      v && `MVfZPnoopw0-`,
      r ? void 0 : X,
      s && `utI2vL1PRLs-`,
      ve && `_4wxMhjLGDEo-`,
      E && void 0,
      i === `wide` && void 0,
      i === `carousel` && `_6IHSOcZWQTI-`,
      i === `upcoming` && `i7ABr2eulso-`,
      ...be,
    ),
    D = se,
    O = ce;
  D === O && (O = void 0), D === x && (D = void 0);
  let k = ee(pe),
    A = (0, J.jsx)(Zn, {
      setVideoPlayerReady: l,
      calendarEvent: n,
      eventModel: t,
      mode: i,
      artworkType: g,
      strCapsuleImgURLForBackground: k,
      fnSetCoverSize: ue,
    }),
    j = r && y != 14 && !(s && i !== `carousel`),
    M = j && A,
    N = !j && A,
    Ce = y !== 28 && y !== 12 && Se.GetTimeNowWithOverride() < ae,
    F = i !== `wide` || r,
    we =
      Ce &&
      (0, J.jsx)(`div`, {
        className: P(`-VpcmDHYJBs-`, F && `_8hZf0ZZtftA-`),
        children: (0, J.jsx)(de, {
          eventModel: t,
          lang: h,
          bShowStartTime: !0,
          bOnlyShowIcon: F,
          bExpandLeft: F,
        }),
      }),
    I = !!(y !== 12 && O),
    Te = !(!D || (I && Jn(D, O)));
  return (0, J.jsxs)(`div`, {
    className: xe,
    children: [
      (0, J.jsx)(ft, { event: t, recordNewsHubStats: !0 }),
      (0, J.jsx)(ge, {
        eventModel: t,
        route: T.k_eView,
        children: (0, J.jsxs)(`div`, {
          className: Yt,
          onClick: (e) => {
            d.RecordInteraction(C.k_eClickThrough),
              !he() && (o(t), e.stopPropagation(), e.preventDefault());
          },
          children: [
            y === 14 &&
              (0, J.jsx)(`div`, {
                className: P(`TtzbM79RcOo-`, S && `yI-XQCfZhjU-`),
                style: { backgroundImage: `url(${k})` },
              }),
            (0, J.jsxs)(`div`, {
              className: Xt,
              children: [
                N,
                (0, J.jsxs)(`div`, {
                  className: Qt,
                  children: [
                    y == 12 &&
                      (0, J.jsx)(`div`, {
                        className: `wdp2jpfiGas-`,
                        children: (0, J.jsx)(Fe, {}),
                      }),
                    (0, J.jsxs)(`div`, {
                      className: ln,
                      children: [
                        M,
                        !a &&
                          (0, J.jsxs)(`div`, {
                            className: `HcQu8--ilOI-`,
                            children: [
                              (0, J.jsx)($n, { ...e }),
                              n && (0, J.jsx)(tr, { calendarEvent: n }),
                            ],
                          }),
                        (0, J.jsx)(`div`, { className: en, children: x }),
                        (0, J.jsxs)(`div`, {
                          className: Lt,
                          children: [
                            (0, J.jsx)(`div`, {
                              className: P(Bt, ye),
                              children: te,
                            }),
                            (0, J.jsx)(er, {
                              eventModel: t,
                              className: P(F && `_6qTH13L4IdM-`),
                            }),
                            F && we,
                          ],
                        }),
                        Te &&
                          (0, J.jsx)(`div`, {
                            className: `_9lDmRzgjqs4-`,
                            children: D,
                          }),
                        I &&
                          (0, J.jsx)(`div`, {
                            className: P(
                              `O79JneSzM9g-`,
                              D ? `h-oZBBAdgfo-` : ``,
                            ),
                            children: O,
                          }),
                      ],
                    }),
                    !F && we,
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
    o = w(),
    s = L(V.LANGUAGE),
    c = u() && a == 14 ? m.full : m.capsule_main,
    l = ve(t, `capsule`, s, c, !0);
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
          o.RecordInteraction(C.k_ePlayedVideo), n(!0);
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
    l = L(V.LANGUAGE),
    u = Yn(t, r),
    d = !Yn(t, r) && r !== `upcoming`,
    [f, p, h, ee, g, _] = c(() => [
      t.GetEventType(),
      t.has_live_stream,
      t.has_live_stream,
      t.clanSteamID.GetAccountID(),
      n.GetGameCapsule(),
      t.BImageNeedScreenshotFallback(i, l),
    ]);
  q.useEffect(() => {
    if (a) {
      let e = new Image();
      (e.src = a),
        (e.onerror = () => {
          s(m.full);
        });
    }
  }, [a, s]);
  let [, v] = S(ee),
    y = v && !v.is_ogg,
    b = t.GetSummaryWithFallback(l);
  return (
    t.GetSubTitleWithLanguageFallback(l) === b && (b = void 0),
    (0, J.jsxs)(`div`, {
      className: Tt,
      children: [
        u &&
          (0, J.jsx)(Xn, {
            eventModel: t,
            mode: r,
            calendarEvent: n,
            fnSetVideoStateReady: o,
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
                        className: P({
                          "fzWS9zjHBQA-": !0,
                          "yI-XQCfZhjU-": _,
                          "zEB6Vo-lSoU-": y,
                        }),
                        style: { backgroundImage: `url(${g})` },
                      }),
                    }),
                    (0, J.jsx)(`div`, {
                      className: `NH4KbTPWsVo-`,
                      children: b,
                    }),
                  ],
                }),
              f !== 12 &&
                (0, J.jsxs)(`div`, {
                  className: P({ "iogiG-p5PHg-": !0, "e2Xhb-5xMvY-": h }),
                  children: [
                    (0, J.jsx)(`div`, {
                      className: P({
                        "_1ZYmIx0m7bo-": !0,
                        "yI-XQCfZhjU-": _,
                        "zEB6Vo-lSoU-": y,
                      }),
                      style: { backgroundImage: `url(${a})` },
                    }),
                    h && (0, J.jsx)(`div`, { className: `-y6T-NRjq1Q-` }),
                    p &&
                      (0, J.jsx)(`div`, {
                        className: `_0hsSPkL5myo-`,
                        children: z(`#home_page_live_broadcast`),
                      }),
                    h &&
                      (0, J.jsx)(`div`, {
                        className: `VideoHintText`,
                        children: z(`#EventCalendar_WatchLiveBroadcast`),
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
      a = E(t, T.k_eStoreNewsHub, `allowRelative`),
      o = (e) => {
        a.startsWith(`http`) ? (window.location.href = a) : i.push(a),
          e.stopPropagation(),
          e.preventDefault();
      },
      s = n.GetEntityName(),
      c = n.GetGameIcon(),
      l = P(xt, r ? void 0 : X);
    return (0, J.jsx)(B, {
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
  er = n((e) => {
    let { eventModel: t, calendarEvent: n, className: r } = e,
      i = G().GetStoreInitializationTimestamp().getTime() / 1e3,
      a = t ? t.GetStartTimeAndDateUnixSeconds() : n.start_time,
      o = t && y(t.type) && t.GetEndTimeAndDateUnixSeconds();
    if (o && a < i && i < o) {
      let e = o - i,
        t = Be(e, !0);
      return (0, J.jsxs)(`div`, {
        className: P(Dt, r),
        children: [
          (0, J.jsx)(j, {
            rtFullDate: a,
            stylesmodule: Y,
            children: (0, J.jsx)(`div`, {
              className: Ot,
              children: z(`#EventCalendar_LiveNow`),
            }),
          }),
          (0, J.jsx)(j, {
            rtFullDate: o,
            stylesmodule: Y,
            children: z(`#EventCalendar_TimeLeft`, t),
          }),
        ],
      });
    }
    if (a < i) {
      let e = i - a,
        t = e < 86400 ? Be(e, !1, !0) : Ve(a);
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
        o = n > 1 && n <= 5 ? Je(new Date(a * 1e3)) : Ve(a),
        s = k(a);
      return (0, J.jsx)(j, {
        className: r,
        rtFullDate: a,
        stylesmodule: Y,
        children: (0, J.jsx)(`div`, {
          className: kt,
          children: z(`#EventCalendar_WillStartAtDateTime`, o, s),
        }),
      });
    }
  }),
  tr = n((e) => {
    let t = e.calendarEvent.GetSource(),
      n = [],
      r = G().m_visibilityStore;
    t & W.k_eLibrary && r.BIsGameSourceAllowed(K.k_ELibrary)
      ? n.push({
          id: W.k_eLibrary,
          name: `#EventCalendar_GameSource_inLibrary`,
          ttip: `#EventCalendar_GameSource_EventExplanation_ttip_library`,
          styles: void 0,
        })
      : t & W.k_eWishlist && r.BIsGameSourceAllowed(K.k_EWishlist)
        ? n.push({
            id: W.k_eWishlist,
            name: `#EventCalendar_GameSource_onWishlist`,
            ttip: `#EventCalendar_GameSource_EventExplanation_ttip_wishlist`,
            styles: void 0,
          })
        : t & W.k_eRecommended && r.BIsGameSourceAllowed(K.k_ERecommended)
          ? n.push({
              id: W.k_eRecommended,
              name: `#EventCalendar_GameSource_recommended_Verbose`,
              ttip: `#EventCalendar_GameSource_EventExplanation_ttip_recommended`,
              styles: Pt,
            })
          : t & W.k_eFeatured &&
            r.BIsGameSourceAllowed(K.k_EFeatured) &&
            n.push({
              id: W.k_eFeatured,
              name: `#EventCalendar_GameSource_featured`,
              ttip: `#EventCalendar_GameSource_ttip_featured`,
              styles: void 0,
            }),
      t & W.k_eFollowing &&
        r.BIsGameSourceAllowed(K.k_EFollowing) &&
        n.push({
          id: W.k_eFollowing,
          name: `#EventCalendar_GameSource_followed`,
          ttip: `#EventCalendar_GameSource_EventExplanation_ttip_following`,
          styles: void 0,
        });
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
      U,
      {
        className: P(Nt, r),
        toolTipContent: z(n),
        children: z(t) + (i ? `, ` : ``),
      },
      e,
    );
function rr(e) {
  return H.logged_in
    ? H.is_limited
      ? Q
      : e === `up`
        ? bn
        : e === `down`
          ? Sn
          : Cn
    : yn;
}
function ir(e) {
  let { eventModel: t } = e,
    n = w(),
    { myVote: r, Vote: i } = fe(t, { bAsk: !1 }),
    [, a] = S(t.clanSteamID.GetAccountID()),
    o = () => {
      r !== `up` && pe() && (i(`up`), n.RecordInteraction(C.k_eThumbsUp));
    },
    s = () => {
      n.RecordInteraction(C.k_eDiscussions);
    },
    [l, u, d] = c(() => [
      Math.max(0, t.nVotesUp - t.nVotesDown),
      t.GetDiscussionURL(a?.vanity_url),
      t.nCommentCount,
    ]),
    f = rr(r),
    p = !I() && u,
    m = t.live_stream_viewer_count > 0 ? t.live_stream_viewer_count : void 0;
  return (0, J.jsx)(`div`, {
    className: un,
    children: (0, J.jsxs)(`div`, {
      className: wn,
      children: [
        !!m && (0, J.jsx)(`div`, { className: `zxaNRVKQnTM-`, children: M(m) }),
        (0, J.jsxs)(`div`, {
          className: P($, void 0, f),
          onClick: o,
          children: [
            (0, J.jsx)(Ae, { className: xn }),
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
              onClick: s,
              children: [
                (0, J.jsx)($e, { className: `Ilo9d6Bcf60-` }),
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
    [a, o] = be(or, null),
    [s, c] = be(ar, null);
  return (
    Pe(n, (e, t) => {
      o(e), c(N.InitFromClanID(t, V.EUNIVERSE).ConvertTo64BitString());
    }),
    q.useEffect(() => {
      if (a != null && s != null) {
        let e = new N(s);
        b.LoadPartnerEventFromClanEventGIDAndClanSteamID(e, a, 0).then(i);
      }
    }, [a, s]),
    r
      ? (0, J.jsx)(te, {
          appid: r.appid,
          trackingLocation: t,
          announcementGID: r.GetAnnouncementGID(),
          partnerEventStore: b,
          eventModel: r,
          showAppHeader: !0,
          closeModal: () => {
            i(null), c(null), o(null);
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
  let t = G(),
    n = O(Tr),
    r = t.GetActiveEventsAt(n) || [],
    [i] = q.useState(new De()),
    a = q.useCallback((e, t) => lt(b.GetClanEventModel(e), window), []);
  return t.GetNumEventsLoaded() == 0
    ? (0, J.jsx)(`div`, { children: z(`#Conference_No_Schedule_Yet`) })
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
          (0, J.jsx)(je, {
            onClick: (e) => Oe((0, J.jsx)(Pr, {}), We(e)),
            children: z(`#Conference_NeedHelp`),
          }),
        ],
      });
}
function Dr(e) {
  return (0, J.jsx)(Nr, { ...e, children: (0, J.jsx)(Er, { ...e }) });
}
function Or(e) {
  let { rgActiveEvents: t, rtNow: n } = e,
    r = G()
      .GetCalendarItemsInTimeRange(n + 1)
      .rgCalendarItems.filter((e) => !t.some((t) => t.GID == e.unique_id))
      .sort((e, t) => e.start_time - t.start_time);
  return r.length == 0
    ? (0, J.jsx)(`div`, { children: z(`#Conference_No_More_Schedule`) })
    : (0, J.jsxs)(`div`, {
        className: cr,
        children: [
          (0, J.jsx)(`div`, {
            className: lr,
            children: z(`#Conference_ScheduleNext`),
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
    a = b.GetClanEventModel(t.unique_id),
    o = L(V.LANGUAGE),
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
                ? z(
                    `#Conference_StartInMin`,
                    Math.max(1, Math.floor((s - i) / 60)),
                  )
                : z(`#Conference_StartsAt`, Re(s, { bForce24HourClock: !1 })),
          }),
        ],
      }),
      (0, J.jsx)(`div`, {
        className: P(br, xr),
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
    i = L(V.LANGUAGE),
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
            v,
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
        children: z(`#EventEmail_Button_ClickForMoreDetails`),
      }),
    ],
  });
}
function jr(e) {
  let { conferenceInfo: t } = e,
    n = G(),
    r = O(Tr),
    i = n.GetActiveEventsAt(r) || [],
    [a] = q.useState(new De()),
    o = n
      .GetCalendarItemsInTimeRange(t.rtStartTime - 1, r)
      .rgCalendarItems.filter((e) => i.length == 0 || i[0].GID != e.unique_id)
      .sort((e, t) => e.start_time - t.start_time);
  return o.length == 0
    ? (0, J.jsx)(`div`, { children: z(`#Conference_NoPastEvents`) })
    : (0, J.jsxs)(`div`, {
        className: Sr,
        children: [
          (0, J.jsx)(sr, { displayLocation: 6, fnChangeModalEvent: a }),
          o.map((e) => {
            let t = b.GetClanEventModel(e.unique_id);
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
    n = ye(`WithCalendarStore`),
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
    r ? (0, J.jsx)(ie, {}) : (0, J.jsx)(J.Fragment, { children: e.children })
  );
}
function Pr(e) {
  let { closeModal: t } = e;
  return (0, J.jsxs)(F, {
    strTitle: z(`#Conference_NeedHelp`),
    bAlertDialog: !0,
    onCancel: t,
    onOK: t,
    children: [
      (0, J.jsx)(`div`, { children: z(`#Conference_NeedHelp_Desc1`) }),
      (0, J.jsxs)(`div`, {
        children: [
          (0, J.jsxs)(`div`, {
            className: Cr,
            children: [
              (0, J.jsx)(`div`, {
                children: z(`#Conference_NeedHelp_BroadcastChatQ`),
              }),
              (0, J.jsxs)(`ul`, {
                className: wr,
                children: [
                  (0, J.jsx)(`li`, {
                    children: z(`#Conference_NeedHelp_ChatA1`),
                  }),
                  (0, J.jsx)(`li`, {
                    children: Ge(
                      `#Conference_NeedHelp_BroadcastChatA1`,
                      (0, J.jsx)(`a`, {
                        href: `https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A`,
                        children: z(`#Conferenec_NeedHelp_LimitedAccounts`),
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
              (0, J.jsx)(`div`, { children: z(`#Conference_NeedHelp_QandAQ`) }),
              (0, J.jsx)(`ul`, {
                children: (0, J.jsx)(`li`, {
                  children: z(`#Conference_NeedHelp_ChatA1`),
                }),
              }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: Cr,
            children: [
              (0, J.jsx)(`span`, {
                children: z(`#Conference_NeedHelp_StillHaveQuestions`),
              }),
              (0, J.jsx)(`a`, {
                href: `https://help.steampowered.com/wizard/HelpWithPublishing?issueid=933`,
                children: z(`#Conference_NeedHelp_CreateTicket`),
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
    a = O(Me.PerMinute) < t.rtStartTime - ei * Me.PerMinute;
  return (0, J.jsxs)(`div`, {
    className: Fr,
    children: [
      (0, J.jsx)(`div`, {
        className: P(Ir, r ? `Active` : `Hidden`),
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
                (0, J.jsx)(U, {
                  toolTipContent: z(`#QAndA_HideSchedule`),
                  children: (0, J.jsx)(`div`, {
                    className: Rr,
                    children: (0, J.jsx)(Ce, { angle: 0 }),
                  }),
                }),
                (0, J.jsx)(U, {
                  toolTipContent: z(`#QAndA_ShowSchedule`),
                  children: (0, J.jsxs)(`div`, {
                    className: zr,
                    children: [
                      (0, J.jsx)(Ue, {}),
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
            (0, J.jsx)(ae, {
              videoID: t.youtubeVideoID,
              bAutoPlay: !0,
              bShowVideoImmediately: !0,
            }),
          a
            ? (0, J.jsx)(`div`, {
                className: Hr,
                children: (0, J.jsx)(`div`, {
                  className: Ur,
                  children: z(`#Conference_ChatHidden`, ei),
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
      V.COMMUNITY_BASE_URL +
      `broadcast/chatonly/` +
      t.broadcastSteamID.ConvertTo64BitString(),
    s =
      V.COMMUNITY_BASE_URL +
      `questions/` +
      Ie.VANITY_ID +
      `/view/` +
      t.globalQandASessionID;
  return (0, J.jsxs)(`div`, {
    className: Hr,
    children: [
      (0, J.jsxs)(`div`, {
        className: Wr,
        children: [
          (0, J.jsxs)(`div`, {
            className: P(Jr, Kr, n ? Zr : ``),
            children: [
              (0, J.jsx)(`div`, {
                className: Yr,
                onClick: () => {
                  r(!0), a(!1);
                },
                children: z(`#Conference_Tab_Chat`),
              }),
              (0, J.jsx)(U, {
                toolTipContent: z(`#QAndA_PopOutChat_ttip`),
                children: (0, J.jsx)(`a`, {
                  className: Xr,
                  href: o,
                  target: `_blank`,
                  children: (0, J.jsx)(ze, {}),
                }),
              }),
            ],
          }),
          (0, J.jsxs)(`div`, {
            className: P(Jr, qr, i ? Zr : ``),
            children: [
              (0, J.jsx)(`div`, {
                className: Yr,
                onClick: () => {
                  r(!1), a(!0);
                },
                children: z(`#Conference_Tab_QandA`),
              }),
              (0, J.jsx)(U, {
                toolTipContent: z(`#QAndA_PopOutQAndA_ttip`),
                children: (0, J.jsx)(`a`, {
                  className: Xr,
                  href: s,
                  target: `_blank`,
                  children: (0, J.jsx)(ze, {}),
                }),
              }),
            ],
          }),
          (0, J.jsx)(U, {
            toolTipContent: z(`#QAndA_ChatToggle_ShowBoth`),
            children: (0, J.jsx)(`div`, {
              className: Gr,
              onClick: () => {
                r(!0), a(!0);
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
    return (0, J.jsx)(`div`, { children: z(`#Conference_NoAbout`) });
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
    ? (0, J.jsx)(B, {
        children: (0, J.jsx)(`div`, {
          className: ai,
          children: (0, J.jsx)(fi, { conferenceInfo: n }),
        }),
      })
    : (0, J.jsx)(`div`, { children: z(`#Conference_Invalid`) });
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
        name: z(`#Conference_tab_Home`),
        key: `live`,
        contents: (0, J.jsx)(B, {
          children: (0, J.jsx)(ti, {
            bShowYouTube: !!t.youtubeVideoID,
            conferenceInfo: t,
          }),
        }),
        onClick: n,
      }),
    r.push({
      name: z(`#Conference_tab_Past`),
      key: `past`,
      contents: (0, J.jsxs)(B, {
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
      name: z(`#Conference_tab_Info`),
      key: `about`,
      contents: (0, J.jsxs)(B, {
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
      contents: (0, J.jsx)(B, {
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
            (0, J.jsx)(le, { className: ci, rgSources: t.strLocalizedLogos }),
            (0, J.jsx)(le, {
              className: li,
              rgSources: t.strLocalizedMobileLogos,
            }),
            (0, J.jsx)(`div`, {
              className: ui,
              children: (0, J.jsx)(A, {
                rtStartDate: t.rtStartTime,
                rtEndDate: t.rtEndTime,
              }),
            }),
          ],
        }),
        (0, J.jsx)(xe, { tabs: r }),
      ],
    })
  );
}
var pi = {
  LandingPage: (e) => `/(conference|steamworksvirtualconference)/${e}`,
};
function mi(e) {
  return (0, J.jsxs)(o, {
    children: [
      (0, J.jsx)(l, {
        path: pi.LandingPage(`:vanity_str`),
        render: (e) =>
          (0, J.jsx)(Xe, {
            config: {
              "conference-root": () => {
                let { vanity_str: t } = e.match.params;
                return (0, J.jsx)(di, { strVanity: t.toLocaleLowerCase() });
              },
            },
          }),
      }),
      (0, J.jsx)(l, { component: Te }),
    ],
  });
}
export { pi as ConferenceRoutes, mi as default };
