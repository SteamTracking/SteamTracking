/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  W as t,
  j as n,
  rt as r,
  sn as i,
  vt as a,
  z as o,
} from "./chunk~de7f2df91c.js";
import { G as s, l as c } from "./chunk~25a6634263.js";
import {
  Ha as l,
  Na as u,
  Va as d,
  da as f,
  ia as p,
  jn as m,
  ka as ee,
  pn as te,
  ua as h,
} from "./chunk~1fa4b8f2ff.js";
import {
  C as g,
  O as _,
  _ as v,
  a as y,
  f as b,
  h as x,
  i as S,
  l as C,
  p as w,
  s as T,
  v as E,
  y as D,
} from "./chunk~0a99e05c44.js";
import {
  $ as ne,
  $t as re,
  Dt as O,
  En as k,
  Et as ie,
  Ft as A,
  J as j,
  Jt as ae,
  Kt as oe,
  Nn as se,
  Pn as M,
  V as N,
  Y as ce,
  _n as P,
  _t as le,
  an as ue,
  at as de,
  cn as fe,
  dn as pe,
  dt as me,
  en as he,
  fn as ge,
  ft as _e,
  gn as F,
  gt as ve,
  hn as ye,
  ht as be,
  it as xe,
  ln as Se,
  mn as I,
  mt as Ce,
  nn as we,
  nt as Te,
  on as Ee,
  pn as De,
  pt as Oe,
  q as L,
  rt as R,
  st as ke,
  t as z,
  tn as Ae,
  tt as je,
  un as Me,
  vn as Ne,
  vt as Pe,
  xn as Fe,
  xt as B,
  yn as Ie,
} from "./chunk~6b8ddcaac8.js";
import { r as Le } from "./chunk~9a06851bec.js";
import "./chunk~44f252525d.js";
import { i as V } from "./chunk~8fb30ea08b.js";
import { t as H } from "./chunk~ede3e357a2.js";
import { n as Re } from "./chunk~b390ee0f78.js";
import {
  f as ze,
  l as Be,
  n as Ve,
  p as He,
  t as Ue,
} from "./chunk~cbbb6ae37c.js";
import { d as We, n as U } from "./chunk~2201b8cb3d.js";
import { g as W } from "./chunk~2bee5a7d08.js";
function G(e) {
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
var K = i(e(), 1),
  q = a(),
  Ge = 6;
function Ke(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = x(t),
    i = r?.item_type == 2,
    { data: a } = M(),
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
    c = d.LocalizePlural(`#Sale_ContentPreview`, s);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != s && (c = d.Localize(`#Sale_Bundle_CompletePartialSet`, e - s, e));
  }
  return (0, q.jsxs)(`div`, {
    className: O,
    children: [
      (0, q.jsxs)(`div`, {
        className: A,
        children: [
          i &&
            (0, q.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: d.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, q.jsx)(`div`, {
        className: re,
        children: o
          .slice(0, Ge)
          .map((e) => (0, q.jsx)(qe, { id: e }, `preview${_(e)}`)),
      }),
    ],
  });
}
function qe(e) {
  let { id: t } = e,
    { data: n } = E(t),
    { data: r } = v(t);
  if (!n || !r) return null;
  let i = k(n, `small_capsule`);
  return (0, q.jsx)(R, {
    id: t,
    className: Ae,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, q.jsx)(`img`, {
      src: i,
      className: he,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
var J = `WYXlhoxwBlU-`,
  Y = `Ypf4QLCxqQU-`,
  Je = `jP-Qr-tpETg-`,
  X = `triBTPpfZNQ-`,
  Ye = `Ep0wQ-6tJLw-`,
  Xe = `-Rp0JgQXMoA-`,
  Ze = `QWDBAVIUpho-`,
  Qe = `JAphvRffM9M-`,
  $e = `FQQL32BdomI-`,
  et = `xNRz-0kPOeE-`,
  Z = `-F6L5ywkZiU-`,
  tt = `_4eS9H8fFOdo-`,
  Q = `_7fjzkXY-Nhs-`,
  nt = `qNcrltVSVzI-`,
  rt = `A-4nfbw4-fY-`,
  it = `oe2Jr-slLMU-`,
  at = `DGZ5Ptl37g4-`,
  ot = `zstB61TOiBA-`,
  st = `-ZEsfMgRePw-`,
  ct = `P-N-CSZ-VX8-`,
  lt = `aZng9sDwNZg-`,
  ut = `x80z1JoR9dc-`,
  dt = `X-2r-tUH1gQ-`,
  ft = `-A11cjkYCU8-`,
  pt = `_10gRNaJtPOU-`,
  mt = `UskT6FngUB8-`,
  ht = `L03Y6ydPSDM-`,
  gt = `rX8DGzBU5pU-`,
  _t = `_8mKyAzWvx8I-`,
  vt = `RfxR9kxm2-o-`,
  yt = `_3EpVljmp8Bg-`,
  bt = `h1-hm2PiNH0-`,
  xt = `ruaMViMLvdA-`;
function St(e) {
  let {
    capsules_per_row: t,
    is_generic: r,
    is_generic_trailer: i,
    is_event_dash_row: a,
    is_trailer_carousel: o,
    is_spotlights: s,
    is_item_browser: c,
    is_maincap: u,
    is_expanded_maincap: d,
    is_expanded_display: f,
    show_auto_advance_bar: p,
  } = e;
  if (!t) return null;
  if (r)
    return (0, q.jsx)($, {
      children: (0, q.jsx)(`div`, {
        className: Je,
        children: (0, q.jsx)(`div`, { className: X }),
      }),
    });
  if (i)
    return (0, q.jsx)($, {
      children: (0, q.jsx)(`div`, {
        className: Ye,
        children: (0, q.jsx)(`div`, { className: X }),
      }),
    });
  if (o)
    return (0, q.jsxs)($, {
      children: [
        (0, q.jsxs)(`div`, {
          className: ft,
          children: [
            (0, q.jsx)(`div`, {
              className: pt,
              children: (0, q.jsx)(`div`, { className: X }),
            }),
            (0, q.jsx)(`div`, {
              className: mt,
              children: (0, q.jsx)(`div`, { className: X }),
            }),
          ],
        }),
        p &&
          (0, q.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, q.jsx)(`div`, { className: `triBTPpfZNQ-` }),
          }),
      ],
    });
  if (a)
    return (0, q.jsx)($, {
      children: (0, q.jsxs)(`div`, {
        className: ot,
        children: [
          (0, q.jsx)(`div`, { className: n(st, Y) }),
          (0, q.jsxs)(`div`, {
            className: n(ct),
            children: [
              (0, q.jsx)(`div`, { className: n(lt, Y) }),
              (0, q.jsx)(`div`, { className: n(ut, Y) }),
              (0, q.jsx)(`div`, { className: n(dt, Y) }),
            ],
          }),
        ],
      }),
    });
  if (s)
    return (0, q.jsx)($, {
      children: (0, q.jsxs)(`div`, {
        className: it,
        children: [
          (0, q.jsx)(`div`, { className: Y }),
          (0, q.jsx)(`div`, { className: Y }),
          (0, q.jsxs)(`div`, {
            className: at,
            children: [
              (0, q.jsx)(`div`, { className: Y }),
              (0, q.jsx)(`div`, { className: Y }),
            ],
          }),
        ],
      }),
    });
  if (u)
    return (0, q.jsx)($, {
      children: (0, q.jsxs)(`div`, {
        className: n({ [vt]: !0, [void 0]: d }),
        children: [
          (0, q.jsx)(`div`, { className: Y }),
          (0, q.jsxs)(`div`, {
            className: n(ct),
            children: [
              (0, q.jsx)(`div`, { className: n(lt, Y) }),
              (0, q.jsx)(`div`, { className: n(ut, Y) }),
              (0, q.jsx)(`div`, { className: n(yt, Y) }),
              (0, q.jsx)(`div`, { className: n(bt, Y) }),
              (0, q.jsx)(`div`, { className: n(xt, Y) }),
            ],
          }),
        ],
      }),
    });
  if (f)
    return (0, q.jsx)($, {
      children: (0, q.jsxs)(`div`, {
        className: ht,
        children: [
          (0, q.jsx)(`div`, { className: n(gt, Y) }),
          (0, q.jsx)(`div`, { className: n(_t, Y) }),
        ],
      }),
    });
  if (c) {
    let e = [];
    for (let n = 0; n < t[0]; n++)
      e.push(
        (0, q.jsx)(
          l,
          {
            className: $e,
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
            className: Qe,
            children: (0, q.jsx)(`div`, { className: Y }),
          }),
        })
      : t[0] == 4
        ? (0, q.jsx)($, {
            children: (0, q.jsxs)(`div`, {
              className: Ze,
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
              className: Xe,
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
              className: et,
              children: [
                (0, q.jsxs)(`div`, {
                  className: n(Z, Q),
                  children: [
                    (0, q.jsx)(`div`, { className: Y }),
                    (0, q.jsx)(`div`, { className: Y }),
                    (0, q.jsx)(`div`, { className: Y }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: n(Z, Q),
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
              className: et,
              children: [
                (0, q.jsxs)(`div`, {
                  className: n(Z, tt),
                  children: [
                    (0, q.jsx)(`div`, { className: Y }),
                    (0, q.jsx)(`div`, { className: Y }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: n(Z, Q),
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
            className: nt,
            children: [
              (0, q.jsxs)(`div`, {
                className: n(Z, tt),
                children: [
                  (0, q.jsx)(`div`, { className: Y }),
                  (0, q.jsx)(`div`, { className: Y }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: n(Z, Q),
                children: [
                  (0, q.jsx)(`div`, { className: Y }),
                  (0, q.jsx)(`div`, { className: Y }),
                  (0, q.jsx)(`div`, { className: Y }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: n(Z, rt),
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
  return (0, q.jsx)(l, {
    className: n(J, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
function Ct(e) {
  let [t, n] = (0, K.useState)(void 0),
    { data: r } = x(e),
    { data: i } = g(e),
    a = V(),
    o = S();
  return (
    (0, K.useEffect)(() => {
      if (r) {
        if (i && i.length > 0) n(i);
        else if (r.related_items?.parent_appid) {
          let e = { appid: r.related_items?.parent_appid };
          (async () => {
            let t = await a.fetchQuery(C(o, e));
            t && t.length > 0 && n(t);
          })();
        }
      }
    }, [o, a, r, i]),
    t
  );
}
function wt(e) {
  let { id: t } = e;
  return t ? (0, q.jsx)(Tt, { id: t }) : null;
}
function Tt(e) {
  let { id: t } = e,
    n = Ct(t);
  return n
    ? (0, q.jsx)(`div`, {
        className: P,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, q.jsx)(z, { tagid: e.tagid, className: B }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function Et(e) {
  let {
      id: t,
      bShowDemoButton: r,
      bShowPurchaseOptionsButton: i,
      fnOnPurchaseOptionsClick: a,
      bHidePrice: o,
      bShowDeckCompatibilityDialog: s,
      eHardwareCompatibilityDisplay: c,
      className: l,
      bShowCartButton: d,
    } = e,
    { data: f } = x(t),
    { data: p } = D(t),
    { data: m } = w(t),
    { bIsOwned: g } = se(t),
    [_, v] = de(s, c);
  if (!f) return null;
  let y =
      (f.type === 1 && !p?.is_coming_soon) ||
      (f.related_items?.demo_appid && f.related_items?.demo_appid.length > 0),
    b = G(f.type),
    S = r && b && y,
    C = null;
  if (!g && m?.is_free_to_keep && m?.free_to_keep_ends) {
    let e = m.free_to_keep_ends,
      t = h(
        `#Sale_default_label_Free_Promo_Description_Short`,
        u(e) + ` @ ` + ee(e, { bForce24HourClock: !1 }),
      );
    C = (0, q.jsxs)(`div`, {
      className: we,
      children: [
        t,
        (0, q.jsx)(te, {
          tooltip: h(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, q.jsxs)(`div`, {
    className: n(Ee, l),
    children: [
      C,
      (0, q.jsxs)(`div`, {
        className: fe,
        children: [
          !!S && (0, q.jsx)(L, { id: t, className: `R0sGSaFdUWo-` }),
          !o &&
            f.type !== 1 &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                !(!i || f.is_free) &&
                  (0, q.jsx)(Dt, { fnOnPurchaseOptionsClick: a }),
                !(!d || f.is_free) &&
                  (0, q.jsx)(j, { id: t, className: `CartBtn` }),
              ],
            }),
          !o && (0, q.jsx)(je, { id: t }),
          _ && (0, q.jsx)(U, { id: t, compatibility: v }),
        ],
      }),
    ],
  });
}
function Dt(e) {
  return (0, q.jsx)(`div`, {
    className: Pe,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, q.jsx)(`span`, {
      children: h(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Ot(e) {
  let {
      id: t,
      type: i,
      bShowDemoButton: a,
      bPreferDemoStorePage: u,
      bHidePrice: d,
      bUseSubscriptionLayout: f,
      bHidePlatforms: p,
      bHideContainedApps: m,
      bAllowTwoLinesForHeader: ee,
      bShowReviewSummary: te,
      bShowDeckCompatibilityDialog: h,
      eHardwareCompatibilityDisplay: g,
      bAutoFocus: y,
      fnOnClickOverride: b,
      bIsMarketingMessage: x,
      bPreferAssetWithoutOverride: S,
    } = e,
    C = Be(t, i),
    [T, E] = (0, K.useState)(!1),
    re = Le(),
    { data: O, isPending: k } = v(C),
    { data: A } = w(C),
    { data: j } = D(C),
    { data: oe } = M(),
    se = Re(C),
    N = (0, K.useRef)(null),
    [P, he] = (0, K.useState)(!1),
    F = o(),
    [I, we] = (0, K.useState)(!1);
  ((0, K.useEffect)(() => {
    if (!I) {
      E(!1);
      return;
    }
    let e = window.setTimeout(() => E(!0), 500);
    return () => window.clearTimeout(e);
  }, [I]),
    (0, K.useEffect)(() => {
      N.current && he(N.current.offsetWidth < 370);
    }, [N]));
  let Oe = (0, K.useMemo)(
      () => (u && O && Ce(O) ? { appid: be(O)[0] } : C),
      [u, C, O],
    ),
    { strStoreURL: L, snr: R } = ce(O, u);
  if (!O)
    return k
      ? (0, q.jsx)(St, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let z = O.included_appids?.length || 0,
    Ae = O.included_appids?.filter((e) => oe?.has(e))?.length || 0,
    Pe = O.item_type == 2 && !!A?.must_purchase_as_set,
    B = !m && z > 1,
    V = O.item_type == 1 && z == 1,
    H = O.item_type == 0 || V,
    U = V && O.appid,
    W = O.name || ``,
    G = _e(j, A),
    Ge = F || !j?.is_coming_soon || G,
    [qe, J] = de(h, g);
  return (0, q.jsxs)(l, {
    className: n({ [De]: !0, [void 0]: ee, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: s.PREFERRED_CHILD,
    autoFocus: y,
    navKey: `preview_widget_` + _(C),
    children: [
      (0, q.jsx)(xe, {
        appid: H && `appid` in C ? C.appid : void 0,
        children: (0, q.jsxs)(c, {
          onClick: x ? b : void 0,
          className: n({ [Me]: !0, [ue]: !0, [ae]: x }),
          ...Ue(O, re, F, !!u, void 0, b),
          preferredFocus: B,
          onFocusWithin: F ? we : void 0,
          children: [
            (0, q.jsx)(`div`, {
              className: n(pe),
              children: (0, q.jsx)(kt, {
                id: Oe,
                strURL: L,
                children: (0, q.jsxs)(`div`, {
                  className: ge,
                  children: [
                    (0, q.jsx)(Ve, { appids: se }),
                    (0, q.jsx)(He, {
                      id: C,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: S,
                    }),
                    (0, q.jsx)(ze, { id: C }),
                    (0, q.jsx)(ve, {
                      id: C,
                      active: C && T,
                      bIsHoverMode: !0,
                      eGrowOnActivate: F
                        ? void 0
                        : le.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, q.jsxs)(`div`, {
              className: n({ [ye]: !0, [ie]: B }),
              children: [
                !(!H || b) &&
                  (0, q.jsx)(ke, {
                    id: C,
                    classOverride: n(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: R,
                  }),
                (0, q.jsx)(`div`, {
                  className: Ie,
                  children: (0, q.jsx)(`a`, {
                    href: b ? void 0 : L,
                    target: r.IN_CLIENT ? void 0 : `_blank`,
                    onClick: b,
                    children: (0, q.jsx)(`div`, {
                      className: n(Ne, `StoreSaleWidgetTitle`),
                      children: W,
                    }),
                  }),
                }),
                !B && (0, q.jsx)(wt, { id: C }),
                (0, q.jsxs)(`div`, {
                  className: Fe,
                  ref: N,
                  children: [
                    H && (0, q.jsx)(At, { id: C }),
                    !B &&
                      !p &&
                      C &&
                      (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(Te, {
                            id: C,
                            bMinimizePlatforms: P,
                            bHideWindows: P,
                          }),
                          !!(qe && O.item_type == 0) &&
                            (0, q.jsx)(We, {
                              eHWCompat: J,
                              className: `tUIs-i3NWoU-`,
                              id: C,
                            }),
                        ],
                      }),
                  ],
                }),
                !B &&
                  te &&
                  C &&
                  (0, q.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, q.jsx)(me, { id: C }),
                  }),
                B &&
                  C &&
                  (0, q.jsx)(Ke, {
                    id: C,
                    bHideInLibraryApps: !Pe && O.item_type == 2 && Ae < z,
                  }),
                !!H && (0, q.jsx)(jt, { id: C }),
                b
                  ? (0, q.jsx)(`div`, {
                      className: Ee,
                      children: (0, q.jsx)(`div`, {
                        className: fe,
                        children: (0, q.jsx)(je, { id: C }),
                      }),
                    })
                  : (0, q.jsx)(q.Fragment, {
                      children:
                        f && H && U
                          ? (0, q.jsx)(ne, { appid: U, bIsMuted: !!T })
                          : (0, q.jsx)(Et, {
                              id: C,
                              bShowDemoButton: a,
                              bHidePrice: d,
                              bHideWishlistButton: Ge,
                              eHardwareCompatibilityDisplay: J,
                            }),
                    }),
                (0, q.jsx)(`div`, {
                  className: Se,
                  children: (0, q.jsx)(He, {
                    id: C,
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
function kt(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, q.jsxs)(R, { id: t, children: [r, ` `] })
    : (0, q.jsx)(`a`, { href: n, children: r });
}
function At(e) {
  let { id: t } = e,
    { data: n } = D(t);
  return n ? (0, q.jsx)(`div`, { className: I, children: Oe(n) }) : null;
}
function jt(e) {
  let { id: t } = e,
    { data: r } = v(t),
    { data: i } = w(t),
    { data: a } = b(t),
    { data: o } = M();
  if (!r || !a || !a.short_description || !o) return null;
  let s = i?.discount_pct || 0,
    c = r.included_appids?.length || 0,
    l = r.included_appids?.filter((e) => o?.has(e))?.length || 0,
    u = a.short_description,
    d = r.item_type == 1 && c == 1,
    p = r.item_type == 2 && !!i?.must_purchase_as_set;
  return (
    (r.item_type == 2 || (r.item_type == 1 && !d)) &&
      (u =
        !p && l > 0 && l < c
          ? h(`#Sale_Bundle_CompletePartialSet`, l, c)
          : s > 0
            ? h(`#Sale_BundleSave_WithDiscount`, s, c)
            : h(`#Sale_BundleSave`, c)),
    (0, q.jsx)(`div`, {
      className: n(F, `StoreSaleWidgetShortDesc`),
      children:
        u.startsWith(`#`) && u.indexOf(` `) == -1
          ? (0, q.jsx)(`span`, {
              className: oe,
              children: f(
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
var Mt = `yFKurY5xd-8-`,
  Nt = `x-jXNI-s184-`,
  Pt = `aG-OF9IYlE8-`,
  Ft = `Ef8xOk5PJbg-`,
  It = `RTkq2WI2bK4-`,
  Lt = `_4vRcmVJ4gN8-`,
  Rt = `eEhfnGythD0-`,
  zt = `qtB6DnXH-bs-`,
  Bt = `tF-0HvIRqgQ-`,
  Vt = `_0EeL7NnvnjU-`,
  Ht = `L-E-bGfH1Sw-`,
  Ut = `-pV6HCIaaqM-`,
  Wt = `MUbRKQFMT7E-`;
function Gt(e, n, r) {
  return {
    queryKey: Kt(r),
    enabled: !!r?.GID,
    queryFn: async () => {
      if (!r) return null;
      let i = r.appid
          ? await e.ensureQueryData(T(n, { appid: r.appid }))
          : null,
        a = await e.ensureQueryData(N(r.clanSteamID.GetAccountID(), e));
      if (r.appid) {
        if (i) {
          if (i.all_ages_screenshots && i.all_ages_screenshots.length > 0) {
            let e = Number(
              r.bOldAnnouncement
                ? r.AnnouncementGID
                : r.GID == null
                  ? 0
                  : r.GID,
            );
            return (
              (e %= i.all_ages_screenshots.length),
              `${t.STORE_ITEM_BASE_URL}${i.all_ages_screenshots[e].filename}`
            );
          }
        } else return ``;
      }
      return r.GetEventType() != 36 &&
        a &&
        ((a.is_creator_home && !a.is_ogg) || a.is_curator)
        ? (a.avatar_full_url ?? null)
        : null;
    },
  };
}
function Kt(e) {
  return [`useFallbackArtworkScreenshot`, e?.GID];
}
function qt(e, t, n, r = W.full, i = !0) {
  let a = V(),
    o = S();
  return H(Yt(a, o, e, t, n, r, i)).data ?? void 0;
}
function Jt(e, t, n, r = W.full, i = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, n, r, i];
}
function Yt(e, n, r, i, a, o = W.full, s = !0) {
  return {
    queryKey: Jt(r, i, a, o, s),
    enabled: !!r?.GID,
    initialData: () => Xt(r, i, a, o, s),
    queryFn: async () => {
      if (!r) return null;
      let c = Xt(r, i, a, o, s);
      if (c) return c;
      let l = await e.ensureQueryData(N(r.clanSteamID.GetAccountID(), e));
      if (i == `capsule`) {
        let i = r.appid;
        if (!i && l && ((l.is_creator_home && !l.is_ogg) || l.is_curator)) {
          if (r.jsondata?.referenced_appids?.length)
            i = r.jsondata.referenced_appids[0];
          else return l.avatar_full_url ?? null;
        }
        let a = await e.ensureQueryData(y(n, { appid: i }));
        return a
          ? (k(a, `main_capsule`) ?? null)
          : l?.avatar_full_url
            ? l.avatar_full_url
            : `${t.STORE_ITEM_BASE_URL}steam/apps/${i}/header.jpg`;
      }
      return i == `background` &&
        l &&
        ((l.is_creator_home && !l.is_ogg) || l.is_curator)
        ? (l.creator_page_bg_url ?? null)
        : await e.ensureQueryData(Gt(e, n, r));
    },
  };
}
function Xt(e, t, n, r = W.full, i = !0) {
  if (!e) return;
  let a = e.GetImageURL(t, n, r);
  if (a && a.trim().length > 0) return a;
  let o = p.GetELanguageFallback(n);
  if (n != o) {
    let n = e.GetImageURL(t, o, r);
    if (n && n.trim().length > 0) return n;
  }
  if (t == `capsule`) {
    let t = e.GetImageFromBeginningOfDescription(n, Number.MAX_VALUE);
    if (t && (i || m(t))) return t;
  }
}
export {
  Ot as _,
  Mt as a,
  Ft as c,
  zt as d,
  Rt as f,
  Ht as g,
  Ut as h,
  Vt as i,
  It as l,
  Wt as m,
  qt as n,
  Nt as o,
  Bt as p,
  Gt as r,
  Pt as s,
  Yt as t,
  Lt as u,
  Et as v,
};
