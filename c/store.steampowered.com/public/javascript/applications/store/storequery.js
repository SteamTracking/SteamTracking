import { _ } from "./chunk~f025431ab0.js";
import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = _(),
  _ = _.createContext({}),
  _ = () => _.useContext(_);
function _(_) {
  let { defaultOptions: _, children: _ } = _,
    _ = _.useMemo(
      () => ({
        defaultOptions: _ || {},
      }),
      [_],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
var _ = `StoreQueryStore`;
function _(_, _, _, _) {
  let _ = _(),
    _ = _();
  _ || _(!1, `useStoreQuery called outside of a <StoreQueryRoot>`);
  let _ = _.defaultOptions,
    _ = _.useMemo(() => {
      let _ = [];
      return (
        _?.content_descriptors_excluded
          ? (_ = _.content_descriptors_excluded)
          : _?.content_descriptors_excluded &&
            (_ = _.content_descriptors_excluded),
        {
          ..._,
          filters: {
            content_descriptors_excluded: _,
            ..._.filters,
          },
        }
      );
    }, [_, _, _]),
    _;
  _?.override_country_code === void 0
    ? _?.override_country_code !== void 0 && (_ = _.override_country_code)
    : (_ = _.override_country_code);
  let _ = {
    staleTime: 36e5,
  };
  return (
    _?.reactQuery &&
      (_ = {
        ..._,
        ..._.reactQuery,
      }),
    _({
      queryKey: [_, _, _ ?? {}, _ ?? {}],
      queryFn: () => _(_, _, _, _ ?? {}, _),
      ..._,
    })
  );
}
async function _(_, _, _, _, _) {
  let _ = _.Init(_);
  (_(_),
    _ && _(_, _),
    _ && _.Body().set_override_country_code(_),
    _.Body().set_query(_.fromObject(_)),
    _.Body().set_query_name(_));
  let _ = await _.Query(_, _);
  if (_.GetEResult() != 1)
    throw `Error executing StoreQuery "${_}", EResult: ${_.GetEResult()}`;
  return new _(_, _);
}
var _ = class {
  m_Items = void 0;
  m_rgItemIDs = void 0;
  m_metadata = void 0;
  constructor(_, _) {
    this.ReadResults(_, _);
  }
  GetItems() {
    return this.m_Items;
  }
  GetItemIDs() {
    return this.m_rgItemIDs;
  }
  GetMetadata() {
    return this.m_metadata;
  }
  ReadResults(_, _) {
    this.m_Items ||=
      (_(
        _.Body().metadata().start() == 0,
        `Empty item list - expected to start at 0`,
      ),
      []);
    let _ = _.Body().ids() || [];
    if (
      ((this.m_rgItemIDs = _.map((_) => _.toObject())), _.Body().store_items())
    )
      for (let _ of _.Body().store_items()) {
        let _ = _.Get().ReadItem(_, _);
        _ && this.m_Items.push(_);
      }
    this.m_metadata = _.Body().metadata().toObject();
  }
};
