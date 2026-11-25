/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { i as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  Cr as n,
  Ft as r,
  G as i,
  L as a,
  Ln as o,
  N as s,
  Nt as c,
  Pt as l,
  W as u,
  ft as d,
  hn as f,
  l as p,
  o as m,
} from "./chunk~d3515eca4e.js";
import {
  Ur as h,
  Vs as g,
  Xn as _,
  Ya as ee,
  Yn as te,
  Zi as ne,
  ao as re,
  bn as ie,
  fn as ae,
  hc as v,
  hn as y,
  ln as b,
  qn as oe,
  ra as x,
  sn as S,
  va as se,
  yn as ce,
} from "./chunk~e464778a03.js";
import {
  _ as C,
  a as le,
  c as ue,
  f as w,
  i as T,
  l as E,
  m as D,
  r as O,
  s as k,
  u as A,
  x as j,
} from "./chunk~8ef2f32a67.js";
import { n as M, t as N } from "./chunk~eee3bbd4cd.js";
import { Dt as P } from "./chunk~37ff8cec8b.js";
import { i as F, n as I, t as L } from "./chunk~0ef0cd2c00.js";
import { a as R, b as z, m as B, s as V, t as H } from "./chunk~10c934b72c.js";
var U = e(n()),
  W = I(),
  de = ({ group: e, onClick: t }) => {
    let n = e.watching_broadcast_steamid;
    return (0, W.jsx)(`button`, {
      className: `ChatRoomListGroupItem NoChannels WatchPartyGroup DialogButton watchHowButton`,
      onClick: t,
      children: (0, W.jsxs)(`div`, {
        className: `ChatRoomListGroupItem_header`,
        children: [
          (0, W.jsx)(ue, { group: e, small: !0 }),
          (0, W.jsxs)(`div`, {
            className: `groupNameStatusContainer`,
            children: [
              (0, W.jsx)(`div`, {
                className: `chatRoomName`,
                children: e.name,
              }),
              n &&
                (0, W.jsx)(`div`, {
                  className: `chatRoomDetails`,
                  children: m(`#Broadcast_WatchParty_Viewers_NoneActive`),
                }),
            ],
          }),
        ],
      }),
    });
  },
  G = class extends U.Component {
    CreateWatchParty(e = !1) {
      let {
        browserContext: t,
        ownerWindow: n,
        broadcastAccountId: r,
        initialFriend: i,
      } = this.props;
      this.Close();
      let a = e && i ? [i.accountid] : [];
      fe(t, n || window, r, a);
    }
    WatchAlone() {
      this.Close();
    }
    UpgradeExisting(e) {
      let {
        broadcastAccountId: t,
        browserContext: n,
        broadcastChannelID: r,
        broadcastTabId: i,
      } = this.props;
      (this.Close(),
        r
          ? e.SetChatRoomGroupWatchingBroadcast(void 0, r)
          : e.SetChatRoomGroupWatchingBroadcast(t));
      let a = C.UIStore.ShowAndOrActivateChatRoomGroup(n, e, !0);
      (i && C.UIStore.CloseTabByID(i),
        this.props.bIsNewSteamTVDialog || a.ShowBroadcast());
    }
    Close() {
      let { closeModal: e } = this.props;
      e && e();
    }
    render() {
      let { closeModal: e, initialFriend: t } = this.props,
        n = C.ChatStore.currentChatRoomGroups.filter((e) =>
          e.BCanIAssociateBroadcast(),
        ),
        r = t;
      return (0, W.jsx)(`div`, {
        className: `chatModalCover`,
        children: (0, W.jsx)(te, {
          onEscKeypress: e,
          children: (0, W.jsxs)(ae, {
            className: `watchPartyDialog`,
            children: [
              (0, W.jsxs)(S, {
                children: [
                  (0, W.jsx)(`div`, {
                    className: `watchPartyPrompt`,
                    children: m(`#Broadcast_WatchPrompt`),
                  }),
                  (0, W.jsxs)(ce, {
                    children: [
                      !this.props.bIsNewSteamTVDialog &&
                        (0, W.jsx)(b, {
                          svgicon: ne,
                          className: `watchHowButton`,
                          onClick: this.WatchAlone,
                          children: m(`#Broadcast_WatchAlone`),
                        }),
                      r &&
                        (0, W.jsxs)(b, {
                          className: `watchHowButton`,
                          onClick: () => this.CreateWatchParty(!0),
                          children: [
                            (0, W.jsx)(k, {
                              friend: r,
                              context: null,
                              bLarge: !1,
                            }),
                            p(
                              `#Broadcast_WatchWith`,
                              (0, W.jsxs)(`span`, {
                                className: `highlight`,
                                children: [` `, r.display_name],
                              }),
                            ),
                          ],
                        }),
                      n.length !== 0 &&
                        (0, W.jsxs)(U.Fragment, {
                          children: [
                            (0, W.jsx)(ie, {
                              children: m(
                                `#Broadcast_WatchWithExistingWatchParty`,
                              ),
                            }),
                            n.map((e) =>
                              (0, W.jsx)(
                                de,
                                {
                                  group: e,
                                  onClick: () => this.UpgradeExisting(e),
                                },
                                e.unique_id,
                              ),
                            ),
                          ],
                        }),
                      (0, W.jsx)(b, {
                        className: `watchHowButton newWatchGroup`,
                        svgicon: se,
                        onClick: () => this.CreateWatchParty(!1),
                        children: m(`#Broadcast_LinkBroadcastToGroup_New`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, W.jsx)(y, {}),
            ],
          }),
        }),
      });
    }
  };
(s([o], G.prototype, `WatchAlone`, null), s([o], G.prototype, `Close`, null));
function fe(e, t, n, r) {
  oe(
    (0, W.jsx)(D, {
      browserContext: e,
      bHideChatNameEntry: !1,
      vecInvitePlayers: r,
      chatViewToReplace: void 0,
      creationOptions: { unBroadcastAccountId: n },
      strTitle: m(`#Broadcast_CreateWatchParty`),
    }),
    t,
    `CreateChatDialog`,
    {
      strTitle: m(`#Broadcast_CreateWatchParty`),
      popupWidth: 450,
      popupHeight: 600,
    },
    le(t),
  );
}
var pe = e(L()),
  me = 2500,
  K = class {
    constructor() {
      u(this);
    }
    m_fnLaunchChat;
    m_iTimeoutLogin = void 0;
    m_eLogonState = 0;
    m_steamID = void 0;
    m_reactRoot;
    Init(e) {
      ((this.m_fnLaunchChat = e),
        (this.m_steamID = c.steamid),
        window.addEventListener(`message`, this.HandlePostMessage),
        (this.m_reactRoot = pe.createRoot(
          document.getElementById(`friendslist-container`),
        )),
        this.m_reactRoot.render(U.createElement(q, { app: this })),
        (this.m_iTimeoutLogin = window.setTimeout(() => {
          this.m_eLogonState == 0 && (this.m_eLogonState = 1);
        }, me)));
    }
    LaunchChat() {
      (this.m_reactRoot.unmount(),
        window.removeEventListener(`message`, this.HandlePostMessage),
        window.clearTimeout(this.m_iTimeoutLogin),
        O(c.steamid),
        this.m_fnLaunchChat());
    }
    GetLoginURL() {
      return `${l.STORE_BASE_URL}login/?steamtv`;
    }
    BIsPerformingLogonCheck() {
      return this.m_eLogonState == 0 || this.m_eLogonState == 1;
    }
    BReadyToRender() {
      return this.m_eLogonState != 0;
    }
    GetSteamIDWatched() {
      return this.m_steamID;
    }
    ExtractOrigin(e) {
      return e.replace(/^(https?:\/\/[^/]*).*$/, `$1`);
    }
    HandlePostMessage(e) {
      if (
        e.origin != this.ExtractOrigin(l.STORE_BASE_URL) &&
        e.origin != this.ExtractOrigin(l.CHAT_BASE_URL)
      ) {
        console.warn(`Ignoring message from untrusted domain "${e.origin}"`);
        return;
      }
      let t = e.data;
      if (t) {
        if (t.msg == `OnLoginButtonClicked`)
          (console.log(`Login button clicked`), (window.location.href = $()));
        else if (t.command == `LoginNeeded`) this.m_eLogonState = 2;
        else if (t.command == `LogonComplete`) {
          this.LaunchChat();
          return;
        }
      }
    }
  };
(s([i], K.prototype, `m_eLogonState`, void 0),
  s([i], K.prototype, `m_steamID`, void 0),
  s([a], K.prototype, `LaunchChat`, null),
  s([a.bound], K.prototype, `HandlePostMessage`, null));
var q = class extends U.Component {
  m_broadcastInfo = null;
  constructor(e) {
    (super(e),
      (this.m_broadcastInfo = H.StartInfo(this.props.app.GetSteamIDWatched())),
      (this.state = { bChatCollapsed: !1, bTheaterMode: !1 }));
  }
  componentWillUnmount() {
    this.m_broadcastInfo &&= (H.StopInfo(this.m_broadcastInfo), null);
  }
  ToggleChat() {
    this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
  }
  ToggleTheaterMode() {
    this.setState({ bTheaterMode: !this.state.bTheaterMode });
  }
  render() {
    let e = this.props.app,
      t = this.m_broadcastInfo,
      n = X();
    return (0, W.jsxs)(ge, {
      children: [
        e.BReadyToRender() &&
          (0, W.jsxs)(`div`, {
            className:
              `StandalonePlayer` +
              (this.state.bTheaterMode ? ` TheaterMode` : ``),
            children: [
              (0, W.jsx)(P, {
                className: `FullpageBroadcastBackdrop`,
                src: t.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
              (0, W.jsxs)(`div`, {
                className: `BroadcastTab`,
                children: [
                  (0, W.jsxs)(`div`, {
                    className: `StandalonePlayerHeader`,
                    children: [
                      (0, W.jsx)(`div`, {
                        className: `STV_Logo`,
                        children: (0, W.jsx)(ee, {}),
                      }),
                      (0, W.jsxs)(`div`, {
                        className:
                          `BroadcastTab_HeaderRow` +
                          (this.state.bChatCollapsed ? ` ChatCollapsed` : ``),
                        children: [
                          (0, W.jsx)(J, {
                            onClick: () => (window.location.href = $()),
                          }),
                          (0, W.jsx)(Y, {
                            onClick: this.ToggleChat,
                            hideIcon: this.state.bChatCollapsed,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, W.jsx)(Q, {
                    steamID: e.GetSteamIDWatched(),
                    watchLocation: n,
                    bHideChat: this.state.bChatCollapsed,
                    onTheaterMode: this.ToggleTheaterMode,
                  }),
                ],
              }),
            ],
          }),
        (0, W.jsx)(_e, { app: e }),
      ],
    });
  }
};
(s([o], q.prototype, `ToggleChat`, null),
  s([o], q.prototype, `ToggleTheaterMode`, null),
  (q = s([F], q)));
function he() {
  let e = t(`loyalty_webapi_token`, `application_config`);
  return R(new V(l.WEBAPI_BASE_URL, e));
}
function ge(e) {
  let { children: t } = e,
    n = U.useCallback(() => C?.CMInterface, []),
    i = v(U.useCallback(() => new w(), [])),
    a = v(he);
  return (0, W.jsx)(B, {
    children: (0, W.jsx)(d, {
      children: (0, W.jsx)(_, {
        children: r.logged_in
          ? (0, W.jsx)(h, {
              useActiveCMInterface: n,
              useStorage: i,
              children: t,
            })
          : (0, W.jsx)(h, {
              useActiveSteamInterface: a,
              useStorage: i,
              children: t,
            }),
      }),
    }),
  });
}
var _e = F(({ app: e }) =>
  e.BIsPerformingLogonCheck()
    ? (0, W.jsx)(`div`, {
        children: (0, W.jsx)(`iframe`, {
          style: { display: `none` },
          src: e.GetLoginURL(),
        }),
      })
    : null,
);
function J(e) {
  return (0, W.jsxs)(`div`, {
    className: `BroadcastButton WatchWithFriends`,
    onClick: e.onClick,
    children: [(0, W.jsx)(re, {}), m(`#Broadcast_WatchWithFriends`)],
  });
}
function Y(e) {
  return (0, W.jsx)(`div`, {
    className: `ToggleBroadcastChat`,
    title: m(`#Broadcast_ToggleChat`),
    onClick: e.onClick,
    children: (0, W.jsx)(x, { showChat: e.hideIcon }),
  });
}
function X() {
  return j.STEAM_TV ? 1 : 3;
}
var Z = class extends U.Component {
  m_broadcastInfo = null;
  constructor(e) {
    super(e);
    let t = this.props.broadcastView.GetSteamID().ConvertTo64BitString();
    ((this.m_broadcastInfo = H.StartInfo(t)),
      (this.state = { bChatCollapsed: !1 }));
  }
  componentWillUnmount() {
    this.m_broadcastInfo &&= (H.StopInfo(this.m_broadcastInfo), null);
  }
  OnWatchWithFriends() {
    this.props.broadcastView.ShowWatchPromptDialog();
  }
  ToggleChat() {
    this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
  }
  ToggleTheaterMode() {
    C.UIStore.SetTheaterMode(!C.UIStore.GetTheaterMode());
  }
  render() {
    let { broadcastView: e, popup: t, style: n } = this.props,
      r = e.GetSteamID().ConvertTo64BitString(),
      i = X(),
      a = e.m_bShowWatchPromptDialog
        ? (0, W.jsx)(G, {
            closeModal: () => e.HideWatchPromptDialog(),
            broadcastAccountId: e.GetSteamID().GetAccountID(),
            broadcastTabId: e.GetUniqueID(),
            initialFriend: e.m_watchPromptInitialFriend,
            browserContext: g,
            ownerWindow: t,
          })
        : null;
    return (0, W.jsxs)(`div`, {
      className: `BroadcastTab`,
      style: n,
      children: [
        (0, W.jsx)(P, {
          className: `FullpageBroadcastBackdrop`,
          src: this.m_broadcastInfo.m_strThumbnailUrl,
          draggable: !1,
          duration: 2500,
        }),
        (0, W.jsxs)(`div`, {
          className: `BroadcastTab_OverBackground`,
          children: [
            (0, W.jsx)(`div`, {
              className: `BroadcastTabHeaderContainer`,
              children: (0, W.jsxs)(`div`, {
                className:
                  `BroadcastTab_HeaderRow` +
                  (this.state.bChatCollapsed ? ` ChatCollapsed` : ``),
                children: [
                  (0, W.jsx)(J, { onClick: this.OnWatchWithFriends }),
                  (0, W.jsx)(Y, {
                    onClick: this.ToggleChat,
                    hideIcon: this.state.bChatCollapsed,
                  }),
                ],
              }),
            }),
            (0, W.jsx)(Q, {
              steamID: r,
              watchLocation: i,
              bHideChat: this.state.bChatCollapsed,
              onTheaterMode: this.ToggleTheaterMode,
              children: a,
            }),
          ],
        }),
      ],
    });
  }
};
(s([o], Z.prototype, `OnWatchWithFriends`, null),
  s([o], Z.prototype, `ToggleChat`, null),
  s([o], Z.prototype, `ToggleTheaterMode`, null),
  (Z = s([F], Z)));
var Q = class extends U.Component {
  m_strLocalSteamID = ``;
  m_refBroadcastContainer = U.createRef();
  m_elMainContent;
  constructor(e) {
    (super(e), u(this), (this.state = { info: null }));
  }
  componentDidMount() {
    z.stream[`76561198208088121`] && l.LANGUAGE === `chinese`
      ? this.OnLocalStreamChange(`76561198208088121`)
      : z.stream[`76561198207552741`] &&
        l.LANGUAGE === `russian` &&
        this.OnLocalStreamChange(`76561198207552741`);
  }
  static getDerivedStateFromProps(e, t) {
    return !t.info || t.info.m_steamIDBroadcast !== e.steamID
      ? (t.info && H.StopInfo(t.info), { info: H.StartInfo(e.steamID) })
      : null;
  }
  componentWillUnmount() {
    this.state.info && H.StopInfo(this.state.info);
  }
  OnLocalStreamChange(e) {
    this.m_strLocalSteamID = e;
  }
  SetMainContentRef(e) {
    this.m_elMainContent = e;
  }
  CalculateBroadcastSectionStyles(e) {
    if (this.props.bHideChat) return { width: `100%`, height: `100%` };
    let t, n;
    T &&
      ((t = T.UIDisplayPrefs.nWatchPartyBroadcastHeightPercentage),
      (n = T.UIDisplayPrefs.nWatchPartyBroadcastWidthPercentage));
    let r = {};
    if (e) {
      let e = t || 66;
      if (((r.height = `${e}%`), this.m_elMainContent)) {
        let { clientWidth: t, clientHeight: n } = this.m_elMainContent,
          i = (9 / 16) * t + 50;
        r.height = `${f(e, 1, (i / n) * 100)}%`;
      }
    } else
      ((r.width = n ? `${n}%` : `66%`),
        (r.minWidth = n ? `${n}%` : `66%`),
        (r.maxWidth = `calc( 100% - 316px )`),
        (r.overflowY = `auto`));
    return r;
  }
  OnGrabberMouseDown(e) {
    let t = e.currentTarget.ownerDocument.defaultView;
    (t.addEventListener(`mousemove`, this.HandleMouseMove),
      t.addEventListener(`mouseup`, this.UnregisterDragEvents),
      this.setState({ bDraggingChatGrabber: !0 }));
  }
  HandleMouseMove(e) {
    (e.preventDefault(), e.stopPropagation());
    let t = this.m_refBroadcastContainer.current.getBoundingClientRect(),
      n =
        this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect(),
      r = t.left,
      i = e.clientX,
      a = n.width,
      o = f(((i - r) / a) * 100, 1, 100);
    T.SetUIDisplayPref(`nWatchPartyBroadcastWidthPercentage`, o);
  }
  UnregisterDragEvents(e) {
    (e.view.removeEventListener(`mousemove`, this.HandleMouseMove),
      e.view.removeEventListener(`mouseup`, this.UnregisterDragEvents),
      this.setState({ bDraggingChatGrabber: !1 }));
  }
  render() {
    let { steamID: e, children: t } = this.props,
      n = this.m_strLocalSteamID || e,
      i = this.state.info.m_bIsOnline,
      a = null,
      o = this.CalculateBroadcastSectionStyles(!1);
    ((o.flexGrow = this.props.bHideChat ? 1 : null),
      z.bValid && (a = (0, W.jsx)(ve, { info: z })));
    let s = (0, W.jsx)(`div`, {
        className: `LoginDiv`,
        children: (0, W.jsx)(`a`, {
          className: A,
          href: `${l.STORE_BASE_URL}login?steamtv=1&allow_password=1`,
          children: m(`#BroadcastChat_Login`),
        }),
      }),
      c = H.GetBroadcast(n) ? H.GetBroadcast(n).m_ulBroadcastID : `0`;
    return (0, W.jsxs)(`div`, {
      className: `BroadcastContainer`,
      children: [
        (0, W.jsxs)(`div`, {
          className: `BroadcastContainerSection`,
          ref: this.m_refBroadcastContainer,
          style: o,
          children: [
            (0, W.jsxs)(`div`, {
              className: `BroadcastContainerSectionVideoContainer`,
              children: [
                i &&
                  (0, W.jsx)(
                    M,
                    {
                      steamIDBroadcast: n,
                      watchLocation: this.props.watchLocation,
                      onTheaterMode: this.props.onTheaterMode,
                    },
                    n,
                  ),
                !i && a,
                (0, W.jsx)(`div`, { className: `videoContainerSizer` }),
              ],
            }),
            t,
            (0, W.jsx)(`div`, {
              className: `BroadcastDetailsSection`,
              children: (0, W.jsx)(N, {
                steamID: n,
                onLocalStreamChange: this.OnLocalStreamChange,
                bVerticalBroadcastChat: !0,
              }),
            }),
          ],
        }),
        !this.props.bHideChat &&
          (0, W.jsx)(`div`, {
            className: `BroadcastChatDivider horizontal`,
            onMouseDown: this.OnGrabberMouseDown,
          }),
        (0, W.jsxs)(`div`, {
          className: `BroadcastChatDiv`,
          style: {
            display: this.props.bHideChat ? `none` : `flex`,
            flexDirection: `column`,
            width: `100%`,
            minWidth: `300px`,
          },
          children: [
            (0, W.jsx)(E, {
              emoticonStore: C ? C.ChatStore.EmoticonStore : null,
              broadcastID: c,
              steamID: n,
              watchLocation: this.props.watchLocation,
              hidden: this.props.bHideChat,
            }),
            r && r.logged_in ? null : s,
          ],
        }),
      ],
    });
  }
};
(s([i], Q.prototype, `m_strLocalSteamID`, void 0),
  s([o], Q.prototype, `OnLocalStreamChange`, null),
  s([o], Q.prototype, `SetMainContentRef`, null),
  s([o], Q.prototype, `OnGrabberMouseDown`, null),
  s([o], Q.prototype, `HandleMouseMove`, null),
  s([o], Q.prototype, `UnregisterDragEvents`, null),
  (Q = s([F], Q)));
function ve(e) {
  let t = `url( "${l.CHAT_BASE_URL + e.info.offlineImage}" )`;
  return (0, W.jsx)(`div`, {
    style: { backgroundImage: t },
    className: `BroadcastOffline`,
  });
}
function $() {
  return `${l.STORE_BASE_URL}login?steamtv=1`;
}
export { Z as BroadcastTab, K as CBroadcastApp };
