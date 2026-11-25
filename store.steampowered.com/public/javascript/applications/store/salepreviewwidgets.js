/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, ut as r } from "./chunk~01cfc309bf.js";
import {
  $n as i,
  $o as a,
  As as o,
  Bn as s,
  Cs as c,
  Es as l,
  Fa as u,
  Ga as d,
  Go as f,
  Ia as p,
  Io as m,
  Ko as ee,
  Os as h,
  Ro as te,
  Ss as g,
  Ts as _,
  Uo as v,
  Wa as ne,
  Wo as y,
  Xa as b,
  Xn as re,
  Xo as ie,
  _s as ae,
  ar as oe,
  cr as se,
  dr as x,
  fs as ce,
  gr as S,
  ls as le,
  ms as ue,
  qa as C,
  qn as de,
  ro as w,
  t as T,
  to as fe,
  vo as E,
  vs as pe,
  ws as me,
  xs as he,
  zn as D,
} from "./chunk~6b8ddcaac8.js";
import { n as ge } from "./chunk~751f63337e.js";
import {
  C as O,
  O as _e,
  S as k,
  _ as ve,
  m as ye,
  p as be,
  v as xe,
} from "./chunk~4eed35ad1f.js";
import { i as Se, r as Ce } from "./chunk~4c13037b22.js";
import { d as we, p as Te, r as Ee } from "./chunk~cbbb6ae37c.js";
import { n as De, t as Oe } from "./chunk~56437c278a.js";
import {
  Dl as ke,
  Fv as Ae,
  Hv as A,
  Ib as j,
  Ic as je,
  Or as M,
  Pc as N,
  Vc as P,
  Vv as F,
  Wv as I,
  Xv as L,
  Yv as R,
  Zv as z,
  ab as B,
  bb as Me,
  bv as Ne,
  dn as Pe,
  ex as Fe,
  ib as V,
  ly as Ie,
  nd as Le,
  ry as Re,
  vl as ze,
  vx as Be,
  wb as Ve,
} from "./main.js";
var H = e(t(), 1),
  U = `x33TRfA9NLE-`,
  He = `UWpi28gEMso-`,
  W = n(),
  Ue = 6;
function We(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = I(t),
    i = r?.item_type == 2,
    { data: a } = O(),
    o = H.useMemo(() => {
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
    c = j.LocalizePlural(`#Sale_ContentPreview`, s);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != s && (c = j.Localize(`#Sale_Bundle_CompletePartialSet`, e - s, e));
  }
  return (0, W.jsxs)(`div`, {
    className: w,
    children: [
      (0, W.jsxs)(`div`, {
        className: E,
        children: [
          i &&
            (0, W.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: j.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, W.jsx)(`div`, {
        className: v,
        children: o
          .slice(0, Ue)
          .map((e) => (0, W.jsx)(G, { id: e }, `preview${Ie(e)}`)),
      }),
    ],
  });
}
function G(e) {
  let { id: t } = e,
    { data: n } = L(t),
    { data: r } = R(t);
  if (!n || !r) return null;
  let i = je(n, `small_capsule`);
  return (0, W.jsx)(x, {
    id: t,
    className: f,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, W.jsx)(`img`, {
      src: i,
      className: y,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
var K = `WYXlhoxwBlU-`,
  q = `Ypf4QLCxqQU-`,
  J = `rDvoly1XGQk-`,
  Ge = `n2t7u-oXiwM-`,
  Ke = `a1UUU8zD1Lg-`,
  qe = `jP-Qr-tpETg-`,
  Y = `triBTPpfZNQ-`,
  X = `Ep0wQ-6tJLw-`,
  Je = `-Rp0JgQXMoA-`,
  Ye = `QWDBAVIUpho-`,
  Xe = `JAphvRffM9M-`,
  Ze = `FQQL32BdomI-`,
  Qe = `xNRz-0kPOeE-`,
  Z = `-F6L5ywkZiU-`,
  $e = `_4eS9H8fFOdo-`,
  Q = `_7fjzkXY-Nhs-`,
  et = `qNcrltVSVzI-`,
  tt = `A-4nfbw4-fY-`,
  nt = `oe2Jr-slLMU-`,
  rt = `DGZ5Ptl37g4-`,
  it = `zstB61TOiBA-`,
  at = `-ZEsfMgRePw-`,
  ot = `P-N-CSZ-VX8-`,
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
    return (0, W.jsx)($, {
      children: (0, W.jsx)(`div`, {
        className: N(J, Ge),
        children: [0, 1, 2, 3, 4].map((e) =>
          (0, W.jsx)(
            `div`,
            {
              className: N(Ke, f === `tall_capsule` && `RDPLi3Xo-Mk-`),
              children: (0, W.jsx)(`div`, { className: q }),
            },
            e,
          ),
        ),
      }),
    });
  if (f)
    return (0, W.jsx)($, {
      children: (0, W.jsx)(`div`, {
        className: J,
        children: [0, 1].map((e) =>
          (0, W.jsx)(
            `div`,
            { className: q, style: { width: f.width, height: f.height } },
            e,
          ),
        ),
      }),
    });
  if (!t) return null;
  if (n)
    return (0, W.jsx)($, {
      children: (0, W.jsx)(`div`, {
        className: qe,
        children: (0, W.jsx)(`div`, { className: Y }),
      }),
    });
  if (r)
    return (0, W.jsx)($, {
      children: (0, W.jsx)(`div`, {
        className: X,
        children: (0, W.jsx)(`div`, { className: Y }),
      }),
    });
  if (a)
    return (0, W.jsxs)($, {
      children: [
        (0, W.jsxs)(`div`, {
          className: ut,
          children: [
            (0, W.jsx)(`div`, {
              className: dt,
              children: (0, W.jsx)(`div`, { className: Y }),
            }),
            (0, W.jsx)(`div`, {
              className: ft,
              children: (0, W.jsx)(`div`, { className: Y }),
            }),
          ],
        }),
        d &&
          (0, W.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, W.jsx)(`div`, { className: `triBTPpfZNQ-` }),
          }),
      ],
    });
  if (i)
    return (0, W.jsx)($, {
      children: (0, W.jsxs)(`div`, {
        className: it,
        children: [
          (0, W.jsx)(`div`, { className: N(at, q) }),
          (0, W.jsxs)(`div`, {
            className: N(ot),
            children: [
              (0, W.jsx)(`div`, { className: N(st, q) }),
              (0, W.jsx)(`div`, { className: N(ct, q) }),
              (0, W.jsx)(`div`, { className: N(lt, q) }),
            ],
          }),
        ],
      }),
    });
  if (o)
    return (0, W.jsx)($, {
      children: (0, W.jsxs)(`div`, {
        className: nt,
        children: [
          (0, W.jsx)(`div`, { className: q }),
          (0, W.jsx)(`div`, { className: q }),
          (0, W.jsxs)(`div`, {
            className: rt,
            children: [
              (0, W.jsx)(`div`, { className: q }),
              (0, W.jsx)(`div`, { className: q }),
            ],
          }),
        ],
      }),
    });
  if (c)
    return (0, W.jsx)($, {
      children: (0, W.jsxs)(`div`, {
        className: N({ [gt]: !0, [void 0]: l }),
        children: [
          (0, W.jsx)(`div`, { className: q }),
          (0, W.jsxs)(`div`, {
            className: N(ot),
            children: [
              (0, W.jsx)(`div`, { className: N(st, q) }),
              (0, W.jsx)(`div`, { className: N(ct, q) }),
              (0, W.jsx)(`div`, { className: N(_t, q) }),
              (0, W.jsx)(`div`, { className: N(vt, q) }),
              (0, W.jsx)(`div`, { className: N(yt, q) }),
            ],
          }),
        ],
      }),
    });
  if (u)
    return (0, W.jsx)($, {
      children: (0, W.jsxs)(`div`, {
        className: pt,
        children: [
          (0, W.jsx)(`div`, { className: N(mt, q) }),
          (0, W.jsx)(`div`, { className: N(ht, q) }),
        ],
      }),
    });
  if (s) {
    let e = [];
    for (let n = 0; n < t[0]; n++)
      e.push(
        (0, W.jsx)(
          P,
          {
            className: Ze,
            focusable: !0,
            children: (0, W.jsx)(`div`, { className: q }),
          },
          `item_browse_ghost_` + n,
        ),
      );
    return (0, W.jsx)($, { children: e });
  }
  return t?.length == 1
    ? t[0] == 1
      ? (0, W.jsx)($, {
          children: (0, W.jsx)(`div`, {
            className: Xe,
            children: (0, W.jsx)(`div`, { className: q }),
          }),
        })
      : t[0] == 4
        ? (0, W.jsx)($, {
            children: (0, W.jsxs)(`div`, {
              className: Ye,
              children: [
                (0, W.jsx)(`div`, { className: q }),
                (0, W.jsx)(`div`, { className: q }),
                (0, W.jsx)(`div`, { className: q }),
                (0, W.jsx)(`div`, { className: q }),
              ],
            }),
          })
        : (0, W.jsx)($, {
            children: (0, W.jsxs)(`div`, {
              className: Je,
              children: [
                (0, W.jsx)(`div`, { className: q }),
                (0, W.jsx)(`div`, { className: q }),
                (0, W.jsx)(`div`, { className: q }),
              ],
            }),
          })
    : t?.length == 2
      ? t[0] == 3 && t[1] == 3
        ? (0, W.jsx)($, {
            children: (0, W.jsxs)(`div`, {
              className: Qe,
              children: [
                (0, W.jsxs)(`div`, {
                  className: N(Z, Q),
                  children: [
                    (0, W.jsx)(`div`, { className: q }),
                    (0, W.jsx)(`div`, { className: q }),
                    (0, W.jsx)(`div`, { className: q }),
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  className: N(Z, Q),
                  children: [
                    (0, W.jsx)(`div`, { className: q }),
                    (0, W.jsx)(`div`, { className: q }),
                    (0, W.jsx)(`div`, { className: q }),
                  ],
                }),
              ],
            }),
          })
        : (0, W.jsx)($, {
            children: (0, W.jsxs)(`div`, {
              className: Qe,
              children: [
                (0, W.jsxs)(`div`, {
                  className: N(Z, $e),
                  children: [
                    (0, W.jsx)(`div`, { className: q }),
                    (0, W.jsx)(`div`, { className: q }),
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  className: N(Z, Q),
                  children: [
                    (0, W.jsx)(`div`, { className: q }),
                    (0, W.jsx)(`div`, { className: q }),
                    (0, W.jsx)(`div`, { className: q }),
                  ],
                }),
              ],
            }),
          })
      : (0, W.jsx)($, {
          children: (0, W.jsxs)(`div`, {
            className: et,
            children: [
              (0, W.jsxs)(`div`, {
                className: N(Z, $e),
                children: [
                  (0, W.jsx)(`div`, { className: q }),
                  (0, W.jsx)(`div`, { className: q }),
                ],
              }),
              (0, W.jsxs)(`div`, {
                className: N(Z, Q),
                children: [
                  (0, W.jsx)(`div`, { className: q }),
                  (0, W.jsx)(`div`, { className: q }),
                  (0, W.jsx)(`div`, { className: q }),
                ],
              }),
              (0, W.jsxs)(`div`, {
                className: N(Z, tt),
                children: [
                  (0, W.jsx)(`div`, { className: q }),
                  (0, W.jsx)(`div`, { className: q }),
                  (0, W.jsx)(`div`, { className: q }),
                  (0, W.jsx)(`div`, { className: q }),
                ],
              }),
            ],
          }),
        });
}
function $(e) {
  return (0, W.jsx)(P, {
    className: N(K, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
function xt(e) {
  let [t, n] = (0, H.useState)(void 0),
    { data: i } = I(e),
    { data: a } = Re(e),
    o = r(),
    s = Ne();
  return (
    (0, H.useEffect)(() => {
      if (i) {
        if (a && a.length > 0) n(a);
        else if (i.related_items?.parent_appid) {
          let e = { appid: i.related_items?.parent_appid };
          (async () => {
            let t = await o.fetchQuery(Ae(s, e));
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
  return t ? (0, W.jsx)(Ct, { id: t }) : null;
}
function Ct(e) {
  let { id: t } = e,
    n = xt(t);
  return n
    ? (0, W.jsx)(`div`, {
        className: _,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, W.jsx)(T, { tagid: e.tagid, className: b }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function wt(e) {
  let {
      id: t,
      bShowDemoButton: n,
      bShowPurchaseOptionsButton: r,
      fnOnPurchaseOptionsClick: o,
      bHidePrice: c,
      bShowDeckCompatibilityDialog: l,
      eHardwareCompatibilityDisplay: u,
      className: d,
      bShowCartButton: f,
    } = e,
    { data: p } = I(t),
    { data: m } = z(t),
    { data: h } = A(t),
    { bIsOwned: te } = k(t),
    [g, _] = ye(l, u);
  if (!p) return null;
  let v =
      (p.type === 1 && !m?.is_coming_soon) ||
      (p.related_items?.demo_appid && p.related_items?.demo_appid.length > 0),
    ne = ge(p.type),
    y = n && ne && v,
    b = null;
  if (!te && h?.is_free_to_keep && h?.free_to_keep_ends) {
    let e = h.free_to_keep_ends,
      t = V(
        `#Sale_default_label_Free_Promo_Description_Short`,
        Ve(e) + ` @ ` + Me(e, { bForce24HourClock: !1 }),
      );
    b = (0, W.jsxs)(`div`, {
      className: ee,
      children: [
        t,
        (0, W.jsx)(M, {
          tooltip: V(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, W.jsxs)(`div`, {
    className: N(a, d),
    children: [
      b,
      (0, W.jsxs)(`div`, {
        className: le,
        children: [
          !!y && (0, W.jsx)(D, { id: t, className: `R0sGSaFdUWo-` }),
          !c &&
            p.type !== 1 &&
            (0, W.jsxs)(W.Fragment, {
              children: [
                !(!r || p.is_free) &&
                  (0, W.jsx)(Tt, { fnOnPurchaseOptionsClick: o }),
                !(!f || p.is_free) &&
                  (0, W.jsx)(s, { id: t, className: `CartBtn` }),
              ],
            }),
          !c && (0, W.jsx)(i, { id: t }),
          g && (0, W.jsx)(S, { id: t, compatibility: _ }),
        ],
      }),
    ],
  });
}
function Tt(e) {
  return (0, W.jsx)(`div`, {
    className: C,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, W.jsx)(`span`, {
      children: V(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Et(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: s,
      bHidePrice: d,
      bUseSubscriptionLayout: f,
      bHidePlatforms: m,
      bHideContainedApps: ee,
      bAllowTwoLinesForHeader: g,
      bShowReviewSummary: _,
      bShowDeckCompatibilityDialog: v,
      eHardwareCompatibilityDisplay: y,
      bAutoFocus: b,
      fnOnClickOverride: x,
      bIsMarketingMessage: S,
      bPreferAssetWithoutOverride: C,
    } = e,
    w = se(t, n),
    [T, E] = (0, H.useState)(!1),
    me = Le(),
    { data: D, isPending: ge } = R(w),
    { data: k } = A(w),
    { data: Ae } = z(w),
    { data: j } = O(),
    je = _e(w),
    M = (0, H.useRef)(null),
    [F, I] = (0, H.useState)(!1),
    L = Fe(),
    [B, Me] = (0, H.useState)(!1);
  ((0, H.useEffect)(() => {
    if (!B) {
      E(!1);
      return;
    }
    let e = window.setTimeout(() => E(!0), 500);
    return () => window.clearTimeout(e);
  }, [B]),
    (0, H.useEffect)(() => {
      M.current && I(M.current.offsetWidth < 370);
    }, [M]));
  let Ne = (0, H.useMemo)(
      () => (s && D && Ce(D) ? { appid: Se(D)[0] } : w),
      [s, w, D],
    ),
    { strStoreURL: V, snr: Re } = de(D, s),
    Ve = De(S ? void 0 : w);
  if (!D)
    return ge
      ? (0, W.jsx)(bt, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let U = D.included_appids?.length || 0,
    He = D.included_appids?.filter((e) => j?.has(e))?.length || 0,
    Ue = D.item_type == 2 && !!k?.must_purchase_as_set,
    G = !ee && U > 1,
    K = D.item_type == 1 && U == 1,
    q = D.item_type == 0 || K,
    J = K && D.appid,
    Ge = D.name || ``,
    Ke = ne(Ae, k),
    qe = L || !Ae?.is_coming_soon || Ke,
    [Y, X] = ye(v, y);
  return (0, W.jsxs)(P, {
    className: N({ [he]: !0, [void 0]: g, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: ke.PREFERRED_CHILD,
    autoFocus: b,
    navKey: `preview_widget_` + Ie(w),
    ...Ve,
    children: [
      (0, W.jsx)(be, {
        appid: q && `appid` in w ? w.appid : void 0,
        children: (0, W.jsxs)(ze, {
          onClick: S ? x : void 0,
          className: N({ [ue]: !0, [ie]: !0, [te]: S }),
          ...Oe(D, me, L, !!s, void 0, x),
          preferredFocus: G,
          onFocusWithin: L ? Me : void 0,
          children: [
            (0, W.jsx)(`div`, {
              className: N(ae),
              children: (0, W.jsx)(Dt, {
                id: Ne,
                strURL: V,
                children: (0, W.jsxs)(`div`, {
                  className: pe,
                  children: [
                    (0, W.jsx)(Ee, { appids: je }),
                    (0, W.jsx)(Te, {
                      id: w,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: C,
                    }),
                    (0, W.jsx)(we, { id: w }),
                    (0, W.jsx)(ve, {
                      id: w,
                      active: w && T,
                      bIsHoverMode: !0,
                      eGrowOnActivate: L
                        ? void 0
                        : xe.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, W.jsxs)(`div`, {
              className: N({ [c]: !0, [fe]: G }),
              children: [
                !(!q || x) &&
                  (0, W.jsx)(u, {
                    id: w,
                    classOverride: N(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: Re,
                  }),
                (0, W.jsx)(`div`, {
                  className: h,
                  children: (0, W.jsx)(`a`, {
                    href: x ? void 0 : V,
                    target: Be.IN_CLIENT ? void 0 : `_blank`,
                    onClick: x,
                    children: (0, W.jsx)(`div`, {
                      className: N(l, `StoreSaleWidgetTitle`),
                      children: Ge,
                    }),
                  }),
                }),
                !G && (0, W.jsx)(St, { id: w }),
                (0, W.jsxs)(`div`, {
                  className: o,
                  ref: M,
                  children: [
                    q && (0, W.jsx)(Ot, { id: w }),
                    !G &&
                      !m &&
                      w &&
                      (0, W.jsxs)(W.Fragment, {
                        children: [
                          (0, W.jsx)(oe, {
                            id: w,
                            bMinimizePlatforms: F,
                            bHideWindows: F,
                          }),
                          !!(Y && D.item_type == 0) &&
                            (0, W.jsx)(Pe, {
                              eHWCompat: X,
                              className: `tUIs-i3NWoU-`,
                              id: w,
                            }),
                        ],
                      }),
                  ],
                }),
                !G &&
                  _ &&
                  w &&
                  (0, W.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, W.jsx)(p, { id: w }),
                  }),
                G &&
                  w &&
                  (0, W.jsx)(We, {
                    id: w,
                    bHideInLibraryApps: !Ue && D.item_type == 2 && He < U,
                  }),
                !!q && (0, W.jsx)(kt, { id: w }),
                x
                  ? (0, W.jsx)(`div`, {
                      className: a,
                      children: (0, W.jsx)(`div`, {
                        className: le,
                        children: (0, W.jsx)(i, { id: w }),
                      }),
                    })
                  : (0, W.jsx)(W.Fragment, {
                      children:
                        f && q && J
                          ? (0, W.jsx)(re, { appid: J, bIsMuted: !!T })
                          : (0, W.jsx)(wt, {
                              id: w,
                              bShowDemoButton: r,
                              bHidePrice: d,
                              bHideWishlistButton: qe,
                              eHardwareCompatibilityDisplay: X,
                            }),
                    }),
                (0, W.jsx)(`div`, {
                  className: ce,
                  children: (0, W.jsx)(Te, {
                    id: w,
                    bPreferAssetWithoutOverride: C,
                    imageType: `header`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      !!(e.strReason && e.strReason.length > 0) &&
        (0, W.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function Dt(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, W.jsxs)(x, { id: t, children: [r, ` `] })
    : (0, W.jsx)(`a`, { href: n, children: r });
}
function Ot(e) {
  let { id: t } = e,
    { data: n } = z(t);
  return n ? (0, W.jsx)(`div`, { className: g, children: d(n) }) : null;
}
function kt(e) {
  let { id: t } = e,
    { data: n } = R(t),
    { data: r } = A(t),
    { data: i } = F(t),
    { data: a } = O();
  if (!n || !i || !i.short_description || !a) return null;
  let o = r?.discount_pct || 0,
    s = n.included_appids?.length || 0,
    c = n.included_appids?.filter((e) => a?.has(e))?.length || 0,
    l = i.short_description,
    u = n.item_type == 1 && s == 1,
    d = n.item_type == 2 && !!r?.must_purchase_as_set;
  return (
    (n.item_type == 2 || (n.item_type == 1 && !u)) &&
      (l =
        !d && c > 0 && c < s
          ? V(`#Sale_Bundle_CompletePartialSet`, c, s)
          : o > 0
            ? V(`#Sale_BundleSave_WithDiscount`, o, s)
            : V(`#Sale_BundleSave`, s)),
    (0, W.jsx)(`div`, {
      className: N(me, `StoreSaleWidgetShortDesc`),
      children:
        l.startsWith(`#`) && l.indexOf(` `) == -1
          ? (0, W.jsx)(`span`, {
              className: m,
              children: B(
                l,
                (0, W.jsx)(`i`, {}),
                (0, W.jsx)(`i`, {}),
                (0, W.jsx)(`i`, {}),
                (0, W.jsx)(`i`, {}),
              ),
            })
          : l,
    })
  );
}
export { q as a, $ as i, wt as n, He as o, bt as r, U as s, Et as t };
