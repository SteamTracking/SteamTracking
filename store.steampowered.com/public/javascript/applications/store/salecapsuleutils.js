/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { jt as e, st as t } from "./libraries.js";
import { t as n } from "./storetypes.js";
import { v as r, y as i } from "./partnerevent.js";
import { r as a } from "./storedisplayutils.js";
import {
  Jb as o,
  Ly as s,
  Ry as c,
  Uy as l,
  Vl as u,
  ax as d,
  cx as f,
  dx as p,
  iv as m,
  mx as h,
  nu as g,
  qx as _,
  rx as v,
  ry as y,
  yu as b,
} from "./main.js";
function x(e) {
  return [`StoreBrowsePriceStops`, e];
}
function S(e, t) {
  let { country: n } = t;
  return { queryKey: x(n), queryFn: async () => C(e, n), staleTime: 864e5 };
}
async function C(e, t) {
  let n = h.Init(f);
  n.Body().set_country_code(t);
  let r = await p.GetPriceStops(e, n);
  if (!r.BSuccess()) throw `Error loading price stops: ${r.GetErrorMessage()}`;
  return r.Body().toObject().price_stops || [];
}
function w(e) {
  return e?.length
    ? [
        { price: 0, label: l(`#FacetedBrowse_Price_Free`) },
        ...e.map((e) => ({
          price: Number(e.amount_in_cents ?? 0) / 100,
          label: l(`#FacetedBrowse_Price_Under`, e.formatted_amount ?? ``),
        })),
        { price: void 0, label: l(`#FacetedBrowse_Price_Any`) },
      ]
    : [];
}
function T() {
  let e = m(),
    n = y(),
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
  return l((c.GetWithFallback(r, t) || ``).trim());
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
  _(!0, `Unexpected code running in SSR Server: ` + e);
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
  return u.Get().BIsStoreItemMissing(e.id, g(e.type));
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
    (u.Get().GetStoreItem(e.id, g(e.type))?.GetBestPurchaseOption()
      ?.discount_pct ?? 0) > 0
  );
}
function I(e) {
  if (!M.Get().GetHomeView()?.localized) return !0;
  let t = u.Get().GetStoreItem(e.id, g(e.type));
  return (
    !t || b.Get().BIsAnyLanguageEnabled(t.GetAllLanguagesWithSomeSupport())
  );
}
async function L(e, t, r) {
  if (!e || e.length == 0) return [];
  let i = e.filter((e) => n(e.type)).map((e) => e.id),
    a = e.filter((e) => e.type === `sub`).map((e) => e.id),
    o = e.filter((e) => e.type === `bundle`).map((e) => e.id);
  {
    let e = i.filter((e) => !u.Get().BHasApp(e, t)),
      n = a.filter((e) => !u.Get().BHasApp(e, t)),
      r = o.filter((e) => !u.Get().BHasApp(e, t));
    (e.length > 0 || n.length > 0 || r.length > 0) &&
      (await Promise.all([
        u.Get().QueueMultipleAppRequests(e, t),
        u.Get().QueueMultiplePackageRequests(n, t),
        u.Get().QueueMultipleBundleRequests(r, t),
      ]));
  }
  let s = new Set();
  (o?.forEach((e) => {
    u.Get()
      .GetBundle(e)
      ?.GetIncludedAppIDs()
      .forEach((e) => s.add(e));
  }),
    a?.forEach((e) => {
      u.Get()
        .GetPackage(e)
        ?.GetIncludedAppIDs()
        .forEach((e) => s.add(e));
    }));
  let c = Array.from(s).filter((e) => !u.Get().BHasApp(e, t));
  if (
    (c.length > 0 && (await u.Get().QueueMultipleAppRequests(c, t)),
    i.forEach((e) => s.add(e)),
    r)
  ) {
    let e = Array.from(s)
      .map((e) => {
        let t = u.Get().GetApp(e)?.GetParentAppID();
        return t ? (s.add(t), t) : null;
      })
      .filter((e) => e !== null)
      .filter((e) => !u.Get().BHasApp(e, t));
    e.length > 0 && (await u.Get().QueueMultipleAppRequests(e, t));
  }
  return Array.from(s).filter((e) => {
    let t = u.Get().GetApp(e);
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
  let n = b.Get();
  if (
    (_(n.BIsLoaded(), `Dynamic Store not loaded`),
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
    s = [];
  await L(e, a, t);
  for (let a of e) {
    let e = u.Get().GetStoreItem(a.id, g(a.type));
    if (!e) {
      i++;
      continue;
    }
    let c = e
      .GetIncludedAppIDs()
      .map((e) => u.Get().GetApp(e))
      .filter((e) => !!e);
    if ((c.push(e), t)) {
      let e = new Set(c.map((e) => e.GetParentAppID()).filter((e) => !!e)),
        t = Array.from(e)
          .map((e) => u.Get().GetApp(e))
          .filter((e) => !!e);
      t && c.push(...t);
    }
    c.some((e) => (r || z)(e))
      ? (o++, n && (b.Get().BIsStoreItemOwned(e) || n.push(a)))
      : s.push(a);
  }
  return s;
}
async function V(e, t, n, r, i, a, o) {
  let s = await B(
      e,
      t,
      o,
      i
        ? (e) =>
            !e ||
            b.Get().BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
            b.Get().BExcludeTagIDs(e.GetTagIDs())
        : z,
    ),
    c = [];
  for (let e of s) {
    let t = u.Get().GetStoreItem(e.id, g(e.type));
    if (!t) continue;
    let i = t?.GetIncludedAppIDsOrSelf(),
      s = !1;
    (n && (s ||= i.every((e) => b.Get().BIsGameOwned(e))),
      r && (s ||= i.every((e) => b.Get().BIsGameWishlisted(e))),
      a && (s ||= i.every((e) => b.Get().BIsGameIgnored(e))),
      s ? o && o.push(e) : c.push(e));
  }
  return c;
}
function H() {
  let e = b.Get();
  if (e.BIsLoaded())
    return {
      bSignedIn: !!d.logged_in,
      ePrimaryLanguage: e.GetPrimaryLanguage(),
      setSecondaryLanguages: e.GetSecondaryLanguages(),
      setExcludedContentDescriptors: new Set(e.ExcludedContentDescriptor),
    };
}
function U() {
  return E(s, v.COUNTRY);
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
