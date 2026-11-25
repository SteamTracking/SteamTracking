/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Dt as t,
  Pt as n,
  S as r,
  W as i,
  k as a,
  n as o,
  nt as s,
  w as c,
} from "./chunk~de7f2df91c.js";
import {
  A as l,
  Mt as u,
  Nt as d,
  Pt as f,
  j as p,
  rt as m,
} from "./chunk~bd90a5fce7.js";
import { da as h } from "./chunk~1fa4b8f2ff.js";
import { w as ee } from "./chunk~44f252525d.js";
import { i as g, n as _ } from "./chunk~fa5480ab25.js";
import { S as te, i as ne, x as re } from "./chunk~96e60d7578.js";
import { t as v } from "./chunk~971d501580.js";
import { n as ie } from "./chunk~a58194c5d9.js";
import { t as y } from "./chunk~0c46413ed4.js";
import { t as ae } from "./chunk~f4e4ed5c17.js";
import { t as b } from "./chunk~c55709d290.js";
import { o as x } from "./chunk~e867464c75.js";
import { n as S, t as C } from "./chunk~38a44beba7.js";
var w = n(s(), 1),
  oe = n(u(), 1),
  se = `-x0pInEBhX4-`,
  ce = `KYFjrdxYAEg-`,
  T = i();
function E(e) {
  let {
    value: t,
    onValueChange: n,
    options: r,
    getOptionLabel: i,
    disabled: a,
    ...o
  } = e;
  return (0, T.jsx)(D.Root, {
    value: t,
    onValueChange: n,
    disabled: a,
    ...o,
    children: r.map((e) => {
      let t = i ? i(e) : e;
      return (0, T.jsx)(D.Option, { value: e, children: t }, t);
    }),
  });
}
function le(e) {
  let { value: t, onValueChange: n, disabled: r, render: i, ...a } = e,
    o = (0, w.useRef)(null),
    s = (0, w.useCallback)((e, t) => {
      if (!o.current) return;
      let n = [...o.current.querySelectorAll(`[data-radio-id]`)];
      if (n.length !== 0)
        for (let r = 0; r < n.length; r++) {
          let i = n[r];
          if (i.dataset.radioId && i.dataset.radioId === e) {
            let e = n[(r + t + n.length) % n.length];
            (e.click(), e.focus());
          }
        }
    }, []),
    c = (0, w.useCallback)((e) => s(e, 1), [s]),
    l = (0, w.useCallback)((e) => s(e, -1), [s]),
    u = (0, w.useMemo)(
      () => ({
        value: t,
        onValueChange: n,
        bDisabled: r,
        onSelectNext: c,
        onSelectPrev: l,
      }),
      [t, n, r, c, l],
    ),
    d = { role: `radiogroup`, "aria-disabled": r, ref: o, ...a },
    f = (0, T.jsx)(v, {
      direction: `column`,
      gap: `2`,
      role: `radiogroup`,
      "aria-disabled": r,
      ...a,
    }),
    p = y(i, f, d);
  return (0, T.jsx)(O, { value: u, children: p });
}
function ue(e) {
  let { value: t, ref: n, children: r, render: i } = e,
    a = (0, w.useContext)(O),
    o = (0, w.useId)();
  if (!a)
    return (
      console.error(
        `<RadioGroup.Option> must be rendered within a <RadioGroup.Root>`,
      ),
      null
    );
  let {
      value: s,
      onValueChange: c,
      bDisabled: l,
      onSelectNext: u,
      onSelectPrev: d,
    } = a,
    f = s === t,
    p = () => {
      l || f || c(t);
    };
  return y(
    i,
    (0, T.jsx)(de, { bDisabled: l }),
    {
      role: `radio`,
      "aria-checked": f,
      "aria-disabled": l,
      "data-radio-id": o,
      onClick: p,
      onKeyDown: (e) => {
        if (!l)
          switch (e.key) {
            case ` `:
              (p(), e.preventDefault(), e.stopPropagation());
              break;
            case `ArrowRight`:
            case `ArrowDown`:
              (u(o), e.preventDefault(), e.stopPropagation());
              break;
            case `ArrowLeft`:
            case `ArrowUp`:
              (d(o), e.preventDefault(), e.stopPropagation());
          }
      },
      tabIndex: f || s === null ? 0 : -1,
      ref: n,
      children: r,
    },
    { bSelected: f, bDisabled: l },
  );
}
function de(e) {
  let { children: t, className: n, bDisabled: r, ...i } = e;
  return (0, T.jsxs)(v, {
    cursor: `default`,
    gap: `2`,
    className: (0, oe.default)(se, r && `EynJrG05Wqc-`),
    ...i,
    children: [
      (0, T.jsx)(`div`, { className: ce }),
      (0, T.jsx)(ie, { children: t }),
    ],
  });
}
var D = Object.assign(E, { Root: le, Option: ue }),
  O = (0, w.createContext)(null);
function fe(e) {
  return 1;
}
function pe(e) {
  switch (e) {
    case 1:
      return `usd_cis`;
    case 2:
      return `usd_sasia`;
    case 3:
      return `usd_latam`;
    case 4:
      return `usd_mena`;
    default:
      return `usd_invalid`;
  }
}
function me(e) {
  switch (e) {
    case 1:
      return `CIS`;
    case 2:
      return `SASIA`;
    case 3:
      return `LATAM`;
    case 4:
      return `MENA`;
    default:
      return `Invalid Region`;
  }
}
function he(e) {
  switch (e) {
    case `CIS`:
      return 1;
    case `SASIA`:
      return 2;
    case `LATAM`:
      return 3;
    case `MENA`:
      return 4;
    default:
      return 0;
  }
}
function ge(e) {
  switch (e) {
    case 1:
      return `The Commonwealth of Independent States`;
    case 2:
      return `South Asia`;
    case 3:
      return `Latin America`;
    case 4:
      return `Middle East and North Africa`;
    default:
      return `Invalid Region`;
  }
}
function k(e) {
  switch (e?.toLowerCase()) {
    case `usd_cis`:
      return 1;
    case `usd_sasia`:
      return 2;
    case `usd_latam`:
      return 3;
    case `usd_mena`:
      return 4;
    default:
      return 0;
  }
}
var A = n(ae()),
  j = class e {
    m_rgPackageIDs;
    m_rgPackageData;
    m_mapPackageData;
    m_rgVisiblePackageIDs = [];
    m_visiblePackageIDsCallbackList = new d();
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    constructor() {}
    Init() {
      let e = c(`package_data`, `application_config`);
      e
        ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
          (this.m_rgPackageData = e),
          (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
        : ((this.m_rgPackageIDs = c(`package_ids`, `application_config`)),
          (this.m_mapPackageData = new Map()));
    }
    UpdatePackageNameSearchState(e) {
      let t = e
          .getState()
          .columnFilters.find((e) => e.id === `packageName`)?.value,
        n = new URL(window.location.href);
      t != decodeURIComponent(n.searchParams.get(`pn`)) &&
        (t
          ? n.searchParams.set(`pn`, encodeURIComponent(t))
          : n.searchParams.delete(`pn`),
        window.history.replaceState({}, ``, n.toString()));
    }
    UpdateVisiblePackageList(e) {
      let t = e.getVisibleRows().filter((e) => !e.getCanExpand());
      ((this.m_rgVisiblePackageIDs = []),
        t.forEach((e) => this.m_rgVisiblePackageIDs.push(e.original.packageID)),
        this.m_visiblePackageIDsCallbackList.Dispatch(
          this.m_rgVisiblePackageIDs,
        ),
        this.UpdatePackageNameSearchState(e));
    }
    SetVisiblePackageList(e) {
      ((this.m_rgVisiblePackageIDs = [...e]),
        this.m_visiblePackageIDsCallbackList.Dispatch(
          this.m_rgVisiblePackageIDs,
        ));
    }
  };
function _e() {
  return j.Get().m_rgPackageIDs;
}
function M() {
  return j.Get().m_rgPackageIDs;
}
function N() {
  return j.Get().m_rgPackageData;
}
function P(e) {
  let t = j.Get().m_mapPackageData.get(e);
  return t ? t.package_name : e.toString();
}
function F(e) {
  let t = j.Get().m_mapPackageData.get(e);
  return !t || !!t.released;
}
function I(e) {
  let t = j.Get().m_mapPackageData.get(e);
  return t?.visible_on_store === void 0 || !!t.visible_on_store;
}
function ve() {
  return w.useCallback((e) => j.Get().UpdateVisiblePackageList(e), []);
}
function ye(e) {
  j.Get().SetVisiblePackageList(e);
}
function L() {
  let [e, t] = w.useState(j.Get().m_rgVisiblePackageIDs);
  return (l(j.Get().m_visiblePackageIDsCallbackList, t), e);
}
function be() {
  return w.useMemo(() => c(`publisherid`, `application_config`), []);
}
function R(e, n, r, i, a) {
  if (!e) return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
  let o = null;
  for (let t of e.GetUSDPricePointsInCents())
    if (t >= r) {
      o = t;
      break;
    }
  if ((i == 1 && !(a && a < 5)) || !o)
    return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
  let s = e.GetRecommendPrice(o, i, a, n),
    c = e.GetRecommendPrice(o, 1, void 0, n);
  if (
    (t(s, `Missing requested currency guide for  ${o}/${i}/${a}/${n}`),
    t(c, `Missing usd guide for  ${o}/${a}/${n}`),
    !s || !c)
  )
    return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
  let l = s.price,
    u = c.price;
  if (u != r) {
    let e = r / u;
    ((o *= e), (l = Math.ceil(l * e)));
  }
  return { nSuggestedPriceInCents: l, nGuidelinesLevel: o };
}
var z = class n {
  m_mapPackagePrice = new Map();
  m_mapPackageCountryOverridePrice = new Map();
  m_setRecurringSubscriptions = new Set();
  m_mapPriceProposals = new Map();
  m_mapLocalPackagePriceOverrides = new Map();
  m_mapPriceGridCellCallbackList = new Map();
  m_mapPackageOverridesCallbackList = new Map();
  m_allPriceOverridesCallbackList = new d();
  m_mapOverridesPerPriceKey = new Map();
  m_mapCurrencyData = new Map();
  m_mapPriceKeyDescriptions = new Map();
  m_rgKnownPriceKeys;
  m_strDisplayPriceKey = `USD`;
  m_displayPriceKeyCallbackList = new d();
  static s_Singleton;
  static Get() {
    return (
      n.s_Singleton || ((n.s_Singleton = new n()), n.s_Singleton.Init()),
      n.s_Singleton
    );
  }
  constructor() {
    re(this);
  }
  Init() {
    let e = c(`base_prices`, `application_config`);
    if (e && this.BIsPricePayloadValid(e))
      for (let t in e) {
        let n = e[t],
          r = parseInt(t),
          i = new Map();
        this.m_mapPackagePrice.set(r, i);
        for (let e in n)
          S(e)
            ? (this.m_mapPackageCountryOverridePrice.has(r) ||
                this.m_mapPackageCountryOverridePrice.set(r, new Map()),
              this.m_mapPackageCountryOverridePrice
                .get(r)
                .set(e.toUpperCase(), n[e]))
            : i.set(e, n[e]);
      }
    let t = c(`recurring_subs`, `application_config`);
    if (t && Array.isArray(t))
      for (let e of t) this.m_setRecurringSubscriptions.add(e);
    let n = c(`pending_proposals`, `application_config`);
    if (n && this.BIsPendingPricePayloadValid(n))
      for (let e in n) {
        let t = n[e],
          r = parseInt(e);
        this.m_mapPriceProposals.set(r, t);
      }
    let r = c(`valid_price_keys`, `application_config`);
    r &&
      this.BIsPriceKeyValid(r) &&
      (this.m_rgKnownPriceKeys = r.sort((e, t) => x(U(e), U(t))));
    let i = c(`currency_data`, `application_config`);
    if (i && this.BIsCurrencyPayloadValid(i))
      for (let e in i) {
        let t = i[e];
        this.m_mapCurrencyData.set(e, t);
      }
    let a = c(`currency_descriptions`, `application_config`);
    if (a && this.BIsCurrencyDescriptionPayloadValid(a))
      for (let e in a) {
        let t = a[e];
        this.m_mapPriceKeyDescriptions.set(e, t);
      }
  }
  BIsPricePayloadValid(e) {
    let t = e;
    if (!t || typeof t != `object`) return !1;
    for (let e in t) {
      if (isNaN(parseInt(e))) return !1;
      let n = t[e];
      if (!n || typeof n != `object`) return !1;
      for (let e in n)
        if (typeof e != `string` || typeof n[e] != `number`) return !1;
    }
    return !0;
  }
  BIsPendingPricePayloadValid(e) {
    let t = e;
    if (!t || typeof t != `object`) return !1;
    for (let e in t) {
      if (isNaN(parseInt(e))) return !1;
      let n = t[e];
      if (
        !n ||
        typeof n != `object` ||
        n.packageID !== parseInt(e) ||
        typeof n.prices != `object`
      )
        return !1;
    }
    return !0;
  }
  BIsCurrencyPayloadValid(e) {
    let t = e;
    if (!t || typeof t != `object`) return !1;
    for (let e in t) {
      let n = t[e];
      if (!n || typeof n != `object` || n.strCode != e) return !1;
    }
    return !0;
  }
  BIsPriceKeyValid(e) {
    let t = e;
    if (!t || !Array.isArray(t)) return !1;
    for (let e in t) if (typeof e != `string`) return !1;
    return !0;
  }
  BIsCurrencyDescriptionPayloadValid(e) {
    let t = e;
    if (!t || typeof t != `object`) return !1;
    for (let e in t) {
      let n = t[e];
      if (
        !n ||
        typeof n != `object` ||
        n.bRequired === void 0 ||
        n.strDescription === void 0
      )
        return !1;
    }
    return !0;
  }
  BPriceKeyRequired(e) {
    return this.m_mapPriceKeyDescriptions.get(e)?.bRequired ?? !1;
  }
  GetMinimumBasePrice(e) {
    return this.m_mapPriceKeyDescriptions.get(e)?.nLowestBase || 0;
  }
  GetMinimumDiscountPrice(e) {
    return this.m_mapPriceKeyDescriptions.get(e)?.nLowestDiscount || 0;
  }
  GetPublishedCountryOverrides(e) {
    return this.m_mapPackageCountryOverridePrice.has(e)
      ? Array.from(this.m_mapPackageCountryOverridePrice.get(e).keys())
      : [];
  }
  GetPublishedPriceCountryOverride(e, t) {
    return this.m_mapPackageCountryOverridePrice.get(e).get(t);
  }
  GetPublishedPrice(e, t) {
    return S(t)
      ? this.m_mapPackageCountryOverridePrice.get(e)?.get(t)
      : this.m_mapPackagePrice.get(e)?.get(t);
  }
  GetProposedPrice(e, t) {
    return this.m_mapPriceProposals.get(e)?.prices[t];
  }
  GetSavedPrice(e, t) {
    return this.GetProposedPrice(e, t) ?? this.GetPublishedPrice(e, t);
  }
  GetPrice(e, t) {
    return this.GetLocalOverridePrice(e, t) ?? this.GetSavedPrice(e, t);
  }
  GetLocalOverridePrice(e, t) {
    return this.m_mapLocalPackagePriceOverrides.get(e)?.get(t);
  }
  GetPriceGridCellCallbackList(e, t) {
    if (!e || !t) return null;
    this.m_mapPriceGridCellCallbackList.has(e) ||
      this.m_mapPriceGridCellCallbackList.set(e, new Map());
    let n = this.m_mapPriceGridCellCallbackList.get(e);
    return (n.has(t) || n.set(t, new d()), n.get(t));
  }
  GetPackageOverridesCallbackList(e) {
    if (!e) return null;
    let t = this.m_mapPackageOverridesCallbackList.get(e);
    return (
      t || ((t = new d()), this.m_mapPackageOverridesCallbackList.set(e, t)), t
    );
  }
  OverridePrice(e, t, n) {
    n != this.GetPrice(e, t) &&
      (this.m_mapLocalPackagePriceOverrides.has(e) ||
        this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
      n == this.GetSavedPrice(e, t)
        ? this.m_mapLocalPackagePriceOverrides.get(e).delete(t)
        : this.m_mapLocalPackagePriceOverrides.get(e).set(t, n),
      this.GetPriceGridCellCallbackList(e, t).Dispatch(n),
      this.GetPackageOverridesCallbackList(e).Dispatch(),
      this.DispatchPriceOverridesCallbacks());
  }
  OverridePricesForPackage(e, n, r, i) {
    t(
      n.length == r.length,
      `price list size doesn't match ${n.length} != ${r.length}`,
    );
    for (let t = 0; t < n.length; ++t) {
      let i = n[t],
        a = r[t];
      (this.m_mapLocalPackagePriceOverrides.has(e) ||
        this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
        a == this.GetSavedPrice(e, i)
          ? this.m_mapLocalPackagePriceOverrides.get(e).delete(i)
          : this.m_mapLocalPackagePriceOverrides.get(e).set(i, a),
        this.GetPriceGridCellCallbackList(e, i).Dispatch(a));
    }
    (this.GetPackageOverridesCallbackList(e).Dispatch(),
      i && this.DispatchPriceOverridesCallbacks());
  }
  DispatchPriceOverridesCallbacks() {
    (this.m_allPriceOverridesCallbackList.Dispatch(
      this.GetAllLocalPriceOverrides(),
    ),
      this.UpdateOverridesPerPriceKey());
  }
  BHasLocalPriceOverrides(e) {
    return this.m_mapLocalPackagePriceOverrides.get(e)?.size > 0;
  }
  GetAllLocalPriceOverrides() {
    let e = [];
    return (
      this.m_mapLocalPackagePriceOverrides.forEach((t, n) =>
        t.forEach((t, r) => {
          let i = this.GetSavedPrice(n, r);
          e.push({
            packageID: n,
            strPriceKey: r,
            nPriceInCents: t,
            nOldPriceInCents: i,
          });
        }),
      ),
      e.sort(xe),
      e
    );
  }
  BHasLocalPriceOverride(e, t) {
    let n = this.m_mapLocalPackagePriceOverrides.get(e);
    return n ? n.has(t) : !1;
  }
  UpdateOverridesPerPriceKey() {
    (this.m_mapOverridesPerPriceKey.clear(),
      this.m_mapLocalPackagePriceOverrides.forEach((e, t) => {
        e.forEach((e, t) => {
          let n = this.m_mapOverridesPerPriceKey.get(t);
          ((n ||= 0), n++, this.m_mapOverridesPerPriceKey.set(t, n));
        });
      }));
  }
  DiscardAllLocalPriceOverrides() {
    let e = this.GetAllLocalPriceOverrides();
    this.m_mapLocalPackagePriceOverrides.clear();
    let t = new Set();
    for (let n of e) {
      let { packageID: e, strPriceKey: r } = n;
      (this.GetPriceGridCellCallbackList(e, r).Dispatch(this.GetPrice(e, r)),
        t.add(e));
    }
    for (let e of t) this.GetPackageOverridesCallbackList(e).Dispatch();
    this.DispatchPriceOverridesCallbacks();
  }
  DiscardAllLocalPriceOverridesForKey(e) {
    let t = !1,
      n = new Set();
    this.m_mapLocalPackagePriceOverrides.forEach((r, i) => {
      this.m_mapPriceKeyDescriptions.has(e) &&
        ((t = !0),
        this.m_mapLocalPackagePriceOverrides.get(i).delete(e),
        this.GetPriceGridCellCallbackList(i, e).Dispatch(this.GetPrice(i, e)),
        n.add(i));
    });
    for (let e of n) this.GetPackageOverridesCallbackList(e).Dispatch();
    t && this.DispatchPriceOverridesCallbacks();
  }
  DiscardLocalPriceOverridesForPackage(e) {
    (this.m_mapLocalPackagePriceOverrides.get(e)?.forEach((t, n) => {
      this.GetPriceGridCellCallbackList(e, n).Dispatch(
        this.GetSavedPrice(e, n),
      );
    }),
      this.m_mapLocalPackagePriceOverrides.delete(e),
      this.GetPackageOverridesCallbackList(e).Dispatch(),
      this.DispatchPriceOverridesCallbacks());
  }
  BuildNewPricingProposal(t, n) {
    let r = {
      packageID: t,
      rtSubmitted: Math.floor(Date.now() / 1e3),
      submitterID: e.accountid,
      prices: {},
      eState: 1,
      bPartnerWillPublish: n,
    };
    for (let e of this.m_rgKnownPriceKeys) r.prices[e] = this.GetPrice(t, e);
    return r;
  }
  async SubmitProposalToServer(e, t, n, i) {
    let o = this.BuildNewPricingProposal(e, t),
      s = JSON.stringify(o.prices),
      l = c(`publisherid`, `application_config`),
      u = a.PARTNER_BASE_URL + `pricing/ajaxsubmitproposal/` + l + `/` + e,
      d = new FormData();
    (d.append(`sessionid`, r()),
      d.append(`partner_will_publish`, t ? `1` : `0`),
      d.append(`cancel_unapplied`, n ? `1` : `0`),
      d.append(`prices`, s));
    let f = null;
    try {
      let t = await A.default.post(u, d, {
        withCredentials: !0,
        cancelToken: i?.token,
      });
      if (t?.status == 200 && t.data?.success == 1 && t.data.eState != 0) {
        if (t.data.eState == 3) {
          this.m_mapPriceProposals.delete(e);
          for (let t of this.m_rgKnownPriceKeys)
            (this.m_mapPackagePrice.has(e) ||
              this.m_mapPackagePrice.set(e, new Map()),
              this.m_mapPackagePrice.get(e).set(t, o.prices[t]));
        } else
          ((o.eState = t.data.eState),
            (o.proposalKey = t.data.proposalKey),
            this.m_mapPriceProposals.set(e, o));
        return (this.DiscardLocalPriceOverridesForPackage(e), t.data);
      }
    } catch (e) {
      f = e;
    }
    let p = b(f),
      m = f?.response?.data ?? { success: 2 };
    return m.unappliedProposal
      ? ((m.newProposal = o), m)
      : (console.error(
          `CPackagePricingStore.SubmitProposalToServer: failed`,
          p.strErrorMsg,
          p,
        ),
        m);
  }
  async PublishApprovedProposal(e, t, n = 0) {
    let i = this.m_mapPriceProposals.get(e);
    if (i?.eState != 4 || !i?.proposalKey) return { success: 8 };
    let o = c(`publisherid`, `application_config`),
      s = a.PARTNER_BASE_URL + `pricing/ajaxpublishproposal/` + o + `/` + e,
      l = new FormData();
    (l.append(`sessionid`, r()), l.append(`proposal_key`, i.proposalKey));
    let u = null;
    try {
      let r = await A.default.post(s, l, {
        withCredentials: !0,
        cancelToken: t?.token,
        timeout: n,
      });
      if (r?.status == 200 && r.data?.success == 1) {
        this.m_mapPriceProposals.delete(e);
        for (let t of this.m_rgKnownPriceKeys)
          (this.m_mapPackagePrice.get(e).set(t, i.prices[t]),
            this.GetPriceGridCellCallbackList(e, t).Dispatch(
              this.GetSavedPrice(e, t),
            ));
        return (
          this.GetPackageOverridesCallbackList(e).Dispatch(),
          this.DispatchPriceOverridesCallbacks(),
          r.data
        );
      }
    } catch (e) {
      u = e;
    }
    let d = b(u);
    return (
      console.error(
        `CPackagePricingStore.PublishApprovedProposal: failed`,
        d.strErrorMsg,
        d,
      ),
      u?.response?.data ?? { success: 2 }
    );
  }
  async CancelProposal(e, t) {
    let n = this.m_mapPriceProposals.get(e);
    if (!n?.proposalKey) return { success: 8 };
    let i = c(`publisherid`, `application_config`),
      o = a.PARTNER_BASE_URL + `pricing/ajaxcancelproposal/` + i + `/` + e,
      s = new FormData();
    (s.append(`sessionid`, r()), s.append(`proposal_key`, n.proposalKey));
    let l = null;
    try {
      let n = await A.default.post(o, s, {
        withCredentials: !0,
        cancelToken: t?.token,
      });
      if (n?.status == 200 && n.data?.success == 1) {
        this.m_mapPriceProposals.delete(e);
        for (let t of this.m_rgKnownPriceKeys)
          this.GetPriceGridCellCallbackList(e, t).Dispatch(
            this.GetSavedPrice(e, t),
          );
        return (
          this.GetPackageOverridesCallbackList(e).Dispatch(),
          this.DispatchPriceOverridesCallbacks(),
          n.data
        );
      }
    } catch (e) {
      l = e;
    }
    let u = b(l);
    return (
      console.error(
        `CPackagePricingStore.CancelProposal: failed`,
        u.strErrorMsg,
        u,
      ),
      l?.response?.data ?? { success: 2 }
    );
  }
  GetLocalOverrideCountForPriceKey(e) {
    return this.m_mapOverridesPerPriceKey.get(e) ?? 0;
  }
  BAnyPackagePriceBelowMin(e) {
    if (!e) return !1;
    for (let t of this.m_rgKnownPriceKeys) {
      let n = this.GetPrice(e, t);
      if (n === void 0) continue;
      let { nMinPriceInCents: r, nMaxPriceInCents: i } = J(e, t);
      if (n < r) return !0;
    }
    return !1;
  }
};
(o([te], z.prototype, `m_mapOverridesPerPriceKey`, void 0),
  o([f], z.prototype, `OverridePrice`, null),
  o([ne], z.prototype, `UpdateOverridesPerPriceKey`, null));
function xe(e, t) {
  if (e.strPriceKey == t.strPriceKey) {
    let n = P(e.packageID),
      r = P(t.packageID);
    return x(n, r);
  }
  return x(U(e.strPriceKey), U(t.strPriceKey));
}
function B(e) {
  let t = e.split(`_`)[0];
  return z.Get().m_mapCurrencyData.get(t);
}
function V(e, t) {
  if (t === void 0) return [``, ``, ``];
  let n = B(t) ?? B(`USD`),
    r = ``;
  if (typeof e == `number`) {
    let t = e.toString();
    t.length < 3 && (t = (t.length == 1 ? `0` : ``) + `0` + t);
    let i = t.length - 2;
    for (let e = 0; e < i; e++) {
      let a = t.charAt(e);
      ((r += a),
        e < i - 1 &&
          (i - e - 1) % 3 == 0 &&
          a != `-` &&
          (r += n.strThousandsSeparator));
    }
    n.bWholeUnitsOnly ||
      ((r += n.strDecimalSymbol), (r += t.substr(t.length - 2)));
  }
  return n.bSymbolIsPrefix
    ? [n.strSymbol + n.strSymbolAndNumberSeparator, r, ``]
    : [``, r, n.strSymbolAndNumberSeparator + n.strSymbol];
}
var H = new Map([
  [`USD`, `@1`],
  [`CNY`, `@2`],
  [`EUR`, `@3`],
  [`GBP`, `@4`],
  [`CAD`, `@5`],
  [`AUD`, `@6`],
  [`JPY`, `@7`],
  [`KRW`, `@8`],
  [`RUB`, `@9`],
]);
function U(e) {
  return H.has(e) ? H.get(e) : e.indexOf(`_`) > 0 ? `ZZZ` + e : e;
}
function Se(e, t) {
  return z.Get().GetPrice(e, t);
}
function Ce(e) {
  return z.Get().GetPublishedCountryOverrides(e);
}
function we(e, t) {
  return z.Get().GetPublishedPriceCountryOverride(e, t);
}
function Te(e, t) {
  return z.Get().GetPublishedPrice(e, t);
}
function Ee(e, t) {
  return z.Get().GetProposedPrice(e, t);
}
function De(e, t) {
  return z.Get().GetLocalOverridePrice(e, t);
}
function Oe(e) {
  let t = z.Get().m_strDisplayPriceKey;
  return V(z.Get().GetPrice(e, t), t).join(``);
}
function W() {
  let [e, t] = w.useState(z.Get().m_strDisplayPriceKey);
  return (l(z.Get().m_displayPriceKeyCallbackList, t), e);
}
function G(e, t) {
  let [n, r] = w.useState(z.Get().GetPrice(e, t));
  return (
    l(z.Get().GetPriceGridCellCallbackList(e, t), r),
    w.useEffect(() => r(z.Get().GetPrice(e, t)), [e, t]),
    n
  );
}
function ke(e) {
  return Ae(e, W());
}
function Ae(e, t) {
  return V(G(e, t), t).join(``);
}
function je(e, t, n) {
  return (
    e -
    ((B(n) ?? B(`USD`))?.bWholeUnitsOnly
      ? Math.ceil((e * t) / 1e4) * 100
      : Math.ceil((e * t) / 100))
  );
}
function Me(e, t) {
  let n = W(),
    r = G(e, n);
  if (typeof r == `number`) return V(je(r, t, n), n).join(``);
}
function Ne(e, t, n) {
  let r = 0;
  for (let i of e) {
    let e = [],
      a = [],
      o = z.Get().GetPrice(i, `USD`);
    if (!(!o || o <= 0)) {
      for (let r of z.Get().m_rgKnownPriceKeys) {
        if (r == `USD`) continue;
        let { nSuggestedPriceInCents: o, nGuidelinesLevel: s } = R(
          t,
          n,
          z.Get().GetPrice(i, `USD`),
          C(r),
          k(r),
        );
        s !== null && z.Get().GetPrice(i, r) != o && (e.push(r), a.push(o));
      }
      e.length > 0 && (z.Get().OverridePricesForPackage(i, e, a), (r += 1));
    }
  }
  r > 0 && z.Get().DispatchPriceOverridesCallbacks();
}
function Pe() {
  let e = L(),
    t = _(),
    n = g();
  return w.useCallback(() => Ne(e, t, n), [e, t, n]);
}
function Fe(e, t) {
  let n = p();
  l(z.Get().GetPriceGridCellCallbackList(e, t), n);
  let r = z.Get().GetPrice(e, t),
    i = _(),
    a = g();
  l(z.Get().GetPriceGridCellCallbackList(e, `USD`), n);
  let { nSuggestedPriceInCents: o, nGuidelinesLevel: s } = R(
      i,
      a,
      z.Get().GetPrice(e, `USD`),
      C(t),
      k(t),
    ),
    c = w.useCallback((n) => z.Get().OverridePrice(e, t, n), [e, t]),
    u = z.Get().GetPublishedPrice(e, t),
    d = z.Get().GetProposedPrice(e, t),
    { nMinPriceInCents: f, nMaxPriceInCents: m } = J(e, t),
    h = q(t, r, s);
  return w.useMemo(
    () => ({
      nPriceInCents: r,
      nProposedPriceInCents: d,
      nPublishedPriceInCents: u,
      nMinPriceInCents: f,
      nMaxPriceInCents: m,
      nMaxDiscountPercentage: h,
      nSuggestedPriceInCents: o,
      fnSetPrice: c,
    }),
    [r, d, u, f, m, h, o, c],
  );
}
var K = 90,
  Ie = 10;
function q(e, t, n, r) {
  let i = z.Get().GetMinimumDiscountPrice(e),
    a = t ? Math.floor((100 * (t - i)) / t) : K,
    o = Math.min(K, Math.floor((100 * (n - 50)) / n));
  return r
    ? t < i || a < Ie
      ? null
      : Math.max(Math.min(a, K), 0)
    : a < o
      ? a
      : null;
}
function Le(e) {
  let [t, n] = w.useState(() => z.Get().BAnyPackagePriceBelowMin(e)),
    r = w.useCallback(() => {
      let t = z.Get().BAnyPackagePriceBelowMin(e);
      n(t);
    }, [e, n]);
  return (l(z.Get().GetPackageOverridesCallbackList(e), r), t);
}
function Re(e) {
  return z.Get().BAnyPackagePriceBelowMin(e);
}
function J(e, t) {
  let n = z.Get();
  return {
    nMinPriceInCents: n.GetMinimumBasePrice(t),
    nMaxPriceInCents: n.m_setRecurringSubscriptions.has(e)
      ? n.GetPublishedPrice(e, t)
      : null,
  };
}
function ze() {
  return w.useCallback((e, t, n) => {
    let r = z.Get().GetPrice(e, t);
    return (
      z.Get().OverridePrice(e, t, n),
      r == n
        ? null
        : {
            packageID: e,
            strPriceKey: t,
            nPriceInCents: n,
            nOldPriceInCents: r,
          }
    );
  }, []);
}
function Y(e) {
  let t = p();
  return (
    l(z.Get().GetPriceGridCellCallbackList(e, `USD`), t),
    z.Get().m_mapPriceProposals.get(e)
  );
}
function Be() {
  return Array.from(z.Get().m_mapPriceProposals.values());
}
function Ve(e) {
  return z.Get().m_mapPriceProposals.get(e);
}
function He(e) {
  let t = !1;
  for (let n of z.Get().m_rgKnownPriceKeys) {
    let r = z.Get().GetPublishedPrice(e, n);
    t ||= r != 0 && r !== void 0;
  }
  return t;
}
function Ue(e) {
  let t = Y(e),
    n = [];
  for (let r of z.Get().m_rgKnownPriceKeys) {
    let i = t.prices[r],
      a = z.Get().GetPublishedPrice(e, r);
    i != a &&
      n.push({
        packageID: e,
        strPriceKey: r,
        nPriceInCents: i,
        nOldPriceInCents: a,
      });
  }
  return n;
}
function We() {
  return z.Get().m_rgKnownPriceKeys;
}
function Ge(e) {
  let t = z.Get().m_mapPriceKeyDescriptions.get(e);
  return t ? t.strDescription : ``;
}
function Ke(e) {
  return w.useCallback(() => {
    z.Get().DiscardAllLocalPriceOverridesForKey(e);
  }, [e]);
}
function qe(e) {
  return w.useCallback(() => {
    z.Get().DiscardLocalPriceOverridesForPackage(e);
  }, [e]);
}
function Je(e) {
  return w.useCallback(() => {
    z.Get().CancelProposal(e);
  }, [e]);
}
function Ye() {
  let [e, t] = w.useState(z.Get().m_strDisplayPriceKey);
  return {
    strPriceKey: e,
    rgSupportedPriceKeys: z.Get().m_rgKnownPriceKeys,
    fnSetPriceKey: w.useCallback((e) => {
      (t(e),
        (z.Get().m_strDisplayPriceKey = e),
        z.Get().m_displayPriceKeyCallbackList.Dispatch(e));
    }, []),
  };
}
function Xe(e) {
  let t = p();
  return (
    l(z.Get().m_allPriceOverridesCallbackList, t),
    z.Get().BHasLocalPriceOverrides(e)
  );
}
function Ze(e) {
  return z.Get().BHasLocalPriceOverrides(e);
}
function Qe() {
  let [e, t] = w.useState(() => z.Get().GetAllLocalPriceOverrides());
  return (l(z.Get().m_allPriceOverridesCallbackList, t), e);
}
function $e(e) {
  return ee(() => z.Get().GetLocalOverrideCountForPriceKey(e));
}
function et() {
  return w.useCallback(
    () => z.Get().GetAllLocalPriceOverrides()?.length > 0,
    [],
  );
}
function tt() {
  return w.useCallback(() => z.Get().DiscardAllLocalPriceOverrides(), []);
}
function nt() {
  return z.Get().OverridePrice;
}
function rt() {
  return w.useCallback(
    (e, t, n, r) => z.Get().SubmitProposalToServer(e, t, n, r),
    [],
  );
}
function it() {
  return w.useCallback(
    (e, t) => z.Get().PublishApprovedProposal(e, t, 6e4),
    [],
  );
}
function at(e) {
  let t = [],
    n = z.Get().m_rgKnownPriceKeys;
  for (let r of e) {
    if (He(r)) continue;
    let e = !1;
    for (let t of n)
      if (z.Get().BPriceKeyRequired(t) && !z.Get().GetPrice(r, t)) {
        e = !0;
        break;
      }
    e && t.push(r);
  }
  return t;
}
function X(e, t) {
  let n = h(`#PackageGrid_MultipleBaseGamesFoundForPackage`),
    r = h(`#PackageGrid_NoBaseGameFoundForPackage`),
    i = e.original.appName,
    a = t.original.appName,
    o = i == n,
    s = i == r,
    c = !o && !s,
    l = a == n,
    u = a == r,
    d = !l && !u;
  if (c && d) return i.localeCompare(a);
  if (!c && !d) {
    if (o == l && s == u) {
      let n = e.original.packageName,
        r = t.original.packageName;
      return n && r
        ? n.localeCompare(r)
        : !n && !r
          ? e.original.packageID - t.original.packageID
          : n
            ? -1
            : 1;
    }
    return o ? -1 : 1;
  }
  return c ? -1 : 1;
}
var Z = (e) => e.nextElementSibling,
  Q = (e) => e.previousElementSibling,
  $ = (e, t) => {
    let n = e.getAttribute(`data-table-column-id`),
      r = e.parentElement,
      i = r && t(r);
    for (; n && i;) {
      for (let e of Array.from(i.children))
        if (n == e.getAttribute(`data-table-column-id`)) return e;
      i = t(i);
    }
    return null;
  },
  ot = new Map([
    [38, (e) => $(e, Q)],
    [39, Z],
    [40, (e) => $(e, Z)],
    [37, Q],
    [9, (e) => $(e, Z)],
    [13, (e) => $(e, Z)],
  ]);
function st(e) {
  return m(e, (e) => e.getAttribute(`data-table-column-id`) != null);
}
function ct(e) {
  let t = Array.prototype.slice.call(e.children).reverse();
  for (; t.length > 0;) {
    let e = t.pop();
    if (e.tagName.toLowerCase() === `input`) return e;
    t.push(...Array.prototype.slice.call(e.children).reverse());
  }
  return null;
}
function lt(e) {
  let t = ot.get(e.keyCode);
  if ((e.keyCode === 9 && e.shiftKey && (t = (e) => $(e, Q)), !t)) return;
  let n = st(e.currentTarget),
    r = t(n);
  for (; r;) {
    let n = ct(r);
    if (n) {
      (n.focus(), e.preventDefault());
      return;
    }
    r = t(r);
  }
}
export {
  ge as $,
  it as A,
  Fe as B,
  Le as C,
  Ye as D,
  Ke as E,
  Xe as F,
  P as G,
  F as H,
  We as I,
  ve as J,
  _e as K,
  $e as L,
  ze as M,
  Me as N,
  et as O,
  ke as P,
  pe as Q,
  Y as R,
  Pe as S,
  qe as T,
  I as U,
  R as V,
  N as W,
  be as X,
  M as Y,
  L as Z,
  Ce as _,
  nt as a,
  Qe as b,
  at as c,
  Se as d,
  me as et,
  Oe as f,
  Ee as g,
  J as h,
  Re as i,
  rt as j,
  tt as k,
  Ve as l,
  q as m,
  X as n,
  he as nt,
  V as o,
  De as p,
  ye as q,
  Ze as r,
  D as rt,
  B as s,
  lt as t,
  fe as tt,
  Ge as u,
  Te as v,
  Je as w,
  Be as x,
  we as y,
  Ue as z,
};
