/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Cu as e, Gl as t, cu as n, cx as r, yS as i } from "./main.js";
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
function s(e, r, i, a, o, s) {
  let l = [],
    u = [],
    f = [],
    h = [];
  if (!e || e.length == 0) return l;
  let g = [
    n.k_RejectSupportedLanguage,
    n.k_RejectAlreadyDisplayed,
    n.k_RejectNoTrailer,
  ];
  for (let s of e) {
    let e = s.id,
      c = n.k_NotRejected;
    switch (s.item_type) {
      case `sub`:
        let n = t.Get().GetPackage(e);
        if (n?.GetIncludedAppIDs()?.length !== 1) {
          c = p(e, r, a, !0);
          break;
        }
        e = n.GetIncludedAppIDs()[0];
      case `app`:
        c = d(e, r, i, a, !0);
        break;
      case `bundle`:
        c = m(e, r, a, !0);
    }
    if (
      (c == n.k_NotRejected
        ? ((s.rejected = n.k_NotRejected), l.push({ ...s, priority: 1 }))
        : g.includes(c)
          ? ((s.rejected = n.k_NotRejected), u.push(s))
          : ((s.rejected = c),
            c == n.k_RejectIgnoredGame ? f.push(s) : h.push(s)),
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
function l(t, r) {
  let i = e.Get();
  if (
    r.only_current_platform &&
    i.BHasPlatformPreferenceSet() &&
    !(
      (t.GetPlatforms()?.windows && i.BIsPreferredPlatform(`win`)) ||
      (t.GetPlatforms()?.mac && i.BIsPreferredPlatform(`mac`)) ||
      (t.GetPlatforms()?.steamos_linux && i.BIsPreferredPlatform(`linux`))
    )
  )
    return n.k_RejectWrongPlatform;
  if (!r.prepurchase && t.BIsComingSoon()) return n.k_RejectNoComingSoon;
  let a = t.GetPlatforms();
  return !r.virtual_reality && a && a.vr_support && a.vr_support.vrhmd_only
    ? n.k_RejectNoVR
    : t.GetAllCreatorClanIDs()?.some((e) => i.BIsIgnoringCurator(e))
      ? n.k_RejectCreatorClan
      : n.k_NotRejected;
}
function u(e, t) {
  if (t.localized) {
    let t = i(r.LANGUAGE);
    if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
      return n.k_RejectSupportedLanguage;
  }
  return n.k_NotRejected;
}
function d(r, i, a, o, s) {
  let c = t.Get().GetApp(r);
  if (!c) return n.k_RejectNotLoaded;
  let d = l(c, i);
  if (d != n.k_NotRejected) return d;
  let f = e.Get();
  if (f.BIsGameIgnored(r)) return n.k_RejectIgnoredGame;
  if (f.BExcludeTagIDs(c.GetTagIDs())) return n.k_RejectIgnoreGameTags;
  if (f.BExcludesContentDescriptor(c.GetContentDescriptorIDs()))
    return n.k_RejectIgnoreContentDescriptors;
  if (!i.early_access && c.BIsEarlyAccess()) return n.k_RejectEarlyAccess;
  let p = c.GetAppType();
  if (!i.software && p == 6) return n.k_RejectSoftware;
  if (i.games_already_in_library && f.BIsGameOwned(r))
    return n.k_RejectInLibrary;
  if (i.games_not_in_library && !f.BIsGameOwned(r))
    return n.k_RejectNotInLibrary;
  if (!i.video && [7, 8, 9].includes(p)) return n.k_RejectVideo;
  if (i.has_discount) {
    let e = c.GetBestPurchaseOption();
    if (!e || !e.discount_pct) return n.k_RejectNoDiscount;
  }
  return a != `adultonly` &&
    i.no_ao_content &&
    (c.HasContentDescriptorID(3) || c.HasContentDescriptorID(4))
    ? n.k_RejectAO
    : p == 1 &&
        i.games_already_in_library &&
        f.BIsGameOwned(c.GetParentAppID() || 0)
      ? n.k_RejectInLibrary
      : s
        ? (p == 1 && o.BHasAppID(c.GetParentAppID() || 0)) || o.BHasAppID(r)
          ? n.k_RejectAlreadyDisplayed
          : i.has_trailer && !c.BHasTrailers(!1)
            ? n.k_RejectNoTrailer
            : u(c, i)
        : n.k_NotRejected;
}
function f(t, r) {
  let i = e.Get(),
    a = !1;
  for (let e of t) {
    if (i.BIsGameIgnored(e)) return n.k_RejectIgnoredGame;
    i.BIsGameOwned(e) && (a = !0);
  }
  return r.games_not_in_library && a
    ? n.k_RejectInLibrary
    : r.games_not_in_library && !a
      ? n.k_RejectNotInLibrary
      : n.k_NotRejected;
}
function p(r, i, a, o) {
  let s = t.Get().GetPackage(r);
  if (!s) return n.k_RejectNotLoaded;
  let c = l(s, i);
  if (c != n.k_NotRejected) return c;
  let d = f(s.GetIncludedAppIDs(), i);
  if (d != n.k_NotRejected) return d;
  let p = e.Get();
  return i.games_already_in_library && p.BOwnsPackage(r)
    ? n.k_RejectInLibrary
    : p.BIsPackageIgnored(r)
      ? n.k_RejectIgnoredGame
      : o
        ? a.BHasPackageID(r)
          ? n.k_RejectAlreadyDisplayed
          : u(s, i)
        : n.k_NotRejected;
}
function m(e, r, i, a) {
  let o = t.Get().GetBundle(e);
  if (!o) return n.k_RejectNotLoaded;
  let s = l(o, r);
  if (s != n.k_NotRejected) return s;
  let c = f(o.GetIncludedAppIDs(), r);
  return c == n.k_NotRejected
    ? a
      ? i.BHasBundleID(e)
        ? n.k_RejectAlreadyDisplayed
        : u(o, r)
      : n.k_NotRejected
    : c;
}
export { s as n, a as r, o as t };
