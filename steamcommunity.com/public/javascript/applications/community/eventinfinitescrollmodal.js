/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  G as t,
  Pt as n,
  S as r,
  at as i,
  k as a,
  z as o,
} from "./chunk~01cfc309bf.js";
import {
  Qr as s,
  Zr as c,
  c as l,
  jn as u,
  wi as d,
  xl as f,
} from "./chunk~3f4314f3b4.js";
import { t as ee } from "./chunk~eefd71512b.js";
import { t as p } from "./chunk~77ea210942.js";
import {
  $h as m,
  Cs as h,
  Cu as g,
  Df as te,
  Gd as ne,
  Is as _,
  Jf as re,
  Lf as v,
  Mm as y,
  Nf as b,
  Pd as x,
  Qd as S,
  Wf as ie,
  Xm as ae,
  Yp as oe,
  cm as se,
  hm as ce,
  jf as C,
  km as le,
  l as ue,
  lm as w,
  lp as de,
  mm as T,
  n as fe,
  o as pe,
  rm as E,
  th as D,
  zs as O,
} from "./main.js";
function k(e) {
  return [`StoreBrowsePriceStops`, e];
}
function A(e, t) {
  let { country: n } = t;
  return { queryKey: k(n), queryFn: async () => j(e, n), staleTime: 864e5 };
}
async function j(e, t) {
  let n = D.Init(le);
  n.Body().set_country_code(t);
  let r = await y.GetPriceStops(e, n);
  if (!r.BSuccess()) throw `Error loading price stops: ${r.GetErrorMessage()}`;
  return r.Body().toObject().price_stops || [];
}
function M(e) {
  return e?.length
    ? [
        { price: 0, label: S(`#FacetedBrowse_Price_Free`) },
        ...e.map((e) => ({
          price: Number(e.amount_in_cents ?? 0) / 100,
          label: S(`#FacetedBrowse_Price_Under`, e.formatted_amount ?? ``),
        })),
        { price: void 0, label: S(`#FacetedBrowse_Price_Any`) },
      ]
    : [];
}
function N() {
  let e = de(),
    n = oe(),
    { data: r } = t({ ...A(n, e), select: M });
  return r ?? [];
}
function P(e, t) {
  return M(e.getQueryData(k(t)));
}
function F(e, t, n) {
  let r = e.name;
  if (r?.length > 0 && r[0]?.startsWith(`#tagid_`)) {
    let e = parseInt(r[0].substring(7));
    if (e > 0) return n && n[e];
  }
  return S((ne.GetWithFallback(r, t) || ``).trim());
}
function I(e) {
  return String(e.type) + e.id;
}
function L(e, t) {
  return (
    e.jsondata.item_source_type != null &&
    e.jsondata.item_source_type !== s.k_ETaggedItems
  );
}
function R(e) {
  for (let t of e.facetValues)
    if (t.filter != null) {
      for (let e of t.filter.clauses)
        for (let t of e.or_tags) if (t.startsWith(`[Opt]`)) return !0;
    }
  return !1;
}
function z(e) {
  m(!0, `Unexpected code running in SSR Server: ` + e);
}
var B = {
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
  me = class {
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
function he(e, t, n, r, i, a) {
  let o = [],
    s = [],
    c = [],
    l = [];
  if (!e || e.length == 0) return o;
  let u = [
    b.k_RejectSupportedLanguage,
    b.k_RejectAlreadyDisplayed,
    b.k_RejectNoTrailer,
  ];
  for (let a of e) {
    let e = a.id,
      d = b.k_NotRejected;
    switch (a.item_type) {
      case `sub`:
        let i = x.Get().GetPackage(e);
        if (i?.GetIncludedAppIDs()?.length !== 1) {
          d = _e(e, t, r, !0);
          break;
        }
        e = i.GetIncludedAppIDs()[0];
      case `app`:
        d = ge(e, t, n, r, !0);
        break;
      case `bundle`:
        d = ve(e, t, r, !0);
    }
    if (
      (d == b.k_NotRejected
        ? ((a.rejected = b.k_NotRejected), o.push({ ...a, priority: 1 }))
        : u.includes(d)
          ? ((a.rejected = b.k_NotRejected), s.push(a))
          : ((a.rejected = d),
            d == b.k_RejectIgnoredGame ? c.push(a) : l.push(a)),
      o.length > i)
    )
      break;
  }
  return (
    o.length < i &&
      (V(o, s, a, 2),
      o.length < a && t.enforce_minimum && (V(o, c, a, 3), V(o, l, a, 4))),
    o
  );
}
function V(e, t, n, r) {
  for (let i = 0; e.length < n && i < t.length; ++i)
    e.push({ ...t[i], priority: r });
}
function H(e, t) {
  let n = u.Get();
  if (
    t.only_current_platform &&
    n.BHasPlatformPreferenceSet() &&
    !(
      (e.GetPlatforms()?.windows && n.BIsPreferredPlatform(`win`)) ||
      (e.GetPlatforms()?.mac && n.BIsPreferredPlatform(`mac`)) ||
      (e.GetPlatforms()?.steamos_linux && n.BIsPreferredPlatform(`linux`))
    )
  )
    return b.k_RejectWrongPlatform;
  if (!t.prepurchase && e.BIsComingSoon()) return b.k_RejectNoComingSoon;
  let r = e.GetPlatforms();
  return !t.virtual_reality && r && r.vr_support && r.vr_support.vrhmd_only
    ? b.k_RejectNoVR
    : e.GetAllCreatorClanIDs()?.some((e) => n.BIsIgnoringCurator(e))
      ? b.k_RejectCreatorClan
      : b.k_NotRejected;
}
function U(e, t) {
  if (t.localized) {
    let t = ae(T.LANGUAGE);
    if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
      return b.k_RejectSupportedLanguage;
  }
  return b.k_NotRejected;
}
function ge(e, t, n, r, i) {
  let a = x.Get().GetApp(e);
  if (!a) return b.k_RejectNotLoaded;
  let o = H(a, t);
  if (o != b.k_NotRejected) return o;
  let s = u.Get();
  if (s.BIsGameIgnored(e)) return b.k_RejectIgnoredGame;
  if (s.BExcludeTagIDs(a.GetTagIDs())) return b.k_RejectIgnoreGameTags;
  if (s.BExcludesContentDescriptor(a.GetContentDescriptorIDs()))
    return b.k_RejectIgnoreContentDescriptors;
  if (!t.early_access && a.BIsEarlyAccess()) return b.k_RejectEarlyAccess;
  let c = a.GetAppType();
  if (!t.software && c == 6) return b.k_RejectSoftware;
  if (t.games_already_in_library && s.BIsGameOwned(e))
    return b.k_RejectInLibrary;
  if (t.games_not_in_library && !s.BIsGameOwned(e))
    return b.k_RejectNotInLibrary;
  if (!t.video && [7, 8, 9].includes(c)) return b.k_RejectVideo;
  if (t.has_discount) {
    let e = a.GetBestPurchaseOption();
    if (!e || !e.discount_pct) return b.k_RejectNoDiscount;
  }
  return n != `adultonly` &&
    t.no_ao_content &&
    (a.HasContentDescriptorID(3) || a.HasContentDescriptorID(4))
    ? b.k_RejectAO
    : c == 1 &&
        t.games_already_in_library &&
        s.BIsGameOwned(a.GetParentAppID() || 0)
      ? b.k_RejectInLibrary
      : i
        ? (c == 1 && r.BHasAppID(a.GetParentAppID() || 0)) || r.BHasAppID(e)
          ? b.k_RejectAlreadyDisplayed
          : t.has_trailer && !a.BHasTrailers(!1)
            ? b.k_RejectNoTrailer
            : U(a, t)
        : b.k_NotRejected;
}
function W(e, t) {
  let n = u.Get(),
    r = !1;
  for (let t of e) {
    if (n.BIsGameIgnored(t)) return b.k_RejectIgnoredGame;
    n.BIsGameOwned(t) && (r = !0);
  }
  return t.games_not_in_library && r
    ? b.k_RejectInLibrary
    : t.games_not_in_library && !r
      ? b.k_RejectNotInLibrary
      : b.k_NotRejected;
}
function _e(e, t, n, r) {
  let i = x.Get().GetPackage(e);
  if (!i) return b.k_RejectNotLoaded;
  let a = H(i, t);
  if (a != b.k_NotRejected) return a;
  let o = W(i.GetIncludedAppIDs(), t);
  if (o != b.k_NotRejected) return o;
  let s = u.Get();
  return t.games_already_in_library && s.BOwnsPackage(e)
    ? b.k_RejectInLibrary
    : s.BIsPackageIgnored(e)
      ? b.k_RejectIgnoredGame
      : r
        ? n.BHasPackageID(e)
          ? b.k_RejectAlreadyDisplayed
          : U(i, t)
        : b.k_NotRejected;
}
function ve(e, t, n, r) {
  let i = x.Get().GetBundle(e);
  if (!i) return b.k_RejectNotLoaded;
  let a = H(i, t);
  if (a != b.k_NotRejected) return a;
  let o = W(i.GetIncludedAppIDs(), t);
  return o == b.k_NotRejected
    ? r
      ? n.BHasBundleID(e)
        ? b.k_RejectAlreadyDisplayed
        : U(i, t)
      : b.k_NotRejected
    : o;
}
var G = class e {
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
        (z(`CHomeViewStore.s_globalSingletonStore`), new e())),
      e.s_globalSingletonStore
    );
  }
  constructor() {
    let e = w(`home_view_setting`, `application_config`);
    this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
    let t = w(`home_view_setting_override`, `application_config`);
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
function ye(e) {
  return x.Get().BIsStoreItemMissing(e.id, C(e.type));
}
function be(e, t, n) {
  let r = [];
  return (
    e?.forEach((e) => r.push({ id: e, type: `game` })),
    t?.forEach((e) => r.push({ id: e, type: `sub` })),
    n?.forEach((e) => r.push({ id: e, type: `bundle` })),
    r
  );
}
function xe(e) {
  return (
    (x.Get().GetStoreItem(e.id, C(e.type))?.GetBestPurchaseOption()
      ?.discount_pct ?? 0) > 0
  );
}
function Se(e) {
  if (!G.Get().GetHomeView()?.localized) return !0;
  let t = x.Get().GetStoreItem(e.id, C(e.type));
  return (
    !t || u.Get().BIsAnyLanguageEnabled(t.GetAllLanguagesWithSomeSupport())
  );
}
async function K(e, t, n) {
  if (!e || e.length == 0) return [];
  let r = e.filter((e) => f(e.type)).map((e) => e.id),
    i = e.filter((e) => e.type === `sub`).map((e) => e.id),
    a = e.filter((e) => e.type === `bundle`).map((e) => e.id);
  {
    let e = r.filter((e) => !x.Get().BHasApp(e, t)),
      n = i.filter((e) => !x.Get().BHasApp(e, t)),
      o = a.filter((e) => !x.Get().BHasApp(e, t));
    (e.length > 0 || n.length > 0 || o.length > 0) &&
      (await Promise.all([
        x.Get().QueueMultipleAppRequests(e, t),
        x.Get().QueueMultiplePackageRequests(n, t),
        x.Get().QueueMultipleBundleRequests(o, t),
      ]));
  }
  let o = new Set();
  (a?.forEach((e) => {
    x.Get()
      .GetBundle(e)
      ?.GetIncludedAppIDs()
      .forEach((e) => o.add(e));
  }),
    i?.forEach((e) => {
      x.Get()
        .GetPackage(e)
        ?.GetIncludedAppIDs()
        .forEach((e) => o.add(e));
    }));
  let s = Array.from(o).filter((e) => !x.Get().BHasApp(e, t));
  if (
    (s.length > 0 && (await x.Get().QueueMultipleAppRequests(s, t)),
    r.forEach((e) => o.add(e)),
    n)
  ) {
    let e = Array.from(o)
      .map((e) => {
        let t = x.Get().GetApp(e)?.GetParentAppID();
        return t ? (o.add(t), t) : null;
      })
      .filter((e) => e !== null)
      .filter((e) => !x.Get().BHasApp(e, t));
    e.length > 0 && (await x.Get().QueueMultipleAppRequests(e, t));
  }
  return Array.from(o).filter((e) => {
    let t = x.Get().GetApp(e);
    return t && !t.GetParentAppID();
  });
}
var Ce = {
  include_tag_count: 20,
  include_basic_info: !0,
  include_supported_languages: !0,
};
function q(e, t = !1) {
  if (!e) return !0;
  let n = u.Get();
  if (
    (m(n.BIsLoaded(), `Dynamic Store not loaded`),
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
  if (G.Get().GetHomeView()?.localized) {
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
async function J(e, t, n, r) {
  let i = 0,
    a = 0,
    o = [];
  await K(e, B, t);
  for (let s of e) {
    let e = x.Get().GetStoreItem(s.id, C(s.type));
    if (!e) {
      i++;
      continue;
    }
    let c = e
      .GetIncludedAppIDs()
      .map((e) => x.Get().GetApp(e))
      .filter((e) => !!e);
    if ((c.push(e), t)) {
      let e = new Set(c.map((e) => e.GetParentAppID()).filter((e) => !!e)),
        t = Array.from(e)
          .map((e) => x.Get().GetApp(e))
          .filter((e) => !!e);
      t && c.push(...t);
    }
    c.some((e) => (r || q)(e))
      ? (a++, n && (u.Get().BIsStoreItemOwned(e) || n.push(s)))
      : o.push(s);
  }
  return o;
}
async function we(e, t, n, r, i, a, o) {
  let s = await J(
      e,
      t,
      o,
      i
        ? (e) =>
            !e ||
            u.Get().BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
            u.Get().BExcludeTagIDs(e.GetTagIDs())
        : q,
    ),
    c = [];
  for (let e of s) {
    let t = x.Get().GetStoreItem(e.id, C(e.type));
    if (!t) continue;
    let i = t?.GetIncludedAppIDsOrSelf(),
      s = !1;
    (n && (s ||= i.every((e) => u.Get().BIsGameOwned(e))),
      r && (s ||= i.every((e) => u.Get().BIsGameWishlisted(e))),
      a && (s ||= i.every((e) => u.Get().BIsGameIgnored(e))),
      s ? o && o.push(e) : c.push(e));
  }
  return c;
}
function Y() {
  let e = u.Get();
  if (e.BIsLoaded())
    return {
      bSignedIn: !!ce.logged_in,
      ePrimaryLanguage: e.GetPrimaryLanguage(),
      setSecondaryLanguages: e.GetSecondaryLanguages(),
      setExcludedContentDescriptors: new Set(e.ExcludedContentDescriptor),
    };
}
function Te() {
  return P(re, T.COUNTRY);
}
function Ee(e) {
  return !(
    !e?.BHasHideIgnoredItemsFacetValue() ||
    e.BIsUserPreferenceEnabled(c.k_EHideIgnoredItems)
  );
}
async function De(e, t, n, r) {
  let i = e.BHasHideIgnoredItemsFacetValue(),
    a = e.BIsUserPreferenceEnabled(c.k_EHideOwnedItems),
    s = e.BIsUserPreferenceEnabled(c.k_EHideWishlistedItems),
    l = e.BIsUserPreferenceEnabled(c.k_EHideIgnoredItems),
    u = [],
    d = await we(t, n, a, s, i, l, u);
  return (
    o(() => {
      e.SetCapsulesRemovedByUserPreferenceFilters(new Set(u.map(I)));
    }),
    r?.push(...u),
    d
  );
}
var X = e(a()),
  Oe = class e extends l {
    async DeleteOldAnnouncement(e, t) {
      let n = new URLSearchParams();
      n.append(`sessionid`, se());
      let r =
          T.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/announcements/ajaxdeleteannouncement/` +
          t,
        i = await X.default.post(r, n);
      if (i.data.success != 1) throw i.data;
      return (this.RemoveGIDFromList(e, d + t), i.data);
    }
    static sm_Instance;
    static sm_SummaryInstance;
    static Get() {
      return (
        e.sm_Instance || ((e.sm_Instance = new e()), e.sm_Instance.Init()),
        e.sm_Instance
      );
    }
    static GetSummaryStore() {
      return (
        e.sm_SummaryInstance ||
          ((e.sm_SummaryInstance = new e(!0)), e.sm_SummaryInstance.Init()),
        e.sm_SummaryInstance
      );
    }
  },
  Z = e(n()),
  Q = i(),
  ke = (e) => {
    let { bShowOnlyInitialEvent: t } = e,
      n = ie(),
      r = ue();
    return (0, Q.jsx)(g, {
      children: (0, Q.jsx)($, {
        ...e,
        bShowOnlyInitialEvent: t || n,
        tracker: r,
      }),
    });
  },
  $ = class extends Z.Component {
    state = { bLoading: !1, eventModel: this.props.eventModel };
    m_refParent = Z.createRef();
    m_cancelSignal = X.default.CancelToken.source();
    componentDidMount() {
      this.state.eventModel || this.setState({ bLoading: !0 }, this.LoadEvent);
      let e = this.GetBodyElement();
      e && this.props.bPrimaryPageFeature && e.classList.add(O);
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventInfiniteScrollModal unmounting`);
      let e = this.GetBodyElement();
      e && this.props.bPrimaryPageFeature && e.classList.remove(O);
    }
    GetBodyElement() {
      return this.m_refParent.current
        ? this.m_refParent.current.closest(`body`)
        : null;
    }
    async LoadEvent() {
      let {
        appid: e,
        clanSteamID: t,
        announcementGID: n,
        partnerEventStore: r,
        additionalParams: i,
      } = this.props;
      r.LoadAdjacentPartnerEventsByAnnouncement(
        n,
        t,
        e,
        0,
        3,
        i,
        this.m_cancelSignal,
      )
        .then((e) => {
          e.length > 0
            ? this.setState(
                { bLoading: !1, eventModel: e[0] },
                this.HandleReadEvent,
              )
            : (this.props.onEventNotFound && this.props.onEventNotFound(),
              this.setState({ bLoading: !1 }));
        })
        .catch((e) => {
          let t = v(e);
          (console.error(`EventInfiniteScrollModal failed ` + t.strErrorMsg, t),
            this.setState({ bLoading: !1 }));
        });
    }
    async HandleReadEvent() {
      let { eventModel: e } = this.state,
        { trackingLocation: t, tracker: n } = this.props;
      e && e.BIsPartnerEvent() && (n.RecordEventRead(e, t ?? 0), n.Flush());
    }
    render() {
      let { bShowOnlyInitialEvent: e } = this.props,
        { bLoading: t, eventModel: n } = this.state;
      if (t)
        return (0, Q.jsx)(_, {
          active: !0,
          children: (0, Q.jsx)(`div`, {
            className: fe,
            style: { height: `400px` },
            children: (0, Q.jsx)(ee, {}),
          }),
        });
      let {
          closeModal: r,
          appid: i,
          clanSteamID: a,
          className: o,
          partnerEventStore: s,
          showAppHeader: c,
          bPrimaryPageFeature: l,
          additionalParams: d,
          eventClassName: f,
        } = this.props,
        m;
      E.IN_CLIENT &&
        n?.appid &&
        (u.Get().HintLoad(),
        u.Get().BOwnsApp(n.appid) &&
          (m = (e) => h(e, `steam://nav/games/details/` + n.appid)));
      let g = (0, Q.jsx)(pe, {
        children: (t) =>
          (0, Q.jsx)(p, {
            initialEvent: n,
            appid: i,
            clanSteamID: a,
            partnerEventStore: s,
            emoticonStore: t,
            closeModal: l ? void 0 : r,
            showAppHeader: c,
            bShowOnlyInitialEvent: e,
            additionalParams: d,
            eventClassName: f,
            onAppIconClick: m,
          }),
      });
      return l
        ? g
        : (0, Q.jsx)(_, {
            active: !0,
            children: (0, Q.jsx)(`div`, { className: o, children: g }),
          });
    }
  };
$ = te([r], $);
export {
  N as S,
  he as _,
  xe as a,
  L as b,
  ye as c,
  Te as d,
  Y as f,
  me as g,
  G as h,
  J as i,
  q as l,
  Ce as m,
  Oe as n,
  Se as o,
  K as p,
  De as r,
  Ee as s,
  ke as t,
  be as u,
  B as v,
  F as x,
  R as y,
};
