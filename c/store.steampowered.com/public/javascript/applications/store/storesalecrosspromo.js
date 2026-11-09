import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./clanimagemodels.js";
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
} from "./linkwidget.js";
import { _, _ } from "./storelink.js";
import "./partnerevent.js";
import { _, _ } from "./salestoreitemutils.js";
import { _ } from "./saleghostsections.js";
import { _ } from "./carouselarrows.js";
import { _ } from "./partnereventeditorcontext.js";
import { _ } from "./crosspromotesalelayouts.module.js";
import { _, _ } from "./crosspromotesalelayouts.js";
import { _, _ } from "./fakesalehelper.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1);
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
function _(_, _, _, _) {
  let _ = _(),
    _ = _.BUsesContentHubForItemSource(),
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
        let _ = _[_];
        return !_(_, _, _) || ((!_?.already_owned || _) && _++, !1);
      }),
      nHiddenCapsules: _,
    };
  }, [_, _, _, _, _, _, _]);
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
var _ = _(),
  _ = 250;
function _(_) {
  let {
      event: _,
      section: _,
      language: _,
      promotedSale: _,
      promotedSaleEvent: _,
      Frame: _ = _,
      nMaxCapsules: _,
    } = _,
    _ = _(),
    _ = _(),
    { nMaxCapsulesPerRow: _, bScreenIsWide: _ } = _(_.section_type),
    _ = _(_, _, !0),
    { capsules: _, nHiddenCapsules: _ } = _(_, _, void 0, !0),
    _ = _ ? _?.slice(0, _) : _,
    _ = _.useMemo(() => _(_, _?.length), [_, _?.length]),
    _ = _(_, _),
    _ = _(_, _),
    [_, _] = _.useState(0),
    _ = _(_, _);
  if (_(_, _) === `personalized_carousel`) {
    let _ = _(_, _, _);
    if (_ === void 0)
      return (0, _.jsx)(_, {
        capsules_per_row: _,
      });
    if (_ === null) return null;
  }
  let _;
  if (!_)
    _ = (0, _.jsx)(_, {
      capsules_per_row: _,
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
      placeholderHeight: _(_, _?.length ?? 0, _) + `px`,
      nHiddenCapsules: _,
      personalizedCarousels: _,
      promotedSale: _,
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
async function _(_) {
  let _ = `${_.STORE_BASE_URL}${_}?${_(_)}`,
    _ = await fetch(_);
  if (!_._) throw Error(`${_} answered ${_.status}`);
  let _ = await _.json();
  if (_?.success !== 1) throw Error(`${_} answered EResult ${_?.success}`);
  return _.summary ?? null;
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
  return !_?.clan_accountid || !_.clan_event_gid
    ? null
    : {
        clanAccountID: _.clan_accountid,
        strEventGID: _.clan_event_gid,
        strName: _.event_name ?? ``,
        rtEndTime: _.rtime32_end_time || void 0,
        strSummary: _.summary || void 0,
        strCapsuleURL: _(_),
        strSaleURL: _.store_path ? _.STORE_BASE_URL + _.store_path : void 0,
      };
}
function _(_) {
  let _ = _.capsule_image?.image;
  if (_ && _.clan_accountid)
    return _.capsule_image?.from_body
      ? _.ReplacementTokenToClanImageURL(_)
      : _.startsWith(`http`)
        ? _
        : _.GenerateURLFromHashAndExt(_.clan_accountid, _);
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
var _ = _(`event_capsule`) ?? 3,
  _ = `250px`;
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
      `${_}${_?.strEventGID}${_?.clanAccountID}`,
        _.current,
        _((_) => (_.has(_) ? _ : new Set([..._, _])));
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
          bLoad: _.has(_) || _.has((_ + _ - 1) % _),
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
  let { event: _, section: _ } = _.useMemo(() => _(_, _ ?? []), [_, _]);
  return !_ || !_ || !_?.length
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
      });
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
  let _ = _.flatMap((_) => {
      let _ = _(_);
      return _ ? [_] : [];
    }),
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
var _ = `_7J8FxbBVGEM-`;
function _(_) {
  let { item: _, rgSales: _, rgExcludeAppIDs: _ } = _,
    [_, _] = _.useState(!1),
    _ = _();
  return (
    _.useEffect(() => {
      _(_, _, _), _(!0);
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
