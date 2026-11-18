import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~4c761eb6f4.js";
import { _ } from "./chunk~8c66e1c7a5.js";
import { _, _, _, _, _, _, _ } from "./chunk~f57d770d64.js";
import { _, _ } from "./chunk~9871ee5432.js";
import { _, _ } from "./chunk~b980924b6a.js";
import { _ } from "./chunk~521597d5f9.js";
import { _ } from "./chunk~d43c81a658.js";
import { _, _ } from "./chunk~ceada343dc.js";
import { _ } from "./chunk~e70aabe4d7.js";
import { _ } from "./chunk~710e3cfd2f.js";
import { _, _ } from "./chunk~ffe4581a06.js";
import { _ } from "./chunk~7b4b9eb713.js";
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
function _(_, _, _, _) {
  let { tagid: _, top_n_sellers: _, store_filter_json: _ } = _,
    _ = _.min_discount_percent ?? 1,
    _ = !!_.include_packages,
    _ = !!_.include_bundles,
    _ = !!_.include_dlc;
  return {
    queryKey: [
      `DiscountedItems`,
      _ ?? 0,
      _ ?? 0,
      _ ?? ``,
      _,
      _,
      _,
      _,
      _,
      _.country,
    ],
    queryFn: async () =>
      (
        await _(`DiscountedItems`, _, _, {
          start: 0,
          count: _,
          sort: 10,
          filters: {
            released_only: !0,
            type_filters: {
              include_games: !0,
              include_packages: _,
              include_bundles: _,
              include_dlc: _,
            },
            price_filters: {
              min_discount_percent: _,
            },
            tagids_must_match: _
              ? [
                  {
                    tagids: [_],
                  },
                ]
              : void 0,
            regional_top_n_sellers: _,
            store_page_filter: _
              ? {
                  store_filters: [
                    {
                      filter_json: _,
                    },
                  ],
                }
              : void 0,
          },
        })
      ).rgItemIDs,
    staleTime: 6e5,
  };
}
var _ = 3;
function _(_, _) {
  if (!_.is_coming_soon()) return !1;
  if (!_.min_discount_percent) return !0;
  let _ = _.best_purchase_option(!1);
  return !!_?.packageid() && (_?.discount_pct() ?? 0) >= _.min_discount_percent;
}
function _(_, _, _, _) {
  let { store_filter_json: _, min_discount_percent: _ } = _;
  return {
    queryKey: [`TopWishlistedComingSoon`, _ ?? ``, _ ?? 0, _, _.country],
    queryFn: async () => {
      let _ = new Map();
      return (
        await _(
          `TopWishlistedComingSoon`,
          _,
          _,
          {
            start: 0,
            count: _ * _,
            sort: 23,
            filters: {
              coming_soon_only: !0,
              exclude_from: [2, 4],
              type_filters: {
                include_games: !0,
                include_dlc: !0,
                include_software: !0,
                include_music: !0,
                include_hardware: !0,
              },
              price_filters: _
                ? {
                    min_discount_percent: _,
                  }
                : void 0,
              store_page_filter: _
                ? {
                    store_filters: [
                      {
                        filter_json: _,
                      },
                    ],
                  }
                : void 0,
            },
          },
          {
            data_request: {},
            cacheStoreItemData: (_) => {
              let _ = _({
                item_type: _.item_type(),
                _: _._(),
              });
              _ && _.set(_(_), _);
            },
          },
        )
      ).rgItemIDs
        .filter((_) => {
          let _ = _.get(_(_));
          return _ !== void 0 && _(_, _);
        })
        .slice(0, _);
    },
    staleTime: 6e5,
  };
}
var _ = 500,
  _ = 100;
function _(_, _, _, _, _, _ = 1) {
  return {
    queryKey: [`AccountOwnedDLCOnSale`, _ ?? 0, _, _.country, _],
    queryFn: async () => {
      if (!_) return [];
      let _ = await _.fetchQuery(_(_, _)),
        _ = Array.from(_).slice(0, _);
      return _.length
        ? (
            await _(`SaleTechOwnedDLCOnSale`, _, _, {
              start: 0,
              count: _,
              sort: 10,
              filters: {
                released_only: !0,
                type_filters: {
                  include_dlc: _ === `dlc`,
                  include_music: _ === `music`,
                },
                price_filters: {
                  min_discount_percent: _,
                },
                parent_appids: _,
              },
            })
          ).rgItemIDs.flatMap((_) => (`appid` in _ ? [_.appid] : []))
        : [];
    },
    staleTime: 6e5,
  };
}
async function _(_, _) {
  _.set(`origin`, location.origin);
  let _ = `${_.STORE_BASE_URL}saleaction/${_}?${_}`,
    _ = await fetch(_);
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  if (_?.success != 1) throw Error(`${_} answered EResult ${_?.success}`);
  return _;
}
async function _(_) {
  let _ = await _(
    `ajaxgetpopularcompatlist`,
    new URLSearchParams({
      compatDevice: _,
    }),
  );
  if (!_.list) throw Error(`ajaxgetpopularcompatlist answered without a list`);
  return _.list;
}
var _ = 3e5;
function _(_) {
  return [`PopularCompatList`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: () => _(_),
    staleTime: _,
    retry: !1,
  };
}
var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext(void 0);
function _() {
  return _.useContext(_) ?? _();
}
var _ = _.createContext(void 0);
function _() {
  return _.useContext(_);
}
function _(_, _, _, _) {
  if (_ === void 0 || _.length <= 1 || !_(_, _, void 0)) return _;
  let _ = _(_ + (_.unique_id ?? 0));
  return _([..._], _.random_order_top_x ?? 0, _);
}
function _(_, _, _, _) {
  if (_.length <= _) return _;
  if (_ === void 0) return _.slice(0, _);
  let _ = _(_ + (_.unique_id ?? 0));
  return _([..._], 0, _).slice(0, _);
}
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code);
  return ((await (await fetch(_)).json()).rgRecommendedApps ?? []).map(Number);
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => (_ ? _(_, _) : []),
    staleTime: 6e5,
  };
}
function _(_) {
  return [`AccountRecommendedApps`, _ ?? 0];
}
var _ = 100;
function _(_, _, _, _, _ = 1) {
  return {
    queryKey: [`AccountRecommendedAppsOnSale`, _ ?? 0, _.cacheScope ?? ``, _],
    queryFn: async () => {
      if (!_) return [];
      let _ = (await _.fetchQuery(_(_, _))).slice(0, _),
        _ = await Promise.all(
          _.map((_) =>
            _.fetchQuery(
              _(_, {
                appid: _,
              }),
            ),
          ),
        );
      return _.filter(
        (_, _) => (_[_]?.best_purchase_option?.discount_pct ?? 0) >= _,
      );
    },
    staleTime: 6e5,
  };
}
function _(_) {
  return _.section_type === `crosspromotesalepage`
    ? (_.sale_page_cross_promo_sales ?? [])
    : [];
}
function _(_) {
  return _(_).map((_) => ({
    ..._,
    sale_page_cross_promo_sales: [_],
    capsules: _.capsules ?? [],
  }));
}
function _(_) {
  return _(_)[0]?.event_gid || void 0;
}
function _(_) {
  return _(_).flatMap((_) => _.event_gid || []);
}
function _(_) {
  return _(_)[0]?.featured_app_tagid || void 0;
}
function _(_) {
  let _ = _(_);
  return _.length > 0 && _.every((_) => (_.capsules?.length ?? 0) > 0);
}
function _(_, _) {
  return _(_) ? (_?.BIsVisibleEvent() ? null : `missing`) : `setup`;
}
function _(_) {
  let _ = _(_)[0];
  return _?.creator_clan_account_id
    ? !!_.capsules?.length
    : !!_?.event_gid && (!!_.featured_app_tagid || !!_.capsules?.length);
}
function _(_, _) {
  return _
    ? _(`#Sale_CrossPromoSale_SectionTitle`, _.GetNameWithFallback(_) ?? ``)
    : _(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function _(_, _) {
  let _ = _.GetELanguageFallback(_),
    _ =
      _.jsondata.localized_sale_cross_promo_logo_image?.findIndex((_) => !!_) ??
      -1;
  return (
    _.GetImageURL(`sale_cross_promo_logo`, _) ||
    _.GetImageURL(`sale_cross_promo_logo`, _) ||
    (_ >= 0 ? _.GetImageURL(`sale_cross_promo_logo`, _) : void 0) ||
    _.GetImageURL(`sale_logo`, _) ||
    _.GetImageURL(`sale_logo`, _)
  );
}
function _(_) {
  return 3;
}
function _(_) {
  return _.type !== `sub` && _.type !== `bundle`;
}
function _(_, _, _, _) {
  let _ = [];
  for (let _ of _)
    if ((!_ || _.has(_)) && !_(_) && (_.push(_), _.length >= _)) break;
  return _;
}
function _(_, _, _, _ = new Set()) {
  for (let _ of _.GetSaleSections())
    if (!(!_(_.section_type) || (_ && !_.BIncludeSection(_))))
      for (let _ of _.capsules) _(_) && _.add(_._);
  for (let _ of _ ?? []) {
    let _ = _.capsule;
    _(_) && (!_ || _.BIncludeLinkedCapsule(_)) && _.add(_._);
  }
  return _;
}
function _(_, _, _) {
  return {
    nSaleTagID: _.BUsesContentHubForItemSource()
      ? void 0
      : _.featured_app_tagid,
    strContentHubType: _.GetContentHubType(),
    strContentHubCategory: _.GetContentHubCategory(),
    nContentHubTagID: _.GetContentHubTag(),
    bDiscountsOnly: _.BContentHubDiscountedOnly(),
    bPrioritizeDiscounts: _,
    strOptInName: _.jsondata.prune_list_optin_name,
    nOptInTagID: _.jsondata.optin_tagid,
    nPruneTagID: _.jsondata.optin_prune_tagid,
    bOptInOnly: _.jsondata.optin_only,
    nCreatorClanAccountId: _ ? _.clanSteamID.GetAccountID() : void 0,
  };
}
var _ = 4;
function _(_) {
  return _.GetSaleSections().filter(
    (_) => _(_.section_type) && _(_) === `personalized_carousel`,
  );
}
function _(_) {
  return _(_)[0];
}
function _(_) {
  if (_.appid())
    return {
      _: _.appid(),
      type: `game`,
    };
  if (_.bundleid())
    return {
      _: _.bundleid(),
      type: `bundle`,
    };
  if (_.packageid())
    return {
      _: _.packageid(),
      type: `sub`,
    };
}
function _(_, _, _, _, _, _) {
  let _ = _(_),
    _ = {
      rgSections: _.map((_) => ({
        eSort: _.smart_section_personalized_carousel_sort ?? 13,
        nMinItems: _.smart_section_personalized_carousel_min_items ?? _,
        bRandomize: !!_.smart_section_personalized_carousel_randomize,
        bIncludePackages: _.smart_section_include_packages,
        bIncludeBundles: _.smart_section_include_bundles,
        bIncludeDLC: _.smart_section_include_dlc,
        nMinDiscountPercent:
          _.smart_section_min_discount_percent === void 0 ? void 0 : _(_),
      })),
      storePageFilter: _(_, !!_[0]?.prioritize_discounts, _),
      strStoreFilterJSON: _[0] ? _(_[0]) : void 0,
      strTabStoreFilterJSON: _ ? JSON.stringify(_) : void 0,
    };
  return {
    queryKey: [
      `SaleTech`,
      `PersonalizedCarousels`,
      _,
      _.country,
      _.language,
      JSON.stringify(_),
    ],
    queryFn: () => _(_, _, _, _),
    staleTime: 1 / 0,
  };
}
async function _(_, _, _, _) {
  if (!_ || _.rgSections.length === 0) return [];
  let _ = _.Init(_);
  for (let _ of _.rgSections) {
    let _ = _.Body().add_sections();
    (_.set_sort(_.eSort),
      _.set_min_items(_.nMinItems),
      _.set_randomize(_.bRandomize),
      _.set_include_packages(!!_.bIncludePackages),
      _.set_include_bundles(!!_.bIncludeBundles),
      _.set_include_dlc(_.bIncludeDLC),
      _.set_min_discount_percent(_.nMinDiscountPercent));
  }
  (_.Body().set_context(_(_)),
    _.Body().set_filters(_(_.storePageFilter, !1)),
    _.strStoreFilterJSON &&
      _.Body()
        .filters(!0)
        .add_store_filters()
        .set_filter_json(_.strStoreFilterJSON),
    _.strTabStoreFilterJSON &&
      _.Body()
        .filters(!0)
        .add_store_filters()
        .set_filter_json(_.strTabStoreFilterJSON));
  let _ = await _.GetItemsByUserRecommendedTags(_, _);
  if (_.GetEResult() != 1)
    throw Error(`GetItemsByUserRecommendedTags failed: ${_.GetEResult()}`);
  return _.Body()
    .sections()
    .map((_) => ({
      strTagName: _.tag_name() ?? ``,
      rgCapsules: _.store_item_ids().flatMap((_) => {
        let _ = _(_);
        return _ ? [_] : [];
      }),
    }));
}
function _(_, _) {
  let _ = _.GetSaleSections().filter(
    (_) => _(_.section_type) && _(_) == `personalized_carousel`,
  );
  if (_.length == 0)
    return {
      nNumSections: 0,
      nSectionIndex: -1,
    };
  let _ = _.findIndex((_) => _.unique_id == _.unique_id);
  return {
    nNumSections: _.length,
    nSectionIndex: _,
  };
}
function _(_) {
  return _(_) === `frame_compatibility` ? `frame` : `deck`;
}
function _(_, _) {
  let _ = _.smart_section_deck_compatibility ?? 3;
  switch (_) {
    case 3:
      return _.verifiedList ?? [];
    case 2:
      return _.playableList ?? [];
    case 1:
      return _.unsupportedList ?? [];
    case 0:
      return _.unknownList ?? [];
  }
  return (
    console.error(
      `GetAppsForSectionCompatCategory: unexpected compatibility category ${_}`,
    ),
    []
  );
}
var _ = [
    {
      nOptInTagID: 9,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 19,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 21,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 122,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 599,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 699,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: 701,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: 599,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: _,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: _,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nOptInTagID: _,
      rgChildren: [
        {
          eContentDescriptor: 3,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
  ],
  _ = [
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: 122,
        },
        {
          nTagID: 9,
        },
        {
          nTagID: 597,
        },
        {
          nTagID: 19,
        },
        {
          nTagID: 21,
        },
        {
          nTagID: 599,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: 122,
        },
        {
          nTagID: 9,
        },
        {
          nTagID: 597,
        },
        {
          nTagID: 19,
        },
        {
          nTagID: 21,
        },
        {
          nTagID: 599,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: 9,
        },
        {
          nTagID: 122,
        },
        {
          nTagID: 19,
        },
        {
          nTagID: 21,
        },
        {
          nTagID: 597,
        },
        {
          nTagID: 599,
        },
      ],
    },
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: 19,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: 599,
        },
        {
          nTagID: 21,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      nTagID: _,
      rgChildren: [
        {
          nTagID: 21,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      eContentDescriptor: 3,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
  ],
  _ = [
    {
      strOptInTag: `option_58733`,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: 128,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      strOptInTag: `option_40066`,
      rgChildren: [
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
        {
          nTagID: _,
        },
      ],
    },
    {
      strAppType: `software`,
    },
    {
      strFeature: `vr`,
    },
    {
      strFeature: `mac`,
    },
  ],
  _ = {
    linux: `#Platform_Linux`,
    mac: `#Platform_Mac`,
    _: `#Platform_VR`,
    "vr only": `#Sale_Tabs_TagFilter_Feature_VROnly`,
    free: `#Sale_Tabs_TagFilter_Feature_Free`,
    discounted: `#Sale_Tabs_TagFilter_Feature_Discounted`,
    "xbox controller": `#ControllerSupportLabelTitle`,
    "full controller": `#Store_ControllerFilter_Xbox`,
    "ps4 controller": `#Store_ControllerFilter_PS4`,
    "ps5 controller": `#Store_ControllerFilter_PS5`,
    "remote play together": `#Sale_Tabs_TagFilter_Feature_RemotePlayTogether`,
    "steam deck verified": `#Sale_Tabs_TagFilter_Feature_SteamDeckVerified`,
  },
  _ = [
    {
      strClass: `genre`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Genre`,
      rgNodes: _,
    },
    {
      strClass: `theme`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Theme`,
      rgNodes: _,
    },
    {
      strClass: `feature`,
      strLocToken: `#Sale_Tabs_TagFilter_Class_Feature`,
      rgNodes: _,
    },
  ];
function _(_) {
  return _?.rgNodes
    ? _.rgNodes
    : (_.find((_) => _.strClass === _?.tag_class)?.rgNodes ?? []);
}
function _(_) {
  return _.nTagID
    ? String(_.nTagID)
    : _.nOptInTagID || _.strOptInTag
      ? `optin:` + _(_)
      : _.eContentDescriptor
        ? `descriptor:` + _.eContentDescriptor
        : _.strFeature
          ? `feature:` + _.strFeature
          : `apptype:` + _.strAppType;
}
function _(_) {
  if (_.strFeature) return _[_.strFeature];
  if (_.strAppType) return `#AppTypeLabel_` + _.strAppType;
}
function _(_) {
  if (_)
    return _.strChildKey
      ? _.strParentKey + `,` + _.strChildKey
      : _.strParentKey;
}
var _ = `tabtag`,
  _ = `tabsubtag`;
function _(_, _) {
  if (_)
    return {
      strParentKey: _,
      strChildKey: _ || void 0,
    };
}
function _(_) {
  return {
    [_]: _?.strParentKey ?? null,
    [_]: _?.strChildKey ?? null,
  };
}
function _(_, _, _) {
  if (!_) return;
  let _ = _(_(_), _.strParentKey);
  if (!_ || !_(_)) return;
  if (!_.strChildKey) return _;
  let _ = _(_.rgChildren ?? [], _.strChildKey);
  return !_ || !_(_)
    ? {
        strParentKey: _.strParentKey,
      }
    : _;
}
function _(_) {
  return _.strOptInTag ?? String(_.nOptInTagID);
}
function _(_, _) {
  return _.nOptInTagID || _.strOptInTag
    ? (_(_, `Opt-in registration tag used on a sale without an opt-in`),
      {
        type: _.k_EStoreFilterClauseTypeOptInRegistrationTag,
        optin: _,
        value: _(_),
      })
    : _.nTagID
      ? {
          type: _.k_EStoreFilterClauseTypeStoreTag,
          value: _.nTagID,
        }
      : _.eContentDescriptor
        ? {
            type: _.k_EStoreFilterClauseTypeContentDescriptor,
            value: _.eContentDescriptor,
          }
        : _.strFeature
          ? {
              type: _.k_EStoreFilterClauseTypeFeatureTag,
              value: _.strFeature,
            }
          : {
              type: _.k_EStoreFilterClauseTypeAppType,
              value: _.strAppType,
            };
}
function _(_, _) {
  return _.find((_) => _(_) === _);
}
function _(_, _, _) {
  if (!_) return;
  let _ = _(_(_), _.strParentKey);
  if (!_) return;
  if (!_.strChildKey) return _(_, _);
  let _ = _(_.rgChildren ?? [], _.strChildKey);
  if (_)
    return {
      type: _.k_EStoreFilterClauseTypeAnd,
      rgSubexpressions: [_(_, _), _(_, _)],
    };
}
function _() {
  let [_] = _(`tab`),
    _ = _.useCallback(
      (_, _) =>
        _({
          ..._,
          tab: String(_),
        }),
      [],
    );
  return [_(_), _];
}
function _(_) {
  return _ === null ? 0 : Number(_);
}
function _(_) {
  let [_] = _();
  return _(_, _);
}
function _(_, _) {
  let _ = _(_);
  return _.find((_) => _.unique_id === _) ?? _[0];
}
function _(_) {
  return (
    _.GetSaleSectionFirstMatchByType(`tabs`)?.tabs?.filter((_) => !_.hide) ?? []
  );
}
function _(_, _, _, _) {
  if (!_ || _.diable_tab_id_filtering) return;
  let _ = _.jsondata.sale_opt_in_page_name || _.jsondata.prune_list_optin_name,
    _ = _(_, _.tab_tag_filter, _),
    _ =
      _.store_filter && _
        ? {
            type: _.k_EStoreFilterClauseTypeAnd,
            rgSubexpressions: [_.store_filter, _],
          }
        : (_.store_filter ?? _);
  if (_) return _(_, _, _) ? _ : void 0;
}
function _(_, _, _) {
  let _ = _.GetSaleSections(),
    _ = _.findIndex((_) => _.section_type === `tabs`);
  return _ < 0 || !_[_].tabs?.includes(_) ? !1 : _.indexOf(_) > _;
}
function _(_, _) {
  let _ = _(_);
  return !_ || _ === _(_)[0] || _.diable_tab_id_filtering || !_(_, _, _)
    ? ``
    : `tabid${_.unique_id}`;
}
function _(_) {
  let _ = _.useSyncExternalStore(_, _, _);
  return [
    new URLSearchParams(_).get(_),
    _.useCallback(
      (_) =>
        _({
          [_]: _ ?? null,
        }),
      [_],
    ),
  ];
}
function _() {
  return location.search;
}
function _(_) {
  let _ = new URL(window.location.href);
  for (let [_, _] of Object.entries(_))
    _ === null ? _.searchParams.delete(_) : _.searchParams.set(_, _);
  _.href !== window.location.href && _((_) => _, _);
}
function _(_) {
  let _ = _(_),
    _ = _(),
    [_] = _(_),
    [_] = _(_),
    _ = _.useCallback(
      (_, _) =>
        _({
          ..._,
          ..._(_),
        }),
      [],
    );
  return [_(_(_, _), _?.tab_tag_filter, _), _];
}
function _() {
  let { data: _ } = _();
  return _.useMemo(() => _(_), [_]);
}
function _(_) {
  let _ = !!_.logged_in && _.EREALM !== _.k_ESteamRealmChina && _ !== void 0,
    _ = new Set(_(_));
  return (_) => !_.eContentDescriptor || (_ && !_.has(_.eContentDescriptor));
}
function _(_, _) {
  let _ = _(_),
    [_] = _(_);
  return _(_, _, _, _);
}
var _ = 50;
function _(_, _, _) {
  let { defaultInfo: _ } = _;
  switch (_.type) {
    case _.k_EStoreFilterClauseTypeStoreTag:
      return !!_.tags?.some((_) => _.tagid === _.value);
    case _.k_EStoreFilterClauseTypeFeatureTag:
      switch (_.value) {
        case `linux`:
          return !!_.platforms?.steamos_linux;
        case `mac`:
          return !!_.platforms?.mac;
        case `vr`:
          return !!_.platforms?.vr_support?.vrhmd;
        case `vr only`:
          return !!_.platforms?.vr_support?.vrhmd_only;
        case `free`:
          return !!_?.is_free;
        case `discounted`:
          return (_?.best_purchase_option?.discount_pct ?? 0) > 0;
        default:
          return !1;
      }
    case _.k_EStoreFilterClauseTypeAppType:
      return (
        (_?.item_type !== void 0 && _.type !== void 0
          ? _(_.item_type, _.type)
          : `game`) === _.value
      );
    case _.k_EStoreFilterClauseTypeLanguage: {
      let _ = _(String(_.value));
      return !!_.supportedLanguages?.some(
        (_) =>
          _.elanguage === _ && (_.supported || _.subtitles || _.full_audio),
      );
    }
    case _.k_EStoreFilterClauseTypeContentDescriptor:
      return !!_?.content_descriptorids?.some((_) => _ === _.value);
    case _.k_EStoreFilterClauseTypePrice: {
      let _ = _?.free_weekend,
        _ = !!_ && (_.start_time ?? 1 / 0) <= _ && _ <= (_.end_time ?? 0),
        _ = _?.best_purchase_option?.final_price_in_cents,
        _ = _ ? Number.parseInt(_) : 1 / 0;
      return (
        !!_?.is_free ||
        !!_?.is_free_temporarily ||
        _ ||
        _ <= Number(_.value) * 100
      );
    }
    case _.k_EStoreFilterClauseTypeOr: {
      let _ = _.rgSubexpressions?.some((_) => _(_, _, _)) ?? !1;
      return _.bNegated ? !_ : _;
    }
    case _.k_EStoreFilterClauseTypeAnd: {
      let _ = _.rgSubexpressions?.every((_) => _(_, _, _)) ?? !1;
      return _.bNegated ? !_ : _;
    }
    case _.k_EStoreFilterClauseTypeOptInRegistrationTag:
      return !!(
        _.optin &&
        _.optInRegistrationTags
          ?.find((_) => _.optin_name === _.optin)
          ?.values?.includes(String(_.value))
      );
    default:
      return !0;
  }
}
function _(_, _, _, _, _) {
  return {
    queryKey: [
      `StoreFilterPassingApps`,
      _.cacheScope,
      _ && JSON.stringify(_),
      _,
      _,
    ],
    queryFn: () =>
      _(
        _,
        _,
        _,
        (_) => ({
          appid: _,
        }),
        _,
        _,
      ),
    enabled: !!(_ && _),
    staleTime: 6e5,
  };
}
function _(_, _, _, _, _) {
  return {
    queryKey: [
      `StoreFilterPassingItems`,
      _.cacheScope,
      _ && JSON.stringify(_),
      _,
      _?.map(_),
    ],
    queryFn: () => _(_, _, _, (_) => _, _, _),
    enabled: !!(_ && _),
    staleTime: 6e5,
  };
}
async function _(_, _, _, _, _, _) {
  let _ = _(_, {
      bTags: !1,
      bPlatforms: !1,
      bLanguages: !1,
      bOptInRegistrationTags: !1,
    }),
    _ = Math.floor(Date.now() / 1e3),
    _ = [];
  for (let _ = 0; _ < _.length && _.length < _; _ += _) {
    let _ = _.slice(_, _ + _),
      _ = await Promise.all(_.map((_) => _(_, _, _(_), _)));
    _.forEach((_, _) => {
      _.length < _ && _(_, _[_], _) && _.push(_);
    });
  }
  return _;
}
function _(_, _) {
  switch (_.type) {
    case _.k_EStoreFilterClauseTypeStoreTag:
      _.bTags = !0;
      break;
    case _.k_EStoreFilterClauseTypeFeatureTag:
      _.bPlatforms = !0;
      break;
    case _.k_EStoreFilterClauseTypeLanguage:
      _.bLanguages = !0;
      break;
    case _.k_EStoreFilterClauseTypeOptInRegistrationTag:
      _.bOptInRegistrationTags = !0;
      break;
    case _.k_EStoreFilterClauseTypeOr:
    case _.k_EStoreFilterClauseTypeAnd:
      _.rgSubexpressions?.forEach((_) => _(_, _));
  }
  return _;
}
async function _(_, _, _, _) {
  let [_, _, _, _, _] = await Promise.all([
    _.fetchQuery(_(_, _)).catch(() => void 0),
    _.bTags ? _.fetchQuery(_(_, _)).catch(() => null) : null,
    _.bPlatforms ? _.fetchQuery(_(_, _)).catch(() => null) : null,
    _.bLanguages ? _.fetchQuery(_(_, _)).catch(() => null) : null,
    _.bOptInRegistrationTags ? _.fetchQuery(_(_, _)).catch(() => null) : null,
  ]);
  return {
    defaultInfo: _,
    tags: _,
    platforms: _,
    supportedLanguages: _,
    optInRegistrationTags: _,
  };
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.count || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            count: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            additional_source_items: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recommendations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recommendations: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_id: {
              _: 1,
              _: _,
            },
            weight: {
              _: 2,
              _: _.readFloat,
              _: _.writeFloat,
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response_Recommendation`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.count || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            count: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            item_ids: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recommendations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recommendations: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_id: {
              _: 1,
              _: _,
            },
            weight: {
              _: 2,
              _: _.readFloat,
              _: _.writeFloat,
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
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response_Recommendation`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.start || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count: {
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
      return `CStoreRecommendations_GetLiveSales_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sales || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sales: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_count: {
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
      return `CStoreRecommendations_GetLiveSales_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_account_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            clan_event_gid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CStoreRecommendations_GetLiveSales_Response_Sale`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendations#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetPackagePurchaseRecommendations = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendationsForItems#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetPackagePurchaseRecommendationsForItems = _;
  function _(_, _, _) {
    return _.SendMsg(`StoreRecommendations.GetLiveSales#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  _.GetLiveSales = _;
})((_ ||= {}));
var _ = `saleaction/recommendeddiscounts`;
function _(_) {
  let _ = new URLSearchParams(),
    { contentHub: _ } = _;
  return (
    _ &&
      (_.set(`hub_type`, _.strHubType),
      _.strCategory && _.set(`hub_category`, _.strCategory),
      _.nTagID && _.set(`hub_tagid`, String(_.nTagID))),
    _.toString()
  );
}
async function _(_, _, _) {
  let _ = _(_),
    _ = `${_.STORE_BASE_URL}${_}${_ ? `?${_}` : ``}`,
    _ = await fetch(_, {
      credentials: `include`,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  if (_?.success !== 1 || !_.discounts)
    throw Error(`${_} answered EResult ${_?.success}`);
  return _.discounts;
}
var _ = 6e5;
function _(_, _, _, _) {
  return {
    queryKey: [
      `RecommendedDiscounts`,
      _ ?? 0,
      _.country,
      _ ? JSON.stringify(_) : null,
    ],
    queryFn: () =>
      _(_, _.country, {
        contentHub: _,
      }),
    staleTime: _,
  };
}
function _(_, _) {
  return _.rgReasonLists.find((_) => _.eReason === _)?.rgAppIDs ?? [];
}
function _(_) {
  if (_.jsondata.item_source_type !== _.k_EContentHub) return;
  let _ = _.GetContentHub();
  if (_?.type)
    return {
      strHubType: _.type,
      strCategory: _.category,
      nTagID: _.tagid,
    };
}
function _(_, _, _) {
  if (_)
    return _.smart_section_discount_reason === void 0
      ? []
      : _(_, _.smart_section_discount_reason).slice(0, _);
}
var _ = {
  1: `#Sale_default_label_OnYourWishlist`,
  2: `#Sale_DiscountReason_Section_FirstTimeOnSale`,
  3: `#Sale_DiscountReason_Section_LargestDiscount`,
  4: `#Sale_DiscountReason_Section_EndingSoon`,
  5: `#Sale_DiscountReason_Section_NewlyOnSale`,
  6: `#Sale_DiscountReason_Section_WellReviewed`,
  7: `#Sale_DiscountReason_Section_TopSeller`,
  8: `#Sale_DiscountReason_Section_HotDeal`,
  9: `#Sale_DiscountReason_Section_DeepDiscount`,
};
function _(_) {
  return _.smart_section_discount_reason === void 0
    ? void 0
    : _[_.smart_section_discount_reason];
}
function _(_, _) {
  return _.BUsesContentHubForItemSource() || !!_.hide_owned_items;
}
function _(_, _, _) {
  if (!_) return !1;
  let _ = !_?.bHasHideIgnoredValue || _.bHideIgnored;
  return (_.ignored && _) ||
    (_.excluded_tagids?.length ?? 0) > 0 ||
    (_.excluded_content_descriptorids?.length ?? 0) > 0 ||
    (_?.bHideOwned && _.already_owned) ||
    (_?.bHideWishlisted && _.on_wishlist)
    ? !0
    : _ && !!(_.already_owned || _.demo_for_owned_game);
}
function _(_) {
  return _.map((_) => _.data);
}
function _(_) {
  return _.map((_) => _.data?.visible === !1);
}
function _(_, _, _, _, _) {
  let _ = _(),
    _ = _(_, _),
    _ = !!_?.bHideOwned,
    _ = !!_?.bHideWishlisted,
    _ = !!_?.bHideIgnored,
    _ = !!_?.bHasHideIgnoredValue,
    _ = _({
      queries: (_ ?? []).map((_) => {
        let _ = _(_, _(_));
        return _
          ? {
              ..._,
              enabled: !1,
            }
          : _;
      }),
      combine: _,
    }),
    _ = _({
      queries: (_ ?? []).map((_) => ({
        ..._(_, _(_)),
        enabled: !1,
      })),
      combine: _,
    });
  return (0, _.useMemo)(() => {
    if (!_)
      return {
        capsules: void 0,
        nHiddenCapsules: 0,
      };
    let _ = {
        bHideOwned: _,
        bHideWishlisted: _,
        bHideIgnored: _,
        bHasHideIgnoredValue: _,
      },
      _ = 0;
    return {
      capsules: _.filter((_, _) => {
        if (_[_]) return !1;
        let _ = _[_];
        return !_(_, _, _) || ((!_?.already_owned || _) && _++, !1);
      }),
      nHiddenCapsules: _,
    };
  }, [_, _, _, _, _, _, _, _]);
}
function _(_) {
  let { capsules: _ } = _,
    _ = _();
  return (
    _({
      queries: (_ ?? []).map((_) => _(_, _(_))),
      combine: _,
    }),
    null
  );
}
function _() {
  return null;
}
var _ = {
    popularity: {
      eType: `game`,
      bDropsOwned: !1,
    },
    wishlist: {
      eType: `game`,
      bDropsOwned: !0,
    },
    interactive_recommender: {
      eType: `game`,
      bDropsOwned: !0,
    },
    wishlist_onsale: {
      eType: `game`,
      bDropsOwned: !0,
    },
    interactive_recommender_onsale: {
      eType: `game`,
      bDropsOwned: !0,
    },
    dlc_onsale: {
      eType: `dlc`,
      bDropsOwned: !0,
    },
    dlc_music_onsale: {
      eType: `music`,
      bDropsOwned: !0,
    },
    discount_reason: {
      eType: `game`,
      bDropsOwned: !1,
    },
  },
  _ = 24,
  _ = 100,
  _ = 500;
function _(_) {
  return Math.max(1, _.smart_section_min_discount_percent ?? 1);
}
function _(_) {
  return _(_) && _[_].bDropsOwned;
}
function _(_) {
  return _ !== void 0 && _ in _;
}
function _(_, _, _, _) {
  let _ = _(_),
    _ =
      _ === `tag`
        ? {
            tagid: _.smart_section_tag,
          }
        : _ === `top_n`
          ? {
              top_n_sellers: _,
            }
          : {};
  return (
    (_.min_discount_percent = _(_)),
    (_.include_packages = _.smart_section_include_packages),
    (_.include_bundles = _.smart_section_include_bundles),
    (_.include_dlc = _.smart_section_include_dlc),
    _ && (_.store_filter_json = JSON.stringify(_)),
    _(
      _,
      _,
      _,
      _ === `tag` && _.random_from_entire_set
        ? _
        : _.smart_section_max_apps || _,
    )
  );
}
function _(_, _, _, _) {
  return _(
    _,
    _,
    {
      min_discount_percent: _.smart_section_min_discount_percent || void 0,
      store_filter_json: _ ? JSON.stringify(_) : void 0,
    },
    _(_),
  );
}
function _(_, _) {
  if (_(_)) return `manual`;
  if (_.section_type !== `items`) return;
  let _ = _(_);
  if (_.enable_faceted_browsing) return _ === void 0 ? `faceted` : void 0;
  if (_ === void 0) return `manual`;
  if (
    (_ === `deck_compatibility` || _ === `frame_compatibility`) &&
    _.smart_section_data_source === `popularity`
  )
    return `popularity`;
  if (
    ((_ === `wishlist` || _ === `interactive_recommender`) &&
      _.jsondata.item_source_type !== _.k_EContentHub) ||
    _ === `wishlist_onsale` ||
    _ === `interactive_recommender_onsale` ||
    _ === `dlc_onsale` ||
    _ === `dlc_music_onsale`
  )
    return _;
  if (_ === `tag` && _.smart_section_tag) return `tag`;
  if (_ === `top_n`) return `top_n`;
  if (_ === `all_discounted`) return `all_discounted`;
  if (_ === `topwishlisted`) return `topwishlisted`;
  if (_ === `personalized_carousel`) return `personalized_carousel`;
  if (_ === `discount_reason`) return `discount_reason`;
}
function _(_, _, _) {
  let _ = _.GetDayIndexFromEventStart(_);
  return _.capsules.filter(
    (_) => _.visibility_index === void 0 || _.visibility_index === _,
  );
}
function _(_, _, _) {
  return _(_, _, _).flatMap((_) => {
    let _ = _(_);
    return _ ? [_] : [];
  });
}
function _(_, _, _, _, _) {
  let _ = _(_),
    _ = _(_, _);
  if (_(_)) {
    let _ = _[_].eType;
    return (_.tabStoreFilter ? _.tabFilteredAppIDs : _(_, _, _, _))?.map(
      (_) => ({
        _: _,
        type: _,
      }),
    );
  }
  switch (_) {
    case `manual`: {
      let _ = _(_, _, _);
      if (!_.tabStoreFilter) return _;
      if (!_.tabFilteredItems) return;
      let _ = new Set(_.tabFilteredItems.map(_));
      return _.filter((_) => {
        let _ = _(_);
        return _ !== void 0 && _.has(_(_));
      });
    }
    case `tag`:
    case `top_n`:
    case `all_discounted`: {
      if (!_.discountedItems) return;
      let _ = _.discountedItems.map(_).filter((_) => !!_);
      return _ === `tag` && _.random_from_entire_set
        ? _(_, _, _, _)
        : _.slice(0, _);
    }
    case `topwishlisted`:
      return _.topWishlistedItems
        ?.map(_)
        .filter((_) => !!_)
        .slice(0, _);
    case `personalized_carousel`: {
      let _ = _(_, _, _.personalizedCarousels)?.rgCapsules;
      return _ && _(_, _).slice(0, _);
    }
    default:
      return;
  }
}
function _(_, _, _, _) {
  let _ = _(_, _);
  if (_(_))
    switch (_) {
      case `popularity`:
        return _.compatAppList && _(_, _.compatAppList).slice(0, _);
      case `wishlist`:
        return _(
          _,
          _.wishlistAppIDs,
          _(_, _.GetTaggedItems()),
          _.ownedAppIDs,
          _,
        );
      case `interactive_recommender`:
        return _(
          _,
          _.recommendedAppIDs,
          _(_, _.GetTaggedItems()),
          _.ownedAppIDs,
          _,
        );
      case `wishlist_onsale`:
        return _(_, _.wishlistOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `interactive_recommender_onsale`:
        return _(_, _.recommendedOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `dlc_onsale`:
        return _(_, _.ownedDLCOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `dlc_music_onsale`:
        return _(_, _.ownedSoundtracksOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `discount_reason`:
        return _(_, _.recommendedDiscounts, _);
      default:
        _(_, `GetSaleItemSectionAppList: fixed-list flavor with no list`);
        return;
    }
}
function _(_, _) {
  if (!_.smart_section_exclude_appids?.length) return _;
  let _ = new Set(_.smart_section_exclude_appids);
  return _.filter((_) => _.type !== `game` || !_.has(_._));
}
function _(_) {
  return _.smart_section_max_apps || _;
}
function _(_, _, _) {
  if (_) return _[_(_, _).nSectionIndex] ?? null;
}
function _(_, _) {
  let _ = _(_, _) === `personalized_carousel`;
  return _(_, _(_) ?? _, _);
}
function _(_, _, _) {
  let _ = _(),
    _ = _(),
    { storeBrowseContext: _ } = _(),
    _ = _(_),
    [_] = _(_),
    _ = _ ? _(_, _, _, _) : void 0,
    { data: _, isSuccess: _ } = _({
      ..._(_.clanSteamID.GetAccountID(), _),
      enabled: _,
    }),
    { data: _ } = _({
      ..._(_, _, _, _(_, _), _.accountid, _),
      enabled: _ && _,
    });
  return _;
}
function _(_, _, _, _, _) {
  if (!_ || !_) return;
  let _ = new Set(_.smart_section_exclude_appids);
  return _(_, _, (_) => _.has(_) || _.has(_), _);
}
function _(_, _, _) {
  let _ = !_,
    _ = _(),
    _ = _(),
    _ = _(_, _),
    _ = _(),
    _ = _(),
    { storeBrowseContext: _, dataLoader: _ } = _(),
    _ = _(_, _),
    _ = _(_),
    { data: _ } = _({
      ..._(_(_)),
      enabled: _ && _ === `popularity`,
    }),
    { data: _ } = _({
      ..._(_, _.accountid),
      enabled: _ && _ === `wishlist`,
    }),
    { data: _ } = _({
      ..._(_, _.accountid),
      enabled: _ && _ === `interactive_recommender`,
    }),
    { data: _ } = _({
      ..._(_, _, _.accountid, _),
      enabled: _ && _ === `wishlist_onsale`,
    }),
    { data: _ } = _({
      ..._(_, _, _, _.accountid, _),
      enabled: _ && _ === `interactive_recommender_onsale`,
    }),
    { data: _ } = _({
      ..._(_, _, _, _.accountid, `dlc`, _),
      enabled: _ && _ === `dlc_onsale`,
    }),
    { data: _ } = _({
      ..._(_, _, _, _.accountid, `music`, _),
      enabled: _ && _ === `dlc_music_onsale`,
    }),
    { data: _ } = _({
      ..._(_, _, _, _),
      enabled: _ && (_ === `tag` || _ === `top_n` || _ === `all_discounted`),
    }),
    { data: _ } = _({
      ..._(_, _, _, _),
      enabled: _ && _ === `topwishlisted`,
    }),
    _ = _(_, _),
    { data: _ } = _({
      ..._(_, _, _.accountid, _(_)),
      enabled: _ && _ === `discount_reason`,
    }),
    { data: _ } = _({
      ..._(_, _.accountid),
      enabled: _ && _(_),
    }),
    _ = (0, _.useMemo)(
      () => ({
        compatAppList: _,
        wishlistAppIDs: _,
        recommendedAppIDs: _,
        wishlistOnSaleAppIDs: _,
        recommendedOnSaleAppIDs: _,
        ownedDLCOnSaleAppIDs: _,
        ownedSoundtracksOnSaleAppIDs: _,
        discountedItems: _,
        topWishlistedItems: _,
        personalizedCarousels: _,
        recommendedDiscounts: _,
        ownedAppIDs: _,
        tabStoreFilter: _,
      }),
      [_, _, _, _, _, _, _, _, _, _, _, _, _],
    ),
    _ = !!_ && _(_),
    _ = (0, _.useMemo)(() => (_ ? _(_, _, _, 1 / 0) : void 0), [_, _, _, _]),
    { data: _ } = _({
      ..._(_, _, _, _, _(_)),
      enabled: _ && _ && _ !== void 0,
    }),
    _ = !!_ && _ === `manual`,
    _ = (0, _.useMemo)(() => (_ ? _(_, _, _) : void 0), [_, _, _, _]),
    { data: _ } = _({
      ..._(_, _, _, _, _?.length ?? 0),
      enabled: _ && _ && _ !== void 0,
    });
  return (0, _.useMemo)(() => {
    let _ = _(
      _,
      _,
      _,
      {
        ..._,
        tabFilteredAppIDs: _,
        tabFilteredItems: _,
      },
      _,
    );
    return _ && _(_, _, _, _);
  }, [_, _, _, _, _, _, _]);
}
function _(_) {
  return (_(_.event, _.section), null);
}
function _(_, _) {
  let _ = _(),
    _ = _({
      queries: _.map((_) => {
        let _ = _(_, _);
        return _
          ? {
              ..._,
              enabled: !1,
            }
          : _;
      }),
      combine: _,
    });
  return (0, _.useMemo)(() => {
    if (_ || !_.some((_) => _ === void 0))
      return _.filter((_, _) => !_(_[_], !1));
  }, [_, _, _]);
}
function _(_) {
  return _.map((_) => _.data);
}
function _(_, _) {
  return !_ || _.startsWith(`https://`) || _.startsWith(`http://`)
    ? _
    : `${_.CLAN_CDN_ASSET_URL}images/clan/${_}/${_}`;
}
var _ = `poster`,
  _ = `${_}.avif`,
  _ = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function _(_) {
  let _ = _.video_webm_src || _.video_mp4_src;
  if (!_ || _.image?.includes(`.${_}.`)) return _.image;
  let _ = _.exec(_);
  return _ ? `${_[1]}.${_}` : _.image;
}
function _(_) {
  if (!_?.clan_accountid || !_.clan_event_gid) return null;
  let _ = _.cross_promo;
  return {
    clanAccountID: _.clan_accountid,
    strEventGID: _.clan_event_gid,
    strName: _.event_name ?? ``,
    rtEndTime: _.rtime32_end_time || void 0,
    strSummary: _.summary || void 0,
    strCapsuleURL: _(_),
    strSaleURL: _.store_path ? _.STORE_BASE_URL + _.store_path : void 0,
    strBackgroundURL: _(_.clan_accountid, _?.background_image),
    strScrimColor: _?.scrim_color || void 0,
    strLogoURL: _(_.clan_accountid, _?.logo?.image),
    eDesktopLayout: _?.desktop_layout === `logo_top` ? `logo_top` : void 0,
  };
}
function _(_, _) {
  let _ = _(_ ?? void 0, `capsule`, _);
  if (!_) return;
  let _ = _.clanSteamID.GetAccountID();
  return {
    clanAccountID: _,
    strEventGID: _.GID ?? ``,
    strName: _.GetNameWithFallback(_) ?? ``,
    rtEndTime: _.endTime || void 0,
    strSummary: _.GetSummaryWithFallback(_) || void 0,
    strCapsuleURL: _,
    strSaleURL: _(_) ?? void 0,
    strBackgroundURL: _(
      _,
      _.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: _.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: _(_, _),
    eDesktopLayout:
      _.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
function _(_, _) {
  if (_) return _.startsWith(`http`) ? _ : _.GenerateURLFromHashAndExt(_, _);
}
function _(_) {
  let _ = _.capsule_image?.image;
  if (_ && _.clan_accountid)
    return _.capsule_image?.from_body
      ? _.ReplacementTokenToClanImageURL(_)
      : _(_.clan_accountid, _);
}
function _(_) {
  return (_ ?? []).slice(0, 48).map((_) => ({
    appid: _,
  }));
}
var _ = `Es-UANTRhdg-`,
  _ = `KNEaTOnJJWw-`,
  _ = `FsYxDNcAXaI-`,
  _ = `cSFkUHyVW24-`,
  _ = `oztjxXYIBAk-`,
  _ = `yT92BfNEvpw-`,
  _ = `_6jMisrq5Zfo-`,
  _ = `XBv92QzB8Xc-`,
  _ = `_6iUHDist0Jc-`,
  _ = `gxh8RxFKhr8-`,
  _ = `tYvCiFSJDdI-`,
  _ = `AZSEWyNPfhc-`,
  _ = `gZNFN-cKUHw-`,
  _ = `VCRuNjWNqVc-`,
  _ = `AmB85SkEC3Q-`,
  _ = `P5j4maR0i14-`,
  _ = _.createContext(!1);
function _(_) {
  let {
      promotedSaleEvent: _,
      children: _,
      nItemsToFeature: _,
      bInGamepadUI: _,
      section: _,
    } = _,
    { bShowSeeMoreHint: _, panelProps: _ } = _(_ ? _?.strSaleURL : void 0, `X`);
  return (0, _.jsx)(_, {
    ..._,
    className: _,
    "flow-children": `row`,
    panelProps: {
      ..._,
      navEntryPreferPosition: _.PREFERRED_CHILD,
    },
    children: (0, _.jsx)(_, {
      saleEvent: _,
      bShowExploreHint: _,
      strExploreLabel: _(_),
      children: (0, _.jsx)(_, {
        nItemsToFeature: _,
        eCreatorRole: _?.eCreatorRole,
        children: (0, _.jsx)(_, {
          preferredFocus: !0,
          children: _,
        }),
      }),
    }),
  });
}
function _(_) {
  let { event: _, language: _, strSaleURL: _ } = _,
    _ = _(_, _);
  if (!_) return null;
  let _ = _
    ? {
        ..._,
        strSaleURL: _,
      }
    : _;
  return _.strSaleURL
    ? (0, _.jsx)(_, {
        className: _(_, _, _),
        "flow-children": `row`,
        children: (0, _.jsx)(_, {
          saleEvent: _,
          bExploreButtonBelow: !0,
        }),
      })
    : null;
}
function _(_) {
  let {
      saleEvent: _,
      bExploreButtonBelow: _,
      bShowExploreHint: _,
      children: _,
    } = _,
    _ = _?.strSaleURL,
    _ = _?.eCreatorRole,
    _ = _ || !_.strExploreLabel ? _(_) : _.strExploreLabel,
    _ = _?.strCapsuleURL,
    _ = _?.strSummary,
    _ = _(),
    _ = _(),
    _ = _ && _ !== void 0,
    _ = _?.rtEndTime
      ? _(_.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: _,
        })
      : void 0;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        !_ &&
        (0, _.jsx)(`div`, {
          className: `qbRGxo4aWcc-`,
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: _(`HgvxVtFlDis-`, _ && `Lp2CuPiW8Lo-`),
          style: {
            backgroundImage: `url(${_})`,
          },
        }),
      _ &&
        (0, _.jsx)(_, {
          rgAppIDs: _?.rgCreatorAppIDs,
          strAvatarURL: _,
        }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `-NAWu4CYrl8-`),
        children: [
          _ &&
            _ &&
            (0, _.jsx)(_, {
              url: _,
              className: `X4LW9zxgdTo-`,
              bFocusable: !1,
              children: (0, _.jsx)(`img`, {
                src: _,
                alt: ``,
              }),
            }),
          !_ &&
            (0, _.jsxs)(`div`, {
              className: `_6jMisrq5Zfo-`,
              children: [
                (0, _.jsx)(`div`, {
                  className: `XBv92QzB8Xc-`,
                  children: (0, _.jsx)(_, {
                    url: _,
                    className: `NjUCqxvhkHk-`,
                    bFocusable: !1,
                    children: _?.strName,
                  }),
                }),
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `_6iUHDist0Jc-`,
                    children: _(`#Sale_CrossPromoSale_NowThrough`, _),
                  }),
              ],
            }),
          _ &&
            !_ &&
            !_ &&
            !_ &&
            (0, _.jsx)(_, {
              url: _,
              className: _(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: _,
              children: _,
            }),
          _ &&
            _ &&
            (0, _.jsx)(_, {
              label: _,
              shown: !!_,
              button: `X`,
            }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, _ && `ZONqp3dzTMI-`),
        children: [
          _ &&
            (0, _.jsxs)(_, {
              url: _,
              className: _(`oztjxXYIBAk-`, _ && `CDF-2WDX3lg-`),
              bFocusable: !!_,
              children: [
                (0, _.jsx)(`img`, {
                  src: _,
                  alt: ``,
                }),
                _ &&
                  (0, _.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, _.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: _,
                    }),
                  }),
              ],
            }),
          _,
        ],
      }),
      _ &&
        !_ &&
        !_ &&
        (0, _.jsx)(`div`, {
          className: _(`T1fHkhyvNkM-`, _ && `SAqjQ-F71kA-`),
          children: (0, _.jsx)(_, {
            url: _,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: _,
            children: _,
          }),
        }),
    ],
  });
}
var _ = 60,
  _ = 4;
function _(_) {
  let { rgAppIDs: _, strAvatarURL: _ } = _,
    _ = _(
      _.useMemo(() => _(_), [_]),
      !1,
    ),
    _ = _.useMemo(() => {
      let _ = (_ ?? []).slice(0, 24);
      return _.length < _
        ? []
        : Array.from(
            {
              length: _,
            },
            (_, _) => _[_ % _.length],
          );
    }, [_]);
  return _.length
    ? (0, _.jsxs)(`div`, {
        className: _,
        "aria-hidden": !0,
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `ODb7GVMZzG8-`,
              style: {
                backgroundImage: `url(${_})`,
              },
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  _: _,
                },
                _,
              ),
            ),
          }),
        ],
      })
    : null;
}
function _(_) {
  let _ = _(_._, `header`);
  return _
    ? (0, _.jsx)(`img`, {
        src: _,
        alt: ``,
        loading: `lazy`,
      })
    : (0, _.jsx)(`div`, {});
}
function _(_) {
  let { children: _, nItemsToFeature: _ } = _;
  return (0, _.jsxs)(_, {
    ..._,
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: `\xA0`,
            }),
            (0, _.jsx)(`div`, {
              className: _(_, _),
              children: `\xA0`,
            }),
          ],
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _(_, _),
            }),
          }),
          (0, _.jsx)(_, {
            nItemsToFeature: _,
            children: _,
          }),
        ],
      }),
    ],
  });
}
var _ = {
  strSignedIn: `#Sale_CrossPromoSale_RecommendedFromEvent`,
  strSignedOut: `#Sale_CrossPromoSale_RecommendedFromEvent_notloggedin`,
};
function _(_) {
  return _(
    _
      ? `#Sale_CrossPromoCreator_Visit_${_}`
      : `#Sale_CrossPromoSale_ExploreEvent`,
  );
}
function _(_) {
  let { children: _, nItemsToFeature: _, strSaleURL: _, eCreatorRole: _ } = _,
    _ = _.useContext(_),
    _ = !_ && !_,
    _ = _ || !_.strExploreLabel ? _(_) : _.strExploreLabel,
    _ = _.logged_in
      ? _.Localize(_.strSignedIn)
      : _.LocalizePlural(_.strSignedOut, _ ?? 0);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (_ || _) &&
        (0, _.jsxs)(`div`, {
          className: `ypQ9RrTsvmE-`,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `aMHZOpwLiBw-`,
                children: _,
              }),
            _ &&
              (0, _.jsx)(_, {
                url: _,
                className: _(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
                fnCanTakeFocus: _,
                children: _,
              }),
          ],
        }),
      _,
      _ &&
        (0, _.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, _.jsx)(_, {
            url: _,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: _,
            children: _,
          }),
        }),
    ],
  });
}
function _(_) {
  let {
    section: _,
    bInGamepadUI: _,
    placeholderHeight: _,
    className: _,
    "flow-children": _,
    panelProps: _,
    children: _,
  } = _;
  return (0, _.jsx)(_, {
    placeholderHeight: _,
    className: _({
      [_]: !0,
      [_]: _(_),
      [_]: !0,
      SaleSectionForCustomCSS: !0,
      [_]: !0,
      [_]: !0,
    }),
    rootMargin: _,
    holdGamepadFocus: _,
    "flow-children": _,
    ..._,
    children: _,
  });
}
var _ = [1e3, 500, 250, 100, 50, 20];
function _(_) {
  let _ = _.sale_page_cross_promo_sales?.[0]?.total_items ?? 0,
    _ = _.find((_) => _ >= _);
  return _
    ? _(`#Sale_CrossPromoSale_ExploreItems`, _(_))
    : _(`#Sale_CrossPromoSale_ExploreEvent`);
}
