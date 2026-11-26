import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./chunk~f3699411bf.js";
import { _ } from "./chunk~6b8ddcaac8.js";
import { _, _, _, _, _ } from "./chunk~4eed35ad1f.js";
import { _ } from "./chunk~56437c278a.js";
import { _ } from "./chunk~21cdc464a1.js";
import { _ } from "./chunk~710e3cfd2f.js";
import { _ } from "./chunk~4d16ce5d1a.js";
import { _ } from "./chunk~b8ca037aae.js";
import { _, _ } from "./chunk~3720b337f3.js";
import { _ } from "./chunk~379edc388d.js";
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
} from "./main.js";
import { _ } from "./chunk~6417efccc1.js";
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { sale: _, bValveOnly: _, bLoadNow: _ } = _,
    { event: _, section: _ } = _.useMemo(() => _(_, !!_), [_, _]);
  return (0, _.jsx)(_, {
    event: _,
    section: _,
    language: _(_.LANGUAGE),
    bLoadNow: _,
  });
}
function _(_, _) {
  let _ = {
      ..._([_], `event_capsule`),
      hide_owned_items: !0,
      test_show_on_valve_ip_only: _,
    },
    _ = _.clan_account_id || _.creator_clan_account_id || 0,
    _ = _(_, 1, `crosspromote`, Math.floor(Date.now() / 1e3));
  return (
    (_.jsondata.sale_sections = [_]),
    {
      event: _,
      section: _,
    }
  );
}
var _ = _(_(), 1),
  _ = `911px`,
  _ = `700px`,
  _ = `12px`,
  _ = `IvpvUTAlgCY-`,
  _ = `Ew9l-x2T9c0-`,
  _ = `tW10-at9cMc-`,
  _ = `txCSzBxQT1Q-`,
  _ = `_9wiEHoTVAzs-`,
  _ = `vVq04EOZM2Y-`,
  _ = `oVUMaC22Mz0-`,
  _ = `_3eoksPgeP-E-`,
  _ = `znS2DqGQQHM-`,
  _ = `_3VC9z5N0wHE-`,
  _ = `F6Wso3e7oqk-`,
  _ = `h8E3fLYHMcw-`,
  _ = `C3aRBmfT1yQ-`,
  _ = `_5w6AlYMyKXw-`,
  _ = `I5xcEcLqHQE-`,
  _ = `OahpVA-2mkI-`,
  _ = `nL4oSzmS8Ds-`,
  _ = `cV6I71ujCms-`,
  _ = `VqHCjCKSpdg-`,
  _ = `Wv-2-GahLGE-`,
  _ = `-qUG2JW7G8E-`,
  _ = `TSCZ-XXe31E-`,
  _ = `NCC9qjeD1o8-`,
  _ = `baOqlTJHsx8-`,
  _ = {
    deal: `_3bi1SSQ1KQg-`,
    new: `_1wXSD0PiGyA-`,
    popular: `OthFRkqj-40-`,
    quality: `AQj-ehWmZNY-`,
    urgent: `YaIHfPAnyiE-`,
  };
function _(_) {
  return (0, _.default)(_, _[_]);
}
function _(_) {
  switch (_) {
    case `first_time_on_sale`:
    case `newly_on_sale`:
    case `just_updated`:
      return `new`;
    case `top_seller`:
    case `popular_in_region`:
      return `popular`;
    case `wishlist`:
    case `well_reviewed`:
    case `none`:
      return `quality`;
    case `ending_soon`:
      return `urgent`;
    default:
      return `deal`;
  }
}
var _ = 3,
  _ = 6,
  _ = 2,
  _ = 1,
  _ = 3,
  _ = 2,
  _ = parseInt(_),
  _ = parseInt(_),
  _ = parseInt(_),
  _ = `DiscountsAndEventsReady`;
function _(_) {
  return _.appid ? `app_${_.appid}` : `url_${_.url ?? ``}`;
}
function _(_, _, _, _, _) {
  let _ = _.filter((_) => _.style === `full`),
    _ = _.filter((_) => _.style !== `full` && _.banner === `daily_deal`),
    _ = _.filter((_) => _.style !== `full` && _.banner !== `daily_deal`),
    _ = [],
    _ = 0,
    _ = 0,
    _ = 0;
  for (; _.length < _ && (_ < _.length || _ < _.length || _ < _.length);) {
    let _ = [],
      _ = _ < _.length || _ < _.length,
      _ = Math.min(_ ? _ : _, _.length - _);
    for (let _ = 0; _ < _; _++) {
      let _ = _[_++];
      _.push({
        key: `full_${_(_)}`,
        items: [_],
      });
    }
    let _ = (_ - _.length) * 2,
      _ = Math.min(_, _, _.length - _),
      _ = _.slice(_, _ + _);
    _ += _;
    let _ = Math.min(_ - _, _.length - _);
    (_.push(..._.slice(_, _ + _)), (_ += _));
    for (let _ = 0; _ < _.length; _ += 2) {
      let _ = _.slice(_, _ + 2);
      _.push({
        key: `half_${_(_[0])}`,
        items: _,
      });
    }
    _.push(_);
  }
  return _;
}
function _(_) {
  switch (_.banner) {
    case `weekend_deal`:
      return _.Localize(`#DiscountsAndEvents_Banner_WeekendDeal`);
    case `midweek_deal`:
      return _.Localize(`#DiscountsAndEvents_Banner_MidweekDeal`);
    case `daily_deal`:
      return _.Localize(`#DiscountsAndEvents_Banner_DailyDeal`);
    case `largest_discount`:
      return _.Localize(`#DiscountsAndEvents_Banner_LargestDiscount`);
    case `wishlist`:
      return _.Localize(`#DiscountsAndEvents_Banner_Wishlist`);
    case `first_time_on_sale`:
      return _.Localize(`#DiscountsAndEvents_Banner_FirstTimeOnSale`);
    case `ending_soon`:
      return _.Localize(`#DiscountsAndEvents_Banner_EndingSoon`);
    case `newly_on_sale`:
      return _.Localize(`#DiscountsAndEvents_Banner_NewlyOnSale`);
    case `well_reviewed`:
      return _.Localize(`#DiscountsAndEvents_Banner_WellReviewed`);
    case `top_seller`:
      return _.Localize(`#DiscountsAndEvents_Banner_TopSeller`);
    case `hot_deal`:
      return _.Localize(`#DiscountsAndEvents_Banner_HotDeal`);
    case `deep_discount`:
      return _.Localize(`#DiscountsAndEvents_Banner_DeepDiscount`);
    case `popular_in_region`:
      return _.Localize(`#DiscountsAndEvents_Banner_PopularInRegion`);
    case `just_updated`:
      return _.Localize(`#DiscountsAndEvents_Banner_JustUpdated`);
    case `custom`:
      return _.title || void 0;
    case `none`:
      return _.feature === `discounts-none`
        ? _.Localize(`#Sale_Specials_Label_BasedOnWhatYouPlay`)
        : void 0;
    default:
      return;
  }
}
function _(_) {
  return _.feature
    ? _.feature
    : _.style === `full`
      ? `spotlight`
      : _.banner === `daily_deal`
        ? `daily-deal`
        : `spotlight-specials`;
}
function _(_) {
  let {
      rgItems: _,
      bLoadError: _ = !1,
      bHideTitle: _ = !1,
      bReactHover: _ = !1,
      bFrontPage: _ = !1,
      strTheme: _,
      rgPageFooters: _ = [],
      bHasFooterActionLegend: _ = !1,
      onNavIntent: _,
    } = _,
    _ = _(_),
    _ = _(),
    _ = _ && !_,
    _ = _.EREALM == _.k_ESteamRealmChina,
    _ = _ && !_,
    _ = _.Localize(
      _
        ? `#DiscountsAndEvents_ExploreSpecialsPage`
        : `#DiscountsAndEvents_SeeMore`,
    ),
    _ =
      _.strSeeMoreURL === null
        ? void 0
        : (_.strSeeMoreURL ?? `${_.STORE_BASE_URL}specials`),
    _ = _(_),
    { bShowSeeMoreHint: _, panelProps: _ } = _(_, `X`),
    { rgPages: _, rgColumns: _ } = _.useMemo(() => {
      let _ = _ && _,
        _ = _(_ ?? [], _, _ ? _ : _, _, _ ? _ : _);
      return (
        _ && _.length > 1 && _[_.length - 1].length < _ && (_ = _.slice(0, -1)),
        {
          rgPages: _,
          rgColumns: _.flat(),
        }
      );
    }, [_, _, _]);
  if (!_ && _)
    return (0, _.jsx)(_, {
      bHideTitle: _,
    });
  if (!_)
    return (0, _.jsx)(`div`, {
      className: (0, _.default)(_, _, _),
    });
  let _ = _[0]
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _[0],
      })
    : null;
  if (!_.length) return _;
  let _ = (0, _.jsx)(_, {
    visibleElements: 1,
    disableEdgeWrap: !1,
    hideArrows: !1,
    hidePips: _,
    screenIsWide: _,
    bForceSimpleCarousel: _,
    gap: _,
    className: (0, _.default)(_, !_ && `tvKN6VPvEYo-`),
    onNavIntent: _ ? _ : void 0,
    children: _
      ? _.map((_, _) =>
          (0, _.jsxs)(
            `div`,
            {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  className: _,
                  "flow-children": `row`,
                  role: `list`,
                  "aria-labelledby": `discounts_and_events_title`,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        column: _,
                        depth: _ + 1,
                        bReactHover: _,
                      },
                      _.key,
                    ),
                  ),
                }),
                _.length > 0 &&
                  (0, _.jsx)(`div`, {
                    className: `_3eoksPgeP-E-`,
                    children: _[_ % _.length],
                  }),
              ],
            },
            _[0].key,
          ),
        )
      : _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              column: _,
              depth: Math.floor(_ / _) + 1,
              bReactHover: _,
            },
            _.key,
          ),
        ),
  });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        className: (0, _.default)(
          _,
          _,
          _ && `P-5zAQV9Nrw-`,
          _ && _ === `blackfriday` && `D7k0v382WJU-`,
        ),
        navEntryPreferPosition: _.PREFERRED_CHILD,
        ..._,
        onSecondaryActionDescription: _
          ? _.Localize(`#Sale_SectionLink_BrowseAll`)
          : void 0,
        children: [
          (0, _.jsxs)(_, {
            bHideTitle: _,
            children: [
              !_ &&
                _ &&
                (0, _.jsx)(_, {
                  url: _,
                  label: _,
                  location: `desktop`,
                  bShine: _,
                }),
              _ &&
                !_ &&
                (0, _.jsx)(_, {
                  label: _,
                  shown: _,
                  button: `X`,
                }),
            ],
          }),
          _,
          !_ && !_ && _,
          !_ &&
            _ &&
            (0, _.jsx)(_, {
              url: _,
              label: _,
              location: `mobile`,
              bShine: _,
            }),
        ],
      }),
      _ && _,
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)(_, {
        bHideTitle: _.bHideTitle,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#DiscountsAndEvents_LoadError`),
      }),
    ],
  });
}
function _(_) {
  let { bHideTitle: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _ && `lwTekD10gdM-`),
    children: [
      (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _ && `mMcECT5lSy0-`),
        _: `discounts_and_events_title`,
        role: `heading`,
        "aria-level": 2,
        children: _.Localize(`#DiscountsAndEvents_Title`),
      }),
      _,
    ],
  });
}
function _(_) {
  let { url: _, label: _, location: _, bShine: _ = !1 } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _ == `mobile` ? _ : _),
    children: (0, _.jsx)(`a`, {
      href: _,
      className: (0, _.default)(_, _ && `TP90UHYnpbo-`),
      children: _,
    }),
  });
}
function _(_) {
  let { column: _, depth: _, bReactHover: _ } = _,
    _ = _.items[0]?.style === `full`;
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _ && `C4YUDj4Nzy4-`),
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    children: _.items.map((_) =>
      (0, _.jsx)(
        _,
        {
          item: _,
          depth: _,
          bReactHover: _,
        },
        _(_),
      ),
    ),
  });
}
function _(_) {
  let { appid: _, feature: _ } = _,
    _ = _.useMemo(
      () => ({
        appid: _,
        style: `half`,
        banner: `none`,
        feature: _,
      }),
      [_, _],
    );
  return (0, _.jsx)(_, {
    item: _,
    depth: 1,
    bReactHover: !1,
  });
}
function _(_) {
  let { item: _, depth: _, bReactHover: _ } = _,
    _ = _.style === `full`,
    _ = _.useMemo(
      () =>
        _.appid
          ? {
              appid: _.appid,
            }
          : void 0,
      [_.appid],
    ),
    _ = !!_.url,
    _ = _.alt !== void 0,
    _ = !!_.image,
    _ = !!_.price || !!_.is_free || !!_.discount_text,
    _ = !_ || !_ || !_,
    _ = !_,
    _ = !_,
    { data: _ } = _(_ ? _ : void 0),
    { data: _ } = _(_ ? _ : void 0),
    { data: _ } = _(_ ? _ : void 0),
    { data: _ } = _(),
    _ = _?.preferences?.disable_microtrailers,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _(_),
    _ = !!_ && !_.sale_page && !_,
    _ = _ && (_ || _ || _),
    _ = _(_),
    _ = _(_.url, _, _),
    _ = _(_, _),
    _ = _(_, _, _),
    _ = _.image || (_ ? _(_, `hero_capsule`, `header`) : _(_, `header`)),
    _ = _ && !!_.image_letterbox,
    _ = _(_),
    _ = _.alt ?? _?.name ?? ``;
  if (_ && ((!_ && _ === null) || (!_ && _ === null))) return null;
  let _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ &&
              _ &&
              (0, _.jsx)(`div`, {
                className: `_4SKFun4gro0-`,
                style: {
                  backgroundImage: `url(${_})`,
                },
              }),
            _ &&
              (0, _.jsx)(`img`, {
                className: (0, _.default)(`auc77O9GIek-`, _ && `Xu-5DhWCEgM-`),
                src: _,
                alt: _,
              }),
            _ &&
              (0, _.jsx)(_, {
                _: _,
                active: _,
                bIsHoverMode: !0,
                eGrowOnActivate: _ ? _.k_ETrailerGrowAmount_Implicit : void 0,
              }),
            _ &&
              (0, _.jsx)(`div`, {
                className: (0, _.default)(`jxYpM-g5fRs-`, _(_(_.banner))),
                children: _,
              }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            item: _,
            storeItem: _,
            purchaseOption: _,
          }),
        }),
      ],
    }),
    _;
  if (_) {
    let _ = (0, _.jsx)(_, {
      href: _,
      className: _,
      children: _,
    });
    _ = _
      ? (0, _.jsx)(_, {
          appID: _.appid,
          feature: _,
          depth: _,
          children: _,
        })
      : _;
  } else
    _ = (0, _.jsx)(_, {
      storeItem: _,
      feature: _,
      depth: _,
      className: _,
      children: _,
    });
  let _ = (0, _.jsxs)(_, {
    className: (0, _.default)(
      _,
      _ ? _ : _,
      _.banner === `daily_deal` && void 0,
      _ && `i6bxdYcZVss-`,
      _ && `l6QUbDlbEUk-`,
    ),
    onGamepadFocus: () => _(!0),
    onGamepadBlur: () => _(!1),
    ..._,
    onOKActionDescription: _.onOptionsButton ? null : void 0,
    children: [
      _
        ? _
          ? (0, _.jsx)(_, {
              _: _,
              className: _,
              strChildLinkURL: _ ?? _,
              children: _,
            })
          : (0, _.jsx)(_, {
              _: _,
              hoverClassName: _,
              fnHoverState: _,
              disableScreenshots: !0,
              children: _,
            })
        : (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
      _ &&
        !_.sale_page &&
        (0, _.jsx)(_, {
          appid: _.appid,
          snr: _,
          onActiveChange: _,
        }),
    ],
  });
  return _
    ? (0, _.jsx)(_, {
        itemid: _,
        children: _,
      })
    : _;
}
function _(_) {
  let { item: _, storeItem: _, purchaseOption: _ } = _;
  if (_.discount_text)
    return (0, _.jsx)(`div`, {
      className: _,
      children: _.discount_text,
    });
  let _ = _.price ?? _;
  return _
    ? (0, _.jsx)(_, {
        purchaseOption: _,
        size: `inline`,
        legacyStyle: !0,
      })
    : _.is_free || _?.is_free
      ? (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Price_Free`),
        })
      : null;
}
var _ = 2e4,
  _ = 3e5;
function _(_, _, _, _, _ = {}) {
  return _(_(_, _, _, _, _));
}
function _(_, _, _, _, _ = {}) {
  let _ = new URLSearchParams(_);
  _ && _.set(`t`, _);
  let _ = `${_.STORE_BASE_URL}default/discounts_and_events_data/`,
    _ = _.toString();
  return (
    _ && (_ += `?${_}`),
    {
      queryKey: [`discountsandevents`, _ ?? null, _],
      initialData: _,
      initialDataUpdatedAt: _,
      queryFn: async () => {
        let _ = await fetch(_, {
          credentials: `include`,
          signal: AbortSignal.timeout(_),
        });
        if (!_._) throw Error(`discounts_and_events_data failed: ${_.status}`);
        let _ = await _.json();
        return {
          items: Array.isArray(_.items) ? _.items : [],
        };
      },
      staleTime: _,
      ..._,
    }
  );
}
var _ = 3,
  _ = _,
  _ = 6,
  _ = Date.UTC(2026, 10, 26, 18),
  _ = Date.UTC(2026, 10, 30, 18);
function _(_) {
  let _ = (_ && Date.parse(_)) || Date.now();
  return _ >= _ && _ < _ ? `blackfriday` : void 0;
}
function _(_) {
  return _.type === `game`
    ? (0, _.jsx)(_, {
        appid: _._,
        feature: `home-sale-crosspromo`,
      })
    : void 0;
}
function _(_, _) {
  let _ = new Set(),
    _ = [];
  for (let _ of _) {
    if (_.length >= _) break;
    let _ = (_.capsules ?? []).filter((_) => !_.has(_._) && !_(_._));
    if (_.length >= _) {
      let _ = _.slice(0, _);
      (_.forEach((_) => _.add(_._)),
        _.push({
          ..._,
          capsules: _,
        }));
    }
  }
  return _;
}
function _(_) {
  return _.event_gid ?? `creator_${_.creator_clan_account_id}`;
}
function _(_) {
  let [_, _] = _.useState(() => new Set()),
    _ = _.useRef(_);
  return (
    (_.current = _),
    [
      _,
      _.useCallback((_) => {
        let _ = _.current,
          _ = _.length ? _[_ % _.length] : void 0;
        if (!_) return;
        let _ = _(_);
        _((_) => (_.has(_) ? _ : new Set([..._, _])));
      }, []),
    ]
  );
}
function _(_) {
  let {
      initialData: _,
      initialDataUpdatedAt: _,
      previewTime: _,
      switches: _,
      crossPromoSales: _,
      crossPromoValveOnly: _,
    } = _,
    _ = _(_, _, _, _),
    [_, _] = _(),
    _ = !!_?.as_anon && _.as_anon !== `0`,
    _ = !!_?.accountid && _.accountid !== `0`,
    _ = _ || _,
    _ = _.useMemo(
      () =>
        !_.data || _ || _
          ? _.data?.items
          : _.data.items.filter(
              (_) =>
                !_.appid ||
                _.sale_page ||
                (!_.BIsGameOwned(_.appid) && !_.BIsGameIgnored(_.appid)),
            ),
      [_.data, _, _, _],
    ),
    _ = _.useMemo(() => {
      if (!_?.length || !_ || _) return [];
      let _ = new Set(_.map((_) => _.appid));
      return _(
        _,
        (_) => _.has(_) || (!_ && (_.BIsGameOwned(_) || _.BIsGameIgnored(_))),
      );
    }, [_, _, _, _, _]),
    [_, _] = _(_),
    _ = _.map((_) =>
      (0, _.jsx)(
        _,
        {
          feature: `home-sale-crosspromo`,
          children: (0, _.jsx)(_, {
            value: _,
            children: (0, _.jsx)(_, {
              value: !0,
              children: (0, _.jsx)(_, {
                value: !0,
                children: (0, _.jsx)(_, {
                  sale: _,
                  bValveOnly: _,
                  bLoadNow: _.has(_(_)),
                }),
              }),
            }),
          }),
        },
        _(_),
      ),
    );
  return (0, _.jsx)(_, {
    rgItems: _,
    bLoadError: _.isError,
    bFrontPage: !0,
    strTheme: _(_),
    rgPageFooters: _,
    bHasFooterActionLegend: !0,
    onNavIntent: _,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    placeholderHeight: _,
    rootMargin: `100% 0px 100% 0px`,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
export { _ as default };
