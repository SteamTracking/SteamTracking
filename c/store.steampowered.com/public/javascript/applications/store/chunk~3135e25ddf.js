import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~2185942436.js";
import { _ } from "./chunk~b8ca037aae.js";
import { _ } from "./chunk~cf3721cc1c.js";
import { _, _ } from "./chunk~f4c928a27a.js";
import { _ } from "./chunk~92931c6310.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~466a63c735.js";
import { _ } from "./chunk~331382b23f.js";
import { _ } from "./chunk~a19d1add1e.js";
import { _, _, _ } from "./chunk~4180b1a25d.js";
import { _, _ } from "./chunk~5a091db425.js";
import { _ } from "./chunk~618fb52a90.js";
import { _ } from "./chunk~c55d6473b2.js";
import { _ } from "./chunk~fc8a9e4879.js";
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
} from "./main.js";
import { _ } from "./chunk~7401689b78.js";
import { _ } from "./chunk~383ae316bd.js";
async function _() {
  let _ = await _(`ajaxgetuserdeckcompatcounts`, new URLSearchParams());
  if (!_.counts)
    throw Error(`ajaxgetuserdeckcompatcounts answered without counts`);
  return _.counts;
}
var _ = 3e5;
function _() {
  return [`DeckCompatCounts`];
}
function _() {
  return {
    queryKey: _(),
    queryFn: () => _(),
    staleTime: _,
    retry: !1,
  };
}
function _() {
  let { data: _ } = _(_());
  return _;
}
function _(_, _) {
  switch (_) {
    case 2:
      return _?.playable;
    case 1:
      return _?.unsupported;
    default:
      return _?.verified;
  }
}
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { event: _ } = _.context,
    _ = Number.parseInt(_(_.args)),
    _ = _.useMemo(() => {
      if (_)
        return _.jsondata.sale_sections?.find(
          (_) =>
            _.section_type == `vo_internal` &&
            (_.internal_section_data?.internal_type == `reservation_widget` ||
              _.internal_section_data?.internal_type == `while_supplies_last`),
        );
    }, [_]);
  if (_ && _) {
    let _ = Number.parseInt(_(_.args, `depositpackageid`)),
      _ = Number.parseInt(_(_.args, `psulesspackageid`)),
      _ = _(_.args, `out_of_stock_override`),
      _ = _(_.args, `delivery_override`),
      _ = _(_.args, `delivery_override_out_of_stock`);
    return (0, _.jsx)(_, {
      section: _,
      reservationPackageID: _,
      depositPackageID: _,
      psuLessPackageID: _,
      strOutOfStockOverride: _,
      strDeliveryOverride: _ || _,
      bDeliveryOverrideOnlyIfOutOfStock: !!_,
      PreviewActions: _.PreviewActions,
    });
  }
  return (0, _.jsx)(_.Fragment, {});
}
function _(_) {
  let {
      reservationPackageID: _,
      depositPackageID: _,
      bIsPreview: _,
      psuLessPackageID: _,
      strOutOfStockOverride: _,
      strDeliveryOverride: _,
      bDeliveryOverrideOnlyIfOutOfStock: _,
      section: _,
      PreviewActions: _,
    } = _,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = (0, _.useMemo)(
      () => [
        {
          unique_id: `reservation_bbcode_` + _,
          reservation_package: _,
          deposit_package: _,
          localized_reservation_desc: _([], 32, null),
          localized_out_of_stock_override: _([_ || null], 32, null),
          localized_delivery_override_desc: _([_ || null], 32, null),
          override_delivery_only_out_of_stock: !!_,
          psu_less_package: _,
        },
      ],
      [_, _, _, _, _, _],
    );
  if (!_ || (_ && !_))
    return (0, _.jsx)(_, {
      string: _(`#Loading`),
      size: `small`,
      position: `center`,
    });
  let _ = !_.logged_in || !_.account_restricted_from_purchasing,
    _ =
      _.reservation_state == _.k_EPurchaseReservationState_Reserved
        ? _
        : void 0;
  return (0, _.jsxs)(_, {
    children: [
      _ &&
        (0, _.jsx)(_.Suspense, {
          fallback: null,
          children: (0, _.jsx)(_, {
            bIsPreview: !!_,
            rgReservationDef: _,
          }),
        }),
      !!_.allow_purchase_in_country &&
        (0, _.jsxs)(`div`, {
          className: _[0].unique_id,
          children: [
            (0, _.jsx)(_, {
              reservationDef: _[0],
              hardwareDetail: _,
              bPSULessModel: !1,
              reservedHardwareDetail: _,
            }),
            _ &&
              (0, _.jsx)(_, {
                section: _,
                reservationDef: _[0],
                hardwareDetail: _,
                reservedHardwareDetail: _,
              }),
            _ &&
              _?.allow_purchase_in_country &&
              (0, _.jsx)(_, {
                reservationDef: _[0],
                hardwareDetail: _,
                bPSULessModel: !0,
                reservedHardwareDetail: void 0,
              }),
          ],
        }),
    ],
  });
}
var _ = `wKSQT4ZMQNA-`,
  _ = `NQcSXUQ7jyY-`;
function _(_) {
  let { appID: _, classOverride: _, styleOverride: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(`GameHoverFollowButton`),
    { elDialogElement: _, fnShowLogonDialog: _ } = _(),
    _ = _(_),
    { mutateAsync: _ } = _(_, !_, void 0);
  return (0, _.jsxs)(_, {
    className: _(_, _),
    onClick: async (_) => {
      (_.preventDefault(),
        _.stopPropagation(),
        _.logged_in ? (_(!0), await _(), _.token.reason || _(!1)) : _());
    },
    style: _,
    children: [
      _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
      (0, _.jsx)(`div`, {
        className: _(_, _ && `ijKnSJ3VcqM-`, `FollowGameButton`),
        children: _(_ ? `#Sale_StopFollowingGame` : `#Sale_FollowGame`),
      }),
      _,
    ],
  });
}
var _ = _(_());
function _(_) {
  let _ = Number(_.args.packageid);
  return _
    ? (0, _.jsx)(_, {
        packageID: _,
        display_style: _(_.args.display),
      })
    : null;
}
function _(_) {
  let _ = Number(_.args.packageid),
    _ = Number(_.args.compareid);
  return !_ || !_
    ? null
    : (0, _.jsx)(_, {
        packageID: _,
        compareID: _,
      });
}
function _(_) {
  let _ = _.args[``]?.trim();
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.children,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _.children,
      });
}
var _ = `_8XhS5eUF7W0-`;
function _(_) {
  let { clanAccountID: _, color: _, bgcolor: _ } = _,
    [_, _] = _.useState(!1);
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `Cc5dEagASNE-`),
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    children: (0, _.jsx)(_, {
      nCreatorAccountID: _,
      classOverride: _,
      styleOverride: {
        color: _,
        backgroundColor: _,
      },
      followType: `group`,
    }),
  });
}
function _(_) {
  let { event: _ } = _.context,
    _ = Number(_.args.groupid) || _?.clanSteamID.GetAccountID();
  if (!_) return null;
  let _ = _(_.args.color, `black`),
    _ = _(_.args.bgcolor, `white`);
  return (0, _.jsx)(_, {
    clanAccountID: _,
    color: _,
    bgcolor: _,
  });
}
var _ = `FClDTpQrpCc-`,
  _ = `MYmTqhwexFc-`;
function _(_) {
  let { appid: _, color: _, bgcolor: _ } = _,
    _ = _(),
    _ = _(_),
    _ = _(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      snr: _,
      _: _,
      classOverride: _(_, _, `WishlistButton`),
      styleOverride: {
        color: _,
        backgroundColor: _,
      },
      bShowInGamepadUI: !0,
    }),
  });
}
function _(_) {
  let _ = Number(_.args.appid);
  if (!_) return null;
  let _ = _(_.args.color, `black`),
    _ = _(_.args.bgcolor, `white`);
  return (0, _.jsx)(_, {
    appid: _,
    color: _,
    bgcolor: _,
  });
}
var _ = null;
function _() {
  return (
    (_ ??= new Map([
      [
        `wishlist`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `followgroup`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `classname`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `price`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `pricesavings`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `reservationbutton`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
    ])),
    _
  );
}
var _ = `XJDpqo3kSV4-`;
function _(_) {
  let { appid: _, color: _, bgcolor: _ } = _;
  return (
    _(),
    (0, _.jsx)(_, {
      appID: _,
      classOverride: _(_, _),
      styleOverride: {
        color: _,
        backgroundColor: _,
      },
    })
  );
}
function _(_) {
  let _ = Number(_.args.appid);
  if (!_) return null;
  let _ = _(_.args.color, `black`),
    _ = _(_.args.bgcolor, `white`);
  return (0, _.jsx)(_, {
    appid: _,
    color: _,
    bgcolor: _,
  });
}
var _ = `PrWjrQm2y8g-`;
function _(_) {
  return _ < 10 ? `0` + _ : _;
}
function _(_) {
  let { giveawayid: _ } = _,
    {
      bLoadingGiveawayInfo: _,
      winner_count: _,
      closed: _,
      seconds_until_drawing: _,
    } = _(_);
  return _
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)(`div`, {
              className: `baDBPeinwws-`,
              children:
                _ > 0
                  ? _(`#Giveaway_Closed`, _(_))
                  : _(`#Giveaway_Closed_NoWinnerInfo`),
            }),
          !_ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                _ <= 0
                  ? (0, _.jsxs)(`div`, {
                      className: `Yb8JolxIPe0-`,
                      children: [
                        (0, _.jsx)(_, {
                          size: `small`,
                        }),
                        (0, _.jsx)(`div`, {
                          children: _(`#Giveaway_RandomDraw`),
                        }),
                      ],
                    })
                  : (0, _.jsxs)(`div`, {
                      className: `YnCoxa3m5cw-`,
                      children: [
                        (0, _.jsx)(`div`, {
                          className: `aOXiLwSp1Xc-`,
                          children: _(Math.floor(_ / 60)) + `:` + _(_ % 60),
                        }),
                        (0, _.jsxs)(`div`, {
                          className: `pnbvcAjswZk-`,
                          children: [
                            _(`#Giveaway_CountDown2`),
                            ` `,
                            _(`#Giveaway_KeepWatching`),
                          ],
                        }),
                      ],
                    }),
                _ > 0 &&
                  (0, _.jsxs)(`div`, {
                    className: `-Q8aSdniAKw-`,
                    children: [
                      (0, _.jsx)(`div`, {
                        className: `_4V6epCns4jI-`,
                        children: _(_),
                      }),
                      (0, _.jsx)(`div`, {
                        className: `EVJMTmpF-Vc-`,
                        children: _(`#Giveaway_Congratulation`),
                      }),
                    ],
                  }),
              ],
            }),
        ],
      });
}
function _(_) {
  let { eventModel: _, nEventBadgeID: _ } = _,
    _ = _(_);
  if ((_?.level ?? 0) > 0) {
    let _ = _.level;
    if (_?.BHasSaleEnabled()) {
      let _ = _.GetSaleSectionsByType(`badge_progress`);
      if (_?.length == 1) {
        let _ = _[0].badge_progress;
        if (_?.event_badgeid == _ && _?.granted_by_discovery_queue) {
          let _ = _.levels[_.levels.length - 1].level;
          return (0, _.jsx)(_, {
            eventModel: _,
            nBadgeLevel: _,
            nMaxLevel: _,
          });
        }
      }
    }
    return (0, _.jsx)(`span`, {
      className: `DisplayBadgeProgress`,
      children: _(_),
    });
  }
  return null;
}
function _(_) {
  let { eventModel: _, nBadgeLevel: _, nMaxLevel: _ } = _,
    _ = _.useMemo(() => {
      let _ = _.GetSaleSections().filter(
        (_) => _.section_type == `discoveryqueue`,
      );
      return _?.length > 0 ? _[0] : null;
    }, [_]),
    { storePageFilter: _, eStoreDiscoveryQueueType: _ } = _.useMemo(
      () => _(_, _),
      [_, _],
    ),
    _ = _(_, _),
    _ = Math.min(_ + _, _);
  return (0, _.jsx)(`span`, {
    className: `DisplayBadgeProgress`,
    children: _(_),
  });
}
function _(_) {
  let { event: _ } = _.context,
    _ = Number.parseInt(_(_.args, `eventid`));
  return _.logged_in && _
    ? (0, _.jsx)(_, {
        nEventBadgeID: _,
        eventModel: _,
      })
    : null;
}
function _(_) {
  let { nDoorIndex: _, children: _ } = _,
    _ = _(_),
    _ = _(),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    { elDialogElement: _, fnShowLogonDialog: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        disabled: _,
        onClick: (_) => {
          _ ||
            (_.logged_in
              ? (_(!0),
                _({
                  iDoorIndex: _,
                })
                  .then((_) => {
                    (_ || _(!0), _(!1));
                  })
                  .catch(() => {
                    (_(!0), _(!1));
                  }))
              : _());
        },
        children: _
          ? (0, _.jsx)(`div`, {
              children: _(`#GrantAwardError_Busy`),
            })
          : (0, _.jsxs)(_.Fragment, {
              children: [
                !!_ &&
                  (0, _.jsx)(_, {
                    size: `small`,
                  }),
                !!_ && (0, _.jsx)(_, {}),
                _,
              ],
            }),
      }),
      _,
    ],
  });
}
function _(_) {
  let _ = Number.parseInt(_(_.args)) || 0;
  return _ >= 0 && _ < 32
    ? (0, _.jsx)(_, {
        nDoorIndex: _,
        children: _.children,
      })
    : null;
}
var _ = _(_);
function _(_) {
  let _ = Number.parseInt(_(_.args)),
    { event: _, showErrorInfo: _ } = _.context;
  if (_) {
    let _ = _?.jsondata?.sale_sections?.findIndex((_) => _.unique_id == _);
    if (_ >= 0) {
      let _ = _.GetDayIndexFromEventStart();
      return (0, _.jsx)(_, {
        location: _ ? 2 : 0,
        children: (0, _.jsx)(_, {
          event: _,
          section: _.jsondata.sale_sections[_],
          activeTab: new _(null, _),
          language: _.language,
          nSaleDayIndex: _,
          promotionName: ``,
          appVisibilityTracker: null,
          ePreviewMode: _ ? _.EPreviewMode_Enabled : _.EPreviewMode_Disabled,
        }),
      });
    }
    if (_)
      return (0, _.jsxs)(`div`, {
        className: _,
        children: [`Error could not find sale section `, _],
      });
  }
  return null;
}
var _ = null;
function _() {
  return (
    (_ ??= new Map([
      ...Array.from(_().entries()),
      [
        `itemdef`,
        {
          Constructor: _,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [
        `followgame`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `deckcompatcount`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `deckcompatuserlibrarycount`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `giveawayinfo`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `eventdoorvisibility`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `badgecurrentlevel`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `optindoorquest`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `localize`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `salesection`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
      [
        `reservationbutton`,
        {
          Constructor: _,
          autocloses: !1,
        },
      ],
    ])),
    _
  );
}
function _(_) {
  let { event: _ } = _.context,
    _ = Number.parseInt(_(_.args, `appid`)),
    _ = Number.parseInt(_(_.args, `itemdefid`)),
    _ = Number.parseInt(_(_.args, `maxquantity`)),
    _ = _(_.args, `calltoaction`);
  return !_(_, _, !1) || !_
    ? (0, _.jsx)(_, {
        size: `small`,
        position: `center`,
        string: _(`#Loading`),
      })
    : (0, _.jsx)(_, {
        language: _.language,
        clanAccountID: _.clanSteamID.GetAccountID(),
        itemDefSetting: {
          nAppID: _,
          nItemDefID: _,
          max_quantity: _,
        },
        strCallToAction: _,
      });
}
function _(_) {
  let _ = _();
  if (!_)
    return (0, _.jsx)(_, {
      size: `small`,
    });
  let _ = Number.parseInt(_(_.args));
  return (0, _.jsx)(`span`, {
    children: _(Number(_(_, _))),
  });
}
function _(_) {
  let _ = _(_.accountid, `library`);
  if (!_)
    return (0, _.jsx)(_, {
      size: `small`,
    });
  let _ = Number.parseInt(_(_.args)),
    _ = _.verifiedList?.length || 0;
  switch (_) {
    case 2:
      _ = _.playableList?.length || 0;
      break;
    case 1:
      _ = _.unsupportedList?.length || 0;
      break;
    case 0:
      _ = _.unknownList?.length || 0;
  }
  return (0, _.jsx)(`span`, {
    children: _(Number(_)),
  });
}
function _(_) {
  let _ = Number.parseInt(_(_.args)),
    _ = `hide` in _.args && !!Number.parseInt(_(_.args, `hide`));
  return _ >= 0
    ? (0, _.jsx)(_, {
        nDoorIndex: _,
        bHide: _,
        children: _.children,
      })
    : null;
}
function _(_) {
  let { nDoorIndex: _, bHide: _, children: _ } = _,
    _ = _(_);
  return _ == null
    ? null
    : (_ && !_) || (!_ && _)
      ? (0, _.jsx)(_.Fragment, {
          children: _.children,
        })
      : null;
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: _(
      _.children,
      (0, _.jsx)(`b`, {}),
      (0, _.jsx)(`b`, {}),
      (0, _.jsx)(`b`, {}),
      (0, _.jsx)(`b`, {}),
    ),
  });
}
function _(_) {
  let _ = _(_.args);
  return _
    ? (0, _.jsx)(_, {
        giveawayid: _,
      })
    : (0, _.jsx)(_.Fragment, {});
}
var _ = void 0;
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    PreviewActions: _,
  });
}
var _ = 0;
function _(_, _) {
  (0, _.useEffect)(() => {
    if (!(_ || _))
      return (
        _++,
        () => {
          --_ == 0 && _();
        }
      );
  }, [_, _]);
}
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  ((0, _.useEffect)(() => {
    let _ = window.setTimeout(() => _(!0), _);
    return () => window.clearTimeout(_);
  }, [_]),
    _(_));
}
function _(_) {
  let { bSalePage: _ } = _,
    [_, _] = _.useState(!1);
  return (
    _(_, _),
    _.useEffect(() => {
      (_.Init(_(new _(_.WEBAPI_BASE_URL))), _.Init(), _(!0));
    }, []),
    _.useEffect(() => {
      let _ = _();
      _ && _.locale(_);
    }, []),
    _
      ? _
        ? (0, _.jsx)(_, {
            dictionary: _(),
            children: _.children,
          })
        : _.children
      : null
  );
}
