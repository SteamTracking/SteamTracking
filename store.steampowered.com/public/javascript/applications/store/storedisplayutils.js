/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { AS as e, Nu as t, tu as n, vu as r, vx as i } from "./main.js";
var a = {
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
  o = class {
    m_setAlreadyAdded = new Set();
    Reset() {
      this.m_setAlreadyAdded = new Set();
    }
    BHasAppID(e) {
      return this.m_setAlreadyAdded.has(`a` + e);
    }
    BHasPackageID(e) {
      return this.m_setAlreadyAdded.has(`s` + e);
    }
    BHasBundleID(e) {
      return this.m_setAlreadyAdded.has(`b` + e);
    }
    BHasStoreItemKey(e) {
      return this.m_setAlreadyAdded.has(this.ConvertStoreItemKeyToUniqueKey(e));
    }
    AddStoreItemKey(e) {
      this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(e));
    }
    ConvertStoreItemKeyToUniqueKey(e) {
      switch (e.item_type) {
        default:
        case `app`:
          return `a` + e.id;
        case `sub`:
          return `s` + e.id;
        case `bundle`:
          return `b` + e.id;
      }
    }
  };
function s(e, t, i, a, o, s) {
  let l = [],
    u = [],
    f = [],
    h = [];
  if (!e || e.length == 0) return l;
  let g = [
    r.k_RejectSupportedLanguage,
    r.k_RejectAlreadyDisplayed,
    r.k_RejectNoTrailer,
  ];
  for (let s of e) {
    let e = s.id,
      c = r.k_NotRejected;
    switch (s.item_type) {
      case `sub`:
        let r = n.Get().GetPackage(e);
        if (r?.GetIncludedAppIDs()?.length !== 1) {
          c = p(e, t, a, !0);
          break;
        }
        e = r.GetIncludedAppIDs()[0];
      case `app`:
        c = d(e, t, i, a, !0);
        break;
      case `bundle`:
        c = m(e, t, a, !0);
    }
    if (
      (c == r.k_NotRejected
        ? ((s.rejected = r.k_NotRejected), l.push({ ...s, priority: 1 }))
        : g.includes(c)
          ? ((s.rejected = r.k_NotRejected), u.push(s))
          : ((s.rejected = c),
            c == r.k_RejectIgnoredGame ? f.push(s) : h.push(s)),
      l.length > o)
    )
      break;
  }
  return (
    l.length < o &&
      (c(l, u, s, 2),
      l.length < s && t.enforce_minimum && (c(l, f, s, 3), c(l, h, s, 4))),
    l
  );
}
function c(e, t, n, r) {
  for (let i = 0; e.length < n && i < t.length; ++i)
    e.push({ ...t[i], priority: r });
}
function l(e, n) {
  let i = t.Get();
  if (
    n.only_current_platform &&
    i.BHasPlatformPreferenceSet() &&
    !(
      (e.GetPlatforms()?.windows && i.BIsPreferredPlatform(`win`)) ||
      (e.GetPlatforms()?.mac && i.BIsPreferredPlatform(`mac`)) ||
      (e.GetPlatforms()?.steamos_linux && i.BIsPreferredPlatform(`linux`))
    )
  )
    return r.k_RejectWrongPlatform;
  if (!n.prepurchase && e.BIsComingSoon()) return r.k_RejectNoComingSoon;
  let a = e.GetPlatforms();
  return !n.virtual_reality && a && a.vr_support && a.vr_support.vrhmd_only
    ? r.k_RejectNoVR
    : e.GetAllCreatorClanIDs()?.some((e) => i.BIsIgnoringCurator(e))
      ? r.k_RejectCreatorClan
      : r.k_NotRejected;
}
function u(t, n) {
  if (n.localized) {
    let n = e(i.LANGUAGE);
    if (!t.GetAllLanguagesWithSomeSupport()?.includes(n))
      return r.k_RejectSupportedLanguage;
  }
  return r.k_NotRejected;
}
function d(e, i, a, o, s) {
  let c = n.Get().GetApp(e);
  if (!c) return r.k_RejectNotLoaded;
  let d = l(c, i);
  if (d != r.k_NotRejected) return d;
  let f = t.Get();
  if (f.BIsGameIgnored(e)) return r.k_RejectIgnoredGame;
  if (f.BExcludeTagIDs(c.GetTagIDs())) return r.k_RejectIgnoreGameTags;
  if (f.BExcludesContentDescriptor(c.GetContentDescriptorIDs()))
    return r.k_RejectIgnoreContentDescriptors;
  if (!i.early_access && c.BIsEarlyAccess()) return r.k_RejectEarlyAccess;
  let p = c.GetAppType();
  if (!i.software && p == 6) return r.k_RejectSoftware;
  if (i.games_already_in_library && f.BIsGameOwned(e))
    return r.k_RejectInLibrary;
  if (i.games_not_in_library && !f.BIsGameOwned(e))
    return r.k_RejectNotInLibrary;
  if (!i.video && [7, 8, 9].includes(p)) return r.k_RejectVideo;
  if (i.has_discount) {
    let e = c.GetBestPurchaseOption();
    if (!e || !e.discount_pct) return r.k_RejectNoDiscount;
  }
  return a != `adultonly` &&
    i.no_ao_content &&
    (c.HasContentDescriptorID(3) || c.HasContentDescriptorID(4))
    ? r.k_RejectAO
    : p == 1 &&
        i.games_already_in_library &&
        f.BIsGameOwned(c.GetParentAppID() || 0)
      ? r.k_RejectInLibrary
      : s
        ? (p == 1 && o.BHasAppID(c.GetParentAppID() || 0)) || o.BHasAppID(e)
          ? r.k_RejectAlreadyDisplayed
          : i.has_trailer && !c.BHasTrailers(!1)
            ? r.k_RejectNoTrailer
            : u(c, i)
        : r.k_NotRejected;
}
function f(e, n) {
  let i = t.Get(),
    a = !1;
  for (let t of e) {
    if (i.BIsGameIgnored(t)) return r.k_RejectIgnoredGame;
    i.BIsGameOwned(t) && (a = !0);
  }
  return n.games_not_in_library && a
    ? r.k_RejectInLibrary
    : n.games_not_in_library && !a
      ? r.k_RejectNotInLibrary
      : r.k_NotRejected;
}
function p(e, i, a, o) {
  let s = n.Get().GetPackage(e);
  if (!s) return r.k_RejectNotLoaded;
  let c = l(s, i);
  if (c != r.k_NotRejected) return c;
  let d = f(s.GetIncludedAppIDs(), i);
  if (d != r.k_NotRejected) return d;
  let p = t.Get();
  return i.games_already_in_library && p.BOwnsPackage(e)
    ? r.k_RejectInLibrary
    : p.BIsPackageIgnored(e)
      ? r.k_RejectIgnoredGame
      : o
        ? a.BHasPackageID(e)
          ? r.k_RejectAlreadyDisplayed
          : u(s, i)
        : r.k_NotRejected;
}
function m(e, t, i, a) {
  let o = n.Get().GetBundle(e);
  if (!o) return r.k_RejectNotLoaded;
  let s = l(o, t);
  if (s != r.k_NotRejected) return s;
  let c = f(o.GetIncludedAppIDs(), t);
  return c == r.k_NotRejected
    ? a
      ? i.BHasBundleID(e)
        ? r.k_RejectAlreadyDisplayed
        : u(o, t)
      : r.k_NotRejected
    : c;
}
export { s as n, a as r, o as t };
