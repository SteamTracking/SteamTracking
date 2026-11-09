/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  $t as e,
  A as t,
  R as n,
  U as r,
  _t as i,
  ct as a,
  gt as o,
  kt as s,
  nt as c,
  on as l,
} from "./mobx.esm.js";
import { _t as u, d, l as f, q as p, r as m, t as h } from "./src.js";
import {
  Ht as g,
  It as _,
  Mn as v,
  Pn as y,
  Qt as b,
  Ra as x,
  Sa as S,
  fn as C,
  jt as w,
  oa as T,
  sa as E,
  un as D,
} from "./dialogs.js";
import {
  C as O,
  D as k,
  d as A,
  h as j,
  y as M,
} from "./storebrowsequerycontext.js";
import {
  C as N,
  D as P,
  E as ee,
  Et as F,
  Ft as te,
  Ht as ne,
  Ii as re,
  N as ie,
  Pi as ae,
  Q as oe,
  Qn as se,
  Rt as ce,
  S as le,
  T as ue,
  Ut as de,
  Vn as fe,
  Y as pe,
  Z as me,
  _ as he,
  _t as ge,
  at as I,
  b as _e,
  c as ve,
  d as ye,
  et as be,
  f as xe,
  g as Se,
  h as Ce,
  it as we,
  l as Te,
  m as Ee,
  mt as De,
  n as Oe,
  nt as ke,
  o as Ae,
  on as je,
  rt as Me,
  sn as Ne,
  u as Pe,
  v as Fe,
  vt as Ie,
  x as Le,
  y as L,
  zt as Re,
} from "./saletags.js";
import { n as ze, r as R } from "./storenaveventcontext.js";
import { w as z } from "./react-router.js";
import { t as Be } from "./useQuery.js";
import { w as Ve, y as He } from "./storeitem.js";
import { n as Ue, r as We } from "./appidutils.js";
import {
  d as Ge,
  m as Ke,
  n as qe,
  p as Je,
  r as Ye,
} from "./salestoreitemutils.js";
import { t as Xe } from "./axios.js";
import { t as B } from "./axiosutils.js";
import { t as V } from "./throbber.js";
import { a as Ze, c as Qe } from "./localization2.js";
import { r as $e } from "./eventdevfeaturestore.js";
import { h as H, m as U } from "./partnereventshared.module.js";
import "./steamid.js";
import { i as W } from "./partnereventdialog.module.js";
import { n as et } from "./numberformats.js";
import { c as tt } from "./creatorhomestore.js";
import { t as nt } from "./loadingspinner.js";
import { t as rt } from "./storegamehover.js";
import { t as it } from "./storeitemhooks.js";
import { a as at, r as ot } from "./clanstore.js";
function G(e) {
  return e;
}
var K = l(Xe()),
  q = l(s()),
  J = i();
function st(e) {
  let { children: t, ...n } = e,
    r = R(),
    i = q.useMemo(
      () => ({ ...Ze.GetDefaultParams(), ...r, ...n }),
      [r, n.domain, n.controller, n.method, n.submethod, n.feature, n.depth],
    );
  return (0, J.jsx)(ze, { ...i, children: t });
}
function ct() {
  return { width: 231, height: 87 };
}
var lt = `_4cqzz9ahZPc-`,
  ut = `_1i4D-abW7us-`,
  dt = `InaZA4MxyUE-`,
  ft = `jPVI0mk1nqU-`,
  pt = `Ypr-OC7lYjM-`,
  mt = `RW-yCN2mjag-`,
  ht = `-GGXIbckfGw-`,
  gt = `capsule_index_`;
function _t(e) {
  let {
      capsule: r,
      bShowParentApp: i,
      elElementToAppendToHover: a,
      index: o,
      navKey: s,
      bHideStoreHover: c,
      onlyOneDiscountPct: l,
      bPreferDemoStorePage: u,
      bShowEarlyAccessBanner: d,
    } = e,
    f = n(),
    [m, h] = q.useState(!1),
    [g, _] = q.useState(!1),
    [v, y] = q.useState(!1),
    b = q.useRef(!1);
  q.useEffect(() => {
    if (g && !b.current) {
      let e = window.setTimeout(() => {
        ((b.current = !0), y(!0));
      }, 500);
      return () => window.clearTimeout(e);
    }
    return (y(g || m), () => {});
  }, [g, m]);
  let { data: S } = re(),
    C = !!S?.preferences?.disable_microtrailers,
    w = Ge(r),
    { data: T } = j(w),
    E = We(i ? T?.related_items?.parent_appid : void 0),
    { data: D } = j(E);
  if (!T || !w) return null;
  let O = !!D && !!E,
    k = (0, J.jsx)(yt, {
      ...e,
      strExtraParams: e.strExtraParams,
      id: w,
      bIsHovered: v && !C,
      bHasParentAppToDisplay: O,
      onlyOneDiscountPct: l,
      bShowEarlyAccessBanner: d,
      bUsePanel: !c && !f,
    });
  return (0, J.jsxs)(x, {
    className: t({ [je]: !0, [fe]: v && !C && f, [gt + o]: o == 0 }),
    navEntryPreferPosition: p.PREFERRED_CHILD,
    navKey: s,
    onFocusWithin: e.imageType == `library` ? void 0 : _,
    children: [
      (0, J.jsxs)(I, {
        appid: T.appid,
        children: [
          c
            ? (0, J.jsx)(`div`, {
                onMouseEnter: () => h(!0),
                onMouseLeave: () => h(!1),
                children: k,
              })
            : (0, J.jsx)(we, {
                className: te,
                id: w,
                elElementToAppend: e.elElementToAppendToHover,
                bShowDemoButton: e.bShowDemoButton,
                bPreferDemoStorePage: e.bPreferDemoStorePage,
                bShowDeckCompatibilityDialog: e.bShowDeckCompatibilityDialog,
                eHardwareCompatibilityDisplay: e.eHardwareCompatibilityDisplay,
                bHidePrice: e.bHidePrice,
                bUseSubscriptionLayout: e.bUseSubscriptionLayout,
                strExtraParams: e.strExtraParams,
                nCreatorAccountID: e.creatorAccountID,
                nWidthMultiplier: e.nWidthMultiplier,
                bShowIgnoreButton: e.bShowIgnoreButton,
                bShowDescription: e.bShowDescriptionInHover,
                children: k,
              }),
          !!a && (0, J.jsx)(J.Fragment, { children: a }),
        ],
      }),
      O &&
        (0, J.jsx)(vt, {
          strExtraParams: e.strExtraParams,
          parentID: E,
          parentStoreItemDefaultInfo: D,
          childAppType: T.type,
          bPreferDemoStorePage: !!u,
        }),
    ],
  });
}
function vt(e) {
  let {
      strExtraParams: t,
      parentID: r,
      parentStoreItemDefaultInfo: i,
      childAppType: a,
      bPreferDemoStorePage: o,
    } = e,
    s = R(),
    c = n(),
    { data: l } = A(r);
  return l
    ? (0, J.jsx)(d, {
        className: Re,
        ...qe(i, s, c, o, t),
        children: (0, J.jsxs)(I, {
          appid: i.appid,
          children: [
            (0, J.jsx)(`div`, {
              className: Ne,
              children: T(
                a == 11
                  ? `#SalePage_ParentApp_SoundTrack`
                  : `#SalePage_ParentApp_DLC`,
              ),
            }),
            (0, J.jsx)(rt, {
              id: r,
              strExtraParams: t,
              children: (0, J.jsx)(`img`, {
                loading: `lazy`,
                className: lt,
                alt: i.name || ``,
                src: se(l, `small_capsule`),
                ...ct(),
              }),
            }),
          ],
        }),
      })
    : null;
}
function yt(e) {
  let {
      id: r,
      bHideStatusBanners: i,
      bUsePanel: a,
      strExtraParams: o,
      index: s,
      imageType: c,
      bHasParentAppToDisplay: l,
      bIsHovered: u,
      strDoubleCapsuleMessage: d,
      bPreferDemoStorePage: p,
      bShowEarlyAccessBanner: m,
      bPreferAssetWithoutOverride: h,
    } = e,
    g = R(),
    _ = me(),
    y = n(),
    b = Ue(r),
    { data: S } = j(r);
  if (!S) return null;
  let C = a ? void 0 : v(Qe(`${oe(S, p)}${o ? `?${o}` : ``}`, g, _)),
    w = a ? x : f,
    T = u && y,
    E = !!d;
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsxs)(`div`, {
        className: t({ [ut]: E }),
        children: [
          (0, J.jsxs)(w, {
            href: C,
            style: {
              display: `block`,
              cursor: `pointer`,
              position: y ? `relative` : void 0,
              zIndex: T ? 4 : void 0,
            },
            className: t({ [dt]: E }),
            preferredFocus: l,
            focusable: !0,
            noFocusRing: T,
            children: [
              (0, J.jsx)(Ye, {
                appids: b,
                hide_status_banners: i,
                show_early_access: m,
              }),
              c != `none` &&
                (0, J.jsx)(Ke, {
                  imageType: c,
                  id: r,
                  bPreferAssetWithoutOverride: h,
                }),
              (0, J.jsx)(Je, { id: r }),
              (0, J.jsx)(`div`, {
                className: t({ [ht]: T }),
                children: (0, J.jsx)(ge, {
                  id: r,
                  active: u,
                  bIsHoverMode: !0,
                  eGrowOnActivate: T
                    ? Ie.k_ETrailerGrowAmount_Implicit
                    : void 0,
                }),
              }),
            ],
          }),
          E && (0, J.jsx)(bt, { id: r, strDoubleCapsuleMessage: d, index: s }),
        ],
      }),
      (0, J.jsx)(xt, { ...e }),
    ],
  });
}
function bt(e) {
  let { id: n, strDoubleCapsuleMessage: r, index: i } = e,
    { data: a } = M(n),
    { data: o } = O(n);
  return (0, J.jsxs)(`div`, {
    className: t(ft, `TwoWidthSideInfo`),
    children: [
      (0, J.jsx)(`div`, { className: pt, children: r }),
      (0, J.jsx)(`div`, {
        className: mt,
        children: (0, J.jsx)(`span`, { children: a ? De(a) : `` }),
      }),
      (0, J.jsx)(Oe, {
        bHideTitle: !0,
        rgTagIDs: o?.map((e) => e.tagid) || [],
        instanceNum: i,
      }),
    ],
  });
}
function xt(e) {
  let {
      id: t,
      bHidePriceIfOwned: n,
      bHideStatusBanners: r,
      bUseSubscriptionLayout: i,
      elElementToAppendToHover: a,
      bHidePrice: o,
      bHidePlatforms: s,
      creatorAccountID: c,
      bIsHovered: l,
      onlyOneDiscountPct: u,
      strDoubleCapsuleMessage: d,
    } = e,
    { data: f } = j(t),
    { bIsOwned: p } = ae(t);
  return i && f && f.item_type == 0 && f.appid
    ? (0, J.jsx)(be, { appid: f.appid, bIsMuted: l })
    : a
      ? null
      : (0, J.jsx)(Tt, {
          id: t,
          bHidePrice: o,
          bShowInLibraryInsteadOfPrice: !!(p && n),
          bHidePlatforms: s,
          creatorAccountID: c,
          bShowName: e.bShowName,
          onlyOneDiscountPct: u,
          bShowWishlistButton: !!d,
        });
}
var St = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`;
function Ct(e, t) {
  let n = `0000000000000000000000000000000000000000`;
  typeof e == `string` ? (n = e) : e && (n = wt(e) || n);
  let i = `.jpg`;
  (n === `0000000000000000000000000000000000000000` && (n = St),
    n.length == 44 && ((i = n.slice(-4)), (n = n.slice(0, 40))));
  let a = r.AVATAR_BASE_URL;
  switch (
    (a ||
      ((a = r.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
      (a += n.slice(0, 2) + `/`)),
    (a += n),
    t)
  ) {
    case `X-Small`:
    case `Small`:
      break;
    case `Medium`:
    case `MediumLarge`:
      a += `_medium`;
      break;
    case `Large`:
    case `X-Large`:
    case `FillArea`:
      a += `_full`;
  }
  return ((a += i), a);
}
function wt(e) {
  return e
    ? (typeof e[Symbol.iterator] == `function`
        ? Array.from(e)
        : Object.values(e).filter((e) => typeof e == `number`)
      )
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``)
    : ``;
}
function Tt(e) {
  let {
      id: n,
      bHidePrice: r,
      bShowInLibraryInsteadOfPrice: i,
      bHidePlatforms: a,
      strClassName: o,
      creatorAccountID: s,
      bShowName: c,
      onlyOneDiscountPct: l,
      bShowAddToCart: u,
      bShowWishlistButton: d,
    } = e,
    f = (0, q.useRef)(null),
    [p, m] = (0, q.useState)(!1),
    { data: h } = j(n);
  if (
    ((0, q.useEffect)(() => {
      f.current && m(f.current.offsetWidth < 370);
    }, [f]),
    !n || !(`appid` in n || `bundleid` in n || `packageid` in n))
  )
    return null;
  let g = !!(d && h?.item_type == 0);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      !(!s && !u && !g && a && r) &&
        (0, J.jsxs)(`div`, {
          ref: f,
          className: t(`fNtXEMzHz58-`, `CapsuleBottomBar`, o),
          children: [
            s && (0, J.jsx)(Dt, { creatorAccountID: s, ...e }),
            u &&
              (0, J.jsx)(pe, {
                id: n,
                className: t(`RAahmG4F6sc-`, `oqhyMK1Krt0-`),
              }),
            g &&
              `appid` in n &&
              (0, J.jsx)(at, {
                appid: n.appid,
                className: t(`RAahmG4F6sc-`, `GRw4r5TpD5s-`),
              }),
            !a &&
              (0, J.jsx)(Me, {
                id: n,
                bMinimizePlatforms: p,
                bHideWindows: !0,
              }),
            !r &&
              (0, J.jsx)(`span`, {
                className: `_0MLgqm-W-nA-`,
                children: (0, J.jsx)(ke, {
                  id: n,
                  bShowInLibrary: i,
                  onlyOneDiscountPct: l,
                }),
              }),
          ],
        }),
      c && (0, J.jsx)(Et, { id: n }),
    ],
  });
}
function Et(e) {
  let { id: t } = e,
    { data: n } = j(t);
  return n?.name
    ? (0, J.jsx)(`div`, { className: ce, children: n.name })
    : null;
}
function Dt(e) {
  let { creatorAccountID: n, strClassName: r } = e,
    i = (0, q.useMemo)(() => ({ creatorid: n }), [n]),
    { data: a } = j(i),
    { data: o } = A(i);
  if (!a) return null;
  let s = Ct(o?.clan_avatar, `Medium`),
    c = a.name || ``;
  return (0, J.jsxs)(`div`, {
    className: t(F, r),
    children: [
      (0, J.jsx)(`img`, { className: t(ne), src: s, alt: c }),
      (0, J.jsx)(`span`, { className: de, children: c }),
    ],
  });
}
var Y = class e {
  m_mapAppIDToPaymentPartners = new Map();
  m_mapAppIDToPromise = new Map();
  m_mapPackageIDToPaymentPartners = new Map();
  m_mapPackageIDToPromise = new Map();
  m_mapBundleIDToPaymentPartners = new Map();
  m_mapBundleIDToPromise = new Map();
  GetInfoForApp(e) {
    return this.m_mapAppIDToPaymentPartners.get(e);
  }
  BHasInfoForApp(e) {
    return this.m_mapAppIDToPaymentPartners.has(e);
  }
  GetInfoForPackage(e) {
    return this.m_mapPackageIDToPaymentPartners.get(e);
  }
  BHasInfoForPackage(e) {
    return this.m_mapPackageIDToPaymentPartners.has(e);
  }
  GetInfoForBundle(e) {
    return this.m_mapBundleIDToPaymentPartners.get(e);
  }
  BHasInfoForBundle(e) {
    return this.m_mapBundleIDToPaymentPartners.has(e);
  }
  GetInfoForStoreItem(e, t) {
    switch (t) {
      case 0:
        return this.GetInfoForApp(e);
      case 1:
        return this.GetInfoForPackage(e);
      case 2:
        return this.GetInfoForBundle(e);
      default:
        return null;
    }
  }
  BHasInfoForStoreItem(e, t) {
    switch (t) {
      case 0:
        return this.BHasInfoForApp(e);
      case 1:
        return this.BHasInfoForPackage(e);
      case 2:
        return this.BHasInfoForBundle(e);
      default:
        return !1;
    }
  }
  async LoadAppPartnerInfo(e) {
    return (
      this.m_mapAppIDToPromise.has(e) ||
        this.m_mapAppIDToPromise.set(
          e,
          this.InternalLoadAppPartnerInfo(e, null, null),
        ),
      this.m_mapAppIDToPromise.get(e)
    );
  }
  async LoadPackagePartnerInfo(e) {
    return (
      this.m_mapPackageIDToPromise.has(e) ||
        this.m_mapPackageIDToPromise.set(
          e,
          this.InternalLoadAppPartnerInfo(null, e, null),
        ),
      this.m_mapPackageIDToPromise.get(e)
    );
  }
  async LoadBundlePartnerInfo(e) {
    return (
      this.m_mapBundleIDToPromise.has(e) ||
        this.m_mapBundleIDToPromise.set(
          e,
          this.InternalLoadAppPartnerInfo(null, null, e),
        ),
      this.m_mapBundleIDToPromise.get(e)
    );
  }
  async LoadStoreItemPartnerInfo(e, t) {
    switch (t) {
      case 0:
        return this.LoadAppPartnerInfo(e);
      case 1:
        return this.LoadPackagePartnerInfo(e);
      case 2:
        return this.LoadBundlePartnerInfo(e);
      default:
        return null;
    }
  }
  async InternalLoadAppPartnerInfo(e, t, n) {
    let r = null;
    try {
      let i = { appid: e, packageid: t, bundleid: n },
        a = c.PARTNER_BASE_URL + `promotion/dailydeals/ajaxgetpartner`,
        o = await K.default.get(a, { params: i, withCredentials: !0 });
      if (o?.status == 200 && o.data?.success == 1)
        return e
          ? (this.m_mapAppIDToPaymentPartners.set(e, o.data.partnerinfo),
            this.m_mapAppIDToPaymentPartners.get(e))
          : t
            ? (this.m_mapPackageIDToPaymentPartners.set(t, o.data.partnerinfo),
              this.m_mapPackageIDToPaymentPartners.get(t))
            : (this.m_mapBundleIDToPaymentPartners.set(n, o.data.partnerinfo),
              this.m_mapBundleIDToPaymentPartners.get(n));
      r = B(o);
    } catch (e) {
      r = B(e);
    }
    return (
      console.error(
        `CPartnerPaymentStore.LoadAppPartnerInfo failed: ` + r?.strErrorMsg,
        r,
      ),
      null
    );
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
  constructor() {}
};
function Ot(e) {
  return X(e, 0);
}
function kt(e) {
  return X(e.id, Ve(e));
}
function X(e, t) {
  let [n, r] = q.useState(() => Y.Get().GetInfoForStoreItem(e, t));
  return (
    q.useEffect(() => {
      e
        ? !Y.Get().BHasInfoForStoreItem(e, t) || n == null
          ? Y.Get().LoadStoreItemPartnerInfo(e, t).then(r)
          : Y.Get().BHasInfoForStoreItem(e, t) &&
            n != Y.Get().GetInfoForStoreItem(e, t) &&
            r(Y.Get().GetInfoForStoreItem(e, t))
        : r(null);
    }, [e, t, n]),
    n
  );
}
function At(e) {
  let [t, n] = (0, q.useState)(null);
  return (
    (0, q.useEffect)(() => {
      if (e?.length > 0) {
        let t = e.map((e) => Y.Get().LoadStoreItemPartnerInfo(e, 0));
        Promise.all(t).then(() => {
          let t = new Map();
          (e.forEach((e) => {
            Y.Get().BHasInfoForApp(e) && t.set(e, Y.Get().GetInfoForApp(e));
          }),
            n(t));
        });
      }
    }, [e]),
    t
  );
}
function jt(e) {
  let { href: t, children: n, bAllowFocuseableAnchor: i, ...a } = e;
  return r.EREALM === o.k_ESteamRealmChina
    ? (0, J.jsx)(`div`, { ...a, children: n })
    : i
      ? (0, J.jsx)(f, { href: t, ...a, children: n })
      : (0, J.jsx)(`a`, { href: t, ...a, children: n });
}
function Mt(e) {
  let {
    strURL: n,
    strName: r,
    strAvatarURL: i,
    nFollowers: a,
    strCreatorType: o,
    strTagLine: s,
    strMemberListURL: c,
    followButton: l,
    bSmallFormat: u,
    bMinimalDisplay: d,
    bCompact: f,
  } = e;
  return (0, J.jsx)(st, {
    feature: `salecreatorhome`,
    children: (0, J.jsxs)(x, {
      className: t(Fe, u ? ee : N, d ? ue : ``, f ? Pe : ``),
      "flow-children": `row`,
      children: [
        !!o && (0, J.jsx)(`span`, { className: `SG9Xn5tF5a0-`, children: o }),
        (0, J.jsxs)(`div`, {
          className: L,
          children: [
            (0, J.jsx)(`div`, {
              className: Se,
              style: { backgroundImage: `url(${i} )` },
            }),
            (0, J.jsxs)(`div`, {
              className: t(he),
              children: [
                (0, J.jsxs)(`div`, {
                  className: H,
                  children: [
                    (0, J.jsx)(jt, {
                      href: y(n),
                      className: Te,
                      bAllowFocuseableAnchor: !0,
                      children: (0, J.jsx)(`img`, {
                        className: t(ve, `Avatar_Trgt`),
                        src: i,
                        alt: ``,
                      }),
                    }),
                    (0, J.jsxs)(`div`, {
                      className: t(U, ye),
                      children: [
                        (0, J.jsxs)(`div`, {
                          className: t(Ee, U),
                          children: [
                            (0, J.jsx)(jt, {
                              href: y(n),
                              className: xe,
                              children: r,
                            }),
                            !!s &&
                              (0, J.jsx)(`div`, {
                                className: t(`_0UzWiVhBe8U-`, `ct7kvDppls0-`),
                                children: s,
                              }),
                          ],
                        }),
                        (0, J.jsx)(`div`, {
                          className: t({ [U]: u, [H]: !u, [P]: !0 }),
                          children: (0, J.jsxs)(`div`, {
                            className: t(_e),
                            children: [
                              l,
                              (0, J.jsxs)(`div`, {
                                className: t({ [le]: !0 }),
                                children: [
                                  (0, J.jsx)(`span`, {
                                    children: T(`#CreatorHome_JustFollowers`),
                                  }),
                                  (0, J.jsx)(`span`, {
                                    className: Le,
                                    children: et(a),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                !!c &&
                  (0, J.jsx)(`a`, {
                    href: c,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `GEroszngeLM-`,
                    children: T(`#ClanMembershipList`),
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Nt(e) {
  switch (e) {
    case `publisher`:
      return T(`#CreatorHome_PublishedBy`);
    case `franchise`:
      return T(`#CreatorHome_InFranchise`);
  }
  return T(`#CreatorHome_DevelopedBy`);
}
function Pt(e) {
  let {
      creatorID: t,
      bShowTagline: n,
      bHideCreatorType: r,
      bSmallFormat: i,
      bHideFollowButton: a,
      bAddLinkToMemberList: o,
      bMinimalDisplay: s,
      bCompact: l,
    } = e,
    { creatorHome: u, isFetching: d } = tt(t.clan_account_id),
    [f] = ie();
  return f || (!u && d)
    ? (0, J.jsx)(`div`, {
        className: L,
        children: (0, J.jsx)(V, {
          string: T(`#Loading`),
          size: `medium`,
          position: `center`,
        }),
      })
    : u
      ? (0, J.jsx)(m, {
          children: (0, J.jsx)(Mt, {
            strURL: u.GetCreatorHomeURL(t.type),
            strName: u.GetName(),
            strAvatarURL: u.GetAvatarURLFullSize(),
            nFollowers: u.GetNumFollowers(),
            strCreatorType: r ? void 0 : Nt(t.type),
            strTagLine: n ? u.GetTagLine() : void 0,
            strMemberListURL: o
              ? c.COMMUNITY_BASE_URL +
                `gid/` +
                u.GetClanSteamID().ConvertTo64BitString() +
                `/members/`
              : void 0,
            followButton: a
              ? void 0
              : (0, J.jsx)(Ae, {
                  clanAccountID: t.clan_account_id,
                  creatorID: t,
                }),
            bSmallFormat: i,
            bMinimalDisplay: s,
            bCompact: l,
          }),
        })
      : null;
}
function Ft(t) {
  let { clanInfo: n, bAddLinkToMemberList: r } = t;
  if (
    (e(
      n && n.clanAccountID,
      `CuratorHoverContent expect clanInfo, not supplied`,
    ),
    !n)
  )
    return null;
  let i = {
    clan_account_id: n.clanAccountID,
    name: n.group_name,
    type: `developer`,
  };
  return (0, J.jsx)(`div`, {
    className: Ce,
    children: (0, J.jsx)(Pt, {
      creatorID: i,
      bSmallFormat: !0,
      bShowTagline: !0,
      bHideCreatorType: !0,
      bAddLinkToMemberList: r,
    }),
  });
}
var It = `_9LqpNw7qjdM-`,
  Lt = `_93Z4fzffJcU-`,
  Rt = `dR6hKqARMhQ-`,
  zt = `JRk3rj5vGwI-`,
  Bt = `iGL3Ei3Dyak-`,
  Vt = `BFCBEAWk9Ws-`;
function Ht(e) {
  let {
      fnSetItemID: t,
      strLabel: n,
      itemType: r,
      fnFilterID: i,
      className: a,
      tooltip: o,
      autoFocus: s,
      bIncludeRetired: l,
      bShowDLCToggle: d,
      bOnlyDLC: f,
      bRunQueryOnLoad: p,
      rgParentAppIDs: m,
    } = e,
    [h, v] = q.useState(``),
    [y, b] = q.useState(!1),
    [x, S] = q.useState(!1),
    [C] = q.useState(new u()),
    [w, E] = q.useState([]),
    [D, O] = q.useState([]),
    [k, A] = q.useState([]),
    j = q.createRef(),
    M = q.createRef(),
    N = (0, q.useCallback)(
      async (e, t) => {
        S(!0);
        let n = { json: 1, term: e, bexcluderetired: !l },
          a = `${c.PARTNER_BASE_URL}appsearch/suggestapps`;
        switch (r) {
          case 1:
            a = `${c.PARTNER_BASE_URL}admin/store/suggestpackage`;
            break;
          case 2:
            a = `${c.PARTNER_BASE_URL}bundles/suggestbundle`;
            break;
          default:
            (f ? (n.includedlc = !0) : t === !1 && (n.includedlc = !1),
              m &&
                ((n.bfilterappids = !0),
                (n.rgParentAppIds = JSON.stringify(m))));
        }
        let o = await K.default.get(a, { params: n, withCredentials: !0 });
        (o?.status == 200 && o.data?.success == 1
          ? i
            ? (E(o.data.matches?.filter((e) => i(e.id)) || []),
              O(o.data.package_matches?.filter((e) => i(e.packageid)) || []),
              A(o.data.bundle_matches?.filter((e) => i(e.bundleid)) || []))
            : (E(o.data.matches || []),
              O(o.data.package_matches || []),
              A(o.data.bundle_matches || []))
          : (E([]), O([]), A([])),
          S(!1));
      },
      [i, r, l, f, m],
    ),
    P = (0, q.useCallback)(
      (e) => {
        (b(e), N(j.current?.value, e));
      },
      [N, j],
    ),
    ee = (0, q.useCallback)(
      (e) => {
        let t = e?.target?.value?.toLocaleLowerCase() ?? ``;
        v(t);
        let n = M.current?.checked;
        C.Schedule(1e3, () => N(t, n));
      },
      [N, C, M],
    );
  q.useEffect(() => {
    p && N(h);
  }, []);
  let F;
  switch (r) {
    case 1:
      F = T(`#StoreAdmin_Search_Placeholder_package`);
      break;
    case 2:
      F = T(`#StoreAdmin_Search_Placeholder_bundle`);
      break;
    default:
      F = T(`#StoreAdmin_Search_Placeholder`);
  }
  let te = d && !f && r == 0;
  return (0, J.jsxs)(`div`, {
    className: a,
    children: [
      (0, J.jsxs)(`div`, {
        className: Vt,
        children: [
          (0, J.jsx)(_, {
            type: `text`,
            ref: j,
            className: void 0,
            label: n,
            tooltip: o,
            placeholder: F,
            onChange: ee,
            value: h,
            bAlwaysShowClearAction: h.length > 0,
            focusOnMount: s,
          }),
          te &&
            (0, J.jsx)(g, {
              ref: M,
              checked: y,
              onChange: P,
              className: `XvBYAJ74wLA-`,
              label: T(`#StoreAdmin_Search_IncludeDLC`),
            }),
        ],
      }),
      (0, J.jsxs)(`div`, {
        className: It,
        children: [
          x &&
            (0, J.jsx)(`div`, {
              className: `dtnEhnhLM-A-`,
              children: (0, J.jsx)(nt, { size: `small` }),
            }),
          w?.length > 0 &&
            w.map((e) =>
              (0, J.jsx)(
                Z,
                {
                  name: e.match,
                  id: e.id,
                  is_visible: !0,
                  type: 0,
                  fnSetItemID: () => {
                    (E([]), t(e.id, e.itemid));
                  },
                },
                e.id,
              ),
            ),
          D?.length > 0 &&
            D.map((e) =>
              (0, J.jsx)(
                Z,
                {
                  name: e.name,
                  id: e.packageid,
                  type: 1,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    (O([]), t(e.packageid));
                  },
                },
                e.packageid,
              ),
            ),
          k?.length > 0 &&
            k.map((e) =>
              (0, J.jsx)(
                Z,
                {
                  name: e.name,
                  id: e.bundleid,
                  type: 2,
                  is_visible: e.is_visible,
                  fnSetItemID: () => {
                    (A([]), t(e.bundleid));
                  },
                },
                e.bundleid,
              ),
            ),
        ],
      }),
    ],
  });
}
function Z(e) {
  let { name: n, id: r, type: i, is_visible: a, fnSetItemID: o } = e,
    [s] = it(r, i, { include_assets: !0 }),
    c = `#DailyDeals_HeaderArtMissing`;
  switch (i) {
    case 1:
      c = `#DailyDeals_PackageHeaderArtMissing`;
      break;
    case 2:
      c = `#DailyDeals_BundleHeaderArtMissing`;
  }
  return (0, J.jsxs)(`div`, {
    className: Lt,
    onClick: () => o(),
    children: [
      (0, J.jsx)(`div`, {
        className: t(zt, `AvatarImageCtn`),
        children: (0, J.jsx)(`img`, {
          src: s?.GetAssets()?.GetHeaderURL(),
          className: Bt,
          alt: T(c),
        }),
      }),
      (0, J.jsxs)(`div`, {
        className: Rt,
        children: [
          !a &&
            (0, J.jsxs)(`span`, {
              children: [T(`#Sale_FeaturingHidden`), ` `],
            }),
          n,
          i == 1 ? ` (${r})` : ``,
        ],
      }),
    ],
  });
}
function Ut(e, t) {
  let n = a(t);
  return e ? e[n] : ``;
}
function Wt(e, t, n) {
  let r = a(t);
  return e[r] != n && ((e[r] = n), !0);
}
function Gt(e, t) {
  let n = a(t);
  return !!e?.[n];
}
function Kt(e) {
  if (!e) return 0;
  let t = 0;
  for (let n = 0; n < 32; ++n) e[a(n)] && (t += 1);
  return t;
}
function qt(e) {
  let t = [];
  for (let n = 0; n < 32; ++n) {
    let r = a(n);
    e[r] && t.push([r, e[r]]);
  }
  return t;
}
var Q = `partnerevents/ajaxgetdraftandrecentsnippets`;
function Jt(e, t) {
  return G({
    queryKey: [`eventdraftrecent`, e, t],
    queryFn: () => Xt(e, t),
    select: Zt,
    enabled: !!e,
  });
}
function Yt(e, t) {
  return Be(Jt(e, t));
}
async function Xt(e, t) {
  let n = new URLSearchParams({ clan_accountid: `` + e });
  t && n.set(`rtime_oldest`, `` + t);
  let i = `${r.PARTNER_BASE_URL}${Q}?${n}`,
    a = await fetch(i, { credentials: `include` });
  if (!a.ok) throw Error(`${Q} answered HTTP ${a.status}`);
  let o = await a.json();
  if (o?.success != 1) throw Error(`${Q} failed with result ${o?.success}`);
  return o.snippets ?? [];
}
function Zt(e) {
  return [...e].sort((e, t) =>
    e.hidden == t.hidden
      ? e.hidden && e.published != t.published
        ? e.published
          ? -1
          : 1
        : (t.rtime32_start_time ?? 0) - (e.rtime32_start_time ?? 0)
      : e.hidden
        ? -1
        : 1,
  );
}
function Qt(e, t) {
  let { data: n } = Yt(e, t);
  return n ?? null;
}
function $t(e) {
  let { oEditableMessage: t } = e,
    [n] = z(() => [t.GetStoreItemKey()]);
  return !n || n.item_type != `app`
    ? (0, J.jsx)(`div`, {
        className: W,
        children: `Error: Major Update does not support anything but targeting app`,
      })
    : (0, J.jsx)(en, { oEditableMessage: t, idKey: n });
}
function en(e) {
  let { oEditableMessage: t, idKey: n } = e,
    [r, i] = z(() => [t.GetUpdateEventClanAccountID(), t.GetUpdateEventGID()]),
    { data: a } = j(k({ item_type: He(n.item_type), id: n.id })),
    o = (0, q.useMemo)(() => h.InitFromClanID(r, c.EUNIVERSE), [r]),
    s = a?.type == 12 ? void 0 : a?.related_items?.parent_appid;
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsx)($, {
        appid: s || n.id,
        selectedEventGID: i,
        fnSetUpdateEvent: t.SetUpdateEvent,
        label: T(`#EventDropDown_MM_FeaturedEvent`),
        tooltip: T(`#EventDropDown_MM_FeaturedEvent_ttip`),
        strUrlLearnMore: `https://confluence.valve.org/display/SteamBiz/Steam+Promotions+Assets+Guide#SteamPromotionsAssetsGuide-MarketingMessageforUpdates`,
      }),
      !!r &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(`a`, {
              href: `${c.COMMUNITY_BASE_URL}gid/${o.ConvertTo64BitString()}/partnerevents/edit/${i}`,
              target: `_blank`,
              children: `open event for edit`,
            }),
            `\xA0 \xA0`,
            (0, J.jsx)(C, {
              toolTipContent: `Once the event is published, go here to verify it is not awaiting moderation review. Games in the moderator review queue are not visible in the library`,
              children: (0, J.jsx)(`a`, {
                href: `${c.STORE_BASE_URL}events_admin/?selectedTags=vo_marketing_message&excludedTags=mod_reviewed&excludedTags=auto_migrated`,
                target: `_blank`,
                children: `open event moderation tool`,
              }),
            }),
            (0, J.jsx)(`br`, {}),
            (0, J.jsx)(`br`, {}),
          ],
        }),
    ],
  });
}
function $(e) {
  let {
      appid: n,
      selectedEventGID: r,
      fnSetUpdateEvent: i,
      label: a,
      tooltip: o,
      strUrlLearnMore: s,
      bFilterOutDrafts: l,
    } = e,
    u = $e(),
    { clanInfo: d, bLoadingClanInfo: f } = ot(n),
    p = Qt(d?.clanAccountID, u - 2592e3),
    m = (0, q.useMemo)(() => (l ? p?.filter((e) => !e.hidden) : p), [p, l]),
    h = (0, q.useMemo)(
      () =>
        m
          ? m.map((e) => {
              let t = e.hidden
                ? e.published
                  ? `#EventDropDown_HiddenPublish`
                  : `#EventDropDown_Hidden`
                : `#EventDropDown_Visible`;
              return {
                label: T(t, S(e.rtime32_start_time), e.event_name),
                data: e,
              };
            })
          : [],
      [m],
    ),
    g = m?.find((e) => e.gid === r);
  return !m && (f || d?.appid)
    ? (0, J.jsx)(V, {
        string: T(`#Loading`),
        size: `small`,
        position: `center`,
      })
    : !m || m.length == 0
      ? (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsxs)(b, {
              children: [a, ` `, (0, J.jsx)(D, { tooltip: o })],
            }),
            (0, J.jsx)(`div`, {
              className: t(W, `ErrorCtn`),
              children: E(
                `#EventDropDown_NoEventFound`,
                (0, J.jsx)(`a`, {
                  href: `${c.COMMUNITY_BASE_URL}ogg/${n}/partnerevents`,
                  target: `_blank`,
                }),
              ),
            }),
          ],
        })
      : (0, J.jsxs)(J.Fragment, {
          children: [
            !!s &&
              (0, J.jsx)(`a`, {
                href: s,
                target: `_blank`,
                style: { float: `right` },
                children: T(
                  `#DiscountDashboard_DetailView_BatchDiscount_MaxDiscountDocumentationLink`,
                ),
              }),
            (0, J.jsx)(w, {
              label: a,
              tooltip: o,
              selectedOption: g,
              onChange: (e) => i(d.clanAccountID, e.data.gid),
              rgOptions: h,
            }),
          ],
        });
}
export {
  At as _,
  Ut as a,
  G as b,
  qt as c,
  zt as d,
  Pt as f,
  X as g,
  kt as h,
  Kt as i,
  Ht as l,
  Ot as m,
  $ as n,
  Gt as o,
  Ft as p,
  Yt as r,
  Wt as s,
  $t as t,
  Bt as u,
  _t as v,
  st as y,
};
