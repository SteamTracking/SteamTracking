/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import {
  U as r,
  Zt as i,
  gn as a,
  i as o,
  u as s,
} from "./chunk~6b8ddcaac8.js";
import { A as c, st as l } from "./chunk~f57d770d64.js";
import { n as u, o as d, t as f } from "./chunk~ffe4581a06.js";
import { n as p, r as m } from "./chunk~b980924b6a.js";
import { c as h } from "./chunk~7b4b9eb713.js";
import { f as g } from "./chunk~618fb52a90.js";
import { n as ee } from "./chunk~e70aabe4d7.js";
import { n as te } from "./chunk~710e3cfd2f.js";
import {
  $i as _,
  Ac as v,
  Eb as y,
  Jy as b,
  Rr as x,
  Vi as ne,
  Wb as S,
  Xb as re,
  Zi as C,
  _l as ie,
  jc as w,
  qb as T,
  wc as E,
} from "./main.js";
var D = e(t(), 1);
function O(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${T.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
var k = `poster`,
  A = `${k}.avif`,
  ae = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function oe(e) {
  let t = e.video_webm_src || e.video_mp4_src;
  if (!t || e.image?.includes(`.${k}.`)) return e.image;
  let n = ae.exec(t);
  return n ? `${n[1]}.${A}` : e.image;
}
function se(e) {
  if (!e?.clan_accountid || !e.clan_event_gid) return null;
  let t = e.cross_promo;
  return {
    clanAccountID: e.clan_accountid,
    strEventGID: e.clan_event_gid,
    strName: e.event_name ?? ``,
    rtEndTime: e.rtime32_end_time || void 0,
    strSummary: e.summary || void 0,
    strCapsuleURL: ce(e),
    strSaleURL: e.store_path ? T.STORE_BASE_URL + e.store_path : void 0,
    strBackgroundURL: O(e.clan_accountid, t?.background_image),
    strScrimColor: t?.scrim_color || void 0,
    strLogoURL: M(e.clan_accountid, t?.logo?.image),
    eDesktopLayout: t?.desktop_layout === `logo_top` ? `logo_top` : void 0,
  };
}
function j(e, t) {
  let n = ee(e ?? void 0, `capsule`, t);
  if (!e) return;
  let i = e.clanSteamID.GetAccountID();
  return {
    clanAccountID: i,
    strEventGID: e.GID ?? ``,
    strName: e.GetNameWithFallback(t) ?? ``,
    rtEndTime: e.endTime || void 0,
    strSummary: e.GetSummaryWithFallback(t) || void 0,
    strCapsuleURL: n,
    strSaleURL: h(e) ?? void 0,
    strBackgroundURL: O(
      i,
      e.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: e.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: r(e, t),
    eDesktopLayout:
      e.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
function M(e, t) {
  if (t) return t.startsWith(`http`) ? t : l.GenerateURLFromHashAndExt(e, t);
}
function ce(e) {
  let t = e.capsule_image?.image;
  if (t && e.clan_accountid)
    return e.capsule_image?.from_body
      ? l.ReplacementTokenToClanImageURL(t)
      : M(e.clan_accountid, t);
}
function N(e) {
  return (e ?? []).slice(0, 48).map((e) => ({ appid: e }));
}
var P = `Es-UANTRhdg-`,
  F = `KNEaTOnJJWw-`,
  I = `FsYxDNcAXaI-`,
  L = `cSFkUHyVW24-`,
  R = `oztjxXYIBAk-`,
  z = `yT92BfNEvpw-`,
  B = `_6jMisrq5Zfo-`,
  V = `XBv92QzB8Xc-`,
  H = `_6iUHDist0Jc-`,
  U = `gxh8RxFKhr8-`,
  W = `tYvCiFSJDdI-`,
  G = `AZSEWyNPfhc-`,
  le = `gZNFN-cKUHw-`,
  ue = `VCRuNjWNqVc-`,
  de = `AmB85SkEC3Q-`,
  fe = `P5j4maR0i14-`,
  K = n(),
  pe = D.createContext(!1),
  q = D.createContext(null);
function me(e, t, n) {
  let { bShowSeeMoreHint: r, panelProps: i } = u(n ? e : void 0, `X`),
    a = D.useContext(q),
    o = !!a && n && !!e;
  return (
    D.useEffect(() => {
      if (o && a) return (a({ strLabel: t, bShown: r }), () => a(null));
    }, [o, a, t, r]),
    { bShowSeeMoreHint: r, panelProps: i, bHintInHeading: o }
  );
}
function he(e) {
  let {
      promotedSaleEvent: t,
      children: n,
      nItemsToFeature: r,
      bInGamepadUI: i,
      section: a,
    } = e,
    o = t?.eCreatorRole ? X(t.eCreatorRole) : $(a),
    {
      bShowSeeMoreHint: s,
      panelProps: c,
      bHintInHeading: l,
    } = me(t?.strSaleURL, o, i);
  return (0, K.jsx)(Q, {
    ...e,
    className: I,
    "flow-children": `row`,
    panelProps: { ...c, navEntryPreferPosition: ie.PREFERRED_CHILD },
    children: (0, K.jsx)(J, {
      saleEvent: t,
      bShowExploreHint: s,
      bExploreHintInHeading: l,
      strExploreLabel: $(a),
      children: (0, K.jsx)(Z, {
        nItemsToFeature: r,
        eCreatorRole: t?.eCreatorRole,
        children: (0, K.jsx)(w, { preferredFocus: !0, children: n }),
      }),
    }),
  });
}
function ge(e) {
  let { event: t, language: n, strSaleURL: r } = e,
    i = j(t, n);
  if (!i) return null;
  let a = r ? { ...i, strSaleURL: r } : i;
  return a.strSaleURL
    ? (0, K.jsx)(w, {
        className: E(P, I, L),
        "flow-children": `row`,
        children: (0, K.jsx)(J, { saleEvent: a, bExploreButtonBelow: !0 }),
      })
    : null;
}
function J(e) {
  let {
      saleEvent: t,
      bExploreButtonBelow: n,
      bShowExploreHint: r,
      bExploreHintInHeading: i,
      children: a,
    } = e,
    s = t?.strSaleURL,
    c = t?.eCreatorRole,
    l = c || !e.strExploreLabel ? X(c) : e.strExploreLabel,
    u = t?.strCapsuleURL,
    d = t?.strSummary,
    p = _(),
    m = S(),
    h = m && r !== void 0,
    g = t?.rtEndTime
      ? ne(t.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: p,
        })
      : void 0;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      u &&
        !c &&
        (0, K.jsx)(`div`, {
          className: `qbRGxo4aWcc-`,
          style: { backgroundImage: `url(${u})` },
        }),
      u &&
        (0, K.jsx)(`div`, {
          className: E(`HgvxVtFlDis-`, c && `Lp2CuPiW8Lo-`),
          style: { backgroundImage: `url(${u})` },
        }),
      c && (0, K.jsx)(ye, { rgAppIDs: t?.rgCreatorAppIDs, strAvatarURL: u }),
      (0, K.jsxs)(`div`, {
        className: E(z, c && `-NAWu4CYrl8-`),
        children: [
          c &&
            u &&
            (0, K.jsx)(o, {
              url: s,
              className: `X4LW9zxgdTo-`,
              bFocusable: !1,
              children: (0, K.jsx)(`img`, { src: u, alt: `` }),
            }),
          !c &&
            (0, K.jsxs)(`div`, {
              className: `_6jMisrq5Zfo-`,
              children: [
                (0, K.jsx)(`div`, {
                  className: `XBv92QzB8Xc-`,
                  children: (0, K.jsx)(o, {
                    url: s,
                    className: `NjUCqxvhkHk-`,
                    bFocusable: !1,
                    children: t?.strName,
                  }),
                }),
                g &&
                  (0, K.jsx)(`div`, {
                    className: `_6iUHDist0Jc-`,
                    children: b(`#Sale_CrossPromoSale_NowThrough`, g),
                  }),
              ],
            }),
          s &&
            !n &&
            !h &&
            !c &&
            (0, K.jsx)(o, {
              url: s,
              className: E(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: x,
              children: l,
            }),
          s && h && !i && (0, K.jsx)(f, { label: l, shown: !!r, button: `X` }),
        ],
      }),
      (0, K.jsxs)(`div`, {
        className: E(U, c && `ZONqp3dzTMI-`),
        children: [
          u &&
            (0, K.jsxs)(o, {
              url: s,
              className: E(`oztjxXYIBAk-`, c && `CDF-2WDX3lg-`),
              bFocusable: !!m,
              children: [
                (0, K.jsx)(`img`, { src: u, alt: `` }),
                d &&
                  (0, K.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, K.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: d,
                    }),
                  }),
              ],
            }),
          a,
        ],
      }),
      s &&
        !h &&
        !c &&
        (0, K.jsx)(`div`, {
          className: E(`T1fHkhyvNkM-`, n && `SAqjQ-F71kA-`),
          children: (0, K.jsx)(o, {
            url: s,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: x,
            children: l,
          }),
        }),
    ],
  });
}
var _e = 60,
  ve = 4;
function ye(e) {
  let { rgAppIDs: t, strAvatarURL: n } = e,
    r = D.useMemo(() => N(t), [t]),
    i = s(r, !1),
    a = D.useMemo(() => {
      let e = (i ?? []).slice(0, 24);
      return e.length < ve
        ? []
        : Array.from({ length: _e }, (t, n) => e[n % e.length]);
    }, [i]);
  return a.length
    ? (0, K.jsxs)(`div`, {
        className: G,
        "aria-hidden": !0,
        children: [
          n &&
            (0, K.jsx)(`div`, {
              className: `ODb7GVMZzG8-`,
              style: { backgroundImage: `url(${n})` },
            }),
          (0, K.jsx)(`div`, {
            className: le,
            children: a.map((e, t) => (0, K.jsx)(be, { id: e }, t)),
          }),
        ],
      })
    : null;
}
function be(e) {
  let t = v(e.id, `header`);
  return t
    ? (0, K.jsx)(`img`, { src: t, alt: ``, loading: `lazy` })
    : (0, K.jsx)(`div`, {});
}
function xe(e) {
  let { children: t, nItemsToFeature: n } = e;
  return (0, K.jsxs)(Q, {
    ...e,
    className: I,
    children: [
      (0, K.jsx)(p, {
        className: z,
        children: (0, K.jsxs)(`div`, {
          className: B,
          children: [
            (0, K.jsx)(`div`, { className: E(V, m), children: `\xA0` }),
            (0, K.jsx)(`div`, { className: E(H, m), children: `\xA0` }),
          ],
        }),
      }),
      (0, K.jsxs)(`div`, {
        className: U,
        children: [
          (0, K.jsx)(p, {
            className: R,
            children: (0, K.jsx)(`div`, { className: E(m, W) }),
          }),
          (0, K.jsx)(Z, { nItemsToFeature: n, children: t }),
        ],
      }),
    ],
  });
}
var Y = {
  strSignedIn: `#Sale_CrossPromoSale_RecommendedFromEvent`,
  strSignedOut: `#Sale_CrossPromoSale_RecommendedFromEvent_notloggedin`,
};
function X(e) {
  return b(
    e
      ? `#Sale_CrossPromoCreator_Visit_${e}`
      : `#Sale_CrossPromoSale_ExploreEvent`,
  );
}
function Z(e) {
  let {
      children: t,
      nItemsToFeature: n,
      strSaleURL: r,
      eCreatorRole: i,
      exploreHint: a,
    } = e,
    s = !!r && !a,
    c = D.useContext(pe),
    l = !i && !c,
    u = i || !e.strExploreLabel ? X(i) : e.strExploreLabel,
    d = re.logged_in
      ? y.Localize(Y.strSignedIn)
      : y.LocalizePlural(Y.strSignedOut, n ?? 0);
  return (0, K.jsxs)(`div`, {
    className: F,
    children: [
      (l || s || (a && !a.bInHeading)) &&
        (0, K.jsxs)(`div`, {
          className: `ypQ9RrTsvmE-`,
          children: [
            l && (0, K.jsx)(`div`, { className: `aMHZOpwLiBw-`, children: d }),
            s &&
              (0, K.jsx)(o, {
                url: r,
                className: E(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
                fnCanTakeFocus: x,
                children: u,
              }),
            a &&
              !a.bInHeading &&
              (0, K.jsx)(`div`, {
                className: `Ri7uYDYJ-bo-`,
                children: (0, K.jsx)(f, {
                  label: u,
                  shown: a.bShown,
                  button: `X`,
                }),
              }),
          ],
        }),
      t,
      s &&
        (0, K.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, K.jsx)(o, {
            url: r,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: x,
            children: u,
          }),
        }),
    ],
  });
}
function Q(e) {
  let {
    section: t,
    bInGamepadUI: n,
    placeholderHeight: r,
    className: o,
    "flow-children": s,
    panelProps: l,
    children: u,
  } = e;
  return (0, K.jsx)(te, {
    placeholderHeight: r,
    className: E({
      [a]: !0,
      [i]: c(t),
      [g]: !0,
      SaleSectionForCustomCSS: !0,
      [P]: !0,
      [o]: !0,
    }),
    rootMargin: d,
    holdGamepadFocus: n,
    "flow-children": s,
    ...l,
    children: u,
  });
}
var Se = [1e3, 500, 250, 100, 50, 20];
function $(e) {
  let t = e.sale_page_cross_promo_sales?.[0]?.total_items ?? 0,
    n = Se.find((e) => t >= e);
  return n
    ? b(`#Sale_CrossPromoSale_ExploreItems`, C(n))
    : b(`#Sale_CrossPromoSale_ExploreEvent`);
}
export {
  de as a,
  se as c,
  oe as d,
  xe as i,
  j as l,
  he as n,
  ue as o,
  ge as r,
  fe as s,
  q as t,
  O as u,
};
