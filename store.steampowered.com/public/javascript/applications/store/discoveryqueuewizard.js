/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, ot as r } from "./chunk~01cfc309bf.js";
import {
  $n as i,
  Ca as a,
  Ia as o,
  Pa as s,
  Ta as c,
  dr as l,
  wa as u,
  zn as d,
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
  F as te,
  H as ne,
  I as re,
  J as ie,
  L as ae,
  M as k,
  Mt as oe,
  N as A,
  O as se,
  Ot as ce,
  P as j,
  R as M,
  S as le,
  T as ue,
  U as de,
  V as fe,
  W as pe,
  X as me,
  Z as he,
  _ as ge,
  _t as _e,
  a as ve,
  at as ye,
  b as be,
  bt as xe,
  ct as Se,
  d as Ce,
  et as N,
  f as we,
  ft as Te,
  g as Ee,
  gt as De,
  ht as Oe,
  it as ke,
  j as P,
  kt as Ae,
  lt as je,
  mt as Me,
  nt as Ne,
  o as Pe,
  ot as Fe,
  p as Ie,
  pt as Le,
  q as Re,
  rt as ze,
  s as Be,
  st as Ve,
  t as F,
  u as He,
  ut as Ue,
  w as We,
  wt as Ge,
  x as Ke,
  y as qe,
  z as Je,
} from "./chunk~d8bbc3d946.js";
import {
  $c as I,
  Ac as Ye,
  Ba as L,
  Dl as Xe,
  Hx as Ze,
  Ml as R,
  Nu as z,
  Oc as Qe,
  Pc as B,
  Qu as $e,
  Sn as et,
  U as tt,
  Ux as nt,
  Vc as V,
  Vx as rt,
  Xr as it,
  Yo as at,
  Zy as H,
  ab as ot,
  ad as st,
  an as ct,
  cc as lt,
  ed as ut,
  ex as U,
  gl as W,
  gt as dt,
  hx as ft,
  ib as G,
  id as K,
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
      className: B({ [Mt]: !0, [Nt]: o }),
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
  Ft = new R(`AppRelevance`).Debug;
function It(e, t) {
  let n = (0, X.useMemo)(
    () => z.Get().GetRecommendingCuratorsForApp(e) || [],
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
          (e = e.filter((e) => z.Get().BIsFollowingCurator(e.nAccountID)))),
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
          let n = H.InitFromAccountID(
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
                children: G(`#DiscoveryQueue_WhyRelevant`),
              }),
              (0, Z.jsxs)(`div`, {
                role: `list`,
                className: `M9g7Z8vAw60-`,
                children: [
                  x &&
                    (0, Z.jsx)(Q, {
                      header: G(`#DiscoveryQueue_SimilarGames`),
                      children: (0, Z.jsx)(`div`, {
                        className: `d7rsPMqqO4s-`,
                        children: v,
                      }),
                    }),
                  o &&
                    !!p?.data?.length &&
                    (0, Z.jsx)(Q, {
                      header: G(`#ContentHub_Recommendation_Curators`),
                      children: (0, Z.jsx)(`div`, {
                        className: B(`d7rsPMqqO4s-`, `GQ2d2HGUoPA-`),
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
                      header: G(`#DiscoveryQueue_RecommendedByIR`),
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
              className: B(ve, E && void 0),
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
            className: N,
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
    : (0, Z.jsx)(W, {
        href: n.GetCreatorHomeURL(null),
        children: (0, Z.jsx)(`img`, { src: t.avatar_medium_url }),
      });
}
function Bt(e) {
  let { lifetimePlaytime: t, storeItem: n } = e,
    r = _t(n);
  return (0, Z.jsx)(`div`, {
    className: je,
    children: (0, Z.jsx)(l, {
      id: r,
      bHidePrice: !0,
      hoverProps: {
        direction: `overlay`,
        nBodyAlignment: 1,
        style: { minWidth: `320px`, zIndex: 5e3 },
      },
      children: (0, Z.jsx)(`img`, {
        className: Ue,
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
          header: vt(r, n, (0, Z.jsx)(`span`, { className: N })),
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
        className: N,
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
    ? (0, Z.jsxs)(V, {
        className: E,
        "data-miniprofile": `s` + t,
        children: [
          (0, Z.jsx)(Dt, {
            persona: n,
            size: `Small`,
            statusPosition: `right`,
          }),
          (0, Z.jsx)(Ot, {
            className: pe,
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
      (0, Z.jsx)(`div`, { className: me, children: (0, Z.jsx)(yt, {}) }),
      (0, Z.jsxs)(`div`, {
        className: he,
        children: [(0, Z.jsx)(`div`, { className: void 0, children: n }), t],
      }),
    ],
  });
}
new R(`DiscoveryQueueApp`).Debug;
function Gt(e) {
  let {
      appID: t,
      nItemHeight: n,
      nItemWidth: r,
      selected: i,
      fnFocused: o,
      eStoreDiscoveryQueueType: l,
      storePageFilter: d,
      bPreferDemoStorePage: f,
      elVideo: p,
      elDetails: m,
      appAriaIDs: h,
    } = e,
    [g] = C(t, F),
    _ = U(),
    y = L()?.ownerWindow || window,
    b = Kt(g, l, d, f),
    { bIsIgnored: x, fnUpdateIgnored: S } = Ae(t),
    { bIsWishlisted: w, fnUpdateWishlist: T } = D(t),
    E = X.useRef(null);
  if (
    (X.useEffect(() => {
      i && E.current && E.current.focus({ preventScroll: !0 });
    }, [i]),
    !g)
  )
    return (console.warn(`Error: missing store item for appid `, t), null);
  let O = { width: r || void 0, height: n || void 0 };
  return (0, Z.jsxs)(V, {
    "aria-labelledby": v(
      h.nameId,
      h.tagsId,
      h.reviewId,
      h.relevanceId,
      h.buttonsId,
    ),
    ref: E,
    style: O,
    className: B(qe, i && `vyD3DBFIFUc-`),
    onOptionsActionDescription: G(
      w
        ? `#DiscoveryQueue_RemoveFromWishlist`
        : `#DiscoveryQueue_AddToWishlist`,
    ),
    onOptionsButton: T,
    onOKActionDescription: G(`#DiscoveryQueue_ViewStorePage`),
    onOKButton: () => {
      y.location.href = b;
    },
    onSecondaryActionDescription: G(
      x ? `#DiscoveryQueue_Undo` : `#DiscoveryQueue_IgnoreLink`,
    ),
    onSecondaryButton: S,
    fnScrollIntoViewHandler: () => (o(), !0),
    children: [
      (0, Z.jsx)(`div`, {
        className: B(te, x && `_3ZYr-Efwvg8-`),
        children: (0, Z.jsxs)(`div`, {
          className: B(ae, x && `_3ZYr-Efwvg8-`),
          children: [
            (0, Z.jsx)(`div`, {
              className: M,
              children: G(`#DiscoveryQueue_Ignored`),
            }),
            (0, Z.jsx)(`div`, {
              className: re,
              children: G(`#DiscoveryQueue_IgnoredConfirmation`),
            }),
            (0, Z.jsxs)(V, {
              className: B(Re, xe),
              onClick: S,
              children: [
                _ &&
                  (0, Z.jsx)(a, { button: s.X, type: c.Light, size: u.Medium }),
                G(`#DiscoveryQueue_Undo`),
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
    return I(s);
  }, [r, t, i, e, n]);
}
function qt(e) {
  let {
      appID: t,
      bShowMinimizedDisplay: n,
      eStoreDiscoveryQueueType: r,
      storePageFilter: l,
      bPreferDemoStorePage: p,
      appAriaIDs: m,
    } = e,
    [h] = C(t, F),
    g = f(t),
    { bIsIgnored: _, fnUpdateIgnored: v } = Ae(t),
    { bIsWishlisted: y, fnUpdateWishlist: b } = D(t),
    x = Kt(h, r, l, p),
    S = U(),
    w = S;
  if (!h) return;
  let T = h.GetAssets().GetLibraryCapsuleURL(),
    E = h.GetAssets().GetHeaderURL();
  return (0, Z.jsxs)(V, {
    className: Pe,
    children: [
      (0, Z.jsxs)(`div`, {
        className: Be,
        children: [
          T &&
            (0, Z.jsxs)(`a`, {
              className: B(`_-6qCNJHr4Z0-`),
              href: x,
              children: [
                (0, Z.jsx)(`img`, { className: `Q3mOh913Yuw-`, src: T }),
                E && (0, Z.jsx)(`img`, { className: `k5tHhP269dw-`, src: E }),
              ],
            }),
          (0, Z.jsxs)(`div`, {
            id: m.nameId,
            className: ye,
            children: [
              (0, Z.jsx)(`a`, {
                className: B(He),
                href: x,
                children: h.GetName(),
              }),
              (0, Z.jsx)(i, { bSingleLineMode: !0, id: g }),
            ],
          }),
          (0, Z.jsx)(Jt, { rgTagIDs: h.GetTagIDs(), ariaLabelID: m.tagsId }),
          (0, Z.jsx)(`div`, {
            className: we,
            id: m.reviewId,
            children: (0, Z.jsx)(o, {
              bShowTooltip: !0,
              bTruncateTotalReviews: n,
              id: g,
            }),
          }),
          (0, Z.jsx)(`div`, {
            id: m.relevanceId,
            className: Ce,
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
                  (0, Z.jsx)(d, {
                    id: g,
                    className: B(
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `enD9-bmgGhA-`,
                    ),
                  }),
                (0, Z.jsxs)(`a`, {
                  className: B(`BxLuFJsRaUQ-`, `VE8INnFzaCw-`),
                  href: x,
                  children: [
                    w &&
                      (0, Z.jsx)(a, {
                        button: s.Y,
                        type: c.Light,
                        size: u.Medium,
                        additionalClassName: `a-wHbIOxF8U-`,
                      }),
                    ` `,
                    G(`#DiscoveryQueue_ViewStorePage`),
                  ],
                }),
                (0, Z.jsx)(it, {
                  toolTipContent: G(
                    y ? `#RemoveFromWishlist_ttip` : `#AddToWishlist_ttip`,
                  ),
                  children: (0, Z.jsxs)(V, {
                    "aria-label": G(
                      y ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
                    ),
                    focusable: !0,
                    className: B(`BxLuFJsRaUQ-`, y && `_3ZYr-Efwvg8-`),
                    onClick: b,
                    children: [
                      w &&
                        (0, Z.jsx)(a, {
                          button: s.Y,
                          type: c.Light,
                          size: u.Medium,
                          additionalClassName: `a-wHbIOxF8U-`,
                        }),
                      y ? (0, Z.jsx)(Qe, {}) : (0, Z.jsx)(pt, {}),
                    ],
                  }),
                }),
                (0, Z.jsx)(it, {
                  toolTipContent: G(`#SaleTrailerCarousel_IgnoreLink_ttip`),
                  children: (0, Z.jsx)(V, {
                    "aria-label": G(`#DiscoveryQueue_IgnoreLink`),
                    focusable: !0,
                    className: B(`BxLuFJsRaUQ-`, _ && `_3ZYr-Efwvg8-`),
                    onClick: v,
                    children: (0, Z.jsx)(at, {}),
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
  return (0, Z.jsx)(`div`, {
    id: n,
    role: `list`,
    className: Ie,
    children: r.map((e) => (0, Z.jsx)(tt, { className: Oe, tagID: e }, e)),
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
var Xt = new R(`DiscoveryQueueWizard`).Debug,
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
      await xt.Get().QueueMultipleAppRequests(i, { ...F, ...ht }));
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
    h = L()?.ownerWindow || window,
    g = st(Qt),
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
    (x(!0), z.Get().HintLoad());
  }, []),
    X.useEffect(() => {
      let e = S[s];
      e != l && (e && e != $ && y.AddImpression(e, g), u(e));
    }, [y, s, l, S, g]));
  let C = (e) => {
    let t = rt(s + (e ? 1 : -1), 0, S.length - 1);
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
      bIsDragging: te,
      nDragOffset: re,
      nDragSelectedOffsetIndex: ae,
      handleTouchStart: k,
      handleTouchMove: A,
      handleTouchEnd: ce,
    } = rn((e) => c(e), S.length),
    j = (e) => {
      e.target == e.currentTarget && (n?.(), e.stopPropagation());
    },
    M = (e) => Ze(s + e, S) && (nt(e, -1, 1) || te),
    pe = K(J.STORE_BASE_URL + `explore?dq=widget`),
    me = !U() && !ft() && t === 0,
    he = K(J.STORE_BASE_URL + `explore/next/0`),
    ve = S[s] !== $,
    { nQueueStart: ye, nCount: xe } = nn(s, S);
  return (0, Z.jsx)(dt, {
    feature: Qt,
    children: (0, Z.jsx)(V, {
      role: `dialog`,
      focusable: !1,
      "flow-children": `column`,
      className: be,
      navEntryPreferPosition: Xe.LAST,
      onCancelButton: () => n?.(),
      onCancelActionDescription: G(`#Button_Close`),
      children: (0, Z.jsxs)(`div`, {
        className: We,
        onClick: j,
        children: [
          T.length > 0 &&
            (0, Z.jsx)(V, {
              "flow-children": `row`,
              className: `Wp-fkK6n2-I-`,
              children: T,
            }),
          (0, Z.jsxs)(V, {
            "flow-children": `row`,
            className: _e,
            children: [
              (0, Z.jsx)(V, {
                className: void 0,
                children: ot(
                  `#DiscoveryQueue_LearnMore_Default`,
                  (0, Z.jsx)(W, { className: fe, href: I(pe) }),
                ),
              }),
              me &&
                (0, Z.jsx)(V, {
                  className: void 0,
                  children: ot(
                    `#DiscoveryQueue_ClassicQueue_Link`,
                    (0, Z.jsx)(W, { className: `naQ5--hS5ms-`, href: I(he) }),
                  ),
                }),
              (0, Z.jsx)(V, {
                className: Ee,
                children: (0, Z.jsx)(V, {
                  focusable: !0,
                  className: Re,
                  onClick: n,
                  "aria-label": G(`#Button_Close`),
                  onActivate: () => n && n(),
                  children: (0, Z.jsx)(Ye, {}),
                }),
              }),
            ],
          }),
          (0, Z.jsx)(V, {
            role: `button`,
            "aria-label": G(`#Carousel_Next`),
            onClick: () => C(!1),
            className: B(ie, de, E && `_4dyYanLcAPg-`),
            children: (0, Z.jsx)(lt, { angle: 180 }),
          }),
          (0, Z.jsx)(V, {
            role: `button`,
            "aria-label": G(`#Carousel_Prev`),
            onClick: () => C(!0),
            className: B(ie, ke, D && `_4dyYanLcAPg-`),
            children: (0, Z.jsx)(lt, { angle: 0 }),
          }),
          (0, Z.jsx)(V, {
            ref: ee,
            className: le,
            focusable: !1,
            onTouchStart: k,
            onTouchMove: A,
            onTouchEnd: ce,
            children: [-2, -1, 0, 1, 2].map((e) =>
              (0, Z.jsx)(
                `div`,
                {
                  className: B({
                    [Ke]: !0,
                    [ue]: te,
                    [Je]: M(e),
                    [O]: e == -2,
                    [ne]: e == -1,
                    [ge]: e == 0,
                    [ze]: e == 1,
                    [se]: e == 2,
                    [Se]: e + ae == 0,
                  }),
                  style: { "--dragOffsetX": `${re}px` },
                  children:
                    M(e) &&
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
          (0, Z.jsx)(oe, {
            className: B(!ve && `x7yACsfXkig-`),
            showPriorAsActive: !0,
            count: xe,
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
    g = U(),
    _ = b(2, J.LANGUAGE, !1),
    [v, y] = X.useState(0),
    [x, S] = X.useState(0),
    { data: C } = ct();
  X.useEffect(() => {
    a &&
      !p &&
      C &&
      z
        .Get()
        .HintLoad()
        .then(() => {
          Y.Get()
            .LoadSkippedApps(t, s)
            .then((e) => {
              (y(e.reduce((e, t) => (C.has(t) ? e + 1 : e), 0)),
                S(
                  e.reduce(
                    (e, t) => (z.Get().BIsGameIgnored(t) ? e + 1 : e),
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
        className: Te,
        children: [
          (0, Z.jsx)(`div`, {
            className: Me,
            children: G(`#DiscoveryQueue_SummaryTitle`),
          }),
          !E &&
            a &&
            _.data?.definition &&
            (0, Z.jsx)(un, { bSkipAppRequestPending: f, summaryCardIdx: r }),
          (0, Z.jsx)(`div`, {
            className: Ge,
            children: G(`#DiscoveryQueue_YourStats`),
          }),
          (0, Z.jsxs)(V, {
            "flow-children": `row`,
            className: Le,
            children: [
              (0, Z.jsxs)(`div`, {
                className: P,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: j,
                    children: G(`#DiscoveryQueue_ViewedCaps`),
                  }),
                  (0, Z.jsx)(`div`, { className: k, children: q(l) }),
                  (0, Z.jsx)(`div`, {
                    className: A,
                    children: G(`#DiscoveryQueue_Titles`),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: P,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: j,
                    children: G(`#DiscoveryQueue_WishlistedCaps`),
                  }),
                  (0, Z.jsx)(`div`, { className: k, children: q(v) }),
                  (0, Z.jsx)(ut, {
                    className: B(A, De),
                    href: I(J.STORE_BASE_URL + `wishlist`),
                    children: G(`#DiscoveryQueue_ViewWishlist`),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: P,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: j,
                    children: G(`#DiscoveryQueue_IgnoredCaps`),
                  }),
                  (0, Z.jsx)(`div`, { className: k, children: q(x) }),
                  (0, Z.jsx)(ut, {
                    className: B(A, De),
                    href: I(J.STORE_BASE_URL + `account/notinterested`),
                    children: G(`#DiscoveryQueue_ViewIgnored`),
                  }),
                ],
              }),
            ],
          }),
          !g &&
            (0, Z.jsxs)(V, {
              className: `V-tCdhirF0E-`,
              children: [
                (0, Z.jsx)(V, {
                  className: B(`BxLuFJsRaUQ-`, `_5spq1pOe-Sg-`),
                  onClick: n,
                  children: G(`#ActionButtonLabelDone`),
                }),
                !E &&
                  (0, Z.jsx)(V, {
                    className: B(
                      w && `RJg7ZyjyMZk-`,
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `_5spq1pOe-Sg-`,
                    ),
                    onClick: O,
                    children: G(w ? `#Loading` : `#Button_Continue`),
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
    s = K(J.STORE_BASE_URL + `wishlist`),
    c = L()?.ownerWindow || window,
    l = () => {
      c.location.href = I(s);
    },
    u = X.useRef(null);
  return (
    X.useEffect(() => {
      n && u.current && u.current.focus({ preventScroll: !0 });
    }, [n]),
    (0, Z.jsx)(et, {
      ref: u,
      "aria-live": `polite`,
      className: B(void 0, qe, n && `vyD3DBFIFUc-`),
      onOptionsActionDescription: G(`#DiscoveryQueue_ViewWishlist`),
      onOptionsButton: l,
      onOKActionDescription: G(`#Button_Continue`),
      onOKButton: () => {
        r();
      },
      onCancelActionDescription: G(`#ActionButtonLabelDone`),
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
  return (0, Z.jsx)(V, {
    className: Ve,
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
    i = U();
  if (!n?.data?.current_def || !r?.GetName().length) return (0, Z.jsx)(ln, {});
  let a = n.data.num_items_earned,
    o = n.data.current_def.num_items_per_def,
    s = o - a,
    c = (a / o) * 100;
  return (0, Z.jsxs)(V, {
    className: Ve,
    children: [
      (0, Z.jsx)(Pt, { nPercent: c, size: 70, strokeWidth: 12 }),
      (0, Z.jsxs)(V, {
        className: Ne,
        children: [
          (0, Z.jsx)(`div`, {
            className: Fe,
            children: G(
              `#DiscoveryQueue_SaleStatus_Title${s ? `` : `_Complete`}`,
              q(a),
              r.GetName(),
            ),
          }),
          s > 0 &&
            (0, Z.jsx)(`div`, {
              className: `u6sC2PhNZss-`,
              children: G(`#DiscoveryQueue_SaleStatus_Desc`, q(s), r.GetName()),
            }),
          !i &&
            (0, Z.jsx)(`a`, {
              href: I(J.COMMUNITY_BASE_URL + `my/itemcollection`),
              children: G(`#DiscoveryQueue_SaleStatus_Link`),
            }),
        ],
      }),
    ],
  });
}
export { en as default };
