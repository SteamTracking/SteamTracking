/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  S as t,
  Y as n,
  _t as r,
  k as i,
  kt as a,
  nt as o,
  on as s,
  x as c,
  y as l,
} from "./mobx.esm.js";
import { Lt as u, P as d, Rt as f } from "./src.js";
import { Vt as ee, oa as p } from "./dialogs.js";
import { d as m, h as te } from "./storebrowsequerycontext.js";
import { Q as ne, Qn as re, it as h } from "./saletags.js";
import { t as g } from "./useQuery.js";
import { r as ie } from "./appidutils.js";
import { t as ae } from "./lazyrenderchildren.js";
import { t as _ } from "./axios.js";
import { t as v } from "./axiosutils.js";
import { t as y } from "./throbber.js";
import { n as b } from "./numberformats.js";
import { n as oe } from "./importexport.js";
var x = s(_()),
  S = s(a());
async function C() {
  let e =
      o.PARTNER_BASE_URL +
      `admin/store/contenthub/ajaxgetcontenthubcategorieskv`,
    t = { origin: self.origin, sessionid: n() },
    r = null;
  try {
    let n = await x.default.get(e, { params: t, withCredentials: !0 });
    if (n.status === 200 && n.data?.success === 1) {
      let e = { rgCategories: [], bHasUnpublishedChanges: !1 };
      return (
        n.data.in_progress
          ? ((e.rgCategories = w(JSON.parse(n.data.in_progress).categories)),
            (e.bHasUnpublishedChanges = !0))
          : n.data.active &&
            (e.rgCategories = w(JSON.parse(n.data.active).categories)),
        e
      );
    }
    r = v(n);
  } catch (e) {
    r = v(e);
  }
  return (
    console.error(`GetCategoriesKV failed: ` + r.strErrorMsg, r),
    { rgCategories: [] }
  );
}
function w(e) {
  let t = [];
  for (let n of Object.keys(e)) {
    let r = e[n],
      i = {
        handle: r.handle,
        type: r.type,
        loc_token: r.loc_token,
        description_loc_token: r.description_loc_token,
        heading: r.heading,
        id: r.id || void 0,
        exclude_from_search: !!r.exclude_from_search,
        search_alias: r.search_alias,
      },
      {
        must: a,
        any: o,
        mustnot: s,
        replaces_tags: c,
        content_descriptors: l,
      } = r;
    a &&
      (i.must = Array.isArray(a)
        ? a.map((e) => ({ id: Number(e) }))
        : [{ id: Number(a) }]),
      o &&
        (i.any = Array.isArray(o)
          ? o.map((e) => ({ id: Number(e) }))
          : [{ id: Number(o) }]),
      s &&
        (i.mustnot = Array.isArray(s)
          ? s.map((e) => ({ id: Number(e) }))
          : [{ id: Number(s) }]),
      c &&
        (i.replaces_tags = Array.isArray(c)
          ? c.map((e) => ({ id: Number(e) }))
          : [{ id: Number(c) }]),
      l &&
        typeof l == `string` &&
        (i.content_descriptors = l.split(`,`).map((e) => parseInt(e))),
      t.push(i);
  }
  return t;
}
function T() {
  let [e, t] = (0, S.useState)(null);
  return (
    (0, S.useEffect)(() => {
      C().then((e) => {
        t(e.rgCategories);
      });
    }, []),
    e
  );
}
async function E(e) {
  let t = {};
  for (let n of e)
    (t[n.handle] = {
      handle: n.handle,
      type: n.type,
      loc_token: n.loc_token,
      description_loc_token: n.description_loc_token,
      must: n.must?.map((e) => e.id) || void 0,
      any: n.any?.map((e) => e.id) || void 0,
      mustnot: n.mustnot?.map((e) => e.id) || void 0,
      replaces_tags: n.replaces_tags?.map((e) => e.id) || void 0,
      heading: n.heading || void 0,
      id: n.id,
      exclude_from_search: n.exclude_from_search,
      search_alias: n.search_alias,
      content_descriptors: n.content_descriptors?.length
        ? n.content_descriptors.join(`,`)
        : void 0,
    }),
      t[n.handle].must?.length === 1 &&
        (t[n.handle].must = t[n.handle].must[0]),
      t[n.handle].mustnot?.length === 1 &&
        (t[n.handle].mustnot = t[n.handle].mustnot[0]),
      t[n.handle].replaces_tags?.length === 1 &&
        (t[n.handle].replaces_tags = t[n.handle].replaces_tags[0]);
  let r =
      o.PARTNER_BASE_URL +
      `admin/store/contenthub/ajaxsavecontenthubcategorieskv`,
    i = new FormData();
  i.append(`sessionid`, n()),
    i.append(`origin`, self.origin),
    i.append(`json`, JSON.stringify(t));
  let a = null;
  try {
    let e = await x.default.post(r, i, { withCredentials: !0 });
    if (e.status === 200 && e.data?.success === 1)
      return D.Get().ClearDirty(), null;
    a = v(e);
  } catch (e) {
    a = v(e);
  }
  return console.error(`SaveCategoriesKV failed: ` + a.strErrorMsg, a), a;
}
async function se() {
  let e =
      o.PARTNER_BASE_URL +
      `admin/store/contenthub/ajaxpublishcontenthubcategorieskv`,
    t = { origin: self.origin, sessionid: n() };
  try {
    let n = await x.default.get(e, { params: t, withCredentials: !0 });
    if (n.status !== 200 || n.data?.success !== 1) return v(n);
  } catch (e) {
    return v(e);
  }
  return null;
}
var D = class e {
  constructor() {
    c(this);
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
    return (this.m_promise ||= this.Load()), this.m_promise;
  }
  async Load() {
    let e =
        o.PARTNER_BASE_URL +
        `admin/store/contenthub/ajaxgetstoretagsandcategories`,
      t = { origin: self.origin, sessionid: n(), l: o.LANGUAGE },
      r = null;
    try {
      let n = await x.default.get(e, { params: t });
      if (n.status === 200 && n.data?.success === 1) {
        (this.m_rgTags = n.data.tags),
          (this.m_rgCategories = n.data.categories),
          (this.m_mapStoreTags = new Map()),
          this.m_rgTags.forEach((e) => this.m_mapStoreTags.set(e.tagid, e)),
          (this.m_mapStoreCategories = new Map()),
          this.m_rgCategories.forEach((e) =>
            this.m_mapStoreCategories.set(e.categoryid, e),
          );
        return;
      }
      (this.m_promise = null), (r = v(n));
    } catch (e) {
      (this.m_promise = null), (r = v(e));
    }
    console.error(
      `CStoreTagsAndCategoriesStore.Load failed: ` + r.strErrorMsg,
      r,
    );
  }
  static Get() {
    return (e.s_singleton ||= new e()), e.s_singleton;
  }
};
i([t], D.prototype, `m_bDirty`, void 0), i([f], D.prototype, `SetDirty`, null);
function ce() {
  return D.Get().BIsDirty();
}
function le() {
  let [e, t] = S.useState(D.Get().GetTags()),
    [n, r] = S.useState(D.Get().GetCategories());
  return (
    S.useEffect(() => {
      (e === void 0 || n === void 0) &&
        D.Get()
          .HintLoad()
          .then(() => {
            t(D.Get().GetTags()), r(D.Get().GetCategories());
          });
    }, [n, e]),
    { rgTags: e, rgCategories: n }
  );
}
function O() {
  let [e, t] = S.useState(D.Get().GetStoreTagMap()),
    [n, r] = S.useState(D.Get().GetStoreCategoryMap());
  return (
    S.useEffect(() => {
      (e === void 0 || n === void 0) &&
        D.Get()
          .HintLoad()
          .then(() => {
            t(D.Get().GetStoreTagMap()), r(D.Get().GetStoreCategoryMap());
          });
    }, [n, e]),
    { mapStoreTags: e, mapStoreCategories: n }
  );
}
var ue = 5e3,
  k = class {
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
    GetAppSaleSummary(e) {
      return this.m_mapAppSaleSummary.get(e);
    }
    GetAppSaleSummaryChangeCallback(e) {
      return (
        this.m_mapAppSaleSummaryChange.has(e) ||
          this.m_mapAppSaleSummaryChange.set(e, new u()),
        this.m_mapAppSaleSummaryChange.get(e)
      );
    }
    BHasAppSaleSummaryChangeCallback(e) {
      return this.m_mapAppSaleSummaryChange.has(e);
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
          this.m_mapAppSaleSummary.forEach((e) => {
            (this.m_totalSummary.net_sales_usd += e.net_sales_usd),
              (this.m_totalSummary.net_units_sold += e.net_units_sold),
              (this.m_totalSummary.gross_sales_usd += e.gross_sales_usd),
              (this.m_totalSummary.gross_units_sold += e.gross_units_sold);
          })),
        this.m_totalSummary
      );
    }
    SetAppSaleSummary(e) {
      this.m_mapAppSaleSummary.set(e.appid, e),
        this.m_mapAppSaleSummaryChange.has(e.appid) &&
          this.m_mapAppSaleSummaryChange.get(e.appid).Dispatch(e);
    }
    GetTopNApps(e) {
      let t = Array.from(this.m_mapAppSaleSummary.values());
      return (
        t.sort((e, t) => (t.gross_sales_usd || 0) - e.gross_sales_usd),
        t.slice(0, e)
      );
    }
    async LoadApps(e) {
      let t = [...e],
        n = [],
        r = [];
      for (; t.length > 0; ) {
        t = t.filter(
          (e) =>
            !this.m_mapAppToLoadPromises.has(e) ||
            (n.push(this.m_mapAppToLoadPromises.get(e)), !1),
        );
        let e = t.splice(0, ue),
          i = this.InternalLoadAppBatch(e);
        n.push(i), r.push(i), r.length > 0 && (await Promise.all(r), (r = []));
      }
      await Promise.all(n);
    }
    async InternalLoadAppBatch(e) {
      let t;
      try {
        let r = new FormData();
        r.append(`sessionid`, n()),
          r.append(`rgAppIDs`, e.join(`,`)),
          r.append(`rtimeStart`, `` + this.m_rtStartTime),
          r.append(`rtimeEnd`, `` + this.m_rtEndTime);
        let i = `${o.PARTNER_BASE_URL}promotion/planning/ajaxgetappsalesummaries`,
          a = await x.default.post(i, r, { withCredentials: !0 });
        if (a.status == 200 && a.data?.apps_to_packages?.length > 0)
          return (
            a.data.package_summaries.forEach((e) => {
              this.m_mapPackageSummary.set(e.packageid, e);
            }),
            a.data.apps_to_packages.forEach((e) => {
              let t = e.subs || [];
              this.m_mapAppPackageList.set(e.appid, t);
              let n = {
                appid: e.appid,
                gross_sales_usd: 0,
                gross_units_sold: 0,
                net_sales_usd: 0,
                net_units_sold: 0,
              };
              t.forEach((e) => {
                let t = this.m_mapPackageSummary.get(e);
                t &&
                  ((n.gross_sales_usd += t.gross_sales_usd),
                  (n.gross_units_sold += t.gross_units_sold),
                  (n.net_sales_usd += t.net_sales_usd),
                  (n.net_units_sold += t.net_units_sold));
              }),
                this.m_mapAppSaleSummary.set(e.appid, n),
                this.BHasAppSaleSummaryChangeCallback(e.appid) &&
                  this.GetAppSaleSummaryChangeCallback(e.appid).Dispatch(n);
            }),
            !0
          );
        t = v(a);
      } catch (e) {
        t = v(e);
      }
      return (
        console.error(
          `CSaleRankStore::InternalLoadAppBatch failed with ` + t.strErrorMsg,
          t,
        ),
        !1
      );
    }
    constructor(e, t) {
      if (t) (this.m_rtStartTime = e), (this.m_rtEndTime = t);
      else {
        let t = new Date();
        t.setUTCHours(0),
          t.setUTCMinutes(0),
          t.setUTCSeconds(0),
          t.setUTCMilliseconds(0);
        let n = Math.floor(t.getTime() / 1e3);
        (this.m_rtEndTime = n - 86400),
          (this.m_rtStartTime = n - (e + 1) * 24 * 60 * 60);
      }
    }
  },
  A = class e {
    m_appAndPackagesSummuries = new k(120);
    m_mapContentHubSummary = new Map();
    m_mapContentHubToAppCount = new Map();
    m_mapContentHubSummaryPromises = new Map();
    m_mapContentHubSummaryChange = new Map();
    m_mapContentHubTopAppSaleSummaryChange = new Map();
    m_mapContentHubTopAppSaleSummary = new Map();
    m_rgSummaries = null;
    m_summaryAnalysisChange = new u();
    m_loadSummaryCache;
    GetSummaryAnalysis() {
      return this.m_rgSummaries;
    }
    GetSummaryAnalysisChange() {
      return this.m_summaryAnalysisChange;
    }
    GetKey(e) {
      return `` + e.type + `_` + e.handle;
    }
    GetContentHubTopAppSaleSummaryChangeCallback(e) {
      let t = this.GetKey(e);
      return (
        this.m_mapContentHubTopAppSaleSummaryChange.has(t) ||
          this.m_mapContentHubTopAppSaleSummaryChange.set(t, new u()),
        this.m_mapContentHubTopAppSaleSummaryChange.get(t)
      );
    }
    GetContentHubSaleSummary(e) {
      let t = this.GetKey(e);
      return this.m_mapContentHubSummary.get(t);
    }
    GetContentHubSummaryChangeCallback(e) {
      let t = this.GetKey(e);
      return (
        this.m_mapContentHubSummaryChange.has(t) ||
          this.m_mapContentHubSummaryChange.set(t, new u()),
        this.m_mapContentHubSummaryChange.get(t)
      );
    }
    GetTopAppSummary(e) {
      let t = this.GetKey(e);
      return this.m_mapContentHubTopAppSaleSummary.get(t);
    }
    GetAppSummaryObject() {
      return this.m_appAndPackagesSummuries;
    }
    async LoadContentHubSaleSummary(e, t) {
      if (!t) return null;
      let n = this.GetKey(e);
      return (
        this.m_mapContentHubSummaryPromises.has(n) ||
          this.m_mapContentHubSummaryPromises.set(
            n,
            this.InternalLoadContentHubSaleSummary(e, t),
          ),
        this.m_mapContentHubSummaryPromises.get(n)
      );
    }
    async InternalLoadContentHubSaleSummary(e, t) {
      let n = this.GetKey(e);
      await this.m_appAndPackagesSummuries.LoadApps(t);
      let r = {
          gross_sales_usd: 0,
          gross_units_sold: 0,
          net_sales_usd: 0,
          net_units_sold: 0,
        },
        i = [];
      t.forEach((e) => {
        let t = this.m_appAndPackagesSummuries.GetAppSaleSummary(e);
        t &&
          ((r.gross_sales_usd += t.gross_sales_usd),
          (r.gross_units_sold += t.gross_units_sold),
          (r.net_sales_usd += t.net_sales_usd),
          (r.net_units_sold += t.net_units_sold)),
          i.push(t);
      }),
        i.sort((e, t) => t.gross_sales_usd - e.gross_sales_usd);
      let a = {
        gross_sales_usd: 0,
        gross_units_sold: 0,
        net_sales_usd: 0,
        net_units_sold: 0,
      };
      return (
        i.slice(0, 10).forEach((e) => {
          (a.gross_sales_usd += e.gross_sales_usd),
            (a.gross_units_sold += e.gross_units_sold),
            (a.net_sales_usd += e.net_sales_usd),
            (a.net_units_sold += e.net_units_sold);
        }),
        this.m_mapContentHubTopAppSaleSummary.set(n, a),
        this.m_mapContentHubSummary.set(n, r),
        this.m_mapContentHubToAppCount.set(n, i.length),
        this.GetContentHubTopAppSaleSummaryChangeCallback(e).Dispatch(a),
        this.GetContentHubSummaryChangeCallback(e).Dispatch(r),
        (this.m_rgSummaries = [
          ...(this.m_rgSummaries ?? []),
          this.BuildAnalysis(e),
        ]),
        this.m_summaryAnalysisChange.Dispatch(this.m_rgSummaries),
        this.SaveToCacheSaleSummary(e, r, a, i.slice(0, 10), i.length),
        r
      );
    }
    async LoadCachedSaleSummaries() {
      return (
        (this.m_loadSummaryCache ||= this.InternalLoadCachedSaleSummaries()),
        this.m_loadSummaryCache
      );
    }
    async InternalLoadCachedSaleSummaries() {
      let e = {
          rtStartTime: this.m_appAndPackagesSummuries.GetRTStartTime(),
          rtEndTime: this.m_appAndPackagesSummuries.GetRTEndTime(),
          sessionid: n(),
        },
        t = `${o.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubstats`,
        r = await x.default.get(t, { params: e });
      if (r.status == 200 && r.data?.cache?.length > 0) {
        let e = [];
        r.data.cache.forEach((t) => {
          let n = JSON.parse(t),
            r = { handle: n.handle, type: n.type },
            i = this.GetKey(r);
          this.m_mapContentHubTopAppSaleSummary.set(i, n.topAppSummary),
            this.m_mapContentHubSummary.set(i, n.hubSummary),
            this.m_mapContentHubToAppCount.set(i, n.appCount),
            n.topApps.forEach((e) =>
              this.m_appAndPackagesSummuries.SetAppSaleSummary(e),
            ),
            this.m_mapContentHubSummaryChange.has(i) &&
              this.m_mapContentHubSummaryChange.get(i).Dispatch(n.hubSummary),
            this.m_mapContentHubTopAppSaleSummaryChange.has(i) &&
              this.m_mapContentHubTopAppSaleSummaryChange
                .get(i)
                .Dispatch(n.topAppSummary),
            e.push(this.BuildAnalysis(r));
        }),
          (this.m_rgSummaries = e),
          this.m_summaryAnalysisChange.Dispatch(e);
      }
      return null;
    }
    BuildAnalysis(e) {
      let t = this.GetKey(e),
        n = this.m_mapContentHubSummary.get(t),
        r = this.m_mapContentHubTopAppSaleSummary.get(t),
        i = this.m_mapContentHubToAppCount.get(t);
      return {
        handle: e.handle,
        total_games: i,
        hub_gross_units_sold: n.gross_units_sold,
        hub_gross_sales_usd: Math.floor(n.gross_sales_usd / 100),
        hub_units_per_day: Math.floor(n.gross_units_sold / 120),
        hub_sales_usd_per_day: Math.floor(n.gross_sales_usd / 12e3),
        top_apps_percent:
          n.gross_sales_usd > 0
            ? ((r.gross_sales_usd / n.gross_sales_usd) * 100).toFixed(2)
            : `NA`,
      };
    }
    async SaveToCacheSaleSummary(e, t, r, i, a) {
      if (e.type === `category_editor`) return;
      let s = {
          type: e.type,
          handle: e.handle,
          topAppSummary: r,
          hubSummary: t,
          topApps: i,
          appCount: a,
        },
        c = new FormData();
      c.append(`sessionid`, n()),
        c.append(
          `rtStartTime`,
          `` + this.m_appAndPackagesSummuries.GetRTStartTime(),
        ),
        c.append(
          `rtEndTime`,
          `` + this.m_appAndPackagesSummuries.GetRTEndTime(),
        ),
        c.append(`bClear`, `false`),
        c.append(`key`, this.GetKey(e)),
        c.append(`rgStats`, JSON.stringify(s));
      let u = `${o.PARTNER_BASE_URL}promotion/planning/ajaxpostcontenthubstats`,
        d = await x.default.post(u, c, { withCredentials: !0 });
      d.status != 200 &&
        console.error(`SaveToCacheSaleSummary failed to save ` + l, d);
    }
    static s_Singleton;
    static Get() {
      return (e.s_Singleton ||= new e()), e.s_Singleton;
    }
  };
i([f], A.prototype, `LoadCachedSaleSummaries`, null);
function de(e) {
  let {
    data: t,
    isLoading: r,
    isError: i,
  } = g({
    queryKey: [`contenthubsummary`, e.type, e.handle],
    queryFn: async () => {
      let t = {
          contenthubcategorytype: e.type,
          handle: e.handle,
          sessionid: n(),
        },
        r = `${o.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubsummary`,
        i = await x.default.get(r, { params: t });
      return i.status == 200 && i.data?.top_apps?.length > 0 ? i.data : null;
    },
  });
  return {
    rgTopApps: r || i || !t ? null : t?.top_apps,
    nTotalGames: r || i || !t ? null : t?.total_games,
    isError: i,
  };
}
function j(e) {
  let {
    data: t,
    isLoading: r,
    isError: i,
  } = g({
    queryKey: [`contenthubapplist`, e.type, e.handle],
    queryFn: async () => {
      let t = {
          contenthubcategorytype: e.type,
          handle: e.handle,
          sessionid: n(),
        },
        r = `${o.PARTNER_BASE_URL}promotion/planning/ajaxgetcontenthubapplist`,
        i = await x.default.get(r, { params: t });
      return i.status == 200 && i.data?.apps?.length > 0 ? i.data : null;
    },
  });
  return t?.apps || null;
}
function M(e, t, n) {
  return {
    musthaveall: (e || [])
      .filter(Boolean)
      .map((e) => e.id)
      .sort()
      .join(`,`),
    musthaveany: (t || [])
      .filter(Boolean)
      .map((e) => e.id)
      .sort()
      .join(`,`),
    mustnothaveany: (n || [])
      .filter(Boolean)
      .map((e) => e.id)
      .sort()
      .join(`,`),
  };
}
var N = { total_games: 0, all_appid: [], top_games: [] };
function P(e, t, r) {
  let { musthaveall: i, musthaveany: a, mustnothaveany: s } = M(e, t, r),
    {
      data: c,
      isLoading: l,
      isError: u,
    } = g({
      queryKey: [`useContentHubCategoryEditorFullAppList`, i, a, s],
      queryFn: async () => {
        let e = {
            musthaveall: i,
            musthaveany: a,
            mustnothaveany: s,
            sessionid: n(),
          },
          t = `${o.PARTNER_BASE_URL}promotion/planning/ajaxgetcategoryeditorapplist`,
          r = await x.default.get(t, { params: e });
        return r.status == 200 && r.data?.top_games?.length > 0 ? r.data : null;
      },
      enabled: i.length != 0 || a.length != 0 || s.length != 0,
    });
  return i.length == 0 && a.length == 0 && s.length == 0 ? N : c || null;
}
function F(e, t, n) {
  let r = P(e, t, n),
    i = (0, S.useMemo)(() => {
      let { musthaveall: r, musthaveany: i, mustnothaveany: a } = M(e, t, n);
      return { type: `category_editor`, handle: r + `_` + i + `_` + a };
    }, [e, t, n]),
    [a, o] = (0, S.useState)(A.Get().GetContentHubSaleSummary(i));
  return (
    (0, S.useEffect)(() => {
      r?.all_appid?.length &&
        !a &&
        A.Get().LoadContentHubSaleSummary(i, r.all_appid);
    }, [i, r, a]),
    d(A.Get().GetContentHubSummaryChangeCallback(i), o),
    a
  );
}
function I(e, t, n) {
  let r = (0, S.useMemo)(() => {
      let { musthaveall: r, musthaveany: i, mustnothaveany: a } = M(e, t, n);
      return { type: `category_editor`, handle: r + `_` + i + `_` + a };
    }, [e, t, n]),
    [i, a] = (0, S.useState)(A.Get().GetTopAppSummary(r));
  return d(A.Get().GetContentHubTopAppSaleSummaryChangeCallback(r), a), i;
}
function L(e) {
  let t = j(e),
    [n, r] = (0, S.useState)(A.Get().GetContentHubSaleSummary(e));
  return (
    (0, S.useEffect)(() => {
      t?.length && !n && A.Get().LoadContentHubSaleSummary(e, t);
    }, [e, e.type, e.handle, t, n]),
    d(A.Get().GetContentHubSummaryChangeCallback(e), r),
    n
  );
}
function R(e) {
  let [t, n] = (0, S.useState)(
    A.Get().GetAppSummaryObject().GetAppSaleSummary(e),
  );
  return (
    d(A.Get().GetAppSummaryObject().GetAppSaleSummaryChangeCallback(e), n), t
  );
}
function z(e) {
  let [t, n] = (0, S.useState)(A.Get().GetTopAppSummary(e));
  return d(A.Get().GetContentHubTopAppSaleSummaryChangeCallback(e), n), t;
}
function B() {
  let [e, t] = (0, S.useState)(A.Get().GetSummaryAnalysis());
  return (
    (0, S.useEffect)(() => {
      A.Get().LoadCachedSaleSummaries();
    }, []),
    d(A.Get().GetSummaryAnalysisChange(), t),
    e
  );
}
var V = s(oe()),
  H = `zDqf95flXsQ-`,
  fe = `NubtcOb7MrQ-`,
  pe = `VMmPDg-0ono-`,
  me = `iqEenrc0kwo-`,
  he = `LTl5z4XAdwg-`,
  U = `i-owVktN2Zc-`,
  ge = `_7f-3DvInoM8-`,
  W = `ScUBiRh-cLk-`,
  _e = `vHirFfI2Eeo-`,
  ve = `RId7I-dx2oU-`,
  ye = `lOyCRAsA9mI-`,
  G = `-qcT2VH76o4-`,
  be = `raC0Dc1DtPo-`,
  xe = `PwJtUUOCEoQ-`,
  Se = `yNoKfZlDv7k-`,
  K = `NOL8XDNbcWM-`,
  Ce = `vRby4-J8FJY-`,
  q = `_5JKZLtgwSTE-`,
  J = r(),
  we = `0px 0px 100% 0px`,
  Y = 5e3;
function Te(e) {
  let [t, n] = (0, S.useState)(!0),
    r = T(),
    i = (0, S.useMemo)(
      () => (r?.length > 0 ? r.filter((e) => !!e.type) : null),
      [r],
    );
  return !i || i.length == 0
    ? (0, J.jsx)(y, { string: p(`#Loading`) })
    : (0, J.jsxs)(`div`, {
        children: [
          (0, J.jsxs)(`div`, {
            children: [
              (0, J.jsxs)(`div`, {
                className: K,
                children: [
                  (0, J.jsx)(`h1`, {
                    children: `Theme Sale Planning Dashboard`,
                  }),
                  (0, J.jsxs)(`div`, {
                    className: Ce,
                    children: [
                      !t &&
                        (0, J.jsxs)(ee, {
                          onClick: () => n(!0),
                          children: [`Load `, 120, ` Days of Sale Summaries`],
                        }),
                      (0, J.jsx)(je, {}),
                    ],
                  }),
                ],
              }),
              (0, J.jsx)(`div`, {
                className: q,
                children: (0, J.jsxs)(`ul`, {
                  children: [
                    (0, J.jsxs)(`li`, {
                      children: [
                        `Themes are currently make from all of the categories that are defined on this`,
                        ` `,
                        (0, J.jsx)(`a`, {
                          href: `${o.PARTNER_BASE_URL}admin/store/contenthub/categories`,
                          children: `categories editor page.`,
                        }),
                      ],
                    }),
                    (0, J.jsxs)(`li`, {
                      children: [
                        `Hubs with more than `,
                        Y,
                        ` games are called out as 'too big'.`,
                      ],
                    }),
                    (0, J.jsx)(`li`, {
                      children: `Sales rank shown for individual games is long-term and includes all sources of revenue.`,
                    }),
                    (0, J.jsx)(`li`, {
                      children: `Revenue shown is computed over the past 45 days and only using base games package revenue (a technical limitation for now) `,
                    }),
                  ],
                }),
              }),
            ],
          }),
          i.map((e, n) => (0, J.jsx)(Ee, { category: e, bSaleSummary: t }, n)),
        ],
      });
}
function Ee(e) {
  let { category: t, bSaleSummary: n } = e;
  return (0, J.jsx)(ae, {
    placeholderHeight: 250,
    rootMargin: we,
    children: (0, J.jsx)(De, { category: t, bSaleSummary: n }),
  });
}
function X(t) {
  let { nTotalGames: n } = t,
    r,
    i;
  return (
    n > 500 && n <= 5e3
      ? ((r = pe), (i = `Good size!`))
      : n > 5e3
        ? ((r = me), (i = `Too big`))
        : ((r = he), (i = `Too small`)),
    (0, J.jsxs)(`div`, {
      className: e(fe, r),
      children: [b(n), ` games ( `, i, `)`],
    })
  );
}
function De(e) {
  let { category: t, bSaleSummary: n } = e,
    { rgTopApps: r, nTotalGames: i } = de(t),
    a = i > 500 && i <= 5e3;
  return (0, J.jsxs)(`div`, {
    className: H,
    children: [
      (0, J.jsxs)(`div`, {
        className: U,
        children: [
          (0, J.jsx)(`a`, {
            href: `${o.STORE_BASE_URL}category/${t.handle}`,
            className: xe,
            children: t.loc_token ? p(t.loc_token) : t.handle,
          }),
          (0, J.jsx)(X, { nTotalGames: i }),
          (0, J.jsx)(`div`, {
            className: void 0,
            children: !!(n && a) && (0, J.jsx)(Ae, { category: t }),
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: W,
        children: [
          (0, J.jsx)(`div`, { children: `Top 10 Games non-F2P:` }),
          (0, J.jsx)(`div`, {
            className: ve,
            children: r
              ?.slice(0, 10)
              .map((e) =>
                (0, J.jsx)(
                  Z,
                  { info: e, category: t, bSaleSummary: n && a },
                  e.appid,
                ),
              ),
          }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: _e,
        children: [`handle: `, t.handle, (0, J.jsx)(ke, { category: t })],
      }),
    ],
  });
}
function Z(e) {
  let { info: t, bSaleSummary: n } = e,
    r = ie(t.appid),
    { data: i } = m(r),
    { data: a } = te(r);
  return a && i
    ? (0, J.jsxs)(`div`, {
        className: G,
        children: [
          (0, J.jsx)(h, {
            id: r,
            hoverProps: {
              direction: `overlay`,
              style: { minWidth: `320px`, maxWidth: `320px` },
            },
            className: be,
            children: (0, J.jsx)(`a`, {
              href: ne(a),
              children: (0, J.jsx)(`img`, {
                src: re(i, `header`),
                alt: a.name,
              }),
            }),
          }),
          (0, J.jsxs)(`div`, {
            children: [`\xA0Rank: `, t.long_term_sale_rank],
          }),
          !!n && (0, J.jsx)(Oe, { ...e }),
        ],
      })
    : (0, J.jsxs)(`div`, {
        children: [
          `Loading appid: `,
          t.appid,
          ` with rank: `,
          t.long_term_sale_rank,
        ],
      });
}
function Oe(e) {
  let { info: t, category: n } = e,
    r = R(t.appid),
    i = L(n);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      !!r &&
        (0, J.jsxs)(`div`, {
          children: [` `, `$`, b(Math.floor(r.gross_sales_usd / 100))],
        }),
      !!(r && i?.gross_sales_usd) &&
        (0, J.jsxs)(`div`, {
          children: [
            `( `,
            ((r.gross_sales_usd / i.gross_sales_usd) * 100).toFixed(2),
            `% of hub )`,
          ],
        }),
    ],
  });
}
function ke(e) {
  let { mapStoreTags: t, mapStoreCategories: n } = O(),
    { category: r } = e;
  return !t || !n || (!r.any && !r.must && !r.mustnot)
    ? null
    : (0, J.jsxs)(`div`, {
        className: Se,
        children: [
          !!r.must &&
            (0, J.jsxs)(`div`, {
              children: [
                (0, J.jsx)(`span`, {
                  className: `NQSeTXtz7dY-`,
                  children: `Must:`,
                }),
                ` `,
                r.must?.map((e) =>
                  (0, J.jsx)(
                    Q,
                    { type: r.type, id: e.id },
                    r.type + `_` + e.id + `_` + r.handle,
                  ),
                ),
              ],
            }),
          !!r.any &&
            (0, J.jsxs)(`div`, {
              children: [
                (0, J.jsx)(`span`, {
                  className: `QAJ7Zg1CBSE-`,
                  children: `Any:`,
                }),
                ` `,
                r.any?.map((e) =>
                  (0, J.jsx)(
                    Q,
                    { type: r.type, id: e.id },
                    r.type + `_` + e.id + `_` + r.handle,
                  ),
                ),
              ],
            }),
          !!r.mustnot &&
            (0, J.jsxs)(`div`, {
              children: [
                (0, J.jsx)(`span`, {
                  className: `S4Jd6TDI13Y-`,
                  children: `Must Not:`,
                }),
                ` `,
                r.mustnot?.map((e) =>
                  (0, J.jsx)(
                    Q,
                    { type: r.type, id: e.id },
                    r.type + `_` + e.id + `_` + r.handle,
                  ),
                ),
              ],
            }),
        ],
      });
}
function Q(e) {
  let { mapStoreTags: t, mapStoreCategories: n } = O(),
    { type: r, id: i } = e;
  return r == `tagids`
    ? (0, J.jsxs)(`span`, {
        children: [t.has(i) ? t.get(i).name : `tagid: ` + i, `, `],
      })
    : (0, J.jsxs)(`span`, {
        children: [n.has(i) ? n.get(i).name : `category id: ` + i, `, `],
      });
}
function $(e) {
  let { saleSummary: t, topAppSummary: n } = e;
  return t
    ? (0, J.jsx)(`div`, {
        className: ge,
        children: (0, J.jsx)(`table`, {
          children: (0, J.jsx)(`tbody`, {
            children: (0, J.jsxs)(`tr`, {
              children: [
                (0, J.jsxs)(`td`, {
                  children: [
                    `Total: `,
                    (0, J.jsx)(`br`, {}),
                    `$`,
                    b(Math.floor(t.gross_sales_usd / 100)),
                  ],
                }),
                (0, J.jsxs)(`td`, {
                  children: [
                    `Per Day: `,
                    (0, J.jsx)(`br`, {}),
                    `$`,
                    b(Math.floor(t.gross_sales_usd / 12e3)),
                  ],
                }),
                (0, J.jsxs)(`td`, {
                  children: [
                    `Total Units: `,
                    (0, J.jsx)(`br`, {}),
                    b(t.gross_units_sold),
                  ],
                }),
                (0, J.jsxs)(`td`, {
                  children: [
                    `Units Per Day: `,
                    (0, J.jsx)(`br`, {}),
                    b(Math.floor(t.gross_units_sold / 120)),
                  ],
                }),
                t.gross_sales_usd > 0 &&
                  (0, J.jsx)(J.Fragment, {
                    children: (0, J.jsxs)(`td`, {
                      children: [
                        `Top `,
                        10,
                        ` Apps: `,
                        (0, J.jsx)(`br`, {}),
                        (0, J.jsxs)(`span`, {
                          className:
                            (n.gross_sales_usd / t.gross_sales_usd) * 100 > 90
                              ? `iqEenrc0kwo-`
                              : `VMmPDg-0ono-`,
                          children: [
                            (
                              (n.gross_sales_usd / t.gross_sales_usd) *
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
    : (0, J.jsx)(y, { position: `center`, string: `Loading Sale Info` });
}
function Ae(e) {
  let { category: t } = e,
    n = L(t),
    r = z(t);
  return (0, J.jsx)($, { saleSummary: n, topAppSummary: r });
}
function je(e) {
  let t = B();
  return (0, J.jsx)(`a`, {
    href: `data:application/octet-stream,${encodeURIComponent(V.default.unparse({ data: t, fields: Object.keys(t ? t[0] : {}) }))}`,
    download: `theme_sale_stats.csv`,
    children: `Export CSV`,
  });
}
export {
  ce as _,
  Y as a,
  E as b,
  G as c,
  H as d,
  W as f,
  k as g,
  I as h,
  Te as i,
  ye as l,
  F as m,
  X as n,
  q as o,
  P as p,
  Z as r,
  K as s,
  $ as t,
  U as u,
  C as v,
  le as x,
  se as y,
};
