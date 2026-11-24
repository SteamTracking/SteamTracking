var _ = _(_(), 1),
  _ = _();
function _(_) {
  return (0, _.jsx)(_, {
    onClose: _.onClose,
    children: (0, _.jsx)(_, {
      padding: {
        initial: `4`,
        _: `5`,
      },
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
function _(_) {
  let { apps: _, appData: _, onClose: _ } = _,
    _ = _(),
    [_, _] = (0, _.useState)(() => _(_));
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _.Localize(`#AdvancedSearch_Header`),
      }),
      (0, _.jsx)(_, {
        filter: _,
        onFilterChange: _,
        onSearch: (_, _) => {
          _(_(_, _));
        },
        config: _,
        rgApps: _,
        rgAppData: _,
      }),
    ],
  });
}
function _(_) {
  return {
    bSteamItems: !1,
    filterInGame: {
      app: null,
      facets: {},
      accessories: {},
      properties: {},
      price: [0, _.maxPrice],
    },
    filterSteam: {
      app: null,
      facets: {},
      accessories: {},
      properties: {},
      price: [0, _.maxPrice],
    },
  };
}
function _(_) {
  let { reasons: _, guardDaysRequired: _, allowedTime: _ } = _,
    _ = _.length > 0;
  return (0, _.jsxs)(_, {
    gap: `2`,
    padding: `5`,
    direction: `column`,
    outline: `red-7`,
    radius: `sm`,
    style: {
      background: `#2f2121`,
    },
    children: [
      (0, _.jsx)(_, {
        size: `4`,
        weight: `regular`,
        contrast: `title`,
        children: _.LocalizePlural(`#Unavailable_Header`, _.length),
      }),
      (0, _.jsxs)(`ul`, {
        style: {
          margin: 0,
        },
        children: [
          _ &&
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  reason: _,
                  guardDaysRequired: _,
                },
                _,
              ),
            ),
          !_ &&
            (0, _.jsx)(_, {
              _: `li`,
              children: _.Localize(`#Economy_Market_TopLevelReason_Unknown`),
            }),
        ],
      }),
      (0, _.jsx)(_, {
        time: _,
      }),
    ],
  });
}
function _(_) {
  let { time: _ } = _;
  if (!_) return null;
  let _ = Intl.DateTimeFormat(_(), {
    dateStyle: `full`,
    timeStyle: `medium`,
  }).format(new Date(_ * 1e3));
  return (0, _.jsx)(_, {
    children: _.LocalizeReact(
      `#Economy_Market_HeaderTip_TimeCanUse`,
      (0, _.jsx)(_, {
        color: `blue-11`,
        children: _,
      }),
    ),
  });
}
function _(_) {
  let { reason: _, guardDaysRequired: _ } = _,
    {
      description: _,
      strLinkText: _,
      strLinkURL: _,
      strLinkTooltip: _,
    } = _(_, _);
  return (0, _.jsxs)(_, {
    _: `li`,
    children: [
      _,
      ` `,
      (0, _.jsx)(_, {
        href: _,
        color: `text-body`,
        contrast: `title`,
        underline: `always`,
        title: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  return `${_.HELP_BASE_URL}kb/${_}`;
}
function _(_, _) {
  let _ = _ ?? 15;
  switch (_) {
    case `locked`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_AccountLocked`),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_AccountLocked`,
        ),
        strLinkURL: _(`451E-96B3-D194-50FC`),
        strLinkText: _.Localize(
          `#Economy_Market_TopLevelTooltip_RemoveRestrictionLink`,
        ),
      };
    case `banned`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AccountTradeBanned`,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_AccountTradeBanned`,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#tradeban`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `trusted`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AccountNotTrusted`,
          7,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_AccountNotTrusted`,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#nottrusted`,
        strLinkText: _.Localize(
          `#Economy_Market_TopLevelTooltip_RemoveRestrictionLink`,
        ),
      };
    case `trustedwaiting`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AccountNotTrusted_Waiting`,
          7,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TTopLevelTooltip_AccountNotTrusted_Waiting`,
          7,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#nottrusted`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `pwreset`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AccountPasswordRecentlyReset`,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_AccountPasswordRecentlyReset`,
          5,
          30,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#pwreset`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `newpaymentmethod`:
      return {
        description: _(
          _.Localize(`#Economy_Market_HeaderTip_NewPaymentMethod_NoDate`),
          (0, _.jsx)(_, {
            color: `text-body`,
            underline: `always`,
            href: `${_.STORE_BASE_URL}account/verifycards`,
          }),
        ),
        strLinkTooltip: ``,
        strLinkURL: _(`6088-UDXM-7214`) + `#whatisit`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `newpaymentnoverify`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AccountHasNewPaymentMethod`,
        ),
        strLinkTooltip: ``,
        strLinkURL: _.COMMUNITY_BASE_URL + `market/faq/`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `acceptedwalletgift`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_AcceptedWalletGift`,
        ),
        strLinkTooltip: ``,
        strLinkURL: _.STORE_BASE_URL + `digitalgiftcards/selectgiftcard/`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `cookie`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_InvalidCookie`),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_InvalidCookie`,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#cookie`,
        strLinkText: _.Localize(
          `#Economy_Market_TopLevelTooltip_RemoveRestrictionLink`,
        ),
      };
    case `newdevice`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_NewDevice`, 7),
        strLinkTooltip: _.Localize(`#Economy_Market_TopLevelTooltip_NewDevice`),
        strLinkURL: _(`1047-EDFM-2932`) + `#newdevice`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `selfrefund`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_SelfRefund`),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_SelfRefund`,
          7,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#selfrefund`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `limiteduser`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_LimitedUser`),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_LimitedUser`,
        ),
        strLinkURL: _(`3330-IAGK-7663`),
        strLinkText: _.Localize(
          `#Economy_Market_TopLevelTooltip_RemoveRestrictionLink`,
        ),
      };
    case `sgrecent`:
      return {
        description: _.Localize(
          `#Economy_Market_HeaderTip_SteamGuardOnlyRecentlyEnabled`,
          _,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_SteamGuardRecentlyEnabled`,
        ),
        strLinkURL: _(`1047-EDFM-2932`) + `#sgrecent`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
    case `sgdisabled`:
      return {
        description: _.Localize(
          `#Economy_Market_TopLevelReason_NoSteamGuard`,
          _,
        ),
        strLinkTooltip: _.Localize(
          `#Economy_Market_TopLevelTooltip_SteamGuardDisabled`,
        ),
        strLinkURL: _(`4020-ALZM-5519`) + `#how`,
        strLinkText: _.Localize(
          `#Economy_Market_TopLevelTooltip_RemoveRestrictionLink`,
        ),
      };
    case `tradecooldown`:
      return {
        description: _.Localize(`#Economy_Market_TopLevelReason_TradeCooldown`),
        strLinkURL: _(`451E-96B3-D194-50FC`) + `#tradecooldown`,
        strLinkText: _.Localize(`#Economy_Market_TopLevelTooltip_MoreInfoLink`),
      };
  }
}
var _ = _(_(), 1),
  _ = `DyB5VtrQWWM-`,
  _ = `TtXIbdmbdA8-`,
  _ = 10,
  _ = 1e4,
  _ = 4e3;
function _() {
  let _ = _.Localize(`#Header_Search_PlaceholderNew`),
    _ = _(),
    _ = (0, _.useMemo)(() => {
      let _ = (_.data?.eResult === 1 ? _.data.rgSales : [])
        .map((_) => _.description.market_name || _.description.name)
        .filter((_) => !!_);
      return [...new Set(_)].slice(0, _);
    }, [_.data]),
    [_, _] = (0, _.useState)(0),
    _ = _ % 2 == 1;
  (0, _.useEffect)(() => {
    if (!_.length) return;
    let _ = setTimeout(() => _((_) => _ + 1), _ % 2 ? _ : _);
    return () => clearTimeout(_);
  }, [_, _]);
  let _ =
    _ && _.length
      ? _.Localize(
          `#Header_Search_TrySuggestion`,
          _[Math.floor(_ / 2) % _.length],
        )
      : _;
  return (0, _.jsx)(`div`, {
    className: _,
    "aria-hidden": !0,
    children: (0, _.jsx)(
      `span`,
      {
        className: (0, _.default)(_, _ && `IL9lH9sigdA-`),
        children: _,
      },
      _,
    ),
  });
}
var _ = {
    name: `marketPrefs`,
    options: {
      path: `/market`,
      secure: !0,
      maxAge: 12096e5,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = _({
    Component: _,
  });
function _(_) {
  let {
      backgroundAppID: _,
      filterConfig: _,
      loadID: _,
      bShowAdminActions: _,
      marketEligibility: _,
    } = _.useLoaderData(),
    _ = _(
      _
        ? {
            appid: _,
          }
        : void 0,
    ),
    _ = _.data && _(_.data, `raw_page_background`);
  return (0, _.jsx)(
    _,
    {
      children: (0, _.jsx)(_, {
        value: _,
        children: (0, _.jsx)(_, {
          value: {
            bShowAdminActions: _,
            eligibility: _,
          },
          children: (0, _.jsxs)(_, {
            className: _,
            position: `relative`,
            children: [
              _ &&
                (0, _.jsx)(`img`, {
                  className: `pTPA1n0Spzo-`,
                  src: _,
                  alt: ``,
                }),
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  children: _.children,
                }),
              }),
              (0, _.jsx)(_, {}),
            ],
          }),
        }),
      }),
    },
    _,
  );
}
function _() {
  let {
      bHideSearch: _ = !1,
      bShowSearchTicker: _ = !1,
      marketEligibility: _,
    } = _.useLoaderData(),
    _ = `${_.COMMUNITY_BASE_URL}groups/community_market/discussions/`,
    _ = !_(`sm`);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
          }),
          (0, _.jsxs)(_, {
            direction: {
              initial: `column`,
              _: `row`,
            },
            align: {
              initial: `stretch`,
              _: `center`,
            },
            justify: `between`,
            gap: `3`,
            className: _,
            children: [
              (0, _.jsxs)(_, {
                direction: `column`,
                gap: `1`,
                children: [
                  (0, _.jsx)(_, {
                    href: _.Home(),
                    children: (0, _.jsx)(_, {
                      size: {
                        initial: `6`,
                        _: `7`,
                        _: `8`,
                      },
                      align: {
                        initial: `center`,
                        _: `start`,
                      },
                      weight: `medium`,
                      className: _,
                      children: _.Localize(`#Header_MarketTitle`),
                    }),
                  }),
                  (0, _.jsx)(_, {
                    display: {
                      initial: `none`,
                      _: `block`,
                    },
                    children: (0, _.jsx)(_, {
                      size: `4`,
                      className: _,
                      children: _.Localize(`#Header_MarketDescriptionNew`),
                    }),
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                align: {
                  initial: `stretch`,
                  _: `end`,
                },
                direction: `column`,
                gap: `2`,
                flexGrow: `1`,
                children:
                  !_ &&
                  (0, _.jsx)(_, {
                    showTicker: _,
                  }),
              }),
              (0, _.jsxs)(_, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    pattern: `pane`,
                    cycleScale: 2,
                    className: _,
                  }),
                  !_ &&
                    (0, _.jsx)(_, {
                      href: _.Home(),
                      className: `OVfpo8NKTdw-`,
                    }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(_, {
            className: _,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        width: `100%`,
        paddingX: {
          initial: `3`,
          _: `5`,
        },
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              justify: `end`,
              marginTop: {
                initial: `2`,
                _: `3`,
              },
              marginBottom: {
                initial: `2`,
                _: `0`,
              },
              gap: `1`,
              children: (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  href: _,
                  variant: `inverted`,
                  color: `dull`,
                  children: _.Localize(`#Header_GiveFeedback`),
                }),
              }),
            }),
            !_.bEligible &&
              (0, _.jsx)(_, {
                marginTop: `3`,
                children: (0, _.jsx)(_, {
                  reasons: _.rgReasons,
                  guardDaysRequired: _.unSGRequiredDays,
                  allowedTime: _.rtAllowed,
                }),
              }),
          ],
        }),
      }),
      (0, _.jsx)(_, {
        pattern: `corner-start`,
        className: _,
      }),
      (0, _.jsx)(_, {
        pattern: `corner-end`,
        className: _,
      }),
    ],
  });
}
function _(_) {
  let { showTicker: _ } = _,
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = _ && !_ && !_,
    _ = !_(`sm`),
    { rgApps: _ = [], appData: _ = {} } =
      _({
        queryKey: [`market`, `advancedsearchdata`],
        queryFn: () => _(`/market/advancedsearchdata`, `Load`),
        enabled: _,
        placeholderData: {
          rgApps: [],
          appData: {},
          rgSuggested: [],
        },
      }).data ?? {};
  return (0, _.jsxs)(_, {
    align: `center`,
    gapX: `4`,
    children: [
      (0, _.jsxs)(_, {
        className: _,
        minWidth: `0`,
        position: `relative`,
        children: [
          (0, _.jsx)(`form`, {
            className: _(),
            onSubmit: (_) => {
              (_.preventDefault(),
                _.stopPropagation(),
                _(
                  _.Search({
                    search: `q=${encodeURIComponent(_)}`,
                  }),
                ));
            },
            onFocus: () => _(!0),
            onBlur: () => _(!1),
            children: (0, _.jsx)(_, {
              value: _,
              variant: `inset`,
              onTextChange: _,
              placeholder: _ ? `` : _.Localize(`#Header_Search_PlaceholderNew`),
              clearable: !0,
              popoverWidth: _ ? () => `90vw` : void 0,
            }),
          }),
          _ && (0, _.jsx)(_, {}),
        ],
      }),
      (0, _.jsx)(_, {
        onClick: () => _(!0),
        contrast: `title`,
        whiteSpace: `nowrap`,
        title: _.Localize(`#AdvancedSearch_Link`),
        children: _.Localize(`#AdvancedSearch_Link`),
      }),
      _ &&
        (0, _.jsx)(_, {
          onClose: () => _(!1),
          apps: _,
          appData: _,
        }),
    ],
  });
}
function _() {
  try {
    let _ = JSON.parse(_(_) || `{}`);
    return !_ || typeof _ != `object` ? {} : _;
  } catch {}
  return {};
}
function _(_) {
  Object.keys(_).length == 0 ? _(_) : _(_, JSON.stringify(_));
}
function _(_) {
  let { children: _ } = _,
    [_, _] = (0, _.useState)(() => _()),
    _ = (0, _.useRef)(!1);
  return (
    (0, _.useEffect)(() => {
      _.current ? _(_) : (_.current = !0);
    }, [_]),
    (0, _.jsx)(_, {
      prefs: _,
      onChange: _,
      children: _,
    })
  );
}
function _(_) {
  return (0, _.jsx)(_, {
    className: _,
    children: _.children,
  });
}
export { _ as route };
