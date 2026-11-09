import { _, _, _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _ } from "./src.js";
import { _, _ } from "./dialogs.js";
import { _, _ } from "./storebrowsequerycontext.js";
import { _, _, _ } from "./saletags.js";
import { _ } from "./useQuery.js";
import { _ } from "./appidutils.js";
import { _ } from "./lazyrenderchildren.js";
import { _ } from "./axios.js";
import { _ } from "./axiosutils.js";
import { _ } from "./throbber.js";
import { _ } from "./numberformats.js";
import { _ } from "./importexport.js";
var _ = _(_()),
  _ = _(_());
async function _() {
  let _ =
      _.PARTNER_BASE_URL +
      `admin/store/contenthub/ajaxgetcontenthubcategorieskv`,
    _ = {
      origin: self.origin,
      sessionid: _(),
    },
    _ = null;
  try {
    let _ = await _.default.get(_, {
      params: _,
      withCredentials: !0,
    });
    if (_.status === 200 && _.data?.success === 1) {
      let _ = {
        rgCategories: [],
        bHasUnpublishedChanges: !1,
      };
      return (
        _.data.in_progress
          ? ((_.rgCategories = _(JSON.parse(_.data.in_progress).categories)),
            (_.bHasUnpublishedChanges = !0))
          : _.data.active &&
            (_.rgCategories = _(JSON.parse(_.data.active).categories)),
        _
      );
    }
    _ = _(_);
  } catch (_) {
    _ = _(_);
  }
  return (
    console.error(`GetCategoriesKV failed: ` + _.strErrorMsg, _),
    {
      rgCategories: [],
    }
  );
}
function _(_) {
  let _ = [];
  for (let _ of Object.keys(_)) {
    let _ = _[_],
      _ = {
        handle: _.handle,
        type: _.type,
        loc_token: _.loc_token,
        description_loc_token: _.description_loc_token,
        heading: _.heading,
        _: _._ || void 0,
        exclude_from_search: !!_.exclude_from_search,
        search_alias: _.search_alias,
      },
      {
        must: _,
        any: _,
        mustnot: _,
        replaces_tags: _,
        content_descriptors: _,
      } = _;
    (_ &&
      (_.must = Array.isArray(_)
        ? _.map((_) => ({
            _: Number(_),
          }))
        : [
            {
              _: Number(_),
            },
          ]),
      _ &&
        (_.any = Array.isArray(_)
          ? _.map((_) => ({
              _: Number(_),
            }))
          : [
              {
                _: Number(_),
              },
            ]),
      _ &&
        (_.mustnot = Array.isArray(_)
          ? _.map((_) => ({
              _: Number(_),
            }))
          : [
              {
                _: Number(_),
              },
            ]),
      _ &&
        (_.replaces_tags = Array.isArray(_)
          ? _.map((_) => ({
              _: Number(_),
            }))
          : [
              {
                _: Number(_),
              },
            ]),
      _ &&
        typeof _ == `string` &&
        (_.content_descriptors = _.split(`,`).map((_) => parseInt(_))),
      _.push(_));
  }
  return _;
}
function _() {
  let [_, _] = (0, _.useState)(null);
  return (
    (0, _.useEffect)(() => {
      _().then((_) => {
        _(_.rgCategories);
      });
    }, []),
    _
  );
}
async function _(_) {
  let _ = {};
  for (let _ of _)
    ((_[_.handle] = {
      handle: _.handle,
      type: _.type,
      loc_token: _.loc_token,
      description_loc_token: _.description_loc_token,
      must: _.must?.map((_) => _._) || void 0,
      any: _.any?.map((_) => _._) || void 0,
      mustnot: _.mustnot?.map((_) => _._) || void 0,
      replaces_tags: _.replaces_tags?.map((_) => _._) || void 0,
      heading: _.heading || void 0,
      _: _._,
      exclude_from_search: _.exclude_from_search,
      search_alias: _.search_alias,
      content_descriptors: _.content_descriptors?.length
        ? _.content_descriptors.join(`,`)
        : void 0,
    }),
      _[_.handle].must?.length === 1 &&
        (_[_.handle].must = _[_.handle].must[0]),
      _[_.handle].mustnot?.length === 1 &&
        (_[_.handle].mustnot = _[_.handle].mustnot[0]),
      _[_.handle].replaces_tags?.length === 1 &&
        (_[_.handle].replaces_tags = _[_.handle].replaces_tags[0]));
  let _ =
      _.PARTNER_BASE_URL +
      `admin/store/contenthub/ajaxsavecontenthubcategorieskv`,
    _ = new FormData();
  (_.append(`sessionid`, _()),
    _.append(`origin`, self.origin),
    _.append(`json`, JSON.stringify(_)));
  let _ = null;
  try {
    let _ = await _.default.post(_, _, {
      withCredentials: !0,
    });
    if (_.status === 200 && _.data?.success === 1)
      return (_.Get().ClearDirty(), null);
    _ = _(_);
  } catch (_) {
    _ = _(_);
  }
  return (console.error(`SaveCategoriesKV failed: ` + _.strErrorMsg, _), _);
}
async function _() {
  let _ =
      _.PARTNER_BASE_URL +
      `admin/store/contenthub/ajaxpublishcontenthubcategorieskv`,
    _ = {
      origin: self.origin,
      sessionid: _(),
    };
  try {
    let _ = await _.default.get(_, {
      params: _,
      withCredentials: !0,
    });
    if (_.status !== 200 || _.data?.success !== 1) return _(_);
  } catch (_) {
    return _(_);
  }
  return null;
}
var _ = class _ {
  constructor() {
    _(this);
  }
  m_rgTags;
  m_rgCategories;
  m_mapStoreTags;
  m_mapStoreCategories;
  m_promise;
  m_bDirty = !1;
  static s_singleton;
  BIsLoaded() {
    return !!this.m_rgTags && !!this.m_rgCategories;
  }
  BIsDirty() {
    return this.m_bDirty;
  }
  ClearDirty() {
    this.m_bDirty = !1;
  }
  SetDirty() {
    this.m_bDirty = !0;
  }
  GetTags() {
    return this.m_rgTags;
  }
  GetCategories() {
    return this.m_rgCategories;
  }
  GetStoreTagMap() {
    return this.m_mapStoreTags;
  }
  GetStoreCategoryMap() {
    return this.m_mapStoreCategories;
  }
  async HintLoad() {
    return ((this.m_promise ||= this.Load()), this.m_promise);
  }
  async Load() {
    let _ =
        _.PARTNER_BASE_URL +
        `admin/store/contenthub/ajaxgetstoretagsandcategories`,
      _ = {
        origin: self.origin,
        sessionid: _(),
        _: _.LANGUAGE,
      },
      _ = null;
    try {
      let _ = await _.default.get(_, {
        params: _,
      });
      if (_.status === 200 && _.data?.success === 1) {
        ((this.m_rgTags = _.data.tags),
          (this.m_rgCategories = _.data.categories),
          (this.m_mapStoreTags = new Map()),
          this.m_rgTags.forEach((_) => this.m_mapStoreTags.set(_.tagid, _)),
          (this.m_mapStoreCategories = new Map()),
          this.m_rgCategories.forEach((_) =>
            this.m_mapStoreCategories.set(_.categoryid, _),
          ));
        return;
      }
      ((this.m_promise = null), (_ = _(_)));
    } catch (_) {
      ((this.m_promise = null), (_ = _(_)));
    }
    console.error(
      `CStoreTagsAndCategoriesStore.Load failed: ` + _.strErrorMsg,
      _,
    );
  }
  static Get() {
    return ((_.s_singleton ||= new _()), _.s_singleton);
  }
};
(_([_], _.prototype, `m_bDirty`, void 0),
  _([_], _.prototype, `SetDirty`, null));
function _() {
  return _.Get().BIsDirty();
}
function _() {
  let [_, _] = _.useState(_.Get().GetTags()),
    [_, _] = _.useState(_.Get().GetCategories());
  return (
    _.useEffect(() => {
      (_ === void 0 || _ === void 0) &&
        _.Get()
          .HintLoad()
          .then(() => {
            (_(_.Get().GetTags()), _(_.Get().GetCategories()));
          });
    }, [_, _]),
    {
      rgTags: _,
      rgCategories: _,
    }
  );
}
function _() {
  let [_, _] = _.useState(_.Get().GetStoreTagMap()),
    [_, _] = _.useState(_.Get().GetStoreCategoryMap());
  return (
    _.useEffect(() => {
      (_ === void 0 || _ === void 0) &&
        _.Get()
          .HintLoad()
          .then(() => {
            (_(_.Get().GetStoreTagMap()), _(_.Get().GetStoreCategoryMap()));
          });
    }, [_, _]),
    {
      mapStoreTags: _,
      mapStoreCategories: _,
    }
  );
}
var _ = 5e3,
  _ = class {
    m_rtStartTime;
    m_rtEndTime;
    m_totalSummary;
    m_mapPackageSummary = new Map();
    m_mapAppPackageList = new Map();
    m_mapAppSaleSummary = new Map();
    m_mapAppSaleSummaryChange = new Map();
    m_mapAppToLoadPromises = new Map();
    GetRTStartTime() {
      return this.m_rtStartTime;
    }
    GetRTEndTime() {
      return this.m_rtEndTime;
    }
    GetAppSaleSummary(_) {
      return this.m_mapAppSaleSummary.get(_);
    }
    GetAppSaleSummaryChangeCallback(_) {
      return (
        this.m_mapAppSaleSummaryChange.has(_) ||
          this.m_mapAppSaleSummaryChange.set(_, new _()),
        this.m_mapAppSaleSummaryChange.get(_)
      );
    }
    BHasAppSaleSummaryChangeCallback(_) {
      return this.m_mapAppSaleSummaryChange.has(_);
    }
    GetTotalSummary() {
      return (
        this.m_totalSummary ||
          ((this.m_totalSummary = {
            net_sales_usd: 0,
            net_units_sold: 0,
            gross_sales_usd: 0,
            gross_units_sold: 0,
          }),
          this.m_mapAppSaleSummary.forEach((_) => {
            ((this.m_totalSummary.net_sales_usd += _.net_sales_usd),
              (this.m_totalSummary.net_units_sold += _.net_units_sold),
              (this.m_totalSummary.gross_sales_usd += _.gross_sales_usd),
              (this.m_totalSummary.gross_units_sold += _.gross_units_sold));
          })),
        this.m_totalSummary
      );
    }
    SetAppSaleSummary(_) {
      (this.m_mapAppSaleSummary.set(_.appid, _),
        this.m_mapAppSaleSummaryChange.has(_.appid) &&
          this.m_mapAppSaleSummaryChange.get(_.appid).Dispatch(_));
    }
    GetTopNApps(_) {
      let _ = Array.from(this.m_mapAppSaleSummary.values());
      return (
        _.sort((_, _) => (_.gross_sales_usd || 0) - _.gross_sales_usd),
        _.slice(0, _)
      );
    }
    async LoadApps(_) {
      let _ = [..._],
        _ = [],
        _ = [];
      for (; _.length > 0;) {
        _ = _.filter(
          (_) =>
            !this.m_mapAppToLoadPromises.has(_) ||
            (_.push(this.m_mapAppToLoadPromises.get(_)), !1),
        );
        let _ = _.splice(0, _),
          _ = this.InternalLoadAppBatch(_);
        (_.push(_),
          _.push(_),
          _.length > 0 && (await Promise.all(_), (_ = [])));
      }
      await Promise.all(_);
    }
    async InternalLoadAppBatch(_) {
      let _;
      try {
        let _ = new FormData();
        (_.append(`sessionid`, _()),
          _.append(`rgAppIDs`, _.join(`,`)),
          _.append(`rtimeStart`, `` + this.m_rtStartTime),
          _.append(`rtimeEnd`, `` + this.m_rtEndTime));
        let _ = `${_.PARTNER_BASE_URL}promotion/planning/ajaxgetappsalesummaries`,
          _ = await _.default.post(_, _, {
            withCredentials: !0,
          });
        if (_.status == 200 && _.data?.apps_to_packages?.length > 0)
          return (
            _.data.package_summaries.forEach((_) => {
              this.m_mapPackageSummary.set(_.packageid, _);
            }),
            _.data.apps_to_packages.forEach((_) => {
              let _ = _.subs || [];
              this.m_mapAppPackageList.set(_.appid, _);
              let _ = {
                appid: _.appid,
                gross_sales_usd: 0,
                gross_units_sold: 0,
                net_sales_usd: 0,
                net_units_sold: 0,
              };
              (_.forEach((_) => {
                let _ = this.m_mapPackageSummary.get(_);
                _ &&
                  ((_.gross_sales_usd += _.gross_sales_usd),
                  (_.gross_units_sold += _.gross_units_sold),
                  (_.net_sales_usd += _.net_sales_usd),
                  (_.net_units_sold += _.net_units_sold));
              }),
                this.m_mapAppSaleSummary.set(_.appid, _),
                this.BHasAppSaleSummaryChangeCallback(_.appid) &&
                  this.GetAppSaleSummaryChangeCallback(_.appid).Dispatch(_));
            }),
            !0
          );
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CSaleRankStore::InternalLoadAppBatch failed with ` + _.strErrorMsg,
          _,
        ),
        !1
      );
    }
    constructor(_, _) {
      if (_) ((this.m_rtStartTime = _), (this.m_rtEndTime = _));
      else {
        let _ = new Date();
        (_.setUTCHours(0),
          _.setUTCMinutes(0),
          _.setUTCSeconds(0),
          _.setUTCMilliseconds(0));
        let _ = Math.floor(_.getTime() / 1e3);
        ((this.m_rtEndTime = _ - 86400),
          (this.m_rtStartTime = _ - (_ + 1) * 24 * 60 * 60));
      }
    }
  },
  _ = class _ {
    m_appAndPackagesSummuries = new _(120);
    m_mapContentHubSummary = new Map();
    m_mapContentHubToAppCount = new Map();
    m_mapContentHubSummaryPromises = new Map();
    m_mapContentHubSummaryChange = new Map();
    m_mapContentHubTopAppSaleSummaryChange = new Map();
    m_mapContentHubTopAppSaleSummary = new Map();
    m_rgSummaries = null;
    m_summaryAnalysisChange = new _();
    m_loadSummaryCache;
    GetSummaryAnalysis() {
      return this.m_rgSummaries;
    }
    GetSummaryAnalysisChange() {
      return this.m_summaryAnalysisChange;
    }
    GetKey(_) {
      return `` + _.type + `_` + _.handle;
    }
    GetContentHubTopAppSaleSummaryChangeCallback(_) {
      let _ = this.GetKey(_);
      return (
        this.m_mapContentHubTopAppSaleSummaryChange.has(_) ||
          this.m_mapContentHubTopAppSaleSummaryChange.set(_, new _()),
        this.m_mapContentHubTopAppSaleSummaryChange.get(_)
      );
    }
    GetContentHubSaleSummary(_) {
      let _ = this.GetKey(_);
      return this.m_mapContentHubSummary.get(_);
    }
    GetContentHubSummaryChangeCallback(_) {
      let _ = this.GetKey(_);
      return (
        this.m_mapContentHubSummaryChange.has(_) ||
          this.m_mapContentHubSummaryChange.set(_, new _()),
        this.m_mapContentHubSummaryChange.get(_)
      );
    }
    GetTopAppSummary(_) {
      let _ = this.GetKey(_);
      return this.m_mapContentHubTopAppSaleSummary.get(_);
    }
    GetAppSummaryObject() {
      return this.m_appAndPackagesSummuries;
    }
    async LoadContentHubSaleSummary(_, _) {
      if (!_) return null;
      let _ = this.GetKey(_);
      return (
        this.m_mapContentHubSummaryPromises.has(_) ||
          this.m_mapContentHubSummaryPromises.set(
            _,
            this.InternalLoadContentHubSaleSummary(_, _),
          ),
        this.m_mapContentHubSummaryPromises.get(_)
      );
    }
    async InternalLoadContentHubSaleSummary(_, _) {
      let _ = this.GetKey(_);
      await this.m_appAndPackagesSummuries.LoadApps(_);
      let _ = {
          gross_sales_usd: 0,
          gross_units_sold: 0,
          net_sales_usd: 0,
          net_units_sold: 0,
        },
        _ = [];
      (_.forEach((_) => {
        let _ = this.m_appAndPackagesSummuries.GetAppSaleSummary(_);
        (_ &&
          ((_.gross_sales_usd += _.gross_sales_usd),
          (_.gross_units_sold += _.gross_units_sold),
          (_.net_sales_usd += _.net_sales_usd),
          (_.net_units_sold += _.net_units_sold)),
          _.push(_));
      }),
        _.sort((_, _) => _.gross_sales_usd - _.gross_sales_usd));
      let _ = {
        gross_sales_usd: 0,
        gross_units_sold: 0,
        net_sales_usd: 0,
        net_units_sold: 0,
      };
      return (
        _.slice(0, 10).forEach((_) => {
          ((_.gross_sales_usd += _.gross_sales_usd),
            (_.gross_units_sold += _.gross_units_sold),
            (_.net_sales_usd += _.net_sales_usd),
            (_.net_units_sold += _.net_units_sold));
        }),
        this.m_mapContentHubTopAppSaleSummary.set(_, _),
        this.m_mapContentHubSummary.set(_, _),
        this.m_mapContentHubToAppCount.set(_, _.length),
        this.GetContentHubTopAppSaleSummaryChangeCallback(_).Dispatch(_),
        this.GetContentHubSummaryChangeCallback(_).Dispatch(_),
        (this.m_rgSummaries = [
          ...(this.m_rgSummaries ?? []),
          this.BuildAnalysis(_),
        ]),
        this.m_summaryAnalysisChange.Dispatch(this.m_rgSummaries),
        this.SaveToCacheSaleSummary(_, _, _, _.slice(0, 10), _.length),
        _
      );
    }
    async LoadCachedSaleSummaries() {
      return (
        (this.m_loadSummaryCache ||= this.InternalLoadCachedSaleSummaries()),
        this.m_loadSummaryCache
      );
    }
    async InternalLoadCachedSaleSummaries() {
      let _ = {
          rtStartTime: this.m_appAndPackagesSummuries.GetRTStartTime(),
          rtEndTime: this.m_appAndPackagesSummuries.GetRTEndTime(),
          sessionid: _(),
        },
        _ = `${_.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubstats`,
        _ = await _.default.get(_, {
          params: _,
        });
      if (_.status == 200 && _.data?.cache?.length > 0) {
        let _ = [];
        (_.data.cache.forEach((_) => {
          let _ = JSON.parse(_),
            _ = {
              handle: _.handle,
              type: _.type,
            },
            _ = this.GetKey(_);
          (this.m_mapContentHubTopAppSaleSummary.set(_, _.topAppSummary),
            this.m_mapContentHubSummary.set(_, _.hubSummary),
            this.m_mapContentHubToAppCount.set(_, _.appCount),
            _.topApps.forEach((_) =>
              this.m_appAndPackagesSummuries.SetAppSaleSummary(_),
            ),
            this.m_mapContentHubSummaryChange.has(_) &&
              this.m_mapContentHubSummaryChange.get(_).Dispatch(_.hubSummary),
            this.m_mapContentHubTopAppSaleSummaryChange.has(_) &&
              this.m_mapContentHubTopAppSaleSummaryChange
                .get(_)
                .Dispatch(_.topAppSummary),
            _.push(this.BuildAnalysis(_)));
        }),
          (this.m_rgSummaries = _),
          this.m_summaryAnalysisChange.Dispatch(_));
      }
      return null;
    }
    BuildAnalysis(_) {
      let _ = this.GetKey(_),
        _ = this.m_mapContentHubSummary.get(_),
        _ = this.m_mapContentHubTopAppSaleSummary.get(_),
        _ = this.m_mapContentHubToAppCount.get(_);
      return {
        handle: _.handle,
        total_games: _,
        hub_gross_units_sold: _.gross_units_sold,
        hub_gross_sales_usd: Math.floor(_.gross_sales_usd / 100),
        hub_units_per_day: Math.floor(_.gross_units_sold / 120),
        hub_sales_usd_per_day: Math.floor(_.gross_sales_usd / 12e3),
        top_apps_percent:
          _.gross_sales_usd > 0
            ? ((_.gross_sales_usd / _.gross_sales_usd) * 100).toFixed(2)
            : `NA`,
      };
    }
    async SaveToCacheSaleSummary(_, _, _, _, _) {
      if (_.type === `category_editor`) return;
      let _ = {
          type: _.type,
          handle: _.handle,
          topAppSummary: _,
          hubSummary: _,
          topApps: _,
          appCount: _,
        },
        _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(
          `rtStartTime`,
          `` + this.m_appAndPackagesSummuries.GetRTStartTime(),
        ),
        _.append(
          `rtEndTime`,
          `` + this.m_appAndPackagesSummuries.GetRTEndTime(),
        ),
        _.append(`bClear`, `false`),
        _.append(`key`, this.GetKey(_)),
        _.append(`rgStats`, JSON.stringify(_)));
      let _ = `${_.PARTNER_BASE_URL}promotion/planning/ajaxpostcontenthubstats`,
        _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
      _.status != 200 &&
        console.error(`SaveToCacheSaleSummary failed to save ` + _, _);
    }
    static s_Singleton;
    static Get() {
      return ((_.s_Singleton ||= new _()), _.s_Singleton);
    }
  };
_([_], _.prototype, `LoadCachedSaleSummaries`, null);
function _(_) {
  let {
    data: _,
    isLoading: _,
    isError: _,
  } = _({
    queryKey: [`contenthubsummary`, _.type, _.handle],
    queryFn: async () => {
      let _ = {
          contenthubcategorytype: _.type,
          handle: _.handle,
          sessionid: _(),
        },
        _ = `${_.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubsummary`,
        _ = await _.default.get(_, {
          params: _,
        });
      return _.status == 200 && _.data?.top_apps?.length > 0 ? _.data : null;
    },
  });
  return {
    rgTopApps: _ || _ || !_ ? null : _?.top_apps,
    nTotalGames: _ || _ || !_ ? null : _?.total_games,
    isError: _,
  };
}
function _(_) {
  let {
    data: _,
    isLoading: _,
    isError: _,
  } = _({
    queryKey: [`contenthubapplist`, _.type, _.handle],
    queryFn: async () => {
      let _ = {
          contenthubcategorytype: _.type,
          handle: _.handle,
          sessionid: _(),
        },
        _ = `${_.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubapplist`,
        _ = await _.default.get(_, {
          params: _,
        });
      return _.status == 200 && _.data?.apps?.length > 0 ? _.data : null;
    },
  });
  return _?.apps || null;
}
function _(_, _, _) {
  return {
    musthaveall: (_ || [])
      .filter(Boolean)
      .map((_) => _._)
      .sort()
      .join(`,`),
    musthaveany: (_ || [])
      .filter(Boolean)
      .map((_) => _._)
      .sort()
      .join(`,`),
    mustnothaveany: (_ || [])
      .filter(Boolean)
      .map((_) => _._)
      .sort()
      .join(`,`),
  };
}
var _ = {
  total_games: 0,
  all_appid: [],
  top_games: [],
};
function _(_, _, _) {
  let { musthaveall: _, musthaveany: _, mustnothaveany: _ } = _(_, _, _),
    {
      data: _,
      isLoading: _,
      isError: _,
    } = _({
      queryKey: [`useContentHubCategoryEditorFullAppList`, _, _, _],
      queryFn: async () => {
        let _ = {
            musthaveall: _,
            musthaveany: _,
            mustnothaveany: _,
            sessionid: _(),
          },
          _ = `${_.PARTNER_BASE_URL}promotion/planning/ajaxgetcategoryeditorapplist`,
          _ = await _.default.get(_, {
            params: _,
          });
        return _.status == 200 && _.data?.top_games?.length > 0 ? _.data : null;
      },
      enabled: _.length != 0 || _.length != 0 || _.length != 0,
    });
  return _.length == 0 && _.length == 0 && _.length == 0 ? _ : _ || null;
}
function _(_, _, _) {
  let _ = _(_, _, _),
    _ = (0, _.useMemo)(() => {
      let { musthaveall: _, musthaveany: _, mustnothaveany: _ } = _(_, _, _);
      return {
        type: `category_editor`,
        handle: _ + `_` + _ + `_` + _,
      };
    }, [_, _, _]),
    [_, _] = (0, _.useState)(_.Get().GetContentHubSaleSummary(_));
  return (
    (0, _.useEffect)(() => {
      _?.all_appid?.length &&
        !_ &&
        _.Get().LoadContentHubSaleSummary(_, _.all_appid);
    }, [_, _, _]),
    _(_.Get().GetContentHubSummaryChangeCallback(_), _),
    _
  );
}
function _(_, _, _) {
  let _ = (0, _.useMemo)(() => {
      let { musthaveall: _, musthaveany: _, mustnothaveany: _ } = _(_, _, _);
      return {
        type: `category_editor`,
        handle: _ + `_` + _ + `_` + _,
      };
    }, [_, _, _]),
    [_, _] = (0, _.useState)(_.Get().GetTopAppSummary(_));
  return (_(_.Get().GetContentHubTopAppSaleSummaryChangeCallback(_), _), _);
}
function _(_) {
  let _ = _(_),
    [_, _] = (0, _.useState)(_.Get().GetContentHubSaleSummary(_));
  return (
    (0, _.useEffect)(() => {
      _?.length && !_ && _.Get().LoadContentHubSaleSummary(_, _);
    }, [_, _.type, _.handle, _, _]),
    _(_.Get().GetContentHubSummaryChangeCallback(_), _),
    _
  );
}
function _(_) {
  let [_, _] = (0, _.useState)(
    _.Get().GetAppSummaryObject().GetAppSaleSummary(_),
  );
  return (
    _(_.Get().GetAppSummaryObject().GetAppSaleSummaryChangeCallback(_), _), _
  );
}
function _(_) {
  let [_, _] = (0, _.useState)(_.Get().GetTopAppSummary(_));
  return (_(_.Get().GetContentHubTopAppSaleSummaryChangeCallback(_), _), _);
}
function _() {
  let [_, _] = (0, _.useState)(_.Get().GetSummaryAnalysis());
  return (
    (0, _.useEffect)(() => {
      _.Get().LoadCachedSaleSummaries();
    }, []),
    _(_.Get().GetSummaryAnalysisChange(), _),
    _
  );
}
var _ = _(_()),
  _ = `zDqf95flXsQ-`,
  _ = `NubtcOb7MrQ-`,
  _ = `VMmPDg-0ono-`,
  _ = `iqEenrc0kwo-`,
  _ = `LTl5z4XAdwg-`,
  _ = `i-owVktN2Zc-`,
  _ = `_7f-3DvInoM8-`,
  _ = `ScUBiRh-cLk-`,
  _ = `vHirFfI2Eeo-`,
  _ = `RId7I-dx2oU-`,
  _ = `lOyCRAsA9mI-`,
  _ = `-qcT2VH76o4-`,
  _ = `raC0Dc1DtPo-`,
  _ = `PwJtUUOCEoQ-`,
  _ = `yNoKfZlDv7k-`,
  _ = `NOL8XDNbcWM-`,
  _ = `vRby4-J8FJY-`,
  _ = `_5JKZLtgwSTE-`,
  _ = _(),
  _ = `0px 0px 100% 0px`,
  _ = 5e3;
function _(_) {
  let [_, _] = (0, _.useState)(!0),
    _ = _(),
    _ = (0, _.useMemo)(
      () => (_?.length > 0 ? _.filter((_) => !!_.type) : null),
      [_],
    );
  return !_ || _.length == 0
    ? (0, _.jsx)(_, {
        string: _(`#Loading`),
      })
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`h1`, {
                    children: `Theme Sale Planning Dashboard`,
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      !_ &&
                        (0, _.jsxs)(_, {
                          onClick: () => _(!0),
                          children: [`Load `, 120, ` Days of Sale Summaries`],
                        }),
                      (0, _.jsx)(_, {}),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsxs)(`ul`, {
                  children: [
                    (0, _.jsxs)(`li`, {
                      children: [
                        `Themes are currently make from all of the categories that are defined on this`,
                        ` `,
                        (0, _.jsx)(`a`, {
                          href: `${_.PARTNER_BASE_URL}admin/store/contenthub/categories`,
                          children: `categories editor page.`,
                        }),
                      ],
                    }),
                    (0, _.jsxs)(`li`, {
                      children: [
                        `Hubs with more than `,
                        _,
                        ` games are called out as 'too big'.`,
                      ],
                    }),
                    (0, _.jsx)(`li`, {
                      children: `Sales rank shown for individual games is long-term and includes all sources of revenue.`,
                    }),
                    (0, _.jsx)(`li`, {
                      children: `Revenue shown is computed over the past 45 days and only using base games package revenue (a technical limitation for now) `,
                    }),
                  ],
                }),
              }),
            ],
          }),
          _.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                category: _,
                bSaleSummary: _,
              },
              _,
            ),
          ),
        ],
      });
}
function _(_) {
  let { category: _, bSaleSummary: _ } = _;
  return (0, _.jsx)(_, {
    placeholderHeight: 250,
    rootMargin: _,
    children: (0, _.jsx)(_, {
      category: _,
      bSaleSummary: _,
    }),
  });
}
function _(_) {
  let { nTotalGames: _ } = _,
    _,
    _;
  return (
    _ > 500 && _ <= 5e3
      ? ((_ = _), (_ = `Good size!`))
      : _ > 5e3
        ? ((_ = _), (_ = `Too big`))
        : ((_ = _), (_ = `Too small`)),
    (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [_(_), ` games ( `, _, `)`],
    })
  );
}
function _(_) {
  let { category: _, bSaleSummary: _ } = _,
    { rgTopApps: _, nTotalGames: _ } = _(_),
    _ = _ > 500 && _ <= 5e3;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`a`, {
            href: `${_.STORE_BASE_URL}category/${_.handle}`,
            className: _,
            children: _.loc_token ? _(_.loc_token) : _.handle,
          }),
          (0, _.jsx)(_, {
            nTotalGames: _,
          }),
          (0, _.jsx)(`div`, {
            className: void 0,
            children:
              !!(_ && _) &&
              (0, _.jsx)(_, {
                category: _,
              }),
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            children: `Top 10 Games non-F2P:`,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _?.slice(0, 10).map((_) =>
              (0, _.jsx)(
                _,
                {
                  info: _,
                  category: _,
                  bSaleSummary: _ && _,
                },
                _.appid,
              ),
            ),
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          `handle: `,
          _.handle,
          (0, _.jsx)(_, {
            category: _,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { info: _, bSaleSummary: _ } = _,
    _ = _(_.appid),
    { data: _ } = _(_),
    { data: _ } = _(_);
  return _ && _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            _: _,
            hoverProps: {
              direction: `overlay`,
              style: {
                minWidth: `320px`,
                maxWidth: `320px`,
              },
            },
            className: _,
            children: (0, _.jsx)(`a`, {
              href: _(_),
              children: (0, _.jsx)(`img`, {
                src: _(_, `header`),
                alt: _.name,
              }),
            }),
          }),
          (0, _.jsxs)(`div`, {
            children: [`\xA0Rank: `, _.long_term_sale_rank],
          }),
          !!_ &&
            (0, _.jsx)(_, {
              ..._,
            }),
        ],
      })
    : (0, _.jsxs)(`div`, {
        children: [
          `Loading appid: `,
          _.appid,
          ` with rank: `,
          _.long_term_sale_rank,
        ],
      });
}
function _(_) {
  let { info: _, category: _ } = _,
    _ = _(_.appid),
    _ = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !!_ &&
        (0, _.jsxs)(`div`, {
          children: [` `, `$`, _(Math.floor(_.gross_sales_usd / 100))],
        }),
      !!(_ && _?.gross_sales_usd) &&
        (0, _.jsxs)(`div`, {
          children: [
            `( `,
            ((_.gross_sales_usd / _.gross_sales_usd) * 100).toFixed(2),
            `% of hub )`,
          ],
        }),
    ],
  });
}
function _(_) {
  let { mapStoreTags: _, mapStoreCategories: _ } = _(),
    { category: _ } = _;
  return !_ || !_ || (!_.any && !_.must && !_.mustnot)
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          !!_.must &&
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(`span`, {
                  className: `NQSeTXtz7dY-`,
                  children: `Must:`,
                }),
                ` `,
                _.must?.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      type: _.type,
                      _: _._,
                    },
                    _.type + `_` + _._ + `_` + _.handle,
                  ),
                ),
              ],
            }),
          !!_.any &&
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(`span`, {
                  className: `QAJ7Zg1CBSE-`,
                  children: `Any:`,
                }),
                ` `,
                _.any?.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      type: _.type,
                      _: _._,
                    },
                    _.type + `_` + _._ + `_` + _.handle,
                  ),
                ),
              ],
            }),
          !!_.mustnot &&
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(`span`, {
                  className: `S4Jd6TDI13Y-`,
                  children: `Must Not:`,
                }),
                ` `,
                _.mustnot?.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      type: _.type,
                      _: _._,
                    },
                    _.type + `_` + _._ + `_` + _.handle,
                  ),
                ),
              ],
            }),
        ],
      });
}
function _(_) {
  let { mapStoreTags: _, mapStoreCategories: _ } = _(),
    { type: _, _: _ } = _;
  return _ == `tagids`
    ? (0, _.jsxs)(`span`, {
        children: [_.has(_) ? _.get(_).name : `tagid: ` + _, `, `],
      })
    : (0, _.jsxs)(`span`, {
        children: [_.has(_) ? _.get(_).name : `category id: ` + _, `, `],
      });
}
function _(_) {
  let { saleSummary: _, topAppSummary: _ } = _;
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`table`, {
          children: (0, _.jsx)(`tbody`, {
            children: (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsxs)(`td`, {
                  children: [
                    `Total: `,
                    (0, _.jsx)(`br`, {}),
                    `$`,
                    _(Math.floor(_.gross_sales_usd / 100)),
                  ],
                }),
                (0, _.jsxs)(`td`, {
                  children: [
                    `Per Day: `,
                    (0, _.jsx)(`br`, {}),
                    `$`,
                    _(Math.floor(_.gross_sales_usd / 12e3)),
                  ],
                }),
                (0, _.jsxs)(`td`, {
                  children: [
                    `Total Units: `,
                    (0, _.jsx)(`br`, {}),
                    _(_.gross_units_sold),
                  ],
                }),
                (0, _.jsxs)(`td`, {
                  children: [
                    `Units Per Day: `,
                    (0, _.jsx)(`br`, {}),
                    _(Math.floor(_.gross_units_sold / 120)),
                  ],
                }),
                _.gross_sales_usd > 0 &&
                  (0, _.jsx)(_.Fragment, {
                    children: (0, _.jsxs)(`td`, {
                      children: [
                        `Top `,
                        10,
                        ` Apps: `,
                        (0, _.jsx)(`br`, {}),
                        (0, _.jsxs)(`span`, {
                          className:
                            (_.gross_sales_usd / _.gross_sales_usd) * 100 > 90
                              ? `iqEenrc0kwo-`
                              : `VMmPDg-0ono-`,
                          children: [
                            (
                              (_.gross_sales_usd / _.gross_sales_usd) *
                              100
                            ).toFixed(2),
                            `%`,
                          ],
                        }),
                        ` of revenue`,
                      ],
                    }),
                  }),
              ],
            }),
          }),
        }),
      })
    : (0, _.jsx)(_, {
        position: `center`,
        string: `Loading Sale Info`,
      });
}
function _(_) {
  let { category: _ } = _,
    _ = _(_),
    _ = _(_);
  return (0, _.jsx)(_, {
    saleSummary: _,
    topAppSummary: _,
  });
}
function _(_) {
  let _ = _();
  return (0, _.jsx)(`a`, {
    href: `data:application/octet-stream,${encodeURIComponent(
      _.default.unparse({
        data: _,
        fields: Object.keys(_ ? _[0] : {}),
      }),
    )}`,
    download: `theme_sale_stats.csv`,
    children: `Export CSV`,
  });
}
