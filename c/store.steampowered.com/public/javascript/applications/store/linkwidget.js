import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./usedataloader.client.js";
import { _ } from "./clanimagemodels.js";
import { _ } from "./salecapsuleutils.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./storelink.js";
import { _, _, _, _, _, _, _, _ } from "./saletags.js";
import { _ } from "./claninfo.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./partnerevent.js";
import { _ } from "./image.js";
import { _, _ } from "./ostype.js";
import { _, _, _ } from "./salestoreitemutils.js";
import { _, _ } from "./salepreviewwidgets.js";
import { _ } from "./throbber.js";
import { _ } from "./stringutils.js";
import { _ } from "./saleitemlibrarywidget.js";
import { _ } from "./eventtimeoverridecontext.js";
import { _, _, _, _, _, _, _, _ } from "./partnereventshared.module.js";
import { _, _, _ } from "./carouselarrows.js";
import { _ } from "./eventbbcodeparser.module.js";
import { _ } from "./eventimageurlwithfallback.js";
import { _ } from "./partnereventutils.js";
import { _, _ } from "./creatorhomegamelock.js";
import { _ } from "./lazyrenderchildren.js";
import { _, _ } from "./seemorebutton.js";
import { _, _, _, _ } from "./creatorhomestore.js";
import { _ } from "./partnereventeditorcontext.js";
import { _, _ } from "./bottomrow.js";
import { _, _ } from "./crosspromotesalelayouts.module.js";
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
function _(_, _, _, _) {
  let { store_filter_json: _, min_discount_percent: _ } = _;
  return {
    queryKey: [`TopWishlistedComingSoon`, _ ?? ``, _ ?? 0, _, _.country],
    queryFn: async () =>
      (
        await _(`TopWishlistedComingSoon`, _, _, {
          start: 0,
          count: _,
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
        })
      ).rgItemIDs,
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
var _ = _(_()),
  _ = _(),
  _ = _(_(), 1);
function _(_, _) {
  return `linear-gradient(0deg, ${_ || `transparent`} 0%, ${_ || `transparent`} 100%)`;
}
function _(_, _, _) {
  if (_.disable_background)
    return {
      paddingLeft: 0,
      paddingRight: 0,
    };
  let _ = ``;
  if (_.background_image) {
    let _ = _.GenerateURLFromHashAndExt(_.clanSteamID, _.background_image);
    _ += `,url(${_})`;
  }
  return _.background_gradient_bottom ||
    _.background_gradient_top ||
    _.length > 0 ||
    _.background_repeat ||
    _.border_color ||
    _.border_width
    ? {
        backgroundImage:
          _(_.background_gradient_bottom, _.background_gradient_top) + _,
        backgroundRepeat: _.background_repeat,
        backgroundSize: _.background_repeat == `coverBlur` ? `cover` : ``,
        outlineStyle: _.border_color && _.border_width ? `solid` : void 0,
        outlineColor: _.border_color,
        outlineWidth: _.border_width ? `${_.border_width}px` : void 0,
      }
    : {};
}
function _(_, _) {
  return _
    ? _.disable_background && !_
      ? {
          paddingLeft: 0,
          paddingRight: 0,
        }
      : _.background_gradient_bottom ||
          _.background_gradient_top ||
          _.background_repeat ||
          _.border_color ||
          _.border_width
        ? {
            background: _(
              _.background_gradient_bottom,
              _.background_gradient_top,
            ),
            backgroundRepeat: _.background_repeat,
            outlineStyle: _.border_color && _.border_width ? `solid` : void 0,
            outlineColor: _.border_color,
            outlineWidth: _.border_width ? `${_.border_width}px` : void 0,
          }
        : {}
    : {};
}
function _(_) {
  return _?.clan_steamid ? _(new _(_.clan_steamid), _) : null;
}
var _ = 100;
async function _(_, _) {
  let _ = new URLSearchParams();
  _.set(`event_gids`, [...new Set(_)].sort().join(`,`)),
    _.set(`lang_list`, _(_)),
    _.set(`origin`, location.origin);
  let _ =
      _.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/?` + _.toString(),
    _ = await fetch(_);
  if (_.status === 204) return _.map(() => null);
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json(),
    _ = new Map((_.events ?? []).map((_) => [_.gid, _]));
  return _.map((_) => _.get(_) ?? null);
}
function _(_) {
  return _(
    [`PublicPartnerEventBrowser`, _],
    () =>
      new _.default((_) => _(_, _), {
        maxBatchSize: _,
        cache: !1,
      }),
  );
}
function _(_, _) {
  return [`PublicPartnerEvent`, _, _];
}
function _(_, _, _) {
  return {
    queryKey: _(_, _),
    queryFn: async () => (_ ? _.load(_) : (await _([_], _))[0]),
    select: _,
    enabled: !!_,
    staleTime: 6e5,
  };
}
function _(_) {
  let _ = _(_.LANGUAGE),
    _ = _(_);
  return _(_(_, _, _));
}
function _(_, _, _) {
  return _(_, _, _)?.strTagName || void 0;
}
function _(_, _, _, _) {
  let _ = _ == 1 || _ == 3 || _ == 4,
    _ = () => {
      let _ = _(_.smart_section_creator_listid);
      return _
        ? _
          ? _(`#Sale_CreatorList_Section_Editor_title`, _)
          : _
        : null;
    };
  if (_.section_type === `items`)
    switch (_(_)) {
      case `wishlist`:
        return `#Sale_default_label_OnYourWishlist`;
      case `interactive_recommender`:
        return `#Sale_default_label_RecommendedForYou`;
      case `tag_recommender`:
        return `#Sale_default_label_RecommendedForYou`;
      case `deck_topplayed`:
        return `#Sale_TopPlayedOnDeckSection`;
      case `personalized_carousel`:
        if (_) {
          let { nSectionIndex: _, nNumSections: _ } = _(_, _);
          return _(`#Sale_PersonalizedCarousel_Section_Editor_title`, _ + 1, _);
        }
        let _ = _(_, _, _);
        if (!_ && _ == 2) {
          let { nSectionIndex: _, nNumSections: _ } = _(_, _);
          return _(`#Sale_PersonalizedCarousel_Section_Editor_title`, _ + 1, _);
        }
        return _ ? _(`#Sale_PersonalizedCarousel_Section_title`, _) : null;
      case `creator_list`:
        return _();
    }
  else if (_.section_type === `tabs`) return ``;
  else if (_.section_type === `curator`) {
    if (_.curator_clan_id) {
      let _ = _.InitFromClanID(_.curator_clan_id, _.EUNIVERSE),
        _ = _.GetCreatorHome(_);
      if (_) return _(`#Sale_CuratorSection_Name`, _.GetName());
    }
    return `#Sale_CuratorSection`;
  } else if (_.section_type === `event_schedule`) return `#Sale_EventSchedule`;
  else if (_.section_type === `curator_recommendation`)
    return `#Sale_CuratorRecommendation_title`;
  else if (_.section_type === `discoveryqueue`) return `#DiscoveryQueue_Title`;
  else if (_.section_type === `sale_events`) return `#Sale_SaleEvent_Section`;
  else if (_.section_type === `calendar`) return `#Sale_SectionType_Calendar`;
  else if (_.section_type === `crosspromotesalepage` && _ == 1)
    return `#Sale_CrossPromoSale_DefaultSectionTitle`;
  else if (_.section_type === `creator_list`) return _();
  return null;
}
function _(_, _, _, _) {
  let _ = _(_, _, _, _);
  return _ === null ? null : _ && _.startsWith(`#`) ? _(_) : _;
}
function _(_, _, _, _, _, _, _, _) {
  if (!_) return ``;
  if (_.section_type === `crosspromotesalepage`) return _(_, _);
  let _ = _(_, _, _, _),
    _ = _.GetWithFallback(_.localized_label, _),
    _ =
      _ ||
      _ ||
      (_.default_label === `#Sale_default_label` ? `` : _(_.default_label)),
    _ = _.internal_section_title?.trim();
  if ((_?.length ?? 0) > 0) {
    if (_ == 3 || _ == 4)
      return _?.trim().length == 0 || _
        ? _
        : (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              ` `,
              (0, _.jsx)(_, {
                tooltip: _(
                  `#Sale_Section_InternalTitle_Note`,
                  (0, _.jsx)(`br`, {}),
                  _,
                ),
              }),
            ],
          });
    if (_ == 1)
      return _?.trim().length == 0 || _
        ? _
        : (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              ` `,
              (0, _.jsx)(`span`, {
                children: _(`#Sale_Section_InternalTitle_Actual`, _),
              }),
            ],
          });
  }
  let _ = _.GetWithFallback(_.localized_label_image, _);
  if (!_ && _) {
    let _ = _.GenerateURLFromHashAndExt(_, _);
    return (0, _.jsx)(`img`, {
      loading: `lazy`,
      src: _,
      alt: _,
    });
  }
  return _;
}
function _(_, _, _) {
  if (_(_.section_type))
    switch (_(_)) {
      case `personalized_carousel`:
        let _ = _(_, _, _);
        return _ ? _(`#Sale_PersonalizedCarousel_Section_subtitle`, _) : null;
      case `creator_list`:
        return _(_.smart_section_creator_listid) ?? null;
    }
  return null;
}
function _(_, _, _, _) {
  let _ = _(_, _, _);
  return _ === null
    ? _.GetWithFallback(_.localized_subtitle, _) ||
        (!_.default_subtitle || _.default_subtitle === `#Sale_default_subtitle`
          ? ``
          : _(_.default_subtitle))
    : _ && _.startsWith(`#`)
      ? _(_)
      : _;
}
var _ = `dYYkud-Jf3s-`,
  _ = `zZo1XshRYmQ-`,
  _ = `RfHJSn8AdQE-`,
  _ = `D8GFuSKNhX0-`,
  _ = `MtB8CokK-OQ-`,
  _ = `woc2JepJIek-`;
function _(_, _) {
  return (
    _.GetWithFallback(_.localized_label, _) ||
    (_.default_label === `#Sale_default_label` ? `` : _(_.default_label))
  );
}
function _(_) {
  if (_(_.section_type))
    switch (_(_)) {
      case `deck_topplayed`:
        return _.STORE_BASE_URL + `charts/steamdecktopplayed`;
    }
  return _.label_link;
}
function _(_) {
  let _,
    _,
    _ = !1;
  return (
    _.label_link_style === `button`
      ? ((_ = _(`#Sale_SectionLink_BrowseAll`)), (_ = !0))
      : _.label_link_style === `browseall`
        ? ((_ = _(`#Sale_SectionLink_BrowseAll`)),
          (_ = _(_, `SaleSectionLabelLinkButton`)))
        : _(_) === `deck_topplayed` &&
          ((_ = _(`#EventBrowse_MoreEventsBtn`)),
          (_ = _(_, `SaleSectionLabelLinkButton`))),
    {
      strLinkButtonLabel: _,
      strLinkButtonClasses: _,
      bSmallButton: _,
    }
  );
}
function _(_) {
  let { event: _, elTitle: _, language: _ } = _,
    _ = _(),
    _ = _(_, _ ? `product_mobile_banner` : `product_banner`, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`img`, {
        src: _,
        alt: _,
      }),
    ],
  });
}
var _ = _((_) => {
  let {
      section: _,
      event: _,
      language: _,
      nHiddenCapsules: _,
      title: _,
      subtitle: _,
      bShowSeeMoreHint: _,
      bUseGamepadLinkHint: _,
      onLinkResolved: _,
      personalizedCarousels: _,
      promotedSale: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _ !== void 0,
    { data: _ } = _(_ ? void 0 : _(_)),
    _ = (_ ? _ : _) ?? void 0,
    _ = _.link || _(_) || _(_);
  if (
    (_.useEffect(() => {
      _?.(_);
    }, [_, _]),
    _.section_type == `title_image` && _.title_image_selected === `image`)
  )
    return null;
  let _ = _ || _(_, _, _, _.clanSteamID.GetAccountID(), _.eLocation, !1, _, _);
  if (!_) return null;
  let _ = _ || _(_, _, _, _),
    _ = (0, _.jsx)(`div`, {
      className: _(_, `SaleSectionHeader`),
      style: _(_, _, _),
      children: _?.BHasSomeImage(`product_banner`)
        ? (0, _.jsx)(_, {
            ..._,
            event: _,
            elTitle: _,
          })
        : _,
    }),
    _ = (0, _.jsx)(`div`, {
      className: _(_, _, `SaleSectionSubtitle`),
      style: _(_, _, _),
      children: _,
    }),
    _ = null;
  if ((_?.length ?? 0) > 0) {
    let {
      strLinkButtonLabel: _,
      strLinkButtonClasses: _,
      bSmallButton: _,
    } = _(_);
    _ &&
      (_ =
        _ && _
          ? (0, _.jsx)(_, {
              label: _,
              shown: !!_,
            })
          : _
            ? (0, _.jsx)(`div`, {
                className: _(_, _),
                children: (0, _.jsx)(_, {
                  url: _,
                  children: (0, _.jsx)(_, {
                    children: _,
                  }),
                }),
              })
            : (0, _.jsx)(_, {
                url: _,
                className: _,
                children: _,
              })),
      (_ = (0, _.jsx)(_, {
        url: _,
        bFocusable: !_,
        children: _,
      }));
  }
  return (0, _.jsxs)(`div`, {
    className: _(
      _,
      `SaleSectionLabelCtn`,
      _?.BHasSomeImage(`product_banner`) ? _ : ``,
    ),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [_, !!_ && _],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)(_, {
              className: `pL8IDIWBDg8-`,
              toolTipContent: _(`#Sale_HiddenItem_Tooltip`),
              children: (0, _.jsx)(`a`, {
                href: _.STORE_BASE_URL + `account/preferences`,
                children: _(
                  _ == 1
                    ? `#Sale_HiddenItem_Single_Short`
                    : `#Sale_HiddenItems_Short`,
                  _,
                ),
              }),
            }),
          _,
        ],
      }),
    ],
  });
});
function _(_, _, _) {
  return {
    fontFamily: _.jsondata.sale_font ? _(_.jsondata.sale_font, _) : void 0,
    fontWeight: _.jsondata.sale_font_weight,
    fontSize: `${_.jsondata.sale_section_font_size}px`,
    textTransform: _.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: _.label_color,
  };
}
function _(_, _, _) {
  return {
    fontFamily: _.jsondata.sale_font ? _(_.jsondata.sale_font, _) : void 0,
    fontWeight: 300,
    fontSize: `${_.jsondata.sale_section_font_size && _.jsondata.sale_section_font_size - 3}px`,
    letterSpacing: 0,
    lineHeight: `${_.jsondata.sale_section_font_size}px`,
    textTransform: _.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: _.label_color,
    opacity: `50%`,
  };
}
function _(_, _) {
  return (
    (_ ||= ``),
    _ === 12
      ? _.replace(`Jolly Lodger`, `New Rocker`)
      : _ === 23 || _ === 19 || _ === 24 || _ === 18 || _ === 8 || _ === 26
        ? _.replace(`Sigmar One`, `Play`)
        : _ === 6
          ? _.replace(`Sigmar One`, `Noto Serif SC`)
          : _ === 7
            ? _.replace(`Sigmar One`, `Noto Serif TC`)
            : _ === 10
              ? _.replace(`Sigmar One`, `M PLUS Rounded 1c`)
              : _ === 4
                ? _.replace(`Sigmar One`, `Black Han Sans`)
                : _ === 9
                  ? _.replace(`Sigmar One`, `Prompt`)
                  : _
  );
}
function _(_, _, _, _, _) {
  let _ = _(_, _, _, _.clanSteamID.GetAccountID(), _);
  if (_) return _;
  let _ = _(`#Sale_Section_Header`, _ + 1),
    _ = `#Sale_Section_Type_` + (_?.section_type || `unknowntype`),
    _ = _(_);
  if (_ !== _) return `${_} (${_})`;
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
  let _ = _(_)[0];
  return !_?.event_gid || (!_.featured_app_tagid && !_.capsules?.length)
    ? `setup`
    : !_ || !_.BIsVisibleEvent()
      ? `missing`
      : null;
}
function _(_, _) {
  return _
    ? _(`#Sale_CrossPromoSale_SectionTitle`, _.GetNameWithFallback(_) ?? ``)
    : _(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function _(_) {
  switch (_) {
    case `logo_left`:
    case `logo_top`:
    case `event_capsule`:
      return 3;
    default:
      return;
  }
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
    _.set_sort(_.eSort),
      _.set_min_items(_.nMinItems),
      _.set_randomize(_.bRandomize),
      _.set_include_packages(!!_.bIncludePackages),
      _.set_include_bundles(!!_.bIncludeBundles),
      _.set_include_dlc(_.bIncludeDLC),
      _.set_min_discount_percent(_.nMinDiscountPercent);
  }
  _.Body().set_context(_(_)),
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
        .set_filter_json(_.strTabStoreFilterJSON);
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
    case `personalized_carousel`:
      return _(_, _, _.personalizedCarousels)?.rgCapsules.slice(0, _);
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
        return _(_.wishlistAppIDs, _(_, _.GetTaggedItems()), _.ownedAppIDs, _);
      case `interactive_recommender`:
        return _(
          _.recommendedAppIDs,
          _(_, _.GetTaggedItems()),
          _.ownedAppIDs,
          _,
        );
      case `wishlist_onsale`:
        return _(_.wishlistOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `interactive_recommender_onsale`:
        return _(_.recommendedOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `dlc_onsale`:
        return _(_.ownedDLCOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      case `dlc_music_onsale`:
        return _(_.ownedSoundtracksOnSaleAppIDs, void 0, _.ownedAppIDs, _);
      default:
        _(_, `GetSaleItemSectionAppList: fixed-list flavor with no list`);
        return;
    }
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
function _(_, _, _, _) {
  if (_ && _) return _(_, _, (_) => _.has(_), _);
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
        ownedAppIDs: _,
        tabStoreFilter: _,
      }),
      [_, _, _, _, _, _, _, _, _, _, _, _],
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
  return _(_.event, _.section), null;
}
function _(_, _) {
  return _ == null || _ == null || !_(_)
    ? !0
    : _.reverse_show_on_tabs
      ? !(!_.show_on_tabs || _.show_on_tabs.includes(_))
      : !!(_.show_on_tabs && _.show_on_tabs.includes(_));
}
function _(_) {
  return _(_, `[Feature] Adult Only Sexual Content`);
}
function _(_) {
  return _(_, `[Feature] Coming Soon`);
}
function _(_, _) {
  if (_?.sale_tag_filter?.clauses?.length == 1) {
    let _ = _.sale_tag_filter.clauses[0];
    return (
      _.type === `Must have` && _.or_tags.length === 1 && _.or_tags[0] === _
    );
  }
  return !1;
}
function _(_) {
  return !!(
    _.show_on_tabs &&
    _.show_on_tabs.length > 0 &&
    !_.diable_tab_id_filtering
  );
}
function _(_, _) {
  return _.show_deck_compability_details ||
    _.display_hw_compatibility_details == 1 ||
    _?.BFilterRequiresSteamDeckVerifiedOrPlayable()
    ? 1
    : _.display_hw_compatibility_details == 4 ||
        _?.BFilterRequiresSteamFrameVerifiedOrPlayable()
      ? 4
      : _.display_hw_compatibility_details == 3 ||
          _?.BFilterRequiresSteamMachineVerifiedOrPlayable()
        ? 3
        : 0;
}
function _(_, _, _) {
  let _ = _,
    _ = 0;
  for (_ = 0; _ < _; _++) {
    let _ = _[_ % _.length];
    if (_ < _) break;
    _ -= _;
  }
  return _;
}
function _(_, _) {
  if (_ === void 0 || !_.capsule_layout_by_item_count) return _;
  let _ = _.capsule_layout_by_item_count.find(
    (_) => _.max_items === void 0 || _ <= _.max_items,
  );
  return _
    ? {
        ..._,
        capsules_per_row_array: _.capsules_per_row_array,
        carousel_rows: _.carousel_rows,
      }
    : _;
}
function _(_, _) {
  if (_(_)) return 0;
  let _ = _(_);
  return _ <= 0 ? 0 : _ + _;
}
function _(_, _, _, _, _) {
  let _ =
    `section_` +
    _ +
    `_` +
    _.GID +
    (_ || 0) +
    _(_.unique_id ? _.unique_id.toString() : JSON.stringify(_)).toString();
  return (
    _ &&
      _.rtime32_last_local_modification &&
      (_ += `_` + _.rtime32_last_local_modification),
    _
  );
}
function _(_) {
  let { _: _, type: _ } = _,
    _ = _({
      _: _,
      type: _,
    }),
    { data: _ } = _(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      ..._,
      bShowReviewSummary: !0,
      bShowDemoButton: _.bShowDemoButton || _?.type == 1,
      bPreferDemoStorePage: _.bPreferDemoStorePage,
    }),
  });
}
var _ = `SppL95yx9BU-`,
  _ = `_7Na7-QNyAn4-`,
  _ = `zdh0LkaHoKw-`,
  _ = `vZlB-C6RUio-`;
function _(_) {
  let {
      _: _,
      type: _,
      bShowDemoButton: _,
      bHidePrice: _,
      bHidePlatforms: _,
      bShowDeckCompatibilityDialog: _,
      eHardwareCompatibilityDisplay: _,
      bAutoFocus: _,
    } = _,
    _ = _({
      _: _,
      type: _,
    }),
    { data: _ } = _(_),
    { data: _ } = _(_),
    [_, _] = _(_, _),
    _ = _?.item_type == 0;
  return (0, _.jsx)(_, {
    appid: _ ? _._ : void 0,
    children: (0, _.jsxs)(_, {
      "flow-children": `grid`,
      navEntryPreferPosition: _.PREFERRED_CHILD,
      autoFocus: _,
      navKey: `purchase_only_` + _?._,
      children: [
        `	`,
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: void 0,
              children: (0, _.jsx)(`div`, {
                className: _,
                children: _?.name,
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                !_ &&
                  _?.type != 10 &&
                  (0, _.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, _.jsx)(_, {
                        _: _,
                      }),
                      !!(_ && _?.item_type == 0 && _) &&
                        (0, _.jsx)(_, {
                          eDisplay: _,
                          storeItemPlatform: _,
                          className: void 0,
                        }),
                    ],
                  }),
                (0, _.jsx)(_, {
                  _: _,
                  className: _,
                  bShowDemoButton: _,
                  bShowCartButton: !0,
                  bHidePrice: _,
                  bHideWishlistButton: !0,
                  bShowDeckCompatibilityDialog: _,
                  eHardwareCompatibilityDisplay: _,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { displayStyle: _, requestCompact: _, ..._ } = _,
    { type: _ } = _,
    _ = _();
  if (_ === `purchaseonlydisplay`)
    return (0, _.jsx)(_, {
      ..._,
    });
  if (_)
    return (0, _.jsx)(_, {
      ..._,
    });
  if (_ && !_())
    return (0, _.jsx)(_, {
      ..._,
    });
  if (_ == `bundle` || _ == `sub`)
    return (0, _.jsx)(_, {
      ..._,
    });
  if (_() && (_ == `library` || _ == `animated`))
    return (0, _.jsx)(_, {
      ..._,
      bShowReviewSummary: !0,
    });
  switch (_) {
    case `library`:
      return (0, _.jsx)(_, {
        ..._,
      });
    case `animated`:
      return (0, _.jsx)(_, {
        ..._,
      });
    default:
      return (0, _.jsx)(_, {
        ..._,
        bShowReviewSummary: !0,
      });
  }
}
function _(_, _) {
  return !(_ === `purchaseonlydisplay` || _ || _());
}
var _ = `h4e3CZE5mfI-`,
  _ = `lJc7R9Bil2I-`,
  _ = `IS179RoYT1Q-`,
  _ = `SZeormjSwYo-`,
  _ = 240;
function _(_, _) {
  return _(_, _).every((_) => _ === 1);
}
function _(_) {
  let _ = !1,
    _ = _(_);
  return (
    _ && (_ = [`dlc`, `dlc_onsale`, `dlc_music_onsale`].includes(_)),
    !!(_ || _.show_parent_app)
  );
}
function _(_, _) {
  if (_(_)) return 0;
  let _ = _(_);
  return _ <= 0 ? 0 : _ + _;
}
function _(_, _) {
  return !_ || _.enable_faceted_browsing
    ? [1]
    : _.capsules_per_row_array
      ? _
        ? _.capsules_per_row_array.map((_, _) => {
            let _ =
              _.capsule_style_per_row_array &&
              _.capsule_style_per_row_array?.length > _
                ? _.capsule_style_per_row_array[_]
                : `grid`;
            return _(_, 1, _ == `tall` ? 4 : 3);
          })
        : _.capsules_per_row_array
      : _.adaptive_capsules_per_row
        ? _
          ? [2, 3]
          : [2, 3, 4, 3]
        : [_(_.capsules_per_row || 1, 1, _ ? 3 : 5) || 1];
}
function _(_, _, _) {
  let _ = _(_, _),
    _ = _(_) ? _(_) : _(_, _),
    _ = 0;
  for (let _ = 0; _ < _; _++) _ += _[_ % _.length];
  return _;
}
function _(_, _) {
  return _.capsule_style_per_row_array
    ? _.capsule_style_per_row_array
    : _(_, _)
      ? [`fullrow`]
      : [`grid`];
}
function _(_, _) {
  let { saleEvent: _, language: _, index: _, section: _ } = _;
  return (0, _.jsx)(
    _,
    {
      link: _,
      language: _,
      clanAccountID: _.clanSteamID.GetAccountID(),
      strClassName: _,
    },
    _.unique_id + `_` + _,
  );
}
function _(_, _) {
  let {
    capsuleStyle: _,
    index: _,
    section: _,
    saleEvent: _,
    rowElements: _,
  } = _;
  if (_(_)) return null;
  let _ = _(_),
    _ = _.BUseSubscriptionLayout(),
    _ = _(_) && !_.bIsSingleCapsule,
    _ = _(_, _.activeTab),
    _ = _.unique_id + `_` + _ + `_` + _.type + `_` + _._;
  if (_ !== `fullrow`) {
    let _ = _(_ && `FolDBzXMW2I-`);
    return (0, _.jsx)(
      `div`,
      {
        className: _,
        children: (0, _.jsx)(
          _,
          {
            imageType: _ === `tall` ? `library` : `header`,
            navKey: _,
            capsule: _,
            bShowParentApp: _,
            bUseSubscriptionLayout: _,
            bShowDemoButton:
              _.show_as_demos || _.activeTab?.BFilterRequiresFeatureDemo(),
            bPreferDemoStorePage: _.prefer_demo_store_page,
            bHidePrice: _.hide_prices,
            bHidePlatforms: _ >= 5,
            index: _,
            bPreferAssetWithoutOverride: !!_.prefer_assets_without_overrides,
            eHardwareCompatibilityDisplay: _,
          },
          _,
        ),
      },
      _,
    );
  }
  {
    let _ = _.single_item_style ? _.single_item_style : _,
      _;
    `overrideNavigation` in _ &&
      (_ = (_) => (
        _.overrideNavigation(_),
        _ && (_.preventDefault(), _.stopPropagation()),
        !1
      )),
      _() && (_ == `library` || _ == `animated`) && (_ = `bordered`);
    let _ = _({
      [_]: !_ && _ == `bordered`,
      [_]: _ && _ == `bordered`,
      [_]: _ && _ == `animated`,
      [_ + _]: _ === 0,
    });
    return (0, _.jsx)(
      `div`,
      {
        className: _,
        children: (0, _.jsx)(_, {
          _: _._,
          type: _.type,
          displayStyle: _,
          bShowPurchaseOptionsButton: _.show_purchase_options,
          bUseSubscriptionLayout: _,
          bShowDemoButton:
            _.show_as_demos || _.activeTab?.BFilterRequiresFeatureDemo(),
          bPreferDemoStorePage: _.prefer_demo_store_page,
          bHidePrice: _.hide_prices,
          eHardwareCompatibilityDisplay: _,
          fnOnClickOverride: _,
          bPreferAssetWithoutOverride: !!_.prefer_assets_without_overrides,
        }),
      },
      _,
    );
  }
}
function _(_, _, _, _, _, _, _, _) {
  let {
    RenderEvent: _,
    RenderItemDef: _,
    RenderLoyaltyReward: _,
    RenderCuratorList: _,
  } = _ || {};
  return _.section_type === `events` || _.section_type === `sale_events`
    ? !_ || !_
      ? []
      : _.filter((_) => !!_).map((_) => ({
          Render: (_) => _(_, _),
        }))
    : _.section_type === `links` ||
        _.section_type === `title_image` ||
        _(_) === `sale_tabhub`
      ? (_.section_type === `title_image` &&
          _.title_image_selected === `title`) ||
        !_
        ? []
        : _.map((_) => ({
            Render: (_) => _(_, _),
          }))
      : _(_.section_type)
        ? _
          ? _.filter((_) => !_(_)).map((_) => ({
              Render: (_) => _(_, _),
            }))
          : []
        : _.section_type === `itemdef`
          ? !_ || !_
            ? []
            : _.map((_) => ({
                Render: (_) => _(_, _),
              }))
          : _.section_type === `point_shop_smart`
            ? !_ || !_
              ? []
              : _.map((_) => ({
                  Render: (_) => _(_, _),
                }))
            : _.section_type === `creator_list_of_lists`
              ? !_ || !_
                ? []
                : _.map((_) => ({
                    Render: (_) => _(_, _),
                  }))
              : [];
}
function _(_, _) {
  return _[_ % _.length];
}
function _(_, _) {
  return _ === `tall` ? _ + 1 : _;
}
function _(_, _, _, _, _, _, _, _, _, _) {
  let {
    nMaxCapsulesPerRow: _,
    bScreenIsWide: _,
    nShowAdditionalRows: _,
    bShowAsCarousel: _,
    bAutoAdvance: _,
    bHideIfTooFewItems: _,
    strCarouselKey: _,
  } = _;
  if (_.length === 0)
    return {
      content: null,
      bAdditionalContent: !1,
    };
  let _ = _.length === 1,
    _ = (_, _, _, _, _) => {
      let _ = [];
      for (let _ = _; _ < _; _++) {
        let _ = {
            capsuleStyle: _,
            index: _,
            rowElements: _,
            bIsSingleCapsule: _,
            ..._,
          },
          _ = _[_].Render(_);
        _ && _.push(_);
      }
      return _;
    },
    _ = null,
    _ = !1,
    _ = _ ? [1] : _,
    _ = _;
  _ && (_ > 1 || _[0] == `tall`) && (_ = [`fullrow`]);
  let _ = _ && _ <= 1,
    _ = Math.min(_[0], _);
  if (_ && _.length > _)
    _ = (0, _.createElement)(
      _,
      {
        ..._,
        key: _,
        hideArrows: !_,
        visibleElements: _,
        className: _({
          SaleSectionCarousel: !0,
          SaleSectionCarouselPadding: !_,
          ItemCount_4: _[0] == 4,
          [_]:
            _ && _.section && _.section.section_type == `creator_list_of_lists`,
        }),
        useTestScrollbar: !0,
        bLazyRenderChildren: !0,
        bAutoAdvance: !!_,
        hidePips: _,
        padded: !_,
        screenIsWide: _,
        navKey: _,
        lazyRenderPlaceholderWidth: _,
      },
      _(_, 0, _.length, _, _(0, _)),
    );
  else {
    let _ = _(_),
      _ = !0;
    if (_) (_ = _), (_ = _);
    else if (_ == 0 && _ > 0) {
      let _ = 0,
        _ = 0;
      for (; _ < _ && _ < _.length; _++) {
        let _ = Math.min(_[_ % _.length], _);
        _ += _;
      }
      _ = Math.max(2, _);
    }
    let _ = [],
      _ = [],
      _ = 0;
    for (let _ = 0; _ < _.length; _++) {
      let _ = _(0, _);
      for (let _ = 0; (_ == 0 || _ < _) && _ < _.length; _++) {
        (_ == 0 || _) && (_ = _(_, _));
        let _ = _(_, _),
          _ = Math.min(_[_ % _.length], _),
          _ = Math.min(_, _.length - _);
        if (_ < _ && _ === 0) {
          if (_)
            return {
              content: null,
              bAdditionalContent: !1,
            };
          _ = Math.max(_ === `tall` ? 3 : 2, _);
        }
        _.push(
          (0, _.jsx)(
            _,
            {
              nMaxItems: _,
              nItems: _,
              children: _(_, _, _ + _, _, _),
            },
            `Row_` + _,
          ),
        ),
          (_ += _);
      }
      if (_ || (_ >= _.length && _.length === 0)) break;
      let _ = _.length || void 0;
      _.push(
        (0, _.jsx)(
          `div`,
          {
            className: _,
            children: (0, _.jsx)(_, {
              depth: _,
              children: _,
            }),
          },
          `Page_${_}`,
        ),
      ),
        (_ = []);
    }
    _.length == 0
      ? ((_ = _.length > _),
        (_ = (0, _.jsx)(_, {
          "flow-children": `grid`,
          focusable: !1,
          children: _,
        })))
      : (_ = (0, _.createElement)(
          _,
          {
            ..._,
            key: _,
            hideArrows: !_,
            visibleElements: 1,
            className: `SaleSectionCarousel`,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderWidth: _,
            hidePips: _,
            screenIsWide: _,
          },
          _,
        ));
  }
  return {
    content: _,
    bAdditionalContent: _,
  };
}
function _(_) {
  let {
    saleEvent: _,
    section: _,
    language: _,
    bInGamepadUI: _,
    activeTab: _,
  } = _;
  (_.carousel_rows || 0) > 1 &&
    (_ && (_.carousel_rows = 1),
    (_ ||
      (!_(_) &&
        _.capsules_per_row_array?.length &&
        _.capsules_per_row_array[0] >= (_.capsules?.length || 0))) &&
      (_.carousel_rows = 1));
  let _ = _(
    _,
    _.capsules,
    _.links,
    _.events,
    _.itemdefs,
    _.rewards,
    _.curatorLists,
    _.renderers,
  );
  if (_.length === 0)
    return {
      content: null,
      bAdditionalContent: !1,
    };
  let _ = _(_, _),
    _ = _(_, _),
    _ = _(_),
    _ = (_) => _(_, _),
    _ = {
      section: _,
      saleEvent: _,
      language: _,
      activeTab: _,
    },
    _ = {
      ..._,
      strCarouselKey: _(_?.GetTagSelection()),
    };
  return _(_.unique_id, _, _, _, _, _, _, _, _);
}
var _ = (_) => {
  let { nMaxItems: _, nItems: _ } = _,
    _ = _ - _,
    _ = _ % 2 == 0 ? `repeat(${_}, 1fr)` : `0.5fr repeat(${_ - 1}, 1fr) 0.5fr`,
    _ = null,
    _ = null;
  if (_ > 0) {
    let _ = Math.floor((_ + 1) / 2);
    (_ = []), (_ = []);
    for (let _ = 0; _ < _; _++)
      _.push((0, _.jsx)(`div`, {}, `front_` + _)),
        _.push((0, _.jsx)(`div`, {}, `back_` + _));
  }
  return (0, _.jsxs)(`div`, {
    className: _(
      _,
      _,
      `SaleSectionContainer`,
      `center_row_trgt`,
      `ItemCount_` + _,
    ),
    style: {
      gridTemplateColumns: _ > 1 ? _ : void 0,
    },
    children: [_, _.children, _],
  });
};
function _(_) {
  let { section: _, nMaxCapsulesPerRow: _, bInGamepadUI: _ } = _,
    _ = _(0, _(_, _)),
    _ = Math.min(_(_, _)[0], _(_, _)),
    _ = _(
      _,
      _ === `tall` && `_9Xrgw1NkKg8-`,
      _ === `fullrow` && `hbaqi-sk8nE-`,
    );
  return (0, _.jsx)(_, {
    nMaxItems: _,
    nItems: _,
    children: Array.from(
      {
        length: _,
      },
      (_, _) =>
        (0, _.jsx)(
          `div`,
          {
            className: _,
          },
          _,
        ),
    ),
  });
}
function _(_) {
  let { event: _, section: _, rgSlides: _, onSlide: _ } = _,
    _ = _(),
    { bScreenIsWide: _ } = _(_.section_type);
  return _.length === 0
    ? null
    : _.length === 1
      ? (0, _.jsx)(_.Fragment, {
          children: _[0],
        })
      : !_ || _
        ? (0, _.jsx)(`div`, {
            className: _,
            children: _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  nSlide: _,
                  onSlide: _,
                  children: _,
                },
                _,
              ),
            ),
          })
        : (0, _.jsx)(`div`, {
            className: _(_, _),
            children: (0, _.jsx)(_, {
              ..._(_.jsondata),
              visibleElements: 1,
              screenIsWide: !0,
              useTestScrollbar: !0,
              navKey: _.unique_id,
              onSlide: _,
              children: _,
            }),
          });
}
function _(_) {
  let { nSlide: _, onSlide: _, children: _ } = _,
    _ = _({
      onEnter: () => _?.(_),
    });
  return (0, _.jsx)(`div`, {
    ref: _,
    children: _,
  });
}
function _(_) {
  let {
      event: _,
      section: _,
      language: _,
      bInGamepadUI: _,
      placeholderHeight: _,
      nHiddenCapsules: _,
      personalizedCarousels: _,
      promotedSale: _,
      children: _,
    } = _,
    [_, _] = _.useState(void 0),
    { bShowSeeMoreHint: _, panelProps: _ } = _(_);
  return (0, _.jsxs)(_, {
    placeholderHeight: _,
    className: _({
      [_]: !0,
      [_]: _(_),
      [_]: _.disable_background,
      [_]: !0,
      SaleSectionForCustomCSS: !0,
      [_.sale_section_classname || ``]: !!_.sale_section_classname,
      [void 0]: _.background_repeat == `coverBlur`,
    }),
    rootMargin: _,
    holdGamepadFocus: _,
    ..._,
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, _.background_repeat == `coverBlur` ? _ : ``),
        style: _(_, _, _),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            section: _,
            event: _,
            language: _,
            nHiddenCapsules: _,
            personalizedCarousels: _,
            promotedSale: _,
            bShowSeeMoreHint: _,
            bUseGamepadLinkHint: !0,
            onLinkResolved: (_) => _(_ ?? void 0),
          }),
          (0, _.jsx)(_, {
            event: _,
            section: _,
          }),
        ],
      }),
      _,
      (0, _.jsx)(_, {
        section: _,
      }),
    ],
  });
}
function _(_) {
  let { event: _, section: _ } = _,
    _ = _.useMemo(
      () =>
        _.section_type == `events`
          ? _(`ch_newshub`, `application_config`)
          : void 0,
      [_.section_type],
    );
  if (_.hide_view_all_events_link) return null;
  let _ = null;
  if (_.section_type == `events`) {
    if (!_ || !_.BUsesContentHubForItemSource() || !_(_)) return null;
    _ = _.STORE_BASE_URL + `news/` + _;
  } else
    _.section_type == `sale_events`
      ? (_ = _.STORE_BASE_URL + `news/collection/sales/`)
      : _.section_type == `calendar` &&
        (_ = _.STORE_BASE_URL + `personalcalendar`);
  if (!_) return null;
  let _ = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      onClick: (_) => _(_, _),
      children: _(`#EventBrowse_AllEventsBtn`),
    }),
  });
}
function _(_) {
  let { saleEvent: _, section: _, bInGamepadUI: _ } = _,
    _ = {
      ..._,
      bShowAsCarousel: _(_),
      bAutoAdvance: !!_.carousel_auto_advance,
      bHideIfTooFewItems: !!_.hide_section_if_too_few_items,
      ..._(_.jsondata),
    },
    _ = _(_, _.nShowAdditionalRows),
    _ = _(_(_, _), _, _.capsules?.length ?? 0);
  return _ < _ && _(_) && (_.nShowAdditionalRows -= _ - _), _;
}
var _ = `NQebVMQULto-`;
function _(_) {
  let {
      section: _,
      nRowsWithNext: _,
      nCapsules: _,
      rgRowSizes: _,
      bLoading: _,
      onShowMore: _,
    } = _,
    _ = _(_, _, _) < _;
  return (0, _.jsx)(`div`, {
    className: _(_, `ShowContentsContainer`),
    children: _
      ? (0, _.jsx)(_, {
          size: `small`,
          string: _(`#Loading`),
        })
      : !_ &&
        _.cap_section_content &&
        (0, _.jsx)(_, {
          onClick: _,
          className: _(`XQ46KRNpLMk-`, `ShowContentsButton`),
          children: _(`#Sale_ShowMore`),
        }),
  });
}
function _(_) {
  return Math.max(_(_, 0), 4);
}
function _(_, _, _ = ``, _ = 0) {
  if (_.enable_faceted_browsing && _ > 0)
    return {
      feature: `salefacetbrowse` + _,
      depth: _,
    };
  if (_(_) && _.section_type != `crosspromotesalepage`) {
    let _ = _(_);
    if (_)
      switch (_) {
        case `wishlist`:
          return {
            feature: `salesmartwishlist` + _,
          };
        case `wishlist_onsale`:
          return {
            feature: `salesmartwishlist_allsale` + _,
          };
        case `interactive_recommender`:
          return {
            feature: `salesmartir` + _,
          };
        case `interactive_recommender_onsale`:
          return {
            feature: `salesmartir_allsale` + _,
          };
        case `ml_wishlist_recommender`:
          return {
            feature: `salesmartwr` + _,
          };
        case `ml_playtime_recommender`:
          return {
            feature: `salesmartpr` + _,
          };
        case `dlc`:
        case `dlc_onsale`:
        case `dlc_music_onsale`:
          return {
            feature: `salesmartdlc` + _,
          };
        case `tag_recommender`:
          return {
            feature: `salesmarttagrec` + _,
          };
        case `personalized_carousel`:
          return {
            feature: `salesmartpersonalizedcarousel` + _,
            depth: _(_, _).nSectionIndex,
          };
        case `tag`:
          return {
            feature: `autopopulatetag` + _,
          };
        case `category`:
          return {
            feature: `autopopulatecategory` + _,
          };
        default:
          return {
            feature: `salesmart` + _ + _,
          };
      }
  }
  switch (_.section_type) {
    case `sale_events`:
    case `events`:
      return {
        feature: `saleeventsection` + _,
      };
    case `links`:
      return {
        feature: `salesectionlinks` + _,
      };
    case `title_image`:
      return {
        feature: `salesectiontitle` + _,
      };
    case `discoveryqueue`:
      return {
        feature: `discoveryqueue2022` + _,
      };
    case `trailercarousel`:
      return {
        feature: `trailercarousel` + _,
      };
    case `rewards`:
      return {
        feature: `rewardshelf` + _,
      };
    case `event_description`:
    case `text_section`:
      return {
        feature: `salesectiontext` + _,
      };
    case `event_schedule`:
      return {
        feature: `saleeventsched` + _,
      };
    case `broadcast`:
      return {
        feature: `salesectionbroadcast` + _,
      };
    case `dlc_for_you`:
      return {
        feature: `saledlcforyou` + _,
      };
    case `calendar`:
      return {
        feature: `salecalendar` + _,
      };
    case `itemdef`:
      return {
        feature: `saleitemdef` + _,
      };
    case `crosspromotesalepage`:
      return {
        feature: `crosspromotesalepage` + _,
      };
  }
  return {
    feature: `salesection` + _,
  };
}
function _(_) {
  let { language: _, link: _ } = _,
    _ = _(),
    [_, _, _] = _(() => [
      _.GetWithFallback(_.localized_link_capsule, _),
      _ ? _.sc_url : _.url,
      _.materialized_link_capsule,
    ]),
    _ = _ ? _.GenerateURLFromHashAndExt(_.clanAccountID, _) : void 0;
  return (0, _.jsx)(_, {
    url: _,
    className: _.strClassName,
    bSkipForcingStoreLink: !1,
    bOpenInline: !!_.open_in_place,
    children: (0, _.jsxs)(`div`, {
      className: _(_, _.link.url ? _ : ``),
      children: [
        !!_ &&
          (0, _.jsx)(_, {
            className: `_-4JZsb8K2FY-`,
            src: _,
          }),
        !!_ &&
          (0, _.jsx)(`img`, {
            className: `_-4JZsb8K2FY-`,
            src: _,
            alt: _,
          }),
      ],
    }),
  });
}
export {
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
};
