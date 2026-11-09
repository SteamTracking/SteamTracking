/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, st as r } from "./libraries.js";
import { V as i } from "./storelink.js";
import {
  At as a,
  F as o,
  et as s,
  ht as c,
  kt as l,
  mt as u,
  pt as d,
  q as f,
  wt as p,
} from "./saletags.js";
import { t as m } from "./usehotkeys.js";
import { i as h } from "./ostype.js";
import { t as g } from "./ajaxhooks.js";
import { t as _ } from "./throbber.js";
import { n as v } from "./trailertitlebar.js";
import { u as y } from "./creatorhomestore.js";
import "./steammessages_salerewards_pb.js";
import { n as b, r as x } from "./saleclaim.js";
import { n as S, t as C } from "./playerstore.js";
import { n as w } from "./storeitemhooks.js";
import { r as T } from "./friendsstore.js";
import {
  $ as E,
  A as D,
  D as ee,
  Dt as O,
  Et as k,
  F as te,
  H as ne,
  I as re,
  J as ie,
  L as ae,
  M as A,
  N as j,
  O as oe,
  Ot as M,
  P as N,
  R as se,
  S as ce,
  T as le,
  Tt as ue,
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
  et as P,
  f as we,
  ft as Te,
  g as Ee,
  gt as De,
  ht as Oe,
  it as ke,
  j as F,
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
  t as I,
  u as He,
  ut as Ue,
  w as We,
  wt as Ge,
  x as Ke,
  y as qe,
  z as Je,
} from "./trailerdefines.js";
import {
  Dx as Ye,
  Ex as Xe,
  Gy as Ze,
  Hl as Qe,
  Iy as $e,
  Jy as et,
  Ku as tt,
  Lo as nt,
  Lu as rt,
  Oa as it,
  Ox as at,
  Rr as ot,
  Sc as L,
  U as st,
  Uu as R,
  Uy as z,
  Vc as B,
  Vl as V,
  Vu as ct,
  Wu as lt,
  Wy as ut,
  Xi as H,
  Xs as dt,
  _c as ft,
  ex as pt,
  gc as mt,
  gn as ht,
  ht as gt,
  iy as _t,
  kc as U,
  m as vt,
  nl as W,
  pl as yt,
  rx as G,
  to as bt,
  vc as xt,
  vl as K,
  yu as q,
  zb as J,
  zu as St,
} from "./main.js";
import { i as Ct, n as Y, o as wt, t as Tt } from "./discoveryqueuestore.js";
import { t as Et } from "./clanstore.js";
import { i as Dt } from "./steamavatar.js";
import { n as Ot } from "./personanameandstatus.js";
import { i as kt, n as At, t as jt } from "./apprelevancestore.js";
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
      className: L({ [Mt]: !0, [Nt]: o }),
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
  Ft = new K(`AppRelevance`).Debug;
function It(e, t) {
  let n = (0, X.useMemo)(
    () => q.Get().GetRecommendingCuratorsForApp(e) || [],
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
      bShowCuratorInfo: o,
      bShowCreatorInfo: s,
    } = e,
    c = T(t),
    l = jt(t),
    u = kt(t),
    d = At(),
    f = r({
      queryKey: [`SimilarPlayedAppsLoad`, t],
      queryFn: () =>
        V.Get().QueueMultipleAppRequests(
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
          (e = e.filter((e) => q.Get().BIsFollowingCurator(e.nAccountID)))),
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
    g = r({
      queryKey: [`PlayerSummaries`, t, n],
      queryFn: async () => {
        let e = [],
          t = [],
          r = [],
          i = n ? 10 : 1;
        for (
          let t = 0;
          t < l.data.accountids_recommended?.length && t < i;
          t++
        ) {
          let n = $e.InitFromAccountID(
            l.data.accountids_recommended[t],
            G.EUNIVERSE,
          );
          e.push(n.ConvertTo64BitString());
        }
        for (let e = 0; e < c.data.in_wishlist?.length && e < i; e++) {
          let n = new $e(c.data.in_wishlist[e].steamid);
          t.push(n.ConvertTo64BitString());
        }
        for (let e = 0; e < c.data.owns?.length && e < i; e++) {
          let t = new $e(c.data.owns[e].steamid);
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
    return (0, Z.jsx)(_, { size: `medium`, position: `center` });
  let v = [];
  u.isSuccess &&
    u.data.arrSimilarPlayedApps &&
    u.data.arrSimilarPlayedApps.slice(0, 2).forEach((e) => {
      let n = V.Get().GetApp(e.appid);
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
    w = l.data?.accountids_recommended?.length,
    E = 0;
  return (
    S > 0 && E++,
    C > 0 && E++,
    w > 0 && E++,
    b && E++,
    y >= 0 && E++,
    v.length > 0 && E++,
    o && p?.data?.length > 0 && E++,
    s && h.data && E++,
    Ft(`FriendsOwned: `, S, ` FriendsWishlisted: `, C, `cRecommended: `, w),
    (0, Z.jsxs)(Z.Fragment, {
      children: [
        E > 0 &&
          (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(`div`, {
                className: `Hw5Md-rtn-k-`,
                children: z(`#DiscoveryQueue_WhyRelevant`),
              }),
              (0, Z.jsxs)(`div`, {
                role: `list`,
                className: `M9g7Z8vAw60-`,
                children: [
                  x &&
                    (0, Z.jsx)(Q, {
                      header: z(`#DiscoveryQueue_SimilarGames`),
                      children: (0, Z.jsx)(`div`, {
                        className: `d7rsPMqqO4s-`,
                        children: v,
                      }),
                    }),
                  o &&
                    p?.data?.length > 0 &&
                    (0, Z.jsx)(Q, {
                      header: z(`#ContentHub_Recommendation_Curators`),
                      children: (0, Z.jsx)(`div`, {
                        className: L(`d7rsPMqqO4s-`, `GQ2d2HGUoPA-`),
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
                      header: Ze(
                        `#DiscoveryQueue_TopSellers`,
                        H(y + 1),
                        (0, Z.jsx)(`span`, { className: `wdv04oGNxck-` }),
                      ),
                    }),
                  b &&
                    !x &&
                    (0, Z.jsx)(Q, {
                      header: z(`#DiscoveryQueue_RecommendedByIR`),
                    }),
                  (0, Z.jsx)(Vt, {
                    bShowAvatars: n,
                    count: l.data?.accountids_recommended?.length,
                    locToken: `#DiscoveryQueue_FriendsRecommended`,
                    arrSteamIDs: g.data?.rgRecommendedFriends,
                  }),
                  (0, Z.jsx)(Vt, {
                    bShowAvatars: n,
                    count: c.data?.owns?.length,
                    locToken: `#DiscoveryQueue_FriendsOwned`,
                    arrSteamIDs: g.data?.rgOwnedFriends,
                  }),
                  (0, Z.jsx)(Vt, {
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
          ? (0, Z.jsx)(`div`, {
              className: L(ve, E && void 0),
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
        header: et(
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
    { creatorHome: n } = y(t?.clanAccountID);
  return !t || !n
    ? null
    : (0, Z.jsx)(W, {
        href: n.GetCreatorHomeURL(null),
        children: (0, Z.jsx)(`img`, { src: t.avatar_medium_url }),
      });
}
function Bt(e) {
  let { lifetimePlaytime: t, storeItem: n } = e,
    r = Qe(n);
  return (0, Z.jsx)(`div`, {
    className: je,
    children: (0, Z.jsx)(s, {
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
          header: et(r + `_Single`, (0, Z.jsx)(Ht, { steamid: t[0] })),
        })
      : (0, Z.jsx)(Q, {
          header: Ze(r, n, (0, Z.jsx)(`span`, { className: P })),
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
    { data: n } = S(t);
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
    n = C(t);
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
    { data: n } = S(t);
  return n
    ? (0, Z.jsxs)(U, {
        className: D,
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
    className: E,
    children: [
      (0, Z.jsx)(`div`, { className: me, children: (0, Z.jsx)(bt, {}) }),
      (0, Z.jsxs)(`div`, {
        className: he,
        children: [(0, Z.jsx)(`div`, { className: void 0, children: n }), t],
      }),
    ],
  });
}
new K(`DiscoveryQueueApp`).Debug;
function Gt(e) {
  let {
      appID: t,
      nItemHeight: n,
      nItemWidth: r,
      selected: i,
      fnFocused: a,
      eStoreDiscoveryQueueType: o,
      storePageFilter: s,
      bPreferDemoStorePage: l,
      elVideo: f,
      elDetails: m,
      appAriaIDs: h,
    } = e,
    [g] = w(t, I),
    _ = J(),
    y = it()?.ownerWindow || window,
    b = Kt(g, o, s, l),
    { bIsIgnored: x, fnUpdateIgnored: S } = O(t),
    { bIsWishlisted: C, fnUpdateWishlist: T } = M(t),
    E = X.useRef(void 0);
  if (
    (X.useEffect(() => {
      i && E.current && E.current.focus({ preventScroll: !0 });
    }, [i]),
    !g)
  )
    return (console.warn(`Error: missing store item for appid `, t), null);
  let D = { width: r || void 0, height: n || void 0 };
  return (0, Z.jsxs)(U, {
    "aria-labelledby": v(
      h.nameId,
      h.tagsId,
      h.reviewId,
      h.relevanceId,
      h.buttonsId,
    ),
    ref: E,
    style: D,
    className: L(qe, i && `vyD3DBFIFUc-`),
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
      (0, Z.jsx)(`div`, {
        className: L(te, x && `_3ZYr-Efwvg8-`),
        children: (0, Z.jsxs)(`div`, {
          className: L(ae, x && `_3ZYr-Efwvg8-`),
          children: [
            (0, Z.jsx)(`div`, {
              className: se,
              children: z(`#DiscoveryQueue_Ignored`),
            }),
            (0, Z.jsx)(`div`, {
              className: re,
              children: z(`#DiscoveryQueue_IgnoredConfirmation`),
            }),
            (0, Z.jsxs)(U, {
              className: L(Re, xe),
              onClick: S,
              children: [
                _ &&
                  (0, Z.jsx)(d, { button: p.X, type: c.Light, size: u.Medium }),
                z(`#DiscoveryQueue_Undo`),
              ],
            }),
          ],
        }),
      }),
      f,
      m,
    ],
  });
}
function Kt(e, t, n, r) {
  let i = ct();
  return X.useMemo(() => {
    if (!e) return;
    let a = Tt(n),
      o = t >= 0 ? `?inqueue=` + t + (n ? `_` + a : ``) : ``,
      s = rt(i, e.GetStorePageURL(r) + o);
    return B(s);
  }, [r, t, i, e, n]);
}
function qt(e) {
  let {
      appID: t,
      bShowMinimizedDisplay: n,
      eStoreDiscoveryQueueType: r,
      storePageFilter: s,
      bPreferDemoStorePage: l,
      appAriaIDs: m,
    } = e,
    [h] = w(t, I),
    g = i(t),
    { bIsIgnored: _, fnUpdateIgnored: v } = O(t),
    { bIsWishlisted: y, fnUpdateWishlist: b } = M(t),
    x = Kt(h, r, s, l),
    S = J(),
    C = S;
  if (!h) return;
  let T = h.GetAssets().GetLibraryCapsuleURL(),
    E = h.GetAssets().GetHeaderURL();
  return (0, Z.jsxs)(U, {
    className: Pe,
    children: [
      (0, Z.jsxs)(`div`, {
        className: Be,
        children: [
          T &&
            (0, Z.jsxs)(`a`, {
              className: L(`_-6qCNJHr4Z0-`),
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
                className: L(He),
                href: x,
                children: h.GetName(),
              }),
              (0, Z.jsx)(f, { bSingleLineMode: !0, id: g }),
            ],
          }),
          (0, Z.jsx)(Jt, { rgTagIDs: h.GetTagIDs(), ariaLabelID: m.tagsId }),
          (0, Z.jsx)(`div`, {
            className: we,
            id: m.reviewId,
            children: (0, Z.jsx)(a, {
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
                  (0, Z.jsx)(o, {
                    id: g,
                    className: L(
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `enD9-bmgGhA-`,
                    ),
                  }),
                (0, Z.jsxs)(`a`, {
                  className: L(`BxLuFJsRaUQ-`, `VE8INnFzaCw-`),
                  href: x,
                  children: [
                    C &&
                      (0, Z.jsx)(d, {
                        button: p.Y,
                        type: c.Light,
                        size: u.Medium,
                        additionalClassName: `a-wHbIOxF8U-`,
                      }),
                    ` `,
                    z(`#DiscoveryQueue_ViewStorePage`),
                  ],
                }),
                (0, Z.jsx)(ot, {
                  toolTipContent: z(
                    y ? `#RemoveFromWishlist_ttip` : `#AddToWishlist_ttip`,
                  ),
                  children: (0, Z.jsxs)(U, {
                    "aria-label": z(
                      y ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
                    ),
                    focusable: !0,
                    className: L(`BxLuFJsRaUQ-`, y && `_3ZYr-Efwvg8-`),
                    onClick: b,
                    children: [
                      C &&
                        (0, Z.jsx)(d, {
                          button: p.Y,
                          type: c.Light,
                          size: u.Medium,
                          additionalClassName: `a-wHbIOxF8U-`,
                        }),
                      y ? (0, Z.jsx)(mt, {}) : (0, Z.jsx)(ft, {}),
                    ],
                  }),
                }),
                (0, Z.jsx)(ot, {
                  toolTipContent: z(`#SaleTrailerCarousel_IgnoreLink_ttip`),
                  children: (0, Z.jsx)(U, {
                    "aria-label": z(`#DiscoveryQueue_IgnoreLink`),
                    focusable: !0,
                    className: L(`BxLuFJsRaUQ-`, _ && `_3ZYr-Efwvg8-`),
                    onClick: v,
                    children: (0, Z.jsx)(nt, {}),
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
    r = [...k(t)].slice(0, 8);
  return (0, Z.jsx)(`div`, {
    id: n,
    role: `list`,
    className: Ie,
    children: r.map((e) => (0, Z.jsx)(st, { className: Oe, tagID: e }, e)),
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
var Xt = new K(`DiscoveryQueueWizard`).Debug,
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
      await V.Get().QueueMultipleAppRequests(i, { ...I, ...vt }));
  } catch (e) {
    console.error(`Failed getting discovery queue apps`, e);
  }
  return { appids: i, exhausted: a };
}
function en(e) {
  let [t, n] = X.useState(!1),
    r = _t();
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
    p = it()?.ownerWindow || window,
    g = lt(Qt),
    [_, v] = X.useState(0),
    y = tt();
  (m(`ArrowLeft`, () => C(!1), !0, !0),
    m(`Left`, () => C(!1), !0, !0),
    m(`ArrowRight`, () => C(!0), !0, !0),
    m(`Right`, () => C(!0), !0, !0),
    m(`Escape`, () => n?.(), !0, !0),
    m(`Esc`, () => n?.(), !0, !0));
  let b = X.useMemo(() => p.innerWidth < Zt, [p]),
    { fnGetDiscoveryQueue: x, rgAppIDs: S } = on(t, i, r);
  (X.useEffect(() => {
    (x(!0), q.Get().HintLoad());
  }, []),
    X.useEffect(() => {
      let e = S[s];
      e != l && (e && e != $ && y.AddImpression(e, g), u(e));
    }, [y, s, l, S, g]));
  let C = (e) => {
    let t = Xe(s + (e ? 1 : -1), 0, S.length - 1);
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
    E = !h() && s > 0,
    D = !h() && s < S.length - 1,
    {
      refContainer: O,
      bIsDragging: k,
      nDragOffset: te,
      nDragSelectedOffsetIndex: re,
      handleTouchStart: ae,
      handleTouchMove: A,
      handleTouchEnd: j,
    } = rn((e) => c(e), S.length),
    M = (e) => {
      e.target == e.currentTarget && (n?.(), e.stopPropagation());
    },
    N = (e) => Ye(s + e, S) && (at(e, -1, 1) || k),
    se = R(G.STORE_BASE_URL + `explore?dq=widget`),
    ue = !J() && !pt() && t === 0,
    pe = R(G.STORE_BASE_URL + `explore/next/0`),
    me = S[s] !== $,
    { nQueueStart: he, nCount: ve } = nn(s, S);
  return (0, Z.jsx)(gt, {
    feature: Qt,
    children: (0, Z.jsx)(U, {
      role: `dialog`,
      focusable: !1,
      "flow-children": `column`,
      className: be,
      navEntryPreferPosition: yt.LAST,
      onCancelButton: () => n?.(),
      onCancelActionDescription: z(`#Button_Close`),
      children: (0, Z.jsxs)(`div`, {
        className: We,
        onClick: M,
        children: [
          T.length > 0 &&
            (0, Z.jsx)(U, {
              "flow-children": `row`,
              className: `Wp-fkK6n2-I-`,
              children: T,
            }),
          (0, Z.jsxs)(U, {
            "flow-children": `row`,
            className: _e,
            children: [
              (0, Z.jsx)(U, {
                className: void 0,
                children: ut(
                  `#DiscoveryQueue_LearnMore_Default`,
                  (0, Z.jsx)(W, { className: fe, href: B(se) }),
                ),
              }),
              ue &&
                (0, Z.jsx)(U, {
                  className: void 0,
                  children: ut(
                    `#DiscoveryQueue_ClassicQueue_Link`,
                    (0, Z.jsx)(W, { className: `naQ5--hS5ms-`, href: B(pe) }),
                  ),
                }),
              (0, Z.jsx)(U, {
                className: Ee,
                children: (0, Z.jsx)(U, {
                  focusable: !0,
                  className: Re,
                  onClick: n,
                  "aria-label": z(`#Button_Close`),
                  onActivate: () => n && n(),
                  children: (0, Z.jsx)(xt, {}),
                }),
              }),
            ],
          }),
          (0, Z.jsx)(U, {
            role: `button`,
            "aria-label": z(`#Carousel_Next`),
            onClick: () => C(!1),
            className: L(ie, de, E && `_4dyYanLcAPg-`),
            children: (0, Z.jsx)(dt, { angle: 180 }),
          }),
          (0, Z.jsx)(U, {
            role: `button`,
            "aria-label": z(`#Carousel_Prev`),
            onClick: () => C(!0),
            className: L(ie, ke, D && `_4dyYanLcAPg-`),
            children: (0, Z.jsx)(dt, { angle: 0 }),
          }),
          (0, Z.jsx)(U, {
            ref: O,
            className: ce,
            focusable: !1,
            onTouchStart: ae,
            onTouchMove: A,
            onTouchEnd: j,
            children: [-2, -1, 0, 1, 2].map((e) =>
              (0, Z.jsx)(
                `div`,
                {
                  className: L({
                    [Ke]: !0,
                    [le]: k,
                    [Je]: N(e),
                    [ee]: e == -2,
                    [ne]: e == -1,
                    [ge]: e == 0,
                    [ze]: e == 1,
                    [oe]: e == 2,
                    [Se]: e + re == 0,
                  }),
                  style: { "--dragOffsetX": `${te}px` },
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
          (0, Z.jsx)(Ae, {
            className: L(!me && `x7yACsfXkig-`),
            showPriorAsActive: !0,
            count: ve,
            selectedIndex: s - he,
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
    elVideo: (0, Z.jsx)(ue, {
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
      viewedAppCount: u,
      fnFocused: d,
      fnAdvance: f,
      bSkipAppRequestPending: p,
    } = e,
    [m, h] = X.useState(!1),
    _ = J(),
    v = x(2, G.LANGUAGE, !1),
    [y, b] = X.useState(0),
    [S, C] = X.useState(0),
    { data: w } = l();
  X.useEffect(() => {
    a &&
      !m &&
      w &&
      q
        .Get()
        .HintLoad()
        .then(() => {
          Y.Get()
            .LoadSkippedApps(t, s)
            .then((e) => {
              (b(e.reduce((e, t) => (w.has(t) ? e + 1 : e), 0)),
                C(
                  e.reduce(
                    (e, t) => (q.Get().BIsGameIgnored(t) ? e + 1 : e),
                    0,
                  ),
                ),
                h(!0));
            });
        });
  }, [m, t, a, s, w]);
  let [T, E] = X.useState(!1),
    D = wt(t, s),
    ee = g(`DiscoveryQueueSummary`),
    O = async () => {
      i ? T || (E(!0), await o(), ee?.token?.reason || E(!1)) : f();
    };
  return (0, Z.jsxs)(cn, {
    selected: a,
    fnFocused: d,
    fnOnContinue: O,
    fnCloseModal: n,
    bLoaded: m,
    children: [
      (0, Z.jsxs)(`div`, {
        className: Te,
        children: [
          (0, Z.jsx)(`div`, {
            className: Me,
            children: z(`#DiscoveryQueue_SummaryTitle`),
          }),
          !D &&
            a &&
            v.data?.definition &&
            (0, Z.jsx)(un, { bSkipAppRequestPending: p, summaryCardIdx: r }),
          (0, Z.jsx)(`div`, {
            className: Ge,
            children: z(`#DiscoveryQueue_YourStats`),
          }),
          (0, Z.jsxs)(U, {
            "flow-children": `row`,
            className: Le,
            children: [
              (0, Z.jsxs)(`div`, {
                className: F,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: N,
                    children: z(`#DiscoveryQueue_ViewedCaps`),
                  }),
                  (0, Z.jsx)(`div`, { className: A, children: H(u) }),
                  (0, Z.jsx)(`div`, {
                    className: j,
                    children: z(`#DiscoveryQueue_Titles`),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: F,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: N,
                    children: z(`#DiscoveryQueue_WishlistedCaps`),
                  }),
                  (0, Z.jsx)(`div`, { className: A, children: H(y) }),
                  (0, Z.jsx)(St, {
                    className: L(j, De),
                    href: B(G.STORE_BASE_URL + `wishlist`),
                    children: z(`#DiscoveryQueue_ViewWishlist`),
                  }),
                ],
              }),
              (0, Z.jsxs)(`div`, {
                className: F,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: N,
                    children: z(`#DiscoveryQueue_IgnoredCaps`),
                  }),
                  (0, Z.jsx)(`div`, { className: A, children: H(S) }),
                  (0, Z.jsx)(St, {
                    className: L(j, De),
                    href: B(G.STORE_BASE_URL + `account/notinterested`),
                    children: z(`#DiscoveryQueue_ViewIgnored`),
                  }),
                ],
              }),
            ],
          }),
          !_ &&
            (0, Z.jsxs)(U, {
              className: `V-tCdhirF0E-`,
              children: [
                (0, Z.jsx)(U, {
                  className: L(`BxLuFJsRaUQ-`, `_5spq1pOe-Sg-`),
                  onClick: n,
                  children: z(`#ActionButtonLabelDone`),
                }),
                !D &&
                  (0, Z.jsx)(U, {
                    className: L(
                      T && `RJg7ZyjyMZk-`,
                      `BxLuFJsRaUQ-`,
                      `VE8INnFzaCw-`,
                      `_5spq1pOe-Sg-`,
                    ),
                    onClick: O,
                    children: z(T ? `#Loading` : `#Button_Continue`),
                  }),
              ],
            }),
        ],
      }),
      !D && (0, Z.jsx)(Z.Fragment, { children: !!c && c(r + 1) }),
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
    c = it()?.ownerWindow || window,
    l = () => {
      c.location.href = B(s);
    },
    u = X.useRef(void 0);
  return (
    X.useEffect(() => {
      n && u.current && u.current.focus({ preventScroll: !0 });
    }, [n]),
    (0, Z.jsx)(ht, {
      ref: u,
      "aria-live": `polite`,
      className: L(void 0, qe, n && `vyD3DBFIFUc-`),
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
        : (0, Z.jsx)(_, {
            className: void 0,
            msDelayAppear: 200,
            size: `large`,
            position: `center`,
          }),
    })
  );
}
function ln() {
  return (0, Z.jsx)(U, {
    className: Ve,
    children: (0, Z.jsx)(_, { size: `large`, position: `center` }),
  });
}
function un(e) {
  let { bSkipAppRequestPending: t, summaryCardIdx: n } = e;
  return t ? (0, Z.jsx)(ln, {}) : (0, Z.jsx)(dn, { summaryCardIdx: n });
}
function dn(e) {
  let { summaryCardIdx: t } = e,
    n = b(2, G.LANGUAGE, !1, t.toString()),
    [r] = w(n?.data?.current_def?.appid, {}),
    i = J();
  if (!n?.data?.current_def || !r?.GetName().length) return (0, Z.jsx)(ln, {});
  let a = n.data.num_items_earned,
    o = n.data.current_def.num_items_per_def,
    s = o - a,
    c = (a / o) * 100;
  return (0, Z.jsxs)(U, {
    className: Ve,
    children: [
      (0, Z.jsx)(Pt, { nPercent: c, size: 70, strokeWidth: 12 }),
      (0, Z.jsxs)(U, {
        className: Ne,
        children: [
          (0, Z.jsx)(`div`, {
            className: Fe,
            children: z(
              `#DiscoveryQueue_SaleStatus_Title${s ? `` : `_Complete`}`,
              H(a),
              r.GetName(),
            ),
          }),
          s > 0 &&
            (0, Z.jsx)(`div`, {
              className: `u6sC2PhNZss-`,
              children: z(`#DiscoveryQueue_SaleStatus_Desc`, H(s), r.GetName()),
            }),
          !i &&
            (0, Z.jsx)(`a`, {
              href: B(G.COMMUNITY_BASE_URL + `my/itemcollection`),
              children: z(`#DiscoveryQueue_SaleStatus_Link`),
            }),
        ],
      }),
    ],
  });
}
export { en as default };
