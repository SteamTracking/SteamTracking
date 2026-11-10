/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Hl as e, au as t, bu as n, hS as r, ix as i } from "./main.js";
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
function s(n, r, i, a, o, s) {
  let l = [],
    u = [],
    f = [],
    h = [];
  if (!n || n.length == 0) return l;
  let g = [
    t.k_RejectSupportedLanguage,
    t.k_RejectAlreadyDisplayed,
    t.k_RejectNoTrailer,
  ];
  for (let s of n) {
    let n = s.id,
      c = t.k_NotRejected;
    switch (s.item_type) {
      case `sub`:
        let t = e.Get().GetPackage(n);
        if (t?.GetIncludedAppIDs()?.length !== 1) {
          c = p(n, r, a, !0);
          break;
        }
        n = t.GetIncludedAppIDs()[0];
      case `app`:
        c = d(n, r, i, a, !0);
        break;
      case `bundle`:
        c = m(n, r, a, !0);
    }
    if (
      (c == t.k_NotRejected
        ? ((s.rejected = t.k_NotRejected), l.push({ ...s, priority: 1 }))
        : g.includes(c)
          ? ((s.rejected = t.k_NotRejected), u.push(s))
          : ((s.rejected = c),
            c == t.k_RejectIgnoredGame ? f.push(s) : h.push(s)),
      l.length > o)
    )
      break;
  }
  return (
    l.length < o &&
      (c(l, u, s, 2),
      l.length < s && r.enforce_minimum && (c(l, f, s, 3), c(l, h, s, 4))),
    l
  );
}
function c(e, t, n, r) {
  for (let i = 0; e.length < n && i < t.length; ++i)
    e.push({ ...t[i], priority: r });
}
function l(e, r) {
  let i = n.Get();
  if (
    r.only_current_platform &&
    i.BHasPlatformPreferenceSet() &&
    !(
      (e.GetPlatforms()?.windows && i.BIsPreferredPlatform(`win`)) ||
      (e.GetPlatforms()?.mac && i.BIsPreferredPlatform(`mac`)) ||
      (e.GetPlatforms()?.steamos_linux && i.BIsPreferredPlatform(`linux`))
    )
  )
    return t.k_RejectWrongPlatform;
  if (!r.prepurchase && e.BIsComingSoon()) return t.k_RejectNoComingSoon;
  let a = e.GetPlatforms();
  return !r.virtual_reality && a && a.vr_support && a.vr_support.vrhmd_only
    ? t.k_RejectNoVR
    : e.GetAllCreatorClanIDs()?.some((e) => i.BIsIgnoringCurator(e))
      ? t.k_RejectCreatorClan
      : t.k_NotRejected;
}
function u(e, n) {
  if (n.localized) {
    let n = r(i.LANGUAGE);
    if (!e.GetAllLanguagesWithSomeSupport()?.includes(n))
      return t.k_RejectSupportedLanguage;
  }
  return t.k_NotRejected;
}
function d(r, i, a, o, s) {
  let c = e.Get().GetApp(r);
  if (!c) return t.k_RejectNotLoaded;
  let d = l(c, i);
  if (d != t.k_NotRejected) return d;
  let f = n.Get();
  if (f.BIsGameIgnored(r)) return t.k_RejectIgnoredGame;
  if (f.BExcludeTagIDs(c.GetTagIDs())) return t.k_RejectIgnoreGameTags;
  if (f.BExcludesContentDescriptor(c.GetContentDescriptorIDs()))
    return t.k_RejectIgnoreContentDescriptors;
  if (!i.early_access && c.BIsEarlyAccess()) return t.k_RejectEarlyAccess;
  let p = c.GetAppType();
  if (!i.software && p == 6) return t.k_RejectSoftware;
  if (i.games_already_in_library && f.BIsGameOwned(r))
    return t.k_RejectInLibrary;
  if (i.games_not_in_library && !f.BIsGameOwned(r))
    return t.k_RejectNotInLibrary;
  if (!i.video && [7, 8, 9].includes(p)) return t.k_RejectVideo;
  if (i.has_discount) {
    let e = c.GetBestPurchaseOption();
    if (!e || !e.discount_pct) return t.k_RejectNoDiscount;
  }
  return a != `adultonly` &&
    i.no_ao_content &&
    (c.HasContentDescriptorID(3) || c.HasContentDescriptorID(4))
    ? t.k_RejectAO
    : p == 1 &&
        i.games_already_in_library &&
        f.BIsGameOwned(c.GetParentAppID() || 0)
      ? t.k_RejectInLibrary
      : s
        ? (p == 1 && o.BHasAppID(c.GetParentAppID() || 0)) || o.BHasAppID(r)
          ? t.k_RejectAlreadyDisplayed
          : i.has_trailer && !c.BHasTrailers(!1)
            ? t.k_RejectNoTrailer
            : u(c, i)
        : t.k_NotRejected;
}
function f(e, r) {
  let i = n.Get(),
    a = !1;
  for (let n of e) {
    if (i.BIsGameIgnored(n)) return t.k_RejectIgnoredGame;
    i.BIsGameOwned(n) && (a = !0);
  }
  return r.games_not_in_library && a
    ? t.k_RejectInLibrary
    : r.games_not_in_library && !a
      ? t.k_RejectNotInLibrary
      : t.k_NotRejected;
}
function p(r, i, a, o) {
  let s = e.Get().GetPackage(r);
  if (!s) return t.k_RejectNotLoaded;
  let c = l(s, i);
  if (c != t.k_NotRejected) return c;
  let d = f(s.GetIncludedAppIDs(), i);
  if (d != t.k_NotRejected) return d;
  let p = n.Get();
  return i.games_already_in_library && p.BOwnsPackage(r)
    ? t.k_RejectInLibrary
    : p.BIsPackageIgnored(r)
      ? t.k_RejectIgnoredGame
      : o
        ? a.BHasPackageID(r)
          ? t.k_RejectAlreadyDisplayed
          : u(s, i)
        : t.k_NotRejected;
}
function m(n, r, i, a) {
  let o = e.Get().GetBundle(n);
  if (!o) return t.k_RejectNotLoaded;
  let s = l(o, r);
  if (s != t.k_NotRejected) return s;
  let c = f(o.GetIncludedAppIDs(), r);
  return c == t.k_NotRejected
    ? a
      ? i.BHasBundleID(n)
        ? t.k_RejectAlreadyDisplayed
        : u(o, r)
      : t.k_NotRejected
    : c;
}
export { s as n, a as r, o as t };
