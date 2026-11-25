/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Pt as e,
  W as t,
  d as n,
  g as r,
  k as i,
  nt as a,
  r as o,
} from "./chunk~de7f2df91c.js";
import { U as s, s as c } from "./chunk~bd90a5fce7.js";
import {
  Aa as l,
  Ha as u,
  Mn as d,
  Pa as f,
  Ua as p,
  aa as m,
  da as h,
  fa as g,
  mn as ee,
} from "./chunk~1fa4b8f2ff.js";
import {
  A as _,
  T as v,
  _ as y,
  a as b,
  b as x,
  c as S,
  h as C,
  i as w,
  m as T,
  u as E,
  x as D,
  y as O,
} from "./chunk~0a99e05c44.js";
import {
  An as te,
  Bn as ne,
  Ct as k,
  Fn as re,
  Ft as ie,
  Gn as ae,
  Gt as oe,
  Hn as se,
  Ht as ce,
  In as le,
  Jn as ue,
  Jt as de,
  Kn as A,
  Kt as fe,
  Lt as pe,
  Mn as j,
  Mt as me,
  Nt as M,
  Pt as he,
  Rn as ge,
  Sn as _e,
  Tt as ve,
  Un as ye,
  Ut as N,
  Vn as be,
  Vt as xe,
  Wn as P,
  Wt as Se,
  Yn as Ce,
  Zn as we,
  Zt as Te,
  dn as F,
  dr as I,
  fr as L,
  gt as R,
  jn as Ee,
  jt as De,
  kn as z,
  kt as Oe,
  nn as ke,
  qn as Ae,
  qt as je,
  rn as Me,
  rr as B,
  rt as V,
  t as Ne,
  wn as Pe,
  wt as H,
  zn as Fe,
} from "./chunk~6b8ddcaac8.js";
import { r as Ie } from "./chunk~9a06851bec.js";
import "./chunk~44f252525d.js";
import { i as U } from "./chunk~8fb30ea08b.js";
import { t as W } from "./chunk~ede3e357a2.js";
import { n as Le } from "./chunk~b390ee0f78.js";
import {
  m as Re,
  n as ze,
  p as Be,
  r as Ve,
  t as He,
  u as Ue,
} from "./chunk~cbbb6ae37c.js";
import { d as We, n as G } from "./chunk~2201b8cb3d.js";
function Ge(e) {
  return e == null
    ? !1
    : e == 0 ||
        e == 4 ||
        e == 6 ||
        e == 11 ||
        e == 1 ||
        e == 10 ||
        e == 2 ||
        e == 7 ||
        e == 12 ||
        e == 14;
}
var K = e(a(), 1),
  q = t(),
  J = 6;
function Ke(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = y(t),
    i = r?.item_type == 2,
    { data: a } = L(),
    o = K.useMemo(() => {
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
    c = u.LocalizePlural(`#Sale_ContentPreview`, s);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != s && (c = u.Localize(`#Sale_Bundle_CompletePartialSet`, e - s, e));
  }
  return (0, q.jsxs)(`div`, {
    className: Me,
    children: [
      (0, q.jsxs)(`div`, {
        className: F,
        children: [
          i &&
            (0, q.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: u.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, q.jsx)(`div`, {
        className: z,
        children: o
          .slice(0, J)
          .map((e) => (0, q.jsx)(qe, { id: e }, `preview${_(e)}`)),
      }),
    ],
  });
}
function qe(e) {
  let { id: t } = e,
    { data: n } = x(t),
    { data: r } = O(t);
  if (!n || !r) return null;
  let i = B(n, `small_capsule`);
  return (0, q.jsx)(M, {
    id: t,
    className: Ee,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, q.jsx)(`img`, {
      src: i,
      className: te,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
var Je = `WYXlhoxwBlU-`,
  Y = `Ypf4QLCxqQU-`,
  Ye = `rDvoly1XGQk-`,
  Xe = `n2t7u-oXiwM-`,
  Ze = `a1UUU8zD1Lg-`,
  Qe = `jP-Qr-tpETg-`,
  X = `triBTPpfZNQ-`,
  $e = `Ep0wQ-6tJLw-`,
  et = `-Rp0JgQXMoA-`,
  tt = `QWDBAVIUpho-`,
  nt = `JAphvRffM9M-`,
  rt = `FQQL32BdomI-`,
  it = `xNRz-0kPOeE-`,
  Z = `-F6L5ywkZiU-`,
  at = `_4eS9H8fFOdo-`,
  Q = `_7fjzkXY-Nhs-`,
  ot = `qNcrltVSVzI-`,
  st = `A-4nfbw4-fY-`,
  ct = `oe2Jr-slLMU-`,
  lt = `DGZ5Ptl37g4-`,
  ut = `zstB61TOiBA-`,
  dt = `-ZEsfMgRePw-`,
  ft = `P-N-CSZ-VX8-`,
  pt = `aZng9sDwNZg-`,
  mt = `x80z1JoR9dc-`,
  ht = `X-2r-tUH1gQ-`,
  gt = `-A11cjkYCU8-`,
  _t = `_10gRNaJtPOU-`,
  vt = `UskT6FngUB8-`,
  yt = `L03Y6ydPSDM-`,
  bt = `rX8DGzBU5pU-`,
  xt = `_8mKyAzWvx8I-`,
  St = `RfxR9kxm2-o-`,
  Ct = `_3EpVljmp8Bg-`,
  wt = `h1-hm2PiNH0-`,
  Tt = `ruaMViMLvdA-`;
function Et(e) {
  let {
    capsules_per_row: t,
    is_generic: n,
    is_generic_trailer: r,
    is_event_dash_row: i,
    is_trailer_carousel: a,
    is_spotlights: s,
    is_item_browser: c,
    is_maincap: l,
    is_expanded_maincap: u,
    is_expanded_display: d,
    show_auto_advance_bar: f,
    swipe_row: m,
  } = e;
  if (typeof m == `string`)
    return (0, q.jsx)($, {
      children: (0, q.jsx)(`div`, {
        className: o(Ye, Xe),
        children: [0, 1, 2, 3, 4].map((e) =>
          (0, q.jsx)(
            `div`,
            {
              className: o(Ze, m === `tall_capsule` && `RDPLi3Xo-Mk-`),
              children: (0, q.jsx)(`div`, { className: Y }),
            },
            e,
          ),
        ),
      }),
    });
  if (m)
    return (0, q.jsx)($, {
      children: (0, q.jsx)(`div`, {
        className: Ye,
        children: [0, 1].map((e) =>
          (0, q.jsx)(
            `div`,
            { className: Y, style: { width: m.width, height: m.height } },
            e,
          ),
        ),
      }),
    });
  if (!t) return null;
  if (n)
    return (0, q.jsx)($, {
      children: (0, q.jsx)(`div`, {
        className: Qe,
        children: (0, q.jsx)(`div`, { className: X }),
      }),
    });
  if (r)
    return (0, q.jsx)($, {
      children: (0, q.jsx)(`div`, {
        className: $e,
        children: (0, q.jsx)(`div`, { className: X }),
      }),
    });
  if (a)
    return (0, q.jsxs)($, {
      children: [
        (0, q.jsxs)(`div`, {
          className: gt,
          children: [
            (0, q.jsx)(`div`, {
              className: _t,
              children: (0, q.jsx)(`div`, { className: X }),
            }),
            (0, q.jsx)(`div`, {
              className: vt,
              children: (0, q.jsx)(`div`, { className: X }),
            }),
          ],
        }),
        f &&
          (0, q.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, q.jsx)(`div`, { className: `triBTPpfZNQ-` }),
          }),
      ],
    });
  if (i)
    return (0, q.jsx)($, {
      children: (0, q.jsxs)(`div`, {
        className: ut,
        children: [
          (0, q.jsx)(`div`, { className: o(dt, Y) }),
          (0, q.jsxs)(`div`, {
            className: o(ft),
            children: [
              (0, q.jsx)(`div`, { className: o(pt, Y) }),
              (0, q.jsx)(`div`, { className: o(mt, Y) }),
              (0, q.jsx)(`div`, { className: o(ht, Y) }),
            ],
          }),
        ],
      }),
    });
  if (s)
    return (0, q.jsx)($, {
      children: (0, q.jsxs)(`div`, {
        className: ct,
        children: [
          (0, q.jsx)(`div`, { className: Y }),
          (0, q.jsx)(`div`, { className: Y }),
          (0, q.jsxs)(`div`, {
            className: lt,
            children: [
              (0, q.jsx)(`div`, { className: Y }),
              (0, q.jsx)(`div`, { className: Y }),
            ],
          }),
        ],
      }),
    });
  if (l)
    return (0, q.jsx)($, {
      children: (0, q.jsxs)(`div`, {
        className: o({ [St]: !0, [void 0]: u }),
        children: [
          (0, q.jsx)(`div`, { className: Y }),
          (0, q.jsxs)(`div`, {
            className: o(ft),
            children: [
              (0, q.jsx)(`div`, { className: o(pt, Y) }),
              (0, q.jsx)(`div`, { className: o(mt, Y) }),
              (0, q.jsx)(`div`, { className: o(Ct, Y) }),
              (0, q.jsx)(`div`, { className: o(wt, Y) }),
              (0, q.jsx)(`div`, { className: o(Tt, Y) }),
            ],
          }),
        ],
      }),
    });
  if (d)
    return (0, q.jsx)($, {
      children: (0, q.jsxs)(`div`, {
        className: yt,
        children: [
          (0, q.jsx)(`div`, { className: o(bt, Y) }),
          (0, q.jsx)(`div`, { className: o(xt, Y) }),
        ],
      }),
    });
  if (c) {
    let e = [];
    for (let n = 0; n < t[0]; n++)
      e.push(
        (0, q.jsx)(
          p,
          {
            className: rt,
            focusable: !0,
            children: (0, q.jsx)(`div`, { className: Y }),
          },
          `item_browse_ghost_` + n,
        ),
      );
    return (0, q.jsx)($, { children: e });
  }
  return t?.length == 1
    ? t[0] == 1
      ? (0, q.jsx)($, {
          children: (0, q.jsx)(`div`, {
            className: nt,
            children: (0, q.jsx)(`div`, { className: Y }),
          }),
        })
      : t[0] == 4
        ? (0, q.jsx)($, {
            children: (0, q.jsxs)(`div`, {
              className: tt,
              children: [
                (0, q.jsx)(`div`, { className: Y }),
                (0, q.jsx)(`div`, { className: Y }),
                (0, q.jsx)(`div`, { className: Y }),
                (0, q.jsx)(`div`, { className: Y }),
              ],
            }),
          })
        : (0, q.jsx)($, {
            children: (0, q.jsxs)(`div`, {
              className: et,
              children: [
                (0, q.jsx)(`div`, { className: Y }),
                (0, q.jsx)(`div`, { className: Y }),
                (0, q.jsx)(`div`, { className: Y }),
              ],
            }),
          })
    : t?.length == 2
      ? t[0] == 3 && t[1] == 3
        ? (0, q.jsx)($, {
            children: (0, q.jsxs)(`div`, {
              className: it,
              children: [
                (0, q.jsxs)(`div`, {
                  className: o(Z, Q),
                  children: [
                    (0, q.jsx)(`div`, { className: Y }),
                    (0, q.jsx)(`div`, { className: Y }),
                    (0, q.jsx)(`div`, { className: Y }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: o(Z, Q),
                  children: [
                    (0, q.jsx)(`div`, { className: Y }),
                    (0, q.jsx)(`div`, { className: Y }),
                    (0, q.jsx)(`div`, { className: Y }),
                  ],
                }),
              ],
            }),
          })
        : (0, q.jsx)($, {
            children: (0, q.jsxs)(`div`, {
              className: it,
              children: [
                (0, q.jsxs)(`div`, {
                  className: o(Z, at),
                  children: [
                    (0, q.jsx)(`div`, { className: Y }),
                    (0, q.jsx)(`div`, { className: Y }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: o(Z, Q),
                  children: [
                    (0, q.jsx)(`div`, { className: Y }),
                    (0, q.jsx)(`div`, { className: Y }),
                    (0, q.jsx)(`div`, { className: Y }),
                  ],
                }),
              ],
            }),
          })
      : (0, q.jsx)($, {
          children: (0, q.jsxs)(`div`, {
            className: ot,
            children: [
              (0, q.jsxs)(`div`, {
                className: o(Z, at),
                children: [
                  (0, q.jsx)(`div`, { className: Y }),
                  (0, q.jsx)(`div`, { className: Y }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: o(Z, Q),
                children: [
                  (0, q.jsx)(`div`, { className: Y }),
                  (0, q.jsx)(`div`, { className: Y }),
                  (0, q.jsx)(`div`, { className: Y }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: o(Z, st),
                children: [
                  (0, q.jsx)(`div`, { className: Y }),
                  (0, q.jsx)(`div`, { className: Y }),
                  (0, q.jsx)(`div`, { className: Y }),
                  (0, q.jsx)(`div`, { className: Y }),
                ],
              }),
            ],
          }),
        });
}
function $(e) {
  return (0, q.jsx)(p, {
    className: o(Je, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
function Dt(e) {
  let [t, n] = (0, K.useState)(void 0),
    { data: r } = y(e),
    { data: i } = v(e),
    a = U(),
    o = w();
  return (
    (0, K.useEffect)(() => {
      if (r) {
        if (i && i.length > 0) n(i);
        else if (r.related_items?.parent_appid) {
          let e = { appid: r.related_items?.parent_appid };
          (async () => {
            let t = await a.fetchQuery(E(o, e));
            t && t.length > 0 && n(t);
          })();
        }
      }
    }, [o, a, r, i]),
    t
  );
}
function Ot(e) {
  let { id: t } = e;
  return t ? (0, q.jsx)(kt, { id: t }) : null;
}
function kt(e) {
  let { id: t } = e,
    n = Dt(t);
  return n
    ? (0, q.jsx)(`div`, {
        className: Ae,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, q.jsx)(Ne, { tagid: e.tagid, className: Te }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function At(e) {
  let {
      id: t,
      bShowDemoButton: n,
      bShowPurchaseOptionsButton: r,
      fnOnPurchaseOptionsClick: i,
      bHidePrice: a,
      bShowDeckCompatibilityDialog: s,
      eHardwareCompatibilityDisplay: c,
      className: u,
      bShowCartButton: d,
    } = e,
    { data: p } = y(t),
    { data: m } = D(t),
    { data: g } = C(t),
    { bIsOwned: _ } = I(t),
    [v, b] = ie(s, c);
  if (!p) return null;
  let x =
      (p.type === 1 && !m?.is_coming_soon) ||
      (p.related_items?.demo_appid && p.related_items?.demo_appid.length > 0),
    S = Ge(p.type),
    w = n && S && x,
    T = null;
  if (!_ && g?.is_free_to_keep && g?.free_to_keep_ends) {
    let e = g.free_to_keep_ends,
      t = h(
        `#Sale_default_label_Free_Promo_Description_Short`,
        f(e) + ` @ ` + l(e, { bForce24HourClock: !1 }),
      );
    T = (0, q.jsxs)(`div`, {
      className: j,
      children: [
        t,
        (0, q.jsx)(ee, {
          tooltip: h(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, q.jsxs)(`div`, {
    className: o(le, u),
    children: [
      T,
      (0, q.jsxs)(`div`, {
        className: ge,
        children: [
          !!w && (0, q.jsx)(k, { id: t, className: `R0sGSaFdUWo-` }),
          !a &&
            p.type !== 1 &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                !(!r || p.is_free) &&
                  (0, q.jsx)(jt, { fnOnPurchaseOptionsClick: i }),
                !(!d || p.is_free) &&
                  (0, q.jsx)(H, { id: t, className: `CartBtn` }),
              ],
            }),
          !a && (0, q.jsx)(De, { id: t }),
          v && (0, q.jsx)(G, { id: t, compatibility: b }),
        ],
      }),
    ],
  });
}
function jt(e) {
  return (0, q.jsx)(`div`, {
    className: de,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, q.jsx)(`span`, {
      children: h(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Mt(e) {
  let {
      id: t,
      type: r,
      bShowDemoButton: a,
      bPreferDemoStorePage: l,
      bHidePrice: u,
      bUseSubscriptionLayout: d,
      bHidePlatforms: f,
      bHideContainedApps: m,
      bAllowTwoLinesForHeader: h,
      bShowReviewSummary: g,
      bShowDeckCompatibilityDialog: ee,
      eHardwareCompatibilityDisplay: v,
      bAutoFocus: y,
      fnOnClickOverride: b,
      bIsMarketingMessage: x,
      bPreferAssetWithoutOverride: S,
    } = e,
    w = Ue(t, r),
    [T, E] = (0, K.useState)(!1),
    te = Ie(),
    { data: k, isPending: de } = O(w),
    { data: A } = C(w),
    { data: j } = D(w),
    { data: M } = L(),
    _e = Le(w),
    N = (0, K.useRef)(null),
    [P, Te] = (0, K.useState)(!1),
    F = n(),
    [I, R] = (0, K.useState)(!1);
  ((0, K.useEffect)(() => {
    if (!I) {
      E(!1);
      return;
    }
    let e = window.setTimeout(() => E(!0), 500);
    return () => window.clearTimeout(e);
  }, [I]),
    (0, K.useEffect)(() => {
      N.current && Te(N.current.offsetWidth < 370);
    }, [N]));
  let Ee = (0, K.useMemo)(
      () => (l && k && Se(k) ? { appid: oe(k)[0] } : w),
      [l, w, k],
    ),
    { strStoreURL: z, snr: Ae } = ve(k, l),
    Me = ze(x ? void 0 : w);
  if (!k)
    return de
      ? (0, q.jsx)(Et, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let B = k.included_appids?.length || 0,
    V = k.included_appids?.filter((e) => M?.has(e))?.length || 0,
    Ne = k.item_type == 2 && !!A?.must_purchase_as_set,
    H = !m && B > 1,
    U = k.item_type == 1 && B == 1,
    W = k.item_type == 0 || U,
    G = U && k.appid,
    Ge = k.name || ``,
    J = ce(j, A),
    qe = F || !j?.is_coming_soon || J,
    [Je, Y] = ie(ee, v);
  return (0, q.jsxs)(p, {
    className: o({ [ye]: !0, [void 0]: h, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: s.PREFERRED_CHILD,
    autoFocus: y,
    navKey: `preview_widget_` + _(w),
    ...Me,
    children: [
      (0, q.jsx)(he, {
        appid: W && `appid` in w ? w.appid : void 0,
        children: (0, q.jsxs)(c, {
          onClick: x ? b : void 0,
          className: o({ [ne]: !0, [re]: !0, [Pe]: x }),
          ...He(k, te, F, !!l, void 0, b),
          preferredFocus: H,
          onFocusWithin: F ? R : void 0,
          children: [
            (0, q.jsx)(`div`, {
              className: o(be),
              children: (0, q.jsx)(Nt, {
                id: Ee,
                strURL: z,
                children: (0, q.jsxs)(`div`, {
                  className: se,
                  children: [
                    (0, q.jsx)(Ve, { appids: _e }),
                    (0, q.jsx)(Re, {
                      id: w,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: S,
                    }),
                    (0, q.jsx)(Be, { id: w }),
                    (0, q.jsx)(fe, {
                      id: w,
                      active: w && T,
                      bIsHoverMode: !0,
                      eGrowOnActivate: F
                        ? void 0
                        : je.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, q.jsxs)(`div`, {
              className: o({ [ae]: !0, [ke]: H }),
              children: [
                !(!W || b) &&
                  (0, q.jsx)(pe, {
                    id: w,
                    classOverride: o(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: Ae,
                  }),
                (0, q.jsx)(`div`, {
                  className: Ce,
                  children: (0, q.jsx)(`a`, {
                    href: b ? void 0 : z,
                    target: i.IN_CLIENT ? void 0 : `_blank`,
                    onClick: b,
                    children: (0, q.jsx)(`div`, {
                      className: o(ue, `StoreSaleWidgetTitle`),
                      children: Ge,
                    }),
                  }),
                }),
                !H && (0, q.jsx)(Ot, { id: w }),
                (0, q.jsxs)(`div`, {
                  className: we,
                  ref: N,
                  children: [
                    W && (0, q.jsx)(Pt, { id: w }),
                    !H &&
                      !f &&
                      w &&
                      (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(me, {
                            id: w,
                            bMinimizePlatforms: P,
                            bHideWindows: P,
                          }),
                          !!(Je && k.item_type == 0) &&
                            (0, q.jsx)(We, {
                              eHWCompat: Y,
                              className: `tUIs-i3NWoU-`,
                              id: w,
                            }),
                        ],
                      }),
                  ],
                }),
                !H &&
                  g &&
                  w &&
                  (0, q.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, q.jsx)(xe, { id: w }),
                  }),
                H &&
                  w &&
                  (0, q.jsx)(Ke, {
                    id: w,
                    bHideInLibraryApps: !Ne && k.item_type == 2 && V < B,
                  }),
                !!W && (0, q.jsx)(Ft, { id: w }),
                b
                  ? (0, q.jsx)(`div`, {
                      className: le,
                      children: (0, q.jsx)(`div`, {
                        className: ge,
                        children: (0, q.jsx)(De, { id: w }),
                      }),
                    })
                  : (0, q.jsx)(q.Fragment, {
                      children:
                        d && W && G
                          ? (0, q.jsx)(Oe, { appid: G, bIsMuted: !!T })
                          : (0, q.jsx)(At, {
                              id: w,
                              bShowDemoButton: a,
                              bHidePrice: u,
                              bHideWishlistButton: qe,
                              eHardwareCompatibilityDisplay: Y,
                            }),
                    }),
                (0, q.jsx)(`div`, {
                  className: Fe,
                  children: (0, q.jsx)(Re, {
                    id: w,
                    bPreferAssetWithoutOverride: S,
                    imageType: `header`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      !!(e.strReason && e.strReason.length > 0) &&
        (0, q.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function Nt(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, q.jsxs)(M, { id: t, children: [r, ` `] })
    : (0, q.jsx)(`a`, { href: n, children: r });
}
function Pt(e) {
  let { id: t } = e,
    { data: n } = D(t);
  return n ? (0, q.jsx)(`div`, { className: P, children: N(n) }) : null;
}
function Ft(e) {
  let { id: t } = e,
    { data: n } = O(t),
    { data: r } = C(t),
    { data: i } = T(t),
    { data: a } = L();
  if (!n || !i || !i.short_description || !a) return null;
  let s = r?.discount_pct || 0,
    c = n.included_appids?.length || 0,
    l = n.included_appids?.filter((e) => a?.has(e))?.length || 0,
    u = i.short_description,
    d = n.item_type == 1 && c == 1,
    f = n.item_type == 2 && !!r?.must_purchase_as_set;
  return (
    (n.item_type == 2 || (n.item_type == 1 && !d)) &&
      (u =
        !f && l > 0 && l < c
          ? h(`#Sale_Bundle_CompletePartialSet`, l, c)
          : s > 0
            ? h(`#Sale_BundleSave_WithDiscount`, s, c)
            : h(`#Sale_BundleSave`, c)),
    (0, q.jsx)(`div`, {
      className: o(A, `StoreSaleWidgetShortDesc`),
      children:
        u.startsWith(`#`) && u.indexOf(` `) == -1
          ? (0, q.jsx)(`span`, {
              className: _e,
              children: g(
                u,
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
              ),
            })
          : u,
    })
  );
}
var It = `yFKurY5xd-8-`,
  Lt = `x-jXNI-s184-`,
  Rt = `aG-OF9IYlE8-`,
  zt = `Ef8xOk5PJbg-`,
  Bt = `RTkq2WI2bK4-`,
  Vt = `_4vRcmVJ4gN8-`,
  Ht = `eEhfnGythD0-`,
  Ut = `qtB6DnXH-bs-`,
  Wt = `tF-0HvIRqgQ-`,
  Gt = `_0EeL7NnvnjU-`,
  Kt = `L-E-bGfH1Sw-`,
  qt = `-pV6HCIaaqM-`,
  Jt = `MUbRKQFMT7E-`;
function Yt(e, t, n) {
  return {
    queryKey: Xt(n),
    enabled: !!n?.GID,
    queryFn: async () => {
      if (!n) return null;
      let i = n.appid
          ? await e.ensureQueryData(S(t, { appid: n.appid }))
          : null,
        a = await e.ensureQueryData(R(n.clanSteamID.GetAccountID(), e));
      if (n.appid) {
        if (i) {
          if (i.all_ages_screenshots && i.all_ages_screenshots.length > 0) {
            let e = Number(
              n.bOldAnnouncement
                ? n.AnnouncementGID
                : n.GID == null
                  ? 0
                  : n.GID,
            );
            return (
              (e %= i.all_ages_screenshots.length),
              `${r.STORE_ITEM_BASE_URL}${i.all_ages_screenshots[e].filename}`
            );
          }
        } else return ``;
      }
      return n.GetEventType() != 36 &&
        a &&
        ((a.is_creator_home && !a.is_ogg) || a.is_curator)
        ? (a.avatar_full_url ?? null)
        : null;
    },
  };
}
function Xt(e) {
  return [`useFallbackArtworkScreenshot`, e?.GID];
}
function Zt(e, t, n, r = V.full, i = !0) {
  let a = U(),
    o = w();
  return W($t(a, o, e, t, n, r, i)).data ?? void 0;
}
function Qt(e, t, n, r = V.full, i = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, n, r, i];
}
function $t(e, t, n, i, a, o = V.full, s = !0) {
  return {
    queryKey: Qt(n, i, a, o, s),
    enabled: !!n?.GID,
    initialData: () => en(n, i, a, o, s),
    queryFn: async () => {
      if (!n) return null;
      let c = en(n, i, a, o, s);
      if (c) return c;
      let l = await e.ensureQueryData(R(n.clanSteamID.GetAccountID(), e));
      if (i == `capsule`) {
        let i = n.appid;
        if (!i && l && ((l.is_creator_home && !l.is_ogg) || l.is_curator)) {
          if (n.jsondata?.referenced_appids?.length)
            i = n.jsondata.referenced_appids[0];
          else return l.avatar_full_url ?? null;
        }
        let a = await e.ensureQueryData(b(t, { appid: i }));
        return a
          ? (B(a, `main_capsule`) ?? null)
          : l?.avatar_full_url
            ? l.avatar_full_url
            : `${r.STORE_ITEM_BASE_URL}steam/apps/${i}/header.jpg`;
      }
      return i == `background` &&
        l &&
        ((l.is_creator_home && !l.is_ogg) || l.is_curator)
        ? (l.creator_page_bg_url ?? null)
        : await e.ensureQueryData(Yt(e, t, n));
    },
  };
}
function en(e, t, n, r = V.full, i = !0) {
  if (!e) return;
  let a = e.GetImageURL(t, n, r);
  if (a && a.trim().length > 0) return a;
  let o = m.GetELanguageFallback(n);
  if (n != o) {
    let n = e.GetImageURL(t, o, r);
    if (n && n.trim().length > 0) return n;
  }
  if (t == `capsule`) {
    let t = e.GetImageFromBeginningOfDescription(n, Number.MAX_VALUE);
    if (t && (i || d(t))) return t;
  }
}
export {
  Mt as _,
  It as a,
  zt as c,
  Ut as d,
  Ht as f,
  Kt as g,
  qt as h,
  Gt as i,
  Bt as l,
  Jt as m,
  Zt as n,
  Lt as o,
  Wt as p,
  Yt as r,
  Rt as s,
  $t as t,
  Vt as u,
  At as v,
};
