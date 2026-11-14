var _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      value: _,
      min: _,
      max: _,
      buckets: _ = [],
      children: _,
      focusedBucket: _,
      ..._
    } = _,
    { iFocusedBucket: _, rgBucketPositions: _ } = (0, _.useMemo)(() => {
      let _ = _ ? _.indexOf(_) : -1;
      return {
        iFocusedBucket: _,
        rgBucketPositions: _.map((_) => ({
          bucket: _,
          pctStart: _(_.start ?? _, {
            min: _,
            max: _,
            buckets: _,
            iFocusedBucket: _,
          }),
          pctStop:
            1 -
            _(_.stop ?? _, {
              min: _,
              max: _,
              buckets: _,
              iFocusedBucket: _,
            }),
        })),
      };
    }, [_, _, _, _]);
  return (0, _.jsx)(_, {
    value: {
      min: _,
      max: _,
      buckets: _,
      iFocusedBucket: _,
    },
    children: (0, _.jsxs)(_, {
      paddingY: `2`,
      position: `relative`,
      ..._,
      children: [
        (0, _.jsx)(_, {
          radius: `full`,
          background: `dull-8`,
          height: `8px`,
          position: `relative`,
          overflow: `hidden`,
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                bucket: _,
              },
              _,
            ),
          ),
        }),
        _ !== void 0 &&
          (0, _.jsx)(_, {
            value: _,
          }),
        _,
      ],
    }),
  });
}
function _(_) {
  let {
    bucket: { bucket: _, pctStart: _, pctStop: _ },
  } = _;
  return (0, _.jsx)(`div`, {
    style: {
      background: _.color,
      position: `absolute`,
      inset: 0,
      insetInlineStart: `${_ * 100}%`,
      insetInlineEnd: `${_ * 100}%`,
      transition: `inset-inline-start 250ms ease-in-out, inset-inline-end 250ms ease-in-out`,
    },
  });
}
function _(_) {
  let { value: _, animate: _, ..._ } = _,
    { min: _, max: _, buckets: _, iFocusedBucket: _ } = _(),
    _ = _(_, {
      min: _,
      max: _,
      buckets: _,
      iFocusedBucket: _,
    });
  return (0, _.jsx)(`div`, {
    style: {
      position: `absolute`,
      borderRadius: `2px`,
      bottom: -4,
      insetInlineStart: `calc( ${_ * 100}% - 7px )`,
      transition: _ ? `inset-inline-start 250ms ease-in-out` : void 0,
    },
    ..._,
    children: (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: 14,
      height: `10`,
      viewBox: `0 0 14 10`,
      fill: `none`,
      children: (0, _.jsx)(`path`, {
        _: `M4.15918 8.40918C3.43712 9.19692 2.2289 9.19691 1.50684 8.40918C0.830728 7.67158 0.830851 6.51112 1.50684 5.77344L5.34082 1.59082C6.06289 0.803321 7.27018 0.803214 7.99219 1.59082L11.8262 5.77344C12.502 6.51107 12.5021 7.67162 11.8262 8.40918L11.8174 8.41895C11.1092 9.1717 9.90012 9.20981 9.16602 8.40918L6.66309 5.67871L4.15918 8.40918Z`,
        fill: `#F3F3F3`,
        stroke: `#262B34`,
        strokeWidth: `2`,
      }),
    }),
  });
}
var _ = 0.9;
function _(_, _) {
  let { min: _, max: _, buckets: _, iFocusedBucket: _ } = _,
    _ = (_, _, _) => (_(_, _, _) - _) / (_ - _);
  if (_ === -1) return _(_, _, _);
  let _ = _[_],
    _ = _ >= (_.start ?? _) && _ <= (_.stop ?? _),
    _ = 0.09999999999999998 / (_ === 0 || _ === _.length - 1 ? 1 : 2),
    _ = _ === 0 ? 0 : _,
    _ = _ === _.length - 1 ? 0 : _;
  if (!_) {
    let _ = _ < (_.start ?? _),
      _ = _ ? [_, _.start ?? _] : [_.stop ?? _, _],
      _ = _(_, _[0], _[1]);
    return (_ ? 0 : _ + _) + _ * (_ ? _ : _);
  }
  let _ = [_.start ?? _, _.stop ?? _];
  return _ + _(_, _[0], _[1]) * _;
}
var _ = (0, _.createContext)(null);
function _() {
  let _ = (0, _.useContext)(_);
  return (_(!!_, `Must be used within a parent BucketContinuous!`), _);
}
var _ = [
  {
    stop: 0.07,
    color: `#4A7D12`,
    tag: `WearCategory0`,
  },
  {
    start: 0.07,
    stop: 0.15,
    color: `#82B461`,
    tag: `WearCategory1`,
  },
  {
    start: 0.15,
    stop: 0.38,
    color: `#DCB259`,
    tag: `WearCategory2`,
  },
  {
    start: 0.38,
    stop: 0.45,
    color: `#BB6454`,
    tag: `WearCategory3`,
  },
  {
    start: 0.45,
    color: `#84453B`,
    tag: `WearCategory4`,
  },
];
function _(_) {
  let { property: _ } = _;
  return (0, _.jsx)(_, {
    buckets: _,
    value: _.float_value,
    min: 0,
    max: 1,
  });
}
var _ = `ggzXZcP3Klw-`,
  _ = `Qv1YbBl8g5E-`,
  _ = `n07JNVB2Q7s-`;
function _(_) {
  let {
    description: _,
    asset: _,
    bInteractable: _ = !1,
    hrefGame: _,
    strImageMaxWidth: _ = `330px`,
    layout: _ = `stacked`,
    strDetailMinWidth: _ = `0`,
    assetProperties: _,
    children: _,
  } = _;
  return (0, _.jsx)(_.Root, {
    description: _,
    asset: _,
    bInteractable: _,
    children:
      _ == `split`
        ? (0, _.jsxs)(_, {
            direction: {
              initial: `column`,
              _: `row`,
            },
            gap: `4`,
            align: `stretch`,
            height: `100%`,
            minHeight: `0`,
            children: [
              (0, _.jsx)(_, {
                className: _,
                flexGrow: `1`,
                flexShrink: `1`,
                flexBasis: `0%`,
                minWidth: `0`,
                align: `center`,
                justify: `center`,
                padding: `3`,
                radius: `sm`,
                children: (0, _.jsx)(_.Image, {
                  size: `fit`,
                }),
              }),
              (0, _.jsxs)(_, {
                direction: `column`,
                gapY: `2`,
                flexGrow: `1`,
                flexShrink: `1`,
                flexBasis: `0%`,
                minWidth: {
                  initial: `0`,
                  _: _,
                },
                minHeight: `0`,
                children: [
                  (0, _.jsx)(_.Name, {}),
                  (0, _.jsx)(_.FraudWarnings, {}),
                  (0, _.jsx)(_.GameInfo, {
                    hrefGame: _,
                  }),
                  (0, _.jsxs)(_, {
                    direction: `column`,
                    gapY: `2`,
                    className: _,
                    flexGrow: `1`,
                    flexShrink: `1`,
                    minHeight: `0`,
                    children: [
                      _ ?? (0, _.jsx)(_.AssetProperties, {}),
                      (0, _.jsx)(_.Descriptions, {}),
                      (0, _.jsx)(_.AssetAccessories, {}),
                      (0, _.jsx)(_.Tags, {}),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    flexShrink: `0`,
                    children: _,
                  }),
                ],
              }),
            ],
          })
        : (0, _.jsxs)(_, {
            direction: `column`,
            gapY: `2`,
            minWidth: `0`,
            children: [
              (0, _.jsx)(_, {
                maxWidth: _,
                className: _,
                children: (0, _.jsx)(_.Image, {}),
              }),
              (0, _.jsx)(_.Separator, {}),
              (0, _.jsx)(_.Name, {
                size: `5`,
              }),
              (0, _.jsx)(_.FraudWarnings, {}),
              (0, _.jsx)(_.GameInfo, {
                hrefGame: _,
              }),
              _ ?? (0, _.jsx)(_.AssetProperties, {}),
              (0, _.jsx)(_.Descriptions, {}),
              (0, _.jsx)(_.AssetAccessories, {}),
              (0, _.jsx)(_.Tags, {}),
              _,
            ],
          }),
  });
}
var _ = 1e-5;
function _(_) {
  return {
    nFloor: parseInt(_.wallet_market_minimum) || 1,
    nIncrement: parseInt(_.wallet_currency_increment) || 1,
  };
}
function _(_, _, _) {
  let _ = _;
  if (_ > 1) {
    let _ = _ / _,
      _ = _ < 0 ? -1 : 1,
      _ = Math.abs(_);
    _ = _ * (_ ? Math.ceil(_) : Math.floor(_ + 0.5)) * _;
  }
  return Math.max(_, _);
}
function _(_, _, _, _) {
  return _ <= _ ? _ : _(_, _, _);
}
function _(_, _) {
  let { nFloor: _, nIncrement: _ } = _(_);
  return _(_, _, _, !0);
}
function _(_, _, _, _) {
  let _ = _.fee_rate ?? 0;
  if (_ <= _)
    return {
      nFee: 0,
      bCapped: !1,
    };
  let _ = _(Math.trunc(_ * _), _, _, !1),
    _ = _.fee_cap ? parseInt(_.fee_cap) : 0;
  return _ > 0 && _ >= _
    ? {
        nFee: _,
        bCapped: !0,
      }
    : {
        nFee: _,
        bCapped: !1,
      };
}
function _(_) {
  return !!_?.steam_fee && !!_?.publisher_fee;
}
function _(_, _, _) {
  if (_ == 0)
    return {
      nBasePrice: 0,
      nSteamFee: 0,
      nPublisherFee: 0,
      nTotal: 0,
      bSteamFeeCapped: !1,
      bPublisherFeeCapped: !1,
    };
  let { nFloor: _, nIncrement: _ } = _(_),
    _ = _(_, _, _, !0),
    _ = _(_, _.publisher_fee ?? {}, _, _),
    _ = _(_, _.steam_fee ?? {}, _, _);
  return {
    nBasePrice: _,
    nSteamFee: _.nFee,
    nPublisherFee: _.nFee,
    nTotal: _ + _.nFee + _.nFee,
    bSteamFeeCapped: _.bCapped,
    bPublisherFeeCapped: _.bCapped,
  };
}
function _(_, _, _) {
  let { nFloor: _, nIncrement: _ } = _(_),
    _ = _.publisher_fee?.fee_rate ?? 0,
    _ = _.steam_fee?.fee_rate ?? 0,
    _ = _ - 2 * _,
    _ = (_, _) => Math.min(Math.trunc((_ - _) / (1 + _)), _),
    _ = _(_(_ + _, 0), _, _);
  (_.bSteamFeeCapped != _.bPublisherFeeCapped &&
    (_.bPublisherFeeCapped
      ? (_ = _(_(_, _.nPublisherFee), _, _))
      : _.bSteamFeeCapped && (_ = _(_(_, _.nSteamFee), _, _))),
    _.bPublisherFeeCapped &&
      _.bSteamFeeCapped &&
      (_ = _(_ - (_.nSteamFee + _.nPublisherFee), _, _)));
  for (let _ = 0; _ < 3 && _.nTotal != _; _++)
    if (_.nTotal < _) _ = _(_.nBasePrice + _, _, _);
    else {
      _ = _(_.nBasePrice - _, _, _);
      break;
    }
  return _.nBasePrice < _ ? _(_, _, _) : _;
}
function _(_, _, _) {
  return _(_, _, _).nTotal;
}
function _(_, _, _) {
  return _(_, _, _).nBasePrice;
}
var _ = `_7PTo8IDHeqc-`;
function _(_) {
  let { message: _, prices: _, children: _ } = _,
    _ = (0, _.useRef)(_);
  return (
    _ && (_.current = _),
    (0, _.jsxs)(_, {
      direction: `column`,
      align: `stretch`,
      justify: `end`,
      paddingTop: `3`,
      children: [
        (0, _.jsx)(_, {
          visible: !!_,
          children: (0, _.jsx)(_, {
            justify: `end`,
            paddingBottom: `4`,
            children: _.current,
          }),
        }),
        (0, _.jsxs)(_, {
          direction: `column`,
          gap: `4`,
          align: `stretch`,
          children: [_, _],
        }),
      ],
    })
  );
}
function _(_) {
  let {
      currency: _,
      marketLow: _,
      buyerPrice: _,
      sellerPrice: _,
      defaultBuyerPrice: _,
      defaultSellerPrice: _,
      quantity: _,
      onBuyerPriceChange: _,
      onSellerPriceChange: _,
      sellerPriceStatus: _,
      sellerInputRef: _,
      children: _,
      summary: _,
    } = _,
    _ = _(_),
    _ =
      _ > 1
        ? (0, _.jsx)(_, {
            size: `3`,
            align: `end`,
            children: _.Localize(
              `#RepriceListing_Dialog_PerUnit`,
              _,
              _((_ ?? 0) * _, _),
            ),
          })
        : null;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    align: `end`,
    children: [
      (0, _.jsxs)(_, {
        align: `center`,
        justify: `end`,
        gap: `2`,
        wrap: `wrap`,
        children: [
          _ != null &&
            (0, _.jsxs)(_, {
              align: `center`,
              gap: `2`,
              children: [
                (0, _.jsx)(_, {
                  size: `3`,
                  contrast: `description`,
                  whiteSpace: `nowrap`,
                  children: _.Localize(`#ManageListing_Dialog_MarketLow`),
                }),
                (0, _.jsx)(_, {
                  size: `3`,
                  contrast: `description`,
                  whiteSpace: `nowrap`,
                  children: _,
                }),
              ],
            }),
          _,
          (0, _.jsxs)(_, {
            align: `center`,
            gap: `2`,
            wrap: `nowrap`,
            children: [
              (0, _.jsxs)(_, {
                align: `center`,
                gap: `2`,
                children: [
                  (0, _.jsx)(_, {
                    size: `3`,
                    weight: `heavy`,
                    whiteSpace: `nowrap`,
                    children: _.Localize(`#RepriceListing_Dialog_BuyerPays`),
                  }),
                  (0, _.jsx)(_, {
                    currency: _,
                    value: _,
                    defaultValue: _,
                    editable: !!_,
                    onValueChange: _,
                    placeholder: 0,
                  }),
                ],
              }),
              (0, _.jsxs)(_, {
                align: `center`,
                gap: `2`,
                children: [
                  (0, _.jsx)(_, {
                    size: `3`,
                    weight: `heavy`,
                    whiteSpace: `nowrap`,
                    children: _.Localize(`#RepriceListing_Dialog_YouReceive`),
                  }),
                  (0, _.jsx)(_, {
                    currency: _,
                    value: _,
                    defaultValue: _,
                    editable: !!_,
                    onValueChange: _,
                    status: _,
                    inputRef: _,
                    placeholder: 0,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      _ === void 0 ? _ : _,
    ],
  });
}
function _(_) {
  let {
      value: _,
      defaultValue: _,
      currency: _,
      editable: _,
      onValueChange: _,
      status: _,
      inputRef: _,
      placeholder: _,
      wide: _,
    } = _,
    _ = _ ?? 0,
    _ = _.bWholeUnitsOnly
      ? Math.round(_ / 100).toString()
      : (_ / 100).toFixed(2),
    _ = Math.max(_.length, _ ? 9 : 4) + _.strSymbol.length + 0.5,
    _ = _ || _,
    _ = _ ? `calc( ${_}ch + 2 * var(--spacing-2) )` : `${_}ch`;
  return (0, _.jsx)(_, {
    className: _(_, !_ && `_2lAPJj6MZgE-`),
    width: _
      ? {
          initial: `100%`,
          _: _,
        }
      : _,
    children: (0, _.jsx)(_, {
      size: `2`,
      variant: _ ? `inset` : `bare`,
      currency: _,
      value: _,
      defaultValue: _,
      onValueChange: _ ?? (() => void 0),
      readOnly: !_,
      tabIndex: _ ? void 0 : -1,
      gamepadFocusable: _,
      status: _,
      inputRef: _,
      placeholder: _,
    }),
  });
}
function _(_) {
  let { children: _, type: _ } = _;
  return (0, _.jsx)(_, {
    size: `3`,
    align: `end`,
    color:
      _ == `error`
        ? `text-error`
        : _ == `warning`
          ? `text-warning`
          : `accent-11`,
    whiteSpace: `pre-wrap`,
    children: _,
  });
}
var _ = `nkpiiCgJzc4-`,
  _ = `RhxjftThqKs-`;
function _(_) {
  let {
      onClose: _,
      children: _,
      fillHeight: _,
      fitContent: _,
      onSubmit: _,
      ..._
    } = _,
    _ = _(
      _,
      _ && `Nb2JjlzZ-o0-`,
      _ && `RU2W0IZBNTI-`,
      `noOpinionatedGlobalStyles`,
    );
  return (0, _.jsxs)(_, {
    onClose: _,
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          size: `5`,
          onClick: _,
        }),
      }),
      (0, _.jsx)(`form`, {
        onSubmit: (_) => {
          (_.preventDefault(), _ && _());
        },
        children: (0, _.jsx)(_, {
          direction: `column`,
          gap: `4`,
          padding: {
            initial: `3`,
            _: `5`,
          },
          height: _ ? `100%` : void 0,
          minHeight: _ ? `0` : void 0,
          ..._,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { lastUpdate: _, agreed: _, onAgreeChange: _, disabled: _ } = _,
    _ = _(_),
    _ = `${_.STORE_BASE_URL}subscriber_agreement`;
  return (0, _.jsx)(_, {
    checked: _,
    onChange: _,
    disabled: _,
    children: (0, _.jsx)(_, {
      size: `3`,
      children: _.LocalizeReact(
        `#PurchaseDialog_SSA_Link`,
        (0, _.jsx)(_, {
          href: _,
          target: `_blank`,
          children: _.Localize(`#PurchaseDialog_SSA_Link_Title`),
        }),
        _,
      ),
    }),
  });
}
function _(_) {
  let { selling: _ } = _;
  return (0, _.jsx)(_, {
    size: `3`,
    children: _.Localize(_ ? `#SellDialog_EU_SSA` : `#PurchaseDialog_EU_SSA`),
  });
}
function _(_, _) {
  if (typeof window > `u`) return;
  let _ = Reflect.get(window, `ReactNativeWebView`);
  typeof _?.postMessage == `function` &&
    _.postMessage(
      JSON.stringify({
        event_name: `marketconfirm`,
        type: _,
        creator_id: _,
      }),
    );
}
var _ = Object.assign(_, {
  BillingInfoSection: _,
  Heading: _,
  Loading: _,
  ConfirmationPoller: _,
  FatalError: _,
  NonFatalError: _,
  SSAAgreement: _,
  EUSSAAgreement: _,
});
function _(_) {
  let { onClose: _, children: _, fillHeight: _, onSubmit: _, ..._ } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    fillHeight: _,
    ..._,
    children: _,
  });
}
function _(_) {
  let { walletBalance: _, accountName: _, hasFunds: _, ..._ } = _;
  return (0, _.jsx)(_, {
    background: `dull-5`,
    padding: {
      initial: `3`,
      _: `5`,
    },
    children: (0, _.jsxs)(_, {
      columns: {
        initial: `1fr`,
        _: `max-content 1fr`,
      },
      gap: `2`,
      children: [
        (0, _.jsx)(_, {
          children: _.Localize(`#PurchaseDialog_PaymentMethod_Label`),
        }),
        (0, _.jsxs)(_, {
          size: `4`,
          color: `green-8`,
          children: [
            _.Localize(`#PurchaseDialog_PaymentMethod_Wallet`),
            _ ? ` (${_})` : ``,
          ],
        }),
        (0, _.jsx)(_, {
          children: _.Localize(`#PurchaseDialog_SteamAccount_Label`),
        }),
        (0, _.jsx)(_, {
          size: `4`,
          contrast: `title`,
          children: _,
        }),
        _ &&
          (0, _.jsx)(_, {
            ..._,
          }),
      ],
    }),
  });
}
function _(_) {
  let { billingStates: _, billingCountry: _, ..._ } = _,
    _ = (0, _.useMemo)(() => Object.keys(_).length > 0, [_]);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _.Localize(`#PurchaseDialog_BillingInfo_Label`),
      }),
      (0, _.jsxs)(_, {
        columns: `1fr 1fr`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            property: `firstName`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_FirstName`),
            ..._,
            maxLength: 100,
          }),
          (0, _.jsx)(_, {
            property: `lastName`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_LastName`),
            ..._,
            maxLength: 100,
          }),
          (0, _.jsx)(_, {
            property: `address`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_Address`),
            ..._,
            maxLength: 128,
            wide: !0,
          }),
          (0, _.jsx)(_, {
            property: `addressTwo`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_AddressLine2`),
            ..._,
            maxLength: 128,
            wide: !0,
          }),
          (0, _.jsx)(_, {
            property: `city`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_City`),
            ..._,
            maxLength: 50,
            wide: !_,
          }),
          _ &&
            (0, _.jsx)(_, {
              ..._,
              billingStates: _,
            }),
          (0, _.jsx)(_, {
            property: `postalCode`,
            label: _.Localize(`#PurchaseDialog_BillingInfo_ZipPostal`),
            ..._,
            maxLength: 16,
          }),
          (0, _.jsx)(_, {
            label: _.Localize(`#PurchaseDialog_BillingInfo_Country`),
            children: (0, _.jsx)(_, {
              size: `3`,
              contrast: `title`,
              _: `div`,
              marginTop: `2`,
              children: _,
            }),
          }),
          (0, _.jsx)(_, {
            gridColumn: `span 2`,
            children: (0, _.jsx)(_, {
              marginTop: `2`,
              checked: !!_.state.bSaveAddress,
              onChange: (_) =>
                _.onChange({
                  ..._.state,
                  bSaveAddress: _,
                }),
              children: (0, _.jsx)(_, {
                size: `3`,
                children: _.Localize(`#PurhcaseDialog_SaveMyAddress`),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { state: _, onChange: _, property: _, maxLength: _, ..._ } = _;
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      value: _[_] || ``,
      onTextChange: (_) =>
        _({
          ..._,
          [_]: _,
        }),
      maxLength: _,
    }),
  });
}
function _(_) {
  let { state: _, onChange: _, billingStates: _ } = _,
    _ = _.state || null,
    { rgStates: _, stateCodeToName: _ } = (0, _.useMemo)(() => {
      let _ = Object.values(_);
      return {
        rgStates: _.map(({ state_code: _ }) => _),
        stateCodeToName: _.reduce(
          (_, _) => ((_[_.state_code] = _.state_name), _),
          {},
        ),
      };
    }, [_]);
  return (0, _.jsx)(_, {
    label: _.Localize(`#PurchaseDialog_BillingInfo_StateProvince`),
    children: (0, _.jsx)(_, {
      options: _,
      selectedValue: _,
      onSelectionChange: (_) =>
        _({
          ..._,
          state: _,
        }),
      getOptionLabel: (_) => _[_],
    }),
  });
}
function _(_) {
  let { label: _, children: _, wide: _ } = _;
  return (0, _.jsxs)(_, {
    gridColumn: {
      initial: `span 2`,
      _: _ ? `span 2` : void 0,
    },
    children: [
      (0, _.jsx)(_, {
        size: `2`,
        contrast: `description`,
        children: _,
      }),
      _,
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    size: `4`,
    contrast: {
      initial: `subtitle`,
      _: `description`,
    },
    weight: {
      initial: `medium`,
      _: void 0,
    },
    children: _.children,
  });
}
function _() {
  return (0, _.jsx)(_, {
    align: `center`,
    justify: `center`,
    marginBottom: `6`,
    marginTop: `3`,
    minHeight: `300px`,
    children: (0, _.jsx)(_, {
      size: `5`,
    }),
  });
}
function _() {
  return _({
    queryKey: [`market`, `userbillinginfo`],
    queryFn: async () =>
      (
        await fetch(`/market/userbillinginfo`, {
          credentials: `include`,
        })
      ).json(),
  });
}
function _(_, _) {
  return _({
    queryKey: [`market`, `fees`, _],
    enabled: !1,
    queryFn: async () => ({}),
  });
}
function _(_ = `buy`) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      _(_.logged_in && new URLSearchParams(location.search).get(_) === `1`);
    }, [_]),
    (0, _.useEffect)(
      () => () => {
        let _ = new URLSearchParams(location.search);
        _.get(_) && (_.delete(_), _(`?${_.toString()}`));
      },
      [_],
    ),
    [
      _,
      (_) => {
        _(_);
        let _ = new URLSearchParams(location.search);
        (_ ? _.set(_, `1`) : _.delete(_), _(`?${_.toString()}`));
      },
    ]
  );
}
function _(_) {
  let { confirmation: _, onRetry: _, serverInfo: _ } = _,
    _ = (0, _.useRef)(_);
  ((_.current = _),
    (0, _.useEffect)(() => {
      let _ = setTimeout(() => _.current(), 1500);
      return () => clearTimeout(_);
    }, [_]));
  let _ = _(_.confirmation_type);
  return (0, _.jsxs)(_, {
    background: `dull-5`,
    padding: {
      initial: `3`,
      _: `5`,
    },
    direction: `column`,
    gap: `2`,
    align: `center`,
    children: [
      (0, _.jsx)(_, {
        align: `center`,
        children: _.Localize(`#PurchaseDialog_Confirmation_Title`),
      }),
      (0, _.jsx)(_, {
        contrast: `subtitle`,
        align: `center`,
        children: _.body,
      }),
      (0, _.jsx)(_, {
        size: `4`,
      }),
      (0, _.jsx)(_, {
        size: `2`,
        align: `center`,
        children: _.description,
      }),
    ],
  });
}
function _(_) {
  switch (_) {
    case 1:
      return {
        body: _.Localize(`#PurchaseDialog_Confirmation_Body_Email`),
        description: _.Localize(
          `#PurchaseDialog_Confirmation_Description_Email`,
        ),
      };
    case 2:
      return {
        body: _.Localize(`#PurchaseDialog_Confirmation_Body_Mobile`),
        description: _.Localize(
          `#PurchaseDialog_Confirmation_Description_Mobile`,
        ),
      };
    default:
      return {
        body: _.Localize(`#PurchaseDialog_Confirmation_Body_Unknown`),
        description: _.Localize(
          `#PurchaseDialog_Confirmation_Description_Unknown`,
        ),
      };
  }
}
function _(_, _) {
  let _ = [],
    _ = [];
  if (
    ((_.firstName?.length || 0) < 1 &&
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_FirstName`)),
    (_.lastName?.length || 0) < 1 &&
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_LastName`)),
    (_.address?.length || 0) < 1 &&
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_Address`)),
    (_.city?.length || 0) < 1 &&
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_City`)),
    (_.postalCode?.length || 0) < 1 &&
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_ZipPostal`)),
    Object.keys(_.billing_states).length > 0)
  ) {
    if ((_.state?.length || 0) < 1)
      _.push(_.Localize(`#PurchaseDialog_BillingInfo_StateProvince`));
    else if (_.country_code === `US` && _.city?.length) {
      let _ = [`AE`, `AP`, `AA`].includes(_.state || ``),
        _ = [`APO`, `FPO`, `DPO`].includes(_.city || ``);
      _ &&
        !_ &&
        _.push(_.Localize(`#PurchaseDialog_Error_InvalidMilitaryCity`));
    }
  }
  return (
    _.country_code === `US` &&
      (_.postalCode?.length || 0) < 5 &&
      _.push(_.Localize(`#PurchaseDialog_Error_InvalidPostal`)),
    _.length
      ? [_.Localize(`#PurchaseDialog_Error_MissingRequired`), ..._].join(`
	`)
      : _.length
        ? _.join(`
`)
        : null
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    background: `dull-5`,
    padding: {
      initial: `3`,
      _: `5`,
    },
    children: (0, _.jsx)(_, {
      align: `center`,
      size: `4`,
      color: `red-9`,
      _: `div`,
      children: _.children,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    align: `center`,
    size: `4`,
    color: `red-9`,
    _: `div`,
    whiteSpace: `pre-wrap`,
    children: _.children,
  });
}
function _(_, _) {
  return !!_ && parseInt(_.wallet_balance) >= _;
}
function _(_) {
  let { appid: _, properties: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsx)(_, {
        direction: `column`,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              appid: _,
              property: _,
              contrast: `title`,
              size: `3`,
              weight: `regular`,
            },
            _.propertyid,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { appid: _, properties: _ } = _;
  if (!_(_)) return null;
  let _ = _.find(({ propertyid: _ }) => _ === 2);
  return _
    ? (0, _.jsx)(_, {
        property: _,
      })
    : null;
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_GetSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.has_settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            has_settings: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_sale_push: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_wishlist_push: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            chat_notification_level: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            notify_direct_chat: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            notify_group_chat: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_event_push: {
              _: 8,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_GetSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.allow_sale_push || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            allow_sale_push: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_wishlist_push: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            chat_notification_level: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            notify_direct_chat: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            notify_group_chat: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_event_push: {
              _: 7,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_SetSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_SetSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.deviceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            deviceid: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            push_enabled: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            app_version: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            os_version: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            device_model: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            twofactor_device_identifier: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            mobile_app: {
              _: 8,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_RegisterMobileDevice_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.unique_deviceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            unique_deviceid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_RegisterMobileDevice_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.deviceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            deviceid: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_DeregisterMobileDevice_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            app_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            push_enabled_only: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            minimum_version: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            twofactor_device_identifier: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_HasMobileDevice_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.found_device || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            found_device: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            up_to_date: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            max_version: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_HasMobileDevice_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.authenticator_gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            authenticator_gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            device_identifier: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileApp_GetMobileSummary_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stale_time_seconds || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stale_time_seconds: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_authenticator_valid: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            owned_games: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            friend_count: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            wallet_balance: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileApp_GetMobileSummary_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`MobilePerAccount.GetSettings#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`MobilePerAccount.SetSettings#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetSettings = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`MobileDevice.RegisterMobileDevice#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.RegisterMobileDevice = _;
  function _(_, _) {
    return _.SendNotification(
      `MobileDevice.DeregisterMobileDevice#1`,
      _(_, _),
      {
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.DeregisterMobileDevice = _;
  function _(_, _, _) {
    return _.SendMsg(`MobileDevice.HasMobileDevice#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.HasMobileDevice = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`MobileApp.GetMobileSummary#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetMobileSummary = _;
})((_ ||= {}));
function _(_) {
  return _ && _(_.nPrice, _.eCurrency);
}
function _(_) {
  let {
      onClose: _,
      activeListing: _,
      bPendingConfirmation: _,
      setCanceled: _,
      onRepriced: _,
      marketLow: _,
    } = _,
    { listing: _, description: _ } = _,
    [_, _] = (0, _.useState)(`summary`),
    { eCurrency: _, nSellerPrice: _, nBuyerPrice: _, nQuantity: _ } = _(_);
  return (0, _.jsxs)(_, {
    activeListing: _,
    onClose: _,
    children: [
      _ == `summary` &&
        (0, _.jsx)(_, {
          prices: (0, _.jsx)(_, {
            currency: _,
            marketLow: _(_),
            buyerPrice: _,
            sellerPrice: _,
            defaultBuyerPrice: _,
            defaultSellerPrice: _,
            quantity: _,
          }),
          children: (0, _.jsxs)(_, {
            columns: `1fr`,
            gap: `2`,
            children: [
              (0, _.jsx)(_, {
                color: `dull`,
                onClick: () => _(`remove`),
                children: _.Localize(
                  _
                    ? `#MySellListings_CancelButton`
                    : `#MySellListings_RemoveButton`,
                ),
              }),
              !1,
            ],
          }),
        }),
      _ == `reprice` &&
        (0, _.jsx)(_, {
          activeListing: _,
          eCurrency: _,
          marketLow: _,
          currentSellerPrice: _,
          currentBuyerPrice: _,
          quantity: _,
          onBack: () => _(`summary`),
          onClose: _,
          onRepriced: _,
        }),
      _ == `remove` &&
        (0, _.jsx)(_, {
          listing_id: _.listingid,
          description: _,
          eCurrency: _,
          currentSellerPrice: _,
          currentBuyerPrice: _,
          quantity: _,
          bPendingConfirmation: _,
          setCanceled: _,
          onClose: _,
          onBack: () => _(`summary`),
        }),
    ],
  });
}
function _(_) {
  let _ = _(_.currencyid),
    _ = parseInt(_.original_price_per_unit ?? `0`);
  return {
    eCurrency: _,
    nSellerPrice: _,
    nBuyerPrice:
      _ +
      parseInt(_.steam_fee_per_unit ?? `0`) +
      parseInt(_.publisher_fee_per_unit ?? `0`),
    nQuantity: parseInt(_.asset?.amount ?? `1`) || 1,
  };
}
function _(_) {
  let { activeListing: _, onClose: _, children: _ } = _,
    { description: _ } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    fillHeight: !0,
    children: (0, _.jsx)(_, {
      layout: `split`,
      description: _,
      asset: _.asset,
      hrefGame: _.AppHome(_.appid),
      strDetailMinWidth: _,
      assetProperties: (0, _.jsx)(_, {
        appid: _.appid,
        properties: _.asset?.asset_properties ?? [],
      }),
      children: _,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    justify: `end`,
    align: `center`,
    gap: `2`,
    children: _.children,
  });
}
var _ = `160px`,
  _ = `500px`;
function _(_) {
  let {
      activeListing: _,
      eCurrency: _,
      marketLow: _,
      currentSellerPrice: _,
      currentBuyerPrice: _,
      quantity: _,
      onBack: _,
      onClose: _,
      onRepriced: _,
    } = _,
    { listing: _, description: _ } = _,
    _ = _(),
    _ = _(_.appid ?? 0, _),
    _ = _.data?.wallet_info,
    _ = _.data,
    _ = _.isPending || !1;
  return _ || !_ || !_(_)
    ? (0, _.jsx)(_, {
        message: _
          ? (0, _.jsx)(_, {
              size: `3`,
            })
          : (0, _.jsx)(_, {
              type: `error`,
              children: _.Localize(`#RepriceListing_Dialog_GenericError`),
            }),
        prices: (0, _.jsx)(_, {
          currency: _,
          marketLow: _(_),
          buyerPrice: _,
          sellerPrice: _,
          defaultBuyerPrice: _,
          defaultSellerPrice: _,
          quantity: _,
        }),
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            color: `dull`,
            onClick: _,
            children: _.Localize(`#ManageListing_Dialog_Back`),
          }),
        }),
      })
    : (0, _.jsx)(_, {
        listingID: _.listingid,
        currencyID: parseInt(_.currencyid),
        eCurrency: _,
        marketLow: _,
        currentSellerPrice: _,
        currentBuyerPrice: _,
        quantity: _,
        fees: _,
        rounding: _,
        onBack: _,
        onClose: _,
        onRepriced: _,
      });
}
function _(_) {
  let {
      listingID: _,
      currencyID: _,
      eCurrency: _,
      marketLow: _,
      currentSellerPrice: _,
      currentBuyerPrice: _,
      quantity: _,
      fees: _,
      rounding: _,
      onBack: _,
      onClose: _,
      onRepriced: _,
    } = _,
    _ = _(),
    [_, _] = (0, _.useState)(_),
    _ = _(_, _, _),
    _ = (_) => _(_(_, _, _)),
    _ = _({
      mutationFn: (_) =>
        _(`/market/actions`, `UpdateSellListingPrice`, _, _, _),
      onSuccess: (_) => {
        _.eResult == 1 &&
          _.eUpdateResult == 1 &&
          (_.invalidateQueries({
            queryKey: [`listings`],
          }),
          _?.(),
          _.bRequiresConfirmation && _.eConfirmationMethod == 2 && _(14, _));
      },
    }),
    _ = _.isSuccess || _.isError,
    _ = _.isSuccess && _.data.eResult == 1 && _.data.eUpdateResult == 1,
    _ = _(_, _) == _,
    _ = _ < _,
    _ = _.isPending || _,
    _ = _ && !_.data.bRequiresConfirmation ? (_.data.nPrice ?? _) : _,
    _ = _ && !_.data.bRequiresConfirmation ? _(_, _, _) : _,
    _;
  return (
    _
      ? (_ = (0, _.jsx)(_, {
          result: _.isSuccess ? _.data : null,
          eCurrency: _,
          fees: _,
          rounding: _,
          quantity: _,
        }))
      : _ &&
        (_ = (0, _.jsx)(_, {
          type: `warning`,
          children: _.Localize(
            `#RepriceListing_Dialog_DecreaseNeedsConfirmation`,
          ),
        })),
    (0, _.jsx)(_, {
      message: _,
      prices: (0, _.jsx)(_, {
        currency: _,
        marketLow: _ ? void 0 : _(_),
        buyerPrice: _,
        sellerPrice: _,
        defaultBuyerPrice: _,
        defaultSellerPrice: _,
        quantity: _,
        onBuyerPriceChange: _ ? void 0 : _,
        onSellerPriceChange: _ ? void 0 : _,
      }),
      children: (0, _.jsxs)(_, {
        children: [
          _ &&
            (0, _.jsx)(_, {
              color: `dull`,
              onClick: _,
              children: _.Localize(`#Button_Close`),
            }),
          !_ &&
            (0, _.jsx)(_, {
              color: `dull`,
              onClick: _,
              disabled: _.isPending,
              children: _.Localize(`#ManageListing_Dialog_Back`),
            }),
          !_ &&
            (0, _.jsx)(_, {
              minWidth: _,
              onClick: () => _.mutate(_),
              loading: _.isPending,
              disabled: _,
              children: _.Localize(`#RepriceListing_Dialog_Submit`),
            }),
        ],
      }),
    })
  );
}
function _(_) {
  let {
      listing_id: _,
      description: _,
      eCurrency: _,
      currentSellerPrice: _,
      currentBuyerPrice: _,
      quantity: _,
      bPendingConfirmation: _,
      setCanceled: _,
      onClose: _,
      onBack: _,
    } = _,
    _ = _({
      mutationFn: async () => _(`/market/actions`, `CancelSellListing`, _),
      onSuccess: (_) => {
        _ == 1 && (_(!0), _());
      },
    }),
    _ =
      _.isError || (_.isSuccess && _.data != 1)
        ? (0, _.jsx)(_, {
            type: `error`,
            children: _.Localize(
              _
                ? `#MySellListings_Cancel_Error`
                : `#MySellListings_Remove_Error`,
              _.isSuccess ? _.data : 0,
            ),
          })
        : (0, _.jsx)(_, {
            size: `3`,
            align: `end`,
            children: _.Localize(
              _
                ? `#MySellListings_CancelDialog_Confirmation`
                : `#MySellListings_RemoveDialog_Confirmation`,
              _.market_name,
            ),
          });
  return (0, _.jsx)(_, {
    message: _,
    prices: (0, _.jsx)(_, {
      currency: _,
      buyerPrice: _,
      sellerPrice: _,
      defaultBuyerPrice: _,
      defaultSellerPrice: _,
      quantity: _,
    }),
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          color: `dull`,
          onClick: _,
          disabled: _.isPending,
          children: _.Localize(`#ManageListing_Dialog_Back`),
        }),
        (0, _.jsx)(_, {
          minWidth: _,
          loading: _.isPending,
          onClick: () => _.mutate(),
          children: _.Localize(
            _
              ? `#MySellListings_CancelDialog_AcceptButton`
              : `#MySellListings_RemoveDialog_AcceptButton`,
          ),
        }),
      ],
    }),
  });
}
function _(_) {
  switch (_) {
    case 78:
      return `#RepriceListing_Dialog_WalletLimit`;
    case 80:
      return `#RepriceListing_Dialog_Unavailable`;
    case 10:
    case 40:
    case 44:
      return `#RepriceListing_Dialog_TryAgain`;
    case 11:
      return `#RepriceListing_Dialog_CannotReprice`;
    default:
      return `#RepriceListing_Dialog_GenericError`;
  }
}
function _(_) {
  let { result: _, eCurrency: _, fees: _, rounding: _, quantity: _ } = _;
  if (!_)
    return (0, _.jsx)(_, {
      type: `error`,
      children: _.Localize(`#RepriceListing_Dialog_GenericError`),
    });
  let _ = _.eResult == 1 ? _.eUpdateResult : _.eResult;
  if (_ == 84) {
    let _ = Math.max(1, Math.ceil((_.csecCooldown ?? 0) / 60));
    return (0, _.jsx)(_, {
      type: `error`,
      children: _.Localize(`#RepriceListing_Dialog_Cooldown`, _),
    });
  }
  if (_ != 1)
    return (0, _.jsx)(_, {
      type: `error`,
      children: _.Localize(_(_)),
    });
  if (_.bRequiresConfirmation) {
    let _ = _.eConfirmationMethod == 2;
    return (0, _.jsx)(_, {
      type: `warning`,
      children: _.Localize(
        _
          ? `#RepriceListing_Dialog_ConfirmOnPhone`
          : `#RepriceListing_Dialog_ConfirmByEmail`,
      ),
    });
  }
  let _ = _(_(_.nPrice ?? 0, _, _), _);
  return (0, _.jsx)(_, {
    type: `success`,
    children: _.Localize(
      _ > 1
        ? `#RepriceListing_Dialog_SuccessPerUnit`
        : `#RepriceListing_Dialog_Success`,
      _,
    ),
  });
}
