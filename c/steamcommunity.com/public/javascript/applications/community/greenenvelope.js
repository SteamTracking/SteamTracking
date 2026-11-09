import { _ } from "./rolldown-runtime.js";
import { _, _, _ } from "./libraries.js";
import { _ } from "./visibilitytracker.js";
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
} from "./main.js";
import { _, _, _, _, _, _ } from "./webtemplates.js";
var _ = _(_()),
  _ = `wiJqXTPU468-`,
  _ = `hioRg1nXJCQ-`,
  _ = `_0aFiUekNE6I-`,
  _ = `_6CRZVgXX8WU-`,
  _ = `-RS5MjpS9jg-`,
  _ = `VCr0rtJhkqE-`,
  _ = `_251Yq-pwxUA-`,
  _ = `L0aJl-TTCO0-`,
  _ = `jw00MnpI46s-`,
  _ = `yV0P89CB4mg-`,
  _ = `d2UeLuiq6xY-`,
  _ = `EJrQKVkzhjk-`,
  _ = `M7XVUF5aHZw-`,
  _ = `GDByqt7FPpw-`,
  _ = `wDxGI9lKYwM-`,
  _ = `bhbnhf7x6FA-`,
  _ = _(),
  _ = new _(),
  _ = _(function (_) {
    let { bResponsiveHeader: _, notifications: _ } = _;
    _.useEffect(() => {
      _ && !_.m_bLoaded && _.ProcessNewNotificationPayload(_);
    }, [_]);
    let _ = _();
    (0, _.useEffect)(() => {
      (_.setTransport(_), (window.RefreshSteamNotifications = () => _(_)));
    }, [_]);
    let _ = _();
    return _
      ? (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
        })
      : (0, _.jsx)(_, {
          nTotalUnviewed: _.nUnviewed,
        });
  });
function _() {
  return _(() => ({
    notifications: _.m_rgNotificationRollups,
    summary: _.m_summary,
    loaded: _.m_bLoaded,
    nUnviewed: _.m_nUnviewed,
  }));
}
function _() {
  let _ = _(),
    _ = _(),
    { data: _ } = _(_),
    _ = _(),
    _ = _?.settings;
  return _.notifications.filter((_) => !_(_.type, _, _) && !_(_.item));
}
function _(_) {
  let { nTotalUnviewed: _ } = _,
    _ = _.useRef(null),
    _ = _(),
    [_, _] = _.useState(_);
  _.useEffect(() => {
    _.current ||
      ((_.current = _(
        (0, _.jsx)(_, {
          popupRef: _,
        }),
        document.getElementById(`green_envelope_menu_root`),
        {
          bPreferPopLeft: !0,
          bOverlapHorizontal: !0,
          strClassName: `GreenEnvelopeMenu`,
        },
      )),
      _.current.Hide());
    let _ = document.getElementById(`header_notification_link`);
    (_ && (_.style.cssText = `background-color: rgba(0,0,0,0)`),
      window.setTimeout(() => _(null), 2e3));
  }, []);
  let _ = () => {
      _.current?.visible ||
        (_.current?.Show(),
        _.findIndex((_) => !_.item.viewed) != -1 && _.MarkAllItemsViewed());
    },
    _ = _.useCallback(
      (_) => {
        !_ && _.current?.visible && _.current.Hide();
      },
      [_],
    );
  return (0, _.jsx)(_, {
    trigger: `repeated`,
    onVisibilityChange: _,
    children: (0, _.jsx)(`button`, {
      onClick: _,
      _: `green_envelope_menu_root`,
      className: _(_, _ ? _ : _, _),
      children: (0, _.jsx)(_, {
        className: _,
        "aria-label": _(`#NotificationsMenu_Title`),
      }),
    }),
  });
}
var _ = (_) => {
    let { popupRef: _ } = _,
      _ = _.useRef(null),
      [_, _] = _.useState(!1);
    _.useEffect(() => {
      _(_.current != null && _.current?.scrollHeight > _.current?.clientHeight);
    }, [_.current?.scrollHeight, _]);
    let _ = _ ? void 0 : _;
    return (0, _.jsxs)(`div`, {
      className: _,
      onClick: () => _?.current?.Hide(),
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsxs)(`div`, {
          className: _(_, _),
          ref: _,
          children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
        }),
      ],
    });
  },
  _ = () => {
    let _ = `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications`;
    return (0, _.jsxs)(`div`, {
      className: _(_),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#NotificationsMenu_Title`),
        }),
        (0, _.jsx)(`a`, {
          href: _,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: _(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  _ = () => {
    let _ = `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications`;
    return (0, _.jsx)(`div`, {
      className: _(_, _),
      children: (0, _.jsx)(`a`, {
        href: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _(`#NotificationsMenu_ViewAll`),
        }),
      }),
    });
  };
function _(_, _, _) {
  (_.read ||
    (_ && _.button != 0 && _.button != 1) ||
    !_.notification_id ||
    _.MarkItemRead(_.notification_id),
    _());
}
function _() {
  let _ = _();
  return _.length == 0
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              rollup: _,
              onNotificationClick: _,
              uimode: 3,
              location: 3,
            },
            _,
          ),
        ),
      });
}
var _ = [
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewGiftsPinned_Body`, _),
    feature: 1,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_FriendInvitePinned_Body`, _),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewCommentPinned_Body`, _),
    feature: 2,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewItemAnnouncementPinned_Body`, _),
    feature: 3,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewTradeOffersPinned_Body`, _),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewAsyncGamePinned_Body`, _),
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_NewModeratorMessagePinned_Body`, _),
    feature: 2,
  },
  {
    fnUrl: () => `${_.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: _,
    fnLocalizeBody: (_) =>
      _(`#Notification_NewHelpRequestRepliesPinned_Body`, _),
  },
  {
    fnUrl: () =>
      `${_.STORE_BASE_URL}account/familymanagement/join?ft=${_.steamid}`,
    countItem: `family_invites`,
    icon: _,
    fnLocalizeBody: (_) => _(`#Notification_FamilyInvitePinned_Body`, _),
  },
];
function _() {
  let _ = _();
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          url: _.fnUrl(),
          count: _.summary[_.countItem],
          icon: _.icon,
          strBody: _.fnLocalizeBody(_.summary[_.countItem]),
          eFeature: _.feature,
        },
        _.countItem,
      ),
    ),
  });
}
function _() {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function _(_) {
  let _ = null;
  try {
    _ = await _(_, _.steamid, _(_.LANGUAGE), void 0, !1, !1);
  } catch {}
  _ && _.ProcessNewNotificationPayload(_);
}
export { _ as GreenEnvelope, _ as default, _ as useSteamNotifications };
