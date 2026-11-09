import { _, _ } from "./libraries.js";
import { _ } from "./storetypes.js";
import { _, _ } from "./partnerevent.js";
import { _ } from "./storedisplayutils.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
function _(_) {
  return [`StoreBrowsePriceStops`, _];
}
function _(_, _) {
  let { country: _ } = _;
  return {
    queryKey: _(_),
    queryFn: async () => _(_, _),
    staleTime: 864e5,
  };
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_country_code(_);
  let _ = await _.GetPriceStops(_, _);
  if (!_.BSuccess()) throw `Error loading price stops: ${_.GetErrorMessage()}`;
  return _.Body().toObject().price_stops || [];
}
function _(_) {
  return _?.length
    ? [
        {
          price: 0,
          label: _(`#FacetedBrowse_Price_Free`),
        },
        ..._.map((_) => ({
          price: Number(_.amount_in_cents ?? 0) / 100,
          label: _(`#FacetedBrowse_Price_Under`, _.formatted_amount ?? ``),
        })),
        {
          price: void 0,
          label: _(`#FacetedBrowse_Price_Any`),
        },
      ]
    : [];
}
function _() {
  let _ = _(),
    _ = _(),
    { data: _ } = _({
      ..._(_, _),
      select: _,
    });
  return _ ?? [];
}
function _(_, _) {
  return _(_.getQueryData(_(_)));
}
function _(_, _, _) {
  let _ = _.name;
  if (_?.length > 0 && _[0]?.startsWith(`#tagid_`)) {
    let _ = parseInt(_[0].substring(7));
    if (_ > 0) return _ && _[_];
  }
  return _((_.GetWithFallback(_, _) || ``).trim());
}
function _(_) {
  return String(_.type) + _._;
}
function _(_, _) {
  return (
    _.jsondata.item_source_type != null &&
    _.jsondata.item_source_type !== _.k_ETaggedItems
  );
}
function _(_) {
  for (let _ of _.facetValues)
    if (_.filter != null) {
      for (let _ of _.filter.clauses)
        for (let _ of _.or_tags) if (_.startsWith(`[Opt]`)) return !0;
    }
  return !1;
}
function _(_) {
  _(!0, `Unexpected code running in SSR Server: ` + _);
}
var _ = class _ {
  m_HomeView = void 0;
  BHasHomeView() {
    return !!this.m_HomeView;
  }
  GetHomeView() {
    return this.m_HomeView?.home;
  }
  static s_globalSingletonStore;
  static Get() {
    return (
      (_.s_globalSingletonStore ||=
        (_(`CHomeViewStore.s_globalSingletonStore`), new _())),
      _.s_globalSingletonStore
    );
  }
  constructor() {
    let _ = _(`home_view_setting`, `application_config`);
    this.ValidateHomeViewData(_) && this.SetHomeViewSetting(_);
    let _ = _(`home_view_setting_override`, `application_config`);
    this.ValidateHomeViewDataOverride(_) && this.SetHomeViewSettingOverride(_);
  }
  ValidateHomeViewData(_) {
    let _ = _;
    return _ && typeof _.home == `object` && typeof _.main_cluster == `object`;
  }
  SetHomeViewSetting(_) {
    this.m_HomeView = _;
  }
  ValidateHomeViewDataOverride(_) {
    let _ = _;
    return (
      _ &&
      (!_.all || typeof _.all == `object`) &&
      (!_.maincap || typeof _.maincap == `object`)
    );
  }
  SetHomeViewSettingOverride(_) {
    this.m_HomeView
      ? (this.m_HomeView.home = {
          ...this.m_HomeView.home,
          ..._?.all,
          ..._?.maincap,
        })
      : (this.m_HomeView = {
          home: {
            ..._?.all,
            ..._?.maincap,
          },
        });
  }
};
function _(_) {
  return _.Get().BIsStoreItemMissing(_._, _(_.type));
}
function _(_, _, _) {
  let _ = [];
  return (
    _?.forEach((_) =>
      _.push({
        _: _,
        type: `game`,
      }),
    ),
    _?.forEach((_) =>
      _.push({
        _: _,
        type: `sub`,
      }),
    ),
    _?.forEach((_) =>
      _.push({
        _: _,
        type: `bundle`,
      }),
    ),
    _
  );
}
function _(_) {
  return (
    (_.Get().GetStoreItem(_._, _(_.type))?.GetBestPurchaseOption()
      ?.discount_pct ?? 0) > 0
  );
}
function _(_) {
  if (!_.Get().GetHomeView()?.localized) return !0;
  let _ = _.Get().GetStoreItem(_._, _(_.type));
  return (
    !_ || _.Get().BIsAnyLanguageEnabled(_.GetAllLanguagesWithSomeSupport())
  );
}
async function _(_, _, _) {
  if (!_ || _.length == 0) return [];
  let _ = _.filter((_) => _(_.type)).map((_) => _._),
    _ = _.filter((_) => _.type === `sub`).map((_) => _._),
    _ = _.filter((_) => _.type === `bundle`).map((_) => _._);
  {
    let _ = _.filter((_) => !_.Get().BHasApp(_, _)),
      _ = _.filter((_) => !_.Get().BHasApp(_, _)),
      _ = _.filter((_) => !_.Get().BHasApp(_, _));
    (_.length > 0 || _.length > 0 || _.length > 0) &&
      (await Promise.all([
        _.Get().QueueMultipleAppRequests(_, _),
        _.Get().QueueMultiplePackageRequests(_, _),
        _.Get().QueueMultipleBundleRequests(_, _),
      ]));
  }
  let _ = new Set();
  _?.forEach((_) => {
    _.Get()
      .GetBundle(_)
      ?.GetIncludedAppIDs()
      .forEach((_) => _.add(_));
  }),
    _?.forEach((_) => {
      _.Get()
        .GetPackage(_)
        ?.GetIncludedAppIDs()
        .forEach((_) => _.add(_));
    });
  let _ = Array.from(_).filter((_) => !_.Get().BHasApp(_, _));
  if (
    (_.length > 0 && (await _.Get().QueueMultipleAppRequests(_, _)),
    _.forEach((_) => _.add(_)),
    _)
  ) {
    let _ = Array.from(_)
      .map((_) => {
        let _ = _.Get().GetApp(_)?.GetParentAppID();
        return _ ? (_.add(_), _) : null;
      })
      .filter((_) => _ !== null)
      .filter((_) => !_.Get().BHasApp(_, _));
    _.length > 0 && (await _.Get().QueueMultipleAppRequests(_, _));
  }
  return Array.from(_).filter((_) => {
    let _ = _.Get().GetApp(_);
    return _ && !_.GetParentAppID();
  });
}
var _ = {
  include_tag_count: 20,
  include_basic_info: !0,
  include_supported_languages: !0,
};
function _(_, _ = !1) {
  if (!_) return !0;
  let _ = _.Get();
  if (
    (_(_.BIsLoaded(), `Dynamic Store not loaded`),
    !_ && _.GetStoreItemType() == 0)
  ) {
    let _ = _.GetParentAppID();
    if (_.BIsGameIgnored(_.GetAppID()) || (_ !== void 0 && _.BIsGameIgnored(_)))
      return !0;
  }
  if (
    _.BExcludesContentDescriptor(_.GetContentDescriptorIDs()) ||
    _.BExcludeTagIDs(_.GetTagIDs()) ||
    _.GetAllCreatorClanIDs().some((_) => _.BIsIgnoringCurator(_))
  )
    return !0;
  if (_.Get().GetHomeView()?.localized) {
    let _ = _.GetAllLanguagesWithSomeSupport();
    if (
      _.length > 0 &&
      !_.BHasSomeLanguageSupport(0) &&
      !_.BIsAnyLanguageEnabled(_)
    )
      return !0;
  }
  return !1;
}
async function _(_, _, _, _) {
  let _ = 0,
    _ = 0,
    _ = [];
  await _(_, _, _);
  for (let _ of _) {
    let _ = _.Get().GetStoreItem(_._, _(_.type));
    if (!_) {
      _++;
      continue;
    }
    let _ = _.GetIncludedAppIDs()
      .map((_) => _.Get().GetApp(_))
      .filter((_) => !!_);
    if ((_.push(_), _)) {
      let _ = new Set(_.map((_) => _.GetParentAppID()).filter((_) => !!_)),
        _ = Array.from(_)
          .map((_) => _.Get().GetApp(_))
          .filter((_) => !!_);
      _ && _.push(..._);
    }
    _.some((_) => (_ || _)(_))
      ? (_++, _ && (_.Get().BIsStoreItemOwned(_) || _.push(_)))
      : _.push(_);
  }
  return _;
}
async function _(_, _, _, _, _, _, _) {
  let _ = await _(
      _,
      _,
      _,
      _
        ? (_) =>
            !_ ||
            _.Get().BExcludesContentDescriptor(_.GetContentDescriptorIDs()) ||
            _.Get().BExcludeTagIDs(_.GetTagIDs())
        : _,
    ),
    _ = [];
  for (let _ of _) {
    let _ = _.Get().GetStoreItem(_._, _(_.type));
    if (!_) continue;
    let _ = _?.GetIncludedAppIDsOrSelf(),
      _ = !1;
    _ && (_ ||= _.every((_) => _.Get().BIsGameOwned(_))),
      _ && (_ ||= _.every((_) => _.Get().BIsGameWishlisted(_))),
      _ && (_ ||= _.every((_) => _.Get().BIsGameIgnored(_))),
      _ ? _ && _.push(_) : _.push(_);
  }
  return _;
}
function _() {
  let _ = _.Get();
  if (_.BIsLoaded())
    return {
      bSignedIn: !!_.logged_in,
      ePrimaryLanguage: _.GetPrimaryLanguage(),
      setSecondaryLanguages: _.GetSecondaryLanguages(),
      setExcludedContentDescriptors: new Set(_.ExcludedContentDescriptor),
    };
}
function _() {
  return _(_, _.COUNTRY);
}
function _(_) {
  return !(
    !_?.BHasHideIgnoredItemsFacetValue() ||
    _.BIsUserPreferenceEnabled(_.k_EHideIgnoredItems)
  );
}
async function _(_, _, _, _) {
  let _ = _.BHasHideIgnoredItemsFacetValue(),
    _ = _.BIsUserPreferenceEnabled(_.k_EHideOwnedItems),
    _ = _.BIsUserPreferenceEnabled(_.k_EHideWishlistedItems),
    _ = _.BIsUserPreferenceEnabled(_.k_EHideIgnoredItems),
    _ = [],
    _ = await _(_, _, _, _, _, _, _);
  return (
    _(() => {
      _.SetCapsulesRemovedByUserPreferenceFilters(new Set(_.map(_)));
    }),
    _?.push(..._),
    _
  );
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
