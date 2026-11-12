/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, st as r } from "./chunk~01cfc309bf.js";
import {
  Eo as i,
  Pt as a,
  Vt as o,
  bt as s,
  ii as c,
  ni as l,
  pi as u,
  ri as d,
  vi as f,
  yi as p,
} from "./chunk~6b8ddcaac8.js";
import { t as m } from "./chunk~684e72ad45.js";
import { i as h } from "./chunk~2f085f1384.js";
import { t as g } from "./chunk~92931c6310.js";
import { t as _ } from "./chunk~eefd71512b.js";
import { n as v } from "./chunk~38061b7abb.js";
import { u as y } from "./chunk~7b4b9eb713.js";
import "./chunk~9e9562d60b.js";
import { n as b, r as x } from "./chunk~cb3200f06e.js";
import { n as S, t as C } from "./chunk~d382bdf2cf.js";
import { n as w } from "./chunk~a7c5e71e12.js";
import { r as T } from "./chunk~a6c148633d.js";
import {
  $ as E,
  A as D,
  At as O,
  D as ee,
  Dt as te,
  F as ne,
  H as re,
  I as ie,
  J as ae,
  L as oe,
  M as k,
  N as A,
  O as se,
  Ot as ce,
  P as j,
  R as le,
  S as ue,
  T as de,
  U as fe,
  V as pe,
  W as me,
  X as he,
  Z as ge,
  _ as _e,
  _t as ve,
  a as ye,
  at as be,
  b as xe,
  bt as Se,
  ct as Ce,
  d as we,
  et as M,
  f as Te,
  ft as Ee,
  g as De,
  gt as Oe,
  ht as ke,
  it as Ae,
  j as N,
  jt as je,
  kt as Me,
  lt as Ne,
  mt as Pe,
  nt as Fe,
  o as Ie,
  ot as Le,
  p as Re,
  pt as ze,
  q as Be,
  rt as Ve,
  s as He,
  st as Ue,
  t as P,
  u as We,
  ut as Ge,
  w as Ke,
  wt as qe,
  x as Je,
  y as Ye,
  z as Xe,
} from "./chunk~d8bbc3d946.js";
import {
  $y as Ze,
  Aa as F,
  Cu as I,
  Gl as L,
  Hu as Qe,
  Ju as R,
  Jy as z,
  Kl as $e,
  Ku as et,
  Mx as tt,
  Nx as nt,
  Qs as rt,
  Sl as B,
  U as it,
  Uc as V,
  Vr as at,
  Vy as H,
  Wb as U,
  Wu as ot,
  Xy as st,
  Yu as ct,
  Yy as lt,
  Zi as W,
  Zu as ut,
  _l as dt,
  ax as ft,
  bc as pt,
  cx as G,
  hn as mt,
  jc as K,
  jx as ht,
  ly as gt,
  m as _t,
  ol as vt,
  pt as yt,
  ro as bt,
  vc as xt,
  wc as q,
  yc as St,
  zo as Ct,
} from "./main.js";
import { i as wt, n as J, o as Tt, t as Et } from "./chunk~7401689b78.js";
import { t as Dt } from "./chunk~437071091c.js";
import { i as Ot } from "./chunk~65da1d3223.js";
import { n as kt } from "./chunk~1f9175251c.js";
import { i as At, n as jt, t as Mt } from "./chunk~15f90ada43.js";
var Y = e(t()),
  Nt = `NerpSqWj84M-`,
  Pt = `SOzTsKYY9Yg-`,
  X = n(),
  Ft = ({ nPercent: e, size: t = 120, strokeWidth: n = 20 }) => {
    let r = (t - n) / 2,
      i = 2 * Math.PI * r,
      a = i - (e / 100) * i,
      o = e == 100;
    return (0, X.jsx)(`div`, {
      className: q({ [Nt]: !0, [Pt]: o }),
      children: (0, X.jsxs)(`svg`, {
        width: t,
        height: t,
        style: { transform: `rotate(-90deg)` },
        children: [
          (0, X.jsx)(`circle`, {
            cx: t / 2,
            cy: t / 2,
            r,
            stroke: `#0c131d`,
            strokeWidth: n,
            fill: `none`,
          }),
          (0, X.jsx)(`circle`, {
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
  It = new B(`AppRelevance`).Debug;
function Lt(e, t) {
  let n = (0, Y.useMemo)(
    () => I.Get().GetRecommendingCuratorsForApp(e) || [],
    [e],
  );
  return r({
    queryKey: [`RecommendingCurators`, e],
    queryFn: () =>
      Promise.all(n?.map((e) => Dt.LoadClanInfoForClanAccountID(e))),
    enabled: !!t && n && n.length > 0,
  });
}
function Rt(e) {
  let {
      appID: t,
      bShowAvatars: n,
      storeItem: i,
      bHideDescription: a,
      bShowCuratorInfo: o = !1,
      bShowCreatorInfo: s,
    } = e,
    c = T(t),
    l = Mt(t),
    u = At(t),
    d = jt(),
    f = r({
      queryKey: [`SimilarPlayedAppsLoad`, t],
      queryFn: () =>
        L.Get().QueueMultipleAppRequests(
          u.data.arrSimilarPlayedApps?.map((e) => e.appid),
          { include_basic_info: !0, include_assets: !0 },
        ),
      enabled: u.isSuccess,
    }),
    p = Lt(t, o),
    m = (0, Y.useMemo)(() => {
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
          (e = e.filter((e) => I.Get().BIsFollowingCurator(e.nAccountID)))),
        e
      );
    }, [i]),
    h = r({
      queryKey: [`FollowedCreators`, t],
      queryFn: () =>
        Dt.LoadClanInfoForClanAccountID(m[0].nAccountID).then((e) => ({
          clanInfo: e,
          type: m[0].type,
        })),
      enabled: !!s && m && m.length > 0,
    }),
    g = r({
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
          let n = H.InitFromAccountID(
            l.data.accountids_recommended[t],
            G.EUNIVERSE,
          );
          e.push(n.ConvertTo64BitString());
        }
        for (
          let e = 0;
          c.data.in_wishlist && e < c.data.in_wishlist.length && e < i;
          e++
        ) {
          let n = new H(c.data.in_wishlist[e].steamid);
          t.push(n.ConvertTo64BitString());
        }
        for (let e = 0; c.data.owns && e < c.data.owns.length && e < i; e++) {
          let t = new H(c.data.owns[e].steamid);
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
    g.isLoading
  )
    return (0, X.jsx)(_, { size: `medium`, position: `center` });
  let v = [];
  u.isSuccess &&
    u.data.arrSimilarPlayedApps &&
    u.data.arrSimilarPlayedApps.slice(0, 2).forEach((e) => {
      let n = L.Get().GetApp(e.appid);
      n
        ? v.push(
            (0, X.jsx)(
              Vt,
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
    w = l.data?.accountids_recommended?.length,
    E = 0;
  return (
    S > 0 && E++,
    C > 0 && E++,
    w > 0 && E++,
    b && E++,
    y >= 0 && E++,
    v.length > 0 && E++,
    o && p?.data?.length && E++,
    s && h.data && E++,
    It(`FriendsOwned: `, S, ` FriendsWishlisted: `, C, `cRecommended: `, w),
    (0, X.jsxs)(X.Fragment, {
      children: [
        E > 0 &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                className: `Hw5Md-rtn-k-`,
                children: z(`#DiscoveryQueue_WhyRelevant`),
              }),
              (0, X.jsxs)(`div`, {
                role: `list`,
                className: `M9g7Z8vAw60-`,
                children: [
                  x &&
                    (0, X.jsx)(Q, {
                      header: z(`#DiscoveryQueue_SimilarGames`),
                      children: (0, X.jsx)(`div`, {
                        className: `d7rsPMqqO4s-`,
                        children: v,
                      }),
                    }),
                  o &&
                    !!p?.data?.length &&
                    (0, X.jsx)(Q, {
                      header: z(`#ContentHub_Recommendation_Curators`),
                      children: (0, X.jsx)(`div`, {
                        className: q(`d7rsPMqqO4s-`, `GQ2d2HGUoPA-`),
                        children: p.data
                          .filter(Boolean)
                          .map((e) =>
                            (0, X.jsx)(
                              Bt,
                              { curator: e },
                              `curator_` + e.clanAccountID,
                            ),
                          ),
                      }),
                    }),
                  s && !!h.data && (0, X.jsx)(zt, { creatorInfo: h.data }),
                  y >= 0 &&
                    (0, X.jsx)(Q, {
                      header: st(
                        `#DiscoveryQueue_TopSellers`,
                        W(y + 1),
                        (0, X.jsx)(`span`, { className: `wdv04oGNxck-` }),
                      ),
                    }),
                  b &&
                    !x &&
                    (0, X.jsx)(Q, {
                      header: z(`#DiscoveryQueue_RecommendedByIR`),
                    }),
                  (0, X.jsx)(Z, {
                    bShowAvatars: n,
                    count: l.data?.accountids_recommended?.length,
                    locToken: `#DiscoveryQueue_FriendsRecommended`,
                    arrSteamIDs: g.data?.rgRecommendedFriends,
                  }),
                  (0, X.jsx)(Z, {
                    bShowAvatars: n,
                    count: c.data?.owns?.length,
                    locToken: `#DiscoveryQueue_FriendsOwned`,
                    arrSteamIDs: g.data?.rgOwnedFriends,
                  }),
                  (0, X.jsx)(Z, {
                    bShowAvatars: n,
                    count: c.data?.in_wishlist?.length,
                    locToken: `#DiscoveryQueue_FriendsWishlisted`,
                    arrSteamIDs: g.data?.rgWishlistFriends,
                  }),
                ],
              }),
            ],
          }),
        !a || E == 0
          ? (0, X.jsx)(`div`, {
              className: q(ye, E && void 0),
              children: i.GetShortDescription(),
            })
          : (0, X.jsx)(`div`, { "aria-label": i.GetShortDescription() }),
      ],
    })
  );
}
function zt(e) {
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
    ? (0, X.jsx)(Q, {
        header: Ze(
          n,
          (0, X.jsx)(`span`, {
            className: M,
            children: t.clanInfo?.group_name,
          }),
        ),
      })
    : null;
}
function Bt(e) {
  let { curator: t } = e,
    { creatorHome: n } = y(t?.clanAccountID);
  return !t || !n
    ? null
    : (0, X.jsx)(vt, {
        href: n.GetCreatorHomeURL(null),
        children: (0, X.jsx)(`img`, { src: t.avatar_medium_url }),
      });
}
function Vt(e) {
  let { lifetimePlaytime: t, storeItem: n } = e,
    r = $e(n);
  return (0, X.jsx)(`div`, {
    className: Ne,
    children: (0, X.jsx)(o, {
      id: r,
      bHidePrice: !0,
      hoverProps: {
        direction: `overlay`,
        nBodyAlignment: 1,
        style: { minWidth: `320px`, zIndex: 5e3 },
      },
      children: (0, X.jsx)(`img`, {
        className: Ge,
        alt: n.GetName(),
        src: n.GetAssets().GetSmallCapsuleURL(),
      }),
    }),
  });
}
function Z(e) {
  let { arrSteamIDs: t, count: n, locToken: r, bShowAvatars: i } = e;
  return n
    ? n == 1 && !i
      ? (0, X.jsx)(Q, {
          header: Ze(r + `_Single`, (0, X.jsx)(Ht, { steamid: t[0] })),
        })
      : (0, X.jsx)(Q, {
          header: st(r, n, (0, X.jsx)(`span`, { className: M })),
          children:
            i &&
            t.length > 0 &&
            (0, X.jsx)(`div`, {
              className: `nd1w3QliCfE-`,
              children:
                n == 1
                  ? (0, X.jsx)(Wt, { steamid: t[0] })
                  : (0, X.jsx)(Ut, { arrSteamIDs: t }),
            }),
        })
    : null;
}
function Ht(e) {
  let { steamid: t } = e,
    { data: n } = S(t);
  return !n || !n.m_bInitialized
    ? null
    : (0, X.jsx)(`span`, {
        "data-miniprofile": `s` + n.m_steamid.ConvertTo64BitString(),
        className: M,
        children: n.m_strPlayerName,
      });
}
function Ut(e) {
  let { arrSteamIDs: t } = e,
    n = C(t);
  return (0, X.jsx)(X.Fragment, {
    children: n.map(
      ({ data: e }) =>
        e &&
        (0, X.jsx)(
          Ot,
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
    { data: n } = S(t);
  return n
    ? (0, X.jsxs)(K, {
        className: D,
        "data-miniprofile": `s` + t,
        children: [
          (0, X.jsx)(Ot, {
            persona: n,
            size: `Small`,
            statusPosition: `right`,
          }),
          (0, X.jsx)(kt, {
            className: me,
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
  return (0, X.jsxs)(`div`, {
    className: E,
    children: [
      (0, X.jsx)(`div`, { className: he, children: (0, X.jsx)(bt, {}) }),
      (0, X.jsxs)(`div`, {
        className: ge,
        children: [(0, X.jsx)(`div`, { className: void 0, children: n }), t],
      }),
    ],
  });
}
new B(`DiscoveryQueueApp`).Debug;
function Gt(e) {
  let {
      appID: t,
      nItemHeight: n,
      nItemWidth: r,
      selected: i,
      fnFocused: a,
      eStoreDiscoveryQueueType: o,
      storePageFilter: s,
      bPreferDemoStorePage: f,
      elVideo: p,
      elDetails: m,
      appAriaIDs: h,
    } = e,
    [g] = w(t, P),
    _ = U(),
    y = F()?.ownerWindow || window,
    b = Kt(g, o, s, f),
    { bIsIgnored: x, fnUpdateIgnored: S } = Me(t),
    { bIsWishlisted: C, fnUpdateWishlist: T } = O(t),
    E = Y.useRef(null);
  if (
    (Y.useEffect(() => {
      i && E.current && E.current.focus({ preventScroll: !0 });
    }, [i]),
    !g)
  )
    return (console.warn(`Error: missing store item for appid `, t), null);
  let D = { width: r || void 0, height: n || void 0 };
  return (0, X.jsxs)(K, {
    "aria-labelledby": v(
      h.nameId,
      h.tagsId,
      h.reviewId,
      h.relevanceId,
      h.buttonsId,
    ),
    ref: E,
    style: D,
    className: q(Ye, i && `vyD3DBFIFUc-`),
    onOptionsActionDescription: z(
      C
        ? `#DiscoveryQueue_RemoveFromWishlist`
        : `#DiscoveryQueue_AddToWishlist`,
    ),
    onOptionsButton: T,
    onOKActionDescription: z(`#DiscoveryQueue_ViewStorePage`),
    onOKButton: () => {
      y.location.href = b;
    },
    onSecondaryActionDescription: z(
      x ? `#DiscoveryQueue_Undo` : `#DiscoveryQueue_IgnoreLink`,
    ),
    onSecondaryButton: S,
    fnScrollIntoViewHandler: () => (a(), !0),
    children: [
      (0, X.jsx)(`div`, {
        className: q(ne, x && `_3ZYr-Efwvg8-`),
        children: (0, X.jsxs)(`div`, {
          className: q(oe, x && `_3ZYr-Efwvg8-`),
          children: [
            (0, X.jsx)(`div`, {
              className: le,
              children: z(`#DiscoveryQueue_Ignored`),
            }),
            (0, X.jsx)(`div`, {
              className: ie,
              children: z(`#DiscoveryQueue_IgnoredConfirmation`),
            }),
            (0, X.jsxs)(K, {
              className: q(Be, Se),
              onClick: S,
              children: [
                _ &&
                  (0, X.jsx)(l, { button: u.X, type: c.Light, size: d.Medium }),
                z(`#DiscoveryQueue_Undo`),
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
  let i = et();
  return Y.useMemo(() => {
    if (!e) return;
    let a = Et(n),
      o = t >= 0 ? `?inqueue=` + t + (n ? `_` + a : ``) : ``,
      s = Qe(i, e.GetStorePageURL(r) + o);
    return V(s);
  }, [r, t, i, e, n]);
}
function qt(e) {
  let {
      appID: t,
      bShowMinimizedDisplay: n,
      eStoreDiscoveryQueueType: r,
      storePageFilter: o,
      bPreferDemoStorePage: f,
      appAriaIDs: m,
    } = e,
    [h] = w(t, P),
    g = i(t),
    { bIsIgnored: _, fnUpdateIgnored: v } = Me(t),
    { bIsWishlisted: y, fnUpdateWishlist: b } = O(t),
    x = Kt(h, r, o, f),
    S = U(),
    C = S;
  if (!h) return;
  let T = h.GetAssets().GetLibraryCapsuleURL(),
    E = h.GetAssets().GetHeaderURL();
  return (0, X.jsxs)(K, {
    className: Ie,
    children: [
      (0, X.jsxs)(`div`, {
        className: He,
        children: [
          T &&
            (0, X.jsxs)(`a`, {
              className: q(`_-6qCNJHr4Z0-`),
              href: x,
              children: [
                (0, X.jsx)(`img`, { className: `Q3mOh913Yuw-`, src: T }),
                E && (0, X.jsx)(`img`, { className: `k5tHhP269dw-`, src: E }),
              ],
            }),
          (0, X.jsxs)(`div`, {
            id: m.nameId,
            className: be,
            children: [
              (0, X.jsx)(`a`, {
                className: q(We),
                href: x,
                children: h.GetName(),
              }),
              (0, X.jsx)(a, { bSingleLineMode: !0, id: g }),
            ],
          }),
          (0, X.jsx)(Jt, { rgTagIDs: h.GetTagIDs(), ariaLabelID: m.tagsId }),
          (0, X.jsx)(`div`, {
            className: Te,
            id: m.reviewId,
            children: (0, X.jsx)(p, {
              bShowTooltip: !0,
              bTruncateTotalReviews: n,
              id: g,
            }),
          }),
          (0, X.jsx)(`div`, {
            id: m.relevanceId,
            className: we,
            children: (0, X.jsx)(Rt, {
              bHideDescription: S,
              bShowAvatars: !n,
              storeItem: h,
              appID: t,
            }),
          }),
        ],
      }),
      !S &&
        (0, X.jsx)(`div`, {
          className: `Ud5K2f6NQFA-`,
          children: (0, X.jsx)(`div`, {
            id: m.buttonsId,
            className: `sRPPHGX-rq4-`,
            children: (0, X.jsxs)(`div`, {
              className: `kjR6Qum8rRo-`,
              children: [
                h.BHasDemo() &&
                  (0, X.jsx)(s, {
                    id: g,
                    className: q(
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `enD9-bmgGhA-`,
                    ),
                  }),
                (0, X.jsxs)(`a`, {
                  className: q(`BxLuFJsRaUQ-`, `VE8INnFzaCw-`),
                  href: x,
                  children: [
                    C &&
                      (0, X.jsx)(l, {
                        button: u.Y,
                        type: c.Light,
                        size: d.Medium,
                        additionalClassName: `a-wHbIOxF8U-`,
                      }),
                    ` `,
                    z(`#DiscoveryQueue_ViewStorePage`),
                  ],
                }),
                (0, X.jsx)(at, {
                  toolTipContent: z(
                    y ? `#RemoveFromWishlist_ttip` : `#AddToWishlist_ttip`,
                  ),
                  children: (0, X.jsxs)(K, {
                    "aria-label": z(
                      y ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
                    ),
                    focusable: !0,
                    className: q(`BxLuFJsRaUQ-`, y && `_3ZYr-Efwvg8-`),
                    onClick: b,
                    children: [
                      C &&
                        (0, X.jsx)(l, {
                          button: u.Y,
                          type: c.Light,
                          size: d.Medium,
                          additionalClassName: `a-wHbIOxF8U-`,
                        }),
                      y ? (0, X.jsx)(xt, {}) : (0, X.jsx)(St, {}),
                    ],
                  }),
                }),
                (0, X.jsx)(at, {
                  toolTipContent: z(`#SaleTrailerCarousel_IgnoreLink_ttip`),
                  children: (0, X.jsx)(K, {
                    "aria-label": z(`#DiscoveryQueue_IgnoreLink`),
                    focusable: !0,
                    className: q(`BxLuFJsRaUQ-`, _ && `_3ZYr-Efwvg8-`),
                    onClick: v,
                    children: (0, X.jsx)(Ct, {}),
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
    r = [...ce(t)].slice(0, 8);
  return (0, X.jsx)(`div`, {
    id: n,
    role: `list`,
    className: Re,
    children: r.map((e) => (0, X.jsx)(it, { className: ke, tagID: e }, e)),
  });
}
function Yt() {
  return {
    nameId: Y.useId(),
    tagsId: Y.useId(),
    reviewId: Y.useId(),
    relevanceId: Y.useId(),
    buttonsId: Y.useId(),
  };
}
var Xt = new B(`DiscoveryQueueWizard`).Debug,
  $ = 1,
  Zt = 1400,
  Qt = `discoveryqueue2022`;
async function $t(e, t, n, r) {
  let i = [],
    a = !1;
  try {
    let { appids: o, exhausted: s } = await J.Get().GetDiscoveryQueueAppsOfType(
      e,
      t,
      r,
    );
    ((i = [...o]),
      (a = s),
      n && i.findIndex((e) => e === n) === -1 && i.unshift(n),
      await L.Get().QueueMultipleAppRequests(i, { ...P, ..._t }));
  } catch (e) {
    console.error(`Failed getting discovery queue apps`, e);
  }
  return { appids: i, exhausted: a };
}
function en(e) {
  let [t, n] = Y.useState(!1),
    r = gt();
  return (
    (0, Y.useEffect)(() => {
      (J.Init(r), n(!0));
    }, [r]),
    t ? (0, X.jsx)(tn, { ...e }) : null
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
    [s, c] = Y.useState(0),
    [l, u] = Y.useState(void 0),
    [d, f] = Y.useState(0),
    p = F()?.ownerWindow || window,
    g = ct(Qt),
    [_, v] = Y.useState(0),
    y = ut();
  (m(`ArrowLeft`, () => C(!1), !0, !0),
    m(`Left`, () => C(!1), !0, !0),
    m(`ArrowRight`, () => C(!0), !0, !0),
    m(`Right`, () => C(!0), !0, !0),
    m(`Escape`, () => n?.(), !0, !0),
    m(`Esc`, () => n?.(), !0, !0));
  let b = Y.useMemo(() => p.innerWidth < Zt, [p]),
    { fnGetDiscoveryQueue: x, rgAppIDs: S } = on(t, i, r);
  (Y.useEffect(() => {
    (x(!0), I.Get().HintLoad());
  }, []),
    Y.useEffect(() => {
      let e = S[s];
      e != l && (e && e != $ && y.AddImpression(e, g), u(e));
    }, [y, s, l, S, g]));
  let C = (e) => {
    let t = ht(s + (e ? 1 : -1), 0, S.length - 1);
    t != s &&
      (c(t), Xt(`New selected index: `, t, ` Prev selected index: `, s));
  };
  (Y.useEffect(() => {
    S?.length &&
      S[s] !== $ &&
      (v((e) => e + 1),
      J.Get()
        .SkipDiscoveryQueueItem(S[s], t, i)
        .then(() => v((e) => e - 1)));
  }, [t, s, S, i]),
    Y.useEffect(() => {
      S.length != d && (f(S.length), S.length > d && S[s] == $ && c(s + 1));
    }, [d, s, S]));
  let [w] = Y.useState(new Map()),
    T = wt(t, i),
    E = !h() && s > 0,
    D = !h() && s < S.length - 1,
    {
      refContainer: O,
      bIsDragging: te,
      nDragOffset: ne,
      nDragSelectedOffsetIndex: ie,
      handleTouchStart: oe,
      handleTouchMove: k,
      handleTouchEnd: A,
    } = rn((e) => c(e), S.length),
    ce = (e) => {
      e.target == e.currentTarget && (n?.(), e.stopPropagation());
    },
    j = (e) => tt(s + e, S) && (nt(e, -1, 1) || te),
    le = R(G.STORE_BASE_URL + `explore?dq=widget`),
    me = !U() && !ft() && t === 0,
    he = R(G.STORE_BASE_URL + `explore/next/0`),
    ge = S[s] !== $,
    { nQueueStart: ye, nCount: be } = nn(s, S);
  return (0, X.jsx)(yt, {
    feature: Qt,
    children: (0, X.jsx)(K, {
      role: `dialog`,
      focusable: !1,
      "flow-children": `column`,
      className: xe,
      navEntryPreferPosition: dt.LAST,
      onCancelButton: () => n?.(),
      onCancelActionDescription: z(`#Button_Close`),
      children: (0, X.jsxs)(`div`, {
        className: Ke,
        onClick: ce,
        children: [
          T.length > 0 &&
            (0, X.jsx)(K, {
              "flow-children": `row`,
              className: `Wp-fkK6n2-I-`,
              children: T,
            }),
          (0, X.jsxs)(K, {
            "flow-children": `row`,
            className: ve,
            children: [
              (0, X.jsx)(K, {
                className: void 0,
                children: lt(
                  `#DiscoveryQueue_LearnMore_Default`,
                  (0, X.jsx)(vt, { className: pe, href: V(le) }),
                ),
              }),
              me &&
                (0, X.jsx)(K, {
                  className: void 0,
                  children: lt(
                    `#DiscoveryQueue_ClassicQueue_Link`,
                    (0, X.jsx)(vt, { className: `naQ5--hS5ms-`, href: V(he) }),
                  ),
                }),
              (0, X.jsx)(K, {
                className: De,
                children: (0, X.jsx)(K, {
                  focusable: !0,
                  className: Be,
                  onClick: n,
                  "aria-label": z(`#Button_Close`),
                  onActivate: () => n && n(),
                  children: (0, X.jsx)(pt, {}),
                }),
              }),
            ],
          }),
          (0, X.jsx)(K, {
            role: `button`,
            "aria-label": z(`#Carousel_Next`),
            onClick: () => C(!1),
            className: q(ae, fe, E && `_4dyYanLcAPg-`),
            children: (0, X.jsx)(rt, { angle: 180 }),
          }),
          (0, X.jsx)(K, {
            role: `button`,
            "aria-label": z(`#Carousel_Prev`),
            onClick: () => C(!0),
            className: q(ae, Ae, D && `_4dyYanLcAPg-`),
            children: (0, X.jsx)(rt, { angle: 0 }),
          }),
          (0, X.jsx)(K, {
            ref: O,
            className: ue,
            focusable: !1,
            onTouchStart: oe,
            onTouchMove: k,
            onTouchEnd: A,
            children: [-2, -1, 0, 1, 2].map((e) =>
              (0, X.jsx)(
                `div`,
                {
                  className: q({
                    [Je]: !0,
                    [de]: te,
                    [Xe]: j(e),
                    [ee]: e == -2,
                    [re]: e == -1,
                    [_e]: e == 0,
                    [Ve]: e == 1,
                    [se]: e == 2,
                    [Ce]: e + ie == 0,
                  }),
                  style: { "--dragOffsetX": `${ne}px` },
                  children:
                    j(e) &&
                    (0, X.jsx)(an, {
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
          (0, X.jsx)(je, {
            className: q(!ge && `x7yACsfXkig-`),
            showPriorAsActive: !0,
            count: be,
            selectedIndex: s - ye,
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
  let n = Y.useRef(null),
    [r, i] = Y.useState(0),
    [a, o] = Y.useState(!1),
    [s, c] = Y.useState(0),
    l = Y.useRef(0);
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
    [m, h] = Y.useState(!1),
    g = Yt(),
    _ = () => {
      o != i && d(i > o);
    },
    v = o === i,
    y = Y.useRef(v);
  if (
    (Y.useEffect(() => {
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
      c.has(a) || c.set(a, J.Get().GetTotalSkippedAppsForDiscoveryQueue(t, n)),
      (0, Y.createElement)(sn, {
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
  return (0, X.jsx)(Gt, {
    appAriaIDs: g,
    eStoreDiscoveryQueueType: t,
    storePageFilter: n,
    selected: v,
    appID: r[i],
    bPreferDemoStorePage: s,
    fnFocused: _,
    elVideo: (0, X.jsx)(te, {
      appID: r[i],
      focused: b,
      showAOAutoPlayWarning: p,
      fnComplete: void 0,
    }),
    elDetails: (0, X.jsx)(qt, {
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
  let [r, i] = Y.useState([]),
    a = g(`DiscoveryQueueWizard`);
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
      bSkipAppRequestPending: p,
    } = e,
    [m, h] = Y.useState(!1),
    _ = U(),
    v = x(2, G.LANGUAGE, !1),
    [y, b] = Y.useState(0),
    [S, C] = Y.useState(0),
    { data: w } = f();
  Y.useEffect(() => {
    a &&
      !m &&
      w &&
      I.Get()
        .HintLoad()
        .then(() => {
          J.Get()
            .LoadSkippedApps(t, s)
            .then((e) => {
              (b(e.reduce((e, t) => (w.has(t) ? e + 1 : e), 0)),
                C(
                  e.reduce(
                    (e, t) => (I.Get().BIsGameIgnored(t) ? e + 1 : e),
                    0,
                  ),
                ),
                h(!0));
            });
        });
  }, [m, t, a, s, w]);
  let [T, E] = Y.useState(!1),
    D = Tt(t, s),
    O = g(`DiscoveryQueueSummary`),
    ee = async () => {
      i ? T || (E(!0), await o(), O?.token?.reason || E(!1)) : d();
    };
  return (0, X.jsxs)(cn, {
    selected: a,
    fnFocused: u,
    fnOnContinue: ee,
    fnCloseModal: n,
    bLoaded: m,
    children: [
      (0, X.jsxs)(`div`, {
        className: Ee,
        children: [
          (0, X.jsx)(`div`, {
            className: Pe,
            children: z(`#DiscoveryQueue_SummaryTitle`),
          }),
          !D &&
            a &&
            v.data?.definition &&
            (0, X.jsx)(un, { bSkipAppRequestPending: p, summaryCardIdx: r }),
          (0, X.jsx)(`div`, {
            className: qe,
            children: z(`#DiscoveryQueue_YourStats`),
          }),
          (0, X.jsxs)(K, {
            "flow-children": `row`,
            className: ze,
            children: [
              (0, X.jsxs)(`div`, {
                className: N,
                children: [
                  (0, X.jsx)(`div`, {
                    className: j,
                    children: z(`#DiscoveryQueue_ViewedCaps`),
                  }),
                  (0, X.jsx)(`div`, { className: k, children: W(l) }),
                  (0, X.jsx)(`div`, {
                    className: A,
                    children: z(`#DiscoveryQueue_Titles`),
                  }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: N,
                children: [
                  (0, X.jsx)(`div`, {
                    className: j,
                    children: z(`#DiscoveryQueue_WishlistedCaps`),
                  }),
                  (0, X.jsx)(`div`, { className: k, children: W(y) }),
                  (0, X.jsx)(ot, {
                    className: q(A, Oe),
                    href: V(G.STORE_BASE_URL + `wishlist`),
                    children: z(`#DiscoveryQueue_ViewWishlist`),
                  }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: N,
                children: [
                  (0, X.jsx)(`div`, {
                    className: j,
                    children: z(`#DiscoveryQueue_IgnoredCaps`),
                  }),
                  (0, X.jsx)(`div`, { className: k, children: W(S) }),
                  (0, X.jsx)(ot, {
                    className: q(A, Oe),
                    href: V(G.STORE_BASE_URL + `account/notinterested`),
                    children: z(`#DiscoveryQueue_ViewIgnored`),
                  }),
                ],
              }),
            ],
          }),
          !_ &&
            (0, X.jsxs)(K, {
              className: `V-tCdhirF0E-`,
              children: [
                (0, X.jsx)(K, {
                  className: q(`BxLuFJsRaUQ-`, `_5spq1pOe-Sg-`),
                  onClick: n,
                  children: z(`#ActionButtonLabelDone`),
                }),
                !D &&
                  (0, X.jsx)(K, {
                    className: q(
                      T && `RJg7ZyjyMZk-`,
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `_5spq1pOe-Sg-`,
                    ),
                    onClick: ee,
                    children: z(T ? `#Loading` : `#Button_Continue`),
                  }),
              ],
            }),
        ],
      }),
      !D && (0, X.jsx)(X.Fragment, { children: !!c && c?.(r + 1) }),
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
    s = R(G.STORE_BASE_URL + `wishlist`),
    c = F()?.ownerWindow || window,
    l = () => {
      c.location.href = V(s);
    },
    u = Y.useRef(null);
  return (
    Y.useEffect(() => {
      n && u.current && u.current.focus({ preventScroll: !0 });
    }, [n]),
    (0, X.jsx)(mt, {
      ref: u,
      "aria-live": `polite`,
      className: q(void 0, Ye, n && `vyD3DBFIFUc-`),
      onOptionsActionDescription: z(`#DiscoveryQueue_ViewWishlist`),
      onOptionsButton: l,
      onOKActionDescription: z(`#Button_Continue`),
      onOKButton: () => {
        r();
      },
      onCancelActionDescription: z(`#ActionButtonLabelDone`),
      onCancelButton: () => i && i(),
      fnScrollIntoViewHandler: () => (a(), !0),
      children: o
        ? t
        : (0, X.jsx)(_, {
            className: void 0,
            msDelayAppear: 200,
            size: `large`,
            position: `center`,
          }),
    })
  );
}
function ln() {
  return (0, X.jsx)(K, {
    className: Ue,
    children: (0, X.jsx)(_, { size: `large`, position: `center` }),
  });
}
function un(e) {
  let { bSkipAppRequestPending: t, summaryCardIdx: n } = e;
  return t ? (0, X.jsx)(ln, {}) : (0, X.jsx)(dn, { summaryCardIdx: n });
}
function dn(e) {
  let { summaryCardIdx: t } = e,
    n = b(2, G.LANGUAGE, !1, t.toString()),
    [r] = w(n?.data?.current_def?.appid, {}),
    i = U();
  if (!n?.data?.current_def || !r?.GetName().length) return (0, X.jsx)(ln, {});
  let a = n.data.num_items_earned,
    o = n.data.current_def.num_items_per_def,
    s = o - a,
    c = (a / o) * 100;
  return (0, X.jsxs)(K, {
    className: Ue,
    children: [
      (0, X.jsx)(Ft, { nPercent: c, size: 70, strokeWidth: 12 }),
      (0, X.jsxs)(K, {
        className: Fe,
        children: [
          (0, X.jsx)(`div`, {
            className: Le,
            children: z(
              `#DiscoveryQueue_SaleStatus_Title${s ? `` : `_Complete`}`,
              W(a),
              r.GetName(),
            ),
          }),
          s > 0 &&
            (0, X.jsx)(`div`, {
              className: `u6sC2PhNZss-`,
              children: z(`#DiscoveryQueue_SaleStatus_Desc`, W(s), r.GetName()),
            }),
          !i &&
            (0, X.jsx)(`a`, {
              href: V(G.COMMUNITY_BASE_URL + `my/itemcollection`),
              children: z(`#DiscoveryQueue_SaleStatus_Link`),
            }),
        ],
      }),
    ],
  });
}
export { en as default };
