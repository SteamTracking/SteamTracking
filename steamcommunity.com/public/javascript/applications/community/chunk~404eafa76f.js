/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  A as n,
  C as r,
  Ft as i,
  ot as a,
  w as o,
} from "./chunk~01cfc309bf.js";
import {
  Ai as s,
  An as c,
  B as l,
  Ko as u,
  Oi as d,
  R as f,
  Ua as p,
  _i as m,
  _o as h,
  fo as g,
  k as _,
  lo as ee,
  mt as v,
  nt as y,
  pt as te,
  sa as ne,
  tt as re,
  z as ie,
} from "./chunk~3f4314f3b4.js";
import { g as b } from "./chunk~437071091c.js";
import { t as x } from "./chunk~10c934b72c.js";
import { t as ae } from "./chunk~eee3bbd4cd.js";
import { t as oe } from "./chunk~eefd71512b.js";
import { V as se } from "./chunk~05a38bc848.js";
import { t as S } from "./chunk~2e61cac879.js";
import { t as C } from "./chunk~9d71b14b50.js";
import { n as ce } from "./chunk~a7c5e71e12.js";
import "./chunk~5831a6de62.js";
import {
  Em as le,
  Id as w,
  Kf as ue,
  Nc as de,
  Np as fe,
  Rh as T,
  Su as E,
  Tp as D,
  Wf as pe,
  Wi as me,
  Xr as he,
  Zi as ge,
  Zm as O,
  _l as _e,
  _s as k,
  ef as A,
  fn as j,
  fu as ve,
  hc as ye,
  hm as M,
  id as N,
  ii as P,
  kf as F,
  kp as I,
  ou as L,
  rr as R,
  vl as be,
  ws as z,
} from "./main.js";
import {
  $ as xe,
  A as Se,
  B as Ce,
  F as we,
  G as Te,
  H as Ee,
  I as De,
  J as B,
  K as Oe,
  L as ke,
  M as Ae,
  N as je,
  O as Me,
  P as Ne,
  Q as Pe,
  R as Fe,
  S as Ie,
  T as Le,
  U as Re,
  V as ze,
  W as Be,
  Y as Ve,
  Z as He,
  _ as Ue,
  c as We,
  f as Ge,
  g as Ke,
  h as qe,
  i as Je,
  j as Ye,
  k as Xe,
  l as Ze,
  m as Qe,
  n as $e,
  o as et,
  p as tt,
  q as nt,
  r as rt,
  u as V,
  v as it,
  x as at,
  y as ot,
  z as st,
} from "./chunk~750c562b0a.js";
import {
  a as H,
  i as ct,
  l as lt,
  n as U,
  o as ut,
  s as dt,
} from "./chunk~cadb22900a.js";
import { n as ft, t as pt } from "./chunk~56e6a40e9e.js";
import { t as mt } from "./chunk~030d1d075f.js";
var ht = 1004,
  gt = 1005,
  _t = 1006,
  W = e(i()),
  G = e(n()),
  vt = `_7FIE12jcFio-`,
  yt = `l3NO7dsjryo-`,
  bt = `gxhjub7-6JQ-`,
  K = a(),
  xt = r((e) => {
    let { appid: t } = e,
      n = P(),
      r = (0, W.useRef)({ include_assets: !0, include_release: !0 }),
      i = u(t),
      { data: a } = I(i),
      { data: o } = D(i),
      { data: s } = fe(i),
      [c, l] = ce(t, r.current),
      d = E(vt, `StoreSaleWidgetContainer_mini`),
      f = yt,
      g = bt;
    if (a == null)
      return (0, K.jsx)(`div`, {
        className: d,
        children: (0, K.jsx)(oe, { size: `medium` }),
      });
    if (a == null || !a.name) return (0, K.jsx)(`div`, { className: void 0 });
    let _ = a.type != 8,
      y = he(h(a), n);
    return (0, K.jsxs)(`div`, {
      className: d,
      children: [
        (0, K.jsx)(`a`, {
          href: y,
          target: M.IN_CLIENT ? void 0 : `_blank`,
          children: (0, K.jsx)(v, {
            id: i,
            children: (0, K.jsx)(`div`, {
              className: f,
              children:
                o &&
                (0, K.jsx)(`img`, {
                  className: g,
                  src: S(o, `small_capsule`),
                  alt: a.name,
                }),
            }),
          }),
        }),
        (0, K.jsxs)(`div`, {
          className: p,
          children: [
            (0, K.jsx)(`a`, {
              href: y,
              target: M.IN_CLIENT ? void 0 : `_blank`,
              children: (0, K.jsx)(v, {
                id: i,
                children: (0, K.jsx)(`div`, {
                  className: E(ee, `StoreSaleWidgetTitle`),
                  children: a.name,
                }),
              }),
            }),
            s &&
              (0, K.jsx)(`div`, { className: `A8oyzoRvWQ8-`, children: ne(s) }),
            !!_ && (0, K.jsx)(m, { id: i, bShowDemoButton: !0 }),
          ],
        }),
      ],
    });
  });
function q() {
  let e = window.GetUsabilityTracker;
  if (e) return e();
}
var St = r((e) => {
  let { event: t } = e,
    n = t.clanSteamID.GetAccountID(),
    r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
    i = (0, W.useRef)(null),
    [a, o] = (0, W.useState)(t ? b.GetCreatorHome(t.clanSteamID) : void 0);
  if (
    ((0, W.useEffect)(() => {
      let e = G.default.CancelToken.source();
      return (
        (i.current = e.cancel),
        (async () => {
          let t = le.InitFromClanID(n, M.EUNIVERSE),
            r = await b.LoadCreatorHome(t, !1, e);
          e.token.reason || o(r);
        })(),
        () => {
          i.current && i.current(`BroadcastDropsDisplay: unmounting`);
        }
      );
    }, [n]),
    r || !a || !a.BIsLoaded())
  )
    return null;
  let s =
      M.COMMUNITY_BASE_URL +
      `gid/` +
      t.jsondata.broadcast_item_drops_details_clan_accountid +
      `/partnerevents/view/` +
      t.jsondata.broadcast_item_drops_details_event_gid,
    c = t.jsondata.broadcast_item_drops_min_watch_time_minutes ?? 0;
  return (0, K.jsx)(`div`, {
    className: Se,
    children: (0, K.jsxs)(`div`, {
      children: [
        A(
          a.GetName().length > 0
            ? c % 60 == 0
              ? `#SalePage_WatchForDrop_Hours_CreatorNamed`
              : `#SalePage_WatchForDrop_Minutes_CreatorNamed`
            : c % 60 == 0
              ? `#SalePage_WatchForDrop_Hours_Developer`
              : `#SalePage_WatchForDrop_Minutes_Developer`,
          c % 60 == 0 ? c / 60 : c,
          a.GetName(),
        ),
        !!t.jsondata.broadcast_item_drops_details_clan_accountid &&
          (0, K.jsx)(`a`, {
            href: s,
            target: M.IN_CLIENT ? `` : `_blank`,
            children: A(`#SalePage_WatchForDrop_LearnMore`),
          }),
      ],
    }),
  });
});
function Ct(e) {
  let { steamid: t, closeModal: n } = e;
  return (0, K.jsxs)(me, {
    strDescription: ``,
    strTitle: A(`#Button_Share`),
    onCancel: n,
    onOK: n,
    bAlertDialog: !0,
    modalClassName: `EventDisplay_Share_Dialog`,
    children: [(0, K.jsx)(wt, { steamid: t }), (0, K.jsx)(Tt, { steamid: t })],
  });
}
function wt(e) {
  let { steamid: t } = e,
    n = Et(t);
  return (0, K.jsxs)(`div`, {
    className: E(R, y),
    children: [
      (0, K.jsx)(k, {
        toolTipContent: A(`#EventDisplay_Share_OnFaceBook`),
        children: (0, K.jsx)(z, {
          href: n.strFacebookUrl,
          className: l,
          children: (0, K.jsx)(`img`, { className: E(j), src: ft }),
        }),
      }),
      (0, K.jsx)(k, {
        toolTipContent: A(`#EventDisplay_Share_OnTwitter`),
        children: (0, K.jsx)(z, {
          href: n.strTwitterUrl,
          className: l,
          children: (0, K.jsx)(`img`, { className: E(j), src: pt }),
        }),
      }),
      (0, K.jsx)(k, {
        toolTipContent: A(`#EventDisplay_Share_OnReddit`),
        children: (0, K.jsx)(z, {
          href: n.strRedditUrl,
          className: l,
          children: (0, K.jsx)(`img`, { className: E(j), src: mt }),
        }),
      }),
    ],
  });
}
function Tt(e) {
  let { steamid: t } = e,
    n = W.createRef(),
    [r, i] = W.useState(``),
    a = W.createRef(),
    o = W.useCallback(
      (e) => {
        n.current &&
          n.current.ownerDocument.defaultView?.navigator.clipboard
            .writeText(n.current.value)
            .then((e) => {
              i(A(`#EventDisplay_Share_CopiedToClipboard`));
            })
            .catch((e) => {
              (i(A(`#EventDisplay_Share_FailedToCopyToClipboard`)),
                console.error(`Failed to copy link to clipboard:`, e));
            });
      },
      [n],
    ),
    s = M.COMMUNITY_BASE_URL + `broadcast/watch/` + t;
  return (0, K.jsxs)(`div`, {
    children: [
      (0, K.jsxs)(`div`, {
        className: E(R, re),
        onClick: o,
        children: [
          (0, K.jsx)(`span`, {
            className: ie,
            children: A(`#EventDisplay_Share_Link`),
          }),
          (0, K.jsx)(`textarea`, {
            className: f,
            ref: n,
            value: s,
            readOnly: !0,
          }),
          !!document.queryCommandSupported(`copy`) &&
            (0, K.jsx)(k, {
              toolTipContent: A(`#ToolTip_CopyLinkToClipboard`),
              children: (0, K.jsx)(`div`, {
                className: E(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `_6y4EcbHPzTE-`),
                children: (0, K.jsx)(`img`, {
                  className: `SGi7-TqE4Rs-`,
                  src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%201801.5%201400%201409'%20enable-background='new%200%201801.5%201400%201409'%20xml:space='preserve'%3e%3cpath%20id='iconmonstr-link-1_1_'%20fill='%23FFFFFF'%20d='M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0%20c16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294%20c-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280%20c74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941%20c-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z%20M757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0%20c82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0%20c-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647%20c148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059%20S905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z'/%3e%3c/svg%3e`,
                }),
              }),
            }),
        ],
      }),
      (0, K.jsx)(`div`, { ref: a, className: _, children: r }),
    ],
  });
}
function Et(e) {
  let t = M.COMMUNITY_BASE_URL + `broadcast/share/` + e;
  return {
    strFacebookUrl: t + `?site=facebook&t=` + Math.random(),
    strTwitterUrl: t + `?site=twitter`,
    strRedditUrl: t + `?site=reddit`,
  };
}
var Dt = t({ BroadcastEmbeddablePopoutHeader: () => Q, default: () => At }),
  Ot = {
    list: [
      { appid: 444090, url: `https://steam.tv/paladins` },
      { appid: 386360, url: `https://steam.tv/smite` },
      { appid: 813820, url: `https://steam.tv/realmroyale` },
      {
        appid: 583950,
        url: `https://steam.tv/artifact`,
        broadcasterAccountID: 912972716,
      },
      {
        appid: 570,
        url: `https://steam.tv/dota`,
        broadcasterAccountID: 238221269,
      },
      {
        appid: 1025790,
        url: `https://steam.tv/steamawards`,
        broadcasterAccountID: 934427243,
      },
      {
        appid: 730,
        url: `https://steam.tv/csgo`,
        broadcasterAccountID: 927819071,
      },
    ],
  };
function kt() {
  let e = ue();
  return !pe() && !e;
}
function At(e) {
  return kt() ? (0, K.jsx)(J, { ...e }) : null;
}
var J = class extends W.Component {
  m_cancelSignal = G.default.CancelToken.source();
  m_bMarkedUsabilitySeen = !1;
  state = {
    bShowPopoutHeader: !1,
    bExpanded: !1,
    bLoadingPreference: !0,
    style: {
      maxHeight: `0vh`,
      overflow: `hidden`,
      transition: `max-height 1s ease-in-out`,
    },
    innerStyle: {
      maxHeight: `0vh`,
      overflow: `hidden`,
      transition: `max-height 1s ease-in-out`,
    },
    bStartMuted: !0,
  };
  async componentDidMount() {
    (await U.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
      this.m_cancelSignal.token.reason ||
        this.setState({
          bLoadingPreference: !1,
          bExpanded: !U.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
          innerStyle: {
            ...this.state.innerStyle,
            maxHeight: U.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
              ? `0vh`
              : `100vh`,
          },
        }),
      await (this.props.bIsPreview &&
      this.props.accountIDs &&
      !this.props.event?.BUsesContentHubForItemSource()
        ? U.Get().HintLoadEmbeddablePreviewStreams(this.props)
        : U.Get().HintLoadEmbeddableStreams(this.props)),
      this.props.nAppIDVOD &&
        U.Get().SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
      window.setTimeout(() => {
        this.m_cancelSignal.token.reason ||
          this.setState({ style: { ...this.state.style, maxHeight: `100vh` } });
      }, 10));
  }
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`BroadcastEmbeddable component unmounted`);
  }
  ToggleBroadcastExpandShrink() {
    let e = U.Get().GetPlayReadyStream(this.props);
    if (!e) return;
    let t = this.state.bExpanded,
      n = x.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
    (H(n, t ? 2 : 3, e.snr),
      t && q()?.AddEvent(gt),
      window.setTimeout(
        () =>
          this.setState({
            innerStyle: {
              ...this.state.innerStyle,
              maxHeight: t ? `0vh` : `100vh`,
            },
          }),
        10,
      ),
      t ||
        this.setState({ bExpanded: !this.state.bExpanded }, () =>
          U.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
        ));
  }
  OnShrinkTransitionEnd() {
    this.state.innerStyle.maxHeight === `0vh` &&
      this.setState({ bExpanded: !1 }, () =>
        U.Get().SetEmbeddedStreamCollapsed(!0),
      );
  }
  async onStreamSelect(e) {
    (this.setState({ bStartMuted: !1 }),
      U.Get().GetPlayReadyStream(this.props)?.accountid != e.accountid &&
        (await U.Get().AttemptToPlayStream(this.props, e)));
  }
  async PlayNextNonVOD() {
    this.setState({ bStartMuted: !1 });
    let e = (U.Get().GetStreams(this.props) ?? []).filter(
      (e) => !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
    );
    await U.Get().PlayFromAvailableStreams(this.props, e, !0);
  }
  ConstructSidePanels(e, t) {
    let n = { bRightPanelArtworkOrEmpty: !0 };
    if (this.props.bWidePlayer) return n;
    let r = U.Get().GetConcurrentStreams(this.props) > 1,
      i = x.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
      a = (0, K.jsx)(Z, { ImgUrl: e.right_panel }, `right` + i),
      o = (0, K.jsx)(Z, { ImgUrl: e.left_panel }, `left` + i);
    if (i < 11) {
      let t = e.steamid
        ? lt.GetAppIDListForBroadcasterSteamID(e.steamid)
        : void 0;
      t && t.length === 1 && (i = t[0]);
    }
    return (
      (this.props.promotionName ||
        this.props.bIsPreview ||
        this.props.subid ||
        this.props.bundleid) &&
        i >= 11 &&
        (!this.props.event ||
          !this.props.event.jsondata.broadcast_force_banner) &&
        ((a = (0, K.jsx)(xt, { appid: i }, `mini` + e.accountid)),
        (n.bRightPanelArtworkOrEmpty = !1)),
      r && !t
        ? ((n.leftPanel = (0, K.jsx)(
            $,
            {
              broadcastEmbedContext: this.props,
              curStream: e,
              onStreamSelect: this.onStreamSelect,
              fnFilterStreams: this.props.fnFilterStreams,
              bShowCapsuleArt: this.props.bShowCapsuleArt,
            },
            `selector` + i,
          )),
          (n.rightPanel = a))
        : t
          ? ((n.leftPanel = (0, K.jsx)(`div`, {})),
            (n.rightPanel = (0, K.jsx)(Ft, {
              stream: e,
              orientation: `rightside`,
            })),
            (n.bRightPanelArtworkOrEmpty = !1))
          : ((n.leftPanel = o), (n.rightPanel = a)),
      n
    );
  }
  MarkBroadcastSeen() {
    this.m_bMarkedUsabilitySeen ||
      ((this.m_bMarkedUsabilitySeen = !0), q()?.AddEvent(ht));
  }
  render() {
    if (this.state.bLoadingPreference) return null;
    let e = U.Get().GetPlayReadyStream(this.props);
    if (e) {
      this.MarkBroadcastSeen();
      let t = U.Get().GetChatVisibility() === `show`,
        { event: n, language: r, fnRenderBroadcastContext: i } = this.props,
        a = n
          ? {
              ...e,
              left_panel: n.GetImageURL(`broadcast_left`, r || O(M.LANGUAGE)),
              right_panel: n.GetImageURL(`broadcast_right`, r || O(M.LANGUAGE)),
              store_title: n.GetBroadcastTitle(r || O(M.LANGUAGE)),
              broadcast_chat_visibility: n.GetBroadcastChatVisibility(),
            }
          : e,
        o = this.ConstructSidePanels(a, t),
        s = a.store_title ? a.store_title : a.title,
        c = U.Get().GetConcurrentStreams(this.props) > 1,
        l = () => {
          (a.nAppIDVOD && this.PlayNextNonVOD(), this.props.fnOnVideoEnd?.());
        };
      return (0, K.jsx)(W.Fragment, {
        children: (0, K.jsxs)(`div`, {
          className: `broadcast_embed_top_ctn_trgt`,
          style: this.state.style,
          children: [
            (0, K.jsxs)(`div`, {
              className: E({ [Ke]: !0, [Je]: !!n, broadcast_brd_ctn_trgt: !0 }),
              children: [
                (0, K.jsxs)(`div`, {
                  className: E(at, `bordered_title_trgt`),
                  children: [
                    (0, K.jsx)(d, {}),
                    (0, K.jsx)(`div`, { className: Fe, children: s }),
                    (0, K.jsxs)(`div`, {
                      className: Ue,
                      children: [
                        !this.state.bExpanded &&
                          (0, K.jsx)(k, {
                            toolTipContent: A(
                              `#StoreBroadcast_Change_store_Broadcast_settings`,
                            ),
                            children: (0, K.jsx)(`div`, {
                              className: `Ku3ORKocBrQ-`,
                              onClick: () =>
                                window.open(
                                  `${M.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                ),
                            }),
                          }),
                        (0, K.jsx)(k, {
                          toolTipContent: A(`#StoreBroadcast_Hide_Tooltip`),
                          children: (0, K.jsx)(`div`, {
                            className: this.state.bExpanded ? it : ot,
                            onClick: this.ToggleBroadcastExpandShrink,
                          }),
                        }),
                      ],
                    }),
                    !!a.gamedata_subtitle &&
                      (0, K.jsx)(`div`, {
                        className: `WdbOLmmaXso-`,
                        children: a.gamedata_subtitle,
                      }),
                  ],
                }),
                !!this.state.bExpanded &&
                  (0, K.jsxs)(`div`, {
                    className: E({
                      "lOf3hlirldE-": !0,
                      embeddable_ctn_trgt: !0,
                      multistream: c,
                      broadcast_right_panel_simple: o.bRightPanelArtworkOrEmpty,
                      broadcast_chat_expanded: t,
                    }),
                    style: { ...this.state.innerStyle },
                    onTransitionEnd: this.OnShrinkTransitionEnd,
                    children: [
                      (0, K.jsx)(`div`, {
                        className: `HEBZJhZ641A-`,
                        children: o.leftPanel,
                      }),
                      (0, K.jsx)(Y, {
                        stream: a,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: i,
                        fnOnVideoEnd: l,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      (0, K.jsx)(`div`, {
                        className: `UHu5FWxee0A-`,
                        children: o.rightPanel,
                      }),
                      !!this.state.bExpanded &&
                        (0, K.jsx)(X, {
                          stream: a,
                          bMultistream: c,
                          chatAnnouncementGivewayGID: o.rightPanel
                            ? void 0
                            : this.props.chat_announcement_giveaway,
                        }),
                    ],
                  }),
              ],
            }),
            !!n &&
              !!(n.jsondata && n.jsondata.broadcast_item_drops_enabled) &&
              (0, K.jsx)(St, { event: n }),
            (0, K.jsx)(`div`, { className: Le }),
          ],
        }),
      });
    }
    return (0, K.jsx)(`div`, { className: `NoBroadcastAvailable` });
  }
};
(F([T], J.prototype, `ToggleBroadcastExpandShrink`, null),
  F([T], J.prototype, `OnShrinkTransitionEnd`, null),
  F([T], J.prototype, `onStreamSelect`, null),
  F([T], J.prototype, `PlayNextNonVOD`, null),
  (J = F([r], J)));
var Y = class extends W.Component {
  m_iVideoContainerRef = W.createRef();
  constructor(e) {
    (super(e),
      (this.state = {
        bPopout: !1,
        bPreventPopup: window.screen.width <= 768,
      }));
  }
  CloseBroadcastPopup() {
    let e = x.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (H(e, 7, this.props.stream.snr),
      q()?.AddEvent(_t),
      this.setState({ bPopout: !1, bPreventPopup: !0 }));
  }
  OnEnter() {
    !this.state.bPreventPopup &&
      this.state.bPopout &&
      this.setState({ bPopout: !1 });
  }
  OnLeave() {
    !this.state.bPreventPopup &&
      !this.state.bPopout &&
      this.setState({ bPopout: !0 });
  }
  render() {
    return (0, K.jsx)(`div`, {
      className: He,
      children: (0, K.jsx)(se, {
        onEnter: this.OnEnter,
        onLeave: this.OnLeave,
        onIntersectionChange: (e) => {
          e.isIntersecting || this.OnLeave();
        },
        className: E({
          [Oe]: !0,
          video_placeholder_trgt: !0,
          [qe]: this.props.bWidePlayer,
        }),
        ref: this.m_iVideoContainerRef,
        children: (0, K.jsxs)(`div`, {
          className: this.state.bPopout ? Ie : Te,
          children: [
            this.state.bPopout &&
              (0, K.jsx)(Q, {
                steamIDBroadcast: this.props.stream.steamid,
                OnPreventPopup: this.CloseBroadcastPopup,
              }),
            (0, K.jsx)(`div`, {
              className: $e,
              children: (0, K.jsx)(ae, {
                steamIDBroadcast: this.props.stream.steamid,
                watchLocation: 6,
                bStartMuted: this.props.bStartMuted,
                fnRenderBroadcastContext: this.props.fnRenderBroadcastContext,
                fnOnVideoEnd: this.props.fnOnVideoEnd,
                nAppIDVOD: this.props.stream.nAppIDVOD,
              }),
            }),
          ],
        }),
      }),
    });
  }
};
(F([T], Y.prototype, `CloseBroadcastPopup`, null),
  F([T], Y.prototype, `OnEnter`, null),
  F([T], Y.prototype, `OnLeave`, null));
function jt(e) {
  let { stream: t } = e,
    [n] = o(() => [t.steamid]),
    r = x.GetOrCreateBroadcastInfo(n).m_nAppID,
    i = Ot.list.find(
      (e) =>
        e.appid == r &&
        (!e.broadcasterAccountID || e.broadcasterAccountID == t.accountid),
    );
  if (i) {
    let e = i.url;
    return (
      (M.IN_CLIENT ||
        navigator.userAgent.indexOf(`Valve Steam Client`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam GameOverlay`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam Tenfoot`) >= 0) &&
        (e = `steam://openurl/` + e),
      (0, K.jsx)(`a`, {
        href: e,
        children: A(`#Broadcast_Embed_Watch_With_Frieds_SteamTV`),
      })
    );
  }
  {
    let e = M.COMMUNITY_BASE_URL + `broadcast/watch/` + n;
    return (0, K.jsx)(k, {
      toolTipContent: A(`#BroadcastWatch_View_Broadcast_Page`),
      children: (0, K.jsx)(`a`, {
        href: e,
        className: Xe,
        children: (0, K.jsx)(de, {}),
      }),
    });
  }
}
var X = class extends W.Component {
  OnToggleChat(e) {
    e.preventDefault();
    let t = x.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (H(
      t,
      U.Get().GetChatVisibility() === `show` ? 5 : 4,
      this.props.stream.snr,
    ),
      U.Get().ToggleChatVisibility());
  }
  onWatchBroadcastPage() {
    let e = x.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    H(e, 9, this.props.stream.snr);
  }
  render() {
    let e = U.Get().GetChatVisibility() != `remove`,
      t = U.Get().GetChatVisibility() === `hide`,
      n = !this.props.stream.nAppIDVOD,
      r = n,
      i = Number.parseInt(
        `` +
          x.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nViewerCount,
      );
    return (0, K.jsxs)(`div`, {
      className: E(nt, `viewer_bar`),
      children: [
        (0, K.jsxs)(`div`, {
          className: E(B, `viewer_count`),
          children: [(0, K.jsx)(L, {}), C(i)],
        }),
        (0, K.jsxs)(`div`, {
          className: E(Ve, `viewer_links`),
          children: [
            !!(e && !t && this.props.bMultistream) &&
              (0, K.jsx)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: (0, K.jsx)(`a`, {
                  href: `#`,
                  className: void 0,
                  onClick: this.OnToggleChat,
                  children: A(`#sale_three_section_show_streams`),
                }),
              }),
            e &&
              (0, K.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, K.jsx)(ye, {}),
                  (0, K.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: this.OnToggleChat,
                    children: A(
                      t
                        ? `#sale_three_section_show_chat`
                        : `#sale_three_section_hide_chat`,
                    ),
                  }),
                ],
              }),
            r &&
              (0, K.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, K.jsx)(be, {}),
                  (0, K.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: (e) => {
                      let t = N(e);
                      t &&
                        ge(
                          (0, K.jsx)(Ct, {
                            steamid: this.props.stream.steamid ?? ``,
                          }),
                          t,
                        );
                    },
                    children: A(`#Broadcast_ShareBroadcast`),
                  }),
                ],
              }),
            (0, K.jsx)(k, {
              toolTipContent: A(
                `#StoreBroadcast_Change_store_Broadcast_settings`,
              ),
              children: (0, K.jsx)(`a`, {
                href:
                  M.STORE_BASE_URL +
                  `account/preferences/#store_broadcast_settings`,
                target: M.IN_CLIENT ? void 0 : `_blank`,
                className: je,
                children: (0, K.jsx)(_e, {}),
              }),
            }),
            n && (0, K.jsx)(jt, { ...this.props }),
          ],
        }),
        !!this.props.chatAnnouncementGivewayGID &&
          (0, K.jsx)(xe, {
            gidGiveaway: this.props.chatAnnouncementGivewayGID,
            stream: this.props.stream,
          }),
      ],
    });
  }
};
(F([T], X.prototype, `OnToggleChat`, null),
  F([T], X.prototype, `onWatchBroadcastPage`, null),
  (X = F([r], X)));
var Z = class extends W.Component {
    render() {
      let e = this.props.ImgUrl;
      return (0, K.jsxs)(`div`, {
        className: Ge,
        children: [
          e &&
            (0, K.jsx)(`img`, {
              className: `KkgW9CzRVMI-`,
              src: this.props.ImgUrl,
            }),
          !e && (0, K.jsx)(`div`, { className: `KkgW9CzRVMI-` }),
        ],
      });
    }
  },
  Q = r((e) => {
    let { steamIDBroadcast: t } = e,
      n = x.GetOrCreateBroadcastInfo(t).m_nAppID;
    n = n == 7 ? 0 : n;
    let r = u(n),
      { data: i } = I(r);
    return (0, K.jsxs)(`div`, {
      className: [Ze, void 0].join(` `),
      children: [
        i
          ? (0, K.jsx)(te, {
              id: r,
              className: V,
              children: A(`#StoreBroadcast_Detault_popout_Title`),
            })
          : (0, K.jsx)(`div`, {
              className: V,
              children: A(`#StoreBroadcast_Detault_popout_Title`),
            }),
        (0, K.jsx)(k, {
          toolTipContent: A(`#StoreBroadcast_close_broadcast_popup`),
          children: (0, K.jsx)(`button`, {
            className: We,
            onClick: e.OnPreventPopup,
            children: (0, K.jsx)(ve, {}),
          }),
        }),
      ],
    });
  });
function Mt(e, t) {
  let n = x.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
    r = w.Get().GetApp(n);
  return e && r?.GetAssets()?.GetHeaderURL() ? parseInt(De) : parseInt(ke);
}
function $(e) {
  let {
      curStream: t,
      onStreamSelect: n,
      fnFilterStreams: r,
      bShowCapsuleArt: i,
      broadcastEmbedContext: a,
    } = e,
    o = (0, W.useRef)(null),
    s = (0, W.useMemo)(() => {
      let e = (U.Get().GetStreams(a) ?? []).filter((e) => !r || r(e));
      return (ut(e), e);
    }, [a, r]);
  return (
    (0, W.useEffect)(() => {
      if (o && o.current) {
        let e = s
          .map((e) => x.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
          .filter(Boolean);
        w.Get()
          .QueueMultipleAppRequests(e, { include_assets: !0 })
          .then(() => {
            if (o.current) {
              let e = 0;
              for (let n of s) {
                if (t.accountid == n.accountid) break;
                e += Mt(i, n);
              }
              o.current.scrollTop = e;
            }
          });
      }
    }, [s, i, t.accountid, o]),
    (0, K.jsx)(`div`, {
      ref: o,
      className: E({ [Ne]: !0, side_panels: !0, [Ye]: !0, [Ae]: s.length > 3 }),
      children: (0, K.jsx)(`div`, {
        className: et,
        children: s.map((e) =>
          (0, K.jsx)(
            Nt,
            {
              stream: e,
              bSelected: t.accountid == e.accountid,
              onStreamSelect: n,
              bShowCapsuleArt: i,
            },
            e.accountid ?? e.steamid,
          ),
        ),
      }),
    })
  );
}
function Nt(e) {
  let { onStreamSelect: t, bSelected: n, stream: r, bShowCapsuleArt: i } = e,
    a = o(() => x.GetOrCreateBroadcastInfo(r.steamid).m_nAppID);
  a = a == 7 ? 0 : a;
  let l = u(a),
    { data: d } = I(l),
    { data: f } = D(l);
  if (!ct(r)) return null;
  let p = i && f ? S(f, `header`) : void 0,
    m = Number.parseInt(`` + r.viewer_count),
    h = !Number.isNaN(m),
    g = !!r.nAppIDVOD && d?.name;
  return (0, K.jsxs)(`div`, {
    className: E({
      [Ce]: !0,
      [void 0]: r.current_selection_priority == s.k_eFeatured,
      [Me]: !!p,
    }),
    children: [
      (0, K.jsx)(v, {
        id: l,
        hoverClassName: tt,
        children: (0, K.jsx)(c, {
          className: E(ze, n && void 0),
          onClick: () => t && t(r),
          rootMargin: `100px 0px 100px 0px`,
          children: (0, K.jsx)(Pt, {
            strThumbnail: r.thumbnail_http_address,
            bSelected: n,
            strCapsuleArtURL: p,
          }),
        }),
      }),
      (0, K.jsx)(`div`, {
        className: E(B, !h && `QP7p0y7iNjE-`),
        children: h
          ? (0, K.jsxs)(K.Fragment, {
              children: [
                (0, K.jsx)(L, {}),
                (0, K.jsx)(`div`, { className: Qe, children: C(m) }),
              ],
            })
          : g,
      }),
    ],
  });
}
function Pt(e) {
  let { strCapsuleArtURL: t, strThumbnail: n, bSelected: r } = e,
    i = r ? Re : st;
  if (t) {
    let e = [t];
    return (0, K.jsxs)(K.Fragment, {
      children: [
        (0, K.jsx)(`img`, { className: E(i, Ee), src: t }),
        (0, K.jsx)(g, { className: E(i, Be), srcs: e }),
      ],
    });
  }
  return (0, K.jsx)(`img`, { className: i, src: n });
}
function Ft(e) {
  let { stream: t, orientation: n } = e,
    r = n == `below`,
    [i, a] = o(() => {
      let e = t.steamid ? x.GetBroadcast(t.steamid) : void 0;
      return [e, e?.m_ulBroadcastID];
    }),
    s = o(() => t.steamid);
  return i
    ? (0, K.jsx)(`div`, {
        className: E({ [void 0]: r, [void 0]: !r, [we]: !0 }),
        children: (0, K.jsx)(`div`, {
          className: rt,
          children: (0, K.jsx)(Pe, {
            emoticonStore: dt,
            watchLocation: 6,
            steamID: s,
            broadcastID: a,
          }),
        }),
      })
    : null;
}
export { Dt as n, Q as t };
