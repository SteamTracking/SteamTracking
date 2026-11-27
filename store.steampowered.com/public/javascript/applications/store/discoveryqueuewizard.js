/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, ot as r } from "./chunk~01cfc309bf.js";
import {
  Da as i,
  Ea as a,
  Ia as o,
  Ra as s,
  Ta as c,
  Vn as l,
  pr as u,
  tr as d,
} from "./chunk~6b8ddcaac8.js";
import { k as f } from "./chunk~4eed35ad1f.js";
import { t as p } from "./chunk~684e72ad45.js";
import { i as m } from "./chunk~2f085f1384.js";
import { t as h } from "./chunk~92931c6310.js";
import { t as g } from "./chunk~eefd71512b.js";
import { u as _ } from "./chunk~7b4b9eb713.js";
import { n as v } from "./chunk~38061b7abb.js";
import "./chunk~9e9562d60b.js";
import { n as y, r as b } from "./chunk~cb3200f06e.js";
import { n as x, t as S } from "./chunk~d382bdf2cf.js";
import { n as C } from "./chunk~a7c5e71e12.js";
import { r as w } from "./chunk~a6c148633d.js";
import {
  $ as T,
  A as E,
  At as D,
  D as O,
  Dt as ee,
  F as k,
  H as te,
  I as ne,
  J as re,
  L as ie,
  M as A,
  Mt as ae,
  N as j,
  O as oe,
  Ot as se,
  P as M,
  R as N,
  S as ce,
  T as le,
  U as ue,
  V as de,
  W as fe,
  X as pe,
  Z as me,
  _ as he,
  _t as ge,
  a as _e,
  at as ve,
  b as ye,
  bt as be,
  ct as xe,
  d as Se,
  et as P,
  f as Ce,
  ft as we,
  g as Te,
  gt as Ee,
  ht as De,
  it as Oe,
  j as F,
  kt as ke,
  lt as Ae,
  mt as je,
  nt as Me,
  o as Ne,
  ot as Pe,
  p as Fe,
  pt as Ie,
  q as Le,
  rt as Re,
  s as ze,
  st as Be,
  t as I,
  u as Ve,
  ut as He,
  w as Ue,
  wt as We,
  x as Ge,
  y as Ke,
  z as qe,
} from "./chunk~d8bbc3d946.js";
import {
  $c as L,
  Ac as Je,
  Ba as R,
  Dl as Ye,
  H as Xe,
  Hx as Ze,
  Ml as z,
  Nu as B,
  Oc as Qe,
  Pc as V,
  Qu as $e,
  Sn as et,
  Ux as tt,
  Vc as H,
  Vx as nt,
  Xr as rt,
  Yo as it,
  Zy as U,
  ab as at,
  ad as ot,
  an as st,
  cc as ct,
  ed as lt,
  ex as W,
  gl as G,
  gt as ut,
  hx as dt,
  ib as K,
  id as ft,
  kc as pt,
  lb as mt,
  m as ht,
  nd as gt,
  nu as _t,
  ob as vt,
  po as yt,
  sa as q,
  sd as bt,
  tu as xt,
  vx as J,
  yy as St,
} from "./main.js";
import { i as Ct, n as Y, o as wt, t as Tt } from "./chunk~7401689b78.js";
import { t as Et } from "./chunk~437071091c.js";
import { i as Dt } from "./chunk~65da1d3223.js";
import { n as Ot } from "./chunk~1f9175251c.js";
import { n as kt, r as At, t as jt } from "./chunk~15f90ada43.js";
var X = e(t()),
  Mt = `NerpSqWj84M-`,
  Nt = `SOzTsKYY9Yg-`,
  Z = n(),
  Pt = ({ nPercent: e, size: t = 120, strokeWidth: n = 20 }) => {
    let r = (t - n) / 2,
      i = 2 * Math.PI * r,
      a = i - (e / 100) * i,
      o = e == 100;
    return (0, Z.jsx)(`div`, {
      className: V({ [Mt]: !0, [Nt]: o }),
      children: (0, Z.jsxs)(`svg`, {
        width: t,
        height: t,
        style: { transform: `rotate(-90deg)` },
        children: [
          (0, Z.jsx)(`circle`, {
            cx: t / 2,
            cy: t / 2,
            r,
            stroke: `#0c131d`,
            strokeWidth: n,
            fill: `none`,
          }),
          (0, Z.jsx)(`circle`, {
            cx: t / 2,
            cy: t / 2,
            r,
            stroke: `#1a9fff`,
            strokeWidth: n,
            fill: `none`,
            strokeDasharray: i,
            strokeDashoffset: a,
            style: { transition: `stroke-dashoffset 0.3s ease-in-out` },
          }),
        ],
      }),
    });
  },
  Ft = new z(`AppRelevance`).Debug;
function It(e, t) {
  let n = (0, X.useMemo)(
    () => B.Get().GetRecommendingCuratorsForApp(e) || [],
    [e],
  );
  return r({
    queryKey: [`RecommendingCurators`, e],
    queryFn: () =>
      Promise.all(n?.map((e) => Et.LoadClanInfoForClanAccountID(e))),
    enabled: !!t && n && n.length > 0,
  });
}
function Lt(e) {
  let {
      appID: t,
      bShowAvatars: n,
      storeItem: i,
      bHideDescription: a,
      bShowCuratorInfo: o = !1,
      bShowCreatorInfo: s,
    } = e,
    c = w(t),
    l = jt(t),
    u = At(t),
    d = kt(),
    f = r({
      queryKey: [`SimilarPlayedAppsLoad`, t],
      queryFn: () =>
        xt.Get().QueueMultipleAppRequests(
          u.data.arrSimilarPlayedApps?.map((e) => e.appid),
          { include_basic_info: !0, include_assets: !0 },
        ),
      enabled: u.isSuccess,
    }),
    p = It(t, o),
    m = (0, X.useMemo)(() => {
      let e = [];
      return (
        i &&
          ((e = e.concat(
            i
              .GetAllFranchiseCreatorClans()
              .map((e) => ({ nAccountID: e, type: `franchise` })),
          )),
          (e = e.concat(
            i
              .GetAllDeveloperCreatorClans()
              .map((e) => ({ nAccountID: e, type: `developer` })),
          )),
          (e = e.concat(
            i
              .GetAllPublisherCreatorClans()
              .map((e) => ({ nAccountID: e, type: `publisher` })),
          )),
          (e = e.filter((e) => B.Get().BIsFollowingCurator(e.nAccountID)))),
        e
      );
    }, [i]),
    h = r({
      queryKey: [`FollowedCreators`, t],
      queryFn: () =>
        Et.LoadClanInfoForClanAccountID(m[0].nAccountID).then((e) => ({
          clanInfo: e,
          type: m[0].type,
        })),
      enabled: !!s && m && m.length > 0,
    }),
    _ = r({
      queryKey: [`PlayerSummaries`, t, n],
      queryFn: async () => {
        let e = [],
          t = [],
          r = [],
          i = n ? 10 : 1;
        for (
          let t = 0;
          l.data.accountids_recommended &&
          t < l.data.accountids_recommended.length &&
          t < i;
          t++
        ) {
          let n = U.InitFromAccountID(
            l.data.accountids_recommended[t],
            J.EUNIVERSE,
          );
          e.push(n.ConvertTo64BitString());
        }
        for (
          let e = 0;
          c.data.in_wishlist && e < c.data.in_wishlist.length && e < i;
          e++
        ) {
          let n = new U(c.data.in_wishlist[e].steamid);
          t.push(n.ConvertTo64BitString());
        }
        for (let e = 0; c.data.owns && e < c.data.owns.length && e < i; e++) {
          let t = new U(c.data.owns[e].steamid);
          r.push(t.ConvertTo64BitString());
        }
        return {
          rgRecommendedFriends: e,
          rgWishlistFriends: t,
          rgOwnedFriends: r,
        };
      },
      enabled: l.isSuccess && c.isSuccess,
    });
  if (
    !d ||
    f.isLoading ||
    u.isLoading ||
    l.isLoading ||
    c.isLoading ||
    p.isLoading ||
    h.isLoading ||
    _.isLoading
  )
    return (0, Z.jsx)(g, { size: `medium`, position: `center` });
  let v = [];
  u.isSuccess &&
    u.data.arrSimilarPlayedApps &&
    u.data.arrSimilarPlayedApps.slice(0, 2).forEach((e) => {
      let n = xt.Get().GetApp(e.appid);
      n
        ? v.push(
            (0, Z.jsx)(
              Bt,
              { lifetimePlaytime: e.playtimeForever, storeItem: n },
              e.appid,
            ),
          )
        : console.error(`Failed to load store data `, t);
    });
  let y = d.GetItemIDs().findIndex((e) => e.appid === t),
    b = u.data?.bRecommendedByIR,
    x = v.length > 0,
    S = c.data?.owns?.length,
    C = c.data?.in_wishlist?.length,
    T = l.data?.accountids_recommended?.length,
    E = 0;
  return (
    S > 0 && E++,
    C > 0 && E++,
    T > 0 && E++,
    b && E++,
    y >= 0 && E++,
    v.length > 0 && E++,
    o && p?.data?.length && E++,
    s && h.data && E++,
    Ft(`FriendsOwned: `, S, ` FriendsWishlisted: `, C, `cRecommended: `, T),
    (0, Z.jsxs)(Z.Fragment, {
      children: [
        E > 0 &&
          (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(`div`, {
                className: `Hw5Md-rtn-k-`,
                children: K(`#DiscoveryQueue_WhyRelevant`),
              }),
              (0, Z.jsxs)(`div`, {
                role: `list`,
                className: `M9g7Z8vAw60-`,
                children: [
                  x &&
                    (0, Z.jsx)(Q, {
                      header: K(`#DiscoveryQueue_SimilarGames`),
                      children: (0, Z.jsx)(`div`, {
                        className: `d7rsPMqqO4s-`,
                        children: v,
                      }),
                    }),
                  o &&
                    !!p?.data?.length &&
                    (0, Z.jsx)(Q, {
                      header: K(`#ContentHub_Recommendation_Curators`),
                      children: (0, Z.jsx)(`div`, {
                        className: V(`d7rsPMqqO4s-`, `GQ2d2HGUoPA-`),
                        children: p.data
                          .filter(Boolean)
                          .map((e) =>
                            (0, Z.jsx)(
                              zt,
                              { curator: e },
                              `curator_` + e.clanAccountID,
                            ),
                          ),
                      }),
                    }),
                  s && !!h.data && (0, Z.jsx)(Rt, { creatorInfo: h.data }),
                  y >= 0 &&
                    (0, Z.jsx)(Q, {
                      header: vt(
                        `#DiscoveryQueue_TopSellers`,
                        q(y + 1),
                        (0, Z.jsx)(`span`, { className: `wdv04oGNxck-` }),
                      ),
                    }),
                  b &&
                    !x &&
                    (0, Z.jsx)(Q, {
                      header: K(`#DiscoveryQueue_RecommendedByIR`),
                    }),
                  (0, Z.jsx)(Vt, {
                    bShowAvatars: n,
                    count: l.data?.accountids_recommended?.length,
                    locToken: `#DiscoveryQueue_FriendsRecommended`,
                    arrSteamIDs: _.data?.rgRecommendedFriends,
                  }),
                  (0, Z.jsx)(Vt, {
                    bShowAvatars: n,
                    count: c.data?.owns?.length,
                    locToken: `#DiscoveryQueue_FriendsOwned`,
                    arrSteamIDs: _.data?.rgOwnedFriends,
                  }),
                  (0, Z.jsx)(Vt, {
                    bShowAvatars: n,
                    count: c.data?.in_wishlist?.length,
                    locToken: `#DiscoveryQueue_FriendsWishlisted`,
                    arrSteamIDs: _.data?.rgWishlistFriends,
                  }),
                ],
              }),
            ],
          }),
        !a || E == 0
          ? (0, Z.jsx)(`div`, {
              className: V(_e, E && void 0),
              children: i.GetShortDescription(),
            })
          : (0, Z.jsx)(`div`, { "aria-label": i.GetShortDescription() }),
      ],
    })
  );
}
function Rt(e) {
  let { creatorInfo: t } = e;
  if (!t) return null;
  let n;
  switch (t.type) {
    case `publisher`:
      n = `#ContentHub_Recommendation_FollowedPublisher`;
      break;
    case `developer`:
      n = `#ContentHub_Recommendation_FollowedDeveloper`;
      break;
    case `franchise`:
      n = `#ContentHub_Recommendation_FollowedFranchise`;
  }
  return n
    ? (0, Z.jsx)(Q, {
        header: mt(
          n,
          (0, Z.jsx)(`span`, {
            className: P,
            children: t.clanInfo?.group_name,
          }),
        ),
      })
    : null;
}
function zt(e) {
  let { curator: t } = e,
    { creatorHome: n } = _(t?.clanAccountID);
  return !t || !n
    ? null
    : (0, Z.jsx)(G, {
        href: n.GetCreatorHomeURL(null),
        children: (0, Z.jsx)(`img`, { src: t.avatar_medium_url }),
      });
}
function Bt(e) {
  let { lifetimePlaytime: t, storeItem: n } = e,
    r = _t(n);
  return (0, Z.jsx)(`div`, {
    className: Ae,
    children: (0, Z.jsx)(u, {
      id: r,
      bHidePrice: !0,
      hoverProps: {
        direction: `overlay`,
        nBodyAlignment: 1,
        style: { minWidth: `320px`, zIndex: 5e3 },
      },
      children: (0, Z.jsx)(`img`, {
        className: He,
        alt: n.GetName(),
        src: n.GetAssets().GetSmallCapsuleURL(),
      }),
    }),
  });
}
function Vt(e) {
  let { arrSteamIDs: t, count: n, locToken: r, bShowAvatars: i } = e;
  return n
    ? n == 1 && !i
      ? (0, Z.jsx)(Q, {
          header: mt(r + `_Single`, (0, Z.jsx)(Ht, { steamid: t[0] })),
        })
      : (0, Z.jsx)(Q, {
          header: vt(r, n, (0, Z.jsx)(`span`, { className: P })),
          children:
            i &&
            t.length > 0 &&
            (0, Z.jsx)(`div`, {
              className: `nd1w3QliCfE-`,
              children:
                n == 1
                  ? (0, Z.jsx)(Wt, { steamid: t[0] })
                  : (0, Z.jsx)(Ut, { arrSteamIDs: t }),
            }),
        })
    : null;
}
function Ht(e) {
  let { steamid: t } = e,
    { data: n } = x(t);
  return !n || !n.m_bInitialized
    ? null
    : (0, Z.jsx)(`span`, {
        "data-miniprofile": `s` + n.m_steamid.ConvertTo64BitString(),
        className: P,
        children: n.m_strPlayerName,
      });
}
function Ut(e) {
  let { arrSteamIDs: t } = e,
    n = S(t);
  return (0, Z.jsx)(Z.Fragment, {
    children: n.map(
      ({ data: e }) =>
        e &&
        (0, Z.jsx)(
          Dt,
          {
            "data-miniprofile": `s` + e.m_steamid.ConvertTo64BitString(),
            persona: e,
            size: `Small`,
            statusPosition: `right`,
          },
          e.m_steamid.ConvertTo64BitString(),
        ),
    ),
  });
}
function Wt(e) {
  let { steamid: t } = e,
    { data: n } = x(t);
  return n
    ? (0, Z.jsxs)(H, {
        className: E,
        "data-miniprofile": `s` + t,
        children: [
          (0, Z.jsx)(Dt, {
            persona: n,
            size: `Small`,
            statusPosition: `right`,
          }),
          (0, Z.jsx)(Ot, {
            className: fe,
            persona: n,
            eFriendRelationship: 3,
            bIsSelf: !1,
            strNickname: null,
            bParenthesizeNicknames: !1,
            bCompactView: !1,
            bNoMask: !0,
          }),
        ],
      })
    : null;
}
function Q(e) {
  let { children: t, header: n } = e;
  return (0, Z.jsxs)(`div`, {
    className: T,
    children: [
      (0, Z.jsx)(`div`, { className: pe, children: (0, Z.jsx)(yt, {}) }),
      (0, Z.jsxs)(`div`, {
        className: me,
        children: [(0, Z.jsx)(`div`, { className: void 0, children: n }), t],
      }),
    ],
  });
}
new z(`DiscoveryQueueApp`).Debug;
function Gt(e) {
  let {
      appID: t,
      nItemHeight: n,
      nItemWidth: r,
      selected: s,
      fnFocused: l,
      eStoreDiscoveryQueueType: u,
      storePageFilter: d,
      bPreferDemoStorePage: f,
      elVideo: p,
      elDetails: m,
      appAriaIDs: h,
    } = e,
    [g] = C(t, I),
    _ = W(),
    y = R()?.ownerWindow || window,
    b = Kt(g, u, d, f),
    { bIsIgnored: x, fnUpdateIgnored: S } = ke(t),
    { bIsWishlisted: w, fnUpdateWishlist: T } = D(t),
    E = X.useRef(null);
  if (
    (X.useEffect(() => {
      s && E.current && E.current.focus({ preventScroll: !0 });
    }, [s]),
    !g)
  )
    return (console.warn(`Error: missing store item for appid `, t), null);
  let O = { width: r || void 0, height: n || void 0 };
  return (0, Z.jsxs)(H, {
    "aria-labelledby": v(
      h.nameId,
      h.tagsId,
      h.reviewId,
      h.relevanceId,
      h.buttonsId,
    ),
    ref: E,
    style: O,
    className: V(Ke, s && `vyD3DBFIFUc-`),
    onOptionsActionDescription: K(
      w
        ? `#DiscoveryQueue_RemoveFromWishlist`
        : `#DiscoveryQueue_AddToWishlist`,
    ),
    onOptionsButton: T,
    onOKActionDescription: K(`#DiscoveryQueue_ViewStorePage`),
    onOKButton: () => {
      y.location.href = b;
    },
    onSecondaryActionDescription: K(
      x ? `#DiscoveryQueue_Undo` : `#DiscoveryQueue_IgnoreLink`,
    ),
    onSecondaryButton: S,
    fnScrollIntoViewHandler: () => (l(), !0),
    children: [
      (0, Z.jsx)(`div`, {
        className: V(k, x && `_3ZYr-Efwvg8-`),
        children: (0, Z.jsxs)(`div`, {
          className: V(ie, x && `_3ZYr-Efwvg8-`),
          children: [
            (0, Z.jsx)(`div`, {
              className: N,
              children: K(`#DiscoveryQueue_Ignored`),
            }),
            (0, Z.jsx)(`div`, {
              className: ne,
              children: K(`#DiscoveryQueue_IgnoredConfirmation`),
            }),
            (0, Z.jsxs)(H, {
              className: V(Le, be),
              onClick: S,
              children: [
                _ &&
                  (0, Z.jsx)(c, { button: o.X, type: i.Light, size: a.Medium }),
                K(`#DiscoveryQueue_Undo`),
              ],
            }),
          ],
        }),
      }),
      p,
      m,
    ],
  });
}
function Kt(e, t, n, r) {
  let i = gt();
  return X.useMemo(() => {
    if (!e) return;
    let a = Tt(n),
      o = t >= 0 ? `?inqueue=` + t + (n ? `_` + a : ``) : ``,
      s = $e(i, e.GetStorePageURL(r) + o);
    return L(s);
  }, [r, t, i, e, n]);
}
function qt(e) {
  let {
      appID: t,
      bShowMinimizedDisplay: n,
      eStoreDiscoveryQueueType: r,
      storePageFilter: u,
      bPreferDemoStorePage: p,
      appAriaIDs: m,
    } = e,
    [h] = C(t, I),
    g = f(t),
    { bIsIgnored: _, fnUpdateIgnored: v } = ke(t),
    { bIsWishlisted: y, fnUpdateWishlist: b } = D(t),
    x = Kt(h, r, u, p),
    S = W(),
    w = S;
  if (!h) return;
  let T = h.GetAssets().GetLibraryCapsuleURL(),
    E = h.GetAssets().GetHeaderURL();
  return (0, Z.jsxs)(H, {
    className: Ne,
    children: [
      (0, Z.jsxs)(`div`, {
        className: ze,
        children: [
          T &&
            (0, Z.jsxs)(`a`, {
              className: V(`_-6qCNJHr4Z0-`),
              href: x,
              children: [
                (0, Z.jsx)(`img`, { className: `Q3mOh913Yuw-`, src: T }),
                E && (0, Z.jsx)(`img`, { className: `k5tHhP269dw-`, src: E }),
              ],
            }),
          (0, Z.jsxs)(`div`, {
            id: m.nameId,
            className: ve,
            children: [
              (0, Z.jsx)(`a`, {
                className: V(Ve),
                href: x,
                children: h.GetName(),
              }),
              (0, Z.jsx)(d, { bSingleLineMode: !0, id: g }),
            ],
          }),
          (0, Z.jsx)(Jt, { rgTagIDs: h.GetTagIDs(), ariaLabelID: m.tagsId }),
          (0, Z.jsx)(`div`, {
            className: Ce,
            id: m.reviewId,
            children: (0, Z.jsx)(s, {
              bShowTooltip: !0,
              bTruncateTotalReviews: n,
              id: g,
            }),
          }),
          (0, Z.jsx)(`div`, {
            id: m.relevanceId,
            className: Se,
            children: (0, Z.jsx)(Lt, {
              bHideDescription: S,
              bShowAvatars: !n,
              storeItem: h,
              appID: t,
            }),
          }),
        ],
      }),
      !S &&
        (0, Z.jsx)(`div`, {
          className: `Ud5K2f6NQFA-`,
          children: (0, Z.jsx)(`div`, {
            id: m.buttonsId,
            className: `sRPPHGX-rq4-`,
            children: (0, Z.jsxs)(`div`, {
              className: `kjR6Qum8rRo-`,
              children: [
                h.BHasDemo() &&
                  (0, Z.jsx)(l, {
                    id: g,
                    className: V(
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `enD9-bmgGhA-`,
                    ),
                  }),
                (0, Z.jsxs)(`a`, {
                  className: V(`BxLuFJsRaUQ-`, `VE8INnFzaCw-`),
                  href: x,
                  children: [
                    w &&
                      (0, Z.jsx)(c, {
                        button: o.Y,
                        type: i.Light,
                        size: a.Medium,
                        additionalClassName: `a-wHbIOxF8U-`,
                      }),
                    ` `,
                    K(`#DiscoveryQueue_ViewStorePage`),
                  ],
                }),
                (0, Z.jsx)(rt, {
                  toolTipContent: K(
                    y ? `#RemoveFromWishlist_ttip` : `#AddToWishlist_ttip`,
                  ),
                  children: (0, Z.jsxs)(H, {
                    "aria-label": K(
                      y ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
                    ),
                    focusable: !0,
                    className: V(`BxLuFJsRaUQ-`, y && `_3ZYr-Efwvg8-`),
                    onClick: b,
                    children: [
                      w &&
                        (0, Z.jsx)(c, {
                          button: o.Y,
                          type: i.Light,
                          size: a.Medium,
                          additionalClassName: `a-wHbIOxF8U-`,
                        }),
                      y ? (0, Z.jsx)(Qe, {}) : (0, Z.jsx)(pt, {}),
                    ],
                  }),
                }),
                (0, Z.jsx)(rt, {
                  toolTipContent: K(`#SaleTrailerCarousel_IgnoreLink_ttip`),
                  children: (0, Z.jsx)(H, {
                    "aria-label": K(`#DiscoveryQueue_IgnoreLink`),
                    focusable: !0,
                    className: V(`BxLuFJsRaUQ-`, _ && `_3ZYr-Efwvg8-`),
                    onClick: v,
                    children: (0, Z.jsx)(it, {}),
                  }),
                }),
              ],
            }),
          }),
        }),
    ],
  });
}
function Jt(e) {
  let { rgTagIDs: t, ariaLabelID: n } = e,
    r = [...se(t)].slice(0, 8);
  return (0, Z.jsx)(`div`, {
    id: n,
    role: `list`,
    className: Fe,
    children: r.map((e) => (0, Z.jsx)(Xe, { className: De, tagID: e }, e)),
  });
}
function Yt() {
  return {
    nameId: X.useId(),
    tagsId: X.useId(),
    reviewId: X.useId(),
    relevanceId: X.useId(),
    buttonsId: X.useId(),
  };
}
var Xt = new z(`DiscoveryQueueWizard`).Debug,
  $ = 1,
  Zt = 1400,
  Qt = `discoveryqueue2022`;
async function $t(e, t, n, r) {
  let i = [],
    a = !1;
  try {
    let { appids: o, exhausted: s } = await Y.Get().GetDiscoveryQueueAppsOfType(
      e,
      t,
      r,
    );
    ((i = [...o]),
      (a = s),
      n && i.findIndex((e) => e === n) === -1 && i.unshift(n),
      await xt.Get().QueueMultipleAppRequests(i, { ...I, ...ht }));
  } catch (e) {
    console.error(`Failed getting discovery queue apps`, e);
  }
  return { appids: i, exhausted: a };
}
function en(e) {
  let [t, n] = X.useState(!1),
    r = St();
  return (
    (0, X.useEffect)(() => {
      (Y.Init(r), n(!0));
    }, [r]),
    t ? (0, Z.jsx)(tn, { ...e }) : null
  );
}
function tn(e) {
  let {
      eStoreDiscoveryQueueType: t,
      fnCloseModal: n,
      includeAppID: r,
      storePageFilter: i,
      bPreferDemoStorePage: a,
      bShowAOAutoPlayWarning: o,
    } = e,
    [s, c] = X.useState(0),
    [l, u] = X.useState(void 0),
    [d, f] = X.useState(0),
    h = R()?.ownerWindow || window,
    g = ot(Qt),
    [_, v] = X.useState(0),
    y = bt();
  (p(`ArrowLeft`, () => C(!1), !0, !0),
    p(`Left`, () => C(!1), !0, !0),
    p(`ArrowRight`, () => C(!0), !0, !0),
    p(`Right`, () => C(!0), !0, !0),
    p(`Escape`, () => n?.(), !0, !0),
    p(`Esc`, () => n?.(), !0, !0));
  let b = X.useMemo(() => h.innerWidth < Zt, [h]),
    { fnGetDiscoveryQueue: x, rgAppIDs: S } = on(t, i, r);
  (X.useEffect(() => {
    (x(!0), B.Get().HintLoad());
  }, []),
    X.useEffect(() => {
      let e = S[s];
      e != l && (e && e != $ && y.AddImpression(e, g), u(e));
    }, [y, s, l, S, g]));
  let C = (e) => {
    let t = nt(s + (e ? 1 : -1), 0, S.length - 1);
    t != s &&
      (c(t), Xt(`New selected index: `, t, ` Prev selected index: `, s));
  };
  (X.useEffect(() => {
    S?.length &&
      S[s] !== $ &&
      (v((e) => e + 1),
      Y.Get()
        .SkipDiscoveryQueueItem(S[s], t, i)
        .then(() => v((e) => e - 1)));
  }, [t, s, S, i]),
    X.useEffect(() => {
      S.length != d && (f(S.length), S.length > d && S[s] == $ && c(s + 1));
    }, [d, s, S]));
  let [w] = X.useState(new Map()),
    T = Ct(t, i),
    E = !m() && s > 0,
    D = !m() && s < S.length - 1,
    {
      refContainer: ee,
      bIsDragging: k,
      nDragOffset: ne,
      nDragSelectedOffsetIndex: ie,
      handleTouchStart: A,
      handleTouchMove: j,
      handleTouchEnd: se,
    } = rn((e) => c(e), S.length),
    M = (e) => {
      e.target == e.currentTarget && (n?.(), e.stopPropagation());
    },
    N = (e) => Ze(s + e, S) && (tt(e, -1, 1) || k),
    fe = ft(J.STORE_BASE_URL + `explore?dq=widget`),
    pe = !W() && !dt() && t === 0,
    me = ft(J.STORE_BASE_URL + `explore/next/0`),
    _e = S[s] !== $,
    { nQueueStart: ve, nCount: be } = nn(s, S);
  return (0, Z.jsx)(ut, {
    feature: Qt,
    children: (0, Z.jsx)(H, {
      role: `dialog`,
      focusable: !1,
      "flow-children": `column`,
      className: ye,
      navEntryPreferPosition: Ye.LAST,
      onCancelButton: () => n?.(),
      onCancelActionDescription: K(`#Button_Close`),
      children: (0, Z.jsxs)(`div`, {
        className: Ue,
        onClick: M,
        children: [
          T.length > 0 &&
            (0, Z.jsx)(H, {
              "flow-children": `row`,
              className: `Wp-fkK6n2-I-`,
              children: T,
            }),
          (0, Z.jsxs)(H, {
            "flow-children": `row`,
            className: ge,
            children: [
              (0, Z.jsx)(H, {
                className: void 0,
                children: at(
                  `#DiscoveryQueue_LearnMore_Default`,
                  (0, Z.jsx)(G, { className: de, href: L(fe) }),
                ),
              }),
              pe &&
                (0, Z.jsx)(H, {
                  className: void 0,
                  children: at(
                    `#DiscoveryQueue_ClassicQueue_Link`,
                    (0, Z.jsx)(G, { className: `naQ5--hS5ms-`, href: L(me) }),
                  ),
                }),
              (0, Z.jsx)(H, {
                className: Te,
                children: (0, Z.jsx)(H, {
                  focusable: !0,
                  className: Le,
                  onClick: n,
                  "aria-label": K(`#Button_Close`),
                  onActivate: () => n && n(),
                  children: (0, Z.jsx)(Je, {}),
                }),
              }),
            ],
          }),
          (0, Z.jsx)(H, {
            role: `button`,
            "aria-label": K(`#Carousel_Next`),
            onClick: () => C(!1),
            className: V(re, ue, E && `_4dyYanLcAPg-`),
            children: (0, Z.jsx)(ct, { angle: 180 }),
          }),
          (0, Z.jsx)(H, {
            role: `button`,
            "aria-label": K(`#Carousel_Prev`),
            onClick: () => C(!0),
            className: V(re, Oe, D && `_4dyYanLcAPg-`),
            children: (0, Z.jsx)(ct, { angle: 0 }),
          }),
          (0, Z.jsx)(H, {
            ref: ee,
            className: ce,
            focusable: !1,
            onTouchStart: A,
            onTouchMove: j,
            onTouchEnd: se,
            children: [-2, -1, 0, 1, 2].map((e) =>
              (0, Z.jsx)(
                `div`,
                {
                  className: V({
                    [Ge]: !0,
                    [le]: k,
                    [qe]: N(e),
                    [O]: e == -2,
                    [te]: e == -1,
                    [he]: e == 0,
                    [Re]: e == 1,
                    [oe]: e == 2,
                    [xe]: e + ie == 0,
                  }),
                  style: { "--dragOffsetX": `${ne}px` },
                  children:
                    N(e) &&
                    (0, Z.jsx)(an, {
                      eStoreDiscoveryQueueType: t,
                      storePageFilter: i,
                      rgAppIDs: S,
                      index: s + e,
                      bShowMinimizedDisplay: b,
                      selectedIndex: s,
                      bPreferDemoStorePage: !!a,
                      mapViewedAppCount: w,
                      fnCloseModal: n,
                      fnLoadNextQueue: () => x(!1),
                      fnAdvance: C,
                      bSkipAppRequestPending: _ != 0,
                      showAOAutoPlayWarning: !!o,
                    }),
                },
                s + e,
              ),
            ),
          }),
          (0, Z.jsx)(ae, {
            className: V(!_e && `x7yACsfXkig-`),
            showPriorAsActive: !0,
            count: be,
            selectedIndex: s - ve,
          }),
        ],
      }),
    }),
  });
}
function nn(e, t) {
  let n = 0;
  for (let r = 0; r < e; r++) t[r] == $ && (n = r + 1);
  let r = 0;
  for (let n = e; n < t.length; n++)
    if (t[n] == $) {
      r = n;
      break;
    } else n == t.length - 1 && (r = t.length);
  let i = r - n;
  return { nQueueStart: n, nQueueEnd: r, nCount: i };
}
function rn(e, t) {
  let n = X.useRef(null),
    [r, i] = X.useState(0),
    [a, o] = X.useState(!1),
    [s, c] = X.useState(0),
    l = X.useRef(0);
  return {
    refContainer: n,
    bIsDragging: a,
    nDragOffset: r,
    nDragSelectedOffsetIndex: s,
    handleTouchStart: (e) => {
      (o(!0), (l.current = e.touches[0].clientX), i(0), c(0));
    },
    handleTouchMove: (e) => {
      if (!a) return;
      let t = e.touches[0].clientX - l.current;
      (i(t), c(r > 50 ? 1 : r < -50 ? -1 : 0));
    },
    handleTouchEnd: () => {
      a &&
        (o(!1),
        r > 50
          ? e((e) => Math.max(e - 1, 0))
          : r < -50 && e((e) => Math.min(e + 1, t - 1)),
        i(0),
        c(0));
    },
  };
}
function an(e) {
  let {
      eStoreDiscoveryQueueType: t,
      storePageFilter: n,
      rgAppIDs: r,
      index: i,
      bShowMinimizedDisplay: a,
      selectedIndex: o,
      bPreferDemoStorePage: s,
      mapViewedAppCount: c,
      fnCloseModal: l,
      fnLoadNextQueue: u,
      fnAdvance: d,
      bSkipAppRequestPending: f,
      showAOAutoPlayWarning: p,
    } = e,
    [m, h] = X.useState(!1),
    g = Yt(),
    _ = () => {
      o != i && d(i > o);
    },
    v = o === i,
    y = X.useRef(v);
  if (
    (X.useEffect(() => {
      let e = y.current;
      if (((y.current = v), e && !v)) {
        h(!0);
        let e = setTimeout(() => h(!1), 500);
        return () => {
          clearTimeout(e);
        };
      }
    }, [v]),
    r[i] == $)
  ) {
    let a = 0;
    for (let e = i - 1; e >= 0; e--) r[e] == $ && (a += 1);
    let s = 0;
    for (let e = i - 1; e >= 0 && r[e] !== $; e--) s++;
    return (
      c.has(a) || c.set(a, Y.Get().GetTotalSkippedAppsForDiscoveryQueue(t, n)),
      (0, X.createElement)(sn, {
        ...e,
        key: o,
        selected: v,
        lastCard: o == r.length - 1,
        fnLoadNextQueue: u,
        fnCloseModal: l,
        summaryCardIndex: a,
        eStoreDiscoveryQueueType: t,
        viewedAppCount: (c.get(a) || 0) + s,
        fnFocused: _,
        fnAdvance: () => d(!0),
        bSkipAppRequestPending: f,
      })
    );
  }
  let b = v || y.current || m;
  return (0, Z.jsx)(Gt, {
    appAriaIDs: g,
    eStoreDiscoveryQueueType: t,
    storePageFilter: n,
    selected: v,
    appID: r[i],
    bPreferDemoStorePage: s,
    fnFocused: _,
    elVideo: (0, Z.jsx)(ee, {
      appID: r[i],
      focused: b,
      showAOAutoPlayWarning: p,
      fnComplete: void 0,
    }),
    elDetails: (0, Z.jsx)(qt, {
      appID: r[i],
      bShowMinimizedDisplay: a,
      eStoreDiscoveryQueueType: t,
      storePageFilter: n,
      bPreferDemoStorePage: s,
      appAriaIDs: g,
    }),
  });
}
function on(e, t, n) {
  let [r, i] = X.useState([]),
    a = h(`DiscoveryQueueWizard`);
  return {
    fnGetDiscoveryQueue: async (o) => {
      let { appids: s } = await $t(e, !o, o && n, t);
      if (o && !s.length) {
        let { appids: n } = await $t(e, !0, void 0, t);
        s = n;
      }
      if (!a?.token?.reason) {
        let e = [...(r ?? []), ...s, $];
        i(e);
      }
      Xt(`Loaded new discovery queue apps: `, s);
    },
    rgAppIDs: r,
  };
}
function sn(e) {
  let {
      eStoreDiscoveryQueueType: t,
      fnCloseModal: n,
      summaryCardIndex: r,
      lastCard: i,
      selected: a,
      fnLoadNextQueue: o,
      storePageFilter: s,
      fnDisplaySummaryReward: c,
      viewedAppCount: l,
      fnFocused: u,
      fnAdvance: d,
      bSkipAppRequestPending: f,
    } = e,
    [p, m] = X.useState(!1),
    g = W(),
    _ = b(2, J.LANGUAGE, !1),
    [v, y] = X.useState(0),
    [x, S] = X.useState(0),
    { data: C } = st();
  X.useEffect(() => {
    a &&
      !p &&
      C &&
      B.Get()
        .HintLoad()
        .then(() => {
          Y.Get()
            .LoadSkippedApps(t, s)
            .then((e) => {
              (y(e.reduce((e, t) => (C.has(t) ? e + 1 : e), 0)),
                S(
                  e.reduce(
                    (e, t) => (B.Get().BIsGameIgnored(t) ? e + 1 : e),
                    0,
                  ),
                ),
                m(!0));
            });
        });
  }, [p, t, a, s, C]);
  let [w, T] = X.useState(!1),
    E = wt(t, s),
    D = h(`DiscoveryQueueSummary`),
    O = async () => {
      i ? w || (T(!0), await o(), D?.token?.reason || T(!1)) : d();
    };
  return (0, Z.jsxs)(cn, {
    selected: a,
    fnFocused: u,
    fnOnContinue: O,
    fnCloseModal: n,
    bLoaded: p,
    children: [
      (0, Z.jsxs)(`div`, {
        className: we,
        children: [
          (0, Z.jsx)(`div`, {
            className: je,
            children: K(`#DiscoveryQueue_SummaryTitle`),
          }),
          !E &&
            a &&
            _.data?.definition &&
            (0, Z.jsx)(un, { bSkipAppRequestPending: f, summaryCardIdx: r }),
          (0, Z.jsx)(`div`, {
            className: We,
            children: K(`#DiscoveryQueue_YourStats`),
          }),
          (0, Z.jsxs)(H, {
            "flow-children": `row`,
            className: Ie,
            children: [
              (0, Z.jsxs)(`div`, {
                className: F,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: M,
                    children: K(`#DiscoveryQueue_ViewedCaps`),
                  }),
                  (0, Z.jsx)(`div`, { className: A, children: q(l) }),
                  (0, Z.jsx)(`div`, {
                    className: j,
                    children: K(`#DiscoveryQueue_Titles`),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: F,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: M,
                    children: K(`#DiscoveryQueue_WishlistedCaps`),
                  }),
                  (0, Z.jsx)(`div`, { className: A, children: q(v) }),
                  (0, Z.jsx)(lt, {
                    className: V(j, Ee),
                    href: L(J.STORE_BASE_URL + `wishlist`),
                    children: K(`#DiscoveryQueue_ViewWishlist`),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: F,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: M,
                    children: K(`#DiscoveryQueue_IgnoredCaps`),
                  }),
                  (0, Z.jsx)(`div`, { className: A, children: q(x) }),
                  (0, Z.jsx)(lt, {
                    className: V(j, Ee),
                    href: L(J.STORE_BASE_URL + `account/notinterested`),
                    children: K(`#DiscoveryQueue_ViewIgnored`),
                  }),
                ],
              }),
            ],
          }),
          !g &&
            (0, Z.jsxs)(H, {
              className: `V-tCdhirF0E-`,
              children: [
                (0, Z.jsx)(H, {
                  className: V(`BxLuFJsRaUQ-`, `_5spq1pOe-Sg-`),
                  onClick: n,
                  children: K(`#ActionButtonLabelDone`),
                }),
                !E &&
                  (0, Z.jsx)(H, {
                    className: V(
                      w && `RJg7ZyjyMZk-`,
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `_5spq1pOe-Sg-`,
                    ),
                    onClick: O,
                    children: K(w ? `#Loading` : `#Button_Continue`),
                  }),
              ],
            }),
        ],
      }),
      !E && (0, Z.jsx)(Z.Fragment, { children: !!c && c?.(r + 1) }),
    ],
  });
}
function cn(e) {
  let {
      children: t,
      selected: n,
      fnOnContinue: r,
      fnCloseModal: i,
      fnFocused: a,
      bLoaded: o,
    } = e,
    s = ft(J.STORE_BASE_URL + `wishlist`),
    c = R()?.ownerWindow || window,
    l = () => {
      c.location.href = L(s);
    },
    u = X.useRef(null);
  return (
    X.useEffect(() => {
      n && u.current && u.current.focus({ preventScroll: !0 });
    }, [n]),
    (0, Z.jsx)(et, {
      ref: u,
      "aria-live": `polite`,
      className: V(void 0, Ke, n && `vyD3DBFIFUc-`),
      onOptionsActionDescription: K(`#DiscoveryQueue_ViewWishlist`),
      onOptionsButton: l,
      onOKActionDescription: K(`#Button_Continue`),
      onOKButton: () => {
        r();
      },
      onCancelActionDescription: K(`#ActionButtonLabelDone`),
      onCancelButton: () => i && i(),
      fnScrollIntoViewHandler: () => (a(), !0),
      children: o
        ? t
        : (0, Z.jsx)(g, {
            className: void 0,
            msDelayAppear: 200,
            size: `large`,
            position: `center`,
          }),
    })
  );
}
function ln() {
  return (0, Z.jsx)(H, {
    className: Be,
    children: (0, Z.jsx)(g, { size: `large`, position: `center` }),
  });
}
function un(e) {
  let { bSkipAppRequestPending: t, summaryCardIdx: n } = e;
  return t ? (0, Z.jsx)(ln, {}) : (0, Z.jsx)(dn, { summaryCardIdx: n });
}
function dn(e) {
  let { summaryCardIdx: t } = e,
    n = y(2, J.LANGUAGE, !1, t.toString()),
    [r] = C(n?.data?.current_def?.appid, {}),
    i = W();
  if (!n?.data?.current_def || !r?.GetName().length) return (0, Z.jsx)(ln, {});
  let a = n.data.num_items_earned,
    o = n.data.current_def.num_items_per_def,
    s = o - a,
    c = (a / o) * 100;
  return (0, Z.jsxs)(H, {
    className: Be,
    children: [
      (0, Z.jsx)(Pt, { nPercent: c, size: 70, strokeWidth: 12 }),
      (0, Z.jsxs)(H, {
        className: Me,
        children: [
          (0, Z.jsx)(`div`, {
            className: Pe,
            children: K(
              `#DiscoveryQueue_SaleStatus_Title${s ? `` : `_Complete`}`,
              q(a),
              r.GetName(),
            ),
          }),
          s > 0 &&
            (0, Z.jsx)(`div`, {
              className: `u6sC2PhNZss-`,
              children: K(`#DiscoveryQueue_SaleStatus_Desc`, q(s), r.GetName()),
            }),
          !i &&
            (0, Z.jsx)(`a`, {
              href: L(J.COMMUNITY_BASE_URL + `my/itemcollection`),
              children: K(`#DiscoveryQueue_SaleStatus_Link`),
            }),
        ],
      }),
    ],
  });
}
export { en as default };
