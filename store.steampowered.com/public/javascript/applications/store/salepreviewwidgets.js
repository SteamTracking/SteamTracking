/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, ut as r } from "./chunk~01cfc309bf.js";
import {
  As as i,
  Bo as a,
  Cs as o,
  Ds as s,
  Es as c,
  Go as l,
  Hn as u,
  Jo as d,
  Ka as f,
  Ko as p,
  La as m,
  Ms as ee,
  Os as te,
  Qa as h,
  Qn as ne,
  Qo as re,
  Ra as ie,
  Ro as g,
  Ts as ae,
  Vn as oe,
  Ya as se,
  Yn as ce,
  ao as _,
  bo as v,
  bs as le,
  ds as ue,
  gs as de,
  ms as fe,
  pr as y,
  qa as b,
  qo as x,
  ro as pe,
  sr as me,
  t as S,
  tr as he,
  ts as ge,
  ur as _e,
  vr as ve,
  ws as C,
  ys as ye,
} from "./chunk~6b8ddcaac8.js";
import { n as be } from "./chunk~751f63337e.js";
import {
  C as w,
  O as xe,
  S as T,
  _ as Se,
  m as Ce,
  p as we,
  v as Te,
} from "./chunk~4eed35ad1f.js";
import { i as Ee, r as De } from "./chunk~4c13037b22.js";
import { d as Oe, p as ke, r as Ae } from "./chunk~cbbb6ae37c.js";
import { n as je, t as Me } from "./chunk~56437c278a.js";
import {
  Dl as Ne,
  Fv as E,
  Hv as D,
  Ib as O,
  Ic as Pe,
  Or as k,
  Pc as A,
  Vc as j,
  Vv as M,
  Wv as N,
  Xv as P,
  Yv as F,
  Zv as I,
  ab as L,
  bb as R,
  bv as z,
  dn as Fe,
  ex as Ie,
  ib as B,
  ly as Le,
  nd as Re,
  ry as ze,
  vl as Be,
  vx as Ve,
  wb as He,
} from "./main.js";
var V = e(t(), 1),
  H = `x33TRfA9NLE-`,
  Ue = `UWpi28gEMso-`,
  U = n(),
  We = 6;
function Ge(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = N(t),
    i = r?.item_type == 2,
    { data: a } = w(),
    o = V.useMemo(() => {
      if (r)
        return r.item_type === 1 || r.item_type === 2
          ? (r.included_appids || [])
              .filter((e) => !i || !n || !a?.has(e))
              .map((e) => ({ appid: e }))
          : (console.error(
              `ContentsPreviewList unexpected store item type:`,
              r.item_type,
            ),
            null);
    }, [r, n, i, a]);
  if (!o || o.length == 0) return null;
  let s = o.length,
    c = O.LocalizePlural(`#Sale_ContentPreview`, s);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != s && (c = O.Localize(`#Sale_Bundle_CompletePartialSet`, e - s, e));
  }
  return (0, U.jsxs)(`div`, {
    className: _,
    children: [
      (0, U.jsxs)(`div`, {
        className: v,
        children: [
          i &&
            (0, U.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: O.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, U.jsx)(`div`, {
        className: l,
        children: o
          .slice(0, We)
          .map((e) => (0, U.jsx)(W, { id: e }, `preview${Le(e)}`)),
      }),
    ],
  });
}
function W(e) {
  let { id: t } = e,
    { data: n } = P(t),
    { data: r } = F(t);
  if (!n || !r) return null;
  let i = Pe(n, `small_capsule`);
  return (0, U.jsx)(y, {
    id: t,
    className: x,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, U.jsx)(`img`, {
      src: i,
      className: p,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
var G = `WYXlhoxwBlU-`,
  K = `Ypf4QLCxqQU-`,
  q = `rDvoly1XGQk-`,
  Ke = `n2t7u-oXiwM-`,
  qe = `a1UUU8zD1Lg-`,
  Je = `jP-Qr-tpETg-`,
  J = `triBTPpfZNQ-`,
  Y = `Ep0wQ-6tJLw-`,
  Ye = `-Rp0JgQXMoA-`,
  Xe = `QWDBAVIUpho-`,
  Ze = `JAphvRffM9M-`,
  Qe = `FQQL32BdomI-`,
  $e = `xNRz-0kPOeE-`,
  X = `-F6L5ywkZiU-`,
  et = `_4eS9H8fFOdo-`,
  Z = `_7fjzkXY-Nhs-`,
  tt = `qNcrltVSVzI-`,
  nt = `A-4nfbw4-fY-`,
  rt = `oe2Jr-slLMU-`,
  it = `DGZ5Ptl37g4-`,
  at = `zstB61TOiBA-`,
  ot = `-ZEsfMgRePw-`,
  Q = `P-N-CSZ-VX8-`,
  st = `aZng9sDwNZg-`,
  ct = `x80z1JoR9dc-`,
  lt = `X-2r-tUH1gQ-`,
  ut = `-A11cjkYCU8-`,
  dt = `_10gRNaJtPOU-`,
  ft = `UskT6FngUB8-`,
  pt = `L03Y6ydPSDM-`,
  mt = `rX8DGzBU5pU-`,
  ht = `_8mKyAzWvx8I-`,
  gt = `RfxR9kxm2-o-`,
  _t = `_3EpVljmp8Bg-`,
  vt = `h1-hm2PiNH0-`,
  yt = `ruaMViMLvdA-`;
function bt(e) {
  let {
    capsules_per_row: t,
    is_generic: n,
    is_generic_trailer: r,
    is_event_dash_row: i,
    is_trailer_carousel: a,
    is_spotlights: o,
    is_item_browser: s,
    is_maincap: c,
    is_expanded_maincap: l,
    is_expanded_display: u,
    show_auto_advance_bar: d,
    swipe_row: f,
  } = e;
  if (typeof f == `string`)
    return (0, U.jsx)($, {
      children: (0, U.jsx)(`div`, {
        className: A(q, Ke),
        children: [0, 1, 2, 3, 4].map((e) =>
          (0, U.jsx)(
            `div`,
            {
              className: A(qe, f === `tall_capsule` && `RDPLi3Xo-Mk-`),
              children: (0, U.jsx)(`div`, { className: K }),
            },
            e,
          ),
        ),
      }),
    });
  if (f)
    return (0, U.jsx)($, {
      children: (0, U.jsx)(`div`, {
        className: q,
        children: [0, 1].map((e) =>
          (0, U.jsx)(
            `div`,
            { className: K, style: { width: f.width, height: f.height } },
            e,
          ),
        ),
      }),
    });
  if (!t) return null;
  if (n)
    return (0, U.jsx)($, {
      children: (0, U.jsx)(`div`, {
        className: Je,
        children: (0, U.jsx)(`div`, { className: J }),
      }),
    });
  if (r)
    return (0, U.jsx)($, {
      children: (0, U.jsx)(`div`, {
        className: Y,
        children: (0, U.jsx)(`div`, { className: J }),
      }),
    });
  if (a)
    return (0, U.jsxs)($, {
      children: [
        (0, U.jsxs)(`div`, {
          className: ut,
          children: [
            (0, U.jsx)(`div`, {
              className: dt,
              children: (0, U.jsx)(`div`, { className: J }),
            }),
            (0, U.jsx)(`div`, {
              className: ft,
              children: (0, U.jsx)(`div`, { className: J }),
            }),
          ],
        }),
        d &&
          (0, U.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, U.jsx)(`div`, { className: `triBTPpfZNQ-` }),
          }),
      ],
    });
  if (i)
    return (0, U.jsx)($, {
      children: (0, U.jsxs)(`div`, {
        className: at,
        children: [
          (0, U.jsx)(`div`, { className: A(ot, K) }),
          (0, U.jsxs)(`div`, {
            className: A(Q),
            children: [
              (0, U.jsx)(`div`, { className: A(st, K) }),
              (0, U.jsx)(`div`, { className: A(ct, K) }),
              (0, U.jsx)(`div`, { className: A(lt, K) }),
            ],
          }),
        ],
      }),
    });
  if (o)
    return (0, U.jsx)($, {
      children: (0, U.jsxs)(`div`, {
        className: rt,
        children: [
          (0, U.jsx)(`div`, { className: K }),
          (0, U.jsx)(`div`, { className: K }),
          (0, U.jsxs)(`div`, {
            className: it,
            children: [
              (0, U.jsx)(`div`, { className: K }),
              (0, U.jsx)(`div`, { className: K }),
            ],
          }),
        ],
      }),
    });
  if (c)
    return (0, U.jsx)($, {
      children: (0, U.jsxs)(`div`, {
        className: A({ [gt]: !0, [void 0]: l }),
        children: [
          (0, U.jsx)(`div`, { className: K }),
          (0, U.jsxs)(`div`, {
            className: A(Q),
            children: [
              (0, U.jsx)(`div`, { className: A(st, K) }),
              (0, U.jsx)(`div`, { className: A(ct, K) }),
              (0, U.jsx)(`div`, { className: A(_t, K) }),
              (0, U.jsx)(`div`, { className: A(vt, K) }),
              (0, U.jsx)(`div`, { className: A(yt, K) }),
            ],
          }),
        ],
      }),
    });
  if (u)
    return (0, U.jsx)($, {
      children: (0, U.jsxs)(`div`, {
        className: pt,
        children: [
          (0, U.jsx)(`div`, { className: A(mt, K) }),
          (0, U.jsx)(`div`, { className: A(ht, K) }),
        ],
      }),
    });
  if (s) {
    let e = [];
    for (let n = 0; n < t[0]; n++)
      e.push(
        (0, U.jsx)(
          j,
          {
            className: Qe,
            focusable: !0,
            children: (0, U.jsx)(`div`, { className: K }),
          },
          `item_browse_ghost_` + n,
        ),
      );
    return (0, U.jsx)($, { children: e });
  }
  return t?.length == 1
    ? t[0] == 1
      ? (0, U.jsx)($, {
          children: (0, U.jsx)(`div`, {
            className: Ze,
            children: (0, U.jsx)(`div`, { className: K }),
          }),
        })
      : t[0] == 4
        ? (0, U.jsx)($, {
            children: (0, U.jsxs)(`div`, {
              className: Xe,
              children: [
                (0, U.jsx)(`div`, { className: K }),
                (0, U.jsx)(`div`, { className: K }),
                (0, U.jsx)(`div`, { className: K }),
                (0, U.jsx)(`div`, { className: K }),
              ],
            }),
          })
        : (0, U.jsx)($, {
            children: (0, U.jsxs)(`div`, {
              className: Ye,
              children: [
                (0, U.jsx)(`div`, { className: K }),
                (0, U.jsx)(`div`, { className: K }),
                (0, U.jsx)(`div`, { className: K }),
              ],
            }),
          })
    : t?.length == 2
      ? t[0] == 3 && t[1] == 3
        ? (0, U.jsx)($, {
            children: (0, U.jsxs)(`div`, {
              className: $e,
              children: [
                (0, U.jsxs)(`div`, {
                  className: A(X, Z),
                  children: [
                    (0, U.jsx)(`div`, { className: K }),
                    (0, U.jsx)(`div`, { className: K }),
                    (0, U.jsx)(`div`, { className: K }),
                  ],
                }),
                (0, U.jsxs)(`div`, {
                  className: A(X, Z),
                  children: [
                    (0, U.jsx)(`div`, { className: K }),
                    (0, U.jsx)(`div`, { className: K }),
                    (0, U.jsx)(`div`, { className: K }),
                  ],
                }),
              ],
            }),
          })
        : (0, U.jsx)($, {
            children: (0, U.jsxs)(`div`, {
              className: $e,
              children: [
                (0, U.jsxs)(`div`, {
                  className: A(X, et),
                  children: [
                    (0, U.jsx)(`div`, { className: K }),
                    (0, U.jsx)(`div`, { className: K }),
                  ],
                }),
                (0, U.jsxs)(`div`, {
                  className: A(X, Z),
                  children: [
                    (0, U.jsx)(`div`, { className: K }),
                    (0, U.jsx)(`div`, { className: K }),
                    (0, U.jsx)(`div`, { className: K }),
                  ],
                }),
              ],
            }),
          })
      : (0, U.jsx)($, {
          children: (0, U.jsxs)(`div`, {
            className: tt,
            children: [
              (0, U.jsxs)(`div`, {
                className: A(X, et),
                children: [
                  (0, U.jsx)(`div`, { className: K }),
                  (0, U.jsx)(`div`, { className: K }),
                ],
              }),
              (0, U.jsxs)(`div`, {
                className: A(X, Z),
                children: [
                  (0, U.jsx)(`div`, { className: K }),
                  (0, U.jsx)(`div`, { className: K }),
                  (0, U.jsx)(`div`, { className: K }),
                ],
              }),
              (0, U.jsxs)(`div`, {
                className: A(X, nt),
                children: [
                  (0, U.jsx)(`div`, { className: K }),
                  (0, U.jsx)(`div`, { className: K }),
                  (0, U.jsx)(`div`, { className: K }),
                  (0, U.jsx)(`div`, { className: K }),
                ],
              }),
            ],
          }),
        });
}
function $(e) {
  return (0, U.jsx)(j, {
    className: A(G, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
function xt(e) {
  let [t, n] = (0, V.useState)(void 0),
    { data: i } = N(e),
    { data: a } = ze(e),
    o = r(),
    s = z();
  return (
    (0, V.useEffect)(() => {
      if (i) {
        if (a && a.length > 0) n(a);
        else if (i.related_items?.parent_appid) {
          let e = { appid: i.related_items?.parent_appid };
          (async () => {
            let t = await o.fetchQuery(E(s, e));
            t && t.length > 0 && n(t);
          })();
        }
      }
    }, [s, o, i, a]),
    t
  );
}
function St(e) {
  let { id: t } = e;
  return t ? (0, U.jsx)(Ct, { id: t }) : null;
}
function Ct(e) {
  let { id: t } = e,
    n = xt(t);
  return n
    ? (0, U.jsx)(`div`, {
        className: s,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, U.jsx)(S, { tagid: e.tagid, className: h }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function wt(e) {
  let {
      id: t,
      bShowDemoButton: n,
      bShowPurchaseOptionsButton: r,
      fnOnPurchaseOptionsClick: i,
      bHidePrice: a,
      bShowDeckCompatibilityDialog: o,
      eHardwareCompatibilityDisplay: s,
      className: c,
      bShowCartButton: l,
    } = e,
    { data: f } = N(t),
    { data: p } = I(t),
    { data: m } = D(t),
    { bIsOwned: ee } = T(t),
    [te, h] = Ce(o, s);
  if (!f) return null;
  let ne =
      (f.type === 1 && !p?.is_coming_soon) ||
      (f.related_items?.demo_appid && f.related_items?.demo_appid.length > 0),
    re = be(f.type),
    ie = n && re && ne,
    g = null;
  if (!ee && m?.is_free_to_keep && m?.free_to_keep_ends) {
    let e = m.free_to_keep_ends,
      t = B(
        `#Sale_default_label_Free_Promo_Description_Short`,
        He(e) + ` @ ` + R(e, { bForce24HourClock: !1 }),
      );
    g = (0, U.jsxs)(`div`, {
      className: d,
      children: [
        t,
        (0, U.jsx)(k, {
          tooltip: B(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, U.jsxs)(`div`, {
    className: A(ge, c),
    children: [
      g,
      (0, U.jsxs)(`div`, {
        className: ue,
        children: [
          !!ie && (0, U.jsx)(oe, { id: t, className: `R0sGSaFdUWo-` }),
          !a &&
            f.type !== 1 &&
            (0, U.jsxs)(U.Fragment, {
              children: [
                !(!r || f.is_free) &&
                  (0, U.jsx)(Tt, { fnOnPurchaseOptionsClick: i }),
                !(!l || f.is_free) &&
                  (0, U.jsx)(u, { id: t, className: `CartBtn` }),
              ],
            }),
          !a && (0, U.jsx)(he, { id: t }),
          te && (0, U.jsx)(ve, { id: t, compatibility: h }),
        ],
      }),
    ],
  });
}
function Tt(e) {
  return (0, U.jsx)(`div`, {
    className: se,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, U.jsx)(`span`, {
      children: B(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Et(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: s,
      bHidePrice: c,
      bUseSubscriptionLayout: l,
      bHidePlatforms: u,
      bHideContainedApps: d,
      bAllowTwoLinesForHeader: p,
      bShowReviewSummary: h,
      bShowDeckCompatibilityDialog: g,
      eHardwareCompatibilityDisplay: oe,
      bAutoFocus: se,
      fnOnClickOverride: _,
      bIsMarketingMessage: v,
      bPreferAssetWithoutOverride: y,
    } = e,
    b = _e(t, n),
    [x, S] = (0, V.useState)(!1),
    ve = Re(),
    { data: C, isPending: be } = F(b),
    { data: T } = D(b),
    { data: E } = I(b),
    { data: O } = w(),
    Pe = xe(b),
    k = (0, V.useRef)(null),
    [M, N] = (0, V.useState)(!1),
    P = Ie(),
    [L, R] = (0, V.useState)(!1);
  ((0, V.useEffect)(() => {
    if (!L) {
      S(!1);
      return;
    }
    let e = window.setTimeout(() => S(!0), 500);
    return () => window.clearTimeout(e);
  }, [L]),
    (0, V.useEffect)(() => {
      k.current && N(k.current.offsetWidth < 370);
    }, [k]));
  let z = (0, V.useMemo)(
      () => (s && C && De(C) ? { appid: Ee(C)[0] } : b),
      [s, b, C],
    ),
    { strStoreURL: B, snr: ze } = ce(C, s),
    He = je(v ? void 0 : b);
  if (!C)
    return be
      ? (0, U.jsx)(bt, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let H = C.included_appids?.length || 0,
    Ue = C.included_appids?.filter((e) => O?.has(e))?.length || 0,
    We = C.item_type == 2 && !!T?.must_purchase_as_set,
    W = !d && H > 1,
    G = C.item_type == 1 && H == 1,
    K = C.item_type == 0 || G,
    q = G && C.appid,
    Ke = C.name || ``,
    qe = f(E, T),
    Je = P || !E?.is_coming_soon || qe,
    [J, Y] = Ce(g, oe);
  return (0, U.jsxs)(j, {
    className: A({ [o]: !0, [void 0]: p, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: Ne.PREFERRED_CHILD,
    autoFocus: se,
    navKey: `preview_widget_` + Le(b),
    ...He,
    children: [
      (0, U.jsx)(we, {
        appid: K && `appid` in b ? b.appid : void 0,
        children: (0, U.jsxs)(Be, {
          onClick: v ? _ : void 0,
          className: A({ [de]: !0, [re]: !0, [a]: v }),
          ...Me(C, ve, P, !!s, void 0, _),
          preferredFocus: W,
          onFocusWithin: P ? R : void 0,
          children: [
            (0, U.jsx)(`div`, {
              className: A(ye),
              children: (0, U.jsx)(Dt, {
                id: z,
                strURL: B,
                children: (0, U.jsxs)(`div`, {
                  className: le,
                  children: [
                    (0, U.jsx)(Ae, { appids: Pe }),
                    (0, U.jsx)(ke, {
                      id: b,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: y,
                    }),
                    (0, U.jsx)(Oe, { id: b }),
                    (0, U.jsx)(Se, {
                      id: b,
                      active: b && x,
                      bIsHoverMode: !0,
                      eGrowOnActivate: P
                        ? void 0
                        : Te.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, U.jsxs)(`div`, {
              className: A({ [ae]: !0, [pe]: W }),
              children: [
                !(!K || _) &&
                  (0, U.jsx)(m, {
                    id: b,
                    classOverride: A(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: ze,
                  }),
                (0, U.jsx)(`div`, {
                  className: i,
                  children: (0, U.jsx)(`a`, {
                    href: _ ? void 0 : B,
                    target: Ve.IN_CLIENT ? void 0 : `_blank`,
                    onClick: _,
                    children: (0, U.jsx)(`div`, {
                      className: A(te, `StoreSaleWidgetTitle`),
                      children: Ke,
                    }),
                  }),
                }),
                !W && (0, U.jsx)(St, { id: b }),
                (0, U.jsxs)(`div`, {
                  className: ee,
                  ref: k,
                  children: [
                    K && (0, U.jsx)(Ot, { id: b }),
                    !W &&
                      !u &&
                      b &&
                      (0, U.jsxs)(U.Fragment, {
                        children: [
                          (0, U.jsx)(me, {
                            id: b,
                            bMinimizePlatforms: M,
                            bHideWindows: M,
                          }),
                          !!(J && C.item_type == 0) &&
                            (0, U.jsx)(Fe, {
                              eHWCompat: Y,
                              className: `tUIs-i3NWoU-`,
                              id: b,
                            }),
                        ],
                      }),
                  ],
                }),
                !W &&
                  h &&
                  b &&
                  (0, U.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, U.jsx)(ie, { id: b }),
                  }),
                W &&
                  b &&
                  (0, U.jsx)(Ge, {
                    id: b,
                    bHideInLibraryApps: !We && C.item_type == 2 && Ue < H,
                  }),
                !!K && (0, U.jsx)(kt, { id: b }),
                _
                  ? (0, U.jsx)(`div`, {
                      className: ge,
                      children: (0, U.jsx)(`div`, {
                        className: ue,
                        children: (0, U.jsx)(he, { id: b }),
                      }),
                    })
                  : (0, U.jsx)(U.Fragment, {
                      children:
                        l && K && q
                          ? (0, U.jsx)(ne, { appid: q, bIsMuted: !!x })
                          : (0, U.jsx)(wt, {
                              id: b,
                              bShowDemoButton: r,
                              bHidePrice: c,
                              bHideWishlistButton: Je,
                              eHardwareCompatibilityDisplay: Y,
                            }),
                    }),
                (0, U.jsx)(`div`, {
                  className: fe,
                  children: (0, U.jsx)(ke, {
                    id: b,
                    bPreferAssetWithoutOverride: y,
                    imageType: `header`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      !!(e.strReason && e.strReason.length > 0) &&
        (0, U.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function Dt(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, U.jsxs)(y, { id: t, children: [r, ` `] })
    : (0, U.jsx)(`a`, { href: n, children: r });
}
function Ot(e) {
  let { id: t } = e,
    { data: n } = I(t);
  return n ? (0, U.jsx)(`div`, { className: C, children: b(n) }) : null;
}
function kt(e) {
  let { id: t } = e,
    { data: n } = F(t),
    { data: r } = D(t),
    { data: i } = M(t),
    { data: a } = w();
  if (!n || !i || !i.short_description || !a) return null;
  let o = r?.discount_pct || 0,
    s = n.included_appids?.length || 0,
    l = n.included_appids?.filter((e) => a?.has(e))?.length || 0,
    u = i.short_description,
    d = n.item_type == 1 && s == 1,
    f = n.item_type == 2 && !!r?.must_purchase_as_set;
  return (
    (n.item_type == 2 || (n.item_type == 1 && !d)) &&
      (u =
        !f && l > 0 && l < s
          ? B(`#Sale_Bundle_CompletePartialSet`, l, s)
          : o > 0
            ? B(`#Sale_BundleSave_WithDiscount`, o, s)
            : B(`#Sale_BundleSave`, s)),
    (0, U.jsx)(`div`, {
      className: A(c, `StoreSaleWidgetShortDesc`),
      children:
        u.startsWith(`#`) && u.indexOf(` `) == -1
          ? (0, U.jsx)(`span`, {
              className: g,
              children: L(
                u,
                (0, U.jsx)(`i`, {}),
                (0, U.jsx)(`i`, {}),
                (0, U.jsx)(`i`, {}),
                (0, U.jsx)(`i`, {}),
              ),
            })
          : u,
    })
  );
}
export { K as a, $ as i, wt as n, Ue as o, bt as r, H as s, Et as t };
