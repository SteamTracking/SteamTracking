/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { jt as e, st as t } from "./chunk~01cfc309bf.js";
import { t as n } from "./chunk~751f63337e.js";
import { _ as r, v as i } from "./chunk~f57d770d64.js";
import { r as a } from "./chunk~a243b6a34b.js";
import {
  $b as o,
  Cu as s,
  Gl as c,
  Hy as l,
  Jy as u,
  Qx as d,
  Uy as f,
  cx as p,
  cy as m,
  gx as h,
  lv as g,
  ou as _,
  px as v,
  ux as y,
  yx as b,
} from "./main.js";
function x(e) {
  return [`StoreBrowsePriceStops`, e];
}
function S(e, t) {
  let { country: n } = t;
  return { queryKey: x(n), queryFn: async () => C(e, n), staleTime: 864e5 };
}
async function C(e, t) {
  let n = b.Init(v);
  n.Body().set_country_code(t);
  let r = await h.GetPriceStops(e, n);
  if (!r.BSuccess()) throw `Error loading price stops: ${r.GetErrorMessage()}`;
  return r.Body().toObject().price_stops || [];
}
function w(e) {
  return e?.length
    ? [
        { price: 0, label: u(`#FacetedBrowse_Price_Free`) },
        ...e.map((e) => ({
          price: Number(e.amount_in_cents ?? 0) / 100,
          label: u(`#FacetedBrowse_Price_Under`, e.formatted_amount ?? ``),
        })),
        { price: void 0, label: u(`#FacetedBrowse_Price_Any`) },
      ]
    : [];
}
function T() {
  let e = g(),
    n = m(),
    { data: r } = t({ ...S(n, e), select: w });
  return r ?? [];
}
function E(e, t) {
  return w(e.getQueryData(x(t)));
}
function D(e, t, n) {
  let r = e.name;
  if (r?.length > 0 && r[0]?.startsWith(`#tagid_`)) {
    let e = parseInt(r[0].substring(7));
    if (e > 0) return n && n[e];
  }
  return u((f.GetWithFallback(r, t) || ``).trim());
}
function O(e) {
  return String(e.type) + e.id;
}
function k(e, t) {
  return (
    e.jsondata.item_source_type != null &&
    e.jsondata.item_source_type !== i.k_ETaggedItems
  );
}
function A(e) {
  for (let t of e.facetValues)
    if (t.filter != null) {
      for (let e of t.filter.clauses)
        for (let t of e.or_tags) if (t.startsWith(`[Opt]`)) return !0;
    }
  return !1;
}
function j(e) {
  d(!0, `Unexpected code running in SSR Server: ` + e);
}
var M = class e {
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
      (e.s_globalSingletonStore ||=
        (j(`CHomeViewStore.s_globalSingletonStore`), new e())),
      e.s_globalSingletonStore
    );
  }
  constructor() {
    let e = o(`home_view_setting`, `application_config`);
    this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
    let t = o(`home_view_setting_override`, `application_config`);
    this.ValidateHomeViewDataOverride(t) && this.SetHomeViewSettingOverride(t);
  }
  ValidateHomeViewData(e) {
    let t = e;
    return t && typeof t.home == `object` && typeof t.main_cluster == `object`;
  }
  SetHomeViewSetting(e) {
    this.m_HomeView = e;
  }
  ValidateHomeViewDataOverride(e) {
    let t = e;
    return (
      t &&
      (!t.all || typeof t.all == `object`) &&
      (!t.maincap || typeof t.maincap == `object`)
    );
  }
  SetHomeViewSettingOverride(e) {
    this.m_HomeView
      ? (this.m_HomeView.home = {
          ...this.m_HomeView.home,
          ...e?.all,
          ...e?.maincap,
        })
      : (this.m_HomeView = { home: { ...e?.all, ...e?.maincap } });
  }
};
function N(e) {
  return c.Get().BIsStoreItemMissing(e.id, _(e.type));
}
function P(e, t, n) {
  let r = [];
  return (
    e?.forEach((e) => r.push({ id: e, type: `game` })),
    t?.forEach((e) => r.push({ id: e, type: `sub` })),
    n?.forEach((e) => r.push({ id: e, type: `bundle` })),
    r
  );
}
function F(e) {
  return (
    (c.Get().GetStoreItem(e.id, _(e.type))?.GetBestPurchaseOption()
      ?.discount_pct ?? 0) > 0
  );
}
function I(e) {
  if (!M.Get().GetHomeView()?.localized) return !0;
  let t = c.Get().GetStoreItem(e.id, _(e.type));
  return (
    !t || s.Get().BIsAnyLanguageEnabled(t.GetAllLanguagesWithSomeSupport())
  );
}
async function L(e, t, r) {
  if (!e || e.length == 0) return [];
  let i = e.filter((e) => n(e.type)).map((e) => e.id),
    a = e.filter((e) => e.type === `sub`).map((e) => e.id),
    o = e.filter((e) => e.type === `bundle`).map((e) => e.id);
  {
    let e = i.filter((e) => !c.Get().BHasApp(e, t)),
      n = a.filter((e) => !c.Get().BHasApp(e, t)),
      r = o.filter((e) => !c.Get().BHasApp(e, t));
    (e.length > 0 || n.length > 0 || r.length > 0) &&
      (await Promise.all([
        c.Get().QueueMultipleAppRequests(e, t),
        c.Get().QueueMultiplePackageRequests(n, t),
        c.Get().QueueMultipleBundleRequests(r, t),
      ]));
  }
  let s = new Set();
  (o?.forEach((e) => {
    c.Get()
      .GetBundle(e)
      ?.GetIncludedAppIDs()
      .forEach((e) => s.add(e));
  }),
    a?.forEach((e) => {
      c.Get()
        .GetPackage(e)
        ?.GetIncludedAppIDs()
        .forEach((e) => s.add(e));
    }));
  let l = Array.from(s).filter((e) => !c.Get().BHasApp(e, t));
  if (
    (l.length > 0 && (await c.Get().QueueMultipleAppRequests(l, t)),
    i.forEach((e) => s.add(e)),
    r)
  ) {
    let e = Array.from(s)
      .map((e) => {
        let t = c.Get().GetApp(e)?.GetParentAppID();
        return t ? (s.add(t), t) : null;
      })
      .filter((e) => e !== null)
      .filter((e) => !c.Get().BHasApp(e, t));
    e.length > 0 && (await c.Get().QueueMultipleAppRequests(e, t));
  }
  return Array.from(s).filter((e) => {
    let t = c.Get().GetApp(e);
    return t && !t.GetParentAppID();
  });
}
var R = {
  include_tag_count: 20,
  include_basic_info: !0,
  include_supported_languages: !0,
};
function z(e, t = !1) {
  if (!e) return !0;
  let n = s.Get();
  if (
    (d(n.BIsLoaded(), `Dynamic Store not loaded`),
    !t && e.GetStoreItemType() == 0)
  ) {
    let t = e.GetParentAppID();
    if (n.BIsGameIgnored(e.GetAppID()) || (t !== void 0 && n.BIsGameIgnored(t)))
      return !0;
  }
  if (
    n.BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
    n.BExcludeTagIDs(e.GetTagIDs()) ||
    e.GetAllCreatorClanIDs().some((e) => n.BIsIgnoringCurator(e))
  )
    return !0;
  if (M.Get().GetHomeView()?.localized) {
    let t = e.GetAllLanguagesWithSomeSupport();
    if (
      t.length > 0 &&
      !e.BHasSomeLanguageSupport(0) &&
      !n.BIsAnyLanguageEnabled(t)
    )
      return !0;
  }
  return !1;
}
async function B(e, t, n, r) {
  let i = 0,
    o = 0,
    l = [];
  await L(e, a, t);
  for (let a of e) {
    let e = c.Get().GetStoreItem(a.id, _(a.type));
    if (!e) {
      i++;
      continue;
    }
    let u = e
      .GetIncludedAppIDs()
      .map((e) => c.Get().GetApp(e))
      .filter((e) => !!e);
    if ((u.push(e), t)) {
      let e = new Set(u.map((e) => e.GetParentAppID()).filter((e) => !!e)),
        t = Array.from(e)
          .map((e) => c.Get().GetApp(e))
          .filter((e) => !!e);
      t && u.push(...t);
    }
    u.some((e) => (r || z)(e))
      ? (o++, n && (s.Get().BIsStoreItemOwned(e) || n.push(a)))
      : l.push(a);
  }
  return l;
}
async function V(e, t, n, r, i, a, o) {
  let l = await B(
      e,
      t,
      o,
      i
        ? (e) =>
            !e ||
            s.Get().BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
            s.Get().BExcludeTagIDs(e.GetTagIDs())
        : z,
    ),
    u = [];
  for (let e of l) {
    let t = c.Get().GetStoreItem(e.id, _(e.type));
    if (!t) continue;
    let i = t?.GetIncludedAppIDsOrSelf(),
      l = !1;
    (n && (l ||= i.every((e) => s.Get().BIsGameOwned(e))),
      r && (l ||= i.every((e) => s.Get().BIsGameWishlisted(e))),
      a && (l ||= i.every((e) => s.Get().BIsGameIgnored(e))),
      l ? o && o.push(e) : u.push(e));
  }
  return u;
}
function H() {
  let e = s.Get();
  if (e.BIsLoaded())
    return {
      bSignedIn: !!y.logged_in,
      ePrimaryLanguage: e.GetPrimaryLanguage(),
      setSecondaryLanguages: e.GetSecondaryLanguages(),
      setExcludedContentDescriptors: new Set(e.ExcludedContentDescriptor),
    };
}
function U() {
  return E(l, p.COUNTRY);
}
function W(e) {
  return !(
    !e?.BHasHideIgnoredItemsFacetValue() ||
    e.BIsUserPreferenceEnabled(r.k_EHideIgnoredItems)
  );
}
async function G(t, n, i, a) {
  let o = t.BHasHideIgnoredItemsFacetValue(),
    s = t.BIsUserPreferenceEnabled(r.k_EHideOwnedItems),
    c = t.BIsUserPreferenceEnabled(r.k_EHideWishlistedItems),
    l = t.BIsUserPreferenceEnabled(r.k_EHideIgnoredItems),
    u = [],
    d = await V(n, i, s, c, o, l, u);
  return (
    e(() => {
      t.SetCapsulesRemovedByUserPreferenceFilters(new Set(u.map(O)));
    }),
    a?.push(...u),
    d
  );
}
export {
  T as _,
  W as a,
  P as c,
  L as d,
  R as f,
  D as g,
  k as h,
  I as i,
  U as l,
  A as m,
  B as n,
  N as o,
  M as p,
  F as r,
  z as s,
  G as t,
  H as u,
};
