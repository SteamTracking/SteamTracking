import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _ } from "./libraries.js";
import { _, _, _, _, _, _ } from "./vodquery.js";
import { _ } from "./throbber.js";
import { _ } from "./apppartnereventspage.js";
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
} from "./main.js";
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
  (_?.forEach((_) => {
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
    }));
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
    (_ && (_ ||= _.every((_) => _.Get().BIsGameOwned(_))),
      _ && (_ ||= _.every((_) => _.Get().BIsGameWishlisted(_))),
      _ && (_ ||= _.every((_) => _.Get().BIsGameIgnored(_))),
      _ ? _ && _.push(_) : _.push(_));
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
var _ = _(_()),
  _ = class _ extends _ {
    async DeleteOldAnnouncement(_, _) {
      let _ = new URLSearchParams();
      _.append(`sessionid`, _());
      let _ =
          _.COMMUNITY_BASE_URL +
          `/gid/` +
          _.ConvertTo64BitString() +
          `/announcements/ajaxdeleteannouncement/` +
          _,
        _ = await _.default.post(_, _);
      if (_.data.success != 1) throw _.data;
      return (this.RemoveGIDFromList(_, _ + _), _.data);
    }
    static sm_Instance;
    static sm_SummaryInstance;
    static Get() {
      return (
        _.sm_Instance || ((_.sm_Instance = new _()), _.sm_Instance.Init()),
        _.sm_Instance
      );
    }
    static GetSummaryStore() {
      return (
        _.sm_SummaryInstance ||
          ((_.sm_SummaryInstance = new _(!0)), _.sm_SummaryInstance.Init()),
        _.sm_SummaryInstance
      );
    }
  },
  _ = _(_()),
  _ = _(),
  _ = (_) => {
    let { bShowOnlyInitialEvent: _ } = _,
      _ = _(),
      _ = _();
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        ..._,
        bShowOnlyInitialEvent: _ || _,
        tracker: _,
      }),
    });
  },
  _ = class extends _.Component {
    state = {
      bLoading: !1,
      eventModel: this.props.eventModel,
    };
    m_refParent = _.createRef();
    m_cancelSignal = _.default.CancelToken.source();
    componentDidMount() {
      this.state.eventModel ||
        this.setState(
          {
            bLoading: !0,
          },
          this.LoadEvent,
        );
      let _ = this.GetBodyElement();
      _ && this.props.bPrimaryPageFeature && _.classList.add(_);
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventInfiniteScrollModal unmounting`);
      let _ = this.GetBodyElement();
      _ && this.props.bPrimaryPageFeature && _.classList.remove(_);
    }
    GetBodyElement() {
      return this.m_refParent.current
        ? this.m_refParent.current.closest(`body`)
        : null;
    }
    async LoadEvent() {
      let {
        appid: _,
        clanSteamID: _,
        announcementGID: _,
        partnerEventStore: _,
        additionalParams: _,
      } = this.props;
      _.LoadAdjacentPartnerEventsByAnnouncement(
        _,
        _,
        _,
        0,
        3,
        _,
        this.m_cancelSignal,
      )
        .then((_) => {
          _.length > 0
            ? this.setState(
                {
                  bLoading: !1,
                  eventModel: _[0],
                },
                this.HandleReadEvent,
              )
            : (this.props.onEventNotFound && this.props.onEventNotFound(),
              this.setState({
                bLoading: !1,
              }));
        })
        .catch((_) => {
          let _ = _(_);
          (console.error(`EventInfiniteScrollModal failed ` + _.strErrorMsg, _),
            this.setState({
              bLoading: !1,
            }));
        });
    }
    async HandleReadEvent() {
      let { eventModel: _ } = this.state,
        { trackingLocation: _, tracker: _ } = this.props;
      _ && _.BIsPartnerEvent() && (_.RecordEventRead(_, _ ?? 0), _.Flush());
    }
    render() {
      let { bShowOnlyInitialEvent: _ } = this.props,
        { bLoading: _, eventModel: _ } = this.state;
      if (_)
        return (0, _.jsx)(_, {
          active: !0,
          children: (0, _.jsx)(`div`, {
            className: _,
            style: {
              height: `400px`,
            },
            children: (0, _.jsx)(_, {}),
          }),
        });
      let {
          closeModal: _,
          appid: _,
          clanSteamID: _,
          className: _,
          partnerEventStore: _,
          showAppHeader: _,
          bPrimaryPageFeature: _,
          additionalParams: _,
          eventClassName: _,
        } = this.props,
        _;
      _.IN_CLIENT &&
        _?.appid &&
        (_.Get().HintLoad(),
        _.Get().BOwnsApp(_.appid) &&
          (_ = (_) => _(_, `steam://nav/games/details/` + _.appid)));
      let _ = (0, _.jsx)(_, {
        children: (_) =>
          (0, _.jsx)(_, {
            initialEvent: _,
            appid: _,
            clanSteamID: _,
            partnerEventStore: _,
            emoticonStore: _,
            closeModal: _ ? void 0 : _,
            showAppHeader: _,
            bShowOnlyInitialEvent: _,
            additionalParams: _,
            eventClassName: _,
            onAppIconClick: _,
          }),
      });
      return _
        ? _
        : (0, _.jsx)(_, {
            active: !0,
            children: (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
          });
    }
  };
_ = _([_], _);
