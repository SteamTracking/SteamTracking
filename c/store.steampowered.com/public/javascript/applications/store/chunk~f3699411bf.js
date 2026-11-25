import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
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
} from "./chunk~6b8ddcaac8.js";
import { _, _ } from "./chunk~f57d770d64.js";
import { _, _, _, _, _ } from "./chunk~4eed35ad1f.js";
import { _, _, _, _ } from "./chunk~cbbb6ae37c.js";
import { _ } from "./chunk~f4c928a27a.js";
import "./chunk~21cdc464a1.js";
import { _, _ } from "./chunk~710e3cfd2f.js";
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
} from "./chunk~b8ca037aae.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./chunk~3720b337f3.js";
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
} from "./main.js";
async function _(_, _ = 1e3) {
  return await new Promise((_, _) => {
    let _ = new Image();
    ((_.src = _),
      (_.onload = () => _(`success`)),
      (_.onerror = () => _(`error`)),
      _ > 0 && window.setTimeout(() => _(`timeout`), _));
  });
}
var _ = _(_(), 1);
async function _(_, _, _, _, _) {
  let { queryClient: _, storeItemLoader: _ } = _,
    _ = _(_, _),
    _ = _.prefer_assets_without_overrides ? _ : _,
    _ = _.flatMap((_) => {
      let _ = _(_);
      return _ ? [_] : [];
    }),
    _ = await Promise.all(
      _.map(async (_) => {
        try {
          let [_, _, _] = await Promise.all([
            _.fetchQuery(_(_, _)),
            _.fetchQuery(_(_, _)),
            _.fetchQuery(_(_, _)),
          ]);
          if (!_?.visible || _(_, _)) return;
          let _ = _,
            _ = _(_, _, `header`);
          if (_) {
            let [_, _] = await Promise.all([
              _.fetchQuery(_(_, _)),
              _.fetchQuery(_(_, _)),
            ]);
            _?.visible && (_ = _);
          }
          return _ ? _(_, !0)[0] : void 0;
        } catch {
          return;
        }
      }),
    );
  for (let _ of _.filter((_) => !!_).slice(0, _)) _(_, 0);
}
async function _(_, _, _, _ = _(_, _)) {
  let { queryClient: _, storeItemLoader: _ } = _,
    _ = _.prefer_assets_without_overrides ? _ : _,
    _ = _.flatMap((_) => {
      let _ = _(_);
      return _ ? [_] : [];
    });
  if (
    (await Promise.all([
      _.ensureQueryData(_()).catch(() => void 0),
      ..._.flatMap((_) => [
        _.prefetchQuery(_(_, _)),
        _.prefetchQuery(_(_, _)),
        _.prefetchQuery(_(_, _)),
        _.prefetchQuery(_(_, _)),
        _.prefetchQuery(_(_, _)),
        _.prefetchQuery(_(_, _)),
        ...(_ ? [_.prefetchQuery(_(_, _)), _.prefetchQuery(_(_, _))] : []),
      ]),
    ]),
    !_(_))
  )
    return;
  let _ = new Set();
  for (let _ of _) {
    let _ = _.getQueryData(_(_, _).queryKey)?.related_items?.parent_appid;
    _ && _.add(_);
  }
  await Promise.all(
    Array.from(_, (_) =>
      _.prefetchQuery(
        _(_, {
          appid: _,
        }),
      ),
    ),
  );
}
function _(_, _) {
  return _.length === 1
    ? !0
    : _.capsule_style_per_row_array
      ? _.capsule_style_per_row_array.includes(`fullrow`)
      : _(_, !1);
}
var _ = _.createContext(void 0),
  _ = _.createContext(void 0);
function _(_) {
  return (
    (_(_) || !!_.sale_tag_filter) &&
    !_.enable_faceted_browsing &&
    !_.disable_visibility_tracking &&
    _.section_type !== `trailercarousel`
  );
}
function _(_, _, _, _) {
  let _ = [],
    _ = [];
  for (let _ of _) (_(_) ? _ : _).push(_);
  return _.length ? (_ && _.length < _ ? _ : _.concat(_)) : _;
}
function _(_, _, _, _) {
  let _ = _.useContext(_),
    _ = _.useContext(_),
    _ = _.useContext(_),
    _ = _.useMemo(
      () =>
        _ ?? (_ ? _.GetSaleSectionIncludingFooterSections().indexOf(_) : -1),
      [_, _, _],
    ),
    _ = _.useId(),
    _ = _(_, 0, _) || _?.length || 0,
    _ = _.useMemo(() => {
      if (!_ || !_ || _ < 0) return _;
      let _ = _(_)
        ? _(
            _,
            (_) => _.BSeenAbove(_, _),
            _,
            !!_.visibility_tracking_drop_duplicates,
          )
        : _;
      return (_.SetFirstPage(_, _, _.slice(0, _)), _);
    }, [_, _, _, _, _, _]);
  return (
    _.useEffect(() => {
      if (!(!_ || !_ || _ < 0))
        return (_.SetFirstPage(_, _, _.slice(0, _)), () => _.Remove(_));
    }, [_, _, _, _, _]),
    _
  );
}
var _ = _(),
  _ = 250;
function _(_) {
  let {
      event: _,
      section: _,
      language: _,
      promotedSaleEvent: _,
      Frame: _ = _,
      nMaxCapsules: _,
    } = _,
    _ = _(),
    _ = _(),
    { nMaxCapsulesPerRow: _, bScreenIsWide: _ } = _(_.section_type),
    _ = _.useContext(_),
    _ = _.useContext(_),
    _ = _(_, _, !0),
    _ = _(_, _, _, _),
    { capsules: _, nHiddenCapsules: _ } = _(_, _, _, void 0, !0),
    _ = _ ? _?.slice(0, _) : _,
    _ = _.useMemo(() => _(_, _?.length), [_, _?.length]),
    _ = _(_, _),
    _ = _(_, _),
    [_, _] = _.useState(0),
    _ = _(_, _),
    _ = _ && !_ && !_ && _(_),
    _ = _ ? _(_, _, _) : void 0;
  if (_(_, _) === `personalized_carousel`) {
    let _ = _(_, _, _);
    if (_ === void 0)
      return (0, _.jsx)(_, {
        capsules_per_row: _,
        swipe_row: _,
      });
    if (_ === null) return null;
  }
  let _;
  if (!_)
    _ = (0, _.jsx)(_, {
      capsules_per_row: _,
      swipe_row: _,
    });
  else {
    let _ = _({
        saleEvent: _,
        section: _,
        capsules: _,
        language: _,
        bInGamepadUI: _,
        nMaxCapsulesPerRow: _,
        bScreenIsWide: _,
        nShowAdditionalRows: _,
        bPaginationPills: _,
        bDropShortLastCarouselPage: _,
      }),
      { content: _, bAdditionalContent: _ } = _(_);
    if (((_ = _), !_ && !_)) return null;
    _ &&
      _ &&
      (_ = (0, _.jsxs)(_.Fragment, {
        children: [
          _,
          (0, _.jsx)(_, {
            section: _,
            nRowsWithNext: _(_, _) + 1,
            nCapsules: _.length,
            rgRowSizes: _,
            onShowMore: () => _(_ + _(_)),
          }),
        ],
      }));
  }
  let { feature: _, depth: _ } = _(_, _, _);
  return (0, _.jsx)(_, {
    feature: _,
    depth: _,
    children: (0, _.jsxs)(_, {
      event: _,
      section: _,
      language: _,
      bInGamepadUI: _,
      placeholderHeight: (_ ? _ : _(_, _?.length ?? 0, _)) + `px`,
      nHiddenCapsules: _,
      personalizedCarousels: _,
      promotedSaleEvent: _,
      children: [
        (0, _.jsx)(_, {
          event: _,
          section: _,
        }),
        (0, _.jsx)(_, {
          capsules: _,
        }),
        _,
      ],
    }),
  });
}
function _(_, _, _) {
  return _[0] === 1
    ? {
        width: `80vw`,
        height: `320px`,
      }
    : _(_, _)[0] === `tall`
      ? `tall_capsule`
      : `capsule`;
}
function _(_, _, _) {
  let _ = 0;
  if (_.length > 0) for (let _ = _; _ > 0; _++) _ -= _[_ % _.length];
  let _ = Math.min(_, _(_, 0));
  return Math.max(1, _) * _;
}
function _(_) {
  let { event: _, section: _ } = _,
    _ = _(_.LANGUAGE),
    _ = _.useMemo(() => _(_), [_]),
    [_] = _(_),
    _ = _({
      queries: _.map((_) => ({
        ..._(_, _),
        enabled: !1,
      })),
    }),
    _ = _(_, !0),
    _ = _.map((_, _) => (_(_) ? _[_].data : _[_].data)),
    _ = _.some((_, _) => (_(_) && _[_].isPending) || _[_].bPending),
    [_] = _.useState(_);
  if (_(_).length <= 1 || _) {
    let _ = _[0] ?? _,
      _ = _[0],
      _ = (0, _.jsx)(_, {
        ..._,
        section: _,
        bPageItems: !_(_),
        promotedSaleEvent: _,
        bPending: _,
        strForcedLayout: null,
        bDrawAtOnce: _,
      }),
      _ = _(_)
        ? (0, _.jsx)(_, {
            section: _,
            children: _,
          })
        : _,
      _ = _
        ? (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              (0, _.jsx)(_, {
                rootMargin: _,
                children: (0, _.jsx)(_, {
                  event: _,
                  rgSlideSections: _,
                  eLanguage: _,
                  strForcedLayout: null,
                  bSideBySide: _(_),
                }),
              }),
            ],
          })
        : _;
    return !_ && _(_, _) !== null
      ? _
      : (0, _.jsx)(_, {
          ..._,
          rgLayouts: [_(_, _, null)],
          strHeading: _([_]),
          children: _,
        });
  }
  let _ = _.flatMap((_, _) => {
    let _ = _[_];
    return _(_, _) === null
      ? [
          {
            slide: _,
            promotedSaleEvent: _,
          },
        ]
      : [];
  });
  if (_.length === 0)
    return (0, _.jsx)(_, {
      ..._,
      section: _[0],
      promotedSaleEvent: _[0],
      bPending: !1,
      strForcedLayout: null,
      bDrawAtOnce: _,
    });
  let _ = _.map(({ slide: _, promotedSaleEvent: _ }, _) =>
      (0, _.jsx)(
        _,
        {
          ..._,
          section: _,
          promotedSaleEvent: _,
          bPending: !1,
          strForcedLayout: null,
          bDrawAtOnce: _,
        },
        _,
      ),
    ),
    _ = _(_);
  return (0, _.jsx)(_, {
    ..._,
    rgLayouts: _.map(({ slide: _, promotedSaleEvent: _ }) => _(_, _, null)),
    strHeading: _(_.map(({ promotedSaleEvent: _ }) => _)),
    children: _
      ? (0, _.jsx)(`div`, {
          className: _(_, _),
          children: _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                section: _[_].slide,
                children: _,
              },
              _,
            ),
          ),
        })
      : (0, _.jsx)(_, {
          event: _,
          section: _,
          rgSlides: _,
        }),
  });
}
function _(_) {
  let _ = _(_)[0];
  return !!_?.event_gid && !!_.clan_account_id;
}
function _(_, _) {
  let _ = _(_)[0];
  return {
    ..._(
      {
        clanAccountID: _?.clan_account_id ?? 0,
        strEventGID: _?.event_gid ?? ``,
        eLanguage: _,
      },
      _,
    ),
    enabled: _(_),
  };
}
function _(_) {
  let {
    event: _,
    rgSlideSections: _,
    eLanguage: _,
    strForcedLayout: _,
    bSideBySide: _,
  } = _;
  (_({
    queries: _.map((_) => _(_, _)),
  }),
    _(_));
  let _ = _(),
    _ = _();
  return (
    _.useEffect(() => {
      let _ = {
        queryClient: _,
        storeItemLoader: _,
      };
      _.forEach((_, _) => {
        let _ = _.capsules ?? [];
        if (_.length && (_(_, _, _), _ === 0 || _)) {
          let _ = _(_(_, void 0, _));
          _(_, _, _, _, _);
        }
      });
    }, [_, _, _, _, _, _]),
    null
  );
}
function _(_) {
  let _ = _[0];
  if (!_?.eCreatorRole || !_.every((_) => !!_?.eCreatorRole)) return;
  let _ = _.logged_in ? `Recommended_` : ``;
  if (_.length > 1) return _(`#Sale_CrossPromoCreator_Heading_${_}Several`);
  let _ = _.strSaleURL
    ? (0, _.jsx)(_, {
        url: _.strSaleURL,
        className: _,
        bFocusable: !1,
        children: _.strName,
      })
    : _.strName;
  return (0, _.jsx)(`div`, {
    children: _(`#Sale_CrossPromoCreator_Heading_${_}${_.eCreatorRole}`, _),
  });
}
function _(_) {
  let { section: _, children: _ } = _,
    _ = _(_)[0]?.comparison_label;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _ &&
        (0, _.jsx)(`div`, {
          className: `P1C9O-r-7FI-`,
          children: _,
        }),
      _,
    ],
  });
}
function _(_) {
  let { section: _, language: _, rgLayouts: _, strHeading: _, children: _ } = _,
    _ = _.useContext(_),
    _ = _(_, _);
  if (_(_) || (!_ && (!_.some(_) || (_ && !_))))
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  let _ = _;
  return (
    _
      ? (_ = _)
      : _ == null &&
        _.logged_in &&
        (_ = _(`#Sale_CrossPromoSale_EventCapsuleHeading_Recommended`)),
    (0, _.jsx)(_, {
      ..._,
      strHeading: _,
      bOneSlide: _.length === 1,
      children: (0, _.jsx)(_, {
        value: !0,
        children: _,
      }),
    })
  );
}
function _(_) {
  let {
      event: _,
      section: _,
      language: _,
      strHeading: _,
      bOneSlide: _,
      children: _,
    } = _,
    _ = _(),
    [_, _] = _.useState(null);
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            section: _,
            event: _,
            language: _,
            promotedSale: null,
            title: _ || _(`#Sale_CrossPromoSale_EventCapsuleHeading`),
          }),
          _ &&
            _ &&
            (0, _.jsx)(_, {
              label: _.strLabel,
              shown: _.bShown,
              button: `X`,
            }),
        ],
      }),
      (0, _.jsx)(_, {
        value: _ ? _ : null,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let {
      section: _,
      language: _,
      promotedSaleEvent: _,
      bPending: _,
      strForcedLayout: _,
      bDrawAtOnce: _ = !1,
      bPageItems: _ = !1,
      ..._
    } = _,
    _ = _(),
    _ = _(_, _, _),
    _ = _(_),
    _ = _ ? 2 : _,
    _ = _(_),
    _ = _.useMemo(
      () => ({
        ..._,
        capsules_per_row_array: [_],
        show_as_carousel: _ ? !0 : _.show_as_carousel,
        carousel_rows: _ ? 1 : _.carousel_rows,
      }),
      [_, _, _],
    );
  if (_)
    return (0, _.jsx)(_, {
      capsules_per_row: _(_, _),
    });
  if (_(_, _) !== null) return null;
  let _ = (0, _.jsx)(_, {
    ..._,
    section: _,
    language: _,
    promotedSaleEvent: _ ?? void 0,
    Frame: _[_],
    nMaxCapsules: _ ? (_ ? 12 : _) : void 0,
  });
  return _
    ? (0, _.jsx)(_, {
        enabled: !1,
        children: _,
      })
    : _;
}
function _(_, _) {
  return {
    ..._(`crosspromotesalepage`, ``),
    sale_page_cross_promo_sales: _,
    use_random_order: !1,
    show_as_carousel: !0,
    sale_page_cross_promo_layout: _,
    capsules_per_row_array: [4],
    carousel_rows: 1,
  };
}
