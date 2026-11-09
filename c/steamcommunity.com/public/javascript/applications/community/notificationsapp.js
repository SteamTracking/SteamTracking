import { _ } from "./rolldown-runtime.js";
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
  _,
  _,
  _,
} from "./main.js";
import { _, _, _, _, _, _, _ } from "./webtemplates.js";
var _ = _(_()),
  _ = `oKmzL-DX83g-`,
  _ = `BsqF--ht2TU-`,
  _ = `ymmfeQlsoo4-`,
  _ = `F38eJWs9QdA-`,
  _ = `_3zaZGH4YdHc-`,
  _ = `PQJeiJQ3MDI-`,
  _ = `YvdMc-u73s0-`,
  _ = `Ni1iSmrAzW8-`,
  _ = `VmFWf-nBpKU-`,
  _ = `SFLe-bGViYY-`,
  _ = `cKoboKnME4o-`,
  _ = `R-gghTDpxUc-`,
  _ = `OpWzUuJR-ow-`,
  _ = `gv24MUeT5eM-`,
  _ = `_89CROveBC5M-`,
  _ = `qaQSjvc6JDQ-`,
  _ = `CeG5MdP7kw4-`,
  _ = `YKUMDMMkYew-`,
  _ = `Fidzlbx42vg-`,
  _ = `oyl1IMfOrg8-`,
  _ = `Aw9bSZZCt3Y-`,
  _ = `lS6MXMmmcrA-`,
  _ = `-s3QaLNsc1Q-`,
  _ = `Y8e-dSwUGH4-`,
  _ = `_6i8VFSSq3gQ-`,
  _ = class {
    constructor() {
      _(this);
    }
    rgFilterState = new Map();
    commentFilter = {
      type: 0,
      setItemTypes: new Set([]),
      fnFilter: () => !0,
    };
    k_rgFilterCheckboxes = [
      {
        type: 3,
        display: _(`#NotificationsFilters_Comments`),
        hash: `comments`,
      },
      {
        type: 8,
        display: _(`#NotificationsFilters_Wishlist`),
        hash: `wishlist`,
      },
      {
        type: 5,
        display: _(`#NotificationsFilters_FriendRequest`),
        hash: `invites`,
      },
      {
        type: 2,
        display: _(`#NotificationsFilters_Gifts`),
        hash: `gifts`,
      },
      {
        type: 4,
        display: _(`#NotificationsFilters_Inventory`),
        hash: `inventory`,
      },
      {
        type: 12,
        display: _(`#NotificationsFilters_AsyncGame`),
        hash: `asyncgame`,
      },
      {
        type: 11,
        display: _(`#NotificationsFilters_HelpRequest`),
        hash: `help`,
      },
      {
        type: 9,
        display: _(`#NotificationsFilters_TradeOffer`),
        hash: `trade`,
      },
      {
        type: 10,
        display: _(`#NotificationsFilters_General`),
        hash: `general`,
      },
    ];
    k_rgCommentFilters = [
      {
        type: 0,
        display: _(`#NotificationsList_CommentFilters_All`),
        fnFilter: () => !0,
      },
      {
        type: 1,
        display: _(`#NotificationsList_CommentFilters_YourItems`),
        fnFilter: this.IsCommentOwned,
      },
      {
        type: 2,
        display: _(`#NotificationsList_CommentFilters_Subscribed`),
        fnFilter: this.IsCommentSubscribed,
      },
    ];
    IsCommentOwned(_, _) {
      return _.bis_owner || _.owner_steam_id.ConvertTo64BitString() == _;
    }
    IsCommentSubscribed(_, _) {
      return _.bsubscribed;
    }
    ProcessHash(_) {
      this.rgFilterState.clear(),
        this.commentFilter.setItemTypes.clear(),
        _ &&
          _.split(`,`).forEach((_) => {
            let _ = this.k_rgFilterCheckboxes.findIndex((_) => _.hash == _);
            _ === -1
              ? _(_) &&
                this.rgFilterState.has(3) &&
                this.commentFilter.setItemTypes.add(parseInt(_))
              : this.rgFilterState.set(this.k_rgFilterCheckboxes[_].type, !0);
          });
    }
    SetFilter(_, _, _) {
      _ &&
        (this.rgFilterState.clear(), this.commentFilter.setItemTypes.clear()),
        _ &&
          (this.rgFilterState.set(_, _),
          _ == 3 && !_ && this.commentFilter.setItemTypes.clear()),
        this.UpdateLocationHash();
    }
    SetCommentFilter(_) {
      (this.commentFilter = _),
        (this.commentFilter.fnFilter = this.k_rgCommentFilters.find(
          (_) => _.type == _.type,
        )?.fnFilter),
        this.UpdateLocationHash();
    }
    UpdateLocationHash() {
      let _ = ``;
      this.rgFilterState.forEach((_, _) => {
        _ &&
          (_ +=
            (_ ? `,` : ``) +
            this.k_rgFilterCheckboxes.find((_) => _.type == _)?.hash);
      }),
        this.rgFilterState.has(3) &&
          this.commentFilter.setItemTypes.forEach(
            (_) => (_ += (_ ? `,` : ``) + _),
          ),
        window.history.pushState(
          {},
          null,
          window.location.pathname + (_ ? `#` + _ : ``),
        );
    }
  };
_([_], _.prototype, `rgFilterState`, void 0),
  _([_], _.prototype, `commentFilter`, void 0);
function _() {
  _(() => [..._.rgFilterState]);
  let _ = 0;
  return (
    _.rgFilterState.forEach((_) => {
      _ += +!!_;
    }),
    {
      numActive: _,
      filters: _.rgFilterState,
    }
  );
}
function _() {
  let _ = _(),
    _ = _();
  return (
    _.map((_) => {
      _.item.hidden || _(_, _.type, _.rgunread?.length);
    }),
    _(_)
  );
}
function _() {
  return _(() => _.commentFilter);
}
function _() {
  return _.useMemo(() => {
    let _ = new Map();
    for (let _ of _.m_rgNotificationRollups)
      _.set(_.type, 1 + (_.get(_.type) || 0));
    return _;
  }, []);
}
function _() {
  let _ = _();
  return _.useMemo(() => {
    let _ = new Map();
    for (let _ of _.k_rgCommentFilters)
      for (let _ of _.m_rgNotificationRollups.filter((_) => _.type == 3)) {
        let _ = _(_);
        _.fnFilter(_, _) && _.set(_.type, 1 + (_.get(_.type) || 0));
      }
    return _;
  }, [_]);
}
function _() {
  return _.useMemo(() => {
    let _ = new Map();
    for (let _ of _.m_rgNotificationRollups.filter((_) => _.type == 3)) {
      let _ = _(_);
      _.set(_.comment_type, 1 + (_.get(_.comment_type) || 0));
    }
    return _;
  }, []);
}
function _() {
  let { numActive: _, filters: _ } = _(),
    _ = _(),
    _ = _(),
    { settings: _ } = _(_).data,
    _ = _();
  return (
    _(() => _(_.m_summary)),
    _.m_rgNotificationRollups.filter((_) => {
      if ((_ && !_.get(_.type)) || _(_.type, _, _)) return !1;
      if (_ && _.type == 3 && (_.type != 0 || _.setItemTypes.size > 0)) {
        let _ = _(_),
          _ = !_.fnFilter || _.fnFilter(_, _);
        return (
          _.setItemTypes.size > 0 &&
            !_.setItemTypes.has(_.comment_type) &&
            (_ = !1),
          _
        );
      }
      return !0;
    })
  );
}
var _ = new _(),
  _ = new _(),
  _ = _();
function _(_) {
  let { hash: _ } = _;
  (0, _.useEffect)(() => {
    _.ProcessHash(_);
  }, [_]);
  let _ = _();
  (0, _.useEffect)(() => {
    _.setTransport(_), _.m_nUnviewed > 0 && _.MarkAllItemsViewed();
  }, [_]);
  let _ = _(`notifications`, `application_config`);
  return (
    _.ProcessNewNotificationPayload(_),
    _.m_rgNotificationRollups.length
      ? (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`span`, {
                    className: _,
                    children: _(`#NotificationsList_Header`),
                  }),
                  (0, _.jsx)(_, {}),
                ],
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(_, {}),
                      (0, _.jsx)(`div`, {
                        className: _,
                        children: (0, _.jsx)(_, {
                          href: `/my/moderatormessages`,
                          children: _(`#CommunityActivity`),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {}),
        })
  );
}
function _() {
  let _ = _(),
    _ = _(`#NotificationsList_Unread`, _);
  return (0, _.jsx)(`span`, {
    className: _,
    children: _,
  });
}
function _() {
  let _ = _();
  return (0, _.jsx)(_, {
    className: _,
    children: _.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          rollup: _,
        },
        _,
      ),
    ),
  });
}
function _() {
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        children: _(`#NotificationsList_EmptyTitle`),
      }),
      (0, _.jsx)(_, {
        className: _,
        children: _(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
function _() {
  let _ = _(),
    _ = _();
  return (0, _.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              className: _,
              onClick: () => _.MarkAllItemsRead(_),
              children: _(`#NotificationsList_MarkAllRead`),
            }),
          }),
          (0, _.jsxs)(_, {
            className: _,
            onClick: () =>
              window.location.assign(
                `${_.STORE_BASE_URL}account/notificationsettings`,
              ),
            children: [
              (0, _.jsx)(_, {
                className: _,
              }),
              _(`#NotificationsList_Settings`),
            ],
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#NotificationsList_FilterTo`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.k_rgFilterCheckboxes
          .filter((_) => _.has(_.type))
          .map((_) =>
            (0, _.jsx)(
              _,
              {
                filterOptions: _,
              },
              _.type,
            ),
          ),
      }),
      (0, _.jsx)(_, {
        className: _,
        onClick: () => _.SetFilter(null, !1, !0),
        children: _(`#NotificationsList_Reset`),
      }),
    ],
  });
}
function _(_) {
  let { filterOptions: _ } = _,
    { filters: _ } = _();
  return _.type == 3
    ? (0, _.jsx)(_, {
        filterOptions: _,
        checked: _.get(_.type),
      })
    : (0, _.jsx)(
        _,
        {
          className: _,
          label: _.display,
          checked: _.get(_.type),
          onChange: (_) => _.SetFilter(_.type, _),
        },
        _.type,
      );
}
function _(_) {
  let { threadType: _ } = _,
    _ = _();
  return (0, _.jsx)(_, {
    className: void 0,
    label: _(`#CommentThreadType_` + _),
    checked: _.setItemTypes.has(_),
    onChange: (_) => {
      _
        ? (_.setItemTypes.add(Number(_)),
          _.SetCommentFilter({
            type: _.type,
            setItemTypes: _.setItemTypes,
          }))
        : (_.setItemTypes.delete(Number(_)),
          _.SetCommentFilter({
            type: _.type,
            setItemTypes: _.setItemTypes,
          }));
    },
  });
}
function _(_) {
  let { className: _ } = _,
    _ = _();
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    children: Array.from(_.keys()).map((_) =>
      (0, _.jsx)(
        _,
        {
          threadType: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { expanded: _, children: _ } = _,
    [_, _] = (0, _.useState)(void 0),
    _ = _((_) => {
      let _ = _.target;
      _(_.scrollHeight);
    });
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    style: {
      height: _ ? _ : 0,
    },
    children: (0, _.jsx)(`div`, {
      ref: _,
      children: _,
    }),
  });
}
function _(_) {
  let { filterOptions: _, checked: _ } = _,
    _ = _(),
    _ = _(),
    _ = (_) => {
      _.SetFilter(_.type, _);
    },
    _ = _.size > 2,
    _ = _.size > 1,
    _ = _ || _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(
        _,
        {
          className: _,
          label: _.display,
          checked: _,
          onChange: _,
        },
        _.type,
      ),
      _ &&
        (0, _.jsx)(`div`, {
          className: _(`iOH5sYCnmag-`, _ && `-s3QaLNsc1Q-`),
          children: (0, _.jsx)(_, {
            expanded: _,
            children: (0, _.jsx)(`div`, {
              className: void 0,
              children:
                _ &&
                (0, _.jsx)(_, {
                  className: `-s3QaLNsc1Q-`,
                }),
            }),
          }),
        }),
    ],
  });
}
function _(_, _, _) {
  _.read ||
    (_ && _.button != 0 && _.button != 1) ||
    _.MarkItemRead(_.notification_id),
    _();
}
function _(_) {
  let { rollup: _ } = _;
  _(() => _.item.hidden);
  let [_, _] = _.useState(!1),
    _ = _(
      (0, _.useCallback)((_) => {
        _.isIntersecting && _(!0);
      }, []),
      {
        rootMargin: `600px`,
      },
    ),
    _ = (0, _.useCallback)(() => {
      _.MarkItemHidden(_.item.notification_id);
    }, [_.item.notification_id]);
  if (_.item.hidden) return null;
  if (_.item.hidden && _.type == 5) {
    let _ = _(_);
    if (_(_.state) || _.state == 1) return null;
  }
  let _ = _(_.type);
  return _
    ? (0, _.jsx)(_, {
        controller: `notification`,
        method: _(3),
        submethod: _(4),
        children: (0, _.jsx)(_, {
          ref: _,
          children:
            _ &&
            (0, _.jsx)(_, {
              rollup: _,
              onNotificationClick: _,
              onHide: _,
              location: 4,
              uimode: 3,
            }),
        }),
      })
    : null;
}
var _ = _.forwardRef((_, _) =>
  (0, _.jsx)(`div`, {
    className: _,
    ref: _,
    children: _.children,
  }),
);
function _(_) {
  let _ = _.location.hash;
  return (
    _ && _.startsWith(`#`) && (_ = _.slice(1)),
    (0, _.jsx)(_, {
      hash: _,
    })
  );
}
export { _ as default };
