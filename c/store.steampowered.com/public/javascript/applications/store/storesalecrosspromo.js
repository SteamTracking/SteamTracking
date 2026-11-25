import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _ } from "./chunk~f3699411bf.js";
import { _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _ } from "./chunk~f4c928a27a.js";
import { _ } from "./chunk~710e3cfd2f.js";
import { _, _ } from "./chunk~b8ca037aae.js";
import { _, _, _ } from "./chunk~3720b337f3.js";
import { _ } from "./chunk~379edc388d.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./main.js";
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
var _ = _(_(), 1);
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
var _ = _(),
  _ = _(`event_capsule`),
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
