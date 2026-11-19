import { _ } from "./chunk~f025431ab0.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./chunk~d3515eca4e.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./chunk~e464778a03.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~8ef2f32a67.js";
import { _, _ } from "./chunk~eee3bbd4cd.js";
import { _ } from "./chunk~37ff8cec8b.js";
import { _, _, _ } from "./chunk~0ef0cd2c00.js";
import { _, _, _, _, _ } from "./chunk~10c934b72c.js";
var _ = _(_()),
  _ = _(),
  _ = ({ group: _, onClick: _ }) => {
    let _ = _.watching_broadcast_steamid;
    return (0, _.jsx)(`button`, {
      className: `ChatRoomListGroupItem NoChannels WatchPartyGroup DialogButton watchHowButton`,
      onClick: _,
      children: (0, _.jsxs)(`div`, {
        className: `ChatRoomListGroupItem_header`,
        children: [
          (0, _.jsx)(_, {
            group: _,
            small: !0,
          }),
          (0, _.jsxs)(`div`, {
            className: `groupNameStatusContainer`,
            children: [
              (0, _.jsx)(`div`, {
                className: `chatRoomName`,
                children: _.name,
              }),
              _ &&
                (0, _.jsx)(`div`, {
                  className: `chatRoomDetails`,
                  children: _(`#Broadcast_WatchParty_Viewers_NoneActive`),
                }),
            ],
          }),
        ],
      }),
    });
  },
  _ = class extends _.Component {
    CreateWatchParty(_ = !1) {
      let {
        browserContext: _,
        ownerWindow: _,
        broadcastAccountId: _,
        initialFriend: _,
      } = this.props;
      this.Close();
      let _ = _ && _ ? [_.accountid] : [];
      _(_, _ || window, _, _);
    }
    WatchAlone() {
      this.Close();
    }
    UpgradeExisting(_) {
      let {
        broadcastAccountId: _,
        browserContext: _,
        broadcastChannelID: _,
        broadcastTabId: _,
      } = this.props;
      (this.Close(),
        _
          ? _.SetChatRoomGroupWatchingBroadcast(void 0, _)
          : _.SetChatRoomGroupWatchingBroadcast(_));
      let _ = _.UIStore.ShowAndOrActivateChatRoomGroup(_, _, !0);
      (_ && _.UIStore.CloseTabByID(_),
        this.props.bIsNewSteamTVDialog || _.ShowBroadcast());
    }
    Close() {
      let { closeModal: _ } = this.props;
      _ && _();
    }
    render() {
      let { closeModal: _, initialFriend: _ } = this.props,
        _ = _.ChatStore.currentChatRoomGroups.filter((_) =>
          _.BCanIAssociateBroadcast(),
        ),
        _ = _;
      return (0, _.jsx)(`div`, {
        className: `chatModalCover`,
        children: (0, _.jsx)(_, {
          onEscKeypress: _,
          children: (0, _.jsxs)(_, {
            className: `watchPartyDialog`,
            children: [
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(`div`, {
                    className: `watchPartyPrompt`,
                    children: _(`#Broadcast_WatchPrompt`),
                  }),
                  (0, _.jsxs)(_, {
                    children: [
                      !this.props.bIsNewSteamTVDialog &&
                        (0, _.jsx)(_, {
                          svgicon: _,
                          className: `watchHowButton`,
                          onClick: this.WatchAlone,
                          children: _(`#Broadcast_WatchAlone`),
                        }),
                      _ &&
                        (0, _.jsxs)(_, {
                          className: `watchHowButton`,
                          onClick: () => this.CreateWatchParty(!0),
                          children: [
                            (0, _.jsx)(_, {
                              friend: _,
                              context: null,
                              bLarge: !1,
                            }),
                            _(
                              `#Broadcast_WatchWith`,
                              (0, _.jsxs)(`span`, {
                                className: `highlight`,
                                children: [` `, _.display_name],
                              }),
                            ),
                          ],
                        }),
                      _.length !== 0 &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(_, {
                              children: _(
                                `#Broadcast_WatchWithExistingWatchParty`,
                              ),
                            }),
                            _.map((_) =>
                              (0, _.jsx)(
                                _,
                                {
                                  group: _,
                                  onClick: () => this.UpgradeExisting(_),
                                },
                                _.unique_id,
                              ),
                            ),
                          ],
                        }),
                      (0, _.jsx)(_, {
                        className: `watchHowButton newWatchGroup`,
                        svgicon: _,
                        onClick: () => this.CreateWatchParty(!1),
                        children: _(`#Broadcast_LinkBroadcastToGroup_New`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(_, {}),
            ],
          }),
        }),
      });
    }
  };
(_([_], _.prototype, `WatchAlone`, null), _([_], _.prototype, `Close`, null));
function _(_, _, _, _) {
  _(
    (0, _.jsx)(_, {
      browserContext: _,
      bHideChatNameEntry: !1,
      vecInvitePlayers: _,
      chatViewToReplace: void 0,
      creationOptions: {
        unBroadcastAccountId: _,
      },
      strTitle: _(`#Broadcast_CreateWatchParty`),
    }),
    _,
    `CreateChatDialog`,
    {
      strTitle: _(`#Broadcast_CreateWatchParty`),
      popupWidth: 450,
      popupHeight: 600,
    },
    _(_),
  );
}
var _ = _(_()),
  _ = 2500,
  _ = class {
    constructor() {
      _(this);
    }
    m_fnLaunchChat;
    m_iTimeoutLogin = void 0;
    m_eLogonState = 0;
    m_steamID = void 0;
    m_reactRoot;
    Init(_) {
      ((this.m_fnLaunchChat = _),
        (this.m_steamID = _.steamid),
        window.addEventListener(`message`, this.HandlePostMessage),
        (this.m_reactRoot = _.createRoot(
          document.getElementById(`friendslist-container`),
        )),
        this.m_reactRoot.render(
          _.createElement(_, {
            app: this,
          }),
        ),
        (this.m_iTimeoutLogin = window.setTimeout(() => {
          this.m_eLogonState == 0 && (this.m_eLogonState = 1);
        }, _)));
    }
    LaunchChat() {
      (this.m_reactRoot.unmount(),
        window.removeEventListener(`message`, this.HandlePostMessage),
        window.clearTimeout(this.m_iTimeoutLogin),
        _(_.steamid),
        this.m_fnLaunchChat());
    }
    GetLoginURL() {
      return `${_.STORE_BASE_URL}login/?steamtv`;
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
    ExtractOrigin(_) {
      return _.replace(/^(https?:\/\/[^/]*).*$/, `$1`);
    }
    HandlePostMessage(_) {
      if (
        _.origin != this.ExtractOrigin(_.STORE_BASE_URL) &&
        _.origin != this.ExtractOrigin(_.CHAT_BASE_URL)
      ) {
        console.warn(`Ignoring message from untrusted domain "${_.origin}"`);
        return;
      }
      let _ = _.data;
      if (_) {
        if (_.msg == `OnLoginButtonClicked`)
          (console.log(`Login button clicked`), (window.location.href = _()));
        else if (_.command == `LoginNeeded`) this.m_eLogonState = 2;
        else if (_.command == `LogonComplete`) {
          this.LaunchChat();
          return;
        }
      }
    }
  };
(_([_], _.prototype, `m_eLogonState`, void 0),
  _([_], _.prototype, `m_steamID`, void 0),
  _([_], _.prototype, `LaunchChat`, null),
  _([_.bound], _.prototype, `HandlePostMessage`, null));
var _ = class extends _.Component {
  m_broadcastInfo = null;
  constructor(_) {
    (super(_),
      (this.m_broadcastInfo = _.StartInfo(this.props.app.GetSteamIDWatched())),
      (this.state = {
        bChatCollapsed: !1,
        bTheaterMode: !1,
      }));
  }
  componentWillUnmount() {
    this.m_broadcastInfo &&= (_.StopInfo(this.m_broadcastInfo), null);
  }
  ToggleChat() {
    this.setState({
      bChatCollapsed: !this.state.bChatCollapsed,
    });
  }
  ToggleTheaterMode() {
    this.setState({
      bTheaterMode: !this.state.bTheaterMode,
    });
  }
  render() {
    let _ = this.props.app,
      _ = this.m_broadcastInfo,
      _ = _();
    return (0, _.jsxs)(_, {
      children: [
        _.BReadyToRender() &&
          (0, _.jsxs)(`div`, {
            className:
              `StandalonePlayer` +
              (this.state.bTheaterMode ? ` TheaterMode` : ``),
            children: [
              (0, _.jsx)(_, {
                className: `FullpageBroadcastBackdrop`,
                src: _.m_strThumbnailUrl,
                draggable: !1,
                duration: 2500,
              }),
              (0, _.jsxs)(`div`, {
                className: `BroadcastTab`,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: `StandalonePlayerHeader`,
                    children: [
                      (0, _.jsx)(`div`, {
                        className: `STV_Logo`,
                        children: (0, _.jsx)(_, {}),
                      }),
                      (0, _.jsxs)(`div`, {
                        className:
                          `BroadcastTab_HeaderRow` +
                          (this.state.bChatCollapsed ? ` ChatCollapsed` : ``),
                        children: [
                          (0, _.jsx)(_, {
                            onClick: () => (window.location.href = _()),
                          }),
                          (0, _.jsx)(_, {
                            onClick: this.ToggleChat,
                            hideIcon: this.state.bChatCollapsed,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    steamID: _.GetSteamIDWatched(),
                    watchLocation: _,
                    bHideChat: this.state.bChatCollapsed,
                    onTheaterMode: this.ToggleTheaterMode,
                  }),
                ],
              }),
            ],
          }),
        (0, _.jsx)(_, {
          app: _,
        }),
      ],
    });
  }
};
(_([_], _.prototype, `ToggleChat`, null),
  _([_], _.prototype, `ToggleTheaterMode`, null),
  (_ = _([_], _)));
function _() {
  let _ = _(`loyalty_webapi_token`, `application_config`);
  return _(new _(_.WEBAPI_BASE_URL, _));
}
function _(_) {
  let { children: _ } = _,
    _ = _.useCallback(() => _?.CMInterface, []),
    _ = _(_.useCallback(() => new _(), [])),
    _ = _(_);
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        children: _.logged_in
          ? (0, _.jsx)(_, {
              useActiveCMInterface: _,
              useStorage: _,
              children: _,
            })
          : (0, _.jsx)(_, {
              useActiveSteamInterface: _,
              useStorage: _,
              children: _,
            }),
      }),
    }),
  });
}
var _ = _(({ app: _ }) =>
  _.BIsPerformingLogonCheck()
    ? (0, _.jsx)(`div`, {
        children: (0, _.jsx)(`iframe`, {
          style: {
            display: `none`,
          },
          src: _.GetLoginURL(),
        }),
      })
    : null,
);
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: `BroadcastButton WatchWithFriends`,
    onClick: _.onClick,
    children: [(0, _.jsx)(_, {}), _(`#Broadcast_WatchWithFriends`)],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: `ToggleBroadcastChat`,
    title: _(`#Broadcast_ToggleChat`),
    onClick: _.onClick,
    children: (0, _.jsx)(_, {
      showChat: _.hideIcon,
    }),
  });
}
function _() {
  return _.STEAM_TV ? 1 : 3;
}
var _ = class extends _.Component {
  m_broadcastInfo = null;
  constructor(_) {
    super(_);
    let _ = this.props.broadcastView.GetSteamID().ConvertTo64BitString();
    ((this.m_broadcastInfo = _.StartInfo(_)),
      (this.state = {
        bChatCollapsed: !1,
      }));
  }
  componentWillUnmount() {
    this.m_broadcastInfo &&= (_.StopInfo(this.m_broadcastInfo), null);
  }
  OnWatchWithFriends() {
    this.props.broadcastView.ShowWatchPromptDialog();
  }
  ToggleChat() {
    this.setState({
      bChatCollapsed: !this.state.bChatCollapsed,
    });
  }
  ToggleTheaterMode() {
    _.UIStore.SetTheaterMode(!_.UIStore.GetTheaterMode());
  }
  render() {
    let { broadcastView: _, popup: _, style: _ } = this.props,
      _ = _.GetSteamID().ConvertTo64BitString(),
      _ = _(),
      _ = _.m_bShowWatchPromptDialog
        ? (0, _.jsx)(_, {
            closeModal: () => _.HideWatchPromptDialog(),
            broadcastAccountId: _.GetSteamID().GetAccountID(),
            broadcastTabId: _.GetUniqueID(),
            initialFriend: _.m_watchPromptInitialFriend,
            browserContext: _,
            ownerWindow: _,
          })
        : null;
    return (0, _.jsxs)(`div`, {
      className: `BroadcastTab`,
      style: _,
      children: [
        (0, _.jsx)(_, {
          className: `FullpageBroadcastBackdrop`,
          src: this.m_broadcastInfo.m_strThumbnailUrl,
          draggable: !1,
          duration: 2500,
        }),
        (0, _.jsxs)(`div`, {
          className: `BroadcastTab_OverBackground`,
          children: [
            (0, _.jsx)(`div`, {
              className: `BroadcastTabHeaderContainer`,
              children: (0, _.jsxs)(`div`, {
                className:
                  `BroadcastTab_HeaderRow` +
                  (this.state.bChatCollapsed ? ` ChatCollapsed` : ``),
                children: [
                  (0, _.jsx)(_, {
                    onClick: this.OnWatchWithFriends,
                  }),
                  (0, _.jsx)(_, {
                    onClick: this.ToggleChat,
                    hideIcon: this.state.bChatCollapsed,
                  }),
                ],
              }),
            }),
            (0, _.jsx)(_, {
              steamID: _,
              watchLocation: _,
              bHideChat: this.state.bChatCollapsed,
              onTheaterMode: this.ToggleTheaterMode,
              children: _,
            }),
          ],
        }),
      ],
    });
  }
};
(_([_], _.prototype, `OnWatchWithFriends`, null),
  _([_], _.prototype, `ToggleChat`, null),
  _([_], _.prototype, `ToggleTheaterMode`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  m_strLocalSteamID = ``;
  m_refBroadcastContainer = _.createRef();
  m_elMainContent;
  constructor(_) {
    (super(_),
      _(this),
      (this.state = {
        info: null,
      }));
  }
  componentDidMount() {
    _.stream[`76561198208088121`] && _.LANGUAGE === `chinese`
      ? this.OnLocalStreamChange(`76561198208088121`)
      : _.stream[`76561198207552741`] &&
        _.LANGUAGE === `russian` &&
        this.OnLocalStreamChange(`76561198207552741`);
  }
  static getDerivedStateFromProps(_, _) {
    return !_.info || _.info.m_steamIDBroadcast !== _.steamID
      ? (_.info && _.StopInfo(_.info),
        {
          info: _.StartInfo(_.steamID),
        })
      : null;
  }
  componentWillUnmount() {
    this.state.info && _.StopInfo(this.state.info);
  }
  OnLocalStreamChange(_) {
    this.m_strLocalSteamID = _;
  }
  SetMainContentRef(_) {
    this.m_elMainContent = _;
  }
  CalculateBroadcastSectionStyles(_) {
    if (this.props.bHideChat)
      return {
        width: `100%`,
        height: `100%`,
      };
    let _, _;
    _ &&
      ((_ = _.UIDisplayPrefs.nWatchPartyBroadcastHeightPercentage),
      (_ = _.UIDisplayPrefs.nWatchPartyBroadcastWidthPercentage));
    let _ = {};
    if (_) {
      let _ = _ || 66;
      if (((_.height = `${_}%`), this.m_elMainContent)) {
        let { clientWidth: _, clientHeight: _ } = this.m_elMainContent,
          _ = (9 / 16) * _ + 50;
        _.height = `${_(_, 1, (_ / _) * 100)}%`;
      }
    } else
      ((_.width = _ ? `${_}%` : `66%`),
        (_.minWidth = _ ? `${_}%` : `66%`),
        (_.maxWidth = `calc( 100% - 316px )`),
        (_.overflowY = `auto`));
    return _;
  }
  OnGrabberMouseDown(_) {
    let _ = _.currentTarget.ownerDocument.defaultView;
    (_.addEventListener(`mousemove`, this.HandleMouseMove),
      _.addEventListener(`mouseup`, this.UnregisterDragEvents),
      this.setState({
        bDraggingChatGrabber: !0,
      }));
  }
  HandleMouseMove(_) {
    (_.preventDefault(), _.stopPropagation());
    let _ = this.m_refBroadcastContainer.current.getBoundingClientRect(),
      _ =
        this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect(),
      _ = _.left,
      _ = _.clientX,
      _ = _.width,
      _ = _(((_ - _) / _) * 100, 1, 100);
    _.SetUIDisplayPref(`nWatchPartyBroadcastWidthPercentage`, _);
  }
  UnregisterDragEvents(_) {
    (_.view.removeEventListener(`mousemove`, this.HandleMouseMove),
      _.view.removeEventListener(`mouseup`, this.UnregisterDragEvents),
      this.setState({
        bDraggingChatGrabber: !1,
      }));
  }
  render() {
    let { steamID: _, children: _ } = this.props,
      _ = this.m_strLocalSteamID || _,
      _ = this.state.info.m_bIsOnline,
      _ = null,
      _ = this.CalculateBroadcastSectionStyles(!1);
    ((_.flexGrow = this.props.bHideChat ? 1 : null),
      _.bValid &&
        (_ = (0, _.jsx)(_, {
          info: _,
        })));
    let _ = (0, _.jsx)(`div`, {
        className: `LoginDiv`,
        children: (0, _.jsx)(`a`, {
          className: _,
          href: `${_.STORE_BASE_URL}login?steamtv=1&allow_password=1`,
          children: _(`#BroadcastChat_Login`),
        }),
      }),
      _ = _.GetBroadcast(_) ? _.GetBroadcast(_).m_ulBroadcastID : `0`;
    return (0, _.jsxs)(`div`, {
      className: `BroadcastContainer`,
      children: [
        (0, _.jsxs)(`div`, {
          className: `BroadcastContainerSection`,
          ref: this.m_refBroadcastContainer,
          style: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: `BroadcastContainerSectionVideoContainer`,
              children: [
                _ &&
                  (0, _.jsx)(
                    _,
                    {
                      steamIDBroadcast: _,
                      watchLocation: this.props.watchLocation,
                      onTheaterMode: this.props.onTheaterMode,
                    },
                    _,
                  ),
                !_ && _,
                (0, _.jsx)(`div`, {
                  className: `videoContainerSizer`,
                }),
              ],
            }),
            _,
            (0, _.jsx)(`div`, {
              className: `BroadcastDetailsSection`,
              children: (0, _.jsx)(_, {
                steamID: _,
                onLocalStreamChange: this.OnLocalStreamChange,
                bVerticalBroadcastChat: !0,
              }),
            }),
          ],
        }),
        !this.props.bHideChat &&
          (0, _.jsx)(`div`, {
            className: `BroadcastChatDivider horizontal`,
            onMouseDown: this.OnGrabberMouseDown,
          }),
        (0, _.jsxs)(`div`, {
          className: `BroadcastChatDiv`,
          style: {
            display: this.props.bHideChat ? `none` : `flex`,
            flexDirection: `column`,
            width: `100%`,
            minWidth: `300px`,
          },
          children: [
            (0, _.jsx)(_, {
              emoticonStore: _ ? _.ChatStore.EmoticonStore : null,
              broadcastID: _,
              steamID: _,
              watchLocation: this.props.watchLocation,
              hidden: this.props.bHideChat,
            }),
            _ && _.logged_in ? null : _,
          ],
        }),
      ],
    });
  }
};
(_([_], _.prototype, `m_strLocalSteamID`, void 0),
  _([_], _.prototype, `OnLocalStreamChange`, null),
  _([_], _.prototype, `SetMainContentRef`, null),
  _([_], _.prototype, `OnGrabberMouseDown`, null),
  _([_], _.prototype, `HandleMouseMove`, null),
  _([_], _.prototype, `UnregisterDragEvents`, null),
  (_ = _([_], _)));
function _(_) {
  let _ = `url( "${_.CHAT_BASE_URL + _.info.offlineImage}" )`;
  return (0, _.jsx)(`div`, {
    style: {
      backgroundImage: _,
    },
    className: `BroadcastOffline`,
  });
}
function _() {
  return `${_.STORE_BASE_URL}login?steamtv=1`;
}
export { _ as BroadcastTab, _ as CBroadcastApp };
