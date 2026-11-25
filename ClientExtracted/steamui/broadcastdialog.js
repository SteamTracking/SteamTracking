import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Aa as t,
  Ga as n,
  Ia as r,
  Jr as i,
  Ka as a,
  Ma as o,
  Na as s,
  Sa as c,
  _t as l,
  eo as u,
  gn as ee,
  pn as d,
  wt as te,
  ya as ne,
  z as f,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import {
  Cu as p,
  Lc as m,
  ac as h,
  ad as g,
  pc as _,
  ru as v,
} from "./chunk~6780060d19.js?contenthash=D23mWcHU";
import {
  Bn as y,
  Cn as b,
  En as x,
  Fn as re,
  Sr as ie,
  kn as ae,
  kr as oe,
  wr as se,
  xi as ce,
  zn as le,
} from "./chunk~1fa4b8f2ff.js?contenthash=BmfmDRCl";
import { t as ue } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import "./chunk~6efc40bd45.js?contenthash=BD8MmAIt";
import { _ as de, ct as fe, o as S } from "./library.js?contenthash=t9xy63v9";
import { s as C, t as w } from "./chunk~10c934b72c.js?contenthash=7fORn_3O";
import {
  N as T,
  a as E,
  t as D,
} from "./chunk~b0b4327181.js?contenthash=CuyAW7QR";
import { r as O, t as k } from "./chunk~70c16cc80c.js?contenthash=BtQf2cNP";
import { m as A } from "./chunk~9a3ef4764b.js?contenthash=D9-KxIzI";
import { n as j, t as M } from "./chunk~eee3bbd4cd.js?contenthash=BUtxBxtl";
import {
  $t as N,
  Bn as P,
  Nn as F,
  Rn as I,
  en as L,
  nn as R,
  rn as z,
  tn as B,
  zn as V,
} from "./chunk~5ad53110ba.js?contenthash=haYcbzyQ";
var H = e(u()),
  U = ue(),
  pe = ({ group: e, onClick: t }) => {
    let n = e.watching_broadcast_steamid;
    return (0, U.jsx)(`button`, {
      className: `ChatRoomListGroupItem NoChannels WatchPartyGroup DialogButton watchHowButton`,
      onClick: t,
      children: (0, U.jsxs)(`div`, {
        className: `ChatRoomListGroupItem_header`,
        children: [
          (0, U.jsx)(z, { group: e, small: !0 }),
          (0, U.jsxs)(`div`, {
            className: `groupNameStatusContainer`,
            children: [
              (0, U.jsx)(`div`, {
                className: `chatRoomName`,
                children: e.name,
              }),
              n &&
                (0, U.jsx)(`div`, {
                  className: `chatRoomDetails`,
                  children: l(`#Broadcast_WatchParty_Viewers_NoneActive`),
                }),
            ],
          }),
        ],
      }),
    });
  },
  W = class extends H.Component {
    CreateWatchParty(e = !1) {
      let {
        browserContext: t,
        ownerWindow: n,
        broadcastAccountId: r,
        initialFriend: i,
      } = this.props;
      this.Close();
      let a = e && i ? [i.accountid] : [];
      me(t, n || window, r, a);
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
      let a = V.UIStore.ShowAndOrActivateChatRoomGroup(n, e, !0);
      (i && V.UIStore.CloseTabByID(i),
        this.props.bIsNewSteamTVDialog || a.ShowBroadcast());
    }
    Close() {
      let { closeModal: e } = this.props;
      e && e();
    }
    render() {
      let { closeModal: e, initialFriend: t } = this.props,
        n = V.ChatStore.currentChatRoomGroups.filter((e) =>
          e.BCanIAssociateBroadcast(),
        ),
        r = t;
      return (0, U.jsx)(`div`, {
        className: `chatModalCover`,
        children: (0, U.jsx)(se, {
          onEscKeypress: e,
          children: (0, U.jsxs)(ae, {
            className: `watchPartyDialog`,
            children: [
              (0, U.jsxs)(b, {
                children: [
                  (0, U.jsx)(`div`, {
                    className: `watchPartyPrompt`,
                    children: l(`#Broadcast_WatchPrompt`),
                  }),
                  (0, U.jsxs)(le, {
                    children: [
                      !this.props.bIsNewSteamTVDialog &&
                        (0, U.jsx)(x, {
                          svgicon: h,
                          className: `watchHowButton`,
                          onClick: this.WatchAlone,
                          children: l(`#Broadcast_WatchAlone`),
                        }),
                      r &&
                        (0, U.jsxs)(x, {
                          className: `watchHowButton`,
                          onClick: () => this.CreateWatchParty(!0),
                          children: [
                            (0, U.jsx)(R, {
                              friend: r,
                              context: null,
                              bLarge: !1,
                            }),
                            te(
                              `#Broadcast_WatchWith`,
                              (0, U.jsxs)(`span`, {
                                className: `highlight`,
                                children: [` `, r.display_name],
                              }),
                            ),
                          ],
                        }),
                      n.length !== 0 &&
                        (0, U.jsxs)(H.Fragment, {
                          children: [
                            (0, U.jsx)(y, {
                              children: l(
                                `#Broadcast_WatchWithExistingWatchParty`,
                              ),
                            }),
                            n.map((e) =>
                              (0, U.jsx)(
                                pe,
                                {
                                  group: e,
                                  onClick: () => this.UpgradeExisting(e),
                                },
                                e.unique_id,
                              ),
                            ),
                          ],
                        }),
                      (0, U.jsx)(x, {
                        className: `watchHowButton newWatchGroup`,
                        svgicon: m,
                        onClick: () => this.CreateWatchParty(!1),
                        children: l(`#Broadcast_LinkBroadcastToGroup_New`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, U.jsx)(re, {}),
            ],
          }),
        }),
      });
    }
  };
(d([i], W.prototype, `WatchAlone`, null), d([i], W.prototype, `Close`, null));
function me(e, t, n, r) {
  ie(
    (0, U.jsx)(F, {
      browserContext: e,
      bHideChatNameEntry: !1,
      vecInvitePlayers: r,
      chatViewToReplace: void 0,
      creationOptions: { unBroadcastAccountId: n },
      strTitle: l(`#Broadcast_CreateWatchParty`),
    }),
    t,
    `CreateChatDialog`,
    {
      strTitle: l(`#Broadcast_CreateWatchParty`),
      popupWidth: 450,
      popupHeight: 600,
    },
    B(t),
  );
}
var he = e(fe()),
  ge = 2500,
  G = class {
    constructor() {
      n(this);
    }
    m_fnLaunchChat;
    m_iTimeoutLogin = void 0;
    m_eLogonState = 0;
    m_steamID = void 0;
    m_reactRoot;
    Init(e) {
      ((this.m_fnLaunchChat = e),
        (this.m_steamID = t.steamid),
        window.addEventListener(`message`, this.HandlePostMessage),
        (this.m_reactRoot = he.createRoot(
          document.getElementById(`friendslist-container`),
        )),
        this.m_reactRoot.render(H.createElement(K, { app: this })),
        (this.m_iTimeoutLogin = window.setTimeout(() => {
          this.m_eLogonState == 0 && (this.m_eLogonState = 1);
        }, ge)));
    }
    LaunchChat() {
      (this.m_reactRoot.unmount(),
        window.removeEventListener(`message`, this.HandlePostMessage),
        window.clearTimeout(this.m_iTimeoutLogin),
        N(t.steamid),
        this.m_fnLaunchChat());
    }
    GetLoginURL() {
      return `${o.STORE_BASE_URL}login/?steamtv`;
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
        e.origin != this.ExtractOrigin(o.STORE_BASE_URL) &&
        e.origin != this.ExtractOrigin(o.CHAT_BASE_URL)
      ) {
        console.warn(`Ignoring message from untrusted domain "${e.origin}"`);
        return;
      }
      let t = e.data;
      if (t) {
        if (t.msg == `OnLoginButtonClicked`)
          (console.log(`Login button clicked`), (window.location.href = Q()));
        else if (t.command == `LoginNeeded`) this.m_eLogonState = 2;
        else if (t.command == `LogonComplete`) {
          this.LaunchChat();
          return;
        }
      }
    }
  };
(d([a], G.prototype, `m_eLogonState`, void 0),
  d([a], G.prototype, `m_steamID`, void 0),
  d([r], G.prototype, `LaunchChat`, null),
  d([r.bound], G.prototype, `HandlePostMessage`, null));
var K = class extends H.Component {
  m_broadcastInfo = null;
  constructor(e) {
    (super(e),
      (this.m_broadcastInfo = w.StartInfo(this.props.app.GetSteamIDWatched())),
      (this.state = { bChatCollapsed: !1, bTheaterMode: !1 }));
  }
  componentWillUnmount() {
    this.m_broadcastInfo &&= (w.StopInfo(this.m_broadcastInfo), null);
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
      n = Y();
    return (0, U.jsxs)(ve, {
      children: [
        e.BReadyToRender() &&
          (0, U.jsxs)(`div`, {
            className:
              `StandalonePlayer` +
              (this.state.bTheaterMode ? ` TheaterMode` : ``),
            children: [
              (0, U.jsx)(A, {
                className: `FullpageBroadcastBackdrop`,
                src: t.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
              (0, U.jsxs)(`div`, {
                className: `BroadcastTab`,
                children: [
                  (0, U.jsxs)(`div`, {
                    className: `StandalonePlayerHeader`,
                    children: [
                      (0, U.jsx)(`div`, {
                        className: `STV_Logo`,
                        children: (0, U.jsx)(v, {}),
                      }),
                      (0, U.jsxs)(`div`, {
                        className:
                          `BroadcastTab_HeaderRow` +
                          (this.state.bChatCollapsed ? ` ChatCollapsed` : ``),
                        children: [
                          (0, U.jsx)(q, {
                            onClick: () => (window.location.href = Q()),
                          }),
                          (0, U.jsx)(J, {
                            onClick: this.ToggleChat,
                            hideIcon: this.state.bChatCollapsed,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, U.jsx)(Z, {
                    steamID: e.GetSteamIDWatched(),
                    watchLocation: n,
                    bHideChat: this.state.bChatCollapsed,
                    onTheaterMode: this.ToggleTheaterMode,
                  }),
                ],
              }),
            ],
          }),
        (0, U.jsx)(ye, { app: e }),
      ],
    });
  }
};
(d([i], K.prototype, `ToggleChat`, null),
  d([i], K.prototype, `ToggleTheaterMode`, null),
  (K = d([g], K)));
function _e() {
  let e = ne(`loyalty_webapi_token`, `application_config`);
  return k(new O(o.WEBAPI_BASE_URL, e));
}
function ve(e) {
  let { children: t } = e,
    n = H.useCallback(() => V?.CMInterface, []),
    r = f(H.useCallback(() => new T(), [])),
    i = f(_e);
  return (0, U.jsx)(de, {
    children: (0, U.jsx)(ee, {
      children: (0, U.jsx)(oe, {
        children: s.logged_in
          ? (0, U.jsx)(S, {
              useActiveCMInterface: n,
              useStorage: r,
              children: t,
            })
          : (0, U.jsx)(S, {
              useActiveSteamInterface: i,
              useStorage: r,
              children: t,
            }),
      }),
    }),
  });
}
var ye = g(({ app: e }) =>
  e.BIsPerformingLogonCheck()
    ? (0, U.jsx)(`div`, {
        children: (0, U.jsx)(`iframe`, {
          style: { display: `none` },
          src: e.GetLoginURL(),
        }),
      })
    : null,
);
function q(e) {
  return (0, U.jsxs)(`div`, {
    className: `BroadcastButton WatchWithFriends`,
    onClick: e.onClick,
    children: [(0, U.jsx)(p, {}), l(`#Broadcast_WatchWithFriends`)],
  });
}
function J(e) {
  return (0, U.jsx)(`div`, {
    className: `ToggleBroadcastChat`,
    title: l(`#Broadcast_ToggleChat`),
    onClick: e.onClick,
    children: (0, U.jsx)(_, { showChat: e.hideIcon }),
  });
}
function Y() {
  return P.STEAM_TV ? 1 : 3;
}
var X = class extends H.Component {
  m_broadcastInfo = null;
  constructor(e) {
    super(e);
    let t = this.props.broadcastView.GetSteamID().ConvertTo64BitString();
    ((this.m_broadcastInfo = w.StartInfo(t)),
      (this.state = { bChatCollapsed: !1 }));
  }
  componentWillUnmount() {
    this.m_broadcastInfo &&= (w.StopInfo(this.m_broadcastInfo), null);
  }
  OnWatchWithFriends() {
    this.props.broadcastView.ShowWatchPromptDialog();
  }
  ToggleChat() {
    this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
  }
  ToggleTheaterMode() {
    V.UIStore.SetTheaterMode(!V.UIStore.GetTheaterMode());
  }
  render() {
    let { broadcastView: e, popup: t, style: n } = this.props,
      r = e.GetSteamID().ConvertTo64BitString(),
      i = Y(),
      a = e.m_bShowWatchPromptDialog
        ? (0, U.jsx)(W, {
            closeModal: () => e.HideWatchPromptDialog(),
            broadcastAccountId: e.GetSteamID().GetAccountID(),
            broadcastTabId: e.GetUniqueID(),
            initialFriend: e.m_watchPromptInitialFriend,
            browserContext: ce,
            ownerWindow: t,
          })
        : null;
    return (0, U.jsxs)(`div`, {
      className: `BroadcastTab`,
      style: n,
      children: [
        (0, U.jsx)(A, {
          className: `FullpageBroadcastBackdrop`,
          src: this.m_broadcastInfo.m_strThumbnailUrl,
          draggable: !1,
          duration: 2500,
        }),
        (0, U.jsxs)(`div`, {
          className: `BroadcastTab_OverBackground`,
          children: [
            (0, U.jsx)(`div`, {
              className: `BroadcastTabHeaderContainer`,
              children: (0, U.jsxs)(`div`, {
                className:
                  `BroadcastTab_HeaderRow` +
                  (this.state.bChatCollapsed ? ` ChatCollapsed` : ``),
                children: [
                  (0, U.jsx)(q, { onClick: this.OnWatchWithFriends }),
                  (0, U.jsx)(J, {
                    onClick: this.ToggleChat,
                    hideIcon: this.state.bChatCollapsed,
                  }),
                ],
              }),
            }),
            (0, U.jsx)(Z, {
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
(d([i], X.prototype, `OnWatchWithFriends`, null),
  d([i], X.prototype, `ToggleChat`, null),
  d([i], X.prototype, `ToggleTheaterMode`, null),
  (X = d([g], X)));
var Z = class extends H.Component {
  m_strLocalSteamID = ``;
  m_refBroadcastContainer = H.createRef();
  m_elMainContent;
  constructor(e) {
    (super(e), n(this), (this.state = { info: null }));
  }
  componentDidMount() {
    C.stream[`76561198208088121`] && o.LANGUAGE === `chinese`
      ? this.OnLocalStreamChange(`76561198208088121`)
      : C.stream[`76561198207552741`] &&
        o.LANGUAGE === `russian` &&
        this.OnLocalStreamChange(`76561198207552741`);
  }
  static getDerivedStateFromProps(e, t) {
    return !t.info || t.info.m_steamIDBroadcast !== e.steamID
      ? (t.info && w.StopInfo(t.info), { info: w.StartInfo(e.steamID) })
      : null;
  }
  componentWillUnmount() {
    this.state.info && w.StopInfo(this.state.info);
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
    L &&
      ((t = L.UIDisplayPrefs.nWatchPartyBroadcastHeightPercentage),
      (n = L.UIDisplayPrefs.nWatchPartyBroadcastWidthPercentage));
    let r = {};
    if (e) {
      let e = t || 66;
      if (((r.height = `${e}%`), this.m_elMainContent)) {
        let { clientWidth: t, clientHeight: n } = this.m_elMainContent,
          i = (9 / 16) * t + 50;
        r.height = `${c(e, 1, (i / n) * 100)}%`;
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
      o = c(((i - r) / a) * 100, 1, 100);
    L.SetUIDisplayPref(`nWatchPartyBroadcastWidthPercentage`, o);
  }
  UnregisterDragEvents(e) {
    (e.view.removeEventListener(`mousemove`, this.HandleMouseMove),
      e.view.removeEventListener(`mouseup`, this.UnregisterDragEvents),
      this.setState({ bDraggingChatGrabber: !1 }));
  }
  render() {
    let { steamID: e, children: t } = this.props,
      n = this.m_strLocalSteamID || e,
      r = this.state.info.m_bIsOnline,
      i = null,
      a = this.CalculateBroadcastSectionStyles(!1);
    ((a.flexGrow = this.props.bHideChat ? 1 : null),
      C.bValid && (i = (0, U.jsx)(be, { info: C })));
    let c = (0, U.jsx)(`div`, {
        className: `LoginDiv`,
        children: (0, U.jsx)(`a`, {
          className: E,
          href: `${o.STORE_BASE_URL}login?steamtv=1&allow_password=1`,
          children: l(`#BroadcastChat_Login`),
        }),
      }),
      u = w.GetBroadcast(n) ? w.GetBroadcast(n).m_ulBroadcastID : `0`;
    return (0, U.jsxs)(`div`, {
      className: `BroadcastContainer`,
      children: [
        (0, U.jsxs)(`div`, {
          className: `BroadcastContainerSection`,
          ref: this.m_refBroadcastContainer,
          style: a,
          children: [
            (0, U.jsxs)(`div`, {
              className: `BroadcastContainerSectionVideoContainer`,
              children: [
                r &&
                  (0, U.jsx)(
                    j,
                    {
                      steamIDBroadcast: n,
                      watchLocation: this.props.watchLocation,
                      onTheaterMode: this.props.onTheaterMode,
                    },
                    n,
                  ),
                !r && i,
                (0, U.jsx)(`div`, { className: `videoContainerSizer` }),
              ],
            }),
            t,
            (0, U.jsx)(`div`, {
              className: `BroadcastDetailsSection`,
              children: (0, U.jsx)(M, {
                steamID: n,
                onLocalStreamChange: this.OnLocalStreamChange,
                bVerticalBroadcastChat: !0,
              }),
            }),
          ],
        }),
        !this.props.bHideChat &&
          (0, U.jsx)(`div`, {
            className: `BroadcastChatDivider horizontal`,
            onMouseDown: this.OnGrabberMouseDown,
          }),
        (0, U.jsxs)(`div`, {
          className: `BroadcastChatDiv`,
          style: {
            display: this.props.bHideChat ? `none` : `flex`,
            flexDirection: `column`,
            width: `100%`,
            minWidth: `300px`,
          },
          children: [
            (0, U.jsx)(D, {
              emoticonStore: V ? V.ChatStore.EmoticonStore : null,
              broadcastID: u,
              steamID: n,
              watchLocation: this.props.watchLocation,
              hidden: this.props.bHideChat,
            }),
            s && s.logged_in ? null : c,
          ],
        }),
      ],
    });
  }
};
(d([a], Z.prototype, `m_strLocalSteamID`, void 0),
  d([i], Z.prototype, `OnLocalStreamChange`, null),
  d([i], Z.prototype, `SetMainContentRef`, null),
  d([i], Z.prototype, `OnGrabberMouseDown`, null),
  d([i], Z.prototype, `HandleMouseMove`, null),
  d([i], Z.prototype, `UnregisterDragEvents`, null),
  (Z = d([g], Z)));
function be(e) {
  let t = `url( "${o.CHAT_BASE_URL + e.info.offlineImage}" )`;
  return (0, U.jsx)(`div`, {
    style: { backgroundImage: t },
    className: `BroadcastOffline`,
  });
}
function Q() {
  return `${o.STORE_BASE_URL}login?steamtv=1`;
}
var $ = class extends H.Component {
  render() {
    let e = this.props.broadcastView;
    if (!e || !(e instanceof I)) return null;
    let t = {};
    return (
      this.props.isActive || (t.display = `none`),
      (0, U.jsx)(X, { style: t, broadcastView: e, popup: this.props.popup })
    );
  }
};
$ = d([g], $);
var xe = $;
export { xe as default };
