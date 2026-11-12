import { _, _, _, _, _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _, _, _, _ } from "./chunk~25a6634263.js";
import { _, _, _, _, _, _, _, _, _ } from "./chunk~1fa4b8f2ff.js";
import { _, _, _, _ } from "./chunk~428594b857.js";
import { _ } from "./chunk~726542bc75.js";
import "./chunk~8681f5c764.js";
import { _ } from "./chunk~c55709d290.js";
import { _, _ } from "./chunk~8ceeb46076.js";
import { _ } from "./chunk~0111fcd096.js";
import { _ } from "./chunk~2f8c67b4de.js";
import { _, _ } from "./chunk~70c16cc80c.js";
import { _, _ } from "./chunk~95ecbf576c.js";
import { _, _, _, _, _, _ } from "./chunk~6110f63e8e.js";
import { _ } from "./chunk~b3f4ae92bc.js";
import { _ } from "./chunk~fb7b5d9c48.js";
import { _ } from "./chunk~ec644f97c6.js";
import { _ } from "./chunk~10ec219681.js";
var _ = _(_(), 1),
  _ = _(),
  _ = `m8TRNh1e3As-`;
function _(_, _) {
  return _ > _ + 1 ? _ - _ : _ + 12 - _;
}
function _(_) {
  let {
      strToken: _,
      rtEstimatedNotifcationDate: _,
      strUrlLearnMoreLink: _,
      bInReservationQueue: _,
      bWaitlistIsActive: _,
      reservedHardwareDetail: _,
      bHideLabel: _,
    } = _,
    _ = _.Localize(`#Sale_Reservation_Fallback_V2`),
    _ = !1;
  if (
    (_
      ? (_ = _.Localize(`#Sale_Reservation_Fallback_user_V2`))
      : _ &&
        _ &&
        !_.position_is_waitlist &&
        ((_ = _.Localize(`#Reservation_Join_Waitlist_Cancel_Reservation`)),
        (_ = !0)),
    !_ || !_ || _)
  )
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        elReservationMessage: _,
        strUrlLearnMoreLink: _,
      }),
    });
  let _ = new Date(_ * 1e3),
    _ = _.getMonth() + 1,
    _ = ``,
    _ = ``,
    _ = ``,
    _ = _;
  switch (_) {
    case `#Sale_Reservation_Year`:
    case `#Sale_Reservation_AfterYear`:
      _ = `` + _.getFullYear();
      break;
    case `#Sale_Reservation_MonthYear`:
    case `#Sale_Reservation_AfterMonthYear`:
      ((_ = _(`#Sale_Reservation_MonthNoun_` + _)), (_ = `` + _.getFullYear()));
      break;
    case `#Sale_Reservation_TwoMonthRangeYear`:
      ((_ = _(`#Sale_Reservation_MonthNoun_` + _(_, 1))),
        (_ = _(`#Sale_Reservation_MonthNoun_` + _)),
        (_ = `` + _.getFullYear()));
      break;
    case `#Sale_Reservation_ThreeMonthRangeYear`:
      ((_ = _(`#Sale_Reservation_MonthNoun_` + _(_, 2))),
        (_ = _(`#Sale_Reservation_MonthNoun_` + _)),
        (_ = `` + _.getFullYear()));
      break;
    case `#Sale_Reservation_FourMonthRangeYear`:
      ((_ = _(`#Sale_Reservation_MonthNoun_` + _(_, 3))),
        (_ = _(`#Sale_Reservation_MonthNoun_` + _)),
        (_ = `` + _.getFullYear()));
      break;
    case `#Sale_Reservation_Quarter_ThreeMonths`:
      ((_ = `#Sale_Reservation_Quarter` + (Math.floor((_ - 1) / 3) + 1)),
        (_ = `` + _.getFullYear()));
      break;
    case `#Sale_Reservation_AfterQuarter_ThreeMonths`:
      ((_ = `#Sale_Reservation_AfterQuarter` + (Math.floor((_ - 1) / 3) + 1)),
        (_ = _(`#Sale_Reservation_MonthNoun_` + _)),
        (_ = `` + _.getFullYear()));
      break;
    case `#Sale_Reservation_ByYear`:
      _ = `` + _.getFullYear();
      break;
    case `#Sale_Reservation_ByMonthYear`:
      ((_ = _(`#Sale_Reservation_MonthNoun_` + _)), (_ = `` + _.getFullYear()));
      break;
    case `#Sale_Reservation_BetweenNowAndLastDay`:
      ((_ = _(`#Sale_Reservation_MonthNoun_` + _)),
        (_ = `` + new Date(_.getFullYear(), _.getMonth(), 0).getDate()),
        (_ = `` + _.getFullYear()));
      break;
    case `#Sale_Reservation_RelativeWeekly`:
      {
        let _ = _.GetTimeNowWithOverride(),
          _ = Math.floor((_ - _) / 86400);
        _ < 7 ||
          (_ < 28
            ? ((_ = `#Sale_Reservation_RelativeWeekly_Plural`),
              (_ = `` + Math.floor(_ / 7 + 1)))
            : ((_ = `#Sale_Reservation_RelativeMonthly`),
              (_ = `` + Math.floor(_ / 28 + 1))));
      }
      break;
    case `#Sale_Reservation_AvailabilityUnknown`:
      _ = void 0;
      break;
    default:
      _ = `#Sale_Reservation_Fallback`;
  }
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        children:
          !_ &&
          !!_ &&
          _(
            _
              ? `#Sale_Reservation_YourExpectedDate`
              : `#Sale_Reservation_ExpectedDate`,
          ),
      }),
      (0, _.jsx)(_, {
        elReservationMessage: _ ? _(_, _, _, _, ``) : _,
        strUrlLearnMoreLink: _,
      }),
    ],
  });
}
var _ = `CxHAWKdNnYI-`;
function _(_) {
  let { elReservationMessage: _, strUrlLearnMoreLink: _ } = _;
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          _,
          (0, _.jsx)(_, {
            url: _,
            className: _,
            children: _.Localize(`#Button_Learn`),
          }),
        ],
      })
    : _;
}
var _ = _(`physical_goods`, `application_config`);
function _() {
  let [_] = (0, _.useState)(() => _);
  return _;
}
function _(_) {
  return _.find(
    (_) =>
      _.edistributor == _.edistributor &&
      _.product_identifier == _.product_identifier,
  );
}
var _ = class _ {
  m_mapProductPositionMsgList = new Map();
  m_productListChangeCallback = new _();
  m_messageListChangeCallback = new Map();
  m_steamInterface = null;
  GetKey(_) {
    return `${_.edistributor}_${_.product_identifier}`;
  }
  SortList(_) {
    _.sort((_, _) => _.start_queue_position - _.start_queue_position);
  }
  GetProductListChangeCallback() {
    return this.m_productListChangeCallback;
  }
  GetPositionListChangeCallback(_) {
    let _ = this.GetKey(_);
    return this.GetPositionListViaKeyChangeCallback(_);
  }
  GetPositionListViaKeyChangeCallback(_) {
    return (
      this.m_messageListChangeCallback.has(_) ||
        this.m_messageListChangeCallback.set(_, new _()),
      this.m_messageListChangeCallback.get(_)
    );
  }
  GetAllProducts() {
    return Array.from(this.m_mapProductPositionMsgList.keys()).map((_) => {
      let _ = _.split(`_`);
      return {
        edistributor: Number.parseInt(_[0]),
        product_identifier: _[1],
      };
    });
  }
  GetPositionMessagingForProduct(_) {
    let _ = this.GetKey(_);
    return this.m_mapProductPositionMsgList.get(_);
  }
  AddProductID(_) {
    let _ = this.GetKey(_);
    this.m_mapProductPositionMsgList.has(_) ||
      (this.m_mapProductPositionMsgList.set(_, []),
      this.GetProductListChangeCallback().Dispatch(this.GetAllProducts()));
  }
  async SetPositionMessages(_) {
    let _ = _.Init(_);
    if (_.length == 0)
      return (
        console.log(
          `CReservationMessagingStore.SetPositionMessages - empty list`,
        ),
        !1
      );
    _.forEach((_) => {
      let _ = _.Body().add_settings();
      (_.set_edistributor(_.edistributor),
        _.set_product_identifier(_.product_identifier),
        _.set_start_queue_position(_.start_queue_position),
        _.set_rtime_estimated_notification(_.rtime_estimated_notification),
        _.set_localization_token(_.localization_token));
    });
    let _ = null;
    try {
      let _ = await _.SetReservationPositionMessage(
        this.m_steamInterface.GetServiceTransport(),
        _,
      );
      if (_.GetEResult() == 1) {
        let _ = new Set(),
          _ = Math.floor(Date.now() / 1e3);
        return (
          _.forEach((_) => {
            ((_.accountid = _.accountid), (_.rtime_created = _));
            let _ = this.GetKey(_),
              _ = this.m_mapProductPositionMsgList.get(_),
              _ = _.findIndex(
                (_) => _.start_queue_position == _.start_queue_position,
              ),
              _ = [..._];
            (_ >= 0 ? (_[_] = _) : (_.push(_), this.SortList(_)),
              this.m_mapProductPositionMsgList.set(_, _),
              _.add(this.GetKey(_)));
          }),
          Array.from(_).forEach((_) => {
            this.GetPositionListViaKeyChangeCallback(_).Dispatch(
              this.m_mapProductPositionMsgList.get(_),
            );
          }),
          !0
        );
      }
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `CReservationMessagingStore.SetPositionMessages failed: ` +
          _?.strErrorMsg,
        _,
      ),
      !1
    );
  }
  async DeletePositionMessage(_) {
    let _ = _.Init(_);
    (_.Body().set_edistributor(_.edistributor),
      _.Body().set_product_identifier(_.product_identifier),
      _.Body().set_start_queue_position(_.start_queue_position));
    let _ = null;
    try {
      let _ = await _.DeleteReservationPositionMessage(
        this.m_steamInterface.GetServiceTransport(),
        _,
      );
      if (_.GetEResult() == 1) {
        let _ = this.GetKey(_),
          _ = this.m_mapProductPositionMsgList.get(_),
          _ = _.findIndex(
            (_) => _.start_queue_position == _.start_queue_position,
          ),
          _ = [..._];
        return (
          _.splice(_, 1),
          this.m_mapProductPositionMsgList.set(_, _),
          this.GetPositionListChangeCallback(_).Dispatch(_),
          !0
        );
      }
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `CReservationMessagingStore.SetPositionMessages failed: ` +
          _?.strErrorMsg,
        _,
      ),
      !1
    );
  }
  async ReloadReservationPositionMessages() {
    let _ = _.Init(_);
    return await _.ReloadAllReservationPositionMessages(
      this.m_steamInterface.GetServiceTransport(),
      _,
    );
  }
  static s_Singleton;
  static Get() {
    return (
      _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
      _.s_Singleton
    );
  }
  constructor() {}
  Init() {
    this.m_steamInterface = _(new _(_.WEBAPI_BASE_URL));
    let _ = _(`reservation_queue_position_messages`, `application_config`);
    this.ValidateInputDefault(_) &&
      (_.map((_) => {
        let _ = this.GetKey(_);
        (this.m_mapProductPositionMsgList.has(_) ||
          this.m_mapProductPositionMsgList.set(_, []),
          this.m_mapProductPositionMsgList.get(_).push(_));
      }),
      this.m_mapProductPositionMsgList.forEach((_) => this.SortList(_)));
  }
  GetSteamInterface() {
    return this.m_steamInterface;
  }
  ValidateInputDefault(_) {
    let _ = _;
    return (
      _ &&
      Array.isArray(_) &&
      _.length > 0 &&
      typeof _[0].edistributor == `number` &&
      typeof _[0].product_identifier == `string`
    );
  }
};
(_([_], _.prototype, `AddProductID`, null),
  _([_], _.prototype, `SetPositionMessages`, null),
  _([_], _.prototype, `DeletePositionMessage`, null),
  _([_], _.prototype, `ReloadReservationPositionMessages`, null));
function _() {
  let [_, _] = (0, _.useState)(() => _.Get().GetAllProducts());
  return (_(_.Get().GetProductListChangeCallback(), _), _);
}
function _(_) {
  let [_, _] = (0, _.useState)(() => _.Get().GetPositionMessagingForProduct(_));
  return (_(_.Get().GetPositionListChangeCallback(_), _), _);
}
function _() {
  let _ = _.Get();
  return {
    fnAddProductID: _.AddProductID,
    fnSetPositionMessages: _.SetPositionMessages,
    fnDeletePositionMessage: _.DeletePositionMessage,
    fnReloadReservationPositionMessages: _.ReloadReservationPositionMessages,
  };
}
var _ = `X59ZcWQtAm4-`,
  _ = `_6Zo5eaJ9-rg-`,
  _ = `Ge6Utmxhlt4-`,
  _ = `xw68-Hgdak8-`;
function _(_) {
  let [_, _] = (0, _.useState)(null),
    { fnAddProductID: _ } = _();
  return (
    console.log(`AddProductToReservationPositionMessage selected: `, _),
    (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(_, {
          children: `Add Product SKU:`,
        }),
        (0, _.jsx)(`p`, {
          children: `Select an item for which we want to communicate a reservation status.`,
        }),
        (0, _.jsx)(_, {
          selected: _,
          setSelected: _,
        }),
        (0, _.jsxs)(_, {
          disabled: !_,
          onClick: () => {
            (_(_), _(null));
          },
          children: [
            `Add '`,
            _?.product_description ?? _?.product_identifier,
            `' To List`,
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { selected: _, setSelected: _ } = _,
    _ = (0, _.useRef)(void 0),
    _ = _(),
    _ = _(),
    _ = (0, _.useMemo)(
      () =>
        !_ || !_
          ? []
          : _.filter(
              (_) =>
                _.findIndex(
                  (_) =>
                    _.edistributor == _.edistributor &&
                    _.product_identifier == _.product_identifier,
                ) == -1,
            ).map((_) => ({
              value: _,
              label: `${_.product_description} @ ${_.distributor} - product id: ${_.product_identifier}, part number ${_.part_number} `,
            })),
      [_, _],
    );
  (0, _.useEffect)(() => {
    _?.current && _.current.clearValue();
  }, [_]);
  let _ = _?.find(
    (_) =>
      _ &&
      _.edistributor == _.value.edistributor &&
      _.product_identifier == _.value.product_identifier,
  );
  return (0, _.jsx)(_._default, {
    isSearchable: !0,
    ref: _,
    isMulti: !1,
    isClearable: !0,
    className: _,
    options: _,
    value: _,
    onChange: (_) => {
      _ && _(_.value);
    },
  });
}
function _(_) {
  let _ = _();
  return !_ || _.length == 0
    ? (0, _.jsx)(`div`, {
        children: `No products with reservation position messages exists.`,
      })
    : (0, _.jsx)(`div`, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              productID: _,
            },
            `${_.edistributor}_${_.product_identifier}`,
          ),
        ),
      });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        children: `instructions:`,
      }),
      (0, _.jsx)(`p`, {
        children: `Select an item from the drop-down to the left to set it as a visible item that we're taking reservations for.`,
      }),
      (0, _.jsx)(`p`, {
        children: `Once selected, you can add groupings of item quantities and a description of how we want to describe the date at which those people will recieve their items.`,
      }),
      (0, _.jsx)(`p`, {
        children: `Queue positions are fixed for each user who enters the queue and only go up with new users entering the queue.  Their position doesn't decrease when previous users cancel or purchase the item.`,
      }),
    ],
  });
}
function _(_) {
  return (
    _(),
    (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(_, {
          children: `Force update:`,
        }),
        (0, _.jsx)(`p`, {
          children: `By default, the server caches the list in memory and that list will refresh from SQL every hour. You can use the force button to refresh immediately across all of the servers.`,
        }),
        (0, _.jsx)(`p`, {
          children: `We recommend we force a refresh when all changes are done, otherwise, it will be somewhat random (within an hour) between each server picking up the updates -- so users might get different messages if they reload the page until all servers refresh.`,
        }),
        (0, _.jsx)(_, {
          onClick: (_) => _((0, _.jsx)(_, {}), _(_)),
          children: `Force Reload Definitions on Steam Servers`,
        }),
      ],
    })
  );
}
function _(_) {
  let { productID: _ } = _,
    _ = _(_),
    _ = _?.product_description + ` ` + _?.distributor,
    _ = _(_);
  return _
    ? (0, _.jsxs)(_, {
        bStartMinimized: !1,
        title: _,
        tooltip: `distributor enum: ${_.edistributor}, part number: ${_.part_number}, product identifier: ${_.product_identifier}`,
        children: [
          (0, _.jsx)(_, {
            onClick: (_) =>
              _(
                (0, _.jsx)(_, {
                  productID: _,
                }),
                _(_),
              ),
            children: `Add new start position`,
          }),
          (0, _.jsxs)(`table`, {
            className: _,
            children: [
              (0, _.jsx)(`thead`, {
                children: (0, _.jsxs)(`tr`, {
                  children: [
                    (0, _.jsx)(`th`, {
                      children: `Starting Queue Position`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Estimate Date Receive Invite`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Localized Date`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Entry Created By`,
                    }),
                    (0, _.jsx)(`th`, {}),
                  ],
                }),
              }),
              (0, _.jsx)(`tbody`, {
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      positionMsg: _,
                    },
                    _ + _.start_queue_position,
                  ),
                ),
              }),
            ],
          }),
        ],
      })
    : (0, _.jsxs)(`div`, {
        children: [
          `Unexpected: Could not find ProductID: `,
          _.edistributor,
          ` : `,
          _.product_identifier,
        ],
      });
}
function _(_) {
  let { positionMsg: _ } = _;
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: _(_.start_queue_position),
      }),
      (0, _.jsx)(`td`, {
        children: _(_.rtime_estimated_notification),
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          strUrlLearnMoreLink: void 0,
          rtEstimatedNotifcationDate: _.rtime_estimated_notification,
          strToken: _.localization_token,
          bInReservationQueue: !0,
          bHideLabel: !0,
        }),
      }),
      (0, _.jsxs)(`td`, {
        children: [
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(_, {
              accountID: _.accountid,
            }),
          }),
          (0, _.jsx)(`br`, {}),
          `On: `,
          _(_.rtime_created),
        ],
      }),
      (0, _.jsxs)(`td`, {
        children: [
          (0, _.jsx)(_, {
            onClick: (_) =>
              _(
                (0, _.jsx)(_, {
                  productID: _,
                  existingPositionMsg: _,
                }),
                _(_),
              ),
            children: `Update`,
          }),
          (0, _.jsx)(_, {
            onClick: (_) =>
              _(
                (0, _.jsx)(_, {
                  positionMsg: _,
                }),
                _(_),
              ),
            children: `Delete`,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { productID: _, existingPositionMsg: _, closeModal: _ } = _,
    { fnSetPositionMessages: _ } = _(),
    _ = Math.floor(Date.now() / 1e3),
    [_, _] = (0, _.useState)(_?.start_queue_position || 0),
    [_, _] = (0, _.useState)(_?.rtime_estimated_notification || _ + 86400),
    [_, _] = (0, _.useState)(
      _?.localization_token || `#Sale_Reservation_MonthYear`,
    ),
    _ = _ ? `Update Queue Range` : `Create Queue Range`,
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _,
        closeModal: _,
      })
    : (0, _.jsx)(_, {
        bDisableBackgroundDismiss: !0,
        strTitle: _,
        onCancel: _,
        onOK: () => {
          _.fnSetLoading(!0);
          let _ = {
            ..._,
            start_queue_position: _,
            rtime_estimated_notification: _,
            localization_token: _,
          };
          _([_]).then((_) => {
            _
              ? (_.fnSetSuccess(!0),
                _.fnSetStrSuccess(`Successfully created position`))
              : (_.fnSetSuccess(!1),
                _.fnSetStrError(
                  `Failed, please check console logs and/or try again`,
                ));
          });
        },
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`p`, {
              children: [
                `When we get to accepting reservation number `,
                (0, _.jsx)(`i`, {
                  children: `n`,
                }),
                `, show those users a date they can anticipate to recieve an invite to purchase. If we are choosing a display that shows the day, please account for the date is being shown to each user in their local time.`,
              ],
            }),
            (0, _.jsx)(_, {
              type: `number`,
              min: `0`,
              value: _,
              label: `Starting Queue Position`,
              onChange: (_) =>
                _(Number.parseInt(_?.currentTarget?.value || `0`)),
            }),
            (0, _.jsx)(_, {
              bShowTimeZone: !0,
              strDescription: `Estimated Time Users will receive invite`,
              strDescToolTip: `Everyone above this queue position until the next entry, we expect to have been invited by or on this date`,
              nEarliestTime: _,
              fnGetTimeToUpdate: () => _,
              fnSetTimeToUpdate: _,
            }),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(_, {
              strToken: _,
              fnSetToken: _,
              rtEstimateDate: _,
            }),
          ],
        }),
      });
}
function _(_) {
  let { positionMsg: _, closeModal: _ } = _,
    { fnDeletePositionMessage: _ } = _(),
    _ = `Delete Queue Position ${_(_.start_queue_position)}`,
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _,
        closeModal: _,
      })
    : (0, _.jsx)(_, {
        strTitle: _,
        strDescription: `Are you sure, this action is no undo'able?`,
        onCancel: _,
        onOK: () => {
          (_.fnSetLoading(!0),
            _(_).then((_) => {
              _
                ? (_.fnSetSuccess(!0),
                  _.fnSetStrSuccess(`Successfully delete position`))
                : (_.fnSetSuccess(!1),
                  _.fnSetStrError(
                    `Failed, please check console logs and/or try again`,
                  ));
            }));
        },
      });
}
function _(_) {
  let { closeModal: _ } = _,
    { fnReloadReservationPositionMessages: _ } = _(),
    [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      _().then(() => _(!0));
    }, [_]),
    (0, _.jsx)(_, {
      bAlertDialog: !0,
      strTitle: `Reload Definition`,
      strDescription: _
        ? `Reload sent to server! Now safe to close dialog`
        : `Reloading In Progress...`,
      closeModal: _,
    })
  );
}
var _ = [
  `#Sale_Reservation_MonthYear`,
  `#Sale_Reservation_TwoMonthRangeYear`,
  `#Sale_Reservation_ThreeMonthRangeYear`,
  `#Sale_Reservation_FourMonthRangeYear`,
  `#Sale_Reservation_Quarter_ThreeMonths`,
  `#Sale_Reservation_AfterYear`,
  `#Sale_Reservation_AfterMonthYear`,
  `#Sale_Reservation_Year`,
  `#Sale_Reservation_AfterQuarter_ThreeMonths`,
  `#Sale_Reservation_RelativeWeekly`,
  `#Sale_Reservation_ByYear`,
  `#Sale_Reservation_ByMonthYear`,
  `#Sale_Reservation_BetweenNowAndLastDay`,
  `#Sale_Reservation_AvailabilityUnknown`,
];
function _(_) {
  let { strToken: _, fnSetToken: _, rtEstimateDate: _ } = _,
    _ = (0, _.useMemo)(
      () =>
        _.map((_) => ({
          label: (0, _.jsx)(_, {
            strToken: _,
            rtEstimatedNotifcationDate: _,
            strUrlLearnMoreLink: void 0,
            bInReservationQueue: !0,
          }),
          data: _,
        })),
      [_],
    );
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        strDropDownClassName: _,
        label: `Date Format`,
        rgOptions: _,
        selectedOption: _,
        onChange: (_) => _(_.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: {
          bDisableMouseOverlay: !0,
        },
      }),
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`h3`, {
            children: `This will display to users as: `,
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                children: _(`#Sale_Reservation_ExpectedDate`),
              }),
              (0, _.jsx)(_, {
                strUrlLearnMoreLink: void 0,
                rtEstimatedNotifcationDate: _,
                strToken: _,
                bInReservationQueue: !0,
                bHideLabel: !0,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _(void 0, _),
    children: [
      (0, _.jsx)(`h1`, {
        className: _,
        children: `Lawrence's Reservation Queue Position Messaging Tools`,
      }),
      (0, _.jsx)(`hr`, {
        className: `VO`,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {}),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    children: `Useful Links:`,
                  }),
                  (0, _.jsx)(`ul`, {
                    children: (0, _.jsx)(`li`, {
                      children: (0, _.jsx)(`a`, {
                        href: `${_.STATS_BASE_URL}steamdeck/reservations/`,
                        target: `_blank`,
                        children: `Steam Hardware reservation stats page`,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { _ as default };
