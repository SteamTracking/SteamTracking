import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~cd94ddba57.js";
import { _ } from "./chunk~d43c81a658.js";
import { _ } from "./chunk~21cdc464a1.js";
import { _ } from "./chunk~710e3cfd2f.js";
import { _, _ } from "./chunk~ffe4581a06.js";
import { _ } from "./chunk~4d16ce5d1a.js";
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
} from "./main.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
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
  _ = `znS2DqGQQHM-`,
  _ = `_3VC9z5N0wHE-`,
  _ = `F6Wso3e7oqk-`,
  _ = `h8E3fLYHMcw-`,
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
  _ = _(),
  _ = 3,
  _ = 4,
  _ = 2,
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
    case `custom`:
      return _.title || void 0;
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
    } = _,
    _ = _(_),
    _ = _(),
    _ = _ && !_,
    _ = _(
      _.strSeeMoreURL === null
        ? void 0
        : (_.strSeeMoreURL ?? `${_.STORE_BASE_URL}specials`),
    ),
    _ = _.Localize(`#DiscountsAndEvents_SeeMore`),
    { bShowSeeMoreHint: _, panelProps: _ } = _(_),
    { rgPages: _, rgColumns: _ } = _.useMemo(() => {
      let _ = _(_ ?? [], _, _, _, _);
      return {
        rgPages: _,
        rgColumns: _.flat(),
      };
    }, [_]);
  return !_ && _
    ? (0, _.jsx)(_, {
        bHideTitle: _,
      })
    : _
      ? _.length
        ? (0, _.jsxs)(_, {
            className: (0, _.default)(_, _),
            navEntryPreferPosition: _.PREFERRED_CHILD,
            ..._,
            onOptionsActionDescription: _ ? _ : void 0,
            children: [
              (0, _.jsxs)(_, {
                bHideTitle: _,
                children: [
                  !_ &&
                    _ &&
                    (0, _.jsx)(_, {
                      url: _,
                      location: `desktop`,
                    }),
                  _ &&
                    (0, _.jsx)(_, {
                      label: _,
                      shown: _,
                    }),
                ],
              }),
              (0, _.jsx)(_, {
                visibleElements: 1,
                disableEdgeWrap: !1,
                hideArrows: !1,
                hidePips: _,
                screenIsWide: _,
                bForceSimpleCarousel: _,
                gap: _,
                className: (0, _.default)(_, !_ && `tvKN6VPvEYo-`),
                children: _
                  ? _.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
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
              }),
              !_ &&
                _ &&
                (0, _.jsx)(_, {
                  url: _,
                  location: `mobile`,
                }),
            ],
          })
        : null
      : (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _, _),
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
  let { url: _, location: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _ == `mobile` ? _ : _),
    children: (0, _.jsx)(`a`, {
      href: _,
      className: _,
      children: _.Localize(`#DiscountsAndEvents_SeeMore`),
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
    _ = !!_ && !_ && !_.sale_page && !_,
    _ = _ && (_ || _),
    _ = _(_),
    _ = _(_.url, _, _),
    _ = _(_, _, _),
    _ = _.image || (_ ? _(_, `hero_capsule`, `header`) : _(_, `header`)),
    _ = _(_),
    _ = _.alt ?? _?.name ?? ``;
  if (_ && ((!_ && _ === null) || (!_ && _ === null))) return null;
  let _ = (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _ &&
              (0, _.jsx)(`img`, {
                className: `auc77O9GIek-`,
                src: _,
                alt: _,
              }),
            _ &&
              (0, _.jsx)(_, {
                _: _,
                active: _,
                bIsHoverMode: !0,
              }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `jxYpM-g5fRs-`,
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
  let _ = (0, _.jsx)(_, {
    className: (0, _.default)(
      _,
      _ ? _ : _,
      _.banner === `daily_deal` && `-xyaBPF0Lno-`,
      _ && `l6QUbDlbEUk-`,
    ),
    onGamepadFocus: () => _(!0),
    onGamepadBlur: () => _(!1),
    children: _
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
function _(_) {
  let {
      initialData: _,
      initialDataUpdatedAt: _,
      previewTime: _,
      switches: _,
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
    );
  return (0, _.jsx)(_, {
    rgItems: _,
    bLoadError: _.isError,
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
