/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { jt as e, st as t } from "./chunk~01cfc309bf.js";
import { _ as n, v as r } from "./chunk~f57d770d64.js";
import { t as i } from "./chunk~751f63337e.js";
import { r as a } from "./chunk~a243b6a34b.js";
import {
  Mu as o,
  Ox as s,
  Qy as c,
  Sx as l,
  Tx as u,
  Zy as d,
  _x as f,
  _y as p,
  cx as m,
  eu as h,
  hu as g,
  rb as _,
  sS as v,
  vv as y,
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
  let n = s.Init(l);
  n.Body().set_country_code(t);
  let r = await u.GetPriceStops(e, n);
  if (!r.BSuccess()) throw `Error loading price stops: ${r.GetErrorMessage()}`;
  return r.Body().toObject().price_stops || [];
}
function w(e) {
  return e?.length
    ? [
        { price: 0, label: _(`#FacetedBrowse_Price_Free`) },
        ...e.map((e) => ({
          price: Number(e.amount_in_cents ?? 0) / 100,
          label: _(`#FacetedBrowse_Price_Under`, e.formatted_amount ?? ``),
        })),
        { price: void 0, label: _(`#FacetedBrowse_Price_Any`) },
      ]
    : [];
}
function T() {
  let e = y(),
    n = p(),
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
  return _((c.GetWithFallback(r, t) || ``).trim());
}
function O(e) {
  return String(e.type) + e.id;
}
function k(e, t) {
  return (
    e.jsondata.item_source_type != null &&
    e.jsondata.item_source_type !== r.k_ETaggedItems
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
  v(!0, `Unexpected code running in SSR Server: ` + e);
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
    let e = m(`home_view_setting`, `application_config`);
    this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
    let t = m(`home_view_setting_override`, `application_config`);
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
  return h.Get().BIsStoreItemMissing(e.id, g(e.type));
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
    (h.Get().GetStoreItem(e.id, g(e.type))?.GetBestPurchaseOption()
      ?.discount_pct ?? 0) > 0
  );
}
function I(e) {
  if (!M.Get().GetHomeView()?.localized) return !0;
  let t = h.Get().GetStoreItem(e.id, g(e.type));
  return (
    !t || o.Get().BIsAnyLanguageEnabled(t.GetAllLanguagesWithSomeSupport())
  );
}
async function L(e, t, n) {
  if (!e || e.length == 0) return [];
  let r = e.filter((e) => i(e.type)).map((e) => e.id),
    a = e.filter((e) => e.type === `sub`).map((e) => e.id),
    o = e.filter((e) => e.type === `bundle`).map((e) => e.id);
  {
    let e = r.filter((e) => !h.Get().BHasApp(e, t)),
      n = a.filter((e) => !h.Get().BHasApp(e, t)),
      i = o.filter((e) => !h.Get().BHasApp(e, t));
    (e.length > 0 || n.length > 0 || i.length > 0) &&
      (await Promise.all([
        h.Get().QueueMultipleAppRequests(e, t),
        h.Get().QueueMultiplePackageRequests(n, t),
        h.Get().QueueMultipleBundleRequests(i, t),
      ]));
  }
  let s = new Set();
  (o?.forEach((e) => {
    h.Get()
      .GetBundle(e)
      ?.GetIncludedAppIDs()
      .forEach((e) => s.add(e));
  }),
    a?.forEach((e) => {
      h.Get()
        .GetPackage(e)
        ?.GetIncludedAppIDs()
        .forEach((e) => s.add(e));
    }));
  let c = Array.from(s).filter((e) => !h.Get().BHasApp(e, t));
  if (
    (c.length > 0 && (await h.Get().QueueMultipleAppRequests(c, t)),
    r.forEach((e) => s.add(e)),
    n)
  ) {
    let e = Array.from(s)
      .map((e) => {
        let t = h.Get().GetApp(e)?.GetParentAppID();
        return t ? (s.add(t), t) : null;
      })
      .filter((e) => e !== null)
      .filter((e) => !h.Get().BHasApp(e, t));
    e.length > 0 && (await h.Get().QueueMultipleAppRequests(e, t));
  }
  return Array.from(s).filter((e) => {
    let t = h.Get().GetApp(e);
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
  let n = o.Get();
  if (
    (v(n.BIsLoaded(), `Dynamic Store not loaded`),
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
    s = 0,
    c = [];
  await L(e, a, t);
  for (let a of e) {
    let e = h.Get().GetStoreItem(a.id, g(a.type));
    if (!e) {
      i++;
      continue;
    }
    let l = e
      .GetIncludedAppIDs()
      .map((e) => h.Get().GetApp(e))
      .filter((e) => !!e);
    if ((l.push(e), t)) {
      let e = new Set(l.map((e) => e.GetParentAppID()).filter((e) => !!e)),
        t = Array.from(e)
          .map((e) => h.Get().GetApp(e))
          .filter((e) => !!e);
      t && l.push(...t);
    }
    l.some((e) => (r || z)(e))
      ? (s++, n && (o.Get().BIsStoreItemOwned(e) || n.push(a)))
      : c.push(a);
  }
  return c;
}
async function V(e, t, n, r, i, a, s) {
  let c = await B(
      e,
      t,
      s,
      i
        ? (e) =>
            !e ||
            o.Get().BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
            o.Get().BExcludeTagIDs(e.GetTagIDs())
        : z,
    ),
    l = [];
  for (let e of c) {
    let t = h.Get().GetStoreItem(e.id, g(e.type));
    if (!t) continue;
    let i = t?.GetIncludedAppIDsOrSelf(),
      c = !1;
    (n && (c ||= i.every((e) => o.Get().BIsGameOwned(e))),
      r && (c ||= i.every((e) => o.Get().BIsGameWishlisted(e))),
      a && (c ||= i.every((e) => o.Get().BIsGameIgnored(e))),
      c ? s && s.push(e) : l.push(e));
  }
  return l;
}
function H() {
  let e = o.Get();
  if (e.BIsLoaded())
    return {
      bSignedIn: !!b.logged_in,
      ePrimaryLanguage: e.GetPrimaryLanguage(),
      setSecondaryLanguages: e.GetSecondaryLanguages(),
      setExcludedContentDescriptors: new Set(e.ExcludedContentDescriptor),
    };
}
function U() {
  return E(d, f.COUNTRY);
}
function W(e) {
  return !(
    !e?.BHasHideIgnoredItemsFacetValue() ||
    e.BIsUserPreferenceEnabled(n.k_EHideIgnoredItems)
  );
}
async function G(t, r, i, a) {
  let o = t.BHasHideIgnoredItemsFacetValue(),
    s = t.BIsUserPreferenceEnabled(n.k_EHideOwnedItems),
    c = t.BIsUserPreferenceEnabled(n.k_EHideWishlistedItems),
    l = t.BIsUserPreferenceEnabled(n.k_EHideIgnoredItems),
    u = [],
    d = await V(r, i, s, c, o, l, u);
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
