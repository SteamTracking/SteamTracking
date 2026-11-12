import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _, _, _, _, _, _ } from "./chunk~25a6634263.js";
import { _ } from "./chunk~1fa4b8f2ff.js";
import { _ } from "./chunk~44f252525d.js";
import { _, _ } from "./chunk~fa5480ab25.js";
import { _ } from "./chunk~971d501580.js";
import { _ } from "./chunk~a58194c5d9.js";
import { _ } from "./chunk~0c46413ed4.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~c55709d290.js";
import { _ } from "./chunk~e867464c75.js";
import { _, _ } from "./chunk~38a44beba7.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `-x0pInEBhX4-`,
  _ = `KYFjrdxYAEg-`,
  _ = _();
function _(_) {
  let {
    value: _,
    onValueChange: _,
    options: _,
    getOptionLabel: _,
    disabled: _,
    ..._
  } = _;
  return (0, _.jsx)(_.Root, {
    value: _,
    onValueChange: _,
    disabled: _,
    ..._,
    children: _.map((_) => {
      let _ = _ ? _(_) : _;
      return (0, _.jsx)(
        _.Option,
        {
          value: _,
          children: _,
        },
        _,
      );
    }),
  });
}
function _(_) {
  let { value: _, onValueChange: _, disabled: _, render: _, ..._ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useCallback)((_, _) => {
      if (!_.current) return;
      let _ = [..._.current.querySelectorAll(`[data-radio-id]`)];
      if (_.length !== 0)
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          if (_.dataset.radioId && _.dataset.radioId === _) {
            let _ = _[(_ + _ + _.length) % _.length];
            (_.click(), _.focus());
          }
        }
    }, []),
    _ = (0, _.useCallback)((_) => _(_, 1), [_]),
    _ = (0, _.useCallback)((_) => _(_, -1), [_]),
    _ = (0, _.useMemo)(
      () => ({
        value: _,
        onValueChange: _,
        bDisabled: _,
        onSelectNext: _,
        onSelectPrev: _,
      }),
      [_, _, _, _, _],
    ),
    _ = {
      role: `radiogroup`,
      "aria-disabled": _,
      ref: _,
      ..._,
    },
    _ = (0, _.jsx)(_, {
      direction: `column`,
      gap: `2`,
      role: `radiogroup`,
      "aria-disabled": _,
      ..._,
    }),
    _ = _(_, _, _);
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { value: _, ref: _, children: _, render: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useId)();
  if (!_)
    return (
      console.error(
        `<RadioGroup.Option> must be rendered within a <RadioGroup.Root>`,
      ),
      null
    );
  let {
      value: _,
      onValueChange: _,
      bDisabled: _,
      onSelectNext: _,
      onSelectPrev: _,
    } = _,
    _ = _ === _,
    _ = () => {
      _ || _ || _(_);
    };
  return _(
    _,
    (0, _.jsx)(_, {
      bDisabled: _,
    }),
    {
      role: `radio`,
      "aria-checked": _,
      "aria-disabled": _,
      "data-radio-id": _,
      onClick: _,
      onKeyDown: (_) => {
        if (!_)
          switch (_.key) {
            case ` `:
              (_(), _.preventDefault(), _.stopPropagation());
              break;
            case `ArrowRight`:
            case `ArrowDown`:
              (_(_), _.preventDefault(), _.stopPropagation());
              break;
            case `ArrowLeft`:
            case `ArrowUp`:
              (_(_), _.preventDefault(), _.stopPropagation());
          }
      },
      tabIndex: _ || _ === null ? 0 : -1,
      ref: _,
      children: _,
    },
    {
      bSelected: _,
      bDisabled: _,
    },
  );
}
function _(_) {
  let { children: _, className: _, bDisabled: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    cursor: `default`,
    gap: `2`,
    className: (0, _.default)(_, _ && `EynJrG05Wqc-`),
    ..._,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
    ],
  });
}
var _ = Object.assign(_, {
    Root: _,
    Option: _,
  }),
  _ = (0, _.createContext)(null);
function _(_) {
  return 1;
}
function _(_) {
  switch (_) {
    case 1:
      return `usd_cis`;
    case 2:
      return `usd_sasia`;
    case 3:
      return `usd_latam`;
    case 4:
      return `usd_mena`;
    default:
      return `usd_invalid`;
  }
}
function _(_) {
  switch (_) {
    case 1:
      return `CIS`;
    case 2:
      return `SASIA`;
    case 3:
      return `LATAM`;
    case 4:
      return `MENA`;
    default:
      return `Invalid Region`;
  }
}
function _(_) {
  switch (_) {
    case `CIS`:
      return 1;
    case `SASIA`:
      return 2;
    case `LATAM`:
      return 3;
    case `MENA`:
      return 4;
    default:
      return 0;
  }
}
function _(_) {
  switch (_) {
    case 1:
      return `The Commonwealth of Independent States`;
    case 2:
      return `South Asia`;
    case 3:
      return `Latin America`;
    case 4:
      return `Middle East and North Africa`;
    default:
      return `Invalid Region`;
  }
}
function _(_) {
  switch (_?.toLowerCase()) {
    case `usd_cis`:
      return 1;
    case `usd_sasia`:
      return 2;
    case `usd_latam`:
      return 3;
    case `usd_mena`:
      return 4;
    default:
      return 0;
  }
}
var _ = _(_()),
  _ = class _ {
    m_rgPackageIDs;
    m_rgPackageData;
    m_mapPackageData;
    m_rgVisiblePackageIDs = [];
    m_visiblePackageIDsCallbackList = new _();
    static s_Singleton;
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    constructor() {}
    Init() {
      let _ = _(`package_data`, `application_config`);
      _
        ? ((this.m_rgPackageIDs = _.map((_) => _.packageid)),
          (this.m_rgPackageData = _),
          (this.m_mapPackageData = new Map(_.map((_) => [_.packageid, _]))))
        : ((this.m_rgPackageIDs = _(`package_ids`, `application_config`)),
          (this.m_mapPackageData = new Map()));
    }
    UpdatePackageNameSearchState(_) {
      let _ = _.getState().columnFilters.find(
          (_) => _._ === `packageName`,
        )?.value,
        _ = new URL(window.location.href);
      _ != decodeURIComponent(_.searchParams.get(`pn`)) &&
        (_
          ? _.searchParams.set(`pn`, encodeURIComponent(_))
          : _.searchParams.delete(`pn`),
        window.history.replaceState({}, ``, _.toString()));
    }
    UpdateVisiblePackageList(_) {
      let _ = _.getVisibleRows().filter((_) => !_.getCanExpand());
      ((this.m_rgVisiblePackageIDs = []),
        _.forEach((_) => this.m_rgVisiblePackageIDs.push(_.original.packageID)),
        this.m_visiblePackageIDsCallbackList.Dispatch(
          this.m_rgVisiblePackageIDs,
        ),
        this.UpdatePackageNameSearchState(_));
    }
    SetVisiblePackageList(_) {
      ((this.m_rgVisiblePackageIDs = [..._]),
        this.m_visiblePackageIDsCallbackList.Dispatch(
          this.m_rgVisiblePackageIDs,
        ));
    }
  };
function _() {
  return _.Get().m_rgPackageIDs;
}
function _() {
  return _.Get().m_rgPackageIDs;
}
function _() {
  return _.Get().m_rgPackageData;
}
function _(_) {
  let _ = _.Get().m_mapPackageData.get(_);
  return _ ? _.package_name : _.toString();
}
function _(_) {
  let _ = _.Get().m_mapPackageData.get(_);
  return !_ || !!_.released;
}
function _(_) {
  let _ = _.Get().m_mapPackageData.get(_);
  return _?.visible_on_store === void 0 || !!_.visible_on_store;
}
function _() {
  return _.useCallback((_) => _.Get().UpdateVisiblePackageList(_), []);
}
function _(_) {
  _.Get().SetVisiblePackageList(_);
}
function _() {
  let [_, _] = _.useState(_.Get().m_rgVisiblePackageIDs);
  return (_(_.Get().m_visiblePackageIDsCallbackList, _), _);
}
function _() {
  return _.useMemo(() => _(`publisherid`, `application_config`), []);
}
function _(_, _, _, _, _) {
  if (!_)
    return {
      nSuggestedPriceInCents: null,
      nGuidelinesLevel: null,
    };
  let _ = null;
  for (let _ of _.GetUSDPricePointsInCents())
    if (_ >= _) {
      _ = _;
      break;
    }
  if ((_ == 1 && !(_ && _ < 5)) || !_)
    return {
      nSuggestedPriceInCents: null,
      nGuidelinesLevel: null,
    };
  let _ = _.GetRecommendPrice(_, _, _, _),
    _ = _.GetRecommendPrice(_, 1, void 0, _);
  if (
    (_(_, `Missing requested currency guide for  ${_}/${_}/${_}/${_}`),
    _(_, `Missing usd guide for  ${_}/${_}/${_}`),
    !_ || !_)
  )
    return {
      nSuggestedPriceInCents: null,
      nGuidelinesLevel: null,
    };
  let _ = _.price,
    _ = _.price;
  if (_ != _) {
    let _ = _ / _;
    ((_ *= _), (_ = Math.ceil(_ * _)));
  }
  return {
    nSuggestedPriceInCents: _,
    nGuidelinesLevel: _,
  };
}
var _ = class _ {
  m_mapPackagePrice = new Map();
  m_mapPackageCountryOverridePrice = new Map();
  m_setRecurringSubscriptions = new Set();
  m_mapPriceProposals = new Map();
  m_mapLocalPackagePriceOverrides = new Map();
  m_mapPriceGridCellCallbackList = new Map();
  m_mapPackageOverridesCallbackList = new Map();
  m_allPriceOverridesCallbackList = new _();
  m_mapOverridesPerPriceKey = new Map();
  m_mapCurrencyData = new Map();
  m_mapPriceKeyDescriptions = new Map();
  m_rgKnownPriceKeys;
  m_strDisplayPriceKey = `USD`;
  m_displayPriceKeyCallbackList = new _();
  static s_Singleton;
  static Get() {
    return (
      _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
      _.s_Singleton
    );
  }
  constructor() {
    _(this);
  }
  Init() {
    let _ = _(`base_prices`, `application_config`);
    if (_ && this.BIsPricePayloadValid(_))
      for (let _ in _) {
        let _ = _[_],
          _ = parseInt(_),
          _ = new Map();
        this.m_mapPackagePrice.set(_, _);
        for (let _ in _)
          _(_)
            ? (this.m_mapPackageCountryOverridePrice.has(_) ||
                this.m_mapPackageCountryOverridePrice.set(_, new Map()),
              this.m_mapPackageCountryOverridePrice
                .get(_)
                .set(_.toUpperCase(), _[_]))
            : _.set(_, _[_]);
      }
    let _ = _(`recurring_subs`, `application_config`);
    if (_ && Array.isArray(_))
      for (let _ of _) this.m_setRecurringSubscriptions.add(_);
    let _ = _(`pending_proposals`, `application_config`);
    if (_ && this.BIsPendingPricePayloadValid(_))
      for (let _ in _) {
        let _ = _[_],
          _ = parseInt(_);
        this.m_mapPriceProposals.set(_, _);
      }
    let _ = _(`valid_price_keys`, `application_config`);
    _ &&
      this.BIsPriceKeyValid(_) &&
      (this.m_rgKnownPriceKeys = _.sort((_, _) => _(_(_), _(_))));
    let _ = _(`currency_data`, `application_config`);
    if (_ && this.BIsCurrencyPayloadValid(_))
      for (let _ in _) {
        let _ = _[_];
        this.m_mapCurrencyData.set(_, _);
      }
    let _ = _(`currency_descriptions`, `application_config`);
    if (_ && this.BIsCurrencyDescriptionPayloadValid(_))
      for (let _ in _) {
        let _ = _[_];
        this.m_mapPriceKeyDescriptions.set(_, _);
      }
  }
  BIsPricePayloadValid(_) {
    let _ = _;
    if (!_ || typeof _ != `object`) return !1;
    for (let _ in _) {
      if (isNaN(parseInt(_))) return !1;
      let _ = _[_];
      if (!_ || typeof _ != `object`) return !1;
      for (let _ in _)
        if (typeof _ != `string` || typeof _[_] != `number`) return !1;
    }
    return !0;
  }
  BIsPendingPricePayloadValid(_) {
    let _ = _;
    if (!_ || typeof _ != `object`) return !1;
    for (let _ in _) {
      if (isNaN(parseInt(_))) return !1;
      let _ = _[_];
      if (
        !_ ||
        typeof _ != `object` ||
        _.packageID !== parseInt(_) ||
        typeof _.prices != `object`
      )
        return !1;
    }
    return !0;
  }
  BIsCurrencyPayloadValid(_) {
    let _ = _;
    if (!_ || typeof _ != `object`) return !1;
    for (let _ in _) {
      let _ = _[_];
      if (!_ || typeof _ != `object` || _.strCode != _) return !1;
    }
    return !0;
  }
  BIsPriceKeyValid(_) {
    let _ = _;
    if (!_ || !Array.isArray(_)) return !1;
    for (let _ in _) if (typeof _ != `string`) return !1;
    return !0;
  }
  BIsCurrencyDescriptionPayloadValid(_) {
    let _ = _;
    if (!_ || typeof _ != `object`) return !1;
    for (let _ in _) {
      let _ = _[_];
      if (
        !_ ||
        typeof _ != `object` ||
        _.bRequired === void 0 ||
        _.strDescription === void 0
      )
        return !1;
    }
    return !0;
  }
  BPriceKeyRequired(_) {
    return this.m_mapPriceKeyDescriptions.get(_)?.bRequired ?? !1;
  }
  GetMinimumBasePrice(_) {
    return this.m_mapPriceKeyDescriptions.get(_)?.nLowestBase || 0;
  }
  GetMinimumDiscountPrice(_) {
    return this.m_mapPriceKeyDescriptions.get(_)?.nLowestDiscount || 0;
  }
  GetPublishedCountryOverrides(_) {
    return this.m_mapPackageCountryOverridePrice.has(_)
      ? Array.from(this.m_mapPackageCountryOverridePrice.get(_).keys())
      : [];
  }
  GetPublishedPriceCountryOverride(_, _) {
    return this.m_mapPackageCountryOverridePrice.get(_).get(_);
  }
  GetPublishedPrice(_, _) {
    return _(_)
      ? this.m_mapPackageCountryOverridePrice.get(_)?.get(_)
      : this.m_mapPackagePrice.get(_)?.get(_);
  }
  GetProposedPrice(_, _) {
    return this.m_mapPriceProposals.get(_)?.prices[_];
  }
  GetSavedPrice(_, _) {
    return this.GetProposedPrice(_, _) ?? this.GetPublishedPrice(_, _);
  }
  GetPrice(_, _) {
    return this.GetLocalOverridePrice(_, _) ?? this.GetSavedPrice(_, _);
  }
  GetLocalOverridePrice(_, _) {
    return this.m_mapLocalPackagePriceOverrides.get(_)?.get(_);
  }
  GetPriceGridCellCallbackList(_, _) {
    if (!_ || !_) return null;
    this.m_mapPriceGridCellCallbackList.has(_) ||
      this.m_mapPriceGridCellCallbackList.set(_, new Map());
    let _ = this.m_mapPriceGridCellCallbackList.get(_);
    return (_.has(_) || _.set(_, new _()), _.get(_));
  }
  GetPackageOverridesCallbackList(_) {
    if (!_) return null;
    let _ = this.m_mapPackageOverridesCallbackList.get(_);
    return (
      _ || ((_ = new _()), this.m_mapPackageOverridesCallbackList.set(_, _)), _
    );
  }
  OverridePrice(_, _, _) {
    _ != this.GetPrice(_, _) &&
      (this.m_mapLocalPackagePriceOverrides.has(_) ||
        this.m_mapLocalPackagePriceOverrides.set(_, new Map()),
      _ == this.GetSavedPrice(_, _)
        ? this.m_mapLocalPackagePriceOverrides.get(_).delete(_)
        : this.m_mapLocalPackagePriceOverrides.get(_).set(_, _),
      this.GetPriceGridCellCallbackList(_, _).Dispatch(_),
      this.GetPackageOverridesCallbackList(_).Dispatch(),
      this.DispatchPriceOverridesCallbacks());
  }
  OverridePricesForPackage(_, _, _, _) {
    _(
      _.length == _.length,
      `price list size doesn't match ${_.length} != ${_.length}`,
    );
    for (let _ = 0; _ < _.length; ++_) {
      let _ = _[_],
        _ = _[_];
      (this.m_mapLocalPackagePriceOverrides.has(_) ||
        this.m_mapLocalPackagePriceOverrides.set(_, new Map()),
        _ == this.GetSavedPrice(_, _)
          ? this.m_mapLocalPackagePriceOverrides.get(_).delete(_)
          : this.m_mapLocalPackagePriceOverrides.get(_).set(_, _),
        this.GetPriceGridCellCallbackList(_, _).Dispatch(_));
    }
    (this.GetPackageOverridesCallbackList(_).Dispatch(),
      _ && this.DispatchPriceOverridesCallbacks());
  }
  DispatchPriceOverridesCallbacks() {
    (this.m_allPriceOverridesCallbackList.Dispatch(
      this.GetAllLocalPriceOverrides(),
    ),
      this.UpdateOverridesPerPriceKey());
  }
  BHasLocalPriceOverrides(_) {
    return this.m_mapLocalPackagePriceOverrides.get(_)?.size > 0;
  }
  GetAllLocalPriceOverrides() {
    let _ = [];
    return (
      this.m_mapLocalPackagePriceOverrides.forEach((_, _) =>
        _.forEach((_, _) => {
          let _ = this.GetSavedPrice(_, _);
          _.push({
            packageID: _,
            strPriceKey: _,
            nPriceInCents: _,
            nOldPriceInCents: _,
          });
        }),
      ),
      _.sort(_),
      _
    );
  }
  BHasLocalPriceOverride(_, _) {
    let _ = this.m_mapLocalPackagePriceOverrides.get(_);
    return _ ? _.has(_) : !1;
  }
  UpdateOverridesPerPriceKey() {
    (this.m_mapOverridesPerPriceKey.clear(),
      this.m_mapLocalPackagePriceOverrides.forEach((_, _) => {
        _.forEach((_, _) => {
          let _ = this.m_mapOverridesPerPriceKey.get(_);
          ((_ ||= 0), _++, this.m_mapOverridesPerPriceKey.set(_, _));
        });
      }));
  }
  DiscardAllLocalPriceOverrides() {
    let _ = this.GetAllLocalPriceOverrides();
    this.m_mapLocalPackagePriceOverrides.clear();
    let _ = new Set();
    for (let _ of _) {
      let { packageID: _, strPriceKey: _ } = _;
      (this.GetPriceGridCellCallbackList(_, _).Dispatch(this.GetPrice(_, _)),
        _.add(_));
    }
    for (let _ of _) this.GetPackageOverridesCallbackList(_).Dispatch();
    this.DispatchPriceOverridesCallbacks();
  }
  DiscardAllLocalPriceOverridesForKey(_) {
    let _ = !1,
      _ = new Set();
    this.m_mapLocalPackagePriceOverrides.forEach((_, _) => {
      this.m_mapPriceKeyDescriptions.has(_) &&
        ((_ = !0),
        this.m_mapLocalPackagePriceOverrides.get(_).delete(_),
        this.GetPriceGridCellCallbackList(_, _).Dispatch(this.GetPrice(_, _)),
        _.add(_));
    });
    for (let _ of _) this.GetPackageOverridesCallbackList(_).Dispatch();
    _ && this.DispatchPriceOverridesCallbacks();
  }
  DiscardLocalPriceOverridesForPackage(_) {
    (this.m_mapLocalPackagePriceOverrides.get(_)?.forEach((_, _) => {
      this.GetPriceGridCellCallbackList(_, _).Dispatch(
        this.GetSavedPrice(_, _),
      );
    }),
      this.m_mapLocalPackagePriceOverrides.delete(_),
      this.GetPackageOverridesCallbackList(_).Dispatch(),
      this.DispatchPriceOverridesCallbacks());
  }
  BuildNewPricingProposal(_, _) {
    let _ = {
      packageID: _,
      rtSubmitted: Math.floor(Date.now() / 1e3),
      submitterID: _.accountid,
      prices: {},
      eState: 1,
      bPartnerWillPublish: _,
    };
    for (let _ of this.m_rgKnownPriceKeys) _.prices[_] = this.GetPrice(_, _);
    let _ = this.m_mapPackageCountryOverridePrice.get(_);
    if (_) for (let _ of _.keys()) _.prices[_] = this.GetPrice(_, _);
    return _;
  }
  async SubmitProposalToServer(_, _, _, _) {
    let _ = this.BuildNewPricingProposal(_, _),
      _ = JSON.stringify(_.prices),
      _ = _(`publisherid`, `application_config`),
      _ = _.PARTNER_BASE_URL + `pricing/ajaxsubmitproposal/` + _ + `/` + _,
      _ = new FormData();
    (_.append(`sessionid`, _()),
      _.append(`partner_will_publish`, _ ? `1` : `0`),
      _.append(`cancel_unapplied`, _ ? `1` : `0`),
      _.append(`prices`, _));
    let _ = null;
    try {
      let _ = await _.default.post(_, _, {
        withCredentials: !0,
        cancelToken: _?.token,
      });
      if (_?.status == 200 && _.data?.success == 1 && _.data.eState != 0) {
        if (_.data.eState == 3) {
          this.m_mapPriceProposals.delete(_);
          for (let _ of this.m_rgKnownPriceKeys)
            (this.m_mapPackagePrice.has(_) ||
              this.m_mapPackagePrice.set(_, new Map()),
              this.m_mapPackagePrice.get(_).set(_, _.prices[_]));
        } else
          ((_.eState = _.data.eState),
            (_.proposalKey = _.data.proposalKey),
            this.m_mapPriceProposals.set(_, _));
        return (this.DiscardLocalPriceOverridesForPackage(_), _.data);
      }
    } catch (_) {
      _ = _;
    }
    let _ = _(_),
      _ = _?.response?.data ?? {
        success: 2,
      };
    return _.unappliedProposal
      ? ((_.newProposal = _), _)
      : (console.error(
          `CPackagePricingStore.SubmitProposalToServer: failed`,
          _.strErrorMsg,
          _,
        ),
        _);
  }
  async PublishApprovedProposal(_, _, _ = 0) {
    let _ = this.m_mapPriceProposals.get(_);
    if (_?.eState != 4 || !_?.proposalKey)
      return {
        success: 8,
      };
    let _ = _(`publisherid`, `application_config`),
      _ = _.PARTNER_BASE_URL + `pricing/ajaxpublishproposal/` + _ + `/` + _,
      _ = new FormData();
    (_.append(`sessionid`, _()), _.append(`proposal_key`, _.proposalKey));
    let _ = null;
    try {
      let _ = await _.default.post(_, _, {
        withCredentials: !0,
        cancelToken: _?.token,
        timeout: _,
      });
      if (_?.status == 200 && _.data?.success == 1) {
        this.m_mapPriceProposals.delete(_);
        for (let _ of this.m_rgKnownPriceKeys)
          (this.m_mapPackagePrice.get(_).set(_, _.prices[_]),
            this.GetPriceGridCellCallbackList(_, _).Dispatch(
              this.GetSavedPrice(_, _),
            ));
        return (
          this.GetPackageOverridesCallbackList(_).Dispatch(),
          this.DispatchPriceOverridesCallbacks(),
          _.data
        );
      }
    } catch (_) {
      _ = _;
    }
    let _ = _(_);
    return (
      console.error(
        `CPackagePricingStore.PublishApprovedProposal: failed`,
        _.strErrorMsg,
        _,
      ),
      _?.response?.data ?? {
        success: 2,
      }
    );
  }
  async CancelProposal(_, _) {
    let _ = this.m_mapPriceProposals.get(_);
    if (!_?.proposalKey)
      return {
        success: 8,
      };
    let _ = _(`publisherid`, `application_config`),
      _ = _.PARTNER_BASE_URL + `pricing/ajaxcancelproposal/` + _ + `/` + _,
      _ = new FormData();
    (_.append(`sessionid`, _()), _.append(`proposal_key`, _.proposalKey));
    let _ = null;
    try {
      let _ = await _.default.post(_, _, {
        withCredentials: !0,
        cancelToken: _?.token,
      });
      if (_?.status == 200 && _.data?.success == 1) {
        this.m_mapPriceProposals.delete(_);
        for (let _ of this.m_rgKnownPriceKeys)
          this.GetPriceGridCellCallbackList(_, _).Dispatch(
            this.GetSavedPrice(_, _),
          );
        return (
          this.GetPackageOverridesCallbackList(_).Dispatch(),
          this.DispatchPriceOverridesCallbacks(),
          _.data
        );
      }
    } catch (_) {
      _ = _;
    }
    let _ = _(_);
    return (
      console.error(
        `CPackagePricingStore.CancelProposal: failed`,
        _.strErrorMsg,
        _,
      ),
      _?.response?.data ?? {
        success: 2,
      }
    );
  }
  GetLocalOverrideCountForPriceKey(_) {
    return this.m_mapOverridesPerPriceKey.get(_) ?? 0;
  }
  BAnyPackagePriceBelowMin(_) {
    if (!_) return !1;
    for (let _ of this.m_rgKnownPriceKeys) {
      let _ = this.GetPrice(_, _);
      if (_ === void 0) continue;
      let { nMinPriceInCents: _, nMaxPriceInCents: _ } = _(_, _);
      if (_ < _) return !0;
    }
    return !1;
  }
};
(_([_], _.prototype, `m_mapOverridesPerPriceKey`, void 0),
  _([_], _.prototype, `OverridePrice`, null),
  _([_], _.prototype, `UpdateOverridesPerPriceKey`, null));
function _(_, _) {
  if (_.strPriceKey == _.strPriceKey) {
    let _ = _(_.packageID),
      _ = _(_.packageID);
    return _(_, _);
  }
  return _(_(_.strPriceKey), _(_.strPriceKey));
}
function _(_) {
  let _ = _.split(`_`)[0];
  return _.Get().m_mapCurrencyData.get(_);
}
function _(_, _) {
  if (_ === void 0) return [``, ``, ``];
  let _ = _(_) ?? _(`USD`),
    _ = ``;
  if (typeof _ == `number`) {
    let _ = _.toString();
    _.length < 3 && (_ = (_.length == 1 ? `0` : ``) + `0` + _);
    let _ = _.length - 2;
    for (let _ = 0; _ < _; _++) {
      let _ = _.charAt(_);
      ((_ += _),
        _ < _ - 1 &&
          (_ - _ - 1) % 3 == 0 &&
          _ != `-` &&
          (_ += _.strThousandsSeparator));
    }
    _.bWholeUnitsOnly ||
      ((_ += _.strDecimalSymbol), (_ += _.substr(_.length - 2)));
  }
  return _.bSymbolIsPrefix
    ? [_.strSymbol + _.strSymbolAndNumberSeparator, _, ``]
    : [``, _, _.strSymbolAndNumberSeparator + _.strSymbol];
}
var _ = new Map([
  [`USD`, `@1`],
  [`CNY`, `@2`],
  [`EUR`, `@3`],
  [`GBP`, `@4`],
  [`CAD`, `@5`],
  [`AUD`, `@6`],
  [`JPY`, `@7`],
  [`KRW`, `@8`],
  [`RUB`, `@9`],
]);
function _(_) {
  return _.has(_) ? _.get(_) : _.indexOf(`_`) > 0 ? `ZZZ` + _ : _;
}
function _(_, _) {
  return _.Get().GetPrice(_, _);
}
function _(_) {
  return _.Get().GetPublishedCountryOverrides(_);
}
function _(_, _) {
  return _.Get().GetPublishedPriceCountryOverride(_, _);
}
function _(_, _) {
  return _.Get().GetPublishedPrice(_, _);
}
function _(_, _) {
  return _.Get().GetProposedPrice(_, _);
}
function _(_, _) {
  return _.Get().GetLocalOverridePrice(_, _);
}
function _(_) {
  let _ = _.Get().m_strDisplayPriceKey;
  return _(_.Get().GetPrice(_, _), _).join(``);
}
function _() {
  let [_, _] = _.useState(_.Get().m_strDisplayPriceKey);
  return (_(_.Get().m_displayPriceKeyCallbackList, _), _);
}
function _(_, _) {
  let [_, _] = _.useState(_.Get().GetPrice(_, _));
  return (
    _(_.Get().GetPriceGridCellCallbackList(_, _), _),
    _.useEffect(() => _(_.Get().GetPrice(_, _)), [_, _]),
    _
  );
}
function _(_) {
  return _(_, _());
}
function _(_, _) {
  return _(_(_, _), _).join(``);
}
function _(_, _, _) {
  return (
    _ -
    ((_(_) ?? _(`USD`))?.bWholeUnitsOnly
      ? Math.ceil((_ * _) / 1e4) * 100
      : Math.ceil((_ * _) / 100))
  );
}
function _(_, _) {
  let _ = _(),
    _ = _(_, _);
  if (typeof _ == `number`) return _(_(_, _, _), _).join(``);
}
function _(_, _, _) {
  let _ = 0;
  for (let _ of _) {
    let _ = [],
      _ = [],
      _ = _.Get().GetPrice(_, `USD`);
    if (!(!_ || _ <= 0)) {
      for (let _ of _.Get().m_rgKnownPriceKeys) {
        if (_ == `USD`) continue;
        let { nSuggestedPriceInCents: _, nGuidelinesLevel: _ } = _(
          _,
          _,
          _.Get().GetPrice(_, `USD`),
          _(_),
          _(_),
        );
        _ !== null && _.Get().GetPrice(_, _) != _ && (_.push(_), _.push(_));
      }
      _.length > 0 && (_.Get().OverridePricesForPackage(_, _, _), (_ += 1));
    }
  }
  _ > 0 && _.Get().DispatchPriceOverridesCallbacks();
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _.useCallback(() => _(_, _, _), [_, _, _]);
}
function _(_, _) {
  let _ = _();
  _(_.Get().GetPriceGridCellCallbackList(_, _), _);
  let _ = _.Get().GetPrice(_, _),
    _ = _(),
    _ = _();
  _(_.Get().GetPriceGridCellCallbackList(_, `USD`), _);
  let { nSuggestedPriceInCents: _, nGuidelinesLevel: _ } = _(
      _,
      _,
      _.Get().GetPrice(_, `USD`),
      _(_),
      _(_),
    ),
    _ = _.useCallback((_) => _.Get().OverridePrice(_, _, _), [_, _]),
    _ = _.Get().GetPublishedPrice(_, _),
    _ = _.Get().GetProposedPrice(_, _),
    { nMinPriceInCents: _, nMaxPriceInCents: _ } = _(_, _),
    _ = _(_, _, _);
  return _.useMemo(
    () => ({
      nPriceInCents: _,
      nProposedPriceInCents: _,
      nPublishedPriceInCents: _,
      nMinPriceInCents: _,
      nMaxPriceInCents: _,
      nMaxDiscountPercentage: _,
      nSuggestedPriceInCents: _,
      fnSetPrice: _,
    }),
    [_, _, _, _, _, _, _, _],
  );
}
var _ = 90,
  _ = 10;
function _(_, _, _, _) {
  let _ = _.Get().GetMinimumDiscountPrice(_),
    _ = _ ? Math.floor((100 * (_ - _)) / _) : _,
    _ = Math.min(_, Math.floor((100 * (_ - 50)) / _));
  return _
    ? _ < _ || _ < _
      ? null
      : Math.max(Math.min(_, _), 0)
    : _ < _
      ? _
      : null;
}
function _(_) {
  let [_, _] = _.useState(() => _.Get().BAnyPackagePriceBelowMin(_)),
    _ = _.useCallback(() => {
      let _ = _.Get().BAnyPackagePriceBelowMin(_);
      _(_);
    }, [_, _]);
  return (_(_.Get().GetPackageOverridesCallbackList(_), _), _);
}
function _(_) {
  return _.Get().BAnyPackagePriceBelowMin(_);
}
function _(_, _) {
  let _ = _.Get();
  return {
    nMinPriceInCents: _.GetMinimumBasePrice(_),
    nMaxPriceInCents: _.m_setRecurringSubscriptions.has(_)
      ? _.GetPublishedPrice(_, _)
      : null,
  };
}
function _() {
  return _.useCallback((_, _, _) => {
    let _ = _.Get().GetPrice(_, _);
    return (
      _.Get().OverridePrice(_, _, _),
      _ == _
        ? null
        : {
            packageID: _,
            strPriceKey: _,
            nPriceInCents: _,
            nOldPriceInCents: _,
          }
    );
  }, []);
}
function _(_) {
  let _ = _();
  return (
    _(_.Get().GetPriceGridCellCallbackList(_, `USD`), _),
    _.Get().m_mapPriceProposals.get(_)
  );
}
function _() {
  return Array.from(_.Get().m_mapPriceProposals.values());
}
function _(_) {
  return _.Get().m_mapPriceProposals.get(_);
}
function _(_) {
  let _ = !1;
  for (let _ of _.Get().m_rgKnownPriceKeys) {
    let _ = _.Get().GetPublishedPrice(_, _);
    _ ||= _ != 0 && _ !== void 0;
  }
  return _;
}
function _(_) {
  let _ = _(_),
    _ = [];
  for (let _ of _.Get().m_rgKnownPriceKeys) {
    let _ = _.prices[_],
      _ = _.Get().GetPublishedPrice(_, _);
    _ != _ &&
      _.push({
        packageID: _,
        strPriceKey: _,
        nPriceInCents: _,
        nOldPriceInCents: _,
      });
  }
  return _;
}
function _() {
  return _.Get().m_rgKnownPriceKeys;
}
function _(_) {
  let _ = _.Get().m_mapPriceKeyDescriptions.get(_);
  return _ ? _.strDescription : ``;
}
function _(_) {
  return _.useCallback(() => {
    _.Get().DiscardAllLocalPriceOverridesForKey(_);
  }, [_]);
}
function _(_) {
  return _.useCallback(() => {
    _.Get().DiscardLocalPriceOverridesForPackage(_);
  }, [_]);
}
function _(_) {
  return _.useCallback(() => {
    _.Get().CancelProposal(_);
  }, [_]);
}
function _() {
  let [_, _] = _.useState(_.Get().m_strDisplayPriceKey);
  return {
    strPriceKey: _,
    rgSupportedPriceKeys: _.Get().m_rgKnownPriceKeys,
    fnSetPriceKey: _.useCallback((_) => {
      (_(_),
        (_.Get().m_strDisplayPriceKey = _),
        _.Get().m_displayPriceKeyCallbackList.Dispatch(_));
    }, []),
  };
}
function _(_) {
  let _ = _();
  return (
    _(_.Get().m_allPriceOverridesCallbackList, _),
    _.Get().BHasLocalPriceOverrides(_)
  );
}
function _(_) {
  return _.Get().BHasLocalPriceOverrides(_);
}
function _() {
  let [_, _] = _.useState(() => _.Get().GetAllLocalPriceOverrides());
  return (_(_.Get().m_allPriceOverridesCallbackList, _), _);
}
function _(_) {
  return _(() => _.Get().GetLocalOverrideCountForPriceKey(_));
}
function _() {
  return _.useCallback(
    () => _.Get().GetAllLocalPriceOverrides()?.length > 0,
    [],
  );
}
function _() {
  return _.useCallback(() => _.Get().DiscardAllLocalPriceOverrides(), []);
}
function _() {
  return _.Get().OverridePrice;
}
function _() {
  return _.useCallback(
    (_, _, _, _) => _.Get().SubmitProposalToServer(_, _, _, _),
    [],
  );
}
function _() {
  return _.useCallback(
    (_, _) => _.Get().PublishApprovedProposal(_, _, 6e4),
    [],
  );
}
function _(_) {
  let _ = [],
    _ = _.Get().m_rgKnownPriceKeys;
  for (let _ of _) {
    if (_(_)) continue;
    let _ = !1;
    for (let _ of _)
      if (_.Get().BPriceKeyRequired(_) && !_.Get().GetPrice(_, _)) {
        _ = !0;
        break;
      }
    _ && _.push(_);
  }
  return _;
}
function _(_, _) {
  let _ = _(`#PackageGrid_MultipleBaseGamesFoundForPackage`),
    _ = _(`#PackageGrid_NoBaseGameFoundForPackage`),
    _ = _.original.appName,
    _ = _.original.appName,
    _ = _ == _,
    _ = _ == _,
    _ = !_ && !_,
    _ = _ == _,
    _ = _ == _,
    _ = !_ && !_;
  if (_ && _) return _.localeCompare(_);
  if (!_ && !_) {
    if (_ == _ && _ == _) {
      let _ = _.original.packageName,
        _ = _.original.packageName;
      return _ && _
        ? _.localeCompare(_)
        : !_ && !_
          ? _.original.packageID - _.original.packageID
          : _
            ? -1
            : 1;
    }
    return _ ? -1 : 1;
  }
  return _ ? -1 : 1;
}
var _ = (_) => _.nextElementSibling,
  _ = (_) => _.previousElementSibling,
  _ = (_, _) => {
    let _ = _.getAttribute(`data-table-column-id`),
      _ = _.parentElement,
      _ = _ && _(_);
    for (; _ && _;) {
      for (let _ of Array.from(_.children))
        if (_ == _.getAttribute(`data-table-column-id`)) return _;
      _ = _(_);
    }
    return null;
  },
  _ = new Map([
    [38, (_) => _(_, _)],
    [39, _],
    [40, (_) => _(_, _)],
    [37, _],
    [9, (_) => _(_, _)],
    [13, (_) => _(_, _)],
  ]);
function _(_) {
  return _(_, (_) => _.getAttribute(`data-table-column-id`) != null);
}
function _(_) {
  let _ = Array.prototype.slice.call(_.children).reverse();
  for (; _.length > 0;) {
    let _ = _.pop();
    if (_.tagName.toLowerCase() === `input`) return _;
    _.push(...Array.prototype.slice.call(_.children).reverse());
  }
  return null;
}
function _(_) {
  let _ = _.get(_.keyCode);
  if ((_.keyCode === 9 && _.shiftKey && (_ = (_) => _(_, _)), !_)) return;
  let _ = _(_.currentTarget),
    _ = _(_);
  for (; _;) {
    let _ = _(_);
    if (_) {
      (_.focus(), _.preventDefault());
      return;
    }
    _ = _(_);
  }
}
