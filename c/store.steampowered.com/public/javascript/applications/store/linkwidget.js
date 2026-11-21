import { _ } from "./chunk~f025431ab0.js";
import { _, _, _ } from "./chunk~01cfc309bf.js";
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
} from "./chunk~6b8ddcaac8.js";
import { _, _, _, _, _, _, _, _, _ } from "./chunk~f57d770d64.js";
import { _ } from "./chunk~961c06e93e.js";
import { _ } from "./chunk~5adf866415.js";
import { _ } from "./chunk~2f085f1384.js";
import { _, _, _, _ } from "./chunk~4eed35ad1f.js";
import { _, _ } from "./chunk~f4c928a27a.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~e867464c75.js";
import { _ } from "./chunk~4e9767668d.js";
import { _, _, _ } from "./chunk~2f8c67b4de.js";
import { _ } from "./chunk~618fb52a90.js";
import { _ } from "./chunk~21cdc464a1.js";
import { _ } from "./chunk~710e3cfd2f.js";
import { _, _ } from "./chunk~3ea79bd96d.js";
import { _, _ } from "./chunk~3720b337f3.js";
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
} from "./main.js";
var _ = _(_()),
  _ = _();
function _(_, _) {
  return _ == null || _ == null || !_(_)
    ? !0
    : _.reverse_show_on_tabs
      ? !(!_.show_on_tabs || _.show_on_tabs.includes(_))
      : !!(_.show_on_tabs && _.show_on_tabs.includes(_));
}
function _(_) {
  return _.template_tab_id ?? _.unique_id;
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
  let { displayStyle: _, requestCompact: _, bNarrowScreen: _, ..._ } = _,
    { type: _ } = _,
    _ = _ ?? _(),
    _ = _();
  if (_ === `purchaseonlydisplay`)
    return (0, _.jsx)(_, {
      ..._,
    });
  if (_)
    return (0, _.jsx)(_, {
      ..._,
    });
  if (_ && !_)
    return (0, _.jsx)(_, {
      ..._,
    });
  if (_ == `bundle` || _ == `sub`)
    return (0, _.jsx)(_, {
      ..._,
    });
  if (_ && (_ == `library` || _ == `animated`))
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
function _(_, _, _ = _()) {
  return !(_ === `purchaseonlydisplay` || _ || _);
}
var _ = `h4e3CZE5mfI-`,
  _ = `lJc7R9Bil2I-`,
  _ = `IS179RoYT1Q-`,
  _ = `SZeormjSwYo-`,
  _ = 258;
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
    let _ = _(_ && `FolDBzXMW2I-`, _ && _ === `tall` && `E6LHQcm-39c-`);
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
    (`overrideNavigation` in _ &&
      (_ = (_) => (
        _.overrideNavigation(_),
        _ && (_.preventDefault(), _.stopPropagation()),
        !1
      )),
      _() && (_ == `library` || _ == `animated`) && (_ = `bordered`));
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
function _(_, _, _, _, _, _, _, _, _) {
  let {
    RenderEvent: _,
    RenderEventSummary: _,
    RenderItemDef: _,
    RenderLoyaltyReward: _,
    RenderCuratorList: _,
  } = _ || {};
  return _.section_type === `events` || _.section_type === `sale_events`
    ? _ && _
      ? _.map((_) => ({
          Render: (_) => _(_, _),
        }))
      : !_ || !_
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
var _ = 3;
function _(_, _, _, _, _, _, _, _, _, _) {
  let {
    nMaxCapsulesPerRow: _,
    bScreenIsWide: _,
    nShowAdditionalRows: _,
    bShowAsCarousel: _,
    bAutoAdvance: _,
    bHideIfTooFewItems: _,
    strCarouselKey: _,
    bPaginationPills: _,
    bDropShortLastCarouselPage: _,
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
    _ = _,
    _ = _.length;
  (_ &&
    _ &&
    _ > 1 &&
    _ <= Math.min(4, _) &&
    _ > _[0] &&
    (!_ || _ > 1) &&
    ((_ = [_]), (_ = [`grid`])),
    _ && (_ > 1 || _[0] == `tall`)
      ? (_ = [`fullrow`])
      : _ && _.length === 2 && _[0] === `tall` && (_ = [`grid`]));
  let _ = _ && (_ <= 1 || (!!_ && !_)),
    _ = Math.min(_[0], _);
  if (_ && _) {
    let _ = _ ? _ : _(_, _, _, _, _);
    _ = _(_, _);
  }
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
    if (_) ((_ = _), (_ = _));
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
        (_.push(
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
          (_ += _));
      }
      if (_ || (_ >= _.length && _.length === 0)) break;
      let _ = _.length || void 0;
      (_.push(
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
        (_ = []));
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
function _(_, _, _, _, _) {
  let _ = 0;
  for (let _ = 0; _ < _; _++) {
    let _ = _(_ ? _ : 0, _);
    _ += Math.min(_[_ % _.length], _(_, _));
  }
  return _;
}
function _(_, _) {
  if (_.length <= _) return _;
  let _ = Math.min(_ - 2, _),
    _ = _.length % _;
  return _ === 0 || _ > _ ? _ : _.slice(0, _.length - _);
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
    _.eventSummaries,
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
    ((_ = []), (_ = []));
    for (let _ = 0; _ < _; _++)
      (_.push((0, _.jsx)(`div`, {}, `front_` + _)),
        _.push((0, _.jsx)(`div`, {}, `back_` + _)));
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
  let {
      event: _,
      section: _,
      language: _,
      bInGamepadUI: _,
      placeholderHeight: _,
      nHiddenCapsules: _,
      personalizedCarousels: _,
      children: _,
    } = _,
    [_, _] = _.useState(void 0),
    _ = _(_, _),
    _ = _ && !!_ && !_,
    { bShowSeeMoreHint: _, panelProps: _ } = _(_ ? _ : _, `X`);
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
            bShowSeeMoreHint: _,
            bUseGamepadLinkHint: !0,
            eGamepadLinkHintButton: `X`,
            onLinkResolved: (_) => _(_ ?? void 0),
          }),
          _
            ? (0, _.jsx)(_, {
                label: _(`#EventBrowse_AllEventsBtn`),
                shown: _,
                button: `X`,
              })
            : (0, _.jsx)(_, {
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
  let _ = _(_.event, _.section);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          onClick: (_) => _(_, _),
          children: _(`#EventBrowse_AllEventsBtn`),
        }),
      })
    : null;
}
function _(_, _) {
  let _ = _.useMemo(
    () =>
      _.section_type == `events`
        ? _(`ch_newshub`, `application_config`)
        : void 0,
    [_.section_type],
  );
  if (_.hide_view_all_events_link) return;
  let _ = null;
  if (_.section_type == `events`) {
    if (!_ || !_.BUsesContentHubForItemSource() || !_(_)) return;
    _ = _.STORE_BASE_URL + `news/` + _;
  } else
    _.section_type == `sale_events`
      ? (_ = _.STORE_BASE_URL + `news/collection/sales/`)
      : _.section_type == `calendar` &&
        (_ = _.STORE_BASE_URL + `personalcalendar`);
  return _ ?? void 0;
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
  return (_ < _ && _(_) && (_.nShowAdditionalRows -= _ - _), _);
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
        case `discount_reason`:
          return {
            feature: `salesmartdiscountreason` + _,
            depth: _.smart_section_discount_reason ?? 0,
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
var _ = `partnereventaction/eventsummary`;
function _(_) {
  let _ = new URLSearchParams();
  return (
    _.set(`clan_account_id`, String(_.clanAccountID)),
    _.set(`event_gid`, _.strEventGID),
    _.set(`language`, String(_.eLanguage)),
    _.toString()
  );
}
var _ = `partnereventaction/eventsummaries`;
function _(_) {
  let _ = new Map();
  for (let _ of _)
    _.has(_.strEventGID) ||
      _.set(_.strEventGID, {
        clanAccountID: _.clanAccountID,
        strEventGID: _.strEventGID,
      });
  return [..._.values()].sort(
    (_, _) =>
      _.strEventGID.length - _.strEventGID.length ||
      (_.strEventGID < _.strEventGID ? -1 : +(_.strEventGID > _.strEventGID)),
  );
}
function _(_) {
  return _(_)
    .map((_) => `${_.clanAccountID}:${_.strEventGID}`)
    .join(`,`);
}
function _(_) {
  let _ = new URLSearchParams();
  return (
    _.set(`events`, _(_.rgEvents)),
    _.set(`language`, String(_.eLanguage)),
    _.toString()
  );
}
async function _(_) {
  let _ = `${_.STORE_BASE_URL}${_}?${_(_)}`,
    _ = await fetch(_);
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  if (_?.success !== 1) throw Error(`${_} answered EResult ${_?.success}`);
  return _.summary ?? null;
}
async function _(_) {
  if (_.rgEvents.length === 0) return [];
  let _ = `${_.STORE_BASE_URL}${_}?${_(_)}`,
    _ = await fetch(_);
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  if (_?.success !== 1) throw Error(`${_} answered EResult ${_?.success}`);
  return _.summaries ?? [];
}
function _(_, _, _) {
  return [`PartnerEventSummary`, _, _, _];
}
function _(_, _) {
  return {
    queryKey: _(_.clanAccountID, _.strEventGID, _.eLanguage),
    queryFn: () => _(_),
    select: _,
    staleTime: 6e5,
  };
}
function _(_) {
  return [`PartnerEventSummaries`, _.eLanguage, _(_.rgEvents)];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: () => _(_),
    staleTime: 3e5,
  };
}
function _(_) {
  let { event: _, section: _, rgSlides: _, onSlide: _, onNavIntent: _ } = _,
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
              onNavIntent: _,
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
