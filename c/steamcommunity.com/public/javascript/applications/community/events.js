import { _ } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import { _, _, _, _, _, _ } from "./libraries.js?contenthash=eLY4-d-j";
import { _ } from "./partnereventmigrate.js?contenthash=CEpog4Mi";
import { _, _, _ } from "./eventrow.js?contenthash=CQLWp866";
import { _, _ } from "./salebanner.js?contenthash=Kgzkt2UP";
import { _ } from "./eventinfinitescrollmodal.js?contenthash=C55rGRmB";
import { _ } from "./clanstore.js?contenthash=C3YK0fn0";
import { _ } from "./throbber.js?contenthash=COAox7wG";
import { _, _, _, _ } from "./carouselarrows.js?contenthash=BqkMhyR4";
import { _ } from "./appinfostore.js?contenthash=DBYLTPeb";
import { _ } from "./clanimagepicker.js?contenthash=DqzEBQZa";
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
} from "./main.js?contenthash=B3VTzWgT";
import "./partnereventsavebutton.module.js?contenthash=KlJHBgCU";
var _ = _(_(), 1),
  _ = _(),
  _ = `OdUWUqw0tkM-`,
  _ = `d-5nAi7tljQ-`,
  _ = `k8EMgG-4Stg-`,
  _ = `NelD3I3LNkY-`,
  _ = `kS9Vogo9VDE-`,
  _ = `We7gZuKDOiI-`,
  _ = 500;
function _(_) {
  let {
      strClassName: _,
      rgEvents: _,
      fnEventShowModal: _,
      elPostRowElement: _,
      bViewAllShowInfiniteScroll: _,
      nSummaryMaxLength: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = 2,
    _ = 501;
  return (
    _.ownerWindow.window
      ? (_ = _.ownerWindow.window.innerWidth)
      : _.viewportWidth && (_ = _.viewportWidth.value),
    (_ = _ <= _ ? 1 : 2),
    _ && _.length == 0 && !_
      ? null
      : (0, _.jsxs)(_, {
          className: _,
          "flow-children": `row`,
          children: [
            !!_ &&
              _.length > 0 &&
              (0, _.jsx)(`div`, {
                className: `OdUWUqw0tkM-`,
                children: (0, _.jsxs)(_, {
                  children: [
                    (0, _.jsxs)(`h2`, {
                      children: [
                        _.Localize(`#EventBrowse_RecentEvents`),
                        !_ &&
                          !!_ &&
                          (0, _.jsx)(_.Fragment, {
                            children:
                              _ && _
                                ? (0, _.jsx)(_, {
                                    className: `d-5nAi7tljQ-`,
                                    onClick: () => _(_[0]),
                                    children: _.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  })
                                : (0, _.jsx)(_, {
                                    eventModel: _[0],
                                    route: _.k_eViewWebSiteHub,
                                    className: `d-5nAi7tljQ-`,
                                    children: _.Localize(
                                      `#EventBrowse_MoreEventsBtn`,
                                    ),
                                  }),
                          }),
                      ],
                    }),
                    (0, _.jsx)(`div`, {
                      className: `YZMD3BYfIGw-`,
                      children: _.slice(0, _).map((_) => {
                        let _ =
                          _ && !_()
                            ? (_) => {
                                _(_), _.stopPropagation(), _.preventDefault();
                              }
                            : void 0;
                        return (0, _.jsx)(
                          _,
                          {
                            event: _,
                            onClick: _,
                            nSummaryMaxLength: _,
                          },
                          _.GID,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            _,
          ],
        })
  );
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          role: `presentation`,
        }),
      }),
      (0, _.jsx)(_, {
        className: _,
        onClick: _.onClick,
        children: _.Localize(
          `#EventBrowse_LatestUpdateTime_Button`,
          _(_.nUpdateTime),
        ),
      }),
    ],
  });
}
function _(_) {
  let { nUpdateTime: _, announcementGID: _, onClick: _ } = _,
    _ = _ ? _.GetClanEventFromAnnouncementGID(_) : null,
    _ = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`h2`, {
        children: [
          _(`#EventBrowse_LastUpdateDate`, _(_)),
          (0, _.jsx)(_, {
            className: _,
            onClick: (_) => {
              _?.(), _.stopPropagation(), _.preventDefault();
            },
            children: _(`#EventBrowse_MoreEventsBtn`),
          }),
        ],
      }),
      !!_ &&
        (0, _.jsx)(_, {
          className: `YZMD3BYfIGw-`,
          "flow-children": `column`,
          navEntryPreferPosition: _.PREFERRED_CHILD,
          children: (0, _.jsx)(_, {
            event: _,
            onClick: (_) => {
              _?.(), _.stopPropagation(), _.preventDefault();
            },
          }),
        }),
    ],
  });
}
var _ = (_) =>
    (0, _.createElement)(_, {
      ..._,
      key: _.match.params.oldAnnouncementGID,
      bClearDirty: !0,
      bPreview: !1,
      bPreventRedirect: !0,
    }),
  _ = class extends _.Component {
    state = {
      bShowModal: !1,
      bLoadedLandingState: this.props.bPreventDismiss,
    };
    componentDidMount() {
      this.props.bPreventDismiss
        ? this.LoadAppAndFirstEvent()
        : (window.fnPartnerEvent_ShowInfiniteScroll = (_, _) => {
            this.setState({
              bShowModal: !0,
              appid: _,
              announcementGID: _,
            });
          });
    }
    async LoadAppAndFirstEvent() {
      let _ = _(`eventinfinitescrolllanding`, `application_config`),
        _;
      _ && typeof _ == `string` && (_ = _);
      let _ = window.location.href.startsWith(_.COMMUNITY_BASE_URL + `groups`),
        _ = _
          ? await _.LoadOGGClanInfoForGroupVanity(
              this.props.match.params.appid_or_vanity_str,
            )
          : await _.LoadOGGClanInfoForIdentifier(
              this.props.match.params.appid_or_vanity_str,
            );
      if ((console.log(`output: `, _(_), _), _)) {
        if (_.partner_events_enabled) {
          let _ = await _.LoadAdjacentPartnerEventsByAnnouncement(
            _,
            _.clanSteamID,
            _.appid,
            3,
            3,
          );
          this.setState({
            bLoadedLandingState: !1,
            bShowModal: !0,
            appid: _.appid,
            clanSteamID: _.clanSteamID,
            announcementGID: _?.[0]?.AnnouncementGID,
          });
        } else
          this.setState({
            bLoadedLandingState: !1,
          });
      } else
        console.error(
          `EventInfiniteScrollLanding: failed to load clan info for ` +
            this.props.match.params.appid_or_vanity_str,
        ),
          this.setState({
            bLoadedLandingState: !1,
          });
    }
    HideModal() {
      this.props.bPreventDismiss ||
        this.setState({
          bShowModal: !1,
        });
    }
    render() {
      let { bPreventDismiss: _ } = this.props;
      return this.state.bShowModal
        ? (0, _.jsx)(_, {
            appid: this.state.appid,
            announcementGID: this.state.announcementGID,
            clanSteamID: this.state.clanSteamID,
            closeModal: this.HideModal,
            partnerEventStore: _,
            trackingLocation: this.props.trackingLocation,
            showAppHeader: !0,
            bPrimaryPageFeature: _,
          })
        : this.state.bLoadedLandingState
          ? (0, _.jsx)(_, {
              string: _(`#Loading`),
            })
          : (0, _.jsx)(`div`, {});
    }
  };
_([_], _.prototype, `HideModal`, null), (_ = _([_], _));
function _(_) {
  let {
      trackingLocation: _,
      strClassName: _,
      bViewAllShowInfiniteScroll: _,
    } = _,
    [_, _, _] = _(),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(void 0),
    _ = _(),
    _ = (0, _.useCallback)(() => {
      _(null), _();
    }, [_]),
    _ = (0, _.useCallback)(
      (_) => {
        _ &&
          _ &&
          _.BIsPartnerEvent() &&
          _.MarkEventRead(_.GID, _.clanSteamID.GetAccountID(), _) &&
          _.Flush(),
          _(_),
          _(void 0),
          _();
      },
      [_, _, _],
    ),
    { last_update_event: _, rgEvents: _ } = _({
      ..._,
      fnEventShowModal: _,
    }),
    _ = (0, _.useCallback)(() => {
      let { event_gid: _, announcement_gid: _, clan_account_id: _ } = _;
      _ && _ && _.MarkEventRead(_, _, _) && _.Flush(), _(_), _(null), _();
    }, [_, _, _, _]);
  (0, _.useEffect)(
    () => (
      (window.fnPartnerEvent_ShowInfiniteScroll = (_, _) => {
        _(_), _(null), _(_), _();
      }),
      () => {
        window.fnPartnerEvent_ShowInfiniteScroll &&
          delete window.fnPartnerEvent_ShowInfiniteScroll;
      }
    ),
    [_],
  );
  let _ = _(),
    _ = !!_ && !!_.rtime,
    _ =
      _ && _.announcement_gid && (!_ || _.length == 0)
        ? _.announcement_gid
        : void 0,
    _;
  return (
    _ && _
      ? (_ = (0, _.jsx)(_, {
          nUpdateTime: _.rtime,
          announcementGID: _,
          onClick: _,
        }))
      : _ &&
        !_ &&
        !_ &&
        (_ = (0, _.jsx)(_, {
          nUpdateTime: _.rtime,
          onClick: _,
        })),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            ..._,
            announcementGID: _ || _?.AnnouncementGID,
            eventModel: _,
            closeModal: _,
          }),
        }),
        (0, _.jsx)(_, {
          elPostRowElement: _,
          rgEvents: _,
          fnEventShowModal: _,
          bViewAllShowInfiniteScroll: _,
          strClassName: _,
        }),
      ],
    })
  );
}
function _(_) {
  let {
      appid: _,
      event_customization: _,
      partnerEventStore: _,
      trackingLocation: _,
      fnEventShowModal: _,
    } = _,
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    _ = _(),
    [_] = _(`emgid`, void 0),
    [_] = _(`announce_gid`, void 0);
  return (
    (0, _.useEffect)(() => {
      let _ = _(`EventWebRowEmbed`),
        _ = !1;
      if (_(_)) {
        (_ = _.bPreLoaded), _(_.last_update_event);
        let _ = [];
        _.announcementGIDList.forEach((_) => {
          let _ = _.GetClanEventFromAnnouncementGID(_);
          _ && _.push(_);
        }),
          _(_);
      }
      _ ||
        (async () => {
          let _ = await _.LoadAdjacentPartnerEvents(void 0, void 0, _, 0, 2, _);
          _(_),
            _ &&
              _ &&
              _.length > 0 &&
              (_.filter((_) => _.BIsPartnerEvent()).forEach((_) =>
                _.MarkEventShown(_.GID, _.clanSteamID.GetAccountID(), _),
              ),
              _.Flush());
        })();
    }, [_, _, _, _, _, _]),
    (0, _.useEffect)(() => {
      if (_ != null && (_ || _)) {
        let _ = _.find((_) => _.GID === _ || _.AnnouncementGID == _);
        _
          ? _(_)
          : (async () => {
              let _ = _
                ? await _.LoadPartnerEventFromClanEventGID(_, _, 0)
                : await _.LoadPartnerEventFromAnnoucementGID(_, _, 0);
              _ && _([..._, _]);
            })();
      }
    }, [_, _, _, _, _, _, _]),
    {
      last_update_event: _,
      rgEvents: _,
    }
  );
}
function _(_) {
  let _ = _;
  return _ && typeof _ == `object`
    ? _.bPreLoaded !== void 0 &&
        typeof _.bPreLoaded == `boolean` &&
        Array.isArray(_.announcementGIDList)
    : !1;
}
function _(_) {
  let {
      appid: _,
      partnerEventStore: _,
      trackingLocation: _,
      announcementGID: _,
      eventModel: _,
      closeModal: _,
    } = _,
    _ = _();
  return (0, _.jsx)(_, {
    className: _ ? void 0 : _,
    eventClassName: void 0,
    appid: _,
    trackingLocation: _,
    announcementGID: _,
    partnerEventStore: _,
    eventModel: _ ?? void 0,
    closeModal: _,
  });
}
function _(_) {
  let { appid: _ } = _,
    _ = new Date(_.NOW * 1e3),
    _ = new Date(_.setUTCHours(0, 0, 0, 0) - 15552e6),
    _ = Math.floor(_.getTime() / 1e3);
  return (0, _.jsx)(`div`, {
    className: `detailBox altFooter greenlight_home_box section announcements_row`,
    children: (0, _.jsx)(_, {
      appid: _,
      partnerEventStore: _,
      event_customization: {
        require_tags: [`workshop`],
        rtime_oldestevent: _,
      },
      strClassName: _,
      trackingLocation: 6,
      bViewAllShowInfiniteScroll: !0,
    }),
  });
}
function _(_) {
  let [_, _] = _.useState(!0);
  return (
    _.useEffect(() => {
      _.Init(new _(_.WEBAPI_BASE_URL)), _.Init(), _(!1);
    }, []),
    _
      ? null
      : (0, _.jsx)(_.Provider, {
          value: {
            bCanUseLink: !0,
          },
          children: (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                exact: !0,
                path: _.ViewEventDetails(
                  `:appid_or_vanity_str`,
                  `:oldAnnouncementGID(\\d+)`,
                ),
                render: (_) =>
                  (0, _.jsx)(_, {
                    ..._,
                  }),
              }),
              (0, _.jsx)(_, {
                exact: !0,
                path: _.Listing(`:appid_or_vanity_str`),
                render: (_) =>
                  (0, _.jsx)(
                    _,
                    {
                      ..._,
                      bPreventDismiss: !0,
                      trackingLocation: 6,
                    },
                    `InfScroll_NoDismissApp_` + _.match.params.appid,
                  ),
              }),
              (0, _.jsx)(_, {
                exact: !0,
                path: _.WorkshopHub(`:appid(\\d+)`),
                render: (_) =>
                  (0, _.createElement)(_, {
                    ..._,
                    appid: +_.match.params.appid,
                    key: `Workshop` + _.match.params.appid,
                  }),
              }),
              (0, _.jsx)(_, {
                path: _.AppHub(`:appid`),
                render: (_) =>
                  (0, _.createElement)(_, {
                    ..._,
                    key: `InfScroll_App_` + _.match.params.appid,
                    trackingLocation: 6,
                  }),
              }),
              (0, _.jsx)(_, {
                path: _.GroupHub(`:group_vanity`),
                render: (_) =>
                  (0, _.createElement)(_, {
                    ..._,
                    key: `InfScroll_App_` + _.match.params.group_vanity,
                    trackingLocation: 6,
                  }),
              }),
              (0, _.jsx)(_, {
                component: _,
              }),
            ],
          }),
        })
  );
}
export { _ as default };
