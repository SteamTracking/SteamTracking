/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  A as t,
  B as n,
  C as r,
  K as i,
  Pt as a,
  ot as o,
} from "./libraries.js";
import { Dc as s, c, ir as l, kr as u, rr as d, zn as f } from "./vodquery.js";
import { t as ee } from "./throbber.js";
import { t as p } from "./apppartnereventspage.js";
import {
  Af as m,
  Bs as h,
  Ef as g,
  Em as te,
  If as ne,
  Kp as re,
  Ls as _,
  Mf as v,
  Nd as y,
  Qm as b,
  Uf as ie,
  Wd as ae,
  Yh as x,
  Zd as S,
  am as oe,
  dm as C,
  em as se,
  fm as ce,
  km as le,
  l as ue,
  n as de,
  o as fe,
  om as w,
  qf as pe,
  qm as T,
  sp as E,
  ws as D,
  wu as O,
} from "./main.js";
function k(e) {
  return [`StoreBrowsePriceStops`, e];
}
function A(e, t) {
  let { country: n } = t;
  return { queryKey: k(n), queryFn: async () => j(e, n), staleTime: 864e5 };
}
async function j(e, t) {
  let n = b.Init(te);
  n.Body().set_country_code(t);
  let r = await le.GetPriceStops(e, n);
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
  let e = E(),
    t = re(),
    { data: n } = i({ ...A(t, e), select: M });
  return n ?? [];
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
  return S((ae.GetWithFallback(r, t) || ``).trim());
}
function I(e) {
  return String(e.type) + e.id;
}
function L(e, t) {
  return (
    e.jsondata.item_source_type != null &&
    e.jsondata.item_source_type !== l.k_ETaggedItems
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
  x(!0, `Unexpected code running in SSR Server: ` + e);
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
    v.k_RejectSupportedLanguage,
    v.k_RejectAlreadyDisplayed,
    v.k_RejectNoTrailer,
  ];
  for (let a of e) {
    let e = a.id,
      d = v.k_NotRejected;
    switch (a.item_type) {
      case `sub`:
        let i = y.Get().GetPackage(e);
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
      (d == v.k_NotRejected
        ? ((a.rejected = v.k_NotRejected), o.push({ ...a, priority: 1 }))
        : u.includes(d)
          ? ((a.rejected = v.k_NotRejected), s.push(a))
          : ((a.rejected = d),
            d == v.k_RejectIgnoredGame ? c.push(a) : l.push(a)),
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
  let n = f.Get();
  if (
    t.only_current_platform &&
    n.BHasPlatformPreferenceSet() &&
    !(
      (e.GetPlatforms()?.windows && n.BIsPreferredPlatform(`win`)) ||
      (e.GetPlatforms()?.mac && n.BIsPreferredPlatform(`mac`)) ||
      (e.GetPlatforms()?.steamos_linux && n.BIsPreferredPlatform(`linux`))
    )
  )
    return v.k_RejectWrongPlatform;
  if (!t.prepurchase && e.BIsComingSoon()) return v.k_RejectNoComingSoon;
  let r = e.GetPlatforms();
  return !t.virtual_reality && r && r.vr_support && r.vr_support.vrhmd_only
    ? v.k_RejectNoVR
    : e.GetAllCreatorClanIDs()?.some((e) => n.BIsIgnoringCurator(e))
      ? v.k_RejectCreatorClan
      : v.k_NotRejected;
}
function U(e, t) {
  if (t.localized) {
    let t = T(C.LANGUAGE);
    if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
      return v.k_RejectSupportedLanguage;
  }
  return v.k_NotRejected;
}
function ge(e, t, n, r, i) {
  let a = y.Get().GetApp(e);
  if (!a) return v.k_RejectNotLoaded;
  let o = H(a, t);
  if (o != v.k_NotRejected) return o;
  let s = f.Get();
  if (s.BIsGameIgnored(e)) return v.k_RejectIgnoredGame;
  if (s.BExcludeTagIDs(a.GetTagIDs())) return v.k_RejectIgnoreGameTags;
  if (s.BExcludesContentDescriptor(a.GetContentDescriptorIDs()))
    return v.k_RejectIgnoreContentDescriptors;
  if (!t.early_access && a.BIsEarlyAccess()) return v.k_RejectEarlyAccess;
  let c = a.GetAppType();
  if (!t.software && c == 6) return v.k_RejectSoftware;
  if (t.games_already_in_library && s.BIsGameOwned(e))
    return v.k_RejectInLibrary;
  if (t.games_not_in_library && !s.BIsGameOwned(e))
    return v.k_RejectNotInLibrary;
  if (!t.video && [7, 8, 9].includes(c)) return v.k_RejectVideo;
  if (t.has_discount) {
    let e = a.GetBestPurchaseOption();
    if (!e || !e.discount_pct) return v.k_RejectNoDiscount;
  }
  return n != `adultonly` &&
    t.no_ao_content &&
    (a.HasContentDescriptorID(3) || a.HasContentDescriptorID(4))
    ? v.k_RejectAO
    : c == 1 &&
        t.games_already_in_library &&
        s.BIsGameOwned(a.GetParentAppID() || 0)
      ? v.k_RejectInLibrary
      : i
        ? (c == 1 && r.BHasAppID(a.GetParentAppID() || 0)) || r.BHasAppID(e)
          ? v.k_RejectAlreadyDisplayed
          : t.has_trailer && !a.BHasTrailers(!1)
            ? v.k_RejectNoTrailer
            : U(a, t)
        : v.k_NotRejected;
}
function W(e, t) {
  let n = f.Get(),
    r = !1;
  for (let t of e) {
    if (n.BIsGameIgnored(t)) return v.k_RejectIgnoredGame;
    n.BIsGameOwned(t) && (r = !0);
  }
  return t.games_not_in_library && r
    ? v.k_RejectInLibrary
    : t.games_not_in_library && !r
      ? v.k_RejectNotInLibrary
      : v.k_NotRejected;
}
function _e(e, t, n, r) {
  let i = y.Get().GetPackage(e);
  if (!i) return v.k_RejectNotLoaded;
  let a = H(i, t);
  if (a != v.k_NotRejected) return a;
  let o = W(i.GetIncludedAppIDs(), t);
  if (o != v.k_NotRejected) return o;
  let s = f.Get();
  return t.games_already_in_library && s.BOwnsPackage(e)
    ? v.k_RejectInLibrary
    : s.BIsPackageIgnored(e)
      ? v.k_RejectIgnoredGame
      : r
        ? n.BHasPackageID(e)
          ? v.k_RejectAlreadyDisplayed
          : U(i, t)
        : v.k_NotRejected;
}
function ve(e, t, n, r) {
  let i = y.Get().GetBundle(e);
  if (!i) return v.k_RejectNotLoaded;
  let a = H(i, t);
  if (a != v.k_NotRejected) return a;
  let o = W(i.GetIncludedAppIDs(), t);
  return o == v.k_NotRejected
    ? r
      ? n.BHasBundleID(e)
        ? v.k_RejectAlreadyDisplayed
        : U(i, t)
      : v.k_NotRejected
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
  return y.Get().BIsStoreItemMissing(e.id, m(e.type));
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
    (y.Get().GetStoreItem(e.id, m(e.type))?.GetBestPurchaseOption()
      ?.discount_pct ?? 0) > 0
  );
}
function Se(e) {
  if (!G.Get().GetHomeView()?.localized) return !0;
  let t = y.Get().GetStoreItem(e.id, m(e.type));
  return (
    !t || f.Get().BIsAnyLanguageEnabled(t.GetAllLanguagesWithSomeSupport())
  );
}
async function K(e, t, n) {
  if (!e || e.length == 0) return [];
  let r = e.filter((e) => s(e.type)).map((e) => e.id),
    i = e.filter((e) => e.type === `sub`).map((e) => e.id),
    a = e.filter((e) => e.type === `bundle`).map((e) => e.id);
  {
    let e = r.filter((e) => !y.Get().BHasApp(e, t)),
      n = i.filter((e) => !y.Get().BHasApp(e, t)),
      o = a.filter((e) => !y.Get().BHasApp(e, t));
    (e.length > 0 || n.length > 0 || o.length > 0) &&
      (await Promise.all([
        y.Get().QueueMultipleAppRequests(e, t),
        y.Get().QueueMultiplePackageRequests(n, t),
        y.Get().QueueMultipleBundleRequests(o, t),
      ]));
  }
  let o = new Set();
  a?.forEach((e) => {
    y.Get()
      .GetBundle(e)
      ?.GetIncludedAppIDs()
      .forEach((e) => o.add(e));
  }),
    i?.forEach((e) => {
      y.Get()
        .GetPackage(e)
        ?.GetIncludedAppIDs()
        .forEach((e) => o.add(e));
    });
  let c = Array.from(o).filter((e) => !y.Get().BHasApp(e, t));
  if (
    (c.length > 0 && (await y.Get().QueueMultipleAppRequests(c, t)),
    r.forEach((e) => o.add(e)),
    n)
  ) {
    let e = Array.from(o)
      .map((e) => {
        let t = y.Get().GetApp(e)?.GetParentAppID();
        return t ? (o.add(t), t) : null;
      })
      .filter((e) => e !== null)
      .filter((e) => !y.Get().BHasApp(e, t));
    e.length > 0 && (await y.Get().QueueMultipleAppRequests(e, t));
  }
  return Array.from(o).filter((e) => {
    let t = y.Get().GetApp(e);
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
  let n = f.Get();
  if (
    (x(n.BIsLoaded(), `Dynamic Store not loaded`),
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
    let e = y.Get().GetStoreItem(s.id, m(s.type));
    if (!e) {
      i++;
      continue;
    }
    let c = e
      .GetIncludedAppIDs()
      .map((e) => y.Get().GetApp(e))
      .filter((e) => !!e);
    if ((c.push(e), t)) {
      let e = new Set(c.map((e) => e.GetParentAppID()).filter((e) => !!e)),
        t = Array.from(e)
          .map((e) => y.Get().GetApp(e))
          .filter((e) => !!e);
      t && c.push(...t);
    }
    c.some((e) => (r || q)(e))
      ? (a++, n && (f.Get().BIsStoreItemOwned(e) || n.push(s)))
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
            f.Get().BExcludesContentDescriptor(e.GetContentDescriptorIDs()) ||
            f.Get().BExcludeTagIDs(e.GetTagIDs())
        : q,
    ),
    c = [];
  for (let e of s) {
    let t = y.Get().GetStoreItem(e.id, m(e.type));
    if (!t) continue;
    let i = t?.GetIncludedAppIDsOrSelf(),
      s = !1;
    n && (s ||= i.every((e) => f.Get().BIsGameOwned(e))),
      r && (s ||= i.every((e) => f.Get().BIsGameWishlisted(e))),
      a && (s ||= i.every((e) => f.Get().BIsGameIgnored(e))),
      s ? o && o.push(e) : c.push(e);
  }
  return c;
}
function Y() {
  let e = f.Get();
  if (e.BIsLoaded())
    return {
      bSignedIn: !!ce.logged_in,
      ePrimaryLanguage: e.GetPrimaryLanguage(),
      setSecondaryLanguages: e.GetSecondaryLanguages(),
      setExcludedContentDescriptors: new Set(e.ExcludedContentDescriptor),
    };
}
function Te() {
  return P(pe, C.COUNTRY);
}
function Ee(e) {
  return !(
    !e?.BHasHideIgnoredItemsFacetValue() ||
    e.BIsUserPreferenceEnabled(d.k_EHideIgnoredItems)
  );
}
async function De(e, t, r, i) {
  let a = e.BHasHideIgnoredItemsFacetValue(),
    o = e.BIsUserPreferenceEnabled(d.k_EHideOwnedItems),
    s = e.BIsUserPreferenceEnabled(d.k_EHideWishlistedItems),
    c = e.BIsUserPreferenceEnabled(d.k_EHideIgnoredItems),
    l = [],
    u = await we(t, r, o, s, a, c, l);
  return (
    n(() => {
      e.SetCapsulesRemovedByUserPreferenceFilters(new Set(l.map(I)));
    }),
    i?.push(...l),
    u
  );
}
var X = e(t()),
  Oe = class e extends c {
    async DeleteOldAnnouncement(e, t) {
      let n = new URLSearchParams();
      n.append(`sessionid`, oe());
      let r =
          C.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/announcements/ajaxdeleteannouncement/` +
          t,
        i = await X.default.post(r, n);
      if (i.data.success != 1) throw i.data;
      return this.RemoveGIDFromList(e, u + t), i.data;
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
  Z = e(a()),
  Q = o(),
  ke = (e) => {
    let { bShowOnlyInitialEvent: t } = e,
      n = ie(),
      r = ue();
    return (0, Q.jsx)(O, {
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
      e && this.props.bPrimaryPageFeature && e.classList.add(h);
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventInfiniteScrollModal unmounting`);
      let e = this.GetBodyElement();
      e && this.props.bPrimaryPageFeature && e.classList.remove(h);
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
          let t = ne(e);
          console.error(`EventInfiniteScrollModal failed ` + t.strErrorMsg, t),
            this.setState({ bLoading: !1 });
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
            className: de,
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
          additionalParams: u,
          eventClassName: d,
        } = this.props,
        m;
      se.IN_CLIENT &&
        n?.appid &&
        (f.Get().HintLoad(),
        f.Get().BOwnsApp(n.appid) &&
          (m = (e) => D(e, `steam://nav/games/details/` + n.appid)));
      let h = (0, Q.jsx)(fe, {
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
            additionalParams: u,
            eventClassName: d,
            onAppIconClick: m,
          }),
      });
      return l
        ? h
        : (0, Q.jsx)(_, {
            active: !0,
            children: (0, Q.jsx)(`div`, { className: o, children: h }),
          });
    }
  };
$ = g([r], $);
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
