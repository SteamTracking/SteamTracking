import { _, _, _, _, _ } from "./main.js";
var _ = {
    include_assets: !0,
    include_release: !0,
    include_platforms: !0,
    include_tag_count: 20,
    include_basic_info: !0,
    include_optin_registration_tags: !0,
    include_trailers: !0,
    include_reviews: !0,
    include_screenshots: !0,
    include_supported_languages: !0,
  },
  _ = class {
    m_setAlreadyAdded = new Set();
    Reset() {
      this.m_setAlreadyAdded = new Set();
    }
    BHasAppID(_) {
      return this.m_setAlreadyAdded.has(`a` + _);
    }
    BHasPackageID(_) {
      return this.m_setAlreadyAdded.has(`s` + _);
    }
    BHasBundleID(_) {
      return this.m_setAlreadyAdded.has(`b` + _);
    }
    BHasStoreItemKey(_) {
      return this.m_setAlreadyAdded.has(this.ConvertStoreItemKeyToUniqueKey(_));
    }
    AddStoreItemKey(_) {
      this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(_));
    }
    ConvertStoreItemKeyToUniqueKey(_) {
      switch (_.item_type) {
        default:
        case `app`:
          return `a` + _._;
        case `sub`:
          return `s` + _._;
        case `bundle`:
          return `b` + _._;
      }
    }
  };
function _(_, _, _, _, _, _) {
  let _ = [],
    _ = [],
    _ = [],
    _ = [];
  if (!_ || _.length == 0) return _;
  let _ = [
    _.k_RejectSupportedLanguage,
    _.k_RejectAlreadyDisplayed,
    _.k_RejectNoTrailer,
  ];
  for (let _ of _) {
    let _ = _._,
      _ = _.k_NotRejected;
    switch (_.item_type) {
      case `sub`:
        let _ = _.Get().GetPackage(_);
        if (_?.GetIncludedAppIDs()?.length !== 1) {
          _ = _(_, _, _, !0);
          break;
        }
        _ = _.GetIncludedAppIDs()[0];
      case `app`:
        _ = _(_, _, _, _, !0);
        break;
      case `bundle`:
        _ = _(_, _, _, !0);
    }
    if (
      (_ == _.k_NotRejected
        ? ((_.rejected = _.k_NotRejected),
          _.push({
            ..._,
            priority: 1,
          }))
        : _.includes(_)
          ? ((_.rejected = _.k_NotRejected), _.push(_))
          : ((_.rejected = _),
            _ == _.k_RejectIgnoredGame ? _.push(_) : _.push(_)),
      _.length > _)
    )
      break;
  }
  return (
    _.length < _ &&
      (_(_, _, _, 2),
      _.length < _ && _.enforce_minimum && (_(_, _, _, 3), _(_, _, _, 4))),
    _
  );
}
function _(_, _, _, _) {
  for (let _ = 0; _.length < _ && _ < _.length; ++_)
    _.push({
      ..._[_],
      priority: _,
    });
}
function _(_, _) {
  let _ = _.Get();
  if (
    _.only_current_platform &&
    _.BHasPlatformPreferenceSet() &&
    !(
      (_.GetPlatforms()?.windows && _.BIsPreferredPlatform(`win`)) ||
      (_.GetPlatforms()?.mac && _.BIsPreferredPlatform(`mac`)) ||
      (_.GetPlatforms()?.steamos_linux && _.BIsPreferredPlatform(`linux`))
    )
  )
    return _.k_RejectWrongPlatform;
  if (!_.prepurchase && _.BIsComingSoon()) return _.k_RejectNoComingSoon;
  let _ = _.GetPlatforms();
  return !_.virtual_reality && _ && _.vr_support && _.vr_support.vrhmd_only
    ? _.k_RejectNoVR
    : _.GetAllCreatorClanIDs()?.some((_) => _.BIsIgnoringCurator(_))
      ? _.k_RejectCreatorClan
      : _.k_NotRejected;
}
function _(_, _) {
  if (_.localized) {
    let _ = _(_.LANGUAGE);
    if (!_.GetAllLanguagesWithSomeSupport()?.includes(_))
      return _.k_RejectSupportedLanguage;
  }
  return _.k_NotRejected;
}
function _(_, _, _, _, _) {
  let _ = _.Get().GetApp(_);
  if (!_) return _.k_RejectNotLoaded;
  let _ = _(_, _);
  if (_ != _.k_NotRejected) return _;
  let _ = _.Get();
  if (_.BIsGameIgnored(_)) return _.k_RejectIgnoredGame;
  if (_.BExcludeTagIDs(_.GetTagIDs())) return _.k_RejectIgnoreGameTags;
  if (_.BExcludesContentDescriptor(_.GetContentDescriptorIDs()))
    return _.k_RejectIgnoreContentDescriptors;
  if (!_.early_access && _.BIsEarlyAccess()) return _.k_RejectEarlyAccess;
  let _ = _.GetAppType();
  if (!_.software && _ == 6) return _.k_RejectSoftware;
  if (_.games_already_in_library && _.BIsGameOwned(_))
    return _.k_RejectInLibrary;
  if (_.games_not_in_library && !_.BIsGameOwned(_))
    return _.k_RejectNotInLibrary;
  if (!_.video && [7, 8, 9].includes(_)) return _.k_RejectVideo;
  if (_.has_discount) {
    let _ = _.GetBestPurchaseOption();
    if (!_ || !_.discount_pct) return _.k_RejectNoDiscount;
  }
  return _ != `adultonly` &&
    _.no_ao_content &&
    (_.HasContentDescriptorID(3) || _.HasContentDescriptorID(4))
    ? _.k_RejectAO
    : _ == 1 &&
        _.games_already_in_library &&
        _.BIsGameOwned(_.GetParentAppID() || 0)
      ? _.k_RejectInLibrary
      : _
        ? (_ == 1 && _.BHasAppID(_.GetParentAppID() || 0)) || _.BHasAppID(_)
          ? _.k_RejectAlreadyDisplayed
          : _.has_trailer && !_.BHasTrailers(!1)
            ? _.k_RejectNoTrailer
            : _(_, _)
        : _.k_NotRejected;
}
function _(_, _) {
  let _ = _.Get(),
    _ = !1;
  for (let _ of _) {
    if (_.BIsGameIgnored(_)) return _.k_RejectIgnoredGame;
    _.BIsGameOwned(_) && (_ = !0);
  }
  return _.games_not_in_library && _
    ? _.k_RejectInLibrary
    : _.games_not_in_library && !_
      ? _.k_RejectNotInLibrary
      : _.k_NotRejected;
}
function _(_, _, _, _) {
  let _ = _.Get().GetPackage(_);
  if (!_) return _.k_RejectNotLoaded;
  let _ = _(_, _);
  if (_ != _.k_NotRejected) return _;
  let _ = _(_.GetIncludedAppIDs(), _);
  if (_ != _.k_NotRejected) return _;
  let _ = _.Get();
  return _.games_already_in_library && _.BOwnsPackage(_)
    ? _.k_RejectInLibrary
    : _.BIsPackageIgnored(_)
      ? _.k_RejectIgnoredGame
      : _
        ? _.BHasPackageID(_)
          ? _.k_RejectAlreadyDisplayed
          : _(_, _)
        : _.k_NotRejected;
}
function _(_, _, _, _) {
  let _ = _.Get().GetBundle(_);
  if (!_) return _.k_RejectNotLoaded;
  let _ = _(_, _);
  if (_ != _.k_NotRejected) return _;
  let _ = _(_.GetIncludedAppIDs(), _);
  return _ == _.k_NotRejected
    ? _
      ? _.BHasBundleID(_)
        ? _.k_RejectAlreadyDisplayed
        : _(_, _)
      : _.k_NotRejected
    : _;
}
export { _, _, _ };
