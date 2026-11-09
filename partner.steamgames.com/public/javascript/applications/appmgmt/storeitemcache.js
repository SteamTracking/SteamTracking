/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { $t as e, E as t, k as n, nt as r, vt as i } from "./mobx.esm.js";
import { Rt as a } from "./src.js";
import { A as o, j as s } from "./storebrowsequerycontext.js";
import { N as c, R as l, V as u, z as d } from "./react-router.js";
import { L as f, R as p, t as m, z as h } from "./storeitem.js";
import { t as g } from "./axiosutils.js";
import { t as _ } from "./debugglobal.js";
import { r as v, t as y } from "./browserapi.js";
function b() {}
function x(e, t) {
  return e
    ? t
      ? {
          include_assets: e.include_assets || t.include_assets,
          include_release: e.include_release || t.include_release,
          include_platforms: e.include_platforms || t.include_platforms,
          include_all_purchase_options:
            e.include_all_purchase_options || t.include_all_purchase_options,
          include_screenshots: e.include_screenshots || t.include_screenshots,
          include_trailers: e.include_trailers || t.include_trailers,
          include_ratings: e.include_ratings || t.include_ratings,
          include_tag_count:
            Math.max(e.include_tag_count || 0, t.include_tag_count || 0) ||
            void 0,
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
          include_full_description:
            e.include_full_description || t.include_full_description,
          include_included_items:
            e.include_included_items || t.include_included_items,
          include_assets_without_overrides:
            e.include_assets_without_overrides ||
            t.include_assets_without_overrides,
          apply_user_filters: e.apply_user_filters || t.apply_user_filters,
          include_links: e.include_links || t.include_links,
          include_extra_details:
            e.include_extra_details || t.include_extra_details,
          include_optin_registration_tags:
            e.include_optin_registration_tags ||
            t.include_optin_registration_tags,
        }
      : e
    : t;
}
async function S(e, t) {
  let n = await e,
    r = await t;
  return n == 1 ? r : n;
}
var C = class n {
  k_QueueWaitUntilRequestMS = 5;
  k_nMaxBatchSize = 250;
  m_bReturnUnavailableItems = !1;
  m_mapApps = new Map();
  m_mapPackages = new Map();
  m_mapBundles = new Map();
  m_mapTags = new Map();
  m_mapCreators = new Map();
  m_mapHubCategories = new Map();
  m_setUnavailableApps = new Set();
  m_setUnavailablePackages = new Set();
  m_setUnavailableBundles = new Set();
  m_setUnavailableTags = new Set();
  m_setUnavailableCreators = new Set();
  m_setUnavailableHubCategories = new Set();
  m_setUnavailableDueToCountryRestrictionApps = new Set();
  m_setUnavailableDueToCountryRestrictionPackages = new Set();
  m_setUnavailableDueToCountryRestrictionBundles = new Set();
  m_mapAppsInFlight = new Map();
  m_mapPackageInFlight = new Map();
  m_mapBundleInFlight = new Map();
  m_mapTagsInFlight = new Map();
  m_mapCreatorsInFlight = new Map();
  m_mapHubCategoriesInFlight = new Map();
  m_serviceTransport;
  m_bUsePartnerAPI = !1;
  m_bInitialized = !1;
  m_bActivelyResettingCache = !1;
  m_setPendingAppInfo = new Set();
  m_setPendingBundleInfo = new Set();
  m_setPendingPackageInfo = new Set();
  m_setPendingTagInfo = new Set();
  m_setPendingCreatorInfo = new Set();
  m_setPendingHubCategoryInfo = new Set();
  m_setPendingDataRequest = {};
  m_PendingInfoPromise;
  m_PendingInfoResolve = void 0;
  m_PendingTimer = void 0;
  k_AlreadyResolvedOK = Promise.resolve(1);
  k_AlreadyResolvedInvalid = Promise.resolve(8);
  k_AlreadyResolvedBusy = Promise.resolve(10);
  static sm_instance;
  static Get() {
    return (
      n.sm_instance ||
        ((n.sm_instance = new n()), _(`StoreItemCache`, n.sm_instance)),
      n.sm_instance
    );
  }
  static Initialize(t, r) {
    let i = n.Get();
    return (
      e(
        !i.m_bInitialized,
        `CStoreItemCache was already initialized; initialize it only once.`,
      ),
      (i.m_serviceTransport = t),
      (i.m_bUsePartnerAPI = !!r),
      (i.m_bInitialized = !0),
      () => {
        ((i.m_serviceTransport = void 0),
          (i.m_bUsePartnerAPI = !1),
          (i.m_bInitialized = !1));
      }
    );
  }
  SetSteamInterface(e) {
    this.SetServiceTransport(e.GetServiceTransport());
  }
  SetServiceTransport(e) {
    this.m_serviceTransport = e;
  }
  SetReturnUnavailableItems(e) {
    this.m_bReturnUnavailableItems = e;
  }
  GetReturnUnavailableItems() {
    return this.m_bReturnUnavailableItems;
  }
  async ResetCache() {
    ((this.m_bActivelyResettingCache = !0), this.FlushPendingInfo());
    let e = [];
    (this.m_mapAppsInFlight.forEach((t) => {
      e.push(t.promise);
    }),
      this.m_mapBundleInFlight.forEach((t) => {
        e.push(t.promise);
      }),
      this.m_mapPackageInFlight.forEach((t) => {
        e.push(t.promise);
      }),
      this.m_mapTagsInFlight.forEach((t) => {
        e.push(t.promise);
      }),
      this.m_mapCreatorsInFlight.forEach((t) => {
        e.push(t.promise);
      }),
      this.m_mapHubCategoriesInFlight.forEach((t) => {
        e.push(t.promise);
      }),
      await Promise.all(e),
      this.m_mapApps.clear(),
      this.m_mapBundles.clear(),
      this.m_mapPackages.clear(),
      this.m_mapTagsInFlight.clear(),
      this.m_mapCreatorsInFlight.clear(),
      this.m_mapHubCategoriesInFlight.clear(),
      (this.m_bActivelyResettingCache = !1));
  }
  static BIsInitialized() {
    return n.Get().m_bInitialized;
  }
  static k_DataRequest_CommonOnly = {};
  static k_DataRequest_BasicInfo = { include_basic_info: !0 };
  static k_DataRequest_Assets = { include_assets: !0 };
  static k_DataRequest_IncludeAll = {
    include_assets: !0,
    include_release: !0,
    include_platforms: !0,
    include_all_purchase_options: !0,
    include_screenshots: !0,
    include_trailers: !0,
    include_ratings: !0,
    include_tag_count: 20,
    include_reviews: !0,
    include_basic_info: !0,
    include_supported_languages: !0,
    include_full_description: !0,
    include_links: !0,
  };
  async QueueAppRequest(e, t) {
    return this.QueueStoreItemRequest(e, 0, t);
  }
  async QueuePackageRequest(e, t) {
    return this.QueueStoreItemRequest(e, 1, t);
  }
  async QueueBundleRequest(e, t) {
    return this.QueueStoreItemRequest(e, 2, t);
  }
  async QueueTagRequest(e, t) {
    return this.QueueStoreItemRequest(e, 4, t);
  }
  async QueueCreatorRequest(e, t) {
    return this.QueueStoreItemRequest(e, 5, t);
  }
  async QueueHubCategoryRequest(e, t) {
    return this.QueueStoreItemRequest(e, 6, t);
  }
  static ValidateDataRequest(e) {
    let t = [
      e.include_assets,
      e.include_release,
      e.include_platforms,
      e.include_all_purchase_options,
      e.include_screenshots,
      e.include_trailers,
      e.include_ratings,
      e.include_reviews,
      e.include_basic_info,
      e.include_supported_languages,
      e.include_full_description,
      e.include_links,
    ];
    for (let e of t) if (e !== !0 && e !== void 0) return !1;
    return !0;
  }
  async QueueMultipleAppRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 0, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultiplePackageRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 1, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultipleBundleRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 2, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultipleTagRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 4, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultipleCreatorRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 5, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultipleHubCategoryRequests(e, t) {
    if (!e || e.length == 0) return 1;
    let n = (
      await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 6, t)))
    ).filter((e) => e != 1);
    return n.length > 0 ? n[0] : 1;
  }
  async QueueMultipleStoreItemRequests(e, t, n) {
    if (!e || e.length == 0) return 1;
    let r = (
      await Promise.all(e.map((e, r) => this.QueueStoreItemRequest(e, t[r], n)))
    ).filter((e) => e != 1);
    return r.length > 0 ? r[0] : 1;
  }
  async QueueStoreItemRequest(t, r, i) {
    if (
      (e(
        n.ValidateDataRequest(i),
        `Invalid Data Request: ` + JSON.stringify(i),
      ),
      typeof t == `string` && (t = parseInt(t)),
      this.m_bActivelyResettingCache)
    )
      return (
        console.log(
          `Rejecting store item request due to currently clearing the cache`,
        ),
        this.k_AlreadyResolvedBusy
      );
    if (!t)
      return (
        e(!t, `unexpected id ${t} of zero or undefined for type ${r}`),
        this.k_AlreadyResolvedInvalid
      );
    let a = this.GetPreviousSupersetLoadPromise(t, r, i);
    if (a) return a;
    switch (
      (this.m_PendingInfoPromise ||
        ((this.m_PendingInfoPromise = new Promise(
          (e) => (this.m_PendingInfoResolve = e),
        )),
        (this.m_PendingTimer = window.setTimeout(
          () => this.FlushPendingInfo(),
          this.k_QueueWaitUntilRequestMS,
        ))),
      (this.m_setPendingDataRequest = x(this.m_setPendingDataRequest, i)),
      r)
    ) {
      case 0:
        this.m_setPendingAppInfo.add(t);
        break;
      case 2:
        this.m_setPendingBundleInfo.add(t);
        break;
      case 1:
        this.m_setPendingPackageInfo.add(t);
        break;
      case 4:
        this.m_setPendingTagInfo.add(t);
        break;
      case 5:
        this.m_setPendingCreatorInfo.add(t);
        break;
      case 6:
        this.m_setPendingHubCategoryInfo.add(t);
        break;
      default:
        e(!1, `Unexpected Type ${r}`);
    }
    let o = this.m_PendingInfoPromise;
    return (
      this.m_setPendingAppInfo.size +
        this.m_setPendingPackageInfo.size +
        this.m_setPendingBundleInfo.size >=
        this.k_nMaxBatchSize &&
        (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
        this.FlushPendingInfo()),
      o
    );
  }
  async FlushPendingInfo() {
    if (this.m_PendingInfoResolve === void 0) return;
    let e = this.m_PendingInfoResolve,
      t = Array.from(this.m_setPendingAppInfo),
      n = Array.from(this.m_setPendingPackageInfo),
      r = Array.from(this.m_setPendingBundleInfo),
      i = Array.from(this.m_setPendingTagInfo),
      a = Array.from(this.m_setPendingCreatorInfo),
      o = Array.from(this.m_setPendingHubCategoryInfo),
      s = this.m_setPendingDataRequest;
    ((this.m_PendingInfoPromise = void 0),
      (this.m_PendingInfoResolve = void 0),
      this.m_setPendingAppInfo.clear(),
      this.m_setPendingBundleInfo.clear(),
      this.m_setPendingPackageInfo.clear(),
      this.m_setPendingTagInfo.clear(),
      this.m_setPendingCreatorInfo.clear(),
      this.m_setPendingHubCategoryInfo.clear(),
      (this.m_setPendingDataRequest = {}),
      (this.m_PendingTimer = void 0),
      this.HintLoadStoreItems(t, n, r, i, a, o, s).then((t) => e(t)));
  }
  async HintLoadStoreApps(e, t) {
    return this.HintLoadStoreItems(e, null, null, null, null, null, t);
  }
  async HintLoadStorePackages(e, t) {
    return this.HintLoadStoreItems(null, e, null, null, null, null, t);
  }
  async HintLoadStoreBundles(e, t) {
    return this.HintLoadStoreItems(null, null, e, null, null, null, t);
  }
  GetPreviousSupersetLoadPromise(e, t, n) {
    if (this.BHasStoreItem(e, t, n) || this.BIsStoreItemMissing(e, t))
      return this.k_AlreadyResolvedOK;
    let r = null;
    switch (t) {
      case 0:
        r = this.m_mapAppsInFlight.get(e);
        break;
      case 1:
        r = this.m_mapPackageInFlight.get(e);
        break;
      case 2:
        r = this.m_mapBundleInFlight.get(e);
        break;
      case 4:
        r = this.m_mapTagsInFlight.get(e);
        break;
      case 5:
        r = this.m_mapCreatorsInFlight.get(e);
        break;
      case 6:
        r = this.m_mapHubCategoriesInFlight.get(e);
    }
    return r && m.BDataRequestContainsOtherDataRequest(r.dataRequest, n)
      ? r.promise
      : null;
  }
  async HintLoadStoreItems(e, t, n, r, i, a, o) {
    let s = null,
      c = new Promise((e) => (s = e)),
      l = [],
      d = [];
    ((e || []).forEach((e) => {
      let t = this.GetPreviousSupersetLoadPromise(e, 0, o);
      if (t) d.push(t);
      else {
        l.push(u.fromObject({ appid: e }));
        let t = x(this.GetStoreItemDataRequest(e, 0), o),
          n = this.m_mapAppsInFlight.get(e);
        ((t = x(n?.dataRequest, t)),
          n && d.push(n.promise),
          this.m_mapAppsInFlight.set(e, {
            promise: n ? S(n.promise, c) : c,
            dataRequest: t,
          }));
      }
    }),
      (t || []).forEach((e) => {
        let t = this.GetPreviousSupersetLoadPromise(e, 1, o);
        if (t) d.push(t);
        else {
          l.push(u.fromObject({ packageid: e }));
          let t = x(this.GetStoreItemDataRequest(e, 1), o),
            n = this.m_mapPackageInFlight.get(e);
          ((t = x(n?.dataRequest, t)),
            n && d.push(n.promise),
            this.m_mapPackageInFlight.set(e, {
              promise: n ? S(n.promise, c) : c,
              dataRequest: t,
            }));
        }
      }),
      (n || []).forEach((e) => {
        let t = this.GetPreviousSupersetLoadPromise(e, 2, o);
        if (t) d.push(t);
        else {
          l.push(u.fromObject({ bundleid: e }));
          let t = x(this.GetStoreItemDataRequest(e, 2), o),
            n = this.m_mapBundleInFlight.get(e);
          ((t = x(n?.dataRequest, t)),
            n && d.push(n.promise),
            this.m_mapBundleInFlight.set(e, {
              promise: n ? S(n.promise, c) : c,
              dataRequest: t,
            }));
        }
      }),
      (r || []).forEach((e) => {
        let t = this.GetPreviousSupersetLoadPromise(e, 4, o);
        if (t) d.push(t);
        else {
          l.push(u.fromObject({ tagid: e }));
          let t = x(this.GetStoreItemDataRequest(e, 4), o),
            n = this.m_mapTagsInFlight.get(e);
          ((t = x(n?.dataRequest, t)),
            n && d.push(n.promise),
            this.m_mapTagsInFlight.set(e, {
              promise: n ? S(n.promise, c) : c,
              dataRequest: t,
            }));
        }
      }),
      (i || []).forEach((e) => {
        let t = this.GetPreviousSupersetLoadPromise(e, 5, o);
        if (t) d.push(t);
        else {
          l.push(u.fromObject({ creatorid: e }));
          let t = x(this.GetStoreItemDataRequest(e, 5), o),
            n = this.m_mapCreatorsInFlight.get(e);
          ((t = x(n?.dataRequest, t)),
            n && d.push(n.promise),
            this.m_mapCreatorsInFlight.set(e, {
              promise: n ? S(n.promise, c) : c,
              dataRequest: t,
            }));
        }
      }),
      (a || []).forEach((e) => {
        let t = this.GetPreviousSupersetLoadPromise(e, 6, o);
        if (t) d.push(t);
        else {
          l.push(u.fromObject({ hubcategoryid: e }));
          let t = x(this.GetStoreItemDataRequest(e, 6), o),
            n = this.m_mapHubCategoriesInFlight.get(e);
          ((t = x(n?.dataRequest, t)),
            n && d.push(n.promise),
            this.m_mapHubCategoriesInFlight.set(e, {
              promise: n ? S(n.promise, c) : c,
              dataRequest: t,
            }));
        }
      }));
    let f = 1;
    if (
      (l.length > 0 && (f = await this.InternalHandleLoadStoreItems(l, o)),
      s(f),
      d.length > 0)
    ) {
      let e = await Promise.all(d);
      for (let t of e) t != 1 && f == 1 && (f = t);
    }
    return (
      (e || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
      (t || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
      (n || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
      (r || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
      (i || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
      (a || []).forEach((e) => this.m_mapHubCategoriesInFlight.delete(e)),
      f
    );
  }
  MarkStoreItemIDUnavailable(e) {
    (e || []).forEach((e) => {
      e.appid()
        ? (this.m_setUnavailableApps.add(e.appid()),
          this.m_mapApps.delete(e.appid()))
        : e.packageid()
          ? (this.m_setUnavailablePackages.add(e.packageid()),
            this.m_mapPackages.delete(e.packageid()))
          : e.bundleid()
            ? (this.m_setUnavailableBundles.add(e.bundleid()),
              this.m_mapBundles.delete(e.bundleid()))
            : e.tagid()
              ? (this.m_setUnavailableTags.add(e.tagid()),
                this.m_mapTags.delete(e.tagid()))
              : e.creatorid()
                ? (this.m_setUnavailableCreators.add(e.creatorid()),
                  this.m_mapCreators.delete(e.creatorid()))
                : e.hubcategoryid() &&
                  (this.m_setUnavailableHubCategories.add(e.hubcategoryid()),
                  this.m_mapHubCategories.delete(e.hubcategoryid()));
    });
  }
  SortStoreItems(e) {
    let t = e.slice();
    return (
      t.sort((e, t) => {
        let n = e.appid() ?? 0,
          r = t.appid() ?? 0;
        if (n != r) return n - r;
        let i = e.packageid() ?? 0,
          a = t.packageid() ?? 0;
        if (i != a) return i - a;
        let o = e.bundleid() ?? 0,
          s = t.bundleid() ?? 0;
        if (o != s) return o - s;
        let c = e.tagid() ?? 0,
          l = t.tagid() ?? 0;
        if (c != l) return c - l;
        let u = e.creatorid() ?? 0,
          d = t.creatorid() ?? 0;
        if (u != d) return u - d;
        let f = e.hubcategoryid() ?? 0,
          p = t.hubcategoryid() ?? 0;
        return f == p ? 0 : f - p;
      }),
      t
    );
  }
  GetServiceTransport() {
    return (
      (this.m_serviceTransport ||=
        (console.warn(`Service transport not initialized for StoreItemCache`),
        y(new v(r.WEBAPI_BASE_URL)).GetAnonymousServiceTransport())),
      this.m_serviceTransport
    );
  }
  async InternalHandleLoadStoreItems(e, n) {
    let a = 1;
    ((e = this.SortStoreItems(e)),
      n.include_included_items &&
        (n = {
          ...n,
          included_item_data_request: { ...n, include_included_items: !1 },
        }));
    let u = [];
    try {
      let m = [];
      for (; e.length > 0;) {
        let t = e.splice(0, this.k_nMaxBatchSize);
        if ((u.push(t), this.m_bUsePartnerAPI)) {
          let e = i.Init(o);
          e.Body().set_include_unpublished(!1);
          let r = e.Body().getitems_request(!0);
          (r.set_context(f(this.m_bUsePartnerAPI)),
            r.set_data_request(l.fromObject(n)),
            r.set_ids(t),
            m.push(s.GetItems(this.GetServiceTransport(), e)));
        } else {
          let e = i.Init(c);
          (p(e, this.m_bUsePartnerAPI),
            h(e, n),
            e.Body().set_ids(t),
            m.push(d.GetItems(this.GetServiceTransport(), e)));
        }
      }
      (await Promise.all(m)).forEach((i, o) => {
        i.GetEResult() == 1
          ? i
              .Body()
              .store_items()
              .forEach((r) => {
                let a = r.id(),
                  o = r.item_type(),
                  s = this.m_bReturnUnavailableItems && r.success() == 15,
                  c = r.success() == 1 && !this.BIsStoreItemMissing(a, o);
                if (s || c) this.ReadItem(r, n);
                else {
                  switch (o) {
                    case 0:
                      (this.m_setUnavailableApps.add(a),
                        this.m_mapApps.delete(a));
                      break;
                    case 1:
                      (this.m_setUnavailablePackages.add(a),
                        this.m_mapPackages.delete(a));
                      break;
                    case 2:
                      (this.m_setUnavailableBundles.add(a),
                        this.m_mapBundles.delete(a));
                      break;
                    case 4:
                      (this.m_setUnavailableTags.add(a),
                        this.m_mapTags.delete(a));
                      break;
                    case 5:
                      (this.m_setUnavailableCreators.add(a),
                        this.m_mapCreators.delete(a));
                      break;
                    case 6:
                      (this.m_setUnavailableHubCategories.add(a),
                        this.m_mapHubCategories.delete(a));
                      break;
                    default:
                      console.error(
                        `CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response ` +
                          o +
                          ` ` +
                          a,
                      );
                  }
                  if (r.unvailable_for_country_restriction())
                    switch (o) {
                      case 0:
                        this.m_setUnavailableDueToCountryRestrictionApps.add(a);
                        break;
                      case 1:
                        this.m_setUnavailableDueToCountryRestrictionPackages.add(
                          a,
                        );
                        break;
                      case 2:
                        this.m_setUnavailableDueToCountryRestrictionBundles.add(
                          a,
                        );
                        break;
                      case 4:
                      case 5:
                      case 6:
                        console.error(
                          `CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: ` +
                            i.GetEResult() +
                            ` message: ` +
                            i.Hdr().error_message(),
                          t(e),
                        );
                    }
                }
              })
          : (console.warn(
              `CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: ` +
                i.GetEResult() +
                ` message: ` +
                i.Hdr().error_message(),
              t(e),
            ),
            (i.Hdr().transport_error() == 1 || r.FROM_WEB) &&
              this.MarkStoreItemIDUnavailable(u[o]),
            a == 1 && (a = i.GetEResult()));
      });
    } catch (e) {
      let t = g(e);
      return (
        console.error(
          `CStoreItemCache::InternalHandleLoadStoreItems failed: ` +
            t.strErrorMsg,
          t,
        ),
        u.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
        79
      );
    }
    return a;
  }
  GetMapForType(e) {
    let t;
    switch (e) {
      case 0:
        t = this.m_mapApps;
        break;
      case 2:
        t = this.m_mapBundles;
        break;
      case 1:
        t = this.m_mapPackages;
        break;
      case 4:
        t = this.m_mapTags;
        break;
      case 5:
        t = this.m_mapCreators;
        break;
      case 6:
        t = this.m_mapHubCategories;
        break;
      default:
        console.error(`Invalid map type requested`, e);
    }
    return t;
  }
  BHasStoreItem(e, t, n) {
    let r = this.GetMapForType(t);
    return !(!r || !r.has(e) || (n && !r.get(e).BContainDataRequest(n)));
  }
  GetStoreItem(e, t) {
    if (t != -1 && t != 3) return this.GetMapForType(t)?.get(e);
  }
  GetStoreItemWithLegacyVisibilityCheck(e, t) {
    let n = this.GetStoreItem(e, t);
    return n && (this.m_bReturnUnavailableItems || n.BIsVisible()) ? n : void 0;
  }
  GetStoreItemDataRequest(e, t) {
    return this.GetMapForType(t)?.get(e)?.GetDataRequest() || null;
  }
  BHasApp(e, t) {
    return this.BHasStoreItem(e, 0, t);
  }
  GetApp(e) {
    return this.GetStoreItem(e, 0);
  }
  BHasPackage(e, t) {
    return this.BHasStoreItem(e, 1, t);
  }
  GetPackage(e) {
    return this.GetStoreItem(e, 1);
  }
  BHasBundle(e, t) {
    return this.BHasStoreItem(e, 2, t);
  }
  GetBundle(e) {
    return this.GetStoreItem(e, 2);
  }
  BHasTag(e, t) {
    return this.BHasStoreItem(e, 4, t);
  }
  GetTag(e) {
    return this.GetStoreItem(e, 4);
  }
  BHasCreator(e, t) {
    return this.BHasStoreItem(e, 5, t);
  }
  GetCreator(e) {
    return this.GetStoreItem(e, 5);
  }
  BHasHubCategory(e, t) {
    return this.BHasStoreItem(e, 6, t);
  }
  GetHubCategory(e) {
    return this.GetStoreItem(e, 6);
  }
  BIsStoreItemMissing(e, t) {
    switch (t) {
      case 0:
        return this.BIsAppMissing(e);
      case 1:
        return this.BIsPackageMissing(e);
      case 2:
        return this.BIsBundleMissing(e);
      case 4:
        return this.BIsTagMissing(e);
      case 5:
        return this.BIsCreatorMissing(e);
      case 6:
        return this.BIsHubCategoryMissing(e);
      default:
        return (console.error(`BStoreItemMissing invalid type`, t), !0);
    }
  }
  BIsAppMissing(e) {
    return this.m_setUnavailableApps.has(e);
  }
  BIsPackageMissing(e) {
    return this.m_setUnavailablePackages.has(e);
  }
  BIsBundleMissing(e) {
    return this.m_setUnavailableBundles.has(e);
  }
  BIsTagMissing(e) {
    return this.m_setUnavailableTags.has(e);
  }
  BIsCreatorMissing(e) {
    return this.m_setUnavailableCreators.has(e);
  }
  BIsHubCategoryMissing(e) {
    return this.m_setUnavailableHubCategories.has(e);
  }
  BIsStoreItemUnavailableDueToCountryRestriction(e, t) {
    switch (t) {
      case 0:
        return this.BIsAppUnavailableDueToCountryRestriction(e);
      case 1:
        return this.BIsPackageUnavailableDueToCountryRestriction(e);
      case 2:
        return this.BIsBundleUnavailableDueToCountryRestriction(e);
      case 4:
      case 5:
      case 6:
        return (
          console.error(
            `BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: `,
            t,
          ),
          !0
        );
      default:
        return (console.error(`BStoreItemMissing invalid type`, t), !0);
    }
  }
  BIsAppUnavailableDueToCountryRestriction(e) {
    return this.m_setUnavailableDueToCountryRestrictionApps.has(e);
  }
  BIsPackageUnavailableDueToCountryRestriction(e) {
    return this.m_setUnavailableDueToCountryRestrictionPackages.has(e);
  }
  BIsBundleUnavailableDueToCountryRestriction(e) {
    return this.m_setUnavailableDueToCountryRestrictionBundles.has(e);
  }
  ReadResults(e, t) {
    let n = [];
    for (let r of e) n.push(this.ReadItem(r, t));
    return n;
  }
  ReadItem(e, t) {
    let n = e.item_type(),
      r = null;
    if (n === void 0)
      return (console.warn(`Failed to load item data: ${e.success()}`), null);
    switch (n) {
      case 0:
        r = this.m_mapApps;
        break;
      case 1:
        r = this.m_mapPackages;
        break;
      case 2:
        r = this.m_mapBundles;
        break;
      case 4:
        r = this.m_mapTags;
        break;
      case 5:
        r = this.m_mapCreators;
        break;
      case 6:
        r = this.m_mapHubCategories;
        break;
      default:
        return (console.error(`Invalid item type: ${n}`), null);
    }
    let i = r.get(e.id());
    if (
      (i ? i.MergeData(e, t) : ((i = new m(e, t)), r.set(e.id(), i)),
      t.include_included_items && e.included_items(!1))
    ) {
      let n = t.included_item_data_request ?? {
        ...t,
        include_included_items: !1,
      };
      for (let t of e.included_items().included_apps()) this.ReadItem(t, n);
      for (let t of e.included_items().included_packages()) this.ReadItem(t, n);
    }
    return i;
  }
};
n([a], C.prototype, `ReadItem`, null);
export { b as n, C as t };
