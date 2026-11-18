/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  A as t,
  B as n,
  C as r,
  Ft as i,
  K as a,
  ot as o,
} from "./chunk~01cfc309bf.js";
import {
  Cr as s,
  Jc as c,
  Xr as l,
  ar as u,
  c as d,
  wr as f,
} from "./chunk~3f4314f3b4.js";
import { t as ee } from "./chunk~eefd71512b.js";
import { t as p } from "./chunk~77ea210942.js";
import {
  Bd as m,
  Fm as h,
  Gs as g,
  Hs as _,
  Lf as v,
  Nf as te,
  Rm as ne,
  Uf as y,
  Xf as b,
  Zd as x,
  bm as S,
  ep as re,
  hm as C,
  hp as ie,
  if as w,
  ig as T,
  ks as ae,
  ku as oe,
  l as se,
  lm as ce,
  mm as le,
  n as ue,
  nh as de,
  o as fe,
  sh as pe,
  tm as E,
  xm as D,
  zf as O,
} from "./main.js";
function k(e) {
  return [`StoreBrowsePriceStops`, e];
}
function A(e, t) {
  let { country: n } = t;
  return { queryKey: k(n), queryFn: async () => j(e, n), staleTime: 864e5 };
}
async function j(e, t) {
  let n = pe.Init(h);
  n.Body().set_country_code(t);
  let r = await ne.GetPriceStops(e, n);
  if (!r.BSuccess()) throw `Error loading price stops: ${r.GetErrorMessage()}`;
  return r.Body().toObject().price_stops || [];
}
function M(e) {
  return e?.length
    ? [
        { price: 0, label: w(`#FacetedBrowse_Price_Free`) },
        ...e.map((e) => ({
          price: Number(e.amount_in_cents ?? 0) / 100,
          label: w(`#FacetedBrowse_Price_Under`, e.formatted_amount ?? ``),
        })),
        { price: void 0, label: w(`#FacetedBrowse_Price_Any`) },
      ]
    : [];
}
function N() {
  let e = ie(),
    t = E(),
    { data: n } = a({ ...A(t, e), select: M });
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
  return w((x.GetWithFallback(r, t) || ``).trim());
}
function I(e) {
  return String(e.type) + e.id;
}
function L(e, t) {
  return (
    e.jsondata.item_source_type != null &&
    e.jsondata.item_source_type !== f.k_ETaggedItems
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
  T(!0, `Unexpected code running in SSR Server: ` + e);
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
    O.k_RejectSupportedLanguage,
    O.k_RejectAlreadyDisplayed,
    O.k_RejectNoTrailer,
  ];
  for (let a of e) {
    let e = a.id,
      d = O.k_NotRejected;
    switch (a.item_type) {
      case `sub`:
        let i = m.Get().GetPackage(e);
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
      (d == O.k_NotRejected
        ? ((a.rejected = O.k_NotRejected), o.push({ ...a, priority: 1 }))
        : u.includes(d)
          ? ((a.rejected = O.k_NotRejected), s.push(a))
          : ((a.rejected = d),
            d == O.k_RejectIgnoredGame ? c.push(a) : l.push(a)),
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
    return O.k_RejectWrongPlatform;
  if (!t.prepurchase && e.BIsComingSoon()) return O.k_RejectNoComingSoon;
  let r = e.GetPlatforms();
  return !t.virtual_reality && r && r.vr_support && r.vr_support.vrhmd_only
    ? O.k_RejectNoVR
    : e.GetAllCreatorClanIDs()?.some((e) => n.BIsIgnoringCurator(e))
      ? O.k_RejectCreatorClan
      : O.k_NotRejected;
}
function U(e, t) {
  if (t.localized) {
    let t = de(S.LANGUAGE);
    if (!e.GetAllLanguagesWithSomeSupport()?.includes(t))
      return O.k_RejectSupportedLanguage;
  }
  return O.k_NotRejected;
}
function ge(e, t, n, r, i) {
  let a = m.Get().GetApp(e);
  if (!a) return O.k_RejectNotLoaded;
  let o = H(a, t);
  if (o != O.k_NotRejected) return o;
  let s = u.Get();
  if (s.BIsGameIgnored(e)) return O.k_RejectIgnoredGame;
  if (s.BExcludeTagIDs(a.GetTagIDs())) return O.k_RejectIgnoreGameTags;
  if (s.BExcludesContentDescriptor(a.GetContentDescriptorIDs()))
    return O.k_RejectIgnoreContentDescriptors;
  if (!t.early_access && a.BIsEarlyAccess()) return O.k_RejectEarlyAccess;
  let c = a.GetAppType();
  if (!t.software && c == 6) return O.k_RejectSoftware;
  if (t.games_already_in_library && s.BIsGameOwned(e))
    return O.k_RejectInLibrary;
  if (t.games_not_in_library && !s.BIsGameOwned(e))
    return O.k_RejectNotInLibrary;
  if (!t.video && [7, 8, 9].includes(c)) return O.k_RejectVideo;
  if (t.has_discount) {
    let e = a.GetBestPurchaseOption();
    if (!e || !e.discount_pct) return O.k_RejectNoDiscount;
  }
  return n != `adultonly` &&
    t.no_ao_content &&
    (a.HasContentDescriptorID(3) || a.HasContentDescriptorID(4))
    ? O.k_RejectAO
    : c == 1 &&
        t.games_already_in_library &&
        s.BIsGameOwned(a.GetParentAppID() || 0)
      ? O.k_RejectInLibrary
      : i
        ? (c == 1 && r.BHasAppID(a.GetParentAppID() || 0)) || r.BHasAppID(e)
          ? O.k_RejectAlreadyDisplayed
          : t.has_trailer && !a.BHasTrailers(!1)
            ? O.k_RejectNoTrailer
            : U(a, t)
        : O.k_NotRejected;
}
function W(e, t) {
  let n = u.Get(),
    r = !1;
  for (let t of e) {
    if (n.BIsGameIgnored(t)) return O.k_RejectIgnoredGame;
    n.BIsGameOwned(t) && (r = !0);
  }
  return t.games_not_in_library && r
    ? O.k_RejectInLibrary
    : t.games_not_in_library && !r
      ? O.k_RejectNotInLibrary
      : O.k_NotRejected;
}
function _e(e, t, n, r) {
  let i = m.Get().GetPackage(e);
  if (!i) return O.k_RejectNotLoaded;
  let a = H(i, t);
  if (a != O.k_NotRejected) return a;
  let o = W(i.GetIncludedAppIDs(), t);
  if (o != O.k_NotRejected) return o;
  let s = u.Get();
  return t.games_already_in_library && s.BOwnsPackage(e)
    ? O.k_RejectInLibrary
    : s.BIsPackageIgnored(e)
      ? O.k_RejectIgnoredGame
      : r
        ? n.BHasPackageID(e)
          ? O.k_RejectAlreadyDisplayed
          : U(i, t)
        : O.k_NotRejected;
}
function ve(e, t, n, r) {
  let i = m.Get().GetBundle(e);
  if (!i) return O.k_RejectNotLoaded;
  let a = H(i, t);
  if (a != O.k_NotRejected) return a;
  let o = W(i.GetIncludedAppIDs(), t);
  return o == O.k_NotRejected
    ? r
      ? n.BHasBundleID(e)
        ? O.k_RejectAlreadyDisplayed
        : U(i, t)
      : O.k_NotRejected
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
    let e = C(`home_view_setting`, `application_config`);
    this.ValidateHomeViewData(e) && this.SetHomeViewSetting(e);
    let t = C(`home_view_setting_override`, `application_config`);
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
  return m.Get().BIsStoreItemMissing(e.id, v(e.type));
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
    (m.Get().GetStoreItem(e.id, v(e.type))?.GetBestPurchaseOption()
      ?.discount_pct ?? 0) > 0
  );
}
function Se(e) {
  if (!G.Get().GetHomeView()?.localized) return !0;
  let t = m.Get().GetStoreItem(e.id, v(e.type));
  return (
    !t || u.Get().BIsAnyLanguageEnabled(t.GetAllLanguagesWithSomeSupport())
  );
}
async function K(e, t, n) {
  if (!e || e.length == 0) return [];
  let r = e.filter((e) => c(e.type)).map((e) => e.id),
    i = e.filter((e) => e.type === `sub`).map((e) => e.id),
    a = e.filter((e) => e.type === `bundle`).map((e) => e.id);
  {
    let e = r.filter((e) => !m.Get().BHasApp(e, t)),
      n = i.filter((e) => !m.Get().BHasApp(e, t)),
      o = a.filter((e) => !m.Get().BHasApp(e, t));
    (e.length > 0 || n.length > 0 || o.length > 0) &&
      (await Promise.all([
        m.Get().QueueMultipleAppRequests(e, t),
        m.Get().QueueMultiplePackageRequests(n, t),
        m.Get().QueueMultipleBundleRequests(o, t),
      ]));
  }
  let o = new Set();
  (a?.forEach((e) => {
    m.Get()
      .GetBundle(e)
      ?.GetIncludedAppIDs()
      .forEach((e) => o.add(e));
  }),
    i?.forEach((e) => {
      m.Get()
        .GetPackage(e)
        ?.GetIncludedAppIDs()
        .forEach((e) => o.add(e));
    }));
  let s = Array.from(o).filter((e) => !m.Get().BHasApp(e, t));
  if (
    (s.length > 0 && (await m.Get().QueueMultipleAppRequests(s, t)),
    r.forEach((e) => o.add(e)),
    n)
  ) {
    let e = Array.from(o)
      .map((e) => {
        let t = m.Get().GetApp(e)?.GetParentAppID();
        return t ? (o.add(t), t) : null;
      })
      .filter((e) => e !== null)
      .filter((e) => !m.Get().BHasApp(e, t));
    e.length > 0 && (await m.Get().QueueMultipleAppRequests(e, t));
  }
  return Array.from(o).filter((e) => {
    let t = m.Get().GetApp(e);
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
    (T(n.BIsLoaded(), `Dynamic Store not loaded`),
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
    let e = m.Get().GetStoreItem(s.id, v(s.type));
    if (!e) {
      i++;
      continue;
    }
    let c = e
      .GetIncludedAppIDs()
      .map((e) => m.Get().GetApp(e))
      .filter((e) => !!e);
    if ((c.push(e), t)) {
      let e = new Set(c.map((e) => e.GetParentAppID()).filter((e) => !!e)),
        t = Array.from(e)
          .map((e) => m.Get().GetApp(e))
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
    let t = m.Get().GetStoreItem(e.id, v(e.type));
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
      bSignedIn: !!D.logged_in,
      ePrimaryLanguage: e.GetPrimaryLanguage(),
      setSecondaryLanguages: e.GetSecondaryLanguages(),
      setExcludedContentDescriptors: new Set(e.ExcludedContentDescriptor),
    };
}
function Te() {
  return P(re, S.COUNTRY);
}
function Ee(e) {
  return !(
    !e?.BHasHideIgnoredItemsFacetValue() ||
    e.BIsUserPreferenceEnabled(s.k_EHideIgnoredItems)
  );
}
async function De(e, t, r, i) {
  let a = e.BHasHideIgnoredItemsFacetValue(),
    o = e.BIsUserPreferenceEnabled(s.k_EHideOwnedItems),
    c = e.BIsUserPreferenceEnabled(s.k_EHideWishlistedItems),
    l = e.BIsUserPreferenceEnabled(s.k_EHideIgnoredItems),
    u = [],
    d = await we(t, r, o, c, a, l, u);
  return (
    n(() => {
      e.SetCapsulesRemovedByUserPreferenceFilters(new Set(u.map(I)));
    }),
    i?.push(...u),
    d
  );
}
var X = e(t()),
  Oe = class e extends d {
    async DeleteOldAnnouncement(e, t) {
      let n = new URLSearchParams();
      n.append(`sessionid`, le());
      let r =
          S.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/announcements/ajaxdeleteannouncement/` +
          t,
        i = await X.default.post(r, n);
      if (i.data.success != 1) throw i.data;
      return (this.RemoveGIDFromList(e, l + t), i.data);
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
  Z = e(i()),
  Q = o(),
  ke = (e) => {
    let { bShowOnlyInitialEvent: t } = e,
      n = b(),
      r = se();
    return (0, Q.jsx)(oe, {
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
      e && this.props.bPrimaryPageFeature && e.classList.add(g);
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventInfiniteScrollModal unmounting`);
      let e = this.GetBodyElement();
      e && this.props.bPrimaryPageFeature && e.classList.remove(g);
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
          let t = y(e);
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
            className: ue,
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
      ce.IN_CLIENT &&
        n?.appid &&
        (u.Get().HintLoad(),
        u.Get().BOwnsApp(n.appid) &&
          (m = (e) => ae(e, `steam://nav/games/details/` + n.appid)));
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
            additionalParams: d,
            eventClassName: f,
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
