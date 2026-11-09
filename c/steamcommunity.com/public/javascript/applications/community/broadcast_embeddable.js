import { _, _ } from "./rolldown-runtime.js";
import { _, _, _, _, _ } from "./libraries.js";
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
  _,
} from "./vodquery.js";
import { _ } from "./clanstore.js";
import { _ } from "./broadcastwatchstore.js";
import { _ } from "./broadcastplayer.js";
import { _ } from "./throbber.js";
import { _ } from "./emoticonbutton.js";
import { _ } from "./storeassets.js";
import { _ } from "./numberformats.js";
import { _ } from "./storeitemhooks.js";
import "./icn-copylink.js";
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
} from "./main.js";
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
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./broadcast_embeddable.module.js";
import { _, _, _, _, _, _ } from "./broadcast_embeddable2.js";
import { _, _ } from "./twitter_large.js";
import { _ } from "./reddit_large.js";
var _ = 1004,
  _ = 1005,
  _ = 1006,
  _ = _(_()),
  _ = _(_()),
  _ = `_7FIE12jcFio-`,
  _ = `l3NO7dsjryo-`,
  _ = `gxhjub7-6JQ-`,
  _ = _(),
  _ = _((_) => {
    let { appid: _ } = _,
      _ = _(),
      _ = (0, _.useRef)({
        include_assets: !0,
        include_release: !0,
      }),
      _ = _(_),
      { data: _ } = _(_),
      { data: _ } = _(_),
      { data: _ } = _(_),
      [_, _] = _(_, _.current),
      _ = _(_, `StoreSaleWidgetContainer_mini`),
      _ = _,
      _ = _;
    if (_ == null)
      return (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          size: `medium`,
        }),
      });
    if (_ == null || !_.name)
      return (0, _.jsx)(`div`, {
        className: void 0,
      });
    let _ = _.type != 8,
      _ = _(_(_), _);
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`a`, {
          href: _,
          target: _.IN_CLIENT ? void 0 : `_blank`,
          children: (0, _.jsx)(_, {
            _: _,
            children: (0, _.jsx)(`div`, {
              className: _,
              children:
                _ &&
                (0, _.jsx)(`img`, {
                  className: _,
                  src: _(_, `small_capsule`),
                  alt: _.name,
                }),
            }),
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`a`, {
              href: _,
              target: _.IN_CLIENT ? void 0 : `_blank`,
              children: (0, _.jsx)(_, {
                _: _,
                children: (0, _.jsx)(`div`, {
                  className: _(_, `StoreSaleWidgetTitle`),
                  children: _.name,
                }),
              }),
            }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `A8oyzoRvWQ8-`,
                children: _(_),
              }),
            !!_ &&
              (0, _.jsx)(_, {
                _: _,
                bShowDemoButton: !0,
              }),
          ],
        }),
      ],
    });
  });
function _() {
  let _ = window.GetUsabilityTracker;
  if (_) return _();
}
var _ = _((_) => {
  let { event: _ } = _,
    _ = _.clanSteamID.GetAccountID(),
    _ = !_ || !_.jsondata || !_.jsondata.broadcast_item_drops_enabled,
    _ = (0, _.useRef)(null),
    [_, _] = (0, _.useState)(_ ? _.GetCreatorHome(_.clanSteamID) : void 0);
  if (
    ((0, _.useEffect)(() => {
      let _ = _.default.CancelToken.source();
      return (
        (_.current = _.cancel),
        (async () => {
          let _ = _.InitFromClanID(_, _.EUNIVERSE),
            _ = await _.LoadCreatorHome(_, !1, _);
          _.token.reason || _(_);
        })(),
        () => {
          _.current && _.current(`BroadcastDropsDisplay: unmounting`);
        }
      );
    }, [_]),
    _ || !_ || !_.BIsLoaded())
  )
    return null;
  let _ =
      _.COMMUNITY_BASE_URL +
      `gid/` +
      _.jsondata.broadcast_item_drops_details_clan_accountid +
      `/partnerevents/view/` +
      _.jsondata.broadcast_item_drops_details_event_gid,
    _ = _.jsondata.broadcast_item_drops_min_watch_time_minutes ?? 0;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      children: [
        _(
          _.GetName().length > 0
            ? _ % 60 == 0
              ? `#SalePage_WatchForDrop_Hours_CreatorNamed`
              : `#SalePage_WatchForDrop_Minutes_CreatorNamed`
            : _ % 60 == 0
              ? `#SalePage_WatchForDrop_Hours_Developer`
              : `#SalePage_WatchForDrop_Minutes_Developer`,
          _ % 60 == 0 ? _ / 60 : _,
          _.GetName(),
        ),
        !!_.jsondata.broadcast_item_drops_details_clan_accountid &&
          (0, _.jsx)(`a`, {
            href: _,
            target: _.IN_CLIENT ? `` : `_blank`,
            children: _(`#SalePage_WatchForDrop_LearnMore`),
          }),
      ],
    }),
  });
});
function _(_) {
  let { steamid: _, closeModal: _ } = _;
  return (0, _.jsxs)(_, {
    strDescription: ``,
    strTitle: _(`#Button_Share`),
    onCancel: _,
    onOK: _,
    bAlertDialog: !0,
    modalClassName: `EventDisplay_Share_Dialog`,
    children: [
      (0, _.jsx)(_, {
        steamid: _,
      }),
      (0, _.jsx)(_, {
        steamid: _,
      }),
    ],
  });
}
function _(_) {
  let { steamid: _ } = _,
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _(`#EventDisplay_Share_OnFaceBook`),
        children: (0, _.jsx)(_, {
          href: _.strFacebookUrl,
          className: _,
          children: (0, _.jsx)(`img`, {
            className: _(_),
            src: _,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        toolTipContent: _(`#EventDisplay_Share_OnTwitter`),
        children: (0, _.jsx)(_, {
          href: _.strTwitterUrl,
          className: _,
          children: (0, _.jsx)(`img`, {
            className: _(_),
            src: _,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        toolTipContent: _(`#EventDisplay_Share_OnReddit`),
        children: (0, _.jsx)(_, {
          href: _.strRedditUrl,
          className: _,
          children: (0, _.jsx)(`img`, {
            className: _(_),
            src: _,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { steamid: _ } = _,
    _ = _.createRef(),
    [_, _] = _.useState(``),
    _ = _.createRef(),
    _ = _.useCallback(
      (_) => {
        _.current &&
          _.current.ownerDocument.defaultView?.navigator.clipboard
            .writeText(_.current.value)
            .then((_) => {
              _(_(`#EventDisplay_Share_CopiedToClipboard`));
            })
            .catch((_) => {
              (_(_(`#EventDisplay_Share_FailedToCopyToClipboard`)),
                console.error(`Failed to copy link to clipboard:`, _));
            });
      },
      [_],
    ),
    _ = _.COMMUNITY_BASE_URL + `broadcast/watch/` + _;
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        onClick: _,
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: _(`#EventDisplay_Share_Link`),
          }),
          (0, _.jsx)(`textarea`, {
            className: _,
            ref: _,
            value: _,
            readOnly: !0,
          }),
          !!document.queryCommandSupported(`copy`) &&
            (0, _.jsx)(_, {
              toolTipContent: _(`#ToolTip_CopyLinkToClipboard`),
              children: (0, _.jsx)(`div`, {
                className: _(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `_6y4EcbHPzTE-`),
                children: (0, _.jsx)(`img`, {
                  className: `SGi7-TqE4Rs-`,
                  src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%201801.5%201400%201409'%20enable-background='new%200%201801.5%201400%201409'%20xml:space='preserve'%3e%3cpath%20id='iconmonstr-link-1_1_'%20fill='%23FFFFFF'%20d='M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0%20c16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294%20c-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280%20c74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941%20c-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z%20M757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0%20c82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0%20c-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647%20c148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059%20S905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z'/%3e%3c/svg%3e`,
                }),
              }),
            }),
        ],
      }),
      (0, _.jsx)(`div`, {
        ref: _,
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let _ = _.COMMUNITY_BASE_URL + `broadcast/share/` + _;
  return {
    strFacebookUrl: _ + `?site=facebook&t=` + Math.random(),
    strTwitterUrl: _ + `?site=twitter`,
    strRedditUrl: _ + `?site=reddit`,
  };
}
var _ = _({
    BroadcastEmbeddablePopoutHeader: () => _,
    default: () => _,
  }),
  _ = {
    list: [
      {
        appid: 444090,
        url: `https://steam.tv/paladins`,
      },
      {
        appid: 386360,
        url: `https://steam.tv/smite`,
      },
      {
        appid: 813820,
        url: `https://steam.tv/realmroyale`,
      },
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
function _() {
  let _ = _();
  return !_() && !_;
}
function _(_) {
  return _()
    ? (0, _.jsx)(_, {
        ..._,
      })
    : null;
}
var _ = class extends _.Component {
  m_cancelSignal = _.default.CancelToken.source();
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
    (await _.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
      this.m_cancelSignal.token.reason ||
        this.setState({
          bLoadingPreference: !1,
          bExpanded: !_.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
          innerStyle: {
            ...this.state.innerStyle,
            maxHeight: _.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
              ? `0vh`
              : `100vh`,
          },
        }),
      await (this.props.bIsPreview &&
      this.props.accountIDs &&
      !this.props.event?.BUsesContentHubForItemSource()
        ? _.Get().HintLoadEmbeddablePreviewStreams(this.props)
        : _.Get().HintLoadEmbeddableStreams(this.props)),
      this.props.nAppIDVOD &&
        _.Get().SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
      window.setTimeout(() => {
        this.m_cancelSignal.token.reason ||
          this.setState({
            style: {
              ...this.state.style,
              maxHeight: `100vh`,
            },
          });
      }, 10));
  }
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`BroadcastEmbeddable component unmounted`);
  }
  ToggleBroadcastExpandShrink() {
    let _ = _.Get().GetPlayReadyStream(this.props);
    if (!_) return;
    let _ = this.state.bExpanded,
      _ = _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID;
    (_(_, _ ? 2 : 3, _.snr),
      _ && _()?.AddEvent(_),
      window.setTimeout(
        () =>
          this.setState({
            innerStyle: {
              ...this.state.innerStyle,
              maxHeight: _ ? `0vh` : `100vh`,
            },
          }),
        10,
      ),
      _ ||
        this.setState(
          {
            bExpanded: !this.state.bExpanded,
          },
          () => _.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
        ));
  }
  OnShrinkTransitionEnd() {
    this.state.innerStyle.maxHeight === `0vh` &&
      this.setState(
        {
          bExpanded: !1,
        },
        () => _.Get().SetEmbeddedStreamCollapsed(!0),
      );
  }
  async onStreamSelect(_) {
    (this.setState({
      bStartMuted: !1,
    }),
      _.Get().GetPlayReadyStream(this.props)?.accountid != _.accountid &&
        (await _.Get().AttemptToPlayStream(this.props, _)));
  }
  async PlayNextNonVOD() {
    this.setState({
      bStartMuted: !1,
    });
    let _ = (_.Get().GetStreams(this.props) ?? []).filter(
      (_) => !this.props.fnFilterStreams || this.props.fnFilterStreams(_),
    );
    await _.Get().PlayFromAvailableStreams(this.props, _, !0);
  }
  ConstructSidePanels(_, _) {
    let _ = {
      bRightPanelArtworkOrEmpty: !0,
    };
    if (this.props.bWidePlayer) return _;
    let _ = _.Get().GetConcurrentStreams(this.props) > 1,
      _ = _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
      _ = (0, _.jsx)(
        _,
        {
          ImgUrl: _.right_panel,
        },
        `right` + _,
      ),
      _ = (0, _.jsx)(
        _,
        {
          ImgUrl: _.left_panel,
        },
        `left` + _,
      );
    if (_ < 11) {
      let _ = _.steamid
        ? _.GetAppIDListForBroadcasterSteamID(_.steamid)
        : void 0;
      _ && _.length === 1 && (_ = _[0]);
    }
    return (
      (this.props.promotionName ||
        this.props.bIsPreview ||
        this.props.subid ||
        this.props.bundleid) &&
        _ >= 11 &&
        (!this.props.event ||
          !this.props.event.jsondata.broadcast_force_banner) &&
        ((_ = (0, _.jsx)(
          _,
          {
            appid: _,
          },
          `mini` + _.accountid,
        )),
        (_.bRightPanelArtworkOrEmpty = !1)),
      _ && !_
        ? ((_.leftPanel = (0, _.jsx)(
            _,
            {
              broadcastEmbedContext: this.props,
              curStream: _,
              onStreamSelect: this.onStreamSelect,
              fnFilterStreams: this.props.fnFilterStreams,
              bShowCapsuleArt: this.props.bShowCapsuleArt,
            },
            `selector` + _,
          )),
          (_.rightPanel = _))
        : _
          ? ((_.leftPanel = (0, _.jsx)(`div`, {})),
            (_.rightPanel = (0, _.jsx)(_, {
              stream: _,
              orientation: `rightside`,
            })),
            (_.bRightPanelArtworkOrEmpty = !1))
          : ((_.leftPanel = _), (_.rightPanel = _)),
      _
    );
  }
  MarkBroadcastSeen() {
    this.m_bMarkedUsabilitySeen ||
      ((this.m_bMarkedUsabilitySeen = !0), _()?.AddEvent(_));
  }
  render() {
    if (this.state.bLoadingPreference) return null;
    let _ = _.Get().GetPlayReadyStream(this.props);
    if (_) {
      this.MarkBroadcastSeen();
      let _ = _.Get().GetChatVisibility() === `show`,
        { event: _, language: _, fnRenderBroadcastContext: _ } = this.props,
        _ = _
          ? {
              ..._,
              left_panel: _.GetImageURL(`broadcast_left`, _ || _(_.LANGUAGE)),
              right_panel: _.GetImageURL(`broadcast_right`, _ || _(_.LANGUAGE)),
              store_title: _.GetBroadcastTitle(_ || _(_.LANGUAGE)),
              broadcast_chat_visibility: _.GetBroadcastChatVisibility(),
            }
          : _,
        _ = this.ConstructSidePanels(_, _),
        _ = _.store_title ? _.store_title : _.title,
        _ = _.Get().GetConcurrentStreams(this.props) > 1,
        _ = () => {
          (_.nAppIDVOD && this.PlayNextNonVOD(), this.props.fnOnVideoEnd?.());
        };
      return (0, _.jsx)(_.Fragment, {
        children: (0, _.jsxs)(`div`, {
          className: `broadcast_embed_top_ctn_trgt`,
          style: this.state.style,
          children: [
            (0, _.jsxs)(`div`, {
              className: _({
                [_]: !0,
                [_]: !!_,
                broadcast_brd_ctn_trgt: !0,
              }),
              children: [
                (0, _.jsxs)(`div`, {
                  className: _(_, `bordered_title_trgt`),
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _,
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        !this.state.bExpanded &&
                          (0, _.jsx)(_, {
                            toolTipContent: _(
                              `#StoreBroadcast_Change_store_Broadcast_settings`,
                            ),
                            children: (0, _.jsx)(`div`, {
                              className: `Ku3ORKocBrQ-`,
                              onClick: () =>
                                window.open(
                                  `${_.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                ),
                            }),
                          }),
                        (0, _.jsx)(_, {
                          toolTipContent: _(`#StoreBroadcast_Hide_Tooltip`),
                          children: (0, _.jsx)(`div`, {
                            className: this.state.bExpanded ? _ : _,
                            onClick: this.ToggleBroadcastExpandShrink,
                          }),
                        }),
                      ],
                    }),
                    !!_.gamedata_subtitle &&
                      (0, _.jsx)(`div`, {
                        className: `WdbOLmmaXso-`,
                        children: _.gamedata_subtitle,
                      }),
                  ],
                }),
                !!this.state.bExpanded &&
                  (0, _.jsxs)(`div`, {
                    className: _({
                      "lOf3hlirldE-": !0,
                      embeddable_ctn_trgt: !0,
                      multistream: _,
                      broadcast_right_panel_simple: _.bRightPanelArtworkOrEmpty,
                      broadcast_chat_expanded: _,
                    }),
                    style: {
                      ...this.state.innerStyle,
                    },
                    onTransitionEnd: this.OnShrinkTransitionEnd,
                    children: [
                      (0, _.jsx)(`div`, {
                        className: `HEBZJhZ641A-`,
                        children: _.leftPanel,
                      }),
                      (0, _.jsx)(_, {
                        stream: _,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: _,
                        fnOnVideoEnd: _,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      (0, _.jsx)(`div`, {
                        className: `UHu5FWxee0A-`,
                        children: _.rightPanel,
                      }),
                      !!this.state.bExpanded &&
                        (0, _.jsx)(_, {
                          stream: _,
                          bMultistream: _,
                          chatAnnouncementGivewayGID: _.rightPanel
                            ? void 0
                            : this.props.chat_announcement_giveaway,
                        }),
                    ],
                  }),
              ],
            }),
            !!_ &&
              !!(_.jsondata && _.jsondata.broadcast_item_drops_enabled) &&
              (0, _.jsx)(_, {
                event: _,
              }),
            (0, _.jsx)(`div`, {
              className: _,
            }),
          ],
        }),
      });
    }
    return (0, _.jsx)(`div`, {
      className: `NoBroadcastAvailable`,
    });
  }
};
(_([_], _.prototype, `ToggleBroadcastExpandShrink`, null),
  _([_], _.prototype, `OnShrinkTransitionEnd`, null),
  _([_], _.prototype, `onStreamSelect`, null),
  _([_], _.prototype, `PlayNextNonVOD`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
  m_iVideoContainerRef = _.createRef();
  constructor(_) {
    (super(_),
      (this.state = {
        bPopout: !1,
        bPreventPopup: window.screen.width <= 768,
      }));
  }
  CloseBroadcastPopup() {
    let _ = _.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (_(_, 7, this.props.stream.snr),
      _()?.AddEvent(_),
      this.setState({
        bPopout: !1,
        bPreventPopup: !0,
      }));
  }
  OnEnter() {
    !this.state.bPreventPopup &&
      this.state.bPopout &&
      this.setState({
        bPopout: !1,
      });
  }
  OnLeave() {
    !this.state.bPreventPopup &&
      !this.state.bPopout &&
      this.setState({
        bPopout: !0,
      });
  }
  render() {
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        onEnter: this.OnEnter,
        onLeave: this.OnLeave,
        onIntersectionChange: (_) => {
          _.isIntersecting || this.OnLeave();
        },
        className: _({
          [_]: !0,
          video_placeholder_trgt: !0,
          [_]: this.props.bWidePlayer,
        }),
        ref: this.m_iVideoContainerRef,
        children: (0, _.jsxs)(`div`, {
          className: this.state.bPopout ? _ : _,
          children: [
            this.state.bPopout &&
              (0, _.jsx)(_, {
                steamIDBroadcast: this.props.stream.steamid,
                OnPreventPopup: this.CloseBroadcastPopup,
              }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
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
(_([_], _.prototype, `CloseBroadcastPopup`, null),
  _([_], _.prototype, `OnEnter`, null),
  _([_], _.prototype, `OnLeave`, null));
function _(_) {
  let { stream: _ } = _,
    [_] = _(() => [_.steamid]),
    _ = _.GetOrCreateBroadcastInfo(_).m_nAppID,
    _ = _.list.find(
      (_) =>
        _.appid == _ &&
        (!_.broadcasterAccountID || _.broadcasterAccountID == _.accountid),
    );
  if (_) {
    let _ = _.url;
    return (
      (_.IN_CLIENT ||
        navigator.userAgent.indexOf(`Valve Steam Client`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam GameOverlay`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam Tenfoot`) >= 0) &&
        (_ = `steam://openurl/` + _),
      (0, _.jsx)(`a`, {
        href: _,
        children: _(`#Broadcast_Embed_Watch_With_Frieds_SteamTV`),
      })
    );
  }
  {
    let _ = _.COMMUNITY_BASE_URL + `broadcast/watch/` + _;
    return (0, _.jsx)(_, {
      toolTipContent: _(`#BroadcastWatch_View_Broadcast_Page`),
      children: (0, _.jsx)(`a`, {
        href: _,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
    });
  }
}
var _ = class extends _.Component {
  OnToggleChat(_) {
    _.preventDefault();
    let _ = _.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (_(
      _,
      _.Get().GetChatVisibility() === `show` ? 5 : 4,
      this.props.stream.snr,
    ),
      _.Get().ToggleChatVisibility());
  }
  onWatchBroadcastPage() {
    let _ = _.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    _(_, 9, this.props.stream.snr);
  }
  render() {
    let _ = _.Get().GetChatVisibility() != `remove`,
      _ = _.Get().GetChatVisibility() === `hide`,
      _ = !this.props.stream.nAppIDVOD,
      _ = _,
      _ = Number.parseInt(
        `` +
          _.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nViewerCount,
      );
    return (0, _.jsxs)(`div`, {
      className: _(_, `viewer_bar`),
      children: [
        (0, _.jsxs)(`div`, {
          className: _(_, `viewer_count`),
          children: [(0, _.jsx)(_, {}), _(_)],
        }),
        (0, _.jsxs)(`div`, {
          className: _(_, `viewer_links`),
          children: [
            !!(_ && !_ && this.props.bMultistream) &&
              (0, _.jsx)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: (0, _.jsx)(`a`, {
                  href: `#`,
                  className: void 0,
                  onClick: this.OnToggleChat,
                  children: _(`#sale_three_section_show_streams`),
                }),
              }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: this.OnToggleChat,
                    children: _(
                      _
                        ? `#sale_three_section_show_chat`
                        : `#sale_three_section_hide_chat`,
                    ),
                  }),
                ],
              }),
            _ &&
              (0, _.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: (_) => {
                      let _ = _(_);
                      _ &&
                        _(
                          (0, _.jsx)(_, {
                            steamid: this.props.stream.steamid ?? ``,
                          }),
                          _,
                        );
                    },
                    children: _(`#Broadcast_ShareBroadcast`),
                  }),
                ],
              }),
            (0, _.jsx)(_, {
              toolTipContent: _(
                `#StoreBroadcast_Change_store_Broadcast_settings`,
              ),
              children: (0, _.jsx)(`a`, {
                href:
                  _.STORE_BASE_URL +
                  `account/preferences/#store_broadcast_settings`,
                target: _.IN_CLIENT ? void 0 : `_blank`,
                className: _,
                children: (0, _.jsx)(_, {}),
              }),
            }),
            _ &&
              (0, _.jsx)(_, {
                ...this.props,
              }),
          ],
        }),
        !!this.props.chatAnnouncementGivewayGID &&
          (0, _.jsx)(_, {
            gidGiveaway: this.props.chatAnnouncementGivewayGID,
            stream: this.props.stream,
          }),
      ],
    });
  }
};
(_([_], _.prototype, `OnToggleChat`, null),
  _([_], _.prototype, `onWatchBroadcastPage`, null),
  (_ = _([_], _)));
var _ = class extends _.Component {
    render() {
      let _ = this.props.ImgUrl;
      return (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(`img`, {
              className: `KkgW9CzRVMI-`,
              src: this.props.ImgUrl,
            }),
          !_ &&
            (0, _.jsx)(`div`, {
              className: `KkgW9CzRVMI-`,
            }),
        ],
      });
    }
  },
  _ = _((_) => {
    let { steamIDBroadcast: _ } = _,
      _ = _.GetOrCreateBroadcastInfo(_).m_nAppID;
    _ = _ == 7 ? 0 : _;
    let _ = _(_),
      { data: _ } = _(_);
    return (0, _.jsxs)(`div`, {
      className: [_, void 0].join(` `),
      children: [
        _
          ? (0, _.jsx)(_, {
              _: _,
              className: _,
              children: _(`#StoreBroadcast_Detault_popout_Title`),
            })
          : (0, _.jsx)(`div`, {
              className: _,
              children: _(`#StoreBroadcast_Detault_popout_Title`),
            }),
        (0, _.jsx)(_, {
          toolTipContent: _(`#StoreBroadcast_close_broadcast_popup`),
          children: (0, _.jsx)(`button`, {
            className: _,
            onClick: _.OnPreventPopup,
            children: (0, _.jsx)(_, {}),
          }),
        }),
      ],
    });
  });
function _(_, _) {
  let _ = _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
    _ = _.Get().GetApp(_);
  return _ && _?.GetAssets()?.GetHeaderURL() ? parseInt(_) : parseInt(_);
}
function _(_) {
  let {
      curStream: _,
      onStreamSelect: _,
      fnFilterStreams: _,
      bShowCapsuleArt: _,
      broadcastEmbedContext: _,
    } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useMemo)(() => {
      let _ = (_.Get().GetStreams(_) ?? []).filter((_) => !_ || _(_));
      return (_(_), _);
    }, [_, _]);
  return (
    (0, _.useEffect)(() => {
      if (_ && _.current) {
        let _ = _.map(
          (_) => _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
        ).filter(Boolean);
        _.Get()
          .QueueMultipleAppRequests(_, {
            include_assets: !0,
          })
          .then(() => {
            if (_.current) {
              let _ = 0;
              for (let _ of _) {
                if (_.accountid == _.accountid) break;
                _ += _(_, _);
              }
              _.current.scrollTop = _;
            }
          });
      }
    }, [_, _, _.accountid, _]),
    (0, _.jsx)(`div`, {
      ref: _,
      className: _({
        [_]: !0,
        side_panels: !0,
        [_]: !0,
        [_]: _.length > 3,
      }),
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              stream: _,
              bSelected: _.accountid == _.accountid,
              onStreamSelect: _,
              bShowCapsuleArt: _,
            },
            _.accountid ?? _.steamid,
          ),
        ),
      }),
    })
  );
}
function _(_) {
  let { onStreamSelect: _, bSelected: _, stream: _, bShowCapsuleArt: _ } = _,
    _ = _(() => _.GetOrCreateBroadcastInfo(_.steamid).m_nAppID);
  _ = _ == 7 ? 0 : _;
  let _ = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_(_)) return null;
  let _ = _ && _ ? _(_, `header`) : void 0,
    _ = Number.parseInt(`` + _.viewer_count),
    _ = !Number.isNaN(_),
    _ = !!_.nAppIDVOD && _?.name;
  return (0, _.jsxs)(`div`, {
    className: _({
      [_]: !0,
      [void 0]: _.current_selection_priority == _.k_eFeatured,
      [_]: !!_,
    }),
    children: [
      (0, _.jsx)(_, {
        _: _,
        hoverClassName: _,
        children: (0, _.jsx)(_, {
          className: _(_, _ && void 0),
          onClick: () => _ && _(_),
          rootMargin: `100px 0px 100px 0px`,
          children: (0, _.jsx)(_, {
            strThumbnail: _.thumbnail_http_address,
            bSelected: _,
            strCapsuleArtURL: _,
          }),
        }),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, !_ && `QP7p0y7iNjE-`),
        children: _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {}),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _(_),
                }),
              ],
            })
          : _,
      }),
    ],
  });
}
function _(_) {
  let { strCapsuleArtURL: _, strThumbnail: _, bSelected: _ } = _,
    _ = _ ? _ : _;
  if (_) {
    let _ = [_];
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`img`, {
          className: _(_, _),
          src: _,
        }),
        (0, _.jsx)(_, {
          className: _(_, _),
          srcs: _,
        }),
      ],
    });
  }
  return (0, _.jsx)(`img`, {
    className: _,
    src: _,
  });
}
function _(_) {
  let { stream: _, orientation: _ } = _,
    _ = _ == `below`,
    [_, _] = _(() => {
      let _ = _.steamid ? _.GetBroadcast(_.steamid) : void 0;
      return [_, _?.m_ulBroadcastID];
    }),
    _ = _(() => _.steamid);
  return _
    ? (0, _.jsx)(`div`, {
        className: _({
          [void 0]: _,
          [void 0]: !_,
          [_]: !0,
        }),
        children: (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            emoticonStore: _,
            watchLocation: 6,
            steamID: _,
            broadcastID: _,
          }),
        }),
      })
    : null;
}
