import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _ } from "./chunk~6b8ddcaac8.js";
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
} from "./chunk~3720b337f3.js";
import { _, _ } from "./chunk~f57d770d64.js";
import { _, _, _, _ } from "./chunk~cbbb6ae37c.js";
import { _, _ } from "./chunk~9871ee5432.js";
import { _ } from "./chunk~b980924b6a.js";
import { _, _ } from "./chunk~d43c81a658.js";
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
} from "./chunk~b8ca037aae.js";
import "./chunk~21cdc464a1.js";
import { _ } from "./chunk~710e3cfd2f.js";
import { _ } from "./chunk~331382b23f.js";
import { _, _ } from "./chunk~379edc388d.js";
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
async function _(_, _ = 1e3) {
  return await new Promise((_, _) => {
    let _ = new Image();
    ((_.src = _),
      (_.onload = () => _(`success`)),
      (_.onerror = () => _(`error`)),
      _ > 0 && window.setTimeout(() => _(`timeout`), _));
  });
}
var _ = _(_(), 1),
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
    _ = _.useMemo(
      () => (_ ? _.GetSaleSectionIncludingFooterSections().indexOf(_) : -1),
      [_, _],
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
  let { event: _, section: _, language: _, strHeading: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          section: _,
          event: _,
          language: _,
          promotedSale: null,
          title: _ || _(`#Sale_CrossPromoSale_EventCapsuleHeading`),
        }),
      }),
      _,
    ],
  });
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
var _ = `saleaction/storeitemsalecrosspromoitems`;
function _(_) {
  let { item: _, sale: _, rgExcludeAppIDs: _ } = _,
    _ = new URLSearchParams();
  return (
    `appid` in _
      ? _.set(`appid`, String(_.appid))
      : `packageid` in _
        ? _.set(`packageid`, String(_.packageid))
        : `bundleid` in _ && _.set(`bundleid`, String(_.bundleid)),
    _.set(`clan_account_id`, String(_.clanAccountID)),
    _.set(`event_gid`, _.strEventGID),
    _.length && _.set(`exclude_appids`, _.join(`,`)),
    _.toString()
  );
}
async function _(_) {
  let _ = `${_.STORE_BASE_URL}${_}?${_(_)}`,
    _ = await fetch(_, {
      credentials: `include`,
    });
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  if (_?.success !== 1) throw Error(`${_} answered EResult ${_?.success}`);
  return _.rgItems;
}
function _(_) {
  return [`StoreItemSaleCrossPromo`, _(_)];
}
function _(_, _) {
  return [`StoreItemSaleCrossPromoItems`, _(_), _.strEventGID];
}
function _(_) {
  let { data: _ } = _({
    queryKey: _(_),
    queryFn: _,
    staleTime: 1 / 0,
  });
  return _;
}
function _(_, _, _, _) {
  return _({
    queryKey: _(_, _),
    queryFn: () =>
      _({
        item: _,
        sale: _,
        rgExcludeAppIDs: _.rgExcludeAppIDs,
      }),
    enabled: _,
    staleTime: 1 / 0,
    retry: 1,
  });
}
function _() {
  let _ = _();
  return _.useCallback((_, _, _) => _(_, _, _, _), [_]);
}
function _(_, _, _, _) {
  for (let { rgItems: _, ..._ } of _) _ && _.setQueryData(_(_, _), _);
  let _ = {
    rgSales: _.map(({ clanAccountID: _, strEventGID: _ }) => ({
      clanAccountID: _,
      strEventGID: _,
    })),
    rgExcludeAppIDs: _,
  };
  _.setQueryData(_(_), _);
}
var _ = _(`event_capsule`),
  _ = `250px`;
function _(_, _, _, _) {
  return _.has(_) || _.has((_ + _ - 1) % _) || _.has(_);
}
function _(_) {
  let { item: _ } = _,
    _ = _(_),
    { data: _ } = _(_),
    _ = _?.rgSales.length ?? 0,
    [_, _] = _.useState(!1),
    _ = _({
      onEnter: () => {
        _(!0);
      },
    }),
    [_, _] = _.useState(() => new Set([0])),
    _ = _.useRef(_);
  _.current = _;
  let _ = _.useRef(_);
  _.current = _;
  let _ = _.useCallback((_) => {
      let _ = _.current?.rgSales[_];
      (`${_}${_?.strEventGID}${_?.clanAccountID}`,
        _.current,
        _((_) => (_.has(_) ? _ : new Set([..._, _]))));
    }, []),
    [_, _] = _.useState(() => new Set()),
    _ = _.useRef(_);
  _.current = _;
  let _ = _.useRef(_);
  _.current = _;
  let _ = _.useCallback((_, _) => {
      let _ = _.current?.rgSales.length ?? 0;
      if (!_) return;
      let _ = (_) => _(_, _, _.current, _.current),
        _ = _;
      if ((_(_) && (_ = (_ + (_ === `next` ? 1 : _ - 1)) % _), _(_))) return;
      `${_}${_}${_}${_.current?.rgSales[_]?.strEventGID}`;
      let _ = new Set([..._.current, _]);
      ((_.current = _), _(_));
    }, []),
    _ = _.useMemo(() => _?.rgSales[0] && _(_.rgSales[0], []), [_]);
  if (!_ || !_ || !_) return null;
  let _ = _.rgSales.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          item: _,
          crossPromo: _,
          sale: _,
          bShown: _.has(_),
          bLoad: _(_, _, _, _),
          bPreloadImages: _,
          bRecordImpression: _,
        },
        _.strEventGID,
      ),
    ),
    _ = _?.name
      ? _(`#Sale_CrossPromoSale_EventCapsuleHeading_StoreItem`, _.name)
      : void 0;
  return (0, _.jsx)(`div`, {
    ref: _,
    children: (0, _.jsx)(_, {
      enabled: !_,
      children: (0, _.jsx)(_, {
        event: _.event,
        section: _.section,
        language: _(_.LANGUAGE),
        strHeading: _,
        children:
          _ === 1
            ? _[0]
            : (0, _.jsx)(_, {
                event: _.event,
                section: _.section,
                rgSlides: _,
                onSlide: _,
                onNavIntent: _,
              }),
      }),
    }),
  });
}
function _(_) {
  let {
      item: _,
      crossPromo: _,
      sale: _,
      bShown: _,
      bLoad: _,
      bPreloadImages: _,
      bRecordImpression: _,
    } = _,
    _ = _(_.LANGUAGE),
    _ = _({
      ..._(
        {
          clanAccountID: _.clanAccountID,
          strEventGID: _.strEventGID,
          eLanguage: _,
        },
        _,
      ),
      enabled: _,
    }),
    _ = _(_, _, _, _),
    _ = _.data,
    _ = _.data,
    _ = _();
  _.useEffect(() => {
    _ &&
      _ &&
      _ &&
      (`${_.strEventGID}`, _.MarkEventShown(_.strEventGID, _.clanAccountID, 3));
  }, [_, _, _, _, _]);
  let { event: _, section: _ } = _.useMemo(() => _(_, _ ?? []), [_, _]),
    _ = _(),
    _ = _();
  _.useEffect(() => {
    _ &&
      _?.length &&
      _(
        {
          queryClient: _,
          storeItemLoader: _,
        },
        _,
        _(_),
      );
  }, [_, _, _, _, _]);
  let _ = _.useRef(!1);
  return (
    _.useEffect(() => {
      _ &&
        _ &&
        !_ &&
        _ &&
        _?.length &&
        !_.current &&
        ((_.current = !0),
        `${_.strEventGID}`,
        _.strCapsuleURL && _(_.strCapsuleURL, 0),
        _(
          {
            queryClient: _,
            storeItemLoader: _,
          },
          _,
          _,
          _(_),
          _,
        ));
    }, [_, _, _, _, _, _, _, _, _, _]),
    !_ || !_ || !_?.length
      ? (0, _.jsx)(_, {
          event: _,
          section: _,
        })
      : (0, _.jsx)(_, {
          event: _,
          section: _,
          language: _,
          promotedSaleEvent: _,
          Frame: _,
          nMaxCapsules: _,
        })
  );
}
function _(_) {
  let { event: _, section: _ } = _,
    _ = _();
  return (0, _.jsx)(_, {
    event: _,
    section: _,
    language: _(_.LANGUAGE),
    bInGamepadUI: _,
    placeholderHeight: _,
    children: (0, _.jsx)(_, {}),
  });
}
function _() {
  return (0, _.jsx)(_, {
    capsules_per_row: [_],
  });
}
function _(_, _) {
  let _ = _(_),
    _ = _(_.clanAccountID, 1, `crosspromote`, Math.floor(Date.now() / 1e3)),
    _ = _(
      [
        {
          clan_account_id: _.clanAccountID,
          event_gid: _.strEventGID,
          capsules: _,
        },
      ],
      `event_capsule`,
    ),
    _ = {
      ..._(_)[0],
      capsules_per_row_array: [_],
      show_as_carousel: !0,
      carousel_rows: 1,
    };
  return (
    (_.jsondata.sale_sections = [_]),
    {
      event: _,
      section: _,
    }
  );
}
function _(_) {
  return _.flatMap((_) => {
    let _ = _(_);
    return _ ? [_] : [];
  });
}
var _ = `_7J8FxbBVGEM-`;
function _(_) {
  let { item: _, rgSales: _, rgExcludeAppIDs: _ } = _,
    [_, _] = _.useState(!1),
    _ = _();
  return (
    _.useEffect(() => {
      (_(_, _, _), _(!0));
    }, [_, _, _, _]),
    _
      ? (0, _.jsx)(_, {
          feature: `sale-crosspromo`,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              item: _,
            }),
          }),
        })
      : null
  );
}
export { _ as default };
