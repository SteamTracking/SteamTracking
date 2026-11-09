var _ = _(_(), 1);
function _(_) {
  (0, _.useEffect)(() => _(_), [_]);
}
function _() {
  let _ = _(),
    [_] = _(),
    _ = `${_.STORE_CHECKOUT_BASE_URL}checkout/`;
  if (_(_)) return `${_}?accountcart=1`;
  if (_(_)) return `${_}?gidreplay=${_.gid}`;
  {
    let _ = new URLSearchParams();
    return (
      _.append(`cart`, _.gid ?? ``),
      _?.accountid_giftee &&
        (_.append(`purchasetype`, `gift`),
        _.append(`bIsGift`, `1`),
        _.append(`giftInfo`, encodeURIComponent(JSON.stringify(_)))),
      `${_}?${_.toString()}`
    );
  }
}
var _ = `A5wvDuCfNCI-`,
  _ = _(_(), 1);
async function _(_) {
  for (let _ of [_.STORE_BASE_URL, _.STORE_CHECKOUT_BASE_URL]) {
    let _ = new FormData();
    (_.set(`sessionid`, _()), _.set(`cc`, _));
    let _ = await fetch(`${_}country/setcountry`, {
      method: `POST`,
      credentials: `include`,
      body: _,
    });
    if (!_._ || (await _.json()) !== !0)
      throw Error(`country/setcountry failed with ${_.status}`);
  }
}
function _(_) {
  return _({
    mutationFn: () => _(_),
    onSuccess: () => window.location.reload(),
  });
}
function _(_) {
  return _({
    queryKey: [`cart`, `walletconversion`],
    queryFn: () => _(`/cart/actions`, `QueryWalletConversion`),
    enabled: _,
    staleTime: 1 / 0,
  });
}
var _ = {};
((_.arabic = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./chunk.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./chunk.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_) {
  return _.Localize(`#Steam_Country_${_}`);
}
var _ = `MD--RTaItOk-`,
  _ = `nAt8Q-c3R-k-`,
  _ = _(),
  _ = `help`;
function _(_) {
  let { countryOptions: _ } = _,
    [_, _] = _.useState(),
    _ = (_) => {
      _ && _ != _.COUNTRY && _(_);
    },
    _ = () => _(void 0);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        options: [_.strAccountCountry, _.strCurrentCountry, _],
        selectedValue: _.COUNTRY,
        onSelectionChange: _,
        getOptionLabel: (_) => _(_, _),
      }),
      _ == _ &&
        (0, _.jsx)(_, {
          countryOptions: _,
          onClose: _,
        }),
      _ &&
        _ != _ &&
        (0, _.jsx)(_, {
          countryOptions: _,
          strCountry: _,
          onClose: _,
        }),
    ],
  });
}
function _(_, _) {
  if (_ == _) return _.Localize(`#Cart_CountryChange_OtherCountry`);
  let _ = _(_);
  if (_(_.strAccountCountry) == _(_.strCurrentCountry)) return _;
  let _ = _(_);
  return _.Localize(`#Cart_CountryChange_CountryCurrency`, _, _(_).strSymbol);
}
function _(_) {
  let { countryOptions: _, strCountry: _, onClose: _ } = _,
    _ = _(_),
    _ = _.isPending || _.isSuccess,
    _ = _(_),
    _ = _ == _.strCurrentCountry,
    { data: _, isError: _ } = _(_),
    _ = _ && (_ || (!!_ && _.result != 1)),
    _ = _ && _?.result != 1;
  return (0, _.jsx)(_, {
    onClose: _,
    navID: `CartCountryChangeModal`,
    strTitle: _.Localize(`#Cart_UserCountryCurrency_DialogTitle`),
    children: (0, _.jsxs)(_, {
      className: _,
      "flow-children": `column`,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Cart_UserCountryCurrency_Header`),
        }),
        (0, _.jsx)(_, {
          children: _.Localize(`#Cart_UserCountryCurrency_Intro`),
        }),
        _?.strBalance &&
          _.strConverted &&
          (0, _.jsxs)(_, {
            children: [
              _.Localize(
                `#Cart_CountryChange_WalletConversion`,
                _,
                _.strBalance,
                _.strConverted,
              ),
              ` `,
              _.Localize(`#Cart_UserCountryCurrency_Change_Time_Restriction`),
            ],
          }),
        (_.isError || _) &&
          (0, _.jsx)(_, {
            color: `text-error`,
            children: _.Localize(`#Cart_CountryChange_Error`),
          }),
        (0, _.jsx)(_, {
          marginX: `5`,
          marginY: `2`,
          disabled: _ || _,
          onClick: () => _.mutate(),
          children: _.Localize(
            _ ? `#Cart_CountryChange_Changing` : `#Cart_CountryChange_Confirm`,
            _,
          ),
        }),
        (0, _.jsx)(_, {
          children: _(
            _.Localize(`#Cart_CountryChange_Notice`),
            (0, _.jsx)(`b`, {}),
          ),
        }),
        (0, _.jsx)(_, {}),
      ],
    }),
  });
}
function _(_) {
  let { countryOptions: _, onClose: _ } = _;
  return (0, _.jsx)(_, {
    onClose: _,
    navID: `CartCountryOtherModal`,
    strTitle: _.Localize(`#Cart_UserCountryCurrency_DialogTitle`),
    children: (0, _.jsxs)(_, {
      className: _,
      "flow-children": `column`,
      children: [
        (0, _.jsx)(`div`, {
          children: _.Localize(
            `#Cart_UserCountryCurrency_OtherRegion`,
            _(_.strAccountCountry),
            _(_.strCurrentCountry),
          ),
        }),
        (0, _.jsx)(_, {
          children: _.Localize(`#Cart_CountryChange_Prefs_Desc`),
        }),
        (0, _.jsx)(_, {
          focusable: !0,
          width: `100%`,
          href: `${_.STORE_BASE_URL}account/change_country/`,
          children: _.Localize(`#Cart_UserCountryCurrency_Prefs`),
        }),
        (0, _.jsx)(_, {}),
      ],
    }),
  });
}
function _() {
  return (0, _.jsx)(_, {
    marginTop: `2`,
    href: `${_.SUPPORT_BASE_URL}kb_article.php?ref=6627-QSNM-5276`,
    openInNewWindow: !0,
    children: _.Localize(`#Cart_UserCountryCurrency_Change_LearnMore`),
  });
}
function _() {
  return [`shopping_cart`, `relevant_coupons`];
}
async function _(_) {
  let _ = _.Init(_);
  _.Body().set_language(_(_.LANGUAGE));
  let _ = await _.GetRelevantCoupons(_, _);
  return _.BIsValid()
    ? _.Body().toObject()
    : (console.error(`Failed to load relevant coupons`), {});
}
function _() {
  let _ = _();
  return _(_(_));
}
function _(_) {
  return {
    queryKey: _(),
    queryFn: async () =>
      ((await _(_)).line_items ?? []).reduce(
        (_, _) => (_.line_item_id && (_[_.line_item_id] = _.coupons ?? []), _),
        {},
      ),
    enabled: _.logged_in,
    placeholderData: () => ({}),
  };
}
var _ = `XXF9zHFSe2E-`,
  _ = `S0wqxLQ48rE-`,
  _ = `vuCmmAYT7fM-`,
  _ = `WPzy-1-11Wo-`,
  _ = `KsK6seYAOQI-`,
  _ = `hsI8X6LpJM0-`,
  _ = `QuAB2dfMXac-`,
  _ = `YD6v7Xx8eD4-`,
  _ = `TIhZMwFPJ3c-`,
  _ = `g-yAjPc8sGw-`;
function _(_) {
  let { lineItem: _, validatedItem: _ } = _,
    { data: _ } = _(),
    _ = _(),
    [_, _] = _.useState(!1),
    _ = _?.[_.line_item_id] ?? [];
  if (!_.length || _) return null;
  let _ = _?.coupon_applied;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(_, {
        className: _,
        "flow-children": `row`,
        children: [
          !!_ &&
            (0, _.jsx)(`img`, {
              className: `JHLHVRrRovE-`,
              src: _.large_icon_url,
              title: _.title,
              alt: ``,
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.LocalizePlural(`#Cart_CouponAvailability`, _.length),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              size: `2`,
              color: `dull-10`,
              underline: `always`,
              onClick: () => _(!0),
              children: _.Localize(
                _ ? `#Cart_CouponModify_Change` : `#Cart_CouponModify_Add`,
              ),
            }),
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          ..._,
          couponApplied: _,
          rgAvailableCoupons: _,
          onClose: () => _(!1),
        }),
    ],
  });
}
function _(_) {
  let {
      lineItem: _,
      storeItem: _,
      couponApplied: _,
      rgAvailableCoupons: _,
      onClose: _,
    } = _,
    _ = _?.gidcoupon,
    { data: _ } = _(),
    _ = _(),
    _ = new Set((_?.cart_items ?? []).map((_) => _.coupon_applied?.gidcoupon)),
    _ = (_) => {
      (_(),
        _.mutate({
          lineItemID: _.line_item_id,
          giftInfo: _.gift_info,
          lineItemFlags: {
            ..._.flags,
          },
          gidCoupon: _.gidcoupon == _ ? _ : _.gidcoupon,
        }));
    };
  return (0, _.jsx)(_, {
    onClose: _,
    navID: `CartCouponSelectModal`,
    strTitle: _.Localize(
      _ ? `#Cart_CouponModify_Change` : `#Cart_CouponModify_Add`,
    ),
    children: (0, _.jsxs)(_, {
      className: _,
      "flow-children": `column`,
      children: [
        (0, _.jsx)(`div`, {
          children: _.LocalizeReact(
            `#Cart_SelectCouponToApply`,
            (0, _.jsx)(`span`, {
              className: _,
              children: _.name,
            }),
          ),
        }),
        _.map((_) => {
          let _ = _.gidcoupon == _,
            _ = !_ && _.has(_.gidcoupon);
          return (0, _.jsx)(
            _,
            {
              coupon: _,
              bSelected: _,
              bDisabled: _,
              strNote: _
                ? _.Localize(`#Cart_Coupons_Applied`)
                : _
                  ? _.Localize(`#Cart_Coupons_InUse`)
                  : void 0,
              onActivate: _ ? void 0 : () => _(_),
            },
            _.gidcoupon,
          );
        }),
      ],
    }),
  });
}
function _(_) {
  let { coupon: _, strNote: _, bSelected: _, bDisabled: _, onActivate: _ } = _;
  return (0, _.jsxs)(_, {
    focusable: !0,
    className: (0, _.default)(_, _ && `ciimEx5faPw-`, _ && `X5VfWqxbwVU-`),
    onActivate: _,
    children: [
      (0, _.jsx)(`img`, {
        src: _.large_icon_url,
        title: _.title,
        alt: ``,
        className: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children:
          !!_ &&
          (0, _.jsx)(`div`, {
            className: `g-yAjPc8sGw-`,
            children: _,
          }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [`-`, _.discount_pct, `%`],
      }),
    ],
  });
}
function _(_) {
  let _ = _?.line_items ?? [];
  if (_.length == 1 && _[0].packageid)
    return {
      packageid: _[0].packageid,
    };
}
function _(_) {
  if (_?.item_type == 0) {
    if (_.type == 0) return _._;
    if (_.type == 4 || _.type == 11) return _.related_items?.parent_appid;
  }
}
var _ = `QQkFoqopsZU-`,
  _ = `GUBh1f-cK8M-`,
  _ = `xYoyFhVYVh4-`;
function _(_) {
  let { className: _, bMinimalDisplay: _ } = _,
    { data: _ } = _(),
    { data: _ } = _(_(_)),
    _ = _(_(_));
  return _?.length
    ? (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Cart_FollowCreator_title`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Cart_FollowCreator_desc`),
          }),
          (0, _.jsx)(_, {
            gap: `0`,
            direction: `column`,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  creatorID: _,
                  bSmallFormat: !0,
                  bHideCreatorType: !0,
                  bMinimalDisplay: _,
                  bCompact: !0,
                },
                _.clan_account_id,
              ),
            ),
          }),
        ],
      })
    : null;
}
var _ = `_68SYvTNlZNs-`,
  _ = `cE9cj0nbqpY-`,
  _ = `X7xBVzjXbzw-`,
  _ = `escxTMUGmsQ-`,
  _ = `ieJQh9DBcSw-`,
  _ = `NKiRqw1jQHg-`,
  _ = `FlJmiJl70GU-`,
  _ = `i1XZFikuzME-`,
  _ = `ZxG3hS-2Jjo-`,
  _ = `_1mIUrXeHG3k-`,
  _ = `bJV2ai-gAcA-`,
  _ = `nfxC9n3FRVE-`,
  _ = `FN7MZpXIvZw-`,
  _ = `YrxkWXNtDMU-`,
  _ = `bi47TlP7SSw-`,
  _ = `fWNjRJXvRgI-`,
  _ = `n9HLAjXXhvI-`,
  _ = `TVsiH2tTSD8-`,
  _ = `_16QRYa6K5mY-`,
  _ = `M5uJhJUSHig-`,
  _ = `otLXAz3VIiY-`,
  _ = `HLT-2RoiFj8-`;
function _(_) {
  return _?.line_items?.map((_) =>
    _.packageid
      ? {
          packageid: _.packageid,
        }
      : {
          bundleid: _.bundleid,
        },
  );
}
function _(_) {
  return {
    nIncludeTopNSpecials: 8,
    rgAdditionalRecommendationIDs: _,
  };
}
var _ = {
    include_assets: !0,
    include_release: !0,
    include_platforms: !0,
  },
  _ = `_982gncrqNug-`,
  _ = `_2fWfeYh526c-`,
  _ = `HErt5lcVyYU-`;
function _() {
  let { data: _ } = _(),
    { data: _ } = _(),
    _ = _(),
    [_, _] = _.useState(() => _(_));
  _.useEffect(() => {
    !_ && _ && _(_(_));
  }, [_, _]);
  let _ = _(_(_), _, !!_);
  if (_.isError) return null;
  let _ = new Set(
      (_?.cart_items ?? []).flatMap((_) => _.store_item?.included_appids ?? []),
    ),
    _ = _(_, _.data?.purchase_recommendations),
    _ = _(_, _.data?.specials),
    _ = _.length > 3;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Recommendations_Header`),
      }),
      (0, _.jsx)(_, {
        strType: _ ? `recommended` : `specials`,
        rgItemKeys: _ ? _ : _,
        bLoading: !_.data,
      }),
      !_ &&
        (0, _.jsx)(_, {
          className: `XciVYvdRyyY-`,
        }),
    ],
  });
}
function _(_, _ = []) {
  return _.flatMap(({ item_id: _, item: _ }) => {
    let _ = _ ?? (_ && _(_));
    return _ && _(_, _, _) ? [_] : [];
  });
}
function _(_, _, _) {
  return _?.appid && _.has(_.appid)
    ? !1
    : _?.appid
      ? !_.has(_.appid)
      : !_?.included_appids || _.included_appids.every((_) => !_.has(_));
}
function _(_) {
  let { strType: _, rgItemKeys: _, bLoading: _ } = _;
  return (0, _.jsx)(_, {
    feature: `upsell-${_}`,
    children: (0, _.jsx)(_, {
      "flow-children": `row`,
      navEntryPreferPosition: _.MAINTAIN_X,
      className: (0, _.default)(_, _ && `DbRTFm2D6oM-`),
      children: _.slice(0, 3).map((_) => {
        let _ = _(_);
        return (
          _ &&
          (0, _.jsx)(
            _,
            {
              capsule: _,
              imageType: `header`,
              onlyOneDiscountPct: !0,
              bPreferAssetWithoutOverride: !1,
            },
            _(_),
          )
        );
      }),
    }),
  });
}
function _() {
  let _ = _();
  return _({
    queryKey: [`CartSaleDropProgress`],
    queryFn: async () => {
      let _ = await (
        await fetch(`${_.STORE_BASE_URL}cart/ajaxsaledropprogress`)
      ).json();
      if (_.eresult !== 1)
        throw `Failed to load sale drop progress: ${_.eresult}`;
      return _;
    },
    enabled: _.logged_in && _,
    staleTime: 1 / 0,
  });
}
var _ = `GMZUXSA5Ok0-`,
  _ = `VZpSbWLZ95w-`,
  _ = `_77p-oQOr340-`,
  _ = `erBUyVew8E8-`,
  _ = `VlQcoF92VJw-`;
function _() {
  let { data: _ } = _(),
    { data: _ } = _();
  if (!_ || !_?.sale_name || !_.spend_needed_for_next_drop || _(_.EREALM))
    return null;
  let { cEarned: _, pctProgress: _ } = _(_, _),
    _ = _.sale_name,
    _ = (0, _.jsx)(`div`, {
      children: _.Localize(`#Cart_SaleCardDrops_Explanation`, _),
    });
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _),
    children: [
      _ > 0 &&
        (0, _.jsx)(`div`, {
          className: `I0kcgMv0G-I-`,
          children: _.LocalizePlural(`#Cart_SaleCardDrops_EarnedMessage`, _, _),
        }),
      _ == 0 && _,
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            children: _.Localize(`#Cart_SaleCardDrops_ProgressLabel`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _,
              style: {
                width: `${Math.min(100, Math.max(0, _))}%`,
              },
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              `(`,
              _.Localize(
                `#Cart_SaleCardDrops_CardCost`,
                _.formatted_spend_per_drop,
              ),
              `)`,
            ],
          }),
        ],
      }),
      _ > 0 && _,
    ],
  });
}
function _(_, _) {
  let { spend_earned_for_next_drop: _, spend_needed_for_next_drop: _ } = _,
    _ = 0;
  for (let _ of _.cart_items ?? [])
    _.subtotal?.amount_in_cents && (_ += parseInt(_.subtotal.amount_in_cents));
  let _ = _ + _;
  return {
    cEarned: Math.floor(_ / _),
    pctProgress: Math.floor(((_ % _) * 100) / _),
  };
}
function _(_) {
  let { data: _ } = _(_.logged_in && !!_);
  if (!_ || !_ || _.is_not_member_of_any_group || _.role === 2) return !1;
  let _ = _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString();
  return !!_.family_group?.members?.some(
    (_) => _.steamid === _ && _.role === 2,
  );
}
function _(_, _, _, _) {
  return {
    queryKey: [`CartGiftFriends`, _],
    queryFn: async () => {
      let [_, _] = await Promise.all([
        _.fetchQuery(_(_, _)),
        _.fetchQuery(_(_, _)),
      ]);
      return Promise.all(
        (_ ?? []).map(async (_) => {
          let _ = new _(_).GetAccountID();
          return {
            accountid: _,
            playerLinkDetails: await _.fetchQuery(_(_, _)),
            strNickname: _.get(_),
          };
        }),
      );
    },
    enabled: !!_,
    staleTime: 6e5,
  };
}
function _(_, _) {
  let _ =
    _.item_type == 2
      ? {
          bundleid: _._,
        }
      : {
          packageid: _._,
        };
  return {
    queryKey: [`FriendOwnershipForGifting`, _],
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_item_ids([_.fromObject(_)]);
      let _ = await _.GetFriendOwnershipForGifting(_, _);
      if (!_.BSuccess())
        throw `Error loading friend ownership: ${_.GetErrorMessage()}`;
      return _.Body().toObject().ownership_info?.[0]?.friend_ownership ?? [];
    },
    enabled: !!_._,
  };
}
function _(_) {
  return _.map((_) => _.data);
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(_),
    _ = _(_(_, _, _, _)),
    _ = _(_(_, _)),
    _ = _({
      queries: _.map((_) => _(_, _)),
      combine: _,
    });
  return {
    rgCandidates: _.useMemo(() => {
      if (!_.data || !_.data) return;
      let _ = new Map(_.data.map((_) => [_.accountid, _])),
        _ = new Set(_),
        _ = [],
        _ = new Set();
      for (let _ of _.data)
        (_.add(_.accountid),
          _.playerLinkDetails?.public_data &&
            _.push({
              ..._,
              playerLinkDetails: _.playerLinkDetails,
              ownership: _.get(_.accountid) ?? {},
            }));
      for (let _ of _) {
        if (!_?.public_data?.steamid) continue;
        let _ = new _(_.public_data.steamid).GetAccountID();
        _.has(_) ||
          _.push({
            accountid: _,
            playerLinkDetails: _,
            ownership: {},
          });
      }
      return _.sort((_, _) => _(_, _, _));
    }, [_.data, _.data, _, _]),
    isLoading: _.isLoading || _.isLoading,
    isError: _.isError || _.isError,
  };
}
function _(_, _, _) {
  let _ = _.has(_.accountid);
  if (_ != _.has(_.accountid)) return _ ? -1 : 1;
  if (!!_.ownership.wishes_for != !!_.ownership.wishes_for)
    return _.ownership.wishes_for ? -1 : 1;
  let _ = _.ownership.partial_wishes_for?.length ?? 0,
    _ = _.ownership.partial_wishes_for?.length ?? 0;
  if (_ != _) return _ - _;
  if (!!_.ownership.already_owns != !!_.ownership.already_owns)
    return _.ownership.already_owns ? 1 : -1;
  let _ = _.ownership.partial_owns_appids?.length ?? 0,
    _ = _.ownership.partial_owns_appids?.length ?? 0;
  if (_ != _) return _ - _;
  if (_ > 0) {
    let _ = _.ownership.partial_wishes_for.reduce((_, _) => _ ^ _, 0),
      _ = _.ownership.partial_wishes_for.reduce((_, _) => _ ^ _, 0);
    if (_ != _) return _ - _;
  }
  if (_ > 0) {
    let _ = _.ownership.partial_owns_appids.reduce((_, _) => _ ^ _, 0),
      _ = _.ownership.partial_owns_appids.reduce((_, _) => _ ^ _, 0);
    if (_ != _) return _ - _;
  }
  return (_.playerLinkDetails.public_data?.persona_name ?? ``).localeCompare(
    _.playerLinkDetails.public_data?.persona_name ?? ``,
  );
}
var _ = `wPcLjaJPSko-`,
  _ = `zKvZBcXqgpU-`,
  _ = `SDUUQ-Yc3pY-`,
  _ = `_0t-CciboLAI-`,
  _ = `TpLCNcHeld0-`,
  _ = `lklvFVAmidk-`,
  _ = `_2k5eCgEtNcg-`,
  _ = `zsjpITLVBtE-`,
  _ = `S0NM3tm5aDo-`,
  _ = _.memo(function (_) {
    let { scheduledTime: _, onScheduledTimeChange: _ } = _,
      _ = (_ ?? 0) > 0;
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          children: _.Localize(`#Cart_GiftDelivery_Label`),
        }),
        (0, _.jsxs)(_.Root, {
          value: _,
          onValueChange: (_) => {
            _ ? _ || _(Math.floor(Date.now() / 1e3)) : _(0);
          },
          children: [
            (0, _.jsx)(_.Option, {
              value: !1,
              children: _.Localize(`#Cart_GiftDelivery_Now`),
            }),
            (0, _.jsx)(_.Option, {
              value: !0,
              children: _.Localize(`#Cart_GiftDelivery_ScheduleDelivery`),
            }),
          ],
        }),
        _ &&
          (0, _.jsx)(_, {
            rtScheduled: _,
            onScheduledTimeChange: _,
          }),
      ],
    });
  });
function _(_) {
  let { rtScheduled: _, onScheduledTimeChange: _ } = _,
    _ = _(),
    _ = _.Instant.fromEpochMilliseconds(_ * 1e3).toZonedDateTimeISO(_),
    _ = _.Now.plainDateISO(_),
    _ = _.add({
      years: 1,
    }),
    _ = (_, _) =>
      _(
        Math.floor(
          _.toZonedDateTime({
            timeZone: _,
            plainTime: _,
          }).epochMilliseconds / 1e3,
        ),
      ),
    _ =
      _ >
      _.Now.instant().add({
        hours: 8760,
      }).epochMilliseconds /
        1e3;
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    marginTop: `2`,
    marginStart: `5`,
    children: [
      (0, _.jsxs)(_, {
        align: `center`,
        gap: `2`,
        wrap: `wrap`,
        children: [
          (0, _.jsx)(_, {
            value: _.toPlainDate(),
            min: _,
            max: _,
            onValueChange: (_) => _(_, _.toPlainTime()),
          }),
          (0, _.jsx)(_, {
            value: _.toPlainTime(),
            onValueChange: (_) => _(_.toPlainDate(), _),
          }),
          (0, _.jsx)(_, {
            children: _(_),
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `QXWymsIStf0-`,
          children: _.Localize(`#Cart_GiftScheduleError_TooFar`),
        }),
    ],
  });
}
function _(_) {
  return (
    new Intl.DateTimeFormat(_(), {
      timeZone: _,
      timeZoneName: `short`,
    })
      .formatToParts()
      .find((_) => _.type == `timeZoneName`)?.value ?? ``
  );
}
var _ = `aG0D1ufZpqk-`,
  _ = `trtxUgFq0jY-`,
  _ = `TxVkADLALj4-`,
  _ = `MDYNs7IjgPc-`,
  _ = `tDRvrE5Zz-w-`,
  _ = `U5zUzmH6m68-`,
  _ = `_31tv48E2dqA-`,
  _ = `_3bE2OruX4lQ-`;
function _(_) {
  let { onClose: _ } = _;
  return (0, _.jsx)(_, {
    className: _,
    onClose: _,
    navID: `CartGiftRecipientModal`,
    strTitle: _.Localize(`#Cart_GiftRecipientModal_Title`),
    children: (0, _.jsx)(_, {
      className: _,
      "flow-children": `column`,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
function _(_) {
  let { lineItem: _, storeItem: _, rgHighlightedAccountIDs: _, onClose: _ } = _,
    [_, _] = _.useState(``),
    { rgCandidates: _, isLoading: _, isError: _ } = _(_, _),
    _ = _(),
    _ = _.useMemo(() => {
      let _ = _.toLocaleLowerCase();
      return _
        ? (_ ?? []).filter(
            (_) =>
              !!_.playerLinkDetails.public_data?.persona_name
                ?.toLocaleLowerCase()
                .includes(_) ||
              !!_.strNickname?.toLocaleLowerCase().includes(_),
          )
        : (_ ?? []);
    }, [_, _]),
    _ = (_) => {
      (_.mutate({
        lineItemID: _.line_item_id,
        lineItemFlags: _.flags,
        giftInfo: {
          ..._.gift_info,
          accountid_giftee: _,
        },
      }),
        _());
    };
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Cart_GiftRecipientModal_IssueLoading`),
      })
    : _
      ? (0, _.jsx)(_, {})
      : (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              autoFocus: !0,
              clearable: !0,
              value: _,
              onTextChange: _,
              placeholder: _.Localize(`#Cart_GiftRecipientModal_Placeholder`),
            }),
            (0, _.jsx)(_, {
              className: _,
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    candidate: _,
                    bSelected: _.accountid === _.gift_info?.accountid_giftee,
                    onSelect: _,
                  },
                  _.accountid,
                ),
              ),
            }),
          ],
        });
}
function _(_) {
  let { candidate: _, bSelected: _, onSelect: _ } = _,
    { playerLinkDetails: _, strNickname: _, ownership: _, accountid: _ } = _,
    _ = !!_.already_owns;
  return (0, _.jsxs)(_, {
    focusable: !0,
    className: (0, _.default)(_, _ && `_0-o9B4RFRug-`, _ && `nAOCXVyhVzw-`),
    onActivate: _ ? void 0 : () => _(_),
    children: [
      (0, _.jsx)(_, {
        playerLinkDetails: _,
        size: `Small`,
        statusPosition: `right`,
        alt: _.public_data?.persona_name ?? ``,
      }),
      (0, _.jsxs)(`span`, {
        className: _,
        children: [
          _.public_data?.persona_name,
          !!_ &&
            (0, _.jsxs)(_.Fragment, {
              children: [` (`, _, `)`],
            }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          ownership: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let {
    already_owns: _,
    partial_owns_appids: _,
    wishes_for: _,
    partial_wishes_for: _,
  } = _.ownership;
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Cart_GiftRecipientModal_OwnsGameLabel`),
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          !!_?.length &&
            (0, _.jsx)(`div`, {
              className: `_3bE2OruX4lQ-`,
              children: _.LocalizeReact(
                `#Cart_GiftRecipientModal_PartialOwnsLabel`,
                (0, _.jsx)(_, {
                  rgAppIDs: _,
                }),
              ),
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `_1bTQegEnh6U-`,
              children: _.Localize(`#Cart_GiftRecipientModal_OnWishlist`),
            }),
          !_ &&
            !!_?.length &&
            (0, _.jsx)(`div`, {
              className: `_1bTQegEnh6U-`,
              children: _.LocalizeReact(
                `#Cart_GiftRecipientModal_PartialWishlistLabel`,
                (0, _.jsx)(_, {
                  rgAppIDs: _,
                }),
              ),
            }),
        ],
      });
}
function _(_) {
  let { rgAppIDs: _ } = _,
    _ = _(),
    _ = _.useMemo(
      () =>
        [...new Set(_)].slice(0, 6).map((_) =>
          _(_, {
            appid: _,
          }),
        ),
      [_, _],
    ),
    _ = _({
      queries: _,
    })
      .map((_) => _.data?.name)
      .filter((_) => !!_)
      .slice(0, 3);
  return (0, _.jsx)(_.Fragment, {
    children: _.join(`, `),
  });
}
var _ = 160,
  _ = 330,
  _ =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function _(_) {
  return !!_ && _.test(_.toLowerCase());
}
function _(_) {
  return (
    !!_.flags?.is_gift &&
    !_.gift_info?.accountid_giftee &&
    !_(_.gift_info?.email_giftee)
  );
}
function _(_) {
  let { lineItem: _ } = _;
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      (0, _.jsx)(_, {
        lineItem: _,
      }),
      (0, _.jsx)(_, {
        gifteeAccountID: _.gift_info?.accountid_giftee,
      }),
    ],
  });
}
function _(_) {
  let { giftInfo: _, onChange: _ } = _;
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              children: _.Localize(`#Cart_PurchaseFor_Label`),
            }),
            !!_.accountid_giftee &&
              (0, _.jsx)(_, {
                accountid: _.accountid_giftee,
              }),
          ],
        }),
      }),
      (0, _.jsx)(_, {
        strMessage: _.gift_message?.message ?? ``,
        onMessageChange: (_) =>
          _({
            ..._,
            gift_message: {
              ..._.gift_message,
              message: _,
            },
          }),
        strSignature: _.gift_message?.signature ?? ``,
        onSignatureChange: (_) =>
          _({
            ..._,
            gift_message: {
              ..._.gift_message,
              signature: _,
            },
          }),
        rtScheduledTime: _.time_scheduled_send ?? 0,
        onScheduledTimeChange: (_) =>
          _({
            ..._,
            time_scheduled_send: _,
          }),
        bShowScheduledTime: !0,
      }),
    ],
  });
}
function _(_) {
  let { lineItem: _ } = _,
    _ = _.gift_info?.email_giftee,
    [_, _] = _.useState(!!_),
    { mutate: _ } = _(),
    [_, _] = _.useState(_);
  _ !== _ && (_(_), _ && _(!0));
  let _ = `none`;
  _.gift_info?.accountid_giftee
    ? (_ = `account`)
    : (_ || _.gift_info?.email_giftee) && (_ = `email`);
  let _ = () => {
      (_(!1),
        _({
          lineItemID: _.line_item_id,
          lineItemFlags: _.flags,
          giftInfo: {
            ..._.gift_info,
            accountid_giftee: void 0,
            email_giftee: void 0,
          },
        }));
    },
    _ = () => {
      (_(!0),
        _({
          lineItemID: _.line_item_id,
          lineItemFlags: _.flags,
          giftInfo: {
            ..._.gift_info,
            email_giftee: ``,
          },
        }));
    };
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsxs)(_, {
        justify: `between`,
        gap: `3`,
        direction: {
          initial: `column-reverse`,
          _: `row`,
        },
        marginBottom: `2`,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                fullWidth: _ == `email`,
                children: _.Localize(
                  _ == `email`
                    ? `#Cart_GiftRecipientEmail_Label`
                    : `#Cart_GiftRecipient_Label`,
                ),
              }),
              _ == `account` &&
                (0, _.jsx)(_, {
                  accountid: _.gift_info.accountid_giftee,
                }),
              _ == `none` &&
                (0, _.jsxs)(_, {
                  align: `center`,
                  gap: `2`,
                  marginStart: `2`,
                  wrap: `wrap`,
                  children: [
                    (0, _.jsx)(_, {
                      ..._,
                    }),
                    (0, _.jsx)(_, {
                      color: `dull`,
                      onClick: _,
                      children: _.Localize(`#Cart_EnterRecipientEmail`),
                    }),
                    !_.logged_in &&
                      (0, _.jsx)(_, {
                        onClick: _,
                        children: _.Localize(`#Cart_Gifting_SignInForFriends`),
                      }),
                  ],
                }),
              _ != `none` &&
                (0, _.jsxs)(_, {
                  onClick: _,
                  children: [
                    `(`,
                    _.Localize(
                      _ == `email` ? `#Cart_EditGiftDelivery` : `#Cart_Edit`,
                    ),
                    `)`,
                  ],
                }),
            ],
          }),
          (0, _.jsx)(_, {
            lineItem: _,
          }),
        ],
      }),
      _ == `email` &&
        (0, _.jsx)(_, {
          lineItem: _,
        }),
      _ == `account` &&
        (0, _.jsx)(_, {
          accountid: _.gift_info.accountid_giftee,
        }),
    ],
  });
}
function _(_) {
  let { lineItem: _, storeItem: _ } = _,
    [_, _] = _.useState(!1),
    { data: _ } = _(),
    _ = _.useMemo(() => {
      let _ = new Set();
      for (let _ of _?.line_items ?? [])
        _.line_item_id !== _.line_item_id &&
          _.gift_info?.accountid_giftee &&
          _.add(_.gift_info.accountid_giftee);
      return [..._];
    }, [_?.line_items, _.line_item_id]);
  return _.logged_in
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            onClick: () => _(!0),
            children: _.Localize(`#Cart_SelectRecipient`),
          }),
          _ &&
            (0, _.jsx)(_, {
              lineItem: _,
              storeItem: _,
              rgHighlightedAccountIDs: _,
              onClose: () => _(!1),
            }),
        ],
      })
    : null;
}
function _(_) {
  let { data: _ } = _(_.accountid);
  return _?.public_data
    ? (0, _.jsxs)(_, {
        align: `center`,
        children: [
          (0, _.jsx)(`a`, {
            href: _(_),
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, _.jsx)(_, {
              className: _,
              playerLinkDetails: _,
              size: `Small`,
              statusPosition: `right`,
              alt: _.public_data.persona_name ?? ``,
            }),
          }),
          _.public_data.persona_name,
        ],
      })
    : null;
}
function _(_) {
  let { lineItem: _ } = _,
    { mutate: _ } = _(),
    [_, _, _] = _(_.gift_info?.email_giftee ?? ``, 1e3);
  return (
    _.useEffect(() => {
      _ != (_.gift_info?.email_giftee ?? ``) &&
        _({
          lineItemID: _.line_item_id,
          lineItemFlags: _.flags,
          giftInfo: {
            ..._.gift_info,
            email_giftee: _,
            time_scheduled_send: 0,
          },
        });
    }, [_, _, _]),
    (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(_, {
          value: _,
          onTextChange: _,
          maxLength: _,
          status: _ && !_(_) ? `error` : void 0,
        }),
        (0, _.jsxs)(`ul`, {
          className: _,
          children: [
            (0, _.jsx)(`li`, {
              children: _.Localize(`#Cart_GiftDeliveryEmail_Warning1`),
            }),
            (0, _.jsx)(`li`, {
              children: _.Localize(
                `#Cart_GiftDeliveryEmail_Warning2`,
                _.country_code,
              ),
            }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { data: _ } = _(_.accountid),
    { data: _ } = _();
  return _?.public_data
    ? _.logged_in
      ? !_ || _.includes(_.public_data.steamid)
        ? null
        : (0, _.jsx)(_, {
            marginTop: `3`,
            className: _,
            children: (0, _.jsx)(_, {
              size: `3`,
              color: `amber-9`,
              children: _.LocalizeReact(
                `#Cart_Warning_GiftToNonFriend_Named`,
                (0, _.jsx)(_, {
                  target: `_blank`,
                  href: _(_),
                  children: _.public_data.persona_name,
                }),
              ),
            }),
          })
      : (0, _.jsx)(_, {
          marginTop: `3`,
          className: _,
          children: (0, _.jsx)(_, {
            size: `3`,
            color: `amber-9`,
            children: _(
              _.Localize(`#Cart_Warning_GiftToAccount_LoggedOut_Actionable`),
              (0, _.jsx)(_, {
                color: `text-light`,
                contrast: `title`,
                onClick: _,
              }),
            ),
          }),
        })
    : null;
}
function _(_) {
  let { lineItem: _ } = _,
    [_, _] = _.useState(_.gift_info?.gift_message?.message ?? ``),
    _ = _.useRef(_),
    [_, _] = _.useState(_.gift_info?.gift_message?.signature ?? ``),
    _ = _.useRef(_),
    [_, _] = _.useState(_.gift_info?.time_scheduled_send ?? 0),
    _ = _.useRef(_),
    _ = _.useRef(!1);
  _.useEffect(() => {
    _.current ||
      ((_.current = _.gift_info?.time_scheduled_send ?? 0),
      (_.current = _.gift_info?.gift_message?.message ?? ``),
      (_.current = _.gift_info?.gift_message?.signature ?? ``),
      _(_.current),
      _(_.current),
      _(_.current));
  }, [_.gift_info]);
  let _ = _(3e3),
    { mutate: _ } = _(),
    _ = _(),
    _ = _(),
    _ = _.useCallback(
      (_) => {
        _(() => {
          if (_.current) {
            let _ = _.getQueryData(_(_))?.line_items?.find(
              (_) => _.line_item_id === _.line_item_id,
            );
            (_({
              lineItemID: _.line_item_id,
              lineItemFlags: _.flags,
              giftInfo: {
                ..._?.gift_info,
                ..._,
              },
            }),
              (_.current = !1));
          }
        });
      },
      [_, _.line_item_id, _.flags, _, _, _],
    );
  _.useEffect(() => {
    (_.current != _ || _.current != _ || _.current != _) &&
      (_({
        gift_message: {
          message: _,
          signature: _,
        },
        time_scheduled_send: _,
      }),
      (_.current = _),
      (_.current = _),
      (_.current = _));
  }, [_, _, _, _]);
  let _ = _.useCallback((_) => {
    ((_.current = !0), _(_));
  }, []);
  return (0, _.jsx)(_, {
    strMessage: _,
    onMessageChange: (_) => {
      ((_.current = !0), _(_));
    },
    strSignature: _,
    onSignatureChange: (_) => {
      ((_.current = !0), _(_));
    },
    rtScheduledTime: _,
    onScheduledTimeChange: _,
    bShowScheduledTime: !_.gift_info?.email_giftee,
  });
}
function _(_) {
  let {
      strMessage: _,
      onMessageChange: _,
      strSignature: _,
      onSignatureChange: _,
      bShowScheduledTime: _,
      rtScheduledTime: _,
      onScheduledTimeChange: _,
    } = _,
    _ = _(),
    { data: _ } = _(_.logged_in ? _ : void 0),
    _ = _ - _.length,
    [_, _] = _.useState(!1),
    _ = _ || _.length > 0 || !_.logged_in;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            fullWidth: !0,
            children: _.LocalizeReact(
              `#Cart_GiftDelivery_Body`,
              (0, _.jsx)(`span`, {
                className: (0, _.default)(_ <= 0 && `JgMSk3YkOPs-`),
                children: _,
              }),
            ),
          }),
          (0, _.jsx)(_, {
            rows: 3,
            value: _,
            onTextChange: _,
            maxLength: _,
          }),
        ],
      }),
      _.logged_in &&
        (0, _.jsx)(_, {
          children: (0, _.jsxs)(`div`, {
            className: `_0t-CciboLAI-`,
            children: [
              (0, _.jsx)(_, {
                children: _.Localize(`#Cart_GiftDelivery_From`),
              }),
              _?.public_data &&
                (0, _.jsx)(_, {
                  className: `TpLCNcHeld0-`,
                  playerLinkDetails: _,
                  size: `Small`,
                  statusPosition: `right`,
                  alt: ``,
                }),
              _?.public_data?.persona_name ?? ``,
              !_ &&
                (0, _.jsxs)(_, {
                  onClick: () => _(!0),
                  children: [
                    `(`,
                    _.Localize(`#Cart_GiftDelivery_AddSignature`),
                    `)`,
                  ],
                }),
            ],
          }),
        }),
      _ &&
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              fullWidth: !0,
              children: _.Localize(`#Cart_GiftDelivery_Signature`),
            }),
            (0, _.jsx)(`div`, {
              className: `GHGko7sAUgg-`,
              children: (0, _.jsx)(_, {
                value: _,
                onTextChange: _,
                maxLength: _,
              }),
            }),
          ],
        }),
      _ &&
        (0, _.jsx)(_, {
          scheduledTime: _,
          onScheduledTimeChange: _,
        }),
    ],
  });
}
function _(_) {
  return _(_.gifteeAccountID)
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Cart_FamilyGift_Notice`),
      })
    : null;
}
function _(_) {
  let { lineItem: _ } = _,
    { data: _ } = _(),
    _ = _.useMemo(
      () =>
        (_?.line_items ?? []).filter(
          (_) =>
            _.line_item_id !== _.line_item_id &&
            !!_.flags?.is_gift &&
            !!_.gift_info &&
            (!!_.gift_info.accountid_giftee || !!_.gift_info.email_giftee),
        ),
      [_?.line_items, _.line_item_id],
    ),
    { mutate: _ } = _(),
    _ = _({
      rgOptions: _,
      selectedValue: null,
      onSelectionChange: (_) =>
        _({
          lineItemID: _.line_item_id,
          lineItemFlags: _.flags,
          giftInfo: {
            ..._.gift_info,
          },
        }),
    });
  return _.length
    ? (0, _.jsx)(_, {
        flexGrow: `0`,
        children: (0, _.jsxs)(_.Root, {
          state: _,
          children: [
            (0, _.jsx)(_.Trigger, {
              children: (0, _.jsx)(_, {
                children: _.Localize(`#Cart_Gifting_CopyGiftOptionsFrom`),
              }),
            }),
            (0, _.jsx)(_.Options, {
              children: _.map((_) =>
                (0, _.jsx)(
                  _.Option,
                  {
                    value: _,
                    children: (0, _.jsx)(_, {
                      lineItem: _,
                    }),
                  },
                  _.line_item_id,
                ),
              ),
            }),
          ],
        }),
      })
    : null;
}
function _(_) {
  let { lineItem: _ } = _,
    { data: _ } = _(
      _.bundleid
        ? {
            bundleid: _.bundleid,
          }
        : {
            packageid: _.packageid,
          },
    ),
    { data: _ } = _(_.gift_info?.accountid_giftee),
    _ = _?.public_data?.persona_name ?? _.gift_info?.email_giftee;
  return !_ || !_
    ? null
    : (0, _.jsxs)(_, {
        minWidth: `0`,
        align: `center`,
        justify: `between`,
        gap: `4`,
        maxWidth: `600px`,
        children: [
          (0, _.jsx)(`div`, {
            children: _.name,
          }),
          (0, _.jsxs)(_, {
            gap: `1`,
            align: `center`,
            children: [
              _?.public_data &&
                (0, _.jsx)(_, {
                  playerLinkDetails: _,
                  size: `X-Small`,
                  alt: ``,
                }),
              _,
            ],
          }),
        ],
      });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _.className),
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _.fullWidth && `ja5pZQ1RBqI-`),
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: (0, _.jsx)(_, {
      size: `1`,
      color: `dull-10`,
      underline: `always`,
      onClick: _.onClick,
      children: _.children,
    }),
  });
}
function _(_) {
  let { gidCart: _, onClose: _ } = _,
    _ = `${_.STORE_CHECKOUT_BASE_URL}checkout?purchasetype=self&cart=${_}`,
    _ = `${_.STORE_BASE_URL}join?guest=1&purchaseType=gift&checkout=1&redir=${encodeURIComponent(_)}`;
  return (0, _.jsx)(_, {
    onClose: _,
    navID: `CartGuestCheckoutModal`,
    strTitle: _.Localize(`#Cart_ContinueCheckout`),
    children: (0, _.jsxs)(_, {
      direction: `column`,
      gap: `4`,
      children: [
        (0, _.jsxs)(_, {
          direction: `row`,
          gap: `3`,
          children: [
            (0, _.jsx)(_, {
              onClick: _,
              width: `100%`,
              children: _.Localize(`#Login_SignIn`),
            }),
            (0, _.jsx)(_, {
              focusable: !0,
              href: _,
              color: `dull`,
              width: `100%`,
              children: _.Localize(`#Login_GuestContinue_Short`),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          marginTop: `2`,
          marginX: `2`,
          align: `center`,
          children: _(
            _.Localize(`#Login_Guest`),
            (0, _.jsx)(_, {
              href: _,
            }),
          ),
        }),
      ],
    }),
  });
}
function _(_) {
  let {
      cartID: _,
      eReplayError: _,
      countryOptions: _,
      requesterAccountID: _,
      bHistoryUnavailable: _,
      rtHistoryTimeCreated: _,
    } = _,
    [_, _] = _(_.step),
    [_, _] = _.useState(
      _
        ? {
            accountid_giftee: _,
          }
        : void 0,
    );
  return _
    ? (0, _.jsx)(_, {
        strTitle: _.Localize(`#Cart_Replay_SavedCart`),
        strError: _(_),
      })
    : _
      ? (0, _.jsx)(_, {
          strTitle: _.Localize(`#Cart_YourShoppingCart`),
          strError: _.Localize(`#Cart_History_Unavailable`),
        })
      : (0, _.jsx)(_, {
          cartID: _,
          step: _,
          setStep: _,
          cartWideGiftInfo: _,
          onCartWideGiftInfoChange: _ ? _ : void 0,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsxs)(_, {
                className: _,
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsx)(_, {
                    countryOptions: _,
                    rtHistoryTimeCreated: _,
                  }),
                ],
              }),
            ],
          }),
        });
}
function _(_) {
  let [_, _] = _.useState(() => _(_));
  return (
    _(
      _.useCallback(() => {
        let _ = _(_);
        (_(_), _(_));
      }, [_]),
    ),
    [
      _,
      _.useCallback((_) => {
        (_((_) => _, _(_)), _(_), _(_));
      }, []),
    ]
  );
}
function _(_) {
  return _(_ == `gifts` ? `gifts/` : ``);
}
function _(_) {
  if (typeof window > `u`) return _;
  let _ = window.location.pathname.replace(/\/+$/, ``);
  return _ == `/cart/gifts` ? `gifts` : _ == `/cart` ? `initial` : _;
}
function _(_) {
  document.title = _.Localize(
    _ == `gifts` ? `#Cart_GiftOptions` : `#Cart_ShoppingCart`,
  );
}
function _() {
  let _ = _(),
    [_] = _(),
    { data: _ } = _(),
    [_] = _(),
    { data: _ } = _(_(_) ? _?.accountid_giftee : void 0),
    _ = _?.line_items?.length ?? 0,
    _;
  return (
    (_ = _(_)
      ? _.Localize(
          `#Cart_PurchaseRequestTitle`,
          _?.public_data?.persona_name ?? ``,
        )
      : _ == `gifts`
        ? _.Localize(`#Cart_GiftOptions`)
        : _(_)
          ? _.Localize(`#Cart_Replay_SavedCart`)
          : _ > 0
            ? _.LocalizePlural(`#Cart_YourShoppingCartLineItems`, _)
            : _.Localize(`#Cart_YourShoppingCart`)),
    (0, _.jsx)(_, {
      strTitle: _,
    })
  );
}
function _(_) {
  let { strTitle: _ } = _,
    [_, _] = _(),
    _ = _(),
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ &&
        (0, _.jsxs)(`div`, {
          className: `OgjhAXUXuQw-`,
          children: [
            (0, _.jsx)(`a`, {
              href: _.STORE_BASE_URL,
              children: _.Localize(`#Cart_Bradcrumb_Home`),
            }),
            _ == `gifts` &&
              !_(_) &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  ` `,
                  `> `,
                  (0, _.jsx)(`button`, {
                    className: `SJQdNn4TmE8-`,
                    onClick: () => _(`initial`),
                    children: _.Localize(`#Cart_YourShoppingCart`),
                  }),
                ],
              }),
            ` `,
            (0, _.jsxs)(`span`, {
              className: `l3tXfL5lEk0-`,
              children: [`> `, _],
            }),
          ],
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  return _ == `region`
    ? _.Localize(`#Cart_Replay_Fatal_Region`)
    : _ == `replayed`
      ? `${_.Localize(`#Cart_Replay_Fatal`)} ${_.Localize(`#Cart_Replay_Fatal_Replayed`)}`
      : _ == `expired`
        ? `${_.Localize(`#Cart_Replay_Fatal`)} ${_.Localize(`#Cart_Replay_Fatal_Expired`, 72)}`
        : _.Localize(`#Cart_Replay_Fatal`);
}
function _(_) {
  let { strTitle: _, strError: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(_, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          strTitle: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { countryOptions: _, rtHistoryTimeCreated: _ } = _,
    _ = _(),
    { data: _, isFetching: _ } = _(),
    _ = _(),
    [_] = _(),
    [_, _] = _(),
    _ = _(),
    { bShowValidationNotices: _, bShowPageFooter: _ } = _(),
    _ = _(_.data),
    _ = _.some((_) => _.flags?.is_gift),
    _ = !_.data,
    _ = _?.estimated_totals?.subtotal?.formatted_amount;
  return (0, _.jsxs)(_, {
    validateCart: _ ? _ : void 0,
    eDisplayType: _.k_ECartDisplayType_FullPage,
    children: [
      (0, _.jsx)(_, {}),
      (0, _.jsxs)(_, {
        className: _,
        "flow-children": `row`,
        children: [
          (0, _.jsxs)(_, {
            className: _,
            autoFocus: !0,
            children: [
              _ &&
                _ &&
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(`div`, {
                    className: `A5wvDuCfNCI-`,
                    children: (0, _.jsx)(_, {
                      giftInfo: _,
                      onChange: _,
                    }),
                  }),
                }),
              _
                ? (0, _.jsx)(_, {})
                : (0, _.jsx)(_, {
                    children: (0, _.jsx)(_, {
                      lineItems: _,
                      cartValidation: _,
                      bValidating: _,
                      renderLineItem: _ == `gifts` ? _ : _,
                    }),
                  }),
              (0, _.jsx)(_, {
                validateCart: _,
              }),
              !_ &&
                (0, _.jsxs)(`div`, {
                  className: `UUuDEbOJLCU-`,
                  children: [
                    (0, _.jsx)(_, {
                      bCartIncludesGifts: _,
                      strEstimatedTotal: _,
                      countryOptions: _,
                      rtHistoryTimeCreated: _,
                    }),
                    (0, _.jsx)(_, {}),
                  ],
                }),
              _(_) && (0, _.jsx)(_, {}),
              _ &&
                (0, _.jsx)(_, {
                  bCartIsEmpty: !_.length,
                  bCartIncludesGifts: _,
                }),
            ],
          }),
          (0, _.jsx)(_, {
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  bCartIncludesGifts: _,
                  strEstimatedTotal: _,
                  countryOptions: _,
                  rtHistoryTimeCreated: _,
                }),
                (0, _.jsx)(_, {}),
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    bMinimalDisplay: !0,
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.Localize(`#Cart_Replay_Instructions`, 72),
  });
}
function _(_) {
  let { bCartIsEmpty: _, bCartIncludesGifts: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ &&
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {}),
        }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          bCartIsEmpty: _,
          bCartIncludesGifts: _,
        }),
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {}),
      }),
    ],
  });
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let { lineItem: _, storeItem: _, children: _ } = _;
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(_, {
        children: [
          _,
          !!_.flags?.is_gift &&
            (0, _.jsx)(_, {
              lineItem: _,
              storeItem: _,
            }),
        ],
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  return _.useMemo(
    () =>
      [...(_?.line_items ?? [])].sort((_, _) =>
        _.time_added == _.time_added
          ? (_.bundleid ?? _.packageid ?? 0) < (_.bundleid ?? _.packageid ?? 0)
            ? 1
            : -1
          : (_.time_added ?? 0) < (_.time_added ?? 0)
            ? 1
            : -1,
      ),
    [_?.line_items],
  );
}
function _(_) {
  let {
      strEstimatedTotal: _,
      bCartIncludesGifts: _,
      countryOptions: _,
      rtHistoryTimeCreated: _,
    } = _,
    { bCanPurchase: _ } = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsxs)(`div`, {
          className: (0, _.default)(`ZxG3hS-2Jjo-`, `_1mIUrXeHG3k-`),
          children: [
            (0, _.jsx)(`div`, {
              className: `fWNjRJXvRgI-`,
              children: _.Localize(`#Cart_UserCountrySelector`),
            }),
            (0, _.jsx)(_, {
              countryOptions: _,
            }),
          ],
        }),
      (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Cart_EstimatedTotal`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _),
        children: _.Localize(`#Cart_Note_SalesTax`),
      }),
      _
        ? (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                bCartIncludesGifts: _,
              }),
              (0, _.jsx)(_, {
                bCartIncludesGifts: _,
              }),
            ],
          })
        : (0, _.jsx)(_, {
            rtTimeCreated: _,
          }),
    ],
  });
}
function _(_) {
  let { rtTimeCreated: _ } = _,
    _ = _
      ? _.Localize(`#Cart_History_ReadOnly`, _(_))
      : _.Localize(`#Cart_History_ReadOnly_NoDate`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _(_) {
  let { bCartIncludesGifts: _ } = _,
    { bDisabled: _ } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        bDisabled: _ || _,
      }),
      (0, _.jsx)(_, {
        bDisabled: _,
      }),
    ],
  });
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _(),
    [_] = _(),
    _ = _.isSuccess && (_.data.cart_items ?? []).every((_) => !_.errors),
    _ = !!_.data?.line_items?.some(_),
    _ =
      _.logged_in &&
      ((_ == `initial` && !_ && !_) ||
        (_.isSuccess && !_.data?.line_items?.length));
  _ ||= _ == `gifts` && (!_ || _);
  let _;
  _ = _ && _ == `initial` && !_ ? `gifts` : _.logged_in ? `checkout` : `login`;
  let _ = _(),
    _ =
      _(_) &&
      _.gid &&
      _.gid != `18446744073709551615` &&
      (_(_.data) || _(_.data));
  return {
    bDisabled: _,
    eNextStep: _,
    gidGuestCart: _ ? _.gid : void 0,
  };
}
function _(_) {
  let { bCartIncludesGifts: _ } = _,
    { bDisabled: _, eNextStep: _, gidGuestCart: _ } = _(_),
    _ = _(),
    [_, _] = _.useState(!1),
    [_, _] = _(),
    _ = _.Localize(
      _ == `gifts`
        ? `#Cart_ContinueButton_Gifts`
        : `#Cart_ContinueButton_Payment`,
    ),
    _;
  return (
    (_ =
      _ == `gifts`
        ? (0, _.jsx)(_, {
            onClick: () => _(`gifts`),
            width: `100%`,
            disabled: _,
            children: _,
          })
        : _ == `login`
          ? (0, _.jsx)(_, {
              onClick: _ ? () => _(!0) : _,
              width: `100%`,
              disabled: _,
              children: _,
            })
          : (0, _.jsx)(_, {
              focusable: !0,
              href: _,
              width: `100%`,
              disabled: _,
              children: _,
            })),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _,
        _ &&
          (0, _.jsx)(_, {
            gidCart: _,
            onClose: () => _(!1),
          }),
      ],
    })
  );
}
function _(_) {
  let { bCartIsEmpty: _, bCartIncludesGifts: _ } = _;
  return (0, _.jsxs)(_, {
    "flow-children": `row`,
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            focusable: !0,
            color: `dull`,
            href: _.STORE_BASE_URL,
            children: _.Localize(`#Cart_ContinueShopping`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              bCartIncludesGifts: _,
            }),
          }),
        ],
      }),
      !_ && (0, _.jsx)(_, {}),
    ],
  });
}
function _() {
  let _ = _();
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      size: `2`,
      color: `dull-10`,
      underline: `always`,
      onClick: () => _.mutate(),
      children: _.Localize(`#Cart_RemoveAll`),
    }),
  });
}
function _() {
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(`img`, {
        src: `${_.STORE_CDN_URL}public/images/checkout/computer.png`,
        alt: ``,
      }),
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Cart_LicenseContextTitle`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.LocalizeReact(
              `#Cart_LicenseContextLink`,
              (0, _.jsx)(_, {
                href: `${_.STORE_BASE_URL}subscriber_agreement/`,
                children: _.Localize(`#Cart_LicenseContextSSA`),
              }),
            ),
          }),
        ],
      }),
    ],
  });
}
function _() {
  let _ = _.useRef(void 0),
    { data: _ } = _(),
    _ = _?.line_items?.length
      ? _.line_items.reduce((_, _) =>
          (_.time_added ?? 0) > (_.time_added ?? 0) ? _ : _,
        )
      : void 0,
    _;
  !_.current &&
    _ &&
    (_ = _.bundleid
      ? {
          bundleid: _.bundleid,
        }
      : _.packageid
        ? {
            packageid: _.packageid,
          }
        : void 0);
  let _ = _(_),
    { data: _ } = _(
      _.length
        ? {
            appid: _[0],
          }
        : void 0,
    );
  return (
    !_.current &&
      _?.page_background_path &&
      (_.current = `${_.STORE_CDN_URL}images/storepagebackground/${_.page_background_path}`),
    (0, _.jsx)(`div`, {
      className: _,
      style: _.current
        ? {
            backgroundImage: `url("${_.current}")`,
          }
        : void 0,
    })
  );
}
